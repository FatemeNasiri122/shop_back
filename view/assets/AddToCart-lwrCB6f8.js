import{j as e,u as P,r as q,d as w,b as z,a as M,o as $}from"./index-vZK4kHq-.js";import{r as C,i as y}from"./createSvgIcon-fH8reqyQ.js";import{d as H}from"./Add-qZi8WGnm.js";import{b as E}from"./auth-0Ts5VopI.js";import{u as I}from"./useMutation-CReK7ZDR.js";import{C as _}from"./CircularProgress-7S8O-8Xs.js";import{u as L}from"./useDispatch-p258G9b6.js";var l={},Q=y;Object.defineProperty(l,"__esModule",{value:!0});var R=l.default=void 0,T=Q(C()),F=e;R=l.default=(0,T.default)((0,F.jsx)("path",{d:"M19 13H5v-2h14z"}),"Remove");var u={},U=y;Object.defineProperty(u,"__esModule",{value:!0});var S=u.default=void 0,V=U(C()),B=e;S=u.default=(0,V.default)((0,B.jsx)("path",{d:"M16 9v10H8V9zm-1.5-6h-5l-1 1H5v2h14V4h-3.5zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2z"}),"DeleteOutlined");const A=({product:a,color:d,size:m,setErrorMsg:v,isAlreadyAdded:f,setIsAlreadyAdded:n})=>{var j,g;const{user:i,isLoggedIn:p}=P(t=>t.user),k=L(),[N,D]=q.useState(""),x=w(),{pathname:r}=z(),O=M();console.log(r.split("/")[1]);const{mutateAsync:c,isLoading:h}=I({mutationFn:async()=>E(N,a,d,m),onError:t=>{var s,b;console.log(t),k($({message:((b=(s=t==null?void 0:t.response)==null?void 0:s.data)==null?void 0:b.message)||"server error",type:"error"}))},onSuccess:async t=>{console.log(t),await Promise.all([x.invalidateQueries(["verify-user"]),x.invalidateQueries(["product"])])}}),o=async t=>{D(t);const s=r.split("/")[1];if(t==="remove-from-cart"){await c(),n(!1);return}console.log(s),s==="product"?d!==""&&m!==""&&p?(v(""),await c(),n(!0)):v("please select color and size"):(await c(),n(!0))};return console.log(f),p?r!=="/cart"&&!f?h?e.jsx("div",{className:"center",children:e.jsx(_,{sx:{width:"8px",height:"8px",marginTop:"16px"}})}):e.jsx("button",{onClick:()=>{a.numberOfProduct>0&&o("add-to-cart")},className:"btn",children:"add to Cart"}):e.jsx("div",{children:(g=(j=i==null?void 0:i.cart)==null?void 0:j.items)==null?void 0:g.map(t=>t.product._id===(a==null?void 0:a._id)&&e.jsx(e.Fragment,{children:e.jsxs("div",{className:"counter",children:[e.jsx("button",{onClick:()=>{o("remove-from-cart")},children:e.jsx(S,{})}),e.jsx("button",{onClick:()=>{t.count>1&&o("reduce-from-cart")},children:e.jsx(R,{})}),h?e.jsxs("span",{className:"number",children:[" ",e.jsx(_,{size:"16px"})," "]}):e.jsx("span",{className:"number",children:t.count}),e.jsx("button",{onClick:()=>{a.numberOfProduct>0&&o("add-to-cart")},children:e.jsx(H,{})})]})}))}):e.jsx("button",{onClick:()=>{localStorage.setItem("backUrl",r),O("/signin-or-register")},className:"btn",children:"add to Cart"})};export{A,R as d};
