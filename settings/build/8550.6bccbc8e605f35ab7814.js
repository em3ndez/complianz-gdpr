"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[8550,9091,5207,9758,1366],{99091:(e,t,n)=>{n.r(t),n.d(t,{UseCookieScanData:()=>r});var a=n(81621),o=n(9588);const r=(0,a.vt)(((e,t)=>({initialLoadCompleted:!1,setInitialLoadCompleted:t=>e({initialLoadCompleted:t}),iframeLoaded:!1,loading:!1,nextPage:!1,progress:0,cookies:[],lastLoadedIframe:"",setIframeLoaded:t=>e({iframeLoaded:t}),setLastLoadedIframe:t=>e((e=>({lastLoadedIframe:t}))),setProgress:t=>e({progress:t}),fetchProgress:()=>(e({loading:!0}),o.doAction("get_scan_progress",{}).then((t=>(e({initialLoadCompleted:!0,loading:!1,nextPage:t.next_page,progress:t.progress,cookies:t.cookies}),t))))})))},28550:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var a=n(51609),o=n(5207),r=n(86087),l=n(27723),c=n(45111),s=n(81366);const i=(0,r.memo)((()=>{const{documents:e,documentsLoaded:t,fetchData:i,deleteDocuments:d,editDocument:u}=(0,o.default)(),[m,p]=(0,r.useState)(""),[f]=(0,r.useState)(""),[g,h]=(0,r.useState)(""),[b,_]=(0,r.useState)([]),[v,E]=(0,r.useState)(!1),[y,k]=(0,r.useState)({}),[C,w]=(0,r.useState)(!1),[N,L]=(0,r.useState)(!1),[z,D]=(0,r.useState)(null);(0,r.useEffect)((()=>{n.e(3757).then(n.bind(n,83757)).then((({default:e})=>{D((()=>e))}))}),[]),(0,r.useEffect)((()=>{t||i()}),[t]);const S=async()=>{let t=e.filter((e=>b.includes(e.id)));E(!0),h(!0);const n=async()=>{if(t.length>0){const e=t.shift(),a=e.download_url;try{let o=new XMLHttpRequest;o.responseType="blob",o.open("get",a,!0),o.send(),o.onreadystatechange=function(){if(4===this.readyState&&200===this.status){let n=window.URL.createObjectURL(this.response),a=window.document.createElement("a");a.setAttribute("href",n),a.setAttribute("download",e.title),window.document.body.appendChild(a),a.click(),_(t),E(!1),h(!1),setTimeout((function(){window.URL.revokeObjectURL(n)}),6e4)}},await n()}catch(e){console.error(e),h(!1)}}};await n()},A=e=>{let t=[...e];return""!==f&&(t=t.filter((e=>e.region===f))),t.sort(((e,t)=>e.title<t.title?-1:e.title>t.title?1:0)),t.filter((e=>e.title.toLowerCase().includes(m.toLowerCase()))),t},I=[{name:(0,a.createElement)(s.default,{options:{true:""},indeterminate:C,value:N,onChange:t=>(t=>{if(t){L(!0);let t=y.currentPage?y.currentPage:1,n=A(e).slice(5*(t-1),5*t);_(n.map((e=>e.id)))}else L(!1),_([]);w(!1)})(t)}),selector:e=>e.selectControl,grow:1,minWidth:"50px"},{name:(0,l.__)("Document","complianz-gdpr"),selector:e=>e.title,sortable:!0,grow:6},{name:(0,l.__)("Region","complianz-gdpr"),selector:e=>(0,a.createElement)("img",{alt:"region",width:"20px",height:"20px",src:cmplz_settings.plugin_url+"assets/images/"+e.region+".svg"}),sortable:!0,grow:2,right:!0},{name:(0,l.__)("Date","complianz-gdpr"),selector:e=>e.date,sortable:!0,grow:4,right:!0,minWidth:"200px"}];let x=A(e),O=[];x.forEach((t=>{let n={...t};n.selectControl=(0,a.createElement)(s.default,{value:b.includes(n.id),options:{true:""},onChange:t=>((t,n)=>{let a=t,o=[...b];a?o.includes(n)||(o.push(n),_(o)):(o=[...b.filter((e=>e!==n))],_(o));let r=y.currentPage?y.currentPage:1,l=A(e).slice(5*(r-1),5*r),c=!0,s=!1;l.forEach((e=>{o.includes(e.id)?s=!0:c=!1})),c?(L(!0),w(!1)):s?(L(!1),w(!0)):w(!1)})(t,n.id)}),O.push(n)}));let P=b.length>1;return P||1!==b.length||(P=""!==e.filter((e=>b.includes(e.id)))[0].download_url),(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{className:"cmplz-table-header"},(0,a.createElement)("div",{className:"cmplz-table-header-controls"},(0,a.createElement)("input",{className:"cmplz-datatable-search",type:"text",placeholder:(0,l.__)("Search","complianz-gdpr"),value:m,onChange:e=>p(e.target.value)}))),b.length>0&&(0,a.createElement)("div",{className:"cmplz-selected-document"},b.length>1&&(0,l.__)("%s items selected","complianz-gdpr").replace("%s",b.length),1===b.length&&(0,l.__)("1 item selected","complianz-gdpr"),(0,a.createElement)("div",{className:"cmplz-selected-document-controls"},(0,a.createElement)("button",{disabled:g||b.length>1,className:"button button-default",onClick:()=>u(b[0])},(0,l.__)("Edit","complianz-gdpr")),P&&(0,a.createElement)("button",{disabled:g,className:"button button-default cmplz-btn-reset",onClick:()=>S()},(0,l.__)("Download Data Breach Report","complianz-gdpr"),v&&(0,a.createElement)(c.default,{name:"loading",color:"grey"})),!P&&(0,a.createElement)("button",{disabled:!0,className:"button button-default cmplz-btn-reset",onClick:()=>S()},(0,l.__)("Reporting not required","complianz-gdpr")),(0,a.createElement)("button",{className:"button button-default cmplz-reset-button",onClick:()=>(async e=>{_([]),await d(e)})(b)},(0,l.__)("Delete","complianz-gdpr")))),z&&(0,a.createElement)(a.Fragment,null,(0,a.createElement)(z,{columns:I,data:O,dense:!0,pagination:!0,paginationPerPage:5,onChangePage:e=>{k({...y,currentPage:e})},paginationState:y,noDataComponent:(0,a.createElement)("div",{className:"cmplz-no-documents"},(0,l.__)("No documents","complianz-gdpr")),persistTableHead:!0,theme:"really-simple-plugins",customStyles:{headCells:{style:{paddingLeft:"0",paddingRight:"0"}},cells:{style:{paddingLeft:"0",paddingRight:"0"}}}})))}))},5207:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(81621),o=n(16535),r=n(9588),l=n(73710);const c=(0,a.vt)(((e,t)=>({documentsLoaded:!1,savedDocument:{},conclusions:[],region:"",fileName:"",fetching:!1,updating:!1,loadingFields:!1,documents:[],regions:[],fields:[],editDocumentId:!1,resetEditDocumentId:t=>{e({editDocumentId:!1,region:""})},editDocument:async t=>{e({updating:!0}),await r.doAction("load_databreach_report",{id:t}).then((t=>{e({fields:t.fields,region:t.region,updating:!1,fileName:t.file_name})})).catch((e=>{console.error(e)})),e({editDocumentId:t})},setRegion:t=>{e({region:t})},updateField:(n,a)=>{let r=!1,c=!1;e((0,o.Ay)((e=>{e.fields.forEach((function(e,t){e.id===n&&(c=t,r=!0)})),!1!==c&&(e.fields[c].value=a)})));let s=(0,l.updateFieldsListWithConditions)(t().fields);e({fields:s})},save:async n=>{e({updating:!0});let a=t().editDocumentId,o=0;await r.doAction("save_databreach_report",{fields:t().fields,region:n,post_id:a}).then((t=>(o=t.post_id,e({updating:!1,conclusions:t.conclusions}),t))).catch((e=>{console.error(e)})),await t().fetchData();let l=t().documents.filter((e=>e.id===o));l.length>0&&e({savedDocument:l[0]})},deleteDocuments:async n=>{let a=t().documents.filter((e=>n.includes(e.id)));e((e=>({documents:e.documents.filter((e=>!n.includes(e.id)))})));let o={};o.documents=a,await r.doAction("delete_databreach_report",o).then((e=>e)).catch((e=>{console.error(e)}))},fetchData:async()=>{if(t().fetching)return;e({fetching:!0});const{documents:n,regions:a}=await r.doAction("get_databreach_reports",{}).then((e=>e)).catch((e=>{console.error(e)}));e((e=>({documentsLoaded:!0,documents:n,regions:a,fetching:!1})))},fetchFields:async t=>{let n={region:t};e({loadingFields:!0});const{fields:a}=await r.doAction("get_databreach_report_fields",n).then((e=>e)).catch((e=>{console.error(e)}));let o=(0,l.updateFieldsListWithConditions)(a);e((e=>({fields:o,loadingFields:!1})))}})))},79758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var a=n(51609),o=n(86087),r=n(9588),l=n(4219),c=n(52043),s=n(56427),i=n(99091),d=n(32828);const u=(0,o.memo)((({type:e="action",style:t="tertiary",label:n,onClick:u,href:m="",target:p="",disabled:f,action:g,field:h,children:b})=>{if(!n&&!b)return null;const _=(h&&h.button_text?h.button_text:n)||b,{fetchFieldsData:v,showSavedSettingsNotice:E}=(0,l.default)(),{setInitialLoadCompleted:y,setProgress:k}=(0,i.UseCookieScanData)(),{setProgressLoaded:C}=(0,d.default)(),{selectedSubMenuItem:w}=(0,c.default)(),[N,L]=(0,o.useState)(!1),z=`button cmplz-button button--${t} button-${e}`,D=async e=>{await r.doAction(h.action,{}).then((e=>{e.success&&(v(w),"reset_settings"===e.id&&(y(!1),k(0),C(!1)),E(e.message))}))},S=h&&h.warn?h.warn:"";return"action"===e?(0,a.createElement)(a.Fragment,null,s.__experimentalConfirmDialog&&(0,a.createElement)(s.__experimentalConfirmDialog,{isOpen:N,onConfirm:async()=>{L(!1),await D()},onCancel:()=>{L(!1)}},S),(0,a.createElement)("button",{className:z,onClick:async t=>{if("action"!==e||!u)return"action"===e&&g?s.__experimentalConfirmDialog?void(h&&h.warn?L(!0):await D()):void await D():void(window.location.href=h.url);u(t)},disabled:f},_)):"link"===e?(0,a.createElement)("a",{className:z,href:m,target:p},_):void 0}))},81366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>D});var a=n(51609),o=n(58168),r=n(91071),l=n(62133),c=n(9957),s=n(81351),i=n(85357),d=n(31769),u=n(7971),m=n(12579);const p="Checkbox",[f,g]=(0,l.A)(p),[h,b]=f(p),_=(0,a.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,name:l,checked:i,defaultChecked:d,required:u,disabled:p,value:f="on",onCheckedChange:g,...b}=e,[_,k]=(0,a.useState)(null),C=(0,r.s)(t,(e=>k(e))),w=(0,a.useRef)(!1),N=!_||Boolean(_.closest("form")),[L=!1,z]=(0,s.i)({prop:i,defaultProp:d,onChange:g}),D=(0,a.useRef)(L);return(0,a.useEffect)((()=>{const e=null==_?void 0:_.form;if(e){const t=()=>z(D.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}}),[_,z]),(0,a.createElement)(h,{scope:n,state:L,disabled:p},(0,a.createElement)(m.sG.button,(0,o.A)({type:"button",role:"checkbox","aria-checked":E(L)?"mixed":L,"aria-required":u,"data-state":y(L),"data-disabled":p?"":void 0,disabled:p,value:f},b,{ref:C,onKeyDown:(0,c.m)(e.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault()})),onClick:(0,c.m)(e.onClick,(e=>{z((e=>!!E(e)||!e)),N&&(w.current=e.isPropagationStopped(),w.current||e.stopPropagation())}))})),N&&(0,a.createElement)(v,{control:_,bubbles:!w.current,name:l,value:f,checked:L,required:u,disabled:p,style:{transform:"translateX(-100%)"}}))})),v=e=>{const{control:t,checked:n,bubbles:r=!0,...l}=e,c=(0,a.useRef)(null),s=(0,i.Z)(n),u=(0,d.X)(t);return(0,a.useEffect)((()=>{const e=c.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked").set;if(s!==n&&a){const t=new Event("click",{bubbles:r});e.indeterminate=E(n),a.call(e,!E(n)&&n),e.dispatchEvent(t)}}),[s,n,r]),(0,a.createElement)("input",(0,o.A)({type:"checkbox","aria-hidden":!0,defaultChecked:!E(n)&&n},l,{tabIndex:-1,ref:c,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function E(e){return"indeterminate"===e}function y(e){return E(e)?"indeterminate":e?"checked":"unchecked"}const k=_,C=(0,a.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...l}=e,c=b("CheckboxIndicator",n);return(0,a.createElement)(u.C,{present:r||E(c.state)||!0===c.state},(0,a.createElement)(m.sG.span,(0,o.A)({"data-state":y(c.state),"data-disabled":c.disabled?"":void 0},l,{ref:t,style:{pointerEvents:"none",...e.style}})))}));var w=n(27723),N=n(45111),L=n(86087),z=n(79758);const D=(0,L.memo)((({indeterminate:e,label:t,value:n,id:o,onChange:r,required:l,disabled:c,options:s={}})=>{const[i,d]=(0,L.useState)(!1),[u,m]=(0,L.useState)(!1);let p=n;Array.isArray(p)||(p=""===p?[]:[p]),(0,L.useEffect)((()=>{let e=1===Object.keys(s).length&&"true"===Object.keys(s)[0];d(e)}),[]),e&&(n=!0);const f=p;let g=!1;Object.keys(s).length>10&&(g=!0);const h=e=>i?n:f.includes(""+e)||f.includes(parseInt(e)),b=()=>{m(!u)};let _=c&&!Array.isArray(c);return 0===Object.keys(s).length?(0,a.createElement)(a.Fragment,null,(0,w.__)("No options found","complianz-gdpr")):(0,a.createElement)("div",{className:"cmplz-checkbox-group"},Object.entries(s).map((([s,d],m)=>(0,a.createElement)("div",{key:s,className:"cmplz-checkbox-group__item"+(!u&&m>9?" cmplz-hidden":"")},(0,a.createElement)(k,{className:"cmplz-checkbox-group__checkbox",id:o+"_"+s,checked:h(s),"aria-label":t,disabled:_||Array.isArray(c)&&c.includes(s),required:l,onCheckedChange:e=>((e,t)=>{if(i)r(!n);else{const e=f.includes(""+t)||f.includes(parseInt(t))?f.filter((e=>e!==""+t&&e!==parseInt(t))):[...f,t];r(e)}})(0,s)},(0,a.createElement)(C,{className:"cmplz-checkbox-group__indicator"},(0,a.createElement)(N.default,{name:e?"indeterminate":"check",size:14,color:"dark-blue"}))),(0,a.createElement)("label",{className:"cmplz-checkbox-group__label",htmlFor:o+"_"+s},d)))),!u&&g&&(0,a.createElement)(z.default,{onClick:()=>b()},(0,w.__)("Show more","complianz-gdpr")),u&&g&&(0,a.createElement)(z.default,{onClick:()=>b()},(0,w.__)("Show less","complianz-gdpr")))}))},7971:(e,t,n)=>{n.d(t,{C:()=>c});var a=n(51609),o=n(75795),r=n(91071),l=n(88200);const c=e=>{const{present:t,children:n}=e,c=function(e){const[t,n]=(0,a.useState)(),r=(0,a.useRef)({}),c=(0,a.useRef)(e),i=(0,a.useRef)("none"),d=e?"mounted":"unmounted",[u,m]=function(e,t){return(0,a.useReducer)(((e,n)=>{const a=t[e][n];return null!=a?a:e}),e)}(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,a.useEffect)((()=>{const e=s(r.current);i.current="mounted"===u?e:"none"}),[u]),(0,l.N)((()=>{const t=r.current,n=c.current;if(n!==e){const a=i.current,o=s(t);e?m("MOUNT"):"none"===o||"none"===(null==t?void 0:t.display)?m("UNMOUNT"):m(n&&a!==o?"ANIMATION_OUT":"UNMOUNT"),c.current=e}}),[e,m]),(0,l.N)((()=>{if(t){const e=e=>{const n=s(r.current).includes(e.animationName);e.target===t&&n&&(0,o.flushSync)((()=>m("ANIMATION_END")))},n=e=>{e.target===t&&(i.current=s(r.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}m("ANIMATION_END")}),[t,m]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:(0,a.useCallback)((e=>{e&&(r.current=getComputedStyle(e)),n(e)}),[])}}(t),i="function"==typeof n?n({present:c.isPresent}):a.Children.only(n),d=(0,r.s)(c.ref,i.ref);return"function"==typeof n||c.isPresent?(0,a.cloneElement)(i,{ref:d}):null};function s(e){return(null==e?void 0:e.animationName)||"none"}c.displayName="Presence"},85357:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(51609);function o(e){const t=(0,a.useRef)({value:e,previous:e});return(0,a.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}}}]);