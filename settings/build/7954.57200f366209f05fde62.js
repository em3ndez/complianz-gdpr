"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[7954],{27954:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var u=n(51609),a=n(86087);const r=(0,a.memo)((({value:e,onChange:t,onError:n,required:r,disabled:l,id:p,name:i})=>{const c=p||i,[s,o]=(0,a.useState)("");return(0,a.useEffect)((()=>{e||(e=""),o(e)}),[]),(0,a.useEffect)((()=>{if(s===e)return;const u=setTimeout((()=>{t(s),null===s.match(/^\+?[\d\-\(\)\.\s]*$/)&&n("invalid_phone")}),500);return()=>{clearTimeout(u)}}),[s]),(0,u.createElement)("div",{className:"cmplz-input-group cmplz-phone-input-group"},(0,u.createElement)("input",{type:"tel",id:c,name:i,value:s,onChange:e=>(e=>{o(e)})(e.target.value),required:r,disabled:l,className:"cmplz-phone-input-group__input"}))}))}}]);