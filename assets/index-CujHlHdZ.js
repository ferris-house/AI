var CS=(s,e)=>()=>(e||s((e={exports:{}}).exports,e),e.exports);var OR=CS((IR,hl)=>{(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Ed={exports:{}},Go={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function DS(){if(tv)return Go;tv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(a,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:a,key:f,ref:l!==void 0?l:null,props:c}}return Go.Fragment=e,Go.jsx=i,Go.jsxs=i,Go}var nv;function NS(){return nv||(nv=1,Ed.exports=DS()),Ed.exports}var I=NS(),bd={exports:{}},ht={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function US(){if(iv)return ht;iv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function E(M){return M===null||typeof M!="object"?null:(M=x&&M[x]||M["@@iterator"],typeof M=="function"?M:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,y={};function _(M,w,G){this.props=M,this.context=w,this.refs=y,this.updater=G||b}_.prototype.isReactComponent={},_.prototype.setState=function(M,w){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,w,"setState")},_.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function C(){}C.prototype=_.prototype;function N(M,w,G){this.props=M,this.context=w,this.refs=y,this.updater=G||b}var O=N.prototype=new C;O.constructor=N,T(O,_.prototype),O.isPureReactComponent=!0;var W=Array.isArray;function X(){}var z={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function L(M,w,G){var ee=G.ref;return{$$typeof:s,type:M,key:w,ref:ee!==void 0?ee:null,props:G}}function P(M,w){return L(M.type,w,M.props)}function Z(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function se(M){var w={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(G){return w[G]})}var le=/\/+/g;function ve(M,w){return typeof M=="object"&&M!==null&&M.key!=null?se(""+M.key):w.toString(36)}function oe(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(X,X):(M.status="pending",M.then(function(w){M.status==="pending"&&(M.status="fulfilled",M.value=w)},function(w){M.status==="pending"&&(M.status="rejected",M.reason=w)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function B(M,w,G,ee,Q){var H=typeof M;(H==="undefined"||H==="boolean")&&(M=null);var Y=!1;if(M===null)Y=!0;else switch(H){case"bigint":case"string":case"number":Y=!0;break;case"object":switch(M.$$typeof){case s:case e:Y=!0;break;case g:return Y=M._init,B(Y(M._payload),w,G,ee,Q)}}if(Y)return Q=Q(M),Y=ee===""?"."+ve(M,0):ee,W(Q)?(G="",Y!=null&&(G=Y.replace(le,"$&/")+"/"),B(Q,w,G,"",function(Ne){return Ne})):Q!=null&&(Z(Q)&&(Q=P(Q,G+(Q.key==null||M&&M.key===Q.key?"":(""+Q.key).replace(le,"$&/")+"/")+Y)),w.push(Q)),1;Y=0;var pe=ee===""?".":ee+":";if(W(M))for(var Te=0;Te<M.length;Te++)ee=M[Te],H=pe+ve(ee,Te),Y+=B(ee,w,G,H,Q);else if(Te=E(M),typeof Te=="function")for(M=Te.call(M),Te=0;!(ee=M.next()).done;)ee=ee.value,H=pe+ve(ee,Te++),Y+=B(ee,w,G,H,Q);else if(H==="object"){if(typeof M.then=="function")return B(oe(M),w,G,ee,Q);throw w=String(M),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return Y}function $(M,w,G){if(M==null)return M;var ee=[],Q=0;return B(M,ee,"","",function(H){return w.call(G,H,Q++)}),ee}function te(M){if(M._status===-1){var w=M._result;w=w(),w.then(function(G){(M._status===0||M._status===-1)&&(M._status=1,M._result=G)},function(G){(M._status===0||M._status===-1)&&(M._status=2,M._result=G)}),M._status===-1&&(M._status=0,M._result=w)}if(M._status===1)return M._result.default;throw M._result}var k=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},U={map:$,forEach:function(M,w,G){$(M,function(){w.apply(this,arguments)},G)},count:function(M){var w=0;return $(M,function(){w++}),w},toArray:function(M){return $(M,function(w){return w})||[]},only:function(M){if(!Z(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return ht.Activity=v,ht.Children=U,ht.Component=_,ht.Fragment=i,ht.Profiler=l,ht.PureComponent=N,ht.StrictMode=a,ht.Suspense=p,ht.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=z,ht.__COMPILER_RUNTIME={__proto__:null,c:function(M){return z.H.useMemoCache(M)}},ht.cache=function(M){return function(){return M.apply(null,arguments)}},ht.cacheSignal=function(){return null},ht.cloneElement=function(M,w,G){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var ee=T({},M.props),Q=M.key;if(w!=null)for(H in w.key!==void 0&&(Q=""+w.key),w)!J.call(w,H)||H==="key"||H==="__self"||H==="__source"||H==="ref"&&w.ref===void 0||(ee[H]=w[H]);var H=arguments.length-2;if(H===1)ee.children=G;else if(1<H){for(var Y=Array(H),pe=0;pe<H;pe++)Y[pe]=arguments[pe+2];ee.children=Y}return L(M.type,Q,ee)},ht.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:c,_context:M},M},ht.createElement=function(M,w,G){var ee,Q={},H=null;if(w!=null)for(ee in w.key!==void 0&&(H=""+w.key),w)J.call(w,ee)&&ee!=="key"&&ee!=="__self"&&ee!=="__source"&&(Q[ee]=w[ee]);var Y=arguments.length-2;if(Y===1)Q.children=G;else if(1<Y){for(var pe=Array(Y),Te=0;Te<Y;Te++)pe[Te]=arguments[Te+2];Q.children=pe}if(M&&M.defaultProps)for(ee in Y=M.defaultProps,Y)Q[ee]===void 0&&(Q[ee]=Y[ee]);return L(M,H,Q)},ht.createRef=function(){return{current:null}},ht.forwardRef=function(M){return{$$typeof:d,render:M}},ht.isValidElement=Z,ht.lazy=function(M){return{$$typeof:g,_payload:{_status:-1,_result:M},_init:te}},ht.memo=function(M,w){return{$$typeof:m,type:M,compare:w===void 0?null:w}},ht.startTransition=function(M){var w=z.T,G={};z.T=G;try{var ee=M(),Q=z.S;Q!==null&&Q(G,ee),typeof ee=="object"&&ee!==null&&typeof ee.then=="function"&&ee.then(X,k)}catch(H){k(H)}finally{w!==null&&G.types!==null&&(w.types=G.types),z.T=w}},ht.unstable_useCacheRefresh=function(){return z.H.useCacheRefresh()},ht.use=function(M){return z.H.use(M)},ht.useActionState=function(M,w,G){return z.H.useActionState(M,w,G)},ht.useCallback=function(M,w){return z.H.useCallback(M,w)},ht.useContext=function(M){return z.H.useContext(M)},ht.useDebugValue=function(){},ht.useDeferredValue=function(M,w){return z.H.useDeferredValue(M,w)},ht.useEffect=function(M,w){return z.H.useEffect(M,w)},ht.useEffectEvent=function(M){return z.H.useEffectEvent(M)},ht.useId=function(){return z.H.useId()},ht.useImperativeHandle=function(M,w,G){return z.H.useImperativeHandle(M,w,G)},ht.useInsertionEffect=function(M,w){return z.H.useInsertionEffect(M,w)},ht.useLayoutEffect=function(M,w){return z.H.useLayoutEffect(M,w)},ht.useMemo=function(M,w){return z.H.useMemo(M,w)},ht.useOptimistic=function(M,w){return z.H.useOptimistic(M,w)},ht.useReducer=function(M,w,G){return z.H.useReducer(M,w,G)},ht.useRef=function(M){return z.H.useRef(M)},ht.useState=function(M){return z.H.useState(M)},ht.useSyncExternalStore=function(M,w,G){return z.H.useSyncExternalStore(M,w,G)},ht.useTransition=function(){return z.H.useTransition()},ht.version="19.2.0",ht}var av;function ap(){return av||(av=1,bd.exports=US()),bd.exports}var q=ap(),Td={exports:{}},Vo={},Ad={exports:{}},wd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function LS(){return rv||(rv=1,(function(s){function e(B,$){var te=B.length;B.push($);e:for(;0<te;){var k=te-1>>>1,U=B[k];if(0<l(U,$))B[k]=$,B[te]=U,te=k;else break e}}function i(B){return B.length===0?null:B[0]}function a(B){if(B.length===0)return null;var $=B[0],te=B.pop();if(te!==$){B[0]=te;e:for(var k=0,U=B.length,M=U>>>1;k<M;){var w=2*(k+1)-1,G=B[w],ee=w+1,Q=B[ee];if(0>l(G,te))ee<U&&0>l(Q,G)?(B[k]=Q,B[ee]=te,k=ee):(B[k]=G,B[w]=te,k=w);else if(ee<U&&0>l(Q,te))B[k]=Q,B[ee]=te,k=ee;else break e}}return $}function l(B,$){var te=B.sortIndex-$.sortIndex;return te!==0?te:B.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();s.unstable_now=function(){return f.now()-d}}var p=[],m=[],g=1,v=null,x=3,E=!1,b=!1,T=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function O(B){for(var $=i(m);$!==null;){if($.callback===null)a(m);else if($.startTime<=B)a(m),$.sortIndex=$.expirationTime,e(p,$);else break;$=i(m)}}function W(B){if(T=!1,O(B),!b)if(i(p)!==null)b=!0,X||(X=!0,se());else{var $=i(m);$!==null&&oe(W,$.startTime-B)}}var X=!1,z=-1,J=5,L=-1;function P(){return y?!0:!(s.unstable_now()-L<J)}function Z(){if(y=!1,X){var B=s.unstable_now();L=B;var $=!0;try{e:{b=!1,T&&(T=!1,C(z),z=-1),E=!0;var te=x;try{t:{for(O(B),v=i(p);v!==null&&!(v.expirationTime>B&&P());){var k=v.callback;if(typeof k=="function"){v.callback=null,x=v.priorityLevel;var U=k(v.expirationTime<=B);if(B=s.unstable_now(),typeof U=="function"){v.callback=U,O(B),$=!0;break t}v===i(p)&&a(p),O(B)}else a(p);v=i(p)}if(v!==null)$=!0;else{var M=i(m);M!==null&&oe(W,M.startTime-B),$=!1}}break e}finally{v=null,x=te,E=!1}$=void 0}}finally{$?se():X=!1}}}var se;if(typeof N=="function")se=function(){N(Z)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,ve=le.port2;le.port1.onmessage=Z,se=function(){ve.postMessage(null)}}else se=function(){_(Z,0)};function oe(B,$){z=_(function(){B(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var te=x;x=$;try{return B()}finally{x=te}},s.unstable_requestPaint=function(){y=!0},s.unstable_runWithPriority=function(B,$){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var te=x;x=B;try{return $()}finally{x=te}},s.unstable_scheduleCallback=function(B,$,te){var k=s.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?k+te:k):te=k,B){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=te+U,B={id:g++,callback:$,priorityLevel:B,startTime:te,expirationTime:U,sortIndex:-1},te>k?(B.sortIndex=te,e(m,B),i(p)===null&&B===i(m)&&(T?(C(z),z=-1):T=!0,oe(W,te-k))):(B.sortIndex=U,e(p,B),b||E||(b=!0,X||(X=!0,se()))),B},s.unstable_shouldYield=P,s.unstable_wrapCallback=function(B){var $=x;return function(){var te=x;x=$;try{return B.apply(this,arguments)}finally{x=te}}}})(wd)),wd}var sv;function OS(){return sv||(sv=1,Ad.exports=LS()),Ad.exports}var Rd={exports:{}},Nn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function PS(){if(ov)return Nn;ov=1;var s=ap();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Nn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Nn.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Nn.flushSync=function(p){var m=f.T,g=a.p;try{if(f.T=null,a.p=2,p)return p()}finally{f.T=m,a.p=g,a.d.f()}},Nn.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,a.d.C(p,m))},Nn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Nn.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),x=typeof m.integrity=="string"?m.integrity:void 0,E=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?a.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:E}):g==="script"&&a.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:E,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Nn.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);a.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&a.d.M(p)},Nn.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);a.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Nn.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);a.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else a.d.m(p)},Nn.requestFormReset=function(p){a.d.r(p)},Nn.unstable_batchedUpdates=function(p,m){return p(m)},Nn.useFormState=function(p,m,g){return f.H.useFormState(p,m,g)},Nn.useFormStatus=function(){return f.H.useHostTransitionStatus()},Nn.version="19.2.0",Nn}var lv;function IS(){if(lv)return Rd.exports;lv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Rd.exports=PS(),Rd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cv;function zS(){if(cv)return Vo;cv=1;var s=OS(),e=ap(),i=IS();function a(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var r=2;r<arguments.length;r++)n+="&args[]="+encodeURIComponent(arguments[r])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,r=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(r=n.return),t=n.return;while(t)}return n.tag===3?r:null}function f(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(a(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(a(188));return n!==t?null:t}for(var r=t,o=n;;){var u=r.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){r=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===r)return p(u),t;if(h===o)return p(u),n;h=h.sibling}throw Error(a(188))}if(r.return!==o.return)r=u,o=h;else{for(var S=!1,R=u.child;R;){if(R===r){S=!0,r=u,o=h;break}if(R===o){S=!0,o=u,r=h;break}R=R.sibling}if(!S){for(R=h.child;R;){if(R===r){S=!0,r=h,o=u;break}if(R===o){S=!0,o=h,r=u;break}R=R.sibling}if(!S)throw Error(a(189))}}if(r.alternate!==o)throw Error(a(190))}if(r.tag!==3)throw Error(a(188));return r.stateNode.current===r?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),E=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),C=Symbol.for("react.consumer"),N=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),X=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),Z=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=Z&&t[Z]||t["@@iterator"],typeof t=="function"?t:null)}var le=Symbol.for("react.client.reference");function ve(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===le?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case T:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case W:return"Suspense";case X:return"SuspenseList";case L:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case b:return"Portal";case N:return t.displayName||"Context";case C:return(t._context.displayName||"Context")+".Consumer";case O:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case z:return n=t.displayName||null,n!==null?n:ve(t.type)||"Memo";case J:n=t._payload,t=t._init;try{return ve(t(n))}catch{}}return null}var oe=Array.isArray,B=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te={pending:!1,data:null,method:null,action:null},k=[],U=-1;function M(t){return{current:t}}function w(t){0>U||(t.current=k[U],k[U]=null,U--)}function G(t,n){U++,k[U]=t.current,t.current=n}var ee=M(null),Q=M(null),H=M(null),Y=M(null);function pe(t,n){switch(G(H,n),G(Q,t),G(ee,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?b0(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=b0(n),t=T0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}w(ee),G(ee,t)}function Te(){w(ee),w(Q),w(H)}function Ne(t){t.memoizedState!==null&&G(Y,t);var n=ee.current,r=T0(n,t.type);n!==r&&(G(Q,t),G(ee,r))}function ke(t){Q.current===t&&(w(ee),w(Q)),Y.current===t&&(w(Y),zo._currentValue=te)}var lt,V;function Ge(t){if(lt===void 0)try{throw Error()}catch(r){var n=r.stack.trim().match(/\n( *(at )?)/);lt=n&&n[1]||"",V=-1<r.stack.indexOf(`
    at`)?" (<anonymous>)":-1<r.stack.indexOf("@")?"@unknown:0:0":""}return`
`+lt+t+V}var We=!1;function Xe(t,n){if(!t||We)return"";We=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ee=function(){throw Error()};if(Object.defineProperty(Ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ee,[])}catch(_e){var de=_e}Reflect.construct(t,[],Ee)}else{try{Ee.call()}catch(_e){de=_e}t.call(Ee.prototype)}}else{try{throw Error()}catch(_e){de=_e}(Ee=t())&&typeof Ee.catch=="function"&&Ee.catch(function(){})}}catch(_e){if(_e&&de&&typeof _e.stack=="string")return[_e.stack,de.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],R=h[1];if(S&&R){var j=S.split(`
`),fe=R.split(`
`);for(u=o=0;o<j.length&&!j[o].includes("DetermineComponentFrameRoot");)o++;for(;u<fe.length&&!fe[u].includes("DetermineComponentFrameRoot");)u++;if(o===j.length||u===fe.length)for(o=j.length-1,u=fe.length-1;1<=o&&0<=u&&j[o]!==fe[u];)u--;for(;1<=o&&0<=u;o--,u--)if(j[o]!==fe[u]){if(o!==1||u!==1)do if(o--,u--,0>u||j[o]!==fe[u]){var ye=`
`+j[o].replace(" at new "," at ");return t.displayName&&ye.includes("<anonymous>")&&(ye=ye.replace("<anonymous>",t.displayName)),ye}while(1<=o&&0<=u);break}}}finally{We=!1,Error.prepareStackTrace=r}return(r=t?t.displayName||t.name:"")?Ge(r):""}function Pe(t,n){switch(t.tag){case 26:case 27:case 5:return Ge(t.type);case 16:return Ge("Lazy");case 13:return t.child!==n&&n!==null?Ge("Suspense Fallback"):Ge("Suspense");case 19:return Ge("SuspenseList");case 0:case 15:return Xe(t.type,!1);case 11:return Xe(t.type.render,!1);case 1:return Xe(t.type,!0);case 31:return Ge("Activity");default:return""}}function _t(t){try{var n="",r=null;do n+=Pe(t,r),r=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Fe=Object.prototype.hasOwnProperty,st=s.unstable_scheduleCallback,$t=s.unstable_cancelCallback,Kt=s.unstable_shouldYield,F=s.unstable_requestPaint,A=s.unstable_now,ce=s.unstable_getCurrentPriorityLevel,Se=s.unstable_ImmediatePriority,we=s.unstable_UserBlockingPriority,xe=s.unstable_NormalPriority,et=s.unstable_LowPriority,Ue=s.unstable_IdlePriority,Ke=s.log,tt=s.unstable_setDisableYieldValue,Ce=null,Le=null;function it(t){if(typeof Ke=="function"&&tt(t),Le&&typeof Le.setStrictMode=="function")try{Le.setStrictMode(Ce,t)}catch{}}var Ve=Math.clz32?Math.clz32:ne,Ie=Math.log,pt=Math.LN2;function ne(t){return t>>>=0,t===0?32:31-(Ie(t)/pt|0)|0}var De=256,Oe=262144,je=4194304;function Re(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function be(t,n,r){var o=t.pendingLanes;if(o===0)return 0;var u=0,h=t.suspendedLanes,S=t.pingedLanes;t=t.warmLanes;var R=o&134217727;return R!==0?(o=R&~h,o!==0?u=Re(o):(S&=R,S!==0?u=Re(S):r||(r=R&~t,r!==0&&(u=Re(r))))):(R=o&~h,R!==0?u=Re(R):S!==0?u=Re(S):r||(r=o&~t,r!==0&&(u=Re(r)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,r=n&-n,h>=r||h===32&&(r&4194048)!==0)?n:u}function Ye(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function dt(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var t=je;return je<<=1,(je&62914560)===0&&(je=4194304),t}function Nt(t){for(var n=[],r=0;31>r;r++)n.push(t);return n}function On(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function li(t,n,r,o,u,h){var S=t.pendingLanes;t.pendingLanes=r,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=r,t.entangledLanes&=r,t.errorRecoveryDisabledLanes&=r,t.shellSuspendCounter=0;var R=t.entanglements,j=t.expirationTimes,fe=t.hiddenUpdates;for(r=S&~r;0<r;){var ye=31-Ve(r),Ee=1<<ye;R[ye]=0,j[ye]=-1;var de=fe[ye];if(de!==null)for(fe[ye]=null,ye=0;ye<de.length;ye++){var _e=de[ye];_e!==null&&(_e.lane&=-536870913)}r&=~Ee}o!==0&&Ks(t,o,0),h!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=h&~(S&~n))}function Ks(t,n,r){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Ve(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|r&261930}function Di(t,n){var r=t.entangledLanes|=n;for(t=t.entanglements;r;){var o=31-Ve(r),u=1<<o;u&n|t[o]&n&&(t[o]|=n),r&=~u}}function zr(t,n){var r=n&-n;return r=(r&42)!==0?1:Br(r),(r&(t.suspendedLanes|n))!==0?0:r}function Br(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Fr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ir(){var t=$.p;return t!==0?t:(t=window.event,t===void 0?32:Y0(t.type))}function Qs(t,n){var r=$.p;try{return $.p=t,n()}finally{$.p=r}}var Zn=Math.random().toString(36).slice(2),un="__reactFiber$"+Zn,En="__reactProps$"+Zn,Sa="__reactContainer$"+Zn,Js="__reactEvents$"+Zn,gu="__reactListeners$"+Zn,vu="__reactHandles$"+Zn,pl="__reactResources$"+Zn,ar="__reactMarker$"+Zn;function D(t){delete t[un],delete t[En],delete t[Js],delete t[gu],delete t[vu]}function ie(t){var n=t[un];if(n)return n;for(var r=t.parentNode;r;){if(n=r[Sa]||r[un]){if(r=n.alternate,n.child!==null||r!==null&&r.child!==null)for(t=U0(t);t!==null;){if(r=t[un])return r;t=U0(t)}return n}t=r,r=t.parentNode}return null}function he(t){if(t=t[un]||t[Sa]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ge(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(a(33))}function re(t){var n=t[pl];return n||(n=t[pl]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ae(t){t[ar]=!0}var ze=new Set,Qe={};function He(t,n){at(t,n),at(t+"Capture",n)}function at(t,n){for(Qe[t]=n,t=0;t<n.length;t++)ze.add(n[t])}var ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rt={},yt={};function Bt(t){return Fe.call(yt,t)?!0:Fe.call(rt,t)?!1:ut.test(t)?yt[t]=!0:(rt[t]=!0,!1)}function qt(t,n,r){if(Bt(n))if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+r)}}function Ft(t,n,r){if(r===null)t.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+r)}}function St(t,n,r,o){if(o===null)t.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(r);return}t.setAttributeNS(n,r,""+o)}}function Je(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Zt(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ut(t,n,r){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){r=""+S,h.call(this,S)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return r},setValue:function(S){r=""+S},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function bn(t){if(!t._valueTracker){var n=Zt(t)?"checked":"value";t._valueTracker=Ut(t,n,""+t[n])}}function Wi(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var r=n.getValue(),o="";return t&&(o=Zt(t)?t.checked?"true":"false":t.value),t=o,t!==r?(n.setValue(t),!0):!1}function yn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var rr=/[\n"\\]/g;function bt(t){return t.replace(rr,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Dn(t,n,r,o,u,h,S,R){t.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?t.type=S:t.removeAttribute("type"),n!=null?S==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Je(n)):t.value!==""+Je(n)&&(t.value=""+Je(n)):S!=="submit"&&S!=="reset"||t.removeAttribute("value"),n!=null?gn(t,S,Je(n)):r!=null?gn(t,S,Je(r)):o!=null&&t.removeAttribute("value"),u==null&&h!=null&&(t.defaultChecked=!!h),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?t.name=""+Je(R):t.removeAttribute("name")}function Pn(t,n,r,o,u,h,S,R){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(t.type=h),n!=null||r!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){bn(t);return}r=r!=null?""+Je(r):"",n=n!=null?""+Je(n):r,R||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=R?t.checked:!!o,t.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(t.name=S),bn(t)}function gn(t,n,r){n==="number"&&yn(t.ownerDocument)===t||t.defaultValue===""+r||(t.defaultValue=""+r)}function on(t,n,r,o){if(t=t.options,n){n={};for(var u=0;u<r.length;u++)n["$"+r[u]]=!0;for(r=0;r<t.length;r++)u=n.hasOwnProperty("$"+t[r].value),t[r].selected!==u&&(t[r].selected=u),u&&o&&(t[r].defaultSelected=!0)}else{for(r=""+Je(r),n=null,u=0;u<t.length;u++){if(t[u].value===r){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Hr(t,n,r){if(n!=null&&(n=""+Je(n),n!==t.value&&(t.value=n),r==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=r!=null?""+Je(r):""}function Ni(t,n,r,o){if(n==null){if(o!=null){if(r!=null)throw Error(a(92));if(oe(o)){if(1<o.length)throw Error(a(93));o=o[0]}r=o}r==null&&(r=""),n=r}r=Je(n),t.defaultValue=r,o=t.textContent,o===r&&o!==""&&o!==null&&(t.value=o),bn(t)}function Gr(t,n){if(n){var r=t.firstChild;if(r&&r===t.lastChild&&r.nodeType===3){r.nodeValue=n;return}}t.textContent=n}var bx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sp(t,n,r){var o=n.indexOf("--")===0;r==null||typeof r=="boolean"||r===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,r):typeof r!="number"||r===0||bx.has(n)?n==="float"?t.cssFloat=r:t[n]=(""+r).trim():t[n]=r+"px"}function Mp(t,n,r){if(n!=null&&typeof n!="object")throw Error(a(62));if(t=t.style,r!=null){for(var o in r)!r.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&r[u]!==o&&Sp(t,u,o)}else for(var h in n)n.hasOwnProperty(h)&&Sp(t,h,n[h])}function _u(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ax=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ml(t){return Ax.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Xi(){}var xu=null;function yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Vr=null,kr=null;function Ep(t){var n=he(t);if(n&&(t=n.stateNode)){var r=t[En]||null;e:switch(t=n.stateNode,n.type){case"input":if(Dn(t,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name),n=r.name,r.type==="radio"&&n!=null){for(r=t;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll('input[name="'+bt(""+n)+'"][type="radio"]'),n=0;n<r.length;n++){var o=r[n];if(o!==t&&o.form===t.form){var u=o[En]||null;if(!u)throw Error(a(90));Dn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<r.length;n++)o=r[n],o.form===t.form&&Wi(o)}break e;case"textarea":Hr(t,r.value,r.defaultValue);break e;case"select":n=r.value,n!=null&&on(t,!!r.multiple,n,!1)}}}var Su=!1;function bp(t,n,r){if(Su)return t(n,r);Su=!0;try{var o=t(n);return o}finally{if(Su=!1,(Vr!==null||kr!==null)&&(nc(),Vr&&(n=Vr,t=kr,kr=Vr=null,Ep(n),t)))for(n=0;n<t.length;n++)Ep(t[n])}}function $s(t,n){var r=t.stateNode;if(r===null)return null;var o=r[En]||null;if(o===null)return null;r=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(r&&typeof r!="function")throw Error(a(231,n,typeof r));return r}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mu=!1;if(ji)try{var eo={};Object.defineProperty(eo,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",eo,eo),window.removeEventListener("test",eo,eo)}catch{Mu=!1}var Ma=null,Eu=null,gl=null;function Tp(){if(gl)return gl;var t,n=Eu,r=n.length,o,u="value"in Ma?Ma.value:Ma.textContent,h=u.length;for(t=0;t<r&&n[t]===u[t];t++);var S=r-t;for(o=1;o<=S&&n[r-o]===u[h-o];o++);return gl=u.slice(t,1<o?1-o:void 0)}function vl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function _l(){return!0}function Ap(){return!1}function Bn(t){function n(r,o,u,h,S){this._reactName=r,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var R in t)t.hasOwnProperty(R)&&(r=t[R],this[R]=r?r(h):h[R]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?_l:Ap,this.isPropagationStopped=Ap,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),n}var sr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xl=Bn(sr),to=v({},sr,{view:0,detail:0}),wx=Bn(to),bu,Tu,no,yl=v({},to,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==no&&(no&&t.type==="mousemove"?(bu=t.screenX-no.screenX,Tu=t.screenY-no.screenY):Tu=bu=0,no=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Tu}}),wp=Bn(yl),Rx=v({},yl,{dataTransfer:0}),Cx=Bn(Rx),Dx=v({},to,{relatedTarget:0}),Au=Bn(Dx),Nx=v({},sr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ux=Bn(Nx),Lx=v({},sr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ox=Bn(Lx),Px=v({},sr,{data:0}),Rp=Bn(Px),Ix={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fx(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Bx[t])?!!n[t]:!1}function wu(){return Fx}var Hx=v({},to,{key:function(t){if(t.key){var n=Ix[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?zx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wu,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Gx=Bn(Hx),Vx=v({},yl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cp=Bn(Vx),kx=v({},to,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wu}),Wx=Bn(kx),Xx=v({},sr,{propertyName:0,elapsedTime:0,pseudoElement:0}),jx=Bn(Xx),qx=v({},yl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yx=Bn(qx),Zx=v({},sr,{newState:0,oldState:0}),Kx=Bn(Zx),Qx=[9,13,27,32],Ru=ji&&"CompositionEvent"in window,io=null;ji&&"documentMode"in document&&(io=document.documentMode);var Jx=ji&&"TextEvent"in window&&!io,Dp=ji&&(!Ru||io&&8<io&&11>=io),Np=" ",Up=!1;function Lp(t,n){switch(t){case"keyup":return Qx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wr=!1;function $x(t,n){switch(t){case"compositionend":return Op(n);case"keypress":return n.which!==32?null:(Up=!0,Np);case"textInput":return t=n.data,t===Np&&Up?null:t;default:return null}}function ey(t,n){if(Wr)return t==="compositionend"||!Ru&&Lp(t,n)?(t=Tp(),gl=Eu=Ma=null,Wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dp&&n.locale!=="ko"?null:n.data;default:return null}}var ty={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pp(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!ty[t.type]:n==="textarea"}function Ip(t,n,r,o){Vr?kr?kr.push(o):kr=[o]:Vr=o,n=cc(n,"onChange"),0<n.length&&(r=new xl("onChange","change",null,r,o),t.push({event:r,listeners:n}))}var ao=null,ro=null;function ny(t){_0(t,0)}function Sl(t){var n=ge(t);if(Wi(n))return t}function zp(t,n){if(t==="change")return n}var Bp=!1;if(ji){var Cu;if(ji){var Du="oninput"in document;if(!Du){var Fp=document.createElement("div");Fp.setAttribute("oninput","return;"),Du=typeof Fp.oninput=="function"}Cu=Du}else Cu=!1;Bp=Cu&&(!document.documentMode||9<document.documentMode)}function Hp(){ao&&(ao.detachEvent("onpropertychange",Gp),ro=ao=null)}function Gp(t){if(t.propertyName==="value"&&Sl(ro)){var n=[];Ip(n,ro,t,yu(t)),bp(ny,n)}}function iy(t,n,r){t==="focusin"?(Hp(),ao=n,ro=r,ao.attachEvent("onpropertychange",Gp)):t==="focusout"&&Hp()}function ay(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Sl(ro)}function ry(t,n){if(t==="click")return Sl(n)}function sy(t,n){if(t==="input"||t==="change")return Sl(n)}function oy(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:oy;function so(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var r=Object.keys(t),o=Object.keys(n);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var u=r[o];if(!Fe.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function Vp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function kp(t,n){var r=Vp(t);t=0;for(var o;r;){if(r.nodeType===3){if(o=t+r.textContent.length,t<=n&&o>=n)return{node:r,offset:n-t};t=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Vp(r)}}function Wp(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Wp(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xp(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=yn(t.document);n instanceof t.HTMLIFrameElement;){try{var r=typeof n.contentWindow.location.href=="string"}catch{r=!1}if(r)t=n.contentWindow;else break;n=yn(t.document)}return n}function Nu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var ly=ji&&"documentMode"in document&&11>=document.documentMode,Xr=null,Uu=null,oo=null,Lu=!1;function jp(t,n,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Lu||Xr==null||Xr!==yn(o)||(o=Xr,"selectionStart"in o&&Nu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),oo&&so(oo,o)||(oo=o,o=cc(Uu,"onSelect"),0<o.length&&(n=new xl("onSelect","select",null,n,r),t.push({event:n,listeners:o}),n.target=Xr)))}function or(t,n){var r={};return r[t.toLowerCase()]=n.toLowerCase(),r["Webkit"+t]="webkit"+n,r["Moz"+t]="moz"+n,r}var jr={animationend:or("Animation","AnimationEnd"),animationiteration:or("Animation","AnimationIteration"),animationstart:or("Animation","AnimationStart"),transitionrun:or("Transition","TransitionRun"),transitionstart:or("Transition","TransitionStart"),transitioncancel:or("Transition","TransitionCancel"),transitionend:or("Transition","TransitionEnd")},Ou={},qp={};ji&&(qp=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function lr(t){if(Ou[t])return Ou[t];if(!jr[t])return t;var n=jr[t],r;for(r in n)if(n.hasOwnProperty(r)&&r in qp)return Ou[t]=n[r];return t}var Yp=lr("animationend"),Zp=lr("animationiteration"),Kp=lr("animationstart"),cy=lr("transitionrun"),uy=lr("transitionstart"),fy=lr("transitioncancel"),Qp=lr("transitionend"),Jp=new Map,Pu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pu.push("scrollEnd");function yi(t,n){Jp.set(t,n),He(n,[t])}var Ml=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ci=[],qr=0,Iu=0;function El(){for(var t=qr,n=Iu=qr=0;n<t;){var r=ci[n];ci[n++]=null;var o=ci[n];ci[n++]=null;var u=ci[n];ci[n++]=null;var h=ci[n];if(ci[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&$p(r,u,h)}}function bl(t,n,r,o){ci[qr++]=t,ci[qr++]=n,ci[qr++]=r,ci[qr++]=o,Iu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function zu(t,n,r,o){return bl(t,n,r,o),Tl(t)}function cr(t,n){return bl(t,null,null,n),Tl(t)}function $p(t,n,r){t.lanes|=r;var o=t.alternate;o!==null&&(o.lanes|=r);for(var u=!1,h=t.return;h!==null;)h.childLanes|=r,o=h.alternate,o!==null&&(o.childLanes|=r),h.tag===22&&(t=h.stateNode,t===null||t._visibility&1||(u=!0)),t=h,h=h.return;return t.tag===3?(h=t.stateNode,u&&n!==null&&(u=31-Ve(r),t=h.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=r|536870912),h):null}function Tl(t){if(50<Do)throw Do=0,qf=null,Error(a(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Yr={};function dy(t,n,r,o){this.tag=t,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,r,o){return new dy(t,n,r,o)}function Bu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function qi(t,n){var r=t.alternate;return r===null?(r=Qn(t.tag,n,t.key,t.mode),r.elementType=t.elementType,r.type=t.type,r.stateNode=t.stateNode,r.alternate=t,t.alternate=r):(r.pendingProps=n,r.type=t.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=t.flags&65011712,r.childLanes=t.childLanes,r.lanes=t.lanes,r.child=t.child,r.memoizedProps=t.memoizedProps,r.memoizedState=t.memoizedState,r.updateQueue=t.updateQueue,n=t.dependencies,r.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},r.sibling=t.sibling,r.index=t.index,r.ref=t.ref,r.refCleanup=t.refCleanup,r}function em(t,n){t.flags&=65011714;var r=t.alternate;return r===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=r.childLanes,t.lanes=r.lanes,t.child=r.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=r.memoizedProps,t.memoizedState=r.memoizedState,t.updateQueue=r.updateQueue,t.type=r.type,n=r.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Al(t,n,r,o,u,h){var S=0;if(o=t,typeof t=="function")Bu(t)&&(S=1);else if(typeof t=="string")S=vS(t,r,ee.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case L:return t=Qn(31,r,n,u),t.elementType=L,t.lanes=h,t;case T:return ur(r.children,u,h,n);case y:S=8,u|=24;break;case _:return t=Qn(12,r,n,u|2),t.elementType=_,t.lanes=h,t;case W:return t=Qn(13,r,n,u),t.elementType=W,t.lanes=h,t;case X:return t=Qn(19,r,n,u),t.elementType=X,t.lanes=h,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case N:S=10;break e;case C:S=9;break e;case O:S=11;break e;case z:S=14;break e;case J:S=16,o=null;break e}S=29,r=Error(a(130,t===null?"null":typeof t,"")),o=null}return n=Qn(S,r,n,u),n.elementType=t,n.type=o,n.lanes=h,n}function ur(t,n,r,o){return t=Qn(7,t,o,n),t.lanes=r,t}function Fu(t,n,r){return t=Qn(6,t,null,n),t.lanes=r,t}function tm(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function Hu(t,n,r){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=r,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var nm=new WeakMap;function ui(t,n){if(typeof t=="object"&&t!==null){var r=nm.get(t);return r!==void 0?r:(n={value:t,source:n,stack:_t(n)},nm.set(t,n),n)}return{value:t,source:n,stack:_t(n)}}var Zr=[],Kr=0,wl=null,lo=0,fi=[],di=0,Ea=null,Ui=1,Li="";function Yi(t,n){Zr[Kr++]=lo,Zr[Kr++]=wl,wl=t,lo=n}function im(t,n,r){fi[di++]=Ui,fi[di++]=Li,fi[di++]=Ea,Ea=t;var o=Ui;t=Li;var u=32-Ve(o)-1;o&=~(1<<u),r+=1;var h=32-Ve(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Ui=1<<32-Ve(n)+u|r<<u|o,Li=h+t}else Ui=1<<h|r<<u|o,Li=t}function Gu(t){t.return!==null&&(Yi(t,1),im(t,1,0))}function Vu(t){for(;t===wl;)wl=Zr[--Kr],Zr[Kr]=null,lo=Zr[--Kr],Zr[Kr]=null;for(;t===Ea;)Ea=fi[--di],fi[di]=null,Li=fi[--di],fi[di]=null,Ui=fi[--di],fi[di]=null}function am(t,n){fi[di++]=Ui,fi[di++]=Li,fi[di++]=Ea,Ui=n.id,Li=n.overflow,Ea=t}var Tn=null,Qt=null,Ct=!1,ba=null,hi=!1,ku=Error(a(519));function Ta(t){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw co(ui(n,t)),ku}function rm(t){var n=t.stateNode,r=t.type,o=t.memoizedProps;switch(n[un]=t,n[En]=o,r){case"dialog":Et("cancel",n),Et("close",n);break;case"iframe":case"object":case"embed":Et("load",n);break;case"video":case"audio":for(r=0;r<Uo.length;r++)Et(Uo[r],n);break;case"source":Et("error",n);break;case"img":case"image":case"link":Et("error",n),Et("load",n);break;case"details":Et("toggle",n);break;case"input":Et("invalid",n),Pn(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Et("invalid",n);break;case"textarea":Et("invalid",n),Ni(n,o.value,o.defaultValue,o.children)}r=o.children,typeof r!="string"&&typeof r!="number"&&typeof r!="bigint"||n.textContent===""+r||o.suppressHydrationWarning===!0||M0(n.textContent,r)?(o.popover!=null&&(Et("beforetoggle",n),Et("toggle",n)),o.onScroll!=null&&Et("scroll",n),o.onScrollEnd!=null&&Et("scrollend",n),o.onClick!=null&&(n.onclick=Xi),n=!0):n=!1,n||Ta(t,!0)}function sm(t){for(Tn=t.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:hi=!1;return;case 27:case 3:hi=!0;return;default:Tn=Tn.return}}function Qr(t){if(t!==Tn)return!1;if(!Ct)return sm(t),Ct=!0,!1;var n=t.tag,r;if((r=n!==3&&n!==27)&&((r=n===5)&&(r=t.type,r=!(r!=="form"&&r!=="button")||ld(t.type,t.memoizedProps)),r=!r),r&&Qt&&Ta(t),sm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qt=N0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(317));Qt=N0(t)}else n===27?(n=Qt,Fa(t.type)?(t=hd,hd=null,Qt=t):Qt=n):Qt=Tn?mi(t.stateNode.nextSibling):null;return!0}function fr(){Qt=Tn=null,Ct=!1}function Wu(){var t=ba;return t!==null&&(Vn===null?Vn=t:Vn.push.apply(Vn,t),ba=null),t}function co(t){ba===null?ba=[t]:ba.push(t)}var Xu=M(null),dr=null,Zi=null;function Aa(t,n,r){G(Xu,n._currentValue),n._currentValue=r}function Ki(t){t._currentValue=Xu.current,w(Xu)}function ju(t,n,r){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===r)break;t=t.return}}function qu(t,n,r,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;e:for(;h!==null;){var R=h;h=u;for(var j=0;j<n.length;j++)if(R.context===n[j]){h.lanes|=r,R=h.alternate,R!==null&&(R.lanes|=r),ju(h.return,r,t),o||(S=null);break e}h=R.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(a(341));S.lanes|=r,h=S.alternate,h!==null&&(h.lanes|=r),ju(S,r,t),S=null}else S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===t){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Jr(t,n,r,o){t=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var R=u.type;Kn(u.pendingProps.value,S.value)||(t!==null?t.push(R):t=[R])}}else if(u===Y.current){if(S=u.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(zo):t=[zo])}u=u.return}t!==null&&qu(n,t,r,o),n.flags|=262144}function Rl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function hr(t){dr=t,Zi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function An(t){return om(dr,t)}function Cl(t,n){return dr===null&&hr(t),om(t,n)}function om(t,n){var r=n._currentValue;if(n={context:n,memoizedValue:r,next:null},Zi===null){if(t===null)throw Error(a(308));Zi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Zi=Zi.next=n;return r}var hy=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(r,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(r){return r()})}},py=s.unstable_scheduleCallback,my=s.unstable_NormalPriority,fn={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Yu(){return{controller:new hy,data:new Map,refCount:0}}function uo(t){t.refCount--,t.refCount===0&&py(my,function(){t.controller.abort()})}var fo=null,Zu=0,$r=0,es=null;function gy(t,n){if(fo===null){var r=fo=[];Zu=0,$r=$f(),es={status:"pending",value:void 0,then:function(o){r.push(o)}}}return Zu++,n.then(lm,lm),n}function lm(){if(--Zu===0&&fo!==null){es!==null&&(es.status="fulfilled");var t=fo;fo=null,$r=0,es=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function vy(t,n){var r=[],o={status:"pending",value:null,reason:null,then:function(u){r.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<r.length;u++)(0,r[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<r.length;u++)(0,r[u])(void 0)}),o}var cm=B.S;B.S=function(t,n){jg=A(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&gy(t,n),cm!==null&&cm(t,n)};var pr=M(null);function Ku(){var t=pr.current;return t!==null?t:Yt.pooledCache}function Dl(t,n){n===null?G(pr,pr.current):G(pr,n.pool)}function um(){var t=Ku();return t===null?null:{parent:fn._currentValue,pool:t}}var ts=Error(a(460)),Qu=Error(a(474)),Nl=Error(a(542)),Ul={then:function(){}};function fm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dm(t,n,r){switch(r=t[r],r===void 0?t.push(n):r!==n&&(n.then(Xi,Xi),n=r),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t;default:if(typeof n.status=="string")n.then(Xi,Xi);else{if(t=Yt,t!==null&&100<t.shellSuspendCounter)throw Error(a(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,pm(t),t}throw gr=n,ts}}function mr(t){try{var n=t._init;return n(t._payload)}catch(r){throw r!==null&&typeof r=="object"&&typeof r.then=="function"?(gr=r,ts):r}}var gr=null;function hm(){if(gr===null)throw Error(a(459));var t=gr;return gr=null,t}function pm(t){if(t===ts||t===Nl)throw Error(a(483))}var ns=null,ho=0;function Ll(t){var n=ho;return ho+=1,ns===null&&(ns=[]),dm(ns,t,n)}function po(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Ol(t,n){throw n.$$typeof===x?Error(a(525)):(t=Object.prototype.toString.call(n),Error(a(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function mm(t){function n(ae,K){if(t){var ue=ae.deletions;ue===null?(ae.deletions=[K],ae.flags|=16):ue.push(K)}}function r(ae,K){if(!t)return null;for(;K!==null;)n(ae,K),K=K.sibling;return null}function o(ae){for(var K=new Map;ae!==null;)ae.key!==null?K.set(ae.key,ae):K.set(ae.index,ae),ae=ae.sibling;return K}function u(ae,K){return ae=qi(ae,K),ae.index=0,ae.sibling=null,ae}function h(ae,K,ue){return ae.index=ue,t?(ue=ae.alternate,ue!==null?(ue=ue.index,ue<K?(ae.flags|=67108866,K):ue):(ae.flags|=67108866,K)):(ae.flags|=1048576,K)}function S(ae){return t&&ae.alternate===null&&(ae.flags|=67108866),ae}function R(ae,K,ue,Me){return K===null||K.tag!==6?(K=Fu(ue,ae.mode,Me),K.return=ae,K):(K=u(K,ue),K.return=ae,K)}function j(ae,K,ue,Me){var ot=ue.type;return ot===T?ye(ae,K,ue.props.children,Me,ue.key):K!==null&&(K.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&mr(ot)===K.type)?(K=u(K,ue.props),po(K,ue),K.return=ae,K):(K=Al(ue.type,ue.key,ue.props,null,ae.mode,Me),po(K,ue),K.return=ae,K)}function fe(ae,K,ue,Me){return K===null||K.tag!==4||K.stateNode.containerInfo!==ue.containerInfo||K.stateNode.implementation!==ue.implementation?(K=Hu(ue,ae.mode,Me),K.return=ae,K):(K=u(K,ue.children||[]),K.return=ae,K)}function ye(ae,K,ue,Me,ot){return K===null||K.tag!==7?(K=ur(ue,ae.mode,Me,ot),K.return=ae,K):(K=u(K,ue),K.return=ae,K)}function Ee(ae,K,ue){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Fu(""+K,ae.mode,ue),K.return=ae,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case E:return ue=Al(K.type,K.key,K.props,null,ae.mode,ue),po(ue,K),ue.return=ae,ue;case b:return K=Hu(K,ae.mode,ue),K.return=ae,K;case J:return K=mr(K),Ee(ae,K,ue)}if(oe(K)||se(K))return K=ur(K,ae.mode,ue,null),K.return=ae,K;if(typeof K.then=="function")return Ee(ae,Ll(K),ue);if(K.$$typeof===N)return Ee(ae,Cl(ae,K),ue);Ol(ae,K)}return null}function de(ae,K,ue,Me){var ot=K!==null?K.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint")return ot!==null?null:R(ae,K,""+ue,Me);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case E:return ue.key===ot?j(ae,K,ue,Me):null;case b:return ue.key===ot?fe(ae,K,ue,Me):null;case J:return ue=mr(ue),de(ae,K,ue,Me)}if(oe(ue)||se(ue))return ot!==null?null:ye(ae,K,ue,Me,null);if(typeof ue.then=="function")return de(ae,K,Ll(ue),Me);if(ue.$$typeof===N)return de(ae,K,Cl(ae,ue),Me);Ol(ae,ue)}return null}function _e(ae,K,ue,Me,ot){if(typeof Me=="string"&&Me!==""||typeof Me=="number"||typeof Me=="bigint")return ae=ae.get(ue)||null,R(K,ae,""+Me,ot);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case E:return ae=ae.get(Me.key===null?ue:Me.key)||null,j(K,ae,Me,ot);case b:return ae=ae.get(Me.key===null?ue:Me.key)||null,fe(K,ae,Me,ot);case J:return Me=mr(Me),_e(ae,K,ue,Me,ot)}if(oe(Me)||se(Me))return ae=ae.get(ue)||null,ye(K,ae,Me,ot,null);if(typeof Me.then=="function")return _e(ae,K,ue,Ll(Me),ot);if(Me.$$typeof===N)return _e(ae,K,ue,Cl(K,Me),ot);Ol(K,Me)}return null}function Ze(ae,K,ue,Me){for(var ot=null,Lt=null,nt=K,gt=K=0,At=null;nt!==null&&gt<ue.length;gt++){nt.index>gt?(At=nt,nt=null):At=nt.sibling;var Ot=de(ae,nt,ue[gt],Me);if(Ot===null){nt===null&&(nt=At);break}t&&nt&&Ot.alternate===null&&n(ae,nt),K=h(Ot,K,gt),Lt===null?ot=Ot:Lt.sibling=Ot,Lt=Ot,nt=At}if(gt===ue.length)return r(ae,nt),Ct&&Yi(ae,gt),ot;if(nt===null){for(;gt<ue.length;gt++)nt=Ee(ae,ue[gt],Me),nt!==null&&(K=h(nt,K,gt),Lt===null?ot=nt:Lt.sibling=nt,Lt=nt);return Ct&&Yi(ae,gt),ot}for(nt=o(nt);gt<ue.length;gt++)At=_e(nt,ae,gt,ue[gt],Me),At!==null&&(t&&At.alternate!==null&&nt.delete(At.key===null?gt:At.key),K=h(At,K,gt),Lt===null?ot=At:Lt.sibling=At,Lt=At);return t&&nt.forEach(function(Wa){return n(ae,Wa)}),Ct&&Yi(ae,gt),ot}function ct(ae,K,ue,Me){if(ue==null)throw Error(a(151));for(var ot=null,Lt=null,nt=K,gt=K=0,At=null,Ot=ue.next();nt!==null&&!Ot.done;gt++,Ot=ue.next()){nt.index>gt?(At=nt,nt=null):At=nt.sibling;var Wa=de(ae,nt,Ot.value,Me);if(Wa===null){nt===null&&(nt=At);break}t&&nt&&Wa.alternate===null&&n(ae,nt),K=h(Wa,K,gt),Lt===null?ot=Wa:Lt.sibling=Wa,Lt=Wa,nt=At}if(Ot.done)return r(ae,nt),Ct&&Yi(ae,gt),ot;if(nt===null){for(;!Ot.done;gt++,Ot=ue.next())Ot=Ee(ae,Ot.value,Me),Ot!==null&&(K=h(Ot,K,gt),Lt===null?ot=Ot:Lt.sibling=Ot,Lt=Ot);return Ct&&Yi(ae,gt),ot}for(nt=o(nt);!Ot.done;gt++,Ot=ue.next())Ot=_e(nt,ae,gt,Ot.value,Me),Ot!==null&&(t&&Ot.alternate!==null&&nt.delete(Ot.key===null?gt:Ot.key),K=h(Ot,K,gt),Lt===null?ot=Ot:Lt.sibling=Ot,Lt=Ot);return t&&nt.forEach(function(RS){return n(ae,RS)}),Ct&&Yi(ae,gt),ot}function Xt(ae,K,ue,Me){if(typeof ue=="object"&&ue!==null&&ue.type===T&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case E:e:{for(var ot=ue.key;K!==null;){if(K.key===ot){if(ot=ue.type,ot===T){if(K.tag===7){r(ae,K.sibling),Me=u(K,ue.props.children),Me.return=ae,ae=Me;break e}}else if(K.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===J&&mr(ot)===K.type){r(ae,K.sibling),Me=u(K,ue.props),po(Me,ue),Me.return=ae,ae=Me;break e}r(ae,K);break}else n(ae,K);K=K.sibling}ue.type===T?(Me=ur(ue.props.children,ae.mode,Me,ue.key),Me.return=ae,ae=Me):(Me=Al(ue.type,ue.key,ue.props,null,ae.mode,Me),po(Me,ue),Me.return=ae,ae=Me)}return S(ae);case b:e:{for(ot=ue.key;K!==null;){if(K.key===ot)if(K.tag===4&&K.stateNode.containerInfo===ue.containerInfo&&K.stateNode.implementation===ue.implementation){r(ae,K.sibling),Me=u(K,ue.children||[]),Me.return=ae,ae=Me;break e}else{r(ae,K);break}else n(ae,K);K=K.sibling}Me=Hu(ue,ae.mode,Me),Me.return=ae,ae=Me}return S(ae);case J:return ue=mr(ue),Xt(ae,K,ue,Me)}if(oe(ue))return Ze(ae,K,ue,Me);if(se(ue)){if(ot=se(ue),typeof ot!="function")throw Error(a(150));return ue=ot.call(ue),ct(ae,K,ue,Me)}if(typeof ue.then=="function")return Xt(ae,K,Ll(ue),Me);if(ue.$$typeof===N)return Xt(ae,K,Cl(ae,ue),Me);Ol(ae,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"||typeof ue=="bigint"?(ue=""+ue,K!==null&&K.tag===6?(r(ae,K.sibling),Me=u(K,ue),Me.return=ae,ae=Me):(r(ae,K),Me=Fu(ue,ae.mode,Me),Me.return=ae,ae=Me),S(ae)):r(ae,K)}return function(ae,K,ue,Me){try{ho=0;var ot=Xt(ae,K,ue,Me);return ns=null,ot}catch(nt){if(nt===ts||nt===Nl)throw nt;var Lt=Qn(29,nt,null,ae.mode);return Lt.lanes=Me,Lt.return=ae,Lt}finally{}}}var vr=mm(!0),gm=mm(!1),wa=!1;function Ju(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $u(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Ra(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ca(t,n,r){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(zt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Tl(t),$p(t,null,r),n}return bl(t,o,n,r),Tl(t)}function mo(t,n,r){if(n=n.updateQueue,n!==null&&(n=n.shared,(r&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Di(t,r)}}function ef(t,n){var r=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var u=null,h=null;if(r=r.firstBaseUpdate,r!==null){do{var S={lane:r.lane,tag:r.tag,payload:r.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,r=r.next}while(r!==null);h===null?u=h=n:h=h.next=n}else u=h=n;r={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},t.updateQueue=r;return}t=r.lastBaseUpdate,t===null?r.firstBaseUpdate=n:t.next=n,r.lastBaseUpdate=n}var tf=!1;function go(){if(tf){var t=es;if(t!==null)throw t}}function vo(t,n,r,o){tf=!1;var u=t.updateQueue;wa=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,R=u.shared.pending;if(R!==null){u.shared.pending=null;var j=R,fe=j.next;j.next=null,S===null?h=fe:S.next=fe,S=j;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,R=ye.lastBaseUpdate,R!==S&&(R===null?ye.firstBaseUpdate=fe:R.next=fe,ye.lastBaseUpdate=j))}if(h!==null){var Ee=u.baseState;S=0,ye=fe=j=null,R=h;do{var de=R.lane&-536870913,_e=de!==R.lane;if(_e?(Tt&de)===de:(o&de)===de){de!==0&&de===$r&&(tf=!0),ye!==null&&(ye=ye.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var Ze=t,ct=R;de=n;var Xt=r;switch(ct.tag){case 1:if(Ze=ct.payload,typeof Ze=="function"){Ee=Ze.call(Xt,Ee,de);break e}Ee=Ze;break e;case 3:Ze.flags=Ze.flags&-65537|128;case 0:if(Ze=ct.payload,de=typeof Ze=="function"?Ze.call(Xt,Ee,de):Ze,de==null)break e;Ee=v({},Ee,de);break e;case 2:wa=!0}}de=R.callback,de!==null&&(t.flags|=64,_e&&(t.flags|=8192),_e=u.callbacks,_e===null?u.callbacks=[de]:_e.push(de))}else _e={lane:de,tag:R.tag,payload:R.payload,callback:R.callback,next:null},ye===null?(fe=ye=_e,j=Ee):ye=ye.next=_e,S|=de;if(R=R.next,R===null){if(R=u.shared.pending,R===null)break;_e=R,R=_e.next,_e.next=null,u.lastBaseUpdate=_e,u.shared.pending=null}}while(!0);ye===null&&(j=Ee),u.baseState=j,u.firstBaseUpdate=fe,u.lastBaseUpdate=ye,h===null&&(u.shared.lanes=0),Oa|=S,t.lanes=S,t.memoizedState=Ee}}function vm(t,n){if(typeof t!="function")throw Error(a(191,t));t.call(n)}function _m(t,n){var r=t.callbacks;if(r!==null)for(t.callbacks=null,t=0;t<r.length;t++)vm(r[t],n)}var is=M(null),Pl=M(0);function xm(t,n){t=ra,G(Pl,t),G(is,n),ra=t|n.baseLanes}function nf(){G(Pl,ra),G(is,is.current)}function af(){ra=Pl.current,w(is),w(Pl)}var Jn=M(null),pi=null;function Da(t){var n=t.alternate;G(ln,ln.current&1),G(Jn,t),pi===null&&(n===null||is.current!==null||n.memoizedState!==null)&&(pi=t)}function rf(t){G(ln,ln.current),G(Jn,t),pi===null&&(pi=t)}function ym(t){t.tag===22?(G(ln,ln.current),G(Jn,t),pi===null&&(pi=t)):Na()}function Na(){G(ln,ln.current),G(Jn,Jn.current)}function $n(t){w(Jn),pi===t&&(pi=null),w(ln)}var ln=M(0);function Il(t){for(var n=t;n!==null;){if(n.tag===13){var r=n.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||fd(r)||dd(r)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Qi=0,mt=null,kt=null,dn=null,zl=!1,as=!1,_r=!1,Bl=0,_o=0,rs=null,_y=0;function nn(){throw Error(a(321))}function sf(t,n){if(n===null)return!1;for(var r=0;r<n.length&&r<t.length;r++)if(!Kn(t[r],n[r]))return!1;return!0}function of(t,n,r,o,u,h){return Qi=h,mt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=t===null||t.memoizedState===null?ig:Mf,_r=!1,h=r(o,u),_r=!1,as&&(h=Mm(n,r,o,u)),Sm(t),h}function Sm(t){B.H=So;var n=kt!==null&&kt.next!==null;if(Qi=0,dn=kt=mt=null,zl=!1,_o=0,rs=null,n)throw Error(a(300));t===null||hn||(t=t.dependencies,t!==null&&Rl(t)&&(hn=!0))}function Mm(t,n,r,o){mt=t;var u=0;do{if(as&&(rs=null),_o=0,as=!1,25<=u)throw Error(a(301));if(u+=1,dn=kt=null,t.updateQueue!=null){var h=t.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=ag,h=n(r,o)}while(as);return h}function xy(){var t=B.H,n=t.useState()[0];return n=typeof n.then=="function"?xo(n):n,t=t.useState()[0],(kt!==null?kt.memoizedState:null)!==t&&(mt.flags|=1024),n}function lf(){var t=Bl!==0;return Bl=0,t}function cf(t,n,r){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~r}function uf(t){if(zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}zl=!1}Qi=0,dn=kt=mt=null,as=!1,_o=Bl=0,rs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?mt.memoizedState=dn=t:dn=dn.next=t,dn}function cn(){if(kt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=dn===null?mt.memoizedState:dn.next;if(n!==null)dn=n,kt=t;else{if(t===null)throw mt.alternate===null?Error(a(467)):Error(a(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},dn===null?mt.memoizedState=dn=t:dn=dn.next=t}return dn}function Fl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xo(t){var n=_o;return _o+=1,rs===null&&(rs=[]),t=dm(rs,t,n),n=mt,(dn===null?n.memoizedState:dn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?ig:Mf),t}function Hl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return xo(t);if(t.$$typeof===N)return An(t)}throw Error(a(438,String(t)))}function ff(t){var n=null,r=mt.updateQueue;if(r!==null&&(n=r.memoCache),n==null){var o=mt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),r===null&&(r=Fl(),mt.updateQueue=r),r.memoCache=n,r=n.data[n.index],r===void 0)for(r=n.data[n.index]=Array(t),o=0;o<t;o++)r[o]=P;return n.index++,r}function Ji(t,n){return typeof n=="function"?n(t):n}function Gl(t){var n=cn();return df(n,kt,t)}function df(t,n,r){var o=t.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=r;var u=t.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=t.baseState,u===null)t.memoizedState=h;else{n=u.next;var R=S=null,j=null,fe=n,ye=!1;do{var Ee=fe.lane&-536870913;if(Ee!==fe.lane?(Tt&Ee)===Ee:(Qi&Ee)===Ee){var de=fe.revertLane;if(de===0)j!==null&&(j=j.next={lane:0,revertLane:0,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),Ee===$r&&(ye=!0);else if((Qi&de)===de){fe=fe.next,de===$r&&(ye=!0);continue}else Ee={lane:0,revertLane:fe.revertLane,gesture:null,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},j===null?(R=j=Ee,S=h):j=j.next=Ee,mt.lanes|=de,Oa|=de;Ee=fe.action,_r&&r(h,Ee),h=fe.hasEagerState?fe.eagerState:r(h,Ee)}else de={lane:Ee,revertLane:fe.revertLane,gesture:fe.gesture,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null},j===null?(R=j=de,S=h):j=j.next=de,mt.lanes|=Ee,Oa|=Ee;fe=fe.next}while(fe!==null&&fe!==n);if(j===null?S=h:j.next=R,!Kn(h,t.memoizedState)&&(hn=!0,ye&&(r=es,r!==null)))throw r;t.memoizedState=h,t.baseState=S,t.baseQueue=j,o.lastRenderedState=h}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function hf(t){var n=cn(),r=n.queue;if(r===null)throw Error(a(311));r.lastRenderedReducer=t;var o=r.dispatch,u=r.pending,h=n.memoizedState;if(u!==null){r.pending=null;var S=u=u.next;do h=t(h,S.action),S=S.next;while(S!==u);Kn(h,n.memoizedState)||(hn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),r.lastRenderedState=h}return[h,o]}function Em(t,n,r){var o=mt,u=cn(),h=Ct;if(h){if(r===void 0)throw Error(a(407));r=r()}else r=n();var S=!Kn((kt||u).memoizedState,r);if(S&&(u.memoizedState=r,hn=!0),u=u.queue,gf(Am.bind(null,o,u,t),[t]),u.getSnapshot!==n||S||dn!==null&&dn.memoizedState.tag&1){if(o.flags|=2048,ss(9,{destroy:void 0},Tm.bind(null,o,u,r,n),null),Yt===null)throw Error(a(349));h||(Qi&127)!==0||bm(o,n,r)}return r}function bm(t,n,r){t.flags|=16384,t={getSnapshot:n,value:r},n=mt.updateQueue,n===null?(n=Fl(),mt.updateQueue=n,n.stores=[t]):(r=n.stores,r===null?n.stores=[t]:r.push(t))}function Tm(t,n,r,o){n.value=r,n.getSnapshot=o,wm(n)&&Rm(t)}function Am(t,n,r){return r(function(){wm(n)&&Rm(t)})}function wm(t){var n=t.getSnapshot;t=t.value;try{var r=n();return!Kn(t,r)}catch{return!0}}function Rm(t){var n=cr(t,2);n!==null&&kn(n,t,2)}function pf(t){var n=In();if(typeof t=="function"){var r=t;if(t=r(),_r){it(!0);try{r()}finally{it(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:t},n}function Cm(t,n,r,o){return t.baseState=r,df(t,kt,typeof o=="function"?o:Ji)}function yy(t,n,r,o,u){if(Wl(t))throw Error(a(485));if(t=n.action,t!==null){var h={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};B.T!==null?r(!0):h.isTransition=!1,o(h),r=n.pending,r===null?(h.next=n.pending=h,Dm(n,h)):(h.next=r.next,n.pending=r.next=h)}}function Dm(t,n){var r=n.action,o=n.payload,u=t.state;if(n.isTransition){var h=B.T,S={};B.T=S;try{var R=r(u,o),j=B.S;j!==null&&j(S,R),Nm(t,n,R)}catch(fe){mf(t,n,fe)}finally{h!==null&&S.types!==null&&(h.types=S.types),B.T=h}}else try{h=r(u,o),Nm(t,n,h)}catch(fe){mf(t,n,fe)}}function Nm(t,n,r){r!==null&&typeof r=="object"&&typeof r.then=="function"?r.then(function(o){Um(t,n,o)},function(o){return mf(t,n,o)}):Um(t,n,r)}function Um(t,n,r){n.status="fulfilled",n.value=r,Lm(n),t.state=r,n=t.pending,n!==null&&(r=n.next,r===n?t.pending=null:(r=r.next,n.next=r,Dm(t,r)))}function mf(t,n,r){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=r,Lm(n),n=n.next;while(n!==o)}t.action=null}function Lm(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Om(t,n){return n}function Pm(t,n){if(Ct){var r=Yt.formState;if(r!==null){e:{var o=mt;if(Ct){if(Qt){t:{for(var u=Qt,h=hi;u.nodeType!==8;){if(!h){u=null;break t}if(u=mi(u.nextSibling),u===null){u=null;break t}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){Qt=mi(u.nextSibling),o=u.data==="F!";break e}}Ta(o)}o=!1}o&&(n=r[0])}}return r=In(),r.memoizedState=r.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:n},r.queue=o,r=eg.bind(null,mt,o),o.dispatch=r,o=pf(!1),h=Sf.bind(null,mt,!1,o.queue),o=In(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,r=yy.bind(null,mt,u,h,r),u.dispatch=r,o.memoizedState=t,[n,r,!1]}function Im(t){var n=cn();return zm(n,kt,t)}function zm(t,n,r){if(n=df(t,n,Om)[0],t=Gl(Ji)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=xo(n)}catch(S){throw S===ts?Nl:S}else o=n;n=cn();var u=n.queue,h=u.dispatch;return r!==n.memoizedState&&(mt.flags|=2048,ss(9,{destroy:void 0},Sy.bind(null,u,r),null)),[o,h,t]}function Sy(t,n){t.action=n}function Bm(t){var n=cn(),r=kt;if(r!==null)return zm(n,r,t);cn(),n=n.memoizedState,r=cn();var o=r.queue.dispatch;return r.memoizedState=t,[n,o,!1]}function ss(t,n,r,o){return t={tag:t,create:r,deps:o,inst:n,next:null},n=mt.updateQueue,n===null&&(n=Fl(),mt.updateQueue=n),r=n.lastEffect,r===null?n.lastEffect=t.next=t:(o=r.next,r.next=t,t.next=o,n.lastEffect=t),t}function Fm(){return cn().memoizedState}function Vl(t,n,r,o){var u=In();mt.flags|=t,u.memoizedState=ss(1|n,{destroy:void 0},r,o===void 0?null:o)}function kl(t,n,r,o){var u=cn();o=o===void 0?null:o;var h=u.memoizedState.inst;kt!==null&&o!==null&&sf(o,kt.memoizedState.deps)?u.memoizedState=ss(n,h,r,o):(mt.flags|=t,u.memoizedState=ss(1|n,h,r,o))}function Hm(t,n){Vl(8390656,8,t,n)}function gf(t,n){kl(2048,8,t,n)}function My(t){mt.flags|=4;var n=mt.updateQueue;if(n===null)n=Fl(),mt.updateQueue=n,n.events=[t];else{var r=n.events;r===null?n.events=[t]:r.push(t)}}function Gm(t){var n=cn().memoizedState;return My({ref:n,nextImpl:t}),function(){if((zt&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Vm(t,n){return kl(4,2,t,n)}function km(t,n){return kl(4,4,t,n)}function Wm(t,n){if(typeof n=="function"){t=t();var r=n(t);return function(){typeof r=="function"?r():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xm(t,n,r){r=r!=null?r.concat([t]):null,kl(4,4,Wm.bind(null,n,t),r)}function vf(){}function jm(t,n){var r=cn();n=n===void 0?null:n;var o=r.memoizedState;return n!==null&&sf(n,o[1])?o[0]:(r.memoizedState=[t,n],t)}function qm(t,n){var r=cn();n=n===void 0?null:n;var o=r.memoizedState;if(n!==null&&sf(n,o[1]))return o[0];if(o=t(),_r){it(!0);try{t()}finally{it(!1)}}return r.memoizedState=[o,n],o}function _f(t,n,r){return r===void 0||(Qi&1073741824)!==0&&(Tt&261930)===0?t.memoizedState=n:(t.memoizedState=r,t=Yg(),mt.lanes|=t,Oa|=t,r)}function Ym(t,n,r,o){return Kn(r,n)?r:is.current!==null?(t=_f(t,r,o),Kn(t,n)||(hn=!0),t):(Qi&42)===0||(Qi&1073741824)!==0&&(Tt&261930)===0?(hn=!0,t.memoizedState=r):(t=Yg(),mt.lanes|=t,Oa|=t,n)}function Zm(t,n,r,o,u){var h=$.p;$.p=h!==0&&8>h?h:8;var S=B.T,R={};B.T=R,Sf(t,!1,n,r);try{var j=u(),fe=B.S;if(fe!==null&&fe(R,j),j!==null&&typeof j=="object"&&typeof j.then=="function"){var ye=vy(j,o);yo(t,n,ye,ni(t))}else yo(t,n,o,ni(t))}catch(Ee){yo(t,n,{then:function(){},status:"rejected",reason:Ee},ni())}finally{$.p=h,S!==null&&R.types!==null&&(S.types=R.types),B.T=S}}function Ey(){}function xf(t,n,r,o){if(t.tag!==5)throw Error(a(476));var u=Km(t).queue;Zm(t,u,n,te,r===null?Ey:function(){return Qm(t),r(o)})}function Km(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:te,baseState:te,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:te},next:null};var r={};return n.next={memoizedState:r,baseState:r,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ji,lastRenderedState:r},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Qm(t){var n=Km(t);n.next===null&&(n=t.alternate.memoizedState),yo(t,n.next.queue,{},ni())}function yf(){return An(zo)}function Jm(){return cn().memoizedState}function $m(){return cn().memoizedState}function by(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var r=ni();t=Ra(r);var o=Ca(n,t,r);o!==null&&(kn(o,n,r),mo(o,n,r)),n={cache:Yu()},t.payload=n;return}n=n.return}}function Ty(t,n,r){var o=ni();r={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Wl(t)?tg(n,r):(r=zu(t,n,r,o),r!==null&&(kn(r,t,o),ng(r,n,o)))}function eg(t,n,r){var o=ni();yo(t,n,r,o)}function yo(t,n,r,o){var u={lane:o,revertLane:0,gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null};if(Wl(t))tg(n,u);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,R=h(S,r);if(u.hasEagerState=!0,u.eagerState=R,Kn(R,S))return bl(t,n,u,0),Yt===null&&El(),!1}catch{}finally{}if(r=zu(t,n,u,o),r!==null)return kn(r,t,o),ng(r,n,o),!0}return!1}function Sf(t,n,r,o){if(o={lane:2,revertLane:$f(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Wl(t)){if(n)throw Error(a(479))}else n=zu(t,r,o,2),n!==null&&kn(n,t,2)}function Wl(t){var n=t.alternate;return t===mt||n!==null&&n===mt}function tg(t,n){as=zl=!0;var r=t.pending;r===null?n.next=n:(n.next=r.next,r.next=n),t.pending=n}function ng(t,n,r){if((r&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,r|=o,n.lanes=r,Di(t,r)}}var So={readContext:An,use:Hl,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn};So.useEffectEvent=nn;var ig={readContext:An,use:Hl,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:An,useEffect:Hm,useImperativeHandle:function(t,n,r){r=r!=null?r.concat([t]):null,Vl(4194308,4,Wm.bind(null,n,t),r)},useLayoutEffect:function(t,n){return Vl(4194308,4,t,n)},useInsertionEffect:function(t,n){Vl(4,2,t,n)},useMemo:function(t,n){var r=In();n=n===void 0?null:n;var o=t();if(_r){it(!0);try{t()}finally{it(!1)}}return r.memoizedState=[o,n],o},useReducer:function(t,n,r){var o=In();if(r!==void 0){var u=r(n);if(_r){it(!0);try{r(n)}finally{it(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=Ty.bind(null,mt,t),[o.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=pf(t);var n=t.queue,r=eg.bind(null,mt,n);return n.dispatch=r,[t.memoizedState,r]},useDebugValue:vf,useDeferredValue:function(t,n){var r=In();return _f(r,t,n)},useTransition:function(){var t=pf(!1);return t=Zm.bind(null,mt,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,r){var o=mt,u=In();if(Ct){if(r===void 0)throw Error(a(407));r=r()}else{if(r=n(),Yt===null)throw Error(a(349));(Tt&127)!==0||bm(o,n,r)}u.memoizedState=r;var h={value:r,getSnapshot:n};return u.queue=h,Hm(Am.bind(null,o,h,t),[t]),o.flags|=2048,ss(9,{destroy:void 0},Tm.bind(null,o,h,r,n),null),r},useId:function(){var t=In(),n=Yt.identifierPrefix;if(Ct){var r=Li,o=Ui;r=(o&~(1<<32-Ve(o)-1)).toString(32)+r,n="_"+n+"R_"+r,r=Bl++,0<r&&(n+="H"+r.toString(32)),n+="_"}else r=_y++,n="_"+n+"r_"+r.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:yf,useFormState:Pm,useActionState:Pm,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=r,n=Sf.bind(null,mt,!0,r),r.dispatch=n,[t,n]},useMemoCache:ff,useCacheRefresh:function(){return In().memoizedState=by.bind(null,mt)},useEffectEvent:function(t){var n=In(),r={impl:t};return n.memoizedState=r,function(){if((zt&2)!==0)throw Error(a(440));return r.impl.apply(void 0,arguments)}}},Mf={readContext:An,use:Hl,useCallback:jm,useContext:An,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:Gl,useRef:Fm,useState:function(){return Gl(Ji)},useDebugValue:vf,useDeferredValue:function(t,n){var r=cn();return Ym(r,kt.memoizedState,t,n)},useTransition:function(){var t=Gl(Ji)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:yf,useFormState:Im,useActionState:Im,useOptimistic:function(t,n){var r=cn();return Cm(r,kt,t,n)},useMemoCache:ff,useCacheRefresh:$m};Mf.useEffectEvent=Gm;var ag={readContext:An,use:Hl,useCallback:jm,useContext:An,useEffect:gf,useImperativeHandle:Xm,useInsertionEffect:Vm,useLayoutEffect:km,useMemo:qm,useReducer:hf,useRef:Fm,useState:function(){return hf(Ji)},useDebugValue:vf,useDeferredValue:function(t,n){var r=cn();return kt===null?_f(r,t,n):Ym(r,kt.memoizedState,t,n)},useTransition:function(){var t=hf(Ji)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:xo(t),n]},useSyncExternalStore:Em,useId:Jm,useHostTransitionStatus:yf,useFormState:Bm,useActionState:Bm,useOptimistic:function(t,n){var r=cn();return kt!==null?Cm(r,kt,t,n):(r.baseState=t,[t,r.queue.dispatch])},useMemoCache:ff,useCacheRefresh:$m};ag.useEffectEvent=Gm;function Ef(t,n,r,o){n=t.memoizedState,r=r(o,n),r=r==null?n:v({},n,r),t.memoizedState=r,t.lanes===0&&(t.updateQueue.baseState=r)}var bf={enqueueSetState:function(t,n,r){t=t._reactInternals;var o=ni(),u=Ra(o);u.payload=n,r!=null&&(u.callback=r),n=Ca(t,u,o),n!==null&&(kn(n,t,o),mo(n,t,o))},enqueueReplaceState:function(t,n,r){t=t._reactInternals;var o=ni(),u=Ra(o);u.tag=1,u.payload=n,r!=null&&(u.callback=r),n=Ca(t,u,o),n!==null&&(kn(n,t,o),mo(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var r=ni(),o=Ra(r);o.tag=2,n!=null&&(o.callback=n),n=Ca(t,o,r),n!==null&&(kn(n,t,r),mo(n,t,r))}};function rg(t,n,r,o,u,h,S){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!so(r,o)||!so(u,h):!0}function sg(t,n,r,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(r,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(r,o),n.state!==t&&bf.enqueueReplaceState(n,n.state,null)}function xr(t,n){var r=n;if("ref"in n){r={};for(var o in n)o!=="ref"&&(r[o]=n[o])}if(t=t.defaultProps){r===n&&(r=v({},r));for(var u in t)r[u]===void 0&&(r[u]=t[u])}return r}function og(t){Ml(t)}function lg(t){console.error(t)}function cg(t){Ml(t)}function Xl(t,n){try{var r=t.onUncaughtError;r(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function ug(t,n,r){try{var o=t.onCaughtError;o(r.value,{componentStack:r.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Tf(t,n,r){return r=Ra(r),r.tag=3,r.payload={element:null},r.callback=function(){Xl(t,n)},r}function fg(t){return t=Ra(t),t.tag=3,t}function dg(t,n,r,o){var u=r.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;t.payload=function(){return u(h)},t.callback=function(){ug(n,r,o)}}var S=r.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(t.callback=function(){ug(n,r,o),typeof u!="function"&&(Pa===null?Pa=new Set([this]):Pa.add(this));var R=o.stack;this.componentDidCatch(o.value,{componentStack:R!==null?R:""})})}function Ay(t,n,r,o,u){if(r.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=r.alternate,n!==null&&Jr(n,r,u,!0),r=Jn.current,r!==null){switch(r.tag){case 31:case 13:return pi===null?ic():r.alternate===null&&an===0&&(an=3),r.flags&=-257,r.flags|=65536,r.lanes=u,o===Ul?r.flags|=16384:(n=r.updateQueue,n===null?r.updateQueue=new Set([o]):n.add(o),Kf(t,o,u)),!1;case 22:return r.flags|=65536,o===Ul?r.flags|=16384:(n=r.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},r.updateQueue=n):(r=n.retryQueue,r===null?n.retryQueue=new Set([o]):r.add(o)),Kf(t,o,u)),!1}throw Error(a(435,r.tag))}return Kf(t,o,u),ic(),!1}if(Ct)return n=Jn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ku&&(t=Error(a(422),{cause:o}),co(ui(t,r)))):(o!==ku&&(n=Error(a(423),{cause:o}),co(ui(n,r))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=ui(o,r),u=Tf(t.stateNode,o,u),ef(t,u),an!==4&&(an=2)),!1;var h=Error(a(520),{cause:o});if(h=ui(h,r),Co===null?Co=[h]:Co.push(h),an!==4&&(an=2),n===null)return!0;o=ui(o,r),r=n;do{switch(r.tag){case 3:return r.flags|=65536,t=u&-u,r.lanes|=t,t=Tf(r.stateNode,o,t),ef(r,t),!1;case 1:if(n=r.type,h=r.stateNode,(r.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Pa===null||!Pa.has(h))))return r.flags|=65536,u&=-u,r.lanes|=u,u=fg(u),dg(u,t,r,o),ef(r,u),!1}r=r.return}while(r!==null);return!1}var Af=Error(a(461)),hn=!1;function wn(t,n,r,o){n.child=t===null?gm(n,null,r,o):vr(n,t.child,r,o)}function hg(t,n,r,o,u){r=r.render;var h=n.ref;if("ref"in o){var S={};for(var R in o)R!=="ref"&&(S[R]=o[R])}else S=o;return hr(n),o=of(t,n,r,S,h,u),R=lf(),t!==null&&!hn?(cf(t,n,u),$i(t,n,u)):(Ct&&R&&Gu(n),n.flags|=1,wn(t,n,o,u),n.child)}function pg(t,n,r,o,u){if(t===null){var h=r.type;return typeof h=="function"&&!Bu(h)&&h.defaultProps===void 0&&r.compare===null?(n.tag=15,n.type=h,mg(t,n,h,o,u)):(t=Al(r.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(h=t.child,!Of(t,u)){var S=h.memoizedProps;if(r=r.compare,r=r!==null?r:so,r(S,o)&&t.ref===n.ref)return $i(t,n,u)}return n.flags|=1,t=qi(h,o),t.ref=n.ref,t.return=n,n.child=t}function mg(t,n,r,o,u){if(t!==null){var h=t.memoizedProps;if(so(h,o)&&t.ref===n.ref)if(hn=!1,n.pendingProps=o=h,Of(t,u))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,$i(t,n,u)}return wf(t,n,r,o,u)}function gg(t,n,r,o){var u=o.children,h=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|r:r,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return vg(t,n,h,r,o)}if((r&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Dl(n,h!==null?h.cachePool:null),h!==null?xm(n,h):nf(),ym(n);else return o=n.lanes=536870912,vg(t,n,h!==null?h.baseLanes|r:r,r,o)}else h!==null?(Dl(n,h.cachePool),xm(n,h),Na(),n.memoizedState=null):(t!==null&&Dl(n,null),nf(),Na());return wn(t,n,u,r),n.child}function Mo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function vg(t,n,r,o,u){var h=Ku();return h=h===null?null:{parent:fn._currentValue,pool:h},n.memoizedState={baseLanes:r,cachePool:h},t!==null&&Dl(n,null),nf(),ym(n),t!==null&&Jr(t,n,o,!0),n.childLanes=u,null}function jl(t,n){return n=Yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function _g(t,n,r){return vr(n,t.child,null,r),t=jl(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function wy(t,n,r){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Ct){if(o.mode==="hidden")return t=jl(n,o),n.lanes=536870912,Mo(null,t);if(rf(n),(t=Qt)?(t=D0(t,hi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=tm(t),r.return=n,n.child=r,Tn=n,Qt=null)):t=null,t===null)throw Ta(n);return n.lanes=536870912,null}return jl(n,o)}var h=t.memoizedState;if(h!==null){var S=h.dehydrated;if(rf(n),u)if(n.flags&256)n.flags&=-257,n=_g(t,n,r);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(a(558));else if(hn||Jr(t,n,r,!1),u=(r&t.childLanes)!==0,hn||u){if(o=Yt,o!==null&&(S=zr(o,r),S!==0&&S!==h.retryLane))throw h.retryLane=S,cr(t,S),kn(o,t,S),Af;ic(),n=_g(t,n,r)}else t=h.treeContext,Qt=mi(S.nextSibling),Tn=n,Ct=!0,ba=null,hi=!1,t!==null&&am(n,t),n=jl(n,o),n.flags|=4096;return n}return t=qi(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ql(t,n){var r=n.ref;if(r===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof r!="function"&&typeof r!="object")throw Error(a(284));(t===null||t.ref!==r)&&(n.flags|=4194816)}}function wf(t,n,r,o,u){return hr(n),r=of(t,n,r,o,void 0,u),o=lf(),t!==null&&!hn?(cf(t,n,u),$i(t,n,u)):(Ct&&o&&Gu(n),n.flags|=1,wn(t,n,r,u),n.child)}function xg(t,n,r,o,u,h){return hr(n),n.updateQueue=null,r=Mm(n,o,r,u),Sm(t),o=lf(),t!==null&&!hn?(cf(t,n,h),$i(t,n,h)):(Ct&&o&&Gu(n),n.flags|=1,wn(t,n,r,h),n.child)}function yg(t,n,r,o,u){if(hr(n),n.stateNode===null){var h=Yr,S=r.contextType;typeof S=="object"&&S!==null&&(h=An(S)),h=new r(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=bf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Ju(n),S=r.contextType,h.context=typeof S=="object"&&S!==null?An(S):Yr,h.state=n.memoizedState,S=r.getDerivedStateFromProps,typeof S=="function"&&(Ef(n,r,S,o),h.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&bf.enqueueReplaceState(h,h.state,null),vo(n,o,h,u),go(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){h=n.stateNode;var R=n.memoizedProps,j=xr(r,R);h.props=j;var fe=h.context,ye=r.contextType;S=Yr,typeof ye=="object"&&ye!==null&&(S=An(ye));var Ee=r.getDerivedStateFromProps;ye=typeof Ee=="function"||typeof h.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,ye||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(R||fe!==S)&&sg(n,h,o,S),wa=!1;var de=n.memoizedState;h.state=de,vo(n,o,h,u),go(),fe=n.memoizedState,R||de!==fe||wa?(typeof Ee=="function"&&(Ef(n,r,Ee,o),fe=n.memoizedState),(j=wa||rg(n,r,j,o,de,fe,S))?(ye||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=fe),h.props=o,h.state=fe,h.context=S,o=j):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,$u(t,n),S=n.memoizedProps,ye=xr(r,S),h.props=ye,Ee=n.pendingProps,de=h.context,fe=r.contextType,j=Yr,typeof fe=="object"&&fe!==null&&(j=An(fe)),R=r.getDerivedStateFromProps,(fe=typeof R=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Ee||de!==j)&&sg(n,h,o,j),wa=!1,de=n.memoizedState,h.state=de,vo(n,o,h,u),go();var _e=n.memoizedState;S!==Ee||de!==_e||wa||t!==null&&t.dependencies!==null&&Rl(t.dependencies)?(typeof R=="function"&&(Ef(n,r,R,o),_e=n.memoizedState),(ye=wa||rg(n,r,ye,o,de,_e,j)||t!==null&&t.dependencies!==null&&Rl(t.dependencies))?(fe||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,_e,j),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,_e,j)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=_e),h.props=o,h.state=_e,h.context=j,o=ye):(typeof h.componentDidUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===t.memoizedProps&&de===t.memoizedState||(n.flags|=1024),o=!1)}return h=o,ql(t,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,r=o&&typeof r.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,t!==null&&o?(n.child=vr(n,t.child,null,u),n.child=vr(n,null,r,u)):wn(t,n,r,u),n.memoizedState=h.state,t=n.child):t=$i(t,n,u),t}function Sg(t,n,r,o){return fr(),n.flags|=256,wn(t,n,r,o),n.child}var Rf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Cf(t){return{baseLanes:t,cachePool:um()}}function Df(t,n,r){return t=t!==null?t.childLanes&~r:0,n&&(t|=ti),t}function Mg(t,n,r){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=t!==null&&t.memoizedState===null?!1:(ln.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,t===null){if(Ct){if(u?Da(n):Na(),(t=Qt)?(t=D0(t,hi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ea!==null?{id:Ui,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},r=tm(t),r.return=n,n.child=r,Tn=n,Qt=null)):t=null,t===null)throw Ta(n);return dd(t)?n.lanes=32:n.lanes=536870912,null}var R=o.children;return o=o.fallback,u?(Na(),u=n.mode,R=Yl({mode:"hidden",children:R},u),o=ur(o,u,r,null),R.return=n,o.return=n,R.sibling=o,n.child=R,o=n.child,o.memoizedState=Cf(r),o.childLanes=Df(t,S,r),n.memoizedState=Rf,Mo(null,o)):(Da(n),Nf(n,R))}var j=t.memoizedState;if(j!==null&&(R=j.dehydrated,R!==null)){if(h)n.flags&256?(Da(n),n.flags&=-257,n=Uf(t,n,r)):n.memoizedState!==null?(Na(),n.child=t.child,n.flags|=128,n=null):(Na(),R=o.fallback,u=n.mode,o=Yl({mode:"visible",children:o.children},u),R=ur(R,u,r,null),R.flags|=2,o.return=n,R.return=n,o.sibling=R,n.child=o,vr(n,t.child,null,r),o=n.child,o.memoizedState=Cf(r),o.childLanes=Df(t,S,r),n.memoizedState=Rf,n=Mo(null,o));else if(Da(n),dd(R)){if(S=R.nextSibling&&R.nextSibling.dataset,S)var fe=S.dgst;S=fe,o=Error(a(419)),o.stack="",o.digest=S,co({value:o,source:null,stack:null}),n=Uf(t,n,r)}else if(hn||Jr(t,n,r,!1),S=(r&t.childLanes)!==0,hn||S){if(S=Yt,S!==null&&(o=zr(S,r),o!==0&&o!==j.retryLane))throw j.retryLane=o,cr(t,o),kn(S,t,o),Af;fd(R)||ic(),n=Uf(t,n,r)}else fd(R)?(n.flags|=192,n.child=t.child,n=null):(t=j.treeContext,Qt=mi(R.nextSibling),Tn=n,Ct=!0,ba=null,hi=!1,t!==null&&am(n,t),n=Nf(n,o.children),n.flags|=4096);return n}return u?(Na(),R=o.fallback,u=n.mode,j=t.child,fe=j.sibling,o=qi(j,{mode:"hidden",children:o.children}),o.subtreeFlags=j.subtreeFlags&65011712,fe!==null?R=qi(fe,R):(R=ur(R,u,r,null),R.flags|=2),R.return=n,o.return=n,o.sibling=R,n.child=o,Mo(null,o),o=n.child,R=t.child.memoizedState,R===null?R=Cf(r):(u=R.cachePool,u!==null?(j=fn._currentValue,u=u.parent!==j?{parent:j,pool:j}:u):u=um(),R={baseLanes:R.baseLanes|r,cachePool:u}),o.memoizedState=R,o.childLanes=Df(t,S,r),n.memoizedState=Rf,Mo(t.child,o)):(Da(n),r=t.child,t=r.sibling,r=qi(r,{mode:"visible",children:o.children}),r.return=n,r.sibling=null,t!==null&&(S=n.deletions,S===null?(n.deletions=[t],n.flags|=16):S.push(t)),n.child=r,n.memoizedState=null,r)}function Nf(t,n){return n=Yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Yl(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function Uf(t,n,r){return vr(n,t.child,null,r),t=Nf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Eg(t,n,r){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),ju(t.return,n,r)}function Lf(t,n,r,o,u,h){var S=t.memoizedState;S===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=r,S.tailMode=u,S.treeForkCount=h)}function bg(t,n,r){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=ln.current,R=(S&2)!==0;if(R?(S=S&1|2,n.flags|=128):S&=1,G(ln,S),wn(t,n,o,r),o=Ct?lo:0,!R&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Eg(t,r,n);else if(t.tag===19)Eg(t,r,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(r=n.child,u=null;r!==null;)t=r.alternate,t!==null&&Il(t)===null&&(u=r),r=r.sibling;r=u,r===null?(u=n.child,n.child=null):(u=r.sibling,r.sibling=null),Lf(n,!1,u,r,h,o);break;case"backwards":case"unstable_legacy-backwards":for(r=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Il(t)===null){n.child=u;break}t=u.sibling,u.sibling=r,r=u,u=t}Lf(n,!0,r,null,h,o);break;case"together":Lf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function $i(t,n,r){if(t!==null&&(n.dependencies=t.dependencies),Oa|=n.lanes,(r&n.childLanes)===0)if(t!==null){if(Jr(t,n,r,!1),(r&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(a(153));if(n.child!==null){for(t=n.child,r=qi(t,t.pendingProps),n.child=r,r.return=n;t.sibling!==null;)t=t.sibling,r=r.sibling=qi(t,t.pendingProps),r.return=n;r.sibling=null}return n.child}function Of(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Rl(t)))}function Ry(t,n,r){switch(n.tag){case 3:pe(n,n.stateNode.containerInfo),Aa(n,fn,t.memoizedState.cache),fr();break;case 27:case 5:Ne(n);break;case 4:pe(n,n.stateNode.containerInfo);break;case 10:Aa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,rf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Da(n),n.flags|=128,null):(r&n.child.childLanes)!==0?Mg(t,n,r):(Da(n),t=$i(t,n,r),t!==null?t.sibling:null);Da(n);break;case 19:var u=(t.flags&128)!==0;if(o=(r&n.childLanes)!==0,o||(Jr(t,n,r,!1),o=(r&n.childLanes)!==0),u){if(o)return bg(t,n,r);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),G(ln,ln.current),o)break;return null;case 22:return n.lanes=0,gg(t,n,r,n.pendingProps);case 24:Aa(n,fn,t.memoizedState.cache)}return $i(t,n,r)}function Tg(t,n,r){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!Of(t,r)&&(n.flags&128)===0)return hn=!1,Ry(t,n,r);hn=(t.flags&131072)!==0}else hn=!1,Ct&&(n.flags&1048576)!==0&&im(n,lo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=mr(n.elementType),n.type=t,typeof t=="function")Bu(t)?(o=xr(t,o),n.tag=1,n=yg(null,n,t,o,r)):(n.tag=0,n=wf(null,n,t,o,r));else{if(t!=null){var u=t.$$typeof;if(u===O){n.tag=11,n=hg(null,n,t,o,r);break e}else if(u===z){n.tag=14,n=pg(null,n,t,o,r);break e}}throw n=ve(t)||t,Error(a(306,n,""))}}return n;case 0:return wf(t,n,n.type,n.pendingProps,r);case 1:return o=n.type,u=xr(o,n.pendingProps),yg(t,n,o,u,r);case 3:e:{if(pe(n,n.stateNode.containerInfo),t===null)throw Error(a(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,$u(t,n),vo(n,o,null,r);var S=n.memoizedState;if(o=S.cache,Aa(n,fn,o),o!==h.cache&&qu(n,[fn],r,!0),go(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=Sg(t,n,o,r);break e}else if(o!==u){u=ui(Error(a(424)),n),co(u),n=Sg(t,n,o,r);break e}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Qt=mi(t.firstChild),Tn=n,Ct=!0,ba=null,hi=!0,r=gm(n,null,o,r),n.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling}else{if(fr(),o===u){n=$i(t,n,r);break e}wn(t,n,o,r)}n=n.child}return n;case 26:return ql(t,n),t===null?(r=I0(n.type,null,n.pendingProps,null))?n.memoizedState=r:Ct||(r=n.type,t=n.pendingProps,o=uc(H.current).createElement(r),o[un]=n,o[En]=t,Rn(o,r,t),Ae(o),n.stateNode=o):n.memoizedState=I0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ne(n),t===null&&Ct&&(o=n.stateNode=L0(n.type,n.pendingProps,H.current),Tn=n,hi=!0,u=Qt,Fa(n.type)?(hd=u,Qt=mi(o.firstChild)):Qt=u),wn(t,n,n.pendingProps.children,r),ql(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Ct&&((u=o=Qt)&&(o=aS(o,n.type,n.pendingProps,hi),o!==null?(n.stateNode=o,Tn=n,Qt=mi(o.firstChild),hi=!1,u=!0):u=!1),u||Ta(n)),Ne(n),u=n.type,h=n.pendingProps,S=t!==null?t.memoizedProps:null,o=h.children,ld(u,h)?o=null:S!==null&&ld(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=of(t,n,xy,null,null,r),zo._currentValue=u),ql(t,n),wn(t,n,o,r),n.child;case 6:return t===null&&Ct&&((t=r=Qt)&&(r=rS(r,n.pendingProps,hi),r!==null?(n.stateNode=r,Tn=n,Qt=null,t=!0):t=!1),t||Ta(n)),null;case 13:return Mg(t,n,r);case 4:return pe(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=vr(n,null,o,r):wn(t,n,o,r),n.child;case 11:return hg(t,n,n.type,n.pendingProps,r);case 7:return wn(t,n,n.pendingProps,r),n.child;case 8:return wn(t,n,n.pendingProps.children,r),n.child;case 12:return wn(t,n,n.pendingProps.children,r),n.child;case 10:return o=n.pendingProps,Aa(n,n.type,o.value),wn(t,n,o.children,r),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,hr(n),u=An(u),o=o(u),n.flags|=1,wn(t,n,o,r),n.child;case 14:return pg(t,n,n.type,n.pendingProps,r);case 15:return mg(t,n,n.type,n.pendingProps,r);case 19:return bg(t,n,r);case 31:return wy(t,n,r);case 22:return gg(t,n,r,n.pendingProps);case 24:return hr(n),o=An(fn),t===null?(u=Ku(),u===null&&(u=Yt,h=Yu(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=r),u=h),n.memoizedState={parent:o,cache:u},Ju(n),Aa(n,fn,u)):((t.lanes&r)!==0&&($u(t,n),vo(n,null,null,r),go()),u=t.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Aa(n,fn,o)):(o=h.cache,Aa(n,fn,o),o!==u.cache&&qu(n,[fn],r,!0))),wn(t,n,n.pendingProps.children,r),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ea(t){t.flags|=4}function Pf(t,n,r,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(Jg())t.flags|=8192;else throw gr=Ul,Qu}else t.flags&=-16777217}function Ag(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!G0(n))if(Jg())t.flags|=8192;else throw gr=Ul,Qu}function Zl(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ht():536870912,t.lanes|=n,us|=n)}function Eo(t,n){if(!Ct)switch(t.tailMode){case"hidden":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t.tail=null:r.sibling=null;break;case"collapsed":r=t.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Jt(t){var n=t.alternate!==null&&t.alternate.child===t.child,r=0,o=0;if(n)for(var u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)r|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=r,n}function Cy(t,n,r){var o=n.pendingProps;switch(Vu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return r=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ki(fn),Te(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Qr(n)?ea(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Wu())),Jt(n),null;case 26:var u=n.type,h=n.memoizedState;return t===null?(ea(n),h!==null?(Jt(n),Ag(n,h)):(Jt(n),Pf(n,u,null,o,r))):h?h!==t.memoizedState?(ea(n),Jt(n),Ag(n,h)):(Jt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&ea(n),Jt(n),Pf(n,u,t,o,r)),null;case 27:if(ke(n),r=H.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}t=ee.current,Qr(n)?rm(n):(t=L0(u,o,r),n.stateNode=t,ea(n))}return Jt(n),null;case 5:if(ke(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(!o){if(n.stateNode===null)throw Error(a(166));return Jt(n),null}if(h=ee.current,Qr(n))rm(n);else{var S=uc(H.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[un]=n,h[En]=o;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;e:switch(Rn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&ea(n)}}return Jt(n),Pf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,r),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&ea(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(a(166));if(t=H.current,Qr(n)){if(t=n.stateNode,r=n.memoizedProps,o=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[un]=n,t=!!(t.nodeValue===r||o!==null&&o.suppressHydrationWarning===!0||M0(t.nodeValue,r)),t||Ta(n,!0)}else t=uc(t).createTextNode(o),t[un]=n,n.stateNode=t}return Jt(n),null;case 31:if(r=n.memoizedState,t===null||t.memoizedState!==null){if(o=Qr(n),r!==null){if(t===null){if(!o)throw Error(a(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(a(557));t[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),t=!1}else r=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Jt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=Qr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(a(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(a(317));u[un]=n}else fr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),u=!1}else u=Wu(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=r,n):(r=o!==null,t=t!==null&&t.memoizedState!==null,r&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),r!==t&&r&&(n.child.flags|=8192),Zl(n,n.updateQueue),Jt(n),null);case 4:return Te(),t===null&&id(n.stateNode.containerInfo),Jt(n),null;case 10:return Ki(n.type),Jt(n),null;case 19:if(w(ln),o=n.memoizedState,o===null)return Jt(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)Eo(o,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(h=Il(t),h!==null){for(n.flags|=128,Eo(o,!1),t=h.updateQueue,n.updateQueue=t,Zl(n,t),n.subtreeFlags=0,t=r,r=n.child;r!==null;)em(r,t),r=r.sibling;return G(ln,ln.current&1|2),Ct&&Yi(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&A()>ec&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Il(h),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Zl(n,t),Eo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!Ct)return Jt(n),null}else 2*A()-o.renderingStartTime>ec&&r!==536870912&&(n.flags|=128,u=!0,Eo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(t=o.last,t!==null?t.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=A(),t.sibling=null,r=ln.current,G(ln,u?r&1|2:r&1),Ct&&Yi(n,o.treeForkCount),t):(Jt(n),null);case 22:case 23:return $n(n),af(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(r&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),r=n.updateQueue,r!==null&&Zl(n,r.retryQueue),r=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==r&&(n.flags|=2048),t!==null&&w(pr),null;case 24:return r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Ki(fn),Jt(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function Dy(t,n){switch(Vu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Ki(fn),Te(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return ke(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(a(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(a(340));fr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return w(ln),null;case 4:return Te(),null;case 10:return Ki(n.type),null;case 22:case 23:return $n(n),af(),t!==null&&w(pr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Ki(fn),null;case 25:return null;default:return null}}function wg(t,n){switch(Vu(n),n.tag){case 3:Ki(fn),Te();break;case 26:case 27:case 5:ke(n);break;case 4:Te();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:w(ln);break;case 10:Ki(n.type);break;case 22:case 23:$n(n),af(),t!==null&&w(pr);break;case 24:Ki(fn)}}function bo(t,n){try{var r=n.updateQueue,o=r!==null?r.lastEffect:null;if(o!==null){var u=o.next;r=u;do{if((r.tag&t)===t){o=void 0;var h=r.create,S=r.inst;o=h(),S.destroy=o}r=r.next}while(r!==u)}}catch(R){Vt(n,n.return,R)}}function Ua(t,n,r){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&t)===t){var S=o.inst,R=S.destroy;if(R!==void 0){S.destroy=void 0,u=n;var j=r,fe=R;try{fe()}catch(ye){Vt(u,j,ye)}}}o=o.next}while(o!==h)}}catch(ye){Vt(n,n.return,ye)}}function Rg(t){var n=t.updateQueue;if(n!==null){var r=t.stateNode;try{_m(n,r)}catch(o){Vt(t,t.return,o)}}}function Cg(t,n,r){r.props=xr(t.type,t.memoizedProps),r.state=t.memoizedState;try{r.componentWillUnmount()}catch(o){Vt(t,n,o)}}function To(t,n){try{var r=t.ref;if(r!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof r=="function"?t.refCleanup=r(o):r.current=o}}catch(u){Vt(t,n,u)}}function Oi(t,n){var r=t.ref,o=t.refCleanup;if(r!==null)if(typeof o=="function")try{o()}catch(u){Vt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof r=="function")try{r(null)}catch(u){Vt(t,n,u)}else r.current=null}function Dg(t){var n=t.type,r=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":r.autoFocus&&o.focus();break e;case"img":r.src?o.src=r.src:r.srcSet&&(o.srcset=r.srcSet)}}catch(u){Vt(t,t.return,u)}}function If(t,n,r){try{var o=t.stateNode;Jy(o,t.type,r,n),o[En]=n}catch(u){Vt(t,t.return,u)}}function Ng(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Fa(t.type)||t.tag===4}function zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ng(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Fa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bf(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r).insertBefore(t,n):(n=r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,n.appendChild(t),r=r._reactRootContainer,r!=null||n.onclick!==null||(n.onclick=Xi));else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode,n=null),t=t.child,t!==null))for(Bf(t,n,r),t=t.sibling;t!==null;)Bf(t,n,r),t=t.sibling}function Kl(t,n,r){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(o!==4&&(o===27&&Fa(t.type)&&(r=t.stateNode),t=t.child,t!==null))for(Kl(t,n,r),t=t.sibling;t!==null;)Kl(t,n,r),t=t.sibling}function Ug(t){var n=t.stateNode,r=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Rn(n,o,r),n[un]=t,n[En]=r}catch(h){Vt(t,t.return,h)}}var ta=!1,pn=!1,Ff=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function Ny(t,n){if(t=t.containerInfo,sd=vc,t=Xp(t),Nu(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else e:{r=(r=t.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var u=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{r.nodeType,h.nodeType}catch{r=null;break e}var S=0,R=-1,j=-1,fe=0,ye=0,Ee=t,de=null;t:for(;;){for(var _e;Ee!==r||u!==0&&Ee.nodeType!==3||(R=S+u),Ee!==h||o!==0&&Ee.nodeType!==3||(j=S+o),Ee.nodeType===3&&(S+=Ee.nodeValue.length),(_e=Ee.firstChild)!==null;)de=Ee,Ee=_e;for(;;){if(Ee===t)break t;if(de===r&&++fe===u&&(R=S),de===h&&++ye===o&&(j=S),(_e=Ee.nextSibling)!==null)break;Ee=de,de=Ee.parentNode}Ee=_e}r=R===-1||j===-1?null:{start:R,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(od={focusedElem:t,selectionRange:r},vc=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,h=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(r=0;r<t.length;r++)u=t[r],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&h!==null){t=void 0,r=n,u=h.memoizedProps,h=h.memoizedState,o=r.stateNode;try{var Ze=xr(r.type,u);t=o.getSnapshotBeforeUpdate(Ze,h),o.__reactInternalSnapshotBeforeUpdate=t}catch(ct){Vt(r,r.return,ct)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,r=t.nodeType,r===9)ud(t);else if(r===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":ud(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(a(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function Og(t,n,r){var o=r.flags;switch(r.tag){case 0:case 11:case 15:ia(t,r),o&4&&bo(5,r);break;case 1:if(ia(t,r),o&4)if(t=r.stateNode,n===null)try{t.componentDidMount()}catch(S){Vt(r,r.return,S)}else{var u=xr(r.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(S){Vt(r,r.return,S)}}o&64&&Rg(r),o&512&&To(r,r.return);break;case 3:if(ia(t,r),o&64&&(t=r.updateQueue,t!==null)){if(n=null,r.child!==null)switch(r.child.tag){case 27:case 5:n=r.child.stateNode;break;case 1:n=r.child.stateNode}try{_m(t,n)}catch(S){Vt(r,r.return,S)}}break;case 27:n===null&&o&4&&Ug(r);case 26:case 5:ia(t,r),n===null&&o&4&&Dg(r),o&512&&To(r,r.return);break;case 12:ia(t,r);break;case 31:ia(t,r),o&4&&zg(t,r);break;case 13:ia(t,r),o&4&&Bg(t,r),o&64&&(t=r.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(r=Hy.bind(null,r),sS(t,r))));break;case 22:if(o=r.memoizedState!==null||ta,!o){n=n!==null&&n.memoizedState!==null||pn,u=ta;var h=pn;ta=o,(pn=n)&&!h?aa(t,r,(r.subtreeFlags&8772)!==0):ia(t,r),ta=u,pn=h}break;case 30:break;default:ia(t,r)}}function Pg(t){var n=t.alternate;n!==null&&(t.alternate=null,Pg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&D(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var en=null,Fn=!1;function na(t,n,r){for(r=r.child;r!==null;)Ig(t,n,r),r=r.sibling}function Ig(t,n,r){if(Le&&typeof Le.onCommitFiberUnmount=="function")try{Le.onCommitFiberUnmount(Ce,r)}catch{}switch(r.tag){case 26:pn||Oi(r,n),na(t,n,r),r.memoizedState?r.memoizedState.count--:r.stateNode&&(r=r.stateNode,r.parentNode.removeChild(r));break;case 27:pn||Oi(r,n);var o=en,u=Fn;Fa(r.type)&&(en=r.stateNode,Fn=!1),na(t,n,r),Oo(r.stateNode),en=o,Fn=u;break;case 5:pn||Oi(r,n);case 6:if(o=en,u=Fn,en=null,na(t,n,r),en=o,Fn=u,en!==null)if(Fn)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(r.stateNode)}catch(h){Vt(r,n,h)}else try{en.removeChild(r.stateNode)}catch(h){Vt(r,n,h)}break;case 18:en!==null&&(Fn?(t=en,R0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,r.stateNode),_s(t)):R0(en,r.stateNode));break;case 4:o=en,u=Fn,en=r.stateNode.containerInfo,Fn=!0,na(t,n,r),en=o,Fn=u;break;case 0:case 11:case 14:case 15:Ua(2,r,n),pn||Ua(4,r,n),na(t,n,r);break;case 1:pn||(Oi(r,n),o=r.stateNode,typeof o.componentWillUnmount=="function"&&Cg(r,n,o)),na(t,n,r);break;case 21:na(t,n,r);break;case 22:pn=(o=pn)||r.memoizedState!==null,na(t,n,r),pn=o;break;default:na(t,n,r)}}function zg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{_s(t)}catch(r){Vt(n,n.return,r)}}}function Bg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{_s(t)}catch(r){Vt(n,n.return,r)}}function Uy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Lg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Lg),n;default:throw Error(a(435,t.tag))}}function Ql(t,n){var r=Uy(t);n.forEach(function(o){if(!r.has(o)){r.add(o);var u=Gy.bind(null,t,o);o.then(u,u)}})}function Hn(t,n){var r=n.deletions;if(r!==null)for(var o=0;o<r.length;o++){var u=r[o],h=t,S=n,R=S;e:for(;R!==null;){switch(R.tag){case 27:if(Fa(R.type)){en=R.stateNode,Fn=!1;break e}break;case 5:en=R.stateNode,Fn=!1;break e;case 3:case 4:en=R.stateNode.containerInfo,Fn=!0;break e}R=R.return}if(en===null)throw Error(a(160));Ig(h,S,u),en=null,Fn=!1,h=u.alternate,h!==null&&(h.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Fg(n,t),n=n.sibling}var Si=null;function Fg(t,n){var r=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Hn(n,t),Gn(t),o&4&&(Ua(3,t,t.return),bo(3,t),Ua(5,t,t.return));break;case 1:Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),o&64&&ta&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(r=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=r===null?o:r.concat(o))));break;case 26:var u=Si;if(Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),o&4){var h=r!==null?r.memoizedState:null;if(o=t.memoizedState,r===null)if(o===null)if(t.stateNode===null){e:{o=t.type,r=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":h=u.getElementsByTagName("title")[0],(!h||h[ar]||h[un]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=u.createElement(o),u.head.insertBefore(h,u.querySelector("head > title"))),Rn(h,o,r),h[un]=t,Ae(h),o=h;break e;case"link":var S=F0("link","href",u).get(o+(r.href||""));if(S){for(var R=0;R<S.length;R++)if(h=S[R],h.getAttribute("href")===(r.href==null||r.href===""?null:r.href)&&h.getAttribute("rel")===(r.rel==null?null:r.rel)&&h.getAttribute("title")===(r.title==null?null:r.title)&&h.getAttribute("crossorigin")===(r.crossOrigin==null?null:r.crossOrigin)){S.splice(R,1);break t}}h=u.createElement(o),Rn(h,o,r),u.head.appendChild(h);break;case"meta":if(S=F0("meta","content",u).get(o+(r.content||""))){for(R=0;R<S.length;R++)if(h=S[R],h.getAttribute("content")===(r.content==null?null:""+r.content)&&h.getAttribute("name")===(r.name==null?null:r.name)&&h.getAttribute("property")===(r.property==null?null:r.property)&&h.getAttribute("http-equiv")===(r.httpEquiv==null?null:r.httpEquiv)&&h.getAttribute("charset")===(r.charSet==null?null:r.charSet)){S.splice(R,1);break t}}h=u.createElement(o),Rn(h,o,r),u.head.appendChild(h);break;default:throw Error(a(468,o))}h[un]=t,Ae(h),o=h}t.stateNode=o}else H0(u,t.type,t.stateNode);else t.stateNode=B0(u,o,t.memoizedProps);else h!==o?(h===null?r.stateNode!==null&&(r=r.stateNode,r.parentNode.removeChild(r)):h.count--,o===null?H0(u,t.type,t.stateNode):B0(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&If(t,t.memoizedProps,r.memoizedProps)}break;case 27:Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),r!==null&&o&4&&If(t,t.memoizedProps,r.memoizedProps);break;case 5:if(Hn(n,t),Gn(t),o&512&&(pn||r===null||Oi(r,r.return)),t.flags&32){u=t.stateNode;try{Gr(u,"")}catch(Ze){Vt(t,t.return,Ze)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,If(t,u,r!==null?r.memoizedProps:u)),o&1024&&(Ff=!0);break;case 6:if(Hn(n,t),Gn(t),o&4){if(t.stateNode===null)throw Error(a(162));o=t.memoizedProps,r=t.stateNode;try{r.nodeValue=o}catch(Ze){Vt(t,t.return,Ze)}}break;case 3:if(hc=null,u=Si,Si=fc(n.containerInfo),Hn(n,t),Si=u,Gn(t),o&4&&r!==null&&r.memoizedState.isDehydrated)try{_s(n.containerInfo)}catch(Ze){Vt(t,t.return,Ze)}Ff&&(Ff=!1,Hg(t));break;case 4:o=Si,Si=fc(t.stateNode.containerInfo),Hn(n,t),Gn(t),Si=o;break;case 12:Hn(n,t),Gn(t);break;case 31:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 13:Hn(n,t),Gn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&($l=A()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 22:u=t.memoizedState!==null;var j=r!==null&&r.memoizedState!==null,fe=ta,ye=pn;if(ta=fe||u,pn=ye||j,Hn(n,t),pn=ye,ta=fe,Gn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(r===null||j||ta||pn||yr(t)),r=null,n=t;;){if(n.tag===5||n.tag===26){if(r===null){j=r=n;try{if(h=j.stateNode,u)S=h.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{R=j.stateNode;var Ee=j.memoizedProps.style,de=Ee!=null&&Ee.hasOwnProperty("display")?Ee.display:null;R.style.display=de==null||typeof de=="boolean"?"":(""+de).trim()}}catch(Ze){Vt(j,j.return,Ze)}}}else if(n.tag===6){if(r===null){j=n;try{j.stateNode.nodeValue=u?"":j.memoizedProps}catch(Ze){Vt(j,j.return,Ze)}}}else if(n.tag===18){if(r===null){j=n;try{var _e=j.stateNode;u?C0(_e,!0):C0(j.stateNode,!1)}catch(Ze){Vt(j,j.return,Ze)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;r===n&&(r=null),n=n.return}r===n&&(r=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(r=o.retryQueue,r!==null&&(o.retryQueue=null,Ql(t,r))));break;case 19:Hn(n,t),Gn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,Ql(t,o)));break;case 30:break;case 21:break;default:Hn(n,t),Gn(t)}}function Gn(t){var n=t.flags;if(n&2){try{for(var r,o=t.return;o!==null;){if(Ng(o)){r=o;break}o=o.return}if(r==null)throw Error(a(160));switch(r.tag){case 27:var u=r.stateNode,h=zf(t);Kl(t,h,u);break;case 5:var S=r.stateNode;r.flags&32&&(Gr(S,""),r.flags&=-33);var R=zf(t);Kl(t,R,S);break;case 3:case 4:var j=r.stateNode.containerInfo,fe=zf(t);Bf(t,fe,j);break;default:throw Error(a(161))}}catch(ye){Vt(t,t.return,ye)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Hg(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Hg(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ia(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Og(t,n.alternate,n),n=n.sibling}function yr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ua(4,n,n.return),yr(n);break;case 1:Oi(n,n.return);var r=n.stateNode;typeof r.componentWillUnmount=="function"&&Cg(n,n.return,r),yr(n);break;case 27:Oo(n.stateNode);case 26:case 5:Oi(n,n.return),yr(n);break;case 22:n.memoizedState===null&&yr(n);break;case 30:yr(n);break;default:yr(n)}t=t.sibling}}function aa(t,n,r){for(r=r&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,h=n,S=h.flags;switch(h.tag){case 0:case 11:case 15:aa(u,h,r),bo(4,h);break;case 1:if(aa(u,h,r),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(fe){Vt(o,o.return,fe)}if(o=h,u=o.updateQueue,u!==null){var R=o.stateNode;try{var j=u.shared.hiddenCallbacks;if(j!==null)for(u.shared.hiddenCallbacks=null,u=0;u<j.length;u++)vm(j[u],R)}catch(fe){Vt(o,o.return,fe)}}r&&S&64&&Rg(h),To(h,h.return);break;case 27:Ug(h);case 26:case 5:aa(u,h,r),r&&o===null&&S&4&&Dg(h),To(h,h.return);break;case 12:aa(u,h,r);break;case 31:aa(u,h,r),r&&S&4&&zg(u,h);break;case 13:aa(u,h,r),r&&S&4&&Bg(u,h);break;case 22:h.memoizedState===null&&aa(u,h,r),To(h,h.return);break;case 30:break;default:aa(u,h,r)}n=n.sibling}}function Hf(t,n){var r=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==r&&(t!=null&&t.refCount++,r!=null&&uo(r))}function Gf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t))}function Mi(t,n,r,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Gg(t,n,r,o),n=n.sibling}function Gg(t,n,r,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(t,n,r,o),u&2048&&bo(9,n);break;case 1:Mi(t,n,r,o);break;case 3:Mi(t,n,r,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&uo(t)));break;case 12:if(u&2048){Mi(t,n,r,o),t=n.stateNode;try{var h=n.memoizedProps,S=h.id,R=h.onPostCommit;typeof R=="function"&&R(S,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(j){Vt(n,n.return,j)}}else Mi(t,n,r,o);break;case 31:Mi(t,n,r,o);break;case 13:Mi(t,n,r,o);break;case 23:break;case 22:h=n.stateNode,S=n.alternate,n.memoizedState!==null?h._visibility&2?Mi(t,n,r,o):Ao(t,n):h._visibility&2?Mi(t,n,r,o):(h._visibility|=2,os(t,n,r,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Hf(S,n);break;case 24:Mi(t,n,r,o),u&2048&&Gf(n.alternate,n);break;default:Mi(t,n,r,o)}}function os(t,n,r,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=t,S=n,R=r,j=o,fe=S.flags;switch(S.tag){case 0:case 11:case 15:os(h,S,R,j,u),bo(8,S);break;case 23:break;case 22:var ye=S.stateNode;S.memoizedState!==null?ye._visibility&2?os(h,S,R,j,u):Ao(h,S):(ye._visibility|=2,os(h,S,R,j,u)),u&&fe&2048&&Hf(S.alternate,S);break;case 24:os(h,S,R,j,u),u&&fe&2048&&Gf(S.alternate,S);break;default:os(h,S,R,j,u)}n=n.sibling}}function Ao(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var r=t,o=n,u=o.flags;switch(o.tag){case 22:Ao(r,o),u&2048&&Hf(o.alternate,o);break;case 24:Ao(r,o),u&2048&&Gf(o.alternate,o);break;default:Ao(r,o)}n=n.sibling}}var wo=8192;function ls(t,n,r){if(t.subtreeFlags&wo)for(t=t.child;t!==null;)Vg(t,n,r),t=t.sibling}function Vg(t,n,r){switch(t.tag){case 26:ls(t,n,r),t.flags&wo&&t.memoizedState!==null&&_S(r,Si,t.memoizedState,t.memoizedProps);break;case 5:ls(t,n,r);break;case 3:case 4:var o=Si;Si=fc(t.stateNode.containerInfo),ls(t,n,r),Si=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=wo,wo=16777216,ls(t,n,r),wo=o):ls(t,n,r));break;default:ls(t,n,r)}}function kg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ro(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,Xg(o,t)}kg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wg(t),t=t.sibling}function Wg(t){switch(t.tag){case 0:case 11:case 15:Ro(t),t.flags&2048&&Ua(9,t,t.return);break;case 3:Ro(t);break;case 12:Ro(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Jl(t)):Ro(t);break;default:Ro(t)}}function Jl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];Sn=o,Xg(o,t)}kg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ua(8,n,n.return),Jl(n);break;case 22:r=n.stateNode,r._visibility&2&&(r._visibility&=-3,Jl(n));break;default:Jl(n)}t=t.sibling}}function Xg(t,n){for(;Sn!==null;){var r=Sn;switch(r.tag){case 0:case 11:case 15:Ua(8,r,n);break;case 23:case 22:if(r.memoizedState!==null&&r.memoizedState.cachePool!==null){var o=r.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:uo(r.memoizedState.cache)}if(o=r.child,o!==null)o.return=r,Sn=o;else e:for(r=t;Sn!==null;){o=Sn;var u=o.sibling,h=o.return;if(Pg(o),o===r){Sn=null;break e}if(u!==null){u.return=h,Sn=u;break e}Sn=h}}}var Ly={getCacheForType:function(t){var n=An(fn),r=n.data.get(t);return r===void 0&&(r=t(),n.data.set(t,r)),r},cacheSignal:function(){return An(fn).controller.signal}},Oy=typeof WeakMap=="function"?WeakMap:Map,zt=0,Yt=null,Mt=null,Tt=0,Gt=0,ei=null,La=!1,cs=!1,Vf=!1,ra=0,an=0,Oa=0,Sr=0,kf=0,ti=0,us=0,Co=null,Vn=null,Wf=!1,$l=0,jg=0,ec=1/0,tc=null,Pa=null,vn=0,Ia=null,fs=null,sa=0,Xf=0,jf=null,qg=null,Do=0,qf=null;function ni(){return(zt&2)!==0&&Tt!==0?Tt&-Tt:B.T!==null?$f():ir()}function Yg(){if(ti===0)if((Tt&536870912)===0||Ct){var t=Oe;Oe<<=1,(Oe&3932160)===0&&(Oe=262144),ti=t}else ti=536870912;return t=Jn.current,t!==null&&(t.flags|=32),ti}function kn(t,n,r){(t===Yt&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)&&(ds(t,0),za(t,Tt,ti,!1)),On(t,r),((zt&2)===0||t!==Yt)&&(t===Yt&&((zt&2)===0&&(Sr|=r),an===4&&za(t,Tt,ti,!1)),Pi(t))}function Zg(t,n,r){if((zt&6)!==0)throw Error(a(327));var o=!r&&(n&127)===0&&(n&t.expiredLanes)===0||Ye(t,n),u=o?zy(t,n):Zf(t,n,!0),h=o;do{if(u===0){cs&&!o&&za(t,n,0,!1);break}else{if(r=t.current.alternate,h&&!Py(r)){u=Zf(t,n,!1),h=!1;continue}if(u===2){if(h=n,t.errorRecoveryDisabledLanes&h)var S=0;else S=t.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var R=t;u=Co;var j=R.current.memoizedState.isDehydrated;if(j&&(ds(R,S).flags|=256),S=Zf(R,S,!1),S!==2){if(Vf&&!j){R.errorRecoveryDisabledLanes|=h,Sr|=h,u=4;break e}h=Vn,Vn=u,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){ds(t,0),za(t,n,0,!0);break}e:{switch(o=t,h=u,h){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:za(o,n,ti,!La);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(u=$l+300-A(),10<u)){if(za(o,n,ti,!La),be(o,0,!0)!==0)break e;sa=n,o.timeoutHandle=A0(Kg.bind(null,o,r,Vn,tc,Wf,n,ti,Sr,us,La,h,"Throttled",-0,0),u);break e}Kg(o,r,Vn,tc,Wf,n,ti,Sr,us,La,h,null,-0,0)}}break}while(!0);Pi(t)}function Kg(t,n,r,o,u,h,S,R,j,fe,ye,Ee,de,_e){if(t.timeoutHandle=-1,Ee=n.subtreeFlags,Ee&8192||(Ee&16785408)===16785408){Ee={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Xi},Vg(n,h,Ee);var Ze=(h&62914560)===h?$l-A():(h&4194048)===h?jg-A():0;if(Ze=xS(Ee,Ze),Ze!==null){sa=h,t.cancelPendingCommit=Ze(a0.bind(null,t,n,h,r,o,u,S,R,j,ye,Ee,null,de,_e)),za(t,h,S,!fe);return}}a0(t,n,h,r,o,u,S,R,j)}function Py(t){for(var n=t;;){var r=n.tag;if((r===0||r===11||r===15)&&n.flags&16384&&(r=n.updateQueue,r!==null&&(r=r.stores,r!==null)))for(var o=0;o<r.length;o++){var u=r[o],h=u.getSnapshot;u=u.value;try{if(!Kn(h(),u))return!1}catch{return!1}}if(r=n.child,n.subtreeFlags&16384&&r!==null)r.return=n,n=r;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function za(t,n,r,o){n&=~kf,n&=~Sr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var h=31-Ve(u),S=1<<h;o[h]=-1,u&=~S}r!==0&&Ks(t,r,n)}function nc(){return(zt&6)===0?(No(0),!1):!0}function Yf(){if(Mt!==null){if(Gt===0)var t=Mt.return;else t=Mt,Zi=dr=null,uf(t),ns=null,ho=0,t=Mt;for(;t!==null;)wg(t.alternate,t),t=t.return;Mt=null}}function ds(t,n){var r=t.timeoutHandle;r!==-1&&(t.timeoutHandle=-1,tS(r)),r=t.cancelPendingCommit,r!==null&&(t.cancelPendingCommit=null,r()),sa=0,Yf(),Yt=t,Mt=r=qi(t.current,null),Tt=n,Gt=0,ei=null,La=!1,cs=Ye(t,n),Vf=!1,us=ti=kf=Sr=Oa=an=0,Vn=Co=null,Wf=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Ve(o),h=1<<u;n|=t[u],o&=~h}return ra=n,El(),r}function Qg(t,n){mt=null,B.H=So,n===ts||n===Nl?(n=hm(),Gt=3):n===Qu?(n=hm(),Gt=4):Gt=n===Af?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,Mt===null&&(an=1,Xl(t,ui(n,t.current)))}function Jg(){var t=Jn.current;return t===null?!0:(Tt&4194048)===Tt?pi===null:(Tt&62914560)===Tt||(Tt&536870912)!==0?t===pi:!1}function $g(){var t=B.H;return B.H=So,t===null?So:t}function e0(){var t=B.A;return B.A=Ly,t}function ic(){an=4,La||(Tt&4194048)!==Tt&&Jn.current!==null||(cs=!0),(Oa&134217727)===0&&(Sr&134217727)===0||Yt===null||za(Yt,Tt,ti,!1)}function Zf(t,n,r){var o=zt;zt|=2;var u=$g(),h=e0();(Yt!==t||Tt!==n)&&(tc=null,ds(t,n)),n=!1;var S=an;e:do try{if(Gt!==0&&Mt!==null){var R=Mt,j=ei;switch(Gt){case 8:Yf(),S=6;break e;case 3:case 2:case 9:case 6:Jn.current===null&&(n=!0);var fe=Gt;if(Gt=0,ei=null,hs(t,R,j,fe),r&&cs){S=0;break e}break;default:fe=Gt,Gt=0,ei=null,hs(t,R,j,fe)}}Iy(),S=an;break}catch(ye){Qg(t,ye)}while(!0);return n&&t.shellSuspendCounter++,Zi=dr=null,zt=o,B.H=u,B.A=h,Mt===null&&(Yt=null,Tt=0,El()),S}function Iy(){for(;Mt!==null;)t0(Mt)}function zy(t,n){var r=zt;zt|=2;var o=$g(),u=e0();Yt!==t||Tt!==n?(tc=null,ec=A()+500,ds(t,n)):cs=Ye(t,n);e:do try{if(Gt!==0&&Mt!==null){n=Mt;var h=ei;t:switch(Gt){case 1:Gt=0,ei=null,hs(t,n,h,1);break;case 2:case 9:if(fm(h)){Gt=0,ei=null,n0(n);break}n=function(){Gt!==2&&Gt!==9||Yt!==t||(Gt=7),Pi(t)},h.then(n,n);break e;case 3:Gt=7;break e;case 4:Gt=5;break e;case 7:fm(h)?(Gt=0,ei=null,n0(n)):(Gt=0,ei=null,hs(t,n,h,7));break;case 5:var S=null;switch(Mt.tag){case 26:S=Mt.memoizedState;case 5:case 27:var R=Mt;if(S?G0(S):R.stateNode.complete){Gt=0,ei=null;var j=R.sibling;if(j!==null)Mt=j;else{var fe=R.return;fe!==null?(Mt=fe,ac(fe)):Mt=null}break t}}Gt=0,ei=null,hs(t,n,h,5);break;case 6:Gt=0,ei=null,hs(t,n,h,6);break;case 8:Yf(),an=6;break e;default:throw Error(a(462))}}By();break}catch(ye){Qg(t,ye)}while(!0);return Zi=dr=null,B.H=o,B.A=u,zt=r,Mt!==null?0:(Yt=null,Tt=0,El(),an)}function By(){for(;Mt!==null&&!Kt();)t0(Mt)}function t0(t){var n=Tg(t.alternate,t,ra);t.memoizedProps=t.pendingProps,n===null?ac(t):Mt=n}function n0(t){var n=t,r=n.alternate;switch(n.tag){case 15:case 0:n=xg(r,n,n.pendingProps,n.type,void 0,Tt);break;case 11:n=xg(r,n,n.pendingProps,n.type.render,n.ref,Tt);break;case 5:uf(n);default:wg(r,n),n=Mt=em(n,ra),n=Tg(r,n,ra)}t.memoizedProps=t.pendingProps,n===null?ac(t):Mt=n}function hs(t,n,r,o){Zi=dr=null,uf(n),ns=null,ho=0;var u=n.return;try{if(Ay(t,u,n,r,Tt)){an=1,Xl(t,ui(r,t.current)),Mt=null;return}}catch(h){if(u!==null)throw Mt=u,h;an=1,Xl(t,ui(r,t.current)),Mt=null;return}n.flags&32768?(Ct||o===1?t=!0:cs||(Tt&536870912)!==0?t=!1:(La=t=!0,(o===2||o===9||o===3||o===6)&&(o=Jn.current,o!==null&&o.tag===13&&(o.flags|=16384))),i0(n,t)):ac(n)}function ac(t){var n=t;do{if((n.flags&32768)!==0){i0(n,La);return}t=n.return;var r=Cy(n.alternate,n,ra);if(r!==null){Mt=r;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=t}while(n!==null);an===0&&(an=5)}function i0(t,n){do{var r=Dy(t.alternate,t);if(r!==null){r.flags&=32767,Mt=r;return}if(r=t.return,r!==null&&(r.flags|=32768,r.subtreeFlags=0,r.deletions=null),!n&&(t=t.sibling,t!==null)){Mt=t;return}Mt=t=r}while(t!==null);an=6,Mt=null}function a0(t,n,r,o,u,h,S,R,j){t.cancelPendingCommit=null;do rc();while(vn!==0);if((zt&6)!==0)throw Error(a(327));if(n!==null){if(n===t.current)throw Error(a(177));if(h=n.lanes|n.childLanes,h|=Iu,li(t,r,h,S,R,j),t===Yt&&(Mt=Yt=null,Tt=0),fs=n,Ia=t,sa=r,Xf=h,jf=u,qg=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Vy(xe,function(){return c0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,u=$.p,$.p=2,S=zt,zt|=4;try{Ny(t,n,r)}finally{zt=S,$.p=u,B.T=o}}vn=1,r0(),s0(),o0()}}function r0(){if(vn===1){vn=0;var t=Ia,n=fs,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=B.T,B.T=null;var o=$.p;$.p=2;var u=zt;zt|=4;try{Fg(n,t);var h=od,S=Xp(t.containerInfo),R=h.focusedElem,j=h.selectionRange;if(S!==R&&R&&R.ownerDocument&&Wp(R.ownerDocument.documentElement,R)){if(j!==null&&Nu(R)){var fe=j.start,ye=j.end;if(ye===void 0&&(ye=fe),"selectionStart"in R)R.selectionStart=fe,R.selectionEnd=Math.min(ye,R.value.length);else{var Ee=R.ownerDocument||document,de=Ee&&Ee.defaultView||window;if(de.getSelection){var _e=de.getSelection(),Ze=R.textContent.length,ct=Math.min(j.start,Ze),Xt=j.end===void 0?ct:Math.min(j.end,Ze);!_e.extend&&ct>Xt&&(S=Xt,Xt=ct,ct=S);var ae=kp(R,ct),K=kp(R,Xt);if(ae&&K&&(_e.rangeCount!==1||_e.anchorNode!==ae.node||_e.anchorOffset!==ae.offset||_e.focusNode!==K.node||_e.focusOffset!==K.offset)){var ue=Ee.createRange();ue.setStart(ae.node,ae.offset),_e.removeAllRanges(),ct>Xt?(_e.addRange(ue),_e.extend(K.node,K.offset)):(ue.setEnd(K.node,K.offset),_e.addRange(ue))}}}}for(Ee=[],_e=R;_e=_e.parentNode;)_e.nodeType===1&&Ee.push({element:_e,left:_e.scrollLeft,top:_e.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Ee.length;R++){var Me=Ee[R];Me.element.scrollLeft=Me.left,Me.element.scrollTop=Me.top}}vc=!!sd,od=sd=null}finally{zt=u,$.p=o,B.T=r}}t.current=n,vn=2}}function s0(){if(vn===2){vn=0;var t=Ia,n=fs,r=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||r){r=B.T,B.T=null;var o=$.p;$.p=2;var u=zt;zt|=4;try{Og(t,n.alternate,n)}finally{zt=u,$.p=o,B.T=r}}vn=3}}function o0(){if(vn===4||vn===3){vn=0,F();var t=Ia,n=fs,r=sa,o=qg;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?vn=5:(vn=0,fs=Ia=null,l0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Pa=null),Fr(r),n=n.stateNode,Le&&typeof Le.onCommitFiberRoot=="function")try{Le.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,u=$.p,$.p=2,B.T=null;try{for(var h=t.onRecoverableError,S=0;S<o.length;S++){var R=o[S];h(R.value,{componentStack:R.stack})}}finally{B.T=n,$.p=u}}(sa&3)!==0&&rc(),Pi(t),u=t.pendingLanes,(r&261930)!==0&&(u&42)!==0?t===qf?Do++:(Do=0,qf=t):Do=0,No(0)}}function l0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,uo(n)))}function rc(){return r0(),s0(),o0(),c0()}function c0(){if(vn!==5)return!1;var t=Ia,n=Xf;Xf=0;var r=Fr(sa),o=B.T,u=$.p;try{$.p=32>r?32:r,B.T=null,r=jf,jf=null;var h=Ia,S=sa;if(vn=0,fs=Ia=null,sa=0,(zt&6)!==0)throw Error(a(331));var R=zt;if(zt|=4,Wg(h.current),Gg(h,h.current,S,r),zt=R,No(0,!1),Le&&typeof Le.onPostCommitFiberRoot=="function")try{Le.onPostCommitFiberRoot(Ce,h)}catch{}return!0}finally{$.p=u,B.T=o,l0(t,n)}}function u0(t,n,r){n=ui(r,n),n=Tf(t.stateNode,n,2),t=Ca(t,n,2),t!==null&&(On(t,2),Pi(t))}function Vt(t,n,r){if(t.tag===3)u0(t,t,r);else for(;n!==null;){if(n.tag===3){u0(n,t,r);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pa===null||!Pa.has(o))){t=ui(r,t),r=fg(2),o=Ca(n,r,2),o!==null&&(dg(r,o,n,t),On(o,2),Pi(o));break}}n=n.return}}function Kf(t,n,r){var o=t.pingCache;if(o===null){o=t.pingCache=new Oy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(r)||(Vf=!0,u.add(r),t=Fy.bind(null,t,n,r),n.then(t,t))}function Fy(t,n,r){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&r,t.warmLanes&=~r,Yt===t&&(Tt&r)===r&&(an===4||an===3&&(Tt&62914560)===Tt&&300>A()-$l?(zt&2)===0&&ds(t,0):kf|=r,us===Tt&&(us=0)),Pi(t)}function f0(t,n){n===0&&(n=Ht()),t=cr(t,n),t!==null&&(On(t,n),Pi(t))}function Hy(t){var n=t.memoizedState,r=0;n!==null&&(r=n.retryLane),f0(t,r)}function Gy(t,n){var r=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(r=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(a(314))}o!==null&&o.delete(n),f0(t,r)}function Vy(t,n){return st(t,n)}var sc=null,ps=null,Qf=!1,oc=!1,Jf=!1,Ba=0;function Pi(t){t!==ps&&t.next===null&&(ps===null?sc=ps=t:ps=ps.next=t),oc=!0,Qf||(Qf=!0,Wy())}function No(t,n){if(!Jf&&oc){Jf=!0;do for(var r=!1,o=sc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,R=o.pingedLanes;h=(1<<31-Ve(42|t)+1)-1,h&=u&~(S&~R),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(r=!0,m0(o,h))}else h=Tt,h=be(o,o===Yt?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ye(o,h)||(r=!0,m0(o,h));o=o.next}while(r);Jf=!1}}function ky(){d0()}function d0(){oc=Qf=!1;var t=0;Ba!==0&&eS()&&(t=Ba);for(var n=A(),r=null,o=sc;o!==null;){var u=o.next,h=h0(o,n);h===0?(o.next=null,r===null?sc=u:r.next=u,u===null&&(ps=r)):(r=o,(t!==0||(h&3)!==0)&&(oc=!0)),o=u}vn!==0&&vn!==5||No(t),Ba!==0&&(Ba=0)}function h0(t,n){for(var r=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,h=t.pendingLanes&-62914561;0<h;){var S=31-Ve(h),R=1<<S,j=u[S];j===-1?((R&r)===0||(R&o)!==0)&&(u[S]=dt(R,n)):j<=n&&(t.expiredLanes|=R),h&=~R}if(n=Yt,r=Tt,r=be(t,t===n?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,r===0||t===n&&(Gt===2||Gt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&$t(o),t.callbackNode=null,t.callbackPriority=0;if((r&3)===0||Ye(t,r)){if(n=r&-r,n===t.callbackPriority)return n;switch(o!==null&&$t(o),Fr(r)){case 2:case 8:r=we;break;case 32:r=xe;break;case 268435456:r=Ue;break;default:r=xe}return o=p0.bind(null,t),r=st(r,o),t.callbackPriority=n,t.callbackNode=r,n}return o!==null&&o!==null&&$t(o),t.callbackPriority=2,t.callbackNode=null,2}function p0(t,n){if(vn!==0&&vn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var r=t.callbackNode;if(rc()&&t.callbackNode!==r)return null;var o=Tt;return o=be(t,t===Yt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(Zg(t,o,n),h0(t,A()),t.callbackNode!=null&&t.callbackNode===r?p0.bind(null,t):null)}function m0(t,n){if(rc())return null;Zg(t,n,!0)}function Wy(){nS(function(){(zt&6)!==0?st(Se,ky):d0()})}function $f(){if(Ba===0){var t=$r;t===0&&(t=De,De<<=1,(De&261888)===0&&(De=256)),Ba=t}return Ba}function g0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ml(""+t)}function v0(t,n){var r=n.ownerDocument.createElement("input");return r.name=n.name,r.value=n.value,t.id&&r.setAttribute("form",t.id),n.parentNode.insertBefore(r,n),t=new FormData(t),r.parentNode.removeChild(r),t}function Xy(t,n,r,o,u){if(n==="submit"&&r&&r.stateNode===u){var h=g0((u[En]||null).action),S=o.submitter;S&&(n=(n=S[En]||null)?g0(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var R=new xl("action","action",null,o,u);t.push({event:R,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ba!==0){var j=S?v0(u,S):new FormData(u);xf(r,{pending:!0,data:j,method:u.method,action:h},null,j)}}else typeof h=="function"&&(R.preventDefault(),j=S?v0(u,S):new FormData(u),xf(r,{pending:!0,data:j,method:u.method,action:h},h,j))},currentTarget:u}]})}}for(var ed=0;ed<Pu.length;ed++){var td=Pu[ed],jy=td.toLowerCase(),qy=td[0].toUpperCase()+td.slice(1);yi(jy,"on"+qy)}yi(Yp,"onAnimationEnd"),yi(Zp,"onAnimationIteration"),yi(Kp,"onAnimationStart"),yi("dblclick","onDoubleClick"),yi("focusin","onFocus"),yi("focusout","onBlur"),yi(cy,"onTransitionRun"),yi(uy,"onTransitionStart"),yi(fy,"onTransitionCancel"),yi(Qp,"onTransitionEnd"),at("onMouseEnter",["mouseout","mouseover"]),at("onMouseLeave",["mouseout","mouseover"]),at("onPointerEnter",["pointerout","pointerover"]),at("onPointerLeave",["pointerout","pointerover"]),He("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),He("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),He("onBeforeInput",["compositionend","keypress","textInput","paste"]),He("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),He("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Uo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Uo));function _0(t,n){n=(n&4)!==0;for(var r=0;r<t.length;r++){var o=t[r],u=o.event;o=o.listeners;e:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var R=o[S],j=R.instance,fe=R.currentTarget;if(R=R.listener,j!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=fe;try{h(u)}catch(ye){Ml(ye)}u.currentTarget=null,h=j}else for(S=0;S<o.length;S++){if(R=o[S],j=R.instance,fe=R.currentTarget,R=R.listener,j!==h&&u.isPropagationStopped())break e;h=R,u.currentTarget=fe;try{h(u)}catch(ye){Ml(ye)}u.currentTarget=null,h=j}}}}function Et(t,n){var r=n[Js];r===void 0&&(r=n[Js]=new Set);var o=t+"__bubble";r.has(o)||(x0(n,t,2,!1),r.add(o))}function nd(t,n,r){var o=0;n&&(o|=4),x0(r,t,o,n)}var lc="_reactListening"+Math.random().toString(36).slice(2);function id(t){if(!t[lc]){t[lc]=!0,ze.forEach(function(r){r!=="selectionchange"&&(Yy.has(r)||nd(r,!1,t),nd(r,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[lc]||(n[lc]=!0,nd("selectionchange",!1,n))}}function x0(t,n,r,o){switch(Y0(n)){case 2:var u=MS;break;case 8:u=ES;break;default:u=_d}r=u.bind(null,n,r,t),u=void 0,!Mu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,r,{capture:!0,passive:u}):t.addEventListener(n,r,!0):u!==void 0?t.addEventListener(n,r,{passive:u}):t.addEventListener(n,r,!1)}function ad(t,n,r,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var R=o.stateNode.containerInfo;if(R===u)break;if(S===4)for(S=o.return;S!==null;){var j=S.tag;if((j===3||j===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;R!==null;){if(S=ie(R),S===null)return;if(j=S.tag,j===5||j===6||j===26||j===27){o=h=S;continue e}R=R.parentNode}}o=o.return}bp(function(){var fe=h,ye=yu(r),Ee=[];e:{var de=Jp.get(t);if(de!==void 0){var _e=xl,Ze=t;switch(t){case"keypress":if(vl(r)===0)break e;case"keydown":case"keyup":_e=Gx;break;case"focusin":Ze="focus",_e=Au;break;case"focusout":Ze="blur",_e=Au;break;case"beforeblur":case"afterblur":_e=Au;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_e=wp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_e=Cx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_e=Wx;break;case Yp:case Zp:case Kp:_e=Ux;break;case Qp:_e=jx;break;case"scroll":case"scrollend":_e=wx;break;case"wheel":_e=Yx;break;case"copy":case"cut":case"paste":_e=Ox;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_e=Cp;break;case"toggle":case"beforetoggle":_e=Kx}var ct=(n&4)!==0,Xt=!ct&&(t==="scroll"||t==="scrollend"),ae=ct?de!==null?de+"Capture":null:de;ct=[];for(var K=fe,ue;K!==null;){var Me=K;if(ue=Me.stateNode,Me=Me.tag,Me!==5&&Me!==26&&Me!==27||ue===null||ae===null||(Me=$s(K,ae),Me!=null&&ct.push(Lo(K,Me,ue))),Xt)break;K=K.return}0<ct.length&&(de=new _e(de,Ze,null,r,ye),Ee.push({event:de,listeners:ct}))}}if((n&7)===0){e:{if(de=t==="mouseover"||t==="pointerover",_e=t==="mouseout"||t==="pointerout",de&&r!==xu&&(Ze=r.relatedTarget||r.fromElement)&&(ie(Ze)||Ze[Sa]))break e;if((_e||de)&&(de=ye.window===ye?ye:(de=ye.ownerDocument)?de.defaultView||de.parentWindow:window,_e?(Ze=r.relatedTarget||r.toElement,_e=fe,Ze=Ze?ie(Ze):null,Ze!==null&&(Xt=c(Ze),ct=Ze.tag,Ze!==Xt||ct!==5&&ct!==27&&ct!==6)&&(Ze=null)):(_e=null,Ze=fe),_e!==Ze)){if(ct=wp,Me="onMouseLeave",ae="onMouseEnter",K="mouse",(t==="pointerout"||t==="pointerover")&&(ct=Cp,Me="onPointerLeave",ae="onPointerEnter",K="pointer"),Xt=_e==null?de:ge(_e),ue=Ze==null?de:ge(Ze),de=new ct(Me,K+"leave",_e,r,ye),de.target=Xt,de.relatedTarget=ue,Me=null,ie(ye)===fe&&(ct=new ct(ae,K+"enter",Ze,r,ye),ct.target=ue,ct.relatedTarget=Xt,Me=ct),Xt=Me,_e&&Ze)t:{for(ct=Zy,ae=_e,K=Ze,ue=0,Me=ae;Me;Me=ct(Me))ue++;Me=0;for(var ot=K;ot;ot=ct(ot))Me++;for(;0<ue-Me;)ae=ct(ae),ue--;for(;0<Me-ue;)K=ct(K),Me--;for(;ue--;){if(ae===K||K!==null&&ae===K.alternate){ct=ae;break t}ae=ct(ae),K=ct(K)}ct=null}else ct=null;_e!==null&&y0(Ee,de,_e,ct,!1),Ze!==null&&Xt!==null&&y0(Ee,Xt,Ze,ct,!0)}}e:{if(de=fe?ge(fe):window,_e=de.nodeName&&de.nodeName.toLowerCase(),_e==="select"||_e==="input"&&de.type==="file")var Lt=zp;else if(Pp(de))if(Bp)Lt=sy;else{Lt=ay;var nt=iy}else _e=de.nodeName,!_e||_e.toLowerCase()!=="input"||de.type!=="checkbox"&&de.type!=="radio"?fe&&_u(fe.elementType)&&(Lt=zp):Lt=ry;if(Lt&&(Lt=Lt(t,fe))){Ip(Ee,Lt,r,ye);break e}nt&&nt(t,de,fe),t==="focusout"&&fe&&de.type==="number"&&fe.memoizedProps.value!=null&&gn(de,"number",de.value)}switch(nt=fe?ge(fe):window,t){case"focusin":(Pp(nt)||nt.contentEditable==="true")&&(Xr=nt,Uu=fe,oo=null);break;case"focusout":oo=Uu=Xr=null;break;case"mousedown":Lu=!0;break;case"contextmenu":case"mouseup":case"dragend":Lu=!1,jp(Ee,r,ye);break;case"selectionchange":if(ly)break;case"keydown":case"keyup":jp(Ee,r,ye)}var gt;if(Ru)e:{switch(t){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Wr?Lp(t,r)&&(At="onCompositionEnd"):t==="keydown"&&r.keyCode===229&&(At="onCompositionStart");At&&(Dp&&r.locale!=="ko"&&(Wr||At!=="onCompositionStart"?At==="onCompositionEnd"&&Wr&&(gt=Tp()):(Ma=ye,Eu="value"in Ma?Ma.value:Ma.textContent,Wr=!0)),nt=cc(fe,At),0<nt.length&&(At=new Rp(At,t,null,r,ye),Ee.push({event:At,listeners:nt}),gt?At.data=gt:(gt=Op(r),gt!==null&&(At.data=gt)))),(gt=Jx?$x(t,r):ey(t,r))&&(At=cc(fe,"onBeforeInput"),0<At.length&&(nt=new Rp("onBeforeInput","beforeinput",null,r,ye),Ee.push({event:nt,listeners:At}),nt.data=gt)),Xy(Ee,t,fe,r,ye)}_0(Ee,n)})}function Lo(t,n,r){return{instance:t,listener:n,currentTarget:r}}function cc(t,n){for(var r=n+"Capture",o=[];t!==null;){var u=t,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=$s(t,r),u!=null&&o.unshift(Lo(t,u,h)),u=$s(t,n),u!=null&&o.push(Lo(t,u,h))),t.tag===3)return o;t=t.return}return[]}function Zy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function y0(t,n,r,o,u){for(var h=n._reactName,S=[];r!==null&&r!==o;){var R=r,j=R.alternate,fe=R.stateNode;if(R=R.tag,j!==null&&j===o)break;R!==5&&R!==26&&R!==27||fe===null||(j=fe,u?(fe=$s(r,h),fe!=null&&S.unshift(Lo(r,fe,j))):u||(fe=$s(r,h),fe!=null&&S.push(Lo(r,fe,j)))),r=r.return}S.length!==0&&t.push({event:n,listeners:S})}var Ky=/\r\n?/g,Qy=/\u0000|\uFFFD/g;function S0(t){return(typeof t=="string"?t:""+t).replace(Ky,`
`).replace(Qy,"")}function M0(t,n){return n=S0(n),S0(t)===n}function Wt(t,n,r,o,u,h){switch(r){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&Gr(t,""+o);break;case"className":Ft(t,"class",o);break;case"tabIndex":Ft(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Ft(t,r,o);break;case"style":Mp(t,o,h);break;case"data":if(n!=="object"){Ft(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||r!=="href")){t.removeAttribute(r);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ml(""+o),t.setAttribute(r,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(r,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(r==="formAction"?(n!=="input"&&Wt(t,n,"name",u.name,u,null),Wt(t,n,"formEncType",u.formEncType,u,null),Wt(t,n,"formMethod",u.formMethod,u,null),Wt(t,n,"formTarget",u.formTarget,u,null)):(Wt(t,n,"encType",u.encType,u,null),Wt(t,n,"method",u.method,u,null),Wt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(r);break}o=ml(""+o),t.setAttribute(r,o);break;case"onClick":o!=null&&(t.onclick=Xi);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}r=ml(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",r);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""+o):t.removeAttribute(r);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,""):t.removeAttribute(r);break;case"capture":case"download":o===!0?t.setAttribute(r,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(r,o):t.removeAttribute(r);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(r,o):t.removeAttribute(r);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(r):t.setAttribute(r,o);break;case"popover":Et("beforetoggle",t),Et("toggle",t),qt(t,"popover",o);break;case"xlinkActuate":St(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":St(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":St(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":St(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":St(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":St(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":St(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":St(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":St(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qt(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(r=Tx.get(r)||r,qt(t,r,o))}}function rd(t,n,r,o,u,h){switch(r){case"style":Mp(t,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(a(61));if(r=o.__html,r!=null){if(u.children!=null)throw Error(a(60));t.innerHTML=r}}break;case"children":typeof o=="string"?Gr(t,o):(typeof o=="number"||typeof o=="bigint")&&Gr(t,""+o);break;case"onScroll":o!=null&&Et("scroll",t);break;case"onScrollEnd":o!=null&&Et("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Xi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Qe.hasOwnProperty(r))e:{if(r[0]==="o"&&r[1]==="n"&&(u=r.endsWith("Capture"),n=r.slice(2,u?r.length-7:void 0),h=t[En]||null,h=h!=null?h[r]:null,typeof h=="function"&&t.removeEventListener(n,h,u),typeof o=="function")){typeof h!="function"&&h!==null&&(r in t?t[r]=null:t.hasAttribute(r)&&t.removeAttribute(r)),t.addEventListener(n,o,u);break e}r in t?t[r]=o:o===!0?t.setAttribute(r,""):qt(t,r,o)}}}function Rn(t,n,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Et("error",t),Et("load",t);var o=!1,u=!1,h;for(h in r)if(r.hasOwnProperty(h)){var S=r[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Wt(t,n,h,S,r,null)}}u&&Wt(t,n,"srcSet",r.srcSet,r,null),o&&Wt(t,n,"src",r.src,r,null);return;case"input":Et("invalid",t);var R=h=S=u=null,j=null,fe=null;for(o in r)if(r.hasOwnProperty(o)){var ye=r[o];if(ye!=null)switch(o){case"name":u=ye;break;case"type":S=ye;break;case"checked":j=ye;break;case"defaultChecked":fe=ye;break;case"value":h=ye;break;case"defaultValue":R=ye;break;case"children":case"dangerouslySetInnerHTML":if(ye!=null)throw Error(a(137,n));break;default:Wt(t,n,o,ye,r,null)}}Pn(t,h,R,j,fe,S,u,!1);return;case"select":Et("invalid",t),o=S=h=null;for(u in r)if(r.hasOwnProperty(u)&&(R=r[u],R!=null))switch(u){case"value":h=R;break;case"defaultValue":S=R;break;case"multiple":o=R;default:Wt(t,n,u,R,r,null)}n=h,r=S,t.multiple=!!o,n!=null?on(t,!!o,n,!1):r!=null&&on(t,!!o,r,!0);return;case"textarea":Et("invalid",t),h=u=o=null;for(S in r)if(r.hasOwnProperty(S)&&(R=r[S],R!=null))switch(S){case"value":o=R;break;case"defaultValue":u=R;break;case"children":h=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(a(91));break;default:Wt(t,n,S,R,r,null)}Ni(t,o,u,h);return;case"option":for(j in r)if(r.hasOwnProperty(j)&&(o=r[j],o!=null))switch(j){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Wt(t,n,j,o,r,null)}return;case"dialog":Et("beforetoggle",t),Et("toggle",t),Et("cancel",t),Et("close",t);break;case"iframe":case"object":Et("load",t);break;case"video":case"audio":for(o=0;o<Uo.length;o++)Et(Uo[o],t);break;case"image":Et("error",t),Et("load",t);break;case"details":Et("toggle",t);break;case"embed":case"source":case"link":Et("error",t),Et("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(fe in r)if(r.hasOwnProperty(fe)&&(o=r[fe],o!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Wt(t,n,fe,o,r,null)}return;default:if(_u(n)){for(ye in r)r.hasOwnProperty(ye)&&(o=r[ye],o!==void 0&&rd(t,n,ye,o,r,void 0));return}}for(R in r)r.hasOwnProperty(R)&&(o=r[R],o!=null&&Wt(t,n,R,o,r,null))}function Jy(t,n,r,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,R=null,j=null,fe=null,ye=null;for(_e in r){var Ee=r[_e];if(r.hasOwnProperty(_e)&&Ee!=null)switch(_e){case"checked":break;case"value":break;case"defaultValue":j=Ee;default:o.hasOwnProperty(_e)||Wt(t,n,_e,null,o,Ee)}}for(var de in o){var _e=o[de];if(Ee=r[de],o.hasOwnProperty(de)&&(_e!=null||Ee!=null))switch(de){case"type":h=_e;break;case"name":u=_e;break;case"checked":fe=_e;break;case"defaultChecked":ye=_e;break;case"value":S=_e;break;case"defaultValue":R=_e;break;case"children":case"dangerouslySetInnerHTML":if(_e!=null)throw Error(a(137,n));break;default:_e!==Ee&&Wt(t,n,de,_e,o,Ee)}}Dn(t,S,R,j,fe,ye,h,u);return;case"select":_e=S=R=de=null;for(h in r)if(j=r[h],r.hasOwnProperty(h)&&j!=null)switch(h){case"value":break;case"multiple":_e=j;default:o.hasOwnProperty(h)||Wt(t,n,h,null,o,j)}for(u in o)if(h=o[u],j=r[u],o.hasOwnProperty(u)&&(h!=null||j!=null))switch(u){case"value":de=h;break;case"defaultValue":R=h;break;case"multiple":S=h;default:h!==j&&Wt(t,n,u,h,o,j)}n=R,r=S,o=_e,de!=null?on(t,!!r,de,!1):!!o!=!!r&&(n!=null?on(t,!!r,n,!0):on(t,!!r,r?[]:"",!1));return;case"textarea":_e=de=null;for(R in r)if(u=r[R],r.hasOwnProperty(R)&&u!=null&&!o.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:Wt(t,n,R,null,o,u)}for(S in o)if(u=o[S],h=r[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":de=u;break;case"defaultValue":_e=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(a(91));break;default:u!==h&&Wt(t,n,S,u,o,h)}Hr(t,de,_e);return;case"option":for(var Ze in r)if(de=r[Ze],r.hasOwnProperty(Ze)&&de!=null&&!o.hasOwnProperty(Ze))switch(Ze){case"selected":t.selected=!1;break;default:Wt(t,n,Ze,null,o,de)}for(j in o)if(de=o[j],_e=r[j],o.hasOwnProperty(j)&&de!==_e&&(de!=null||_e!=null))switch(j){case"selected":t.selected=de&&typeof de!="function"&&typeof de!="symbol";break;default:Wt(t,n,j,de,o,_e)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ct in r)de=r[ct],r.hasOwnProperty(ct)&&de!=null&&!o.hasOwnProperty(ct)&&Wt(t,n,ct,null,o,de);for(fe in o)if(de=o[fe],_e=r[fe],o.hasOwnProperty(fe)&&de!==_e&&(de!=null||_e!=null))switch(fe){case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(a(137,n));break;default:Wt(t,n,fe,de,o,_e)}return;default:if(_u(n)){for(var Xt in r)de=r[Xt],r.hasOwnProperty(Xt)&&de!==void 0&&!o.hasOwnProperty(Xt)&&rd(t,n,Xt,void 0,o,de);for(ye in o)de=o[ye],_e=r[ye],!o.hasOwnProperty(ye)||de===_e||de===void 0&&_e===void 0||rd(t,n,ye,de,o,_e);return}}for(var ae in r)de=r[ae],r.hasOwnProperty(ae)&&de!=null&&!o.hasOwnProperty(ae)&&Wt(t,n,ae,null,o,de);for(Ee in o)de=o[Ee],_e=r[Ee],!o.hasOwnProperty(Ee)||de===_e||de==null&&_e==null||Wt(t,n,Ee,de,o,_e)}function E0(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function $y(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,r=performance.getEntriesByType("resource"),o=0;o<r.length;o++){var u=r[o],h=u.transferSize,S=u.initiatorType,R=u.duration;if(h&&R&&E0(S)){for(S=0,R=u.responseEnd,o+=1;o<r.length;o++){var j=r[o],fe=j.startTime;if(fe>R)break;var ye=j.transferSize,Ee=j.initiatorType;ye&&E0(Ee)&&(j=j.responseEnd,S+=ye*(j<R?1:(R-fe)/(j-fe)))}if(--o,n+=8*(h+S)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var sd=null,od=null;function uc(t){return t.nodeType===9?t:t.ownerDocument}function b0(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function ld(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var cd=null;function eS(){var t=window.event;return t&&t.type==="popstate"?t===cd?!1:(cd=t,!0):(cd=null,!1)}var A0=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,w0=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof w0<"u"?function(t){return w0.resolve(null).then(t).catch(iS)}:A0;function iS(t){setTimeout(function(){throw t})}function Fa(t){return t==="head"}function R0(t,n){var r=n,o=0;do{var u=r.nextSibling;if(t.removeChild(r),u&&u.nodeType===8)if(r=u.data,r==="/$"||r==="/&"){if(o===0){t.removeChild(u),_s(n);return}o--}else if(r==="$"||r==="$?"||r==="$~"||r==="$!"||r==="&")o++;else if(r==="html")Oo(t.ownerDocument.documentElement);else if(r==="head"){r=t.ownerDocument.head,Oo(r);for(var h=r.firstChild;h;){var S=h.nextSibling,R=h.nodeName;h[ar]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&h.rel.toLowerCase()==="stylesheet"||r.removeChild(h),h=S}}else r==="body"&&Oo(t.ownerDocument.body);r=u}while(r);_s(n)}function C0(t,n){var r=t;t=0;do{var o=r.nextSibling;if(r.nodeType===1?n?(r._stashedDisplay=r.style.display,r.style.display="none"):(r.style.display=r._stashedDisplay||"",r.getAttribute("style")===""&&r.removeAttribute("style")):r.nodeType===3&&(n?(r._stashedText=r.nodeValue,r.nodeValue=""):r.nodeValue=r._stashedText||""),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(t===0)break;t--}else r!=="$"&&r!=="$?"&&r!=="$~"&&r!=="$!"||t++;r=o}while(r)}function ud(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var r=n;switch(n=n.nextSibling,r.nodeName){case"HTML":case"HEAD":case"BODY":ud(r),D(r);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(r.rel.toLowerCase()==="stylesheet")continue}t.removeChild(r)}}function aS(t,n,r,o){for(;t.nodeType===1;){var u=r;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ar])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(h=t.getAttribute("rel"),h==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(h!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(h=t.getAttribute("src"),(h!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===h)return t}else return t;if(t=mi(t.nextSibling),t===null)break}return null}function rS(t,n,r){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!r||(t=mi(t.nextSibling),t===null))return null;return t}function D0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=mi(t.nextSibling),t===null))return null;return t}function fd(t){return t.data==="$?"||t.data==="$~"}function dd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function sS(t,n){var r=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||r.readyState!=="loading")n();else{var o=function(){n(),r.removeEventListener("DOMContentLoaded",o)};r.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function mi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var hd=null;function N0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="/$"||r==="/&"){if(n===0)return mi(t.nextSibling);n--}else r!=="$"&&r!=="$!"&&r!=="$?"&&r!=="$~"&&r!=="&"||n++}t=t.nextSibling}return null}function U0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var r=t.data;if(r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"){if(n===0)return t;n--}else r!=="/$"&&r!=="/&"||n++}t=t.previousSibling}return null}function L0(t,n,r){switch(n=uc(r),t){case"html":if(t=n.documentElement,!t)throw Error(a(452));return t;case"head":if(t=n.head,!t)throw Error(a(453));return t;case"body":if(t=n.body,!t)throw Error(a(454));return t;default:throw Error(a(451))}}function Oo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);D(t)}var gi=new Map,O0=new Set;function fc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var oa=$.d;$.d={f:oS,r:lS,D:cS,C:uS,L:fS,m:dS,X:pS,S:hS,M:mS};function oS(){var t=oa.f(),n=nc();return t||n}function lS(t){var n=he(t);n!==null&&n.tag===5&&n.type==="form"?Qm(n):oa.r(t)}var ms=typeof document>"u"?null:document;function P0(t,n,r){var o=ms;if(o&&typeof n=="string"&&n){var u=bt(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof r=="string"&&(u+='[crossorigin="'+r+'"]'),O0.has(u)||(O0.add(u),t={rel:t,crossOrigin:r,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Rn(n,"link",t),Ae(n),o.head.appendChild(n)))}}function cS(t){oa.D(t),P0("dns-prefetch",t,null)}function uS(t,n){oa.C(t,n),P0("preconnect",t,n)}function fS(t,n,r){oa.L(t,n,r);var o=ms;if(o&&t&&n){var u='link[rel="preload"][as="'+bt(n)+'"]';n==="image"&&r&&r.imageSrcSet?(u+='[imagesrcset="'+bt(r.imageSrcSet)+'"]',typeof r.imageSizes=="string"&&(u+='[imagesizes="'+bt(r.imageSizes)+'"]')):u+='[href="'+bt(t)+'"]';var h=u;switch(n){case"style":h=gs(t);break;case"script":h=vs(t)}gi.has(h)||(t=v({rel:"preload",href:n==="image"&&r&&r.imageSrcSet?void 0:t,as:n},r),gi.set(h,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Po(h))||n==="script"&&o.querySelector(Io(h))||(n=o.createElement("link"),Rn(n,"link",t),Ae(n),o.head.appendChild(n)))}}function dS(t,n){oa.m(t,n);var r=ms;if(r&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+bt(o)+'"][href="'+bt(t)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=vs(t)}if(!gi.has(h)&&(t=v({rel:"modulepreload",href:t},n),gi.set(h,t),r.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(r.querySelector(Io(h)))return}o=r.createElement("link"),Rn(o,"link",t),Ae(o),r.head.appendChild(o)}}}function hS(t,n,r){oa.S(t,n,r);var o=ms;if(o&&t){var u=re(o).hoistableStyles,h=gs(t);n=n||"default";var S=u.get(h);if(!S){var R={loading:0,preload:null};if(S=o.querySelector(Po(h)))R.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},r),(r=gi.get(h))&&pd(t,r);var j=S=o.createElement("link");Ae(j),Rn(j,"link",t),j._p=new Promise(function(fe,ye){j.onload=fe,j.onerror=ye}),j.addEventListener("load",function(){R.loading|=1}),j.addEventListener("error",function(){R.loading|=2}),R.loading|=4,dc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:R},u.set(h,S)}}}function pS(t,n){oa.X(t,n);var r=ms;if(r&&t){var o=re(r).hoistableScripts,u=vs(t),h=o.get(u);h||(h=r.querySelector(Io(u)),h||(t=v({src:t,async:!0},n),(n=gi.get(u))&&md(t,n),h=r.createElement("script"),Ae(h),Rn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function mS(t,n){oa.M(t,n);var r=ms;if(r&&t){var o=re(r).hoistableScripts,u=vs(t),h=o.get(u);h||(h=r.querySelector(Io(u)),h||(t=v({src:t,async:!0,type:"module"},n),(n=gi.get(u))&&md(t,n),h=r.createElement("script"),Ae(h),Rn(h,"link",t),r.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function I0(t,n,r,o){var u=(u=H.current)?fc(u):null;if(!u)throw Error(a(446));switch(t){case"meta":case"title":return null;case"style":return typeof r.precedence=="string"&&typeof r.href=="string"?(n=gs(r.href),r=re(u).hoistableStyles,o=r.get(n),o||(o={type:"style",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(r.rel==="stylesheet"&&typeof r.href=="string"&&typeof r.precedence=="string"){t=gs(r.href);var h=re(u).hoistableStyles,S=h.get(t);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(t,S),(h=u.querySelector(Po(t)))&&!h._p&&(S.instance=h,S.state.loading=5),gi.has(t)||(r={rel:"preload",as:"style",href:r.href,crossOrigin:r.crossOrigin,integrity:r.integrity,media:r.media,hrefLang:r.hrefLang,referrerPolicy:r.referrerPolicy},gi.set(t,r),h||gS(u,t,r,S.state))),n&&o===null)throw Error(a(528,""));return S}if(n&&o!==null)throw Error(a(529,""));return null;case"script":return n=r.async,r=r.src,typeof r=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=vs(r),r=re(u).hoistableScripts,o=r.get(n),o||(o={type:"script",instance:null,count:0,state:null},r.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,t))}}function gs(t){return'href="'+bt(t)+'"'}function Po(t){return'link[rel="stylesheet"]['+t+"]"}function z0(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function gS(t,n,r,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Rn(n,"link",r),Ae(n),t.head.appendChild(n))}function vs(t){return'[src="'+bt(t)+'"]'}function Io(t){return"script[async]"+t}function B0(t,n,r){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+bt(r.href)+'"]');if(o)return n.instance=o,Ae(o),o;var u=v({},r,{"data-href":r.href,"data-precedence":r.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Ae(o),Rn(o,"style",u),dc(o,r.precedence,t),n.instance=o;case"stylesheet":u=gs(r.href);var h=t.querySelector(Po(u));if(h)return n.state.loading|=4,n.instance=h,Ae(h),h;o=z0(r),(u=gi.get(u))&&pd(o,u),h=(t.ownerDocument||t).createElement("link"),Ae(h);var S=h;return S._p=new Promise(function(R,j){S.onload=R,S.onerror=j}),Rn(h,"link",o),n.state.loading|=4,dc(h,r.precedence,t),n.instance=h;case"script":return h=vs(r.src),(u=t.querySelector(Io(h)))?(n.instance=u,Ae(u),u):(o=r,(u=gi.get(h))&&(o=v({},r),md(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ae(u),Rn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,dc(o,r.precedence,t));return n.instance}function dc(t,n,r){for(var o=r.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var R=o[S];if(R.dataset.precedence===n)h=R;else if(h!==u)break}h?h.parentNode.insertBefore(t,h.nextSibling):(n=r.nodeType===9?r.head:r,n.insertBefore(t,n.firstChild))}function pd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function md(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var hc=null;function F0(t,n,r){if(hc===null){var o=new Map,u=hc=new Map;u.set(r,o)}else u=hc,o=u.get(r),o||(o=new Map,u.set(r,o));if(o.has(t))return o;for(o.set(t,null),r=r.getElementsByTagName(t),u=0;u<r.length;u++){var h=r[u];if(!(h[ar]||h[un]||t==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=t+S;var R=o.get(S);R?R.push(h):o.set(S,[h])}}return o}function H0(t,n,r){t=t.ownerDocument||t,t.head.insertBefore(r,n==="title"?t.querySelector("head > title"):null)}function vS(t,n,r){if(r===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function G0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function _S(t,n,r,o){if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(r.state.loading&4)===0){if(r.instance===null){var u=gs(o.href),h=n.querySelector(Po(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=pc.bind(t),n.then(t,t)),r.state.loading|=4,r.instance=h,Ae(h);return}h=n.ownerDocument||n,o=z0(o),(u=gi.get(u))&&pd(o,u),h=h.createElement("link"),Ae(h);var S=h;S._p=new Promise(function(R,j){S.onload=R,S.onerror=j}),Rn(h,"link",o),r.instance=h}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(r,n),(n=r.state.preload)&&(r.state.loading&3)===0&&(t.count++,r=pc.bind(t),n.addEventListener("load",r),n.addEventListener("error",r))}}var gd=0;function xS(t,n){return t.stylesheets&&t.count===0&&gc(t,t.stylesheets),0<t.count||0<t.imgCount?function(r){var o=setTimeout(function(){if(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend){var h=t.unsuspend;t.unsuspend=null,h()}},6e4+n);0<t.imgBytes&&gd===0&&(gd=62500*$y());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&gc(t,t.stylesheets),t.unsuspend)){var h=t.unsuspend;t.unsuspend=null,h()}},(t.imgBytes>gd?50:800)+n);return t.unsuspend=r,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var mc=null;function gc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,mc=new Map,n.forEach(yS,t),mc=null,pc.call(t))}function yS(t,n){if(!(n.state.loading&4)){var r=mc.get(t);if(r)var o=r.get(null);else{r=new Map,mc.set(t,r);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(r.set(S.dataset.precedence,S),o=S)}o&&r.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=r.get(S)||o,h===o&&r.set(null,u),r.set(S,u),this.count++,o=pc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var zo={$$typeof:N,Provider:null,Consumer:null,_currentValue:te,_currentValue2:te,_threadCount:0};function SS(t,n,r,o,u,h,S,R,j){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Nt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nt(0),this.hiddenUpdates=Nt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=j,this.incompleteTransitions=new Map}function V0(t,n,r,o,u,h,S,R,j,fe,ye,Ee){return t=new SS(t,n,r,S,j,fe,ye,Ee,R),n=1,h===!0&&(n|=24),h=Qn(3,null,null,n),t.current=h,h.stateNode=t,n=Yu(),n.refCount++,t.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:r,cache:n},Ju(h),t}function k0(t){return t?(t=Yr,t):Yr}function W0(t,n,r,o,u,h){u=k0(u),o.context===null?o.context=u:o.pendingContext=u,o=Ra(n),o.payload={element:r},h=h===void 0?null:h,h!==null&&(o.callback=h),r=Ca(t,o,n),r!==null&&(kn(r,t,n),mo(r,t,n))}function X0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var r=t.retryLane;t.retryLane=r!==0&&r<n?r:n}}function vd(t,n){X0(t,n),(t=t.alternate)&&X0(t,n)}function j0(t){if(t.tag===13||t.tag===31){var n=cr(t,67108864);n!==null&&kn(n,t,67108864),vd(t,67108864)}}function q0(t){if(t.tag===13||t.tag===31){var n=ni();n=Br(n);var r=cr(t,n);r!==null&&kn(r,t,n),vd(t,n)}}var vc=!0;function MS(t,n,r,o){var u=B.T;B.T=null;var h=$.p;try{$.p=2,_d(t,n,r,o)}finally{$.p=h,B.T=u}}function ES(t,n,r,o){var u=B.T;B.T=null;var h=$.p;try{$.p=8,_d(t,n,r,o)}finally{$.p=h,B.T=u}}function _d(t,n,r,o){if(vc){var u=xd(o);if(u===null)ad(t,n,o,_c,r),Z0(t,o);else if(TS(u,t,n,r,o))o.stopPropagation();else if(Z0(t,o),n&4&&-1<bS.indexOf(t)){for(;u!==null;){var h=he(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Re(h.pendingLanes);if(S!==0){var R=h;for(R.pendingLanes|=2,R.entangledLanes|=2;S;){var j=1<<31-Ve(S);R.entanglements[1]|=j,S&=~j}Pi(h),(zt&6)===0&&(ec=A()+500,No(0))}}break;case 31:case 13:R=cr(h,2),R!==null&&kn(R,h,2),nc(),vd(h,2)}if(h=xd(o),h===null&&ad(t,n,o,_c,r),h===u)break;u=h}u!==null&&o.stopPropagation()}else ad(t,n,o,null,r)}}function xd(t){return t=yu(t),yd(t)}var _c=null;function yd(t){if(_c=null,t=ie(t),t!==null){var n=c(t);if(n===null)t=null;else{var r=n.tag;if(r===13){if(t=f(n),t!==null)return t;t=null}else if(r===31){if(t=d(n),t!==null)return t;t=null}else if(r===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return _c=t,null}function Y0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ce()){case Se:return 2;case we:return 8;case xe:case et:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Sd=!1,Ha=null,Ga=null,Va=null,Bo=new Map,Fo=new Map,ka=[],bS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Z0(t,n){switch(t){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":Ga=null;break;case"mouseover":case"mouseout":Va=null;break;case"pointerover":case"pointerout":Bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(n.pointerId)}}function Ho(t,n,r,o,u,h){return t===null||t.nativeEvent!==h?(t={blockedOn:n,domEventName:r,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=he(n),n!==null&&j0(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function TS(t,n,r,o,u){switch(n){case"focusin":return Ha=Ho(Ha,t,n,r,o,u),!0;case"dragenter":return Ga=Ho(Ga,t,n,r,o,u),!0;case"mouseover":return Va=Ho(Va,t,n,r,o,u),!0;case"pointerover":var h=u.pointerId;return Bo.set(h,Ho(Bo.get(h)||null,t,n,r,o,u)),!0;case"gotpointercapture":return h=u.pointerId,Fo.set(h,Ho(Fo.get(h)||null,t,n,r,o,u)),!0}return!1}function K0(t){var n=ie(t.target);if(n!==null){var r=c(n);if(r!==null){if(n=r.tag,n===13){if(n=f(r),n!==null){t.blockedOn=n,Qs(t.priority,function(){q0(r)});return}}else if(n===31){if(n=d(r),n!==null){t.blockedOn=n,Qs(t.priority,function(){q0(r)});return}}else if(n===3&&r.stateNode.current.memoizedState.isDehydrated){t.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var r=xd(t.nativeEvent);if(r===null){r=t.nativeEvent;var o=new r.constructor(r.type,r);xu=o,r.target.dispatchEvent(o),xu=null}else return n=he(r),n!==null&&j0(n),t.blockedOn=r,!1;n.shift()}return!0}function Q0(t,n,r){xc(t)&&r.delete(n)}function AS(){Sd=!1,Ha!==null&&xc(Ha)&&(Ha=null),Ga!==null&&xc(Ga)&&(Ga=null),Va!==null&&xc(Va)&&(Va=null),Bo.forEach(Q0),Fo.forEach(Q0)}function yc(t,n){t.blockedOn===n&&(t.blockedOn=null,Sd||(Sd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,AS)))}var Sc=null;function J0(t){Sc!==t&&(Sc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Sc===t&&(Sc=null);for(var n=0;n<t.length;n+=3){var r=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(yd(o||r)===null)continue;break}var h=he(r);h!==null&&(t.splice(n,3),n-=3,xf(h,{pending:!0,data:u,method:r.method,action:o},o,u))}}))}function _s(t){function n(j){return yc(j,t)}Ha!==null&&yc(Ha,t),Ga!==null&&yc(Ga,t),Va!==null&&yc(Va,t),Bo.forEach(n),Fo.forEach(n);for(var r=0;r<ka.length;r++){var o=ka[r];o.blockedOn===t&&(o.blockedOn=null)}for(;0<ka.length&&(r=ka[0],r.blockedOn===null);)K0(r),r.blockedOn===null&&ka.shift();if(r=(t.ownerDocument||t).$$reactFormReplay,r!=null)for(o=0;o<r.length;o+=3){var u=r[o],h=r[o+1],S=u[En]||null;if(typeof h=="function")S||J0(r);else if(S){var R=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[En]||null)R=S.formAction;else if(yd(u)!==null)continue}else R=S.action;typeof R=="function"?r[o+1]=R:(r.splice(o,3),o-=3),J0(r)}}}function $0(){function t(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(r,20)}function r(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(r,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Md(t){this._internalRoot=t}Mc.prototype.render=Md.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(a(409));var r=n.current,o=ni();W0(r,o,t,n,null,null)},Mc.prototype.unmount=Md.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;W0(t.current,2,null,t,null,null),nc(),n[Sa]=null}};function Mc(t){this._internalRoot=t}Mc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ir();t={blockedOn:null,target:t,priority:n};for(var r=0;r<ka.length&&n!==0&&n<ka[r].priority;r++);ka.splice(r,0,t),r===0&&K0(t)}};var ev=e.version;if(ev!=="19.2.0")throw Error(a(527,ev,"19.2.0"));$.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(a(188)):(t=Object.keys(t).join(","),Error(a(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var wS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ec=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ec.isDisabled&&Ec.supportsFiber)try{Ce=Ec.inject(wS),Le=Ec}catch{}}return Vo.createRoot=function(t,n){if(!l(t))throw Error(a(299));var r=!1,o="",u=og,h=lg,S=cg;return n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=V0(t,1,!1,null,null,r,o,null,u,h,S,$0),t[Sa]=n.current,id(t),new Md(n)},Vo.hydrateRoot=function(t,n,r){if(!l(t))throw Error(a(299));var o=!1,u="",h=og,S=lg,R=cg,j=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(S=r.onCaughtError),r.onRecoverableError!==void 0&&(R=r.onRecoverableError),r.formState!==void 0&&(j=r.formState)),n=V0(t,1,!0,n,r??null,o,u,j,h,S,R,$0),n.context=k0(null),r=n.current,o=ni(),o=Br(o),u=Ra(o),u.callback=null,Ca(r,u,o),r=o,n.current.lanes=r,On(n,r),Pi(n),t[Sa]=n.current,id(t),new Mc(n)},Vo.version="19.2.0",Vo}var uv;function BS(){if(uv)return Td.exports;uv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Td.exports=zS(),Td.exports}var FS=BS();/**
 * react-router v7.9.4
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var fv="popstate";function HS(s={}){function e(a,l){let{pathname:c,search:f,hash:d}=a.location;return fh("",{pathname:c,search:f,hash:d},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function i(a,l){return typeof l=="string"?l:Jo(l)}return VS(e,i,null,s)}function tn(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function Hi(s,e){if(!s){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GS(){return Math.random().toString(36).substring(2,10)}function dv(s,e){return{usr:s.state,key:s.key,idx:e}}function fh(s,e,i=null,a){return{pathname:typeof s=="string"?s:s.pathname,search:"",hash:"",...typeof e=="string"?Xs(e):e,state:i,key:e&&e.key||a||GS()}}function Jo({pathname:s="/",search:e="",hash:i=""}){return e&&e!=="?"&&(s+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(s+=i.charAt(0)==="#"?i:"#"+i),s}function Xs(s){let e={};if(s){let i=s.indexOf("#");i>=0&&(e.hash=s.substring(i),s=s.substring(0,i));let a=s.indexOf("?");a>=0&&(e.search=s.substring(a),s=s.substring(0,a)),s&&(e.pathname=s)}return e}function VS(s,e,i,a={}){let{window:l=document.defaultView,v5Compat:c=!1}=a,f=l.history,d="POP",p=null,m=g();m==null&&(m=0,f.replaceState({...f.state,idx:m},""));function g(){return(f.state||{idx:null}).idx}function v(){d="POP";let y=g(),_=y==null?null:y-m;m=y,p&&p({action:d,location:T.location,delta:_})}function x(y,_){d="PUSH";let C=fh(T.location,y,_);m=g()+1;let N=dv(C,m),O=T.createHref(C);try{f.pushState(N,"",O)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;l.location.assign(O)}c&&p&&p({action:d,location:T.location,delta:1})}function E(y,_){d="REPLACE";let C=fh(T.location,y,_);m=g();let N=dv(C,m),O=T.createHref(C);f.replaceState(N,"",O),c&&p&&p({action:d,location:T.location,delta:0})}function b(y){return kS(y)}let T={get action(){return d},get location(){return s(l,f)},listen(y){if(p)throw new Error("A history only accepts one active listener");return l.addEventListener(fv,v),p=y,()=>{l.removeEventListener(fv,v),p=null}},createHref(y){return e(l,y)},createURL:b,encodeLocation(y){let _=b(y);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:E,go(y){return f.go(y)}};return T}function kS(s,e=!1){let i="http://localhost";typeof window<"u"&&(i=window.location.origin!=="null"?window.location.origin:window.location.href),tn(i,"No window.location.(origin|href) available to create URL");let a=typeof s=="string"?s:Jo(s);return a=a.replace(/ $/,"%20"),!e&&a.startsWith("//")&&(a=i+a),new URL(a,i)}function m_(s,e,i="/"){return WS(s,e,i,!1)}function WS(s,e,i,a){let l=typeof e=="string"?Xs(e):e,c=_a(l.pathname||"/",i);if(c==null)return null;let f=g_(s);XS(f);let d=null;for(let p=0;d==null&&p<f.length;++p){let m=nM(c);d=eM(f[p],m,a)}return d}function g_(s,e=[],i=[],a="",l=!1){let c=(f,d,p=l,m)=>{let g={relativePath:m===void 0?f.path||"":m,caseSensitive:f.caseSensitive===!0,childrenIndex:d,route:f};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(a)&&p)return;tn(g.relativePath.startsWith(a),`Absolute route path "${g.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(a.length)}let v=ga([a,g.relativePath]),x=i.concat(g);f.children&&f.children.length>0&&(tn(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),g_(f.children,e,x,v,p)),!(f.path==null&&!f.index)&&e.push({path:v,score:JS(v,f.index),routesMeta:x})};return s.forEach((f,d)=>{if(f.path===""||!f.path?.includes("?"))c(f,d);else for(let p of v_(f.path))c(f,d,!0,p)}),e}function v_(s){let e=s.split("/");if(e.length===0)return[];let[i,...a]=e,l=i.endsWith("?"),c=i.replace(/\?$/,"");if(a.length===0)return l?[c,""]:[c];let f=v_(a.join("/")),d=[];return d.push(...f.map(p=>p===""?c:[c,p].join("/"))),l&&d.push(...f),d.map(p=>s.startsWith("/")&&p===""?"/":p)}function XS(s){s.sort((e,i)=>e.score!==i.score?i.score-e.score:$S(e.routesMeta.map(a=>a.childrenIndex),i.routesMeta.map(a=>a.childrenIndex)))}var jS=/^:[\w-]+$/,qS=3,YS=2,ZS=1,KS=10,QS=-2,hv=s=>s==="*";function JS(s,e){let i=s.split("/"),a=i.length;return i.some(hv)&&(a+=QS),e&&(a+=YS),i.filter(l=>!hv(l)).reduce((l,c)=>l+(jS.test(c)?qS:c===""?ZS:KS),a)}function $S(s,e){return s.length===e.length&&s.slice(0,-1).every((a,l)=>a===e[l])?s[s.length-1]-e[e.length-1]:0}function eM(s,e,i=!1){let{routesMeta:a}=s,l={},c="/",f=[];for(let d=0;d<a.length;++d){let p=a[d],m=d===a.length-1,g=c==="/"?e:e.slice(c.length)||"/",v=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},g),x=p.route;if(!v&&m&&i&&!a[a.length-1].route.index&&(v=iu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!v)return null;Object.assign(l,v.params),f.push({params:l,pathname:ga([c,v.pathname]),pathnameBase:sM(ga([c,v.pathnameBase])),route:x}),v.pathnameBase!=="/"&&(c=ga([c,v.pathnameBase]))}return f}function iu(s,e){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[i,a]=tM(s.path,s.caseSensitive,s.end),l=e.match(i);if(!l)return null;let c=l[0],f=c.replace(/(.)\/+$/,"$1"),d=l.slice(1);return{params:a.reduce((m,{paramName:g,isOptional:v},x)=>{if(g==="*"){let b=d[x]||"";f=c.slice(0,c.length-b.length).replace(/(.)\/+$/,"$1")}const E=d[x];return v&&!E?m[g]=void 0:m[g]=(E||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:f,pattern:s}}function tM(s,e=!1,i=!0){Hi(s==="*"||!s.endsWith("*")||s.endsWith("/*"),`Route path "${s}" will be treated as if it were "${s.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${s.replace(/\*$/,"/*")}".`);let a=[],l="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return s.endsWith("*")?(a.push({paramName:"*"}),l+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?l+="\\/*$":s!==""&&s!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,e?void 0:"i"),a]}function nM(s){try{return s.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Hi(!1,`The URL path "${s}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),s}}function _a(s,e){if(e==="/")return s;if(!s.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,a=s.charAt(i);return a&&a!=="/"?null:s.slice(i)||"/"}function iM(s,e="/"){let{pathname:i,search:a="",hash:l=""}=typeof s=="string"?Xs(s):s;return{pathname:i?i.startsWith("/")?i:aM(i,e):e,search:oM(a),hash:lM(l)}}function aM(s,e){let i=e.replace(/\/+$/,"").split("/");return s.split("/").forEach(l=>{l===".."?i.length>1&&i.pop():l!=="."&&i.push(l)}),i.length>1?i.join("/"):"/"}function Cd(s,e,i,a){return`Cannot include a '${s}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function rM(s){return s.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function __(s){let e=rM(s);return e.map((i,a)=>a===e.length-1?i.pathname:i.pathnameBase)}function x_(s,e,i,a=!1){let l;typeof s=="string"?l=Xs(s):(l={...s},tn(!l.pathname||!l.pathname.includes("?"),Cd("?","pathname","search",l)),tn(!l.pathname||!l.pathname.includes("#"),Cd("#","pathname","hash",l)),tn(!l.search||!l.search.includes("#"),Cd("#","search","hash",l)));let c=s===""||l.pathname==="",f=c?"/":l.pathname,d;if(f==null)d=i;else{let v=e.length-1;if(!a&&f.startsWith("..")){let x=f.split("/");for(;x[0]==="..";)x.shift(),v-=1;l.pathname=x.join("/")}d=v>=0?e[v]:"/"}let p=iM(l,d),m=f&&f!=="/"&&f.endsWith("/"),g=(c||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(m||g)&&(p.pathname+="/"),p}var ga=s=>s.join("/").replace(/\/\/+/g,"/"),sM=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),oM=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,lM=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function cM(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}var y_=["POST","PUT","PATCH","DELETE"];new Set(y_);var uM=["GET",...y_];new Set(uM);var js=q.createContext(null);js.displayName="DataRouter";var cu=q.createContext(null);cu.displayName="DataRouterState";q.createContext(!1);var S_=q.createContext({isTransitioning:!1});S_.displayName="ViewTransition";var fM=q.createContext(new Map);fM.displayName="Fetchers";var dM=q.createContext(null);dM.displayName="Await";var ki=q.createContext(null);ki.displayName="Navigation";var al=q.createContext(null);al.displayName="Location";var xa=q.createContext({outlet:null,matches:[],isDataRoute:!1});xa.displayName="Route";var rp=q.createContext(null);rp.displayName="RouteError";function hM(s,{relative:e}={}){tn(rl(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:a}=q.useContext(ki),{hash:l,pathname:c,search:f}=ol(s,{relative:e}),d=c;return i!=="/"&&(d=c==="/"?i:ga([i,c])),a.createHref({pathname:d,search:f,hash:l})}function rl(){return q.useContext(al)!=null}function ya(){return tn(rl(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(al).location}var M_="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function E_(s){q.useContext(ki).static||q.useLayoutEffect(s)}function sl(){let{isDataRoute:s}=q.useContext(xa);return s?AM():pM()}function pM(){tn(rl(),"useNavigate() may be used only in the context of a <Router> component.");let s=q.useContext(js),{basename:e,navigator:i}=q.useContext(ki),{matches:a}=q.useContext(xa),{pathname:l}=ya(),c=JSON.stringify(__(a)),f=q.useRef(!1);return E_(()=>{f.current=!0}),q.useCallback((p,m={})=>{if(Hi(f.current,M_),!f.current)return;if(typeof p=="number"){i.go(p);return}let g=x_(p,JSON.parse(c),l,m.relative==="path");s==null&&e!=="/"&&(g.pathname=g.pathname==="/"?e:ga([e,g.pathname])),(m.replace?i.replace:i.push)(g,m.state,m)},[e,i,c,l,s])}q.createContext(null);function ol(s,{relative:e}={}){let{matches:i}=q.useContext(xa),{pathname:a}=ya(),l=JSON.stringify(__(i));return q.useMemo(()=>x_(s,JSON.parse(l),a,e==="path"),[s,l,a,e])}function mM(s,e){return b_(s,e)}function b_(s,e,i,a,l){tn(rl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:c}=q.useContext(ki),{matches:f}=q.useContext(xa),d=f[f.length-1],p=d?d.params:{},m=d?d.pathname:"/",g=d?d.pathnameBase:"/",v=d&&d.route;{let C=v&&v.path||"";T_(m,!v||C.endsWith("*")||C.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${C}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${C}"> to <Route path="${C==="/"?"*":`${C}/*`}">.`)}let x=ya(),E;if(e){let C=typeof e=="string"?Xs(e):e;tn(g==="/"||C.pathname?.startsWith(g),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${g}" but pathname "${C.pathname}" was given in the \`location\` prop.`),E=C}else E=x;let b=E.pathname||"/",T=b;if(g!=="/"){let C=g.replace(/^\//,"").split("/");T="/"+b.replace(/^\//,"").split("/").slice(C.length).join("/")}let y=m_(s,{pathname:T});Hi(v||y!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),Hi(y==null||y[y.length-1].route.element!==void 0||y[y.length-1].route.Component!==void 0||y[y.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=yM(y&&y.map(C=>Object.assign({},C,{params:Object.assign({},p,C.params),pathname:ga([g,c.encodeLocation?c.encodeLocation(C.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?g:ga([g,c.encodeLocation?c.encodeLocation(C.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:C.pathnameBase])})),f,i,a,l);return e&&_?q.createElement(al.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...E},navigationType:"POP"}},_):_}function gM(){let s=TM(),e=cM(s)?`${s.status} ${s.statusText}`:s instanceof Error?s.message:JSON.stringify(s),i=s instanceof Error?s.stack:null,a="rgba(200,200,200, 0.5)",l={padding:"0.5rem",backgroundColor:a},c={padding:"2px 4px",backgroundColor:a},f=null;return console.error("Error handled by React Router default ErrorBoundary:",s),f=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:c},"ErrorBoundary")," or"," ",q.createElement("code",{style:c},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},e),i?q.createElement("pre",{style:l},i):null,f)}var vM=q.createElement(gM,null),_M=class extends q.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,e){return e.location!==s.location||e.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:e.error,location:e.location,revalidation:s.revalidation||e.revalidation}}componentDidCatch(s,e){this.props.unstable_onError?this.props.unstable_onError(s,e):console.error("React Router caught the following error during render",s)}render(){return this.state.error!==void 0?q.createElement(xa.Provider,{value:this.props.routeContext},q.createElement(rp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function xM({routeContext:s,match:e,children:i}){let a=q.useContext(js);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),q.createElement(xa.Provider,{value:s},i)}function yM(s,e=[],i=null,a=null,l=null){if(s==null){if(!i)return null;if(i.errors)s=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)s=i.matches;else return null}let c=s,f=i?.errors;if(f!=null){let m=c.findIndex(g=>g.route.id&&f?.[g.route.id]!==void 0);tn(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),c=c.slice(0,Math.min(c.length,m+1))}let d=!1,p=-1;if(i)for(let m=0;m<c.length;m++){let g=c[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(p=m),g.route.id){let{loaderData:v,errors:x}=i,E=g.route.loader&&!v.hasOwnProperty(g.route.id)&&(!x||x[g.route.id]===void 0);if(g.route.lazy||E){d=!0,p>=0?c=c.slice(0,p+1):c=[c[0]];break}}}return c.reduceRight((m,g,v)=>{let x,E=!1,b=null,T=null;i&&(x=f&&g.route.id?f[g.route.id]:void 0,b=g.route.errorElement||vM,d&&(p<0&&v===0?(T_("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,T=null):p===v&&(E=!0,T=g.route.hydrateFallbackElement||null)));let y=e.concat(c.slice(0,v+1)),_=()=>{let C;return x?C=b:E?C=T:g.route.Component?C=q.createElement(g.route.Component,null):g.route.element?C=g.route.element:C=m,q.createElement(xM,{match:g,routeContext:{outlet:m,matches:y,isDataRoute:i!=null},children:C})};return i&&(g.route.ErrorBoundary||g.route.errorElement||v===0)?q.createElement(_M,{location:i.location,revalidation:i.revalidation,component:b,error:x,children:_(),routeContext:{outlet:null,matches:y,isDataRoute:!0},unstable_onError:a}):_()},null)}function sp(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function SM(s){let e=q.useContext(js);return tn(e,sp(s)),e}function MM(s){let e=q.useContext(cu);return tn(e,sp(s)),e}function EM(s){let e=q.useContext(xa);return tn(e,sp(s)),e}function op(s){let e=EM(s),i=e.matches[e.matches.length-1];return tn(i.route.id,`${s} can only be used on routes that contain a unique "id"`),i.route.id}function bM(){return op("useRouteId")}function TM(){let s=q.useContext(rp),e=MM("useRouteError"),i=op("useRouteError");return s!==void 0?s:e.errors?.[i]}function AM(){let{router:s}=SM("useNavigate"),e=op("useNavigate"),i=q.useRef(!1);return E_(()=>{i.current=!0}),q.useCallback(async(l,c={})=>{Hi(i.current,M_),i.current&&(typeof l=="number"?s.navigate(l):await s.navigate(l,{fromRouteId:e,...c}))},[s,e])}var pv={};function T_(s,e,i){!e&&!pv[s]&&(pv[s]=!0,Hi(!1,i))}q.memo(wM);function wM({routes:s,future:e,state:i,unstable_onError:a}){return b_(s,void 0,i,a,e)}function Zc(s){tn(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function RM({basename:s="/",children:e=null,location:i,navigationType:a="POP",navigator:l,static:c=!1}){tn(!rl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let f=s.replace(/^\/*/,"/"),d=q.useMemo(()=>({basename:f,navigator:l,static:c,future:{}}),[f,l,c]);typeof i=="string"&&(i=Xs(i));let{pathname:p="/",search:m="",hash:g="",state:v=null,key:x="default"}=i,E=q.useMemo(()=>{let b=_a(p,f);return b==null?null:{location:{pathname:b,search:m,hash:g,state:v,key:x},navigationType:a}},[f,p,m,g,v,x,a]);return Hi(E!=null,`<Router basename="${f}"> is not able to match the URL "${p}${m}${g}" because it does not start with the basename, so the <Router> won't render anything.`),E==null?null:q.createElement(ki.Provider,{value:d},q.createElement(al.Provider,{children:e,value:E}))}function CM({children:s,location:e}){return mM(dh(s),e)}function dh(s,e=[]){let i=[];return q.Children.forEach(s,(a,l)=>{if(!q.isValidElement(a))return;let c=[...e,l];if(a.type===q.Fragment){i.push.apply(i,dh(a.props.children,c));return}tn(a.type===Zc,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),tn(!a.props.index||!a.props.children,"An index route cannot have child routes.");let f={id:a.props.id||c.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,middleware:a.props.middleware,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(f.children=dh(a.props.children,c)),i.push(f)}),i}var Kc="get",Qc="application/x-www-form-urlencoded";function uu(s){return s!=null&&typeof s.tagName=="string"}function DM(s){return uu(s)&&s.tagName.toLowerCase()==="button"}function NM(s){return uu(s)&&s.tagName.toLowerCase()==="form"}function UM(s){return uu(s)&&s.tagName.toLowerCase()==="input"}function LM(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function OM(s,e){return s.button===0&&(!e||e==="_self")&&!LM(s)}var bc=null;function PM(){if(bc===null)try{new FormData(document.createElement("form"),0),bc=!1}catch{bc=!0}return bc}var IM=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Dd(s){return s!=null&&!IM.has(s)?(Hi(!1,`"${s}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qc}"`),null):s}function zM(s,e){let i,a,l,c,f;if(NM(s)){let d=s.getAttribute("action");a=d?_a(d,e):null,i=s.getAttribute("method")||Kc,l=Dd(s.getAttribute("enctype"))||Qc,c=new FormData(s)}else if(DM(s)||UM(s)&&(s.type==="submit"||s.type==="image")){let d=s.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=s.getAttribute("formaction")||d.getAttribute("action");if(a=p?_a(p,e):null,i=s.getAttribute("formmethod")||d.getAttribute("method")||Kc,l=Dd(s.getAttribute("formenctype"))||Dd(d.getAttribute("enctype"))||Qc,c=new FormData(d,s),!PM()){let{name:m,type:g,value:v}=s;if(g==="image"){let x=m?`${m}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else m&&c.append(m,v)}}else{if(uu(s))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Kc,a=null,l=Qc,f=s}return c&&l==="text/plain"&&(f=c,c=void 0),{action:a,method:i.toLowerCase(),encType:l,formData:c,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function lp(s,e){if(s===!1||s===null||typeof s>"u")throw new Error(e)}function BM(s,e,i){let a=typeof s=="string"?new URL(s,typeof window>"u"?"server://singlefetch/":window.location.origin):s;return a.pathname==="/"?a.pathname=`_root.${i}`:e&&_a(a.pathname,e)==="/"?a.pathname=`${e.replace(/\/$/,"")}/_root.${i}`:a.pathname=`${a.pathname.replace(/\/$/,"")}.${i}`,a}async function FM(s,e){if(s.id in e)return e[s.id];try{let i=await import(s.module);return e[s.id]=i,i}catch(i){return console.error(`Error loading route module \`${s.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function HM(s){return s==null?!1:s.href==null?s.rel==="preload"&&typeof s.imageSrcSet=="string"&&typeof s.imageSizes=="string":typeof s.rel=="string"&&typeof s.href=="string"}async function GM(s,e,i){let a=await Promise.all(s.map(async l=>{let c=e.routes[l.route.id];if(c){let f=await FM(c,i);return f.links?f.links():[]}return[]}));return XM(a.flat(1).filter(HM).filter(l=>l.rel==="stylesheet"||l.rel==="preload").map(l=>l.rel==="stylesheet"?{...l,rel:"prefetch",as:"style"}:{...l,rel:"prefetch"}))}function mv(s,e,i,a,l,c){let f=(p,m)=>i[m]?p.route.id!==i[m].route.id:!0,d=(p,m)=>i[m].pathname!==p.pathname||i[m].route.path?.endsWith("*")&&i[m].params["*"]!==p.params["*"];return c==="assets"?e.filter((p,m)=>f(p,m)||d(p,m)):c==="data"?e.filter((p,m)=>{let g=a.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(f(p,m)||d(p,m))return!0;if(p.route.shouldRevalidate){let v=p.route.shouldRevalidate({currentUrl:new URL(l.pathname+l.search+l.hash,window.origin),currentParams:i[0]?.params||{},nextUrl:new URL(s,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof v=="boolean")return v}return!0}):[]}function VM(s,e,{includeHydrateFallback:i}={}){return kM(s.map(a=>{let l=e.routes[a.route.id];if(!l)return[];let c=[l.module];return l.clientActionModule&&(c=c.concat(l.clientActionModule)),l.clientLoaderModule&&(c=c.concat(l.clientLoaderModule)),i&&l.hydrateFallbackModule&&(c=c.concat(l.hydrateFallbackModule)),l.imports&&(c=c.concat(l.imports)),c}).flat(1))}function kM(s){return[...new Set(s)]}function WM(s){let e={},i=Object.keys(s).sort();for(let a of i)e[a]=s[a];return e}function XM(s,e){let i=new Set;return new Set(e),s.reduce((a,l)=>{let c=JSON.stringify(WM(l));return i.has(c)||(i.add(c),a.push({key:c,link:l})),a},[])}function A_(){let s=q.useContext(js);return lp(s,"You must render this element inside a <DataRouterContext.Provider> element"),s}function jM(){let s=q.useContext(cu);return lp(s,"You must render this element inside a <DataRouterStateContext.Provider> element"),s}var cp=q.createContext(void 0);cp.displayName="FrameworkContext";function w_(){let s=q.useContext(cp);return lp(s,"You must render this element inside a <HydratedRouter> element"),s}function qM(s,e){let i=q.useContext(cp),[a,l]=q.useState(!1),[c,f]=q.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:m,onMouseLeave:g,onTouchStart:v}=e,x=q.useRef(null);q.useEffect(()=>{if(s==="render"&&f(!0),s==="viewport"){let T=_=>{_.forEach(C=>{f(C.isIntersecting)})},y=new IntersectionObserver(T,{threshold:.5});return x.current&&y.observe(x.current),()=>{y.disconnect()}}},[s]),q.useEffect(()=>{if(a){let T=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(T)}}},[a]);let E=()=>{l(!0)},b=()=>{l(!1),f(!1)};return i?s!=="intent"?[c,x,{}]:[c,x,{onFocus:ko(d,E),onBlur:ko(p,b),onMouseEnter:ko(m,E),onMouseLeave:ko(g,b),onTouchStart:ko(v,E)}]:[!1,x,{}]}function ko(s,e){return i=>{s&&s(i),i.defaultPrevented||e(i)}}function YM({page:s,...e}){let{router:i}=A_(),a=q.useMemo(()=>m_(i.routes,s,i.basename),[i.routes,s,i.basename]);return a?q.createElement(KM,{page:s,matches:a,...e}):null}function ZM(s){let{manifest:e,routeModules:i}=w_(),[a,l]=q.useState([]);return q.useEffect(()=>{let c=!1;return GM(s,e,i).then(f=>{c||l(f)}),()=>{c=!0}},[s,e,i]),a}function KM({page:s,matches:e,...i}){let a=ya(),{manifest:l,routeModules:c}=w_(),{basename:f}=A_(),{loaderData:d,matches:p}=jM(),m=q.useMemo(()=>mv(s,e,p,l,a,"data"),[s,e,p,l,a]),g=q.useMemo(()=>mv(s,e,p,l,a,"assets"),[s,e,p,l,a]),v=q.useMemo(()=>{if(s===a.pathname+a.search+a.hash)return[];let b=new Set,T=!1;if(e.forEach(_=>{let C=l.routes[_.route.id];!C||!C.hasLoader||(!m.some(N=>N.route.id===_.route.id)&&_.route.id in d&&c[_.route.id]?.shouldRevalidate||C.hasClientLoader?T=!0:b.add(_.route.id))}),b.size===0)return[];let y=BM(s,f,"data");return T&&b.size>0&&y.searchParams.set("_routes",e.filter(_=>b.has(_.route.id)).map(_=>_.route.id).join(",")),[y.pathname+y.search]},[f,d,a,l,m,e,s,c]),x=q.useMemo(()=>VM(g,l),[g,l]),E=ZM(g);return q.createElement(q.Fragment,null,v.map(b=>q.createElement("link",{key:b,rel:"prefetch",as:"fetch",href:b,...i})),x.map(b=>q.createElement("link",{key:b,rel:"modulepreload",href:b,...i})),E.map(({key:b,link:T})=>q.createElement("link",{key:b,nonce:i.nonce,...T})))}function QM(...s){return e=>{s.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var R_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{R_&&(window.__reactRouterVersion="7.9.4")}catch{}function JM({basename:s,children:e,window:i}){let a=q.useRef();a.current==null&&(a.current=HS({window:i,v5Compat:!0}));let l=a.current,[c,f]=q.useState({action:l.action,location:l.location}),d=q.useCallback(p=>{q.startTransition(()=>f(p))},[f]);return q.useLayoutEffect(()=>l.listen(d),[l,d]),q.createElement(RM,{basename:s,children:e,location:c.location,navigationType:c.action,navigator:l})}var C_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,D_=q.forwardRef(function({onClick:e,discover:i="render",prefetch:a="none",relative:l,reloadDocument:c,replace:f,state:d,target:p,to:m,preventScrollReset:g,viewTransition:v,...x},E){let{basename:b}=q.useContext(ki),T=typeof m=="string"&&C_.test(m),y,_=!1;if(typeof m=="string"&&T&&(y=m,R_))try{let L=new URL(window.location.href),P=m.startsWith("//")?new URL(L.protocol+m):new URL(m),Z=_a(P.pathname,b);P.origin===L.origin&&Z!=null?m=Z+P.search+P.hash:_=!0}catch{Hi(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=hM(m,{relative:l}),[N,O,W]=qM(a,x),X=nE(m,{replace:f,state:d,target:p,preventScrollReset:g,relative:l,viewTransition:v});function z(L){e&&e(L),L.defaultPrevented||X(L)}let J=q.createElement("a",{...x,...W,href:y||C,onClick:_||c?e:z,ref:QM(E,O),target:p,"data-discover":!T&&i==="render"?"true":void 0});return N&&!T?q.createElement(q.Fragment,null,J,q.createElement(YM,{page:C})):J});D_.displayName="Link";var $M=q.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:a="",end:l=!1,style:c,to:f,viewTransition:d,children:p,...m},g){let v=ol(f,{relative:m.relative}),x=ya(),E=q.useContext(cu),{navigator:b,basename:T}=q.useContext(ki),y=E!=null&&oE(v)&&d===!0,_=b.encodeLocation?b.encodeLocation(v).pathname:v.pathname,C=x.pathname,N=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;i||(C=C.toLowerCase(),N=N?N.toLowerCase():null,_=_.toLowerCase()),N&&T&&(N=_a(N,T)||N);const O=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let W=C===_||!l&&C.startsWith(_)&&C.charAt(O)==="/",X=N!=null&&(N===_||!l&&N.startsWith(_)&&N.charAt(_.length)==="/"),z={isActive:W,isPending:X,isTransitioning:y},J=W?e:void 0,L;typeof a=="function"?L=a(z):L=[a,W?"active":null,X?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let P=typeof c=="function"?c(z):c;return q.createElement(D_,{...m,"aria-current":J,className:L,ref:g,style:P,to:f,viewTransition:d},typeof p=="function"?p(z):p)});$M.displayName="NavLink";var eE=q.forwardRef(({discover:s="render",fetcherKey:e,navigate:i,reloadDocument:a,replace:l,state:c,method:f=Kc,action:d,onSubmit:p,relative:m,preventScrollReset:g,viewTransition:v,...x},E)=>{let b=rE(),T=sE(d,{relative:m}),y=f.toLowerCase()==="get"?"get":"post",_=typeof d=="string"&&C_.test(d),C=N=>{if(p&&p(N),N.defaultPrevented)return;N.preventDefault();let O=N.nativeEvent.submitter,W=O?.getAttribute("formmethod")||f;b(O||N.currentTarget,{fetcherKey:e,method:W,navigate:i,replace:l,state:c,relative:m,preventScrollReset:g,viewTransition:v})};return q.createElement("form",{ref:E,method:y,action:T,onSubmit:a?p:C,...x,"data-discover":!_&&s==="render"?"true":void 0})});eE.displayName="Form";function tE(s){return`${s} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function N_(s){let e=q.useContext(js);return tn(e,tE(s)),e}function nE(s,{target:e,replace:i,state:a,preventScrollReset:l,relative:c,viewTransition:f}={}){let d=sl(),p=ya(),m=ol(s,{relative:c});return q.useCallback(g=>{if(OM(g,e)){g.preventDefault();let v=i!==void 0?i:Jo(p)===Jo(m);d(s,{replace:v,state:a,preventScrollReset:l,relative:c,viewTransition:f})}},[p,d,m,i,a,e,s,l,c,f])}var iE=0,aE=()=>`__${String(++iE)}__`;function rE(){let{router:s}=N_("useSubmit"),{basename:e}=q.useContext(ki),i=bM();return q.useCallback(async(a,l={})=>{let{action:c,method:f,encType:d,formData:p,body:m}=zM(a,e);if(l.navigate===!1){let g=l.fetcherKey||aE();await s.fetch(g,i,l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,flushSync:l.flushSync})}else await s.navigate(l.action||c,{preventScrollReset:l.preventScrollReset,formData:p,body:m,formMethod:l.method||f,formEncType:l.encType||d,replace:l.replace,state:l.state,fromRouteId:i,flushSync:l.flushSync,viewTransition:l.viewTransition})},[s,e,i])}function sE(s,{relative:e}={}){let{basename:i}=q.useContext(ki),a=q.useContext(xa);tn(a,"useFormAction must be used inside a RouteContext");let[l]=a.matches.slice(-1),c={...ol(s||".",{relative:e})},f=ya();if(s==null){c.search=f.search;let d=new URLSearchParams(c.search),p=d.getAll("index");if(p.some(g=>g==="")){d.delete("index"),p.filter(v=>v).forEach(v=>d.append("index",v));let g=d.toString();c.search=g?`?${g}`:""}}return(!s||s===".")&&l.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:ga([i,c.pathname])),Jo(c)}function oE(s,{relative:e}={}){let i=q.useContext(S_);tn(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=N_("useViewTransitionState"),l=ol(s,{relative:e});if(!i.isTransitioning)return!1;let c=_a(i.currentLocation.pathname,a)||i.currentLocation.pathname,f=_a(i.nextLocation.pathname,a)||i.nextLocation.pathname;return iu(l.pathname,f)!=null||iu(l.pathname,c)!=null}/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="180",lE=0,gv=1,cE=2,U_=1,uE=2,ha=3,tr=0,jn=1,pa=2,$a=0,Is=1,hh=2,vv=3,_v=4,fE=5,Dr=100,dE=101,hE=102,pE=103,mE=104,gE=200,vE=201,_E=202,xE=203,ph=204,mh=205,yE=206,SE=207,ME=208,EE=209,bE=210,TE=211,AE=212,wE=213,RE=214,gh=0,vh=1,_h=2,Hs=3,xh=4,yh=5,Sh=6,Mh=7,L_=0,CE=1,DE=2,er=0,NE=1,UE=2,LE=3,OE=4,PE=5,IE=6,zE=7,O_=300,Gs=301,Vs=302,Eh=303,bh=304,fu=306,Th=1e3,Ur=1001,Ah=1002,Ri=1003,BE=1004,Tc=1005,zi=1006,Nd=1007,Lr=1008,Gi=1009,P_=1010,I_=1011,$o=1012,fp=1013,Pr=1014,ma=1015,ll=1016,dp=1017,hp=1018,el=1020,z_=35902,B_=35899,F_=1021,H_=1022,wi=1023,tl=1026,nl=1027,G_=1028,pp=1029,V_=1030,mp=1031,gp=1033,Jc=33776,$c=33777,eu=33778,tu=33779,wh=35840,Rh=35841,Ch=35842,Dh=35843,Nh=36196,Uh=37492,Lh=37496,Oh=37808,Ph=37809,Ih=37810,zh=37811,Bh=37812,Fh=37813,Hh=37814,Gh=37815,Vh=37816,kh=37817,Wh=37818,Xh=37819,jh=37820,qh=37821,Yh=36492,Zh=36494,Kh=36495,Qh=36283,Jh=36284,$h=36285,ep=36286,FE=3200,HE=3201,k_=0,GE=1,Ja="",xi="srgb",ks="srgb-linear",au="linear",jt="srgb",xs=7680,xv=519,VE=512,kE=513,WE=514,W_=515,XE=516,jE=517,qE=518,YE=519,yv=35044,Sv="300 es",Bi=2e3,ru=2001;class qs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(i)===-1&&a[e].push(i)}hasEventListener(e,i){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(i)!==-1}removeEventListener(e,i){const a=this._listeners;if(a===void 0)return;const l=a[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const a=i[e.type];if(a!==void 0){e.target=this;const l=a.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ud=Math.PI/180,tp=180/Math.PI;function cl(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[i&63|128]+Un[i>>8&255]+"-"+Un[i>>16&255]+Un[i>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function wt(s,e,i){return Math.max(e,Math.min(i,s))}function ZE(s,e){return(s%e+e)%e}function Ld(s,e,i){return(1-i)*s+i*e}function Wo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Wn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class It{constructor(e=0,i=0){It.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,a=this.y,l=e.elements;return this.x=l[0]*i+l[3]*a+l[6],this.y=l[1]*i+l[4]*a+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(wt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y;return i*i+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const a=Math.cos(i),l=Math.sin(i),c=this.x-e.x,f=this.y-e.y;return this.x=c*a-f*l+e.x,this.y=c*l+f*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ul{constructor(e=0,i=0,a=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=a,this._w=l}static slerpFlat(e,i,a,l,c,f,d){let p=a[l+0],m=a[l+1],g=a[l+2],v=a[l+3];const x=c[f+0],E=c[f+1],b=c[f+2],T=c[f+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d===1){e[i+0]=x,e[i+1]=E,e[i+2]=b,e[i+3]=T;return}if(v!==T||p!==x||m!==E||g!==b){let y=1-d;const _=p*x+m*E+g*b+v*T,C=_>=0?1:-1,N=1-_*_;if(N>Number.EPSILON){const W=Math.sqrt(N),X=Math.atan2(W,_*C);y=Math.sin(y*X)/W,d=Math.sin(d*X)/W}const O=d*C;if(p=p*y+x*O,m=m*y+E*O,g=g*y+b*O,v=v*y+T*O,y===1-d){const W=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=W,m*=W,g*=W,v*=W}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,a,l,c,f){const d=a[l],p=a[l+1],m=a[l+2],g=a[l+3],v=c[f],x=c[f+1],E=c[f+2],b=c[f+3];return e[i]=d*b+g*v+p*E-m*x,e[i+1]=p*b+g*x+m*v-d*E,e[i+2]=m*b+g*E+d*x-p*v,e[i+3]=g*b-d*v-p*x-m*E,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,a,l){return this._x=e,this._y=i,this._z=a,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const a=e._x,l=e._y,c=e._z,f=e._order,d=Math.cos,p=Math.sin,m=d(a/2),g=d(l/2),v=d(c/2),x=p(a/2),E=p(l/2),b=p(c/2);switch(f){case"XYZ":this._x=x*g*v+m*E*b,this._y=m*E*v-x*g*b,this._z=m*g*b+x*E*v,this._w=m*g*v-x*E*b;break;case"YXZ":this._x=x*g*v+m*E*b,this._y=m*E*v-x*g*b,this._z=m*g*b-x*E*v,this._w=m*g*v+x*E*b;break;case"ZXY":this._x=x*g*v-m*E*b,this._y=m*E*v+x*g*b,this._z=m*g*b+x*E*v,this._w=m*g*v-x*E*b;break;case"ZYX":this._x=x*g*v-m*E*b,this._y=m*E*v+x*g*b,this._z=m*g*b-x*E*v,this._w=m*g*v+x*E*b;break;case"YZX":this._x=x*g*v+m*E*b,this._y=m*E*v+x*g*b,this._z=m*g*b-x*E*v,this._w=m*g*v-x*E*b;break;case"XZY":this._x=x*g*v-m*E*b,this._y=m*E*v-x*g*b,this._z=m*g*b+x*E*v,this._w=m*g*v+x*E*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const a=i/2,l=Math.sin(a);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,a=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],x=a+d+v;if(x>0){const E=.5/Math.sqrt(x+1);this._w=.25/E,this._x=(g-p)*E,this._y=(c-m)*E,this._z=(f-l)*E}else if(a>d&&a>v){const E=2*Math.sqrt(1+a-d-v);this._w=(g-p)/E,this._x=.25*E,this._y=(l+f)/E,this._z=(c+m)/E}else if(d>v){const E=2*Math.sqrt(1+d-a-v);this._w=(c-m)/E,this._x=(l+f)/E,this._y=.25*E,this._z=(p+g)/E}else{const E=2*Math.sqrt(1+v-a-d);this._w=(f-l)/E,this._x=(c+m)/E,this._y=(p+g)/E,this._z=.25*E}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let a=e.dot(i)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,i){const a=this.angleTo(e);if(a===0)return this;const l=Math.min(1,i/a);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const a=e._x,l=e._y,c=e._z,f=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=a*g+f*d+l*m-c*p,this._y=l*g+f*p+c*d-a*m,this._z=c*g+f*m+a*p-l*d,this._w=f*g-a*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const a=this._x,l=this._y,c=this._z,f=this._w;let d=f*e._w+a*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=f,this._x=a,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const E=1-i;return this._w=E*f+i*this._w,this._x=E*a+i*this._x,this._y=E*l+i*this._y,this._z=E*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),g=Math.atan2(m,d),v=Math.sin((1-i)*g)/m,x=Math.sin(i*g)/m;return this._w=f*v+this._w*x,this._x=a*v+this._x*x,this._y=l*v+this._y*x,this._z=c*v+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,a){return this.copy(e).slerp(i,a)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),a=Math.random(),l=Math.sqrt(1-a),c=Math.sqrt(a);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class me{constructor(e=0,i=0,a=0){me.prototype.isVector3=!0,this.x=e,this.y=i,this.z=a}set(e,i,a){return a===void 0&&(a=this.z),this.x=e,this.y=i,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Mv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Mv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*a+c[6]*l,this.y=c[1]*i+c[4]*a+c[7]*l,this.z=c[2]*i+c[5]*a+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=e.elements,f=1/(c[3]*i+c[7]*a+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*a+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*a+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*a+c[10]*l+c[14])*f,this}applyQuaternion(e){const i=this.x,a=this.y,l=this.z,c=e.x,f=e.y,d=e.z,p=e.w,m=2*(f*l-d*a),g=2*(d*i-c*l),v=2*(c*a-f*i);return this.x=i+p*m+f*v-d*g,this.y=a+p*g+d*m-c*v,this.z=l+p*v+c*g-f*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,a=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*a+c[8]*l,this.y=c[1]*i+c[5]*a+c[9]*l,this.z=c[2]*i+c[6]*a+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const a=e.x,l=e.y,c=e.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-a*p,this.z=a*d-l*f,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const a=e.dot(this)/i;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Od.copy(this).projectOnVector(e),this.sub(Od)}reflect(e){return this.sub(Od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const a=this.dot(e)/i;return Math.acos(wt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,a=this.y-e.y,l=this.z-e.z;return i*i+a*a+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,a){const l=Math.sin(i)*e;return this.x=l*Math.sin(a),this.y=Math.cos(i)*e,this.z=l*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,a){return this.x=e*Math.sin(i),this.y=a,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=a,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,a=Math.sqrt(1-i*i);return this.x=a*Math.cos(e),this.y=i,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Od=new me,Mv=new ul;class vt{constructor(e,i,a,l,c,f,d,p,m){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,p,m)}set(e,i,a,l,c,f,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=a,g[7]=f,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],this}extractBasis(e,i,a){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[3],p=a[6],m=a[1],g=a[4],v=a[7],x=a[2],E=a[5],b=a[8],T=l[0],y=l[3],_=l[6],C=l[1],N=l[4],O=l[7],W=l[2],X=l[5],z=l[8];return c[0]=f*T+d*C+p*W,c[3]=f*y+d*N+p*X,c[6]=f*_+d*O+p*z,c[1]=m*T+g*C+v*W,c[4]=m*y+g*N+v*X,c[7]=m*_+g*O+v*z,c[2]=x*T+E*C+b*W,c[5]=x*y+E*N+b*X,c[8]=x*_+E*O+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*f*g-i*d*m-a*c*g+a*d*p+l*c*m-l*f*p}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*f-d*m,x=d*p-g*c,E=m*c-f*p,b=i*v+a*x+l*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/b;return e[0]=v*T,e[1]=(l*m-g*a)*T,e[2]=(d*a-l*f)*T,e[3]=x*T,e[4]=(g*i-l*p)*T,e[5]=(l*c-d*i)*T,e[6]=E*T,e[7]=(a*p-m*i)*T,e[8]=(f*i-a*c)*T,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,a,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(a*p,a*m,-a*(p*f+m*d)+f+e,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Pd.makeScale(e,i)),this}rotate(e){return this.premultiply(Pd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Pd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,a,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<9;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<9;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pd=new vt;function X_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function su(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function KE(){const s=su("canvas");return s.style.display="block",s}const Ev={};function il(s){s in Ev||(Ev[s]=!0,console.warn(s))}function QE(s,e,i){return new Promise(function(a,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:a()}}setTimeout(c,i)})}const bv=new vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tv=new vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function JE(){const s={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===jt&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===jt&&(l.r=zs(l.r),l.g=zs(l.g),l.b=zs(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ja?au:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return il("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return il("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],a=[.3127,.329];return s.define({[ks]:{primaries:e,whitePoint:a,transfer:au,toXYZ:bv,fromXYZ:Tv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:a,transfer:jt,toXYZ:bv,fromXYZ:Tv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),s}const Pt=JE();function va(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function zs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ys;class $E{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ys===void 0&&(ys=su("canvas")),ys.width=e.width,ys.height=e.height;const l=ys.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),a=ys}return a.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=su("canvas");i.width=e.width,i.height=e.height;const a=i.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const l=a.getImageData(0,0,e.width,e.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=va(c[f]/255)*255;return a.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let a=0;a<i.length;a++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[a]=Math.floor(va(i[a]/255)*255):i[a]=va(i[a]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eb=0;class vp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=cl(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(Id(l[f].image)):c.push(Id(l[f]))}else c=Id(l);a.url=c}return i||(e.images[this.uuid]=a),a}}function Id(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$E.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tb=0;const zd=new me;class qn extends qs{constructor(e=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,a=Ur,l=Ur,c=zi,f=Lr,d=wi,p=Gi,m=qn.DEFAULT_ANISOTROPY,g=Ja){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=cl(),this.name="",this.source=new vp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=a,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zd).x}get height(){return this.source.getSize(zd).y}get depth(){return this.source.getSize(zd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const a=e[i];if(a===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&a&&l.isVector2&&a.isVector2||l&&a&&l.isVector3&&a.isVector3||l&&a&&l.isMatrix3&&a.isMatrix3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),i||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==O_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Th:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Ah:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Th:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Ah:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=O_;qn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,a=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=a,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,a,l){return this.x=e,this.y=i,this.z=a,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,a=this.y,l=this.z,c=this.w,f=e.elements;return this.x=f[0]*i+f[4]*a+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*a+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*a+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*a+f[11]*l+f[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,a,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],x=p[1],E=p[5],b=p[9],T=p[2],y=p[6],_=p[10];if(Math.abs(g-x)<.01&&Math.abs(v-T)<.01&&Math.abs(b-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(v+T)<.1&&Math.abs(b+y)<.1&&Math.abs(m+E+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,O=(E+1)/2,W=(_+1)/2,X=(g+x)/4,z=(v+T)/4,J=(b+y)/4;return N>O&&N>W?N<.01?(a=0,l=.707106781,c=.707106781):(a=Math.sqrt(N),l=X/a,c=z/a):O>W?O<.01?(a=.707106781,l=0,c=.707106781):(l=Math.sqrt(O),a=X/l,c=J/l):W<.01?(a=.707106781,l=.707106781,c=0):(c=Math.sqrt(W),a=z/c,l=J/c),this.set(a,l,c,i),this}let C=Math.sqrt((y-b)*(y-b)+(v-T)*(v-T)+(x-g)*(x-g));return Math.abs(C)<.001&&(C=1),this.x=(y-b)/C,this.y=(v-T)/C,this.z=(x-g)/C,this.w=Math.acos((m+E+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=wt(this.x,e.x,i.x),this.y=wt(this.y,e.y,i.y),this.z=wt(this.z,e.z,i.z),this.w=wt(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=wt(this.x,e,i),this.y=wt(this.y,e,i),this.z=wt(this.z,e,i),this.w=wt(this.w,e,i),this}clampLength(e,i){const a=this.length();return this.divideScalar(a||1).multiplyScalar(wt(a,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,a){return this.x=e.x+(i.x-e.x)*a,this.y=e.y+(i.y-e.y)*a,this.z=e.z+(i.z-e.z)*a,this.w=e.w+(i.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nb extends qs{constructor(e=1,i=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=a.depth,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:a.depth},c=new qn(l);this.textures=[];const f=a.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(e={}){const i={minFilter:zi,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,a=1){if(this.width!==e||this.height!==i||this.depth!==a){this.width=e,this.height=i,this.depth=a;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=a,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,a=e.textures.length;i<a;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new vp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends nb{constructor(e=1,i=1,a={}){super(e,i,a),this.isWebGLRenderTarget=!0}}class j_ extends qn{constructor(e=null,i=1,a=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ib extends qn{constructor(e=null,i=1,a=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:a,depth:l},this.magFilter=Ri,this.minFilter=Ri,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fl{constructor(e=new me(1/0,1/0,1/0),i=new me(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i+=3)this.expandByPoint(Ei.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,a=e.count;i<a;i++)this.expandByPoint(Ei.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,a=e.length;i<a;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const a=Ei.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const c=a.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)e.isMesh===!0?e.getVertexPosition(f,Ei):Ei.fromBufferAttribute(c,f),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ac.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),Ac.copy(a.boundingBox)),Ac.applyMatrix4(e.matrixWorld),this.union(Ac)}const l=e.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,a;return e.normal.x>0?(i=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),i<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xo),wc.subVectors(this.max,Xo),Ss.subVectors(e.a,Xo),Ms.subVectors(e.b,Xo),Es.subVectors(e.c,Xo),Xa.subVectors(Ms,Ss),ja.subVectors(Es,Ms),Mr.subVectors(Ss,Es);let i=[0,-Xa.z,Xa.y,0,-ja.z,ja.y,0,-Mr.z,Mr.y,Xa.z,0,-Xa.x,ja.z,0,-ja.x,Mr.z,0,-Mr.x,-Xa.y,Xa.x,0,-ja.y,ja.x,0,-Mr.y,Mr.x,0];return!Bd(i,Ss,Ms,Es,wc)||(i=[1,0,0,0,1,0,0,0,1],!Bd(i,Ss,Ms,Es,wc))?!1:(Rc.crossVectors(Xa,ja),i=[Rc.x,Rc.y,Rc.z],Bd(i,Ss,Ms,Es,wc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(la[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),la[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),la[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),la[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),la[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),la[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),la[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),la[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(la),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const la=[new me,new me,new me,new me,new me,new me,new me,new me],Ei=new me,Ac=new fl,Ss=new me,Ms=new me,Es=new me,Xa=new me,ja=new me,Mr=new me,Xo=new me,wc=new me,Rc=new me,Er=new me;function Bd(s,e,i,a,l){for(let c=0,f=s.length-3;c<=f;c+=3){Er.fromArray(s,c);const d=l.x*Math.abs(Er.x)+l.y*Math.abs(Er.y)+l.z*Math.abs(Er.z),p=e.dot(Er),m=i.dot(Er),g=a.dot(Er);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const ab=new fl,jo=new me,Fd=new me;class du{constructor(e=new me,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const a=this.center;i!==void 0?a.copy(i):ab.setFromPoints(e).getCenter(a);let l=0;for(let c=0,f=e.length;c<f;c++)l=Math.max(l,a.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const a=this.center.distanceToSquared(e);return i.copy(e),a>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jo.subVectors(e,this.center);const i=jo.lengthSq();if(i>this.radius*this.radius){const a=Math.sqrt(i),l=(a-this.radius)*.5;this.center.addScaledVector(jo,l/a),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jo.copy(e.center).add(Fd)),this.expandByPoint(jo.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ca=new me,Hd=new me,Cc=new me,qa=new me,Gd=new me,Dc=new me,Vd=new me;class q_{constructor(e=new me,i=new me(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ca)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const a=i.dot(this.direction);return a<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ca.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ca.copy(this.origin).addScaledVector(this.direction,i),ca.distanceToSquared(e))}distanceSqToSegment(e,i,a,l){Hd.copy(e).add(i).multiplyScalar(.5),Cc.copy(i).sub(e).normalize(),qa.copy(this.origin).sub(Hd);const c=e.distanceTo(i)*.5,f=-this.direction.dot(Cc),d=qa.dot(this.direction),p=-qa.dot(Cc),m=qa.lengthSq(),g=Math.abs(1-f*f);let v,x,E,b;if(g>0)if(v=f*p-d,x=f*d-p,b=c*g,v>=0)if(x>=-b)if(x<=b){const T=1/g;v*=T,x*=T,E=v*(v+f*x+2*d)+x*(f*v+x+2*p)+m}else x=c,v=Math.max(0,-(f*x+d)),E=-v*v+x*(x+2*p)+m;else x=-c,v=Math.max(0,-(f*x+d)),E=-v*v+x*(x+2*p)+m;else x<=-b?(v=Math.max(0,-(-f*c+d)),x=v>0?-c:Math.min(Math.max(-c,-p),c),E=-v*v+x*(x+2*p)+m):x<=b?(v=0,x=Math.min(Math.max(-c,-p),c),E=x*(x+2*p)+m):(v=Math.max(0,-(f*c+d)),x=v>0?c:Math.min(Math.max(-c,-p),c),E=-v*v+x*(x+2*p)+m);else x=f>0?-c:c,v=Math.max(0,-(f*x+d)),E=-v*v+x*(x+2*p)+m;return a&&a.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Hd).addScaledVector(Cc,x),E}intersectSphere(e,i){ca.subVectors(e.center,this.origin);const a=ca.dot(this.direction),l=ca.dot(ca)-a*a,c=e.radius*e.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=a-f,p=a+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/i;return a>=0?a:null}intersectPlane(e,i){const a=this.distanceToPlane(e);return a===null?null:this.at(a,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let a,l,c,f,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,x=this.origin;return m>=0?(a=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(a=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),g>=0?(c=(e.min.y-x.y)*g,f=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,f=(e.min.y-x.y)*g),a>f||c>l||((c>a||isNaN(a))&&(a=c),(f<l||isNaN(l))&&(l=f),v>=0?(d=(e.min.z-x.z)*v,p=(e.max.z-x.z)*v):(d=(e.max.z-x.z)*v,p=(e.min.z-x.z)*v),a>p||d>l)||((d>a||a!==a)&&(a=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(a>=0?a:l,i)}intersectsBox(e){return this.intersectBox(e,ca)!==null}intersectTriangle(e,i,a,l,c){Gd.subVectors(i,e),Dc.subVectors(a,e),Vd.crossVectors(Gd,Dc);let f=this.direction.dot(Vd),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;qa.subVectors(this.origin,e);const p=d*this.direction.dot(Dc.crossVectors(qa,Dc));if(p<0)return null;const m=d*this.direction.dot(Gd.cross(qa));if(m<0||p+m>f)return null;const g=-d*qa.dot(Vd);return g<0?null:this.at(g/f,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,a,l,c,f,d,p,m,g,v,x,E,b,T,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,a,l,c,f,d,p,m,g,v,x,E,b,T,y)}set(e,i,a,l,c,f,d,p,m,g,v,x,E,b,T,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=a,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=x,_[3]=E,_[7]=b,_[11]=T,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,a=e.elements;return i[0]=a[0],i[1]=a[1],i[2]=a[2],i[3]=a[3],i[4]=a[4],i[5]=a[5],i[6]=a[6],i[7]=a[7],i[8]=a[8],i[9]=a[9],i[10]=a[10],i[11]=a[11],i[12]=a[12],i[13]=a[13],i[14]=a[14],i[15]=a[15],this}copyPosition(e){const i=this.elements,a=e.elements;return i[12]=a[12],i[13]=a[13],i[14]=a[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,a){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this}makeBasis(e,i,a){return this.set(e.x,i.x,a.x,0,e.y,i.y,a.y,0,e.z,i.z,a.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,a=e.elements,l=1/bs.setFromMatrixColumn(e,0).length(),c=1/bs.setFromMatrixColumn(e,1).length(),f=1/bs.setFromMatrixColumn(e,2).length();return i[0]=a[0]*l,i[1]=a[1]*l,i[2]=a[2]*l,i[3]=0,i[4]=a[4]*c,i[5]=a[5]*c,i[6]=a[6]*c,i[7]=0,i[8]=a[8]*f,i[9]=a[9]*f,i[10]=a[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,a=e.x,l=e.y,c=e.z,f=Math.cos(a),d=Math.sin(a),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const x=f*g,E=f*v,b=d*g,T=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=E+b*m,i[5]=x-T*m,i[9]=-d*p,i[2]=T-x*m,i[6]=b+E*m,i[10]=f*p}else if(e.order==="YXZ"){const x=p*g,E=p*v,b=m*g,T=m*v;i[0]=x+T*d,i[4]=b*d-E,i[8]=f*m,i[1]=f*v,i[5]=f*g,i[9]=-d,i[2]=E*d-b,i[6]=T+x*d,i[10]=f*p}else if(e.order==="ZXY"){const x=p*g,E=p*v,b=m*g,T=m*v;i[0]=x-T*d,i[4]=-f*v,i[8]=b+E*d,i[1]=E+b*d,i[5]=f*g,i[9]=T-x*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(e.order==="ZYX"){const x=f*g,E=f*v,b=d*g,T=d*v;i[0]=p*g,i[4]=b*m-E,i[8]=x*m+T,i[1]=p*v,i[5]=T*m+x,i[9]=E*m-b,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(e.order==="YZX"){const x=f*p,E=f*m,b=d*p,T=d*m;i[0]=p*g,i[4]=T-x*v,i[8]=b*v+E,i[1]=v,i[5]=f*g,i[9]=-d*g,i[2]=-m*g,i[6]=E*v+b,i[10]=x-T*v}else if(e.order==="XZY"){const x=f*p,E=f*m,b=d*p,T=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=x*v+T,i[5]=f*g,i[9]=E*v-b,i[2]=b*v-E,i[6]=d*g,i[10]=T*v+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rb,e,sb)}lookAt(e,i,a){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Ya.crossVectors(a,ii),Ya.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Ya.crossVectors(a,ii)),Ya.normalize(),Nc.crossVectors(ii,Ya),l[0]=Ya.x,l[4]=Nc.x,l[8]=ii.x,l[1]=Ya.y,l[5]=Nc.y,l[9]=ii.y,l[2]=Ya.z,l[6]=Nc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const a=e.elements,l=i.elements,c=this.elements,f=a[0],d=a[4],p=a[8],m=a[12],g=a[1],v=a[5],x=a[9],E=a[13],b=a[2],T=a[6],y=a[10],_=a[14],C=a[3],N=a[7],O=a[11],W=a[15],X=l[0],z=l[4],J=l[8],L=l[12],P=l[1],Z=l[5],se=l[9],le=l[13],ve=l[2],oe=l[6],B=l[10],$=l[14],te=l[3],k=l[7],U=l[11],M=l[15];return c[0]=f*X+d*P+p*ve+m*te,c[4]=f*z+d*Z+p*oe+m*k,c[8]=f*J+d*se+p*B+m*U,c[12]=f*L+d*le+p*$+m*M,c[1]=g*X+v*P+x*ve+E*te,c[5]=g*z+v*Z+x*oe+E*k,c[9]=g*J+v*se+x*B+E*U,c[13]=g*L+v*le+x*$+E*M,c[2]=b*X+T*P+y*ve+_*te,c[6]=b*z+T*Z+y*oe+_*k,c[10]=b*J+T*se+y*B+_*U,c[14]=b*L+T*le+y*$+_*M,c[3]=C*X+N*P+O*ve+W*te,c[7]=C*z+N*Z+O*oe+W*k,c[11]=C*J+N*se+O*B+W*U,c[15]=C*L+N*le+O*$+W*M,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],a=e[4],l=e[8],c=e[12],f=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],x=e[10],E=e[14],b=e[3],T=e[7],y=e[11],_=e[15];return b*(+c*p*v-l*m*v-c*d*x+a*m*x+l*d*E-a*p*E)+T*(+i*p*E-i*m*x+c*f*x-l*f*E+l*m*g-c*p*g)+y*(+i*m*v-i*d*E-c*f*v+a*f*E+c*d*g-a*m*g)+_*(-l*d*g-i*p*v+i*d*x+l*f*v-a*f*x+a*p*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,a){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=a),this}invert(){const e=this.elements,i=e[0],a=e[1],l=e[2],c=e[3],f=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],x=e[10],E=e[11],b=e[12],T=e[13],y=e[14],_=e[15],C=v*y*m-T*x*m+T*p*E-d*y*E-v*p*_+d*x*_,N=b*x*m-g*y*m-b*p*E+f*y*E+g*p*_-f*x*_,O=g*T*m-b*v*m+b*d*E-f*T*E-g*d*_+f*v*_,W=b*v*p-g*T*p-b*d*x+f*T*x+g*d*y-f*v*y,X=i*C+a*N+l*O+c*W;if(X===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/X;return e[0]=C*z,e[1]=(T*x*c-v*y*c-T*l*E+a*y*E+v*l*_-a*x*_)*z,e[2]=(d*y*c-T*p*c+T*l*m-a*y*m-d*l*_+a*p*_)*z,e[3]=(v*p*c-d*x*c-v*l*m+a*x*m+d*l*E-a*p*E)*z,e[4]=N*z,e[5]=(g*y*c-b*x*c+b*l*E-i*y*E-g*l*_+i*x*_)*z,e[6]=(b*p*c-f*y*c-b*l*m+i*y*m+f*l*_-i*p*_)*z,e[7]=(f*x*c-g*p*c+g*l*m-i*x*m-f*l*E+i*p*E)*z,e[8]=O*z,e[9]=(b*v*c-g*T*c-b*a*E+i*T*E+g*a*_-i*v*_)*z,e[10]=(f*T*c-b*d*c+b*a*m-i*T*m-f*a*_+i*d*_)*z,e[11]=(g*d*c-f*v*c-g*a*m+i*v*m+f*a*E-i*d*E)*z,e[12]=W*z,e[13]=(g*T*l-b*v*l+b*a*x-i*T*x-g*a*y+i*v*y)*z,e[14]=(b*d*l-f*T*l-b*a*p+i*T*p+f*a*y-i*d*y)*z,e[15]=(f*v*l-g*d*l+g*a*p-i*v*p-f*a*x+i*d*x)*z,this}scale(e){const i=this.elements,a=e.x,l=e.y,c=e.z;return i[0]*=a,i[4]*=l,i[8]*=c,i[1]*=a,i[5]*=l,i[9]*=c,i[2]*=a,i[6]*=l,i[10]*=c,i[3]*=a,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,a,l))}makeTranslation(e,i,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,a,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,i,-a,0,0,a,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,0,a,0,0,1,0,0,-a,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),a=Math.sin(e);return this.set(i,-a,0,0,a,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const a=Math.cos(i),l=Math.sin(i),c=1-a,f=e.x,d=e.y,p=e.z,m=c*f,g=c*d;return this.set(m*f+a,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+a,g*p-l*f,0,m*p-l*d,g*p+l*f,c*p*p+a,0,0,0,0,1),this}makeScale(e,i,a){return this.set(e,0,0,0,0,i,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,i,a,l,c,f){return this.set(1,a,c,0,e,1,f,0,i,l,1,0,0,0,0,1),this}compose(e,i,a){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,g=f+f,v=d+d,x=c*m,E=c*g,b=c*v,T=f*g,y=f*v,_=d*v,C=p*m,N=p*g,O=p*v,W=a.x,X=a.y,z=a.z;return l[0]=(1-(T+_))*W,l[1]=(E+O)*W,l[2]=(b-N)*W,l[3]=0,l[4]=(E-O)*X,l[5]=(1-(x+_))*X,l[6]=(y+C)*X,l[7]=0,l[8]=(b+N)*z,l[9]=(y-C)*z,l[10]=(1-(x+T))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,a){const l=this.elements;let c=bs.set(l[0],l[1],l[2]).length();const f=bs.set(l[4],l[5],l[6]).length(),d=bs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],bi.copy(this);const m=1/c,g=1/f,v=1/d;return bi.elements[0]*=m,bi.elements[1]*=m,bi.elements[2]*=m,bi.elements[4]*=g,bi.elements[5]*=g,bi.elements[6]*=g,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,i.setFromRotationMatrix(bi),a.x=c,a.y=f,a.z=d,this}makePerspective(e,i,a,l,c,f,d=Bi,p=!1){const m=this.elements,g=2*c/(i-e),v=2*c/(a-l),x=(i+e)/(i-e),E=(a+l)/(a-l);let b,T;if(p)b=c/(f-c),T=f*c/(f-c);else if(d===Bi)b=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===ru)b=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=v,m[9]=E,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,a,l,c,f,d=Bi,p=!1){const m=this.elements,g=2/(i-e),v=2/(a-l),x=-(i+e)/(i-e),E=-(a+l)/(a-l);let b,T;if(p)b=1/(f-c),T=f/(f-c);else if(d===Bi)b=-2/(f-c),T=-(f+c)/(f-c);else if(d===ru)b=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=v,m[9]=0,m[13]=E,m[2]=0,m[6]=0,m[10]=b,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,a=e.elements;for(let l=0;l<16;l++)if(i[l]!==a[l])return!1;return!0}fromArray(e,i=0){for(let a=0;a<16;a++)this.elements[a]=e[a+i];return this}toArray(e=[],i=0){const a=this.elements;return e[i]=a[0],e[i+1]=a[1],e[i+2]=a[2],e[i+3]=a[3],e[i+4]=a[4],e[i+5]=a[5],e[i+6]=a[6],e[i+7]=a[7],e[i+8]=a[8],e[i+9]=a[9],e[i+10]=a[10],e[i+11]=a[11],e[i+12]=a[12],e[i+13]=a[13],e[i+14]=a[14],e[i+15]=a[15],e}}const bs=new me,bi=new sn,rb=new me(0,0,0),sb=new me(1,1,1),Ya=new me,Nc=new me,ii=new me,Av=new sn,wv=new ul;class Vi{constructor(e=0,i=0,a=0,l=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=a,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,a,l=this._order){return this._x=e,this._y=i,this._z=a,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,a=!0){const l=e.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],x=l[6],E=l[10];switch(i){case"XYZ":this._y=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,E),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,E),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(wt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-v,E),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(x,E),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(wt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,E));break;case"XZY":this._z=Math.asin(-wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,E),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,a){return Av.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Av,i,a)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return wv.setFromEuler(this),this.setFromQuaternion(wv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class Y_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ob=0;const Rv=new me,Ts=new ul,ua=new sn,Uc=new me,qo=new me,lb=new me,cb=new ul,Cv=new me(1,0,0),Dv=new me(0,1,0),Nv=new me(0,0,1),Uv={type:"added"},ub={type:"removed"},As={type:"childadded",child:null},kd={type:"childremoved",child:null};class Cn extends qs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ob++}),this.uuid=cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new me,i=new Vi,a=new ul,l=new me(1,1,1);function c(){a.setFromEuler(i,!1)}function f(){i.setFromQuaternion(a,void 0,!1)}i._onChange(c),a._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new vt}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Y_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.multiply(Ts),this}rotateOnWorldAxis(e,i){return Ts.setFromAxisAngle(e,i),this.quaternion.premultiply(Ts),this}rotateX(e){return this.rotateOnAxis(Cv,e)}rotateY(e){return this.rotateOnAxis(Dv,e)}rotateZ(e){return this.rotateOnAxis(Nv,e)}translateOnAxis(e,i){return Rv.copy(e).applyQuaternion(this.quaternion),this.position.add(Rv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cv,e)}translateY(e){return this.translateOnAxis(Dv,e)}translateZ(e){return this.translateOnAxis(Nv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ua.copy(this.matrixWorld).invert())}lookAt(e,i,a){e.isVector3?Uc.copy(e):Uc.set(e,i,a);const l=this.parent;this.updateWorldMatrix(!0,!1),qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ua.lookAt(qo,Uc,this.up):ua.lookAt(Uc,qo,this.up),this.quaternion.setFromRotationMatrix(ua),l&&(ua.extractRotation(l.matrixWorld),Ts.setFromRotationMatrix(ua),this.quaternion.premultiply(Ts.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ub),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ua.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ua.multiply(e.parent.matrixWorld)),e.applyMatrix4(ua),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Uv),As.child=e,this.dispatchEvent(As),As.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let a=0,l=this.children.length;a<l;a++){const f=this.children[a].getObjectByProperty(e,i);if(f!==void 0)return f}}getObjectsByProperty(e,i,a=[]){this[e]===i&&a.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(e,i,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,e,lb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(qo,cb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let a=0,l=i.length;a<l;a++)i[a].updateMatrixWorld(e)}updateWorldMatrix(e,i){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",a={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=f(e.geometries),p=f(e.materials),m=f(e.textures),g=f(e.images),v=f(e.shapes),x=f(e.skeletons),E=f(e.animations),b=f(e.nodes);d.length>0&&(a.geometries=d),p.length>0&&(a.materials=p),m.length>0&&(a.textures=m),g.length>0&&(a.images=g),v.length>0&&(a.shapes=v),x.length>0&&(a.skeletons=x),E.length>0&&(a.animations=E),b.length>0&&(a.nodes=b)}return a.object=l,a;function f(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let a=0;a<e.children.length;a++){const l=e.children[a];this.add(l.clone())}return this}}Cn.DEFAULT_UP=new me(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new me,fa=new me,Wd=new me,da=new me,ws=new me,Rs=new me,Lv=new me,Xd=new me,jd=new me,qd=new me,Yd=new rn,Zd=new rn,Kd=new rn;class Ai{constructor(e=new me,i=new me,a=new me){this.a=e,this.b=i,this.c=a}static getNormal(e,i,a,l){l.subVectors(a,i),Ti.subVectors(e,i),l.cross(Ti);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,a,l,c){Ti.subVectors(l,i),fa.subVectors(a,i),Wd.subVectors(e,i);const f=Ti.dot(Ti),d=Ti.dot(fa),p=Ti.dot(Wd),m=fa.dot(fa),g=fa.dot(Wd),v=f*m-d*d;if(v===0)return c.set(0,0,0),null;const x=1/v,E=(m*p-d*g)*x,b=(f*g-d*p)*x;return c.set(1-E-b,b,E)}static containsPoint(e,i,a,l){return this.getBarycoord(e,i,a,l,da)===null?!1:da.x>=0&&da.y>=0&&da.x+da.y<=1}static getInterpolation(e,i,a,l,c,f,d,p){return this.getBarycoord(e,i,a,l,da)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,da.x),p.addScaledVector(f,da.y),p.addScaledVector(d,da.z),p)}static getInterpolatedAttribute(e,i,a,l,c,f){return Yd.setScalar(0),Zd.setScalar(0),Kd.setScalar(0),Yd.fromBufferAttribute(e,i),Zd.fromBufferAttribute(e,a),Kd.fromBufferAttribute(e,l),f.setScalar(0),f.addScaledVector(Yd,c.x),f.addScaledVector(Zd,c.y),f.addScaledVector(Kd,c.z),f}static isFrontFacing(e,i,a,l){return Ti.subVectors(a,i),fa.subVectors(e,i),Ti.cross(fa).dot(l)<0}set(e,i,a){return this.a.copy(e),this.b.copy(i),this.c.copy(a),this}setFromPointsAndIndices(e,i,a,l){return this.a.copy(e[i]),this.b.copy(e[a]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,a,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ti.subVectors(this.c,this.b),fa.subVectors(this.a,this.b),Ti.cross(fa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ai.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ai.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,a,l,c){return Ai.getInterpolation(e,this.a,this.b,this.c,i,a,l,c)}containsPoint(e){return Ai.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ai.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const a=this.a,l=this.b,c=this.c;let f,d;ws.subVectors(l,a),Rs.subVectors(c,a),Xd.subVectors(e,a);const p=ws.dot(Xd),m=Rs.dot(Xd);if(p<=0&&m<=0)return i.copy(a);jd.subVectors(e,l);const g=ws.dot(jd),v=Rs.dot(jd);if(g>=0&&v<=g)return i.copy(l);const x=p*v-g*m;if(x<=0&&p>=0&&g<=0)return f=p/(p-g),i.copy(a).addScaledVector(ws,f);qd.subVectors(e,c);const E=ws.dot(qd),b=Rs.dot(qd);if(b>=0&&E<=b)return i.copy(c);const T=E*m-p*b;if(T<=0&&m>=0&&b<=0)return d=m/(m-b),i.copy(a).addScaledVector(Rs,d);const y=g*b-E*v;if(y<=0&&v-g>=0&&E-b>=0)return Lv.subVectors(c,l),d=(v-g)/(v-g+(E-b)),i.copy(l).addScaledVector(Lv,d);const _=1/(y+T+x);return f=T*_,d=x*_,i.copy(a).addScaledVector(ws,f).addScaledVector(Rs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Za={h:0,s:0,l:0},Lc={h:0,s:0,l:0};function Qd(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class Dt{constructor(e,i,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,a)}set(e,i,a){if(i===void 0&&a===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,i),this}setRGB(e,i,a,l=Pt.workingColorSpace){return this.r=e,this.g=i,this.b=a,Pt.colorSpaceToWorking(this,l),this}setHSL(e,i,a,l=Pt.workingColorSpace){if(e=ZE(e,1),i=wt(i,0,1),a=wt(a,0,1),i===0)this.r=this.g=this.b=a;else{const c=a<=.5?a*(1+i):a+i-a*i,f=2*a-c;this.r=Qd(f,c,e+1/3),this.g=Qd(f,c,e),this.b=Qd(f,c,e-1/3)}return Pt.colorSpaceToWorking(this,l),this}setStyle(e,i=xi){function a(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=xi){const a=Z_[e.toLowerCase()];return a!==void 0?this.setHex(a,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=va(e.r),this.g=va(e.g),this.b=va(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return Pt.workingToColorSpace(Ln.copy(this),e),Math.round(wt(Ln.r*255,0,255))*65536+Math.round(wt(Ln.g*255,0,255))*256+Math.round(wt(Ln.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Pt.workingColorSpace){Pt.workingToColorSpace(Ln.copy(this),i);const a=Ln.r,l=Ln.g,c=Ln.b,f=Math.max(a,l,c),d=Math.min(a,l,c);let p,m;const g=(d+f)/2;if(d===f)p=0,m=0;else{const v=f-d;switch(m=g<=.5?v/(f+d):v/(2-f-d),f){case a:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-a)/v+2;break;case c:p=(a-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Pt.workingColorSpace){return Pt.workingToColorSpace(Ln.copy(this),i),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=xi){Pt.workingToColorSpace(Ln.copy(this),e);const i=Ln.r,a=Ln.g,l=Ln.b;return e!==xi?`color(${e} ${i.toFixed(3)} ${a.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(a*255)},${Math.round(l*255)})`}offsetHSL(e,i,a){return this.getHSL(Za),this.setHSL(Za.h+e,Za.s+i,Za.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,a){return this.r=e.r+(i.r-e.r)*a,this.g=e.g+(i.g-e.g)*a,this.b=e.b+(i.b-e.b)*a,this}lerpHSL(e,i){this.getHSL(Za),e.getHSL(Lc);const a=Ld(Za.h,Lc.h,i),l=Ld(Za.s,Lc.s,i),c=Ld(Za.l,Lc.l,i);return this.setHSL(a,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,a=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*a+c[6]*l,this.g=c[1]*i+c[4]*a+c[7]*l,this.b=c[2]*i+c[5]*a+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Dt;Dt.NAMES=Z_;let fb=0;class Ys extends qs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fb++}),this.uuid=cl(),this.name="",this.type="Material",this.blending=Is,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Dt(0,0,0),this.blendAlpha=0,this.depthFunc=Hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xs,this.stencilZFail=xs,this.stencilZPass=xs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const a=e[i];if(a===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(a):l&&l.isVector3&&a&&a.isVector3?l.copy(a):this[i]=a}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(a.blending=this.blending),this.side!==tr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==ph&&(a.blendSrc=this.blendSrc),this.blendDst!==mh&&(a.blendDst=this.blendDst),this.blendEquation!==Dr&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Hs&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xv&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xs&&(a.stencilFail=this.stencilFail),this.stencilZFail!==xs&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==xs&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(e.textures),f=l(e.images);c.length>0&&(a.textures=c),f.length>0&&(a.images=f)}return a}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let a=null;if(i!==null){const l=i.length;a=new Array(l);for(let c=0;c!==l;++c)a[c]=i[c].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class K_ extends Ys{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=L_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new me,Oc=new It;let db=0;class Yn{constructor(e,i,a=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:db++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=a,this.usage=yv,this.updateRanges=[],this.gpuType=ma,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,a){e*=this.itemSize,a*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[a+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,a=this.count;i<a;i++)Oc.fromBufferAttribute(this,i),Oc.applyMatrix3(e),this.setXY(i,Oc.x,Oc.y);else if(this.itemSize===3)for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,a=this.count;i<a;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let a=this.array[e*this.itemSize+i];return this.normalized&&(a=Wo(a,this.array)),a}setComponent(e,i,a){return this.normalized&&(a=Wn(a,this.array)),this.array[e*this.itemSize+i]=a,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Wo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Wo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Wo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Wo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Wn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,a){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array)),this.array[e+0]=i,this.array[e+1]=a,this}setXYZ(e,i,a,l){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array),l=Wn(l,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this}setXYZW(e,i,a,l,c){return e*=this.itemSize,this.normalized&&(i=Wn(i,this.array),a=Wn(a,this.array),l=Wn(l,this.array),c=Wn(c,this.array)),this.array[e+0]=i,this.array[e+1]=a,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yv&&(e.usage=this.usage),e}}class Q_ extends Yn{constructor(e,i,a){super(new Uint16Array(e),i,a)}}class J_ extends Yn{constructor(e,i,a){super(new Uint32Array(e),i,a)}}class Fi extends Yn{constructor(e,i,a){super(new Float32Array(e),i,a)}}let hb=0;const vi=new sn,Jd=new Cn,Cs=new me,ai=new fl,Yo=new fl,Mn=new me;class Ci extends qs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=cl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(X_(e)?J_:Q_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,a=0){this.groups.push({start:e,count:i,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const c=new vt().getNormalMatrix(e);a.applyNormalMatrix(c),a.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vi.makeRotationFromQuaternion(e),this.applyMatrix4(vi),this}rotateX(e){return vi.makeRotationX(e),this.applyMatrix4(vi),this}rotateY(e){return vi.makeRotationY(e),this.applyMatrix4(vi),this}rotateZ(e){return vi.makeRotationZ(e),this.applyMatrix4(vi),this}translate(e,i,a){return vi.makeTranslation(e,i,a),this.applyMatrix4(vi),this}scale(e,i,a){return vi.makeScale(e,i,a),this.applyMatrix4(vi),this}lookAt(e){return Jd.lookAt(e),Jd.updateMatrix(),this.applyMatrix4(Jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cs).negate(),this.translate(Cs.x,Cs.y,Cs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l];a.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Fi(a,3))}else{const a=Math.min(e.length,i.count);for(let l=0;l<a;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new fl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new me(-1/0,-1/0,-1/0),new me(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let a=0,l=i.length;a<l;a++){const c=i[a];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new du);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new me,1/0);return}if(e){const a=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Yo.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(ai.min,Yo.min),ai.expandByPoint(Mn),Mn.addVectors(ai.max,Yo.max),ai.expandByPoint(Mn)):(ai.expandByPoint(Yo.min),ai.expandByPoint(Yo.max))}ai.getCenter(a);let l=0;for(let c=0,f=e.count;c<f;c++)Mn.fromBufferAttribute(e,c),l=Math.max(l,a.distanceToSquared(Mn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Mn.fromBufferAttribute(d,m),p&&(Cs.fromBufferAttribute(e,m),Mn.add(Cs)),l=Math.max(l,a.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yn(new Float32Array(4*a.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let J=0;J<a.count;J++)d[J]=new me,p[J]=new me;const m=new me,g=new me,v=new me,x=new It,E=new It,b=new It,T=new me,y=new me;function _(J,L,P){m.fromBufferAttribute(a,J),g.fromBufferAttribute(a,L),v.fromBufferAttribute(a,P),x.fromBufferAttribute(c,J),E.fromBufferAttribute(c,L),b.fromBufferAttribute(c,P),g.sub(m),v.sub(m),E.sub(x),b.sub(x);const Z=1/(E.x*b.y-b.x*E.y);isFinite(Z)&&(T.copy(g).multiplyScalar(b.y).addScaledVector(v,-E.y).multiplyScalar(Z),y.copy(v).multiplyScalar(E.x).addScaledVector(g,-b.x).multiplyScalar(Z),d[J].add(T),d[L].add(T),d[P].add(T),p[J].add(y),p[L].add(y),p[P].add(y))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let J=0,L=C.length;J<L;++J){const P=C[J],Z=P.start,se=P.count;for(let le=Z,ve=Z+se;le<ve;le+=3)_(e.getX(le+0),e.getX(le+1),e.getX(le+2))}const N=new me,O=new me,W=new me,X=new me;function z(J){W.fromBufferAttribute(l,J),X.copy(W);const L=d[J];N.copy(L),N.sub(W.multiplyScalar(W.dot(L))).normalize(),O.crossVectors(X,L);const Z=O.dot(p[J])<0?-1:1;f.setXYZW(J,N.x,N.y,N.z,Z)}for(let J=0,L=C.length;J<L;++J){const P=C[J],Z=P.start,se=P.count;for(let le=Z,ve=Z+se;le<ve;le+=3)z(e.getX(le+0)),z(e.getX(le+1)),z(e.getX(le+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new Yn(new Float32Array(i.count*3),3),this.setAttribute("normal",a);else for(let x=0,E=a.count;x<E;x++)a.setXYZ(x,0,0,0);const l=new me,c=new me,f=new me,d=new me,p=new me,m=new me,g=new me,v=new me;if(e)for(let x=0,E=e.count;x<E;x+=3){const b=e.getX(x+0),T=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,b),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,y),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(a,b),p.fromBufferAttribute(a,T),m.fromBufferAttribute(a,y),d.add(g),p.add(g),m.add(g),a.setXYZ(b,d.x,d.y,d.z),a.setXYZ(T,p.x,p.y,p.z),a.setXYZ(y,m.x,m.y,m.z)}else for(let x=0,E=i.count;x<E;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),g.subVectors(f,c),v.subVectors(l,c),g.cross(v),a.setXYZ(x+0,g.x,g.y,g.z),a.setXYZ(x+1,g.x,g.y,g.z),a.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,a=e.count;i<a;i++)Mn.fromBufferAttribute(e,i),Mn.normalize(),e.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,x=new m.constructor(p.length*g);let E=0,b=0;for(let T=0,y=p.length;T<y;T++){d.isInterleavedBufferAttribute?E=p[T]*d.data.stride+d.offset:E=p[T]*g;for(let _=0;_<g;_++)x[b++]=m[E++]}return new Yn(x,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ci,a=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,a);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const x=m[g],E=e(x,a);p.push(E)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const a=this.attributes;for(const p in a){const m=a[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,x=m.length;v<x;v++){const E=m[v];g.push(E.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(e.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let x=0,E=v.length;x<E;x++)g.push(v[x].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const f=e.groups;for(let m=0,g=f.length;m<g;m++){const v=f[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ov=new sn,br=new q_,Pc=new du,Pv=new me,Ic=new me,zc=new me,Bc=new me,$d=new me,Fc=new me,Iv=new me,Hc=new me;class oi extends Cn{constructor(e=new Ci,i=new K_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const a=this.geometry,l=a.attributes.position,c=a.morphAttributes.position,f=a.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Fc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&($d.fromBufferAttribute(v,e),f?Fc.addScaledVector($d,g):Fc.addScaledVector($d.sub(i),g))}i.add(Fc)}return i}raycast(e,i){const a=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Pc.copy(a.boundingSphere),Pc.applyMatrix4(c),br.copy(e.ray).recast(e.near),!(Pc.containsPoint(br.origin)===!1&&(br.intersectSphere(Pc,Pv)===null||br.origin.distanceToSquared(Pv)>(e.far-e.near)**2))&&(Ov.copy(c).invert(),br.copy(e.ray).applyMatrix4(Ov),!(a.boundingBox!==null&&br.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,i,br)))}_computeIntersections(e,i,a){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,x=c.groups,E=c.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],_=f[y.materialIndex],C=Math.max(y.start,E.start),N=Math.min(d.count,Math.min(y.start+y.count,E.start+E.count));for(let O=C,W=N;O<W;O+=3){const X=d.getX(O),z=d.getX(O+1),J=d.getX(O+2);l=Gc(this,_,e,a,m,g,v,X,z,J),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),T=Math.min(d.count,E.start+E.count);for(let y=b,_=T;y<_;y+=3){const C=d.getX(y),N=d.getX(y+1),O=d.getX(y+2);l=Gc(this,f,e,a,m,g,v,C,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let b=0,T=x.length;b<T;b++){const y=x[b],_=f[y.materialIndex],C=Math.max(y.start,E.start),N=Math.min(p.count,Math.min(y.start+y.count,E.start+E.count));for(let O=C,W=N;O<W;O+=3){const X=O,z=O+1,J=O+2;l=Gc(this,_,e,a,m,g,v,X,z,J),l&&(l.faceIndex=Math.floor(O/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const b=Math.max(0,E.start),T=Math.min(p.count,E.start+E.count);for(let y=b,_=T;y<_;y+=3){const C=y,N=y+1,O=y+2;l=Gc(this,f,e,a,m,g,v,C,N,O),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function pb(s,e,i,a,l,c,f,d){let p;if(e.side===jn?p=a.intersectTriangle(f,c,l,!0,d):p=a.intersectTriangle(l,c,f,e.side===tr,d),p===null)return null;Hc.copy(d),Hc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Hc);return m<i.near||m>i.far?null:{distance:m,point:Hc.clone(),object:s}}function Gc(s,e,i,a,l,c,f,d,p,m){s.getVertexPosition(d,Ic),s.getVertexPosition(p,zc),s.getVertexPosition(m,Bc);const g=pb(s,e,i,a,Ic,zc,Bc,Iv);if(g){const v=new me;Ai.getBarycoord(Iv,Ic,zc,Bc,v),l&&(g.uv=Ai.getInterpolatedAttribute(l,d,p,m,v,new It)),c&&(g.uv1=Ai.getInterpolatedAttribute(c,d,p,m,v,new It)),f&&(g.normal=Ai.getInterpolatedAttribute(f,d,p,m,v,new me),g.normal.dot(a.direction)>0&&g.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new me,materialIndex:0};Ai.getNormal(Ic,zc,Bc,x.normal),g.face=x,g.barycoord=v}return g}class dl extends Ci{constructor(e=1,i=1,a=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:a,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],g=[],v=[];let x=0,E=0;b("z","y","x",-1,-1,a,i,e,f,c,0),b("z","y","x",1,-1,a,i,-e,f,c,1),b("x","z","y",1,1,e,a,i,l,f,2),b("x","z","y",1,-1,e,a,-i,l,f,3),b("x","y","z",1,-1,e,i,a,l,c,4),b("x","y","z",-1,-1,e,i,-a,l,c,5),this.setIndex(p),this.setAttribute("position",new Fi(m,3)),this.setAttribute("normal",new Fi(g,3)),this.setAttribute("uv",new Fi(v,2));function b(T,y,_,C,N,O,W,X,z,J,L){const P=O/z,Z=W/J,se=O/2,le=W/2,ve=X/2,oe=z+1,B=J+1;let $=0,te=0;const k=new me;for(let U=0;U<B;U++){const M=U*Z-le;for(let w=0;w<oe;w++){const G=w*P-se;k[T]=G*C,k[y]=M*N,k[_]=ve,m.push(k.x,k.y,k.z),k[T]=0,k[y]=0,k[_]=X>0?1:-1,g.push(k.x,k.y,k.z),v.push(w/z),v.push(1-U/J),$+=1}}for(let U=0;U<J;U++)for(let M=0;M<z;M++){const w=x+M+oe*U,G=x+M+oe*(U+1),ee=x+(M+1)+oe*(U+1),Q=x+(M+1)+oe*U;p.push(w,G,Q),p.push(G,ee,Q),te+=6}d.addGroup(E,te,L),E+=te,x+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ws(s){const e={};for(const i in s){e[i]={};for(const a in s[i]){const l=s[i][a];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][a]=null):e[i][a]=l.clone():Array.isArray(l)?e[i][a]=l.slice():e[i][a]=l}}return e}function zn(s){const e={};for(let i=0;i<s.length;i++){const a=Ws(s[i]);for(const l in a)e[l]=a[l]}return e}function mb(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function $_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const gb={clone:Ws,merge:zn};var vb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Ys{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vb,this.fragmentShader=_b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=mb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(e).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const a={};for(const l in this.extensions)this.extensions[l]===!0&&(a[l]=!0);return Object.keys(a).length>0&&(i.extensions=a),i}}class ex extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ka=new me,zv=new It,Bv=new It;class ri extends ex{constructor(e=50,i=1,a=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=tp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ud*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tp*2*Math.atan(Math.tan(Ud*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,a){Ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z),Ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Ka.x,Ka.y).multiplyScalar(-e/Ka.z)}getViewSize(e,i){return this.getViewBounds(e,zv,Bv),i.subVectors(Bv,zv)}setViewOffset(e,i,a,l,c,f){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Ud*.5*this.fov)/this.zoom,a=2*i,l=this.aspect*a,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*a/m,l*=f.width/p,a*=f.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ds=-90,Ns=1;class xb extends Cn{constructor(e,i,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(Ds,Ns,e,i);l.layers=this.layers,this.add(l);const c=new ri(Ds,Ns,e,i);c.layers=this.layers,this.add(c);const f=new ri(Ds,Ns,e,i);f.layers=this.layers,this.add(f);const d=new ri(Ds,Ns,e,i);d.layers=this.layers,this.add(d);const p=new ri(Ds,Ns,e,i);p.layers=this.layers,this.add(p);const m=new ri(Ds,Ns,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[a,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(e===Bi)a.up.set(0,1,0),a.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===ru)a.up.set(0,-1,0),a.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,g]=this.children,v=e.getRenderTarget(),x=e.getActiveCubeFace(),E=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const T=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,e.setRenderTarget(a,0,l),e.render(i,c),e.setRenderTarget(a,1,l),e.render(i,f),e.setRenderTarget(a,2,l),e.render(i,d),e.setRenderTarget(a,3,l),e.render(i,p),e.setRenderTarget(a,4,l),e.render(i,m),a.texture.generateMipmaps=T,e.setRenderTarget(a,5,l),e.render(i,g),e.setRenderTarget(v,x,E),e.xr.enabled=b,a.texture.needsPMREMUpdate=!0}}class tx extends qn{constructor(e=[],i=Gs,a,l,c,f,d,p,m,g){super(e,i,a,l,c,f,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class yb extends Ir{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},l=[a,a,a,a,a,a];this.texture=new tx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new dl(5,5,5),c=new nr({name:"CubemapFromEquirect",uniforms:Ws(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:jn,blending:$a});c.uniforms.tEquirect.value=i;const f=new oi(l,c),d=i.minFilter;return i.minFilter===Lr&&(i.minFilter=zi),new xb(1,10,this).update(e,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(e,i=!0,a=!0,l=!0){const c=e.getRenderTarget();for(let f=0;f<6;f++)e.setRenderTarget(this,f),e.clear(i,a,l);e.setRenderTarget(c)}}class Vc extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sb={type:"move"};class eh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new me,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new me),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new me,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new me),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const a of e.hand.values())this._getHandJoint(i,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,a){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){f=!0;for(const T of e.hand.values()){const y=i.getJointPose(T,a),_=this._getHandJoint(m,T);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],x=g.position.distanceTo(v.position),E=.02,b=.005;m.inputState.pinching&&x>E+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=E-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,a),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,a),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Sb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const a=new Vc;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[i.jointName]=a,e.add(a)}return e.joints[i.jointName]}}class nx extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const th=new me,Mb=new me,Eb=new vt;class Rr{constructor(e=new me(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,a,l){return this.normal.set(e,i,a),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,a){const l=th.subVectors(a,i).cross(Mb.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const a=e.delta(th),l=this.normal.dot(a);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return i<0&&a>0||a<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const a=i||Eb.getNormalMatrix(e),l=this.coplanarPoint(th).applyMatrix4(e),c=this.normal.applyMatrix3(a).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Tr=new du,bb=new It(.5,.5),kc=new me;class _p{constructor(e=new Rr,i=new Rr,a=new Rr,l=new Rr,c=new Rr,f=new Rr){this.planes=[e,i,a,l,c,f]}set(e,i,a,l,c,f){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(a),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(e){const i=this.planes;for(let a=0;a<6;a++)i[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,i=Bi,a=!1){const l=this.planes,c=e.elements,f=c[0],d=c[1],p=c[2],m=c[3],g=c[4],v=c[5],x=c[6],E=c[7],b=c[8],T=c[9],y=c[10],_=c[11],C=c[12],N=c[13],O=c[14],W=c[15];if(l[0].setComponents(m-f,E-g,_-b,W-C).normalize(),l[1].setComponents(m+f,E+g,_+b,W+C).normalize(),l[2].setComponents(m+d,E+v,_+T,W+N).normalize(),l[3].setComponents(m-d,E-v,_-T,W-N).normalize(),a)l[4].setComponents(p,x,y,O).normalize(),l[5].setComponents(m-p,E-x,_-y,W-O).normalize();else if(l[4].setComponents(m-p,E-x,_-y,W-O).normalize(),i===Bi)l[5].setComponents(m+p,E+x,_+y,W+O).normalize();else if(i===ru)l[5].setComponents(p,x,y,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Tr)}intersectsSprite(e){Tr.center.set(0,0,0);const i=bb.distanceTo(e.center);return Tr.radius=.7071067811865476+i,Tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Tr)}intersectsSphere(e){const i=this.planes,a=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(a)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let a=0;a<6;a++){const l=i[a];if(kc.x=l.normal.x>0?e.max.x:e.min.x,kc.y=l.normal.y>0?e.max.y:e.min.y,kc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(kc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let a=0;a<6;a++)if(i[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xp extends Ys{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Dt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Fv=new sn,np=new q_,Wc=new du,Xc=new me;class ix extends Cn{constructor(e=new Ci,i=new xp){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const a=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,f=a.drawRange;if(a.boundingSphere===null&&a.computeBoundingSphere(),Wc.copy(a.boundingSphere),Wc.applyMatrix4(l),Wc.radius+=c,e.ray.intersectsSphere(Wc)===!1)return;Fv.copy(l).invert(),np.copy(e.ray).applyMatrix4(Fv);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=a.index,v=a.attributes.position;if(m!==null){const x=Math.max(0,f.start),E=Math.min(m.count,f.start+f.count);for(let b=x,T=E;b<T;b++){const y=m.getX(b);Xc.fromBufferAttribute(v,y),Hv(Xc,y,p,l,e,i,this)}}else{const x=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=x,T=E;b<T;b++)Xc.fromBufferAttribute(v,b),Hv(Xc,b,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,a=Object.keys(i);if(a.length>0){const l=i[a[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Hv(s,e,i,a,l,c,f){const d=np.distanceSqToPoint(s);if(d<i){const p=new me;np.closestPointToPoint(s,p),p.applyMatrix4(a);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:f})}}class ax extends qn{constructor(e,i,a=Pr,l,c,f,d=Ri,p=Ri,m,g=tl,v=1){if(g!==tl&&g!==nl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:v};super(x,l,c,f,d,p,g,a,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class rx extends qn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class hu extends Ci{constructor(e=1,i=1,a=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:a,heightSegments:l};const c=e/2,f=i/2,d=Math.floor(a),p=Math.floor(l),m=d+1,g=p+1,v=e/d,x=i/p,E=[],b=[],T=[],y=[];for(let _=0;_<g;_++){const C=_*x-f;for(let N=0;N<m;N++){const O=N*v-c;b.push(O,-C,0),T.push(0,0,1),y.push(N/d),y.push(1-_/p)}}for(let _=0;_<p;_++)for(let C=0;C<d;C++){const N=C+m*_,O=C+m*(_+1),W=C+1+m*(_+1),X=C+1+m*_;E.push(N,O,X),E.push(O,W,X)}this.setIndex(E),this.setAttribute("position",new Fi(b,3)),this.setAttribute("normal",new Fi(T,3)),this.setAttribute("uv",new Fi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.width,e.height,e.widthSegments,e.heightSegments)}}class pu extends Ci{constructor(e=1,i=32,a=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:a,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),a=Math.max(2,Math.floor(a));const p=Math.min(f+d,Math.PI);let m=0;const g=[],v=new me,x=new me,E=[],b=[],T=[],y=[];for(let _=0;_<=a;_++){const C=[],N=_/a;let O=0;_===0&&f===0?O=.5/i:_===a&&p===Math.PI&&(O=-.5/i);for(let W=0;W<=i;W++){const X=W/i;v.x=-e*Math.cos(l+X*c)*Math.sin(f+N*d),v.y=e*Math.cos(f+N*d),v.z=e*Math.sin(l+X*c)*Math.sin(f+N*d),b.push(v.x,v.y,v.z),x.copy(v).normalize(),T.push(x.x,x.y,x.z),y.push(X+O,1-N),C.push(m++)}g.push(C)}for(let _=0;_<a;_++)for(let C=0;C<i;C++){const N=g[_][C+1],O=g[_][C],W=g[_+1][C],X=g[_+1][C+1];(_!==0||f>0)&&E.push(N,O,X),(_!==a-1||p<Math.PI)&&E.push(O,W,X)}this.setIndex(E),this.setAttribute("position",new Fi(b,3)),this.setAttribute("normal",new Fi(T,3)),this.setAttribute("uv",new Fi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Tb extends Ys{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=k_,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ou extends Tb{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new It(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ab extends Ys{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=FE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wb extends Ys{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class sx extends Cn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Dt(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const nh=new sn,Gv=new me,Vv=new me;class Rb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Gi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _p,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,a=this.matrix;Gv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Gv),Vv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Vv),i.updateMatrixWorld(),nh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?a.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):a.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),a.multiply(nh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class ox extends ex{constructor(e=-1,i=1,a=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=a,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,a,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=a,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=a-e,f=a+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Cb extends Rb{constructor(){super(new ox(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lx extends sx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new Cb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class cx extends sx{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Db extends ri{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function kv(s,e,i,a){const l=Nb(a);switch(i){case F_:return s*e;case G_:return s*e/l.components*l.byteLength;case pp:return s*e/l.components*l.byteLength;case V_:return s*e*2/l.components*l.byteLength;case mp:return s*e*2/l.components*l.byteLength;case H_:return s*e*3/l.components*l.byteLength;case wi:return s*e*4/l.components*l.byteLength;case gp:return s*e*4/l.components*l.byteLength;case Jc:case $c:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rh:case Dh:return Math.max(s,16)*Math.max(e,8)/4;case wh:case Ch:return Math.max(s,8)*Math.max(e,8)/2;case Nh:case Uh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case zh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case kh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Wh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Xh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case jh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Yh:case Zh:case Kh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Qh:case Jh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case $h:case ep:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nb(s){switch(s){case Gi:case P_:return{byteLength:1,components:1};case $o:case I_:case ll:return{byteLength:2,components:1};case dp:case hp:return{byteLength:2,components:4};case Pr:case fp:case ma:return{byteLength:4,components:1};case z_:case B_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ux(){let s=null,e=!1,i=null,a=null;function l(c,f){i(c,f),a=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(a=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function Ub(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,x=s.createBuffer();s.bindBuffer(p,x),s.bufferData(p,m,g),d.onUploadCallback();let E;if(m instanceof Float32Array)E=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)E=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?E=s.HALF_FLOAT:E=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)E=s.SHORT;else if(m instanceof Uint32Array)E=s.UNSIGNED_INT;else if(m instanceof Int32Array)E=s.INT;else if(m instanceof Int8Array)E=s.BYTE;else if(m instanceof Uint8Array)E=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)E=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:E,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function a(d,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((E,b)=>E.start-b.start);let x=0;for(let E=1;E<v.length;E++){const b=v[x],T=v[E];T.start<=b.start+b.count+1?b.count=Math.max(b.count,T.start+T.count-b.start):(++x,v[x]=T)}v.length=x+1;for(let E=0,b=v.length;E<b;E++){const T=v[E];s.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var Lb=`#ifdef USE_ALPHAHASH
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
}`,xt={alphahash_fragment:Lb,alphahash_pars_fragment:Ob,alphamap_fragment:Pb,alphamap_pars_fragment:Ib,alphatest_fragment:zb,alphatest_pars_fragment:Bb,aomap_fragment:Fb,aomap_pars_fragment:Hb,batching_pars_vertex:Gb,batching_vertex:Vb,begin_vertex:kb,beginnormal_vertex:Wb,bsdfs:Xb,iridescence_fragment:jb,bumpmap_pars_fragment:qb,clipping_planes_fragment:Yb,clipping_planes_pars_fragment:Zb,clipping_planes_pars_vertex:Kb,clipping_planes_vertex:Qb,color_fragment:Jb,color_pars_fragment:$b,color_pars_vertex:eT,color_vertex:tT,common:nT,cube_uv_reflection_fragment:iT,defaultnormal_vertex:aT,displacementmap_pars_vertex:rT,displacementmap_vertex:sT,emissivemap_fragment:oT,emissivemap_pars_fragment:lT,colorspace_fragment:cT,colorspace_pars_fragment:uT,envmap_fragment:fT,envmap_common_pars_fragment:dT,envmap_pars_fragment:hT,envmap_pars_vertex:pT,envmap_physical_pars_fragment:TT,envmap_vertex:mT,fog_vertex:gT,fog_pars_vertex:vT,fog_fragment:_T,fog_pars_fragment:xT,gradientmap_pars_fragment:yT,lightmap_pars_fragment:ST,lights_lambert_fragment:MT,lights_lambert_pars_fragment:ET,lights_pars_begin:bT,lights_toon_fragment:AT,lights_toon_pars_fragment:wT,lights_phong_fragment:RT,lights_phong_pars_fragment:CT,lights_physical_fragment:DT,lights_physical_pars_fragment:NT,lights_fragment_begin:UT,lights_fragment_maps:LT,lights_fragment_end:OT,logdepthbuf_fragment:PT,logdepthbuf_pars_fragment:IT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:BT,map_fragment:FT,map_pars_fragment:HT,map_particle_fragment:GT,map_particle_pars_fragment:VT,metalnessmap_fragment:kT,metalnessmap_pars_fragment:WT,morphinstance_vertex:XT,morphcolor_vertex:jT,morphnormal_vertex:qT,morphtarget_pars_vertex:YT,morphtarget_vertex:ZT,normal_fragment_begin:KT,normal_fragment_maps:QT,normal_pars_fragment:JT,normal_pars_vertex:$T,normal_vertex:e1,normalmap_pars_fragment:t1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:r1,opaque_fragment:s1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:u1,dithering_pars_fragment:f1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:v1,skinbase_vertex:_1,skinning_pars_vertex:x1,skinning_vertex:y1,skinnormal_vertex:S1,specularmap_fragment:M1,specularmap_pars_fragment:E1,tonemapping_fragment:b1,tonemapping_pars_fragment:T1,transmission_fragment:A1,transmission_pars_fragment:w1,uv_pars_fragment:R1,uv_pars_vertex:C1,uv_vertex:D1,worldpos_vertex:N1,background_vert:U1,background_frag:L1,backgroundCube_vert:O1,backgroundCube_frag:P1,cube_vert:I1,cube_frag:z1,depth_vert:B1,depth_frag:F1,distanceRGBA_vert:H1,distanceRGBA_frag:G1,equirect_vert:V1,equirect_frag:k1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:j1,meshbasic_frag:q1,meshlambert_vert:Y1,meshlambert_frag:Z1,meshmatcap_vert:K1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:$1,meshphong_vert:eA,meshphong_frag:tA,meshphysical_vert:nA,meshphysical_frag:iA,meshtoon_vert:aA,meshtoon_frag:rA,points_vert:sA,points_frag:oA,shadow_vert:lA,shadow_frag:cA,sprite_vert:uA,sprite_frag:fA},Be={common:{diffuse:{value:new Dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new Dt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Ii={basic:{uniforms:zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:zn([Be.common,Be.specularmap,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},specular:{value:new Dt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:zn([Be.common,Be.envmap,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.roughnessmap,Be.metalnessmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:zn([Be.common,Be.aomap,Be.lightmap,Be.emissivemap,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.gradientmap,Be.fog,Be.lights,{emissive:{value:new Dt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:zn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,Be.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:zn([Be.points,Be.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:zn([Be.common,Be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:zn([Be.common,Be.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:zn([Be.common,Be.bumpmap,Be.normalmap,Be.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:zn([Be.sprite,Be.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:zn([Be.common,Be.displacementmap,{referencePosition:{value:new me},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:zn([Be.lights,Be.fog,{color:{value:new Dt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ii.physical={uniforms:zn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new Dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new Dt(0)},specularColor:{value:new Dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const jc={r:0,b:0,g:0},Ar=new Vi,dA=new sn;function hA(s,e,i,a,l,c,f){const d=new Dt(0);let p=c===!0?0:1,m,g,v=null,x=0,E=null;function b(N){let O=N.isScene===!0?N.background:null;return O&&O.isTexture&&(O=(N.backgroundBlurriness>0?i:e).get(O)),O}function T(N){let O=!1;const W=b(N);W===null?_(d,p):W&&W.isColor&&(_(W,1),O=!0);const X=s.xr.getEnvironmentBlendMode();X==="additive"?a.buffers.color.setClear(0,0,0,1,f):X==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,f),(s.autoClear||O)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,O){const W=b(O);W&&(W.isCubeTexture||W.mapping===fu)?(g===void 0&&(g=new oi(new dl(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:Ws(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(X,z,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ar.copy(O.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=O.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(dA.makeRotationFromEuler(Ar)),g.material.toneMapped=Pt.getTransfer(W.colorSpace)!==jt,(v!==W||x!==W.version||E!==s.toneMapping)&&(g.material.needsUpdate=!0,v=W,x=W.version,E=s.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(m===void 0&&(m=new oi(new hu(2,2),new nr({name:"BackgroundMaterial",uniforms:Ws(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=W,m.material.uniforms.backgroundIntensity.value=O.backgroundIntensity,m.material.toneMapped=Pt.getTransfer(W.colorSpace)!==jt,W.matrixAutoUpdate===!0&&W.updateMatrix(),m.material.uniforms.uvTransform.value.copy(W.matrix),(v!==W||x!==W.version||E!==s.toneMapping)&&(m.material.needsUpdate=!0,v=W,x=W.version,E=s.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function _(N,O){N.getRGB(jc,$_(s)),a.buffers.color.setClear(jc.r,jc.g,jc.b,O,f)}function C(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,O=1){d.set(N),p=O,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,_(d,p)},render:T,addToRenderList:y,dispose:C}}function pA(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),a={},l=x(null);let c=l,f=!1;function d(P,Z,se,le,ve){let oe=!1;const B=v(le,se,Z);c!==B&&(c=B,m(c.object)),oe=E(P,le,se,ve),oe&&b(P,le,se,ve),ve!==null&&e.update(ve,s.ELEMENT_ARRAY_BUFFER),(oe||f)&&(f=!1,O(P,Z,se,le),ve!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ve).buffer))}function p(){return s.createVertexArray()}function m(P){return s.bindVertexArray(P)}function g(P){return s.deleteVertexArray(P)}function v(P,Z,se){const le=se.wireframe===!0;let ve=a[P.id];ve===void 0&&(ve={},a[P.id]=ve);let oe=ve[Z.id];oe===void 0&&(oe={},ve[Z.id]=oe);let B=oe[le];return B===void 0&&(B=x(p()),oe[le]=B),B}function x(P){const Z=[],se=[],le=[];for(let ve=0;ve<i;ve++)Z[ve]=0,se[ve]=0,le[ve]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:se,attributeDivisors:le,object:P,attributes:{},index:null}}function E(P,Z,se,le){const ve=c.attributes,oe=Z.attributes;let B=0;const $=se.getAttributes();for(const te in $)if($[te].location>=0){const U=ve[te];let M=oe[te];if(M===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(M=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(M=P.instanceColor)),U===void 0||U.attribute!==M||M&&U.data!==M.data)return!0;B++}return c.attributesNum!==B||c.index!==le}function b(P,Z,se,le){const ve={},oe=Z.attributes;let B=0;const $=se.getAttributes();for(const te in $)if($[te].location>=0){let U=oe[te];U===void 0&&(te==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),te==="instanceColor"&&P.instanceColor&&(U=P.instanceColor));const M={};M.attribute=U,U&&U.data&&(M.data=U.data),ve[te]=M,B++}c.attributes=ve,c.attributesNum=B,c.index=le}function T(){const P=c.newAttributes;for(let Z=0,se=P.length;Z<se;Z++)P[Z]=0}function y(P){_(P,0)}function _(P,Z){const se=c.newAttributes,le=c.enabledAttributes,ve=c.attributeDivisors;se[P]=1,le[P]===0&&(s.enableVertexAttribArray(P),le[P]=1),ve[P]!==Z&&(s.vertexAttribDivisor(P,Z),ve[P]=Z)}function C(){const P=c.newAttributes,Z=c.enabledAttributes;for(let se=0,le=Z.length;se<le;se++)Z[se]!==P[se]&&(s.disableVertexAttribArray(se),Z[se]=0)}function N(P,Z,se,le,ve,oe,B){B===!0?s.vertexAttribIPointer(P,Z,se,ve,oe):s.vertexAttribPointer(P,Z,se,le,ve,oe)}function O(P,Z,se,le){T();const ve=le.attributes,oe=se.getAttributes(),B=Z.defaultAttributeValues;for(const $ in oe){const te=oe[$];if(te.location>=0){let k=ve[$];if(k===void 0&&($==="instanceMatrix"&&P.instanceMatrix&&(k=P.instanceMatrix),$==="instanceColor"&&P.instanceColor&&(k=P.instanceColor)),k!==void 0){const U=k.normalized,M=k.itemSize,w=e.get(k);if(w===void 0)continue;const G=w.buffer,ee=w.type,Q=w.bytesPerElement,H=ee===s.INT||ee===s.UNSIGNED_INT||k.gpuType===fp;if(k.isInterleavedBufferAttribute){const Y=k.data,pe=Y.stride,Te=k.offset;if(Y.isInstancedInterleavedBuffer){for(let Ne=0;Ne<te.locationSize;Ne++)_(te.location+Ne,Y.meshPerAttribute);P.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Ne=0;Ne<te.locationSize;Ne++)y(te.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Ne=0;Ne<te.locationSize;Ne++)N(te.location+Ne,M/te.locationSize,ee,U,pe*Q,(Te+M/te.locationSize*Ne)*Q,H)}else{if(k.isInstancedBufferAttribute){for(let Y=0;Y<te.locationSize;Y++)_(te.location+Y,k.meshPerAttribute);P.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Y=0;Y<te.locationSize;Y++)y(te.location+Y);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Y=0;Y<te.locationSize;Y++)N(te.location+Y,M/te.locationSize,ee,U,M*Q,M/te.locationSize*Y*Q,H)}}else if(B!==void 0){const U=B[$];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(te.location,U);break;case 3:s.vertexAttrib3fv(te.location,U);break;case 4:s.vertexAttrib4fv(te.location,U);break;default:s.vertexAttrib1fv(te.location,U)}}}}C()}function W(){J();for(const P in a){const Z=a[P];for(const se in Z){const le=Z[se];for(const ve in le)g(le[ve].object),delete le[ve];delete Z[se]}delete a[P]}}function X(P){if(a[P.id]===void 0)return;const Z=a[P.id];for(const se in Z){const le=Z[se];for(const ve in le)g(le[ve].object),delete le[ve];delete Z[se]}delete a[P.id]}function z(P){for(const Z in a){const se=a[Z];if(se[P.id]===void 0)continue;const le=se[P.id];for(const ve in le)g(le[ve].object),delete le[ve];delete se[P.id]}}function J(){L(),f=!0,c!==l&&(c=l,m(c.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:J,resetDefaultState:L,dispose:W,releaseStatesOfGeometry:X,releaseStatesOfProgram:z,initAttributes:T,enableAttribute:y,disableUnusedAttributes:C}}function mA(s,e,i){let a;function l(m){a=m}function c(m,g){s.drawArrays(a,m,g),i.update(g,a,1)}function f(m,g,v){v!==0&&(s.drawArraysInstanced(a,m,g,v),i.update(g,a,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,g,0,v);let E=0;for(let b=0;b<v;b++)E+=g[b];i.update(E,a,1)}function p(m,g,v,x){if(v===0)return;const E=e.get("WEBGL_multi_draw");if(E===null)for(let b=0;b<m.length;b++)f(m[b],g[b],x[b]);else{E.multiDrawArraysInstancedWEBGL(a,m,0,g,0,x,0,v);let b=0;for(let T=0;T<v;T++)b+=g[T]*x[T];i.update(b,a,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function gA(s,e,i,a){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(z){return!(z!==wi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const J=z===ll&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Gi&&a.convert(z)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==ma&&!J)}function p(z){if(z==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),E=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),O=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=b>0,X=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:x,maxTextures:E,maxVertexTextures:b,maxTextureSize:T,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:C,maxVaryings:N,maxFragmentUniforms:O,vertexTextures:W,maxSamples:X}}function vA(s){const e=this;let i=null,a=0,l=!1,c=!1;const f=new Rr,d=new vt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,x){const E=v.length!==0||x||a!==0||l;return l=x,a=v.length,E},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,x){i=g(v,x,0)},this.setState=function(v,x,E){const b=v.clippingPlanes,T=v.clipIntersection,y=v.clipShadows,_=s.get(v);if(!l||b===null||b.length===0||c&&!y)c?g(null):m();else{const C=c?0:a,N=C*4;let O=_.clippingState||null;p.value=O,O=g(b,x,N,E);for(let W=0;W!==N;++W)O[W]=i[W];_.clippingState=O,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function g(v,x,E,b){const T=v!==null?v.length:0;let y=null;if(T!==0){if(y=p.value,b!==!0||y===null){const _=E+T*4,C=x.matrixWorldInverse;d.getNormalMatrix(C),(y===null||y.length<_)&&(y=new Float32Array(_));for(let N=0,O=E;N!==T;++N,O+=4)f.copy(v[N]).applyMatrix4(C,d),f.normal.toArray(y,O),y[O+3]=f.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function _A(s){let e=new WeakMap;function i(f,d){return d===Eh?f.mapping=Gs:d===bh&&(f.mapping=Vs),f}function a(f){if(f&&f.isTexture){const d=f.mapping;if(d===Eh||d===bh)if(e.has(f)){const p=e.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new yb(p.height);return m.fromEquirectangularTexture(s,f),e.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:a,dispose:c}}const Os=4,Wv=[.125,.215,.35,.446,.526,.582],Nr=20,ih=new ox,Xv=new Dt;let ah=null,rh=0,sh=0,oh=!1;const Cr=(1+Math.sqrt(5))/2,Us=1/Cr,jv=[new me(-Cr,Us,0),new me(Cr,Us,0),new me(-Us,0,Cr),new me(Us,0,Cr),new me(0,Cr,-Us),new me(0,Cr,Us),new me(-1,1,-1),new me(1,1,-1),new me(-1,1,1),new me(1,1,1)],xA=new me;class qv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,a=.1,l=100,c={}){const{size:f=256,position:d=xA}=c;ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,a,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ah,rh,sh),this._renderer.xr.enabled=oh,e.scissorTest=!1,qc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Gs||e.mapping===Vs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ah=this._renderer.getRenderTarget(),rh=this._renderer.getActiveCubeFace(),sh=this._renderer.getActiveMipmapLevel(),oh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=i||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,a={magFilter:zi,minFilter:zi,generateMipmaps:!1,type:ll,format:wi,colorSpace:ks,depthBuffer:!1},l=Yv(e,i,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yv(e,i,a);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yA(c)),this._blurMaterial=SA(c,e,i)}return l}_compileMaterial(e){const i=new oi(this._lodPlanes[0],e);this._renderer.compile(i,ih)}_sceneToCubeUV(e,i,a,l,c){const p=new ri(90,1,i,a),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,x=v.autoClear,E=v.toneMapping;v.getClearColor(Xv),v.toneMapping=er,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null));const T=new K_({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),y=new oi(new dl,T);let _=!1;const C=e.background;C?C.isColor&&(T.color.copy(C),e.background=null,_=!0):(T.color.copy(Xv),_=!0);for(let N=0;N<6;N++){const O=N%3;O===0?(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[N],c.y,c.z)):O===1?(p.up.set(0,0,m[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[N],c.z)):(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[N]));const W=this._cubeSize;qc(l,O*W,N>2?W:0,W,W),v.setRenderTarget(l),_&&v.render(y,p),v.render(e,p)}y.geometry.dispose(),y.material.dispose(),v.toneMapping=E,v.autoClear=x,e.background=C}_textureToCubeUV(e,i){const a=this._renderer,l=e.mapping===Gs||e.mapping===Vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zv());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new oi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;qc(i,0,0,3*p,2*p),a.setRenderTarget(i),a.render(f,ih)}_applyPMREM(e){const i=this._renderer,a=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=jv[(l-c-1)%jv.length];this._blur(e,c-1,c,f,d)}i.autoClear=a}_blur(e,i,a,l,c){const f=this._pingPongRenderTarget;this._halfBlur(e,f,i,a,l,"latitudinal",c),this._halfBlur(f,e,a,a,l,"longitudinal",c)}_halfBlur(e,i,a,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new oi(this._lodPlanes[l],m),x=m.uniforms,E=this._sizeLods[a]-1,b=isFinite(c)?Math.PI/(2*E):2*Math.PI/(2*Nr-1),T=c/b,y=isFinite(c)?1+Math.floor(g*T):Nr;y>Nr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Nr}`);const _=[];let C=0;for(let z=0;z<Nr;++z){const J=z/T,L=Math.exp(-J*J/2);_.push(L),z===0?C+=L:z<y&&(C+=2*L)}for(let z=0;z<_.length;z++)_[z]=_[z]/C;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=_,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-a;const O=this._sizeLods[l],W=3*O*(l>N-Os?l-N+Os:0),X=4*(this._cubeSize-O);qc(i,W,X,3*O,2*O),p.setRenderTarget(i),p.render(v,ih)}}function yA(s){const e=[],i=[],a=[];let l=s;const c=s-Os+1+Wv.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>s-Os?p=Wv[f-s+Os-1]:f===0&&(p=0),a.push(p);const m=1/(d-2),g=-m,v=1+m,x=[g,g,v,g,v,v,g,g,v,v,g,v],E=6,b=6,T=3,y=2,_=1,C=new Float32Array(T*b*E),N=new Float32Array(y*b*E),O=new Float32Array(_*b*E);for(let X=0;X<E;X++){const z=X%3*2/3-1,J=X>2?0:-1,L=[z,J,0,z+2/3,J,0,z+2/3,J+1,0,z,J,0,z+2/3,J+1,0,z,J+1,0];C.set(L,T*b*X),N.set(x,y*b*X);const P=[X,X,X,X,X,X];O.set(P,_*b*X)}const W=new Ci;W.setAttribute("position",new Yn(C,T)),W.setAttribute("uv",new Yn(N,y)),W.setAttribute("faceIndex",new Yn(O,_)),e.push(W),l>Os&&l--}return{lodPlanes:e,sizeLods:i,sigmas:a}}function Yv(s,e,i){const a=new Ir(s,e,i);return a.texture.mapping=fu,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function qc(s,e,i,a,l){s.viewport.set(e,i,a,l),s.scissor.set(e,i,a,l)}function SA(s,e,i){const a=new Float32Array(Nr),l=new me(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:Nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:yp(),fragmentShader:`

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
	`}function MA(s){let e=new WeakMap,i=null;function a(d){if(d&&d.isTexture){const p=d.mapping,m=p===Eh||p===bh,g=p===Gs||p===Vs;if(m||g){let v=e.get(d);const x=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new qv(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const E=d.image;return m&&E&&E.height>0||g&&E&&l(E)?(i===null&&(i=new qv(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function f(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:a,dispose:f}}function EA(s){const e={};function i(a){if(e[a]!==void 0)return e[a];let l;switch(a){case"WEBGL_depth_texture":l=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=s.getExtension(a)}return e[a]=l,l}return{has:function(a){return i(a)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(a){const l=i(a);return l===null&&il("THREE.WebGLRenderer: "+a+" extension not supported."),l}}}function bA(s,e,i,a){const l={},c=new WeakMap;function f(v){const x=v.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const E=c.get(x);E&&(e.remove(E),c.delete(x)),a.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(v,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function p(v){const x=v.attributes;for(const E in x)e.update(x[E],s.ARRAY_BUFFER)}function m(v){const x=[],E=v.index,b=v.attributes.position;let T=0;if(E!==null){const C=E.array;T=E.version;for(let N=0,O=C.length;N<O;N+=3){const W=C[N+0],X=C[N+1],z=C[N+2];x.push(W,X,X,z,z,W)}}else if(b!==void 0){const C=b.array;T=b.version;for(let N=0,O=C.length/3-1;N<O;N+=3){const W=N+0,X=N+1,z=N+2;x.push(W,X,X,z,z,W)}}else return;const y=new(X_(x)?J_:Q_)(x,1);y.version=T;const _=c.get(v);_&&e.remove(_),c.set(v,y)}function g(v){const x=c.get(v);if(x){const E=v.index;E!==null&&x.version<E.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function TA(s,e,i){let a;function l(x){a=x}let c,f;function d(x){c=x.type,f=x.bytesPerElement}function p(x,E){s.drawElements(a,E,c,x*f),i.update(E,a,1)}function m(x,E,b){b!==0&&(s.drawElementsInstanced(a,E,c,x*f,b),i.update(E,a,b))}function g(x,E,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,E,0,c,x,0,b);let y=0;for(let _=0;_<b;_++)y+=E[_];i.update(y,a,1)}function v(x,E,b,T){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<x.length;_++)m(x[_]/f,E[_],T[_]);else{y.multiDrawElementsInstancedWEBGL(a,E,0,c,x,0,T,0,b);let _=0;for(let C=0;C<b;C++)_+=E[C]*T[C];i.update(_,a,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function AA(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function a(c,f,d){switch(i.calls++,f){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:a}}function wA(s,e,i){const a=new WeakMap,l=new rn;function c(f,d,p){const m=f.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let x=a.get(d);if(x===void 0||x.count!==v){let P=function(){J.dispose(),a.delete(d),d.removeEventListener("dispose",P)};var E=P;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],C=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let O=0;b===!0&&(O=1),T===!0&&(O=2),y===!0&&(O=3);let W=d.attributes.position.count*O,X=1;W>e.maxTextureSize&&(X=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const z=new Float32Array(W*X*4*v),J=new j_(z,W,X,v);J.type=ma,J.needsUpdate=!0;const L=O*4;for(let Z=0;Z<v;Z++){const se=_[Z],le=C[Z],ve=N[Z],oe=W*X*4*Z;for(let B=0;B<se.count;B++){const $=B*L;b===!0&&(l.fromBufferAttribute(se,B),z[oe+$+0]=l.x,z[oe+$+1]=l.y,z[oe+$+2]=l.z,z[oe+$+3]=0),T===!0&&(l.fromBufferAttribute(le,B),z[oe+$+4]=l.x,z[oe+$+5]=l.y,z[oe+$+6]=l.z,z[oe+$+7]=0),y===!0&&(l.fromBufferAttribute(ve,B),z[oe+$+8]=l.x,z[oe+$+9]=l.y,z[oe+$+10]=l.z,z[oe+$+11]=ve.itemSize===4?l.w:1)}}x={count:v,texture:J,size:new It(W,X)},a.set(d,x),d.addEventListener("dispose",P)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",f.morphTexture,i);else{let b=0;for(let y=0;y<m.length;y++)b+=m[y];const T=d.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:c}}function RA(s,e,i,a){let l=new WeakMap;function c(p){const m=a.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return v}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const fx=new qn,Qv=new ax(1,1),dx=new j_,hx=new ib,px=new tx,Jv=[],$v=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function Zs(s,e,i){const a=s[0];if(a<=0||a>0)return s;const l=e*i;let c=Jv[l];if(c===void 0&&(c=new Float32Array(l),Jv[l]=c),e!==0){a.toArray(c,0);for(let f=1,d=0;f!==e;++f)d+=i,s[f].toArray(c,d)}return c}function _n(s,e){if(s.length!==e.length)return!1;for(let i=0,a=s.length;i<a;i++)if(s[i]!==e[i])return!1;return!0}function xn(s,e){for(let i=0,a=e.length;i<a;i++)s[i]=e[i]}function mu(s,e){let i=$v[e];i===void 0&&(i=new Int32Array(e),$v[e]=i);for(let a=0;a!==e;++a)i[a]=s.allocateTextureUnit();return i}function CA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function DA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2fv(this.addr,e),xn(i,e)}}function NA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;s.uniform3fv(this.addr,e),xn(i,e)}}function UA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4fv(this.addr,e),xn(i,e)}}function LA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_n(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,a))return;n_.set(a),s.uniformMatrix2fv(this.addr,!1,n_),xn(i,a)}}function OA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_n(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,a))return;t_.set(a),s.uniformMatrix3fv(this.addr,!1,t_),xn(i,a)}}function PA(s,e){const i=this.cache,a=e.elements;if(a===void 0){if(_n(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(_n(i,a))return;e_.set(a),s.uniformMatrix4fv(this.addr,!1,e_),xn(i,a)}}function IA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function zA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2iv(this.addr,e),xn(i,e)}}function BA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3iv(this.addr,e),xn(i,e)}}function FA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4iv(this.addr,e),xn(i,e)}}function HA(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function GA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;s.uniform2uiv(this.addr,e),xn(i,e)}}function VA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;s.uniform3uiv(this.addr,e),xn(i,e)}}function kA(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;s.uniform4uiv(this.addr,e),xn(i,e)}}function WA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(Qv.compareFunction=W_,c=Qv):c=fx,i.setTexture2D(e||c,l)}function XA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture3D(e||hx,l)}function jA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTextureCube(e||px,l)}function qA(s,e,i){const a=this.cache,l=i.allocateTextureUnit();a[0]!==l&&(s.uniform1i(this.addr,l),a[0]=l),i.setTexture2DArray(e||dx,l)}function YA(s){switch(s){case 5126:return CA;case 35664:return DA;case 35665:return NA;case 35666:return UA;case 35674:return LA;case 35675:return OA;case 35676:return PA;case 5124:case 35670:return IA;case 35667:case 35671:return zA;case 35668:case 35672:return BA;case 35669:case 35673:return FA;case 5125:return HA;case 36294:return GA;case 36295:return VA;case 36296:return kA;case 35678:case 36198:case 36298:case 36306:case 35682:return WA;case 35679:case 36299:case 36307:return XA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return qA}}function ZA(s,e){s.uniform1fv(this.addr,e)}function KA(s,e){const i=Zs(e,this.size,2);s.uniform2fv(this.addr,i)}function QA(s,e){const i=Zs(e,this.size,3);s.uniform3fv(this.addr,i)}function JA(s,e){const i=Zs(e,this.size,4);s.uniform4fv(this.addr,i)}function $A(s,e){const i=Zs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function ew(s,e){const i=Zs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function tw(s,e){const i=Zs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function nw(s,e){s.uniform1iv(this.addr,e)}function iw(s,e){s.uniform2iv(this.addr,e)}function aw(s,e){s.uniform3iv(this.addr,e)}function rw(s,e){s.uniform4iv(this.addr,e)}function sw(s,e){s.uniform1uiv(this.addr,e)}function ow(s,e){s.uniform2uiv(this.addr,e)}function lw(s,e){s.uniform3uiv(this.addr,e)}function cw(s,e){s.uniform4uiv(this.addr,e)}function uw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTexture2D(e[f]||fx,c[f])}function fw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTexture3D(e[f]||hx,c[f])}function dw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTextureCube(e[f]||px,c[f])}function hw(s,e,i){const a=this.cache,l=e.length,c=mu(i,l);_n(a,c)||(s.uniform1iv(this.addr,c),xn(a,c));for(let f=0;f!==l;++f)i.setTexture2DArray(e[f]||dx,c[f])}function pw(s){switch(s){case 5126:return ZA;case 35664:return KA;case 35665:return QA;case 35666:return JA;case 35674:return $A;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return aw;case 35669:case 35673:return rw;case 5125:return sw;case 36294:return ow;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return hw}}class mw{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.setValue=YA(i.type)}}class gw{constructor(e,i,a){this.id=e,this.addr=a,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=pw(i.type)}}class vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,a){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(e,i[d.id],a)}}}const lh=/(\w+)(\])?(\[|\.)?/g;function i_(s,e){s.seq.push(e),s.map[e.id]=e}function _w(s,e,i){const a=s.name,l=a.length;for(lh.lastIndex=0;;){const c=lh.exec(a),f=lh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){i_(i,m===void 0?new mw(d,s,e):new gw(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new vw(d),i_(i,v)),i=v}}}class nu{constructor(e,i){this.seq=[],this.map={};const a=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<a;++l){const c=e.getActiveUniform(i,l),f=e.getUniformLocation(i,c.name);_w(c,f,this)}}setValue(e,i,a,l){const c=this.map[i];c!==void 0&&c.setValue(e,a,l)}setOptional(e,i,a){const l=i[a];l!==void 0&&this.setValue(e,a,l)}static upload(e,i,a,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=a[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const a=[];for(let l=0,c=e.length;l!==c;++l){const f=e[l];f.id in i&&a.push(f)}return a}}function a_(s,e,i){const a=s.createShader(e);return s.shaderSource(a,i),s.compileShader(a),a}const xw=37297;let yw=0;function Sw(s,e){const i=s.split(`
`),a=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let f=l;f<c;f++){const d=f+1;a.push(`${d===e?">":" "} ${d}: ${i[f]}`)}return a.join(`
`)}const r_=new vt;function Mw(s){Pt._getMatrix(r_,Pt.workingColorSpace,s);const e=`mat3( ${r_.elements.map(i=>i.toFixed(4))} )`;switch(Pt.getTransfer(s)){case au:return[e,"LinearTransferOETF"];case jt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function s_(s,e,i){const a=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(a&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+Sw(s.getShaderSource(e),d)}else return c}function Ew(s,e){const i=Mw(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function bw(s,e){let i;switch(e){case NE:i="Linear";break;case UE:i="Reinhard";break;case LE:i="Cineon";break;case OE:i="ACESFilmic";break;case IE:i="AgX";break;case zE:i="Neutral";break;case PE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Yc=new me;function Tw(){Pt.getLuminanceCoefficients(Yc);const s=Yc.x.toFixed(4),e=Yc.y.toFixed(4),i=Yc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
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
#define LOW_PRECISION`),e}function Ow(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===U_?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===uE?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ha&&(e="SHADOWMAP_TYPE_VSM"),e}function Pw(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Gs:case Vs:e="ENVMAP_TYPE_CUBE";break;case fu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Iw(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Vs:e="ENVMAP_MODE_REFRACTION";break}return e}function zw(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case L_:e="ENVMAP_BLENDING_MULTIPLY";break;case CE:e="ENVMAP_BLENDING_MIX";break;case DE:e="ENVMAP_BLENDING_ADD";break}return e}function Bw(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:a,maxMip:i}}function Fw(s,e,i,a){const l=s.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=Ow(i),m=Pw(i),g=Iw(i),v=zw(i),x=Bw(i),E=Aw(i),b=ww(c),T=l.createProgram();let y,_,C=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Zo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Zo).join(`
`),_.length>0&&(_+=`
`)):(y=[u_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),_=[u_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==er?"#define TONE_MAPPING":"",i.toneMapping!==er?xt.tonemapping_pars_fragment:"",i.toneMapping!==er?bw("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,Ew("linearToOutputTexel",i.outputColorSpace),Tw(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Zo).join(`
`)),f=ip(f),f=o_(f,i),f=l_(f,i),d=ip(d),d=o_(d,i),d=l_(d,i),f=c_(f),d=c_(d),i.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,y=[E,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===Sv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=C+y+f,O=C+_+d,W=a_(l,l.VERTEX_SHADER,N),X=a_(l,l.FRAGMENT_SHADER,O);l.attachShader(T,W),l.attachShader(T,X),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function z(Z){if(s.debug.checkShaderErrors){const se=l.getProgramInfoLog(T)||"",le=l.getShaderInfoLog(W)||"",ve=l.getShaderInfoLog(X)||"",oe=se.trim(),B=le.trim(),$=ve.trim();let te=!0,k=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(te=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,T,W,X);else{const U=s_(l,W,"vertex"),M=s_(l,X,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+Z.name+`
Material Type: `+Z.type+`

Program Info Log: `+oe+`
`+U+`
`+M)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(B===""||$==="")&&(k=!1);k&&(Z.diagnostics={runnable:te,programLog:oe,vertexShader:{log:B,prefix:y},fragmentShader:{log:$,prefix:_}})}l.deleteShader(W),l.deleteShader(X),J=new nu(l,T),L=Rw(l,T)}let J;this.getUniforms=function(){return J===void 0&&z(this),J};let L;this.getAttributes=function(){return L===void 0&&z(this),L};let P=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=l.getProgramParameter(T,xw)),P},this.destroy=function(){a.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=W,this.fragmentShader=X,this}let Hw=0;class Gw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,a=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(a),f=this._getShaderCacheForMaterial(e);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const a of i)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let a=i.get(e);return a===void 0&&(a=new Set,i.set(e,a)),a}_getShaderStage(e){const i=this.shaderCache;let a=i.get(e);return a===void 0&&(a=new Vw(e),i.set(e,a)),a}}class Vw{constructor(e){this.id=Hw++,this.code=e,this.usedTimes=0}}function kw(s,e,i,a,l,c,f){const d=new Y_,p=new Gw,m=new Set,g=[],v=l.logarithmicDepthBuffer,x=l.vertexTextures;let E=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(L){return m.add(L),L===0?"uv":`uv${L}`}function y(L,P,Z,se,le){const ve=se.fog,oe=le.geometry,B=L.isMeshStandardMaterial?se.environment:null,$=(L.isMeshStandardMaterial?i:e).get(L.envMap||B),te=$&&$.mapping===fu?$.image.height:null,k=b[L.type];L.precision!==null&&(E=l.getMaxPrecision(L.precision),E!==L.precision&&console.warn("THREE.WebGLProgram.getParameters:",L.precision,"not supported, using",E,"instead."));const U=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,M=U!==void 0?U.length:0;let w=0;oe.morphAttributes.position!==void 0&&(w=1),oe.morphAttributes.normal!==void 0&&(w=2),oe.morphAttributes.color!==void 0&&(w=3);let G,ee,Q,H;if(k){const Nt=Ii[k];G=Nt.vertexShader,ee=Nt.fragmentShader}else G=L.vertexShader,ee=L.fragmentShader,p.update(L),Q=p.getVertexShaderID(L),H=p.getFragmentShaderID(L);const Y=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Te=le.isInstancedMesh===!0,Ne=le.isBatchedMesh===!0,ke=!!L.map,lt=!!L.matcap,V=!!$,Ge=!!L.aoMap,We=!!L.lightMap,Xe=!!L.bumpMap,Pe=!!L.normalMap,_t=!!L.displacementMap,Fe=!!L.emissiveMap,st=!!L.metalnessMap,$t=!!L.roughnessMap,Kt=L.anisotropy>0,F=L.clearcoat>0,A=L.dispersion>0,ce=L.iridescence>0,Se=L.sheen>0,we=L.transmission>0,xe=Kt&&!!L.anisotropyMap,et=F&&!!L.clearcoatMap,Ue=F&&!!L.clearcoatNormalMap,Ke=F&&!!L.clearcoatRoughnessMap,tt=ce&&!!L.iridescenceMap,Ce=ce&&!!L.iridescenceThicknessMap,Le=Se&&!!L.sheenColorMap,it=Se&&!!L.sheenRoughnessMap,Ve=!!L.specularMap,Ie=!!L.specularColorMap,pt=!!L.specularIntensityMap,ne=we&&!!L.transmissionMap,De=we&&!!L.thicknessMap,Oe=!!L.gradientMap,je=!!L.alphaMap,Re=L.alphaTest>0,be=!!L.alphaHash,Ye=!!L.extensions;let dt=er;L.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(dt=s.toneMapping);const Ht={shaderID:k,shaderType:L.type,shaderName:L.name,vertexShader:G,fragmentShader:ee,defines:L.defines,customVertexShaderID:Q,customFragmentShaderID:H,isRawShaderMaterial:L.isRawShaderMaterial===!0,glslVersion:L.glslVersion,precision:E,batching:Ne,batchingColor:Ne&&le._colorsTexture!==null,instancing:Te,instancingColor:Te&&le.instanceColor!==null,instancingMorph:Te&&le.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Y===null?s.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:ks,alphaToCoverage:!!L.alphaToCoverage,map:ke,matcap:lt,envMap:V,envMapMode:V&&$.mapping,envMapCubeUVHeight:te,aoMap:Ge,lightMap:We,bumpMap:Xe,normalMap:Pe,displacementMap:x&&_t,emissiveMap:Fe,normalMapObjectSpace:Pe&&L.normalMapType===GE,normalMapTangentSpace:Pe&&L.normalMapType===k_,metalnessMap:st,roughnessMap:$t,anisotropy:Kt,anisotropyMap:xe,clearcoat:F,clearcoatMap:et,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Ke,dispersion:A,iridescence:ce,iridescenceMap:tt,iridescenceThicknessMap:Ce,sheen:Se,sheenColorMap:Le,sheenRoughnessMap:it,specularMap:Ve,specularColorMap:Ie,specularIntensityMap:pt,transmission:we,transmissionMap:ne,thicknessMap:De,gradientMap:Oe,opaque:L.transparent===!1&&L.blending===Is&&L.alphaToCoverage===!1,alphaMap:je,alphaTest:Re,alphaHash:be,combine:L.combine,mapUv:ke&&T(L.map.channel),aoMapUv:Ge&&T(L.aoMap.channel),lightMapUv:We&&T(L.lightMap.channel),bumpMapUv:Xe&&T(L.bumpMap.channel),normalMapUv:Pe&&T(L.normalMap.channel),displacementMapUv:_t&&T(L.displacementMap.channel),emissiveMapUv:Fe&&T(L.emissiveMap.channel),metalnessMapUv:st&&T(L.metalnessMap.channel),roughnessMapUv:$t&&T(L.roughnessMap.channel),anisotropyMapUv:xe&&T(L.anisotropyMap.channel),clearcoatMapUv:et&&T(L.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&T(L.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ke&&T(L.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&T(L.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&T(L.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&T(L.sheenColorMap.channel),sheenRoughnessMapUv:it&&T(L.sheenRoughnessMap.channel),specularMapUv:Ve&&T(L.specularMap.channel),specularColorMapUv:Ie&&T(L.specularColorMap.channel),specularIntensityMapUv:pt&&T(L.specularIntensityMap.channel),transmissionMapUv:ne&&T(L.transmissionMap.channel),thicknessMapUv:De&&T(L.thicknessMap.channel),alphaMapUv:je&&T(L.alphaMap.channel),vertexTangents:!!oe.attributes.tangent&&(Pe||Kt),vertexColors:L.vertexColors,vertexAlphas:L.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,pointsUvs:le.isPoints===!0&&!!oe.attributes.uv&&(ke||je),fog:!!ve,useFog:L.fog===!0,fogExp2:!!ve&&ve.isFogExp2,flatShading:L.flatShading===!0&&L.wireframe===!1,sizeAttenuation:L.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:pe,skinning:le.isSkinnedMesh===!0,morphTargets:oe.morphAttributes.position!==void 0,morphNormals:oe.morphAttributes.normal!==void 0,morphColors:oe.morphAttributes.color!==void 0,morphTargetsCount:M,morphTextureStride:w,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:L.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:dt,decodeVideoTexture:ke&&L.map.isVideoTexture===!0&&Pt.getTransfer(L.map.colorSpace)===jt,decodeVideoTextureEmissive:Fe&&L.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(L.emissiveMap.colorSpace)===jt,premultipliedAlpha:L.premultipliedAlpha,doubleSided:L.side===pa,flipSided:L.side===jn,useDepthPacking:L.depthPacking>=0,depthPacking:L.depthPacking||0,index0AttributeName:L.index0AttributeName,extensionClipCullDistance:Ye&&L.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ye&&L.extensions.multiDraw===!0||Ne)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:L.customProgramCacheKey()};return Ht.vertexUv1s=m.has(1),Ht.vertexUv2s=m.has(2),Ht.vertexUv3s=m.has(3),m.clear(),Ht}function _(L){const P=[];if(L.shaderID?P.push(L.shaderID):(P.push(L.customVertexShaderID),P.push(L.customFragmentShaderID)),L.defines!==void 0)for(const Z in L.defines)P.push(Z),P.push(L.defines[Z]);return L.isRawShaderMaterial===!1&&(C(P,L),N(P,L),P.push(s.outputColorSpace)),P.push(L.customProgramCacheKey),P.join()}function C(L,P){L.push(P.precision),L.push(P.outputColorSpace),L.push(P.envMapMode),L.push(P.envMapCubeUVHeight),L.push(P.mapUv),L.push(P.alphaMapUv),L.push(P.lightMapUv),L.push(P.aoMapUv),L.push(P.bumpMapUv),L.push(P.normalMapUv),L.push(P.displacementMapUv),L.push(P.emissiveMapUv),L.push(P.metalnessMapUv),L.push(P.roughnessMapUv),L.push(P.anisotropyMapUv),L.push(P.clearcoatMapUv),L.push(P.clearcoatNormalMapUv),L.push(P.clearcoatRoughnessMapUv),L.push(P.iridescenceMapUv),L.push(P.iridescenceThicknessMapUv),L.push(P.sheenColorMapUv),L.push(P.sheenRoughnessMapUv),L.push(P.specularMapUv),L.push(P.specularColorMapUv),L.push(P.specularIntensityMapUv),L.push(P.transmissionMapUv),L.push(P.thicknessMapUv),L.push(P.combine),L.push(P.fogExp2),L.push(P.sizeAttenuation),L.push(P.morphTargetsCount),L.push(P.morphAttributeCount),L.push(P.numDirLights),L.push(P.numPointLights),L.push(P.numSpotLights),L.push(P.numSpotLightMaps),L.push(P.numHemiLights),L.push(P.numRectAreaLights),L.push(P.numDirLightShadows),L.push(P.numPointLightShadows),L.push(P.numSpotLightShadows),L.push(P.numSpotLightShadowsWithMaps),L.push(P.numLightProbes),L.push(P.shadowMapType),L.push(P.toneMapping),L.push(P.numClippingPlanes),L.push(P.numClipIntersection),L.push(P.depthPacking)}function N(L,P){d.disableAll(),P.supportsVertexTextures&&d.enable(0),P.instancing&&d.enable(1),P.instancingColor&&d.enable(2),P.instancingMorph&&d.enable(3),P.matcap&&d.enable(4),P.envMap&&d.enable(5),P.normalMapObjectSpace&&d.enable(6),P.normalMapTangentSpace&&d.enable(7),P.clearcoat&&d.enable(8),P.iridescence&&d.enable(9),P.alphaTest&&d.enable(10),P.vertexColors&&d.enable(11),P.vertexAlphas&&d.enable(12),P.vertexUv1s&&d.enable(13),P.vertexUv2s&&d.enable(14),P.vertexUv3s&&d.enable(15),P.vertexTangents&&d.enable(16),P.anisotropy&&d.enable(17),P.alphaHash&&d.enable(18),P.batching&&d.enable(19),P.dispersion&&d.enable(20),P.batchingColor&&d.enable(21),P.gradientMap&&d.enable(22),L.push(d.mask),d.disableAll(),P.fog&&d.enable(0),P.useFog&&d.enable(1),P.flatShading&&d.enable(2),P.logarithmicDepthBuffer&&d.enable(3),P.reversedDepthBuffer&&d.enable(4),P.skinning&&d.enable(5),P.morphTargets&&d.enable(6),P.morphNormals&&d.enable(7),P.morphColors&&d.enable(8),P.premultipliedAlpha&&d.enable(9),P.shadowMapEnabled&&d.enable(10),P.doubleSided&&d.enable(11),P.flipSided&&d.enable(12),P.useDepthPacking&&d.enable(13),P.dithering&&d.enable(14),P.transmission&&d.enable(15),P.sheen&&d.enable(16),P.opaque&&d.enable(17),P.pointsUvs&&d.enable(18),P.decodeVideoTexture&&d.enable(19),P.decodeVideoTextureEmissive&&d.enable(20),P.alphaToCoverage&&d.enable(21),L.push(d.mask)}function O(L){const P=b[L.type];let Z;if(P){const se=Ii[P];Z=gb.clone(se.uniforms)}else Z=L.uniforms;return Z}function W(L,P){let Z;for(let se=0,le=g.length;se<le;se++){const ve=g[se];if(ve.cacheKey===P){Z=ve,++Z.usedTimes;break}}return Z===void 0&&(Z=new Fw(s,P,L,c),g.push(Z)),Z}function X(L){if(--L.usedTimes===0){const P=g.indexOf(L);g[P]=g[g.length-1],g.pop(),L.destroy()}}function z(L){p.remove(L)}function J(){p.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:O,acquireProgram:W,releaseProgram:X,releaseShaderCache:z,programs:g,dispose:J}}function Ww(){let s=new WeakMap;function e(f){return s.has(f)}function i(f){let d=s.get(f);return d===void 0&&(d={},s.set(f,d)),d}function a(f){s.delete(f)}function l(f,d,p){s.get(f)[d]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:a,update:l,dispose:c}}function Xw(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function f_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function d_(){const s=[];let e=0;const i=[],a=[],l=[];function c(){e=0,i.length=0,a.length=0,l.length=0}function f(v,x,E,b,T,y){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:x,material:E,groupOrder:b,renderOrder:v.renderOrder,z:T,group:y},s[e]=_):(_.id=v.id,_.object=v,_.geometry=x,_.material=E,_.groupOrder=b,_.renderOrder=v.renderOrder,_.z=T,_.group=y),e++,_}function d(v,x,E,b,T,y){const _=f(v,x,E,b,T,y);E.transmission>0?a.push(_):E.transparent===!0?l.push(_):i.push(_)}function p(v,x,E,b,T,y){const _=f(v,x,E,b,T,y);E.transmission>0?a.unshift(_):E.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,x){i.length>1&&i.sort(v||Xw),a.length>1&&a.sort(x||f_),l.length>1&&l.sort(x||f_)}function g(){for(let v=e,x=s.length;v<x;v++){const E=s[v];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:i,transmissive:a,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function jw(){let s=new WeakMap;function e(a,l){const c=s.get(a);let f;return c===void 0?(f=new d_,s.set(a,[f])):l>=c.length?(f=new d_,c.push(f)):f=c[l],f}function i(){s=new WeakMap}return{get:e,dispose:i}}function qw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new me,color:new Dt};break;case"SpotLight":i={position:new me,direction:new me,color:new Dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new me,color:new Dt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new me,skyColor:new Dt,groundColor:new Dt};break;case"RectAreaLight":i={color:new Dt,position:new me,halfWidth:new me,halfHeight:new me};break}return s[e.id]=i,i}}}function Yw(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let Zw=0;function Kw(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Qw(s){const e=new qw,i=Yw(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)a.probe.push(new me);const l=new me,c=new sn,f=new sn;function d(m){let g=0,v=0,x=0;for(let L=0;L<9;L++)a.probe[L].set(0,0,0);let E=0,b=0,T=0,y=0,_=0,C=0,N=0,O=0,W=0,X=0,z=0;m.sort(Kw);for(let L=0,P=m.length;L<P;L++){const Z=m[L],se=Z.color,le=Z.intensity,ve=Z.distance,oe=Z.shadow&&Z.shadow.map?Z.shadow.map.texture:null;if(Z.isAmbientLight)g+=se.r*le,v+=se.g*le,x+=se.b*le;else if(Z.isLightProbe){for(let B=0;B<9;B++)a.probe[B].addScaledVector(Z.sh.coefficients[B],le);z++}else if(Z.isDirectionalLight){const B=e.get(Z);if(B.color.copy(Z.color).multiplyScalar(Z.intensity),Z.castShadow){const $=Z.shadow,te=i.get(Z);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,a.directionalShadow[E]=te,a.directionalShadowMap[E]=oe,a.directionalShadowMatrix[E]=Z.shadow.matrix,C++}a.directional[E]=B,E++}else if(Z.isSpotLight){const B=e.get(Z);B.position.setFromMatrixPosition(Z.matrixWorld),B.color.copy(se).multiplyScalar(le),B.distance=ve,B.coneCos=Math.cos(Z.angle),B.penumbraCos=Math.cos(Z.angle*(1-Z.penumbra)),B.decay=Z.decay,a.spot[T]=B;const $=Z.shadow;if(Z.map&&(a.spotLightMap[W]=Z.map,W++,$.updateMatrices(Z),Z.castShadow&&X++),a.spotLightMatrix[T]=$.matrix,Z.castShadow){const te=i.get(Z);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,a.spotShadow[T]=te,a.spotShadowMap[T]=oe,O++}T++}else if(Z.isRectAreaLight){const B=e.get(Z);B.color.copy(se).multiplyScalar(le),B.halfWidth.set(Z.width*.5,0,0),B.halfHeight.set(0,Z.height*.5,0),a.rectArea[y]=B,y++}else if(Z.isPointLight){const B=e.get(Z);if(B.color.copy(Z.color).multiplyScalar(Z.intensity),B.distance=Z.distance,B.decay=Z.decay,Z.castShadow){const $=Z.shadow,te=i.get(Z);te.shadowIntensity=$.intensity,te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,a.pointShadow[b]=te,a.pointShadowMap[b]=oe,a.pointShadowMatrix[b]=Z.shadow.matrix,N++}a.point[b]=B,b++}else if(Z.isHemisphereLight){const B=e.get(Z);B.skyColor.copy(Z.color).multiplyScalar(le),B.groundColor.copy(Z.groundColor).multiplyScalar(le),a.hemi[_]=B,_++}}y>0&&(s.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Be.LTC_FLOAT_1,a.rectAreaLTC2=Be.LTC_FLOAT_2):(a.rectAreaLTC1=Be.LTC_HALF_1,a.rectAreaLTC2=Be.LTC_HALF_2)),a.ambient[0]=g,a.ambient[1]=v,a.ambient[2]=x;const J=a.hash;(J.directionalLength!==E||J.pointLength!==b||J.spotLength!==T||J.rectAreaLength!==y||J.hemiLength!==_||J.numDirectionalShadows!==C||J.numPointShadows!==N||J.numSpotShadows!==O||J.numSpotMaps!==W||J.numLightProbes!==z)&&(a.directional.length=E,a.spot.length=T,a.rectArea.length=y,a.point.length=b,a.hemi.length=_,a.directionalShadow.length=C,a.directionalShadowMap.length=C,a.pointShadow.length=N,a.pointShadowMap.length=N,a.spotShadow.length=O,a.spotShadowMap.length=O,a.directionalShadowMatrix.length=C,a.pointShadowMatrix.length=N,a.spotLightMatrix.length=O+W-X,a.spotLightMap.length=W,a.numSpotLightShadowsWithMaps=X,a.numLightProbes=z,J.directionalLength=E,J.pointLength=b,J.spotLength=T,J.rectAreaLength=y,J.hemiLength=_,J.numDirectionalShadows=C,J.numPointShadows=N,J.numSpotShadows=O,J.numSpotMaps=W,J.numLightProbes=z,a.version=Zw++)}function p(m,g){let v=0,x=0,E=0,b=0,T=0;const y=g.matrixWorldInverse;for(let _=0,C=m.length;_<C;_++){const N=m[_];if(N.isDirectionalLight){const O=a.directional[v];O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),v++}else if(N.isSpotLight){const O=a.spot[E];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),O.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),O.direction.sub(l),O.direction.transformDirection(y),E++}else if(N.isRectAreaLight){const O=a.rectArea[b];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),f.identity(),c.copy(N.matrixWorld),c.premultiply(y),f.extractRotation(c),O.halfWidth.set(N.width*.5,0,0),O.halfHeight.set(0,N.height*.5,0),O.halfWidth.applyMatrix4(f),O.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const O=a.point[x];O.position.setFromMatrixPosition(N.matrixWorld),O.position.applyMatrix4(y),x++}else if(N.isHemisphereLight){const O=a.hemi[T];O.direction.setFromMatrixPosition(N.matrixWorld),O.direction.transformDirection(y),T++}}}return{setup:d,setupView:p,state:a}}function h_(s){const e=new Qw(s),i=[],a=[];function l(g){m.camera=g,i.length=0,a.length=0}function c(g){i.push(g)}function f(g){a.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:a,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function Jw(s){let e=new WeakMap;function i(l,c=0){const f=e.get(l);let d;return f===void 0?(d=new h_(s),e.set(l,[d])):c>=f.length?(d=new h_(s),f.push(d)):d=f[c],d}function a(){e=new WeakMap}return{get:i,dispose:a}}const $w=`void main() {
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
}`;function tR(s,e,i){let a=new _p;const l=new It,c=new It,f=new rn,d=new Ab({depthPacking:HE}),p=new wb,m={},g=i.maxTextureSize,v={[tr]:jn,[jn]:tr,[pa]:pa},x=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:$w,fragmentShader:eR}),E=x.clone();E.defines.HORIZONTAL_PASS=1;const b=new Ci;b.setAttribute("position",new Yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new oi(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=U_;let _=this.type;this.render=function(X,z,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||X.length===0)return;const L=s.getRenderTarget(),P=s.getActiveCubeFace(),Z=s.getActiveMipmapLevel(),se=s.state;se.setBlending($a),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const le=_!==ha&&this.type===ha,ve=_===ha&&this.type!==ha;for(let oe=0,B=X.length;oe<B;oe++){const $=X[oe],te=$.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;l.copy(te.mapSize);const k=te.getFrameExtents();if(l.multiply(k),c.copy(te.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/k.x),l.x=c.x*k.x,te.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/k.y),l.y=c.y*k.y,te.mapSize.y=c.y)),te.map===null||le===!0||ve===!0){const M=this.type!==ha?{minFilter:Ri,magFilter:Ri}:{};te.map!==null&&te.map.dispose(),te.map=new Ir(l.x,l.y,M),te.map.texture.name=$.name+".shadowMap",te.camera.updateProjectionMatrix()}s.setRenderTarget(te.map),s.clear();const U=te.getViewportCount();for(let M=0;M<U;M++){const w=te.getViewport(M);f.set(c.x*w.x,c.y*w.y,c.x*w.z,c.y*w.w),se.viewport(f),te.updateMatrices($,M),a=te.getFrustum(),O(z,J,te.camera,$,this.type)}te.isPointLightShadow!==!0&&this.type===ha&&C(te,J),te.needsUpdate=!1}_=this.type,y.needsUpdate=!1,s.setRenderTarget(L,P,Z)};function C(X,z){const J=e.update(T);x.defines.VSM_SAMPLES!==X.blurSamples&&(x.defines.VSM_SAMPLES=X.blurSamples,E.defines.VSM_SAMPLES=X.blurSamples,x.needsUpdate=!0,E.needsUpdate=!0),X.mapPass===null&&(X.mapPass=new Ir(l.x,l.y)),x.uniforms.shadow_pass.value=X.map.texture,x.uniforms.resolution.value=X.mapSize,x.uniforms.radius.value=X.radius,s.setRenderTarget(X.mapPass),s.clear(),s.renderBufferDirect(z,null,J,x,T,null),E.uniforms.shadow_pass.value=X.mapPass.texture,E.uniforms.resolution.value=X.mapSize,E.uniforms.radius.value=X.radius,s.setRenderTarget(X.map),s.clear(),s.renderBufferDirect(z,null,J,E,T,null)}function N(X,z,J,L){let P=null;const Z=J.isPointLight===!0?X.customDistanceMaterial:X.customDepthMaterial;if(Z!==void 0)P=Z;else if(P=J.isPointLight===!0?p:d,s.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const se=P.uuid,le=z.uuid;let ve=m[se];ve===void 0&&(ve={},m[se]=ve);let oe=ve[le];oe===void 0&&(oe=P.clone(),ve[le]=oe,z.addEventListener("dispose",W)),P=oe}if(P.visible=z.visible,P.wireframe=z.wireframe,L===ha?P.side=z.shadowSide!==null?z.shadowSide:z.side:P.side=z.shadowSide!==null?z.shadowSide:v[z.side],P.alphaMap=z.alphaMap,P.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,P.map=z.map,P.clipShadows=z.clipShadows,P.clippingPlanes=z.clippingPlanes,P.clipIntersection=z.clipIntersection,P.displacementMap=z.displacementMap,P.displacementScale=z.displacementScale,P.displacementBias=z.displacementBias,P.wireframeLinewidth=z.wireframeLinewidth,P.linewidth=z.linewidth,J.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const se=s.properties.get(P);se.light=J}return P}function O(X,z,J,L,P){if(X.visible===!1)return;if(X.layers.test(z.layers)&&(X.isMesh||X.isLine||X.isPoints)&&(X.castShadow||X.receiveShadow&&P===ha)&&(!X.frustumCulled||a.intersectsObject(X))){X.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,X.matrixWorld);const le=e.update(X),ve=X.material;if(Array.isArray(ve)){const oe=le.groups;for(let B=0,$=oe.length;B<$;B++){const te=oe[B],k=ve[te.materialIndex];if(k&&k.visible){const U=N(X,k,L,P);X.onBeforeShadow(s,X,z,J,le,U,te),s.renderBufferDirect(J,null,le,U,X,te),X.onAfterShadow(s,X,z,J,le,U,te)}}}else if(ve.visible){const oe=N(X,ve,L,P);X.onBeforeShadow(s,X,z,J,le,oe,null),s.renderBufferDirect(J,null,le,oe,X,null),X.onAfterShadow(s,X,z,J,le,oe,null)}}const se=X.children;for(let le=0,ve=se.length;le<ve;le++)O(se[le],z,J,L,P)}function W(X){X.target.removeEventListener("dispose",W);for(const J in m){const L=m[J],P=X.target.uuid;P in L&&(L[P].dispose(),delete L[P])}}}const nR={[gh]:vh,[_h]:Sh,[xh]:Mh,[Hs]:yh,[vh]:gh,[Sh]:_h,[Mh]:xh,[yh]:Hs};function iR(s,e){function i(){let ne=!1;const De=new rn;let Oe=null;const je=new rn(0,0,0,0);return{setMask:function(Re){Oe!==Re&&!ne&&(s.colorMask(Re,Re,Re,Re),Oe=Re)},setLocked:function(Re){ne=Re},setClear:function(Re,be,Ye,dt,Ht){Ht===!0&&(Re*=dt,be*=dt,Ye*=dt),De.set(Re,be,Ye,dt),je.equals(De)===!1&&(s.clearColor(Re,be,Ye,dt),je.copy(De))},reset:function(){ne=!1,Oe=null,je.set(-1,0,0,0)}}}function a(){let ne=!1,De=!1,Oe=null,je=null,Re=null;return{setReversed:function(be){if(De!==be){const Ye=e.get("EXT_clip_control");be?Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.ZERO_TO_ONE_EXT):Ye.clipControlEXT(Ye.LOWER_LEFT_EXT,Ye.NEGATIVE_ONE_TO_ONE_EXT),De=be;const dt=Re;Re=null,this.setClear(dt)}},getReversed:function(){return De},setTest:function(be){be?Y(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(be){Oe!==be&&!ne&&(s.depthMask(be),Oe=be)},setFunc:function(be){if(De&&(be=nR[be]),je!==be){switch(be){case gh:s.depthFunc(s.NEVER);break;case vh:s.depthFunc(s.ALWAYS);break;case _h:s.depthFunc(s.LESS);break;case Hs:s.depthFunc(s.LEQUAL);break;case xh:s.depthFunc(s.EQUAL);break;case yh:s.depthFunc(s.GEQUAL);break;case Sh:s.depthFunc(s.GREATER);break;case Mh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}je=be}},setLocked:function(be){ne=be},setClear:function(be){Re!==be&&(De&&(be=1-be),s.clearDepth(be),Re=be)},reset:function(){ne=!1,Oe=null,je=null,Re=null,De=!1}}}function l(){let ne=!1,De=null,Oe=null,je=null,Re=null,be=null,Ye=null,dt=null,Ht=null;return{setTest:function(Nt){ne||(Nt?Y(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(Nt){De!==Nt&&!ne&&(s.stencilMask(Nt),De=Nt)},setFunc:function(Nt,On,li){(Oe!==Nt||je!==On||Re!==li)&&(s.stencilFunc(Nt,On,li),Oe=Nt,je=On,Re=li)},setOp:function(Nt,On,li){(be!==Nt||Ye!==On||dt!==li)&&(s.stencilOp(Nt,On,li),be=Nt,Ye=On,dt=li)},setLocked:function(Nt){ne=Nt},setClear:function(Nt){Ht!==Nt&&(s.clearStencil(Nt),Ht=Nt)},reset:function(){ne=!1,De=null,Oe=null,je=null,Re=null,be=null,Ye=null,dt=null,Ht=null}}}const c=new i,f=new a,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},x=new WeakMap,E=[],b=null,T=!1,y=null,_=null,C=null,N=null,O=null,W=null,X=null,z=new Dt(0,0,0),J=0,L=!1,P=null,Z=null,se=null,le=null,ve=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,$=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(te)[1]),B=$>=1):te.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),B=$>=2);let k=null,U={};const M=s.getParameter(s.SCISSOR_BOX),w=s.getParameter(s.VIEWPORT),G=new rn().fromArray(M),ee=new rn().fromArray(w);function Q(ne,De,Oe,je){const Re=new Uint8Array(4),be=s.createTexture();s.bindTexture(ne,be),s.texParameteri(ne,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(ne,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<Oe;Ye++)ne===s.TEXTURE_3D||ne===s.TEXTURE_2D_ARRAY?s.texImage3D(De,0,s.RGBA,1,1,je,0,s.RGBA,s.UNSIGNED_BYTE,Re):s.texImage2D(De+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Re);return be}const H={};H[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),H[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),H[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),H[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),Y(s.DEPTH_TEST),f.setFunc(Hs),Xe(!1),Pe(gv),Y(s.CULL_FACE),Ge($a);function Y(ne){g[ne]!==!0&&(s.enable(ne),g[ne]=!0)}function pe(ne){g[ne]!==!1&&(s.disable(ne),g[ne]=!1)}function Te(ne,De){return v[ne]!==De?(s.bindFramebuffer(ne,De),v[ne]=De,ne===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=De),ne===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=De),!0):!1}function Ne(ne,De){let Oe=E,je=!1;if(ne){Oe=x.get(De),Oe===void 0&&(Oe=[],x.set(De,Oe));const Re=ne.textures;if(Oe.length!==Re.length||Oe[0]!==s.COLOR_ATTACHMENT0){for(let be=0,Ye=Re.length;be<Ye;be++)Oe[be]=s.COLOR_ATTACHMENT0+be;Oe.length=Re.length,je=!0}}else Oe[0]!==s.BACK&&(Oe[0]=s.BACK,je=!0);je&&s.drawBuffers(Oe)}function ke(ne){return b!==ne?(s.useProgram(ne),b=ne,!0):!1}const lt={[Dr]:s.FUNC_ADD,[dE]:s.FUNC_SUBTRACT,[hE]:s.FUNC_REVERSE_SUBTRACT};lt[pE]=s.MIN,lt[mE]=s.MAX;const V={[gE]:s.ZERO,[vE]:s.ONE,[_E]:s.SRC_COLOR,[ph]:s.SRC_ALPHA,[bE]:s.SRC_ALPHA_SATURATE,[ME]:s.DST_COLOR,[yE]:s.DST_ALPHA,[xE]:s.ONE_MINUS_SRC_COLOR,[mh]:s.ONE_MINUS_SRC_ALPHA,[EE]:s.ONE_MINUS_DST_COLOR,[SE]:s.ONE_MINUS_DST_ALPHA,[TE]:s.CONSTANT_COLOR,[AE]:s.ONE_MINUS_CONSTANT_COLOR,[wE]:s.CONSTANT_ALPHA,[RE]:s.ONE_MINUS_CONSTANT_ALPHA};function Ge(ne,De,Oe,je,Re,be,Ye,dt,Ht,Nt){if(ne===$a){T===!0&&(pe(s.BLEND),T=!1);return}if(T===!1&&(Y(s.BLEND),T=!0),ne!==fE){if(ne!==y||Nt!==L){if((_!==Dr||O!==Dr)&&(s.blendEquation(s.FUNC_ADD),_=Dr,O=Dr),Nt)switch(ne){case Is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFunc(s.ONE,s.ONE);break;case vv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _v:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",ne);break}else switch(ne){case Is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hh:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case vv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _v:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",ne);break}C=null,N=null,W=null,X=null,z.set(0,0,0),J=0,y=ne,L=Nt}return}Re=Re||De,be=be||Oe,Ye=Ye||je,(De!==_||Re!==O)&&(s.blendEquationSeparate(lt[De],lt[Re]),_=De,O=Re),(Oe!==C||je!==N||be!==W||Ye!==X)&&(s.blendFuncSeparate(V[Oe],V[je],V[be],V[Ye]),C=Oe,N=je,W=be,X=Ye),(dt.equals(z)===!1||Ht!==J)&&(s.blendColor(dt.r,dt.g,dt.b,Ht),z.copy(dt),J=Ht),y=ne,L=!1}function We(ne,De){ne.side===pa?pe(s.CULL_FACE):Y(s.CULL_FACE);let Oe=ne.side===jn;De&&(Oe=!Oe),Xe(Oe),ne.blending===Is&&ne.transparent===!1?Ge($a):Ge(ne.blending,ne.blendEquation,ne.blendSrc,ne.blendDst,ne.blendEquationAlpha,ne.blendSrcAlpha,ne.blendDstAlpha,ne.blendColor,ne.blendAlpha,ne.premultipliedAlpha),f.setFunc(ne.depthFunc),f.setTest(ne.depthTest),f.setMask(ne.depthWrite),c.setMask(ne.colorWrite);const je=ne.stencilWrite;d.setTest(je),je&&(d.setMask(ne.stencilWriteMask),d.setFunc(ne.stencilFunc,ne.stencilRef,ne.stencilFuncMask),d.setOp(ne.stencilFail,ne.stencilZFail,ne.stencilZPass)),Fe(ne.polygonOffset,ne.polygonOffsetFactor,ne.polygonOffsetUnits),ne.alphaToCoverage===!0?Y(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(ne){P!==ne&&(ne?s.frontFace(s.CW):s.frontFace(s.CCW),P=ne)}function Pe(ne){ne!==lE?(Y(s.CULL_FACE),ne!==Z&&(ne===gv?s.cullFace(s.BACK):ne===cE?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),Z=ne}function _t(ne){ne!==se&&(B&&s.lineWidth(ne),se=ne)}function Fe(ne,De,Oe){ne?(Y(s.POLYGON_OFFSET_FILL),(le!==De||ve!==Oe)&&(s.polygonOffset(De,Oe),le=De,ve=Oe)):pe(s.POLYGON_OFFSET_FILL)}function st(ne){ne?Y(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function $t(ne){ne===void 0&&(ne=s.TEXTURE0+oe-1),k!==ne&&(s.activeTexture(ne),k=ne)}function Kt(ne,De,Oe){Oe===void 0&&(k===null?Oe=s.TEXTURE0+oe-1:Oe=k);let je=U[Oe];je===void 0&&(je={type:void 0,texture:void 0},U[Oe]=je),(je.type!==ne||je.texture!==De)&&(k!==Oe&&(s.activeTexture(Oe),k=Oe),s.bindTexture(ne,De||H[ne]),je.type=ne,je.texture=De)}function F(){const ne=U[k];ne!==void 0&&ne.type!==void 0&&(s.bindTexture(ne.type,null),ne.type=void 0,ne.texture=void 0)}function A(){try{s.compressedTexImage2D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function ce(){try{s.compressedTexImage3D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Se(){try{s.texSubImage2D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function we(){try{s.texSubImage3D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function xe(){try{s.compressedTexSubImage2D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function et(){try{s.compressedTexSubImage3D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Ue(){try{s.texStorage2D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Ke(){try{s.texStorage3D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function tt(){try{s.texImage2D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Ce(){try{s.texImage3D(...arguments)}catch(ne){console.error("THREE.WebGLState:",ne)}}function Le(ne){G.equals(ne)===!1&&(s.scissor(ne.x,ne.y,ne.z,ne.w),G.copy(ne))}function it(ne){ee.equals(ne)===!1&&(s.viewport(ne.x,ne.y,ne.z,ne.w),ee.copy(ne))}function Ve(ne,De){let Oe=m.get(De);Oe===void 0&&(Oe=new WeakMap,m.set(De,Oe));let je=Oe.get(ne);je===void 0&&(je=s.getUniformBlockIndex(De,ne.name),Oe.set(ne,je))}function Ie(ne,De){const je=m.get(De).get(ne);p.get(De)!==je&&(s.uniformBlockBinding(De,je,ne.__bindingPointIndex),p.set(De,je))}function pt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),f.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},k=null,U={},v={},x=new WeakMap,E=[],b=null,T=!1,y=null,_=null,C=null,N=null,O=null,W=null,X=null,z=new Dt(0,0,0),J=0,L=!1,P=null,Z=null,se=null,le=null,ve=null,G.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:Y,disable:pe,bindFramebuffer:Te,drawBuffers:Ne,useProgram:ke,setBlending:Ge,setMaterial:We,setFlipSided:Xe,setCullFace:Pe,setLineWidth:_t,setPolygonOffset:Fe,setScissorTest:st,activeTexture:$t,bindTexture:Kt,unbindTexture:F,compressedTexImage2D:A,compressedTexImage3D:ce,texImage2D:tt,texImage3D:Ce,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:Ue,texStorage3D:Ke,texSubImage2D:Se,texSubImage3D:we,compressedTexSubImage2D:xe,compressedTexSubImage3D:et,scissor:Le,viewport:it,reset:pt}}function aR(s,e,i,a,l,c,f){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,g=new WeakMap;let v;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,A){return E?new OffscreenCanvas(F,A):su("canvas")}function T(F,A,ce){let Se=1;const we=Kt(F);if((we.width>ce||we.height>ce)&&(Se=ce/Math.max(we.width,we.height)),Se<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const xe=Math.floor(Se*we.width),et=Math.floor(Se*we.height);v===void 0&&(v=b(xe,et));const Ue=A?b(xe,et):v;return Ue.width=xe,Ue.height=et,Ue.getContext("2d").drawImage(F,0,0,xe,et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+xe+"x"+et+")."),Ue}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),F;return F}function y(F){return F.generateMipmaps}function _(F){s.generateMipmap(F)}function C(F){return F.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?s.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(F,A,ce,Se,we=!1){if(F!==null){if(s[F]!==void 0)return s[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let xe=A;if(A===s.RED&&(ce===s.FLOAT&&(xe=s.R32F),ce===s.HALF_FLOAT&&(xe=s.R16F),ce===s.UNSIGNED_BYTE&&(xe=s.R8)),A===s.RED_INTEGER&&(ce===s.UNSIGNED_BYTE&&(xe=s.R8UI),ce===s.UNSIGNED_SHORT&&(xe=s.R16UI),ce===s.UNSIGNED_INT&&(xe=s.R32UI),ce===s.BYTE&&(xe=s.R8I),ce===s.SHORT&&(xe=s.R16I),ce===s.INT&&(xe=s.R32I)),A===s.RG&&(ce===s.FLOAT&&(xe=s.RG32F),ce===s.HALF_FLOAT&&(xe=s.RG16F),ce===s.UNSIGNED_BYTE&&(xe=s.RG8)),A===s.RG_INTEGER&&(ce===s.UNSIGNED_BYTE&&(xe=s.RG8UI),ce===s.UNSIGNED_SHORT&&(xe=s.RG16UI),ce===s.UNSIGNED_INT&&(xe=s.RG32UI),ce===s.BYTE&&(xe=s.RG8I),ce===s.SHORT&&(xe=s.RG16I),ce===s.INT&&(xe=s.RG32I)),A===s.RGB_INTEGER&&(ce===s.UNSIGNED_BYTE&&(xe=s.RGB8UI),ce===s.UNSIGNED_SHORT&&(xe=s.RGB16UI),ce===s.UNSIGNED_INT&&(xe=s.RGB32UI),ce===s.BYTE&&(xe=s.RGB8I),ce===s.SHORT&&(xe=s.RGB16I),ce===s.INT&&(xe=s.RGB32I)),A===s.RGBA_INTEGER&&(ce===s.UNSIGNED_BYTE&&(xe=s.RGBA8UI),ce===s.UNSIGNED_SHORT&&(xe=s.RGBA16UI),ce===s.UNSIGNED_INT&&(xe=s.RGBA32UI),ce===s.BYTE&&(xe=s.RGBA8I),ce===s.SHORT&&(xe=s.RGBA16I),ce===s.INT&&(xe=s.RGBA32I)),A===s.RGB&&(ce===s.UNSIGNED_INT_5_9_9_9_REV&&(xe=s.RGB9_E5),ce===s.UNSIGNED_INT_10F_11F_11F_REV&&(xe=s.R11F_G11F_B10F)),A===s.RGBA){const et=we?au:Pt.getTransfer(Se);ce===s.FLOAT&&(xe=s.RGBA32F),ce===s.HALF_FLOAT&&(xe=s.RGBA16F),ce===s.UNSIGNED_BYTE&&(xe=et===jt?s.SRGB8_ALPHA8:s.RGBA8),ce===s.UNSIGNED_SHORT_4_4_4_4&&(xe=s.RGBA4),ce===s.UNSIGNED_SHORT_5_5_5_1&&(xe=s.RGB5_A1)}return(xe===s.R16F||xe===s.R32F||xe===s.RG16F||xe===s.RG32F||xe===s.RGBA16F||xe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),xe}function O(F,A){let ce;return F?A===null||A===Pr||A===el?ce=s.DEPTH24_STENCIL8:A===ma?ce=s.DEPTH32F_STENCIL8:A===$o&&(ce=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Pr||A===el?ce=s.DEPTH_COMPONENT24:A===ma?ce=s.DEPTH_COMPONENT32F:A===$o&&(ce=s.DEPTH_COMPONENT16),ce}function W(F,A){return y(F)===!0||F.isFramebufferTexture&&F.minFilter!==Ri&&F.minFilter!==zi?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function X(F){const A=F.target;A.removeEventListener("dispose",X),J(A),A.isVideoTexture&&g.delete(A)}function z(F){const A=F.target;A.removeEventListener("dispose",z),P(A)}function J(F){const A=a.get(F);if(A.__webglInit===void 0)return;const ce=F.source,Se=x.get(ce);if(Se){const we=Se[A.__cacheKey];we.usedTimes--,we.usedTimes===0&&L(F),Object.keys(Se).length===0&&x.delete(ce)}a.remove(F)}function L(F){const A=a.get(F);s.deleteTexture(A.__webglTexture);const ce=F.source,Se=x.get(ce);delete Se[A.__cacheKey],f.memory.textures--}function P(F){const A=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++){if(Array.isArray(A.__webglFramebuffer[Se]))for(let we=0;we<A.__webglFramebuffer[Se].length;we++)s.deleteFramebuffer(A.__webglFramebuffer[Se][we]);else s.deleteFramebuffer(A.__webglFramebuffer[Se]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[Se])}else{if(Array.isArray(A.__webglFramebuffer))for(let Se=0;Se<A.__webglFramebuffer.length;Se++)s.deleteFramebuffer(A.__webglFramebuffer[Se]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let Se=0;Se<A.__webglColorRenderbuffer.length;Se++)A.__webglColorRenderbuffer[Se]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[Se]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const ce=F.textures;for(let Se=0,we=ce.length;Se<we;Se++){const xe=a.get(ce[Se]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),f.memory.textures--),a.remove(ce[Se])}a.remove(F)}let Z=0;function se(){Z=0}function le(){const F=Z;return F>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),Z+=1,F}function ve(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function oe(F,A){const ce=a.get(F);if(F.isVideoTexture&&st(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ce.__version!==F.version){const Se=F.image;if(Se===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Se.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{H(ce,F,A);return}}else F.isExternalTexture&&(ce.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,ce.__webglTexture,s.TEXTURE0+A)}function B(F,A){const ce=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ce.__version!==F.version){H(ce,F,A);return}i.bindTexture(s.TEXTURE_2D_ARRAY,ce.__webglTexture,s.TEXTURE0+A)}function $(F,A){const ce=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ce.__version!==F.version){H(ce,F,A);return}i.bindTexture(s.TEXTURE_3D,ce.__webglTexture,s.TEXTURE0+A)}function te(F,A){const ce=a.get(F);if(F.version>0&&ce.__version!==F.version){Y(ce,F,A);return}i.bindTexture(s.TEXTURE_CUBE_MAP,ce.__webglTexture,s.TEXTURE0+A)}const k={[Th]:s.REPEAT,[Ur]:s.CLAMP_TO_EDGE,[Ah]:s.MIRRORED_REPEAT},U={[Ri]:s.NEAREST,[BE]:s.NEAREST_MIPMAP_NEAREST,[Tc]:s.NEAREST_MIPMAP_LINEAR,[zi]:s.LINEAR,[Nd]:s.LINEAR_MIPMAP_NEAREST,[Lr]:s.LINEAR_MIPMAP_LINEAR},M={[VE]:s.NEVER,[YE]:s.ALWAYS,[kE]:s.LESS,[W_]:s.LEQUAL,[WE]:s.EQUAL,[qE]:s.GEQUAL,[XE]:s.GREATER,[jE]:s.NOTEQUAL};function w(F,A){if(A.type===ma&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===zi||A.magFilter===Nd||A.magFilter===Tc||A.magFilter===Lr||A.minFilter===zi||A.minFilter===Nd||A.minFilter===Tc||A.minFilter===Lr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(F,s.TEXTURE_WRAP_S,k[A.wrapS]),s.texParameteri(F,s.TEXTURE_WRAP_T,k[A.wrapT]),(F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY)&&s.texParameteri(F,s.TEXTURE_WRAP_R,k[A.wrapR]),s.texParameteri(F,s.TEXTURE_MAG_FILTER,U[A.magFilter]),s.texParameteri(F,s.TEXTURE_MIN_FILTER,U[A.minFilter]),A.compareFunction&&(s.texParameteri(F,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(F,s.TEXTURE_COMPARE_FUNC,M[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Ri||A.minFilter!==Tc&&A.minFilter!==Lr||A.type===ma&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const ce=e.get("EXT_texture_filter_anisotropic");s.texParameterf(F,ce.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function G(F,A){let ce=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",X));const Se=A.source;let we=x.get(Se);we===void 0&&(we={},x.set(Se,we));const xe=ve(A);if(xe!==F.__cacheKey){we[xe]===void 0&&(we[xe]={texture:s.createTexture(),usedTimes:0},f.memory.textures++,ce=!0),we[xe].usedTimes++;const et=we[F.__cacheKey];et!==void 0&&(we[F.__cacheKey].usedTimes--,et.usedTimes===0&&L(A)),F.__cacheKey=xe,F.__webglTexture=we[xe].texture}return ce}function ee(F,A,ce){return Math.floor(Math.floor(F/ce)/A)}function Q(F,A,ce,Se){const xe=F.updateRanges;if(xe.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,A.width,A.height,ce,Se,A.data);else{xe.sort((Ce,Le)=>Ce.start-Le.start);let et=0;for(let Ce=1;Ce<xe.length;Ce++){const Le=xe[et],it=xe[Ce],Ve=Le.start+Le.count,Ie=ee(it.start,A.width,4),pt=ee(Le.start,A.width,4);it.start<=Ve+1&&Ie===pt&&ee(it.start+it.count-1,A.width,4)===Ie?Le.count=Math.max(Le.count,it.start+it.count-Le.start):(++et,xe[et]=it)}xe.length=et+1;const Ue=s.getParameter(s.UNPACK_ROW_LENGTH),Ke=s.getParameter(s.UNPACK_SKIP_PIXELS),tt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,A.width);for(let Ce=0,Le=xe.length;Ce<Le;Ce++){const it=xe[Ce],Ve=Math.floor(it.start/4),Ie=Math.ceil(it.count/4),pt=Ve%A.width,ne=Math.floor(Ve/A.width),De=Ie,Oe=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,pt),s.pixelStorei(s.UNPACK_SKIP_ROWS,ne),i.texSubImage2D(s.TEXTURE_2D,0,pt,ne,De,Oe,ce,Se,A.data)}F.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Ue),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),s.pixelStorei(s.UNPACK_SKIP_ROWS,tt)}}function H(F,A,ce){let Se=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Se=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Se=s.TEXTURE_3D);const we=G(F,A),xe=A.source;i.bindTexture(Se,F.__webglTexture,s.TEXTURE0+ce);const et=a.get(xe);if(xe.version!==et.__version||we===!0){i.activeTexture(s.TEXTURE0+ce);const Ue=Pt.getPrimaries(Pt.workingColorSpace),Ke=A.colorSpace===Ja?null:Pt.getPrimaries(A.colorSpace),tt=A.colorSpace===Ja||Ue===Ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let Ce=T(A.image,!1,l.maxTextureSize);Ce=$t(A,Ce);const Le=c.convert(A.format,A.colorSpace),it=c.convert(A.type);let Ve=N(A.internalFormat,Le,it,A.colorSpace,A.isVideoTexture);w(Se,A);let Ie;const pt=A.mipmaps,ne=A.isVideoTexture!==!0,De=et.__version===void 0||we===!0,Oe=xe.dataReady,je=W(A,Ce);if(A.isDepthTexture)Ve=O(A.format===nl,A.type),De&&(ne?i.texStorage2D(s.TEXTURE_2D,1,Ve,Ce.width,Ce.height):i.texImage2D(s.TEXTURE_2D,0,Ve,Ce.width,Ce.height,0,Le,it,null));else if(A.isDataTexture)if(pt.length>0){ne&&De&&i.texStorage2D(s.TEXTURE_2D,je,Ve,pt[0].width,pt[0].height);for(let Re=0,be=pt.length;Re<be;Re++)Ie=pt[Re],ne?Oe&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Le,it,Ie.data):i.texImage2D(s.TEXTURE_2D,Re,Ve,Ie.width,Ie.height,0,Le,it,Ie.data);A.generateMipmaps=!1}else ne?(De&&i.texStorage2D(s.TEXTURE_2D,je,Ve,Ce.width,Ce.height),Oe&&Q(A,Ce,Le,it)):i.texImage2D(s.TEXTURE_2D,0,Ve,Ce.width,Ce.height,0,Le,it,Ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ne&&De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,je,Ve,pt[0].width,pt[0].height,Ce.depth);for(let Re=0,be=pt.length;Re<be;Re++)if(Ie=pt[Re],A.format!==wi)if(Le!==null)if(ne){if(Oe)if(A.layerUpdates.size>0){const Ye=kv(Ie.width,Ie.height,A.format,A.type);for(const dt of A.layerUpdates){const Ht=Ie.data.subarray(dt*Ye/Ie.data.BYTES_PER_ELEMENT,(dt+1)*Ye/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,dt,Ie.width,Ie.height,1,Le,Ht)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Ce.depth,Le,Ie.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,Ve,Ie.width,Ie.height,Ce.depth,0,Ie.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?Oe&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Ce.depth,Le,it,Ie.data):i.texImage3D(s.TEXTURE_2D_ARRAY,Re,Ve,Ie.width,Ie.height,Ce.depth,0,Le,it,Ie.data)}else{ne&&De&&i.texStorage2D(s.TEXTURE_2D,je,Ve,pt[0].width,pt[0].height);for(let Re=0,be=pt.length;Re<be;Re++)Ie=pt[Re],A.format!==wi?Le!==null?ne?Oe&&i.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Le,Ie.data):i.compressedTexImage2D(s.TEXTURE_2D,Re,Ve,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?Oe&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Le,it,Ie.data):i.texImage2D(s.TEXTURE_2D,Re,Ve,Ie.width,Ie.height,0,Le,it,Ie.data)}else if(A.isDataArrayTexture)if(ne){if(De&&i.texStorage3D(s.TEXTURE_2D_ARRAY,je,Ve,Ce.width,Ce.height,Ce.depth),Oe)if(A.layerUpdates.size>0){const Re=kv(Ce.width,Ce.height,A.format,A.type);for(const be of A.layerUpdates){const Ye=Ce.data.subarray(be*Re/Ce.data.BYTES_PER_ELEMENT,(be+1)*Re/Ce.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,Ce.width,Ce.height,1,Le,it,Ye)}A.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ce.width,Ce.height,Ce.depth,Le,it,Ce.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Ve,Ce.width,Ce.height,Ce.depth,0,Le,it,Ce.data);else if(A.isData3DTexture)ne?(De&&i.texStorage3D(s.TEXTURE_3D,je,Ve,Ce.width,Ce.height,Ce.depth),Oe&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ce.width,Ce.height,Ce.depth,Le,it,Ce.data)):i.texImage3D(s.TEXTURE_3D,0,Ve,Ce.width,Ce.height,Ce.depth,0,Le,it,Ce.data);else if(A.isFramebufferTexture){if(De)if(ne)i.texStorage2D(s.TEXTURE_2D,je,Ve,Ce.width,Ce.height);else{let Re=Ce.width,be=Ce.height;for(let Ye=0;Ye<je;Ye++)i.texImage2D(s.TEXTURE_2D,Ye,Ve,Re,be,0,Le,it,null),Re>>=1,be>>=1}}else if(pt.length>0){if(ne&&De){const Re=Kt(pt[0]);i.texStorage2D(s.TEXTURE_2D,je,Ve,Re.width,Re.height)}for(let Re=0,be=pt.length;Re<be;Re++)Ie=pt[Re],ne?Oe&&i.texSubImage2D(s.TEXTURE_2D,Re,0,0,Le,it,Ie):i.texImage2D(s.TEXTURE_2D,Re,Ve,Le,it,Ie);A.generateMipmaps=!1}else if(ne){if(De){const Re=Kt(Ce);i.texStorage2D(s.TEXTURE_2D,je,Ve,Re.width,Re.height)}Oe&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,it,Ce)}else i.texImage2D(s.TEXTURE_2D,0,Ve,Le,it,Ce);y(A)&&_(Se),et.__version=xe.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function Y(F,A,ce){if(A.image.length!==6)return;const Se=G(F,A),we=A.source;i.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+ce);const xe=a.get(we);if(we.version!==xe.__version||Se===!0){i.activeTexture(s.TEXTURE0+ce);const et=Pt.getPrimaries(Pt.workingColorSpace),Ue=A.colorSpace===Ja?null:Pt.getPrimaries(A.colorSpace),Ke=A.colorSpace===Ja||et===Ue?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);const tt=A.isCompressedTexture||A.image[0].isCompressedTexture,Ce=A.image[0]&&A.image[0].isDataTexture,Le=[];for(let be=0;be<6;be++)!tt&&!Ce?Le[be]=T(A.image[be],!0,l.maxCubemapSize):Le[be]=Ce?A.image[be].image:A.image[be],Le[be]=$t(A,Le[be]);const it=Le[0],Ve=c.convert(A.format,A.colorSpace),Ie=c.convert(A.type),pt=N(A.internalFormat,Ve,Ie,A.colorSpace),ne=A.isVideoTexture!==!0,De=xe.__version===void 0||Se===!0,Oe=we.dataReady;let je=W(A,it);w(s.TEXTURE_CUBE_MAP,A);let Re;if(tt){ne&&De&&i.texStorage2D(s.TEXTURE_CUBE_MAP,je,pt,it.width,it.height);for(let be=0;be<6;be++){Re=Le[be].mipmaps;for(let Ye=0;Ye<Re.length;Ye++){const dt=Re[Ye];A.format!==wi?Ve!==null?ne?Oe&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,dt.width,dt.height,Ve,dt.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,pt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,0,0,dt.width,dt.height,Ve,Ie,dt.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye,pt,dt.width,dt.height,0,Ve,Ie,dt.data)}}}else{if(Re=A.mipmaps,ne&&De){Re.length>0&&je++;const be=Kt(Le[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,je,pt,be.width,be.height)}for(let be=0;be<6;be++)if(Ce){ne?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Le[be].width,Le[be].height,Ve,Ie,Le[be].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,Le[be].width,Le[be].height,0,Ve,Ie,Le[be].data);for(let Ye=0;Ye<Re.length;Ye++){const Ht=Re[Ye].image[be].image;ne?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,Ht.width,Ht.height,Ve,Ie,Ht.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,pt,Ht.width,Ht.height,0,Ve,Ie,Ht.data)}}else{ne?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ve,Ie,Le[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,pt,Ve,Ie,Le[be]);for(let Ye=0;Ye<Re.length;Ye++){const dt=Re[Ye];ne?Oe&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,0,0,Ve,Ie,dt.image[be]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ye+1,pt,Ve,Ie,dt.image[be])}}}y(A)&&_(s.TEXTURE_CUBE_MAP),xe.__version=we.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function pe(F,A,ce,Se,we,xe){const et=c.convert(ce.format,ce.colorSpace),Ue=c.convert(ce.type),Ke=N(ce.internalFormat,et,Ue,ce.colorSpace),tt=a.get(A),Ce=a.get(ce);if(Ce.__renderTarget=A,!tt.__hasExternalTextures){const Le=Math.max(1,A.width>>xe),it=Math.max(1,A.height>>xe);we===s.TEXTURE_3D||we===s.TEXTURE_2D_ARRAY?i.texImage3D(we,xe,Ke,Le,it,A.depth,0,et,Ue,null):i.texImage2D(we,xe,Ke,Le,it,0,et,Ue,null)}i.bindFramebuffer(s.FRAMEBUFFER,F),Fe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Se,we,Ce.__webglTexture,0,_t(A)):(we===s.TEXTURE_2D||we>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Se,we,Ce.__webglTexture,xe),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(F,A,ce){if(s.bindRenderbuffer(s.RENDERBUFFER,F),A.depthBuffer){const Se=A.depthTexture,we=Se&&Se.isDepthTexture?Se.type:null,xe=O(A.stencilBuffer,we),et=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=_t(A);Fe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ue,xe,A.width,A.height):ce?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ue,xe,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,xe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,et,s.RENDERBUFFER,F)}else{const Se=A.textures;for(let we=0;we<Se.length;we++){const xe=Se[we],et=c.convert(xe.format,xe.colorSpace),Ue=c.convert(xe.type),Ke=N(xe.internalFormat,et,Ue,xe.colorSpace),tt=_t(A);ce&&Fe(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,tt,Ke,A.width,A.height):Fe(A)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,tt,Ke,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Ke,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ne(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(s.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Se=a.get(A.depthTexture);Se.__renderTarget=A,(!Se.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),oe(A.depthTexture,0);const we=Se.__webglTexture,xe=_t(A);if(A.depthTexture.format===tl)Fe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,we,0);else if(A.depthTexture.format===nl)Fe(A)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0,xe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,we,0);else throw new Error("Unknown depthTexture format")}function ke(F){const A=a.get(F),ce=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const Se=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Se){const we=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Se.removeEventListener("dispose",we)};Se.addEventListener("dispose",we),A.__depthDisposeCallback=we}A.__boundDepthTexture=Se}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(ce)throw new Error("target.depthTexture not supported in Cube render targets");const Se=F.texture.mipmaps;Se&&Se.length>0?Ne(A.__webglFramebuffer[0],F):Ne(A.__webglFramebuffer,F)}else if(ce){A.__webglDepthbuffer=[];for(let Se=0;Se<6;Se++)if(i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[Se]),A.__webglDepthbuffer[Se]===void 0)A.__webglDepthbuffer[Se]=s.createRenderbuffer(),Te(A.__webglDepthbuffer[Se],F,!1);else{const we=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer[Se];s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,xe)}}else{const Se=F.texture.mipmaps;if(Se&&Se.length>0?i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),Te(A.__webglDepthbuffer,F,!1);else{const we=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,xe),s.framebufferRenderbuffer(s.FRAMEBUFFER,we,s.RENDERBUFFER,xe)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function lt(F,A,ce){const Se=a.get(F);A!==void 0&&pe(Se.__webglFramebuffer,F,F.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ce!==void 0&&ke(F)}function V(F){const A=F.texture,ce=a.get(F),Se=a.get(A);F.addEventListener("dispose",z);const we=F.textures,xe=F.isWebGLCubeRenderTarget===!0,et=we.length>1;if(et||(Se.__webglTexture===void 0&&(Se.__webglTexture=s.createTexture()),Se.__version=A.version,f.memory.textures++),xe){ce.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(A.mipmaps&&A.mipmaps.length>0){ce.__webglFramebuffer[Ue]=[];for(let Ke=0;Ke<A.mipmaps.length;Ke++)ce.__webglFramebuffer[Ue][Ke]=s.createFramebuffer()}else ce.__webglFramebuffer[Ue]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){ce.__webglFramebuffer=[];for(let Ue=0;Ue<A.mipmaps.length;Ue++)ce.__webglFramebuffer[Ue]=s.createFramebuffer()}else ce.__webglFramebuffer=s.createFramebuffer();if(et)for(let Ue=0,Ke=we.length;Ue<Ke;Ue++){const tt=a.get(we[Ue]);tt.__webglTexture===void 0&&(tt.__webglTexture=s.createTexture(),f.memory.textures++)}if(F.samples>0&&Fe(F)===!1){ce.__webglMultisampledFramebuffer=s.createFramebuffer(),ce.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,ce.__webglMultisampledFramebuffer);for(let Ue=0;Ue<we.length;Ue++){const Ke=we[Ue];ce.__webglColorRenderbuffer[Ue]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ce.__webglColorRenderbuffer[Ue]);const tt=c.convert(Ke.format,Ke.colorSpace),Ce=c.convert(Ke.type),Le=N(Ke.internalFormat,tt,Ce,Ke.colorSpace,F.isXRRenderTarget===!0),it=_t(F);s.renderbufferStorageMultisample(s.RENDERBUFFER,it,Le,F.width,F.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ue,s.RENDERBUFFER,ce.__webglColorRenderbuffer[Ue])}s.bindRenderbuffer(s.RENDERBUFFER,null),F.depthBuffer&&(ce.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(ce.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(xe){i.bindTexture(s.TEXTURE_CUBE_MAP,Se.__webglTexture),w(s.TEXTURE_CUBE_MAP,A);for(let Ue=0;Ue<6;Ue++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ke=0;Ke<A.mipmaps.length;Ke++)pe(ce.__webglFramebuffer[Ue][Ke],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Ke);else pe(ce.__webglFramebuffer[Ue],F,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(A)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(et){for(let Ue=0,Ke=we.length;Ue<Ke;Ue++){const tt=we[Ue],Ce=a.get(tt);let Le=s.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Le=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Le,Ce.__webglTexture),w(Le,tt),pe(ce.__webglFramebuffer,F,tt,s.COLOR_ATTACHMENT0+Ue,Le,0),y(tt)&&_(Le)}i.unbindTexture()}else{let Ue=s.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ue=F.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ue,Se.__webglTexture),w(Ue,A),A.mipmaps&&A.mipmaps.length>0)for(let Ke=0;Ke<A.mipmaps.length;Ke++)pe(ce.__webglFramebuffer[Ke],F,A,s.COLOR_ATTACHMENT0,Ue,Ke);else pe(ce.__webglFramebuffer,F,A,s.COLOR_ATTACHMENT0,Ue,0);y(A)&&_(Ue),i.unbindTexture()}F.depthBuffer&&ke(F)}function Ge(F){const A=F.textures;for(let ce=0,Se=A.length;ce<Se;ce++){const we=A[ce];if(y(we)){const xe=C(F),et=a.get(we).__webglTexture;i.bindTexture(xe,et),_(xe),i.unbindTexture()}}}const We=[],Xe=[];function Pe(F){if(F.samples>0){if(Fe(F)===!1){const A=F.textures,ce=F.width,Se=F.height;let we=s.COLOR_BUFFER_BIT;const xe=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,et=a.get(F),Ue=A.length>1;if(Ue)for(let tt=0;tt<A.length;tt++)i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,et.__webglMultisampledFramebuffer);const Ke=F.texture.mipmaps;Ke&&Ke.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglFramebuffer);for(let tt=0;tt<A.length;tt++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(we|=s.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(we|=s.STENCIL_BUFFER_BIT)),Ue){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,et.__webglColorRenderbuffer[tt]);const Ce=a.get(A[tt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ce,0)}s.blitFramebuffer(0,0,ce,Se,0,0,ce,Se,we,s.NEAREST),p===!0&&(We.length=0,Xe.length=0,We.push(s.COLOR_ATTACHMENT0+tt),F.depthBuffer&&F.resolveDepthBuffer===!1&&(We.push(xe),Xe.push(xe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Xe)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,We))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ue)for(let tt=0;tt<A.length;tt++){i.bindFramebuffer(s.FRAMEBUFFER,et.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.RENDERBUFFER,et.__webglColorRenderbuffer[tt]);const Ce=a.get(A[tt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,et.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+tt,s.TEXTURE_2D,Ce,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,et.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const A=F.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function _t(F){return Math.min(l.maxSamples,F.samples)}function Fe(F){const A=a.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function st(F){const A=f.render.frame;g.get(F)!==A&&(g.set(F,A),F.update())}function $t(F,A){const ce=F.colorSpace,Se=F.format,we=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ce!==ks&&ce!==Ja&&(Pt.getTransfer(ce)===jt?(Se!==wi||we!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ce)),A}function Kt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=le,this.resetTextureUnits=se,this.setTexture2D=oe,this.setTexture2DArray=B,this.setTexture3D=$,this.setTextureCube=te,this.rebindTextures=lt,this.setupRenderTarget=V,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Fe}function rR(s,e){function i(a,l=Ja){let c;const f=Pt.getTransfer(l);if(a===Gi)return s.UNSIGNED_BYTE;if(a===dp)return s.UNSIGNED_SHORT_4_4_4_4;if(a===hp)return s.UNSIGNED_SHORT_5_5_5_1;if(a===z_)return s.UNSIGNED_INT_5_9_9_9_REV;if(a===B_)return s.UNSIGNED_INT_10F_11F_11F_REV;if(a===P_)return s.BYTE;if(a===I_)return s.SHORT;if(a===$o)return s.UNSIGNED_SHORT;if(a===fp)return s.INT;if(a===Pr)return s.UNSIGNED_INT;if(a===ma)return s.FLOAT;if(a===ll)return s.HALF_FLOAT;if(a===F_)return s.ALPHA;if(a===H_)return s.RGB;if(a===wi)return s.RGBA;if(a===tl)return s.DEPTH_COMPONENT;if(a===nl)return s.DEPTH_STENCIL;if(a===G_)return s.RED;if(a===pp)return s.RED_INTEGER;if(a===V_)return s.RG;if(a===mp)return s.RG_INTEGER;if(a===gp)return s.RGBA_INTEGER;if(a===Jc||a===$c||a===eu||a===tu)if(f===jt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(a===Jc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(a===Jc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===$c)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===eu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===tu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===wh||a===Rh||a===Ch||a===Dh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(a===wh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Ch)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Dh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Nh||a===Uh||a===Lh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(a===Nh||a===Uh)return f===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(a===Lh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Oh||a===Ph||a===Ih||a===zh||a===Bh||a===Fh||a===Hh||a===Gh||a===Vh||a===kh||a===Wh||a===Xh||a===jh||a===qh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(a===Oh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Ph)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ih)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===zh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Fh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Hh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Gh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Vh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===kh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Wh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Xh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===jh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===qh)return f===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Yh||a===Zh||a===Kh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(a===Yh)return f===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Zh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Qh||a===Jh||a===$h||a===ep)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(a===Qh)return c.COMPRESSED_RED_RGTC1_EXT;if(a===Jh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===$h)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ep)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===el?s.UNSIGNED_INT_24_8:s[a]!==void 0?s[a]:null}return{convert:i}}const sR=`
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

}`;class lR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const a=new rx(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,a=new nr({vertexShader:sR,fragmentShader:oR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new oi(new hu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cR extends qs{constructor(e,i){super();const a=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,g=null,v=null,x=null,E=null,b=null;const T=typeof XRWebGLBinding<"u",y=new lR,_={},C=i.getContextAttributes();let N=null,O=null;const W=[],X=[],z=new It;let J=null;const L=new ri;L.viewport=new rn;const P=new ri;P.viewport=new rn;const Z=[L,P],se=new Db;let le=null,ve=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=W[H];return Y===void 0&&(Y=new eh,W[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=W[H];return Y===void 0&&(Y=new eh,W[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=W[H];return Y===void 0&&(Y=new eh,W[H]=Y),Y.getHandSpace()};function oe(H){const Y=X.indexOf(H.inputSource);if(Y===-1)return;const pe=W[Y];pe!==void 0&&(pe.update(H.inputSource,H.frame,m||f),pe.dispatchEvent({type:H.type,data:H.inputSource}))}function B(){l.removeEventListener("select",oe),l.removeEventListener("selectstart",oe),l.removeEventListener("selectend",oe),l.removeEventListener("squeeze",oe),l.removeEventListener("squeezestart",oe),l.removeEventListener("squeezeend",oe),l.removeEventListener("end",B),l.removeEventListener("inputsourceschange",$);for(let H=0;H<W.length;H++){const Y=X[H];Y!==null&&(X[H]=null,W[H].disconnect(Y))}le=null,ve=null,y.reset();for(const H in _)delete _[H];e.setRenderTarget(N),E=null,x=null,v=null,l=null,O=null,Q.stop(),a.isPresenting=!1,e.setPixelRatio(J),e.setSize(z.width,z.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){c=H,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){d=H,a.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(H){m=H},this.getBaseLayer=function(){return x!==null?x:E},this.getBinding=function(){return v===null&&T&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(H){if(l=H,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",oe),l.addEventListener("selectstart",oe),l.addEventListener("selectend",oe),l.addEventListener("squeeze",oe),l.addEventListener("squeezestart",oe),l.addEventListener("squeezeend",oe),l.addEventListener("end",B),l.addEventListener("inputsourceschange",$),C.xrCompatible!==!0&&await i.makeXRCompatible(),J=e.getPixelRatio(),e.getSize(z),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Te=null,Ne=null;C.depth&&(Ne=C.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pe=C.stencil?nl:tl,Te=C.stencil?el:Pr);const ke={colorFormat:i.RGBA8,depthFormat:Ne,scaleFactor:c};v=this.getBinding(),x=v.createProjectionLayer(ke),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),O=new Ir(x.textureWidth,x.textureHeight,{format:wi,type:Gi,depthTexture:new ax(x.textureWidth,x.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const pe={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};E=new XRWebGLLayer(l,i,pe),l.updateRenderState({baseLayer:E}),e.setPixelRatio(1),e.setSize(E.framebufferWidth,E.framebufferHeight,!1),O=new Ir(E.framebufferWidth,E.framebufferHeight,{format:wi,type:Gi,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:E.ignoreDepthValues===!1,resolveStencilBuffer:E.ignoreDepthValues===!1})}O.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),Q.setContext(l),Q.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(H){for(let Y=0;Y<H.removed.length;Y++){const pe=H.removed[Y],Te=X.indexOf(pe);Te>=0&&(X[Te]=null,W[Te].disconnect(pe))}for(let Y=0;Y<H.added.length;Y++){const pe=H.added[Y];let Te=X.indexOf(pe);if(Te===-1){for(let ke=0;ke<W.length;ke++)if(ke>=X.length){X.push(pe),Te=ke;break}else if(X[ke]===null){X[ke]=pe,Te=ke;break}if(Te===-1)break}const Ne=W[Te];Ne&&Ne.connect(pe)}}const te=new me,k=new me;function U(H,Y,pe){te.setFromMatrixPosition(Y.matrixWorld),k.setFromMatrixPosition(pe.matrixWorld);const Te=te.distanceTo(k),Ne=Y.projectionMatrix.elements,ke=pe.projectionMatrix.elements,lt=Ne[14]/(Ne[10]-1),V=Ne[14]/(Ne[10]+1),Ge=(Ne[9]+1)/Ne[5],We=(Ne[9]-1)/Ne[5],Xe=(Ne[8]-1)/Ne[0],Pe=(ke[8]+1)/ke[0],_t=lt*Xe,Fe=lt*Pe,st=Te/(-Xe+Pe),$t=st*-Xe;if(Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX($t),H.translateZ(st),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert(),Ne[10]===-1)H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Kt=lt+st,F=V+st,A=_t-$t,ce=Fe+(Te-$t),Se=Ge*V/F*Kt,we=We*V/F*Kt;H.projectionMatrix.makePerspective(A,ce,Se,we,Kt,F),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}}function M(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(l===null)return;let Y=H.near,pe=H.far;y.texture!==null&&(y.depthNear>0&&(Y=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),se.near=P.near=L.near=Y,se.far=P.far=L.far=pe,(le!==se.near||ve!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),le=se.near,ve=se.far),se.layers.mask=H.layers.mask|6,L.layers.mask=se.layers.mask&3,P.layers.mask=se.layers.mask&5;const Te=H.parent,Ne=se.cameras;M(se,Te);for(let ke=0;ke<Ne.length;ke++)M(Ne[ke],Te);Ne.length===2?U(se,L,P):se.projectionMatrix.copy(L.projectionMatrix),w(H,se,Te)};function w(H,Y,pe){pe===null?H.matrix.copy(Y.matrixWorld):(H.matrix.copy(pe.matrixWorld),H.matrix.invert(),H.matrix.multiply(Y.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(Y.projectionMatrix),H.projectionMatrixInverse.copy(Y.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=tp*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(x===null&&E===null))return p},this.setFoveation=function(H){p=H,x!==null&&(x.fixedFoveation=H),E!==null&&E.fixedFoveation!==void 0&&(E.fixedFoveation=H)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(se)},this.getCameraTexture=function(H){return _[H]};let G=null;function ee(H,Y){if(g=Y.getViewerPose(m||f),b=Y,g!==null){const pe=g.views;E!==null&&(e.setRenderTargetFramebuffer(O,E.framebuffer),e.setRenderTarget(O));let Te=!1;pe.length!==se.cameras.length&&(se.cameras.length=0,Te=!0);for(let V=0;V<pe.length;V++){const Ge=pe[V];let We=null;if(E!==null)We=E.getViewport(Ge);else{const Pe=v.getViewSubImage(x,Ge);We=Pe.viewport,V===0&&(e.setRenderTargetTextures(O,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(O))}let Xe=Z[V];Xe===void 0&&(Xe=new ri,Xe.layers.enable(V),Xe.viewport=new rn,Z[V]=Xe),Xe.matrix.fromArray(Ge.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Ge.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(We.x,We.y,We.width,We.height),V===0&&(se.matrix.copy(Xe.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Te===!0&&se.cameras.push(Xe)}const Ne=l.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){v=a.getBinding();const V=v.getDepthInformation(pe[0]);V&&V.isValid&&V.texture&&y.init(V,l.renderState)}if(Ne&&Ne.includes("camera-access")&&T){e.state.unbindTexture(),v=a.getBinding();for(let V=0;V<pe.length;V++){const Ge=pe[V].camera;if(Ge){let We=_[Ge];We||(We=new rx,_[Ge]=We);const Xe=v.getCameraImage(Ge);We.sourceTexture=Xe}}}}for(let pe=0;pe<W.length;pe++){const Te=X[pe],Ne=W[pe];Te!==null&&Ne!==void 0&&Ne.update(Te,Y,m||f)}G&&G(H,Y),Y.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:Y}),b=null}const Q=new ux;Q.setAnimationLoop(ee),this.setAnimationLoop=function(H){G=H},this.dispose=function(){}}}const wr=new Vi,uR=new sn;function fR(s,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function a(y,_){_.color.getRGB(y.fogColor.value,$_(s)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,C,N,O){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(y,_):_.isMeshToonMaterial?(c(y,_),v(y,_)):_.isMeshPhongMaterial?(c(y,_),g(y,_)):_.isMeshStandardMaterial?(c(y,_),x(y,_),_.isMeshPhysicalMaterial&&E(y,_,O)):_.isMeshMatcapMaterial?(c(y,_),b(y,_)):_.isMeshDepthMaterial?c(y,_):_.isMeshDistanceMaterial?(c(y,_),T(y,_)):_.isMeshNormalMaterial?c(y,_):_.isLineBasicMaterial?(f(y,_),_.isLineDashedMaterial&&d(y,_)):_.isPointsMaterial?p(y,_,C,N):_.isSpriteMaterial?m(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===jn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===jn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const C=e.get(_),N=C.envMap,O=C.envMapRotation;N&&(y.envMap.value=N,wr.copy(O),wr.x*=-1,wr.y*=-1,wr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(wr.y*=-1,wr.z*=-1),y.envMapRotation.value.setFromMatrix4(uR.makeRotationFromEuler(wr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function f(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function d(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function p(y,_,C,N){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*C,y.scale.value=N*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function m(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function g(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function v(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function x(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function E(y,_,C){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=C.texture,y.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,_){_.matcap&&(y.matcap.value=_.matcap)}function T(y,_){const C=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(C.matrixWorld),y.nearDistance.value=C.shadow.camera.near,y.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:l}}function dR(s,e,i,a){let l={},c={},f=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(C,N){const O=N.program;a.uniformBlockBinding(C,O)}function m(C,N){let O=l[C.id];O===void 0&&(b(C),O=g(C),l[C.id]=O,C.addEventListener("dispose",y));const W=N.program;a.updateUBOMapping(C,W);const X=e.render.frame;c[C.id]!==X&&(x(C),c[C.id]=X)}function g(C){const N=v();C.__bindingPointIndex=N;const O=s.createBuffer(),W=C.__size,X=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,O),s.bufferData(s.UNIFORM_BUFFER,W,X),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,O),O}function v(){for(let C=0;C<d;C++)if(f.indexOf(C)===-1)return f.push(C),C;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(C){const N=l[C.id],O=C.uniforms,W=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let X=0,z=O.length;X<z;X++){const J=Array.isArray(O[X])?O[X]:[O[X]];for(let L=0,P=J.length;L<P;L++){const Z=J[L];if(E(Z,X,L,W)===!0){const se=Z.__offset,le=Array.isArray(Z.value)?Z.value:[Z.value];let ve=0;for(let oe=0;oe<le.length;oe++){const B=le[oe],$=T(B);typeof B=="number"||typeof B=="boolean"?(Z.__data[0]=B,s.bufferSubData(s.UNIFORM_BUFFER,se+ve,Z.__data)):B.isMatrix3?(Z.__data[0]=B.elements[0],Z.__data[1]=B.elements[1],Z.__data[2]=B.elements[2],Z.__data[3]=0,Z.__data[4]=B.elements[3],Z.__data[5]=B.elements[4],Z.__data[6]=B.elements[5],Z.__data[7]=0,Z.__data[8]=B.elements[6],Z.__data[9]=B.elements[7],Z.__data[10]=B.elements[8],Z.__data[11]=0):(B.toArray(Z.__data,ve),ve+=$.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,Z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function E(C,N,O,W){const X=C.value,z=N+"_"+O;if(W[z]===void 0)return typeof X=="number"||typeof X=="boolean"?W[z]=X:W[z]=X.clone(),!0;{const J=W[z];if(typeof X=="number"||typeof X=="boolean"){if(J!==X)return W[z]=X,!0}else if(J.equals(X)===!1)return J.copy(X),!0}return!1}function b(C){const N=C.uniforms;let O=0;const W=16;for(let z=0,J=N.length;z<J;z++){const L=Array.isArray(N[z])?N[z]:[N[z]];for(let P=0,Z=L.length;P<Z;P++){const se=L[P],le=Array.isArray(se.value)?se.value:[se.value];for(let ve=0,oe=le.length;ve<oe;ve++){const B=le[ve],$=T(B),te=O%W,k=te%$.boundary,U=te+k;O+=k,U!==0&&W-U<$.storage&&(O+=W-U),se.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=O,O+=$.storage}}}const X=O%W;return X>0&&(O+=W-X),C.__size=O,C.__cache={},this}function T(C){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=48,N.storage=48):C.isMatrix4?(N.boundary=64,N.storage=64):C.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",C),N}function y(C){const N=C.target;N.removeEventListener("dispose",y);const O=f.indexOf(N.__bindingPointIndex);f.splice(O,1),s.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const C in l)s.deleteBuffer(l[C]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class mx{constructor(e={}){const{canvas:i=KE(),context:a=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let E;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=a.getContextAttributes().alpha}else E=f;const b=new Uint32Array(4),T=new Int32Array(4);let y=null,_=null;const C=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=er,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let W=!1;this._outputColorSpace=xi;let X=0,z=0,J=null,L=-1,P=null;const Z=new rn,se=new rn;let le=null;const ve=new Dt(0);let oe=0,B=i.width,$=i.height,te=1,k=null,U=null;const M=new rn(0,0,B,$),w=new rn(0,0,B,$);let G=!1;const ee=new _p;let Q=!1,H=!1;const Y=new sn,pe=new me,Te=new rn,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ke=!1;function lt(){return J===null?te:1}let V=a;function Ge(D,ie){return i.getContext(D,ie)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${up}`),i.addEventListener("webglcontextlost",Oe,!1),i.addEventListener("webglcontextrestored",je,!1),i.addEventListener("webglcontextcreationerror",Re,!1),V===null){const ie="webgl2";if(V=Ge(ie,D),V===null)throw Ge(ie)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let We,Xe,Pe,_t,Fe,st,$t,Kt,F,A,ce,Se,we,xe,et,Ue,Ke,tt,Ce,Le,it,Ve,Ie,pt;function ne(){We=new EA(V),We.init(),Ve=new rR(V,We),Xe=new gA(V,We,e,Ve),Pe=new iR(V,We),Xe.reversedDepthBuffer&&x&&Pe.buffers.depth.setReversed(!0),_t=new AA(V),Fe=new Ww,st=new aR(V,We,Pe,Fe,Xe,Ve,_t),$t=new _A(O),Kt=new MA(O),F=new Ub(V),Ie=new pA(V,F),A=new bA(V,F,_t,Ie),ce=new RA(V,A,F,_t),Ce=new wA(V,Xe,st),Ue=new vA(Fe),Se=new kw(O,$t,Kt,We,Xe,Ie,Ue),we=new fR(O,Fe),xe=new jw,et=new Jw(We),tt=new hA(O,$t,Kt,Pe,ce,E,p),Ke=new tR(O,ce,Xe),pt=new dR(V,_t,Xe,Pe),Le=new mA(V,We,_t),it=new TA(V,We,_t),_t.programs=Se.programs,O.capabilities=Xe,O.extensions=We,O.properties=Fe,O.renderLists=xe,O.shadowMap=Ke,O.state=Pe,O.info=_t}ne();const De=new cR(O,V);this.xr=De,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const D=We.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=We.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(D){D!==void 0&&(te=D,this.setSize(B,$,!1))},this.getSize=function(D){return D.set(B,$)},this.setSize=function(D,ie,he=!0){if(De.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=D,$=ie,i.width=Math.floor(D*te),i.height=Math.floor(ie*te),he===!0&&(i.style.width=D+"px",i.style.height=ie+"px"),this.setViewport(0,0,D,ie)},this.getDrawingBufferSize=function(D){return D.set(B*te,$*te).floor()},this.setDrawingBufferSize=function(D,ie,he){B=D,$=ie,te=he,i.width=Math.floor(D*he),i.height=Math.floor(ie*he),this.setViewport(0,0,D,ie)},this.getCurrentViewport=function(D){return D.copy(Z)},this.getViewport=function(D){return D.copy(M)},this.setViewport=function(D,ie,he,ge){D.isVector4?M.set(D.x,D.y,D.z,D.w):M.set(D,ie,he,ge),Pe.viewport(Z.copy(M).multiplyScalar(te).round())},this.getScissor=function(D){return D.copy(w)},this.setScissor=function(D,ie,he,ge){D.isVector4?w.set(D.x,D.y,D.z,D.w):w.set(D,ie,he,ge),Pe.scissor(se.copy(w).multiplyScalar(te).round())},this.getScissorTest=function(){return G},this.setScissorTest=function(D){Pe.setScissorTest(G=D)},this.setOpaqueSort=function(D){k=D},this.setTransparentSort=function(D){U=D},this.getClearColor=function(D){return D.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(D=!0,ie=!0,he=!0){let ge=0;if(D){let re=!1;if(J!==null){const Ae=J.texture.format;re=Ae===gp||Ae===mp||Ae===pp}if(re){const Ae=J.texture.type,ze=Ae===Gi||Ae===Pr||Ae===$o||Ae===el||Ae===dp||Ae===hp,Qe=tt.getClearColor(),He=tt.getClearAlpha(),at=Qe.r,ut=Qe.g,rt=Qe.b;ze?(b[0]=at,b[1]=ut,b[2]=rt,b[3]=He,V.clearBufferuiv(V.COLOR,0,b)):(T[0]=at,T[1]=ut,T[2]=rt,T[3]=He,V.clearBufferiv(V.COLOR,0,T))}else ge|=V.COLOR_BUFFER_BIT}ie&&(ge|=V.DEPTH_BUFFER_BIT),he&&(ge|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Oe,!1),i.removeEventListener("webglcontextrestored",je,!1),i.removeEventListener("webglcontextcreationerror",Re,!1),tt.dispose(),xe.dispose(),et.dispose(),Fe.dispose(),$t.dispose(),Kt.dispose(),ce.dispose(),Ie.dispose(),pt.dispose(),Se.dispose(),De.dispose(),De.removeEventListener("sessionstart",li),De.removeEventListener("sessionend",Ks),Di.stop()};function Oe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function je(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const D=_t.autoReset,ie=Ke.enabled,he=Ke.autoUpdate,ge=Ke.needsUpdate,re=Ke.type;ne(),_t.autoReset=D,Ke.enabled=ie,Ke.autoUpdate=he,Ke.needsUpdate=ge,Ke.type=re}function Re(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function be(D){const ie=D.target;ie.removeEventListener("dispose",be),Ye(ie)}function Ye(D){dt(D),Fe.remove(D)}function dt(D){const ie=Fe.get(D).programs;ie!==void 0&&(ie.forEach(function(he){Se.releaseProgram(he)}),D.isShaderMaterial&&Se.releaseShaderCache(D))}this.renderBufferDirect=function(D,ie,he,ge,re,Ae){ie===null&&(ie=Ne);const ze=re.isMesh&&re.matrixWorld.determinant()<0,Qe=Sa(D,ie,he,ge,re);Pe.setMaterial(ge,ze);let He=he.index,at=1;if(ge.wireframe===!0){if(He=A.getWireframeAttribute(he),He===void 0)return;at=2}const ut=he.drawRange,rt=he.attributes.position;let yt=ut.start*at,Bt=(ut.start+ut.count)*at;Ae!==null&&(yt=Math.max(yt,Ae.start*at),Bt=Math.min(Bt,(Ae.start+Ae.count)*at)),He!==null?(yt=Math.max(yt,0),Bt=Math.min(Bt,He.count)):rt!=null&&(yt=Math.max(yt,0),Bt=Math.min(Bt,rt.count));const qt=Bt-yt;if(qt<0||qt===1/0)return;Ie.setup(re,ge,Qe,he,He);let Ft,St=Le;if(He!==null&&(Ft=F.get(He),St=it,St.setIndex(Ft)),re.isMesh)ge.wireframe===!0?(Pe.setLineWidth(ge.wireframeLinewidth*lt()),St.setMode(V.LINES)):St.setMode(V.TRIANGLES);else if(re.isLine){let Je=ge.linewidth;Je===void 0&&(Je=1),Pe.setLineWidth(Je*lt()),re.isLineSegments?St.setMode(V.LINES):re.isLineLoop?St.setMode(V.LINE_LOOP):St.setMode(V.LINE_STRIP)}else re.isPoints?St.setMode(V.POINTS):re.isSprite&&St.setMode(V.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)il("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))St.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{const Je=re._multiDrawStarts,Zt=re._multiDrawCounts,Ut=re._multiDrawCount,bn=He?F.get(He).bytesPerElement:1,Wi=Fe.get(ge).currentProgram.getUniforms();for(let yn=0;yn<Ut;yn++)Wi.setValue(V,"_gl_DrawID",yn),St.render(Je[yn]/bn,Zt[yn])}else if(re.isInstancedMesh)St.renderInstances(yt,qt,re.count);else if(he.isInstancedBufferGeometry){const Je=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,Zt=Math.min(he.instanceCount,Je);St.renderInstances(yt,qt,Zt)}else St.render(yt,qt)};function Ht(D,ie,he){D.transparent===!0&&D.side===pa&&D.forceSinglePass===!1?(D.side=jn,D.needsUpdate=!0,Zn(D,ie,he),D.side=tr,D.needsUpdate=!0,Zn(D,ie,he),D.side=pa):Zn(D,ie,he)}this.compile=function(D,ie,he=null){he===null&&(he=D),_=et.get(he),_.init(ie),N.push(_),he.traverseVisible(function(re){re.isLight&&re.layers.test(ie.layers)&&(_.pushLight(re),re.castShadow&&_.pushShadow(re))}),D!==he&&D.traverseVisible(function(re){re.isLight&&re.layers.test(ie.layers)&&(_.pushLight(re),re.castShadow&&_.pushShadow(re))}),_.setupLights();const ge=new Set;return D.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;const Ae=re.material;if(Ae)if(Array.isArray(Ae))for(let ze=0;ze<Ae.length;ze++){const Qe=Ae[ze];Ht(Qe,he,re),ge.add(Qe)}else Ht(Ae,he,re),ge.add(Ae)}),_=N.pop(),ge},this.compileAsync=function(D,ie,he=null){const ge=this.compile(D,ie,he);return new Promise(re=>{function Ae(){if(ge.forEach(function(ze){Fe.get(ze).currentProgram.isReady()&&ge.delete(ze)}),ge.size===0){re(D);return}setTimeout(Ae,10)}We.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Nt=null;function On(D){Nt&&Nt(D)}function li(){Di.stop()}function Ks(){Di.start()}const Di=new ux;Di.setAnimationLoop(On),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(D){Nt=D,De.setAnimationLoop(D),D===null?Di.stop():Di.start()},De.addEventListener("sessionstart",li),De.addEventListener("sessionend",Ks),this.render=function(D,ie){if(ie!==void 0&&ie.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),ie.parent===null&&ie.matrixWorldAutoUpdate===!0&&ie.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(De.cameraAutoUpdate===!0&&De.updateCamera(ie),ie=De.getCamera()),D.isScene===!0&&D.onBeforeRender(O,D,ie,J),_=et.get(D,N.length),_.init(ie),N.push(_),Y.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),ee.setFromProjectionMatrix(Y,Bi,ie.reversedDepth),H=this.localClippingEnabled,Q=Ue.init(this.clippingPlanes,H),y=xe.get(D,C.length),y.init(),C.push(y),De.enabled===!0&&De.isPresenting===!0){const Ae=O.xr.getDepthSensingMesh();Ae!==null&&zr(Ae,ie,-1/0,O.sortObjects)}zr(D,ie,0,O.sortObjects),y.finish(),O.sortObjects===!0&&y.sort(k,U),ke=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,ke&&tt.addToRenderList(y,D),this.info.render.frame++,Q===!0&&Ue.beginShadows();const he=_.state.shadowsArray;Ke.render(he,D,ie),Q===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset();const ge=y.opaque,re=y.transmissive;if(_.setupLights(),ie.isArrayCamera){const Ae=ie.cameras;if(re.length>0)for(let ze=0,Qe=Ae.length;ze<Qe;ze++){const He=Ae[ze];Fr(ge,re,D,He)}ke&&tt.render(D);for(let ze=0,Qe=Ae.length;ze<Qe;ze++){const He=Ae[ze];Br(y,D,He,He.viewport)}}else re.length>0&&Fr(ge,re,D,ie),ke&&tt.render(D),Br(y,D,ie);J!==null&&z===0&&(st.updateMultisampleRenderTarget(J),st.updateRenderTargetMipmap(J)),D.isScene===!0&&D.onAfterRender(O,D,ie),Ie.resetDefaultState(),L=-1,P=null,N.pop(),N.length>0?(_=N[N.length-1],Q===!0&&Ue.setGlobalState(O.clippingPlanes,_.state.camera)):_=null,C.pop(),C.length>0?y=C[C.length-1]:y=null};function zr(D,ie,he,ge){if(D.visible===!1)return;if(D.layers.test(ie.layers)){if(D.isGroup)he=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(ie);else if(D.isLight)_.pushLight(D),D.castShadow&&_.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ee.intersectsSprite(D)){ge&&Te.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Y);const ze=ce.update(D),Qe=D.material;Qe.visible&&y.push(D,ze,Qe,he,Te.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ee.intersectsObject(D))){const ze=ce.update(D),Qe=D.material;if(ge&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Te.copy(D.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),Te.copy(ze.boundingSphere.center)),Te.applyMatrix4(D.matrixWorld).applyMatrix4(Y)),Array.isArray(Qe)){const He=ze.groups;for(let at=0,ut=He.length;at<ut;at++){const rt=He[at],yt=Qe[rt.materialIndex];yt&&yt.visible&&y.push(D,ze,yt,he,Te.z,rt)}}else Qe.visible&&y.push(D,ze,Qe,he,Te.z,null)}}const Ae=D.children;for(let ze=0,Qe=Ae.length;ze<Qe;ze++)zr(Ae[ze],ie,he,ge)}function Br(D,ie,he,ge){const re=D.opaque,Ae=D.transmissive,ze=D.transparent;_.setupLightsView(he),Q===!0&&Ue.setGlobalState(O.clippingPlanes,he),ge&&Pe.viewport(Z.copy(ge)),re.length>0&&ir(re,ie,he),Ae.length>0&&ir(Ae,ie,he),ze.length>0&&ir(ze,ie,he),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function Fr(D,ie,he,ge){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[ge.id]===void 0&&(_.state.transmissionRenderTarget[ge.id]=new Ir(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?ll:Gi,minFilter:Lr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace}));const Ae=_.state.transmissionRenderTarget[ge.id],ze=ge.viewport||Z;Ae.setSize(ze.z*O.transmissionResolutionScale,ze.w*O.transmissionResolutionScale);const Qe=O.getRenderTarget(),He=O.getActiveCubeFace(),at=O.getActiveMipmapLevel();O.setRenderTarget(Ae),O.getClearColor(ve),oe=O.getClearAlpha(),oe<1&&O.setClearColor(16777215,.5),O.clear(),ke&&tt.render(he);const ut=O.toneMapping;O.toneMapping=er;const rt=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),_.setupLightsView(ge),Q===!0&&Ue.setGlobalState(O.clippingPlanes,ge),ir(D,he,ge),st.updateMultisampleRenderTarget(Ae),st.updateRenderTargetMipmap(Ae),We.has("WEBGL_multisampled_render_to_texture")===!1){let yt=!1;for(let Bt=0,qt=ie.length;Bt<qt;Bt++){const Ft=ie[Bt],St=Ft.object,Je=Ft.geometry,Zt=Ft.material,Ut=Ft.group;if(Zt.side===pa&&St.layers.test(ge.layers)){const bn=Zt.side;Zt.side=jn,Zt.needsUpdate=!0,Qs(St,he,ge,Je,Zt,Ut),Zt.side=bn,Zt.needsUpdate=!0,yt=!0}}yt===!0&&(st.updateMultisampleRenderTarget(Ae),st.updateRenderTargetMipmap(Ae))}O.setRenderTarget(Qe,He,at),O.setClearColor(ve,oe),rt!==void 0&&(ge.viewport=rt),O.toneMapping=ut}function ir(D,ie,he){const ge=ie.isScene===!0?ie.overrideMaterial:null;for(let re=0,Ae=D.length;re<Ae;re++){const ze=D[re],Qe=ze.object,He=ze.geometry,at=ze.group;let ut=ze.material;ut.allowOverride===!0&&ge!==null&&(ut=ge),Qe.layers.test(he.layers)&&Qs(Qe,ie,he,He,ut,at)}}function Qs(D,ie,he,ge,re,Ae){D.onBeforeRender(O,ie,he,ge,re,Ae),D.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),re.onBeforeRender(O,ie,he,ge,D,Ae),re.transparent===!0&&re.side===pa&&re.forceSinglePass===!1?(re.side=jn,re.needsUpdate=!0,O.renderBufferDirect(he,ie,ge,re,D,Ae),re.side=tr,re.needsUpdate=!0,O.renderBufferDirect(he,ie,ge,re,D,Ae),re.side=pa):O.renderBufferDirect(he,ie,ge,re,D,Ae),D.onAfterRender(O,ie,he,ge,re,Ae)}function Zn(D,ie,he){ie.isScene!==!0&&(ie=Ne);const ge=Fe.get(D),re=_.state.lights,Ae=_.state.shadowsArray,ze=re.state.version,Qe=Se.getParameters(D,re.state,Ae,ie,he),He=Se.getProgramCacheKey(Qe);let at=ge.programs;ge.environment=D.isMeshStandardMaterial?ie.environment:null,ge.fog=ie.fog,ge.envMap=(D.isMeshStandardMaterial?Kt:$t).get(D.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&D.envMap===null?ie.environmentRotation:D.envMapRotation,at===void 0&&(D.addEventListener("dispose",be),at=new Map,ge.programs=at);let ut=at.get(He);if(ut!==void 0){if(ge.currentProgram===ut&&ge.lightsStateVersion===ze)return En(D,Qe),ut}else Qe.uniforms=Se.getUniforms(D),D.onBeforeCompile(Qe,O),ut=Se.acquireProgram(Qe,He),at.set(He,ut),ge.uniforms=Qe.uniforms;const rt=ge.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(rt.clippingPlanes=Ue.uniform),En(D,Qe),ge.needsLights=gu(D),ge.lightsStateVersion=ze,ge.needsLights&&(rt.ambientLightColor.value=re.state.ambient,rt.lightProbe.value=re.state.probe,rt.directionalLights.value=re.state.directional,rt.directionalLightShadows.value=re.state.directionalShadow,rt.spotLights.value=re.state.spot,rt.spotLightShadows.value=re.state.spotShadow,rt.rectAreaLights.value=re.state.rectArea,rt.ltc_1.value=re.state.rectAreaLTC1,rt.ltc_2.value=re.state.rectAreaLTC2,rt.pointLights.value=re.state.point,rt.pointLightShadows.value=re.state.pointShadow,rt.hemisphereLights.value=re.state.hemi,rt.directionalShadowMap.value=re.state.directionalShadowMap,rt.directionalShadowMatrix.value=re.state.directionalShadowMatrix,rt.spotShadowMap.value=re.state.spotShadowMap,rt.spotLightMatrix.value=re.state.spotLightMatrix,rt.spotLightMap.value=re.state.spotLightMap,rt.pointShadowMap.value=re.state.pointShadowMap,rt.pointShadowMatrix.value=re.state.pointShadowMatrix),ge.currentProgram=ut,ge.uniformsList=null,ut}function un(D){if(D.uniformsList===null){const ie=D.currentProgram.getUniforms();D.uniformsList=nu.seqWithValue(ie.seq,D.uniforms)}return D.uniformsList}function En(D,ie){const he=Fe.get(D);he.outputColorSpace=ie.outputColorSpace,he.batching=ie.batching,he.batchingColor=ie.batchingColor,he.instancing=ie.instancing,he.instancingColor=ie.instancingColor,he.instancingMorph=ie.instancingMorph,he.skinning=ie.skinning,he.morphTargets=ie.morphTargets,he.morphNormals=ie.morphNormals,he.morphColors=ie.morphColors,he.morphTargetsCount=ie.morphTargetsCount,he.numClippingPlanes=ie.numClippingPlanes,he.numIntersection=ie.numClipIntersection,he.vertexAlphas=ie.vertexAlphas,he.vertexTangents=ie.vertexTangents,he.toneMapping=ie.toneMapping}function Sa(D,ie,he,ge,re){ie.isScene!==!0&&(ie=Ne),st.resetTextureUnits();const Ae=ie.fog,ze=ge.isMeshStandardMaterial?ie.environment:null,Qe=J===null?O.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ks,He=(ge.isMeshStandardMaterial?Kt:$t).get(ge.envMap||ze),at=ge.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,ut=!!he.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),rt=!!he.morphAttributes.position,yt=!!he.morphAttributes.normal,Bt=!!he.morphAttributes.color;let qt=er;ge.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(qt=O.toneMapping);const Ft=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,St=Ft!==void 0?Ft.length:0,Je=Fe.get(ge),Zt=_.state.lights;if(Q===!0&&(H===!0||D!==P)){const gn=D===P&&ge.id===L;Ue.setState(ge,D,gn)}let Ut=!1;ge.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Zt.state.version||Je.outputColorSpace!==Qe||re.isBatchedMesh&&Je.batching===!1||!re.isBatchedMesh&&Je.batching===!0||re.isBatchedMesh&&Je.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&Je.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&Je.instancing===!1||!re.isInstancedMesh&&Je.instancing===!0||re.isSkinnedMesh&&Je.skinning===!1||!re.isSkinnedMesh&&Je.skinning===!0||re.isInstancedMesh&&Je.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&Je.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&Je.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&Je.instancingMorph===!1&&re.morphTexture!==null||Je.envMap!==He||ge.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Ue.numPlanes||Je.numIntersection!==Ue.numIntersection)||Je.vertexAlphas!==at||Je.vertexTangents!==ut||Je.morphTargets!==rt||Je.morphNormals!==yt||Je.morphColors!==Bt||Je.toneMapping!==qt||Je.morphTargetsCount!==St)&&(Ut=!0):(Ut=!0,Je.__version=ge.version);let bn=Je.currentProgram;Ut===!0&&(bn=Zn(ge,ie,re));let Wi=!1,yn=!1,rr=!1;const bt=bn.getUniforms(),Dn=Je.uniforms;if(Pe.useProgram(bn.program)&&(Wi=!0,yn=!0,rr=!0),ge.id!==L&&(L=ge.id,yn=!0),Wi||P!==D){Pe.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),bt.setValue(V,"projectionMatrix",D.projectionMatrix),bt.setValue(V,"viewMatrix",D.matrixWorldInverse);const on=bt.map.cameraPosition;on!==void 0&&on.setValue(V,pe.setFromMatrixPosition(D.matrixWorld)),Xe.logarithmicDepthBuffer&&bt.setValue(V,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&bt.setValue(V,"isOrthographic",D.isOrthographicCamera===!0),P!==D&&(P=D,yn=!0,rr=!0)}if(re.isSkinnedMesh){bt.setOptional(V,re,"bindMatrix"),bt.setOptional(V,re,"bindMatrixInverse");const gn=re.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),bt.setValue(V,"boneTexture",gn.boneTexture,st))}re.isBatchedMesh&&(bt.setOptional(V,re,"batchingTexture"),bt.setValue(V,"batchingTexture",re._matricesTexture,st),bt.setOptional(V,re,"batchingIdTexture"),bt.setValue(V,"batchingIdTexture",re._indirectTexture,st),bt.setOptional(V,re,"batchingColorTexture"),re._colorsTexture!==null&&bt.setValue(V,"batchingColorTexture",re._colorsTexture,st));const Pn=he.morphAttributes;if((Pn.position!==void 0||Pn.normal!==void 0||Pn.color!==void 0)&&Ce.update(re,he,bn),(yn||Je.receiveShadow!==re.receiveShadow)&&(Je.receiveShadow=re.receiveShadow,bt.setValue(V,"receiveShadow",re.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&(Dn.envMap.value=He,Dn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&ie.environment!==null&&(Dn.envMapIntensity.value=ie.environmentIntensity),yn&&(bt.setValue(V,"toneMappingExposure",O.toneMappingExposure),Je.needsLights&&Js(Dn,rr),Ae&&ge.fog===!0&&we.refreshFogUniforms(Dn,Ae),we.refreshMaterialUniforms(Dn,ge,te,$,_.state.transmissionRenderTarget[D.id]),nu.upload(V,un(Je),Dn,st)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(nu.upload(V,un(Je),Dn,st),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&bt.setValue(V,"center",re.center),bt.setValue(V,"modelViewMatrix",re.modelViewMatrix),bt.setValue(V,"normalMatrix",re.normalMatrix),bt.setValue(V,"modelMatrix",re.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){const gn=ge.uniformsGroups;for(let on=0,Hr=gn.length;on<Hr;on++){const Ni=gn[on];pt.update(Ni,bn),pt.bind(Ni,bn)}}return bn}function Js(D,ie){D.ambientLightColor.needsUpdate=ie,D.lightProbe.needsUpdate=ie,D.directionalLights.needsUpdate=ie,D.directionalLightShadows.needsUpdate=ie,D.pointLights.needsUpdate=ie,D.pointLightShadows.needsUpdate=ie,D.spotLights.needsUpdate=ie,D.spotLightShadows.needsUpdate=ie,D.rectAreaLights.needsUpdate=ie,D.hemisphereLights.needsUpdate=ie}function gu(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(D,ie,he){const ge=Fe.get(D);ge.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),Fe.get(D.texture).__webglTexture=ie,Fe.get(D.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:he,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,ie){const he=Fe.get(D);he.__webglFramebuffer=ie,he.__useDefaultFramebuffer=ie===void 0};const vu=V.createFramebuffer();this.setRenderTarget=function(D,ie=0,he=0){J=D,X=ie,z=he;let ge=!0,re=null,Ae=!1,ze=!1;if(D){const He=Fe.get(D);if(He.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(V.FRAMEBUFFER,null),ge=!1;else if(He.__webglFramebuffer===void 0)st.setupRenderTarget(D);else if(He.__hasExternalTextures)st.rebindTextures(D,Fe.get(D.texture).__webglTexture,Fe.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const rt=D.depthTexture;if(He.__boundDepthTexture!==rt){if(rt!==null&&Fe.has(rt)&&(D.width!==rt.image.width||D.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(D)}}const at=D.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(ze=!0);const ut=Fe.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(ut[ie])?re=ut[ie][he]:re=ut[ie],Ae=!0):D.samples>0&&st.useMultisampledRTT(D)===!1?re=Fe.get(D).__webglMultisampledFramebuffer:Array.isArray(ut)?re=ut[he]:re=ut,Z.copy(D.viewport),se.copy(D.scissor),le=D.scissorTest}else Z.copy(M).multiplyScalar(te).floor(),se.copy(w).multiplyScalar(te).floor(),le=G;if(he!==0&&(re=vu),Pe.bindFramebuffer(V.FRAMEBUFFER,re)&&ge&&Pe.drawBuffers(D,re),Pe.viewport(Z),Pe.scissor(se),Pe.setScissorTest(le),Ae){const He=Fe.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+ie,He.__webglTexture,he)}else if(ze){const He=ie;for(let at=0;at<D.textures.length;at++){const ut=Fe.get(D.textures[at]);V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0+at,ut.__webglTexture,he,He)}}else if(D!==null&&he!==0){const He=Fe.get(D.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,He.__webglTexture,he)}L=-1},this.readRenderTargetPixels=function(D,ie,he,ge,re,Ae,ze,Qe=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He){Pe.bindFramebuffer(V.FRAMEBUFFER,He);try{const at=D.textures[Qe],ut=at.format,rt=at.type;if(!Xe.textureFormatReadable(ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ie>=0&&ie<=D.width-ge&&he>=0&&he<=D.height-re&&(D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Qe),V.readPixels(ie,he,ge,re,Ve.convert(ut),Ve.convert(rt),Ae))}finally{const at=J!==null?Fe.get(J).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,at)}}},this.readRenderTargetPixelsAsync=async function(D,ie,he,ge,re,Ae,ze,Qe=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Fe.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&ze!==void 0&&(He=He[ze]),He)if(ie>=0&&ie<=D.width-ge&&he>=0&&he<=D.height-re){Pe.bindFramebuffer(V.FRAMEBUFFER,He);const at=D.textures[Qe],ut=at.format,rt=at.type;if(!Xe.textureFormatReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.bufferData(V.PIXEL_PACK_BUFFER,Ae.byteLength,V.STREAM_READ),D.textures.length>1&&V.readBuffer(V.COLOR_ATTACHMENT0+Qe),V.readPixels(ie,he,ge,re,Ve.convert(ut),Ve.convert(rt),0);const Bt=J!==null?Fe.get(J).__webglFramebuffer:null;Pe.bindFramebuffer(V.FRAMEBUFFER,Bt);const qt=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await QE(V,qt,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,yt),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,Ae),V.deleteBuffer(yt),V.deleteSync(qt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,ie=null,he=0){const ge=Math.pow(2,-he),re=Math.floor(D.image.width*ge),Ae=Math.floor(D.image.height*ge),ze=ie!==null?ie.x:0,Qe=ie!==null?ie.y:0;st.setTexture2D(D,0),V.copyTexSubImage2D(V.TEXTURE_2D,he,0,0,ze,Qe,re,Ae),Pe.unbindTexture()};const pl=V.createFramebuffer(),ar=V.createFramebuffer();this.copyTextureToTexture=function(D,ie,he=null,ge=null,re=0,Ae=null){Ae===null&&(re!==0?(il("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=re,re=0):Ae=0);let ze,Qe,He,at,ut,rt,yt,Bt,qt;const Ft=D.isCompressedTexture?D.mipmaps[Ae]:D.image;if(he!==null)ze=he.max.x-he.min.x,Qe=he.max.y-he.min.y,He=he.isBox3?he.max.z-he.min.z:1,at=he.min.x,ut=he.min.y,rt=he.isBox3?he.min.z:0;else{const Pn=Math.pow(2,-re);ze=Math.floor(Ft.width*Pn),Qe=Math.floor(Ft.height*Pn),D.isDataArrayTexture?He=Ft.depth:D.isData3DTexture?He=Math.floor(Ft.depth*Pn):He=1,at=0,ut=0,rt=0}ge!==null?(yt=ge.x,Bt=ge.y,qt=ge.z):(yt=0,Bt=0,qt=0);const St=Ve.convert(ie.format),Je=Ve.convert(ie.type);let Zt;ie.isData3DTexture?(st.setTexture3D(ie,0),Zt=V.TEXTURE_3D):ie.isDataArrayTexture||ie.isCompressedArrayTexture?(st.setTexture2DArray(ie,0),Zt=V.TEXTURE_2D_ARRAY):(st.setTexture2D(ie,0),Zt=V.TEXTURE_2D),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,ie.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ie.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,ie.unpackAlignment);const Ut=V.getParameter(V.UNPACK_ROW_LENGTH),bn=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Wi=V.getParameter(V.UNPACK_SKIP_PIXELS),yn=V.getParameter(V.UNPACK_SKIP_ROWS),rr=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ft.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Ft.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,at),V.pixelStorei(V.UNPACK_SKIP_ROWS,ut),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rt);const bt=D.isDataArrayTexture||D.isData3DTexture,Dn=ie.isDataArrayTexture||ie.isData3DTexture;if(D.isDepthTexture){const Pn=Fe.get(D),gn=Fe.get(ie),on=Fe.get(Pn.__renderTarget),Hr=Fe.get(gn.__renderTarget);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,on.__webglFramebuffer),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,Hr.__webglFramebuffer);for(let Ni=0;Ni<He;Ni++)bt&&(V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(D).__webglTexture,re,rt+Ni),V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Fe.get(ie).__webglTexture,Ae,qt+Ni)),V.blitFramebuffer(at,ut,ze,Qe,yt,Bt,ze,Qe,V.DEPTH_BUFFER_BIT,V.NEAREST);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else if(re!==0||D.isRenderTargetTexture||Fe.has(D)){const Pn=Fe.get(D),gn=Fe.get(ie);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,pl),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,ar);for(let on=0;on<He;on++)bt?V.framebufferTextureLayer(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,Pn.__webglTexture,re,rt+on):V.framebufferTexture2D(V.READ_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,Pn.__webglTexture,re),Dn?V.framebufferTextureLayer(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,gn.__webglTexture,Ae,qt+on):V.framebufferTexture2D(V.DRAW_FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_2D,gn.__webglTexture,Ae),re!==0?V.blitFramebuffer(at,ut,ze,Qe,yt,Bt,ze,Qe,V.COLOR_BUFFER_BIT,V.NEAREST):Dn?V.copyTexSubImage3D(Zt,Ae,yt,Bt,qt+on,at,ut,ze,Qe):V.copyTexSubImage2D(Zt,Ae,yt,Bt,at,ut,ze,Qe);Pe.bindFramebuffer(V.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(V.DRAW_FRAMEBUFFER,null)}else Dn?D.isDataTexture||D.isData3DTexture?V.texSubImage3D(Zt,Ae,yt,Bt,qt,ze,Qe,He,St,Je,Ft.data):ie.isCompressedArrayTexture?V.compressedTexSubImage3D(Zt,Ae,yt,Bt,qt,ze,Qe,He,St,Ft.data):V.texSubImage3D(Zt,Ae,yt,Bt,qt,ze,Qe,He,St,Je,Ft):D.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,Ae,yt,Bt,ze,Qe,St,Je,Ft.data):D.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,Ae,yt,Bt,Ft.width,Ft.height,St,Ft.data):V.texSubImage2D(V.TEXTURE_2D,Ae,yt,Bt,ze,Qe,St,Je,Ft);V.pixelStorei(V.UNPACK_ROW_LENGTH,Ut),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,bn),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Wi),V.pixelStorei(V.UNPACK_SKIP_ROWS,yn),V.pixelStorei(V.UNPACK_SKIP_IMAGES,rr),Ae===0&&ie.generateMipmaps&&V.generateMipmap(Zt),Pe.unbindTexture()},this.initRenderTarget=function(D){Fe.get(D).__webglFramebuffer===void 0&&st.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?st.setTextureCube(D,0):D.isData3DTexture?st.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?st.setTexture2DArray(D,0):st.setTexture2D(D,0),Pe.unbindTexture()},this.resetState=function(){X=0,z=0,J=null,Pe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Pt._getUnpackColorSpace()}}class Ps{static instance;clickSound=null;enterSound=null;isInitialized=!1;static getInstance(){return Ps.instance||(Ps.instance=new Ps),Ps.instance}initAudio(){if(!this.isInitialized)try{this.clickSound=new Audio("/assets/sounds/点击.wav"),this.clickSound.preload="auto",this.clickSound.volume=.7,this.enterSound=new Audio("/assets/sounds/完美(1).mp3"),this.enterSound.preload="auto",this.enterSound.volume=.8,this.isInitialized=!0,console.log("🎵 音效管理器初始化完成")}catch(e){console.error("❌ 音效初始化失败:",e)}}playClickSound(){this.initAudio(),this.clickSound&&(this.clickSound.currentTime=0,this.clickSound.play().catch(e=>console.log("点击音效播放失败:",e)))}playEnterSound(){this.initAudio(),this.enterSound&&(this.enterSound.currentTime=0,this.enterSound.play().catch(e=>console.log("进入音效播放失败:",e)))}stopAllSounds(){this.clickSound&&(this.clickSound.pause(),this.clickSound.currentTime=0),this.enterSound&&(this.enterSound.pause(),this.enterSound.currentTime=0)}setVolume(e){const i=Math.max(0,Math.min(1,e));this.clickSound&&(this.clickSound.volume=i*.7),this.enterSound&&(this.enterSound.volume=i*.8)}}const p_=Ps.getInstance();function gx(){const s=q.useCallback(()=>{p_.playClickSound()},[]),e=q.useCallback(()=>{p_.playEnterSound()},[]);return{playClickSound:s,playEnterSound:e}}function hR(){const s=q.useRef(null),e=q.useRef(null),i=q.useRef(null),a=q.useRef(null),l=q.useRef(null),c=q.useRef(null),f=q.useRef(null),d=q.useRef(null),[p,m]=q.useState(!1),[g,v]=q.useState(!1),[x,E]=q.useState(!1),[b,T]=q.useState(!1),y=sl(),{playClickSound:_,playEnterSound:C}=gx(),N=q.useCallback(()=>{c.current&&f.current&&(c.current.visible=!0,f.current.visible=!0,c.current.position.set(-2.2,0,0),f.current.position.set(2.2,0,0),E(!0))},[]),O=q.useCallback(()=>{if(g)return;v(!0);const z=document.getElementById("warp");z&&z.classList.add("show");const J=setInterval(()=>{a.current&&(a.current.position.z=Math.max(2.2,a.current.position.z-.08))},16);setTimeout(()=>{clearInterval(J),window.dispatchEvent(new CustomEvent("INTRO_FINISHED")),y("/home")},1400)},[g,y]),W=q.useCallback(()=>{p||(m(!0),C(),document.body.classList.add("leaving"),setTimeout(()=>{const z=document.getElementById("hero");z&&(z.style.display="none"),N()},220))},[p,C,N]);q.useEffect(()=>{if(!s.current)return;const z=s.current,J=new mx({canvas:z,antialias:!0,powerPreference:"high-performance"});J.setPixelRatio(Math.min(window.devicePixelRatio,2)),J.setSize(window.innerWidth,window.innerHeight),J.setClearColor(0,1),i.current=J;const L=new nx;e.current=L;const P=new ri(60,window.innerWidth/window.innerHeight,.1,1e3);P.position.set(0,0,6),a.current=P;const Z=420,se=new Float32Array(Z*3);for(let H=0;H<Z;H++){const Y=2.6+Math.random()*1.8,pe=Math.random()*Math.PI*2,Te=Math.acos(2*Math.random()-1);se[H*3+0]=Y*Math.sin(Te)*Math.cos(pe),se[H*3+1]=Y*Math.sin(Te)*Math.sin(pe),se[H*3+2]=Y*Math.cos(Te)}const le=new Ci;le.setAttribute("position",new Yn(se,3));const ve=new xp({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1}),oe=new ix(le,ve);L.add(oe),l.current=oe;const B=new cx(65520,.08);L.add(B);const $=new pu(.5,48,48),te=new ou({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),k=new ou({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),U=new oi($,te),M=new oi($,k);U.visible=!1,M.visible=!1,L.add(U),L.add(M),c.current=U,f.current=M;const w=new lx(65520,.7);w.position.set(-2,2,4),L.add(w);let G=0;const ee=()=>{if(G+=.016,l.current){l.current.rotation.y+=9e-4,l.current.rotation.x=Math.sin(G*.12)*.02;const H=1+Math.sin(G*.5)*.005;l.current.scale.set(H,H,H)}J.render(L,P),d.current=requestAnimationFrame(ee)};ee();const Q=()=>{a.current&&i.current&&(a.current.aspect=window.innerWidth/window.innerHeight,a.current.updateProjectionMatrix(),i.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",Q),()=>{d.current&&cancelAnimationFrame(d.current),window.removeEventListener("resize",Q),i.current&&i.current.dispose()}},[]),q.useEffect(()=>{if(!x||!c.current||!f.current)return;let z;const J=()=>{c.current&&f.current&&(c.current.rotation.y+=.03,f.current.rotation.y-=.03,c.current.position.x+=.06,f.current.position.x-=.06,c.current.position.y=Math.sin((c.current.position.x+2)*1.2)*.06,f.current.position.y=Math.sin((2-f.current.position.x)*1.2)*.06,!b&&Math.abs(c.current.position.x-f.current.position.x)<.15&&(T(!0),X(),setTimeout(()=>{O()},120))),z=requestAnimationFrame(J)};return J(),()=>{z&&cancelAnimationFrame(z)}},[x,b,O]);const X=()=>{const z=document.getElementById("flash");z&&(z.classList.remove("show"),z.offsetWidth,z.classList.add("show"))};return q.useEffect(()=>{const z=()=>{_()};return document.addEventListener("click",z),()=>{document.removeEventListener("click",z)}},[_]),q.useEffect(()=>{const z=J=>{J.key==="Enter"&&W()};return window.addEventListener("keydown",z),()=>{window.removeEventListener("keydown",z)}},[p,W]),I.jsxs("div",{className:"intro-page",children:[I.jsx("canvas",{ref:s,id:"stage"}),I.jsx("div",{className:"sweep"}),I.jsx("div",{className:"vignette"}),I.jsx("div",{className:"center",children:I.jsxs("div",{className:`hero ${p?"leaving":""}`,id:"hero",children:[I.jsx("div",{className:"logo",children:"心战五子棋"}),I.jsx("div",{className:"subtitle",children:"Mind Battle Gobang"}),I.jsx("div",{className:"cta",children:I.jsx("button",{className:"btn",id:"enter",onClick:W,children:"进入棋局"})})]})}),I.jsx("div",{className:`warp ${g?"show":""}`,id:"warp"}),I.jsx("div",{className:"flash",id:"flash"}),I.jsx("style",{children:`
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
      `})]})}var qe=(s=>(s[s.None=0]="None",s[s.Black=1]="Black",s[s.White=2]="White",s))(qe||{}),ft=(s=>(s.NotStarted="not_started",s.Playing="playing",s.BlackWin="black_win",s.WhiteWin="white_win",s.Draw="draw",s.Paused="paused",s))(ft||{}),Rt=(s=>(s.Easy="easy",s.Medium="medium",s.Hard="hard",s.Master="master",s))(Rt||{});function pR({onEnter:s,className:e=""}){const i=q.useRef(null),a=q.useRef(null),l=q.useRef(null),c=q.useRef(null),f=q.useRef(null),d=q.useRef(!1),p=q.useRef(!1),m=q.useRef(0),[g,v]=q.useState(!1),[x,E]=q.useState(!1),[b,T]=q.useState(!1);return q.useEffect(()=>{if(!i.current)return;const y=i.current,_=new mx({canvas:y,antialias:!0,powerPreference:"high-performance"});_.setPixelRatio(Math.min(window.devicePixelRatio,2)),_.setSize(window.innerWidth,window.innerHeight),_.setClearColor(0,1),l.current=_;const C=new nx;a.current=C;const N=new ri(60,window.innerWidth/window.innerHeight,.1,1e3);N.position.set(0,0,6),c.current=N;const O=420,W=new Float32Array(O*3),X=new Float32Array(O*3),z=new Float32Array(O);for(let Q=0;Q<O;Q++){const H=2.6+Math.random()*1.8,Y=Math.random()*Math.PI*2,pe=Math.acos(2*Math.random()-1);W[Q*3+0]=H*Math.sin(pe)*Math.cos(Y),W[Q*3+1]=H*Math.sin(pe)*Math.sin(Y),W[Q*3+2]=H*Math.cos(pe);const Te=.7+Math.random()*.3;X[Q*3+0]=0*Te,X[Q*3+1]=1*Te,X[Q*3+2]=.94*Te,z[Q]=.025+Math.random()*.02}const J=new Ci;J.setAttribute("position",new Yn(W,3)),J.setAttribute("color",new Yn(X,3)),J.setAttribute("size",new Yn(z,1));const L=new xp({color:65520,size:.035,sizeAttenuation:!0,transparent:!0,opacity:.75,depthWrite:!1,vertexColors:!0,blending:hh}),P=new ix(J,L);C.add(P);const Z=new cx(65520,.08);C.add(Z);const se=new pu(.5,48,48),le=new ou({color:460551,roughness:.2,metalness:.1,reflectivity:.5,clearcoat:.6,clearcoatRoughness:.35}),ve=new ou({color:16777215,roughness:.2,metalness:0,reflectivity:.9,clearcoat:.8,clearcoatRoughness:.25}),oe=new oi(se,le),B=new oi(se,ve);oe.visible=!1,B.visible=!1,C.add(oe),C.add(B);const $=new lx(65520,.7);$.position.set(-2,2,4),C.add($);const te=()=>{m.current+=.016,P.rotation.y+=9e-4,P.rotation.x=Math.sin(m.current*.12)*.02,P.rotation.z=Math.sin(m.current*.08)*.01;const Q=1+Math.sin(m.current*.5)*.005;P.scale.set(Q,Q,Q);const H=.75+Math.sin(m.current*.3)*.1;L.opacity=Math.max(.6,Math.min(.9,H)),d.current&&(oe.rotation.y+=.03,B.rotation.y-=.03,oe.position.x+=.06,B.position.x-=.06,oe.position.y=Math.sin((oe.position.x+2)*1.2)*.06,B.position.y=Math.sin((2-B.position.x)*1.2)*.06,!p.current&&Math.abs(oe.position.x-B.position.x)<.15&&(p.current=!0,E(!0),setTimeout(()=>E(!1),220),setTimeout(()=>{T(!0),U()},120))),_.render(C,N),f.current=requestAnimationFrame(te)};te();const k=()=>{oe.visible=!0,B.visible=!0,oe.position.set(-2.2,0,0),B.position.set(2.2,0,0),d.current=!0},U=()=>{const Q=setInterval(()=>{c.current&&(c.current.position.z=Math.max(2.2,c.current.position.z-.08))},16);setTimeout(()=>{clearInterval(Q),s?.()},1100)},M=()=>{v(!0),setTimeout(()=>v(!1),3600)},w=()=>{k()},G=()=>{U()};setTimeout(()=>{M()},600),window.addEventListener("INTRO_ENTER",w),window.addEventListener("startWarp",G);const ee=()=>{c.current&&l.current&&(c.current.aspect=window.innerWidth/window.innerHeight,c.current.updateProjectionMatrix(),l.current.setSize(window.innerWidth,window.innerHeight))};return window.addEventListener("resize",ee),()=>{f.current&&cancelAnimationFrame(f.current),l.current&&l.current.dispose(),window.removeEventListener("INTRO_ENTER",w),window.removeEventListener("startWarp",G),window.removeEventListener("resize",ee)}},[s]),I.jsxs(I.Fragment,{children:[I.jsx("canvas",{ref:i,className:`fixed inset-0 pointer-events-none ${e}`,style:{zIndex:-1}}),g&&I.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"linear-gradient(100deg, rgba(0,255,240,0) 0%, rgba(0,255,240,0.35) 50%, rgba(0,255,240,0) 100%)",transform:"translateX(-120%)",filter:"blur(2px) drop-shadow(0 0 30px #00FFF0)",animation:"sweep 3.6s cubic-bezier(0.65,0.02,0.22,1) 0.6s both",zIndex:1}}),I.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen opacity-60",style:{background:"radial-gradient(60% 60% at 50% 50%, rgba(0,255,240,0.10), transparent 60%)",zIndex:1}}),x&&I.jsx("div",{className:"fixed inset-0 pointer-events-none mix-blend-screen",style:{background:"radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(255,255,255,0) 60%)",animation:"flash 0.22s ease-out forwards",zIndex:2}}),b&&I.jsx("div",{className:"fixed inset-0 pointer-events-none",style:{background:"radial-gradient(circle at 50% 50%, rgba(0,255,240,0.55) 0%, rgba(0,0,0,0.0) 40%, rgba(0,0,0,0.95) 80%)",transform:"scale(0.2)",filter:"blur(10px)",opacity:0,transition:"transform 1s cubic-bezier(0.2,0.7,0.1,1), opacity 1s ease",zIndex:3},onTransitionEnd:()=>{const y=document.querySelector("[data-warp-effect]");y&&(y.style.transform="scale(3.8)",y.style.opacity="1")},"data-warp-effect":!0}),I.jsx("style",{children:`
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
      `})]})}function mR(){const s=q.useRef(null),e=q.useRef(null);return q.useEffect(()=>{const i=()=>{s.current&&(s.current.classList.remove("show"),s.current.offsetWidth,s.current.classList.add("show"))},a=()=>{e.current&&e.current.classList.add("show")};return window.addEventListener("triggerFlash",i),window.addEventListener("startWarp",a),()=>{window.removeEventListener("triggerFlash",i),window.removeEventListener("startWarp",a)}},[]),I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"sweep"}),I.jsx("div",{className:"vignette"}),I.jsx("div",{ref:e,className:"warp"}),I.jsx("div",{ref:s,className:"flash"})]})}function gR(){const s=sl(),[e,i]=q.useState(null),{playClickSound:a}=gx();q.useEffect(()=>{const d=()=>{a()};return document.addEventListener("click",d),()=>{document.removeEventListener("click",d)}},[a]);const l=()=>{if(!e){alert("请先选择难度！");return}window.dispatchEvent(new CustomEvent("INTRO_ENTER"))},c=d=>{i(d)},f=()=>{s("/game",{state:{difficulty:e}})};return I.jsxs("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center p-4 overflow-hidden relative",children:[I.jsx(pR,{onEnter:f}),I.jsx(mR,{}),I.jsxs("div",{className:"relative z-10 max-w-2xl w-full",children:[I.jsxs("div",{className:"text-center mb-8 sm:mb-12 lg:mb-16 animate-slideDown",children:[I.jsx("div",{className:"inline-block mb-4 sm:mb-6",children:I.jsx("div",{className:"text-6xl sm:text-7xl lg:text-8xl mb-2 sm:mb-4 animate-float",children:"⚫⚪"})}),I.jsx("h1",{className:"text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gradient leading-tight px-4",children:"心战五子棋"}),I.jsx("p",{className:"text-lg sm:text-xl md:text-2xl text-gray-300 font-light px-4",children:"你落子，我攻心"})]}),I.jsxs("div",{className:"glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 animate-scaleIn",children:[I.jsxs("div",{className:"mb-6 sm:mb-8",children:[I.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-white",children:"选择难度"}),I.jsxs("div",{className:"grid grid-cols-3 gap-2 sm:gap-3",children:[I.jsx(ch,{level:"简单",emoji:"😊",difficulty:Rt.Easy,selected:e===Rt.Easy,onClick:()=>c(Rt.Easy)}),I.jsx(ch,{level:"中等",emoji:"🤔",difficulty:Rt.Medium,selected:e===Rt.Medium,onClick:()=>c(Rt.Medium)}),I.jsx(ch,{level:"困难",emoji:"😈",difficulty:Rt.Hard,selected:e===Rt.Hard,onClick:()=>c(Rt.Hard)})]})]}),I.jsx("button",{onClick:l,className:`
              w-full py-4 sm:py-5 lg:py-6 rounded-xl sm:rounded-2xl font-bold text-lg sm:text-xl lg:text-2xl
              transition-all duration-300 transform
              ${e?"bg-gradient-to-r from-neon-purple to-neon-cyan text-white hover:scale-105 hover:shadow-2xl hover:shadow-neon-purple/50 active:scale-95":"bg-gray-700 text-gray-500 cursor-not-allowed"}
            `,disabled:!e,children:e?"🎮 开始对弈":"👆 请先选择难度"}),e!==null&&I.jsx("p",{className:"text-center mt-4 text-sm text-gray-400 animate-fadeIn",children:vR(e)})]}),I.jsx("div",{className:"mt-6 sm:mt-8 text-center px-4",children:I.jsx("p",{className:"text-gray-500 text-xs sm:text-sm",children:"每一步棋后，AI 都会预测你的意图 · 你能骗过它吗？"})})]})]})}function ch({level:s,emoji:e,selected:i,onClick:a}){return I.jsxs("button",{onClick:a,className:`
        relative p-3 sm:p-4 lg:p-6 rounded-lg sm:rounded-xl border-2 transition-all duration-300 transform
        ${i?"border-neon-cyan bg-neon-cyan/10 scale-105 shadow-lg shadow-neon-cyan/50":"border-gray-700 bg-space-dark hover:border-gray-500 hover:scale-105"}
      `,children:[I.jsx("div",{className:"text-2xl sm:text-3xl lg:text-4xl mb-1 sm:mb-2",children:e}),I.jsx("div",{className:`font-bold text-sm sm:text-base ${i?"text-neon-cyan":"text-gray-300"}`,children:s}),i&&I.jsx("div",{className:"absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-neon-cyan rounded-full flex items-center justify-center animate-scaleIn",children:I.jsx("span",{className:"text-white text-xs sm:text-sm",children:"✓"})})]})}function vR(s){return{[Rt.Easy]:"AI 会告诉你它的真实想法，适合入门",[Rt.Medium]:"AI 偶尔会误导你，需要保持警惕",[Rt.Hard]:"AI 会设置心理陷阱，极具挑战",[Rt.Master]:"AI 心理战大师，预测准确率成谜"}[s]||""}const $e=15,Ko=5,_R=3,Bs=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O"],Fs=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15"],vx=[{row:3,col:3},{row:3,col:11},{row:7,col:7},{row:11,col:3},{row:11,col:11}],_x=[{dr:0,dc:1},{dr:1,dc:0},{dr:1,dc:1},{dr:1,dc:-1}],xR={easy:500,medium:1500,hard:2e3,master:2e3},Qa={FIVE:1e5,LIVE_FOUR:1e4,SLEEP_FOUR:1e3,LIVE_THREE:100,SLEEP_THREE:10,LIVE_TWO:10,SLEEP_TWO:1};function yR(){const s=navigator.userAgent,e=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i,i=window.innerWidth<=768,a="ontouchstart"in window||navigator.maxTouchPoints>0;return e.test(s)||i&&a}function SR({board:s,onCellClick:e,winningLine:i,lastMove:a,disabled:l=!1,predictedPositions:c=[]}){const f=q.useRef(null),[d,p]=q.useState(null),[m,g]=q.useState(40),[v,x]=q.useState(630),E=()=>{const k=window.innerWidth;return k<640?Math.min(32,(k-80)/$e):k<1024?35:40},b=m,T=b*1.2,y=v;q.useEffect(()=>{const k=()=>{const U=E(),M=U*1.2;g(U),x($e*U+M*2)};return k(),window.addEventListener("resize",k),()=>window.removeEventListener("resize",k)},[]),q.useEffect(()=>{_()},[s,i,a,d,c,v,m]);const _=()=>{const k=f.current;if(!k)return;const U=k.getContext("2d");U&&(U.clearRect(0,0,y,y),C(U),N(U),O(U),W(U),X(U),a&&J(U,a),i&&L(U,i),c.length>0&&Z(U,c),d&&!l&&se(U,d))},C=k=>{k.fillStyle="#1a1e37",k.fillRect(0,0,y,y),k.strokeStyle="#a855f7",k.lineWidth=2,k.strokeRect(T-10,T-10,$e*b+20,$e*b+20)},N=k=>{k.strokeStyle="#4a5568",k.lineWidth=1;for(let U=0;U<$e;U++){const M=T+U*b;k.beginPath(),k.moveTo(T,M),k.lineTo(T+($e-1)*b,M),k.stroke()}for(let U=0;U<$e;U++){const M=T+U*b;k.beginPath(),k.moveTo(M,T),k.lineTo(M,T+($e-1)*b),k.stroke()}},O=k=>{k.fillStyle="#a855f7";for(const U of vx){const M=T+U.col*b,w=T+U.row*b;k.beginPath(),k.arc(M,w,4,0,Math.PI*2),k.fill()}},W=k=>{const U=window.innerWidth;let M=12;U<640?M=10:U<1024?M=11:M=12,k.fillStyle="#9ca3af",k.font=`${M}px monospace`,k.textAlign="center",k.textBaseline="middle";const w=T-25,G=T+$e*b+20,ee=T-20,Q=T+$e*b+15;for(let H=0;H<$e;H++){const Y=T+H*b;k.fillText(Bs[H],Y,w),k.fillText(Bs[H],Y,G)}k.textAlign="right";for(let H=0;H<$e;H++){const Y=T+H*b;k.fillText(Fs[H],ee,Y)}k.textAlign="left";for(let H=0;H<$e;H++){const Y=T+H*b;k.fillText(Fs[H],Q,Y)}},X=k=>{for(let U=0;U<$e;U++)for(let M=0;M<$e;M++){const w=s[U][M];w!==qe.None&&z(k,{row:U,col:M},w)}},z=(k,U,M)=>{const w=T+U.col*b,G=T+U.row*b,ee=b*.4;if(k.shadowColor="rgba(0, 0, 0, 0.5)",k.shadowBlur=8,k.shadowOffsetX=2,k.shadowOffsetY=2,k.beginPath(),k.arc(w,G,ee,0,Math.PI*2),M===qe.Black){const Q=k.createRadialGradient(w-5,G-5,0,w,G,ee);Q.addColorStop(0,"#2a2a2a"),Q.addColorStop(1,"#0a0a0a"),k.fillStyle=Q}else{const Q=k.createRadialGradient(w-5,G-5,0,w,G,ee);Q.addColorStop(0,"#ffffff"),Q.addColorStop(1,"#e5e5e5"),k.fillStyle=Q}k.fill(),k.shadowColor="transparent",k.shadowBlur=0,k.shadowOffsetX=0,k.shadowOffsetY=0},J=(k,U)=>{const M=T+U.col*b,w=T+U.row*b;k.strokeStyle="#06b6d4",k.lineWidth=3,k.beginPath(),k.arc(M,w,b*.2,0,Math.PI*2),k.stroke()},L=(k,U)=>{if(U.positions.length<2)return;const M=U.positions[0],w=U.positions[U.positions.length-1],G=T+M.col*b,ee=T+M.row*b,Q=T+w.col*b,H=T+w.row*b;k.strokeStyle="#a855f7",k.lineWidth=5,k.lineCap="round",k.shadowColor="#a855f7",k.shadowBlur=15,k.beginPath(),k.moveTo(G,ee),k.lineTo(Q,H),k.stroke(),k.shadowColor="transparent",k.shadowBlur=0},P=k=>{if(k.length<2)return null;const U=Bs.indexOf(k[0].toUpperCase()),M=k.substring(1),w=Fs.indexOf(M);return U===-1||w===-1?null:{row:w,col:U}},Z=(k,U)=>{U.forEach((M,w)=>{const G=P(M);if(!G||s[G.row][G.col]!==qe.None)return;const ee=T+G.col*b,Q=T+G.row*b,H=["#06b6d4","#a855f7","#f59e0b"],Y=H[w%H.length],pe=b*.25-w*2;k.save(),k.shadowColor=Y,k.shadowBlur=15,k.fillStyle=Y,k.strokeStyle=Y,k.lineWidth=2;const Te=8,Ne=pe,ke=pe*.5;k.beginPath();for(let lt=0;lt<Te*2;lt++){const V=Math.PI*lt/Te-Math.PI/2,Ge=lt%2===0?Ne:ke,We=ee+Math.cos(V)*Ge,Xe=Q+Math.sin(V)*Ge;lt===0?k.moveTo(We,Xe):k.lineTo(We,Xe)}k.closePath(),k.fill(),k.shadowBlur=0,k.fillStyle="#1a1e37",k.font="bold 12px Arial",k.textAlign="center",k.textBaseline="middle",k.fillText((w+1).toString(),ee,Q),k.restore()})},se=(k,U)=>{if(s[U.row][U.col]!==qe.None)return;const M=T+U.col*b,w=T+U.row*b,G=b*.4;k.fillStyle="rgba(6, 182, 212, 0.3)",k.beginPath(),k.arc(M,w,G,0,Math.PI*2),k.fill()},le=k=>{if(l){p(null);return}const U=f.current;if(!U)return;const M=U.getBoundingClientRect(),w=k.clientX-M.left,G=k.clientY-M.top,ee=Math.round((w-T)/b),Q=Math.round((G-T)/b);Q>=0&&Q<$e&&ee>=0&&ee<$e?p({row:Q,col:ee}):p(null)},ve=()=>{p(null)},oe=k=>{if(l||!e)return;const U=f.current;if(!U)return;const M=U.getBoundingClientRect(),w=k.clientX-M.left,G=k.clientY-M.top,ee=Math.round((w-T)/b),Q=Math.round((G-T)/b);Q>=0&&Q<$e&&ee>=0&&ee<$e&&s[Q][ee]===qe.None&&e({row:Q,col:ee})},B=k=>{if(l||!e)return;k.preventDefault();const U=f.current;if(!U)return;const M=k.touches[0],w=U.getBoundingClientRect(),G=M.clientX-w.left,ee=M.clientY-w.top,Q=Math.round((G-T)/b),H=Math.round((ee-T)/b);H>=0&&H<$e&&Q>=0&&Q<$e&&(p({row:H,col:Q}),s[H][Q]===qe.None&&e({row:H,col:Q}))},$=k=>{if(l)return;k.preventDefault();const U=f.current;if(!U)return;const M=k.touches[0],w=U.getBoundingClientRect(),G=M.clientX-w.left,ee=M.clientY-w.top,Q=Math.round((G-T)/b),H=Math.round((ee-T)/b);H>=0&&H<$e&&Q>=0&&Q<$e?p({row:H,col:Q}):p(null)},te=()=>{p(null)};return I.jsx("canvas",{ref:f,width:y,height:y,className:`rounded-lg ${l?"cursor-not-allowed opacity-75":"cursor-pointer"} max-w-full`,onClick:oe,onMouseMove:le,onMouseLeave:ve,onTouchStart:B,onTouchMove:$,onTouchEnd:te,style:{touchAction:"none"}})}function uh(s,e=30,i=!0){const[a,l]=q.useState(""),[c,f]=q.useState(!1),d=q.useRef(null),p=q.useRef(0);return q.useEffect(()=>{if(!i){l(s),f(!0);return}if(l(""),f(!1),p.current=0,d.current&&clearTimeout(d.current),!s){f(!0);return}const g=()=>{p.current<s.length?(l(s.substring(0,p.current+1)),p.current++,d.current=window.setTimeout(g,e)):f(!0)};return g(),()=>{d.current&&clearTimeout(d.current)}},[s,e,i]),{displayedText:a,isComplete:c,skip:()=>{d.current&&clearTimeout(d.current),l(s),f(!0),p.current=s.length}}}function xx({prediction:s,isAnalyzing:e,isStreaming:i=!1,streamingText:a=""}){const l=uh(s?.playerIntent||"",30,!e&&!i),c=uh(s?.psychologicalHint||"",25,!e&&!i),f=uh(s?.aiSuggestion||"",30,!e&&!i);if(!s&&!e)return I.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-gray-700",children:I.jsxs("div",{className:"text-center text-gray-400",children:[I.jsx("div",{className:"text-4xl mb-3",children:"🧠"}),I.jsx("div",{className:"text-sm font-semibold",children:"下一步棋后"}),I.jsx("div",{className:"text-sm",children:"AI 将分析你的心理"})]})});if(e)return I.jsx("div",{className:"glass-effect rounded-xl p-6 border-2 border-neon-cyan animate-pulse",children:I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-4xl mb-3 animate-bounce",children:"🤔"}),I.jsx("div",{className:"text-neon-cyan font-semibold mb-2",children:i?"AI 正在思考...":"AI 正在分析..."}),I.jsx("div",{className:"text-sm text-gray-400",children:i?"实时生成分析中":"读取你的心理中"}),I.jsxs("div",{className:"mt-4 flex justify-center gap-1",children:[I.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),I.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-ping",style:{animationDelay:"0.2s"}}),I.jsx("div",{className:"w-2 h-2 bg-neon-pink rounded-full animate-ping",style:{animationDelay:"0.4s"}})]}),i&&a&&I.jsxs("div",{className:"mt-4 p-3 bg-space-dark rounded-lg border border-gray-700 text-left",children:[I.jsx("div",{className:"text-xs text-gray-400 mb-1",children:"💭 实时分析"}),I.jsxs("div",{className:"text-sm text-white",children:[a,I.jsx("span",{className:"animate-pulse",children:"|"})]})]})]})});if(!s)return null;const d=()=>I.jsxs("div",{className:"flex gap-1",children:[I.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce"}),I.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce",style:{animationDelay:"0.1s"}}),I.jsx("div",{className:"w-2 h-2 bg-neon-cyan rounded-full animate-bounce",style:{animationDelay:"0.2s"}})]});return I.jsxs("div",{className:"glass-effect rounded-xl p-6 space-y-4 animate-fadeIn border-2 border-neon-purple shadow-lg shadow-neon-purple/20",children:[I.jsxs("div",{className:"flex items-center justify-between border-b border-gray-700 pb-3",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("span",{className:"text-2xl animate-pulse",children:"🧠"}),I.jsx("span",{className:"text-lg font-bold text-white",children:"心理分析"})]}),s.isMisleading&&I.jsx("div",{className:"text-xs px-2 py-1 bg-red-500/20 border border-red-500 rounded text-red-400 animate-pulse",children:"⚠️ 可能误导"})]}),I.jsxs("div",{className:"p-3 bg-neon-purple/10 border border-neon-purple rounded-lg",children:[I.jsxs("div",{className:"flex items-center justify-between mb-1",children:[I.jsx("div",{className:"text-xs text-gray-400",children:"🎭 心理战"}),s.hintLoading&&I.jsx(d,{})]}),s.psychologicalHint?I.jsxs("div",{className:"text-sm text-neon-purple",children:[c.displayedText,!c.isComplete&&I.jsx("span",{className:"animate-pulse",children:"|"})]}):I.jsx("div",{className:"text-sm text-gray-500",children:"等待AI调侃中..."})]}),I.jsxs("div",{children:[I.jsxs("div",{className:"flex items-center justify-between mb-2",children:[I.jsx("div",{className:"text-xs text-gray-400",children:"🎯 AI 猜测你的意图"}),s.intentLoading&&I.jsx(d,{})]}),I.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:s.playerIntent?I.jsxs(I.Fragment,{children:[I.jsxs("div",{className:"text-sm text-white",children:[l.displayedText,!l.isComplete&&I.jsx("span",{className:"animate-pulse",children:"|"})]}),I.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[I.jsx("div",{className:"text-xs text-gray-500",children:"置信度:"}),I.jsx("div",{className:"flex-1 h-2 bg-gray-700 rounded-full overflow-hidden",children:I.jsx("div",{className:"h-full bg-gradient-to-r from-neon-cyan to-neon-purple transition-all duration-500",style:{width:`${s.confidence*100}%`}})}),I.jsxs("div",{className:"text-xs text-neon-cyan font-bold",children:[Math.round(s.confidence*100),"%"]})]})]}):I.jsx("div",{className:"text-sm text-gray-500",children:"AI正在分析你的意图..."})})]}),I.jsxs("div",{children:[I.jsxs("div",{className:"flex items-center justify-between mb-2",children:[I.jsx("div",{className:"text-xs text-gray-400",children:"🔮 AI 预测你接下来会"}),s.movesLoading&&I.jsx(d,{})]}),s.predictedMoves.length>0?I.jsx("div",{className:"space-y-2",children:s.predictedMoves.slice(0,3).map((p,m)=>I.jsx("div",{className:"p-2 bg-space-dark rounded border border-gray-700 hover:border-neon-cyan transition-colors",children:I.jsxs("div",{className:"flex items-start gap-2",children:[I.jsx("div",{className:"flex-shrink-0 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan flex items-center justify-center text-xs text-neon-cyan font-bold",children:m+1}),I.jsxs("div",{className:"flex-1",children:[I.jsx("div",{className:"text-sm text-white font-semibold",children:p.position}),I.jsx("div",{className:"text-xs text-gray-400 mt-0.5",children:p.reason})]})]})},m))}):I.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:I.jsx("div",{className:"text-sm text-gray-500",children:"AI正在预测你的后续走法..."})})]}),I.jsxs("div",{className:"pt-3 border-t border-gray-700",children:[I.jsxs("div",{className:"flex items-center justify-between mb-2",children:[I.jsxs("div",{className:"text-xs text-gray-400",children:["💡 AI ",s.isMisleading?"故意":"真诚","建议"]}),s.suggestionLoading&&I.jsx(d,{})]}),s.aiSuggestion?I.jsx("div",{className:`p-3 rounded-lg border ${s.isMisleading?"bg-red-500/10 border-red-500/50 text-red-300":"bg-green-500/10 border-green-500/50 text-green-300"}`,children:I.jsxs("div",{className:"text-sm",children:[f.displayedText,!f.isComplete&&I.jsx("span",{className:"animate-pulse",children:"|"})]})}):I.jsx("div",{className:"p-3 bg-space-dark rounded-lg border border-gray-700",children:I.jsx("div",{className:"text-sm text-gray-500",children:"AI正在思考建议..."})})]})]})}function yx(){const s=q.useRef(null),e=q.useRef([]),i=q.useRef();return q.useEffect(()=>{const a=s.current;if(!a)return;const l=a.getContext("2d");if(!l)return;const c=()=>{a.width=window.innerWidth,a.height=window.innerHeight,f()},f=()=>{const p=Math.floor(a.width*a.height/8e3);e.current=[];for(let m=0;m<p;m++)e.current.push({x:Math.random()*a.width,y:Math.random()*a.height,radius:Math.random()*2+.5,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,opacity:Math.random()*.5+.3})},d=()=>{l.fillStyle="rgba(10, 14, 39, 0.1)",l.fillRect(0,0,a.width,a.height),e.current.forEach(p=>{if(p.x+=p.vx,p.y+=p.vy,(p.x<0||p.x>a.width)&&(p.vx*=-1),(p.y<0||p.y>a.height)&&(p.vy*=-1),p.opacity+=(Math.random()-.5)*.02,p.opacity=Math.max(.1,Math.min(1,p.opacity)),l.beginPath(),l.arc(p.x,p.y,p.radius,0,Math.PI*2),l.fillStyle=`rgba(255, 255, 255, ${p.opacity})`,l.fill(),p.radius>1.5){const m=l.createRadialGradient(p.x,p.y,0,p.x,p.y,p.radius*3);m.addColorStop(0,`rgba(168, 85, 247, ${p.opacity*.3})`),m.addColorStop(.5,`rgba(6, 182, 212, ${p.opacity*.1})`),m.addColorStop(1,"rgba(255, 255, 255, 0)"),l.fillStyle=m,l.fillRect(p.x-p.radius*3,p.y-p.radius*3,p.radius*6,p.radius*6)}}),i.current=requestAnimationFrame(d)};return c(),d(),window.addEventListener("resize",c),()=>{window.removeEventListener("resize",c),i.current&&cancelAnimationFrame(i.current)}},[]),I.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none",style:{zIndex:0}})}var hl={};(function s(e,i,a,l){var c=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),f=typeof Path2D=="function"&&typeof DOMMatrix=="function",d=(function(){if(!e.OffscreenCanvas)return!1;var U=new OffscreenCanvas(1,1),M=U.getContext("2d");M.fillRect(0,0,1,1);var w=U.transferToImageBitmap();try{M.createPattern(w,"no-repeat")}catch{return!1}return!0})();function p(){}function m(U){var M=i.exports.Promise,w=M!==void 0?M:e.Promise;return typeof w=="function"?new w(U):(U(p,p),null)}var g=(function(U,M){return{transform:function(w){if(U)return w;if(M.has(w))return M.get(w);var G=new OffscreenCanvas(w.width,w.height),ee=G.getContext("2d");return ee.drawImage(w,0,0),M.set(w,G),G},clear:function(){M.clear()}}})(d,new Map),v=(function(){var U=Math.floor(16.666666666666668),M,w,G={},ee=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(M=function(Q){var H=Math.random();return G[H]=requestAnimationFrame(function Y(pe){ee===pe||ee+U-1<pe?(ee=pe,delete G[H],Q()):G[H]=requestAnimationFrame(Y)}),H},w=function(Q){G[Q]&&cancelAnimationFrame(G[Q])}):(M=function(Q){return setTimeout(Q,U)},w=function(Q){return clearTimeout(Q)}),{frame:M,cancel:w}})(),x=(function(){var U,M,w={};function G(ee){function Q(H,Y){ee.postMessage({options:H||{},callback:Y})}ee.init=function(Y){var pe=Y.transferControlToOffscreen();ee.postMessage({canvas:pe},[pe])},ee.fire=function(Y,pe,Te){if(M)return Q(Y,null),M;var Ne=Math.random().toString(36).slice(2);return M=m(function(ke){function lt(V){V.data.callback===Ne&&(delete w[Ne],ee.removeEventListener("message",lt),M=null,g.clear(),Te(),ke())}ee.addEventListener("message",lt),Q(Y,Ne),w[Ne]=lt.bind(null,{data:{callback:Ne}})}),M},ee.reset=function(){ee.postMessage({reset:!0});for(var Y in w)w[Y](),delete w[Y]}}return function(){if(U)return U;if(!a&&c){var ee=["var CONFETTI, SIZE = {}, module = {};","("+s.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{U=new Worker(URL.createObjectURL(new Blob([ee])))}catch(Q){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",Q),null}G(U)}return U}})(),E={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function b(U,M){return M?M(U):U}function T(U){return U!=null}function y(U,M,w){return b(U&&T(U[M])?U[M]:E[M],w)}function _(U){return U<0?0:Math.floor(U)}function C(U,M){return Math.floor(Math.random()*(M-U))+U}function N(U){return parseInt(U,16)}function O(U){return U.map(W)}function W(U){var M=String(U).replace(/[^0-9a-f]/gi,"");return M.length<6&&(M=M[0]+M[0]+M[1]+M[1]+M[2]+M[2]),{r:N(M.substring(0,2)),g:N(M.substring(2,4)),b:N(M.substring(4,6))}}function X(U){var M=y(U,"origin",Object);return M.x=y(M,"x",Number),M.y=y(M,"y",Number),M}function z(U){U.width=document.documentElement.clientWidth,U.height=document.documentElement.clientHeight}function J(U){var M=U.getBoundingClientRect();U.width=M.width,U.height=M.height}function L(U){var M=document.createElement("canvas");return M.style.position="fixed",M.style.top="0px",M.style.left="0px",M.style.pointerEvents="none",M.style.zIndex=U,M}function P(U,M,w,G,ee,Q,H,Y,pe){U.save(),U.translate(M,w),U.rotate(Q),U.scale(G,ee),U.arc(0,0,1,H,Y,pe),U.restore()}function Z(U){var M=U.angle*(Math.PI/180),w=U.spread*(Math.PI/180);return{x:U.x,y:U.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:U.startVelocity*.5+Math.random()*U.startVelocity,angle2D:-M+(.5*w-Math.random()*w),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:U.color,shape:U.shape,tick:0,totalTicks:U.ticks,decay:U.decay,drift:U.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:U.gravity*3,ovalScalar:.6,scalar:U.scalar,flat:U.flat}}function se(U,M){M.x+=Math.cos(M.angle2D)*M.velocity+M.drift,M.y+=Math.sin(M.angle2D)*M.velocity+M.gravity,M.velocity*=M.decay,M.flat?(M.wobble=0,M.wobbleX=M.x+10*M.scalar,M.wobbleY=M.y+10*M.scalar,M.tiltSin=0,M.tiltCos=0,M.random=1):(M.wobble+=M.wobbleSpeed,M.wobbleX=M.x+10*M.scalar*Math.cos(M.wobble),M.wobbleY=M.y+10*M.scalar*Math.sin(M.wobble),M.tiltAngle+=.1,M.tiltSin=Math.sin(M.tiltAngle),M.tiltCos=Math.cos(M.tiltAngle),M.random=Math.random()+2);var w=M.tick++/M.totalTicks,G=M.x+M.random*M.tiltCos,ee=M.y+M.random*M.tiltSin,Q=M.wobbleX+M.random*M.tiltCos,H=M.wobbleY+M.random*M.tiltSin;if(U.fillStyle="rgba("+M.color.r+", "+M.color.g+", "+M.color.b+", "+(1-w)+")",U.beginPath(),f&&M.shape.type==="path"&&typeof M.shape.path=="string"&&Array.isArray(M.shape.matrix))U.fill($(M.shape.path,M.shape.matrix,M.x,M.y,Math.abs(Q-G)*.1,Math.abs(H-ee)*.1,Math.PI/10*M.wobble));else if(M.shape.type==="bitmap"){var Y=Math.PI/10*M.wobble,pe=Math.abs(Q-G)*.1,Te=Math.abs(H-ee)*.1,Ne=M.shape.bitmap.width*M.scalar,ke=M.shape.bitmap.height*M.scalar,lt=new DOMMatrix([Math.cos(Y)*pe,Math.sin(Y)*pe,-Math.sin(Y)*Te,Math.cos(Y)*Te,M.x,M.y]);lt.multiplySelf(new DOMMatrix(M.shape.matrix));var V=U.createPattern(g.transform(M.shape.bitmap),"no-repeat");V.setTransform(lt),U.globalAlpha=1-w,U.fillStyle=V,U.fillRect(M.x-Ne/2,M.y-ke/2,Ne,ke),U.globalAlpha=1}else if(M.shape==="circle")U.ellipse?U.ellipse(M.x,M.y,Math.abs(Q-G)*M.ovalScalar,Math.abs(H-ee)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI):P(U,M.x,M.y,Math.abs(Q-G)*M.ovalScalar,Math.abs(H-ee)*M.ovalScalar,Math.PI/10*M.wobble,0,2*Math.PI);else if(M.shape==="star")for(var Ge=Math.PI/2*3,We=4*M.scalar,Xe=8*M.scalar,Pe=M.x,_t=M.y,Fe=5,st=Math.PI/Fe;Fe--;)Pe=M.x+Math.cos(Ge)*Xe,_t=M.y+Math.sin(Ge)*Xe,U.lineTo(Pe,_t),Ge+=st,Pe=M.x+Math.cos(Ge)*We,_t=M.y+Math.sin(Ge)*We,U.lineTo(Pe,_t),Ge+=st;else U.moveTo(Math.floor(M.x),Math.floor(M.y)),U.lineTo(Math.floor(M.wobbleX),Math.floor(ee)),U.lineTo(Math.floor(Q),Math.floor(H)),U.lineTo(Math.floor(G),Math.floor(M.wobbleY));return U.closePath(),U.fill(),M.tick<M.totalTicks}function le(U,M,w,G,ee){var Q=M.slice(),H=U.getContext("2d"),Y,pe,Te=m(function(Ne){function ke(){Y=pe=null,H.clearRect(0,0,G.width,G.height),g.clear(),ee(),Ne()}function lt(){a&&!(G.width===l.width&&G.height===l.height)&&(G.width=U.width=l.width,G.height=U.height=l.height),!G.width&&!G.height&&(w(U),G.width=U.width,G.height=U.height),H.clearRect(0,0,G.width,G.height),Q=Q.filter(function(V){return se(H,V)}),Q.length?Y=v.frame(lt):ke()}Y=v.frame(lt),pe=ke});return{addFettis:function(Ne){return Q=Q.concat(Ne),Te},canvas:U,promise:Te,reset:function(){Y&&v.cancel(Y),pe&&pe()}}}function ve(U,M){var w=!U,G=!!y(M||{},"resize"),ee=!1,Q=y(M,"disableForReducedMotion",Boolean),H=c&&!!y(M||{},"useWorker"),Y=H?x():null,pe=w?z:J,Te=U&&Y?!!U.__confetti_initialized:!1,Ne=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,ke;function lt(Ge,We,Xe){for(var Pe=y(Ge,"particleCount",_),_t=y(Ge,"angle",Number),Fe=y(Ge,"spread",Number),st=y(Ge,"startVelocity",Number),$t=y(Ge,"decay",Number),Kt=y(Ge,"gravity",Number),F=y(Ge,"drift",Number),A=y(Ge,"colors",O),ce=y(Ge,"ticks",Number),Se=y(Ge,"shapes"),we=y(Ge,"scalar"),xe=!!y(Ge,"flat"),et=X(Ge),Ue=Pe,Ke=[],tt=U.width*et.x,Ce=U.height*et.y;Ue--;)Ke.push(Z({x:tt,y:Ce,angle:_t,spread:Fe,startVelocity:st,color:A[Ue%A.length],shape:Se[C(0,Se.length)],ticks:ce,decay:$t,gravity:Kt,drift:F,scalar:we,flat:xe}));return ke?ke.addFettis(Ke):(ke=le(U,Ke,pe,We,Xe),ke.promise)}function V(Ge){var We=Q||y(Ge,"disableForReducedMotion",Boolean),Xe=y(Ge,"zIndex",Number);if(We&&Ne)return m(function(st){st()});w&&ke?U=ke.canvas:w&&!U&&(U=L(Xe),document.body.appendChild(U)),G&&!Te&&pe(U);var Pe={width:U.width,height:U.height};Y&&!Te&&Y.init(U),Te=!0,Y&&(U.__confetti_initialized=!0);function _t(){if(Y){var st={getBoundingClientRect:function(){if(!w)return U.getBoundingClientRect()}};pe(st),Y.postMessage({resize:{width:st.width,height:st.height}});return}Pe.width=Pe.height=null}function Fe(){ke=null,G&&(ee=!1,e.removeEventListener("resize",_t)),w&&U&&(document.body.contains(U)&&document.body.removeChild(U),U=null,Te=!1)}return G&&!ee&&(ee=!0,e.addEventListener("resize",_t,!1)),Y?Y.fire(Ge,Pe,Fe):lt(Ge,Pe,Fe)}return V.reset=function(){Y&&Y.reset(),ke&&ke.reset()},V}var oe;function B(){return oe||(oe=ve(null,{useWorker:!0,resize:!0})),oe}function $(U,M,w,G,ee,Q,H){var Y=new Path2D(U),pe=new Path2D;pe.addPath(Y,new DOMMatrix(M));var Te=new Path2D;return Te.addPath(pe,new DOMMatrix([Math.cos(H)*ee,Math.sin(H)*ee,-Math.sin(H)*Q,Math.cos(H)*Q,w,G])),Te}function te(U){if(!f)throw new Error("path confetti are not supported in this browser");var M,w;typeof U=="string"?M=U:(M=U.path,w=U.matrix);var G=new Path2D(M),ee=document.createElement("canvas"),Q=ee.getContext("2d");if(!w){for(var H=1e3,Y=H,pe=H,Te=0,Ne=0,ke,lt,V=0;V<H;V+=2)for(var Ge=0;Ge<H;Ge+=2)Q.isPointInPath(G,V,Ge,"nonzero")&&(Y=Math.min(Y,V),pe=Math.min(pe,Ge),Te=Math.max(Te,V),Ne=Math.max(Ne,Ge));ke=Te-Y,lt=Ne-pe;var We=10,Xe=Math.min(We/ke,We/lt);w=[Xe,0,0,Xe,-Math.round(ke/2+Y)*Xe,-Math.round(lt/2+pe)*Xe]}return{type:"path",path:M,matrix:w}}function k(U){var M,w=1,G="#000000",ee='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof U=="string"?M=U:(M=U.text,w="scalar"in U?U.scalar:w,ee="fontFamily"in U?U.fontFamily:ee,G="color"in U?U.color:G);var Q=10*w,H=""+Q+"px "+ee,Y=new OffscreenCanvas(Q,Q),pe=Y.getContext("2d");pe.font=H;var Te=pe.measureText(M),Ne=Math.ceil(Te.actualBoundingBoxRight+Te.actualBoundingBoxLeft),ke=Math.ceil(Te.actualBoundingBoxAscent+Te.actualBoundingBoxDescent),lt=2,V=Te.actualBoundingBoxLeft+lt,Ge=Te.actualBoundingBoxAscent+lt;Ne+=lt+lt,ke+=lt+lt,Y=new OffscreenCanvas(Ne,ke),pe=Y.getContext("2d"),pe.font=H,pe.fillStyle=G,pe.fillText(M,V,Ge);var We=1/w;return{type:"bitmap",bitmap:Y.transferToImageBitmap(),matrix:[We,0,0,We,-Ne*We/2,-ke*We/2]}}i.exports=function(){return B().apply(this,arguments)},i.exports.reset=function(){B().reset()},i.exports.create=ve,i.exports.shapeFromPath=te,i.exports.shapeFromText=k})((function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}})(),hl,!1);const Qo=hl.exports;hl.exports.create;function Sx({type:s,onComplete:e}){const[i,a]=q.useState(!1),[l,c]=q.useState(null);return q.useEffect(()=>{s&&s!==l&&(c(s),a(!0),s==="miss"&&Qo({particleCount:50,spread:70,origin:{x:.5,y:.85},colors:["#a855f7","#06b6d4","#ec4899"],startVelocity:30,gravity:.8}),setTimeout(()=>{a(!1),e?.()},1e3))},[s,l,e]),!i||!s?null:I.jsx("div",{className:"fixed bottom-10 left-1/2 transform -translate-x-1/2 z-50 pointer-events-none",children:I.jsx("div",{className:`
          flex items-center gap-3 px-6 py-3 rounded-xl
          ${s==="hit"?"bg-neon-purple/30 border-neon-purple":"bg-neon-cyan/30 border-neon-cyan"}
          border-2 backdrop-blur-md
          animate-slideUp shadow-2xl
        `,children:s==="hit"?I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"text-3xl",children:"🎯"}),I.jsx("div",{children:I.jsx("div",{className:"text-lg font-bold text-neon-purple",children:"AI 读懂了你"})})]}):I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"text-3xl",children:"💥"}),I.jsxs("div",{children:[I.jsx("div",{className:"text-lg font-bold text-neon-cyan",children:"打破预测！"}),I.jsx("div",{className:"text-sm text-yellow-400 font-bold",children:"+10 智慧点 ✨"})]})]})})})}function Mx({isVisible:s,isPlayerWin:e}){return q.useEffect(()=>{if(s)if(e){const a=Date.now()+3e3,l=()=>{Qo({particleCount:7,angle:60,spread:55,origin:{x:0},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Qo({particleCount:7,angle:120,spread:55,origin:{x:1},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]}),Date.now()<a&&requestAnimationFrame(l)};l(),setTimeout(()=>{Qo({particleCount:150,spread:120,origin:{y:.6},colors:["#a855f7","#06b6d4","#ec4899","#fbbf24"]})},500)}else Qo({particleCount:50,spread:70,origin:{y:.6},colors:["#666","#888","#aaa"]})},[s,e]),s?I.jsx("div",{className:"fixed inset-0 z-40 pointer-events-none flex items-center justify-center",children:I.jsx("div",{className:"text-center animate-scaleIn",children:e?I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"text-9xl mb-4 animate-bounce",children:"🎉"}),I.jsx("div",{className:"text-6xl font-bold text-gradient mb-4",children:"胜利！"}),I.jsx("div",{className:"text-2xl text-neon-cyan",children:"刚走神想别的了，这局不算，重来啊"})]}):I.jsxs(I.Fragment,{children:[I.jsx("div",{className:"text-9xl mb-4",children:"💔"}),I.jsx("div",{className:"text-6xl font-bold text-gray-400 mb-4",children:"失败"}),I.jsx("div",{className:"text-2xl text-gray-500",children:"赢了，承让（才怪）"})]})})}):null}class Or{static checkWin(e,i){const a=e[i.row][i.col];if(a===qe.None)return null;for(const l of _x){const c=this.checkDirection(e,i,l,a);if(c)return c}return null}static checkDirection(e,i,a,l){const c=[i];let f=1,d=i.row+a.dr,p=i.col+a.dc;for(;this.isInBounds(d,p)&&e[d][p]===l&&f<Ko;)c.push({row:d,col:p}),f++,d+=a.dr,p+=a.dc;for(d=i.row-a.dr,p=i.col-a.dc;this.isInBounds(d,p)&&e[d][p]===l&&f<Ko;)c.unshift({row:d,col:p}),f++,d-=a.dr,p-=a.dc;return f>=Ko?{positions:c.slice(0,Ko),player:l}:null}static isInBounds(e,i){return e>=0&&e<$e&&i>=0&&i<$e}static isBoardFull(e){for(let i=0;i<$e;i++)for(let a=0;a<$e;a++)if(e[i][a]===qe.None)return!1;return!0}static getLineCount(e,i,a,l){let c=1,f=i.row+a.dr,d=i.col+a.dc;for(;this.isInBounds(f,d)&&e[f][d]===l;)c++,f+=a.dr,d+=a.dc;for(f=i.row-a.dr,d=i.col-a.dc;this.isInBounds(f,d)&&e[f][d]===l;)c++,f-=a.dr,d-=a.dc;return c}}class lu{board;moveHistory;constructor(){this.board=this.createEmptyBoard(),this.moveHistory=[]}createEmptyBoard(){return Array($e).fill(null).map(()=>Array($e).fill(qe.None))}getBoard(){return this.board.map(e=>[...e])}getPiece(e){return this.isValidPosition(e)?this.board[e.row][e.col]:qe.None}isValidPosition(e){return e.row>=0&&e.row<$e&&e.col>=0&&e.col<$e}isEmpty(e){return this.getPiece(e)===qe.None}placePiece(e,i){return this.isValidPosition(e)?this.isEmpty(e)?i===qe.None?(console.error("Invalid player:",i),!1):(this.board[e.row][e.col]=i,this.moveHistory.push({position:e,player:i,timestamp:Date.now()}),!0):(console.error("Position already occupied:",e),!1):(console.error("Invalid position:",e),!1)}undo(){if(this.moveHistory.length===0)return null;const e=this.moveHistory.pop();return this.board[e.position.row][e.position.col]=qe.None,e}undoMultiple(e){const i=[];for(let a=0;a<e;a++){const l=this.undo();if(!l)break;i.push(l)}return i.reverse()}getMoveHistory(){return[...this.moveHistory]}getLastMove(){return this.moveHistory.length===0?null:this.moveHistory[this.moveHistory.length-1]}checkWin(e){return Or.checkWin(this.board,e)}isDraw(){return Or.isBoardFull(this.board)}getEmptyPositions(){const e=[];for(let i=0;i<$e;i++)for(let a=0;a<$e;a++)this.board[i][a]===qe.None&&e.push({row:i,col:a});return e}getPieceCount(){return this.moveHistory.length}reset(){this.board=this.createEmptyBoard(),this.moveHistory=[]}clone(){const e=new lu;return e.board=this.board.map(i=>[...i]),e.moveHistory=this.moveHistory.map(i=>({...i})),e}static fromBoard(e,i=[]){const a=new lu;return a.board=e.map(l=>[...l]),a.moveHistory=i.map(l=>({...l})),a}}class MR{board;currentPlayer;status;config;stats;startTime;winningLine;constructor(e=Rt.Medium){this.board=new lu,this.currentPlayer=qe.Black,this.status=ft.NotStarted,this.winningLine=null,this.startTime=null,this.config={boardSize:$e,winCount:Ko,maxUndoCount:_R,difficulty:e},this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}startGame(){if(this.status===ft.Playing){console.warn("Game already started");return}this.status=ft.Playing,this.startTime=Date.now()}makeMove(e){if(this.status!==ft.Playing)return console.error("Game is not in playing state"),!1;if(!this.board.placePiece(e,this.currentPlayer))return!1;this.updateStats();const a=this.board.checkWin(e);return a?(this.handleWin(a),!0):this.board.isDraw()?(this.handleDraw(),!0):(this.switchPlayer(),!0)}undo(e=2){if(this.stats.undoCount>=this.config.maxUndoCount)return console.warn("Max undo count reached"),!1;if(this.status!==ft.Playing)return console.warn("Cannot undo when game is not playing"),!1;const i=this.board.undoMultiple(e);if(i.length===0)return!1;this.stats.undoCount++,this.stats.totalMoves-=i.length;for(const a of i)a.player===qe.Black?this.stats.blackMoves--:a.player===qe.White&&this.stats.whiteMoves--;return i.length%2===1&&this.switchPlayer(),!0}pauseGame(){this.status===ft.Playing&&(this.status=ft.Paused)}resumeGame(){this.status===ft.Paused&&(this.status=ft.Playing)}restartGame(){this.board.reset(),this.currentPlayer=qe.Black,this.status=ft.NotStarted,this.winningLine=null,this.startTime=null,this.stats={totalMoves:0,blackMoves:0,whiteMoves:0,duration:0,undoCount:0}}resign(){this.status===ft.Playing&&(this.currentPlayer===qe.Black?this.status=ft.WhiteWin:this.status=ft.BlackWin,this.updateDuration())}getState(){return{board:this.board.getBoard(),currentPlayer:this.currentPlayer,status:this.status,moves:this.board.getMoveHistory(),winningLine:this.winningLine,config:{...this.config},stats:{...this.stats,duration:this.getCurrentDuration()},startTime:this.startTime}}getBoard(){return this.board}getCurrentPlayer(){return this.currentPlayer}getStatus(){return this.status}getRemainingUndoCount(){return this.config.maxUndoCount-this.stats.undoCount}switchPlayer(){this.currentPlayer=this.currentPlayer===qe.Black?qe.White:qe.Black}handleWin(e){this.winningLine=e,this.status=e.player===qe.Black?ft.BlackWin:ft.WhiteWin,this.updateDuration()}handleDraw(){this.status=ft.Draw,this.updateDuration()}updateStats(){this.stats.totalMoves++,this.currentPlayer===qe.Black?this.stats.blackMoves++:this.currentPlayer===qe.White&&this.stats.whiteMoves++}updateDuration(){this.startTime&&(this.stats.duration=Math.floor((Date.now()-this.startTime)/1e3))}getCurrentDuration(){return this.startTime?this.status===ft.BlackWin||this.status===ft.WhiteWin||this.status===ft.Draw?this.stats.duration:Math.floor((Date.now()-this.startTime)/1e3):0}}class _i{static evaluatePosition(e,i,a){if(e[i.row][i.col]!==qe.None)return 0;let l=0;if(e[i.row][i.col]=a,Or.checkWin(e,i))return e[i.row][i.col]=qe.None,Qa.FIVE;for(const c of _x){const f=this.analyzeDirection(e,i,c,a);l+=this.getPatternScore(f)}return e[i.row][i.col]=qe.None,l+=this.getPositionWeight(i),l}static analyzeDirection(e,i,a,l){const c=Or.getLineCount(e,i,a,l);if(c>=5)return"FIVE";const f=this.isBlocked(e,i,a,l,!0),d=this.isBlocked(e,i,a,l,!1);return c===4?!f&&!d?"LIVE_FOUR":"SLEEP_FOUR":c===3?!f&&!d?"LIVE_THREE":"SLEEP_THREE":c===2&&!f&&!d?"LIVE_TWO":"SLEEP_TWO"}static isBlocked(e,i,a,l,c){const f=c?1:-1;let d=i.row,p=i.col;for(;d>=0&&d<$e&&p>=0&&p<$e&&e[d][p]===l;)d+=a.dr*f,p+=a.dc*f;return d<0||d>=$e||p<0||p>=$e?!0:e[d][p]!==qe.None}static getPatternScore(e){switch(e){case"FIVE":return Qa.FIVE;case"LIVE_FOUR":return Qa.LIVE_FOUR;case"SLEEP_FOUR":return Qa.SLEEP_FOUR;case"LIVE_THREE":return Qa.LIVE_THREE;case"SLEEP_THREE":return Qa.SLEEP_THREE;case"LIVE_TWO":return Qa.LIVE_TWO;case"SLEEP_TWO":return Qa.SLEEP_TWO;default:return 0}}static getPositionWeight(e){const i=Math.floor($e/2),a=Math.abs(e.row-i)+Math.abs(e.col-i);return Math.max(0,10-a)}static evaluateBoard(e,i){let a=0;const l=i===qe.Black?qe.White:qe.Black;for(let c=0;c<$e;c++)for(let f=0;f<$e;f++)e[c][f]===i?a+=this.evaluatePosition(e,{row:c,col:f},i):e[c][f]===l&&(a-=this.evaluatePosition(e,{row:c,col:f},l)*.9);return a}static getCandidatePositions(e,i=2){const a=new Set;for(let l=0;l<$e;l++)for(let c=0;c<$e;c++)if(e[l][c]!==qe.None)for(let f=-i;f<=i;f++)for(let d=-i;d<=i;d++){const p=l+f,m=c+d;p>=0&&p<$e&&m>=0&&m<$e&&e[p][m]===qe.None&&a.add(`${p},${m}`)}if(a.size===0){const l=Math.floor($e/2);return[{row:l,col:l}]}return Array.from(a).map(l=>{const[c,f]=l.split(",").map(Number);return{row:c,col:f}})}}class ER{difficulty;player;constructor(e,i=qe.White){this.difficulty=e,this.player=i}getNextMove(e){switch(this.difficulty){case Rt.Easy:return this.getEasyMove(e);case Rt.Medium:return this.getMediumMove(e);case Rt.Hard:return this.getHardMove(e);case Rt.Master:return this.getMasterMove(e);default:return this.getMediumMove(e)}}getEasyMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.getBestScoredMove(e,3)}getMediumMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.minimax(e,4)}getHardMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);if(l)return l;const c=this.findLiveFourMove(e,this.player);if(c)return c;const f=this.findLiveFourMove(e,i);if(f)return f;const d=this.findDoubleLiveThreeMove(e,this.player);if(d)return d;const p=this.findDoubleLiveThreeMove(e,i);return p||this.minimax(e,5)}getMasterMove(e){const i=this.getOpponent(),a=this.findWinningMove(e,this.player);if(a)return a;const l=this.findWinningMove(e,i);return l||this.minimax(e,3)}findWinningMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=Or.checkWin(e,l);if(e[l.row][l.col]=qe.None,c)return l}return null}findLiveFourMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=_i.evaluatePosition(e,l,i);if(e[l.row][l.col]=qe.None,c>=8e3)return l}return null}findDoubleLiveThreeMove(e,i){const a=_i.getCandidatePositions(e,2);for(const l of a){e[l.row][l.col]=i;const c=_i.evaluatePosition(e,l,i);if(e[l.row][l.col]=qe.None,c>=2e3&&c<8e3)return l}return null}getBestScoredMove(e,i){const a=_i.getCandidatePositions(e,2);if(a.length===0)return null;const l=this.getOpponent();let c=null,f=-1/0;for(const d of a){let p=_i.evaluatePosition(e,d,this.player);if(i>0){e[d.row][d.col]=this.player;const m=this.getOpponentBestScore(e,l,i-1);e[d.row][d.col]=qe.None,p-=m*.8}p>f&&(f=p,c=d)}return c}getOpponentBestScore(e,i,a){if(a<=0)return 0;const l=_i.getCandidatePositions(e,2);let c=-1/0;for(const f of l){const d=_i.evaluatePosition(e,f,i);d>c&&(c=d)}return c}minimax(e,i){const a=_i.getCandidatePositions(e,2);if(a.length===0)return null;let l=null,c=-1/0,f=-1/0;const d=1/0;for(const p of a){e[p.row][p.col]=this.player;const m=this.minimaxHelper(e,i-1,f,d,!1);e[p.row][p.col]=qe.None,m>c&&(c=m,l=p),f=Math.max(f,m)}return l}minimaxHelper(e,i,a,l,c){if(i===0)return _i.evaluateBoard(e,this.player);const f=_i.getCandidatePositions(e,1),d=c?this.player:this.getOpponent();if(c){let p=-1/0;for(const m of f){if(e[m.row][m.col]=d,Or.checkWin(e,m))return e[m.row][m.col]=qe.None,1e5;const g=this.minimaxHelper(e,i-1,a,l,!1);if(e[m.row][m.col]=qe.None,p=Math.max(p,g),a=Math.max(a,g),l<=a)break}return p}else{let p=1/0;for(const m of f){if(e[m.row][m.col]=d,Or.checkWin(e,m))return e[m.row][m.col]=qe.None,-1e5;const g=this.minimaxHelper(e,i-1,a,l,!0);if(e[m.row][m.col]=qe.None,p=Math.min(p,g),l=Math.min(l,g),l<=a)break}return p}}getOpponent(){return this.player===qe.Black?qe.White:qe.Black}setDifficulty(e){this.difficulty=e}getDifficulty(){return this.difficulty}}class bR{apiKey;apiUrl;model;constructor(){this.apiKey="sk-rdbarmfrezgegwhmqtjeudoimigauytrmuychqcgjysjtjua",this.apiUrl="https://api.siliconflow.cn/v1",this.model="deepseek-ai/DeepSeek-V3",this.apiKey||console.warn("⚠️ SiliconFlow API Key未配置，心理预测功能将使用模拟模式")}async chat(e,i=.7,a=500,l){if(!this.apiKey)return console.warn("❌ API配置不完整，使用模拟模式（预制内容）"),console.warn("请检查.env文件中的VITE_SILICONFLOW_API_KEY"),this.getMockResponse();console.log("🚀 开始调用SiliconFlow大模型API..."),console.log("📋 模型:",this.model);try{const c={model:this.model,messages:e,temperature:i,max_tokens:a},f=await fetch(`${this.apiUrl}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(c),signal:l?.signal});if(!f.ok){const p=await f.text();throw console.error("❌ SiliconFlow API错误:",p),new Error(`API请求失败: ${f.status} ${f.statusText}`)}const d=await f.json();if(!d.choices||d.choices.length===0)throw new Error("API返回数据格式错误");return console.log("✅ 成功获取大模型返回内容！"),console.log("📝 内容预览:",d.choices[0].message.content.substring(0,100)),d.choices[0].message.content}catch(c){return console.error("❌ 调用SiliconFlow API失败:",c),console.warn("⚠️ 降级到模拟模式（预制内容）"),this.getMockResponse()}}async chatStream(e,i,a,l,c=.7,f=500){if(!this.apiKey){console.warn("❌ API配置不完整，使用模拟流式模式"),console.warn("请检查.env文件中的VITE_SILICONFLOW_API_KEY"),this.simulateStreamResponse(i,a);return}console.log("🚀 开始流式调用SiliconFlow大模型API..."),console.log("📋 模型:",this.model);try{const d={model:this.model,messages:e,temperature:c,max_tokens:f,stream:!0},p=await fetch(`${this.apiUrl}/chat/completions`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${this.apiKey}`},body:JSON.stringify(d)});if(!p.ok){const x=await p.text();throw console.error("❌ SiliconFlow API错误:",x),new Error(`API请求失败: ${p.status} ${p.statusText}`)}if(!p.body)throw new Error("响应体为空");const m=p.body.getReader(),g=new TextDecoder;let v="";try{for(;;){const{done:x,value:E}=await m.read();if(x)break;const T=g.decode(E,{stream:!0}).split(`
`);for(const y of T){const _=y.trim();if(_.startsWith("data: ")){const C=_.slice(6);if(C==="[DONE]"){console.log("✅ 流式输出完成"),a(v);return}try{const N=JSON.parse(C);if(N.choices&&N.choices.length>0){const O=N.choices[0];if(O.delta.content){const W=O.delta.content;v+=W,i(W)}if(O.finish_reason){console.log("✅ 流式输出完成"),a(v);return}}}catch(N){console.warn("⚠️ 解析流式数据块失败:",N)}}}}}finally{m.releaseLock()}}catch(d){console.error("❌ 流式调用SiliconFlow API失败:",d),console.warn("⚠️ 降级到模拟流式模式"),l(d),this.simulateStreamResponse(i,a)}}simulateStreamResponse(e,i){const a=this.getMockResponse(),l=a.split("");let c=0;const f=setInterval(()=>{if(c<l.length){const d=l[c];e(d),c++}else clearInterval(f),i(a)},50)}getMockResponse(){const e=["采取进攻策略，试图建立优势","采取防守姿态，稳扎稳打","布局阶段，为后续发展做准备","尝试形成双向威胁","寻找突破口，准备发起攻势"],i=[{position:"H8",reason:"形成连子威胁"},{position:"I7",reason:"扩大控制范围"},{position:"G9",reason:"防止AI反击"},{position:"J8",reason:"建立进攻基础"},{position:"H9",reason:"加强中心控制"}],a=["建议继续保持进攻态势","建议在边缘位置布局，出其不意","建议加强防守，稳中求胜","建议寻找双向威胁的机会","建议先观察AI的走向再决定"],l=["你的棋路AI已经看穿了！","这步棋下得很有想法！","AI注意到你的战术了","小心，AI可能在布陷阱！","你的策略很有挑战性！","继续保持这个节奏！"],c=e[Math.floor(Math.random()*e.length)],f=[],d=new Set;for(let v=0;v<3;v++){let x;do x=Math.floor(Math.random()*i.length);while(d.has(x));d.add(x),f.push(i[x])}const p=a[Math.floor(Math.random()*a.length)],m=l[Math.floor(Math.random()*l.length)],g=.6+Math.random()*.3;return JSON.stringify({playerIntent:c,predictedMoves:f,aiSuggestion:p,confidence:g,psychologicalHint:m})}isAvailable(){return!!this.apiKey}}const Ls=new bR;class TR{difficulty;constructor(e){this.difficulty=e}async analyzePsychology(e,i,a,l,c){console.log("🔮 开始心理分析（4个独立大模型请求）...");try{if(l?.signal.aborted)return console.log("🚫 心理分析请求已被取消"),null;const f={playerIntent:"",predictedMoves:[],aiSuggestion:"",confidence:0,psychologicalHint:"",isMisleading:!1,intentLoading:!0,movesLoading:!0,suggestionLoading:!0,hintLoading:!0};console.log("🎭 第1优先级：先调用心理战...");try{const m=await this.fetchPsychologicalHint(e,i,a,l);f.psychologicalHint=m,f.hintLoading=!1,console.log("✅ 心理战完成"),c?.(f)}catch(m){f.hintLoading=!1,console.error("❌ 心理战请求失败:",m),c?.(f)}console.log("🚀 并行调用其他3个请求...");const d=[this.fetchPlayerIntent(e,i,a,l),this.fetchPredictedMoves(e,i,a,l),this.fetchAISuggestion(e,i,a,l)],p=await Promise.allSettled(d);return p[0].status==="fulfilled"&&p[0].value?(f.playerIntent=p[0].value.intent,f.confidence=p[0].value.confidence,f.intentLoading=!1,console.log("✅ 意图分析完成"),c?.(f)):(f.intentLoading=!1,console.error("❌ 意图分析请求失败")),p[1].status==="fulfilled"&&p[1].value?(f.predictedMoves=p[1].value,f.movesLoading=!1,console.log("✅ 预测落子完成"),c?.(f)):(f.movesLoading=!1,console.error("❌ 预测落子请求失败")),p[2].status==="fulfilled"&&p[2].value?(f.aiSuggestion=p[2].value,f.suggestionLoading=!1,console.log("✅ AI建议完成"),f.isMisleading=this.shouldMislead(),f.isMisleading&&(f.aiSuggestion=this.generateMisleadingSuggestion(f.aiSuggestion)),c?.(f)):(f.suggestionLoading=!1,console.error("❌ AI建议请求失败")),console.log("✅ 心理分析全部完成（4个大模型请求）"),f}catch(f){return console.error("❌ 心理分析失败:",f),null}}async analyzePsychologyStream(e,i,a,l,c,f,d){console.log("🔮 开始流式心理分析（完全依赖大模型）...");try{if(d?.signal.aborted){console.log("🚫 流式心理分析请求已被取消"),c(null);return}const p=this.describeBoardState(e,i,a),m=this.buildPrompt(p,a);console.log("📝 提示词构建完成"),await Ls.chatStream([{role:"system",content:this.getSystemPrompt()},{role:"user",content:m}],l,g=>{console.log("✅ 流式输出完成"),console.log("📄 完整响应内容:",g.substring(0,150));const v=this.parseResponse(g);v&&(v.isMisleading=this.shouldMislead(),v.isMisleading&&(v.aiSuggestion=this.generateMisleadingSuggestion(v.aiSuggestion)),console.log("🎉 使用大模型实时生成的内容（100%非预制）"),console.log("📊 预测结果:",v)),c(v)},g=>{console.error("❌ 流式心理分析失败:",g),f(g)},.7,150)}catch(p){console.error("❌ 流式心理分析失败:",p),f(p)}}async fetchPsychologicalHint(e,i,a,l){console.log("🎭 调用大模型 - 心理战挑衅...");const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

玩家刚下了${f}这步棋。

你的任务：生成一句**超级调侃的心理战挑衅**（会被语音播放），要让玩家印象深刻！

要求：
1. 调侃玩家这步棋的意图或风格（10字内）
2. 对他下一步动作进行干扰和误导
3. 语气要像损友，爱开玩笑但不伤人
4. 要有趣、要有梗、让人笑

例子：
- "哟，H8这步想抢中心？我看穿了"
- "好家伙，你这是想阴我？"
- "在这搞事情了是吧，我慌了"
- "嘿，你还挺能整活啊"
- "你这套路我见多了"

直接输出一句话，不要JSON。`;try{return(await Ls.chat([{role:"system",content:"你是一个幽默的五子棋高手，说话一针见血，简洁明了"},{role:"user",content:d}],.9,50,l)).trim()}catch(p){throw console.error("❌ 心理战请求失败:",p),p}}async fetchPlayerIntent(e,i,a,l){console.log("🎯 调用大模型 - 意图分析...");const c=this.describeBoardState(e,i,a),f=this.positionToNotation(i.position),d=`${c}

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

直接JSON。`}describeBoardState(e,i,a){const l=[],c=a.filter(m=>m.player===qe.Black).length,f=this.positionToNotation(i.position);l.push(`步数:${c}, 最后:${f}`);const d=[],p=a.slice(-10);for(const m of p){const g=this.positionToNotation(m.position),v=m.player===qe.Black?"●":"○";d.push(`${v}${g}`)}return l.push(`近期:${d.join(" ")}`),l.join(`
`)}positionToNotation(e){return`${Bs[e.col]}${Fs[e.row]}`}parseResponse(e){try{const i=e.match(/\{[\s\S]*\}/);if(!i)return console.error("⚠️ 响应中未找到JSON格式"),null;let a=i[0];a=this.cleanJsonString(a),console.log("🔧 清理后的JSON:",a.substring(0,200));const l=JSON.parse(a);return!l.playerIntent||!l.predictedMoves||!l.aiSuggestion||!l.psychologicalHint?(console.error("⚠️ 缺少必需字段"),null):{playerIntent:l.playerIntent||"",predictedMoves:Array.isArray(l.predictedMoves)&&l.predictedMoves.length>0?l.predictedMoves:[],aiSuggestion:l.aiSuggestion||"",confidence:typeof l.confidence=="number"?l.confidence:.7,psychologicalHint:l.psychologicalHint||"",isMisleading:!1}}catch(i){return console.error("❌ 解析响应失败:",i),console.log("📄 原始响应:",e),null}}cleanJsonString(e){return e=e.replace(/,(\s*[}\]])/g,"$1"),e=e.replace(/\/\/.*$/gm,""),e=e.replace(/\/\*[\s\S]*?\*\//g,""),e}shouldMislead(){const e={[Rt.Easy]:0,[Rt.Medium]:.1,[Rt.Hard]:.2,[Rt.Master]:.3};return Math.random()<e[this.difficulty]}generateMisleadingSuggestion(e){const i=["要不试试走边路？（坏笑）","我觉得你往那边走更好（其实不是）","相信我，听我的准没错（误导ing）","这个位置绝对稳（才怪）"];return Math.random()>.7?i[Math.floor(Math.random()*i.length)]:e.replace(/稳/g,"猛").replace(/小心/g,"别管").replace(/防/g,"攻").replace(/观察/g,"直接冲").replace(/先/g,"不用")+"（嘿嘿）"}}class AR{apiKey;apiUrl;constructor(){this.apiKey="eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJHcm91cE5hbWUiOiJmZXJyaXMiLCJVc2VyTmFtZSI6ImZlcnJpcyIsIkFjY291bnQiOiIiLCJTdWJqZWN0SUQiOiIxOTgxNTMzMzg1NDc4MTE5NjI0IiwiUGhvbmUiOiIxODYwMTcxNzI3NSIsIkdyb3VwSUQiOiIxOTgxNTMzMzg1NDY5NzMxMDE2IiwiUGFnZU5hbWUiOiIiLCJNYWlsIjoiIiwiQ3JlYXRlVGltZSI6IjIwMjUtMTAtMjQgMjE6NTU6MjUiLCJUb2tlblR5cGUiOjEsImlzcyI6Im1pbmltYXgifQ.xeHhyXZcOCODeA-XRVH7t670hAhJ0rXuQT7Oq4EQP4gs-Hbe4MoCSzLKQ1r_Ufk4EPjsV5ESzdT3Kkch2IEEGdC6ibOdhbPh0Ehhd7lQJOXjVGQIvyqOM6t9pOtTxLHX4NtVCw7SHh83LAlqGSUseIxTVteuS9KxO_H4tfsC13E7mwC9bhhpiQJVJ_0XznH6U2rjeI4F6xuCFmjqg0X1BSffFbzxKDTEFqER-YCkcIqNxoKsV7cWUXSpsS20g0B9jFCe-CFKKiayTHrfzVQQG3HFcJNRl_KhqsC3-4LSGo1-Od1sc152tUPLhOQKzp_BB6C81lh2JV5zgKraeOzevw",this.apiUrl="https://api.minimaxi.com/v1",this.apiKey||console.warn("⚠️ Minimax API Key未配置，TTS功能将使用模拟模式")}async textToSpeech(e,i={voice_id:"ttv-voice-2025102420553325-iEpNdb8p",speed:1,vol:1,pitch:0},a={format:"mp3",sample_rate:32e3,bitrate:128e3,channel:1},l){if(!this.apiKey)return this.getMockAudioUrl();try{const c={model:"speech-2.5-hd-preview",text:e,stream:!1,voice_setting:i,audio_setting:a,output_format:"url",subtitle_enable:!1,aigc_watermark:!1},f=await fetch(`${this.apiUrl}/t2a_v2`,{method:"POST",headers:{Authorization:`Bearer ${this.apiKey}`,"Content-Type":"application/json"},body:JSON.stringify(c),signal:l?.signal});if(!f.ok){const p=await f.text();throw console.error("Minimax TTS API错误:",p),new Error(`API请求失败: ${f.status} ${f.statusText}`)}const d=await f.json();if(d.base_resp.status_code!==0)throw new Error(`API错误: ${d.base_resp.status_msg}`);if(!d.data||!d.data.audio)throw new Error("API返回数据格式错误");return d.data.audio.startsWith("http")?d.data.audio:this.hexToBlobUrl(d.data.audio,a.format||"mp3")}catch(c){return console.error("Minimax TTS API调用失败:",c),this.getMockAudioUrl()}}hexToBlobUrl(e,i){try{const a=new Uint8Array(e.length/2);for(let f=0;f<e.length;f+=2)a[f/2]=parseInt(e.substr(f,2),16);const l=this.getMimeType(i),c=new Blob([a],{type:l});return URL.createObjectURL(c)}catch(a){throw console.error("转换hex数据失败:",a),new Error("音频数据转换失败")}}getMimeType(e){return{mp3:"audio/mpeg",wav:"audio/wav",flac:"audio/flac",pcm:"audio/pcm"}[e]||"audio/mpeg"}getMockAudioUrl(){return"speechSynthesis"in window?this.createWebSpeechAudio():(console.warn("TTS功能不可用：既没有配置Minimax API，也不支持Web Speech API"),"")}createWebSpeechAudio(){return"web-speech-api"}}const wR=new AR;function Ex(s=Rt.Medium){const e=q.useRef(null),i=q.useRef(null),a=q.useRef(null),[l,c]=q.useState(null),[f,d]=q.useState(!1),[p,m]=q.useState(null),[g,v]=q.useState(!1),x=q.useRef(null),E=q.useRef(null),b=q.useRef({}),T=q.useCallback(()=>{e.current&&c(e.current.getState())},[]);q.useEffect(()=>{e.current=new MR(s),i.current=new ER(s,qe.White),a.current=new TR(s),T()},[s,T]);const y=q.useCallback(()=>{e.current&&(e.current.startGame(),T())},[T]),_=()=>typeof crypto<"u"&&crypto.getRandomValues?"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,ve=>{const oe=crypto.getRandomValues(new Uint8Array(1))[0]&15;return(ve==="x"?oe:oe&3|8).toString(16)}):"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,ve=>{const oe=Math.random()*16|0;return(ve==="x"?oe:oe&3|8).toString(16)}),C=q.useCallback(async()=>{if(!e.current||!a.current)return;const ve=e.current.getState(),oe=ve.moves;if(oe.length===0)return;const B=oe[oe.length-1];if(B.player!==qe.Black)return;E.current&&(console.log("🚫 取消之前的心理分析请求"),E.current.abort());const $=new AbortController;E.current=$,v(!0),b.current={};const te=_();b.current[te]=!0,x.current&&(x.current.pause(),x.current=null);try{const k=await a.current.analyzePsychology(ve.board,B,oe,$,async U=>{if(console.log("updatedPrediction",U),m({...U}),b.current[te]&&b.current[te]!=="textToSpeeching"&&U.psychologicalHint&&!U.hintLoading){b.current[te]="textToSpeeching";try{const M=await wR.textToSpeech(U.psychologicalHint,void 0,void 0,$);if(b.current[te]&&M&&M!=="web-speech-api"){const w=new Audio(M);x.current=w,w.onended=()=>{console.log("✅ 心理战语音播放完成"),x.current=null},w.onerror=G=>{console.error("❌ 心理战语音播放失败:",G),x.current=null},w.play(),console.log("▶️ 心理战语音开始播放")}}catch(M){console.error("❌ TTS转换失败:",M)}}});k?(m(k),console.log("✅ 4个大模型请求全部完成")):(m(null),console.warn("⚠️ 大模型未返回预测结果"))}catch(k){k instanceof Error&&k.name==="AbortError"?console.log("🚫 心理分析请求已被取消"):(console.error("心理分析失败:",k),m(null))}finally{b.current[te]&&v(!1),E.current===$&&(E.current=null)}},[]),N=q.useCallback(()=>{if(!e.current||!i.current)return;d(!0);const oe=xR[e.current.getState().config.difficulty]+2e3;setTimeout(()=>{if(!e.current||!i.current){d(!1);return}const B=e.current.getBoard().getBoard(),$=i.current.getNextMove(B);$&&(e.current.makeMove($),T()),d(!1)},oe)},[T]),O=q.useCallback(ve=>{if(!e.current||f)return!1;const oe=e.current.makeMove(ve);if(oe){T();const B=e.current.getStatus(),$=B===ft.BlackWin||B===ft.WhiteWin||B===ft.Draw;C(),!$&&e.current.getCurrentPlayer()===qe.White&&N()}return oe},[T,f,C,N]),W=q.useCallback((ve=2)=>{if(!e.current)return!1;const oe=e.current.undo(ve);return oe&&T(),oe},[T]),X=q.useCallback(()=>{e.current&&(e.current.restartGame(),T(),m(null),v(!1),E.current&&(console.log("🚫 重新开始游戏，取消正在进行的请求"),E.current.abort(),E.current=null),x.current&&(x.current.pause(),x.current=null))},[T]),z=q.useCallback(()=>{e.current&&(e.current.pauseGame(),T())},[T]),J=q.useCallback(()=>{e.current&&(e.current.resumeGame(),T())},[T]),L=q.useCallback(()=>{e.current&&(e.current.resign(),T())},[T]),P=q.useCallback(()=>e.current?.getRemainingUndoCount()||0,[]),Z=l?.status!==ft.NotStarted,se=l?.status===ft.Playing,le=l?.status===ft.BlackWin||l?.status===ft.WhiteWin||l?.status===ft.Draw;return{gameState:l,gameManager:e.current,startGame:y,makeMove:O,undo:W,restart:X,pause:z,resume:J,resign:L,getRemainingUndoCount:P,isGameStarted:Z,isGamePlaying:se,isGameOver:le,isAIThinking:f,psychologyPrediction:p,isAnalyzing:g}}var si=(s=>(s.PlaceStone="place",s.Win="win",s.Lose="lose",s.PredictionHit="hit",s.PredictionMiss="miss",s.Click="click",s.Undo="undo",s))(si||{});class RR{audioContext=null;enabled=!0;volume=.5;sounds=new Map;ttsEnabled=!0;constructor(){this.initAudioContext()}initAudioContext(){try{const e=window.AudioContext||window.webkitAudioContext;e&&(this.audioContext=new e)}catch(e){console.warn("AudioContext初始化失败，音效将被禁用:",e),this.enabled=!1}}generateTone(e,i,a="sine",l=1){if(!(!this.audioContext||!this.enabled))try{const c=this.audioContext.createOscillator(),f=this.audioContext.createGain();c.connect(f),f.connect(this.audioContext.destination),c.frequency.value=e,c.type=a;const d=this.audioContext.currentTime,p=this.volume*l;f.gain.setValueAtTime(0,d),f.gain.linearRampToValueAtTime(p,d+.01),f.gain.exponentialRampToValueAtTime(.01,d+i),c.start(d),c.stop(d+i)}catch(c){console.error("音效播放失败:",c)}}playCompoundSound(e){!this.audioContext||!this.enabled||e.forEach(({freq:i,delay:a,duration:l,type:c="sine",volume:f=1})=>{setTimeout(()=>{this.generateTone(i,l,c,f)},a)})}play(e){if(!(!this.enabled||!this.audioContext))switch(this.audioContext.state==="suspended"&&this.audioContext.resume(),e){case"place":this.generateTone(200,.1,"sine",.6);break;case"win":this.playCompoundSound([{freq:523,delay:0,duration:.15},{freq:659,delay:100,duration:.15},{freq:784,delay:200,duration:.3}]);break;case"lose":this.playCompoundSound([{freq:400,delay:0,duration:.15},{freq:300,delay:100,duration:.15},{freq:200,delay:200,duration:.3}]);break;case"hit":this.playCompoundSound([{freq:800,delay:0,duration:.08,type:"triangle"},{freq:1e3,delay:80,duration:.08,type:"triangle"}]);break;case"miss":this.playCompoundSound([{freq:600,delay:0,duration:.12,type:"triangle"},{freq:900,delay:60,duration:.12,type:"triangle"},{freq:1200,delay:120,duration:.15,type:"triangle"}]);break;case"click":this.generateTone(1e3,.05,"square",.3);break;case"undo":this.playCompoundSound([{freq:600,delay:0,duration:.06},{freq:500,delay:50,duration:.06}]);break;default:console.warn("未知的音效类型:",e)}}enable(){this.enabled=!0,this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume()}disable(){this.enabled=!1}toggle(){return this.enabled=!this.enabled,this.enabled&&this.audioContext&&this.audioContext.state==="suspended"&&this.audioContext.resume(),this.enabled}setVolume(e){this.volume=Math.max(0,Math.min(1,e))}getVolume(){return this.volume}isEnabled(){return this.enabled}getBestChineseVoice(){const e=window.speechSynthesis.getVoices();if(e.length===0)return console.warn("⚠️ 语音列表为空，可能还在加载中"),null;console.log("📢 可用语音数量:",e.length);const i=[a=>a.lang.includes("zh")&&a.name.includes("Female")&&!a.localService,a=>a.lang.includes("zh")&&(a.name.includes("女")||a.name.includes("Xiaoxiao")||a.name.includes("Xiaoyi")),a=>a.lang.includes("zh")&&a.name.includes("Female"),a=>a.lang.includes("zh")&&(a.name.toLowerCase().includes("female")||a.name.includes("女")),a=>a.lang.includes("zh"),a=>a.lang.startsWith("zh-")];for(const a of i){const l=e.find(a);if(l)return console.log("✅ 选择语音:",l.name,"语言:",l.lang),l}return console.warn("⚠️ 未找到合适的中文语音，使用默认语音"),e[0]||null}speakText(e,i){if(!this.ttsEnabled){console.log("🔇 TTS已禁用");return}if(!("speechSynthesis"in window)){console.warn("❌ 浏览器不支持语音合成");return}try{window.speechSynthesis.cancel();const a=new SpeechSynthesisUtterance(e),l=this.getBestChineseVoice();l&&(a.voice=l,console.log("🎵 使用语音引擎:",l.name)),a.rate=i?.rate||1,a.pitch=i?.pitch||1.1,a.volume=i?.volume||.9,a.lang=i?.lang||"zh-CN",a.onstart=()=>{console.log("🔊 开始播放心理战语音:",e)},a.onend=()=>{console.log("✅ 心理战语音播放完成")},a.onerror=c=>{console.error("❌ 语音播放失败:",c.error)},window.speechSynthesis.speak(a),console.log("🎤 TTS播放文本:",e)}catch(a){console.error("❌ TTS播放失败:",a)}}preloadVoices(){return new Promise(e=>{if(!("speechSynthesis"in window)){e();return}const i=window.speechSynthesis.getVoices();if(i.length>0){console.log("✅ 语音已加载:",i.length,"个"),e();return}window.speechSynthesis.onvoiceschanged=()=>{const a=window.speechSynthesis.getVoices();console.log("✅ 语音加载完成:",a.length,"个"),e()},setTimeout(()=>{console.warn("⚠️ 语音加载超时"),e()},3e3)})}stopSpeaking(){"speechSynthesis"in window&&window.speechSynthesis.cancel()}enableTTS(){this.ttsEnabled=!0}disableTTS(){this.ttsEnabled=!1,this.stopSpeaking()}toggleTTS(){return this.ttsEnabled=!this.ttsEnabled,this.ttsEnabled||this.stopSpeaking(),this.ttsEnabled}isTTSEnabled(){return this.ttsEnabled}}const Xn=new RR;function CR(){const s=sl(),i=ya().state?.difficulty||Rt.Medium,{gameState:a,startGame:l,makeMove:c,undo:f,restart:d,resign:p,getRemainingUndoCount:m,isGamePlaying:g,isGameOver:v,isAIThinking:x,psychologyPrediction:E,isAnalyzing:b}=Ex(Rt.Easy),[T,y]=q.useState(0),[_,C]=q.useState(null),[N,O]=q.useState([]),[W,X]=q.useState(0);q.useEffect(()=>{Xn.preloadVoices().then(()=>{console.log("🎵 语音引擎预加载完成")})},[]),q.useEffect(()=>{l()},[l]),q.useEffect(()=>{if(!g||!a?.startTime){X(a?.stats.duration||0);return}const le=setInterval(()=>{if(a?.startTime){const ve=Math.floor((Date.now()-a.startTime)/1e3);X(ve)}},1e3);return()=>clearInterval(le)},[g,a?.startTime,a?.stats.duration]),q.useEffect(()=>{E&&E.predictedMoves.length>0&&O(E.predictedMoves.map(le=>le.position))},[E]),q.useEffect(()=>{a?.status===ft.BlackWin?setTimeout(()=>Xn.play(si.Win),300):a?.status===ft.WhiteWin&&setTimeout(()=>Xn.play(si.Lose),300)},[a?.status]);const z=q.useCallback(le=>{if(!g)return;const ve=`${String.fromCharCode(65+le.col)}${le.row+1}`,oe=N.includes(ve);c(le)&&(Xn.play(si.PlaceStone),N.length>0&&(oe?(C("hit"),Xn.play(si.PredictionHit)):(C("miss"),y($=>$+10),Xn.play(si.PredictionMiss))))},[g,N,c,y]),J=()=>{s("/home")},L=()=>{d(),l(),y(0),O([]),C(null),X(0)},P=()=>{f(2),Xn.play(si.Undo)},Z=()=>{window.confirm("确定要认输吗？")&&p()};if(!a)return I.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:I.jsx("div",{className:"text-white text-xl",children:"加载中..."})});const se=m();return I.jsxs("div",{className:"min-h-screen bg-space-darkest relative overflow-hidden",children:[I.jsx(yx,{}),I.jsx(Sx,{type:_,onComplete:()=>{C(null)}}),I.jsx(Mx,{isVisible:v,isPlayerWin:a?.status===ft.BlackWin}),I.jsxs("div",{className:"relative z-10 container mx-auto px-2 sm:px-4 py-4 sm:py-8",children:[I.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-center mb-4 sm:mb-8 gap-3",children:[I.jsx("button",{onClick:J,className:"px-3 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all text-sm sm:text-base",children:"← 返回主页"}),I.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[I.jsx("div",{className:"text-xl sm:text-2xl font-bold text-gradient",children:"心战五子棋"}),I.jsxs("div",{className:"px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan rounded-lg",children:[I.jsxs("span",{className:"text-yellow-400 font-bold text-sm sm:text-lg",children:["✨ ",T]}),I.jsx("span",{className:"text-gray-400 text-xs sm:text-sm ml-1 sm:ml-2",children:"智慧点"})]})]}),I.jsx("div",{className:"hidden sm:block w-24"})," "]}),I.jsxs("div",{className:"flex flex-col lg:flex-row gap-3 sm:gap-4 lg:gap-8 items-start justify-center",children:[I.jsx("div",{className:"lg:order-1 order-2 flex-shrink-0 w-full lg:w-auto",children:I.jsxs("div",{className:"glass-effect rounded-xl p-3 sm:p-4 lg:p-6 space-y-3 sm:space-y-4 lg:space-y-6 w-full lg:w-80",children:[I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2",children:"当前回合"}),I.jsxs("div",{className:"flex items-center justify-center gap-2 sm:gap-3",children:[I.jsx("div",{className:`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${a.currentPlayer===qe.Black?"bg-piece-black ring-2 sm:ring-4 ring-neon-cyan":"bg-piece-black opacity-30"}`}),I.jsx("div",{className:"text-base sm:text-lg font-bold text-white",children:"VS"}),I.jsx("div",{className:`w-6 h-6 sm:w-8 sm:h-8 rounded-full ${a.currentPlayer===qe.White?"bg-piece-white ring-2 sm:ring-4 ring-neon-purple":"bg-piece-white"}`})]}),I.jsx("div",{className:"mt-1 sm:mt-2 text-neon-cyan font-semibold text-sm sm:text-base",children:x?I.jsx("span",{className:"flex items-center justify-center gap-2",children:I.jsx("span",{className:"animate-pulse",children:"🤔 AI思考中..."})}):a.currentPlayer===qe.Black?"黑棋 (你)":"白棋 (AI)"})]}),I.jsx("div",{className:"border-t border-gray-700 pt-2 sm:pt-4",children:I.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm",children:[I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-gray-400",children:"你的步数"}),I.jsx("div",{className:"text-white font-bold text-lg sm:text-xl mt-0.5 sm:mt-1",children:a.moves.filter(le=>le.player===qe.Black).length})]}),I.jsxs("div",{className:"text-center",children:[I.jsx("div",{className:"text-gray-400",children:"用时"}),I.jsxs("div",{className:"text-white font-bold text-lg sm:text-xl mt-0.5 sm:mt-1",children:[Math.floor(W/60),":",String(W%60).padStart(2,"0")]})]})]})}),v&&I.jsx("div",{className:"border-t border-gray-700 pt-4",children:I.jsxs("div",{className:"text-center p-4 rounded-lg bg-neon-purple/20 border border-neon-purple",children:[I.jsxs("div",{className:"text-2xl font-bold mb-2",children:[a.status===ft.BlackWin&&"🎉 黑棋获胜！",a.status===ft.WhiteWin&&"💔 白棋获胜！",a.status===ft.Draw&&"🤝 平局！"]}),I.jsxs("div",{className:"text-sm text-gray-300",children:[a.status===ft.BlackWin&&"恭喜你战胜了AI！",a.status===ft.WhiteWin&&"AI略胜一筹，再接再厉！",a.status===ft.Draw&&"棋逢对手！"]})]})}),I.jsxs("div",{className:"border-t border-gray-700 pt-2 sm:pt-4 space-y-2 sm:space-y-3",children:[I.jsx("button",{onClick:L,className:"w-full px-3 py-2 sm:px-4 sm:py-3 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-lg font-semibold transition-all hover:scale-105 text-sm sm:text-base",children:"🔄 重新开始"}),I.jsxs("div",{className:"grid grid-cols-2 gap-2 sm:gap-3",children:[I.jsxs("button",{onClick:P,disabled:se===0||!g||a.stats.totalMoves<2,className:"px-2 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-700 disabled:hover:text-gray-300 text-xs sm:text-base",children:["↶ 悔棋 (",se,")"]}),I.jsx("button",{onClick:Z,disabled:!g,className:"px-2 py-1.5 sm:px-4 sm:py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed text-xs sm:text-base",children:"🏳️ 认输"})]})]}),I.jsxs("div",{className:"border-t border-gray-700 pt-4 text-center text-sm text-gray-400",children:["难度:"," ",I.jsxs("span",{className:"text-neon-purple font-semibold",children:[i===Rt.Easy&&"😊 简单",i===Rt.Medium&&"🤔 中等",i===Rt.Hard&&"😈 困难",i===Rt.Master&&"🔥 大师"]})]})]})}),I.jsx("div",{className:"lg:order-2 order-1 flex-shrink-0 w-full lg:w-auto flex justify-center",children:I.jsxs("div",{className:"glass-effect rounded-xl p-1 sm:p-2 lg:p-4 w-full max-w-full overflow-x-auto",children:[I.jsx("div",{className:"flex justify-center",children:I.jsx(SR,{board:a.board,onCellClick:z,winningLine:a.winningLine,lastMove:a.moves.length>0?a.moves[a.moves.length-1].position:null,disabled:!g||x||a.currentPlayer!==qe.Black,predictedPositions:N})}),x&&I.jsx("div",{className:"mt-2 sm:mt-4 text-center",children:I.jsxs("div",{className:"inline-flex items-center gap-1 sm:gap-2 px-2 py-1 sm:px-4 sm:py-2 bg-neon-purple/20 border border-neon-purple rounded-lg",children:[I.jsx("div",{className:"w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-purple rounded-full animate-ping"}),I.jsx("span",{className:"text-neon-purple font-semibold text-xs sm:text-base",children:"AI正在思考最佳策略..."})]})})]})}),I.jsx("div",{className:"lg:order-3 order-3 flex-shrink-0 w-full lg:w-auto",children:I.jsx("div",{className:"w-full lg:w-80",children:I.jsx(xx,{prediction:E,isAnalyzing:b})})})]}),I.jsx("div",{className:"mt-4 sm:mt-8 text-center text-gray-400 text-xs sm:text-sm",children:I.jsx("p",{children:"五子连珠即可获胜 · 黑棋先行 · AI会猜测你的意图"})})]})]})}function DR({board:s,onCellClick:e,winningLine:i,lastMove:a,disabled:l=!1,predictedPositions:c=[]}){const f=q.useRef(null),[d,p]=q.useState(null),[m,g]=q.useState(42),[v,x]=q.useState(630),[E,b]=q.useState(0),[T,y]=q.useState(null),_=()=>{const w=window.innerWidth;return Math.min(42,(w-100)/$e)},C=m,N=C*1.2,O=v;q.useEffect(()=>{const w=()=>{const G=_(),ee=G*1.2;g(G),x($e*G+ee*2)};return w(),window.addEventListener("resize",w),()=>window.removeEventListener("resize",w)},[]),q.useEffect(()=>{W()},[s,i,a,d,c,v,m]);const W=()=>{const w=f.current;if(!w)return;const G=w.getContext("2d");G&&(G.clearRect(0,0,O,O),X(G),z(G),J(G),L(G),P(G),a&&se(G,a),i&&le(G,i),c.length>0&&oe(G,c),d&&!l&&B(G,d))},X=w=>{w.fillStyle="#1a1e37",w.fillRect(0,0,O,O),w.strokeStyle="#a855f7",w.lineWidth=2;const G=8;w.strokeRect(N-G,N-G,$e*C+G*2,$e*C+G*2)},z=w=>{w.strokeStyle="#4a5568",w.lineWidth=1;for(let G=0;G<$e;G++){const ee=N+G*C;w.beginPath(),w.moveTo(N,ee),w.lineTo(N+($e-1)*C,ee),w.stroke()}for(let G=0;G<$e;G++){const ee=N+G*C;w.beginPath(),w.moveTo(ee,N),w.lineTo(ee,N+($e-1)*C),w.stroke()}},J=w=>{w.fillStyle="#a855f7";for(const G of vx){const ee=N+G.col*C,Q=N+G.row*C;w.beginPath(),w.arc(ee,Q,4,0,Math.PI*2),w.fill()}},L=w=>{w.fillStyle="#9ca3af",w.font="10px monospace",w.textAlign="center",w.textBaseline="middle";const ee=8,Q=N+$e*C+ee-8,H=N+$e*C+ee-15;for(let Y=0;Y<$e;Y++){const pe=N+Y*C;w.fillText(Bs[Y],pe,Q)}w.textAlign="left";for(let Y=0;Y<$e;Y++){const pe=N+Y*C;w.fillText(Fs[Y],H,pe)}},P=w=>{for(let G=0;G<$e;G++)for(let ee=0;ee<$e;ee++){const Q=s[G][ee];Q!==qe.None&&Z(w,{row:G,col:ee},Q)}},Z=(w,G,ee)=>{const Q=N+G.col*C,H=N+G.row*C,Y=C*.4;if(w.shadowColor="rgba(0, 0, 0, 0.5)",w.shadowBlur=8,w.shadowOffsetX=2,w.shadowOffsetY=2,w.beginPath(),w.arc(Q,H,Y,0,Math.PI*2),ee===qe.Black){const pe=w.createRadialGradient(Q-5,H-5,0,Q,H,Y);pe.addColorStop(0,"#2a2a2a"),pe.addColorStop(1,"#0a0a0a"),w.fillStyle=pe}else{const pe=w.createRadialGradient(Q-5,H-5,0,Q,H,Y);pe.addColorStop(0,"#ffffff"),pe.addColorStop(1,"#e5e5e5"),w.fillStyle=pe}w.fill(),w.shadowColor="transparent",w.shadowBlur=0,w.shadowOffsetX=0,w.shadowOffsetY=0},se=(w,G)=>{const ee=N+G.col*C,Q=N+G.row*C;w.strokeStyle="#06b6d4",w.lineWidth=3,w.beginPath(),w.arc(ee,Q,C*.2,0,Math.PI*2),w.stroke()},le=(w,G)=>{if(G.positions.length<2)return;const ee=G.positions[0],Q=G.positions[G.positions.length-1],H=N+ee.col*C,Y=N+ee.row*C,pe=N+Q.col*C,Te=N+Q.row*C;w.strokeStyle="#a855f7",w.lineWidth=5,w.lineCap="round",w.shadowColor="#a855f7",w.shadowBlur=15,w.beginPath(),w.moveTo(H,Y),w.lineTo(pe,Te),w.stroke(),w.shadowColor="transparent",w.shadowBlur=0},ve=w=>{if(w.length<2)return null;const G=Bs.indexOf(w[0].toUpperCase()),ee=w.substring(1),Q=Fs.indexOf(ee);return G===-1||Q===-1?null:{row:Q,col:G}},oe=(w,G)=>{G.forEach((ee,Q)=>{const H=ve(ee);if(!H||s[H.row][H.col]!==qe.None)return;const Y=N+H.col*C,pe=N+H.row*C,Te=["#06b6d4","#a855f7","#f59e0b"],Ne=Te[Q%Te.length],ke=C*.25-Q*2;w.save(),w.shadowColor=Ne,w.shadowBlur=15,w.fillStyle=Ne,w.strokeStyle=Ne,w.lineWidth=2;const lt=8,V=ke,Ge=ke*.5;w.beginPath();for(let We=0;We<lt*2;We++){const Xe=Math.PI*We/lt-Math.PI/2,Pe=We%2===0?V:Ge,_t=Y+Math.cos(Xe)*Pe,Fe=pe+Math.sin(Xe)*Pe;We===0?w.moveTo(_t,Fe):w.lineTo(_t,Fe)}w.closePath(),w.fill(),w.shadowBlur=0,w.fillStyle="#1a1e37",w.font="bold 10px Arial",w.textAlign="center",w.textBaseline="middle",w.fillText((Q+1).toString(),Y,pe),w.restore()})},B=(w,G)=>{if(s[G.row][G.col]!==qe.None)return;const ee=N+G.col*C,Q=N+G.row*C,H=C*.4;w.fillStyle="rgba(6, 182, 212, 0.3)",w.beginPath(),w.arc(ee,Q,H,0,Math.PI*2),w.fill()},$=w=>{const G=f.current;if(!G)return null;const ee=G.getBoundingClientRect(),Q=w.clientX-ee.left,H=w.clientY-ee.top,Y=Math.round((Q-N)/C),pe=Math.round((H-N)/C);return pe>=0&&pe<$e&&Y>=0&&Y<$e?{row:pe,col:Y}:null},te=w=>{if(l||!e)return;w.preventDefault(),b(Date.now());const G=w.touches[0],ee=$(G);ee&&(p(ee),y(ee))},k=w=>{if(l)return;w.preventDefault();const G=w.touches[0],ee=$(G);p(ee||null)},U=w=>{if(l||!e)return;w.preventDefault();const G=Date.now()-E,ee=w.changedTouches[0],Q=$(ee);Q&&G>=100&&G<=1e3&&T&&Q.row===T.row&&Q.col===T.col&&s[Q.row][Q.col]===qe.None&&e(Q),p(null),y(null)},M=()=>{p(null),y(null)};return I.jsx("canvas",{ref:f,width:O,height:O,className:`rounded-lg ${l?"cursor-not-allowed opacity-75":"cursor-pointer"} max-w-full`,onTouchStart:te,onTouchMove:k,onTouchEnd:U,onTouchCancel:M,style:{touchAction:"none",userSelect:"none",WebkitUserSelect:"none",WebkitTouchCallout:"none"}})}function NR(){const s=sl(),i=ya().state?.difficulty||Rt.Medium,{gameState:a,startGame:l,makeMove:c,undo:f,restart:d,resign:p,getRemainingUndoCount:m,isGamePlaying:g,isGameOver:v,isAIThinking:x,psychologyPrediction:E,isAnalyzing:b}=Ex(Rt.Easy),[T,y]=q.useState(0),[_,C]=q.useState(null),[N,O]=q.useState([]),[W,X]=q.useState(0);q.useEffect(()=>{Xn.preloadVoices().then(()=>{console.log("🎵 语音引擎预加载完成")})},[]),q.useEffect(()=>{l()},[l]),q.useEffect(()=>{if(!g||!a?.startTime){X(a?.stats.duration||0);return}const le=setInterval(()=>{if(a?.startTime){const ve=Math.floor((Date.now()-a.startTime)/1e3);X(ve)}},1e3);return()=>clearInterval(le)},[g,a?.startTime,a?.stats.duration]),q.useEffect(()=>{E&&E.predictedMoves.length>0&&O(E.predictedMoves.map(le=>le.position))},[E]),q.useEffect(()=>{a?.status===ft.BlackWin?setTimeout(()=>Xn.play(si.Win),300):a?.status===ft.WhiteWin&&setTimeout(()=>Xn.play(si.Lose),300)},[a?.status]);const z=q.useCallback(le=>{if(!g)return;const ve=`${String.fromCharCode(65+le.col)}${le.row+1}`,oe=N.includes(ve);c(le)&&(Xn.play(si.PlaceStone),N.length>0&&(oe?(C("hit"),Xn.play(si.PredictionHit)):(C("miss"),y($=>$+10),Xn.play(si.PredictionMiss))))},[g,N,c,y]),J=()=>{s("/home")},L=()=>{d(),l(),y(0),O([]),C(null),X(0)},P=()=>{f(2),Xn.play(si.Undo)},Z=()=>{window.confirm("确定要认输吗？")&&p()};if(!a)return I.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:I.jsx("div",{className:"text-white text-xl",children:"加载中..."})});const se=m();return I.jsxs("div",{className:"min-h-screen bg-space-darkest relative overflow-hidden",children:[I.jsx(yx,{}),I.jsx(Sx,{type:_,onComplete:()=>{C(null)}}),I.jsx(Mx,{isVisible:v,isPlayerWin:a?.status===ft.BlackWin}),I.jsxs("div",{className:"relative z-10 px-3 py-2",children:[I.jsxs("div",{className:"flex justify-between items-center mb-3",children:[I.jsx("button",{onClick:J,className:"px-3 py-2 bg-space-dark border border-gray-700 rounded-lg text-gray-300 hover:border-neon-cyan hover:text-neon-cyan transition-all text-sm",children:"← 返回"}),I.jsx("div",{className:"text-lg font-bold text-gradient",children:"心战五子棋"}),I.jsx("div",{className:"px-3 py-2 bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border border-neon-cyan rounded-lg",children:I.jsxs("span",{className:"text-yellow-400 font-bold text-sm",children:["✨ ",T]})})]}),I.jsxs("div",{className:"glass-effect rounded-xl p-3 mb-3",children:[I.jsxs("div",{className:"flex items-center justify-between mb-3",children:[I.jsxs("div",{className:"flex items-center gap-2",children:[I.jsx("div",{className:`w-6 h-6 rounded-full ${a.currentPlayer===qe.Black?"bg-piece-black ring-2 ring-neon-cyan":"bg-piece-black opacity-30"}`}),I.jsx("div",{className:"text-white font-bold",children:"VS"}),I.jsx("div",{className:`w-6 h-6 rounded-full ${a.currentPlayer===qe.White?"bg-piece-white ring-2 ring-neon-purple":"bg-piece-white"}`})]}),I.jsx("div",{className:"text-center",children:I.jsx("div",{className:"text-neon-cyan font-semibold text-sm",children:x?I.jsx("span",{className:"flex items-center gap-1",children:I.jsx("span",{className:"animate-pulse",children:"🤔 AI思考中..."})}):a.currentPlayer===qe.Black?"黑棋 (你)":"白棋 (AI)"})}),I.jsxs("div",{className:"text-right text-xs",children:[I.jsx("div",{className:"text-gray-400",children:"步数"}),I.jsx("div",{className:"text-white font-bold",children:a.moves.filter(le=>le.player===qe.Black).length}),I.jsx("div",{className:"text-gray-400 mt-1",children:"用时"}),I.jsxs("div",{className:"text-white font-bold",children:[Math.floor(W/60),":",String(W%60).padStart(2,"0")]})]})]}),v&&I.jsxs("div",{className:"text-center p-3 rounded-lg bg-neon-purple/20 border border-neon-purple mb-3",children:[I.jsxs("div",{className:"text-lg font-bold mb-1",children:[a.status===ft.BlackWin&&"🎉 黑棋获胜！",a.status===ft.WhiteWin&&"💔 白棋获胜！",a.status===ft.Draw&&"🤝 平局！"]}),I.jsxs("div",{className:"text-xs text-gray-300",children:[a.status===ft.BlackWin&&"恭喜你战胜了AI！",a.status===ft.WhiteWin&&"AI略胜一筹，再接再厉！",a.status===ft.Draw&&"棋逢对手！"]})]}),I.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[I.jsx("button",{onClick:L,className:"px-3 py-2 bg-neon-purple hover:bg-neon-purple/80 text-white rounded-lg font-semibold transition-all text-sm",children:"🔄 重新开始"}),I.jsxs("button",{onClick:P,disabled:se===0||!g||a.stats.totalMoves<2,className:"px-3 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-neon-cyan hover:text-neon-cyan disabled:opacity-30 disabled:cursor-not-allowed text-sm",children:["↶ 悔棋 (",se,")"]})]}),I.jsx("div",{className:"mt-2",children:I.jsx("button",{onClick:Z,disabled:!g,className:"w-full px-3 py-2 bg-space-dark border border-gray-700 text-gray-300 rounded-lg font-semibold transition-all hover:border-red-500 hover:text-red-500 disabled:opacity-30 disabled:cursor-not-allowed text-sm",children:"🏳️ 认输"})}),I.jsxs("div",{className:"mt-3 text-center text-xs text-gray-400",children:["难度:"," ",I.jsxs("span",{className:"text-neon-purple font-semibold",children:[i===Rt.Easy&&"😊 简单",i===Rt.Medium&&"🤔 中等",i===Rt.Hard&&"😈 困难",i===Rt.Master&&"🔥 大师"]})]})]}),I.jsx("div",{className:"flex justify-center mb-3",children:I.jsxs("div",{className:"glass-effect rounded-xl p-1 w-full overflow-x-auto",children:[I.jsx("div",{className:"flex justify-center",children:I.jsx(DR,{board:a.board,onCellClick:z,winningLine:a.winningLine,lastMove:a.moves.length>0?a.moves[a.moves.length-1].position:null,disabled:!g||x||a.currentPlayer!==qe.Black,predictedPositions:N})}),x&&I.jsx("div",{className:"mt-2 text-center",children:I.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-2 bg-neon-purple/20 border border-neon-purple rounded-lg",children:[I.jsx("div",{className:"w-2 h-2 bg-neon-purple rounded-full animate-ping"}),I.jsx("span",{className:"text-neon-purple font-semibold text-sm",children:"AI正在思考最佳策略..."})]})})]})}),I.jsx("div",{className:"glass-effect rounded-xl p-3",children:I.jsx(xx,{prediction:E,isAnalyzing:b})}),I.jsx("div",{className:"mt-3 text-center text-gray-400 text-xs",children:I.jsx("p",{children:"五子连珠即可获胜 · 黑棋先行 · AI会猜测你的意图"})})]})]})}function UR(){const[s,e]=q.useState(null);return q.useEffect(()=>{const i=yR();e(i)},[]),s===null?I.jsx("div",{className:"min-h-screen bg-space-darkest flex items-center justify-center",children:I.jsx("div",{className:"text-white text-xl",children:"检测设备类型中..."})}):s?I.jsx(NR,{}):I.jsx(CR,{})}function LR(){return I.jsxs(CM,{children:[I.jsx(Zc,{path:"/",element:I.jsx(hR,{})}),I.jsx(Zc,{path:"/home",element:I.jsx(gR,{})}),I.jsx(Zc,{path:"/game",element:I.jsx(UR,{})})]})}FS.createRoot(document.getElementById("root")).render(I.jsx(q.StrictMode,{children:I.jsx(JM,{children:I.jsx(LR,{})})}))});export default OR();
