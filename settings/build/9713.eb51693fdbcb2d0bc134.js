"use strict";(globalThis.webpackChunkcomplianz_gdpr=globalThis.webpackChunkcomplianz_gdpr||[]).push([[9713],{89713:(e,t,i)=>{i.r(t),i.d(t,{default:()=>s});var l=i(51609),a=i(86087),r=i(70470),n=(i(43158),i(51289),i(20047),i(27723)),o=i(45111);const s=(0,a.memo)((e=>{let t=e.mode?e.mode:"css",i=e.height?e.height:"200px",s=e.field&&e.field.default?e.field.default:e.placeholder;const[c,d]=(0,a.useState)(e.value),[p,u]=(0,a.useState)(!1);(0,a.useEffect)((()=>{if(c===e.value)return;const t=setTimeout((()=>{e.onChange(c)}),500);return()=>{clearTimeout(t)}}),[c]);let m=e.disabled?"cmplz-editor-disabled":"";return(0,l.createElement)("div",{className:m},p&&(0,l.createElement)("div",{className:"cmplz-error-text"},(0,l.createElement)(o.default,{name:"error",size:13,color:"red"}),(0,l.createElement)("p",null,(0,n.__)("Write your JavaScript without wrapping it in script tags.","complianz-gdpr"))),(0,l.createElement)(r.Ay,{readOnly:e.disabled,placeholder:"//"+s,mode:t,theme:"monokai",width:"100%",height:i,onChange:e=>(e=>{(e.includes("<script>")||e.includes("<\/script>"))&&u(!0),e=(e=e.replace(/<script>/gi,"")).replace(/<\/script>/gi,""),d(e)})(e),fontSize:12,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:c,setOptions:{enableBasicAutocompletion:!1,enableLiveAutocompletion:!1,enableSnippets:!1,showLineNumbers:!0,tabSize:2,useWorker:!1}}))}))}}]);