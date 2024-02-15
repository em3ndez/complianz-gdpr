"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[3187,1828,7040,1273,6549,7980,9837,6527,1424,5070,9713,3539,70,6356,3909,6147,4868,7499,6057,3709,3652,938,2640,2588,5671,1789,3252,4064],{31828:function(e,t,a){a.r(t);var n=a(69307),l=a(20382),r=a(19837),s=a(57980),i=a(23361),c=a(65736),o=a(56293),d=a(14531),m=a(33398);const p=e=>{const{document:t}=e,{showSavedSettingsNotice:a}=(0,o.default)();let l="sync"===t.status?"green":"grey",r="sync"===t.status?(0,c.__)("Document is kept up to date by Complianz","complianz-gdpr"):(0,c.__)("Document is not kept up to date by Complianz","complianz-gdpr"),s=t.exists?"green":"grey",d=t.exists?(0,c.__)("Validated","complianz-gdpr"):(0,c.__)("Missing document","complianz-gdpr"),m=t.required?(0,c.__)("Click to copy the document shortcode","complianz-gdpr"):(0,c.__)("Not enabled","complianz-gdpr");return t.required&&t.exists||(s=l="grey",d=r=(0,c.__)("Not enabled","complianz-gdpr")),(0,n.createElement)("div",{className:"cmplz-single-document"},(0,n.createElement)("div",{className:"cmplz-single-document-title"},t.permalink&&(0,n.createElement)("a",{href:t.permalink},t.title),!t.permalink&&t.readmore&&(0,n.createElement)("a",{href:t.readmore},t.title),!t.permalink&&!t.readmore&&t.title),(0,n.createElement)(i.default,{name:"sync",color:l,tooltip:r,size:14}),(0,n.createElement)(i.default,{name:"circle-check",color:s,tooltip:d,size:14}),(0,n.createElement)("div",{onClick:e=>((e,t)=>{let n;e.target.classList.add("cmplz-click-animation");let l=window.document.createElement("input");window.document.getElementsByTagName("body")[0].appendChild(l),l.value=t,l.select();try{n=window.document.execCommand("copy")}catch(e){n=!1}l.parentElement.removeChild(l),n&&a((0,c.__)("Copied shortcode","complianz-gdpr"))})(e,t.shortcode)},(0,n.createElement)(i.default,{name:"shortcode",color:s,tooltip:m,size:14})))};t.default=()=>{const{region:e,documentDataLoaded:t,getDocuments:a,documents:i}=(0,l.default)(),{documentsChanged:c}=(0,m.UseDocumentsData)(),[o,u]=(0,n.useState)([]);return(0,n.useEffect)((()=>{t||a()}),[]),(0,n.useEffect)((()=>{t&&c&&a()}),[c]),(0,n.useEffect)((()=>{let t=i.filter((t=>t.region===e))[0];t&&(t=t.documents,u(t))}),[e,i]),t?(0,n.createElement)(n.Fragment,null,o.map(((e,t)=>(0,n.createElement)(p,{key:t,document:e}))),!cmplz_settings.is_premium&&(0,n.createElement)(r.default,null),cmplz_settings.is_premium&&(0,n.createElement)(s.default,null)):(0,n.createElement)(d.default,{lines:"3"})}},20382:function(e,t,a){a.r(t);var n=a(30270),l=a(48399);const r=(0,n.Ue)(((e,t)=>({documents:[],documentDataLoaded:!1,processingAgreementOptions:[],proofOfConsentOptions:[],dataBreachOptions:[],region:"",setRegion:t=>{"undefined"!=typeof Storage&&(sessionStorage.cmplzSelectedRegion=t),e((e=>({region:t})))},getRegion:()=>{let t="all";"undefined"!=typeof Storage&&sessionStorage.cmplzSelectedRegion&&(t=sessionStorage.cmplzSelectedRegion),e((e=>({region:t})))},getDocuments:async()=>{const{documents:t,processingAgreementOptions:a,proofOfConsentOptions:n,dataBreachOptions:r}=await l.doAction("documents_block_data").then((e=>e));e((e=>({documentDataLoaded:!0,documents:t,processingAgreementOptions:a,proofOfConsentOptions:n,dataBreachOptions:r})))}})));t.default=r},1273:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(23361);t.default=()=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"cmplz-legend"},(0,n.createElement)(r.default,{name:"sync",color:"green",size:14}),(0,n.createElement)("span",null,(0,l.__)("Synchronized","complianz-gdpr"))),(0,n.createElement)("div",{className:"cmplz-legend"},(0,n.createElement)(r.default,{name:"circle-check",color:"green",size:14}),(0,n.createElement)("span",null,(0,l.__)("Validated","complianz-gdpr"))))},16549:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(56293),s=a(20382),i=a(32588);t.default=e=>{const{getFieldValue:t,fieldsLoaded:a}=(0,r.default)(),{getRegion:c,setRegion:o,region:d}=(0,s.default)();if((0,n.useEffect)((()=>{c()}),[]),!a)return null;let m=t("regions");Array.isArray(m)||(m=[m]),0===m.length&&(m=["eu"]),m||(m=[]);let p=[];for(const e of m){if(!cmplz_settings.regions.hasOwnProperty(e))continue;let t={};t.label=cmplz_settings.regions[e].label_full,t.value=e,p.push(t)}let u={};return u.label=(0,l.__)("General","complianz-gdpr"),u.value="all",p.push(u),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},(0,l.__)("Documents","complianz-gdpr")),(0,n.createElement)("div",{className:"cmplz-grid-item-controls"},(0,n.createElement)(i.default,{defaultValue:"all",canBeEmpty:!1,onChange:e=>o(e),value:d,options:p})))}},57980:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(20382),s=a(56293),i=a(26527);t.default=()=>{const{getFieldValue:e,fields:t}=(0,s.default)(),[a,c]=(0,n.useState)(!1);(0,n.useEffect)((()=>{c(e("records_of_consent"))}),[t]);const{processingAgreementOptions:o,dataBreachOptions:d,proofOfConsentOptions:m}=(0,r.default)();return(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h3",{className:"cmplz-h4"},(0,l.__)("Other documents")),(0,n.createElement)(i.default,{type:"processing-agreements",link:"#tools/processing-agreements",name:(0,l.__)("Processing Agreement","complianz-gdpr"),options:o}),(0,n.createElement)(i.default,{type:"data-breaches",link:"#tools/data-breach-reports",name:(0,l.__)("Data Breach","complianz-gdpr"),options:d}),(0,n.createElement)(i.default,{type:"proof-of-consent",link:a?"#tools/records-of-consent":"#tools/proof-of-consent",name:(0,l.__)("Proof of Consent","complianz-gdpr"),options:m}))}},19837:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(20382);const s=e=>{let{document:t,index:a}=e;const{region:l}=(0,r.default)();let s=t.regions.filter((e=>e!==l));return(0,n.createElement)("div",{key:a,className:"cmplz-single-document-other-regions"},(0,n.createElement)("a",{href:t.readmore,target:"_blank",rel:"noopener noreferrer"},t.title),s.map(((e,t)=>(0,n.createElement)("div",{key:t,className:"cmplz-region-indicator"},(0,n.createElement)("img",{alt:e,width:"16px",height:"16px",src:cmplz_settings.plugin_url+"/assets/images/"+e+".svg"})))))};t.default=()=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("div",{className:"cmplz-document-header"},(0,n.createElement)("h3",{className:"cmplz-h4"},(0,l.__)("Other regions")),(0,n.createElement)("a",{href:"https://complianz.io/features/",target:"_blank",rel:"noopener noreferrer"},(0,l.__)("Read more","complianz-gdpr"))),[{id:"privacy-statement",title:"Privacy Statements",regions:["eu","us","uk","ca","za","au","br"],readmore:"https://complianz.io/definition/what-is-a-privacy-statement/"},{id:"cookie-statement",title:"Cookie Policy",regions:["eu","us","uk","ca","za","au","br"],readmore:" https://complianz.io/definition/what-is-a-cookie-policy/"},{id:"impressum",title:"Impressum",regions:["eu"],readmore:"https://complianz.io/definition/what-is-an-impressum/"},{id:"do-not-sell-my-info",title:"Opt-out preferences",regions:["us"],readmore:"https://complianz.io/definition/what-is-do-not-sell-my-personal-information/"},{id:"privacy-statement-for-children",title:"Privacy Statement for Children",regions:["us","uk","ca","za","au","br"],readmore:"https://complianz.io/definition/what-is-a-privacy-statement-for-children/"}].map(((e,t)=>(0,n.createElement)(s,{key:t,index:t,document:e}))))},26527:function(e,t,a){a.r(t);var n=a(69307),l=a(23361),r=a(65736),s=a(32588);t.default=e=>{const[t,a]=(0,n.useState)(!1),[i,c]=(0,n.useState)(!1),[o,d]=(0,n.useState)(!1);(0,n.useEffect)((()=>{let t=e.options;if(0===t.length){let a={label:e.name,value:0};t.unshift(a)}else if(!t.filter((e=>0===e.value)).length>0){let a={label:e.name,value:0};t.unshift(a)}d(t)}),[e.options]);const m=()=>{if(i||!t||0===t)return;c(!0);let e=new XMLHttpRequest;e.responseType="blob",e.open("get",t,!0),e.send(),e.onreadystatechange=function(){if(4==this.readyState&&200==this.status){var e=window.URL.createObjectURL(this.response),a=window.document.createElement("a");a.setAttribute("href",e),a.setAttribute("download",o.filter((e=>e.value===t))[0].label),window.document.body.appendChild(a),a.click(),setTimeout((function(){window.URL.revokeObjectURL(e)}),6e4)}},e.onprogress=function(e){c(!0)}};return(0,n.createElement)("div",{className:"cmplz-single-document-other-documents"},(0,n.createElement)(s.default,{onChange:e=>a(e),defaultValue:"0",canBeEmpty:!1,value:t,options:o}),(0,n.createElement)("div",{onClick:()=>m()},(0,n.createElement)(l.default,{name:"file-download",color:0==t||i?"grey":"black",tooltip:(0,r.__)("Download file","complianz-gdpr"),size:14})),o.length>0&&(0,n.createElement)("a",{href:e.link},(0,n.createElement)(l.default,{name:"circle-chevron-right",color:"black",tooltip:(0,r.__)("Go to overview","complianz-gdpr"),size:14})),0===o.length&&(0,n.createElement)("a",{href:e.link},(0,n.createElement)(l.default,{name:"plus",color:"black",tooltip:(0,r.__)("Create new","complianz-gdpr"),size:14})))}},63187:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(83539),s=a(30070),i=a(86356),c=a(31828),o=a(16549),d=a(1273),m=a(83709),p=a(50938),u=a(83652),g=a(91424),f=a(76147),h=a(24868),_=a(29713),z=a(38892),E={ProgressBlock:r.default,ProgressHeader:s.default,ProgressFooter:i.default,DocumentsBlock:c.default,DocumentsHeader:o.default,DocumentsFooter:d.default,TipsTricks:f.default,TipsTricksFooter:h.default,ToolsHeader:p.default,ToolsFooter:u.default,Tools:m.default,OtherPluginsHeader:_.default,OtherPlugins:g.default};t.default=e=>{let{block:t}=e;const a=t,r="cmplz-grid-item "+a.class+" cmplz-"+a.id,s=!!t.footer&&t.footer.data;return(0,n.createElement)(z.default,{fallback:"Could not load: "+a.id},(0,n.createElement)("div",{key:"block-"+a.id,className:r},(0,n.createElement)("div",{className:"cmplz-grid-item-header"},"text"===a.header.type&&(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},a.header.data),(0,n.createElement)("div",{className:"cmplz-grid-item-controls"},a.controls&&"url"===a.controls.type&&(0,n.createElement)("a",{href:a.controls.data},(0,l.__)("Instructions","complianz-gdpr")),a.controls&&"react"===a.controls.type&&wp.element.createElement(E[a.controls.data]))),"react"===a.header.type&&(0,n.createElement)(n.Fragment,null,wp.element.createElement(E[a.header.data]))),(0,n.createElement)("div",{className:"cmplz-grid-item-content"},wp.element.createElement(E[t.content.data])),!s&&(0,n.createElement)("div",{className:"cmplz-grid-item-footer"}),s&&(0,n.createElement)("div",{className:"cmplz-grid-item-footer"},wp.element.createElement(E[t.footer.data]))))}},91424:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(14531),s=a(5070);t.default=()=>{const{dataLoaded:e,pluginData:t,pluginActions:a,fetchOtherPluginsData:i,error:c}=(0,s.default)();return(0,n.useEffect)((()=>{e||i()}),[]),!e||c?(0,n.createElement)(r.default,{lines:"3",error:c}):(0,n.createElement)("div",{className:"cmplz-other-plugins-container"},t.map(((e,t)=>((e,t)=>(0,n.createElement)("div",{key:t,className:"cmplz-other-plugins-element cmplz-"+e.slug},(0,n.createElement)("a",{href:e.wordpress_url,target:"_blank",rel:"noopener noreferrer",title:e.title},(0,n.createElement)("div",{className:"cmplz-bullet"}),(0,n.createElement)("div",{className:"cmplz-other-plugins-content"},e.title)),(0,n.createElement)("div",{className:"cmplz-other-plugin-status"},"upgrade-to-premium"===e.pluginAction&&(0,n.createElement)("a",{target:"_blank",href:e.upgrade_url,rel:"noopener noreferrer"},(0,l.__)("Upgrade","complianz-gdpr")),"upgrade-to-premium"!==e.pluginAction&&"installed"!==e.pluginAction&&(0,n.createElement)("a",{href:"#",onClick:t=>a(e.slug,e.pluginAction,t)},e.pluginActionNice),"installed"===e.pluginAction&&(0,l.__)("Installed","complianz-gdpr"))))(e,t))))}},5070:function(e,t,a){a.r(t);var n=a(30270),l=a(48399),r=a(65736);const s=(0,n.Ue)(((e,t)=>({error:!1,dataLoaded:!1,pluginData:[],updatePluginData:(a,n)=>{let l=t().pluginData;l.forEach((function(e,t){e.slug===a&&(l[t]=n)})),e((e=>({dataLoaded:!0,pluginData:l})))},getPluginData:e=>t().pluginData.filter((t=>t.slug===e))[0],fetchOtherPluginsData:async()=>{const{pluginData:t,error:a}=await l.doAction("otherpluginsdata").then((e=>{let t=[];t=e.plugins;let a=e.error;return a||t.forEach((function(e,a){t[a].pluginActionNice=i(e.pluginAction)})),{pluginData:t,error:a}}));e((e=>({dataLoaded:!0,pluginData:t,error:a})))},pluginActions:(e,a,n)=>{n&&n.preventDefault();let r={};r.slug=e,r.pluginAction=a;let s=t().getPluginData(e);"download"===a?s.pluginAction="downloading":"activate"===a&&(s.pluginAction="activating"),s.pluginActionNice=i(s.pluginAction),t().updatePluginData(e,s),"installed"!==a&&"upgrade-to-premium"!==a&&l.doAction("plugin_actions",r).then((a=>{s=a,t().updatePluginData(e,s),t().pluginActions(e,s.pluginAction)}))}})));t.default=s;const i=e=>({download:(0,r.__)("Install","complianz-gdpr"),activate:(0,r.__)("Activate","complianz-gdpr"),activating:(0,r.__)("Activating...","complianz-gdpr"),downloading:(0,r.__)("Downloading...","complianz-gdpr"),"upgrade-to-premium":(0,r.__)("Downloading...","complianz-gdpr")}[e])},29713:function(e,t,a){a.r(t);var n=a(69307),l=a(65736);t.default=()=>(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},(0,l.__)("Other Plugins","complianz-gdpr")),(0,n.createElement)("div",{className:"cmplz-grid-item-controls"},(0,n.createElement)("a",{className:"rsp-logo",href:"https://really-simple-plugins.com/"},(0,n.createElement)("img",{src:cmplz_settings.plugin_url+"assets/images/really-simple-plugins.svg",alt:"Really Simple Plugins"}))))},83539:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(53909),s=a(14531),i=a(82387),c=a(56293);t.default=()=>{const{percentageCompleted:e,filter:t,notices:a,progressLoaded:o,fetchProgressData:d,error:m}=(0,i.default)(),{fetchAllFieldsCompleted:p,allRequiredFieldsCompleted:u,fields:g}=(0,c.default)();(0,n.useEffect)((()=>{(async()=>{o||await d(),p()})()}),[t,g]);let f="";if(e<80&&(f+="cmplz-orange"),!o||m)return(0,n.createElement)(s.default,{lines:"9",error:m});let h=a;if("remaining"===t&&(h=h.filter((function(e){return"completed"!==e.status}))),!u&&0===h.filter((e=>"all_fields_completed"===e.id)).length){let e={id:"all_fields_completed",status:"urgent",message:(0,l.__)('Not all fields have been entered, or you have not clicked the "finish" button yet.',"complianz-gdpr")};h.push(e)}u&&(h=h.filter((e=>"all_fields_completed"!==e.id))),h.sort((function(e,t){return e.status===t.status?0:e.status<t.status?1:-1}));let _=h.filter((e=>"open"===e.status||"urgent"===e.status));return(0,n.createElement)("div",{className:"cmplz-progress-block"},(0,n.createElement)("div",{className:"cmplz-progress-bar"},(0,n.createElement)("div",{className:"cmplz-progress"},(0,n.createElement)("div",{className:"cmplz-bar "+f,style:Object.assign({},{width:e+"%"})}))),(0,n.createElement)("div",{className:"cmplz-progress-text"},(0,n.createElement)("h1",{className:"cmplz-progress-percentage"},e,"%"),(0,n.createElement)("h5",{className:"cmplz-progress-text-span"},e<100&&(0,l.__)("Consent Management is activated on your site.","complianz-gdpr")+" ",e<100&&1===_.length&&(0,l.__)("You still have 1 task open.","complianz-gdpr"),e<100&&_.length>1&&(0,l.__)("You still have %s tasks open.","complianz-gdpr").replace("%s",_.length),100===e&&(0,l.__)("Well done! Your website is ready for your selected regions.","complianz-gdpr"))),(0,n.createElement)("div",{className:"cmplz-scroll-container"},h.map(((e,t)=>(0,n.createElement)(r.default,{key:t,index:t,notice:e})))))}},30070:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(82387);t.default=()=>{const{setFilter:e,filter:t,fetchFilter:a,notices:s,progressLoaded:i}=(0,r.default)();(0,n.useEffect)((()=>{a()}),[]);let c=0,o=0;return c=i?s.length:0,o=s.filter((function(e){return"completed"!==e.status})).length,(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},(0,l.__)("Progress","complianz-gdpr")),(0,n.createElement)("div",{className:"cmplz-grid-item-controls"},(0,n.createElement)("div",{className:"cmplz-task-switcher-container cmplz-active-filter-"+t},(0,n.createElement)("a",{href:"#",className:"cmplz-task-switcher cmplz-all-tasks",onClick:()=>e("all"),"data-filter":"all"},(0,l.__)("All tasks","complianz-gdpr"),(0,n.createElement)("span",{className:"rsssl_task_count"},"(",c,")")),(0,n.createElement)("a",{href:"#",className:"cmplz-task-switcher cmplz-remaining-tasks",onClick:()=>e("remaining"),"data-filter":"remaining"},(0,l.__)("Remaining tasks","complianz-gdpr"),(0,n.createElement)("span",{className:"rsssl_task_count"},"(",o,")")))))}},86356:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(23361),s=a(56293),i=a(82387);t.default=()=>{const{fields:e,getFieldValue:t}=(0,s.default)(),{showCookieBanner:a,fetchProgressData:c,progressLoaded:o}=(0,i.default)(),[d,m]=(0,n.useState)(!1),[p,u]=(0,n.useState)(!1),[g,f]=(0,n.useState)(!1);return(0,n.useEffect)((()=>{o||c()}),[]),(0,n.useEffect)((()=>{let e="yes"===t("enable_cookie_blocker")?"green":"grey";m(e),e=1==t("dont_use_placeholders")?"grey":"green",u(e),e=a?"green":"grey",f(e)}),[e,a]),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("a",{href:"#wizard",className:"button button-primary"},(0,l.__)("Continue Wizard","complianz-gdpr")),(0,n.createElement)("div",{className:"cmplz-legend cmplz-flex-push-right"},(0,n.createElement)(r.default,{name:"circle-check",color:d,size:14}),(0,n.createElement)("span",null,(0,l.__)("Cookie Blocker","complianz-gdpr"))),(0,n.createElement)("div",{className:"cmplz-legend"},(0,n.createElement)(r.default,{name:"circle-check",color:p,size:14}),(0,n.createElement)("span",null,(0,l.__)("Placeholders","complianz-gdpr"))),(0,n.createElement)("div",{className:"cmplz-legend"},(0,n.createElement)(r.default,{name:"circle-check",color:g,size:14}),(0,n.createElement)("span",null,(0,l.__)("Consent Banner","complianz-gdpr"))))}},53909:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(23361),s=a(9818),i=a(48399),c=a(14064),o=a(56293),d=a(82387),m=a(82485),p=a(27856),u=a.n(p);t.default=e=>{let{notice:t,index:a}=e;const{dismissNotice:p,fetchProgressData:g}=(0,d.default)(),{getField:f,setHighLightField:h,fetchFieldsData:_}=(0,o.default)(),{setSelectedSubMenuItem:z}=(0,m.default)();let E="premium"===t.icon,b=t.url&&-1!==t.url.indexOf("complianz.io"),k=t.status.charAt(0).toUpperCase()+t.status.slice(1);return(0,n.createElement)("div",{key:a,className:"cmplz-task-element"},(0,n.createElement)("span",{className:"cmplz-task-status cmplz-"+t.status},k),(0,n.createElement)("p",{className:"cmplz-task-message",dangerouslySetInnerHTML:{__html:u().sanitize(t.message)}}),b&&t.url&&(0,n.createElement)("a",{target:"_blank",href:t.url,rel:"noopener noreferrer"},(0,l.__)("More info","complianz-gdpr")),t.clear_cache_id&&(0,n.createElement)("span",{className:"cmplz-task-enable button button-secondary",onClick:()=>(async e=>{let t={};t.cache_id=e,i.doAction("clear_cache",t).then((async e=>{(0,s.dispatch)("core/notices").createNotice("success",(0,l.__)("Re-started test","complianz-gdpr"),{__unstableHTML:!0,id:"cmplz_clear_cache",type:"snackbar",isDismissible:!0}).then((0,c.default)(3e3)).then((e=>{(0,s.dispatch)("core/notices").removeNotice("rsssl_clear_cache")})),await _(),await g()}))})(t.clear_cache_id)},(0,l.__)("Re-check","complianz-gdpr")),!E&&!b&&t.url&&(0,n.createElement)("a",{className:"cmplz-task-enable button button-secondary",href:t.url},(0,l.__)("View","complianz-gdpr")),!E&&t.highlight_field_id&&(0,n.createElement)("span",{className:"cmplz-task-enable button button-secondary",onClick:()=>(async()=>{h(t.highlight_field_id);let e=f(t.highlight_field_id);await z(e.menu_id)})()},(0,l.__)("View","complianz-gdpr")),t.plus_one&&(0,n.createElement)("span",{className:"cmplz-plusone"},"1"),t.dismissible&&"completed"!==t.status&&(0,n.createElement)("div",{className:"cmplz-task-dismiss"},(0,n.createElement)("button",{type:"button",onClick:e=>p(t.id)},(0,n.createElement)(r.default,{name:"times"}))))}},76147:function(e,t,a){a.r(t);var n=a(69307);const l=e=>{let{link:t,content:a}=e;return(0,n.createElement)("div",{className:"cmplz-tips-tricks-element"},(0,n.createElement)("a",{href:t,target:"_blank",rel:"noopener noreferrer",title:"{content}"},(0,n.createElement)("div",{className:"cmplz-icon"},(0,n.createElement)("svg",{"aria-hidden":"true",focusable:"false",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",height:"15"},(0,n.createElement)("path",{fill:"var(--rsp-grey-300)",d:"M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"}))),(0,n.createElement)("div",{className:"cmplz-tips-tricks-content"},a)))};t.default=()=>(0,n.createElement)("div",{className:"cmplz-tips-tricks-container"},[{content:"Styling your cookie notice and legal documents",link:"https://complianz.io/docs/customization/"},{content:"Why plugins are better in consent management",link:"https://complianz.io/consent-management-wordpress-native-plugin-versus-cloud-solution/"},{content:"Configure Tag Manager with Complianz",link:"https://complianz.io/definitive-guide-to-tag-manager-and-complianz/"},{content:"Self-hosting Google Fonts",link:"https://complianz.io/self-hosting-google-fonts-for-wordpress/"},{content:"Translating your cookie notice and legal documents",link:"https://complianz.io/?s=translations&lang=en"},{content:"Debugging issues with Complianz",link:"https://complianz.io/debugging-issues/"}].map(((e,t)=>(0,n.createElement)(l,{key:"trick-"+t,link:e.link,content:e.content}))))},24868:function(e,t,a){a.r(t);var n=a(69307),l=a(65736);t.default=()=>(0,n.createElement)("a",{href:"https://complianz.io/docs/",className:"button button-default cmplz-flex-push-left",target:"_blank",rel:"noopener noreferrer"},(0,l.__)("View all","complianz-gdpr"))},17499:function(e,t,a){a.r(t);var n=a(69307),l=a(23361),r=a(65736),s=a(23252);t.default=()=>{const[e,t]=(0,n.useState)(!1),[a,i]=(0,n.useState)(1),[c,o]=(0,n.useState)(0),[d,m]=(0,n.useState)(0),{consentType:p,statisticsData:u,loaded:g,fetchStatisticsData:f,labels:h,setLabels:_}=(0,s.default)();return(0,n.useEffect)((()=>{!g&&cmplz_settings.is_premium&&f()}),[]),(0,n.useEffect)((()=>{if(""===p||!g)return;if(!u||!u.hasOwnProperty(p))return;let e=[...u[p].labels],t=u[p].categories;t="optin"===p?t.filter((e=>"functional"===e||"no_warning"===e||"do_not_track"===e)):t.filter((e=>"functional"===e||"marketing"===e||"statistics"===e||"preferences"===e));let a=t.map((e=>u[p].categories.indexOf(e)));for(let t=a.length-1;t>=0;t--)e.splice(a[t],1);_(e)}),[g,p]),(0,n.useEffect)((()=>{if(""===p||!g||!u)return;let e=u[p].datasets.filter((e=>e.default));if(e.length>0){let a=e[0].data,n=a.reduce(((e,t)=>parseInt(e)+parseInt(t)),0);n=n>0?n:1,i(n),o(e[0].full_consent),m(e[0].no_consent),a=a.slice(2),t(a)}}),[g,p]),(0,n.createElement)("div",{className:"cmplz-statistics"},(0,n.createElement)("div",{className:"cmplz-statistics-select"},(0,n.createElement)("div",{className:"cmplz-statistics-select-item"},(0,n.createElement)(l.default,{name:"dial-max-light",color:"green",size:"22"}),(0,n.createElement)("h2",null,c),(0,n.createElement)("span",null,(0,r.__)("Full Consent","complianz-gdpr"))),(0,n.createElement)("div",{className:"cmplz-statistics-select-item"},(0,n.createElement)(l.default,{name:"dial-min-light",color:"red",size:"22"}),(0,n.createElement)("h2",null,d),(0,n.createElement)("span",null,(0,r.__)("No Consent","complianz-gdpr")))),(0,n.createElement)("div",{className:"cmplz-statistics-list"},h.length>0&&h.map(((t,r)=>{return(0,n.createElement)("div",{className:"cmplz-statistics-list-item",key:r},(e=>{let t="dial-med-low-light";return 1===e?t="dial-med-light":2===e?t="dial-light":3===e?t="dial-off-light":4===e&&(t="dial-min-light"),(0,n.createElement)(n.Fragment,null,(0,n.createElement)(l.default,{name:t,color:"black"}))})(r),(0,n.createElement)("p",{className:"cmplz-statistics-list-item-text"},t),(0,n.createElement)("p",{className:"cmplz-statistics-list-item-number"},e.hasOwnProperty(r)?(s=e[r],s=parseInt(s),Math.round(s/a*100)):0,"%"));var s}))))}},26057:function(e,t,a){a.r(t);var n=a(69307),l=a(56293),r=a(85671),s=a(23361),i=a(65736),c=a(71789);t.default=e=>{const{fields:t,getFieldValue:a}=(0,l.default)(),[o,d]=(0,n.useState)(!1),{integrationsLoaded:m,plugins:p,fetchIntegrationsData:u}=(0,r.default)(),{licenseStatus:g}=(0,c.default)();(0,n.useEffect)((()=>{let t=e.item;if(t.field){let e=a(t.field.name)==t.field.value;d(e)}}),[t]),(0,n.useEffect)((()=>{m||u()}),[]);let f=e.item;if(f.plugin)return p.filter((e=>e.id===f.plugin)).length>0?(0,n.createElement)("div",{className:"cmplz-tool"},(0,n.createElement)("div",{className:"cmplz-tool-title"},f.title),(0,n.createElement)("div",{className:"cmplz-tool-link"},(0,n.createElement)("a",{href:f.link,target:"_blank",rel:"noopener noreferrer"},(0,n.createElement)(s.default,{name:"circle-chevron-right",color:"black",size:14})))):null;let h=cmplz_settings.is_premium&&"valid"===g,_=((0,i.__)("Read more","complianz-gdpr"),f.link);h&&(!o&&f.enableLink&&(_=f.enableLink),f.field&&!o||!f.viewLink||(_=f.viewLink));let z=-1!==_.indexOf("https://"),E=z?"_blank":"_self",b=z?"external-link":"circle-chevron-right";return(0,n.createElement)("div",{className:"cmplz-tool"},(0,n.createElement)("div",{className:"cmplz-tool-title"},f.title,f.plusone&&f.plusone),(0,n.createElement)("div",{className:"cmplz-tool-link"},(0,n.createElement)("a",{href:_,target:E,rel:z?"noopener noreferrer":""},(0,n.createElement)(s.default,{name:b,color:"black",size:14}))))}},83709:function(e,t,a){a.r(t);var n=a(69307),l=a(56293),r=a(65736),s=a(82640),i=a(17499),c=a(26057);const o=e=>(0,n.createElement)("div",{className:"cmplz-plusone"},e.count);t.default=()=>{const{fields:e,getFieldValue:t}=(0,l.default)(),[a,d]=(0,n.useState)(!1),[m,p]=(0,n.useState)(!1),{recordsLoaded:u,fetchData:g,totalOpen:f}=(0,s.default)();(0,n.useEffect)((()=>{u||g(10,1,"ID","ASC")}),[u]),(0,n.useEffect)((()=>{let e=1==t("a_b_testing");d(e);let a=1==t("a_b_testing_buttons");p(a)}),[e]);const h=[{title:(0,r.__)("Data Requests","complianz-gdpr"),viewLink:"#tools/data-requests",enableLink:"#wizard/security-consent",field:{name:"datarequest",value:"yes"},link:"https://complianz.io/definition/what-is-a-data-request/",plusone:(0,n.createElement)(o,{count:f})},{title:(0,r.__)("Records of Consent","complianz-gdpr"),viewLink:"#tools/records-of-consent",enableLink:"#wizard/security-consent",field:{name:"records_of_consent",value:"yes"},link:"https://complianz.io/records-of-consent/"},{title:(0,r.__)("Processing Agreements","complianz-gdpr"),viewLink:"#tools/processing-agreements",link:"https://complianz.io/definition/what-is-a-processing-agreement/"},{title:(0,r.__)("Consent Statistics","complianz-gdpr"),viewLink:"#tools/ab-testing",link:"https://complianz.io/a-quick-introduction-to-a-b-testing/"},{title:(0,r.__)("A/B Testing","complianz-gdpr"),viewLink:"#tools/ab-testing",link:"https://complianz.io/a-quick-introduction-to-a-b-testing/"},{title:(0,r.__)("Documentation","complianz-gdpr"),link:"https://complianz.io/support/"},{title:(0,r.__)("Premium Support","complianz-gdpr"),viewLink:"#tools/support",link:"https://complianz.io/about-premium-support/"},{title:"WooCommerce",plugin:"woocommerce",link:cmplz_settings.admin_url+"admin.php?page=wc-settings&tab=account"},{title:(0,r.__)("Security","complianz-gdpr"),link:"#tools/security",viewLink:"#tools/security"}];let _=cmplz_settings.is_multisite_plugin?"#tools/tools-multisite":"https://complianz.io/complianz-for-wordpress-multisite-installations/";return cmplz_settings.is_multisite&&h.push({title:(0,r.__)("Multisite","complianz-gdpr"),link:_,viewLink:_}),a?(0,n.createElement)(n.Fragment,null,(0,n.createElement)(i.default,{abTestingEnabled:m})):(0,n.createElement)(n.Fragment,null,h.map(((e,t)=>(0,n.createElement)(c.default,{key:t,item:e}))))}},83652:function(e,t,a){a.r(t),t.default=()=>null},50938:function(e,t,a){a.r(t);var n=a(69307),l=a(65736),r=a(56293),s=a(23252),i=a(32588);t.default=()=>{const{consentType:e,setConsentType:t,consentTypes:a,fetchStatisticsData:c,loaded:o}=(0,s.default)(),{fields:d,getFieldValue:m}=(0,r.default)(),[p,u]=(0,n.useState)(!1);(0,n.useEffect)((()=>{let e=1==m("a_b_testing");u(e)}),[m("a_b_testing")]),(0,n.useEffect)((()=>{p&&!o&&c()}),[p]);let g=[];return a&&(g=a.map((e=>({value:e.id,label:e.label})))),(0,n.createElement)(n.Fragment,null,(0,n.createElement)("h3",{className:"cmplz-grid-title cmplz-h4"},p&&(0,l.__)("Statistics","complianz-gdpr"),!p&&(0,l.__)("Tools","complianz-gdpr")),(0,n.createElement)("div",{className:"cmplz-grid-item-controls"},p&&g&&g.length>1&&(0,n.createElement)(i.default,{canBeEmpty:!1,value:e,onChange:e=>t(e),options:g})))}},82640:function(e,t,a){a.r(t);var n=a(30270),l=a(48399),r=a(12902);a(69307);const s=(0,n.Ue)(((e,t)=>({recordsLoaded:!1,searchValue:"",setSearchValue:t=>e({searchValue:t}),status:"open",setStatus:t=>e({status:t}),selectedRecords:[],setSelectedRecords:t=>e({selectedRecords:t}),fetching:!1,generating:!1,progress:!1,records:[],totalRecords:0,totalOpen:0,exportLink:"",noData:!1,indeterminate:!1,setIndeterminate:t=>e({indeterminate:t}),paginationPerPage:10,pagination:{currentPage:1},setPagination:t=>e({pagination:t}),orderBy:"ID",setOrderBy:t=>e({orderBy:t}),order:"DESC",setOrder:t=>e({order:t}),deleteRecords:async a=>{let n={};n.per_page=t().paginationPerPage,n.page=t().pagination.currentPage,n.order=t().order.toUpperCase(),n.orderBy=t().orderBy,n.search=t().searchValue,n.status=t().status;let r=t().records.filter((e=>a.includes(e.ID)));e((e=>({records:e.records.filter((e=>!a.includes(e.ID)))}))),n.records=r,await l.doAction("delete_datarequests",n).then((e=>e)).catch((e=>{console.error(e)})),await t().fetchData(),t().setSelectedRecords([]),t().setIndeterminate(!1)},resolveRecords:async a=>{let n={};n.per_page=t().paginationPerPage,n.page=t().pagination.currentPage,n.order=t().order.toUpperCase(),n.orderBy=t().orderBy,n.search=t().searchValue,n.status=t().status,e((0,r.ZP)((e=>{e.records.forEach((function(t,n){a.includes(t.ID)&&(e.records[n].resolved=!0)}))}))),n.records=t().records.filter((e=>a.includes(e.ID))),await l.doAction("resolve_datarequests",n).then((e=>e)).catch((e=>{console.error(e)})),await t().fetchData(),t().setSelectedRecords([]),t().setIndeterminate(!1)},fetchData:async()=>{if(t().fetching)return;e({fetching:!0});let a={};a.per_page=t().paginationPerPage,a.page=t().pagination.currentPage,a.order=t().order.toUpperCase(),a.orderBy=t().orderBy,a.search=t().searchValue,a.status=t().status;const{records:n,totalRecords:r,totalOpen:s}=await l.doAction("get_datarequests",a).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({recordsLoaded:!0,records:n,totalRecords:r,totalOpen:s,fetching:!1})))},startExport:async()=>{e({generating:!0,progress:0,exportLink:""})},fetchExportDatarequestsProgress:async(t,a,n)=>{(t=void 0!==t&&t)||e({generating:!0});let r={};r.startDate=a,r.endDate=n,r.statusOnly=t;const{progress:s,exportLink:i,noData:c}=await l.doAction("export_datarequests",r).then((e=>e)).catch((e=>{console.error(e)}));let o=!1;s<100&&(o=!0),e({progress:s,exportLink:i,generating:o,noData:c})}})));t.default=s},32588:function(e,t,a){a.r(t);var n=a(69307),l=a(40683),r=a(23361),s=a(65736);t.default=(0,n.memo)((e=>{let{value:t=!1,onChange:a,required:i,defaultValue:c,disabled:o,options:d={},canBeEmpty:m=!0,label:p}=e;if(Array.isArray(d)){let e={};d.map((t=>{e[t.value]=t.label})),d=e}return m?(""===t||!1===t||0===t)&&(t="0",d={0:(0,s.__)("Select an option","complianz-gdpr"),...d}):t||(t=Object.keys(d)[0]),(0,n.createElement)("div",{className:"cmplz-input-group cmplz-select-group",key:p},(0,n.createElement)(l.fC,{value:t,defaultValue:c,onValueChange:a,required:i,disabled:o&&!Array.isArray(o)},(0,n.createElement)(l.xz,{className:"cmplz-select-group__trigger"},(0,n.createElement)(l.B4,null),(0,n.createElement)(r.default,{name:"chevron-down"})),(0,n.createElement)(l.VY,{className:"cmplz-select-group__content",position:"popper"},(0,n.createElement)(l.u_,{className:"cmplz-select-group__scroll-button"},(0,n.createElement)(r.default,{name:"chevron-up"})),(0,n.createElement)(l.l_,{className:"cmplz-select-group__viewport"},(0,n.createElement)(l.ZA,null,Object.entries(d).map((e=>{let[t,a]=e;return(0,n.createElement)(l.ck,{disabled:Array.isArray(o)&&o.includes(t),className:"cmplz-select-group__item",key:t,value:t},(0,n.createElement)(l.eT,null,a))})))),(0,n.createElement)(l.$G,{className:"cmplz-select-group__scroll-button"},(0,n.createElement)(r.default,{name:"chevron-down"})))))}))},85671:function(e,t,a){a.r(t);var n=a(30270),l=a(12902),r=a(48399);const s=(0,n.Ue)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,a)=>{e((0,l.ZP)((e=>{if("block_script"===a){let a=e.blockedScripts;if(t.urls){for(const[e,n]of Object.entries(t.urls)){if(!n||0===n.length)continue;let e=!1;for(const[t,l]of Object.entries(a))n===t&&(e=!0);e||(a[n]=n)}e.blockedScripts=a}}const n=e.scripts[a].findIndex((e=>e.id===t.id));-1!==n&&(e.scripts[a][n]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:a,plugins:n,scripts:l,placeholders:r,blocked_scripts:s}=await i();let c=l;c.block_script&&c.block_script.length>0&&c.block_script.forEach(((e,t)=>{e.id=t})),c.add_script&&c.add_script.length>0&&c.add_script.forEach(((e,t)=>{e.id=t})),c.whitelist_script&&c.whitelist_script.length>0&&c.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:a,plugins:n,scripts:c,fetching:!1,placeholders:r,blockedScripts:s})))},addScript:a=>{e({fetching:!0}),t().scripts[a]&&Array.isArray(t().scripts[a])||e((0,l.ZP)((e=>{e.scripts[a]=[]}))),e((0,l.ZP)((e=>{e.scripts[a].push({name:"general",id:e.scripts[a].length,enable:!0})})));let n=t().scripts;return r.doAction("update_scripts",{scripts:n}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(a,n)=>{e({fetching:!0}),t().scripts[n]&&Array.isArray(t().scripts[n])||e((0,l.ZP)((e=>{e.scripts[n]=[]}))),e((0,l.ZP)((e=>{const t=e.scripts[n].findIndex((e=>e.id===a.id));-1!==t&&(e.scripts[n][t]=a)})));let s=t().scripts;return r.doAction("update_scripts",{scripts:s}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(a,n)=>{e({fetching:!0}),t().scripts[n]&&Array.isArray(t().scripts[n])||e((0,l.ZP)((e=>{e.scripts[n]=[]}))),e((0,l.ZP)((e=>{const t=e.scripts[n].findIndex((e=>e.id===a.id));-1!==t&&e.scripts[n].splice(t,1)})));let s=t().scripts;return r.doAction("update_scripts",{scripts:s}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,a)=>{e({fetching:!0}),e((0,l.ZP)((e=>{const n=e.plugins.findIndex((e=>e.id===t));-1!==n&&(e.plugins[n].enabled=a)})));const n=await r.doAction("update_plugin_status",{plugin:t,enabled:a}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),n},updatePlaceholderStatus:async(t,a,n)=>{e({fetching:!0}),n&&e((0,l.ZP)((e=>{const n=e.plugins.findIndex((e=>e.id===t));-1!==n&&(e.plugins[n].placeholder=a?"enabled":"disabled")})));const s=await r.doAction("update_placeholder_status",{id:t,enabled:a}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),s}})));t.default=s;const i=()=>r.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},71789:function(e,t,a){a.r(t);var n=a(30270),l=a(48399);const r=(0,n.Ue)(((e,t)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:t,notices:a}=await l.doAction("license_notices",{}).then((e=>e));e((e=>({noticesLoaded:!0,licenseNotices:a,licenseStatus:t})))},activateLicense:async t=>{let a={};a.license=t,e({processing:!0});const{licenseStatus:n,notices:r}=await l.doAction("activate_license",a);e((e=>({processing:!1,licenseNotices:r,licenseStatus:n})))},deactivateLicense:async()=>{e({processing:!0});const{licenseStatus:t,notices:a}=await l.doAction("deactivate_license");e((e=>({processing:!1,licenseNotices:a,licenseStatus:t})))}})));t.default=r},23252:function(e,t,a){a.r(t);var n=a(30270),l=a(48399);const r={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5}},s={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"Demo A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5}},i=(0,n.Ue)(((e,t)=>({consentType:"optin",setConsentType:t=>{e({consentType:t})},statisticsLoading:!1,consentTypes:[],regions:[],defaultConsentType:"optin",loaded:!1,statisticsData:r,emptyStatisticsData:r,bestPerformerEnabled:!1,daysLeft:"",abTrackingCompleted:!1,labels:[],setLabels:t=>{e({labels:t})},fetchStatisticsData:async()=>{if(!cmplz_settings.is_premium)return void e({saving:!1,loaded:!0,consentType:"optin",consentTypes:["optin","optout"],statisticsData:s,defaultConsentType:"optin",bestPerformerEnabled:!1,regions:"eu",daysLeft:11,abTrackingCompleted:!1});if(e({saving:!0}),t().loaded)return;const{daysLeft:a,abTrackingCompleted:n,consentTypes:r,statisticsData:i,defaultConsentType:c,regions:o,bestPerformerEnabled:d}=await l.doAction("get_statistics_data",{}).then((e=>e)).catch((e=>{console.error(e)}));e({saving:!1,loaded:!0,consentType:c,consentTypes:r,statisticsData:i,defaultConsentType:c,bestPerformerEnabled:d,regions:o,daysLeft:a,abTrackingCompleted:n})}})));t.default=i},14064:function(e,t,a){a.r(t),t.default=e=>function(t){return new Promise((a=>setTimeout((()=>a(t)),e)))}}}]);