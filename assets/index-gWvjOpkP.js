var CS=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var LR=CS((PR,fl)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ed={exports:{}},Fo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function DS(){if(tv)return Fo;tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Fo.Fragment=e,Fo.jsx=i,Fo.jsxs=i,Fo}var nv;function NS(){return nv||(nv=1,Ed.exports=DS()),Ed.exports}var P=NS(),bd={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function US(){if(iv)return ht;iv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function E(M){return M===null||typeof M!="object"?null:(M=y&&M[y]||M["@@iterator"],typeof M=="function"?M:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,x={};function _(M,F,ee){this.props=M,this.context=F,this.refs=x,this.updater=ee||b}_.prototype.isReactComponent={},_.prototype.setState=function(M,F){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,F,"setState")},_.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function L(){}L.prototype=_.prototype;function O(M,F,ee){this.props=M,this.context=F,this.refs=x,this.updater=ee||b}var U=O.prototype=new L;U.constructor=O,T(U,_.prototype),U.isPureReactComponent=!0;var V=Array.isArray;function k(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function D(M,F,ee){var ue=ee.ref;return{$$typeof:s,type:M,key:F,ref:ue!==void 0?ue:null,props:ee}}function N(M,F){return D(M.type,F,M.props)}function j(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function ae(M){var F={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(ee){return F[ee]})}var de=/\/+/g;function _e(M,F){return typeof M=="object"&&M!==null&&M.key!=null?ae(""+M.key):F.toString(36)}function re(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(k,k):(M.status="pending",M.then(function(F){M.status==="pending"&&(M.status="fulfilled",M.value=F)},function(F){M.status==="pending"&&(M.status="rejected",M.reason=F)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function I(M,F,ee,ue,se){var X=typeof M;(X==="undefined"||X==="boolean")&&(M=null);var $=!1;if(M===null)$=!0;else switch(X){case"bigint":case"string":case"number":$=!0;break;case"object":switch(M.$$typeof){case s:case e:$=!0;break;case g:return $=M._init,I($(M._payload),F,ee,ue,se)}}if($)return se=se(M),$=ue===""?"."+_e(M,0):ue,V(se)?(ee="",$!=null&&(ee=$.replace(de,"$&/")+"/"),I(se,F,ee,"",function(Ue){return Ue})):se!=null&&(j(se)&&(se=N(se,ee+(se.key==null||M&&M.key===se.key?"":(""+se.key).replace(de,"$&/")+"/")+$)),F.push(se)),1;$=0;var ye=ue===""?".":ue+":";if(V(M))for(var Ae=0;Ae<M.length;Ae++)ue=M[Ae],X=ye+_e(ue,Ae),$+=I(ue,F,ee,X,se);else if(Ae=E(M),typeof Ae=="function")for(M=Ae.call(M),Ae=0;!(ue=M.next()).done;)ue=ue.value,X=ye+_e(ue,Ae++),$+=I(ue,F,ee,X,se);else if(X==="object"){if(typeof M.then=="function")return I(re(M),F,ee,ue,se);throw F=String(M),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.")}return $}function K(M,F,ee){if(M==null)return M;var ue=[],se=0;return I(M,ue,"","",function(X){return F.call(ee,X,se++)}),ue}function Q(M){if(M._status===-1){var F=M._result;F=F(),F.then(function(ee){(M._status===0||M._status===-1)&&(M._status=1,M._result=ee)},function(ee){(M._status===0||M._status===-1)&&(M._status=2,M._result=ee)}),M._status===-1&&(M._status=0,M._result=F)}if(M._status===1)return M._result.default;throw M._result}var G=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var F=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(F))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},R={map:K,forEach:function(M,F,ee){K(M,function(){F.apply(this,arguments)},ee)},count:function(M){var F=0;return K(M,function(){F++}),F},toArray:function(M){return K(M,function(F){return F})||[]},only:function(M){if(!j(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return ht.Activity=v,ht.Children=R,ht.Component=_,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=O,ht.StrictMode=a,ht.Suspense=p,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ht.__COMPILER_RUNTIME={__proto__:null,c:function(M){return z.H.useMemoCache(M)}},ht.cache=function(M){return function(){return M.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(M,F,ee){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ue=T({},M.props),se=M.key;if(F!=null)for(X in F.key!==void 0&&(se=""+F.key),F)!Z.call(F,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&F.ref===void 0||(ue[X]=F[X]);var X=arguments.length-2;if(X===1)ue.children=ee;else if(1<X){for(var $=Array(X),ye=0;ye<X;ye++)$[ye]=arguments[ye+2];ue.children=$}return D(M.type,se,ue)},ht.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},ht.createElement=function(M,F,ee){var ue,se={},X=null;if(F!=null)for(ue in F.key!==void 0&&(X=""+F.key),F)Z.call(F,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(se[ue]=F[ue]);var $=arguments.length-2;if($===1)se.children=ee;else if(1<$){for(var ye=Array($),Ae=0;Ae<$;Ae++)ye[Ae]=arguments[Ae+2];se.children=ye}if(M&&M.defaultProps)for(ue in $=M.defaultProps,$)se[ue]===void 0&&(se[ue]=$[ue]);return D(M,X,se)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(M){return{$$typeof:d,render:M}},ht.isValidElement=j,ht.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:Q}},ht.memo=function(M,F){return{$$typeof:m,type:M,compare:F===void 0?null:F}},ht.startTransition=function(M){var F=z.T,ee={};z.T=ee;try{var ue=M(),se=z.S;se!==null&&se(ee,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(k,G)}catch(X){G(X)}finally{F!==null&&ee.types!==null&&(F.types=ee.types),z.T=F}},ht.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ht.use=function(M){return z.H.use(M)},ht.useActionState=function(M,F,ee){return z.H.useActionState(M,F,ee)},ht.useCallback=function(M,F){return z.H.useCallback(M,F)},ht.useContext=function(M){return z.H.useContext(M)},ht.useDebugValue=function(){},ht.useDeferredValue=function(M,F){return z.H.useDeferredValue(M,F)},ht.useEffect=function(M,F){return z.H.useEffect(M,F)},ht.useEffectEvent=function(M){return z.H.useEffectEvent(M)},ht.useId=function(){return z.H.useId()},ht.useImperativeHandle=function(M,F,ee){return z.H.useImperativeHandle(M,F,ee)},ht.useInsertionEffect=function(M,F){return z.H.useInsertionEffect(M,F)},ht.useLayoutEffect=function(M,F){return z.H.useLayoutEffect(M,F)},ht.useMemo=function(M,F){return z.H.useMemo(M,F)},ht.useOptimistic=function(M,F){return z.H.useOptimistic(M,F)},ht.useReducer=function(M,F,ee){return z.H.useReducer(M,F,ee)},ht.useRef=function(M){return z.H.useRef(M)},ht.useState=function(M){return z.H.useState(M)},ht.useSyncExternalStore=function(M,F,ee){return z.H.useSyncExternalStore(M,F,ee)},ht.useTransition=function(){return z.H.useTransition()},ht.version="19.2.0",ht}var av;function ap(){return av||(av=1,bd.exports=US()),bd.exports}var q=ap(),Td={exports:{}},Ho={},Ad={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function LS(){return rv||(rv=1,(function(s){function e(I,K){var Q=I.length;I.push(K);e:for(;0<Q;){var G=Q-1>>>1,R=I[G];if(0<l(R,K))I[G]=K,I[Q]=R,Q=G;else break e}}function i(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var K=I[0],Q=I.pop();if(Q!==K){I[0]=Q;e:for(var G=0,R=I.length,M=R>>>1;G<M;){var F=2*(G+1)-1,ee=I[F],ue=F+1,se=I[ue];if(0>l(ee,Q))ue<R&&0>l(se,ee)?(I[G]=se,I[ue]=Q,G=ue):(I[G]=ee,I[F]=Q,G=F);else if(ue<R&&0>l(se,Q))I[G]=se,I[ue]=Q,G=ue;else break e}}return K}function l(I,K){var Q=I.sortIndex-K.sortIndex;return Q!==0?Q:I.id-K.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,y=3,E=!1,b=!1,T=!1,x=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(I){for(var K=i(m);K!==null;){if(K.callback===null)a(m);else if(K.startTime<=I)a(m),K.sortIndex=K.expirationTime,e(p,K);else break;K=i(m)}}function V(I){if(T=!1,U(I),!b)if(i(p)!==null)b=!0,k||(k=!0,ae());else{var K=i(m);K!==null&&re(V,K.startTime-I)}}var k=!1,z=-1,Z=5,D=-1;function N(){return x?!0:!(s.unstable_now()-D<Z)}function j(){if(x=!1,k){var I=s.unstable_now();D=I;var K=!0;try{e:{b=!1,T&&(T=!1,L(z),z=-1),E=!0;var Q=y;try{t:{for(U(I),v=i(p);v!==null&&!(v.expirationTime>I&&N());){var G=v.callback;if(typeof G=="function"){v.callback=null,y=v.priorityLevel;var R=G(v.expirationTime<=I);if(I=s.unstable_now(),typeof R=="function"){v.callback=R,U(I),K=!0;break t}v===i(p)&&a(p),U(I)}else a(p);v=i(p)}if(v!==null)K=!0;else{var M=i(m);M!==null&&re(V,M.startTime-I),K=!1}}break e}finally{v=null,y=Q,E=!1}K=void 0}}finally{K?ae():k=!1}}}var ae;if(typeof O=="function")ae=function(){O(j)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,_e=de.port2;de.port1.onmessage=j,ae=function(){_e.postMessage(null)}}else ae=function(){_(j,0)};function re(I,K){z=_(function(){I(s.unstable_now())},K)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(I){I.callback=null},s.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<I?Math.floor(1e3/I):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(I){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var Q=y;y=K;try{return I()}finally{y=Q}},s.unstable_requestPaint=function(){x=!0},s.unstable_runWithPriority=function(I,K){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=y;y=I;try{return K()}finally{y=Q}},s.unstable_scheduleCallback=function(I,K,Q){var G=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?G+Q:G):Q=G,I){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=Q+R,I={id:g++,callback:K,priorityLevel:I,startTime:Q,expirationTime:R,sortIndex:-1},Q>G?(I.sortIndex=Q,e(m,I),i(p)===null&&I===i(m)&&(T?(L(z),z=-1):T=!0,re(V,Q-G))):(I.sortIndex=R,e(p,I),b||E||(b=!0,k||(k=!0,ae()))),I},s.unstable_shouldYield=N,s.unstable_wrapCallback=function(I){var K=y;return function(){var Q=y;y=K;try{return I.apply(this,arguments)}finally{y=Q}}}})(wd)),wd}var sv;function OS(){return sv||(sv=1,Ad.exports=LS()),Ad.exports}var Rd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function PS(){if(ov)return Nn;ov=1;var s=ap();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Nn.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},Nn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Nn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Nn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),y=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:E}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:y,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Nn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Nn.requestFormReset=function(p){a.d.r(p)},Nn.unstable_batchedUpdates=function(p,m){return p(m)},Nn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.0",Nn}var lv;function IS(){if(lv)return Rd.exports;lv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rd.exports=PS(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function zS(){if(cv)return Ho;cv=1;var s=OS(),e=ap(),i=IS();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return p(u),t;if(h===o)return p(u),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=h;else{for(var S=!1,w=u.child;w;){if(w===r){S=!0,r=u,o=h;break}if(w===o){S=!0,o=u,r=h;break}w=w.sibling}if(!S){for(w=h.child;w;){if(w===r){S=!0,r=h,o=u;break}if(w===o){S=!0,o=h,r=u;break}w=w.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),V=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function ae(t){return t===null||typeof t!="object"?null:(t=j&&t[j]||t["@@iterator"],typeof t=="function"?t:null)}var de=Symbol.for("react.client.reference");function _e(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===de?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case x:return"StrictMode";case V:return"Suspense";case k:return"SuspenseList";case D:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case U:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:_e(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return _e(t(n))}catch{}}return null}var re=Array.isArray,I=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},G=[],R=-1;function M(t){return{current:t}}function F(t){0>R||(t.current=G[R],G[R]=null,R--)}function ee(t,n){R++,G[R]=t.current,t.current=n}var ue=M(null),se=M(null),X=M(null),$=M(null);function ye(t,n){switch(ee(X,n),ee(se,t),ee(ue,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b0(n),t=T0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}F(ue),ee(ue,t)}function Ae(){F(ue),F(se),F(X)}function Ue(t){t.memoizedState!==null&&ee($,t);var n=ue.current,r=T0(n,t.type);n!==r&&(ee(se,t),ee(ue,r))}function We(t){se.current===t&&(F(ue),F(se)),$.current===t&&(F($),Po._currentValue=Q)}var lt,H;function Ve(t){if(lt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",H=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+t+H}var Ye=!1;function Xe(t,n){if(!t||Ye)return"";Ye=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(ge){var fe=ge}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(ge){fe=ge}t.call(Ee.prototype)}}else{try{throw Error()}catch(ge){fe=ge}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(ge){if(ge&&fe&&typeof ge.stack=="string")return[ge.stack,fe.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],w=h[1];if(S&&w){var W=S.split(`
`),ce=w.split(`
`);for(u=o=0;o<W.length&&!W[o].includes("DetermineComponentFrameRoot");)o++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(o===W.length||u===ce.length)for(o=W.length-1,u=ce.length-1;1<=o&&0<=u&&W[o]!==ce[u];)u--;for(;1<=o&&0<=u;o--,u--)if(W[o]!==ce[u]){if(o!==1||u!==1)do if(o--,u--,0>u||W[o]!==ce[u]){var xe=`
`+W[o].replace(" at new "," at ");return t.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",t.displayName)),xe}while(1<=o&&0<=u);break}}}finally{Ye=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Ve(r):""}function Be(t,n){switch(t.tag){case 26:case 27:case 5:return Ve(t.type);case 16:return Ve("Lazy");case 13:return t.child!==n&&n!==null?Ve("Suspense Fallback"):Ve("Suspense");case 19:return Ve("SuspenseList");case 0:case 15:return Xe(t.type,!1);case 11:return Xe(t.type.render,!1);case 1:return Xe(t.type,!0);case 31:return Ve("Activity");default:return""}}function yt(t){try{var n="",r=null;do n+=Be(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var He=Object.prototype.hasOwnProperty,rt=s.unstable_scheduleCallback,$t=s.unstable_cancelCallback,Kt=s.unstable_shouldYield,B=s.unstable_requestPaint,A=s.unstable_now,oe=s.unstable_getCurrentPriorityLevel,Se=s.unstable_ImmediatePriority,we=s.unstable_UserBlockingPriority,ve=s.unstable_NormalPriority,$e=s.unstable_LowPriority,Ne=s.unstable_IdlePriority,Ze=s.log,et=s.unstable_setDisableYieldValue,Ce=null,Le=null;function nt(t){if(typeof Ze=="function"&&et(t),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(Ce,t)}catch{}}var Ge=Math.clz32?Math.clz32:J,Pe=Math.log,pt=Math.LN2;function J(t){return t>>>=0,t===0?32:31-(Pe(t)/pt|0)|0}var De=256,Oe=262144,ke=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var w=o&134217727;return w!==0?(o=w&~h,o!==0?u=Re(o):(S&=w,S!==0?u=Re(S):r||(r=w&~t,r!==0&&(u=Re(r))))):(w=o&~h,w!==0?u=Re(w):S!==0?u=Re(S):r||(r=o&~t,r!==0&&(u=Re(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function je(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=ke;return ke<<=1,(ke&62914560)===0&&(ke=4194304),t}function Nt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function On(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,r,o,u,h){var S=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var w=t.entanglements,W=t.expirationTimes,ce=t.hiddenUpdates;for(r=S&~r;0<r;){var xe=31-Ge(r),Ee=1<<xe;w[xe]=0,W[xe]=-1;var fe=ce[xe];if(fe!==null)for(ce[xe]=null,xe=0;xe<fe.length;xe++){var ge=fe[xe];ge!==null&&(ge.lane&=-536870913)}r&=~Ee}o!==0&&Ys(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function Ys(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Di(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Ge(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function zr(t,n){var r=n&-n;return r=(r&42)!==0?1:Br(r),(r&(t.suspendedLanes|n))!==0?0:r}function Br(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ir(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:Y0(t.type))}function Zs(t,n){var r=K.p;try{return K.p=t,n()}finally{K.p=r}}var Zn=Math.random().toString(36).slice(2),un="__reactFiber$"+Zn,En="__reactProps$"+Zn,Sa="__reactContainer$"+Zn,Ks="__reactEvents$"+Zn,gu="__reactListeners$"+Zn,vu="__reactHandles$"+Zn,dl="__reactResources$"+Zn,ar="__reactMarker$"+Zn;function C(t){delete t[un],delete t[En],delete t[Ks],delete t[gu],delete t[vu]}function te(t){var n=t[un];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Sa]||r[un]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=U0(t);t!==null;){if(r=t[un])return r;t=U0(t)}return n}t=r,r=t.parentNode}return null}function he(t){if(t=t[un]||t[Sa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function me(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function ie(t){var n=t[dl];return n||(n=t[dl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Te(t){t[ar]=!0}var Ie=new Set,Ke={};function Fe(t,n){it(t,n),it(t+"Capture",n)}function it(t,n){for(Ke[t]=n,t=0;t<n.length;t++)Ie.add(n[t])}var ct=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),at={},xt={};function Bt(t){return He.call(xt,t)?!0:He.call(at,t)?!1:ct.test(t)?xt[t]=!0:(at[t]=!0,!1)}function qt(t,n,r){if(Bt(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Ft(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function St(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function Qe(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ut(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){r=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function bn(t){if(!t._valueTracker){var n=Zt(t)?"checked":"value";t._valueTracker=Ut(t,n,""+t[n])}}function Wi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Zt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rr=/[\n"\\]/g;function bt(t){return t.replace(rr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(t,n,r,o,u,h,S,w){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Qe(n)):t.value!==""+Qe(n)&&(t.value=""+Qe(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?gn(t,S,Qe(n)):r!=null?gn(t,S,Qe(r)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?t.name=""+Qe(w):t.removeAttribute("name")}function Pn(t,n,r,o,u,h,S,w){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){bn(t);return}r=r!=null?""+Qe(r):"",n=n!=null?""+Qe(n):r,w||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=w?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),bn(t)}function gn(t,n,r){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function on(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Qe(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Hr(t,n,r){if(n!=null&&(n=""+Qe(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Qe(r):""}function Ni(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(re(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Qe(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),bn(t)}function Gr(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||bx.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Mp(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Sp(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Sp(t,h,n[h])}function _u(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hl(t){return Ax.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var xu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function Ep(t){var n=he(t);if(n&&(t=n.stateNode)){var r=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Dn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+bt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(a(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Wi(o)}break e;case"textarea":Hr(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&on(t,!!r.multiple,n,!1)}}}var Su=!1;function bp(t,n,r){if(Su)return t(n,r);Su=!0;try{var o=t(n);return o}finally{if(Su=!1,(Vr!==null||kr!==null)&&(ec(),Vr&&(n=Vr,t=kr,kr=Vr=null,Ep(n),t)))for(n=0;n<t.length;n++)Ep(t[n])}}function Qs(t,n){var r=t.stateNode;if(r===null)return null;var o=r[En]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(ji)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Mu=!1}var Ma=null,Eu=null,pl=null;function Tp(){if(pl)return pl;var t,n=Eu,r=n.length,o,u="value"in Ma?Ma.value:Ma.textContent,h=u.length;for(t=0;t<r&&n[t]===u[t];t++);var S=r-t;for(o=1;o<=S&&n[r-o]===u[h-o];o++);return pl=u.slice(t,1<o?1-o:void 0)}function ml(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function gl(){return!0}function Ap(){return!1}function Bn(t){function n(r,o,u,h,S){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var w in t)t.hasOwnProperty(w)&&(r=t[w],this[w]=r?r(h):h[w]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?gl:Ap,this.isPropagationStopped=Ap,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vl=Bn(sr),$s=v({},sr,{view:0,detail:0}),wx=Bn($s),bu,Tu,eo,_l=v({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==eo&&(eo&&t.type==="mousemove"?(bu=t.screenX-eo.screenX,Tu=t.screenY-eo.screenY):Tu=bu=0,eo=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),wp=Bn(_l),Rx=v({},_l,{dataTransfer:0}),Cx=Bn(Rx),Dx=v({},$s,{relatedTarget:0}),Au=Bn(Dx),Nx=v({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=Bn(Nx),Lx=v({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=Bn(Lx),Px=v({},sr,{data:0}),Rp=Bn(Px),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Bx[t])?!!n[t]:!1}function wu(){return Fx}var Hx=v({},$s,{key:function(t){if(t.key){var n=Ix[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ml(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?ml(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ml(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=Bn(Hx),Vx=v({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Bn(Vx),kx=v({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Wx=Bn(kx),Xx=v({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=Bn(Xx),qx=v({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Bn(qx),Zx=v({},sr,{newState:0,oldState:0}),Kx=Bn(Zx),Qx=[9,13,27,32],Ru=ji&&"CompositionEvent"in window,to=null;ji&&"documentMode"in document&&(to=document.documentMode);var Jx=ji&&"TextEvent"in window&&!to,Dp=ji&&(!Ru||to&&8<to&&11>=to),Np=" ",Up=!1;function Lp(t,n){switch(t){case"keyup":return Qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function $x(t,n){switch(t){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Up=!0,Np);case"textInput":return t=n.data,t===Np&&Up?null:t;default:return null}}function ey(t,n){if(Wr)return t==="compositionend"||!Ru&&Lp(t,n)?(t=Tp(),pl=Eu=Ma=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ty[t.type]:n==="textarea"}function Ip(t,n,r,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=oc(n,"onChange"),0<n.length&&(r=new vl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var no=null,io=null;function ny(t){_0(t,0)}function xl(t){var n=me(t);if(Wi(n))return t}function zp(t,n){if(t==="change")return n}var Bp=!1;if(ji){var Cu;if(ji){var Du="oninput"in document;if(!Du){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Du=typeof Fp.oninput=="function"}Cu=Du}else Cu=!1;Bp=Cu&&(!document.documentMode||9<document.documentMode)}function Hp(){no&&(no.detachEvent("onpropertychange",Gp),io=no=null)}function Gp(t){if(t.propertyName==="value"&&xl(io)){var n=[];Ip(n,io,t,yu(t)),bp(ny,n)}}function iy(t,n,r){t==="focusin"?(Hp(),no=n,io=r,no.attachEvent("onpropertychange",Gp)):t==="focusout"&&Hp()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return xl(io)}function ry(t,n){if(t==="click")return xl(n)}function sy(t,n){if(t==="input"||t==="change")return xl(n)}function oy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:oy;function ao(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!He.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,n){var r=Vp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vp(r)}}function Wp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=yn(t.document)}return n}function Nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ly=ji&&"documentMode"in document&&11>=document.documentMode,Xr=null,Uu=null,ro=null,Lu=!1;function jp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lu||Xr==null||Xr!==yn(o)||(o=Xr,"selectionStart"in o&&Nu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ro&&ao(ro,o)||(ro=o,o=oc(Uu,"onSelect"),0<o.length&&(n=new vl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Xr)))}function or(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var jr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Ou={},qp={};ji&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function lr(t){if(Ou[t])return Ou[t];if(!jr[t])return t;var n=jr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in qp)return Ou[t]=n[r];return t}var Yp=lr("animationend"),Zp=lr("animationiteration"),Kp=lr("animationstart"),cy=lr("transitionrun"),uy=lr("transitionstart"),fy=lr("transitioncancel"),Qp=lr("transitionend"),Jp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function yi(t,n){Jp.set(t,n),Fe(n,[t])}var yl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],qr=0,Iu=0;function Sl(){for(var t=qr,n=Iu=qr=0;n<t;){var r=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&$p(r,u,h)}}function Ml(t,n,r,o){ci[qr++]=t,ci[qr++]=n,ci[qr++]=r,ci[qr++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,r,o){return Ml(t,n,r,o),El(t)}function cr(t,n){return Ml(t,null,null,n),El(t)}function $p(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ge(r),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function El(t){if(50<Ro)throw Ro=0,qf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function dy(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,r,o){return new dy(t,n,r,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var r=t.alternate;return r===null?(r=Qn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function em(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function bl(t,n,r,o,u,h){var S=0;if(o=t,typeof t=="function")Bu(t)&&(S=1);else if(typeof t=="string")S=vS(t,r,ue.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case D:return t=Qn(31,r,n,u),t.elementType=D,t.lanes=h,t;case T:return ur(r.children,u,h,n);case x:S=8,u|=24;break;case _:return t=Qn(12,r,n,u|2),t.elementType=_,t.lanes=h,t;case V:return t=Qn(13,r,n,u),t.elementType=V,t.lanes=h,t;case k:return t=Qn(19,r,n,u),t.elementType=k,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:S=10;break e;case L:S=9;break e;case U:S=11;break e;case z:S=14;break e;case Z:S=16,o=null;break e}S=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=Qn(S,r,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function ur(t,n,r,o){return t=Qn(7,t,o,n),t.lanes=r,t}function Fu(t,n,r){return t=Qn(6,t,null,n),t.lanes=r,t}function tm(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,r){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var nm=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var r=nm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:yt(n)},nm.set(t,n),n)}return{value:t,source:n,stack:yt(n)}}var Zr=[],Kr=0,Tl=null,so=0,fi=[],di=0,Ea=null,Ui=1,Li="";function Yi(t,n){Zr[Kr++]=so,Zr[Kr++]=Tl,Tl=t,so=n}function im(t,n,r){fi[di++]=Ui,fi[di++]=Li,fi[di++]=Ea,Ea=t;var o=Ui;t=Li;var u=32-Ge(o)-1;o&=~(1<<u),r+=1;var h=32-Ge(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ui=1<<32-Ge(n)+u|r<<u|o,Li=h+t}else Ui=1<<h|r<<u|o,Li=t}function Gu(t){t.return!==null&&(Yi(t,1),im(t,1,0))}function Vu(t){for(;t===Tl;)Tl=Zr[--Kr],Zr[Kr]=null,so=Zr[--Kr],Zr[Kr]=null;for(;t===Ea;)Ea=fi[--di],fi[di]=null,Li=fi[--di],fi[di]=null,Ui=fi[--di],fi[di]=null}function am(t,n){fi[di++]=Ui,fi[di++]=Li,fi[di++]=Ea,Ui=n.id,Li=n.overflow,Ea=t}var Tn=null,Qt=null,Ct=!1,ba=null,hi=!1,ku=Error(a(519));function Ta(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw oo(ui(n,t)),ku}function rm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[un]=t,n[En]=o,r){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(r=0;r<Do.length;r++)Et(Do[r],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||M0(n.textContent,r)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ta(t,!0)}function sm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Tn=Tn.return}}function Qr(t){if(t!==Tn)return!1;if(!Ct)return sm(t),Ct=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||ld(t.type,t.memoizedProps)),r=!r),r&&Qt&&Ta(t),sm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qt=N0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qt=N0(t)}else n===27?(n=Qt,Fa(t.type)?(t=hd,hd=null,Qt=t):Qt=n):Qt=Tn?mi(t.stateNode.nextSibling):null;return!0}function fr(){Qt=Tn=null,Ct=!1}function Wu(){var t=ba;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),ba=null),t}function oo(t){ba===null?ba=[t]:ba.push(t)}var Xu=M(null),dr=null,Zi=null;function Aa(t,n,r){ee(Xu,n._currentValue),n._currentValue=r}function Ki(t){t._currentValue=Xu.current,F(Xu)}function ju(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function qu(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var w=h;h=u;for(var W=0;W<n.length;W++)if(w.context===n[W]){h.lanes|=r,w=h.alternate,w!==null&&(w.lanes|=r),ju(h.return,r,t),o||(S=null);break e}h=w.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(a(341));S.lanes|=r,h=S.alternate,h!==null&&(h.lanes|=r),ju(S,r,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Jr(t,n,r,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var w=u.type;Kn(u.pendingProps.value,S.value)||(t!==null?t.push(w):t=[w])}}else if(u===$.current){if(S=u.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Po):t=[Po])}u=u.return}t!==null&&qu(n,t,r,o),n.flags|=262144}function Al(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return om(dr,t)}function wl(t,n){return dr===null&&hr(t),om(t,n)}function om(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Zi===null){if(t===null)throw Error(a(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return r}var hy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},py=s.unstable_scheduleCallback,my=s.unstable_NormalPriority,fn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new hy,data:new Map,refCount:0}}function lo(t){t.refCount--,t.refCount===0&&py(my,function(){t.controller.abort()})}var co=null,Zu=0,$r=0,es=null;function gy(t,n){if(co===null){var r=co=[];Zu=0,$r=$f(),es={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Zu++,n.then(lm,lm),n}function lm(){if(--Zu===0&&co!==null){es!==null&&(es.status="fulfilled");var t=co;co=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vy(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var cm=I.S;I.S=function(t,n){jg=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gy(t,n),cm!==null&&cm(t,n)};var pr=M(null);function Ku(){var t=pr.current;return t!==null?t:Yt.pooledCache}function Rl(t,n){n===null?ee(pr,pr.current):ee(pr,n.pool)}function um(){var t=Ku();return t===null?null:{parent:fn._currentValue,pool:t}}var ts=Error(a(460)),Qu=Error(a(474)),Cl=Error(a(542)),Dl={then:function(){}};function fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Xi,Xi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t}throw gr=n,ts}}function mr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(gr=r,ts):r}}var gr=null;function hm(){if(gr===null)throw Error(a(459));var t=gr;return gr=null,t}function pm(t){if(t===ts||t===Cl)throw Error(a(483))}var ns=null,uo=0;function Nl(t){var n=uo;return uo+=1,ns===null&&(ns=[]),dm(ns,t,n)}function fo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ul(t,n){throw n.$$typeof===y?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mm(t){function n(ne,Y){if(t){var le=ne.deletions;le===null?(ne.deletions=[Y],ne.flags|=16):le.push(Y)}}function r(ne,Y){if(!t)return null;for(;Y!==null;)n(ne,Y),Y=Y.sibling;return null}function o(ne){for(var Y=new Map;ne!==null;)ne.key!==null?Y.set(ne.key,ne):Y.set(ne.index,ne),ne=ne.sibling;return Y}function u(ne,Y){return ne=qi(ne,Y),ne.index=0,ne.sibling=null,ne}function h(ne,Y,le){return ne.index=le,t?(le=ne.alternate,le!==null?(le=le.index,le<Y?(ne.flags|=67108866,Y):le):(ne.flags|=67108866,Y)):(ne.flags|=1048576,Y)}function S(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function w(ne,Y,le,Me){return Y===null||Y.tag!==6?(Y=Fu(le,ne.mode,Me),Y.return=ne,Y):(Y=u(Y,le),Y.return=ne,Y)}function W(ne,Y,le,Me){var st=le.type;return st===T?xe(ne,Y,le.props.children,Me,le.key):Y!==null&&(Y.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Z&&mr(st)===Y.type)?(Y=u(Y,le.props),fo(Y,le),Y.return=ne,Y):(Y=bl(le.type,le.key,le.props,null,ne.mode,Me),fo(Y,le),Y.return=ne,Y)}function ce(ne,Y,le,Me){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==le.containerInfo||Y.stateNode.implementation!==le.implementation?(Y=Hu(le,ne.mode,Me),Y.return=ne,Y):(Y=u(Y,le.children||[]),Y.return=ne,Y)}function xe(ne,Y,le,Me,st){return Y===null||Y.tag!==7?(Y=ur(le,ne.mode,Me,st),Y.return=ne,Y):(Y=u(Y,le),Y.return=ne,Y)}function Ee(ne,Y,le){if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return Y=Fu(""+Y,ne.mode,le),Y.return=ne,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case E:return le=bl(Y.type,Y.key,Y.props,null,ne.mode,le),fo(le,Y),le.return=ne,le;case b:return Y=Hu(Y,ne.mode,le),Y.return=ne,Y;case Z:return Y=mr(Y),Ee(ne,Y,le)}if(re(Y)||ae(Y))return Y=ur(Y,ne.mode,le,null),Y.return=ne,Y;if(typeof Y.then=="function")return Ee(ne,Nl(Y),le);if(Y.$$typeof===O)return Ee(ne,wl(ne,Y),le);Ul(ne,Y)}return null}function fe(ne,Y,le,Me){var st=Y!==null?Y.key:null;if(typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint")return st!==null?null:w(ne,Y,""+le,Me);if(typeof le=="object"&&le!==null){switch(le.$$typeof){case E:return le.key===st?W(ne,Y,le,Me):null;case b:return le.key===st?ce(ne,Y,le,Me):null;case Z:return le=mr(le),fe(ne,Y,le,Me)}if(re(le)||ae(le))return st!==null?null:xe(ne,Y,le,Me,null);if(typeof le.then=="function")return fe(ne,Y,Nl(le),Me);if(le.$$typeof===O)return fe(ne,Y,wl(ne,le),Me);Ul(ne,le)}return null}function ge(ne,Y,le,Me,st){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ne=ne.get(le)||null,w(Y,ne,""+Me,st);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case E:return ne=ne.get(Me.key===null?le:Me.key)||null,W(Y,ne,Me,st);case b:return ne=ne.get(Me.key===null?le:Me.key)||null,ce(Y,ne,Me,st);case Z:return Me=mr(Me),ge(ne,Y,le,Me,st)}if(re(Me)||ae(Me))return ne=ne.get(le)||null,xe(Y,ne,Me,st,null);if(typeof Me.then=="function")return ge(ne,Y,le,Nl(Me),st);if(Me.$$typeof===O)return ge(ne,Y,le,wl(Y,Me),st);Ul(Y,Me)}return null}function qe(ne,Y,le,Me){for(var st=null,Lt=null,tt=Y,gt=Y=0,At=null;tt!==null&&gt<le.length;gt++){tt.index>gt?(At=tt,tt=null):At=tt.sibling;var Ot=fe(ne,tt,le[gt],Me);if(Ot===null){tt===null&&(tt=At);break}t&&tt&&Ot.alternate===null&&n(ne,tt),Y=h(Ot,Y,gt),Lt===null?st=Ot:Lt.sibling=Ot,Lt=Ot,tt=At}if(gt===le.length)return r(ne,tt),Ct&&Yi(ne,gt),st;if(tt===null){for(;gt<le.length;gt++)tt=Ee(ne,le[gt],Me),tt!==null&&(Y=h(tt,Y,gt),Lt===null?st=tt:Lt.sibling=tt,Lt=tt);return Ct&&Yi(ne,gt),st}for(tt=o(tt);gt<le.length;gt++)At=ge(tt,ne,gt,le[gt],Me),At!==null&&(t&&At.alternate!==null&&tt.delete(At.key===null?gt:At.key),Y=h(At,Y,gt),Lt===null?st=At:Lt.sibling=At,Lt=At);return t&&tt.forEach(function(Wa){return n(ne,Wa)}),Ct&&Yi(ne,gt),st}function ot(ne,Y,le,Me){if(le==null)throw Error(a(151));for(var st=null,Lt=null,tt=Y,gt=Y=0,At=null,Ot=le.next();tt!==null&&!Ot.done;gt++,Ot=le.next()){tt.index>gt?(At=tt,tt=null):At=tt.sibling;var Wa=fe(ne,tt,Ot.value,Me);if(Wa===null){tt===null&&(tt=At);break}t&&tt&&Wa.alternate===null&&n(ne,tt),Y=h(Wa,Y,gt),Lt===null?st=Wa:Lt.sibling=Wa,Lt=Wa,tt=At}if(Ot.done)return r(ne,tt),Ct&&Yi(ne,gt),st;if(tt===null){for(;!Ot.done;gt++,Ot=le.next())Ot=Ee(ne,Ot.value,Me),Ot!==null&&(Y=h(Ot,Y,gt),Lt===null?st=Ot:Lt.sibling=Ot,Lt=Ot);return Ct&&Yi(ne,gt),st}for(tt=o(tt);!Ot.done;gt++,Ot=le.next())Ot=ge(tt,ne,gt,Ot.value,Me),Ot!==null&&(t&&Ot.alternate!==null&&tt.delete(Ot.key===null?gt:Ot.key),Y=h(Ot,Y,gt),Lt===null?st=Ot:Lt.sibling=Ot,Lt=Ot);return t&&tt.forEach(function(RS){return n(ne,RS)}),Ct&&Yi(ne,gt),st}function Xt(ne,Y,le,Me){if(typeof le=="object"&&le!==null&&le.type===T&&le.key===null&&(le=le.props.children),typeof le=="object"&&le!==null){switch(le.$$typeof){case E:e:{for(var st=le.key;Y!==null;){if(Y.key===st){if(st=le.type,st===T){if(Y.tag===7){r(ne,Y.sibling),Me=u(Y,le.props.children),Me.return=ne,ne=Me;break e}}else if(Y.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Z&&mr(st)===Y.type){r(ne,Y.sibling),Me=u(Y,le.props),fo(Me,le),Me.return=ne,ne=Me;break e}r(ne,Y);break}else n(ne,Y);Y=Y.sibling}le.type===T?(Me=ur(le.props.children,ne.mode,Me,le.key),Me.return=ne,ne=Me):(Me=bl(le.type,le.key,le.props,null,ne.mode,Me),fo(Me,le),Me.return=ne,ne=Me)}return S(ne);case b:e:{for(st=le.key;Y!==null;){if(Y.key===st)if(Y.tag===4&&Y.stateNode.containerInfo===le.containerInfo&&Y.stateNode.implementation===le.implementation){r(ne,Y.sibling),Me=u(Y,le.children||[]),Me.return=ne,ne=Me;break e}else{r(ne,Y);break}else n(ne,Y);Y=Y.sibling}Me=Hu(le,ne.mode,Me),Me.return=ne,ne=Me}return S(ne);case Z:return le=mr(le),Xt(ne,Y,le,Me)}if(re(le))return qe(ne,Y,le,Me);if(ae(le)){if(st=ae(le),typeof st!="function")throw Error(a(150));return le=st.call(le),ot(ne,Y,le,Me)}if(typeof le.then=="function")return Xt(ne,Y,Nl(le),Me);if(le.$$typeof===O)return Xt(ne,Y,wl(ne,le),Me);Ul(ne,le)}return typeof le=="string"&&le!==""||typeof le=="number"||typeof le=="bigint"?(le=""+le,Y!==null&&Y.tag===6?(r(ne,Y.sibling),Me=u(Y,le),Me.return=ne,ne=Me):(r(ne,Y),Me=Fu(le,ne.mode,Me),Me.return=ne,ne=Me),S(ne)):r(ne,Y)}return function(ne,Y,le,Me){try{uo=0;var st=Xt(ne,Y,le,Me);return ns=null,st}catch(tt){if(tt===ts||tt===Cl)throw tt;var Lt=Qn(29,tt,null,ne.mode);return Lt.lanes=Me,Lt.return=ne,Lt}finally{}}}var vr=mm(!0),gm=mm(!1),wa=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=El(t),$p(t,null,r),n}return Ml(t,o,n,r),El(t)}function ho(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Di(t,r)}}function ef(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var tf=!1;function po(){if(tf){var t=es;if(t!==null)throw t}}function mo(t,n,r,o){tf=!1;var u=t.updateQueue;wa=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,w=u.shared.pending;if(w!==null){u.shared.pending=null;var W=w,ce=W.next;W.next=null,S===null?h=ce:S.next=ce,S=W;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,w=xe.lastBaseUpdate,w!==S&&(w===null?xe.firstBaseUpdate=ce:w.next=ce,xe.lastBaseUpdate=W))}if(h!==null){var Ee=u.baseState;S=0,xe=ce=W=null,w=h;do{var fe=w.lane&-536870913,ge=fe!==w.lane;if(ge?(Tt&fe)===fe:(o&fe)===fe){fe!==0&&fe===$r&&(tf=!0),xe!==null&&(xe=xe.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var qe=t,ot=w;fe=n;var Xt=r;switch(ot.tag){case 1:if(qe=ot.payload,typeof qe=="function"){Ee=qe.call(Xt,Ee,fe);break e}Ee=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=ot.payload,fe=typeof qe=="function"?qe.call(Xt,Ee,fe):qe,fe==null)break e;Ee=v({},Ee,fe);break e;case 2:wa=!0}}fe=w.callback,fe!==null&&(t.flags|=64,ge&&(t.flags|=8192),ge=u.callbacks,ge===null?u.callbacks=[fe]:ge.push(fe))}else ge={lane:fe,tag:w.tag,payload:w.payload,callback:w.callback,next:null},xe===null?(ce=xe=ge,W=Ee):xe=xe.next=ge,S|=fe;if(w=w.next,w===null){if(w=u.shared.pending,w===null)break;ge=w,w=ge.next,ge.next=null,u.lastBaseUpdate=ge,u.shared.pending=null}}while(!0);xe===null&&(W=Ee),u.baseState=W,u.firstBaseUpdate=ce,u.lastBaseUpdate=xe,h===null&&(u.shared.lanes=0),Oa|=S,t.lanes=S,t.memoizedState=Ee}}function vm(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function _m(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)vm(r[t],n)}var is=M(null),Ll=M(0);function xm(t,n){t=ra,ee(Ll,t),ee(is,n),ra=t|n.baseLanes}function nf(){ee(Ll,ra),ee(is,is.current)}function af(){ra=Ll.current,F(is),F(Ll)}var Jn=M(null),pi=null;function Da(t){var n=t.alternate;ee(ln,ln.current&1),ee(Jn,t),pi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(pi=t)}function rf(t){ee(ln,ln.current),ee(Jn,t),pi===null&&(pi=t)}function ym(t){t.tag===22?(ee(ln,ln.current),ee(Jn,t),pi===null&&(pi=t)):Na()}function Na(){ee(ln,ln.current),ee(Jn,Jn.current)}function $n(t){F(Jn),pi===t&&(pi=null),F(ln)}var ln=M(0);function Ol(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||fd(r)||dd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,mt=null,kt=null,dn=null,Pl=!1,as=!1,_r=!1,Il=0,go=0,rs=null,_y=0;function nn(){throw Error(a(321))}function sf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Kn(t[r],n[r]))return!1;return!0}function of(t,n,r,o,u,h){return Qi=h,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=t===null||t.memoizedState===null?ig:Mf,_r=!1,h=r(o,u),_r=!1,as&&(h=Mm(n,r,o,u)),Sm(t),h}function Sm(t){I.H=xo;var n=kt!==null&&kt.next!==null;if(Qi=0,dn=kt=mt=null,Pl=!1,go=0,rs=null,n)throw Error(a(300));t===null||hn||(t=t.dependencies,t!==null&&Al(t)&&(hn=!0))}function Mm(t,n,r,o){mt=t;var u=0;do{if(as&&(rs=null),go=0,as=!1,25<=u)throw Error(a(301));if(u+=1,dn=kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}I.H=ag,h=n(r,o)}while(as);return h}function xy(){var t=I.H,n=t.useState()[0];return n=typeof n.then=="function"?vo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(mt.flags|=1024),n}function lf(){var t=Il!==0;return Il=0,t}function cf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function uf(t){if(Pl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Pl=!1}Qi=0,dn=kt=mt=null,as=!1,go=Il=0,rs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?mt.memoizedState=dn=t:dn=dn.next=t,dn}function cn(){if(kt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=dn===null?mt.memoizedState:dn.next;if(n!==null)dn=n,kt=t;else{if(t===null)throw mt.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},dn===null?mt.memoizedState=dn=t:dn=dn.next=t}return dn}function zl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function vo(t){var n=go;return go+=1,rs===null&&(rs=[]),t=dm(rs,t,n),n=mt,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?ig:Mf),t}function Bl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return vo(t);if(t.$$typeof===O)return An(t)}throw Error(a(438,String(t)))}function ff(t){var n=null,r=mt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=zl(),mt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=N;return n.index++,r}function Ji(t,n){return typeof n=="function"?n(t):n}function Fl(t){var n=cn();return df(n,kt,t)}function df(t,n,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var w=S=null,W=null,ce=n,xe=!1;do{var Ee=ce.lane&-536870913;if(Ee!==ce.lane?(Tt&Ee)===Ee:(Qi&Ee)===Ee){var fe=ce.revertLane;if(fe===0)W!==null&&(W=W.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),Ee===$r&&(xe=!0);else if((Qi&fe)===fe){ce=ce.next,fe===$r&&(xe=!0);continue}else Ee={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},W===null?(w=W=Ee,S=h):W=W.next=Ee,mt.lanes|=fe,Oa|=fe;Ee=ce.action,_r&&r(h,Ee),h=ce.hasEagerState?ce.eagerState:r(h,Ee)}else fe={lane:Ee,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},W===null?(w=W=fe,S=h):W=W.next=fe,mt.lanes|=Ee,Oa|=Ee;ce=ce.next}while(ce!==null&&ce!==n);if(W===null?S=h:W.next=w,!Kn(h,t.memoizedState)&&(hn=!0,xe&&(r=es,r!==null)))throw r;t.memoizedState=h,t.baseState=S,t.baseQueue=W,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=cn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);Kn(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function Em(t,n,r){var o=mt,u=cn(),h=Ct;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var S=!Kn((kt||u).memoizedState,r);if(S&&(u.memoizedState=r,hn=!0),u=u.queue,gf(Am.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},Tm.bind(null,o,u,r,n),null),Yt===null)throw Error(a(349));h||(Qi&127)!==0||bm(o,n,r)}return r}function bm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=mt.updateQueue,n===null?(n=zl(),mt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Tm(t,n,r,o){n.value=r,n.getSnapshot=o,wm(n)&&Rm(t)}function Am(t,n,r){return r(function(){wm(n)&&Rm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Kn(t,r)}catch{return!0}}function Rm(t){var n=cr(t,2);n!==null&&kn(n,t,2)}function pf(t){var n=In();if(typeof t=="function"){var r=t;if(t=r(),_r){nt(!0);try{r()}finally{nt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function Cm(t,n,r,o){return t.baseState=r,df(t,kt,typeof o=="function"?o:Ji)}function yy(t,n,r,o,u){if(Vl(t))throw Error(a(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};I.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,Dm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function Dm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=I.T,S={};I.T=S;try{var w=r(u,o),W=I.S;W!==null&&W(S,w),Nm(t,n,w)}catch(ce){mf(t,n,ce)}finally{h!==null&&S.types!==null&&(h.types=S.types),I.T=h}}else try{h=r(u,o),Nm(t,n,h)}catch(ce){mf(t,n,ce)}}function Nm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Um(t,n,o)},function(o){return mf(t,n,o)}):Um(t,n,r)}function Um(t,n,r){n.status="fulfilled",n.value=r,Lm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Dm(t,r)))}function mf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Lm(n),n=n.next;while(n!==o)}t.action=null}function Lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Om(t,n){return n}function Pm(t,n){if(Ct){var r=Yt.formState;if(r!==null){e:{var o=mt;if(Ct){if(Qt){t:{for(var u=Qt,h=hi;u.nodeType!==8;){if(!h){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qt=mi(u.nextSibling),o=u.data==="F!";break e}}Ta(o)}o=!1}o&&(n=r[0])}}return r=In(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},r.queue=o,r=eg.bind(null,mt,o),o.dispatch=r,o=pf(!1),h=Sf.bind(null,mt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=yy.bind(null,mt,u,h,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function Im(t){var n=cn();return zm(n,kt,t)}function zm(t,n,r){if(n=df(t,n,Om)[0],t=Fl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=vo(n)}catch(S){throw S===ts?Cl:S}else o=n;n=cn();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(mt.flags|=2048,ss(9,{destroy:void 0},Sy.bind(null,u,r),null)),[o,h,t]}function Sy(t,n){t.action=n}function Bm(t){var n=cn(),r=kt;if(r!==null)return zm(n,r,t);cn(),n=n.memoizedState,r=cn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ss(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=zl(),mt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Fm(){return cn().memoizedState}function Hl(t,n,r,o){var u=In();mt.flags|=t,u.memoizedState=ss(1|n,{destroy:void 0},r,o===void 0?null:o)}function Gl(t,n,r,o){var u=cn();o=o===void 0?null:o;var h=u.memoizedState.inst;kt!==null&&o!==null&&sf(o,kt.memoizedState.deps)?u.memoizedState=ss(n,h,r,o):(mt.flags|=t,u.memoizedState=ss(1|n,h,r,o))}function Hm(t,n){Hl(8390656,8,t,n)}function gf(t,n){Gl(2048,8,t,n)}function My(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=zl(),mt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Gm(t){var n=cn().memoizedState;return My({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Vm(t,n){return Gl(4,2,t,n)}function km(t,n){return Gl(4,4,t,n)}function Wm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xm(t,n,r){r=r!=null?r.concat([t]):null,Gl(4,4,Wm.bind(null,n,t),r)}function vf(){}function jm(t,n){var r=cn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function qm(t,n){var r=cn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=t(),_r){nt(!0);try{t()}finally{nt(!1)}}return r.memoizedState=[o,n],o}function _f(t,n,r){return r===void 0||(Qi&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=Yg(),mt.lanes|=t,Oa|=t,r)}function Ym(t,n,r,o){return Kn(r,n)?r:is.current!==null?(t=_f(t,r,o),Kn(t,n)||(hn=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(Tt&261930)===0?(hn=!0,t.memoizedState=r):(t=Yg(),mt.lanes|=t,Oa|=t,n)}function Zm(t,n,r,o,u){var h=K.p;K.p=h!==0&&8>h?h:8;var S=I.T,w={};I.T=w,Sf(t,!1,n,r);try{var W=u(),ce=I.S;if(ce!==null&&ce(w,W),W!==null&&typeof W=="object"&&typeof W.then=="function"){var xe=vy(W,o);_o(t,n,xe,ni(t))}else _o(t,n,o,ni(t))}catch(Ee){_o(t,n,{then:function(){},status:"rejected",reason:Ee},ni())}finally{K.p=h,S!==null&&w.types!==null&&(S.types=w.types),I.T=S}}function Ey(){}function xf(t,n,r,o){if(t.tag!==5)throw Error(a(476));var u=Km(t).queue;Zm(t,u,n,Q,r===null?Ey:function(){return Qm(t),r(o)})}function Km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:Q},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qm(t){var n=Km(t);n.next===null&&(n=t.alternate.memoizedState),_o(t,n.next.queue,{},ni())}function yf(){return An(Po)}function Jm(){return cn().memoizedState}function $m(){return cn().memoizedState}function by(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ni();t=Ra(r);var o=Ca(n,t,r);o!==null&&(kn(o,n,r),ho(o,n,r)),n={cache:Yu()},t.payload=n;return}n=n.return}}function Ty(t,n,r){var o=ni();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Vl(t)?tg(n,r):(r=zu(t,n,r,o),r!==null&&(kn(r,t,o),ng(r,n,o)))}function eg(t,n,r){var o=ni();_o(t,n,r,o)}function _o(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Vl(t))tg(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,w=h(S,r);if(u.hasEagerState=!0,u.eagerState=w,Kn(w,S))return Ml(t,n,u,0),Yt===null&&Sl(),!1}catch{}finally{}if(r=zu(t,n,u,o),r!==null)return kn(r,t,o),ng(r,n,o),!0}return!1}function Sf(t,n,r,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Vl(t)){if(n)throw Error(a(479))}else n=zu(t,r,o,2),n!==null&&kn(n,t,2)}function Vl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function tg(t,n){as=Pl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function ng(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Di(t,r)}}var xo={readContext:An,use:Bl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};xo.useEffectEvent=nn;var ig={readContext:An,use:Bl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Hm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Hl(4194308,4,Wm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Hl(4194308,4,t,n)},useInsertionEffect:function(t,n){Hl(4,2,t,n)},useMemo:function(t,n){var r=In();n=n===void 0?null:n;var o=t();if(_r){nt(!0);try{t()}finally{nt(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=In();if(r!==void 0){var u=r(n);if(_r){nt(!0);try{r(n)}finally{nt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ty.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,r=eg.bind(null,mt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:vf,useDeferredValue:function(t,n){var r=In();return _f(r,t,n)},useTransition:function(){var t=pf(!1);return t=Zm.bind(null,mt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=mt,u=In();if(Ct){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Yt===null)throw Error(a(349));(Tt&127)!==0||bm(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,Hm(Am.bind(null,o,h,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},Tm.bind(null,o,h,r,n),null),r},useId:function(){var t=In(),n=Yt.identifierPrefix;if(Ct){var r=Li,o=Ui;r=(o&~(1<<32-Ge(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Il++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=_y++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Sf.bind(null,mt,!0,r),r.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return In().memoizedState=by.bind(null,mt)},useEffectEvent:function(t){var n=In(),r={impl:t};return n.memoizedState=r,function(){if((zt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Mf={readContext:An,use:Bl,useCallback:jm,useContext:An,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:Fl,useRef:Fm,useState:function(){return Fl(Ji)},useDebugValue:vf,useDeferredValue:function(t,n){var r=cn();return Ym(r,kt.memoizedState,t,n)},useTransition:function(){var t=Fl(Ji)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:yf,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var r=cn();return Cm(r,kt,t,n)},useMemoCache:ff,useCacheRefresh:$m};Mf.useEffectEvent=Gm;var ag={readContext:An,use:Bl,useCallback:jm,useContext:An,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:hf,useRef:Fm,useState:function(){return hf(Ji)},useDebugValue:vf,useDeferredValue:function(t,n){var r=cn();return kt===null?_f(r,t,n):Ym(r,kt.memoizedState,t,n)},useTransition:function(){var t=hf(Ji)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:vo(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:yf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,n){var r=cn();return kt!==null?Cm(r,kt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:ff,useCacheRefresh:$m};ag.useEffectEvent=Gm;function Ef(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:v({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var bf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ni(),u=Ra(o);u.payload=n,r!=null&&(u.callback=r),n=Ca(t,u,o),n!==null&&(kn(n,t,o),ho(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ni(),u=Ra(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ca(t,u,o),n!==null&&(kn(n,t,o),ho(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ni(),o=Ra(r);o.tag=2,n!=null&&(o.callback=n),n=Ca(t,o,r),n!==null&&(kn(n,t,r),ho(n,t,r))}};function rg(t,n,r,o,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!ao(r,o)||!ao(u,h):!0}function sg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&bf.enqueueReplaceState(n,n.state,null)}function xr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=v({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function og(t){yl(t)}function lg(t){console.error(t)}function cg(t){yl(t)}function kl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,r){return r=Ra(r),r.tag=3,r.payload={element:null},r.callback=function(){kl(t,n)},r}function fg(t){return t=Ra(t),t.tag=3,t}function dg(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){ug(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){ug(n,r,o),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function Ay(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Jr(n,r,u,!0),r=Jn.current,r!==null){switch(r.tag){case 31:case 13:return pi===null?tc():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Dl?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return r.flags|=65536,o===Dl?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Kf(t,o,u)),!1}throw Error(a(435,r.tag))}return Kf(t,o,u),tc(),!1}if(Ct)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(a(422),{cause:o}),oo(ui(t,r)))):(o!==ku&&(n=Error(a(423),{cause:o}),oo(ui(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ui(o,r),u=Tf(t.stateNode,o,u),ef(t,u),an!==4&&(an=2)),!1;var h=Error(a(520),{cause:o});if(h=ui(h,r),wo===null?wo=[h]:wo.push(h),an!==4&&(an=2),n===null)return!0;o=ui(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Tf(r.stateNode,o,t),ef(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pa===null||!Pa.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=fg(u),dg(u,t,r,o),ef(r,u),!1}r=r.return}while(r!==null);return!1}var Af=Error(a(461)),hn=!1;function wn(t,n,r,o){n.child=t===null?gm(n,null,r,o):vr(n,t.child,r,o)}function hg(t,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var S={};for(var w in o)w!=="ref"&&(S[w]=o[w])}else S=o;return hr(n),o=of(t,n,r,S,h,u),w=lf(),t!==null&&!hn?(cf(t,n,u),$i(t,n,u)):(Ct&&w&&Gu(n),n.flags|=1,wn(t,n,o,u),n.child)}function pg(t,n,r,o,u){if(t===null){var h=r.type;return typeof h=="function"&&!Bu(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,mg(t,n,h,o,u)):(t=bl(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Of(t,u)){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:ao,r(S,o)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=qi(h,o),t.ref=n.ref,t.return=n,n.child=t}function mg(t,n,r,o,u){if(t!==null){var h=t.memoizedProps;if(ao(h,o)&&t.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Of(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,$i(t,n,u)}return wf(t,n,r,o,u)}function gg(t,n,r,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return vg(t,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Rl(n,h!==null?h.cachePool:null),h!==null?xm(n,h):nf(),ym(n);else return o=n.lanes=536870912,vg(t,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Rl(n,h.cachePool),xm(n,h),Na(),n.memoizedState=null):(t!==null&&Rl(n,null),nf(),Na());return wn(t,n,u,r),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vg(t,n,r,o,u){var h=Ku();return h=h===null?null:{parent:fn._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},t!==null&&Rl(n,null),nf(),ym(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function Wl(t,n){return n=jl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function _g(t,n,r){return vr(n,t.child,null,r),t=Wl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function wy(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=Wl(n,o),n.lanes=536870912,yo(null,t);if(rf(n),(t=Qt)?(t=D0(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=tm(t),r.return=n,n.child=r,Tn=n,Qt=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return Wl(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=_g(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(hn||Jr(t,n,r,!1),u=(r&t.childLanes)!==0,hn||u){if(o=Yt,o!==null&&(S=zr(o,r),S!==0&&S!==h.retryLane))throw h.retryLane=S,cr(t,S),kn(o,t,S),Af;tc(),n=_g(t,n,r)}else t=h.treeContext,Qt=mi(S.nextSibling),Tn=n,Ct=!0,ba=null,hi=!1,t!==null&&am(n,t),n=Wl(n,o),n.flags|=4096;return n}return t=qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Xl(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function wf(t,n,r,o,u){return hr(n),r=of(t,n,r,o,void 0,u),o=lf(),t!==null&&!hn?(cf(t,n,u),$i(t,n,u)):(Ct&&o&&Gu(n),n.flags|=1,wn(t,n,r,u),n.child)}function xg(t,n,r,o,u,h){return hr(n),n.updateQueue=null,r=Mm(n,o,r,u),Sm(t),o=lf(),t!==null&&!hn?(cf(t,n,h),$i(t,n,h)):(Ct&&o&&Gu(n),n.flags|=1,wn(t,n,r,h),n.child)}function yg(t,n,r,o,u){if(hr(n),n.stateNode===null){var h=Yr,S=r.contextType;typeof S=="object"&&S!==null&&(h=An(S)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=bf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Ju(n),S=r.contextType,h.context=typeof S=="object"&&S!==null?An(S):Yr,h.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Ef(n,r,S,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&bf.enqueueReplaceState(h,h.state,null),mo(n,o,h,u),po(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var w=n.memoizedProps,W=xr(r,w);h.props=W;var ce=h.context,xe=r.contextType;S=Yr,typeof xe=="object"&&xe!==null&&(S=An(xe));var Ee=r.getDerivedStateFromProps;xe=typeof Ee=="function"||typeof h.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,xe||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(w||ce!==S)&&sg(n,h,o,S),wa=!1;var fe=n.memoizedState;h.state=fe,mo(n,o,h,u),po(),ce=n.memoizedState,w||fe!==ce||wa?(typeof Ee=="function"&&(Ef(n,r,Ee,o),ce=n.memoizedState),(W=wa||rg(n,r,W,o,fe,ce,S))?(xe||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=ce),h.props=o,h.state=ce,h.context=S,o=W):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,$u(t,n),S=n.memoizedProps,xe=xr(r,S),h.props=xe,Ee=n.pendingProps,fe=h.context,ce=r.contextType,W=Yr,typeof ce=="object"&&ce!==null&&(W=An(ce)),w=r.getDerivedStateFromProps,(ce=typeof w=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Ee||fe!==W)&&sg(n,h,o,W),wa=!1,fe=n.memoizedState,h.state=fe,mo(n,o,h,u),po();var ge=n.memoizedState;S!==Ee||fe!==ge||wa||t!==null&&t.dependencies!==null&&Al(t.dependencies)?(typeof w=="function"&&(Ef(n,r,w,o),ge=n.memoizedState),(xe=wa||rg(n,r,xe,o,fe,ge,W)||t!==null&&t.dependencies!==null&&Al(t.dependencies))?(ce||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ge,W),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ge,W)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ge),h.props=o,h.state=ge,h.context=W,o=xe):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&fe===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,Xl(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=vr(n,t.child,null,u),n.child=vr(n,null,r,u)):wn(t,n,r,u),n.memoizedState=h.state,t=n.child):t=$i(t,n,u),t}function Sg(t,n,r,o){return fr(),n.flags|=256,wn(t,n,r,o),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:um()}}function Df(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ti),t}function Mg(t,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?Da(n):Na(),(t=Qt)?(t=D0(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=tm(t),r.return=n,n.child=r,Tn=n,Qt=null)):t=null,t===null)throw Ta(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,u?(Na(),u=n.mode,w=jl({mode:"hidden",children:w},u),o=ur(o,u,r,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=Cf(r),o.childLanes=Df(t,S,r),n.memoizedState=Rf,yo(null,o)):(Da(n),Nf(n,w))}var W=t.memoizedState;if(W!==null&&(w=W.dehydrated,w!==null)){if(h)n.flags&256?(Da(n),n.flags&=-257,n=Uf(t,n,r)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),w=o.fallback,u=n.mode,o=jl({mode:"visible",children:o.children},u),w=ur(w,u,r,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,vr(n,t.child,null,r),o=n.child,o.memoizedState=Cf(r),o.childLanes=Df(t,S,r),n.memoizedState=Rf,n=yo(null,o));else if(Da(n),dd(w)){if(S=w.nextSibling&&w.nextSibling.dataset,S)var ce=S.dgst;S=ce,o=Error(a(419)),o.stack="",o.digest=S,oo({value:o,source:null,stack:null}),n=Uf(t,n,r)}else if(hn||Jr(t,n,r,!1),S=(r&t.childLanes)!==0,hn||S){if(S=Yt,S!==null&&(o=zr(S,r),o!==0&&o!==W.retryLane))throw W.retryLane=o,cr(t,o),kn(S,t,o),Af;fd(w)||tc(),n=Uf(t,n,r)}else fd(w)?(n.flags|=192,n.child=t.child,n=null):(t=W.treeContext,Qt=mi(w.nextSibling),Tn=n,Ct=!0,ba=null,hi=!1,t!==null&&am(n,t),n=Nf(n,o.children),n.flags|=4096);return n}return u?(Na(),w=o.fallback,u=n.mode,W=t.child,ce=W.sibling,o=qi(W,{mode:"hidden",children:o.children}),o.subtreeFlags=W.subtreeFlags&65011712,ce!==null?w=qi(ce,w):(w=ur(w,u,r,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,yo(null,o),o=n.child,w=t.child.memoizedState,w===null?w=Cf(r):(u=w.cachePool,u!==null?(W=fn._currentValue,u=u.parent!==W?{parent:W,pool:W}:u):u=um(),w={baseLanes:w.baseLanes|r,cachePool:u}),o.memoizedState=w,o.childLanes=Df(t,S,r),n.memoizedState=Rf,yo(t.child,o)):(Da(n),r=t.child,t=r.sibling,r=qi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=r,n.memoizedState=null,r)}function Nf(t,n){return n=jl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function jl(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function Uf(t,n,r){return vr(n,t.child,null,r),t=Nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Eg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ju(t.return,n,r)}function Lf(t,n,r,o,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=u,S.treeForkCount=h)}function bg(t,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=ln.current,w=(S&2)!==0;if(w?(S=S&1|2,n.flags|=128):S&=1,ee(ln,S),wn(t,n,o,r),o=Ct?so:0,!w&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,r,n);else if(t.tag===19)Eg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Ol(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Lf(n,!1,u,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Ol(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Lf(n,!0,r,null,h,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Jr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=qi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=qi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Al(t)))}function Ry(t,n,r){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Aa(n,fn,t.memoizedState.cache),fr();break;case 27:case 5:Ue(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Mg(t,n,r):(Da(n),t=$i(t,n,r),t!==null?t.sibling:null);Da(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Jr(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return bg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ee(ln,ln.current),o)break;return null;case 22:return n.lanes=0,gg(t,n,r,n.pendingProps);case 24:Aa(n,fn,t.memoizedState.cache)}return $i(t,n,r)}function Tg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Of(t,r)&&(n.flags&128)===0)return hn=!1,Ry(t,n,r);hn=(t.flags&131072)!==0}else hn=!1,Ct&&(n.flags&1048576)!==0&&im(n,so,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=xr(t,o),n.tag=1,n=yg(null,n,t,o,r)):(n.tag=0,n=wf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===U){n.tag=11,n=hg(null,n,t,o,r);break e}else if(u===z){n.tag=14,n=pg(null,n,t,o,r);break e}}throw n=_e(t)||t,Error(a(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=xr(o,n.pendingProps),yg(t,n,o,u,r);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,$u(t,n),mo(n,o,null,r);var S=n.memoizedState;if(o=S.cache,Aa(n,fn,o),o!==h.cache&&qu(n,[fn],r,!0),po(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Sg(t,n,o,r);break e}else if(o!==u){u=ui(Error(a(424)),n),oo(u),n=Sg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=mi(t.firstChild),Tn=n,Ct=!0,ba=null,hi=!0,r=gm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(fr(),o===u){n=$i(t,n,r);break e}wn(t,n,o,r)}n=n.child}return n;case 26:return Xl(t,n),t===null?(r=I0(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ct||(r=n.type,t=n.pendingProps,o=lc(X.current).createElement(r),o[un]=n,o[En]=t,Rn(o,r,t),Te(o),n.stateNode=o):n.memoizedState=I0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ue(n),t===null&&Ct&&(o=n.stateNode=L0(n.type,n.pendingProps,X.current),Tn=n,hi=!0,u=Qt,Fa(n.type)?(hd=u,Qt=mi(o.firstChild)):Qt=u),wn(t,n,n.pendingProps.children,r),Xl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=Qt)&&(o=aS(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,Tn=n,Qt=mi(o.firstChild),hi=!1,u=!0):u=!1),u||Ta(n)),Ue(n),u=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,ld(u,h)?o=null:S!==null&&ld(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,xy,null,null,r),Po._currentValue=u),Xl(t,n),wn(t,n,o,r),n.child;case 6:return t===null&&Ct&&((t=r=Qt)&&(r=rS(r,n.pendingProps,hi),r!==null?(n.stateNode=r,Tn=n,Qt=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Mg(t,n,r);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=vr(n,null,o,r):wn(t,n,o,r),n.child;case 11:return hg(t,n,n.type,n.pendingProps,r);case 7:return wn(t,n,n.pendingProps,r),n.child;case 8:return wn(t,n,n.pendingProps.children,r),n.child;case 12:return wn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Aa(n,n.type,o.value),wn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=An(u),o=o(u),n.flags|=1,wn(t,n,o,r),n.child;case 14:return pg(t,n,n.type,n.pendingProps,r);case 15:return mg(t,n,n.type,n.pendingProps,r);case 19:return bg(t,n,r);case 31:return wy(t,n,r);case 22:return gg(t,n,r,n.pendingProps);case 24:return hr(n),o=An(fn),t===null?(u=Ku(),u===null&&(u=Yt,h=Yu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},Ju(n),Aa(n,fn,u)):((t.lanes&r)!==0&&($u(t,n),mo(n,null,null,r),po()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,fn,o)):(o=h.cache,Aa(n,fn,o),o!==u.cache&&qu(n,[fn],r,!0))),wn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ea(t){t.flags|=4}function Pf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw gr=Dl,Qu}else t.flags&=-16777217}function Ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G0(n))if(Jg())t.flags|=8192;else throw gr=Dl,Qu}function ql(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,us|=n)}function So(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function Cy(t,n,r){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(fn),Ae(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),Jt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(ea(n),h!==null?(Jt(n),Ag(n,h)):(Jt(n),Pf(n,u,null,o,r))):h?h!==t.memoizedState?(ea(n),Jt(n),Ag(n,h)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ea(n),Jt(n),Pf(n,u,t,o,r)),null;case 27:if(We(n),r=X.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}t=ue.current,Qr(n)?rm(n):(t=L0(u,o,r),n.stateNode=t,ea(n))}return Jt(n),null;case 5:if(We(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}if(h=ue.current,Qr(n))rm(n);else{var S=lc(X.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[un]=n,h[En]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(Rn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ea(n)}}return Jt(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=X.current,Qr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||M0(t.nodeValue,r)),t||Ta(n,!0)}else t=lc(t).createTextNode(o),t[un]=n,n.stateNode=t}return Jt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else r=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),ql(n,n.updateQueue),Jt(n),null);case 4:return Ae(),t===null&&id(n.stateNode.containerInfo),Jt(n),null;case 10:return Ki(n.type),Jt(n),null;case 19:if(F(ln),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)So(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Ol(t),h!==null){for(n.flags|=128,So(o,!1),t=h.updateQueue,n.updateQueue=t,ql(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)em(r,t),r=r.sibling;return ee(ln,ln.current&1|2),Ct&&Yi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>Jl&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304)}else{if(!u)if(t=Ol(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ql(n,t),So(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ct)return Jt(n),null}else 2*A()-o.renderingStartTime>Jl&&r!==536870912&&(n.flags|=128,u=!0,So(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,r=ln.current,ee(ln,u?r&1|2:r&1),Ct&&Yi(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return $n(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),r=n.updateQueue,r!==null&&ql(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&F(pr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(fn),Jt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Dy(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(fn),Ae(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return We(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(a(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return F(ln),null;case 4:return Ae(),null;case 10:return Ki(n.type),null;case 22:case 23:return $n(n),af(),t!==null&&F(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(fn),null;case 25:return null;default:return null}}function wg(t,n){switch(Vu(n),n.tag){case 3:Ki(fn),Ae();break;case 26:case 27:case 5:We(n);break;case 4:Ae();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:F(ln);break;case 10:Ki(n.type);break;case 22:case 23:$n(n),af(),t!==null&&F(pr);break;case 24:Ki(fn)}}function Mo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var h=r.create,S=r.inst;o=h(),S.destroy=o}r=r.next}while(r!==u)}}catch(w){Vt(n,n.return,w)}}function Ua(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var S=o.inst,w=S.destroy;if(w!==void 0){S.destroy=void 0,u=n;var W=r,ce=w;try{ce()}catch(xe){Vt(u,W,xe)}}}o=o.next}while(o!==h)}}catch(xe){Vt(n,n.return,xe)}}function Rg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{_m(n,r)}catch(o){Vt(t,t.return,o)}}}function Cg(t,n,r){r.props=xr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Eo(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Vt(t,n,u)}}function Oi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Vt(t,n,u)}else r.current=null}function Dg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Vt(t,t.return,u)}}function If(t,n,r){try{var o=t.stateNode;Jy(o,t.type,r,n),o[En]=n}catch(u){Vt(t,t.return,u)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,r),t=t.sibling;t!==null;)Bf(t,n,r),t=t.sibling}function Yl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Yl(t,n,r),t=t.sibling;t!==null;)Yl(t,n,r),t=t.sibling}function Ug(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,r),n[un]=t,n[En]=r}catch(h){Vt(t,t.return,h)}}var ta=!1,pn=!1,Ff=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Ny(t,n){if(t=t.containerInfo,sd=mc,t=Xp(t),Nu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var S=0,w=-1,W=-1,ce=0,xe=0,Ee=t,fe=null;t:for(;;){for(var ge;Ee!==r||u!==0&&Ee.nodeType!==3||(w=S+u),Ee!==h||o!==0&&Ee.nodeType!==3||(W=S+o),Ee.nodeType===3&&(S+=Ee.nodeValue.length),(ge=Ee.firstChild)!==null;)fe=Ee,Ee=ge;for(;;){if(Ee===t)break t;if(fe===r&&++ce===u&&(w=S),fe===h&&++xe===o&&(W=S),(ge=Ee.nextSibling)!==null)break;Ee=fe,fe=Ee.parentNode}Ee=ge}r=w===-1||W===-1?null:{start:w,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(od={focusedElem:t,selectionRange:r},mc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var qe=xr(r.type,u);t=o.getSnapshotBeforeUpdate(qe,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Vt(r,r.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)ud(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Og(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ia(t,r),o&4&&Mo(5,r);break;case 1:if(ia(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(S){Vt(r,r.return,S)}else{var u=xr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(r,r.return,S)}}o&64&&Rg(r),o&512&&Eo(r,r.return);break;case 3:if(ia(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{_m(t,n)}catch(S){Vt(r,r.return,S)}}break;case 27:n===null&&o&4&&Ug(r);case 26:case 5:ia(t,r),n===null&&o&4&&Dg(r),o&512&&Eo(r,r.return);break;case 12:ia(t,r);break;case 31:ia(t,r),o&4&&zg(t,r);break;case 13:ia(t,r),o&4&&Bg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Hy.bind(null,r),sS(t,r))));break;case 22:if(o=r.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||pn,u=ta;var h=pn;ta=o,(pn=n)&&!h?aa(t,r,(r.subtreeFlags&8772)!==0):ia(t,r),ta=u,pn=h}break;case 30:break;default:ia(t,r)}}function Pg(t){var n=t.alternate;n!==null&&(t.alternate=null,Pg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&C(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Fn=!1;function na(t,n,r){for(r=r.child;r!==null;)Ig(t,n,r),r=r.sibling}function Ig(t,n,r){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Ce,r)}catch{}switch(r.tag){case 26:pn||Oi(r,n),na(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:pn||Oi(r,n);var o=en,u=Fn;Fa(r.type)&&(en=r.stateNode,Fn=!1),na(t,n,r),Uo(r.stateNode),en=o,Fn=u;break;case 5:pn||Oi(r,n);case 6:if(o=en,u=Fn,en=null,na(t,n,r),en=o,Fn=u,en!==null)if(Fn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(h){Vt(r,n,h)}else try{en.removeChild(r.stateNode)}catch(h){Vt(r,n,h)}break;case 18:en!==null&&(Fn?(t=en,R0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),_s(t)):R0(en,r.stateNode));break;case 4:o=en,u=Fn,en=r.stateNode.containerInfo,Fn=!0,na(t,n,r),en=o,Fn=u;break;case 0:case 11:case 14:case 15:Ua(2,r,n),pn||Ua(4,r,n),na(t,n,r);break;case 1:pn||(Oi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Cg(r,n,o)),na(t,n,r);break;case 21:na(t,n,r);break;case 22:pn=(o=pn)||r.memoizedState!==null,na(t,n,r),pn=o;break;default:na(t,n,r)}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(r){Vt(n,n.return,r)}}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(r){Vt(n,n.return,r)}}function Uy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lg),n;default:throw Error(a(435,t.tag))}}function Zl(t,n){var r=Uy(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=Gy.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=t,S=n,w=S;e:for(;w!==null;){switch(w.tag){case 27:if(Fa(w.type)){en=w.stateNode,Fn=!1;break e}break;case 5:en=w.stateNode,Fn=!1;break e;case 3:case 4:en=w.stateNode.containerInfo,Fn=!0;break e}w=w.return}if(en===null)throw Error(a(160));Ig(h,S,u),en=null,Fn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fg(n,t),n=n.sibling}var Si=null;function Fg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(Ua(3,t,t.return),Mo(3,t),Ua(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Si;if(Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ar]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Rn(h,o,r),h[un]=t,Te(h),o=h;break e;case"link":var S=F0("link","href",u).get(o+(r.href||""));if(S){for(var w=0;w<S.length;w++)if(h=S[w],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(w,1);break t}}h=u.createElement(o),Rn(h,o,r),u.head.appendChild(h);break;case"meta":if(S=F0("meta","content",u).get(o+(r.content||""))){for(w=0;w<S.length;w++)if(h=S[w],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(w,1);break t}}h=u.createElement(o),Rn(h,o,r),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[un]=t,Te(h),o=h}t.stateNode=o}else H0(u,t.type,t.stateNode);else t.stateNode=B0(u,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?H0(u,t.type,t.stateNode):B0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,r.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),r!==null&&o&4&&If(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),t.flags&32){u=t.stateNode;try{Gr(u,"")}catch(qe){Vt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(qe){Vt(t,t.return,qe)}}break;case 3:if(fc=null,u=Si,Si=cc(n.containerInfo),Hn(n,t),Si=u,Gn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(qe){Vt(t,t.return,qe)}Ff&&(Ff=!1,Hg(t));break;case 4:o=Si,Si=cc(t.stateNode.containerInfo),Hn(n,t),Gn(t),Si=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Ql=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 22:u=t.memoizedState!==null;var W=r!==null&&r.memoizedState!==null,ce=ta,xe=pn;if(ta=ce||u,pn=xe||W,Hn(n,t),pn=xe,ta=ce,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||W||ta||pn||yr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){W=r=n;try{if(h=W.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{w=W.stateNode;var Ee=W.memoizedProps.style,fe=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;w.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(qe){Vt(W,W.return,qe)}}}else if(n.tag===6){if(r===null){W=n;try{W.stateNode.nodeValue=u?"":W.memoizedProps}catch(qe){Vt(W,W.return,qe)}}}else if(n.tag===18){if(r===null){W=n;try{var ge=W.stateNode;u?C0(ge,!0):C0(W.stateNode,!1)}catch(qe){Vt(W,W.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Zl(t,r))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Zl(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Ng(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,h=zf(t);Yl(t,h,u);break;case 5:var S=r.stateNode;r.flags&32&&(Gr(S,""),r.flags&=-33);var w=zf(t);Yl(t,w,S);break;case 3:case 4:var W=r.stateNode.containerInfo,ce=zf(t);Bf(t,ce,W);break;default:throw Error(a(161))}}catch(xe){Vt(t,t.return,xe)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),yr(n);break;case 1:Oi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Cg(n,n.return,r),yr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Oi(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function aa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:aa(u,h,r),Mo(4,h);break;case 1:if(aa(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){Vt(o,o.return,ce)}if(o=h,u=o.updateQueue,u!==null){var w=o.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)vm(W[u],w)}catch(ce){Vt(o,o.return,ce)}}r&&S&64&&Rg(h),Eo(h,h.return);break;case 27:Ug(h);case 26:case 5:aa(u,h,r),r&&o===null&&S&4&&Dg(h),Eo(h,h.return);break;case 12:aa(u,h,r);break;case 31:aa(u,h,r),r&&S&4&&zg(u,h);break;case 13:aa(u,h,r),r&&S&4&&Bg(u,h);break;case 22:h.memoizedState===null&&aa(u,h,r),Eo(h,h.return);break;case 30:break;default:aa(u,h,r)}n=n.sibling}}function Hf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&lo(r))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t))}function Mi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(t,n,r,o),n=n.sibling}function Gg(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,r,o),u&2048&&Mo(9,n);break;case 1:Mi(t,n,r,o);break;case 3:Mi(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&lo(t)));break;case 12:if(u&2048){Mi(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,w=h.onPostCommit;typeof w=="function"&&w(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(W){Vt(n,n.return,W)}}else Mi(t,n,r,o);break;case 31:Mi(t,n,r,o);break;case 13:Mi(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Mi(t,n,r,o):bo(t,n):h._visibility&2?Mi(t,n,r,o):(h._visibility|=2,os(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Mi(t,n,r,o),u&2048&&Gf(n.alternate,n);break;default:Mi(t,n,r,o)}}function os(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,w=r,W=o,ce=S.flags;switch(S.tag){case 0:case 11:case 15:os(h,S,w,W,u),Mo(8,S);break;case 23:break;case 22:var xe=S.stateNode;S.memoizedState!==null?xe._visibility&2?os(h,S,w,W,u):bo(h,S):(xe._visibility|=2,os(h,S,w,W,u)),u&&ce&2048&&Hf(S.alternate,S);break;case 24:os(h,S,w,W,u),u&&ce&2048&&Gf(S.alternate,S);break;default:os(h,S,w,W,u)}n=n.sibling}}function bo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:bo(r,o),u&2048&&Hf(o.alternate,o);break;case 24:bo(r,o),u&2048&&Gf(o.alternate,o);break;default:bo(r,o)}n=n.sibling}}var To=8192;function ls(t,n,r){if(t.subtreeFlags&To)for(t=t.child;t!==null;)Vg(t,n,r),t=t.sibling}function Vg(t,n,r){switch(t.tag){case 26:ls(t,n,r),t.flags&To&&t.memoizedState!==null&&_S(r,Si,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,r);break;case 3:case 4:var o=Si;Si=cc(t.stateNode.containerInfo),ls(t,n,r),Si=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=To,To=16777216,ls(t,n,r),To=o):ls(t,n,r));break;default:ls(t,n,r)}}function kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,Xg(o,t)}kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:Ao(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:Ao(t);break;case 12:Ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Kl(t)):Ao(t);break;default:Ao(t)}}function Kl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,Xg(o,t)}kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Kl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Kl(n));break;default:Kl(n)}t=t.sibling}}function Xg(t,n){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:Ua(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:lo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Sn=o;else e:for(r=t;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(Pg(o),o===r){Sn=null;break e}if(u!==null){u.return=h,Sn=u;break e}Sn=h}}}var Ly={getCacheForType:function(t){var n=An(fn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return An(fn).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,zt=0,Yt=null,Mt=null,Tt=0,Gt=0,ei=null,La=!1,cs=!1,Vf=!1,ra=0,an=0,Oa=0,Sr=0,kf=0,ti=0,us=0,wo=null,Vn=null,Wf=!1,Ql=0,jg=0,Jl=1/0,$l=null,Pa=null,vn=0,Ia=null,fs=null,sa=0,Xf=0,jf=null,qg=null,Ro=0,qf=null;function ni(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:I.T!==null?$f():ir()}function Yg(){if(ti===0)if((Tt&536870912)===0||Ct){var t=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),ti=t}else ti=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ti}function kn(t,n,r){(t===Yt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),za(t,Tt,ti,!1)),On(t,r),((zt&2)===0||t!==Yt)&&(t===Yt&&((zt&2)===0&&(Sr|=r),an===4&&za(t,Tt,ti,!1)),Pi(t))}function Zg(t,n,r){if((zt&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||je(t,n),u=o?zy(t,n):Zf(t,n,!0),h=o;do{if(u===0){cs&&!o&&za(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!Py(r)){u=Zf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var w=t;u=wo;var W=w.current.memoizedState.isDehydrated;if(W&&(ds(w,S).flags|=256),S=Zf(w,S,!1),S!==2){if(Vf&&!W){w.errorRecoveryDisabledLanes|=h,Sr|=h,u=4;break e}h=Vn,Vn=u,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){ds(t,0),za(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,ti,!La);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=Ql+300-A(),10<u)){if(za(o,n,ti,!La),be(o,0,!0)!==0)break e;sa=n,o.timeoutHandle=A0(Kg.bind(null,o,r,Vn,$l,Wf,n,ti,Sr,us,La,h,"Throttled",-0,0),u);break e}Kg(o,r,Vn,$l,Wf,n,ti,Sr,us,La,h,null,-0,0)}}break}while(!0);Pi(t)}function Kg(t,n,r,o,u,h,S,w,W,ce,xe,Ee,fe,ge){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Vg(n,h,Ee);var qe=(h&62914560)===h?Ql-A():(h&4194048)===h?jg-A():0;if(qe=xS(Ee,qe),qe!==null){sa=h,t.cancelPendingCommit=qe(a0.bind(null,t,n,h,r,o,u,S,w,W,xe,Ee,null,fe,ge)),za(t,h,S,!ce);return}}a0(t,n,h,r,o,u,S,w,W)}function Py(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!Kn(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,r,o){n&=~kf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ge(u),S=1<<h;o[h]=-1,u&=~S}r!==0&&Ys(t,r,n)}function ec(){return(zt&6)===0?(Co(0),!1):!0}function Yf(){if(Mt!==null){if(Gt===0)var t=Mt.return;else t=Mt,Zi=dr=null,uf(t),ns=null,uo=0,t=Mt;for(;t!==null;)wg(t.alternate,t),t=t.return;Mt=null}}function ds(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,tS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),sa=0,Yf(),Yt=t,Mt=r=qi(t.current,null),Tt=n,Gt=0,ei=null,La=!1,cs=je(t,n),Vf=!1,us=ti=kf=Sr=Oa=an=0,Vn=wo=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ge(o),h=1<<u;n|=t[u],o&=~h}return ra=n,Sl(),r}function Qg(t,n){mt=null,I.H=xo,n===ts||n===Cl?(n=hm(),Gt=3):n===Qu?(n=hm(),Gt=4):Gt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,Mt===null&&(an=1,kl(t,ui(n,t.current)))}function Jg(){var t=Jn.current;return t===null?!0:(Tt&4194048)===Tt?pi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===pi:!1}function $g(){var t=I.H;return I.H=xo,t===null?xo:t}function e0(){var t=I.A;return I.A=Ly,t}function tc(){an=4,La||(Tt&4194048)!==Tt&&Jn.current!==null||(cs=!0),(Oa&134217727)===0&&(Sr&134217727)===0||Yt===null||za(Yt,Tt,ti,!1)}function Zf(t,n,r){var o=zt;zt|=2;var u=$g(),h=e0();(Yt!==t||Tt!==n)&&($l=null,ds(t,n)),n=!1;var S=an;e:do try{if(Gt!==0&&Mt!==null){var w=Mt,W=ei;switch(Gt){case 8:Yf(),S=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var ce=Gt;if(Gt=0,ei=null,hs(t,w,W,ce),r&&cs){S=0;break e}break;default:ce=Gt,Gt=0,ei=null,hs(t,w,W,ce)}}Iy(),S=an;break}catch(xe){Qg(t,xe)}while(!0);return n&&t.shellSuspendCounter++,Zi=dr=null,zt=o,I.H=u,I.A=h,Mt===null&&(Yt=null,Tt=0,Sl()),S}function Iy(){for(;Mt!==null;)t0(Mt)}function zy(t,n){var r=zt;zt|=2;var o=$g(),u=e0();Yt!==t||Tt!==n?($l=null,Jl=A()+500,ds(t,n)):cs=je(t,n);e:do try{if(Gt!==0&&Mt!==null){n=Mt;var h=ei;t:switch(Gt){case 1:Gt=0,ei=null,hs(t,n,h,1);break;case 2:case 9:if(fm(h)){Gt=0,ei=null,n0(n);break}n=function(){Gt!==2&&Gt!==9||Yt!==t||(Gt=7),Pi(t)},h.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:fm(h)?(Gt=0,ei=null,n0(n)):(Gt=0,ei=null,hs(t,n,h,7));break;case 5:var S=null;switch(Mt.tag){case 26:S=Mt.memoizedState;case 5:case 27:var w=Mt;if(S?G0(S):w.stateNode.complete){Gt=0,ei=null;var W=w.sibling;if(W!==null)Mt=W;else{var ce=w.return;ce!==null?(Mt=ce,nc(ce)):Mt=null}break t}}Gt=0,ei=null,hs(t,n,h,5);break;case 6:Gt=0,ei=null,hs(t,n,h,6);break;case 8:Yf(),an=6;break e;default:throw Error(a(462))}}By();break}catch(xe){Qg(t,xe)}while(!0);return Zi=dr=null,I.H=o,I.A=u,zt=r,Mt!==null?0:(Yt=null,Tt=0,Sl(),an)}function By(){for(;Mt!==null&&!Kt();)t0(Mt)}function t0(t){var n=Tg(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?nc(t):Mt=n}function n0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=xg(r,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=xg(r,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:uf(n);default:wg(r,n),n=Mt=em(n,ra),n=Tg(r,n,ra)}t.memoizedProps=t.pendingProps,n===null?nc(t):Mt=n}function hs(t,n,r,o){Zi=dr=null,uf(n),ns=null,uo=0;var u=n.return;try{if(Ay(t,u,n,r,Tt)){an=1,kl(t,ui(r,t.current)),Mt=null;return}}catch(h){if(u!==null)throw Mt=u,h;an=1,kl(t,ui(r,t.current)),Mt=null;return}n.flags&32768?(Ct||o===1?t=!0:cs||(Tt&536870912)!==0?t=!1:(La=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),i0(n,t)):nc(n)}function nc(t){var n=t;do{if((n.flags&32768)!==0){i0(n,La);return}t=n.return;var r=Cy(n.alternate,n,ra);if(r!==null){Mt=r;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);an===0&&(an=5)}function i0(t,n){do{var r=Dy(t.alternate,t);if(r!==null){r.flags&=32767,Mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=r}while(t!==null);an=6,Mt=null}function a0(t,n,r,o,u,h,S,w,W){t.cancelPendingCommit=null;do ic();while(vn!==0);if((zt&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=Iu,li(t,r,h,S,w,W),t===Yt&&(Mt=Yt=null,Tt=0),fs=n,Ia=t,sa=r,Xf=h,jf=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vy(ve,function(){return c0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=I.T,I.T=null,u=K.p,K.p=2,S=zt,zt|=4;try{Ny(t,n,r)}finally{zt=S,K.p=u,I.T=o}}vn=1,r0(),s0(),o0()}}function r0(){if(vn===1){vn=0;var t=Ia,n=fs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null;var o=K.p;K.p=2;var u=zt;zt|=4;try{Fg(n,t);var h=od,S=Xp(t.containerInfo),w=h.focusedElem,W=h.selectionRange;if(S!==w&&w&&w.ownerDocument&&Wp(w.ownerDocument.documentElement,w)){if(W!==null&&Nu(w)){var ce=W.start,xe=W.end;if(xe===void 0&&(xe=ce),"selectionStart"in w)w.selectionStart=ce,w.selectionEnd=Math.min(xe,w.value.length);else{var Ee=w.ownerDocument||document,fe=Ee&&Ee.defaultView||window;if(fe.getSelection){var ge=fe.getSelection(),qe=w.textContent.length,ot=Math.min(W.start,qe),Xt=W.end===void 0?ot:Math.min(W.end,qe);!ge.extend&&ot>Xt&&(S=Xt,Xt=ot,ot=S);var ne=kp(w,ot),Y=kp(w,Xt);if(ne&&Y&&(ge.rangeCount!==1||ge.anchorNode!==ne.node||ge.anchorOffset!==ne.offset||ge.focusNode!==Y.node||ge.focusOffset!==Y.offset)){var le=Ee.createRange();le.setStart(ne.node,ne.offset),ge.removeAllRanges(),ot>Xt?(ge.addRange(le),ge.extend(Y.node,Y.offset)):(le.setEnd(Y.node,Y.offset),ge.addRange(le))}}}}for(Ee=[],ge=w;ge=ge.parentNode;)ge.nodeType===1&&Ee.push({element:ge,left:ge.scrollLeft,top:ge.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Ee.length;w++){var Me=Ee[w];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}mc=!!sd,od=sd=null}finally{zt=u,K.p=o,I.T=r}}t.current=n,vn=2}}function s0(){if(vn===2){vn=0;var t=Ia,n=fs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=I.T,I.T=null;var o=K.p;K.p=2;var u=zt;zt|=4;try{Og(t,n.alternate,n)}finally{zt=u,K.p=o,I.T=r}}vn=3}}function o0(){if(vn===4||vn===3){vn=0,B();var t=Ia,n=fs,r=sa,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,fs=Ia=null,l0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Pa=null),Fr(r),n=n.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=I.T,u=K.p,K.p=2,I.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var w=o[S];h(w.value,{componentStack:w.stack})}}finally{I.T=n,K.p=u}}(sa&3)!==0&&ic(),Pi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===qf?Ro++:(Ro=0,qf=t):Ro=0,Co(0)}}function l0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,lo(n)))}function ic(){return r0(),s0(),o0(),c0()}function c0(){if(vn!==5)return!1;var t=Ia,n=Xf;Xf=0;var r=Fr(sa),o=I.T,u=K.p;try{K.p=32>r?32:r,I.T=null,r=jf,jf=null;var h=Ia,S=sa;if(vn=0,fs=Ia=null,sa=0,(zt&6)!==0)throw Error(a(331));var w=zt;if(zt|=4,Wg(h.current),Gg(h,h.current,S,r),zt=w,Co(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Ce,h)}catch{}return!0}finally{K.p=u,I.T=o,l0(t,n)}}function u0(t,n,r){n=ui(r,n),n=Tf(t.stateNode,n,2),t=Ca(t,n,2),t!==null&&(On(t,2),Pi(t))}function Vt(t,n,r){if(t.tag===3)u0(t,t,r);else for(;n!==null;){if(n.tag===3){u0(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){t=ui(r,t),r=fg(2),o=Ca(n,r,2),o!==null&&(dg(r,o,n,t),On(o,2),Pi(o));break}}n=n.return}}function Kf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Oy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Vf=!0,u.add(r),t=Fy.bind(null,t,n,r),n.then(t,t))}function Fy(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Yt===t&&(Tt&r)===r&&(an===4||an===3&&(Tt&62914560)===Tt&&300>A()-Ql?(zt&2)===0&&ds(t,0):kf|=r,us===Tt&&(us=0)),Pi(t)}function f0(t,n){n===0&&(n=Ht()),t=cr(t,n),t!==null&&(On(t,n),Pi(t))}function Hy(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),f0(t,r)}function Gy(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),f0(t,r)}function Vy(t,n){return rt(t,n)}var ac=null,ps=null,Qf=!1,rc=!1,Jf=!1,Ba=0;function Pi(t){t!==ps&&t.next===null&&(ps===null?ac=ps=t:ps=ps.next=t),rc=!0,Qf||(Qf=!0,Wy())}function Co(t,n){if(!Jf&&rc){Jf=!0;do for(var r=!1,o=ac;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,w=o.pingedLanes;h=(1<<31-Ge(42|t)+1)-1,h&=u&~(S&~w),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,m0(o,h))}else h=Tt,h=be(o,o===Yt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||je(o,h)||(r=!0,m0(o,h));o=o.next}while(r);Jf=!1}}function ky(){d0()}function d0(){rc=Qf=!1;var t=0;Ba!==0&&eS()&&(t=Ba);for(var n=A(),r=null,o=ac;o!==null;){var u=o.next,h=h0(o,n);h===0?(o.next=null,r===null?ac=u:r.next=u,u===null&&(ps=r)):(r=o,(t!==0||(h&3)!==0)&&(rc=!0)),o=u}vn!==0&&vn!==5||Co(t),Ba!==0&&(Ba=0)}function h0(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Ge(h),w=1<<S,W=u[S];W===-1?((w&r)===0||(w&o)!==0)&&(u[S]=dt(w,n)):W<=n&&(t.expiredLanes|=w),h&=~w}if(n=Yt,r=Tt,r=be(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||je(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&$t(o),Fr(r)){case 2:case 8:r=we;break;case 32:r=ve;break;case 268435456:r=Ne;break;default:r=ve}return o=p0.bind(null,t),r=rt(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&$t(o),t.callbackPriority=2,t.callbackNode=null,2}function p0(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(ic()&&t.callbackNode!==r)return null;var o=Tt;return o=be(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Zg(t,o,n),h0(t,A()),t.callbackNode!=null&&t.callbackNode===r?p0.bind(null,t):null)}function m0(t,n){if(ic())return null;Zg(t,n,!0)}function Wy(){nS(function(){(zt&6)!==0?rt(Se,ky):d0()})}function $f(){if(Ba===0){var t=$r;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Ba=t}return Ba}function g0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:hl(""+t)}function v0(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function Xy(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=g0((u[En]||null).action),S=o.submitter;S&&(n=(n=S[En]||null)?g0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var w=new vl("action","action",null,o,u);t.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ba!==0){var W=S?v0(u,S):new FormData(u);xf(r,{pending:!0,data:W,method:u.method,action:h},null,W)}}else typeof h=="function"&&(w.preventDefault(),W=S?v0(u,S):new FormData(u),xf(r,{pending:!0,data:W,method:u.method,action:h},h,W))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],jy=td.toLowerCase(),qy=td[0].toUpperCase()+td.slice(1);yi(jy,"on"+qy)}yi(Yp,"onAnimationEnd"),yi(Zp,"onAnimationIteration"),yi(Kp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(cy,"onTransitionRun"),yi(uy,"onTransitionStart"),yi(fy,"onTransitionCancel"),yi(Qp,"onTransitionEnd"),it("onMouseEnter",["mouseout","mouseover"]),it("onMouseLeave",["mouseout","mouseover"]),it("onPointerEnter",["pointerout","pointerover"]),it("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Do));function _0(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var w=o[S],W=w.instance,ce=w.currentTarget;if(w=w.listener,W!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ce;try{h(u)}catch(xe){yl(xe)}u.currentTarget=null,h=W}else for(S=0;S<o.length;S++){if(w=o[S],W=w.instance,ce=w.currentTarget,w=w.listener,W!==h&&u.isPropagationStopped())break e;h=w,u.currentTarget=ce;try{h(u)}catch(xe){yl(xe)}u.currentTarget=null,h=W}}}}function Et(t,n){var r=n[Ks];r===void 0&&(r=n[Ks]=new Set);var o=t+"__bubble";r.has(o)||(x0(n,t,2,!1),r.add(o))}function nd(t,n,r){var o=0;n&&(o|=4),x0(r,t,o,n)}var sc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[sc]){t[sc]=!0,Ie.forEach(function(r){r!=="selectionchange"&&(Yy.has(r)||nd(r,!1,t),nd(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[sc]||(n[sc]=!0,nd("selectionchange",!1,n))}}function x0(t,n,r,o){switch(Y0(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=_d}r=u.bind(null,n,r,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function ad(t,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var w=o.stateNode.containerInfo;if(w===u)break;if(S===4)for(S=o.return;S!==null;){var W=S.tag;if((W===3||W===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;w!==null;){if(S=te(w),S===null)return;if(W=S.tag,W===5||W===6||W===26||W===27){o=h=S;continue e}w=w.parentNode}}o=o.return}bp(function(){var ce=h,xe=yu(r),Ee=[];e:{var fe=Jp.get(t);if(fe!==void 0){var ge=vl,qe=t;switch(t){case"keypress":if(ml(r)===0)break e;case"keydown":case"keyup":ge=Gx;break;case"focusin":qe="focus",ge=Au;break;case"focusout":qe="blur",ge=Au;break;case"beforeblur":case"afterblur":ge=Au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ge=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ge=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ge=Wx;break;case Yp:case Zp:case Kp:ge=Ux;break;case Qp:ge=jx;break;case"scroll":case"scrollend":ge=wx;break;case"wheel":ge=Yx;break;case"copy":case"cut":case"paste":ge=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ge=Cp;break;case"toggle":case"beforetoggle":ge=Kx}var ot=(n&4)!==0,Xt=!ot&&(t==="scroll"||t==="scrollend"),ne=ot?fe!==null?fe+"Capture":null:fe;ot=[];for(var Y=ce,le;Y!==null;){var Me=Y;if(le=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||le===null||ne===null||(Me=Qs(Y,ne),Me!=null&&ot.push(No(Y,Me,le))),Xt)break;Y=Y.return}0<ot.length&&(fe=new ge(fe,qe,null,r,xe),Ee.push({event:fe,listeners:ot}))}}if((n&7)===0){e:{if(fe=t==="mouseover"||t==="pointerover",ge=t==="mouseout"||t==="pointerout",fe&&r!==xu&&(qe=r.relatedTarget||r.fromElement)&&(te(qe)||qe[Sa]))break e;if((ge||fe)&&(fe=xe.window===xe?xe:(fe=xe.ownerDocument)?fe.defaultView||fe.parentWindow:window,ge?(qe=r.relatedTarget||r.toElement,ge=ce,qe=qe?te(qe):null,qe!==null&&(Xt=c(qe),ot=qe.tag,qe!==Xt||ot!==5&&ot!==27&&ot!==6)&&(qe=null)):(ge=null,qe=ce),ge!==qe)){if(ot=wp,Me="onMouseLeave",ne="onMouseEnter",Y="mouse",(t==="pointerout"||t==="pointerover")&&(ot=Cp,Me="onPointerLeave",ne="onPointerEnter",Y="pointer"),Xt=ge==null?fe:me(ge),le=qe==null?fe:me(qe),fe=new ot(Me,Y+"leave",ge,r,xe),fe.target=Xt,fe.relatedTarget=le,Me=null,te(xe)===ce&&(ot=new ot(ne,Y+"enter",qe,r,xe),ot.target=le,ot.relatedTarget=Xt,Me=ot),Xt=Me,ge&&qe)t:{for(ot=Zy,ne=ge,Y=qe,le=0,Me=ne;Me;Me=ot(Me))le++;Me=0;for(var st=Y;st;st=ot(st))Me++;for(;0<le-Me;)ne=ot(ne),le--;for(;0<Me-le;)Y=ot(Y),Me--;for(;le--;){if(ne===Y||Y!==null&&ne===Y.alternate){ot=ne;break t}ne=ot(ne),Y=ot(Y)}ot=null}else ot=null;ge!==null&&y0(Ee,fe,ge,ot,!1),qe!==null&&Xt!==null&&y0(Ee,Xt,qe,ot,!0)}}e:{if(fe=ce?me(ce):window,ge=fe.nodeName&&fe.nodeName.toLowerCase(),ge==="select"||ge==="input"&&fe.type==="file")var Lt=zp;else if(Pp(fe))if(Bp)Lt=sy;else{Lt=ay;var tt=iy}else ge=fe.nodeName,!ge||ge.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?ce&&_u(ce.elementType)&&(Lt=zp):Lt=ry;if(Lt&&(Lt=Lt(t,ce))){Ip(Ee,Lt,r,xe);break e}tt&&tt(t,fe,ce),t==="focusout"&&ce&&fe.type==="number"&&ce.memoizedProps.value!=null&&gn(fe,"number",fe.value)}switch(tt=ce?me(ce):window,t){case"focusin":(Pp(tt)||tt.contentEditable==="true")&&(Xr=tt,Uu=ce,ro=null);break;case"focusout":ro=Uu=Xr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,jp(Ee,r,xe);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":jp(Ee,r,xe)}var gt;if(Ru)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Wr?Lp(t,r)&&(At="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(At="onCompositionStart");At&&(Dp&&r.locale!=="ko"&&(Wr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Wr&&(gt=Tp()):(Ma=xe,Eu="value"in Ma?Ma.value:Ma.textContent,Wr=!0)),tt=oc(ce,At),0<tt.length&&(At=new Rp(At,t,null,r,xe),Ee.push({event:At,listeners:tt}),gt?At.data=gt:(gt=Op(r),gt!==null&&(At.data=gt)))),(gt=Jx?$x(t,r):ey(t,r))&&(At=oc(ce,"onBeforeInput"),0<At.length&&(tt=new Rp("onBeforeInput","beforeinput",null,r,xe),Ee.push({event:tt,listeners:At}),tt.data=gt)),Xy(Ee,t,ce,r,xe)}_0(Ee,n)})}function No(t,n,r){return{instance:t,listener:n,currentTarget:r}}function oc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Qs(t,r),u!=null&&o.unshift(No(t,u,h)),u=Qs(t,n),u!=null&&o.push(No(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Zy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y0(t,n,r,o,u){for(var h=n._reactName,S=[];r!==null&&r!==o;){var w=r,W=w.alternate,ce=w.stateNode;if(w=w.tag,W!==null&&W===o)break;w!==5&&w!==26&&w!==27||ce===null||(W=ce,u?(ce=Qs(r,h),ce!=null&&S.unshift(No(r,ce,W))):u||(ce=Qs(r,h),ce!=null&&S.push(No(r,ce,W)))),r=r.return}S.length!==0&&t.push({event:n,listeners:S})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function S0(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Qy,"")}function M0(t,n){return n=S0(n),S0(t)===n}function Wt(t,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gr(t,""+o);break;case"className":Ft(t,"class",o);break;case"tabIndex":Ft(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(t,r,o);break;case"style":Mp(t,o,h);break;case"data":if(n!=="object"){Ft(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=hl(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=hl(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Xi);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=hl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),qt(t,"popover",o);break;case"xlinkActuate":St(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":St(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":St(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":St(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":St(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":St(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":St(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":St(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":St(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Tx.get(r)||r,qt(t,r,o))}}function rd(t,n,r,o,u,h){switch(r){case"style":Mp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&Gr(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ke.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=t[En]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):qt(t,r,o)}}}function Rn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var S=r[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Wt(t,n,h,S,r,null)}}u&&Wt(t,n,"srcSet",r.srcSet,r,null),o&&Wt(t,n,"src",r.src,r,null);return;case"input":Et("invalid",t);var w=h=S=u=null,W=null,ce=null;for(o in r)if(r.hasOwnProperty(o)){var xe=r[o];if(xe!=null)switch(o){case"name":u=xe;break;case"type":S=xe;break;case"checked":W=xe;break;case"defaultChecked":ce=xe;break;case"value":h=xe;break;case"defaultValue":w=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(a(137,n));break;default:Wt(t,n,o,xe,r,null)}}Pn(t,h,w,W,ce,S,u,!1);return;case"select":Et("invalid",t),o=S=h=null;for(u in r)if(r.hasOwnProperty(u)&&(w=r[u],w!=null))switch(u){case"value":h=w;break;case"defaultValue":S=w;break;case"multiple":o=w;default:Wt(t,n,u,w,r,null)}n=h,r=S,t.multiple=!!o,n!=null?on(t,!!o,n,!1):r!=null&&on(t,!!o,r,!0);return;case"textarea":Et("invalid",t),h=u=o=null;for(S in r)if(r.hasOwnProperty(S)&&(w=r[S],w!=null))switch(S){case"value":o=w;break;case"defaultValue":u=w;break;case"children":h=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(a(91));break;default:Wt(t,n,S,w,r,null)}Ni(t,o,u,h);return;case"option":for(W in r)if(r.hasOwnProperty(W)&&(o=r[W],o!=null))switch(W){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,W,o,r,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Do.length;o++)Et(Do[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in r)if(r.hasOwnProperty(ce)&&(o=r[ce],o!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Wt(t,n,ce,o,r,null)}return;default:if(_u(n)){for(xe in r)r.hasOwnProperty(xe)&&(o=r[xe],o!==void 0&&rd(t,n,xe,o,r,void 0));return}}for(w in r)r.hasOwnProperty(w)&&(o=r[w],o!=null&&Wt(t,n,w,o,r,null))}function Jy(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,w=null,W=null,ce=null,xe=null;for(ge in r){var Ee=r[ge];if(r.hasOwnProperty(ge)&&Ee!=null)switch(ge){case"checked":break;case"value":break;case"defaultValue":W=Ee;default:o.hasOwnProperty(ge)||Wt(t,n,ge,null,o,Ee)}}for(var fe in o){var ge=o[fe];if(Ee=r[fe],o.hasOwnProperty(fe)&&(ge!=null||Ee!=null))switch(fe){case"type":h=ge;break;case"name":u=ge;break;case"checked":ce=ge;break;case"defaultChecked":xe=ge;break;case"value":S=ge;break;case"defaultValue":w=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(a(137,n));break;default:ge!==Ee&&Wt(t,n,fe,ge,o,Ee)}}Dn(t,S,w,W,ce,xe,h,u);return;case"select":ge=S=w=fe=null;for(h in r)if(W=r[h],r.hasOwnProperty(h)&&W!=null)switch(h){case"value":break;case"multiple":ge=W;default:o.hasOwnProperty(h)||Wt(t,n,h,null,o,W)}for(u in o)if(h=o[u],W=r[u],o.hasOwnProperty(u)&&(h!=null||W!=null))switch(u){case"value":fe=h;break;case"defaultValue":w=h;break;case"multiple":S=h;default:h!==W&&Wt(t,n,u,h,o,W)}n=w,r=S,o=ge,fe!=null?on(t,!!r,fe,!1):!!o!=!!r&&(n!=null?on(t,!!r,n,!0):on(t,!!r,r?[]:"",!1));return;case"textarea":ge=fe=null;for(w in r)if(u=r[w],r.hasOwnProperty(w)&&u!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Wt(t,n,w,null,o,u)}for(S in o)if(u=o[S],h=r[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":fe=u;break;case"defaultValue":ge=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&Wt(t,n,S,u,o,h)}Hr(t,fe,ge);return;case"option":for(var qe in r)if(fe=r[qe],r.hasOwnProperty(qe)&&fe!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Wt(t,n,qe,null,o,fe)}for(W in o)if(fe=o[W],ge=r[W],o.hasOwnProperty(W)&&fe!==ge&&(fe!=null||ge!=null))switch(W){case"selected":t.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Wt(t,n,W,fe,o,ge)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in r)fe=r[ot],r.hasOwnProperty(ot)&&fe!=null&&!o.hasOwnProperty(ot)&&Wt(t,n,ot,null,o,fe);for(ce in o)if(fe=o[ce],ge=r[ce],o.hasOwnProperty(ce)&&fe!==ge&&(fe!=null||ge!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(a(137,n));break;default:Wt(t,n,ce,fe,o,ge)}return;default:if(_u(n)){for(var Xt in r)fe=r[Xt],r.hasOwnProperty(Xt)&&fe!==void 0&&!o.hasOwnProperty(Xt)&&rd(t,n,Xt,void 0,o,fe);for(xe in o)fe=o[xe],ge=r[xe],!o.hasOwnProperty(xe)||fe===ge||fe===void 0&&ge===void 0||rd(t,n,xe,fe,o,ge);return}}for(var ne in r)fe=r[ne],r.hasOwnProperty(ne)&&fe!=null&&!o.hasOwnProperty(ne)&&Wt(t,n,ne,null,o,fe);for(Ee in o)fe=o[Ee],ge=r[Ee],!o.hasOwnProperty(Ee)||fe===ge||fe==null&&ge==null||Wt(t,n,Ee,fe,o,ge)}function E0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],h=u.transferSize,S=u.initiatorType,w=u.duration;if(h&&w&&E0(S)){for(S=0,w=u.responseEnd,o+=1;o<r.length;o++){var W=r[o],ce=W.startTime;if(ce>w)break;var xe=W.transferSize,Ee=W.initiatorType;xe&&E0(Ee)&&(W=W.responseEnd,S+=xe*(W<w?1:(w-ce)/(W-ce)))}if(--o,n+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,od=null;function lc(t){return t.nodeType===9?t:t.ownerDocument}function b0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function eS(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(iS)}:A0;function iS(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function R0(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),_s(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Uo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Uo(r);for(var h=r.firstChild;h;){var S=h.nextSibling,w=h.nodeName;h[ar]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=S}}else r==="body"&&Uo(t.ownerDocument.body);r=u}while(r);_s(n)}function C0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ud(r),C(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function aS(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function rS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=mi(t.nextSibling),t===null))return null;return t}function D0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sS(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function N0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return mi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function L0(t,n,r){switch(n=lc(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);C(t)}var gi=new Map,O0=new Set;function cc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=K.d;K.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:dS,X:pS,S:hS,M:mS};function oS(){var t=oa.f(),n=ec();return t||n}function lS(t){var n=he(t);n!==null&&n.tag===5&&n.type==="form"?Qm(n):oa.r(t)}var ms=typeof document>"u"?null:document;function P0(t,n,r){var o=ms;if(o&&typeof n=="string"&&n){var u=bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),O0.has(u)||(O0.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),Te(n),o.head.appendChild(n)))}}function cS(t){oa.D(t),P0("dns-prefetch",t,null)}function uS(t,n){oa.C(t,n),P0("preconnect",t,n)}function fS(t,n,r){oa.L(t,n,r);var o=ms;if(o&&t&&n){var u='link[rel="preload"][as="'+bt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+bt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+bt(r.imageSizes)+'"]')):u+='[href="'+bt(t)+'"]';var h=u;switch(n){case"style":h=gs(t);break;case"script":h=vs(t)}gi.has(h)||(t=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),gi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Lo(h))||n==="script"&&o.querySelector(Oo(h))||(n=o.createElement("link"),Rn(n,"link",t),Te(n),o.head.appendChild(n)))}}function dS(t,n){oa.m(t,n);var r=ms;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+bt(o)+'"][href="'+bt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=vs(t)}if(!gi.has(h)&&(t=v({rel:"modulepreload",href:t},n),gi.set(h,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Oo(h)))return}o=r.createElement("link"),Rn(o,"link",t),Te(o),r.head.appendChild(o)}}}function hS(t,n,r){oa.S(t,n,r);var o=ms;if(o&&t){var u=ie(o).hoistableStyles,h=gs(t);n=n||"default";var S=u.get(h);if(!S){var w={loading:0,preload:null};if(S=o.querySelector(Lo(h)))w.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},r),(r=gi.get(h))&&pd(t,r);var W=S=o.createElement("link");Te(W),Rn(W,"link",t),W._p=new Promise(function(ce,xe){W.onload=ce,W.onerror=xe}),W.addEventListener("load",function(){w.loading|=1}),W.addEventListener("error",function(){w.loading|=2}),w.loading|=4,uc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:w},u.set(h,S)}}}function pS(t,n){oa.X(t,n);var r=ms;if(r&&t){var o=ie(r).hoistableScripts,u=vs(t),h=o.get(u);h||(h=r.querySelector(Oo(u)),h||(t=v({src:t,async:!0},n),(n=gi.get(u))&&md(t,n),h=r.createElement("script"),Te(h),Rn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function mS(t,n){oa.M(t,n);var r=ms;if(r&&t){var o=ie(r).hoistableScripts,u=vs(t),h=o.get(u);h||(h=r.querySelector(Oo(u)),h||(t=v({src:t,async:!0,type:"module"},n),(n=gi.get(u))&&md(t,n),h=r.createElement("script"),Te(h),Rn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function I0(t,n,r,o){var u=(u=X.current)?cc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=gs(r.href),r=ie(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=gs(r.href);var h=ie(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector(Lo(t)))&&!h._p&&(S.instance=h,S.state.loading=5),gi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(t,r),h||gS(u,t,r,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(r),r=ie(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function gs(t){return'href="'+bt(t)+'"'}function Lo(t){return'link[rel="stylesheet"]['+t+"]"}function z0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",r),Te(n),t.head.appendChild(n))}function vs(t){return'[src="'+bt(t)+'"]'}function Oo(t){return"script[async]"+t}function B0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+bt(r.href)+'"]');if(o)return n.instance=o,Te(o),o;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Te(o),Rn(o,"style",u),uc(o,r.precedence,t),n.instance=o;case"stylesheet":u=gs(r.href);var h=t.querySelector(Lo(u));if(h)return n.state.loading|=4,n.instance=h,Te(h),h;o=z0(r),(u=gi.get(u))&&pd(o,u),h=(t.ownerDocument||t).createElement("link"),Te(h);var S=h;return S._p=new Promise(function(w,W){S.onload=w,S.onerror=W}),Rn(h,"link",o),n.state.loading|=4,uc(h,r.precedence,t),n.instance=h;case"script":return h=vs(r.src),(u=t.querySelector(Oo(h)))?(n.instance=u,Te(u),u):(o=r,(u=gi.get(h))&&(o=v({},r),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Te(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uc(o,r.precedence,t));return n.instance}function uc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var w=o[S];if(w.dataset.precedence===n)h=w;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var fc=null;function F0(t,n,r){if(fc===null){var o=new Map,u=fc=new Map;u.set(r,o)}else u=fc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var h=r[u];if(!(h[ar]||h[un]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var w=o.get(S);w?w.push(h):o.set(S,[h])}}return o}function H0(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function vS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _S(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=gs(o.href),h=n.querySelector(Lo(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=dc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=h,Te(h);return}h=n.ownerDocument||n,o=z0(o),(u=gi.get(u))&&pd(o,u),h=h.createElement("link"),Te(h);var S=h;S._p=new Promise(function(w,W){S.onload=w,S.onerror=W}),Rn(h,"link",o),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=dc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var gd=0;function xS(t,n){return t.stylesheets&&t.count===0&&pc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*$y());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&pc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function dc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)pc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var hc=null;function pc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,hc=new Map,n.forEach(yS,t),hc=null,dc.call(t))}function yS(t,n){if(!(n.state.loading&4)){var r=hc.get(t);if(r)var o=r.get(null);else{r=new Map,hc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=r.get(S)||o,h===o&&r.set(null,u),r.set(S,u),this.count++,o=dc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Po={$$typeof:O,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function SS(t,n,r,o,u,h,S,w,W){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=W,this.incompleteTransitions=new Map}function V0(t,n,r,o,u,h,S,w,W,ce,xe,Ee){return t=new SS(t,n,r,S,W,ce,xe,Ee,w),n=1,h===!0&&(n|=24),h=Qn(3,null,null,n),t.current=h,h.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Ju(h),t}function k0(t){return t?(t=Yr,t):Yr}function W0(t,n,r,o,u,h){u=k0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ca(t,o,n),r!==null&&(kn(r,t,n),ho(r,t,n))}function X0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function vd(t,n){X0(t,n),(t=t.alternate)&&X0(t,n)}function j0(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&kn(n,t,67108864),vd(t,67108864)}}function q0(t){if(t.tag===13||t.tag===31){var n=ni();n=Br(n);var r=cr(t,n);r!==null&&kn(r,t,n),vd(t,n)}}var mc=!0;function MS(t,n,r,o){var u=I.T;I.T=null;var h=K.p;try{K.p=2,_d(t,n,r,o)}finally{K.p=h,I.T=u}}function ES(t,n,r,o){var u=I.T;I.T=null;var h=K.p;try{K.p=8,_d(t,n,r,o)}finally{K.p=h,I.T=u}}function _d(t,n,r,o){if(mc){var u=xd(o);if(u===null)ad(t,n,o,gc,r),Z0(t,o);else if(TS(u,t,n,r,o))o.stopPropagation();else if(Z0(t,o),n&4&&-1<bS.indexOf(t)){for(;u!==null;){var h=he(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Re(h.pendingLanes);if(S!==0){var w=h;for(w.pendingLanes|=2,w.entangledLanes|=2;S;){var W=1<<31-Ge(S);w.entanglements[1]|=W,S&=~W}Pi(h),(zt&6)===0&&(Jl=A()+500,Co(0))}}break;case 31:case 13:w=cr(h,2),w!==null&&kn(w,h,2),ec(),vd(h,2)}if(h=xd(o),h===null&&ad(t,n,o,gc,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else ad(t,n,o,null,r)}}function xd(t){return t=yu(t),yd(t)}var gc=null;function yd(t){if(gc=null,t=te(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return gc=t,null}function Y0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(oe()){case Se:return 2;case we:return 8;case ve:case $e:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var Sd=!1,Ha=null,Ga=null,Va=null,Io=new Map,zo=new Map,ka=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Io.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(n.pointerId)}}function Bo(t,n,r,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=he(n),n!==null&&j0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function TS(t,n,r,o,u){switch(n){case"focusin":return Ha=Bo(Ha,t,n,r,o,u),!0;case"dragenter":return Ga=Bo(Ga,t,n,r,o,u),!0;case"mouseover":return Va=Bo(Va,t,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return Io.set(h,Bo(Io.get(h)||null,t,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,zo.set(h,Bo(zo.get(h)||null,t,n,r,o,u)),!0}return!1}function K0(t){var n=te(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,Zs(t.priority,function(){q0(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,Zs(t.priority,function(){q0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function vc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=xd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);xu=o,r.target.dispatchEvent(o),xu=null}else return n=he(r),n!==null&&j0(n),t.blockedOn=r,!1;n.shift()}return!0}function Q0(t,n,r){vc(t)&&r.delete(n)}function AS(){Sd=!1,Ha!==null&&vc(Ha)&&(Ha=null),Ga!==null&&vc(Ga)&&(Ga=null),Va!==null&&vc(Va)&&(Va=null),Io.forEach(Q0),zo.forEach(Q0)}function _c(t,n){t.blockedOn===n&&(t.blockedOn=null,Sd||(Sd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,AS)))}var xc=null;function J0(t){xc!==t&&(xc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){xc===t&&(xc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yd(o||r)===null)continue;break}var h=he(r);h!==null&&(t.splice(n,3),n-=3,xf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function _s(t){function n(W){return _c(W,t)}Ha!==null&&_c(Ha,t),Ga!==null&&_c(Ga,t),Va!==null&&_c(Va,t),Io.forEach(n),zo.forEach(n);for(var r=0;r<ka.length;r++){var o=ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ka.length&&(r=ka[0],r.blockedOn===null);)K0(r),r.blockedOn===null&&ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],S=u[En]||null;if(typeof h=="function")S||J0(r);else if(S){var w=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[En]||null)w=S.formAction;else if(yd(u)!==null)continue}else w=S.action;typeof w=="function"?r[o+1]=w:(r.splice(o,3),o-=3),J0(r)}}}function $0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(t){this._internalRoot=t}yc.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=ni();W0(r,o,t,n,null,null)},yc.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;W0(t.current,2,null,t,null,null),ec(),n[Sa]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ir();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ka.length&&n!==0&&n<ka[r].priority;r++);ka.splice(r,0,t),r===0&&K0(t)}};var ev=e.version;if(ev!=="19.2.0")throw Error(a(527,ev,"19.2.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{Ce=Sc.inject(wS),Le=Sc}catch{}}return Ho.createRoot=function(t,n){if(!l(t))throw Error(a(299));var r=!1,o="",u=og,h=lg,S=cg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=V0(t,1,!1,null,null,r,o,null,u,h,S,$0),t[Sa]=n.current,id(t),new Md(n)},Ho.hydrateRoot=function(t,n,r){if(!l(t))throw Error(a(299));var o=!1,u="",h=og,S=lg,w=cg,W=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(w=r.onRecoverableError),r.formState!==void 0&&(W=r.formState)),n=V0(t,1,!0,n,r??null,o,u,W,h,S,w,$0),n.context=k0(null),r=n.current,o=ni(),o=Br(o),u=Ra(o),u.callback=null,Ca(r,u,o),r=o,n.current.lanes=r,On(n,r),Pi(n),t[Sa]=n.current,id(t),new yc(n)},Ho.version="19.2.0",Ho}var uv;function BS(){if(uv)return Td.exports;uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Td.exports=zS(),Td.exports}var FS=BS();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fv="popstate";function HS(s={}){function e(a,l){let{pathname:c,search:f,hash:d}=a.location;return fh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(a,l){return typeof l=="string"?l:Ko(l)}return VS(e,i,null,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Hi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GS(){return Math.random().toString(36).substring(2,10)}function dv(s,e){return{usr:s.state,key:s.key,idx:e}}function fh(s,e,i=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?ks(e):e,state:i,key:e&&e.key||a||GS()}}function Ko({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function ks(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function VS(s,e,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,f=l.history,d="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let x=g(),_=x==null?null:x-m;m=x,p&&p({action:d,location:T.location,delta:_})}function y(x,_){d="PUSH";let L=fh(T.location,x,_);m=g()+1;let O=dv(L,m),U=T.createHref(L);try{f.pushState(O,"",U)}catch(V){if(V instanceof DOMException&&V.name==="DataCloneError")throw V;l.location.assign(U)}c&&p&&p({action:d,location:T.location,delta:1})}function E(x,_){d="REPLACE";let L=fh(T.location,x,_);m=g();let O=dv(L,m),U=T.createHref(L);f.replaceState(O,"",U),c&&p&&p({action:d,location:T.location,delta:0})}function b(x){return kS(x)}let T={get action(){return d},get location(){return s(l,f)},listen(x){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(fv,v),p=x,()=>{l.removeEventListener(fv,v),p=null}},createHref(x){return e(l,x)},createURL:b,encodeLocation(x){let _=b(x);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:E,go(x){return f.go(x)}};return T}function kS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:Ko(s);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function m_(s,e,i="/"){return WS(s,e,i,!1)}function WS(s,e,i,a){let l=typeof e=="string"?ks(e):e,c=_a(l.pathname||"/",i);if(c==null)return null;let f=g_(s);XS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=nM(c);d=eM(f[p],m,a)}return d}function g_(s,e=[],i=[],a="",l=!1){let c=(f,d,p=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&p)return;tn(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=ga([a,g.relativePath]),y=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),g_(f.children,e,y,v,p)),!(f.path==null&&!f.index)&&e.push({path:v,score:JS(v,f.index),routesMeta:y})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let p of v_(f.path))c(f,d,!0,p)}),e}function v_(s){let e=s.split("/");if(e.length===0)return[];let[i,...a]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let f=v_(a.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function XS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:$S(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var jS=/^:[\w-]+$/,qS=3,YS=2,ZS=1,KS=10,QS=-2,hv=s=>s==="*";function JS(s,e){let i=s.split("/"),a=i.length;return i.some(hv)&&(a+=QS),e&&(a+=YS),i.filter(l=>!hv(l)).reduce((l,c)=>l+(jS.test(c)?qS:c===""?ZS:KS),a)}function $S(s,e){return s.length===e.length&&s.slice(0,-1).every((a,l)=>a===e[l])?s[s.length-1]-e[e.length-1]:0}function eM(s,e,i=!1){let{routesMeta:a}=s,l={},c="/",f=[];for(let d=0;d<a.length;++d){let p=a[d],m=d===a.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),y=p.route;if(!v&&m&&i&&!a[a.length-1].route.index&&(v=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ga([c,v.pathname]),pathnameBase:sM(ga([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=ga([c,v.pathnameBase]))}return f}function iu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,a]=tM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=d[y]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const E=d[y];return v&&!E?m[g]=void 0:m[g]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:s}}function tM(s,e=!1,i=!0){Hi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function nM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function _a(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=s.charAt(i);return a&&a!=="/"?null:s.slice(i)||"/"}function iM(s,e="/"){let{pathname:i,search:a="",hash:l=""}=typeof s=="string"?ks(s):s;return{pathname:i?i.startsWith("/")?i:aM(i,e):e,search:oM(a),hash:lM(l)}}function aM(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Cd(s,e,i,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function __(s){let e=rM(s);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function x_(s,e,i,a=!1){let l;typeof s=="string"?l=ks(s):(l={...s},tn(!l.pathname||!l.pathname.includes("?"),Cd("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),Cd("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),Cd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!a&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}d=v>=0?e[v]:"/"}let p=iM(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ga=s=>s.join("/").replace(/\/\/+/g,"/"),sM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),oM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,lM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function cM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var uM=["GET",...y_];new Set(uM);var Ws=q.createContext(null);Ws.displayName="DataRouter";var cu=q.createContext(null);cu.displayName="DataRouterState";q.createContext(!1);var S_=q.createContext({isTransitioning:!1});S_.displayName="ViewTransition";var fM=q.createContext(new Map);fM.displayName="Fetchers";var dM=q.createContext(null);dM.displayName="Await";var ki=q.createContext(null);ki.displayName="Navigation";var nl=q.createContext(null);nl.displayName="Location";var xa=q.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var rp=q.createContext(null);rp.displayName="RouteError";function hM(s,{relative:e}={}){tn(il(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=q.useContext(ki),{hash:l,pathname:c,search:f}=rl(s,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:ga([i,c])),a.createHref({pathname:d,search:f,hash:l})}function il(){return q.useContext(nl)!=null}function ya(){return tn(il(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(nl).location}var M_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E_(s){q.useContext(ki).static||q.useLayoutEffect(s)}function al(){let{isDataRoute:s}=q.useContext(xa);return s?AM():pM()}function pM(){tn(il(),"useNavigate() may be used only in the context of a <Router> component.");let s=q.useContext(Ws),{basename:e,navigator:i}=q.useContext(ki),{matches:a}=q.useContext(xa),{pathname:l}=ya(),c=JSON.stringify(__(a)),f=q.useRef(!1);return E_(()=>{f.current=!0}),q.useCallback((p,m={})=>{if(Hi(f.current,M_),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=x_(p,JSON.parse(c),l,m.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ga([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,c,l,s])}q.createContext(null);function rl(s,{relative:e}={}){let{matches:i}=q.useContext(xa),{pathname:a}=ya(),l=JSON.stringify(__(i));return q.useMemo(()=>x_(s,JSON.parse(l),a,e==="path"),[s,l,a,e])}function mM(s,e){return b_(s,e)}function b_(s,e,i,a,l){tn(il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=q.useContext(ki),{matches:f}=q.useContext(xa),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let L=v&&v.path||"";T_(m,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let y=ya(),E;if(e){let L=typeof e=="string"?ks(e):e;tn(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),E=L}else E=y;let b=E.pathname||"/",T=b;if(g!=="/"){let L=g.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(L.length).join("/")}let x=m_(s,{pathname:T});Hi(v||x!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Hi(x==null||x[x.length-1].route.element!==void 0||x[x.length-1].route.Component!==void 0||x[x.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=yM(x&&x.map(L=>Object.assign({},L,{params:Object.assign({},p,L.params),pathname:ga([g,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:ga([g,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,a,l);return e&&_?q.createElement(nl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},_):_}function gM(){let s=TM(),e=cM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),i?q.createElement("pre",{style:l},i):null,f)}var vM=q.createElement(gM,null),_M=class extends q.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?q.createElement(xa.Provider,{value:this.props.routeContext},q.createElement(rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xM({routeContext:s,match:e,children:i}){let a=q.useContext(Ws);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(xa.Provider,{value:s},i)}function yM(s,e=[],i=null,a=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let m=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);tn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let d=!1,p=-1;if(i)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:v,errors:y}=i,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||E){d=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,g,v)=>{let y,E=!1,b=null,T=null;i&&(y=f&&g.route.id?f[g.route.id]:void 0,b=g.route.errorElement||vM,d&&(p<0&&v===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,T=null):p===v&&(E=!0,T=g.route.hydrateFallbackElement||null)));let x=e.concat(c.slice(0,v+1)),_=()=>{let L;return y?L=b:E?L=T:g.route.Component?L=q.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=m,q.createElement(xM,{match:g,routeContext:{outlet:m,matches:x,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(_M,{location:i.location,revalidation:i.revalidation,component:b,error:y,children:_(),routeContext:{outlet:null,matches:x,isDataRoute:!0},unstable_onError:a}):_()},null)}function sp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SM(s){let e=q.useContext(Ws);return tn(e,sp(s)),e}function MM(s){let e=q.useContext(cu);return tn(e,sp(s)),e}function EM(s){let e=q.useContext(xa);return tn(e,sp(s)),e}function op(s){let e=EM(s),i=e.matches[e.matches.length-1];return tn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function bM(){return op("useRouteId")}function TM(){let s=q.useContext(rp),e=MM("useRouteError"),i=op("useRouteError");return s!==void 0?s:e.errors?.[i]}function AM(){let{router:s}=SM("useNavigate"),e=op("useNavigate"),i=q.useRef(!1);return E_(()=>{i.current=!0}),q.useCallback(async(l,c={})=>{Hi(i.current,M_),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var pv={};function T_(s,e,i){!e&&!pv[s]&&(pv[s]=!0,Hi(!1,i))}q.memo(wM);function wM({routes:s,future:e,state:i,unstable_onError:a}){return b_(s,void 0,i,a,e)}function qc(s){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function RM({basename:s="/",children:e=null,location:i,navigationType:a="POP",navigator:l,static:c=!1}){tn(!il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=ks(i));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:y="default"}=i,E=q.useMemo(()=>{let b=_a(p,f);return b==null?null:{location:{pathname:b,search:m,hash:g,state:v,key:y},navigationType:a}},[f,p,m,g,v,y,a]);return Hi(E!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:q.createElement(ki.Provider,{value:d},q.createElement(nl.Provider,{children:e,value:E}))}function CM({children:s,location:e}){return mM(dh(s),e)}function dh(s,e=[]){let i=[];return q.Children.forEach(s,(a,l)=>{if(!q.isValidElement(a))return;let c=[...e,l];if(a.type===q.Fragment){i.push.apply(i,dh(a.props.children,c));return}tn(a.type===qc,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=dh(a.props.children,c)),i.push(f)}),i}var Yc="get",Zc="application/x-www-form-urlencoded";function uu(s){return s!=null&&typeof s.tagName=="string"}function DM(s){return uu(s)&&s.tagName.toLowerCase()==="button"}function NM(s){return uu(s)&&s.tagName.toLowerCase()==="form"}function UM(s){return uu(s)&&s.tagName.toLowerCase()==="input"}function LM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function OM(s,e){return s.button===0&&(!e||e==="_self")&&!LM(s)}var Mc=null;function PM(){if(Mc===null)try{new FormData(document.createElement("form"),0),Mc=!1}catch{Mc=!0}return Mc}var IM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dd(s){return s!=null&&!IM.has(s)?(Hi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zc}"`),null):s}function zM(s,e){let i,a,l,c,f;if(NM(s)){let d=s.getAttribute("action");a=d?_a(d,e):null,i=s.getAttribute("method")||Yc,l=Dd(s.getAttribute("enctype"))||Zc,c=new FormData(s)}else if(DM(s)||UM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||d.getAttribute("action");if(a=p?_a(p,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Yc,l=Dd(s.getAttribute("formenctype"))||Dd(d.getAttribute("enctype"))||Zc,c=new FormData(d,s),!PM()){let{name:m,type:g,value:v}=s;if(g==="image"){let y=m?`${m}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else m&&c.append(m,v)}}else{if(uu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Yc,a=null,l=Zc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function BM(s,e,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${i}`:e&&_a(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function FM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function GM(s,e,i){let a=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await FM(c,i);return f.links?f.links():[]}return[]}));return XM(a.flat(1).filter(HM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function mv(s,e,i,a,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,m)=>f(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function VM(s,e,{includeHydrateFallback:i}={}){return kM(s.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function kM(s){return[...new Set(s)]}function WM(s){let e={},i=Object.keys(s).sort();for(let a of i)e[a]=s[a];return e}function XM(s,e){let i=new Set;return new Set(e),s.reduce((a,l)=>{let c=JSON.stringify(WM(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}function A_(){let s=q.useContext(Ws);return lp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function jM(){let s=q.useContext(cu);return lp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var cp=q.createContext(void 0);cp.displayName="FrameworkContext";function w_(){let s=q.useContext(cp);return lp(s,"You must render this element inside a <HydratedRouter> element"),s}function qM(s,e){let i=q.useContext(cp),[a,l]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=e,y=q.useRef(null);q.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(L=>{f(L.isIntersecting)})},x=new IntersectionObserver(T,{threshold:.5});return y.current&&x.observe(y.current),()=>{x.disconnect()}}},[s]),q.useEffect(()=>{if(a){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[a]);let E=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,y,{}]:[c,y,{onFocus:Go(d,E),onBlur:Go(p,b),onMouseEnter:Go(m,E),onMouseLeave:Go(g,b),onTouchStart:Go(v,E)}]:[!1,y,{}]}function Go(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function YM({page:s,...e}){let{router:i}=A_(),a=q.useMemo(()=>m_(i.routes,s,i.basename),[i.routes,s,i.basename]);return a?q.createElement(KM,{page:s,matches:a,...e}):null}function ZM(s){let{manifest:e,routeModules:i}=w_(),[a,l]=q.useState([]);return q.useEffect(()=>{let c=!1;return GM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),a}function KM({page:s,matches:e,...i}){let a=ya(),{manifest:l,routeModules:c}=w_(),{basename:f}=A_(),{loaderData:d,matches:p}=jM(),m=q.useMemo(()=>mv(s,e,p,l,a,"data"),[s,e,p,l,a]),g=q.useMemo(()=>mv(s,e,p,l,a,"assets"),[s,e,p,l,a]),v=q.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let b=new Set,T=!1;if(e.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!m.some(O=>O.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||L.hasClientLoader?T=!0:b.add(_.route.id))}),b.size===0)return[];let x=BM(s,f,"data");return T&&b.size>0&&x.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[x.pathname+x.search]},[f,d,a,l,m,e,s,c]),y=q.useMemo(()=>VM(g,l),[g,l]),E=ZM(g);return q.createElement(q.Fragment,null,v.map(b=>q.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),y.map(b=>q.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:T})=>q.createElement("link",{key:b,nonce:i.nonce,...T})))}function QM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.9.4")}catch{}function JM({basename:s,children:e,window:i}){let a=q.useRef();a.current==null&&(a.current=HS({window:i,v5Compat:!0}));let l=a.current,[c,f]=q.useState({action:l.action,location:l.location}),d=q.useCallback(p=>{q.startTransition(()=>f(p))},[f]);return q.useLayoutEffect(()=>l.listen(d),[l,d]),q.createElement(RM,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var C_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D_=q.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:l,reloadDocument:c,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:v,...y},E){let{basename:b}=q.useContext(ki),T=typeof m=="string"&&C_.test(m),x,_=!1;if(typeof m=="string"&&T&&(x=m,R_))try{let D=new URL(window.location.href),N=m.startsWith("//")?new URL(D.protocol+m):new URL(m),j=_a(N.pathname,b);N.origin===D.origin&&j!=null?m=j+N.search+N.hash:_=!0}catch{Hi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=hM(m,{relative:l}),[O,U,V]=qM(a,y),k=nE(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:v});function z(D){e&&e(D),D.defaultPrevented||k(D)}let Z=q.createElement("a",{...y,...V,href:x||L,onClick:_||c?e:z,ref:QM(E,U),target:p,"data-discover":!T&&i==="render"?"true":void 0});return O&&!T?q.createElement(q.Fragment,null,Z,q.createElement(YM,{page:L})):Z});D_.displayName="Link";var $M=q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:f,viewTransition:d,children:p,...m},g){let v=rl(f,{relative:m.relative}),y=ya(),E=q.useContext(cu),{navigator:b,basename:T}=q.useContext(ki),x=E!=null&&oE(v)&&d===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,L=y.pathname,O=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(L=L.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&T&&(O=_a(O,T)||O);const U=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let V=L===_||!l&&L.startsWith(_)&&L.charAt(U)==="/",k=O!=null&&(O===_||!l&&O.startsWith(_)&&O.charAt(_.length)==="/"),z={isActive:V,isPending:k,isTransitioning:x},Z=V?e:void 0,D;typeof a=="function"?D=a(z):D=[a,V?"active":null,k?"pending":null,x?"transitioning":null].filter(Boolean).join(" ");let N=typeof c=="function"?c(z):c;return q.createElement(D_,{...m,"aria-current":Z,className:D,ref:g,style:N,to:f,viewTransition:d},typeof p=="function"?p(z):p)});$M.displayName="NavLink";var eE=q.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:l,state:c,method:f=Yc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,...y},E)=>{let b=rE(),T=sE(d,{relative:m}),x=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&C_.test(d),L=O=>{if(p&&p(O),O.defaultPrevented)return;O.preventDefault();let U=O.nativeEvent.submitter,V=U?.getAttribute("formmethod")||f;b(U||O.currentTarget,{fetcherKey:e,method:V,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:v})};return q.createElement("form",{ref:E,method:x,action:T,onSubmit:a?p:L,...y,"data-discover":!_&&s==="render"?"true":void 0})});eE.displayName="Form";function tE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N_(s){let e=q.useContext(Ws);return tn(e,tE(s)),e}function nE(s,{target:e,replace:i,state:a,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=al(),p=ya(),m=rl(s,{relative:c});return q.useCallback(g=>{if(OM(g,e)){g.preventDefault();let v=i!==void 0?i:Ko(p)===Ko(m);d(s,{replace:v,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,d,m,i,a,e,s,l,c,f])}var iE=0,aE=()=>`__${String(++iE)}__`;function rE(){let{router:s}=N_("useSubmit"),{basename:e}=q.useContext(ki),i=bM();return q.useCallback(async(a,l={})=>{let{action:c,method:f,encType:d,formData:p,body:m}=zM(a,e);if(l.navigate===!1){let g=l.fetcherKey||aE();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function sE(s,{relative:e}={}){let{basename:i}=q.useContext(ki),a=q.useContext(xa);tn(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...rl(s||".",{relative:e})},f=ya();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Ko(c)}function oE(s,{relative:e}={}){let i=q.useContext(S_);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=N_("useViewTransitionState"),l=rl(s,{relative:e});if(!i.isTransitioning)return!1;let c=_a(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,a)||i.nextLocation.pathname;return iu(l.pathname,f)!=null||iu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="180",lE=0,gv=1,cE=2,U_=1,uE=2,ha=3,tr=0,jn=1,pa=2,$a=0,Is=1,hh=2,vv=3,_v=4,fE=5,Dr=100,dE=101,hE=102,pE=103,mE=104,gE=200,vE=201,_E=202,xE=203,ph=204,mh=205,yE=206,SE=207,ME=208,EE=209,bE=210,TE=211,AE=212,wE=213,RE=214,gh=0,vh=1,_h=2,Bs=3,xh=4,yh=5,Sh=6,Mh=7,L_=0,CE=1,DE=2,er=0,NE=1,UE=2,LE=3,OE=4,PE=5,IE=6,zE=7,O_=300,Fs=301,Hs=302,Eh=303,bh=304,fu=306,Th=1e3,Ur=1001,Ah=1002,Ri=1003,BE=1004,Ec=1005,zi=1006,Nd=1007,Lr=1008,Gi=1009,P_=1010,I_=1011,Qo=1012,fp=1013,Pr=1014,ma=1015,sl=1016,dp=1017,hp=1018,Jo=1020,z_=35902,B_=35899,F_=1021,H_=1022,wi=1023,$o=1026,el=1027,G_=1028,pp=1029,V_=1030,mp=1031,gp=1033,Kc=33776,Qc=33777,Jc=33778,$c=33779,wh=35840,Rh=35841,Ch=35842,Dh=35843,Nh=36196,Uh=37492,Lh=37496,Oh=37808,Ph=37809,Ih=37810,zh=37811,Bh=37812,Fh=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Wh=37818,Xh=37819,jh=37820,qh=37821,Yh=36492,Zh=36494,Kh=36495,Qh=36283,Jh=36284,$h=36285,ep=36286,FE=3200,HE=3201,k_=0,GE=1,Ja="",xi="srgb",Gs="srgb-linear",au="linear",jt="srgb",xs=7680,xv=519,VE=512,kE=513,WE=514,W_=515,XE=516,jE=517,qE=518,YE=519,yv=35044,Sv="300 es",Bi=2e3,ru=2001;class Xs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,tp=180/Math.PI;function ol(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function wt(s,e,i){return Math.max(e,Math.min(i,s))}function ZE(s,e){return(s%e+e)%e}function Ld(s,e,i){return(1-i)*s+i*e}function Vo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(wt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ll{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,d){let p=a[l+0],m=a[l+1],g=a[l+2],v=a[l+3];const y=c[f+0],E=c[f+1],b=c[f+2],T=c[f+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=y,e[i+1]=E,e[i+2]=b,e[i+3]=T;return}if(v!==T||p!==y||m!==E||g!==b){let x=1-d;const _=p*y+m*E+g*b+v*T,L=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const V=Math.sqrt(O),k=Math.atan2(V,_*L);x=Math.sin(x*k)/V,d=Math.sin(d*k)/V}const U=d*L;if(p=p*x+y*U,m=m*x+E*U,g=g*x+b*U,v=v*x+T*U,x===1-d){const V=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=V,m*=V,g*=V,v*=V}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,a,l,c,f){const d=a[l],p=a[l+1],m=a[l+2],g=a[l+3],v=c[f],y=c[f+1],E=c[f+2],b=c[f+3];return e[i]=d*b+g*v+p*E-m*y,e[i+1]=p*b+g*y+m*v-d*E,e[i+2]=m*b+g*E+d*y-p*v,e[i+3]=g*b-d*v-p*y-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(a/2),g=d(l/2),v=d(c/2),y=p(a/2),E=p(l/2),b=p(c/2);switch(f){case"XYZ":this._x=y*g*v+m*E*b,this._y=m*E*v-y*g*b,this._z=m*g*b+y*E*v,this._w=m*g*v-y*E*b;break;case"YXZ":this._x=y*g*v+m*E*b,this._y=m*E*v-y*g*b,this._z=m*g*b-y*E*v,this._w=m*g*v+y*E*b;break;case"ZXY":this._x=y*g*v-m*E*b,this._y=m*E*v+y*g*b,this._z=m*g*b+y*E*v,this._w=m*g*v-y*E*b;break;case"ZYX":this._x=y*g*v-m*E*b,this._y=m*E*v+y*g*b,this._z=m*g*b-y*E*v,this._w=m*g*v+y*E*b;break;case"YZX":this._x=y*g*v+m*E*b,this._y=m*E*v+y*g*b,this._z=m*g*b-y*E*v,this._w=m*g*v-y*E*b;break;case"XZY":this._x=y*g*v-m*E*b,this._y=m*E*v-y*g*b,this._z=m*g*b+y*E*v,this._w=m*g*v+y*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],y=a+d+v;if(y>0){const E=.5/Math.sqrt(y+1);this._w=.25/E,this._x=(g-p)*E,this._y=(c-m)*E,this._z=(f-l)*E}else if(a>d&&a>v){const E=2*Math.sqrt(1+a-d-v);this._w=(g-p)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+m)/E}else if(d>v){const E=2*Math.sqrt(1+d-a-v);this._w=(c-m)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+v-a-d);this._w=(f-l)/E,this._x=(c+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-a*m,this._z=c*g+f*m+a*p-l*d,this._w=f*g-a*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const a=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+a*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*a+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,y=Math.sin(i*g)/m;return this._w=f*v+this._w*y,this._x=a*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class pe{constructor(e=0,i=0,a=0){pe.prototype.isVector3=!0,this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*l-d*a),g=2*(d*i-c*l),v=2*(c*a-f*i);return this.x=i+p*m+f*v-d*g,this.y=a+p*g+d*m-c*v,this.z=l+p*v+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-a*p,this.z=a*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(wt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Od=new pe,Mv=new ll;class vt{constructor(e,i,a,l,c,f,d,p,m){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,p,m)}set(e,i,a,l,c,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[3],p=a[6],m=a[1],g=a[4],v=a[7],y=a[2],E=a[5],b=a[8],T=l[0],x=l[3],_=l[6],L=l[1],O=l[4],U=l[7],V=l[2],k=l[5],z=l[8];return c[0]=f*T+d*L+p*V,c[3]=f*x+d*O+p*k,c[6]=f*_+d*U+p*z,c[1]=m*T+g*L+v*V,c[4]=m*x+g*O+v*k,c[7]=m*_+g*U+v*z,c[2]=y*T+E*L+b*V,c[5]=y*x+E*O+b*k,c[8]=y*_+E*U+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*f*g-i*d*m-a*c*g+a*d*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*f-d*m,y=d*p-g*c,E=m*c-f*p,b=i*v+a*y+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(l*m-g*a)*T,e[2]=(d*a-l*f)*T,e[3]=y*T,e[4]=(g*i-l*p)*T,e[5]=(l*c-d*i)*T,e[6]=E*T,e[7]=(a*p-m*i)*T,e[8]=(f*i-a*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*d)+f+e,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pd=new vt;function X_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function su(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function KE(){const s=su("canvas");return s.style.display="block",s}const Ev={};function tl(s){s in Ev||(Ev[s]=!0,console.warn(s))}function QE(s,e,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const bv=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tv=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JE(){const s={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return tl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return tl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[Gs]:{primaries:e,whitePoint:a,transfer:au,toXYZ:bv,fromXYZ:Tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:a,transfer:jt,toXYZ:bv,fromXYZ:Tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Pt=JE();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class $E{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ys===void 0&&(ys=su("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=ys}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(va(i[a]/255)*255):i[a]=va(i[a]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eb=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Id(l[f].image)):c.push(Id(l[f]))}else c=Id(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$E.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tb=0;const zd=new pe;class qn extends Xs{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,a=Ur,l=Ur,c=zi,f=Lr,d=wi,p=Gi,m=qn.DEFAULT_ANISOTROPY,g=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=ol(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=O_;qn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,a=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],y=p[1],E=p[5],b=p[9],T=p[2],x=p[6],_=p[10];if(Math.abs(g-y)<.01&&Math.abs(v-T)<.01&&Math.abs(b-x)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+T)<.1&&Math.abs(b+x)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,U=(E+1)/2,V=(_+1)/2,k=(g+y)/4,z=(v+T)/4,Z=(b+x)/4;return O>U&&O>V?O<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(O),l=k/a,c=z/a):U>V?U<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(U),a=k/l,c=Z/l):V<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),a=z/c,l=Z/c),this.set(a,l,c,i),this}let L=Math.sqrt((x-b)*(x-b)+(v-T)*(v-T)+(y-g)*(y-g));return Math.abs(L)<.001&&(L=1),this.x=(x-b)/L,this.y=(v-T)/L,this.z=(y-g)/L,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nb extends Xs{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:a.depth},c=new qn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends nb{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class j_ extends qn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ib extends qn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cl{constructor(e=new pe(1/0,1/0,1/0),i=new pe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),bc.copy(a.boundingBox)),bc.applyMatrix4(e.matrixWorld),this.union(bc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Tc.subVectors(this.max,ko),Ss.subVectors(e.a,ko),Ms.subVectors(e.b,ko),Es.subVectors(e.c,ko),Xa.subVectors(Ms,Ss),ja.subVectors(Es,Ms),Mr.subVectors(Ss,Es);let i=[0,-Xa.z,Xa.y,0,-ja.z,ja.y,0,-Mr.z,Mr.y,Xa.z,0,-Xa.x,ja.z,0,-ja.x,Mr.z,0,-Mr.x,-Xa.y,Xa.x,0,-ja.y,ja.x,0,-Mr.y,Mr.x,0];return!Bd(i,Ss,Ms,Es,Tc)||(i=[1,0,0,0,1,0,0,0,1],!Bd(i,Ss,Ms,Es,Tc))?!1:(Ac.crossVectors(Xa,ja),i=[Ac.x,Ac.y,Ac.z],Bd(i,Ss,Ms,Es,Tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new pe,new pe,new pe,new pe,new pe,new pe,new pe,new pe],Ei=new pe,bc=new cl,Ss=new pe,Ms=new pe,Es=new pe,Xa=new pe,ja=new pe,Mr=new pe,ko=new pe,Tc=new pe,Ac=new pe,Er=new pe;function Bd(s,e,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){Er.fromArray(s,c);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),p=e.dot(Er),m=i.dot(Er),g=a.dot(Er);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const ab=new cl,Wo=new pe,Fd=new pe;class du{constructor(e=new pe,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):ab.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wo.subVectors(e,this.center);const i=Wo.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(Wo,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wo.copy(e.center).add(Fd)),this.expandByPoint(Wo.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new pe,Hd=new pe,wc=new pe,qa=new pe,Gd=new pe,Rc=new pe,Vd=new pe;class q_{constructor(e=new pe,i=new pe(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Hd.copy(e).add(i).multiplyScalar(.5),wc.copy(i).sub(e).normalize(),qa.copy(this.origin).sub(Hd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(wc),d=qa.dot(this.direction),p=-qa.dot(wc),m=qa.lengthSq(),g=Math.abs(1-f*f);let v,y,E,b;if(g>0)if(v=f*p-d,y=f*d-p,b=c*g,v>=0)if(y>=-b)if(y<=b){const T=1/g;v*=T,y*=T,E=v*(v+f*y+2*d)+y*(f*v+y+2*p)+m}else y=c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*p)+m;else y=-c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*p)+m;else y<=-b?(v=Math.max(0,-(-f*c+d)),y=v>0?-c:Math.min(Math.max(-c,-p),c),E=-v*v+y*(y+2*p)+m):y<=b?(v=0,y=Math.min(Math.max(-c,-p),c),E=y*(y+2*p)+m):(v=Math.max(0,-(f*c+d)),y=v>0?c:Math.min(Math.max(-c,-p),c),E=-v*v+y*(y+2*p)+m);else y=f>0?-c:c,v=Math.max(0,-(f*y+d)),E=-v*v+y*(y+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Hd).addScaledVector(wc,y),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const a=ca.dot(this.direction),l=ca.dot(ca)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,p=a+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return m>=0?(a=(e.min.x-y.x)*m,l=(e.max.x-y.x)*m):(a=(e.max.x-y.x)*m,l=(e.min.x-y.x)*m),g>=0?(c=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-y.z)*v,p=(e.max.z-y.z)*v):(d=(e.max.z-y.z)*v,p=(e.min.z-y.z)*v),a>p||d>l)||((d>a||a!==a)&&(a=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,a,l,c){Gd.subVectors(i,e),Rc.subVectors(a,e),Vd.crossVectors(Gd,Rc);let f=this.direction.dot(Vd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;qa.subVectors(this.origin,e);const p=d*this.direction.dot(Rc.crossVectors(qa,Rc));if(p<0)return null;const m=d*this.direction.dot(Gd.cross(qa));if(m<0||p+m>f)return null;const g=-d*qa.dot(Vd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,a,l,c,f,d,p,m,g,v,y,E,b,T,x){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,p,m,g,v,y,E,b,T,x)}set(e,i,a,l,c,f,d,p,m,g,v,y,E,b,T,x){const _=this.elements;return _[0]=e,_[4]=i,_[8]=a,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=y,_[3]=E,_[7]=b,_[11]=T,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,a=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),d=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=f*g,E=f*v,b=d*g,T=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=E+b*m,i[5]=y-T*m,i[9]=-d*p,i[2]=T-y*m,i[6]=b+E*m,i[10]=f*p}else if(e.order==="YXZ"){const y=p*g,E=p*v,b=m*g,T=m*v;i[0]=y+T*d,i[4]=b*d-E,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=E*d-b,i[6]=T+y*d,i[10]=f*p}else if(e.order==="ZXY"){const y=p*g,E=p*v,b=m*g,T=m*v;i[0]=y-T*d,i[4]=-f*v,i[8]=b+E*d,i[1]=E+b*d,i[5]=f*g,i[9]=T-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(e.order==="ZYX"){const y=f*g,E=f*v,b=d*g,T=d*v;i[0]=p*g,i[4]=b*m-E,i[8]=y*m+T,i[1]=p*v,i[5]=T*m+y,i[9]=E*m-b,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(e.order==="YZX"){const y=f*p,E=f*m,b=d*p,T=d*m;i[0]=p*g,i[4]=T-y*v,i[8]=b*v+E,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=E*v+b,i[10]=y-T*v}else if(e.order==="XZY"){const y=f*p,E=f*m,b=d*p,T=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=y*v+T,i[5]=f*g,i[9]=E*v-b,i[2]=b*v-E,i[6]=d*g,i[10]=T*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rb,e,sb)}lookAt(e,i,a){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ya.crossVectors(a,ii),Ya.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ya.crossVectors(a,ii)),Ya.normalize(),Cc.crossVectors(ii,Ya),l[0]=Ya.x,l[4]=Cc.x,l[8]=ii.x,l[1]=Ya.y,l[5]=Cc.y,l[9]=ii.y,l[2]=Ya.z,l[6]=Cc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[4],p=a[8],m=a[12],g=a[1],v=a[5],y=a[9],E=a[13],b=a[2],T=a[6],x=a[10],_=a[14],L=a[3],O=a[7],U=a[11],V=a[15],k=l[0],z=l[4],Z=l[8],D=l[12],N=l[1],j=l[5],ae=l[9],de=l[13],_e=l[2],re=l[6],I=l[10],K=l[14],Q=l[3],G=l[7],R=l[11],M=l[15];return c[0]=f*k+d*N+p*_e+m*Q,c[4]=f*z+d*j+p*re+m*G,c[8]=f*Z+d*ae+p*I+m*R,c[12]=f*D+d*de+p*K+m*M,c[1]=g*k+v*N+y*_e+E*Q,c[5]=g*z+v*j+y*re+E*G,c[9]=g*Z+v*ae+y*I+E*R,c[13]=g*D+v*de+y*K+E*M,c[2]=b*k+T*N+x*_e+_*Q,c[6]=b*z+T*j+x*re+_*G,c[10]=b*Z+T*ae+x*I+_*R,c[14]=b*D+T*de+x*K+_*M,c[3]=L*k+O*N+U*_e+V*Q,c[7]=L*z+O*j+U*re+V*G,c[11]=L*Z+O*ae+U*I+V*R,c[15]=L*D+O*de+U*K+V*M,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],y=e[10],E=e[14],b=e[3],T=e[7],x=e[11],_=e[15];return b*(+c*p*v-l*m*v-c*d*y+a*m*y+l*d*E-a*p*E)+T*(+i*p*E-i*m*y+c*f*y-l*f*E+l*m*g-c*p*g)+x*(+i*m*v-i*d*E-c*f*v+a*f*E+c*d*g-a*m*g)+_*(-l*d*g-i*p*v+i*d*y+l*f*v-a*f*y+a*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],y=e[10],E=e[11],b=e[12],T=e[13],x=e[14],_=e[15],L=v*x*m-T*y*m+T*p*E-d*x*E-v*p*_+d*y*_,O=b*y*m-g*x*m-b*p*E+f*x*E+g*p*_-f*y*_,U=g*T*m-b*v*m+b*d*E-f*T*E-g*d*_+f*v*_,V=b*v*p-g*T*p-b*d*y+f*T*y+g*d*x-f*v*x,k=i*L+a*O+l*U+c*V;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=L*z,e[1]=(T*y*c-v*x*c-T*l*E+a*x*E+v*l*_-a*y*_)*z,e[2]=(d*x*c-T*p*c+T*l*m-a*x*m-d*l*_+a*p*_)*z,e[3]=(v*p*c-d*y*c-v*l*m+a*y*m+d*l*E-a*p*E)*z,e[4]=O*z,e[5]=(g*x*c-b*y*c+b*l*E-i*x*E-g*l*_+i*y*_)*z,e[6]=(b*p*c-f*x*c-b*l*m+i*x*m+f*l*_-i*p*_)*z,e[7]=(f*y*c-g*p*c+g*l*m-i*y*m-f*l*E+i*p*E)*z,e[8]=U*z,e[9]=(b*v*c-g*T*c-b*a*E+i*T*E+g*a*_-i*v*_)*z,e[10]=(f*T*c-b*d*c+b*a*m-i*T*m-f*a*_+i*d*_)*z,e[11]=(g*d*c-f*v*c-g*a*m+i*v*m+f*a*E-i*d*E)*z,e[12]=V*z,e[13]=(g*T*l-b*v*l+b*a*y-i*T*y-g*a*x+i*v*x)*z,e[14]=(b*d*l-f*T*l-b*a*p+i*T*p+f*a*x-i*d*x)*z,e[15]=(f*v*l-g*d*l+g*a*p-i*v*p-f*a*y+i*d*y)*z,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,d=e.y,p=e.z,m=c*f,g=c*d;return this.set(m*f+a,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+a,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,v=d+d,y=c*m,E=c*g,b=c*v,T=f*g,x=f*v,_=d*v,L=p*m,O=p*g,U=p*v,V=a.x,k=a.y,z=a.z;return l[0]=(1-(T+_))*V,l[1]=(E+U)*V,l[2]=(b-O)*V,l[3]=0,l[4]=(E-U)*k,l[5]=(1-(y+_))*k,l[6]=(x+L)*k,l[7]=0,l[8]=(b+O)*z,l[9]=(x-L)*z,l[10]=(1-(y+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;let c=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),d=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const m=1/c,g=1/f,v=1/d;return bi.elements[0]*=m,bi.elements[1]*=m,bi.elements[2]*=m,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),a.x=c,a.y=f,a.z=d,this}makePerspective(e,i,a,l,c,f,d=Bi,p=!1){const m=this.elements,g=2*c/(i-e),v=2*c/(a-l),y=(i+e)/(i-e),E=(a+l)/(a-l);let b,T;if(p)b=c/(f-c),T=f*c/(f-c);else if(d===Bi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===ru)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=v,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,a,l,c,f,d=Bi,p=!1){const m=this.elements,g=2/(i-e),v=2/(a-l),y=-(i+e)/(i-e),E=-(a+l)/(a-l);let b,T;if(p)b=1/(f-c),T=f/(f-c);else if(d===Bi)b=-2/(f-c),T=-(f+c)/(f-c);else if(d===ru)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=v,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=b,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}}const bs=new pe,bi=new sn,rb=new pe(0,0,0),sb=new pe(1,1,1),Ya=new pe,Cc=new pe,ii=new pe,Av=new sn,wv=new ll;class Vi{constructor(e=0,i=0,a=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],y=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return Av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Av,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ob=0;const Rv=new pe,Ts=new ll,ua=new sn,Dc=new pe,Xo=new pe,lb=new pe,cb=new ll,Cv=new pe(1,0,0),Dv=new pe(0,1,0),Nv=new pe(0,0,1),Uv={type:"added"},ub={type:"removed"},As={type:"childadded",child:null},kd={type:"childremoved",child:null};class Cn extends Xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new pe,i=new Vi,a=new ll,l=new pe(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new vt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,i){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Dc.copy(e):Dc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(Xo,Dc,this.up):ua.lookAt(Dc,Xo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(ua),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ub),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),y=f(e.skeletons),E=f(e.animations),b=f(e.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),y.length>0&&(a.skeletons=y),E.length>0&&(a.animations=E),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new pe(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new pe,fa=new pe,Wd=new pe,da=new pe,ws=new pe,Rs=new pe,Lv=new pe,Xd=new pe,jd=new pe,qd=new pe,Yd=new rn,Zd=new rn,Kd=new rn;class Ai{constructor(e=new pe,i=new pe,a=new pe){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Ti.subVectors(l,i),fa.subVectors(a,i),Wd.subVectors(e,i);const f=Ti.dot(Ti),d=Ti.dot(fa),p=Ti.dot(Wd),m=fa.dot(fa),g=fa.dot(Wd),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const y=1/v,E=(m*p-d*g)*y,b=(f*g-d*p)*y;return c.set(1-E-b,b,E)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,a,l,c,f,d,p){return this.getBarycoord(e,i,a,l,da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,da.x),p.addScaledVector(f,da.y),p.addScaledVector(d,da.z),p)}static getInterpolatedAttribute(e,i,a,l,c,f){return Yd.setScalar(0),Zd.setScalar(0),Kd.setScalar(0),Yd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,a),Kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Yd,c.x),f.addScaledVector(Zd,c.y),f.addScaledVector(Kd,c.z),f}static isFrontFacing(e,i,a,l){return Ti.subVectors(a,i),fa.subVectors(e,i),Ti.cross(fa).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,d;ws.subVectors(l,a),Rs.subVectors(c,a),Xd.subVectors(e,a);const p=ws.dot(Xd),m=Rs.dot(Xd);if(p<=0&&m<=0)return i.copy(a);jd.subVectors(e,l);const g=ws.dot(jd),v=Rs.dot(jd);if(g>=0&&v<=g)return i.copy(l);const y=p*v-g*m;if(y<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(a).addScaledVector(ws,f);qd.subVectors(e,c);const E=ws.dot(qd),b=Rs.dot(qd);if(b>=0&&E<=b)return i.copy(c);const T=E*m-p*b;if(T<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(a).addScaledVector(Rs,d);const x=g*b-E*v;if(x<=0&&v-g>=0&&E-b>=0)return Lv.subVectors(c,l),d=(v-g)/(v-g+(E-b)),i.copy(l).addScaledVector(Lv,d);const _=1/(x+T+y);return f=T*_,d=y*_,i.copy(a).addScaledVector(ws,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Nc={h:0,s:0,l:0};function Qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Dt{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=a,Pt.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Pt.workingColorSpace){if(e=ZE(e,1),i=wt(i,0,1),a=wt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Qd(f,c,e+1/3),this.g=Qd(f,c,e),this.b=Qd(f,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const a=Z_[e.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Pt.workingToColorSpace(Ln.copy(this),e),Math.round(wt(Ln.r*255,0,255))*65536+Math.round(wt(Ln.g*255,0,255))*256+Math.round(wt(Ln.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(Ln.copy(this),i);const a=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case a:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-a)/v+2;break;case c:p=(a-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=xi){Pt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,a=Ln.g,l=Ln.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(Nc);const a=Ld(Za.h,Nc.h,i),l=Ld(Za.s,Nc.s,i),c=Ld(Za.l,Nc.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Dt;Dt.NAMES=Z_;let fb=0;class js extends Xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Is,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(a.blending=this.blending),this.side!==tr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ph&&(a.blendSrc=this.blendSrc),this.blendDst!==mh&&(a.blendDst=this.blendDst),this.blendEquation!==Dr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class K_ extends js{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new pe,Uc=new It;let db=0;class Yn{constructor(e,i,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=yv,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Uc.fromBufferAttribute(this,i),Uc.applyMatrix3(e),this.setXY(i,Uc.x,Uc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=Vo(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Wn(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Vo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Vo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Vo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Vo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yv&&(e.usage=this.usage),e}}class Q_ extends Yn{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class J_ extends Yn{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Fi extends Yn{constructor(e,i,a){super(new Float32Array(e),i,a)}}let hb=0;const vi=new sn,Jd=new Cn,Cs=new pe,ai=new cl,jo=new cl,Mn=new pe;class Ci extends Xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?J_:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new vt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,a){return vi.makeTranslation(e,i,a),this.applyMatrix4(vi),this}scale(e,i,a){return vi.makeScale(e,i,a),this.applyMatrix4(vi),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Fi(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new pe(-1/0,-1/0,-1/0),new pe(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new pe,1/0);return}if(e){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];jo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ai.min,jo.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,jo.max),ai.expandByPoint(Mn)):(ai.expandByPoint(jo.min),ai.expandByPoint(jo.max))}ai.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Mn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),Mn.add(Cs)),l=Math.max(l,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let Z=0;Z<a.count;Z++)d[Z]=new pe,p[Z]=new pe;const m=new pe,g=new pe,v=new pe,y=new It,E=new It,b=new It,T=new pe,x=new pe;function _(Z,D,N){m.fromBufferAttribute(a,Z),g.fromBufferAttribute(a,D),v.fromBufferAttribute(a,N),y.fromBufferAttribute(c,Z),E.fromBufferAttribute(c,D),b.fromBufferAttribute(c,N),g.sub(m),v.sub(m),E.sub(y),b.sub(y);const j=1/(E.x*b.y-b.x*E.y);isFinite(j)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(v,-E.y).multiplyScalar(j),x.copy(v).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(j),d[Z].add(T),d[D].add(T),d[N].add(T),p[Z].add(x),p[D].add(x),p[N].add(x))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Z=0,D=L.length;Z<D;++Z){const N=L[Z],j=N.start,ae=N.count;for(let de=j,_e=j+ae;de<_e;de+=3)_(e.getX(de+0),e.getX(de+1),e.getX(de+2))}const O=new pe,U=new pe,V=new pe,k=new pe;function z(Z){V.fromBufferAttribute(l,Z),k.copy(V);const D=d[Z];O.copy(D),O.sub(V.multiplyScalar(V.dot(D))).normalize(),U.crossVectors(k,D);const j=U.dot(p[Z])<0?-1:1;f.setXYZW(Z,O.x,O.y,O.z,j)}for(let Z=0,D=L.length;Z<D;++Z){const N=L[Z],j=N.start,ae=N.count;for(let de=j,_e=j+ae;de<_e;de+=3)z(e.getX(de+0)),z(e.getX(de+1)),z(e.getX(de+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Yn(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let y=0,E=a.count;y<E;y++)a.setXYZ(y,0,0,0);const l=new pe,c=new pe,f=new pe,d=new pe,p=new pe,m=new pe,g=new pe,v=new pe;if(e)for(let y=0,E=e.count;y<E;y+=3){const b=e.getX(y+0),T=e.getX(y+1),x=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,x),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(a,b),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,x),d.add(g),p.add(g),m.add(g),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(x,m.x,m.y,m.z)}else for(let y=0,E=i.count;y<E;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),a.setXYZ(y+0,g.x,g.y,g.z),a.setXYZ(y+1,g.x,g.y,g.z),a.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,y=new m.constructor(p.length*g);let E=0,b=0;for(let T=0,x=p.length;T<x;T++){d.isInterleavedBufferAttribute?E=p[T]*d.data.stride+d.offset:E=p[T]*g;for(let _=0;_<g;_++)y[b++]=m[E++]}return new Yn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,a=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,a);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const y=m[g],E=e(y,a);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,y=m.length;v<y;v++){const E=m[v];g.push(E.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let y=0,E=v.length;y<E;y++)g.push(v[y].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ov=new sn,br=new q_,Lc=new du,Pv=new pe,Oc=new pe,Pc=new pe,Ic=new pe,$d=new pe,zc=new pe,Iv=new pe,Bc=new pe;class oi extends Cn{constructor(e=new Ci,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){zc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&($d.fromBufferAttribute(v,e),f?zc.addScaledVector($d,g):zc.addScaledVector($d.sub(i),g))}i.add(zc)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Lc.copy(a.boundingSphere),Lc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Lc.containsPoint(br.origin)===!1&&(br.intersectSphere(Lc,Pv)===null||br.origin.distanceToSquared(Pv)>(e.far-e.near)**2))&&(Ov.copy(c).invert(),br.copy(e.ray).applyMatrix4(Ov),!(a.boundingBox!==null&&br.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=y.length;b<T;b++){const x=y[b],_=f[x.materialIndex],L=Math.max(x.start,E.start),O=Math.min(d.count,Math.min(x.start+x.count,E.start+E.count));for(let U=L,V=O;U<V;U+=3){const k=d.getX(U),z=d.getX(U+1),Z=d.getX(U+2);l=Fc(this,_,e,a,m,g,v,k,z,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),T=Math.min(d.count,E.start+E.count);for(let x=b,_=T;x<_;x+=3){const L=d.getX(x),O=d.getX(x+1),U=d.getX(x+2);l=Fc(this,f,e,a,m,g,v,L,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,T=y.length;b<T;b++){const x=y[b],_=f[x.materialIndex],L=Math.max(x.start,E.start),O=Math.min(p.count,Math.min(x.start+x.count,E.start+E.count));for(let U=L,V=O;U<V;U+=3){const k=U,z=U+1,Z=U+2;l=Fc(this,_,e,a,m,g,v,k,z,Z),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=x.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),T=Math.min(p.count,E.start+E.count);for(let x=b,_=T;x<_;x+=3){const L=x,O=x+1,U=x+2;l=Fc(this,f,e,a,m,g,v,L,O,U),l&&(l.faceIndex=Math.floor(x/3),i.push(l))}}}}function pb(s,e,i,a,l,c,f,d){let p;if(e.side===jn?p=a.intersectTriangle(f,c,l,!0,d):p=a.intersectTriangle(l,c,f,e.side===tr,d),p===null)return null;Bc.copy(d),Bc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Bc);return m<i.near||m>i.far?null:{distance:m,point:Bc.clone(),object:s}}function Fc(s,e,i,a,l,c,f,d,p,m){s.getVertexPosition(d,Oc),s.getVertexPosition(p,Pc),s.getVertexPosition(m,Ic);const g=pb(s,e,i,a,Oc,Pc,Ic,Iv);if(g){const v=new pe;Ai.getBarycoord(Iv,Oc,Pc,Ic,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,p,m,v,new It)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,d,p,m,v,new It)),f&&(g.normal=Ai.getInterpolatedAttribute(f,d,p,m,v,new pe),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new pe,materialIndex:0};Ai.getNormal(Oc,Pc,Ic,y.normal),g.face=y,g.barycoord=v}return g}class ul extends Ci{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let y=0,E=0;b("z","y","x",-1,-1,a,i,e,f,c,0),b("z","y","x",1,-1,a,i,-e,f,c,1),b("x","z","y",1,1,e,a,i,l,f,2),b("x","z","y",1,-1,e,a,-i,l,f,3),b("x","y","z",1,-1,e,i,a,l,c,4),b("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(g,3)),this.setAttribute("uv",new Fi(v,2));function b(T,x,_,L,O,U,V,k,z,Z,D){const N=U/z,j=V/Z,ae=U/2,de=V/2,_e=k/2,re=z+1,I=Z+1;let K=0,Q=0;const G=new pe;for(let R=0;R<I;R++){const M=R*j-de;for(let F=0;F<re;F++){const ee=F*N-ae;G[T]=ee*L,G[x]=M*O,G[_]=_e,m.push(G.x,G.y,G.z),G[T]=0,G[x]=0,G[_]=k>0?1:-1,g.push(G.x,G.y,G.z),v.push(F/z),v.push(1-R/Z),K+=1}}for(let R=0;R<Z;R++)for(let M=0;M<z;M++){const F=y+M+re*R,ee=y+M+re*(R+1),ue=y+(M+1)+re*(R+1),se=y+(M+1)+re*R;p.push(F,ee,se),p.push(ee,ue,se),Q+=6}d.addGroup(E,Q,D),E+=Q,y+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ul(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Vs(s){const e={};for(const i in s){e[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone():Array.isArray(l)?e[i][a]=l.slice():e[i][a]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const a=Vs(s[i]);for(const l in a)e[l]=a[l]}return e}function mb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function $_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const gb={clone:Vs,merge:zn};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends js{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Vs(e.uniforms),this.uniformsGroups=mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class ex extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new pe,zv=new It,Bv=new It;class ri extends ex{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,zv,Bv),i.subVectors(Bv,zv)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*a/m,l*=f.width/p,a*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Ns=1;class xb extends Cn{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(Ds,Ns,e,i);l.layers=this.layers,this.add(l);const c=new ri(Ds,Ns,e,i);c.layers=this.layers,this.add(c);const f=new ri(Ds,Ns,e,i);f.layers=this.layers,this.add(f);const d=new ri(Ds,Ns,e,i);d.layers=this.layers,this.add(d);const p=new ri(Ds,Ns,e,i);p.layers=this.layers,this.add(p);const m=new ri(Ds,Ns,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(e===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ru)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,l),e.render(i,c),e.setRenderTarget(a,1,l),e.render(i,f),e.setRenderTarget(a,2,l),e.render(i,d),e.setRenderTarget(a,3,l),e.render(i,p),e.setRenderTarget(a,4,l),e.render(i,m),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,l),e.render(i,g),e.setRenderTarget(v,y,E),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class tx extends qn{constructor(e=[],i=Fs,a,l,c,f,d,p,m,g){super(e,i,a,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yb extends Ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ul(5,5,5),c=new nr({name:"CubemapFromEquirect",uniforms:Vs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:$a});c.uniforms.tEquirect.value=i;const f=new oi(l,c),d=i.minFilter;return i.minFilter===Lr&&(i.minFilter=zi),new xb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}class Hc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new pe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new pe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new pe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new pe),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const x=i.getJointPose(T,a),_=this._getHandJoint(m,T);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],y=g.position.distanceTo(v.position),E=.02,b=.005;m.inputState.pinching&&y>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&y<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new Hc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}class nx extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const th=new pe,Mb=new pe,Eb=new vt;class Rr{constructor(e=new pe(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=th.subVectors(a,i).cross(Mb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const a=e.delta(th),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||Eb.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new du,bb=new It(.5,.5),Gc=new pe;class _p{constructor(e=new Rr,i=new Rr,a=new Rr,l=new Rr,c=new Rr,f=new Rr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=Bi,a=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],p=c[2],m=c[3],g=c[4],v=c[5],y=c[6],E=c[7],b=c[8],T=c[9],x=c[10],_=c[11],L=c[12],O=c[13],U=c[14],V=c[15];if(l[0].setComponents(m-f,E-g,_-b,V-L).normalize(),l[1].setComponents(m+f,E+g,_+b,V+L).normalize(),l[2].setComponents(m+d,E+v,_+T,V+O).normalize(),l[3].setComponents(m-d,E-v,_-T,V-O).normalize(),a)l[4].setComponents(p,y,x,U).normalize(),l[5].setComponents(m-p,E-y,_-x,V-U).normalize();else if(l[4].setComponents(m-p,E-y,_-x,V-U).normalize(),i===Bi)l[5].setComponents(m+p,E+y,_+x,V+U).normalize();else if(i===ru)l[5].setComponents(p,y,x,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=bb.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(Gc.x=l.normal.x>0?e.max.x:e.min.x,Gc.y=l.normal.y>0?e.max.y:e.min.y,Gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends js{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new sn,np=new q_,Vc=new du,kc=new pe;class ix extends Cn{constructor(e=new Ci,i=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Vc.copy(a.boundingSphere),Vc.applyMatrix4(l),Vc.radius+=c,e.ray.intersectsSphere(Vc)===!1)return;Fv.copy(l).invert(),np.copy(e.ray).applyMatrix4(Fv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=a.index,v=a.attributes.position;if(m!==null){const y=Math.max(0,f.start),E=Math.min(m.count,f.start+f.count);for(let b=y,T=E;b<T;b++){const x=m.getX(b);kc.fromBufferAttribute(v,x),Hv(kc,x,p,l,e,i,this)}}else{const y=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=y,T=E;b<T;b++)kc.fromBufferAttribute(v,b),Hv(kc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hv(s,e,i,a,l,c,f){const d=np.distanceSqToPoint(s);if(d<i){const p=new pe;np.closestPointToPoint(s,p),p.applyMatrix4(a);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class ax extends qn{constructor(e,i,a=Pr,l,c,f,d=Ri,p=Ri,m,g=$o,v=1){if(g!==$o&&g!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:v};super(y,l,c,f,d,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class rx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hu extends Ci{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(a),p=Math.floor(l),m=d+1,g=p+1,v=e/d,y=i/p,E=[],b=[],T=[],x=[];for(let _=0;_<g;_++){const L=_*y-f;for(let O=0;O<m;O++){const U=O*v-c;b.push(U,-L,0),T.push(0,0,1),x.push(O/d),x.push(1-_/p)}}for(let _=0;_<p;_++)for(let L=0;L<d;L++){const O=L+m*_,U=L+m*(_+1),V=L+1+m*(_+1),k=L+1+m*_;E.push(O,U,k),E.push(U,V,k)}this.setIndex(E),this.setAttribute("position",new Fi(b,3)),this.setAttribute("normal",new Fi(T,3)),this.setAttribute("uv",new Fi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class pu extends Ci{constructor(e=1,i=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const p=Math.min(f+d,Math.PI);let m=0;const g=[],v=new pe,y=new pe,E=[],b=[],T=[],x=[];for(let _=0;_<=a;_++){const L=[],O=_/a;let U=0;_===0&&f===0?U=.5/i:_===a&&p===Math.PI&&(U=-.5/i);for(let V=0;V<=i;V++){const k=V/i;v.x=-e*Math.cos(l+k*c)*Math.sin(f+O*d),v.y=e*Math.cos(f+O*d),v.z=e*Math.sin(l+k*c)*Math.sin(f+O*d),b.push(v.x,v.y,v.z),y.copy(v).normalize(),T.push(y.x,y.y,y.z),x.push(k+U,1-O),L.push(m++)}g.push(L)}for(let _=0;_<a;_++)for(let L=0;L<i;L++){const O=g[_][L+1],U=g[_][L],V=g[_+1][L],k=g[_+1][L+1];(_!==0||f>0)&&E.push(O,U,k),(_!==a-1||p<Math.PI)&&E.push(U,V,k)}this.setIndex(E),this.setAttribute("position",new Fi(b,3)),this.setAttribute("normal",new Fi(T,3)),this.setAttribute("uv",new Fi(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tb extends js{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k_,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ou extends Tb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ab extends js{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wb extends js{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sx extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const nh=new sn,Gv=new pe,Vv=new pe;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,a=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Vv),i.updateMatrixWorld(),nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ox extends ex{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Cb extends Rb{constructor(){super(new ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends sx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Cb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cx extends sx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Db extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function kv(s,e,i,a){const l=Nb(a);switch(i){case F_:return s*e;case G_:return s*e/l.components*l.byteLength;case pp:return s*e/l.components*l.byteLength;case V_:return s*e*2/l.components*l.byteLength;case mp:return s*e*2/l.components*l.byteLength;case H_:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case gp:return s*e*4/l.components*l.byteLength;case Kc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Dh:return Math.max(s,16)*Math.max(e,8)/4;case wh:case Ch:return Math.max(s,8)*Math.max(e,8)/2;case Nh:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yh:case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $h:case ep:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nb(s){switch(s){case Gi:case P_:return{byteLength:1,components:1};case Qo:case I_:case sl:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case Pr:case fp:case ma:return{byteLength:4,components:1};case z_:case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ux(){let s=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Ub(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,y=s.createBuffer();s.bindBuffer(p,y),s.bufferData(p,m,g),d.onUploadCallback();let E;if(m instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=s.SHORT;else if(m instanceof Uint32Array)E=s.UNSIGNED_INT;else if(m instanceof Int32Array)E=s.INT;else if(m instanceof Int8Array)E=s.BYTE;else if(m instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((E,b)=>E.start-b.start);let y=0;for(let E=1;E<v.length;E++){const b=v[y],T=v[E];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++y,v[y]=T)}v.length=y+1;for(let E=0,b=v.length;E<b;E++){const T=v[E];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var Lb=`#ifdef USE_ALPHAHASH
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
#endif`,zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bb=`#ifdef USE_ALPHATEST
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
#endif`,zT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
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
}`,z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
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
}`,_t={alphahash_fragment:Lb,alphahash_pars_fragment:Ob,alphamap_fragment:Pb,alphamap_pars_fragment:Ib,alphatest_fragment:zb,alphatest_pars_fragment:Bb,aomap_fragment:Fb,aomap_pars_fragment:Hb,batching_pars_vertex:Gb,batching_vertex:Vb,begin_vertex:kb,beginnormal_vertex:Wb,bsdfs:Xb,iridescence_fragment:jb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Kb,clipping_planes_vertex:Qb,color_fragment:Jb,color_pars_fragment:$b,color_pars_vertex:eT,color_vertex:tT,common:nT,cube_uv_reflection_fragment:iT,defaultnormal_vertex:aT,displacementmap_pars_vertex:rT,displacementmap_vertex:sT,emissivemap_fragment:oT,emissivemap_pars_fragment:lT,colorspace_fragment:cT,colorspace_pars_fragment:uT,envmap_fragment:fT,envmap_common_pars_fragment:dT,envmap_pars_fragment:hT,envmap_pars_vertex:pT,envmap_physical_pars_fragment:TT,envmap_vertex:mT,fog_vertex:gT,fog_pars_vertex:vT,fog_fragment:_T,fog_pars_fragment:xT,gradientmap_pars_fragment:yT,lightmap_pars_fragment:ST,lights_lambert_fragment:MT,lights_lambert_pars_fragment:ET,lights_pars_begin:bT,lights_toon_fragment:AT,lights_toon_pars_fragment:wT,lights_phong_fragment:RT,lights_phong_pars_fragment:CT,lights_physical_fragment:DT,lights_physical_pars_fragment:NT,lights_fragment_begin:UT,lights_fragment_maps:LT,lights_fragment_end:OT,logdepthbuf_fragment:PT,logdepthbuf_pars_fragment:IT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:BT,map_fragment:FT,map_pars_fragment:HT,map_particle_fragment:GT,map_particle_pars_fragment:VT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:WT,morphinstance_vertex:XT,morphcolor_vertex:jT,morphnormal_vertex:qT,morphtarget_pars_vertex:YT,morphtarget_vertex:ZT,normal_fragment_begin:KT,normal_fragment_maps:QT,normal_pars_fragment:JT,normal_pars_vertex:$T,normal_vertex:e1,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:r1,opaque_fragment:s1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:f1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:v1,skinbase_vertex:_1,skinning_pars_vertex:x1,skinning_vertex:y1,skinnormal_vertex:S1,specularmap_fragment:M1,specularmap_pars_fragment:E1,tonemapping_fragment:b1,tonemapping_pars_fragment:T1,transmission_fragment:A1,transmission_pars_fragment:w1,uv_pars_fragment:R1,uv_pars_vertex:C1,uv_vertex:D1,worldpos_vertex:N1,background_vert:U1,background_frag:L1,backgroundCube_vert:O1,backgroundCube_frag:P1,cube_vert:I1,cube_frag:z1,depth_vert:B1,depth_frag:F1,distanceRGBA_vert:H1,distanceRGBA_frag:G1,equirect_vert:V1,equirect_frag:k1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:j1,meshbasic_frag:q1,meshlambert_vert:Y1,meshlambert_frag:Z1,meshmatcap_vert:K1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:$1,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:aA,meshtoon_frag:rA,points_vert:sA,points_frag:oA,shadow_vert:lA,shadow_frag:cA,sprite_vert:uA,sprite_frag:fA},ze={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ii={basic:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Dt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Dt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:zn([ze.points,ze.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:zn([ze.common,ze.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:zn([ze.sprite,ze.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:zn([ze.common,ze.displacementmap,{referencePosition:{value:new pe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:zn([ze.lights,ze.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Ii.physical={uniforms:zn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Wc={r:0,b:0,g:0},Ar=new Vi,dA=new sn;function hA(s,e,i,a,l,c,f){const d=new Dt(0);let p=c===!0?0:1,m,g,v=null,y=0,E=null;function b(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function T(O){let U=!1;const V=b(O);V===null?_(d,p):V&&V.isColor&&(_(V,1),U=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?a.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||U)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(O,U){const V=b(U);V&&(V.isCubeTexture||V.mapping===fu)?(g===void 0&&(g=new oi(new ul(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Vs(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ar.copy(U.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.material.uniforms.envMap.value=V,g.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(dA.makeRotationFromEuler(Ar)),g.material.toneMapped=Pt.getTransfer(V.colorSpace)!==jt,(v!==V||y!==V.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=V,y=V.version,E=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new oi(new hu(2,2),new nr({name:"BackgroundMaterial",uniforms:Vs(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(V.colorSpace)!==jt,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(v!==V||y!==V.version||E!==s.toneMapping)&&(m.material.needsUpdate=!0,v=V,y=V.version,E=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function _(O,U){O.getRGB(Wc,$_(s)),a.buffers.color.setClear(Wc.r,Wc.g,Wc.b,U,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),p=U,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,_(d,p)},render:T,addToRenderList:x,dispose:L}}function pA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=y(null);let c=l,f=!1;function d(N,j,ae,de,_e){let re=!1;const I=v(de,ae,j);c!==I&&(c=I,m(c.object)),re=E(N,de,ae,_e),re&&b(N,de,ae,_e),_e!==null&&e.update(_e,s.ELEMENT_ARRAY_BUFFER),(re||f)&&(f=!1,U(N,j,ae,de),_e!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(_e).buffer))}function p(){return s.createVertexArray()}function m(N){return s.bindVertexArray(N)}function g(N){return s.deleteVertexArray(N)}function v(N,j,ae){const de=ae.wireframe===!0;let _e=a[N.id];_e===void 0&&(_e={},a[N.id]=_e);let re=_e[j.id];re===void 0&&(re={},_e[j.id]=re);let I=re[de];return I===void 0&&(I=y(p()),re[de]=I),I}function y(N){const j=[],ae=[],de=[];for(let _e=0;_e<i;_e++)j[_e]=0,ae[_e]=0,de[_e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ae,attributeDivisors:de,object:N,attributes:{},index:null}}function E(N,j,ae,de){const _e=c.attributes,re=j.attributes;let I=0;const K=ae.getAttributes();for(const Q in K)if(K[Q].location>=0){const R=_e[Q];let M=re[Q];if(M===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(M=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(M=N.instanceColor)),R===void 0||R.attribute!==M||M&&R.data!==M.data)return!0;I++}return c.attributesNum!==I||c.index!==de}function b(N,j,ae,de){const _e={},re=j.attributes;let I=0;const K=ae.getAttributes();for(const Q in K)if(K[Q].location>=0){let R=re[Q];R===void 0&&(Q==="instanceMatrix"&&N.instanceMatrix&&(R=N.instanceMatrix),Q==="instanceColor"&&N.instanceColor&&(R=N.instanceColor));const M={};M.attribute=R,R&&R.data&&(M.data=R.data),_e[Q]=M,I++}c.attributes=_e,c.attributesNum=I,c.index=de}function T(){const N=c.newAttributes;for(let j=0,ae=N.length;j<ae;j++)N[j]=0}function x(N){_(N,0)}function _(N,j){const ae=c.newAttributes,de=c.enabledAttributes,_e=c.attributeDivisors;ae[N]=1,de[N]===0&&(s.enableVertexAttribArray(N),de[N]=1),_e[N]!==j&&(s.vertexAttribDivisor(N,j),_e[N]=j)}function L(){const N=c.newAttributes,j=c.enabledAttributes;for(let ae=0,de=j.length;ae<de;ae++)j[ae]!==N[ae]&&(s.disableVertexAttribArray(ae),j[ae]=0)}function O(N,j,ae,de,_e,re,I){I===!0?s.vertexAttribIPointer(N,j,ae,_e,re):s.vertexAttribPointer(N,j,ae,de,_e,re)}function U(N,j,ae,de){T();const _e=de.attributes,re=ae.getAttributes(),I=j.defaultAttributeValues;for(const K in re){const Q=re[K];if(Q.location>=0){let G=_e[K];if(G===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){const R=G.normalized,M=G.itemSize,F=e.get(G);if(F===void 0)continue;const ee=F.buffer,ue=F.type,se=F.bytesPerElement,X=ue===s.INT||ue===s.UNSIGNED_INT||G.gpuType===fp;if(G.isInterleavedBufferAttribute){const $=G.data,ye=$.stride,Ae=G.offset;if($.isInstancedInterleavedBuffer){for(let Ue=0;Ue<Q.locationSize;Ue++)_(Q.location+Ue,$.meshPerAttribute);N.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Ue=0;Ue<Q.locationSize;Ue++)x(Q.location+Ue);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let Ue=0;Ue<Q.locationSize;Ue++)O(Q.location+Ue,M/Q.locationSize,ue,R,ye*se,(Ae+M/Q.locationSize*Ue)*se,X)}else{if(G.isInstancedBufferAttribute){for(let $=0;$<Q.locationSize;$++)_(Q.location+$,G.meshPerAttribute);N.isInstancedMesh!==!0&&de._maxInstanceCount===void 0&&(de._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let $=0;$<Q.locationSize;$++)x(Q.location+$);s.bindBuffer(s.ARRAY_BUFFER,ee);for(let $=0;$<Q.locationSize;$++)O(Q.location+$,M/Q.locationSize,ue,R,M*se,M/Q.locationSize*$*se,X)}}else if(I!==void 0){const R=I[K];if(R!==void 0)switch(R.length){case 2:s.vertexAttrib2fv(Q.location,R);break;case 3:s.vertexAttrib3fv(Q.location,R);break;case 4:s.vertexAttrib4fv(Q.location,R);break;default:s.vertexAttrib1fv(Q.location,R)}}}}L()}function V(){Z();for(const N in a){const j=a[N];for(const ae in j){const de=j[ae];for(const _e in de)g(de[_e].object),delete de[_e];delete j[ae]}delete a[N]}}function k(N){if(a[N.id]===void 0)return;const j=a[N.id];for(const ae in j){const de=j[ae];for(const _e in de)g(de[_e].object),delete de[_e];delete j[ae]}delete a[N.id]}function z(N){for(const j in a){const ae=a[j];if(ae[N.id]===void 0)continue;const de=ae[N.id];for(const _e in de)g(de[_e].object),delete de[_e];delete ae[N.id]}}function Z(){D(),f=!0,c!==l&&(c=l,m(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Z,resetDefaultState:D,dispose:V,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:x,disableUnusedAttributes:L}}function mA(s,e,i){let a;function l(m){a=m}function c(m,g){s.drawArrays(a,m,g),i.update(g,a,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),i.update(g,a,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b];i.update(E,a,1)}function p(m,g,v,y){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<m.length;b++)f(m[b],g[b],y[b]);else{E.multiDrawArraysInstancedWEBGL(a,m,0,g,0,y,0,v);let b=0;for(let T=0;T<v;T++)b+=g[T]*y[T];i.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function gA(s,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==wi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Z=z===sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Gi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ma&&!Z)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),U=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),V=b>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:E,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:L,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:V,maxSamples:k}}function vA(s){const e=this;let i=null,a=0,l=!1,c=!1;const f=new Rr,d=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const E=v.length!==0||y||a!==0||l;return l=y,a=v.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,E){const b=v.clippingPlanes,T=v.clipIntersection,x=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!x)c?g(null):m();else{const L=c?0:a,O=L*4;let U=_.clippingState||null;p.value=U,U=g(b,y,O,E);for(let V=0;V!==O;++V)U[V]=i[V];_.clippingState=U,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,y,E,b){const T=v!==null?v.length:0;let x=null;if(T!==0){if(x=p.value,b!==!0||x===null){const _=E+T*4,L=y.matrixWorldInverse;d.getNormalMatrix(L),(x===null||x.length<_)&&(x=new Float32Array(_));for(let O=0,U=E;O!==T;++O,U+=4)f.copy(v[O]).applyMatrix4(L,d),f.normal.toArray(x,U),x[U+3]=f.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}function _A(s){let e=new WeakMap;function i(f,d){return d===Eh?f.mapping=Fs:d===bh&&(f.mapping=Hs),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===Eh||d===bh)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new yb(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Os=4,Wv=[.125,.215,.35,.446,.526,.582],Nr=20,ih=new ox,Xv=new Dt;let ah=null,rh=0,sh=0,oh=!1;const Cr=(1+Math.sqrt(5))/2,Us=1/Cr,jv=[new pe(-Cr,Us,0),new pe(Cr,Us,0),new pe(-Us,0,Cr),new pe(Us,0,Cr),new pe(0,Cr,-Us),new pe(0,Cr,Us),new pe(-1,1,-1),new pe(1,1,-1),new pe(-1,1,1),new pe(1,1,1)],xA=new pe;class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:d=xA}=c;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,Xc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Fs||e.mapping===Hs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:sl,format:wi,colorSpace:Gs,depthBuffer:!1},l=Yv(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yA(c)),this._blurMaterial=SA(c,e,i)}return l}_compileMaterial(e){const i=new oi(this._lodPlanes[0],e);this._renderer.compile(i,ih)}_sceneToCubeUV(e,i,a,l,c){const p=new ri(90,1,i,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,E=v.toneMapping;v.getClearColor(Xv),v.toneMapping=er,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const T=new K_({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),x=new oi(new ul,T);let _=!1;const L=e.background;L?L.isColor&&(T.color.copy(L),e.background=null,_=!0):(T.color.copy(Xv),_=!0);for(let O=0;O<6;O++){const U=O%3;U===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):U===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const V=this._cubeSize;Xc(l,U*V,O>2?V:0,V,V),v.setRenderTarget(l),_&&v.render(x,p),v.render(e,p)}x.geometry.dispose(),x.material.dispose(),v.toneMapping=E,v.autoClear=y,e.background=L}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Fs||e.mapping===Hs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new oi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Xc(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,ih)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=jv[(l-c-1)%jv.length];this._blur(e,c-1,c,f,d)}i.autoClear=a}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new oi(this._lodPlanes[l],m),y=m.uniforms,E=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Nr-1),T=c/b,x=isFinite(c)?1+Math.floor(g*T):Nr;x>Nr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Nr}`);const _=[];let L=0;for(let z=0;z<Nr;++z){const Z=z/T,D=Math.exp(-Z*Z/2);_.push(D),z===0?L+=D:z<x&&(L+=2*D)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;y.envMap.value=e.texture,y.samples.value=x,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:O}=this;y.dTheta.value=b,y.mipInt.value=O-a;const U=this._sizeLods[l],V=3*U*(l>O-Os?l-O+Os:0),k=4*(this._cubeSize-U);Xc(i,V,k,3*U,2*U),p.setRenderTarget(i),p.render(v,ih)}}function yA(s){const e=[],i=[],a=[];let l=s;const c=s-Os+1+Wv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Os?p=Wv[f-s+Os-1]:f===0&&(p=0),a.push(p);const m=1/(d-2),g=-m,v=1+m,y=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,b=6,T=3,x=2,_=1,L=new Float32Array(T*b*E),O=new Float32Array(x*b*E),U=new Float32Array(_*b*E);for(let k=0;k<E;k++){const z=k%3*2/3-1,Z=k>2?0:-1,D=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];L.set(D,T*b*k),O.set(y,x*b*k);const N=[k,k,k,k,k,k];U.set(N,_*b*k)}const V=new Ci;V.setAttribute("position",new Yn(L,T)),V.setAttribute("uv",new Yn(O,x)),V.setAttribute("faceIndex",new Yn(U,_)),e.push(V),l>Os&&l--}return{lodPlanes:e,sizeLods:i,sigmas:a}}function Yv(s,e,i){const a=new Ir(s,e,i);return a.texture.mapping=fu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Xc(s,e,i,a,l){s.viewport.set(e,i,a,l),s.scissor.set(e,i,a,l)}function SA(s,e,i){const a=new Float32Array(Nr),l=new pe(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yp(),fragmentShader:`

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
	`}function MA(s){let e=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const p=d.mapping,m=p===Eh||p===bh,g=p===Fs||p===Hs;if(m||g){let v=e.get(d);const y=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new qv(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return m&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new qv(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function EA(s){const e={};function i(a){if(e[a]!==void 0)return e[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&tl("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function bA(s,e,i,a){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete l[y.id];const E=c.get(y);E&&(e.remove(E),c.delete(y)),a.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(v){const y=v.attributes;for(const E in y)e.update(y[E],s.ARRAY_BUFFER)}function m(v){const y=[],E=v.index,b=v.attributes.position;let T=0;if(E!==null){const L=E.array;T=E.version;for(let O=0,U=L.length;O<U;O+=3){const V=L[O+0],k=L[O+1],z=L[O+2];y.push(V,k,k,z,z,V)}}else if(b!==void 0){const L=b.array;T=b.version;for(let O=0,U=L.length/3-1;O<U;O+=3){const V=O+0,k=O+1,z=O+2;y.push(V,k,k,z,z,V)}}else return;const x=new(X_(y)?J_:Q_)(y,1);x.version=T;const _=c.get(v);_&&e.remove(_),c.set(v,x)}function g(v){const y=c.get(v);if(y){const E=v.index;E!==null&&y.version<E.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function TA(s,e,i){let a;function l(y){a=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,E){s.drawElements(a,E,c,y*f),i.update(E,a,1)}function m(y,E,b){b!==0&&(s.drawElementsInstanced(a,E,c,y*f,b),i.update(E,a,b))}function g(y,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,E,0,c,y,0,b);let x=0;for(let _=0;_<b;_++)x+=E[_];i.update(x,a,1)}function v(y,E,b,T){if(b===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<y.length;_++)m(y[_]/f,E[_],T[_]);else{x.multiDrawElementsInstancedWEBGL(a,E,0,c,y,0,T,0,b);let _=0;for(let L=0;L<b;L++)_+=E[L]*T[L];i.update(_,a,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function AA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function wA(s,e,i){const a=new WeakMap,l=new rn;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let y=a.get(d);if(y===void 0||y.count!==v){let N=function(){Z.dispose(),a.delete(d),d.removeEventListener("dispose",N)};var E=N;y!==void 0&&y.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),T===!0&&(U=2),x===!0&&(U=3);let V=d.attributes.position.count*U,k=1;V>e.maxTextureSize&&(k=Math.ceil(V/e.maxTextureSize),V=e.maxTextureSize);const z=new Float32Array(V*k*4*v),Z=new j_(z,V,k,v);Z.type=ma,Z.needsUpdate=!0;const D=U*4;for(let j=0;j<v;j++){const ae=_[j],de=L[j],_e=O[j],re=V*k*4*j;for(let I=0;I<ae.count;I++){const K=I*D;b===!0&&(l.fromBufferAttribute(ae,I),z[re+K+0]=l.x,z[re+K+1]=l.y,z[re+K+2]=l.z,z[re+K+3]=0),T===!0&&(l.fromBufferAttribute(de,I),z[re+K+4]=l.x,z[re+K+5]=l.y,z[re+K+6]=l.z,z[re+K+7]=0),x===!0&&(l.fromBufferAttribute(_e,I),z[re+K+8]=l.x,z[re+K+9]=l.y,z[re+K+10]=l.z,z[re+K+11]=_e.itemSize===4?l.w:1)}}y={count:v,texture:Z,size:new It(V,k)},a.set(d,y),d.addEventListener("dispose",N)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let x=0;x<m.length;x++)b+=m[x];const T=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function RA(s,e,i,a){let l=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return v}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const fx=new qn,Qv=new ax(1,1),dx=new j_,hx=new ib,px=new tx,Jv=[],$v=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function qs(s,e,i){const a=s[0];if(a<=0||a>0)return s;const l=e*i;let c=Jv[l];if(c===void 0&&(c=new Float32Array(l),Jv[l]=c),e!==0){a.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,a=e.length;i<a;i++)s[i]=e[i]}function mu(s,e){let i=$v[e];i===void 0&&(i=new Int32Array(e),$v[e]=i);for(let a=0;a!==e;++a)i[a]=s.allocateTextureUnit();return i}function CA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function DA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function NA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function LA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,a))return;n_.set(a),s.uniformMatrix2fv(this.addr,!1,n_),xn(i,a)}}function OA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,a))return;t_.set(a),s.uniformMatrix3fv(this.addr,!1,t_),xn(i,a)}}function PA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,a))return;e_.set(a),s.uniformMatrix4fv(this.addr,!1,e_),xn(i,a)}}function IA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function zA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function BA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function FA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function HA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function GA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function VA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function kA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function WA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Qv.compareFunction=W_,c=Qv):c=fx,i.setTexture2D(e||c,l)}function XA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||hx,l)}function jA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||px,l)}function qA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||dx,l)}function YA(s){switch(s){case 5126:return CA;case 35664:return DA;case 35665:return NA;case 35666:return UA;case 35674:return LA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return zA;case 35668:case 35672:return BA;case 35669:case 35673:return FA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return qA}}function ZA(s,e){s.uniform1fv(this.addr,e)}function KA(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function QA(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function JA(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function $A(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ew(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tw(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function nw(s,e){s.uniform1iv(this.addr,e)}function iw(s,e){s.uniform2iv(this.addr,e)}function aw(s,e){s.uniform3iv(this.addr,e)}function rw(s,e){s.uniform4iv(this.addr,e)}function sw(s,e){s.uniform1uiv(this.addr,e)}function ow(s,e){s.uniform2uiv(this.addr,e)}function lw(s,e){s.uniform3uiv(this.addr,e)}function cw(s,e){s.uniform4uiv(this.addr,e)}function uw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||fx,c[f])}function fw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||hx,c[f])}function dw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||px,c[f])}function hw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||dx,c[f])}function pw(s){switch(s){case 5126:return ZA;case 35664:return KA;case 35665:return QA;case 35666:return JA;case 35674:return $A;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return aw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return ow;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return hw}}class mw{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=YA(i.type)}}class gw{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pw(i.type)}}class vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],a)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function i_(s,e){s.seq.push(e),s.map[e.id]=e}function _w(s,e,i){const a=s.name,l=a.length;for(lh.lastIndex=0;;){const c=lh.exec(a),f=lh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){i_(i,m===void 0?new mw(d,s,e):new gw(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new vw(d),i_(i,v)),i=v}}}class eu{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);_w(c,f,this)}}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=a[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function a_(s,e,i){const a=s.createShader(e);return s.shaderSource(a,i),s.compileShader(a),a}const xw=37297;let yw=0;function Sw(s,e){const i=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const r_=new vt;function Mw(s){Pt._getMatrix(r_,Pt.workingColorSpace,s);const e=`mat3( ${r_.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(s)){case au:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function s_(s,e,i){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Sw(s.getShaderSource(e),d)}else return c}function Ew(s,e){const i=Mw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bw(s,e){let i;switch(e){case NE:i="Linear";break;case UE:i="Reinhard";break;case LE:i="Cineon";break;case OE:i="ACESFilmic";break;case IE:i="AgX";break;case zE:i="Neutral";break;case PE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const jc=new pe;function Tw(){Pt.getLuminanceCoefficients(jc);const s=jc.x.toFixed(4),e=jc.y.toFixed(4),i=jc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Aw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function ww(s){const e=[];for(const i in s){const a=s[i];a!==!1&&e.push("#define "+i+" "+a)}return e.join(`
`)}function Rw(s,e){const i={},a=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<a;l++){const c=s.getActiveAttrib(e,l),f=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:d}}return i}function qo(s){return s!==""}function o_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function l_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cw=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(s){return s.replace(Cw,Nw)}const Dw=new Map;function Nw(s,e){let i=_t[e];if(i===void 0){const a=Dw.get(e);if(a!==void 0)i=_t[a],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("Can not resolve #include <"+e+">")}return ip(i)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function c_(s){return s.replace(Uw,Lw)}function Lw(s,e,i,a){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=a.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function u_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Ow(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(e="SHADOWMAP_TYPE_VSM"),e}function Pw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Fs:case Hs:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hs:e="ENVMAP_MODE_REFRACTION";break}return e}function zw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case DE:e="ENVMAP_BLENDING_ADD";break}return e}function Bw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function Fw(s,e,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=Ow(i),m=Pw(i),g=Iw(i),v=zw(i),y=Bw(i),E=Aw(i),b=ww(c),T=l.createProgram();let x,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(x=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(x=[u_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[u_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==er?"#define TONE_MAPPING":"",i.toneMapping!==er?_t.tonemapping_pars_fragment:"",i.toneMapping!==er?bw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Ew("linearToOutputTexel",i.outputColorSpace),Tw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=ip(f),f=o_(f,i),f=l_(f,i),d=ip(d),d=o_(d,i),d=l_(d,i),f=c_(f),d=c_(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,x=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",i.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=L+x+f,U=L+_+d,V=a_(l,l.VERTEX_SHADER,O),k=a_(l,l.FRAGMENT_SHADER,U);l.attachShader(T,V),l.attachShader(T,k),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(j){if(s.debug.checkShaderErrors){const ae=l.getProgramInfoLog(T)||"",de=l.getShaderInfoLog(V)||"",_e=l.getShaderInfoLog(k)||"",re=ae.trim(),I=de.trim(),K=_e.trim();let Q=!0,G=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(Q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,V,k);else{const R=s_(l,V,"vertex"),M=s_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+re+`
`+R+`
`+M)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(I===""||K==="")&&(G=!1);G&&(j.diagnostics={runnable:Q,programLog:re,vertexShader:{log:I,prefix:x},fragmentShader:{log:K,prefix:_}})}l.deleteShader(V),l.deleteShader(k),Z=new eu(l,T),D=Rw(l,T)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let N=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=l.getProgramParameter(T,xw)),N},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=k,this}let Hw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new Vw(e),i.set(e,a)),a}}class Vw{constructor(e){this.id=Hw++,this.code=e,this.usedTimes=0}}function kw(s,e,i,a,l,c,f){const d=new Y_,p=new Gw,m=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function x(D,N,j,ae,de){const _e=ae.fog,re=de.geometry,I=D.isMeshStandardMaterial?ae.environment:null,K=(D.isMeshStandardMaterial?i:e).get(D.envMap||I),Q=K&&K.mapping===fu?K.image.height:null,G=b[D.type];D.precision!==null&&(E=l.getMaxPrecision(D.precision),E!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",E,"instead."));const R=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,M=R!==void 0?R.length:0;let F=0;re.morphAttributes.position!==void 0&&(F=1),re.morphAttributes.normal!==void 0&&(F=2),re.morphAttributes.color!==void 0&&(F=3);let ee,ue,se,X;if(G){const Nt=Ii[G];ee=Nt.vertexShader,ue=Nt.fragmentShader}else ee=D.vertexShader,ue=D.fragmentShader,p.update(D),se=p.getVertexShaderID(D),X=p.getFragmentShaderID(D);const $=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ae=de.isInstancedMesh===!0,Ue=de.isBatchedMesh===!0,We=!!D.map,lt=!!D.matcap,H=!!K,Ve=!!D.aoMap,Ye=!!D.lightMap,Xe=!!D.bumpMap,Be=!!D.normalMap,yt=!!D.displacementMap,He=!!D.emissiveMap,rt=!!D.metalnessMap,$t=!!D.roughnessMap,Kt=D.anisotropy>0,B=D.clearcoat>0,A=D.dispersion>0,oe=D.iridescence>0,Se=D.sheen>0,we=D.transmission>0,ve=Kt&&!!D.anisotropyMap,$e=B&&!!D.clearcoatMap,Ne=B&&!!D.clearcoatNormalMap,Ze=B&&!!D.clearcoatRoughnessMap,et=oe&&!!D.iridescenceMap,Ce=oe&&!!D.iridescenceThicknessMap,Le=Se&&!!D.sheenColorMap,nt=Se&&!!D.sheenRoughnessMap,Ge=!!D.specularMap,Pe=!!D.specularColorMap,pt=!!D.specularIntensityMap,J=we&&!!D.transmissionMap,De=we&&!!D.thicknessMap,Oe=!!D.gradientMap,ke=!!D.alphaMap,Re=D.alphaTest>0,be=!!D.alphaHash,je=!!D.extensions;let dt=er;D.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Ht={shaderID:G,shaderType:D.type,shaderName:D.name,vertexShader:ee,fragmentShader:ue,defines:D.defines,customVertexShaderID:se,customFragmentShaderID:X,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:E,batching:Ue,batchingColor:Ue&&de._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&de.instanceColor!==null,instancingMorph:Ae&&de.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Gs,alphaToCoverage:!!D.alphaToCoverage,map:We,matcap:lt,envMap:H,envMapMode:H&&K.mapping,envMapCubeUVHeight:Q,aoMap:Ve,lightMap:Ye,bumpMap:Xe,normalMap:Be,displacementMap:y&&yt,emissiveMap:He,normalMapObjectSpace:Be&&D.normalMapType===GE,normalMapTangentSpace:Be&&D.normalMapType===k_,metalnessMap:rt,roughnessMap:$t,anisotropy:Kt,anisotropyMap:ve,clearcoat:B,clearcoatMap:$e,clearcoatNormalMap:Ne,clearcoatRoughnessMap:Ze,dispersion:A,iridescence:oe,iridescenceMap:et,iridescenceThicknessMap:Ce,sheen:Se,sheenColorMap:Le,sheenRoughnessMap:nt,specularMap:Ge,specularColorMap:Pe,specularIntensityMap:pt,transmission:we,transmissionMap:J,thicknessMap:De,gradientMap:Oe,opaque:D.transparent===!1&&D.blending===Is&&D.alphaToCoverage===!1,alphaMap:ke,alphaTest:Re,alphaHash:be,combine:D.combine,mapUv:We&&T(D.map.channel),aoMapUv:Ve&&T(D.aoMap.channel),lightMapUv:Ye&&T(D.lightMap.channel),bumpMapUv:Xe&&T(D.bumpMap.channel),normalMapUv:Be&&T(D.normalMap.channel),displacementMapUv:yt&&T(D.displacementMap.channel),emissiveMapUv:He&&T(D.emissiveMap.channel),metalnessMapUv:rt&&T(D.metalnessMap.channel),roughnessMapUv:$t&&T(D.roughnessMap.channel),anisotropyMapUv:ve&&T(D.anisotropyMap.channel),clearcoatMapUv:$e&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Ne&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:nt&&T(D.sheenRoughnessMap.channel),specularMapUv:Ge&&T(D.specularMap.channel),specularColorMapUv:Pe&&T(D.specularColorMap.channel),specularIntensityMapUv:pt&&T(D.specularIntensityMap.channel),transmissionMapUv:J&&T(D.transmissionMap.channel),thicknessMapUv:De&&T(D.thicknessMap.channel),alphaMapUv:ke&&T(D.alphaMap.channel),vertexTangents:!!re.attributes.tangent&&(Be||Kt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,pointsUvs:de.isPoints===!0&&!!re.attributes.uv&&(We||ke),fog:!!_e,useFog:D.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:de.isSkinnedMesh===!0,morphTargets:re.morphAttributes.position!==void 0,morphNormals:re.morphAttributes.normal!==void 0,morphColors:re.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:F,numDirLights:N.directional.length,numPointLights:N.point.length,numSpotLights:N.spot.length,numSpotLightMaps:N.spotLightMap.length,numRectAreaLights:N.rectArea.length,numHemiLights:N.hemi.length,numDirLightShadows:N.directionalShadowMap.length,numPointLightShadows:N.pointShadowMap.length,numSpotLightShadows:N.spotShadowMap.length,numSpotLightShadowsWithMaps:N.numSpotLightShadowsWithMaps,numLightProbes:N.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:D.dithering,shadowMapEnabled:s.shadowMap.enabled&&j.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:We&&D.map.isVideoTexture===!0&&Pt.getTransfer(D.map.colorSpace)===jt,decodeVideoTextureEmissive:He&&D.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(D.emissiveMap.colorSpace)===jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===pa,flipSided:D.side===jn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:je&&D.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&D.extensions.multiDraw===!0||Ue)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ht.vertexUv1s=m.has(1),Ht.vertexUv2s=m.has(2),Ht.vertexUv3s=m.has(3),m.clear(),Ht}function _(D){const N=[];if(D.shaderID?N.push(D.shaderID):(N.push(D.customVertexShaderID),N.push(D.customFragmentShaderID)),D.defines!==void 0)for(const j in D.defines)N.push(j),N.push(D.defines[j]);return D.isRawShaderMaterial===!1&&(L(N,D),O(N,D),N.push(s.outputColorSpace)),N.push(D.customProgramCacheKey),N.join()}function L(D,N){D.push(N.precision),D.push(N.outputColorSpace),D.push(N.envMapMode),D.push(N.envMapCubeUVHeight),D.push(N.mapUv),D.push(N.alphaMapUv),D.push(N.lightMapUv),D.push(N.aoMapUv),D.push(N.bumpMapUv),D.push(N.normalMapUv),D.push(N.displacementMapUv),D.push(N.emissiveMapUv),D.push(N.metalnessMapUv),D.push(N.roughnessMapUv),D.push(N.anisotropyMapUv),D.push(N.clearcoatMapUv),D.push(N.clearcoatNormalMapUv),D.push(N.clearcoatRoughnessMapUv),D.push(N.iridescenceMapUv),D.push(N.iridescenceThicknessMapUv),D.push(N.sheenColorMapUv),D.push(N.sheenRoughnessMapUv),D.push(N.specularMapUv),D.push(N.specularColorMapUv),D.push(N.specularIntensityMapUv),D.push(N.transmissionMapUv),D.push(N.thicknessMapUv),D.push(N.combine),D.push(N.fogExp2),D.push(N.sizeAttenuation),D.push(N.morphTargetsCount),D.push(N.morphAttributeCount),D.push(N.numDirLights),D.push(N.numPointLights),D.push(N.numSpotLights),D.push(N.numSpotLightMaps),D.push(N.numHemiLights),D.push(N.numRectAreaLights),D.push(N.numDirLightShadows),D.push(N.numPointLightShadows),D.push(N.numSpotLightShadows),D.push(N.numSpotLightShadowsWithMaps),D.push(N.numLightProbes),D.push(N.shadowMapType),D.push(N.toneMapping),D.push(N.numClippingPlanes),D.push(N.numClipIntersection),D.push(N.depthPacking)}function O(D,N){d.disableAll(),N.supportsVertexTextures&&d.enable(0),N.instancing&&d.enable(1),N.instancingColor&&d.enable(2),N.instancingMorph&&d.enable(3),N.matcap&&d.enable(4),N.envMap&&d.enable(5),N.normalMapObjectSpace&&d.enable(6),N.normalMapTangentSpace&&d.enable(7),N.clearcoat&&d.enable(8),N.iridescence&&d.enable(9),N.alphaTest&&d.enable(10),N.vertexColors&&d.enable(11),N.vertexAlphas&&d.enable(12),N.vertexUv1s&&d.enable(13),N.vertexUv2s&&d.enable(14),N.vertexUv3s&&d.enable(15),N.vertexTangents&&d.enable(16),N.anisotropy&&d.enable(17),N.alphaHash&&d.enable(18),N.batching&&d.enable(19),N.dispersion&&d.enable(20),N.batchingColor&&d.enable(21),N.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),N.fog&&d.enable(0),N.useFog&&d.enable(1),N.flatShading&&d.enable(2),N.logarithmicDepthBuffer&&d.enable(3),N.reversedDepthBuffer&&d.enable(4),N.skinning&&d.enable(5),N.morphTargets&&d.enable(6),N.morphNormals&&d.enable(7),N.morphColors&&d.enable(8),N.premultipliedAlpha&&d.enable(9),N.shadowMapEnabled&&d.enable(10),N.doubleSided&&d.enable(11),N.flipSided&&d.enable(12),N.useDepthPacking&&d.enable(13),N.dithering&&d.enable(14),N.transmission&&d.enable(15),N.sheen&&d.enable(16),N.opaque&&d.enable(17),N.pointsUvs&&d.enable(18),N.decodeVideoTexture&&d.enable(19),N.decodeVideoTextureEmissive&&d.enable(20),N.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const N=b[D.type];let j;if(N){const ae=Ii[N];j=gb.clone(ae.uniforms)}else j=D.uniforms;return j}function V(D,N){let j;for(let ae=0,de=g.length;ae<de;ae++){const _e=g[ae];if(_e.cacheKey===N){j=_e,++j.usedTimes;break}}return j===void 0&&(j=new Fw(s,N,D,c),g.push(j)),j}function k(D){if(--D.usedTimes===0){const N=g.indexOf(D);g[N]=g[g.length-1],g.pop(),D.destroy()}}function z(D){p.remove(D)}function Z(){p.dispose()}return{getParameters:x,getProgramCacheKey:_,getUniforms:U,acquireProgram:V,releaseProgram:k,releaseShaderCache:z,programs:g,dispose:Z}}function Ww(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function a(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function Xw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function f_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function d_(){const s=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(v,y,E,b,T,x){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:E,groupOrder:b,renderOrder:v.renderOrder,z:T,group:x},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=E,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=T,_.group=x),e++,_}function d(v,y,E,b,T,x){const _=f(v,y,E,b,T,x);E.transmission>0?a.push(_):E.transparent===!0?l.push(_):i.push(_)}function p(v,y,E,b,T,x){const _=f(v,y,E,b,T,x);E.transmission>0?a.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,y){i.length>1&&i.sort(v||Xw),a.length>1&&a.sort(y||f_),l.length>1&&l.sort(y||f_)}function g(){for(let v=e,y=s.length;v<y;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function jw(){let s=new WeakMap;function e(a,l){const c=s.get(a);let f;return c===void 0?(f=new d_,s.set(a,[f])):l>=c.length?(f=new d_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function qw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new pe,color:new Dt};break;case"SpotLight":i={position:new pe,direction:new pe,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new pe,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new pe,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new pe,halfWidth:new pe,halfHeight:new pe};break}return s[e.id]=i,i}}}function Yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let Zw=0;function Kw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qw(s){const e=new qw,i=Yw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new pe);const l=new pe,c=new sn,f=new sn;function d(m){let g=0,v=0,y=0;for(let D=0;D<9;D++)a.probe[D].set(0,0,0);let E=0,b=0,T=0,x=0,_=0,L=0,O=0,U=0,V=0,k=0,z=0;m.sort(Kw);for(let D=0,N=m.length;D<N;D++){const j=m[D],ae=j.color,de=j.intensity,_e=j.distance,re=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)g+=ae.r*de,v+=ae.g*de,y+=ae.b*de;else if(j.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(j.sh.coefficients[I],de);z++}else if(j.isDirectionalLight){const I=e.get(j);if(I.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const K=j.shadow,Q=i.get(j);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,a.directionalShadow[E]=Q,a.directionalShadowMap[E]=re,a.directionalShadowMatrix[E]=j.shadow.matrix,L++}a.directional[E]=I,E++}else if(j.isSpotLight){const I=e.get(j);I.position.setFromMatrixPosition(j.matrixWorld),I.color.copy(ae).multiplyScalar(de),I.distance=_e,I.coneCos=Math.cos(j.angle),I.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),I.decay=j.decay,a.spot[T]=I;const K=j.shadow;if(j.map&&(a.spotLightMap[V]=j.map,V++,K.updateMatrices(j),j.castShadow&&k++),a.spotLightMatrix[T]=K.matrix,j.castShadow){const Q=i.get(j);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,a.spotShadow[T]=Q,a.spotShadowMap[T]=re,U++}T++}else if(j.isRectAreaLight){const I=e.get(j);I.color.copy(ae).multiplyScalar(de),I.halfWidth.set(j.width*.5,0,0),I.halfHeight.set(0,j.height*.5,0),a.rectArea[x]=I,x++}else if(j.isPointLight){const I=e.get(j);if(I.color.copy(j.color).multiplyScalar(j.intensity),I.distance=j.distance,I.decay=j.decay,j.castShadow){const K=j.shadow,Q=i.get(j);Q.shadowIntensity=K.intensity,Q.shadowBias=K.bias,Q.shadowNormalBias=K.normalBias,Q.shadowRadius=K.radius,Q.shadowMapSize=K.mapSize,Q.shadowCameraNear=K.camera.near,Q.shadowCameraFar=K.camera.far,a.pointShadow[b]=Q,a.pointShadowMap[b]=re,a.pointShadowMatrix[b]=j.shadow.matrix,O++}a.point[b]=I,b++}else if(j.isHemisphereLight){const I=e.get(j);I.skyColor.copy(j.color).multiplyScalar(de),I.groundColor.copy(j.groundColor).multiplyScalar(de),a.hemi[_]=I,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ze.LTC_FLOAT_1,a.rectAreaLTC2=ze.LTC_FLOAT_2):(a.rectAreaLTC1=ze.LTC_HALF_1,a.rectAreaLTC2=ze.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=y;const Z=a.hash;(Z.directionalLength!==E||Z.pointLength!==b||Z.spotLength!==T||Z.rectAreaLength!==x||Z.hemiLength!==_||Z.numDirectionalShadows!==L||Z.numPointShadows!==O||Z.numSpotShadows!==U||Z.numSpotMaps!==V||Z.numLightProbes!==z)&&(a.directional.length=E,a.spot.length=T,a.rectArea.length=x,a.point.length=b,a.hemi.length=_,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.pointShadow.length=O,a.pointShadowMap.length=O,a.spotShadow.length=U,a.spotShadowMap.length=U,a.directionalShadowMatrix.length=L,a.pointShadowMatrix.length=O,a.spotLightMatrix.length=U+V-k,a.spotLightMap.length=V,a.numSpotLightShadowsWithMaps=k,a.numLightProbes=z,Z.directionalLength=E,Z.pointLength=b,Z.spotLength=T,Z.rectAreaLength=x,Z.hemiLength=_,Z.numDirectionalShadows=L,Z.numPointShadows=O,Z.numSpotShadows=U,Z.numSpotMaps=V,Z.numLightProbes=z,a.version=Zw++)}function p(m,g){let v=0,y=0,E=0,b=0,T=0;const x=g.matrixWorldInverse;for(let _=0,L=m.length;_<L;_++){const O=m[_];if(O.isDirectionalLight){const U=a.directional[v];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),v++}else if(O.isSpotLight){const U=a.spot[E];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(x),E++}else if(O.isRectAreaLight){const U=a.rectArea[b];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),f.identity(),c.copy(O.matrixWorld),c.premultiply(x),f.extractRotation(c),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(O.isPointLight){const U=a.point[y];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(x),y++}else if(O.isHemisphereLight){const U=a.hemi[T];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(x),T++}}}return{setup:d,setupView:p,state:a}}function h_(s){const e=new Qw(s),i=[],a=[];function l(g){m.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function Jw(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new h_(s),e.set(l,[d])):c>=f.length?(d=new h_(s),f.push(d)):d=f[c],d}function a(){e=new WeakMap}return{get:i,dispose:a}}const $w=`void main() {
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
}`;function tR(s,e,i){let a=new _p;const l=new It,c=new It,f=new rn,d=new Ab({depthPacking:HE}),p=new wb,m={},g=i.maxTextureSize,v={[tr]:jn,[jn]:tr,[pa]:pa},y=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:$w,fragmentShader:eR}),E=y.clone();E.defines.HORIZONTAL_PASS=1;const b=new Ci;b.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new oi(b,y),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U_;let _=this.type;this.render=function(k,z,Z){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;const D=s.getRenderTarget(),N=s.getActiveCubeFace(),j=s.getActiveMipmapLevel(),ae=s.state;ae.setBlending($a),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const de=_!==ha&&this.type===ha,_e=_===ha&&this.type!==ha;for(let re=0,I=k.length;re<I;re++){const K=k[re],Q=K.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const G=Q.getFrameExtents();if(l.multiply(G),c.copy(Q.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/G.x),l.x=c.x*G.x,Q.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/G.y),l.y=c.y*G.y,Q.mapSize.y=c.y)),Q.map===null||de===!0||_e===!0){const M=this.type!==ha?{minFilter:Ri,magFilter:Ri}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ir(l.x,l.y,M),Q.map.texture.name=K.name+".shadowMap",Q.camera.updateProjectionMatrix()}s.setRenderTarget(Q.map),s.clear();const R=Q.getViewportCount();for(let M=0;M<R;M++){const F=Q.getViewport(M);f.set(c.x*F.x,c.y*F.y,c.x*F.z,c.y*F.w),ae.viewport(f),Q.updateMatrices(K,M),a=Q.getFrustum(),U(z,Z,Q.camera,K,this.type)}Q.isPointLightShadow!==!0&&this.type===ha&&L(Q,Z),Q.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(D,N,j)};function L(k,z){const Z=e.update(T);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,E.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,E.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ir(l.x,l.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,y,T,null),E.uniforms.shadow_pass.value=k.mapPass.texture,E.uniforms.resolution.value=k.mapSize,E.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,Z,E,T,null)}function O(k,z,Z,D){let N=null;const j=Z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(j!==void 0)N=j;else if(N=Z.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const ae=N.uuid,de=z.uuid;let _e=m[ae];_e===void 0&&(_e={},m[ae]=_e);let re=_e[de];re===void 0&&(re=N.clone(),_e[de]=re,z.addEventListener("dispose",V)),N=re}if(N.visible=z.visible,N.wireframe=z.wireframe,D===ha?N.side=z.shadowSide!==null?z.shadowSide:z.side:N.side=z.shadowSide!==null?z.shadowSide:v[z.side],N.alphaMap=z.alphaMap,N.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,N.map=z.map,N.clipShadows=z.clipShadows,N.clippingPlanes=z.clippingPlanes,N.clipIntersection=z.clipIntersection,N.displacementMap=z.displacementMap,N.displacementScale=z.displacementScale,N.displacementBias=z.displacementBias,N.wireframeLinewidth=z.wireframeLinewidth,N.linewidth=z.linewidth,Z.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const ae=s.properties.get(N);ae.light=Z}return N}function U(k,z,Z,D,N){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&N===ha)&&(!k.frustumCulled||a.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld);const de=e.update(k),_e=k.material;if(Array.isArray(_e)){const re=de.groups;for(let I=0,K=re.length;I<K;I++){const Q=re[I],G=_e[Q.materialIndex];if(G&&G.visible){const R=O(k,G,D,N);k.onBeforeShadow(s,k,z,Z,de,R,Q),s.renderBufferDirect(Z,null,de,R,k,Q),k.onAfterShadow(s,k,z,Z,de,R,Q)}}}else if(_e.visible){const re=O(k,_e,D,N);k.onBeforeShadow(s,k,z,Z,de,re,null),s.renderBufferDirect(Z,null,de,re,k,null),k.onAfterShadow(s,k,z,Z,de,re,null)}}const ae=k.children;for(let de=0,_e=ae.length;de<_e;de++)U(ae[de],z,Z,D,N)}function V(k){k.target.removeEventListener("dispose",V);for(const Z in m){const D=m[Z],N=k.target.uuid;N in D&&(D[N].dispose(),delete D[N])}}}const nR={[gh]:vh,[_h]:Sh,[xh]:Mh,[Bs]:yh,[vh]:gh,[Sh]:_h,[Mh]:xh,[yh]:Bs};function iR(s,e){function i(){let J=!1;const De=new rn;let Oe=null;const ke=new rn(0,0,0,0);return{setMask:function(Re){Oe!==Re&&!J&&(s.colorMask(Re,Re,Re,Re),Oe=Re)},setLocked:function(Re){J=Re},setClear:function(Re,be,je,dt,Ht){Ht===!0&&(Re*=dt,be*=dt,je*=dt),De.set(Re,be,je,dt),ke.equals(De)===!1&&(s.clearColor(Re,be,je,dt),ke.copy(De))},reset:function(){J=!1,Oe=null,ke.set(-1,0,0,0)}}}function a(){let J=!1,De=!1,Oe=null,ke=null,Re=null;return{setReversed:function(be){if(De!==be){const je=e.get("EXT_clip_control");be?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),De=be;const dt=Re;Re=null,this.setClear(dt)}},getReversed:function(){return De},setTest:function(be){be?$(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(be){Oe!==be&&!J&&(s.depthMask(be),Oe=be)},setFunc:function(be){if(De&&(be=nR[be]),ke!==be){switch(be){case gh:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case _h:s.depthFunc(s.LESS);break;case Bs:s.depthFunc(s.LEQUAL);break;case xh:s.depthFunc(s.EQUAL);break;case yh:s.depthFunc(s.GEQUAL);break;case Sh:s.depthFunc(s.GREATER);break;case Mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ke=be}},setLocked:function(be){J=be},setClear:function(be){Re!==be&&(De&&(be=1-be),s.clearDepth(be),Re=be)},reset:function(){J=!1,Oe=null,ke=null,Re=null,De=!1}}}function l(){let J=!1,De=null,Oe=null,ke=null,Re=null,be=null,je=null,dt=null,Ht=null;return{setTest:function(Nt){J||(Nt?$(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Nt){De!==Nt&&!J&&(s.stencilMask(Nt),De=Nt)},setFunc:function(Nt,On,li){(Oe!==Nt||ke!==On||Re!==li)&&(s.stencilFunc(Nt,On,li),Oe=Nt,ke=On,Re=li)},setOp:function(Nt,On,li){(be!==Nt||je!==On||dt!==li)&&(s.stencilOp(Nt,On,li),be=Nt,je=On,dt=li)},setLocked:function(Nt){J=Nt},setClear:function(Nt){Ht!==Nt&&(s.clearStencil(Nt),Ht=Nt)},reset:function(){J=!1,De=null,Oe=null,ke=null,Re=null,be=null,je=null,dt=null,Ht=null}}}const c=new i,f=new a,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},y=new WeakMap,E=[],b=null,T=!1,x=null,_=null,L=null,O=null,U=null,V=null,k=null,z=new Dt(0,0,0),Z=0,D=!1,N=null,j=null,ae=null,de=null,_e=null;const re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,K=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),I=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),I=K>=2);let G=null,R={};const M=s.getParameter(s.SCISSOR_BOX),F=s.getParameter(s.VIEWPORT),ee=new rn().fromArray(M),ue=new rn().fromArray(F);function se(J,De,Oe,ke){const Re=new Uint8Array(4),be=s.createTexture();s.bindTexture(J,be),s.texParameteri(J,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(J,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<Oe;je++)J===s.TEXTURE_3D||J===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,ke,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(De+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return be}const X={};X[s.TEXTURE_2D]=se(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),$(s.DEPTH_TEST),f.setFunc(Bs),Xe(!1),Be(gv),$(s.CULL_FACE),Ve($a);function $(J){g[J]!==!0&&(s.enable(J),g[J]=!0)}function ye(J){g[J]!==!1&&(s.disable(J),g[J]=!1)}function Ae(J,De){return v[J]!==De?(s.bindFramebuffer(J,De),v[J]=De,J===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),J===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Ue(J,De){let Oe=E,ke=!1;if(J){Oe=y.get(De),Oe===void 0&&(Oe=[],y.set(De,Oe));const Re=J.textures;if(Oe.length!==Re.length||Oe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,je=Re.length;be<je;be++)Oe[be]=s.COLOR_ATTACHMENT0+be;Oe.length=Re.length,ke=!0}}else Oe[0]!==s.BACK&&(Oe[0]=s.BACK,ke=!0);ke&&s.drawBuffers(Oe)}function We(J){return b!==J?(s.useProgram(J),b=J,!0):!1}const lt={[Dr]:s.FUNC_ADD,[dE]:s.FUNC_SUBTRACT,[hE]:s.FUNC_REVERSE_SUBTRACT};lt[pE]=s.MIN,lt[mE]=s.MAX;const H={[gE]:s.ZERO,[vE]:s.ONE,[_E]:s.SRC_COLOR,[ph]:s.SRC_ALPHA,[bE]:s.SRC_ALPHA_SATURATE,[ME]:s.DST_COLOR,[yE]:s.DST_ALPHA,[xE]:s.ONE_MINUS_SRC_COLOR,[mh]:s.ONE_MINUS_SRC_ALPHA,[EE]:s.ONE_MINUS_DST_COLOR,[SE]:s.ONE_MINUS_DST_ALPHA,[TE]:s.CONSTANT_COLOR,[AE]:s.ONE_MINUS_CONSTANT_COLOR,[wE]:s.CONSTANT_ALPHA,[RE]:s.ONE_MINUS_CONSTANT_ALPHA};function Ve(J,De,Oe,ke,Re,be,je,dt,Ht,Nt){if(J===$a){T===!0&&(ye(s.BLEND),T=!1);return}if(T===!1&&($(s.BLEND),T=!0),J!==fE){if(J!==x||Nt!==D){if((_!==Dr||U!==Dr)&&(s.blendEquation(s.FUNC_ADD),_=Dr,U=Dr),Nt)switch(J){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.ONE,s.ONE);break;case vv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _v:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}else switch(J){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",J);break}L=null,O=null,V=null,k=null,z.set(0,0,0),Z=0,x=J,D=Nt}return}Re=Re||De,be=be||Oe,je=je||ke,(De!==_||Re!==U)&&(s.blendEquationSeparate(lt[De],lt[Re]),_=De,U=Re),(Oe!==L||ke!==O||be!==V||je!==k)&&(s.blendFuncSeparate(H[Oe],H[ke],H[be],H[je]),L=Oe,O=ke,V=be,k=je),(dt.equals(z)===!1||Ht!==Z)&&(s.blendColor(dt.r,dt.g,dt.b,Ht),z.copy(dt),Z=Ht),x=J,D=!1}function Ye(J,De){J.side===pa?ye(s.CULL_FACE):$(s.CULL_FACE);let Oe=J.side===jn;De&&(Oe=!Oe),Xe(Oe),J.blending===Is&&J.transparent===!1?Ve($a):Ve(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),f.setFunc(J.depthFunc),f.setTest(J.depthTest),f.setMask(J.depthWrite),c.setMask(J.colorWrite);const ke=J.stencilWrite;d.setTest(ke),ke&&(d.setMask(J.stencilWriteMask),d.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),d.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),He(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(J){N!==J&&(J?s.frontFace(s.CW):s.frontFace(s.CCW),N=J)}function Be(J){J!==lE?($(s.CULL_FACE),J!==j&&(J===gv?s.cullFace(s.BACK):J===cE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),j=J}function yt(J){J!==ae&&(I&&s.lineWidth(J),ae=J)}function He(J,De,Oe){J?($(s.POLYGON_OFFSET_FILL),(de!==De||_e!==Oe)&&(s.polygonOffset(De,Oe),de=De,_e=Oe)):ye(s.POLYGON_OFFSET_FILL)}function rt(J){J?$(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function $t(J){J===void 0&&(J=s.TEXTURE0+re-1),G!==J&&(s.activeTexture(J),G=J)}function Kt(J,De,Oe){Oe===void 0&&(G===null?Oe=s.TEXTURE0+re-1:Oe=G);let ke=R[Oe];ke===void 0&&(ke={type:void 0,texture:void 0},R[Oe]=ke),(ke.type!==J||ke.texture!==De)&&(G!==Oe&&(s.activeTexture(Oe),G=Oe),s.bindTexture(J,De||X[J]),ke.type=J,ke.texture=De)}function B(){const J=R[G];J!==void 0&&J.type!==void 0&&(s.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function oe(){try{s.compressedTexImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Se(){try{s.texSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function we(){try{s.texSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function ve(){try{s.compressedTexSubImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function $e(){try{s.compressedTexSubImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ne(){try{s.texStorage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ze(){try{s.texStorage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function et(){try{s.texImage2D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Ce(){try{s.texImage3D(...arguments)}catch(J){console.error("THREE.WebGLState:",J)}}function Le(J){ee.equals(J)===!1&&(s.scissor(J.x,J.y,J.z,J.w),ee.copy(J))}function nt(J){ue.equals(J)===!1&&(s.viewport(J.x,J.y,J.z,J.w),ue.copy(J))}function Ge(J,De){let Oe=m.get(De);Oe===void 0&&(Oe=new WeakMap,m.set(De,Oe));let ke=Oe.get(J);ke===void 0&&(ke=s.getUniformBlockIndex(De,J.name),Oe.set(J,ke))}function Pe(J,De){const ke=m.get(De).get(J);p.get(De)!==ke&&(s.uniformBlockBinding(De,ke,J.__bindingPointIndex),p.set(De,ke))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},G=null,R={},v={},y=new WeakMap,E=[],b=null,T=!1,x=null,_=null,L=null,O=null,U=null,V=null,k=null,z=new Dt(0,0,0),Z=0,D=!1,N=null,j=null,ae=null,de=null,_e=null,ee.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:$,disable:ye,bindFramebuffer:Ae,drawBuffers:Ue,useProgram:We,setBlending:Ve,setMaterial:Ye,setFlipSided:Xe,setCullFace:Be,setLineWidth:yt,setPolygonOffset:He,setScissorTest:rt,activeTexture:$t,bindTexture:Kt,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:oe,texImage2D:et,texImage3D:Ce,updateUBOMapping:Ge,uniformBlockBinding:Pe,texStorage2D:Ne,texStorage3D:Ze,texSubImage2D:Se,texSubImage3D:we,compressedTexSubImage2D:ve,compressedTexSubImage3D:$e,scissor:Le,viewport:nt,reset:pt}}function aR(s,e,i,a,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,g=new WeakMap;let v;const y=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(B,A){return E?new OffscreenCanvas(B,A):su("canvas")}function T(B,A,oe){let Se=1;const we=Kt(B);if((we.width>oe||we.height>oe)&&(Se=oe/Math.max(we.width,we.height)),Se<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ve=Math.floor(Se*we.width),$e=Math.floor(Se*we.height);v===void 0&&(v=b(ve,$e));const Ne=A?b(ve,$e):v;return Ne.width=ve,Ne.height=$e,Ne.getContext("2d").drawImage(B,0,0,ve,$e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+ve+"x"+$e+")."),Ne}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),B;return B}function x(B){return B.generateMipmaps}function _(B){s.generateMipmap(B)}function L(B){return B.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?s.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(B,A,oe,Se,we=!1){if(B!==null){if(s[B]!==void 0)return s[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ve=A;if(A===s.RED&&(oe===s.FLOAT&&(ve=s.R32F),oe===s.HALF_FLOAT&&(ve=s.R16F),oe===s.UNSIGNED_BYTE&&(ve=s.R8)),A===s.RED_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ve=s.R8UI),oe===s.UNSIGNED_SHORT&&(ve=s.R16UI),oe===s.UNSIGNED_INT&&(ve=s.R32UI),oe===s.BYTE&&(ve=s.R8I),oe===s.SHORT&&(ve=s.R16I),oe===s.INT&&(ve=s.R32I)),A===s.RG&&(oe===s.FLOAT&&(ve=s.RG32F),oe===s.HALF_FLOAT&&(ve=s.RG16F),oe===s.UNSIGNED_BYTE&&(ve=s.RG8)),A===s.RG_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ve=s.RG8UI),oe===s.UNSIGNED_SHORT&&(ve=s.RG16UI),oe===s.UNSIGNED_INT&&(ve=s.RG32UI),oe===s.BYTE&&(ve=s.RG8I),oe===s.SHORT&&(ve=s.RG16I),oe===s.INT&&(ve=s.RG32I)),A===s.RGB_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),oe===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),oe===s.UNSIGNED_INT&&(ve=s.RGB32UI),oe===s.BYTE&&(ve=s.RGB8I),oe===s.SHORT&&(ve=s.RGB16I),oe===s.INT&&(ve=s.RGB32I)),A===s.RGBA_INTEGER&&(oe===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),oe===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),oe===s.UNSIGNED_INT&&(ve=s.RGBA32UI),oe===s.BYTE&&(ve=s.RGBA8I),oe===s.SHORT&&(ve=s.RGBA16I),oe===s.INT&&(ve=s.RGBA32I)),A===s.RGB&&(oe===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),oe===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),A===s.RGBA){const $e=we?au:Pt.getTransfer(Se);oe===s.FLOAT&&(ve=s.RGBA32F),oe===s.HALF_FLOAT&&(ve=s.RGBA16F),oe===s.UNSIGNED_BYTE&&(ve=$e===jt?s.SRGB8_ALPHA8:s.RGBA8),oe===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),oe===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function U(B,A){let oe;return B?A===null||A===Pr||A===Jo?oe=s.DEPTH24_STENCIL8:A===ma?oe=s.DEPTH32F_STENCIL8:A===Qo&&(oe=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pr||A===Jo?oe=s.DEPTH_COMPONENT24:A===ma?oe=s.DEPTH_COMPONENT32F:A===Qo&&(oe=s.DEPTH_COMPONENT16),oe}function V(B,A){return x(B)===!0||B.isFramebufferTexture&&B.minFilter!==Ri&&B.minFilter!==zi?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function k(B){const A=B.target;A.removeEventListener("dispose",k),Z(A),A.isVideoTexture&&g.delete(A)}function z(B){const A=B.target;A.removeEventListener("dispose",z),N(A)}function Z(B){const A=a.get(B);if(A.__webglInit===void 0)return;const oe=B.source,Se=y.get(oe);if(Se){const we=Se[A.__cacheKey];we.usedTimes--,we.usedTimes===0&&D(B),Object.keys(Se).length===0&&y.delete(oe)}a.remove(B)}function D(B){const A=a.get(B);s.deleteTexture(A.__webglTexture);const oe=B.source,Se=y.get(oe);delete Se[A.__cacheKey],f.memory.textures--}function N(B){const A=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let we=0;we<A.__webglFramebuffer[Se].length;we++)s.deleteFramebuffer(A.__webglFramebuffer[Se][we]);else s.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[Se]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const oe=B.textures;for(let Se=0,we=oe.length;Se<we;Se++){const ve=a.get(oe[Se]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),f.memory.textures--),a.remove(oe[Se])}a.remove(B)}let j=0;function ae(){j=0}function de(){const B=j;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),j+=1,B}function _e(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function re(B,A){const oe=a.get(B);if(B.isVideoTexture&&rt(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&oe.__version!==B.version){const Se=B.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(oe,B,A);return}}else B.isExternalTexture&&(oe.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,oe.__webglTexture,s.TEXTURE0+A)}function I(B,A){const oe=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&oe.__version!==B.version){X(oe,B,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,oe.__webglTexture,s.TEXTURE0+A)}function K(B,A){const oe=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&oe.__version!==B.version){X(oe,B,A);return}i.bindTexture(s.TEXTURE_3D,oe.__webglTexture,s.TEXTURE0+A)}function Q(B,A){const oe=a.get(B);if(B.version>0&&oe.__version!==B.version){$(oe,B,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,oe.__webglTexture,s.TEXTURE0+A)}const G={[Th]:s.REPEAT,[Ur]:s.CLAMP_TO_EDGE,[Ah]:s.MIRRORED_REPEAT},R={[Ri]:s.NEAREST,[BE]:s.NEAREST_MIPMAP_NEAREST,[Ec]:s.NEAREST_MIPMAP_LINEAR,[zi]:s.LINEAR,[Nd]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},M={[VE]:s.NEVER,[YE]:s.ALWAYS,[kE]:s.LESS,[W_]:s.LEQUAL,[WE]:s.EQUAL,[qE]:s.GEQUAL,[XE]:s.GREATER,[jE]:s.NOTEQUAL};function F(B,A){if(A.type===ma&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===zi||A.magFilter===Nd||A.magFilter===Ec||A.magFilter===Lr||A.minFilter===zi||A.minFilter===Nd||A.minFilter===Ec||A.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(B,s.TEXTURE_WRAP_S,G[A.wrapS]),s.texParameteri(B,s.TEXTURE_WRAP_T,G[A.wrapT]),(B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY)&&s.texParameteri(B,s.TEXTURE_WRAP_R,G[A.wrapR]),s.texParameteri(B,s.TEXTURE_MAG_FILTER,R[A.magFilter]),s.texParameteri(B,s.TEXTURE_MIN_FILTER,R[A.minFilter]),A.compareFunction&&(s.texParameteri(B,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(B,s.TEXTURE_COMPARE_FUNC,M[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ri||A.minFilter!==Ec&&A.minFilter!==Lr||A.type===ma&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const oe=e.get("EXT_texture_filter_anisotropic");s.texParameterf(B,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function ee(B,A){let oe=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",k));const Se=A.source;let we=y.get(Se);we===void 0&&(we={},y.set(Se,we));const ve=_e(A);if(ve!==B.__cacheKey){we[ve]===void 0&&(we[ve]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,oe=!0),we[ve].usedTimes++;const $e=we[B.__cacheKey];$e!==void 0&&(we[B.__cacheKey].usedTimes--,$e.usedTimes===0&&D(A)),B.__cacheKey=ve,B.__webglTexture=we[ve].texture}return oe}function ue(B,A,oe){return Math.floor(Math.floor(B/oe)/A)}function se(B,A,oe,Se){const ve=B.updateRanges;if(ve.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,oe,Se,A.data);else{ve.sort((Ce,Le)=>Ce.start-Le.start);let $e=0;for(let Ce=1;Ce<ve.length;Ce++){const Le=ve[$e],nt=ve[Ce],Ge=Le.start+Le.count,Pe=ue(nt.start,A.width,4),pt=ue(Le.start,A.width,4);nt.start<=Ge+1&&Pe===pt&&ue(nt.start+nt.count-1,A.width,4)===Pe?Le.count=Math.max(Le.count,nt.start+nt.count-Le.start):(++$e,ve[$e]=nt)}ve.length=$e+1;const Ne=s.getParameter(s.UNPACK_ROW_LENGTH),Ze=s.getParameter(s.UNPACK_SKIP_PIXELS),et=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Ce=0,Le=ve.length;Ce<Le;Ce++){const nt=ve[Ce],Ge=Math.floor(nt.start/4),Pe=Math.ceil(nt.count/4),pt=Ge%A.width,J=Math.floor(Ge/A.width),De=Pe,Oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,J),i.texSubImage2D(s.TEXTURE_2D,0,pt,J,De,Oe,oe,Se,A.data)}B.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ne),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),s.pixelStorei(s.UNPACK_SKIP_ROWS,et)}}function X(B,A,oe){let Se=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=s.TEXTURE_3D);const we=ee(B,A),ve=A.source;i.bindTexture(Se,B.__webglTexture,s.TEXTURE0+oe);const $e=a.get(ve);if(ve.version!==$e.__version||we===!0){i.activeTexture(s.TEXTURE0+oe);const Ne=Pt.getPrimaries(Pt.workingColorSpace),Ze=A.colorSpace===Ja?null:Pt.getPrimaries(A.colorSpace),et=A.colorSpace===Ja||Ne===Ze?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let Ce=T(A.image,!1,l.maxTextureSize);Ce=$t(A,Ce);const Le=c.convert(A.format,A.colorSpace),nt=c.convert(A.type);let Ge=O(A.internalFormat,Le,nt,A.colorSpace,A.isVideoTexture);F(Se,A);let Pe;const pt=A.mipmaps,J=A.isVideoTexture!==!0,De=$e.__version===void 0||we===!0,Oe=ve.dataReady,ke=V(A,Ce);if(A.isDepthTexture)Ge=U(A.format===el,A.type),De&&(J?i.texStorage2D(s.TEXTURE_2D,1,Ge,Ce.width,Ce.height):i.texImage2D(s.TEXTURE_2D,0,Ge,Ce.width,Ce.height,0,Le,nt,null));else if(A.isDataTexture)if(pt.length>0){J&&De&&i.texStorage2D(s.TEXTURE_2D,ke,Ge,pt[0].width,pt[0].height);for(let Re=0,be=pt.length;Re<be;Re++)Pe=pt[Re],J?Oe&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Le,nt,Pe.data):i.texImage2D(s.TEXTURE_2D,Re,Ge,Pe.width,Pe.height,0,Le,nt,Pe.data);A.generateMipmaps=!1}else J?(De&&i.texStorage2D(s.TEXTURE_2D,ke,Ge,Ce.width,Ce.height),Oe&&se(A,Ce,Le,nt)):i.texImage2D(s.TEXTURE_2D,0,Ge,Ce.width,Ce.height,0,Le,nt,Ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){J&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ge,pt[0].width,pt[0].height,Ce.depth);for(let Re=0,be=pt.length;Re<be;Re++)if(Pe=pt[Re],A.format!==wi)if(Le!==null)if(J){if(Oe)if(A.layerUpdates.size>0){const je=kv(Pe.width,Pe.height,A.format,A.type);for(const dt of A.layerUpdates){const Ht=Pe.data.subarray(dt*je/Pe.data.BYTES_PER_ELEMENT,(dt+1)*je/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,dt,Pe.width,Pe.height,1,Le,Ht)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Pe.width,Pe.height,Ce.depth,Le,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,Ge,Pe.width,Pe.height,Ce.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Oe&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Pe.width,Pe.height,Ce.depth,Le,nt,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Re,Ge,Pe.width,Pe.height,Ce.depth,0,Le,nt,Pe.data)}else{J&&De&&i.texStorage2D(s.TEXTURE_2D,ke,Ge,pt[0].width,pt[0].height);for(let Re=0,be=pt.length;Re<be;Re++)Pe=pt[Re],A.format!==wi?Le!==null?J?Oe&&i.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Le,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,Re,Ge,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Oe&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Pe.width,Pe.height,Le,nt,Pe.data):i.texImage2D(s.TEXTURE_2D,Re,Ge,Pe.width,Pe.height,0,Le,nt,Pe.data)}else if(A.isDataArrayTexture)if(J){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,ke,Ge,Ce.width,Ce.height,Ce.depth),Oe)if(A.layerUpdates.size>0){const Re=kv(Ce.width,Ce.height,A.format,A.type);for(const be of A.layerUpdates){const je=Ce.data.subarray(be*Re/Ce.data.BYTES_PER_ELEMENT,(be+1)*Re/Ce.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,Ce.width,Ce.height,1,Le,nt,je)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Le,nt,Ce.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,Ce.width,Ce.height,Ce.depth,0,Le,nt,Ce.data);else if(A.isData3DTexture)J?(De&&i.texStorage3D(s.TEXTURE_3D,ke,Ge,Ce.width,Ce.height,Ce.depth),Oe&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Le,nt,Ce.data)):i.texImage3D(s.TEXTURE_3D,0,Ge,Ce.width,Ce.height,Ce.depth,0,Le,nt,Ce.data);else if(A.isFramebufferTexture){if(De)if(J)i.texStorage2D(s.TEXTURE_2D,ke,Ge,Ce.width,Ce.height);else{let Re=Ce.width,be=Ce.height;for(let je=0;je<ke;je++)i.texImage2D(s.TEXTURE_2D,je,Ge,Re,be,0,Le,nt,null),Re>>=1,be>>=1}}else if(pt.length>0){if(J&&De){const Re=Kt(pt[0]);i.texStorage2D(s.TEXTURE_2D,ke,Ge,Re.width,Re.height)}for(let Re=0,be=pt.length;Re<be;Re++)Pe=pt[Re],J?Oe&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Le,nt,Pe):i.texImage2D(s.TEXTURE_2D,Re,Ge,Le,nt,Pe);A.generateMipmaps=!1}else if(J){if(De){const Re=Kt(Ce);i.texStorage2D(s.TEXTURE_2D,ke,Ge,Re.width,Re.height)}Oe&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,nt,Ce)}else i.texImage2D(s.TEXTURE_2D,0,Ge,Le,nt,Ce);x(A)&&_(Se),$e.__version=ve.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function $(B,A,oe){if(A.image.length!==6)return;const Se=ee(B,A),we=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,B.__webglTexture,s.TEXTURE0+oe);const ve=a.get(we);if(we.version!==ve.__version||Se===!0){i.activeTexture(s.TEXTURE0+oe);const $e=Pt.getPrimaries(Pt.workingColorSpace),Ne=A.colorSpace===Ja?null:Pt.getPrimaries(A.colorSpace),Ze=A.colorSpace===Ja||$e===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const et=A.isCompressedTexture||A.image[0].isCompressedTexture,Ce=A.image[0]&&A.image[0].isDataTexture,Le=[];for(let be=0;be<6;be++)!et&&!Ce?Le[be]=T(A.image[be],!0,l.maxCubemapSize):Le[be]=Ce?A.image[be].image:A.image[be],Le[be]=$t(A,Le[be]);const nt=Le[0],Ge=c.convert(A.format,A.colorSpace),Pe=c.convert(A.type),pt=O(A.internalFormat,Ge,Pe,A.colorSpace),J=A.isVideoTexture!==!0,De=ve.__version===void 0||Se===!0,Oe=we.dataReady;let ke=V(A,nt);F(s.TEXTURE_CUBE_MAP,A);let Re;if(et){J&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pt,nt.width,nt.height);for(let be=0;be<6;be++){Re=Le[be].mipmaps;for(let je=0;je<Re.length;je++){const dt=Re[je];A.format!==wi?Ge!==null?J?Oe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,dt.width,dt.height,Ge,dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,pt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,0,0,dt.width,dt.height,Ge,Pe,dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je,pt,dt.width,dt.height,0,Ge,Pe,dt.data)}}}else{if(Re=A.mipmaps,J&&De){Re.length>0&&ke++;const be=Kt(Le[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,ke,pt,be.width,be.height)}for(let be=0;be<6;be++)if(Ce){J?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Le[be].width,Le[be].height,Ge,Pe,Le[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,Le[be].width,Le[be].height,0,Ge,Pe,Le[be].data);for(let je=0;je<Re.length;je++){const Ht=Re[je].image[be].image;J?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,Ht.width,Ht.height,Ge,Pe,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,pt,Ht.width,Ht.height,0,Ge,Pe,Ht.data)}}else{J?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ge,Pe,Le[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,Ge,Pe,Le[be]);for(let je=0;je<Re.length;je++){const dt=Re[je];J?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,0,0,Ge,Pe,dt.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,je+1,pt,Ge,Pe,dt.image[be])}}}x(A)&&_(s.TEXTURE_CUBE_MAP),ve.__version=we.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function ye(B,A,oe,Se,we,ve){const $e=c.convert(oe.format,oe.colorSpace),Ne=c.convert(oe.type),Ze=O(oe.internalFormat,$e,Ne,oe.colorSpace),et=a.get(A),Ce=a.get(oe);if(Ce.__renderTarget=A,!et.__hasExternalTextures){const Le=Math.max(1,A.width>>ve),nt=Math.max(1,A.height>>ve);we===s.TEXTURE_3D||we===s.TEXTURE_2D_ARRAY?i.texImage3D(we,ve,Ze,Le,nt,A.depth,0,$e,Ne,null):i.texImage2D(we,ve,Ze,Le,nt,0,$e,Ne,null)}i.bindFramebuffer(s.FRAMEBUFFER,B),He(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,we,Ce.__webglTexture,0,yt(A)):(we===s.TEXTURE_2D||we>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,we,Ce.__webglTexture,ve),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(B,A,oe){if(s.bindRenderbuffer(s.RENDERBUFFER,B),A.depthBuffer){const Se=A.depthTexture,we=Se&&Se.isDepthTexture?Se.type:null,ve=U(A.stencilBuffer,we),$e=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=yt(A);He(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ne,ve,A.width,A.height):oe?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ne,ve,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ve,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,$e,s.RENDERBUFFER,B)}else{const Se=A.textures;for(let we=0;we<Se.length;we++){const ve=Se[we],$e=c.convert(ve.format,ve.colorSpace),Ne=c.convert(ve.type),Ze=O(ve.internalFormat,$e,Ne,ve.colorSpace),et=yt(A);oe&&He(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,et,Ze,A.width,A.height):He(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,et,Ze,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ze,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ue(B,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=a.get(A.depthTexture);Se.__renderTarget=A,(!Se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),re(A.depthTexture,0);const we=Se.__webglTexture,ve=yt(A);if(A.depthTexture.format===$o)He(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0);else if(A.depthTexture.format===el)He(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function We(B){const A=a.get(B),oe=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const Se=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){const we=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",we)};Se.addEventListener("dispose",we),A.__depthDisposeCallback=we}A.__boundDepthTexture=Se}if(B.depthTexture&&!A.__autoAllocateDepthBuffer){if(oe)throw new Error("target.depthTexture not supported in Cube render targets");const Se=B.texture.mipmaps;Se&&Se.length>0?Ue(A.__webglFramebuffer[0],B):Ue(A.__webglFramebuffer,B)}else if(oe){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=s.createRenderbuffer(),Ae(A.__webglDepthbuffer[Se],B,!1);else{const we=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,ve)}}else{const Se=B.texture.mipmaps;if(Se&&Se.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Ae(A.__webglDepthbuffer,B,!1);else{const we=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,ve)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(B,A,oe){const Se=a.get(B);A!==void 0&&ye(Se.__webglFramebuffer,B,B.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),oe!==void 0&&We(B)}function H(B){const A=B.texture,oe=a.get(B),Se=a.get(A);B.addEventListener("dispose",z);const we=B.textures,ve=B.isWebGLCubeRenderTarget===!0,$e=we.length>1;if($e||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=A.version,f.memory.textures++),ve){oe.__webglFramebuffer=[];for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0){oe.__webglFramebuffer[Ne]=[];for(let Ze=0;Ze<A.mipmaps.length;Ze++)oe.__webglFramebuffer[Ne][Ze]=s.createFramebuffer()}else oe.__webglFramebuffer[Ne]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){oe.__webglFramebuffer=[];for(let Ne=0;Ne<A.mipmaps.length;Ne++)oe.__webglFramebuffer[Ne]=s.createFramebuffer()}else oe.__webglFramebuffer=s.createFramebuffer();if($e)for(let Ne=0,Ze=we.length;Ne<Ze;Ne++){const et=a.get(we[Ne]);et.__webglTexture===void 0&&(et.__webglTexture=s.createTexture(),f.memory.textures++)}if(B.samples>0&&He(B)===!1){oe.__webglMultisampledFramebuffer=s.createFramebuffer(),oe.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,oe.__webglMultisampledFramebuffer);for(let Ne=0;Ne<we.length;Ne++){const Ze=we[Ne];oe.__webglColorRenderbuffer[Ne]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,oe.__webglColorRenderbuffer[Ne]);const et=c.convert(Ze.format,Ze.colorSpace),Ce=c.convert(Ze.type),Le=O(Ze.internalFormat,et,Ce,Ze.colorSpace,B.isXRRenderTarget===!0),nt=yt(B);s.renderbufferStorageMultisample(s.RENDERBUFFER,nt,Le,B.width,B.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ne,s.RENDERBUFFER,oe.__webglColorRenderbuffer[Ne])}s.bindRenderbuffer(s.RENDERBUFFER,null),B.depthBuffer&&(oe.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(oe.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){i.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),F(s.TEXTURE_CUBE_MAP,A);for(let Ne=0;Ne<6;Ne++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ze=0;Ze<A.mipmaps.length;Ze++)ye(oe.__webglFramebuffer[Ne][Ze],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,Ze);else ye(oe.__webglFramebuffer[Ne],B,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ne,0);x(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if($e){for(let Ne=0,Ze=we.length;Ne<Ze;Ne++){const et=we[Ne],Ce=a.get(et);let Le=s.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Le=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,Ce.__webglTexture),F(Le,et),ye(oe.__webglFramebuffer,B,et,s.COLOR_ATTACHMENT0+Ne,Le,0),x(et)&&_(Le)}i.unbindTexture()}else{let Ne=s.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Ne=B.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Se.__webglTexture),F(Ne,A),A.mipmaps&&A.mipmaps.length>0)for(let Ze=0;Ze<A.mipmaps.length;Ze++)ye(oe.__webglFramebuffer[Ze],B,A,s.COLOR_ATTACHMENT0,Ne,Ze);else ye(oe.__webglFramebuffer,B,A,s.COLOR_ATTACHMENT0,Ne,0);x(A)&&_(Ne),i.unbindTexture()}B.depthBuffer&&We(B)}function Ve(B){const A=B.textures;for(let oe=0,Se=A.length;oe<Se;oe++){const we=A[oe];if(x(we)){const ve=L(B),$e=a.get(we).__webglTexture;i.bindTexture(ve,$e),_(ve),i.unbindTexture()}}}const Ye=[],Xe=[];function Be(B){if(B.samples>0){if(He(B)===!1){const A=B.textures,oe=B.width,Se=B.height;let we=s.COLOR_BUFFER_BIT;const ve=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,$e=a.get(B),Ne=A.length>1;if(Ne)for(let et=0;et<A.length;et++)i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,$e.__webglMultisampledFramebuffer);const Ze=B.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglFramebuffer);for(let et=0;et<A.length;et++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(we|=s.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(we|=s.STENCIL_BUFFER_BIT)),Ne){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,$e.__webglColorRenderbuffer[et]);const Ce=a.get(A[et]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,oe,Se,0,0,oe,Se,we,s.NEAREST),p===!0&&(Ye.length=0,Xe.length=0,Ye.push(s.COLOR_ATTACHMENT0+et),B.depthBuffer&&B.resolveDepthBuffer===!1&&(Ye.push(ve),Xe.push(ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ye))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ne)for(let et=0;et<A.length;et++){i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.RENDERBUFFER,$e.__webglColorRenderbuffer[et]);const Ce=a.get(A[et]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,$e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+et,s.TEXTURE_2D,Ce,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,$e.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const A=B.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function yt(B){return Math.min(l.maxSamples,B.samples)}function He(B){const A=a.get(B);return B.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function rt(B){const A=f.render.frame;g.get(B)!==A&&(g.set(B,A),B.update())}function $t(B,A){const oe=B.colorSpace,Se=B.format,we=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||oe!==Gs&&oe!==Ja&&(Pt.getTransfer(oe)===jt?(Se!==wi||we!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",oe)),A}function Kt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=de,this.resetTextureUnits=ae,this.setTexture2D=re,this.setTexture2DArray=I,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=lt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Ve,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He}function rR(s,e){function i(a,l=Ja){let c;const f=Pt.getTransfer(l);if(a===Gi)return s.UNSIGNED_BYTE;if(a===dp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===hp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===z_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===B_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===P_)return s.BYTE;if(a===I_)return s.SHORT;if(a===Qo)return s.UNSIGNED_SHORT;if(a===fp)return s.INT;if(a===Pr)return s.UNSIGNED_INT;if(a===ma)return s.FLOAT;if(a===sl)return s.HALF_FLOAT;if(a===F_)return s.ALPHA;if(a===H_)return s.RGB;if(a===wi)return s.RGBA;if(a===$o)return s.DEPTH_COMPONENT;if(a===el)return s.DEPTH_STENCIL;if(a===G_)return s.RED;if(a===pp)return s.RED_INTEGER;if(a===V_)return s.RG;if(a===mp)return s.RG_INTEGER;if(a===gp)return s.RGBA_INTEGER;if(a===Kc||a===Qc||a===Jc||a===$c)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Kc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Kc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Qc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Jc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wh||a===Rh||a===Ch||a===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Nh||a===Uh||a===Lh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Nh||a===Uh)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Lh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Oh||a===Ph||a===Ih||a===zh||a===Bh||a===Fh||a===Hh||a===Gh||a===Vh||a===kh||a===Wh||a===Xh||a===jh||a===qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Oh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ph)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ih)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Vh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===kh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Wh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===qh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Yh||a===Zh||a===Kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Yh)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qh||a===Jh||a===$h||a===ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qh)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===$h)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Jo?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const sR=`
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

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new rx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new nr({vertexShader:sR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oi(new hu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends Xs{constructor(e,i){super();const a=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,y=null,E=null,b=null;const T=typeof XRWebGLBinding<"u",x=new lR,_={},L=i.getContextAttributes();let O=null,U=null;const V=[],k=[],z=new It;let Z=null;const D=new ri;D.viewport=new rn;const N=new ri;N.viewport=new rn;const j=[D,N],ae=new Db;let de=null,_e=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=V[X];return $===void 0&&($=new eh,V[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=V[X];return $===void 0&&($=new eh,V[X]=$),$.getGripSpace()},this.getHand=function(X){let $=V[X];return $===void 0&&($=new eh,V[X]=$),$.getHandSpace()};function re(X){const $=k.indexOf(X.inputSource);if($===-1)return;const ye=V[$];ye!==void 0&&(ye.update(X.inputSource,X.frame,m||f),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){l.removeEventListener("select",re),l.removeEventListener("selectstart",re),l.removeEventListener("selectend",re),l.removeEventListener("squeeze",re),l.removeEventListener("squeezestart",re),l.removeEventListener("squeezeend",re),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",K);for(let X=0;X<V.length;X++){const $=k[X];$!==null&&(k[X]=null,V[X].disconnect($))}de=null,_e=null,x.reset();for(const X in _)delete _[X];e.setRenderTarget(O),E=null,y=null,v=null,l=null,U=null,se.stop(),a.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){d=X,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return y!==null?y:E},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",re),l.addEventListener("selectstart",re),l.addEventListener("selectend",re),l.addEventListener("squeeze",re),l.addEventListener("squeezestart",re),l.addEventListener("squeezeend",re),l.addEventListener("end",I),l.addEventListener("inputsourceschange",K),L.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ae=null,Ue=null;L.depth&&(Ue=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=L.stencil?el:$o,Ae=L.stencil?Jo:Pr);const We={colorFormat:i.RGBA8,depthFormat:Ue,scaleFactor:c};v=this.getBinding(),y=v.createProjectionLayer(We),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),U=new Ir(y.textureWidth,y.textureHeight,{format:wi,type:Gi,depthTexture:new ax(y.textureWidth,y.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ye={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),U=new Ir(E.framebufferWidth,E.framebufferHeight,{format:wi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),se.setContext(l),se.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(X){for(let $=0;$<X.removed.length;$++){const ye=X.removed[$],Ae=k.indexOf(ye);Ae>=0&&(k[Ae]=null,V[Ae].disconnect(ye))}for(let $=0;$<X.added.length;$++){const ye=X.added[$];let Ae=k.indexOf(ye);if(Ae===-1){for(let We=0;We<V.length;We++)if(We>=k.length){k.push(ye),Ae=We;break}else if(k[We]===null){k[We]=ye,Ae=We;break}if(Ae===-1)break}const Ue=V[Ae];Ue&&Ue.connect(ye)}}const Q=new pe,G=new pe;function R(X,$,ye){Q.setFromMatrixPosition($.matrixWorld),G.setFromMatrixPosition(ye.matrixWorld);const Ae=Q.distanceTo(G),Ue=$.projectionMatrix.elements,We=ye.projectionMatrix.elements,lt=Ue[14]/(Ue[10]-1),H=Ue[14]/(Ue[10]+1),Ve=(Ue[9]+1)/Ue[5],Ye=(Ue[9]-1)/Ue[5],Xe=(Ue[8]-1)/Ue[0],Be=(We[8]+1)/We[0],yt=lt*Xe,He=lt*Be,rt=Ae/(-Xe+Be),$t=rt*-Xe;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($t),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ue[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Kt=lt+rt,B=H+rt,A=yt-$t,oe=He+(Ae-$t),Se=Ve*H/B*Kt,we=Ye*H/B*Kt;X.projectionMatrix.makePerspective(A,oe,Se,we,Kt,B),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function M(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let $=X.near,ye=X.far;x.texture!==null&&(x.depthNear>0&&($=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),ae.near=N.near=D.near=$,ae.far=N.far=D.far=ye,(de!==ae.near||_e!==ae.far)&&(l.updateRenderState({depthNear:ae.near,depthFar:ae.far}),de=ae.near,_e=ae.far),ae.layers.mask=X.layers.mask|6,D.layers.mask=ae.layers.mask&3,N.layers.mask=ae.layers.mask&5;const Ae=X.parent,Ue=ae.cameras;M(ae,Ae);for(let We=0;We<Ue.length;We++)M(Ue[We],Ae);Ue.length===2?R(ae,D,N):ae.projectionMatrix.copy(D.projectionMatrix),F(X,ae,Ae)};function F(X,$,ye){ye===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=tp*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return ae},this.getFoveation=function(){if(!(y===null&&E===null))return p},this.setFoveation=function(X){p=X,y!==null&&(y.fixedFoveation=X),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ae)},this.getCameraTexture=function(X){return _[X]};let ee=null;function ue(X,$){if(g=$.getViewerPose(m||f),b=$,g!==null){const ye=g.views;E!==null&&(e.setRenderTargetFramebuffer(U,E.framebuffer),e.setRenderTarget(U));let Ae=!1;ye.length!==ae.cameras.length&&(ae.cameras.length=0,Ae=!0);for(let H=0;H<ye.length;H++){const Ve=ye[H];let Ye=null;if(E!==null)Ye=E.getViewport(Ve);else{const Be=v.getViewSubImage(y,Ve);Ye=Be.viewport,H===0&&(e.setRenderTargetTextures(U,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(U))}let Xe=j[H];Xe===void 0&&(Xe=new ri,Xe.layers.enable(H),Xe.viewport=new rn,j[H]=Xe),Xe.matrix.fromArray(Ve.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ve.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(Ye.x,Ye.y,Ye.width,Ye.height),H===0&&(ae.matrix.copy(Xe.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale)),Ae===!0&&ae.cameras.push(Xe)}const Ue=l.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const H=v.getDepthInformation(ye[0]);H&&H.isValid&&H.texture&&x.init(H,l.renderState)}if(Ue&&Ue.includes("camera-access")&&T){e.state.unbindTexture(),v=a.getBinding();for(let H=0;H<ye.length;H++){const Ve=ye[H].camera;if(Ve){let Ye=_[Ve];Ye||(Ye=new rx,_[Ve]=Ye);const Xe=v.getCameraImage(Ve);Ye.sourceTexture=Xe}}}}for(let ye=0;ye<V.length;ye++){const Ae=k[ye],Ue=V[ye];Ae!==null&&Ue!==void 0&&Ue.update(Ae,$,m||f)}ee&&ee(X,$),$.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:$}),b=null}const se=new ux;se.setAnimationLoop(ue),this.setAnimationLoop=function(X){ee=X},this.dispose=function(){}}}const wr=new Vi,uR=new sn;function fR(s,e){function i(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function a(x,_){_.color.getRGB(x.fogColor.value,$_(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function l(x,_,L,O,U){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(x,_):_.isMeshToonMaterial?(c(x,_),v(x,_)):_.isMeshPhongMaterial?(c(x,_),g(x,_)):_.isMeshStandardMaterial?(c(x,_),y(x,_),_.isMeshPhysicalMaterial&&E(x,_,U)):_.isMeshMatcapMaterial?(c(x,_),b(x,_)):_.isMeshDepthMaterial?c(x,_):_.isMeshDistanceMaterial?(c(x,_),T(x,_)):_.isMeshNormalMaterial?c(x,_):_.isLineBasicMaterial?(f(x,_),_.isLineDashedMaterial&&d(x,_)):_.isPointsMaterial?p(x,_,L,O):_.isSpriteMaterial?m(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,i(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===jn&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,i(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===jn&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,i(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,i(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const L=e.get(_),O=L.envMap,U=L.envMapRotation;O&&(x.envMap.value=O,wr.copy(U),wr.x*=-1,wr.y*=-1,wr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),x.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(wr)),x.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,x.aoMapTransform))}function f(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform))}function d(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function p(x,_,L,O){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*L,x.scale.value=O*.5,_.map&&(x.map.value=_.map,i(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function m(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,i(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,i(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function g(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function v(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function y(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function E(x,_,L){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,_){_.matcap&&(x.matcap.value=_.matcap)}function T(x,_){const L=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function dR(s,e,i,a){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(L,O){const U=O.program;a.uniformBlockBinding(L,U)}function m(L,O){let U=l[L.id];U===void 0&&(b(L),U=g(L),l[L.id]=U,L.addEventListener("dispose",x));const V=O.program;a.updateUBOMapping(L,V);const k=e.render.frame;c[L.id]!==k&&(y(L),c[L.id]=k)}function g(L){const O=v();L.__bindingPointIndex=O;const U=s.createBuffer(),V=L.__size,k=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,V,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,U),U}function v(){for(let L=0;L<d;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const O=l[L.id],U=L.uniforms,V=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let k=0,z=U.length;k<z;k++){const Z=Array.isArray(U[k])?U[k]:[U[k]];for(let D=0,N=Z.length;D<N;D++){const j=Z[D];if(E(j,k,D,V)===!0){const ae=j.__offset,de=Array.isArray(j.value)?j.value:[j.value];let _e=0;for(let re=0;re<de.length;re++){const I=de[re],K=T(I);typeof I=="number"||typeof I=="boolean"?(j.__data[0]=I,s.bufferSubData(s.UNIFORM_BUFFER,ae+_e,j.__data)):I.isMatrix3?(j.__data[0]=I.elements[0],j.__data[1]=I.elements[1],j.__data[2]=I.elements[2],j.__data[3]=0,j.__data[4]=I.elements[3],j.__data[5]=I.elements[4],j.__data[6]=I.elements[5],j.__data[7]=0,j.__data[8]=I.elements[6],j.__data[9]=I.elements[7],j.__data[10]=I.elements[8],j.__data[11]=0):(I.toArray(j.__data,_e),_e+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,ae,j.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(L,O,U,V){const k=L.value,z=O+"_"+U;if(V[z]===void 0)return typeof k=="number"||typeof k=="boolean"?V[z]=k:V[z]=k.clone(),!0;{const Z=V[z];if(typeof k=="number"||typeof k=="boolean"){if(Z!==k)return V[z]=k,!0}else if(Z.equals(k)===!1)return Z.copy(k),!0}return!1}function b(L){const O=L.uniforms;let U=0;const V=16;for(let z=0,Z=O.length;z<Z;z++){const D=Array.isArray(O[z])?O[z]:[O[z]];for(let N=0,j=D.length;N<j;N++){const ae=D[N],de=Array.isArray(ae.value)?ae.value:[ae.value];for(let _e=0,re=de.length;_e<re;_e++){const I=de[_e],K=T(I),Q=U%V,G=Q%K.boundary,R=Q+G;U+=G,R!==0&&V-R<K.storage&&(U+=V-R),ae.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=U,U+=K.storage}}}const k=U%V;return k>0&&(U+=V-k),L.__size=U,L.__cache={},this}function T(L){const O={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(O.boundary=4,O.storage=4):L.isVector2?(O.boundary=8,O.storage=8):L.isVector3||L.isColor?(O.boundary=16,O.storage=12):L.isVector4?(O.boundary=16,O.storage=16):L.isMatrix3?(O.boundary=48,O.storage=48):L.isMatrix4?(O.boundary=64,O.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),O}function x(L){const O=L.target;O.removeEventListener("dispose",x);const U=f.indexOf(O.__bindingPointIndex);f.splice(U,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class mx{constructor(e={}){const{canvas:i=KE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const b=new Uint32Array(4),T=new Int32Array(4);let x=null,_=null;const L=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let V=!1;this._outputColorSpace=xi;let k=0,z=0,Z=null,D=-1,N=null;const j=new rn,ae=new rn;let de=null;const _e=new Dt(0);let re=0,I=i.width,K=i.height,Q=1,G=null,R=null;const M=new rn(0,0,I,K),F=new rn(0,0,I,K);let ee=!1;const ue=new _p;let se=!1,X=!1;const $=new sn,ye=new pe,Ae=new rn,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function lt(){return Z===null?Q:1}let H=a;function Ve(C,te){return i.getContext(C,te)}try{const C={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${up}`),i.addEventListener("webglcontextlost",Oe,!1),i.addEventListener("webglcontextrestored",ke,!1),i.addEventListener("webglcontextcreationerror",Re,!1),H===null){const te="webgl2";if(H=Ve(te,C),H===null)throw Ve(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Ye,Xe,Be,yt,He,rt,$t,Kt,B,A,oe,Se,we,ve,$e,Ne,Ze,et,Ce,Le,nt,Ge,Pe,pt;function J(){Ye=new EA(H),Ye.init(),Ge=new rR(H,Ye),Xe=new gA(H,Ye,e,Ge),Be=new iR(H,Ye),Xe.reversedDepthBuffer&&y&&Be.buffers.depth.setReversed(!0),yt=new AA(H),He=new Ww,rt=new aR(H,Ye,Be,He,Xe,Ge,yt),$t=new _A(U),Kt=new MA(U),B=new Ub(H),Pe=new pA(H,B),A=new bA(H,B,yt,Pe),oe=new RA(H,A,B,yt),Ce=new wA(H,Xe,rt),Ne=new vA(He),Se=new kw(U,$t,Kt,Ye,Xe,Pe,Ne),we=new fR(U,He),ve=new jw,$e=new Jw(Ye),et=new hA(U,$t,Kt,Be,oe,E,p),Ze=new tR(U,oe,Xe),pt=new dR(H,yt,Xe,Be),Le=new mA(H,Ye,yt),nt=new TA(H,Ye,yt),yt.programs=Se.programs,U.capabilities=Xe,U.extensions=Ye,U.properties=He,U.renderLists=ve,U.shadowMap=Ze,U.state=Be,U.info=yt}J();const De=new cR(U,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(C){C!==void 0&&(Q=C,this.setSize(I,K,!1))},this.getSize=function(C){return C.set(I,K)},this.setSize=function(C,te,he=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,K=te,i.width=Math.floor(C*Q),i.height=Math.floor(te*Q),he===!0&&(i.style.width=C+"px",i.style.height=te+"px"),this.setViewport(0,0,C,te)},this.getDrawingBufferSize=function(C){return C.set(I*Q,K*Q).floor()},this.setDrawingBufferSize=function(C,te,he){I=C,K=te,Q=he,i.width=Math.floor(C*he),i.height=Math.floor(te*he),this.setViewport(0,0,C,te)},this.getCurrentViewport=function(C){return C.copy(j)},this.getViewport=function(C){return C.copy(M)},this.setViewport=function(C,te,he,me){C.isVector4?M.set(C.x,C.y,C.z,C.w):M.set(C,te,he,me),Be.viewport(j.copy(M).multiplyScalar(Q).round())},this.getScissor=function(C){return C.copy(F)},this.setScissor=function(C,te,he,me){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,te,he,me),Be.scissor(ae.copy(F).multiplyScalar(Q).round())},this.getScissorTest=function(){return ee},this.setScissorTest=function(C){Be.setScissorTest(ee=C)},this.setOpaqueSort=function(C){G=C},this.setTransparentSort=function(C){R=C},this.getClearColor=function(C){return C.copy(et.getClearColor())},this.setClearColor=function(){et.setClearColor(...arguments)},this.getClearAlpha=function(){return et.getClearAlpha()},this.setClearAlpha=function(){et.setClearAlpha(...arguments)},this.clear=function(C=!0,te=!0,he=!0){let me=0;if(C){let ie=!1;if(Z!==null){const Te=Z.texture.format;ie=Te===gp||Te===mp||Te===pp}if(ie){const Te=Z.texture.type,Ie=Te===Gi||Te===Pr||Te===Qo||Te===Jo||Te===dp||Te===hp,Ke=et.getClearColor(),Fe=et.getClearAlpha(),it=Ke.r,ct=Ke.g,at=Ke.b;Ie?(b[0]=it,b[1]=ct,b[2]=at,b[3]=Fe,H.clearBufferuiv(H.COLOR,0,b)):(T[0]=it,T[1]=ct,T[2]=at,T[3]=Fe,H.clearBufferiv(H.COLOR,0,T))}else me|=H.COLOR_BUFFER_BIT}te&&(me|=H.DEPTH_BUFFER_BIT),he&&(me|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(me)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",ke,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),et.dispose(),ve.dispose(),$e.dispose(),He.dispose(),$t.dispose(),Kt.dispose(),oe.dispose(),Pe.dispose(),pt.dispose(),Se.dispose(),De.dispose(),De.removeEventListener("sessionstart",li),De.removeEventListener("sessionend",Ys),Di.stop()};function Oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const C=yt.autoReset,te=Ze.enabled,he=Ze.autoUpdate,me=Ze.needsUpdate,ie=Ze.type;J(),yt.autoReset=C,Ze.enabled=te,Ze.autoUpdate=he,Ze.needsUpdate=me,Ze.type=ie}function Re(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const te=C.target;te.removeEventListener("dispose",be),je(te)}function je(C){dt(C),He.remove(C)}function dt(C){const te=He.get(C).programs;te!==void 0&&(te.forEach(function(he){Se.releaseProgram(he)}),C.isShaderMaterial&&Se.releaseShaderCache(C))}this.renderBufferDirect=function(C,te,he,me,ie,Te){te===null&&(te=Ue);const Ie=ie.isMesh&&ie.matrixWorld.determinant()<0,Ke=Sa(C,te,he,me,ie);Be.setMaterial(me,Ie);let Fe=he.index,it=1;if(me.wireframe===!0){if(Fe=A.getWireframeAttribute(he),Fe===void 0)return;it=2}const ct=he.drawRange,at=he.attributes.position;let xt=ct.start*it,Bt=(ct.start+ct.count)*it;Te!==null&&(xt=Math.max(xt,Te.start*it),Bt=Math.min(Bt,(Te.start+Te.count)*it)),Fe!==null?(xt=Math.max(xt,0),Bt=Math.min(Bt,Fe.count)):at!=null&&(xt=Math.max(xt,0),Bt=Math.min(Bt,at.count));const qt=Bt-xt;if(qt<0||qt===1/0)return;Pe.setup(ie,me,Ke,he,Fe);let Ft,St=Le;if(Fe!==null&&(Ft=B.get(Fe),St=nt,St.setIndex(Ft)),ie.isMesh)me.wireframe===!0?(Be.setLineWidth(me.wireframeLinewidth*lt()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(ie.isLine){let Qe=me.linewidth;Qe===void 0&&(Qe=1),Be.setLineWidth(Qe*lt()),ie.isLineSegments?St.setMode(H.LINES):ie.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else ie.isPoints?St.setMode(H.POINTS):ie.isSprite&&St.setMode(H.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)tl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(Ye.get("WEBGL_multi_draw"))St.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Qe=ie._multiDrawStarts,Zt=ie._multiDrawCounts,Ut=ie._multiDrawCount,bn=Fe?B.get(Fe).bytesPerElement:1,Wi=He.get(me).currentProgram.getUniforms();for(let yn=0;yn<Ut;yn++)Wi.setValue(H,"_gl_DrawID",yn),St.render(Qe[yn]/bn,Zt[yn])}else if(ie.isInstancedMesh)St.renderInstances(xt,qt,ie.count);else if(he.isInstancedBufferGeometry){const Qe=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Zt=Math.min(he.instanceCount,Qe);St.renderInstances(xt,qt,Zt)}else St.render(xt,qt)};function Ht(C,te,he){C.transparent===!0&&C.side===pa&&C.forceSinglePass===!1?(C.side=jn,C.needsUpdate=!0,Zn(C,te,he),C.side=tr,C.needsUpdate=!0,Zn(C,te,he),C.side=pa):Zn(C,te,he)}this.compile=function(C,te,he=null){he===null&&(he=C),_=$e.get(he),_.init(te),O.push(_),he.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),C!==he&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),_.setupLights();const me=new Set;return C.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Te=ie.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const Ke=Te[Ie];Ht(Ke,he,ie),me.add(Ke)}else Ht(Te,he,ie),me.add(Te)}),_=O.pop(),me},this.compileAsync=function(C,te,he=null){const me=this.compile(C,te,he);return new Promise(ie=>{function Te(){if(me.forEach(function(Ie){He.get(Ie).currentProgram.isReady()&&me.delete(Ie)}),me.size===0){ie(C);return}setTimeout(Te,10)}Ye.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Nt=null;function On(C){Nt&&Nt(C)}function li(){Di.stop()}function Ys(){Di.start()}const Di=new ux;Di.setAnimationLoop(On),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(C){Nt=C,De.setAnimationLoop(C),C===null?Di.stop():Di.start()},De.addEventListener("sessionstart",li),De.addEventListener("sessionend",Ys),this.render=function(C,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(te),te=De.getCamera()),C.isScene===!0&&C.onBeforeRender(U,C,te,Z),_=$e.get(C,O.length),_.init(te),O.push(_),$.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),ue.setFromProjectionMatrix($,Bi,te.reversedDepth),X=this.localClippingEnabled,se=Ne.init(this.clippingPlanes,X),x=ve.get(C,L.length),x.init(),L.push(x),De.enabled===!0&&De.isPresenting===!0){const Te=U.xr.getDepthSensingMesh();Te!==null&&zr(Te,te,-1/0,U.sortObjects)}zr(C,te,0,U.sortObjects),x.finish(),U.sortObjects===!0&&x.sort(G,R),We=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,We&&et.addToRenderList(x,C),this.info.render.frame++,se===!0&&Ne.beginShadows();const he=_.state.shadowsArray;Ze.render(he,C,te),se===!0&&Ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const me=x.opaque,ie=x.transmissive;if(_.setupLights(),te.isArrayCamera){const Te=te.cameras;if(ie.length>0)for(let Ie=0,Ke=Te.length;Ie<Ke;Ie++){const Fe=Te[Ie];Fr(me,ie,C,Fe)}We&&et.render(C);for(let Ie=0,Ke=Te.length;Ie<Ke;Ie++){const Fe=Te[Ie];Br(x,C,Fe,Fe.viewport)}}else ie.length>0&&Fr(me,ie,C,te),We&&et.render(C),Br(x,C,te);Z!==null&&z===0&&(rt.updateMultisampleRenderTarget(Z),rt.updateRenderTargetMipmap(Z)),C.isScene===!0&&C.onAfterRender(U,C,te),Pe.resetDefaultState(),D=-1,N=null,O.pop(),O.length>0?(_=O[O.length-1],se===!0&&Ne.setGlobalState(U.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?x=L[L.length-1]:x=null};function zr(C,te,he,me){if(C.visible===!1)return;if(C.layers.test(te.layers)){if(C.isGroup)he=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(te);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ue.intersectsSprite(C)){me&&Ae.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Ie=oe.update(C),Ke=C.material;Ke.visible&&x.push(C,Ie,Ke,he,Ae.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ue.intersectsObject(C))){const Ie=oe.update(C),Ke=C.material;if(me&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ae.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Ae.copy(Ie.boundingSphere.center)),Ae.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(Ke)){const Fe=Ie.groups;for(let it=0,ct=Fe.length;it<ct;it++){const at=Fe[it],xt=Ke[at.materialIndex];xt&&xt.visible&&x.push(C,Ie,xt,he,Ae.z,at)}}else Ke.visible&&x.push(C,Ie,Ke,he,Ae.z,null)}}const Te=C.children;for(let Ie=0,Ke=Te.length;Ie<Ke;Ie++)zr(Te[Ie],te,he,me)}function Br(C,te,he,me){const ie=C.opaque,Te=C.transmissive,Ie=C.transparent;_.setupLightsView(he),se===!0&&Ne.setGlobalState(U.clippingPlanes,he),me&&Be.viewport(j.copy(me)),ie.length>0&&ir(ie,te,he),Te.length>0&&ir(Te,te,he),Ie.length>0&&ir(Ie,te,he),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Fr(C,te,he,me){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[me.id]===void 0&&(_.state.transmissionRenderTarget[me.id]=new Ir(1,1,{generateMipmaps:!0,type:Ye.has("EXT_color_buffer_half_float")||Ye.has("EXT_color_buffer_float")?sl:Gi,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[me.id],Ie=me.viewport||j;Te.setSize(Ie.z*U.transmissionResolutionScale,Ie.w*U.transmissionResolutionScale);const Ke=U.getRenderTarget(),Fe=U.getActiveCubeFace(),it=U.getActiveMipmapLevel();U.setRenderTarget(Te),U.getClearColor(_e),re=U.getClearAlpha(),re<1&&U.setClearColor(16777215,.5),U.clear(),We&&et.render(he);const ct=U.toneMapping;U.toneMapping=er;const at=me.viewport;if(me.viewport!==void 0&&(me.viewport=void 0),_.setupLightsView(me),se===!0&&Ne.setGlobalState(U.clippingPlanes,me),ir(C,he,me),rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te),Ye.has("WEBGL_multisampled_render_to_texture")===!1){let xt=!1;for(let Bt=0,qt=te.length;Bt<qt;Bt++){const Ft=te[Bt],St=Ft.object,Qe=Ft.geometry,Zt=Ft.material,Ut=Ft.group;if(Zt.side===pa&&St.layers.test(me.layers)){const bn=Zt.side;Zt.side=jn,Zt.needsUpdate=!0,Zs(St,he,me,Qe,Zt,Ut),Zt.side=bn,Zt.needsUpdate=!0,xt=!0}}xt===!0&&(rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te))}U.setRenderTarget(Ke,Fe,it),U.setClearColor(_e,re),at!==void 0&&(me.viewport=at),U.toneMapping=ct}function ir(C,te,he){const me=te.isScene===!0?te.overrideMaterial:null;for(let ie=0,Te=C.length;ie<Te;ie++){const Ie=C[ie],Ke=Ie.object,Fe=Ie.geometry,it=Ie.group;let ct=Ie.material;ct.allowOverride===!0&&me!==null&&(ct=me),Ke.layers.test(he.layers)&&Zs(Ke,te,he,Fe,ct,it)}}function Zs(C,te,he,me,ie,Te){C.onBeforeRender(U,te,he,me,ie,Te),C.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(U,te,he,me,C,Te),ie.transparent===!0&&ie.side===pa&&ie.forceSinglePass===!1?(ie.side=jn,ie.needsUpdate=!0,U.renderBufferDirect(he,te,me,ie,C,Te),ie.side=tr,ie.needsUpdate=!0,U.renderBufferDirect(he,te,me,ie,C,Te),ie.side=pa):U.renderBufferDirect(he,te,me,ie,C,Te),C.onAfterRender(U,te,he,me,ie,Te)}function Zn(C,te,he){te.isScene!==!0&&(te=Ue);const me=He.get(C),ie=_.state.lights,Te=_.state.shadowsArray,Ie=ie.state.version,Ke=Se.getParameters(C,ie.state,Te,te,he),Fe=Se.getProgramCacheKey(Ke);let it=me.programs;me.environment=C.isMeshStandardMaterial?te.environment:null,me.fog=te.fog,me.envMap=(C.isMeshStandardMaterial?Kt:$t).get(C.envMap||me.environment),me.envMapRotation=me.environment!==null&&C.envMap===null?te.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",be),it=new Map,me.programs=it);let ct=it.get(Fe);if(ct!==void 0){if(me.currentProgram===ct&&me.lightsStateVersion===Ie)return En(C,Ke),ct}else Ke.uniforms=Se.getUniforms(C),C.onBeforeCompile(Ke,U),ct=Se.acquireProgram(Ke,Fe),it.set(Fe,ct),me.uniforms=Ke.uniforms;const at=me.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(at.clippingPlanes=Ne.uniform),En(C,Ke),me.needsLights=gu(C),me.lightsStateVersion=Ie,me.needsLights&&(at.ambientLightColor.value=ie.state.ambient,at.lightProbe.value=ie.state.probe,at.directionalLights.value=ie.state.directional,at.directionalLightShadows.value=ie.state.directionalShadow,at.spotLights.value=ie.state.spot,at.spotLightShadows.value=ie.state.spotShadow,at.rectAreaLights.value=ie.state.rectArea,at.ltc_1.value=ie.state.rectAreaLTC1,at.ltc_2.value=ie.state.rectAreaLTC2,at.pointLights.value=ie.state.point,at.pointLightShadows.value=ie.state.pointShadow,at.hemisphereLights.value=ie.state.hemi,at.directionalShadowMap.value=ie.state.directionalShadowMap,at.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,at.spotShadowMap.value=ie.state.spotShadowMap,at.spotLightMatrix.value=ie.state.spotLightMatrix,at.spotLightMap.value=ie.state.spotLightMap,at.pointShadowMap.value=ie.state.pointShadowMap,at.pointShadowMatrix.value=ie.state.pointShadowMatrix),me.currentProgram=ct,me.uniformsList=null,ct}function un(C){if(C.uniformsList===null){const te=C.currentProgram.getUniforms();C.uniformsList=eu.seqWithValue(te.seq,C.uniforms)}return C.uniformsList}function En(C,te){const he=He.get(C);he.outputColorSpace=te.outputColorSpace,he.batching=te.batching,he.batchingColor=te.batchingColor,he.instancing=te.instancing,he.instancingColor=te.instancingColor,he.instancingMorph=te.instancingMorph,he.skinning=te.skinning,he.morphTargets=te.morphTargets,he.morphNormals=te.morphNormals,he.morphColors=te.morphColors,he.morphTargetsCount=te.morphTargetsCount,he.numClippingPlanes=te.numClippingPlanes,he.numIntersection=te.numClipIntersection,he.vertexAlphas=te.vertexAlphas,he.vertexTangents=te.vertexTangents,he.toneMapping=te.toneMapping}function Sa(C,te,he,me,ie){te.isScene!==!0&&(te=Ue),rt.resetTextureUnits();const Te=te.fog,Ie=me.isMeshStandardMaterial?te.environment:null,Ke=Z===null?U.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Gs,Fe=(me.isMeshStandardMaterial?Kt:$t).get(me.envMap||Ie),it=me.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ct=!!he.attributes.tangent&&(!!me.normalMap||me.anisotropy>0),at=!!he.morphAttributes.position,xt=!!he.morphAttributes.normal,Bt=!!he.morphAttributes.color;let qt=er;me.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(qt=U.toneMapping);const Ft=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,St=Ft!==void 0?Ft.length:0,Qe=He.get(me),Zt=_.state.lights;if(se===!0&&(X===!0||C!==N)){const gn=C===N&&me.id===D;Ne.setState(me,C,gn)}let Ut=!1;me.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Zt.state.version||Qe.outputColorSpace!==Ke||ie.isBatchedMesh&&Qe.batching===!1||!ie.isBatchedMesh&&Qe.batching===!0||ie.isBatchedMesh&&Qe.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Qe.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Qe.instancing===!1||!ie.isInstancedMesh&&Qe.instancing===!0||ie.isSkinnedMesh&&Qe.skinning===!1||!ie.isSkinnedMesh&&Qe.skinning===!0||ie.isInstancedMesh&&Qe.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Qe.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Qe.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Qe.instancingMorph===!1&&ie.morphTexture!==null||Qe.envMap!==Fe||me.fog===!0&&Qe.fog!==Te||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Ne.numPlanes||Qe.numIntersection!==Ne.numIntersection)||Qe.vertexAlphas!==it||Qe.vertexTangents!==ct||Qe.morphTargets!==at||Qe.morphNormals!==xt||Qe.morphColors!==Bt||Qe.toneMapping!==qt||Qe.morphTargetsCount!==St)&&(Ut=!0):(Ut=!0,Qe.__version=me.version);let bn=Qe.currentProgram;Ut===!0&&(bn=Zn(me,te,ie));let Wi=!1,yn=!1,rr=!1;const bt=bn.getUniforms(),Dn=Qe.uniforms;if(Be.useProgram(bn.program)&&(Wi=!0,yn=!0,rr=!0),me.id!==D&&(D=me.id,yn=!0),Wi||N!==C){Be.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),bt.setValue(H,"projectionMatrix",C.projectionMatrix),bt.setValue(H,"viewMatrix",C.matrixWorldInverse);const on=bt.map.cameraPosition;on!==void 0&&on.setValue(H,ye.setFromMatrixPosition(C.matrixWorld)),Xe.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(me.isMeshPhongMaterial||me.isMeshToonMaterial||me.isMeshLambertMaterial||me.isMeshBasicMaterial||me.isMeshStandardMaterial||me.isShaderMaterial)&&bt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),N!==C&&(N=C,yn=!0,rr=!0)}if(ie.isSkinnedMesh){bt.setOptional(H,ie,"bindMatrix"),bt.setOptional(H,ie,"bindMatrixInverse");const gn=ie.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),bt.setValue(H,"boneTexture",gn.boneTexture,rt))}ie.isBatchedMesh&&(bt.setOptional(H,ie,"batchingTexture"),bt.setValue(H,"batchingTexture",ie._matricesTexture,rt),bt.setOptional(H,ie,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",ie._indirectTexture,rt),bt.setOptional(H,ie,"batchingColorTexture"),ie._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",ie._colorsTexture,rt));const Pn=he.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ce.update(ie,he,bn),(yn||Qe.receiveShadow!==ie.receiveShadow)&&(Qe.receiveShadow=ie.receiveShadow,bt.setValue(H,"receiveShadow",ie.receiveShadow)),me.isMeshGouraudMaterial&&me.envMap!==null&&(Dn.envMap.value=Fe,Dn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),me.isMeshStandardMaterial&&me.envMap===null&&te.environment!==null&&(Dn.envMapIntensity.value=te.environmentIntensity),yn&&(bt.setValue(H,"toneMappingExposure",U.toneMappingExposure),Qe.needsLights&&Ks(Dn,rr),Te&&me.fog===!0&&we.refreshFogUniforms(Dn,Te),we.refreshMaterialUniforms(Dn,me,Q,K,_.state.transmissionRenderTarget[C.id]),eu.upload(H,un(Qe),Dn,rt)),me.isShaderMaterial&&me.uniformsNeedUpdate===!0&&(eu.upload(H,un(Qe),Dn,rt),me.uniformsNeedUpdate=!1),me.isSpriteMaterial&&bt.setValue(H,"center",ie.center),bt.setValue(H,"modelViewMatrix",ie.modelViewMatrix),bt.setValue(H,"normalMatrix",ie.normalMatrix),bt.setValue(H,"modelMatrix",ie.matrixWorld),me.isShaderMaterial||me.isRawShaderMaterial){const gn=me.uniformsGroups;for(let on=0,Hr=gn.length;on<Hr;on++){const Ni=gn[on];pt.update(Ni,bn),pt.bind(Ni,bn)}}return bn}function Ks(C,te){C.ambientLightColor.needsUpdate=te,C.lightProbe.needsUpdate=te,C.directionalLights.needsUpdate=te,C.directionalLightShadows.needsUpdate=te,C.pointLights.needsUpdate=te,C.pointLightShadows.needsUpdate=te,C.spotLights.needsUpdate=te,C.spotLightShadows.needsUpdate=te,C.rectAreaLights.needsUpdate=te,C.hemisphereLights.needsUpdate=te}function gu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,te,he){const me=He.get(C);me.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,me.__autoAllocateDepthBuffer===!1&&(me.__useRenderToTexture=!1),He.get(C.texture).__webglTexture=te,He.get(C.depthTexture).__webglTexture=me.__autoAllocateDepthBuffer?void 0:he,me.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,te){const he=He.get(C);he.__webglFramebuffer=te,he.__useDefaultFramebuffer=te===void 0};const vu=H.createFramebuffer();this.setRenderTarget=function(C,te=0,he=0){Z=C,k=te,z=he;let me=!0,ie=null,Te=!1,Ie=!1;if(C){const Fe=He.get(C);if(Fe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(H.FRAMEBUFFER,null),me=!1;else if(Fe.__webglFramebuffer===void 0)rt.setupRenderTarget(C);else if(Fe.__hasExternalTextures)rt.rebindTextures(C,He.get(C.texture).__webglTexture,He.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const at=C.depthTexture;if(Fe.__boundDepthTexture!==at){if(at!==null&&He.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(C)}}const it=C.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ie=!0);const ct=He.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ct[te])?ie=ct[te][he]:ie=ct[te],Te=!0):C.samples>0&&rt.useMultisampledRTT(C)===!1?ie=He.get(C).__webglMultisampledFramebuffer:Array.isArray(ct)?ie=ct[he]:ie=ct,j.copy(C.viewport),ae.copy(C.scissor),de=C.scissorTest}else j.copy(M).multiplyScalar(Q).floor(),ae.copy(F).multiplyScalar(Q).floor(),de=ee;if(he!==0&&(ie=vu),Be.bindFramebuffer(H.FRAMEBUFFER,ie)&&me&&Be.drawBuffers(C,ie),Be.viewport(j),Be.scissor(ae),Be.setScissorTest(de),Te){const Fe=He.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+te,Fe.__webglTexture,he)}else if(Ie){const Fe=te;for(let it=0;it<C.textures.length;it++){const ct=He.get(C.textures[it]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+it,ct.__webglTexture,he,Fe)}}else if(C!==null&&he!==0){const Fe=He.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,he)}D=-1},this.readRenderTargetPixels=function(C,te,he,me,ie,Te,Ie,Ke=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){Be.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const it=C.textures[Ke],ct=it.format,at=it.type;if(!Xe.textureFormatReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=C.width-me&&he>=0&&he<=C.height-ie&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ke),H.readPixels(te,he,me,ie,Ge.convert(ct),Ge.convert(at),Te))}finally{const it=Z!==null?He.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(H.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(C,te,he,me,ie,Te,Ie,Ke=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(te>=0&&te<=C.width-me&&he>=0&&he<=C.height-ie){Be.bindFramebuffer(H.FRAMEBUFFER,Fe);const it=C.textures[Ke],ct=it.format,at=it.type;if(!Xe.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const xt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ke),H.readPixels(te,he,me,ie,Ge.convert(ct),Ge.convert(at),0);const Bt=Z!==null?He.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(H.FRAMEBUFFER,Bt);const qt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await QE(H,qt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,xt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(xt),H.deleteSync(qt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,te=null,he=0){const me=Math.pow(2,-he),ie=Math.floor(C.image.width*me),Te=Math.floor(C.image.height*me),Ie=te!==null?te.x:0,Ke=te!==null?te.y:0;rt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,he,0,0,Ie,Ke,ie,Te),Be.unbindTexture()};const dl=H.createFramebuffer(),ar=H.createFramebuffer();this.copyTextureToTexture=function(C,te,he=null,me=null,ie=0,Te=null){Te===null&&(ie!==0?(tl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=ie,ie=0):Te=0);let Ie,Ke,Fe,it,ct,at,xt,Bt,qt;const Ft=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(he!==null)Ie=he.max.x-he.min.x,Ke=he.max.y-he.min.y,Fe=he.isBox3?he.max.z-he.min.z:1,it=he.min.x,ct=he.min.y,at=he.isBox3?he.min.z:0;else{const Pn=Math.pow(2,-ie);Ie=Math.floor(Ft.width*Pn),Ke=Math.floor(Ft.height*Pn),C.isDataArrayTexture?Fe=Ft.depth:C.isData3DTexture?Fe=Math.floor(Ft.depth*Pn):Fe=1,it=0,ct=0,at=0}me!==null?(xt=me.x,Bt=me.y,qt=me.z):(xt=0,Bt=0,qt=0);const St=Ge.convert(te.format),Qe=Ge.convert(te.type);let Zt;te.isData3DTexture?(rt.setTexture3D(te,0),Zt=H.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(rt.setTexture2DArray(te,0),Zt=H.TEXTURE_2D_ARRAY):(rt.setTexture2D(te,0),Zt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,te.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,te.unpackAlignment);const Ut=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Wi=H.getParameter(H.UNPACK_SKIP_PIXELS),yn=H.getParameter(H.UNPACK_SKIP_ROWS),rr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,it),H.pixelStorei(H.UNPACK_SKIP_ROWS,ct),H.pixelStorei(H.UNPACK_SKIP_IMAGES,at);const bt=C.isDataArrayTexture||C.isData3DTexture,Dn=te.isDataArrayTexture||te.isData3DTexture;if(C.isDepthTexture){const Pn=He.get(C),gn=He.get(te),on=He.get(Pn.__renderTarget),Hr=He.get(gn.__renderTarget);Be.bindFramebuffer(H.READ_FRAMEBUFFER,on.__webglFramebuffer),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ni=0;Ni<Fe;Ni++)bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(C).__webglTexture,ie,at+Ni),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(te).__webglTexture,Te,qt+Ni)),H.blitFramebuffer(it,ct,Ie,Ke,xt,Bt,Ie,Ke,H.DEPTH_BUFFER_BIT,H.NEAREST);Be.bindFramebuffer(H.READ_FRAMEBUFFER,null),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ie!==0||C.isRenderTargetTexture||He.has(C)){const Pn=He.get(C),gn=He.get(te);Be.bindFramebuffer(H.READ_FRAMEBUFFER,dl),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,ar);for(let on=0;on<Fe;on++)bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,ie,at+on):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,ie),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,Te,qt+on):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,Te),ie!==0?H.blitFramebuffer(it,ct,Ie,Ke,xt,Bt,Ie,Ke,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Zt,Te,xt,Bt,qt+on,it,ct,Ie,Ke):H.copyTexSubImage2D(Zt,Te,xt,Bt,it,ct,Ie,Ke);Be.bindFramebuffer(H.READ_FRAMEBUFFER,null),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Zt,Te,xt,Bt,qt,Ie,Ke,Fe,St,Qe,Ft.data):te.isCompressedArrayTexture?H.compressedTexSubImage3D(Zt,Te,xt,Bt,qt,Ie,Ke,Fe,St,Ft.data):H.texSubImage3D(Zt,Te,xt,Bt,qt,Ie,Ke,Fe,St,Qe,Ft):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,xt,Bt,Ie,Ke,St,Qe,Ft.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,xt,Bt,Ft.width,Ft.height,St,Ft.data):H.texSubImage2D(H.TEXTURE_2D,Te,xt,Bt,Ie,Ke,St,Qe,Ft);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Wi),H.pixelStorei(H.UNPACK_SKIP_ROWS,yn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,rr),Te===0&&te.generateMipmaps&&H.generateMipmap(Zt),Be.unbindTexture()},this.initRenderTarget=function(C){He.get(C).__webglFramebuffer===void 0&&rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){k=0,z=0,Z=null,Be.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}class Ps{static instance;clickSound=null;enterSound=null;isInitialized=!1;static getInstance(){return Ps.instance||(Ps.instance=new Ps),Ps.instance}initAudio(){if(!this.isInitialized)try{this.clickSound=new Audio("/assets/sounds/点击.wav"),this.clickSound.preload="auto",this.clickSound.volume=.7,this.enterSound=new Audio("/assets/sounds/完美(1).mp3"),this.enterSound.preload="auto",this.enterSound.volume=.8,this.isInitialized=!0,console.log("🎵 音效管理器初始化完成")}catch(e){console.error("❌ 音效初始化失败:",e)}}playClickSound(){this.initAudio(),this.clickSound&&(this.clickSound.currentTime=0,this.clickSound.play().catch(e=>console.log("点击音效播放失败:",e)))}playEnterSound(){this.initAudio(),this.enterSound&&(this.enterSound.currentTime=0,this.enterSound.play().catch(e=>console.log("进入音效播放失败:",e)))}stopAllSounds(){this.clickSound&&(this.clickSound.pause(),this.clickSound.currentTime=0),this.enterSound&&(this.enterSound.pause(),this.enterSound.currentTime=0)}setVolume(e){const i=Math.max(0,Math.min(1,e));this.clickSound&&(this.clickSound.volume=i*.7),this.enterSound&&(this.enterSound.volume=i*.8)}}const p_=Ps.getInstance();function gx(){const s=q.useCallback(()=>{p_.playClickSound()},[]),e=q.useCallback(()=>{p_.playEnterSound()},[]);return{playClickSound:s,playEnterSound:e}}function hR(){const s=q.useRef(null),e=q.useRef(null),i=q.useRef(null),a=q.useRef(null),l=q.useRef(null),c=q.useRef(null),f=q.useRef(null),d=q.useRef(null),[p,m]=q.useState(!1),[g,v]=q.useState(!1),[y,E]=q.useState(!1),[b,T]=q.useState(!1),x=al(),{playClickSound:_,playEnterSound:L}=gx(),O=q.useCallback(()=>{c.current&&f.current&&(c.current.visible=!0,f.current.visible=!0,c.current.position.set(-2.2,0,0),f.current.position.set(2.2,0,0),E(!0))},[]),U=q.useCallback(()=>{if(g)return;v(!0);const z=document.getElementById("warp");z&&z.classList.add("show");const Z=setInterval(()=>{a.current&&(a.current.position.z=Math.max(2.2,a.current.position.z-.08))},16);setTimeout(()=>{clearInterval(Z),window.dispatchEvent(new CustomEvent("INTRO_FINISHED")),x("/home")},1400)},[g,x]),V=q.useCallback(()=>{p||(m(!0),L(),document.body.classList.add("leaving"),setTimeout(()=>{const z=document.getElementById("hero");z&&(z.style.display="none"),O()},220))},[p,L,O]);q.useEffect(()=>{if(!s.current)return;const z=s.current,Z=new mx({canvas:z,antialias:!0,powerPreference:"high-performance"});Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.setSize(window.innerWidth,window.innerHeight),Z.setClearColor(0,1),i.current=Z;const D=new nx;e.current=D;const N=new ri(60,window.innerWidth/window.innerHeight,.1,1e3);N.position.set(0,0,6),a.current=N;const j=420,ae=new Float32Array(j*3);for(let X=0;X<j;X++){const $=2.6+Math.random()*1.8,ye=Math.random()*Math.PI*2,Ae=Math.acos(2*Math.random()-1);ae[X*3+0]=$*Math.sin(Ae)*Math.cos(ye),ae[X*3+1]=$*Math.sin(Ae)*Math.sin(ye),ae[X*3+2]=$*Math.cos(Ae)}const de=new Ci;de.setAttribute("position",new Yn(ae,3));const _e=new xp({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1}),re=new ix(de,_e);D.add(re),l.current=re;const I=new cx(65520,.08);D.add(I);const K=new pu(.5,48,48),Q=new ou({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),G=new ou({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),R=new oi(K,Q),M=new oi(K,G);R.visible=!1,M.visible=!1,D.add(R),D.add(M),c.current=R,f.current=M;const F=new lx(65520,.7);F.position.set(-2,2,4),D.add(F);let ee=0;const ue=()=>{if(ee+=.016,l.current){l.current.rotation.y+=9e-4,l.current.rotation.x=Math.sin(ee*.12)*.02;const X=1+Math.sin(ee*.5)*.005;l.current.scale.set(X,X,X)}Z.render(D,N),d.current=requestAnimationFrame(ue)};ue();const se=()=>{a.current&&i.current&&(a.current.aspect=window.innerWidth/window.innerHeight,a.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",se),()=>{d.current&&cancelAnimationFrame(d.current),window.removeEventListener("resize",se),i.current&&i.current.dispose()}},[]),q.useEffect(()=>{if(!y||!c.current||!f.current)return;let z;const Z=()=>{c.current&&f.current&&(c.current.rotation.y+=.03,f.current.rotation.y-=.03,c.current.position.x+=.06,f.current.position.x-=.06,c.current.position.y=Math.sin((c.current.position.x+2)*1.2)*.06,f.current.position.y=Math.sin((2-f.current.position.x)*1.2)*.06,!b&&Math.abs(c.current.position.x-f.current.position.x)<.15&&(T(!0),k(),setTimeout(()=>{U()},120))),z=requestAnimationFrame(Z)};return Z(),()=>{z&&cancelAnimationFrame(z)}},[y,b,U]);const k=()=>{const z=document.getElementById("flash");z&&(z.classList.remove("show"),z.offsetWidth,z.classList.add("show"))};return q.useEffect(()=>{const z=()=>{_()};return document.addEventListener("click",z),()=>{document.removeEventListener("click",z)}},[_]),q.useEffect(()=>{const z=Z=>{Z.key==="Enter"&&V()};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[p,V]),P.jsxs("div",{className:"intro-page",children:[P.jsx("canvas",{ref:s,id:"stage"}),P.jsx("div",{className:"sweep"}),P.jsx("div",{className:"vignette"}),P.jsx("div",{className:"center",children:P.jsxs("div",{className:`hero ${p?"leaving":""}`,id:"hero",children:[P.jsx("div",{className:"logo",children:"心战五子棋"}),P.jsx("div",{className:"subtitle",children:"Mind Battle Gobang"}),P.jsx("div",{className:"cta",children:P.jsx("button",{className:"btn",id:"enter",onClick:V,children:"进入棋局"})})]})}),P.jsx("div",{className:`warp ${g?"show":""}`,id:"warp"}),P.jsx("div",{className:"flash",id:"flash"}),P.jsx("style",{children:`
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
      `})]})}var Je=(s=>(s[s.None=0]="None",s[s.Black=1]="Black",s[s.White=2]="White",s))(Je||{}),ft=(s=>(s.NotStarted="not_started",s.Playing="playing",s.BlackWin="black_win",s.WhiteWin="white_win",s.Draw="draw",s.Paused="paused",s))(ft||{}),Rt=(s=>(s.Easy="easy",s.Medium="medium",s.Hard="hard",s.Master="master",s))(Rt||{});function pR({onEnter:s,className:e=""}){const i=q.useRef(null),a=q.useRef(null),l=q.useRef(null),c=q.useRef(null),f=q.useRef(null),d=q.useRef(!1),p=q.useRef(!1),m=q.useRef(0),[g,v]=q.useState(!1),[y,E]=q.useState(!1),[b,T]=q.useState(!1);return q.useEffect(()=>{if(!i.current)return;const x=i.current,_=new mx({canvas:x,antialias:!0,powerPreference:"high-performance"});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,1),l.current=_;const L=new nx;a.current=L;const O=new ri(60,window.innerWidth/window.innerHeight,.1,1e3);O.position.set(0,0,6),c.current=O;const U=420,V=new Float32Array(U*3),k=new Float32Array(U*3),z=new Float32Array(U);for(let se=0;se<U;se++){const X=2.6+Math.random()*1.8,$=Math.random()*Math.PI*2,ye=Math.acos(2*Math.random()-1);V[se*3+0]=X*Math.sin(ye)*Math.cos($),V[se*3+1]=X*Math.sin(ye)*Math.sin($),V[se*3+2]=X*Math.cos(ye);const Ae=.7+Math.random()*.3;k[se*3+0]=0*Ae,k[se*3+1]=1*Ae,k[se*3+2]=.94*Ae,z[se]=.025+Math.random()*.02}const Z=new Ci;Z.setAttribute("position",new Yn(V,3)),Z.setAttribute("color",new Yn(k,3)),Z.setAttribute("size",new Yn(z,1));const D=new xp({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,vertexColors:!0,blending:hh}),N=new ix(Z,D);L.add(N);const j=new cx(65520,.08);L.add(j);const ae=new pu(.5,48,48),de=new ou({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),_e=new ou({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),re=new oi(ae,de),I=new oi(ae,_e);re.visible=!1,I.visible=!1,L.add(re),L.add(I);const K=new lx(65520,.7);K.position.set(-2,2,4),L.add(K);const Q=()=>{m.current+=.016,N.rotation.y+=9e-4,N.rotation.x=Math.sin(m.current*.12)*.02,N.rotation.z=Math.sin(m.current*.08)*.01;const se=1+Math.sin(m.current*.5)*.005;N.scale.set(se,se,se);const X=.75+Math.sin(m.current*.3)*.1;D.opacity=Math.max(.6,Math.min(.9,X)),d.current&&(re.rotation.y+=.03,I.rotation.y-=.03,re.position.x+=.06,I.position.x-=.06,re.position.y=Math.sin((re.position.x+2)*1.2)*.06,I.position.y=Math.sin((2-I.position.x)*1.2)*.06,!p.current&&Math.abs(re.position.x-I.position.x)<.15&&(p.current=!0,E(!0),setTimeout(()=>E(!1),220),setTimeout(()=>{T(!0),R()},120))),_.render(L,O),f.current=requestAnimationFrame(Q)};Q();const G=()=>{re.visible=!0,I.visible=!0,re.position.set(-2.2,0,0),I.position.set(2.2,0,0),d.current=!0},R=()=>{const se=setInterval(()=>{c.current&&(c.current.position.z=Math.max(2.2,c.current.position.z-.08))},16);setTimeout(()=>{clearInterval(se),s?.()},1100)},M=()=>{v(!0),setTimeout(()=>v(!1),3600)},F=()=>{G()},ee=()=>{R()};setTimeout(()=>{M()},600),window.addEventListener("INTRO_ENTER",F),window.addEventListener("startWarp",ee);const ue=()=>{c.current&&l.current&&(c.current.aspect=window.innerWidth/window.innerHeight,c.current.updateProjectionMatrix(),l.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",ue),()=>{f.current&&cancelAnimationFrame(f.current),l.current&&l.current.dispose(),window.removeEventListener("INTRO_ENTER",F),window.removeEventListener("startWarp",ee),window.removeEventListener("resize",ue)}},[s]),P.jsxs(P.Fragment,{children:[P.jsx("canvas",{ref:i,className:`fixed inset-0 pointer-events-none ${e}`,style:{zIndex:-1}}),g&&P.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"linear-gradient(100deg, rgba(0,255,240,0) 0%, rgba(0,255,240,0.35) 50%, rgba(0,255,240,0) 100%)",transform:"translateX(-120%)",filter:"blur(2px) drop-shadow(0 0 30px #00FFF0)",animation:"sweep 3.6s cubic-bezier(0.65,0.02,0.22,1) 0.6s both",zIndex:1}}),P.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen opacity-60",style:{background:"radial-gradient(60% 60% at 50% 50%, rgba(0,255,240,0.10), transparent 60%)",zIndex:1}}),y&&P.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(255,255,255,0) 60%)",animation:"flash 0.22s ease-out forwards",zIndex:2}}),b&&P.jsx("div",{className:"fixed inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 50%, rgba(0,255,240,0.55) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.95) 80%)",transform:"scale(0.2)",filter:"blur(10px)",opacity:0,transition:"transform 1s cubic-bezier(0.2,0.7,0.1,1), opacity 1s ease",zIndex:3},onTransitionEnd:()=>{const x=document.querySelector("[data-warp-effect]");x&&(x.style.transform="scale(3.8)",x.style.opacity="1")},"data-warp-effect":!0}),P.jsx("style",{children:`
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
      `})]})}function mR(){const s=q.useRef(null),e=q.useRef(null);return q.useEffect(()=>{const i=()=>{s.current&&(s.current.classList.remove("show"),s.current.offsetWidth,s.current.classList.add("show"))},a=()=>{e.current&&e.current.classList.add("show")};return window.addEventListener("triggerFlash",i),window.addEventListener("startWarp",a),()=>{window.removeEventListener("triggerFlash",i),window.removeEventListener("startWarp",a)}},[]),P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"sweep"}),P.jsx("div",{className:"vignette"}),P.jsx("div",{ref:e,className:"warp"}),P.jsx("div",{ref:s,className:"flash"})]})}function gR(){const s=al(),[e,i]=q.useState(null),{playClickSound:a}=gx();q.useEffect(()=>{const d=()=>{a()};return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[a]);const l=()=>{if(!e){alert("请先选择难度！");return}window.dispatchEvent(new CustomEvent("INTRO_ENTER"))},c=d=>{i(d)},f=()=>{s("/game",{state:{difficulty:e}})};return P.jsxs("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center p-4 overflow-hidden relative",children:[P.jsx(pR,{onEnter:f}),P.jsx(mR,{}),P.jsxs("div",{className:"relative z-10 max-w-2xl w-full",children:[P.jsxs("div",{className:"text-center mb-8 sm:mb-12 lg:mb-16 animate-slideDown",children:[P.jsx("div",{className:"inline-block mb-4 sm:mb-6",children:P.jsx("div",{className:"text-6xl sm:text-7xl lg:text-8xl mb-2 sm:mb-4 animate-float",children:"⚫⚪"})}),P.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight px-4",children:"心战五子棋"}),P.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-300 font-light px-4",children:"你落子，我攻心"})]}),P.jsxs("div",{className:"glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 animate-scaleIn",children:[P.jsxs("div",{className:"mb-6 sm:mb-8",children:[P.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-white",children:"选择难度"}),P.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-3",children:[P.jsx(ch,{level:"简单",emoji:"😊",difficulty:Rt.Easy,selected:e===Rt.Easy,onClick:()=>c(Rt.Easy)}),P.jsx(ch,{level:"中等",emoji:"🤔",difficulty:Rt.Medium,selected:e===Rt.Medium,onClick:()=>c(Rt.Medium)}),P.jsx(ch,{level:"困难",emoji:"😈",difficulty:Rt.Hard,selected:e===Rt.Hard,onClick:()=>c(Rt.Hard)})]})]}),P.jsx("button",{onClick:l,className:`
              w-full py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl lg:text-2xl
              transition-all duration-300 transform
              ${e?"bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/50 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}
            `,disabled:!e,children:e?"🎮 开始对弈":"👆 请先选择难度"}),e!==null&&P.jsx("p",{className:"text-center mt-4 text-sm text-gray-400 animate-fadeIn",children:vR(e)})]}),P.jsx("div",{className:"mt-6 sm:mt-8 text-center px-4",children:P.jsx("p",{className:"text-gray-500 text-xs sm:text-sm",children:"每一步棋后，AI 都会预测你的意图 · 你能骗过它吗？"})})]})]})}function ch({level:s,emoji:e,selected:i,onClick:a}){return P.jsxs("button",{onClick:a,className:`
        relative p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-2 transition-all duration-300 transform
        ${i?"border-neon-cyan bg-neon-cyan/10 scale-105 shadow-lg shadow-neon-cyan/50":"border-gray-700 bg-space-dark hover:border-gray-500 hover:scale-105"}
      `,children:[P.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2",children:e}),P.jsx("div",{className:`font-bold text-sm sm:text-base ${i?"text-neon-cyan":"text-gray-300"}`,children:s}),i&&P.jsx("div",{className:"absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-neon-cyan rounded-full flex items-center justify-center animate-scaleIn",children:P.jsx("span",{className:"text-white text-xs sm:text-sm",children:"✓"})})]})}function vR(s){return{[Rt.Easy]:"AI 会告诉你它的真实想法，适合入门",[Rt.Medium]:"AI 偶尔会误导你，需要保持警惕",[Rt.Hard]:"AI 会设置心理陷阱，极具挑战",[Rt.Master]:"AI 心理战大师，预测准确率成谜"}[s]||""}const ut=15,Yo=5,_R=3,tu=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],nu=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],xR=[{row:3,col:3},{row:3,col:11},{row:7,col:7},{row:11,col:3},{row:11,col:11}],vx=[{dr:0,dc:1},{dr:1,dc:0},{dr:1,dc:1},{dr:1,dc:-1}],yR={easy:500,medium:1500,hard:2e3,master:2e3},Qa={FIVE:1e5,LIVE_FOUR:1e4,SLEEP_FOUR:1e3,LIVE_THREE:100,SLEEP_THREE:10,LIVE_TWO:10,SLEEP_TWO:1};function _x({board:s,onCellClick:e,winningLine:i,lastMove:a,disabled:l=!1,predictedPositions:c=[]}){const f=q.useRef(null),[d,p]=q.useState(null),[m,g]=q.useState(40),[v,y]=q.useState(630),E=()=>{const G=window.innerWidth;return G<640?Math.min(35,(G-40)/ut):G<1024?30:40},b=m,T=b*.75,x=v;q.useEffect(()=>{const G=()=>{const R=E(),M=R*.75;g(R),y(ut*R+M*2)};return G(),window.addEventListener("resize",G),()=>window.removeEventListener("resize",G)},[]),q.useEffect(()=>{_()},[s,i,a,d,c,v,m]);const _=()=>{const G=f.current;if(!G)return;const R=G.getContext("2d");R&&(R.clearRect(0,0,x,x),L(R),O(R),U(R),V(R),k(R),a&&Z(R,a),i&&D(R,i),c.length>0&&j(R,c),d&&!l&&ae(R,d))},L=G=>{G.fillStyle="#1a1e37",G.fillRect(0,0,x,x),G.strokeStyle="#a855f7",G.lineWidth=2,G.strokeRect(T-10,T-10,ut*b+20,ut*b+20)},O=G=>{G.strokeStyle="#4a5568",G.lineWidth=1;for(let R=0;R<ut;R++){const M=T+R*b;G.beginPath(),G.moveTo(T,M),G.lineTo(T+(ut-1)*b,M),G.stroke()}for(let R=0;R<ut;R++){const M=T+R*b;G.beginPath(),G.moveTo(M,T),G.lineTo(M,T+(ut-1)*b),G.stroke()}},U=G=>{G.fillStyle="#a855f7";for(const R of xR){const M=T+R.col*b,F=T+R.row*b;G.beginPath(),G.arc(M,F,4,0,Math.PI*2),G.fill()}},V=G=>{G.fillStyle="#9ca3af",G.font="12px monospace",G.textAlign="center",G.textBaseline="middle";for(let R=0;R<ut;R++){const M=T+R*b;G.fillText(tu[R],M,T-20),G.fillText(tu[R],M,T+ut*b+15)}G.textAlign="right";for(let R=0;R<ut;R++){const M=T+R*b;G.fillText(nu[R],T-15,M)}G.textAlign="left";for(let R=0;R<ut;R++){const M=T+R*b;G.fillText(nu[R],T+ut*b+10,M)}},k=G=>{for(let R=0;R<ut;R++)for(let M=0;M<ut;M++){const F=s[R][M];F!==Je.None&&z(G,{row:R,col:M},F)}},z=(G,R,M)=>{const F=T+R.col*b,ee=T+R.row*b,ue=b*.4;if(G.shadowColor="rgba(0, 0, 0, 0.5)",G.shadowBlur=8,G.shadowOffsetX=2,G.shadowOffsetY=2,G.beginPath(),G.arc(F,ee,ue,0,Math.PI*2),M===Je.Black){const se=G.createRadialGradient(F-5,ee-5,0,F,ee,ue);se.addColorStop(0,"#2a2a2a"),se.addColorStop(1,"#0a0a0a"),G.fillStyle=se}else{const se=G.createRadialGradient(F-5,ee-5,0,F,ee,ue);se.addColorStop(0,"#ffffff"),se.addColorStop(1,"#e5e5e5"),G.fillStyle=se}G.fill(),G.shadowColor="transparent",G.shadowBlur=0,G.shadowOffsetX=0,G.shadowOffsetY=0},Z=(G,R)=>{const M=T+R.col*b,F=T+R.row*b;G.strokeStyle="#06b6d4",G.lineWidth=3,G.beginPath(),G.arc(M,F,b*.2,0,Math.PI*2),G.stroke()},D=(G,R)=>{if(R.positions.length<2)return;const M=R.positions[0],F=R.positions[R.positions.length-1],ee=T+M.col*b,ue=T+M.row*b,se=T+F.col*b,X=T+F.row*b;G.strokeStyle="#a855f7",G.lineWidth=5,G.lineCap="round",G.shadowColor="#a855f7",G.shadowBlur=15,G.beginPath(),G.moveTo(ee,ue),G.lineTo(se,X),G.stroke(),G.shadowColor="transparent",G.shadowBlur=0},N=G=>{if(G.length<2)return null;const R=tu.indexOf(G[0].toUpperCase()),M=G.substring(1),F=nu.indexOf(M);return R===-1||F===-1?null:{row:F,col:R}},j=(G,R)=>{R.forEach((M,F)=>{const ee=N(M);if(!ee||s[ee.row][ee.col]!==Je.None)return;const ue=T+ee.col*b,se=T+ee.row*b,X=["#06b6d4","#a855f7","#f59e0b"],$=X[F%X.length],ye=b*.25-F*2;G.save(),G.shadowColor=$,G.shadowBlur=15,G.fillStyle=$,G.strokeStyle=$,G.lineWidth=2;const Ae=8,Ue=ye,We=ye*.5;G.beginPath();for(let lt=0;lt<Ae*2;lt++){const H=Math.PI*lt/Ae-Math.PI/2,Ve=lt%2===0?Ue:We,Ye=ue+Math.cos(H)*Ve,Xe=se+Math.sin(H)*Ve;lt===0?G.moveTo(Ye,Xe):G.lineTo(Ye,Xe)}G.closePath(),G.fill(),G.shadowBlur=0,G.fillStyle="#1a1e37",G.font="bold 12px Arial",G.textAlign="center",G.textBaseline="middle",G.fillText((F+1).toString(),ue,se),G.restore()})},ae=(G,R)=>{if(s[R.row][R.col]!==Je.None)return;const M=T+R.col*b,F=T+R.row*b,ee=b*.4;G.fillStyle="rgba(6, 182, 212, 0.3)",G.beginPath(),G.arc(M,F,ee,0,Math.PI*2),G.fill()},de=G=>{if(l){p(null);return}const R=f.current;if(!R)return;const M=R.getBoundingClientRect(),F=G.clientX-M.left,ee=G.clientY-M.top,ue=Math.round((F-T)/b),se=Math.round((ee-T)/b);se>=0&&se<ut&&ue>=0&&ue<ut?p({row:se,col:ue}):p(null)},_e=()=>{p(null)},re=G=>{if(l||!e)return;const R=f.current;if(!R)return;const M=R.getBoundingClientRect(),F=G.clientX-M.left,ee=G.clientY-M.top,ue=Math.round((F-T)/b),se=Math.round((ee-T)/b);se>=0&&se<ut&&ue>=0&&ue<ut&&s[se][ue]===Je.None&&e({row:se,col:ue})},I=G=>{if(l||!e)return;G.preventDefault();const R=f.current;if(!R)return;const M=G.touches[0],F=R.getBoundingClientRect(),ee=M.clientX-F.left,ue=M.clientY-F.top,se=Math.round((ee-T)/b),X=Math.round((ue-T)/b);X>=0&&X<ut&&se>=0&&se<ut&&(p({row:X,col:se}),s[X][se]===Je.None&&e({row:X,col:se}))},K=G=>{if(l)return;G.preventDefault();const R=f.current;if(!R)return;const M=G.touches[0],F=R.getBoundingClientRect(),ee=M.clientX-F.left,ue=M.clientY-F.top,se=Math.round((ee-T)/b),X=Math.round((ue-T)/b);X>=0&&X<ut&&se>=0&&se<ut?p({row:X,col:se}):p(null)},Q=()=>{p(null)};return P.jsx("canvas",{ref:f,width:x,height:x,className:`rounded-lg ${l?"cursor-not-allowed opacity-75":"cursor-pointer"} max-w-full`,onClick:re,onMouseMove:de,onMouseLeave:_e,onTouchStart:I,onTouchMove:K,onTouchEnd:Q,style:{touchAction:"none"}})}function uh(s,e=30,i=!0){const[a,l]=q.useState(""),[c,f]=q.useState(!1),d=q.useRef(null),p=q.useRef(0);return q.useEffect(()=>{if(!i){l(s),f(!0);return}if(l(""),f(!1),p.current=0,d.current&&clearTimeout(d.current),!s){f(!0);return}const g=()=>{p.current<s.length?(l(s.substring(0,p.current+1)),p.current++,d.current=window.setTimeout(g,e)):f(!0)};return g(),()=>{d.current&&clearTimeout(d.current)}},[s,e,i]),{displayedText:a,isComplete:c,skip:()=>{d.current&&clearTimeout(d.current),l(s),f(!0),p.current=s.length}}}function xx({prediction:s,isAnalyzing:e,isStreaming:i=!1,streamingText:a=""}){const l=uh(s?.playerIntent||"",30,!e&&!i),c=uh(s?.psychologicalHint||"",25,!e&&!i),f=uh(s?.aiSuggestion||"",30,!e&&!i);if(!s&&!e)return P.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-gray-700",children:P.jsxs("div",{className:"text-center text-gray-400",children:[P.jsx("div",{className:"text-4xl mb-3",children:"🧠"}),P.jsx("div",{className:"text-sm font-semibold",children:"下一步棋后"}),P.jsx("div",{className:"text-sm",children:"AI 将分析你的心理"})]})});if(e)return P.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-neon-cyan animate-pulse",children:P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"text-4xl mb-3 animate-bounce",children:"🤔"}),P.jsx("div",{className:"text-neon-cyan font-semibold mb-2",children:i?"AI 正在思考...":"AI 正在分析..."}),P.jsx("div",{className:"text-sm text-gray-400",children:i?"实时生成分析中":"读取你的心理中"}),P.jsxs("div",{className:"mt-4 flex justify-center gap-1",children:[P.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),P.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-ping",style:{animationDelay:"0.2s"}}),P.jsx("div",{className:"w-2 h-2 bg-neon-pink rounded-full animate-ping",style:{animationDelay:"0.4s"}})]}),i&&a&&P.jsxs("div",{className:"mt-4 p-3 bg-space-dark rounded-lg border border-gray-700 text-left",children:[P.jsx("div",{className:"text-xs text-gray-400 mb-1",children:"💭 实时分析"}),P.jsxs("div",{className:"text-sm text-white",children:[a,P.jsx("span",{className:"animate-pulse",children:"|"})]})]})]})});if(!s)return null;const d=()=>P.jsxs("div",{className:"flex gap-1",children:[P.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce"}),P.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),P.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]});return P.jsxs("div",{className:"glass-effect rounded-xl p-6 space-y-4 animate-fadeIn border-2 border-neon-purple shadow-lg shadow-neon-purple/20",children:[P.jsxs("div",{className:"flex items-center justify-between border-b border-gray-700 pb-3",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("span",{className:"text-2xl animate-pulse",children:"🧠"}),P.jsx("span",{className:"text-lg font-bold text-white",children:"心理分析"})]}),s.isMisleading&&P.jsx("div",{className:"text-xs px-2 py-1 bg-red-500/20 border border-red-500 rounded text-red-400 animate-pulse",children:"⚠️ 可能误导"})]}),P.jsxs("div",{className:"p-3 bg-neon-purple/10 border border-neon-purple rounded-lg",children:[P.jsxs("div",{className:"flex items-center justify-between mb-1",children:[P.jsx("div",{className:"text-xs text-gray-400",children:"🎭 心理战"}),s.hintLoading&&P.jsx(d,{})]}),s.psychologicalHint?P.jsxs("div",{className:"text-sm text-neon-purple",children:[c.displayedText,!c.isComplete&&P.jsx("span",{className:"animate-pulse",children:"|"})]}):P.jsx("div",{className:"text-sm text-gray-500",children:"等待AI调侃中..."})]}),P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center justify-between mb-2",children:[P.jsx("div",{className:"text-xs text-gray-400",children:"🎯 AI 猜测你的意图"}),s.intentLoading&&P.jsx(d,{})]}),P.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:s.playerIntent?P.jsxs(P.Fragment,{children:[P.jsxs("div",{className:"text-sm text-white",children:[l.displayedText,!l.isComplete&&P.jsx("span",{className:"animate-pulse",children:"|"})]}),P.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[P.jsx("div",{className:"text-xs text-gray-500",children:"置信度:"}),P.jsx("div",{className:"flex-1 h-2 bg-gray-700 rounded-full overflow-hidden",children:P.jsx("div",{className:"h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-500",style:{width:`${s.confidence*100}%`}})}),P.jsxs("div",{className:"text-xs text-neon-cyan font-bold",children:[Math.round(s.confidence*100),"%"]})]})]}):P.jsx("div",{className:"text-sm text-gray-500",children:"AI正在分析你的意图..."})})]}),P.jsxs("div",{children:[P.jsxs("div",{className:"flex items-center justify-between mb-2",children:[P.jsx("div",{className:"text-xs text-gray-400",children:"🔮 AI 预测你接下来会"}),s.movesLoading&&P.jsx(d,{})]}),s.predictedMoves.length>0?P.jsx("div",{className:"space-y-2",children:s.predictedMoves.slice(0,3).map((p,m)=>P.jsx("div",{className:"p-2 bg-space-dark rounded border border-gray-700 hover:border-neon-cyan transition-colors",children:P.jsxs("div",{className:"flex items-start gap-2",children:[P.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center text-xs text-neon-cyan font-bold",children:m+1}),P.jsxs("div",{className:"flex-1",children:[P.jsx("div",{className:"text-sm text-white font-semibold",children:p.position}),P.jsx("div",{className:"text-xs text-gray-400 mt-0.5",children:p.reason})]})]})},m))}):P.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:P.jsx("div",{className:"text-sm text-gray-500",children:"AI正在预测你的后续走法..."})})]}),P.jsxs("div",{className:"pt-3 border-t border-gray-700",children:[P.jsxs("div",{className:"flex items-center justify-between mb-2",children:[P.jsxs("div",{className:"text-xs text-gray-400",children:["💡 AI ",s.isMisleading?"故意":"真诚","建议"]}),s.suggestionLoading&&P.jsx(d,{})]}),s.aiSuggestion?P.jsx("div",{className:`p-3 rounded-lg border ${s.isMisleading?"bg-red-500/10 border-red-500/50 text-red-300":"bg-green-500/10 border-green-500/50 text-green-300"}`,children:P.jsxs("div",{className:"text-sm",children:[f.displayedText,!f.isComplete&&P.jsx("span",{className:"animate-pulse",children:"|"})]})}):P.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:P.jsx("div",{className:"text-sm text-gray-500",children:"AI正在思考建议..."})})]})]})}function yx(){const s=q.useRef(null),e=q.useRef([]),i=q.useRef();return q.useEffect(()=>{const a=s.current;if(!a)return;const l=a.getContext("2d");if(!l)return;const c=()=>{a.width=window.innerWidth,a.height=window.innerHeight,f()},f=()=>{const p=Math.floor(a.width*a.height/8e3);e.current=[];for(let m=0;m<p;m++)e.current.push({x:Math.random()*a.width,y:Math.random()*a.height,radius:Math.random()*2+.5,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,opacity:Math.random()*.5+.3})},d=()=>{l.fillStyle="rgba(10, 14, 39, 0.1)",l.fillRect(0,0,a.width,a.height),e.current.forEach(p=>{if(p.x+=p.vx,p.y+=p.vy,(p.x<0||p.x>a.width)&&(p.vx*=-1),(p.y<0||p.y>a.height)&&(p.vy*=-1),p.opacity+=(Math.random()-.5)*.02,p.opacity=Math.max(.1,Math.min(1,p.opacity)),l.beginPath(),l.arc(p.x,p.y,p.radius,0,Math.PI*2),l.fillStyle=`rgba(255, 255, 255, ${p.opacity})`,l.fill(),p.radius>1.5){const m=l.createRadialGradient(p.x,p.y,0,p.x,p.y,p.radius*3);m.addColorStop(0,`rgba(168, 85, 247, ${p.opacity*.3})`),m.addColorStop(.5,`rgba(6, 182, 212, ${p.opacity*.1})`),m.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=m,l.fillRect(p.x-p.radius*3,p.y-p.radius*3,p.radius*6,p.radius*6)}}),i.current=requestAnimationFrame(d)};return c(),d(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),i.current&&cancelAnimationFrame(i.current)}},[]),P.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none",style:{zIndex:0}})}var fl={};(function s(e,i,a,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),f=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;var R=new OffscreenCanvas(1,1),M=R.getContext("2d");M.fillRect(0,0,1,1);var F=R.transferToImageBitmap();try{M.createPattern(F,"no-repeat")}catch{return!1}return!0})();function p(){}function m(R){var M=i.exports.Promise,F=M!==void 0?M:e.Promise;return typeof F=="function"?new F(R):(R(p,p),null)}var g=(function(R,M){return{transform:function(F){if(R)return F;if(M.has(F))return M.get(F);var ee=new OffscreenCanvas(F.width,F.height),ue=ee.getContext("2d");return ue.drawImage(F,0,0),M.set(F,ee),ee},clear:function(){M.clear()}}})(d,new Map),v=(function(){var R=Math.floor(16.666666666666668),M,F,ee={},ue=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(se){var X=Math.random();return ee[X]=requestAnimationFrame(function $(ye){ue===ye||ue+R-1<ye?(ue=ye,delete ee[X],se()):ee[X]=requestAnimationFrame($)}),X},F=function(se){ee[se]&&cancelAnimationFrame(ee[se])}):(M=function(se){return setTimeout(se,R)},F=function(se){return clearTimeout(se)}),{frame:M,cancel:F}})(),y=(function(){var R,M,F={};function ee(ue){function se(X,$){ue.postMessage({options:X||{},callback:$})}ue.init=function($){var ye=$.transferControlToOffscreen();ue.postMessage({canvas:ye},[ye])},ue.fire=function($,ye,Ae){if(M)return se($,null),M;var Ue=Math.random().toString(36).slice(2);return M=m(function(We){function lt(H){H.data.callback===Ue&&(delete F[Ue],ue.removeEventListener("message",lt),M=null,g.clear(),Ae(),We())}ue.addEventListener("message",lt),se($,Ue),F[Ue]=lt.bind(null,{data:{callback:Ue}})}),M},ue.reset=function(){ue.postMessage({reset:!0});for(var $ in F)F[$](),delete F[$]}}return function(){if(R)return R;if(!a&&c){var ue=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{R=new Worker(URL.createObjectURL(new Blob([ue])))}catch(se){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",se),null}ee(R)}return R}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(R,M){return M?M(R):R}function T(R){return R!=null}function x(R,M,F){return b(R&&T(R[M])?R[M]:E[M],F)}function _(R){return R<0?0:Math.floor(R)}function L(R,M){return Math.floor(Math.random()*(M-R))+R}function O(R){return parseInt(R,16)}function U(R){return R.map(V)}function V(R){var M=String(R).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:O(M.substring(0,2)),g:O(M.substring(2,4)),b:O(M.substring(4,6))}}function k(R){var M=x(R,"origin",Object);return M.x=x(M,"x",Number),M.y=x(M,"y",Number),M}function z(R){R.width=document.documentElement.clientWidth,R.height=document.documentElement.clientHeight}function Z(R){var M=R.getBoundingClientRect();R.width=M.width,R.height=M.height}function D(R){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=R,M}function N(R,M,F,ee,ue,se,X,$,ye){R.save(),R.translate(M,F),R.rotate(se),R.scale(ee,ue),R.arc(0,0,1,X,$,ye),R.restore()}function j(R){var M=R.angle*(Math.PI/180),F=R.spread*(Math.PI/180);return{x:R.x,y:R.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:R.startVelocity*.5+Math.random()*R.startVelocity,angle2D:-M+(.5*F-Math.random()*F),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:R.color,shape:R.shape,tick:0,totalTicks:R.ticks,decay:R.decay,drift:R.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:R.gravity*3,ovalScalar:.6,scalar:R.scalar,flat:R.flat}}function ae(R,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var F=M.tick++/M.totalTicks,ee=M.x+M.random*M.tiltCos,ue=M.y+M.random*M.tiltSin,se=M.wobbleX+M.random*M.tiltCos,X=M.wobbleY+M.random*M.tiltSin;if(R.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-F)+")",R.beginPath(),f&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))R.fill(K(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(se-ee)*.1,Math.abs(X-ue)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var $=Math.PI/10*M.wobble,ye=Math.abs(se-ee)*.1,Ae=Math.abs(X-ue)*.1,Ue=M.shape.bitmap.width*M.scalar,We=M.shape.bitmap.height*M.scalar,lt=new DOMMatrix([Math.cos($)*ye,Math.sin($)*ye,-Math.sin($)*Ae,Math.cos($)*Ae,M.x,M.y]);lt.multiplySelf(new DOMMatrix(M.shape.matrix));var H=R.createPattern(g.transform(M.shape.bitmap),"no-repeat");H.setTransform(lt),R.globalAlpha=1-F,R.fillStyle=H,R.fillRect(M.x-Ue/2,M.y-We/2,Ue,We),R.globalAlpha=1}else if(M.shape==="circle")R.ellipse?R.ellipse(M.x,M.y,Math.abs(se-ee)*M.ovalScalar,Math.abs(X-ue)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):N(R,M.x,M.y,Math.abs(se-ee)*M.ovalScalar,Math.abs(X-ue)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var Ve=Math.PI/2*3,Ye=4*M.scalar,Xe=8*M.scalar,Be=M.x,yt=M.y,He=5,rt=Math.PI/He;He--;)Be=M.x+Math.cos(Ve)*Xe,yt=M.y+Math.sin(Ve)*Xe,R.lineTo(Be,yt),Ve+=rt,Be=M.x+Math.cos(Ve)*Ye,yt=M.y+Math.sin(Ve)*Ye,R.lineTo(Be,yt),Ve+=rt;else R.moveTo(Math.floor(M.x),Math.floor(M.y)),R.lineTo(Math.floor(M.wobbleX),Math.floor(ue)),R.lineTo(Math.floor(se),Math.floor(X)),R.lineTo(Math.floor(ee),Math.floor(M.wobbleY));return R.closePath(),R.fill(),M.tick<M.totalTicks}function de(R,M,F,ee,ue){var se=M.slice(),X=R.getContext("2d"),$,ye,Ae=m(function(Ue){function We(){$=ye=null,X.clearRect(0,0,ee.width,ee.height),g.clear(),ue(),Ue()}function lt(){a&&!(ee.width===l.width&&ee.height===l.height)&&(ee.width=R.width=l.width,ee.height=R.height=l.height),!ee.width&&!ee.height&&(F(R),ee.width=R.width,ee.height=R.height),X.clearRect(0,0,ee.width,ee.height),se=se.filter(function(H){return ae(X,H)}),se.length?$=v.frame(lt):We()}$=v.frame(lt),ye=We});return{addFettis:function(Ue){return se=se.concat(Ue),Ae},canvas:R,promise:Ae,reset:function(){$&&v.cancel($),ye&&ye()}}}function _e(R,M){var F=!R,ee=!!x(M||{},"resize"),ue=!1,se=x(M,"disableForReducedMotion",Boolean),X=c&&!!x(M||{},"useWorker"),$=X?y():null,ye=F?z:Z,Ae=R&&$?!!R.__confetti_initialized:!1,Ue=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,We;function lt(Ve,Ye,Xe){for(var Be=x(Ve,"particleCount",_),yt=x(Ve,"angle",Number),He=x(Ve,"spread",Number),rt=x(Ve,"startVelocity",Number),$t=x(Ve,"decay",Number),Kt=x(Ve,"gravity",Number),B=x(Ve,"drift",Number),A=x(Ve,"colors",U),oe=x(Ve,"ticks",Number),Se=x(Ve,"shapes"),we=x(Ve,"scalar"),ve=!!x(Ve,"flat"),$e=k(Ve),Ne=Be,Ze=[],et=R.width*$e.x,Ce=R.height*$e.y;Ne--;)Ze.push(j({x:et,y:Ce,angle:yt,spread:He,startVelocity:rt,color:A[Ne%A.length],shape:Se[L(0,Se.length)],ticks:oe,decay:$t,gravity:Kt,drift:B,scalar:we,flat:ve}));return We?We.addFettis(Ze):(We=de(R,Ze,ye,Ye,Xe),We.promise)}function H(Ve){var Ye=se||x(Ve,"disableForReducedMotion",Boolean),Xe=x(Ve,"zIndex",Number);if(Ye&&Ue)return m(function(rt){rt()});F&&We?R=We.canvas:F&&!R&&(R=D(Xe),document.body.appendChild(R)),ee&&!Ae&&ye(R);var Be={width:R.width,height:R.height};$&&!Ae&&$.init(R),Ae=!0,$&&(R.__confetti_initialized=!0);function yt(){if($){var rt={getBoundingClientRect:function(){if(!F)return R.getBoundingClientRect()}};ye(rt),$.postMessage({resize:{width:rt.width,height:rt.height}});return}Be.width=Be.height=null}function He(){We=null,ee&&(ue=!1,e.removeEventListener("resize",yt)),F&&R&&(document.body.contains(R)&&document.body.removeChild(R),R=null,Ae=!1)}return ee&&!ue&&(ue=!0,e.addEventListener("resize",yt,!1)),$?$.fire(Ve,Be,He):lt(Ve,Be,He)}return H.reset=function(){$&&$.reset(),We&&We.reset()},H}var re;function I(){return re||(re=_e(null,{useWorker:!0,resize:!0})),re}function K(R,M,F,ee,ue,se,X){var $=new Path2D(R),ye=new Path2D;ye.addPath($,new DOMMatrix(M));var Ae=new Path2D;return Ae.addPath(ye,new DOMMatrix([Math.cos(X)*ue,Math.sin(X)*ue,-Math.sin(X)*se,Math.cos(X)*se,F,ee])),Ae}function Q(R){if(!f)throw new Error("path confetti are not supported in this browser");var M,F;typeof R=="string"?M=R:(M=R.path,F=R.matrix);var ee=new Path2D(M),ue=document.createElement("canvas"),se=ue.getContext("2d");if(!F){for(var X=1e3,$=X,ye=X,Ae=0,Ue=0,We,lt,H=0;H<X;H+=2)for(var Ve=0;Ve<X;Ve+=2)se.isPointInPath(ee,H,Ve,"nonzero")&&($=Math.min($,H),ye=Math.min(ye,Ve),Ae=Math.max(Ae,H),Ue=Math.max(Ue,Ve));We=Ae-$,lt=Ue-ye;var Ye=10,Xe=Math.min(Ye/We,Ye/lt);F=[Xe,0,0,Xe,-Math.round(We/2+$)*Xe,-Math.round(lt/2+ye)*Xe]}return{type:"path",path:M,matrix:F}}function G(R){var M,F=1,ee="#000000",ue='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof R=="string"?M=R:(M=R.text,F="scalar"in R?R.scalar:F,ue="fontFamily"in R?R.fontFamily:ue,ee="color"in R?R.color:ee);var se=10*F,X=""+se+"px "+ue,$=new OffscreenCanvas(se,se),ye=$.getContext("2d");ye.font=X;var Ae=ye.measureText(M),Ue=Math.ceil(Ae.actualBoundingBoxRight+Ae.actualBoundingBoxLeft),We=Math.ceil(Ae.actualBoundingBoxAscent+Ae.actualBoundingBoxDescent),lt=2,H=Ae.actualBoundingBoxLeft+lt,Ve=Ae.actualBoundingBoxAscent+lt;Ue+=lt+lt,We+=lt+lt,$=new OffscreenCanvas(Ue,We),ye=$.getContext("2d"),ye.font=X,ye.fillStyle=ee,ye.fillText(M,H,Ve);var Ye=1/F;return{type:"bitmap",bitmap:$.transferToImageBitmap(),matrix:[Ye,0,0,Ye,-Ue*Ye/2,-We*Ye/2]}}i.exports=function(){return I().apply(this,arguments)},i.exports.reset=function(){I().reset()},i.exports.create=_e,i.exports.shapeFromPath=Q,i.exports.shapeFromText=G})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),fl,!1);const Zo=fl.exports;fl.exports.create;function Sx({type:s,onComplete:e}){const[i,a]=q.useState(!1),[l,c]=q.useState(null);return q.useEffect(()=>{s&&s!==l&&(c(s),a(!0),s==="miss"&&Zo({particleCount:50,spread:70,origin:{x:.5,y:.85},colors:["#a855f7","#06b6d4","#ec4899"],startVelocity:30,gravity:.8}),setTimeout(()=>{a(!1),e?.()},1e3))},[s,l,e]),!i||!s?null:P.jsx("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:P.jsx("div",{className:`
          flex items-center gap-3 px-6 py-3 rounded-xl
          ${s==="hit"?"bg-neon-purple/30 border-neon-purple":"bg-neon-cyan/30 border-neon-cyan"}
          border-2 backdrop-blur-md
          animate-slideUp shadow-2xl
        `,children:s==="hit"?P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"text-3xl",children:"🎯"}),P.jsx("div",{children:P.jsx("div",{className:"text-lg font-bold text-neon-purple",children:"AI 读懂了你"})})]}):P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"text-3xl",children:"💥"}),P.jsxs("div",{children:[P.jsx("div",{className:"text-lg font-bold text-neon-cyan",children:"打破预测！"}),P.jsx("div",{className:"text-sm text-yellow-400 font-bold",children:"+10 智慧点 ✨"})]})]})})})}function Mx({isVisible:s,isPlayerWin:e}){return q.useEffect(()=>{if(s)if(e){const a=Date.now()+3e3,l=()=>{Zo({particleCount:7,angle:60,spread:55,origin:{x:0},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Zo({particleCount:7,angle:120,spread:55,origin:{x:1},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Date.now()<a&&requestAnimationFrame(l)};l(),setTimeout(()=>{Zo({particleCount:150,spread:120,origin:{y:.6},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]})},500)}else Zo({particleCount:50,spread:70,origin:{y:.6},colors:["#666","#888","#aaa"]})},[s,e]),s?P.jsx("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:P.jsx("div",{className:"text-center animate-scaleIn",children:e?P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"text-9xl mb-4 animate-bounce",children:"🎉"}),P.jsx("div",{className:"text-6xl font-bold text-gradient mb-4",children:"胜利！"}),P.jsx("div",{className:"text-2xl text-neon-cyan",children:"刚走神想别的了，这局不算，重来啊"})]}):P.jsxs(P.Fragment,{children:[P.jsx("div",{className:"text-9xl mb-4",children:"💔"}),P.jsx("div",{className:"text-6xl font-bold text-gray-400 mb-4",children:"失败"}),P.jsx("div",{className:"text-2xl text-gray-500",children:"赢了，承让（才怪）"})]})})}):null}class Or{static checkWin(e,i){const a=e[i.row][i.col];if(a===Je.None)return null;for(const l of vx){const c=this.checkDirection(e,i,l,a);if(c)return c}return null}static checkDirection(e,i,a,l){const c=[i];let f=1,d=i.row+a.dr,p=i.col+a.dc;for(;this.isInBounds(d,p)&&e[d][p]===l&&f<Yo;)c.push({row:d,col:p}),f++,d+=a.dr,p+=a.dc;for(d=i.row-a.dr,p=i.col-a.dc;this.isInBounds(d,p)&&e[d][p]===l&&f<Yo;)c.unshift({row:d,col:p}),f++,d-=a.dr,p-=a.dc;return f>=Yo?{positions:c.slice(0,Yo),player:l}:null}static isInBounds(e,i){return e>=0&&e<ut&&i>=0&&i<ut}static isBoardFull(e){for(let i=0;i<ut;i++)for(let a=0;a<ut;a++)if(e[i][a]===Je.None)return!1;return!0}static getLineCount(e,i,a,l){let c=1,f=i.row+a.dr,d=i.col+a.dc;for(;this.isInBounds(f,d)&&e[f][d]===l;)c++,f+=a.dr,d+=a.dc;for(f=i.row-a.dr,d=i.col-a.dc;this.isInBounds(f,d)&&e[f][d]===l;)c++,f-=a.dr,d-=a.dc;return c}}class lu{board;moveHistory;constructor(){this.board=this.createEmptyBoard(),this.moveHistory=[]}createEmptyBoard(){return Array(ut).fill(null).map(()=>Array(ut).fill(Je.None))}getBoard(){return this.board.map(e=>[...e])}getPiece(e){return this.isValidPosition(e)?this.board[e.row][e.col]:Je.None}isValidPosition(e){return e.row>=0&&e.row<ut&&e.col>=0&&e.col<ut}isEmpty(e){return this.getPiece(e)===Je.None}placePiece(e,i){return this.isValidPosition(e)?this.isEmpty(e)?i===Je.None?(console.error("Invalid player:",i),!1):(this.board[e.row][e.col]=i,this.moveHistory.push({position:e,player:i,timestamp:Date.now()}),!0):(console.error("Position already occupied:",e),!1):(console.error("Invalid position:",e),!1)}undo(){if(this.moveHistory.length===0)return null;const e=this.moveHistory.pop();return this.board[e.position.row][e.position.col]=Je.None,e}undoMultiple(e){const i=[];for(let a=0;a<e;a++){const l=this.undo();if(!l)break;i.push(l)}return i.reverse()}getMoveHistory(){return[...this.moveHistory]}getLastMove(){return this.moveHistory.length===0?null:this.moveHistory[this.moveHistory.length-1]}checkWin(e){return Or.checkWin(this.board,e)}isDraw(){return Or.isBoardFull(this.board)}getEmptyPositions(){const e=[];for(let i=0;i<ut;i++)for(let a=0;a<ut;a++)this.board[i][a]===Je.None&&e.push({row:i,col:a});return e}getPieceCount(){return this.moveHistory.length}reset(){this.board=this.createEmptyBoard(),this.moveHistory=[]}clone(){const e=new lu;return e.board=this.board.map(i=>[...i]),e.moveHistory=this.moveHistory.map(i=>({...i})),e}static fromBoard(e,i=[]){const a=new lu;return a.board=e.map(l=>[...l]),a.moveHistory=i.map(l=>({...l})),a}}class SR{board;currentPlayer;status;config;stats;startTime;winningLine;constructor(e=Rt.Medium){this.board=new lu,this.currentPlayer=Je.Black,this.status=ft.NotStarted,this.winningLine=null,this.startTime=null,this.config={boardSize:ut,winCount:Yo,maxUndoCount:_R,difficulty:e},this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}startGame(){if(this.status===ft.Playing){console.warn("Game already started");return}this.status=ft.Playing,this.startTime=Date.now()}makeMove(e){if(this.status!==ft.Playing)return console.error("Game is not in playing state"),!1;if(!this.board.placePiece(e,this.currentPlayer))return!1;this.updateStats();const a=this.board.checkWin(e);return a?(this.handleWin(a),!0):this.board.isDraw()?(this.handleDraw(),!0):(this.switchPlayer(),!0)}undo(e=2){if(this.stats.undoCount>=this.config.maxUndoCount)return console.warn("Max undo count reached"),!1;if(this.status!==ft.Playing)return console.warn("Cannot undo when game is not playing"),!1;const i=this.board.undoMultiple(e);if(i.length===0)return!1;this.stats.undoCount++,this.stats.totalMoves-=i.length;for(const a of i)a.player===Je.Black?this.stats.blackMoves--:a.player===Je.White&&this.stats.whiteMoves--;return i.length%2===1&&this.switchPlayer(),!0}pauseGame(){this.status===ft.Playing&&(this.status=ft.Paused)}resumeGame(){this.status===ft.Paused&&(this.status=ft.Playing)}restartGame(){this.board.reset(),this.currentPlayer=Je.Black,this.status=ft.NotStarted,this.winningLine=null,this.startTime=null,this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}resign(){this.status===ft.Playing&&(this.currentPlayer===Je.Black?this.status=ft.WhiteWin:this.status=ft.BlackWin,this.updateDuration())}getState(){return{board:this.board.getBoard(),currentPlayer:this.currentPlayer,status:this.status,moves:this.board.getMoveHistory(),winningLine:this.winningLine,config:{...this.config},stats:{...this.stats,duration:this.getCurrentDuration()},startTime:this.startTime}}getBoard(){return this.board}getCurrentPlayer(){return this.currentPlayer}getStatus(){return this.status}getRemainingUndoCount(){return this.config.maxUndoCount-this.stats.undoCount}switchPlayer(){this.currentPlayer=this.currentPlayer===Je.Black?Je.White:Je.Black}handleWin(e){this.winningLine=e,this.status=e.player===Je.Black?ft.BlackWin:ft.WhiteWin,this.updateDuration()}handleDraw(){this.status=ft.Draw,this.updateDuration()}updateStats(){this.stats.totalMoves++,this.currentPlayer===Je.Black?this.stats.blackMoves++:this.currentPlayer===Je.White&&this.stats.whiteMoves++}updateDuration(){this.startTime&&(this.stats.duration=Math.floor((Date.now()-this.startTime)/1e3))}getCurrentDuration(){return this.startTime?this.status===ft.BlackWin||this.status===ft.WhiteWin||this.status===ft.Draw?this.stats.duration:Math.floor((Date.now()-this.startTime)/1e3):0}}class _i{static evaluatePosition(e,i,a){if(e[i.row][i.col]!==Je.None)return 0;let l=0;if(e[i.row][i.col]=a,Or.checkWin(e,i))return e[i.row][i.col]=Je.None,Qa.FIVE;for(const c of vx){const f=this.analyzeDirection(e,i,c,a);l+=this.getPatternScore(f)}return e[i.row][i.col]=Je.None,l+=this.getPositionWeight(i),l}static analyzeDirection(e,i,a,l){const c=Or.getLineCount(e,i,a,l);if(c>=5)return"FIVE";const f=this.isBlocked(e,i,a,l,!0),d=this.isBlocked(e,i,a,l,!1);return c===4?!f&&!d?"LIVE_FOUR":"SLEEP_FOUR":c===3?!f&&!d?"LIVE_THREE":"SLEEP_THREE":c===2&&!f&&!d?"LIVE_TWO":"SLEEP_TWO"}static isBlocked(e,i,a,l,c){const f=c?1:-1;let d=i.row,p=i.col;for(;d>=0&&d<ut&&p>=0&&p<ut&&e[d][p]===l;)d+=a.dr*f,p+=a.dc*f;return d<0||d>=ut||p<0||p>=ut?!0:e[d][p]!==Je.None}static getPatternScore(e){switch(e){case"FIVE":return Qa.FIVE;case"LIVE_FOUR":return Qa.LIVE_FOUR;case"SLEEP_FOUR":return Qa.SLEEP_FOUR;case"LIVE_THREE":return Qa.LIVE_THREE;case"SLEEP_THREE":return Qa.SLEEP_THREE;case"LIVE_TWO":return Qa.LIVE_TWO;case"SLEEP_TWO":return Qa.SLEEP_TWO;default:return 0}}static getPositionWeight(e){const i=Math.floor(ut/2),a=Math.abs(e.row-i)+Math.abs(e.col-i);return Math.max(0,10-a)}static evaluateBoard(e,i){let a=0;const l=i===Je.Black?Je.White:Je.Black;for(let c=0;c<ut;c++)for(let f=0;f<ut;f++)e[c][f]===i?a+=this.evaluatePosition(e,{row:c,col:f},i):e[c][f]===l&&(a-=this.evaluatePosition(e,{row:c,col:f},l)*.9);return a}static getCandidatePositions(e,i=2){const a=new Set;for(let l=0;l<ut;l++)for(let c=0;c<ut;c++)if(e[l][c]!==Je.None)for(let f=-i;f<=i;f++)for(let d=-i;d<=i;d++){const p=l+f,m=c+d;p>=0&&p<ut&&m>=0&&m<ut&&e[p][m]===Je.None&&a.add(`${p},${m}`)}if(a.size===0){const l=Math.floor(ut/2);return[{row:l,col:l}]}return Array.from(a).map(l=>{const[c,f]=l.split(",").map(Number);return{row:c,col:f}})}}class MR{difficulty;player;constructor(e,i=Je.White){this.difficulty=e,this.player=i}getNextMove(e){switch(this.difficulty){case Rt.Easy:return this.getEasyMove(e);case Rt.Medium:return this.getMediumMove(e);case Rt.Hard:return this.getHardMove(e);case Rt.Master:return this.getMasterMove(e);default:return this.getMediumMove(e)}}getEasyMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.getBestScoredMove(e,3)}getMediumMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.minimax(e,4)}getHardMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.minimax(e,5)}getMasterMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);return l||this.minimax(e,3)}findWinningMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=Or.checkWin(e,l);if(e[l.row][l.col]=Je.None,c)return l}return null}findLiveFourMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=_i.evaluatePosition(e,l,i);if(e[l.row][l.col]=Je.None,c>=8e3)return l}return null}findDoubleLiveThreeMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=_i.evaluatePosition(e,l,i);if(e[l.row][l.col]=Je.None,c>=2e3&&c<8e3)return l}return null}getBestScoredMove(e,i){const a=_i.getCandidatePositions(e,2);if(a.length===0)return null;const l=this.getOpponent();let c=null,f=-1/0;for(const d of a){let p=_i.evaluatePosition(e,d,this.player);if(i>0){e[d.row][d.col]=this.player;const m=this.getOpponentBestScore(e,l,i-1);e[d.row][d.col]=Je.None,p-=m*.8}p>f&&(f=p,c=d)}return c}getOpponentBestScore(e,i,a){if(a<=0)return 0;const l=_i.getCandidatePositions(e,2);let c=-1/0;for(const f of l){const d=_i.evaluatePosition(e,f,i);d>c&&(c=d)}return c}minimax(e,i){const a=_i.getCandidatePositions(e,2);if(a.length===0)return null;let l=null,c=-1/0,f=-1/0;const d=1/0;for(const p of a){e[p.row][p.col]=this.player;const m=this.minimaxHelper(e,i-1,f,d,!1);e[p.row][p.col]=Je.None,m>c&&(c=m,l=p),f=Math.max(f,m)}return l}minimaxHelper(e,i,a,l,c){if(i===0)return _i.evaluateBoard(e,this.player);const f=_i.getCandidatePositions(e,1),d=c?this.player:this.getOpponent();if(c){let p=-1/0;for(const m of f){if(e[m.row][m.col]=d,Or.checkWin(e,m))return e[m.row][m.col]=Je.None,1e5;const g=this.minimaxHelper(e,i-1,a,l,!1);if(e[m.row][m.col]=Je.None,p=Math.max(p,g),a=Math.max(a,g),l<=a)break}return p}else{let p=1/0;for(const m of f){if(e[m.row][m.col]=d,Or.checkWin(e,m))return e[m.row][m.col]=Je.None,-1e5;const g=this.minimaxHelper(e,i-1,a,l,!0);if(e[m.row][m.col]=Je.None,p=Math.min(p,g),l=Math.min(l,g),l<=a)break}return p}}getOpponent(){return this.player===Je.Black?Je.White:Je.Black}setDifficulty(e){this.difficulty=e}getDifficulty(){return this.difficulty}}class ER{apiKey;apiUrl;model;constructor(){this.apiKey="sk-rdbarmfrezgegwhmqtjeudoimigauytrmuychqcgjysjtjua",this.apiUrl="https://api.siliconflow.cn/v1",this.model="deepseek-ai/DeepSeek-V3",this.apiKey||console.warn("⚠️ SiliconFlow API Key未配置，心理预测功能将使用模拟模式")}async chat(e,i=.7,a=500,l){if(!this.apiKey)return console.warn("❌ API配置不完整，使用模拟模式（预制内容）"),console.warn("请检查.env文件中的VITE_SILICONFLOW_API_KEY"),this.getMockResponse();console.log("🚀 开始调用SiliconFlow大模型API..."),console.log("📋 模型:",this.model);try{const c={model:this.model,messages:e,temperature:i,max_tokens:a},f=await fetch(`${this.apiUrl}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(c),signal:l?.signal});if(!f.ok){const p=await f.text();throw console.error("❌ SiliconFlow API错误:",p),new Error(`API请求失败: ${f.status} ${f.statusText}`)}const d=await f.json();if(!d.choices||d.choices.length===0)throw new Error("API返回数据格式错误");return console.log("✅ 成功获取大模型返回内容！"),console.log("📝 内容预览:",d.choices[0].message.content.substring(0,100)),d.choices[0].message.content}catch(c){return console.error("❌ 调用SiliconFlow API失败:",c),console.warn("⚠️ 降级到模拟模式（预制内容）"),this.getMockResponse()}}async chatStream(e,i,a,l,c=.7,f=500){if(!this.apiKey){console.warn("❌ API配置不完整，使用模拟流式模式"),console.warn("请检查.env文件中的VITE_SILICONFLOW_API_KEY"),this.simulateStreamResponse(i,a);return}console.log("🚀 开始流式调用SiliconFlow大模型API..."),console.log("📋 模型:",this.model);try{const d={model:this.model,messages:e,temperature:c,max_tokens:f,stream:!0},p=await fetch(`${this.apiUrl}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(d)});if(!p.ok){const y=await p.text();throw console.error("❌ SiliconFlow API错误:",y),new Error(`API请求失败: ${p.status} ${p.statusText}`)}if(!p.body)throw new Error("响应体为空");const m=p.body.getReader(),g=new TextDecoder;let v="";try{for(;;){const{done:y,value:E}=await m.read();if(y)break;const T=g.decode(E,{stream:!0}).split(`
`);for(const x of T){const _=x.trim();if(_.startsWith("data: ")){const L=_.slice(6);if(L==="[DONE]"){console.log("✅ 流式输出完成"),a(v);return}try{const O=JSON.parse(L);if(O.choices&&O.choices.length>0){const U=O.choices[0];if(U.delta.content){const V=U.delta.content;v+=V,i(V)}if(U.finish_reason){console.log("✅ 流式输出完成"),a(v);return}}}catch(O){console.warn("⚠️ 解析流式数据块失败:",O)}}}}}finally{m.releaseLock()}}catch(d){console.error("❌ 流式调用SiliconFlow API失败:",d),console.warn("⚠️ 降级到模拟流式模式"),l(d),this.simulateStreamResponse(i,a)}}simulateStreamResponse(e,i){const a=this.getMockResponse(),l=a.split("");let c=0;const f=setInterval(()=>{if(c<l.length){const d=l[c];e(d),c++}else clearInterval(f),i(a)},50)}getMockResponse(){const e=["采取进攻策略，试图建立优势","采取防守姿态，稳扎稳打","布局阶段，为后续发展做准备","尝试形成双向威胁","寻找突破口，准备发起攻势"],i=[{position:"H8",reason:"形成连子威胁"},{position:"I7",reason:"扩大控制范围"},{position:"G9",reason:"防止AI反击"},{position:"J8",reason:"建立进攻基础"},{position:"H9",reason:"加强中心控制"}],a=["建议继续保持进攻态势","建议在边缘位置布局，出其不意","建议加强防守，稳中求胜","建议寻找双向威胁的机会","建议先观察AI的走向再决定"],l=["你的棋路AI已经看穿了！","这步棋下得很有想法！","AI注意到你的战术了","小心，AI可能在布陷阱！","你的策略很有挑战性！","继续保持这个节奏！"],c=e[Math.floor(Math.random()*e.length)],f=[],d=new Set;for(let v=0;v<3;v++){let y;do y=Math.floor(Math.random()*i.length);while(d.has(y));d.add(y),f.push(i[y])}const p=a[Math.floor(Math.random()*a.length)],m=l[Math.floor(Math.random()*l.length)],g=.6+Math.random()*.3;return JSON.stringify({playerIntent:c,predictedMoves:f,aiSuggestion:p,confidence:g,psychologicalHint:m})}isAvailable(){return!!this.apiKey}}const Ls=new ER;class bR{difficulty;constructor(e){this.difficulty=e}async analyzePsychology(e,i,a,l,c){console.log("🔮 开始心理分析（4个独立大模型请求）...");try{if(l?.signal.aborted)return console.log("🚫 心理分析请求已被取消"),null;const f={playerIntent:"",predictedMoves:[],aiSuggestion:"",confidence:0,psychologicalHint:"",isMisleading:!1,intentLoading:!0,movesLoading:!0,suggestionLoading:!0,hintLoading:!0};console.log("🎭 第1优先级：先调用心理战...");try{const m=await this.fetchPsychologicalHint(e,i,a,l);f.psychologicalHint=m,f.hintLoading=!1,console.log("✅ 心理战完成"),c?.(f)}catch(m){f.hintLoading=!1,console.error("❌ 心理战请求失败:",m),c?.(f)}console.log("🚀 并行调用其他3个请求...");const d=[this.fetchPlayerIntent(e,i,a,l),this.fetchPredictedMoves(e,i,a,l),this.fetchAISuggestion(e,i,a,l)],p=await Promise.allSettled(d);return p[0].status==="fulfilled"&&p[0].value?(f.playerIntent=p[0].value.intent,f.confidence=p[0].value.confidence,f.intentLoading=!1,console.log("✅ 意图分析完成"),c?.(f)):(f.intentLoading=!1,console.error("❌ 意图分析请求失败")),p[1].status==="fulfilled"&&p[1].value?(f.predictedMoves=p[1].value,f.movesLoading=!1,console.log("✅ 预测落子完成"),c?.(f)):(f.movesLoading=!1,console.error("❌ 预测落子请求失败")),p[2].status==="fulfilled"&&p[2].value?(f.aiSuggestion=p[2].value,f.suggestionLoading=!1,console.log("✅ AI建议完成"),f.isMisleading=this.shouldMislead(),f.isMisleading&&(f.aiSuggestion=this.generateMisleadingSuggestion(f.aiSuggestion)),c?.(f)):(f.suggestionLoading=!1,console.error("❌ AI建议请求失败")),console.log("✅ 心理分析全部完成（4个大模型请求）"),f}catch(f){return console.error("❌ 心理分析失败:",f),null}}async analyzePsychologyStream(e,i,a,l,c,f,d){console.log("🔮 开始流式心理分析（完全依赖大模型）...");try{if(d?.signal.aborted){console.log("🚫 流式心理分析请求已被取消"),c(null);return}const p=this.describeBoardState(e,i,a),m=this.buildPrompt(p,a);console.log("📝 提示词构建完成"),await Ls.chatStream([{role:"system",content:this.getSystemPrompt()},{role:"user",content:m}],l,g=>{console.log("✅ 流式输出完成"),console.log("📄 完整响应内容:",g.substring(0,150));const v=this.parseResponse(g);v&&(v.isMisleading=this.shouldMislead(),v.isMisleading&&(v.aiSuggestion=this.generateMisleadingSuggestion(v.aiSuggestion)),console.log("🎉 使用大模型实时生成的内容（100%非预制）"),console.log("📊 预测结果:",v)),c(v)},g=>{console.error("❌ 流式心理分析失败:",g),f(g)},.7,150)}catch(p){console.error("❌ 流式心理分析失败:",p),f(p)}}async fetchPsychologicalHint(e,i,a,l){console.log("🎭 调用大模型 - 心理战挑衅...");const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下了${f}这步棋。

你的任务：生成一句**超级调侃的心理战挑衅**（会被语音播放），要让玩家印象深刻！

要求：
1. 调侃玩家这步棋的意图或风格（15字内）
2. 对他下一步动作进行干扰和误导
3. 语气要像损友，爱开玩笑但不伤人
4. 要有趣、要有梗、让人笑

例子：
- "哟，H8这步想抢中心？我看穿了"
- "好家伙，你这是想阴我？"
- "在这搞事情了是吧，我慌了"
- "嘿，你还挺能整活啊"
- "你这套路我见多了"

直接输出一句话，不要JSON。`;try{return(await Ls.chat([{role:"system",content:"你是一个超级逗比的五子棋AI，特别喜欢调侃玩家，语气幽默但不伤人。"},{role:"user",content:d}],.9,50,l)).trim()}catch(p){throw console.error("❌ 心理战请求失败:",p),p}}async fetchPlayerIntent(e,i,a,l){console.log("🎯 调用大模型 - 意图分析...");const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下${f}。分析他的意图。

要求：
1. 用幽默调侃的语言描述意图（15字内）
2. 评估置信度（0-1之间的数字）

输出JSON格式：
{
  "intent": "意图描述（幽默风格）",
  "confidence": 0.75
}`;try{const m=(await Ls.chat([{role:"system",content:"你是一个五子棋分析AI，用幽默的语气分析玩家意图。"},{role:"user",content:d}],.7,80,l)).match(/\{[\s\S]*\}/);if(m){const g=JSON.parse(m[0]);return{intent:g.intent||"意图不明",confidence:g.confidence||.7}}throw new Error("无法解析响应")}catch(p){throw console.error("❌ 意图分析请求失败:",p),p}}async fetchPredictedMoves(e,i,a,l){console.log("🔮 调用大模型 - 预测落子...");const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下${f}。预测他接下来可能下的2-3步棋。

要求：
1. 基于实际棋局分析
2. 位置格式正确（如H8、I9）
3. 原因幽默但合理

输出JSON数组：
[
  {"position": "H8", "reason": "形成连子威胁"},
  {"position": "I7", "reason": "扩大控制范围"}
]`;try{const m=(await Ls.chat([{role:"system",content:"你是一个五子棋分析AI，预测玩家的后续走法。"},{role:"user",content:d}],.7,120,l)).match(/\[[\s\S]*\]/);if(m)return JSON.parse(m[0]).slice(0,3);throw new Error("无法解析响应")}catch(p){throw console.error("❌ 预测落子请求失败:",p),p}}async fetchAISuggestion(e,i,a,l){console.log("💡 调用大模型 - AI建议...");const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下${f}。给他一个实用建议。

要求：
1. 建议要实用，能帮到玩家
2. 用损友的口吻说，幽默但真诚
3. 15-20字

例子：
- "老哥，往中间走机会更大"
- "稳一手，别急着暴毙"
- "可以试试双线进攻"

直接输出建议，不要JSON。`;try{return(await Ls.chat([{role:"system",content:"你是一个损友风格的五子棋AI，给玩家实用建议。"},{role:"user",content:d}],.7,60,l)).trim()}catch(p){throw console.error("❌ AI建议请求失败:",p),p}}async fetchPredictionFromAI(e,i,a,l){const c=performance.now();console.log("🚀 调用大模型API...");const f=this.describeBoardState(e,i,a),d=this.buildPrompt(f,a);console.log("📝 提示词构建完成");try{if(l?.signal.aborted)return console.log("🚫 大模型API请求已被取消"),null;const p=await Ls.chat([{role:"system",content:this.getSystemPrompt()},{role:"user",content:d}],.7,150,l),g=((performance.now()-c)/1e3).toFixed(2);console.log(`✅ 大模型API响应成功 (耗时: ${g}秒)`),console.log("📄 响应内容:",p.substring(0,150)),parseFloat(g)>3?(console.warn("⚠️ 响应较慢，建议检查网络连接或API配置"),console.warn("💡 参考: 如何优化大模型响应速度.md")):parseFloat(g)<1&&console.log("⚡ 响应很快！SiliconFlow API配置良好");const v=this.parseResponse(p);return v&&(console.log("🎉 使用大模型实时生成的内容（100%非预制）"),console.log("📊 预测结果:",v)),v}catch(p){const g=((performance.now()-c)/1e3).toFixed(2);throw console.error(`❌ 大模型API调用失败 (耗时: ${g}秒):`,p),p}}getSystemPrompt(){return`你是一个爱开玩笑、超级逗比的五子棋AI，特别喜欢吐槽和调侃玩家，语气幽默但不伤人。
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

直接JSON。`}describeBoardState(e,i,a){const l=[],c=a.filter(m=>m.player===Je.Black).length,f=this.positionToNotation(i.position);l.push(`步数:${c}, 最后:${f}`);const d=[],p=a.slice(-10);for(const m of p){const g=this.positionToNotation(m.position),v=m.player===Je.Black?"●":"○";d.push(`${v}${g}`)}return l.push(`近期:${d.join(" ")}`),l.join(`
`)}positionToNotation(e){return`${tu[e.col]}${nu[e.row]}`}parseResponse(e){try{const i=e.match(/\{[\s\S]*\}/);if(!i)return console.error("⚠️ 响应中未找到JSON格式"),null;let a=i[0];a=this.cleanJsonString(a),console.log("🔧 清理后的JSON:",a.substring(0,200));const l=JSON.parse(a);return!l.playerIntent||!l.predictedMoves||!l.aiSuggestion||!l.psychologicalHint?(console.error("⚠️ 缺少必需字段"),null):{playerIntent:l.playerIntent||"",predictedMoves:Array.isArray(l.predictedMoves)&&l.predictedMoves.length>0?l.predictedMoves:[],aiSuggestion:l.aiSuggestion||"",confidence:typeof l.confidence=="number"?l.confidence:.7,psychologicalHint:l.psychologicalHint||"",isMisleading:!1}}catch(i){return console.error("❌ 解析响应失败:",i),console.log("📄 原始响应:",e),null}}cleanJsonString(e){return e=e.replace(/,(\s*[}\]])/g,"$1"),e=e.replace(/\/\/.*$/gm,""),e=e.replace(/\/\*[\s\S]*?\*\//g,""),e}shouldMislead(){const e={[Rt.Easy]:0,[Rt.Medium]:.1,[Rt.Hard]:.2,[Rt.Master]:.3};return Math.random()<e[this.difficulty]}generateMisleadingSuggestion(e){const i=["要不试试走边路？（坏笑）","我觉得你往那边走更好（其实不是）","相信我，听我的准没错（误导ing）","这个位置绝对稳（才怪）"];return Math.random()>.7?i[Math.floor(Math.random()*i.length)]:e.replace(/稳/g,"猛").replace(/小心/g,"别管").replace(/防/g,"攻").replace(/观察/g,"直接冲").replace(/先/g,"不用")+"（嘿嘿）"}}class TR{apiKey;apiUrl;constructor(){this.apiKey="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiJmZXJyaXMiLCJVc2VyTmFtZSI6ImZlcnJpcyIsIkFjY291bnQiOiIiLCJTdWJqZWN0SUQiOiIxOTgxNTMzMzg1NDc4MTE5NjI0IiwiUGhvbmUiOiIxODYwMTcxNzI3NSIsIkdyb3VwSUQiOiIxOTgxNTMzMzg1NDY5NzMxMDE2IiwiUGFnZU5hbWUiOiIiLCJNYWlsIjoiIiwiQ3JlYXRlVGltZSI6IjIwMjUtMTAtMjQgMjE6NTU6MjUiLCJUb2tlblR5cGUiOjEsImlzcyI6Im1pbmltYXgifQ.xeHhyXZcOCODeA-XRVH7t670hAhJ0rXuQT7Oq4EQP4gs-Hbe4MoCSzLKQ1r_Ufk4EPjsV5ESzdT3Kkch2IEEGdC6ibOdhbPh0Ehhd7lQJOXjVGQIvyqOM6t9pOtTxLHX4NtVCw7SHh83LAlqGSUseIxTVteuS9KxO_H4tfsC13E7mwC9bhhpiQJVJ_0XznH6U2rjeI4F6xuCFmjqg0X1BSffFbzxKDTEFqER-YCkcIqNxoKsV7cWUXSpsS20g0B9jFCe-CFKKiayTHrfzVQQG3HFcJNRl_KhqsC3-4LSGo1-Od1sc152tUPLhOQKzp_BB6C81lh2JV5zgKraeOzevw",this.apiUrl="https://api.minimaxi.com/v1",this.apiKey||console.warn("⚠️ Minimax API Key未配置，TTS功能将使用模拟模式")}async textToSpeech(e,i={voice_id:"ttv-voice-2025102420553325-iEpNdb8p",speed:1,vol:1,pitch:0},a={format:"mp3",sample_rate:32e3,bitrate:128e3,channel:1},l){if(!this.apiKey)return this.getMockAudioUrl();try{const c={model:"speech-2.5-hd-preview",text:e,stream:!1,voice_setting:i,audio_setting:a,output_format:"url",subtitle_enable:!1,aigc_watermark:!1},f=await fetch(`${this.apiUrl}/t2a_v2`,{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify(c),signal:l?.signal});if(!f.ok){const p=await f.text();throw console.error("Minimax TTS API错误:",p),new Error(`API请求失败: ${f.status} ${f.statusText}`)}const d=await f.json();if(d.base_resp.status_code!==0)throw new Error(`API错误: ${d.base_resp.status_msg}`);if(!d.data||!d.data.audio)throw new Error("API返回数据格式错误");return d.data.audio.startsWith("http")?d.data.audio:this.hexToBlobUrl(d.data.audio,a.format||"mp3")}catch(c){return console.error("Minimax TTS API调用失败:",c),this.getMockAudioUrl()}}hexToBlobUrl(e,i){try{const a=new Uint8Array(e.length/2);for(let f=0;f<e.length;f+=2)a[f/2]=parseInt(e.substr(f,2),16);const l=this.getMimeType(i),c=new Blob([a],{type:l});return URL.createObjectURL(c)}catch(a){throw console.error("转换hex数据失败:",a),new Error("音频数据转换失败")}}getMimeType(e){return{mp3:"audio/mpeg",wav:"audio/wav",flac:"audio/flac",pcm:"audio/pcm"}[e]||"audio/mpeg"}getMockAudioUrl(){return"speechSynthesis"in window?this.createWebSpeechAudio():(console.warn("TTS功能不可用：既没有配置Minimax API，也不支持Web Speech API"),"")}createWebSpeechAudio(){return"web-speech-api"}}const AR=new TR;function Ex(s=Rt.Medium){const e=q.useRef(null),i=q.useRef(null),a=q.useRef(null),[l,c]=q.useState(null),[f,d]=q.useState(!1),[p,m]=q.useState(null),[g,v]=q.useState(!1),y=q.useRef(null),E=q.useRef(null),b=q.useRef(!1),T=q.useRef({}),x=q.useCallback(()=>{e.current&&c(e.current.getState())},[]);q.useEffect(()=>{e.current=new SR(s),i.current=new MR(s,Je.White),a.current=new bR(s),x()},[s,x]);const _=q.useCallback(()=>{e.current&&(e.current.startGame(),x())},[x]),L=()=>typeof crypto<"u"&&crypto.getRandomValues?"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,re=>{const I=crypto.getRandomValues(new Uint8Array(1))[0]&15;return(re==="x"?I:I&3|8).toString(16)}):"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,re=>{const I=Math.random()*16|0;return(re==="x"?I:I&3|8).toString(16)}),O=q.useCallback(async()=>{if(!e.current||!a.current)return;const re=e.current.getState(),I=re.moves;if(I.length===0)return;const K=I[I.length-1];if(K.player!==Je.Black)return;E.current&&(console.log("🚫 取消之前的心理分析请求"),E.current.abort());const Q=new AbortController;E.current=Q,v(!0),T.current={};const G=L();T.current[G]=!0,y.current&&(y.current.pause(),y.current=null),b.current=!1,console.log("🔮 开始心理分析...");try{const R=await a.current.analyzePsychology(re.board,K,I,Q,M=>{m({...M}),M.psychologicalHint&&!M.hintLoading&&!b.current&&(b.current=!0,console.log("🎤 触发TTS语音播放"),(async()=>{if(!Q.signal.aborted)try{const F=await AR.textToSpeech(M.psychologicalHint,void 0,void 0,Q);if(Q.signal.aborted)return;if(F&&F!=="web-speech-api"){const ee=new Audio(F);y.current=ee,ee.onended=()=>{console.log("✅ 心理战语音播放完成"),y.current=null},ee.onerror=ue=>{console.error("❌ 心理战语音播放失败:",ue),y.current=null},T.current[G]&&!Q.signal.aborted&&(ee.play(),console.log("▶️ 心理战语音开始播放"))}}catch(F){console.error("❌ TTS转换失败:",F)}})())});R?(m(R),console.log("✅ 4个大模型请求全部完成")):(m(null),console.warn("⚠️ 大模型未返回预测结果"))}catch(R){R instanceof Error&&R.name==="AbortError"?console.log("🚫 心理分析请求已被取消"):(console.error("心理分析失败:",R),m(null))}finally{T.current[G]&&v(!1),E.current===Q&&(E.current=null)}},[]),U=q.useCallback(()=>{if(!e.current||!i.current)return;d(!0);const re=yR[e.current.getState().config.difficulty];setTimeout(()=>{if(!e.current||!i.current){d(!1);return}const I=e.current.getBoard().getBoard(),K=i.current.getNextMove(I);K&&(e.current.makeMove(K),x()),d(!1)},re)},[x]),V=q.useCallback(re=>{if(!e.current||f)return!1;const I=e.current.makeMove(re);if(I){x();const K=e.current.getStatus(),Q=K===ft.BlackWin||K===ft.WhiteWin||K===ft.Draw;O(),!Q&&e.current.getCurrentPlayer()===Je.White&&U()}return I},[x,f,O,U]),k=q.useCallback((re=2)=>{if(!e.current)return!1;const I=e.current.undo(re);return I&&x(),I},[x]),z=q.useCallback(()=>{e.current&&(e.current.restartGame(),x(),m(null),v(!1),E.current&&(console.log("🚫 重新开始游戏，取消正在进行的请求"),E.current.abort(),E.current=null),y.current&&(y.current.pause(),y.current=null),b.current=!1)},[x]),Z=q.useCallback(()=>{e.current&&(e.current.pauseGame(),x())},[x]),D=q.useCallback(()=>{e.current&&(e.current.resumeGame(),x())},[x]),N=q.useCallback(()=>{e.current&&(e.current.resign(),x())},[x]),j=q.useCallback(()=>e.current?.getRemainingUndoCount()||0,[]),ae=l?.status!==ft.NotStarted,de=l?.status===ft.Playing,_e=l?.status===ft.BlackWin||l?.status===ft.WhiteWin||l?.status===ft.Draw;return{gameState:l,gameManager:e.current,startGame:_,makeMove:V,undo:k,restart:z,pause:Z,resume:D,resign:N,getRemainingUndoCount:j,isGameStarted:ae,isGamePlaying:de,isGameOver:_e,isAIThinking:f,psychologyPrediction:p,isAnalyzing:g}}var si=(s=>(s.PlaceStone="place",s.Win="win",s.Lose="lose",s.PredictionHit="hit",s.PredictionMiss="miss",s.Click="click",s.Undo="undo",s))(si||{});class wR{audioContext=null;enabled=!0;volume=.5;sounds=new Map;ttsEnabled=!0;constructor(){this.initAudioContext()}initAudioContext(){try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioContext=new e)}catch(e){console.warn("AudioContext初始化失败，音效将被禁用:",e),this.enabled=!1}}generateTone(e,i,a="sine",l=1){if(!(!this.audioContext||!this.enabled))try{const c=this.audioContext.createOscillator(),f=this.audioContext.createGain();c.connect(f),f.connect(this.audioContext.destination),c.frequency.value=e,c.type=a;const d=this.audioContext.currentTime,p=this.volume*l;f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(p,d+.01),f.gain.exponentialRampToValueAtTime(.01,d+i),c.start(d),c.stop(d+i)}catch(c){console.error("音效播放失败:",c)}}playCompoundSound(e){!this.audioContext||!this.enabled||e.forEach(({freq:i,delay:a,duration:l,type:c="sine",volume:f=1})=>{setTimeout(()=>{this.generateTone(i,l,c,f)},a)})}play(e){if(!(!this.enabled||!this.audioContext))switch(this.audioContext.state==="suspended"&&this.audioContext.resume(),e){case"place":this.generateTone(200,.1,"sine",.6);break;case"win":this.playCompoundSound([{freq:523,delay:0,duration:.15},{freq:659,delay:100,duration:.15},{freq:784,delay:200,duration:.3}]);break;case"lose":this.playCompoundSound([{freq:400,delay:0,duration:.15},{freq:300,delay:100,duration:.15},{freq:200,delay:200,duration:.3}]);break;case"hit":this.playCompoundSound([{freq:800,delay:0,duration:.08,type:"triangle"},{freq:1e3,delay:80,duration:.08,type:"triangle"}]);break;case"miss":this.playCompoundSound([{freq:600,delay:0,duration:.12,type:"triangle"},{freq:900,delay:60,duration:.12,type:"triangle"},{freq:1200,delay:120,duration:.15,type:"triangle"}]);break;case"click":this.generateTone(1e3,.05,"square",.3);break;case"undo":this.playCompoundSound([{freq:600,delay:0,duration:.06},{freq:500,delay:50,duration:.06}]);break;default:console.warn("未知的音效类型:",e)}}enable(){this.enabled=!0,this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume()}disable(){this.enabled=!1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),this.enabled}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}getVolume(){return this.volume}isEnabled(){return this.enabled}getBestChineseVoice(){const e=window.speechSynthesis.getVoices();if(e.length===0)return console.warn("⚠️ 语音列表为空，可能还在加载中"),null;console.log("📢 可用语音数量:",e.length);const i=[a=>a.lang.includes("zh")&&a.name.includes("Female")&&!a.localService,a=>a.lang.includes("zh")&&(a.name.includes("女")||a.name.includes("Xiaoxiao")||a.name.includes("Xiaoyi")),a=>a.lang.includes("zh")&&a.name.includes("Female"),a=>a.lang.includes("zh")&&(a.name.toLowerCase().includes("female")||a.name.includes("女")),a=>a.lang.includes("zh"),a=>a.lang.startsWith("zh-")];for(const a of i){const l=e.find(a);if(l)return console.log("✅ 选择语音:",l.name,"语言:",l.lang),l}return console.warn("⚠️ 未找到合适的中文语音，使用默认语音"),e[0]||null}speakText(e,i){if(!this.ttsEnabled){console.log("🔇 TTS已禁用");return}if(!("speechSynthesis"in window)){console.warn("❌ 浏览器不支持语音合成");return}try{window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(e),l=this.getBestChineseVoice();l&&(a.voice=l,console.log("🎵 使用语音引擎:",l.name)),a.rate=i?.rate||1,a.pitch=i?.pitch||1.1,a.volume=i?.volume||.9,a.lang=i?.lang||"zh-CN",a.onstart=()=>{console.log("🔊 开始播放心理战语音:",e)},a.onend=()=>{console.log("✅ 心理战语音播放完成")},a.onerror=c=>{console.error("❌ 语音播放失败:",c.error)},window.speechSynthesis.speak(a),console.log("🎤 TTS播放文本:",e)}catch(a){console.error("❌ TTS播放失败:",a)}}preloadVoices(){return new Promise(e=>{if(!("speechSynthesis"in window)){e();return}const i=window.speechSynthesis.getVoices();if(i.length>0){console.log("✅ 语音已加载:",i.length,"个"),e();return}window.speechSynthesis.onvoiceschanged=()=>{const a=window.speechSynthesis.getVoices();console.log("✅ 语音加载完成:",a.length,"个"),e()},setTimeout(()=>{console.warn("⚠️ 语音加载超时"),e()},3e3)})}stopSpeaking(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}enableTTS(){this.ttsEnabled=!0}disableTTS(){this.ttsEnabled=!1,this.stopSpeaking()}toggleTTS(){return this.ttsEnabled=!this.ttsEnabled,this.ttsEnabled||this.stopSpeaking(),this.ttsEnabled}isTTSEnabled(){return this.ttsEnabled}}const Xn=new wR;function RR(){const s=al(),i=ya().state?.difficulty||Rt.Medium,{gameState:a,startGame:l,makeMove:c,undo:f,restart:d,resign:p,getRemainingUndoCount:m,isGamePlaying:g,isGameOver:v,isAIThinking:y,psychologyPrediction:E,isAnalyzing:b}=Ex(Rt.Easy),[T,x]=q.useState(0),[_,L]=q.useState(null),[O,U]=q.useState([]),[V,k]=q.useState(0);q.useEffect(()=>{Xn.preloadVoices().then(()=>{console.log("🎵 语音引擎预加载完成")})},[]),q.useEffect(()=>{l()},[l]),q.useEffect(()=>{if(!g||!a?.startTime){k(a?.stats.duration||0);return}const de=setInterval(()=>{if(a?.startTime){const _e=Math.floor((Date.now()-a.startTime)/1e3);k(_e)}},1e3);return()=>clearInterval(de)},[g,a?.startTime,a?.stats.duration]),q.useEffect(()=>{E&&E.predictedMoves.length>0&&U(E.predictedMoves.map(de=>de.position))},[E]),q.useEffect(()=>{a?.status===ft.BlackWin?setTimeout(()=>Xn.play(si.Win),300):a?.status===ft.WhiteWin&&setTimeout(()=>Xn.play(si.Lose),300)},[a?.status]);const z=q.useCallback(de=>{if(!g)return;const _e=`${String.fromCharCode(65+de.col)}${de.row+1}`,re=O.includes(_e);c(de)&&(Xn.play(si.PlaceStone),O.length>0&&(re?(L("hit"),Xn.play(si.PredictionHit)):(L("miss"),x(K=>K+10),Xn.play(si.PredictionMiss))))},[g,O,c,x]),Z=()=>{s("/home")},D=()=>{d(),l(),x(0),U([]),L(null),k(0)},N=()=>{f(2),Xn.play(si.Undo)},j=()=>{window.confirm("确定要认输吗？")&&p()};if(!a)return P.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:P.jsx("div",{className:"text-white text-xl",children:"加载中..."})});const ae=m();return P.jsxs("div",{className:"min-h-screen bg-space-darkest relative overflow-hidden",children:[P.jsx(yx,{}),P.jsx(Sx,{type:_,onComplete:()=>{L(null)}}),P.jsx(Mx,{isVisible:v,isPlayerWin:a?.status===ft.BlackWin}),P.jsxs("div",{className:"relative z-10 container mx-auto px-2 sm:px-4 py-4 sm:py-8",children:[P.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 gap-3",children:[P.jsx("button",{onClick:Z,className:"px-3 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all text-sm sm:text-base",children:"← 返回主页"}),P.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[P.jsx("div",{className:"text-xl sm:text-2xl font-bold text-gradient",children:"心战五子棋"}),P.jsxs("div",{className:"px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan rounded-lg",children:[P.jsxs("span",{className:"text-yellow-400 font-bold text-sm sm:text-lg",children:["✨ ",T]}),P.jsx("span",{className:"text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2",children:"智慧点"})]})]}),P.jsx("div",{className:"hidden sm:block w-24"})," "]}),P.jsxs("div",{className:"flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8 items-start justify-center",children:[P.jsx("div",{className:"lg:order-1 order-2 flex-shrink-0 w-full lg:w-auto",children:P.jsxs("div",{className:"glass-effect rounded-xl p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-6 w-full lg:w-80",children:[P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2",children:"当前回合"}),P.jsxs("div",{className:"flex items-center justify-center gap-2 sm:gap-3",children:[P.jsx("div",{className:`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${a.currentPlayer===Je.Black?"bg-piece-black ring-2 sm:ring-4 ring-neon-cyan":"bg-piece-black opacity-30"}`}),P.jsx("div",{className:"text-base sm:text-lg font-bold text-white",children:"VS"}),P.jsx("div",{className:`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${a.currentPlayer===Je.White?"bg-piece-white ring-2 sm:ring-4 ring-neon-purple":"bg-piece-white"}`})]}),P.jsx("div",{className:"mt-1 sm:mt-2 text-neon-cyan font-semibold text-sm sm:text-base",children:y?P.jsx("span",{className:"flex items-center justify-center gap-2",children:P.jsx("span",{className:"animate-pulse",children:"🤔 AI思考中..."})}):a.currentPlayer===Je.Black?"黑棋 (你)":"白棋 (AI)"})]}),P.jsx("div",{className:"border-t border-gray-700 pt-2 sm:pt-4",children:P.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm",children:[P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"text-gray-400",children:"你的步数"}),P.jsx("div",{className:"text-white font-bold text-lg sm:text-xl mt-0.5 sm:mt-1",children:a.moves.filter(de=>de.player===Je.Black).length})]}),P.jsxs("div",{className:"text-center",children:[P.jsx("div",{className:"text-gray-400",children:"用时"}),P.jsxs("div",{className:"text-white font-bold text-lg sm:text-xl mt-0.5 sm:mt-1",children:[Math.floor(V/60),":",String(V%60).padStart(2,"0")]})]})]})}),v&&P.jsx("div",{className:"border-t border-gray-700 pt-4",children:P.jsxs("div",{className:"text-center p-4 rounded-lg bg-neon-purple/20 border border-neon-purple",children:[P.jsxs("div",{className:"text-2xl font-bold mb-2",children:[a.status===ft.BlackWin&&"🎉 黑棋获胜！",a.status===ft.WhiteWin&&"💔 白棋获胜！",a.status===ft.Draw&&"🤝 平局！"]}),P.jsxs("div",{className:"text-sm text-gray-300",children:[a.status===ft.BlackWin&&"恭喜你战胜了AI！",a.status===ft.WhiteWin&&"AI略胜一筹，再接再厉！",a.status===ft.Draw&&"棋逢对手！"]})]})}),P.jsxs("div",{className:"border-t border-gray-700 pt-2 sm:pt-4 space-y-2 sm:space-y-3",children:[P.jsx("button",{onClick:D,className:"w-full px-3 py-2 sm:px-4 sm:py-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-lg font-semibold transition-all hover:scale-105 text-sm sm:text-base",children:"🔄 重新开始"}),P.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-3",children:[P.jsxs("button",{onClick:N,disabled:ae===0||!g||a.stats.totalMoves<2,className:"px-2 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-700 disabled:hover:text-gray-300 text-xs sm:text-base",children:["↶ 悔棋 (",ae,")"]}),P.jsx("button",{onClick:j,disabled:!g,className:"px-2 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-base",children:"🏳️ 认输"})]})]}),P.jsxs("div",{className:"border-t border-gray-700 pt-4 text-center text-sm text-gray-400",children:["难度:"," ",P.jsxs("span",{className:"text-neon-purple font-semibold",children:[i===Rt.Easy&&"😊 简单",i===Rt.Medium&&"🤔 中等",i===Rt.Hard&&"😈 困难",i===Rt.Master&&"🔥 大师"]})]})]})}),P.jsx("div",{className:"lg:order-2 order-1 flex-shrink-0 w-full lg:w-auto flex justify-center",children:P.jsxs("div",{className:"glass-effect rounded-xl p-2 sm:p-4 lg:p-6 w-full max-w-full overflow-x-auto",children:[P.jsx(_x,{board:a.board,onCellClick:z,winningLine:a.winningLine,lastMove:a.moves.length>0?a.moves[a.moves.length-1].position:null,disabled:!g||y||a.currentPlayer!==Je.Black,predictedPositions:O}),y&&P.jsx("div",{className:"mt-2 sm:mt-4 text-center",children:P.jsxs("div",{className:"inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-neon-purple/20 border border-neon-purple rounded-lg",children:[P.jsx("div",{className:"w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-purple rounded-full animate-ping"}),P.jsx("span",{className:"text-neon-purple font-semibold text-xs sm:text-base",children:"AI正在思考最佳策略..."})]})})]})}),P.jsx("div",{className:"lg:order-3 order-3 flex-shrink-0 w-full lg:w-auto",children:P.jsx("div",{className:"w-full lg:w-80",children:P.jsx(xx,{prediction:E,isAnalyzing:b})})})]}),P.jsx("div",{className:"mt-4 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm",children:P.jsx("p",{children:"五子连珠即可获胜 · 黑棋先行 · AI会猜测你的意图"})})]})]})}function CR(){const s=al(),i=ya().state?.difficulty||Rt.Medium,{gameState:a,startGame:l,makeMove:c,undo:f,restart:d,resign:p,getRemainingUndoCount:m,isGamePlaying:g,isGameOver:v,isAIThinking:y,psychologyPrediction:E,isAnalyzing:b}=Ex(Rt.Easy),[T,x]=q.useState(0),[_,L]=q.useState(null),[O,U]=q.useState([]),[V,k]=q.useState(0),[z,Z]=q.useState(!1);q.useEffect(()=>{Xn.preloadVoices().then(()=>{console.log("🎵 语音引擎预加载完成")})},[]),q.useEffect(()=>{l()},[l]),q.useEffect(()=>{if(!g||!a?.startTime){k(a?.stats.duration||0);return}const re=setInterval(()=>{if(a?.startTime){const I=Math.floor((Date.now()-a.startTime)/1e3);k(I)}},1e3);return()=>clearInterval(re)},[g,a?.startTime,a?.stats.duration]),q.useEffect(()=>{E&&E.predictedMoves.length>0&&U(E.predictedMoves.map(re=>re.position))},[E]),q.useEffect(()=>{a?.status===ft.BlackWin?setTimeout(()=>Xn.play(si.Win),300):a?.status===ft.WhiteWin&&setTimeout(()=>Xn.play(si.Lose),300)},[a?.status]);const D=q.useCallback(re=>{if(!g)return;const I=`${String.fromCharCode(65+re.col)}${re.row+1}`,K=O.includes(I);c(re)&&(Xn.play(si.PlaceStone),O.length>0&&(K?(L("hit"),Xn.play(si.PredictionHit)):(L("miss"),x(G=>G+10),Xn.play(si.PredictionMiss))))},[g,O,c,x]),N=()=>{s("/home")},j=()=>{d(),l(),x(0),U([]),L(null),k(0)},ae=()=>{f(2),Xn.play(si.Undo)},de=()=>{window.confirm("确定要认输吗？")&&p()};if(!a)return P.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:P.jsx("div",{className:"text-white text-xl",children:"加载中..."})});const _e=m();return P.jsxs("div",{className:"min-h-screen bg-space-darkest relative overflow-hidden",children:[P.jsx(yx,{}),P.jsx(Sx,{type:_,onComplete:()=>{L(null)}}),P.jsx(Mx,{isVisible:v,isPlayerWin:a?.status===ft.BlackWin}),P.jsxs("div",{className:"relative z-10 px-3 py-2",children:[P.jsxs("div",{className:"flex justify-between items-center mb-3",children:[P.jsx("button",{onClick:N,className:"px-3 py-2 bg-space-dark border border-gray-700 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all text-sm",children:"← 返回"}),P.jsx("div",{className:"text-lg font-bold text-gradient",children:"心战五子棋"}),P.jsx("div",{className:"px-3 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan rounded-lg",children:P.jsxs("span",{className:"text-yellow-400 font-bold text-sm",children:["✨ ",T]})})]}),P.jsxs("div",{className:"glass-effect rounded-xl p-3 mb-3",children:[P.jsxs("div",{className:"flex items-center justify-between mb-3",children:[P.jsxs("div",{className:"flex items-center gap-2",children:[P.jsx("div",{className:`w-6 h-6 rounded-full ${a.currentPlayer===Je.Black?"bg-piece-black ring-2 ring-neon-cyan":"bg-piece-black opacity-30"}`}),P.jsx("div",{className:"text-white font-bold",children:"VS"}),P.jsx("div",{className:`w-6 h-6 rounded-full ${a.currentPlayer===Je.White?"bg-piece-white ring-2 ring-neon-purple":"bg-piece-white"}`})]}),P.jsx("div",{className:"text-center",children:P.jsx("div",{className:"text-neon-cyan font-semibold text-sm",children:y?P.jsx("span",{className:"flex items-center gap-1",children:P.jsx("span",{className:"animate-pulse",children:"🤔 AI思考中..."})}):a.currentPlayer===Je.Black?"黑棋 (你)":"白棋 (AI)"})}),P.jsxs("div",{className:"text-right text-xs",children:[P.jsx("div",{className:"text-gray-400",children:"步数"}),P.jsx("div",{className:"text-white font-bold",children:a.moves.filter(re=>re.player===Je.Black).length}),P.jsx("div",{className:"text-gray-400 mt-1",children:"用时"}),P.jsxs("div",{className:"text-white font-bold",children:[Math.floor(V/60),":",String(V%60).padStart(2,"0")]})]})]}),v&&P.jsxs("div",{className:"text-center p-3 rounded-lg bg-neon-purple/20 border border-neon-purple mb-3",children:[P.jsxs("div",{className:"text-lg font-bold mb-1",children:[a.status===ft.BlackWin&&"🎉 黑棋获胜！",a.status===ft.WhiteWin&&"💔 白棋获胜！",a.status===ft.Draw&&"🤝 平局！"]}),P.jsxs("div",{className:"text-xs text-gray-300",children:[a.status===ft.BlackWin&&"恭喜你战胜了AI！",a.status===ft.WhiteWin&&"AI略胜一筹，再接再厉！",a.status===ft.Draw&&"棋逢对手！"]})]}),P.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[P.jsx("button",{onClick:j,className:"px-3 py-2 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-lg font-semibold transition-all text-sm",children:"🔄 重新开始"}),P.jsxs("button",{onClick:ae,disabled:_e===0||!g||a.stats.totalMoves<2,className:"px-3 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed text-sm",children:["↶ 悔棋 (",_e,")"]})]}),P.jsx("div",{className:"mt-2",children:P.jsx("button",{onClick:de,disabled:!g,className:"w-full px-3 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed text-sm",children:"🏳️ 认输"})}),P.jsxs("div",{className:"mt-3 text-center text-xs text-gray-400",children:["难度:"," ",P.jsxs("span",{className:"text-neon-purple font-semibold",children:[i===Rt.Easy&&"😊 简单",i===Rt.Medium&&"🤔 中等",i===Rt.Hard&&"😈 困难",i===Rt.Master&&"🔥 大师"]})]})]}),P.jsx("div",{className:"flex justify-center mb-3",children:P.jsxs("div",{className:"glass-effect rounded-xl p-2 w-full",children:[P.jsx(_x,{board:a.board,onCellClick:D,winningLine:a.winningLine,lastMove:a.moves.length>0?a.moves[a.moves.length-1].position:null,disabled:!g||y||a.currentPlayer!==Je.Black,predictedPositions:O}),y&&P.jsx("div",{className:"mt-2 text-center",children:P.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-2 bg-neon-purple/20 border border-neon-purple rounded-lg",children:[P.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),P.jsx("span",{className:"text-neon-purple font-semibold text-sm",children:"AI正在思考最佳策略..."})]})})]})}),P.jsxs("div",{className:"glass-effect rounded-xl p-3",children:[P.jsxs("div",{className:"flex items-center justify-between mb-3",children:[P.jsx("h3",{className:"text-white font-bold text-sm",children:"🧠 心理预测"}),P.jsx("button",{onClick:()=>Z(!z),className:"px-3 py-1 bg-neon-purple/20 border border-neon-purple rounded-lg text-neon-purple text-xs hover:bg-neon-purple/30 transition-all",children:z?"隐藏":"展开"})]}),z&&P.jsx(xx,{prediction:E,isAnalyzing:b})]}),P.jsx("div",{className:"mt-3 text-center text-gray-400 text-xs",children:P.jsx("p",{children:"五子连珠即可获胜 · 黑棋先行 · AI会猜测你的意图"})})]})]})}function DR(){const s=navigator.userAgent,e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,i=window.innerWidth<=768,a="ontouchstart"in window||navigator.maxTouchPoints>0;return e.test(s)||i&&a}function NR(){const[s,e]=q.useState(null);return q.useEffect(()=>{const i=DR();e(i)},[]),s===null?P.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:P.jsx("div",{className:"text-white text-xl",children:"检测设备类型中..."})}):s?P.jsx(CR,{}):P.jsx(RR,{})}function UR(){return P.jsxs(CM,{children:[P.jsx(qc,{path:"/",element:P.jsx(hR,{})}),P.jsx(qc,{path:"/home",element:P.jsx(gR,{})}),P.jsx(qc,{path:"/game",element:P.jsx(NR,{})})]})}FS.createRoot(document.getElementById("root")).render(P.jsx(q.StrictMode,{children:P.jsx(JM,{children:P.jsx(UR,{})})}))});export default LR();
