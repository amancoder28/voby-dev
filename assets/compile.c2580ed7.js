(function(){"use strict";var Be={exports:{}};(function(Te){(Pe=>{var ye=Object.defineProperty,$e=Object.defineProperties,Re=Object.getOwnPropertyDescriptor,me=Object.getOwnPropertyDescriptors,De=Object.getOwnPropertyNames,je=Object.getOwnPropertySymbols,Ce=Object.prototype.hasOwnProperty,ot=Object.prototype.propertyIsEnumerable,Ge=(e,t,r)=>t in e?ye(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,Ye=(e,t)=>{for(var r in t||(t={}))Ce.call(t,r)&&Ge(e,r,t[r]);if(je)for(var r of je(t))ot.call(t,r)&&Ge(e,r,t[r]);return e},He=(e,t)=>$e(e,me(t)),ct=(e,t)=>{for(var r in t)ye(e,r,{get:t[r],enumerable:!0})},ut=(e,t,r,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let p of De(t))!Ce.call(e,p)&&p!==r&&ye(e,p,{get:()=>t[p],enumerable:!(c=Re(t,p))||c.enumerable});return e},ft=e=>ut(ye({},"__esModule",{value:!0}),e),xe=(e,t,r)=>new Promise((c,p)=>{var w=a=>{try{y(r.next(a))}catch(T){p(T)}},i=a=>{try{y(r.throw(a))}catch(T){p(T)}},y=a=>a.done?c(a.value):Promise.resolve(a.value).then(w,i);y((r=r.apply(e,t)).next())}),Ue={};ct(Ue,{analyzeMetafile:()=>Pt,analyzeMetafileSync:()=>Ct,build:()=>St,buildSync:()=>$t,default:()=>It,formatMessages:()=>jt,formatMessagesSync:()=>Dt,initialize:()=>Ut,serve:()=>Ot,transform:()=>Tt,transformSync:()=>Rt,version:()=>Et}),Pe.exports=ft(Ue);function Ke(e){let t=c=>{if(c===null)r.write8(0);else if(typeof c=="boolean")r.write8(1),r.write8(+c);else if(typeof c=="number")r.write8(2),r.write32(c|0);else if(typeof c=="string")r.write8(3),r.write(be(c));else if(c instanceof Uint8Array)r.write8(4),r.write(c);else if(c instanceof Array){r.write8(5),r.write32(c.length);for(let p of c)t(p)}else{let p=Object.keys(c);r.write8(6),r.write32(p.length);for(let w of p)r.write(be(w)),t(c[w])}},r=new Qe;return r.write32(0),r.write32(e.id<<1|+!e.isRequest),t(e.value),Le(r.buf,r.len-4,0),r.buf.subarray(0,r.len)}function dt(e){let t=()=>{switch(r.read8()){case 0:return null;case 1:return!!r.read8();case 2:return r.read32();case 3:return _e(r.read());case 4:return r.read();case 5:{let i=r.read32(),y=[];for(let a=0;a<i;a++)y.push(t());return y}case 6:{let i=r.read32(),y={};for(let a=0;a<i;a++)y[_e(r.read())]=t();return y}default:throw new Error("Invalid packet")}},r=new Qe(e),c=r.read32(),p=(c&1)===0;c>>>=1;let w=t();if(r.ptr!==e.length)throw new Error("Invalid packet");return{id:c,isRequest:p,value:w}}var Qe=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);Le(this.buf,e,t)}write(e){let t=this._write(4+e.length);Le(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw new Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return Xe(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),r=this._read(t.length);return t.set(this.buf.subarray(r,r+e)),t}},be,_e;if(typeof TextEncoder!="undefined"&&typeof TextDecoder!="undefined"){let e=new TextEncoder,t=new TextDecoder;be=r=>e.encode(r),_e=r=>t.decode(r)}else if(typeof Buffer!="undefined")be=e=>{let t=Buffer.from(e);return t instanceof Uint8Array||(t=new Uint8Array(t)),t},_e=e=>{let{buffer:t,byteOffset:r,byteLength:c}=e;return Buffer.from(t,r,c).toString()};else throw new Error("No UTF-8 codec found");function Xe(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function Le(e,t,r){e[r++]=t,e[r++]=t>>8,e[r++]=t>>16,e[r++]=t>>24}function qe(e){if(e+="",e.indexOf(",")>=0)throw new Error(`Invalid target: ${e}`);return e}var Ae=()=>null,Q=e=>typeof e=="boolean"?null:"a boolean",ht=e=>typeof e=="boolean"||typeof e=="object"&&!Array.isArray(e)?null:"a boolean or an object",_=e=>typeof e=="string"?null:"a string",Ie=e=>e instanceof RegExp?null:"a RegExp object",ke=e=>typeof e=="number"&&e===(e|0)?null:"an integer",We=e=>typeof e=="function"?null:"a function",re=e=>Array.isArray(e)?null:"an array",pe=e=>typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"an object",mt=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",gt=e=>typeof e=="object"&&e!==null?null:"an array or an object",Ze=e=>typeof e=="object"&&!Array.isArray(e)?null:"an object or null",et=e=>typeof e=="string"||typeof e=="boolean"?null:"a string or a boolean",pt=e=>typeof e=="string"||typeof e=="object"&&e!==null&&!Array.isArray(e)?null:"a string or an object",wt=e=>typeof e=="string"||Array.isArray(e)?null:"a string or an array",yt=e=>typeof e=="string"||e instanceof Uint8Array?null:"a string or a Uint8Array";function l(e,t,r,c){let p=e[r];if(t[r+""]=!0,p===void 0)return;let w=c(p);if(w!==null)throw new Error(`"${r}" must be ${w}`);return p}function se(e,t,r){for(let c in e)if(!(c in t))throw new Error(`Invalid option ${r}: "${c}"`)}function bt(e){let t=Object.create(null),r=l(e,t,"wasmURL",_),c=l(e,t,"wasmModule",mt),p=l(e,t,"worker",Q);return se(e,t,"in initialize() call"),{wasmURL:r,wasmModule:c,worker:p}}function tt(e){let t;if(e!==void 0){t=Object.create(null);for(let r of Object.keys(e)){let c=e[r];if(typeof c=="string"||c===!1)t[r]=c;else throw new Error(`Expected ${JSON.stringify(r)} in mangle cache to map to either a string or false`)}}return t}function Ne(e,t,r,c,p){let w=l(t,r,"color",Q),i=l(t,r,"logLevel",_),y=l(t,r,"logLimit",ke);w!==void 0?e.push(`--color=${w}`):c&&e.push("--color=true"),e.push(`--log-level=${i||p}`),e.push(`--log-limit=${y||0}`)}function nt(e,t,r){let c=l(t,r,"legalComments",_),p=l(t,r,"sourceRoot",_),w=l(t,r,"sourcesContent",Q),i=l(t,r,"target",wt),y=l(t,r,"format",_),a=l(t,r,"globalName",_),T=l(t,r,"mangleProps",Ie),L=l(t,r,"reserveProps",Ie),E=l(t,r,"mangleQuoted",Q),m=l(t,r,"minify",Q),I=l(t,r,"minifySyntax",Q),X=l(t,r,"minifyWhitespace",Q),D=l(t,r,"minifyIdentifiers",Q),g=l(t,r,"drop",re),h=l(t,r,"charset",_),v=l(t,r,"treeShaking",Q),P=l(t,r,"ignoreAnnotations",Q),C=l(t,r,"jsx",_),U=l(t,r,"jsxFactory",_),q=l(t,r,"jsxFragment",_),n=l(t,r,"define",pe),o=l(t,r,"pure",re),R=l(t,r,"keepNames",Q);if(c&&e.push(`--legal-comments=${c}`),p!==void 0&&e.push(`--source-root=${p}`),w!==void 0&&e.push(`--sources-content=${w}`),i&&(Array.isArray(i)?e.push(`--target=${Array.from(i).map(qe).join(",")}`):e.push(`--target=${qe(i)}`)),y&&e.push(`--format=${y}`),a&&e.push(`--global-name=${a}`),m&&e.push("--minify"),I&&e.push("--minify-syntax"),X&&e.push("--minify-whitespace"),D&&e.push("--minify-identifiers"),h&&e.push(`--charset=${h}`),v!==void 0&&e.push(`--tree-shaking=${v}`),P&&e.push("--ignore-annotations"),g)for(let s of g)e.push(`--drop:${s}`);if(T&&e.push(`--mangle-props=${T.source}`),L&&e.push(`--reserve-props=${L.source}`),E!==void 0&&e.push(`--mangle-quoted=${E}`),C&&e.push(`--jsx=${C}`),U&&e.push(`--jsx-factory=${U}`),q&&e.push(`--jsx-fragment=${q}`),n)for(let s in n){if(s.indexOf("=")>=0)throw new Error(`Invalid define: ${s}`);e.push(`--define:${s}=${n[s]}`)}if(o)for(let s of o)e.push(`--pure:${s}`);R&&e.push("--keep-names")}function vt(e,t,r,c,p){var w;let i=[],y=[],a=Object.create(null),T=null,L=null,E=null;Ne(i,t,a,r,c),nt(i,t,a);let m=l(t,a,"sourcemap",et),I=l(t,a,"bundle",Q),X=l(t,a,"watch",ht),D=l(t,a,"splitting",Q),g=l(t,a,"preserveSymlinks",Q),h=l(t,a,"metafile",Q),v=l(t,a,"outfile",_),P=l(t,a,"outdir",_),C=l(t,a,"outbase",_),U=l(t,a,"platform",_),q=l(t,a,"tsconfig",_),n=l(t,a,"resolveExtensions",re),o=l(t,a,"nodePaths",re),R=l(t,a,"mainFields",re),s=l(t,a,"conditions",re),u=l(t,a,"external",re),f=l(t,a,"loader",pe),b=l(t,a,"outExtension",pe),H=l(t,a,"publicPath",_),z=l(t,a,"entryNames",_),V=l(t,a,"chunkNames",_),N=l(t,a,"assetNames",_),J=l(t,a,"inject",re),B=l(t,a,"banner",pe),j=l(t,a,"footer",pe),W=l(t,a,"entryPoints",gt),G=l(t,a,"absWorkingDir",_),A=l(t,a,"stdin",pe),Z=(w=l(t,a,"write",Q))!=null?w:p,de=l(t,a,"allowOverwrite",Q),M=l(t,a,"incremental",Q)===!0,S=l(t,a,"mangleCache",pe);if(a.plugins=!0,se(t,a,`in ${e}() call`),m&&i.push(`--sourcemap${m===!0?"":`=${m}`}`),I&&i.push("--bundle"),de&&i.push("--allow-overwrite"),X)if(i.push("--watch"),typeof X=="boolean")E={};else{let d=Object.create(null),O=l(X,d,"onRebuild",We);se(X,d,`on "watch" in ${e}() call`),E={onRebuild:O}}if(D&&i.push("--splitting"),g&&i.push("--preserve-symlinks"),h&&i.push("--metafile"),v&&i.push(`--outfile=${v}`),P&&i.push(`--outdir=${P}`),C&&i.push(`--outbase=${C}`),U&&i.push(`--platform=${U}`),q&&i.push(`--tsconfig=${q}`),n){let d=[];for(let O of n){if(O+="",O.indexOf(",")>=0)throw new Error(`Invalid resolve extension: ${O}`);d.push(O)}i.push(`--resolve-extensions=${d.join(",")}`)}if(H&&i.push(`--public-path=${H}`),z&&i.push(`--entry-names=${z}`),V&&i.push(`--chunk-names=${V}`),N&&i.push(`--asset-names=${N}`),R){let d=[];for(let O of R){if(O+="",O.indexOf(",")>=0)throw new Error(`Invalid main field: ${O}`);d.push(O)}i.push(`--main-fields=${d.join(",")}`)}if(s){let d=[];for(let O of s){if(O+="",O.indexOf(",")>=0)throw new Error(`Invalid condition: ${O}`);d.push(O)}i.push(`--conditions=${d.join(",")}`)}if(u)for(let d of u)i.push(`--external:${d}`);if(B)for(let d in B){if(d.indexOf("=")>=0)throw new Error(`Invalid banner file type: ${d}`);i.push(`--banner:${d}=${B[d]}`)}if(j)for(let d in j){if(d.indexOf("=")>=0)throw new Error(`Invalid footer file type: ${d}`);i.push(`--footer:${d}=${j[d]}`)}if(J)for(let d of J)i.push(`--inject:${d}`);if(f)for(let d in f){if(d.indexOf("=")>=0)throw new Error(`Invalid loader extension: ${d}`);i.push(`--loader:${d}=${f[d]}`)}if(b)for(let d in b){if(d.indexOf("=")>=0)throw new Error(`Invalid out extension: ${d}`);i.push(`--out-extension:${d}=${b[d]}`)}if(W)if(Array.isArray(W))for(let d of W)y.push(["",d+""]);else for(let[d,O]of Object.entries(W))y.push([d+"",O+""]);if(A){let d=Object.create(null),O=l(A,d,"contents",_),te=l(A,d,"resolveDir",_),k=l(A,d,"sourcefile",_),x=l(A,d,"loader",_);se(A,d,'in "stdin" object'),k&&i.push(`--sourcefile=${k}`),x&&i.push(`--loader=${x}`),te&&(L=te+""),T=O?O+"":""}let $=[];if(o)for(let d of o)d+="",$.push(d);return{entries:y,flags:i,write:Z,stdinContents:T,stdinResolveDir:L,absWorkingDir:G,incremental:M,nodePaths:$,watch:E,mangleCache:tt(S)}}function xt(e,t,r,c){let p=[],w=Object.create(null);Ne(p,t,w,r,c),nt(p,t,w);let i=l(t,w,"sourcemap",et),y=l(t,w,"tsconfigRaw",pt),a=l(t,w,"sourcefile",_),T=l(t,w,"loader",_),L=l(t,w,"banner",_),E=l(t,w,"footer",_),m=l(t,w,"mangleCache",pe);return se(t,w,`in ${e}() call`),i&&p.push(`--sourcemap=${i===!0?"external":i}`),y&&p.push(`--tsconfig-raw=${typeof y=="string"?y:JSON.stringify(y)}`),a&&p.push(`--sourcefile=${a}`),T&&p.push(`--loader=${T}`),L&&p.push(`--banner=${L}`),E&&p.push(`--footer=${E}`),{flags:p,mangleCache:tt(m)}}function _t(e){let t=new Map,r=new Map,c=new Map,p=new Map,w=null,i=0,y=0,a=new Uint8Array(16*1024),T=0,L=s=>{let u=T+s.length;if(u>a.length){let b=new Uint8Array(u*2);b.set(a),a=b}a.set(s,T),T+=s.length;let f=0;for(;f+4<=T;){let b=Xe(a,f);if(f+4+b>T)break;f+=4,g(a.subarray(f,f+b)),f+=b}f>0&&(a.copyWithin(0,f,T),T-=f)},E=s=>{w={reason:s?": "+(s.message||s):""};const u="The service was stopped"+w.reason;for(let f of t.values())f(u,null);t.clear();for(let f of p.values())f.onWait(u);p.clear();for(let f of c.values())try{f(new Error(u),null)}catch(b){console.error(b)}c.clear()},m=(s,u,f)=>{if(w)return f("The service is no longer running"+w.reason,null);let b=i++;t.set(b,(H,z)=>{try{f(H,z)}finally{s&&s.unref()}}),s&&s.ref(),e.writeToStdin(Ke({id:b,isRequest:!0,value:u}))},I=(s,u)=>{if(w)throw new Error("The service is no longer running"+w.reason);e.writeToStdin(Ke({id:s,isRequest:!1,value:u}))},X=(s,u)=>xe(this,null,function*(){try{switch(u.command){case"ping":{I(s,{});break}case"on-start":{let f=r.get(u.key);f?I(s,yield f(u)):I(s,{});break}case"on-resolve":{let f=r.get(u.key);f?I(s,yield f(u)):I(s,{});break}case"on-load":{let f=r.get(u.key);f?I(s,yield f(u)):I(s,{});break}case"serve-request":{let f=p.get(u.key);f&&f.onRequest&&f.onRequest(u.args),I(s,{});break}case"serve-wait":{let f=p.get(u.key);f&&f.onWait(u.error),I(s,{});break}case"watch-rebuild":{let f=c.get(u.key);try{f&&f(null,u.args)}catch(b){console.error(b)}I(s,{});break}default:throw new Error("Invalid command: "+u.command)}}catch(f){I(s,{errors:[Ee(f,e,null,void 0,"")]})}}),D=!0,g=s=>{if(D){D=!1;let f=String.fromCharCode(...s);if(f!=="0.14.41")throw new Error(`Cannot start service: Host version "0.14.41" does not match binary version ${JSON.stringify(f)}`);return}let u=dt(s);if(u.isRequest)X(u.id,u.value);else{let f=t.get(u.id);t.delete(u.id),u.value.error?f(u.value.error,{}):f(null,u.value)}},h=(s,u,f,b,H)=>xe(this,null,function*(){let z=[],V=[],N={},J={},B=0,j=0,W=[],G=!1;u=[...u];for(let M of u){let S={};if(typeof M!="object")throw new Error(`Plugin at index ${j} must be an object`);const $=l(M,S,"name",_);if(typeof $!="string"||$==="")throw new Error(`Plugin at index ${j} is missing a name`);try{let d=l(M,S,"setup",We);if(typeof d!="function")throw new Error("Plugin is missing a setup function");se(M,S,`on plugin ${JSON.stringify($)}`);let O={name:$,onResolve:[],onLoad:[]};j++;let k=d({initialOptions:s,resolve:(x,Y={})=>{if(!G)throw new Error('Cannot call "resolve" before plugin setup has completed');if(typeof x!="string")throw new Error("The path to resolve must be a string");let F=Object.create(null),ae=l(Y,F,"pluginName",_),ee=l(Y,F,"importer",_),le=l(Y,F,"namespace",_),ue=l(Y,F,"resolveDir",_),oe=l(Y,F,"kind",_),K=l(Y,F,"pluginData",Ae);return se(Y,F,"in resolve() call"),new Promise((ie,ce)=>{const ne={command:"resolve",path:x,key:f,pluginName:$};ae!=null&&(ne.pluginName=ae),ee!=null&&(ne.importer=ee),le!=null&&(ne.namespace=le),ue!=null&&(ne.resolveDir=ue),oe!=null&&(ne.kind=oe),K!=null&&(ne.pluginData=b.store(K)),m(H,ne,(ge,fe)=>{ge!==null?ce(new Error(ge)):ie({errors:we(fe.errors,b),warnings:we(fe.warnings,b),path:fe.path,external:fe.external,sideEffects:fe.sideEffects,namespace:fe.namespace,suffix:fe.suffix,pluginData:b.load(fe.pluginData)})})})},onStart(x){let Y='This error came from the "onStart" callback registered here:',F=Me(new Error(Y),e,"onStart");z.push({name:$,callback:x,note:F})},onEnd(x){let Y='This error came from the "onEnd" callback registered here:',F=Me(new Error(Y),e,"onEnd");V.push({name:$,callback:x,note:F})},onResolve(x,Y){let F='This error came from the "onResolve" callback registered here:',ae=Me(new Error(F),e,"onResolve"),ee={},le=l(x,ee,"filter",Ie),ue=l(x,ee,"namespace",_);if(se(x,ee,`in onResolve() call for plugin ${JSON.stringify($)}`),le==null)throw new Error("onResolve() call is missing a filter");let oe=B++;N[oe]={name:$,callback:Y,note:ae},O.onResolve.push({id:oe,filter:le.source,namespace:ue||""})},onLoad(x,Y){let F='This error came from the "onLoad" callback registered here:',ae=Me(new Error(F),e,"onLoad"),ee={},le=l(x,ee,"filter",Ie),ue=l(x,ee,"namespace",_);if(se(x,ee,`in onLoad() call for plugin ${JSON.stringify($)}`),le==null)throw new Error("onLoad() call is missing a filter");let oe=B++;J[oe]={name:$,callback:Y,note:ae},O.onLoad.push({id:oe,filter:le.source,namespace:ue||""})},esbuild:e.esbuild});k&&(yield k),W.push(O)}catch(d){return{ok:!1,error:d,pluginName:$}}}const A=M=>xe(this,null,function*(){switch(M.command){case"on-start":{let S={errors:[],warnings:[]};return yield Promise.all(z.map($=>xe(this,[$],function*({name:d,callback:O,note:te}){try{let k=yield O();if(k!=null){if(typeof k!="object")throw new Error(`Expected onStart() callback in plugin ${JSON.stringify(d)} to return an object`);let x={},Y=l(k,x,"errors",re),F=l(k,x,"warnings",re);se(k,x,`from onStart() callback in plugin ${JSON.stringify(d)}`),Y!=null&&S.errors.push(...ve(Y,"errors",b,d)),F!=null&&S.warnings.push(...ve(F,"warnings",b,d))}}catch(k){S.errors.push(Ee(k,e,b,te&&te(),d))}}))),S}case"on-resolve":{let S={},$="",d,O;for(let te of M.ids)try{({name:$,callback:d,note:O}=N[te]);let k=yield d({path:M.path,importer:M.importer,namespace:M.namespace,resolveDir:M.resolveDir,kind:M.kind,pluginData:b.load(M.pluginData)});if(k!=null){if(typeof k!="object")throw new Error(`Expected onResolve() callback in plugin ${JSON.stringify($)} to return an object`);let x={},Y=l(k,x,"pluginName",_),F=l(k,x,"path",_),ae=l(k,x,"namespace",_),ee=l(k,x,"suffix",_),le=l(k,x,"external",Q),ue=l(k,x,"sideEffects",Q),oe=l(k,x,"pluginData",Ae),K=l(k,x,"errors",re),ie=l(k,x,"warnings",re),ce=l(k,x,"watchFiles",re),ne=l(k,x,"watchDirs",re);se(k,x,`from onResolve() callback in plugin ${JSON.stringify($)}`),S.id=te,Y!=null&&(S.pluginName=Y),F!=null&&(S.path=F),ae!=null&&(S.namespace=ae),ee!=null&&(S.suffix=ee),le!=null&&(S.external=le),ue!=null&&(S.sideEffects=ue),oe!=null&&(S.pluginData=b.store(oe)),K!=null&&(S.errors=ve(K,"errors",b,$)),ie!=null&&(S.warnings=ve(ie,"warnings",b,$)),ce!=null&&(S.watchFiles=Fe(ce,"watchFiles")),ne!=null&&(S.watchDirs=Fe(ne,"watchDirs"));break}}catch(k){return{id:te,errors:[Ee(k,e,b,O&&O(),$)]}}return S}case"on-load":{let S={},$="",d,O;for(let te of M.ids)try{({name:$,callback:d,note:O}=J[te]);let k=yield d({path:M.path,namespace:M.namespace,suffix:M.suffix,pluginData:b.load(M.pluginData)});if(k!=null){if(typeof k!="object")throw new Error(`Expected onLoad() callback in plugin ${JSON.stringify($)} to return an object`);let x={},Y=l(k,x,"pluginName",_),F=l(k,x,"contents",yt),ae=l(k,x,"resolveDir",_),ee=l(k,x,"pluginData",Ae),le=l(k,x,"loader",_),ue=l(k,x,"errors",re),oe=l(k,x,"warnings",re),K=l(k,x,"watchFiles",re),ie=l(k,x,"watchDirs",re);se(k,x,`from onLoad() callback in plugin ${JSON.stringify($)}`),S.id=te,Y!=null&&(S.pluginName=Y),F instanceof Uint8Array?S.contents=F:F!=null&&(S.contents=be(F)),ae!=null&&(S.resolveDir=ae),ee!=null&&(S.pluginData=b.store(ee)),le!=null&&(S.loader=le),ue!=null&&(S.errors=ve(ue,"errors",b,$)),oe!=null&&(S.warnings=ve(oe,"warnings",b,$)),K!=null&&(S.watchFiles=Fe(K,"watchFiles")),ie!=null&&(S.watchDirs=Fe(ie,"watchDirs"));break}}catch(k){return{id:te,errors:[Ee(k,e,b,O&&O(),$)]}}return S}default:throw new Error("Invalid command: "+M.command)}});let Z=(M,S,$)=>$();V.length>0&&(Z=(M,S,$)=>{(()=>xe(this,null,function*(){for(const{name:d,callback:O,note:te}of V)try{yield O(M)}catch(k){M.errors.push(yield new Promise(x=>S(k,d,te&&te(),x)))}}))().then($)}),G=!0;let de=0;return{ok:!0,requestPlugins:W,runOnEndCallbacks:Z,pluginRefs:{ref(){++de===1&&r.set(f,A)},unref(){--de===0&&r.delete(f)}}}}),v=(s,u,f,b)=>{let H={},z=l(u,H,"port",ke),V=l(u,H,"host",_),N=l(u,H,"servedir",_),J=l(u,H,"onRequest",We),B,j=new Promise((W,G)=>{B=A=>{p.delete(b),A!==null?G(new Error(A)):W()}});return f.serve={},se(u,H,"in serve() call"),z!==void 0&&(f.serve.port=z),V!==void 0&&(f.serve.host=V),N!==void 0&&(f.serve.servedir=N),p.set(b,{onRequest:J,onWait:B}),{wait:j,stop(){m(s,{command:"serve-stop",key:b},()=>{})}}};const P="warning",C="silent";let U=s=>{let u=y++;const f=rt();let b,{refs:H,options:z,isTTY:V,callback:N}=s;if(typeof z=="object"){let j=z.plugins;if(j!==void 0){if(!Array.isArray(j))throw new Error('"plugins" must be an array');b=j}}let J=(j,W,G,A)=>{let Z=[];try{Ne(Z,z,{},V,P)}catch{}const de=Ee(j,e,f,G,W);m(H,{command:"error",flags:Z,error:de},()=>{de.detail=f.load(de.detail),A(de)})},B=(j,W)=>{J(j,W,void 0,G=>{N(Se("Build failed",[G],[]),null)})};if(b&&b.length>0){if(e.isSync)return B(new Error("Cannot use plugins in synchronous API calls"),"");h(z,b,u,f,H).then(j=>{if(!j.ok)B(j.error,j.pluginName);else try{q(He(Ye({},s),{key:u,details:f,logPluginError:J,requestPlugins:j.requestPlugins,runOnEndCallbacks:j.runOnEndCallbacks,pluginRefs:j.pluginRefs}))}catch(W){B(W,"")}},j=>B(j,""))}else try{q(He(Ye({},s),{key:u,details:f,logPluginError:J,requestPlugins:null,runOnEndCallbacks:(j,W,G)=>G(),pluginRefs:null}))}catch(j){B(j,"")}},q=({callName:s,refs:u,serveOptions:f,options:b,isTTY:H,defaultWD:z,callback:V,key:N,details:J,logPluginError:B,requestPlugins:j,runOnEndCallbacks:W,pluginRefs:G})=>{const A={ref(){G&&G.ref(),u&&u.ref()},unref(){G&&G.unref(),u&&u.unref()}};let Z=!e.isBrowser,{entries:de,flags:M,write:S,stdinContents:$,stdinResolveDir:d,absWorkingDir:O,incremental:te,nodePaths:k,watch:x,mangleCache:Y}=vt(s,b,H,P,Z),F={command:"build",key:N,entries:de,flags:M,write:S,stdinContents:$,stdinResolveDir:d,absWorkingDir:O||z,incremental:te,nodePaths:k};j&&(F.plugins=j),Y&&(F.mangleCache=Y);let ae=f&&v(A,f,F,N),ee,le,ue=(K,ie)=>{K.outputFiles&&(ie.outputFiles=K.outputFiles.map(kt)),K.metafile&&(ie.metafile=JSON.parse(K.metafile)),K.mangleCache&&(ie.mangleCache=K.mangleCache),K.writeToStdout!==void 0&&console.log(_e(K.writeToStdout).replace(/\n$/,""))},oe=(K,ie)=>{let ce={errors:we(K.errors,J),warnings:we(K.warnings,J)};ue(K,ce),W(ce,B,()=>{if(ce.errors.length>0)return ie(Se("Build failed",ce.errors,ce.warnings),null);if(K.rebuild){if(!ee){let ne=!1;ee=()=>new Promise((ge,fe)=>{if(ne||w)throw new Error("Cannot rebuild");m(A,{command:"rebuild",key:N},(he,Nt)=>{if(he)return ie(Se("Build failed",[{pluginName:"",text:he,location:null,notes:[],detail:void 0}],[]),null);oe(Nt,(Je,Mt)=>{Je?fe(Je):ge(Mt)})})}),A.ref(),ee.dispose=()=>{ne||(ne=!0,m(A,{command:"rebuild-dispose",key:N},()=>{}),A.unref())}}ce.rebuild=ee}if(K.watch){if(!le){let ne=!1;A.ref(),le=()=>{ne||(ne=!0,c.delete(N),m(A,{command:"watch-stop",key:N},()=>{}),A.unref())},x&&c.set(N,(ge,fe)=>{if(ge){x.onRebuild&&x.onRebuild(ge,null);return}let he={errors:we(fe.errors,J),warnings:we(fe.warnings,J)};ue(fe,he),W(he,B,()=>{if(he.errors.length>0){x.onRebuild&&x.onRebuild(Se("Build failed",he.errors,he.warnings),null);return}fe.rebuildID!==void 0&&(he.rebuild=ee),he.stop=le,x.onRebuild&&x.onRebuild(null,he)})})}ce.stop=le}ie(null,ce)})};if(S&&e.isBrowser)throw new Error('Cannot enable "write" in the browser');if(te&&e.isSync)throw new Error('Cannot use "incremental" with a synchronous build');if(x&&e.isSync)throw new Error('Cannot use "watch" with a synchronous build');m(A,F,(K,ie)=>{if(K)return V(new Error(K),null);if(ae){let ce=ie,ne=!1;A.ref();let ge={port:ce.port,host:ce.host,wait:ae.wait,stop(){ne||(ne=!0,ae.stop(),A.unref())}};return A.ref(),ae.wait.then(A.unref,A.unref),V(null,ge)}return oe(ie,V)})};return{readFromStdout:L,afterClose:E,service:{buildOrServe:U,transform:({callName:s,refs:u,input:f,options:b,isTTY:H,fs:z,callback:V})=>{const N=rt();let J=B=>{try{if(typeof f!="string")throw new Error('The input to "transform" must be a string');let{flags:j,mangleCache:W}=xt(s,b,H,C),G={command:"transform",flags:j,inputFS:B!==null,input:B!==null?B:f};W&&(G.mangleCache=W),m(u,G,(A,Z)=>{if(A)return V(new Error(A),null);let de=we(Z.errors,N),M=we(Z.warnings,N),S=1,$=()=>{if(--S===0){let d={warnings:M,code:Z.code,map:Z.map};Z.mangleCache&&(d.mangleCache=Z==null?void 0:Z.mangleCache),V(null,d)}};if(de.length>0)return V(Se("Transform failed",de,M),null);Z.codeFS&&(S++,z.readFile(Z.code,(d,O)=>{d!==null?V(d,null):(Z.code=O,$())})),Z.mapFS&&(S++,z.readFile(Z.map,(d,O)=>{d!==null?V(d,null):(Z.map=O,$())})),$()})}catch(j){let W=[];try{Ne(W,b,{},H,C)}catch{}const G=Ee(j,e,N,void 0,"");m(u,{command:"error",flags:W,error:G},()=>{G.detail=N.load(G.detail),V(Se("Transform failed",[G],[]),null)})}};if(typeof f=="string"&&f.length>1024*1024){let B=J;J=()=>z.writeFile(f,B)}J(null)},formatMessages:({callName:s,refs:u,messages:f,options:b,callback:H})=>{let z=ve(f,"messages",null,"");if(!b)throw new Error(`Missing second argument in ${s}() call`);let V={},N=l(b,V,"kind",_),J=l(b,V,"color",Q),B=l(b,V,"terminalWidth",ke);if(se(b,V,`in ${s}() call`),N===void 0)throw new Error(`Missing "kind" in ${s}() call`);if(N!=="error"&&N!=="warning")throw new Error(`Expected "kind" to be "error" or "warning" in ${s}() call`);let j={command:"format-msgs",messages:z,isWarning:N==="warning"};J!==void 0&&(j.color=J),B!==void 0&&(j.terminalWidth=B),m(u,j,(W,G)=>{if(W)return H(new Error(W),null);H(null,G.messages)})},analyzeMetafile:({callName:s,refs:u,metafile:f,options:b,callback:H})=>{b===void 0&&(b={});let z={},V=l(b,z,"color",Q),N=l(b,z,"verbose",Q);se(b,z,`in ${s}() call`);let J={command:"analyze-metafile",metafile:f};V!==void 0&&(J.color=V),N!==void 0&&(J.verbose=N),m(u,J,(B,j)=>{if(B)return H(new Error(B),null);H(null,j.result)})}}}}function rt(){const e=new Map;let t=0;return{load(r){return e.get(r)},store(r){if(r===void 0)return-1;const c=t++;return e.set(c,r),c}}}function Me(e,t,r){let c,p=!1;return()=>{if(p)return c;p=!0;try{let w=(e.stack+"").split(`
`);w.splice(1,1);let i=lt(t,w,r);if(i)return c={text:e.message,location:i},c}catch{}}}function Ee(e,t,r,c,p){let w="Internal error",i=null;try{w=(e&&e.message||e)+""}catch{}try{i=lt(t,(e.stack+"").split(`
`),"")}catch{}return{pluginName:p,text:w,location:i,notes:c?[c]:[],detail:r?r.store(e):-1}}function lt(e,t,r){let c="    at ";if(e.readFileSync&&!t[0].startsWith(c)&&t[1].startsWith(c))for(let p=1;p<t.length;p++){let w=t[p];if(!!w.startsWith(c))for(w=w.slice(c.length);;){let i=/^(?:new |async )?\S+ \((.*)\)$/.exec(w);if(i){w=i[1];continue}if(i=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(w),i){w=i[1];continue}if(i=/^(\S+):(\d+):(\d+)$/.exec(w),i){let y;try{y=e.readFileSync(i[1],"utf8")}catch{break}let a=y.split(/\r\n|\r|\n|\u2028|\u2029/)[+i[2]-1]||"",T=+i[3]-1,L=a.slice(T,T+r.length)===r?r.length:0;return{file:i[1],namespace:"file",line:+i[2],column:be(a.slice(0,T)).length,length:be(a.slice(T,T+L)).length,lineText:a+`
`+t.slice(1).join(`
`),suggestion:""}}break}}return null}function Se(e,t,r){let c=5,p=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,c+1).map((i,y)=>{if(y===c)return`
...`;if(!i.location)return`
error: ${i.text}`;let{file:a,line:T,column:L}=i.location,E=i.pluginName?`[plugin: ${i.pluginName}] `:"";return`
${a}:${T}:${L}: ERROR: ${E}${i.text}`}).join(""),w=new Error(`${e}${p}`);return w.errors=t,w.warnings=r,w}function we(e,t){for(const r of e)r.detail=t.load(r.detail);return e}function st(e,t){if(e==null)return null;let r={},c=l(e,r,"file",_),p=l(e,r,"namespace",_),w=l(e,r,"line",ke),i=l(e,r,"column",ke),y=l(e,r,"length",ke),a=l(e,r,"lineText",_),T=l(e,r,"suggestion",_);return se(e,r,t),{file:c||"",namespace:p||"",line:w||0,column:i||0,length:y||0,lineText:a||"",suggestion:T||""}}function ve(e,t,r,c){let p=[],w=0;for(const i of e){let y={},a=l(i,y,"pluginName",_),T=l(i,y,"text",_),L=l(i,y,"location",Ze),E=l(i,y,"notes",re),m=l(i,y,"detail",Ae),I=`in element ${w} of "${t}"`;se(i,y,I);let X=[];if(E)for(const D of E){let g={},h=l(D,g,"text",_),v=l(D,g,"location",Ze);se(D,g,I),X.push({text:h||"",location:st(v,I)})}p.push({pluginName:a||c,text:T||"",location:st(L,I),notes:X,detail:r?r.store(m):-1}),w++}return p}function Fe(e,t){const r=[];for(const c of e){if(typeof c!="string")throw new Error(`${JSON.stringify(t)} must be an array of strings`);r.push(c)}return r}function kt({path:e,contents:t}){let r=null;return{path:e,contents:t,get text(){return r===null&&(r=_e(t)),r}}}var Et="0.14.41",St=e=>Ve().build(e),Ot=()=>{throw new Error('The "serve" API only works in node')},Tt=(e,t)=>Ve().transform(e,t),jt=(e,t)=>Ve().formatMessages(e,t),Pt=(e,t)=>Ve().analyzeMetafile(e,t),$t=()=>{throw new Error('The "buildSync" API only works in node')},Rt=()=>{throw new Error('The "transformSync" API only works in node')},Dt=()=>{throw new Error('The "formatMessagesSync" API only works in node')},Ct=()=>{throw new Error('The "analyzeMetafileSync" API only works in node')},Oe,ze,Ve=()=>{if(ze)return ze;throw Oe?new Error('You need to wait for the promise returned from "initialize" to be resolved before calling this'):new Error('You need to call "initialize" before calling this')},Ut=e=>{e=bt(e||{});let t=e.wasmURL,r=e.wasmModule,c=e.worker!==!1;if(!t&&!r)throw new Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(Oe)throw new Error('Cannot call "initialize" more than once');return Oe=At(t||"",r,c),Oe.catch(()=>{Oe=void 0}),Oe},At=(e,t,r)=>xe(void 0,null,function*(){let c;if(t)c=t;else{let y=yield fetch(e);if(!y.ok)throw new Error(`Failed to download ${JSON.stringify(e)}`);c=yield y.arrayBuffer()}let p;if(r){let y=new Blob([`onmessage=((postMessage) => {
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
        go.argv = ["", \`--service=\${"0.14.41"}\`];
        if (wasm instanceof WebAssembly.Module) {
          WebAssembly.instantiate(wasm, go.importObject).then((instance) => go.run(instance));
        } else {
          WebAssembly.instantiate(wasm, go.importObject).then(({ instance }) => go.run(instance));
        }
      };
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});p=new Worker(URL.createObjectURL(y))}else{let y=(a=>{var T=(m,I,X)=>new Promise((D,g)=>{var h=C=>{try{P(X.next(C))}catch(U){g(U)}},v=C=>{try{P(X.throw(C))}catch(U){g(U)}},P=C=>C.done?D(C.value):Promise.resolve(C.value).then(h,v);P((X=X.apply(m,I)).next())});let L,E={};for(let m=self;m;m=Object.getPrototypeOf(m))for(let I of Object.getOwnPropertyNames(m))I in E||Object.defineProperty(E,I,{get:()=>self[I]});return(()=>{const m=()=>{const D=new Error("not implemented");return D.code="ENOSYS",D};if(!E.fs){let D="";E.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(g,h){D+=X.decode(h);const v=D.lastIndexOf(`
`);return v!=-1&&(console.log(D.substr(0,v)),D=D.substr(v+1)),h.length},write(g,h,v,P,C,U){if(v!==0||P!==h.length||C!==null){U(m());return}const q=this.writeSync(g,h);U(null,q)},chmod(g,h,v){v(m())},chown(g,h,v,P){P(m())},close(g,h){h(m())},fchmod(g,h,v){v(m())},fchown(g,h,v,P){P(m())},fstat(g,h){h(m())},fsync(g,h){h(null)},ftruncate(g,h,v){v(m())},lchown(g,h,v,P){P(m())},link(g,h,v){v(m())},lstat(g,h){h(m())},mkdir(g,h,v){v(m())},open(g,h,v,P){P(m())},read(g,h,v,P,C,U){U(m())},readdir(g,h){h(m())},readlink(g,h){h(m())},rename(g,h,v){v(m())},rmdir(g,h){h(m())},stat(g,h){h(m())},symlink(g,h,v){v(m())},truncate(g,h,v){v(m())},unlink(g,h){h(m())},utimes(g,h,v,P){P(m())}}}if(E.process||(E.process={getuid(){return-1},getgid(){return-1},geteuid(){return-1},getegid(){return-1},getgroups(){throw m()},pid:-1,ppid:-1,umask(){throw m()},cwd(){throw m()},chdir(){throw m()}}),!E.crypto)throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!E.performance)throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!E.TextEncoder)throw new Error("globalThis.TextEncoder is not available, polyfill required");if(!E.TextDecoder)throw new Error("globalThis.TextDecoder is not available, polyfill required");const I=new TextEncoder("utf-8"),X=new TextDecoder("utf-8");E.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=n=>{n!==0&&console.warn("exit code:",n)},this._exitPromise=new Promise(n=>{this._resolveExitPromise=n}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const D=(n,o)=>{this.mem.setUint32(n+0,o,!0),this.mem.setUint32(n+4,Math.floor(o/4294967296),!0)},g=n=>{const o=this.mem.getUint32(n+0,!0),R=this.mem.getInt32(n+4,!0);return o+R*4294967296},h=n=>{const o=this.mem.getFloat64(n,!0);if(o===0)return;if(!isNaN(o))return o;const R=this.mem.getUint32(n,!0);return this._values[R]},v=(n,o)=>{if(typeof o=="number"&&o!==0){if(isNaN(o)){this.mem.setUint32(n+4,2146959360,!0),this.mem.setUint32(n,0,!0);return}this.mem.setFloat64(n,o,!0);return}if(o===void 0){this.mem.setFloat64(n,0,!0);return}let s=this._ids.get(o);s===void 0&&(s=this._idPool.pop(),s===void 0&&(s=this._values.length),this._values[s]=o,this._goRefCounts[s]=0,this._ids.set(o,s)),this._goRefCounts[s]++;let u=0;switch(typeof o){case"object":o!==null&&(u=1);break;case"string":u=2;break;case"symbol":u=3;break;case"function":u=4;break}this.mem.setUint32(n+4,2146959360|u,!0),this.mem.setUint32(n,s,!0)},P=n=>{const o=g(n+0),R=g(n+8);return new Uint8Array(this._inst.exports.mem.buffer,o,R)},C=n=>{const o=g(n+0),R=g(n+8),s=new Array(R);for(let u=0;u<R;u++)s[u]=h(o+u*8);return s},U=n=>{const o=g(n+0),R=g(n+8);return X.decode(new DataView(this._inst.exports.mem.buffer,o,R))},q=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":n=>{n>>>=0;const o=this.mem.getInt32(n+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(o)},"runtime.wasmWrite":n=>{n>>>=0;const o=g(n+8),R=g(n+16),s=this.mem.getInt32(n+24,!0);E.fs.writeSync(o,new Uint8Array(this._inst.exports.mem.buffer,R,s))},"runtime.resetMemoryDataView":n=>{n>>>=0,this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":n=>{n>>>=0,D(n+8,(q+performance.now())*1e6)},"runtime.walltime":n=>{n>>>=0;const o=new Date().getTime();D(n+8,o/1e3),this.mem.setInt32(n+16,o%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":n=>{n>>>=0;const o=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(o,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(o);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},g(n+8)+1)),this.mem.setInt32(n+16,o,!0)},"runtime.clearTimeoutEvent":n=>{n>>>=0;const o=this.mem.getInt32(n+8,!0);clearTimeout(this._scheduledTimeouts.get(o)),this._scheduledTimeouts.delete(o)},"runtime.getRandomData":n=>{n>>>=0,crypto.getRandomValues(P(n+8))},"syscall/js.finalizeRef":n=>{n>>>=0;const o=this.mem.getUint32(n+8,!0);if(this._goRefCounts[o]--,this._goRefCounts[o]===0){const R=this._values[o];this._values[o]=null,this._ids.delete(R),this._idPool.push(o)}},"syscall/js.stringVal":n=>{n>>>=0,v(n+24,U(n+8))},"syscall/js.valueGet":n=>{n>>>=0;const o=Reflect.get(h(n+8),U(n+16));n=this._inst.exports.getsp()>>>0,v(n+32,o)},"syscall/js.valueSet":n=>{n>>>=0,Reflect.set(h(n+8),U(n+16),h(n+32))},"syscall/js.valueDelete":n=>{n>>>=0,Reflect.deleteProperty(h(n+8),U(n+16))},"syscall/js.valueIndex":n=>{n>>>=0,v(n+24,Reflect.get(h(n+8),g(n+16)))},"syscall/js.valueSetIndex":n=>{n>>>=0,Reflect.set(h(n+8),g(n+16),h(n+24))},"syscall/js.valueCall":n=>{n>>>=0;try{const o=h(n+8),R=Reflect.get(o,U(n+16)),s=C(n+32),u=Reflect.apply(R,o,s);n=this._inst.exports.getsp()>>>0,v(n+56,u),this.mem.setUint8(n+64,1)}catch(o){n=this._inst.exports.getsp()>>>0,v(n+56,o),this.mem.setUint8(n+64,0)}},"syscall/js.valueInvoke":n=>{n>>>=0;try{const o=h(n+8),R=C(n+16),s=Reflect.apply(o,void 0,R);n=this._inst.exports.getsp()>>>0,v(n+40,s),this.mem.setUint8(n+48,1)}catch(o){n=this._inst.exports.getsp()>>>0,v(n+40,o),this.mem.setUint8(n+48,0)}},"syscall/js.valueNew":n=>{n>>>=0;try{const o=h(n+8),R=C(n+16),s=Reflect.construct(o,R);n=this._inst.exports.getsp()>>>0,v(n+40,s),this.mem.setUint8(n+48,1)}catch(o){n=this._inst.exports.getsp()>>>0,v(n+40,o),this.mem.setUint8(n+48,0)}},"syscall/js.valueLength":n=>{n>>>=0,D(n+16,parseInt(h(n+8).length))},"syscall/js.valuePrepareString":n=>{n>>>=0;const o=I.encode(String(h(n+8)));v(n+16,o),D(n+24,o.length)},"syscall/js.valueLoadString":n=>{n>>>=0;const o=h(n+8);P(n+16).set(o)},"syscall/js.valueInstanceOf":n=>{n>>>=0,this.mem.setUint8(n+24,h(n+8)instanceof h(n+16)?1:0)},"syscall/js.copyBytesToGo":n=>{n>>>=0;const o=P(n+8),R=h(n+32);if(!(R instanceof Uint8Array||R instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const s=R.subarray(0,o.length);o.set(s),D(n+40,s.length),this.mem.setUint8(n+48,1)},"syscall/js.copyBytesToJS":n=>{n>>>=0;const o=h(n+8),R=P(n+16);if(!(o instanceof Uint8Array||o instanceof Uint8ClampedArray)){this.mem.setUint8(n+48,0);return}const s=R.subarray(0,o.length);o.set(s),D(n+40,s.length),this.mem.setUint8(n+48,1)},debug:n=>{console.log(n)}}}}run(D){return T(this,null,function*(){if(!(D instanceof WebAssembly.Instance))throw new Error("Go.run: WebAssembly.Instance expected");this._inst=D,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,E,this],this._goRefCounts=new Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[E,5],[this,6]]),this._idPool=[],this.exited=!1;let g=4096;const h=n=>{const o=g,R=I.encode(n+"\0");return new Uint8Array(this.mem.buffer,g,R.length).set(R),g+=R.length,g%8!==0&&(g+=8-g%8),o},v=this.argv.length,P=[];this.argv.forEach(n=>{P.push(h(n))}),P.push(0),Object.keys(this.env).sort().forEach(n=>{P.push(h(`${n}=${this.env[n]}`))}),P.push(0);const U=g;P.forEach(n=>{this.mem.setUint32(g,n,!0),this.mem.setUint32(g+4,0,!0),g+=8});const q=4096+8192;if(g>=q)throw new Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(v,U),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw new Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(D){const g=this;return function(){const h={id:D,this:this,args:arguments};return g._pendingEvent=h,g._resume(),h.result}}}})(),L=({data:m})=>{let I=new TextDecoder,X=E.fs,D="";X.writeSync=(C,U)=>{if(C===1)a(U);else if(C===2){D+=I.decode(U);let q=D.split(`
`);q.length>1&&console.log(q.slice(0,-1).join(`
`)),D=q[q.length-1]}else throw new Error("Bad write");return U.length};let g=[],h,v=0;L=({data:C})=>{C.length>0&&(g.push(C),h&&h())},X.read=(C,U,q,n,o,R)=>{if(C!==0||q!==0||n!==U.length||o!==null)throw new Error("Bad read");if(g.length===0){h=()=>X.read(C,U,q,n,o,R);return}let s=g[0],u=Math.max(0,Math.min(n,s.length-v));U.set(s.subarray(v,v+u),q),v+=u,v===s.length&&(g.shift(),v=0),R(null,u)};let P=new E.Go;P.argv=["","--service=0.14.41"],m instanceof WebAssembly.Module?WebAssembly.instantiate(m,P.importObject).then(C=>P.run(C)):WebAssembly.instantiate(m,P.importObject).then(({instance:C})=>P.run(C))},m=>L(m)})(a=>p.onmessage({data:a}));p={onmessage:null,postMessage:a=>setTimeout(()=>y({data:a})),terminate(){}}}p.postMessage(c),p.onmessage=({data:y})=>w(y);let{readFromStdout:w,service:i}=_t({writeToStdin(y){p.postMessage(y)},isSync:!1,isBrowser:!0,esbuild:Ue});ze={build:y=>new Promise((a,T)=>i.buildOrServe({callName:"build",refs:null,serveOptions:null,options:y,isTTY:!1,defaultWD:"/",callback:(L,E)=>L?T(L):a(E)})),transform:(y,a)=>new Promise((T,L)=>i.transform({callName:"transform",refs:null,input:y,options:a||{},isTTY:!1,fs:{readFile(E,m){m(new Error("Internal error"),null)},writeFile(E,m){m(null)}},callback:(E,m)=>E?L(E):T(m)})),formatMessages:(y,a)=>new Promise((T,L)=>i.formatMessages({callName:"formatMessages",refs:null,messages:y,options:a,callback:(E,m)=>E?L(E):T(m)})),analyzeMetafile:(y,a)=>new Promise((T,L)=>i.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:typeof y=="string"?y:JSON.stringify(y),options:a,callback:(E,m)=>E?L(E):T(m)}))}}),It=Ue})(Te)})(Be);var it="/voby-dev/assets/esbuild.874da728.wasm";const at=Be.exports.initialize({wasmURL:it});self.addEventListener("message",async({data:Te})=>{var Pe;Te[0].value=`import * as React from "voby";
`+Te[0].value;try{await at;const $e=(Pe=(await Be.exports.build({entryPoints:["index.tsx"],bundle:!0,format:"esm",external:["voby"],plugins:[{name:"virtual-files",setup(Re){Re.onResolve({filter:/.*/},me=>{if(me.kind==="entry-point")return{path:`/${me.path}`};if(me.kind==="import-statement"&&me.path.startsWith("./"))return{path:`${me.path.slice(1)}.tsx`}}),Re.onLoad({filter:/.*/},me=>{var je;const De=(je=Te.find(Ce=>Ce.file===me.path.slice(1)))==null?void 0:je.value;if(De)return{contents:De,loader:"tsx"}})}}]})).outputFiles)==null?void 0:Pe[0].text;$e&&self.postMessage({code:$e})}catch(ye){console.log(ye)}})})();
