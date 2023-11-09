"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[340,3909,1789,4064],{53909:function(e,t,a){a.r(t);var s=a(69307),c=a(65736),i=a(23361),n=a(9818),l=a(48399),o=a(14064),r=a(56293),d=a(82387),u=a(82485),m=a(27856),p=a.n(m);t.default=e=>{let{notice:t,index:a}=e;const{dismissNotice:m,fetchProgressData:_}=(0,d.default)(),{getField:g,setHighLightField:f,fetchFieldsData:h}=(0,r.default)(),{setSelectedSubMenuItem:v}=(0,u.default)();let b="premium"===t.icon,z=t.url&&-1!==t.url.indexOf("complianz.io"),N=t.status.charAt(0).toUpperCase()+t.status.slice(1);return(0,s.createElement)("div",{key:a,className:"cmplz-task-element"},(0,s.createElement)("span",{className:"cmplz-task-status cmplz-"+t.status},N),(0,s.createElement)("p",{className:"cmplz-task-message",dangerouslySetInnerHTML:{__html:p().sanitize(t.message)}}),z&&t.url&&(0,s.createElement)("a",{target:"_blank",href:t.url,rel:"noopener noreferrer"},(0,c.__)("More info","complianz-gdpr")),t.clear_cache_id&&(0,s.createElement)("span",{className:"cmplz-task-enable button button-secondary",onClick:()=>(async e=>{let t={};t.cache_id=e,l.doAction("clear_cache",t).then((async e=>{(0,n.dispatch)("core/notices").createNotice("success",(0,c.__)("Re-started test","complianz-gdpr"),{__unstableHTML:!0,id:"cmplz_clear_cache",type:"snackbar",isDismissible:!0}).then((0,o.default)(3e3)).then((e=>{(0,n.dispatch)("core/notices").removeNotice("rsssl_clear_cache")})),await h(),await _()}))})(t.clear_cache_id)},(0,c.__)("Re-check","complianz-gdpr")),!b&&!z&&t.url&&(0,s.createElement)("a",{className:"cmplz-task-enable button button-secondary",href:t.url},(0,c.__)("View","complianz-gdpr")),!b&&t.highlight_field_id&&(0,s.createElement)("span",{className:"cmplz-task-enable button button-secondary",onClick:()=>(async()=>{f(t.highlight_field_id);let e=g(t.highlight_field_id);await v(e.menu_id)})()},(0,c.__)("View","complianz-gdpr")),t.plus_one&&(0,s.createElement)("span",{className:"cmplz-plusone"},"1"),t.dismissible&&"completed"!==t.status&&(0,s.createElement)("div",{className:"cmplz-task-dismiss"},(0,s.createElement)("button",{type:"button",onClick:e=>m(t.id)},(0,s.createElement)(i.default,{name:"times"}))))}},10340:function(e,t,a){a.r(t);var s=a(69307),c=a(53909),i=a(14531),n=a(65736),l=a(56293),o=a(71789),r=a(82387);t.default=(0,s.memo)((e=>{const{fields:t,setChangedField:a,updateField:d}=(0,l.default)(),{setProgressLoaded:u}=(0,r.default)(),{licenseStatus:m,licenseNotices:p,getLicenseNotices:_,noticesLoaded:g,activateLicense:f,deactivateLicense:h,processing:v}=(0,o.default)();(0,s.useEffect)((()=>{g||_()}),[]);let b=e.field,z=v?"cmplz-processing":"";return(0,s.createElement)("div",{className:"components-base-control"},(0,s.createElement)("div",{className:"cmplz-license-field"},(0,s.createElement)("input",{className:"components-text-control__input",type:"password",id:b.id,value:b.value,onChange:e=>{return t=e.target.value,a(b.id,t),void d(b.id,t);var t}}),(0,s.createElement)("button",{className:"button button-default",disabled:v,onClick:()=>(async()=>{"valid"===m?await h():await f(e.field.value),u(!1)})()},"valid"===m&&(0,n.__)("Deactivate","complianz-gdpr"),"valid"!==m&&(0,n.__)("Activate","complianz-gdpr"))),!g&&(0,s.createElement)(i.default,null),g&&(0,s.createElement)("div",{className:z},p.map(((e,t)=>(0,s.createElement)(c.default,{key:t,index:t,notice:e,highLightField:""})))))}))},71789:function(e,t,a){a.r(t);var s=a(30270),c=a(48399);const i=(0,s.Ue)(((e,t)=>({licenseStatus:cmplz_settings.licenseStatus,processing:!1,licenseNotices:[],noticesLoaded:!1,getLicenseNotices:async()=>{const{licenseStatus:t,notices:a}=await c.doAction("license_notices",{}).then((e=>e));e((e=>({noticesLoaded:!0,licenseNotices:a,licenseStatus:t})))},activateLicense:async t=>{let a={};a.license=t,e({processing:!0});const{licenseStatus:s,notices:i}=await c.doAction("activate_license",a);e((e=>({processing:!1,licenseNotices:i,licenseStatus:s})))},deactivateLicense:async()=>{e({processing:!0});const{licenseStatus:t,notices:a}=await c.doAction("deactivate_license");e((e=>({processing:!1,licenseNotices:a,licenseStatus:t})))}})));t.default=i},14064:function(e,t,a){a.r(t),t.default=e=>function(t){return new Promise((a=>setTimeout((()=>a(t)),e)))}}}]);