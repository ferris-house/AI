var ES=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var Lw=ES((Pw,cl)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Eh={exports:{}},Bo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function bS(){if(ev)return Bo;ev=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:f,ref:l!==void 0?l:null,props:c}}return Bo.Fragment=e,Bo.jsx=i,Bo.jsxs=i,Bo}var tv;function TS(){return tv||(tv=1,Eh.exports=bS()),Eh.exports}var Y=TS(),bh={exports:{}},ut={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function AS(){if(nv)return ut;nv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),y=Symbol.iterator;function M(E){return E===null||typeof E!="object"?null:(E=y&&E[y]||E["@@iterator"],typeof E=="function"?E:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function _(E,W,le){this.props=E,this.context=W,this.refs=S,this.updater=le||b}_.prototype.isReactComponent={},_.prototype.setState=function(E,W){if(typeof E!="object"&&typeof E!="function"&&E!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,E,W,"setState")},_.prototype.forceUpdate=function(E){this.updater.enqueueForceUpdate(this,E,"forceUpdate")};function L(){}L.prototype=_.prototype;function O(E,W,le){this.props=E,this.context=W,this.refs=S,this.updater=le||b}var N=O.prototype=new L;N.constructor=O,R(N,_.prototype),N.isPureReactComponent=!0;var G=Array.isArray;function k(){}var z={H:null,A:null,T:null,S:null},Z=Object.prototype.hasOwnProperty;function U(E,W,le){var me=le.ref;return{$$typeof:s,type:E,key:W,ref:me!==void 0?me:null,props:le}}function D(E,W){return U(E.type,W,E.props)}function w(E){return typeof E=="object"&&E!==null&&E.$$typeof===s}function F(E){var W={"=":"=0",":":"=2"};return"$"+E.replace(/[=:]/g,function(le){return W[le]})}var ee=/\/+/g;function ce(E,W){return typeof E=="object"&&E!==null&&E.key!=null?F(""+E.key):W.toString(36)}function ae(E){switch(E.status){case"fulfilled":return E.value;case"rejected":throw E.reason;default:switch(typeof E.status=="string"?E.then(k,k):(E.status="pending",E.then(function(W){E.status==="pending"&&(E.status="fulfilled",E.value=W)},function(W){E.status==="pending"&&(E.status="rejected",E.reason=W)})),E.status){case"fulfilled":return E.value;case"rejected":throw E.reason}}throw E}function P(E,W,le,me,ge){var X=typeof E;(X==="undefined"||X==="boolean")&&(E=null);var $=!1;if(E===null)$=!0;else switch(X){case"bigint":case"string":case"number":$=!0;break;case"object":switch(E.$$typeof){case s:case e:$=!0;break;case g:return $=E._init,P($(E._payload),W,le,me,ge)}}if($)return ge=ge(E),$=me===""?"."+ce(E,0):me,G(ge)?(le="",$!=null&&(le=$.replace(ee,"$&/")+"/"),P(ge,W,le,"",function(Le){return Le})):ge!=null&&(w(ge)&&(ge=D(ge,le+(ge.key==null||E&&E.key===ge.key?"":(""+ge.key).replace(ee,"$&/")+"/")+$)),W.push(ge)),1;$=0;var ye=me===""?".":me+":";if(G(E))for(var Re=0;Re<E.length;Re++)me=E[Re],X=ye+ce(me,Re),$+=P(me,W,le,X,ge);else if(Re=M(E),typeof Re=="function")for(E=Re.call(E),Re=0;!(me=E.next()).done;)me=me.value,X=ye+ce(me,Re++),$+=P(me,W,le,X,ge);else if(X==="object"){if(typeof E.then=="function")return P(ae(E),W,le,me,ge);throw W=String(E),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(E).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return $}function q(E,W,le){if(E==null)return E;var me=[],ge=0;return P(E,me,"","",function(X){return W.call(le,X,ge++)}),me}function J(E){if(E._status===-1){var W=E._result;W=W(),W.then(function(le){(E._status===0||E._status===-1)&&(E._status=1,E._result=le)},function(le){(E._status===0||E._status===-1)&&(E._status=2,E._result=le)}),E._status===-1&&(E._status=0,E._result=W)}if(E._status===1)return E._result.default;throw E._result}var Ee=typeof reportError=="function"?reportError:function(E){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof E=="object"&&E!==null&&typeof E.message=="string"?String(E.message):String(E),error:E});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",E);return}console.error(E)},B={map:q,forEach:function(E,W,le){q(E,function(){W.apply(this,arguments)},le)},count:function(E){var W=0;return q(E,function(){W++}),W},toArray:function(E){return q(E,function(W){return W})||[]},only:function(E){if(!w(E))throw Error("React.Children.only expected to receive a single React element child.");return E}};return ut.Activity=v,ut.Children=B,ut.Component=_,ut.Fragment=i,ut.Profiler=l,ut.PureComponent=O,ut.StrictMode=r,ut.Suspense=m,ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ut.__COMPILER_RUNTIME={__proto__:null,c:function(E){return z.H.useMemoCache(E)}},ut.cache=function(E){return function(){return E.apply(null,arguments)}},ut.cacheSignal=function(){return null},ut.cloneElement=function(E,W,le){if(E==null)throw Error("The argument must be a React element, but you passed "+E+".");var me=R({},E.props),ge=E.key;if(W!=null)for(X in W.key!==void 0&&(ge=""+W.key),W)!Z.call(W,X)||X==="key"||X==="__self"||X==="__source"||X==="ref"&&W.ref===void 0||(me[X]=W[X]);var X=arguments.length-2;if(X===1)me.children=le;else if(1<X){for(var $=Array(X),ye=0;ye<X;ye++)$[ye]=arguments[ye+2];me.children=$}return U(E.type,ge,me)},ut.createContext=function(E){return E={$$typeof:f,_currentValue:E,_currentValue2:E,_threadCount:0,Provider:null,Consumer:null},E.Provider=E,E.Consumer={$$typeof:c,_context:E},E},ut.createElement=function(E,W,le){var me,ge={},X=null;if(W!=null)for(me in W.key!==void 0&&(X=""+W.key),W)Z.call(W,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(ge[me]=W[me]);var $=arguments.length-2;if($===1)ge.children=le;else if(1<$){for(var ye=Array($),Re=0;Re<$;Re++)ye[Re]=arguments[Re+2];ge.children=ye}if(E&&E.defaultProps)for(me in $=E.defaultProps,$)ge[me]===void 0&&(ge[me]=$[me]);return U(E,X,ge)},ut.createRef=function(){return{current:null}},ut.forwardRef=function(E){return{$$typeof:h,render:E}},ut.isValidElement=w,ut.lazy=function(E){return{$$typeof:g,_payload:{_status:-1,_result:E},_init:J}},ut.memo=function(E,W){return{$$typeof:p,type:E,compare:W===void 0?null:W}},ut.startTransition=function(E){var W=z.T,le={};z.T=le;try{var me=E(),ge=z.S;ge!==null&&ge(le,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(k,Ee)}catch(X){Ee(X)}finally{W!==null&&le.types!==null&&(W.types=le.types),z.T=W}},ut.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ut.use=function(E){return z.H.use(E)},ut.useActionState=function(E,W,le){return z.H.useActionState(E,W,le)},ut.useCallback=function(E,W){return z.H.useCallback(E,W)},ut.useContext=function(E){return z.H.useContext(E)},ut.useDebugValue=function(){},ut.useDeferredValue=function(E,W){return z.H.useDeferredValue(E,W)},ut.useEffect=function(E,W){return z.H.useEffect(E,W)},ut.useEffectEvent=function(E){return z.H.useEffectEvent(E)},ut.useId=function(){return z.H.useId()},ut.useImperativeHandle=function(E,W,le){return z.H.useImperativeHandle(E,W,le)},ut.useInsertionEffect=function(E,W){return z.H.useInsertionEffect(E,W)},ut.useLayoutEffect=function(E,W){return z.H.useLayoutEffect(E,W)},ut.useMemo=function(E,W){return z.H.useMemo(E,W)},ut.useOptimistic=function(E,W){return z.H.useOptimistic(E,W)},ut.useReducer=function(E,W,le){return z.H.useReducer(E,W,le)},ut.useRef=function(E){return z.H.useRef(E)},ut.useState=function(E){return z.H.useState(E)},ut.useSyncExternalStore=function(E,W,le){return z.H.useSyncExternalStore(E,W,le)},ut.useTransition=function(){return z.H.useTransition()},ut.version="19.2.0",ut}var iv;function ip(){return iv||(iv=1,bh.exports=AS()),bh.exports}var Q=ip(),Th={exports:{}},Fo={},Ah={exports:{}},Rh={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function RS(){return av||(av=1,(function(s){function e(P,q){var J=P.length;P.push(q);e:for(;0<J;){var Ee=J-1>>>1,B=P[Ee];if(0<l(B,q))P[Ee]=q,P[J]=B,J=Ee;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var q=P[0],J=P.pop();if(J!==q){P[0]=J;e:for(var Ee=0,B=P.length,E=B>>>1;Ee<E;){var W=2*(Ee+1)-1,le=P[W],me=W+1,ge=P[me];if(0>l(le,J))me<B&&0>l(ge,le)?(P[Ee]=ge,P[me]=J,Ee=me):(P[Ee]=le,P[W]=J,Ee=W);else if(me<B&&0>l(ge,J))P[Ee]=ge,P[me]=J,Ee=me;else break e}}return q}function l(P,q){var J=P.sortIndex-q.sortIndex;return J!==0?J:P.id-q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,h=f.now();s.unstable_now=function(){return f.now()-h}}var m=[],p=[],g=1,v=null,y=3,M=!1,b=!1,R=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function N(P){for(var q=i(p);q!==null;){if(q.callback===null)r(p);else if(q.startTime<=P)r(p),q.sortIndex=q.expirationTime,e(m,q);else break;q=i(p)}}function G(P){if(R=!1,N(P),!b)if(i(m)!==null)b=!0,k||(k=!0,F());else{var q=i(p);q!==null&&ae(G,q.startTime-P)}}var k=!1,z=-1,Z=5,U=-1;function D(){return S?!0:!(s.unstable_now()-U<Z)}function w(){if(S=!1,k){var P=s.unstable_now();U=P;var q=!0;try{e:{b=!1,R&&(R=!1,L(z),z=-1),M=!0;var J=y;try{t:{for(N(P),v=i(m);v!==null&&!(v.expirationTime>P&&D());){var Ee=v.callback;if(typeof Ee=="function"){v.callback=null,y=v.priorityLevel;var B=Ee(v.expirationTime<=P);if(P=s.unstable_now(),typeof B=="function"){v.callback=B,N(P),q=!0;break t}v===i(m)&&r(m),N(P)}else r(m);v=i(m)}if(v!==null)q=!0;else{var E=i(p);E!==null&&ae(G,E.startTime-P),q=!1}}break e}finally{v=null,y=J,M=!1}q=void 0}}finally{q?F():k=!1}}}var F;if(typeof O=="function")F=function(){O(w)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,ce=ee.port2;ee.port1.onmessage=w,F=function(){ce.postMessage(null)}}else F=function(){_(w,0)};function ae(P,q){z=_(function(){P(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Z=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return y},s.unstable_next=function(P){switch(y){case 1:case 2:case 3:var q=3;break;default:q=y}var J=y;y=q;try{return P()}finally{y=J}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(P,q){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var J=y;y=P;try{return q()}finally{y=J}},s.unstable_scheduleCallback=function(P,q,J){var Ee=s.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?Ee+J:Ee):J=Ee,P){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=J+B,P={id:g++,callback:q,priorityLevel:P,startTime:J,expirationTime:B,sortIndex:-1},J>Ee?(P.sortIndex=J,e(p,P),i(m)===null&&P===i(p)&&(R?(L(z),z=-1):R=!0,ae(G,J-Ee))):(P.sortIndex=B,e(m,P),b||M||(b=!0,k||(k=!0,F()))),P},s.unstable_shouldYield=D,s.unstable_wrapCallback=function(P){var q=y;return function(){var J=y;y=q;try{return P.apply(this,arguments)}finally{y=J}}}})(Rh)),Rh}var rv;function wS(){return rv||(rv=1,Ah.exports=RS()),Ah.exports}var wh={exports:{}},Un={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sv;function CS(){if(sv)return Un;sv=1;var s=ip();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:m,containerInfo:p,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Un.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},Un.flushSync=function(m){var p=f.T,g=r.p;try{if(f.T=null,r.p=2,m)return m()}finally{f.T=p,r.p=g,r.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:v,integrity:y,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:v,integrity:y,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,v=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Un.requestFormReset=function(m){r.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,g){return f.H.useFormState(m,p,g)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.0",Un}var ov;function DS(){if(ov)return wh.exports;ov=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),wh.exports=CS(),wh.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lv;function US(){if(lv)return Fo;lv=1;var s=wS(),e=ip(),i=DS();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var d=u.alternate;if(d===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===d.child){for(d=u.child;d;){if(d===a)return m(u),t;if(d===o)return m(u),n;d=d.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=d;else{for(var x=!1,A=u.child;A;){if(A===a){x=!0,a=u,o=d;break}if(A===o){x=!0,o=u,a=d;break}A=A.sibling}if(!x){for(A=d.child;A;){if(A===a){x=!0,a=d,o=u;break}if(A===o){x=!0,o=d,a=u;break}A=A.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,y=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),O=Symbol.for("react.context"),N=Symbol.for("react.forward_ref"),G=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),Z=Symbol.for("react.lazy"),U=Symbol.for("react.activity"),D=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function F(t){return t===null||typeof t!="object"?null:(t=w&&t[w]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Symbol.for("react.client.reference");function ce(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ee?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case G:return"Suspense";case k:return"SuspenseList";case U:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case O:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case N:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ce(t.type)||"Memo";case Z:n=t._payload,t=t._init;try{return ce(t(n))}catch{}}return null}var ae=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},Ee=[],B=-1;function E(t){return{current:t}}function W(t){0>B||(t.current=Ee[B],Ee[B]=null,B--)}function le(t,n){B++,Ee[B]=t.current,t.current=n}var me=E(null),ge=E(null),X=E(null),$=E(null);function ye(t,n){switch(le(X,n),le(ge,t),le(me,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?E0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=E0(n),t=b0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}W(me),le(me,t)}function Re(){W(me),W(ge),W(X)}function Le(t){t.memoizedState!==null&&le($,t);var n=me.current,a=b0(n,t.type);n!==a&&(le(ge,t),le(me,a))}function Xe(t){ge.current===t&&(W(me),W(ge)),$.current===t&&(W($),Oo._currentValue=J)}var ft,H;function ke(t){if(ft===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ft=n&&n[1]||"",H=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ft+t+H}var Qe=!1;function Ke(t,n){if(!t||Qe)return"";Qe=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Me=function(){throw Error()};if(Object.defineProperty(Me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Me,[])}catch(pe){var ue=pe}Reflect.construct(t,[],Me)}else{try{Me.call()}catch(pe){ue=pe}t.call(Me.prototype)}}else{try{throw Error()}catch(pe){ue=pe}(Me=t())&&typeof Me.catch=="function"&&Me.catch(function(){})}}catch(pe){if(pe&&ue&&typeof pe.stack=="string")return[pe.stack,ue.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],A=d[1];if(x&&A){var V=x.split(`
`),oe=A.split(`
`);for(u=o=0;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(o===V.length||u===oe.length)for(o=V.length-1,u=oe.length-1;1<=o&&0<=u&&V[o]!==oe[u];)u--;for(;1<=o&&0<=u;o--,u--)if(V[o]!==oe[u]){if(o!==1||u!==1)do if(o--,u--,0>u||V[o]!==oe[u]){var _e=`
`+V[o].replace(" at new "," at ");return t.displayName&&_e.includes("<anonymous>")&&(_e=_e.replace("<anonymous>",t.displayName)),_e}while(1<=o&&0<=u);break}}}finally{Qe=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?ke(a):""}function Be(t,n){switch(t.tag){case 26:case 27:case 5:return ke(t.type);case 16:return ke("Lazy");case 13:return t.child!==n&&n!==null?ke("Suspense Fallback"):ke("Suspense");case 19:return ke("SuspenseList");case 0:case 15:return Ke(t.type,!1);case 11:return Ke(t.type.render,!1);case 1:return Ke(t.type,!0);case 31:return ke("Activity");default:return""}}function yt(t){try{var n="",a=null;do n+=Be(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var He=Object.prototype.hasOwnProperty,rt=s.unstable_scheduleCallback,$t=s.unstable_cancelCallback,Kt=s.unstable_shouldYield,I=s.unstable_requestPaint,T=s.unstable_now,re=s.unstable_getCurrentPriorityLevel,xe=s.unstable_ImmediatePriority,Ae=s.unstable_UserBlockingPriority,ve=s.unstable_NormalPriority,Je=s.unstable_LowPriority,Ue=s.unstable_IdlePriority,je=s.log,$e=s.unstable_setDisableYieldValue,Ce=null,Ne=null;function tt(t){if(typeof je=="function"&&$e(t),Ne&&typeof Ne.setStrictMode=="function")try{Ne.setStrictMode(Ce,t)}catch{}}var Ge=Math.clz32?Math.clz32:K,Pe=Math.log,ht=Math.LN2;function K(t){return t>>>=0,t===0?32:31-(Pe(t)/ht|0)|0}var De=256,Oe=262144,Ve=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,d=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var A=o&134217727;return A!==0?(o=A&~d,o!==0?u=we(o):(x&=A,x!==0?u=we(x):a||(a=A&~t,a!==0&&(u=we(a))))):(A=o&~d,A!==0?u=we(A):x!==0?u=we(x):a||(a=o&~t,a!==0&&(u=we(a)))),u===0?0:n!==0&&n!==u&&(n&d)===0&&(d=u&-u,a=n&-n,d>=a||d===32&&(a&4194048)!==0)?n:u}function We(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ct(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=Ve;return Ve<<=1,(Ve&62914560)===0&&(Ve=4194304),t}function Dt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function On(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function si(t,n,a,o,u,d){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,V=t.expirationTimes,oe=t.hiddenUpdates;for(a=x&~a;0<a;){var _e=31-Ge(a),Me=1<<_e;A[_e]=0,V[_e]=-1;var ue=oe[_e];if(ue!==null)for(oe[_e]=null,_e=0;_e<ue.length;_e++){var pe=ue[_e];pe!==null&&(pe.lane&=-536870913)}a&=~Me}o!==0&&js(t,o,0),d!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=d&~(x&~n))}function js(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ge(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function wi(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Ge(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function zr(t,n){var a=n&-n;return a=(a&42)!==0?1:Br(a),(a&(t.suspendedLanes|n))!==0?0:a}function Br(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ir(){var t=q.p;return t!==0?t:(t=window.event,t===void 0?32:j0(t.type))}function Ys(t,n){var a=q.p;try{return q.p=t,n()}finally{q.p=a}}var Yn=Math.random().toString(36).slice(2),un="__reactFiber$"+Yn,En="__reactProps$"+Yn,_a="__reactContainer$"+Yn,Zs="__reactEvents$"+Yn,gu="__reactListeners$"+Yn,vu="__reactHandles$"+Yn,ul="__reactResources$"+Yn,ar="__reactMarker$"+Yn;function C(t){delete t[un],delete t[En],delete t[Zs],delete t[gu],delete t[vu]}function te(t){var n=t[un];if(n)return n;for(var a=t.parentNode;a;){if(n=a[_a]||a[un]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=U0(t);t!==null;){if(a=t[un])return a;t=U0(t)}return n}t=a,a=t.parentNode}return null}function fe(t){if(t=t[un]||t[_a]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function de(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ie(t){var n=t[ul];return n||(n=t[ul]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Te(t){t[ar]=!0}var Ie=new Set,Ye={};function Fe(t,n){nt(t,n),nt(t+"Capture",n)}function nt(t,n){for(Ye[t]=n,t=0;t<n.length;t++)Ie.add(n[t])}var lt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),it={},_t={};function Bt(t){return He.call(_t,t)?!0:He.call(it,t)?!1:lt.test(t)?_t[t]=!0:(it[t]=!0,!1)}function jt(t,n,a){if(Bt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ft(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function xt(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function Ze(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ut(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,d=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,d.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function bn(t){if(!t._valueTracker){var n=Zt(t)?"checked":"value";t._valueTracker=Ut(t,n,""+t[n])}}function Vi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Zt(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function xn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rr=/[\n"\\]/g;function bt(t){return t.replace(rr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(t,n,a,o,u,d,x,A){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Ze(n)):t.value!==""+Ze(n)&&(t.value=""+Ze(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?gn(t,x,Ze(n)):a!=null?gn(t,x,Ze(a)):o!=null&&t.removeAttribute("value"),u==null&&d!=null&&(t.defaultChecked=!!d),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+Ze(A):t.removeAttribute("name")}function Pn(t,n,a,o,u,d,x,A){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),n!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){bn(t);return}a=a!=null?""+Ze(a):"",n=n!=null?""+Ze(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=A?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),bn(t)}function gn(t,n,a){n==="number"&&xn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function on(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Ze(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Hr(t,n,a){if(n!=null&&(n=""+Ze(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Ze(a):""}function Ci(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(ae(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=Ze(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),bn(t)}function Gr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var _y=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xp(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||_y.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Sp(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&xp(t,u,o)}else for(var d in n)n.hasOwnProperty(d)&&xp(t,d,n[d])}function _u(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),xy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function fl(t){return xy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function ki(){}var yu=null;function xu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function Mp(t){var n=fe(t);if(n&&(t=n.stateNode)){var a=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Dn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+bt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(r(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Vi(o)}break e;case"textarea":Hr(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&on(t,!!a.multiple,n,!1)}}}var Su=!1;function Ep(t,n,a){if(Su)return t(n,a);Su=!0;try{var o=t(n);return o}finally{if(Su=!1,(Vr!==null||kr!==null)&&(Jl(),Vr&&(n=Vr,t=kr,kr=Vr=null,Mp(n),t)))for(n=0;n<t.length;n++)Mp(t[n])}}function Ks(t,n){var a=t.stateNode;if(a===null)return null;var o=a[En]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(Wi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{Mu=!1}var ya=null,Eu=null,hl=null;function bp(){if(hl)return hl;var t,n=Eu,a=n.length,o,u="value"in ya?ya.value:ya.textContent,d=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[d-o];o++);return hl=u.slice(t,1<o?1-o:void 0)}function dl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function pl(){return!0}function Tp(){return!1}function Bn(t){function n(a,o,u,d,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(d):d[A]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?pl:Tp,this.isPropagationStopped=Tp,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ml=Bn(sr),Js=v({},sr,{view:0,detail:0}),Sy=Bn(Js),bu,Tu,$s,gl=v({},Js,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ru,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(bu=t.screenX-$s.screenX,Tu=t.screenY-$s.screenY):Tu=bu=0,$s=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),Ap=Bn(gl),My=v({},gl,{dataTransfer:0}),Ey=Bn(My),by=v({},Js,{relatedTarget:0}),Au=Bn(by),Ty=v({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ay=Bn(Ty),Ry=v({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),wy=Bn(Ry),Cy=v({},sr,{data:0}),Rp=Bn(Cy),Dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Uy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ny={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Ny[t])?!!n[t]:!1}function Ru(){return Ly}var Oy=v({},Js,{key:function(t){if(t.key){var n=Dy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Uy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ru,charCode:function(t){return t.type==="keypress"?dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Py=Bn(Oy),Iy=v({},gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Bn(Iy),zy=v({},Js,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ru}),By=Bn(zy),Fy=v({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hy=Bn(Fy),Gy=v({},gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Bn(Gy),ky=v({},sr,{newState:0,oldState:0}),Wy=Bn(ky),Xy=[9,13,27,32],wu=Wi&&"CompositionEvent"in window,eo=null;Wi&&"documentMode"in document&&(eo=document.documentMode);var qy=Wi&&"TextEvent"in window&&!eo,Cp=Wi&&(!wu||eo&&8<eo&&11>=eo),Dp=" ",Up=!1;function Np(t,n){switch(t){case"keyup":return Xy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lp(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function jy(t,n){switch(t){case"compositionend":return Lp(n);case"keypress":return n.which!==32?null:(Up=!0,Dp);case"textInput":return t=n.data,t===Dp&&Up?null:t;default:return null}}function Yy(t,n){if(Wr)return t==="compositionend"||!wu&&Np(t,n)?(t=bp(),hl=Eu=ya=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Cp&&n.locale!=="ko"?null:n.data;default:return null}}var Zy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Op(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Zy[t.type]:n==="textarea"}function Pp(t,n,a,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=rc(n,"onChange"),0<n.length&&(a=new ml("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var to=null,no=null;function Ky(t){v0(t,0)}function vl(t){var n=de(t);if(Vi(n))return t}function Ip(t,n){if(t==="change")return n}var zp=!1;if(Wi){var Cu;if(Wi){var Du="oninput"in document;if(!Du){var Bp=document.createElement("div");Bp.setAttribute("oninput","return;"),Du=typeof Bp.oninput=="function"}Cu=Du}else Cu=!1;zp=Cu&&(!document.documentMode||9<document.documentMode)}function Fp(){to&&(to.detachEvent("onpropertychange",Hp),no=to=null)}function Hp(t){if(t.propertyName==="value"&&vl(no)){var n=[];Pp(n,no,t,xu(t)),Ep(Ky,n)}}function Qy(t,n,a){t==="focusin"?(Fp(),to=n,no=a,to.attachEvent("onpropertychange",Hp)):t==="focusout"&&Fp()}function Jy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return vl(no)}function $y(t,n){if(t==="click")return vl(n)}function ex(t,n){if(t==="input"||t==="change")return vl(n)}function tx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:tx;function io(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!He.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function Gp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vp(t,n){var a=Gp(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gp(a)}}function kp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?kp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Wp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=xn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=xn(t.document)}return n}function Uu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var nx=Wi&&"documentMode"in document&&11>=document.documentMode,Xr=null,Nu=null,ao=null,Lu=!1;function Xp(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Lu||Xr==null||Xr!==xn(o)||(o=Xr,"selectionStart"in o&&Uu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),ao&&io(ao,o)||(ao=o,o=rc(Nu,"onSelect"),0<o.length&&(n=new ml("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Xr)))}function or(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var qr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Ou={},qp={};Wi&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function lr(t){if(Ou[t])return Ou[t];if(!qr[t])return t;var n=qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qp)return Ou[t]=n[a];return t}var jp=lr("animationend"),Yp=lr("animationiteration"),Zp=lr("animationstart"),ix=lr("transitionrun"),ax=lr("transitionstart"),rx=lr("transitioncancel"),Kp=lr("transitionend"),Qp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function vi(t,n){Qp.set(t,n),Fe(n,[t])}var _l=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},oi=[],jr=0,Iu=0;function yl(){for(var t=jr,n=Iu=jr=0;n<t;){var a=oi[n];oi[n++]=null;var o=oi[n];oi[n++]=null;var u=oi[n];oi[n++]=null;var d=oi[n];if(oi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}d!==0&&Jp(a,u,d)}}function xl(t,n,a,o){oi[jr++]=t,oi[jr++]=n,oi[jr++]=a,oi[jr++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,a,o){return xl(t,n,a,o),Sl(t)}function cr(t,n){return xl(t,null,null,n),Sl(t)}function Jp(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(u=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,u&&n!==null&&(u=31-Ge(a),t=d.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),d):null}function Sl(t){if(50<Ro)throw Ro=0,jf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function sx(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new sx(t,n,a,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Xi(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $p(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Ml(t,n,a,o,u,d){var x=0;if(o=t,typeof t=="function")Bu(t)&&(x=1);else if(typeof t=="string")x=fS(t,a,me.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case U:return t=Kn(31,a,n,u),t.elementType=U,t.lanes=d,t;case R:return ur(a.children,u,d,n);case S:x=8,u|=24;break;case _:return t=Kn(12,a,n,u|2),t.elementType=_,t.lanes=d,t;case G:return t=Kn(13,a,n,u),t.elementType=G,t.lanes=d,t;case k:return t=Kn(19,a,n,u),t.elementType=k,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:x=10;break e;case L:x=9;break e;case N:x=11;break e;case z:x=14;break e;case Z:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=d,n}function ur(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Fu(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function em(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var tm=new WeakMap;function li(t,n){if(typeof t=="object"&&t!==null){var a=tm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:yt(n)},tm.set(t,n),n)}return{value:t,source:n,stack:yt(n)}}var Zr=[],Kr=0,El=null,ro=0,ci=[],ui=0,xa=null,Di=1,Ui="";function qi(t,n){Zr[Kr++]=ro,Zr[Kr++]=El,El=t,ro=n}function nm(t,n,a){ci[ui++]=Di,ci[ui++]=Ui,ci[ui++]=xa,xa=t;var o=Di;t=Ui;var u=32-Ge(o)-1;o&=~(1<<u),a+=1;var d=32-Ge(n)+u;if(30<d){var x=u-u%5;d=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Di=1<<32-Ge(n)+u|a<<u|o,Ui=d+t}else Di=1<<d|a<<u|o,Ui=t}function Gu(t){t.return!==null&&(qi(t,1),nm(t,1,0))}function Vu(t){for(;t===El;)El=Zr[--Kr],Zr[Kr]=null,ro=Zr[--Kr],Zr[Kr]=null;for(;t===xa;)xa=ci[--ui],ci[ui]=null,Ui=ci[--ui],ci[ui]=null,Di=ci[--ui],ci[ui]=null}function im(t,n){ci[ui++]=Di,ci[ui++]=Ui,ci[ui++]=xa,Di=n.id,Ui=n.overflow,xa=t}var Tn=null,Qt=null,wt=!1,Sa=null,fi=!1,ku=Error(r(519));function Ma(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw so(li(n,t)),ku}function am(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[un]=t,n[En]=o,a){case"dialog":Mt("cancel",n),Mt("close",n);break;case"iframe":case"object":case"embed":Mt("load",n);break;case"video":case"audio":for(a=0;a<Co.length;a++)Mt(Co[a],n);break;case"source":Mt("error",n);break;case"img":case"image":case"link":Mt("error",n),Mt("load",n);break;case"details":Mt("toggle",n);break;case"input":Mt("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Mt("invalid",n);break;case"textarea":Mt("invalid",n),Ci(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||S0(n.textContent,a)?(o.popover!=null&&(Mt("beforetoggle",n),Mt("toggle",n)),o.onScroll!=null&&Mt("scroll",n),o.onScrollEnd!=null&&Mt("scrollend",n),o.onClick!=null&&(n.onclick=ki),n=!0):n=!1,n||Ma(t,!0)}function rm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:fi=!1;return;case 27:case 3:fi=!0;return;default:Tn=Tn.return}}function Qr(t){if(t!==Tn)return!1;if(!wt)return rm(t),wt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||lh(t.type,t.memoizedProps)),a=!a),a&&Qt&&Ma(t),rm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=D0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Qt=D0(t)}else n===27?(n=Qt,Ia(t.type)?(t=dh,dh=null,Qt=t):Qt=n):Qt=Tn?di(t.stateNode.nextSibling):null;return!0}function fr(){Qt=Tn=null,wt=!1}function Wu(){var t=Sa;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),Sa=null),t}function so(t){Sa===null?Sa=[t]:Sa.push(t)}var Xu=E(null),hr=null,ji=null;function Ea(t,n,a){le(Xu,n._currentValue),n._currentValue=a}function Yi(t){t._currentValue=Xu.current,W(Xu)}function qu(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function ju(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var d=u.dependencies;if(d!==null){var x=u.child;d=d.firstContext;e:for(;d!==null;){var A=d;d=u;for(var V=0;V<n.length;V++)if(A.context===n[V]){d.lanes|=a,A=d.alternate,A!==null&&(A.lanes|=a),qu(d.return,a,t),o||(x=null);break e}d=A.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,d=x.alternate,d!==null&&(d.lanes|=a),qu(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function Jr(t,n,a,o){t=null;for(var u=n,d=!1;u!==null;){if(!d){if((u.flags&524288)!==0)d=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var A=u.type;Zn(u.pendingProps.value,x.value)||(t!==null?t.push(A):t=[A])}}else if(u===$.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Oo):t=[Oo])}u=u.return}t!==null&&ju(n,t,a,o),n.flags|=262144}function bl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function dr(t){hr=t,ji=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return sm(hr,t)}function Tl(t,n){return hr===null&&dr(t),sm(t,n)}function sm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ji===null){if(t===null)throw Error(r(308));ji=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ji=ji.next=n;return a}var ox=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},lx=s.unstable_scheduleCallback,cx=s.unstable_NormalPriority,fn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new ox,data:new Map,refCount:0}}function oo(t){t.refCount--,t.refCount===0&&lx(cx,function(){t.controller.abort()})}var lo=null,Zu=0,$r=0,es=null;function ux(t,n){if(lo===null){var a=lo=[];Zu=0,$r=$f(),es={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Zu++,n.then(om,om),n}function om(){if(--Zu===0&&lo!==null){es!==null&&(es.status="fulfilled");var t=lo;lo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function fx(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var lm=P.S;P.S=function(t,n){Xg=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ux(t,n),lm!==null&&lm(t,n)};var pr=E(null);function Ku(){var t=pr.current;return t!==null?t:Yt.pooledCache}function Al(t,n){n===null?le(pr,pr.current):le(pr,n.pool)}function cm(){var t=Ku();return t===null?null:{parent:fn._currentValue,pool:t}}var ts=Error(r(460)),Qu=Error(r(474)),Rl=Error(r(542)),wl={then:function(){}};function um(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(ki,ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t;default:if(typeof n.status=="string")n.then(ki,ki);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,dm(t),t}throw gr=n,ts}}function mr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(gr=a,ts):a}}var gr=null;function hm(){if(gr===null)throw Error(r(459));var t=gr;return gr=null,t}function dm(t){if(t===ts||t===Rl)throw Error(r(483))}var ns=null,co=0;function Cl(t){var n=co;return co+=1,ns===null&&(ns=[]),fm(ns,t,n)}function uo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Dl(t,n){throw n.$$typeof===y?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function pm(t){function n(ne,j){if(t){var se=ne.deletions;se===null?(ne.deletions=[j],ne.flags|=16):se.push(j)}}function a(ne,j){if(!t)return null;for(;j!==null;)n(ne,j),j=j.sibling;return null}function o(ne){for(var j=new Map;ne!==null;)ne.key!==null?j.set(ne.key,ne):j.set(ne.index,ne),ne=ne.sibling;return j}function u(ne,j){return ne=Xi(ne,j),ne.index=0,ne.sibling=null,ne}function d(ne,j,se){return ne.index=se,t?(se=ne.alternate,se!==null?(se=se.index,se<j?(ne.flags|=67108866,j):se):(ne.flags|=67108866,j)):(ne.flags|=1048576,j)}function x(ne){return t&&ne.alternate===null&&(ne.flags|=67108866),ne}function A(ne,j,se,Se){return j===null||j.tag!==6?(j=Fu(se,ne.mode,Se),j.return=ne,j):(j=u(j,se),j.return=ne,j)}function V(ne,j,se,Se){var st=se.type;return st===R?_e(ne,j,se.props.children,Se,se.key):j!==null&&(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Z&&mr(st)===j.type)?(j=u(j,se.props),uo(j,se),j.return=ne,j):(j=Ml(se.type,se.key,se.props,null,ne.mode,Se),uo(j,se),j.return=ne,j)}function oe(ne,j,se,Se){return j===null||j.tag!==4||j.stateNode.containerInfo!==se.containerInfo||j.stateNode.implementation!==se.implementation?(j=Hu(se,ne.mode,Se),j.return=ne,j):(j=u(j,se.children||[]),j.return=ne,j)}function _e(ne,j,se,Se,st){return j===null||j.tag!==7?(j=ur(se,ne.mode,Se,st),j.return=ne,j):(j=u(j,se),j.return=ne,j)}function Me(ne,j,se){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Fu(""+j,ne.mode,se),j.return=ne,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case M:return se=Ml(j.type,j.key,j.props,null,ne.mode,se),uo(se,j),se.return=ne,se;case b:return j=Hu(j,ne.mode,se),j.return=ne,j;case Z:return j=mr(j),Me(ne,j,se)}if(ae(j)||F(j))return j=ur(j,ne.mode,se,null),j.return=ne,j;if(typeof j.then=="function")return Me(ne,Cl(j),se);if(j.$$typeof===O)return Me(ne,Tl(ne,j),se);Dl(ne,j)}return null}function ue(ne,j,se,Se){var st=j!==null?j.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return st!==null?null:A(ne,j,""+se,Se);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case M:return se.key===st?V(ne,j,se,Se):null;case b:return se.key===st?oe(ne,j,se,Se):null;case Z:return se=mr(se),ue(ne,j,se,Se)}if(ae(se)||F(se))return st!==null?null:_e(ne,j,se,Se,null);if(typeof se.then=="function")return ue(ne,j,Cl(se),Se);if(se.$$typeof===O)return ue(ne,j,Tl(ne,se),Se);Dl(ne,se)}return null}function pe(ne,j,se,Se,st){if(typeof Se=="string"&&Se!==""||typeof Se=="number"||typeof Se=="bigint")return ne=ne.get(se)||null,A(j,ne,""+Se,st);if(typeof Se=="object"&&Se!==null){switch(Se.$$typeof){case M:return ne=ne.get(Se.key===null?se:Se.key)||null,V(j,ne,Se,st);case b:return ne=ne.get(Se.key===null?se:Se.key)||null,oe(j,ne,Se,st);case Z:return Se=mr(Se),pe(ne,j,se,Se,st)}if(ae(Se)||F(Se))return ne=ne.get(se)||null,_e(j,ne,Se,st,null);if(typeof Se.then=="function")return pe(ne,j,se,Cl(Se),st);if(Se.$$typeof===O)return pe(ne,j,se,Tl(j,Se),st);Dl(j,Se)}return null}function qe(ne,j,se,Se){for(var st=null,Nt=null,et=j,pt=j=0,At=null;et!==null&&pt<se.length;pt++){et.index>pt?(At=et,et=null):At=et.sibling;var Lt=ue(ne,et,se[pt],Se);if(Lt===null){et===null&&(et=At);break}t&&et&&Lt.alternate===null&&n(ne,et),j=d(Lt,j,pt),Nt===null?st=Lt:Nt.sibling=Lt,Nt=Lt,et=At}if(pt===se.length)return a(ne,et),wt&&qi(ne,pt),st;if(et===null){for(;pt<se.length;pt++)et=Me(ne,se[pt],Se),et!==null&&(j=d(et,j,pt),Nt===null?st=et:Nt.sibling=et,Nt=et);return wt&&qi(ne,pt),st}for(et=o(et);pt<se.length;pt++)At=pe(et,ne,pt,se[pt],Se),At!==null&&(t&&At.alternate!==null&&et.delete(At.key===null?pt:At.key),j=d(At,j,pt),Nt===null?st=At:Nt.sibling=At,Nt=At);return t&&et.forEach(function(Ga){return n(ne,Ga)}),wt&&qi(ne,pt),st}function ot(ne,j,se,Se){if(se==null)throw Error(r(151));for(var st=null,Nt=null,et=j,pt=j=0,At=null,Lt=se.next();et!==null&&!Lt.done;pt++,Lt=se.next()){et.index>pt?(At=et,et=null):At=et.sibling;var Ga=ue(ne,et,Lt.value,Se);if(Ga===null){et===null&&(et=At);break}t&&et&&Ga.alternate===null&&n(ne,et),j=d(Ga,j,pt),Nt===null?st=Ga:Nt.sibling=Ga,Nt=Ga,et=At}if(Lt.done)return a(ne,et),wt&&qi(ne,pt),st;if(et===null){for(;!Lt.done;pt++,Lt=se.next())Lt=Me(ne,Lt.value,Se),Lt!==null&&(j=d(Lt,j,pt),Nt===null?st=Lt:Nt.sibling=Lt,Nt=Lt);return wt&&qi(ne,pt),st}for(et=o(et);!Lt.done;pt++,Lt=se.next())Lt=pe(et,ne,pt,Lt.value,Se),Lt!==null&&(t&&Lt.alternate!==null&&et.delete(Lt.key===null?pt:Lt.key),j=d(Lt,j,pt),Nt===null?st=Lt:Nt.sibling=Lt,Nt=Lt);return t&&et.forEach(function(MS){return n(ne,MS)}),wt&&qi(ne,pt),st}function Xt(ne,j,se,Se){if(typeof se=="object"&&se!==null&&se.type===R&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case M:e:{for(var st=se.key;j!==null;){if(j.key===st){if(st=se.type,st===R){if(j.tag===7){a(ne,j.sibling),Se=u(j,se.props.children),Se.return=ne,ne=Se;break e}}else if(j.elementType===st||typeof st=="object"&&st!==null&&st.$$typeof===Z&&mr(st)===j.type){a(ne,j.sibling),Se=u(j,se.props),uo(Se,se),Se.return=ne,ne=Se;break e}a(ne,j);break}else n(ne,j);j=j.sibling}se.type===R?(Se=ur(se.props.children,ne.mode,Se,se.key),Se.return=ne,ne=Se):(Se=Ml(se.type,se.key,se.props,null,ne.mode,Se),uo(Se,se),Se.return=ne,ne=Se)}return x(ne);case b:e:{for(st=se.key;j!==null;){if(j.key===st)if(j.tag===4&&j.stateNode.containerInfo===se.containerInfo&&j.stateNode.implementation===se.implementation){a(ne,j.sibling),Se=u(j,se.children||[]),Se.return=ne,ne=Se;break e}else{a(ne,j);break}else n(ne,j);j=j.sibling}Se=Hu(se,ne.mode,Se),Se.return=ne,ne=Se}return x(ne);case Z:return se=mr(se),Xt(ne,j,se,Se)}if(ae(se))return qe(ne,j,se,Se);if(F(se)){if(st=F(se),typeof st!="function")throw Error(r(150));return se=st.call(se),ot(ne,j,se,Se)}if(typeof se.then=="function")return Xt(ne,j,Cl(se),Se);if(se.$$typeof===O)return Xt(ne,j,Tl(ne,se),Se);Dl(ne,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,j!==null&&j.tag===6?(a(ne,j.sibling),Se=u(j,se),Se.return=ne,ne=Se):(a(ne,j),Se=Fu(se,ne.mode,Se),Se.return=ne,ne=Se),x(ne)):a(ne,j)}return function(ne,j,se,Se){try{co=0;var st=Xt(ne,j,se,Se);return ns=null,st}catch(et){if(et===ts||et===Rl)throw et;var Nt=Kn(29,et,null,ne.mode);return Nt.lanes=Se,Nt.return=ne,Nt}finally{}}}var vr=pm(!0),mm=pm(!1),ba=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ta(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Aa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Sl(t),Jp(t,null,a),n}return xl(t,o,n,a),Sl(t)}function fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,wi(t,a)}}function ef(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?u=d=x:d=d.next=x,a=a.next}while(a!==null);d===null?u=d=n:d=d.next=n}else u=d=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var tf=!1;function ho(){if(tf){var t=es;if(t!==null)throw t}}function po(t,n,a,o){tf=!1;var u=t.updateQueue;ba=!1;var d=u.firstBaseUpdate,x=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var V=A,oe=V.next;V.next=null,x===null?d=oe:x.next=oe,x=V;var _e=t.alternate;_e!==null&&(_e=_e.updateQueue,A=_e.lastBaseUpdate,A!==x&&(A===null?_e.firstBaseUpdate=oe:A.next=oe,_e.lastBaseUpdate=V))}if(d!==null){var Me=u.baseState;x=0,_e=oe=V=null,A=d;do{var ue=A.lane&-536870913,pe=ue!==A.lane;if(pe?(Tt&ue)===ue:(o&ue)===ue){ue!==0&&ue===$r&&(tf=!0),_e!==null&&(_e=_e.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var qe=t,ot=A;ue=n;var Xt=a;switch(ot.tag){case 1:if(qe=ot.payload,typeof qe=="function"){Me=qe.call(Xt,Me,ue);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=ot.payload,ue=typeof qe=="function"?qe.call(Xt,Me,ue):qe,ue==null)break e;Me=v({},Me,ue);break e;case 2:ba=!0}}ue=A.callback,ue!==null&&(t.flags|=64,pe&&(t.flags|=8192),pe=u.callbacks,pe===null?u.callbacks=[ue]:pe.push(ue))}else pe={lane:ue,tag:A.tag,payload:A.payload,callback:A.callback,next:null},_e===null?(oe=_e=pe,V=Me):_e=_e.next=pe,x|=ue;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;pe=A,A=pe.next,pe.next=null,u.lastBaseUpdate=pe,u.shared.pending=null}}while(!0);_e===null&&(V=Me),u.baseState=V,u.firstBaseUpdate=oe,u.lastBaseUpdate=_e,d===null&&(u.shared.lanes=0),Ua|=x,t.lanes=x,t.memoizedState=Me}}function gm(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function vm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)gm(a[t],n)}var is=E(null),Ul=E(0);function _m(t,n){t=ia,le(Ul,t),le(is,n),ia=t|n.baseLanes}function nf(){le(Ul,ia),le(is,is.current)}function af(){ia=Ul.current,W(is),W(Ul)}var Qn=E(null),hi=null;function Ra(t){var n=t.alternate;le(ln,ln.current&1),le(Qn,t),hi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(hi=t)}function rf(t){le(ln,ln.current),le(Qn,t),hi===null&&(hi=t)}function ym(t){t.tag===22?(le(ln,ln.current),le(Qn,t),hi===null&&(hi=t)):wa()}function wa(){le(ln,ln.current),le(Qn,Qn.current)}function Jn(t){W(Qn),hi===t&&(hi=null),W(ln)}var ln=E(0);function Nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||fh(a)||hh(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Zi=0,dt=null,kt=null,hn=null,Ll=!1,as=!1,_r=!1,Ol=0,mo=0,rs=null,hx=0;function nn(){throw Error(r(321))}function sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function of(t,n,a,o,u,d){return Zi=d,dt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?ng:Mf,_r=!1,d=a(o,u),_r=!1,as&&(d=Sm(n,a,o,u)),xm(t),d}function xm(t){P.H=_o;var n=kt!==null&&kt.next!==null;if(Zi=0,hn=kt=dt=null,Ll=!1,mo=0,rs=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&bl(t)&&(dn=!0))}function Sm(t,n,a,o){dt=t;var u=0;do{if(as&&(rs=null),mo=0,as=!1,25<=u)throw Error(r(301));if(u+=1,hn=kt=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}P.H=ig,d=n(a,o)}while(as);return d}function dx(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?go(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(dt.flags|=1024),n}function lf(){var t=Ol!==0;return Ol=0,t}function cf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function uf(t){if(Ll){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ll=!1}Zi=0,hn=kt=dt=null,as=!1,mo=Ol=0,rs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?dt.memoizedState=hn=t:hn=hn.next=t,hn}function cn(){if(kt===null){var t=dt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=hn===null?dt.memoizedState:hn.next;if(n!==null)hn=n,kt=t;else{if(t===null)throw dt.alternate===null?Error(r(467)):Error(r(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},hn===null?dt.memoizedState=hn=t:hn=hn.next=t}return hn}function Pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function go(t){var n=mo;return mo+=1,rs===null&&(rs=[]),t=fm(rs,t,n),n=dt,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?ng:Mf),t}function Il(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return go(t);if(t.$$typeof===O)return An(t)}throw Error(r(438,String(t)))}function ff(t){var n=null,a=dt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=dt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Pl(),dt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=D;return n.index++,a}function Ki(t,n){return typeof n=="function"?n(t):n}function zl(t){var n=cn();return hf(n,kt,t)}function hf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,d=o.pending;if(d!==null){if(u!==null){var x=u.next;u.next=d.next,d.next=x}n.baseQueue=u=d,o.pending=null}if(d=t.baseState,u===null)t.memoizedState=d;else{n=u.next;var A=x=null,V=null,oe=n,_e=!1;do{var Me=oe.lane&-536870913;if(Me!==oe.lane?(Tt&Me)===Me:(Zi&Me)===Me){var ue=oe.revertLane;if(ue===0)V!==null&&(V=V.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),Me===$r&&(_e=!0);else if((Zi&ue)===ue){oe=oe.next,ue===$r&&(_e=!0);continue}else Me={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(A=V=Me,x=d):V=V.next=Me,dt.lanes|=ue,Ua|=ue;Me=oe.action,_r&&a(d,Me),d=oe.hasEagerState?oe.eagerState:a(d,Me)}else ue={lane:Me,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},V===null?(A=V=ue,x=d):V=V.next=ue,dt.lanes|=Me,Ua|=Me;oe=oe.next}while(oe!==null&&oe!==n);if(V===null?x=d:V.next=A,!Zn(d,t.memoizedState)&&(dn=!0,_e&&(a=es,a!==null)))throw a;t.memoizedState=d,t.baseState=x,t.baseQueue=V,o.lastRenderedState=d}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function df(t){var n=cn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,d=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do d=t(d,x.action),x=x.next;while(x!==u);Zn(d,n.memoizedState)||(dn=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),a.lastRenderedState=d}return[d,o]}function Mm(t,n,a){var o=dt,u=cn(),d=wt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Zn((kt||u).memoizedState,a);if(x&&(u.memoizedState=a,dn=!0),u=u.queue,gf(Tm.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||hn!==null&&hn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},bm.bind(null,o,u,a,n),null),Yt===null)throw Error(r(349));d||(Zi&127)!==0||Em(o,n,a)}return a}function Em(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=dt.updateQueue,n===null?(n=Pl(),dt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function bm(t,n,a,o){n.value=a,n.getSnapshot=o,Am(n)&&Rm(t)}function Tm(t,n,a){return a(function(){Am(n)&&Rm(t)})}function Am(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function Rm(t){var n=cr(t,2);n!==null&&kn(n,t,2)}function pf(t){var n=In();if(typeof t=="function"){var a=t;if(t=a(),_r){tt(!0);try{a()}finally{tt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:t},n}function wm(t,n,a,o){return t.baseState=a,hf(t,kt,typeof o=="function"?o:Ki)}function px(t,n,a,o,u){if(Hl(t))throw Error(r(485));if(t=n.action,t!==null){var d={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};P.T!==null?a(!0):d.isTransition=!1,o(d),a=n.pending,a===null?(d.next=n.pending=d,Cm(n,d)):(d.next=a.next,n.pending=a.next=d)}}function Cm(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var d=P.T,x={};P.T=x;try{var A=a(u,o),V=P.S;V!==null&&V(x,A),Dm(t,n,A)}catch(oe){mf(t,n,oe)}finally{d!==null&&x.types!==null&&(d.types=x.types),P.T=d}}else try{d=a(u,o),Dm(t,n,d)}catch(oe){mf(t,n,oe)}}function Dm(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Um(t,n,o)},function(o){return mf(t,n,o)}):Um(t,n,a)}function Um(t,n,a){n.status="fulfilled",n.value=a,Nm(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Cm(t,a)))}function mf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Nm(n),n=n.next;while(n!==o)}t.action=null}function Nm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Lm(t,n){return n}function Om(t,n){if(wt){var a=Yt.formState;if(a!==null){e:{var o=dt;if(wt){if(Qt){t:{for(var u=Qt,d=fi;u.nodeType!==8;){if(!d){u=null;break t}if(u=di(u.nextSibling),u===null){u=null;break t}}d=u.data,u=d==="F!"||d==="F"?u:null}if(u){Qt=di(u.nextSibling),o=u.data==="F!";break e}}Ma(o)}o=!1}o&&(n=a[0])}}return a=In(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Lm,lastRenderedState:n},a.queue=o,a=$m.bind(null,dt,o),o.dispatch=a,o=pf(!1),d=Sf.bind(null,dt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=px.bind(null,dt,u,d,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function Pm(t){var n=cn();return Im(n,kt,t)}function Im(t,n,a){if(n=hf(t,n,Lm)[0],t=zl(Ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=go(n)}catch(x){throw x===ts?Rl:x}else o=n;n=cn();var u=n.queue,d=u.dispatch;return a!==n.memoizedState&&(dt.flags|=2048,ss(9,{destroy:void 0},mx.bind(null,u,a),null)),[o,d,t]}function mx(t,n){t.action=n}function zm(t){var n=cn(),a=kt;if(a!==null)return Im(n,a,t);cn(),n=n.memoizedState,a=cn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ss(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=dt.updateQueue,n===null&&(n=Pl(),dt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function Bm(){return cn().memoizedState}function Bl(t,n,a,o){var u=In();dt.flags|=t,u.memoizedState=ss(1|n,{destroy:void 0},a,o===void 0?null:o)}function Fl(t,n,a,o){var u=cn();o=o===void 0?null:o;var d=u.memoizedState.inst;kt!==null&&o!==null&&sf(o,kt.memoizedState.deps)?u.memoizedState=ss(n,d,a,o):(dt.flags|=t,u.memoizedState=ss(1|n,d,a,o))}function Fm(t,n){Bl(8390656,8,t,n)}function gf(t,n){Fl(2048,8,t,n)}function gx(t){dt.flags|=4;var n=dt.updateQueue;if(n===null)n=Pl(),dt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hm(t){var n=cn().memoizedState;return gx({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Gm(t,n){return Fl(4,2,t,n)}function Vm(t,n){return Fl(4,4,t,n)}function km(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Wm(t,n,a){a=a!=null?a.concat([t]):null,Fl(4,4,km.bind(null,n,t),a)}function vf(){}function Xm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function qm(t,n){var a=cn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=t(),_r){tt(!0);try{t()}finally{tt(!1)}}return a.memoizedState=[o,n],o}function _f(t,n,a){return a===void 0||(Zi&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=jg(),dt.lanes|=t,Ua|=t,a)}function jm(t,n,a,o){return Zn(a,n)?a:is.current!==null?(t=_f(t,a,o),Zn(t,n)||(dn=!0),t):(Zi&42)===0||(Zi&1073741824)!==0&&(Tt&261930)===0?(dn=!0,t.memoizedState=a):(t=jg(),dt.lanes|=t,Ua|=t,n)}function Ym(t,n,a,o,u){var d=q.p;q.p=d!==0&&8>d?d:8;var x=P.T,A={};P.T=A,Sf(t,!1,n,a);try{var V=u(),oe=P.S;if(oe!==null&&oe(A,V),V!==null&&typeof V=="object"&&typeof V.then=="function"){var _e=fx(V,o);vo(t,n,_e,ti(t))}else vo(t,n,o,ti(t))}catch(Me){vo(t,n,{then:function(){},status:"rejected",reason:Me},ti())}finally{q.p=d,x!==null&&A.types!==null&&(x.types=A.types),P.T=x}}function vx(){}function yf(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Zm(t).queue;Ym(t,u,n,J,a===null?vx:function(){return Km(t),a(o)})}function Zm(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:J},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Km(t){var n=Zm(t);n.next===null&&(n=t.alternate.memoizedState),vo(t,n.next.queue,{},ti())}function xf(){return An(Oo)}function Qm(){return cn().memoizedState}function Jm(){return cn().memoizedState}function _x(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Ta(a);var o=Aa(n,t,a);o!==null&&(kn(o,n,a),fo(o,n,a)),n={cache:Yu()},t.payload=n;return}n=n.return}}function yx(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Hl(t)?eg(n,a):(a=zu(t,n,a,o),a!==null&&(kn(a,t,o),tg(a,n,o)))}function $m(t,n,a){var o=ti();vo(t,n,a,o)}function vo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Hl(t))eg(n,u);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,A=d(x,a);if(u.hasEagerState=!0,u.eagerState=A,Zn(A,x))return xl(t,n,u,0),Yt===null&&yl(),!1}catch{}finally{}if(a=zu(t,n,u,o),a!==null)return kn(a,t,o),tg(a,n,o),!0}return!1}function Sf(t,n,a,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Hl(t)){if(n)throw Error(r(479))}else n=zu(t,a,o,2),n!==null&&kn(n,t,2)}function Hl(t){var n=t.alternate;return t===dt||n!==null&&n===dt}function eg(t,n){as=Ll=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function tg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,wi(t,a)}}var _o={readContext:An,use:Il,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};_o.useEffectEvent=nn;var ng={readContext:An,use:Il,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Fm,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Bl(4194308,4,km.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Bl(4194308,4,t,n)},useInsertionEffect:function(t,n){Bl(4,2,t,n)},useMemo:function(t,n){var a=In();n=n===void 0?null:n;var o=t();if(_r){tt(!0);try{t()}finally{tt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=In();if(a!==void 0){var u=a(n);if(_r){tt(!0);try{a(n)}finally{tt(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=yx.bind(null,dt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,a=$m.bind(null,dt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:vf,useDeferredValue:function(t,n){var a=In();return _f(a,t,n)},useTransition:function(){var t=pf(!1);return t=Ym.bind(null,dt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=dt,u=In();if(wt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(Tt&127)!==0||Em(o,n,a)}u.memoizedState=a;var d={value:a,getSnapshot:n};return u.queue=d,Fm(Tm.bind(null,o,d,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},bm.bind(null,o,d,a,n),null),a},useId:function(){var t=In(),n=Yt.identifierPrefix;if(wt){var a=Ui,o=Di;a=(o&~(1<<32-Ge(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ol++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=hx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:xf,useFormState:Om,useActionState:Om,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Sf.bind(null,dt,!0,a),a.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return In().memoizedState=_x.bind(null,dt)},useEffectEvent:function(t){var n=In(),a={impl:t};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:An,use:Il,useCallback:Xm,useContext:An,useEffect:gf,useImperativeHandle:Wm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:zl,useRef:Bm,useState:function(){return zl(Ki)},useDebugValue:vf,useDeferredValue:function(t,n){var a=cn();return jm(a,kt.memoizedState,t,n)},useTransition:function(){var t=zl(Ki)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:xf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t,n){var a=cn();return wm(a,kt,t,n)},useMemoCache:ff,useCacheRefresh:Jm};Mf.useEffectEvent=Hm;var ig={readContext:An,use:Il,useCallback:Xm,useContext:An,useEffect:gf,useImperativeHandle:Wm,useInsertionEffect:Gm,useLayoutEffect:Vm,useMemo:qm,useReducer:df,useRef:Bm,useState:function(){return df(Ki)},useDebugValue:vf,useDeferredValue:function(t,n){var a=cn();return kt===null?_f(a,t,n):jm(a,kt.memoizedState,t,n)},useTransition:function(){var t=df(Ki)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:go(t),n]},useSyncExternalStore:Mm,useId:Qm,useHostTransitionStatus:xf,useFormState:zm,useActionState:zm,useOptimistic:function(t,n){var a=cn();return kt!==null?wm(a,kt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:ff,useCacheRefresh:Jm};ig.useEffectEvent=Hm;function Ef(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var bf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Ta(o);u.payload=n,a!=null&&(u.callback=a),n=Aa(t,u,o),n!==null&&(kn(n,t,o),fo(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Ta(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Aa(t,u,o),n!==null&&(kn(n,t,o),fo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Ta(a);o.tag=2,n!=null&&(o.callback=n),n=Aa(t,o,a),n!==null&&(kn(n,t,a),fo(n,t,a))}};function ag(t,n,a,o,u,d,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!io(a,o)||!io(u,d):!0}function rg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&bf.enqueueReplaceState(n,n.state,null)}function yr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function sg(t){_l(t)}function og(t){console.error(t)}function lg(t){_l(t)}function Gl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function cg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,a){return a=Ta(a),a.tag=3,a.payload={element:null},a.callback=function(){Gl(t,n)},a}function ug(t){return t=Ta(t),t.tag=3,t}function fg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var d=o.value;t.payload=function(){return u(d)},t.callback=function(){cg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){cg(n,a,o),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var A=o.stack;this.componentDidCatch(o.value,{componentStack:A!==null?A:""})})}function xx(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Jr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return hi===null?$l():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return a.flags|=65536,o===wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Kf(t,o,u)),!1}throw Error(r(435,a.tag))}return Kf(t,o,u),$l(),!1}if(wt)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(r(422),{cause:o}),so(li(t,a)))):(o!==ku&&(n=Error(r(423),{cause:o}),so(li(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=li(o,a),u=Tf(t.stateNode,o,u),ef(t,u),an!==4&&(an=2)),!1;var d=Error(r(520),{cause:o});if(d=li(d,a),Ao===null?Ao=[d]:Ao.push(d),an!==4&&(an=2),n===null)return!0;o=li(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Tf(a.stateNode,o,t),ef(a,t),!1;case 1:if(n=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Na===null||!Na.has(d))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ug(u),fg(u,t,a,o),ef(a,u),!1}a=a.return}while(a!==null);return!1}var Af=Error(r(461)),dn=!1;function Rn(t,n,a,o){n.child=t===null?mm(n,null,a,o):vr(n,t.child,a,o)}function hg(t,n,a,o,u){a=a.render;var d=n.ref;if("ref"in o){var x={};for(var A in o)A!=="ref"&&(x[A]=o[A])}else x=o;return dr(n),o=of(t,n,a,x,d,u),A=lf(),t!==null&&!dn?(cf(t,n,u),Qi(t,n,u)):(wt&&A&&Gu(n),n.flags|=1,Rn(t,n,o,u),n.child)}function dg(t,n,a,o,u){if(t===null){var d=a.type;return typeof d=="function"&&!Bu(d)&&d.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=d,pg(t,n,d,o,u)):(t=Ml(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(d=t.child,!Of(t,u)){var x=d.memoizedProps;if(a=a.compare,a=a!==null?a:io,a(x,o)&&t.ref===n.ref)return Qi(t,n,u)}return n.flags|=1,t=Xi(d,o),t.ref=n.ref,t.return=n,n.child=t}function pg(t,n,a,o,u){if(t!==null){var d=t.memoizedProps;if(io(d,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=d,Of(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,Qi(t,n,u)}return Rf(t,n,a,o,u)}function mg(t,n,a,o){var u=o.children,d=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~d}else o=0,n.child=null;return gg(t,n,d,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Al(n,d!==null?d.cachePool:null),d!==null?_m(n,d):nf(),ym(n);else return o=n.lanes=536870912,gg(t,n,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Al(n,d.cachePool),_m(n,d),wa(),n.memoizedState=null):(t!==null&&Al(n,null),nf(),wa());return Rn(t,n,u,a),n.child}function yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function gg(t,n,a,o,u){var d=Ku();return d=d===null?null:{parent:fn._currentValue,pool:d},n.memoizedState={baseLanes:a,cachePool:d},t!==null&&Al(n,null),nf(),ym(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function Vl(t,n){return n=Wl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function vg(t,n,a){return vr(n,t.child,null,a),t=Vl(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function Sx(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(wt){if(o.mode==="hidden")return t=Vl(n,o),n.lanes=536870912,yo(null,t);if(rf(n),(t=Qt)?(t=C0(t,fi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=em(t),a.return=n,n.child=a,Tn=n,Qt=null)):t=null,t===null)throw Ma(n);return n.lanes=536870912,null}return Vl(n,o)}var d=t.memoizedState;if(d!==null){var x=d.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=vg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||Jr(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=Yt,o!==null&&(x=zr(o,a),x!==0&&x!==d.retryLane))throw d.retryLane=x,cr(t,x),kn(o,t,x),Af;$l(),n=vg(t,n,a)}else t=d.treeContext,Qt=di(x.nextSibling),Tn=n,wt=!0,Sa=null,fi=!1,t!==null&&im(n,t),n=Vl(n,o),n.flags|=4096;return n}return t=Xi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function kl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Rf(t,n,a,o,u){return dr(n),a=of(t,n,a,o,void 0,u),o=lf(),t!==null&&!dn?(cf(t,n,u),Qi(t,n,u)):(wt&&o&&Gu(n),n.flags|=1,Rn(t,n,a,u),n.child)}function _g(t,n,a,o,u,d){return dr(n),n.updateQueue=null,a=Sm(n,o,a,u),xm(t),o=lf(),t!==null&&!dn?(cf(t,n,d),Qi(t,n,d)):(wt&&o&&Gu(n),n.flags|=1,Rn(t,n,a,d),n.child)}function yg(t,n,a,o,u){if(dr(n),n.stateNode===null){var d=Yr,x=a.contextType;typeof x=="object"&&x!==null&&(d=An(x)),d=new a(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=bf,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Ju(n),x=a.contextType,d.context=typeof x=="object"&&x!==null?An(x):Yr,d.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Ef(n,a,x,o),d.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&bf.enqueueReplaceState(d,d.state,null),po(n,o,d,u),ho(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){d=n.stateNode;var A=n.memoizedProps,V=yr(a,A);d.props=V;var oe=d.context,_e=a.contextType;x=Yr,typeof _e=="object"&&_e!==null&&(x=An(_e));var Me=a.getDerivedStateFromProps;_e=typeof Me=="function"||typeof d.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,_e||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(A||oe!==x)&&rg(n,d,o,x),ba=!1;var ue=n.memoizedState;d.state=ue,po(n,o,d,u),ho(),oe=n.memoizedState,A||ue!==oe||ba?(typeof Me=="function"&&(Ef(n,a,Me,o),oe=n.memoizedState),(V=ba||ag(n,a,V,o,ue,oe,x))?(_e||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=oe),d.props=o,d.state=oe,d.context=x,o=V):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,$u(t,n),x=n.memoizedProps,_e=yr(a,x),d.props=_e,Me=n.pendingProps,ue=d.context,oe=a.contextType,V=Yr,typeof oe=="object"&&oe!==null&&(V=An(oe)),A=a.getDerivedStateFromProps,(oe=typeof A=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==Me||ue!==V)&&rg(n,d,o,V),ba=!1,ue=n.memoizedState,d.state=ue,po(n,o,d,u),ho();var pe=n.memoizedState;x!==Me||ue!==pe||ba||t!==null&&t.dependencies!==null&&bl(t.dependencies)?(typeof A=="function"&&(Ef(n,a,A,o),pe=n.memoizedState),(_e=ba||ag(n,a,_e,o,ue,pe,V)||t!==null&&t.dependencies!==null&&bl(t.dependencies))?(oe||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,pe,V),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,pe,V)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=pe),d.props=o,d.state=pe,d.context=V,o=_e):(typeof d.componentDidUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&ue===t.memoizedState||(n.flags|=1024),o=!1)}return d=o,kl(t,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,t!==null&&o?(n.child=vr(n,t.child,null,u),n.child=vr(n,null,a,u)):Rn(t,n,a,u),n.memoizedState=d.state,t=n.child):t=Qi(t,n,u),t}function xg(t,n,a,o){return fr(),n.flags|=256,Rn(t,n,a,o),n.child}var wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:cm()}}function Df(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Sg(t,n,a){var o=n.pendingProps,u=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(wt){if(u?Ra(n):wa(),(t=Qt)?(t=C0(t,fi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Di,overflow:Ui}:null,retryLane:536870912,hydrationErrors:null},a=em(t),a.return=n,n.child=a,Tn=n,Qt=null)):t=null,t===null)throw Ma(n);return hh(t)?n.lanes=32:n.lanes=536870912,null}var A=o.children;return o=o.fallback,u?(wa(),u=n.mode,A=Wl({mode:"hidden",children:A},u),o=ur(o,u,a,null),A.return=n,o.return=n,A.sibling=o,n.child=A,o=n.child,o.memoizedState=Cf(a),o.childLanes=Df(t,x,a),n.memoizedState=wf,yo(null,o)):(Ra(n),Uf(n,A))}var V=t.memoizedState;if(V!==null&&(A=V.dehydrated,A!==null)){if(d)n.flags&256?(Ra(n),n.flags&=-257,n=Nf(t,n,a)):n.memoizedState!==null?(wa(),n.child=t.child,n.flags|=128,n=null):(wa(),A=o.fallback,u=n.mode,o=Wl({mode:"visible",children:o.children},u),A=ur(A,u,a,null),A.flags|=2,o.return=n,A.return=n,o.sibling=A,n.child=o,vr(n,t.child,null,a),o=n.child,o.memoizedState=Cf(a),o.childLanes=Df(t,x,a),n.memoizedState=wf,n=yo(null,o));else if(Ra(n),hh(A)){if(x=A.nextSibling&&A.nextSibling.dataset,x)var oe=x.dgst;x=oe,o=Error(r(419)),o.stack="",o.digest=x,so({value:o,source:null,stack:null}),n=Nf(t,n,a)}else if(dn||Jr(t,n,a,!1),x=(a&t.childLanes)!==0,dn||x){if(x=Yt,x!==null&&(o=zr(x,a),o!==0&&o!==V.retryLane))throw V.retryLane=o,cr(t,o),kn(x,t,o),Af;fh(A)||$l(),n=Nf(t,n,a)}else fh(A)?(n.flags|=192,n.child=t.child,n=null):(t=V.treeContext,Qt=di(A.nextSibling),Tn=n,wt=!0,Sa=null,fi=!1,t!==null&&im(n,t),n=Uf(n,o.children),n.flags|=4096);return n}return u?(wa(),A=o.fallback,u=n.mode,V=t.child,oe=V.sibling,o=Xi(V,{mode:"hidden",children:o.children}),o.subtreeFlags=V.subtreeFlags&65011712,oe!==null?A=Xi(oe,A):(A=ur(A,u,a,null),A.flags|=2),A.return=n,o.return=n,o.sibling=A,n.child=o,yo(null,o),o=n.child,A=t.child.memoizedState,A===null?A=Cf(a):(u=A.cachePool,u!==null?(V=fn._currentValue,u=u.parent!==V?{parent:V,pool:V}:u):u=cm(),A={baseLanes:A.baseLanes|a,cachePool:u}),o.memoizedState=A,o.childLanes=Df(t,x,a),n.memoizedState=wf,yo(t.child,o)):(Ra(n),a=t.child,t=a.sibling,a=Xi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Uf(t,n){return n=Wl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Wl(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function Nf(t,n,a){return vr(n,t.child,null,a),t=Uf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Mg(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),qu(t.return,n,a)}function Lf(t,n,a,o,u,d){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=d)}function Eg(t,n,a){var o=n.pendingProps,u=o.revealOrder,d=o.tail;o=o.children;var x=ln.current,A=(x&2)!==0;if(A?(x=x&1|2,n.flags|=128):x&=1,le(ln,x),Rn(t,n,o,a),o=wt?ro:0,!A&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Mg(t,a,n);else if(t.tag===19)Mg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Nl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Lf(n,!1,u,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Nl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Lf(n,!0,a,null,d,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Qi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ua|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Jr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Xi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Xi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&bl(t)))}function Mx(t,n,a){switch(n.tag){case 3:ye(n,n.stateNode.containerInfo),Ea(n,fn,t.memoizedState.cache),fr();break;case 27:case 5:Le(n);break;case 4:ye(n,n.stateNode.containerInfo);break;case 10:Ea(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ra(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Sg(t,n,a):(Ra(n),t=Qi(t,n,a),t!==null?t.sibling:null);Ra(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(Jr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Eg(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),le(ln,ln.current),o)break;return null;case 22:return n.lanes=0,mg(t,n,a,n.pendingProps);case 24:Ea(n,fn,t.memoizedState.cache)}return Qi(t,n,a)}function bg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!Of(t,a)&&(n.flags&128)===0)return dn=!1,Mx(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,wt&&(n.flags&1048576)!==0&&nm(n,ro,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=yr(t,o),n.tag=1,n=yg(null,n,t,o,a)):(n.tag=0,n=Rf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===N){n.tag=11,n=hg(null,n,t,o,a);break e}else if(u===z){n.tag=14,n=dg(null,n,t,o,a);break e}}throw n=ce(t)||t,Error(r(306,n,""))}}return n;case 0:return Rf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=yr(o,n.pendingProps),yg(t,n,o,u,a);case 3:e:{if(ye(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;u=d.element,$u(t,n),po(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Ea(n,fn,o),o!==d.cache&&ju(n,[fn],a,!0),ho(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=xg(t,n,o,a);break e}else if(o!==u){u=li(Error(r(424)),n),so(u),n=xg(t,n,o,a);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=di(t.firstChild),Tn=n,wt=!0,Sa=null,fi=!0,a=mm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(fr(),o===u){n=Qi(t,n,a);break e}Rn(t,n,o,a)}n=n.child}return n;case 26:return kl(t,n),t===null?(a=P0(n.type,null,n.pendingProps,null))?n.memoizedState=a:wt||(a=n.type,t=n.pendingProps,o=sc(X.current).createElement(a),o[un]=n,o[En]=t,wn(o,a,t),Te(o),n.stateNode=o):n.memoizedState=P0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Le(n),t===null&&wt&&(o=n.stateNode=N0(n.type,n.pendingProps,X.current),Tn=n,fi=!0,u=Qt,Ia(n.type)?(dh=u,Qt=di(o.firstChild)):Qt=u),Rn(t,n,n.pendingProps.children,a),kl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&wt&&((u=o=Qt)&&(o=Jx(o,n.type,n.pendingProps,fi),o!==null?(n.stateNode=o,Tn=n,Qt=di(o.firstChild),fi=!1,u=!0):u=!1),u||Ma(n)),Le(n),u=n.type,d=n.pendingProps,x=t!==null?t.memoizedProps:null,o=d.children,lh(u,d)?o=null:x!==null&&lh(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,dx,null,null,a),Oo._currentValue=u),kl(t,n),Rn(t,n,o,a),n.child;case 6:return t===null&&wt&&((t=a=Qt)&&(a=$x(a,n.pendingProps,fi),a!==null?(n.stateNode=a,Tn=n,Qt=null,t=!0):t=!1),t||Ma(n)),null;case 13:return Sg(t,n,a);case 4:return ye(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=vr(n,null,o,a):Rn(t,n,o,a),n.child;case 11:return hg(t,n,n.type,n.pendingProps,a);case 7:return Rn(t,n,n.pendingProps,a),n.child;case 8:return Rn(t,n,n.pendingProps.children,a),n.child;case 12:return Rn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ea(n,n.type,o.value),Rn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,dr(n),u=An(u),o=o(u),n.flags|=1,Rn(t,n,o,a),n.child;case 14:return dg(t,n,n.type,n.pendingProps,a);case 15:return pg(t,n,n.type,n.pendingProps,a);case 19:return Eg(t,n,a);case 31:return Sx(t,n,a);case 22:return mg(t,n,a,n.pendingProps);case 24:return dr(n),o=An(fn),t===null?(u=Ku(),u===null&&(u=Yt,d=Yu(),u.pooledCache=d,d.refCount++,d!==null&&(u.pooledCacheLanes|=a),u=d),n.memoizedState={parent:o,cache:u},Ju(n),Ea(n,fn,u)):((t.lanes&a)!==0&&($u(t,n),po(n,null,null,a),ho()),u=t.memoizedState,d=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ea(n,fn,o)):(o=d.cache,Ea(n,fn,o),o!==u.cache&&ju(n,[fn],a,!0))),Rn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ji(t){t.flags|=4}function Pf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Qg())t.flags|=8192;else throw gr=wl,Qu}else t.flags&=-16777217}function Tg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H0(n))if(Qg())t.flags|=8192;else throw gr=wl,Qu}function Xl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,us|=n)}function xo(t,n){if(!wt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function Ex(t,n,a){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Yi(fn),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?Ji(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),Jt(n),null;case 26:var u=n.type,d=n.memoizedState;return t===null?(Ji(n),d!==null?(Jt(n),Tg(n,d)):(Jt(n),Pf(n,u,null,o,a))):d?d!==t.memoizedState?(Ji(n),Jt(n),Tg(n,d)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&Ji(n),Jt(n),Pf(n,u,t,o,a)),null;case 27:if(Xe(n),a=X.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}t=me.current,Qr(n)?am(n):(t=N0(u,o,a),n.stateNode=t,Ji(n))}return Jt(n),null;case 5:if(Xe(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Jt(n),null}if(d=me.current,Qr(n))am(n);else{var x=sc(X.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}d[un]=n,d[En]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(wn(d,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Ji(n)}}return Jt(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&Ji(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=X.current,Qr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||S0(t.nodeValue,a)),t||Ma(n,!0)}else t=sc(t).createTextNode(o),t[un]=n,n.stateNode=t}return Jt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else a=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Xl(n,n.updateQueue),Jt(n),null);case 4:return Re(),t===null&&ih(n.stateNode.containerInfo),Jt(n),null;case 10:return Yi(n.type),Jt(n),null;case 19:if(W(ln),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,d=o.rendering,d===null)if(u)xo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(d=Nl(t),d!==null){for(n.flags|=128,xo(o,!1),t=d.updateQueue,n.updateQueue=t,Xl(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$p(a,t),a=a.sibling;return le(ln,ln.current&1|2),wt&&qi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&T()>Kl&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Nl(d),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Xl(n,t),xo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!wt)return Jt(n),null}else 2*T()-o.renderingStartTime>Kl&&a!==536870912&&(n.flags|=128,u=!0,xo(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(t=o.last,t!==null?t.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=T(),t.sibling=null,a=ln.current,le(ln,u?a&1|2:a&1),wt&&qi(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return Jn(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&Xl(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&W(pr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Yi(fn),Jt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function bx(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Yi(fn),Re(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Xe(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return W(ln),null;case 4:return Re(),null;case 10:return Yi(n.type),null;case 22:case 23:return Jn(n),af(),t!==null&&W(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Yi(fn),null;case 25:return null;default:return null}}function Ag(t,n){switch(Vu(n),n.tag){case 3:Yi(fn),Re();break;case 26:case 27:case 5:Xe(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:W(ln);break;case 10:Yi(n.type);break;case 22:case 23:Jn(n),af(),t!==null&&W(pr);break;case 24:Yi(fn)}}function So(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var d=a.create,x=a.inst;o=d(),x.destroy=o}a=a.next}while(a!==u)}}catch(A){Vt(n,n.return,A)}}function Ca(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&t)===t){var x=o.inst,A=x.destroy;if(A!==void 0){x.destroy=void 0,u=n;var V=a,oe=A;try{oe()}catch(_e){Vt(u,V,_e)}}}o=o.next}while(o!==d)}}catch(_e){Vt(n,n.return,_e)}}function Rg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{vm(n,a)}catch(o){Vt(t,t.return,o)}}}function wg(t,n,a){a.props=yr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Vt(t,n,o)}}function Mo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){Vt(t,n,u)}}function Ni(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Vt(t,n,u)}else a.current=null}function Cg(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){Vt(t,t.return,u)}}function If(t,n,a){try{var o=t.stateNode;qx(o,t.type,a,n),o[En]=n}catch(u){Vt(t,t.return,u)}}function Dg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Ia(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Ia(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ki));else if(o!==4&&(o===27&&Ia(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,a),t=t.sibling;t!==null;)Bf(t,n,a),t=t.sibling}function ql(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Ia(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(ql(t,n,a),t=t.sibling;t!==null;)ql(t,n,a),t=t.sibling}function Ug(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);wn(n,o,a),n[un]=t,n[En]=a}catch(d){Vt(t,t.return,d)}}var $i=!1,pn=!1,Ff=!1,Ng=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Tx(t,n){if(t=t.containerInfo,sh=dc,t=Wp(t),Uu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var x=0,A=-1,V=-1,oe=0,_e=0,Me=t,ue=null;t:for(;;){for(var pe;Me!==a||u!==0&&Me.nodeType!==3||(A=x+u),Me!==d||o!==0&&Me.nodeType!==3||(V=x+o),Me.nodeType===3&&(x+=Me.nodeValue.length),(pe=Me.firstChild)!==null;)ue=Me,Me=pe;for(;;){if(Me===t)break t;if(ue===a&&++oe===u&&(A=x),ue===d&&++_e===o&&(V=x),(pe=Me.nextSibling)!==null)break;Me=ue,ue=Me.parentNode}Me=pe}a=A===-1||V===-1?null:{start:A,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(oh={focusedElem:t,selectionRange:a},dc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,d=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=n,u=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var qe=yr(a.type,u);t=o.getSnapshotBeforeUpdate(qe,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(ot){Vt(a,a.return,ot)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)uh(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":uh(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Lg(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ta(t,a),o&4&&So(5,a);break;case 1:if(ta(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Vt(a,a.return,x)}else{var u=yr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Vt(a,a.return,x)}}o&64&&Rg(a),o&512&&Mo(a,a.return);break;case 3:if(ta(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{vm(t,n)}catch(x){Vt(a,a.return,x)}}break;case 27:n===null&&o&4&&Ug(a);case 26:case 5:ta(t,a),n===null&&o&4&&Cg(a),o&512&&Mo(a,a.return);break;case 12:ta(t,a);break;case 31:ta(t,a),o&4&&Ig(t,a);break;case 13:ta(t,a),o&4&&zg(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ox.bind(null,a),eS(t,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){n=n!==null&&n.memoizedState!==null||pn,u=$i;var d=pn;$i=o,(pn=n)&&!d?na(t,a,(a.subtreeFlags&8772)!==0):ta(t,a),$i=u,pn=d}break;case 30:break;default:ta(t,a)}}function Og(t){var n=t.alternate;n!==null&&(t.alternate=null,Og(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&C(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Fn=!1;function ea(t,n,a){for(a=a.child;a!==null;)Pg(t,n,a),a=a.sibling}function Pg(t,n,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 26:pn||Ni(a,n),ea(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:pn||Ni(a,n);var o=en,u=Fn;Ia(a.type)&&(en=a.stateNode,Fn=!1),ea(t,n,a),Uo(a.stateNode),en=o,Fn=u;break;case 5:pn||Ni(a,n);case 6:if(o=en,u=Fn,en=null,ea(t,n,a),en=o,Fn=u,en!==null)if(Fn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode)}catch(d){Vt(a,n,d)}else try{en.removeChild(a.stateNode)}catch(d){Vt(a,n,d)}break;case 18:en!==null&&(Fn?(t=en,R0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),_s(t)):R0(en,a.stateNode));break;case 4:o=en,u=Fn,en=a.stateNode.containerInfo,Fn=!0,ea(t,n,a),en=o,Fn=u;break;case 0:case 11:case 14:case 15:Ca(2,a,n),pn||Ca(4,a,n),ea(t,n,a);break;case 1:pn||(Ni(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&wg(a,n,o)),ea(t,n,a);break;case 21:ea(t,n,a);break;case 22:pn=(o=pn)||a.memoizedState!==null,ea(t,n,a),pn=o;break;default:ea(t,n,a)}}function Ig(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(a){Vt(n,n.return,a)}}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(a){Vt(n,n.return,a)}}function Ax(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Ng),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Ng),n;default:throw Error(r(435,t.tag))}}function jl(t,n){var a=Ax(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Px.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],d=t,x=n,A=x;e:for(;A!==null;){switch(A.tag){case 27:if(Ia(A.type)){en=A.stateNode,Fn=!1;break e}break;case 5:en=A.stateNode,Fn=!1;break e;case 3:case 4:en=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(en===null)throw Error(r(160));Pg(d,x,u),en=null,Fn=!1,d=u.alternate,d!==null&&(d.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Bg(n,t),n=n.sibling}var _i=null;function Bg(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(Ca(3,t,t.return),So(3,t),Ca(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(pn||a===null||Ni(a,a.return)),o&64&&$i&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=_i;if(Hn(n,t),Gn(t),o&512&&(pn||a===null||Ni(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":d=u.getElementsByTagName("title")[0],(!d||d[ar]||d[un]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=u.createElement(o),u.head.insertBefore(d,u.querySelector("head > title"))),wn(d,o,a),d[un]=t,Te(d),o=d;break e;case"link":var x=B0("link","href",u).get(o+(a.href||""));if(x){for(var A=0;A<x.length;A++)if(d=x[A],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(A,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;case"meta":if(x=B0("meta","content",u).get(o+(a.content||""))){for(A=0;A<x.length;A++)if(d=x[A],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(A,1);break t}}d=u.createElement(o),wn(d,o,a),u.head.appendChild(d);break;default:throw Error(r(468,o))}d[un]=t,Te(d),o=d}t.stateNode=o}else F0(u,t.type,t.stateNode);else t.stateNode=z0(u,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?F0(u,t.type,t.stateNode):z0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(pn||a===null||Ni(a,a.return)),a!==null&&o&4&&If(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(pn||a===null||Ni(a,a.return)),t.flags&32){u=t.stateNode;try{Gr(u,"")}catch(qe){Vt(t,t.return,qe)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(qe){Vt(t,t.return,qe)}}break;case 3:if(cc=null,u=_i,_i=oc(n.containerInfo),Hn(n,t),_i=u,Gn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(qe){Vt(t,t.return,qe)}Ff&&(Ff=!1,Fg(t));break;case 4:o=_i,_i=oc(t.stateNode.containerInfo),Hn(n,t),Gn(t),_i=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Zl=T()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 22:u=t.memoizedState!==null;var V=a!==null&&a.memoizedState!==null,oe=$i,_e=pn;if($i=oe||u,pn=_e||V,Hn(n,t),pn=_e,$i=oe,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||V||$i||pn||xr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){V=a=n;try{if(d=V.stateNode,u)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{A=V.stateNode;var Me=V.memoizedProps.style,ue=Me!=null&&Me.hasOwnProperty("display")?Me.display:null;A.style.display=ue==null||typeof ue=="boolean"?"":(""+ue).trim()}}catch(qe){Vt(V,V.return,qe)}}}else if(n.tag===6){if(a===null){V=n;try{V.stateNode.nodeValue=u?"":V.memoizedProps}catch(qe){Vt(V,V.return,qe)}}}else if(n.tag===18){if(a===null){V=n;try{var pe=V.stateNode;u?w0(pe,!0):w0(V.stateNode,!1)}catch(qe){Vt(V,V.return,qe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,jl(t,a))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,jl(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(Dg(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,d=zf(t);ql(t,d,u);break;case 5:var x=a.stateNode;a.flags&32&&(Gr(x,""),a.flags&=-33);var A=zf(t);ql(t,A,x);break;case 3:case 4:var V=a.stateNode.containerInfo,oe=zf(t);Bf(t,oe,V);break;default:throw Error(r(161))}}catch(_e){Vt(t,t.return,_e)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Fg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Fg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ta(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Lg(t,n.alternate,n),n=n.sibling}function xr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),xr(n);break;case 1:Ni(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&wg(n,n.return,a),xr(n);break;case 27:Uo(n.stateNode);case 26:case 5:Ni(n,n.return),xr(n);break;case 22:n.memoizedState===null&&xr(n);break;case 30:xr(n);break;default:xr(n)}t=t.sibling}}function na(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:na(u,d,a),So(4,d);break;case 1:if(na(u,d,a),o=d,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Vt(o,o.return,oe)}if(o=d,u=o.updateQueue,u!==null){var A=o.stateNode;try{var V=u.shared.hiddenCallbacks;if(V!==null)for(u.shared.hiddenCallbacks=null,u=0;u<V.length;u++)gm(V[u],A)}catch(oe){Vt(o,o.return,oe)}}a&&x&64&&Rg(d),Mo(d,d.return);break;case 27:Ug(d);case 26:case 5:na(u,d,a),a&&o===null&&x&4&&Cg(d),Mo(d,d.return);break;case 12:na(u,d,a);break;case 31:na(u,d,a),a&&x&4&&Ig(u,d);break;case 13:na(u,d,a),a&&x&4&&zg(u,d);break;case 22:d.memoizedState===null&&na(u,d,a),Mo(d,d.return);break;case 30:break;default:na(u,d,a)}n=n.sibling}}function Hf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&oo(a))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t))}function yi(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Hg(t,n,a,o),n=n.sibling}function Hg(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(t,n,a,o),u&2048&&So(9,n);break;case 1:yi(t,n,a,o);break;case 3:yi(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&oo(t)));break;case 12:if(u&2048){yi(t,n,a,o),t=n.stateNode;try{var d=n.memoizedProps,x=d.id,A=d.onPostCommit;typeof A=="function"&&A(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(V){Vt(n,n.return,V)}}else yi(t,n,a,o);break;case 31:yi(t,n,a,o);break;case 13:yi(t,n,a,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?yi(t,n,a,o):Eo(t,n):d._visibility&2?yi(t,n,a,o):(d._visibility|=2,os(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(x,n);break;case 24:yi(t,n,a,o),u&2048&&Gf(n.alternate,n);break;default:yi(t,n,a,o)}}function os(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=t,x=n,A=a,V=o,oe=x.flags;switch(x.tag){case 0:case 11:case 15:os(d,x,A,V,u),So(8,x);break;case 23:break;case 22:var _e=x.stateNode;x.memoizedState!==null?_e._visibility&2?os(d,x,A,V,u):Eo(d,x):(_e._visibility|=2,os(d,x,A,V,u)),u&&oe&2048&&Hf(x.alternate,x);break;case 24:os(d,x,A,V,u),u&&oe&2048&&Gf(x.alternate,x);break;default:os(d,x,A,V,u)}n=n.sibling}}function Eo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Eo(a,o),u&2048&&Hf(o.alternate,o);break;case 24:Eo(a,o),u&2048&&Gf(o.alternate,o);break;default:Eo(a,o)}n=n.sibling}}var bo=8192;function ls(t,n,a){if(t.subtreeFlags&bo)for(t=t.child;t!==null;)Gg(t,n,a),t=t.sibling}function Gg(t,n,a){switch(t.tag){case 26:ls(t,n,a),t.flags&bo&&t.memoizedState!==null&&hS(a,_i,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,a);break;case 3:case 4:var o=_i;_i=oc(t.stateNode.containerInfo),ls(t,n,a),_i=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=bo,bo=16777216,ls(t,n,a),bo=o):ls(t,n,a));break;default:ls(t,n,a)}}function Vg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function To(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Wg(o,t)}Vg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kg(t),t=t.sibling}function kg(t){switch(t.tag){case 0:case 11:case 15:To(t),t.flags&2048&&Ca(9,t,t.return);break;case 3:To(t);break;case 12:To(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Yl(t)):To(t);break;default:To(t)}}function Yl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Sn=o,Wg(o,t)}Vg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ca(8,n,n.return),Yl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Yl(n));break;default:Yl(n)}t=t.sibling}}function Wg(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:oo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Sn=o;else e:for(a=t;Sn!==null;){o=Sn;var u=o.sibling,d=o.return;if(Og(o),o===a){Sn=null;break e}if(u!==null){u.return=d,Sn=u;break e}Sn=d}}}var Rx={getCacheForType:function(t){var n=An(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return An(fn).controller.signal}},wx=typeof WeakMap=="function"?WeakMap:Map,zt=0,Yt=null,St=null,Tt=0,Gt=0,$n=null,Da=!1,cs=!1,Vf=!1,ia=0,an=0,Ua=0,Sr=0,kf=0,ei=0,us=0,Ao=null,Vn=null,Wf=!1,Zl=0,Xg=0,Kl=1/0,Ql=null,Na=null,vn=0,La=null,fs=null,aa=0,Xf=0,qf=null,qg=null,Ro=0,jf=null;function ti(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:P.T!==null?$f():ir()}function jg(){if(ei===0)if((Tt&536870912)===0||wt){var t=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function kn(t,n,a){(t===Yt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(hs(t,0),Oa(t,Tt,ei,!1)),On(t,a),((zt&2)===0||t!==Yt)&&(t===Yt&&((zt&2)===0&&(Sr|=a),an===4&&Oa(t,Tt,ei,!1)),Li(t))}function Yg(t,n,a){if((zt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||We(t,n),u=o?Ux(t,n):Zf(t,n,!0),d=o;do{if(u===0){cs&&!o&&Oa(t,n,0,!1);break}else{if(a=t.current.alternate,d&&!Cx(a)){u=Zf(t,n,!1),d=!1;continue}if(u===2){if(d=n,t.errorRecoveryDisabledLanes&d)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var A=t;u=Ao;var V=A.current.memoizedState.isDehydrated;if(V&&(hs(A,x).flags|=256),x=Zf(A,x,!1),x!==2){if(Vf&&!V){A.errorRecoveryDisabledLanes|=d,Sr|=d,u=4;break e}d=Vn,Vn=u,d!==null&&(Vn===null?Vn=d:Vn.push.apply(Vn,d))}u=x}if(d=!1,u!==2)continue}}if(u===1){hs(t,0),Oa(t,n,0,!0);break}e:{switch(o=t,d=u,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Oa(o,n,ei,!Da);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Zl+300-T(),10<u)){if(Oa(o,n,ei,!Da),be(o,0,!0)!==0)break e;aa=n,o.timeoutHandle=T0(Zg.bind(null,o,a,Vn,Ql,Wf,n,ei,Sr,us,Da,d,"Throttled",-0,0),u);break e}Zg(o,a,Vn,Ql,Wf,n,ei,Sr,us,Da,d,null,-0,0)}}break}while(!0);Li(t)}function Zg(t,n,a,o,u,d,x,A,V,oe,_e,Me,ue,pe){if(t.timeoutHandle=-1,Me=n.subtreeFlags,Me&8192||(Me&16785408)===16785408){Me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ki},Gg(n,d,Me);var qe=(d&62914560)===d?Zl-T():(d&4194048)===d?Xg-T():0;if(qe=dS(Me,qe),qe!==null){aa=d,t.cancelPendingCommit=qe(i0.bind(null,t,n,d,a,o,u,x,A,V,_e,Me,null,ue,pe)),Oa(t,d,x,!oe);return}}i0(t,n,d,a,o,u,x,A,V)}function Cx(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],d=u.getSnapshot;u=u.value;try{if(!Zn(d(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(t,n,a,o){n&=~kf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var d=31-Ge(u),x=1<<d;o[d]=-1,u&=~x}a!==0&&js(t,a,n)}function Jl(){return(zt&6)===0?(wo(0),!1):!0}function Yf(){if(St!==null){if(Gt===0)var t=St.return;else t=St,ji=hr=null,uf(t),ns=null,co=0,t=St;for(;t!==null;)Ag(t.alternate,t),t=t.return;St=null}}function hs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Zx(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),aa=0,Yf(),Yt=t,St=a=Xi(t.current,null),Tt=n,Gt=0,$n=null,Da=!1,cs=We(t,n),Vf=!1,us=ei=kf=Sr=Ua=an=0,Vn=Ao=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ge(o),d=1<<u;n|=t[u],o&=~d}return ia=n,yl(),a}function Kg(t,n){dt=null,P.H=_o,n===ts||n===Rl?(n=hm(),Gt=3):n===Qu?(n=hm(),Gt=4):Gt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,$n=n,St===null&&(an=1,Gl(t,li(n,t.current)))}function Qg(){var t=Qn.current;return t===null?!0:(Tt&4194048)===Tt?hi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===hi:!1}function Jg(){var t=P.H;return P.H=_o,t===null?_o:t}function $g(){var t=P.A;return P.A=Rx,t}function $l(){an=4,Da||(Tt&4194048)!==Tt&&Qn.current!==null||(cs=!0),(Ua&134217727)===0&&(Sr&134217727)===0||Yt===null||Oa(Yt,Tt,ei,!1)}function Zf(t,n,a){var o=zt;zt|=2;var u=Jg(),d=$g();(Yt!==t||Tt!==n)&&(Ql=null,hs(t,n)),n=!1;var x=an;e:do try{if(Gt!==0&&St!==null){var A=St,V=$n;switch(Gt){case 8:Yf(),x=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var oe=Gt;if(Gt=0,$n=null,ds(t,A,V,oe),a&&cs){x=0;break e}break;default:oe=Gt,Gt=0,$n=null,ds(t,A,V,oe)}}Dx(),x=an;break}catch(_e){Kg(t,_e)}while(!0);return n&&t.shellSuspendCounter++,ji=hr=null,zt=o,P.H=u,P.A=d,St===null&&(Yt=null,Tt=0,yl()),x}function Dx(){for(;St!==null;)e0(St)}function Ux(t,n){var a=zt;zt|=2;var o=Jg(),u=$g();Yt!==t||Tt!==n?(Ql=null,Kl=T()+500,hs(t,n)):cs=We(t,n);e:do try{if(Gt!==0&&St!==null){n=St;var d=$n;t:switch(Gt){case 1:Gt=0,$n=null,ds(t,n,d,1);break;case 2:case 9:if(um(d)){Gt=0,$n=null,t0(n);break}n=function(){Gt!==2&&Gt!==9||Yt!==t||(Gt=7),Li(t)},d.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:um(d)?(Gt=0,$n=null,t0(n)):(Gt=0,$n=null,ds(t,n,d,7));break;case 5:var x=null;switch(St.tag){case 26:x=St.memoizedState;case 5:case 27:var A=St;if(x?H0(x):A.stateNode.complete){Gt=0,$n=null;var V=A.sibling;if(V!==null)St=V;else{var oe=A.return;oe!==null?(St=oe,ec(oe)):St=null}break t}}Gt=0,$n=null,ds(t,n,d,5);break;case 6:Gt=0,$n=null,ds(t,n,d,6);break;case 8:Yf(),an=6;break e;default:throw Error(r(462))}}Nx();break}catch(_e){Kg(t,_e)}while(!0);return ji=hr=null,P.H=o,P.A=u,zt=a,St!==null?0:(Yt=null,Tt=0,yl(),an)}function Nx(){for(;St!==null&&!Kt();)e0(St)}function e0(t){var n=bg(t.alternate,t,ia);t.memoizedProps=t.pendingProps,n===null?ec(t):St=n}function t0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_g(a,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=_g(a,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:uf(n);default:Ag(a,n),n=St=$p(n,ia),n=bg(a,n,ia)}t.memoizedProps=t.pendingProps,n===null?ec(t):St=n}function ds(t,n,a,o){ji=hr=null,uf(n),ns=null,co=0;var u=n.return;try{if(xx(t,u,n,a,Tt)){an=1,Gl(t,li(a,t.current)),St=null;return}}catch(d){if(u!==null)throw St=u,d;an=1,Gl(t,li(a,t.current)),St=null;return}n.flags&32768?(wt||o===1?t=!0:cs||(Tt&536870912)!==0?t=!1:(Da=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),n0(n,t)):ec(n)}function ec(t){var n=t;do{if((n.flags&32768)!==0){n0(n,Da);return}t=n.return;var a=Ex(n.alternate,n,ia);if(a!==null){St=a;return}if(n=n.sibling,n!==null){St=n;return}St=n=t}while(n!==null);an===0&&(an=5)}function n0(t,n){do{var a=bx(t.alternate,t);if(a!==null){a.flags&=32767,St=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){St=t;return}St=t=a}while(t!==null);an=6,St=null}function i0(t,n,a,o,u,d,x,A,V){t.cancelPendingCommit=null;do tc();while(vn!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Iu,si(t,a,d,x,A,V),t===Yt&&(St=Yt=null,Tt=0),fs=n,La=t,aa=a,Xf=d,qf=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ix(ve,function(){return l0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=q.p,q.p=2,x=zt,zt|=4;try{Tx(t,n,a)}finally{zt=x,q.p=u,P.T=o}}vn=1,a0(),r0(),s0()}}function a0(){if(vn===1){vn=0;var t=La,n=fs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=zt;zt|=4;try{Bg(n,t);var d=oh,x=Wp(t.containerInfo),A=d.focusedElem,V=d.selectionRange;if(x!==A&&A&&A.ownerDocument&&kp(A.ownerDocument.documentElement,A)){if(V!==null&&Uu(A)){var oe=V.start,_e=V.end;if(_e===void 0&&(_e=oe),"selectionStart"in A)A.selectionStart=oe,A.selectionEnd=Math.min(_e,A.value.length);else{var Me=A.ownerDocument||document,ue=Me&&Me.defaultView||window;if(ue.getSelection){var pe=ue.getSelection(),qe=A.textContent.length,ot=Math.min(V.start,qe),Xt=V.end===void 0?ot:Math.min(V.end,qe);!pe.extend&&ot>Xt&&(x=Xt,Xt=ot,ot=x);var ne=Vp(A,ot),j=Vp(A,Xt);if(ne&&j&&(pe.rangeCount!==1||pe.anchorNode!==ne.node||pe.anchorOffset!==ne.offset||pe.focusNode!==j.node||pe.focusOffset!==j.offset)){var se=Me.createRange();se.setStart(ne.node,ne.offset),pe.removeAllRanges(),ot>Xt?(pe.addRange(se),pe.extend(j.node,j.offset)):(se.setEnd(j.node,j.offset),pe.addRange(se))}}}}for(Me=[],pe=A;pe=pe.parentNode;)pe.nodeType===1&&Me.push({element:pe,left:pe.scrollLeft,top:pe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<Me.length;A++){var Se=Me[A];Se.element.scrollLeft=Se.left,Se.element.scrollTop=Se.top}}dc=!!sh,oh=sh=null}finally{zt=u,q.p=o,P.T=a}}t.current=n,vn=2}}function r0(){if(vn===2){vn=0;var t=La,n=fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=q.p;q.p=2;var u=zt;zt|=4;try{Lg(t,n.alternate,n)}finally{zt=u,q.p=o,P.T=a}}vn=3}}function s0(){if(vn===4||vn===3){vn=0,I();var t=La,n=fs,a=aa,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,fs=La=null,o0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Na=null),Fr(a),n=n.stateNode,Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=q.p,q.p=2,P.T=null;try{for(var d=t.onRecoverableError,x=0;x<o.length;x++){var A=o[x];d(A.value,{componentStack:A.stack})}}finally{P.T=n,q.p=u}}(aa&3)!==0&&tc(),Li(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===jf?Ro++:(Ro=0,jf=t):Ro=0,wo(0)}}function o0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,oo(n)))}function tc(){return a0(),r0(),s0(),l0()}function l0(){if(vn!==5)return!1;var t=La,n=Xf;Xf=0;var a=Fr(aa),o=P.T,u=q.p;try{q.p=32>a?32:a,P.T=null,a=qf,qf=null;var d=La,x=aa;if(vn=0,fs=La=null,aa=0,(zt&6)!==0)throw Error(r(331));var A=zt;if(zt|=4,kg(d.current),Hg(d,d.current,x,a),zt=A,wo(0,!1),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(Ce,d)}catch{}return!0}finally{q.p=u,P.T=o,o0(t,n)}}function c0(t,n,a){n=li(a,n),n=Tf(t.stateNode,n,2),t=Aa(t,n,2),t!==null&&(On(t,2),Li(t))}function Vt(t,n,a){if(t.tag===3)c0(t,t,a);else for(;n!==null;){if(n.tag===3){c0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Na===null||!Na.has(o))){t=li(a,t),a=ug(2),o=Aa(n,a,2),o!==null&&(fg(a,o,n,t),On(o,2),Li(o));break}}n=n.return}}function Kf(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new wx;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Vf=!0,u.add(a),t=Lx.bind(null,t,n,a),n.then(t,t))}function Lx(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Yt===t&&(Tt&a)===a&&(an===4||an===3&&(Tt&62914560)===Tt&&300>T()-Zl?(zt&2)===0&&hs(t,0):kf|=a,us===Tt&&(us=0)),Li(t)}function u0(t,n){n===0&&(n=Ht()),t=cr(t,n),t!==null&&(On(t,n),Li(t))}function Ox(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),u0(t,a)}function Px(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),u0(t,a)}function Ix(t,n){return rt(t,n)}var nc=null,ps=null,Qf=!1,ic=!1,Jf=!1,Pa=0;function Li(t){t!==ps&&t.next===null&&(ps===null?nc=ps=t:ps=ps.next=t),ic=!0,Qf||(Qf=!0,Bx())}function wo(t,n){if(!Jf&&ic){Jf=!0;do for(var a=!1,o=nc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var d=0;else{var x=o.suspendedLanes,A=o.pingedLanes;d=(1<<31-Ge(42|t)+1)-1,d&=u&~(x&~A),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,p0(o,d))}else d=Tt,d=be(o,o===Yt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||We(o,d)||(a=!0,p0(o,d));o=o.next}while(a);Jf=!1}}function zx(){f0()}function f0(){ic=Qf=!1;var t=0;Pa!==0&&Yx()&&(t=Pa);for(var n=T(),a=null,o=nc;o!==null;){var u=o.next,d=h0(o,n);d===0?(o.next=null,a===null?nc=u:a.next=u,u===null&&(ps=a)):(a=o,(t!==0||(d&3)!==0)&&(ic=!0)),o=u}vn!==0&&vn!==5||wo(t),Pa!==0&&(Pa=0)}function h0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var x=31-Ge(d),A=1<<x,V=u[x];V===-1?((A&a)===0||(A&o)!==0)&&(u[x]=ct(A,n)):V<=n&&(t.expiredLanes|=A),d&=~A}if(n=Yt,a=Tt,a=be(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||We(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&$t(o),Fr(a)){case 2:case 8:a=Ae;break;case 32:a=ve;break;case 268435456:a=Ue;break;default:a=ve}return o=d0.bind(null,t),a=rt(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&$t(o),t.callbackPriority=2,t.callbackNode=null,2}function d0(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(tc()&&t.callbackNode!==a)return null;var o=Tt;return o=be(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Yg(t,o,n),h0(t,T()),t.callbackNode!=null&&t.callbackNode===a?d0.bind(null,t):null)}function p0(t,n){if(tc())return null;Yg(t,n,!0)}function Bx(){Kx(function(){(zt&6)!==0?rt(xe,zx):f0()})}function $f(){if(Pa===0){var t=$r;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Pa=t}return Pa}function m0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:fl(""+t)}function g0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Fx(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var d=m0((u[En]||null).action),x=o.submitter;x&&(n=(n=x[En]||null)?m0(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var A=new ml("action","action",null,o,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Pa!==0){var V=x?g0(u,x):new FormData(u);yf(a,{pending:!0,data:V,method:u.method,action:d},null,V)}}else typeof d=="function"&&(A.preventDefault(),V=x?g0(u,x):new FormData(u),yf(a,{pending:!0,data:V,method:u.method,action:d},d,V))},currentTarget:u}]})}}for(var eh=0;eh<Pu.length;eh++){var th=Pu[eh],Hx=th.toLowerCase(),Gx=th[0].toUpperCase()+th.slice(1);vi(Hx,"on"+Gx)}vi(jp,"onAnimationEnd"),vi(Yp,"onAnimationIteration"),vi(Zp,"onAnimationStart"),vi("dblclick","onDoubleClick"),vi("focusin","onFocus"),vi("focusout","onBlur"),vi(ix,"onTransitionRun"),vi(ax,"onTransitionStart"),vi(rx,"onTransitionCancel"),vi(Kp,"onTransitionEnd"),nt("onMouseEnter",["mouseout","mouseover"]),nt("onMouseLeave",["mouseout","mouseover"]),nt("onPointerEnter",["pointerout","pointerover"]),nt("onPointerLeave",["pointerout","pointerover"]),Fe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Fe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Fe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Fe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Fe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vx=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Co));function v0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var A=o[x],V=A.instance,oe=A.currentTarget;if(A=A.listener,V!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=oe;try{d(u)}catch(_e){_l(_e)}u.currentTarget=null,d=V}else for(x=0;x<o.length;x++){if(A=o[x],V=A.instance,oe=A.currentTarget,A=A.listener,V!==d&&u.isPropagationStopped())break e;d=A,u.currentTarget=oe;try{d(u)}catch(_e){_l(_e)}u.currentTarget=null,d=V}}}}function Mt(t,n){var a=n[Zs];a===void 0&&(a=n[Zs]=new Set);var o=t+"__bubble";a.has(o)||(_0(n,t,2,!1),a.add(o))}function nh(t,n,a){var o=0;n&&(o|=4),_0(a,t,o,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function ih(t){if(!t[ac]){t[ac]=!0,Ie.forEach(function(a){a!=="selectionchange"&&(Vx.has(a)||nh(a,!1,t),nh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[ac]||(n[ac]=!0,nh("selectionchange",!1,n))}}function _0(t,n,a,o){switch(j0(n)){case 2:var u=gS;break;case 8:u=vS;break;default:u=_h}a=u.bind(null,n,a,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function ah(t,n,a,o,u){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var A=o.stateNode.containerInfo;if(A===u)break;if(x===4)for(x=o.return;x!==null;){var V=x.tag;if((V===3||V===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;A!==null;){if(x=te(A),x===null)return;if(V=x.tag,V===5||V===6||V===26||V===27){o=d=x;continue e}A=A.parentNode}}o=o.return}Ep(function(){var oe=d,_e=xu(a),Me=[];e:{var ue=Qp.get(t);if(ue!==void 0){var pe=ml,qe=t;switch(t){case"keypress":if(dl(a)===0)break e;case"keydown":case"keyup":pe=Py;break;case"focusin":qe="focus",pe=Au;break;case"focusout":qe="blur",pe=Au;break;case"beforeblur":case"afterblur":pe=Au;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":pe=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":pe=Ey;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":pe=By;break;case jp:case Yp:case Zp:pe=Ay;break;case Kp:pe=Hy;break;case"scroll":case"scrollend":pe=Sy;break;case"wheel":pe=Vy;break;case"copy":case"cut":case"paste":pe=wy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":pe=wp;break;case"toggle":case"beforetoggle":pe=Wy}var ot=(n&4)!==0,Xt=!ot&&(t==="scroll"||t==="scrollend"),ne=ot?ue!==null?ue+"Capture":null:ue;ot=[];for(var j=oe,se;j!==null;){var Se=j;if(se=Se.stateNode,Se=Se.tag,Se!==5&&Se!==26&&Se!==27||se===null||ne===null||(Se=Ks(j,ne),Se!=null&&ot.push(Do(j,Se,se))),Xt)break;j=j.return}0<ot.length&&(ue=new pe(ue,qe,null,a,_e),Me.push({event:ue,listeners:ot}))}}if((n&7)===0){e:{if(ue=t==="mouseover"||t==="pointerover",pe=t==="mouseout"||t==="pointerout",ue&&a!==yu&&(qe=a.relatedTarget||a.fromElement)&&(te(qe)||qe[_a]))break e;if((pe||ue)&&(ue=_e.window===_e?_e:(ue=_e.ownerDocument)?ue.defaultView||ue.parentWindow:window,pe?(qe=a.relatedTarget||a.toElement,pe=oe,qe=qe?te(qe):null,qe!==null&&(Xt=c(qe),ot=qe.tag,qe!==Xt||ot!==5&&ot!==27&&ot!==6)&&(qe=null)):(pe=null,qe=oe),pe!==qe)){if(ot=Ap,Se="onMouseLeave",ne="onMouseEnter",j="mouse",(t==="pointerout"||t==="pointerover")&&(ot=wp,Se="onPointerLeave",ne="onPointerEnter",j="pointer"),Xt=pe==null?ue:de(pe),se=qe==null?ue:de(qe),ue=new ot(Se,j+"leave",pe,a,_e),ue.target=Xt,ue.relatedTarget=se,Se=null,te(_e)===oe&&(ot=new ot(ne,j+"enter",qe,a,_e),ot.target=se,ot.relatedTarget=Xt,Se=ot),Xt=Se,pe&&qe)t:{for(ot=kx,ne=pe,j=qe,se=0,Se=ne;Se;Se=ot(Se))se++;Se=0;for(var st=j;st;st=ot(st))Se++;for(;0<se-Se;)ne=ot(ne),se--;for(;0<Se-se;)j=ot(j),Se--;for(;se--;){if(ne===j||j!==null&&ne===j.alternate){ot=ne;break t}ne=ot(ne),j=ot(j)}ot=null}else ot=null;pe!==null&&y0(Me,ue,pe,ot,!1),qe!==null&&Xt!==null&&y0(Me,Xt,qe,ot,!0)}}e:{if(ue=oe?de(oe):window,pe=ue.nodeName&&ue.nodeName.toLowerCase(),pe==="select"||pe==="input"&&ue.type==="file")var Nt=Ip;else if(Op(ue))if(zp)Nt=ex;else{Nt=Jy;var et=Qy}else pe=ue.nodeName,!pe||pe.toLowerCase()!=="input"||ue.type!=="checkbox"&&ue.type!=="radio"?oe&&_u(oe.elementType)&&(Nt=Ip):Nt=$y;if(Nt&&(Nt=Nt(t,oe))){Pp(Me,Nt,a,_e);break e}et&&et(t,ue,oe),t==="focusout"&&oe&&ue.type==="number"&&oe.memoizedProps.value!=null&&gn(ue,"number",ue.value)}switch(et=oe?de(oe):window,t){case"focusin":(Op(et)||et.contentEditable==="true")&&(Xr=et,Nu=oe,ao=null);break;case"focusout":ao=Nu=Xr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,Xp(Me,a,_e);break;case"selectionchange":if(nx)break;case"keydown":case"keyup":Xp(Me,a,_e)}var pt;if(wu)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Wr?Np(t,a)&&(At="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(Cp&&a.locale!=="ko"&&(Wr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Wr&&(pt=bp()):(ya=_e,Eu="value"in ya?ya.value:ya.textContent,Wr=!0)),et=rc(oe,At),0<et.length&&(At=new Rp(At,t,null,a,_e),Me.push({event:At,listeners:et}),pt?At.data=pt:(pt=Lp(a),pt!==null&&(At.data=pt)))),(pt=qy?jy(t,a):Yy(t,a))&&(At=rc(oe,"onBeforeInput"),0<At.length&&(et=new Rp("onBeforeInput","beforeinput",null,a,_e),Me.push({event:et,listeners:At}),et.data=pt)),Fx(Me,t,oe,a,_e)}v0(Me,n)})}function Do(t,n,a){return{instance:t,listener:n,currentTarget:a}}function rc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,d=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||d===null||(u=Ks(t,a),u!=null&&o.unshift(Do(t,u,d)),u=Ks(t,n),u!=null&&o.push(Do(t,u,d))),t.tag===3)return o;t=t.return}return[]}function kx(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y0(t,n,a,o,u){for(var d=n._reactName,x=[];a!==null&&a!==o;){var A=a,V=A.alternate,oe=A.stateNode;if(A=A.tag,V!==null&&V===o)break;A!==5&&A!==26&&A!==27||oe===null||(V=oe,u?(oe=Ks(a,d),oe!=null&&x.unshift(Do(a,oe,V))):u||(oe=Ks(a,d),oe!=null&&x.push(Do(a,oe,V)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Wx=/\r\n?/g,Xx=/\u0000|\uFFFD/g;function x0(t){return(typeof t=="string"?t:""+t).replace(Wx,`
`).replace(Xx,"")}function S0(t,n){return n=x0(n),x0(t)===n}function Wt(t,n,a,o,u,d){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gr(t,""+o);break;case"className":Ft(t,"class",o);break;case"tabIndex":Ft(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(t,a,o);break;case"style":Sp(t,o,d);break;case"data":if(n!=="object"){Ft(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=fl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=ki);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=fl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Mt("beforetoggle",t),Mt("toggle",t),jt(t,"popover",o);break;case"xlinkActuate":xt(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":xt(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":xt(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":xt(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":xt(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":xt(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":xt(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":xt(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":xt(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":jt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=yy.get(a)||a,jt(t,a,o))}}function rh(t,n,a,o,u,d){switch(a){case"style":Sp(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&Gr(t,""+o);break;case"onScroll":o!=null&&Mt("scroll",t);break;case"onScrollEnd":o!=null&&Mt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ye.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),d=t[En]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(n,d,u),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):jt(t,a,o)}}}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Mt("error",t),Mt("load",t);var o=!1,u=!1,d;for(d in a)if(a.hasOwnProperty(d)){var x=a[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,d,x,a,null)}}u&&Wt(t,n,"srcSet",a.srcSet,a,null),o&&Wt(t,n,"src",a.src,a,null);return;case"input":Mt("invalid",t);var A=d=x=u=null,V=null,oe=null;for(o in a)if(a.hasOwnProperty(o)){var _e=a[o];if(_e!=null)switch(o){case"name":u=_e;break;case"type":x=_e;break;case"checked":V=_e;break;case"defaultChecked":oe=_e;break;case"value":d=_e;break;case"defaultValue":A=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(r(137,n));break;default:Wt(t,n,o,_e,a,null)}}Pn(t,d,A,V,oe,x,u,!1);return;case"select":Mt("invalid",t),o=x=d=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":d=A;break;case"defaultValue":x=A;break;case"multiple":o=A;default:Wt(t,n,u,A,a,null)}n=d,a=x,t.multiple=!!o,n!=null?on(t,!!o,n,!1):a!=null&&on(t,!!o,a,!0);return;case"textarea":Mt("invalid",t),d=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(A=a[x],A!=null))switch(x){case"value":o=A;break;case"defaultValue":u=A;break;case"children":d=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Wt(t,n,x,A,a,null)}Ci(t,o,u,d);return;case"option":for(V in a)if(a.hasOwnProperty(V)&&(o=a[V],o!=null))switch(V){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,V,o,a,null)}return;case"dialog":Mt("beforetoggle",t),Mt("toggle",t),Mt("cancel",t),Mt("close",t);break;case"iframe":case"object":Mt("load",t);break;case"video":case"audio":for(o=0;o<Co.length;o++)Mt(Co[o],t);break;case"image":Mt("error",t),Mt("load",t);break;case"details":Mt("toggle",t);break;case"embed":case"source":case"link":Mt("error",t),Mt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(o=a[oe],o!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Wt(t,n,oe,o,a,null)}return;default:if(_u(n)){for(_e in a)a.hasOwnProperty(_e)&&(o=a[_e],o!==void 0&&rh(t,n,_e,o,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(o=a[A],o!=null&&Wt(t,n,A,o,a,null))}function qx(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,d=null,x=null,A=null,V=null,oe=null,_e=null;for(pe in a){var Me=a[pe];if(a.hasOwnProperty(pe)&&Me!=null)switch(pe){case"checked":break;case"value":break;case"defaultValue":V=Me;default:o.hasOwnProperty(pe)||Wt(t,n,pe,null,o,Me)}}for(var ue in o){var pe=o[ue];if(Me=a[ue],o.hasOwnProperty(ue)&&(pe!=null||Me!=null))switch(ue){case"type":d=pe;break;case"name":u=pe;break;case"checked":oe=pe;break;case"defaultChecked":_e=pe;break;case"value":x=pe;break;case"defaultValue":A=pe;break;case"children":case"dangerouslySetInnerHTML":if(pe!=null)throw Error(r(137,n));break;default:pe!==Me&&Wt(t,n,ue,pe,o,Me)}}Dn(t,x,A,V,oe,_e,d,u);return;case"select":pe=x=A=ue=null;for(d in a)if(V=a[d],a.hasOwnProperty(d)&&V!=null)switch(d){case"value":break;case"multiple":pe=V;default:o.hasOwnProperty(d)||Wt(t,n,d,null,o,V)}for(u in o)if(d=o[u],V=a[u],o.hasOwnProperty(u)&&(d!=null||V!=null))switch(u){case"value":ue=d;break;case"defaultValue":A=d;break;case"multiple":x=d;default:d!==V&&Wt(t,n,u,d,o,V)}n=A,a=x,o=pe,ue!=null?on(t,!!a,ue,!1):!!o!=!!a&&(n!=null?on(t,!!a,n,!0):on(t,!!a,a?[]:"",!1));return;case"textarea":pe=ue=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!o.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Wt(t,n,A,null,o,u)}for(x in o)if(u=o[x],d=a[x],o.hasOwnProperty(x)&&(u!=null||d!=null))switch(x){case"value":ue=u;break;case"defaultValue":pe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==d&&Wt(t,n,x,u,o,d)}Hr(t,ue,pe);return;case"option":for(var qe in a)if(ue=a[qe],a.hasOwnProperty(qe)&&ue!=null&&!o.hasOwnProperty(qe))switch(qe){case"selected":t.selected=!1;break;default:Wt(t,n,qe,null,o,ue)}for(V in o)if(ue=o[V],pe=a[V],o.hasOwnProperty(V)&&ue!==pe&&(ue!=null||pe!=null))switch(V){case"selected":t.selected=ue&&typeof ue!="function"&&typeof ue!="symbol";break;default:Wt(t,n,V,ue,o,pe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ot in a)ue=a[ot],a.hasOwnProperty(ot)&&ue!=null&&!o.hasOwnProperty(ot)&&Wt(t,n,ot,null,o,ue);for(oe in o)if(ue=o[oe],pe=a[oe],o.hasOwnProperty(oe)&&ue!==pe&&(ue!=null||pe!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Wt(t,n,oe,ue,o,pe)}return;default:if(_u(n)){for(var Xt in a)ue=a[Xt],a.hasOwnProperty(Xt)&&ue!==void 0&&!o.hasOwnProperty(Xt)&&rh(t,n,Xt,void 0,o,ue);for(_e in o)ue=o[_e],pe=a[_e],!o.hasOwnProperty(_e)||ue===pe||ue===void 0&&pe===void 0||rh(t,n,_e,ue,o,pe);return}}for(var ne in a)ue=a[ne],a.hasOwnProperty(ne)&&ue!=null&&!o.hasOwnProperty(ne)&&Wt(t,n,ne,null,o,ue);for(Me in o)ue=o[Me],pe=a[Me],!o.hasOwnProperty(Me)||ue===pe||ue==null&&pe==null||Wt(t,n,Me,ue,o,pe)}function M0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function jx(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],d=u.transferSize,x=u.initiatorType,A=u.duration;if(d&&A&&M0(x)){for(x=0,A=u.responseEnd,o+=1;o<a.length;o++){var V=a[o],oe=V.startTime;if(oe>A)break;var _e=V.transferSize,Me=V.initiatorType;_e&&M0(Me)&&(V=V.responseEnd,x+=_e*(V<A?1:(A-oe)/(V-oe)))}if(--o,n+=8*(d+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sh=null,oh=null;function sc(t){return t.nodeType===9?t:t.ownerDocument}function E0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function b0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function lh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var ch=null;function Yx(){var t=window.event;return t&&t.type==="popstate"?t===ch?!1:(ch=t,!0):(ch=null,!1)}var T0=typeof setTimeout=="function"?setTimeout:void 0,Zx=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,Kx=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(t){return A0.resolve(null).then(t).catch(Qx)}:T0;function Qx(t){setTimeout(function(){throw t})}function Ia(t){return t==="head"}function R0(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),_s(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Uo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Uo(a);for(var d=a.firstChild;d;){var x=d.nextSibling,A=d.nodeName;d[ar]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=x}}else a==="body"&&Uo(t.ownerDocument.body);a=u}while(a);_s(n)}function w0(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function uh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":uh(a),C(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Jx(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var d=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=di(t.nextSibling),t===null)break}return null}function $x(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=di(t.nextSibling),t===null))return null;return t}function C0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=di(t.nextSibling),t===null))return null;return t}function fh(t){return t.data==="$?"||t.data==="$~"}function hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function eS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function di(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var dh=null;function D0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return di(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function N0(t,n,a){switch(n=sc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Uo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);C(t)}var pi=new Map,L0=new Set;function oc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ra=q.d;q.d={f:tS,r:nS,D:iS,C:aS,L:rS,m:sS,X:lS,S:oS,M:cS};function tS(){var t=ra.f(),n=Jl();return t||n}function nS(t){var n=fe(t);n!==null&&n.tag===5&&n.type==="form"?Km(n):ra.r(t)}var ms=typeof document>"u"?null:document;function O0(t,n,a){var o=ms;if(o&&typeof n=="string"&&n){var u=bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),L0.has(u)||(L0.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),wn(n,"link",t),Te(n),o.head.appendChild(n)))}}function iS(t){ra.D(t),O0("dns-prefetch",t,null)}function aS(t,n){ra.C(t,n),O0("preconnect",t,n)}function rS(t,n,a){ra.L(t,n,a);var o=ms;if(o&&t&&n){var u='link[rel="preload"][as="'+bt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+bt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+bt(a.imageSizes)+'"]')):u+='[href="'+bt(t)+'"]';var d=u;switch(n){case"style":d=gs(t);break;case"script":d=vs(t)}pi.has(d)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),pi.set(d,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(No(d))||n==="script"&&o.querySelector(Lo(d))||(n=o.createElement("link"),wn(n,"link",t),Te(n),o.head.appendChild(n)))}}function sS(t,n){ra.m(t,n);var a=ms;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+bt(o)+'"][href="'+bt(t)+'"]',d=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=vs(t)}if(!pi.has(d)&&(t=v({rel:"modulepreload",href:t},n),pi.set(d,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Lo(d)))return}o=a.createElement("link"),wn(o,"link",t),Te(o),a.head.appendChild(o)}}}function oS(t,n,a){ra.S(t,n,a);var o=ms;if(o&&t){var u=ie(o).hoistableStyles,d=gs(t);n=n||"default";var x=u.get(d);if(!x){var A={loading:0,preload:null};if(x=o.querySelector(No(d)))A.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=pi.get(d))&&ph(t,a);var V=x=o.createElement("link");Te(V),wn(V,"link",t),V._p=new Promise(function(oe,_e){V.onload=oe,V.onerror=_e}),V.addEventListener("load",function(){A.loading|=1}),V.addEventListener("error",function(){A.loading|=2}),A.loading|=4,lc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:A},u.set(d,x)}}}function lS(t,n){ra.X(t,n);var a=ms;if(a&&t){var o=ie(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=v({src:t,async:!0},n),(n=pi.get(u))&&mh(t,n),d=a.createElement("script"),Te(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function cS(t,n){ra.M(t,n);var a=ms;if(a&&t){var o=ie(a).hoistableScripts,u=vs(t),d=o.get(u);d||(d=a.querySelector(Lo(u)),d||(t=v({src:t,async:!0,type:"module"},n),(n=pi.get(u))&&mh(t,n),d=a.createElement("script"),Te(d),wn(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(u,d))}}function P0(t,n,a,o){var u=(u=X.current)?oc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=gs(a.href),a=ie(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=gs(a.href);var d=ie(u).hoistableStyles,x=d.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,x),(d=u.querySelector(No(t)))&&!d._p&&(x.instance=d,x.state.loading=5),pi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},pi.set(t,a),d||uS(u,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(a),a=ie(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function gs(t){return'href="'+bt(t)+'"'}function No(t){return'link[rel="stylesheet"]['+t+"]"}function I0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function uS(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),wn(n,"link",a),Te(n),t.head.appendChild(n))}function vs(t){return'[src="'+bt(t)+'"]'}function Lo(t){return"script[async]"+t}function z0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+bt(a.href)+'"]');if(o)return n.instance=o,Te(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Te(o),wn(o,"style",u),lc(o,a.precedence,t),n.instance=o;case"stylesheet":u=gs(a.href);var d=t.querySelector(No(u));if(d)return n.state.loading|=4,n.instance=d,Te(d),d;o=I0(a),(u=pi.get(u))&&ph(o,u),d=(t.ownerDocument||t).createElement("link"),Te(d);var x=d;return x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),wn(d,"link",o),n.state.loading|=4,lc(d,a.precedence,t),n.instance=d;case"script":return d=vs(a.src),(u=t.querySelector(Lo(d)))?(n.instance=u,Te(u),u):(o=a,(u=pi.get(d))&&(o=v({},a),mh(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Te(u),wn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,t));return n.instance}function lc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,d=u,x=0;x<o.length;x++){var A=o[x];if(A.dataset.precedence===n)d=A;else if(d!==u)break}d?d.parentNode.insertBefore(t,d.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function ph(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function mh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var cc=null;function B0(t,n,a){if(cc===null){var o=new Map,u=cc=new Map;u.set(a,o)}else u=cc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var d=a[u];if(!(d[ar]||d[un]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=t+x;var A=o.get(x);A?A.push(d):o.set(x,[d])}}return o}function F0(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function fS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function H0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function hS(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gs(o.href),d=n.querySelector(No(u));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=uc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=d,Te(d);return}d=n.ownerDocument||n,o=I0(o),(u=pi.get(u))&&ph(o,u),d=d.createElement("link"),Te(d);var x=d;x._p=new Promise(function(A,V){x.onload=A,x.onerror=V}),wn(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=uc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var gh=0;function dS(t,n){return t.stylesheets&&t.count===0&&hc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+n);0<t.imgBytes&&gh===0&&(gh=62500*jx());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&hc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>gh?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function uc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)hc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var fc=null;function hc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,fc=new Map,n.forEach(pS,t),fc=null,uc.call(t))}function pS(t,n){if(!(n.state.loading&4)){var a=fc.get(t);if(a)var o=a.get(null);else{a=new Map,fc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<u.length;d++){var x=u[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),d=a.get(x)||o,d===o&&a.set(null,u),a.set(x,u),this.count++,o=uc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),d?d.parentNode.insertBefore(u,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Oo={$$typeof:O,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function mS(t,n,a,o,u,d,x,A,V){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dt(0),this.hiddenUpdates=Dt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=V,this.incompleteTransitions=new Map}function G0(t,n,a,o,u,d,x,A,V,oe,_e,Me){return t=new mS(t,n,a,x,V,oe,_e,Me,A),n=1,d===!0&&(n|=24),d=Kn(3,null,null,n),t.current=d,d.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:n},Ju(d),t}function V0(t){return t?(t=Yr,t):Yr}function k0(t,n,a,o,u,d){u=V0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ta(n),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Aa(t,o,n),a!==null&&(kn(a,t,n),fo(a,t,n))}function W0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function vh(t,n){W0(t,n),(t=t.alternate)&&W0(t,n)}function X0(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&kn(n,t,67108864),vh(t,67108864)}}function q0(t){if(t.tag===13||t.tag===31){var n=ti();n=Br(n);var a=cr(t,n);a!==null&&kn(a,t,n),vh(t,n)}}var dc=!0;function gS(t,n,a,o){var u=P.T;P.T=null;var d=q.p;try{q.p=2,_h(t,n,a,o)}finally{q.p=d,P.T=u}}function vS(t,n,a,o){var u=P.T;P.T=null;var d=q.p;try{q.p=8,_h(t,n,a,o)}finally{q.p=d,P.T=u}}function _h(t,n,a,o){if(dc){var u=yh(o);if(u===null)ah(t,n,o,pc,a),Y0(t,o);else if(yS(u,t,n,a,o))o.stopPropagation();else if(Y0(t,o),n&4&&-1<_S.indexOf(t)){for(;u!==null;){var d=fe(u);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=we(d.pendingLanes);if(x!==0){var A=d;for(A.pendingLanes|=2,A.entangledLanes|=2;x;){var V=1<<31-Ge(x);A.entanglements[1]|=V,x&=~V}Li(d),(zt&6)===0&&(Kl=T()+500,wo(0))}}break;case 31:case 13:A=cr(d,2),A!==null&&kn(A,d,2),Jl(),vh(d,2)}if(d=yh(o),d===null&&ah(t,n,o,pc,a),d===u)break;u=d}u!==null&&o.stopPropagation()}else ah(t,n,o,null,a)}}function yh(t){return t=xu(t),xh(t)}var pc=null;function xh(t){if(pc=null,t=te(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=f(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return pc=t,null}function j0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(re()){case xe:return 2;case Ae:return 8;case ve:case Je:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Sh=!1,za=null,Ba=null,Fa=null,Po=new Map,Io=new Map,Ha=[],_S="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Y0(t,n){switch(t){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":Po.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Io.delete(n.pointerId)}}function zo(t,n,a,o,u,d){return t===null||t.nativeEvent!==d?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[u]},n!==null&&(n=fe(n),n!==null&&X0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function yS(t,n,a,o,u){switch(n){case"focusin":return za=zo(za,t,n,a,o,u),!0;case"dragenter":return Ba=zo(Ba,t,n,a,o,u),!0;case"mouseover":return Fa=zo(Fa,t,n,a,o,u),!0;case"pointerover":var d=u.pointerId;return Po.set(d,zo(Po.get(d)||null,t,n,a,o,u)),!0;case"gotpointercapture":return d=u.pointerId,Io.set(d,zo(Io.get(d)||null,t,n,a,o,u)),!0}return!1}function Z0(t){var n=te(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){q0(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ys(t.priority,function(){q0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=yh(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);yu=o,a.target.dispatchEvent(o),yu=null}else return n=fe(a),n!==null&&X0(n),t.blockedOn=a,!1;n.shift()}return!0}function K0(t,n,a){mc(t)&&a.delete(n)}function xS(){Sh=!1,za!==null&&mc(za)&&(za=null),Ba!==null&&mc(Ba)&&(Ba=null),Fa!==null&&mc(Fa)&&(Fa=null),Po.forEach(K0),Io.forEach(K0)}function gc(t,n){t.blockedOn===n&&(t.blockedOn=null,Sh||(Sh=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,xS)))}var vc=null;function Q0(t){vc!==t&&(vc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){vc===t&&(vc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(xh(o||a)===null)continue;break}var d=fe(a);d!==null&&(t.splice(n,3),n-=3,yf(d,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function _s(t){function n(V){return gc(V,t)}za!==null&&gc(za,t),Ba!==null&&gc(Ba,t),Fa!==null&&gc(Fa,t),Po.forEach(n),Io.forEach(n);for(var a=0;a<Ha.length;a++){var o=Ha[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ha.length&&(a=Ha[0],a.blockedOn===null);)Z0(a),a.blockedOn===null&&Ha.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],d=a[o+1],x=u[En]||null;if(typeof d=="function")x||Q0(a);else if(x){var A=null;if(d&&d.hasAttribute("formAction")){if(u=d,x=d[En]||null)A=x.formAction;else if(xh(u)!==null)continue}else A=x.action;typeof A=="function"?a[o+1]=A:(a.splice(o,3),o-=3),Q0(a)}}}function J0(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Mh(t){this._internalRoot=t}_c.prototype.render=Mh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();k0(a,o,t,n,null,null)},_c.prototype.unmount=Mh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;k0(t.current,2,null,t,null,null),Jl(),n[_a]=null}};function _c(t){this._internalRoot=t}_c.prototype.unstable_scheduleHydration=function(t){if(t){var n=ir();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ha.length&&n!==0&&n<Ha[a].priority;a++);Ha.splice(a,0,t),a===0&&Z0(t)}};var $0=e.version;if($0!=="19.2.0")throw Error(r(527,$0,"19.2.0"));q.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var SS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yc.isDisabled&&yc.supportsFiber)try{Ce=yc.inject(SS),Ne=yc}catch{}}return Fo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=sg,d=og,x=lg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=G0(t,1,!1,null,null,a,o,null,u,d,x,J0),t[_a]=n.current,ih(t),new Mh(n)},Fo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",d=sg,x=og,A=lg,V=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(V=a.formState)),n=G0(t,1,!0,n,a??null,o,u,V,d,x,A,J0),n.context=V0(null),a=n.current,o=ti(),o=Br(o),u=Ta(o),u.callback=null,Aa(a,u,o),a=o,n.current.lanes=a,On(n,a),Li(n),t[_a]=n.current,ih(t),new _c(n)},Fo.version="19.2.0",Fo}var cv;function NS(){if(cv)return Th.exports;cv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Th.exports=US(),Th.exports}var LS=NS();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var uv="popstate";function OS(s={}){function e(r,l){let{pathname:c,search:f,hash:h}=r.location;return ud("",{pathname:c,search:f,hash:h},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(r,l){return typeof l=="string"?l:Zo(l)}return IS(e,i,null,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Bi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function PS(){return Math.random().toString(36).substring(2,10)}function fv(s,e){return{usr:s.state,key:s.key,idx:e}}function ud(s,e,i=null,r){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Vs(e):e,state:i,key:e&&e.key||r||PS()}}function Zo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Vs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let r=s.indexOf("?");r>=0&&(e.search=s.substring(r),s=s.substring(0,r)),s&&(e.pathname=s)}return e}function IS(s,e,i,r={}){let{window:l=document.defaultView,v5Compat:c=!1}=r,f=l.history,h="POP",m=null,p=g();p==null&&(p=0,f.replaceState({...f.state,idx:p},""));function g(){return(f.state||{idx:null}).idx}function v(){h="POP";let S=g(),_=S==null?null:S-p;p=S,m&&m({action:h,location:R.location,delta:_})}function y(S,_){h="PUSH";let L=ud(R.location,S,_);p=g()+1;let O=fv(L,p),N=R.createHref(L);try{f.pushState(O,"",N)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;l.location.assign(N)}c&&m&&m({action:h,location:R.location,delta:1})}function M(S,_){h="REPLACE";let L=ud(R.location,S,_);p=g();let O=fv(L,p),N=R.createHref(L);f.replaceState(O,"",N),c&&m&&m({action:h,location:R.location,delta:0})}function b(S){return zS(S)}let R={get action(){return h},get location(){return s(l,f)},listen(S){if(m)throw new Error("A history only accepts one active listener");return l.addEventListener(uv,v),m=S,()=>{l.removeEventListener(uv,v),m=null}},createHref(S){return e(l,S)},createURL:b,encodeLocation(S){let _=b(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:M,go(S){return f.go(S)}};return R}function zS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let r=typeof s=="string"?s:Zo(s);return r=r.replace(/ $/,"%20"),!e&&r.startsWith("//")&&(r=i+r),new URL(r,i)}function m_(s,e,i="/"){return BS(s,e,i,!1)}function BS(s,e,i,r){let l=typeof e=="string"?Vs(e):e,c=ga(l.pathname||"/",i);if(c==null)return null;let f=g_(s);FS(f);let h=null;for(let m=0;h==null&&m<f.length;++m){let p=KS(c);h=YS(f[m],p,r)}return h}function g_(s,e=[],i=[],r="",l=!1){let c=(f,h,m=l,p)=>{let g={relativePath:p===void 0?f.path||"":p,caseSensitive:f.caseSensitive===!0,childrenIndex:h,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(r)&&m)return;tn(g.relativePath.startsWith(r),`Absolute route path "${g.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(r.length)}let v=pa([r,g.relativePath]),y=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),g_(f.children,e,y,v,m)),!(f.path==null&&!f.index)&&e.push({path:v,score:qS(v,f.index),routesMeta:y})};return s.forEach((f,h)=>{if(f.path===""||!f.path?.includes("?"))c(f,h);else for(let m of v_(f.path))c(f,h,!0,m)}),e}function v_(s){let e=s.split("/");if(e.length===0)return[];let[i,...r]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return l?[c,""]:[c];let f=v_(r.join("/")),h=[];return h.push(...f.map(m=>m===""?c:[c,m].join("/"))),l&&h.push(...f),h.map(m=>s.startsWith("/")&&m===""?"/":m)}function FS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:jS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var HS=/^:[\w-]+$/,GS=3,VS=2,kS=1,WS=10,XS=-2,hv=s=>s==="*";function qS(s,e){let i=s.split("/"),r=i.length;return i.some(hv)&&(r+=XS),e&&(r+=VS),i.filter(l=>!hv(l)).reduce((l,c)=>l+(HS.test(c)?GS:c===""?kS:WS),r)}function jS(s,e){return s.length===e.length&&s.slice(0,-1).every((r,l)=>r===e[l])?s[s.length-1]-e[e.length-1]:0}function YS(s,e,i=!1){let{routesMeta:r}=s,l={},c="/",f=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},g),y=m.route;if(!v&&p&&i&&!r[r.length-1].route.index&&(v=nu({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:pa([c,v.pathname]),pathnameBase:eM(pa([c,v.pathnameBase])),route:y}),v.pathnameBase!=="/"&&(c=pa([c,v.pathnameBase]))}return f}function nu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,r]=ZS(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),h=l.slice(1);return{params:r.reduce((p,{paramName:g,isOptional:v},y)=>{if(g==="*"){let b=h[y]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const M=h[y];return v&&!M?p[g]=void 0:p[g]=(M||"").replace(/%2F/g,"/"),p},{}),pathname:c,pathnameBase:f,pattern:s}}function ZS(s,e=!1,i=!0){Bi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let r=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,h,m)=>(r.push({paramName:h,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(r.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),r]}function KS(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Bi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function ga(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=s.charAt(i);return r&&r!=="/"?null:s.slice(i)||"/"}function QS(s,e="/"){let{pathname:i,search:r="",hash:l=""}=typeof s=="string"?Vs(s):s;return{pathname:i?i.startsWith("/")?i:JS(i,e):e,search:tM(r),hash:nM(l)}}function JS(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Ch(s,e,i,r){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function $S(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function __(s){let e=$S(s);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function y_(s,e,i,r=!1){let l;typeof s=="string"?l=Vs(s):(l={...s},tn(!l.pathname||!l.pathname.includes("?"),Ch("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),Ch("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),Ch("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,h;if(f==null)h=i;else{let v=e.length-1;if(!r&&f.startsWith("..")){let y=f.split("/");for(;y[0]==="..";)y.shift(),v-=1;l.pathname=y.join("/")}h=v>=0?e[v]:"/"}let m=QS(l,h),p=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!m.pathname.endsWith("/")&&(p||g)&&(m.pathname+="/"),m}var pa=s=>s.join("/").replace(/\/\/+/g,"/"),eM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),tM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,nM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function iM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var x_=["POST","PUT","PATCH","DELETE"];new Set(x_);var aM=["GET",...x_];new Set(aM);var ks=Q.createContext(null);ks.displayName="DataRouter";var lu=Q.createContext(null);lu.displayName="DataRouterState";Q.createContext(!1);var S_=Q.createContext({isTransitioning:!1});S_.displayName="ViewTransition";var rM=Q.createContext(new Map);rM.displayName="Fetchers";var sM=Q.createContext(null);sM.displayName="Await";var Gi=Q.createContext(null);Gi.displayName="Navigation";var tl=Q.createContext(null);tl.displayName="Location";var va=Q.createContext({outlet:null,matches:[],isDataRoute:!1});va.displayName="Route";var ap=Q.createContext(null);ap.displayName="RouteError";function oM(s,{relative:e}={}){tn(nl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=Q.useContext(Gi),{hash:l,pathname:c,search:f}=il(s,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:pa([i,c])),r.createHref({pathname:h,search:f,hash:l})}function nl(){return Q.useContext(tl)!=null}function nr(){return tn(nl(),"useLocation() may be used only in the context of a <Router> component."),Q.useContext(tl).location}var M_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E_(s){Q.useContext(Gi).static||Q.useLayoutEffect(s)}function cu(){let{isDataRoute:s}=Q.useContext(va);return s?xM():lM()}function lM(){tn(nl(),"useNavigate() may be used only in the context of a <Router> component.");let s=Q.useContext(ks),{basename:e,navigator:i}=Q.useContext(Gi),{matches:r}=Q.useContext(va),{pathname:l}=nr(),c=JSON.stringify(__(r)),f=Q.useRef(!1);return E_(()=>{f.current=!0}),Q.useCallback((m,p={})=>{if(Bi(f.current,M_),!f.current)return;if(typeof m=="number"){i.go(m);return}let g=y_(m,JSON.parse(c),l,p.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:pa([e,g.pathname])),(p.replace?i.replace:i.push)(g,p.state,p)},[e,i,c,l,s])}Q.createContext(null);function il(s,{relative:e}={}){let{matches:i}=Q.useContext(va),{pathname:r}=nr(),l=JSON.stringify(__(i));return Q.useMemo(()=>y_(s,JSON.parse(l),r,e==="path"),[s,l,r,e])}function cM(s,e){return b_(s,e)}function b_(s,e,i,r,l){tn(nl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=Q.useContext(Gi),{matches:f}=Q.useContext(va),h=f[f.length-1],m=h?h.params:{},p=h?h.pathname:"/",g=h?h.pathnameBase:"/",v=h&&h.route;{let L=v&&v.path||"";T_(p,!v||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let y=nr(),M;if(e){let L=typeof e=="string"?Vs(e):e;tn(g==="/"||L.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${L.pathname}" was given in the \`location\` prop.`),M=L}else M=y;let b=M.pathname||"/",R=b;if(g!=="/"){let L=g.replace(/^\//,"").split("/");R="/"+b.replace(/^\//,"").split("/").slice(L.length).join("/")}let S=m_(s,{pathname:R});Bi(v||S!=null,`No routes matched location "${M.pathname}${M.search}${M.hash}" `),Bi(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${M.pathname}${M.search}${M.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=pM(S&&S.map(L=>Object.assign({},L,{params:Object.assign({},m,L.params),pathname:pa([g,c.encodeLocation?c.encodeLocation(L.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?g:pa([g,c.encodeLocation?c.encodeLocation(L.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),f,i,r,l);return e&&_?Q.createElement(tl.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...M},navigationType:"POP"}},_):_}function uM(){let s=yM(),e=iM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,r="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=Q.createElement(Q.Fragment,null,Q.createElement("p",null,"💿 Hey developer 👋"),Q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",Q.createElement("code",{style:c},"ErrorBoundary")," or"," ",Q.createElement("code",{style:c},"errorElement")," prop on your route.")),Q.createElement(Q.Fragment,null,Q.createElement("h2",null,"Unexpected Application Error!"),Q.createElement("h3",{style:{fontStyle:"italic"}},e),i?Q.createElement("pre",{style:l},i):null,f)}var fM=Q.createElement(uM,null),hM=class extends Q.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?Q.createElement(va.Provider,{value:this.props.routeContext},Q.createElement(ap.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function dM({routeContext:s,match:e,children:i}){let r=Q.useContext(ks);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),Q.createElement(va.Provider,{value:s},i)}function pM(s,e=[],i=null,r=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let p=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);tn(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,p+1))}let h=!1,m=-1;if(i)for(let p=0;p<c.length;p++){let g=c[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(m=p),g.route.id){let{loaderData:v,errors:y}=i,M=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!y||y[g.route.id]===void 0);if(g.route.lazy||M){h=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,g,v)=>{let y,M=!1,b=null,R=null;i&&(y=f&&g.route.id?f[g.route.id]:void 0,b=g.route.errorElement||fM,h&&(m<0&&v===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,R=null):m===v&&(M=!0,R=g.route.hydrateFallbackElement||null)));let S=e.concat(c.slice(0,v+1)),_=()=>{let L;return y?L=b:M?L=R:g.route.Component?L=Q.createElement(g.route.Component,null):g.route.element?L=g.route.element:L=p,Q.createElement(dM,{match:g,routeContext:{outlet:p,matches:S,isDataRoute:i!=null},children:L})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?Q.createElement(hM,{location:i.location,revalidation:i.revalidation,component:b,error:y,children:_(),routeContext:{outlet:null,matches:S,isDataRoute:!0},unstable_onError:r}):_()},null)}function rp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function mM(s){let e=Q.useContext(ks);return tn(e,rp(s)),e}function gM(s){let e=Q.useContext(lu);return tn(e,rp(s)),e}function vM(s){let e=Q.useContext(va);return tn(e,rp(s)),e}function sp(s){let e=vM(s),i=e.matches[e.matches.length-1];return tn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function _M(){return sp("useRouteId")}function yM(){let s=Q.useContext(ap),e=gM("useRouteError"),i=sp("useRouteError");return s!==void 0?s:e.errors?.[i]}function xM(){let{router:s}=mM("useNavigate"),e=sp("useNavigate"),i=Q.useRef(!1);return E_(()=>{i.current=!0}),Q.useCallback(async(l,c={})=>{Bi(i.current,M_),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var dv={};function T_(s,e,i){!e&&!dv[s]&&(dv[s]=!0,Bi(!1,i))}Q.memo(SM);function SM({routes:s,future:e,state:i,unstable_onError:r}){return b_(s,void 0,i,r,e)}function qc(s){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function MM({basename:s="/",children:e=null,location:i,navigationType:r="POP",navigator:l,static:c=!1}){tn(!nl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),h=Q.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Vs(i));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:y="default"}=i,M=Q.useMemo(()=>{let b=ga(m,f);return b==null?null:{location:{pathname:b,search:p,hash:g,state:v,key:y},navigationType:r}},[f,m,p,g,v,y,r]);return Bi(M!=null,`<Router basename="${f}"> is not able to match the URL "${m}${p}${g}" because it does not start with the basename, so the <Router> won't render anything.`),M==null?null:Q.createElement(Gi.Provider,{value:h},Q.createElement(tl.Provider,{children:e,value:M}))}function EM({children:s,location:e}){return cM(fd(s),e)}function fd(s,e=[]){let i=[];return Q.Children.forEach(s,(r,l)=>{if(!Q.isValidElement(r))return;let c=[...e,l];if(r.type===Q.Fragment){i.push.apply(i,fd(r.props.children,c));return}tn(r.type===qc,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!r.props.index||!r.props.children,"An index route cannot have child routes.");let f={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(f.children=fd(r.props.children,c)),i.push(f)}),i}var jc="get",Yc="application/x-www-form-urlencoded";function uu(s){return s!=null&&typeof s.tagName=="string"}function bM(s){return uu(s)&&s.tagName.toLowerCase()==="button"}function TM(s){return uu(s)&&s.tagName.toLowerCase()==="form"}function AM(s){return uu(s)&&s.tagName.toLowerCase()==="input"}function RM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function wM(s,e){return s.button===0&&(!e||e==="_self")&&!RM(s)}var xc=null;function CM(){if(xc===null)try{new FormData(document.createElement("form"),0),xc=!1}catch{xc=!0}return xc}var DM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dh(s){return s!=null&&!DM.has(s)?(Bi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Yc}"`),null):s}function UM(s,e){let i,r,l,c,f;if(TM(s)){let h=s.getAttribute("action");r=h?ga(h,e):null,i=s.getAttribute("method")||jc,l=Dh(s.getAttribute("enctype"))||Yc,c=new FormData(s)}else if(bM(s)||AM(s)&&(s.type==="submit"||s.type==="image")){let h=s.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=s.getAttribute("formaction")||h.getAttribute("action");if(r=m?ga(m,e):null,i=s.getAttribute("formmethod")||h.getAttribute("method")||jc,l=Dh(s.getAttribute("formenctype"))||Dh(h.getAttribute("enctype"))||Yc,c=new FormData(h,s),!CM()){let{name:p,type:g,value:v}=s;if(g==="image"){let y=p?`${p}.`:"";c.append(`${y}x`,"0"),c.append(`${y}y`,"0")}else p&&c.append(p,v)}}else{if(uu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=jc,r=null,l=Yc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:r,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function op(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function NM(s,e,i){let r=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return r.pathname==="/"?r.pathname=`_root.${i}`:e&&ga(r.pathname,e)==="/"?r.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:r.pathname=`${r.pathname.replace(/\/$/,"")}.${i}`,r}async function LM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function OM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function PM(s,e,i){let r=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await LM(c,i);return f.links?f.links():[]}return[]}));return FM(r.flat(1).filter(OM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function pv(s,e,i,r,l,c){let f=(m,p)=>i[p]?m.route.id!==i[p].route.id:!0,h=(m,p)=>i[p].pathname!==m.pathname||i[p].route.path?.endsWith("*")&&i[p].params["*"]!==m.params["*"];return c==="assets"?e.filter((m,p)=>f(m,p)||h(m,p)):c==="data"?e.filter((m,p)=>{let g=r.routes[m.route.id];if(!g||!g.hasLoader)return!1;if(f(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let v=m.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function IM(s,e,{includeHydrateFallback:i}={}){return zM(s.map(r=>{let l=e.routes[r.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function zM(s){return[...new Set(s)]}function BM(s){let e={},i=Object.keys(s).sort();for(let r of i)e[r]=s[r];return e}function FM(s,e){let i=new Set;return new Set(e),s.reduce((r,l)=>{let c=JSON.stringify(BM(l));return i.has(c)||(i.add(c),r.push({key:c,link:l})),r},[])}function A_(){let s=Q.useContext(ks);return op(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function HM(){let s=Q.useContext(lu);return op(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var lp=Q.createContext(void 0);lp.displayName="FrameworkContext";function R_(){let s=Q.useContext(lp);return op(s,"You must render this element inside a <HydratedRouter> element"),s}function GM(s,e){let i=Q.useContext(lp),[r,l]=Q.useState(!1),[c,f]=Q.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:g,onTouchStart:v}=e,y=Q.useRef(null);Q.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let R=_=>{_.forEach(L=>{f(L.isIntersecting)})},S=new IntersectionObserver(R,{threshold:.5});return y.current&&S.observe(y.current),()=>{S.disconnect()}}},[s]),Q.useEffect(()=>{if(r){let R=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(R)}}},[r]);let M=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,y,{}]:[c,y,{onFocus:Ho(h,M),onBlur:Ho(m,b),onMouseEnter:Ho(p,M),onMouseLeave:Ho(g,b),onTouchStart:Ho(v,M)}]:[!1,y,{}]}function Ho(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function VM({page:s,...e}){let{router:i}=A_(),r=Q.useMemo(()=>m_(i.routes,s,i.basename),[i.routes,s,i.basename]);return r?Q.createElement(WM,{page:s,matches:r,...e}):null}function kM(s){let{manifest:e,routeModules:i}=R_(),[r,l]=Q.useState([]);return Q.useEffect(()=>{let c=!1;return PM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),r}function WM({page:s,matches:e,...i}){let r=nr(),{manifest:l,routeModules:c}=R_(),{basename:f}=A_(),{loaderData:h,matches:m}=HM(),p=Q.useMemo(()=>pv(s,e,m,l,r,"data"),[s,e,m,l,r]),g=Q.useMemo(()=>pv(s,e,m,l,r,"assets"),[s,e,m,l,r]),v=Q.useMemo(()=>{if(s===r.pathname+r.search+r.hash)return[];let b=new Set,R=!1;if(e.forEach(_=>{let L=l.routes[_.route.id];!L||!L.hasLoader||(!p.some(O=>O.route.id===_.route.id)&&_.route.id in h&&c[_.route.id]?.shouldRevalidate||L.hasClientLoader?R=!0:b.add(_.route.id))}),b.size===0)return[];let S=NM(s,f,"data");return R&&b.size>0&&S.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[S.pathname+S.search]},[f,h,r,l,p,e,s,c]),y=Q.useMemo(()=>IM(g,l),[g,l]),M=kM(g);return Q.createElement(Q.Fragment,null,v.map(b=>Q.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),y.map(b=>Q.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),M.map(({key:b,link:R})=>Q.createElement("link",{key:b,nonce:i.nonce,...R})))}function XM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var w_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w_&&(window.__reactRouterVersion="7.9.4")}catch{}function qM({basename:s,children:e,window:i}){let r=Q.useRef();r.current==null&&(r.current=OS({window:i,v5Compat:!0}));let l=r.current,[c,f]=Q.useState({action:l.action,location:l.location}),h=Q.useCallback(m=>{Q.startTransition(()=>f(m))},[f]);return Q.useLayoutEffect(()=>l.listen(h),[l,h]),Q.createElement(MM,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var C_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D_=Q.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:l,reloadDocument:c,replace:f,state:h,target:m,to:p,preventScrollReset:g,viewTransition:v,...y},M){let{basename:b}=Q.useContext(Gi),R=typeof p=="string"&&C_.test(p),S,_=!1;if(typeof p=="string"&&R&&(S=p,w_))try{let U=new URL(window.location.href),D=p.startsWith("//")?new URL(U.protocol+p):new URL(p),w=ga(D.pathname,b);D.origin===U.origin&&w!=null?p=w+D.search+D.hash:_=!0}catch{Bi(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let L=oM(p,{relative:l}),[O,N,G]=GM(r,y),k=KM(p,{replace:f,state:h,target:m,preventScrollReset:g,relative:l,viewTransition:v});function z(U){e&&e(U),U.defaultPrevented||k(U)}let Z=Q.createElement("a",{...y,...G,href:S||L,onClick:_||c?e:z,ref:XM(M,N),target:m,"data-discover":!R&&i==="render"?"true":void 0});return O&&!R?Q.createElement(Q.Fragment,null,Z,Q.createElement(VM,{page:L})):Z});D_.displayName="Link";var jM=Q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:l=!1,style:c,to:f,viewTransition:h,children:m,...p},g){let v=il(f,{relative:p.relative}),y=nr(),M=Q.useContext(lu),{navigator:b,basename:R}=Q.useContext(Gi),S=M!=null&&tE(v)&&h===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,L=y.pathname,O=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;i||(L=L.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&R&&(O=ga(O,R)||O);const N=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let G=L===_||!l&&L.startsWith(_)&&L.charAt(N)==="/",k=O!=null&&(O===_||!l&&O.startsWith(_)&&O.charAt(_.length)==="/"),z={isActive:G,isPending:k,isTransitioning:S},Z=G?e:void 0,U;typeof r=="function"?U=r(z):U=[r,G?"active":null,k?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let D=typeof c=="function"?c(z):c;return Q.createElement(D_,{...p,"aria-current":Z,className:U,ref:g,style:D,to:f,viewTransition:h},typeof m=="function"?m(z):m)});jM.displayName="NavLink";var YM=Q.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:l,state:c,method:f=jc,action:h,onSubmit:m,relative:p,preventScrollReset:g,viewTransition:v,...y},M)=>{let b=$M(),R=eE(h,{relative:p}),S=f.toLowerCase()==="get"?"get":"post",_=typeof h=="string"&&C_.test(h),L=O=>{if(m&&m(O),O.defaultPrevented)return;O.preventDefault();let N=O.nativeEvent.submitter,G=N?.getAttribute("formmethod")||f;b(N||O.currentTarget,{fetcherKey:e,method:G,navigate:i,replace:l,state:c,relative:p,preventScrollReset:g,viewTransition:v})};return Q.createElement("form",{ref:M,method:S,action:R,onSubmit:r?m:L,...y,"data-discover":!_&&s==="render"?"true":void 0})});YM.displayName="Form";function ZM(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function U_(s){let e=Q.useContext(ks);return tn(e,ZM(s)),e}function KM(s,{target:e,replace:i,state:r,preventScrollReset:l,relative:c,viewTransition:f}={}){let h=cu(),m=nr(),p=il(s,{relative:c});return Q.useCallback(g=>{if(wM(g,e)){g.preventDefault();let v=i!==void 0?i:Zo(m)===Zo(p);h(s,{replace:v,state:r,preventScrollReset:l,relative:c,viewTransition:f})}},[m,h,p,i,r,e,s,l,c,f])}var QM=0,JM=()=>`__${String(++QM)}__`;function $M(){let{router:s}=U_("useSubmit"),{basename:e}=Q.useContext(Gi),i=_M();return Q.useCallback(async(r,l={})=>{let{action:c,method:f,encType:h,formData:m,body:p}=UM(r,e);if(l.navigate===!1){let g=l.fetcherKey||JM();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:m,body:p,formMethod:l.method||f,formEncType:l.encType||h,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function eE(s,{relative:e}={}){let{basename:i}=Q.useContext(Gi),r=Q.useContext(va);tn(r,"useFormAction must be used inside a RouteContext");let[l]=r.matches.slice(-1),c={...il(s||".",{relative:e})},f=nr();if(s==null){c.search=f.search;let h=new URLSearchParams(c.search),m=h.getAll("index");if(m.some(g=>g==="")){h.delete("index"),m.filter(v=>v).forEach(v=>h.append("index",v));let g=h.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:pa([i,c.pathname])),Zo(c)}function tE(s,{relative:e}={}){let i=Q.useContext(S_);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=U_("useViewTransitionState"),l=il(s,{relative:e});if(!i.isTransitioning)return!1;let c=ga(i.currentLocation.pathname,r)||i.currentLocation.pathname,f=ga(i.nextLocation.pathname,r)||i.nextLocation.pathname;return nu(l.pathname,f)!=null||nu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="180",nE=0,mv=1,iE=2,N_=1,aE=2,fa=3,er=0,Xn=1,ha=2,Ja=0,Ps=1,hd=2,gv=3,vv=4,rE=5,Dr=100,sE=101,oE=102,lE=103,cE=104,uE=200,fE=201,hE=202,dE=203,dd=204,pd=205,pE=206,mE=207,gE=208,vE=209,_E=210,yE=211,xE=212,SE=213,ME=214,md=0,gd=1,vd=2,zs=3,_d=4,yd=5,xd=6,Sd=7,L_=0,EE=1,bE=2,$a=0,TE=1,AE=2,RE=3,wE=4,CE=5,DE=6,UE=7,O_=300,Bs=301,Fs=302,Md=303,Ed=304,fu=306,bd=1e3,Nr=1001,Td=1002,Ai=1003,NE=1004,Sc=1005,Pi=1006,Uh=1007,Lr=1008,Fi=1009,P_=1010,I_=1011,Ko=1012,up=1013,Pr=1014,da=1015,al=1016,fp=1017,hp=1018,Qo=1020,z_=35902,B_=35899,F_=1021,H_=1022,Ti=1023,Jo=1026,$o=1027,G_=1028,dp=1029,V_=1030,pp=1031,mp=1033,Zc=33776,Kc=33777,Qc=33778,Jc=33779,Ad=35840,Rd=35841,wd=35842,Cd=35843,Dd=36196,Ud=37492,Nd=37496,Ld=37808,Od=37809,Pd=37810,Id=37811,zd=37812,Bd=37813,Fd=37814,Hd=37815,Gd=37816,Vd=37817,kd=37818,Wd=37819,Xd=37820,qd=37821,jd=36492,Yd=36494,Zd=36495,Kd=36283,Qd=36284,Jd=36285,$d=36286,LE=3200,OE=3201,k_=0,PE=1,Qa="",gi="srgb",Hs="srgb-linear",iu="linear",qt="srgb",ys=7680,_v=519,IE=512,zE=513,BE=514,W_=515,FE=516,HE=517,GE=518,VE=519,yv=35044,xv="300 es",Ii=2e3,au=2001;class Ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=Math.PI/180,ep=180/Math.PI;function rl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function Rt(s,e,i){return Math.max(e,Math.min(i,s))}function kE(s,e){return(s%e+e)%e}function Lh(s,e,i){return(1-i)*s+i*e}function Go(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*r-f*l+e.x,this.y=c*l+f*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class sl{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,f,h){let m=r[l+0],p=r[l+1],g=r[l+2],v=r[l+3];const y=c[f+0],M=c[f+1],b=c[f+2],R=c[f+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v;return}if(h===1){e[i+0]=y,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(v!==R||m!==y||p!==M||g!==b){let S=1-h;const _=m*y+p*M+g*b+v*R,L=_>=0?1:-1,O=1-_*_;if(O>Number.EPSILON){const G=Math.sqrt(O),k=Math.atan2(G,_*L);S=Math.sin(S*k)/G,h=Math.sin(h*k)/G}const N=h*L;if(m=m*S+y*N,p=p*S+M*N,g=g*S+b*N,v=v*S+R*N,S===1-h){const G=1/Math.sqrt(m*m+p*p+g*g+v*v);m*=G,p*=G,g*=G,v*=G}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,f){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],v=c[f],y=c[f+1],M=c[f+2],b=c[f+3];return e[i]=h*b+g*v+m*M-p*y,e[i+1]=m*b+g*y+p*v-h*M,e[i+2]=p*b+g*M+h*y-m*v,e[i+3]=g*b-h*v-m*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,f=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),v=h(c/2),y=m(r/2),M=m(l/2),b=m(c/2);switch(f){case"XYZ":this._x=y*g*v+p*M*b,this._y=p*M*v-y*g*b,this._z=p*g*b+y*M*v,this._w=p*g*v-y*M*b;break;case"YXZ":this._x=y*g*v+p*M*b,this._y=p*M*v-y*g*b,this._z=p*g*b-y*M*v,this._w=p*g*v+y*M*b;break;case"ZXY":this._x=y*g*v-p*M*b,this._y=p*M*v+y*g*b,this._z=p*g*b+y*M*v,this._w=p*g*v-y*M*b;break;case"ZYX":this._x=y*g*v-p*M*b,this._y=p*M*v+y*g*b,this._z=p*g*b-y*M*v,this._w=p*g*v+y*M*b;break;case"YZX":this._x=y*g*v+p*M*b,this._y=p*M*v+y*g*b,this._z=p*g*b-y*M*v,this._w=p*g*v-y*M*b;break;case"XZY":this._x=y*g*v-p*M*b,this._y=p*M*v-y*g*b,this._z=p*g*b+y*M*v,this._w=p*g*v+y*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],f=i[1],h=i[5],m=i[9],p=i[2],g=i[6],v=i[10],y=r+h+v;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(f-l)*M}else if(r>h&&r>v){const M=2*Math.sqrt(1+r-h-v);this._w=(g-m)/M,this._x=.25*M,this._y=(l+f)/M,this._z=(c+p)/M}else if(h>v){const M=2*Math.sqrt(1+h-r-v);this._w=(c-p)/M,this._x=(l+f)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+v-r-h);this._w=(f-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,f=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+f*h+l*p-c*m,this._y=l*g+f*m+c*h-r*p,this._z=c*g+f*p+r*m-l*h,this._w=f*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,f=this._w;let h=f*e._w+r*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=f,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*f+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),v=Math.sin((1-i)*g)/p,y=Math.sin(i*g)/p;return this._w=f*v+this._w*y,this._x=r*v+this._x*y,this._y=l*v+this._y*y,this._z=c*v+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class he{constructor(e=0,i=0,r=0){he.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Sv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Sv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,f=e.y,h=e.z,m=e.w,p=2*(f*l-h*r),g=2*(h*i-c*l),v=2*(c*r-f*i);return this.x=i+m*p+f*v-h*g,this.y=r+m*g+h*p-c*v,this.z=l+m*v+c*g-f*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,f=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*f-r*m,this.z=r*h-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Oh.copy(this).projectOnVector(e),this.sub(Oh)}reflect(e){return this.sub(Oh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Rt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oh=new he,Sv=new sl;class gt{constructor(e,i,r,l,c,f,h,m,p){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p)}set(e,i,r,l,c,f,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=f,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[3],m=r[6],p=r[1],g=r[4],v=r[7],y=r[2],M=r[5],b=r[8],R=l[0],S=l[3],_=l[6],L=l[1],O=l[4],N=l[7],G=l[2],k=l[5],z=l[8];return c[0]=f*R+h*L+m*G,c[3]=f*S+h*O+m*k,c[6]=f*_+h*N+m*z,c[1]=p*R+g*L+v*G,c[4]=p*S+g*O+v*k,c[7]=p*_+g*N+v*z,c[2]=y*R+M*L+b*G,c[5]=y*S+M*O+b*k,c[8]=y*_+M*N+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*f*g-i*h*p-r*c*g+r*h*m+l*c*p-l*f*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=g*f-h*p,y=h*m-g*c,M=p*c-f*m,b=i*v+r*y+l*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=v*R,e[1]=(l*p-g*r)*R,e[2]=(h*r-l*f)*R,e[3]=y*R,e[4]=(g*i-l*m)*R,e[5]=(l*c-h*i)*R,e[6]=M*R,e[7]=(r*m-p*i)*R,e[8]=(f*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,f,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*f+p*h)+f+e,-l*p,l*m,-l*(-p*f+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Ph.makeScale(e,i)),this}rotate(e){return this.premultiply(Ph.makeRotation(-e)),this}translate(e,i){return this.premultiply(Ph.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ph=new gt;function X_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function WE(){const s=ru("canvas");return s.style.display="block",s}const Mv={};function el(s){s in Mv||(Mv[s]=!0,console.warn(s))}function XE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const Ev=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bv=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qE(){const s={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===qt&&(l.r=ma(l.r),l.g=ma(l.g),l.b=ma(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===qt&&(l.r=Is(l.r),l.g=Is(l.g),l.b=Is(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Qa?iu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return el("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return el("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Hs]:{primaries:e,whitePoint:r,transfer:iu,toXYZ:Ev,fromXYZ:bv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:e,whitePoint:r,transfer:qt,toXYZ:Ev,fromXYZ:bv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}const Pt=qE();function ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Is(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let xs;class jE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{xs===void 0&&(xs=ru("canvas")),xs.width=e.width,xs.height=e.height;const l=xs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=xs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=ru("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=ma(c[f]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ma(i[r]/255)*255):i[r]=ma(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YE=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=rl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,h=l.length;f<h;f++)l[f].isDataTexture?c.push(Ih(l[f].image)):c.push(Ih(l[f]))}else c=Ih(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Ih(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZE=0;const zh=new he;class qn extends Ws{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Nr,l=Nr,c=Pi,f=Lr,h=Ti,m=Fi,p=qn.DEFAULT_ANISOTROPY,g=Qa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=rl(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zh).x}get height(){return this.source.getSize(zh).y}get depth(){return this.source.getSize(zh).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bd:e.x=e.x-Math.floor(e.x);break;case Nr:e.x=e.x<0?0:1;break;case Td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bd:e.y=e.y-Math.floor(e.y);break;case Nr:e.y=e.y<0?0:1;break;case Td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=O_;qn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*r+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*r+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*r+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*r+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],v=m[8],y=m[1],M=m[5],b=m[9],R=m[2],S=m[6],_=m[10];if(Math.abs(g-y)<.01&&Math.abs(v-R)<.01&&Math.abs(b-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(v+R)<.1&&Math.abs(b+S)<.1&&Math.abs(p+M+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,N=(M+1)/2,G=(_+1)/2,k=(g+y)/4,z=(v+R)/4,Z=(b+S)/4;return O>N&&O>G?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=k/r,c=z/r):N>G?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=k/l,c=Z/l):G<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(G),r=z/c,l=Z/c),this.set(r,l,c,i),this}let L=Math.sqrt((S-b)*(S-b)+(v-R)*(v-R)+(y-g)*(y-g));return Math.abs(L)<.001&&(L=1),this.x=(S-b)/L,this.y=(v-R)/L,this.z=(y-g)/L,this.w=Math.acos((p+M+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Rt(this.x,e.x,i.x),this.y=Rt(this.y,e.y,i.y),this.z=Rt(this.z,e.z,i.z),this.w=Rt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Rt(this.x,e,i),this.y=Rt(this.y,e,i),this.z=Rt(this.z,e,i),this.w=Rt(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Rt(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class KE extends Ws{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new qn(l);this.textures=[];const f=r.count;for(let h=0;h<f;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Pi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new gp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends KE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class q_ extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class QE extends qn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Ai,this.minFilter=Ai,this.wrapR=Nr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ol{constructor(e=new he(1/0,1/0,1/0),i=new he(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(xi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,h=c.count;f<h;f++)e.isMesh===!0?e.getVertexPosition(f,xi):xi.fromBufferAttribute(c,f),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Mc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Mc.copy(r.boundingBox)),Mc.applyMatrix4(e.matrixWorld),this.union(Mc)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Ec.subVectors(this.max,Vo),Ss.subVectors(e.a,Vo),Ms.subVectors(e.b,Vo),Es.subVectors(e.c,Vo),Va.subVectors(Ms,Ss),ka.subVectors(Es,Ms),Mr.subVectors(Ss,Es);let i=[0,-Va.z,Va.y,0,-ka.z,ka.y,0,-Mr.z,Mr.y,Va.z,0,-Va.x,ka.z,0,-ka.x,Mr.z,0,-Mr.x,-Va.y,Va.x,0,-ka.y,ka.x,0,-Mr.y,Mr.x,0];return!Bh(i,Ss,Ms,Es,Ec)||(i=[1,0,0,0,1,0,0,0,1],!Bh(i,Ss,Ms,Es,Ec))?!1:(bc.crossVectors(Va,ka),i=[bc.x,bc.y,bc.z],Bh(i,Ss,Ms,Es,Ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sa=[new he,new he,new he,new he,new he,new he,new he,new he],xi=new he,Mc=new ol,Ss=new he,Ms=new he,Es=new he,Va=new he,ka=new he,Mr=new he,Vo=new he,Ec=new he,bc=new he,Er=new he;function Bh(s,e,i,r,l){for(let c=0,f=s.length-3;c<=f;c+=3){Er.fromArray(s,c);const h=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),m=e.dot(Er),p=i.dot(Er),g=r.dot(Er);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const JE=new ol,ko=new he,Fh=new he;class hu{constructor(e=new he,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):JE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const i=ko.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ko,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(Fh)),this.expandByPoint(ko.copy(e.center).sub(Fh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const oa=new he,Hh=new he,Tc=new he,Wa=new he,Gh=new he,Ac=new he,Vh=new he;class j_{constructor(e=new he,i=new he(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=oa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(oa.copy(this.origin).addScaledVector(this.direction,i),oa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Hh.copy(e).add(i).multiplyScalar(.5),Tc.copy(i).sub(e).normalize(),Wa.copy(this.origin).sub(Hh);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Tc),h=Wa.dot(this.direction),m=-Wa.dot(Tc),p=Wa.lengthSq(),g=Math.abs(1-f*f);let v,y,M,b;if(g>0)if(v=f*m-h,y=f*h-m,b=c*g,v>=0)if(y>=-b)if(y<=b){const R=1/g;v*=R,y*=R,M=v*(v+f*y+2*h)+y*(f*v+y+2*m)+p}else y=c,v=Math.max(0,-(f*y+h)),M=-v*v+y*(y+2*m)+p;else y=-c,v=Math.max(0,-(f*y+h)),M=-v*v+y*(y+2*m)+p;else y<=-b?(v=Math.max(0,-(-f*c+h)),y=v>0?-c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p):y<=b?(v=0,y=Math.min(Math.max(-c,-m),c),M=y*(y+2*m)+p):(v=Math.max(0,-(f*c+h)),y=v>0?c:Math.min(Math.max(-c,-m),c),M=-v*v+y*(y+2*m)+p);else y=f>0?-c:c,v=Math.max(0,-(f*y+h)),M=-v*v+y*(y+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Hh).addScaledVector(Tc,y),M}intersectSphere(e,i){oa.subVectors(e.center,this.origin);const r=oa.dot(this.direction),l=oa.dot(oa)-r*r,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),h=r-f,m=r+f;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,f,h,m;const p=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,y=this.origin;return p>=0?(r=(e.min.x-y.x)*p,l=(e.max.x-y.x)*p):(r=(e.max.x-y.x)*p,l=(e.min.x-y.x)*p),g>=0?(c=(e.min.y-y.y)*g,f=(e.max.y-y.y)*g):(c=(e.max.y-y.y)*g,f=(e.min.y-y.y)*g),r>f||c>l||((c>r||isNaN(r))&&(r=c),(f<l||isNaN(l))&&(l=f),v>=0?(h=(e.min.z-y.z)*v,m=(e.max.z-y.z)*v):(h=(e.max.z-y.z)*v,m=(e.min.z-y.z)*v),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,oa)!==null}intersectTriangle(e,i,r,l,c){Gh.subVectors(i,e),Ac.subVectors(r,e),Vh.crossVectors(Gh,Ac);let f=this.direction.dot(Vh),h;if(f>0){if(l)return null;h=1}else if(f<0)h=-1,f=-f;else return null;Wa.subVectors(this.origin,e);const m=h*this.direction.dot(Ac.crossVectors(Wa,Ac));if(m<0)return null;const p=h*this.direction.dot(Gh.cross(Wa));if(p<0||m+p>f)return null;const g=-h*Wa.dot(Vh);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,r,l,c,f,h,m,p,g,v,y,M,b,R,S){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,f,h,m,p,g,v,y,M,b,R,S)}set(e,i,r,l,c,f,h,m,p,g,v,y,M,b,R,S){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=f,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=v,_[14]=y,_[3]=M,_[7]=b,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*f,i[9]=r[9]*f,i[10]=r[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,f=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const y=f*g,M=f*v,b=h*g,R=h*v;i[0]=m*g,i[4]=-m*v,i[8]=p,i[1]=M+b*p,i[5]=y-R*p,i[9]=-h*m,i[2]=R-y*p,i[6]=b+M*p,i[10]=f*m}else if(e.order==="YXZ"){const y=m*g,M=m*v,b=p*g,R=p*v;i[0]=y+R*h,i[4]=b*h-M,i[8]=f*p,i[1]=f*v,i[5]=f*g,i[9]=-h,i[2]=M*h-b,i[6]=R+y*h,i[10]=f*m}else if(e.order==="ZXY"){const y=m*g,M=m*v,b=p*g,R=p*v;i[0]=y-R*h,i[4]=-f*v,i[8]=b+M*h,i[1]=M+b*h,i[5]=f*g,i[9]=R-y*h,i[2]=-f*p,i[6]=h,i[10]=f*m}else if(e.order==="ZYX"){const y=f*g,M=f*v,b=h*g,R=h*v;i[0]=m*g,i[4]=b*p-M,i[8]=y*p+R,i[1]=m*v,i[5]=R*p+y,i[9]=M*p-b,i[2]=-p,i[6]=h*m,i[10]=f*m}else if(e.order==="YZX"){const y=f*m,M=f*p,b=h*m,R=h*p;i[0]=m*g,i[4]=R-y*v,i[8]=b*v+M,i[1]=v,i[5]=f*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*v+b,i[10]=y-R*v}else if(e.order==="XZY"){const y=f*m,M=f*p,b=h*m,R=h*p;i[0]=m*g,i[4]=-v,i[8]=p*g,i[1]=y*v+R,i[5]=f*g,i[9]=M*v-b,i[2]=b*v-M,i[6]=h*g,i[10]=R*v+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose($E,e,eb)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Xa.crossVectors(r,ni),Xa.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Xa.crossVectors(r,ni)),Xa.normalize(),Rc.crossVectors(ni,Xa),l[0]=Xa.x,l[4]=Rc.x,l[8]=ni.x,l[1]=Xa.y,l[5]=Rc.y,l[9]=ni.y,l[2]=Xa.z,l[6]=Rc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,f=r[0],h=r[4],m=r[8],p=r[12],g=r[1],v=r[5],y=r[9],M=r[13],b=r[2],R=r[6],S=r[10],_=r[14],L=r[3],O=r[7],N=r[11],G=r[15],k=l[0],z=l[4],Z=l[8],U=l[12],D=l[1],w=l[5],F=l[9],ee=l[13],ce=l[2],ae=l[6],P=l[10],q=l[14],J=l[3],Ee=l[7],B=l[11],E=l[15];return c[0]=f*k+h*D+m*ce+p*J,c[4]=f*z+h*w+m*ae+p*Ee,c[8]=f*Z+h*F+m*P+p*B,c[12]=f*U+h*ee+m*q+p*E,c[1]=g*k+v*D+y*ce+M*J,c[5]=g*z+v*w+y*ae+M*Ee,c[9]=g*Z+v*F+y*P+M*B,c[13]=g*U+v*ee+y*q+M*E,c[2]=b*k+R*D+S*ce+_*J,c[6]=b*z+R*w+S*ae+_*Ee,c[10]=b*Z+R*F+S*P+_*B,c[14]=b*U+R*ee+S*q+_*E,c[3]=L*k+O*D+N*ce+G*J,c[7]=L*z+O*w+N*ae+G*Ee,c[11]=L*Z+O*F+N*P+G*B,c[15]=L*U+O*ee+N*q+G*E,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],f=e[1],h=e[5],m=e[9],p=e[13],g=e[2],v=e[6],y=e[10],M=e[14],b=e[3],R=e[7],S=e[11],_=e[15];return b*(+c*m*v-l*p*v-c*h*y+r*p*y+l*h*M-r*m*M)+R*(+i*m*M-i*p*y+c*f*y-l*f*M+l*p*g-c*m*g)+S*(+i*p*v-i*h*M-c*f*v+r*f*M+c*h*g-r*p*g)+_*(-l*h*g-i*m*v+i*h*y+l*f*v-r*f*y+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],f=e[4],h=e[5],m=e[6],p=e[7],g=e[8],v=e[9],y=e[10],M=e[11],b=e[12],R=e[13],S=e[14],_=e[15],L=v*S*p-R*y*p+R*m*M-h*S*M-v*m*_+h*y*_,O=b*y*p-g*S*p-b*m*M+f*S*M+g*m*_-f*y*_,N=g*R*p-b*v*p+b*h*M-f*R*M-g*h*_+f*v*_,G=b*v*m-g*R*m-b*h*y+f*R*y+g*h*S-f*v*S,k=i*L+r*O+l*N+c*G;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/k;return e[0]=L*z,e[1]=(R*y*c-v*S*c-R*l*M+r*S*M+v*l*_-r*y*_)*z,e[2]=(h*S*c-R*m*c+R*l*p-r*S*p-h*l*_+r*m*_)*z,e[3]=(v*m*c-h*y*c-v*l*p+r*y*p+h*l*M-r*m*M)*z,e[4]=O*z,e[5]=(g*S*c-b*y*c+b*l*M-i*S*M-g*l*_+i*y*_)*z,e[6]=(b*m*c-f*S*c-b*l*p+i*S*p+f*l*_-i*m*_)*z,e[7]=(f*y*c-g*m*c+g*l*p-i*y*p-f*l*M+i*m*M)*z,e[8]=N*z,e[9]=(b*v*c-g*R*c-b*r*M+i*R*M+g*r*_-i*v*_)*z,e[10]=(f*R*c-b*h*c+b*r*p-i*R*p-f*r*_+i*h*_)*z,e[11]=(g*h*c-f*v*c-g*r*p+i*v*p+f*r*M-i*h*M)*z,e[12]=G*z,e[13]=(g*R*l-b*v*l+b*r*y-i*R*y-g*r*S+i*v*S)*z,e[14]=(b*h*l-f*R*l-b*r*m+i*R*m+f*r*S-i*h*S)*z,e[15]=(f*v*l-g*h*l+g*r*m-i*v*m-f*r*y+i*h*y)*z,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,f=e.x,h=e.y,m=e.z,p=c*f,g=c*h;return this.set(p*f+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*f,0,p*m-l*h,g*m+l*f,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,f){return this.set(1,r,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,f=i._y,h=i._z,m=i._w,p=c+c,g=f+f,v=h+h,y=c*p,M=c*g,b=c*v,R=f*g,S=f*v,_=h*v,L=m*p,O=m*g,N=m*v,G=r.x,k=r.y,z=r.z;return l[0]=(1-(R+_))*G,l[1]=(M+N)*G,l[2]=(b-O)*G,l[3]=0,l[4]=(M-N)*k,l[5]=(1-(y+_))*k,l[6]=(S+L)*k,l[7]=0,l[8]=(b+O)*z,l[9]=(S-L)*z,l[10]=(1-(y+R))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),h=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Si.copy(this);const p=1/c,g=1/f,v=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=g,Si.elements[5]*=g,Si.elements[6]*=g,Si.elements[8]*=v,Si.elements[9]*=v,Si.elements[10]*=v,i.setFromRotationMatrix(Si),r.x=c,r.y=f,r.z=h,this}makePerspective(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,g=2*c/(i-e),v=2*c/(r-l),y=(i+e)/(i-e),M=(r+l)/(r-l);let b,R;if(m)b=c/(f-c),R=f*c/(f-c);else if(h===Ii)b=-(f+c)/(f-c),R=-2*f*c/(f-c);else if(h===au)b=-f/(f-c),R=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=v,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,c,f,h=Ii,m=!1){const p=this.elements,g=2/(i-e),v=2/(r-l),y=-(i+e)/(i-e),M=-(r+l)/(r-l);let b,R;if(m)b=1/(f-c),R=f/(f-c);else if(h===Ii)b=-2/(f-c),R=-(f+c)/(f-c);else if(h===au)b=-1/(f-c),R=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=v,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=b,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const bs=new he,Si=new sn,$E=new he(0,0,0),eb=new he(1,1,1),Xa=new he,Rc=new he,ni=new he,Tv=new sn,Av=new sl;class Hi{constructor(e=0,i=0,r=0,l=Hi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],f=l[4],h=l[8],m=l[1],p=l[5],g=l[9],v=l[2],y=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Rt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-v,M),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Rt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(Rt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-Rt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hi.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tb=0;const Rv=new he,Ts=new sl,la=new sn,wc=new he,Wo=new he,nb=new he,ib=new sl,wv=new he(1,0,0),Cv=new he(0,1,0),Dv=new he(0,0,1),Uv={type:"added"},ab={type:"removed"},As={type:"childadded",child:null},kh={type:"childremoved",child:null};class Cn extends Ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=rl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new he,i=new Hi,r=new sl,l=new he(1,1,1);function c(){r.setFromEuler(i,!1)}function f(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new gt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(wv,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(Dv,e)}translateOnAxis(e,i){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(wv,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(Dv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(la.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?wc.copy(e):wc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?la.lookAt(Wo,wc,this.up):la.lookAt(wc,Wo,this.up),this.quaternion.setFromRotationMatrix(la),l&&(la.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(la),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ab),kh.child=e,this.dispatchEvent(kh),kh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),la.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),la.multiply(e.parent.matrixWorld)),e.applyMatrix4(la),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const f=this.children[r].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,e,nb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wo,ib,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const v=m[p];c(e.shapes,v)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=f(e.geometries),m=f(e.materials),p=f(e.textures),g=f(e.images),v=f(e.shapes),y=f(e.skeletons),M=f(e.animations),b=f(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),y.length>0&&(r.skeletons=y),M.length>0&&(r.animations=M),b.length>0&&(r.nodes=b)}return r.object=l,r;function f(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new he(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new he,ca=new he,Wh=new he,ua=new he,Rs=new he,ws=new he,Nv=new he,Xh=new he,qh=new he,jh=new he,Yh=new rn,Zh=new rn,Kh=new rn;class bi{constructor(e=new he,i=new he,r=new he){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Mi.subVectors(e,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Mi.subVectors(l,i),ca.subVectors(r,i),Wh.subVectors(e,i);const f=Mi.dot(Mi),h=Mi.dot(ca),m=Mi.dot(Wh),p=ca.dot(ca),g=ca.dot(Wh),v=f*p-h*h;if(v===0)return c.set(0,0,0),null;const y=1/v,M=(p*m-h*g)*y,b=(f*g-h*m)*y;return c.set(1-M-b,b,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ua)===null?!1:ua.x>=0&&ua.y>=0&&ua.x+ua.y<=1}static getInterpolation(e,i,r,l,c,f,h,m){return this.getBarycoord(e,i,r,l,ua)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ua.x),m.addScaledVector(f,ua.y),m.addScaledVector(h,ua.z),m)}static getInterpolatedAttribute(e,i,r,l,c,f){return Yh.setScalar(0),Zh.setScalar(0),Kh.setScalar(0),Yh.fromBufferAttribute(e,i),Zh.fromBufferAttribute(e,r),Kh.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Yh,c.x),f.addScaledVector(Zh,c.y),f.addScaledVector(Kh,c.z),f}static isFrontFacing(e,i,r,l){return Mi.subVectors(r,i),ca.subVectors(e,i),Mi.cross(ca).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Mi.subVectors(this.c,this.b),ca.subVectors(this.a,this.b),Mi.cross(ca).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let f,h;Rs.subVectors(l,r),ws.subVectors(c,r),Xh.subVectors(e,r);const m=Rs.dot(Xh),p=ws.dot(Xh);if(m<=0&&p<=0)return i.copy(r);qh.subVectors(e,l);const g=Rs.dot(qh),v=ws.dot(qh);if(g>=0&&v<=g)return i.copy(l);const y=m*v-g*p;if(y<=0&&m>=0&&g<=0)return f=m/(m-g),i.copy(r).addScaledVector(Rs,f);jh.subVectors(e,c);const M=Rs.dot(jh),b=ws.dot(jh);if(b>=0&&M<=b)return i.copy(c);const R=M*p-m*b;if(R<=0&&p>=0&&b<=0)return h=p/(p-b),i.copy(r).addScaledVector(ws,h);const S=g*b-M*v;if(S<=0&&v-g>=0&&M-b>=0)return Nv.subVectors(c,l),h=(v-g)/(v-g+(M-b)),i.copy(l).addScaledVector(Nv,h);const _=1/(S+R+y);return f=R*_,h=y*_,i.copy(r).addScaledVector(Rs,f).addScaledVector(ws,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qa={h:0,s:0,l:0},Cc={h:0,s:0,l:0};function Qh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Ct{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=gi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Pt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Pt.workingColorSpace){if(e=kE(e,1),i=Rt(i,0,1),r=Rt(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,f=2*r-c;this.r=Qh(f,c,e+1/3),this.g=Qh(f,c,e),this.b=Qh(f,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,i=gi){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],h=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=gi){const r=Z_[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ma(e.r),this.g=ma(e.g),this.b=ma(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gi){return Pt.workingToColorSpace(Ln.copy(this),e),Math.round(Rt(Ln.r*255,0,255))*65536+Math.round(Rt(Ln.g*255,0,255))*256+Math.round(Rt(Ln.b*255,0,255))}getHexString(e=gi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(Ln.copy(this),i);const r=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+f)/2;if(h===f)m=0,p=0;else{const v=f-h;switch(p=g<=.5?v/(f+h):v/(2-f-h),f){case r:m=(l-c)/v+(l<c?6:0);break;case l:m=(c-r)/v+2;break;case c:m=(r-l)/v+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=gi){Pt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,r=Ln.g,l=Ln.b;return e!==gi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(qa),this.setHSL(qa.h+e,qa.s+i,qa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(qa),e.getHSL(Cc);const r=Lh(qa.h,Cc.h,i),l=Lh(qa.s,Cc.s,i),c=Lh(qa.l,Cc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Ct;Ct.NAMES=Z_;let rb=0;class Xs extends Ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=rl(),this.name="",this.type="Material",this.blending=Ps,this.side=er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dd,this.blendDst=pd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ps&&(r.blending=this.blending),this.side!==er&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==dd&&(r.blendSrc=this.blendSrc),this.blendDst!==pd&&(r.blendDst=this.blendDst),this.blendEquation!==Dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const f=[];for(const h in c){const m=c[h];delete m.metadata,f.push(m)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(r.textures=c),f.length>0&&(r.images=f)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class K_ extends Xs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new he,Dc=new It;let sb=0;class jn{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=yv,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)Dc.fromBufferAttribute(this,i),Dc.applyMatrix3(e),this.setXY(i,Dc.x,Dc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Go(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Wn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Go(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Go(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Go(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Go(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),r=Wn(r,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yv&&(e.usage=this.usage),e}}class Q_ extends jn{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class J_ extends jn{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class zi extends jn{constructor(e,i,r){super(new Float32Array(e),i,r)}}let ob=0;const mi=new sn,Jh=new Cn,Cs=new he,ii=new ol,Xo=new ol,Mn=new he;class Ri extends Ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=rl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?J_:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new gt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,i,r){return mi.makeTranslation(e,i,r),this.applyMatrix4(mi),this}scale(e,i,r){return mi.makeScale(e,i,r),this.applyMatrix4(mi),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];r.push(f.x,f.y,f.z||0)}this.setAttribute("position",new zi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ol);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new he(-1/0,-1/0,-1/0),new he(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hu);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new he,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const h=i[c];Xo.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ii.min,Xo.min),ii.expandByPoint(Mn),Mn.addVectors(ii.max,Xo.max),ii.expandByPoint(Mn)):(ii.expandByPoint(Xo.min),ii.expandByPoint(Xo.max))}ii.getCenter(r);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),m&&(Cs.fromBufferAttribute(e,p),Mn.add(Cs)),l=Math.max(l,r.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*r.count),4));const f=this.getAttribute("tangent"),h=[],m=[];for(let Z=0;Z<r.count;Z++)h[Z]=new he,m[Z]=new he;const p=new he,g=new he,v=new he,y=new It,M=new It,b=new It,R=new he,S=new he;function _(Z,U,D){p.fromBufferAttribute(r,Z),g.fromBufferAttribute(r,U),v.fromBufferAttribute(r,D),y.fromBufferAttribute(c,Z),M.fromBufferAttribute(c,U),b.fromBufferAttribute(c,D),g.sub(p),v.sub(p),M.sub(y),b.sub(y);const w=1/(M.x*b.y-b.x*M.y);isFinite(w)&&(R.copy(g).multiplyScalar(b.y).addScaledVector(v,-M.y).multiplyScalar(w),S.copy(v).multiplyScalar(M.x).addScaledVector(g,-b.x).multiplyScalar(w),h[Z].add(R),h[U].add(R),h[D].add(R),m[Z].add(S),m[U].add(S),m[D].add(S))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Z=0,U=L.length;Z<U;++Z){const D=L[Z],w=D.start,F=D.count;for(let ee=w,ce=w+F;ee<ce;ee+=3)_(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const O=new he,N=new he,G=new he,k=new he;function z(Z){G.fromBufferAttribute(l,Z),k.copy(G);const U=h[Z];O.copy(U),O.sub(G.multiplyScalar(G.dot(U))).normalize(),N.crossVectors(k,U);const w=N.dot(m[Z])<0?-1:1;f.setXYZW(Z,O.x,O.y,O.z,w)}for(let Z=0,U=L.length;Z<U;++Z){const D=L[Z],w=D.start,F=D.count;for(let ee=w,ce=w+F;ee<ce;ee+=3)z(e.getX(ee+0)),z(e.getX(ee+1)),z(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new jn(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let y=0,M=r.count;y<M;y++)r.setXYZ(y,0,0,0);const l=new he,c=new he,f=new he,h=new he,m=new he,p=new he,g=new he,v=new he;if(e)for(let y=0,M=e.count;y<M;y+=3){const b=e.getX(y+0),R=e.getX(y+1),S=e.getX(y+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,S),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),h.fromBufferAttribute(r,b),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,S),h.add(g),m.add(g),p.add(g),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=i.count;y<M;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),r.setXYZ(y+0,g.x,g.y,g.z),r.setXYZ(y+1,g.x,g.y,g.z),r.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,v=h.normalized,y=new p.constructor(m.length*g);let M=0,b=0;for(let R=0,S=m.length;R<S;R++){h.isInterleavedBufferAttribute?M=m[R]*h.data.stride+h.offset:M=m[R]*g;for(let _=0;_<g;_++)y[b++]=p[M++]}return new jn(y,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ri,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,v=p.length;g<v;g++){const y=p[g],M=e(y,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let h=0,m=f.length;h<m;h++){const p=f[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let v=0,y=p.length;v<y;v++){const M=p[v];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],v=c[p];for(let y=0,M=v.length;y<M;y++)g.push(v[y].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let p=0,g=f.length;p<g;p++){const v=f[p];this.addGroup(v.start,v.count,v.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lv=new sn,br=new j_,Uc=new hu,Ov=new he,Nc=new he,Lc=new he,Oc=new he,$h=new he,Pc=new he,Pv=new he,Ic=new he;class ri extends Cn{constructor(e=new Ri,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,f=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Pc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],v=c[m];g!==0&&($h.fromBufferAttribute(v,e),f?Pc.addScaledVector($h,g):Pc.addScaledVector($h.sub(i),g))}i.add(Pc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Uc.copy(r.boundingSphere),Uc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Uc.containsPoint(br.origin)===!1&&(br.intersectSphere(Uc,Ov)===null||br.origin.distanceToSquared(Ov)>(e.far-e.near)**2))&&(Lv.copy(c).invert(),br.copy(e.ray).applyMatrix4(Lv),!(r.boundingBox!==null&&br.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,r){let l;const c=this.geometry,f=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,y=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(f))for(let b=0,R=y.length;b<R;b++){const S=y[b],_=f[S.materialIndex],L=Math.max(S.start,M.start),O=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,G=O;N<G;N+=3){const k=h.getX(N),z=h.getX(N+1),Z=h.getX(N+2);l=zc(this,_,e,r,p,g,v,k,z,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(h.count,M.start+M.count);for(let S=b,_=R;S<_;S+=3){const L=h.getX(S),O=h.getX(S+1),N=h.getX(S+2);l=zc(this,f,e,r,p,g,v,L,O,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,R=y.length;b<R;b++){const S=y[b],_=f[S.materialIndex],L=Math.max(S.start,M.start),O=Math.min(m.count,Math.min(S.start+S.count,M.start+M.count));for(let N=L,G=O;N<G;N+=3){const k=N,z=N+1,Z=N+2;l=zc(this,_,e,r,p,g,v,k,z,Z),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const b=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let S=b,_=R;S<_;S+=3){const L=S,O=S+1,N=S+2;l=zc(this,f,e,r,p,g,v,L,O,N),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function lb(s,e,i,r,l,c,f,h){let m;if(e.side===Xn?m=r.intersectTriangle(f,c,l,!0,h):m=r.intersectTriangle(l,c,f,e.side===er,h),m===null)return null;Ic.copy(h),Ic.applyMatrix4(s.matrixWorld);const p=i.ray.origin.distanceTo(Ic);return p<i.near||p>i.far?null:{distance:p,point:Ic.clone(),object:s}}function zc(s,e,i,r,l,c,f,h,m,p){s.getVertexPosition(h,Nc),s.getVertexPosition(m,Lc),s.getVertexPosition(p,Oc);const g=lb(s,e,i,r,Nc,Lc,Oc,Pv);if(g){const v=new he;bi.getBarycoord(Pv,Nc,Lc,Oc,v),l&&(g.uv=bi.getInterpolatedAttribute(l,h,m,p,v,new It)),c&&(g.uv1=bi.getInterpolatedAttribute(c,h,m,p,v,new It)),f&&(g.normal=bi.getInterpolatedAttribute(f,h,m,p,v,new he),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new he,materialIndex:0};bi.getNormal(Nc,Lc,Oc,y.normal),g.face=y,g.barycoord=v}return g}class ll extends Ri{constructor(e=1,i=1,r=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:f};const h=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const m=[],p=[],g=[],v=[];let y=0,M=0;b("z","y","x",-1,-1,r,i,e,f,c,0),b("z","y","x",1,-1,r,i,-e,f,c,1),b("x","z","y",1,1,e,r,i,l,f,2),b("x","z","y",1,-1,e,r,-i,l,f,3),b("x","y","z",1,-1,e,i,r,l,c,4),b("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new zi(p,3)),this.setAttribute("normal",new zi(g,3)),this.setAttribute("uv",new zi(v,2));function b(R,S,_,L,O,N,G,k,z,Z,U){const D=N/z,w=G/Z,F=N/2,ee=G/2,ce=k/2,ae=z+1,P=Z+1;let q=0,J=0;const Ee=new he;for(let B=0;B<P;B++){const E=B*w-ee;for(let W=0;W<ae;W++){const le=W*D-F;Ee[R]=le*L,Ee[S]=E*O,Ee[_]=ce,p.push(Ee.x,Ee.y,Ee.z),Ee[R]=0,Ee[S]=0,Ee[_]=k>0?1:-1,g.push(Ee.x,Ee.y,Ee.z),v.push(W/z),v.push(1-B/Z),q+=1}}for(let B=0;B<Z;B++)for(let E=0;E<z;E++){const W=y+E+ae*B,le=y+E+ae*(B+1),me=y+(E+1)+ae*(B+1),ge=y+(E+1)+ae*B;m.push(W,le,ge),m.push(le,me,ge),J+=6}h.addGroup(M,J,U),M+=J,y+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const r=Gs(s[i]);for(const l in r)e[l]=r[l]}return e}function cb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function $_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const ub={clone:Gs,merge:zn};var fb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends Xs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fb,this.fragmentShader=hb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=cb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class ey extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ja=new he,Iv=new It,zv=new It;class ai extends ey{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=ep*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ep*2*Math.atan(Math.tan(Nh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ja.x,ja.y).multiplyScalar(-e/ja.z),ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ja.x,ja.y).multiplyScalar(-e/ja.z)}getViewSize(e,i){return this.getViewBounds(e,Iv,zv),i.subVectors(zv,Iv)}setViewOffset(e,i,r,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Nh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;c+=f.offsetX*l/m,i-=f.offsetY*r/p,l*=f.width/m,r*=f.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Us=1;class db extends Cn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(Ds,Us,e,i);l.layers=this.layers,this.add(l);const c=new ai(Ds,Us,e,i);c.layers=this.layers,this.add(c);const f=new ai(Ds,Us,e,i);f.layers=this.layers,this.add(f);const h=new ai(Ds,Us,e,i);h.layers=this.layers,this.add(h);const m=new ai(Ds,Us,e,i);m.layers=this.layers,this.add(m);const p=new ai(Ds,Us,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,f,h,m]=i;for(const p of i)this.remove(p);if(e===Ii)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===au)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,h,m,p,g]=this.children,v=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,f),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,y,M),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class ty extends qn{constructor(e=[],i=Bs,r,l,c,f,h,m,p,g){super(e,i,r,l,c,f,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pb extends Ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new ty(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ll(5,5,5),c=new tr({name:"CubemapFromEquirect",uniforms:Gs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Xn,blending:Ja});c.uniforms.tEquirect.value=i;const f=new ri(l,c),h=i.minFilter;return i.minFilter===Lr&&(i.minFilter=Pi),new db(1,10,this).update(e,f),i.minFilter=h,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,r,l);e.setRenderTarget(c)}}class Bc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class ed{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new he,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new he),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new he,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new he),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,f=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){f=!0;for(const R of e.hand.values()){const S=i.getJointPose(R,r),_=this._getHandJoint(p,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],v=p.joints["thumb-tip"],y=g.position.distanceTo(v.position),M=.02,b=.005;p.inputState.pinching&&y>M+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Bc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class ny extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hi,this.environmentIntensity=1,this.environmentRotation=new Hi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const td=new he,gb=new he,vb=new gt;class wr{constructor(e=new he(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=td.subVectors(r,i).cross(gb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(td),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||vb.getNormalMatrix(e),l=this.coplanarPoint(td).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new hu,_b=new It(.5,.5),Fc=new he;class vp{constructor(e=new wr,i=new wr,r=new wr,l=new wr,c=new wr,f=new wr){this.planes=[e,i,r,l,c,f]}set(e,i,r,l,c,f){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(f),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ii,r=!1){const l=this.planes,c=e.elements,f=c[0],h=c[1],m=c[2],p=c[3],g=c[4],v=c[5],y=c[6],M=c[7],b=c[8],R=c[9],S=c[10],_=c[11],L=c[12],O=c[13],N=c[14],G=c[15];if(l[0].setComponents(p-f,M-g,_-b,G-L).normalize(),l[1].setComponents(p+f,M+g,_+b,G+L).normalize(),l[2].setComponents(p+h,M+v,_+R,G+O).normalize(),l[3].setComponents(p-h,M-v,_-R,G-O).normalize(),r)l[4].setComponents(m,y,S,N).normalize(),l[5].setComponents(p-m,M-y,_-S,G-N).normalize();else if(l[4].setComponents(p-m,M-y,_-S,G-N).normalize(),i===Ii)l[5].setComponents(p+m,M+y,_+S,G+N).normalize();else if(i===au)l[5].setComponents(m,y,S,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=_b.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Fc.x=l.normal.x>0?e.max.x:e.min.x,Fc.y=l.normal.y>0?e.max.y:e.min.y,Fc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Fc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class _p extends Xs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bv=new sn,tp=new j_,Hc=new hu,Gc=new he;class iy extends Cn{constructor(e=new Ri,i=new _p){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Hc.copy(r.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=c,e.ray.intersectsSphere(Hc)===!1)return;Bv.copy(l).invert(),tp.copy(e.ray).applyMatrix4(Bv);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=r.index,v=r.attributes.position;if(p!==null){const y=Math.max(0,f.start),M=Math.min(p.count,f.start+f.count);for(let b=y,R=M;b<R;b++){const S=p.getX(b);Gc.fromBufferAttribute(v,S),Fv(Gc,S,m,l,e,i,this)}}else{const y=Math.max(0,f.start),M=Math.min(v.count,f.start+f.count);for(let b=y,R=M;b<R;b++)Gc.fromBufferAttribute(v,b),Fv(Gc,b,m,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Fv(s,e,i,r,l,c,f){const h=tp.distanceSqToPoint(s);if(h<i){const m=new he;tp.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(h),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class ay extends qn{constructor(e,i,r=Pr,l,c,f,h=Ai,m=Ai,p,g=Jo,v=1){if(g!==Jo&&g!==$o)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:e,height:i,depth:v};super(y,l,c,f,h,m,g,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class ry extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class du extends Ri{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,f=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,v=e/h,y=i/m,M=[],b=[],R=[],S=[];for(let _=0;_<g;_++){const L=_*y-f;for(let O=0;O<p;O++){const N=O*v-c;b.push(N,-L,0),R.push(0,0,1),S.push(O/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let L=0;L<h;L++){const O=L+p*_,N=L+p*(_+1),G=L+1+p*(_+1),k=L+1+p*_;M.push(O,N,k),M.push(N,G,k)}this.setIndex(M),this.setAttribute("position",new zi(b,3)),this.setAttribute("normal",new zi(R,3)),this.setAttribute("uv",new zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.width,e.height,e.widthSegments,e.heightSegments)}}class pu extends Ri{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,f=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:f,thetaLength:h},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const m=Math.min(f+h,Math.PI);let p=0;const g=[],v=new he,y=new he,M=[],b=[],R=[],S=[];for(let _=0;_<=r;_++){const L=[],O=_/r;let N=0;_===0&&f===0?N=.5/i:_===r&&m===Math.PI&&(N=-.5/i);for(let G=0;G<=i;G++){const k=G/i;v.x=-e*Math.cos(l+k*c)*Math.sin(f+O*h),v.y=e*Math.cos(f+O*h),v.z=e*Math.sin(l+k*c)*Math.sin(f+O*h),b.push(v.x,v.y,v.z),y.copy(v).normalize(),R.push(y.x,y.y,y.z),S.push(k+N,1-O),L.push(p++)}g.push(L)}for(let _=0;_<r;_++)for(let L=0;L<i;L++){const O=g[_][L+1],N=g[_][L],G=g[_+1][L],k=g[_+1][L+1];(_!==0||f>0)&&M.push(O,N,k),(_!==r-1||m<Math.PI)&&M.push(N,G,k)}this.setIndex(M),this.setAttribute("position",new zi(b,3)),this.setAttribute("normal",new zi(R,3)),this.setAttribute("uv",new zi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yb extends Xs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k_,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class su extends yb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class xb extends Xs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sb extends Xs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sy extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const nd=new sn,Hv=new he,Gv=new he;class Mb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Fi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vp,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;Hv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Hv),Gv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Gv),i.updateMatrixWorld(),nd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(nd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class oy extends ey{constructor(e=-1,i=1,r=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,f=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,f=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Eb extends Mb{constructor(){super(new oy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ly extends sy{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Eb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cy extends sy{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class bb extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Vv(s,e,i,r){const l=Tb(r);switch(i){case F_:return s*e;case G_:return s*e/l.components*l.byteLength;case dp:return s*e/l.components*l.byteLength;case V_:return s*e*2/l.components*l.byteLength;case pp:return s*e*2/l.components*l.byteLength;case H_:return s*e*3/l.components*l.byteLength;case Ti:return s*e*4/l.components*l.byteLength;case mp:return s*e*4/l.components*l.byteLength;case Zc:case Kc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Qc:case Jc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rd:case Cd:return Math.max(s,16)*Math.max(e,8)/4;case Ad:case wd:return Math.max(s,8)*Math.max(e,8)/2;case Dd:case Ud:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ld:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Od:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Pd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Id:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case zd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Fd:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Gd:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case jd:case Yd:case Zd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Kd:case Qd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Jd:case $d:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Tb(s){switch(s){case Fi:case P_:return{byteLength:1,components:1};case Ko:case I_:case al:return{byteLength:2,components:1};case fp:case hp:return{byteLength:2,components:4};case Pr:case up:case da:return{byteLength:4,components:1};case z_:case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uy(){let s=null,e=!1,i=null,r=null;function l(c,f){i(c,f),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Ab(s){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,v=p.byteLength,y=s.createBuffer();s.bindBuffer(m,y),s.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=s.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=s.SHORT;else if(p instanceof Uint32Array)M=s.UNSIGNED_INT;else if(p instanceof Int32Array)M=s.INT;else if(p instanceof Int8Array)M=s.BYTE;else if(p instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:v}}function r(h,m,p){const g=m.array,v=m.updateRanges;if(s.bindBuffer(p,h),v.length===0)s.bufferSubData(p,0,g);else{v.sort((M,b)=>M.start-b.start);let y=0;for(let M=1;M<v.length;M++){const b=v[y],R=v[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++y,v[y]=R)}v.length=y+1;for(let M=0,b=v.length;M<b;M++){const R=v[M];s.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(s.deleteBuffer(m.buffer),e.delete(h))}function f(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:f}}var Rb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wb=`#ifdef USE_ALPHAHASH
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
#endif`,Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Db=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ub=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lb=`#ifdef USE_AOMAP
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
#endif`,Ob=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pb=`#ifdef USE_BATCHING
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
#endif`,Ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hb=`#ifdef USE_IRIDESCENCE
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
#endif`,Gb=`#ifdef USE_BUMPMAP
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
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Kb=`#define PI 3.141592653589793
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
} // validated`,Qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jb=`vec3 transformedNormal = objectNormal;
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
#endif`,$b=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,eT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,iT="gl_FragColor = linearToOutputTexel( gl_FragColor );",aT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,rT=`#ifdef USE_ENVMAP
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
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,oT=`#ifdef USE_ENVMAP
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
#endif`,lT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,dT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pT=`#ifdef USE_GRADIENTMAP
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
}`,mT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_T=`uniform bool receiveShadow;
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
#endif`,yT=`#ifdef USE_ENVMAP
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
#endif`,xT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,MT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bT=`PhysicalMaterial material;
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
#endif`,TT=`struct PhysicalMaterial {
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
}`,AT=`
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
#endif`,RT=`#if defined( RE_IndirectDiffuse )
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
#endif`,wT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,DT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,UT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,NT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,OT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IT=`#if defined( USE_POINTS_UV )
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
#endif`,zT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,BT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,HT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,GT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`#ifdef USE_MORPHTARGETS
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
#endif`,kT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,XT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ZT=`#ifdef USE_NORMALMAP
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
#endif`,KT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,QT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,JT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,e1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,t1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,n1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,i1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,a1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,r1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,s1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,o1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,l1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,f1=`float getShadowMask() {
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
}`,h1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,d1=`#ifdef USE_SKINNING
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
#endif`,p1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,v1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,x1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,R1=`uniform sampler2D t2D;
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
}`,w1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,U1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,L1=`#if DEPTH_PACKING == 3200
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
}`,O1=`#define DISTANCE
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
}`,P1=`#define DISTANCE
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
}`,I1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`uniform float scale;
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
}`,F1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,G1=`uniform vec3 diffuse;
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
}`,V1=`#define LAMBERT
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
}`,k1=`#define LAMBERT
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
}`,W1=`#define MATCAP
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
}`,X1=`#define MATCAP
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
}`,q1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,Y1=`#define PHONG
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
}`,Z1=`#define PHONG
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
}`,K1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
}`,J1=`#define TOON
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
}`,$1=`#define TOON
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
}`,eA=`uniform float size;
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
}`,tA=`uniform vec3 diffuse;
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
}`,nA=`#include <common>
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
}`,iA=`uniform vec3 color;
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
}`,aA=`uniform float rotation;
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
}`,rA=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:Rb,alphahash_pars_fragment:wb,alphamap_fragment:Cb,alphamap_pars_fragment:Db,alphatest_fragment:Ub,alphatest_pars_fragment:Nb,aomap_fragment:Lb,aomap_pars_fragment:Ob,batching_pars_vertex:Pb,batching_vertex:Ib,begin_vertex:zb,beginnormal_vertex:Bb,bsdfs:Fb,iridescence_fragment:Hb,bumpmap_pars_fragment:Gb,clipping_planes_fragment:Vb,clipping_planes_pars_fragment:kb,clipping_planes_pars_vertex:Wb,clipping_planes_vertex:Xb,color_fragment:qb,color_pars_fragment:jb,color_pars_vertex:Yb,color_vertex:Zb,common:Kb,cube_uv_reflection_fragment:Qb,defaultnormal_vertex:Jb,displacementmap_pars_vertex:$b,displacementmap_vertex:eT,emissivemap_fragment:tT,emissivemap_pars_fragment:nT,colorspace_fragment:iT,colorspace_pars_fragment:aT,envmap_fragment:rT,envmap_common_pars_fragment:sT,envmap_pars_fragment:oT,envmap_pars_vertex:lT,envmap_physical_pars_fragment:yT,envmap_vertex:cT,fog_vertex:uT,fog_pars_vertex:fT,fog_fragment:hT,fog_pars_fragment:dT,gradientmap_pars_fragment:pT,lightmap_pars_fragment:mT,lights_lambert_fragment:gT,lights_lambert_pars_fragment:vT,lights_pars_begin:_T,lights_toon_fragment:xT,lights_toon_pars_fragment:ST,lights_phong_fragment:MT,lights_phong_pars_fragment:ET,lights_physical_fragment:bT,lights_physical_pars_fragment:TT,lights_fragment_begin:AT,lights_fragment_maps:RT,lights_fragment_end:wT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:DT,logdepthbuf_pars_vertex:UT,logdepthbuf_vertex:NT,map_fragment:LT,map_pars_fragment:OT,map_particle_fragment:PT,map_particle_pars_fragment:IT,metalnessmap_fragment:zT,metalnessmap_pars_fragment:BT,morphinstance_vertex:FT,morphcolor_vertex:HT,morphnormal_vertex:GT,morphtarget_pars_vertex:VT,morphtarget_vertex:kT,normal_fragment_begin:WT,normal_fragment_maps:XT,normal_pars_fragment:qT,normal_pars_vertex:jT,normal_vertex:YT,normalmap_pars_fragment:ZT,clearcoat_normal_fragment_begin:KT,clearcoat_normal_fragment_maps:QT,clearcoat_pars_fragment:JT,iridescence_pars_fragment:$T,opaque_fragment:e1,packing:t1,premultiplied_alpha_fragment:n1,project_vertex:i1,dithering_fragment:a1,dithering_pars_fragment:r1,roughnessmap_fragment:s1,roughnessmap_pars_fragment:o1,shadowmap_pars_fragment:l1,shadowmap_pars_vertex:c1,shadowmap_vertex:u1,shadowmask_pars_fragment:f1,skinbase_vertex:h1,skinning_pars_vertex:d1,skinning_vertex:p1,skinnormal_vertex:m1,specularmap_fragment:g1,specularmap_pars_fragment:v1,tonemapping_fragment:_1,tonemapping_pars_fragment:y1,transmission_fragment:x1,transmission_pars_fragment:S1,uv_pars_fragment:M1,uv_pars_vertex:E1,uv_vertex:b1,worldpos_vertex:T1,background_vert:A1,background_frag:R1,backgroundCube_vert:w1,backgroundCube_frag:C1,cube_vert:D1,cube_frag:U1,depth_vert:N1,depth_frag:L1,distanceRGBA_vert:O1,distanceRGBA_frag:P1,equirect_vert:I1,equirect_frag:z1,linedashed_vert:B1,linedashed_frag:F1,meshbasic_vert:H1,meshbasic_frag:G1,meshlambert_vert:V1,meshlambert_frag:k1,meshmatcap_vert:W1,meshmatcap_frag:X1,meshnormal_vert:q1,meshnormal_frag:j1,meshphong_vert:Y1,meshphong_frag:Z1,meshphysical_vert:K1,meshphysical_frag:Q1,meshtoon_vert:J1,meshtoon_frag:$1,points_vert:eA,points_frag:tA,shadow_vert:nA,shadow_frag:iA,sprite_vert:aA,sprite_frag:rA},ze={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:zn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:zn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:zn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Ct(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:zn([ze.points,ze.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:zn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:zn([ze.common,ze.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:zn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:zn([ze.sprite,ze.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distanceRGBA:{uniforms:zn([ze.common,ze.displacementmap,{referencePosition:{value:new he},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distanceRGBA_vert,fragmentShader:vt.distanceRGBA_frag},shadow:{uniforms:zn([ze.lights,ze.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Vc={r:0,b:0,g:0},Ar=new Hi,sA=new sn;function oA(s,e,i,r,l,c,f){const h=new Ct(0);let m=c===!0?0:1,p,g,v=null,y=0,M=null;function b(O){let N=O.isScene===!0?O.background:null;return N&&N.isTexture&&(N=(O.backgroundBlurriness>0?i:e).get(N)),N}function R(O){let N=!1;const G=b(O);G===null?_(h,m):G&&G.isColor&&(_(G,1),N=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?r.buffers.color.setClear(0,0,0,1,f):k==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,f),(s.autoClear||N)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function S(O,N){const G=b(N);G&&(G.isCubeTexture||G.mapping===fu)?(g===void 0&&(g=new ri(new ll(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Gs(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(k,z,Z){this.matrixWorld.copyPosition(Z.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ar.copy(N.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.material.uniforms.envMap.value=G,g.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(sA.makeRotationFromEuler(Ar)),g.material.toneMapped=Pt.getTransfer(G.colorSpace)!==qt,(v!==G||y!==G.version||M!==s.toneMapping)&&(g.material.needsUpdate=!0,v=G,y=G.version,M=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):G&&G.isTexture&&(p===void 0&&(p=new ri(new du(2,2),new tr({name:"BackgroundMaterial",uniforms:Gs(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=G,p.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,p.material.toneMapped=Pt.getTransfer(G.colorSpace)!==qt,G.matrixAutoUpdate===!0&&G.updateMatrix(),p.material.uniforms.uvTransform.value.copy(G.matrix),(v!==G||y!==G.version||M!==s.toneMapping)&&(p.material.needsUpdate=!0,v=G,y=G.version,M=s.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function _(O,N){O.getRGB(Vc,$_(s)),r.buffers.color.setClear(Vc.r,Vc.g,Vc.b,N,f)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(O,N=1){h.set(O),m=N,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,_(h,m)},render:R,addToRenderList:S,dispose:L}}function lA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=y(null);let c=l,f=!1;function h(D,w,F,ee,ce){let ae=!1;const P=v(ee,F,w);c!==P&&(c=P,p(c.object)),ae=M(D,ee,F,ce),ae&&b(D,ee,F,ce),ce!==null&&e.update(ce,s.ELEMENT_ARRAY_BUFFER),(ae||f)&&(f=!1,N(D,w,F,ee),ce!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function m(){return s.createVertexArray()}function p(D){return s.bindVertexArray(D)}function g(D){return s.deleteVertexArray(D)}function v(D,w,F){const ee=F.wireframe===!0;let ce=r[D.id];ce===void 0&&(ce={},r[D.id]=ce);let ae=ce[w.id];ae===void 0&&(ae={},ce[w.id]=ae);let P=ae[ee];return P===void 0&&(P=y(m()),ae[ee]=P),P}function y(D){const w=[],F=[],ee=[];for(let ce=0;ce<i;ce++)w[ce]=0,F[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:ee,object:D,attributes:{},index:null}}function M(D,w,F,ee){const ce=c.attributes,ae=w.attributes;let P=0;const q=F.getAttributes();for(const J in q)if(q[J].location>=0){const B=ce[J];let E=ae[J];if(E===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(E=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(E=D.instanceColor)),B===void 0||B.attribute!==E||E&&B.data!==E.data)return!0;P++}return c.attributesNum!==P||c.index!==ee}function b(D,w,F,ee){const ce={},ae=w.attributes;let P=0;const q=F.getAttributes();for(const J in q)if(q[J].location>=0){let B=ae[J];B===void 0&&(J==="instanceMatrix"&&D.instanceMatrix&&(B=D.instanceMatrix),J==="instanceColor"&&D.instanceColor&&(B=D.instanceColor));const E={};E.attribute=B,B&&B.data&&(E.data=B.data),ce[J]=E,P++}c.attributes=ce,c.attributesNum=P,c.index=ee}function R(){const D=c.newAttributes;for(let w=0,F=D.length;w<F;w++)D[w]=0}function S(D){_(D,0)}function _(D,w){const F=c.newAttributes,ee=c.enabledAttributes,ce=c.attributeDivisors;F[D]=1,ee[D]===0&&(s.enableVertexAttribArray(D),ee[D]=1),ce[D]!==w&&(s.vertexAttribDivisor(D,w),ce[D]=w)}function L(){const D=c.newAttributes,w=c.enabledAttributes;for(let F=0,ee=w.length;F<ee;F++)w[F]!==D[F]&&(s.disableVertexAttribArray(F),w[F]=0)}function O(D,w,F,ee,ce,ae,P){P===!0?s.vertexAttribIPointer(D,w,F,ce,ae):s.vertexAttribPointer(D,w,F,ee,ce,ae)}function N(D,w,F,ee){R();const ce=ee.attributes,ae=F.getAttributes(),P=w.defaultAttributeValues;for(const q in ae){const J=ae[q];if(J.location>=0){let Ee=ce[q];if(Ee===void 0&&(q==="instanceMatrix"&&D.instanceMatrix&&(Ee=D.instanceMatrix),q==="instanceColor"&&D.instanceColor&&(Ee=D.instanceColor)),Ee!==void 0){const B=Ee.normalized,E=Ee.itemSize,W=e.get(Ee);if(W===void 0)continue;const le=W.buffer,me=W.type,ge=W.bytesPerElement,X=me===s.INT||me===s.UNSIGNED_INT||Ee.gpuType===up;if(Ee.isInterleavedBufferAttribute){const $=Ee.data,ye=$.stride,Re=Ee.offset;if($.isInstancedInterleavedBuffer){for(let Le=0;Le<J.locationSize;Le++)_(J.location+Le,$.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let Le=0;Le<J.locationSize;Le++)S(J.location+Le);s.bindBuffer(s.ARRAY_BUFFER,le);for(let Le=0;Le<J.locationSize;Le++)O(J.location+Le,E/J.locationSize,me,B,ye*ge,(Re+E/J.locationSize*Le)*ge,X)}else{if(Ee.isInstancedBufferAttribute){for(let $=0;$<J.locationSize;$++)_(J.location+$,Ee.meshPerAttribute);D.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let $=0;$<J.locationSize;$++)S(J.location+$);s.bindBuffer(s.ARRAY_BUFFER,le);for(let $=0;$<J.locationSize;$++)O(J.location+$,E/J.locationSize,me,B,E*ge,E/J.locationSize*$*ge,X)}}else if(P!==void 0){const B=P[q];if(B!==void 0)switch(B.length){case 2:s.vertexAttrib2fv(J.location,B);break;case 3:s.vertexAttrib3fv(J.location,B);break;case 4:s.vertexAttrib4fv(J.location,B);break;default:s.vertexAttrib1fv(J.location,B)}}}}L()}function G(){Z();for(const D in r){const w=r[D];for(const F in w){const ee=w[F];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete w[F]}delete r[D]}}function k(D){if(r[D.id]===void 0)return;const w=r[D.id];for(const F in w){const ee=w[F];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete w[F]}delete r[D.id]}function z(D){for(const w in r){const F=r[w];if(F[D.id]===void 0)continue;const ee=F[D.id];for(const ce in ee)g(ee[ce].object),delete ee[ce];delete F[D.id]}}function Z(){U(),f=!0,c!==l&&(c=l,p(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:Z,resetDefaultState:U,dispose:G,releaseStatesOfGeometry:k,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:S,disableUnusedAttributes:L}}function cA(s,e,i){let r;function l(p){r=p}function c(p,g){s.drawArrays(r,p,g),i.update(g,r,1)}function f(p,g,v){v!==0&&(s.drawArraysInstanced(r,p,g,v),i.update(g,r,v))}function h(p,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,v);let M=0;for(let b=0;b<v;b++)M+=g[b];i.update(M,r,1)}function m(p,g,v,y){if(v===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<p.length;b++)f(p[b],g[b],y[b]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,y,0,v);let b=0;for(let R=0;R<v;R++)b+=g[R]*y[R];i.update(b,r,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function uA(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==Ti&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(z){const Z=z===al&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Fi&&r.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==da&&!Z)}function m(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const v=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,k=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:v,reversedDepthBuffer:y,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:L,maxVaryings:O,maxFragmentUniforms:N,vertexTextures:G,maxSamples:k}}function fA(s){const e=this;let i=null,r=0,l=!1,c=!1;const f=new wr,h=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(v,y){const M=v.length!==0||y||r!==0||l;return l=y,r=v.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,y){i=g(v,y,0)},this.setState=function(v,y,M){const b=v.clippingPlanes,R=v.clipIntersection,S=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!S)c?g(null):p();else{const L=c?0:r,O=L*4;let N=_.clippingState||null;m.value=N,N=g(b,y,O,M);for(let G=0;G!==O;++G)N[G]=i[G];_.clippingState=N,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,y,M,b){const R=v!==null?v.length:0;let S=null;if(R!==0){if(S=m.value,b!==!0||S===null){const _=M+R*4,L=y.matrixWorldInverse;h.getNormalMatrix(L),(S===null||S.length<_)&&(S=new Float32Array(_));for(let O=0,N=M;O!==R;++O,N+=4)f.copy(v[O]).applyMatrix4(L,h),f.normal.toArray(S,N),S[N+3]=f.constant}m.value=S,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,S}}function hA(s){let e=new WeakMap;function i(f,h){return h===Md?f.mapping=Bs:h===Ed&&(f.mapping=Fs),f}function r(f){if(f&&f.isTexture){const h=f.mapping;if(h===Md||h===Ed)if(e.has(f)){const m=e.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new pb(m.height);return p.fromEquirectangularTexture(s,f),e.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const Ls=4,kv=[.125,.215,.35,.446,.526,.582],Ur=20,id=new oy,Wv=new Ct;let ad=null,rd=0,sd=0,od=!1;const Cr=(1+Math.sqrt(5))/2,Ns=1/Cr,Xv=[new he(-Cr,Ns,0),new he(Cr,Ns,0),new he(-Ns,0,Cr),new he(Ns,0,Cr),new he(0,Cr,-Ns),new he(0,Cr,Ns),new he(-1,1,-1),new he(1,1,-1),new he(-1,1,1),new he(1,1,1)],dA=new he;class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:f=256,position:h=dA}=c;ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ad,rd,sd),this._renderer.xr.enabled=od,e.scissorTest=!1,kc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Bs||e.mapping===Fs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ad=this._renderer.getRenderTarget(),rd=this._renderer.getActiveCubeFace(),sd=this._renderer.getActiveMipmapLevel(),od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Pi,minFilter:Pi,generateMipmaps:!1,type:al,format:Ti,colorSpace:Hs,depthBuffer:!1},l=jv(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jv(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=pA(c)),this._blurMaterial=mA(c,e,i)}return l}_compileMaterial(e){const i=new ri(this._lodPlanes[0],e);this._renderer.compile(i,id)}_sceneToCubeUV(e,i,r,l,c){const m=new ai(90,1,i,r),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,y=v.autoClear,M=v.toneMapping;v.getClearColor(Wv),v.toneMapping=$a,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const R=new K_({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),S=new ri(new ll,R);let _=!1;const L=e.background;L?L.isColor&&(R.color.copy(L),e.background=null,_=!0):(R.color.copy(Wv),_=!0);for(let O=0;O<6;O++){const N=O%3;N===0?(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[O],c.y,c.z)):N===1?(m.up.set(0,0,p[O]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[O],c.z)):(m.up.set(0,p[O],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[O]));const G=this._cubeSize;kc(l,N*G,O>2?G:0,G,G),v.setRenderTarget(l),_&&v.render(S,m),v.render(e,m)}S.geometry.dispose(),S.material.dispose(),v.toneMapping=M,v.autoClear=y,e.background=L}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Bs||e.mapping===Fs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new ri(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;kc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(f,id)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=Xv[(l-c-1)%Xv.length];this._blur(e,c-1,c,f,h)}i.autoClear=r}_blur(e,i,r,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,r,l,"latitudinal",c),this._halfBlur(f,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,f,h){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new ri(this._lodPlanes[l],p),y=p.uniforms,M=this._sizeLods[r]-1,b=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*Ur-1),R=c/b,S=isFinite(c)?1+Math.floor(g*R):Ur;S>Ur&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ur}`);const _=[];let L=0;for(let z=0;z<Ur;++z){const Z=z/R,U=Math.exp(-Z*Z/2);_.push(U),z===0?L+=U:z<S&&(L+=2*U)}for(let z=0;z<_.length;z++)_[z]=_[z]/L;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=f==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:O}=this;y.dTheta.value=b,y.mipInt.value=O-r;const N=this._sizeLods[l],G=3*N*(l>O-Ls?l-O+Ls:0),k=4*(this._cubeSize-N);kc(i,G,k,3*N,2*N),m.setRenderTarget(i),m.render(v,id)}}function pA(s){const e=[],i=[],r=[];let l=s;const c=s-Ls+1+kv.length;for(let f=0;f<c;f++){const h=Math.pow(2,l);i.push(h);let m=1/h;f>s-Ls?m=kv[f-s+Ls-1]:f===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,v=1+p,y=[g,g,v,g,v,v,g,g,v,v,g,v],M=6,b=6,R=3,S=2,_=1,L=new Float32Array(R*b*M),O=new Float32Array(S*b*M),N=new Float32Array(_*b*M);for(let k=0;k<M;k++){const z=k%3*2/3-1,Z=k>2?0:-1,U=[z,Z,0,z+2/3,Z,0,z+2/3,Z+1,0,z,Z,0,z+2/3,Z+1,0,z,Z+1,0];L.set(U,R*b*k),O.set(y,S*b*k);const D=[k,k,k,k,k,k];N.set(D,_*b*k)}const G=new Ri;G.setAttribute("position",new jn(L,R)),G.setAttribute("uv",new jn(O,S)),G.setAttribute("faceIndex",new jn(N,_)),e.push(G),l>Ls&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function jv(s,e,i){const r=new Ir(s,e,i);return r.texture.mapping=fu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function kc(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function mA(s,e,i){const r=new Float32Array(Ur),l=new he(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yp(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Yv(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yp(),fragmentShader:`

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
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function Zv(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ja,depthTest:!1,depthWrite:!1})}function yp(){return`

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
	`}function gA(s){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Md||m===Ed,g=m===Bs||m===Fs;if(p||g){let v=e.get(h);const y=v!==void 0?v.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new qv(s)),v=p?i.fromEquirectangular(h,v):i.fromCubemap(h,v),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),v.texture;if(v!==void 0)return v.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new qv(s)),v=p?i.fromEquirectangular(h):i.fromCubemap(h),v.texture.pmremVersion=h.pmremVersion,e.set(h,v),h.addEventListener("dispose",c),v.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function vA(s){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&el("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function _A(s,e,i,r){const l={},c=new WeakMap;function f(v){const y=v.target;y.index!==null&&e.remove(y.index);for(const b in y.attributes)e.remove(y.attributes[b]);y.removeEventListener("dispose",f),delete l[y.id];const M=c.get(y);M&&(e.remove(M),c.delete(y)),r.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(v,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function m(v){const y=v.attributes;for(const M in y)e.update(y[M],s.ARRAY_BUFFER)}function p(v){const y=[],M=v.index,b=v.attributes.position;let R=0;if(M!==null){const L=M.array;R=M.version;for(let O=0,N=L.length;O<N;O+=3){const G=L[O+0],k=L[O+1],z=L[O+2];y.push(G,k,k,z,z,G)}}else if(b!==void 0){const L=b.array;R=b.version;for(let O=0,N=L.length/3-1;O<N;O+=3){const G=O+0,k=O+1,z=O+2;y.push(G,k,k,z,z,G)}}else return;const S=new(X_(y)?J_:Q_)(y,1);S.version=R;const _=c.get(v);_&&e.remove(_),c.set(v,S)}function g(v){const y=c.get(v);if(y){const M=v.index;M!==null&&y.version<M.version&&p(v)}else p(v);return c.get(v)}return{get:h,update:m,getWireframeAttribute:g}}function yA(s,e,i){let r;function l(y){r=y}let c,f;function h(y){c=y.type,f=y.bytesPerElement}function m(y,M){s.drawElements(r,M,c,y*f),i.update(M,r,1)}function p(y,M,b){b!==0&&(s.drawElementsInstanced(r,M,c,y*f,b),i.update(M,r,b))}function g(y,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,c,y,0,b);let S=0;for(let _=0;_<b;_++)S+=M[_];i.update(S,r,1)}function v(y,M,b,R){if(b===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/f,M[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(r,M,0,c,y,0,R,0,b);let _=0;for(let L=0;L<b;L++)_+=M[L]*R[L];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function xA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,f,h){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=h*(c/3);break;case s.LINES:i.lines+=h*(c/2);break;case s.LINE_STRIP:i.lines+=h*(c-1);break;case s.LINE_LOOP:i.lines+=h*c;break;case s.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function SA(s,e,i){const r=new WeakMap,l=new rn;function c(f,h,m){const p=f.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,v=g!==void 0?g.length:0;let y=r.get(h);if(y===void 0||y.count!==v){let D=function(){Z.dispose(),r.delete(h),h.removeEventListener("dispose",D)};var M=D;y!==void 0&&y.texture.dispose();const b=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],O=h.morphAttributes.color||[];let N=0;b===!0&&(N=1),R===!0&&(N=2),S===!0&&(N=3);let G=h.attributes.position.count*N,k=1;G>e.maxTextureSize&&(k=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*k*4*v),Z=new q_(z,G,k,v);Z.type=da,Z.needsUpdate=!0;const U=N*4;for(let w=0;w<v;w++){const F=_[w],ee=L[w],ce=O[w],ae=G*k*4*w;for(let P=0;P<F.count;P++){const q=P*U;b===!0&&(l.fromBufferAttribute(F,P),z[ae+q+0]=l.x,z[ae+q+1]=l.y,z[ae+q+2]=l.z,z[ae+q+3]=0),R===!0&&(l.fromBufferAttribute(ee,P),z[ae+q+4]=l.x,z[ae+q+5]=l.y,z[ae+q+6]=l.z,z[ae+q+7]=0),S===!0&&(l.fromBufferAttribute(ce,P),z[ae+q+8]=l.x,z[ae+q+9]=l.y,z[ae+q+10]=l.z,z[ae+q+11]=ce.itemSize===4?l.w:1)}}y={count:v,texture:Z,size:new It(G,k)},r.set(h,y),h.addEventListener("dispose",D)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let S=0;S<p.length;S++)b+=p[S];const R=h.morphTargetsRelative?1:1-b;m.getUniforms().setValue(s,"morphTargetBaseInfluence",R),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(s,"morphTargetsTextureSize",y.size)}return{update:c}}function MA(s,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,v=e.get(m,g);if(l.get(v)!==p&&(e.update(v),l.set(v,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,s.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return v}function f(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:f}}const fy=new qn,Kv=new ay(1,1),hy=new q_,dy=new QE,py=new ty,Qv=[],Jv=[],$v=new Float32Array(16),e_=new Float32Array(9),t_=new Float32Array(4);function qs(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=Qv[l];if(c===void 0&&(c=new Float32Array(l),Qv[l]=c),e!==0){r.toArray(c,0);for(let f=1,h=0;f!==e;++f)h+=i,s[f].toArray(c,h)}return c}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function yn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function mu(s,e){let i=Jv[e];i===void 0&&(i=new Int32Array(e),Jv[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function EA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function bA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),yn(i,e)}}function TA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),yn(i,e)}}function AA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),yn(i,e)}}function RA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),yn(i,e)}else{if(_n(i,r))return;t_.set(r),s.uniformMatrix2fv(this.addr,!1,t_),yn(i,r)}}function wA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),yn(i,e)}else{if(_n(i,r))return;e_.set(r),s.uniformMatrix3fv(this.addr,!1,e_),yn(i,r)}}function CA(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),yn(i,e)}else{if(_n(i,r))return;$v.set(r),s.uniformMatrix4fv(this.addr,!1,$v),yn(i,r)}}function DA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),yn(i,e)}}function NA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),yn(i,e)}}function LA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),yn(i,e)}}function OA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function PA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),yn(i,e)}}function IA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),yn(i,e)}}function zA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),yn(i,e)}}function BA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Kv.compareFunction=W_,c=Kv):c=fy,i.setTexture2D(e||c,l)}function FA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||dy,l)}function HA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||py,l)}function GA(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||hy,l)}function VA(s){switch(s){case 5126:return EA;case 35664:return bA;case 35665:return TA;case 35666:return AA;case 35674:return RA;case 35675:return wA;case 35676:return CA;case 5124:case 35670:return DA;case 35667:case 35671:return UA;case 35668:case 35672:return NA;case 35669:case 35673:return LA;case 5125:return OA;case 36294:return PA;case 36295:return IA;case 36296:return zA;case 35678:case 36198:case 36298:case 36306:case 35682:return BA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return HA;case 36289:case 36303:case 36311:case 36292:return GA}}function kA(s,e){s.uniform1fv(this.addr,e)}function WA(s,e){const i=qs(e,this.size,2);s.uniform2fv(this.addr,i)}function XA(s,e){const i=qs(e,this.size,3);s.uniform3fv(this.addr,i)}function qA(s,e){const i=qs(e,this.size,4);s.uniform4fv(this.addr,i)}function jA(s,e){const i=qs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function YA(s,e){const i=qs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function ZA(s,e){const i=qs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function KA(s,e){s.uniform1iv(this.addr,e)}function QA(s,e){s.uniform2iv(this.addr,e)}function JA(s,e){s.uniform3iv(this.addr,e)}function $A(s,e){s.uniform4iv(this.addr,e)}function eR(s,e){s.uniform1uiv(this.addr,e)}function tR(s,e){s.uniform2uiv(this.addr,e)}function nR(s,e){s.uniform3uiv(this.addr,e)}function iR(s,e){s.uniform4uiv(this.addr,e)}function aR(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||fy,c[f])}function rR(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||dy,c[f])}function sR(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||py,c[f])}function oR(s,e,i){const r=this.cache,l=e.length,c=mu(i,l);_n(r,c)||(s.uniform1iv(this.addr,c),yn(r,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||hy,c[f])}function lR(s){switch(s){case 5126:return kA;case 35664:return WA;case 35665:return XA;case 35666:return qA;case 35674:return jA;case 35675:return YA;case 35676:return ZA;case 5124:case 35670:return KA;case 35667:case 35671:return QA;case 35668:case 35672:return JA;case 35669:case 35673:return $A;case 5125:return eR;case 36294:return tR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return rR;case 35680:case 36300:case 36308:case 36293:return sR;case 36289:case 36303:case 36311:case 36292:return oR}}class cR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=VA(i.type)}}class uR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lR(i.type)}}class fR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const ld=/(\w+)(\])?(\[|\.)?/g;function n_(s,e){s.seq.push(e),s.map[e.id]=e}function hR(s,e,i){const r=s.name,l=r.length;for(ld.lastIndex=0;;){const c=ld.exec(r),f=ld.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&f+2===l){n_(i,p===void 0?new cR(h,s,e):new uR(h,s,e));break}else{let v=i.map[h];v===void 0&&(v=new fR(h),n_(i,v)),i=v}}}class $c{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);hR(c,f,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,f=i.length;c!==f;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&r.push(f)}return r}}function i_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const dR=37297;let pR=0;function mR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const h=f+1;r.push(`${h===e?">":" "} ${h}: ${i[f]}`)}return r.join(`
`)}const a_=new gt;function gR(s){Pt._getMatrix(a_,Pt.workingColorSpace,s);const e=`mat3( ${a_.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(s)){case iu:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function r_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+mR(s.getShaderSource(e),h)}else return c}function vR(s,e){const i=gR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function _R(s,e){let i;switch(e){case TE:i="Linear";break;case AE:i="Reinhard";break;case RE:i="Cineon";break;case wE:i="ACESFilmic";break;case DE:i="AgX";break;case UE:i="Neutral";break;case CE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new he;function yR(){Pt.getLuminanceCoefficients(Wc);const s=Wc.x.toFixed(4),e=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qo).join(`
`)}function SR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function MR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),f=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),i[f]={type:c.type,location:s.getAttribLocation(e,f),locationSize:h}}return i}function qo(s){return s!==""}function s_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ER=/^[ \t]*#include +<([\w\d./]+)>/gm;function np(s){return s.replace(ER,TR)}const bR=new Map;function TR(s,e){let i=vt[e];if(i===void 0){const r=bR.get(e);if(r!==void 0)i=vt[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return np(i)}const AR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(s){return s.replace(AR,RR)}function RR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function c_(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function wR(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===N_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===aE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===fa&&(e="SHADOWMAP_TYPE_VSM"),e}function CR(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Bs:case Fs:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DR(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Fs:e="ENVMAP_MODE_REFRACTION";break}return e}function UR(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case EE:e="ENVMAP_BLENDING_MIX";break;case bE:e="ENVMAP_BLENDING_ADD";break}return e}function NR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function LR(s,e,i,r){const l=s.getContext(),c=i.defines;let f=i.vertexShader,h=i.fragmentShader;const m=wR(i),p=CR(i),g=DR(i),v=UR(i),y=NR(i),M=xR(i),b=SR(c),R=l.createProgram();let S,_,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(qo).join(`
`),_.length>0&&(_+=`
`)):(S=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qo).join(`
`),_=[c_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==$a?"#define TONE_MAPPING":"",i.toneMapping!==$a?vt.tonemapping_pars_fragment:"",i.toneMapping!==$a?_R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,vR("linearToOutputTexel",i.outputColorSpace),yR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(qo).join(`
`)),f=np(f),f=s_(f,i),f=o_(f,i),h=np(h),h=s_(h,i),h=o_(h,i),f=l_(f),h=l_(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=L+S+f,N=L+_+h,G=i_(l,l.VERTEX_SHADER,O),k=i_(l,l.FRAGMENT_SHADER,N);l.attachShader(R,G),l.attachShader(R,k),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function z(w){if(s.debug.checkShaderErrors){const F=l.getProgramInfoLog(R)||"",ee=l.getShaderInfoLog(G)||"",ce=l.getShaderInfoLog(k)||"",ae=F.trim(),P=ee.trim(),q=ce.trim();let J=!0,Ee=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,G,k);else{const B=r_(l,G,"vertex"),E=r_(l,k,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+ae+`
`+B+`
`+E)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(P===""||q==="")&&(Ee=!1);Ee&&(w.diagnostics={runnable:J,programLog:ae,vertexShader:{log:P,prefix:S},fragmentShader:{log:q,prefix:_}})}l.deleteShader(G),l.deleteShader(k),Z=new $c(l,R),U=MR(l,R)}let Z;this.getUniforms=function(){return Z===void 0&&z(this),Z};let U;this.getAttributes=function(){return U===void 0&&z(this),U};let D=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=l.getProgramParameter(R,dR)),D},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=G,this.fragmentShader=k,this}let OR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new IR(e),i.set(e,r)),r}}class IR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function zR(s,e,i,r,l,c,f){const h=new Y_,m=new PR,p=new Set,g=[],v=l.logarithmicDepthBuffer,y=l.vertexTextures;let M=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return p.add(U),U===0?"uv":`uv${U}`}function S(U,D,w,F,ee){const ce=F.fog,ae=ee.geometry,P=U.isMeshStandardMaterial?F.environment:null,q=(U.isMeshStandardMaterial?i:e).get(U.envMap||P),J=q&&q.mapping===fu?q.image.height:null,Ee=b[U.type];U.precision!==null&&(M=l.getMaxPrecision(U.precision),M!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",M,"instead."));const B=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,E=B!==void 0?B.length:0;let W=0;ae.morphAttributes.position!==void 0&&(W=1),ae.morphAttributes.normal!==void 0&&(W=2),ae.morphAttributes.color!==void 0&&(W=3);let le,me,ge,X;if(Ee){const Dt=Oi[Ee];le=Dt.vertexShader,me=Dt.fragmentShader}else le=U.vertexShader,me=U.fragmentShader,m.update(U),ge=m.getVertexShaderID(U),X=m.getFragmentShaderID(U);const $=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Re=ee.isInstancedMesh===!0,Le=ee.isBatchedMesh===!0,Xe=!!U.map,ft=!!U.matcap,H=!!q,ke=!!U.aoMap,Qe=!!U.lightMap,Ke=!!U.bumpMap,Be=!!U.normalMap,yt=!!U.displacementMap,He=!!U.emissiveMap,rt=!!U.metalnessMap,$t=!!U.roughnessMap,Kt=U.anisotropy>0,I=U.clearcoat>0,T=U.dispersion>0,re=U.iridescence>0,xe=U.sheen>0,Ae=U.transmission>0,ve=Kt&&!!U.anisotropyMap,Je=I&&!!U.clearcoatMap,Ue=I&&!!U.clearcoatNormalMap,je=I&&!!U.clearcoatRoughnessMap,$e=re&&!!U.iridescenceMap,Ce=re&&!!U.iridescenceThicknessMap,Ne=xe&&!!U.sheenColorMap,tt=xe&&!!U.sheenRoughnessMap,Ge=!!U.specularMap,Pe=!!U.specularColorMap,ht=!!U.specularIntensityMap,K=Ae&&!!U.transmissionMap,De=Ae&&!!U.thicknessMap,Oe=!!U.gradientMap,Ve=!!U.alphaMap,we=U.alphaTest>0,be=!!U.alphaHash,We=!!U.extensions;let ct=$a;U.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ct=s.toneMapping);const Ht={shaderID:Ee,shaderType:U.type,shaderName:U.name,vertexShader:le,fragmentShader:me,defines:U.defines,customVertexShaderID:ge,customFragmentShaderID:X,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:M,batching:Le,batchingColor:Le&&ee._colorsTexture!==null,instancing:Re,instancingColor:Re&&ee.instanceColor!==null,instancingMorph:Re&&ee.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:$===null?s.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Hs,alphaToCoverage:!!U.alphaToCoverage,map:Xe,matcap:ft,envMap:H,envMapMode:H&&q.mapping,envMapCubeUVHeight:J,aoMap:ke,lightMap:Qe,bumpMap:Ke,normalMap:Be,displacementMap:y&&yt,emissiveMap:He,normalMapObjectSpace:Be&&U.normalMapType===PE,normalMapTangentSpace:Be&&U.normalMapType===k_,metalnessMap:rt,roughnessMap:$t,anisotropy:Kt,anisotropyMap:ve,clearcoat:I,clearcoatMap:Je,clearcoatNormalMap:Ue,clearcoatRoughnessMap:je,dispersion:T,iridescence:re,iridescenceMap:$e,iridescenceThicknessMap:Ce,sheen:xe,sheenColorMap:Ne,sheenRoughnessMap:tt,specularMap:Ge,specularColorMap:Pe,specularIntensityMap:ht,transmission:Ae,transmissionMap:K,thicknessMap:De,gradientMap:Oe,opaque:U.transparent===!1&&U.blending===Ps&&U.alphaToCoverage===!1,alphaMap:Ve,alphaTest:we,alphaHash:be,combine:U.combine,mapUv:Xe&&R(U.map.channel),aoMapUv:ke&&R(U.aoMap.channel),lightMapUv:Qe&&R(U.lightMap.channel),bumpMapUv:Ke&&R(U.bumpMap.channel),normalMapUv:Be&&R(U.normalMap.channel),displacementMapUv:yt&&R(U.displacementMap.channel),emissiveMapUv:He&&R(U.emissiveMap.channel),metalnessMapUv:rt&&R(U.metalnessMap.channel),roughnessMapUv:$t&&R(U.roughnessMap.channel),anisotropyMapUv:ve&&R(U.anisotropyMap.channel),clearcoatMapUv:Je&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:tt&&R(U.sheenRoughnessMap.channel),specularMapUv:Ge&&R(U.specularMap.channel),specularColorMapUv:Pe&&R(U.specularColorMap.channel),specularIntensityMapUv:ht&&R(U.specularIntensityMap.channel),transmissionMapUv:K&&R(U.transmissionMap.channel),thicknessMapUv:De&&R(U.thicknessMap.channel),alphaMapUv:Ve&&R(U.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Be||Kt),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ae.attributes.uv&&(Xe||Ve),fog:!!ce,useFog:U.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ye,skinning:ee.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:E,morphTextureStride:W,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:ct,decodeVideoTexture:Xe&&U.map.isVideoTexture===!0&&Pt.getTransfer(U.map.colorSpace)===qt,decodeVideoTextureEmissive:He&&U.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(U.emissiveMap.colorSpace)===qt,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ha,flipSided:U.side===Xn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:We&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(We&&U.extensions.multiDraw===!0||Le)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function _(U){const D=[];if(U.shaderID?D.push(U.shaderID):(D.push(U.customVertexShaderID),D.push(U.customFragmentShaderID)),U.defines!==void 0)for(const w in U.defines)D.push(w),D.push(U.defines[w]);return U.isRawShaderMaterial===!1&&(L(D,U),O(D,U),D.push(s.outputColorSpace)),D.push(U.customProgramCacheKey),D.join()}function L(U,D){U.push(D.precision),U.push(D.outputColorSpace),U.push(D.envMapMode),U.push(D.envMapCubeUVHeight),U.push(D.mapUv),U.push(D.alphaMapUv),U.push(D.lightMapUv),U.push(D.aoMapUv),U.push(D.bumpMapUv),U.push(D.normalMapUv),U.push(D.displacementMapUv),U.push(D.emissiveMapUv),U.push(D.metalnessMapUv),U.push(D.roughnessMapUv),U.push(D.anisotropyMapUv),U.push(D.clearcoatMapUv),U.push(D.clearcoatNormalMapUv),U.push(D.clearcoatRoughnessMapUv),U.push(D.iridescenceMapUv),U.push(D.iridescenceThicknessMapUv),U.push(D.sheenColorMapUv),U.push(D.sheenRoughnessMapUv),U.push(D.specularMapUv),U.push(D.specularColorMapUv),U.push(D.specularIntensityMapUv),U.push(D.transmissionMapUv),U.push(D.thicknessMapUv),U.push(D.combine),U.push(D.fogExp2),U.push(D.sizeAttenuation),U.push(D.morphTargetsCount),U.push(D.morphAttributeCount),U.push(D.numDirLights),U.push(D.numPointLights),U.push(D.numSpotLights),U.push(D.numSpotLightMaps),U.push(D.numHemiLights),U.push(D.numRectAreaLights),U.push(D.numDirLightShadows),U.push(D.numPointLightShadows),U.push(D.numSpotLightShadows),U.push(D.numSpotLightShadowsWithMaps),U.push(D.numLightProbes),U.push(D.shadowMapType),U.push(D.toneMapping),U.push(D.numClippingPlanes),U.push(D.numClipIntersection),U.push(D.depthPacking)}function O(U,D){h.disableAll(),D.supportsVertexTextures&&h.enable(0),D.instancing&&h.enable(1),D.instancingColor&&h.enable(2),D.instancingMorph&&h.enable(3),D.matcap&&h.enable(4),D.envMap&&h.enable(5),D.normalMapObjectSpace&&h.enable(6),D.normalMapTangentSpace&&h.enable(7),D.clearcoat&&h.enable(8),D.iridescence&&h.enable(9),D.alphaTest&&h.enable(10),D.vertexColors&&h.enable(11),D.vertexAlphas&&h.enable(12),D.vertexUv1s&&h.enable(13),D.vertexUv2s&&h.enable(14),D.vertexUv3s&&h.enable(15),D.vertexTangents&&h.enable(16),D.anisotropy&&h.enable(17),D.alphaHash&&h.enable(18),D.batching&&h.enable(19),D.dispersion&&h.enable(20),D.batchingColor&&h.enable(21),D.gradientMap&&h.enable(22),U.push(h.mask),h.disableAll(),D.fog&&h.enable(0),D.useFog&&h.enable(1),D.flatShading&&h.enable(2),D.logarithmicDepthBuffer&&h.enable(3),D.reversedDepthBuffer&&h.enable(4),D.skinning&&h.enable(5),D.morphTargets&&h.enable(6),D.morphNormals&&h.enable(7),D.morphColors&&h.enable(8),D.premultipliedAlpha&&h.enable(9),D.shadowMapEnabled&&h.enable(10),D.doubleSided&&h.enable(11),D.flipSided&&h.enable(12),D.useDepthPacking&&h.enable(13),D.dithering&&h.enable(14),D.transmission&&h.enable(15),D.sheen&&h.enable(16),D.opaque&&h.enable(17),D.pointsUvs&&h.enable(18),D.decodeVideoTexture&&h.enable(19),D.decodeVideoTextureEmissive&&h.enable(20),D.alphaToCoverage&&h.enable(21),U.push(h.mask)}function N(U){const D=b[U.type];let w;if(D){const F=Oi[D];w=ub.clone(F.uniforms)}else w=U.uniforms;return w}function G(U,D){let w;for(let F=0,ee=g.length;F<ee;F++){const ce=g[F];if(ce.cacheKey===D){w=ce,++w.usedTimes;break}}return w===void 0&&(w=new LR(s,D,U,c),g.push(w)),w}function k(U){if(--U.usedTimes===0){const D=g.indexOf(U);g[D]=g[g.length-1],g.pop(),U.destroy()}}function z(U){m.remove(U)}function Z(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:N,acquireProgram:G,releaseProgram:k,releaseShaderCache:z,programs:g,dispose:Z}}function BR(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let h=s.get(f);return h===void 0&&(h={},s.set(f,h)),h}function r(f){s.delete(f)}function l(f,h,m){s.get(f)[h]=m}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function FR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function u_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function f_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function f(v,y,M,b,R,S){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:y,material:M,groupOrder:b,renderOrder:v.renderOrder,z:R,group:S},s[e]=_):(_.id=v.id,_.object=v,_.geometry=y,_.material=M,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=R,_.group=S),e++,_}function h(v,y,M,b,R,S){const _=f(v,y,M,b,R,S);M.transmission>0?r.push(_):M.transparent===!0?l.push(_):i.push(_)}function m(v,y,M,b,R,S){const _=f(v,y,M,b,R,S);M.transmission>0?r.unshift(_):M.transparent===!0?l.unshift(_):i.unshift(_)}function p(v,y){i.length>1&&i.sort(v||FR),r.length>1&&r.sort(y||u_),l.length>1&&l.sort(y||u_)}function g(){for(let v=e,y=s.length;v<y;v++){const M=s[v];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function HR(){let s=new WeakMap;function e(r,l){const c=s.get(r);let f;return c===void 0?(f=new f_,s.set(r,[f])):l>=c.length?(f=new f_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function GR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new he,color:new Ct};break;case"SpotLight":i={position:new he,direction:new he,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new he,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":i={direction:new he,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":i={color:new Ct,position:new he,halfWidth:new he,halfHeight:new he};break}return s[e.id]=i,i}}}function VR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let kR=0;function WR(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function XR(s){const e=new GR,i=VR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new he);const l=new he,c=new sn,f=new sn;function h(p){let g=0,v=0,y=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let M=0,b=0,R=0,S=0,_=0,L=0,O=0,N=0,G=0,k=0,z=0;p.sort(WR);for(let U=0,D=p.length;U<D;U++){const w=p[U],F=w.color,ee=w.intensity,ce=w.distance,ae=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)g+=F.r*ee,v+=F.g*ee,y+=F.b*ee;else if(w.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(w.sh.coefficients[P],ee);z++}else if(w.isDirectionalLight){const P=e.get(w);if(P.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const q=w.shadow,J=i.get(w);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.directionalShadow[M]=J,r.directionalShadowMap[M]=ae,r.directionalShadowMatrix[M]=w.shadow.matrix,L++}r.directional[M]=P,M++}else if(w.isSpotLight){const P=e.get(w);P.position.setFromMatrixPosition(w.matrixWorld),P.color.copy(F).multiplyScalar(ee),P.distance=ce,P.coneCos=Math.cos(w.angle),P.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),P.decay=w.decay,r.spot[R]=P;const q=w.shadow;if(w.map&&(r.spotLightMap[G]=w.map,G++,q.updateMatrices(w),w.castShadow&&k++),r.spotLightMatrix[R]=q.matrix,w.castShadow){const J=i.get(w);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,r.spotShadow[R]=J,r.spotShadowMap[R]=ae,N++}R++}else if(w.isRectAreaLight){const P=e.get(w);P.color.copy(F).multiplyScalar(ee),P.halfWidth.set(w.width*.5,0,0),P.halfHeight.set(0,w.height*.5,0),r.rectArea[S]=P,S++}else if(w.isPointLight){const P=e.get(w);if(P.color.copy(w.color).multiplyScalar(w.intensity),P.distance=w.distance,P.decay=w.decay,w.castShadow){const q=w.shadow,J=i.get(w);J.shadowIntensity=q.intensity,J.shadowBias=q.bias,J.shadowNormalBias=q.normalBias,J.shadowRadius=q.radius,J.shadowMapSize=q.mapSize,J.shadowCameraNear=q.camera.near,J.shadowCameraFar=q.camera.far,r.pointShadow[b]=J,r.pointShadowMap[b]=ae,r.pointShadowMatrix[b]=w.shadow.matrix,O++}r.point[b]=P,b++}else if(w.isHemisphereLight){const P=e.get(w);P.skyColor.copy(w.color).multiplyScalar(ee),P.groundColor.copy(w.groundColor).multiplyScalar(ee),r.hemi[_]=P,_++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ze.LTC_FLOAT_1,r.rectAreaLTC2=ze.LTC_FLOAT_2):(r.rectAreaLTC1=ze.LTC_HALF_1,r.rectAreaLTC2=ze.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=y;const Z=r.hash;(Z.directionalLength!==M||Z.pointLength!==b||Z.spotLength!==R||Z.rectAreaLength!==S||Z.hemiLength!==_||Z.numDirectionalShadows!==L||Z.numPointShadows!==O||Z.numSpotShadows!==N||Z.numSpotMaps!==G||Z.numLightProbes!==z)&&(r.directional.length=M,r.spot.length=R,r.rectArea.length=S,r.point.length=b,r.hemi.length=_,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=N,r.spotShadowMap.length=N,r.directionalShadowMatrix.length=L,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=N+G-k,r.spotLightMap.length=G,r.numSpotLightShadowsWithMaps=k,r.numLightProbes=z,Z.directionalLength=M,Z.pointLength=b,Z.spotLength=R,Z.rectAreaLength=S,Z.hemiLength=_,Z.numDirectionalShadows=L,Z.numPointShadows=O,Z.numSpotShadows=N,Z.numSpotMaps=G,Z.numLightProbes=z,r.version=kR++)}function m(p,g){let v=0,y=0,M=0,b=0,R=0;const S=g.matrixWorldInverse;for(let _=0,L=p.length;_<L;_++){const O=p[_];if(O.isDirectionalLight){const N=r.directional[v];N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),v++}else if(O.isSpotLight){const N=r.spot[M];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),N.direction.sub(l),N.direction.transformDirection(S),M++}else if(O.isRectAreaLight){const N=r.rectArea[b];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),f.identity(),c.copy(O.matrixWorld),c.premultiply(S),f.extractRotation(c),N.halfWidth.set(O.width*.5,0,0),N.halfHeight.set(0,O.height*.5,0),N.halfWidth.applyMatrix4(f),N.halfHeight.applyMatrix4(f),b++}else if(O.isPointLight){const N=r.point[y];N.position.setFromMatrixPosition(O.matrixWorld),N.position.applyMatrix4(S),y++}else if(O.isHemisphereLight){const N=r.hemi[R];N.direction.setFromMatrixPosition(O.matrixWorld),N.direction.transformDirection(S),R++}}}return{setup:h,setupView:m,state:r}}function h_(s){const e=new XR(s),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function f(g){r.push(g)}function h(){e.setup(i)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:f}}function qR(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let h;return f===void 0?(h=new h_(s),e.set(l,[h])):c>=f.length?(h=new h_(s),f.push(h)):h=f[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const jR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YR=`uniform sampler2D shadow_pass;
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
}`;function ZR(s,e,i){let r=new vp;const l=new It,c=new It,f=new rn,h=new xb({depthPacking:OE}),m=new Sb,p={},g=i.maxTextureSize,v={[er]:Xn,[Xn]:er,[ha]:ha},y=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:jR,fragmentShader:YR}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const b=new Ri;b.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ri(b,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=N_;let _=this.type;this.render=function(k,z,Z){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||k.length===0)return;const U=s.getRenderTarget(),D=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ja),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const ee=_!==fa&&this.type===fa,ce=_===fa&&this.type!==fa;for(let ae=0,P=k.length;ae<P;ae++){const q=k[ae],J=q.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;l.copy(J.mapSize);const Ee=J.getFrameExtents();if(l.multiply(Ee),c.copy(J.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/Ee.x),l.x=c.x*Ee.x,J.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/Ee.y),l.y=c.y*Ee.y,J.mapSize.y=c.y)),J.map===null||ee===!0||ce===!0){const E=this.type!==fa?{minFilter:Ai,magFilter:Ai}:{};J.map!==null&&J.map.dispose(),J.map=new Ir(l.x,l.y,E),J.map.texture.name=q.name+".shadowMap",J.camera.updateProjectionMatrix()}s.setRenderTarget(J.map),s.clear();const B=J.getViewportCount();for(let E=0;E<B;E++){const W=J.getViewport(E);f.set(c.x*W.x,c.y*W.y,c.x*W.z,c.y*W.w),F.viewport(f),J.updateMatrices(q,E),r=J.getFrustum(),N(z,Z,J.camera,q,this.type)}J.isPointLightShadow!==!0&&this.type===fa&&L(J,Z),J.needsUpdate=!1}_=this.type,S.needsUpdate=!1,s.setRenderTarget(U,D,w)};function L(k,z){const Z=e.update(R);y.defines.VSM_SAMPLES!==k.blurSamples&&(y.defines.VSM_SAMPLES=k.blurSamples,M.defines.VSM_SAMPLES=k.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),k.mapPass===null&&(k.mapPass=new Ir(l.x,l.y)),y.uniforms.shadow_pass.value=k.map.texture,y.uniforms.resolution.value=k.mapSize,y.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(z,null,Z,y,R,null),M.uniforms.shadow_pass.value=k.mapPass.texture,M.uniforms.resolution.value=k.mapSize,M.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(z,null,Z,M,R,null)}function O(k,z,Z,U){let D=null;const w=Z.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(w!==void 0)D=w;else if(D=Z.isPointLight===!0?m:h,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const F=D.uuid,ee=z.uuid;let ce=p[F];ce===void 0&&(ce={},p[F]=ce);let ae=ce[ee];ae===void 0&&(ae=D.clone(),ce[ee]=ae,z.addEventListener("dispose",G)),D=ae}if(D.visible=z.visible,D.wireframe=z.wireframe,U===fa?D.side=z.shadowSide!==null?z.shadowSide:z.side:D.side=z.shadowSide!==null?z.shadowSide:v[z.side],D.alphaMap=z.alphaMap,D.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,D.map=z.map,D.clipShadows=z.clipShadows,D.clippingPlanes=z.clippingPlanes,D.clipIntersection=z.clipIntersection,D.displacementMap=z.displacementMap,D.displacementScale=z.displacementScale,D.displacementBias=z.displacementBias,D.wireframeLinewidth=z.wireframeLinewidth,D.linewidth=z.linewidth,Z.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const F=s.properties.get(D);F.light=Z}return D}function N(k,z,Z,U,D){if(k.visible===!1)return;if(k.layers.test(z.layers)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&D===fa)&&(!k.frustumCulled||r.intersectsObject(k))){k.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,k.matrixWorld);const ee=e.update(k),ce=k.material;if(Array.isArray(ce)){const ae=ee.groups;for(let P=0,q=ae.length;P<q;P++){const J=ae[P],Ee=ce[J.materialIndex];if(Ee&&Ee.visible){const B=O(k,Ee,U,D);k.onBeforeShadow(s,k,z,Z,ee,B,J),s.renderBufferDirect(Z,null,ee,B,k,J),k.onAfterShadow(s,k,z,Z,ee,B,J)}}}else if(ce.visible){const ae=O(k,ce,U,D);k.onBeforeShadow(s,k,z,Z,ee,ae,null),s.renderBufferDirect(Z,null,ee,ae,k,null),k.onAfterShadow(s,k,z,Z,ee,ae,null)}}const F=k.children;for(let ee=0,ce=F.length;ee<ce;ee++)N(F[ee],z,Z,U,D)}function G(k){k.target.removeEventListener("dispose",G);for(const Z in p){const U=p[Z],D=k.target.uuid;D in U&&(U[D].dispose(),delete U[D])}}}const KR={[md]:gd,[vd]:xd,[_d]:Sd,[zs]:yd,[gd]:md,[xd]:vd,[Sd]:_d,[yd]:zs};function QR(s,e){function i(){let K=!1;const De=new rn;let Oe=null;const Ve=new rn(0,0,0,0);return{setMask:function(we){Oe!==we&&!K&&(s.colorMask(we,we,we,we),Oe=we)},setLocked:function(we){K=we},setClear:function(we,be,We,ct,Ht){Ht===!0&&(we*=ct,be*=ct,We*=ct),De.set(we,be,We,ct),Ve.equals(De)===!1&&(s.clearColor(we,be,We,ct),Ve.copy(De))},reset:function(){K=!1,Oe=null,Ve.set(-1,0,0,0)}}}function r(){let K=!1,De=!1,Oe=null,Ve=null,we=null;return{setReversed:function(be){if(De!==be){const We=e.get("EXT_clip_control");be?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),De=be;const ct=we;we=null,this.setClear(ct)}},getReversed:function(){return De},setTest:function(be){be?$(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(be){Oe!==be&&!K&&(s.depthMask(be),Oe=be)},setFunc:function(be){if(De&&(be=KR[be]),Ve!==be){switch(be){case md:s.depthFunc(s.NEVER);break;case gd:s.depthFunc(s.ALWAYS);break;case vd:s.depthFunc(s.LESS);break;case zs:s.depthFunc(s.LEQUAL);break;case _d:s.depthFunc(s.EQUAL);break;case yd:s.depthFunc(s.GEQUAL);break;case xd:s.depthFunc(s.GREATER);break;case Sd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ve=be}},setLocked:function(be){K=be},setClear:function(be){we!==be&&(De&&(be=1-be),s.clearDepth(be),we=be)},reset:function(){K=!1,Oe=null,Ve=null,we=null,De=!1}}}function l(){let K=!1,De=null,Oe=null,Ve=null,we=null,be=null,We=null,ct=null,Ht=null;return{setTest:function(Dt){K||(Dt?$(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(Dt){De!==Dt&&!K&&(s.stencilMask(Dt),De=Dt)},setFunc:function(Dt,On,si){(Oe!==Dt||Ve!==On||we!==si)&&(s.stencilFunc(Dt,On,si),Oe=Dt,Ve=On,we=si)},setOp:function(Dt,On,si){(be!==Dt||We!==On||ct!==si)&&(s.stencilOp(Dt,On,si),be=Dt,We=On,ct=si)},setLocked:function(Dt){K=Dt},setClear:function(Dt){Ht!==Dt&&(s.clearStencil(Dt),Ht=Dt)},reset:function(){K=!1,De=null,Oe=null,Ve=null,we=null,be=null,We=null,ct=null,Ht=null}}}const c=new i,f=new r,h=new l,m=new WeakMap,p=new WeakMap;let g={},v={},y=new WeakMap,M=[],b=null,R=!1,S=null,_=null,L=null,O=null,N=null,G=null,k=null,z=new Ct(0,0,0),Z=0,U=!1,D=null,w=null,F=null,ee=null,ce=null;const ae=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,q=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(J)[1]),P=q>=1):J.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),P=q>=2);let Ee=null,B={};const E=s.getParameter(s.SCISSOR_BOX),W=s.getParameter(s.VIEWPORT),le=new rn().fromArray(E),me=new rn().fromArray(W);function ge(K,De,Oe,Ve){const we=new Uint8Array(4),be=s.createTexture();s.bindTexture(K,be),s.texParameteri(K,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(K,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<Oe;We++)K===s.TEXTURE_3D||K===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,Ve,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(De+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return be}const X={};X[s.TEXTURE_2D]=ge(s.TEXTURE_2D,s.TEXTURE_2D,1),X[s.TEXTURE_CUBE_MAP]=ge(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[s.TEXTURE_2D_ARRAY]=ge(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),X[s.TEXTURE_3D]=ge(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),h.setClear(0),$(s.DEPTH_TEST),f.setFunc(zs),Ke(!1),Be(mv),$(s.CULL_FACE),ke(Ja);function $(K){g[K]!==!0&&(s.enable(K),g[K]=!0)}function ye(K){g[K]!==!1&&(s.disable(K),g[K]=!1)}function Re(K,De){return v[K]!==De?(s.bindFramebuffer(K,De),v[K]=De,K===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),K===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Le(K,De){let Oe=M,Ve=!1;if(K){Oe=y.get(De),Oe===void 0&&(Oe=[],y.set(De,Oe));const we=K.textures;if(Oe.length!==we.length||Oe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,We=we.length;be<We;be++)Oe[be]=s.COLOR_ATTACHMENT0+be;Oe.length=we.length,Ve=!0}}else Oe[0]!==s.BACK&&(Oe[0]=s.BACK,Ve=!0);Ve&&s.drawBuffers(Oe)}function Xe(K){return b!==K?(s.useProgram(K),b=K,!0):!1}const ft={[Dr]:s.FUNC_ADD,[sE]:s.FUNC_SUBTRACT,[oE]:s.FUNC_REVERSE_SUBTRACT};ft[lE]=s.MIN,ft[cE]=s.MAX;const H={[uE]:s.ZERO,[fE]:s.ONE,[hE]:s.SRC_COLOR,[dd]:s.SRC_ALPHA,[_E]:s.SRC_ALPHA_SATURATE,[gE]:s.DST_COLOR,[pE]:s.DST_ALPHA,[dE]:s.ONE_MINUS_SRC_COLOR,[pd]:s.ONE_MINUS_SRC_ALPHA,[vE]:s.ONE_MINUS_DST_COLOR,[mE]:s.ONE_MINUS_DST_ALPHA,[yE]:s.CONSTANT_COLOR,[xE]:s.ONE_MINUS_CONSTANT_COLOR,[SE]:s.CONSTANT_ALPHA,[ME]:s.ONE_MINUS_CONSTANT_ALPHA};function ke(K,De,Oe,Ve,we,be,We,ct,Ht,Dt){if(K===Ja){R===!0&&(ye(s.BLEND),R=!1);return}if(R===!1&&($(s.BLEND),R=!0),K!==rE){if(K!==S||Dt!==U){if((_!==Dr||N!==Dr)&&(s.blendEquation(s.FUNC_ADD),_=Dr,N=Dr),Dt)switch(K){case Ps:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hd:s.blendFunc(s.ONE,s.ONE);break;case gv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case vv:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case Ps:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}L=null,O=null,G=null,k=null,z.set(0,0,0),Z=0,S=K,U=Dt}return}we=we||De,be=be||Oe,We=We||Ve,(De!==_||we!==N)&&(s.blendEquationSeparate(ft[De],ft[we]),_=De,N=we),(Oe!==L||Ve!==O||be!==G||We!==k)&&(s.blendFuncSeparate(H[Oe],H[Ve],H[be],H[We]),L=Oe,O=Ve,G=be,k=We),(ct.equals(z)===!1||Ht!==Z)&&(s.blendColor(ct.r,ct.g,ct.b,Ht),z.copy(ct),Z=Ht),S=K,U=!1}function Qe(K,De){K.side===ha?ye(s.CULL_FACE):$(s.CULL_FACE);let Oe=K.side===Xn;De&&(Oe=!Oe),Ke(Oe),K.blending===Ps&&K.transparent===!1?ke(Ja):ke(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),f.setFunc(K.depthFunc),f.setTest(K.depthTest),f.setMask(K.depthWrite),c.setMask(K.colorWrite);const Ve=K.stencilWrite;h.setTest(Ve),Ve&&(h.setMask(K.stencilWriteMask),h.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),h.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),He(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?$(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(K){D!==K&&(K?s.frontFace(s.CW):s.frontFace(s.CCW),D=K)}function Be(K){K!==nE?($(s.CULL_FACE),K!==w&&(K===mv?s.cullFace(s.BACK):K===iE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),w=K}function yt(K){K!==F&&(P&&s.lineWidth(K),F=K)}function He(K,De,Oe){K?($(s.POLYGON_OFFSET_FILL),(ee!==De||ce!==Oe)&&(s.polygonOffset(De,Oe),ee=De,ce=Oe)):ye(s.POLYGON_OFFSET_FILL)}function rt(K){K?$(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function $t(K){K===void 0&&(K=s.TEXTURE0+ae-1),Ee!==K&&(s.activeTexture(K),Ee=K)}function Kt(K,De,Oe){Oe===void 0&&(Ee===null?Oe=s.TEXTURE0+ae-1:Oe=Ee);let Ve=B[Oe];Ve===void 0&&(Ve={type:void 0,texture:void 0},B[Oe]=Ve),(Ve.type!==K||Ve.texture!==De)&&(Ee!==Oe&&(s.activeTexture(Oe),Ee=Oe),s.bindTexture(K,De||X[K]),Ve.type=K,Ve.texture=De)}function I(){const K=B[Ee];K!==void 0&&K.type!==void 0&&(s.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function T(){try{s.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function re(){try{s.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function xe(){try{s.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ve(){try{s.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Je(){try{s.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ue(){try{s.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function je(){try{s.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function $e(){try{s.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ce(){try{s.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ne(K){le.equals(K)===!1&&(s.scissor(K.x,K.y,K.z,K.w),le.copy(K))}function tt(K){me.equals(K)===!1&&(s.viewport(K.x,K.y,K.z,K.w),me.copy(K))}function Ge(K,De){let Oe=p.get(De);Oe===void 0&&(Oe=new WeakMap,p.set(De,Oe));let Ve=Oe.get(K);Ve===void 0&&(Ve=s.getUniformBlockIndex(De,K.name),Oe.set(K,Ve))}function Pe(K,De){const Ve=p.get(De).get(K);m.get(De)!==Ve&&(s.uniformBlockBinding(De,Ve,K.__bindingPointIndex),m.set(De,Ve))}function ht(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Ee=null,B={},v={},y=new WeakMap,M=[],b=null,R=!1,S=null,_=null,L=null,O=null,N=null,G=null,k=null,z=new Ct(0,0,0),Z=0,U=!1,D=null,w=null,F=null,ee=null,ce=null,le.set(0,0,s.canvas.width,s.canvas.height),me.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),h.reset()}return{buffers:{color:c,depth:f,stencil:h},enable:$,disable:ye,bindFramebuffer:Re,drawBuffers:Le,useProgram:Xe,setBlending:ke,setMaterial:Qe,setFlipSided:Ke,setCullFace:Be,setLineWidth:yt,setPolygonOffset:He,setScissorTest:rt,activeTexture:$t,bindTexture:Kt,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:re,texImage2D:$e,texImage3D:Ce,updateUBOMapping:Ge,uniformBlockBinding:Pe,texStorage2D:Ue,texStorage3D:je,texSubImage2D:xe,texSubImage3D:Ae,compressedTexSubImage2D:ve,compressedTexSubImage3D:Je,scissor:Ne,viewport:tt,reset:ht}}function JR(s,e,i,r,l,c,f){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,g=new WeakMap;let v;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(I,T){return M?new OffscreenCanvas(I,T):ru("canvas")}function R(I,T,re){let xe=1;const Ae=Kt(I);if((Ae.width>re||Ae.height>re)&&(xe=re/Math.max(Ae.width,Ae.height)),xe<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ve=Math.floor(xe*Ae.width),Je=Math.floor(xe*Ae.height);v===void 0&&(v=b(ve,Je));const Ue=T?b(ve,Je):v;return Ue.width=ve,Ue.height=Je,Ue.getContext("2d").drawImage(I,0,0,ve,Je),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ae.width+"x"+Ae.height+") to ("+ve+"x"+Je+")."),Ue}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ae.width+"x"+Ae.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){s.generateMipmap(I)}function L(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(I,T,re,xe,Ae=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ve=T;if(T===s.RED&&(re===s.FLOAT&&(ve=s.R32F),re===s.HALF_FLOAT&&(ve=s.R16F),re===s.UNSIGNED_BYTE&&(ve=s.R8)),T===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.R8UI),re===s.UNSIGNED_SHORT&&(ve=s.R16UI),re===s.UNSIGNED_INT&&(ve=s.R32UI),re===s.BYTE&&(ve=s.R8I),re===s.SHORT&&(ve=s.R16I),re===s.INT&&(ve=s.R32I)),T===s.RG&&(re===s.FLOAT&&(ve=s.RG32F),re===s.HALF_FLOAT&&(ve=s.RG16F),re===s.UNSIGNED_BYTE&&(ve=s.RG8)),T===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.RG8UI),re===s.UNSIGNED_SHORT&&(ve=s.RG16UI),re===s.UNSIGNED_INT&&(ve=s.RG32UI),re===s.BYTE&&(ve=s.RG8I),re===s.SHORT&&(ve=s.RG16I),re===s.INT&&(ve=s.RG32I)),T===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.RGB8UI),re===s.UNSIGNED_SHORT&&(ve=s.RGB16UI),re===s.UNSIGNED_INT&&(ve=s.RGB32UI),re===s.BYTE&&(ve=s.RGB8I),re===s.SHORT&&(ve=s.RGB16I),re===s.INT&&(ve=s.RGB32I)),T===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(ve=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(ve=s.RGBA16UI),re===s.UNSIGNED_INT&&(ve=s.RGBA32UI),re===s.BYTE&&(ve=s.RGBA8I),re===s.SHORT&&(ve=s.RGBA16I),re===s.INT&&(ve=s.RGBA32I)),T===s.RGB&&(re===s.UNSIGNED_INT_5_9_9_9_REV&&(ve=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(ve=s.R11F_G11F_B10F)),T===s.RGBA){const Je=Ae?iu:Pt.getTransfer(xe);re===s.FLOAT&&(ve=s.RGBA32F),re===s.HALF_FLOAT&&(ve=s.RGBA16F),re===s.UNSIGNED_BYTE&&(ve=Je===qt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT_4_4_4_4&&(ve=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(ve=s.RGB5_A1)}return(ve===s.R16F||ve===s.R32F||ve===s.RG16F||ve===s.RG32F||ve===s.RGBA16F||ve===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function N(I,T){let re;return I?T===null||T===Pr||T===Qo?re=s.DEPTH24_STENCIL8:T===da?re=s.DEPTH32F_STENCIL8:T===Ko&&(re=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Pr||T===Qo?re=s.DEPTH_COMPONENT24:T===da?re=s.DEPTH_COMPONENT32F:T===Ko&&(re=s.DEPTH_COMPONENT16),re}function G(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==Ai&&I.minFilter!==Pi?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function k(I){const T=I.target;T.removeEventListener("dispose",k),Z(T),T.isVideoTexture&&g.delete(T)}function z(I){const T=I.target;T.removeEventListener("dispose",z),D(T)}function Z(I){const T=r.get(I);if(T.__webglInit===void 0)return;const re=I.source,xe=y.get(re);if(xe){const Ae=xe[T.__cacheKey];Ae.usedTimes--,Ae.usedTimes===0&&U(I),Object.keys(xe).length===0&&y.delete(re)}r.remove(I)}function U(I){const T=r.get(I);s.deleteTexture(T.__webglTexture);const re=I.source,xe=y.get(re);delete xe[T.__cacheKey],f.memory.textures--}function D(I){const T=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(T.__webglFramebuffer[xe]))for(let Ae=0;Ae<T.__webglFramebuffer[xe].length;Ae++)s.deleteFramebuffer(T.__webglFramebuffer[xe][Ae]);else s.deleteFramebuffer(T.__webglFramebuffer[xe]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[xe])}else{if(Array.isArray(T.__webglFramebuffer))for(let xe=0;xe<T.__webglFramebuffer.length;xe++)s.deleteFramebuffer(T.__webglFramebuffer[xe]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xe=0;xe<T.__webglColorRenderbuffer.length;xe++)T.__webglColorRenderbuffer[xe]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[xe]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const re=I.textures;for(let xe=0,Ae=re.length;xe<Ae;xe++){const ve=r.get(re[xe]);ve.__webglTexture&&(s.deleteTexture(ve.__webglTexture),f.memory.textures--),r.remove(re[xe])}r.remove(I)}let w=0;function F(){w=0}function ee(){const I=w;return I>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),w+=1,I}function ce(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function ae(I,T){const re=r.get(I);if(I.isVideoTexture&&rt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&re.__version!==I.version){const xe=I.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(re,I,T);return}}else I.isExternalTexture&&(re.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+T)}function P(I,T){const re=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){X(re,I,T);return}i.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+T)}function q(I,T){const re=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){X(re,I,T);return}i.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+T)}function J(I,T){const re=r.get(I);if(I.version>0&&re.__version!==I.version){$(re,I,T);return}i.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+T)}const Ee={[bd]:s.REPEAT,[Nr]:s.CLAMP_TO_EDGE,[Td]:s.MIRRORED_REPEAT},B={[Ai]:s.NEAREST,[NE]:s.NEAREST_MIPMAP_NEAREST,[Sc]:s.NEAREST_MIPMAP_LINEAR,[Pi]:s.LINEAR,[Uh]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},E={[IE]:s.NEVER,[VE]:s.ALWAYS,[zE]:s.LESS,[W_]:s.LEQUAL,[BE]:s.EQUAL,[GE]:s.GEQUAL,[FE]:s.GREATER,[HE]:s.NOTEQUAL};function W(I,T){if(T.type===da&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Pi||T.magFilter===Uh||T.magFilter===Sc||T.magFilter===Lr||T.minFilter===Pi||T.minFilter===Uh||T.minFilter===Sc||T.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Ee[T.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Ee[T.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Ee[T.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,B[T.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,B[T.minFilter]),T.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,E[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Ai||T.minFilter!==Sc&&T.minFilter!==Lr||T.type===da&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function le(I,T){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",k));const xe=T.source;let Ae=y.get(xe);Ae===void 0&&(Ae={},y.set(xe,Ae));const ve=ce(T);if(ve!==I.__cacheKey){Ae[ve]===void 0&&(Ae[ve]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,re=!0),Ae[ve].usedTimes++;const Je=Ae[I.__cacheKey];Je!==void 0&&(Ae[I.__cacheKey].usedTimes--,Je.usedTimes===0&&U(T)),I.__cacheKey=ve,I.__webglTexture=Ae[ve].texture}return re}function me(I,T,re){return Math.floor(Math.floor(I/re)/T)}function ge(I,T,re,xe){const ve=I.updateRanges;if(ve.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,re,xe,T.data);else{ve.sort((Ce,Ne)=>Ce.start-Ne.start);let Je=0;for(let Ce=1;Ce<ve.length;Ce++){const Ne=ve[Je],tt=ve[Ce],Ge=Ne.start+Ne.count,Pe=me(tt.start,T.width,4),ht=me(Ne.start,T.width,4);tt.start<=Ge+1&&Pe===ht&&me(tt.start+tt.count-1,T.width,4)===Pe?Ne.count=Math.max(Ne.count,tt.start+tt.count-Ne.start):(++Je,ve[Je]=tt)}ve.length=Je+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),je=s.getParameter(s.UNPACK_SKIP_PIXELS),$e=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let Ce=0,Ne=ve.length;Ce<Ne;Ce++){const tt=ve[Ce],Ge=Math.floor(tt.start/4),Pe=Math.ceil(tt.count/4),ht=Ge%T.width,K=Math.floor(Ge/T.width),De=Pe,Oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ht),s.pixelStorei(s.UNPACK_SKIP_ROWS,K),i.texSubImage2D(s.TEXTURE_2D,0,ht,K,De,Oe,re,xe,T.data)}I.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,je),s.pixelStorei(s.UNPACK_SKIP_ROWS,$e)}}function X(I,T,re){let xe=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=s.TEXTURE_3D);const Ae=le(I,T),ve=T.source;i.bindTexture(xe,I.__webglTexture,s.TEXTURE0+re);const Je=r.get(ve);if(ve.version!==Je.__version||Ae===!0){i.activeTexture(s.TEXTURE0+re);const Ue=Pt.getPrimaries(Pt.workingColorSpace),je=T.colorSpace===Qa?null:Pt.getPrimaries(T.colorSpace),$e=T.colorSpace===Qa||Ue===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let Ce=R(T.image,!1,l.maxTextureSize);Ce=$t(T,Ce);const Ne=c.convert(T.format,T.colorSpace),tt=c.convert(T.type);let Ge=O(T.internalFormat,Ne,tt,T.colorSpace,T.isVideoTexture);W(xe,T);let Pe;const ht=T.mipmaps,K=T.isVideoTexture!==!0,De=Je.__version===void 0||Ae===!0,Oe=ve.dataReady,Ve=G(T,Ce);if(T.isDepthTexture)Ge=N(T.format===$o,T.type),De&&(K?i.texStorage2D(s.TEXTURE_2D,1,Ge,Ce.width,Ce.height):i.texImage2D(s.TEXTURE_2D,0,Ge,Ce.width,Ce.height,0,Ne,tt,null));else if(T.isDataTexture)if(ht.length>0){K&&De&&i.texStorage2D(s.TEXTURE_2D,Ve,Ge,ht[0].width,ht[0].height);for(let we=0,be=ht.length;we<be;we++)Pe=ht[we],K?Oe&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Pe.width,Pe.height,Ne,tt,Pe.data):i.texImage2D(s.TEXTURE_2D,we,Ge,Pe.width,Pe.height,0,Ne,tt,Pe.data);T.generateMipmaps=!1}else K?(De&&i.texStorage2D(s.TEXTURE_2D,Ve,Ge,Ce.width,Ce.height),Oe&&ge(T,Ce,Ne,tt)):i.texImage2D(s.TEXTURE_2D,0,Ge,Ce.width,Ce.height,0,Ne,tt,Ce.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){K&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,Ge,ht[0].width,ht[0].height,Ce.depth);for(let we=0,be=ht.length;we<be;we++)if(Pe=ht[we],T.format!==Ti)if(Ne!==null)if(K){if(Oe)if(T.layerUpdates.size>0){const We=Vv(Pe.width,Pe.height,T.format,T.type);for(const ct of T.layerUpdates){const Ht=Pe.data.subarray(ct*We/Pe.data.BYTES_PER_ELEMENT,(ct+1)*We/Pe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,ct,Pe.width,Pe.height,1,Ne,Ht)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Pe.width,Pe.height,Ce.depth,Ne,Pe.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,we,Ge,Pe.width,Pe.height,Ce.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Oe&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,we,0,0,0,Pe.width,Pe.height,Ce.depth,Ne,tt,Pe.data):i.texImage3D(s.TEXTURE_2D_ARRAY,we,Ge,Pe.width,Pe.height,Ce.depth,0,Ne,tt,Pe.data)}else{K&&De&&i.texStorage2D(s.TEXTURE_2D,Ve,Ge,ht[0].width,ht[0].height);for(let we=0,be=ht.length;we<be;we++)Pe=ht[we],T.format!==Ti?Ne!==null?K?Oe&&i.compressedTexSubImage2D(s.TEXTURE_2D,we,0,0,Pe.width,Pe.height,Ne,Pe.data):i.compressedTexImage2D(s.TEXTURE_2D,we,Ge,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Oe&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Pe.width,Pe.height,Ne,tt,Pe.data):i.texImage2D(s.TEXTURE_2D,we,Ge,Pe.width,Pe.height,0,Ne,tt,Pe.data)}else if(T.isDataArrayTexture)if(K){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ve,Ge,Ce.width,Ce.height,Ce.depth),Oe)if(T.layerUpdates.size>0){const we=Vv(Ce.width,Ce.height,T.format,T.type);for(const be of T.layerUpdates){const We=Ce.data.subarray(be*we/Ce.data.BYTES_PER_ELEMENT,(be+1)*we/Ce.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,Ce.width,Ce.height,1,Ne,tt,We)}T.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ne,tt,Ce.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,Ce.width,Ce.height,Ce.depth,0,Ne,tt,Ce.data);else if(T.isData3DTexture)K?(De&&i.texStorage3D(s.TEXTURE_3D,Ve,Ge,Ce.width,Ce.height,Ce.depth),Oe&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Ne,tt,Ce.data)):i.texImage3D(s.TEXTURE_3D,0,Ge,Ce.width,Ce.height,Ce.depth,0,Ne,tt,Ce.data);else if(T.isFramebufferTexture){if(De)if(K)i.texStorage2D(s.TEXTURE_2D,Ve,Ge,Ce.width,Ce.height);else{let we=Ce.width,be=Ce.height;for(let We=0;We<Ve;We++)i.texImage2D(s.TEXTURE_2D,We,Ge,we,be,0,Ne,tt,null),we>>=1,be>>=1}}else if(ht.length>0){if(K&&De){const we=Kt(ht[0]);i.texStorage2D(s.TEXTURE_2D,Ve,Ge,we.width,we.height)}for(let we=0,be=ht.length;we<be;we++)Pe=ht[we],K?Oe&&i.texSubImage2D(s.TEXTURE_2D,we,0,0,Ne,tt,Pe):i.texImage2D(s.TEXTURE_2D,we,Ge,Ne,tt,Pe);T.generateMipmaps=!1}else if(K){if(De){const we=Kt(Ce);i.texStorage2D(s.TEXTURE_2D,Ve,Ge,we.width,we.height)}Oe&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ne,tt,Ce)}else i.texImage2D(s.TEXTURE_2D,0,Ge,Ne,tt,Ce);S(T)&&_(xe),Je.__version=ve.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function $(I,T,re){if(T.image.length!==6)return;const xe=le(I,T),Ae=T.source;i.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+re);const ve=r.get(Ae);if(Ae.version!==ve.__version||xe===!0){i.activeTexture(s.TEXTURE0+re);const Je=Pt.getPrimaries(Pt.workingColorSpace),Ue=T.colorSpace===Qa?null:Pt.getPrimaries(T.colorSpace),je=T.colorSpace===Qa||Je===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const $e=T.isCompressedTexture||T.image[0].isCompressedTexture,Ce=T.image[0]&&T.image[0].isDataTexture,Ne=[];for(let be=0;be<6;be++)!$e&&!Ce?Ne[be]=R(T.image[be],!0,l.maxCubemapSize):Ne[be]=Ce?T.image[be].image:T.image[be],Ne[be]=$t(T,Ne[be]);const tt=Ne[0],Ge=c.convert(T.format,T.colorSpace),Pe=c.convert(T.type),ht=O(T.internalFormat,Ge,Pe,T.colorSpace),K=T.isVideoTexture!==!0,De=ve.__version===void 0||xe===!0,Oe=Ae.dataReady;let Ve=G(T,tt);W(s.TEXTURE_CUBE_MAP,T);let we;if($e){K&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,ht,tt.width,tt.height);for(let be=0;be<6;be++){we=Ne[be].mipmaps;for(let We=0;We<we.length;We++){const ct=we[We];T.format!==Ti?Ge!==null?K?Oe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,ct.width,ct.height,Ge,ct.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,ht,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,0,0,ct.width,ct.height,Ge,Pe,ct.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We,ht,ct.width,ct.height,0,Ge,Pe,ct.data)}}}else{if(we=T.mipmaps,K&&De){we.length>0&&Ve++;const be=Kt(Ne[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ve,ht,be.width,be.height)}for(let be=0;be<6;be++)if(Ce){K?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ne[be].width,Ne[be].height,Ge,Pe,Ne[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ht,Ne[be].width,Ne[be].height,0,Ge,Pe,Ne[be].data);for(let We=0;We<we.length;We++){const Ht=we[We].image[be].image;K?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,Ht.width,Ht.height,Ge,Pe,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,ht,Ht.width,Ht.height,0,Ge,Pe,Ht.data)}}else{K?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ge,Pe,Ne[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,ht,Ge,Pe,Ne[be]);for(let We=0;We<we.length;We++){const ct=we[We];K?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,0,0,Ge,Pe,ct.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,We+1,ht,Ge,Pe,ct.image[be])}}}S(T)&&_(s.TEXTURE_CUBE_MAP),ve.__version=Ae.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ye(I,T,re,xe,Ae,ve){const Je=c.convert(re.format,re.colorSpace),Ue=c.convert(re.type),je=O(re.internalFormat,Je,Ue,re.colorSpace),$e=r.get(T),Ce=r.get(re);if(Ce.__renderTarget=T,!$e.__hasExternalTextures){const Ne=Math.max(1,T.width>>ve),tt=Math.max(1,T.height>>ve);Ae===s.TEXTURE_3D||Ae===s.TEXTURE_2D_ARRAY?i.texImage3D(Ae,ve,je,Ne,tt,T.depth,0,Je,Ue,null):i.texImage2D(Ae,ve,je,Ne,tt,0,Je,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,I),He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,Ae,Ce.__webglTexture,0,yt(T)):(Ae===s.TEXTURE_2D||Ae>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Ae<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,xe,Ae,Ce.__webglTexture,ve),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(I,T,re){if(s.bindRenderbuffer(s.RENDERBUFFER,I),T.depthBuffer){const xe=T.depthTexture,Ae=xe&&xe.isDepthTexture?xe.type:null,ve=N(T.stencilBuffer,Ae),Je=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=yt(T);He(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,ve,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,ve,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ve,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Je,s.RENDERBUFFER,I)}else{const xe=T.textures;for(let Ae=0;Ae<xe.length;Ae++){const ve=xe[Ae],Je=c.convert(ve.format,ve.colorSpace),Ue=c.convert(ve.type),je=O(ve.internalFormat,Je,Ue,ve.colorSpace),$e=yt(T);re&&He(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,$e,je,T.width,T.height):He(T)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,$e,je,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,je,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Le(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(T.depthTexture);xe.__renderTarget=T,(!xe.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae(T.depthTexture,0);const Ae=xe.__webglTexture,ve=yt(T);if(T.depthTexture.format===Jo)He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ae,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Ae,0);else if(T.depthTexture.format===$o)He(T)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ae,0,ve):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Ae,0);else throw new Error("Unknown depthTexture format")}function Xe(I){const T=r.get(I),re=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const xe=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xe){const Ae=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xe.removeEventListener("dispose",Ae)};xe.addEventListener("dispose",Ae),T.__depthDisposeCallback=Ae}T.__boundDepthTexture=xe}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");const xe=I.texture.mipmaps;xe&&xe.length>0?Le(T.__webglFramebuffer[0],I):Le(T.__webglFramebuffer,I)}else if(re){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]===void 0)T.__webglDepthbuffer[xe]=s.createRenderbuffer(),Re(T.__webglDepthbuffer[xe],I,!1);else{const Ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer[xe];s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,ve)}}else{const xe=I.texture.mipmaps;if(xe&&xe.length>0?i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Re(T.__webglDepthbuffer,I,!1);else{const Ae=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ve),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ae,s.RENDERBUFFER,ve)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function ft(I,T,re){const xe=r.get(I);T!==void 0&&ye(xe.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Xe(I)}function H(I){const T=I.texture,re=r.get(I),xe=r.get(T);I.addEventListener("dispose",z);const Ae=I.textures,ve=I.isWebGLCubeRenderTarget===!0,Je=Ae.length>1;if(Je||(xe.__webglTexture===void 0&&(xe.__webglTexture=s.createTexture()),xe.__version=T.version,f.memory.textures++),ve){re.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer[Ue]=[];for(let je=0;je<T.mipmaps.length;je++)re.__webglFramebuffer[Ue][je]=s.createFramebuffer()}else re.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer=[];for(let Ue=0;Ue<T.mipmaps.length;Ue++)re.__webglFramebuffer[Ue]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Je)for(let Ue=0,je=Ae.length;Ue<je;Ue++){const $e=r.get(Ae[Ue]);$e.__webglTexture===void 0&&($e.__webglTexture=s.createTexture(),f.memory.textures++)}if(I.samples>0&&He(I)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Ue=0;Ue<Ae.length;Ue++){const je=Ae[Ue];re.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[Ue]);const $e=c.convert(je.format,je.colorSpace),Ce=c.convert(je.type),Ne=O(je.internalFormat,$e,Ce,je.colorSpace,I.isXRRenderTarget===!0),tt=yt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Ne,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,re.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(re.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ve){i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),W(s.TEXTURE_CUBE_MAP,T);for(let Ue=0;Ue<6;Ue++)if(T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)ye(re.__webglFramebuffer[Ue][je],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,je);else ye(re.__webglFramebuffer[Ue],I,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);S(T)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Je){for(let Ue=0,je=Ae.length;Ue<je;Ue++){const $e=Ae[Ue],Ce=r.get($e);let Ne=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ne=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ne,Ce.__webglTexture),W(Ne,$e),ye(re.__webglFramebuffer,I,$e,s.COLOR_ATTACHMENT0+Ue,Ne,0),S($e)&&_(Ne)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ue=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,xe.__webglTexture),W(Ue,T),T.mipmaps&&T.mipmaps.length>0)for(let je=0;je<T.mipmaps.length;je++)ye(re.__webglFramebuffer[je],I,T,s.COLOR_ATTACHMENT0,Ue,je);else ye(re.__webglFramebuffer,I,T,s.COLOR_ATTACHMENT0,Ue,0);S(T)&&_(Ue),i.unbindTexture()}I.depthBuffer&&Xe(I)}function ke(I){const T=I.textures;for(let re=0,xe=T.length;re<xe;re++){const Ae=T[re];if(S(Ae)){const ve=L(I),Je=r.get(Ae).__webglTexture;i.bindTexture(ve,Je),_(ve),i.unbindTexture()}}}const Qe=[],Ke=[];function Be(I){if(I.samples>0){if(He(I)===!1){const T=I.textures,re=I.width,xe=I.height;let Ae=s.COLOR_BUFFER_BIT;const ve=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Je=r.get(I),Ue=T.length>1;if(Ue)for(let $e=0;$e<T.length;$e++)i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Je.__webglMultisampledFramebuffer);const je=I.texture.mipmaps;je&&je.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglFramebuffer);for(let $e=0;$e<T.length;$e++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Ae|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Ae|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Je.__webglColorRenderbuffer[$e]);const Ce=r.get(T[$e]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,re,xe,0,0,re,xe,Ae,s.NEAREST),m===!0&&(Qe.length=0,Ke.length=0,Qe.push(s.COLOR_ATTACHMENT0+$e),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Qe.push(ve),Ke.push(ve),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ke)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Qe))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let $e=0;$e<T.length;$e++){i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.RENDERBUFFER,Je.__webglColorRenderbuffer[$e]);const Ce=r.get(T[$e]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Je.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+$e,s.TEXTURE_2D,Ce,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Je.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function yt(I){return Math.min(l.maxSamples,I.samples)}function He(I){const T=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function rt(I){const T=f.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function $t(I,T){const re=I.colorSpace,xe=I.format,Ae=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||re!==Hs&&re!==Qa&&(Pt.getTransfer(re)===qt?(xe!==Ti||Ae!==Fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),T}function Kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=ee,this.resetTextureUnits=F,this.setTexture2D=ae,this.setTexture2DArray=P,this.setTexture3D=q,this.setTextureCube=J,this.rebindTextures=ft,this.setupRenderTarget=H,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=He}function $R(s,e){function i(r,l=Qa){let c;const f=Pt.getTransfer(l);if(r===Fi)return s.UNSIGNED_BYTE;if(r===fp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===hp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===z_)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===B_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===P_)return s.BYTE;if(r===I_)return s.SHORT;if(r===Ko)return s.UNSIGNED_SHORT;if(r===up)return s.INT;if(r===Pr)return s.UNSIGNED_INT;if(r===da)return s.FLOAT;if(r===al)return s.HALF_FLOAT;if(r===F_)return s.ALPHA;if(r===H_)return s.RGB;if(r===Ti)return s.RGBA;if(r===Jo)return s.DEPTH_COMPONENT;if(r===$o)return s.DEPTH_STENCIL;if(r===G_)return s.RED;if(r===dp)return s.RED_INTEGER;if(r===V_)return s.RG;if(r===pp)return s.RG_INTEGER;if(r===mp)return s.RGBA_INTEGER;if(r===Zc||r===Kc||r===Qc||r===Jc)if(f===qt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Zc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Zc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Qc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Jc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ad||r===Rd||r===wd||r===Cd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Ad)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Rd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===wd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Dd||r===Ud||r===Nd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Dd||r===Ud)return f===qt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Nd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ld||r===Od||r===Pd||r===Id||r===zd||r===Bd||r===Fd||r===Hd||r===Gd||r===Vd||r===kd||r===Wd||r===Xd||r===qd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Ld)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Od)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Pd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Id)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===zd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Fd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Hd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Gd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===kd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===qd)return f===qt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===jd||r===Yd||r===Zd)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===jd)return f===qt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Zd)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Kd||r===Qd||r===Jd||r===$d)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Kd)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Qd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Jd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$d)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Qo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const ew=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tw=`
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

}`;class nw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new ry(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new tr({vertexShader:ew,fragmentShader:tw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new ri(new du(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iw extends Ws{constructor(e,i){super();const r=this;let l=null,c=1,f=null,h="local-floor",m=1,p=null,g=null,v=null,y=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",S=new nw,_={},L=i.getContextAttributes();let O=null,N=null;const G=[],k=[],z=new It;let Z=null;const U=new ai;U.viewport=new rn;const D=new ai;D.viewport=new rn;const w=[U,D],F=new bb;let ee=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let $=G[X];return $===void 0&&($=new ed,G[X]=$),$.getTargetRaySpace()},this.getControllerGrip=function(X){let $=G[X];return $===void 0&&($=new ed,G[X]=$),$.getGripSpace()},this.getHand=function(X){let $=G[X];return $===void 0&&($=new ed,G[X]=$),$.getHandSpace()};function ae(X){const $=k.indexOf(X.inputSource);if($===-1)return;const ye=G[$];ye!==void 0&&(ye.update(X.inputSource,X.frame,p||f),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function P(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",q);for(let X=0;X<G.length;X++){const $=k[X];$!==null&&(k[X]=null,G[X].disconnect($))}ee=null,ce=null,S.reset();for(const X in _)delete _[X];e.setRenderTarget(O),M=null,y=null,v=null,l=null,N=null,ge.stop(),r.isPresenting=!1,e.setPixelRatio(Z),e.setSize(z.width,z.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(X){p=X},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",P),l.addEventListener("inputsourceschange",q),L.xrCompatible!==!0&&await i.makeXRCompatible(),Z=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Re=null,Le=null;L.depth&&(Le=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ye=L.stencil?$o:Jo,Re=L.stencil?Qo:Pr);const Xe={colorFormat:i.RGBA8,depthFormat:Le,scaleFactor:c};v=this.getBinding(),y=v.createProjectionLayer(Xe),l.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),N=new Ir(y.textureWidth,y.textureHeight,{format:Ti,type:Fi,depthTexture:new ay(y.textureWidth,y.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ye={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ye),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),N=new Ir(M.framebufferWidth,M.framebufferHeight,{format:Ti,type:Fi,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(h),ge.setContext(l),ge.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(X){for(let $=0;$<X.removed.length;$++){const ye=X.removed[$],Re=k.indexOf(ye);Re>=0&&(k[Re]=null,G[Re].disconnect(ye))}for(let $=0;$<X.added.length;$++){const ye=X.added[$];let Re=k.indexOf(ye);if(Re===-1){for(let Xe=0;Xe<G.length;Xe++)if(Xe>=k.length){k.push(ye),Re=Xe;break}else if(k[Xe]===null){k[Xe]=ye,Re=Xe;break}if(Re===-1)break}const Le=G[Re];Le&&Le.connect(ye)}}const J=new he,Ee=new he;function B(X,$,ye){J.setFromMatrixPosition($.matrixWorld),Ee.setFromMatrixPosition(ye.matrixWorld);const Re=J.distanceTo(Ee),Le=$.projectionMatrix.elements,Xe=ye.projectionMatrix.elements,ft=Le[14]/(Le[10]-1),H=Le[14]/(Le[10]+1),ke=(Le[9]+1)/Le[5],Qe=(Le[9]-1)/Le[5],Ke=(Le[8]-1)/Le[0],Be=(Xe[8]+1)/Xe[0],yt=ft*Ke,He=ft*Be,rt=Re/(-Ke+Be),$t=rt*-Ke;if($.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX($t),X.translateZ(rt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Le[10]===-1)X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Kt=ft+rt,I=H+rt,T=yt-$t,re=He+(Re-$t),xe=ke*H/I*Kt,Ae=Qe*H/I*Kt;X.projectionMatrix.makePerspective(T,re,xe,Ae,Kt,I),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function E(X,$){$===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices($.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let $=X.near,ye=X.far;S.texture!==null&&(S.depthNear>0&&($=S.depthNear),S.depthFar>0&&(ye=S.depthFar)),F.near=D.near=U.near=$,F.far=D.far=U.far=ye,(ee!==F.near||ce!==F.far)&&(l.updateRenderState({depthNear:F.near,depthFar:F.far}),ee=F.near,ce=F.far),F.layers.mask=X.layers.mask|6,U.layers.mask=F.layers.mask&3,D.layers.mask=F.layers.mask&5;const Re=X.parent,Le=F.cameras;E(F,Re);for(let Xe=0;Xe<Le.length;Xe++)E(Le[Xe],Re);Le.length===2?B(F,U,D):F.projectionMatrix.copy(U.projectionMatrix),W(X,F,Re)};function W(X,$,ye){ye===null?X.matrix.copy($.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply($.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy($.projectionMatrix),X.projectionMatrixInverse.copy($.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=ep*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(y===null&&M===null))return m},this.setFoveation=function(X){m=X,y!==null&&(y.fixedFoveation=X),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=X)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(F)},this.getCameraTexture=function(X){return _[X]};let le=null;function me(X,$){if(g=$.getViewerPose(p||f),b=$,g!==null){const ye=g.views;M!==null&&(e.setRenderTargetFramebuffer(N,M.framebuffer),e.setRenderTarget(N));let Re=!1;ye.length!==F.cameras.length&&(F.cameras.length=0,Re=!0);for(let H=0;H<ye.length;H++){const ke=ye[H];let Qe=null;if(M!==null)Qe=M.getViewport(ke);else{const Be=v.getViewSubImage(y,ke);Qe=Be.viewport,H===0&&(e.setRenderTargetTextures(N,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(N))}let Ke=w[H];Ke===void 0&&(Ke=new ai,Ke.layers.enable(H),Ke.viewport=new rn,w[H]=Ke),Ke.matrix.fromArray(ke.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(ke.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),H===0&&(F.matrix.copy(Ke.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Re===!0&&F.cameras.push(Ke)}const Le=l.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const H=v.getDepthInformation(ye[0]);H&&H.isValid&&H.texture&&S.init(H,l.renderState)}if(Le&&Le.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let H=0;H<ye.length;H++){const ke=ye[H].camera;if(ke){let Qe=_[ke];Qe||(Qe=new ry,_[ke]=Qe);const Ke=v.getCameraImage(ke);Qe.sourceTexture=Ke}}}}for(let ye=0;ye<G.length;ye++){const Re=k[ye],Le=G[ye];Re!==null&&Le!==void 0&&Le.update(Re,$,p||f)}le&&le(X,$),$.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:$}),b=null}const ge=new uy;ge.setAnimationLoop(me),this.setAnimationLoop=function(X){le=X},this.dispose=function(){}}}const Rr=new Hi,aw=new sn;function rw(s,e){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function r(S,_){_.color.getRGB(S.fogColor.value,$_(s)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,L,O,N){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),v(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&M(S,_,N)):_.isMeshMatcapMaterial?(c(S,_),b(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),R(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,L,O):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const L=e.get(_),O=L.envMap,N=L.envMapRotation;O&&(S.envMap.value=O,Rr.copy(N),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),S.envMapRotation.value.setFromMatrix4(aw.makeRotationFromEuler(Rr)),S.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,L,O){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*L,S.scale.value=O*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function v(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function M(S,_,L){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=L.texture,S.transmissionSamplerSize.value.set(L.width,L.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function b(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const L=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(L.matrixWorld),S.nearDistance.value=L.shadow.camera.near,S.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function sw(s,e,i,r){let l={},c={},f=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,O){const N=O.program;r.uniformBlockBinding(L,N)}function p(L,O){let N=l[L.id];N===void 0&&(b(L),N=g(L),l[L.id]=N,L.addEventListener("dispose",S));const G=O.program;r.updateUBOMapping(L,G);const k=e.render.frame;c[L.id]!==k&&(y(L),c[L.id]=k)}function g(L){const O=v();L.__bindingPointIndex=O;const N=s.createBuffer(),G=L.__size,k=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,G,k),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,N),N}function v(){for(let L=0;L<h;L++)if(f.indexOf(L)===-1)return f.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(L){const O=l[L.id],N=L.uniforms,G=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let k=0,z=N.length;k<z;k++){const Z=Array.isArray(N[k])?N[k]:[N[k]];for(let U=0,D=Z.length;U<D;U++){const w=Z[U];if(M(w,k,U,G)===!0){const F=w.__offset,ee=Array.isArray(w.value)?w.value:[w.value];let ce=0;for(let ae=0;ae<ee.length;ae++){const P=ee[ae],q=R(P);typeof P=="number"||typeof P=="boolean"?(w.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,F+ce,w.__data)):P.isMatrix3?(w.__data[0]=P.elements[0],w.__data[1]=P.elements[1],w.__data[2]=P.elements[2],w.__data[3]=0,w.__data[4]=P.elements[3],w.__data[5]=P.elements[4],w.__data[6]=P.elements[5],w.__data[7]=0,w.__data[8]=P.elements[6],w.__data[9]=P.elements[7],w.__data[10]=P.elements[8],w.__data[11]=0):(P.toArray(w.__data,ce),ce+=q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(L,O,N,G){const k=L.value,z=O+"_"+N;if(G[z]===void 0)return typeof k=="number"||typeof k=="boolean"?G[z]=k:G[z]=k.clone(),!0;{const Z=G[z];if(typeof k=="number"||typeof k=="boolean"){if(Z!==k)return G[z]=k,!0}else if(Z.equals(k)===!1)return Z.copy(k),!0}return!1}function b(L){const O=L.uniforms;let N=0;const G=16;for(let z=0,Z=O.length;z<Z;z++){const U=Array.isArray(O[z])?O[z]:[O[z]];for(let D=0,w=U.length;D<w;D++){const F=U[D],ee=Array.isArray(F.value)?F.value:[F.value];for(let ce=0,ae=ee.length;ce<ae;ce++){const P=ee[ce],q=R(P),J=N%G,Ee=J%q.boundary,B=J+Ee;N+=Ee,B!==0&&G-B<q.storage&&(N+=G-B),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=N,N+=q.storage}}}const k=N%G;return k>0&&(N+=G-k),L.__size=N,L.__cache={},this}function R(L){const O={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(O.boundary=4,O.storage=4):L.isVector2?(O.boundary=8,O.storage=8):L.isVector3||L.isColor?(O.boundary=16,O.storage=12):L.isVector4?(O.boundary=16,O.storage=16):L.isMatrix3?(O.boundary=48,O.storage=48):L.isMatrix4?(O.boundary=64,O.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),O}function S(L){const O=L.target;O.removeEventListener("dispose",S);const N=f.indexOf(O.__bindingPointIndex);f.splice(N,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const L in l)s.deleteBuffer(l[L]);f=[],l={},c={}}return{bind:m,update:p,dispose:_}}class my{constructor(e={}){const{canvas:i=WE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=f;const b=new Uint32Array(4),R=new Int32Array(4);let S=null,_=null;const L=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=$a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let G=!1;this._outputColorSpace=gi;let k=0,z=0,Z=null,U=-1,D=null;const w=new rn,F=new rn;let ee=null;const ce=new Ct(0);let ae=0,P=i.width,q=i.height,J=1,Ee=null,B=null;const E=new rn(0,0,P,q),W=new rn(0,0,P,q);let le=!1;const me=new vp;let ge=!1,X=!1;const $=new sn,ye=new he,Re=new rn,Le={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ft(){return Z===null?J:1}let H=r;function ke(C,te){return i.getContext(C,te)}try{const C={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cp}`),i.addEventListener("webglcontextlost",Oe,!1),i.addEventListener("webglcontextrestored",Ve,!1),i.addEventListener("webglcontextcreationerror",we,!1),H===null){const te="webgl2";if(H=ke(te,C),H===null)throw ke(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Qe,Ke,Be,yt,He,rt,$t,Kt,I,T,re,xe,Ae,ve,Je,Ue,je,$e,Ce,Ne,tt,Ge,Pe,ht;function K(){Qe=new vA(H),Qe.init(),Ge=new $R(H,Qe),Ke=new uA(H,Qe,e,Ge),Be=new QR(H,Qe),Ke.reversedDepthBuffer&&y&&Be.buffers.depth.setReversed(!0),yt=new xA(H),He=new BR,rt=new JR(H,Qe,Be,He,Ke,Ge,yt),$t=new hA(N),Kt=new gA(N),I=new Ab(H),Pe=new lA(H,I),T=new _A(H,I,yt,Pe),re=new MA(H,T,I,yt),Ce=new SA(H,Ke,rt),Ue=new fA(He),xe=new zR(N,$t,Kt,Qe,Ke,Pe,Ue),Ae=new rw(N,He),ve=new HR,Je=new qR(Qe),$e=new oA(N,$t,Kt,Be,re,M,m),je=new ZR(N,re,Ke),ht=new sw(H,yt,Ke,Be),Ne=new cA(H,Qe,yt),tt=new yA(H,Qe,yt),yt.programs=xe.programs,N.capabilities=Ke,N.extensions=Qe,N.properties=He,N.renderLists=ve,N.shadowMap=je,N.state=Be,N.info=yt}K();const De=new iw(N,H);this.xr=De,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=Qe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Qe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize(P,q,!1))},this.getSize=function(C){return C.set(P,q)},this.setSize=function(C,te,fe=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=C,q=te,i.width=Math.floor(C*J),i.height=Math.floor(te*J),fe===!0&&(i.style.width=C+"px",i.style.height=te+"px"),this.setViewport(0,0,C,te)},this.getDrawingBufferSize=function(C){return C.set(P*J,q*J).floor()},this.setDrawingBufferSize=function(C,te,fe){P=C,q=te,J=fe,i.width=Math.floor(C*fe),i.height=Math.floor(te*fe),this.setViewport(0,0,C,te)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(E)},this.setViewport=function(C,te,fe,de){C.isVector4?E.set(C.x,C.y,C.z,C.w):E.set(C,te,fe,de),Be.viewport(w.copy(E).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(W)},this.setScissor=function(C,te,fe,de){C.isVector4?W.set(C.x,C.y,C.z,C.w):W.set(C,te,fe,de),Be.scissor(F.copy(W).multiplyScalar(J).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(C){Be.setScissorTest(le=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){B=C},this.getClearColor=function(C){return C.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor(...arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha(...arguments)},this.clear=function(C=!0,te=!0,fe=!0){let de=0;if(C){let ie=!1;if(Z!==null){const Te=Z.texture.format;ie=Te===mp||Te===pp||Te===dp}if(ie){const Te=Z.texture.type,Ie=Te===Fi||Te===Pr||Te===Ko||Te===Qo||Te===fp||Te===hp,Ye=$e.getClearColor(),Fe=$e.getClearAlpha(),nt=Ye.r,lt=Ye.g,it=Ye.b;Ie?(b[0]=nt,b[1]=lt,b[2]=it,b[3]=Fe,H.clearBufferuiv(H.COLOR,0,b)):(R[0]=nt,R[1]=lt,R[2]=it,R[3]=Fe,H.clearBufferiv(H.COLOR,0,R))}else de|=H.COLOR_BUFFER_BIT}te&&(de|=H.DEPTH_BUFFER_BIT),fe&&(de|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",Ve,!1),i.removeEventListener("webglcontextcreationerror",we,!1),$e.dispose(),ve.dispose(),Je.dispose(),He.dispose(),$t.dispose(),Kt.dispose(),re.dispose(),Pe.dispose(),ht.dispose(),xe.dispose(),De.dispose(),De.removeEventListener("sessionstart",si),De.removeEventListener("sessionend",js),wi.stop()};function Oe(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Ve(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const C=yt.autoReset,te=je.enabled,fe=je.autoUpdate,de=je.needsUpdate,ie=je.type;K(),yt.autoReset=C,je.enabled=te,je.autoUpdate=fe,je.needsUpdate=de,je.type=ie}function we(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function be(C){const te=C.target;te.removeEventListener("dispose",be),We(te)}function We(C){ct(C),He.remove(C)}function ct(C){const te=He.get(C).programs;te!==void 0&&(te.forEach(function(fe){xe.releaseProgram(fe)}),C.isShaderMaterial&&xe.releaseShaderCache(C))}this.renderBufferDirect=function(C,te,fe,de,ie,Te){te===null&&(te=Le);const Ie=ie.isMesh&&ie.matrixWorld.determinant()<0,Ye=_a(C,te,fe,de,ie);Be.setMaterial(de,Ie);let Fe=fe.index,nt=1;if(de.wireframe===!0){if(Fe=T.getWireframeAttribute(fe),Fe===void 0)return;nt=2}const lt=fe.drawRange,it=fe.attributes.position;let _t=lt.start*nt,Bt=(lt.start+lt.count)*nt;Te!==null&&(_t=Math.max(_t,Te.start*nt),Bt=Math.min(Bt,(Te.start+Te.count)*nt)),Fe!==null?(_t=Math.max(_t,0),Bt=Math.min(Bt,Fe.count)):it!=null&&(_t=Math.max(_t,0),Bt=Math.min(Bt,it.count));const jt=Bt-_t;if(jt<0||jt===1/0)return;Pe.setup(ie,de,Ye,fe,Fe);let Ft,xt=Ne;if(Fe!==null&&(Ft=I.get(Fe),xt=tt,xt.setIndex(Ft)),ie.isMesh)de.wireframe===!0?(Be.setLineWidth(de.wireframeLinewidth*ft()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(ie.isLine){let Ze=de.linewidth;Ze===void 0&&(Ze=1),Be.setLineWidth(Ze*ft()),ie.isLineSegments?xt.setMode(H.LINES):ie.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else ie.isPoints?xt.setMode(H.POINTS):ie.isSprite&&xt.setMode(H.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)el("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))xt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Ze=ie._multiDrawStarts,Zt=ie._multiDrawCounts,Ut=ie._multiDrawCount,bn=Fe?I.get(Fe).bytesPerElement:1,Vi=He.get(de).currentProgram.getUniforms();for(let xn=0;xn<Ut;xn++)Vi.setValue(H,"_gl_DrawID",xn),xt.render(Ze[xn]/bn,Zt[xn])}else if(ie.isInstancedMesh)xt.renderInstances(_t,jt,ie.count);else if(fe.isInstancedBufferGeometry){const Ze=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Zt=Math.min(fe.instanceCount,Ze);xt.renderInstances(_t,jt,Zt)}else xt.render(_t,jt)};function Ht(C,te,fe){C.transparent===!0&&C.side===ha&&C.forceSinglePass===!1?(C.side=Xn,C.needsUpdate=!0,Yn(C,te,fe),C.side=er,C.needsUpdate=!0,Yn(C,te,fe),C.side=ha):Yn(C,te,fe)}this.compile=function(C,te,fe=null){fe===null&&(fe=C),_=Je.get(fe),_.init(te),O.push(_),fe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),C!==fe&&C.traverseVisible(function(ie){ie.isLight&&ie.layers.test(te.layers)&&(_.pushLight(ie),ie.castShadow&&_.pushShadow(ie))}),_.setupLights();const de=new Set;return C.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Te=ie.material;if(Te)if(Array.isArray(Te))for(let Ie=0;Ie<Te.length;Ie++){const Ye=Te[Ie];Ht(Ye,fe,ie),de.add(Ye)}else Ht(Te,fe,ie),de.add(Te)}),_=O.pop(),de},this.compileAsync=function(C,te,fe=null){const de=this.compile(C,te,fe);return new Promise(ie=>{function Te(){if(de.forEach(function(Ie){He.get(Ie).currentProgram.isReady()&&de.delete(Ie)}),de.size===0){ie(C);return}setTimeout(Te,10)}Qe.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Dt=null;function On(C){Dt&&Dt(C)}function si(){wi.stop()}function js(){wi.start()}const wi=new uy;wi.setAnimationLoop(On),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(C){Dt=C,De.setAnimationLoop(C),C===null?wi.stop():wi.start()},De.addEventListener("sessionstart",si),De.addEventListener("sessionend",js),this.render=function(C,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(te),te=De.getCamera()),C.isScene===!0&&C.onBeforeRender(N,C,te,Z),_=Je.get(C,O.length),_.init(te),O.push(_),$.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),me.setFromProjectionMatrix($,Ii,te.reversedDepth),X=this.localClippingEnabled,ge=Ue.init(this.clippingPlanes,X),S=ve.get(C,L.length),S.init(),L.push(S),De.enabled===!0&&De.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&zr(Te,te,-1/0,N.sortObjects)}zr(C,te,0,N.sortObjects),S.finish(),N.sortObjects===!0&&S.sort(Ee,B),Xe=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,Xe&&$e.addToRenderList(S,C),this.info.render.frame++,ge===!0&&Ue.beginShadows();const fe=_.state.shadowsArray;je.render(fe,C,te),ge===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const de=S.opaque,ie=S.transmissive;if(_.setupLights(),te.isArrayCamera){const Te=te.cameras;if(ie.length>0)for(let Ie=0,Ye=Te.length;Ie<Ye;Ie++){const Fe=Te[Ie];Fr(de,ie,C,Fe)}Xe&&$e.render(C);for(let Ie=0,Ye=Te.length;Ie<Ye;Ie++){const Fe=Te[Ie];Br(S,C,Fe,Fe.viewport)}}else ie.length>0&&Fr(de,ie,C,te),Xe&&$e.render(C),Br(S,C,te);Z!==null&&z===0&&(rt.updateMultisampleRenderTarget(Z),rt.updateRenderTargetMipmap(Z)),C.isScene===!0&&C.onAfterRender(N,C,te),Pe.resetDefaultState(),U=-1,D=null,O.pop(),O.length>0?(_=O[O.length-1],ge===!0&&Ue.setGlobalState(N.clippingPlanes,_.state.camera)):_=null,L.pop(),L.length>0?S=L[L.length-1]:S=null};function zr(C,te,fe,de){if(C.visible===!1)return;if(C.layers.test(te.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(te);else if(C.isLight)_.pushLight(C),C.castShadow&&_.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||me.intersectsSprite(C)){de&&Re.setFromMatrixPosition(C.matrixWorld).applyMatrix4($);const Ie=re.update(C),Ye=C.material;Ye.visible&&S.push(C,Ie,Ye,fe,Re.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||me.intersectsObject(C))){const Ie=re.update(C),Ye=C.material;if(de&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Re.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Re.copy(Ie.boundingSphere.center)),Re.applyMatrix4(C.matrixWorld).applyMatrix4($)),Array.isArray(Ye)){const Fe=Ie.groups;for(let nt=0,lt=Fe.length;nt<lt;nt++){const it=Fe[nt],_t=Ye[it.materialIndex];_t&&_t.visible&&S.push(C,Ie,_t,fe,Re.z,it)}}else Ye.visible&&S.push(C,Ie,Ye,fe,Re.z,null)}}const Te=C.children;for(let Ie=0,Ye=Te.length;Ie<Ye;Ie++)zr(Te[Ie],te,fe,de)}function Br(C,te,fe,de){const ie=C.opaque,Te=C.transmissive,Ie=C.transparent;_.setupLightsView(fe),ge===!0&&Ue.setGlobalState(N.clippingPlanes,fe),de&&Be.viewport(w.copy(de)),ie.length>0&&ir(ie,te,fe),Te.length>0&&ir(Te,te,fe),Ie.length>0&&ir(Ie,te,fe),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function Fr(C,te,fe,de){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[de.id]===void 0&&(_.state.transmissionRenderTarget[de.id]=new Ir(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?al:Fi,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Te=_.state.transmissionRenderTarget[de.id],Ie=de.viewport||w;Te.setSize(Ie.z*N.transmissionResolutionScale,Ie.w*N.transmissionResolutionScale);const Ye=N.getRenderTarget(),Fe=N.getActiveCubeFace(),nt=N.getActiveMipmapLevel();N.setRenderTarget(Te),N.getClearColor(ce),ae=N.getClearAlpha(),ae<1&&N.setClearColor(16777215,.5),N.clear(),Xe&&$e.render(fe);const lt=N.toneMapping;N.toneMapping=$a;const it=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),_.setupLightsView(de),ge===!0&&Ue.setGlobalState(N.clippingPlanes,de),ir(C,fe,de),rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let Bt=0,jt=te.length;Bt<jt;Bt++){const Ft=te[Bt],xt=Ft.object,Ze=Ft.geometry,Zt=Ft.material,Ut=Ft.group;if(Zt.side===ha&&xt.layers.test(de.layers)){const bn=Zt.side;Zt.side=Xn,Zt.needsUpdate=!0,Ys(xt,fe,de,Ze,Zt,Ut),Zt.side=bn,Zt.needsUpdate=!0,_t=!0}}_t===!0&&(rt.updateMultisampleRenderTarget(Te),rt.updateRenderTargetMipmap(Te))}N.setRenderTarget(Ye,Fe,nt),N.setClearColor(ce,ae),it!==void 0&&(de.viewport=it),N.toneMapping=lt}function ir(C,te,fe){const de=te.isScene===!0?te.overrideMaterial:null;for(let ie=0,Te=C.length;ie<Te;ie++){const Ie=C[ie],Ye=Ie.object,Fe=Ie.geometry,nt=Ie.group;let lt=Ie.material;lt.allowOverride===!0&&de!==null&&(lt=de),Ye.layers.test(fe.layers)&&Ys(Ye,te,fe,Fe,lt,nt)}}function Ys(C,te,fe,de,ie,Te){C.onBeforeRender(N,te,fe,de,ie,Te),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ie.onBeforeRender(N,te,fe,de,C,Te),ie.transparent===!0&&ie.side===ha&&ie.forceSinglePass===!1?(ie.side=Xn,ie.needsUpdate=!0,N.renderBufferDirect(fe,te,de,ie,C,Te),ie.side=er,ie.needsUpdate=!0,N.renderBufferDirect(fe,te,de,ie,C,Te),ie.side=ha):N.renderBufferDirect(fe,te,de,ie,C,Te),C.onAfterRender(N,te,fe,de,ie,Te)}function Yn(C,te,fe){te.isScene!==!0&&(te=Le);const de=He.get(C),ie=_.state.lights,Te=_.state.shadowsArray,Ie=ie.state.version,Ye=xe.getParameters(C,ie.state,Te,te,fe),Fe=xe.getProgramCacheKey(Ye);let nt=de.programs;de.environment=C.isMeshStandardMaterial?te.environment:null,de.fog=te.fog,de.envMap=(C.isMeshStandardMaterial?Kt:$t).get(C.envMap||de.environment),de.envMapRotation=de.environment!==null&&C.envMap===null?te.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",be),nt=new Map,de.programs=nt);let lt=nt.get(Fe);if(lt!==void 0){if(de.currentProgram===lt&&de.lightsStateVersion===Ie)return En(C,Ye),lt}else Ye.uniforms=xe.getUniforms(C),C.onBeforeCompile(Ye,N),lt=xe.acquireProgram(Ye,Fe),nt.set(Fe,lt),de.uniforms=Ye.uniforms;const it=de.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(it.clippingPlanes=Ue.uniform),En(C,Ye),de.needsLights=gu(C),de.lightsStateVersion=Ie,de.needsLights&&(it.ambientLightColor.value=ie.state.ambient,it.lightProbe.value=ie.state.probe,it.directionalLights.value=ie.state.directional,it.directionalLightShadows.value=ie.state.directionalShadow,it.spotLights.value=ie.state.spot,it.spotLightShadows.value=ie.state.spotShadow,it.rectAreaLights.value=ie.state.rectArea,it.ltc_1.value=ie.state.rectAreaLTC1,it.ltc_2.value=ie.state.rectAreaLTC2,it.pointLights.value=ie.state.point,it.pointLightShadows.value=ie.state.pointShadow,it.hemisphereLights.value=ie.state.hemi,it.directionalShadowMap.value=ie.state.directionalShadowMap,it.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,it.spotShadowMap.value=ie.state.spotShadowMap,it.spotLightMatrix.value=ie.state.spotLightMatrix,it.spotLightMap.value=ie.state.spotLightMap,it.pointShadowMap.value=ie.state.pointShadowMap,it.pointShadowMatrix.value=ie.state.pointShadowMatrix),de.currentProgram=lt,de.uniformsList=null,lt}function un(C){if(C.uniformsList===null){const te=C.currentProgram.getUniforms();C.uniformsList=$c.seqWithValue(te.seq,C.uniforms)}return C.uniformsList}function En(C,te){const fe=He.get(C);fe.outputColorSpace=te.outputColorSpace,fe.batching=te.batching,fe.batchingColor=te.batchingColor,fe.instancing=te.instancing,fe.instancingColor=te.instancingColor,fe.instancingMorph=te.instancingMorph,fe.skinning=te.skinning,fe.morphTargets=te.morphTargets,fe.morphNormals=te.morphNormals,fe.morphColors=te.morphColors,fe.morphTargetsCount=te.morphTargetsCount,fe.numClippingPlanes=te.numClippingPlanes,fe.numIntersection=te.numClipIntersection,fe.vertexAlphas=te.vertexAlphas,fe.vertexTangents=te.vertexTangents,fe.toneMapping=te.toneMapping}function _a(C,te,fe,de,ie){te.isScene!==!0&&(te=Le),rt.resetTextureUnits();const Te=te.fog,Ie=de.isMeshStandardMaterial?te.environment:null,Ye=Z===null?N.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Hs,Fe=(de.isMeshStandardMaterial?Kt:$t).get(de.envMap||Ie),nt=de.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,lt=!!fe.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),it=!!fe.morphAttributes.position,_t=!!fe.morphAttributes.normal,Bt=!!fe.morphAttributes.color;let jt=$a;de.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(jt=N.toneMapping);const Ft=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,xt=Ft!==void 0?Ft.length:0,Ze=He.get(de),Zt=_.state.lights;if(ge===!0&&(X===!0||C!==D)){const gn=C===D&&de.id===U;Ue.setState(de,C,gn)}let Ut=!1;de.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Zt.state.version||Ze.outputColorSpace!==Ye||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==Fe||de.fog===!0&&Ze.fog!==Te||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ue.numPlanes||Ze.numIntersection!==Ue.numIntersection)||Ze.vertexAlphas!==nt||Ze.vertexTangents!==lt||Ze.morphTargets!==it||Ze.morphNormals!==_t||Ze.morphColors!==Bt||Ze.toneMapping!==jt||Ze.morphTargetsCount!==xt)&&(Ut=!0):(Ut=!0,Ze.__version=de.version);let bn=Ze.currentProgram;Ut===!0&&(bn=Yn(de,te,ie));let Vi=!1,xn=!1,rr=!1;const bt=bn.getUniforms(),Dn=Ze.uniforms;if(Be.useProgram(bn.program)&&(Vi=!0,xn=!0,rr=!0),de.id!==U&&(U=de.id,xn=!0),Vi||D!==C){Be.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),bt.setValue(H,"projectionMatrix",C.projectionMatrix),bt.setValue(H,"viewMatrix",C.matrixWorldInverse);const on=bt.map.cameraPosition;on!==void 0&&on.setValue(H,ye.setFromMatrixPosition(C.matrixWorld)),Ke.logarithmicDepthBuffer&&bt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&bt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),D!==C&&(D=C,xn=!0,rr=!0)}if(ie.isSkinnedMesh){bt.setOptional(H,ie,"bindMatrix"),bt.setOptional(H,ie,"bindMatrixInverse");const gn=ie.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),bt.setValue(H,"boneTexture",gn.boneTexture,rt))}ie.isBatchedMesh&&(bt.setOptional(H,ie,"batchingTexture"),bt.setValue(H,"batchingTexture",ie._matricesTexture,rt),bt.setOptional(H,ie,"batchingIdTexture"),bt.setValue(H,"batchingIdTexture",ie._indirectTexture,rt),bt.setOptional(H,ie,"batchingColorTexture"),ie._colorsTexture!==null&&bt.setValue(H,"batchingColorTexture",ie._colorsTexture,rt));const Pn=fe.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ce.update(ie,fe,bn),(xn||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,bt.setValue(H,"receiveShadow",ie.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(Dn.envMap.value=Fe,Dn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&te.environment!==null&&(Dn.envMapIntensity.value=te.environmentIntensity),xn&&(bt.setValue(H,"toneMappingExposure",N.toneMappingExposure),Ze.needsLights&&Zs(Dn,rr),Te&&de.fog===!0&&Ae.refreshFogUniforms(Dn,Te),Ae.refreshMaterialUniforms(Dn,de,J,q,_.state.transmissionRenderTarget[C.id]),$c.upload(H,un(Ze),Dn,rt)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&($c.upload(H,un(Ze),Dn,rt),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&bt.setValue(H,"center",ie.center),bt.setValue(H,"modelViewMatrix",ie.modelViewMatrix),bt.setValue(H,"normalMatrix",ie.normalMatrix),bt.setValue(H,"modelMatrix",ie.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){const gn=de.uniformsGroups;for(let on=0,Hr=gn.length;on<Hr;on++){const Ci=gn[on];ht.update(Ci,bn),ht.bind(Ci,bn)}}return bn}function Zs(C,te){C.ambientLightColor.needsUpdate=te,C.lightProbe.needsUpdate=te,C.directionalLights.needsUpdate=te,C.directionalLightShadows.needsUpdate=te,C.pointLights.needsUpdate=te,C.pointLightShadows.needsUpdate=te,C.spotLights.needsUpdate=te,C.spotLightShadows.needsUpdate=te,C.rectAreaLights.needsUpdate=te,C.hemisphereLights.needsUpdate=te}function gu(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(C,te,fe){const de=He.get(C);de.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,de.__autoAllocateDepthBuffer===!1&&(de.__useRenderToTexture=!1),He.get(C.texture).__webglTexture=te,He.get(C.depthTexture).__webglTexture=de.__autoAllocateDepthBuffer?void 0:fe,de.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,te){const fe=He.get(C);fe.__webglFramebuffer=te,fe.__useDefaultFramebuffer=te===void 0};const vu=H.createFramebuffer();this.setRenderTarget=function(C,te=0,fe=0){Z=C,k=te,z=fe;let de=!0,ie=null,Te=!1,Ie=!1;if(C){const Fe=He.get(C);if(Fe.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(H.FRAMEBUFFER,null),de=!1;else if(Fe.__webglFramebuffer===void 0)rt.setupRenderTarget(C);else if(Fe.__hasExternalTextures)rt.rebindTextures(C,He.get(C.texture).__webglTexture,He.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const it=C.depthTexture;if(Fe.__boundDepthTexture!==it){if(it!==null&&He.has(it)&&(C.width!==it.image.width||C.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ie=!0);const lt=He.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(lt[te])?ie=lt[te][fe]:ie=lt[te],Te=!0):C.samples>0&&rt.useMultisampledRTT(C)===!1?ie=He.get(C).__webglMultisampledFramebuffer:Array.isArray(lt)?ie=lt[fe]:ie=lt,w.copy(C.viewport),F.copy(C.scissor),ee=C.scissorTest}else w.copy(E).multiplyScalar(J).floor(),F.copy(W).multiplyScalar(J).floor(),ee=le;if(fe!==0&&(ie=vu),Be.bindFramebuffer(H.FRAMEBUFFER,ie)&&de&&Be.drawBuffers(C,ie),Be.viewport(w),Be.scissor(F),Be.setScissorTest(ee),Te){const Fe=He.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+te,Fe.__webglTexture,fe)}else if(Ie){const Fe=te;for(let nt=0;nt<C.textures.length;nt++){const lt=He.get(C.textures[nt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+nt,lt.__webglTexture,fe,Fe)}}else if(C!==null&&fe!==0){const Fe=He.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Fe.__webglTexture,fe)}U=-1},this.readRenderTargetPixels=function(C,te,fe,de,ie,Te,Ie,Ye=0){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe){Be.bindFramebuffer(H.FRAMEBUFFER,Fe);try{const nt=C.textures[Ye],lt=nt.format,it=nt.type;if(!Ke.textureFormatReadable(lt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=C.width-de&&fe>=0&&fe<=C.height-ie&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ye),H.readPixels(te,fe,de,ie,Ge.convert(lt),Ge.convert(it),Te))}finally{const nt=Z!==null?He.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(H.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,te,fe,de,ie,Te,Ie,Ye=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Fe=Fe[Ie]),Fe)if(te>=0&&te<=C.width-de&&fe>=0&&fe<=C.height-ie){Be.bindFramebuffer(H.FRAMEBUFFER,Fe);const nt=C.textures[Ye],lt=nt.format,it=nt.type;if(!Ke.textureFormatReadable(lt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,_t),H.bufferData(H.PIXEL_PACK_BUFFER,Te.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Ye),H.readPixels(te,fe,de,ie,Ge.convert(lt),Ge.convert(it),0);const Bt=Z!==null?He.get(Z).__webglFramebuffer:null;Be.bindFramebuffer(H.FRAMEBUFFER,Bt);const jt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await XE(H,jt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,_t),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Te),H.deleteBuffer(_t),H.deleteSync(jt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,te=null,fe=0){const de=Math.pow(2,-fe),ie=Math.floor(C.image.width*de),Te=Math.floor(C.image.height*de),Ie=te!==null?te.x:0,Ye=te!==null?te.y:0;rt.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,fe,0,0,Ie,Ye,ie,Te),Be.unbindTexture()};const ul=H.createFramebuffer(),ar=H.createFramebuffer();this.copyTextureToTexture=function(C,te,fe=null,de=null,ie=0,Te=null){Te===null&&(ie!==0?(el("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=ie,ie=0):Te=0);let Ie,Ye,Fe,nt,lt,it,_t,Bt,jt;const Ft=C.isCompressedTexture?C.mipmaps[Te]:C.image;if(fe!==null)Ie=fe.max.x-fe.min.x,Ye=fe.max.y-fe.min.y,Fe=fe.isBox3?fe.max.z-fe.min.z:1,nt=fe.min.x,lt=fe.min.y,it=fe.isBox3?fe.min.z:0;else{const Pn=Math.pow(2,-ie);Ie=Math.floor(Ft.width*Pn),Ye=Math.floor(Ft.height*Pn),C.isDataArrayTexture?Fe=Ft.depth:C.isData3DTexture?Fe=Math.floor(Ft.depth*Pn):Fe=1,nt=0,lt=0,it=0}de!==null?(_t=de.x,Bt=de.y,jt=de.z):(_t=0,Bt=0,jt=0);const xt=Ge.convert(te.format),Ze=Ge.convert(te.type);let Zt;te.isData3DTexture?(rt.setTexture3D(te,0),Zt=H.TEXTURE_3D):te.isDataArrayTexture||te.isCompressedArrayTexture?(rt.setTexture2DArray(te,0),Zt=H.TEXTURE_2D_ARRAY):(rt.setTexture2D(te,0),Zt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,te.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,te.unpackAlignment);const Ut=H.getParameter(H.UNPACK_ROW_LENGTH),bn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Vi=H.getParameter(H.UNPACK_SKIP_PIXELS),xn=H.getParameter(H.UNPACK_SKIP_ROWS),rr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ft.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ft.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,lt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,it);const bt=C.isDataArrayTexture||C.isData3DTexture,Dn=te.isDataArrayTexture||te.isData3DTexture;if(C.isDepthTexture){const Pn=He.get(C),gn=He.get(te),on=He.get(Pn.__renderTarget),Hr=He.get(gn.__renderTarget);Be.bindFramebuffer(H.READ_FRAMEBUFFER,on.__webglFramebuffer),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ci=0;Ci<Fe;Ci++)bt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(C).__webglTexture,ie,it+Ci),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(te).__webglTexture,Te,jt+Ci)),H.blitFramebuffer(nt,lt,Ie,Ye,_t,Bt,Ie,Ye,H.DEPTH_BUFFER_BIT,H.NEAREST);Be.bindFramebuffer(H.READ_FRAMEBUFFER,null),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(ie!==0||C.isRenderTargetTexture||He.has(C)){const Pn=He.get(C),gn=He.get(te);Be.bindFramebuffer(H.READ_FRAMEBUFFER,ul),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,ar);for(let on=0;on<Fe;on++)bt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Pn.__webglTexture,ie,it+on):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Pn.__webglTexture,ie),Dn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,gn.__webglTexture,Te,jt+on):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,gn.__webglTexture,Te),ie!==0?H.blitFramebuffer(nt,lt,Ie,Ye,_t,Bt,Ie,Ye,H.COLOR_BUFFER_BIT,H.NEAREST):Dn?H.copyTexSubImage3D(Zt,Te,_t,Bt,jt+on,nt,lt,Ie,Ye):H.copyTexSubImage2D(Zt,Te,_t,Bt,nt,lt,Ie,Ye);Be.bindFramebuffer(H.READ_FRAMEBUFFER,null),Be.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Dn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Zt,Te,_t,Bt,jt,Ie,Ye,Fe,xt,Ze,Ft.data):te.isCompressedArrayTexture?H.compressedTexSubImage3D(Zt,Te,_t,Bt,jt,Ie,Ye,Fe,xt,Ft.data):H.texSubImage3D(Zt,Te,_t,Bt,jt,Ie,Ye,Fe,xt,Ze,Ft):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Te,_t,Bt,Ie,Ye,xt,Ze,Ft.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Te,_t,Bt,Ft.width,Ft.height,xt,Ft.data):H.texSubImage2D(H.TEXTURE_2D,Te,_t,Bt,Ie,Ye,xt,Ze,Ft);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ut),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,bn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Vi),H.pixelStorei(H.UNPACK_SKIP_ROWS,xn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,rr),Te===0&&te.generateMipmaps&&H.generateMipmap(Zt),Be.unbindTexture()},this.initRenderTarget=function(C){He.get(C).__webglFramebuffer===void 0&&rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),Be.unbindTexture()},this.resetState=function(){k=0,z=0,Z=null,Be.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}class Os{static instance;clickSound=null;enterSound=null;isInitialized=!1;static getInstance(){return Os.instance||(Os.instance=new Os),Os.instance}initAudio(){if(!this.isInitialized)try{this.clickSound=new Audio("/assets/sounds/点击.wav"),this.clickSound.preload="auto",this.clickSound.volume=.7,this.enterSound=new Audio("/assets/sounds/完美(1).mp3"),this.enterSound.preload="auto",this.enterSound.volume=.8,this.isInitialized=!0,console.log("🎵 音效管理器初始化完成")}catch(e){console.error("❌ 音效初始化失败:",e)}}playClickSound(){this.initAudio(),this.clickSound&&(this.clickSound.currentTime=0,this.clickSound.play().catch(e=>console.log("点击音效播放失败:",e)))}playEnterSound(){this.initAudio(),this.enterSound&&(this.enterSound.currentTime=0,this.enterSound.play().catch(e=>console.log("进入音效播放失败:",e)))}stopAllSounds(){this.clickSound&&(this.clickSound.pause(),this.clickSound.currentTime=0),this.enterSound&&(this.enterSound.pause(),this.enterSound.currentTime=0)}setVolume(e){const i=Math.max(0,Math.min(1,e));this.clickSound&&(this.clickSound.volume=i*.7),this.enterSound&&(this.enterSound.volume=i*.8)}}const d_=Os.getInstance();function gy(){const s=Q.useCallback(()=>{d_.playClickSound()},[]),e=Q.useCallback(()=>{d_.playEnterSound()},[]);return{playClickSound:s,playEnterSound:e}}function ow(){const s=Q.useRef(null),e=Q.useRef(null),i=Q.useRef(null),r=Q.useRef(null),l=Q.useRef(null),c=Q.useRef(null),f=Q.useRef(null),h=Q.useRef(null),[m,p]=Q.useState(!1),[g,v]=Q.useState(!1),[y,M]=Q.useState(!1),[b,R]=Q.useState(!1),S=cu(),{playClickSound:_,playEnterSound:L}=gy(),O=Q.useCallback(()=>{c.current&&f.current&&(c.current.visible=!0,f.current.visible=!0,c.current.position.set(-2.2,0,0),f.current.position.set(2.2,0,0),M(!0))},[]),N=Q.useCallback(()=>{if(g)return;v(!0);const z=document.getElementById("warp");z&&z.classList.add("show");const Z=setInterval(()=>{r.current&&(r.current.position.z=Math.max(2.2,r.current.position.z-.08))},16);setTimeout(()=>{clearInterval(Z),window.dispatchEvent(new CustomEvent("INTRO_FINISHED")),S("/home")},1100)},[g,S]),G=Q.useCallback(()=>{m||(p(!0),L(),document.body.classList.add("leaving"),setTimeout(()=>{const z=document.getElementById("hero");z&&(z.style.display="none"),O()},220))},[m,L,O]);Q.useEffect(()=>{if(!s.current)return;const z=s.current,Z=new my({canvas:z,antialias:!0,powerPreference:"high-performance"});Z.setPixelRatio(Math.min(window.devicePixelRatio,2)),Z.setSize(window.innerWidth,window.innerHeight),Z.setClearColor(0,1),i.current=Z;const U=new ny;e.current=U;const D=new ai(60,window.innerWidth/window.innerHeight,.1,1e3);D.position.set(0,0,6),r.current=D;const w=420,F=new Float32Array(w*3);for(let X=0;X<w;X++){const $=2.6+Math.random()*1.8,ye=Math.random()*Math.PI*2,Re=Math.acos(2*Math.random()-1);F[X*3+0]=$*Math.sin(Re)*Math.cos(ye),F[X*3+1]=$*Math.sin(Re)*Math.sin(ye),F[X*3+2]=$*Math.cos(Re)}const ee=new Ri;ee.setAttribute("position",new jn(F,3));const ce=new _p({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1}),ae=new iy(ee,ce);U.add(ae),l.current=ae;const P=new cy(65520,.08);U.add(P);const q=new pu(.5,48,48),J=new su({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),Ee=new su({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),B=new ri(q,J),E=new ri(q,Ee);B.visible=!1,E.visible=!1,U.add(B),U.add(E),c.current=B,f.current=E;const W=new ly(65520,.7);W.position.set(-2,2,4),U.add(W);let le=0;const me=()=>{if(le+=.016,l.current){l.current.rotation.y+=9e-4,l.current.rotation.x=Math.sin(le*.12)*.02;const X=1+Math.sin(le*.5)*.005;l.current.scale.set(X,X,X)}y&&c.current&&f.current&&(c.current.rotation.y+=.03,f.current.rotation.y-=.03,c.current.position.x+=.06,f.current.position.x-=.06,c.current.position.y=Math.sin((c.current.position.x+2)*1.2)*.06,f.current.position.y=Math.sin((2-f.current.position.x)*1.2)*.06,!b&&Math.abs(c.current.position.x-f.current.position.x)<.15&&(R(!0),k(),setTimeout(()=>{N()},120))),Z.render(U,D),h.current=requestAnimationFrame(me)};me();const ge=()=>{r.current&&i.current&&(r.current.aspect=window.innerWidth/window.innerHeight,r.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",ge),()=>{h.current&&cancelAnimationFrame(h.current),window.removeEventListener("resize",ge),i.current&&i.current.dispose()}},[y,b,N,O]);const k=()=>{const z=document.getElementById("flash");z&&(z.classList.remove("show"),z.offsetWidth,z.classList.add("show"))};return Q.useEffect(()=>{const z=()=>{_()};return document.addEventListener("click",z),()=>{document.removeEventListener("click",z)}},[_]),Q.useEffect(()=>{const z=Z=>{Z.key==="Enter"&&G()};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[m,G]),Y.jsxs("div",{className:"intro-page",children:[Y.jsx("canvas",{ref:s,id:"stage"}),Y.jsx("div",{className:"sweep"}),Y.jsx("div",{className:"vignette"}),Y.jsx("div",{className:"center",children:Y.jsxs("div",{className:`hero ${m?"leaving":""}`,id:"hero",children:[Y.jsx("div",{className:"logo",children:"心战五子棋"}),Y.jsx("div",{className:"subtitle",children:"NEURO GOMOKU"}),Y.jsx("div",{className:"cta",children:Y.jsx("button",{className:"btn",id:"enter",onClick:G,children:"进入棋局"})})]})}),Y.jsx("div",{className:`warp ${g?"show":""}`,id:"warp"}),Y.jsx("div",{className:"flash",id:"flash"}),Y.jsx("div",{className:"hud",children:"点击 / 按 Enter 开始"}),Y.jsx("style",{children:`
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
          text-transform: uppercase;
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
      `})]})}var at=(s=>(s[s.None=0]="None",s[s.Black=1]="Black",s[s.White=2]="White",s))(at||{}),Et=(s=>(s.NotStarted="not_started",s.Playing="playing",s.BlackWin="black_win",s.WhiteWin="white_win",s.Draw="draw",s.Paused="paused",s))(Et||{}),Ot=(s=>(s.Easy="easy",s.Medium="medium",s.Hard="hard",s.Master="master",s))(Ot||{});function lw({onEnter:s,className:e=""}){const i=Q.useRef(null),r=Q.useRef(null),l=Q.useRef(null),c=Q.useRef(null),f=Q.useRef(null),h=Q.useRef(!1),m=Q.useRef(!1),p=Q.useRef(0),[g,v]=Q.useState(!1),[y,M]=Q.useState(!1),[b,R]=Q.useState(!1);return Q.useEffect(()=>{if(!i.current)return;const S=i.current,_=new my({canvas:S,antialias:!0,powerPreference:"high-performance"});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,1),l.current=_;const L=new ny;r.current=L;const O=new ai(60,window.innerWidth/window.innerHeight,.1,1e3);O.position.set(0,0,6),c.current=O;const N=420,G=new Float32Array(N*3),k=new Float32Array(N*3),z=new Float32Array(N);for(let ge=0;ge<N;ge++){const X=2.6+Math.random()*1.8,$=Math.random()*Math.PI*2,ye=Math.acos(2*Math.random()-1);G[ge*3+0]=X*Math.sin(ye)*Math.cos($),G[ge*3+1]=X*Math.sin(ye)*Math.sin($),G[ge*3+2]=X*Math.cos(ye);const Re=.7+Math.random()*.3;k[ge*3+0]=0*Re,k[ge*3+1]=1*Re,k[ge*3+2]=.94*Re,z[ge]=.025+Math.random()*.02}const Z=new Ri;Z.setAttribute("position",new jn(G,3)),Z.setAttribute("color",new jn(k,3)),Z.setAttribute("size",new jn(z,1));const U=new _p({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,vertexColors:!0,blending:hd}),D=new iy(Z,U);L.add(D);const w=new cy(65520,.08);L.add(w);const F=new pu(.5,48,48),ee=new su({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),ce=new su({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),ae=new ri(F,ee),P=new ri(F,ce);ae.visible=!1,P.visible=!1,L.add(ae),L.add(P);const q=new ly(65520,.7);q.position.set(-2,2,4),L.add(q);const J=()=>{p.current+=.016,D.rotation.y+=9e-4,D.rotation.x=Math.sin(p.current*.12)*.02,D.rotation.z=Math.sin(p.current*.08)*.01;const ge=1+Math.sin(p.current*.5)*.005;D.scale.set(ge,ge,ge);const X=.75+Math.sin(p.current*.3)*.1;U.opacity=Math.max(.6,Math.min(.9,X)),h.current&&(ae.rotation.y+=.03,P.rotation.y-=.03,ae.position.x+=.06,P.position.x-=.06,ae.position.y=Math.sin((ae.position.x+2)*1.2)*.06,P.position.y=Math.sin((2-P.position.x)*1.2)*.06,!m.current&&Math.abs(ae.position.x-P.position.x)<.15&&(m.current=!0,M(!0),setTimeout(()=>M(!1),220),setTimeout(()=>{R(!0),B()},120))),_.render(L,O),f.current=requestAnimationFrame(J)};J();const Ee=()=>{ae.visible=!0,P.visible=!0,ae.position.set(-2.2,0,0),P.position.set(2.2,0,0),h.current=!0},B=()=>{const ge=setInterval(()=>{c.current&&(c.current.position.z=Math.max(2.2,c.current.position.z-.08))},16);setTimeout(()=>{clearInterval(ge),s?.()},1100)},E=()=>{v(!0),setTimeout(()=>v(!1),3600)},W=()=>{Ee()},le=()=>{B()};setTimeout(()=>{E()},600),window.addEventListener("INTRO_ENTER",W),window.addEventListener("startWarp",le);const me=()=>{c.current&&l.current&&(c.current.aspect=window.innerWidth/window.innerHeight,c.current.updateProjectionMatrix(),l.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",me),()=>{f.current&&cancelAnimationFrame(f.current),l.current&&l.current.dispose(),window.removeEventListener("INTRO_ENTER",W),window.removeEventListener("startWarp",le),window.removeEventListener("resize",me)}},[s]),Y.jsxs(Y.Fragment,{children:[Y.jsx("canvas",{ref:i,className:`fixed inset-0 pointer-events-none ${e}`,style:{zIndex:-1}}),g&&Y.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"linear-gradient(100deg, rgba(0,255,240,0) 0%, rgba(0,255,240,0.35) 50%, rgba(0,255,240,0) 100%)",transform:"translateX(-120%)",filter:"blur(2px) drop-shadow(0 0 30px #00FFF0)",animation:"sweep 3.6s cubic-bezier(0.65,0.02,0.22,1) 0.6s both",zIndex:1}}),Y.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen opacity-60",style:{background:"radial-gradient(60% 60% at 50% 50%, rgba(0,255,240,0.10), transparent 60%)",zIndex:1}}),y&&Y.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(255,255,255,0) 60%)",animation:"flash 0.22s ease-out forwards",zIndex:2}}),b&&Y.jsx("div",{className:"fixed inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 50%, rgba(0,255,240,0.55) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.95) 80%)",transform:"scale(0.2)",filter:"blur(10px)",opacity:0,transition:"transform 1s cubic-bezier(0.2,0.7,0.1,1), opacity 1s ease",zIndex:3},onTransitionEnd:()=>{const S=document.querySelector("[data-warp-effect]");S&&(S.style.transform="scale(3.8)",S.style.opacity="1")},"data-warp-effect":!0}),Y.jsx("style",{children:`
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
      `})]})}function cw(){const s=Q.useRef(null),e=Q.useRef(null);return Q.useEffect(()=>{const i=()=>{s.current&&(s.current.classList.remove("show"),s.current.offsetWidth,s.current.classList.add("show"))},r=()=>{e.current&&e.current.classList.add("show")};return window.addEventListener("triggerFlash",i),window.addEventListener("startWarp",r),()=>{window.removeEventListener("triggerFlash",i),window.removeEventListener("startWarp",r)}},[]),Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"sweep"}),Y.jsx("div",{className:"vignette"}),Y.jsx("div",{ref:e,className:"warp"}),Y.jsx("div",{ref:s,className:"flash"})]})}function uw(){const s=cu(),[e,i]=Q.useState(null),{playClickSound:r}=gy();Q.useEffect(()=>{const h=()=>{r()};return document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}},[r]);const l=()=>{if(!e){alert("请先选择难度！");return}window.dispatchEvent(new CustomEvent("INTRO_ENTER"))},c=h=>{i(h)},f=()=>{s("/game",{state:{difficulty:e}})};return Y.jsxs("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center p-4 overflow-hidden relative",children:[Y.jsx(lw,{onEnter:f}),Y.jsx(cw,{}),Y.jsxs("div",{className:"relative z-10 max-w-2xl w-full",children:[Y.jsxs("div",{className:"text-center mb-16 animate-slideDown",children:[Y.jsx("div",{className:"inline-block mb-6",children:Y.jsx("div",{className:"text-8xl mb-4 animate-float",children:"⚫⚪"})}),Y.jsx("h1",{className:"text-6xl md:text-7xl font-bold mb-6 text-gradient leading-tight",children:"心战五子棋"}),Y.jsxs("p",{className:"text-xl md:text-2xl text-gray-300 font-light",children:["AI 会猜你的下一步",Y.jsx("span",{className:"text-neon-cyan",children:" 你敢挑战吗？"})]})]}),Y.jsxs("div",{className:"glass-effect rounded-3xl p-8 md:p-12 animate-scaleIn",children:[Y.jsxs("div",{className:"mb-8",children:[Y.jsx("h2",{className:"text-2xl font-bold text-center mb-6 text-white",children:"选择你的对手"}),Y.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:[Y.jsx(Xc,{level:"简单",emoji:"😊",difficulty:Ot.Easy,selected:e===Ot.Easy,onClick:()=>c(Ot.Easy)}),Y.jsx(Xc,{level:"中等",emoji:"🤔",difficulty:Ot.Medium,selected:e===Ot.Medium,onClick:()=>c(Ot.Medium)}),Y.jsx(Xc,{level:"困难",emoji:"😈",difficulty:Ot.Hard,selected:e===Ot.Hard,onClick:()=>c(Ot.Hard)}),Y.jsx(Xc,{level:"大师",emoji:"🔥",difficulty:Ot.Master,selected:e===Ot.Master,onClick:()=>c(Ot.Master)})]})]}),Y.jsx("button",{onClick:l,className:`
              w-full py-6 rounded-2xl font-bold text-2xl
              transition-all duration-300 transform
              ${e?"bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/50 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}
            `,disabled:!e,children:e?"🎮 开始对弈":"👆 请先选择难度"}),e!==null&&Y.jsx("p",{className:"text-center mt-4 text-sm text-gray-400 animate-fadeIn",children:fw(e)})]}),Y.jsx("div",{className:"mt-8 text-center",children:Y.jsx("p",{className:"text-gray-500 text-sm",children:"每一步棋后，AI 都会预测你的意图 · 你能骗过它吗？"})})]})]})}function Xc({level:s,emoji:e,selected:i,onClick:r}){return Y.jsxs("button",{onClick:r,className:`
        relative p-6 rounded-xl border-2 transition-all duration-300 transform
        ${i?"border-neon-cyan bg-neon-cyan/10 scale-105 shadow-lg shadow-neon-cyan/50":"border-gray-700 bg-space-dark hover:border-gray-500 hover:scale-105"}
      `,children:[Y.jsx("div",{className:"text-4xl mb-2",children:e}),Y.jsx("div",{className:`font-bold ${i?"text-neon-cyan":"text-gray-300"}`,children:s}),i&&Y.jsx("div",{className:"absolute -top-2 -right-2 w-6 h-6 bg-neon-cyan rounded-full flex items-center justify-center animate-scaleIn",children:Y.jsx("span",{className:"text-white text-sm",children:"✓"})})]})}function fw(s){return{[Ot.Easy]:"AI 会告诉你它的真实想法，适合入门",[Ot.Medium]:"AI 偶尔会误导你，需要保持警惕",[Ot.Hard]:"AI 会设置心理陷阱，极具挑战",[Ot.Master]:"AI 心理战大师，预测准确率成谜"}[s]||""}const mt=15,jo=5,hw=3,eu=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],tu=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],dw=[{row:3,col:3},{row:3,col:11},{row:7,col:7},{row:11,col:3},{row:11,col:11}],vy=[{dr:0,dc:1},{dr:1,dc:0},{dr:1,dc:1},{dr:1,dc:-1}],pw={easy:300,medium:600,hard:1e3,master:1500},Ya={FIVE:1e5,LIVE_FOUR:1e4,SLEEP_FOUR:1e3,LIVE_THREE:100,SLEEP_THREE:10,LIVE_TWO:10,SLEEP_TWO:1};function mw({board:s,onCellClick:e,winningLine:i,lastMove:r,disabled:l=!1,predictedPositions:c=[]}){const f=Q.useRef(null),[h,m]=Q.useState(null),p=40,g=30,v=mt*p+g*2;Q.useEffect(()=>{y()},[s,i,r,h,c]);const y=()=>{const w=f.current;if(!w)return;const F=w.getContext("2d");F&&(F.clearRect(0,0,v,v),M(F),b(F),R(F),S(F),_(F),r&&O(F,r),i&&N(F,i),c.length>0&&k(F,c),h&&!l&&z(F,h))},M=w=>{w.fillStyle="#1a1e37",w.fillRect(0,0,v,v),w.strokeStyle="#a855f7",w.lineWidth=2,w.strokeRect(g-10,g-10,mt*p+20,mt*p+20)},b=w=>{w.strokeStyle="#4a5568",w.lineWidth=1;for(let F=0;F<mt;F++){const ee=g+F*p;w.beginPath(),w.moveTo(g,ee),w.lineTo(g+(mt-1)*p,ee),w.stroke()}for(let F=0;F<mt;F++){const ee=g+F*p;w.beginPath(),w.moveTo(ee,g),w.lineTo(ee,g+(mt-1)*p),w.stroke()}},R=w=>{w.fillStyle="#a855f7";for(const F of dw){const ee=g+F.col*p,ce=g+F.row*p;w.beginPath(),w.arc(ee,ce,4,0,Math.PI*2),w.fill()}},S=w=>{w.fillStyle="#9ca3af",w.font="12px monospace",w.textAlign="center",w.textBaseline="middle";for(let F=0;F<mt;F++){const ee=g+F*p;w.fillText(eu[F],ee,g-20),w.fillText(eu[F],ee,g+mt*p+15)}w.textAlign="right";for(let F=0;F<mt;F++){const ee=g+F*p;w.fillText(tu[F],g-15,ee)}w.textAlign="left";for(let F=0;F<mt;F++){const ee=g+F*p;w.fillText(tu[F],g+mt*p+10,ee)}},_=w=>{for(let F=0;F<mt;F++)for(let ee=0;ee<mt;ee++){const ce=s[F][ee];ce!==at.None&&L(w,{row:F,col:ee},ce)}},L=(w,F,ee)=>{const ce=g+F.col*p,ae=g+F.row*p,P=p*.4;if(w.shadowColor="rgba(0, 0, 0, 0.5)",w.shadowBlur=8,w.shadowOffsetX=2,w.shadowOffsetY=2,w.beginPath(),w.arc(ce,ae,P,0,Math.PI*2),ee===at.Black){const q=w.createRadialGradient(ce-5,ae-5,0,ce,ae,P);q.addColorStop(0,"#4a4a4a"),q.addColorStop(1,"#1a1a1a"),w.fillStyle=q}else{const q=w.createRadialGradient(ce-5,ae-5,0,ce,ae,P);q.addColorStop(0,"#ffffff"),q.addColorStop(1,"#e5e5e5"),w.fillStyle=q}w.fill(),w.shadowColor="transparent",w.shadowBlur=0,w.shadowOffsetX=0,w.shadowOffsetY=0},O=(w,F)=>{const ee=g+F.col*p,ce=g+F.row*p;w.strokeStyle="#06b6d4",w.lineWidth=3,w.beginPath(),w.arc(ee,ce,p*.2,0,Math.PI*2),w.stroke()},N=(w,F)=>{if(F.positions.length<2)return;const ee=F.positions[0],ce=F.positions[F.positions.length-1],ae=g+ee.col*p,P=g+ee.row*p,q=g+ce.col*p,J=g+ce.row*p;w.strokeStyle="#a855f7",w.lineWidth=5,w.lineCap="round",w.shadowColor="#a855f7",w.shadowBlur=15,w.beginPath(),w.moveTo(ae,P),w.lineTo(q,J),w.stroke(),w.shadowColor="transparent",w.shadowBlur=0},G=w=>{if(w.length<2)return null;const F=eu.indexOf(w[0].toUpperCase()),ee=w.substring(1),ce=tu.indexOf(ee);return F===-1||ce===-1?null:{row:ce,col:F}},k=(w,F)=>{F.forEach((ee,ce)=>{const ae=G(ee);if(!ae||s[ae.row][ae.col]!==at.None)return;const P=g+ae.col*p,q=g+ae.row*p,J=["#06b6d4","#a855f7","#f59e0b"],Ee=J[ce%J.length],B=p*.25-ce*2;w.save(),w.shadowColor=Ee,w.shadowBlur=15,w.fillStyle=Ee,w.strokeStyle=Ee,w.lineWidth=2;const E=8,W=B,le=B*.5;w.beginPath();for(let me=0;me<E*2;me++){const ge=Math.PI*me/E-Math.PI/2,X=me%2===0?W:le,$=P+Math.cos(ge)*X,ye=q+Math.sin(ge)*X;me===0?w.moveTo($,ye):w.lineTo($,ye)}w.closePath(),w.fill(),w.shadowBlur=0,w.fillStyle="#1a1e37",w.font="bold 12px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText((ce+1).toString(),P,q),w.restore()})},z=(w,F)=>{if(s[F.row][F.col]!==at.None)return;const ee=g+F.col*p,ce=g+F.row*p,ae=p*.4;w.fillStyle="rgba(6, 182, 212, 0.3)",w.beginPath(),w.arc(ee,ce,ae,0,Math.PI*2),w.fill()},Z=w=>{if(l){m(null);return}const F=f.current;if(!F)return;const ee=F.getBoundingClientRect(),ce=w.clientX-ee.left,ae=w.clientY-ee.top,P=Math.round((ce-g)/p),q=Math.round((ae-g)/p);q>=0&&q<mt&&P>=0&&P<mt?m({row:q,col:P}):m(null)},U=()=>{m(null)},D=w=>{if(l||!e)return;const F=f.current;if(!F)return;const ee=F.getBoundingClientRect(),ce=w.clientX-ee.left,ae=w.clientY-ee.top,P=Math.round((ce-g)/p),q=Math.round((ae-g)/p);q>=0&&q<mt&&P>=0&&P<mt&&s[q][P]===at.None&&e({row:q,col:P})};return Y.jsx("canvas",{ref:f,width:v,height:v,className:`rounded-lg ${l?"cursor-not-allowed opacity-75":"cursor-pointer"}`,onClick:D,onMouseMove:Z,onMouseLeave:U})}function cd(s,e=30,i=!0){const[r,l]=Q.useState(""),[c,f]=Q.useState(!1),h=Q.useRef(null),m=Q.useRef(0);return Q.useEffect(()=>{if(!i){l(s),f(!0);return}if(l(""),f(!1),m.current=0,h.current&&clearTimeout(h.current),!s){f(!0);return}const g=()=>{m.current<s.length?(l(s.substring(0,m.current+1)),m.current++,h.current=window.setTimeout(g,e)):f(!0)};return g(),()=>{h.current&&clearTimeout(h.current)}},[s,e,i]),{displayedText:r,isComplete:c,skip:()=>{h.current&&clearTimeout(h.current),l(s),f(!0),m.current=s.length}}}function gw({prediction:s,isAnalyzing:e}){const i=cd(s?.playerIntent||"",30,!e),r=cd(s?.psychologicalHint||"",25,!e),l=cd(s?.aiSuggestion||"",30,!e);return!s&&!e?Y.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-gray-700",children:Y.jsxs("div",{className:"text-center text-gray-400",children:[Y.jsx("div",{className:"text-4xl mb-3",children:"🧠"}),Y.jsx("div",{className:"text-sm font-semibold",children:"下一步棋后"}),Y.jsx("div",{className:"text-sm",children:"AI 将分析你的心理"})]})}):e?Y.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-neon-cyan animate-pulse",children:Y.jsxs("div",{className:"text-center",children:[Y.jsx("div",{className:"text-4xl mb-3 animate-bounce",children:"🤔"}),Y.jsx("div",{className:"text-neon-cyan font-semibold mb-2",children:"AI 正在分析..."}),Y.jsx("div",{className:"text-sm text-gray-400",children:"读取你的心理中"}),Y.jsxs("div",{className:"mt-4 flex justify-center gap-1",children:[Y.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),Y.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-ping",style:{animationDelay:"0.2s"}}),Y.jsx("div",{className:"w-2 h-2 bg-neon-pink rounded-full animate-ping",style:{animationDelay:"0.4s"}})]})]})}):s?Y.jsxs("div",{className:"glass-effect rounded-xl p-6 space-y-4 animate-fadeIn border-2 border-neon-purple shadow-lg shadow-neon-purple/20",children:[Y.jsxs("div",{className:"flex items-center justify-between border-b border-gray-700 pb-3",children:[Y.jsxs("div",{className:"flex items-center gap-2",children:[Y.jsx("span",{className:"text-2xl animate-pulse",children:"🧠"}),Y.jsx("span",{className:"text-lg font-bold text-white",children:"心理分析"})]}),s.isMisleading&&Y.jsx("div",{className:"text-xs px-2 py-1 bg-red-500/20 border border-red-500 rounded text-red-400 animate-pulse",children:"⚠️ 可能误导"})]}),s.psychologicalHint&&Y.jsxs("div",{className:"p-3 bg-neon-purple/10 border border-neon-purple rounded-lg",children:[Y.jsx("div",{className:"text-xs text-gray-400 mb-1",children:"💭 心理战"}),Y.jsxs("div",{className:"text-sm text-neon-purple",children:[r.displayedText,!r.isComplete&&Y.jsx("span",{className:"animate-pulse",children:"|"})]})]}),Y.jsxs("div",{children:[Y.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"🎯 AI 猜测你的意图"}),Y.jsxs("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:[Y.jsxs("div",{className:"text-sm text-white",children:[i.displayedText,!i.isComplete&&Y.jsx("span",{className:"animate-pulse",children:"|"})]}),Y.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[Y.jsx("div",{className:"text-xs text-gray-500",children:"置信度:"}),Y.jsx("div",{className:"flex-1 h-2 bg-gray-700 rounded-full overflow-hidden",children:Y.jsx("div",{className:"h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-500",style:{width:`${s.confidence*100}%`}})}),Y.jsxs("div",{className:"text-xs text-neon-cyan font-bold",children:[Math.round(s.confidence*100),"%"]})]})]})]}),s.predictedMoves.length>0&&Y.jsxs("div",{children:[Y.jsx("div",{className:"text-xs text-gray-400 mb-2",children:"🔮 AI 预测你接下来会"}),Y.jsx("div",{className:"space-y-2",children:s.predictedMoves.slice(0,3).map((c,f)=>Y.jsx("div",{className:"p-2 bg-space-dark rounded border border-gray-700 hover:border-neon-cyan transition-colors",children:Y.jsxs("div",{className:"flex items-start gap-2",children:[Y.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center text-xs text-neon-cyan font-bold",children:f+1}),Y.jsxs("div",{className:"flex-1",children:[Y.jsx("div",{className:"text-sm text-white font-semibold",children:c.position}),Y.jsx("div",{className:"text-xs text-gray-400 mt-0.5",children:c.reason})]})]})},f))})]}),s.aiSuggestion&&Y.jsxs("div",{className:"pt-3 border-t border-gray-700",children:[Y.jsxs("div",{className:"text-xs text-gray-400 mb-2",children:["💡 AI ",s.isMisleading?"故意":"真诚","建议"]}),Y.jsx("div",{className:`p-3 rounded-lg border ${s.isMisleading?"bg-red-500/10 border-red-500/50 text-red-300":"bg-green-500/10 border-green-500/50 text-green-300"}`,children:Y.jsxs("div",{className:"text-sm",children:[l.displayedText,!l.isComplete&&Y.jsx("span",{className:"animate-pulse",children:"|"})]})})]})]}):null}function vw(){const s=Q.useRef(null),e=Q.useRef([]),i=Q.useRef();return Q.useEffect(()=>{const r=s.current;if(!r)return;const l=r.getContext("2d");if(!l)return;const c=()=>{r.width=window.innerWidth,r.height=window.innerHeight,f()},f=()=>{const m=Math.floor(r.width*r.height/8e3);e.current=[];for(let p=0;p<m;p++)e.current.push({x:Math.random()*r.width,y:Math.random()*r.height,radius:Math.random()*2+.5,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,opacity:Math.random()*.5+.3})},h=()=>{l.fillStyle="rgba(10, 14, 39, 0.1)",l.fillRect(0,0,r.width,r.height),e.current.forEach(m=>{if(m.x+=m.vx,m.y+=m.vy,(m.x<0||m.x>r.width)&&(m.vx*=-1),(m.y<0||m.y>r.height)&&(m.vy*=-1),m.opacity+=(Math.random()-.5)*.02,m.opacity=Math.max(.1,Math.min(1,m.opacity)),l.beginPath(),l.arc(m.x,m.y,m.radius,0,Math.PI*2),l.fillStyle=`rgba(255, 255, 255, ${m.opacity})`,l.fill(),m.radius>1.5){const p=l.createRadialGradient(m.x,m.y,0,m.x,m.y,m.radius*3);p.addColorStop(0,`rgba(168, 85, 247, ${m.opacity*.3})`),p.addColorStop(.5,`rgba(6, 182, 212, ${m.opacity*.1})`),p.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=p,l.fillRect(m.x-m.radius*3,m.y-m.radius*3,m.radius*6,m.radius*6)}}),i.current=requestAnimationFrame(h)};return c(),h(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),i.current&&cancelAnimationFrame(i.current)}},[]),Y.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none",style:{zIndex:0}})}var cl={};(function s(e,i,r,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),f=typeof Path2D=="function"&&typeof DOMMatrix=="function",h=(function(){if(!e.OffscreenCanvas)return!1;var B=new OffscreenCanvas(1,1),E=B.getContext("2d");E.fillRect(0,0,1,1);var W=B.transferToImageBitmap();try{E.createPattern(W,"no-repeat")}catch{return!1}return!0})();function m(){}function p(B){var E=i.exports.Promise,W=E!==void 0?E:e.Promise;return typeof W=="function"?new W(B):(B(m,m),null)}var g=(function(B,E){return{transform:function(W){if(B)return W;if(E.has(W))return E.get(W);var le=new OffscreenCanvas(W.width,W.height),me=le.getContext("2d");return me.drawImage(W,0,0),E.set(W,le),le},clear:function(){E.clear()}}})(h,new Map),v=(function(){var B=Math.floor(16.666666666666668),E,W,le={},me=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(E=function(ge){var X=Math.random();return le[X]=requestAnimationFrame(function $(ye){me===ye||me+B-1<ye?(me=ye,delete le[X],ge()):le[X]=requestAnimationFrame($)}),X},W=function(ge){le[ge]&&cancelAnimationFrame(le[ge])}):(E=function(ge){return setTimeout(ge,B)},W=function(ge){return clearTimeout(ge)}),{frame:E,cancel:W}})(),y=(function(){var B,E,W={};function le(me){function ge(X,$){me.postMessage({options:X||{},callback:$})}me.init=function($){var ye=$.transferControlToOffscreen();me.postMessage({canvas:ye},[ye])},me.fire=function($,ye,Re){if(E)return ge($,null),E;var Le=Math.random().toString(36).slice(2);return E=p(function(Xe){function ft(H){H.data.callback===Le&&(delete W[Le],me.removeEventListener("message",ft),E=null,g.clear(),Re(),Xe())}me.addEventListener("message",ft),ge($,Le),W[Le]=ft.bind(null,{data:{callback:Le}})}),E},me.reset=function(){me.postMessage({reset:!0});for(var $ in W)W[$](),delete W[$]}}return function(){if(B)return B;if(!r&&c){var me=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{B=new Worker(URL.createObjectURL(new Blob([me])))}catch(ge){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",ge),null}le(B)}return B}})(),M={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(B,E){return E?E(B):B}function R(B){return B!=null}function S(B,E,W){return b(B&&R(B[E])?B[E]:M[E],W)}function _(B){return B<0?0:Math.floor(B)}function L(B,E){return Math.floor(Math.random()*(E-B))+B}function O(B){return parseInt(B,16)}function N(B){return B.map(G)}function G(B){var E=String(B).replace(/[^0-9a-f]/gi,"");return E.length<6&&(E=E[0]+E[0]+E[1]+E[1]+E[2]+E[2]),{r:O(E.substring(0,2)),g:O(E.substring(2,4)),b:O(E.substring(4,6))}}function k(B){var E=S(B,"origin",Object);return E.x=S(E,"x",Number),E.y=S(E,"y",Number),E}function z(B){B.width=document.documentElement.clientWidth,B.height=document.documentElement.clientHeight}function Z(B){var E=B.getBoundingClientRect();B.width=E.width,B.height=E.height}function U(B){var E=document.createElement("canvas");return E.style.position="fixed",E.style.top="0px",E.style.left="0px",E.style.pointerEvents="none",E.style.zIndex=B,E}function D(B,E,W,le,me,ge,X,$,ye){B.save(),B.translate(E,W),B.rotate(ge),B.scale(le,me),B.arc(0,0,1,X,$,ye),B.restore()}function w(B){var E=B.angle*(Math.PI/180),W=B.spread*(Math.PI/180);return{x:B.x,y:B.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:B.startVelocity*.5+Math.random()*B.startVelocity,angle2D:-E+(.5*W-Math.random()*W),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:B.color,shape:B.shape,tick:0,totalTicks:B.ticks,decay:B.decay,drift:B.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:B.gravity*3,ovalScalar:.6,scalar:B.scalar,flat:B.flat}}function F(B,E){E.x+=Math.cos(E.angle2D)*E.velocity+E.drift,E.y+=Math.sin(E.angle2D)*E.velocity+E.gravity,E.velocity*=E.decay,E.flat?(E.wobble=0,E.wobbleX=E.x+10*E.scalar,E.wobbleY=E.y+10*E.scalar,E.tiltSin=0,E.tiltCos=0,E.random=1):(E.wobble+=E.wobbleSpeed,E.wobbleX=E.x+10*E.scalar*Math.cos(E.wobble),E.wobbleY=E.y+10*E.scalar*Math.sin(E.wobble),E.tiltAngle+=.1,E.tiltSin=Math.sin(E.tiltAngle),E.tiltCos=Math.cos(E.tiltAngle),E.random=Math.random()+2);var W=E.tick++/E.totalTicks,le=E.x+E.random*E.tiltCos,me=E.y+E.random*E.tiltSin,ge=E.wobbleX+E.random*E.tiltCos,X=E.wobbleY+E.random*E.tiltSin;if(B.fillStyle="rgba("+E.color.r+", "+E.color.g+", "+E.color.b+", "+(1-W)+")",B.beginPath(),f&&E.shape.type==="path"&&typeof E.shape.path=="string"&&Array.isArray(E.shape.matrix))B.fill(q(E.shape.path,E.shape.matrix,E.x,E.y,Math.abs(ge-le)*.1,Math.abs(X-me)*.1,Math.PI/10*E.wobble));else if(E.shape.type==="bitmap"){var $=Math.PI/10*E.wobble,ye=Math.abs(ge-le)*.1,Re=Math.abs(X-me)*.1,Le=E.shape.bitmap.width*E.scalar,Xe=E.shape.bitmap.height*E.scalar,ft=new DOMMatrix([Math.cos($)*ye,Math.sin($)*ye,-Math.sin($)*Re,Math.cos($)*Re,E.x,E.y]);ft.multiplySelf(new DOMMatrix(E.shape.matrix));var H=B.createPattern(g.transform(E.shape.bitmap),"no-repeat");H.setTransform(ft),B.globalAlpha=1-W,B.fillStyle=H,B.fillRect(E.x-Le/2,E.y-Xe/2,Le,Xe),B.globalAlpha=1}else if(E.shape==="circle")B.ellipse?B.ellipse(E.x,E.y,Math.abs(ge-le)*E.ovalScalar,Math.abs(X-me)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI):D(B,E.x,E.y,Math.abs(ge-le)*E.ovalScalar,Math.abs(X-me)*E.ovalScalar,Math.PI/10*E.wobble,0,2*Math.PI);else if(E.shape==="star")for(var ke=Math.PI/2*3,Qe=4*E.scalar,Ke=8*E.scalar,Be=E.x,yt=E.y,He=5,rt=Math.PI/He;He--;)Be=E.x+Math.cos(ke)*Ke,yt=E.y+Math.sin(ke)*Ke,B.lineTo(Be,yt),ke+=rt,Be=E.x+Math.cos(ke)*Qe,yt=E.y+Math.sin(ke)*Qe,B.lineTo(Be,yt),ke+=rt;else B.moveTo(Math.floor(E.x),Math.floor(E.y)),B.lineTo(Math.floor(E.wobbleX),Math.floor(me)),B.lineTo(Math.floor(ge),Math.floor(X)),B.lineTo(Math.floor(le),Math.floor(E.wobbleY));return B.closePath(),B.fill(),E.tick<E.totalTicks}function ee(B,E,W,le,me){var ge=E.slice(),X=B.getContext("2d"),$,ye,Re=p(function(Le){function Xe(){$=ye=null,X.clearRect(0,0,le.width,le.height),g.clear(),me(),Le()}function ft(){r&&!(le.width===l.width&&le.height===l.height)&&(le.width=B.width=l.width,le.height=B.height=l.height),!le.width&&!le.height&&(W(B),le.width=B.width,le.height=B.height),X.clearRect(0,0,le.width,le.height),ge=ge.filter(function(H){return F(X,H)}),ge.length?$=v.frame(ft):Xe()}$=v.frame(ft),ye=Xe});return{addFettis:function(Le){return ge=ge.concat(Le),Re},canvas:B,promise:Re,reset:function(){$&&v.cancel($),ye&&ye()}}}function ce(B,E){var W=!B,le=!!S(E||{},"resize"),me=!1,ge=S(E,"disableForReducedMotion",Boolean),X=c&&!!S(E||{},"useWorker"),$=X?y():null,ye=W?z:Z,Re=B&&$?!!B.__confetti_initialized:!1,Le=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,Xe;function ft(ke,Qe,Ke){for(var Be=S(ke,"particleCount",_),yt=S(ke,"angle",Number),He=S(ke,"spread",Number),rt=S(ke,"startVelocity",Number),$t=S(ke,"decay",Number),Kt=S(ke,"gravity",Number),I=S(ke,"drift",Number),T=S(ke,"colors",N),re=S(ke,"ticks",Number),xe=S(ke,"shapes"),Ae=S(ke,"scalar"),ve=!!S(ke,"flat"),Je=k(ke),Ue=Be,je=[],$e=B.width*Je.x,Ce=B.height*Je.y;Ue--;)je.push(w({x:$e,y:Ce,angle:yt,spread:He,startVelocity:rt,color:T[Ue%T.length],shape:xe[L(0,xe.length)],ticks:re,decay:$t,gravity:Kt,drift:I,scalar:Ae,flat:ve}));return Xe?Xe.addFettis(je):(Xe=ee(B,je,ye,Qe,Ke),Xe.promise)}function H(ke){var Qe=ge||S(ke,"disableForReducedMotion",Boolean),Ke=S(ke,"zIndex",Number);if(Qe&&Le)return p(function(rt){rt()});W&&Xe?B=Xe.canvas:W&&!B&&(B=U(Ke),document.body.appendChild(B)),le&&!Re&&ye(B);var Be={width:B.width,height:B.height};$&&!Re&&$.init(B),Re=!0,$&&(B.__confetti_initialized=!0);function yt(){if($){var rt={getBoundingClientRect:function(){if(!W)return B.getBoundingClientRect()}};ye(rt),$.postMessage({resize:{width:rt.width,height:rt.height}});return}Be.width=Be.height=null}function He(){Xe=null,le&&(me=!1,e.removeEventListener("resize",yt)),W&&B&&(document.body.contains(B)&&document.body.removeChild(B),B=null,Re=!1)}return le&&!me&&(me=!0,e.addEventListener("resize",yt,!1)),$?$.fire(ke,Be,He):ft(ke,Be,He)}return H.reset=function(){$&&$.reset(),Xe&&Xe.reset()},H}var ae;function P(){return ae||(ae=ce(null,{useWorker:!0,resize:!0})),ae}function q(B,E,W,le,me,ge,X){var $=new Path2D(B),ye=new Path2D;ye.addPath($,new DOMMatrix(E));var Re=new Path2D;return Re.addPath(ye,new DOMMatrix([Math.cos(X)*me,Math.sin(X)*me,-Math.sin(X)*ge,Math.cos(X)*ge,W,le])),Re}function J(B){if(!f)throw new Error("path confetti are not supported in this browser");var E,W;typeof B=="string"?E=B:(E=B.path,W=B.matrix);var le=new Path2D(E),me=document.createElement("canvas"),ge=me.getContext("2d");if(!W){for(var X=1e3,$=X,ye=X,Re=0,Le=0,Xe,ft,H=0;H<X;H+=2)for(var ke=0;ke<X;ke+=2)ge.isPointInPath(le,H,ke,"nonzero")&&($=Math.min($,H),ye=Math.min(ye,ke),Re=Math.max(Re,H),Le=Math.max(Le,ke));Xe=Re-$,ft=Le-ye;var Qe=10,Ke=Math.min(Qe/Xe,Qe/ft);W=[Ke,0,0,Ke,-Math.round(Xe/2+$)*Ke,-Math.round(ft/2+ye)*Ke]}return{type:"path",path:E,matrix:W}}function Ee(B){var E,W=1,le="#000000",me='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof B=="string"?E=B:(E=B.text,W="scalar"in B?B.scalar:W,me="fontFamily"in B?B.fontFamily:me,le="color"in B?B.color:le);var ge=10*W,X=""+ge+"px "+me,$=new OffscreenCanvas(ge,ge),ye=$.getContext("2d");ye.font=X;var Re=ye.measureText(E),Le=Math.ceil(Re.actualBoundingBoxRight+Re.actualBoundingBoxLeft),Xe=Math.ceil(Re.actualBoundingBoxAscent+Re.actualBoundingBoxDescent),ft=2,H=Re.actualBoundingBoxLeft+ft,ke=Re.actualBoundingBoxAscent+ft;Le+=ft+ft,Xe+=ft+ft,$=new OffscreenCanvas(Le,Xe),ye=$.getContext("2d"),ye.font=X,ye.fillStyle=le,ye.fillText(E,H,ke);var Qe=1/W;return{type:"bitmap",bitmap:$.transferToImageBitmap(),matrix:[Qe,0,0,Qe,-Le*Qe/2,-Xe*Qe/2]}}i.exports=function(){return P().apply(this,arguments)},i.exports.reset=function(){P().reset()},i.exports.create=ce,i.exports.shapeFromPath=J,i.exports.shapeFromText=Ee})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),cl,!1);const Yo=cl.exports;cl.exports.create;function _w({type:s,onComplete:e}){const[i,r]=Q.useState(!1),[l,c]=Q.useState(null);return Q.useEffect(()=>{if(s&&s!==l){c(s),r(!0),s==="miss"&&Yo({particleCount:50,spread:70,origin:{x:.5,y:.85},colors:["#a855f7","#06b6d4","#ec4899"],startVelocity:30,gravity:.8});const f=setTimeout(()=>{r(!1),e?.()},1e3);return()=>clearTimeout(f)}},[s,l,e]),!i||!s?null:Y.jsx("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:Y.jsx("div",{className:`
          flex items-center gap-3 px-6 py-3 rounded-xl
          ${s==="hit"?"bg-neon-purple/30 border-neon-purple":"bg-neon-cyan/30 border-neon-cyan"}
          border-2 backdrop-blur-md
          animate-slideUp shadow-2xl
        `,children:s==="hit"?Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"text-3xl",children:"🎯"}),Y.jsx("div",{children:Y.jsx("div",{className:"text-lg font-bold text-neon-purple",children:"AI 读懂了你"})})]}):Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"text-3xl",children:"💥"}),Y.jsxs("div",{children:[Y.jsx("div",{className:"text-lg font-bold text-neon-cyan",children:"打破预测！"}),Y.jsx("div",{className:"text-sm text-yellow-400 font-bold",children:"+10 智慧点 ✨"})]})]})})})}function yw({isVisible:s,isPlayerWin:e}){return Q.useEffect(()=>{if(s)if(e){const r=Date.now()+3e3,l=()=>{Yo({particleCount:7,angle:60,spread:55,origin:{x:0},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Yo({particleCount:7,angle:120,spread:55,origin:{x:1},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Date.now()<r&&requestAnimationFrame(l)};l(),setTimeout(()=>{Yo({particleCount:150,spread:120,origin:{y:.6},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]})},500)}else Yo({particleCount:50,spread:70,origin:{y:.6},colors:["#666","#888","#aaa"]})},[s,e]),s?Y.jsx("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:Y.jsx("div",{className:"text-center animate-scaleIn",children:e?Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"text-9xl mb-4 animate-bounce",children:"🎉"}),Y.jsx("div",{className:"text-6xl font-bold text-gradient mb-4",children:"胜利！"}),Y.jsx("div",{className:"text-2xl text-neon-cyan",children:"你战胜了AI！"})]}):Y.jsxs(Y.Fragment,{children:[Y.jsx("div",{className:"text-9xl mb-4",children:"💔"}),Y.jsx("div",{className:"text-6xl font-bold text-gray-400 mb-4",children:"失败"}),Y.jsx("div",{className:"text-2xl text-gray-500",children:"AI略胜一筹，再接再厉！"})]})})}):null}const xw="modulepreload",Sw=function(s){return"/"+s},p_={},Mw=function(e,i,r){let l=Promise.resolve();if(i&&i.length>0){let p=function(g){return Promise.all(g.map(v=>Promise.resolve(v).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var f=p;document.getElementsByTagName("link");const h=document.querySelector("meta[property=csp-nonce]"),m=h?.nonce||h?.getAttribute("nonce");l=p(i.map(g=>{if(g=Sw(g),g in p_)return;p_[g]=!0;const v=g.endsWith(".css"),y=v?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${y}`))return;const M=document.createElement("link");if(M.rel=v?"stylesheet":xw,v||(M.as="script"),M.crossOrigin="",M.href=g,m&&M.setAttribute("nonce",m),document.head.appendChild(M),v)return new Promise((b,R)=>{M.addEventListener("load",b),M.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${g}`)))})}))}function c(h){const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=h,window.dispatchEvent(m),!m.defaultPrevented)throw h}return l.then(h=>{for(const m of h||[])m.status==="rejected"&&c(m.reason);return e().catch(c)})};class Or{static checkWin(e,i){const r=e[i.row][i.col];if(r===at.None)return null;for(const l of vy){const c=this.checkDirection(e,i,l,r);if(c)return c}return null}static checkDirection(e,i,r,l){const c=[i];let f=1,h=i.row+r.dr,m=i.col+r.dc;for(;this.isInBounds(h,m)&&e[h][m]===l&&f<jo;)c.push({row:h,col:m}),f++,h+=r.dr,m+=r.dc;for(h=i.row-r.dr,m=i.col-r.dc;this.isInBounds(h,m)&&e[h][m]===l&&f<jo;)c.unshift({row:h,col:m}),f++,h-=r.dr,m-=r.dc;return f>=jo?{positions:c.slice(0,jo),player:l}:null}static isInBounds(e,i){return e>=0&&e<mt&&i>=0&&i<mt}static isBoardFull(e){for(let i=0;i<mt;i++)for(let r=0;r<mt;r++)if(e[i][r]===at.None)return!1;return!0}static getLineCount(e,i,r,l){let c=1,f=i.row+r.dr,h=i.col+r.dc;for(;this.isInBounds(f,h)&&e[f][h]===l;)c++,f+=r.dr,h+=r.dc;for(f=i.row-r.dr,h=i.col-r.dc;this.isInBounds(f,h)&&e[f][h]===l;)c++,f-=r.dr,h-=r.dc;return c}}class ou{board;moveHistory;constructor(){this.board=this.createEmptyBoard(),this.moveHistory=[]}createEmptyBoard(){return Array(mt).fill(null).map(()=>Array(mt).fill(at.None))}getBoard(){return this.board.map(e=>[...e])}getPiece(e){return this.isValidPosition(e)?this.board[e.row][e.col]:at.None}isValidPosition(e){return e.row>=0&&e.row<mt&&e.col>=0&&e.col<mt}isEmpty(e){return this.getPiece(e)===at.None}placePiece(e,i){return this.isValidPosition(e)?this.isEmpty(e)?i===at.None?(console.error("Invalid player:",i),!1):(this.board[e.row][e.col]=i,this.moveHistory.push({position:e,player:i,timestamp:Date.now()}),!0):(console.error("Position already occupied:",e),!1):(console.error("Invalid position:",e),!1)}undo(){if(this.moveHistory.length===0)return null;const e=this.moveHistory.pop();return this.board[e.position.row][e.position.col]=at.None,e}undoMultiple(e){const i=[];for(let r=0;r<e;r++){const l=this.undo();if(!l)break;i.push(l)}return i.reverse()}getMoveHistory(){return[...this.moveHistory]}getLastMove(){return this.moveHistory.length===0?null:this.moveHistory[this.moveHistory.length-1]}checkWin(e){return Or.checkWin(this.board,e)}isDraw(){return Or.isBoardFull(this.board)}getEmptyPositions(){const e=[];for(let i=0;i<mt;i++)for(let r=0;r<mt;r++)this.board[i][r]===at.None&&e.push({row:i,col:r});return e}getPieceCount(){return this.moveHistory.length}reset(){this.board=this.createEmptyBoard(),this.moveHistory=[]}clone(){const e=new ou;return e.board=this.board.map(i=>[...i]),e.moveHistory=this.moveHistory.map(i=>({...i})),e}static fromBoard(e,i=[]){const r=new ou;return r.board=e.map(l=>[...l]),r.moveHistory=i.map(l=>({...l})),r}}class Ew{board;currentPlayer;status;config;stats;startTime;winningLine;constructor(e=Ot.Medium){this.board=new ou,this.currentPlayer=at.Black,this.status=Et.NotStarted,this.winningLine=null,this.startTime=null,this.config={boardSize:mt,winCount:jo,maxUndoCount:hw,difficulty:e},this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}startGame(){if(this.status===Et.Playing){console.warn("Game already started");return}this.status=Et.Playing,this.startTime=Date.now()}makeMove(e){if(this.status!==Et.Playing)return console.error("Game is not in playing state"),!1;if(!this.board.placePiece(e,this.currentPlayer))return!1;this.updateStats();const r=this.board.checkWin(e);return r?(this.handleWin(r),!0):this.board.isDraw()?(this.handleDraw(),!0):(this.switchPlayer(),!0)}undo(e=2){if(this.stats.undoCount>=this.config.maxUndoCount)return console.warn("Max undo count reached"),!1;if(this.status!==Et.Playing)return console.warn("Cannot undo when game is not playing"),!1;const i=this.board.undoMultiple(e);if(i.length===0)return!1;this.stats.undoCount++,this.stats.totalMoves-=i.length;for(const r of i)r.player===at.Black?this.stats.blackMoves--:r.player===at.White&&this.stats.whiteMoves--;return i.length%2===1&&this.switchPlayer(),!0}pauseGame(){this.status===Et.Playing&&(this.status=Et.Paused)}resumeGame(){this.status===Et.Paused&&(this.status=Et.Playing)}restartGame(){this.board.reset(),this.currentPlayer=at.Black,this.status=Et.NotStarted,this.winningLine=null,this.startTime=null,this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}resign(){this.status===Et.Playing&&(this.currentPlayer===at.Black?this.status=Et.WhiteWin:this.status=Et.BlackWin,this.updateDuration())}getState(){return{board:this.board.getBoard(),currentPlayer:this.currentPlayer,status:this.status,moves:this.board.getMoveHistory(),winningLine:this.winningLine,config:{...this.config},stats:{...this.stats,duration:this.getCurrentDuration()},startTime:this.startTime}}getBoard(){return this.board}getCurrentPlayer(){return this.currentPlayer}getStatus(){return this.status}getRemainingUndoCount(){return this.config.maxUndoCount-this.stats.undoCount}switchPlayer(){this.currentPlayer=this.currentPlayer===at.Black?at.White:at.Black}handleWin(e){this.winningLine=e,this.status=e.player===at.Black?Et.BlackWin:Et.WhiteWin,this.updateDuration()}handleDraw(){this.status=Et.Draw,this.updateDuration()}updateStats(){this.stats.totalMoves++,this.currentPlayer===at.Black?this.stats.blackMoves++:this.currentPlayer===at.White&&this.stats.whiteMoves++}updateDuration(){this.startTime&&(this.stats.duration=Math.floor((Date.now()-this.startTime)/1e3))}getCurrentDuration(){return this.startTime?this.status===Et.BlackWin||this.status===Et.WhiteWin||this.status===Et.Draw?this.stats.duration:Math.floor((Date.now()-this.startTime)/1e3):0}}class Ei{static evaluatePosition(e,i,r){if(e[i.row][i.col]!==at.None)return 0;let l=0;if(e[i.row][i.col]=r,Or.checkWin(e,i))return e[i.row][i.col]=at.None,Ya.FIVE;for(const c of vy){const f=this.analyzeDirection(e,i,c,r);l+=this.getPatternScore(f)}return e[i.row][i.col]=at.None,l+=this.getPositionWeight(i),l}static analyzeDirection(e,i,r,l){const c=Or.getLineCount(e,i,r,l);if(c>=5)return"FIVE";const f=this.isBlocked(e,i,r,l,!0),h=this.isBlocked(e,i,r,l,!1);return c===4?!f&&!h?"LIVE_FOUR":"SLEEP_FOUR":c===3?!f&&!h?"LIVE_THREE":"SLEEP_THREE":c===2&&!f&&!h?"LIVE_TWO":"SLEEP_TWO"}static isBlocked(e,i,r,l,c){const f=c?1:-1;let h=i.row,m=i.col;for(;h>=0&&h<mt&&m>=0&&m<mt&&e[h][m]===l;)h+=r.dr*f,m+=r.dc*f;return h<0||h>=mt||m<0||m>=mt?!0:e[h][m]!==at.None}static getPatternScore(e){switch(e){case"FIVE":return Ya.FIVE;case"LIVE_FOUR":return Ya.LIVE_FOUR;case"SLEEP_FOUR":return Ya.SLEEP_FOUR;case"LIVE_THREE":return Ya.LIVE_THREE;case"SLEEP_THREE":return Ya.SLEEP_THREE;case"LIVE_TWO":return Ya.LIVE_TWO;case"SLEEP_TWO":return Ya.SLEEP_TWO;default:return 0}}static getPositionWeight(e){const i=Math.floor(mt/2),r=Math.abs(e.row-i)+Math.abs(e.col-i);return Math.max(0,10-r)}static evaluateBoard(e,i){let r=0;const l=i===at.Black?at.White:at.Black;for(let c=0;c<mt;c++)for(let f=0;f<mt;f++)e[c][f]===i?r+=this.evaluatePosition(e,{row:c,col:f},i):e[c][f]===l&&(r-=this.evaluatePosition(e,{row:c,col:f},l)*.9);return r}static getCandidatePositions(e,i=2){const r=new Set;for(let l=0;l<mt;l++)for(let c=0;c<mt;c++)if(e[l][c]!==at.None)for(let f=-i;f<=i;f++)for(let h=-i;h<=i;h++){const m=l+f,p=c+h;m>=0&&m<mt&&p>=0&&p<mt&&e[m][p]===at.None&&r.add(`${m},${p}`)}if(r.size===0){const l=Math.floor(mt/2);return[{row:l,col:l}]}return Array.from(r).map(l=>{const[c,f]=l.split(",").map(Number);return{row:c,col:f}})}}class bw{difficulty;player;constructor(e,i=at.White){this.difficulty=e,this.player=i}getNextMove(e){switch(this.difficulty){case Ot.Easy:return this.getEasyMove(e);case Ot.Medium:return this.getMediumMove(e);case Ot.Hard:return this.getHardMove(e);case Ot.Master:return this.getMasterMove(e);default:return this.getMediumMove(e)}}getEasyMove(e){const i=this.getOpponent(),r=this.findWinningMove(e,i);if(r&&Math.random()>.3)return r;const l=this.findWinningMove(e,this.player);if(l&&Math.random()>.1)return l;const c=Ei.getCandidatePositions(e,2);return c.length===0?null:c[Math.floor(Math.random()*c.length)]}getMediumMove(e){const i=this.getOpponent(),r=this.findWinningMove(e,this.player);if(r)return r;const l=this.findWinningMove(e,i);return l||this.getBestScoredMove(e,1)}getHardMove(e){const i=this.getOpponent(),r=this.findWinningMove(e,this.player);if(r)return r;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);return f||this.getBestScoredMove(e,2)}getMasterMove(e){const i=this.getOpponent(),r=this.findWinningMove(e,this.player);if(r)return r;const l=this.findWinningMove(e,i);return l||this.minimax(e,3)}findWinningMove(e,i){const r=Ei.getCandidatePositions(e,2);for(const l of r){e[l.row][l.col]=i;const c=Or.checkWin(e,l);if(e[l.row][l.col]=at.None,c)return l}return null}findLiveFourMove(e,i){const r=Ei.getCandidatePositions(e,2);for(const l of r){e[l.row][l.col]=i;const c=Ei.evaluatePosition(e,l,i);if(e[l.row][l.col]=at.None,c>=8e3)return l}return null}getBestScoredMove(e,i){const r=Ei.getCandidatePositions(e,2);if(r.length===0)return null;const l=this.getOpponent();let c=null,f=-1/0;for(const h of r){let m=Ei.evaluatePosition(e,h,this.player);if(i>0){e[h.row][h.col]=this.player;const p=this.getOpponentBestScore(e,l,i-1);e[h.row][h.col]=at.None,m-=p*.8}m>f&&(f=m,c=h)}return c}getOpponentBestScore(e,i,r){if(r<=0)return 0;const l=Ei.getCandidatePositions(e,2);let c=-1/0;for(const f of l){const h=Ei.evaluatePosition(e,f,i);h>c&&(c=h)}return c}minimax(e,i){const r=Ei.getCandidatePositions(e,2);if(r.length===0)return null;let l=null,c=-1/0,f=-1/0;const h=1/0;for(const m of r){e[m.row][m.col]=this.player;const p=this.minimaxHelper(e,i-1,f,h,!1);e[m.row][m.col]=at.None,p>c&&(c=p,l=m),f=Math.max(f,p)}return l}minimaxHelper(e,i,r,l,c){if(i===0)return Ei.evaluateBoard(e,this.player);const f=Ei.getCandidatePositions(e,1),h=c?this.player:this.getOpponent();if(c){let m=-1/0;for(const p of f){if(e[p.row][p.col]=h,Or.checkWin(e,p))return e[p.row][p.col]=at.None,1e5;const g=this.minimaxHelper(e,i-1,r,l,!1);if(e[p.row][p.col]=at.None,m=Math.max(m,g),r=Math.max(r,g),l<=r)break}return m}else{let m=1/0;for(const p of f){if(e[p.row][p.col]=h,Or.checkWin(e,p))return e[p.row][p.col]=at.None,-1e5;const g=this.minimaxHelper(e,i-1,r,l,!0);if(e[p.row][p.col]=at.None,m=Math.min(m,g),l=Math.min(l,g),l<=r)break}return m}}getOpponent(){return this.player===at.Black?at.White:at.Black}setDifficulty(e){this.difficulty=e}getDifficulty(){return this.difficulty}}class Tw{apiKey;apiUrl;endpointId;constructor(){this.apiKey="",this.apiUrl="https://ark.cn-beijing.volces.com/api/v3",this.endpointId="",(!this.apiKey||!this.apiUrl||!this.endpointId)&&console.warn("⚠️ 火山引擎API配置不完整，心理预测功能将使用模拟模式")}async chat(e,i=.7,r=500){if(!this.apiKey||!this.apiUrl||!this.endpointId)return console.warn("❌ API配置不完整，使用模拟模式（预制内容）"),console.warn("请检查.env文件中的VITE_VOLCANO_API_KEY、VITE_VOLCANO_API_URL、VITE_VOLCANO_ENDPOINT_ID"),this.getMockResponse();console.log("🚀 开始调用火山引擎大模型API..."),console.log("📋 模型ID:",this.endpointId);try{const l={model:this.endpointId,messages:e,temperature:i,max_tokens:r},c=await fetch(`${this.apiUrl}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(l)});if(!c.ok){const h=await c.text();throw console.error("❌ 火山引擎API错误:",h),new Error(`API请求失败: ${c.status} ${c.statusText}`)}const f=await c.json();if(!f.choices||f.choices.length===0)throw new Error("API返回数据格式错误");return console.log("✅ 成功获取大模型返回内容！"),console.log("📝 内容预览:",f.choices[0].message.content.substring(0,100)),f.choices[0].message.content}catch(l){return console.error("❌ 调用火山引擎API失败:",l),console.warn("⚠️ 降级到模拟模式（预制内容）"),this.getMockResponse()}}getMockResponse(){const e=["采取进攻策略，试图建立优势","采取防守姿态，稳扎稳打","布局阶段，为后续发展做准备","尝试形成双向威胁","寻找突破口，准备发起攻势"],i=[{position:"H8",reason:"形成连子威胁"},{position:"I7",reason:"扩大控制范围"},{position:"G9",reason:"防止AI反击"},{position:"J8",reason:"建立进攻基础"},{position:"H9",reason:"加强中心控制"}],r=["建议继续保持进攻态势","建议在边缘位置布局，出其不意","建议加强防守，稳中求胜","建议寻找双向威胁的机会","建议先观察AI的走向再决定"],l=["你的棋路AI已经看穿了！","这步棋下得很有想法！","AI注意到你的战术了","小心，AI可能在布陷阱！","你的策略很有挑战性！","继续保持这个节奏！"],c=e[Math.floor(Math.random()*e.length)],f=[],h=new Set;for(let v=0;v<3;v++){let y;do y=Math.floor(Math.random()*i.length);while(h.has(y));h.add(y),f.push(i[y])}const m=r[Math.floor(Math.random()*r.length)],p=l[Math.floor(Math.random()*l.length)],g=.6+Math.random()*.3;return JSON.stringify({playerIntent:c,predictedMoves:f,aiSuggestion:m,confidence:g,psychologicalHint:p})}isAvailable(){return!!(this.apiKey&&this.apiUrl&&this.endpointId)}}const Aw=new Tw;class Rw{difficulty;constructor(e){this.difficulty=e}async analyzePsychology(e,i,r){console.log("🔮 开始心理分析（完全依赖大模型）...");try{const l=await this.fetchPredictionFromAI(e,i,r);return l?(l.isMisleading=this.shouldMislead(),l.isMisleading&&(l.aiSuggestion=this.generateMisleadingSuggestion(l.aiSuggestion)),console.log("✅ 心理分析完成（大模型生成）"),l):(console.error("❌ 大模型返回为空"),null)}catch(l){return console.error("❌ 心理分析失败:",l),null}}async fetchPredictionFromAI(e,i,r){const l=performance.now();console.log("🚀 调用大模型API...");const c=this.describeBoardState(e,i,r),f=this.buildPrompt(c,r);console.log("📝 提示词构建完成");try{const h=await Aw.chat([{role:"system",content:this.getSystemPrompt()},{role:"user",content:f}],.7,150),p=((performance.now()-l)/1e3).toFixed(2);console.log(`✅ 大模型API响应成功 (耗时: ${p}秒)`),console.log("📄 响应内容:",h.substring(0,150)),parseFloat(p)>3?(console.warn("⚠️ 响应较慢，建议切换到doubao-lite-4k模型以获得更快速度"),console.warn("💡 参考: 如何优化大模型响应速度.md")):parseFloat(p)<1&&console.log("⚡ 响应很快！当前模型配置良好");const g=this.parseResponse(h);return g&&(console.log("🎉 使用大模型实时生成的内容（100%非预制）"),console.log("📊 预测结果:",g)),g}catch(h){const p=((performance.now()-l)/1e3).toFixed(2);throw console.error(`❌ 大模型API调用失败 (耗时: ${p}秒):`,h),h}}getSystemPrompt(){return`你是一个爱开玩笑、超级逗比的五子棋AI，特别喜欢吐槽和调侃玩家，语气幽默但不伤人。
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

语气风格：像个损友，爱开玩笑，但建议要实用。让玩家笑出来的同时还能学到东西！`}buildPrompt(e,i){const r=i[i.length-1],l=this.positionToNotation(r.position);return`${e}

玩家刚下${l}，分析：
1.意图(幽默吐槽)
2.预测2-3个位置(基于棋局)
3.建议(损友口吻)
4.心理战挑衅(会语音播放)

直接JSON。`}describeBoardState(e,i,r){const l=[],c=r.filter(p=>p.player===at.Black).length,f=this.positionToNotation(i.position);l.push(`步数:${c}, 最后:${f}`);const h=[],m=r.slice(-10);for(const p of m){const g=this.positionToNotation(p.position),v=p.player===at.Black?"●":"○";h.push(`${v}${g}`)}return l.push(`近期:${h.join(" ")}`),l.join(`
`)}positionToNotation(e){return`${eu[e.col]}${tu[e.row]}`}parseResponse(e){try{const i=e.match(/\{[\s\S]*\}/);if(!i)return console.error("⚠️ 响应中未找到JSON格式"),null;let r=i[0];r=this.cleanJsonString(r),console.log("🔧 清理后的JSON:",r.substring(0,200));const l=JSON.parse(r);return!l.playerIntent||!l.predictedMoves||!l.aiSuggestion||!l.psychologicalHint?(console.error("⚠️ 缺少必需字段"),null):{playerIntent:l.playerIntent||"",predictedMoves:Array.isArray(l.predictedMoves)&&l.predictedMoves.length>0?l.predictedMoves:[],aiSuggestion:l.aiSuggestion||"",confidence:typeof l.confidence=="number"?l.confidence:.7,psychologicalHint:l.psychologicalHint||"",isMisleading:!1}}catch(i){return console.error("❌ 解析响应失败:",i),console.log("📄 原始响应:",e),null}}cleanJsonString(e){return e=e.replace(/,(\s*[}\]])/g,"$1"),e=e.replace(/\/\/.*$/gm,""),e=e.replace(/\/\*[\s\S]*?\*\//g,""),e}parseTextResponse(){return console.log("⚠️ JSON解析失败，尝试文本解析"),null}shouldMislead(){const e={[Ot.Easy]:0,[Ot.Medium]:.1,[Ot.Hard]:.2,[Ot.Master]:.3};return Math.random()<e[this.difficulty]}generateMisleadingSuggestion(e){const i=["要不试试走边路？（坏笑）","我觉得你往那边走更好（其实不是）","相信我，听我的准没错（误导ing）","这个位置绝对稳（才怪）"];return Math.random()>.7?i[Math.floor(Math.random()*i.length)]:e.replace(/稳/g,"猛").replace(/小心/g,"别管").replace(/防/g,"攻").replace(/观察/g,"直接冲").replace(/先/g,"不用")+"（嘿嘿）"}}function ww(s=Ot.Medium){const e=Q.useRef(null),i=Q.useRef(null),r=Q.useRef(null),[l,c]=Q.useState(null),[f,h]=Q.useState(!1),[m,p]=Q.useState(null),[g,v]=Q.useState(!1),y=Q.useCallback(()=>{e.current&&c(e.current.getState())},[]);Q.useEffect(()=>{e.current=new Ew(s),i.current=new bw(s,at.White),r.current=new Rw(s),y()},[s,y]);const M=Q.useCallback(()=>{e.current&&(e.current.startGame(),y())},[y]),b=Q.useCallback(async()=>{if(!e.current||!r.current)return;const D=e.current.getState(),w=D.moves;if(w.length===0)return;const F=w[w.length-1];if(F.player===at.Black){v(!0);try{const ee=await r.current.analyzePsychology(D.board,F,w);ee?(p(ee),setTimeout(()=>{ee.psychologicalHint&&Mw(async()=>{const{soundManager:ce}=await Promise.resolve().then(()=>Dw);return{soundManager:ce}},[]).then(({soundManager:ce})=>{ce.speakText(ee.psychologicalHint)})},500)):(p(null),console.warn("⚠️ 大模型未返回预测结果"))}catch(ee){console.error("心理分析失败:",ee),p(null)}finally{v(!1)}}},[]),R=Q.useCallback(()=>{if(!e.current||!i.current)return;h(!0);const D=pw[e.current.getState().config.difficulty];setTimeout(()=>{if(!e.current||!i.current){h(!1);return}const w=e.current.getBoard().getBoard(),F=i.current.getNextMove(w);F&&(e.current.makeMove(F),y()),h(!1)},D)},[y]),S=Q.useCallback(D=>{if(!e.current||f)return!1;const w=e.current.makeMove(D);if(w){y();const F=e.current.getStatus(),ee=F===Et.BlackWin||F===Et.WhiteWin||F===Et.Draw;b(),!ee&&e.current.getCurrentPlayer()===at.White&&R()}return w},[y,f,b,R]),_=Q.useCallback((D=2)=>{if(!e.current)return!1;const w=e.current.undo(D);return w&&y(),w},[y]),L=Q.useCallback(()=>{e.current&&(e.current.restartGame(),y(),p(null),v(!1))},[y]),O=Q.useCallback(()=>{e.current&&(e.current.pauseGame(),y())},[y]),N=Q.useCallback(()=>{e.current&&(e.current.resumeGame(),y())},[y]),G=Q.useCallback(()=>{e.current&&(e.current.resign(),y())},[y]),k=Q.useCallback(()=>e.current?.getRemainingUndoCount()||0,[]),z=l?.status!==Et.NotStarted,Z=l?.status===Et.Playing,U=l?.status===Et.BlackWin||l?.status===Et.WhiteWin||l?.status===Et.Draw;return{gameState:l,gameManager:e.current,startGame:M,makeMove:S,undo:_,restart:L,pause:O,resume:N,resign:G,getRemainingUndoCount:k,isGameStarted:z,isGamePlaying:Z,isGameOver:U,isAIThinking:f,psychologyPrediction:m,isAnalyzing:g}}var Ka=(s=>(s.PlaceStone="place",s.Win="win",s.Lose="lose",s.PredictionHit="hit",s.PredictionMiss="miss",s.Click="click",s.Undo="undo",s))(Ka||{});class Cw{audioContext=null;enabled=!0;volume=.5;sounds=new Map;ttsEnabled=!0;constructor(){this.initAudioContext()}initAudioContext(){try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioContext=new e)}catch(e){console.warn("AudioContext初始化失败，音效将被禁用:",e),this.enabled=!1}}generateTone(e,i,r="sine",l=1){if(!(!this.audioContext||!this.enabled))try{const c=this.audioContext.createOscillator(),f=this.audioContext.createGain();c.connect(f),f.connect(this.audioContext.destination),c.frequency.value=e,c.type=r;const h=this.audioContext.currentTime,m=this.volume*l;f.gain.setValueAtTime(0,h),f.gain.linearRampToValueAtTime(m,h+.01),f.gain.exponentialRampToValueAtTime(.01,h+i),c.start(h),c.stop(h+i)}catch(c){console.error("音效播放失败:",c)}}playCompoundSound(e){!this.audioContext||!this.enabled||e.forEach(({freq:i,delay:r,duration:l,type:c="sine",volume:f=1})=>{setTimeout(()=>{this.generateTone(i,l,c,f)},r)})}play(e){if(!(!this.enabled||!this.audioContext))switch(this.audioContext.state==="suspended"&&this.audioContext.resume(),e){case"place":this.generateTone(200,.1,"sine",.6);break;case"win":this.playCompoundSound([{freq:523,delay:0,duration:.15},{freq:659,delay:100,duration:.15},{freq:784,delay:200,duration:.3}]);break;case"lose":this.playCompoundSound([{freq:400,delay:0,duration:.15},{freq:300,delay:100,duration:.15},{freq:200,delay:200,duration:.3}]);break;case"hit":this.playCompoundSound([{freq:800,delay:0,duration:.08,type:"triangle"},{freq:1e3,delay:80,duration:.08,type:"triangle"}]);break;case"miss":this.playCompoundSound([{freq:600,delay:0,duration:.12,type:"triangle"},{freq:900,delay:60,duration:.12,type:"triangle"},{freq:1200,delay:120,duration:.15,type:"triangle"}]);break;case"click":this.generateTone(1e3,.05,"square",.3);break;case"undo":this.playCompoundSound([{freq:600,delay:0,duration:.06},{freq:500,delay:50,duration:.06}]);break;default:console.warn("未知的音效类型:",e)}}enable(){this.enabled=!0,this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume()}disable(){this.enabled=!1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),this.enabled}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}getVolume(){return this.volume}isEnabled(){return this.enabled}getBestChineseVoice(){const e=window.speechSynthesis.getVoices();if(e.length===0)return console.warn("⚠️ 语音列表为空，可能还在加载中"),null;console.log("📢 可用语音数量:",e.length);const i=[r=>r.lang.includes("zh")&&r.name.includes("Female")&&!r.localService,r=>r.lang.includes("zh")&&(r.name.includes("女")||r.name.includes("Xiaoxiao")||r.name.includes("Xiaoyi")),r=>r.lang.includes("zh")&&r.name.includes("Female"),r=>r.lang.includes("zh")&&(r.name.toLowerCase().includes("female")||r.name.includes("女")),r=>r.lang.includes("zh"),r=>r.lang.startsWith("zh-")];for(const r of i){const l=e.find(r);if(l)return console.log("✅ 选择语音:",l.name,"语言:",l.lang),l}return console.warn("⚠️ 未找到合适的中文语音，使用默认语音"),e[0]||null}speakText(e,i){if(!this.ttsEnabled){console.log("🔇 TTS已禁用");return}if(!("speechSynthesis"in window)){console.warn("❌ 浏览器不支持语音合成");return}try{window.speechSynthesis.cancel();const r=new SpeechSynthesisUtterance(e),l=this.getBestChineseVoice();l&&(r.voice=l,console.log("🎵 使用语音引擎:",l.name)),r.rate=i?.rate||1,r.pitch=i?.pitch||1.1,r.volume=i?.volume||.9,r.lang=i?.lang||"zh-CN",r.onstart=()=>{console.log("🔊 开始播放心理战语音:",e)},r.onend=()=>{console.log("✅ 心理战语音播放完成")},r.onerror=c=>{console.error("❌ 语音播放失败:",c.error)},window.speechSynthesis.speak(r),console.log("🎤 TTS播放文本:",e)}catch(r){console.error("❌ TTS播放失败:",r)}}preloadVoices(){return new Promise(e=>{if(!("speechSynthesis"in window)){e();return}const i=window.speechSynthesis.getVoices();if(i.length>0){console.log("✅ 语音已加载:",i.length,"个"),e();return}window.speechSynthesis.onvoiceschanged=()=>{const r=window.speechSynthesis.getVoices();console.log("✅ 语音加载完成:",r.length,"个"),e()},setTimeout(()=>{console.warn("⚠️ 语音加载超时"),e()},3e3)})}stopSpeaking(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}enableTTS(){this.ttsEnabled=!0}disableTTS(){this.ttsEnabled=!1,this.stopSpeaking()}toggleTTS(){return this.ttsEnabled=!this.ttsEnabled,this.ttsEnabled||this.stopSpeaking(),this.ttsEnabled}isTTSEnabled(){return this.ttsEnabled}}const Za=new Cw,Dw=Object.freeze(Object.defineProperty({__proto__:null,SoundType:Ka,soundManager:Za},Symbol.toStringTag,{value:"Module"}));function Uw(){const s=cu(),i=nr().state?.difficulty||Ot.Medium,{gameState:r,startGame:l,makeMove:c,undo:f,restart:h,resign:m,getRemainingUndoCount:p,isGamePlaying:g,isGameOver:v,isAIThinking:y,psychologyPrediction:M,isAnalyzing:b}=ww(i),[R,S]=Q.useState(0),[_,L]=Q.useState(null),[O,N]=Q.useState([]);Q.useEffect(()=>{Za.preloadVoices().then(()=>{console.log("🎵 语音引擎预加载完成")})},[]),Q.useEffect(()=>{l()},[l]),Q.useEffect(()=>{M&&M.predictedMoves.length>0&&N(M.predictedMoves.map(w=>w.position))},[M]),Q.useEffect(()=>{r?.status===Et.BlackWin?setTimeout(()=>Za.play(Ka.Win),300):r?.status===Et.WhiteWin&&setTimeout(()=>Za.play(Ka.Lose),300)},[r?.status]);const G=Q.useCallback(w=>{if(!g)return;const F=`${String.fromCharCode(65+w.col)}${w.row+1}`,ee=O.includes(F);c(w)&&(Za.play(Ka.PlaceStone),O.length>0&&(ee?(L("hit"),Za.play(Ka.PredictionHit)):(L("miss"),S(ae=>ae+10),Za.play(Ka.PredictionMiss))))},[g,O,c,S]),k=()=>{s("/")},z=()=>{h(),l(),S(0),N([]),L(null)},Z=()=>{f(2),Za.play(Ka.Undo)},U=()=>{window.confirm("确定要认输吗？")&&m()};if(!r)return Y.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:Y.jsx("div",{className:"text-white text-xl",children:"加载中..."})});const D=p();return Y.jsxs("div",{className:"min-h-screen bg-space-darkest relative overflow-hidden",children:[Y.jsx(vw,{}),Y.jsx(_w,{type:_,onComplete:()=>L(null)}),Y.jsx(yw,{isVisible:v,isPlayerWin:r?.status===Et.BlackWin}),Y.jsxs("div",{className:"relative z-10 container mx-auto px-4 py-8",children:[Y.jsxs("div",{className:"flex justify-between items-center mb-8",children:[Y.jsx("button",{onClick:k,className:"px-4 py-2 bg-space-dark border border-gray-700 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all",children:"← 返回主页"}),Y.jsxs("div",{className:"flex items-center gap-4",children:[Y.jsx("div",{className:"text-2xl font-bold text-gradient",children:"心战五子棋"}),Y.jsxs("div",{className:"px-4 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan rounded-lg",children:[Y.jsxs("span",{className:"text-yellow-400 font-bold text-lg",children:["✨ ",R]}),Y.jsx("span",{className:"text-gray-400 text-sm ml-2",children:"智慧点"})]})]}),Y.jsx("div",{className:"w-24"})," "]}),Y.jsxs("div",{className:"flex flex-col lg:flex-row gap-8 items-start justify-center",children:[Y.jsx("div",{className:"lg:order-1 order-2 flex-shrink-0",children:Y.jsxs("div",{className:"glass-effect rounded-xl p-6 space-y-6 w-full lg:w-80",children:[Y.jsxs("div",{className:"text-center",children:[Y.jsx("div",{className:"text-gray-400 text-sm mb-2",children:"当前回合"}),Y.jsxs("div",{className:"flex items-center justify-center gap-3",children:[Y.jsx("div",{className:`w-8 h-8 rounded-full ${r.currentPlayer===at.Black?"bg-piece-black ring-4 ring-neon-cyan":"bg-piece-black opacity-30"}`}),Y.jsx("div",{className:"text-lg font-bold text-white",children:"VS"}),Y.jsx("div",{className:`w-8 h-8 rounded-full ${r.currentPlayer===at.White?"bg-piece-white ring-4 ring-neon-purple":"bg-piece-white opacity-30"}`})]}),Y.jsx("div",{className:"mt-2 text-neon-cyan font-semibold",children:y?Y.jsx("span",{className:"flex items-center justify-center gap-2",children:Y.jsx("span",{className:"animate-pulse",children:"🤔 AI思考中..."})}):r.currentPlayer===at.Black?"黑棋 (你)":"白棋 (AI)"})]}),Y.jsx("div",{className:"border-t border-gray-700 pt-4",children:Y.jsxs("div",{className:"grid grid-cols-2 gap-4 text-sm",children:[Y.jsxs("div",{className:"text-center",children:[Y.jsx("div",{className:"text-gray-400",children:"你的步数"}),Y.jsx("div",{className:"text-white font-bold text-xl mt-1",children:r.moves.filter(w=>w.player===at.Black).length})]}),Y.jsxs("div",{className:"text-center",children:[Y.jsx("div",{className:"text-gray-400",children:"用时"}),Y.jsxs("div",{className:"text-white font-bold text-xl mt-1",children:[Math.floor(r.stats.duration/60),":",String(r.stats.duration%60).padStart(2,"0")]})]})]})}),v&&Y.jsx("div",{className:"border-t border-gray-700 pt-4",children:Y.jsxs("div",{className:"text-center p-4 rounded-lg bg-neon-purple/20 border border-neon-purple",children:[Y.jsxs("div",{className:"text-2xl font-bold mb-2",children:[r.status===Et.BlackWin&&"🎉 黑棋获胜！",r.status===Et.WhiteWin&&"💔 白棋获胜！",r.status===Et.Draw&&"🤝 平局！"]}),Y.jsxs("div",{className:"text-sm text-gray-300",children:[r.status===Et.BlackWin&&"恭喜你战胜了AI！",r.status===Et.WhiteWin&&"AI略胜一筹，再接再厉！",r.status===Et.Draw&&"棋逢对手！"]})]})}),Y.jsxs("div",{className:"border-t border-gray-700 pt-4 space-y-3",children:[Y.jsx("button",{onClick:z,className:"w-full px-4 py-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-lg font-semibold transition-all hover:scale-105",children:"🔄 重新开始"}),Y.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[Y.jsxs("button",{onClick:Z,disabled:D===0||!g||r.stats.totalMoves<2,className:"px-4 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-700 disabled:hover:text-gray-300",children:["↶ 悔棋 (",D,")"]}),Y.jsx("button",{onClick:U,disabled:!g,className:"px-4 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed",children:"🏳️ 认输"})]})]}),Y.jsxs("div",{className:"border-t border-gray-700 pt-4 text-center text-sm text-gray-400",children:["难度: ",Y.jsxs("span",{className:"text-neon-purple font-semibold",children:[i===Ot.Easy&&"😊 简单",i===Ot.Medium&&"🤔 中等",i===Ot.Hard&&"😈 困难",i===Ot.Master&&"🔥 大师"]})]})]})}),Y.jsx("div",{className:"lg:order-2 order-1 flex-shrink-0",children:Y.jsxs("div",{className:"glass-effect rounded-xl p-6",children:[Y.jsx(mw,{board:r.board,onCellClick:G,winningLine:r.winningLine,lastMove:r.moves.length>0?r.moves[r.moves.length-1].position:null,disabled:!g||y||r.currentPlayer!==at.Black,predictedPositions:O}),y&&Y.jsx("div",{className:"mt-4 text-center",children:Y.jsxs("div",{className:"inline-flex items-center gap-2 px-4 py-2 bg-neon-purple/20 border border-neon-purple rounded-lg",children:[Y.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),Y.jsx("span",{className:"text-neon-purple font-semibold",children:"AI正在思考最佳策略..."})]})})]})}),Y.jsx("div",{className:"lg:order-3 order-3 flex-shrink-0",children:Y.jsx("div",{className:"w-full lg:w-80",children:Y.jsx(gw,{prediction:M,isAnalyzing:b})})})]}),Y.jsx("div",{className:"mt-8 text-center text-gray-400 text-sm",children:Y.jsx("p",{children:"五子连珠即可获胜 · 黑棋先行 · AI会猜测你的意图"})})]})]})}function Nw(){return Y.jsxs(EM,{children:[Y.jsx(qc,{path:"/",element:Y.jsx(ow,{})}),Y.jsx(qc,{path:"/home",element:Y.jsx(uw,{})}),Y.jsx(qc,{path:"/game",element:Y.jsx(Uw,{})})]})}LS.createRoot(document.getElementById("root")).render(Y.jsx(Q.StrictMode,{children:Y.jsx(qM,{children:Y.jsx(Nw,{})})}))});export default Lw();
