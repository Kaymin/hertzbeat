"use strict";(self.webpackChunkhertzbeat=self.webpackChunkhertzbeat||[]).push([[73003],{15680:(e,t,r)=>{r.d(t,{xA:()=>g,yg:()=>d});var a=r(96540);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?a.createElement(h,i(i({ref:t},g),{},{components:r})):a.createElement(h,i({ref:t},g))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30189:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(58168),n=(r(96540),r(15680));const o={id:"alert_telegram",title:"Alert Telegram Bot Notification",sidebar_label:"Alert Telegram bot notification",keywords:["open source monitoring tool","open source alerter","open source Telegram bot notification"]},i=void 0,l={unversionedId:"help/alert_telegram",id:"help/alert_telegram",title:"Alert Telegram Bot Notification",description:"Send an alarm message after the threshold is triggered, and notify the recipient through the Telegram robot.",source:"@site/docs/help/alert_telegram.md",sourceDirName:"help",slug:"/help/alert_telegram",permalink:"/docs/help/alert_telegram",draft:!1,editUrl:"https://github.com/apache/hertzbeat/edit/master/home/docs/help/alert_telegram.md",tags:[],version:"current",frontMatter:{id:"alert_telegram",title:"Alert Telegram Bot Notification",sidebar_label:"Alert Telegram bot notification",keywords:["open source monitoring tool","open source alerter","open source Telegram bot notification"]},sidebar:"docs",previous:{title:"Alert Slack Webhook Notification",permalink:"/docs/help/alert_slack"},next:{title:"Alert enterprise Wechat notification",permalink:"/docs/help/alert_wework"}},s={},c=[{value:"Steps",id:"steps",level:2},{value:"Create a bot in Telegram, get Bot Token and UserId",id:"create-a-bot-in-telegram-get-bot-token-and-userid",level:3},{value:"Add an alarm notification person to HertzBeat, the notification method is Telegram Bot",id:"add-an-alarm-notification-person-to-hertzbeat-the-notification-method-is-telegram-bot",level:3},{value:"Telegram Bot Notification FAQ",id:"telegram-bot-notification-faq",level:3}],g={toc:c};function p(e){let{components:t,...o}=e;return(0,n.yg)("wrapper",(0,a.A)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Send an alarm message after the threshold is triggered, and notify the recipient through the Telegram robot.")),(0,n.yg)("h2",{id:"steps"},"Steps"),(0,n.yg)("h3",{id:"create-a-bot-in-telegram-get-bot-token-and-userid"},"Create a bot in Telegram, get Bot Token and UserId"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Use ",(0,n.yg)("a",{parentName:"li",href:"https://t.me/BotFather"},"@BotFather")," to create your own bot and get an access token ",(0,n.yg)("inlineCode",{parentName:"li"},"Token"))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"telegram-bot",src:r(43689).A,width:"497",height:"524"})),(0,n.yg)("ol",{start:2},(0,n.yg)("li",{parentName:"ol"},"Get the ",(0,n.yg)("inlineCode",{parentName:"li"},"User ID")," of the recipient")),(0,n.yg)("p",null,(0,n.yg)("strong",{parentName:"p"},"Use the recipient account you want to notify to send a message to the newly created Bot account"),",\nVisit ",(0,n.yg)("inlineCode",{parentName:"p"},"https://api.telegram.org/bot<TOKEN>/getUpdates"),", ",(0,n.yg)("strong",{parentName:"p"},(0,n.yg)("inlineCode",{parentName:"strong"},"use the Bot Token from the previous step to replace the <TOKEN>")),", and respond to the first in the ",(0,n.yg)("inlineCode",{parentName:"p"},"Json")," data A ",(0,n.yg)("inlineCode",{parentName:"p"},"result.message.from.id")," value is the recipient's ",(0,n.yg)("inlineCode",{parentName:"p"},"User ID")),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n     "ok": true,\n     "result": [\n         {\n             "update_id": 632299191,\n             "message": {\n                 "from":{\n                     "id": "User ID"\n                 },\n                 "chat":{\n                 },\n                 "date": 1673858065,\n                 "text": "111"\n             }\n         }\n     ]\n}\n')),(0,n.yg)("ol",{start:3},(0,n.yg)("li",{parentName:"ol"},"Record and save the ",(0,n.yg)("inlineCode",{parentName:"li"},"Token")," and ",(0,n.yg)("inlineCode",{parentName:"li"},"User Id")," we got")),(0,n.yg)("h3",{id:"add-an-alarm-notification-person-to-hertzbeat-the-notification-method-is-telegram-bot"},"Add an alarm notification person to HertzBeat, the notification method is Telegram Bot"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"\u3010Alarm Notification\u3011->\u3010Add Recipient\u3011->\u3010Select Telegram Robot Notification Method\u3011->\u3010Set Robot Token and UserId\u3011-> \u3010OK\u3011"))),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"email",src:r(95506).A,width:"3804",height:"1160"})),(0,n.yg)("ol",{start:4},(0,n.yg)("li",{parentName:"ol"},(0,n.yg)("strong",{parentName:"li"},"Configure the associated alarm notification strategy\u26a0\ufe0f ","[Add notification strategy]"," -> ","[Associate the recipient just set]"," -> ","[OK]"))),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},(0,n.yg)("strong",{parentName:"p"},"Note \u26a0\ufe0f Adding a new recipient does not mean that it has taken effect and can receive alarm information. It is also necessary to configure the associated alarm notification strategy, that is, specify which messages are sent to which recipients"),".")),(0,n.yg)("p",null,(0,n.yg)("img",{alt:"email",src:r(82174).A,width:"3778",height:"1284"})),(0,n.yg)("h3",{id:"telegram-bot-notification-faq"},"Telegram Bot Notification FAQ"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Telegram did not receive the robot warning notification")),(0,n.yg)("blockquote",null,(0,n.yg)("p",{parentName:"blockquote"},"Please check whether the alarm information has been triggered in the alarm center",(0,n.yg)("br",{parentName:"p"}),"\n","Please check whether the robot Token and UserId are configured correctly, and whether the alarm policy association has been configured",(0,n.yg)("br",{parentName:"p"}),"\n","UserId should be the UserId of the recipient of the message   ")),(0,n.yg)("p",null,"Other questions can be fed back through the communication group ISSUE!"))}p.isMDXComponent=!0},82174:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/alert-notice-policy-a44e898a35d581c7bb8f52bd2499387f.png"},43689:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/telegram-bot-1-e6f0d00c5bc63442aaafadaf7e342955.png"},95506:(e,t,r)=>{r.d(t,{A:()=>a});const a=r.p+"assets/images/telegram-bot-2-039d3aac3929dbb813e3547e707384ce.png"}}]);