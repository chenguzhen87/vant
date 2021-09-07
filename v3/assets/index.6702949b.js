import{t as e,i as t,p as r,e as a,u as n}from"./use-translate.bf1abf23.js";import{b as l,a as o,c as i,s,d as c,e as d,f as u,w as p}from"./with-install.af140ae3.js";import{B as f,E as v,f as b,C as m,G as g,z as y,I as h,H as S,R as x,L as j,s as w,O as C,N as I,l as B,v as k}from"./vendor.09b5b9a9.js";import{a as N,r as R}from"./use-route.bc60204d.js";import{S as T,u as z,a as A}from"./index.55079559.js";import{u as L}from"./useParent.60a302fe.js";import{d as O}from"./constant.4d85ecb9.js";import{i as $}from"./style.ae88e9b6.js";import{c as W}from"./interceptor.9b43abfe.js";import{u as Z,a as q}from"./unit.36efb2dd.js";import{c as F,r as H}from"./utils.fd06bcd3.js";import{u as M}from"./use-refs.b4c6d67f.js";import{u as V}from"./use-expose.028ef04d.js";import{o as X}from"./on-popup-reopen.d2d6f1c6.js";import{S as D}from"./index.35e19747.js";import{B as E}from"./index.5afcfd01.js";import{u as G}from"./index.e4b17f1e.js";import{u as P}from"./useChildren.692bc2bf.js";import{o as J,u as K}from"./index.2baefb73.js";let Q;const[U,Y]=i("tab");var _=f({name:U,props:{dot:Boolean,type:String,color:String,title:String,badge:[Number,String],isActive:Boolean,disabled:Boolean,scrollable:Boolean,activeColor:String,renderTitle:Function,inactiveColor:String,showZeroBadge:e},setup(e){const r=v((()=>{const t={},{type:r,color:a,disabled:n,isActive:l,activeColor:o,inactiveColor:i}=e;a&&"card"===r&&(t.borderColor=a,n||(l?t.backgroundColor=a:t.color=a));const s=l?o:i;return s&&(t.color=s),t})),a=()=>{const r=b("span",{class:Y("text",{ellipsis:!e.scrollable})},[e.renderTitle?e.renderTitle():e.title]);return e.dot||t(e.badge)&&""!==e.badge?b(E,{dot:e.dot,content:e.badge,showZero:e.showZeroBadge},"function"==typeof(a=r)||"[object Object]"===Object.prototype.toString.call(a)&&!m(a)?r:{default:()=>[r]}):r;var a};return()=>b("div",{role:"tab",class:[Y({active:e.isActive,disabled:e.disabled})],style:r.value,"aria-selected":e.isActive},[a()])}});const[ee,te]=i("tabs");var re=f({name:ee,props:{inited:Boolean,animated:Boolean,swipeable:Boolean,lazyRender:Boolean,count:{type:Number,required:!0},duration:{type:[Number,String],required:!0},currentIndex:{type:Number,required:!0}},emits:["change"],setup(e,{emit:t,slots:r}){const a=g(),n=e=>t("change",e),l=()=>{var t;const l=null==(t=r.default)?void 0:t.call(r);return e.animated||e.swipeable?b(T,{ref:a,loop:!1,class:te("track"),duration:1e3*+e.duration,touchable:e.swipeable,lazyRender:e.lazyRender,showIndicators:!1,onChange:n},"function"==typeof(o=l)||"[object Object]"===Object.prototype.toString.call(o)&&!m(o)?l:{default:()=>[l]}):l;var o},o=t=>{const r=a.value;r&&r.state.active!==t&&r.swipeTo(t,{immediate:!e.inited})};return y((()=>e.currentIndex),o),h((()=>{o(e.currentIndex)})),()=>b("div",{class:te("content",{animated:e.animated||e.swipeable})},[l()])}});const[ae,ne]=i("tabs"),le={color:String,border:Boolean,sticky:Boolean,animated:Boolean,ellipsis:e,swipeable:Boolean,scrollspy:Boolean,background:String,lazyRender:e,lineWidth:[Number,String],lineHeight:[Number,String],beforeChange:Function,titleActiveColor:String,titleInactiveColor:String,type:{type:String,default:"line"},active:{type:[Number,String],default:0},duration:{type:[Number,String],default:.3},offsetTop:{type:[Number,String],default:0},swipeThreshold:{type:[Number,String],default:5}},oe=Symbol(ae);var ie=f({name:ae,props:le,emits:["click","change","scroll","disabled","rendered","click-tab","update:active"],setup(e,{emit:a,slots:n}){let i,p,f;const m=g(),h=g(),C=g(),I=z(),B=G(m),[k,R]=M(),{children:T,linkChildren:A}=P(oe),L=S({inited:!1,position:"",lineStyle:{},currentIndex:-1}),E=v((()=>T.length>e.swipeThreshold||!e.ellipsis)),U=v((()=>({borderColor:e.color,background:e.background}))),Y=(e,t)=>{var r;return null!=(r=e.name)?r:t},ee=v((()=>{const e=T[L.currentIndex];if(e)return Y(e,L.currentIndex)})),te=v((()=>Z(e.offsetTop))),ae=v((()=>e.sticky?te.value+i:0)),le=t=>{const r=h.value,a=k.value;if(!(E.value&&r&&a&&a[L.currentIndex]))return;const n=a[L.currentIndex].$el;!function(e,t,r){F(Q);let a=0;const n=e.scrollLeft,l=0===r?1:Math.round(1e3*r/16);!function r(){e.scrollLeft+=(t-n)/l,++a<l&&(Q=H(r))}()}(r,n.offsetLeft-(r.offsetWidth-n.offsetWidth)/2,t?0:+e.duration)},ie=()=>{const r=L.inited;w((()=>{const a=k.value;if(!a||!a[L.currentIndex]||"line"!==e.type||$(m.value))return;const n=a[L.currentIndex].$el,{lineWidth:l,lineHeight:o}=e,i=n.offsetLeft+n.offsetWidth/2,s={width:q(l),backgroundColor:e.color,transform:`translateX(${i}px) translateX(-50%)`};if(r&&(s.transitionDuration=`${e.duration}s`),t(o)){const e=q(o);s.height=e,s.borderRadius=e}L.lineStyle=s}))},se=r=>{const n=(e=>{const t=e<L.currentIndex?-1:1;for(;e>=0&&e<T.length;){if(!T[e].disabled)return e;e+=t}})(r);if(!t(n))return;const l=T[n],o=Y(l,n),i=null!==L.currentIndex;L.currentIndex=n,o!==e.active&&(a("update:active",o),i&&a("change",o,l.title))},ce=e=>{const t=T.find(((t,r)=>Y(t,r)===e)),r=t?T.indexOf(t):0;se(r)},de=(t=!1)=>{if(e.scrollspy){const r=T[L.currentIndex].$el;if(r&&B.value){const a=c(r,B.value)-ae.value;p=!0,function(e,t,r,a){let n=l(e);const i=n<t,s=0===r?1:Math.round(1e3*r/16),c=(t-n)/s;!function r(){n+=c,(i&&n>t||!i&&n<t)&&(n=t),o(e,n),i&&n<t||!i&&n>t?H(r):a&&H(a)}()}(B.value,a,t?0:+e.duration,(()=>{p=!1}))}}},ue=e=>{f=e.isFixed,a("scroll",e)},pe=()=>T.map(((t,n)=>b(_,j({ref:R(n),type:e.type,color:e.color,style:t.titleStyle,class:t.titleClass,isActive:n===L.currentIndex,scrollable:E.value,renderTitle:t.$slots.title,activeColor:e.titleActiveColor,inactiveColor:e.titleInactiveColor,onClick:r=>{((t,r,n)=>{const{title:l,disabled:o}=T[r],i=Y(T[r],r);a("click-tab",{name:i,title:l,event:n,disabled:o}),o?a("disabled",i,l):(W({interceptor:e.beforeChange,args:[i],done:()=>{se(r),de()}}),a("click",i,l),N(t))})(t,n,r)}},r(t,["dot","badge","title","disabled","showZeroBadge"])),null))),fe=()=>{var t,r;const{type:a,border:l}=e;return b("div",{ref:C,class:[ne("wrap",{scrollable:E.value}),{[O]:"line"===a&&l}]},[b("div",{ref:h,role:"tablist",class:ne("nav",[a,{complete:E.value}]),style:U.value},[null==(t=n["nav-left"])?void 0:t.call(n),pe(),"line"===a&&b("div",{class:ne("line"),style:L.lineStyle},null),null==(r=n["nav-right"])?void 0:r.call(n)])])};y([()=>e.color,I.width],ie),y((()=>e.active),(e=>{e!==ee.value&&ce(e)})),y((()=>T.length),(()=>{L.inited&&(ce(e.active),ie(),w((()=>{le(!0)})))})),y((()=>L.currentIndex),(()=>{le(),ie(),f&&!e.scrollspy&&s(Math.ceil(c(m.value)-te.value))}));return V({resize:ie,scrollTo:e=>{w((()=>{ce(e),de(!0)}))}}),x(ie),X(ie),J((()=>{ce(e.active),w((()=>{L.inited=!0,i=d(C.value),le(!0)}))})),K("scroll",(()=>{if(e.scrollspy&&!p){const e=(()=>{for(let e=0;e<T.length;e++)if(u(T[e].$el)>ae.value)return 0===e?0:e-1;return T.length-1})();se(e)}}),{target:B}),A({props:e,setLine:ie,onRendered:(e,t)=>a("rendered",e,t),currentName:ee,scrollIntoView:le}),()=>{var t;return b("div",{ref:m,class:ne([e.type])},[e.sticky?b(D,{container:m.value,offsetTop:te.value,onScroll:ue},{default:()=>{var e;return[fe(),null==(e=n["nav-bottom"])?void 0:e.call(n)]}}):[fe(),null==(t=n["nav-bottom"])?void 0:t.call(n)],b(re,{count:T.length,inited:L.inited,animated:e.animated,duration:e.duration,swipeable:e.swipeable,lazyRender:e.lazyRender,currentIndex:L.currentIndex,onChange:se},{default:()=>{var e;return[null==(e=n.default)?void 0:e.call(n)]}})])}}});const se=Symbol(),ce=()=>C(se,null),[de,ue]=i("tab");const pe=p(f({name:de,props:a({},R,{dot:Boolean,name:[Number,String],badge:[Number,String],title:String,disabled:Boolean,titleClass:n,titleStyle:[String,Object],showZeroBadge:e}),setup(e,{slots:t}){const r=g(!1),{parent:a,index:n}=L(oe);if(!a)return;const l=()=>{var t;return null!=(t=e.name)?t:n.value},o=v((()=>{const t=l()===a.currentName.value;return t&&!r.value&&(r.value=!0,a.props.lazyRender&&w((()=>{a.onRendered(l(),e.title)}))),t}));return y((()=>e.title),(()=>{a.setLine(),a.scrollIntoView()})),I(se,o),()=>{var e;const{animated:n,swipeable:l,scrollspy:i,lazyRender:s}=a.props;if(!t.default&&!n)return;const c=i||o.value;if(n||l)return b(A,{role:"tabpanel","aria-hidden":!o.value,class:ue("pane-wrapper",{inactive:!o.value})},{default:()=>{var e;return[b("div",{class:ue("pane")},[null==(e=t.default)?void 0:e.call(t)])]}});const d=r.value||i||!s?null==(e=t.default)?void 0:e.call(t):null;return B(b("div",{role:"tabpanel",class:ue("pane")},[d]),[[k,c]])}}})),fe=p(ie);var ve=fe;export{fe as T,ve as V,pe as a,ce as u};