"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[93,800,4759,2921],{10800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(51609),r=n(86087),l=n(58168),c=n(9957),s=n(91071),i=n(62133),o=n(81351),d=n(85357),p=n(31769),u=n(12579);const h="Switch",[g,m]=(0,i.A)(h),[f,b]=g(h),_=(0,a.forwardRef)(((e,t)=>{const{__scopeSwitch:n,name:r,checked:i,defaultChecked:d,required:p,disabled:h,value:g="on",onCheckedChange:m,...b}=e,[_,w]=(0,a.useState)(null),k=(0,s.s)(t,(e=>w(e))),E=(0,a.useRef)(!1),S=!_||Boolean(_.closest("form")),[z=!1,A]=(0,o.i)({prop:i,defaultProp:d,onChange:m});return(0,a.createElement)(f,{scope:n,checked:z,disabled:h},(0,a.createElement)(u.sG.button,(0,l.A)({type:"button",role:"switch","aria-checked":z,"aria-required":p,"data-state":v(z),"data-disabled":h?"":void 0,disabled:h,value:g},b,{ref:k,onClick:(0,c.m)(e.onClick,(e=>{A((e=>!e)),S&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())}))})),S&&(0,a.createElement)(y,{control:_,bubbles:!E.current,name:r,value:g,checked:z,required:p,disabled:h,style:{transform:"translateX(-100%)"}}))})),y=e=>{const{control:t,checked:n,bubbles:r=!0,...c}=e,s=(0,a.useRef)(null),i=(0,d.Z)(n),o=(0,p.X)(t);return(0,a.useEffect)((()=>{const e=s.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked").set;if(i!==n&&a){const t=new Event("click",{bubbles:r});a.call(e,n),e.dispatchEvent(t)}}),[i,n,r]),(0,a.createElement)("input",(0,l.A)({type:"checkbox","aria-hidden":!0,defaultChecked:n},c,{tabIndex:-1,ref:s,style:{...e.style,...o,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function v(e){return e?"checked":"unchecked"}const w=_,k=(0,a.forwardRef)(((e,t)=>{const{__scopeSwitch:n,...r}=e,c=b("SwitchThumb",n);return(0,a.createElement)(u.sG.span,(0,l.A)({"data-state":v(c.checked),"data-disabled":c.disabled?"":void 0},r,{ref:t}))}));var E=n(4219);const S=(0,r.memo)((({value:e,onChange:t,required:n,disabled:r,className:l,label:c,id:s})=>{const{getField:i}=(0,E.default)();let o=e;return"0"!==e&&"1"!==e||(o="1"===e),(0,a.createElement)("div",{className:"cmplz-input-group cmplz-switch-group"},(0,a.createElement)(w,{className:"cmplz-switch-root "+l,checked:o,onCheckedChange:e=>{"banner"===i(s).data_target&&(e=e?"1":"0"),t(e)},disabled:r,required:n},(0,a.createElement)(k,{className:"cmplz-switch-thumb"})))}))},34759:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(81621),r=n(16535),l=n(9588);const c=(0,a.vt)(((e,t)=>({integrationsLoaded:!1,fetching:!1,services:[],plugins:[],scripts:[],placeholders:[],blockedScripts:[],setScript:(t,n)=>{e((0,r.Ay)((e=>{if("block_script"===n){let n=e.blockedScripts;if(t.urls){for(const[e,a]of Object.entries(t.urls)){if(!a||0===a.length)continue;let e=!1;for(const[t,r]of Object.entries(n))a===t&&(e=!0);e||(n[a]=a)}e.blockedScripts=n}}const a=e.scripts[n].findIndex((e=>e.id===t.id));-1!==a&&(e.scripts[n][a]=t)})))},fetchIntegrationsData:async()=>{if(t().fetching)return;e({fetching:!0});const{services:n,plugins:a,scripts:r,placeholders:l,blocked_scripts:c}=await s();let i=r;i.block_script&&i.block_script.length>0&&i.block_script.forEach(((e,t)=>{e.id=t})),i.add_script&&i.add_script.length>0&&i.add_script.forEach(((e,t)=>{e.id=t})),i.whitelist_script&&i.whitelist_script.length>0&&i.whitelist_script.forEach(((e,t)=>{e.id=t})),e((()=>({integrationsLoaded:!0,services:n,plugins:a,scripts:i,fetching:!1,placeholders:l,blockedScripts:c})))},addScript:n=>{e({fetching:!0}),t().scripts[n]&&Array.isArray(t().scripts[n])||e((0,r.Ay)((e=>{e.scripts[n]=[]}))),e((0,r.Ay)((e=>{e.scripts[n].push({name:"general",id:e.scripts[n].length,enable:!0})})));let a=t().scripts;return l.doAction("update_scripts",{scripts:a}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},saveScript:(n,a)=>{e({fetching:!0}),t().scripts[a]&&Array.isArray(t().scripts[a])||e((0,r.Ay)((e=>{e.scripts[a]=[]}))),e((0,r.Ay)((e=>{const t=e.scripts[a].findIndex((e=>e.id===n.id));-1!==t&&(e.scripts[a][t]=n)})));let c=t().scripts;return l.doAction("update_scripts",{scripts:c}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},deleteScript:(n,a)=>{e({fetching:!0}),t().scripts[a]&&Array.isArray(t().scripts[a])||e((0,r.Ay)((e=>{e.scripts[a]=[]}))),e((0,r.Ay)((e=>{const t=e.scripts[a].findIndex((e=>e.id===n.id));-1!==t&&e.scripts[a].splice(t,1)})));let c=t().scripts;return l.doAction("update_scripts",{scripts:c}).then((t=>(e({fetching:!1}),t))).catch((e=>{console.error(e)}))},updatePluginStatus:async(t,n)=>{e({fetching:!0}),e((0,r.Ay)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].enabled=n)})));const a=await l.doAction("update_plugin_status",{plugin:t,enabled:n}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),a},updatePlaceholderStatus:async(t,n,a)=>{e({fetching:!0}),a&&e((0,r.Ay)((e=>{const a=e.plugins.findIndex((e=>e.id===t));-1!==a&&(e.plugins[a].placeholder=n?"enabled":"disabled")})));const c=await l.doAction("update_placeholder_status",{id:t,enabled:n}).then((e=>e)).catch((e=>{console.error(e)}));return e({fetching:!1}),c}}))),s=()=>l.doAction("get_integrations_data",{}).then((e=>e)).catch((e=>{console.error(e)}))},60093:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(51609),r=n(34759),l=n(86087),c=n(27723),s=n(4219),i=n(32921),o=n(10800);const d=(0,l.memo)((()=>{const{updatePlaceholderStatus:e,fetching:t,updatePluginStatus:d,integrationsLoaded:p,plugins:u,fetchIntegrationsData:h}=(0,r.default)(),[g,m]=(0,l.useState)(""),[f,b]=(0,l.useState)(!1),[_,y]=(0,l.useState)(""),{getFieldValue:v}=(0,s.default)(),[w,k]=(0,l.useState)(null);(0,l.useEffect)((()=>{n.e(3757).then(n.bind(n,83757)).then((({default:e})=>{k((()=>e))}))}),[]),(0,l.useEffect)((()=>{p||h(),p&&(1==v("safe_mode")?(y((0,c.__)("Safe Mode enabled. To manage integrations, disable Safe Mode under Tools - Support.","complianz-gdpr")),b(!0)):0===u.length&&(y((0,c.__)("No active plugins detected in the integrations list.","complianz-gdpr")),b(!0)))}),[p]),(0,l.useEffect)((()=>{}),[u]);const E=[{name:(0,c.__)("Plugin","complianz-gdpr"),selector:e=>e.label,sortable:!0,grow:5},{name:(0,c.__)("Placeholder","complianz-gdpr"),selector:e=>e.placeholderControl,sortable:!0,sortFunction:(e,t)=>{const n=e.placeholder,a=t.placeholder;return n>a?1:a>n?-1:0},grow:2},{name:(0,c.__)("Status","complianz-gdpr"),selector:e=>e.enabledControl,sortable:!0,sortFunction:(e,t)=>{const n=e.enabled,a=t.enabled;return n>a?1:a>n?-1:0},grow:1,right:!0}];let S=u.filter((e=>e.label.toLowerCase().includes(g.toLowerCase())));S.sort(((e,t)=>e.label<t.label?-1:e.label>t.label?1:0));let z=[];return S.forEach((n=>{let r={...n};r.enabledControl=(0,a.createElement)(o.default,{disabled:t,className:"cmplz-switch-input-tiny",value:n.enabled,onChange:e=>(async(e,t)=>{await d(e.id,t),await h()})(n,e)}),r.placeholderControl=(0,a.createElement)(a.Fragment,null,"none"!==n.placeholder&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(o.default,{className:"cmplz-switch-input-tiny",disabled:"none"===n.placeholder||t,value:"enabled"===n.placeholder,onChange:t=>(async(t,n)=>{await e(t.id,n,!0)})(n,t)}))),z.push(r)})),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("p",null,(0,c.__)("Below you will find the plugins currently detected and integrated with Complianz. Most plugins work by default, but you can also add a plugin to the script center or add it to the integration list.","complianz-gdpr"),(0,i.default)("https://complianz.io/developers-guide-for-third-party-integrations"),(0,c.__)("Enabled plugins will be blocked on the front-end of your website until the user has given consent (opt-in), or after the user has revoked consent (opt-out). When possible a placeholder is activated. You can also disable or configure the placeholder to your liking.","complianz-gdpr"),(0,i.default)("https://complianz.io/blocking-recaptcha-manually/")),(0,a.createElement)("div",{className:"cmplz-table-header"},u.length>5&&(0,a.createElement)("input",{type:"text",placeholder:(0,c.__)("Search","complianz-gdpr"),value:g,onChange:e=>m(e.target.value)})),(f||0===S.length)&&(0,a.createElement)("div",{className:"cmplz-settings-overlay"},(0,a.createElement)("div",{className:"cmplz-settings-overlay-message"},_)),0===z.length&&(0,a.createElement)(a.Fragment,null),!f&&z.length>0&&w&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(w,{columns:E,data:z,dense:!0,pagination:!0,paginationPerPage:5,noDataComponent:(0,a.createElement)("div",{className:"cmplz-no-documents"},(0,c.__)("No plugins","complianz-gdpr")),persistTableHead:!0,theme:"really-simple-plugins",customStyles:{headCells:{style:{paddingLeft:"0",paddingRight:"0"}},cells:{style:{paddingLeft:"0",paddingRight:"0"}}}})))}))},32921:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(51609),r=n(27723),l=n(44124);const c=e=>(0,a.createElement)(a.Fragment,null," ",(0,a.createElement)(l.default,{url:e,target:"_blank",rel:"noopener noreferrer",text:(0,r.__)("For more information, please read this %sarticle%s.","complianz-gdpr")})," ")},85357:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(51609);function r(e){const t=(0,a.useRef)({value:e,previous:e});return(0,a.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}}}]);