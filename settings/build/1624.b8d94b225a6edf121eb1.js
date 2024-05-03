"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[1624,9091,622,9758,1366],{99091:(e,t,n)=>{n.r(t),n.d(t,{UseCookieScanData:()=>o});var r=n(81621),a=n(9588);const o=(0,r.vt)(((e,t)=>({initialLoadCompleted:!1,setInitialLoadCompleted:t=>e({initialLoadCompleted:t}),iframeLoaded:!1,loading:!1,nextPage:!1,progress:0,cookies:[],lastLoadedIframe:"",setIframeLoaded:t=>e({iframeLoaded:t}),setLastLoadedIframe:t=>e((e=>({lastLoadedIframe:t}))),setProgress:t=>e({progress:t}),fetchProgress:()=>(e({loading:!0}),a.doAction("get_scan_progress",{}).then((t=>(e({initialLoadCompleted:!0,loading:!1,nextPage:t.next_page,progress:t.progress,cookies:t.cookies}),t))))})))},61624:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var r=n(86087),a=n(27723),o=n(90622),s=n(81366);const c=(0,r.memo)((()=>{const[e,t]=(0,r.useState)(!1),[c,l]=(0,r.useState)(null),{records:i,searchValue:d,setSearchValue:u,deleteRecords:p,recordsLoaded:m,fetchData:g,status:h,setStatus:f,resolveRecords:b,totalRecords:_,fetching:v,paginationPerPage:E,pagination:y,setPagination:k,orderBy:C,setOrderBy:N,order:I,setOrder:P,selectedRecords:w,setSelectedRecords:z,setIndeterminate:D,indeterminate:S}=(0,o.default)(),[R,x]=(0,r.useState)(null);(0,r.useEffect)((()=>{n.e(3757).then(n.bind(n,83757)).then((({default:e})=>{x((()=>e))}))}),[]),(0,r.useEffect)((()=>{m||g(E,1,C,I)}),[m]);const L=[{name:(0,r.createElement)(s.default,{options:{true:""},indeterminate:S,value:e,onChange:e=>(e=>{if(e){t(!0);let e=y.currentPage?y.currentPage:1,n=i.slice((e-1)*E,e*E);z(n.map((e=>e.ID)))}else t(!1),z([]);D(!1)})(e)}),selector:e=>e.selectControl,orderId:"select",grow:1},{name:(0,a.__)("Email","complianz-gdpr"),selector:e=>e.email,sortable:!0,orderId:"email",grow:3},{name:(0,a.__)("Status","complianz-gdpr"),selector:e=>1==e.resolved?(0,a.__)("Resolved","complianz-gdpr"):(0,a.__)("Open","complianz-gdpr"),sortable:!0,orderId:"resolved",grow:1},{name:(0,a.__)("Region","complianz-gdpr"),selector:e=>e.region?(0,r.createElement)("img",{alt:"region",width:"20px",height:"20px",src:cmplz_settings.plugin_url+"assets/images/"+e.region+".svg"}):"",sortable:!0,grow:1},{name:(0,a.__)("Date","complianz-gdpr"),selector:e=>e.request_date,sortable:!0,grow:3},{name:(0,a.__)("Data Request","complianz-gdpr"),selector:e=>e.type?(0,r.createElement)("a",{target:"_blank",rel:"noopener noreferrer",href:"https://complianz.io/"+e.type.slug},e.type.short):"",sortable:!0,orderId:"resolved",right:!0,grow:3}];let O=[...i],A=[];return O.forEach((e=>{let n={...e};n.selectControl=(0,r.createElement)(s.default,{disabled:v,value:w.includes(n.ID),options:{true:""},onChange:e=>((e,n)=>{let r=[...w];e?r.includes(n)||(r.push(n),z(r)):(r=[...w.filter((e=>e!==n))],z(r));let a=y.currentPage?y.currentPage:1,o=i.slice((a-1)*E,a*E),s=!0,c=!1;o.forEach((e=>{r.includes(e.ID)?c=!0:s=!1})),s?(t(!0),D(!1)):c?(t(!1),D(!0)):D(!1)})(e,n.ID)}),A.push(n)})),(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"cmplz-table-header"},(0,r.createElement)("div",{className:"cmplz-table-header-controls"},(0,r.createElement)("select",{value:h,onChange:e=>(e=>{f(e),setTimeout((()=>{g(E,1,C,I)}),500)})(e.target.value)},(0,r.createElement)("option",{value:"all"},(0,a.__)("All","complianz-gdpr")),(0,r.createElement)("option",{value:"open"},(0,a.__)("Open","complianz-gdpr")),(0,r.createElement)("option",{value:"resolved"},(0,a.__)("Resolved","complianz-gdpr"))),(0,r.createElement)("input",{className:"cmplz-datatable-search",type:"text",placeholder:(0,a.__)("Search","complianz-gdpr"),value:d,onChange:e=>(e=>{clearTimeout(c),u(e);const t=setTimeout((()=>{g(E,1,C,I)}),500);l(t)})(e.target.value)}))),w.length>0&&(0,r.createElement)("div",{className:"cmplz-selected-document"},w.length>1&&(0,a.__)("%s items selected","complianz-gdpr").replace("%s",w.length),1===w.length&&(0,a.__)("1 item selected","complianz-gdpr"),(0,r.createElement)("div",{className:"cmplz-selected-document-controls"},i.filter((e=>w.includes(e.ID)&&1!=e.resolved)).length>0&&(0,r.createElement)("button",{disabled:v,className:"button button-default",onClick:()=>b(w)},(0,a.__)("Mark as resolved","complianz-gdpr")),(0,r.createElement)("button",{disabled:v,className:"button button-default cmplz-reset-button",onClick:()=>(async e=>{z([]),await p(e)})(w)},(0,a.__)("Delete","complianz-gdpr")))),R&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)(R,{columns:L,data:A,dense:!0,pagination:!0,paginationServer:!0,noDataComponent:(0,r.createElement)("div",{className:"cmplz-no-documents"},(0,a.__)("No records","complianz-gdpr")),persistTableHead:!0,theme:"really-simple-plugins",customStyles:{headCells:{style:{paddingLeft:"0",paddingRight:"0"}},cells:{style:{paddingLeft:"0",paddingRight:"0"}}},paginationPerPage:E,onChangePage:e=>{k({...y,currentPage:e}),g()},paginationState:y,paginationTotalRows:_,onChangeRowsPerPage:async(e,t)=>{k({...y,currentPage:t}),g(e,t,C,I)},onSort:async(e,t)=>{N(e.orderId),P(t),g()},sortServer:!0})))}))},90622:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(81621),a=n(9588),o=n(16535);n(86087);const s=(0,r.vt)(((e,t)=>({recordsLoaded:!1,searchValue:"",setSearchValue:t=>e({searchValue:t}),status:"open",setStatus:t=>e({status:t}),selectedRecords:[],setSelectedRecords:t=>e({selectedRecords:t}),fetching:!1,generating:!1,progress:!1,records:[],totalRecords:0,totalOpen:0,exportLink:"",noData:!1,indeterminate:!1,setIndeterminate:t=>e({indeterminate:t}),paginationPerPage:10,pagination:{currentPage:1},setPagination:t=>e({pagination:t}),orderBy:"ID",setOrderBy:t=>e({orderBy:t}),order:"DESC",setOrder:t=>e({order:t}),deleteRecords:async n=>{let r={};r.per_page=t().paginationPerPage,r.page=t().pagination.currentPage,r.order=t().order.toUpperCase(),r.orderBy=t().orderBy,r.search=t().searchValue,r.status=t().status;let o=t().records.filter((e=>n.includes(e.ID)));e((e=>({records:e.records.filter((e=>!n.includes(e.ID)))}))),r.records=o,await a.doAction("delete_datarequests",r).then((e=>e)).catch((e=>{console.error(e)})),await t().fetchData(),t().setSelectedRecords([]),t().setIndeterminate(!1)},resolveRecords:async n=>{let r={};r.per_page=t().paginationPerPage,r.page=t().pagination.currentPage,r.order=t().order.toUpperCase(),r.orderBy=t().orderBy,r.search=t().searchValue,r.status=t().status,e((0,o.Ay)((e=>{e.records.forEach((function(t,r){n.includes(t.ID)&&(e.records[r].resolved=!0)}))}))),r.records=t().records.filter((e=>n.includes(e.ID))),await a.doAction("resolve_datarequests",r).then((e=>e)).catch((e=>{console.error(e)})),await t().fetchData(),t().setSelectedRecords([]),t().setIndeterminate(!1)},fetchData:async()=>{if(t().fetching)return;e({fetching:!0});let n={};n.per_page=t().paginationPerPage,n.page=t().pagination.currentPage,n.order=t().order.toUpperCase(),n.orderBy=t().orderBy,n.search=t().searchValue,n.status=t().status;const{records:r,totalRecords:o,totalOpen:s}=await a.doAction("get_datarequests",n).then((e=>e)).catch((e=>{console.error(e)}));e((()=>({recordsLoaded:!0,records:r,totalRecords:o,totalOpen:s,fetching:!1})))},startExport:async()=>{e({generating:!0,progress:0,exportLink:""})},fetchExportDatarequestsProgress:async(t,n,r)=>{(t=void 0!==t&&t)||e({generating:!0});let o={};o.startDate=n,o.endDate=r,o.statusOnly=t;const{progress:s,exportLink:c,noData:l}=await a.doAction("export_datarequests",o).then((e=>e)).catch((e=>{console.error(e)}));let i=!1;s<100&&(i=!0),e({progress:s,exportLink:c,generating:i,noData:l})}})))},79758:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=n(86087),a=n(9588),o=n(4219),s=n(52043),c=n(56427),l=n(99091),i=n(32828);const d=(0,r.memo)((({type:e="action",style:t="tertiary",label:n,onClick:d,href:u="",target:p="",disabled:m,action:g,field:h,children:f})=>{if(!n&&!f)return null;const b=(h&&h.button_text?h.button_text:n)||f,{fetchFieldsData:_,showSavedSettingsNotice:v}=(0,o.default)(),{setInitialLoadCompleted:E,setProgress:y}=(0,l.UseCookieScanData)(),{setProgressLoaded:k}=(0,i.default)(),{selectedSubMenuItem:C}=(0,s.default)(),[N,I]=(0,r.useState)(!1),P=`button cmplz-button button--${t} button-${e}`,w=async e=>{await a.doAction(h.action,{}).then((e=>{e.success&&(_(C),"reset_settings"===e.id&&(E(!1),y(0),k(!1)),v(e.message))}))},z=h&&h.warn?h.warn:"";return"action"===e?(0,r.createElement)(r.Fragment,null,c.__experimentalConfirmDialog&&(0,r.createElement)(c.__experimentalConfirmDialog,{isOpen:N,onConfirm:async()=>{I(!1),await w()},onCancel:()=>{I(!1)}},z),(0,r.createElement)("button",{className:P,onClick:async t=>{if("action"!==e||!d)return"action"===e&&g?c.__experimentalConfirmDialog?void(h&&h.warn?I(!0):await w()):void await w():void(window.location.href=h.url);d(t)},disabled:m},b)):"link"===e?(0,r.createElement)("a",{className:P,href:u,target:p},b):void 0}))},81366:(e,t,n)=>{n.r(t),n.d(t,{default:()=>z});var r=n(86087),a=n(58168),o=n(51609),s=n(91071),c=n(62133),l=n(9957),i=n(81351),d=n(85357),u=n(31769),p=n(7971),m=n(12579);const g="Checkbox",[h,f]=(0,c.A)(g),[b,_]=h(g),v=(0,o.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,name:r,checked:c,defaultChecked:d,required:u,disabled:p,value:g="on",onCheckedChange:h,...f}=e,[_,v]=(0,o.useState)(null),C=(0,s.s)(t,(e=>v(e))),N=(0,o.useRef)(!1),I=!_||Boolean(_.closest("form")),[P=!1,w]=(0,i.i)({prop:c,defaultProp:d,onChange:h}),z=(0,o.useRef)(P);return(0,o.useEffect)((()=>{const e=null==_?void 0:_.form;if(e){const t=()=>w(z.current);return e.addEventListener("reset",t),()=>e.removeEventListener("reset",t)}}),[_,w]),(0,o.createElement)(b,{scope:n,state:P,disabled:p},(0,o.createElement)(m.sG.button,(0,a.A)({type:"button",role:"checkbox","aria-checked":y(P)?"mixed":P,"aria-required":u,"data-state":k(P),"data-disabled":p?"":void 0,disabled:p,value:g},f,{ref:C,onKeyDown:(0,l.m)(e.onKeyDown,(e=>{"Enter"===e.key&&e.preventDefault()})),onClick:(0,l.m)(e.onClick,(e=>{w((e=>!!y(e)||!e)),I&&(N.current=e.isPropagationStopped(),N.current||e.stopPropagation())}))})),I&&(0,o.createElement)(E,{control:_,bubbles:!N.current,name:r,value:g,checked:P,required:u,disabled:p,style:{transform:"translateX(-100%)"}}))})),E=e=>{const{control:t,checked:n,bubbles:r=!0,...s}=e,c=(0,o.useRef)(null),l=(0,d.Z)(n),i=(0,u.X)(t);return(0,o.useEffect)((()=>{const e=c.current,t=window.HTMLInputElement.prototype,a=Object.getOwnPropertyDescriptor(t,"checked").set;if(l!==n&&a){const t=new Event("click",{bubbles:r});e.indeterminate=y(n),a.call(e,!y(n)&&n),e.dispatchEvent(t)}}),[l,n,r]),(0,o.createElement)("input",(0,a.A)({type:"checkbox","aria-hidden":!0,defaultChecked:!y(n)&&n},s,{tabIndex:-1,ref:c,style:{...e.style,...i,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function y(e){return"indeterminate"===e}function k(e){return y(e)?"indeterminate":e?"checked":"unchecked"}const C=v,N=(0,o.forwardRef)(((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...s}=e,c=_("CheckboxIndicator",n);return(0,o.createElement)(p.C,{present:r||y(c.state)||!0===c.state},(0,o.createElement)(m.sG.span,(0,a.A)({"data-state":k(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}));var I=n(27723),P=n(45111),w=n(79758);const z=(0,r.memo)((({indeterminate:e,label:t,value:n,id:a,onChange:o,required:s,disabled:c,options:l={}})=>{const[i,d]=(0,r.useState)(!1),[u,p]=(0,r.useState)(!1);let m=n;Array.isArray(m)||(m=""===m?[]:[m]),(0,r.useEffect)((()=>{let e=1===Object.keys(l).length&&"true"===Object.keys(l)[0];d(e)}),[]),e&&(n=!0);const g=m;let h=!1;Object.keys(l).length>10&&(h=!0);const f=e=>i?n:g.includes(""+e)||g.includes(parseInt(e)),b=()=>{p(!u)};let _=c&&!Array.isArray(c);return 0===Object.keys(l).length?(0,r.createElement)(r.Fragment,null,(0,I.__)("No options found","complianz-gdpr")):(0,r.createElement)("div",{className:"cmplz-checkbox-group"},Object.entries(l).map((([l,d],p)=>(0,r.createElement)("div",{key:l,className:"cmplz-checkbox-group__item"+(!u&&p>9?" cmplz-hidden":"")},(0,r.createElement)(C,{className:"cmplz-checkbox-group__checkbox",id:a+"_"+l,checked:f(l),"aria-label":t,disabled:_||Array.isArray(c)&&c.includes(l),required:s,onCheckedChange:e=>((e,t)=>{if(i)o(!n);else{const e=g.includes(""+t)||g.includes(parseInt(t))?g.filter((e=>e!==""+t&&e!==parseInt(t))):[...g,t];o(e)}})(0,l)},(0,r.createElement)(N,{className:"cmplz-checkbox-group__indicator"},(0,r.createElement)(P.default,{name:e?"indeterminate":"check",size:14,color:"dark-blue"}))),(0,r.createElement)("label",{className:"cmplz-checkbox-group__label",htmlFor:a+"_"+l},d)))),!u&&h&&(0,r.createElement)(w.default,{onClick:()=>b()},(0,I.__)("Show more","complianz-gdpr")),u&&h&&(0,r.createElement)(w.default,{onClick:()=>b()},(0,I.__)("Show less","complianz-gdpr")))}))},7971:(e,t,n)=>{n.d(t,{C:()=>c});var r=n(51609),a=n(75795),o=n(91071),s=n(88200);const c=e=>{const{present:t,children:n}=e,c=function(e){const[t,n]=(0,r.useState)(),o=(0,r.useRef)({}),c=(0,r.useRef)(e),i=(0,r.useRef)("none"),d=e?"mounted":"unmounted",[u,p]=function(e,t){return(0,r.useReducer)(((e,n)=>{const r=t[e][n];return null!=r?r:e}),e)}(d,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return(0,r.useEffect)((()=>{const e=l(o.current);i.current="mounted"===u?e:"none"}),[u]),(0,s.N)((()=>{const t=o.current,n=c.current;if(n!==e){const r=i.current,a=l(t);e?p("MOUNT"):"none"===a||"none"===(null==t?void 0:t.display)?p("UNMOUNT"):p(n&&r!==a?"ANIMATION_OUT":"UNMOUNT"),c.current=e}}),[e,p]),(0,s.N)((()=>{if(t){const e=e=>{const n=l(o.current).includes(e.animationName);e.target===t&&n&&(0,a.flushSync)((()=>p("ANIMATION_END")))},n=e=>{e.target===t&&(i.current=l(o.current))};return t.addEventListener("animationstart",n),t.addEventListener("animationcancel",e),t.addEventListener("animationend",e),()=>{t.removeEventListener("animationstart",n),t.removeEventListener("animationcancel",e),t.removeEventListener("animationend",e)}}p("ANIMATION_END")}),[t,p]),{isPresent:["mounted","unmountSuspended"].includes(u),ref:(0,r.useCallback)((e=>{e&&(o.current=getComputedStyle(e)),n(e)}),[])}}(t),i="function"==typeof n?n({present:c.isPresent}):r.Children.only(n),d=(0,o.s)(c.ref,i.ref);return"function"==typeof n||c.isPresent?(0,r.cloneElement)(i,{ref:d}):null};function l(e){return(null==e?void 0:e.animationName)||"none"}c.displayName="Presence"},85357:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(51609);function a(e){const t=(0,r.useRef)({value:e,previous:e});return(0,r.useMemo)((()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous)),[e])}}}]);