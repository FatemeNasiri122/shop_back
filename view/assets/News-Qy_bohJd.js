import{j as e,L as m,r as u}from"./index-vZK4kHq-.js";import{G as o}from"./Grid-dKmXQ44L.js";import{E as a}from"./EmptyState--Ry6cSD0.js";import{g}from"./news-xIexVN8c.js";import{L as p}from"./LoadingState-nS-ufRD3.js";import{u as C}from"./useQuery-gHNXYr0D.js";import{B as q}from"./Breadcrumbs-YKKvqVKT.js";import{P as b}from"./Pagination-TBu6FZsg.js";import"./createSvgIcon-nDnDnEkS.js";import"./api-bW8whBTP.js";import"./extendSxProp-V3EAtz4R.js";import"./EmptyState.module-2GihuqGv.js";import"./CircularProgress-7S8O-8Xs.js";import"./ButtonBase-5HU3EUAE.js";import"./useSlotProps-EihwSW_v.js";import"./useControlled-Ox__sokD.js";const j="_breadCrumLink_x9mrq_43",f="_breadCrumText_x9mrq_48",h="_container_x9mrq_53",w="_goldLine_x9mrq_59",N="_title_x9mrq_66",y="_leftTitle_x9mrq_74",L="_error_x9mrq_81",T="_modalContainer_x9mrq_87",v="_modalContent_x9mrq_95",F="_titleModal_x9mrq_105",k="_btnModal_x9mrq_108",M="_btn_x9mrq_108",E="_active_x9mrq_135",I="_paginationContainer_x9mrq_140",S="_btnContainer_x9mrq_147",P="_counterContainer_x9mrq_153",B="_counter_x9mrq_153",G="_number_x9mrq_171",R="_inputLabel_x9mrq_179",K="_link_x9mrq_185",O="_categoryContainer_x9mrq_215",Q="_category_x9mrq_215",V="_categoryImgContainer_x9mrq_225",W="_notFoundText_x9mrq_229",$="_center_x9mrq_234",z="_offer_x9mrq_240",A="_stepCounter_x9mrq_255",D="_signupContainer_x9mrq_261",H="_NewsFooter_x9mrq_278",J="_imageContainer_x9mrq_295",t={breadCrumLink:j,breadCrumText:f,container:h,goldLine:w,title:N,leftTitle:y,error:L,modalContainer:T,modalContent:v,titleModal:F,btnModal:k,btn:M,active:E,paginationContainer:I,btnContainer:S,counterContainer:P,counter:B,number:G,inputLabel:R,link:K,"progress-container":"_progress-container_x9mrq_198",categoryContainer:O,category:Q,categoryImgContainer:V,notFoundText:W,center:$,offer:z,"offer-header":"_offer-header_x9mrq_249",stepCounter:A,signupContainer:D,NewsFooter:H,imageContainer:J};function U({data:n}){return e.jsxs(o,{container:!0,marginTop:"20px",children:[e.jsx(o,{item:!0,xs:12,display:{md:"none"},children:e.jsx("div",{className:t.imageContainer,children:e.jsx("img",{src:n.smallImage,alt:"news"})})}),e.jsx(o,{item:!0,md:3,display:{xs:"none",md:"block"},children:e.jsx("div",{className:t.imageContainer,children:e.jsx("img",{src:n.smallImage,alt:"news"})})}),e.jsxs(o,{item:!0,sm:12,md:8,marginLeft:"8px",children:[e.jsxs("div",{className:t.NewsContent,children:[e.jsx("strong",{children:n.title}),e.jsx("p",{className:t.text,children:n.content})]}),e.jsxs("div",{className:t.NewsFooter,children:[e.jsx("span",{children:n.date}),e.jsx(m,{to:`/news-view-more/${n._id}`,children:"VIEW MORE"})]})]})]})}const de=()=>{var i;const[n,c]=u.useState(1),{data:r,isSuccess:_,isError:l,isLoading:x}=C({queryKey:["news",n],queryFn:()=>g(n)});return x?e.jsx(p,{}):l?e.jsx(a,{data:"news"}):e.jsxs(e.Fragment,{children:[e.jsxs(q,{"aria-label":"breadcrumb",children:[e.jsx(m,{to:"/",className:"breadCrumLink",children:"home"}),e.jsx("span",{className:"breadCrumText",children:"News "})]}),r.news.length===0?e.jsx(a,{data:"news"}):e.jsxs(e.Fragment,{children:[(i=r==null?void 0:r.news)==null?void 0:i.map(s=>e.jsx(U,{data:s},s._id)),e.jsx("div",{className:"paginationContainer",children:e.jsx(b,{count:_&&Math.ceil((r==null?void 0:r.totalNewsNumber)/4),shape:"rounded",page:n,color:"primary",onChange:(s,d)=>c(d)})})]})]})};export{de as default};