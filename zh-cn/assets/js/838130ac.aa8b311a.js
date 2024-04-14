"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[82636],{15680:(t,e,a)=>{a.d(e,{xA:()=>d,yg:()=>m});var n=a(96540);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function g(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var y=n.createContext({}),i=function(t){var e=n.useContext(y),a=e;return t&&(a="function"==typeof t?t(e):g(g({},e),t)),a},d=function(t){var e=i(t.components);return n.createElement(y.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,y=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),o=i(a),m=r,N=o["".concat(y,".").concat(m)]||o[m]||u[m]||l;return a?n.createElement(N,g(g({ref:e},d),{},{components:a})):n.createElement(N,g({ref:e},d))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,g=new Array(l);g[0]=o;var p={};for(var y in e)hasOwnProperty.call(e,y)&&(p[y]=e[y]);p.originalType=t,p.mdxType="string"==typeof t?t:r,g[1]=p;for(var i=2;i<l;i++)g[i]=a[i];return n.createElement.apply(null,g)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},6943:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>y,contentTitle:()=>g,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>i});var n=a(58168),r=(a(96540),a(15680));const l={id:"spring_gateway",Title:"\u76d1\u63a7 Spring Gateway",sidebar_label:"Spring Gateway",keywords:["\u5f00\u6e90\u76d1\u63a7\u5de5\u5177","\u5f00\u6e90 Spring Gateway \u76d1\u63a7\u5de5\u5177","\u76d1\u63a7 Spring Gateway \u6307\u6807"]},g=void 0,p={unversionedId:"help/spring_gateway",id:"version-v1.4.x/help/spring_gateway",title:"spring_gateway",description:"\u6536\u96c6\u548c\u76d1\u63a7 SpringBoot Actuator \u63d0\u4f9b\u7684\u5e38\u89c4\u6027\u80fd\u6307\u6807\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/help/spring_gateway.md",sourceDirName:"help",slug:"/help/spring_gateway",permalink:"/zh-cn/docs/v1.4.x/help/spring_gateway",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/i18n/zh-cn/docusaurus-plugin-content-docs/version-v1.4.x/help/spring_gateway.md",tags:[],version:"v1.4.x",frontMatter:{id:"spring_gateway",Title:"\u76d1\u63a7 Spring Gateway",sidebar_label:"Spring Gateway",keywords:["\u5f00\u6e90\u76d1\u63a7\u5de5\u5177","\u5f00\u6e90 Spring Gateway \u76d1\u63a7\u5de5\u5177","\u76d1\u63a7 Spring Gateway \u6307\u6807"]},sidebar:"docs",previous:{title:"ActiveMQ\u6d88\u606f\u4e2d\u95f4\u4ef6",permalink:"/zh-cn/docs/v1.4.x/help/activemq"},next:{title:"Spark Monitor",permalink:"/zh-cn/docs/v1.4.x/help/spark"}},y={},i=[{value:"\u76d1\u63a7\u524d\u64cd\u4f5c",id:"\u76d1\u63a7\u524d\u64cd\u4f5c",level:2},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",level:3},{value:"\u91c7\u96c6\u6307\u6807",id:"\u91c7\u96c6\u6307\u6807",level:3},{value:"\u6307\u6807\u6536\u96c6: \u5065\u5eb7\u72b6\u6001",id:"\u6307\u6807\u6536\u96c6-\u5065\u5eb7\u72b6\u6001",level:4},{value:"\u6307\u6807\u6536\u96c6: \u73af\u5883\u4fe1\u606f",id:"\u6307\u6807\u6536\u96c6-\u73af\u5883\u4fe1\u606f",level:4},{value:"\u6307\u6807\u6536\u96c6: \u7ebf\u7a0b\u4fe1\u606f",id:"\u6307\u6807\u6536\u96c6-\u7ebf\u7a0b\u4fe1\u606f",level:4},{value:"\u6307\u6807\u6536\u96c6: \u5185\u5b58\u4f7f\u7528\u60c5\u51b5",id:"\u6307\u6807\u6536\u96c6-\u5185\u5b58\u4f7f\u7528\u60c5\u51b5",level:4},{value:"\u6307\u6807\u6536\u96c6: \u8def\u7531\u4fe1\u606f",id:"\u6307\u6807\u6536\u96c6-\u8def\u7531\u4fe1\u606f",level:4}],d={toc:i};function u(t){let{components:e,...a}=t;return(0,r.yg)("wrapper",(0,n.A)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},"\u6536\u96c6\u548c\u76d1\u63a7 SpringBoot Actuator \u63d0\u4f9b\u7684\u5e38\u89c4\u6027\u80fd\u6307\u6807\u3002")),(0,r.yg)("h2",{id:"\u76d1\u63a7\u524d\u64cd\u4f5c"},"\u76d1\u63a7\u524d\u64cd\u4f5c"),(0,r.yg)("p",null,"\u5982\u679c\u60a8\u60f3\u4f7f\u7528\u6b64\u76d1\u63a7\u7c7b\u578b\u76d1\u63a7 'Spring Gateway' \u7684\u4fe1\u606f\uff0c\u60a8\u9700\u8981\u96c6\u6210\u60a8\u7684 SpringBoot \u5e94\u7528\u7a0b\u5e8f\u5e76\u542f\u7528 SpringBoot Actuator\u3002"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"1\u3001\u6dfb\u52a0 POM .XML \u4f9d\u8d56:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-actuator</artifactId>\n</dependency>\n")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"2. \u4fee\u6539 YML \u914d\u7f6e\u4ee5\u66b4\u9732\u5ea6\u91cf\u63a5\u53e3:")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"management:\n  endpoint:\n    gateway:\n      enabled: true # default value\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n    enabled-by-default: on\n")),(0,r.yg)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u53c2\u6570\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u4e3b\u673a"),(0,r.yg)("td",{parentName:"tr",align:null},"\u88ab\u76d1\u63a7\u7684\u76ee\u6807 IPV4\u3001IPV6 \u6216\u57df\u540d\u3002\u6ce8\u610f\u26a0\ufe0f\u4e0d\u8981\u5305\u542b\u534f\u8bae\u5934\uff08\u4f8b\u5982\uff1ahttps://\uff0chttp://\uff09\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u540d\u79f0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6807\u8bc6\u6b64\u76d1\u63a7\u7684\u540d\u79f0\uff0c\u9700\u8981\u4fdd\u8bc1\u552f\u4e00\u6027\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u636e\u5e93\u63d0\u4f9b\u7684\u9ed8\u8ba4\u7aef\u53e3\u4e3a 8080\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u542f\u7528 HTTPS"),(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u901a\u8fc7 HTTPS \u8bbf\u95ee\u7f51\u7ad9\uff0c\u8bf7\u6ce8\u610f\u26a0\ufe0f\u5f53\u542f\u7528 HTTPS \u65f6\uff0c\u9700\u8981\u5c06\u9ed8\u8ba4\u7aef\u53e3\u66f4\u6539\u4e3a 443")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u91c7\u96c6\u95f4\u9694"),(0,r.yg)("td",{parentName:"tr",align:null},"\u76d1\u63a7\u5468\u671f\u6027\u91c7\u96c6\u6570\u636e\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a\u79d2\uff0c\u6700\u5c0f\u95f4\u9694\u4e3a 30 \u79d2\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u662f\u5426\u63a2\u6d4b"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5728\u65b0\u589e\u76d1\u63a7\u524d\u662f\u5426\u5148\u8fdb\u884c\u53ef\u7528\u6027\u63a2\u6d4b\uff0c\u53ea\u6709\u63a2\u6d4b\u6210\u529f\u624d\u4f1a\u7ee7\u7eed\u65b0\u589e\u6216\u4fee\u6539\u64cd\u4f5c\u3002")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u63cf\u8ff0\u5907\u6ce8"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6dfb\u52a0\u5173\u4e8e\u76d1\u63a7\u7684\u989d\u5916\u6807\u8bc6\u548c\u63cf\u8ff0\u4fe1\u606f\u3002")))),(0,r.yg)("h3",{id:"\u91c7\u96c6\u6307\u6807"},"\u91c7\u96c6\u6307\u6807"),(0,r.yg)("h4",{id:"\u6307\u6807\u6536\u96c6-\u5065\u5eb7\u72b6\u6001"},"\u6307\u6807\u6536\u96c6: \u5065\u5eb7\u72b6\u6001"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u72b6\u6001"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u5065\u5eb7\u72b6\u6001: UP\uff08\u6b63\u5e38\uff09\uff0cDown\uff08\u5f02\u5e38\uff09")))),(0,r.yg)("h4",{id:"\u6307\u6807\u6536\u96c6-\u73af\u5883\u4fe1\u606f"},"\u6307\u6807\u6536\u96c6: \u73af\u5883\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"profile"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u8fd0\u884c\u7684\u914d\u7f6e\u73af\u5883: prod\uff08\u751f\u4ea7\u73af\u5883\uff09\uff0cdev\uff08\u5f00\u53d1\u73af\u5883\uff09\uff0ctest\uff08\u6d4b\u8bd5\u73af\u5883\uff09")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u7aef\u53e3\u53f7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7a0b\u5e8f\u66b4\u9732\u7684\u7aef\u53e3")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u64cd\u4f5c\u7cfb\u7edf")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u64cd\u4f5c\u7cfb\u7edf\u67b6\u6784"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8fd0\u884c\u64cd\u4f5c\u7cfb\u7edf\u7684\u67b6\u6784")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JDK\u4f9b\u5e94\u5546"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"JDK \u4f9b\u5e94\u5546")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"JVM\u7248\u672c"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"JVM \u7248\u672c")))),(0,r.yg)("h4",{id:"\u6307\u6807\u6536\u96c6-\u7ebf\u7a0b\u4fe1\u606f"},"\u6307\u6807\u6536\u96c6: \u7ebf\u7a0b\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u72b6\u6001")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u6570\u91cf"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u7ebf\u7a0b\u72b6\u6001\u5bf9\u5e94\u7684\u7ebf\u7a0b\u6570\u91cf")))),(0,r.yg)("h4",{id:"\u6307\u6807\u6536\u96c6-\u5185\u5b58\u4f7f\u7528\u60c5\u51b5"},"\u6307\u6807\u6536\u96c6: \u5185\u5b58\u4f7f\u7528\u60c5\u51b5"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58\u7a7a\u95f4"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58\u7a7a\u95f4\u540d\u79f0")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5185\u5b58\u5360\u7528"),(0,r.yg)("td",{parentName:"tr",align:null},"MB"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b64\u7a7a\u95f4\u5360\u7528\u7684\u5185\u5b58\u5927\u5c0f")))),(0,r.yg)("h4",{id:"\u6307\u6807\u6536\u96c6-\u8def\u7531\u4fe1\u606f"},"\u6307\u6807\u6536\u96c6: \u8def\u7531\u4fe1\u606f"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u540d\u79f0"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u5355\u4f4d"),(0,r.yg)("th",{parentName:"tr",align:null},"\u6307\u6807\u63cf\u8ff0"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8def\u7531id"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8def\u7531 ID")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u5339\u914d\u89c4\u5219"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u8def\u7531\u5339\u914d\u89c4\u5219")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u8d44\u6e90\u6807\u8bc6\u7b26"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u670d\u52a1\u8d44\u6e90\u6807\u8bc6\u7b26")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"\u4f18\u5148\u7ea7"),(0,r.yg)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.yg)("td",{parentName:"tr",align:null},"\u6b64\u8def\u7531\u7684\u4f18\u5148\u7ea7")))))}u.isMDXComponent=!0}}]);