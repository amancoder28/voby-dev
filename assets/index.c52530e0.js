var Xe=Object.defineProperty,je=Object.defineProperties;var Je=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var ae=(e,t,s)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Y=(e,t)=>{for(var s in t||(t={}))ce.call(t,s)&&ae(e,s,t[s]);if(z)for(var s of z(t))de.call(t,s)&&ae(e,s,t[s]);return e},he=(e,t)=>je(e,Je(t));var fe=(e,t)=>{var s={};for(var r in e)ce.call(e,r)&&t.indexOf(r)<0&&(s[r]=e[r]);if(e!=null&&z)for(var r of z(e))t.indexOf(r)<0&&de.call(e,r)&&(s[r]=e[r]);return s};const Ke=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerpolicy&&(i.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?i.credentials="include":n.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(n){if(n.ep)return;n.ep=!0;const i=s(n);fetch(n.href,i)}};Ke();const Qe="modulepreload",ue={},et="/voby-dev/",tt=function(t,s){return!s||s.length===0?t():Promise.all(s.map(r=>{if(r=`${et}${r}`,r in ue)return;ue[r]=!0;const n=r.endsWith(".css"),i=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${i}`))return;const o=document.createElement("link");if(o.rel=n?"stylesheet":Qe,n||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),n)return new Promise((a,c)=>{o.addEventListener("load",a),o.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t())};class st{constructor(t){this.props=t,this.state={}}render(t,s){throw new Error("Missing render function")}}var rt=st,G=e=>it(e)?e:ot(e)?new Error(e):new Error("Unknown error"),{isArray:nt}=Array,it=e=>e instanceof Error,x=e=>typeof e=="function",ot=e=>typeof e=="string",Ce=(e,t)=>Math.max(e,t),lt=class{M(e){let{m:t}=this;t?t instanceof Array?t.push(e):this.m=[t,e]:this.m=e}B(e,t){this.h?this.h[e]=t:this.h={[e]:t}}z(e){let{y:t}=this;t?t instanceof Array?t.push(e):this.y=[t,e]:this.y=e}C(e){let{s:t}=this;t?t instanceof Array?t.push(e):this.s=[t,e]:this.s=e}R(e){let{r:t}=this;t?t instanceof Array?t.push(e):this.r=[t,e]:this.r=e}context(e){var t;let{h:s}=this;return s&&e in s?s[e]:(t=this.o)==null?void 0:t.context(e)}e(e,t){let{r:s,s:r,m:n,y:i,h:o}=this;if(s)if(this.r=void 0,s instanceof Array)for(let a=0,c=s.length;a<c;a++)s[a].e(!0,t);else s.e(!0,t);if(r)if(this.s=void 0,r instanceof Array)for(let a=0,c=r.length;a<c;a++){let f=r[a];!f.disposed&&!f.t.disposed&&f.S(this)}else!r.disposed&&!r.t.disposed&&(t?r.S(this):this.w=r);if(n)if(this.m=void 0,n instanceof Array)for(let a=0,c=n.length;a<c;a++)n[a]();else n();i&&(this.y=void 0),o&&(this.h=void 0)}F(){let{w:e}=this;if(e){if(this.w=void 0,e.disposed||e.t.disposed)return;if(this.s instanceof Array){if(this.s.indexOf(e)>=0)return}else if(e===this.s)return;e.S(this)}}error(e,t){var s;let{y:r}=this;if(r)return r instanceof Array?r.forEach(n=>n(e)):r(e),!0;if((s=this.o)!=null&&s.error(e,!0))return!0;if(t)return!1;throw e}T(e){let t=b,s=A;b=this,A=!1;let r;try{r=e()}catch(n){this.error(G(n),!1)}finally{b=t,A=s}return r}},Q=lt,at=class{e(){this.disposed=!0}},Se=at,ct=class extends Q{constructor(){super(...arguments),this.t=new Se}},dt=ct,_=void 0,ht=()=>!1,ft=()=>{},Le=new dt,b=Le,N=Le,A=!1,ee=Symbol("Observable"),Ee=Symbol("Sampled"),ut=(e,t)=>t.u(e),pt=(e,t)=>t.c(!1),mt=(e,t)=>t.f(!1);function gt(e){if(x(e)){if(_)return e();{let t=_=new Map;try{return e()}finally{_=void 0;let s=t.size>1;s&&t.forEach(pt);try{t.forEach(ut)}finally{s&&t.forEach(mt)}}}}else return e}var vt=gt,bt=e=>{b.M(e)},O=bt,{bind:te,prototype:xt}=Function,{setPrototypeOf:q}=Object,se=q({[ee]:!0},xt);function Ae(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this}function Me(){if(arguments.length)throw new Error("A readonly Observable can not be updated");return this.x()}function Te(e){return arguments.length?x(e)?this.i(e):this.u(e):this.x()}q(Ae,se);q(Me,se);q(Te,se);var Ne=te.bind(Ae),yt=te.bind(Me),wt=te.bind(Te),Ct=class extends Q{constructor(){super(...arguments),this.o=b,this.t=N.t,this.b=0,this.a=0,this.v=!1}c(e){var t;this.b+=1,this[t="v"]||(this[t]=e)}f(e){var t;!this.b||(this.b-=1,this[t="v"]||(this[t]=e),!this.b&&(e=this.v,this.v=!1,this.i(e)))}i(e){}},re=Ct,St=class{constructor(e,t,s){this.t=N.t,this.p=e,s&&(this.o=s),(t==null?void 0:t.equals)!==void 0&&(this.equals=t.equals||ht)}R(e){let{r:t}=this;if(t)if(t instanceof Set){let s=t.size;t.add(e);let r=t.size;return s!==r}else{if(t===e)return!1;{let s=new Set;return s.add(t),s.add(e),this.r=s,!0}}else return this.r=e,!0}N(){var e;this.disposed||this.t.disposed||(!A&&b instanceof re&&(this.R(b)||!b.s)&&b.C(this),(e=this.o)!=null&&e.b&&(this.o.b=0,this.o.v=!1,this.o.i(!0)))}S(e){let{r:t}=this;t&&(t instanceof Set?t.delete(e):t===e&&(this.r=void 0))}x(){return this.N(),this.p}u(e){if(this.disposed)throw new Error("A disposed Observable can not be updated");if(_)return _.set(this,e),e;{let t=!(this.equals||Object.is)(e,this.p);if(!this.o){if(!t)return e;this.t.disposed||this.c(t)}return this.p=t?e:this.p,this.t.disposed||this.f(t),e}}i(e){let t=e(this.p);return this.u(t)}c(e){if(this.disposed||this.t.disposed)return;let t=this.r;if(t)if(t instanceof Set)for(let s of t)s.c(e);else t.c(e)}f(e){if(this.disposed||this.t.disposed)return;let t=this.r;if(t)if(t instanceof Set)for(let s of t)s.f(e);else t.f(e)}frozen(){return Ne(this.p)}g(){return yt(this)}_(){return wt(this)}e(){this.disposed=!0}},P=St,Lt=class extends re{constructor(e,t){super(),this.l=e,this.n=new P(void 0,t,this),this.o.R(this),this.i(!0)}e(e,t){e&&!this.t.disposed&&this.n.e(),super.e(e,t)}c(e){this.b||this.n.c(!1),super.c(e)}i(e){if(e&&!this.n.disposed&&!this.n.t.disposed){let t=this.a;if(t)this.a=e?3:Ce(t,2),t>1&&this.n.f(!1);else{this.a=1,this.e();try{let s=this.T(this.l);this.F(),this.n.disposed||this.n.t.disposed?this.n.f(!1):this.n.u(s),!this.r&&!this.s&&!this.m&&this.e(!0,!0)}catch(s){this.F(),this.error(G(s),!1),this.n.f(!1)}finally{let s=this.a;this.a=0,s>1&&this.i(s===3)}}}else this.n.f(!1)}},Et=Lt,At=()=>{},Mt=new P(void 0),Tt=(e,t)=>{let s=new Et(e,t),{n:r}=s;return s.s?r.g():(s.l=At,s.n=Mt,r.frozen())},w=Tt;function Nt(e,t){return arguments.length<2?b.context(e):b.B(e,t)}var $t=Nt,Ot=()=>{let e=new P(!1);return O(()=>{e.u(!0)}),e.g()},Rt=Ot,Pt=class extends re{constructor(e){super(),this.l=e,this.o.R(this),this.i(!0)}i(e){if(e&&!this.t.disposed){let t=this.a;if(t)this.a=e?3:Ce(t,2);else{this.a=1,this.e();try{let s=this.T(this.l);this.F(),x(s)?this.M(s):!this.r&&!this.s&&!this.m&&this.e(!0,!0)}catch(s){this.F(),this.error(G(s),!1)}finally{let s=this.a;this.a=0,s>1&&this.i(s===3)}}}}},Ft=Pt,_t=e=>{let t=new Ft(e);return t.s||(t.l=ft),t.e.bind(t,!0,!0)},$e=_t,kt=e=>{b.z(e)},Oe=kt,I=e=>{if(x(e))return Ee in e?Ne(I(e())):ee in e?e:w(()=>I(e()));if(nt(e)){let t=new Array(e.length);for(let s=0,r=t.length;s<r;s++)t[s]=I(e[s]);return t}else return e},M=I,Bt=class extends Q{constructor(){super(...arguments),this.o=b,this.t=new Se}e(e,t){this.t.e(),super.e(e,t)}T(e){let t=this.e.bind(this,!0,!0),s=e.bind(void 0,t),r=N;N=this;try{return super.T(s)}finally{N=r}}},Re=Bt,zt=class extends Re{},It=class{constructor(e){this.O=new Map,this.d=!1,this.L=0,this.E=0,this.cleanup=()=>{if(!this.L)return;if(!this.E)return this.e();let{O:t,d:s}=this;t.forEach((r,n)=>{r.d!==s&&(r.e(!0,!0),t.delete(n))})},this.e=()=>{!this.O.size||(this.O.forEach(t=>{t.e(!0,!0)}),this.O=new Map)},this.k=t=>{this.d=!this.d,this.E=0},this.P=t=>{this.E=t.length,this.cleanup(),this.L=this.E},this.map=t=>{let{O:s,d:r}=this,n=s.get(t);if(n)return n.d=r,n.A;{let i=new zt;return i.T(()=>{let o=M(this.l(t));return i.d=r,i.A=o,s.set(t,i),o})}},this.l=e}},Ht=It,Vt=(e,t,s=[])=>{let r=new Ht(t),{e:n,k:i,P:o,map:a}=r;return O(n),w(()=>{let c=x(e)?e():e;i(c);let f=c.length?c.map(a):M(s);return o(c),f})},Dt=Vt,Gt=e=>x(e)&&ee in e,Pe=Gt,qt=e=>Pe(e)?e():e,Zt=qt;function Ut(e,t){let s=w(()=>{let r=x(e)?e():e;for(let n=0,i=t.length;n<i;n++){let o=t[n];if(o.length===1)return o[0];if(Object.is(o[0],r))return o[1]}});return w(()=>M(s()))}var Fe=Ut,Wt=(e,t,s)=>{let r=w(()=>x(e)?!!e():!!e);return Fe(r,[[!0,t],[s]])},_e=Wt,Yt=(e,t,s)=>_e(e,t,s),Xt=Yt,jt=e=>w(e),Jt=jt,Kt=e=>new Re().T(e),ke=Kt;function Qt(e){if(x(e)){if(A)return e();A=!0;try{return e()}finally{A=!1}}else return e}var Be=Qt,es=class extends P{constructor(){super(...arguments),this.I=0}},ts=e=>{let t=N.t,s=new Map,r;$e(()=>{let i=s.get(r);i&&i.u(!1);let o=e(),a=s.get(o);a&&a.u(!0),r=o}),O(()=>{t.disposed||s.forEach(i=>{i.e()}),s=new Map});let n=function(){let i=s.get(this);!i||(i.I-=1,!i.I&&(i.e(),s.delete(this)))};return i=>{let o,a=s.get(i);return a?o=a:(o=new es(Be(e)===i),s.set(i,o)),o.I+=1,O(n.bind(i)),o.x()}},ss=ts;function rs(e,t){let s=[],r=[];for(let n=0,i=t.length;n<i;n++)ke(o=>{let a=t[n],c=a.length===1?a[0]:a[1];s.push(M(c)),r.push(o)});return O(()=>{r.forEach(n=>n())}),w(()=>{let n=x(e)?e():e;for(let i=0,o=t.length;i<o;i++){let a=t[i];if(a.length===1||Object.is(a[0],n))return s[i]}})}var ns=rs,is=(e,t)=>{let s=new P(void 0);return w(()=>{if(s.x()){let r={error:s.p,reset:()=>s.u(void 0)};return M(t(r))}else return Oe(r=>{s.u(G(r))}),M(e)})},os=is;function m(e,t){return new P(e,t)._()}m.batch=vt;m.cleanup=O;m.computed=w;m.context=$t;m.disposed=Rt;m.effect=$e;m.error=Oe;m.for=Dt;m.get=Zt;m.if=Xt;m.is=Pe;m.readonly=Jt;m.resolve=M;m.root=ke;m.sample=Be;m.selector=ss;m.suspense=ns;m.switch=Fe;m.ternary=_e;m.tryCatch=os;var ls=m,g=ls;const as=g.computed;var $=as;const cs=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),ze=Symbol("Element"),pe=Symbol("Suspense"),ds=Symbol("Template Accessor"),hs={},fs=g.sample;var Ie=fs;const{prototype:us}=Function,{setPrototypeOf:me}=Object;function F(){return Ie(this)}me(F,me({[ze]:!0,[Ee]:!0},us));const ge=document.createComment.bind(document,""),ps=document.createElement.bind(document),ms=document.createElementNS.bind(document,"http://www.w3.org/2000/svg"),V=document.createTextNode.bind(document),gs=e=>bs(e)?e:S(e)?new Error(e):new Error("Unknown error"),vs=e=>{for(let t=0,s=e.length;t<s;t++)if(!!Z(e[t]))return e.flat(1/0);return e},{isArray:Z}=Array,bs=e=>e instanceof Error,C=e=>typeof e=="function",y=e=>e==null,xs=e=>e instanceof Node,ne=e=>{if(e===null)return!0;const t=typeof e;return t!=="object"&&t!=="function"},ys=e=>e instanceof Promise,S=e=>typeof e=="string",R=e=>!!e.isSVG,ws=e=>C(e)&&ds in e,X=e=>e==null||typeof e=="boolean"||typeof e=="symbol",ve=()=>{},j=e=>{let t=!1,s;return()=>(t||(t=!0,s=e()),s)},Cs=g.cleanup;var be=Cs;const Ss=g.effect;var B=Ss;const Ls=g.readonly;var He=Ls;function T(e,t){return g(e,t)}const Es=(e,t,s,r)=>{const n=s.length;let i=t.length,o=n,a=0,c=0,f=null,h,p;for(;a<i||c<o;)if(i===a){const d=o<n?c?s[c-1].nextSibling:s[o-c]:r;for(;c<o;)e.insertBefore(s[c++],d)}else if(o===c)for(;a<i;)(!f||!f.has(t[a]))&&(p=t[a],e.removeChild(p),h=p.recycle,h&&h(p)),a++;else if(t[a]===s[c])a++,c++;else if(t[i-1]===s[o-1])i--,o--;else if(t[a]===s[o-1]&&s[c]===t[i-1]){const d=t[--i].nextSibling;e.insertBefore(s[c++],t[a++].nextSibling),e.insertBefore(s[--o],d),t[i]=s[o]}else{if(!f){f=new Map;let d=c;for(;d<o;)f.set(s[d],d++)}if(f.has(t[a])){const d=f.get(t[a]);if(c<d&&d<o){let u=a,v=1;for(;++u<i&&u<o&&f.get(t[u])===d+v;)v++;if(v>d-c){const E=t[a];for(;c<d;)e.insertBefore(s[c++],E)}else e.replaceChild(s[c++],t[a++])}else a++}else p=t[a++],e.removeChild(p),h=p.recycle,h&&h(p)}};var As=Es;class ie{constructor(){this.values=[],this.fragmented=!1}childrenFragmented(t=[]){const{values:s}=this;for(let r=0,n=s.length;r<n;r++){const i=s[r];i instanceof ie?i.childrenFragmented(t):t.push(i)}return t}children(){return this.fragmented?this.childrenFragmented():this.values}pushFragment(t){this.values.push(t),this.fragmented=!0}pushNode(t){this.values.push(t)}replaceWithNode(t){this.values=[t],this.fragmented=!1}replaceWithFragment(t){this.values=t.values,this.fragmented=t.fragmented}setFragment(t){this.values=[t],this.fragmented=!0}setNode(t){this.values=[t],this.fragmented=!1}}var J=ie;const Ms=g.is;var U=Ms;const D=(e,t)=>{if(C(e))if(ze in e)D(e(),t);else{let s,r=!1;B(()=>{const n=e();r&&s===n||(D(n,t),s=n,r=ne(n))})}else Z(e)&&e.some(U)?B(()=>{t(Ve(e))}):t(e)},L=(e,t)=>{if(C(e)){let s,r=!1;B(()=>{const n=e();r&&s===n||(t(n,s),s=n,r=ne(n))})}else t(e)},Ts=(e,t)=>{if(U(e)){let s,r=!1;B(()=>{const n=e();r&&s===n||(t(n,s),s=n,r=ne(n))})}else t(e)},Ve=e=>{for(;U(e);)e=e();if(Z(e)){const t=new Array(e.length);for(let s=0,r=t.length;s<r;s++)t[s]=Ve(e[s]);return t}else return e},De=(()=>{const e=/e(r[HRWrv]|[Vawy])|Con|l(e[Tcs]|c)|s(eP|y)|a(t[rt]|u|v)|Of|Ex|f[XYa]|gt|hR|d[Pg]|t[TXYd]|[UZq]/,t={},s=/[A-Z]/g,r=n=>t[n]||(t[n]=e.test(n)?n:n.replace(s,i=>`-${i.toLowerCase()}`));return(n,i,o)=>{i=i==="className"?"class":i,R(n)?(i=i==="xlinkHref"||i==="xlink:href"?"href":r(i),n.setAttribute(i,String(o))):y(o)?n.removeAttribute(i):(o=o===!0?"":String(o),n.setAttribute(i,o))}})(),Ns=(e,t,s)=>{L(s,De.bind(void 0,e,t))},$s=(e,t)=>{if(t.nodeType===3)return t.nodeValue=e,t;{const s=t.parentElement;if(!s)throw new Error("Invalid child replacement");const r=V(e);return s.replaceChild(r,t),r}},Ge=(e,t,s)=>{const r=t.children(),n=r.length,i=r[0],o=r[n-1],a=(o==null?void 0:o.nextSibling)||null;if(n===0){const d=typeof s;if(d==="string"||d==="number"||d==="bigint"){const u=V(s);e.appendChild(u),t.setNode(u);return}else if(d==="object"&&s!==null&&typeof s.nodeType=="number"){const u=s;e.insertBefore(u,null),t.setNode(u);return}}if(n===1){const d=typeof s;if(d==="string"||d==="number"||d==="bigint"){const u=$s(String(s),i);t.setNode(u);return}}const c=new J,f=Array.isArray(s)?vs(s):[s];for(let d=0,u=f.length;d<u;d++){const v=f[d],E=typeof v;if(E==="string"||E==="number"||E==="bigint")c.pushNode(V(v));else if(E==="object"&&v!==null&&typeof v.nodeType=="number")c.pushNode(v);else if(E==="function"){const le=new J;c.pushFragment(le),D(v,Ge.bind(void 0,e,le))}}const h=c.children(),p=h.length;if(!(p===0&&n===1&&i.nodeType===8)){if(p===0||n===1&&i.nodeType===8){const{childNodes:d}=e;if(d.length===n){if(e.textContent="",p===0){const u=ge();c.pushNode(u),h!==c.values&&h.push(u)}if(a)for(let u=0,v=h.length;u<v;u++)e.insertBefore(h[u],a);else for(let u=0,v=h.length;u<v;u++)e.append(h[u]);t.replaceWithFragment(c);return}}if(p===0){const d=ge();c.pushNode(d),h!==c.values&&h.push(d)}As(e,r,h,a),t.replaceWithFragment(c)}},qe=(e,t,s=new J)=>{D(t,Ge.bind(void 0,e,s))},Os=(e,t,s)=>{e.classList.toggle(t,!!s)},xe=(e,t,s)=>{L(s,Os.bind(void 0,e,t))},Rs=(e,t,s)=>{if(S(t))R(e)?e.setAttribute("class",t):e.className=t;else{if(s)if(S(s))s&&(R(e)?e.setAttribute("class",""):e.className="");else for(const r in s)t&&r in t||xe(e,r,!1);for(const r in t)xe(e,r,t[r])}},Ps=(e,t)=>{L(t,Rs.bind(void 0,e))},Fs=(e,t,s)=>{const r=hs[t]||Symbol(),n=g.context(r);if(!r||!n)throw new Error(`Directive "${t}" not found`);const i=T();oe(e,o=>i(o)),n(He(i),...s)},_s=(()=>{const e={onbeforeinput:"_onbeforeinput",onclick:"_onclick",ondblclick:"_ondblclick",onfocusin:"_onfocusin",onfocusout:"_onfocusout",oninput:"_oninput",onkeydown:"_onkeydown",onkeyup:"_onkeyup",onmousedown:"_onmousedown",onmouseup:"_onmouseup"},t={},s=r=>{const n=e[r];!n||(document[r]=i=>{const o=i.composedPath(),a=o[0]||document;Object.defineProperty(i,"currentTarget",{configurable:!0,get(){return a}});for(let c=0,f=o.length;c<f;c++){const h=o[c][n];if(!!h&&(h(i),i.cancelBubble))break}})};return(r,n,i)=>{if(n.endsWith("capture")){const o=n.slice(2,-7),a=`_${n}`,c=r[a];c&&r.removeEventListener(o,c,{capture:!0}),i&&r.addEventListener(o,i,{capture:!0}),r[a]=i}else n in e?(n in t||(t[n]=!0,s(n)),r[e[n]]=i):r[n]=i}})(),ks=(e,t,s)=>{Ts(s,_s.bind(void 0,e,t))},Bs=(e,t)=>{e.innerHTML=String(t!=null?t:"")},zs=(e,t)=>{L(t,s=>{L(s.__html,Bs.bind(void 0,e))})},Is=(e,t,s)=>{e[t]=s,y(s)&&De(e,t,null)},Hs=(e,t,s)=>{L(s,Is.bind(void 0,e,t))},oe=(e,t)=>{y(t)||(Z(t)?(t.forEach(s=>queueMicrotask(s.bind(void 0,e))),be(()=>t.forEach(s=>queueMicrotask(s.bind(void 0,void 0))))):(queueMicrotask(t.bind(void 0,e)),be(t.bind(void 0,void 0))))},Ze=(()=>{const e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;return(t,s,r)=>{s.charCodeAt(0)===45?t.style.setProperty(s,String(r)):y(r)?t.style[s]=null:t.style[s]=S(r)||e.test(s)?r:`${r}px`}})(),Vs=(e,t,s)=>{L(s,Ze.bind(void 0,e,t))},Ds=(e,t,s)=>{if(S(t))e.style.cssText=t;else{if(s)if(S(s))s&&(e.style.cssText="");else for(const r in s)t&&r in t||Ze(e,r,null);for(const r in t)Vs(e,r,t[r])}},Gs=(e,t)=>{L(t,Ds.bind(void 0,e))},qs=(e,t,s)=>{if(t==="children"){const r=V("");e.insertBefore(r,null),s(e,"setChildReplacement",void 0,r)}else t==="ref"?s(e,"setRef"):t==="style"?s(e,"setStyles"):t==="class"?(R(e)||(e.className=""),s(e,"setClasses")):t==="innerHTML"||t==="outerHTML"||t==="textContent"||(t==="dangerouslySetInnerHTML"?s(e,"setHTML"):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?s(e,"setEvent",t.toLowerCase()):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?s(e,"setDirective",t.slice(4)):t in e&&!R(e)?(t==="className"&&(e.className=""),s(e,"setProperty",t)):(e.setAttribute(t,""),s(e,"setAttribute",t)))},Zs=(e,t,s)=>{ws(s)?qs(e,t,s):t==="children"?qe(e,s):t==="ref"?oe(e,s):t==="style"?Gs(e,s):t==="class"?Ps(e,s):t==="innerHTML"||t==="outerHTML"||t==="textContent"||(t==="dangerouslySetInnerHTML"?zs(e,s):t.charCodeAt(0)===111&&t.charCodeAt(1)===110?ks(e,t.toLowerCase(),s):t.charCodeAt(0)===117&&t.charCodeAt(3)===58?Fs(e,t.slice(4),s):t in e&&!R(e)?Hs(e,t,s):Ns(e,t,s))},Us=(e,t)=>{for(const s in t)Zs(e,s,t[s])},Ws=(e,t,...s)=>{const f=t||{},{children:r,key:n,ref:i,class:o}=f,a=fe(f,["children","key","ref","class"]),c=s.length===1?s[0]:s.length===0?r:s;if(y(o)||(a.class=o),!y(a.className)&&S(a.class))throw new Error("Invalid class prop, it can only be null, undefined or an object when className is provided too");if(C(e))if(rt.isPrototypeOf(e)){const h=a;return X(c)||(h.children=c),F.bind(()=>{const p=new e(h),d=p.render(p.props,p.state);return y(i)||oe(p,i),d})}else{const h=a;return X(c)||(h.children=c),y(i)||(h.ref=i),F.bind(e.bind(void 0,h))}else if(S(e)){const h=a,p=cs.has(e),d=p?ms:ps;return X(c)||(h.children=c),y(i)||(h.ref=i),F.bind(()=>{const u=d(e);return p&&(u.isSVG=!0),Us(u,h),u})}else{if(xs(e))return F.bind(e);throw new Error("Invalid component")}};var l=Ws;const Ys=g.get;var Xs=Ys;const js=({values:e,fallback:t,children:s})=>g.for(e,s,t);var Js=js;const Ks=({children:e})=>e;var Qs=Ks;const er=g.root;var tr=er;const sr=(e,t)=>{if(!t)throw new Error("Invalid parent node");return t.textContent="",tr(s=>(qe(t,e),()=>{s(),t.textContent=""}))};var rr=sr;const H={new:()=>{const e=H.create();return H.set(e),e},create:()=>{const e=H.get(),t=T(0);return{active:$(()=>!!t()),increment:()=>{e==null||e.increment(),t(o=>o+1)},decrement:()=>queueMicrotask(()=>{e==null||e.decrement(),t(o=>o-1)})}},get:()=>g.context(pe),set:e=>g.context(pe,e)};var Ue=H;const nr=({when:e,fallback:t,children:s})=>$(()=>{const r=Ue.new(),n=$(()=>C(e)?!!e()||r.active():!!e||r.active()),i=$(()=>n()&&t);return g.suspense(n,[[!0,i],[s]])});var ir=nr;const or=({when:e,children:t})=>g.ternary(e,t[0],t[1]);var lr=or;function ye(e,t,s){const r=s===!0||t===!0?C:U,n=i=>r(i)?i():i;if(Array.isArray(e)){const i=e.map(n);return C(t)?t.apply(void 0,i):i}else{const i=n(e);return C(t)?t(i):i}}const ar=g.disposed;var cr=ar;const dr=e=>{const t=T({loading:!0});return B(()=>{const s=cr(),r=Ue.get(),n=j((r==null?void 0:r.decrement)||ve),i=j((r==null?void 0:r.increment)||ve);t({loading:!0});const o=f=>{s()||(n(),t({loading:!1,value:f}))},a=f=>{if(s())return;n();const h=gs(f);t({loading:!1,error:h})};return(()=>{try{i();const f=Xs(e());ys(f)?f.then(o,a):o(f)}catch(f){a(f)}})(),n}),He(t)};var we=dr;const hr=g.resolve;var fr=hr;const ur=e=>{const t=j(e),s=r=>{const n=we(t);return $(()=>ye(n,({loading:i,error:o,value:a})=>{if(!i){if(o)throw o;return fr(l(a.default,r))}}))};return s.preload=()=>new Promise((r,n)=>{const i=we(t);ye(i,({loading:o,error:a})=>{if(!o)return a?n(a):r()})}),s};var pr=ur;function mr(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var s,r,n,i,o=[],a="",c=e.split("/");for(c[0]||c.shift();n=c.shift();)s=n[0],s==="*"?(o.push("wild"),a+="/(.*)"):s===":"?(r=n.indexOf("?",1),i=n.indexOf(".",1),o.push(n.substring(1,~r?r:~i?i:n.length)),a+=!!~r&&!~i?"(?:/([^/]+?))?":"/([^/]+?)",~i&&(a+=(~r?"?":"")+"\\"+n.substring(i))):a+="/"+n;return{keys:o,pattern:new RegExp("^"+a+(t?"(?=$|/)":"/?$"),"i")}}const gr=(e,t)=>{const s=t.pattern.exec(e);if(!s)return{};const r={};let n=0;for(;n<t.keys.length;)r[t.keys[n]]=s[++n]?decodeURI(s[n]):null;return r},vr=T({}),W=T(location.pathname);let K=!1;addEventListener("popstate",()=>W(location.pathname));const br=({routes:e})=>{const t=e.map(s=>he(Y({},s),{regex:mr(s.path)}));return $(()=>{const s=W(),r=t.find(n=>n.regex.pattern.test(s)||n.path==="*");if(K){const n=new URL(location.href);n.pathname=s,history.pushState(null,"",n),K=!1}if(!!r)return vr(gr(s,r.regex)),r.component})},We=e=>{const t=T();return e.onClick=s=>{const r=Ie(t);!r||r.origin!==location.origin||(s.preventDefault(),K=!0,W(r.pathname))},l("a",Y({ref:t},e))},xr=[{icon:"https://fonts.gstatic.com/s/i/materialiconsoutlined/trending_up/v19/24px.svg",label:"Performant",description:"Truly reactive, compiler-optimized rendering system that speedy and memory efficient."},{icon:"https://fonts.gstatic.com/s/i/materialiconsoutlined/star/v20/24px.svg",label:"Reactive",description:"Composable reactive observable based primitives joined with the flexibility of JSX."},{icon:"https://fonts.gstatic.com/s/i/materialicons/tune/v12/24px.svg",label:"Productive",description:"Builds on top of standard Observable & JSX based intuitive API and world-class Performance."},{icon:"https://fonts.gstatic.com/s/i/materialiconsoutlined/speed/v12/24px.svg",label:"Efficient",description:"Extremely reactive rendering System with minimal bundle sizes & no overheads."}];function yr(){return l("section",null,l("div",{class:"text-center mt-3 md:mt-[10vh] text-3xl md:text-7xl font-extrabold mx-3"},l("h1",{class:"mb-1 md:mb-4"},"A High Performance"),l("h1",{class:"mb-4 md:mb-8 mx-2"},"Javascript Framework")),l("div",{class:"text-center"},l("p",{class:"font-normal text-gray-9 text-lg md:text-2xl mx-5"},"A fine grained observable based reactivity for building rich web applications.")),l("div",{class:"flex-center mt-8 mb-2 px-2"},l("button",{class:"button green mx-1 md:mx-2"}," Why Voby "),l("button",{class:"button gray text-center inline-flex items-center mx-1 md:mx-2"},"Get Started",l("svg",{class:"w-5 h-5 ml-2 -mr-1",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"},l("path",{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}))),l("button",{class:"button gray mx-1 md:mx-2"}," Install ")),l("div",{class:"lg:my-2 px-0 lg:px-12 flex flex-col lg:py-10 md:pt-10"},l("section",{class:"grid sm:grid-cols-2 lg:grid-cols-4 py-3 lg:py-0 lg:px-4 rounded-lg"},l(Js,{values:xr},({icon:e,label:t,description:s})=>l("div",{class:"px-10 py-4 mt-4 md:py-10 lg:ml-4 lg:mt-0 last:border-none"},l("img",{class:"w-12 mb-5 dark:brightness-150",src:e,alt:t}),l("h3",{class:"text-xl mb-2 font-semibold"},t),l("p",{class:"text-base"},s))))))}function wr(){return l("section",{class:"mt-6"},l(yr,null))}function Cr(){return l("section",{class:"mt-10vh flex-center"},l("svg",{role:"status",class:"w-14 h-14 mr-2 text-gray-200 animate-spin fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),l("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})))}function Ye(){return l("svg",{width:"30px",height:"30px",class:"w-8 md:w-10 h-8 md:h-10",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",style:"fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"},l("g",{id:"Hand",transform:"matrix(1,0,0,1,-5,0)"},l("g",{transform:"matrix(24.6175,0,0,24.6175,68.6776,33.6107)"},l("path",{d:"M26.992,19.016C26.737,18.761 26.439,18.546 26.117,18.38L25.717,17.024L17.705,16.968L17.398,18.059C16.931,18.154 16.357,18.448 16.005,18.777L12.394,14.823C11.577,15.187 11.005,16.003 11.005,16.956L11.005,17.916L7.005,22.082L7.021,24.27L17.005,34.999C17.005,34.999 27.523,19.711 27.548,19.741C27.421,19.517 27.037,19.038 26.992,19.016Z",style:"fill:rgb(235,125,40);fill-rule:nonzero;"})),l("path",{d:"M291.761,649.048C316.97,649.048 339.15,636.099 352.074,616.504C355.102,621.009 358.745,625.021 362.684,628.738C391.856,656.187 437.374,654.439 465.265,626.621C469.007,622.88 472.724,619.113 475.58,614.608L475.506,614.534C480.454,617.365 487.175,624.43 511.792,624.43L574.247,624.43C565.138,631.299 556.818,639.767 549.039,649.048C518.808,685.162 499.484,737.819 499.484,796.753C499.484,803.547 504.998,809.062 511.792,809.062C518.587,809.062 524.101,803.547 524.101,796.753C524.101,734.027 547.635,679.204 582.617,649.048C600.637,633.514 621.611,624.43 644.111,624.43C661.664,626.375 664.962,599.813 647.189,599.813L511.792,599.813C484.615,599.813 462.557,577.756 462.557,550.578C462.557,523.4 484.615,501.343 511.792,501.343L708.732,501.343C729.854,501.343 749.597,516.015 755.826,536.177L782.585,624.43C785.12,632.677 794.377,670.49 792.703,678.367C792.703,796.753 677.099,919.84 536.41,919.84C375.485,919.84 244.84,791.066 241.345,630.979L241.689,631.225C254.367,642.18 270.639,649.048 288.709,649.048L291.761,649.048ZM288.167,427.49L292.303,427.49C318.373,427.49 339.47,448.612 339.47,474.682L339.47,577.239C339.47,603.309 318.373,624.43 292.303,624.43L288.167,624.43C262.097,624.43 241,603.309 241,577.239L241,474.682C241,448.612 262.097,427.49 288.167,427.49ZM458.471,500.358L457.092,501.885C445.424,514.907 437.94,531.696 437.94,550.578C437.94,552.129 438.26,553.606 438.383,555.132C439.466,571.823 445.965,586.938 456.305,598.804C454.557,601.979 452.292,604.786 449.929,607.494C440.919,617.759 428.019,624.43 413.322,624.43C386.145,624.43 364.087,602.373 364.087,575.195L364.087,427.49C364.087,416.634 367.706,406.689 373.664,398.54C382.624,386.305 396.976,378.256 413.322,378.256C440.5,378.256 462.557,400.313 462.557,427.49L462.557,495.878C461.056,497.232 459.874,498.906 458.471,500.358ZM673.8,476.725L511.792,476.725C506.672,476.725 501.675,477.242 496.85,478.227L495.052,471.383L414.479,164.551C414.479,164.551 404.239,116.375 452.39,106.158C500.542,95.918 510.783,144.069 510.783,144.069L587.023,428.869C598.003,429.46 608.638,430.42 619.149,431.503L669.886,172.724C669.886,172.724 674.514,123.711 723.552,128.314C772.565,132.942 767.937,181.956 767.937,181.956L717.102,456.711L711.662,486.105C700.239,480.32 687.487,476.725 673.8,476.725Z",style:"fill:rgb(255,203,61);fill-rule:nonzero;"})))}function Sr(){return l("footer",{class:"mt-4 w-screen p-4 bg-white shadow md:px-6"},l("div",{class:"flex-center md:mb-8"},l("a",{href:"https://github.com/vobyjs",class:"flex items-center mb-4 sm:mb-0"},l("div",{class:"mr-3 h-8"},l(Ye,null)),l("span",{class:"self-center text-2xl font-semibold whitespace-nowrap dark:text-white"},"Voby"))),l("hr",{class:"mb-4 border-gray-300 sm:mx-auto"}),l("p",{class:"mb-2 text-center text-sm text-gray-500"},l("p",{class:"mr-1"},"Copyright \xA9 2022"," ",l("a",{href:"https://github.com/vobyjs",target:"_blank",rel:"noopener",class:"hover:underline"},"Voby Community."),".")))}function Lr(){return l("div",{class:()=>`${k()?"visible":"hidden"} mt-3 border-t-2 md:border-none border-gray-200 h-screen md:h-full overflow-hidden transition-all w-full md:block md:w-auto`},l("ul",{class:"flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium"},l("li",{class:"px-8 md:px-4"},l("a",{href:"#",class:"block text-base md:text-lg font-medium py-3 pr-4 pl-3 text-gray-700 text-white rounded border-b border-gray-200 md:bg-transparent md:text-emerald-700 md:p-0 dark:text-white","aria-current":"page"},"Docs")),l("li",{class:"px-8 md:px-4"},l("a",{href:"#",class:"block text-base md:text-lg font-medium py-3 pr-4 pl-3 text-gray-700 border-b border-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},"API")),l("li",{class:"px-8 md:px-4",onClick:()=>k(!1)},l(We,{href:"/voby-dev/playground",class:"block text-base md:text-lg font-medium py-3 pr-4 pl-3 text-gray-700 border-b border-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},"Playground")),l("li",{class:"px-8 md:px-4"},l("a",{href:"#",class:"block text-base md:text-lg font-medium py-3 pr-4 pl-3 text-gray-700 border-b border-gray-200 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"},"Ecosystem")),l("section",{class:"pl-0 md:pl-2 py-5 md:py-0 flex-center"},l("li",{class:"px-2"},l("a",{target:"_blank",rel:"noopener",href:"https://twitter.com/vobyjs",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white"},l("svg",{class:"w-7 h-7",width:"24px",height:"24px",fill:"currentColor",viewBox:"0 0 24 24","aria-hidden":"true"},l("path",{d:"M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"})))),l("li",{class:"px-2"},l("a",{target:"_blank",rel:"noopener",href:"https://github.com/vobyjs",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white"},l("svg",{class:"w-7 h-7",fill:"currentColor",viewBox:"0 0 24 24",width:"24px",height:"24px","aria-hidden":"true"},l("path",{"fill-rule":"evenodd",d:"M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z","clip-rule":"evenodd"})))),l("li",{class:"px-2"},l("a",{target:"_blank",rel:"noopener",href:"https://discord.com/invite/E6pK7VpnjC",class:"text-gray-500 hover:text-gray-900 dark:hover:text-white"},l("svg",{viewBox:"0 0 24 24",width:"24px",height:"24px",fill:"currentColor",class:"w-7 h-7"},l("path",{fill:"currentColor",d:"M20.3483 4.4015a.0612.0612 0 0 0-.0312-.0286 19.7986 19.7986 0 0 0-4.8852-1.5145.0741.0741 0 0 0-.0785.0371 13.774 13.774 0 0 0-.6081 1.249 18.2796 18.2796 0 0 0-5.4868 0 12.6344 12.6344 0 0 0-.6178-1.249.0771.0771 0 0 0-.0785-.0371A19.7425 19.7425 0 0 0 3.6769 4.373a.0699.0699 0 0 0-.0321.0276C.5334 9.047-.319 13.5792.0992 18.0553a.0823.0823 0 0 0 .0312.0562 19.9048 19.9048 0 0 0 5.9929 3.028.0776.0776 0 0 0 .0842-.0275 14.2123 14.2123 0 0 0 1.226-1.9936.076.076 0 0 0-.0416-.1056 13.1091 13.1091 0 0 1-1.8722-.892.077.077 0 0 1-.0075-.1275c.1258-.0943.2517-.1923.3718-.2914a.0742.0742 0 0 1 .0775-.0104c3.9278 1.7925 8.18 1.7925 12.0613 0a.074.074 0 0 1 .0785.0095c.1202.099.246.198.3728.2923a.0769.0769 0 0 1-.0067.1275 12.3024 12.3024 0 0 1-1.873.891.0765.0765 0 0 0-.0408.1066 15.9615 15.9615 0 0 0 1.225 1.9925.076.076 0 0 0 .0842.0286 19.8388 19.8388 0 0 0 6.0026-3.028.0768.0768 0 0 0 .0312-.0552c.5006-5.1749-.838-9.67-3.5483-13.6548ZM8.02 15.3299c-1.1826 0-2.157-1.0852-2.157-2.418 0-1.3327.9555-2.418 2.157-2.418 1.2108 0 2.1757 1.0947 2.1568 2.418 0 1.3328-.9555 2.418-2.1568 2.418Zm7.9747 0c-1.1825 0-2.1569-1.0852-2.1569-2.418 0-1.3327.9555-2.418 2.1569-2.418 1.2109 0 2.1758 1.0947 2.1569 2.418 0 1.3328-.946 2.418-2.157 2.418Z"})))))))}const k=T(!1);function Er(){return l("nav",{class:"z-40 shadow-sm bg-white border-b-2 border-gray-200 md:px-7 sm:px-4 py-3 md:py-4"},l("div",{class:"md:pl-10 md:pr-18 flex flex-wrap justify-between items-center mx-auto"},l(We,{href:"/voby-dev/",class:"pl-3 flex items-center"},l("div",{class:"mr-4 h-6 sm:h-9"},l(Ye,null)),l("span",{class:"self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white"},"Voby")),l("button",{type:"button",class:"mr-4 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600","aria-controls":"mobile-menu","aria-expanded":"false",onClick:()=>k(!k())},l("span",{class:"sr-only hidden"},"open main menu"),l(lr,{when:k},l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},l("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})),l("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},l("path",{"fill-rule":"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z","clip-rule":"evenodd"})))),l(Lr,null)))}const Ar=pr(()=>tt(()=>import("./playground.8c01959a.js").then(function(e){return e.p}),["assets/playground.8c01959a.js","assets/playground.db538fce.css"]));rr(l(Qs,null,l(Er,null),l(br,{routes:[{path:"/voby-dev",component:wr},{path:"/voby-dev/playground",component:l(ir,{fallback:l(Cr,null)},l(Ar,null))}]}),l("section",{class:()=>`${W()!=="/voby-dev/playground"?"visible":"hidden"}`},l(Sr,null))),document.body);export{T as $,Qs as F,tt as _,B as a,Ie as b,l as c,Js as d,g as o,$ as u};
