"use strict";(self.webpackChunkcomplianz_gdpr=self.webpackChunkcomplianz_gdpr||[]).push([[8084,8895],{98084:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var s=a(51609),l=a(45111),n=a(27723),o=a(88895),r=a(86087);const i=()=>{const[e,t]=(0,r.useState)(!1),[a,i]=(0,r.useState)(1),[c,d]=(0,r.useState)(0),[m,g]=(0,r.useState)(0),{consentType:b,statisticsData:f,loaded:u,fetchStatisticsData:p,labels:h,setLabels:k}=(0,o.default)();return(0,r.useEffect)((()=>{!u&&cmplz_settings.is_premium&&p()}),[]),(0,r.useEffect)((()=>{if(""===b||!u)return;if(!f||!f.hasOwnProperty(b))return;let e=[...f[b].labels],t=f[b].categories;t="optin"===b?t.filter((e=>"functional"===e||"no_warning"===e||"do_not_track"===e)):t.filter((e=>"functional"===e||"marketing"===e||"statistics"===e||"preferences"===e));let a=t.map((e=>f[b].categories.indexOf(e)));for(let t=a.length-1;t>=0;t--)e.splice(a[t],1);k(e)}),[u,b]),(0,r.useEffect)((()=>{if(""===b||!u||!f)return;let e=f[b].datasets.filter((e=>e.default));if(e.length>0){let a=e[0].data,s=a.reduce(((e,t)=>parseInt(e)+parseInt(t)),0);s=s>0?s:1,i(s),d(e[0].full_consent),g(e[0].no_consent),a=a.slice(2),t(a)}}),[u,b]),(0,s.createElement)("div",{className:"cmplz-statistics"},(0,s.createElement)("div",{className:"cmplz-statistics-select"},(0,s.createElement)("div",{className:"cmplz-statistics-select-item"},(0,s.createElement)(l.default,{name:"dial-max-light",color:"green",size:"22"}),(0,s.createElement)("h2",null,c),(0,s.createElement)("span",null,(0,n.__)("Full Consent","complianz-gdpr"))),(0,s.createElement)("div",{className:"cmplz-statistics-select-item"},(0,s.createElement)(l.default,{name:"dial-min-light",color:"red",size:"22"}),(0,s.createElement)("h2",null,m),(0,s.createElement)("span",null,(0,n.__)("No Consent","complianz-gdpr")))),(0,s.createElement)("div",{className:"cmplz-statistics-list"},h.length>0&&h.map(((t,n)=>{return(0,s.createElement)("div",{className:"cmplz-statistics-list-item",key:n},(e=>{let t="dial-med-low-light";return 1===e?t="dial-med-light":2===e?t="dial-light":3===e?t="dial-off-light":4===e&&(t="dial-min-light"),(0,s.createElement)(s.Fragment,null,(0,s.createElement)(l.default,{name:t,color:"black"}))})(n),(0,s.createElement)("p",{className:"cmplz-statistics-list-item-text"},t),(0,s.createElement)("p",{className:"cmplz-statistics-list-item-number"},e.hasOwnProperty(n)?(o=e[n],o=parseInt(o),Math.round(o/a*100)):0,"%"));var o}))))}},88895:(e,t,a)=>{a.r(t),a.d(t,{default:()=>r});var s=a(81621),l=a(9588);const n={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["0","0","0","0","0","0"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["0","0","0","0","0","0"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"B",fill:"false",borderDash:[0,0]}],max:5}},o={optin:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"Demo A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5},optout:{labels:["Functional","Statistics","Marketing","Do Not Track","No Choice","No Warning"],categories:["functional","statistics","marketing","do_not_track","no_choice","no_warning"],datasets:[{data:["29","747","174","292","30","10"],backgroundColor:"rgba(46, 138, 55, 1)",borderColor:"rgba(46, 138, 55, 1)",label:"A (default)",fill:"false",borderDash:[0,0]},{data:["3","536","240","389","45","32"],backgroundColor:"rgba(244, 191, 62, 1)",borderColor:"rgba(244, 191, 62, 1)",label:"Demo B",fill:"false",borderDash:[0,0]}],max:5}},r=(0,s.vt)(((e,t)=>({consentType:"optin",setConsentType:t=>{e({consentType:t})},statisticsLoading:!1,consentTypes:[],regions:[],defaultConsentType:"optin",loaded:!1,statisticsData:n,emptyStatisticsData:n,bestPerformerEnabled:!1,daysLeft:"",abTrackingCompleted:!1,labels:[],setLabels:t=>{e({labels:t})},fetchStatisticsData:async()=>{if(!cmplz_settings.is_premium)return void e({saving:!1,loaded:!0,consentType:"optin",consentTypes:["optin","optout"],statisticsData:o,defaultConsentType:"optin",bestPerformerEnabled:!1,regions:"eu",daysLeft:11,abTrackingCompleted:!1});if(e({saving:!0}),t().loaded)return;const{daysLeft:a,abTrackingCompleted:s,consentTypes:n,statisticsData:r,defaultConsentType:i,regions:c,bestPerformerEnabled:d}=await l.doAction("get_statistics_data",{}).then((e=>e)).catch((e=>{console.error(e)}));e({saving:!1,loaded:!0,consentType:i,consentTypes:n,statisticsData:r,defaultConsentType:i,bestPerformerEnabled:d,regions:c,daysLeft:a,abTrackingCompleted:s})}})))}}]);