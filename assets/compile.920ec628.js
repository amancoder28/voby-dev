(function(){"use strict";var We={exports:{}};(function(je){(De=>{var be=Object.defineProperty,Ce=Object.defineProperties,ve=Object.getOwnPropertyDescriptor,Ue=Object.getOwnPropertyDescriptors,ze=Object.getOwnPropertyNames,ge=Object.getOwnPropertySymbols,he=Object.prototype.hasOwnProperty,Je=Object.prototype.propertyIsEnumerable,Pe=(e,t,r)=>t in e?be(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Re=(e,t)=>{for(var r in t||(t={}))he.call(t,r)&&Pe(e,r,t[r]);if(ge)for(var r of ge(t))Je.call(t,r)&&Pe(e,r,t[r]);return e},Ae=(e,t)=>Ce(e,Ue(t)),ct=(e,t)=>{for(var r in t)be(e,r,{get:t[r],enumerable:!0})},ut=(e,t,r,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of ze(t))!he.call(e,p)&&p!==r&&be(e,p,{get:()=>t[p],enumerable:!(u=ve(t,p))||u.enumerable});return e},ft=e=>ut(be({},"__esModule",{value:!0}),e),ke=(e,t,r)=>new Promise((u,p)=>{var w=a=>{try{y(r.next(a))}catch($){p($)}},i=a=>{try{y(r.throw(a))}catch($){p($)}},y=a=>a.done?u(a.value):Promise.resolve(a.value).then(w,i);y((r=r.apply(e,t)).next())}),Ie={};ct(Ie,{analyzeMetafile:()=>jt,analyzeMetafileSync:()=>Ct,build:()=>St,buildSync:()=>Pt,default:()=>It,formatMessages:()=>Tt,formatMessagesSync:()=>Dt,initialize:()=>Ut,serve:()=>Ot,transform:()=>$t,transformSync:()=>Rt,version:()=>Et}),De.exports=ft(Ie);function Qe(e){let t=u=>{if(u===null)r.write8(0);else if(typeof u=="boolean")r.write8(1),r.write8(+u);else if(typeof u=="number")r.write8(2),r.write32(u|0);else if(typeof u=="string")r.write8(3),r.write(xe(u));else if(u instanceof Uint8Array)r.write8(4),r.write(u);else if(u instanceof Array){r.write8(5),r.write32(u.length);for(let p of u)t(p)}else{let p=Object.keys(u);r.write8(6),r.write32(p.length);for(let w of p)r.write(xe(w)),t(u[w])}},r=new Xe;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),t(e.value),Ge(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function dt(e){let t=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return Ee(r.read());case 4:return r.read();case 5:{let i=r.read32(),y=[];for(let a=0;a<i;a++)y.push(t());return y}case 6:{let i=r.read32(),y={};for(let a=0;a<i;a++)y[Ee(r.read())]=t();return y}default:throw new Error("Invalid packet")}},r=new Xe(e),u=r.read32(),p=(u&1)===0;u>>>=1;let w=t();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:u,isRequest:p,value:w}}var Xe=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);Ge(this.buf,e,t)}write(e){let t=this._write(4+e.length);Ge(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return qe(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),r=this._read(t.length);return t.set(this.buf.subarray(r,r+e)),t}},xe,Ee;if(typeof TextEncoder!="undefined"&&typeof TextDecoder!="undefined"){let e=new TextEncoder,t=new TextDecoder;xe=r=>e.encode(r),Ee=r=>t.decode(r)}else if(typeof Buffer!="undefined")xe=e=>{let t=Buffer.from(e);return t instanceof Uint8Array||(t=new Uint8Array(t)),t},Ee=e=>{let{buffer:t,byteOffset:r,byteLength:u}=e;return Buffer.from(t,r,u).toString()};else throw new Error("No UTF-8 codec found");function qe(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function Ge(e,t,r){e[r++]=t,e[r++]=t>>8,e[r++]=t>>16,e[r++]=t>>24}function Ze(e){if(e+="",e.indexOf(",")>=0)throw new Error(`Invalid target: ${e}`);return e}var Ne=()=>null,Q=e=>typeof e=="boolean"?null:"a boolean",ht=e=>typeof e=="boolean"||typeof e=="object"&&!Array.isArray(e)?null:"a boolean or an object",_=e=>typeof e=="string"?null:"a string",Me=e=>e instanceof RegExp?null:"a RegExp object",Se=e=>typeof e=="number"&&e===(e|0)?null:"an integer",Ye=e=>typeof e=="function"?null:"a function",re=e=>Array.isArray(e)?null:"an array",pe=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",mt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",gt=e=>typeof e=="object"&&e!==null?null:"an array or an object",et=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",tt=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",pt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",wt=e=>typeof e=="string"||Array.isArray(e)?null:"a string or an array",yt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array";function l(e,t,r,u){let p=e[r];if(t[r+""]=!0,p===void 0)return;let w=u(p);if(w!==null)throw new Error(`"${r}" must be ${w}`);return p}function se(e,t,r){for(let u in e)if(!(u in t))throw new Error(`Invalid option ${r}: "${u}"`)}function bt(e){let t=Object.create(null),r=l(e,t,"wasmURL",_),u=l(e,t,"wasmModule",mt),p=l(e,t,"worker",Q);return se(e,t,"in initialize() call"),{wasmURL:r,wasmModule:u,worker:p}}function nt(e){let t;if(e!==void 0){t=Object.create(null);for(let r of Object.keys(e)){let u=e[r];if(typeof u=="string"||u===!1)t[r]=u;else throw new Error(`Expected ${JSON.stringify(r)} in mangle cache to map to either a string or false`)}}return t}function Fe(e,t,r,u,p){let w=l(t,r,"color",Q),i=l(t,r,"logLevel",_),y=l(t,r,"logLimit",Se);w!==void 0?e.push(`--color=${w}`):u&&e.push("--color=true"),e.push(`--log-level=${i||p}`),e.push(`--log-limit=${y||0}`)}function rt(e,t,r){let u=l(t,r,"legalComments",_),p=l(t,r,"sourceRoot",_),w=l(t,r,"sourcesContent",Q),i=l(t,r,"target",wt),y=l(t,r,"format",_),a=l(t,r,"globalName",_),$=l(t,r,"mangleProps",Me),L=l(t,r,"reserveProps",Me),E=l(t,r,"mangleQuoted",Q),m=l(t,r,"minify",Q),I=l(t,r,"minifySyntax",Q),X=l(t,r,"minifyWhitespace",Q),D=l(t,r,"minifyIdentifiers",Q),g=l(t,r,"drop",re),h=l(t,r,"charset",_),v=l(t,r,"treeShaking",Q),j=l(t,r,"ignoreAnnotations",Q),C=l(t,r,"jsx",_),U=l(t,r,"jsxFactory",_),q=l(t,r,"jsxFragment",_),n=l(t,r,"define",pe),o=l(t,r,"logOverride",pe),P=l(t,r,"pure",re),c=l(t,r,"keepNames",Q);if(u&&e.push(`--legal-comments=${u}`),p!==void 0&&e.push(`--source-root=${p}`),w!==void 0&&e.push(`--sources-content=${w}`),i&&(Array.isArray(i)?e.push(`--target=${Array.from(i).map(Ze).join(",")}`):e.push(`--target=${Ze(i)}`)),y&&e.push(`--format=${y}`),a&&e.push(`--global-name=${a}`),m&&e.push("--minify"),I&&e.push("--minify-syntax"),X&&e.push("--minify-whitespace"),D&&e.push("--minify-identifiers"),h&&e.push(`--charset=${h}`),v!==void 0&&e.push(`--tree-shaking=${v}`),j&&e.push("--ignore-annotations"),g)for(let s of g)e.push(`--drop:${s}`);if($&&e.push(`--mangle-props=${$.source}`),L&&e.push(`--reserve-props=${L.source}`),E!==void 0&&e.push(`--mangle-quoted=${E}`),C&&e.push(`--jsx=${C}`),U&&e.push(`--jsx-factory=${U}`),q&&e.push(`--jsx-fragment=${q}`),n)for(let s in n){if(s.indexOf("=")>=0)throw new Error(`Invalid define: ${s}`);e.push(`--define:${s}=${n[s]}`)}if(o)for(let s in o){if(s.indexOf("=")>=0)throw new Error(`Invalid log override: ${s}`);e.push(`--log-override:${s}=${o[s]}`)}if(P)for(let s of P)e.push(`--pure:${s}`);c&&e.push("--keep-names")}function vt(e,t,r,u,p){var w;let i=[],y=[],a=Object.create(null),$=null,L=null,E=null;Fe(i,t,a,r,u),rt(i,t,a);let m=l(t,a,"sourcemap",tt),I=l(t,a,"bundle",Q),X=l(t,a,"watch",ht),D=l(t,a,"splitting",Q),g=l(t,a,"preserveSymlinks",Q),h=l(t,a,"metafile",Q),v=l(t,a,"outfile",_),j=l(t,a,"outdir",_),C=l(t,a,"outbase",_),U=l(t,a,"platform",_),q=l(t,a,"tsconfig",_),n=l(t,a,"resolveExtensions",re),o=l(t,a,"nodePaths",re),P=l(t,a,"mainFields",re),c=l(t,a,"conditions",re),s=l(t,a,"external",re),f=l(t,a,"loader",pe),b=l(t,a,"outExtension",pe),H=l(t,a,"publicPath",_),z=l(t,a,"entryNames",_),V=l(t,a,"chunkNames",_),N=l(t,a,"assetNames",_),J=l(t,a,"inject",re),B=l(t,a,"banner",pe),T=l(t,a,"footer",pe),W=l(t,a,"entryPoints",gt),G=l(t,a,"absWorkingDir",_),A=l(t,a,"stdin",pe),Z=(w=l(t,a,"write",Q))!=null?w:p,de=l(t,a,"allowOverwrite",Q),M=l(t,a,"incremental",Q)===!0,S=l(t,a,"mangleCache",pe);if(a.plugins=!0,se(t,a,`in ${e}() call`),m&&i.push(`--sourcemap${m===!0?"":`=${m}`}`),I&&i.push("--bundle"),de&&i.push("--allow-overwrite"),X)if(i.push("--watch"),typeof X=="boolean")E={};else{let d=Object.create(null),O=l(X,d,"onRebuild",Ye);se(X,d,`on "watch" in ${e}() call`),E={onRebuild:O}}if(D&&i.push("--splitting"),g&&i.push("--preserve-symlinks"),h&&i.push("--metafile"),v&&i.push(`--outfile=${v}`),j&&i.push(`--outdir=${j}`),C&&i.push(`--outbase=${C}`),U&&i.push(`--platform=${U}`),q&&i.push(`--tsconfig=${q}`),n){let d=[];for(let O of n){if(O+="",O.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${O}`);d.push(O)}i.push(`--resolve-extensions=${d.join(",")}`)}if(H&&i.push(`--public-path=${H}`),z&&i.push(`--entry-names=${z}`),V&&i.push(`--chunk-names=${V}`),N&&i.push(`--asset-names=${N}`),P){let d=[];for(let O of P){if(O+="",O.indexOf(",")>=0)throw new Error(`Invalid main field: ${O}`);d.push(O)}i.push(`--main-fields=${d.join(",")}`)}if(c){let d=[];for(let O of c){if(O+="",O.indexOf(",")>=0)throw new Error(`Invalid condition: ${O}`);d.push(O)}i.push(`--conditions=${d.join(",")}`)}if(s)for(let d of s)i.push(`--external:${d}`);if(B)for(let d in B){if(d.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${d}`);i.push(`--banner:${d}=${B[d]}`)}if(T)for(let d in T){if(d.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${d}`);i.push(`--footer:${d}=${T[d]}`)}if(J)for(let d of J)i.push(`--inject:${d}`);if(f)for(let d in f){if(d.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${d}`);i.push(`--loader:${d}=${f[d]}`)}if(b)for(let d in b){if(d.indexOf("=")>=0)throw new Error(`Invalid out extension: ${d}`);i.push(`--out-extension:${d}=${b[d]}`)}if(W)if(Array.isArray(W))for(let d of W)y.push(["",d+""]);else for(let[d,O]of Object.entries(W))y.push([d+"",O+""]);if(A){let d=Object.create(null),O=l(A,d,"contents",_),te=l(A,d,"resolveDir",_),k=l(A,d,"sourcefile",_),x=l(A,d,"loader",_);se(A,d,'in "stdin" object'),k&&i.push(`--sourcefile=${k}`),x&&i.push(`--loader=${x}`),te&&(L=te+""),$=O?O+"":""}let R=[];if(o)for(let d of o)d+="",R.push(d);return{entries:y,flags:i,write:Z,stdinContents:$,stdinResolveDir:L,absWorkingDir:G,incremental:M,nodePaths:R,watch:E,mangleCache:nt(S)}}function xt(e,t,r,u){let p=[],w=Object.create(null);Fe(p,t,w,r,u),rt(p,t,w);let i=l(t,w,"sourcemap",tt),y=l(t,w,"tsconfigRaw",pt),a=l(t,w,"sourcefile",_),$=l(t,w,"loader",_),L=l(t,w,"banner",_),E=l(t,w,"footer",_),m=l(t,w,"mangleCache",pe);return se(t,w,`in ${e}() call`),i&&p.push(`--sourcemap=${i===!0?"external":i}`),y&&p.push(`--tsconfig-raw=${typeof y=="string"?y:JSON.stringify(y)}`),a&&p.push(`--sourcefile=${a}`),$&&p.push(`--loader=${$}`),L&&p.push(`--banner=${L}`),E&&p.push(`--footer=${E}`),{flags:p,mangleCache:nt(m)}}function _t(e){let t=new Map,r=new Map,u=new Map,p=new Map,w=null,i=0,y=0,a=new Uint8Array(16*1024),$=0,L=c=>{let s=$+c.length;if(s>a.length){let b=new Uint8Array(s*2);b.set(a),a=b}a.set(c,$),$+=c.length;let f=0;for(;f+4<=$;){let b=qe(a,f);if(f+4+b>$)break;f+=4,g(a.subarray(f,f+b)),f+=b}f>0&&(a.copyWithin(0,f,$),$-=f)},E=c=>{w={reason:c?": "+(c.message||c):""};const s="The service was stopped"+w.reason;for(let f of t.values())f(s,null);t.clear();for(let f of p.values())f.onWait(s);p.clear();for(let f of u.values())try{f(new Error(s),null)}catch(b){console.error(b)}u.clear()},m=(c,s,f)=>{if(w)return f("The service is no longer running"+w.reason,null);let b=i++;t.set(b,(H,z)=>{try{f(H,z)}finally{c&&c.unref()}}),c&&c.ref(),e.writeToStdin(Qe({id:b,isRequest:!0,value:s}))},I=(c,s)=>{if(w)throw new Error("The service is no longer running"+w.reason);e.writeToStdin(Qe({id:c,isRequest:!1,value:s}))},X=(c,s)=>ke(this,null,function*(){try{switch(s.command){case"ping":{I(c,{});break}case"on-start":{let f=r.get(s.key);f?I(c,yield f(s)):I(c,{});break}case"on-resolve":{let f=r.get(s.key);f?I(c,yield f(s)):I(c,{});break}case"on-load":{let f=r.get(s.key);f?I(c,yield f(s)):I(c,{});break}case"serve-request":{let f=p.get(s.key);f&&f.onRequest&&f.onRequest(s.args),I(c,{});break}case"serve-wait":{let f=p.get(s.key);f&&f.onWait(s.error),I(c,{});break}case"watch-rebuild":{let f=u.get(s.key);try{f&&f(null,s.args)}catch(b){console.error(b)}I(c,{});break}default:throw new Error("Invalid command: "+s.command)}}catch(f){I(c,{errors:[Oe(f,e,null,void 0,"")]})}}),D=!0,g=c=>{if(D){D=!1;let f=String.fromCharCode(...c);if(f!=="0.14.42")throw new Error(`Cannot start service: Host version "0.14.42" does not match binary version ${JSON.stringify(f)}`);return}let s=dt(c);if(s.isRequest)X(s.id,s.value);else{let f=t.get(s.id);t.delete(s.id),s.value.error?f(s.value.error,{}):f(null,s.value)}},h=(c,s,f,b,H)=>ke(this,null,function*(){let z=[],V=[],N={},J={},B=0,T=0,W=[],G=!1;s=[...s];for(let M of s){let S={};if(typeof M!="object")throw new Error(`Plugin at index ${T} must be an object`);const R=l(M,S,"name",_);if(typeof R!="string"||R==="")throw new Error(`Plugin at index ${T} is missing a name`);try{let d=l(M,S,"setup",Ye);if(typeof d!="function")throw new Error("Plugin is missing a setup function");se(M,S,`on plugin ${JSON.stringify(R)}`);let O={name:R,onResolve:[],onLoad:[]};T++;let k=d({initialOptions:c,resolve:(x,Y={})=>{if(!G)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof x!="string")throw new Error("The path to resolve must be a string");let F=Object.create(null),ae=l(Y,F,"pluginName",_),ee=l(Y,F,"importer",_),le=l(Y,F,"namespace",_),ue=l(Y,F,"resolveDir",_),oe=l(Y,F,"kind",_),K=l(Y,F,"pluginData",Ne);return se(Y,F,"in resolve() call"),new Promise((ie,ce)=>{const ne={command:"resolve",path:x,key:f,pluginName:R};ae!=null&&(ne.pluginName=ae),ee!=null&&(ne.importer=ee),le!=null&&(ne.namespace=le),ue!=null&&(ne.resolveDir=ue),oe!=null&&(ne.kind=oe),K!=null&&(ne.pluginData=b.store(K)),m(H,ne,(we,fe)=>{we!==null?ce(new Error(we)):ie({errors:ye(fe.errors,b),warnings:ye(fe.warnings,b),path:fe.path,external:fe.external,sideEffects:fe.sideEffects,namespace:fe.namespace,suffix:fe.suffix,pluginData:b.load(fe.pluginData)})})})},onStart(x){let Y='This error came from the "onStart" callback registered here:',F=Ve(new Error(Y),e,"onStart");z.push({name:R,callback:x,note:F})},onEnd(x){let Y='This error came from the "onEnd" callback registered here:',F=Ve(new Error(Y),e,"onEnd");V.push({name:R,callback:x,note:F})},onResolve(x,Y){let F='This error came from the "onResolve" callback registered here:',ae=Ve(new Error(F),e,"onResolve"),ee={},le=l(x,ee,"filter",Me),ue=l(x,ee,"namespace",_);if(se(x,ee,`in onResolve() call for plugin ${JSON.stringify(R)}`),le==null)throw new Error("onResolve() call is missing a filter");let oe=B++;N[oe]={name:R,callback:Y,note:ae},O.onResolve.push({id:oe,filter:le.source,namespace:ue||""})},onLoad(x,Y){let F='This error came from the "onLoad" callback registered here:',ae=Ve(new Error(F),e,"onLoad"),ee={},le=l(x,ee,"filter",Me),ue=l(x,ee,"namespace",_);if(se(x,ee,`in onLoad() call for plugin ${JSON.stringify(R)}`),le==null)throw new Error("onLoad() call is missing a filter");let oe=B++;J[oe]={name:R,callback:Y,note:ae},O.onLoad.push({id:oe,filter:le.source,namespace:ue||""})},esbuild:e.esbuild});k&&(yield k),W.push(O)}catch(d){return{ok:!1,error:d,pluginName:R}}}const A=M=>ke(this,null,function*(){switch(M.command){case"on-start":{let S={errors:[],warnings:[]};return yield Promise.all(z.map(R=>ke(this,[R],function*({name:d,callback:O,note:te}){try{let k=yield O();if(k!=null){if(typeof k!="object")throw new Error(`Expected onStart() callback in plugin ${JSON.stringify(d)} to return an object`);let x={},Y=l(k,x,"errors",re),F=l(k,x,"warnings",re);se(k,x,`from onStart() callback in plugin ${JSON.stringify(d)}`),Y!=null&&S.errors.push(..._e(Y,"errors",b,d)),F!=null&&S.warnings.push(..._e(F,"warnings",b,d))}}catch(k){S.errors.push(Oe(k,e,b,te&&te(),d))}}))),S}case"on-resolve":{let S={},R="",d,O;for(let te of M.ids)try{({name:R,callback:d,note:O}=N[te]);let k=yield d({path:M.path,importer:M.importer,namespace:M.namespace,resolveDir:M.resolveDir,kind:M.kind,pluginData:b.load(M.pluginData)});if(k!=null){if(typeof k!="object")throw new Error(`Expected onResolve() callback in plugin ${JSON.stringify(R)} to return an object`);let x={},Y=l(k,x,"pluginName",_),F=l(k,x,"path",_),ae=l(k,x,"namespace",_),ee=l(k,x,"suffix",_),le=l(k,x,"external",Q),ue=l(k,x,"sideEffects",Q),oe=l(k,x,"pluginData",Ne),K=l(k,x,"errors",re),ie=l(k,x,"warnings",re),ce=l(k,x,"watchFiles",re),ne=l(k,x,"watchDirs",re);se(k,x,`from onResolve() callback in plugin ${JSON.stringify(R)}`),S.id=te,Y!=null&&(S.pluginName=Y),F!=null&&(S.path=F),ae!=null&&(S.namespace=ae),ee!=null&&(S.suffix=ee),le!=null&&(S.external=le),ue!=null&&(S.sideEffects=ue),oe!=null&&(S.pluginData=b.store(oe)),K!=null&&(S.errors=_e(K,"errors",b,R)),ie!=null&&(S.warnings=_e(ie,"warnings",b,R)),ce!=null&&(S.watchFiles=Be(ce,"watchFiles")),ne!=null&&(S.watchDirs=Be(ne,"watchDirs"));break}}catch(k){return{id:te,errors:[Oe(k,e,b,O&&O(),R)]}}return S}case"on-load":{let S={},R="",d,O;for(let te of M.ids)try{({name:R,callback:d,note:O}=J[te]);let k=yield d({path:M.path,namespace:M.namespace,suffix:M.suffix,pluginData:b.load(M.pluginData)});if(k!=null){if(typeof k!="object")throw new Error(`Expected onLoad() callback in plugin ${JSON.stringify(R)} to return an object`);let x={},Y=l(k,x,"pluginName",_),F=l(k,x,"contents",yt),ae=l(k,x,"resolveDir",_),ee=l(k,x,"pluginData",Ne),le=l(k,x,"loader",_),ue=l(k,x,"errors",re),oe=l(k,x,"warnings",re),K=l(k,x,"watchFiles",re),ie=l(k,x,"watchDirs",re);se(k,x,`from onLoad() callback in plugin ${JSON.stringify(R)}`),S.id=te,Y!=null&&(S.pluginName=Y),F instanceof Uint8Array?S.contents=F:F!=null&&(S.contents=xe(F)),ae!=null&&(S.resolveDir=ae),ee!=null&&(S.pluginData=b.store(ee)),le!=null&&(S.loader=le),ue!=null&&(S.errors=_e(ue,"errors",b,R)),oe!=null&&(S.warnings=_e(oe,"warnings",b,R)),K!=null&&(S.watchFiles=Be(K,"watchFiles")),ie!=null&&(S.watchDirs=Be(ie,"watchDirs"));break}}catch(k){return{id:te,errors:[Oe(k,e,b,O&&O(),R)]}}return S}default:throw new Error("Invalid command: "+M.command)}});let Z=(M,S,R)=>R();V.length>0&&(Z=(M,S,R)=>{(()=>ke(this,null,function*(){for(const{name:d,callback:O,note:te}of V)try{yield O(M)}catch(k){M.errors.push(yield new Promise(x=>S(k,d,te&&te(),x)))}}))().then(R)}),G=!0;let de=0;return{ok:!0,requestPlugins:W,runOnEndCallbacks:Z,pluginRefs:{ref(){++de===1&&r.set(f,A)},unref(){--de===0&&r.delete(f)}}}}),v=(c,s,f,b)=>{let H={},z=l(s,H,"port",Se),V=l(s,H,"host",_),N=l(s,H,"servedir",_),J=l(s,H,"onRequest",Ye),B,T=new Promise((W,G)=>{B=A=>{p.delete(b),A!==null?G(new Error(A)):W()}});return f.serve={},se(s,H,"in serve() call"),z!==void 0&&(f.serve.port=z),V!==void 0&&(f.serve.host=V),N!==void 0&&(f.serve.servedir=N),p.set(b,{onRequest:J,onWait:B}),{wait:T,stop(){m(c,{command:"serve-stop",key:b},()=>{})}}};const j="warning",C="silent";let U=c=>{let s=y++;const f=lt();let b,{refs:H,options:z,isTTY:V,callback:N}=c;if(typeof z=="object"){let T=z.plugins;if(T!==void 0){if(!Array.isArray(T))throw new Error('"plugins" must be an array');b=T}}let J=(T,W,G,A)=>{let Z=[];try{Fe(Z,z,{},V,j)}catch{}const de=Oe(T,e,f,G,W);m(H,{command:"error",flags:Z,error:de},()=>{de.detail=f.load(de.detail),A(de)})},B=(T,W)=>{J(T,W,void 0,G=>{N($e("Build failed",[G],[]),null)})};if(b&&b.length>0){if(e.isSync)return B(new Error("Cannot use plugins in synchronous API calls"),"");h(z,b,s,f,H).then(T=>{if(!T.ok)B(T.error,T.pluginName);else try{q(Ae(Re({},c),{key:s,details:f,logPluginError:J,requestPlugins:T.requestPlugins,runOnEndCallbacks:T.runOnEndCallbacks,pluginRefs:T.pluginRefs}))}catch(W){B(W,"")}},T=>B(T,""))}else try{q(Ae(Re({},c),{key:s,details:f,logPluginError:J,requestPlugins:null,runOnEndCallbacks:(T,W,G)=>G(),pluginRefs:null}))}catch(T){B(T,"")}},q=({callName:c,refs:s,serveOptions:f,options:b,isTTY:H,defaultWD:z,callback:V,key:N,details:J,logPluginError:B,requestPlugins:T,runOnEndCallbacks:W,pluginRefs:G})=>{const A={ref(){G&&G.ref(),s&&s.ref()},unref(){G&&G.unref(),s&&s.unref()}};let Z=!e.isBrowser,{entries:de,flags:M,write:S,stdinContents:R,stdinResolveDir:d,absWorkingDir:O,incremental:te,nodePaths:k,watch:x,mangleCache:Y}=vt(c,b,H,j,Z),F={command:"build",key:N,entries:de,flags:M,write:S,stdinContents:R,stdinResolveDir:d,absWorkingDir:O||z,incremental:te,nodePaths:k};T&&(F.plugins=T),Y&&(F.mangleCache=Y);let ae=f&&v(A,f,F,N),ee,le,ue=(K,ie)=>{K.outputFiles&&(ie.outputFiles=K.outputFiles.map(kt)),K.metafile&&(ie.metafile=JSON.parse(K.metafile)),K.mangleCache&&(ie.mangleCache=K.mangleCache),K.writeToStdout!==void 0&&console.log(Ee(K.writeToStdout).replace(/\n$/,""))},oe=(K,ie)=>{let ce={errors:ye(K.errors,J),warnings:ye(K.warnings,J)};ue(K,ce),W(ce,B,()=>{if(ce.errors.length>0)return ie($e("Build failed",ce.errors,ce.warnings),null);if(K.rebuild){if(!ee){let ne=!1;ee=()=>new Promise((we,fe)=>{if(ne||w)throw new Error("Cannot rebuild");m(A,{command:"rebuild",key:N},(me,Nt)=>{if(me)return ie($e("Build failed",[{pluginName:"",text:me,location:null,notes:[],detail:void 0}],[]),null);oe(Nt,(Ke,Mt)=>{Ke?fe(Ke):we(Mt)})})}),A.ref(),ee.dispose=()=>{ne||(ne=!0,m(A,{command:"rebuild-dispose",key:N},()=>{}),A.unref())}}ce.rebuild=ee}if(K.watch){if(!le){let ne=!1;A.ref(),le=()=>{ne||(ne=!0,u.delete(N),m(A,{command:"watch-stop",key:N},()=>{}),A.unref())},x&&u.set(N,(we,fe)=>{if(we){x.onRebuild&&x.onRebuild(we,null);return}let me={errors:ye(fe.errors,J),warnings:ye(fe.warnings,J)};ue(fe,me),W(me,B,()=>{if(me.errors.length>0){x.onRebuild&&x.onRebuild($e("Build failed",me.errors,me.warnings),null);return}fe.rebuildID!==void 0&&(me.rebuild=ee),me.stop=le,x.onRebuild&&x.onRebuild(null,me)})})}ce.stop=le}ie(null,ce)})};if(S&&e.isBrowser)throw new Error('Cannot enable "write" in the browser');if(te&&e.isSync)throw new Error('Cannot use "incremental" with a synchronous build');if(x&&e.isSync)throw new Error('Cannot use "watch" with a synchronous build');m(A,F,(K,ie)=>{if(K)return V(new Error(K),null);if(ae){let ce=ie,ne=!1;A.ref();let we={port:ce.port,host:ce.host,wait:ae.wait,stop(){ne||(ne=!0,ae.stop(),A.unref())}};return A.ref(),ae.wait.then(A.unref,A.unref),V(null,we)}return oe(ie,V)})};return{readFromStdout:L,afterClose:E,service:{buildOrServe:U,transform:({callName:c,refs:s,input:f,options:b,isTTY:H,fs:z,callback:V})=>{const N=lt();let J=B=>{try{if(typeof f!="string")throw new Error('The input to "transform" must be a string');let{flags:T,mangleCache:W}=xt(c,b,H,C),G={command:"transform",flags:T,inputFS:B!==null,input:B!==null?B:f};W&&(G.mangleCache=W),m(s,G,(A,Z)=>{if(A)return V(new Error(A),null);let de=ye(Z.errors,N),M=ye(Z.warnings,N),S=1,R=()=>{if(--S===0){let d={warnings:M,code:Z.code,map:Z.map};Z.mangleCache&&(d.mangleCache=Z==null?void 0:Z.mangleCache),V(null,d)}};if(de.length>0)return V($e("Transform failed",de,M),null);Z.codeFS&&(S++,z.readFile(Z.code,(d,O)=>{d!==null?V(d,null):(Z.code=O,R())})),Z.mapFS&&(S++,z.readFile(Z.map,(d,O)=>{d!==null?V(d,null):(Z.map=O,R())})),R()})}catch(T){let W=[];try{Fe(W,b,{},H,C)}catch{}const G=Oe(T,e,N,void 0,"");m(s,{command:"error",flags:W,error:G},()=>{G.detail=N.load(G.detail),V($e("Transform failed",[G],[]),null)})}};if(typeof f=="string"&&f.length>1024*1024){let B=J;J=()=>z.writeFile(f,B)}J(null)},formatMessages:({callName:c,refs:s,messages:f,options:b,callback:H})=>{let z=_e(f,"messages",null,"");if(!b)throw new Error(`Missing second argument in ${c}() call`);let V={},N=l(b,V,"kind",_),J=l(b,V,"color",Q),B=l(b,V,"terminalWidth",Se);if(se(b,V,`in ${c}() call`),N===void 0)throw new Error(`Missing "kind" in ${c}() call`);if(N!=="error"&&N!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${c}() call`);let T={command:"format-msgs",messages:z,isWarning:N==="warning"};J!==void 0&&(T.color=J),B!==void 0&&(T.terminalWidth=B),m(s,T,(W,G)=>{if(W)return H(new Error(W),null);H(null,G.messages)})},analyzeMetafile:({callName:c,refs:s,metafile:f,options:b,callback:H})=>{b===void 0&&(b={});let z={},V=l(b,z,"color",Q),N=l(b,z,"verbose",Q);se(b,z,`in ${c}() call`);let J={command:"analyze-metafile",metafile:f};V!==void 0&&(J.color=V),N!==void 0&&(J.verbose=N),m(s,J,(B,T)=>{if(B)return H(new Error(B),null);H(null,T.result)})}}}}function lt(){const e=new Map;let t=0;return{load(r){return e.get(r)},store(r){if(r===void 0)return-1;const u=t++;return e.set(u,r),u}}}function Ve(e,t,r){let u,p=!1;return()=>{if(p)return u;p=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let i=st(t,w,r);if(i)return u={text:e.message,location:i},u}catch{}}}function Oe(e,t,r,u,p){let w="Internal error",i=null;try{w=(e&&e.message||e)+""}catch{}try{i=st(t,(e.stack+"").split(`
`),"")}catch{}return{pluginName:p,text:w,location:i,notes:u?[u]:[],detail:r?r.store(e):-1}}function st(e,t,r){let u="    at ";if(e.readFileSync&&!t[0].startsWith(u)&&t[1].startsWith(u))for(let p=1;p<t.length;p++){let w=t[p];if(!!w.startsWith(u))for(w=w.slice(u.length);;){let i=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(i){w=i[1];continue}if(i=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),i){w=i[1];continue}if(i=/^(\S+):(\d+):(\d+)$/.exec(w),i){let y;try{y=e.readFileSync(i[1],"utf8")}catch{break}let a=y.split(/\r\n|\r|\n|\u2028|\u2029/)[+i[2]-1]||"",$=+i[3]-1,L=a.slice($,$+r.length)===r?r.length:0;return{file:i[1],namespace:"file",line:+i[2],column:xe(a.slice(0,$)).length,length:xe(a.slice($,$+L)).length,lineText:a+`
`+t.slice(1).join(`
`),suggestion:""}}break}}return null}function $e(e,t,r){let u=5,p=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,u+1).map((i,y)=>{if(y===u)return`
...`;if(!i.location)return`
error: ${i.text}`;let{file:a,line:$,column:L}=i.location,E=i.pluginName?`[plugin: ${i.pluginName}] `:"";return`
${a}:${$}:${L}: ERROR: ${E}${i.text}`}).join(""),w=new Error(`${e}${p}`);return w.errors=t,w.warnings=r,w}function ye(e,t){for(const r of e)r.detail=t.load(r.detail);return e}function it(e,t){if(e==null)return null;let r={},u=l(e,r,"file",_),p=l(e,r,"namespace",_),w=l(e,r,"line",Se),i=l(e,r,"column",Se),y=l(e,r,"length",Se),a=l(e,r,"lineText",_),$=l(e,r,"suggestion",_);return se(e,r,t),{file:u||"",namespace:p||"",line:w||0,column:i||0,length:y||0,lineText:a||"",suggestion:$||""}}function _e(e,t,r,u){let p=[],w=0;for(const i of e){let y={},a=l(i,y,"pluginName",_),$=l(i,y,"text",_),L=l(i,y,"location",et),E=l(i,y,"notes",re),m=l(i,y,"detail",Ne),I=`in element ${w} of "${t}"`;se(i,y,I);let X=[];if(E)for(const D of E){let g={},h=l(D,g,"text",_),v=l(D,g,"location",et);se(D,g,I),X.push({text:h||"",location:it(v,I)})}p.push({pluginName:a||u,text:$||"",location:it(L,I),notes:X,detail:r?r.store(m):-1}),w++}return p}function Be(e,t){const r=[];for(const u of e){if(typeof u!="string")throw new Error(`${JSON.stringify(t)} must be an array of strings`);r.push(u)}return r}function kt({path:e,contents:t}){let r=null;return{path:e,contents:t,get text(){return r===null&&(r=Ee(t)),r}}}var Et="0.14.42",St=e=>Le().build(e),Ot=()=>{throw new Error('The "serve" API only works in node')},$t=(e,t)=>Le().transform(e,t),Tt=(e,t)=>Le().formatMessages(e,t),jt=(e,t)=>Le().analyzeMetafile(e,t),Pt=()=>{throw new Error('The "buildSync" API only works in node')},Rt=()=>{throw new Error('The "transformSync" API only works in node')},Dt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Ct=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Te,He,Le=()=>{if(He)return He;throw Te?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Ut=e=>{e=bt(e||{});let t=e.wasmURL,r=e.wasmModule,u=e.worker!==!1;if(!t&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Te)throw new Error('Cannot call "initialize" more than once');return Te=At(t||"",r,u),Te.catch(()=>{Te=void 0}),Te},At=(e,t,r)=>ke(void 0,null,function*(){let u;if(t)u=t;else{let y=yield fetch(e);if(!y.ok)throw new Error(`Failed to download ${JSON.stringify(e)}`);u=yield y.arrayBuffer()}let p;if(r){let y=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substr(0, nl));
                outputBuf = outputBuf.substr(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = new Date().getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(() => {
                    this._resume();
                    while (this._scheduledTimeouts.has(id)) {
                      console.warn("scheduleTimeoutEvent: missed timeout event");
                      this._resume();
                    }
                  }, getInt64(sp + 8) + 1));
                  this.mem.setInt32(sp + 16, id, true);
                },
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.14.42"}\`];
        if (wasm instanceof WebAssembly.Module) {
          WebAssembly.instantiate(wasm, go.importObject).then((instance) => go.run(instance));
        } else {
          WebAssembly.instantiate(wasm, go.importObject).then(({ instance }) => go.run(instance));
        }
      };
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});p=new Worker(URL.createObjectURL(y))}else{let y=(a=>{var $=(m,I,X)=>new Promise((D,g)=>{var h=C=>{try{j(X.next(C))}catch(U){g(U)}},v=C=>{try{j(X.throw(C))}catch(U){g(U)}},j=C=>C.done?D(C.value):Promise.resolve(C.value).then(h,v);j((X=X.apply(m,I)).next())});let L,E={};for(let m=self;m;m=Object.getPrototypeOf(m))for(let I of Object.getOwnPropertyNames(m))I in E||Object.defineProperty(E,I,{get:()=>self[I]});return(()=>{const m=()=>{const D=new Error("not implemented");return D.code="ENOSYS",D};if(!E.fs){let D="";E.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(g,h){D+=X.decode(h);const v=D.lastIndexOf(`
`);return v!=-1&&(console.log(D.substr(0,v)),D=D.substr(v+1)),h.length},write(g,h,v,j,C,U){if(v!==0||j!==h.length||C!==null){U(m());return}const q=this.writeSync(g,h);U(null,q)},chmod(g,h,v){v(m())},chown(g,h,v,j){j(m())},close(g,h){h(m())},fchmod(g,h,v){v(m())},fchown(g,h,v,j){j(m())},fstat(g,h){h(m())},fsync(g,h){h(null)},ftruncate(g,h,v){v(m())},lchown(g,h,v,j){j(m())},link(g,h,v){v(m())},lstat(g,h){h(m())},mkdir(g,h,v){v(m())},open(g,h,v,j){j(m())},read(g,h,v,j,C,U){U(m())},readdir(g,h){h(m())},readlink(g,h){h(m())},rename(g,h,v){v(m())},rmdir(g,h){h(m())},stat(g,h){h(m())},symlink(g,h,v){v(m())},truncate(g,h,v){v(m())},unlink(g,h){h(m())},utimes(g,h,v,j){j(m())}}}if(E.process||(E.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw m()},pid:-1,ppid:-1,umask(){throw m()},cwd(){throw m()},chdir(){throw m()}}),!E.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!E.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!E.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!E.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const I=new TextEncoder("utf-8"),X=new TextDecoder("utf-8");E.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const D=(n,o)=>{this.mem.setUint32(n+0,o,!0),this.mem.setUint32(n+4,Math.floor(o/4294967296),!0)},g=n=>{const o=this.mem.getUint32(n+0,!0),P=this.mem.getInt32(n+4,!0);return o+P*4294967296},h=n=>{const o=this.mem.getFloat64(n,!0);if(o===0)return;if(!isNaN(o))return o;const P=this.mem.getUint32(n,!0);return this._values[P]},v=(n,o)=>{if(typeof o=="number"&&o!==0){if(isNaN(o)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,o,!0);return}if(o===void 0){this.mem.setFloat64(n,0,!0);return}let c=this._ids.get(o);c===void 0&&(c=this._idPool.pop(),c===void 0&&(c=this._values.length),this._values[c]=o,this._goRefCounts[c]=0,this._ids.set(o,c)),this._goRefCounts[c]++;let s=0;switch(typeof o){case"object":o!==null&&(s=1);break;case"string":s=2;break;case"symbol":s=3;break;case"function":s=4;break}this.mem.setUint32(n+4,2146959360|s,!0),this.mem.setUint32(n,c,!0)},j=n=>{const o=g(n+0),P=g(n+8);return new Uint8Array(this._inst.exports.mem.buffer,o,P)},C=n=>{const o=g(n+0),P=g(n+8),c=new Array(P);for(let s=0;s<P;s++)c[s]=h(o+s*8);return c},U=n=>{const o=g(n+0),P=g(n+8);return X.decode(new DataView(this._inst.exports.mem.buffer,o,P))},q=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":n=>{n>>>=0;const o=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(o)},"runtime.wasmWrite":n=>{n>>>=0;const o=g(n+8),P=g(n+16),c=this.mem.getInt32(n+24,!0);E.fs.writeSync(o,new Uint8Array(this._inst.exports.mem.buffer,P,c))},"runtime.resetMemoryDataView":n=>{n>>>=0,this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,D(n+8,(q+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;const o=new Date().getTime();D(n+8,o/1e3),this.mem.setInt32(n+16,o%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;const o=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(o,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(o);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},g(n+8)+1)),this.mem.setInt32(n+16,o,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;const o=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(o)),this._scheduledTimeouts.delete(o)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues(j(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;const o=this.mem.getUint32(n+8,!0);if(this._goRefCounts[o]--,this._goRefCounts[o]===0){const P=this._values[o];this._values[o]=null,this._ids.delete(P),this._idPool.push(o)}},"syscall/js.stringVal":n=>{n>>>=0,v(n+24,U(n+8))},"syscall/js.valueGet":n=>{n>>>=0;const o=Reflect.get(h(n+8),U(n+16));n=this._inst.exports.getsp()>>>0,v(n+32,o)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(h(n+8),U(n+16),h(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(h(n+8),U(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,v(n+24,Reflect.get(h(n+8),g(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(h(n+8),g(n+16),h(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{const o=h(n+8),P=Reflect.get(o,U(n+16)),c=C(n+32),s=Reflect.apply(P,o,c);n=this._inst.exports.getsp()>>>0,v(n+56,s),this.mem.setUint8(n+64,1)}catch(o){n=this._inst.exports.getsp()>>>0,v(n+56,o),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{const o=h(n+8),P=C(n+16),c=Reflect.apply(o,void 0,P);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(o){n=this._inst.exports.getsp()>>>0,v(n+40,o),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{const o=h(n+8),P=C(n+16),c=Reflect.construct(o,P);n=this._inst.exports.getsp()>>>0,v(n+40,c),this.mem.setUint8(n+48,1)}catch(o){n=this._inst.exports.getsp()>>>0,v(n+40,o),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,D(n+16,parseInt(h(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const o=I.encode(String(h(n+8)));v(n+16,o),D(n+24,o.length)},"syscall/js.valueLoadString":n=>{n>>>=0;const o=h(n+8);j(n+16).set(o)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,h(n+8)instanceof h(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;const o=j(n+8),P=h(n+32);if(!(P instanceof Uint8Array||P instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=P.subarray(0,o.length);o.set(c),D(n+40,c.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;const o=h(n+8),P=j(n+16);if(!(o instanceof Uint8Array||o instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const c=P.subarray(0,o.length);o.set(c),D(n+40,c.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}run(D){return $(this,null,function*(){if(!(D instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=D,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,E,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[E,5],[this,6]]),this._idPool=[],this.exited=!1;let g=4096;const h=n=>{const o=g,P=I.encode(n+"\0");return new Uint8Array(this.mem.buffer,g,P.length).set(P),g+=P.length,g%8!==0&&(g+=8-g%8),o},v=this.argv.length,j=[];this.argv.forEach(n=>{j.push(h(n))}),j.push(0),Object.keys(this.env).sort().forEach(n=>{j.push(h(`${n}=${this.env[n]}`))}),j.push(0);const U=g;j.forEach(n=>{this.mem.setUint32(g,n,!0),this.mem.setUint32(g+4,0,!0),g+=8});const q=4096+8192;if(g>=q)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,U),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(D){const g=this;return function(){const h={id:D,this:this,args:arguments};return g._pendingEvent=h,g._resume(),h.result}}}})(),L=({data:m})=>{let I=new TextDecoder,X=E.fs,D="";X.writeSync=(C,U)=>{if(C===1)a(U);else if(C===2){D+=I.decode(U);let q=D.split(`
`);q.length>1&&console.log(q.slice(0,-1).join(`
`)),D=q[q.length-1]}else throw new Error("Bad write");return U.length};let g=[],h,v=0;L=({data:C})=>{C.length>0&&(g.push(C),h&&h())},X.read=(C,U,q,n,o,P)=>{if(C!==0||q!==0||n!==U.length||o!==null)throw new Error("Bad read");if(g.length===0){h=()=>X.read(C,U,q,n,o,P);return}let c=g[0],s=Math.max(0,Math.min(n,c.length-v));U.set(c.subarray(v,v+s),q),v+=s,v===c.length&&(g.shift(),v=0),P(null,s)};let j=new E.Go;j.argv=["","--service=0.14.42"],m instanceof WebAssembly.Module?WebAssembly.instantiate(m,j.importObject).then(C=>j.run(C)):WebAssembly.instantiate(m,j.importObject).then(({instance:C})=>j.run(C))},m=>L(m)})(a=>p.onmessage({data:a}));p={onmessage:null,postMessage:a=>setTimeout(()=>y({data:a})),terminate(){}}}p.postMessage(u),p.onmessage=({data:y})=>w(y);let{readFromStdout:w,service:i}=_t({writeToStdin(y){p.postMessage(y)},isSync:!1,isBrowser:!0,esbuild:Ie});He={build:y=>new Promise((a,$)=>i.buildOrServe({callName:"build",refs:null,serveOptions:null,options:y,isTTY:!1,defaultWD:"/",callback:(L,E)=>L?$(L):a(E)})),transform:(y,a)=>new Promise(($,L)=>i.transform({callName:"transform",refs:null,input:y,options:a||{},isTTY:!1,fs:{readFile(E,m){m(new Error("Internal error"),null)},writeFile(E,m){m(null)}},callback:(E,m)=>E?L(E):$(m)})),formatMessages:(y,a)=>new Promise(($,L)=>i.formatMessages({callName:"formatMessages",refs:null,messages:y,options:a,callback:(E,m)=>E?L(E):$(m)})),analyzeMetafile:(y,a)=>new Promise(($,L)=>i.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof y=="string"?y:JSON.stringify(y),options:a,callback:(E,m)=>E?L(E):$(m)}))}}),It=Ie})(je)})(We);var at="/voby-dev/assets/esbuild.6990712d.wasm";const ot=We.exports.initialize({wasmURL:at});self.addEventListener("message",async({data:je})=>{var De,be,Ce;je[0].value=`import * as React from "voby";
`+je[0].value;try{await ot;const ve=await We.exports.build({entryPoints:["index.tsx"],outdir:"/",bundle:!0,format:"esm",external:["voby"],plugins:[{name:"virtual-files",setup(ge){ge.onResolve({filter:/.*/},he=>{if(he.kind==="entry-point")return{path:`/${he.path}`};if(he.kind==="import-statement"&&he.path.startsWith("./"))return/\.css$|\.ts$|\.tsx$|\.js$|\.jsx$/.test(he.path)?{path:he.path.slice(1)}:{path:`${he.path.slice(1)}.tsx`}}),ge.onLoad({filter:/.*/},he=>{var Re;const Je=/\.css$/.test(he.path)?"css":"tsx",Pe=(Re=je.find(Ae=>Ae.file===he.path.slice(1)))==null?void 0:Re.value;if(Pe)return{contents:Pe,loader:Je}})}}]});if(!((De=ve.outputFiles)!=null&&De.length))return;const Ue=(be=ve.outputFiles.find(ge=>ge.path==="/index.js"))==null?void 0:be.text,ze=(Ce=ve.outputFiles.find(ge=>ge.path==="/index.css"))==null?void 0:Ce.text;Ue&&self.postMessage({js:Ue,css:ze})}catch(ve){console.log(ve)}})})();
