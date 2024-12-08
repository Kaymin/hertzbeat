/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package org.apache.hertzbeat.common.entity.arrow;

import com.google.common.collect.Maps;
import lombok.extern.slf4j.Slf4j;
import org.apache.arrow.memory.BufferAllocator;
import org.apache.arrow.memory.RootAllocator;
import org.apache.arrow.vector.VarCharVector;
import org.apache.arrow.vector.VectorSchemaRoot;
import org.apache.arrow.vector.ipc.ArrowStreamWriter;
import org.apache.arrow.vector.types.pojo.ArrowType;
import org.apache.arrow.vector.types.pojo.Field;
import org.apache.arrow.vector.types.pojo.FieldType;
import org.apache.arrow.vector.types.pojo.Schema;
import org.apache.commons.lang3.StringUtils;
import org.apache.hertzbeat.common.constants.CommonConstants;
import org.apache.hertzbeat.common.constants.MetricDataFieldConstants;
import org.apache.hertzbeat.common.entity.job.Metrics;
import org.apache.hertzbeat.common.util.CommonUtil;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.nio.channels.Channels;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

/**
 */
@Slf4j
public class ArrowVectorWriterImpl implements ArrowVectorWriter {
    private BufferAllocator bufferAllocator;
    private VectorSchemaRoot schemaRoot;
    private Map<VarCharVector, AtomicInteger> vectorOffsetMap;
    private final AtomicInteger maxRowCount = new AtomicInteger(0);

    public ArrowVectorWriterImpl(Collection<String> fields) {
        initResource(fields.stream()
                .map(field -> new Field(field, new FieldType(true, new ArrowType.Utf8(), null, null), null))
                .collect(Collectors.toList()));
    }

    public ArrowVectorWriterImpl(List<Metrics.Field> fields) {
        initResource(buildFieldList(fields));
    }

    public ArrowVectorWriterImpl() {
        initResource(new ArrayList<>());
    }

    @Override
    public void addField(Metrics.Field field) {
        this.schemaRoot = this.schemaRoot.addVector(this.schemaRoot.getFieldVectors().size(), new VarCharVector(buildField(field), this.bufferAllocator));
    }

    @Override
    public void setValue(String fieldName, String value) {
        Optional<VarCharVector> vectorOptional = Optional.ofNullable((VarCharVector) schemaRoot.getVector(fieldName));
        if (vectorOptional.isEmpty()) {
            return;
        }

        final VarCharVector varCharVector = vectorOptional.get();
        final AtomicInteger indexCounter = this.vectorOffsetMap.computeIfAbsent(varCharVector, v -> new AtomicInteger(0));
        setValueSafely(varCharVector, indexCounter, value);
    }

    @Override
    public void setNull(String fieldName) {
        setValue(fieldName, null);
    }

    @Override
    public byte[] toByteArray() {
        this.schemaRoot.setRowCount(maxRowCount.get());

        try (ByteArrayOutputStream out = new ByteArrayOutputStream();
             ArrowStreamWriter writer = new ArrowStreamWriter(schemaRoot, null, Channels.newChannel(out))) {
            writer.start();
            writer.writeBatch();
            writer.end();

            return out.toByteArray();
        } catch (IOException e) {
            log.error("Arrow vector to byte arr failed: {}", CommonUtil.getMessageFromThrowable(e), e);
        }

        return new byte[0];
    }

    @Override
    public boolean isEmpty() {
        return this.maxRowCount.get() <= 0;
    }

    @Override
    public void close() {
        this.schemaRoot.close();
        this.bufferAllocator.close();
    }

    private void setValueSafely(VarCharVector vector, AtomicInteger indexCounter, String value) {
        if (vector.getValueCapacity() <= 0) {
            vector.allocateNew(3);
        }

        if (StringUtils.isBlank(value)) {
            vector.setSafe(indexCounter.getAndIncrement(), CommonConstants.NULL_VALUE.getBytes(StandardCharsets.UTF_8));
        } else {
            vector.setSafe(indexCounter.getAndIncrement(), value.getBytes(StandardCharsets.UTF_8));
        }

        if (indexCounter.get() > maxRowCount.get()) {
            maxRowCount.set(indexCounter.get());
        }
    }

    private List<Field> buildFieldList(List<Metrics.Field> fields) {
        return fields.stream()
                .map(ArrowVectorWriterImpl::buildField)
                .collect(Collectors.toList());
    }

    private static Field buildField(Metrics.Field field) {
        Map<String, String> metadata = Maps.newHashMapWithExpectedSize(3);
        metadata.put(MetricDataFieldConstants.TYPE, String.valueOf(field.getType()));
        metadata.put(MetricDataFieldConstants.LABEL, String.valueOf(field.isLabel()));
        if (field.getUnit() != null) {
            metadata.put(MetricDataFieldConstants.UNIT, field.getUnit());
        }
        return new Field(field.getField(), new FieldType(true, new ArrowType.Utf8(), null, metadata), null);
    }

    private void initResource(List<Field> fieldList) {
        Schema schema = new Schema(fieldList);

        this.bufferAllocator = new RootAllocator();
        this.schemaRoot = VectorSchemaRoot.create(schema, bufferAllocator);
        this.vectorOffsetMap = new HashMap<>();
    }
}
