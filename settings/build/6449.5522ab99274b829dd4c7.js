"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[6449],{88830:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var n=a(51609),l=a(27723),i=a(4219),o=a(88499),s=a(45111),r=a(86087),d=a(56427);const u=(0,r.memo)((()=>{const{cssLoading:e,selectedBanner:t}=(0,o.default)(),[a,u]=(0,r.useState)(!1),[c,f]=(0,r.useState)(!1),{updateField:m,setChangedField:p,fields:g}=(0,i.default)(),[_,C]=(0,r.useState)(!1);(0,r.useEffect)((()=>{e||u(!1)}),[e]),(0,r.useEffect)((()=>{a||f(!1)}),[g]);const b=async()=>{C(!1),f(!0),await h()},h=()=>{u(!0);let e=t.banner_fields;for(const t of e)if(t.hasOwnProperty("default")){if("hidden"===t.type)continue;m(t.id,t.default),p(t.id,t.default)}};return(0,n.createElement)(n.Fragment,null,d.__experimentalConfirmDialog&&(0,n.createElement)(d.__experimentalConfirmDialog,{isOpen:_,onConfirm:()=>b(),onCancel:()=>C(!1)},(0,l.__)("Are you sure you want to reset this banner to the default settings?","complianz-gdpr")),(0,n.createElement)("button",{disabled:c||a,onClick:()=>(async()=>{d.__experimentalConfirmDialog?C(!0):await b()})(),className:"button button-default"},(0,l.__)("Reset","complianz-gdpr"),a&&(0,n.createElement)(s.default,{name:"loading",color:"grey"})))}))}}]);