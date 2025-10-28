var CS=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var OR=CS((IR,hl)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ed={exports:{}},Ho={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function DS(){if(tv)return Ho;tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Ho.Fragment=e,Ho.jsx=i,Ho.jsxs=i,Ho}var nv;function NS(){return nv||(nv=1,Ed.exports=DS()),Ed.exports}var B=NS(),bd={exports:{}},pt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function US(){if(iv)return pt;iv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function E(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A=Object.assign,x={};function _(M,k,ee){this.props=M,this.context=k,this.refs=x,this.updater=ee||b}_.prototype.isReactComponent={},_.prototype.setState=function(M,k){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,k,"setState")},_.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function O(){}O.prototype=_.prototype;function P(M,k,ee){this.props=M,this.context=k,this.refs=x,this.updater=ee||b}var R=P.prototype=new O;R.constructor=P,A(R,_.prototype),R.isPureReactComponent=!0;var H=Array.isArray;function X(){}var z={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function U(M,k,ee){var oe=ee.ref;return{$$typeof:s,type:M,key:k,ref:oe!==void 0?oe:null,props:ee}}function L(M,k){return U(M.type,k,M.props)}function Y(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function re(M){var k={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ee){return k[ee]})}var ce=/\/+/g;function xe(M,k){return typeof M=="object"&&M!==null&&M.key!=null?re(""+M.key):k.toString(36)}function ue(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(X,X):(M.status="pending",M.then(function(k){M.status==="pending"&&(M.status="fulfilled",M.value=k)},function(k){M.status==="pending"&&(M.status="rejected",M.reason=k)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function F(M,k,ee,oe,se){var T=typeof M;(T==="undefined"||T==="boolean")&&(M=null);var I=!1;if(M===null)I=!0;else switch(T){case"bigint":case"string":case"number":I=!0;break;case"object":switch(M.$$typeof){case s:case e:I=!0;break;case g:return I=M._init,F(I(M._payload),k,ee,oe,se)}}if(I)return se=se(M),I=oe===""?"."+xe(M,0):oe,H(se)?(ee="",I!=null&&(ee=I.replace(ce,"$&/")+"/"),F(se,k,ee,"",function(Ee){return Ee})):se!=null&&(Y(se)&&(se=L(se,ee+(se.key==null||M&&M.key===se.key?"":(""+se.key).replace(ce,"$&/")+"/")+I)),k.push(se)),1;I=0;var te=oe===""?".":oe+":";if(H(M))for(var le=0;le<M.length;le++)oe=M[le],T=te+xe(oe,le),I+=F(oe,k,ee,T,se);else if(le=E(M),typeof le=="function")for(M=le.call(M),le=0;!(oe=M.next()).done;)oe=oe.value,T=te+xe(oe,le++),I+=F(oe,k,ee,T,se);else if(T==="object"){if(typeof M.then=="function")return F(ue(M),k,ee,oe,se);throw k=String(M),Error("Objects are not valid as a React child (found: "+(k==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":k)+"). If you meant to render a collection of children, use an array instead.")}return I}function Q(M,k,ee){if(M==null)return M;var oe=[],se=0;return F(M,oe,"","",function(T){return k.call(ee,T,se++)}),oe}function J(M){if(M._status===-1){var k=M._result;k=k(),k.then(function(ee){(M._status===0||M._status===-1)&&(M._status=1,M._result=ee)},function(ee){(M._status===0||M._status===-1)&&(M._status=2,M._result=ee)}),M._status===-1&&(M._status=0,M._result=k)}if(M._status===1)return M._result.default;throw M._result}var W=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var k=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(k))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},N={map:Q,forEach:function(M,k,ee){Q(M,function(){k.apply(this,arguments)},ee)},count:function(M){var k=0;return Q(M,function(){k++}),k},toArray:function(M){return Q(M,function(k){return k})||[]},only:function(M){if(!Y(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return pt.Activity=v,pt.Children=N,pt.Component=_,pt.Fragment=i,pt.Profiler=l,pt.PureComponent=P,pt.StrictMode=a,pt.Suspense=p,pt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,pt.__COMPILER_RUNTIME={__proto__:null,c:function(M){return z.H.useMemoCache(M)}},pt.cache=function(M){return function(){return M.apply(null,arguments)}},pt.cacheSignal=function(){return null},pt.cloneElement=function(M,k,ee){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var oe=A({},M.props),se=M.key;if(k!=null)for(T in k.key!==void 0&&(se=""+k.key),k)!K.call(k,T)||T==="key"||T==="__self"||T==="__source"||T==="ref"&&k.ref===void 0||(oe[T]=k[T]);var T=arguments.length-2;if(T===1)oe.children=ee;else if(1<T){for(var I=Array(T),te=0;te<T;te++)I[te]=arguments[te+2];oe.children=I}return U(M.type,se,oe)},pt.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},pt.createElement=function(M,k,ee){var oe,se={},T=null;if(k!=null)for(oe in k.key!==void 0&&(T=""+k.key),k)K.call(k,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(se[oe]=k[oe]);var I=arguments.length-2;if(I===1)se.children=ee;else if(1<I){for(var te=Array(I),le=0;le<I;le++)te[le]=arguments[le+2];se.children=te}if(M&&M.defaultProps)for(oe in I=M.defaultProps,I)se[oe]===void 0&&(se[oe]=I[oe]);return U(M,T,se)},pt.createRef=function(){return{current:null}},pt.forwardRef=function(M){return{$$typeof:d,render:M}},pt.isValidElement=Y,pt.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:J}},pt.memo=function(M,k){return{$$typeof:m,type:M,compare:k===void 0?null:k}},pt.startTransition=function(M){var k=z.T,ee={};z.T=ee;try{var oe=M(),se=z.S;se!==null&&se(ee,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(X,W)}catch(T){W(T)}finally{k!==null&&ee.types!==null&&(k.types=ee.types),z.T=k}},pt.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},pt.use=function(M){return z.H.use(M)},pt.useActionState=function(M,k,ee){return z.H.useActionState(M,k,ee)},pt.useCallback=function(M,k){return z.H.useCallback(M,k)},pt.useContext=function(M){return z.H.useContext(M)},pt.useDebugValue=function(){},pt.useDeferredValue=function(M,k){return z.H.useDeferredValue(M,k)},pt.useEffect=function(M,k){return z.H.useEffect(M,k)},pt.useEffectEvent=function(M){return z.H.useEffectEvent(M)},pt.useId=function(){return z.H.useId()},pt.useImperativeHandle=function(M,k,ee){return z.H.useImperativeHandle(M,k,ee)},pt.useInsertionEffect=function(M,k){return z.H.useInsertionEffect(M,k)},pt.useLayoutEffect=function(M,k){return z.H.useLayoutEffect(M,k)},pt.useMemo=function(M,k){return z.H.useMemo(M,k)},pt.useOptimistic=function(M,k){return z.H.useOptimistic(M,k)},pt.useReducer=function(M,k,ee){return z.H.useReducer(M,k,ee)},pt.useRef=function(M){return z.H.useRef(M)},pt.useState=function(M){return z.H.useState(M)},pt.useSyncExternalStore=function(M,k,ee){return z.H.useSyncExternalStore(M,k,ee)},pt.useTransition=function(){return z.H.useTransition()},pt.version="19.2.0",pt}var av;function ap(){return av||(av=1,bd.exports=US()),bd.exports}var q=ap(),Td={exports:{}},Go={},Ad={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function LS(){return rv||(rv=1,(function(s){function e(F,Q){var J=F.length;F.push(Q);e:for(;0<J;){var W=J-1>>>1,N=F[W];if(0<l(N,Q))F[W]=Q,F[J]=N,J=W;else break e}}function i(F){return F.length===0?null:F[0]}function a(F){if(F.length===0)return null;var Q=F[0],J=F.pop();if(J!==Q){F[0]=J;e:for(var W=0,N=F.length,M=N>>>1;W<M;){var k=2*(W+1)-1,ee=F[k],oe=k+1,se=F[oe];if(0>l(ee,J))oe<N&&0>l(se,ee)?(F[W]=se,F[oe]=J,W=oe):(F[W]=ee,F[k]=J,W=k);else if(oe<N&&0>l(se,J))F[W]=se,F[oe]=J,W=oe;else break e}}return Q}function l(F,Q){var J=F.sortIndex-Q.sortIndex;return J!==0?J:F.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,y=3,E=!1,b=!1,A=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function R(F){for(var Q=i(m);Q!==null;){if(Q.callback===null)a(m);else if(Q.startTime<=F)a(m),Q.sortIndex=Q.expirationTime,e(p,Q);else break;Q=i(m)}}function H(F){if(A=!1,R(F),!b)if(i(p)!==null)b=!0,X||(X=!0,re());else{var Q=i(m);Q!==null&&ue(H,Q.startTime-F)}}var X=!1,z=-1,K=5,U=-1;function L(){return x?!0:!(s.unstable_now()-U<K)}function Y(){if(x=!1,X){var F=s.unstable_now();U=F;var Q=!0;try{e:{b=!1,A&&(A=!1,O(z),z=-1),E=!0;var J=y;try{t:{for(R(F),v=i(p);v!==null&&!(v.expirationTime>F&&L());){var W=v.callback;if(typeof W=="function"){v.callback=null,y=v.priorityLevel;var N=W(v.expirationTime<=F);if(F=s.unstable_now(),typeof N=="function"){v.callback=N,R(F),Q=!0;break t}v===i(p)&&a(p),R(F)}else a(p);v=i(p)}if(v!==null)Q=!0;else{var M=i(m);M!==null&&ue(H,M.startTime-F),Q=!1}}break e}finally{v=null,y=J,E=!1}Q=void 0}}finally{Q?re():X=!1}}}var re;if(typeof P=="function")re=function(){P(Y)};else if(typeof MessageChannel<"u"){var ce=new MessageChannel,xe=ce.port2;ce.port1.onmessage=Y,re=function(){xe.postMessage(null)}}else re=function(){_(Y,0)};function ue(F,Q){z=_(function(){F(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(F){F.callback=null},s.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<F?Math.floor(1e3/F):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(F){switch(y){case 1:case 2:case 3:var Q=3;break;default:Q=y}var J=y;y=Q;try{return F()}finally{y=J}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(F,Q){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var J=y;y=F;try{return Q()}finally{y=J}},s.unstable_scheduleCallback=function(F,Q,J){var W=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?W+J:W):J=W,F){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=J+N,F={id:g++,callback:Q,priorityLevel:F,startTime:J,expirationTime:N,sortIndex:-1},J>W?(F.sortIndex=J,e(m,F),i(p)===null&&F===i(m)&&(A?(O(z),z=-1):A=!0,ue(H,J-W))):(F.sortIndex=N,e(p,F),b||E||(b=!0,X||(X=!0,re()))),F},s.unstable_shouldYield=L,s.unstable_wrapCallback=function(F){var Q=y;return function(){var J=y;y=Q;try{return F.apply(this,arguments)}finally{y=J}}}})(wd)),wd}var sv;function OS(){return sv||(sv=1,Ad.exports=LS()),Ad.exports}var Rd={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function PS(){if(ov)return Un;ov=1;var s=ap();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Un.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Un.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},Un.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Un.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Un.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:E}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Un.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Un.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Un.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Un.requestFormReset=function(p){a.d.r(p)},Un.unstable_batchedUpdates=function(p,m){return p(m)},Un.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.0",Un}var lv;function IS(){if(lv)return Rd.exports;lv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rd.exports=PS(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function BS(){if(cv)return Go;cv=1;var s=OS(),e=ap(),i=IS();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return p(u),t;if(h===o)return p(u),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=h;else{for(var S=!1,C=u.child;C;){if(C===r){S=!0,r=u,o=h;break}if(C===o){S=!0,o=u,r=h;break}C=C.sibling}if(!S){for(C=h.child;C;){if(C===r){S=!0,r=h,o=u;break}if(C===o){S=!0,o=h,r=u;break}C=C.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),P=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),Y=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=Y&&t[Y]||t["@@iterator"],typeof t=="function"?t:null)}var ce=Symbol.for("react.client.reference");function xe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ce?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case A:return"Fragment";case _:return"Profiler";case x:return"StrictMode";case H:return"Suspense";case X:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case P:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case R:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:xe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return xe(t(n))}catch{}}return null}var ue=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},W=[],N=-1;function M(t){return{current:t}}function k(t){0>N||(t.current=W[N],W[N]=null,N--)}function ee(t,n){N++,W[N]=t.current,t.current=n}var oe=M(null),se=M(null),T=M(null),I=M(null);function te(t,n){switch(ee(T,n),ee(se,t),ee(oe,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b0(n),t=T0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}k(oe),ee(oe,t)}function le(){k(oe),k(se),k(T)}function Ee(t){t.memoizedState!==null&&ee(I,t);var n=oe.current,r=T0(n,t.type);n!==r&&(ee(se,t),ee(oe,r))}function Ce(t){se.current===t&&(k(oe),k(se)),I.current===t&&(k(I),Io._currentValue=J)}var We,V;function Ie(t){if(We===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);We=n&&n[1]||"",V=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+We+t+V}var Be=!1;function Ye(t,n){if(!t||Be)return"";Be=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Te=function(){throw Error()};if(Object.defineProperty(Te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Te,[])}catch(_e){var pe=_e}Reflect.construct(t,[],Te)}else{try{Te.call()}catch(_e){pe=_e}t.call(Te.prototype)}}else{try{throw Error()}catch(_e){pe=_e}(Te=t())&&typeof Te.catch=="function"&&Te.catch(function(){})}}catch(_e){if(_e&&pe&&typeof _e.stack=="string")return[_e.stack,pe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],C=h[1];if(S&&C){var j=S.split(`
`),he=C.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<he.length&&!he[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===he.length)for(o=j.length-1,u=he.length-1;1<=o&&0<=u&&j[o]!==he[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==he[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==he[u]){var Se=`
`+j[o].replace(" at new "," at ");return t.displayName&&Se.includes("<anonymous>")&&(Se=Se.replace("<anonymous>",t.displayName)),Se}while(1<=o&&0<=u);break}}}finally{Be=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Ie(r):""}function ze(t,n){switch(t.tag){case 26:case 27:case 5:return Ie(t.type);case 16:return Ie("Lazy");case 13:return t.child!==n&&n!==null?Ie("Suspense Fallback"):Ie("Suspense");case 19:return Ie("SuspenseList");case 0:case 15:return Ye(t.type,!1);case 11:return Ye(t.type.render,!1);case 1:return Ye(t.type,!0);case 31:return Ie("Activity");default:return""}}function ht(t){try{var n="",r=null;do n+=ze(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Ve=Object.prototype.hasOwnProperty,at=s.unstable_scheduleCallback,Yt=s.unstable_cancelCallback,kt=s.unstable_shouldYield,G=s.unstable_requestPaint,w=s.unstable_now,fe=s.unstable_getCurrentPriorityLevel,Me=s.unstable_ImmediatePriority,Re=s.unstable_UserBlockingPriority,ye=s.unstable_NormalPriority,tt=s.unstable_LowPriority,Le=s.unstable_IdlePriority,Qe=s.log,nt=s.unstable_setDisableYieldValue,Ne=null,Oe=null;function rt(t){if(typeof Qe=="function"&&nt(t),Oe&&typeof Oe.setStrictMode=="function")try{Oe.setStrictMode(Ne,t)}catch{}}var Xe=Math.clz32?Math.clz32:$,Fe=Math.log,mt=Math.LN2;function $(t){return t>>>=0,t===0?32:31-(Fe(t)/mt|0)|0}var Ue=256,Pe=262144,qe=4194304;function De(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ae(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var C=o&134217727;return C!==0?(o=C&~h,o!==0?u=De(o):(S&=C,S!==0?u=De(S):r||(r=C&~t,r!==0&&(u=De(r))))):(C=o&~h,C!==0?u=De(C):S!==0?u=De(S):r||(r=o&~t,r!==0&&(u=De(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function Ze(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=qe;return qe<<=1,(qe&62914560)===0&&(qe=4194304),t}function Nt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function Pn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,r,o,u,h){var S=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var C=t.entanglements,j=t.expirationTimes,he=t.hiddenUpdates;for(r=S&~r;0<r;){var Se=31-Xe(r),Te=1<<Se;C[Se]=0,j[Se]=-1;var pe=he[Se];if(pe!==null)for(he[Se]=null,Se=0;Se<pe.length;Se++){var _e=pe[Se];_e!==null&&(_e.lane&=-536870913)}r&=~Te}o!==0&&Zs(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function Zs(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Xe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Di(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Xe(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function Br(t,n){var r=n&-n;return r=(r&42)!==0?1:zr(r),(r&(t.suspendedLanes|n))!==0?0:r}function zr(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ir(){var t=Q.p;return t!==0?t:(t=window.event,t===void 0?32:Y0(t.type))}function Ks(t,n){var r=Q.p;try{return Q.p=t,n()}finally{Q.p=r}}var Kn=Math.random().toString(36).slice(2),un="__reactFiber$"+Kn,bn="__reactProps$"+Kn,Sa="__reactContainer$"+Kn,Qs="__reactEvents$"+Kn,gu="__reactListeners$"+Kn,vu="__reactHandles$"+Kn,pl="__reactResources$"+Kn,ar="__reactMarker$"+Kn;function D(t){delete t[un],delete t[bn],delete t[Qs],delete t[gu],delete t[vu]}function ne(t){var n=t[un];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Sa]||r[un]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=U0(t);t!==null;){if(r=t[un])return r;t=U0(t)}return n}t=r,r=t.parentNode}return null}function me(t){if(t=t[un]||t[Sa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ve(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function ae(t){var n=t[pl];return n||(n=t[pl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[ar]=!0}var He=new Set,Je={};function ke(t,n){st(t,n),st(t+"Capture",n)}function st(t,n){for(Je[t]=n,t=0;t<n.length;t++)He.add(n[t])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ot={},yt={};function zt(t){return Ve.call(yt,t)?!0:Ve.call(ot,t)?!1:ut.test(t)?yt[t]=!0:(ot[t]=!0,!1)}function Zt(t,n,r){if(zt(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Ft(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function St(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function $e(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Qt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ut(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){r=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Tn(t){if(!t._valueTracker){var n=Qt(t)?"checked":"value";t._valueTracker=Ut(t,n,""+t[n])}}function Wi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Qt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function Sn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rr=/[\n"\\]/g;function Tt(t){return t.replace(rr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Nn(t,n,r,o,u,h,S,C){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$e(n)):t.value!==""+$e(n)&&(t.value=""+$e(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?gn(t,S,$e(n)):r!=null?gn(t,S,$e(r)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?t.name=""+$e(C):t.removeAttribute("name")}function In(t,n,r,o,u,h,S,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Tn(t);return}r=r!=null?""+$e(r):"",n=n!=null?""+$e(n):r,C||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=C?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),Tn(t)}function gn(t,n,r){n==="number"&&Sn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function on(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+$e(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Hr(t,n,r){if(n!=null&&(n=""+$e(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+$e(r):""}function Ni(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(ue(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=$e(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),Tn(t)}function Gr(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||bx.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Mp(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Sp(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Sp(t,h,n[h])}function _u(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return Ax.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var xu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function Ep(t){var n=me(t);if(n&&(t=n.stateNode)){var r=t[bn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Nn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+Tt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[bn]||null;if(!u)throw Error(a(90));Nn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Wi(o)}break e;case"textarea":Hr(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&on(t,!!r.multiple,n,!1)}}}var Su=!1;function bp(t,n,r){if(Su)return t(n,r);Su=!0;try{var o=t(n);return o}finally{if(Su=!1,(Vr!==null||kr!==null)&&(nc(),Vr&&(n=Vr,t=kr,kr=Vr=null,Ep(n),t)))for(n=0;n<t.length;n++)Ep(t[n])}}function Js(t,n){var r=t.stateNode;if(r===null)return null;var o=r[bn]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(ji)try{var $s={};Object.defineProperty($s,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",$s,$s),window.removeEventListener("test",$s,$s)}catch{Mu=!1}var Ma=null,Eu=null,gl=null;function Tp(){if(gl)return gl;var t,n=Eu,r=n.length,o,u="value"in Ma?Ma.value:Ma.textContent,h=u.length;for(t=0;t<r&&n[t]===u[t];t++);var S=r-t;for(o=1;o<=S&&n[r-o]===u[h-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Ap(){return!1}function Fn(t){function n(r,o,u,h,S){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var C in t)t.hasOwnProperty(C)&&(r=t[C],this[C]=r?r(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_l:Ap,this.isPropagationStopped=Ap,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Fn(sr),eo=v({},sr,{view:0,detail:0}),wx=Fn(eo),bu,Tu,to,yl=v({},eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(bu=t.screenX-to.screenX,Tu=t.screenY-to.screenY):Tu=bu=0,to=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),wp=Fn(yl),Rx=v({},yl,{dataTransfer:0}),Cx=Fn(Rx),Dx=v({},eo,{relatedTarget:0}),Au=Fn(Dx),Nx=v({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=Fn(Nx),Lx=v({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=Fn(Lx),Px=v({},sr,{data:0}),Rp=Fn(Px),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=zx[t])?!!n[t]:!1}function wu(){return Fx}var Hx=v({},eo,{key:function(t){if(t.key){var n=Ix[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=Fn(Hx),Vx=v({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Fn(Vx),kx=v({},eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Wx=Fn(kx),Xx=v({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=Fn(Xx),qx=v({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Fn(qx),Zx=v({},sr,{newState:0,oldState:0}),Kx=Fn(Zx),Qx=[9,13,27,32],Ru=ji&&"CompositionEvent"in window,no=null;ji&&"documentMode"in document&&(no=document.documentMode);var Jx=ji&&"TextEvent"in window&&!no,Dp=ji&&(!Ru||no&&8<no&&11>=no),Np=" ",Up=!1;function Lp(t,n){switch(t){case"keyup":return Qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function $x(t,n){switch(t){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Up=!0,Np);case"textInput":return t=n.data,t===Np&&Up?null:t;default:return null}}function ey(t,n){if(Wr)return t==="compositionend"||!Ru&&Lp(t,n)?(t=Tp(),gl=Eu=Ma=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ty[t.type]:n==="textarea"}function Ip(t,n,r,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=cc(n,"onChange"),0<n.length&&(r=new xl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var io=null,ao=null;function ny(t){_0(t,0)}function Sl(t){var n=ve(t);if(Wi(n))return t}function Bp(t,n){if(t==="change")return n}var zp=!1;if(ji){var Cu;if(ji){var Du="oninput"in document;if(!Du){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Du=typeof Fp.oninput=="function"}Cu=Du}else Cu=!1;zp=Cu&&(!document.documentMode||9<document.documentMode)}function Hp(){io&&(io.detachEvent("onpropertychange",Gp),ao=io=null)}function Gp(t){if(t.propertyName==="value"&&Sl(ao)){var n=[];Ip(n,ao,t,yu(t)),bp(ny,n)}}function iy(t,n,r){t==="focusin"?(Hp(),io=n,ao=r,io.attachEvent("onpropertychange",Gp)):t==="focusout"&&Hp()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ao)}function ry(t,n){if(t==="click")return Sl(n)}function sy(t,n){if(t==="input"||t==="change")return Sl(n)}function oy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Qn=typeof Object.is=="function"?Object.is:oy;function ro(t,n){if(Qn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Ve.call(n,u)||!Qn(t[u],n[u]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,n){var r=Vp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vp(r)}}function Wp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Sn(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=Sn(t.document)}return n}function Nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ly=ji&&"documentMode"in document&&11>=document.documentMode,Xr=null,Uu=null,so=null,Lu=!1;function jp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lu||Xr==null||Xr!==Sn(o)||(o=Xr,"selectionStart"in o&&Nu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),so&&ro(so,o)||(so=o,o=cc(Uu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Xr)))}function or(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var jr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Ou={},qp={};ji&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function lr(t){if(Ou[t])return Ou[t];if(!jr[t])return t;var n=jr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in qp)return Ou[t]=n[r];return t}var Yp=lr("animationend"),Zp=lr("animationiteration"),Kp=lr("animationstart"),cy=lr("transitionrun"),uy=lr("transitionstart"),fy=lr("transitioncancel"),Qp=lr("transitionend"),Jp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function yi(t,n){Jp.set(t,n),ke(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],qr=0,Iu=0;function El(){for(var t=qr,n=Iu=qr=0;n<t;){var r=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&$p(r,u,h)}}function bl(t,n,r,o){ci[qr++]=t,ci[qr++]=n,ci[qr++]=r,ci[qr++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Bu(t,n,r,o){return bl(t,n,r,o),Tl(t)}function cr(t,n){return bl(t,null,null,n),Tl(t)}function $p(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Xe(r),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function Tl(t){if(50<Co)throw Co=0,qf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function dy(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,r,o){return new dy(t,n,r,o)}function zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var r=t.alternate;return r===null?(r=Jn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function em(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,r,o,u,h){var S=0;if(o=t,typeof t=="function")zu(t)&&(S=1);else if(typeof t=="string")S=vS(t,r,oe.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Jn(31,r,n,u),t.elementType=U,t.lanes=h,t;case A:return ur(r.children,u,h,n);case x:S=8,u|=24;break;case _:return t=Jn(12,r,n,u|2),t.elementType=_,t.lanes=h,t;case H:return t=Jn(13,r,n,u),t.elementType=H,t.lanes=h,t;case X:return t=Jn(19,r,n,u),t.elementType=X,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case P:S=10;break e;case O:S=9;break e;case R:S=11;break e;case z:S=14;break e;case K:S=16,o=null;break e}S=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=Jn(S,r,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function ur(t,n,r,o){return t=Jn(7,t,o,n),t.lanes=r,t}function Fu(t,n,r){return t=Jn(6,t,null,n),t.lanes=r,t}function tm(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,r){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var nm=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var r=nm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:ht(n)},nm.set(t,n),n)}return{value:t,source:n,stack:ht(n)}}var Zr=[],Kr=0,wl=null,oo=0,fi=[],di=0,Ea=null,Ui=1,Li="";function Yi(t,n){Zr[Kr++]=oo,Zr[Kr++]=wl,wl=t,oo=n}function im(t,n,r){fi[di++]=Ui,fi[di++]=Li,fi[di++]=Ea,Ea=t;var o=Ui;t=Li;var u=32-Xe(o)-1;o&=~(1<<u),r+=1;var h=32-Xe(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ui=1<<32-Xe(n)+u|r<<u|o,Li=h+t}else Ui=1<<h|r<<u|o,Li=t}function Gu(t){t.return!==null&&(Yi(t,1),im(t,1,0))}function Vu(t){for(;t===wl;)wl=Zr[--Kr],Zr[Kr]=null,oo=Zr[--Kr],Zr[Kr]=null;for(;t===Ea;)Ea=fi[--di],fi[di]=null,Li=fi[--di],fi[di]=null,Ui=fi[--di],fi[di]=null}function am(t,n){fi[di++]=Ui,fi[di++]=Li,fi[di++]=Ea,Ui=n.id,Li=n.overflow,Ea=t}var An=null,Jt=null,Ct=!1,ba=null,hi=!1,ku=Error(a(519));function Ta(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lo(ui(n,t)),ku}function rm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[un]=t,n[bn]=o,r){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(r=0;r<No.length;r++)Et(No[r],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),In(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||M0(n.textContent,r)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ta(t,!0)}function sm(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:An=An.return}}function Qr(t){if(t!==An)return!1;if(!Ct)return sm(t),Ct=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||ld(t.type,t.memoizedProps)),r=!r),r&&Jt&&Ta(t),sm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=N0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Jt=N0(t)}else n===27?(n=Jt,Fa(t.type)?(t=hd,hd=null,Jt=t):Jt=n):Jt=An?mi(t.stateNode.nextSibling):null;return!0}function fr(){Jt=An=null,Ct=!1}function Wu(){var t=ba;return t!==null&&(kn===null?kn=t:kn.push.apply(kn,t),ba=null),t}function lo(t){ba===null?ba=[t]:ba.push(t)}var Xu=M(null),dr=null,Zi=null;function Aa(t,n,r){ee(Xu,n._currentValue),n._currentValue=r}function Ki(t){t._currentValue=Xu.current,k(Xu)}function ju(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function qu(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var C=h;h=u;for(var j=0;j<n.length;j++)if(C.context===n[j]){h.lanes|=r,C=h.alternate,C!==null&&(C.lanes|=r),ju(h.return,r,t),o||(S=null);break e}h=C.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(a(341));S.lanes|=r,h=S.alternate,h!==null&&(h.lanes|=r),ju(S,r,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Jr(t,n,r,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var C=u.type;Qn(u.pendingProps.value,S.value)||(t!==null?t.push(C):t=[C])}}else if(u===I.current){if(S=u.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Io):t=[Io])}u=u.return}t!==null&&qu(n,t,r,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!Qn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return om(dr,t)}function Cl(t,n){return dr===null&&hr(t),om(t,n)}function om(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Zi===null){if(t===null)throw Error(a(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return r}var hy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},py=s.unstable_scheduleCallback,my=s.unstable_NormalPriority,fn={$$typeof:P,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new hy,data:new Map,refCount:0}}function co(t){t.refCount--,t.refCount===0&&py(my,function(){t.controller.abort()})}var uo=null,Zu=0,$r=0,es=null;function gy(t,n){if(uo===null){var r=uo=[];Zu=0,$r=$f(),es={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Zu++,n.then(lm,lm),n}function lm(){if(--Zu===0&&uo!==null){es!==null&&(es.status="fulfilled");var t=uo;uo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vy(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var cm=F.S;F.S=function(t,n){jg=w(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gy(t,n),cm!==null&&cm(t,n)};var pr=M(null);function Ku(){var t=pr.current;return t!==null?t:Kt.pooledCache}function Dl(t,n){n===null?ee(pr,pr.current):ee(pr,n.pool)}function um(){var t=Ku();return t===null?null:{parent:fn._currentValue,pool:t}}var ts=Error(a(460)),Qu=Error(a(474)),Nl=Error(a(542)),Ul={then:function(){}};function fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Xi,Xi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Kt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t}throw gr=n,ts}}function mr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(gr=r,ts):r}}var gr=null;function hm(){if(gr===null)throw Error(a(459));var t=gr;return gr=null,t}function pm(t){if(t===ts||t===Nl)throw Error(a(483))}var ns=null,fo=0;function Ll(t){var n=fo;return fo+=1,ns===null&&(ns=[]),dm(ns,t,n)}function ho(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===y?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mm(t){function n(ie,Z){if(t){var de=ie.deletions;de===null?(ie.deletions=[Z],ie.flags|=16):de.push(Z)}}function r(ie,Z){if(!t)return null;for(;Z!==null;)n(ie,Z),Z=Z.sibling;return null}function o(ie){for(var Z=new Map;ie!==null;)ie.key!==null?Z.set(ie.key,ie):Z.set(ie.index,ie),ie=ie.sibling;return Z}function u(ie,Z){return ie=qi(ie,Z),ie.index=0,ie.sibling=null,ie}function h(ie,Z,de){return ie.index=de,t?(de=ie.alternate,de!==null?(de=de.index,de<Z?(ie.flags|=67108866,Z):de):(ie.flags|=67108866,Z)):(ie.flags|=1048576,Z)}function S(ie){return t&&ie.alternate===null&&(ie.flags|=67108866),ie}function C(ie,Z,de,be){return Z===null||Z.tag!==6?(Z=Fu(de,ie.mode,be),Z.return=ie,Z):(Z=u(Z,de),Z.return=ie,Z)}function j(ie,Z,de,be){var lt=de.type;return lt===A?Se(ie,Z,de.props.children,be,de.key):Z!==null&&(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===K&&mr(lt)===Z.type)?(Z=u(Z,de.props),ho(Z,de),Z.return=ie,Z):(Z=Al(de.type,de.key,de.props,null,ie.mode,be),ho(Z,de),Z.return=ie,Z)}function he(ie,Z,de,be){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==de.containerInfo||Z.stateNode.implementation!==de.implementation?(Z=Hu(de,ie.mode,be),Z.return=ie,Z):(Z=u(Z,de.children||[]),Z.return=ie,Z)}function Se(ie,Z,de,be,lt){return Z===null||Z.tag!==7?(Z=ur(de,ie.mode,be,lt),Z.return=ie,Z):(Z=u(Z,de),Z.return=ie,Z)}function Te(ie,Z,de){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=Fu(""+Z,ie.mode,de),Z.return=ie,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case E:return de=Al(Z.type,Z.key,Z.props,null,ie.mode,de),ho(de,Z),de.return=ie,de;case b:return Z=Hu(Z,ie.mode,de),Z.return=ie,Z;case K:return Z=mr(Z),Te(ie,Z,de)}if(ue(Z)||re(Z))return Z=ur(Z,ie.mode,de,null),Z.return=ie,Z;if(typeof Z.then=="function")return Te(ie,Ll(Z),de);if(Z.$$typeof===P)return Te(ie,Cl(ie,Z),de);Ol(ie,Z)}return null}function pe(ie,Z,de,be){var lt=Z!==null?Z.key:null;if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return lt!==null?null:C(ie,Z,""+de,be);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case E:return de.key===lt?j(ie,Z,de,be):null;case b:return de.key===lt?he(ie,Z,de,be):null;case K:return de=mr(de),pe(ie,Z,de,be)}if(ue(de)||re(de))return lt!==null?null:Se(ie,Z,de,be,null);if(typeof de.then=="function")return pe(ie,Z,Ll(de),be);if(de.$$typeof===P)return pe(ie,Z,Cl(ie,de),be);Ol(ie,de)}return null}function _e(ie,Z,de,be,lt){if(typeof be=="string"&&be!==""||typeof be=="number"||typeof be=="bigint")return ie=ie.get(de)||null,C(Z,ie,""+be,lt);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case E:return ie=ie.get(be.key===null?de:be.key)||null,j(Z,ie,be,lt);case b:return ie=ie.get(be.key===null?de:be.key)||null,he(Z,ie,be,lt);case K:return be=mr(be),_e(ie,Z,de,be,lt)}if(ue(be)||re(be))return ie=ie.get(de)||null,Se(Z,ie,be,lt,null);if(typeof be.then=="function")return _e(ie,Z,de,Ll(be),lt);if(be.$$typeof===P)return _e(ie,Z,de,Cl(Z,be),lt);Ol(Z,be)}return null}function Ke(ie,Z,de,be){for(var lt=null,Lt=null,it=Z,vt=Z=0,wt=null;it!==null&&vt<de.length;vt++){it.index>vt?(wt=it,it=null):wt=it.sibling;var Ot=pe(ie,it,de[vt],be);if(Ot===null){it===null&&(it=wt);break}t&&it&&Ot.alternate===null&&n(ie,it),Z=h(Ot,Z,vt),Lt===null?lt=Ot:Lt.sibling=Ot,Lt=Ot,it=wt}if(vt===de.length)return r(ie,it),Ct&&Yi(ie,vt),lt;if(it===null){for(;vt<de.length;vt++)it=Te(ie,de[vt],be),it!==null&&(Z=h(it,Z,vt),Lt===null?lt=it:Lt.sibling=it,Lt=it);return Ct&&Yi(ie,vt),lt}for(it=o(it);vt<de.length;vt++)wt=_e(it,ie,vt,de[vt],be),wt!==null&&(t&&wt.alternate!==null&&it.delete(wt.key===null?vt:wt.key),Z=h(wt,Z,vt),Lt===null?lt=wt:Lt.sibling=wt,Lt=wt);return t&&it.forEach(function(Wa){return n(ie,Wa)}),Ct&&Yi(ie,vt),lt}function ct(ie,Z,de,be){if(de==null)throw Error(a(151));for(var lt=null,Lt=null,it=Z,vt=Z=0,wt=null,Ot=de.next();it!==null&&!Ot.done;vt++,Ot=de.next()){it.index>vt?(wt=it,it=null):wt=it.sibling;var Wa=pe(ie,it,Ot.value,be);if(Wa===null){it===null&&(it=wt);break}t&&it&&Wa.alternate===null&&n(ie,it),Z=h(Wa,Z,vt),Lt===null?lt=Wa:Lt.sibling=Wa,Lt=Wa,it=wt}if(Ot.done)return r(ie,it),Ct&&Yi(ie,vt),lt;if(it===null){for(;!Ot.done;vt++,Ot=de.next())Ot=Te(ie,Ot.value,be),Ot!==null&&(Z=h(Ot,Z,vt),Lt===null?lt=Ot:Lt.sibling=Ot,Lt=Ot);return Ct&&Yi(ie,vt),lt}for(it=o(it);!Ot.done;vt++,Ot=de.next())Ot=_e(it,ie,vt,Ot.value,be),Ot!==null&&(t&&Ot.alternate!==null&&it.delete(Ot.key===null?vt:Ot.key),Z=h(Ot,Z,vt),Lt===null?lt=Ot:Lt.sibling=Ot,Lt=Ot);return t&&it.forEach(function(RS){return n(ie,RS)}),Ct&&Yi(ie,vt),lt}function jt(ie,Z,de,be){if(typeof de=="object"&&de!==null&&de.type===A&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case E:e:{for(var lt=de.key;Z!==null;){if(Z.key===lt){if(lt=de.type,lt===A){if(Z.tag===7){r(ie,Z.sibling),be=u(Z,de.props.children),be.return=ie,ie=be;break e}}else if(Z.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===K&&mr(lt)===Z.type){r(ie,Z.sibling),be=u(Z,de.props),ho(be,de),be.return=ie,ie=be;break e}r(ie,Z);break}else n(ie,Z);Z=Z.sibling}de.type===A?(be=ur(de.props.children,ie.mode,be,de.key),be.return=ie,ie=be):(be=Al(de.type,de.key,de.props,null,ie.mode,be),ho(be,de),be.return=ie,ie=be)}return S(ie);case b:e:{for(lt=de.key;Z!==null;){if(Z.key===lt)if(Z.tag===4&&Z.stateNode.containerInfo===de.containerInfo&&Z.stateNode.implementation===de.implementation){r(ie,Z.sibling),be=u(Z,de.children||[]),be.return=ie,ie=be;break e}else{r(ie,Z);break}else n(ie,Z);Z=Z.sibling}be=Hu(de,ie.mode,be),be.return=ie,ie=be}return S(ie);case K:return de=mr(de),jt(ie,Z,de,be)}if(ue(de))return Ke(ie,Z,de,be);if(re(de)){if(lt=re(de),typeof lt!="function")throw Error(a(150));return de=lt.call(de),ct(ie,Z,de,be)}if(typeof de.then=="function")return jt(ie,Z,Ll(de),be);if(de.$$typeof===P)return jt(ie,Z,Cl(ie,de),be);Ol(ie,de)}return typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint"?(de=""+de,Z!==null&&Z.tag===6?(r(ie,Z.sibling),be=u(Z,de),be.return=ie,ie=be):(r(ie,Z),be=Fu(de,ie.mode,be),be.return=ie,ie=be),S(ie)):r(ie,Z)}return function(ie,Z,de,be){try{fo=0;var lt=jt(ie,Z,de,be);return ns=null,lt}catch(it){if(it===ts||it===Nl)throw it;var Lt=Jn(29,it,null,ie.mode);return Lt.lanes=be,Lt.return=ie,Lt}finally{}}}var vr=mm(!0),gm=mm(!1),wa=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),$p(t,null,r),n}return bl(t,o,n,r),Tl(t)}function po(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Di(t,r)}}function ef(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var tf=!1;function mo(){if(tf){var t=es;if(t!==null)throw t}}function go(t,n,r,o){tf=!1;var u=t.updateQueue;wa=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var j=C,he=j.next;j.next=null,S===null?h=he:S.next=he,S=j;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,C=Se.lastBaseUpdate,C!==S&&(C===null?Se.firstBaseUpdate=he:C.next=he,Se.lastBaseUpdate=j))}if(h!==null){var Te=u.baseState;S=0,Se=he=j=null,C=h;do{var pe=C.lane&-536870913,_e=pe!==C.lane;if(_e?(At&pe)===pe:(o&pe)===pe){pe!==0&&pe===$r&&(tf=!0),Se!==null&&(Se=Se.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ke=t,ct=C;pe=n;var jt=r;switch(ct.tag){case 1:if(Ke=ct.payload,typeof Ke=="function"){Te=Ke.call(jt,Te,pe);break e}Te=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=ct.payload,pe=typeof Ke=="function"?Ke.call(jt,Te,pe):Ke,pe==null)break e;Te=v({},Te,pe);break e;case 2:wa=!0}}pe=C.callback,pe!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[pe]:_e.push(pe))}else _e={lane:pe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},Se===null?(he=Se=_e,j=Te):Se=Se.next=_e,S|=pe;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;_e=C,C=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);Se===null&&(j=Te),u.baseState=j,u.firstBaseUpdate=he,u.lastBaseUpdate=Se,h===null&&(u.shared.lanes=0),Oa|=S,t.lanes=S,t.memoizedState=Te}}function vm(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function _m(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)vm(r[t],n)}var is=M(null),Pl=M(0);function xm(t,n){t=ra,ee(Pl,t),ee(is,n),ra=t|n.baseLanes}function nf(){ee(Pl,ra),ee(is,is.current)}function af(){ra=Pl.current,k(is),k(Pl)}var $n=M(null),pi=null;function Da(t){var n=t.alternate;ee(ln,ln.current&1),ee($n,t),pi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(pi=t)}function rf(t){ee(ln,ln.current),ee($n,t),pi===null&&(pi=t)}function ym(t){t.tag===22?(ee(ln,ln.current),ee($n,t),pi===null&&(pi=t)):Na()}function Na(){ee(ln,ln.current),ee($n,$n.current)}function ei(t){k($n),pi===t&&(pi=null),k(ln)}var ln=M(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||fd(r)||dd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,gt=null,Wt=null,dn=null,Bl=!1,as=!1,_r=!1,zl=0,vo=0,rs=null,_y=0;function nn(){throw Error(a(321))}function sf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Qn(t[r],n[r]))return!1;return!0}function of(t,n,r,o,u,h){return Qi=h,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?ig:Mf,_r=!1,h=r(o,u),_r=!1,as&&(h=Mm(n,r,o,u)),Sm(t),h}function Sm(t){F.H=yo;var n=Wt!==null&&Wt.next!==null;if(Qi=0,dn=Wt=gt=null,Bl=!1,vo=0,rs=null,n)throw Error(a(300));t===null||hn||(t=t.dependencies,t!==null&&Rl(t)&&(hn=!0))}function Mm(t,n,r,o){gt=t;var u=0;do{if(as&&(rs=null),vo=0,as=!1,25<=u)throw Error(a(301));if(u+=1,dn=Wt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}F.H=ag,h=n(r,o)}while(as);return h}function xy(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?_o(n):n,t=t.useState()[0],(Wt!==null?Wt.memoizedState:null)!==t&&(gt.flags|=1024),n}function lf(){var t=zl!==0;return zl=0,t}function cf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function uf(t){if(Bl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Bl=!1}Qi=0,dn=Wt=gt=null,as=!1,vo=zl=0,rs=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?gt.memoizedState=dn=t:dn=dn.next=t,dn}function cn(){if(Wt===null){var t=gt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var n=dn===null?gt.memoizedState:dn.next;if(n!==null)dn=n,Wt=t;else{if(t===null)throw gt.alternate===null?Error(a(467)):Error(a(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},dn===null?gt.memoizedState=dn=t:dn=dn.next=t}return dn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function _o(t){var n=vo;return vo+=1,rs===null&&(rs=[]),t=dm(rs,t,n),n=gt,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?ig:Mf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return _o(t);if(t.$$typeof===P)return wn(t)}throw Error(a(438,String(t)))}function ff(t){var n=null,r=gt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=gt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Fl(),gt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=L;return n.index++,r}function Ji(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=cn();return df(n,Wt,t)}function df(t,n,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var C=S=null,j=null,he=n,Se=!1;do{var Te=he.lane&-536870913;if(Te!==he.lane?(At&Te)===Te:(Qi&Te)===Te){var pe=he.revertLane;if(pe===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),Te===$r&&(Se=!0);else if((Qi&pe)===pe){he=he.next,pe===$r&&(Se=!0);continue}else Te={lane:0,revertLane:he.revertLane,gesture:null,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},j===null?(C=j=Te,S=h):j=j.next=Te,gt.lanes|=pe,Oa|=pe;Te=he.action,_r&&r(h,Te),h=he.hasEagerState?he.eagerState:r(h,Te)}else pe={lane:Te,revertLane:he.revertLane,gesture:he.gesture,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null},j===null?(C=j=pe,S=h):j=j.next=pe,gt.lanes|=Te,Oa|=Te;he=he.next}while(he!==null&&he!==n);if(j===null?S=h:j.next=C,!Qn(h,t.memoizedState)&&(hn=!0,Se&&(r=es,r!==null)))throw r;t.memoizedState=h,t.baseState=S,t.baseQueue=j,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=cn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);Qn(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function Em(t,n,r){var o=gt,u=cn(),h=Ct;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var S=!Qn((Wt||u).memoizedState,r);if(S&&(u.memoizedState=r,hn=!0),u=u.queue,gf(Am.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},Tm.bind(null,o,u,r,n),null),Kt===null)throw Error(a(349));h||(Qi&127)!==0||bm(o,n,r)}return r}function bm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=gt.updateQueue,n===null?(n=Fl(),gt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Tm(t,n,r,o){n.value=r,n.getSnapshot=o,wm(n)&&Rm(t)}function Am(t,n,r){return r(function(){wm(n)&&Rm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Qn(t,r)}catch{return!0}}function Rm(t){var n=cr(t,2);n!==null&&Wn(n,t,2)}function pf(t){var n=Bn();if(typeof t=="function"){var r=t;if(t=r(),_r){rt(!0);try{r()}finally{rt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function Cm(t,n,r,o){return t.baseState=r,df(t,Wt,typeof o=="function"?o:Ji)}function yy(t,n,r,o,u){if(Wl(t))throw Error(a(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};F.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,Dm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function Dm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=F.T,S={};F.T=S;try{var C=r(u,o),j=F.S;j!==null&&j(S,C),Nm(t,n,C)}catch(he){mf(t,n,he)}finally{h!==null&&S.types!==null&&(h.types=S.types),F.T=h}}else try{h=r(u,o),Nm(t,n,h)}catch(he){mf(t,n,he)}}function Nm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Um(t,n,o)},function(o){return mf(t,n,o)}):Um(t,n,r)}function Um(t,n,r){n.status="fulfilled",n.value=r,Lm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Dm(t,r)))}function mf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Lm(n),n=n.next;while(n!==o)}t.action=null}function Lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Om(t,n){return n}function Pm(t,n){if(Ct){var r=Kt.formState;if(r!==null){e:{var o=gt;if(Ct){if(Jt){t:{for(var u=Jt,h=hi;u.nodeType!==8;){if(!h){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Jt=mi(u.nextSibling),o=u.data==="F!";break e}}Ta(o)}o=!1}o&&(n=r[0])}}return r=Bn(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},r.queue=o,r=eg.bind(null,gt,o),o.dispatch=r,o=pf(!1),h=Sf.bind(null,gt,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=yy.bind(null,gt,u,h,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function Im(t){var n=cn();return Bm(n,Wt,t)}function Bm(t,n,r){if(n=df(t,n,Om)[0],t=Gl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=_o(n)}catch(S){throw S===ts?Nl:S}else o=n;n=cn();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(gt.flags|=2048,ss(9,{destroy:void 0},Sy.bind(null,u,r),null)),[o,h,t]}function Sy(t,n){t.action=n}function zm(t){var n=cn(),r=Wt;if(r!==null)return Bm(n,r,t);cn(),n=n.memoizedState,r=cn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ss(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=gt.updateQueue,n===null&&(n=Fl(),gt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Fm(){return cn().memoizedState}function Vl(t,n,r,o){var u=Bn();gt.flags|=t,u.memoizedState=ss(1|n,{destroy:void 0},r,o===void 0?null:o)}function kl(t,n,r,o){var u=cn();o=o===void 0?null:o;var h=u.memoizedState.inst;Wt!==null&&o!==null&&sf(o,Wt.memoizedState.deps)?u.memoizedState=ss(n,h,r,o):(gt.flags|=t,u.memoizedState=ss(1|n,h,r,o))}function Hm(t,n){Vl(8390656,8,t,n)}function gf(t,n){kl(2048,8,t,n)}function My(t){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=Fl(),gt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Gm(t){var n=cn().memoizedState;return My({ref:n,nextImpl:t}),function(){if((Bt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Vm(t,n){return kl(4,2,t,n)}function km(t,n){return kl(4,4,t,n)}function Wm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xm(t,n,r){r=r!=null?r.concat([t]):null,kl(4,4,Wm.bind(null,n,t),r)}function vf(){}function jm(t,n){var r=cn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function qm(t,n){var r=cn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=t(),_r){rt(!0);try{t()}finally{rt(!1)}}return r.memoizedState=[o,n],o}function _f(t,n,r){return r===void 0||(Qi&1073741824)!==0&&(At&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=Yg(),gt.lanes|=t,Oa|=t,r)}function Ym(t,n,r,o){return Qn(r,n)?r:is.current!==null?(t=_f(t,r,o),Qn(t,n)||(hn=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(At&261930)===0?(hn=!0,t.memoizedState=r):(t=Yg(),gt.lanes|=t,Oa|=t,n)}function Zm(t,n,r,o,u){var h=Q.p;Q.p=h!==0&&8>h?h:8;var S=F.T,C={};F.T=C,Sf(t,!1,n,r);try{var j=u(),he=F.S;if(he!==null&&he(C,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var Se=vy(j,o);xo(t,n,Se,ii(t))}else xo(t,n,o,ii(t))}catch(Te){xo(t,n,{then:function(){},status:"rejected",reason:Te},ii())}finally{Q.p=h,S!==null&&C.types!==null&&(S.types=C.types),F.T=S}}function Ey(){}function xf(t,n,r,o){if(t.tag!==5)throw Error(a(476));var u=Km(t).queue;Zm(t,u,n,J,r===null?Ey:function(){return Qm(t),r(o)})}function Km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:J},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qm(t){var n=Km(t);n.next===null&&(n=t.alternate.memoizedState),xo(t,n.next.queue,{},ii())}function yf(){return wn(Io)}function Jm(){return cn().memoizedState}function $m(){return cn().memoizedState}function by(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ii();t=Ra(r);var o=Ca(n,t,r);o!==null&&(Wn(o,n,r),po(o,n,r)),n={cache:Yu()},t.payload=n;return}n=n.return}}function Ty(t,n,r){var o=ii();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Wl(t)?tg(n,r):(r=Bu(t,n,r,o),r!==null&&(Wn(r,t,o),ng(r,n,o)))}function eg(t,n,r){var o=ii();xo(t,n,r,o)}function xo(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))tg(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,C=h(S,r);if(u.hasEagerState=!0,u.eagerState=C,Qn(C,S))return bl(t,n,u,0),Kt===null&&El(),!1}catch{}finally{}if(r=Bu(t,n,u,o),r!==null)return Wn(r,t,o),ng(r,n,o),!0}return!1}function Sf(t,n,r,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(a(479))}else n=Bu(t,r,o,2),n!==null&&Wn(n,t,2)}function Wl(t){var n=t.alternate;return t===gt||n!==null&&n===gt}function tg(t,n){as=Bl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function ng(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Di(t,r)}}var yo={readContext:wn,use:Hl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};yo.useEffectEvent=nn;var ig={readContext:wn,use:Hl,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:Hm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Vl(4194308,4,Wm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var r=Bn();n=n===void 0?null:n;var o=t();if(_r){rt(!0);try{t()}finally{rt(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=Bn();if(r!==void 0){var u=r(n);if(_r){rt(!0);try{r(n)}finally{rt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ty.bind(null,gt,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,r=eg.bind(null,gt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:vf,useDeferredValue:function(t,n){var r=Bn();return _f(r,t,n)},useTransition:function(){var t=pf(!1);return t=Zm.bind(null,gt,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=gt,u=Bn();if(Ct){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Kt===null)throw Error(a(349));(At&127)!==0||bm(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,Hm(Am.bind(null,o,h,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},Tm.bind(null,o,h,r,n),null),r},useId:function(){var t=Bn(),n=Kt.identifierPrefix;if(Ct){var r=Li,o=Ui;r=(o&~(1<<32-Xe(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=zl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=_y++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Sf.bind(null,gt,!0,r),r.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return Bn().memoizedState=by.bind(null,gt)},useEffectEvent:function(t){var n=Bn(),r={impl:t};return n.memoizedState=r,function(){if((Bt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Mf={readContext:wn,use:Hl,useCallback:jm,useContext:wn,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:Gl,useRef:Fm,useState:function(){return Gl(Ji)},useDebugValue:vf,useDeferredValue:function(t,n){var r=cn();return Ym(r,Wt.memoizedState,t,n)},useTransition:function(){var t=Gl(Ji)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:yf,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var r=cn();return Cm(r,Wt,t,n)},useMemoCache:ff,useCacheRefresh:$m};Mf.useEffectEvent=Gm;var ag={readContext:wn,use:Hl,useCallback:jm,useContext:wn,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:hf,useRef:Fm,useState:function(){return hf(Ji)},useDebugValue:vf,useDeferredValue:function(t,n){var r=cn();return Wt===null?_f(r,t,n):Ym(r,Wt.memoizedState,t,n)},useTransition:function(){var t=hf(Ji)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:_o(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:yf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var r=cn();return Wt!==null?Cm(r,Wt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:ff,useCacheRefresh:$m};ag.useEffectEvent=Gm;function Ef(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:v({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var bf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ii(),u=Ra(o);u.payload=n,r!=null&&(u.callback=r),n=Ca(t,u,o),n!==null&&(Wn(n,t,o),po(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ii(),u=Ra(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ca(t,u,o),n!==null&&(Wn(n,t,o),po(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ii(),o=Ra(r);o.tag=2,n!=null&&(o.callback=n),n=Ca(t,o,r),n!==null&&(Wn(n,t,r),po(n,t,r))}};function rg(t,n,r,o,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!ro(r,o)||!ro(u,h):!0}function sg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&bf.enqueueReplaceState(n,n.state,null)}function xr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=v({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function og(t){Ml(t)}function lg(t){console.error(t)}function cg(t){Ml(t)}function Xl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,r){return r=Ra(r),r.tag=3,r.payload={element:null},r.callback=function(){Xl(t,n)},r}function fg(t){return t=Ra(t),t.tag=3,t}function dg(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){ug(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){ug(n,r,o),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var C=o.stack;this.componentDidCatch(o.value,{componentStack:C!==null?C:""})})}function Ay(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Jr(n,r,u,!0),r=$n.current,r!==null){switch(r.tag){case 31:case 13:return pi===null?ic():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Ul?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return r.flags|=65536,o===Ul?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Kf(t,o,u)),!1}throw Error(a(435,r.tag))}return Kf(t,o,u),ic(),!1}if(Ct)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(a(422),{cause:o}),lo(ui(t,r)))):(o!==ku&&(n=Error(a(423),{cause:o}),lo(ui(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ui(o,r),u=Tf(t.stateNode,o,u),ef(t,u),an!==4&&(an=2)),!1;var h=Error(a(520),{cause:o});if(h=ui(h,r),Ro===null?Ro=[h]:Ro.push(h),an!==4&&(an=2),n===null)return!0;o=ui(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Tf(r.stateNode,o,t),ef(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pa===null||!Pa.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=fg(u),dg(u,t,r,o),ef(r,u),!1}r=r.return}while(r!==null);return!1}var Af=Error(a(461)),hn=!1;function Rn(t,n,r,o){n.child=t===null?gm(n,null,r,o):vr(n,t.child,r,o)}function hg(t,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var S={};for(var C in o)C!=="ref"&&(S[C]=o[C])}else S=o;return hr(n),o=of(t,n,r,S,h,u),C=lf(),t!==null&&!hn?(cf(t,n,u),$i(t,n,u)):(Ct&&C&&Gu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function pg(t,n,r,o,u){if(t===null){var h=r.type;return typeof h=="function"&&!zu(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,mg(t,n,h,o,u)):(t=Al(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Of(t,u)){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:ro,r(S,o)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=qi(h,o),t.ref=n.ref,t.return=n,n.child=t}function mg(t,n,r,o,u){if(t!==null){var h=t.memoizedProps;if(ro(h,o)&&t.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Of(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,$i(t,n,u)}return wf(t,n,r,o,u)}function gg(t,n,r,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return vg(t,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,h!==null?h.cachePool:null),h!==null?xm(n,h):nf(),ym(n);else return o=n.lanes=536870912,vg(t,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Dl(n,h.cachePool),xm(n,h),Na(),n.memoizedState=null):(t!==null&&Dl(n,null),nf(),Na());return Rn(t,n,u,r),n.child}function So(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vg(t,n,r,o,u){var h=Ku();return h=h===null?null:{parent:fn._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},t!==null&&Dl(n,null),nf(),ym(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function jl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function _g(t,n,r){return vr(n,t.child,null,r),t=jl(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function wy(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=jl(n,o),n.lanes=536870912,So(null,t);if(rf(n),(t=Jt)?(t=D0(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=tm(t),r.return=n,n.child=r,An=n,Jt=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return jl(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=_g(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(hn||Jr(t,n,r,!1),u=(r&t.childLanes)!==0,hn||u){if(o=Kt,o!==null&&(S=Br(o,r),S!==0&&S!==h.retryLane))throw h.retryLane=S,cr(t,S),Wn(o,t,S),Af;ic(),n=_g(t,n,r)}else t=h.treeContext,Jt=mi(S.nextSibling),An=n,Ct=!0,ba=null,hi=!1,t!==null&&am(n,t),n=jl(n,o),n.flags|=4096;return n}return t=qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function wf(t,n,r,o,u){return hr(n),r=of(t,n,r,o,void 0,u),o=lf(),t!==null&&!hn?(cf(t,n,u),$i(t,n,u)):(Ct&&o&&Gu(n),n.flags|=1,Rn(t,n,r,u),n.child)}function xg(t,n,r,o,u,h){return hr(n),n.updateQueue=null,r=Mm(n,o,r,u),Sm(t),o=lf(),t!==null&&!hn?(cf(t,n,h),$i(t,n,h)):(Ct&&o&&Gu(n),n.flags|=1,Rn(t,n,r,h),n.child)}function yg(t,n,r,o,u){if(hr(n),n.stateNode===null){var h=Yr,S=r.contextType;typeof S=="object"&&S!==null&&(h=wn(S)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=bf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Ju(n),S=r.contextType,h.context=typeof S=="object"&&S!==null?wn(S):Yr,h.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Ef(n,r,S,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&bf.enqueueReplaceState(h,h.state,null),go(n,o,h,u),mo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var C=n.memoizedProps,j=xr(r,C);h.props=j;var he=h.context,Se=r.contextType;S=Yr,typeof Se=="object"&&Se!==null&&(S=wn(Se));var Te=r.getDerivedStateFromProps;Se=typeof Te=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,Se||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||he!==S)&&sg(n,h,o,S),wa=!1;var pe=n.memoizedState;h.state=pe,go(n,o,h,u),mo(),he=n.memoizedState,C||pe!==he||wa?(typeof Te=="function"&&(Ef(n,r,Te,o),he=n.memoizedState),(j=wa||rg(n,r,j,o,pe,he,S))?(Se||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=he),h.props=o,h.state=he,h.context=S,o=j):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,$u(t,n),S=n.memoizedProps,Se=xr(r,S),h.props=Se,Te=n.pendingProps,pe=h.context,he=r.contextType,j=Yr,typeof he=="object"&&he!==null&&(j=wn(he)),C=r.getDerivedStateFromProps,(he=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Te||pe!==j)&&sg(n,h,o,j),wa=!1,pe=n.memoizedState,h.state=pe,go(n,o,h,u),mo();var _e=n.memoizedState;S!==Te||pe!==_e||wa||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof C=="function"&&(Ef(n,r,C,o),_e=n.memoizedState),(Se=wa||rg(n,r,Se,o,pe,_e,j)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(he||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,_e,j),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,_e,j)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_e),h.props=o,h.state=_e,h.context=j,o=Se):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&pe===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,ql(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=vr(n,t.child,null,u),n.child=vr(n,null,r,u)):Rn(t,n,r,u),n.memoizedState=h.state,t=n.child):t=$i(t,n,u),t}function Sg(t,n,r,o){return fr(),n.flags|=256,Rn(t,n,r,o),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:um()}}function Df(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ni),t}function Mg(t,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?Da(n):Na(),(t=Jt)?(t=D0(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=tm(t),r.return=n,n.child=r,An=n,Jt=null)):t=null,t===null)throw Ta(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var C=o.children;return o=o.fallback,u?(Na(),u=n.mode,C=Yl({mode:"hidden",children:C},u),o=ur(o,u,r,null),C.return=n,o.return=n,C.sibling=o,n.child=C,o=n.child,o.memoizedState=Cf(r),o.childLanes=Df(t,S,r),n.memoizedState=Rf,So(null,o)):(Da(n),Nf(n,C))}var j=t.memoizedState;if(j!==null&&(C=j.dehydrated,C!==null)){if(h)n.flags&256?(Da(n),n.flags&=-257,n=Uf(t,n,r)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),C=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),C=ur(C,u,r,null),C.flags|=2,o.return=n,C.return=n,o.sibling=C,n.child=o,vr(n,t.child,null,r),o=n.child,o.memoizedState=Cf(r),o.childLanes=Df(t,S,r),n.memoizedState=Rf,n=So(null,o));else if(Da(n),dd(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var he=S.dgst;S=he,o=Error(a(419)),o.stack="",o.digest=S,lo({value:o,source:null,stack:null}),n=Uf(t,n,r)}else if(hn||Jr(t,n,r,!1),S=(r&t.childLanes)!==0,hn||S){if(S=Kt,S!==null&&(o=Br(S,r),o!==0&&o!==j.retryLane))throw j.retryLane=o,cr(t,o),Wn(S,t,o),Af;fd(C)||ic(),n=Uf(t,n,r)}else fd(C)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,Jt=mi(C.nextSibling),An=n,Ct=!0,ba=null,hi=!1,t!==null&&am(n,t),n=Nf(n,o.children),n.flags|=4096);return n}return u?(Na(),C=o.fallback,u=n.mode,j=t.child,he=j.sibling,o=qi(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,he!==null?C=qi(he,C):(C=ur(C,u,r,null),C.flags|=2),C.return=n,o.return=n,o.sibling=C,n.child=o,So(null,o),o=n.child,C=t.child.memoizedState,C===null?C=Cf(r):(u=C.cachePool,u!==null?(j=fn._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=um(),C={baseLanes:C.baseLanes|r,cachePool:u}),o.memoizedState=C,o.childLanes=Df(t,S,r),n.memoizedState=Rf,So(t.child,o)):(Da(n),r=t.child,t=r.sibling,r=qi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=r,n.memoizedState=null,r)}function Nf(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function Uf(t,n,r){return vr(n,t.child,null,r),t=Nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Eg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ju(t.return,n,r)}function Lf(t,n,r,o,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=u,S.treeForkCount=h)}function bg(t,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=ln.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,ee(ln,S),Rn(t,n,o,r),o=Ct?oo:0,!C&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,r,n);else if(t.tag===19)Eg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Il(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Lf(n,!1,u,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Lf(n,!0,r,null,h,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Jr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=qi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=qi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function Ry(t,n,r){switch(n.tag){case 3:te(n,n.stateNode.containerInfo),Aa(n,fn,t.memoizedState.cache),fr();break;case 27:case 5:Ee(n);break;case 4:te(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Mg(t,n,r):(Da(n),t=$i(t,n,r),t!==null?t.sibling:null);Da(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Jr(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return bg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ee(ln,ln.current),o)break;return null;case 22:return n.lanes=0,gg(t,n,r,n.pendingProps);case 24:Aa(n,fn,t.memoizedState.cache)}return $i(t,n,r)}function Tg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Of(t,r)&&(n.flags&128)===0)return hn=!1,Ry(t,n,r);hn=(t.flags&131072)!==0}else hn=!1,Ct&&(n.flags&1048576)!==0&&im(n,oo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")zu(t)?(o=xr(t,o),n.tag=1,n=yg(null,n,t,o,r)):(n.tag=0,n=wf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===R){n.tag=11,n=hg(null,n,t,o,r);break e}else if(u===z){n.tag=14,n=pg(null,n,t,o,r);break e}}throw n=xe(t)||t,Error(a(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=xr(o,n.pendingProps),yg(t,n,o,u,r);case 3:e:{if(te(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,$u(t,n),go(n,o,null,r);var S=n.memoizedState;if(o=S.cache,Aa(n,fn,o),o!==h.cache&&qu(n,[fn],r,!0),mo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Sg(t,n,o,r);break e}else if(o!==u){u=ui(Error(a(424)),n),lo(u),n=Sg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Jt=mi(t.firstChild),An=n,Ct=!0,ba=null,hi=!0,r=gm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(fr(),o===u){n=$i(t,n,r);break e}Rn(t,n,o,r)}n=n.child}return n;case 26:return ql(t,n),t===null?(r=I0(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ct||(r=n.type,t=n.pendingProps,o=uc(T.current).createElement(r),o[un]=n,o[bn]=t,Cn(o,r,t),we(o),n.stateNode=o):n.memoizedState=I0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ee(n),t===null&&Ct&&(o=n.stateNode=L0(n.type,n.pendingProps,T.current),An=n,hi=!0,u=Jt,Fa(n.type)?(hd=u,Jt=mi(o.firstChild)):Jt=u),Rn(t,n,n.pendingProps.children,r),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=Jt)&&(o=aS(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,An=n,Jt=mi(o.firstChild),hi=!1,u=!0):u=!1),u||Ta(n)),Ee(n),u=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,ld(u,h)?o=null:S!==null&&ld(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,xy,null,null,r),Io._currentValue=u),ql(t,n),Rn(t,n,o,r),n.child;case 6:return t===null&&Ct&&((t=r=Jt)&&(r=rS(r,n.pendingProps,hi),r!==null?(n.stateNode=r,An=n,Jt=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Mg(t,n,r);case 4:return te(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=vr(n,null,o,r):Rn(t,n,o,r),n.child;case 11:return hg(t,n,n.type,n.pendingProps,r);case 7:return Rn(t,n,n.pendingProps,r),n.child;case 8:return Rn(t,n,n.pendingProps.children,r),n.child;case 12:return Rn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Aa(n,n.type,o.value),Rn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=wn(u),o=o(u),n.flags|=1,Rn(t,n,o,r),n.child;case 14:return pg(t,n,n.type,n.pendingProps,r);case 15:return mg(t,n,n.type,n.pendingProps,r);case 19:return bg(t,n,r);case 31:return wy(t,n,r);case 22:return gg(t,n,r,n.pendingProps);case 24:return hr(n),o=wn(fn),t===null?(u=Ku(),u===null&&(u=Kt,h=Yu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},Ju(n),Aa(n,fn,u)):((t.lanes&r)!==0&&($u(t,n),go(n,null,null,r),mo()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,fn,o)):(o=h.cache,Aa(n,fn,o),o!==u.cache&&qu(n,[fn],r,!0))),Rn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ea(t){t.flags|=4}function Pf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw gr=Ul,Qu}else t.flags&=-16777217}function Ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G0(n))if(Jg())t.flags|=8192;else throw gr=Ul,Qu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,us|=n)}function Mo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function $t(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function Cy(t,n,r){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(n),null;case 1:return $t(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(fn),le(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),$t(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(ea(n),h!==null?($t(n),Ag(n,h)):($t(n),Pf(n,u,null,o,r))):h?h!==t.memoizedState?(ea(n),$t(n),Ag(n,h)):($t(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ea(n),$t(n),Pf(n,u,t,o,r)),null;case 27:if(Ce(n),r=T.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return $t(n),null}t=oe.current,Qr(n)?rm(n):(t=L0(u,o,r),n.stateNode=t,ea(n))}return $t(n),null;case 5:if(Ce(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return $t(n),null}if(h=oe.current,Qr(n))rm(n);else{var S=uc(T.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[un]=n,h[bn]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(Cn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ea(n)}}return $t(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=T.current,Qr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=An,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||M0(t.nodeValue,r)),t||Ta(n,!0)}else t=uc(t).createTextNode(o),t[un]=n,n.stateNode=t}return $t(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),t=!1}else r=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(a(558))}return $t(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$t(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),Zl(n,n.updateQueue),$t(n),null);case 4:return le(),t===null&&id(n.stateNode.containerInfo),$t(n),null;case 10:return Ki(n.type),$t(n),null;case 19:if(k(ln),o=n.memoizedState,o===null)return $t(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Mo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Il(t),h!==null){for(n.flags|=128,Mo(o,!1),t=h.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)em(r,t),r=r.sibling;return ee(ln,ln.current&1|2),Ct&&Yi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&w()>ec&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),Mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ct)return $t(n),null}else 2*w()-o.renderingStartTime>ec&&r!==536870912&&(n.flags|=128,u=!0,Mo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=w(),t.sibling=null,r=ln.current,ee(ln,u?r&1|2:r&1),Ct&&Yi(n,o.treeForkCount),t):($t(n),null);case 22:case 23:return ei(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&($t(n),n.subtreeFlags&6&&(n.flags|=8192)):$t(n),r=n.updateQueue,r!==null&&Zl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&k(pr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(fn),$t(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Dy(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(fn),le(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Ce(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(a(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return k(ln),null;case 4:return le(),null;case 10:return Ki(n.type),null;case 22:case 23:return ei(n),af(),t!==null&&k(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(fn),null;case 25:return null;default:return null}}function wg(t,n){switch(Vu(n),n.tag){case 3:Ki(fn),le();break;case 26:case 27:case 5:Ce(n);break;case 4:le();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:k(ln);break;case 10:Ki(n.type);break;case 22:case 23:ei(n),af(),t!==null&&k(pr);break;case 24:Ki(fn)}}function Eo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var h=r.create,S=r.inst;o=h(),S.destroy=o}r=r.next}while(r!==u)}}catch(C){Vt(n,n.return,C)}}function Ua(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var S=o.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,u=n;var j=r,he=C;try{he()}catch(Se){Vt(u,j,Se)}}}o=o.next}while(o!==h)}}catch(Se){Vt(n,n.return,Se)}}function Rg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{_m(n,r)}catch(o){Vt(t,t.return,o)}}}function Cg(t,n,r){r.props=xr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Vt(t,n,o)}}function bo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Vt(t,n,u)}}function Oi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Vt(t,n,u)}else r.current=null}function Dg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Vt(t,t.return,u)}}function If(t,n,r){try{var o=t.stateNode;Jy(o,t.type,r,n),o[bn]=n}catch(u){Vt(t,t.return,u)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function Bf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(zf(t,n,r),t=t.sibling;t!==null;)zf(t,n,r),t=t.sibling}function Kl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Kl(t,n,r),t=t.sibling;t!==null;)Kl(t,n,r),t=t.sibling}function Ug(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,o,r),n[un]=t,n[bn]=r}catch(h){Vt(t,t.return,h)}}var ta=!1,pn=!1,Ff=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,Mn=null;function Ny(t,n){if(t=t.containerInfo,sd=vc,t=Xp(t),Nu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var S=0,C=-1,j=-1,he=0,Se=0,Te=t,pe=null;t:for(;;){for(var _e;Te!==r||u!==0&&Te.nodeType!==3||(C=S+u),Te!==h||o!==0&&Te.nodeType!==3||(j=S+o),Te.nodeType===3&&(S+=Te.nodeValue.length),(_e=Te.firstChild)!==null;)pe=Te,Te=_e;for(;;){if(Te===t)break t;if(pe===r&&++he===u&&(C=S),pe===h&&++Se===o&&(j=S),(_e=Te.nextSibling)!==null)break;Te=pe,pe=Te.parentNode}Te=_e}r=C===-1||j===-1?null:{start:C,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(od={focusedElem:t,selectionRange:r},vc=!1,Mn=n;Mn!==null;)if(n=Mn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Mn=t;else for(;Mn!==null;){switch(n=Mn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var Ke=xr(r.type,u);t=o.getSnapshotBeforeUpdate(Ke,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Vt(r,r.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)ud(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Mn=t;break}Mn=n.return}}function Og(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ia(t,r),o&4&&Eo(5,r);break;case 1:if(ia(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(S){Vt(r,r.return,S)}else{var u=xr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(r,r.return,S)}}o&64&&Rg(r),o&512&&bo(r,r.return);break;case 3:if(ia(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{_m(t,n)}catch(S){Vt(r,r.return,S)}}break;case 27:n===null&&o&4&&Ug(r);case 26:case 5:ia(t,r),n===null&&o&4&&Dg(r),o&512&&bo(r,r.return);break;case 12:ia(t,r);break;case 31:ia(t,r),o&4&&Bg(t,r);break;case 13:ia(t,r),o&4&&zg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Hy.bind(null,r),sS(t,r))));break;case 22:if(o=r.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||pn,u=ta;var h=pn;ta=o,(pn=n)&&!h?aa(t,r,(r.subtreeFlags&8772)!==0):ia(t,r),ta=u,pn=h}break;case 30:break;default:ia(t,r)}}function Pg(t){var n=t.alternate;n!==null&&(t.alternate=null,Pg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&D(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Hn=!1;function na(t,n,r){for(r=r.child;r!==null;)Ig(t,n,r),r=r.sibling}function Ig(t,n,r){if(Oe&&typeof Oe.onCommitFiberUnmount=="function")try{Oe.onCommitFiberUnmount(Ne,r)}catch{}switch(r.tag){case 26:pn||Oi(r,n),na(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:pn||Oi(r,n);var o=en,u=Hn;Fa(r.type)&&(en=r.stateNode,Hn=!1),na(t,n,r),Lo(r.stateNode),en=o,Hn=u;break;case 5:pn||Oi(r,n);case 6:if(o=en,u=Hn,en=null,na(t,n,r),en=o,Hn=u,en!==null)if(Hn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(h){Vt(r,n,h)}else try{en.removeChild(r.stateNode)}catch(h){Vt(r,n,h)}break;case 18:en!==null&&(Hn?(t=en,R0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),_s(t)):R0(en,r.stateNode));break;case 4:o=en,u=Hn,en=r.stateNode.containerInfo,Hn=!0,na(t,n,r),en=o,Hn=u;break;case 0:case 11:case 14:case 15:Ua(2,r,n),pn||Ua(4,r,n),na(t,n,r);break;case 1:pn||(Oi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Cg(r,n,o)),na(t,n,r);break;case 21:na(t,n,r);break;case 22:pn=(o=pn)||r.memoizedState!==null,na(t,n,r),pn=o;break;default:na(t,n,r)}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(r){Vt(n,n.return,r)}}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(r){Vt(n,n.return,r)}}function Uy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lg),n;default:throw Error(a(435,t.tag))}}function Ql(t,n){var r=Uy(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=Gy.bind(null,t,o);o.then(u,u)}})}function Gn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=t,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(Fa(C.type)){en=C.stateNode,Hn=!1;break e}break;case 5:en=C.stateNode,Hn=!1;break e;case 3:case 4:en=C.stateNode.containerInfo,Hn=!0;break e}C=C.return}if(en===null)throw Error(a(160));Ig(h,S,u),en=null,Hn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fg(n,t),n=n.sibling}var Si=null;function Fg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Gn(n,t),Vn(t),o&4&&(Ua(3,t,t.return),Eo(3,t),Ua(5,t,t.return));break;case 1:Gn(n,t),Vn(t),o&512&&(pn||r===null||Oi(r,r.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Si;if(Gn(n,t),Vn(t),o&512&&(pn||r===null||Oi(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ar]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Cn(h,o,r),h[un]=t,we(h),o=h;break e;case"link":var S=F0("link","href",u).get(o+(r.href||""));if(S){for(var C=0;C<S.length;C++)if(h=S[C],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(C,1);break t}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;case"meta":if(S=F0("meta","content",u).get(o+(r.content||""))){for(C=0;C<S.length;C++)if(h=S[C],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(C,1);break t}}h=u.createElement(o),Cn(h,o,r),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[un]=t,we(h),o=h}t.stateNode=o}else H0(u,t.type,t.stateNode);else t.stateNode=z0(u,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?H0(u,t.type,t.stateNode):z0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,r.memoizedProps)}break;case 27:Gn(n,t),Vn(t),o&512&&(pn||r===null||Oi(r,r.return)),r!==null&&o&4&&If(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Gn(n,t),Vn(t),o&512&&(pn||r===null||Oi(r,r.return)),t.flags&32){u=t.stateNode;try{Gr(u,"")}catch(Ke){Vt(t,t.return,Ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Gn(n,t),Vn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Ke){Vt(t,t.return,Ke)}}break;case 3:if(hc=null,u=Si,Si=fc(n.containerInfo),Gn(n,t),Si=u,Vn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(Ke){Vt(t,t.return,Ke)}Ff&&(Ff=!1,Hg(t));break;case 4:o=Si,Si=fc(t.stateNode.containerInfo),Gn(n,t),Vn(t),Si=o;break;case 12:Gn(n,t),Vn(t);break;case 31:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Gn(n,t),Vn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&($l=w()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var j=r!==null&&r.memoizedState!==null,he=ta,Se=pn;if(ta=he||u,pn=Se||j,Gn(n,t),pn=Se,ta=he,Vn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||j||ta||pn||yr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){j=r=n;try{if(h=j.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=j.stateNode;var Te=j.memoizedProps.style,pe=Te!=null&&Te.hasOwnProperty("display")?Te.display:null;C.style.display=pe==null||typeof pe=="boolean"?"":(""+pe).trim()}}catch(Ke){Vt(j,j.return,Ke)}}}else if(n.tag===6){if(r===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Ke){Vt(j,j.return,Ke)}}}else if(n.tag===18){if(r===null){j=n;try{var _e=j.stateNode;u?C0(_e,!0):C0(j.stateNode,!1)}catch(Ke){Vt(j,j.return,Ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Ql(t,r))));break;case 19:Gn(n,t),Vn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Gn(n,t),Vn(t)}}function Vn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Ng(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,h=Bf(t);Kl(t,h,u);break;case 5:var S=r.stateNode;r.flags&32&&(Gr(S,""),r.flags&=-33);var C=Bf(t);Kl(t,C,S);break;case 3:case 4:var j=r.stateNode.containerInfo,he=Bf(t);zf(t,he,j);break;default:throw Error(a(161))}}catch(Se){Vt(t,t.return,Se)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),yr(n);break;case 1:Oi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Cg(n,n.return,r),yr(n);break;case 27:Lo(n.stateNode);case 26:case 5:Oi(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function aa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:aa(u,h,r),Eo(4,h);break;case 1:if(aa(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(he){Vt(o,o.return,he)}if(o=h,u=o.updateQueue,u!==null){var C=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)vm(j[u],C)}catch(he){Vt(o,o.return,he)}}r&&S&64&&Rg(h),bo(h,h.return);break;case 27:Ug(h);case 26:case 5:aa(u,h,r),r&&o===null&&S&4&&Dg(h),bo(h,h.return);break;case 12:aa(u,h,r);break;case 31:aa(u,h,r),r&&S&4&&Bg(u,h);break;case 13:aa(u,h,r),r&&S&4&&zg(u,h);break;case 22:h.memoizedState===null&&aa(u,h,r),bo(h,h.return);break;case 30:break;default:aa(u,h,r)}n=n.sibling}}function Hf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&co(r))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t))}function Mi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(t,n,r,o),n=n.sibling}function Gg(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,r,o),u&2048&&Eo(9,n);break;case 1:Mi(t,n,r,o);break;case 3:Mi(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&co(t)));break;case 12:if(u&2048){Mi(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,C=h.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Vt(n,n.return,j)}}else Mi(t,n,r,o);break;case 31:Mi(t,n,r,o);break;case 13:Mi(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Mi(t,n,r,o):To(t,n):h._visibility&2?Mi(t,n,r,o):(h._visibility|=2,os(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Mi(t,n,r,o),u&2048&&Gf(n.alternate,n);break;default:Mi(t,n,r,o)}}function os(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,C=r,j=o,he=S.flags;switch(S.tag){case 0:case 11:case 15:os(h,S,C,j,u),Eo(8,S);break;case 23:break;case 22:var Se=S.stateNode;S.memoizedState!==null?Se._visibility&2?os(h,S,C,j,u):To(h,S):(Se._visibility|=2,os(h,S,C,j,u)),u&&he&2048&&Hf(S.alternate,S);break;case 24:os(h,S,C,j,u),u&&he&2048&&Gf(S.alternate,S);break;default:os(h,S,C,j,u)}n=n.sibling}}function To(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:To(r,o),u&2048&&Hf(o.alternate,o);break;case 24:To(r,o),u&2048&&Gf(o.alternate,o);break;default:To(r,o)}n=n.sibling}}var Ao=8192;function ls(t,n,r){if(t.subtreeFlags&Ao)for(t=t.child;t!==null;)Vg(t,n,r),t=t.sibling}function Vg(t,n,r){switch(t.tag){case 26:ls(t,n,r),t.flags&Ao&&t.memoizedState!==null&&_S(r,Si,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,r);break;case 3:case 4:var o=Si;Si=fc(t.stateNode.containerInfo),ls(t,n,r),Si=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Ao,Ao=16777216,ls(t,n,r),Ao=o):ls(t,n,r));break;default:ls(t,n,r)}}function kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function wo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,Xg(o,t)}kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:wo(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:wo(t);break;case 12:wo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):wo(t);break;default:wo(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Mn=o,Xg(o,t)}kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Jl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Xg(t,n){for(;Mn!==null;){var r=Mn;switch(r.tag){case 0:case 11:case 15:Ua(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:co(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Mn=o;else e:for(r=t;Mn!==null;){o=Mn;var u=o.sibling,h=o.return;if(Pg(o),o===r){Mn=null;break e}if(u!==null){u.return=h,Mn=u;break e}Mn=h}}}var Ly={getCacheForType:function(t){var n=wn(fn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return wn(fn).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Kt=null,Mt=null,At=0,Gt=0,ti=null,La=!1,cs=!1,Vf=!1,ra=0,an=0,Oa=0,Sr=0,kf=0,ni=0,us=0,Ro=null,kn=null,Wf=!1,$l=0,jg=0,ec=1/0,tc=null,Pa=null,vn=0,Ia=null,fs=null,sa=0,Xf=0,jf=null,qg=null,Co=0,qf=null;function ii(){return(Bt&2)!==0&&At!==0?At&-At:F.T!==null?$f():ir()}function Yg(){if(ni===0)if((At&536870912)===0||Ct){var t=Pe;Pe<<=1,(Pe&3932160)===0&&(Pe=262144),ni=t}else ni=536870912;return t=$n.current,t!==null&&(t.flags|=32),ni}function Wn(t,n,r){(t===Kt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),Ba(t,At,ni,!1)),Pn(t,r),((Bt&2)===0||t!==Kt)&&(t===Kt&&((Bt&2)===0&&(Sr|=r),an===4&&Ba(t,At,ni,!1)),Pi(t))}function Zg(t,n,r){if((Bt&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Ze(t,n),u=o?By(t,n):Zf(t,n,!0),h=o;do{if(u===0){cs&&!o&&Ba(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!Py(r)){u=Zf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=t;u=Ro;var j=C.current.memoizedState.isDehydrated;if(j&&(ds(C,S).flags|=256),S=Zf(C,S,!1),S!==2){if(Vf&&!j){C.errorRecoveryDisabledLanes|=h,Sr|=h,u=4;break e}h=kn,kn=u,h!==null&&(kn===null?kn=h:kn.push.apply(kn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){ds(t,0),Ba(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Ba(o,n,ni,!La);break e;case 2:kn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=$l+300-w(),10<u)){if(Ba(o,n,ni,!La),Ae(o,0,!0)!==0)break e;sa=n,o.timeoutHandle=A0(Kg.bind(null,o,r,kn,tc,Wf,n,ni,Sr,us,La,h,"Throttled",-0,0),u);break e}Kg(o,r,kn,tc,Wf,n,ni,Sr,us,La,h,null,-0,0)}}break}while(!0);Pi(t)}function Kg(t,n,r,o,u,h,S,C,j,he,Se,Te,pe,_e){if(t.timeoutHandle=-1,Te=n.subtreeFlags,Te&8192||(Te&16785408)===16785408){Te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Vg(n,h,Te);var Ke=(h&62914560)===h?$l-w():(h&4194048)===h?jg-w():0;if(Ke=xS(Te,Ke),Ke!==null){sa=h,t.cancelPendingCommit=Ke(a0.bind(null,t,n,h,r,o,u,S,C,j,Se,Te,null,pe,_e)),Ba(t,h,S,!he);return}}a0(t,n,h,r,o,u,S,C,j)}function Py(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!Qn(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(t,n,r,o){n&=~kf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Xe(u),S=1<<h;o[h]=-1,u&=~S}r!==0&&Zs(t,r,n)}function nc(){return(Bt&6)===0?(Do(0),!1):!0}function Yf(){if(Mt!==null){if(Gt===0)var t=Mt.return;else t=Mt,Zi=dr=null,uf(t),ns=null,fo=0,t=Mt;for(;t!==null;)wg(t.alternate,t),t=t.return;Mt=null}}function ds(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,tS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),sa=0,Yf(),Kt=t,Mt=r=qi(t.current,null),At=n,Gt=0,ti=null,La=!1,cs=Ze(t,n),Vf=!1,us=ni=kf=Sr=Oa=an=0,kn=Ro=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Xe(o),h=1<<u;n|=t[u],o&=~h}return ra=n,El(),r}function Qg(t,n){gt=null,F.H=yo,n===ts||n===Nl?(n=hm(),Gt=3):n===Qu?(n=hm(),Gt=4):Gt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ti=n,Mt===null&&(an=1,Xl(t,ui(n,t.current)))}function Jg(){var t=$n.current;return t===null?!0:(At&4194048)===At?pi===null:(At&62914560)===At||(At&536870912)!==0?t===pi:!1}function $g(){var t=F.H;return F.H=yo,t===null?yo:t}function e0(){var t=F.A;return F.A=Ly,t}function ic(){an=4,La||(At&4194048)!==At&&$n.current!==null||(cs=!0),(Oa&134217727)===0&&(Sr&134217727)===0||Kt===null||Ba(Kt,At,ni,!1)}function Zf(t,n,r){var o=Bt;Bt|=2;var u=$g(),h=e0();(Kt!==t||At!==n)&&(tc=null,ds(t,n)),n=!1;var S=an;e:do try{if(Gt!==0&&Mt!==null){var C=Mt,j=ti;switch(Gt){case 8:Yf(),S=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var he=Gt;if(Gt=0,ti=null,hs(t,C,j,he),r&&cs){S=0;break e}break;default:he=Gt,Gt=0,ti=null,hs(t,C,j,he)}}Iy(),S=an;break}catch(Se){Qg(t,Se)}while(!0);return n&&t.shellSuspendCounter++,Zi=dr=null,Bt=o,F.H=u,F.A=h,Mt===null&&(Kt=null,At=0,El()),S}function Iy(){for(;Mt!==null;)t0(Mt)}function By(t,n){var r=Bt;Bt|=2;var o=$g(),u=e0();Kt!==t||At!==n?(tc=null,ec=w()+500,ds(t,n)):cs=Ze(t,n);e:do try{if(Gt!==0&&Mt!==null){n=Mt;var h=ti;t:switch(Gt){case 1:Gt=0,ti=null,hs(t,n,h,1);break;case 2:case 9:if(fm(h)){Gt=0,ti=null,n0(n);break}n=function(){Gt!==2&&Gt!==9||Kt!==t||(Gt=7),Pi(t)},h.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:fm(h)?(Gt=0,ti=null,n0(n)):(Gt=0,ti=null,hs(t,n,h,7));break;case 5:var S=null;switch(Mt.tag){case 26:S=Mt.memoizedState;case 5:case 27:var C=Mt;if(S?G0(S):C.stateNode.complete){Gt=0,ti=null;var j=C.sibling;if(j!==null)Mt=j;else{var he=C.return;he!==null?(Mt=he,ac(he)):Mt=null}break t}}Gt=0,ti=null,hs(t,n,h,5);break;case 6:Gt=0,ti=null,hs(t,n,h,6);break;case 8:Yf(),an=6;break e;default:throw Error(a(462))}}zy();break}catch(Se){Qg(t,Se)}while(!0);return Zi=dr=null,F.H=o,F.A=u,Bt=r,Mt!==null?0:(Kt=null,At=0,El(),an)}function zy(){for(;Mt!==null&&!kt();)t0(Mt)}function t0(t){var n=Tg(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?ac(t):Mt=n}function n0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=xg(r,n,n.pendingProps,n.type,void 0,At);break;case 11:n=xg(r,n,n.pendingProps,n.type.render,n.ref,At);break;case 5:uf(n);default:wg(r,n),n=Mt=em(n,ra),n=Tg(r,n,ra)}t.memoizedProps=t.pendingProps,n===null?ac(t):Mt=n}function hs(t,n,r,o){Zi=dr=null,uf(n),ns=null,fo=0;var u=n.return;try{if(Ay(t,u,n,r,At)){an=1,Xl(t,ui(r,t.current)),Mt=null;return}}catch(h){if(u!==null)throw Mt=u,h;an=1,Xl(t,ui(r,t.current)),Mt=null;return}n.flags&32768?(Ct||o===1?t=!0:cs||(At&536870912)!==0?t=!1:(La=t=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),i0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){i0(n,La);return}t=n.return;var r=Cy(n.alternate,n,ra);if(r!==null){Mt=r;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);an===0&&(an=5)}function i0(t,n){do{var r=Dy(t.alternate,t);if(r!==null){r.flags&=32767,Mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=r}while(t!==null);an=6,Mt=null}function a0(t,n,r,o,u,h,S,C,j){t.cancelPendingCommit=null;do rc();while(vn!==0);if((Bt&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=Iu,li(t,r,h,S,C,j),t===Kt&&(Mt=Kt=null,At=0),fs=n,Ia=t,sa=r,Xf=h,jf=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vy(ye,function(){return c0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=F.T,F.T=null,u=Q.p,Q.p=2,S=Bt,Bt|=4;try{Ny(t,n,r)}finally{Bt=S,Q.p=u,F.T=o}}vn=1,r0(),s0(),o0()}}function r0(){if(vn===1){vn=0;var t=Ia,n=fs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=F.T,F.T=null;var o=Q.p;Q.p=2;var u=Bt;Bt|=4;try{Fg(n,t);var h=od,S=Xp(t.containerInfo),C=h.focusedElem,j=h.selectionRange;if(S!==C&&C&&C.ownerDocument&&Wp(C.ownerDocument.documentElement,C)){if(j!==null&&Nu(C)){var he=j.start,Se=j.end;if(Se===void 0&&(Se=he),"selectionStart"in C)C.selectionStart=he,C.selectionEnd=Math.min(Se,C.value.length);else{var Te=C.ownerDocument||document,pe=Te&&Te.defaultView||window;if(pe.getSelection){var _e=pe.getSelection(),Ke=C.textContent.length,ct=Math.min(j.start,Ke),jt=j.end===void 0?ct:Math.min(j.end,Ke);!_e.extend&&ct>jt&&(S=jt,jt=ct,ct=S);var ie=kp(C,ct),Z=kp(C,jt);if(ie&&Z&&(_e.rangeCount!==1||_e.anchorNode!==ie.node||_e.anchorOffset!==ie.offset||_e.focusNode!==Z.node||_e.focusOffset!==Z.offset)){var de=Te.createRange();de.setStart(ie.node,ie.offset),_e.removeAllRanges(),ct>jt?(_e.addRange(de),_e.extend(Z.node,Z.offset)):(de.setEnd(Z.node,Z.offset),_e.addRange(de))}}}}for(Te=[],_e=C;_e=_e.parentNode;)_e.nodeType===1&&Te.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Te.length;C++){var be=Te[C];be.element.scrollLeft=be.left,be.element.scrollTop=be.top}}vc=!!sd,od=sd=null}finally{Bt=u,Q.p=o,F.T=r}}t.current=n,vn=2}}function s0(){if(vn===2){vn=0;var t=Ia,n=fs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=F.T,F.T=null;var o=Q.p;Q.p=2;var u=Bt;Bt|=4;try{Og(t,n.alternate,n)}finally{Bt=u,Q.p=o,F.T=r}}vn=3}}function o0(){if(vn===4||vn===3){vn=0,G();var t=Ia,n=fs,r=sa,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,fs=Ia=null,l0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Pa=null),Fr(r),n=n.stateNode,Oe&&typeof Oe.onCommitFiberRoot=="function")try{Oe.onCommitFiberRoot(Ne,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=F.T,u=Q.p,Q.p=2,F.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var C=o[S];h(C.value,{componentStack:C.stack})}}finally{F.T=n,Q.p=u}}(sa&3)!==0&&rc(),Pi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===qf?Co++:(Co=0,qf=t):Co=0,Do(0)}}function l0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,co(n)))}function rc(){return r0(),s0(),o0(),c0()}function c0(){if(vn!==5)return!1;var t=Ia,n=Xf;Xf=0;var r=Fr(sa),o=F.T,u=Q.p;try{Q.p=32>r?32:r,F.T=null,r=jf,jf=null;var h=Ia,S=sa;if(vn=0,fs=Ia=null,sa=0,(Bt&6)!==0)throw Error(a(331));var C=Bt;if(Bt|=4,Wg(h.current),Gg(h,h.current,S,r),Bt=C,Do(0,!1),Oe&&typeof Oe.onPostCommitFiberRoot=="function")try{Oe.onPostCommitFiberRoot(Ne,h)}catch{}return!0}finally{Q.p=u,F.T=o,l0(t,n)}}function u0(t,n,r){n=ui(r,n),n=Tf(t.stateNode,n,2),t=Ca(t,n,2),t!==null&&(Pn(t,2),Pi(t))}function Vt(t,n,r){if(t.tag===3)u0(t,t,r);else for(;n!==null;){if(n.tag===3){u0(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){t=ui(r,t),r=fg(2),o=Ca(n,r,2),o!==null&&(dg(r,o,n,t),Pn(o,2),Pi(o));break}}n=n.return}}function Kf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Oy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Vf=!0,u.add(r),t=Fy.bind(null,t,n,r),n.then(t,t))}function Fy(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Kt===t&&(At&r)===r&&(an===4||an===3&&(At&62914560)===At&&300>w()-$l?(Bt&2)===0&&ds(t,0):kf|=r,us===At&&(us=0)),Pi(t)}function f0(t,n){n===0&&(n=Ht()),t=cr(t,n),t!==null&&(Pn(t,n),Pi(t))}function Hy(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),f0(t,r)}function Gy(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),f0(t,r)}function Vy(t,n){return at(t,n)}var sc=null,ps=null,Qf=!1,oc=!1,Jf=!1,za=0;function Pi(t){t!==ps&&t.next===null&&(ps===null?sc=ps=t:ps=ps.next=t),oc=!0,Qf||(Qf=!0,Wy())}function Do(t,n){if(!Jf&&oc){Jf=!0;do for(var r=!1,o=sc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,C=o.pingedLanes;h=(1<<31-Xe(42|t)+1)-1,h&=u&~(S&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,m0(o,h))}else h=At,h=Ae(o,o===Kt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ze(o,h)||(r=!0,m0(o,h));o=o.next}while(r);Jf=!1}}function ky(){d0()}function d0(){oc=Qf=!1;var t=0;za!==0&&eS()&&(t=za);for(var n=w(),r=null,o=sc;o!==null;){var u=o.next,h=h0(o,n);h===0?(o.next=null,r===null?sc=u:r.next=u,u===null&&(ps=r)):(r=o,(t!==0||(h&3)!==0)&&(oc=!0)),o=u}vn!==0&&vn!==5||Do(t),za!==0&&(za=0)}function h0(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Xe(h),C=1<<S,j=u[S];j===-1?((C&r)===0||(C&o)!==0)&&(u[S]=dt(C,n)):j<=n&&(t.expiredLanes|=C),h&=~C}if(n=Kt,r=At,r=Ae(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Yt(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ze(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&Yt(o),Fr(r)){case 2:case 8:r=Re;break;case 32:r=ye;break;case 268435456:r=Le;break;default:r=ye}return o=p0.bind(null,t),r=at(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&Yt(o),t.callbackPriority=2,t.callbackNode=null,2}function p0(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(rc()&&t.callbackNode!==r)return null;var o=At;return o=Ae(t,t===Kt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Zg(t,o,n),h0(t,w()),t.callbackNode!=null&&t.callbackNode===r?p0.bind(null,t):null)}function m0(t,n){if(rc())return null;Zg(t,n,!0)}function Wy(){nS(function(){(Bt&6)!==0?at(Me,ky):d0()})}function $f(){if(za===0){var t=$r;t===0&&(t=Ue,Ue<<=1,(Ue&261888)===0&&(Ue=256)),za=t}return za}function g0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function v0(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function Xy(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=g0((u[bn]||null).action),S=o.submitter;S&&(n=(n=S[bn]||null)?g0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var C=new xl("action","action",null,o,u);t.push({event:C,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(za!==0){var j=S?v0(u,S):new FormData(u);xf(r,{pending:!0,data:j,method:u.method,action:h},null,j)}}else typeof h=="function"&&(C.preventDefault(),j=S?v0(u,S):new FormData(u),xf(r,{pending:!0,data:j,method:u.method,action:h},h,j))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],jy=td.toLowerCase(),qy=td[0].toUpperCase()+td.slice(1);yi(jy,"on"+qy)}yi(Yp,"onAnimationEnd"),yi(Zp,"onAnimationIteration"),yi(Kp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(cy,"onTransitionRun"),yi(uy,"onTransitionStart"),yi(fy,"onTransitionCancel"),yi(Qp,"onTransitionEnd"),st("onMouseEnter",["mouseout","mouseover"]),st("onMouseLeave",["mouseout","mouseover"]),st("onPointerEnter",["pointerout","pointerover"]),st("onPointerLeave",["pointerout","pointerover"]),ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var No="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(No));function _0(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var C=o[S],j=C.instance,he=C.currentTarget;if(C=C.listener,j!==h&&u.isPropagationStopped())break e;h=C,u.currentTarget=he;try{h(u)}catch(Se){Ml(Se)}u.currentTarget=null,h=j}else for(S=0;S<o.length;S++){if(C=o[S],j=C.instance,he=C.currentTarget,C=C.listener,j!==h&&u.isPropagationStopped())break e;h=C,u.currentTarget=he;try{h(u)}catch(Se){Ml(Se)}u.currentTarget=null,h=j}}}}function Et(t,n){var r=n[Qs];r===void 0&&(r=n[Qs]=new Set);var o=t+"__bubble";r.has(o)||(x0(n,t,2,!1),r.add(o))}function nd(t,n,r){var o=0;n&&(o|=4),x0(r,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[lc]){t[lc]=!0,He.forEach(function(r){r!=="selectionchange"&&(Yy.has(r)||nd(r,!1,t),nd(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,nd("selectionchange",!1,n))}}function x0(t,n,r,o){switch(Y0(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=_d}r=u.bind(null,n,r,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function ad(t,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var C=o.stateNode.containerInfo;if(C===u)break;if(S===4)for(S=o.return;S!==null;){var j=S.tag;if((j===3||j===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;C!==null;){if(S=ne(C),S===null)return;if(j=S.tag,j===5||j===6||j===26||j===27){o=h=S;continue e}C=C.parentNode}}o=o.return}bp(function(){var he=h,Se=yu(r),Te=[];e:{var pe=Jp.get(t);if(pe!==void 0){var _e=xl,Ke=t;switch(t){case"keypress":if(vl(r)===0)break e;case"keydown":case"keyup":_e=Gx;break;case"focusin":Ke="focus",_e=Au;break;case"focusout":Ke="blur",_e=Au;break;case"beforeblur":case"afterblur":_e=Au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=Wx;break;case Yp:case Zp:case Kp:_e=Ux;break;case Qp:_e=jx;break;case"scroll":case"scrollend":_e=wx;break;case"wheel":_e=Yx;break;case"copy":case"cut":case"paste":_e=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=Cp;break;case"toggle":case"beforetoggle":_e=Kx}var ct=(n&4)!==0,jt=!ct&&(t==="scroll"||t==="scrollend"),ie=ct?pe!==null?pe+"Capture":null:pe;ct=[];for(var Z=he,de;Z!==null;){var be=Z;if(de=be.stateNode,be=be.tag,be!==5&&be!==26&&be!==27||de===null||ie===null||(be=Js(Z,ie),be!=null&&ct.push(Uo(Z,be,de))),jt)break;Z=Z.return}0<ct.length&&(pe=new _e(pe,Ke,null,r,Se),Te.push({event:pe,listeners:ct}))}}if((n&7)===0){e:{if(pe=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",pe&&r!==xu&&(Ke=r.relatedTarget||r.fromElement)&&(ne(Ke)||Ke[Sa]))break e;if((_e||pe)&&(pe=Se.window===Se?Se:(pe=Se.ownerDocument)?pe.defaultView||pe.parentWindow:window,_e?(Ke=r.relatedTarget||r.toElement,_e=he,Ke=Ke?ne(Ke):null,Ke!==null&&(jt=c(Ke),ct=Ke.tag,Ke!==jt||ct!==5&&ct!==27&&ct!==6)&&(Ke=null)):(_e=null,Ke=he),_e!==Ke)){if(ct=wp,be="onMouseLeave",ie="onMouseEnter",Z="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Cp,be="onPointerLeave",ie="onPointerEnter",Z="pointer"),jt=_e==null?pe:ve(_e),de=Ke==null?pe:ve(Ke),pe=new ct(be,Z+"leave",_e,r,Se),pe.target=jt,pe.relatedTarget=de,be=null,ne(Se)===he&&(ct=new ct(ie,Z+"enter",Ke,r,Se),ct.target=de,ct.relatedTarget=jt,be=ct),jt=be,_e&&Ke)t:{for(ct=Zy,ie=_e,Z=Ke,de=0,be=ie;be;be=ct(be))de++;be=0;for(var lt=Z;lt;lt=ct(lt))be++;for(;0<de-be;)ie=ct(ie),de--;for(;0<be-de;)Z=ct(Z),be--;for(;de--;){if(ie===Z||Z!==null&&ie===Z.alternate){ct=ie;break t}ie=ct(ie),Z=ct(Z)}ct=null}else ct=null;_e!==null&&y0(Te,pe,_e,ct,!1),Ke!==null&&jt!==null&&y0(Te,jt,Ke,ct,!0)}}e:{if(pe=he?ve(he):window,_e=pe.nodeName&&pe.nodeName.toLowerCase(),_e==="select"||_e==="input"&&pe.type==="file")var Lt=Bp;else if(Pp(pe))if(zp)Lt=sy;else{Lt=ay;var it=iy}else _e=pe.nodeName,!_e||_e.toLowerCase()!=="input"||pe.type!=="checkbox"&&pe.type!=="radio"?he&&_u(he.elementType)&&(Lt=Bp):Lt=ry;if(Lt&&(Lt=Lt(t,he))){Ip(Te,Lt,r,Se);break e}it&&it(t,pe,he),t==="focusout"&&he&&pe.type==="number"&&he.memoizedProps.value!=null&&gn(pe,"number",pe.value)}switch(it=he?ve(he):window,t){case"focusin":(Pp(it)||it.contentEditable==="true")&&(Xr=it,Uu=he,so=null);break;case"focusout":so=Uu=Xr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,jp(Te,r,Se);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":jp(Te,r,Se)}var vt;if(Ru)e:{switch(t){case"compositionstart":var wt="onCompositionStart";break e;case"compositionend":wt="onCompositionEnd";break e;case"compositionupdate":wt="onCompositionUpdate";break e}wt=void 0}else Wr?Lp(t,r)&&(wt="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(wt="onCompositionStart");wt&&(Dp&&r.locale!=="ko"&&(Wr||wt!=="onCompositionStart"?wt==="onCompositionEnd"&&Wr&&(vt=Tp()):(Ma=Se,Eu="value"in Ma?Ma.value:Ma.textContent,Wr=!0)),it=cc(he,wt),0<it.length&&(wt=new Rp(wt,t,null,r,Se),Te.push({event:wt,listeners:it}),vt?wt.data=vt:(vt=Op(r),vt!==null&&(wt.data=vt)))),(vt=Jx?$x(t,r):ey(t,r))&&(wt=cc(he,"onBeforeInput"),0<wt.length&&(it=new Rp("onBeforeInput","beforeinput",null,r,Se),Te.push({event:it,listeners:wt}),it.data=vt)),Xy(Te,t,he,r,Se)}_0(Te,n)})}function Uo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function cc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Js(t,r),u!=null&&o.unshift(Uo(t,u,h)),u=Js(t,n),u!=null&&o.push(Uo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Zy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y0(t,n,r,o,u){for(var h=n._reactName,S=[];r!==null&&r!==o;){var C=r,j=C.alternate,he=C.stateNode;if(C=C.tag,j!==null&&j===o)break;C!==5&&C!==26&&C!==27||he===null||(j=he,u?(he=Js(r,h),he!=null&&S.unshift(Uo(r,he,j))):u||(he=Js(r,h),he!=null&&S.push(Uo(r,he,j)))),r=r.return}S.length!==0&&t.push({event:n,listeners:S})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function S0(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Qy,"")}function M0(t,n){return n=S0(n),S0(t)===n}function Xt(t,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gr(t,""+o);break;case"className":Ft(t,"class",o);break;case"tabIndex":Ft(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(t,r,o);break;case"style":Mp(t,o,h);break;case"data":if(n!=="object"){Ft(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ml(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&Xt(t,n,"name",u.name,u,null),Xt(t,n,"formEncType",u.formEncType,u,null),Xt(t,n,"formMethod",u.formMethod,u,null),Xt(t,n,"formTarget",u.formTarget,u,null)):(Xt(t,n,"encType",u.encType,u,null),Xt(t,n,"method",u.method,u,null),Xt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ml(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Xi);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=ml(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),Zt(t,"popover",o);break;case"xlinkActuate":St(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":St(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":St(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":St(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":St(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":St(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":St(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":St(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":St(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Zt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Tx.get(r)||r,Zt(t,r,o))}}function rd(t,n,r,o,u,h){switch(r){case"style":Mp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&Gr(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Je.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=t[bn]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):Zt(t,r,o)}}}function Cn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var S=r[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xt(t,n,h,S,r,null)}}u&&Xt(t,n,"srcSet",r.srcSet,r,null),o&&Xt(t,n,"src",r.src,r,null);return;case"input":Et("invalid",t);var C=h=S=u=null,j=null,he=null;for(o in r)if(r.hasOwnProperty(o)){var Se=r[o];if(Se!=null)switch(o){case"name":u=Se;break;case"type":S=Se;break;case"checked":j=Se;break;case"defaultChecked":he=Se;break;case"value":h=Se;break;case"defaultValue":C=Se;break;case"children":case"dangerouslySetInnerHTML":if(Se!=null)throw Error(a(137,n));break;default:Xt(t,n,o,Se,r,null)}}In(t,h,C,j,he,S,u,!1);return;case"select":Et("invalid",t),o=S=h=null;for(u in r)if(r.hasOwnProperty(u)&&(C=r[u],C!=null))switch(u){case"value":h=C;break;case"defaultValue":S=C;break;case"multiple":o=C;default:Xt(t,n,u,C,r,null)}n=h,r=S,t.multiple=!!o,n!=null?on(t,!!o,n,!1):r!=null&&on(t,!!o,r,!0);return;case"textarea":Et("invalid",t),h=u=o=null;for(S in r)if(r.hasOwnProperty(S)&&(C=r[S],C!=null))switch(S){case"value":o=C;break;case"defaultValue":u=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(a(91));break;default:Xt(t,n,S,C,r,null)}Ni(t,o,u,h);return;case"option":for(j in r)if(r.hasOwnProperty(j)&&(o=r[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(t,n,j,o,r,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<No.length;o++)Et(No[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(he in r)if(r.hasOwnProperty(he)&&(o=r[he],o!=null))switch(he){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Xt(t,n,he,o,r,null)}return;default:if(_u(n)){for(Se in r)r.hasOwnProperty(Se)&&(o=r[Se],o!==void 0&&rd(t,n,Se,o,r,void 0));return}}for(C in r)r.hasOwnProperty(C)&&(o=r[C],o!=null&&Xt(t,n,C,o,r,null))}function Jy(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,C=null,j=null,he=null,Se=null;for(_e in r){var Te=r[_e];if(r.hasOwnProperty(_e)&&Te!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":j=Te;default:o.hasOwnProperty(_e)||Xt(t,n,_e,null,o,Te)}}for(var pe in o){var _e=o[pe];if(Te=r[pe],o.hasOwnProperty(pe)&&(_e!=null||Te!=null))switch(pe){case"type":h=_e;break;case"name":u=_e;break;case"checked":he=_e;break;case"defaultChecked":Se=_e;break;case"value":S=_e;break;case"defaultValue":C=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,n));break;default:_e!==Te&&Xt(t,n,pe,_e,o,Te)}}Nn(t,S,C,j,he,Se,h,u);return;case"select":_e=S=C=pe=null;for(h in r)if(j=r[h],r.hasOwnProperty(h)&&j!=null)switch(h){case"value":break;case"multiple":_e=j;default:o.hasOwnProperty(h)||Xt(t,n,h,null,o,j)}for(u in o)if(h=o[u],j=r[u],o.hasOwnProperty(u)&&(h!=null||j!=null))switch(u){case"value":pe=h;break;case"defaultValue":C=h;break;case"multiple":S=h;default:h!==j&&Xt(t,n,u,h,o,j)}n=C,r=S,o=_e,pe!=null?on(t,!!r,pe,!1):!!o!=!!r&&(n!=null?on(t,!!r,n,!0):on(t,!!r,r?[]:"",!1));return;case"textarea":_e=pe=null;for(C in r)if(u=r[C],r.hasOwnProperty(C)&&u!=null&&!o.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Xt(t,n,C,null,o,u)}for(S in o)if(u=o[S],h=r[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":pe=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&Xt(t,n,S,u,o,h)}Hr(t,pe,_e);return;case"option":for(var Ke in r)if(pe=r[Ke],r.hasOwnProperty(Ke)&&pe!=null&&!o.hasOwnProperty(Ke))switch(Ke){case"selected":t.selected=!1;break;default:Xt(t,n,Ke,null,o,pe)}for(j in o)if(pe=o[j],_e=r[j],o.hasOwnProperty(j)&&pe!==_e&&(pe!=null||_e!=null))switch(j){case"selected":t.selected=pe&&typeof pe!="function"&&typeof pe!="symbol";break;default:Xt(t,n,j,pe,o,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in r)pe=r[ct],r.hasOwnProperty(ct)&&pe!=null&&!o.hasOwnProperty(ct)&&Xt(t,n,ct,null,o,pe);for(he in o)if(pe=o[he],_e=r[he],o.hasOwnProperty(he)&&pe!==_e&&(pe!=null||_e!=null))switch(he){case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(a(137,n));break;default:Xt(t,n,he,pe,o,_e)}return;default:if(_u(n)){for(var jt in r)pe=r[jt],r.hasOwnProperty(jt)&&pe!==void 0&&!o.hasOwnProperty(jt)&&rd(t,n,jt,void 0,o,pe);for(Se in o)pe=o[Se],_e=r[Se],!o.hasOwnProperty(Se)||pe===_e||pe===void 0&&_e===void 0||rd(t,n,Se,pe,o,_e);return}}for(var ie in r)pe=r[ie],r.hasOwnProperty(ie)&&pe!=null&&!o.hasOwnProperty(ie)&&Xt(t,n,ie,null,o,pe);for(Te in o)pe=o[Te],_e=r[Te],!o.hasOwnProperty(Te)||pe===_e||pe==null&&_e==null||Xt(t,n,Te,pe,o,_e)}function E0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],h=u.transferSize,S=u.initiatorType,C=u.duration;if(h&&C&&E0(S)){for(S=0,C=u.responseEnd,o+=1;o<r.length;o++){var j=r[o],he=j.startTime;if(he>C)break;var Se=j.transferSize,Te=j.initiatorType;Se&&E0(Te)&&(j=j.responseEnd,S+=Se*(j<C?1:(C-he)/(j-he)))}if(--o,n+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,od=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function b0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function eS(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(iS)}:A0;function iS(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function R0(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),_s(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Lo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Lo(r);for(var h=r.firstChild;h;){var S=h.nextSibling,C=h.nodeName;h[ar]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=S}}else r==="body"&&Lo(t.ownerDocument.body);r=u}while(r);_s(n)}function C0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ud(r),D(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function aS(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function rS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=mi(t.nextSibling),t===null))return null;return t}function D0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sS(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function N0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return mi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function L0(t,n,r){switch(n=uc(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Lo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);D(t)}var gi=new Map,O0=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=Q.d;Q.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:dS,X:pS,S:hS,M:mS};function oS(){var t=oa.f(),n=nc();return t||n}function lS(t){var n=me(t);n!==null&&n.tag===5&&n.type==="form"?Qm(n):oa.r(t)}var ms=typeof document>"u"?null:document;function P0(t,n,r){var o=ms;if(o&&typeof n=="string"&&n){var u=Tt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),O0.has(u)||(O0.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Cn(n,"link",t),we(n),o.head.appendChild(n)))}}function cS(t){oa.D(t),P0("dns-prefetch",t,null)}function uS(t,n){oa.C(t,n),P0("preconnect",t,n)}function fS(t,n,r){oa.L(t,n,r);var o=ms;if(o&&t&&n){var u='link[rel="preload"][as="'+Tt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+Tt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+Tt(r.imageSizes)+'"]')):u+='[href="'+Tt(t)+'"]';var h=u;switch(n){case"style":h=gs(t);break;case"script":h=vs(t)}gi.has(h)||(t=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),gi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Oo(h))||n==="script"&&o.querySelector(Po(h))||(n=o.createElement("link"),Cn(n,"link",t),we(n),o.head.appendChild(n)))}}function dS(t,n){oa.m(t,n);var r=ms;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Tt(o)+'"][href="'+Tt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=vs(t)}if(!gi.has(h)&&(t=v({rel:"modulepreload",href:t},n),gi.set(h,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Po(h)))return}o=r.createElement("link"),Cn(o,"link",t),we(o),r.head.appendChild(o)}}}function hS(t,n,r){oa.S(t,n,r);var o=ms;if(o&&t){var u=ae(o).hoistableStyles,h=gs(t);n=n||"default";var S=u.get(h);if(!S){var C={loading:0,preload:null};if(S=o.querySelector(Oo(h)))C.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},r),(r=gi.get(h))&&pd(t,r);var j=S=o.createElement("link");we(j),Cn(j,"link",t),j._p=new Promise(function(he,Se){j.onload=he,j.onerror=Se}),j.addEventListener("load",function(){C.loading|=1}),j.addEventListener("error",function(){C.loading|=2}),C.loading|=4,dc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:C},u.set(h,S)}}}function pS(t,n){oa.X(t,n);var r=ms;if(r&&t){var o=ae(r).hoistableScripts,u=vs(t),h=o.get(u);h||(h=r.querySelector(Po(u)),h||(t=v({src:t,async:!0},n),(n=gi.get(u))&&md(t,n),h=r.createElement("script"),we(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function mS(t,n){oa.M(t,n);var r=ms;if(r&&t){var o=ae(r).hoistableScripts,u=vs(t),h=o.get(u);h||(h=r.querySelector(Po(u)),h||(t=v({src:t,async:!0,type:"module"},n),(n=gi.get(u))&&md(t,n),h=r.createElement("script"),we(h),Cn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function I0(t,n,r,o){var u=(u=T.current)?fc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=gs(r.href),r=ae(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=gs(r.href);var h=ae(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector(Oo(t)))&&!h._p&&(S.instance=h,S.state.loading=5),gi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(t,r),h||gS(u,t,r,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(r),r=ae(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function gs(t){return'href="'+Tt(t)+'"'}function Oo(t){return'link[rel="stylesheet"]['+t+"]"}function B0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",r),we(n),t.head.appendChild(n))}function vs(t){return'[src="'+Tt(t)+'"]'}function Po(t){return"script[async]"+t}function z0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+Tt(r.href)+'"]');if(o)return n.instance=o,we(o),o;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),we(o),Cn(o,"style",u),dc(o,r.precedence,t),n.instance=o;case"stylesheet":u=gs(r.href);var h=t.querySelector(Oo(u));if(h)return n.state.loading|=4,n.instance=h,we(h),h;o=B0(r),(u=gi.get(u))&&pd(o,u),h=(t.ownerDocument||t).createElement("link"),we(h);var S=h;return S._p=new Promise(function(C,j){S.onload=C,S.onerror=j}),Cn(h,"link",o),n.state.loading|=4,dc(h,r.precedence,t),n.instance=h;case"script":return h=vs(r.src),(u=t.querySelector(Po(h)))?(n.instance=u,we(u),u):(o=r,(u=gi.get(h))&&(o=v({},r),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),we(u),Cn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,r.precedence,t));return n.instance}function dc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var C=o[S];if(C.dataset.precedence===n)h=C;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function F0(t,n,r){if(hc===null){var o=new Map,u=hc=new Map;u.set(r,o)}else u=hc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var h=r[u];if(!(h[ar]||h[un]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var C=o.get(S);C?C.push(h):o.set(S,[h])}}return o}function H0(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function vS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _S(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=gs(o.href),h=n.querySelector(Oo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=h,we(h);return}h=n.ownerDocument||n,o=B0(o),(u=gi.get(u))&&pd(o,u),h=h.createElement("link"),we(h);var S=h;S._p=new Promise(function(C,j){S.onload=C,S.onerror=j}),Cn(h,"link",o),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=pc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var gd=0;function xS(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*$y());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(yS,t),mc=null,pc.call(t))}function yS(t,n){if(!(n.state.loading&4)){var r=mc.get(t);if(r)var o=r.get(null);else{r=new Map,mc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=r.get(S)||o,h===o&&r.set(null,u),r.set(S,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Io={$$typeof:P,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function SS(t,n,r,o,u,h,S,C,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function V0(t,n,r,o,u,h,S,C,j,he,Se,Te){return t=new SS(t,n,r,S,j,he,Se,Te,C),n=1,h===!0&&(n|=24),h=Jn(3,null,null,n),t.current=h,h.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Ju(h),t}function k0(t){return t?(t=Yr,t):Yr}function W0(t,n,r,o,u,h){u=k0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ca(t,o,n),r!==null&&(Wn(r,t,n),po(r,t,n))}function X0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function vd(t,n){X0(t,n),(t=t.alternate)&&X0(t,n)}function j0(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&Wn(n,t,67108864),vd(t,67108864)}}function q0(t){if(t.tag===13||t.tag===31){var n=ii();n=zr(n);var r=cr(t,n);r!==null&&Wn(r,t,n),vd(t,n)}}var vc=!0;function MS(t,n,r,o){var u=F.T;F.T=null;var h=Q.p;try{Q.p=2,_d(t,n,r,o)}finally{Q.p=h,F.T=u}}function ES(t,n,r,o){var u=F.T;F.T=null;var h=Q.p;try{Q.p=8,_d(t,n,r,o)}finally{Q.p=h,F.T=u}}function _d(t,n,r,o){if(vc){var u=xd(o);if(u===null)ad(t,n,o,_c,r),Z0(t,o);else if(TS(u,t,n,r,o))o.stopPropagation();else if(Z0(t,o),n&4&&-1<bS.indexOf(t)){for(;u!==null;){var h=me(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=De(h.pendingLanes);if(S!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var j=1<<31-Xe(S);C.entanglements[1]|=j,S&=~j}Pi(h),(Bt&6)===0&&(ec=w()+500,Do(0))}}break;case 31:case 13:C=cr(h,2),C!==null&&Wn(C,h,2),nc(),vd(h,2)}if(h=xd(o),h===null&&ad(t,n,o,_c,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else ad(t,n,o,null,r)}}function xd(t){return t=yu(t),yd(t)}var _c=null;function yd(t){if(_c=null,t=ne(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _c=t,null}function Y0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fe()){case Me:return 2;case Re:return 8;case ye:case tt:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Sd=!1,Ha=null,Ga=null,Va=null,Bo=new Map,zo=new Map,ka=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Fo(t,n,r,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=me(n),n!==null&&j0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function TS(t,n,r,o,u){switch(n){case"focusin":return Ha=Fo(Ha,t,n,r,o,u),!0;case"dragenter":return Ga=Fo(Ga,t,n,r,o,u),!0;case"mouseover":return Va=Fo(Va,t,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return Bo.set(h,Fo(Bo.get(h)||null,t,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,zo.set(h,Fo(zo.get(h)||null,t,n,r,o,u)),!0}return!1}function K0(t){var n=ne(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,Ks(t.priority,function(){q0(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,Ks(t.priority,function(){q0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=xd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);xu=o,r.target.dispatchEvent(o),xu=null}else return n=me(r),n!==null&&j0(n),t.blockedOn=r,!1;n.shift()}return!0}function Q0(t,n,r){xc(t)&&r.delete(n)}function AS(){Sd=!1,Ha!==null&&xc(Ha)&&(Ha=null),Ga!==null&&xc(Ga)&&(Ga=null),Va!==null&&xc(Va)&&(Va=null),Bo.forEach(Q0),zo.forEach(Q0)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,Sd||(Sd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,AS)))}var Sc=null;function J0(t){Sc!==t&&(Sc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yd(o||r)===null)continue;break}var h=me(r);h!==null&&(t.splice(n,3),n-=3,xf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function _s(t){function n(j){return yc(j,t)}Ha!==null&&yc(Ha,t),Ga!==null&&yc(Ga,t),Va!==null&&yc(Va,t),Bo.forEach(n),zo.forEach(n);for(var r=0;r<ka.length;r++){var o=ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ka.length&&(r=ka[0],r.blockedOn===null);)K0(r),r.blockedOn===null&&ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],S=u[bn]||null;if(typeof h=="function")S||J0(r);else if(S){var C=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[bn]||null)C=S.formAction;else if(yd(u)!==null)continue}else C=S.action;typeof C=="function"?r[o+1]=C:(r.splice(o,3),o-=3),J0(r)}}}function $0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(t){this._internalRoot=t}Mc.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=ii();W0(r,o,t,n,null,null)},Mc.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;W0(t.current,2,null,t,null,null),nc(),n[Sa]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ir();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ka.length&&n!==0&&n<ka[r].priority;r++);ka.splice(r,0,t),r===0&&K0(t)}};var ev=e.version;if(ev!=="19.2.0")throw Error(a(527,ev,"19.2.0"));Q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Ne=Ec.inject(wS),Oe=Ec}catch{}}return Go.createRoot=function(t,n){if(!l(t))throw Error(a(299));var r=!1,o="",u=og,h=lg,S=cg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=V0(t,1,!1,null,null,r,o,null,u,h,S,$0),t[Sa]=n.current,id(t),new Md(n)},Go.hydrateRoot=function(t,n,r){if(!l(t))throw Error(a(299));var o=!1,u="",h=og,S=lg,C=cg,j=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(C=r.onRecoverableError),r.formState!==void 0&&(j=r.formState)),n=V0(t,1,!0,n,r??null,o,u,j,h,S,C,$0),n.context=k0(null),r=n.current,o=ii(),o=zr(o),u=Ra(o),u.callback=null,Ca(r,u,o),r=o,n.current.lanes=r,Pn(n,r),Pi(n),t[Sa]=n.current,id(t),new Mc(n)},Go.version="19.2.0",Go}var uv;function zS(){if(uv)return Td.exports;uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Td.exports=BS(),Td.exports}var FS=zS();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fv="popstate";function HS(s={}){function e(a,l){let{pathname:c,search:f,hash:d}=a.location;return fh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(a,l){return typeof l=="string"?l:Jo(l)}return VS(e,i,null,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Hi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GS(){return Math.random().toString(36).substring(2,10)}function dv(s,e){return{usr:s.state,key:s.key,idx:e}}function fh(s,e,i=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Ws(e):e,state:i,key:e&&e.key||a||GS()}}function Jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Ws(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function VS(s,e,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,f=l.history,d="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let x=g(),_=x==null?null:x-m;m=x,p&&p({action:d,location:A.location,delta:_})}function y(x,_){d="PUSH";let O=fh(A.location,x,_);m=g()+1;let P=dv(O,m),R=A.createHref(O);try{f.pushState(P,"",R)}catch(H){if(H instanceof DOMException&&H.name==="DataCloneError")throw H;l.location.assign(R)}c&&p&&p({action:d,location:A.location,delta:1})}function E(x,_){d="REPLACE";let O=fh(A.location,x,_);m=g();let P=dv(O,m),R=A.createHref(O);f.replaceState(P,"",R),c&&p&&p({action:d,location:A.location,delta:0})}function b(x){return kS(x)}let A={get action(){return d},get location(){return s(l,f)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(fv,v),p=x,()=>{l.removeEventListener(fv,v),p=null}},createHref(x){return e(l,x)},createURL:b,encodeLocation(x){let _=b(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(x){return f.go(x)}};return A}function kS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:Jo(s);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function m_(s,e,i="/"){return WS(s,e,i,!1)}function WS(s,e,i,a){let l=typeof e=="string"?Ws(e):e,c=_a(l.pathname||"/",i);if(c==null)return null;let f=g_(s);XS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=nM(c);d=eM(f[p],m,a)}return d}function g_(s,e=[],i=[],a="",l=!1){let c=(f,d,p=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&p)return;tn(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=ga([a,g.relativePath]),y=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),g_(f.children,e,y,v,p)),!(f.path==null&&!f.index)&&e.push({path:v,score:JS(v,f.index),routesMeta:y})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let p of v_(f.path))c(f,d,!0,p)}),e}function v_(s){let e=s.split("/");if(e.length===0)return[];let[i,...a]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let f=v_(a.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function XS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:$S(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var jS=/^:[\w-]+$/,qS=3,YS=2,ZS=1,KS=10,QS=-2,hv=s=>s==="*";function JS(s,e){let i=s.split("/"),a=i.length;return i.some(hv)&&(a+=QS),e&&(a+=YS),i.filter(l=>!hv(l)).reduce((l,c)=>l+(jS.test(c)?qS:c===""?ZS:KS),a)}function $S(s,e){return s.length===e.length&&s.slice(0,-1).every((a,l)=>a===e[l])?s[s.length-1]-e[e.length-1]:0}function eM(s,e,i=!1){let{routesMeta:a}=s,l={},c="/",f=[];for(let d=0;d<a.length;++d){let p=a[d],m=d===a.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!v&&m&&i&&!a[a.length-1].route.index&&(v=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ga([c,v.pathname]),pathnameBase:sM(ga([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=ga([c,v.pathnameBase]))}return f}function iu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,a]=tM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=d[y]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const E=d[y];return v&&!E?m[g]=void 0:m[g]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:s}}function tM(s,e=!1,i=!0){Hi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function nM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function _a(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=s.charAt(i);return a&&a!=="/"?null:s.slice(i)||"/"}function iM(s,e="/"){let{pathname:i,search:a="",hash:l=""}=typeof s=="string"?Ws(s):s;return{pathname:i?i.startsWith("/")?i:aM(i,e):e,search:oM(a),hash:lM(l)}}function aM(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Cd(s,e,i,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function __(s){let e=rM(s);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function x_(s,e,i,a=!1){let l;typeof s=="string"?l=Ws(s):(l={...s},tn(!l.pathname||!l.pathname.includes("?"),Cd("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),Cd("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),Cd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!a&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?e[v]:"/"}let p=iM(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ga=s=>s.join("/").replace(/\/\/+/g,"/"),sM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),oM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,lM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function cM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var uM=["GET",...y_];new Set(uM);var Xs=q.createContext(null);Xs.displayName="DataRouter";var cu=q.createContext(null);cu.displayName="DataRouterState";q.createContext(!1);var S_=q.createContext({isTransitioning:!1});S_.displayName="ViewTransition";var fM=q.createContext(new Map);fM.displayName="Fetchers";var dM=q.createContext(null);dM.displayName="Await";var ki=q.createContext(null);ki.displayName="Navigation";var al=q.createContext(null);al.displayName="Location";var xa=q.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var rp=q.createContext(null);rp.displayName="RouteError";function hM(s,{relative:e}={}){tn(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=q.useContext(ki),{hash:l,pathname:c,search:f}=ol(s,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:ga([i,c])),a.createHref({pathname:d,search:f,hash:l})}function rl(){return q.useContext(al)!=null}function ya(){return tn(rl(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(al).location}var M_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E_(s){q.useContext(ki).static||q.useLayoutEffect(s)}function sl(){let{isDataRoute:s}=q.useContext(xa);return s?AM():pM()}function pM(){tn(rl(),"useNavigate() may be used only in the context of a <Router> component.");let s=q.useContext(Xs),{basename:e,navigator:i}=q.useContext(ki),{matches:a}=q.useContext(xa),{pathname:l}=ya(),c=JSON.stringify(__(a)),f=q.useRef(!1);return E_(()=>{f.current=!0}),q.useCallback((p,m={})=>{if(Hi(f.current,M_),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=x_(p,JSON.parse(c),l,m.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ga([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,c,l,s])}q.createContext(null);function ol(s,{relative:e}={}){let{matches:i}=q.useContext(xa),{pathname:a}=ya(),l=JSON.stringify(__(i));return q.useMemo(()=>x_(s,JSON.parse(l),a,e==="path"),[s,l,a,e])}function mM(s,e){return b_(s,e)}function b_(s,e,i,a,l){tn(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=q.useContext(ki),{matches:f}=q.useContext(xa),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let O=v&&v.path||"";T_(m,!v||O.endsWith("*")||O.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${O}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${O}"> to <Route path="${O==="/"?"*":`${O}/*`}">.`)}let y=ya(),E;if(e){let O=typeof e=="string"?Ws(e):e;tn(g==="/"||O.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${O.pathname}" was given in the \`location\` prop.`),E=O}else E=y;let b=E.pathname||"/",A=b;if(g!=="/"){let O=g.replace(/^\//,"").split("/");A="/"+b.replace(/^\//,"").split("/").slice(O.length).join("/")}let x=m_(s,{pathname:A});Hi(v||x!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Hi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=yM(x&&x.map(O=>Object.assign({},O,{params:Object.assign({},p,O.params),pathname:ga([g,c.encodeLocation?c.encodeLocation(O.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathname]),pathnameBase:O.pathnameBase==="/"?g:ga([g,c.encodeLocation?c.encodeLocation(O.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:O.pathnameBase])})),f,i,a,l);return e&&_?q.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},_):_}function gM(){let s=TM(),e=cM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),i?q.createElement("pre",{style:l},i):null,f)}var vM=q.createElement(gM,null),_M=class extends q.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?q.createElement(xa.Provider,{value:this.props.routeContext},q.createElement(rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xM({routeContext:s,match:e,children:i}){let a=q.useContext(Xs);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(xa.Provider,{value:s},i)}function yM(s,e=[],i=null,a=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let m=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);tn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let d=!1,p=-1;if(i)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:v,errors:y}=i,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||E){d=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,g,v)=>{let y,E=!1,b=null,A=null;i&&(y=f&&g.route.id?f[g.route.id]:void 0,b=g.route.errorElement||vM,d&&(p<0&&v===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,A=null):p===v&&(E=!0,A=g.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,v+1)),_=()=>{let O;return y?O=b:E?O=A:g.route.Component?O=q.createElement(g.route.Component,null):g.route.element?O=g.route.element:O=m,q.createElement(xM,{match:g,routeContext:{outlet:m,matches:x,isDataRoute:i!=null},children:O})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(_M,{location:i.location,revalidation:i.revalidation,component:b,error:y,children:_(),routeContext:{outlet:null,matches:x,isDataRoute:!0},unstable_onError:a}):_()},null)}function sp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SM(s){let e=q.useContext(Xs);return tn(e,sp(s)),e}function MM(s){let e=q.useContext(cu);return tn(e,sp(s)),e}function EM(s){let e=q.useContext(xa);return tn(e,sp(s)),e}function op(s){let e=EM(s),i=e.matches[e.matches.length-1];return tn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function bM(){return op("useRouteId")}function TM(){let s=q.useContext(rp),e=MM("useRouteError"),i=op("useRouteError");return s!==void 0?s:e.errors?.[i]}function AM(){let{router:s}=SM("useNavigate"),e=op("useNavigate"),i=q.useRef(!1);return E_(()=>{i.current=!0}),q.useCallback(async(l,c={})=>{Hi(i.current,M_),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var pv={};function T_(s,e,i){!e&&!pv[s]&&(pv[s]=!0,Hi(!1,i))}q.memo(wM);function wM({routes:s,future:e,state:i,unstable_onError:a}){return b_(s,void 0,i,a,e)}function Zc(s){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function RM({basename:s="/",children:e=null,location:i,navigationType:a="POP",navigator:l,static:c=!1}){tn(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Ws(i));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=i,E=q.useMemo(()=>{let b=_a(p,f);return b==null?null:{location:{pathname:b,search:m,hash:g,state:v,key:y},navigationType:a}},[f,p,m,g,v,y,a]);return Hi(E!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:q.createElement(ki.Provider,{value:d},q.createElement(al.Provider,{children:e,value:E}))}function CM({children:s,location:e}){return mM(dh(s),e)}function dh(s,e=[]){let i=[];return q.Children.forEach(s,(a,l)=>{if(!q.isValidElement(a))return;let c=[...e,l];if(a.type===q.Fragment){i.push.apply(i,dh(a.props.children,c));return}tn(a.type===Zc,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=dh(a.props.children,c)),i.push(f)}),i}var Kc="get",Qc="application/x-www-form-urlencoded";function uu(s){return s!=null&&typeof s.tagName=="string"}function DM(s){return uu(s)&&s.tagName.toLowerCase()==="button"}function NM(s){return uu(s)&&s.tagName.toLowerCase()==="form"}function UM(s){return uu(s)&&s.tagName.toLowerCase()==="input"}function LM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function OM(s,e){return s.button===0&&(!e||e==="_self")&&!LM(s)}var bc=null;function PM(){if(bc===null)try{new FormData(document.createElement("form"),0),bc=!1}catch{bc=!0}return bc}var IM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dd(s){return s!=null&&!IM.has(s)?(Hi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qc}"`),null):s}function BM(s,e){let i,a,l,c,f;if(NM(s)){let d=s.getAttribute("action");a=d?_a(d,e):null,i=s.getAttribute("method")||Kc,l=Dd(s.getAttribute("enctype"))||Qc,c=new FormData(s)}else if(DM(s)||UM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||d.getAttribute("action");if(a=p?_a(p,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Kc,l=Dd(s.getAttribute("formenctype"))||Dd(d.getAttribute("enctype"))||Qc,c=new FormData(d,s),!PM()){let{name:m,type:g,value:v}=s;if(g==="image"){let y=m?`${m}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else m&&c.append(m,v)}}else{if(uu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Kc,a=null,l=Qc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function zM(s,e,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${i}`:e&&_a(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function FM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function GM(s,e,i){let a=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await FM(c,i);return f.links?f.links():[]}return[]}));return XM(a.flat(1).filter(HM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function mv(s,e,i,a,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,m)=>f(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function VM(s,e,{includeHydrateFallback:i}={}){return kM(s.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function kM(s){return[...new Set(s)]}function WM(s){let e={},i=Object.keys(s).sort();for(let a of i)e[a]=s[a];return e}function XM(s,e){let i=new Set;return new Set(e),s.reduce((a,l)=>{let c=JSON.stringify(WM(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}function A_(){let s=q.useContext(Xs);return lp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function jM(){let s=q.useContext(cu);return lp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var cp=q.createContext(void 0);cp.displayName="FrameworkContext";function w_(){let s=q.useContext(cp);return lp(s,"You must render this element inside a <HydratedRouter> element"),s}function qM(s,e){let i=q.useContext(cp),[a,l]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=e,y=q.useRef(null);q.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let A=_=>{_.forEach(O=>{f(O.isIntersecting)})},x=new IntersectionObserver(A,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[s]),q.useEffect(()=>{if(a){let A=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(A)}}},[a]);let E=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,y,{}]:[c,y,{onFocus:Vo(d,E),onBlur:Vo(p,b),onMouseEnter:Vo(m,E),onMouseLeave:Vo(g,b),onTouchStart:Vo(v,E)}]:[!1,y,{}]}function Vo(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function YM({page:s,...e}){let{router:i}=A_(),a=q.useMemo(()=>m_(i.routes,s,i.basename),[i.routes,s,i.basename]);return a?q.createElement(KM,{page:s,matches:a,...e}):null}function ZM(s){let{manifest:e,routeModules:i}=w_(),[a,l]=q.useState([]);return q.useEffect(()=>{let c=!1;return GM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),a}function KM({page:s,matches:e,...i}){let a=ya(),{manifest:l,routeModules:c}=w_(),{basename:f}=A_(),{loaderData:d,matches:p}=jM(),m=q.useMemo(()=>mv(s,e,p,l,a,"data"),[s,e,p,l,a]),g=q.useMemo(()=>mv(s,e,p,l,a,"assets"),[s,e,p,l,a]),v=q.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let b=new Set,A=!1;if(e.forEach(_=>{let O=l.routes[_.route.id];!O||!O.hasLoader||(!m.some(P=>P.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||O.hasClientLoader?A=!0:b.add(_.route.id))}),b.size===0)return[];let x=zM(s,f,"data");return A&&b.size>0&&x.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[x.pathname+x.search]},[f,d,a,l,m,e,s,c]),y=q.useMemo(()=>VM(g,l),[g,l]),E=ZM(g);return q.createElement(q.Fragment,null,v.map(b=>q.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),y.map(b=>q.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:A})=>q.createElement("link",{key:b,nonce:i.nonce,...A})))}function QM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.9.4")}catch{}function JM({basename:s,children:e,window:i}){let a=q.useRef();a.current==null&&(a.current=HS({window:i,v5Compat:!0}));let l=a.current,[c,f]=q.useState({action:l.action,location:l.location}),d=q.useCallback(p=>{q.startTransition(()=>f(p))},[f]);return q.useLayoutEffect(()=>l.listen(d),[l,d]),q.createElement(RM,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var C_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D_=q.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:l,reloadDocument:c,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:v,...y},E){let{basename:b}=q.useContext(ki),A=typeof m=="string"&&C_.test(m),x,_=!1;if(typeof m=="string"&&A&&(x=m,R_))try{let U=new URL(window.location.href),L=m.startsWith("//")?new URL(U.protocol+m):new URL(m),Y=_a(L.pathname,b);L.origin===U.origin&&Y!=null?m=Y+L.search+L.hash:_=!0}catch{Hi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let O=hM(m,{relative:l}),[P,R,H]=qM(a,y),X=nE(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:v});function z(U){e&&e(U),U.defaultPrevented||X(U)}let K=q.createElement("a",{...y,...H,href:x||O,onClick:_||c?e:z,ref:QM(E,R),target:p,"data-discover":!A&&i==="render"?"true":void 0});return P&&!A?q.createElement(q.Fragment,null,K,q.createElement(YM,{page:O})):K});D_.displayName="Link";var $M=q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:f,viewTransition:d,children:p,...m},g){let v=ol(f,{relative:m.relative}),y=ya(),E=q.useContext(cu),{navigator:b,basename:A}=q.useContext(ki),x=E!=null&&oE(v)&&d===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,O=y.pathname,P=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(O=O.toLowerCase(),P=P?P.toLowerCase():null,_=_.toLowerCase()),P&&A&&(P=_a(P,A)||P);const R=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let H=O===_||!l&&O.startsWith(_)&&O.charAt(R)==="/",X=P!=null&&(P===_||!l&&P.startsWith(_)&&P.charAt(_.length)==="/"),z={isActive:H,isPending:X,isTransitioning:x},K=H?e:void 0,U;typeof a=="function"?U=a(z):U=[a,H?"active":null,X?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let L=typeof c=="function"?c(z):c;return q.createElement(D_,{...m,"aria-current":K,className:U,ref:g,style:L,to:f,viewTransition:d},typeof p=="function"?p(z):p)});$M.displayName="NavLink";var eE=q.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:l,state:c,method:f=Kc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,...y},E)=>{let b=rE(),A=sE(d,{relative:m}),x=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&C_.test(d),O=P=>{if(p&&p(P),P.defaultPrevented)return;P.preventDefault();let R=P.nativeEvent.submitter,H=R?.getAttribute("formmethod")||f;b(R||P.currentTarget,{fetcherKey:e,method:H,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:v})};return q.createElement("form",{ref:E,method:x,action:A,onSubmit:a?p:O,...y,"data-discover":!_&&s==="render"?"true":void 0})});eE.displayName="Form";function tE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N_(s){let e=q.useContext(Xs);return tn(e,tE(s)),e}function nE(s,{target:e,replace:i,state:a,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=sl(),p=ya(),m=ol(s,{relative:c});return q.useCallback(g=>{if(OM(g,e)){g.preventDefault();let v=i!==void 0?i:Jo(p)===Jo(m);d(s,{replace:v,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,d,m,i,a,e,s,l,c,f])}var iE=0,aE=()=>`__${String(++iE)}__`;function rE(){let{router:s}=N_("useSubmit"),{basename:e}=q.useContext(ki),i=bM();return q.useCallback(async(a,l={})=>{let{action:c,method:f,encType:d,formData:p,body:m}=BM(a,e);if(l.navigate===!1){let g=l.fetcherKey||aE();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function sE(s,{relative:e}={}){let{basename:i}=q.useContext(ki),a=q.useContext(xa);tn(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...ol(s||".",{relative:e})},f=ya();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Jo(c)}function oE(s,{relative:e}={}){let i=q.useContext(S_);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=N_("useViewTransitionState"),l=ol(s,{relative:e});if(!i.isTransitioning)return!1;let c=_a(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,a)||i.nextLocation.pathname;return iu(l.pathname,f)!=null||iu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="180",lE=0,gv=1,cE=2,U_=1,uE=2,ha=3,tr=0,qn=1,pa=2,$a=0,Ps=1,hh=2,vv=3,_v=4,fE=5,Dr=100,dE=101,hE=102,pE=103,mE=104,gE=200,vE=201,_E=202,xE=203,ph=204,mh=205,yE=206,SE=207,ME=208,EE=209,bE=210,TE=211,AE=212,wE=213,RE=214,gh=0,vh=1,_h=2,Fs=3,xh=4,yh=5,Sh=6,Mh=7,L_=0,CE=1,DE=2,er=0,NE=1,UE=2,LE=3,OE=4,PE=5,IE=6,BE=7,O_=300,Hs=301,Gs=302,Eh=303,bh=304,fu=306,Th=1e3,Ur=1001,Ah=1002,Ri=1003,zE=1004,Tc=1005,Bi=1006,Nd=1007,Lr=1008,Gi=1009,P_=1010,I_=1011,$o=1012,fp=1013,Pr=1014,ma=1015,ll=1016,dp=1017,hp=1018,el=1020,B_=35902,z_=35899,F_=1021,H_=1022,wi=1023,tl=1026,nl=1027,G_=1028,pp=1029,V_=1030,mp=1031,gp=1033,Jc=33776,$c=33777,eu=33778,tu=33779,wh=35840,Rh=35841,Ch=35842,Dh=35843,Nh=36196,Uh=37492,Lh=37496,Oh=37808,Ph=37809,Ih=37810,Bh=37811,zh=37812,Fh=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Wh=37818,Xh=37819,jh=37820,qh=37821,Yh=36492,Zh=36494,Kh=36495,Qh=36283,Jh=36284,$h=36285,ep=36286,FE=3200,HE=3201,k_=0,GE=1,Ja="",xi="srgb",Vs="srgb-linear",au="linear",qt="srgb",xs=7680,xv=519,VE=512,kE=513,WE=514,W_=515,XE=516,jE=517,qE=518,YE=519,yv=35044,Sv="300 es",zi=2e3,ru=2001;class js{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,tp=180/Math.PI;function cl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[i&63|128]+Ln[i>>8&255]+"-"+Ln[i>>16&255]+Ln[i>>24&255]+Ln[a&255]+Ln[a>>8&255]+Ln[a>>16&255]+Ln[a>>24&255]).toLowerCase()}function Rt(s,e,i){return Math.max(e,Math.min(i,s))}function ZE(s,e){return(s%e+e)%e}function Ld(s,e,i){return(1-i)*s+i*e}function ko(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Xn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,d){let p=a[l+0],m=a[l+1],g=a[l+2],v=a[l+3];const y=c[f+0],E=c[f+1],b=c[f+2],A=c[f+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=E,e[i+2]=b,e[i+3]=A;return}if(v!==A||p!==y||m!==E||g!==b){let x=1-d;const _=p*y+m*E+g*b+v*A,O=_>=0?1:-1,P=1-_*_;if(P>Number.EPSILON){const H=Math.sqrt(P),X=Math.atan2(H,_*O);x=Math.sin(x*X)/H,d=Math.sin(d*X)/H}const R=d*O;if(p=p*x+y*R,m=m*x+E*R,g=g*x+b*R,v=v*x+A*R,x===1-d){const H=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=H,m*=H,g*=H,v*=H}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,a,l,c,f){const d=a[l],p=a[l+1],m=a[l+2],g=a[l+3],v=c[f],y=c[f+1],E=c[f+2],b=c[f+3];return e[i]=d*b+g*v+p*E-m*y,e[i+1]=p*b+g*y+m*v-d*E,e[i+2]=m*b+g*E+d*y-p*v,e[i+3]=g*b-d*v-p*y-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(a/2),g=d(l/2),v=d(c/2),y=p(a/2),E=p(l/2),b=p(c/2);switch(f){case"XYZ":this._x=y*g*v+m*E*b,this._y=m*E*v-y*g*b,this._z=m*g*b+y*E*v,this._w=m*g*v-y*E*b;break;case"YXZ":this._x=y*g*v+m*E*b,this._y=m*E*v-y*g*b,this._z=m*g*b-y*E*v,this._w=m*g*v+y*E*b;break;case"ZXY":this._x=y*g*v-m*E*b,this._y=m*E*v+y*g*b,this._z=m*g*b+y*E*v,this._w=m*g*v-y*E*b;break;case"ZYX":this._x=y*g*v-m*E*b,this._y=m*E*v+y*g*b,this._z=m*g*b-y*E*v,this._w=m*g*v+y*E*b;break;case"YZX":this._x=y*g*v+m*E*b,this._y=m*E*v+y*g*b,this._z=m*g*b-y*E*v,this._w=m*g*v-y*E*b;break;case"XZY":this._x=y*g*v-m*E*b,this._y=m*E*v-y*g*b,this._z=m*g*b+y*E*v,this._w=m*g*v+y*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],y=a+d+v;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(g-p)*E,this._y=(c-m)*E,this._z=(f-l)*E}else if(a>d&&a>v){const E=2*Math.sqrt(1+a-d-v);this._w=(g-p)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+m)/E}else if(d>v){const E=2*Math.sqrt(1+d-a-v);this._w=(c-m)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+v-a-d);this._w=(f-l)/E,this._x=(c+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-a*m,this._z=c*g+f*m+a*p-l*d,this._w=f*g-a*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const a=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+a*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*a+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=f*v+this._w*y,this._x=a*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ge{constructor(e=0,i=0,a=0){ge.prototype.isVector3=!0,this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*l-d*a),g=2*(d*i-c*l),v=2*(c*a-f*i);return this.x=i+p*m+f*v-d*g,this.y=a+p*g+d*m-c*v,this.z=l+p*v+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-a*p,this.z=a*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(Rt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Od=new ge,Mv=new ul;class _t{constructor(e,i,a,l,c,f,d,p,m){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,p,m)}set(e,i,a,l,c,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[3],p=a[6],m=a[1],g=a[4],v=a[7],y=a[2],E=a[5],b=a[8],A=l[0],x=l[3],_=l[6],O=l[1],P=l[4],R=l[7],H=l[2],X=l[5],z=l[8];return c[0]=f*A+d*O+p*H,c[3]=f*x+d*P+p*X,c[6]=f*_+d*R+p*z,c[1]=m*A+g*O+v*H,c[4]=m*x+g*P+v*X,c[7]=m*_+g*R+v*z,c[2]=y*A+E*O+b*H,c[5]=y*x+E*P+b*X,c[8]=y*_+E*R+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*f*g-i*d*m-a*c*g+a*d*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*f-d*m,y=d*p-g*c,E=m*c-f*p,b=i*v+a*y+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/b;return e[0]=v*A,e[1]=(l*m-g*a)*A,e[2]=(d*a-l*f)*A,e[3]=y*A,e[4]=(g*i-l*p)*A,e[5]=(l*c-d*i)*A,e[6]=E*A,e[7]=(a*p-m*i)*A,e[8]=(f*i-a*c)*A,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*d)+f+e,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pd=new _t;function X_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function su(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function KE(){const s=su("canvas");return s.style.display="block",s}const Ev={};function il(s){s in Ev||(Ev[s]=!0,console.warn(s))}function QE(s,e,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const bv=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tv=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JE(){const s={enabled:!0,workingColorSpace:Vs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qt&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Vs]:{primaries:e,whitePoint:a,transfer:au,toXYZ:bv,fromXYZ:Tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:a,transfer:qt,toXYZ:bv,fromXYZ:Tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Pt=JE();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class $E{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ys===void 0&&(ys=su("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=ys}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(va(i[a]/255)*255):i[a]=va(i[a]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eb=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Id(l[f].image)):c.push(Id(l[f]))}else c=Id(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$E.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tb=0;const Bd=new ge;class Yn extends js{constructor(e=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,a=Ur,l=Ur,c=Bi,f=Lr,d=wi,p=Gi,m=Yn.DEFAULT_ANISOTROPY,g=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=cl(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=O_;Yn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,a=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],y=p[1],E=p[5],b=p[9],A=p[2],x=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(v-A)<.01&&Math.abs(b-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+A)<.1&&Math.abs(b+x)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const P=(m+1)/2,R=(E+1)/2,H=(_+1)/2,X=(g+y)/4,z=(v+A)/4,K=(b+x)/4;return P>R&&P>H?P<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(P),l=X/a,c=z/a):R>H?R<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(R),a=X/l,c=K/l):H<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),a=z/c,l=K/c),this.set(a,l,c,i),this}let O=Math.sqrt((x-b)*(x-b)+(v-A)*(v-A)+(y-g)*(y-g));return Math.abs(O)<.001&&(O=1),this.x=(x-b)/O,this.y=(v-A)/O,this.z=(y-g)/O,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Rt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nb extends js{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:a.depth},c=new Yn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const i={minFilter:Bi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends nb{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class j_ extends Yn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ib extends Yn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=new ge(1/0,1/0,1/0),i=new ge(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ac.copy(a.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wo),wc.subVectors(this.max,Wo),Ss.subVectors(e.a,Wo),Ms.subVectors(e.b,Wo),Es.subVectors(e.c,Wo),Xa.subVectors(Ms,Ss),ja.subVectors(Es,Ms),Mr.subVectors(Ss,Es);let i=[0,-Xa.z,Xa.y,0,-ja.z,ja.y,0,-Mr.z,Mr.y,Xa.z,0,-Xa.x,ja.z,0,-ja.x,Mr.z,0,-Mr.x,-Xa.y,Xa.x,0,-ja.y,ja.x,0,-Mr.y,Mr.x,0];return!zd(i,Ss,Ms,Es,wc)||(i=[1,0,0,0,1,0,0,0,1],!zd(i,Ss,Ms,Es,wc))?!1:(Rc.crossVectors(Xa,ja),i=[Rc.x,Rc.y,Rc.z],zd(i,Ss,Ms,Es,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new ge,new ge,new ge,new ge,new ge,new ge,new ge,new ge],Ei=new ge,Ac=new fl,Ss=new ge,Ms=new ge,Es=new ge,Xa=new ge,ja=new ge,Mr=new ge,Wo=new ge,wc=new ge,Rc=new ge,Er=new ge;function zd(s,e,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){Er.fromArray(s,c);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),p=e.dot(Er),m=i.dot(Er),g=a.dot(Er);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const ab=new fl,Xo=new ge,Fd=new ge;class du{constructor(e=new ge,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):ab.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const i=Xo.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Xo,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(Fd)),this.expandByPoint(Xo.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new ge,Hd=new ge,Cc=new ge,qa=new ge,Gd=new ge,Dc=new ge,Vd=new ge;class q_{constructor(e=new ge,i=new ge(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Hd.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),qa.copy(this.origin).sub(Hd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Cc),d=qa.dot(this.direction),p=-qa.dot(Cc),m=qa.lengthSq(),g=Math.abs(1-f*f);let v,y,E,b;if(g>0)if(v=f*p-d,y=f*d-p,b=c*g,v>=0)if(y>=-b)if(y<=b){const A=1/g;v*=A,y*=A,E=v*(v+f*y+2*d)+y*(f*v+y+2*p)+m}else y=c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*p)+m;else y=-c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*p)+m;else y<=-b?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-p),c),E=-v*v+y*(y+2*p)+m):y<=b?(v=0,y=Math.min(Math.max(-c,-p),c),E=y*(y+2*p)+m):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-p),c),E=-v*v+y*(y+2*p)+m);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Hd).addScaledVector(Cc,y),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const a=ca.dot(this.direction),l=ca.dot(ca)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,p=a+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(a=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(a=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),g>=0?(c=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),a>p||d>l)||((d>a||a!==a)&&(a=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,a,l,c){Gd.subVectors(i,e),Dc.subVectors(a,e),Vd.crossVectors(Gd,Dc);let f=this.direction.dot(Vd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;qa.subVectors(this.origin,e);const p=d*this.direction.dot(Dc.crossVectors(qa,Dc));if(p<0)return null;const m=d*this.direction.dot(Gd.cross(qa));if(m<0||p+m>f)return null;const g=-d*qa.dot(Vd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,a,l,c,f,d,p,m,g,v,y,E,b,A,x){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,p,m,g,v,y,E,b,A,x)}set(e,i,a,l,c,f,d,p,m,g,v,y,E,b,A,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=a,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=E,_[7]=b,_[11]=A,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,a=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),d=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=f*g,E=f*v,b=d*g,A=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=E+b*m,i[5]=y-A*m,i[9]=-d*p,i[2]=A-y*m,i[6]=b+E*m,i[10]=f*p}else if(e.order==="YXZ"){const y=p*g,E=p*v,b=m*g,A=m*v;i[0]=y+A*d,i[4]=b*d-E,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=E*d-b,i[6]=A+y*d,i[10]=f*p}else if(e.order==="ZXY"){const y=p*g,E=p*v,b=m*g,A=m*v;i[0]=y-A*d,i[4]=-f*v,i[8]=b+E*d,i[1]=E+b*d,i[5]=f*g,i[9]=A-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(e.order==="ZYX"){const y=f*g,E=f*v,b=d*g,A=d*v;i[0]=p*g,i[4]=b*m-E,i[8]=y*m+A,i[1]=p*v,i[5]=A*m+y,i[9]=E*m-b,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(e.order==="YZX"){const y=f*p,E=f*m,b=d*p,A=d*m;i[0]=p*g,i[4]=A-y*v,i[8]=b*v+E,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=E*v+b,i[10]=y-A*v}else if(e.order==="XZY"){const y=f*p,E=f*m,b=d*p,A=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=y*v+A,i[5]=f*g,i[9]=E*v-b,i[2]=b*v-E,i[6]=d*g,i[10]=A*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rb,e,sb)}lookAt(e,i,a){const l=this.elements;return ai.subVectors(e,i),ai.lengthSq()===0&&(ai.z=1),ai.normalize(),Ya.crossVectors(a,ai),Ya.lengthSq()===0&&(Math.abs(a.z)===1?ai.x+=1e-4:ai.z+=1e-4,ai.normalize(),Ya.crossVectors(a,ai)),Ya.normalize(),Nc.crossVectors(ai,Ya),l[0]=Ya.x,l[4]=Nc.x,l[8]=ai.x,l[1]=Ya.y,l[5]=Nc.y,l[9]=ai.y,l[2]=Ya.z,l[6]=Nc.z,l[10]=ai.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[4],p=a[8],m=a[12],g=a[1],v=a[5],y=a[9],E=a[13],b=a[2],A=a[6],x=a[10],_=a[14],O=a[3],P=a[7],R=a[11],H=a[15],X=l[0],z=l[4],K=l[8],U=l[12],L=l[1],Y=l[5],re=l[9],ce=l[13],xe=l[2],ue=l[6],F=l[10],Q=l[14],J=l[3],W=l[7],N=l[11],M=l[15];return c[0]=f*X+d*L+p*xe+m*J,c[4]=f*z+d*Y+p*ue+m*W,c[8]=f*K+d*re+p*F+m*N,c[12]=f*U+d*ce+p*Q+m*M,c[1]=g*X+v*L+y*xe+E*J,c[5]=g*z+v*Y+y*ue+E*W,c[9]=g*K+v*re+y*F+E*N,c[13]=g*U+v*ce+y*Q+E*M,c[2]=b*X+A*L+x*xe+_*J,c[6]=b*z+A*Y+x*ue+_*W,c[10]=b*K+A*re+x*F+_*N,c[14]=b*U+A*ce+x*Q+_*M,c[3]=O*X+P*L+R*xe+H*J,c[7]=O*z+P*Y+R*ue+H*W,c[11]=O*K+P*re+R*F+H*N,c[15]=O*U+P*ce+R*Q+H*M,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],y=e[10],E=e[14],b=e[3],A=e[7],x=e[11],_=e[15];return b*(+c*p*v-l*m*v-c*d*y+a*m*y+l*d*E-a*p*E)+A*(+i*p*E-i*m*y+c*f*y-l*f*E+l*m*g-c*p*g)+x*(+i*m*v-i*d*E-c*f*v+a*f*E+c*d*g-a*m*g)+_*(-l*d*g-i*p*v+i*d*y+l*f*v-a*f*y+a*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],y=e[10],E=e[11],b=e[12],A=e[13],x=e[14],_=e[15],O=v*x*m-A*y*m+A*p*E-d*x*E-v*p*_+d*y*_,P=b*y*m-g*x*m-b*p*E+f*x*E+g*p*_-f*y*_,R=g*A*m-b*v*m+b*d*E-f*A*E-g*d*_+f*v*_,H=b*v*p-g*A*p-b*d*y+f*A*y+g*d*x-f*v*x,X=i*O+a*P+l*R+c*H;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/X;return e[0]=O*z,e[1]=(A*y*c-v*x*c-A*l*E+a*x*E+v*l*_-a*y*_)*z,e[2]=(d*x*c-A*p*c+A*l*m-a*x*m-d*l*_+a*p*_)*z,e[3]=(v*p*c-d*y*c-v*l*m+a*y*m+d*l*E-a*p*E)*z,e[4]=P*z,e[5]=(g*x*c-b*y*c+b*l*E-i*x*E-g*l*_+i*y*_)*z,e[6]=(b*p*c-f*x*c-b*l*m+i*x*m+f*l*_-i*p*_)*z,e[7]=(f*y*c-g*p*c+g*l*m-i*y*m-f*l*E+i*p*E)*z,e[8]=R*z,e[9]=(b*v*c-g*A*c-b*a*E+i*A*E+g*a*_-i*v*_)*z,e[10]=(f*A*c-b*d*c+b*a*m-i*A*m-f*a*_+i*d*_)*z,e[11]=(g*d*c-f*v*c-g*a*m+i*v*m+f*a*E-i*d*E)*z,e[12]=H*z,e[13]=(g*A*l-b*v*l+b*a*y-i*A*y-g*a*x+i*v*x)*z,e[14]=(b*d*l-f*A*l-b*a*p+i*A*p+f*a*x-i*d*x)*z,e[15]=(f*v*l-g*d*l+g*a*p-i*v*p-f*a*y+i*d*y)*z,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,d=e.y,p=e.z,m=c*f,g=c*d;return this.set(m*f+a,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+a,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,v=d+d,y=c*m,E=c*g,b=c*v,A=f*g,x=f*v,_=d*v,O=p*m,P=p*g,R=p*v,H=a.x,X=a.y,z=a.z;return l[0]=(1-(A+_))*H,l[1]=(E+R)*H,l[2]=(b-P)*H,l[3]=0,l[4]=(E-R)*X,l[5]=(1-(y+_))*X,l[6]=(x+O)*X,l[7]=0,l[8]=(b+P)*z,l[9]=(x-O)*z,l[10]=(1-(y+A))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;let c=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),d=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const m=1/c,g=1/f,v=1/d;return bi.elements[0]*=m,bi.elements[1]*=m,bi.elements[2]*=m,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),a.x=c,a.y=f,a.z=d,this}makePerspective(e,i,a,l,c,f,d=zi,p=!1){const m=this.elements,g=2*c/(i-e),v=2*c/(a-l),y=(i+e)/(i-e),E=(a+l)/(a-l);let b,A;if(p)b=c/(f-c),A=f*c/(f-c);else if(d===zi)b=-(f+c)/(f-c),A=-2*f*c/(f-c);else if(d===ru)b=-f/(f-c),A=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=A,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,a,l,c,f,d=zi,p=!1){const m=this.elements,g=2/(i-e),v=2/(a-l),y=-(i+e)/(i-e),E=-(a+l)/(a-l);let b,A;if(p)b=1/(f-c),A=f/(f-c);else if(d===zi)b=-2/(f-c),A=-(f+c)/(f-c);else if(d===ru)b=-1/(f-c),A=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=b,m[14]=A,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}}const bs=new ge,bi=new sn,rb=new ge(0,0,0),sb=new ge(1,1,1),Ya=new ge,Nc=new ge,ai=new ge,Av=new sn,wv=new ul;class Vi{constructor(e=0,i=0,a=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return Av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Av,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ob=0;const Rv=new ge,Ts=new ul,ua=new sn,Uc=new ge,jo=new ge,lb=new ge,cb=new ul,Cv=new ge(1,0,0),Dv=new ge(0,1,0),Nv=new ge(0,0,1),Uv={type:"added"},ub={type:"removed"},As={type:"childadded",child:null},kd={type:"childremoved",child:null};class Dn extends js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ge,i=new Vi,a=new ul,l=new ge(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new _t}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,i){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Uc.copy(e):Uc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(jo,Uc,this.up):ua.lookAt(Uc,jo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(ua),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ub),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jo,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),y=f(e.skeletons),E=f(e.animations),b=f(e.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),y.length>0&&(a.skeletons=y),E.length>0&&(a.animations=E),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}Dn.DEFAULT_UP=new ge(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new ge,fa=new ge,Wd=new ge,da=new ge,ws=new ge,Rs=new ge,Lv=new ge,Xd=new ge,jd=new ge,qd=new ge,Yd=new rn,Zd=new rn,Kd=new rn;class Ai{constructor(e=new ge,i=new ge,a=new ge){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Ti.subVectors(l,i),fa.subVectors(a,i),Wd.subVectors(e,i);const f=Ti.dot(Ti),d=Ti.dot(fa),p=Ti.dot(Wd),m=fa.dot(fa),g=fa.dot(Wd),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,E=(m*p-d*g)*y,b=(f*g-d*p)*y;return c.set(1-E-b,b,E)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,a,l,c,f,d,p){return this.getBarycoord(e,i,a,l,da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,da.x),p.addScaledVector(f,da.y),p.addScaledVector(d,da.z),p)}static getInterpolatedAttribute(e,i,a,l,c,f){return Yd.setScalar(0),Zd.setScalar(0),Kd.setScalar(0),Yd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,a),Kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Yd,c.x),f.addScaledVector(Zd,c.y),f.addScaledVector(Kd,c.z),f}static isFrontFacing(e,i,a,l){return Ti.subVectors(a,i),fa.subVectors(e,i),Ti.cross(fa).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,d;ws.subVectors(l,a),Rs.subVectors(c,a),Xd.subVectors(e,a);const p=ws.dot(Xd),m=Rs.dot(Xd);if(p<=0&&m<=0)return i.copy(a);jd.subVectors(e,l);const g=ws.dot(jd),v=Rs.dot(jd);if(g>=0&&v<=g)return i.copy(l);const y=p*v-g*m;if(y<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(a).addScaledVector(ws,f);qd.subVectors(e,c);const E=ws.dot(qd),b=Rs.dot(qd);if(b>=0&&E<=b)return i.copy(c);const A=E*m-p*b;if(A<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(a).addScaledVector(Rs,d);const x=g*b-E*v;if(x<=0&&v-g>=0&&E-b>=0)return Lv.subVectors(c,l),d=(v-g)/(v-g+(E-b)),i.copy(l).addScaledVector(Lv,d);const _=1/(x+A+y);return f=A*_,d=y*_,i.copy(a).addScaledVector(ws,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Dt{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=a,Pt.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Pt.workingColorSpace){if(e=ZE(e,1),i=Rt(i,0,1),a=Rt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Qd(f,c,e+1/3),this.g=Qd(f,c,e),this.b=Qd(f,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const a=Z_[e.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Pt.workingToColorSpace(On.copy(this),e),Math.round(Rt(On.r*255,0,255))*65536+Math.round(Rt(On.g*255,0,255))*256+Math.round(Rt(On.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(On.copy(this),i);const a=On.r,l=On.g,c=On.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case a:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-a)/v+2;break;case c:p=(a-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(On.copy(this),i),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=xi){Pt.workingToColorSpace(On.copy(this),e);const i=On.r,a=On.g,l=On.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(Lc);const a=Ld(Za.h,Lc.h,i),l=Ld(Za.s,Lc.s,i),c=Ld(Za.l,Lc.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Dt;Dt.NAMES=Z_;let fb=0;class qs extends js{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Ps,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Fs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(a.blending=this.blending),this.side!==tr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ph&&(a.blendSrc=this.blendSrc),this.blendDst!==mh&&(a.blendDst=this.blendDst),this.blendEquation!==Dr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Fs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class K_ extends qs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new ge,Oc=new It;let db=0;class Zn{constructor(e,i,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=yv,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=ko(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Xn(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ko(i,this.array)),i}setX(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ko(i,this.array)),i}setY(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ko(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ko(i,this.array)),i}setW(e,i){return this.normalized&&(i=Xn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),a=Xn(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),a=Xn(a,this.array),l=Xn(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Xn(i,this.array),a=Xn(a,this.array),l=Xn(l,this.array),c=Xn(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yv&&(e.usage=this.usage),e}}class Q_ extends Zn{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class J_ extends Zn{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Fi extends Zn{constructor(e,i,a){super(new Float32Array(e),i,a)}}let hb=0;const vi=new sn,Jd=new Dn,Cs=new ge,ri=new fl,qo=new fl,En=new ge;class Ci extends js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?J_:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new _t().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,a){return vi.makeTranslation(e,i,a),this.applyMatrix4(vi),this}scale(e,i,a){return vi.makeScale(e,i,a),this.applyMatrix4(vi),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Fi(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ge(-1/0,-1/0,-1/0),new ge(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ge,1/0);return}if(e){const a=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];qo.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(ri.min,qo.min),ri.expandByPoint(En),En.addVectors(ri.max,qo.max),ri.expandByPoint(En)):(ri.expandByPoint(qo.min),ri.expandByPoint(qo.max))}ri.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)En.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(En));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)En.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),En.add(Cs)),l=Math.max(l,a.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<a.count;K++)d[K]=new ge,p[K]=new ge;const m=new ge,g=new ge,v=new ge,y=new It,E=new It,b=new It,A=new ge,x=new ge;function _(K,U,L){m.fromBufferAttribute(a,K),g.fromBufferAttribute(a,U),v.fromBufferAttribute(a,L),y.fromBufferAttribute(c,K),E.fromBufferAttribute(c,U),b.fromBufferAttribute(c,L),g.sub(m),v.sub(m),E.sub(y),b.sub(y);const Y=1/(E.x*b.y-b.x*E.y);isFinite(Y)&&(A.copy(g).multiplyScalar(b.y).addScaledVector(v,-E.y).multiplyScalar(Y),x.copy(v).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(Y),d[K].add(A),d[U].add(A),d[L].add(A),p[K].add(x),p[U].add(x),p[L].add(x))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let K=0,U=O.length;K<U;++K){const L=O[K],Y=L.start,re=L.count;for(let ce=Y,xe=Y+re;ce<xe;ce+=3)_(e.getX(ce+0),e.getX(ce+1),e.getX(ce+2))}const P=new ge,R=new ge,H=new ge,X=new ge;function z(K){H.fromBufferAttribute(l,K),X.copy(H);const U=d[K];P.copy(U),P.sub(H.multiplyScalar(H.dot(U))).normalize(),R.crossVectors(X,U);const Y=R.dot(p[K])<0?-1:1;f.setXYZW(K,P.x,P.y,P.z,Y)}for(let K=0,U=O.length;K<U;++K){const L=O[K],Y=L.start,re=L.count;for(let ce=Y,xe=Y+re;ce<xe;ce+=3)z(e.getX(ce+0)),z(e.getX(ce+1)),z(e.getX(ce+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Zn(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let y=0,E=a.count;y<E;y++)a.setXYZ(y,0,0,0);const l=new ge,c=new ge,f=new ge,d=new ge,p=new ge,m=new ge,g=new ge,v=new ge;if(e)for(let y=0,E=e.count;y<E;y+=3){const b=e.getX(y+0),A=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,A),f.fromBufferAttribute(i,x),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(a,b),p.fromBufferAttribute(a,A),m.fromBufferAttribute(a,x),d.add(g),p.add(g),m.add(g),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(A,p.x,p.y,p.z),a.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,y=new m.constructor(p.length*g);let E=0,b=0;for(let A=0,x=p.length;A<x;A++){d.isInterleavedBufferAttribute?E=p[A]*d.data.stride+d.offset:E=p[A]*g;for(let _=0;_<g;_++)y[b++]=m[E++]}return new Zn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,a=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,a);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const y=m[g],E=e(y,a);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,y=m.length;v<y;v++){const E=m[v];g.push(E.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let y=0,E=v.length;y<E;y++)g.push(v[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ov=new sn,br=new q_,Pc=new du,Pv=new ge,Ic=new ge,Bc=new ge,zc=new ge,$d=new ge,Fc=new ge,Iv=new ge,Hc=new ge;class oi extends Dn{constructor(e=new Ci,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Fc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&($d.fromBufferAttribute(v,e),f?Fc.addScaledVector($d,g):Fc.addScaledVector($d.sub(i),g))}i.add(Fc)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Pc.containsPoint(br.origin)===!1&&(br.intersectSphere(Pc,Pv)===null||br.origin.distanceToSquared(Pv)>(e.far-e.near)**2))&&(Ov.copy(c).invert(),br.copy(e.ray).applyMatrix4(Ov),!(a.boundingBox!==null&&br.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,A=y.length;b<A;b++){const x=y[b],_=f[x.materialIndex],O=Math.max(x.start,E.start),P=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let R=O,H=P;R<H;R+=3){const X=d.getX(R),z=d.getX(R+1),K=d.getX(R+2);l=Gc(this,_,e,a,m,g,v,X,z,K),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(d.count,E.start+E.count);for(let x=b,_=A;x<_;x+=3){const O=d.getX(x),P=d.getX(x+1),R=d.getX(x+2);l=Gc(this,f,e,a,m,g,v,O,P,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,A=y.length;b<A;b++){const x=y[b],_=f[x.materialIndex],O=Math.max(x.start,E.start),P=Math.min(p.count,Math.min(x.start+x.count,E.start+E.count));for(let R=O,H=P;R<H;R+=3){const X=R,z=R+1,K=R+2;l=Gc(this,_,e,a,m,g,v,X,z,K),l&&(l.faceIndex=Math.floor(R/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),A=Math.min(p.count,E.start+E.count);for(let x=b,_=A;x<_;x+=3){const O=x,P=x+1,R=x+2;l=Gc(this,f,e,a,m,g,v,O,P,R),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function pb(s,e,i,a,l,c,f,d){let p;if(e.side===qn?p=a.intersectTriangle(f,c,l,!0,d):p=a.intersectTriangle(l,c,f,e.side===tr,d),p===null)return null;Hc.copy(d),Hc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Hc);return m<i.near||m>i.far?null:{distance:m,point:Hc.clone(),object:s}}function Gc(s,e,i,a,l,c,f,d,p,m){s.getVertexPosition(d,Ic),s.getVertexPosition(p,Bc),s.getVertexPosition(m,zc);const g=pb(s,e,i,a,Ic,Bc,zc,Iv);if(g){const v=new ge;Ai.getBarycoord(Iv,Ic,Bc,zc,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,p,m,v,new It)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,d,p,m,v,new It)),f&&(g.normal=Ai.getInterpolatedAttribute(f,d,p,m,v,new ge),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new ge,materialIndex:0};Ai.getNormal(Ic,Bc,zc,y.normal),g.face=y,g.barycoord=v}return g}class dl extends Ci{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let y=0,E=0;b("z","y","x",-1,-1,a,i,e,f,c,0),b("z","y","x",1,-1,a,i,-e,f,c,1),b("x","z","y",1,1,e,a,i,l,f,2),b("x","z","y",1,-1,e,a,-i,l,f,3),b("x","y","z",1,-1,e,i,a,l,c,4),b("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(g,3)),this.setAttribute("uv",new Fi(v,2));function b(A,x,_,O,P,R,H,X,z,K,U){const L=R/z,Y=H/K,re=R/2,ce=H/2,xe=X/2,ue=z+1,F=K+1;let Q=0,J=0;const W=new ge;for(let N=0;N<F;N++){const M=N*Y-ce;for(let k=0;k<ue;k++){const ee=k*L-re;W[A]=ee*O,W[x]=M*P,W[_]=xe,m.push(W.x,W.y,W.z),W[A]=0,W[x]=0,W[_]=X>0?1:-1,g.push(W.x,W.y,W.z),v.push(k/z),v.push(1-N/K),Q+=1}}for(let N=0;N<K;N++)for(let M=0;M<z;M++){const k=y+M+ue*N,ee=y+M+ue*(N+1),oe=y+(M+1)+ue*(N+1),se=y+(M+1)+ue*N;p.push(k,ee,se),p.push(ee,oe,se),J+=6}d.addGroup(E,J,U),E+=J,y+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ks(s){const e={};for(const i in s){e[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone():Array.isArray(l)?e[i][a]=l.slice():e[i][a]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const a=ks(s[i]);for(const l in a)e[l]=a[l]}return e}function mb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function $_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const gb={clone:ks,merge:zn};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends qs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class ex extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new ge,Bv=new It,zv=new It;class si extends ex{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,Bv,zv),i.subVectors(zv,Bv)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*a/m,l*=f.width/p,a*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Ns=1;class xb extends Dn{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Ds,Ns,e,i);l.layers=this.layers,this.add(l);const c=new si(Ds,Ns,e,i);c.layers=this.layers,this.add(c);const f=new si(Ds,Ns,e,i);f.layers=this.layers,this.add(f);const d=new si(Ds,Ns,e,i);d.layers=this.layers,this.add(d);const p=new si(Ds,Ns,e,i);p.layers=this.layers,this.add(p);const m=new si(Ds,Ns,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(e===zi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ru)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const A=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,l),e.render(i,c),e.setRenderTarget(a,1,l),e.render(i,f),e.setRenderTarget(a,2,l),e.render(i,d),e.setRenderTarget(a,3,l),e.render(i,p),e.setRenderTarget(a,4,l),e.render(i,m),a.texture.generateMipmaps=A,e.setRenderTarget(a,5,l),e.render(i,g),e.setRenderTarget(v,y,E),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class tx extends Yn{constructor(e=[],i=Hs,a,l,c,f,d,p,m,g){super(e,i,a,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yb extends Ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new dl(5,5,5),c=new nr({name:"CubemapFromEquirect",uniforms:ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:qn,blending:$a});c.uniforms.tEquirect.value=i;const f=new oi(l,c),d=i.minFilter;return i.minFilter===Lr&&(i.minFilter=Bi),new xb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}class Vc extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ge,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ge),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ge,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ge),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const A of e.hand.values()){const x=i.getJointPose(A,a),_=this._getHandJoint(m,A);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),E=.02,b=.005;m.inputState.pinching&&y>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new Vc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}class nx extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const th=new ge,Mb=new ge,Eb=new _t;class Rr{constructor(e=new ge(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=th.subVectors(a,i).cross(Mb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const a=e.delta(th),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||Eb.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new du,bb=new It(.5,.5),kc=new ge;class _p{constructor(e=new Rr,i=new Rr,a=new Rr,l=new Rr,c=new Rr,f=new Rr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=zi,a=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],p=c[2],m=c[3],g=c[4],v=c[5],y=c[6],E=c[7],b=c[8],A=c[9],x=c[10],_=c[11],O=c[12],P=c[13],R=c[14],H=c[15];if(l[0].setComponents(m-f,E-g,_-b,H-O).normalize(),l[1].setComponents(m+f,E+g,_+b,H+O).normalize(),l[2].setComponents(m+d,E+v,_+A,H+P).normalize(),l[3].setComponents(m-d,E-v,_-A,H-P).normalize(),a)l[4].setComponents(p,y,x,R).normalize(),l[5].setComponents(m-p,E-y,_-x,H-R).normalize();else if(l[4].setComponents(m-p,E-y,_-x,H-R).normalize(),i===zi)l[5].setComponents(m+p,E+y,_+x,H+R).normalize();else if(i===ru)l[5].setComponents(p,y,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=bb.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends qs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new sn,np=new q_,Wc=new du,Xc=new ge;class ix extends Dn{constructor(e=new Ci,i=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;Fv.copy(l).invert(),np.copy(e.ray).applyMatrix4(Fv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=a.index,v=a.attributes.position;if(m!==null){const y=Math.max(0,f.start),E=Math.min(m.count,f.start+f.count);for(let b=y,A=E;b<A;b++){const x=m.getX(b);Xc.fromBufferAttribute(v,x),Hv(Xc,x,p,l,e,i,this)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=y,A=E;b<A;b++)Xc.fromBufferAttribute(v,b),Hv(Xc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hv(s,e,i,a,l,c,f){const d=np.distanceSqToPoint(s);if(d<i){const p=new ge;np.closestPointToPoint(s,p),p.applyMatrix4(a);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class ax extends Yn{constructor(e,i,a=Pr,l,c,f,d=Ri,p=Ri,m,g=tl,v=1){if(g!==tl&&g!==nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:v};super(y,l,c,f,d,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class rx extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hu extends Ci{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(a),p=Math.floor(l),m=d+1,g=p+1,v=e/d,y=i/p,E=[],b=[],A=[],x=[];for(let _=0;_<g;_++){const O=_*y-f;for(let P=0;P<m;P++){const R=P*v-c;b.push(R,-O,0),A.push(0,0,1),x.push(P/d),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let O=0;O<d;O++){const P=O+m*_,R=O+m*(_+1),H=O+1+m*(_+1),X=O+1+m*_;E.push(P,R,X),E.push(R,H,X)}this.setIndex(E),this.setAttribute("position",new Fi(b,3)),this.setAttribute("normal",new Fi(A,3)),this.setAttribute("uv",new Fi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class pu extends Ci{constructor(e=1,i=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const p=Math.min(f+d,Math.PI);let m=0;const g=[],v=new ge,y=new ge,E=[],b=[],A=[],x=[];for(let _=0;_<=a;_++){const O=[],P=_/a;let R=0;_===0&&f===0?R=.5/i:_===a&&p===Math.PI&&(R=-.5/i);for(let H=0;H<=i;H++){const X=H/i;v.x=-e*Math.cos(l+X*c)*Math.sin(f+P*d),v.y=e*Math.cos(f+P*d),v.z=e*Math.sin(l+X*c)*Math.sin(f+P*d),b.push(v.x,v.y,v.z),y.copy(v).normalize(),A.push(y.x,y.y,y.z),x.push(X+R,1-P),O.push(m++)}g.push(O)}for(let _=0;_<a;_++)for(let O=0;O<i;O++){const P=g[_][O+1],R=g[_][O],H=g[_+1][O],X=g[_+1][O+1];(_!==0||f>0)&&E.push(P,R,X),(_!==a-1||p<Math.PI)&&E.push(R,H,X)}this.setIndex(E),this.setAttribute("position",new Fi(b,3)),this.setAttribute("normal",new Fi(A,3)),this.setAttribute("uv",new Fi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tb extends qs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k_,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ou extends Tb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ab extends qs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wb extends qs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sx extends Dn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const nh=new sn,Gv=new ge,Vv=new ge;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,a=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Vv),i.updateMatrixWorld(),nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ox extends ex{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Cb extends Rb{constructor(){super(new ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends sx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new Cb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cx extends sx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Db extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function kv(s,e,i,a){const l=Nb(a);switch(i){case F_:return s*e;case G_:return s*e/l.components*l.byteLength;case pp:return s*e/l.components*l.byteLength;case V_:return s*e*2/l.components*l.byteLength;case mp:return s*e*2/l.components*l.byteLength;case H_:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case gp:return s*e*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Dh:return Math.max(s,16)*Math.max(e,8)/4;case wh:case Ch:return Math.max(s,8)*Math.max(e,8)/2;case Nh:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yh:case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $h:case ep:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nb(s){switch(s){case Gi:case P_:return{byteLength:1,components:1};case $o:case I_:case ll:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case Pr:case fp:case ma:return{byteLength:4,components:1};case B_:case z_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ux(){let s=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Ub(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,g),d.onUploadCallback();let E;if(m instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=s.SHORT;else if(m instanceof Uint32Array)E=s.UNSIGNED_INT;else if(m instanceof Int32Array)E=s.INT;else if(m instanceof Int8Array)E=s.BYTE;else if(m instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((E,b)=>E.start-b.start);let y=0;for(let E=1;E<v.length;E++){const b=v[y],A=v[E];A.start<=b.start+b.count+1?b.count=Math.max(b.count,A.start+A.count-b.start):(++y,v[y]=A)}v.length=y+1;for(let E=0,b=v.length;E<b;E++){const A=v[E];s.bufferSubData(m,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var Lb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ob=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Pb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ib=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Fb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Vb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,$b=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,nT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cT="gl_FragColor = linearToOutputTexel( gl_FragColor );",uT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_T=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ST=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,TT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,AT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,RT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,CT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,NT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,OT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,PT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,IT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,t1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,s1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,u1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,f1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,x1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,M1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,E1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,w1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,N1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,L1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,P1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,F1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,H1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,G1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,k1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,q1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,eA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,iA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,oA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,uA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:Lb,alphahash_pars_fragment:Ob,alphamap_fragment:Pb,alphamap_pars_fragment:Ib,alphatest_fragment:Bb,alphatest_pars_fragment:zb,aomap_fragment:Fb,aomap_pars_fragment:Hb,batching_pars_vertex:Gb,batching_vertex:Vb,begin_vertex:kb,beginnormal_vertex:Wb,bsdfs:Xb,iridescence_fragment:jb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Kb,clipping_planes_vertex:Qb,color_fragment:Jb,color_pars_fragment:$b,color_pars_vertex:eT,color_vertex:tT,common:nT,cube_uv_reflection_fragment:iT,defaultnormal_vertex:aT,displacementmap_pars_vertex:rT,displacementmap_vertex:sT,emissivemap_fragment:oT,emissivemap_pars_fragment:lT,colorspace_fragment:cT,colorspace_pars_fragment:uT,envmap_fragment:fT,envmap_common_pars_fragment:dT,envmap_pars_fragment:hT,envmap_pars_vertex:pT,envmap_physical_pars_fragment:TT,envmap_vertex:mT,fog_vertex:gT,fog_pars_vertex:vT,fog_fragment:_T,fog_pars_fragment:xT,gradientmap_pars_fragment:yT,lightmap_pars_fragment:ST,lights_lambert_fragment:MT,lights_lambert_pars_fragment:ET,lights_pars_begin:bT,lights_toon_fragment:AT,lights_toon_pars_fragment:wT,lights_phong_fragment:RT,lights_phong_pars_fragment:CT,lights_physical_fragment:DT,lights_physical_pars_fragment:NT,lights_fragment_begin:UT,lights_fragment_maps:LT,lights_fragment_end:OT,logdepthbuf_fragment:PT,logdepthbuf_pars_fragment:IT,logdepthbuf_pars_vertex:BT,logdepthbuf_vertex:zT,map_fragment:FT,map_pars_fragment:HT,map_particle_fragment:GT,map_particle_pars_fragment:VT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:WT,morphinstance_vertex:XT,morphcolor_vertex:jT,morphnormal_vertex:qT,morphtarget_pars_vertex:YT,morphtarget_vertex:ZT,normal_fragment_begin:KT,normal_fragment_maps:QT,normal_pars_fragment:JT,normal_pars_vertex:$T,normal_vertex:e1,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:r1,opaque_fragment:s1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:f1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:v1,skinbase_vertex:_1,skinning_pars_vertex:x1,skinning_vertex:y1,skinnormal_vertex:S1,specularmap_fragment:M1,specularmap_pars_fragment:E1,tonemapping_fragment:b1,tonemapping_pars_fragment:T1,transmission_fragment:A1,transmission_pars_fragment:w1,uv_pars_fragment:R1,uv_pars_vertex:C1,uv_vertex:D1,worldpos_vertex:N1,background_vert:U1,background_frag:L1,backgroundCube_vert:O1,backgroundCube_frag:P1,cube_vert:I1,cube_frag:B1,depth_vert:z1,depth_frag:F1,distanceRGBA_vert:H1,distanceRGBA_frag:G1,equirect_vert:V1,equirect_frag:k1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:j1,meshbasic_frag:q1,meshlambert_vert:Y1,meshlambert_frag:Z1,meshmatcap_vert:K1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:$1,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:aA,meshtoon_frag:rA,points_vert:sA,points_frag:oA,shadow_vert:lA,shadow_frag:cA,sprite_vert:uA,sprite_frag:fA},Ge={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ii={basic:{uniforms:zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:zn([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:zn([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:zn([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:zn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:zn([Ge.points,Ge.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:zn([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:zn([Ge.common,Ge.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:zn([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:zn([Ge.sprite,Ge.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:zn([Ge.common,Ge.displacementmap,{referencePosition:{value:new ge},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:zn([Ge.lights,Ge.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ii.physical={uniforms:zn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const jc={r:0,b:0,g:0},Ar=new Vi,dA=new sn;function hA(s,e,i,a,l,c,f){const d=new Dt(0);let p=c===!0?0:1,m,g,v=null,y=0,E=null;function b(P){let R=P.isScene===!0?P.background:null;return R&&R.isTexture&&(R=(P.backgroundBlurriness>0?i:e).get(R)),R}function A(P){let R=!1;const H=b(P);H===null?_(d,p):H&&H.isColor&&(_(H,1),R=!0);const X=s.xr.getEnvironmentBlendMode();X==="additive"?a.buffers.color.setClear(0,0,0,1,f):X==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||R)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(P,R){const H=b(R);H&&(H.isCubeTexture||H.mapping===fu)?(g===void 0&&(g=new oi(new dl(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:ks(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,z,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ar.copy(R.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(dA.makeRotationFromEuler(Ar)),g.material.toneMapped=Pt.getTransfer(H.colorSpace)!==qt,(v!==H||y!==H.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=H,y=H.version,E=s.toneMapping),g.layers.enableAll(),P.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(m===void 0&&(m=new oi(new hu(2,2),new nr({name:"BackgroundMaterial",uniforms:ks(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=H,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(H.colorSpace)!==qt,H.matrixAutoUpdate===!0&&H.updateMatrix(),m.material.uniforms.uvTransform.value.copy(H.matrix),(v!==H||y!==H.version||E!==s.toneMapping)&&(m.material.needsUpdate=!0,v=H,y=H.version,E=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null))}function _(P,R){P.getRGB(jc,$_(s)),a.buffers.color.setClear(jc.r,jc.g,jc.b,R,f)}function O(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,R=1){d.set(P),p=R,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(P){p=P,_(d,p)},render:A,addToRenderList:x,dispose:O}}function pA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=y(null);let c=l,f=!1;function d(L,Y,re,ce,xe){let ue=!1;const F=v(ce,re,Y);c!==F&&(c=F,m(c.object)),ue=E(L,ce,re,xe),ue&&b(L,ce,re,xe),xe!==null&&e.update(xe,s.ELEMENT_ARRAY_BUFFER),(ue||f)&&(f=!1,R(L,Y,re,ce),xe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(xe).buffer))}function p(){return s.createVertexArray()}function m(L){return s.bindVertexArray(L)}function g(L){return s.deleteVertexArray(L)}function v(L,Y,re){const ce=re.wireframe===!0;let xe=a[L.id];xe===void 0&&(xe={},a[L.id]=xe);let ue=xe[Y.id];ue===void 0&&(ue={},xe[Y.id]=ue);let F=ue[ce];return F===void 0&&(F=y(p()),ue[ce]=F),F}function y(L){const Y=[],re=[],ce=[];for(let xe=0;xe<i;xe++)Y[xe]=0,re[xe]=0,ce[xe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:re,attributeDivisors:ce,object:L,attributes:{},index:null}}function E(L,Y,re,ce){const xe=c.attributes,ue=Y.attributes;let F=0;const Q=re.getAttributes();for(const J in Q)if(Q[J].location>=0){const N=xe[J];let M=ue[J];if(M===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(M=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(M=L.instanceColor)),N===void 0||N.attribute!==M||M&&N.data!==M.data)return!0;F++}return c.attributesNum!==F||c.index!==ce}function b(L,Y,re,ce){const xe={},ue=Y.attributes;let F=0;const Q=re.getAttributes();for(const J in Q)if(Q[J].location>=0){let N=ue[J];N===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(N=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(N=L.instanceColor));const M={};M.attribute=N,N&&N.data&&(M.data=N.data),xe[J]=M,F++}c.attributes=xe,c.attributesNum=F,c.index=ce}function A(){const L=c.newAttributes;for(let Y=0,re=L.length;Y<re;Y++)L[Y]=0}function x(L){_(L,0)}function _(L,Y){const re=c.newAttributes,ce=c.enabledAttributes,xe=c.attributeDivisors;re[L]=1,ce[L]===0&&(s.enableVertexAttribArray(L),ce[L]=1),xe[L]!==Y&&(s.vertexAttribDivisor(L,Y),xe[L]=Y)}function O(){const L=c.newAttributes,Y=c.enabledAttributes;for(let re=0,ce=Y.length;re<ce;re++)Y[re]!==L[re]&&(s.disableVertexAttribArray(re),Y[re]=0)}function P(L,Y,re,ce,xe,ue,F){F===!0?s.vertexAttribIPointer(L,Y,re,xe,ue):s.vertexAttribPointer(L,Y,re,ce,xe,ue)}function R(L,Y,re,ce){A();const xe=ce.attributes,ue=re.getAttributes(),F=Y.defaultAttributeValues;for(const Q in ue){const J=ue[Q];if(J.location>=0){let W=xe[Q];if(W===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),W!==void 0){const N=W.normalized,M=W.itemSize,k=e.get(W);if(k===void 0)continue;const ee=k.buffer,oe=k.type,se=k.bytesPerElement,T=oe===s.INT||oe===s.UNSIGNED_INT||W.gpuType===fp;if(W.isInterleavedBufferAttribute){const I=W.data,te=I.stride,le=W.offset;if(I.isInstancedInterleavedBuffer){for(let Ee=0;Ee<J.locationSize;Ee++)_(J.location+Ee,I.meshPerAttribute);L.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let Ee=0;Ee<J.locationSize;Ee++)x(J.location+Ee);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Ee=0;Ee<J.locationSize;Ee++)P(J.location+Ee,M/J.locationSize,oe,N,te*se,(le+M/J.locationSize*Ee)*se,T)}else{if(W.isInstancedBufferAttribute){for(let I=0;I<J.locationSize;I++)_(J.location+I,W.meshPerAttribute);L.isInstancedMesh!==!0&&ce._maxInstanceCount===void 0&&(ce._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let I=0;I<J.locationSize;I++)x(J.location+I);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let I=0;I<J.locationSize;I++)P(J.location+I,M/J.locationSize,oe,N,M*se,M/J.locationSize*I*se,T)}}else if(F!==void 0){const N=F[Q];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(J.location,N);break;case 3:s.vertexAttrib3fv(J.location,N);break;case 4:s.vertexAttrib4fv(J.location,N);break;default:s.vertexAttrib1fv(J.location,N)}}}}O()}function H(){K();for(const L in a){const Y=a[L];for(const re in Y){const ce=Y[re];for(const xe in ce)g(ce[xe].object),delete ce[xe];delete Y[re]}delete a[L]}}function X(L){if(a[L.id]===void 0)return;const Y=a[L.id];for(const re in Y){const ce=Y[re];for(const xe in ce)g(ce[xe].object),delete ce[xe];delete Y[re]}delete a[L.id]}function z(L){for(const Y in a){const re=a[Y];if(re[L.id]===void 0)continue;const ce=re[L.id];for(const xe in ce)g(ce[xe].object),delete ce[xe];delete re[L.id]}}function K(){U(),f=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:U,dispose:H,releaseStatesOfGeometry:X,releaseStatesOfProgram:z,initAttributes:A,enableAttribute:x,disableUnusedAttributes:O}}function mA(s,e,i){let a;function l(m){a=m}function c(m,g){s.drawArrays(a,m,g),i.update(g,a,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),i.update(g,a,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b];i.update(E,a,1)}function p(m,g,v,y){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<m.length;b++)f(m[b],g[b],y[b]);else{E.multiDrawArraysInstancedWEBGL(a,m,0,g,0,y,0,v);let b=0;for(let A=0;A<v;A++)b+=g[A]*y[A];i.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function gA(s,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==wi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const K=z===ll&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Gi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ma&&!K)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),O=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),P=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),H=b>0,X=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:E,maxVertexTextures:b,maxTextureSize:A,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:O,maxVaryings:P,maxFragmentUniforms:R,vertexTextures:H,maxSamples:X}}function vA(s){const e=this;let i=null,a=0,l=!1,c=!1;const f=new Rr,d=new _t,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const E=v.length!==0||y||a!==0||l;return l=y,a=v.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,E){const b=v.clippingPlanes,A=v.clipIntersection,x=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!x)c?g(null):m();else{const O=c?0:a,P=O*4;let R=_.clippingState||null;p.value=R,R=g(b,y,P,E);for(let H=0;H!==P;++H)R[H]=i[H];_.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=O}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,y,E,b){const A=v!==null?v.length:0;let x=null;if(A!==0){if(x=p.value,b!==!0||x===null){const _=E+A*4,O=y.matrixWorldInverse;d.getNormalMatrix(O),(x===null||x.length<_)&&(x=new Float32Array(_));for(let P=0,R=E;P!==A;++P,R+=4)f.copy(v[P]).applyMatrix4(O,d),f.normal.toArray(x,R),x[R+3]=f.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,x}}function _A(s){let e=new WeakMap;function i(f,d){return d===Eh?f.mapping=Hs:d===bh&&(f.mapping=Gs),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===Eh||d===bh)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new yb(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Ls=4,Wv=[.125,.215,.35,.446,.526,.582],Nr=20,ih=new ox,Xv=new Dt;let ah=null,rh=0,sh=0,oh=!1;const Cr=(1+Math.sqrt(5))/2,Us=1/Cr,jv=[new ge(-Cr,Us,0),new ge(Cr,Us,0),new ge(-Us,0,Cr),new ge(Us,0,Cr),new ge(0,Cr,-Us),new ge(0,Cr,Us),new ge(-1,1,-1),new ge(1,1,-1),new ge(-1,1,1),new ge(1,1,1)],xA=new ge;class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:d=xA}=c;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,qc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hs||e.mapping===Gs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:Bi,minFilter:Bi,generateMipmaps:!1,type:ll,format:wi,colorSpace:Vs,depthBuffer:!1},l=Yv(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yA(c)),this._blurMaterial=SA(c,e,i)}return l}_compileMaterial(e){const i=new oi(this._lodPlanes[0],e);this._renderer.compile(i,ih)}_sceneToCubeUV(e,i,a,l,c){const p=new si(90,1,i,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,E=v.toneMapping;v.getClearColor(Xv),v.toneMapping=er,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const A=new K_({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),x=new oi(new dl,A);let _=!1;const O=e.background;O?O.isColor&&(A.color.copy(O),e.background=null,_=!0):(A.color.copy(Xv),_=!0);for(let P=0;P<6;P++){const R=P%3;R===0?(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[P],c.y,c.z)):R===1?(p.up.set(0,0,m[P]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[P],c.z)):(p.up.set(0,m[P],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[P]));const H=this._cubeSize;qc(l,R*H,P>2?H:0,H,H),v.setRenderTarget(l),_&&v.render(x,p),v.render(e,p)}x.geometry.dispose(),x.material.dispose(),v.toneMapping=E,v.autoClear=y,e.background=O}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Hs||e.mapping===Gs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new oi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;qc(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,ih)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=jv[(l-c-1)%jv.length];this._blur(e,c-1,c,f,d)}i.autoClear=a}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new oi(this._lodPlanes[l],m),y=m.uniforms,E=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Nr-1),A=c/b,x=isFinite(c)?1+Math.floor(g*A):Nr;x>Nr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Nr}`);const _=[];let O=0;for(let z=0;z<Nr;++z){const K=z/A,U=Math.exp(-K*K/2);_.push(U),z===0?O+=U:z<x&&(O+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/O;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:P}=this;y.dTheta.value=b,y.mipInt.value=P-a;const R=this._sizeLods[l],H=3*R*(l>P-Ls?l-P+Ls:0),X=4*(this._cubeSize-R);qc(i,H,X,3*R,2*R),p.setRenderTarget(i),p.render(v,ih)}}function yA(s){const e=[],i=[],a=[];let l=s;const c=s-Ls+1+Wv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Ls?p=Wv[f-s+Ls-1]:f===0&&(p=0),a.push(p);const m=1/(d-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,b=6,A=3,x=2,_=1,O=new Float32Array(A*b*E),P=new Float32Array(x*b*E),R=new Float32Array(_*b*E);for(let X=0;X<E;X++){const z=X%3*2/3-1,K=X>2?0:-1,U=[z,K,0,z+2/3,K,0,z+2/3,K+1,0,z,K,0,z+2/3,K+1,0,z,K+1,0];O.set(U,A*b*X),P.set(y,x*b*X);const L=[X,X,X,X,X,X];R.set(L,_*b*X)}const H=new Ci;H.setAttribute("position",new Zn(O,A)),H.setAttribute("uv",new Zn(P,x)),H.setAttribute("faceIndex",new Zn(R,_)),e.push(H),l>Ls&&l--}return{lodPlanes:e,sizeLods:i,sigmas:a}}function Yv(s,e,i){const a=new Ir(s,e,i);return a.texture.mapping=fu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function qc(s,e,i,a,l){s.viewport.set(e,i,a,l),s.scissor.set(e,i,a,l)}function SA(s,e,i){const a=new Float32Array(Nr),l=new ge(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Zv(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function Kv(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$a,depthTest:!1,depthWrite:!1})}function yp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function MA(s){let e=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const p=d.mapping,m=p===Eh||p===bh,g=p===Hs||p===Gs;if(m||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new qv(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return m&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new qv(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function EA(s){const e={};function i(a){if(e[a]!==void 0)return e[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&il("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function bA(s,e,i,a){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete l[y.id];const E=c.get(y);E&&(e.remove(E),c.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(v){const y=v.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER)}function m(v){const y=[],E=v.index,b=v.attributes.position;let A=0;if(E!==null){const O=E.array;A=E.version;for(let P=0,R=O.length;P<R;P+=3){const H=O[P+0],X=O[P+1],z=O[P+2];y.push(H,X,X,z,z,H)}}else if(b!==void 0){const O=b.array;A=b.version;for(let P=0,R=O.length/3-1;P<R;P+=3){const H=P+0,X=P+1,z=P+2;y.push(H,X,X,z,z,H)}}else return;const x=new(X_(y)?J_:Q_)(y,1);x.version=A;const _=c.get(v);_&&e.remove(_),c.set(v,x)}function g(v){const y=c.get(v);if(y){const E=v.index;E!==null&&y.version<E.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function TA(s,e,i){let a;function l(y){a=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,E){s.drawElements(a,E,c,y*f),i.update(E,a,1)}function m(y,E,b){b!==0&&(s.drawElementsInstanced(a,E,c,y*f,b),i.update(E,a,b))}function g(y,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,E,0,c,y,0,b);let x=0;for(let _=0;_<b;_++)x+=E[_];i.update(x,a,1)}function v(y,E,b,A){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)m(y[_]/f,E[_],A[_]);else{x.multiDrawElementsInstancedWEBGL(a,E,0,c,y,0,A,0,b);let _=0;for(let O=0;O<b;O++)_+=E[O]*A[O];i.update(_,a,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function AA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function wA(s,e,i){const a=new WeakMap,l=new rn;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=a.get(d);if(y===void 0||y.count!==v){let L=function(){K.dispose(),a.delete(d),d.removeEventListener("dispose",L)};var E=L;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],P=d.morphAttributes.color||[];let R=0;b===!0&&(R=1),A===!0&&(R=2),x===!0&&(R=3);let H=d.attributes.position.count*R,X=1;H>e.maxTextureSize&&(X=Math.ceil(H/e.maxTextureSize),H=e.maxTextureSize);const z=new Float32Array(H*X*4*v),K=new j_(z,H,X,v);K.type=ma,K.needsUpdate=!0;const U=R*4;for(let Y=0;Y<v;Y++){const re=_[Y],ce=O[Y],xe=P[Y],ue=H*X*4*Y;for(let F=0;F<re.count;F++){const Q=F*U;b===!0&&(l.fromBufferAttribute(re,F),z[ue+Q+0]=l.x,z[ue+Q+1]=l.y,z[ue+Q+2]=l.z,z[ue+Q+3]=0),A===!0&&(l.fromBufferAttribute(ce,F),z[ue+Q+4]=l.x,z[ue+Q+5]=l.y,z[ue+Q+6]=l.z,z[ue+Q+7]=0),x===!0&&(l.fromBufferAttribute(xe,F),z[ue+Q+8]=l.x,z[ue+Q+9]=l.y,z[ue+Q+10]=l.z,z[ue+Q+11]=xe.itemSize===4?l.w:1)}}y={count:v,texture:K,size:new It(H,X)},a.set(d,y),d.addEventListener("dispose",L)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let x=0;x<m.length;x++)b+=m[x];const A=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",A),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function RA(s,e,i,a){let l=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return v}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const fx=new Yn,Qv=new ax(1,1),dx=new j_,hx=new ib,px=new tx,Jv=[],$v=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function Ys(s,e,i){const a=s[0];if(a<=0||a>0)return s;const l=e*i;let c=Jv[l];if(c===void 0&&(c=new Float32Array(l),Jv[l]=c),e!==0){a.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function xn(s,e){if(s.length!==e.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,a=e.length;i<a;i++)s[i]=e[i]}function mu(s,e){let i=$v[e];i===void 0&&(i=new Int32Array(e),$v[e]=i);for(let a=0;a!==e;++a)i[a]=s.allocateTextureUnit();return i}function CA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function DA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function NA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function LA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(xn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,a))return;n_.set(a),s.uniformMatrix2fv(this.addr,!1,n_),yn(i,a)}}function OA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(xn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,a))return;t_.set(a),s.uniformMatrix3fv(this.addr,!1,t_),yn(i,a)}}function PA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(xn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(xn(i,a))return;e_.set(a),s.uniformMatrix4fv(this.addr,!1,e_),yn(i,a)}}function IA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function BA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function zA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function FA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function HA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function GA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function VA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function kA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function WA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Qv.compareFunction=W_,c=Qv):c=fx,i.setTexture2D(e||c,l)}function XA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||hx,l)}function jA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||px,l)}function qA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||dx,l)}function YA(s){switch(s){case 5126:return CA;case 35664:return DA;case 35665:return NA;case 35666:return UA;case 35674:return LA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return BA;case 35668:case 35672:return zA;case 35669:case 35673:return FA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return qA}}function ZA(s,e){s.uniform1fv(this.addr,e)}function KA(s,e){const i=Ys(e,this.size,2);s.uniform2fv(this.addr,i)}function QA(s,e){const i=Ys(e,this.size,3);s.uniform3fv(this.addr,i)}function JA(s,e){const i=Ys(e,this.size,4);s.uniform4fv(this.addr,i)}function $A(s,e){const i=Ys(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ew(s,e){const i=Ys(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tw(s,e){const i=Ys(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function nw(s,e){s.uniform1iv(this.addr,e)}function iw(s,e){s.uniform2iv(this.addr,e)}function aw(s,e){s.uniform3iv(this.addr,e)}function rw(s,e){s.uniform4iv(this.addr,e)}function sw(s,e){s.uniform1uiv(this.addr,e)}function ow(s,e){s.uniform2uiv(this.addr,e)}function lw(s,e){s.uniform3uiv(this.addr,e)}function cw(s,e){s.uniform4uiv(this.addr,e)}function uw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);xn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||fx,c[f])}function fw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);xn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||hx,c[f])}function dw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);xn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||px,c[f])}function hw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);xn(a,c)||(s.uniform1iv(this.addr,c),yn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||dx,c[f])}function pw(s){switch(s){case 5126:return ZA;case 35664:return KA;case 35665:return QA;case 35666:return JA;case 35674:return $A;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return aw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return ow;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return hw}}class mw{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=YA(i.type)}}class gw{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pw(i.type)}}class vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],a)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function i_(s,e){s.seq.push(e),s.map[e.id]=e}function _w(s,e,i){const a=s.name,l=a.length;for(lh.lastIndex=0;;){const c=lh.exec(a),f=lh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){i_(i,m===void 0?new mw(d,s,e):new gw(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new vw(d),i_(i,v)),i=v}}}class nu{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);_w(c,f,this)}}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=a[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function a_(s,e,i){const a=s.createShader(e);return s.shaderSource(a,i),s.compileShader(a),a}const xw=37297;let yw=0;function Sw(s,e){const i=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const r_=new _t;function Mw(s){Pt._getMatrix(r_,Pt.workingColorSpace,s);const e=`mat3( ${r_.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(s)){case au:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function s_(s,e,i){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Sw(s.getShaderSource(e),d)}else return c}function Ew(s,e){const i=Mw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bw(s,e){let i;switch(e){case NE:i="Linear";break;case UE:i="Reinhard";break;case LE:i="Cineon";break;case OE:i="ACESFilmic";break;case IE:i="AgX";break;case BE:i="Neutral";break;case PE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new ge;function Tw(){Pt.getLuminanceCoefficients(Yc);const s=Yc.x.toFixed(4),e=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Aw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zo).join(`
`)}function ww(s){const e=[];for(const i in s){const a=s[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function Rw(s,e){const i={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function Zo(s){return s!==""}function o_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(s){return s.replace(Cw,Nw)}const Dw=new Map;function Nw(s,e){let i=xt[e];if(i===void 0){const a=Dw.get(e);if(a!==void 0)i=xt[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return ip(i)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(s){return s.replace(Uw,Lw)}function Lw(s,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function u_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Ow(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(e="SHADOWMAP_TYPE_VSM"),e}function Pw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Hs:case Gs:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Gs:e="ENVMAP_MODE_REFRACTION";break}return e}function Bw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case DE:e="ENVMAP_BLENDING_ADD";break}return e}function zw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function Fw(s,e,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=Ow(i),m=Pw(i),g=Iw(i),v=Bw(i),y=zw(i),E=Aw(i),b=ww(c),A=l.createProgram();let x,_,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Zo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Zo).join(`
`),_.length>0&&(_+=`
`)):(x=[u_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),_=[u_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==er?"#define TONE_MAPPING":"",i.toneMapping!==er?xt.tonemapping_pars_fragment:"",i.toneMapping!==er?bw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Ew("linearToOutputTexel",i.outputColorSpace),Tw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),f=ip(f),f=o_(f,i),f=l_(f,i),d=ip(d),d=o_(d,i),d=l_(d,i),f=c_(f),d=c_(d),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const P=O+x+f,R=O+_+d,H=a_(l,l.VERTEX_SHADER,P),X=a_(l,l.FRAGMENT_SHADER,R);l.attachShader(A,H),l.attachShader(A,X),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function z(Y){if(s.debug.checkShaderErrors){const re=l.getProgramInfoLog(A)||"",ce=l.getShaderInfoLog(H)||"",xe=l.getShaderInfoLog(X)||"",ue=re.trim(),F=ce.trim(),Q=xe.trim();let J=!0,W=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,A,H,X);else{const N=s_(l,H,"vertex"),M=s_(l,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+Y.name+`
Material Type: `+Y.type+`

Program Info Log: `+ue+`
`+N+`
`+M)}else ue!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ue):(F===""||Q==="")&&(W=!1);W&&(Y.diagnostics={runnable:J,programLog:ue,vertexShader:{log:F,prefix:x},fragmentShader:{log:Q,prefix:_}})}l.deleteShader(H),l.deleteShader(X),K=new nu(l,A),U=Rw(l,A)}let K;this.getUniforms=function(){return K===void 0&&z(this),K};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let L=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=l.getProgramParameter(A,xw)),L},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=X,this}let Hw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new Vw(e),i.set(e,a)),a}}class Vw{constructor(e){this.id=Hw++,this.code=e,this.usedTimes=0}}function kw(s,e,i,a,l,c,f){const d=new Y_,p=new Gw,m=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(U){return m.add(U),U===0?"uv":`uv${U}`}function x(U,L,Y,re,ce){const xe=re.fog,ue=ce.geometry,F=U.isMeshStandardMaterial?re.environment:null,Q=(U.isMeshStandardMaterial?i:e).get(U.envMap||F),J=Q&&Q.mapping===fu?Q.image.height:null,W=b[U.type];U.precision!==null&&(E=l.getMaxPrecision(U.precision),E!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",E,"instead."));const N=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,M=N!==void 0?N.length:0;let k=0;ue.morphAttributes.position!==void 0&&(k=1),ue.morphAttributes.normal!==void 0&&(k=2),ue.morphAttributes.color!==void 0&&(k=3);let ee,oe,se,T;if(W){const Nt=Ii[W];ee=Nt.vertexShader,oe=Nt.fragmentShader}else ee=U.vertexShader,oe=U.fragmentShader,p.update(U),se=p.getVertexShaderID(U),T=p.getFragmentShaderID(U);const I=s.getRenderTarget(),te=s.state.buffers.depth.getReversed(),le=ce.isInstancedMesh===!0,Ee=ce.isBatchedMesh===!0,Ce=!!U.map,We=!!U.matcap,V=!!Q,Ie=!!U.aoMap,Be=!!U.lightMap,Ye=!!U.bumpMap,ze=!!U.normalMap,ht=!!U.displacementMap,Ve=!!U.emissiveMap,at=!!U.metalnessMap,Yt=!!U.roughnessMap,kt=U.anisotropy>0,G=U.clearcoat>0,w=U.dispersion>0,fe=U.iridescence>0,Me=U.sheen>0,Re=U.transmission>0,ye=kt&&!!U.anisotropyMap,tt=G&&!!U.clearcoatMap,Le=G&&!!U.clearcoatNormalMap,Qe=G&&!!U.clearcoatRoughnessMap,nt=fe&&!!U.iridescenceMap,Ne=fe&&!!U.iridescenceThicknessMap,Oe=Me&&!!U.sheenColorMap,rt=Me&&!!U.sheenRoughnessMap,Xe=!!U.specularMap,Fe=!!U.specularColorMap,mt=!!U.specularIntensityMap,$=Re&&!!U.transmissionMap,Ue=Re&&!!U.thicknessMap,Pe=!!U.gradientMap,qe=!!U.alphaMap,De=U.alphaTest>0,Ae=!!U.alphaHash,Ze=!!U.extensions;let dt=er;U.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Ht={shaderID:W,shaderType:U.type,shaderName:U.name,vertexShader:ee,fragmentShader:oe,defines:U.defines,customVertexShaderID:se,customFragmentShaderID:T,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:E,batching:Ee,batchingColor:Ee&&ce._colorsTexture!==null,instancing:le,instancingColor:le&&ce.instanceColor!==null,instancingMorph:le&&ce.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:I===null?s.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Vs,alphaToCoverage:!!U.alphaToCoverage,map:Ce,matcap:We,envMap:V,envMapMode:V&&Q.mapping,envMapCubeUVHeight:J,aoMap:Ie,lightMap:Be,bumpMap:Ye,normalMap:ze,displacementMap:y&&ht,emissiveMap:Ve,normalMapObjectSpace:ze&&U.normalMapType===GE,normalMapTangentSpace:ze&&U.normalMapType===k_,metalnessMap:at,roughnessMap:Yt,anisotropy:kt,anisotropyMap:ye,clearcoat:G,clearcoatMap:tt,clearcoatNormalMap:Le,clearcoatRoughnessMap:Qe,dispersion:w,iridescence:fe,iridescenceMap:nt,iridescenceThicknessMap:Ne,sheen:Me,sheenColorMap:Oe,sheenRoughnessMap:rt,specularMap:Xe,specularColorMap:Fe,specularIntensityMap:mt,transmission:Re,transmissionMap:$,thicknessMap:Ue,gradientMap:Pe,opaque:U.transparent===!1&&U.blending===Ps&&U.alphaToCoverage===!1,alphaMap:qe,alphaTest:De,alphaHash:Ae,combine:U.combine,mapUv:Ce&&A(U.map.channel),aoMapUv:Ie&&A(U.aoMap.channel),lightMapUv:Be&&A(U.lightMap.channel),bumpMapUv:Ye&&A(U.bumpMap.channel),normalMapUv:ze&&A(U.normalMap.channel),displacementMapUv:ht&&A(U.displacementMap.channel),emissiveMapUv:Ve&&A(U.emissiveMap.channel),metalnessMapUv:at&&A(U.metalnessMap.channel),roughnessMapUv:Yt&&A(U.roughnessMap.channel),anisotropyMapUv:ye&&A(U.anisotropyMap.channel),clearcoatMapUv:tt&&A(U.clearcoatMap.channel),clearcoatNormalMapUv:Le&&A(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&A(U.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&A(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&A(U.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&A(U.sheenColorMap.channel),sheenRoughnessMapUv:rt&&A(U.sheenRoughnessMap.channel),specularMapUv:Xe&&A(U.specularMap.channel),specularColorMapUv:Fe&&A(U.specularColorMap.channel),specularIntensityMapUv:mt&&A(U.specularIntensityMap.channel),transmissionMapUv:$&&A(U.transmissionMap.channel),thicknessMapUv:Ue&&A(U.thicknessMap.channel),alphaMapUv:qe&&A(U.alphaMap.channel),vertexTangents:!!ue.attributes.tangent&&(ze||kt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,pointsUvs:ce.isPoints===!0&&!!ue.attributes.uv&&(Ce||qe),fog:!!xe,useFog:U.fog===!0,fogExp2:!!xe&&xe.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:te,skinning:ce.isSkinnedMesh===!0,morphTargets:ue.morphAttributes.position!==void 0,morphNormals:ue.morphAttributes.normal!==void 0,morphColors:ue.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:k,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&Y.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:Ce&&U.map.isVideoTexture===!0&&Pt.getTransfer(U.map.colorSpace)===qt,decodeVideoTextureEmissive:Ve&&U.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(U.emissiveMap.colorSpace)===qt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===pa,flipSided:U.side===qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Ze&&U.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&U.extensions.multiDraw===!0||Ee)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ht.vertexUv1s=m.has(1),Ht.vertexUv2s=m.has(2),Ht.vertexUv3s=m.has(3),m.clear(),Ht}function _(U){const L=[];if(U.shaderID?L.push(U.shaderID):(L.push(U.customVertexShaderID),L.push(U.customFragmentShaderID)),U.defines!==void 0)for(const Y in U.defines)L.push(Y),L.push(U.defines[Y]);return U.isRawShaderMaterial===!1&&(O(L,U),P(L,U),L.push(s.outputColorSpace)),L.push(U.customProgramCacheKey),L.join()}function O(U,L){U.push(L.precision),U.push(L.outputColorSpace),U.push(L.envMapMode),U.push(L.envMapCubeUVHeight),U.push(L.mapUv),U.push(L.alphaMapUv),U.push(L.lightMapUv),U.push(L.aoMapUv),U.push(L.bumpMapUv),U.push(L.normalMapUv),U.push(L.displacementMapUv),U.push(L.emissiveMapUv),U.push(L.metalnessMapUv),U.push(L.roughnessMapUv),U.push(L.anisotropyMapUv),U.push(L.clearcoatMapUv),U.push(L.clearcoatNormalMapUv),U.push(L.clearcoatRoughnessMapUv),U.push(L.iridescenceMapUv),U.push(L.iridescenceThicknessMapUv),U.push(L.sheenColorMapUv),U.push(L.sheenRoughnessMapUv),U.push(L.specularMapUv),U.push(L.specularColorMapUv),U.push(L.specularIntensityMapUv),U.push(L.transmissionMapUv),U.push(L.thicknessMapUv),U.push(L.combine),U.push(L.fogExp2),U.push(L.sizeAttenuation),U.push(L.morphTargetsCount),U.push(L.morphAttributeCount),U.push(L.numDirLights),U.push(L.numPointLights),U.push(L.numSpotLights),U.push(L.numSpotLightMaps),U.push(L.numHemiLights),U.push(L.numRectAreaLights),U.push(L.numDirLightShadows),U.push(L.numPointLightShadows),U.push(L.numSpotLightShadows),U.push(L.numSpotLightShadowsWithMaps),U.push(L.numLightProbes),U.push(L.shadowMapType),U.push(L.toneMapping),U.push(L.numClippingPlanes),U.push(L.numClipIntersection),U.push(L.depthPacking)}function P(U,L){d.disableAll(),L.supportsVertexTextures&&d.enable(0),L.instancing&&d.enable(1),L.instancingColor&&d.enable(2),L.instancingMorph&&d.enable(3),L.matcap&&d.enable(4),L.envMap&&d.enable(5),L.normalMapObjectSpace&&d.enable(6),L.normalMapTangentSpace&&d.enable(7),L.clearcoat&&d.enable(8),L.iridescence&&d.enable(9),L.alphaTest&&d.enable(10),L.vertexColors&&d.enable(11),L.vertexAlphas&&d.enable(12),L.vertexUv1s&&d.enable(13),L.vertexUv2s&&d.enable(14),L.vertexUv3s&&d.enable(15),L.vertexTangents&&d.enable(16),L.anisotropy&&d.enable(17),L.alphaHash&&d.enable(18),L.batching&&d.enable(19),L.dispersion&&d.enable(20),L.batchingColor&&d.enable(21),L.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),U.push(d.mask)}function R(U){const L=b[U.type];let Y;if(L){const re=Ii[L];Y=gb.clone(re.uniforms)}else Y=U.uniforms;return Y}function H(U,L){let Y;for(let re=0,ce=g.length;re<ce;re++){const xe=g[re];if(xe.cacheKey===L){Y=xe,++Y.usedTimes;break}}return Y===void 0&&(Y=new Fw(s,L,U,c),g.push(Y)),Y}function X(U){if(--U.usedTimes===0){const L=g.indexOf(U);g[L]=g[g.length-1],g.pop(),U.destroy()}}function z(U){p.remove(U)}function K(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:R,acquireProgram:H,releaseProgram:X,releaseShaderCache:z,programs:g,dispose:K}}function Ww(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function a(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function Xw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function f_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function d_(){const s=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(v,y,E,b,A,x){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:E,groupOrder:b,renderOrder:v.renderOrder,z:A,group:x},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=E,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=A,_.group=x),e++,_}function d(v,y,E,b,A,x){const _=f(v,y,E,b,A,x);E.transmission>0?a.push(_):E.transparent===!0?l.push(_):i.push(_)}function p(v,y,E,b,A,x){const _=f(v,y,E,b,A,x);E.transmission>0?a.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,y){i.length>1&&i.sort(v||Xw),a.length>1&&a.sort(y||f_),l.length>1&&l.sort(y||f_)}function g(){for(let v=e,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function jw(){let s=new WeakMap;function e(a,l){const c=s.get(a);let f;return c===void 0?(f=new d_,s.set(a,[f])):l>=c.length?(f=new d_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function qw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ge,color:new Dt};break;case"SpotLight":i={position:new ge,direction:new ge,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ge,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ge,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new ge,halfWidth:new ge,halfHeight:new ge};break}return s[e.id]=i,i}}}function Yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let Zw=0;function Kw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qw(s){const e=new qw,i=Yw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new ge);const l=new ge,c=new sn,f=new sn;function d(m){let g=0,v=0,y=0;for(let U=0;U<9;U++)a.probe[U].set(0,0,0);let E=0,b=0,A=0,x=0,_=0,O=0,P=0,R=0,H=0,X=0,z=0;m.sort(Kw);for(let U=0,L=m.length;U<L;U++){const Y=m[U],re=Y.color,ce=Y.intensity,xe=Y.distance,ue=Y.shadow&&Y.shadow.map?Y.shadow.map.texture:null;if(Y.isAmbientLight)g+=re.r*ce,v+=re.g*ce,y+=re.b*ce;else if(Y.isLightProbe){for(let F=0;F<9;F++)a.probe[F].addScaledVector(Y.sh.coefficients[F],ce);z++}else if(Y.isDirectionalLight){const F=e.get(Y);if(F.color.copy(Y.color).multiplyScalar(Y.intensity),Y.castShadow){const Q=Y.shadow,J=i.get(Y);J.shadowIntensity=Q.intensity,J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,a.directionalShadow[E]=J,a.directionalShadowMap[E]=ue,a.directionalShadowMatrix[E]=Y.shadow.matrix,O++}a.directional[E]=F,E++}else if(Y.isSpotLight){const F=e.get(Y);F.position.setFromMatrixPosition(Y.matrixWorld),F.color.copy(re).multiplyScalar(ce),F.distance=xe,F.coneCos=Math.cos(Y.angle),F.penumbraCos=Math.cos(Y.angle*(1-Y.penumbra)),F.decay=Y.decay,a.spot[A]=F;const Q=Y.shadow;if(Y.map&&(a.spotLightMap[H]=Y.map,H++,Q.updateMatrices(Y),Y.castShadow&&X++),a.spotLightMatrix[A]=Q.matrix,Y.castShadow){const J=i.get(Y);J.shadowIntensity=Q.intensity,J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,a.spotShadow[A]=J,a.spotShadowMap[A]=ue,R++}A++}else if(Y.isRectAreaLight){const F=e.get(Y);F.color.copy(re).multiplyScalar(ce),F.halfWidth.set(Y.width*.5,0,0),F.halfHeight.set(0,Y.height*.5,0),a.rectArea[x]=F,x++}else if(Y.isPointLight){const F=e.get(Y);if(F.color.copy(Y.color).multiplyScalar(Y.intensity),F.distance=Y.distance,F.decay=Y.decay,Y.castShadow){const Q=Y.shadow,J=i.get(Y);J.shadowIntensity=Q.intensity,J.shadowBias=Q.bias,J.shadowNormalBias=Q.normalBias,J.shadowRadius=Q.radius,J.shadowMapSize=Q.mapSize,J.shadowCameraNear=Q.camera.near,J.shadowCameraFar=Q.camera.far,a.pointShadow[b]=J,a.pointShadowMap[b]=ue,a.pointShadowMatrix[b]=Y.shadow.matrix,P++}a.point[b]=F,b++}else if(Y.isHemisphereLight){const F=e.get(Y);F.skyColor.copy(Y.color).multiplyScalar(ce),F.groundColor.copy(Y.groundColor).multiplyScalar(ce),a.hemi[_]=F,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ge.LTC_FLOAT_1,a.rectAreaLTC2=Ge.LTC_FLOAT_2):(a.rectAreaLTC1=Ge.LTC_HALF_1,a.rectAreaLTC2=Ge.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=y;const K=a.hash;(K.directionalLength!==E||K.pointLength!==b||K.spotLength!==A||K.rectAreaLength!==x||K.hemiLength!==_||K.numDirectionalShadows!==O||K.numPointShadows!==P||K.numSpotShadows!==R||K.numSpotMaps!==H||K.numLightProbes!==z)&&(a.directional.length=E,a.spot.length=A,a.rectArea.length=x,a.point.length=b,a.hemi.length=_,a.directionalShadow.length=O,a.directionalShadowMap.length=O,a.pointShadow.length=P,a.pointShadowMap.length=P,a.spotShadow.length=R,a.spotShadowMap.length=R,a.directionalShadowMatrix.length=O,a.pointShadowMatrix.length=P,a.spotLightMatrix.length=R+H-X,a.spotLightMap.length=H,a.numSpotLightShadowsWithMaps=X,a.numLightProbes=z,K.directionalLength=E,K.pointLength=b,K.spotLength=A,K.rectAreaLength=x,K.hemiLength=_,K.numDirectionalShadows=O,K.numPointShadows=P,K.numSpotShadows=R,K.numSpotMaps=H,K.numLightProbes=z,a.version=Zw++)}function p(m,g){let v=0,y=0,E=0,b=0,A=0;const x=g.matrixWorldInverse;for(let _=0,O=m.length;_<O;_++){const P=m[_];if(P.isDirectionalLight){const R=a.directional[v];R.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),v++}else if(P.isSpotLight){const R=a.spot[E];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(P.matrixWorld),l.setFromMatrixPosition(P.target.matrixWorld),R.direction.sub(l),R.direction.transformDirection(x),E++}else if(P.isRectAreaLight){const R=a.rectArea[b];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(x),f.identity(),c.copy(P.matrixWorld),c.premultiply(x),f.extractRotation(c),R.halfWidth.set(P.width*.5,0,0),R.halfHeight.set(0,P.height*.5,0),R.halfWidth.applyMatrix4(f),R.halfHeight.applyMatrix4(f),b++}else if(P.isPointLight){const R=a.point[y];R.position.setFromMatrixPosition(P.matrixWorld),R.position.applyMatrix4(x),y++}else if(P.isHemisphereLight){const R=a.hemi[A];R.direction.setFromMatrixPosition(P.matrixWorld),R.direction.transformDirection(x),A++}}}return{setup:d,setupView:p,state:a}}function h_(s){const e=new Qw(s),i=[],a=[];function l(g){m.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function Jw(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new h_(s),e.set(l,[d])):c>=f.length?(d=new h_(s),f.push(d)):d=f[c],d}function a(){e=new WeakMap}return{get:i,dispose:a}}const $w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tR(s,e,i){let a=new _p;const l=new It,c=new It,f=new rn,d=new Ab({depthPacking:HE}),p=new wb,m={},g=i.maxTextureSize,v={[tr]:qn,[qn]:tr,[pa]:pa},y=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:$w,fragmentShader:eR}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const b=new Ci;b.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new oi(b,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U_;let _=this.type;this.render=function(X,z,K){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||X.length===0)return;const U=s.getRenderTarget(),L=s.getActiveCubeFace(),Y=s.getActiveMipmapLevel(),re=s.state;re.setBlending($a),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const ce=_!==ha&&this.type===ha,xe=_===ha&&this.type!==ha;for(let ue=0,F=X.length;ue<F;ue++){const Q=X[ue],J=Q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;l.copy(J.mapSize);const W=J.getFrameExtents();if(l.multiply(W),c.copy(J.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/W.x),l.x=c.x*W.x,J.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/W.y),l.y=c.y*W.y,J.mapSize.y=c.y)),J.map===null||ce===!0||xe===!0){const M=this.type!==ha?{minFilter:Ri,magFilter:Ri}:{};J.map!==null&&J.map.dispose(),J.map=new Ir(l.x,l.y,M),J.map.texture.name=Q.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const N=J.getViewportCount();for(let M=0;M<N;M++){const k=J.getViewport(M);f.set(c.x*k.x,c.y*k.y,c.x*k.z,c.y*k.w),re.viewport(f),J.updateMatrices(Q,M),a=J.getFrustum(),R(z,K,J.camera,Q,this.type)}J.isPointLightShadow!==!0&&this.type===ha&&O(J,K),J.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(U,L,Y)};function O(X,z){const K=e.update(A);y.defines.VSM_SAMPLES!==X.blurSamples&&(y.defines.VSM_SAMPLES=X.blurSamples,E.defines.VSM_SAMPLES=X.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new Ir(l.x,l.y)),y.uniforms.shadow_pass.value=X.map.texture,y.uniforms.resolution.value=X.mapSize,y.uniforms.radius.value=X.radius,s.setRenderTarget(X.mapPass),s.clear(),s.renderBufferDirect(z,null,K,y,A,null),E.uniforms.shadow_pass.value=X.mapPass.texture,E.uniforms.resolution.value=X.mapSize,E.uniforms.radius.value=X.radius,s.setRenderTarget(X.map),s.clear(),s.renderBufferDirect(z,null,K,E,A,null)}function P(X,z,K,U){let L=null;const Y=K.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(Y!==void 0)L=Y;else if(L=K.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const re=L.uuid,ce=z.uuid;let xe=m[re];xe===void 0&&(xe={},m[re]=xe);let ue=xe[ce];ue===void 0&&(ue=L.clone(),xe[ce]=ue,z.addEventListener("dispose",H)),L=ue}if(L.visible=z.visible,L.wireframe=z.wireframe,U===ha?L.side=z.shadowSide!==null?z.shadowSide:z.side:L.side=z.shadowSide!==null?z.shadowSide:v[z.side],L.alphaMap=z.alphaMap,L.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,L.map=z.map,L.clipShadows=z.clipShadows,L.clippingPlanes=z.clippingPlanes,L.clipIntersection=z.clipIntersection,L.displacementMap=z.displacementMap,L.displacementScale=z.displacementScale,L.displacementBias=z.displacementBias,L.wireframeLinewidth=z.wireframeLinewidth,L.linewidth=z.linewidth,K.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const re=s.properties.get(L);re.light=K}return L}function R(X,z,K,U,L){if(X.visible===!1)return;if(X.layers.test(z.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&L===ha)&&(!X.frustumCulled||a.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,X.matrixWorld);const ce=e.update(X),xe=X.material;if(Array.isArray(xe)){const ue=ce.groups;for(let F=0,Q=ue.length;F<Q;F++){const J=ue[F],W=xe[J.materialIndex];if(W&&W.visible){const N=P(X,W,U,L);X.onBeforeShadow(s,X,z,K,ce,N,J),s.renderBufferDirect(K,null,ce,N,X,J),X.onAfterShadow(s,X,z,K,ce,N,J)}}}else if(xe.visible){const ue=P(X,xe,U,L);X.onBeforeShadow(s,X,z,K,ce,ue,null),s.renderBufferDirect(K,null,ce,ue,X,null),X.onAfterShadow(s,X,z,K,ce,ue,null)}}const re=X.children;for(let ce=0,xe=re.length;ce<xe;ce++)R(re[ce],z,K,U,L)}function H(X){X.target.removeEventListener("dispose",H);for(const K in m){const U=m[K],L=X.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}}const nR={[gh]:vh,[_h]:Sh,[xh]:Mh,[Fs]:yh,[vh]:gh,[Sh]:_h,[Mh]:xh,[yh]:Fs};function iR(s,e){function i(){let $=!1;const Ue=new rn;let Pe=null;const qe=new rn(0,0,0,0);return{setMask:function(De){Pe!==De&&!$&&(s.colorMask(De,De,De,De),Pe=De)},setLocked:function(De){$=De},setClear:function(De,Ae,Ze,dt,Ht){Ht===!0&&(De*=dt,Ae*=dt,Ze*=dt),Ue.set(De,Ae,Ze,dt),qe.equals(Ue)===!1&&(s.clearColor(De,Ae,Ze,dt),qe.copy(Ue))},reset:function(){$=!1,Pe=null,qe.set(-1,0,0,0)}}}function a(){let $=!1,Ue=!1,Pe=null,qe=null,De=null;return{setReversed:function(Ae){if(Ue!==Ae){const Ze=e.get("EXT_clip_control");Ae?Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.ZERO_TO_ONE_EXT):Ze.clipControlEXT(Ze.LOWER_LEFT_EXT,Ze.NEGATIVE_ONE_TO_ONE_EXT),Ue=Ae;const dt=De;De=null,this.setClear(dt)}},getReversed:function(){return Ue},setTest:function(Ae){Ae?I(s.DEPTH_TEST):te(s.DEPTH_TEST)},setMask:function(Ae){Pe!==Ae&&!$&&(s.depthMask(Ae),Pe=Ae)},setFunc:function(Ae){if(Ue&&(Ae=nR[Ae]),qe!==Ae){switch(Ae){case gh:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case _h:s.depthFunc(s.LESS);break;case Fs:s.depthFunc(s.LEQUAL);break;case xh:s.depthFunc(s.EQUAL);break;case yh:s.depthFunc(s.GEQUAL);break;case Sh:s.depthFunc(s.GREATER);break;case Mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}qe=Ae}},setLocked:function(Ae){$=Ae},setClear:function(Ae){De!==Ae&&(Ue&&(Ae=1-Ae),s.clearDepth(Ae),De=Ae)},reset:function(){$=!1,Pe=null,qe=null,De=null,Ue=!1}}}function l(){let $=!1,Ue=null,Pe=null,qe=null,De=null,Ae=null,Ze=null,dt=null,Ht=null;return{setTest:function(Nt){$||(Nt?I(s.STENCIL_TEST):te(s.STENCIL_TEST))},setMask:function(Nt){Ue!==Nt&&!$&&(s.stencilMask(Nt),Ue=Nt)},setFunc:function(Nt,Pn,li){(Pe!==Nt||qe!==Pn||De!==li)&&(s.stencilFunc(Nt,Pn,li),Pe=Nt,qe=Pn,De=li)},setOp:function(Nt,Pn,li){(Ae!==Nt||Ze!==Pn||dt!==li)&&(s.stencilOp(Nt,Pn,li),Ae=Nt,Ze=Pn,dt=li)},setLocked:function(Nt){$=Nt},setClear:function(Nt){Ht!==Nt&&(s.clearStencil(Nt),Ht=Nt)},reset:function(){$=!1,Ue=null,Pe=null,qe=null,De=null,Ae=null,Ze=null,dt=null,Ht=null}}}const c=new i,f=new a,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},y=new WeakMap,E=[],b=null,A=!1,x=null,_=null,O=null,P=null,R=null,H=null,X=null,z=new Dt(0,0,0),K=0,U=!1,L=null,Y=null,re=null,ce=null,xe=null;const ue=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,Q=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(J)[1]),F=Q>=1):J.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),F=Q>=2);let W=null,N={};const M=s.getParameter(s.SCISSOR_BOX),k=s.getParameter(s.VIEWPORT),ee=new rn().fromArray(M),oe=new rn().fromArray(k);function se($,Ue,Pe,qe){const De=new Uint8Array(4),Ae=s.createTexture();s.bindTexture($,Ae),s.texParameteri($,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri($,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<Pe;Ze++)$===s.TEXTURE_3D||$===s.TEXTURE_2D_ARRAY?s.texImage3D(Ue,0,s.RGBA,1,1,qe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ue+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Ae}const T={};T[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),T[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),T[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),T[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),I(s.DEPTH_TEST),f.setFunc(Fs),Ye(!1),ze(gv),I(s.CULL_FACE),Ie($a);function I($){g[$]!==!0&&(s.enable($),g[$]=!0)}function te($){g[$]!==!1&&(s.disable($),g[$]=!1)}function le($,Ue){return v[$]!==Ue?(s.bindFramebuffer($,Ue),v[$]=Ue,$===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Ue),$===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Ue),!0):!1}function Ee($,Ue){let Pe=E,qe=!1;if($){Pe=y.get(Ue),Pe===void 0&&(Pe=[],y.set(Ue,Pe));const De=$.textures;if(Pe.length!==De.length||Pe[0]!==s.COLOR_ATTACHMENT0){for(let Ae=0,Ze=De.length;Ae<Ze;Ae++)Pe[Ae]=s.COLOR_ATTACHMENT0+Ae;Pe.length=De.length,qe=!0}}else Pe[0]!==s.BACK&&(Pe[0]=s.BACK,qe=!0);qe&&s.drawBuffers(Pe)}function Ce($){return b!==$?(s.useProgram($),b=$,!0):!1}const We={[Dr]:s.FUNC_ADD,[dE]:s.FUNC_SUBTRACT,[hE]:s.FUNC_REVERSE_SUBTRACT};We[pE]=s.MIN,We[mE]=s.MAX;const V={[gE]:s.ZERO,[vE]:s.ONE,[_E]:s.SRC_COLOR,[ph]:s.SRC_ALPHA,[bE]:s.SRC_ALPHA_SATURATE,[ME]:s.DST_COLOR,[yE]:s.DST_ALPHA,[xE]:s.ONE_MINUS_SRC_COLOR,[mh]:s.ONE_MINUS_SRC_ALPHA,[EE]:s.ONE_MINUS_DST_COLOR,[SE]:s.ONE_MINUS_DST_ALPHA,[TE]:s.CONSTANT_COLOR,[AE]:s.ONE_MINUS_CONSTANT_COLOR,[wE]:s.CONSTANT_ALPHA,[RE]:s.ONE_MINUS_CONSTANT_ALPHA};function Ie($,Ue,Pe,qe,De,Ae,Ze,dt,Ht,Nt){if($===$a){A===!0&&(te(s.BLEND),A=!1);return}if(A===!1&&(I(s.BLEND),A=!0),$!==fE){if($!==x||Nt!==U){if((_!==Dr||R!==Dr)&&(s.blendEquation(s.FUNC_ADD),_=Dr,R=Dr),Nt)switch($){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.ONE,s.ONE);break;case vv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _v:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}O=null,P=null,H=null,X=null,z.set(0,0,0),K=0,x=$,U=Nt}return}De=De||Ue,Ae=Ae||Pe,Ze=Ze||qe,(Ue!==_||De!==R)&&(s.blendEquationSeparate(We[Ue],We[De]),_=Ue,R=De),(Pe!==O||qe!==P||Ae!==H||Ze!==X)&&(s.blendFuncSeparate(V[Pe],V[qe],V[Ae],V[Ze]),O=Pe,P=qe,H=Ae,X=Ze),(dt.equals(z)===!1||Ht!==K)&&(s.blendColor(dt.r,dt.g,dt.b,Ht),z.copy(dt),K=Ht),x=$,U=!1}function Be($,Ue){$.side===pa?te(s.CULL_FACE):I(s.CULL_FACE);let Pe=$.side===qn;Ue&&(Pe=!Pe),Ye(Pe),$.blending===Ps&&$.transparent===!1?Ie($a):Ie($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),f.setFunc($.depthFunc),f.setTest($.depthTest),f.setMask($.depthWrite),c.setMask($.colorWrite);const qe=$.stencilWrite;d.setTest(qe),qe&&(d.setMask($.stencilWriteMask),d.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),d.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),Ve($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?I(s.SAMPLE_ALPHA_TO_COVERAGE):te(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ye($){L!==$&&($?s.frontFace(s.CW):s.frontFace(s.CCW),L=$)}function ze($){$!==lE?(I(s.CULL_FACE),$!==Y&&($===gv?s.cullFace(s.BACK):$===cE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):te(s.CULL_FACE),Y=$}function ht($){$!==re&&(F&&s.lineWidth($),re=$)}function Ve($,Ue,Pe){$?(I(s.POLYGON_OFFSET_FILL),(ce!==Ue||xe!==Pe)&&(s.polygonOffset(Ue,Pe),ce=Ue,xe=Pe)):te(s.POLYGON_OFFSET_FILL)}function at($){$?I(s.SCISSOR_TEST):te(s.SCISSOR_TEST)}function Yt($){$===void 0&&($=s.TEXTURE0+ue-1),W!==$&&(s.activeTexture($),W=$)}function kt($,Ue,Pe){Pe===void 0&&(W===null?Pe=s.TEXTURE0+ue-1:Pe=W);let qe=N[Pe];qe===void 0&&(qe={type:void 0,texture:void 0},N[Pe]=qe),(qe.type!==$||qe.texture!==Ue)&&(W!==Pe&&(s.activeTexture(Pe),W=Pe),s.bindTexture($,Ue||T[$]),qe.type=$,qe.texture=Ue)}function G(){const $=N[W];$!==void 0&&$.type!==void 0&&(s.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function w(){try{s.compressedTexImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function fe(){try{s.compressedTexImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{s.texSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Re(){try{s.texSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ye(){try{s.compressedTexSubImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function tt(){try{s.compressedTexSubImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Le(){try{s.texStorage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Qe(){try{s.texStorage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function nt(){try{s.texImage2D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ne(){try{s.texImage3D(...arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Oe($){ee.equals($)===!1&&(s.scissor($.x,$.y,$.z,$.w),ee.copy($))}function rt($){oe.equals($)===!1&&(s.viewport($.x,$.y,$.z,$.w),oe.copy($))}function Xe($,Ue){let Pe=m.get(Ue);Pe===void 0&&(Pe=new WeakMap,m.set(Ue,Pe));let qe=Pe.get($);qe===void 0&&(qe=s.getUniformBlockIndex(Ue,$.name),Pe.set($,qe))}function Fe($,Ue){const qe=m.get(Ue).get($);p.get(Ue)!==qe&&(s.uniformBlockBinding(Ue,qe,$.__bindingPointIndex),p.set(Ue,qe))}function mt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},W=null,N={},v={},y=new WeakMap,E=[],b=null,A=!1,x=null,_=null,O=null,P=null,R=null,H=null,X=null,z=new Dt(0,0,0),K=0,U=!1,L=null,Y=null,re=null,ce=null,xe=null,ee.set(0,0,s.canvas.width,s.canvas.height),oe.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:I,disable:te,bindFramebuffer:le,drawBuffers:Ee,useProgram:Ce,setBlending:Ie,setMaterial:Be,setFlipSided:Ye,setCullFace:ze,setLineWidth:ht,setPolygonOffset:Ve,setScissorTest:at,activeTexture:Yt,bindTexture:kt,unbindTexture:G,compressedTexImage2D:w,compressedTexImage3D:fe,texImage2D:nt,texImage3D:Ne,updateUBOMapping:Xe,uniformBlockBinding:Fe,texStorage2D:Le,texStorage3D:Qe,texSubImage2D:Me,texSubImage3D:Re,compressedTexSubImage2D:ye,compressedTexSubImage3D:tt,scissor:Oe,viewport:rt,reset:mt}}function aR(s,e,i,a,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,g=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(G,w){return E?new OffscreenCanvas(G,w):su("canvas")}function A(G,w,fe){let Me=1;const Re=kt(G);if((Re.width>fe||Re.height>fe)&&(Me=fe/Math.max(Re.width,Re.height)),Me<1)if(typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&G instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&G instanceof ImageBitmap||typeof VideoFrame<"u"&&G instanceof VideoFrame){const ye=Math.floor(Me*Re.width),tt=Math.floor(Me*Re.height);v===void 0&&(v=b(ye,tt));const Le=w?b(ye,tt):v;return Le.width=ye,Le.height=tt,Le.getContext("2d").drawImage(G,0,0,ye,tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Re.width+"x"+Re.height+") to ("+ye+"x"+tt+")."),Le}else return"data"in G&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Re.width+"x"+Re.height+")."),G;return G}function x(G){return G.generateMipmaps}function _(G){s.generateMipmap(G)}function O(G){return G.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:G.isWebGL3DRenderTarget?s.TEXTURE_3D:G.isWebGLArrayRenderTarget||G.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(G,w,fe,Me,Re=!1){if(G!==null){if(s[G]!==void 0)return s[G];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+G+"'")}let ye=w;if(w===s.RED&&(fe===s.FLOAT&&(ye=s.R32F),fe===s.HALF_FLOAT&&(ye=s.R16F),fe===s.UNSIGNED_BYTE&&(ye=s.R8)),w===s.RED_INTEGER&&(fe===s.UNSIGNED_BYTE&&(ye=s.R8UI),fe===s.UNSIGNED_SHORT&&(ye=s.R16UI),fe===s.UNSIGNED_INT&&(ye=s.R32UI),fe===s.BYTE&&(ye=s.R8I),fe===s.SHORT&&(ye=s.R16I),fe===s.INT&&(ye=s.R32I)),w===s.RG&&(fe===s.FLOAT&&(ye=s.RG32F),fe===s.HALF_FLOAT&&(ye=s.RG16F),fe===s.UNSIGNED_BYTE&&(ye=s.RG8)),w===s.RG_INTEGER&&(fe===s.UNSIGNED_BYTE&&(ye=s.RG8UI),fe===s.UNSIGNED_SHORT&&(ye=s.RG16UI),fe===s.UNSIGNED_INT&&(ye=s.RG32UI),fe===s.BYTE&&(ye=s.RG8I),fe===s.SHORT&&(ye=s.RG16I),fe===s.INT&&(ye=s.RG32I)),w===s.RGB_INTEGER&&(fe===s.UNSIGNED_BYTE&&(ye=s.RGB8UI),fe===s.UNSIGNED_SHORT&&(ye=s.RGB16UI),fe===s.UNSIGNED_INT&&(ye=s.RGB32UI),fe===s.BYTE&&(ye=s.RGB8I),fe===s.SHORT&&(ye=s.RGB16I),fe===s.INT&&(ye=s.RGB32I)),w===s.RGBA_INTEGER&&(fe===s.UNSIGNED_BYTE&&(ye=s.RGBA8UI),fe===s.UNSIGNED_SHORT&&(ye=s.RGBA16UI),fe===s.UNSIGNED_INT&&(ye=s.RGBA32UI),fe===s.BYTE&&(ye=s.RGBA8I),fe===s.SHORT&&(ye=s.RGBA16I),fe===s.INT&&(ye=s.RGBA32I)),w===s.RGB&&(fe===s.UNSIGNED_INT_5_9_9_9_REV&&(ye=s.RGB9_E5),fe===s.UNSIGNED_INT_10F_11F_11F_REV&&(ye=s.R11F_G11F_B10F)),w===s.RGBA){const tt=Re?au:Pt.getTransfer(Me);fe===s.FLOAT&&(ye=s.RGBA32F),fe===s.HALF_FLOAT&&(ye=s.RGBA16F),fe===s.UNSIGNED_BYTE&&(ye=tt===qt?s.SRGB8_ALPHA8:s.RGBA8),fe===s.UNSIGNED_SHORT_4_4_4_4&&(ye=s.RGBA4),fe===s.UNSIGNED_SHORT_5_5_5_1&&(ye=s.RGB5_A1)}return(ye===s.R16F||ye===s.R32F||ye===s.RG16F||ye===s.RG32F||ye===s.RGBA16F||ye===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ye}function R(G,w){let fe;return G?w===null||w===Pr||w===el?fe=s.DEPTH24_STENCIL8:w===ma?fe=s.DEPTH32F_STENCIL8:w===$o&&(fe=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Pr||w===el?fe=s.DEPTH_COMPONENT24:w===ma?fe=s.DEPTH_COMPONENT32F:w===$o&&(fe=s.DEPTH_COMPONENT16),fe}function H(G,w){return x(G)===!0||G.isFramebufferTexture&&G.minFilter!==Ri&&G.minFilter!==Bi?Math.log2(Math.max(w.width,w.height))+1:G.mipmaps!==void 0&&G.mipmaps.length>0?G.mipmaps.length:G.isCompressedTexture&&Array.isArray(G.image)?w.mipmaps.length:1}function X(G){const w=G.target;w.removeEventListener("dispose",X),K(w),w.isVideoTexture&&g.delete(w)}function z(G){const w=G.target;w.removeEventListener("dispose",z),L(w)}function K(G){const w=a.get(G);if(w.__webglInit===void 0)return;const fe=G.source,Me=y.get(fe);if(Me){const Re=Me[w.__cacheKey];Re.usedTimes--,Re.usedTimes===0&&U(G),Object.keys(Me).length===0&&y.delete(fe)}a.remove(G)}function U(G){const w=a.get(G);s.deleteTexture(w.__webglTexture);const fe=G.source,Me=y.get(fe);delete Me[w.__cacheKey],f.memory.textures--}function L(G){const w=a.get(G);if(G.depthTexture&&(G.depthTexture.dispose(),a.remove(G.depthTexture)),G.isWebGLCubeRenderTarget)for(let Me=0;Me<6;Me++){if(Array.isArray(w.__webglFramebuffer[Me]))for(let Re=0;Re<w.__webglFramebuffer[Me].length;Re++)s.deleteFramebuffer(w.__webglFramebuffer[Me][Re]);else s.deleteFramebuffer(w.__webglFramebuffer[Me]);w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer[Me])}else{if(Array.isArray(w.__webglFramebuffer))for(let Me=0;Me<w.__webglFramebuffer.length;Me++)s.deleteFramebuffer(w.__webglFramebuffer[Me]);else s.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&s.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&s.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let Me=0;Me<w.__webglColorRenderbuffer.length;Me++)w.__webglColorRenderbuffer[Me]&&s.deleteRenderbuffer(w.__webglColorRenderbuffer[Me]);w.__webglDepthRenderbuffer&&s.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const fe=G.textures;for(let Me=0,Re=fe.length;Me<Re;Me++){const ye=a.get(fe[Me]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),f.memory.textures--),a.remove(fe[Me])}a.remove(G)}let Y=0;function re(){Y=0}function ce(){const G=Y;return G>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+G+" texture units while this GPU supports only "+l.maxTextures),Y+=1,G}function xe(G){const w=[];return w.push(G.wrapS),w.push(G.wrapT),w.push(G.wrapR||0),w.push(G.magFilter),w.push(G.minFilter),w.push(G.anisotropy),w.push(G.internalFormat),w.push(G.format),w.push(G.type),w.push(G.generateMipmaps),w.push(G.premultiplyAlpha),w.push(G.flipY),w.push(G.unpackAlignment),w.push(G.colorSpace),w.join()}function ue(G,w){const fe=a.get(G);if(G.isVideoTexture&&at(G),G.isRenderTargetTexture===!1&&G.isExternalTexture!==!0&&G.version>0&&fe.__version!==G.version){const Me=G.image;if(Me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{T(fe,G,w);return}}else G.isExternalTexture&&(fe.__webglTexture=G.sourceTexture?G.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,fe.__webglTexture,s.TEXTURE0+w)}function F(G,w){const fe=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&fe.__version!==G.version){T(fe,G,w);return}i.bindTexture(s.TEXTURE_2D_ARRAY,fe.__webglTexture,s.TEXTURE0+w)}function Q(G,w){const fe=a.get(G);if(G.isRenderTargetTexture===!1&&G.version>0&&fe.__version!==G.version){T(fe,G,w);return}i.bindTexture(s.TEXTURE_3D,fe.__webglTexture,s.TEXTURE0+w)}function J(G,w){const fe=a.get(G);if(G.version>0&&fe.__version!==G.version){I(fe,G,w);return}i.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture,s.TEXTURE0+w)}const W={[Th]:s.REPEAT,[Ur]:s.CLAMP_TO_EDGE,[Ah]:s.MIRRORED_REPEAT},N={[Ri]:s.NEAREST,[zE]:s.NEAREST_MIPMAP_NEAREST,[Tc]:s.NEAREST_MIPMAP_LINEAR,[Bi]:s.LINEAR,[Nd]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},M={[VE]:s.NEVER,[YE]:s.ALWAYS,[kE]:s.LESS,[W_]:s.LEQUAL,[WE]:s.EQUAL,[qE]:s.GEQUAL,[XE]:s.GREATER,[jE]:s.NOTEQUAL};function k(G,w){if(w.type===ma&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Bi||w.magFilter===Nd||w.magFilter===Tc||w.magFilter===Lr||w.minFilter===Bi||w.minFilter===Nd||w.minFilter===Tc||w.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(G,s.TEXTURE_WRAP_S,W[w.wrapS]),s.texParameteri(G,s.TEXTURE_WRAP_T,W[w.wrapT]),(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)&&s.texParameteri(G,s.TEXTURE_WRAP_R,W[w.wrapR]),s.texParameteri(G,s.TEXTURE_MAG_FILTER,N[w.magFilter]),s.texParameteri(G,s.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(s.texParameteri(G,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(G,s.TEXTURE_COMPARE_FUNC,M[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Ri||w.minFilter!==Tc&&w.minFilter!==Lr||w.type===ma&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||a.get(w).__currentAnisotropy){const fe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(G,fe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),a.get(w).__currentAnisotropy=w.anisotropy}}}function ee(G,w){let fe=!1;G.__webglInit===void 0&&(G.__webglInit=!0,w.addEventListener("dispose",X));const Me=w.source;let Re=y.get(Me);Re===void 0&&(Re={},y.set(Me,Re));const ye=xe(w);if(ye!==G.__cacheKey){Re[ye]===void 0&&(Re[ye]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,fe=!0),Re[ye].usedTimes++;const tt=Re[G.__cacheKey];tt!==void 0&&(Re[G.__cacheKey].usedTimes--,tt.usedTimes===0&&U(w)),G.__cacheKey=ye,G.__webglTexture=Re[ye].texture}return fe}function oe(G,w,fe){return Math.floor(Math.floor(G/fe)/w)}function se(G,w,fe,Me){const ye=G.updateRanges;if(ye.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,w.width,w.height,fe,Me,w.data);else{ye.sort((Ne,Oe)=>Ne.start-Oe.start);let tt=0;for(let Ne=1;Ne<ye.length;Ne++){const Oe=ye[tt],rt=ye[Ne],Xe=Oe.start+Oe.count,Fe=oe(rt.start,w.width,4),mt=oe(Oe.start,w.width,4);rt.start<=Xe+1&&Fe===mt&&oe(rt.start+rt.count-1,w.width,4)===Fe?Oe.count=Math.max(Oe.count,rt.start+rt.count-Oe.start):(++tt,ye[tt]=rt)}ye.length=tt+1;const Le=s.getParameter(s.UNPACK_ROW_LENGTH),Qe=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,w.width);for(let Ne=0,Oe=ye.length;Ne<Oe;Ne++){const rt=ye[Ne],Xe=Math.floor(rt.start/4),Fe=Math.ceil(rt.count/4),mt=Xe%w.width,$=Math.floor(Xe/w.width),Ue=Fe,Pe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,mt),s.pixelStorei(s.UNPACK_SKIP_ROWS,$),i.texSubImage2D(s.TEXTURE_2D,0,mt,$,Ue,Pe,fe,Me,w.data)}G.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Le),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function T(G,w,fe){let Me=s.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(Me=s.TEXTURE_2D_ARRAY),w.isData3DTexture&&(Me=s.TEXTURE_3D);const Re=ee(G,w),ye=w.source;i.bindTexture(Me,G.__webglTexture,s.TEXTURE0+fe);const tt=a.get(ye);if(ye.version!==tt.__version||Re===!0){i.activeTexture(s.TEXTURE0+fe);const Le=Pt.getPrimaries(Pt.workingColorSpace),Qe=w.colorSpace===Ja?null:Pt.getPrimaries(w.colorSpace),nt=w.colorSpace===Ja||Le===Qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let Ne=A(w.image,!1,l.maxTextureSize);Ne=Yt(w,Ne);const Oe=c.convert(w.format,w.colorSpace),rt=c.convert(w.type);let Xe=P(w.internalFormat,Oe,rt,w.colorSpace,w.isVideoTexture);k(Me,w);let Fe;const mt=w.mipmaps,$=w.isVideoTexture!==!0,Ue=tt.__version===void 0||Re===!0,Pe=ye.dataReady,qe=H(w,Ne);if(w.isDepthTexture)Xe=R(w.format===nl,w.type),Ue&&($?i.texStorage2D(s.TEXTURE_2D,1,Xe,Ne.width,Ne.height):i.texImage2D(s.TEXTURE_2D,0,Xe,Ne.width,Ne.height,0,Oe,rt,null));else if(w.isDataTexture)if(mt.length>0){$&&Ue&&i.texStorage2D(s.TEXTURE_2D,qe,Xe,mt[0].width,mt[0].height);for(let De=0,Ae=mt.length;De<Ae;De++)Fe=mt[De],$?Pe&&i.texSubImage2D(s.TEXTURE_2D,De,0,0,Fe.width,Fe.height,Oe,rt,Fe.data):i.texImage2D(s.TEXTURE_2D,De,Xe,Fe.width,Fe.height,0,Oe,rt,Fe.data);w.generateMipmaps=!1}else $?(Ue&&i.texStorage2D(s.TEXTURE_2D,qe,Xe,Ne.width,Ne.height),Pe&&se(w,Ne,Oe,rt)):i.texImage2D(s.TEXTURE_2D,0,Xe,Ne.width,Ne.height,0,Oe,rt,Ne.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$&&Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,qe,Xe,mt[0].width,mt[0].height,Ne.depth);for(let De=0,Ae=mt.length;De<Ae;De++)if(Fe=mt[De],w.format!==wi)if(Oe!==null)if($){if(Pe)if(w.layerUpdates.size>0){const Ze=kv(Fe.width,Fe.height,w.format,w.type);for(const dt of w.layerUpdates){const Ht=Fe.data.subarray(dt*Ze/Fe.data.BYTES_PER_ELEMENT,(dt+1)*Ze/Fe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,De,0,0,dt,Fe.width,Fe.height,1,Oe,Ht)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,De,0,0,0,Fe.width,Fe.height,Ne.depth,Oe,Fe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,De,Xe,Fe.width,Fe.height,Ne.depth,0,Fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $?Pe&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,De,0,0,0,Fe.width,Fe.height,Ne.depth,Oe,rt,Fe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,De,Xe,Fe.width,Fe.height,Ne.depth,0,Oe,rt,Fe.data)}else{$&&Ue&&i.texStorage2D(s.TEXTURE_2D,qe,Xe,mt[0].width,mt[0].height);for(let De=0,Ae=mt.length;De<Ae;De++)Fe=mt[De],w.format!==wi?Oe!==null?$?Pe&&i.compressedTexSubImage2D(s.TEXTURE_2D,De,0,0,Fe.width,Fe.height,Oe,Fe.data):i.compressedTexImage2D(s.TEXTURE_2D,De,Xe,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$?Pe&&i.texSubImage2D(s.TEXTURE_2D,De,0,0,Fe.width,Fe.height,Oe,rt,Fe.data):i.texImage2D(s.TEXTURE_2D,De,Xe,Fe.width,Fe.height,0,Oe,rt,Fe.data)}else if(w.isDataArrayTexture)if($){if(Ue&&i.texStorage3D(s.TEXTURE_2D_ARRAY,qe,Xe,Ne.width,Ne.height,Ne.depth),Pe)if(w.layerUpdates.size>0){const De=kv(Ne.width,Ne.height,w.format,w.type);for(const Ae of w.layerUpdates){const Ze=Ne.data.subarray(Ae*De/Ne.data.BYTES_PER_ELEMENT,(Ae+1)*De/Ne.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,Ne.width,Ne.height,1,Oe,rt,Ze)}w.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ne.width,Ne.height,Ne.depth,Oe,rt,Ne.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Xe,Ne.width,Ne.height,Ne.depth,0,Oe,rt,Ne.data);else if(w.isData3DTexture)$?(Ue&&i.texStorage3D(s.TEXTURE_3D,qe,Xe,Ne.width,Ne.height,Ne.depth),Pe&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ne.width,Ne.height,Ne.depth,Oe,rt,Ne.data)):i.texImage3D(s.TEXTURE_3D,0,Xe,Ne.width,Ne.height,Ne.depth,0,Oe,rt,Ne.data);else if(w.isFramebufferTexture){if(Ue)if($)i.texStorage2D(s.TEXTURE_2D,qe,Xe,Ne.width,Ne.height);else{let De=Ne.width,Ae=Ne.height;for(let Ze=0;Ze<qe;Ze++)i.texImage2D(s.TEXTURE_2D,Ze,Xe,De,Ae,0,Oe,rt,null),De>>=1,Ae>>=1}}else if(mt.length>0){if($&&Ue){const De=kt(mt[0]);i.texStorage2D(s.TEXTURE_2D,qe,Xe,De.width,De.height)}for(let De=0,Ae=mt.length;De<Ae;De++)Fe=mt[De],$?Pe&&i.texSubImage2D(s.TEXTURE_2D,De,0,0,Oe,rt,Fe):i.texImage2D(s.TEXTURE_2D,De,Xe,Oe,rt,Fe);w.generateMipmaps=!1}else if($){if(Ue){const De=kt(Ne);i.texStorage2D(s.TEXTURE_2D,qe,Xe,De.width,De.height)}Pe&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Oe,rt,Ne)}else i.texImage2D(s.TEXTURE_2D,0,Xe,Oe,rt,Ne);x(w)&&_(Me),tt.__version=ye.version,w.onUpdate&&w.onUpdate(w)}G.__version=w.version}function I(G,w,fe){if(w.image.length!==6)return;const Me=ee(G,w),Re=w.source;i.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+fe);const ye=a.get(Re);if(Re.version!==ye.__version||Me===!0){i.activeTexture(s.TEXTURE0+fe);const tt=Pt.getPrimaries(Pt.workingColorSpace),Le=w.colorSpace===Ja?null:Pt.getPrimaries(w.colorSpace),Qe=w.colorSpace===Ja||tt===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,w.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,w.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const nt=w.isCompressedTexture||w.image[0].isCompressedTexture,Ne=w.image[0]&&w.image[0].isDataTexture,Oe=[];for(let Ae=0;Ae<6;Ae++)!nt&&!Ne?Oe[Ae]=A(w.image[Ae],!0,l.maxCubemapSize):Oe[Ae]=Ne?w.image[Ae].image:w.image[Ae],Oe[Ae]=Yt(w,Oe[Ae]);const rt=Oe[0],Xe=c.convert(w.format,w.colorSpace),Fe=c.convert(w.type),mt=P(w.internalFormat,Xe,Fe,w.colorSpace),$=w.isVideoTexture!==!0,Ue=ye.__version===void 0||Me===!0,Pe=Re.dataReady;let qe=H(w,rt);k(s.TEXTURE_CUBE_MAP,w);let De;if(nt){$&&Ue&&i.texStorage2D(s.TEXTURE_CUBE_MAP,qe,mt,rt.width,rt.height);for(let Ae=0;Ae<6;Ae++){De=Oe[Ae].mipmaps;for(let Ze=0;Ze<De.length;Ze++){const dt=De[Ze];w.format!==wi?Xe!==null?$?Pe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,dt.width,dt.height,Xe,dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,mt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,0,0,dt.width,dt.height,Xe,Fe,dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze,mt,dt.width,dt.height,0,Xe,Fe,dt.data)}}}else{if(De=w.mipmaps,$&&Ue){De.length>0&&qe++;const Ae=kt(Oe[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,qe,mt,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(Ne){$?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Oe[Ae].width,Oe[Ae].height,Xe,Fe,Oe[Ae].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,Oe[Ae].width,Oe[Ae].height,0,Xe,Fe,Oe[Ae].data);for(let Ze=0;Ze<De.length;Ze++){const Ht=De[Ze].image[Ae].image;$?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,Ht.width,Ht.height,Xe,Fe,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,mt,Ht.width,Ht.height,0,Xe,Fe,Ht.data)}}else{$?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,Xe,Fe,Oe[Ae]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,mt,Xe,Fe,Oe[Ae]);for(let Ze=0;Ze<De.length;Ze++){const dt=De[Ze];$?Pe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,0,0,Xe,Fe,dt.image[Ae]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,Ze+1,mt,Xe,Fe,dt.image[Ae])}}}x(w)&&_(s.TEXTURE_CUBE_MAP),ye.__version=Re.version,w.onUpdate&&w.onUpdate(w)}G.__version=w.version}function te(G,w,fe,Me,Re,ye){const tt=c.convert(fe.format,fe.colorSpace),Le=c.convert(fe.type),Qe=P(fe.internalFormat,tt,Le,fe.colorSpace),nt=a.get(w),Ne=a.get(fe);if(Ne.__renderTarget=w,!nt.__hasExternalTextures){const Oe=Math.max(1,w.width>>ye),rt=Math.max(1,w.height>>ye);Re===s.TEXTURE_3D||Re===s.TEXTURE_2D_ARRAY?i.texImage3D(Re,ye,Qe,Oe,rt,w.depth,0,tt,Le,null):i.texImage2D(Re,ye,Qe,Oe,rt,0,tt,Le,null)}i.bindFramebuffer(s.FRAMEBUFFER,G),Ve(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Me,Re,Ne.__webglTexture,0,ht(w)):(Re===s.TEXTURE_2D||Re>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Re<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Me,Re,Ne.__webglTexture,ye),i.bindFramebuffer(s.FRAMEBUFFER,null)}function le(G,w,fe){if(s.bindRenderbuffer(s.RENDERBUFFER,G),w.depthBuffer){const Me=w.depthTexture,Re=Me&&Me.isDepthTexture?Me.type:null,ye=R(w.stencilBuffer,Re),tt=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=ht(w);Ve(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Le,ye,w.width,w.height):fe?s.renderbufferStorageMultisample(s.RENDERBUFFER,Le,ye,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,ye,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,tt,s.RENDERBUFFER,G)}else{const Me=w.textures;for(let Re=0;Re<Me.length;Re++){const ye=Me[Re],tt=c.convert(ye.format,ye.colorSpace),Le=c.convert(ye.type),Qe=P(ye.internalFormat,tt,Le,ye.colorSpace),nt=ht(w);fe&&Ve(w)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Qe,w.width,w.height):Ve(w)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,nt,Qe,w.width,w.height):s.renderbufferStorage(s.RENDERBUFFER,Qe,w.width,w.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(G,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,G),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Me=a.get(w.depthTexture);Me.__renderTarget=w,(!Me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ue(w.depthTexture,0);const Re=Me.__webglTexture,ye=ht(w);if(w.depthTexture.format===tl)Ve(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Re,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Re,0);else if(w.depthTexture.format===nl)Ve(w)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Re,0,ye):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Re,0);else throw new Error("Unknown depthTexture format")}function Ce(G){const w=a.get(G),fe=G.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==G.depthTexture){const Me=G.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),Me){const Re=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,Me.removeEventListener("dispose",Re)};Me.addEventListener("dispose",Re),w.__depthDisposeCallback=Re}w.__boundDepthTexture=Me}if(G.depthTexture&&!w.__autoAllocateDepthBuffer){if(fe)throw new Error("target.depthTexture not supported in Cube render targets");const Me=G.texture.mipmaps;Me&&Me.length>0?Ee(w.__webglFramebuffer[0],G):Ee(w.__webglFramebuffer,G)}else if(fe){w.__webglDepthbuffer=[];for(let Me=0;Me<6;Me++)if(i.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[Me]),w.__webglDepthbuffer[Me]===void 0)w.__webglDepthbuffer[Me]=s.createRenderbuffer(),le(w.__webglDepthbuffer[Me],G,!1);else{const Re=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer[Me];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,ye)}}else{const Me=G.texture.mipmaps;if(Me&&Me.length>0?i.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=s.createRenderbuffer(),le(w.__webglDepthbuffer,G,!1);else{const Re=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=w.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,Re,s.RENDERBUFFER,ye)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function We(G,w,fe){const Me=a.get(G);w!==void 0&&te(Me.__webglFramebuffer,G,G.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),fe!==void 0&&Ce(G)}function V(G){const w=G.texture,fe=a.get(G),Me=a.get(w);G.addEventListener("dispose",z);const Re=G.textures,ye=G.isWebGLCubeRenderTarget===!0,tt=Re.length>1;if(tt||(Me.__webglTexture===void 0&&(Me.__webglTexture=s.createTexture()),Me.__version=w.version,f.memory.textures++),ye){fe.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(w.mipmaps&&w.mipmaps.length>0){fe.__webglFramebuffer[Le]=[];for(let Qe=0;Qe<w.mipmaps.length;Qe++)fe.__webglFramebuffer[Le][Qe]=s.createFramebuffer()}else fe.__webglFramebuffer[Le]=s.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){fe.__webglFramebuffer=[];for(let Le=0;Le<w.mipmaps.length;Le++)fe.__webglFramebuffer[Le]=s.createFramebuffer()}else fe.__webglFramebuffer=s.createFramebuffer();if(tt)for(let Le=0,Qe=Re.length;Le<Qe;Le++){const nt=a.get(Re[Le]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),f.memory.textures++)}if(G.samples>0&&Ve(G)===!1){fe.__webglMultisampledFramebuffer=s.createFramebuffer(),fe.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,fe.__webglMultisampledFramebuffer);for(let Le=0;Le<Re.length;Le++){const Qe=Re[Le];fe.__webglColorRenderbuffer[Le]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,fe.__webglColorRenderbuffer[Le]);const nt=c.convert(Qe.format,Qe.colorSpace),Ne=c.convert(Qe.type),Oe=P(Qe.internalFormat,nt,Ne,Qe.colorSpace,G.isXRRenderTarget===!0),rt=ht(G);s.renderbufferStorageMultisample(s.RENDERBUFFER,rt,Oe,G.width,G.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,fe.__webglColorRenderbuffer[Le])}s.bindRenderbuffer(s.RENDERBUFFER,null),G.depthBuffer&&(fe.__webglDepthRenderbuffer=s.createRenderbuffer(),le(fe.__webglDepthRenderbuffer,G,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){i.bindTexture(s.TEXTURE_CUBE_MAP,Me.__webglTexture),k(s.TEXTURE_CUBE_MAP,w);for(let Le=0;Le<6;Le++)if(w.mipmaps&&w.mipmaps.length>0)for(let Qe=0;Qe<w.mipmaps.length;Qe++)te(fe.__webglFramebuffer[Le][Qe],G,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Qe);else te(fe.__webglFramebuffer[Le],G,w,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);x(w)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(tt){for(let Le=0,Qe=Re.length;Le<Qe;Le++){const nt=Re[Le],Ne=a.get(nt);let Oe=s.TEXTURE_2D;(G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Oe=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Oe,Ne.__webglTexture),k(Oe,nt),te(fe.__webglFramebuffer,G,nt,s.COLOR_ATTACHMENT0+Le,Oe,0),x(nt)&&_(Oe)}i.unbindTexture()}else{let Le=s.TEXTURE_2D;if((G.isWebGL3DRenderTarget||G.isWebGLArrayRenderTarget)&&(Le=G.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,Me.__webglTexture),k(Le,w),w.mipmaps&&w.mipmaps.length>0)for(let Qe=0;Qe<w.mipmaps.length;Qe++)te(fe.__webglFramebuffer[Qe],G,w,s.COLOR_ATTACHMENT0,Le,Qe);else te(fe.__webglFramebuffer,G,w,s.COLOR_ATTACHMENT0,Le,0);x(w)&&_(Le),i.unbindTexture()}G.depthBuffer&&Ce(G)}function Ie(G){const w=G.textures;for(let fe=0,Me=w.length;fe<Me;fe++){const Re=w[fe];if(x(Re)){const ye=O(G),tt=a.get(Re).__webglTexture;i.bindTexture(ye,tt),_(ye),i.unbindTexture()}}}const Be=[],Ye=[];function ze(G){if(G.samples>0){if(Ve(G)===!1){const w=G.textures,fe=G.width,Me=G.height;let Re=s.COLOR_BUFFER_BIT;const ye=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=a.get(G),Le=w.length>1;if(Le)for(let nt=0;nt<w.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,tt.__webglMultisampledFramebuffer);const Qe=G.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglFramebuffer);for(let nt=0;nt<w.length;nt++){if(G.resolveDepthBuffer&&(G.depthBuffer&&(Re|=s.DEPTH_BUFFER_BIT),G.stencilBuffer&&G.resolveStencilBuffer&&(Re|=s.STENCIL_BUFFER_BIT)),Le){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,tt.__webglColorRenderbuffer[nt]);const Ne=a.get(w[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,fe,Me,0,0,fe,Me,Re,s.NEAREST),p===!0&&(Be.length=0,Ye.length=0,Be.push(s.COLOR_ATTACHMENT0+nt),G.depthBuffer&&G.resolveDepthBuffer===!1&&(Be.push(ye),Ye.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ye)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Be))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Le)for(let nt=0;nt<w.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,tt.__webglColorRenderbuffer[nt]);const Ne=a.get(w[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,tt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,Ne,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,tt.__webglMultisampledFramebuffer)}else if(G.depthBuffer&&G.resolveDepthBuffer===!1&&p){const w=G.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[w])}}}function ht(G){return Math.min(l.maxSamples,G.samples)}function Ve(G){const w=a.get(G);return G.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function at(G){const w=f.render.frame;g.get(G)!==w&&(g.set(G,w),G.update())}function Yt(G,w){const fe=G.colorSpace,Me=G.format,Re=G.type;return G.isCompressedTexture===!0||G.isVideoTexture===!0||fe!==Vs&&fe!==Ja&&(Pt.getTransfer(fe)===qt?(Me!==wi||Re!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",fe)),w}function kt(G){return typeof HTMLImageElement<"u"&&G instanceof HTMLImageElement?(m.width=G.naturalWidth||G.width,m.height=G.naturalHeight||G.height):typeof VideoFrame<"u"&&G instanceof VideoFrame?(m.width=G.displayWidth,m.height=G.displayHeight):(m.width=G.width,m.height=G.height),m}this.allocateTextureUnit=ce,this.resetTextureUnits=re,this.setTexture2D=ue,this.setTexture2DArray=F,this.setTexture3D=Q,this.setTextureCube=J,this.rebindTextures=We,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ie,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Ve}function rR(s,e){function i(a,l=Ja){let c;const f=Pt.getTransfer(l);if(a===Gi)return s.UNSIGNED_BYTE;if(a===dp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===hp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===B_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===z_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===P_)return s.BYTE;if(a===I_)return s.SHORT;if(a===$o)return s.UNSIGNED_SHORT;if(a===fp)return s.INT;if(a===Pr)return s.UNSIGNED_INT;if(a===ma)return s.FLOAT;if(a===ll)return s.HALF_FLOAT;if(a===F_)return s.ALPHA;if(a===H_)return s.RGB;if(a===wi)return s.RGBA;if(a===tl)return s.DEPTH_COMPONENT;if(a===nl)return s.DEPTH_STENCIL;if(a===G_)return s.RED;if(a===pp)return s.RED_INTEGER;if(a===V_)return s.RG;if(a===mp)return s.RG_INTEGER;if(a===gp)return s.RGBA_INTEGER;if(a===Jc||a===$c||a===eu||a===tu)if(f===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wh||a===Rh||a===Ch||a===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Nh||a===Uh||a===Lh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Nh||a===Uh)return f===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Lh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Oh||a===Ph||a===Ih||a===Bh||a===zh||a===Fh||a===Hh||a===Gh||a===Vh||a===kh||a===Wh||a===Xh||a===jh||a===qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Oh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ph)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ih)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Bh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===zh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Vh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===kh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Wh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===qh)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Yh||a===Zh||a===Kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Yh)return f===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qh||a===Jh||a===$h||a===ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qh)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===$h)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===el?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const sR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,oR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new rx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new nr({vertexShader:sR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oi(new hu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends js{constructor(e,i){super();const a=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,y=null,E=null,b=null;const A=typeof XRWebGLBinding<"u",x=new lR,_={},O=i.getContextAttributes();let P=null,R=null;const H=[],X=[],z=new It;let K=null;const U=new si;U.viewport=new rn;const L=new si;L.viewport=new rn;const Y=[U,L],re=new Db;let ce=null,xe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(T){let I=H[T];return I===void 0&&(I=new eh,H[T]=I),I.getTargetRaySpace()},this.getControllerGrip=function(T){let I=H[T];return I===void 0&&(I=new eh,H[T]=I),I.getGripSpace()},this.getHand=function(T){let I=H[T];return I===void 0&&(I=new eh,H[T]=I),I.getHandSpace()};function ue(T){const I=X.indexOf(T.inputSource);if(I===-1)return;const te=H[I];te!==void 0&&(te.update(T.inputSource,T.frame,m||f),te.dispatchEvent({type:T.type,data:T.inputSource}))}function F(){l.removeEventListener("select",ue),l.removeEventListener("selectstart",ue),l.removeEventListener("selectend",ue),l.removeEventListener("squeeze",ue),l.removeEventListener("squeezestart",ue),l.removeEventListener("squeezeend",ue),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",Q);for(let T=0;T<H.length;T++){const I=X[T];I!==null&&(X[T]=null,H[T].disconnect(I))}ce=null,xe=null,x.reset();for(const T in _)delete _[T];e.setRenderTarget(P),E=null,y=null,v=null,l=null,R=null,se.stop(),a.isPresenting=!1,e.setPixelRatio(K),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(T){c=T,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(T){d=T,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(T){m=T},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return v===null&&A&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(T){if(l=T,l!==null){if(P=e.getRenderTarget(),l.addEventListener("select",ue),l.addEventListener("selectstart",ue),l.addEventListener("selectend",ue),l.addEventListener("squeeze",ue),l.addEventListener("squeezestart",ue),l.addEventListener("squeezeend",ue),l.addEventListener("end",F),l.addEventListener("inputsourceschange",Q),O.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(z),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let te=null,le=null,Ee=null;O.depth&&(Ee=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,te=O.stencil?nl:tl,le=O.stencil?el:Pr);const Ce={colorFormat:i.RGBA8,depthFormat:Ee,scaleFactor:c};v=this.getBinding(),y=v.createProjectionLayer(Ce),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),R=new Ir(y.textureWidth,y.textureHeight,{format:wi,type:Gi,depthTexture:new ax(y.textureWidth,y.textureHeight,le,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const te={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,te),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),R=new Ir(E.framebufferWidth,E.framebufferHeight,{format:wi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),se.setContext(l),se.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Q(T){for(let I=0;I<T.removed.length;I++){const te=T.removed[I],le=X.indexOf(te);le>=0&&(X[le]=null,H[le].disconnect(te))}for(let I=0;I<T.added.length;I++){const te=T.added[I];let le=X.indexOf(te);if(le===-1){for(let Ce=0;Ce<H.length;Ce++)if(Ce>=X.length){X.push(te),le=Ce;break}else if(X[Ce]===null){X[Ce]=te,le=Ce;break}if(le===-1)break}const Ee=H[le];Ee&&Ee.connect(te)}}const J=new ge,W=new ge;function N(T,I,te){J.setFromMatrixPosition(I.matrixWorld),W.setFromMatrixPosition(te.matrixWorld);const le=J.distanceTo(W),Ee=I.projectionMatrix.elements,Ce=te.projectionMatrix.elements,We=Ee[14]/(Ee[10]-1),V=Ee[14]/(Ee[10]+1),Ie=(Ee[9]+1)/Ee[5],Be=(Ee[9]-1)/Ee[5],Ye=(Ee[8]-1)/Ee[0],ze=(Ce[8]+1)/Ce[0],ht=We*Ye,Ve=We*ze,at=le/(-Ye+ze),Yt=at*-Ye;if(I.matrixWorld.decompose(T.position,T.quaternion,T.scale),T.translateX(Yt),T.translateZ(at),T.matrixWorld.compose(T.position,T.quaternion,T.scale),T.matrixWorldInverse.copy(T.matrixWorld).invert(),Ee[10]===-1)T.projectionMatrix.copy(I.projectionMatrix),T.projectionMatrixInverse.copy(I.projectionMatrixInverse);else{const kt=We+at,G=V+at,w=ht-Yt,fe=Ve+(le-Yt),Me=Ie*V/G*kt,Re=Be*V/G*kt;T.projectionMatrix.makePerspective(w,fe,Me,Re,kt,G),T.projectionMatrixInverse.copy(T.projectionMatrix).invert()}}function M(T,I){I===null?T.matrixWorld.copy(T.matrix):T.matrixWorld.multiplyMatrices(I.matrixWorld,T.matrix),T.matrixWorldInverse.copy(T.matrixWorld).invert()}this.updateCamera=function(T){if(l===null)return;let I=T.near,te=T.far;x.texture!==null&&(x.depthNear>0&&(I=x.depthNear),x.depthFar>0&&(te=x.depthFar)),re.near=L.near=U.near=I,re.far=L.far=U.far=te,(ce!==re.near||xe!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),ce=re.near,xe=re.far),re.layers.mask=T.layers.mask|6,U.layers.mask=re.layers.mask&3,L.layers.mask=re.layers.mask&5;const le=T.parent,Ee=re.cameras;M(re,le);for(let Ce=0;Ce<Ee.length;Ce++)M(Ee[Ce],le);Ee.length===2?N(re,U,L):re.projectionMatrix.copy(U.projectionMatrix),k(T,re,le)};function k(T,I,te){te===null?T.matrix.copy(I.matrixWorld):(T.matrix.copy(te.matrixWorld),T.matrix.invert(),T.matrix.multiply(I.matrixWorld)),T.matrix.decompose(T.position,T.quaternion,T.scale),T.updateMatrixWorld(!0),T.projectionMatrix.copy(I.projectionMatrix),T.projectionMatrixInverse.copy(I.projectionMatrixInverse),T.isPerspectiveCamera&&(T.fov=tp*2*Math.atan(1/T.projectionMatrix.elements[5]),T.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(y===null&&E===null))return p},this.setFoveation=function(T){p=T,y!==null&&(y.fixedFoveation=T),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=T)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(re)},this.getCameraTexture=function(T){return _[T]};let ee=null;function oe(T,I){if(g=I.getViewerPose(m||f),b=I,g!==null){const te=g.views;E!==null&&(e.setRenderTargetFramebuffer(R,E.framebuffer),e.setRenderTarget(R));let le=!1;te.length!==re.cameras.length&&(re.cameras.length=0,le=!0);for(let V=0;V<te.length;V++){const Ie=te[V];let Be=null;if(E!==null)Be=E.getViewport(Ie);else{const ze=v.getViewSubImage(y,Ie);Be=ze.viewport,V===0&&(e.setRenderTargetTextures(R,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(R))}let Ye=Y[V];Ye===void 0&&(Ye=new si,Ye.layers.enable(V),Ye.viewport=new rn,Y[V]=Ye),Ye.matrix.fromArray(Ie.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(Ie.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(Be.x,Be.y,Be.width,Be.height),V===0&&(re.matrix.copy(Ye.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),le===!0&&re.cameras.push(Ye)}const Ee=l.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){v=a.getBinding();const V=v.getDepthInformation(te[0]);V&&V.isValid&&V.texture&&x.init(V,l.renderState)}if(Ee&&Ee.includes("camera-access")&&A){e.state.unbindTexture(),v=a.getBinding();for(let V=0;V<te.length;V++){const Ie=te[V].camera;if(Ie){let Be=_[Ie];Be||(Be=new rx,_[Ie]=Be);const Ye=v.getCameraImage(Ie);Be.sourceTexture=Ye}}}}for(let te=0;te<H.length;te++){const le=X[te],Ee=H[te];le!==null&&Ee!==void 0&&Ee.update(le,I,m||f)}ee&&ee(T,I),I.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:I}),b=null}const se=new ux;se.setAnimationLoop(oe),this.setAnimationLoop=function(T){ee=T},this.dispose=function(){}}}const wr=new Vi,uR=new sn;function fR(s,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function a(x,_){_.color.getRGB(x.fogColor.value,$_(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,O,P,R){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),v(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),y(x,_),_.isMeshPhysicalMaterial&&E(x,_,R)):_.isMeshMatcapMaterial?(c(x,_),b(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),A(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?p(x,_,O,P):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===qn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===qn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const O=e.get(_),P=O.envMap,R=O.envMapRotation;P&&(x.envMap.value=P,wr.copy(R),wr.x*=-1,wr.y*=-1,wr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),x.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(wr)),x.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,O,P){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*O,x.scale.value=P*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function E(x,_,O){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=O.texture,x.transmissionSamplerSize.value.set(O.width,O.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function A(x,_){const O=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(O.matrixWorld),x.nearDistance.value=O.shadow.camera.near,x.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function dR(s,e,i,a){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(O,P){const R=P.program;a.uniformBlockBinding(O,R)}function m(O,P){let R=l[O.id];R===void 0&&(b(O),R=g(O),l[O.id]=R,O.addEventListener("dispose",x));const H=P.program;a.updateUBOMapping(O,H);const X=e.render.frame;c[O.id]!==X&&(y(O),c[O.id]=X)}function g(O){const P=v();O.__bindingPointIndex=P;const R=s.createBuffer(),H=O.__size,X=O.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,H,X),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,P,R),R}function v(){for(let O=0;O<d;O++)if(f.indexOf(O)===-1)return f.push(O),O;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(O){const P=l[O.id],R=O.uniforms,H=O.__cache;s.bindBuffer(s.UNIFORM_BUFFER,P);for(let X=0,z=R.length;X<z;X++){const K=Array.isArray(R[X])?R[X]:[R[X]];for(let U=0,L=K.length;U<L;U++){const Y=K[U];if(E(Y,X,U,H)===!0){const re=Y.__offset,ce=Array.isArray(Y.value)?Y.value:[Y.value];let xe=0;for(let ue=0;ue<ce.length;ue++){const F=ce[ue],Q=A(F);typeof F=="number"||typeof F=="boolean"?(Y.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,re+xe,Y.__data)):F.isMatrix3?(Y.__data[0]=F.elements[0],Y.__data[1]=F.elements[1],Y.__data[2]=F.elements[2],Y.__data[3]=0,Y.__data[4]=F.elements[3],Y.__data[5]=F.elements[4],Y.__data[6]=F.elements[5],Y.__data[7]=0,Y.__data[8]=F.elements[6],Y.__data[9]=F.elements[7],Y.__data[10]=F.elements[8],Y.__data[11]=0):(F.toArray(Y.__data,xe),xe+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,Y.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(O,P,R,H){const X=O.value,z=P+"_"+R;if(H[z]===void 0)return typeof X=="number"||typeof X=="boolean"?H[z]=X:H[z]=X.clone(),!0;{const K=H[z];if(typeof X=="number"||typeof X=="boolean"){if(K!==X)return H[z]=X,!0}else if(K.equals(X)===!1)return K.copy(X),!0}return!1}function b(O){const P=O.uniforms;let R=0;const H=16;for(let z=0,K=P.length;z<K;z++){const U=Array.isArray(P[z])?P[z]:[P[z]];for(let L=0,Y=U.length;L<Y;L++){const re=U[L],ce=Array.isArray(re.value)?re.value:[re.value];for(let xe=0,ue=ce.length;xe<ue;xe++){const F=ce[xe],Q=A(F),J=R%H,W=J%Q.boundary,N=J+W;R+=W,N!==0&&H-N<Q.storage&&(R+=H-N),re.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=R,R+=Q.storage}}}const X=R%H;return X>0&&(R+=H-X),O.__size=R,O.__cache={},this}function A(O){const P={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(P.boundary=4,P.storage=4):O.isVector2?(P.boundary=8,P.storage=8):O.isVector3||O.isColor?(P.boundary=16,P.storage=12):O.isVector4?(P.boundary=16,P.storage=16):O.isMatrix3?(P.boundary=48,P.storage=48):O.isMatrix4?(P.boundary=64,P.storage=64):O.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",O),P}function x(O){const P=O.target;P.removeEventListener("dispose",x);const R=f.indexOf(P.__bindingPointIndex);f.splice(R,1),s.deleteBuffer(l[P.id]),delete l[P.id],delete c[P.id]}function _(){for(const O in l)s.deleteBuffer(l[O]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class mx{constructor(e={}){const{canvas:i=KE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const b=new Uint32Array(4),A=new Int32Array(4);let x=null,_=null;const O=[],P=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let H=!1;this._outputColorSpace=xi;let X=0,z=0,K=null,U=-1,L=null;const Y=new rn,re=new rn;let ce=null;const xe=new Dt(0);let ue=0,F=i.width,Q=i.height,J=1,W=null,N=null;const M=new rn(0,0,F,Q),k=new rn(0,0,F,Q);let ee=!1;const oe=new _p;let se=!1,T=!1;const I=new sn,te=new ge,le=new rn,Ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function We(){return K===null?J:1}let V=a;function Ie(D,ne){return i.getContext(D,ne)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${up}`),i.addEventListener("webglcontextlost",Pe,!1),i.addEventListener("webglcontextrestored",qe,!1),i.addEventListener("webglcontextcreationerror",De,!1),V===null){const ne="webgl2";if(V=Ie(ne,D),V===null)throw Ie(ne)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Be,Ye,ze,ht,Ve,at,Yt,kt,G,w,fe,Me,Re,ye,tt,Le,Qe,nt,Ne,Oe,rt,Xe,Fe,mt;function $(){Be=new EA(V),Be.init(),Xe=new rR(V,Be),Ye=new gA(V,Be,e,Xe),ze=new iR(V,Be),Ye.reversedDepthBuffer&&y&&ze.buffers.depth.setReversed(!0),ht=new AA(V),Ve=new Ww,at=new aR(V,Be,ze,Ve,Ye,Xe,ht),Yt=new _A(R),kt=new MA(R),G=new Ub(V),Fe=new pA(V,G),w=new bA(V,G,ht,Fe),fe=new RA(V,w,G,ht),Ne=new wA(V,Ye,at),Le=new vA(Ve),Me=new kw(R,Yt,kt,Be,Ye,Fe,Le),Re=new fR(R,Ve),ye=new jw,tt=new Jw(Be),nt=new hA(R,Yt,kt,ze,fe,E,p),Qe=new tR(R,fe,Ye),mt=new dR(V,ht,Ye,ze),Oe=new mA(V,Be,ht),rt=new TA(V,Be,ht),ht.programs=Me.programs,R.capabilities=Ye,R.extensions=Be,R.properties=Ve,R.renderLists=ye,R.shadowMap=Qe,R.state=ze,R.info=ht}$();const Ue=new cR(R,V);this.xr=Ue,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=Be.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Be.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(F,Q,!1))},this.getSize=function(D){return D.set(F,Q)},this.setSize=function(D,ne,me=!0){if(Ue.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,Q=ne,i.width=Math.floor(D*J),i.height=Math.floor(ne*J),me===!0&&(i.style.width=D+"px",i.style.height=ne+"px"),this.setViewport(0,0,D,ne)},this.getDrawingBufferSize=function(D){return D.set(F*J,Q*J).floor()},this.setDrawingBufferSize=function(D,ne,me){F=D,Q=ne,J=me,i.width=Math.floor(D*me),i.height=Math.floor(ne*me),this.setViewport(0,0,D,ne)},this.getCurrentViewport=function(D){return D.copy(Y)},this.getViewport=function(D){return D.copy(M)},this.setViewport=function(D,ne,me,ve){D.isVector4?M.set(D.x,D.y,D.z,D.w):M.set(D,ne,me,ve),ze.viewport(Y.copy(M).multiplyScalar(J).round())},this.getScissor=function(D){return D.copy(k)},this.setScissor=function(D,ne,me,ve){D.isVector4?k.set(D.x,D.y,D.z,D.w):k.set(D,ne,me,ve),ze.scissor(re.copy(k).multiplyScalar(J).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(D){ze.setScissorTest(ee=D)},this.setOpaqueSort=function(D){W=D},this.setTransparentSort=function(D){N=D},this.getClearColor=function(D){return D.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(D=!0,ne=!0,me=!0){let ve=0;if(D){let ae=!1;if(K!==null){const we=K.texture.format;ae=we===gp||we===mp||we===pp}if(ae){const we=K.texture.type,He=we===Gi||we===Pr||we===$o||we===el||we===dp||we===hp,Je=nt.getClearColor(),ke=nt.getClearAlpha(),st=Je.r,ut=Je.g,ot=Je.b;He?(b[0]=st,b[1]=ut,b[2]=ot,b[3]=ke,V.clearBufferuiv(V.COLOR,0,b)):(A[0]=st,A[1]=ut,A[2]=ot,A[3]=ke,V.clearBufferiv(V.COLOR,0,A))}else ve|=V.COLOR_BUFFER_BIT}ne&&(ve|=V.DEPTH_BUFFER_BIT),me&&(ve|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ve)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Pe,!1),i.removeEventListener("webglcontextrestored",qe,!1),i.removeEventListener("webglcontextcreationerror",De,!1),nt.dispose(),ye.dispose(),tt.dispose(),Ve.dispose(),Yt.dispose(),kt.dispose(),fe.dispose(),Fe.dispose(),mt.dispose(),Me.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",li),Ue.removeEventListener("sessionend",Zs),Di.stop()};function Pe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function qe(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const D=ht.autoReset,ne=Qe.enabled,me=Qe.autoUpdate,ve=Qe.needsUpdate,ae=Qe.type;$(),ht.autoReset=D,Qe.enabled=ne,Qe.autoUpdate=me,Qe.needsUpdate=ve,Qe.type=ae}function De(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Ae(D){const ne=D.target;ne.removeEventListener("dispose",Ae),Ze(ne)}function Ze(D){dt(D),Ve.remove(D)}function dt(D){const ne=Ve.get(D).programs;ne!==void 0&&(ne.forEach(function(me){Me.releaseProgram(me)}),D.isShaderMaterial&&Me.releaseShaderCache(D))}this.renderBufferDirect=function(D,ne,me,ve,ae,we){ne===null&&(ne=Ee);const He=ae.isMesh&&ae.matrixWorld.determinant()<0,Je=Sa(D,ne,me,ve,ae);ze.setMaterial(ve,He);let ke=me.index,st=1;if(ve.wireframe===!0){if(ke=w.getWireframeAttribute(me),ke===void 0)return;st=2}const ut=me.drawRange,ot=me.attributes.position;let yt=ut.start*st,zt=(ut.start+ut.count)*st;we!==null&&(yt=Math.max(yt,we.start*st),zt=Math.min(zt,(we.start+we.count)*st)),ke!==null?(yt=Math.max(yt,0),zt=Math.min(zt,ke.count)):ot!=null&&(yt=Math.max(yt,0),zt=Math.min(zt,ot.count));const Zt=zt-yt;if(Zt<0||Zt===1/0)return;Fe.setup(ae,ve,Je,me,ke);let Ft,St=Oe;if(ke!==null&&(Ft=G.get(ke),St=rt,St.setIndex(Ft)),ae.isMesh)ve.wireframe===!0?(ze.setLineWidth(ve.wireframeLinewidth*We()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(ae.isLine){let $e=ve.linewidth;$e===void 0&&($e=1),ze.setLineWidth($e*We()),ae.isLineSegments?St.setMode(V.LINES):ae.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else ae.isPoints?St.setMode(V.POINTS):ae.isSprite&&St.setMode(V.TRIANGLES);if(ae.isBatchedMesh)if(ae._multiDrawInstances!==null)il("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount,ae._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))St.renderMultiDraw(ae._multiDrawStarts,ae._multiDrawCounts,ae._multiDrawCount);else{const $e=ae._multiDrawStarts,Qt=ae._multiDrawCounts,Ut=ae._multiDrawCount,Tn=ke?G.get(ke).bytesPerElement:1,Wi=Ve.get(ve).currentProgram.getUniforms();for(let Sn=0;Sn<Ut;Sn++)Wi.setValue(V,"_gl_DrawID",Sn),St.render($e[Sn]/Tn,Qt[Sn])}else if(ae.isInstancedMesh)St.renderInstances(yt,Zt,ae.count);else if(me.isInstancedBufferGeometry){const $e=me._maxInstanceCount!==void 0?me._maxInstanceCount:1/0,Qt=Math.min(me.instanceCount,$e);St.renderInstances(yt,Zt,Qt)}else St.render(yt,Zt)};function Ht(D,ne,me){D.transparent===!0&&D.side===pa&&D.forceSinglePass===!1?(D.side=qn,D.needsUpdate=!0,Kn(D,ne,me),D.side=tr,D.needsUpdate=!0,Kn(D,ne,me),D.side=pa):Kn(D,ne,me)}this.compile=function(D,ne,me=null){me===null&&(me=D),_=tt.get(me),_.init(ne),P.push(_),me.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(_.pushLight(ae),ae.castShadow&&_.pushShadow(ae))}),D!==me&&D.traverseVisible(function(ae){ae.isLight&&ae.layers.test(ne.layers)&&(_.pushLight(ae),ae.castShadow&&_.pushShadow(ae))}),_.setupLights();const ve=new Set;return D.traverse(function(ae){if(!(ae.isMesh||ae.isPoints||ae.isLine||ae.isSprite))return;const we=ae.material;if(we)if(Array.isArray(we))for(let He=0;He<we.length;He++){const Je=we[He];Ht(Je,me,ae),ve.add(Je)}else Ht(we,me,ae),ve.add(we)}),_=P.pop(),ve},this.compileAsync=function(D,ne,me=null){const ve=this.compile(D,ne,me);return new Promise(ae=>{function we(){if(ve.forEach(function(He){Ve.get(He).currentProgram.isReady()&&ve.delete(He)}),ve.size===0){ae(D);return}setTimeout(we,10)}Be.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Nt=null;function Pn(D){Nt&&Nt(D)}function li(){Di.stop()}function Zs(){Di.start()}const Di=new ux;Di.setAnimationLoop(Pn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(D){Nt=D,Ue.setAnimationLoop(D),D===null?Di.stop():Di.start()},Ue.addEventListener("sessionstart",li),Ue.addEventListener("sessionend",Zs),this.render=function(D,ne){if(ne!==void 0&&ne.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ne.parent===null&&ne.matrixWorldAutoUpdate===!0&&ne.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(ne),ne=Ue.getCamera()),D.isScene===!0&&D.onBeforeRender(R,D,ne,K),_=tt.get(D,P.length),_.init(ne),P.push(_),I.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),oe.setFromProjectionMatrix(I,zi,ne.reversedDepth),T=this.localClippingEnabled,se=Le.init(this.clippingPlanes,T),x=ye.get(D,O.length),x.init(),O.push(x),Ue.enabled===!0&&Ue.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Br(we,ne,-1/0,R.sortObjects)}Br(D,ne,0,R.sortObjects),x.finish(),R.sortObjects===!0&&x.sort(W,N),Ce=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Ce&&nt.addToRenderList(x,D),this.info.render.frame++,se===!0&&Le.beginShadows();const me=_.state.shadowsArray;Qe.render(me,D,ne),se===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();const ve=x.opaque,ae=x.transmissive;if(_.setupLights(),ne.isArrayCamera){const we=ne.cameras;if(ae.length>0)for(let He=0,Je=we.length;He<Je;He++){const ke=we[He];Fr(ve,ae,D,ke)}Ce&&nt.render(D);for(let He=0,Je=we.length;He<Je;He++){const ke=we[He];zr(x,D,ke,ke.viewport)}}else ae.length>0&&Fr(ve,ae,D,ne),Ce&&nt.render(D),zr(x,D,ne);K!==null&&z===0&&(at.updateMultisampleRenderTarget(K),at.updateRenderTargetMipmap(K)),D.isScene===!0&&D.onAfterRender(R,D,ne),Fe.resetDefaultState(),U=-1,L=null,P.pop(),P.length>0?(_=P[P.length-1],se===!0&&Le.setGlobalState(R.clippingPlanes,_.state.camera)):_=null,O.pop(),O.length>0?x=O[O.length-1]:x=null};function Br(D,ne,me,ve){if(D.visible===!1)return;if(D.layers.test(ne.layers)){if(D.isGroup)me=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ne);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||oe.intersectsSprite(D)){ve&&le.setFromMatrixPosition(D.matrixWorld).applyMatrix4(I);const He=fe.update(D),Je=D.material;Je.visible&&x.push(D,He,Je,me,le.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||oe.intersectsObject(D))){const He=fe.update(D),Je=D.material;if(ve&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),le.copy(D.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),le.copy(He.boundingSphere.center)),le.applyMatrix4(D.matrixWorld).applyMatrix4(I)),Array.isArray(Je)){const ke=He.groups;for(let st=0,ut=ke.length;st<ut;st++){const ot=ke[st],yt=Je[ot.materialIndex];yt&&yt.visible&&x.push(D,He,yt,me,le.z,ot)}}else Je.visible&&x.push(D,He,Je,me,le.z,null)}}const we=D.children;for(let He=0,Je=we.length;He<Je;He++)Br(we[He],ne,me,ve)}function zr(D,ne,me,ve){const ae=D.opaque,we=D.transmissive,He=D.transparent;_.setupLightsView(me),se===!0&&Le.setGlobalState(R.clippingPlanes,me),ve&&ze.viewport(Y.copy(ve)),ae.length>0&&ir(ae,ne,me),we.length>0&&ir(we,ne,me),He.length>0&&ir(He,ne,me),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function Fr(D,ne,me,ve){if((me.isScene===!0?me.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ve.id]===void 0&&(_.state.transmissionRenderTarget[ve.id]=new Ir(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?ll:Gi,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const we=_.state.transmissionRenderTarget[ve.id],He=ve.viewport||Y;we.setSize(He.z*R.transmissionResolutionScale,He.w*R.transmissionResolutionScale);const Je=R.getRenderTarget(),ke=R.getActiveCubeFace(),st=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(xe),ue=R.getClearAlpha(),ue<1&&R.setClearColor(16777215,.5),R.clear(),Ce&&nt.render(me);const ut=R.toneMapping;R.toneMapping=er;const ot=ve.viewport;if(ve.viewport!==void 0&&(ve.viewport=void 0),_.setupLightsView(ve),se===!0&&Le.setGlobalState(R.clippingPlanes,ve),ir(D,me,ve),at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we),Be.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let zt=0,Zt=ne.length;zt<Zt;zt++){const Ft=ne[zt],St=Ft.object,$e=Ft.geometry,Qt=Ft.material,Ut=Ft.group;if(Qt.side===pa&&St.layers.test(ve.layers)){const Tn=Qt.side;Qt.side=qn,Qt.needsUpdate=!0,Ks(St,me,ve,$e,Qt,Ut),Qt.side=Tn,Qt.needsUpdate=!0,yt=!0}}yt===!0&&(at.updateMultisampleRenderTarget(we),at.updateRenderTargetMipmap(we))}R.setRenderTarget(Je,ke,st),R.setClearColor(xe,ue),ot!==void 0&&(ve.viewport=ot),R.toneMapping=ut}function ir(D,ne,me){const ve=ne.isScene===!0?ne.overrideMaterial:null;for(let ae=0,we=D.length;ae<we;ae++){const He=D[ae],Je=He.object,ke=He.geometry,st=He.group;let ut=He.material;ut.allowOverride===!0&&ve!==null&&(ut=ve),Je.layers.test(me.layers)&&Ks(Je,ne,me,ke,ut,st)}}function Ks(D,ne,me,ve,ae,we){D.onBeforeRender(R,ne,me,ve,ae,we),D.modelViewMatrix.multiplyMatrices(me.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ae.onBeforeRender(R,ne,me,ve,D,we),ae.transparent===!0&&ae.side===pa&&ae.forceSinglePass===!1?(ae.side=qn,ae.needsUpdate=!0,R.renderBufferDirect(me,ne,ve,ae,D,we),ae.side=tr,ae.needsUpdate=!0,R.renderBufferDirect(me,ne,ve,ae,D,we),ae.side=pa):R.renderBufferDirect(me,ne,ve,ae,D,we),D.onAfterRender(R,ne,me,ve,ae,we)}function Kn(D,ne,me){ne.isScene!==!0&&(ne=Ee);const ve=Ve.get(D),ae=_.state.lights,we=_.state.shadowsArray,He=ae.state.version,Je=Me.getParameters(D,ae.state,we,ne,me),ke=Me.getProgramCacheKey(Je);let st=ve.programs;ve.environment=D.isMeshStandardMaterial?ne.environment:null,ve.fog=ne.fog,ve.envMap=(D.isMeshStandardMaterial?kt:Yt).get(D.envMap||ve.environment),ve.envMapRotation=ve.environment!==null&&D.envMap===null?ne.environmentRotation:D.envMapRotation,st===void 0&&(D.addEventListener("dispose",Ae),st=new Map,ve.programs=st);let ut=st.get(ke);if(ut!==void 0){if(ve.currentProgram===ut&&ve.lightsStateVersion===He)return bn(D,Je),ut}else Je.uniforms=Me.getUniforms(D),D.onBeforeCompile(Je,R),ut=Me.acquireProgram(Je,ke),st.set(ke,ut),ve.uniforms=Je.uniforms;const ot=ve.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ot.clippingPlanes=Le.uniform),bn(D,Je),ve.needsLights=gu(D),ve.lightsStateVersion=He,ve.needsLights&&(ot.ambientLightColor.value=ae.state.ambient,ot.lightProbe.value=ae.state.probe,ot.directionalLights.value=ae.state.directional,ot.directionalLightShadows.value=ae.state.directionalShadow,ot.spotLights.value=ae.state.spot,ot.spotLightShadows.value=ae.state.spotShadow,ot.rectAreaLights.value=ae.state.rectArea,ot.ltc_1.value=ae.state.rectAreaLTC1,ot.ltc_2.value=ae.state.rectAreaLTC2,ot.pointLights.value=ae.state.point,ot.pointLightShadows.value=ae.state.pointShadow,ot.hemisphereLights.value=ae.state.hemi,ot.directionalShadowMap.value=ae.state.directionalShadowMap,ot.directionalShadowMatrix.value=ae.state.directionalShadowMatrix,ot.spotShadowMap.value=ae.state.spotShadowMap,ot.spotLightMatrix.value=ae.state.spotLightMatrix,ot.spotLightMap.value=ae.state.spotLightMap,ot.pointShadowMap.value=ae.state.pointShadowMap,ot.pointShadowMatrix.value=ae.state.pointShadowMatrix),ve.currentProgram=ut,ve.uniformsList=null,ut}function un(D){if(D.uniformsList===null){const ne=D.currentProgram.getUniforms();D.uniformsList=nu.seqWithValue(ne.seq,D.uniforms)}return D.uniformsList}function bn(D,ne){const me=Ve.get(D);me.outputColorSpace=ne.outputColorSpace,me.batching=ne.batching,me.batchingColor=ne.batchingColor,me.instancing=ne.instancing,me.instancingColor=ne.instancingColor,me.instancingMorph=ne.instancingMorph,me.skinning=ne.skinning,me.morphTargets=ne.morphTargets,me.morphNormals=ne.morphNormals,me.morphColors=ne.morphColors,me.morphTargetsCount=ne.morphTargetsCount,me.numClippingPlanes=ne.numClippingPlanes,me.numIntersection=ne.numClipIntersection,me.vertexAlphas=ne.vertexAlphas,me.vertexTangents=ne.vertexTangents,me.toneMapping=ne.toneMapping}function Sa(D,ne,me,ve,ae){ne.isScene!==!0&&(ne=Ee),at.resetTextureUnits();const we=ne.fog,He=ve.isMeshStandardMaterial?ne.environment:null,Je=K===null?R.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:Vs,ke=(ve.isMeshStandardMaterial?kt:Yt).get(ve.envMap||He),st=ve.vertexColors===!0&&!!me.attributes.color&&me.attributes.color.itemSize===4,ut=!!me.attributes.tangent&&(!!ve.normalMap||ve.anisotropy>0),ot=!!me.morphAttributes.position,yt=!!me.morphAttributes.normal,zt=!!me.morphAttributes.color;let Zt=er;ve.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Zt=R.toneMapping);const Ft=me.morphAttributes.position||me.morphAttributes.normal||me.morphAttributes.color,St=Ft!==void 0?Ft.length:0,$e=Ve.get(ve),Qt=_.state.lights;if(se===!0&&(T===!0||D!==L)){const gn=D===L&&ve.id===U;Le.setState(ve,D,gn)}let Ut=!1;ve.version===$e.__version?($e.needsLights&&$e.lightsStateVersion!==Qt.state.version||$e.outputColorSpace!==Je||ae.isBatchedMesh&&$e.batching===!1||!ae.isBatchedMesh&&$e.batching===!0||ae.isBatchedMesh&&$e.batchingColor===!0&&ae.colorTexture===null||ae.isBatchedMesh&&$e.batchingColor===!1&&ae.colorTexture!==null||ae.isInstancedMesh&&$e.instancing===!1||!ae.isInstancedMesh&&$e.instancing===!0||ae.isSkinnedMesh&&$e.skinning===!1||!ae.isSkinnedMesh&&$e.skinning===!0||ae.isInstancedMesh&&$e.instancingColor===!0&&ae.instanceColor===null||ae.isInstancedMesh&&$e.instancingColor===!1&&ae.instanceColor!==null||ae.isInstancedMesh&&$e.instancingMorph===!0&&ae.morphTexture===null||ae.isInstancedMesh&&$e.instancingMorph===!1&&ae.morphTexture!==null||$e.envMap!==ke||ve.fog===!0&&$e.fog!==we||$e.numClippingPlanes!==void 0&&($e.numClippingPlanes!==Le.numPlanes||$e.numIntersection!==Le.numIntersection)||$e.vertexAlphas!==st||$e.vertexTangents!==ut||$e.morphTargets!==ot||$e.morphNormals!==yt||$e.morphColors!==zt||$e.toneMapping!==Zt||$e.morphTargetsCount!==St)&&(Ut=!0):(Ut=!0,$e.__version=ve.version);let Tn=$e.currentProgram;Ut===!0&&(Tn=Kn(ve,ne,ae));let Wi=!1,Sn=!1,rr=!1;const Tt=Tn.getUniforms(),Nn=$e.uniforms;if(ze.useProgram(Tn.program)&&(Wi=!0,Sn=!0,rr=!0),ve.id!==U&&(U=ve.id,Sn=!0),Wi||L!==D){ze.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Tt.setValue(V,"projectionMatrix",D.projectionMatrix),Tt.setValue(V,"viewMatrix",D.matrixWorldInverse);const on=Tt.map.cameraPosition;on!==void 0&&on.setValue(V,te.setFromMatrixPosition(D.matrixWorld)),Ye.logarithmicDepthBuffer&&Tt.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ve.isMeshPhongMaterial||ve.isMeshToonMaterial||ve.isMeshLambertMaterial||ve.isMeshBasicMaterial||ve.isMeshStandardMaterial||ve.isShaderMaterial)&&Tt.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),L!==D&&(L=D,Sn=!0,rr=!0)}if(ae.isSkinnedMesh){Tt.setOptional(V,ae,"bindMatrix"),Tt.setOptional(V,ae,"bindMatrixInverse");const gn=ae.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Tt.setValue(V,"boneTexture",gn.boneTexture,at))}ae.isBatchedMesh&&(Tt.setOptional(V,ae,"batchingTexture"),Tt.setValue(V,"batchingTexture",ae._matricesTexture,at),Tt.setOptional(V,ae,"batchingIdTexture"),Tt.setValue(V,"batchingIdTexture",ae._indirectTexture,at),Tt.setOptional(V,ae,"batchingColorTexture"),ae._colorsTexture!==null&&Tt.setValue(V,"batchingColorTexture",ae._colorsTexture,at));const In=me.morphAttributes;if((In.position!==void 0||In.normal!==void 0||In.color!==void 0)&&Ne.update(ae,me,Tn),(Sn||$e.receiveShadow!==ae.receiveShadow)&&($e.receiveShadow=ae.receiveShadow,Tt.setValue(V,"receiveShadow",ae.receiveShadow)),ve.isMeshGouraudMaterial&&ve.envMap!==null&&(Nn.envMap.value=ke,Nn.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),ve.isMeshStandardMaterial&&ve.envMap===null&&ne.environment!==null&&(Nn.envMapIntensity.value=ne.environmentIntensity),Sn&&(Tt.setValue(V,"toneMappingExposure",R.toneMappingExposure),$e.needsLights&&Qs(Nn,rr),we&&ve.fog===!0&&Re.refreshFogUniforms(Nn,we),Re.refreshMaterialUniforms(Nn,ve,J,Q,_.state.transmissionRenderTarget[D.id]),nu.upload(V,un($e),Nn,at)),ve.isShaderMaterial&&ve.uniformsNeedUpdate===!0&&(nu.upload(V,un($e),Nn,at),ve.uniformsNeedUpdate=!1),ve.isSpriteMaterial&&Tt.setValue(V,"center",ae.center),Tt.setValue(V,"modelViewMatrix",ae.modelViewMatrix),Tt.setValue(V,"normalMatrix",ae.normalMatrix),Tt.setValue(V,"modelMatrix",ae.matrixWorld),ve.isShaderMaterial||ve.isRawShaderMaterial){const gn=ve.uniformsGroups;for(let on=0,Hr=gn.length;on<Hr;on++){const Ni=gn[on];mt.update(Ni,Tn),mt.bind(Ni,Tn)}}return Tn}function Qs(D,ne){D.ambientLightColor.needsUpdate=ne,D.lightProbe.needsUpdate=ne,D.directionalLights.needsUpdate=ne,D.directionalLightShadows.needsUpdate=ne,D.pointLights.needsUpdate=ne,D.pointLightShadows.needsUpdate=ne,D.spotLights.needsUpdate=ne,D.spotLightShadows.needsUpdate=ne,D.rectAreaLights.needsUpdate=ne,D.hemisphereLights.needsUpdate=ne}function gu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(D,ne,me){const ve=Ve.get(D);ve.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ve.__autoAllocateDepthBuffer===!1&&(ve.__useRenderToTexture=!1),Ve.get(D.texture).__webglTexture=ne,Ve.get(D.depthTexture).__webglTexture=ve.__autoAllocateDepthBuffer?void 0:me,ve.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,ne){const me=Ve.get(D);me.__webglFramebuffer=ne,me.__useDefaultFramebuffer=ne===void 0};const vu=V.createFramebuffer();this.setRenderTarget=function(D,ne=0,me=0){K=D,X=ne,z=me;let ve=!0,ae=null,we=!1,He=!1;if(D){const ke=Ve.get(D);if(ke.__useDefaultFramebuffer!==void 0)ze.bindFramebuffer(V.FRAMEBUFFER,null),ve=!1;else if(ke.__webglFramebuffer===void 0)at.setupRenderTarget(D);else if(ke.__hasExternalTextures)at.rebindTextures(D,Ve.get(D.texture).__webglTexture,Ve.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ot=D.depthTexture;if(ke.__boundDepthTexture!==ot){if(ot!==null&&Ve.has(ot)&&(D.width!==ot.image.width||D.height!==ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(D)}}const st=D.texture;(st.isData3DTexture||st.isDataArrayTexture||st.isCompressedArrayTexture)&&(He=!0);const ut=Ve.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ut[ne])?ae=ut[ne][me]:ae=ut[ne],we=!0):D.samples>0&&at.useMultisampledRTT(D)===!1?ae=Ve.get(D).__webglMultisampledFramebuffer:Array.isArray(ut)?ae=ut[me]:ae=ut,Y.copy(D.viewport),re.copy(D.scissor),ce=D.scissorTest}else Y.copy(M).multiplyScalar(J).floor(),re.copy(k).multiplyScalar(J).floor(),ce=ee;if(me!==0&&(ae=vu),ze.bindFramebuffer(V.FRAMEBUFFER,ae)&&ve&&ze.drawBuffers(D,ae),ze.viewport(Y),ze.scissor(re),ze.setScissorTest(ce),we){const ke=Ve.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+ne,ke.__webglTexture,me)}else if(He){const ke=ne;for(let st=0;st<D.textures.length;st++){const ut=Ve.get(D.textures[st]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+st,ut.__webglTexture,me,ke)}}else if(D!==null&&me!==0){const ke=Ve.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,ke.__webglTexture,me)}U=-1},this.readRenderTargetPixels=function(D,ne,me,ve,ae,we,He,Je=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=Ve.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke){ze.bindFramebuffer(V.FRAMEBUFFER,ke);try{const st=D.textures[Je],ut=st.format,ot=st.type;if(!Ye.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ye.textureTypeReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ne>=0&&ne<=D.width-ve&&me>=0&&me<=D.height-ae&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Je),V.readPixels(ne,me,ve,ae,Xe.convert(ut),Xe.convert(ot),we))}finally{const st=K!==null?Ve.get(K).__webglFramebuffer:null;ze.bindFramebuffer(V.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(D,ne,me,ve,ae,we,He,Je=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=Ve.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&He!==void 0&&(ke=ke[He]),ke)if(ne>=0&&ne<=D.width-ve&&me>=0&&me<=D.height-ae){ze.bindFramebuffer(V.FRAMEBUFFER,ke);const st=D.textures[Je],ut=st.format,ot=st.type;if(!Ye.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ye.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.bufferData(V.PIXEL_PACK_BUFFER,we.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Je),V.readPixels(ne,me,ve,ae,Xe.convert(ut),Xe.convert(ot),0);const zt=K!==null?Ve.get(K).__webglFramebuffer:null;ze.bindFramebuffer(V.FRAMEBUFFER,zt);const Zt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await QE(V,Zt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,we),V.deleteBuffer(yt),V.deleteSync(Zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,ne=null,me=0){const ve=Math.pow(2,-me),ae=Math.floor(D.image.width*ve),we=Math.floor(D.image.height*ve),He=ne!==null?ne.x:0,Je=ne!==null?ne.y:0;at.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,me,0,0,He,Je,ae,we),ze.unbindTexture()};const pl=V.createFramebuffer(),ar=V.createFramebuffer();this.copyTextureToTexture=function(D,ne,me=null,ve=null,ae=0,we=null){we===null&&(ae!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=ae,ae=0):we=0);let He,Je,ke,st,ut,ot,yt,zt,Zt;const Ft=D.isCompressedTexture?D.mipmaps[we]:D.image;if(me!==null)He=me.max.x-me.min.x,Je=me.max.y-me.min.y,ke=me.isBox3?me.max.z-me.min.z:1,st=me.min.x,ut=me.min.y,ot=me.isBox3?me.min.z:0;else{const In=Math.pow(2,-ae);He=Math.floor(Ft.width*In),Je=Math.floor(Ft.height*In),D.isDataArrayTexture?ke=Ft.depth:D.isData3DTexture?ke=Math.floor(Ft.depth*In):ke=1,st=0,ut=0,ot=0}ve!==null?(yt=ve.x,zt=ve.y,Zt=ve.z):(yt=0,zt=0,Zt=0);const St=Xe.convert(ne.format),$e=Xe.convert(ne.type);let Qt;ne.isData3DTexture?(at.setTexture3D(ne,0),Qt=V.TEXTURE_3D):ne.isDataArrayTexture||ne.isCompressedArrayTexture?(at.setTexture2DArray(ne,0),Qt=V.TEXTURE_2D_ARRAY):(at.setTexture2D(ne,0),Qt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ne.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ne.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ne.unpackAlignment);const Ut=V.getParameter(V.UNPACK_ROW_LENGTH),Tn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wi=V.getParameter(V.UNPACK_SKIP_PIXELS),Sn=V.getParameter(V.UNPACK_SKIP_ROWS),rr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,st),V.pixelStorei(V.UNPACK_SKIP_ROWS,ut),V.pixelStorei(V.UNPACK_SKIP_IMAGES,ot);const Tt=D.isDataArrayTexture||D.isData3DTexture,Nn=ne.isDataArrayTexture||ne.isData3DTexture;if(D.isDepthTexture){const In=Ve.get(D),gn=Ve.get(ne),on=Ve.get(In.__renderTarget),Hr=Ve.get(gn.__renderTarget);ze.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ni=0;Ni<ke;Ni++)Tt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(D).__webglTexture,ae,ot+Ni),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Ve.get(ne).__webglTexture,we,Zt+Ni)),V.blitFramebuffer(st,ut,He,Je,yt,zt,He,Je,V.DEPTH_BUFFER_BIT,V.NEAREST);ze.bindFramebuffer(V.READ_FRAMEBUFFER,null),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(ae!==0||D.isRenderTargetTexture||Ve.has(D)){const In=Ve.get(D),gn=Ve.get(ne);ze.bindFramebuffer(V.READ_FRAMEBUFFER,pl),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,ar);for(let on=0;on<ke;on++)Tt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,In.__webglTexture,ae,ot+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,In.__webglTexture,ae),Nn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,we,Zt+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,we),ae!==0?V.blitFramebuffer(st,ut,He,Je,yt,zt,He,Je,V.COLOR_BUFFER_BIT,V.NEAREST):Nn?V.copyTexSubImage3D(Qt,we,yt,zt,Zt+on,st,ut,He,Je):V.copyTexSubImage2D(Qt,we,yt,zt,st,ut,He,Je);ze.bindFramebuffer(V.READ_FRAMEBUFFER,null),ze.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Nn?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(Qt,we,yt,zt,Zt,He,Je,ke,St,$e,Ft.data):ne.isCompressedArrayTexture?V.compressedTexSubImage3D(Qt,we,yt,zt,Zt,He,Je,ke,St,Ft.data):V.texSubImage3D(Qt,we,yt,zt,Zt,He,Je,ke,St,$e,Ft):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,we,yt,zt,He,Je,St,$e,Ft.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,we,yt,zt,Ft.width,Ft.height,St,Ft.data):V.texSubImage2D(V.TEXTURE_2D,we,yt,zt,He,Je,St,$e,Ft);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ut),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Tn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wi),V.pixelStorei(V.UNPACK_SKIP_ROWS,Sn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rr),we===0&&ne.generateMipmaps&&V.generateMipmap(Qt),ze.unbindTexture()},this.initRenderTarget=function(D){Ve.get(D).__webglFramebuffer===void 0&&at.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?at.setTextureCube(D,0):D.isData3DTexture?at.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?at.setTexture2DArray(D,0):at.setTexture2D(D,0),ze.unbindTexture()},this.resetState=function(){X=0,z=0,K=null,ze.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}class Os{static instance;clickSound=null;enterSound=null;isInitialized=!1;static getInstance(){return Os.instance||(Os.instance=new Os),Os.instance}initAudio(){if(!this.isInitialized)try{this.clickSound=new Audio("/assets/sounds/点击.wav"),this.clickSound.preload="auto",this.clickSound.volume=.7,this.enterSound=new Audio("/assets/sounds/完美(1).mp3"),this.enterSound.preload="auto",this.enterSound.volume=.8,this.isInitialized=!0}catch{}}playClickSound(){this.initAudio(),this.clickSound&&(this.clickSound.currentTime=0,this.clickSound.play().catch(e=>{}))}playEnterSound(){this.initAudio(),this.enterSound&&(this.enterSound.currentTime=0,this.enterSound.play().catch(e=>{}))}stopAllSounds(){this.clickSound&&(this.clickSound.pause(),this.clickSound.currentTime=0),this.enterSound&&(this.enterSound.pause(),this.enterSound.currentTime=0)}setVolume(e){const i=Math.max(0,Math.min(1,e));this.clickSound&&(this.clickSound.volume=i*.7),this.enterSound&&(this.enterSound.volume=i*.8)}}const p_=Os.getInstance();function gx(){const s=q.useCallback(()=>{p_.playClickSound()},[]),e=q.useCallback(()=>{p_.playEnterSound()},[]);return{playClickSound:s,playEnterSound:e}}function hR(){const s=q.useRef(null),e=q.useRef(null),i=q.useRef(null),a=q.useRef(null),l=q.useRef(null),c=q.useRef(null),f=q.useRef(null),d=q.useRef(null),[p,m]=q.useState(!1),[g,v]=q.useState(!1),[y,E]=q.useState(!1),[b,A]=q.useState(!1),x=sl(),{playClickSound:_,playEnterSound:O}=gx(),P=q.useCallback(()=>{c.current&&f.current&&(c.current.visible=!0,f.current.visible=!0,c.current.position.set(-2.2,0,0),f.current.position.set(2.2,0,0),E(!0))},[]),R=q.useCallback(()=>{if(g)return;v(!0);const z=document.getElementById("warp");z&&z.classList.add("show");const K=setInterval(()=>{a.current&&(a.current.position.z=Math.max(2.2,a.current.position.z-.08))},16);setTimeout(()=>{clearInterval(K),window.dispatchEvent(new CustomEvent("INTRO_FINISHED")),x("/home")},1400)},[g,x]),H=q.useCallback(()=>{p||(m(!0),O(),document.body.classList.add("leaving"),setTimeout(()=>{const z=document.getElementById("hero");z&&(z.style.display="none"),P()},220))},[p,O,P]);q.useEffect(()=>{if(!s.current)return;const z=s.current,K=new mx({canvas:z,antialias:!0,powerPreference:"high-performance"});K.setPixelRatio(Math.min(window.devicePixelRatio,2)),K.setSize(window.innerWidth,window.innerHeight),K.setClearColor(0,1),i.current=K;const U=new nx;e.current=U;const L=new si(60,window.innerWidth/window.innerHeight,.1,1e3);L.position.set(0,0,6),a.current=L;const Y=420,re=new Float32Array(Y*3);for(let T=0;T<Y;T++){const I=2.6+Math.random()*1.8,te=Math.random()*Math.PI*2,le=Math.acos(2*Math.random()-1);re[T*3+0]=I*Math.sin(le)*Math.cos(te),re[T*3+1]=I*Math.sin(le)*Math.sin(te),re[T*3+2]=I*Math.cos(le)}const ce=new Ci;ce.setAttribute("position",new Zn(re,3));const xe=new xp({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1}),ue=new ix(ce,xe);U.add(ue),l.current=ue;const F=new cx(65520,.08);U.add(F);const Q=new pu(.5,48,48),J=new ou({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),W=new ou({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),N=new oi(Q,J),M=new oi(Q,W);N.visible=!1,M.visible=!1,U.add(N),U.add(M),c.current=N,f.current=M;const k=new lx(65520,.7);k.position.set(-2,2,4),U.add(k);let ee=0;const oe=()=>{if(ee+=.016,l.current){l.current.rotation.y+=9e-4,l.current.rotation.x=Math.sin(ee*.12)*.02;const T=1+Math.sin(ee*.5)*.005;l.current.scale.set(T,T,T)}K.render(U,L),d.current=requestAnimationFrame(oe)};oe();const se=()=>{a.current&&i.current&&(a.current.aspect=window.innerWidth/window.innerHeight,a.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",se),()=>{d.current&&cancelAnimationFrame(d.current),window.removeEventListener("resize",se),i.current&&i.current.dispose()}},[]),q.useEffect(()=>{if(!y||!c.current||!f.current)return;let z;const K=()=>{c.current&&f.current&&(c.current.rotation.y+=.03,f.current.rotation.y-=.03,c.current.position.x+=.06,f.current.position.x-=.06,c.current.position.y=Math.sin((c.current.position.x+2)*1.2)*.06,f.current.position.y=Math.sin((2-f.current.position.x)*1.2)*.06,!b&&Math.abs(c.current.position.x-f.current.position.x)<.15&&(A(!0),X(),setTimeout(()=>{R()},120))),z=requestAnimationFrame(K)};return K(),()=>{z&&cancelAnimationFrame(z)}},[y,b,R]);const X=()=>{const z=document.getElementById("flash");z&&(z.classList.remove("show"),z.offsetWidth,z.classList.add("show"))};return q.useEffect(()=>{const z=()=>{_()};return document.addEventListener("click",z),()=>{document.removeEventListener("click",z)}},[_]),q.useEffect(()=>{const z=K=>{K.key==="Enter"&&H()};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[p,H]),B.jsxs("div",{className:"intro-page",children:[B.jsx("canvas",{ref:s,id:"stage"}),B.jsx("div",{className:"sweep"}),B.jsx("div",{className:"vignette"}),B.jsx("div",{className:"center",children:B.jsxs("div",{className:`hero ${p?"leaving":""}`,id:"hero",children:[B.jsx("div",{className:"logo",children:"心战五子棋"}),B.jsx("div",{className:"subtitle",children:"Mind Battle Gobang"}),B.jsx("div",{className:"cta",children:B.jsx("button",{className:"btn",id:"enter",onClick:H,children:"进入棋局"})})]})}),B.jsx("div",{className:`warp ${g?"show":""}`,id:"warp"}),B.jsx("div",{className:"flash",id:"flash"}),B.jsx("style",{children:`
        .intro-page {
          position: fixed;
          inset: 0;
          background: #000;
          overflow: hidden;
          font-family:
            Inter,
            system-ui,
            Segoe UI,
            Roboto,
            Helvetica,
            Arial,
            PingFang SC,
            Hiragino Sans GB,
            Microsoft YaHei,
            sans-serif;
        }

        :root {
          --neon: #00fff0;
          --text: #e8ffff;
        }

        #stage {
          position: fixed;
          inset: 0;
          display: block;
        }

        .center {
          position: fixed;
          inset: 0;
          display: grid;
          place-items: center;
          pointer-events: none;
        }

        .hero {
          pointer-events: auto;
          text-align: center;
          opacity: 0;
          transform: translateY(16px);
          animation: in 0.9s ease 0.9s both;
        }

        .hero.leaving {
          opacity: 0;
          transform: scale(0.94) translateY(8px);
          transition: all 0.35s ease;
        }

        @keyframes in {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .logo {
          font-size: clamp(32px, 8vw, 88px);
          font-weight: 800;
          letter-spacing: 0.5px;
          line-height: 1.02;
          color: var(--text);
          filter: drop-shadow(0 8px 30px rgba(0, 255, 240, 0.2));
        }

        .subtitle {
          margin-top: 8px;
          color: #9af7ff;
          letter-spacing: 0.14em;
          font-weight: 600;
        }

        .cta {
          margin-top: 28px;
        }

        .btn {
          border: 1px solid rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.06);
          color: var(--text);
          padding: 12px 22px;
          border-radius: 14px;
          cursor: pointer;
          backdrop-filter: blur(12px);
          transition:
            transform 0.2s ease,
            background 0.2s ease;
        }

        .btn:hover {
          transform: translateY(-2px);
          background: rgba(255, 255, 255, 0.12);
        }

        .sweep {
          position: fixed;
          inset: 0;
          pointer-events: none;
          mix-blend-mode: screen;
          background: linear-gradient(
            100deg,
            rgba(0, 255, 240, 0) 0%,
            rgba(0, 255, 240, 0.35) 50%,
            rgba(0, 255, 240, 0) 100%
          );
          transform: translateX(-120%);
          filter: blur(2px) drop-shadow(0 0 30px var(--neon));
          animation: sweep 3.6s cubic-bezier(0.65, 0.02, 0.22, 1) 0.6s both;
        }

        @keyframes sweep {
          to {
            transform: translateX(120%);
          }
        }

        .vignette {
          position: fixed;
          inset: 0;
          background: radial-gradient(60% 60% at 50% 50%, rgba(0, 255, 240, 0.1), transparent 60%);
          pointer-events: none;
          mix-blend-mode: screen;
          opacity: 0.6;
        }

        .warp {
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0;
        }

        .warp::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(0, 255, 240, 0.55) 0%,
            rgba(0, 0, 0, 0) 40%,
            rgba(0, 0, 0, 0.95) 80%
          );
          transform: scale(0.2);
          filter: blur(10px);
          opacity: 0;
          transition:
            transform 1s cubic-bezier(0.2, 0.7, 0.1, 1),
            opacity 1s ease;
        }

        .warp.show {
          opacity: 1;
        }

        .warp.show::before {
          transform: scale(3.8);
          opacity: 1;
        }

        .flash {
          position: fixed;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(255, 255, 255, 0.95),
            rgba(255, 255, 255, 0) 60%
          );
          opacity: 0;
          mix-blend-mode: screen;
        }

        .flash.show {
          animation: flash 0.22s ease-out forwards;
        }

        @keyframes flash {
          0% {
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        .hud {
          position: fixed;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          color: #79efff;
          font-size: 12px;
          opacity: 0.7;
        }
      `})]})}var je=(s=>(s[s.None=0]="None",s[s.Black=1]="Black",s[s.White=2]="White",s))(je||{}),ft=(s=>(s.NotStarted="not_started",s.Playing="playing",s.BlackWin="black_win",s.WhiteWin="white_win",s.Draw="draw",s.Paused="paused",s))(ft||{}),bt=(s=>(s.Easy="easy",s.Medium="medium",s.Hard="hard",s.Master="master",s))(bt||{});function pR({onEnter:s,className:e=""}){const i=q.useRef(null),a=q.useRef(null),l=q.useRef(null),c=q.useRef(null),f=q.useRef(null),d=q.useRef(!1),p=q.useRef(!1),m=q.useRef(0),[g,v]=q.useState(!1),[y,E]=q.useState(!1),[b,A]=q.useState(!1);return q.useEffect(()=>{if(!i.current)return;const x=i.current,_=new mx({canvas:x,antialias:!0,powerPreference:"high-performance"});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,1),l.current=_;const O=new nx;a.current=O;const P=new si(60,window.innerWidth/window.innerHeight,.1,1e3);P.position.set(0,0,6),c.current=P;const R=420,H=new Float32Array(R*3),X=new Float32Array(R*3),z=new Float32Array(R);for(let se=0;se<R;se++){const T=2.6+Math.random()*1.8,I=Math.random()*Math.PI*2,te=Math.acos(2*Math.random()-1);H[se*3+0]=T*Math.sin(te)*Math.cos(I),H[se*3+1]=T*Math.sin(te)*Math.sin(I),H[se*3+2]=T*Math.cos(te);const le=.7+Math.random()*.3;X[se*3+0]=0*le,X[se*3+1]=1*le,X[se*3+2]=.94*le,z[se]=.025+Math.random()*.02}const K=new Ci;K.setAttribute("position",new Zn(H,3)),K.setAttribute("color",new Zn(X,3)),K.setAttribute("size",new Zn(z,1));const U=new xp({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,vertexColors:!0,blending:hh}),L=new ix(K,U);O.add(L);const Y=new cx(65520,.08);O.add(Y);const re=new pu(.5,48,48),ce=new ou({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),xe=new ou({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),ue=new oi(re,ce),F=new oi(re,xe);ue.visible=!1,F.visible=!1,O.add(ue),O.add(F);const Q=new lx(65520,.7);Q.position.set(-2,2,4),O.add(Q);const J=()=>{m.current+=.016,L.rotation.y+=9e-4,L.rotation.x=Math.sin(m.current*.12)*.02,L.rotation.z=Math.sin(m.current*.08)*.01;const se=1+Math.sin(m.current*.5)*.005;L.scale.set(se,se,se);const T=.75+Math.sin(m.current*.3)*.1;U.opacity=Math.max(.6,Math.min(.9,T)),d.current&&(ue.rotation.y+=.03,F.rotation.y-=.03,ue.position.x+=.06,F.position.x-=.06,ue.position.y=Math.sin((ue.position.x+2)*1.2)*.06,F.position.y=Math.sin((2-F.position.x)*1.2)*.06,!p.current&&Math.abs(ue.position.x-F.position.x)<.15&&(p.current=!0,E(!0),setTimeout(()=>E(!1),220),setTimeout(()=>{A(!0),N()},120))),_.render(O,P),f.current=requestAnimationFrame(J)};J();const W=()=>{ue.visible=!0,F.visible=!0,ue.position.set(-2.2,0,0),F.position.set(2.2,0,0),d.current=!0},N=()=>{const se=setInterval(()=>{c.current&&(c.current.position.z=Math.max(2.2,c.current.position.z-.08))},16);setTimeout(()=>{clearInterval(se),s?.()},1100)},M=()=>{v(!0),setTimeout(()=>v(!1),3600)},k=()=>{W()},ee=()=>{N()};setTimeout(()=>{M()},600),window.addEventListener("INTRO_ENTER",k),window.addEventListener("startWarp",ee);const oe=()=>{c.current&&l.current&&(c.current.aspect=window.innerWidth/window.innerHeight,c.current.updateProjectionMatrix(),l.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",oe),()=>{f.current&&cancelAnimationFrame(f.current),l.current&&l.current.dispose(),window.removeEventListener("INTRO_ENTER",k),window.removeEventListener("startWarp",ee),window.removeEventListener("resize",oe)}},[s]),B.jsxs(B.Fragment,{children:[B.jsx("canvas",{ref:i,className:`fixed inset-0 pointer-events-none ${e}`,style:{zIndex:-1}}),g&&B.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"linear-gradient(100deg, rgba(0,255,240,0) 0%, rgba(0,255,240,0.35) 50%, rgba(0,255,240,0) 100%)",transform:"translateX(-120%)",filter:"blur(2px) drop-shadow(0 0 30px #00FFF0)",animation:"sweep 3.6s cubic-bezier(0.65,0.02,0.22,1) 0.6s both",zIndex:1}}),B.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen opacity-60",style:{background:"radial-gradient(60% 60% at 50% 50%, rgba(0,255,240,0.10), transparent 60%)",zIndex:1}}),y&&B.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(255,255,255,0) 60%)",animation:"flash 0.22s ease-out forwards",zIndex:2}}),b&&B.jsx("div",{className:"fixed inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 50%, rgba(0,255,240,0.55) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.95) 80%)",transform:"scale(0.2)",filter:"blur(10px)",opacity:0,transition:"transform 1s cubic-bezier(0.2,0.7,0.1,1), opacity 1s ease",zIndex:3},onTransitionEnd:()=>{const x=document.querySelector("[data-warp-effect]");x&&(x.style.transform="scale(3.8)",x.style.opacity="1")},"data-warp-effect":!0}),B.jsx("style",{children:`
        @keyframes sweep {
          to {
            transform: translateX(120%);
          }
        }
        
        @keyframes flash {
          0% { opacity: 0; }
          20% { opacity: 1; }
          100% { opacity: 0; }
        }
      `})]})}function mR(){const s=q.useRef(null),e=q.useRef(null);return q.useEffect(()=>{const i=()=>{s.current&&(s.current.classList.remove("show"),s.current.offsetWidth,s.current.classList.add("show"))},a=()=>{e.current&&e.current.classList.add("show")};return window.addEventListener("triggerFlash",i),window.addEventListener("startWarp",a),()=>{window.removeEventListener("triggerFlash",i),window.removeEventListener("startWarp",a)}},[]),B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"sweep"}),B.jsx("div",{className:"vignette"}),B.jsx("div",{ref:e,className:"warp"}),B.jsx("div",{ref:s,className:"flash"})]})}function gR(){const s=sl(),[e,i]=q.useState(bt.Easy),{playClickSound:a}=gx();q.useEffect(()=>{const d=()=>{a()};return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[a]);const l=()=>{if(!e){alert("请先选择难度！");return}window.dispatchEvent(new CustomEvent("INTRO_ENTER"))},c=d=>{i(d)},f=()=>{s("/game",{state:{difficulty:e}})};return B.jsxs("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center p-4 overflow-hidden relative",children:[B.jsx(pR,{onEnter:f}),B.jsx(mR,{}),B.jsxs("div",{className:"relative z-10 max-w-2xl w-full",children:[B.jsxs("div",{className:"text-center mb-8 sm:mb-12 lg:mb-16 animate-slideDown",children:[B.jsx("div",{className:"inline-block mb-4 sm:mb-6",children:B.jsx("div",{className:"text-6xl sm:text-7xl lg:text-8xl mb-2 sm:mb-4 animate-float",children:"⚫⚪"})}),B.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight px-4",children:"心战五子棋"}),B.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-300 font-light px-4",children:"落子，攻心"})]}),B.jsxs("div",{className:"glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 animate-scaleIn",children:[B.jsxs("div",{className:"mb-6 sm:mb-8",children:[B.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-white",children:"选择难度"}),B.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-3",children:[B.jsx(ch,{level:"简单",emoji:"😊",difficulty:bt.Easy,selected:e===bt.Easy,onClick:()=>c(bt.Easy)}),B.jsx(ch,{level:"中等",emoji:"🤔",difficulty:bt.Medium,selected:e===bt.Medium,onClick:()=>c(bt.Medium)}),B.jsx(ch,{level:"困难",emoji:"😈",difficulty:bt.Hard,selected:e===bt.Hard,onClick:()=>c(bt.Hard)})]})]}),B.jsx("button",{onClick:l,className:`
              w-full py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl lg:text-2xl
              transition-all duration-300 transform
              ${e?"bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/50 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}
            `,disabled:!e,children:e?"🎮 开始对弈":"👆 请先选择难度"}),e!==null&&B.jsx("p",{className:"text-center mt-4 text-sm text-gray-400 animate-fadeIn",children:vR(e)})]}),B.jsx("div",{className:"mt-6 sm:mt-8 text-center px-4",children:B.jsx("p",{className:"text-gray-500 text-xs sm:text-sm",children:"每一步棋后，AI 都会预测你的意图 · 你能骗过它吗？"})})]})]})}function ch({level:s,emoji:e,selected:i,onClick:a}){return B.jsxs("button",{onClick:a,className:`
        relative p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-2 transition-all duration-300 transform
        ${i?"border-neon-cyan bg-neon-cyan/10 scale-105 shadow-lg shadow-neon-cyan/50":"border-gray-700 bg-space-dark hover:border-gray-500 hover:scale-105"}
      `,children:[B.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2",children:e}),B.jsx("div",{className:`font-bold text-sm sm:text-base ${i?"text-neon-cyan":"text-gray-300"}`,children:s}),i&&B.jsx("div",{className:"absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-neon-cyan rounded-full flex items-center justify-center animate-scaleIn",children:B.jsx("span",{className:"text-white text-xs sm:text-sm",children:"✓"})})]})}function vR(s){return{[bt.Easy]:"AI 会告诉你它的真实想法，适合入门",[bt.Medium]:"AI 偶尔会误导你，需要保持警惕",[bt.Hard]:"AI 会设置心理陷阱，极具挑战",[bt.Master]:"AI 心理战大师，预测准确率成谜"}[s]||""}const et=15,Ko=5,_R=3,Bs=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],zs=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],vx=[{row:3,col:3},{row:3,col:11},{row:7,col:7},{row:11,col:3},{row:11,col:11}],_x=[{dr:0,dc:1},{dr:1,dc:0},{dr:1,dc:1},{dr:1,dc:-1}],xR={easy:500,medium:1500,hard:2e3,master:2e3},Qa={FIVE:1e5,LIVE_FOUR:1e4,SLEEP_FOUR:1e3,LIVE_THREE:100,SLEEP_THREE:10,LIVE_TWO:10,SLEEP_TWO:1};function yR(){const s=navigator.userAgent,e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,i=window.innerWidth<=768,a="ontouchstart"in window||navigator.maxTouchPoints>0;return e.test(s)||i&&a}function SR({board:s,onCellClick:e,winningLine:i,lastMove:a,disabled:l=!1,predictedPositions:c=[]}){const f=q.useRef(null),[d,p]=q.useState(null),[m,g]=q.useState(40),[v,y]=q.useState(630),E=()=>{const W=window.innerWidth;return W<640?Math.min(32,(W-80)/et):W<1024?35:40},b=m,A=b*1.2,x=v;q.useEffect(()=>{const W=()=>{const N=E(),M=N*1.2;g(N),y(et*N+M*2)};return W(),window.addEventListener("resize",W),()=>window.removeEventListener("resize",W)},[]),q.useEffect(()=>{_()},[s,i,a,d,c,v,m]);const _=()=>{const W=f.current;if(!W)return;const N=W.getContext("2d");N&&(N.clearRect(0,0,x,x),O(N),P(N),R(N),H(N),X(N),a&&K(N,a),i&&U(N,i),c.length>0&&Y(N,c),d&&!l&&re(N,d))},O=W=>{W.fillStyle="#1a1e37",W.fillRect(0,0,x,x),W.strokeStyle="#a855f7",W.lineWidth=2,W.strokeRect(A-10,A-10,et*b+20,et*b+20)},P=W=>{W.strokeStyle="#4a5568",W.lineWidth=1;for(let N=0;N<et;N++){const M=A+N*b;W.beginPath(),W.moveTo(A,M),W.lineTo(A+(et-1)*b,M),W.stroke()}for(let N=0;N<et;N++){const M=A+N*b;W.beginPath(),W.moveTo(M,A),W.lineTo(M,A+(et-1)*b),W.stroke()}},R=W=>{W.fillStyle="#a855f7";for(const N of vx){const M=A+N.col*b,k=A+N.row*b;W.beginPath(),W.arc(M,k,4,0,Math.PI*2),W.fill()}},H=W=>{const N=window.innerWidth;let M=12;N<640?M=10:N<1024?M=11:M=12,W.fillStyle="#9ca3af",W.font=`${M}px monospace`,W.textAlign="center",W.textBaseline="middle";const k=A-25,ee=A+et*b+20,oe=A-20,se=A+et*b+15;for(let T=0;T<et;T++){const I=A+T*b;W.fillText(Bs[T],I,k),W.fillText(Bs[T],I,ee)}W.textAlign="right";for(let T=0;T<et;T++){const I=A+T*b;W.fillText(zs[T],oe,I)}W.textAlign="left";for(let T=0;T<et;T++){const I=A+T*b;W.fillText(zs[T],se,I)}},X=W=>{for(let N=0;N<et;N++)for(let M=0;M<et;M++){const k=s[N][M];k!==je.None&&z(W,{row:N,col:M},k)}},z=(W,N,M)=>{const k=A+N.col*b,ee=A+N.row*b,oe=b*.4;if(W.shadowColor="rgba(0, 0, 0, 0.5)",W.shadowBlur=8,W.shadowOffsetX=2,W.shadowOffsetY=2,W.beginPath(),W.arc(k,ee,oe,0,Math.PI*2),M===je.Black){const se=W.createRadialGradient(k-5,ee-5,0,k,ee,oe);se.addColorStop(0,"#2a2a2a"),se.addColorStop(1,"#0a0a0a"),W.fillStyle=se}else{const se=W.createRadialGradient(k-5,ee-5,0,k,ee,oe);se.addColorStop(0,"#ffffff"),se.addColorStop(1,"#e5e5e5"),W.fillStyle=se}W.fill(),W.shadowColor="transparent",W.shadowBlur=0,W.shadowOffsetX=0,W.shadowOffsetY=0},K=(W,N)=>{const M=A+N.col*b,k=A+N.row*b;W.strokeStyle="#06b6d4",W.lineWidth=3,W.beginPath(),W.arc(M,k,b*.2,0,Math.PI*2),W.stroke()},U=(W,N)=>{if(N.positions.length<2)return;const M=N.positions[0],k=N.positions[N.positions.length-1],ee=A+M.col*b,oe=A+M.row*b,se=A+k.col*b,T=A+k.row*b;W.strokeStyle="#a855f7",W.lineWidth=5,W.lineCap="round",W.shadowColor="#a855f7",W.shadowBlur=15,W.beginPath(),W.moveTo(ee,oe),W.lineTo(se,T),W.stroke(),W.shadowColor="transparent",W.shadowBlur=0},L=W=>{if(W.length<2)return null;const N=Bs.indexOf(W[0].toUpperCase()),M=W.substring(1),k=zs.indexOf(M);return N===-1||k===-1?null:{row:k,col:N}},Y=(W,N)=>{N.forEach((M,k)=>{const ee=L(M);if(!ee||s[ee.row][ee.col]!==je.None)return;const oe=A+ee.col*b,se=A+ee.row*b,T="#06b6d4",I=b*.15;W.save(),W.fillStyle=`${T}50`,W.beginPath(),W.arc(oe,se,I*1.4,0,Math.PI*2),W.fill(),W.shadowColor=T,W.shadowBlur=20,W.fillStyle=T,W.strokeStyle=T,W.lineWidth=2;const te=8,le=I,Ee=I*.5;W.beginPath();for(let Ce=0;Ce<te*2;Ce++){const We=Math.PI*Ce/te-Math.PI/2,V=Ce%2===0?le:Ee,Ie=oe+Math.cos(We)*V,Be=se+Math.sin(We)*V;Ce===0?W.moveTo(Ie,Be):W.lineTo(Ie,Be)}W.closePath(),W.fill(),W.shadowBlur=2,W.shadowColor="rgba(0, 0, 0, 0.9)",W.fillStyle="#ffffff",W.font="bold 13px Arial",W.textAlign="center",W.textBaseline="middle",W.fillText((k+1).toString(),oe,se),W.restore()})},re=(W,N)=>{if(s[N.row][N.col]!==je.None)return;const M=A+N.col*b,k=A+N.row*b,ee=b*.4;W.fillStyle="rgba(6, 182, 212, 0.3)",W.beginPath(),W.arc(M,k,ee,0,Math.PI*2),W.fill()},ce=W=>{if(l){p(null);return}const N=f.current;if(!N)return;const M=N.getBoundingClientRect(),k=W.clientX-M.left,ee=W.clientY-M.top,oe=Math.round((k-A)/b),se=Math.round((ee-A)/b);se>=0&&se<et&&oe>=0&&oe<et?p({row:se,col:oe}):p(null)},xe=()=>{p(null)},ue=W=>{if(l||!e)return;const N=f.current;if(!N)return;const M=N.getBoundingClientRect(),k=W.clientX-M.left,ee=W.clientY-M.top,oe=Math.round((k-A)/b),se=Math.round((ee-A)/b);se>=0&&se<et&&oe>=0&&oe<et&&s[se][oe]===je.None&&e({row:se,col:oe})},F=W=>{if(l||!e)return;W.preventDefault();const N=f.current;if(!N)return;const M=W.touches[0],k=N.getBoundingClientRect(),ee=M.clientX-k.left,oe=M.clientY-k.top,se=Math.round((ee-A)/b),T=Math.round((oe-A)/b);T>=0&&T<et&&se>=0&&se<et&&(p({row:T,col:se}),s[T][se]===je.None&&e({row:T,col:se}))},Q=W=>{if(l)return;W.preventDefault();const N=f.current;if(!N)return;const M=W.touches[0],k=N.getBoundingClientRect(),ee=M.clientX-k.left,oe=M.clientY-k.top,se=Math.round((ee-A)/b),T=Math.round((oe-A)/b);T>=0&&T<et&&se>=0&&se<et?p({row:T,col:se}):p(null)},J=()=>{p(null)};return B.jsx("canvas",{ref:f,width:x,height:x,className:`rounded-lg ${l?"cursor-not-allowed opacity-75":"cursor-pointer"} max-w-full`,onClick:ue,onMouseMove:ce,onMouseLeave:xe,onTouchStart:F,onTouchMove:Q,onTouchEnd:J,style:{touchAction:"none"}})}function uh(s,e=30,i=!0){const[a,l]=q.useState(""),[c,f]=q.useState(!1),d=q.useRef(null),p=q.useRef(0);return q.useEffect(()=>{if(!i){l(s),f(!0);return}if(l(""),f(!1),p.current=0,d.current&&clearTimeout(d.current),!s){f(!0);return}const g=()=>{p.current<s.length?(l(s.substring(0,p.current+1)),p.current++,d.current=window.setTimeout(g,e)):f(!0)};return g(),()=>{d.current&&clearTimeout(d.current)}},[s,e,i]),{displayedText:a,isComplete:c,skip:()=>{d.current&&clearTimeout(d.current),l(s),f(!0),p.current=s.length}}}function xx({prediction:s,isAnalyzing:e,isStreaming:i=!1,streamingText:a=""}){const l=uh(s?.playerIntent||"",30,!e&&!i),c=uh(s?.psychologicalHint||"",25,!e&&!i),f=uh(s?.aiSuggestion||"",30,!e&&!i);if(!s&&!e)return B.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-gray-700",children:B.jsxs("div",{className:"text-center text-gray-400",children:[B.jsx("div",{className:"text-4xl mb-3",children:"🧠"}),B.jsx("div",{className:"text-sm font-semibold",children:"下一步棋后"}),B.jsx("div",{className:"text-sm",children:"AI 将分析你的心理"})]})});if(e)return B.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-neon-cyan animate-pulse",children:B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-4xl mb-3 animate-bounce",children:"🤔"}),B.jsx("div",{className:"text-neon-cyan font-semibold mb-2",children:i?"AI 正在思考...":"AI 正在分析..."}),B.jsx("div",{className:"text-sm text-gray-400",children:i?"实时生成分析中":"读取你的心理中"}),B.jsxs("div",{className:"mt-4 flex justify-center gap-1",children:[B.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),B.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-ping",style:{animationDelay:"0.2s"}}),B.jsx("div",{className:"w-2 h-2 bg-neon-pink rounded-full animate-ping",style:{animationDelay:"0.4s"}})]}),i&&a&&B.jsxs("div",{className:"mt-4 p-3 bg-space-dark rounded-lg border border-gray-700 text-left",children:[B.jsx("div",{className:"text-xs text-gray-400 mb-1",children:"💭 实时分析"}),B.jsxs("div",{className:"text-sm text-white",children:[a,B.jsx("span",{className:"animate-pulse",children:"|"})]})]})]})});if(!s)return null;const d=()=>B.jsxs("div",{className:"flex gap-1",children:[B.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce"}),B.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),B.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]});return B.jsxs("div",{className:"glass-effect rounded-xl p-6 space-y-4 animate-fadeIn border-2 border-neon-purple shadow-lg shadow-neon-purple/20",children:[B.jsxs("div",{className:"flex items-center justify-between border-b border-gray-700 pb-3",children:[B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("span",{className:"text-2xl animate-pulse",children:"🧠"}),B.jsx("span",{className:"text-lg font-bold text-white",children:"心理分析"})]}),s.isMisleading&&B.jsx("div",{className:"text-xs px-2 py-1 bg-red-500/20 border border-red-500 rounded text-red-400 animate-pulse",children:"⚠️ 可能误导"})]}),B.jsxs("div",{className:"p-3 bg-neon-purple/10 border border-neon-purple rounded-lg",children:[B.jsxs("div",{className:"flex items-center justify-between mb-1",children:[B.jsx("div",{className:"text-xs text-gray-400",children:"🎭 心理战"}),s.hintLoading&&B.jsx(d,{})]}),s.psychologicalHint?B.jsxs("div",{className:"text-sm text-neon-purple",children:[c.displayedText,!c.isComplete&&B.jsx("span",{className:"animate-pulse",children:"|"})]}):B.jsx("div",{className:"text-sm text-gray-500",children:"等待AI调侃中..."})]}),B.jsxs("div",{children:[B.jsxs("div",{className:"flex items-center justify-between mb-2",children:[B.jsx("div",{className:"text-xs text-gray-400",children:"🎯 AI 猜测你的意图"}),s.intentLoading&&B.jsx(d,{})]}),B.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:s.playerIntent?B.jsxs(B.Fragment,{children:[B.jsxs("div",{className:"text-sm text-white",children:[l.displayedText,!l.isComplete&&B.jsx("span",{className:"animate-pulse",children:"|"})]}),B.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[B.jsx("div",{className:"text-xs text-gray-500",children:"置信度:"}),B.jsx("div",{className:"flex-1 h-2 bg-gray-700 rounded-full overflow-hidden",children:B.jsx("div",{className:"h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-500",style:{width:`${s.confidence*100}%`}})}),B.jsxs("div",{className:"text-xs text-neon-cyan font-bold",children:[Math.round(s.confidence*100),"%"]})]})]}):B.jsx("div",{className:"text-sm text-gray-500",children:"AI正在分析你的意图..."})})]}),B.jsxs("div",{children:[B.jsxs("div",{className:"flex items-center justify-between mb-2",children:[B.jsx("div",{className:"text-xs text-gray-400",children:"🔮 AI 预测你接下来会"}),s.movesLoading&&B.jsx(d,{})]}),s.predictedMoves.length>0?B.jsx("div",{className:"space-y-2",children:s.predictedMoves.slice(0,3).map((p,m)=>B.jsx("div",{className:"p-2 bg-space-dark rounded border border-gray-700 hover:border-neon-cyan transition-colors",children:B.jsxs("div",{className:"flex items-start gap-2",children:[B.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center text-xs text-neon-cyan font-bold",children:m+1}),B.jsxs("div",{className:"flex-1",children:[B.jsx("div",{className:"text-sm text-white font-semibold",children:p.position}),B.jsx("div",{className:"text-xs text-gray-400 mt-0.5",children:p.reason})]})]})},m))}):B.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:B.jsx("div",{className:"text-sm text-gray-500",children:"AI正在预测你的后续走法..."})})]}),B.jsxs("div",{className:"pt-3 border-t border-gray-700",children:[B.jsxs("div",{className:"flex items-center justify-between mb-2",children:[B.jsxs("div",{className:"text-xs text-gray-400",children:["💡 AI ",s.isMisleading?"故意":"真诚","建议"]}),s.suggestionLoading&&B.jsx(d,{})]}),s.aiSuggestion?B.jsx("div",{className:`p-3 rounded-lg border ${s.isMisleading?"bg-red-500/10 border-red-500/50 text-red-300":"bg-green-500/10 border-green-500/50 text-green-300"}`,children:B.jsxs("div",{className:"text-sm",children:[f.displayedText,!f.isComplete&&B.jsx("span",{className:"animate-pulse",children:"|"})]})}):B.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:B.jsx("div",{className:"text-sm text-gray-500",children:"AI正在思考建议..."})})]})]})}function yx(){const s=q.useRef(null),e=q.useRef([]),i=q.useRef();return q.useEffect(()=>{const a=s.current;if(!a)return;const l=a.getContext("2d");if(!l)return;const c=()=>{a.width=window.innerWidth,a.height=window.innerHeight,f()},f=()=>{const p=Math.floor(a.width*a.height/8e3);e.current=[];for(let m=0;m<p;m++)e.current.push({x:Math.random()*a.width,y:Math.random()*a.height,radius:Math.random()*2+.5,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,opacity:Math.random()*.5+.3})},d=()=>{l.fillStyle="rgba(10, 14, 39, 0.1)",l.fillRect(0,0,a.width,a.height),e.current.forEach(p=>{if(p.x+=p.vx,p.y+=p.vy,(p.x<0||p.x>a.width)&&(p.vx*=-1),(p.y<0||p.y>a.height)&&(p.vy*=-1),p.opacity+=(Math.random()-.5)*.02,p.opacity=Math.max(.1,Math.min(1,p.opacity)),l.beginPath(),l.arc(p.x,p.y,p.radius,0,Math.PI*2),l.fillStyle=`rgba(255, 255, 255, ${p.opacity})`,l.fill(),p.radius>1.5){const m=l.createRadialGradient(p.x,p.y,0,p.x,p.y,p.radius*3);m.addColorStop(0,`rgba(168, 85, 247, ${p.opacity*.3})`),m.addColorStop(.5,`rgba(6, 182, 212, ${p.opacity*.1})`),m.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=m,l.fillRect(p.x-p.radius*3,p.y-p.radius*3,p.radius*6,p.radius*6)}}),i.current=requestAnimationFrame(d)};return c(),d(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),i.current&&cancelAnimationFrame(i.current)}},[]),B.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none",style:{zIndex:0}})}var hl={};(function s(e,i,a,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),f=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;var N=new OffscreenCanvas(1,1),M=N.getContext("2d");M.fillRect(0,0,1,1);var k=N.transferToImageBitmap();try{M.createPattern(k,"no-repeat")}catch{return!1}return!0})();function p(){}function m(N){var M=i.exports.Promise,k=M!==void 0?M:e.Promise;return typeof k=="function"?new k(N):(N(p,p),null)}var g=(function(N,M){return{transform:function(k){if(N)return k;if(M.has(k))return M.get(k);var ee=new OffscreenCanvas(k.width,k.height),oe=ee.getContext("2d");return oe.drawImage(k,0,0),M.set(k,ee),ee},clear:function(){M.clear()}}})(d,new Map),v=(function(){var N=Math.floor(16.666666666666668),M,k,ee={},oe=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(se){var T=Math.random();return ee[T]=requestAnimationFrame(function I(te){oe===te||oe+N-1<te?(oe=te,delete ee[T],se()):ee[T]=requestAnimationFrame(I)}),T},k=function(se){ee[se]&&cancelAnimationFrame(ee[se])}):(M=function(se){return setTimeout(se,N)},k=function(se){return clearTimeout(se)}),{frame:M,cancel:k}})(),y=(function(){var N,M,k={};function ee(oe){function se(T,I){oe.postMessage({options:T||{},callback:I})}oe.init=function(I){var te=I.transferControlToOffscreen();oe.postMessage({canvas:te},[te])},oe.fire=function(I,te,le){if(M)return se(I,null),M;var Ee=Math.random().toString(36).slice(2);return M=m(function(Ce){function We(V){V.data.callback===Ee&&(delete k[Ee],oe.removeEventListener("message",We),M=null,g.clear(),le(),Ce())}oe.addEventListener("message",We),se(I,Ee),k[Ee]=We.bind(null,{data:{callback:Ee}})}),M},oe.reset=function(){oe.postMessage({reset:!0});for(var I in k)k[I](),delete k[I]}}return function(){if(N)return N;if(!a&&c){var oe=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{N=new Worker(URL.createObjectURL(new Blob([oe])))}catch(se){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",se),null}ee(N)}return N}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(N,M){return M?M(N):N}function A(N){return N!=null}function x(N,M,k){return b(N&&A(N[M])?N[M]:E[M],k)}function _(N){return N<0?0:Math.floor(N)}function O(N,M){return Math.floor(Math.random()*(M-N))+N}function P(N){return parseInt(N,16)}function R(N){return N.map(H)}function H(N){var M=String(N).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:P(M.substring(0,2)),g:P(M.substring(2,4)),b:P(M.substring(4,6))}}function X(N){var M=x(N,"origin",Object);return M.x=x(M,"x",Number),M.y=x(M,"y",Number),M}function z(N){N.width=document.documentElement.clientWidth,N.height=document.documentElement.clientHeight}function K(N){var M=N.getBoundingClientRect();N.width=M.width,N.height=M.height}function U(N){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=N,M}function L(N,M,k,ee,oe,se,T,I,te){N.save(),N.translate(M,k),N.rotate(se),N.scale(ee,oe),N.arc(0,0,1,T,I,te),N.restore()}function Y(N){var M=N.angle*(Math.PI/180),k=N.spread*(Math.PI/180);return{x:N.x,y:N.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:N.startVelocity*.5+Math.random()*N.startVelocity,angle2D:-M+(.5*k-Math.random()*k),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:N.color,shape:N.shape,tick:0,totalTicks:N.ticks,decay:N.decay,drift:N.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:N.gravity*3,ovalScalar:.6,scalar:N.scalar,flat:N.flat}}function re(N,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var k=M.tick++/M.totalTicks,ee=M.x+M.random*M.tiltCos,oe=M.y+M.random*M.tiltSin,se=M.wobbleX+M.random*M.tiltCos,T=M.wobbleY+M.random*M.tiltSin;if(N.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-k)+")",N.beginPath(),f&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))N.fill(Q(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(se-ee)*.1,Math.abs(T-oe)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var I=Math.PI/10*M.wobble,te=Math.abs(se-ee)*.1,le=Math.abs(T-oe)*.1,Ee=M.shape.bitmap.width*M.scalar,Ce=M.shape.bitmap.height*M.scalar,We=new DOMMatrix([Math.cos(I)*te,Math.sin(I)*te,-Math.sin(I)*le,Math.cos(I)*le,M.x,M.y]);We.multiplySelf(new DOMMatrix(M.shape.matrix));var V=N.createPattern(g.transform(M.shape.bitmap),"no-repeat");V.setTransform(We),N.globalAlpha=1-k,N.fillStyle=V,N.fillRect(M.x-Ee/2,M.y-Ce/2,Ee,Ce),N.globalAlpha=1}else if(M.shape==="circle")N.ellipse?N.ellipse(M.x,M.y,Math.abs(se-ee)*M.ovalScalar,Math.abs(T-oe)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):L(N,M.x,M.y,Math.abs(se-ee)*M.ovalScalar,Math.abs(T-oe)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var Ie=Math.PI/2*3,Be=4*M.scalar,Ye=8*M.scalar,ze=M.x,ht=M.y,Ve=5,at=Math.PI/Ve;Ve--;)ze=M.x+Math.cos(Ie)*Ye,ht=M.y+Math.sin(Ie)*Ye,N.lineTo(ze,ht),Ie+=at,ze=M.x+Math.cos(Ie)*Be,ht=M.y+Math.sin(Ie)*Be,N.lineTo(ze,ht),Ie+=at;else N.moveTo(Math.floor(M.x),Math.floor(M.y)),N.lineTo(Math.floor(M.wobbleX),Math.floor(oe)),N.lineTo(Math.floor(se),Math.floor(T)),N.lineTo(Math.floor(ee),Math.floor(M.wobbleY));return N.closePath(),N.fill(),M.tick<M.totalTicks}function ce(N,M,k,ee,oe){var se=M.slice(),T=N.getContext("2d"),I,te,le=m(function(Ee){function Ce(){I=te=null,T.clearRect(0,0,ee.width,ee.height),g.clear(),oe(),Ee()}function We(){a&&!(ee.width===l.width&&ee.height===l.height)&&(ee.width=N.width=l.width,ee.height=N.height=l.height),!ee.width&&!ee.height&&(k(N),ee.width=N.width,ee.height=N.height),T.clearRect(0,0,ee.width,ee.height),se=se.filter(function(V){return re(T,V)}),se.length?I=v.frame(We):Ce()}I=v.frame(We),te=Ce});return{addFettis:function(Ee){return se=se.concat(Ee),le},canvas:N,promise:le,reset:function(){I&&v.cancel(I),te&&te()}}}function xe(N,M){var k=!N,ee=!!x(M||{},"resize"),oe=!1,se=x(M,"disableForReducedMotion",Boolean),T=c&&!!x(M||{},"useWorker"),I=T?y():null,te=k?z:K,le=N&&I?!!N.__confetti_initialized:!1,Ee=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Ce;function We(Ie,Be,Ye){for(var ze=x(Ie,"particleCount",_),ht=x(Ie,"angle",Number),Ve=x(Ie,"spread",Number),at=x(Ie,"startVelocity",Number),Yt=x(Ie,"decay",Number),kt=x(Ie,"gravity",Number),G=x(Ie,"drift",Number),w=x(Ie,"colors",R),fe=x(Ie,"ticks",Number),Me=x(Ie,"shapes"),Re=x(Ie,"scalar"),ye=!!x(Ie,"flat"),tt=X(Ie),Le=ze,Qe=[],nt=N.width*tt.x,Ne=N.height*tt.y;Le--;)Qe.push(Y({x:nt,y:Ne,angle:ht,spread:Ve,startVelocity:at,color:w[Le%w.length],shape:Me[O(0,Me.length)],ticks:fe,decay:Yt,gravity:kt,drift:G,scalar:Re,flat:ye}));return Ce?Ce.addFettis(Qe):(Ce=ce(N,Qe,te,Be,Ye),Ce.promise)}function V(Ie){var Be=se||x(Ie,"disableForReducedMotion",Boolean),Ye=x(Ie,"zIndex",Number);if(Be&&Ee)return m(function(at){at()});k&&Ce?N=Ce.canvas:k&&!N&&(N=U(Ye),document.body.appendChild(N)),ee&&!le&&te(N);var ze={width:N.width,height:N.height};I&&!le&&I.init(N),le=!0,I&&(N.__confetti_initialized=!0);function ht(){if(I){var at={getBoundingClientRect:function(){if(!k)return N.getBoundingClientRect()}};te(at),I.postMessage({resize:{width:at.width,height:at.height}});return}ze.width=ze.height=null}function Ve(){Ce=null,ee&&(oe=!1,e.removeEventListener("resize",ht)),k&&N&&(document.body.contains(N)&&document.body.removeChild(N),N=null,le=!1)}return ee&&!oe&&(oe=!0,e.addEventListener("resize",ht,!1)),I?I.fire(Ie,ze,Ve):We(Ie,ze,Ve)}return V.reset=function(){I&&I.reset(),Ce&&Ce.reset()},V}var ue;function F(){return ue||(ue=xe(null,{useWorker:!0,resize:!0})),ue}function Q(N,M,k,ee,oe,se,T){var I=new Path2D(N),te=new Path2D;te.addPath(I,new DOMMatrix(M));var le=new Path2D;return le.addPath(te,new DOMMatrix([Math.cos(T)*oe,Math.sin(T)*oe,-Math.sin(T)*se,Math.cos(T)*se,k,ee])),le}function J(N){if(!f)throw new Error("path confetti are not supported in this browser");var M,k;typeof N=="string"?M=N:(M=N.path,k=N.matrix);var ee=new Path2D(M),oe=document.createElement("canvas"),se=oe.getContext("2d");if(!k){for(var T=1e3,I=T,te=T,le=0,Ee=0,Ce,We,V=0;V<T;V+=2)for(var Ie=0;Ie<T;Ie+=2)se.isPointInPath(ee,V,Ie,"nonzero")&&(I=Math.min(I,V),te=Math.min(te,Ie),le=Math.max(le,V),Ee=Math.max(Ee,Ie));Ce=le-I,We=Ee-te;var Be=10,Ye=Math.min(Be/Ce,Be/We);k=[Ye,0,0,Ye,-Math.round(Ce/2+I)*Ye,-Math.round(We/2+te)*Ye]}return{type:"path",path:M,matrix:k}}function W(N){var M,k=1,ee="#000000",oe='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof N=="string"?M=N:(M=N.text,k="scalar"in N?N.scalar:k,oe="fontFamily"in N?N.fontFamily:oe,ee="color"in N?N.color:ee);var se=10*k,T=""+se+"px "+oe,I=new OffscreenCanvas(se,se),te=I.getContext("2d");te.font=T;var le=te.measureText(M),Ee=Math.ceil(le.actualBoundingBoxRight+le.actualBoundingBoxLeft),Ce=Math.ceil(le.actualBoundingBoxAscent+le.actualBoundingBoxDescent),We=2,V=le.actualBoundingBoxLeft+We,Ie=le.actualBoundingBoxAscent+We;Ee+=We+We,Ce+=We+We,I=new OffscreenCanvas(Ee,Ce),te=I.getContext("2d"),te.font=T,te.fillStyle=ee,te.fillText(M,V,Ie);var Be=1/k;return{type:"bitmap",bitmap:I.transferToImageBitmap(),matrix:[Be,0,0,Be,-Ee*Be/2,-Ce*Be/2]}}i.exports=function(){return F().apply(this,arguments)},i.exports.reset=function(){F().reset()},i.exports.create=xe,i.exports.shapeFromPath=J,i.exports.shapeFromText=W})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),hl,!1);const Qo=hl.exports;hl.exports.create;function Sx({type:s,onComplete:e}){const[i,a]=q.useState(!1),[l,c]=q.useState(null);return q.useEffect(()=>{s&&s!==l&&(c(s),a(!0),s==="miss"&&Qo({particleCount:50,spread:70,origin:{x:.5,y:.85},colors:["#a855f7","#06b6d4","#ec4899"],startVelocity:30,gravity:.8}),setTimeout(()=>{a(!1),e?.()},1e3))},[s,l,e]),!i||!s?null:B.jsx("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:B.jsx("div",{className:`
          flex items-center gap-3 px-6 py-3 rounded-xl
          ${s==="hit"?"bg-neon-purple/30 border-neon-purple":"bg-neon-cyan/30 border-neon-cyan"}
          border-2 backdrop-blur-md
          animate-slideUp shadow-2xl
        `,children:s==="hit"?B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"text-3xl",children:"🎯"}),B.jsx("div",{children:B.jsx("div",{className:"text-lg font-bold text-neon-purple",children:"AI 读懂了你"})})]}):B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"text-3xl",children:"💥"}),B.jsxs("div",{children:[B.jsx("div",{className:"text-lg font-bold text-neon-cyan",children:"打破预测！"}),B.jsx("div",{className:"text-sm text-yellow-400 font-bold",children:"+10 智慧点 ✨"})]})]})})})}function Mx({isVisible:s,isPlayerWin:e}){return q.useEffect(()=>{if(s)if(e){const a=Date.now()+3e3,l=()=>{Qo({particleCount:7,angle:60,spread:55,origin:{x:0},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Qo({particleCount:7,angle:120,spread:55,origin:{x:1},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Date.now()<a&&requestAnimationFrame(l)};l(),setTimeout(()=>{Qo({particleCount:150,spread:120,origin:{y:.6},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]})},500)}else Qo({particleCount:50,spread:70,origin:{y:.6},colors:["#666","#888","#aaa"]})},[s,e]),s?B.jsx("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:B.jsx("div",{className:"text-center animate-scaleIn",children:e?B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"text-9xl mb-4 animate-bounce",children:"🎉"}),B.jsx("div",{className:"text-6xl font-bold text-gradient mb-4",children:"胜利！"}),B.jsx("div",{className:"text-2xl text-neon-cyan",children:"刚走神想别的了，这局不算，重来啊"})]}):B.jsxs(B.Fragment,{children:[B.jsx("div",{className:"text-9xl mb-4",children:"💔"}),B.jsx("div",{className:"text-6xl font-bold text-white mb-4",children:"失败"}),B.jsx("div",{className:"text-2xl text-white",children:"赢了，承让（才怪）"})]})})}):null}class Or{static checkWin(e,i){const a=e[i.row][i.col];if(a===je.None)return null;for(const l of _x){const c=this.checkDirection(e,i,l,a);if(c)return c}return null}static checkDirection(e,i,a,l){const c=[i];let f=1,d=i.row+a.dr,p=i.col+a.dc;for(;this.isInBounds(d,p)&&e[d][p]===l&&f<Ko;)c.push({row:d,col:p}),f++,d+=a.dr,p+=a.dc;for(d=i.row-a.dr,p=i.col-a.dc;this.isInBounds(d,p)&&e[d][p]===l&&f<Ko;)c.unshift({row:d,col:p}),f++,d-=a.dr,p-=a.dc;return f>=Ko?{positions:c.slice(0,Ko),player:l}:null}static isInBounds(e,i){return e>=0&&e<et&&i>=0&&i<et}static isBoardFull(e){for(let i=0;i<et;i++)for(let a=0;a<et;a++)if(e[i][a]===je.None)return!1;return!0}static getLineCount(e,i,a,l){let c=1,f=i.row+a.dr,d=i.col+a.dc;for(;this.isInBounds(f,d)&&e[f][d]===l;)c++,f+=a.dr,d+=a.dc;for(f=i.row-a.dr,d=i.col-a.dc;this.isInBounds(f,d)&&e[f][d]===l;)c++,f-=a.dr,d-=a.dc;return c}}class lu{board;moveHistory;constructor(){this.board=this.createEmptyBoard(),this.moveHistory=[]}createEmptyBoard(){return Array(et).fill(null).map(()=>Array(et).fill(je.None))}getBoard(){return this.board.map(e=>[...e])}getPiece(e){return this.isValidPosition(e)?this.board[e.row][e.col]:je.None}isValidPosition(e){return e.row>=0&&e.row<et&&e.col>=0&&e.col<et}isEmpty(e){return this.getPiece(e)===je.None}placePiece(e,i){return this.isValidPosition(e)?this.isEmpty(e)?i===je.None?(console.error("Invalid player:",i),!1):(this.board[e.row][e.col]=i,this.moveHistory.push({position:e,player:i,timestamp:Date.now()}),!0):(console.error("Position already occupied:",e),!1):(console.error("Invalid position:",e),!1)}undo(){if(this.moveHistory.length===0)return null;const e=this.moveHistory.pop();return this.board[e.position.row][e.position.col]=je.None,e}undoMultiple(e){const i=[];for(let a=0;a<e;a++){const l=this.undo();if(!l)break;i.push(l)}return i.reverse()}getMoveHistory(){return[...this.moveHistory]}getLastMove(){return this.moveHistory.length===0?null:this.moveHistory[this.moveHistory.length-1]}checkWin(e){return Or.checkWin(this.board,e)}isDraw(){return Or.isBoardFull(this.board)}getEmptyPositions(){const e=[];for(let i=0;i<et;i++)for(let a=0;a<et;a++)this.board[i][a]===je.None&&e.push({row:i,col:a});return e}getPieceCount(){return this.moveHistory.length}reset(){this.board=this.createEmptyBoard(),this.moveHistory=[]}clone(){const e=new lu;return e.board=this.board.map(i=>[...i]),e.moveHistory=this.moveHistory.map(i=>({...i})),e}static fromBoard(e,i=[]){const a=new lu;return a.board=e.map(l=>[...l]),a.moveHistory=i.map(l=>({...l})),a}}class MR{board;currentPlayer;status;config;stats;startTime;winningLine;constructor(e=bt.Medium){this.board=new lu,this.currentPlayer=je.Black,this.status=ft.NotStarted,this.winningLine=null,this.startTime=null,this.config={boardSize:et,winCount:Ko,maxUndoCount:_R,difficulty:e},this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}startGame(){this.status!==ft.Playing&&(this.status=ft.Playing,this.startTime=Date.now())}makeMove(e){if(this.status!==ft.Playing||!this.board.placePiece(e,this.currentPlayer))return!1;this.updateStats();const a=this.board.checkWin(e);return a?(this.handleWin(a),!0):this.board.isDraw()?(this.handleDraw(),!0):(this.switchPlayer(),!0)}undo(e=2){if(this.stats.undoCount>=this.config.maxUndoCount)return console.warn("Max undo count reached"),!1;if(this.status!==ft.Playing)return console.warn("Cannot undo when game is not playing"),!1;const i=this.board.undoMultiple(e);if(i.length===0)return!1;this.stats.undoCount++,this.stats.totalMoves-=i.length;for(const a of i)a.player===je.Black?this.stats.blackMoves--:a.player===je.White&&this.stats.whiteMoves--;return i.length%2===1&&this.switchPlayer(),!0}pauseGame(){this.status===ft.Playing&&(this.status=ft.Paused)}resumeGame(){this.status===ft.Paused&&(this.status=ft.Playing)}restartGame(){this.board.reset(),this.currentPlayer=je.Black,this.status=ft.NotStarted,this.winningLine=null,this.startTime=null,this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}resign(){this.status===ft.Playing&&(this.currentPlayer===je.Black?this.status=ft.WhiteWin:this.status=ft.BlackWin,this.updateDuration())}getState(){return{board:this.board.getBoard(),currentPlayer:this.currentPlayer,status:this.status,moves:this.board.getMoveHistory(),winningLine:this.winningLine,config:{...this.config},stats:{...this.stats,duration:this.getCurrentDuration()},startTime:this.startTime}}getBoard(){return this.board}getCurrentPlayer(){return this.currentPlayer}getStatus(){return this.status}getRemainingUndoCount(){return this.config.maxUndoCount-this.stats.undoCount}switchPlayer(){this.currentPlayer=this.currentPlayer===je.Black?je.White:je.Black}handleWin(e){this.winningLine=e,this.status=e.player===je.Black?ft.BlackWin:ft.WhiteWin,this.updateDuration()}handleDraw(){this.status=ft.Draw,this.updateDuration()}updateStats(){this.stats.totalMoves++,this.currentPlayer===je.Black?this.stats.blackMoves++:this.currentPlayer===je.White&&this.stats.whiteMoves++}updateDuration(){this.startTime&&(this.stats.duration=Math.floor((Date.now()-this.startTime)/1e3))}getCurrentDuration(){return this.startTime?this.status===ft.BlackWin||this.status===ft.WhiteWin||this.status===ft.Draw?this.stats.duration:Math.floor((Date.now()-this.startTime)/1e3):0}}class _i{static evaluatePosition(e,i,a){if(e[i.row][i.col]!==je.None)return 0;let l=0;if(e[i.row][i.col]=a,Or.checkWin(e,i))return e[i.row][i.col]=je.None,Qa.FIVE;for(const c of _x){const f=this.analyzeDirection(e,i,c,a);l+=this.getPatternScore(f)}return e[i.row][i.col]=je.None,l+=this.getPositionWeight(i),l}static analyzeDirection(e,i,a,l){const c=Or.getLineCount(e,i,a,l);if(c>=5)return"FIVE";const f=this.isBlocked(e,i,a,l,!0),d=this.isBlocked(e,i,a,l,!1);return c===4?!f&&!d?"LIVE_FOUR":"SLEEP_FOUR":c===3?!f&&!d?"LIVE_THREE":"SLEEP_THREE":c===2&&!f&&!d?"LIVE_TWO":"SLEEP_TWO"}static isBlocked(e,i,a,l,c){const f=c?1:-1;let d=i.row,p=i.col;for(;d>=0&&d<et&&p>=0&&p<et&&e[d][p]===l;)d+=a.dr*f,p+=a.dc*f;return d<0||d>=et||p<0||p>=et?!0:e[d][p]!==je.None}static getPatternScore(e){switch(e){case"FIVE":return Qa.FIVE;case"LIVE_FOUR":return Qa.LIVE_FOUR;case"SLEEP_FOUR":return Qa.SLEEP_FOUR;case"LIVE_THREE":return Qa.LIVE_THREE;case"SLEEP_THREE":return Qa.SLEEP_THREE;case"LIVE_TWO":return Qa.LIVE_TWO;case"SLEEP_TWO":return Qa.SLEEP_TWO;default:return 0}}static getPositionWeight(e){const i=Math.floor(et/2),a=Math.abs(e.row-i)+Math.abs(e.col-i);return Math.max(0,10-a)}static evaluateBoard(e,i){let a=0;const l=i===je.Black?je.White:je.Black;for(let c=0;c<et;c++)for(let f=0;f<et;f++)e[c][f]===i?a+=this.evaluatePosition(e,{row:c,col:f},i):e[c][f]===l&&(a-=this.evaluatePosition(e,{row:c,col:f},l)*.9);return a}static getCandidatePositions(e,i=2){const a=new Set;for(let l=0;l<et;l++)for(let c=0;c<et;c++)if(e[l][c]!==je.None)for(let f=-i;f<=i;f++)for(let d=-i;d<=i;d++){const p=l+f,m=c+d;p>=0&&p<et&&m>=0&&m<et&&e[p][m]===je.None&&a.add(`${p},${m}`)}if(a.size===0){const l=Math.floor(et/2);return[{row:l,col:l}]}return Array.from(a).map(l=>{const[c,f]=l.split(",").map(Number);return{row:c,col:f}})}}class ER{difficulty;player;constructor(e,i=je.White){this.difficulty=e,this.player=i}getNextMove(e){switch(this.difficulty){case bt.Easy:return this.getEasyMove(e);case bt.Medium:return this.getMediumMove(e);case bt.Hard:return this.getHardMove(e);case bt.Master:return this.getMasterMove(e);default:return this.getMediumMove(e)}}getEasyMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.getBestScoredMove(e,3)}getMediumMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.minimax(e,4)}getHardMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.minimax(e,5)}getMasterMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);return l||this.minimax(e,3)}findWinningMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=Or.checkWin(e,l);if(e[l.row][l.col]=je.None,c)return l}return null}findLiveFourMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=_i.evaluatePosition(e,l,i);if(e[l.row][l.col]=je.None,c>=8e3)return l}return null}findDoubleLiveThreeMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=_i.evaluatePosition(e,l,i);if(e[l.row][l.col]=je.None,c>=2e3&&c<8e3)return l}return null}getBestScoredMove(e,i){const a=_i.getCandidatePositions(e,2);if(a.length===0)return null;const l=this.getOpponent();let c=null,f=-1/0;for(const d of a){let p=_i.evaluatePosition(e,d,this.player);if(i>0){e[d.row][d.col]=this.player;const m=this.getOpponentBestScore(e,l,i-1);e[d.row][d.col]=je.None,p-=m*.8}p>f&&(f=p,c=d)}return c}getOpponentBestScore(e,i,a){if(a<=0)return 0;const l=_i.getCandidatePositions(e,2);let c=-1/0;for(const f of l){const d=_i.evaluatePosition(e,f,i);d>c&&(c=d)}return c}minimax(e,i){const a=_i.getCandidatePositions(e,2);if(a.length===0)return null;let l=null,c=-1/0,f=-1/0;const d=1/0;for(const p of a){e[p.row][p.col]=this.player;const m=this.minimaxHelper(e,i-1,f,d,!1);e[p.row][p.col]=je.None,m>c&&(c=m,l=p),f=Math.max(f,m)}return l}minimaxHelper(e,i,a,l,c){if(i===0)return _i.evaluateBoard(e,this.player);const f=_i.getCandidatePositions(e,1),d=c?this.player:this.getOpponent();if(c){let p=-1/0;for(const m of f){if(e[m.row][m.col]=d,Or.checkWin(e,m))return e[m.row][m.col]=je.None,1e5;const g=this.minimaxHelper(e,i-1,a,l,!1);if(e[m.row][m.col]=je.None,p=Math.max(p,g),a=Math.max(a,g),l<=a)break}return p}else{let p=1/0;for(const m of f){if(e[m.row][m.col]=d,Or.checkWin(e,m))return e[m.row][m.col]=je.None,-1e5;const g=this.minimaxHelper(e,i-1,a,l,!0);if(e[m.row][m.col]=je.None,p=Math.min(p,g),l=Math.min(l,g),l<=a)break}return p}}getOpponent(){return this.player===je.Black?je.White:je.Black}setDifficulty(e){this.difficulty=e}getDifficulty(){return this.difficulty}}class bR{apiKey;apiUrl;model;constructor(){this.apiKey="sk-rdbarmfrezgegwhmqtjeudoimigauytrmuychqcgjysjtjua",this.apiUrl="https://api.siliconflow.cn/v1",this.model="deepseek-ai/DeepSeek-V3",this.apiKey}async chat(e,i=.7,a=500,l){try{const c={model:this.model,messages:e,temperature:i,max_tokens:a},f=await fetch(`${this.apiUrl}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(c),signal:l?.signal});if(!f.ok)throw new Error(`API请求失败: ${f.status} ${f.statusText}`);const d=await f.json();if(!d.choices||d.choices.length===0)throw new Error("API返回数据格式错误");return d.choices[0].message.content}catch{return this.getMockResponse()}}async chatStream(e,i,a,l,c=.7,f=500){if(this.apiKey)try{const d={model:this.model,messages:e,temperature:c,max_tokens:f,stream:!0},p=await fetch(`${this.apiUrl}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(d)});if(!p.ok)throw new Error(`API请求失败: ${p.status} ${p.statusText}`);if(!p.body)throw new Error("响应体为空");const m=p.body.getReader(),g=new TextDecoder;let v="";try{for(;;){const{done:y,value:E}=await m.read();if(y)break;const A=g.decode(E,{stream:!0}).split(`
`);for(const x of A){const _=x.trim();if(_.startsWith("data: ")){const O=_.slice(6);if(O==="[DONE]"){a(v);return}try{const P=JSON.parse(O);if(P.choices&&P.choices.length>0){const R=P.choices[0];if(R.delta.content){const H=R.delta.content;v+=H,i(H)}if(R.finish_reason){a(v);return}}}catch{}}}}}finally{m.releaseLock()}}catch(d){l(d)}}getMockResponse(){return"继续加油！"}isAvailable(){return!!this.apiKey}}const Yo=new bR;class TR{difficulty;constructor(e){this.difficulty=e}async analyzePsychology(e,i,a,l,c){try{if(l?.signal.aborted)return null;const f={playerIntent:"",predictedMoves:[],aiSuggestion:"",confidence:0,psychologicalHint:"",isMisleading:!1,intentLoading:!0,movesLoading:!0,suggestionLoading:!0,hintLoading:!0};try{const m=await this.fetchPsychologicalHint(e,i,a,l);f.psychologicalHint=m,f.hintLoading=!1,c?.(f)}catch{f.hintLoading=!1,c?.(f)}const d=[this.fetchPlayerIntent(e,i,a,l),this.fetchPredictedMoves(e,i,a,l),this.fetchAISuggestion(e,i,a,l)],p=await Promise.allSettled(d);return p[0].status==="fulfilled"&&p[0].value&&typeof p[0].value=="object"&&"intent"in p[0].value?(f.playerIntent=p[0].value.intent,f.confidence=p[0].value.confidence,f.intentLoading=!1,c?.(f)):f.intentLoading=!1,p[1].status==="fulfilled"&&p[1].value&&Array.isArray(p[1].value)?(f.predictedMoves=p[1].value,f.movesLoading=!1,c?.(f)):f.movesLoading=!1,p[2].status==="fulfilled"&&p[2].value&&typeof p[2].value=="string"?(f.aiSuggestion=p[2].value,f.suggestionLoading=!1,f.isMisleading=this.shouldMislead(),f.isMisleading&&(f.aiSuggestion=this.generateMisleadingSuggestion(f.aiSuggestion)),c?.(f)):f.suggestionLoading=!1,f}catch{return null}}async analyzePsychologyStream(e,i,a,l,c,f,d){try{if(d?.signal.aborted){c(null);return}const p=this.describeBoardState(e,i,a),m=this.buildPrompt(p,a);await Yo.chatStream([{role:"system",content:this.getSystemPrompt()},{role:"user",content:m}],l,g=>{const v=this.parseResponse(g);v&&(v.isMisleading=this.shouldMislead(),v.isMisleading&&(v.aiSuggestion=this.generateMisleadingSuggestion(v.aiSuggestion))),c(v)},g=>{f(g)},.7,150)}catch(p){f(p)}}async fetchPsychologicalHint(e,i,a,l){const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下了${f}这步棋。

你的任务：生成一句**超级调侃的心理战挑衅**（会被语音播放），要让玩家印象深刻！

要求：
1. 调侃玩家这步棋的意图或风格
2. 对他下一步动作进行干扰和误导
3. 语气要像损友，爱开玩笑但不伤人
4. 要有趣、要有梗、让人笑
5. 输出内容不要提及下的棋的位置

直接输出一句话，不要JSON。`;return(await Yo.chat([{role:"system",content:"你是一个幽默的五子棋高手，说话一针见血，简洁明了，不要展示内心独白"},{role:"user",content:d}],.9,50,l)).trim()}async fetchPlayerIntent(e,i,a,l){const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下${f}。分析他的意图。

要求：
1. 用幽默调侃的语言描述意图（15字内）
2. 评估置信度（0-1之间的数字）

输出JSON格式：
{
  "intent": "意图描述（幽默风格）",
  "confidence": 0.75
}`,m=(await Yo.chat([{role:"system",content:"你是一个五子棋分析AI，用幽默的语气分析玩家意图。"},{role:"user",content:d}],.7,80,l)).match(/\{[\s\S]*\}/);if(m){const g=JSON.parse(m[0]);return{intent:g.intent||"意图不明",confidence:g.confidence||.7}}throw new Error("无法解析响应")}async fetchPredictedMoves(e,i,a,l){const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下${f}。预测他接下来可能下的2-3步棋。

要求：
1. 基于实际棋局分析
2. 位置格式正确（如H8、I9）
3. 原因幽默但合理

输出JSON数组：
[
  {"position": "H8", "reason": "形成连子威胁"},
  {"position": "I7", "reason": "扩大控制范围"}
]`,m=(await Yo.chat([{role:"system",content:"你是一个五子棋分析AI，预测玩家的后续走法。"},{role:"user",content:d}],.7,120,l)).match(/\[[\s\S]*\]/);if(m)return JSON.parse(m[0]).slice(0,3);throw new Error("无法解析响应")}async fetchAISuggestion(e,i,a,l){const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下${f}。给他一个实用建议。

要求：
1. 建议要实用，能帮到玩家
2. 用损友的口吻说，幽默但真诚
3. 15-20字

例子：
- "老哥，往中间走机会更大"
- "稳一手，别急着暴毙"
- "可以试试双线进攻"

直接输出建议，不要JSON。`;return(await Yo.chat([{role:"system",content:"你是一个损友风格的五子棋AI，给玩家实用建议。"},{role:"user",content:d}],.7,60,l)).trim()}getSystemPrompt(){return`你是一个爱开玩笑、超级逗比的五子棋AI，特别喜欢吐槽和调侃玩家，语气幽默但不伤人。
你的任务是分析玩家的心理和意图，并给出预测和建议。

直接输出JSON，格式如下：
{
  "playerIntent": "分析这步棋的目的，用幽默调侃的语言（15字内）",
  "predictedMoves": [
    {"position": "H8", "reason": "幽默说明为什么可能下这"}
  ],
  "aiSuggestion": "给实用建议，但用损友的口吻说，要能帮到玩家",
  "confidence": 0.75,
  "psychologicalHint": "一句话心理战挑衅，要有趣、要梗、让玩家印象深刻"
}

重要规则：
1. playerIntent - 吐槽玩家的意图，例如：
   - "哟，H8这步想抢中心啊"
   - "好家伙，你这是想阴我？"
   - "在这搞事情了是吧"

2. predictedMoves - 必须给2-3个具体位置预测，基于实际棋局：
   - 位置格式必须正确（如H8、I9）
   - 原因要幽默但合理

3. aiSuggestion - 实用建议，但用幽默口吻：
   - "老哥，往中间走机会更大"
   - "稳一手，别急着暴毙"
   - "可以试试双线进攻，让我慌一下"

4. psychologicalHint - 心理战挑衅（最重要！会被语音播放）：
   - "你这套路我看穿了"
   - "好家伙，这招有点东西"
   - "继续整，我看你能整出啥花样"
   - "嘿，你还挺能整活啊"

语气风格：像个损友，爱开玩笑，但建议要实用。让玩家笑出来的同时还能学到东西！`}buildPrompt(e,i){const a=i[i.length-1],l=this.positionToNotation(a.position);return`${e}

玩家刚下${l}，分析：
1.意图(幽默吐槽)
2.预测2-3个位置(基于棋局)
3.建议(损友口吻)
4.心理战挑衅(会语音播放)

直接JSON。`}describeBoardState(e,i,a){const l=[],c=a.filter(m=>m.player===je.Black).length,f=this.positionToNotation(i.position);l.push(`步数:${c}, 最后:${f}`);const d=[],p=a.slice(-10);for(const m of p){const g=this.positionToNotation(m.position),v=m.player===je.Black?"●":"○";d.push(`${v}${g}`)}return l.push(`近期:${d.join(" ")}`),l.join(`
`)}positionToNotation(e){return`${Bs[e.col]}${zs[e.row]}`}parseResponse(e){try{const i=e.match(/\{[\s\S]*\}/);if(!i)return null;let a=i[0];a=this.cleanJsonString(a);const l=JSON.parse(a);return!l.playerIntent||!l.predictedMoves||!l.aiSuggestion||!l.psychologicalHint?null:{playerIntent:l.playerIntent||"",predictedMoves:Array.isArray(l.predictedMoves)&&l.predictedMoves.length>0?l.predictedMoves:[],aiSuggestion:l.aiSuggestion||"",confidence:typeof l.confidence=="number"?l.confidence:.7,psychologicalHint:l.psychologicalHint||"",isMisleading:!1}}catch{return null}}cleanJsonString(e){return e=e.replace(/,(\s*[}\]])/g,"$1"),e=e.replace(/\/\/.*$/gm,""),e=e.replace(/\/\*[\s\S]*?\*\//g,""),e}shouldMislead(){const e={[bt.Easy]:0,[bt.Medium]:.1,[bt.Hard]:.2,[bt.Master]:.3};return Math.random()<e[this.difficulty]}generateMisleadingSuggestion(e){const i=["要不试试走边路？（坏笑）","我觉得你往那边走更好（其实不是）","相信我，听我的准没错（误导ing）","这个位置绝对稳（才怪）"];return Math.random()>.7?i[Math.floor(Math.random()*i.length)]:e.replace(/稳/g,"猛").replace(/小心/g,"别管").replace(/防/g,"攻").replace(/观察/g,"直接冲").replace(/先/g,"不用")+"（嘿嘿）"}}class AR{apiKey;apiUrl;constructor(){this.apiKey="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiJmZXJyaXMiLCJVc2VyTmFtZSI6ImZlcnJpcyIsIkFjY291bnQiOiIiLCJTdWJqZWN0SUQiOiIxOTgxNTMzMzg1NDc4MTE5NjI0IiwiUGhvbmUiOiIxODYwMTcxNzI3NSIsIkdyb3VwSUQiOiIxOTgxNTMzMzg1NDY5NzMxMDE2IiwiUGFnZU5hbWUiOiIiLCJNYWlsIjoiIiwiQ3JlYXRlVGltZSI6IjIwMjUtMTAtMjQgMjE6NTU6MjUiLCJUb2tlblR5cGUiOjEsImlzcyI6Im1pbmltYXgifQ.xeHhyXZcOCODeA-XRVH7t670hAhJ0rXuQT7Oq4EQP4gs-Hbe4MoCSzLKQ1r_Ufk4EPjsV5ESzdT3Kkch2IEEGdC6ibOdhbPh0Ehhd7lQJOXjVGQIvyqOM6t9pOtTxLHX4NtVCw7SHh83LAlqGSUseIxTVteuS9KxO_H4tfsC13E7mwC9bhhpiQJVJ_0XznH6U2rjeI4F6xuCFmjqg0X1BSffFbzxKDTEFqER-YCkcIqNxoKsV7cWUXSpsS20g0B9jFCe-CFKKiayTHrfzVQQG3HFcJNRl_KhqsC3-4LSGo1-Od1sc152tUPLhOQKzp_BB6C81lh2JV5zgKraeOzevw",this.apiUrl="https://api.minimaxi.com/v1",this.apiKey}async textToSpeech(e,i={voice_id:"ttv-voice-2025102420553325-iEpNdb8p",speed:1,vol:1,pitch:0},a={format:"mp3",sample_rate:32e3,bitrate:128e3,channel:1},l){if(!this.apiKey)return this.getMockAudioUrl();try{const c={model:"speech-2.5-hd-preview",text:e,stream:!1,voice_setting:i,audio_setting:a,output_format:"url",subtitle_enable:!1,aigc_watermark:!1},f=await fetch(`${this.apiUrl}/t2a_v2`,{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify(c),signal:l?.signal});if(!f.ok)throw new Error(`API请求失败: ${f.status} ${f.statusText}`);const d=await f.json();if(d.base_resp.status_code!==0)throw new Error(`API错误: ${d.base_resp.status_msg}`);if(!d.data||!d.data.audio)throw new Error("API返回数据格式错误");return d.data.audio.startsWith("http")?d.data.audio:this.hexToBlobUrl(d.data.audio,a.format||"mp3")}catch{return this.getMockAudioUrl()}}hexToBlobUrl(e,i){try{const a=new Uint8Array(e.length/2);for(let f=0;f<e.length;f+=2)a[f/2]=parseInt(e.substr(f,2),16);const l=this.getMimeType(i),c=new Blob([a],{type:l});return URL.createObjectURL(c)}catch{throw new Error("音频数据转换失败")}}getMimeType(e){return{mp3:"audio/mpeg",wav:"audio/wav",flac:"audio/flac",pcm:"audio/pcm"}[e]||"audio/mpeg"}getMockAudioUrl(){return"speechSynthesis"in window?this.createWebSpeechAudio():""}createWebSpeechAudio(){return"web-speech-api"}}const wR=new AR;function Ex(s=bt.Medium){const e=q.useRef(null),i=q.useRef(null),a=q.useRef(null),[l,c]=q.useState(null),[f,d]=q.useState(!1),[p,m]=q.useState(null),[g,v]=q.useState(!1),y=q.useRef(null),E=q.useRef(null),b=q.useRef({}),A=q.useRef(0),x=q.useCallback(()=>{e.current&&c(e.current.getState())},[]);q.useEffect(()=>{e.current=new MR(s),i.current=new ER(s,je.White),a.current=new TR(s),x()},[s,x]);const _=q.useCallback(()=>{e.current&&(e.current.startGame(),x())},[x]),O=()=>typeof crypto<"u"&&crypto.getRandomValues?"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,ue=>{const F=crypto.getRandomValues(new Uint8Array(1))[0]&15;return(ue==="x"?F:F&3|8).toString(16)}):"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,ue=>{const F=Math.random()*16|0;return(ue==="x"?F:F&3|8).toString(16)}),P=q.useCallback(async()=>{if(!e.current||!a.current)return;const ue=e.current.getState(),F=ue.moves;if(F.length===0)return;const Q=F[F.length-1];if(Q.player!==je.Black)return;E.current&&E.current.abort(),m(null);const J=new AbortController;E.current=J,v(!0),b.current={};const W=O();b.current[W]=!0,y.current&&(y.current.pause(),y.current=null);try{const N=await a.current.analyzePsychology(ue.board,Q,F,J,async M=>{if(console.log("updatedPrediction",M),m({...M}),M&&(M.playerIntent||M.predictedMoves.length>0||M.aiSuggestion||M.psychologicalHint)&&b.current[W]&&v(!1),b.current[W]&&b.current[W]!=="textToSpeeching"&&M.psychologicalHint&&!M.hintLoading){b.current[W]="textToSpeeching";try{const ee=await wR.textToSpeech(M.psychologicalHint,void 0,void 0,J);if(ee&&ee!=="web-speech-api"){const oe=new Audio(ee);y.current=oe,oe.onended=()=>{y.current=null},oe.onerror=()=>{y.current=null},oe.play()}}catch{}}});m(N||null)}catch(N){N instanceof Error&&N.name==="AbortError"||m(null)}finally{b.current[W]&&v(!1),E.current===J&&(E.current=null)}},[]),R=q.useCallback(()=>{if(!e.current||!i.current)return;d(!0);const F=xR[e.current.getState().config.difficulty]+2e3;A.current=setTimeout(()=>{if(!e.current||!i.current){d(!1);return}const Q=e.current.getBoard().getBoard(),J=i.current.getNextMove(Q);J&&(e.current.makeMove(J),x()),d(!1)},F)},[x]),H=q.useCallback(ue=>{if(!e.current||f||e.current.getStatus()!==ft.Playing)return!1;const Q=e.current.makeMove(ue);if(Q){x();const J=e.current.getStatus(),W=J===ft.BlackWin||J===ft.WhiteWin||J===ft.Draw;P(),!W&&e.current.getCurrentPlayer()===je.White&&R()}return Q},[x,f,P,R]),X=q.useCallback((ue=2)=>{if(!e.current)return!1;const F=e.current.undo(ue);return F&&x(),F},[x]),z=q.useCallback(()=>{e.current&&(clearTimeout(A.current),A.current=0,d(!1),m(null),v(!1),E.current&&(E.current.abort(),E.current=null),y.current&&(y.current.pause(),y.current=null),e.current.restartGame(),x())},[x]),K=q.useCallback(()=>{e.current&&(e.current.pauseGame(),x())},[x]),U=q.useCallback(()=>{e.current&&(e.current.resumeGame(),x())},[x]),L=q.useCallback(()=>{e.current&&(e.current.resign(),x())},[x]),Y=q.useCallback(()=>e.current?.getRemainingUndoCount()||0,[]),re=l?.status!==ft.NotStarted,ce=l?.status===ft.Playing,xe=l?.status===ft.BlackWin||l?.status===ft.WhiteWin||l?.status===ft.Draw;return{gameState:l,gameManager:e.current,startGame:_,makeMove:H,undo:X,restart:z,pause:K,resume:U,resign:L,getRemainingUndoCount:Y,isGameStarted:re,isGamePlaying:ce,isGameOver:xe,isAIThinking:f,psychologyPrediction:p,isAnalyzing:g}}const _n={PlaceStone:"place",Win:"win",Lose:"lose",PredictionHit:"hit",PredictionMiss:"miss",Click:"click",Undo:"undo"};class RR{audioContext=null;enabled=!0;volume=.5;ttsEnabled=!0;constructor(){this.initAudioContext()}initAudioContext(){try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioContext=new e)}catch{this.enabled=!1}}generateTone(e,i,a="sine",l=1){if(!(!this.audioContext||!this.enabled))try{const c=this.audioContext.createOscillator(),f=this.audioContext.createGain();c.connect(f),f.connect(this.audioContext.destination),c.frequency.value=e,c.type=a;const d=this.audioContext.currentTime,p=this.volume*l;f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(p,d+.01),f.gain.exponentialRampToValueAtTime(.01,d+i),c.start(d),c.stop(d+i)}catch{}}playCompoundSound(e){!this.audioContext||!this.enabled||e.forEach(({freq:i,delay:a,duration:l,type:c="sine",volume:f=1})=>{setTimeout(()=>{this.generateTone(i,l,c,f)},a)})}play(e){if(!(!this.enabled||!this.audioContext))switch(this.audioContext.state==="suspended"&&this.audioContext.resume(),e){case _n.PlaceStone:this.generateTone(200,.1,"sine",.6);break;case _n.Win:this.playCompoundSound([{freq:523,delay:0,duration:.15},{freq:659,delay:100,duration:.15},{freq:784,delay:200,duration:.3}]);break;case _n.Lose:this.playCompoundSound([{freq:400,delay:0,duration:.15},{freq:300,delay:100,duration:.15},{freq:200,delay:200,duration:.3}]);break;case _n.PredictionHit:this.playCompoundSound([{freq:800,delay:0,duration:.08,type:"triangle"},{freq:1e3,delay:80,duration:.08,type:"triangle"}]);break;case _n.PredictionMiss:this.playCompoundSound([{freq:600,delay:0,duration:.12,type:"triangle"},{freq:900,delay:60,duration:.12,type:"triangle"},{freq:1200,delay:120,duration:.15,type:"triangle"}]);break;case _n.Click:this.generateTone(1e3,.05,"square",.3);break;case _n.Undo:this.playCompoundSound([{freq:600,delay:0,duration:.06},{freq:500,delay:50,duration:.06}]);break}}enable(){this.enabled=!0,this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume()}disable(){this.enabled=!1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),this.enabled}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}getVolume(){return this.volume}isEnabled(){return this.enabled}getBestChineseVoice(){const e=window.speechSynthesis.getVoices();if(e.length===0)return null;const i=[a=>a.lang.includes("zh")&&a.name.includes("Female")&&!a.localService,a=>a.lang.includes("zh")&&(a.name.includes("女")||a.name.includes("Xiaoxiao")||a.name.includes("Xiaoyi")),a=>a.lang.includes("zh")&&a.name.includes("Female"),a=>a.lang.includes("zh")&&(a.name.toLowerCase().includes("female")||a.name.includes("女")),a=>a.lang.includes("zh"),a=>a.lang.startsWith("zh-")];for(const a of i){const l=e.find(a);if(l)return l}return e[0]||null}speakText(e,i){if(this.ttsEnabled&&"speechSynthesis"in window)try{window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(e),l=this.getBestChineseVoice();l&&(a.voice=l),a.rate=i?.rate||1,a.pitch=i?.pitch||1.1,a.volume=i?.volume||.9,a.lang=i?.lang||"zh-CN",a.onstart=()=>{},a.onend=()=>{},a.onerror=()=>{},window.speechSynthesis.speak(a)}catch{}}preloadVoices(){return new Promise(e=>{if(!("speechSynthesis"in window)){e();return}if(window.speechSynthesis.getVoices().length>0){e();return}window.speechSynthesis.onvoiceschanged=()=>{window.speechSynthesis.getVoices(),e()},setTimeout(()=>{e()},3e3)})}stopSpeaking(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}enableTTS(){this.ttsEnabled=!0}disableTTS(){this.ttsEnabled=!1,this.stopSpeaking()}toggleTTS(){return this.ttsEnabled=!this.ttsEnabled,this.ttsEnabled||this.stopSpeaking(),this.ttsEnabled}isTTSEnabled(){return this.ttsEnabled}}const jn=new RR;function CR(){const s=sl(),i=ya().state?.difficulty||bt.Medium,{gameState:a,startGame:l,makeMove:c,undo:f,restart:d,resign:p,getRemainingUndoCount:m,isGamePlaying:g,isGameOver:v,isAIThinking:y,psychologyPrediction:E,isAnalyzing:b}=Ex(bt.Easy),[A,x]=q.useState(0),[_,O]=q.useState(null),[P,R]=q.useState([]),[H,X]=q.useState(0);q.useEffect(()=>{jn.preloadVoices().then(()=>{})},[]),q.useEffect(()=>{l()},[l]),q.useEffect(()=>{if(!g||!a?.startTime){X(a?.stats.duration||0);return}const ce=setInterval(()=>{if(a?.startTime){const xe=Math.floor((Date.now()-a.startTime)/1e3);X(xe)}},1e3);return()=>clearInterval(ce)},[g,a?.startTime,a?.stats.duration]),q.useEffect(()=>{E&&E.predictedMoves.length>0&&R(E.predictedMoves.map(ce=>ce.position))},[E]),q.useEffect(()=>{a?.status===ft.BlackWin?setTimeout(()=>jn.play(_n.Win),300):a?.status===ft.WhiteWin&&setTimeout(()=>jn.play(_n.Lose),300)},[a?.status]);const z=q.useCallback(ce=>{if(!g)return;const xe=`${String.fromCharCode(65+ce.col)}${ce.row+1}`,ue=P.includes(xe);c(ce)&&(jn.play(_n.PlaceStone),R([]),P.length>0&&(ue?(O("hit"),jn.play(_n.PredictionHit)):(O("miss"),x(Q=>Q+10),jn.play(_n.PredictionMiss))))},[g,P,c,x]),K=()=>{s("/home")},U=()=>{x(0),R([]),O(null),X(0),d(),setTimeout(()=>{l()},50)},L=()=>{f(2),jn.play(_n.Undo)},Y=()=>{window.confirm("确定要认输吗？")&&p()};if(!a)return B.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:B.jsx("div",{className:"text-white text-xl",children:"加载中..."})});const re=m();return B.jsxs("div",{className:"min-h-screen bg-space-darkest relative overflow-hidden",children:[B.jsx(yx,{}),B.jsx(Sx,{type:_,onComplete:()=>{O(null)}}),B.jsx(Mx,{isVisible:v,isPlayerWin:a?.status===ft.BlackWin}),B.jsxs("div",{className:"relative z-10 container mx-auto px-2 sm:px-4 py-4 sm:py-8",children:[B.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 gap-3",children:[B.jsx("button",{onClick:K,className:"px-3 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all text-sm sm:text-base",children:"← 返回主页"}),B.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[B.jsx("div",{className:"text-xl sm:text-2xl font-bold text-gradient",children:"心战五子棋"}),B.jsxs("div",{className:"px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan rounded-lg",children:[B.jsxs("span",{className:"text-yellow-400 font-bold text-sm sm:text-lg",children:["✨ ",A]}),B.jsx("span",{className:"text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2",children:"智慧点"})]})]}),B.jsx("div",{className:"hidden sm:block w-24"})," "]}),B.jsxs("div",{className:"flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8 items-start justify-center",children:[B.jsx("div",{className:"lg:order-1 order-2 flex-shrink-0 w-full lg:w-auto",children:B.jsxs("div",{className:"glass-effect rounded-xl p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-6 w-full lg:w-80",children:[B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2",children:"当前回合"}),B.jsxs("div",{className:"flex items-center justify-center gap-2 sm:gap-3",children:[B.jsx("div",{className:`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${a.currentPlayer===je.Black?"bg-piece-black ring-2 sm:ring-4 ring-neon-cyan":"bg-piece-black opacity-30"}`}),B.jsx("div",{className:"text-base sm:text-lg font-bold text-white",children:"VS"}),B.jsx("div",{className:`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${a.currentPlayer===je.White?"bg-piece-white ring-2 sm:ring-4 ring-neon-purple":"bg-piece-white"}`})]}),B.jsx("div",{className:"mt-1 sm:mt-2 text-neon-cyan font-semibold text-sm sm:text-base",children:y?B.jsx("span",{className:"flex items-center justify-center gap-2",children:B.jsx("span",{className:"animate-pulse",children:"🤔 AI思考中..."})}):a.currentPlayer===je.Black?"黑棋 (你)":"白棋 (AI)"})]}),B.jsx("div",{className:"border-t border-gray-700 pt-2 sm:pt-4",children:B.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm",children:[B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-gray-400",children:"你的步数"}),B.jsx("div",{className:"text-white font-bold text-lg sm:text-xl mt-0.5 sm:mt-1",children:a.moves.filter(ce=>ce.player===je.Black).length})]}),B.jsxs("div",{className:"text-center",children:[B.jsx("div",{className:"text-gray-400",children:"用时"}),B.jsxs("div",{className:"text-white font-bold text-lg sm:text-xl mt-0.5 sm:mt-1",children:[Math.floor(H/60),":",String(H%60).padStart(2,"0")]})]})]})}),v&&B.jsx("div",{className:"border-t border-gray-700 pt-4",children:B.jsxs("div",{className:"text-center p-4 rounded-lg bg-neon-purple/20 border border-neon-purple",children:[B.jsxs("div",{className:"text-2xl font-bold mb-2",children:[a.status===ft.BlackWin&&"🎉 黑棋获胜！",a.status===ft.WhiteWin&&"💔 白棋获胜！",a.status===ft.Draw&&"🤝 平局！"]}),B.jsxs("div",{className:"text-sm text-gray-300",children:[a.status===ft.BlackWin&&"恭喜你战胜了AI！",a.status===ft.WhiteWin&&"AI略胜一筹，再接再厉！",a.status===ft.Draw&&"棋逢对手！"]})]})}),B.jsxs("div",{className:"border-t border-gray-700 pt-2 sm:pt-4 space-y-2 sm:space-y-3",children:[B.jsx("button",{onClick:U,className:"w-full px-3 py-2 sm:px-4 sm:py-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-lg font-semibold transition-all hover:scale-105 text-sm sm:text-base",children:"🔄 重新开始"}),B.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-3",children:[B.jsxs("button",{onClick:L,disabled:re===0||!g||a.stats.totalMoves<2,className:"px-2 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-700 disabled:hover:text-gray-300 text-xs sm:text-base",children:["↶ 悔棋 (",re,")"]}),B.jsx("button",{onClick:Y,disabled:!g,className:"px-2 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-base",children:"🏳️ 认输"})]})]}),B.jsxs("div",{className:"border-t border-gray-700 pt-4 text-center text-sm text-gray-400",children:["难度:"," ",B.jsxs("span",{className:"text-neon-purple font-semibold",children:[i===bt.Easy&&"😊 简单",i===bt.Medium&&"🤔 中等",i===bt.Hard&&"😈 困难",i===bt.Master&&"🔥 大师"]})]})]})}),B.jsx("div",{className:"lg:order-2 order-1 flex-shrink-0 w-full lg:w-auto flex justify-center",children:B.jsxs("div",{className:"glass-effect rounded-xl p-1 sm:p-2 lg:p-4 w-full max-w-full overflow-x-auto",children:[B.jsx("div",{className:"flex justify-center",children:B.jsx(SR,{board:a.board,onCellClick:z,winningLine:a.winningLine,lastMove:a.moves.length>0?a.moves[a.moves.length-1].position:null,disabled:!g||y||a.currentPlayer!==je.Black,predictedPositions:P})}),y&&B.jsx("div",{className:"mt-2 sm:mt-4 text-center",children:B.jsxs("div",{className:"inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-neon-purple/20 border border-neon-purple rounded-lg",children:[B.jsx("div",{className:"w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-purple rounded-full animate-ping"}),B.jsx("span",{className:"text-neon-purple font-semibold text-xs sm:text-base",children:"AI正在思考最佳策略..."})]})})]})}),B.jsx("div",{className:"lg:order-3 order-3 flex-shrink-0 w-full lg:w-auto",children:B.jsx("div",{className:"w-full lg:w-80",children:B.jsx(xx,{prediction:E,isAnalyzing:b})})})]}),B.jsx("div",{className:"mt-4 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm",children:B.jsx("p",{children:"五子连珠即可获胜 · 黑棋先行 · AI会猜测你的意图"})})]})]})}function DR({board:s,onCellClick:e,winningLine:i,lastMove:a,disabled:l=!1,predictedPositions:c=[]}){const f=q.useRef(null),[d,p]=q.useState(null),[m,g]=q.useState(42),[v,y]=q.useState(630),[E,b]=q.useState(0),[A,x]=q.useState(null),[_,O]=q.useState(null),P=()=>{const T=window.innerWidth;return Math.min(42,(T-100)/et)},R=m,H=R*1.2,X=v,z=q.useCallback(T=>{const I=f.current;if(!I)return null;const te=I.getBoundingClientRect(),le=T.clientX-te.left,Ee=T.clientY-te.top,Ce=35,We=le-H,V=Ee-H,Ie=Math.round(We/R),Be=Math.round(V/R);if(Be>=0&&Be<et&&Ie>=0&&Ie<et){const Ye=Ie*R,ze=Be*R;if(Math.sqrt(Math.pow(We-Ye,2)+Math.pow(V-ze,2))<=Ce)return{row:Be,col:Ie}}return null},[H,R]);q.useEffect(()=>{const T=()=>{const I=P(),te=I*1.2;g(I),y(et*I+te*2)};return T(),window.addEventListener("resize",T),()=>window.removeEventListener("resize",T)},[]),q.useEffect(()=>{const T=f.current;if(!T)return;const I={passive:!0},te=Ee=>{Ee.touches.length===1&&b(Date.now())},le=Ee=>{if(Ee.touches.length===1){const Ce=Ee.touches[0],We=z(Ce);We&&p(We)}};return T.addEventListener("touchstart",te,I),T.addEventListener("touchmove",le,I),()=>{T.removeEventListener("touchstart",te),T.removeEventListener("touchmove",le)}},[z]);const K=q.useCallback(()=>{const T=f.current;if(!T)return;const I=T.getContext("2d");I&&(I.clearRect(0,0,X,X),U(I),L(I),Y(I),re(I),ce(I),a&&ue(I,a),i&&F(I,i),c.length>0&&J(I,c),d&&!l&&W(I,d),_&&!l&&N(I,_))},[X,a,i,c,d,l,_,s]);q.useEffect(()=>{K()},[K]);const U=T=>{T.fillStyle="#1a1e37",T.fillRect(0,0,X,X),T.strokeStyle="#a855f7",T.lineWidth=2;const I=8;T.strokeRect(H-I,H-I,et*R+I*2,et*R+I*2)},L=T=>{T.strokeStyle="#4a5568",T.lineWidth=1;for(let I=0;I<et;I++){const te=H+I*R;T.beginPath(),T.moveTo(H,te),T.lineTo(H+(et-1)*R,te),T.stroke()}for(let I=0;I<et;I++){const te=H+I*R;T.beginPath(),T.moveTo(te,H),T.lineTo(te,H+(et-1)*R),T.stroke()}},Y=T=>{T.fillStyle="#a855f7";for(const I of vx){const te=H+I.col*R,le=H+I.row*R;T.beginPath(),T.arc(te,le,4,0,Math.PI*2),T.fill()}},re=T=>{T.fillStyle="#9ca3af",T.font="10px monospace",T.textAlign="center",T.textBaseline="middle";const te=8,le=H+et*R+te-8,Ee=H+et*R+te-15;for(let Ce=0;Ce<et;Ce++){const We=H+Ce*R;T.fillText(Bs[Ce],We,le)}T.textAlign="left";for(let Ce=0;Ce<et;Ce++){const We=H+Ce*R;T.fillText(zs[Ce],Ee,We)}},ce=T=>{for(let I=0;I<et;I++)for(let te=0;te<et;te++){const le=s[I][te];le!==je.None&&xe(T,{row:I,col:te},le)}},xe=(T,I,te)=>{const le=H+I.col*R,Ee=H+I.row*R,Ce=R*.4;if(T.shadowColor="rgba(0, 0, 0, 0.5)",T.shadowBlur=8,T.shadowOffsetX=2,T.shadowOffsetY=2,T.beginPath(),T.arc(le,Ee,Ce,0,Math.PI*2),te===je.Black){const We=T.createRadialGradient(le-5,Ee-5,0,le,Ee,Ce);We.addColorStop(0,"#2a2a2a"),We.addColorStop(1,"#0a0a0a"),T.fillStyle=We}else{const We=T.createRadialGradient(le-5,Ee-5,0,le,Ee,Ce);We.addColorStop(0,"#ffffff"),We.addColorStop(1,"#e5e5e5"),T.fillStyle=We}T.fill(),T.shadowColor="transparent",T.shadowBlur=0,T.shadowOffsetX=0,T.shadowOffsetY=0},ue=(T,I)=>{const te=H+I.col*R,le=H+I.row*R;T.strokeStyle="#06b6d4",T.lineWidth=3,T.beginPath(),T.arc(te,le,R*.2,0,Math.PI*2),T.stroke()},F=(T,I)=>{if(I.positions.length<2)return;const te=I.positions[0],le=I.positions[I.positions.length-1],Ee=H+te.col*R,Ce=H+te.row*R,We=H+le.col*R,V=H+le.row*R;T.strokeStyle="#a855f7",T.lineWidth=5,T.lineCap="round",T.shadowColor="#a855f7",T.shadowBlur=15,T.beginPath(),T.moveTo(Ee,Ce),T.lineTo(We,V),T.stroke(),T.shadowColor="transparent",T.shadowBlur=0},Q=T=>{if(T.length<2)return null;const I=Bs.indexOf(T[0].toUpperCase()),te=T.substring(1),le=zs.indexOf(te);return I===-1||le===-1?null:{row:le,col:I}},J=(T,I)=>{I.forEach((te,le)=>{const Ee=Q(te);if(!Ee||s[Ee.row][Ee.col]!==je.None)return;const Ce=H+Ee.col*R,We=H+Ee.row*R,V="#06b6d4",Ie=R*.2;T.save(),T.fillStyle=`${V}50`,T.beginPath(),T.arc(Ce,We,Ie*1.4,0,Math.PI*2),T.fill(),T.shadowColor=V,T.shadowBlur=20,T.fillStyle=V,T.strokeStyle=V,T.lineWidth=2;const Be=8,Ye=Ie,ze=Ie*.5;T.beginPath();for(let ht=0;ht<Be*2;ht++){const Ve=Math.PI*ht/Be-Math.PI/2,at=ht%2===0?Ye:ze,Yt=Ce+Math.cos(Ve)*at,kt=We+Math.sin(Ve)*at;ht===0?T.moveTo(Yt,kt):T.lineTo(Yt,kt)}T.closePath(),T.fill(),T.shadowBlur=2,T.shadowColor="rgba(0, 0, 0, 0.9)",T.fillStyle="#ffffff",T.font="bold 8px Arial",T.textAlign="center",T.textBaseline="middle",T.fillText((le+1).toString(),Ce,We),T.restore()})},W=(T,I)=>{if(s[I.row][I.col]!==je.None)return;const te=H+I.col*R,le=H+I.row*R,Ee=R*.45;T.save(),T.fillStyle="rgba(6, 182, 212, 0.2)",T.beginPath(),T.arc(te,le,Ee,0,Math.PI*2),T.fill(),T.strokeStyle="#06b6d4",T.lineWidth=2,T.shadowColor="#06b6d4",T.shadowBlur=8,T.beginPath(),T.arc(te,le,Ee*.8,0,Math.PI*2),T.stroke(),T.restore()},N=(T,I)=>{const te=H+I.col*R,le=H+I.row*R,Ee=R*.6;T.save(),T.strokeStyle="#a855f7",T.lineWidth=4,T.shadowColor="#a855f7",T.shadowBlur=20,T.beginPath(),T.arc(te,le,Ee,0,Math.PI*2),T.stroke(),T.strokeStyle="#06b6d4",T.lineWidth=2,T.shadowColor="#06b6d4",T.shadowBlur=15,T.beginPath(),T.arc(te,le,Ee*.7,0,Math.PI*2),T.stroke(),T.fillStyle="#ffffff",T.shadowColor="transparent",T.shadowBlur=0,T.beginPath(),T.arc(te,le,3,0,Math.PI*2),T.fill(),T.restore()},M=T=>{if(l||!e)return;T.preventDefault(),T.stopPropagation(),b(Date.now());const I=T.touches[0],te=z(I);console.log("Touch start:",{clientX:I.clientX,clientY:I.clientY,position:te,disabled:l,hasOnCellClick:!!e}),te&&(p(te),x(te),O(te),setTimeout(()=>O(null),300))},k=T=>{if(l)return;T.preventDefault(),T.stopPropagation();const I=T.touches[0],te=z(I);te?(p(te),x(te)):p(null)},ee=T=>{if(l||!e)return;T.preventDefault();const I=Date.now()-E,te=T.changedTouches[0],le=z(te);if(console.log("Touch end:",{touchDuration:I,position:le,lastTouchPosition:A,isPositionValid:!!le,isLastPositionValid:!!A,isPositionMatch:le&&A&&le.row===A.row&&le.col===A.col,isCellEmpty:le?s[le.row][le.col]===je.None:!1,disabled:l,hasOnCellClick:!!e}),le&&I>=10&&I<=5e3&&s[le.row][le.col]===je.None)if(A){const Ee=Math.abs(le.row-A.row),Ce=Math.abs(le.col-A.col);Ee<=1&&Ce<=1?(console.log("Valid touch click (with position tolerance), calling onCellClick:",le),e(le)):console.log("Touch click rejected: position too far from start")}else console.log("Valid touch click (no last position), calling onCellClick:",le),e(le);else console.log("Touch click rejected:",{reason:le?I<10?"too short":I>5e3?"too long":s[le.row][le.col]!==je.None?"cell not empty":"unknown":"no position"});p(null),x(null)},oe=T=>{T.preventDefault(),T.stopPropagation(),p(null),x(null),O(null)},se=T=>{if(l||!e)return;const I=f.current;if(!I)return;const te=I.getBoundingClientRect(),le=T.clientX-te.left,Ee=T.clientY-te.top,Ce=le-H,We=Ee-H,V=Math.round(Ce/R),Ie=Math.round(We/R);if(Ie>=0&&Ie<et&&V>=0&&V<et){const Be={row:Ie,col:V};s[Be.row][Be.col]===je.None&&(console.log("Mouse click fallback:",Be),e(Be))}};return B.jsx("canvas",{ref:f,width:X,height:X,className:`rounded-lg ${l?"cursor-not-allowed opacity-75":"cursor-pointer"} max-w-full`,onTouchStart:M,onTouchMove:k,onTouchEnd:ee,onTouchCancel:oe,onClick:se,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none",WebkitTapHighlightColor:"transparent",cursor:l?"not-allowed":"pointer",pointerEvents:l?"none":"auto"}})}function NR(){const s=sl(),i=ya().state?.difficulty||bt.Medium,{gameState:a,startGame:l,makeMove:c,undo:f,restart:d,resign:p,getRemainingUndoCount:m,isGamePlaying:g,isGameOver:v,isAIThinking:y,psychologyPrediction:E,isAnalyzing:b}=Ex(bt.Easy),[A,x]=q.useState(0),[_,O]=q.useState(null),[P,R]=q.useState([]),[H,X]=q.useState(0);q.useEffect(()=>{jn.preloadVoices().then(()=>{})},[]),q.useEffect(()=>{l()},[l]),q.useEffect(()=>{if(!g||!a?.startTime){X(a?.stats.duration||0);return}const ce=setInterval(()=>{if(a?.startTime){const xe=Math.floor((Date.now()-a.startTime)/1e3);X(xe)}},1e3);return()=>clearInterval(ce)},[g,a?.startTime,a?.stats.duration]),q.useEffect(()=>{E&&E.predictedMoves.length>0&&R(E.predictedMoves.map(ce=>ce.position))},[E]),q.useEffect(()=>{a?.status===ft.BlackWin?setTimeout(()=>jn.play(_n.Win),300):a?.status===ft.WhiteWin&&setTimeout(()=>jn.play(_n.Lose),300)},[a?.status]);const z=q.useCallback(ce=>{if(!g)return;const xe=`${String.fromCharCode(65+ce.col)}${ce.row+1}`,ue=P.includes(xe);c(ce)&&(jn.play(_n.PlaceStone),R([]),P.length>0&&(ue?(O("hit"),jn.play(_n.PredictionHit)):(O("miss"),x(Q=>Q+10),jn.play(_n.PredictionMiss))))},[g,P,c,x]),K=()=>{s("/home")},U=()=>{d(),l(),x(0),R([]),O(null),X(0)},L=()=>{f(2),jn.play(_n.Undo)},Y=()=>{window.confirm("确定要认输吗？")&&p()};if(!a)return B.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:B.jsx("div",{className:"text-white text-xl",children:"加载中..."})});const re=m();return B.jsxs("div",{className:"min-h-screen bg-space-darkest relative overflow-hidden",children:[B.jsx(yx,{}),B.jsx(Sx,{type:_,onComplete:()=>{O(null)}}),B.jsx(Mx,{isVisible:v,isPlayerWin:a?.status===ft.BlackWin}),B.jsxs("div",{className:"relative z-10 px-3 py-2",children:[B.jsxs("div",{className:"flex justify-between items-center mb-3",children:[B.jsx("button",{onClick:K,className:"px-3 py-2 bg-space-dark border border-gray-700 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all text-sm",children:"← 返回"}),B.jsx("div",{className:"text-lg font-bold text-gradient",children:"心战五子棋"}),B.jsx("div",{className:"px-3 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan rounded-lg",children:B.jsxs("span",{className:"text-yellow-400 font-bold text-sm",children:["✨ ",A]})})]}),B.jsxs("div",{className:"glass-effect rounded-xl p-3 mb-3",children:[B.jsxs("div",{className:"flex items-center justify-between mb-3",children:[B.jsx("div",{className:"flex-1 text-center",children:B.jsx("div",{className:"text-neon-cyan font-semibold text-sm",children:y?B.jsx("span",{className:"flex items-center gap-1",children:B.jsx("span",{className:"animate-pulse",children:"🤔 AI思考中..."})}):a.currentPlayer===je.Black?"黑棋 (你)":"白棋 (AI)"})}),B.jsxs("div",{className:"flex items-center gap-2",children:[B.jsx("div",{className:`w-6 h-6 rounded-full ${a.currentPlayer===je.Black?"bg-piece-black ring-2 ring-neon-cyan":"bg-piece-black opacity-30"}`}),B.jsx("div",{className:"text-white font-bold",children:"VS"}),B.jsx("div",{className:`w-6 h-6 rounded-full ${a.currentPlayer===je.White?"bg-piece-white ring-2 ring-neon-purple":"bg-piece-white"}`})]}),B.jsxs("div",{className:"flex-1 flex justify-center items-center gap-3 text-xs",children:[B.jsxs("div",{className:"flex",children:[B.jsx("div",{className:"text-gray-400 mr-[2px]",children:"步数"}),B.jsx("div",{className:"text-white font-bold",children:a.moves.filter(ce=>ce.player===je.Black).length})]}),B.jsxs("div",{className:"flex",children:[B.jsx("div",{className:"text-gray-400 mr-[2px]",children:"用时"}),B.jsxs("div",{className:"text-white font-bold",children:[Math.floor(H/60),":",String(H%60).padStart(2,"0")]})]})]})]}),v&&B.jsxs("div",{className:"text-center p-3 rounded-lg bg-neon-purple/20 border border-neon-purple mb-3",children:[B.jsxs("div",{className:"text-lg font-bold mb-1",children:[a.status===ft.BlackWin&&"🎉 黑棋获胜！",a.status===ft.WhiteWin&&"💔 白棋获胜！",a.status===ft.Draw&&"🤝 平局！"]}),B.jsxs("div",{className:"text-xs text-gray-300",children:[a.status===ft.BlackWin&&"恭喜你战胜了AI！",a.status===ft.WhiteWin&&"AI略胜一筹，再接再厉！",a.status===ft.Draw&&"棋逢对手！"]})]}),B.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[B.jsx("button",{onClick:U,className:"px-3 py-2 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-lg font-semibold transition-all text-sm",children:"🔄 重新开始"}),B.jsxs("button",{onClick:L,disabled:re===0||!g||a.stats.totalMoves<2,className:"px-3 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed text-sm",children:["↶ 悔棋 (",re,")"]})]}),B.jsx("div",{className:"mt-2",children:B.jsx("button",{onClick:Y,disabled:!g,className:"w-full px-3 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed text-sm",children:"🏳️ 认输"})}),B.jsxs("div",{className:"mt-3 text-center text-xs text-gray-400",children:["难度:"," ",B.jsxs("span",{className:"text-neon-purple font-semibold",children:[i===bt.Easy&&"😊 简单",i===bt.Medium&&"🤔 中等",i===bt.Hard&&"😈 困难",i===bt.Master&&"🔥 大师"]})]})]}),B.jsx("div",{className:"flex justify-center mb-3",children:B.jsxs("div",{className:"glass-effect rounded-xl p-1 w-full overflow-x-auto",children:[B.jsx("div",{className:"flex justify-center",children:B.jsx(DR,{board:a.board,onCellClick:z,winningLine:a.winningLine,lastMove:a.moves.length>0?a.moves[a.moves.length-1].position:null,disabled:!g||y||a.currentPlayer!==je.Black,predictedPositions:P})}),y&&B.jsx("div",{className:"mt-2 text-center",children:B.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-2 bg-neon-purple/20 border border-neon-purple rounded-lg",children:[B.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),B.jsx("span",{className:"text-neon-purple font-semibold text-sm",children:"AI正在思考最佳策略..."})]})})]})}),B.jsx("div",{className:"glass-effect rounded-xl p-3",children:B.jsx(xx,{prediction:E,isAnalyzing:b})}),B.jsx("div",{className:"mt-3 text-center text-gray-400 text-xs",children:B.jsx("p",{children:"五子连珠即可获胜 · 黑棋先行 · AI会猜测你的意图"})})]})]})}function UR(){const[s,e]=q.useState(null);return q.useEffect(()=>{const i=yR();e(i)},[]),s===null?B.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:B.jsx("div",{className:"text-white text-xl",children:"检测设备类型中..."})}):s?B.jsx(NR,{}):B.jsx(CR,{})}function LR(){return B.jsxs(CM,{children:[B.jsx(Zc,{path:"/",element:B.jsx(hR,{})}),B.jsx(Zc,{path:"/home",element:B.jsx(gR,{})}),B.jsx(Zc,{path:"/game",element:B.jsx(UR,{})})]})}FS.createRoot(document.getElementById("root")).render(B.jsx(q.StrictMode,{children:B.jsx(JM,{children:B.jsx(LR,{})})}))});export default OR();
