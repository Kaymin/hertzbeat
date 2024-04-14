"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[47150],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=c(n),g=o,u=y["".concat(p,".").concat(g)]||y[g]||s[g]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(58168),o=(n(96540),n(15680));const a={id:"iotdb-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1IoTDB\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528IoTDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},i=void 0,l={unversionedId:"start/iotdb-init",id:"version-v1.1.x/start/iotdb-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1IoTDB\u5b89\u88c5\u521d\u59cb\u5316",description:"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93 IoTDB \u6216 TDengine\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)",source:"@site/versioned_docs/version-v1.1.x/start/iotdb-init.md",sourceDirName:"start",slug:"/start/iotdb-init",permalink:"/zh-cn/docs/v1.1.x/start/iotdb-init",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.1.x/start/iotdb-init.md",tags:[],version:"v1.1.x",frontMatter:{id:"iotdb-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1IoTDB\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528IoTDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},sidebar:"docs",previous:{title:"Rainbond\u65b9\u5f0f\u90e8\u7f72",permalink:"/zh-cn/docs/v1.1.x/start/rainbond-deploy"},next:{title:"\u4f7f\u7528TDengine\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.1.x/start/tdengine-init"}},p={},c=[{value:"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5IoTDB",id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5iotdb",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,o.yg)("wrapper",(0,r.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93 IoTDB \u6216 TDengine\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)   "),(0,o.yg)("p",null,"Apache IoTDB\u662f\u4e00\u4f53\u5316\u6536\u96c6\u3001\u5b58\u50a8\u3001\u7ba1\u7406\u4e0e\u5206\u6790\u7269\u8054\u7f51\u65f6\u5e8f\u6570\u636e\u7684\u8f6f\u4ef6\u7cfb\u7edf\uff0c\u6211\u4eec\u4f7f\u7528\u5176\u5b58\u50a8\u5206\u6790\u91c7\u96c6\u5230\u7684\u76d1\u63a7\u6307\u6807\u5386\u53f2\u6570\u636e\u3002\u652f\u6301V0.12 - V0.13\u7248\u672c\uff0c\u63a8\u8350\u4f7f\u7528V0.13.*\u7248\u672c\u3002"),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u26a0\ufe0f \u65f6\u5e8f\u6570\u636e\u5e93\u5b89\u88c5\u914d\u7f6e\u4e3a\u53ef\u9009\u9879\uff0c\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e\uff0c\u4ee5\u63d0\u4f9b\u66f4\u5b8c\u5584\u7684\u5386\u53f2\u56fe\u8868\u529f\u80fd\u548c\u9ad8\u6027\u80fd")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u5982\u679c\u60a8\u5df2\u6709IoTDB\u73af\u5883\uff0c\u53ef\u76f4\u63a5\u8df3\u5230YML\u914d\u7f6e\u90a3\u4e00\u6b65\u3002")),(0,o.yg)("h3",{id:"\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5iotdb"},"\u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5IoTDB"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"\u53ef\u53c2\u8003\u5b98\u65b9\u7f51\u7ad9",(0,o.yg)("a",{parentName:"p",href:"https://iotdb.apache.org/zh/UserGuide/V0.13.x/QuickStart/WayToGetIoTDB.html"},"\u5b89\u88c5\u6559\u7a0b"),"  "),(0,o.yg)("ol",{parentName:"blockquote"},(0,o.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,o.yg)("br",{parentName:"li"}),"Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,o.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002",(0,o.yg)("pre",{parentName:"li"},(0,o.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,o.yg)("li",{parentName:"ol"},"Docker\u5b89\u88c5IoTDB  "))),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d -p 6667:6667 -p 31999:31999 -p 8181:8181 \\\n    -v /opt/iotdb/data:/iotdb/data \\ \n    --name iotdb \\\n    apache/iotdb:0.13.3-node\n")),(0,o.yg)("p",null,"   ",(0,o.yg)("inlineCode",{parentName:"p"},"-v /opt/iotdb/data:/iotdb/data")," \u4e3atdengine\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,o.yg)("inlineCode",{parentName:"p"},"/iotdb/data"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55\n\u4f7f\u7528",(0,o.yg)("inlineCode",{parentName:"p"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,o.yg)("ol",{start:3},(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u5728hertzbeat\u7684",(0,o.yg)("inlineCode",{parentName:"p"},"application.yml"),"\u914d\u7f6e\u6587\u4ef6\u914d\u7f6eIoTDB\u6570\u636e\u5e93\u8fde\u63a5   "),(0,o.yg)("p",{parentName:"li"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6",(0,o.yg)("br",{parentName:"p"}),"\n","\u4fee\u6539\u4f4d\u4e8e ",(0,o.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6",(0,o.yg)("br",{parentName:"p"}),"\n","\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730\uff0c\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,o.yg)("inlineCode",{parentName:"p"},"hertzbeat/config/application.yml")," \u5373\u53ef     "))),(0,o.yg)("p",null,(0,o.yg)("strong",{parentName:"p"},"\u4fee\u6539\u91cc\u9762\u7684",(0,o.yg)("inlineCode",{parentName:"strong"},"warehouse.store.jpa.enabled"),"\u53c2\u6570\u4e3a",(0,o.yg)("inlineCode",{parentName:"strong"},"false"),"\uff0c \u914d\u7f6e",(0,o.yg)("inlineCode",{parentName:"strong"},"warehouse.store.iot-db"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cHOST\u8d26\u6237\u5bc6\u7801\u7b49\uff0c\u5e76\u542f\u7528",(0,o.yg)("inlineCode",{parentName:"strong"},"enabled"),"\u4e3a",(0,o.yg)("inlineCode",{parentName:"strong"},"true")),"    "),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n  store:\n    # \u5173\u95ed\u9ed8\u8ba4JPA\n    jpa:\n      enabled: false\n    # \u542f\u7528IotDB\n    iot-db:\n      enabled: true\n      host: 127.0.0.1\n      rpc-port: 6667\n      username: root\n      password: root\n      # V_O_12 || V_0_13\n      version: V_0_13\n      # if iotdb version >= 0.13 use default queryTimeoutInMs = -1; else use default queryTimeoutInMs = 0\n      query-timeout-in-ms: -1\n      # \u6570\u636e\u5b58\u50a8\u65f6\u95f4\uff1a\u9ed8\u8ba4'7776000000'\uff0890\u5929,\u5355\u4f4d\u4e3a\u6beb\u79d2,-1\u4ee3\u8868\u6c38\u4e0d\u8fc7\u671f\uff09\n      expire-time: '7776000000'\n")),(0,o.yg)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.yg)("ol",null,(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u65f6\u5e8f\u6570\u636e\u5e93IoTDB\u548cTDengine\u662f\u5426\u90fd\u9700\u8981\u914d\u7f6e\uff0c\u80fd\u4e0d\u80fd\u90fd\u7528"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981\u90fd\u914d\u7f6e\uff0c\u4efb\u9009\u5176\u4e00\u5373\u53ef\uff0c\u7528enable\u53c2\u6570\u63a7\u5236\u5176\u662f\u5426\u4f7f\u7528\uff0c\u4e5f\u53ef\u90fd\u4e0d\u5b89\u88c5\u914d\u7f6e\uff0c\u53ea\u5f71\u54cd\u5386\u53f2\u56fe\u8868\u6570\u636e\u3002"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u76d1\u63a7\u9875\u9762\u5386\u53f2\u56fe\u8868\u4e0d\u663e\u793a\uff0c\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"\u5982\u5f39\u7a97\u6240\u793a\uff0c\u5386\u53f2\u56fe\u8868\u5c55\u793a\u7684\u524d\u63d0\u662f\u9700\u8981\u5b89\u88c5\u914d\u7f6ehertzbeat\u7684\u4f9d\u8d56\u670d\u52a1 - IotDB\u6570\u636e\u5e93\u6216TDengine\u6570\u636e\u5e93"))),(0,o.yg)("li",{parentName:"ol"},(0,o.yg)("p",{parentName:"li"},"\u5b89\u88c5\u914d\u7f6e\u4e86IotDB\u6570\u636e\u5e93\uff0c\u4f46\u9875\u9762\u4f9d\u65e7\u663e\u793a\u5f39\u51fa ","[\u65e0\u6cd5\u63d0\u4f9b\u5386\u53f2\u56fe\u8868\u6570\u636e\uff0c\u8bf7\u914d\u7f6e\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93]"," "),(0,o.yg)("blockquote",{parentName:"li"},(0,o.yg)("p",{parentName:"blockquote"},"\u8bf7\u68c0\u67e5\u914d\u7f6e\u53c2\u6570\u662f\u5426\u6b63\u786e\niot-db enable\u662f\u5426\u8bbe\u7f6e\u4e3atrue\n\u6ce8\u610f\u26a0\ufe0f\u82e5hertzbeat\u548cIotDB\u90fd\u4e3adocker\u5bb9\u5668\u5728\u540c\u4e00\u4e3b\u673a\u4e0b\u542f\u52a8\uff0c\u5bb9\u5668\u4e4b\u95f4\u9ed8\u8ba4\u4e0d\u80fd\u7528127.0.0.1\u901a\u8baf\uff0c\u6539\u4e3a\u4e3b\u673aIP\n\u53ef\u6839\u636elogs\u76ee\u5f55\u4e0b\u542f\u52a8\u65e5\u5fd7\u6392\u67e5")))))}s.isMDXComponent=!0}}]);