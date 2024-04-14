"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[79504],{15680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(96540);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),u=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),y=a,g=d["".concat(p,".").concat(y)]||d[y]||s[y]||l;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},20127:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=t(58168),a=(t(96540),t(15680));const l={id:"influxdb-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1InfluxDB\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528InfluxDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},o=void 0,i={unversionedId:"start/influxdb-init",id:"version-v1.4.x/start/influxdb-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1InfluxDB\u5b89\u88c5\u521d\u59cb\u5316",description:"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/start/influxdb-init.md",sourceDirName:"start",slug:"/start/influxdb-init",permalink:"/zh-cn/docs/v1.4.x/start/influxdb-init",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/start/influxdb-init.md",tags:[],version:"v1.4.x",frontMatter:{id:"influxdb-init",title:"\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\u670d\u52a1InfluxDB\u5b89\u88c5\u521d\u59cb\u5316",sidebar_label:"\u4f7f\u7528InfluxDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)"},sidebar:"docs",previous:{title:"\u4f7f\u7528GreptimeDB\u5b58\u50a8\u6307\u6807\u6570\u636e(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.4.x/start/greptime-init"},next:{title:"\u5143\u6570\u636e\u4f7f\u7528Mysql\u5b58\u50a8(\u53ef\u9009)",permalink:"/zh-cn/docs/v1.4.x/start/mysql-change"}},p={},u=[{value:"1. \u76f4\u63a5\u4f7f\u7528\u534e\u4e3a\u4e91\u670d\u52a1 GaussDB For Influx",id:"1-\u76f4\u63a5\u4f7f\u7528\u534e\u4e3a\u4e91\u670d\u52a1-gaussdb-for-influx",level:3},{value:"2. \u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5InfluxDB",id:"2-\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5influxdb",level:3},{value:"\u5728hertzbeat\u7684<code>application.yml</code>\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5",id:"\u5728hertzbeat\u7684applicationyml\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:3}],c={toc:u};function s(e){let{components:n,...t}=e;return(0,a.yg)("wrapper",(0,r.A)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("p",null,"HertzBeat\u7684\u5386\u53f2\u6570\u636e\u5b58\u50a8\u4f9d\u8d56\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u4efb\u9009\u5176\u4e00\u5b89\u88c5\u521d\u59cb\u5316\u5373\u53ef\uff0c\u4e5f\u53ef\u4e0d\u5b89\u88c5(\u6ce8\u610f\u26a0\ufe0f\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e)\n\u6211\u4eec\u63a8\u8350\u4f7f\u7528\u5e76\u957f\u671f\u652f\u6301VictoriaMetrics"),(0,a.yg)("p",null,"InfluxDB\u662f\u4e00\u4e2a\u7531InfluxData\u5f00\u53d1\u7684\u5f00\u6e90\u65f6\u5e8f\u578b\u6570\u636e\u5e93\uff0c\u4e13\u6ce8\u4e8e\u6d77\u91cf\u65f6\u5e8f\u6570\u636e\u7684\u9ad8\u6027\u80fd\u8bfb\u3001\u9ad8\u6027\u80fd\u5199\u3001\u9ad8\u6548\u5b58\u50a8\u4e0e\u5b9e\u65f6\u5206\u6790\u7b49\u3002 \u6ce8\u610f\u652f\u6301\u26a0\ufe0f 1.x\u7248\u672c\u3002   "),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u6ce8\u610f\u26a0\ufe0f \u65f6\u5e8f\u6570\u636e\u5e93\u5b89\u88c5\u914d\u7f6e\u4e3a\u53ef\u9009\u9879\uff0c\u4f46\u5f3a\u70c8\u5efa\u8bae\u751f\u4ea7\u73af\u5883\u914d\u7f6e\uff0c\u4ee5\u63d0\u4f9b\u66f4\u5b8c\u5584\u7684\u5386\u53f2\u56fe\u8868\u529f\u80fd\uff0c\u9ad8\u6027\u80fd\u548c\u7a33\u5b9a\u6027"),(0,a.yg)("br",{parentName:"p"}),"\n",(0,a.yg)("strong",{parentName:"p"},"\u26a0\ufe0f \u82e5\u4e0d\u914d\u7f6e\u65f6\u5e8f\u6570\u636e\u5e93\uff0c\u5219\u53ea\u4f1a\u7559\u6700\u8fd1\u4e00\u5c0f\u65f6\u5386\u53f2\u6570\u636e"),"   "),(0,a.yg)("h3",{id:"1-\u76f4\u63a5\u4f7f\u7528\u534e\u4e3a\u4e91\u670d\u52a1-gaussdb-for-influx"},"1. \u76f4\u63a5\u4f7f\u7528\u534e\u4e3a\u4e91\u670d\u52a1 GaussDB For Influx"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u5f00\u901a\u4f7f\u7528",(0,a.yg)("a",{parentName:"p",href:"https://www.huaweicloud.com/product/gaussdbforinflux.html"},"\u534e\u4e3a\u4e91\u4e91\u6570\u636e\u5e93 GaussDB For Influx")," ")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u83b7\u53d6\u4e91\u6570\u636e\u5e93\u5bf9\u5916\u66b4\u9732\u8fde\u63a5\u5730\u5740\uff0c\u8d26\u6237\u5bc6\u7801\u5373\u53ef")),(0,a.yg)("p",null,"\u26a0\ufe0f\u6ce8\u610f\u4e91\u6570\u636e\u5e93\u9ed8\u8ba4\u5f00\u542f\u4e86SSL\uff0c\u4e91\u6570\u636e\u5e93\u5730\u5740\u5e94\u4f7f\u7528 ",(0,a.yg)("inlineCode",{parentName:"p"},"https:")),(0,a.yg)("h3",{id:"2-\u901a\u8fc7docker\u65b9\u5f0f\u5b89\u88c5influxdb"},"2. \u901a\u8fc7Docker\u65b9\u5f0f\u5b89\u88c5InfluxDB"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u53ef\u53c2\u8003\u5b98\u65b9\u7f51\u7ad9",(0,a.yg)("a",{parentName:"p",href:"https://hub.docker.com/_/influxdb"},"\u5b89\u88c5\u6559\u7a0b"),"  "),(0,a.yg)("ol",{parentName:"blockquote"},(0,a.yg)("li",{parentName:"ol"},"\u4e0b\u8f7d\u5b89\u88c5Docker\u73af\u5883",(0,a.yg)("br",{parentName:"li"}),"Docker \u5de5\u5177\u81ea\u8eab\u7684\u4e0b\u8f7d\u8bf7\u53c2\u8003 ",(0,a.yg)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker\u5b98\u7f51\u6587\u6863"),"\u3002\n\u5b89\u88c5\u5b8c\u6bd5\u540e\u7ec8\u7aef\u67e5\u770bDocker\u7248\u672c\u662f\u5426\u6b63\u5e38\u8f93\u51fa\u3002",(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre"},"$ docker -v\nDocker version 20.10.12, build e91ed57\n"))),(0,a.yg)("li",{parentName:"ol"},"Docker\u5b89\u88c5InfluxDB 1.x  "))),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"$ docker run -p 8086:8086 \\\n      -v /opt/influxdb:/var/lib/influxdb \\\n      influxdb:1.8\n")),(0,a.yg)("p",null,"   ",(0,a.yg)("inlineCode",{parentName:"p"},"-v /opt/influxdb:/var/lib/influxdb")," \u4e3ainfluxdb\u6570\u636e\u76ee\u5f55\u672c\u5730\u6301\u4e45\u5316\u6302\u8f7d\uff0c\u9700\u5c06",(0,a.yg)("inlineCode",{parentName:"p"},"/opt/influxdb"),"\u66ff\u6362\u4e3a\u5b9e\u9645\u672c\u5730\u5b58\u5728\u7684\u76ee\u5f55",(0,a.yg)("br",{parentName:"p"}),"\n","\u4f7f\u7528",(0,a.yg)("inlineCode",{parentName:"p"},"$ docker ps"),"\u67e5\u770b\u6570\u636e\u5e93\u662f\u5426\u542f\u52a8\u6210\u529f"),(0,a.yg)("h3",{id:"\u5728hertzbeat\u7684applicationyml\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5"},"\u5728hertzbeat\u7684",(0,a.yg)("inlineCode",{parentName:"h3"},"application.yml"),"\u914d\u7f6e\u6587\u4ef6\u914d\u7f6e\u6b64\u6570\u636e\u5e93\u8fde\u63a5"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u914d\u7f6eHertzBeat\u7684\u914d\u7f6e\u6587\u4ef6\n\u4fee\u6539\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/dromara/hertzbeat/raw/master/script/application.yml"},"/script/application.yml"),(0,a.yg)("br",{parentName:"li"}),"\u6ce8\u610f\u26a0\ufe0fdocker\u5bb9\u5668\u65b9\u5f0f\u9700\u8981\u5c06application.yml\u6587\u4ef6\u6302\u8f7d\u5230\u4e3b\u673a\u672c\u5730,\u5b89\u88c5\u5305\u65b9\u5f0f\u89e3\u538b\u4fee\u6539\u4f4d\u4e8e ",(0,a.yg)("inlineCode",{parentName:"li"},"hertzbeat/config/application.yml")," \u5373\u53ef     ")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"\u4fee\u6539\u91cc\u9762\u7684",(0,a.yg)("inlineCode",{parentName:"strong"},"warehouse.store.jpa.enabled"),"\u53c2\u6570\u4e3a",(0,a.yg)("inlineCode",{parentName:"strong"},"false"),"\uff0c \u914d\u7f6e\u91cc\u9762\u7684",(0,a.yg)("inlineCode",{parentName:"strong"},"warehouse.store.influxdb"),"\u6570\u636e\u6e90\u53c2\u6570\uff0cURL\u8d26\u6237\u5bc6\u7801\uff0c\u5e76\u542f\u7528",(0,a.yg)("inlineCode",{parentName:"strong"},"enabled"),"\u4e3a",(0,a.yg)("inlineCode",{parentName:"strong"},"true")),"    "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"warehouse:\n   store:\n      # \u5173\u95ed\u9ed8\u8ba4JPA\n      jpa:\n         enabled: false\n      influxdb:\n         enabled: true\n         server-url: http://localhost:8086\n         username: root\n         password: root\n         expire-time: '30d'\n         replication: 1\n")),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"\u91cd\u542f HertzBeat")),(0,a.yg)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"\u65f6\u5e8f\u6570\u636e\u5e93InfluxDb, IoTDB\u548cTDengine\u662f\u5426\u90fd\u9700\u8981\u914d\u7f6e\uff0c\u80fd\u4e0d\u80fd\u90fd\u7528  ")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"\u4e0d\u9700\u8981\u90fd\u914d\u7f6e\uff0c\u4efb\u9009\u5176\u4e00\u5373\u53ef\uff0c\u7528enable\u53c2\u6570\u63a7\u5236\u5176\u662f\u5426\u4f7f\u7528\uff0c\u4e5f\u53ef\u90fd\u4e0d\u5b89\u88c5\u914d\u7f6e\uff0c\u53ea\u5f71\u54cd\u5386\u53f2\u56fe\u8868\u6570\u636e\u3002")))}s.isMDXComponent=!0}}]);