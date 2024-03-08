import{r as d,j as n,u as X,a as he,L as u,c as ce,R as we,O as Oe,l as Re}from"./index-vZK4kHq-.js";import{r as L,i as S}from"./createSvgIcon-fH8reqyQ.js";import{C as Ee}from"./Collapse-0jeMBs3k.js";import{L as Ie}from"./LoadingState-nS-ufRD3.js";import{v as Pe}from"./auth-0Ts5VopI.js";import{P as Te}from"./PreLoading-1phjFUxc.js";import{u as Ne}from"./useDispatch-p258G9b6.js";import{u as Ae}from"./useQuery-gHNXYr0D.js";import{u as ze,a as V,_ as f,g as Z,b as Q,s as w,e as He,c as Y,d as z,f as me,h as J,i as E,j as P,k as le,l as de}from"./createSvgIcon-nDnDnEkS.js";import{u as Be}from"./api-bW8whBTP.js";import{e as ue,u as We}from"./useSlotProps-EihwSW_v.js";import{P as xe,G as De}from"./Paper-oVe26zF4.js";import{o as U}from"./useId-1r21JnAh.js";import{I as Fe}from"./IconButton-AL-8Nztl.js";import"./useControlled-Ox__sokD.js";import"./EmptyState.module-2GihuqGv.js";import"./CircularProgress-7S8O-8Xs.js";import"./ButtonBase-5HU3EUAE.js";function pe(e){return e.substring(2).toLowerCase()}function qe(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}function Ue(e){const{children:t,disableReactTree:s=!1,mouseEvent:o="onClick",onClickAway:r,touchEvent:a="onTouchEnd"}=e,c=d.useRef(!1),v=d.useRef(null),C=d.useRef(!1),h=d.useRef(!1);d.useEffect(()=>(setTimeout(()=>{C.current=!0},0),()=>{C.current=!1}),[]);const m=ze(t.ref,v),x=V(p=>{const _=h.current;h.current=!1;const b=U(v.current);if(!C.current||!v.current||"clientX"in p&&qe(p,b))return;if(c.current){c.current=!1;return}let i;p.composedPath?i=p.composedPath().indexOf(v.current)>-1:i=!b.documentElement.contains(p.target)||v.current.contains(p.target),!i&&(s||!_)&&r(p)}),y=p=>_=>{h.current=!0;const b=t.props[p];b&&b(_)},M={ref:m};return a!==!1&&(M[a]=y(a)),d.useEffect(()=>{if(a!==!1){const p=pe(a),_=U(v.current),b=()=>{c.current=!0};return _.addEventListener(p,x),_.addEventListener("touchmove",b),()=>{_.removeEventListener(p,x),_.removeEventListener("touchmove",b)}}},[x,a]),o!==!1&&(M[o]=y(o)),d.useEffect(()=>{if(o!==!1){const p=pe(o),_=U(v.current);return _.addEventListener(p,x),()=>{_.removeEventListener(p,x)}}},[x,o]),n.jsx(d.Fragment,{children:d.cloneElement(t,M)})}function Ve(e={}){const{autoHideDuration:t=null,disableWindowBlurListener:s=!1,onClose:o,open:r,resumeHideDuration:a}=e,c=d.useRef();d.useEffect(()=>{if(!r)return;function i(l){l.defaultPrevented||(l.key==="Escape"||l.key==="Esc")&&(o==null||o(l,"escapeKeyDown"))}return document.addEventListener("keydown",i),()=>{document.removeEventListener("keydown",i)}},[r,o]);const v=V((i,l)=>{o==null||o(i,l)}),C=V(i=>{!o||i==null||(clearTimeout(c.current),c.current=setTimeout(()=>{v(null,"timeout")},i))});d.useEffect(()=>(r&&C(t),()=>{clearTimeout(c.current)}),[r,t,C]);const h=i=>{o==null||o(i,"clickaway")},m=()=>{clearTimeout(c.current)},x=d.useCallback(()=>{t!=null&&C(a??t*.5)},[t,a,C]),y=i=>l=>{const g=i.onBlur;g==null||g(l),x()},M=i=>l=>{const g=i.onFocus;g==null||g(l),m()},p=i=>l=>{const g=i.onMouseEnter;g==null||g(l),m()},_=i=>l=>{const g=i.onMouseLeave;g==null||g(l),x()};return d.useEffect(()=>{if(!s&&r)return window.addEventListener("focus",x),window.addEventListener("blur",m),()=>{window.removeEventListener("focus",x),window.removeEventListener("blur",m)}},[s,x,r]),{getRootProps:(i={})=>{const l=f({},ue(e),ue(i));return f({role:"presentation"},i,l,{onBlur:y(l),onFocus:M(l),onMouseEnter:p(l),onMouseLeave:_(l)})},onClickAway:h}}function Ge(e){return Z("MuiSnackbarContent",e)}Q("MuiSnackbarContent",["root","message","action"]);const Ke=["action","className","message","role"],Xe=e=>{const{classes:t}=e;return J({root:["root"],action:["action"],message:["message"]},Ge,t)},Ze=w(xe,{name:"MuiSnackbarContent",slot:"Root",overridesResolver:(e,t)=>t.root})(({theme:e})=>{const t=e.palette.mode==="light"?.8:.98,s=He(e.palette.background.default,t);return f({},e.typography.body2,{color:e.vars?e.vars.palette.SnackbarContent.color:e.palette.getContrastText(s),backgroundColor:e.vars?e.vars.palette.SnackbarContent.bg:s,display:"flex",alignItems:"center",flexWrap:"wrap",padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,flexGrow:1,[e.breakpoints.up("sm")]:{flexGrow:"initial",minWidth:288}})}),Qe=w("div",{name:"MuiSnackbarContent",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0"}),Ye=w("div",{name:"MuiSnackbarContent",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),Je=d.forwardRef(function(t,s){const o=Y({props:t,name:"MuiSnackbarContent"}),{action:r,className:a,message:c,role:v="alert"}=o,C=z(o,Ke),h=o,m=Xe(h);return n.jsxs(Ze,f({role:v,square:!0,elevation:6,className:me(m.root,a),ownerState:h,ref:s},C,{children:[n.jsx(Qe,{className:m.message,ownerState:h,children:c}),r?n.jsx(Ye,{className:m.action,ownerState:h,children:r}):null]}))}),en=Je;function nn(e){return Z("MuiSnackbar",e)}Q("MuiSnackbar",["root","anchorOriginTopCenter","anchorOriginBottomCenter","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft"]);const tn=["onEnter","onExited"],on=["action","anchorOrigin","autoHideDuration","children","className","ClickAwayListenerProps","ContentProps","disableWindowBlurListener","message","onBlur","onClose","onFocus","onMouseEnter","onMouseLeave","open","resumeHideDuration","TransitionComponent","transitionDuration","TransitionProps"],rn=e=>{const{classes:t,anchorOrigin:s}=e,o={root:["root",`anchorOrigin${E(s.vertical)}${E(s.horizontal)}`]};return J(o,nn,t)},_e=w("div",{name:"MuiSnackbar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[`anchorOrigin${E(s.anchorOrigin.vertical)}${E(s.anchorOrigin.horizontal)}`]]}})(({theme:e,ownerState:t})=>{const s={left:"50%",right:"auto",transform:"translateX(-50%)"};return f({zIndex:(e.vars||e).zIndex.snackbar,position:"fixed",display:"flex",left:8,right:8,justifyContent:"center",alignItems:"center"},t.anchorOrigin.vertical==="top"?{top:8}:{bottom:8},t.anchorOrigin.horizontal==="left"&&{justifyContent:"flex-start"},t.anchorOrigin.horizontal==="right"&&{justifyContent:"flex-end"},{[e.breakpoints.up("sm")]:f({},t.anchorOrigin.vertical==="top"?{top:24}:{bottom:24},t.anchorOrigin.horizontal==="center"&&s,t.anchorOrigin.horizontal==="left"&&{left:24,right:"auto"},t.anchorOrigin.horizontal==="right"&&{right:24,left:"auto"})})}),sn=d.forwardRef(function(t,s){const o=Y({props:t,name:"MuiSnackbar"}),r=Be(),a={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{action:c,anchorOrigin:{vertical:v,horizontal:C}={vertical:"bottom",horizontal:"left"},autoHideDuration:h=null,children:m,className:x,ClickAwayListenerProps:y,ContentProps:M,disableWindowBlurListener:p=!1,message:_,open:b,TransitionComponent:i=De,transitionDuration:l=a,TransitionProps:{onEnter:g,onExited:T}={}}=o,I=z(o.TransitionProps,tn),N=z(o,on),R=f({},o,{anchorOrigin:{vertical:v,horizontal:C},autoHideDuration:h,disableWindowBlurListener:p,TransitionComponent:i,transitionDuration:l}),H=rn(R),{getRootProps:B,onClickAway:$}=Ve(f({},R)),[O,A]=d.useState(!0),W=We({elementType:_e,getSlotProps:B,externalForwardedProps:N,ownerState:R,additionalProps:{ref:s},className:[H.root,x]}),D=q=>{A(!0),T&&T(q)},F=(q,Se)=>{A(!1),g&&g(q,Se)};return!b&&O?null:n.jsx(Ue,f({onClickAway:$},y,{children:n.jsx(_e,f({},W,{children:n.jsx(i,f({appear:!0,in:b,timeout:l,direction:v==="top"?"down":"up",onEnter:F,onExited:D},I,{children:m||n.jsx(en,f({message:_,action:c},M))}))}))}))}),an=sn;function cn(e){return Z("MuiAlert",e)}const ln=Q("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),fe=ln,dn=P(n.jsx("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),un=P(n.jsx("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),pn=P(n.jsx("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),_n=P(n.jsx("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),fn=P(n.jsx("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),vn=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],gn=e=>{const{variant:t,color:s,severity:o,classes:r}=e,a={root:["root",`${t}${E(s||o)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return J(a,cn,r)},hn=w(xe,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,t[s.variant],t[`${s.variant}${E(s.color||s.severity)}`]]}})(({theme:e,ownerState:t})=>{const s=e.palette.mode==="light"?le:de,o=e.palette.mode==="light"?de:le,r=t.color||t.severity;return f({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},r&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${r}Color`]:s(e.palette[r].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${r}StandardBg`]:o(e.palette[r].light,.9),[`& .${fe.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}},r&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${r}Color`]:s(e.palette[r].light,.6),border:`1px solid ${(e.vars||e).palette[r].light}`,[`& .${fe.icon}`]:e.vars?{color:e.vars.palette.Alert[`${r}IconColor`]}:{color:e.palette[r].main}},r&&t.variant==="filled"&&f({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${r}FilledColor`],backgroundColor:e.vars.palette.Alert[`${r}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[r].dark:e.palette[r].main,color:e.palette.getContrastText(e.palette[r].main)}))}),mn=w("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),xn=w("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),ve=w("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),ge={success:n.jsx(dn,{fontSize:"inherit"}),warning:n.jsx(un,{fontSize:"inherit"}),error:n.jsx(pn,{fontSize:"inherit"}),info:n.jsx(_n,{fontSize:"inherit"})},Cn=d.forwardRef(function(t,s){var o,r,a,c,v,C;const h=Y({props:t,name:"MuiAlert"}),{action:m,children:x,className:y,closeText:M="Close",color:p,components:_={},componentsProps:b={},icon:i,iconMapping:l=ge,onClose:g,role:T="alert",severity:I="success",slotProps:N={},slots:R={},variant:H="standard"}=h,B=z(h,vn),$=f({},h,{color:p,severity:I,variant:H}),O=gn($),A=(o=(r=R.closeButton)!=null?r:_.CloseButton)!=null?o:Fe,W=(a=(c=R.closeIcon)!=null?c:_.CloseIcon)!=null?a:fn,D=(v=N.closeButton)!=null?v:b.closeButton,F=(C=N.closeIcon)!=null?C:b.closeIcon;return n.jsxs(hn,f({role:T,elevation:0,ownerState:$,className:me(O.root,y),ref:s},B,{children:[i!==!1?n.jsx(mn,{ownerState:$,className:O.icon,children:i||l[I]||ge[I]}):null,n.jsx(xn,{ownerState:$,className:O.message,children:x}),m!=null?n.jsx(ve,{ownerState:$,className:O.action,children:m}):null,m==null&&g?n.jsx(ve,{ownerState:$,className:O.action,children:n.jsx(A,f({size:"small","aria-label":M,title:M,color:"inherit",onClick:g},D,{children:n.jsx(W,f({fontSize:"small"},F))}))}):null]}))}),bn=Cn;var ee={},kn=S;Object.defineProperty(ee,"__esModule",{value:!0});var Ce=ee.default=void 0,jn=kn(L()),Mn=n;Ce=ee.default=(0,jn.default)((0,Mn.jsx)("path",{fillRule:"evenodd",d:"M22 10c.32-3.28-4.28-6-9.99-6S1.7 6.72 2.02 10zM5.35 13.5c.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.64 2.18.64s1.73-.37 2.18-.64c.37-.23.59-.36 1.15-.36.55 0 .78.14 1.15.36.45.27 1.07.63 2.17.64v-1.98s-.79-.16-1.16-.38c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.6.36-1.15.36s-.78-.14-1.15-.36c-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36-.55 0-.78-.14-1.15-.36-.45-.27-1.07-.64-2.18-.64s-1.73.37-2.18.64c-.37.23-.59.36-1.15.36v2c1.11 0 1.73-.37 2.21-.64.37-.23.59-.36 1.14-.36M2 16v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2z"}),"LunchDining");var ne={},yn=S;Object.defineProperty(ne,"__esModule",{value:!0});var be=ne.default=void 0,$n=yn(L()),Ln=n;be=ne.default=(0,$n.default)((0,Ln.jsx)("path",{d:"M20 15.5c-1.25 0-2.45-.2-3.57-.57-.1-.03-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.21c.28-.26.36-.65.25-1C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1M5.03 5h1.5c.07.88.22 1.75.45 2.58l-1.2 1.21c-.4-1.21-.66-2.47-.75-3.79M19 18.97c-1.32-.09-2.6-.35-3.8-.76l1.2-1.2c.85.24 1.72.39 2.6.45zM18 11l5-5-5-5v3h-4v4h4z"}),"PhoneForwardedOutlined");var te={},Sn=S;Object.defineProperty(te,"__esModule",{value:!0});var G=te.default=void 0,wn=Sn(L()),On=n;G=te.default=(0,wn.default)((0,On.jsx)("path",{d:"M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4"}),"PersonOutlineOutlined");var oe={},Rn=S;Object.defineProperty(oe,"__esModule",{value:!0});var K=oe.default=void 0,En=Rn(L()),In=n;K=oe.default=(0,En.default)((0,In.jsx)("path",{d:"M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2zM6.16 6h12.15l-2.76 5H8.53zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2m10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"}),"ShoppingCartOutlined");var re={},Pn=S;Object.defineProperty(re,"__esModule",{value:!0});var ke=re.default=void 0,Tn=Pn(L()),Nn=n;ke=re.default=(0,Tn.default)((0,Nn.jsx)("path",{d:"m22 3-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zM11 19H4v-6h7zm9 0h-7v-2h7zm0-4h-7v-2h7zm0-4H4V8h16z"}),"NewspaperOutlined");const An="_breadCrumLink_kldgn_43",zn="_breadCrumText_kldgn_48",Hn="_container_kldgn_53",Bn="_goldLine_kldgn_59",Wn="_title_kldgn_66",Dn="_leftTitle_kldgn_74",Fn="_error_kldgn_81",qn="_modalContainer_kldgn_87",Un="_modalContent_kldgn_95",Vn="_titleModal_kldgn_105",Gn="_btnModal_kldgn_108",Kn="_btn_kldgn_108",Xn="_active_kldgn_135",Zn="_paginationContainer_kldgn_140",Qn="_btnContainer_kldgn_147",Yn="_counterContainer_kldgn_153",Jn="_counter_kldgn_153",et="_number_kldgn_171",nt="_inputLabel_kldgn_179",tt="_link_kldgn_185",ot="_categoryContainer_kldgn_215",rt="_category_kldgn_215",st="_categoryImgContainer_kldgn_225",at="_notFoundText_kldgn_229",it="_center_kldgn_234",ct="_offer_kldgn_240",lt="_stepCounter_kldgn_255",dt="_signupContainer_kldgn_261",ut="_headerMain_kldgn_278",pt="_nav_kldgn_282",_t="_navItem_kldgn_285",ft="_content_kldgn_292",vt="_profileSec_kldgn_299",gt="_mobileNav_kldgn_307",ht="_hamburgerButton_kldgn_312",mt="_mobileMenu_kldgn_312",xt="_logo_kldgn_315",Ct="_contactSearchSec_kldgn_327",bt="_topsec_kldgn_336",kt="_mobileMenuWrapper_kldgn_345",k={breadCrumLink:An,breadCrumText:zn,container:Hn,goldLine:Bn,title:Wn,leftTitle:Dn,error:Fn,modalContainer:qn,modalContent:Un,titleModal:Vn,btnModal:Gn,btn:Kn,active:Xn,paginationContainer:Zn,btnContainer:Qn,counterContainer:Yn,counter:Jn,number:et,inputLabel:nt,link:tt,"progress-container":"_progress-container_kldgn_198",categoryContainer:ot,category:rt,categoryImgContainer:st,notFoundText:at,center:it,offer:ct,"offer-header":"_offer-header_kldgn_249",stepCounter:lt,signupContainer:dt,headerMain:ut,nav:pt,navItem:_t,content:ft,profileSec:vt,mobileNav:gt,hamburgerButton:ht,mobileMenu:mt,logo:xt,contactSearchSec:Ct,topsec:bt,mobileMenuWrapper:kt},jt=()=>{const{isLoggedIn:e}=X(a=>a.user),t=he(),[s,o]=d.useState(!1),r=a=>{t(a),o(!1)};return n.jsxs(n.Fragment,{children:[n.jsxs("nav",{className:k.headerMain,children:[n.jsxs("div",{className:k.content,children:[n.jsxs("div",{className:k.profileSec,children:[n.jsx(u,{to:"/contact-us",children:n.jsx(be,{})}),n.jsx(u,{to:"/news",children:n.jsx(ke,{})})]}),n.jsx("div",{className:k.nav,children:n.jsxs("ul",{className:k.menuItems,children:[n.jsx("li",{className:k.navItem,children:n.jsx(u,{to:"/products/men",children:"men"})}),n.jsx("li",{className:k.navItem,children:n.jsx(u,{to:"/products/women",children:"woman"})}),n.jsx("li",{className:k.navItem,children:n.jsx(u,{to:"/products/sneakers",children:"sneakers"})}),n.jsx("li",{className:k.navItem,children:n.jsx(u,{to:"/products/bags",children:"bags"})})]})}),n.jsxs("div",{className:k.profileSec,children:[e?n.jsx(u,{to:"/account-details",children:n.jsx(G,{})}):n.jsx(u,{to:"/signin-or-register",children:"register / sign in "}),e&&n.jsx(u,{to:"/cart",children:n.jsx(K,{})})]})]}),n.jsxs("div",{children:[n.jsxs("div",{className:k.mobileNav,children:[n.jsx("button",{className:k.hamburgerButton,onClick:()=>o(a=>!a),children:n.jsx(Ce,{})}),n.jsxs("span",{children:[e?n.jsx(u,{to:"/account-details",children:n.jsx(G,{})}):n.jsx(u,{to:"/signin-or-register",children:"register / sign in "}),e&&n.jsx(u,{to:"/cart",children:n.jsx(K,{sx:{ml:2}})})]})]}),n.jsx("div",{className:k.mobileMenu,children:n.jsx(Ee,{orientation:"vertical",in:s,children:n.jsxs("ul",{className:k.mobileMenuWrapper,children:[n.jsx("li",{onClick:()=>r("/products/men"),children:"men"}),n.jsx("li",{onClick:()=>r("/products/women"),children:"women"}),n.jsx("li",{onClick:()=>r("/products/sneakers"),children:"sneakers"}),n.jsx("li",{onClick:()=>r("/products/bags"),children:"bags"}),e&&n.jsx("li",{onClick:()=>r("/account-details"),children:"account"}),e&&n.jsx("li",{onClick:()=>r("/cart"),children:"shopping cart"}),!e&&n.jsx("li",{onClick:()=>r("/signin-or-register"),children:"signin or register"})]})})})]})]}),n.jsx("div",{className:k.goldLine})]})};var se={},Mt=S;Object.defineProperty(se,"__esModule",{value:!0});var je=se.default=void 0;Lt(d);var yt=Mt(L()),$t=n;function Me(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,s=new WeakMap;return(Me=function(o){return o?s:t})(e)}function Lt(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var s=Me(t);if(s&&s.has(e))return s.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}return o.default=e,s&&s.set(e,o),o}je=se.default=(0,yt.default)((0,$t.jsx)("path",{d:"M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z"}),"Telegram");var ae={},St=S;Object.defineProperty(ae,"__esModule",{value:!0});var ye=ae.default=void 0;Rt(d);var wt=St(L()),Ot=n;function $e(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,s=new WeakMap;return($e=function(o){return o?s:t})(e)}function Rt(e,t){if(!t&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var s=$e(t);if(s&&s.has(e))return s.get(e);var o={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(a!=="default"&&Object.prototype.hasOwnProperty.call(e,a)){var c=r?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(o,a,c):o[a]=e[a]}return o.default=e,s&&s.set(e,o),o}ye=ae.default=(0,wt.default)((0,Ot.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub");const Et="_breadCrumLink_1vh43_43",It="_breadCrumText_1vh43_48",Pt="_container_1vh43_53",Tt="_goldLine_1vh43_59",Nt="_title_1vh43_66",At="_leftTitle_1vh43_74",zt="_error_1vh43_81",Ht="_modalContainer_1vh43_87",Bt="_modalContent_1vh43_95",Wt="_titleModal_1vh43_105",Dt="_btnModal_1vh43_108",Ft="_btn_1vh43_108",qt="_active_1vh43_135",Ut="_paginationContainer_1vh43_140",Vt="_btnContainer_1vh43_147",Gt="_counterContainer_1vh43_153",Kt="_counter_1vh43_153",Xt="_number_1vh43_171",Zt="_inputLabel_1vh43_179",Qt="_link_1vh43_185",Yt="_categoryContainer_1vh43_215",Jt="_category_1vh43_215",eo="_categoryImgContainer_1vh43_225",no="_notFoundText_1vh43_229",to="_center_1vh43_234",oo="_offer_1vh43_240",ro="_stepCounter_1vh43_255",so="_signupContainer_1vh43_261",ao="_footer_1vh43_278",io="_footerMain_1vh43_282",co="_content_1vh43_290",lo="_socialMedia_1vh43_293",uo="_iconCircle_1vh43_298",po="_developerInfo_1vh43_318",_o="_footerLinks_1vh43_328",fo="_col_1vh43_333",vo="_copyright_1vh43_355",j={breadCrumLink:Et,breadCrumText:It,container:Pt,goldLine:Tt,title:Nt,leftTitle:At,error:zt,modalContainer:Ht,modalContent:Bt,titleModal:Wt,btnModal:Dt,btn:Ft,active:qt,paginationContainer:Ut,btnContainer:Vt,counterContainer:Gt,counter:Kt,number:Xt,inputLabel:Zt,link:Qt,"progress-container":"_progress-container_1vh43_198",categoryContainer:Yt,category:Jt,categoryImgContainer:eo,notFoundText:no,center:to,offer:oo,"offer-header":"_offer-header_1vh43_249",stepCounter:ro,signupContainer:so,footer:ao,footerMain:io,content:co,socialMedia:lo,iconCircle:uo,developerInfo:po,footerLinks:_o,col:fo,copyright:vo},go=()=>{const{isLoggedIn:e}=X(t=>t.user);return n.jsxs("div",{className:j.footer,children:[n.jsx("div",{className:j.goldLine}),n.jsx("div",{className:j.footerMain,children:n.jsxs("div",{className:j.content,children:[n.jsxs("div",{className:j.socialMedia,children:[n.jsx(u,{to:"@FatemeNasiri78",className:j.iconCircle,target:"_blank",rel:"noopener noreferrer",children:n.jsx(je,{})}),n.jsx(u,{to:"https://github.com/FatemeNasiri122/",className:j.iconCircle,target:"_blank",rel:"noopener noreferrer",children:n.jsx(ye,{})}),n.jsx(u,{target:"_blank",rel:"noopener noreferrer",to:"https://www.linkedin.com/in/seyed-fateme-mirfallah-nasiri-05921424a/",className:j.iconCircle,children:n.jsx("span",{children:"in"})})]}),n.jsx("div",{className:j.goldLine}),n.jsxs("div",{className:j.footerLinks,children:[n.jsxs("div",{className:j.col,children:[n.jsx("h4",{children:"Our World"}),n.jsx(u,{to:"/about-us",children:"About "}),!e&&n.jsx(u,{to:"/signin-or-register",children:"signin or register"}),n.jsx(u,{to:"/news",children:"News"}),e&&n.jsx(u,{to:"/account-details",children:"account details"})]}),n.jsxs("div",{className:j.col,children:[n.jsx("h4",{children:"Customer care"}),n.jsx(u,{to:"/contact-us",children:"Contact us"}),e&&n.jsx(u,{to:"/cart",children:"cart"})]})]}),n.jsx("div",{className:j.goldLine}),n.jsx("div",{className:j.developerInfo,children:n.jsxs("p",{children:["made with ❤ by"," ",n.jsx(u,{to:"https://github.com/FatemeNasiri122/",target:"_blank",rel:"noopener noreferrer",children:"fateme nasiri"})]})})]})})]})};var ie={},ho=S;Object.defineProperty(ie,"__esModule",{value:!0});var Le=ie.default=void 0,mo=ho(L()),xo=n;Le=ie.default=(0,mo.default)((0,xo.jsx)("path",{d:"m4 12 1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8z"}),"ArrowUpward");const Co=()=>{const e=he(),[t,s]=d.useState(!1),o=()=>{document.body.scrollTop>20||document.documentElement.scrollTop>20?s(!0):s(!1)},r=()=>{document.documentElement.style.scrollBehavior="smooth",document.body.scrollTop=0,document.documentElement.scrollTop=0};return d.useEffect(()=>(r(),window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}),[e]),n.jsx(n.Fragment,{children:t&&n.jsx("button",{type:"click",onClick:()=>r(),className:"progress-container",children:n.jsx(Le,{sx:{color:"white"}})})})},Ho=()=>{const{showSnackbar:e,message:t,type:s}=X(a=>a.snack),o=Ne(),{isLoading:r}=Ae({queryKey:["verify-user"],refetchOnWindowFocus:!1,queryFn:async()=>Pe(),onSuccess:a=>{console.log(a),o(Re(a.user))},onError:a=>{console.log(a)}});return r?n.jsx(Te,{}):n.jsxs(n.Fragment,{children:[n.jsx(an,{anchorOrigin:{vertical:"top",horizontal:"center"},open:e,autoHideDuration:6e3,onClose:()=>o(ce()),children:n.jsx(bn,{onClose:()=>o(ce()),severity:s,sx:{width:"100%"},variant:"filled",children:t})}),n.jsx(jt,{}),n.jsx("div",{className:"container",children:n.jsx(we.Suspense,{fallback:n.jsx(Ie,{}),children:n.jsx(Oe,{})})}),n.jsx(go,{}),n.jsx(Co,{})]})};export{Ho as default};