import{g as tt,b as et,s as T,_ as o,c as nt,d as it,u as ot,f as rt,h as st,m as at}from"./createSvgIcon-nDnDnEkS.js";import{r as c,j as C}from"./index-vZK4kHq-.js";import{T as lt,g as b}from"./Paper-oVe26zF4.js";import{u as pt}from"./api-bW8whBTP.js";function ct(n){return tt("MuiCollapse",n)}et("MuiCollapse",["root","horizontal","vertical","entered","hidden","wrapper","wrapperInner"]);const dt=["addEndListener","children","className","collapsedSize","component","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"],ut=n=>{const{orientation:e,classes:r}=n,d={root:["root",`${e}`],entered:["entered"],hidden:["hidden"],wrapper:["wrapper",`${e}`],wrapperInner:["wrapperInner",`${e}`]};return st(d,ct,r)},ht=T("div",{name:"MuiCollapse",slot:"Root",overridesResolver:(n,e)=>{const{ownerState:r}=n;return[e.root,e[r.orientation],r.state==="entered"&&e.entered,r.state==="exited"&&!r.in&&r.collapsedSize==="0px"&&e.hidden]}})(({theme:n,ownerState:e})=>o({height:0,overflow:"hidden",transition:n.transitions.create("height")},e.orientation==="horizontal"&&{height:"auto",width:0,transition:n.transitions.create("width")},e.state==="entered"&&o({height:"auto",overflow:"visible"},e.orientation==="horizontal"&&{width:"auto"}),e.state==="exited"&&!e.in&&e.collapsedSize==="0px"&&{visibility:"hidden"})),mt=T("div",{name:"MuiCollapse",slot:"Wrapper",overridesResolver:(n,e)=>e.wrapper})(({ownerState:n})=>o({display:"flex",width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),ft=T("div",{name:"MuiCollapse",slot:"WrapperInner",overridesResolver:(n,e)=>e.wrapperInner})(({ownerState:n})=>o({width:"100%"},n.orientation==="horizontal"&&{width:"auto",height:"100%"})),U=c.forwardRef(function(e,r){const d=nt({props:e,name:"MuiCollapse"}),{addEndListener:S,children:_,className:A,collapsedSize:g="0px",component:k,easing:$,in:D,onEnter:W,onEntered:j,onEntering:I,onExit:M,onExited:q,onExiting:F,orientation:H="vertical",style:z,timeout:a=at.standard,TransitionComponent:B=lt}=d,G=it(d,dt),x=o({},d,{orientation:H,collapsedSize:g}),u=ut(x),L=pt(),N=c.useRef(),l=c.useRef(null),v=c.useRef(),E=typeof g=="number"?`${g}px`:g,h=H==="horizontal",m=h?"width":"height";c.useEffect(()=>()=>{clearTimeout(N.current)},[]);const w=c.useRef(null),J=ot(r,w),p=t=>i=>{if(t){const s=w.current;i===void 0?t(s):t(s,i)}},R=()=>l.current?l.current[h?"clientWidth":"clientHeight"]:0,K=p((t,i)=>{l.current&&h&&(l.current.style.position="absolute"),t.style[m]=E,W&&W(t,i)}),O=p((t,i)=>{const s=R();l.current&&h&&(l.current.style.position="");const{duration:f,easing:y}=b({style:z,timeout:a,easing:$},{mode:"enter"});if(a==="auto"){const P=L.transitions.getAutoHeightDuration(s);t.style.transitionDuration=`${P}ms`,v.current=P}else t.style.transitionDuration=typeof f=="string"?f:`${f}ms`;t.style[m]=`${s}px`,t.style.transitionTimingFunction=y,I&&I(t,i)}),Q=p((t,i)=>{t.style[m]="auto",j&&j(t,i)}),V=p(t=>{t.style[m]=`${R()}px`,M&&M(t)}),X=p(q),Y=p(t=>{const i=R(),{duration:s,easing:f}=b({style:z,timeout:a,easing:$},{mode:"exit"});if(a==="auto"){const y=L.transitions.getAutoHeightDuration(i);t.style.transitionDuration=`${y}ms`,v.current=y}else t.style.transitionDuration=typeof s=="string"?s:`${s}ms`;t.style[m]=E,t.style.transitionTimingFunction=f,F&&F(t)}),Z=t=>{a==="auto"&&(N.current=setTimeout(t,v.current||0)),S&&S(w.current,t)};return C.jsx(B,o({in:D,onEnter:K,onEntered:Q,onEntering:O,onExit:V,onExited:X,onExiting:Y,addEndListener:Z,nodeRef:w,timeout:a==="auto"?null:a},G,{children:(t,i)=>C.jsx(ht,o({as:k,className:rt(u.root,A,{entered:u.entered,exited:!D&&E==="0px"&&u.hidden}[t]),style:o({[h?"minWidth":"minHeight"]:E},z),ownerState:o({},x,{state:t}),ref:J},i,{children:C.jsx(mt,{ownerState:o({},x,{state:t}),className:u.wrapper,ref:l,children:C.jsx(ft,{ownerState:o({},x,{state:t}),className:u.wrapperInner,children:_})})}))}))});U.muiSupportAuto=!0;const yt=U;export{yt as C};