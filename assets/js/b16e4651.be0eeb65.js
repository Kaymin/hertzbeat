"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[6019],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>u});var a=n(96540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,h=c["".concat(l,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},35989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(58168),r=(n(96540),n(15680));const o={id:"extend-tutorial",title:"Quick Tutorial Customize and adapt a monitoring based on HTTP protocol",sidebar_label:"Tutorial Case"},i=void 0,s={unversionedId:"advanced/extend-tutorial",id:"advanced/extend-tutorial",title:"Quick Tutorial Customize and adapt a monitoring based on HTTP protocol",description:"Through this tutorial, we describe step by step how to customize and adapt a monitoring type based on the http protocol under the hertzbeat monitoring tool.",source:"@site/docs/advanced/extend-tutorial.md",sourceDirName:"advanced",slug:"/advanced/extend-tutorial",permalink:"/docs/advanced/extend-tutorial",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/advanced/extend-tutorial.md",tags:[],version:"current",frontMatter:{id:"extend-tutorial",title:"Quick Tutorial Customize and adapt a monitoring based on HTTP protocol",sidebar_label:"Tutorial Case"},sidebar:"docs",previous:{title:"Custom Monitoring",permalink:"/docs/advanced/extend-point"},next:{title:"HTTP Protocol Custom Monitoring",permalink:"/docs/advanced/extend-http"}},l={},p=[{value:"HTTP protocol parses the general response structure to obtain metrics data",id:"http-protocol-parses-the-general-response-structure-to-obtain-metrics-data",level:3},{value:"Add Monitoring Template Yml",id:"add-monitoring-template-yml",level:3},{value:"The system page adds the monitoring of <code>hertzbeat</code> monitoring type",id:"the-system-page-adds-the-monitoring-of-hertzbeat-monitoring-type",level:3},{value:"Set threshold alarm notification",id:"set-threshold-alarm-notification",level:3},{value:"over!",id:"over",level:4}],d={toc:p};function m(e){let{components:t,...o}=e;return(0,r.yg)("wrapper",(0,a.A)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Through this tutorial, we describe step by step how to customize and adapt a monitoring type based on the http protocol under the hertzbeat monitoring tool."),(0,r.yg)("p",null,"Before reading this tutorial, we hope that you are familiar with how to customize types, metrics, protocols, etc. from ",(0,r.yg)("a",{parentName:"p",href:"extend-point"},"Custom Monitoring")," and ",(0,r.yg)("a",{parentName:"p",href:"extend-http"},"Http Protocol Customization"),"."),(0,r.yg)("h3",{id:"http-protocol-parses-the-general-response-structure-to-obtain-metrics-data"},"HTTP protocol parses the general response structure to obtain metrics data"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"In many scenarios, we need to monitor the provided HTTP API interface and obtain the index value returned by the interface. In this article, we use the http custom protocol to parse our common http interface response structure, and obtain the fields in the returned body as metric data.")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n   "code": 200,\n   "msg": "success",\n   "data": {}\n}\n\n')),(0,r.yg)("p",null,"As above, usually our background API interface will design such a general return. The same is true for the background of the hertzbeat system. Today, we will use the hertzbeat API as an example, add a new monitoring type ",(0,r.yg)("strong",{parentName:"p"},"hertzbeat"),", and monitor and collect its system summary statistics API\n",(0,r.yg)("inlineCode",{parentName:"p"},"http://localhost:1157/api/summary"),", the response data is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},'{\n   "msg": null,\n   "code": 0,\n   "data": {\n     "apps": [\n       {\n         "category": "service",\n         "app": "jvm",\n         "status": 0,\n         "size": 2,\n         "availableSize": 0,\n         "unManageSize": 2,\n         "unAvailableSize": 0,\n         "unReachableSize": 0\n       },\n       {\n         "category": "service",\n         "app": "website",\n         "status": 0,\n         "size": 2,\n         "availableSize": 0,\n         "unManageSize": 2,\n         "unAvailableSize": 0,\n         "unReachableSize": 0\n       }\n     ]\n   }\n}\n')),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"This time we get the metrics data such as ",(0,r.yg)("inlineCode",{parentName:"strong"},"category"),", ",(0,r.yg)("inlineCode",{parentName:"strong"},"app"),", ",(0,r.yg)("inlineCode",{parentName:"strong"},"status"),", ",(0,r.yg)("inlineCode",{parentName:"strong"},"size"),", ",(0,r.yg)("inlineCode",{parentName:"strong"},"availableSize")," under the app. ")),(0,r.yg)("h3",{id:"add-monitoring-template-yml"},"Add Monitoring Template Yml"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"HertzBeat Dashboard")," -> ",(0,r.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,r.yg)("strong",{parentName:"p"},"New Template")," -> ",(0,r.yg)("strong",{parentName:"p"},"Config Monitoring Template Yml")," -> ",(0,r.yg)("strong",{parentName:"p"},"Save and Apply")," -> ",(0,r.yg)("strong",{parentName:"p"},"Add A Monitoring with The New Monitoring Type")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"We define all monitoring collection types (mysql,jvm,k8s) as yml monitoring templates, and users can import these templates to support corresponding types of monitoring.")),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Monitoring template is used to define ",(0,r.yg)("em",{parentName:"p"},"the name of monitoring type(international), request parameter mapping, index information, collection protocol configuration information"),", etc.")),(0,r.yg)("p",null,"Here we define a custom monitoring type ",(0,r.yg)("inlineCode",{parentName:"p"},"app")," named ",(0,r.yg)("inlineCode",{parentName:"p"},"hertzbeat")," which use the HTTP protocol to collect data."),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"Monitoring Templates")," -> ",(0,r.yg)("strong",{parentName:"p"},"Config New Monitoring Template Yml")," -> ",(0,r.yg)("strong",{parentName:"p"},"Save and Apply")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"# The monitoring type category\uff1aservice-application service monitoring db-database monitoring custom-custom monitoring os-operating system monitoring\ncategory: custom\n# The monitoring type eg: linux windows tomcat mysql aws...\napp: hertzbeat\n# The monitoring i18n name\nname:\n  zh-CN: HertzBeat\u76d1\u63a7\u7cfb\u7edf\n  en-US: HertzBeat Monitor\n# Input params define for monitoring(render web ui by the definition)\nparams:\n  # field-param field key\n  - field: host\n    # name-param field display i18n name\n    name:\n      zh-CN: \u4e3b\u673aHost\n      en-US: Host\n    # type-param field type(most mapping the html input type)\n    type: host\n    # required-true or false\n    required: true\n  # field-param field key\n  - field: port\n    # name-param field display i18n name\n    name:\n      zh-CN: \u7aef\u53e3\n      en-US: Port\n    # type-param field type(most mapping the html input type)\n    type: number\n    # when type is number, range is required\n    range: '[0,65535]'\n    # required-true or false\n    required: true\n    # default value\n    defaultValue: 1157\n  - field: ssl\n    name:\n      zh-CN: \u542f\u7528HTTPS\n      en-US: HTTPS\n    type: boolean\n    required: true\n  - field: timeout\n    name:\n      zh-CN: \u8d85\u65f6\u65f6\u95f4(ms)\n      en-US: Timeout(ms)\n    type: number\n    required: false\n    hide: true\n  - field: authType\n    name:\n      zh-CN: \u8ba4\u8bc1\u65b9\u5f0f\n      en-US: Auth Type\n    type: radio\n    required: false\n    hide: true\n    options:\n      - label: Basic Auth\n        value: Basic Auth\n      - label: Digest Auth\n        value: Digest Auth\n  - field: username\n    name:\n      zh-CN: \u7528\u6237\u540d\n      en-US: Username\n    type: text\n    limit: 20\n    required: false\n    hide: true\n  - field: password\n    name:\n      zh-CN: \u5bc6\u7801\n      en-US: Password\n    type: password\n    required: false\n    hide: true\nmetrics:\n  # the first metrics summary\n  # attention: Built-in monitoring metrics contains (responseTime - Response time)\n  - name: summary\n    # metrics scheduling priority(0->127)->(high->low), metrics with the same priority will be scheduled in parallel\n    # priority 0's metrics is availability metrics, it will be scheduled first, only availability metrics collect success will the scheduling continue\n    priority: 0\n    # collect metrics content\n    fields:\n      # metrics content contains field-metric name, type-metric type:0-number,1-string, label-if is metrics label, unit-metric unit('%','ms','MB')\n      - field: app\n        type: 1\n        label: true\n      - field: category\n        type: 1\n      - field: status\n        type: 0\n      - field: size\n        type: 0\n      - field: availableSize\n        type: 0\n    #  the protocol used for monitoring, eg: sql, ssh, http, telnet, wmi, snmp, sdk, we use HTTP protocol here\n    protocol: http\n    # the config content when protocol is http\n    http:\n      # http host: ipv4 ipv6 domain\n      host: ^_^host^_^\n      # http port\n      port: ^_^port^_^\n      # http url, we don't need to enter a parameter here, just set the fixed value to /api/summary\n      url: /api/summary\n      timeout: ^_^timeout^_^\n      # http method: GET POST PUT DELETE PATCH, default fixed value is GET\n      method: GET\n      # if enabled https, default value is false\n      ssl: ^_^ssl^_^\n      # http auth\n      authorization:\n        # http auth type: Basic Auth, Digest Auth, Bearer Token\n        type: ^_^authType^_^\n        basicAuthUsername: ^_^username^_^\n        basicAuthPassword: ^_^password^_^\n        digestAuthUsername: ^_^username^_^\n        digestAuthPassword: ^_^password^_^\n      # http response data parse type: default-hertzbeat rule, jsonpath-jsonpath script, website-for website monitoring, we use jsonpath to parse response data here\n      parseType: jsonPath\n      parseScript: '$.data.apps.*'\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"The addition is complete, now we restart the hertzbeat system. We can see that the system page has added a ",(0,r.yg)("inlineCode",{parentName:"strong"},"hertzbeat")," monitoring type. ")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(8393).A,width:"3840",height:"1724"})),(0,r.yg)("h3",{id:"the-system-page-adds-the-monitoring-of-hertzbeat-monitoring-type"},"The system page adds the monitoring of ",(0,r.yg)("inlineCode",{parentName:"h3"},"hertzbeat")," monitoring type"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"We click Add ",(0,r.yg)("inlineCode",{parentName:"p"},"HertzBeat Monitoring Tool"),", configure monitoring IP, port, collection cycle, account password in advanced settings, etc., click OK to add monitoring.")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(43250).A,width:"1921",height:"860"})),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(92251).A,width:"1922",height:"857"})),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"After a certain period of time (depending on the collection cycle), we can see the specific metric data and historical charts in the monitoring details!")),(0,r.yg)("p",null,(0,r.yg)("img",{src:n(82308).A,width:"1922",height:"860"})),(0,r.yg)("h3",{id:"set-threshold-alarm-notification"},"Set threshold alarm notification"),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"Next, we can set the threshold normally. After the alarm is triggered, we can view it in the alarm center, add a new recipient, set alarm notification, etc. Have Fun!!!")),(0,r.yg)("hr",null),(0,r.yg)("h4",{id:"over"},"over!"),(0,r.yg)("p",null,"This is the end of the practice of custom monitoring of the HTTP protocol. The HTTP protocol also has other parameters such as headers and params. We can define it like postman, and the playability is also very high!"),(0,r.yg)("p",null,"If you think hertzbeat is a good open source project, please star us on GitHub Gitee, thank you very much. Thanks for the old iron support. Refill!"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"github: ",(0,r.yg)("a",{parentName:"strong",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat"))),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"gitee: ",(0,r.yg)("a",{parentName:"strong",href:"https://gitee.com/dromara/hertzbeat"},"https://gitee.com/dromara/hertzbeat"))))}m.isMDXComponent=!0},8393:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-1-2ef7a26379015bea268420811e822d18.png"},43250:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-2-cbd473f82a666e7562d932d8eeaccc57.png"},92251:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-3-8cdb9ddf2d9e2e7b469eb4082c0f9f13.png"},82308:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/extend-http-example-4-5e7e7c30cdfbd310c653ede5ea72f622.png"}}]);