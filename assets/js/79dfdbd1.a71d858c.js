"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[89870],{15680:(e,t,r)=>{r.d(t,{xA:()=>m,yg:()=>s});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),g=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=g(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),y=g(r),s=a,u=y["".concat(p,".").concat(s)]||y[s]||d[s]||l;return r?n.createElement(u,o(o({ref:t},m),{},{components:r})):n.createElement(u,o({ref:t},m))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var g=2;g<l;g++)o[g]=r[g];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},27431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>g});var n=r(58168),a=(r(96540),r(15680));const l={id:"jetty",title:"Monitoring Jetty Web Server",sidebar_label:"Jetty Web Server",keywords:["open source monitoring tool","open source jetty web server monitoring tool","monitoring jetty metrics"]},o=void 0,i={unversionedId:"help/jetty",id:"version-v1.3.x/help/jetty",title:"Monitoring Jetty Web Server",description:"Collect and monitor general performance metrics of Jetty application server",source:"@site/versioned_docs/version-v1.3.x/help/jetty.md",sourceDirName:"help",slug:"/help/jetty",permalink:"/docs/v1.3.x/help/jetty",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/versioned_docs/version-v1.3.x/help/jetty.md",tags:[],version:"v1.3.x",frontMatter:{id:"jetty",title:"Monitoring Jetty Web Server",sidebar_label:"Jetty Web Server",keywords:["open source monitoring tool","open source jetty web server monitoring tool","monitoring jetty metrics"]},sidebar:"docs",previous:{title:"Apache ActiveMQ",permalink:"/docs/v1.3.x/help/activemq"},next:{title:"Hadoop",permalink:"/docs/v1.3.x/help/hadoop"}},p={},g=[{value:"Pre-monitoring Operations",id:"pre-monitoring-operations",level:3},{value:"Jetty application server opens JMX protocol steps",id:"jetty-application-server-opens-jmx-protocol-steps",level:4},{value:"Configuration parameter",id:"configuration-parameter",level:3},{value:"Collection Metrics",id:"collection-metrics",level:3},{value:"Metrics Set\uff1amemory_pool",id:"metrics-setmemory_pool",level:4},{value:"Metrics Set\uff1aclass_loading",id:"metrics-setclass_loading",level:4},{value:"Metrics Set\uff1athread",id:"metrics-setthread",level:4}],m={toc:g};function d(e){let{components:t,...r}=e;return(0,a.yg)("wrapper",(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Collect and monitor general performance metrics of Jetty application server")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},"Usage protocol: JMX")),(0,a.yg)("h3",{id:"pre-monitoring-operations"},"Pre-monitoring Operations"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"You need to enable the ",(0,a.yg)("inlineCode",{parentName:"p"},"JMX")," service in the JVM application. HertzBeat uses the JMX protocol to collect metrics for the JVM.")),(0,a.yg)("h4",{id:"jetty-application-server-opens-jmx-protocol-steps"},"Jetty application server opens JMX protocol steps"),(0,a.yg)("p",null,(0,a.yg)("a",{parentName:"p",href:"https://www.eclipse.org/jetty/documentation/jetty-10/operations-guide/index.html#og-jmx-remote"},"Refer to official documentation")),(0,a.yg)("ol",null,(0,a.yg)("li",{parentName:"ol"},"Start the JMX JMX-REMOTE module in Jetty")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"java -jar $JETTY_HOME/start.jar --add-module=jmx\njava -jar $JETTY_HOME/start.jar --add-module=jmx-remote\n")),(0,a.yg)("p",null,"Successful command execution will create ",(0,a.yg)("inlineCode",{parentName:"p"},"${JETTY_BASE}/start.d/jmx-remote.ini")," configuration file"),(0,a.yg)("ol",{start:2},(0,a.yg)("li",{parentName:"ol"},"Edit the ",(0,a.yg)("inlineCode",{parentName:"li"},"${JETTY_BASE}/start.d/jmx-remote.ini")," configuration file to modify the JMX IP port and other parameters.")),(0,a.yg)("p",null,(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("inlineCode",{parentName:"strong"},"localhost")," needs to be modified to expose the IP")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-text"},"## The host/address to bind the RMI server to.\n# jetty.jmxremote.rmiserverhost=localhost\n\n## The port the RMI server listens to (0 means a random port is chosen).\n# jetty.jmxremote.rmiserverport=1099\n\n## The host/address to bind the RMI registry to.\n# jetty.jmxremote.rmiregistryhost=localhost\n\n## The port the RMI registry listens to.\n# jetty.jmxremote.rmiregistryport=1099\n\n## The host name exported in the RMI stub.\n-Djava.rmi.server.hostname=localhost\n")),(0,a.yg)("ol",{start:3},(0,a.yg)("li",{parentName:"ol"},"Restart Jetty Server.")),(0,a.yg)("h3",{id:"configuration-parameter"},"Configuration parameter"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Parameter name"),(0,a.yg)("th",{parentName:"tr",align:null},"Parameter help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring Host"),(0,a.yg)("td",{parentName:"tr",align:null},"Monitored IPV4, IPV6 or domain name. Note\u26a0\ufe0fWithout protocol header (eg: https://, http://)")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Monitoring name"),(0,a.yg)("td",{parentName:"tr",align:null},"Identify the name of this monitoring. The name needs to be unique")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Port"),(0,a.yg)("td",{parentName:"tr",align:null},"Port provided by JMX")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Username"),(0,a.yg)("td",{parentName:"tr",align:null},"JMX connection user name, optional")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Password"),(0,a.yg)("td",{parentName:"tr",align:null},"JMX connection password, optional")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Collection interval"),(0,a.yg)("td",{parentName:"tr",align:null},"Interval time of monitor periodic data collection, unit: second, and the minimum interval that can be set is 30 seconds")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect"),(0,a.yg)("td",{parentName:"tr",align:null},"Whether to detect and check the availability of monitoring before adding monitoring. Adding and modifying operations will continue only after the detection is successful")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"Description remarks"),(0,a.yg)("td",{parentName:"tr",align:null},"For more information about identifying and describing this monitoring, users can note information here")))),(0,a.yg)("h3",{id:"collection-metrics"},"Collection Metrics"),(0,a.yg)("h4",{id:"metrics-setmemory_pool"},"Metrics Set\uff1amemory_pool"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"name"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"metrics name")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"committed"),(0,a.yg)("td",{parentName:"tr",align:null},"kb"),(0,a.yg)("td",{parentName:"tr",align:null},"total size")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"init"),(0,a.yg)("td",{parentName:"tr",align:null},"kb"),(0,a.yg)("td",{parentName:"tr",align:null},"init size")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"max"),(0,a.yg)("td",{parentName:"tr",align:null},"kb"),(0,a.yg)("td",{parentName:"tr",align:null},"max size")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"used"),(0,a.yg)("td",{parentName:"tr",align:null},"kb"),(0,a.yg)("td",{parentName:"tr",align:null},"used size")))),(0,a.yg)("h4",{id:"metrics-setclass_loading"},"Metrics Set\uff1aclass_loading"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"LoadedClassCount"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Loaded Class Count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TotalLoadedClassCount"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Total Loaded Class Count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"UnloadedClassCount"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Unloaded Class Count")))),(0,a.yg)("h4",{id:"metrics-setthread"},"Metrics Set\uff1athread"),(0,a.yg)("table",null,(0,a.yg)("thead",{parentName:"table"},(0,a.yg)("tr",{parentName:"thead"},(0,a.yg)("th",{parentName:"tr",align:null},"Metric name"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric unit"),(0,a.yg)("th",{parentName:"tr",align:null},"Metric help description"))),(0,a.yg)("tbody",{parentName:"table"},(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"TotalStartedThreadCount"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Total Started Thread Count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"ThreadCount"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Thread Count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"PeakThreadCount"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Peak Thread Count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"DaemonThreadCount"),(0,a.yg)("td",{parentName:"tr",align:null}),(0,a.yg)("td",{parentName:"tr",align:null},"Daemon Thread Count")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"CurrentThreadUserTime"),(0,a.yg)("td",{parentName:"tr",align:null},"ms"),(0,a.yg)("td",{parentName:"tr",align:null},"Current Thread User Time")),(0,a.yg)("tr",{parentName:"tbody"},(0,a.yg)("td",{parentName:"tr",align:null},"CurrentThreadCpuTime"),(0,a.yg)("td",{parentName:"tr",align:null},"ms"),(0,a.yg)("td",{parentName:"tr",align:null},"Current Thread Cpu Time")))))}d.isMDXComponent=!0}}]);