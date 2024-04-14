"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[22402],{15680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>d});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=a.createContext({}),c=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,h=g["".concat(m,".").concat(d)]||g[d]||s[d]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=g;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},31e3:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>r,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(58168),i=(n(96540),n(15680));const o={title:"Monitoring Practices for DynamicTp Thread Pooling Framework with HertzBeat",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},r=void 0,l={permalink:"/blog/2023/02/02/monitor-dynamic-tp",editUrl:"https://github.com/apache/hertzbeat/edit/master/home/blog/2023-02-02-monitor-dynamic-tp.md",source:"@site/blog/2023-02-02-monitor-dynamic-tp.md",title:"Monitoring Practices for DynamicTp Thread Pooling Framework with HertzBeat",description:"Monitoring practice for thread pooling framework DynamicTp using HertzBeat, 5 minutes!",date:"2023-02-02T00:00:00.000Z",formattedDate:"February 2, 2023",tags:[{label:"opensource",permalink:"/blog/tags/opensource"},{label:"practice",permalink:"/blog/tags/practice"}],readingTime:5.56,hasTruncateMarker:!1,authors:[{name:"tom",title:"tom",url:"https://github.com/tomsun28",imageURL:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4"}],frontMatter:{title:"Monitoring Practices for DynamicTp Thread Pooling Framework with HertzBeat",author:"tom",author_title:"tom",author_url:"https://github.com/tomsun28",author_image_url:"https://avatars.githubusercontent.com/u/24788200?s=400&v=4",tags:["opensource","practice"]},prevItem:{title:"Welcome two new Committers from HertzBeat",permalink:"/blog/2023/02/10/new-committer"},nextItem:{title:"HertzBeat's Monitoring Practice for API Gateway Apache ShenYu",permalink:"/blog/2023/01/08/monitor-shenyu"}},m={authorsImageUrls:[void 0]},c=[{value:"Monitoring practice for thread pooling framework DynamicTp using HertzBeat, 5 minutes!",id:"monitoring-practice-for-thread-pooling-framework-dynamictp-using-hertzbeat-5-minutes",level:2},{value:"Introducing DynamicTp, the thread pooling framework.",id:"introducing-dynamictp-the-thread-pooling-framework",level:3},{value:"HertzBeat Introduction",id:"hertzbeat-introduction",level:3},{value:"Monitor DynamicTp in 5 minutes at HertzBeat!",id:"monitor-dynamictp-in-5-minutes-at-hertzbeat",level:3},{value:"operation, you already have a DynamicTp environment and a HertzBeat environment.",id:"operation-you-already-have-a-dynamictp-environment-and-a-hertzbeat-environment",level:4},{value:"i. Expose the <code>DynamicTp</code> metrics interface <code>/actuator/dynamic-tp</code> on the DynamicTp side, which will provide the metrics interface data.",id:"i-expose-the-dynamictp-metrics-interface-actuatordynamic-tp-on-the-dynamictp-side-which-will-provide-the-metrics-interface-data",level:4},{value:"ii. To add DynamicTp thread pool monitoring to the HertzBeat monitoring page",id:"ii-to-add-dynamictp-thread-pool-monitoring-to-the-hertzbeat-monitoring-page",level:4},{value:"iii. Adding Threshold Alerts for DynamicTp Thread Pool Metrics in HertzBeat System",id:"iii-adding-threshold-alerts-for-dynamictp-thread-pool-metrics-in-hertzbeat-system",level:4},{value:"Over and out, now wait for the alert message to come through. Ding, ding, ding, ding.",id:"over-and-out-now-wait-for-the-alert-message-to-come-through-ding-ding-ding-ding",level:3},{value:"Summary",id:"summary",level:2}],p={toc:c};function s(e){let{components:t,...o}=e;return(0,i.yg)("wrapper",(0,a.A)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"monitoring-practice-for-thread-pooling-framework-dynamictp-using-hertzbeat-5-minutes"},"Monitoring practice for thread pooling framework DynamicTp using HertzBeat, 5 minutes!"),(0,i.yg)("h3",{id:"introducing-dynamictp-the-thread-pooling-framework"},"Introducing DynamicTp, the thread pooling framework."),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"DynamicTp is a lightweight configuration-centric dynamic thread pool in Jvm with built-in monitoring and alerting capabilities, which can be customized through SPI extensions.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support for dynamic modification of the running thread pool parameters , real-time effective ."),(0,i.yg)("li",{parentName:"ul"},"Real-time monitoring of the running status of the thread pool, alarms are triggered when the alarm policy is set, and alarm information is pushed to the office platform."),(0,i.yg)("li",{parentName:"ul"},"Collect thread pool metrics data regularly, and use grafana as a visual monitoring platform to monitor the overall situation.")),(0,i.yg)("h3",{id:"hertzbeat-introduction"},"HertzBeat Introduction"),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"HertzBeat is an open source, easy-to-use and friendly real-time monitoring tool with powerful customizable monitoring capabilities.")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Support for application services , database , operating system , middleware , cloud native monitoring , threshold alarms , alarm notification (email WeChat Dingtalk SMS Slack Discord Telegram)."),(0,i.yg)("li",{parentName:"ul"},"Its Http, Jmx, Ssh, Snmp, Jdbc, Prometheus and other protocol specifications configurable, just configure YML can use these protocols to customize the collection of any metrics you want to collect. Would you believe that you can instantly adapt a new monitoring type such as K8s or Docker by simply configuring YML?"),(0,i.yg)("li",{parentName:"ul"},"HertzBeat's powerful customization, multi-type support, easy scalability, and low coupling will hopefully help developers and small to medium sized teams to quickly build their own monitoring systems.")),(0,i.yg)("h3",{id:"monitor-dynamictp-in-5-minutes-at-hertzbeat"},"Monitor DynamicTp in 5 minutes at HertzBeat!"),(0,i.yg)("h4",{id:"operation-you-already-have-a-dynamictp-environment-and-a-hertzbeat-environment"},"operation, you already have a DynamicTp environment and a HertzBeat environment."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"DynamicTp ",(0,i.yg)("a",{parentName:"li",href:"https://dynamictp.cn/guide/use/quick-start.html"},"Integration Access Documentation")),(0,i.yg)("li",{parentName:"ul"},"HertzBeat ",(0,i.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/start/docker-deploy"},"Deployment and Installation Documentation"))),(0,i.yg)("h4",{id:"i-expose-the-dynamictp-metrics-interface-actuatordynamic-tp-on-the-dynamictp-side-which-will-provide-the-metrics-interface-data"},"i. Expose the ",(0,i.yg)("inlineCode",{parentName:"h4"},"DynamicTp")," metrics interface ",(0,i.yg)("inlineCode",{parentName:"h4"},"/actuator/dynamic-tp")," on the DynamicTp side, which will provide the metrics interface data."),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Enable the SpringBoot Actuator Endpoint to expose the ",(0,i.yg)("inlineCode",{parentName:"li"},"DynamicTp")," metrics interface.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-yaml"},"management:\n  endpoints:\n    web:\n      exposure:\n        include: '*'\n")),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Reboot and test access to the metrics interface ",(0,i.yg)("inlineCode",{parentName:"li"},"ip:port/actuator/dynamic-tp")," to see if it responds with json data as follows.")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "poolName": "commonExecutor",\n    "corePoolSize": 1,\n    "maximumPoolSize": 1,\n    "queueType": "LinkedBlockingQueue",\n    "queueCapacity": 2147483647,\n    "queueSize": 0,\n    "fair": false,\n    "queueRemainingCapacity": 2147483647,\n    "activeCount": 0,\n    "taskCount": 0,\n    "completedTaskCount": 0,\n    "largestPoolSize": 0,\n    "poolSize": 0,\n    "waitTaskCount": 0,\n    "rejectCount": 0,\n    "rejectHandlerName": null,\n    "dynamic": false,\n    "runTimeoutCount": 0,\n    "queueTimeoutCount": 0\n  },\n  {\n    "maxMemory": "4 GB",\n    "totalMemory": "444 MB",\n    "freeMemory": "250.34 MB",\n    "usableMemory": "3.81 GB"\n  }\n]\n')),(0,i.yg)("h4",{id:"ii-to-add-dynamictp-thread-pool-monitoring-to-the-hertzbeat-monitoring-page"},"ii. To add DynamicTp thread pool monitoring to the HertzBeat monitoring page"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Click Add DynamicTp Monitor")),(0,i.yg)("p",null,"Path: Menu -> Middleware Monitor -> DynamicTp Monitor -> Add DynamicTp Monitor"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(49318).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Configure the parameters required for monitoring DynamicTp.")),(0,i.yg)("p",null,"On the monitor page, fill in DynamicTp ",(0,i.yg)("strong",{parentName:"p"},"service IP"),", ",(0,i.yg)("strong",{parentName:"p"},"monitoring port")," (default 8080), and finally click OK to add it.",(0,i.yg)("br",{parentName:"p"}),"\n","For other parameters such as ",(0,i.yg)("strong",{parentName:"p"},"collection interval"),", ",(0,i.yg)("strong",{parentName:"p"},"timeout"),", etc., you can refer to ",(0,i.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/dynamic_tp/"},"help")," ",(0,i.yg)("a",{parentName:"p",href:"https://hertzbeat.com/docs/help/dynamic_tp/"},"https://hertzbeat.com/docs/help/dynamic_tp/")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(46877).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Done \u2705, now we have added monitoring for DynamicTp, check the monitor list to see our additions.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(49318).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:4},(0,i.yg)("li",{parentName:"ol"},"Click ",(0,i.yg)("strong",{parentName:"li"},"Options"),"->",(0,i.yg)("strong",{parentName:"li"},"Monitor Details icon")," in the Monitor list to view the real-time monitoring metrics of the DynamicTp thread pool.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(25748).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:5},(0,i.yg)("li",{parentName:"ol"},"Click the ",(0,i.yg)("strong",{parentName:"li"},"Monitoring History TAB")," to view a graphical representation of the historical monitoring metrics for the DynamicTp thread pool \ud83d\udcc8.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(75659).A,width:"4064",height:"2166"})),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(85154).A,width:"4064",height:"2166"})),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"DONE! With the above steps, it's really just two steps")),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"The first step is to expose the DynamicTp ",(0,i.yg)("inlineCode",{parentName:"strong"},"metrics")," endpoint ",(0,i.yg)("inlineCode",{parentName:"strong"},"/actuator/dynamic-tp")),"."),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("strong",{parentName:"li"},"The second step is to configure the IP ports on the HertzBeat monitoring page to add the monitoring"))),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"With the above two steps we have finished monitoring DynamicTp, and we can view the monitoring details and metrics information in HertzBeat at any time to observe its service status.\nOf course, just watching is not perfect, monitoring is often accompanied by alarm thresholds, when DynamicTp's thread pool metrics exceed our expectations or abnormalities, we can promptly notify the person in charge of our counterparts, the person in charge of the notification received to deal with the problem, so that is a complete monitoring and alerting process.")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Next, we will demonstrate step-by-step how to configure the threshold alarm notification in HertzBeat system, so that when the DynamicTp thread pool metrics are abnormal, we will be notified in a timely manner")," **This is a complete monitoring and alerting process."),(0,i.yg)("h4",{id:"iii-adding-threshold-alerts-for-dynamictp-thread-pool-metrics-in-hertzbeat-system"},"iii. Adding Threshold Alerts for DynamicTp Thread Pool Metrics in HertzBeat System"),(0,i.yg)("ol",null,(0,i.yg)("li",{parentName:"ol"},"Configure an alarm threshold for an important metric.")),(0,i.yg)("p",null,"Path: Menu -> Alert Thresholds -> Add Thresholds"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"DynamicTp monitors some thread pool related metrics, for example, we set the threshold for the ",(0,i.yg)("inlineCode",{parentName:"li"},"run_timeout_count")," ",(0,i.yg)("inlineCode",{parentName:"li"},"thread_pool_running")," -> ",(0,i.yg)("inlineCode",{parentName:"li"},"run_timeout_count")," metric, which will raise an alarm when the thread_timeout_count is greater than one."),(0,i.yg)("li",{parentName:"ul"},"Here we configure an alert to be issued when ",(0,i.yg)("inlineCode",{parentName:"li"},"thread_pool_running")," has a ",(0,i.yg)("inlineCode",{parentName:"li"},"run_timeout_count>1"),", with an alert level of ",(0,i.yg)("strong",{parentName:"li"},"Serious Alert"),", which is triggered three times, as shown in the following figure.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(68089).A,width:"4064",height:"2166"})),(0,i.yg)("ol",{start:2},(0,i.yg)("li",{parentName:"ol"},"Add message notification recipients")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Configure recipients to let alert message know who to send to and in what way.")),(0,i.yg)("p",null,"Path: Menu -> Alert Notification -> Alert Recipient -> Add Recipient."),(0,i.yg)("p",null,"Message notification methods support ",(0,i.yg)("strong",{parentName:"p"},"Email, Dingtalk, WeChat, Flybook, WebHook, SMS"),", etc. We take the commonly used Dingtalk as an example."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Refer to this ",(0,i.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"help document")," ",(0,i.yg)("a",{parentName:"li",href:"https://hertzbeat.com/docs/help/alert_dingtalk"},"https://hertzbeat.com/docs/help/alert_dingtalk")," Configure the bot on Dingtalk side, set the security customization keyword ",(0,i.yg)("inlineCode",{parentName:"li"}," HertzBeat"),", get the corresponding ",(0,i.yg)("inlineCode",{parentName:"li"},"access_token")," value."),(0,i.yg)("li",{parentName:"ul"},"Configure the recipient parameters in HertzBeat as follows.")),(0,i.yg)("p",null,"[Alert Notification]"," -> ","[Add Recipient]"," -> ","[Choose Dingtalk bot notification method]"," -> ","[Set Dingtalk bot ACCESS_TOKEN]"," -> ","[OK]"),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(34162).A,width:"3436",height:"890"})),(0,i.yg)("ol",{start:3},(0,i.yg)("li",{parentName:"ol"},"Configure the associated alert notification policy \u26a0\ufe0f ","[Add Notification Policy]"," -> ","[Associate the recipient you just set]"," -> ","[OK]"," !")),(0,i.yg)("blockquote",null,(0,i.yg)("p",{parentName:"blockquote"},"Configure the alert notification policy to bind alert messages to recipients so that you can decide which alerts go to which person.")),(0,i.yg)("p",null,(0,i.yg)("img",{alt:"hertzbeat",src:n(41225).A,width:"3436",height:"1088"})),(0,i.yg)("h3",{id:"over-and-out-now-wait-for-the-alert-message-to-come-through-ding-ding-ding-ding"},"Over and out, now wait for the alert message to come through. Ding, ding, ding, ding."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"[HertzBeat alert notification]\nAlert target object : dynamic_tp.thread_pool_running.run_timeout_count\nTask ID : 205540620349493\nTask Name : dynamic_tp_localhost\nAlarm Level : Critical Alarm\nAlarm Trigger Time : 2023-02-02 22:17:06\nDetails : DynamicTp has run timeout thread, count is 2\n")),(0,i.yg)("h2",{id:"summary"},"Summary"),(0,i.yg)("admonition",{type:"tip"},(0,i.yg)("p",{parentName:"admonition"},"This practical article takes us to experience how to use HertzBeat to monitor DynamicTp thread pool metrics data, and we can find that HertzBeat with ",(0,i.yg)("inlineCode",{parentName:"p"},"monitoring-alerting-notification")," is much more convenient to operate and use, and you only need to point and click on a page to include DynamicTp thread pool into the monitoring and alert notification, and you don't need to deploy multiple components to write YML configuration files anymore. There is no need to deploy multiple components and write YML configuration files.  ")),(0,i.yg)("p",null,"DynamicTp Github: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/dromara/dynamic-tp"},"https://github.com/dromara/dynamic-tp"),(0,i.yg)("br",{parentName:"p"}),"\n","HertzBeat Github: ",(0,i.yg)("a",{parentName:"p",href:"https://github.com/dromara/hertzbeat"},"https://github.com/dromara/hertzbeat")),(0,i.yg)("p",null,(0,i.yg)("strong",{parentName:"p"},"Welcome to learn how to use Star Support!")),(0,i.yg)("p",null,"Experience heartbeat with a single docker command:",(0,i.yg)("br",{parentName:"p"}),"\n",(0,i.yg)("inlineCode",{parentName:"p"},"docker run -d -p 1157:1157 --name hertzbeat tancloud/hertzbeat")))}s.isMDXComponent=!0},34162:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/alert-notice-1-3bad6e06e2c870849bc656a2092d59ac.png"},41225:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/alert-notice-2-8025b90624873463fe0a3f75bd7efafa.png"},49318:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-dynamic-tp-1-6ad397a5d82658fbbf9c056dc56b5b15.png"},46877:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-dynamic-tp-2-38cd35a16117ade74a8affe63687937d.png"},25748:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-dynamic-tp-3-6ad397a5d82658fbbf9c056dc56b5b15.png"},75659:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-dynamic-tp-4-8d87c11732531f2694e6a5dcbe7459c4.png"},85154:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-dynamic-tp-5-57b7a2e873324a86a5f79bbd64de1c10.png"},68089:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/monitor-dynamic-tp-6-cf05bdeb04ce4aa2c627c350c9c54aeb.png"}}]);