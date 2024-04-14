"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[68108],{15680:(e,t,n)=>{n.d(t,{xA:()=>g,yg:()=>s});var r=n(96540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},g=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),u=m(n),s=a,d=u["".concat(p,".").concat(s)]||u[s]||c[s]||o;return n?r.createElement(d,i(i({ref:t},g),{},{components:n})):r.createElement(d,i({ref:t},g))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},37893:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var r=n(58168),a=(n(96540),n(15680));const o={id:"pop3",title:"Monitoring POP3",sidebar_label:"POP3 Monitor",keywords:["open source monitoring tool","open source java monitoring tool","monitoring POP3 metrics"]},i=void 0,l={unversionedId:"help/pop3",id:"help/pop3",title:"Monitoring POP3",description:"Collect and monitor the general performance Metrics of POP3.",source:"@site/docs/help/pop3.md",sourceDirName:"help",slug:"/help/pop3",permalink:"/docs/help/pop3",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/pop3.md",tags:[],version:"current",frontMatter:{id:"pop3",title:"Monitoring POP3",sidebar_label:"POP3 Monitor",keywords:["open source monitoring tool","open source java monitoring tool","monitoring POP3 metrics"]},sidebar:"docs",previous:{title:"Nginx Monitor",permalink:"/docs/help/nginx"},next:{title:"SMTP Monitor",permalink:"/docs/help/smtp"}},p={},m=[{value:"Enable POP3 Service",id:"enable-pop3-service",level:3},{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metrics Set\uff1aemail_status",id:"metrics-setemail_status",level:4}],g={toc:m};function c(e){let{components:t,...n}=e;return(0,a.yg)("wrapper",(0,r.A)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect and monitor the general performance Metrics of POP3.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Protocol Use\uff1aPOP3")),(0,a.yg)("h3",{id:"enable-pop3-service"},"Enable POP3 Service"),(0,a.yg)("p",null,"If you want to monitor information in 'POP3' with this monitoring type, you just need to open ",(0,a.yg)("inlineCode",{parentName:"p"},"POP3")," service in your mail server."),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"1\u3001Open ",(0,a.yg)("inlineCode",{parentName:"strong"},"POP3")," Service:")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"\u4ee5qq\u90ae\u7bb1\u4e3a\u4f8b\u3010\u5176\u5b83\u90ae\u7bb1\u7c7b\u4f3c\u3011\uff1a\n    1. \u70b9\u51fb`\u8bbe\u7f6e`\u9009\u9879\n    2. \u9009\u62e9`\u8d26\u53f7`\n    3. \u627e\u5230\u5f00\u542fSMTP/POP3/IMAP\u9009\u9879\uff0c\u5e76\u5f00\u542f\n    4. \u5f97\u5230POP3\u670d\u52a1\u5668\u57df\u540d\uff0c\u7aef\u53e3\u53f7\uff0c\u4ee5\u53ca\u6388\u6743\u7801\u3010\u5f00\u542fSMTP/POP3/IMAP\u670d\u52a1\u540e\uff0cqq\u90ae\u7bb1\u63d0\u4f9b\u3011\n    5. \u901a\u8fc7POP3\u670d\u52a1\u5668\u57df\u540d\uff0c\u7aef\u53e3\u53f7\uff0cqq\u90ae\u7bb1\u8d26\u53f7\u4ee5\u53ca\u6388\u6743\u7801\u8fde\u63a5POP3\u670d\u52a1\u5668\uff0c\u91c7\u96c6\u76d1\u63a7\u6307\u6807\n")),(0,a.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"Port provided by POP3")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"SSL"),(0,a.yg)("td",{parentName:"tr",align:null},"POP3 If enabled SSL")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Timeout"),(0,a.yg)("td",{parentName:"tr",align:null},"Allow collection response time")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.yg)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,a.yg)("h4",{id:"metrics-setemail_status"},"Metrics Set\uff1aemail_status"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"email_count"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Number of emails")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"mailbox_size"),(0,a.yg)("td",{parentName:"tr",align:null},"kb"),(0,a.yg)("td",{parentName:"tr",align:null},"The total size of emails in the mailbox")))))}c.isMDXComponent=!0}}]);