function ch(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const a in r)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(r,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>r[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ad(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ld={exports:{}},Zi={},zd={exports:{}},q={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=Symbol.for("react.element"),dh=Symbol.for("react.portal"),fh=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),mh=Symbol.for("react.profiler"),hh=Symbol.for("react.provider"),gh=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),yh=Symbol.for("react.suspense"),xh=Symbol.for("react.memo"),wh=Symbol.for("react.lazy"),Ru=Symbol.iterator;function Sh(e){return e===null||typeof e!="object"?null:(e=Ru&&e[Ru]||e["@@iterator"],typeof e=="function"?e:null)}var Md={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dd=Object.assign,Fd={};function kr(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Md}kr.prototype.isReactComponent={};kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bd(){}Bd.prototype=kr.prototype;function wl(e,t,n){this.props=e,this.context=t,this.refs=Fd,this.updater=n||Md}var Sl=wl.prototype=new Bd;Sl.constructor=wl;Dd(Sl,kr.prototype);Sl.isPureReactComponent=!0;var Nu=Array.isArray,$d=Object.prototype.hasOwnProperty,kl={current:null},Hd={key:!0,ref:!0,__self:!0,__source:!0};function Ud(e,t,n){var r,a={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)$d.call(t,r)&&!Hd.hasOwnProperty(r)&&(a[r]=t[r]);var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];a.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)a[r]===void 0&&(a[r]=s[r]);return{$$typeof:Sa,type:e,key:i,ref:o,props:a,_owner:kl.current}}function kh(e,t){return{$$typeof:Sa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function El(e){return typeof e=="object"&&e!==null&&e.$$typeof===Sa}function Eh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Iu=/\/+/g;function Ro(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Eh(""+e.key):t.toString(36)}function oi(e,t,n,r,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Sa:case dh:o=!0}}if(o)return o=e,a=a(o),e=r===""?"."+Ro(o,0):r,Nu(a)?(n="",e!=null&&(n=e.replace(Iu,"$&/")+"/"),oi(a,t,n,"",function(c){return c})):a!=null&&(El(a)&&(a=kh(a,n+(!a.key||o&&o.key===a.key?"":(""+a.key).replace(Iu,"$&/")+"/")+e)),t.push(a)),1;if(o=0,r=r===""?".":r+":",Nu(e))for(var s=0;s<e.length;s++){i=e[s];var l=r+Ro(i,s);o+=oi(i,t,n,l,a)}else if(l=Sh(e),typeof l=="function")for(e=l.call(e),s=0;!(i=e.next()).done;)i=i.value,l=r+Ro(i,s++),o+=oi(i,t,n,l,a);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function La(e,t,n){if(e==null)return e;var r=[],a=0;return oi(e,r,"","",function(i){return t.call(n,i,a++)}),r}function Ch(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},si={transition:null},jh={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:si,ReactCurrentOwner:kl};q.Children={map:La,forEach:function(e,t,n){La(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return La(e,function(){t++}),t},toArray:function(e){return La(e,function(t){return t})||[]},only:function(e){if(!El(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};q.Component=kr;q.Fragment=fh;q.Profiler=mh;q.PureComponent=wl;q.StrictMode=ph;q.Suspense=yh;q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jh;q.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dd({},e.props),a=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=kl.current),t.key!==void 0&&(a=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)$d.call(t,l)&&!Hd.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:Sa,type:e.type,key:a,ref:i,props:r,_owner:o}};q.createContext=function(e){return e={$$typeof:gh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:hh,_context:e},e.Consumer=e};q.createElement=Ud;q.createFactory=function(e){var t=Ud.bind(null,e);return t.type=e,t};q.createRef=function(){return{current:null}};q.forwardRef=function(e){return{$$typeof:vh,render:e}};q.isValidElement=El;q.lazy=function(e){return{$$typeof:wh,_payload:{_status:-1,_result:e},_init:Ch}};q.memo=function(e,t){return{$$typeof:xh,type:e,compare:t===void 0?null:t}};q.startTransition=function(e){var t=si.transition;si.transition={};try{e()}finally{si.transition=t}};q.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};q.useCallback=function(e,t){return We.current.useCallback(e,t)};q.useContext=function(e){return We.current.useContext(e)};q.useDebugValue=function(){};q.useDeferredValue=function(e){return We.current.useDeferredValue(e)};q.useEffect=function(e,t){return We.current.useEffect(e,t)};q.useId=function(){return We.current.useId()};q.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};q.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};q.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};q.useMemo=function(e,t){return We.current.useMemo(e,t)};q.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};q.useRef=function(e){return We.current.useRef(e)};q.useState=function(e){return We.current.useState(e)};q.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};q.useTransition=function(){return We.current.useTransition()};q.version="18.2.0";zd.exports=q;var O=zd.exports;const Ve=Ad(O),bh=ch({__proto__:null,default:Ve},[O]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _h=O,Ph=Symbol.for("react.element"),Th=Symbol.for("react.fragment"),Oh=Object.prototype.hasOwnProperty,Rh=_h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Nh={key:!0,ref:!0,__self:!0,__source:!0};function Yd(e,t,n){var r,a={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Oh.call(t,r)&&!Nh.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)a[r]===void 0&&(a[r]=t[r]);return{$$typeof:Ph,type:e,key:i,ref:o,props:a,_owner:Rh.current}}Zi.Fragment=Th;Zi.jsx=Yd;Zi.jsxs=Yd;Ld.exports=Zi;var u=Ld.exports,ms={},Vd={exports:{}},ot={},Wd={exports:{}},qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,z){var M=R.length;R.push(z);e:for(;0<M;){var ee=M-1>>>1,re=R[ee];if(0<a(re,z))R[ee]=z,R[M]=re,M=ee;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var z=R[0],M=R.pop();if(M!==z){R[0]=M;e:for(var ee=0,re=R.length,et=re>>>1;ee<et;){var Se=2*(ee+1)-1,lt=R[Se],ue=Se+1,xe=R[ue];if(0>a(lt,M))ue<re&&0>a(xe,lt)?(R[ee]=xe,R[ue]=M,ee=ue):(R[ee]=lt,R[Se]=M,ee=Se);else if(ue<re&&0>a(xe,M))R[ee]=xe,R[ue]=M,ee=ue;else break e}}return z}function a(R,z){var M=R.sortIndex-z.sortIndex;return M!==0?M:R.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var l=[],c=[],m=1,p=null,g=3,v=!1,x=!1,w=!1,k=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(R){for(var z=n(c);z!==null;){if(z.callback===null)r(c);else if(z.startTime<=R)r(c),z.sortIndex=z.expirationTime,t(l,z);else break;z=n(c)}}function y(R){if(w=!1,h(R),!x)if(n(l)!==null)x=!0,Ie(S);else{var z=n(c);z!==null&&Me(y,z.startTime-R)}}function S(R,z){x=!1,w&&(w=!1,f(b),b=-1),v=!0;var M=g;try{for(h(z),p=n(l);p!==null&&(!(p.expirationTime>z)||R&&!F());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,g=p.priorityLevel;var re=ee(p.expirationTime<=z);z=e.unstable_now(),typeof re=="function"?p.callback=re:p===n(l)&&r(l),h(z)}else r(l);p=n(l)}if(p!==null)var et=!0;else{var Se=n(c);Se!==null&&Me(y,Se.startTime-z),et=!1}return et}finally{p=null,g=M,v=!1}}var C=!1,E=null,b=-1,j=5,T=-1;function F(){return!(e.unstable_now()-T<j)}function B(){if(E!==null){var R=e.unstable_now();T=R;var z=!0;try{z=E(!0,R)}finally{z?L():(C=!1,E=null)}}else C=!1}var L;if(typeof d=="function")L=function(){d(B)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Pe=le.port2;le.port1.onmessage=B,L=function(){Pe.postMessage(null)}}else L=function(){k(B,0)};function Ie(R){E=R,C||(C=!0,L())}function Me(R,z){b=k(function(){R(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){x||v||(x=!0,Ie(S))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var M=g;g=z;try{return R()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,z){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var M=g;g=R;try{return z()}finally{g=M}},e.unstable_scheduleCallback=function(R,z,M){var ee=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ee+M:ee):M=ee,R){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=M+re,R={id:m++,callback:z,priorityLevel:R,startTime:M,expirationTime:re,sortIndex:-1},M>ee?(R.sortIndex=M,t(c,R),n(l)===null&&R===n(c)&&(w?(f(b),b=-1):w=!0,Me(y,M-ee))):(R.sortIndex=re,t(l,R),x||v||(x=!0,Ie(S))),R},e.unstable_shouldYield=F,e.unstable_wrapCallback=function(R){var z=g;return function(){var M=g;g=z;try{return R.apply(this,arguments)}finally{g=M}}}})(qd);Wd.exports=qd;var Ih=Wd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qd=O,it=Ih;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gd=new Set,ta={};function Bn(e,t){cr(e,t),cr(e+"Capture",t)}function cr(e,t){for(ta[e]=t,e=0;e<t.length;e++)Gd.add(t[e])}var $t=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),hs=Object.prototype.hasOwnProperty,Ah=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Au={},Lu={};function Lh(e){return hs.call(Lu,e)?!0:hs.call(Au,e)?!1:Ah.test(e)?Lu[e]=!0:(Au[e]=!0,!1)}function zh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Mh(e,t,n,r){if(t===null||typeof t>"u"||zh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function qe(e,t,n,r,a,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ze[e]=new qe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ze[t]=new qe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ze[e]=new qe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ze[e]=new qe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ze[e]=new qe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ze[e]=new qe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ze[e]=new qe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ze[e]=new qe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ze[e]=new qe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Cl=/[\-:]([a-z])/g;function jl(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Cl,jl);ze[t]=new qe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Cl,jl);ze[t]=new qe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Cl,jl);ze[t]=new qe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ze[e]=new qe(e,1,!1,e.toLowerCase(),null,!1,!1)});ze.xlinkHref=new qe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ze[e]=new qe(e,1,!1,e.toLowerCase(),null,!0,!0)});function bl(e,t,n,r){var a=ze.hasOwnProperty(t)?ze[t]:null;(a!==null?a.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Mh(t,n,a,r)&&(n=null),r||a===null?Lh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=n===null?a.type===3?!1:"":n:(t=a.attributeName,r=a.attributeNamespace,n===null?e.removeAttribute(t):(a=a.type,n=a===3||a===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Vt=Qd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Yn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),_l=Symbol.for("react.strict_mode"),gs=Symbol.for("react.profiler"),Xd=Symbol.for("react.provider"),Kd=Symbol.for("react.context"),Pl=Symbol.for("react.forward_ref"),vs=Symbol.for("react.suspense"),ys=Symbol.for("react.suspense_list"),Tl=Symbol.for("react.memo"),Kt=Symbol.for("react.lazy"),Zd=Symbol.for("react.offscreen"),zu=Symbol.iterator;function Tr(e){return e===null||typeof e!="object"?null:(e=zu&&e[zu]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,No;function Dr(e){if(No===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);No=t&&t[1]||""}return`
`+No+e}var Io=!1;function Ao(e,t){if(!e||Io)return"";Io=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var a=c.stack.split(`
`),i=r.stack.split(`
`),o=a.length-1,s=i.length-1;1<=o&&0<=s&&a[o]!==i[s];)s--;for(;1<=o&&0<=s;o--,s--)if(a[o]!==i[s]){if(o!==1||s!==1)do if(o--,s--,0>s||a[o]!==i[s]){var l=`
`+a[o].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=o&&0<=s);break}}}finally{Io=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Dr(e):""}function Dh(e){switch(e.tag){case 5:return Dr(e.type);case 16:return Dr("Lazy");case 13:return Dr("Suspense");case 19:return Dr("SuspenseList");case 0:case 2:case 15:return e=Ao(e.type,!1),e;case 11:return e=Ao(e.type.render,!1),e;case 1:return e=Ao(e.type,!0),e;default:return""}}function xs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Yn:return"Portal";case gs:return"Profiler";case _l:return"StrictMode";case vs:return"Suspense";case ys:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Kd:return(e.displayName||"Context")+".Consumer";case Xd:return(e._context.displayName||"Context")+".Provider";case Pl:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Tl:return t=e.displayName||null,t!==null?t:xs(e.type)||"Memo";case Kt:t=e._payload,e=e._init;try{return xs(e(t))}catch{}}return null}function Fh(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return xs(t);case 8:return t===_l?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function pn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Jd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Bh(e){var t=Jd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ma(e){e._valueTracker||(e._valueTracker=Bh(e))}function ef(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Jd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ei(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ws(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Mu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=pn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function tf(e,t){t=t.checked,t!=null&&bl(e,"checked",t,!1)}function Ss(e,t){tf(e,t);var n=pn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ks(e,t.type,n):t.hasOwnProperty("defaultValue")&&ks(e,t.type,pn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Du(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ks(e,t,n){(t!=="number"||Ei(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Fr=Array.isArray;function rr(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+pn(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function Es(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Fu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(Fr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:pn(n)}}function nf(e,t){var n=pn(t.value),r=pn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Bu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function rf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Cs(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?rf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Da,af=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,a){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,a)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Da.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function na(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$h=["Webkit","ms","Moz","O"];Object.keys(Vr).forEach(function(e){$h.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Vr[t]=Vr[e]})});function of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Vr.hasOwnProperty(e)&&Vr[e]?(""+t).trim():t+"px"}function sf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,a=of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}var Hh=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function js(e,t){if(t){if(Hh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function bs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var _s=null;function Ol(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ps=null,ar=null,ir=null;function $u(e){if(e=Ca(e)){if(typeof Ps!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ro(t),Ps(e.stateNode,e.type,t))}}function lf(e){ar?ir?ir.push(e):ir=[e]:ar=e}function uf(){if(ar){var e=ar,t=ir;if(ir=ar=null,$u(e),t)for(e=0;e<t.length;e++)$u(t[e])}}function cf(e,t){return e(t)}function df(){}var Lo=!1;function ff(e,t,n){if(Lo)return e(t,n);Lo=!0;try{return cf(e,t,n)}finally{Lo=!1,(ar!==null||ir!==null)&&(df(),uf())}}function ra(e,t){var n=e.stateNode;if(n===null)return null;var r=ro(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var Ts=!1;if($t)try{var Or={};Object.defineProperty(Or,"passive",{get:function(){Ts=!0}}),window.addEventListener("test",Or,Or),window.removeEventListener("test",Or,Or)}catch{Ts=!1}function Uh(e,t,n,r,a,i,o,s,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(m){this.onError(m)}}var Wr=!1,Ci=null,ji=!1,Os=null,Yh={onError:function(e){Wr=!0,Ci=e}};function Vh(e,t,n,r,a,i,o,s,l){Wr=!1,Ci=null,Uh.apply(Yh,arguments)}function Wh(e,t,n,r,a,i,o,s,l){if(Vh.apply(this,arguments),Wr){if(Wr){var c=Ci;Wr=!1,Ci=null}else throw Error(P(198));ji||(ji=!0,Os=c)}}function $n(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pf(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hu(e){if($n(e)!==e)throw Error(P(188))}function qh(e){var t=e.alternate;if(!t){if(t=$n(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Hu(a),e;if(i===r)return Hu(a),t;i=i.sibling}throw Error(P(188))}if(n.return!==r.return)n=a,r=i;else{for(var o=!1,s=a.child;s;){if(s===n){o=!0,n=a,r=i;break}if(s===r){o=!0,r=a,n=i;break}s=s.sibling}if(!o){for(s=i.child;s;){if(s===n){o=!0,n=i,r=a;break}if(s===r){o=!0,r=i,n=a;break}s=s.sibling}if(!o)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function mf(e){return e=qh(e),e!==null?hf(e):null}function hf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=hf(e);if(t!==null)return t;e=e.sibling}return null}var gf=it.unstable_scheduleCallback,Uu=it.unstable_cancelCallback,Qh=it.unstable_shouldYield,Gh=it.unstable_requestPaint,we=it.unstable_now,Xh=it.unstable_getCurrentPriorityLevel,Rl=it.unstable_ImmediatePriority,vf=it.unstable_UserBlockingPriority,bi=it.unstable_NormalPriority,Kh=it.unstable_LowPriority,yf=it.unstable_IdlePriority,Ji=null,Ot=null;function Zh(e){if(Ot&&typeof Ot.onCommitFiberRoot=="function")try{Ot.onCommitFiberRoot(Ji,e,void 0,(e.current.flags&128)===128)}catch{}}var St=Math.clz32?Math.clz32:tg,Jh=Math.log,eg=Math.LN2;function tg(e){return e>>>=0,e===0?32:31-(Jh(e)/eg|0)|0}var Fa=64,Ba=4194304;function Br(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function _i(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~a;s!==0?r=Br(s):(i&=o,i!==0&&(r=Br(i)))}else o=n&~a,o!==0?r=Br(o):i!==0&&(r=Br(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&a)&&(a=r&-r,i=t&-t,a>=i||a===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-St(t),a=1<<n,r|=e[n],t&=~a;return r}function ng(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-St(i),s=1<<o,l=a[o];l===-1?(!(s&n)||s&r)&&(a[o]=ng(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}}function Rs(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xf(){var e=Fa;return Fa<<=1,!(Fa&4194240)&&(Fa=64),e}function zo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ka(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-St(t),e[t]=n}function ag(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-St(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}function Nl(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-St(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var ne=0;function wf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Sf,Il,kf,Ef,Cf,Ns=!1,$a=[],an=null,on=null,sn=null,aa=new Map,ia=new Map,Jt=[],ig="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yu(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":sn=null;break;case"pointerover":case"pointerout":aa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(t.pointerId)}}function Rr(e,t,n,r,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ca(t),t!==null&&Il(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function og(e,t,n,r,a){switch(t){case"focusin":return an=Rr(an,e,t,n,r,a),!0;case"dragenter":return on=Rr(on,e,t,n,r,a),!0;case"mouseover":return sn=Rr(sn,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return aa.set(i,Rr(aa.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,ia.set(i,Rr(ia.get(i)||null,e,t,n,r,a)),!0}return!1}function jf(e){var t=bn(e.target);if(t!==null){var n=$n(t);if(n!==null){if(t=n.tag,t===13){if(t=pf(n),t!==null){e.blockedOn=t,Cf(e.priority,function(){kf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function li(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Is(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);_s=r,n.target.dispatchEvent(r),_s=null}else return t=Ca(n),t!==null&&Il(t),e.blockedOn=n,!1;t.shift()}return!0}function Vu(e,t,n){li(e)&&n.delete(t)}function sg(){Ns=!1,an!==null&&li(an)&&(an=null),on!==null&&li(on)&&(on=null),sn!==null&&li(sn)&&(sn=null),aa.forEach(Vu),ia.forEach(Vu)}function Nr(e,t){e.blockedOn===t&&(e.blockedOn=null,Ns||(Ns=!0,it.unstable_scheduleCallback(it.unstable_NormalPriority,sg)))}function oa(e){function t(a){return Nr(a,e)}if(0<$a.length){Nr($a[0],e);for(var n=1;n<$a.length;n++){var r=$a[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Nr(an,e),on!==null&&Nr(on,e),sn!==null&&Nr(sn,e),aa.forEach(t),ia.forEach(t),n=0;n<Jt.length;n++)r=Jt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Jt.length&&(n=Jt[0],n.blockedOn===null);)jf(n),n.blockedOn===null&&Jt.shift()}var or=Vt.ReactCurrentBatchConfig,Pi=!0;function lg(e,t,n,r){var a=ne,i=or.transition;or.transition=null;try{ne=1,Al(e,t,n,r)}finally{ne=a,or.transition=i}}function ug(e,t,n,r){var a=ne,i=or.transition;or.transition=null;try{ne=4,Al(e,t,n,r)}finally{ne=a,or.transition=i}}function Al(e,t,n,r){if(Pi){var a=Is(e,t,n,r);if(a===null)Wo(e,t,r,Ti,n),Yu(e,r);else if(og(a,e,t,n,r))r.stopPropagation();else if(Yu(e,r),t&4&&-1<ig.indexOf(e)){for(;a!==null;){var i=Ca(a);if(i!==null&&Sf(i),i=Is(e,t,n,r),i===null&&Wo(e,t,r,Ti,n),i===a)break;a=i}a!==null&&r.stopPropagation()}else Wo(e,t,r,null,n)}}var Ti=null;function Is(e,t,n,r){if(Ti=null,e=Ol(r),e=bn(e),e!==null)if(t=$n(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pf(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ti=e,null}function bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xh()){case Rl:return 1;case vf:return 4;case bi:case Kh:return 16;case yf:return 536870912;default:return 16}default:return 16}}var tn=null,Ll=null,ui=null;function _f(){if(ui)return ui;var e,t=Ll,n=t.length,r,a="value"in tn?tn.value:tn.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===a[i-r];r++);return ui=a.slice(e,1<r?1-r:void 0)}function ci(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ha(){return!0}function Wu(){return!1}function st(e){function t(n,r,a,i,o){this._reactName=n,this._targetInst=a,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Ha:Wu,this.isPropagationStopped=Wu,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ha)},persist:function(){},isPersistent:Ha}),t}var Er={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zl=st(Er),Ea=ge({},Er,{view:0,detail:0}),cg=st(Ea),Mo,Do,Ir,eo=ge({},Ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ir&&(Ir&&e.type==="mousemove"?(Mo=e.screenX-Ir.screenX,Do=e.screenY-Ir.screenY):Do=Mo=0,Ir=e),Mo)},movementY:function(e){return"movementY"in e?e.movementY:Do}}),qu=st(eo),dg=ge({},eo,{dataTransfer:0}),fg=st(dg),pg=ge({},Ea,{relatedTarget:0}),Fo=st(pg),mg=ge({},Er,{animationName:0,elapsedTime:0,pseudoElement:0}),hg=st(mg),gg=ge({},Er,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),vg=st(gg),yg=ge({},Er,{data:0}),Qu=st(yg),xg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Sg[e])?!!t[e]:!1}function Ml(){return kg}var Eg=ge({},Ea,{key:function(e){if(e.key){var t=xg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ci(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ml,charCode:function(e){return e.type==="keypress"?ci(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ci(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cg=st(Eg),jg=ge({},eo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=st(jg),bg=ge({},Ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ml}),_g=st(bg),Pg=ge({},Er,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tg=st(Pg),Og=ge({},eo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rg=st(Og),Ng=[9,13,27,32],Dl=$t&&"CompositionEvent"in window,qr=null;$t&&"documentMode"in document&&(qr=document.documentMode);var Ig=$t&&"TextEvent"in window&&!qr,Pf=$t&&(!Dl||qr&&8<qr&&11>=qr),Xu=String.fromCharCode(32),Ku=!1;function Tf(e,t){switch(e){case"keyup":return Ng.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Of(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Wn=!1;function Ag(e,t){switch(e){case"compositionend":return Of(t);case"keypress":return t.which!==32?null:(Ku=!0,Xu);case"textInput":return e=t.data,e===Xu&&Ku?null:e;default:return null}}function Lg(e,t){if(Wn)return e==="compositionend"||!Dl&&Tf(e,t)?(e=_f(),ui=Ll=tn=null,Wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Pf&&t.locale!=="ko"?null:t.data;default:return null}}var zg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zg[e.type]:t==="textarea"}function Rf(e,t,n,r){lf(r),t=Oi(t,"onChange"),0<t.length&&(n=new zl("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qr=null,sa=null;function Mg(e){Hf(e,0)}function to(e){var t=Gn(e);if(ef(t))return e}function Dg(e,t){if(e==="change")return t}var Nf=!1;if($t){var Bo;if($t){var $o="oninput"in document;if(!$o){var Ju=document.createElement("div");Ju.setAttribute("oninput","return;"),$o=typeof Ju.oninput=="function"}Bo=$o}else Bo=!1;Nf=Bo&&(!document.documentMode||9<document.documentMode)}function ec(){Qr&&(Qr.detachEvent("onpropertychange",If),sa=Qr=null)}function If(e){if(e.propertyName==="value"&&to(sa)){var t=[];Rf(t,sa,e,Ol(e)),ff(Mg,t)}}function Fg(e,t,n){e==="focusin"?(ec(),Qr=t,sa=n,Qr.attachEvent("onpropertychange",If)):e==="focusout"&&ec()}function Bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return to(sa)}function $g(e,t){if(e==="click")return to(t)}function Hg(e,t){if(e==="input"||e==="change")return to(t)}function Ug(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:Ug;function la(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!hs.call(t,a)||!Ct(e[a],t[a]))return!1}return!0}function tc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nc(e,t){var n=tc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=tc(n)}}function Af(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Af(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Lf(){for(var e=window,t=Ei();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ei(e.document)}return t}function Fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yg(e){var t=Lf(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Af(n.ownerDocument.documentElement,n)){if(r!==null&&Fl(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=r.end===void 0?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=nc(n,i);var o=nc(n,r);a&&o&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Vg=$t&&"documentMode"in document&&11>=document.documentMode,qn=null,As=null,Gr=null,Ls=!1;function rc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ls||qn==null||qn!==Ei(r)||(r=qn,"selectionStart"in r&&Fl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Gr&&la(Gr,r)||(Gr=r,r=Oi(As,"onSelect"),0<r.length&&(t=new zl("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=qn)))}function Ua(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Qn={animationend:Ua("Animation","AnimationEnd"),animationiteration:Ua("Animation","AnimationIteration"),animationstart:Ua("Animation","AnimationStart"),transitionend:Ua("Transition","TransitionEnd")},Ho={},zf={};$t&&(zf=document.createElement("div").style,"AnimationEvent"in window||(delete Qn.animationend.animation,delete Qn.animationiteration.animation,delete Qn.animationstart.animation),"TransitionEvent"in window||delete Qn.transitionend.transition);function no(e){if(Ho[e])return Ho[e];if(!Qn[e])return e;var t=Qn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zf)return Ho[e]=t[n];return e}var Mf=no("animationend"),Df=no("animationiteration"),Ff=no("animationstart"),Bf=no("transitionend"),$f=new Map,ac="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hn(e,t){$f.set(e,t),Bn(t,[e])}for(var Uo=0;Uo<ac.length;Uo++){var Yo=ac[Uo],Wg=Yo.toLowerCase(),qg=Yo[0].toUpperCase()+Yo.slice(1);hn(Wg,"on"+qg)}hn(Mf,"onAnimationEnd");hn(Df,"onAnimationIteration");hn(Ff,"onAnimationStart");hn("dblclick","onDoubleClick");hn("focusin","onFocus");hn("focusout","onBlur");hn(Bf,"onTransitionEnd");cr("onMouseEnter",["mouseout","mouseover"]);cr("onMouseLeave",["mouseout","mouseover"]);cr("onPointerEnter",["pointerout","pointerover"]);cr("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qg=new Set("cancel close invalid load scroll toggle".split(" ").concat($r));function ic(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Wh(r,t,void 0,e),e.currentTarget=null}function Hf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&a.isPropagationStopped())break e;ic(a,s,c),i=l}else for(o=0;o<r.length;o++){if(s=r[o],l=s.instance,c=s.currentTarget,s=s.listener,l!==i&&a.isPropagationStopped())break e;ic(a,s,c),i=l}}}if(ji)throw e=Os,ji=!1,Os=null,e}function ie(e,t){var n=t[Bs];n===void 0&&(n=t[Bs]=new Set);var r=e+"__bubble";n.has(r)||(Uf(t,e,2,!1),n.add(r))}function Vo(e,t,n){var r=0;t&&(r|=4),Uf(n,e,r,t)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function ua(e){if(!e[Ya]){e[Ya]=!0,Gd.forEach(function(n){n!=="selectionchange"&&(Qg.has(n)||Vo(n,!1,e),Vo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ya]||(t[Ya]=!0,Vo("selectionchange",!1,t))}}function Uf(e,t,n,r){switch(bf(t)){case 1:var a=lg;break;case 4:a=ug;break;default:a=Al}n=a.bind(null,t,n,e),a=void 0,!Ts||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),r?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Wo(e,t,n,r,a){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===a||s.nodeType===8&&s.parentNode===a)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===a||l.nodeType===8&&l.parentNode===a))return;o=o.return}for(;s!==null;){if(o=bn(s),o===null)return;if(l=o.tag,l===5||l===6){r=i=o;continue e}s=s.parentNode}}r=r.return}ff(function(){var c=i,m=Ol(n),p=[];e:{var g=$f.get(e);if(g!==void 0){var v=zl,x=e;switch(e){case"keypress":if(ci(n)===0)break e;case"keydown":case"keyup":v=Cg;break;case"focusin":x="focus",v=Fo;break;case"focusout":x="blur",v=Fo;break;case"beforeblur":case"afterblur":v=Fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=fg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=_g;break;case Mf:case Df:case Ff:v=hg;break;case Bf:v=Tg;break;case"scroll":v=cg;break;case"wheel":v=Rg;break;case"copy":case"cut":case"paste":v=vg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gu}var w=(t&4)!==0,k=!w&&e==="scroll",f=w?g!==null?g+"Capture":null:g;w=[];for(var d=c,h;d!==null;){h=d;var y=h.stateNode;if(h.tag===5&&y!==null&&(h=y,f!==null&&(y=ra(d,f),y!=null&&w.push(ca(d,y,h)))),k)break;d=d.return}0<w.length&&(g=new v(g,x,null,n,m),p.push({event:g,listeners:w}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",g&&n!==_s&&(x=n.relatedTarget||n.fromElement)&&(bn(x)||x[Ht]))break e;if((v||g)&&(g=m.window===m?m:(g=m.ownerDocument)?g.defaultView||g.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=c,x=x?bn(x):null,x!==null&&(k=$n(x),x!==k||x.tag!==5&&x.tag!==6)&&(x=null)):(v=null,x=c),v!==x)){if(w=qu,y="onMouseLeave",f="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(w=Gu,y="onPointerLeave",f="onPointerEnter",d="pointer"),k=v==null?g:Gn(v),h=x==null?g:Gn(x),g=new w(y,d+"leave",v,n,m),g.target=k,g.relatedTarget=h,y=null,bn(m)===c&&(w=new w(f,d+"enter",x,n,m),w.target=h,w.relatedTarget=k,y=w),k=y,v&&x)t:{for(w=v,f=x,d=0,h=w;h;h=Hn(h))d++;for(h=0,y=f;y;y=Hn(y))h++;for(;0<d-h;)w=Hn(w),d--;for(;0<h-d;)f=Hn(f),h--;for(;d--;){if(w===f||f!==null&&w===f.alternate)break t;w=Hn(w),f=Hn(f)}w=null}else w=null;v!==null&&oc(p,g,v,w,!1),x!==null&&k!==null&&oc(p,k,x,w,!0)}}e:{if(g=c?Gn(c):window,v=g.nodeName&&g.nodeName.toLowerCase(),v==="select"||v==="input"&&g.type==="file")var S=Dg;else if(Zu(g))if(Nf)S=Hg;else{S=Bg;var C=Fg}else(v=g.nodeName)&&v.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(S=$g);if(S&&(S=S(e,c))){Rf(p,S,n,m);break e}C&&C(e,g,c),e==="focusout"&&(C=g._wrapperState)&&C.controlled&&g.type==="number"&&ks(g,"number",g.value)}switch(C=c?Gn(c):window,e){case"focusin":(Zu(C)||C.contentEditable==="true")&&(qn=C,As=c,Gr=null);break;case"focusout":Gr=As=qn=null;break;case"mousedown":Ls=!0;break;case"contextmenu":case"mouseup":case"dragend":Ls=!1,rc(p,n,m);break;case"selectionchange":if(Vg)break;case"keydown":case"keyup":rc(p,n,m)}var E;if(Dl)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Wn?Tf(e,n)&&(b="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(Pf&&n.locale!=="ko"&&(Wn||b!=="onCompositionStart"?b==="onCompositionEnd"&&Wn&&(E=_f()):(tn=m,Ll="value"in tn?tn.value:tn.textContent,Wn=!0)),C=Oi(c,b),0<C.length&&(b=new Qu(b,e,null,n,m),p.push({event:b,listeners:C}),E?b.data=E:(E=Of(n),E!==null&&(b.data=E)))),(E=Ig?Ag(e,n):Lg(e,n))&&(c=Oi(c,"onBeforeInput"),0<c.length&&(m=new Qu("onBeforeInput","beforeinput",null,n,m),p.push({event:m,listeners:c}),m.data=E))}Hf(p,t)})}function ca(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Oi(e,t){for(var n=t+"Capture",r=[];e!==null;){var a=e,i=a.stateNode;a.tag===5&&i!==null&&(a=i,i=ra(e,n),i!=null&&r.unshift(ca(e,i,a)),i=ra(e,t),i!=null&&r.push(ca(e,i,a))),e=e.return}return r}function Hn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function oc(e,t,n,r,a){for(var i=t._reactName,o=[];n!==null&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&c!==null&&(s=c,a?(l=ra(n,i),l!=null&&o.unshift(ca(n,l,s))):a||(l=ra(n,i),l!=null&&o.push(ca(n,l,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Gg=/\r\n?/g,Xg=/\u0000|\uFFFD/g;function sc(e){return(typeof e=="string"?e:""+e).replace(Gg,`
`).replace(Xg,"")}function Va(e,t,n){if(t=sc(t),sc(e)!==t&&n)throw Error(P(425))}function Ri(){}var zs=null,Ms=null;function Ds(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fs=typeof setTimeout=="function"?setTimeout:void 0,Kg=typeof clearTimeout=="function"?clearTimeout:void 0,lc=typeof Promise=="function"?Promise:void 0,Zg=typeof queueMicrotask=="function"?queueMicrotask:typeof lc<"u"?function(e){return lc.resolve(null).then(e).catch(Jg)}:Fs;function Jg(e){setTimeout(function(){throw e})}function qo(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(r===0){e.removeChild(a),oa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=a}while(n);oa(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function uc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Cr=Math.random().toString(36).slice(2),Tt="__reactFiber$"+Cr,da="__reactProps$"+Cr,Ht="__reactContainer$"+Cr,Bs="__reactEvents$"+Cr,ev="__reactListeners$"+Cr,tv="__reactHandles$"+Cr;function bn(e){var t=e[Tt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ht]||n[Tt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=uc(e);e!==null;){if(n=e[Tt])return n;e=uc(e)}return t}e=n,n=e.parentNode}return null}function Ca(e){return e=e[Tt]||e[Ht],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ro(e){return e[da]||null}var $s=[],Xn=-1;function gn(e){return{current:e}}function se(e){0>Xn||(e.current=$s[Xn],$s[Xn]=null,Xn--)}function ae(e,t){Xn++,$s[Xn]=e.current,e.current=t}var mn={},$e=gn(mn),Ke=gn(!1),Ln=mn;function dr(e,t){var n=e.type.contextTypes;if(!n)return mn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a={},i;for(i in n)a[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function Ze(e){return e=e.childContextTypes,e!=null}function Ni(){se(Ke),se($e)}function cc(e,t,n){if($e.current!==mn)throw Error(P(168));ae($e,t),ae(Ke,n)}function Yf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var a in r)if(!(a in t))throw Error(P(108,Fh(e)||"Unknown",a));return ge({},n,r)}function Ii(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mn,Ln=$e.current,ae($e,e),ae(Ke,Ke.current),!0}function dc(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Yf(e,t,Ln),r.__reactInternalMemoizedMergedChildContext=e,se(Ke),se($e),ae($e,e)):se(Ke),ae(Ke,n)}var Mt=null,ao=!1,Qo=!1;function Vf(e){Mt===null?Mt=[e]:Mt.push(e)}function nv(e){ao=!0,Vf(e)}function vn(){if(!Qo&&Mt!==null){Qo=!0;var e=0,t=ne;try{var n=Mt;for(ne=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,ao=!1}catch(a){throw Mt!==null&&(Mt=Mt.slice(e+1)),gf(Rl,vn),a}finally{ne=t,Qo=!1}}return null}var Kn=[],Zn=0,Ai=null,Li=0,ut=[],ct=0,zn=null,Dt=1,Ft="";function kn(e,t){Kn[Zn++]=Li,Kn[Zn++]=Ai,Ai=e,Li=t}function Wf(e,t,n){ut[ct++]=Dt,ut[ct++]=Ft,ut[ct++]=zn,zn=e;var r=Dt;e=Ft;var a=32-St(r)-1;r&=~(1<<a),n+=1;var i=32-St(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,Dt=1<<32-St(t)+a|n<<a|r,Ft=i+e}else Dt=1<<i|n<<a|r,Ft=e}function Bl(e){e.return!==null&&(kn(e,1),Wf(e,1,0))}function $l(e){for(;e===Ai;)Ai=Kn[--Zn],Kn[Zn]=null,Li=Kn[--Zn],Kn[Zn]=null;for(;e===zn;)zn=ut[--ct],ut[ct]=null,Ft=ut[--ct],ut[ct]=null,Dt=ut[--ct],ut[ct]=null}var at=null,rt=null,de=!1,wt=null;function qf(e,t){var n=dt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function fc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,rt=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,rt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=zn!==null?{id:Dt,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=dt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,at=e,rt=null,!0):!1;default:return!1}}function Hs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Us(e){if(de){var t=rt;if(t){var n=t;if(!fc(e,t)){if(Hs(e))throw Error(P(418));t=ln(n.nextSibling);var r=at;t&&fc(e,t)?qf(r,n):(e.flags=e.flags&-4097|2,de=!1,at=e)}}else{if(Hs(e))throw Error(P(418));e.flags=e.flags&-4097|2,de=!1,at=e}}}function pc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function Wa(e){if(e!==at)return!1;if(!de)return pc(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ds(e.type,e.memoizedProps)),t&&(t=rt)){if(Hs(e))throw Qf(),Error(P(418));for(;t;)qf(e,t),t=ln(t.nextSibling)}if(pc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){rt=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}rt=null}}else rt=at?ln(e.stateNode.nextSibling):null;return!0}function Qf(){for(var e=rt;e;)e=ln(e.nextSibling)}function fr(){rt=at=null,de=!1}function Hl(e){wt===null?wt=[e]:wt.push(e)}var rv=Vt.ReactCurrentBatchConfig;function yt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var zi=gn(null),Mi=null,Jn=null,Ul=null;function Yl(){Ul=Jn=Mi=null}function Vl(e){var t=zi.current;se(zi),e._currentValue=t}function Ys(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function sr(e,t){Mi=e,Ul=Jn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function pt(e){var t=e._currentValue;if(Ul!==e)if(e={context:e,memoizedValue:t,next:null},Jn===null){if(Mi===null)throw Error(P(308));Jn=e,Mi.dependencies={lanes:0,firstContext:e}}else Jn=Jn.next=e;return t}var _n=null;function Wl(e){_n===null?_n=[e]:_n.push(e)}function Gf(e,t,n,r){var a=t.interleaved;return a===null?(n.next=n,Wl(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ut(e,r)}function Ut(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Zt=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Bt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function un(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var a=r.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ut(e,n)}return a=r.interleaved,a===null?(t.next=t,Wl(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ut(e,n)}function di(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}function mc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?a=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Di(e,t,n,r){var a=e.updateQueue;Zt=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,s=a.shared.pending;if(s!==null){a.shared.pending=null;var l=s,c=l.next;l.next=null,o===null?i=c:o.next=c,o=l;var m=e.alternate;m!==null&&(m=m.updateQueue,s=m.lastBaseUpdate,s!==o&&(s===null?m.firstBaseUpdate=c:s.next=c,m.lastBaseUpdate=l))}if(i!==null){var p=a.baseState;o=0,m=c=l=null,s=i;do{var g=s.lane,v=s.eventTime;if((r&g)===g){m!==null&&(m=m.next={eventTime:v,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var x=e,w=s;switch(g=t,v=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){p=x.call(v,p,g);break e}p=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,g=typeof x=="function"?x.call(v,p,g):x,g==null)break e;p=ge({},p,g);break e;case 2:Zt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=a.effects,g===null?a.effects=[s]:g.push(s))}else v={eventTime:v,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},m===null?(c=m=v,l=p):m=m.next=v,o|=g;if(s=s.next,s===null){if(s=a.shared.pending,s===null)break;g=s,s=g.next,g.next=null,a.lastBaseUpdate=g,a.shared.pending=null}}while(1);if(m===null&&(l=p),a.baseState=l,a.firstBaseUpdate=c,a.lastBaseUpdate=m,t=a.shared.interleaved,t!==null){a=t;do o|=a.lane,a=a.next;while(a!==t)}else i===null&&(a.shared.lanes=0);Dn|=o,e.lanes=o,e.memoizedState=p}}function hc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(a!==null){if(r.callback=null,r=n,typeof a!="function")throw Error(P(191,a));a.call(r)}}}var Kf=new Qd.Component().refs;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var io={isMounted:function(e){return(e=e._reactInternals)?$n(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ye(),a=dn(e),i=Bt(r,a);i.payload=t,n!=null&&(i.callback=n),t=un(e,i,a),t!==null&&(kt(t,e,a,r),di(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ye(),a=dn(e),i=Bt(r,a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=un(e,i,a),t!==null&&(kt(t,e,a,r),di(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ye(),r=dn(e),a=Bt(n,r);a.tag=2,t!=null&&(a.callback=t),t=un(e,a,r),t!==null&&(kt(t,e,r,n),di(t,e,r))}};function gc(e,t,n,r,a,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!la(n,r)||!la(a,i):!0}function Zf(e,t,n){var r=!1,a=mn,i=t.contextType;return typeof i=="object"&&i!==null?i=pt(i):(a=Ze(t)?Ln:$e.current,r=t.contextTypes,i=(r=r!=null)?dr(e,a):mn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=io,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Ws(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs=Kf,ql(e);var i=t.contextType;typeof i=="object"&&i!==null?a.context=pt(i):(i=Ze(t)?Ln:$e.current,a.context=dr(e,i)),a.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Vs(e,t,i,n),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&io.enqueueReplaceState(a,a.state,null),Di(e,n,a,r),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function Ar(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var a=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=a.refs;s===Kf&&(s=a.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function qa(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function yc(e){var t=e._init;return t(e._payload)}function Jf(e){function t(f,d){if(e){var h=f.deletions;h===null?(f.deletions=[d],f.flags|=16):h.push(d)}}function n(f,d){if(!e)return null;for(;d!==null;)t(f,d),d=d.sibling;return null}function r(f,d){for(f=new Map;d!==null;)d.key!==null?f.set(d.key,d):f.set(d.index,d),d=d.sibling;return f}function a(f,d){return f=fn(f,d),f.index=0,f.sibling=null,f}function i(f,d,h){return f.index=h,e?(h=f.alternate,h!==null?(h=h.index,h<d?(f.flags|=2,d):h):(f.flags|=2,d)):(f.flags|=1048576,d)}function o(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,d,h,y){return d===null||d.tag!==6?(d=ts(h,f.mode,y),d.return=f,d):(d=a(d,h),d.return=f,d)}function l(f,d,h,y){var S=h.type;return S===Vn?m(f,d,h.props.children,y,h.key):d!==null&&(d.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kt&&yc(S)===d.type)?(y=a(d,h.props),y.ref=Ar(f,d,h),y.return=f,y):(y=vi(h.type,h.key,h.props,null,f.mode,y),y.ref=Ar(f,d,h),y.return=f,y)}function c(f,d,h,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==h.containerInfo||d.stateNode.implementation!==h.implementation?(d=ns(h,f.mode,y),d.return=f,d):(d=a(d,h.children||[]),d.return=f,d)}function m(f,d,h,y,S){return d===null||d.tag!==7?(d=Rn(h,f.mode,y,S),d.return=f,d):(d=a(d,h),d.return=f,d)}function p(f,d,h){if(typeof d=="string"&&d!==""||typeof d=="number")return d=ts(""+d,f.mode,h),d.return=f,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case za:return h=vi(d.type,d.key,d.props,null,f.mode,h),h.ref=Ar(f,null,d),h.return=f,h;case Yn:return d=ns(d,f.mode,h),d.return=f,d;case Kt:var y=d._init;return p(f,y(d._payload),h)}if(Fr(d)||Tr(d))return d=Rn(d,f.mode,h,null),d.return=f,d;qa(f,d)}return null}function g(f,d,h,y){var S=d!==null?d.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return S!==null?null:s(f,d,""+h,y);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case za:return h.key===S?l(f,d,h,y):null;case Yn:return h.key===S?c(f,d,h,y):null;case Kt:return S=h._init,g(f,d,S(h._payload),y)}if(Fr(h)||Tr(h))return S!==null?null:m(f,d,h,y,null);qa(f,h)}return null}function v(f,d,h,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(h)||null,s(d,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case za:return f=f.get(y.key===null?h:y.key)||null,l(d,f,y,S);case Yn:return f=f.get(y.key===null?h:y.key)||null,c(d,f,y,S);case Kt:var C=y._init;return v(f,d,h,C(y._payload),S)}if(Fr(y)||Tr(y))return f=f.get(h)||null,m(d,f,y,S,null);qa(d,y)}return null}function x(f,d,h,y){for(var S=null,C=null,E=d,b=d=0,j=null;E!==null&&b<h.length;b++){E.index>b?(j=E,E=null):j=E.sibling;var T=g(f,E,h[b],y);if(T===null){E===null&&(E=j);break}e&&E&&T.alternate===null&&t(f,E),d=i(T,d,b),C===null?S=T:C.sibling=T,C=T,E=j}if(b===h.length)return n(f,E),de&&kn(f,b),S;if(E===null){for(;b<h.length;b++)E=p(f,h[b],y),E!==null&&(d=i(E,d,b),C===null?S=E:C.sibling=E,C=E);return de&&kn(f,b),S}for(E=r(f,E);b<h.length;b++)j=v(E,f,b,h[b],y),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?b:j.key),d=i(j,d,b),C===null?S=j:C.sibling=j,C=j);return e&&E.forEach(function(F){return t(f,F)}),de&&kn(f,b),S}function w(f,d,h,y){var S=Tr(h);if(typeof S!="function")throw Error(P(150));if(h=S.call(h),h==null)throw Error(P(151));for(var C=S=null,E=d,b=d=0,j=null,T=h.next();E!==null&&!T.done;b++,T=h.next()){E.index>b?(j=E,E=null):j=E.sibling;var F=g(f,E,T.value,y);if(F===null){E===null&&(E=j);break}e&&E&&F.alternate===null&&t(f,E),d=i(F,d,b),C===null?S=F:C.sibling=F,C=F,E=j}if(T.done)return n(f,E),de&&kn(f,b),S;if(E===null){for(;!T.done;b++,T=h.next())T=p(f,T.value,y),T!==null&&(d=i(T,d,b),C===null?S=T:C.sibling=T,C=T);return de&&kn(f,b),S}for(E=r(f,E);!T.done;b++,T=h.next())T=v(E,f,b,T.value,y),T!==null&&(e&&T.alternate!==null&&E.delete(T.key===null?b:T.key),d=i(T,d,b),C===null?S=T:C.sibling=T,C=T);return e&&E.forEach(function(B){return t(f,B)}),de&&kn(f,b),S}function k(f,d,h,y){if(typeof h=="object"&&h!==null&&h.type===Vn&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case za:e:{for(var S=h.key,C=d;C!==null;){if(C.key===S){if(S=h.type,S===Vn){if(C.tag===7){n(f,C.sibling),d=a(C,h.props.children),d.return=f,f=d;break e}}else if(C.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Kt&&yc(S)===C.type){n(f,C.sibling),d=a(C,h.props),d.ref=Ar(f,C,h),d.return=f,f=d;break e}n(f,C);break}else t(f,C);C=C.sibling}h.type===Vn?(d=Rn(h.props.children,f.mode,y,h.key),d.return=f,f=d):(y=vi(h.type,h.key,h.props,null,f.mode,y),y.ref=Ar(f,d,h),y.return=f,f=y)}return o(f);case Yn:e:{for(C=h.key;d!==null;){if(d.key===C)if(d.tag===4&&d.stateNode.containerInfo===h.containerInfo&&d.stateNode.implementation===h.implementation){n(f,d.sibling),d=a(d,h.children||[]),d.return=f,f=d;break e}else{n(f,d);break}else t(f,d);d=d.sibling}d=ns(h,f.mode,y),d.return=f,f=d}return o(f);case Kt:return C=h._init,k(f,d,C(h._payload),y)}if(Fr(h))return x(f,d,h,y);if(Tr(h))return w(f,d,h,y);qa(f,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,d!==null&&d.tag===6?(n(f,d.sibling),d=a(d,h),d.return=f,f=d):(n(f,d),d=ts(h,f.mode,y),d.return=f,f=d),o(f)):n(f,d)}return k}var pr=Jf(!0),ep=Jf(!1),ja={},Rt=gn(ja),fa=gn(ja),pa=gn(ja);function Pn(e){if(e===ja)throw Error(P(174));return e}function Ql(e,t){switch(ae(pa,t),ae(fa,e),ae(Rt,ja),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Cs(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Cs(t,e)}se(Rt),ae(Rt,t)}function mr(){se(Rt),se(fa),se(pa)}function tp(e){Pn(pa.current);var t=Pn(Rt.current),n=Cs(t,e.type);t!==n&&(ae(fa,e),ae(Rt,n))}function Gl(e){fa.current===e&&(se(Rt),se(fa))}var me=gn(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Go=[];function Xl(){for(var e=0;e<Go.length;e++)Go[e]._workInProgressVersionPrimary=null;Go.length=0}var fi=Vt.ReactCurrentDispatcher,Xo=Vt.ReactCurrentBatchConfig,Mn=0,he=null,je=null,Oe=null,Bi=!1,Xr=!1,ma=0,av=0;function De(){throw Error(P(321))}function Kl(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Zl(e,t,n,r,a,i){if(Mn=i,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,fi.current=e===null||e.memoizedState===null?lv:uv,e=n(r,a),Xr){i=0;do{if(Xr=!1,ma=0,25<=i)throw Error(P(301));i+=1,Oe=je=null,t.updateQueue=null,fi.current=cv,e=n(r,a)}while(Xr)}if(fi.current=$i,t=je!==null&&je.next!==null,Mn=0,Oe=je=he=null,Bi=!1,t)throw Error(P(300));return e}function Jl(){var e=ma!==0;return ma=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?he.memoizedState=Oe=e:Oe=Oe.next=e,Oe}function mt(){if(je===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var t=Oe===null?he.memoizedState:Oe.next;if(t!==null)Oe=t,je=e;else{if(e===null)throw Error(P(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},Oe===null?he.memoizedState=Oe=e:Oe=Oe.next=e}return Oe}function ha(e,t){return typeof t=="function"?t(e):t}function Ko(e){var t=mt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=je,a=r.baseQueue,i=n.pending;if(i!==null){if(a!==null){var o=a.next;a.next=i.next,i.next=o}r.baseQueue=a=i,n.pending=null}if(a!==null){i=a.next,r=r.baseState;var s=o=null,l=null,c=i;do{var m=c.lane;if((Mn&m)===m)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:m,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(s=l=p,o=r):l=l.next=p,he.lanes|=m,Dn|=m}c=c.next}while(c!==null&&c!==i);l===null?o=r:l.next=s,Ct(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){a=e;do i=a.lane,he.lanes|=i,Dn|=i,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zo(e){var t=mt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var o=a=a.next;do i=e(i,o.action),o=o.next;while(o!==a);Ct(i,t.memoizedState)||(Ge=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function np(){}function rp(e,t){var n=he,r=mt(),a=t(),i=!Ct(r.memoizedState,a);if(i&&(r.memoizedState=a,Ge=!0),r=r.queue,eu(op.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,ga(9,ip.bind(null,n,r,a,t),void 0,null),Ne===null)throw Error(P(349));Mn&30||ap(n,t,a)}return a}function ap(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function ip(e,t,n,r){t.value=n,t.getSnapshot=r,sp(t)&&lp(e)}function op(e,t,n){return n(function(){sp(t)&&lp(e)})}function sp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function lp(e){var t=Ut(e,1);t!==null&&kt(t,e,1,-1)}function xc(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:e},t.queue=e,e=e.dispatch=sv.bind(null,he,e),[t.memoizedState,e]}function ga(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function up(){return mt().memoizedState}function pi(e,t,n,r){var a=bt();he.flags|=e,a.memoizedState=ga(1|t,n,void 0,r===void 0?null:r)}function oo(e,t,n,r){var a=mt();r=r===void 0?null:r;var i=void 0;if(je!==null){var o=je.memoizedState;if(i=o.destroy,r!==null&&Kl(r,o.deps)){a.memoizedState=ga(t,n,i,r);return}}he.flags|=e,a.memoizedState=ga(1|t,n,i,r)}function wc(e,t){return pi(8390656,8,e,t)}function eu(e,t){return oo(2048,8,e,t)}function cp(e,t){return oo(4,2,e,t)}function dp(e,t){return oo(4,4,e,t)}function fp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function pp(e,t,n){return n=n!=null?n.concat([e]):null,oo(4,4,fp.bind(null,t,e),n)}function tu(){}function mp(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function hp(e,t){var n=mt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Kl(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function gp(e,t,n){return Mn&21?(Ct(n,t)||(n=xf(),he.lanes|=n,Dn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function iv(e,t){var n=ne;ne=n!==0&&4>n?n:4,e(!0);var r=Xo.transition;Xo.transition={};try{e(!1),t()}finally{ne=n,Xo.transition=r}}function vp(){return mt().memoizedState}function ov(e,t,n){var r=dn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},yp(e))xp(t,n);else if(n=Gf(e,t,n,r),n!==null){var a=Ye();kt(n,e,r,a),wp(n,t,r)}}function sv(e,t,n){var r=dn(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(yp(e))xp(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,s=i(o,n);if(a.hasEagerState=!0,a.eagerState=s,Ct(s,o)){var l=t.interleaved;l===null?(a.next=a,Wl(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch{}finally{}n=Gf(e,t,a,r),n!==null&&(a=Ye(),kt(n,e,r,a),wp(n,t,r))}}function yp(e){var t=e.alternate;return e===he||t!==null&&t===he}function xp(e,t){Xr=Bi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function wp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Nl(e,n)}}var $i={readContext:pt,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useInsertionEffect:De,useLayoutEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useMutableSource:De,useSyncExternalStore:De,useId:De,unstable_isNewReconciler:!1},lv={readContext:pt,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:pt,useEffect:wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,pi(4194308,4,fp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return pi(4194308,4,e,t)},useInsertionEffect:function(e,t){return pi(4,2,e,t)},useMemo:function(e,t){var n=bt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=bt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ov.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:xc,useDebugValue:tu,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=xc(!1),t=e[0];return e=iv.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,a=bt();if(de){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ne===null)throw Error(P(349));Mn&30||ap(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,wc(op.bind(null,r,i,e),[e]),r.flags|=2048,ga(9,ip.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=bt(),t=Ne.identifierPrefix;if(de){var n=Ft,r=Dt;n=(r&~(1<<32-St(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ma++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=av++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},uv={readContext:pt,useCallback:mp,useContext:pt,useEffect:eu,useImperativeHandle:pp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:hp,useReducer:Ko,useRef:up,useState:function(){return Ko(ha)},useDebugValue:tu,useDeferredValue:function(e){var t=mt();return gp(t,je.memoizedState,e)},useTransition:function(){var e=Ko(ha)[0],t=mt().memoizedState;return[e,t]},useMutableSource:np,useSyncExternalStore:rp,useId:vp,unstable_isNewReconciler:!1},cv={readContext:pt,useCallback:mp,useContext:pt,useEffect:eu,useImperativeHandle:pp,useInsertionEffect:cp,useLayoutEffect:dp,useMemo:hp,useReducer:Zo,useRef:up,useState:function(){return Zo(ha)},useDebugValue:tu,useDeferredValue:function(e){var t=mt();return je===null?t.memoizedState=e:gp(t,je.memoizedState,e)},useTransition:function(){var e=Zo(ha)[0],t=mt().memoizedState;return[e,t]},useMutableSource:np,useSyncExternalStore:rp,useId:vp,unstable_isNewReconciler:!1};function hr(e,t){try{var n="",r=t;do n+=Dh(r),r=r.return;while(r);var a=n}catch(i){a=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:a,digest:null}}function Jo(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function qs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var dv=typeof WeakMap=="function"?WeakMap:Map;function Sp(e,t,n){n=Bt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Ui||(Ui=!0,rl=r),qs(e,t)},n}function kp(e,t,n){n=Bt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){qs(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){qs(e,t),typeof r!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Sc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new dv;var a=new Set;r.set(t,a)}else a=r.get(t),a===void 0&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=jv.bind(null,e,t,n),t.then(e,e))}function kc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ec(e,t,n,r,a){return e.mode&1?(e.flags|=65536,e.lanes=a,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Bt(-1,1),t.tag=2,un(n,t,1))),n.lanes|=1),e)}var fv=Vt.ReactCurrentOwner,Ge=!1;function He(e,t,n,r){t.child=e===null?ep(t,null,n,r):pr(t,e.child,n,r)}function Cc(e,t,n,r,a){n=n.render;var i=t.ref;return sr(t,a),r=Zl(e,t,n,r,i,a),n=Jl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(de&&n&&Bl(t),t.flags|=1,He(e,t,r,a),t.child)}function jc(e,t,n,r,a){if(e===null){var i=n.type;return typeof i=="function"&&!uu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ep(e,t,i,r,a)):(e=vi(n.type,null,r,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&a)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:la,n(o,r)&&e.ref===t.ref)return Yt(e,t,a)}return t.flags|=1,e=fn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ep(e,t,n,r,a){if(e!==null){var i=e.memoizedProps;if(la(i,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=i,(e.lanes&a)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,Yt(e,t,a)}return Qs(e,t,n,r,a)}function Cp(e,t,n){var r=t.pendingProps,a=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(tr,tt),tt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(tr,tt),tt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ae(tr,tt),tt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ae(tr,tt),tt|=r;return He(e,t,a,n),t.child}function jp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Qs(e,t,n,r,a){var i=Ze(n)?Ln:$e.current;return i=dr(t,i),sr(t,a),n=Zl(e,t,n,r,i,a),r=Jl(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(de&&r&&Bl(t),t.flags|=1,He(e,t,n,a),t.child)}function bc(e,t,n,r,a){if(Ze(n)){var i=!0;Ii(t)}else i=!1;if(sr(t,a),t.stateNode===null)mi(e,t),Zf(t,n,r),Ws(t,n,r,a),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=pt(c):(c=Ze(n)?Ln:$e.current,c=dr(t,c));var m=n.getDerivedStateFromProps,p=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";p||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==r||l!==c)&&vc(t,o,r,c),Zt=!1;var g=t.memoizedState;o.state=g,Di(t,r,o,a),l=t.memoizedState,s!==r||g!==l||Ke.current||Zt?(typeof m=="function"&&(Vs(t,n,m,r),l=t.memoizedState),(s=Zt||gc(t,n,s,r,g,l,c))?(p||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),o.props=r,o.state=l,o.context=c,r=s):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Xf(e,t),s=t.memoizedProps,c=t.type===t.elementType?s:yt(t.type,s),o.props=c,p=t.pendingProps,g=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=pt(l):(l=Ze(n)?Ln:$e.current,l=dr(t,l));var v=n.getDerivedStateFromProps;(m=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==p||g!==l)&&vc(t,o,r,l),Zt=!1,g=t.memoizedState,o.state=g,Di(t,r,o,a);var x=t.memoizedState;s!==p||g!==x||Ke.current||Zt?(typeof v=="function"&&(Vs(t,n,v,r),x=t.memoizedState),(c=Zt||gc(t,n,c,r,g,x,l)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,l)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),o.props=r,o.state=x,o.context=l,r=c):(typeof o.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Gs(e,t,n,r,i,a)}function Gs(e,t,n,r,a,i){jp(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return a&&dc(t,n,!1),Yt(e,t,i);r=t.stateNode,fv.current=t;var s=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=pr(t,e.child,null,i),t.child=pr(t,null,s,i)):He(e,t,s,i),t.memoizedState=r.state,a&&dc(t,n,!0),t.child}function bp(e){var t=e.stateNode;t.pendingContext?cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&cc(e,t.context,!1),Ql(e,t.containerInfo)}function _c(e,t,n,r,a){return fr(),Hl(a),t.flags|=256,He(e,t,n,r),t.child}var Xs={dehydrated:null,treeContext:null,retryLane:0};function Ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function _p(e,t,n){var r=t.pendingProps,a=me.current,i=!1,o=(t.flags&128)!==0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(a&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),ae(me,a&1),e===null)return Us(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=uo(o,r,0,null),e=Rn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ks(n),t.memoizedState=Xs,e):nu(t,o));if(a=e.memoizedState,a!==null&&(s=a.dehydrated,s!==null))return pv(e,t,o,r,s,a,n);if(i){i=r.fallback,o=t.mode,a=e.child,s=a.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&t.child!==a?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=fn(a,l),r.subtreeFlags=a.subtreeFlags&14680064),s!==null?i=fn(s,i):(i=Rn(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Ks(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=Xs,r}return i=e.child,e=i.sibling,r=fn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function nu(e,t){return t=uo({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Qa(e,t,n,r){return r!==null&&Hl(r),pr(t,e.child,null,n),e=nu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function pv(e,t,n,r,a,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Jo(Error(P(422))),Qa(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=uo({mode:"visible",children:r.children},a,0,null),i=Rn(i,a,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&pr(t,e.child,null,o),t.child.memoizedState=Ks(o),t.memoizedState=Xs,i);if(!(t.mode&1))return Qa(e,t,o,null);if(a.data==="$!"){if(r=a.nextSibling&&a.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(P(419)),r=Jo(i,r,void 0),Qa(e,t,o,r)}if(s=(o&e.childLanes)!==0,Ge||s){if(r=Ne,r!==null){switch(o&-o){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=a&(r.suspendedLanes|o)?0:a,a!==0&&a!==i.retryLane&&(i.retryLane=a,Ut(e,a),kt(r,e,a,-1))}return lu(),r=Jo(Error(P(421))),Qa(e,t,o,r)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=bv.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,rt=ln(a.nextSibling),at=t,de=!0,wt=null,e!==null&&(ut[ct++]=Dt,ut[ct++]=Ft,ut[ct++]=zn,Dt=e.id,Ft=e.overflow,zn=t),t=nu(t,r.children),t.flags|=4096,t)}function Pc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ys(e.return,t,n)}function es(e,t,n,r,a){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function Pp(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(He(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Pc(e,n,t);else if(e.tag===19)Pc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ae(me,r),!(t.mode&1))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Fi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),es(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Fi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}es(t,!0,n,null,i);break;case"together":es(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function mi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Dn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mv(e,t,n){switch(t.tag){case 3:bp(t),fr();break;case 5:tp(t);break;case 1:Ze(t.type)&&Ii(t);break;case 4:Ql(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;ae(zi,r._currentValue),r._currentValue=a;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ae(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?_p(e,t,n):(ae(me,me.current&1),e=Yt(e,t,n),e!==null?e.sibling:null);ae(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pp(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ae(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,Cp(e,t,n)}return Yt(e,t,n)}var Tp,Zs,Op,Rp;Tp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zs=function(){};Op=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Pn(Rt.current);var i=null;switch(n){case"input":a=ws(e,a),r=ws(e,r),i=[];break;case"select":a=ge({},a,{value:void 0}),r=ge({},r,{value:void 0}),i=[];break;case"textarea":a=Es(e,a),r=Es(e,r),i=[];break;default:typeof a.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ri)}js(n,r);var o;n=null;for(c in a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&a[c]!=null)if(c==="style"){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ta.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var l=r[c];if(s=a!=null?a[c]:void 0,r.hasOwnProperty(c)&&l!==s&&(l!=null||s!=null))if(c==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(i||(i=[]),i.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(i=i||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(i=i||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ta.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ie("scroll",e),i||s===l||(i=[])):(i=i||[]).push(c,l))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}};Rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Lr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags&14680064,r|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function hv(e,t,n){var r=t.pendingProps;switch($l(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Ze(t.type)&&Ni(),Fe(t),null;case 3:return r=t.stateNode,mr(),se(Ke),se($e),Xl(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Wa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wt!==null&&(ol(wt),wt=null))),Zs(e,t),Fe(t),null;case 5:Gl(t);var a=Pn(pa.current);if(n=t.type,e!==null&&t.stateNode!=null)Op(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Fe(t),null}if(e=Pn(Rt.current),Wa(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Tt]=t,r[da]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(a=0;a<$r.length;a++)ie($r[a],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":Mu(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":Fu(r,i),ie("invalid",r)}js(n,i),a=null;for(var o in i)if(i.hasOwnProperty(o)){var s=i[o];o==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&Va(r.textContent,s,e),a=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&Va(r.textContent,s,e),a=["children",""+s]):ta.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&ie("scroll",r)}switch(n){case"input":Ma(r),Du(r,i,!0);break;case"textarea":Ma(r),Bu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ri)}r=a,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=rf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Tt]=t,e[da]=r,Tp(e,t,!1,!1),t.stateNode=e;e:{switch(o=bs(n,r),n){case"dialog":ie("cancel",e),ie("close",e),a=r;break;case"iframe":case"object":case"embed":ie("load",e),a=r;break;case"video":case"audio":for(a=0;a<$r.length;a++)ie($r[a],e);a=r;break;case"source":ie("error",e),a=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),a=r;break;case"details":ie("toggle",e),a=r;break;case"input":Mu(e,r),a=ws(e,r),ie("invalid",e);break;case"option":a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=ge({},r,{value:void 0}),ie("invalid",e);break;case"textarea":Fu(e,r),a=Es(e,r),ie("invalid",e);break;default:a=r}js(n,a),s=a;for(i in s)if(s.hasOwnProperty(i)){var l=s[i];i==="style"?sf(e,l):i==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&af(e,l)):i==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&na(e,l):typeof l=="number"&&na(e,""+l):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(ta.hasOwnProperty(i)?l!=null&&i==="onScroll"&&ie("scroll",e):l!=null&&bl(e,i,l,o))}switch(n){case"input":Ma(e),Du(e,r,!1);break;case"textarea":Ma(e),Bu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+pn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?rr(e,!!r.multiple,i,!1):r.defaultValue!=null&&rr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=Ri)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)Rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Pn(pa.current),Pn(Rt.current),Wa(t)){if(r=t.stateNode,n=t.memoizedProps,r[Tt]=t,(i=r.nodeValue!==n)&&(e=at,e!==null))switch(e.tag){case 3:Va(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Va(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Tt]=t,t.stateNode=r}return Fe(t),null;case 13:if(se(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&rt!==null&&t.mode&1&&!(t.flags&128))Qf(),fr(),t.flags|=98560,i=!1;else if(i=Wa(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(P(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(P(317));i[Tt]=t}else fr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),i=!1}else wt!==null&&(ol(wt),wt=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?be===0&&(be=3):lu())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return mr(),Zs(e,t),e===null&&ua(t.stateNode.containerInfo),Fe(t),null;case 10:return Vl(t.type._context),Fe(t),null;case 17:return Ze(t.type)&&Ni(),Fe(t),null;case 19:if(se(me),i=t.memoizedState,i===null)return Fe(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)Lr(i,!1);else{if(be!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Fi(e),o!==null){for(t.flags|=128,Lr(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ae(me,me.current&1|2),t.child}e=e.sibling}i.tail!==null&&we()>gr&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Fi(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Lr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!de)return Fe(t),null}else 2*we()-i.renderingStartTime>gr&&n!==1073741824&&(t.flags|=128,r=!0,Lr(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=we(),t.sibling=null,n=me.current,ae(me,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return su(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tt&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function gv(e,t){switch($l(t),t.tag){case 1:return Ze(t.type)&&Ni(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return mr(),se(Ke),se($e),Xl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Gl(t),null;case 13:if(se(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));fr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(me),null;case 4:return mr(),null;case 10:return Vl(t.type._context),null;case 22:case 23:return su(),null;case 24:return null;default:return null}}var Ga=!1,Be=!1,vv=typeof WeakSet=="function"?WeakSet:Set,I=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function Js(e,t,n){try{n()}catch(r){ye(e,t,r)}}var Tc=!1;function yv(e,t){if(zs=Pi,e=Lf(),Fl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,c=0,m=0,p=e,g=null;t:for(;;){for(var v;p!==n||a!==0&&p.nodeType!==3||(s=o+a),p!==i||r!==0&&p.nodeType!==3||(l=o+r),p.nodeType===3&&(o+=p.nodeValue.length),(v=p.firstChild)!==null;)g=p,p=v;for(;;){if(p===e)break t;if(g===n&&++c===a&&(s=o),g===i&&++m===r&&(l=o),(v=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=v}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ms={focusedElem:e,selectionRange:n},Pi=!1,I=t;I!==null;)if(t=I,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,I=e;else for(;I!==null;){t=I;try{var x=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,k=x.memoizedState,f=t.stateNode,d=f.getSnapshotBeforeUpdate(t.elementType===t.type?w:yt(t.type,w),k);f.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(y){ye(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,I=e;break}I=t.return}return x=Tc,Tc=!1,x}function Kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,i!==void 0&&Js(t,n,i)}a=a.next}while(a!==r)}}function so(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function el(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Np(e){var t=e.alternate;t!==null&&(e.alternate=null,Np(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Tt],delete t[da],delete t[Bs],delete t[ev],delete t[tv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ip(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ip(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function tl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ri));else if(r!==4&&(e=e.child,e!==null))for(tl(e,t,n),e=e.sibling;e!==null;)tl(e,t,n),e=e.sibling}function nl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(nl(e,t,n),e=e.sibling;e!==null;)nl(e,t,n),e=e.sibling}var Ae=null,xt=!1;function Wt(e,t,n){for(n=n.child;n!==null;)Ap(e,t,n),n=n.sibling}function Ap(e,t,n){if(Ot&&typeof Ot.onCommitFiberUnmount=="function")try{Ot.onCommitFiberUnmount(Ji,n)}catch{}switch(n.tag){case 5:Be||er(n,t);case 6:var r=Ae,a=xt;Ae=null,Wt(e,t,n),Ae=r,xt=a,Ae!==null&&(xt?(e=Ae,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ae.removeChild(n.stateNode));break;case 18:Ae!==null&&(xt?(e=Ae,n=n.stateNode,e.nodeType===8?qo(e.parentNode,n):e.nodeType===1&&qo(e,n),oa(e)):qo(Ae,n.stateNode));break;case 4:r=Ae,a=xt,Ae=n.stateNode.containerInfo,xt=!0,Wt(e,t,n),Ae=r,xt=a;break;case 0:case 11:case 14:case 15:if(!Be&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Js(n,t,o),a=a.next}while(a!==r)}Wt(e,t,n);break;case 1:if(!Be&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){ye(n,t,s)}Wt(e,t,n);break;case 21:Wt(e,t,n);break;case 22:n.mode&1?(Be=(r=Be)||n.memoizedState!==null,Wt(e,t,n),Be=r):Wt(e,t,n);break;default:Wt(e,t,n)}}function Rc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vv),t.forEach(function(r){var a=_v.bind(null,e,r);n.has(r)||(n.add(r),r.then(a,a))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 5:Ae=s.stateNode,xt=!1;break e;case 3:Ae=s.stateNode.containerInfo,xt=!0;break e;case 4:Ae=s.stateNode.containerInfo,xt=!0;break e}s=s.return}if(Ae===null)throw Error(P(160));Ap(i,o,a),Ae=null,xt=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(c){ye(a,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Lp(t,e),t=t.sibling}function Lp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),jt(e),r&4){try{Kr(3,e,e.return),so(3,e)}catch(w){ye(e,e.return,w)}try{Kr(5,e,e.return)}catch(w){ye(e,e.return,w)}}break;case 1:vt(t,e),jt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(vt(t,e),jt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var a=e.stateNode;try{na(a,"")}catch(w){ye(e,e.return,w)}}if(r&4&&(a=e.stateNode,a!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&tf(a,i),bs(s,o);var c=bs(s,i);for(o=0;o<l.length;o+=2){var m=l[o],p=l[o+1];m==="style"?sf(a,p):m==="dangerouslySetInnerHTML"?af(a,p):m==="children"?na(a,p):bl(a,m,p,c)}switch(s){case"input":Ss(a,i);break;case"textarea":nf(a,i);break;case"select":var g=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var v=i.value;v!=null?rr(a,!!i.multiple,v,!1):g!==!!i.multiple&&(i.defaultValue!=null?rr(a,!!i.multiple,i.defaultValue,!0):rr(a,!!i.multiple,i.multiple?[]:"",!1))}a[da]=i}catch(w){ye(e,e.return,w)}}break;case 6:if(vt(t,e),jt(e),r&4){if(e.stateNode===null)throw Error(P(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(w){ye(e,e.return,w)}}break;case 3:if(vt(t,e),jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oa(t.containerInfo)}catch(w){ye(e,e.return,w)}break;case 4:vt(t,e),jt(e);break;case 13:vt(t,e),jt(e),a=e.child,a.flags&8192&&(i=a.memoizedState!==null,a.stateNode.isHidden=i,!i||a.alternate!==null&&a.alternate.memoizedState!==null||(iu=we())),r&4&&Rc(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(Be=(c=Be)||m,vt(t,e),Be=c):vt(t,e),jt(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!m&&e.mode&1)for(I=e,m=e.child;m!==null;){for(p=I=m;I!==null;){switch(g=I,v=g.child,g.tag){case 0:case 11:case 14:case 15:Kr(4,g,g.return);break;case 1:er(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ye(r,n,w)}}break;case 5:er(g,g.return);break;case 22:if(g.memoizedState!==null){Ic(p);continue}}v!==null?(v.return=g,I=v):Ic(p)}m=m.sibling}e:for(m=null,p=e;;){if(p.tag===5){if(m===null){m=p;try{a=p.stateNode,c?(i=a.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=p.stateNode,l=p.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=of("display",o))}catch(w){ye(e,e.return,w)}}}else if(p.tag===6){if(m===null)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(w){ye(e,e.return,w)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;m===p&&(m=null),p=p.return}m===p&&(m=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:vt(t,e),jt(e),r&4&&Rc(e);break;case 21:break;default:vt(t,e),jt(e)}}function jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ip(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var a=r.stateNode;r.flags&32&&(na(a,""),r.flags&=-33);var i=Oc(e);nl(e,i,a);break;case 3:case 4:var o=r.stateNode.containerInfo,s=Oc(e);tl(e,s,o);break;default:throw Error(P(161))}}catch(l){ye(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function xv(e,t,n){I=e,zp(e)}function zp(e,t,n){for(var r=(e.mode&1)!==0;I!==null;){var a=I,i=a.child;if(a.tag===22&&r){var o=a.memoizedState!==null||Ga;if(!o){var s=a.alternate,l=s!==null&&s.memoizedState!==null||Be;s=Ga;var c=Be;if(Ga=o,(Be=l)&&!c)for(I=a;I!==null;)o=I,l=o.child,o.tag===22&&o.memoizedState!==null?Ac(a):l!==null?(l.return=o,I=l):Ac(a);for(;i!==null;)I=i,zp(i),i=i.sibling;I=a,Ga=s,Be=c}Nc(e)}else a.subtreeFlags&8772&&i!==null?(i.return=a,I=i):Nc(e)}}function Nc(e){for(;I!==null;){var t=I;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Be||so(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Be)if(n===null)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:yt(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&hc(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}hc(t,o,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var m=c.memoizedState;if(m!==null){var p=m.dehydrated;p!==null&&oa(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Be||t.flags&512&&el(t)}catch(g){ye(t,t.return,g)}}if(t===e){I=null;break}if(n=t.sibling,n!==null){n.return=t.return,I=n;break}I=t.return}}function Ic(e){for(;I!==null;){var t=I;if(t===e){I=null;break}var n=t.sibling;if(n!==null){n.return=t.return,I=n;break}I=t.return}}function Ac(e){for(;I!==null;){var t=I;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{so(4,t)}catch(l){ye(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var a=t.return;try{r.componentDidMount()}catch(l){ye(t,a,l)}}var i=t.return;try{el(t)}catch(l){ye(t,i,l)}break;case 5:var o=t.return;try{el(t)}catch(l){ye(t,o,l)}}}catch(l){ye(t,t.return,l)}if(t===e){I=null;break}var s=t.sibling;if(s!==null){s.return=t.return,I=s;break}I=t.return}}var wv=Math.ceil,Hi=Vt.ReactCurrentDispatcher,ru=Vt.ReactCurrentOwner,ft=Vt.ReactCurrentBatchConfig,G=0,Ne=null,Ce=null,Le=0,tt=0,tr=gn(0),be=0,va=null,Dn=0,lo=0,au=0,Zr=null,Qe=null,iu=0,gr=1/0,Lt=null,Ui=!1,rl=null,cn=null,Xa=!1,nn=null,Yi=0,Jr=0,al=null,hi=-1,gi=0;function Ye(){return G&6?we():hi!==-1?hi:hi=we()}function dn(e){return e.mode&1?G&2&&Le!==0?Le&-Le:rv.transition!==null?(gi===0&&(gi=xf()),gi):(e=ne,e!==0||(e=window.event,e=e===void 0?16:bf(e.type)),e):1}function kt(e,t,n,r){if(50<Jr)throw Jr=0,al=null,Error(P(185));ka(e,n,r),(!(G&2)||e!==Ne)&&(e===Ne&&(!(G&2)&&(lo|=n),be===4&&en(e,Le)),Je(e,r),n===1&&G===0&&!(t.mode&1)&&(gr=we()+500,ao&&vn()))}function Je(e,t){var n=e.callbackNode;rg(e,t);var r=_i(e,e===Ne?Le:0);if(r===0)n!==null&&Uu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Uu(n),t===1)e.tag===0?nv(Lc.bind(null,e)):Vf(Lc.bind(null,e)),Zg(function(){!(G&6)&&vn()}),n=null;else{switch(wf(r)){case 1:n=Rl;break;case 4:n=vf;break;case 16:n=bi;break;case 536870912:n=yf;break;default:n=bi}n=Yp(n,Mp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Mp(e,t){if(hi=-1,gi=0,G&6)throw Error(P(327));var n=e.callbackNode;if(lr()&&e.callbackNode!==n)return null;var r=_i(e,e===Ne?Le:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Vi(e,r);else{t=r;var a=G;G|=2;var i=Fp();(Ne!==e||Le!==t)&&(Lt=null,gr=we()+500,On(e,t));do try{Ev();break}catch(s){Dp(e,s)}while(1);Yl(),Hi.current=i,G=a,Ce!==null?t=0:(Ne=null,Le=0,t=be)}if(t!==0){if(t===2&&(a=Rs(e),a!==0&&(r=a,t=il(e,a))),t===1)throw n=va,On(e,0),en(e,r),Je(e,we()),n;if(t===6)en(e,r);else{if(a=e.current.alternate,!(r&30)&&!Sv(a)&&(t=Vi(e,r),t===2&&(i=Rs(e),i!==0&&(r=i,t=il(e,i))),t===1))throw n=va,On(e,0),en(e,r),Je(e,we()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:En(e,Qe,Lt);break;case 3:if(en(e,r),(r&130023424)===r&&(t=iu+500-we(),10<t)){if(_i(e,0)!==0)break;if(a=e.suspendedLanes,(a&r)!==r){Ye(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Fs(En.bind(null,e,Qe,Lt),t);break}En(e,Qe,Lt);break;case 4:if(en(e,r),(r&4194240)===r)break;for(t=e.eventTimes,a=-1;0<r;){var o=31-St(r);i=1<<o,o=t[o],o>a&&(a=o),r&=~i}if(r=a,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*wv(r/1960))-r,10<r){e.timeoutHandle=Fs(En.bind(null,e,Qe,Lt),r);break}En(e,Qe,Lt);break;case 5:En(e,Qe,Lt);break;default:throw Error(P(329))}}}return Je(e,we()),e.callbackNode===n?Mp.bind(null,e):null}function il(e,t){var n=Zr;return e.current.memoizedState.isDehydrated&&(On(e,t).flags|=256),e=Vi(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&ol(t)),e}function ol(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Sv(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!Ct(i(),a))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t){for(t&=~au,t&=~lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-St(t),r=1<<n;e[n]=-1,t&=~r}}function Lc(e){if(G&6)throw Error(P(327));lr();var t=_i(e,0);if(!(t&1))return Je(e,we()),null;var n=Vi(e,t);if(e.tag!==0&&n===2){var r=Rs(e);r!==0&&(t=r,n=il(e,r))}if(n===1)throw n=va,On(e,0),en(e,t),Je(e,we()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,En(e,Qe,Lt),Je(e,we()),null}function ou(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(gr=we()+500,ao&&vn())}}function Fn(e){nn!==null&&nn.tag===0&&!(G&6)&&lr();var t=G;G|=1;var n=ft.transition,r=ne;try{if(ft.transition=null,ne=1,e)return e()}finally{ne=r,ft.transition=n,G=t,!(G&6)&&vn()}}function su(){tt=tr.current,se(tr)}function On(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kg(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch($l(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ni();break;case 3:mr(),se(Ke),se($e),Xl();break;case 5:Gl(r);break;case 4:mr();break;case 13:se(me);break;case 19:se(me);break;case 10:Vl(r.type._context);break;case 22:case 23:su()}n=n.return}if(Ne=e,Ce=e=fn(e.current,null),Le=tt=t,be=0,va=null,au=lo=Dn=0,Qe=Zr=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var a=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=a,r.next=o}n.pending=r}_n=null}return e}function Dp(e,t){do{var n=Ce;try{if(Yl(),fi.current=$i,Bi){for(var r=he.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Bi=!1}if(Mn=0,Oe=je=he=null,Xr=!1,ma=0,ru.current=null,n===null||n.return===null){be=1,va=t,Ce=null;break}e:{var i=e,o=n.return,s=n,l=t;if(t=Le,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,m=s,p=m.tag;if(!(m.mode&1)&&(p===0||p===11||p===15)){var g=m.alternate;g?(m.updateQueue=g.updateQueue,m.memoizedState=g.memoizedState,m.lanes=g.lanes):(m.updateQueue=null,m.memoizedState=null)}var v=kc(o);if(v!==null){v.flags&=-257,Ec(v,o,s,i,t),v.mode&1&&Sc(i,c,t),t=v,l=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(l),t.updateQueue=w}else x.add(l);break e}else{if(!(t&1)){Sc(i,c,t),lu();break e}l=Error(P(426))}}else if(de&&s.mode&1){var k=kc(o);if(k!==null){!(k.flags&65536)&&(k.flags|=256),Ec(k,o,s,i,t),Hl(hr(l,s));break e}}i=l=hr(l,s),be!==4&&(be=2),Zr===null?Zr=[i]:Zr.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Sp(i,l,t);mc(i,f);break e;case 1:s=l;var d=i.type,h=i.stateNode;if(!(i.flags&128)&&(typeof d.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(cn===null||!cn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var y=kp(i,s,t);mc(i,y);break e}}i=i.return}while(i!==null)}$p(n)}catch(S){t=S,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function Fp(){var e=Hi.current;return Hi.current=$i,e===null?$i:e}function lu(){(be===0||be===3||be===2)&&(be=4),Ne===null||!(Dn&268435455)&&!(lo&268435455)||en(Ne,Le)}function Vi(e,t){var n=G;G|=2;var r=Fp();(Ne!==e||Le!==t)&&(Lt=null,On(e,t));do try{kv();break}catch(a){Dp(e,a)}while(1);if(Yl(),G=n,Hi.current=r,Ce!==null)throw Error(P(261));return Ne=null,Le=0,be}function kv(){for(;Ce!==null;)Bp(Ce)}function Ev(){for(;Ce!==null&&!Qh();)Bp(Ce)}function Bp(e){var t=Up(e.alternate,e,tt);e.memoizedProps=e.pendingProps,t===null?$p(e):Ce=t,ru.current=null}function $p(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=gv(n,t),n!==null){n.flags&=32767,Ce=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{be=6,Ce=null;return}}else if(n=hv(n,t,tt),n!==null){Ce=n;return}if(t=t.sibling,t!==null){Ce=t;return}Ce=t=e}while(t!==null);be===0&&(be=5)}function En(e,t,n){var r=ne,a=ft.transition;try{ft.transition=null,ne=1,Cv(e,t,n,r)}finally{ft.transition=a,ne=r}return null}function Cv(e,t,n,r){do lr();while(nn!==null);if(G&6)throw Error(P(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(ag(e,i),e===Ne&&(Ce=Ne=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xa||(Xa=!0,Yp(bi,function(){return lr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=ft.transition,ft.transition=null;var o=ne;ne=1;var s=G;G|=4,ru.current=null,yv(e,n),Lp(n,e),Yg(Ms),Pi=!!zs,Ms=zs=null,e.current=n,xv(n),Gh(),G=s,ne=o,ft.transition=i}else e.current=n;if(Xa&&(Xa=!1,nn=e,Yi=a),i=e.pendingLanes,i===0&&(cn=null),Zh(n.stateNode),Je(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Ui)throw Ui=!1,e=rl,rl=null,e;return Yi&1&&e.tag!==0&&lr(),i=e.pendingLanes,i&1?e===al?Jr++:(Jr=0,al=e):Jr=0,vn(),null}function lr(){if(nn!==null){var e=wf(Yi),t=ft.transition,n=ne;try{if(ft.transition=null,ne=16>e?16:e,nn===null)var r=!1;else{if(e=nn,nn=null,Yi=0,G&6)throw Error(P(331));var a=G;for(G|=4,I=e.current;I!==null;){var i=I,o=i.child;if(I.flags&16){var s=i.deletions;if(s!==null){for(var l=0;l<s.length;l++){var c=s[l];for(I=c;I!==null;){var m=I;switch(m.tag){case 0:case 11:case 15:Kr(8,m,i)}var p=m.child;if(p!==null)p.return=m,I=p;else for(;I!==null;){m=I;var g=m.sibling,v=m.return;if(Np(m),m===c){I=null;break}if(g!==null){g.return=v,I=g;break}I=v}}}var x=i.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var k=w.sibling;w.sibling=null,w=k}while(w!==null)}}I=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,I=o;else e:for(;I!==null;){if(i=I,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Kr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,I=f;break e}I=i.return}}var d=e.current;for(I=d;I!==null;){o=I;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,I=h;else e:for(o=d;I!==null;){if(s=I,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:so(9,s)}}catch(S){ye(s,s.return,S)}if(s===o){I=null;break e}var y=s.sibling;if(y!==null){y.return=s.return,I=y;break e}I=s.return}}if(G=a,vn(),Ot&&typeof Ot.onPostCommitFiberRoot=="function")try{Ot.onPostCommitFiberRoot(Ji,e)}catch{}r=!0}return r}finally{ne=n,ft.transition=t}}return!1}function zc(e,t,n){t=hr(n,t),t=Sp(e,t,1),e=un(e,t,1),t=Ye(),e!==null&&(ka(e,1,t),Je(e,t))}function ye(e,t,n){if(e.tag===3)zc(e,e,n);else for(;t!==null;){if(t.tag===3){zc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(cn===null||!cn.has(r))){e=hr(n,e),e=kp(t,e,1),t=un(t,e,1),e=Ye(),t!==null&&(ka(t,1,e),Je(t,e));break}}t=t.return}}function jv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ye(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(Le&n)===n&&(be===4||be===3&&(Le&130023424)===Le&&500>we()-iu?On(e,0):au|=n),Je(e,t)}function Hp(e,t){t===0&&(e.mode&1?(t=Ba,Ba<<=1,!(Ba&130023424)&&(Ba=4194304)):t=1);var n=Ye();e=Ut(e,t),e!==null&&(ka(e,t,n),Je(e,n))}function bv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Hp(e,n)}function _v(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),Hp(e,n)}var Up;Up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ke.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,mv(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,de&&t.flags&1048576&&Wf(t,Li,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;mi(e,t),e=t.pendingProps;var a=dr(t,$e.current);sr(t,n),a=Zl(null,t,r,e,a,n);var i=Jl();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ze(r)?(i=!0,Ii(t)):i=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,ql(t),a.updater=io,t.stateNode=a,a._reactInternals=t,Ws(t,r,e,n),t=Gs(null,t,r,!0,i,n)):(t.tag=0,de&&i&&Bl(t),He(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(mi(e,t),e=t.pendingProps,a=r._init,r=a(r._payload),t.type=r,a=t.tag=Tv(r),e=yt(r,e),a){case 0:t=Qs(null,t,r,e,n);break e;case 1:t=bc(null,t,r,e,n);break e;case 11:t=Cc(null,t,r,e,n);break e;case 14:t=jc(null,t,r,yt(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:yt(r,a),Qs(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:yt(r,a),bc(e,t,r,a,n);case 3:e:{if(bp(t),e===null)throw Error(P(387));r=t.pendingProps,i=t.memoizedState,a=i.element,Xf(e,t),Di(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){a=hr(Error(P(423)),t),t=_c(e,t,r,n,a);break e}else if(r!==a){a=hr(Error(P(424)),t),t=_c(e,t,r,n,a);break e}else for(rt=ln(t.stateNode.containerInfo.firstChild),at=t,de=!0,wt=null,n=ep(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(fr(),r===a){t=Yt(e,t,n);break e}He(e,t,r,n)}t=t.child}return t;case 5:return tp(t),e===null&&Us(t),r=t.type,a=t.pendingProps,i=e!==null?e.memoizedProps:null,o=a.children,Ds(r,a)?o=null:i!==null&&Ds(r,i)&&(t.flags|=32),jp(e,t),He(e,t,o,n),t.child;case 6:return e===null&&Us(t),null;case 13:return _p(e,t,n);case 4:return Ql(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=pr(t,null,r,n):He(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:yt(r,a),Cc(e,t,r,a,n);case 7:return He(e,t,t.pendingProps,n),t.child;case 8:return He(e,t,t.pendingProps.children,n),t.child;case 12:return He(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,o=a.value,ae(zi,r._currentValue),r._currentValue=o,i!==null)if(Ct(i.value,o)){if(i.children===a.children&&!Ke.current){t=Yt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){o=i.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(i.tag===1){l=Bt(-1,n&-n),l.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var m=c.pending;m===null?l.next=l:(l.next=m.next,m.next=l),c.pending=l}}i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Ys(i.return,n,t),s.lanes|=n;break}l=l.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(P(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),Ys(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}He(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,sr(t,n),a=pt(a),r=r(a),t.flags|=1,He(e,t,r,n),t.child;case 14:return r=t.type,a=yt(r,t.pendingProps),a=yt(r.type,a),jc(e,t,r,a,n);case 15:return Ep(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:yt(r,a),mi(e,t),t.tag=1,Ze(r)?(e=!0,Ii(t)):e=!1,sr(t,n),Zf(t,r,a),Ws(t,r,a,n),Gs(null,t,r,!0,e,n);case 19:return Pp(e,t,n);case 22:return Cp(e,t,n)}throw Error(P(156,t.tag))};function Yp(e,t){return gf(e,t)}function Pv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function dt(e,t,n,r){return new Pv(e,t,n,r)}function uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Tv(e){if(typeof e=="function")return uu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pl)return 11;if(e===Tl)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=dt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function vi(e,t,n,r,a,i){var o=2;if(r=e,typeof e=="function")uu(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Vn:return Rn(n.children,a,i,t);case _l:o=8,a|=8;break;case gs:return e=dt(12,n,t,a|2),e.elementType=gs,e.lanes=i,e;case vs:return e=dt(13,n,t,a),e.elementType=vs,e.lanes=i,e;case ys:return e=dt(19,n,t,a),e.elementType=ys,e.lanes=i,e;case Zd:return uo(n,a,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xd:o=10;break e;case Kd:o=9;break e;case Pl:o=11;break e;case Tl:o=14;break e;case Kt:o=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=dt(o,n,t,a),t.elementType=e,t.type=r,t.lanes=i,t}function Rn(e,t,n,r){return e=dt(7,e,r,t),e.lanes=n,e}function uo(e,t,n,r){return e=dt(22,e,r,t),e.elementType=Zd,e.lanes=n,e.stateNode={isHidden:!1},e}function ts(e,t,n){return e=dt(6,e,null,t),e.lanes=n,e}function ns(e,t,n){return t=dt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Ov(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zo(0),this.expirationTimes=zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zo(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function cu(e,t,n,r,a,i,o,s,l){return e=new Ov(e,t,n,s,l),t===1?(t=1,i===!0&&(t|=8)):t=0,i=dt(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(i),e}function Rv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vp(e){if(!e)return mn;e=e._reactInternals;e:{if($n(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ze(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ze(n))return Yf(e,n,t)}return t}function Wp(e,t,n,r,a,i,o,s,l){return e=cu(n,r,!0,e,a,i,o,s,l),e.context=Vp(null),n=e.current,r=Ye(),a=dn(n),i=Bt(r,a),i.callback=t??null,un(n,i,a),e.current.lanes=a,ka(e,a,r),Je(e,r),e}function co(e,t,n,r){var a=t.current,i=Ye(),o=dn(a);return n=Vp(n),t.context===null?t.context=n:t.pendingContext=n,t=Bt(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=un(a,t,o),e!==null&&(kt(e,a,o,i),di(e,a,o)),o}function Wi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Mc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function du(e,t){Mc(e,t),(e=e.alternate)&&Mc(e,t)}function Nv(){return null}var qp=typeof reportError=="function"?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}fo.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));co(e,t,null,null)};fo.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){co(null,e,null,null)}),t[Ht]=null}};function fo(e){this._internalRoot=e}fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ef();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Jt.length&&t!==0&&t<Jt[n].priority;n++);Jt.splice(n,0,e),n===0&&jf(e)}};function pu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function po(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Dc(){}function Iv(e,t,n,r,a){if(a){if(typeof r=="function"){var i=r;r=function(){var c=Wi(o);i.call(c)}}var o=Wp(t,r,e,0,null,!1,!1,"",Dc);return e._reactRootContainer=o,e[Ht]=o.current,ua(e.nodeType===8?e.parentNode:e),Fn(),o}for(;a=e.lastChild;)e.removeChild(a);if(typeof r=="function"){var s=r;r=function(){var c=Wi(l);s.call(c)}}var l=cu(e,0,!1,null,null,!1,!1,"",Dc);return e._reactRootContainer=l,e[Ht]=l.current,ua(e.nodeType===8?e.parentNode:e),Fn(function(){co(t,l,n,r)}),l}function mo(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if(typeof a=="function"){var s=a;a=function(){var l=Wi(o);s.call(l)}}co(t,o,e,a)}else o=Iv(n,t,e,a,r);return Wi(o)}Sf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Br(t.pendingLanes);n!==0&&(Nl(t,n|1),Je(t,we()),!(G&6)&&(gr=we()+500,vn()))}break;case 13:Fn(function(){var r=Ut(e,1);if(r!==null){var a=Ye();kt(r,e,1,a)}}),du(e,1)}};Il=function(e){if(e.tag===13){var t=Ut(e,134217728);if(t!==null){var n=Ye();kt(t,e,134217728,n)}du(e,134217728)}};kf=function(e){if(e.tag===13){var t=dn(e),n=Ut(e,t);if(n!==null){var r=Ye();kt(n,e,t,r)}du(e,t)}};Ef=function(){return ne};Cf=function(e,t){var n=ne;try{return ne=e,t()}finally{ne=n}};Ps=function(e,t,n){switch(t){case"input":if(Ss(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=ro(r);if(!a)throw Error(P(90));ef(r),Ss(r,a)}}}break;case"textarea":nf(e,n);break;case"select":t=n.value,t!=null&&rr(e,!!n.multiple,t,!1)}};cf=ou;df=Fn;var Av={usingClientEntryPoint:!1,Events:[Ca,Gn,ro,lf,uf,ou]},zr={findFiberByHostInstance:bn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Lv={bundleType:zr.bundleType,version:zr.version,rendererPackageName:zr.rendererPackageName,rendererConfig:zr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Vt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=mf(e),e===null?null:e.stateNode},findFiberByHostInstance:zr.findFiberByHostInstance||Nv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Ji=Ka.inject(Lv),Ot=Ka}catch{}}ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Av;ot.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pu(t))throw Error(P(200));return Rv(e,t,null,n)};ot.createRoot=function(e,t){if(!pu(e))throw Error(P(299));var n=!1,r="",a=qp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=cu(e,1,!1,null,null,n,!1,r,a),e[Ht]=t.current,ua(e.nodeType===8?e.parentNode:e),new fu(t)};ot.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=mf(t),e=e===null?null:e.stateNode,e};ot.flushSync=function(e){return Fn(e)};ot.hydrate=function(e,t,n){if(!po(t))throw Error(P(200));return mo(null,e,t,!0,n)};ot.hydrateRoot=function(e,t,n){if(!pu(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,a=!1,i="",o=qp;if(n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Wp(t,null,e,1,n??null,a,!1,i,o),e[Ht]=t.current,ua(e),r)for(e=0;e<r.length;e++)n=r[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new fo(t)};ot.render=function(e,t,n){if(!po(t))throw Error(P(200));return mo(null,e,t,!1,n)};ot.unmountComponentAtNode=function(e){if(!po(e))throw Error(P(40));return e._reactRootContainer?(Fn(function(){mo(null,null,e,!1,function(){e._reactRootContainer=null,e[Ht]=null})}),!0):!1};ot.unstable_batchedUpdates=ou;ot.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!po(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return mo(e,t,n,!1,r)};ot.version="18.2.0-next-9e3b772b8-20220608";function Qp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qp)}catch(e){console.error(e)}}Qp(),Vd.exports=ot;var Gp=Vd.exports,Fc=Gp;ms.createRoot=Fc.createRoot,ms.hydrateRoot=Fc.hydrateRoot;/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ya(){return ya=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ya.apply(this,arguments)}var rn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(rn||(rn={}));const Bc="popstate";function zv(e){e===void 0&&(e={});function t(r,a){let{pathname:i,search:o,hash:s}=r.location;return sl("",{pathname:i,search:o,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:Kp(a)}return Dv(t,n,null,e)}function _e(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Xp(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Mv(){return Math.random().toString(36).substr(2,8)}function $c(e,t){return{usr:e.state,key:e.key,idx:t}}function sl(e,t,n,r){return n===void 0&&(n=null),ya({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?jr(t):t,{state:n,key:t&&t.key||r||Mv()})}function Kp(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function jr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Dv(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:i=!1}=r,o=a.history,s=rn.Pop,l=null,c=m();c==null&&(c=0,o.replaceState(ya({},o.state,{idx:c}),""));function m(){return(o.state||{idx:null}).idx}function p(){s=rn.Pop;let k=m(),f=k==null?null:k-c;c=k,l&&l({action:s,location:w.location,delta:f})}function g(k,f){s=rn.Push;let d=sl(w.location,k,f);n&&n(d,k),c=m()+1;let h=$c(d,c),y=w.createHref(d);try{o.pushState(h,"",y)}catch(S){if(S instanceof DOMException&&S.name==="DataCloneError")throw S;a.location.assign(y)}i&&l&&l({action:s,location:w.location,delta:1})}function v(k,f){s=rn.Replace;let d=sl(w.location,k,f);n&&n(d,k),c=m();let h=$c(d,c),y=w.createHref(d);o.replaceState(h,"",y),i&&l&&l({action:s,location:w.location,delta:0})}function x(k){let f=a.location.origin!=="null"?a.location.origin:a.location.href,d=typeof k=="string"?k:Kp(k);return d=d.replace(/ $/,"%20"),_e(f,"No window.location.(origin|href) available to create URL for href: "+d),new URL(d,f)}let w={get action(){return s},get location(){return e(a,o)},listen(k){if(l)throw new Error("A history only accepts one active listener");return a.addEventListener(Bc,p),l=k,()=>{a.removeEventListener(Bc,p),l=null}},createHref(k){return t(a,k)},createURL:x,encodeLocation(k){let f=x(k);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:g,replace:v,go(k){return o.go(k)}};return w}var Hc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Hc||(Hc={}));function Fv(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?jr(t):t,a=em(r.pathname||"/",n);if(a==null)return null;let i=Zp(e);Bv(i);let o=null;for(let s=0;o==null&&s<i.length;++s){let l=Zv(a);o=Gv(i[s],l)}return o}function Zp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let a=(i,o,s)=>{let l={relativePath:s===void 0?i.path||"":s,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};l.relativePath.startsWith("/")&&(_e(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let c=Nn([r,l.relativePath]),m=n.concat(l);i.children&&i.children.length>0&&(_e(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),Zp(i.children,t,m,c)),!(i.path==null&&!i.index)&&t.push({path:c,score:qv(c,i.index),routesMeta:m})};return e.forEach((i,o)=>{var s;if(i.path===""||!((s=i.path)!=null&&s.includes("?")))a(i,o);else for(let l of Jp(i.path))a(i,o,l)}),t}function Jp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return a?[i,""]:[i];let o=Jp(r.join("/")),s=[];return s.push(...o.map(l=>l===""?i:[i,l].join("/"))),a&&s.push(...o),s.map(l=>e.startsWith("/")&&l===""?"/":l)}function Bv(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Qv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const $v=/^:[\w-]+$/,Hv=3,Uv=2,Yv=1,Vv=10,Wv=-2,Uc=e=>e==="*";function qv(e,t){let n=e.split("/"),r=n.length;return n.some(Uc)&&(r+=Wv),t&&(r+=Uv),n.filter(a=>!Uc(a)).reduce((a,i)=>a+($v.test(i)?Hv:i===""?Yv:Vv),r)}function Qv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,a)=>r===t[a])?e[e.length-1]-t[t.length-1]:0}function Gv(e,t){let{routesMeta:n}=e,r={},a="/",i=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,c=a==="/"?t:t.slice(a.length)||"/",m=Xv({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},c);if(!m)return null;Object.assign(r,m.params);let p=s.route;i.push({params:r,pathname:Nn([a,m.pathname]),pathnameBase:a0(Nn([a,m.pathnameBase])),route:p}),m.pathnameBase!=="/"&&(a=Nn([a,m.pathnameBase]))}return i}function Xv(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kv(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],o=i.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:r.reduce((c,m,p)=>{let{paramName:g,isOptional:v}=m;if(g==="*"){let w=s[p]||"";o=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const x=s[p];return v&&!x?c[g]=void 0:c[g]=(x||"").replace(/%2F/g,"/"),c},{}),pathname:i,pathnameBase:o,pattern:e}}function Kv(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Xp(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,s,l)=>(r.push({paramName:s,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),r]}function Zv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Xp(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function em(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Jv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?jr(e):e;return{pathname:n?n.startsWith("/")?n:e0(n,t):t,search:i0(r),hash:o0(a)}}function e0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function rs(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function t0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function n0(e,t){let n=t0(e);return t?n.map((r,a)=>a===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function r0(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=jr(e):(a=ya({},e),_e(!a.pathname||!a.pathname.includes("?"),rs("?","pathname","search",a)),_e(!a.pathname||!a.pathname.includes("#"),rs("#","pathname","hash",a)),_e(!a.search||!a.search.includes("#"),rs("#","search","hash",a)));let i=e===""||a.pathname==="",o=i?"/":a.pathname,s;if(o==null)s=n;else{let p=t.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),p-=1;a.pathname=g.join("/")}s=p>=0?t[p]:"/"}let l=Jv(a,s),c=o&&o!=="/"&&o.endsWith("/"),m=(i||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(c||m)&&(l.pathname+="/"),l}const Nn=e=>e.join("/").replace(/\/\/+/g,"/"),a0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),i0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,o0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function s0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const tm=["post","put","patch","delete"];new Set(tm);const l0=["get",...tm];new Set(l0);/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xa(){return xa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xa.apply(this,arguments)}const mu=O.createContext(null),u0=O.createContext(null),ho=O.createContext(null),go=O.createContext(null),br=O.createContext({outlet:null,matches:[],isDataRoute:!1}),nm=O.createContext(null);function vo(){return O.useContext(go)!=null}function rm(){return vo()||_e(!1),O.useContext(go).location}function am(e){O.useContext(ho).static||O.useLayoutEffect(e)}function c0(){let{isDataRoute:e}=O.useContext(br);return e?E0():d0()}function d0(){vo()||_e(!1);let e=O.useContext(mu),{basename:t,future:n,navigator:r}=O.useContext(ho),{matches:a}=O.useContext(br),{pathname:i}=rm(),o=JSON.stringify(n0(a,n.v7_relativeSplatPath)),s=O.useRef(!1);return am(()=>{s.current=!0}),O.useCallback(function(c,m){if(m===void 0&&(m={}),!s.current)return;if(typeof c=="number"){r.go(c);return}let p=r0(c,JSON.parse(o),i,m.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:Nn([t,p.pathname])),(m.replace?r.replace:r.push)(p,m.state,m)},[t,r,o,i,e])}function f0(e,t){return p0(e,t)}function p0(e,t,n,r){vo()||_e(!1);let{navigator:a}=O.useContext(ho),{matches:i}=O.useContext(br),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let c=rm(),m;if(t){var p;let k=typeof t=="string"?jr(t):t;l==="/"||(p=k.pathname)!=null&&p.startsWith(l)||_e(!1),m=k}else m=c;let g=m.pathname||"/",v=g;if(l!=="/"){let k=l.replace(/^\//,"").split("/");v="/"+g.replace(/^\//,"").split("/").slice(k.length).join("/")}let x=Fv(e,{pathname:v}),w=y0(x&&x.map(k=>Object.assign({},k,{params:Object.assign({},s,k.params),pathname:Nn([l,a.encodeLocation?a.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?l:Nn([l,a.encodeLocation?a.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),i,n,r);return t&&w?O.createElement(go.Provider,{value:{location:xa({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:rn.Pop}},w):w}function m0(){let e=k0(),t=s0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return O.createElement(O.Fragment,null,O.createElement("h2",null,"Unexpected Application Error!"),O.createElement("h3",{style:{fontStyle:"italic"}},t),n?O.createElement("pre",{style:a},n):null,i)}const h0=O.createElement(m0,null);class g0 extends O.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?O.createElement(br.Provider,{value:this.props.routeContext},O.createElement(nm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v0(e){let{routeContext:t,match:n,children:r}=e,a=O.useContext(mu);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),O.createElement(br.Provider,{value:t},r)}function y0(e,t,n,r){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let o=e,s=(a=n)==null?void 0:a.errors;if(s!=null){let m=o.findIndex(p=>p.route.id&&(s==null?void 0:s[p.route.id]));m>=0||_e(!1),o=o.slice(0,Math.min(o.length,m+1))}let l=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let m=0;m<o.length;m++){let p=o[m];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(c=m),p.route.id){let{loaderData:g,errors:v}=n,x=p.route.loader&&g[p.route.id]===void 0&&(!v||v[p.route.id]===void 0);if(p.route.lazy||x){l=!0,c>=0?o=o.slice(0,c+1):o=[o[0]];break}}}return o.reduceRight((m,p,g)=>{let v,x=!1,w=null,k=null;n&&(v=s&&p.route.id?s[p.route.id]:void 0,w=p.route.errorElement||h0,l&&(c<0&&g===0?(C0("route-fallback",!1),x=!0,k=null):c===g&&(x=!0,k=p.route.hydrateFallbackElement||null)));let f=t.concat(o.slice(0,g+1)),d=()=>{let h;return v?h=w:x?h=k:p.route.Component?h=O.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=m,O.createElement(v0,{match:p,routeContext:{outlet:m,matches:f,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?O.createElement(g0,{location:n.location,revalidation:n.revalidation,component:w,error:v,children:d(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):d()},null)}var im=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(im||{}),qi=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qi||{});function x0(e){let t=O.useContext(mu);return t||_e(!1),t}function w0(e){let t=O.useContext(u0);return t||_e(!1),t}function S0(e){let t=O.useContext(br);return t||_e(!1),t}function om(e){let t=S0(),n=t.matches[t.matches.length-1];return n.route.id||_e(!1),n.route.id}function k0(){var e;let t=O.useContext(nm),n=w0(qi.UseRouteError),r=om(qi.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function E0(){let{router:e}=x0(im.UseNavigateStable),t=om(qi.UseNavigateStable),n=O.useRef(!1);return am(()=>{n.current=!0}),O.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,xa({fromRouteId:t},i)))},[e,t])}const Yc={};function C0(e,t,n){!t&&!Yc[e]&&(Yc[e]=!0)}function ll(e){_e(!1)}function j0(e){let{basename:t="/",children:n=null,location:r,navigationType:a=rn.Pop,navigator:i,static:o=!1,future:s}=e;vo()&&_e(!1);let l=t.replace(/^\/*/,"/"),c=O.useMemo(()=>({basename:l,navigator:i,static:o,future:xa({v7_relativeSplatPath:!1},s)}),[l,s,i,o]);typeof r=="string"&&(r=jr(r));let{pathname:m="/",search:p="",hash:g="",state:v=null,key:x="default"}=r,w=O.useMemo(()=>{let k=em(m,l);return k==null?null:{location:{pathname:k,search:p,hash:g,state:v,key:x},navigationType:a}},[l,m,p,g,v,x,a]);return w==null?null:O.createElement(ho.Provider,{value:c},O.createElement(go.Provider,{children:n,value:w}))}function b0(e){let{children:t,location:n}=e;return f0(ul(t),n)}new Promise(()=>{});function ul(e,t){t===void 0&&(t=[]);let n=[];return O.Children.forEach(e,(r,a)=>{if(!O.isValidElement(r))return;let i=[...t,a];if(r.type===O.Fragment){n.push.apply(n,ul(r.props.children,i));return}r.type!==ll&&_e(!1),!r.props.index||!r.props.children||_e(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=ul(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const _0="6";try{window.__reactRouterVersion=_0}catch{}const P0="startTransition",Vc=bh[P0];function T0(e){let{basename:t,children:n,future:r,window:a}=e,i=O.useRef();i.current==null&&(i.current=zv({window:a,v5Compat:!0}));let o=i.current,[s,l]=O.useState({action:o.action,location:o.location}),{v7_startTransition:c}=r||{},m=O.useCallback(p=>{c&&Vc?Vc(()=>l(p)):l(p)},[l,c]);return O.useLayoutEffect(()=>o.listen(m),[o,m]),O.createElement(j0,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Wc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wc||(Wc={}));var qc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(qc||(qc={}));var sm={exports:{}};(function(e,t){(function(r,a){e.exports=a(O)})(nt,n=>(()=>{var r={"./node_modules/css-mediaquery/index.js":(s,l)=>{l.match=x,l.parse=w;var c=/(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,m=/\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,p=/^(?:(min|max)-)?(.+)/,g=/(em|rem|px|cm|mm|in|pt|pc)?$/,v=/(dpi|dpcm|dppx)?$/;function x(h,y){return w(h).some(function(S){var C=S.inverse,E=S.type==="all"||y.type===S.type;if(E&&C||!(E||C))return!1;var b=S.expressions.every(function(j){var T=j.feature,F=j.modifier,B=j.value,L=y[T];if(!L)return!1;switch(T){case"orientation":case"scan":return L.toLowerCase()===B.toLowerCase();case"width":case"height":case"device-width":case"device-height":B=d(B),L=d(L);break;case"resolution":B=f(B),L=f(L);break;case"aspect-ratio":case"device-aspect-ratio":case"device-pixel-ratio":B=k(B),L=k(L);break;case"grid":case"color":case"color-index":case"monochrome":B=parseInt(B,10)||1,L=parseInt(L,10)||0;break}switch(F){case"min":return L>=B;case"max":return L<=B;default:return L===B}});return b&&!C||!b&&C})}function w(h){return h.split(",").map(function(y){y=y.trim();var S=y.match(c),C=S[1],E=S[2],b=S[3]||"",j={};return j.inverse=!!C&&C.toLowerCase()==="not",j.type=E?E.toLowerCase():"all",b=b.match(/\([^\)]+\)/g)||[],j.expressions=b.map(function(T){var F=T.match(m),B=F[1].toLowerCase().match(p);return{modifier:B[1],feature:B[2],value:F[2]}}),j})}function k(h){var y=Number(h),S;return y||(S=h.match(/^(\d+)\s*\/\s*(\d+)$/),y=S[1]/S[2]),y}function f(h){var y=parseFloat(h),S=String(h).match(v)[1];switch(S){case"dpcm":return y/2.54;case"dppx":return y*96;default:return y}}function d(h){var y=parseFloat(h),S=String(h).match(g)[1];switch(S){case"em":return y*16;case"rem":return y*16;case"cm":return y*96/2.54;case"mm":return y*96/2.54/10;case"in":return y*96;case"pt":return y*72;case"pc":return y*72/12;default:return y}}},"./node_modules/hyphenate-style-name/index.js":(s,l,c)=>{c.r(l),c.d(l,{default:()=>w});var m=/[A-Z]/g,p=/^ms-/,g={};function v(k){return"-"+k.toLowerCase()}function x(k){if(g.hasOwnProperty(k))return g[k];var f=k.replace(m,v);return g[k]=p.test(f)?"-"+f:f}const w=x},"./node_modules/matchmediaquery/index.js":(s,l,c)=>{var m=c("./node_modules/css-mediaquery/index.js").match,p=typeof window<"u"?window.matchMedia:null;function g(x,w,k){var f=this;if(p&&!k){var d=p.call(window,x);this.matches=d.matches,this.media=d.media,d.addListener(S)}else this.matches=m(x,w),this.media=x;this.addListener=h,this.removeListener=y,this.dispose=C;function h(E){d&&d.addListener(E)}function y(E){d&&d.removeListener(E)}function S(E){f.matches=E.matches,f.media=E.media}function C(){d&&d.removeListener(S)}}function v(x,w,k){return new g(x,w,k)}s.exports=v},"./node_modules/object-assign/index.js":s=>{/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;function p(v){if(v==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(v)}function g(){try{if(!Object.assign)return!1;var v=new String("abc");if(v[5]="de",Object.getOwnPropertyNames(v)[0]==="5")return!1;for(var x={},w=0;w<10;w++)x["_"+String.fromCharCode(w)]=w;var k=Object.getOwnPropertyNames(x).map(function(d){return x[d]});if(k.join("")!=="0123456789")return!1;var f={};return"abcdefghijklmnopqrst".split("").forEach(function(d){f[d]=d}),Object.keys(Object.assign({},f)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}s.exports=g()?Object.assign:function(v,x){for(var w,k=p(v),f,d=1;d<arguments.length;d++){w=Object(arguments[d]);for(var h in w)c.call(w,h)&&(k[h]=w[h]);if(l){f=l(w);for(var y=0;y<f.length;y++)m.call(w,f[y])&&(k[f[y]]=w[f[y]])}}return k}},"./node_modules/prop-types/checkPropTypes.js":(s,l,c)=>{var m=function(){};{var p=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),g={},v=c("./node_modules/prop-types/lib/has.js");m=function(w){var k="Warning: "+w;typeof console<"u"&&console.error(k);try{throw new Error(k)}catch{}}}function x(w,k,f,d,h){for(var y in w)if(v(w,y)){var S;try{if(typeof w[y]!="function"){var C=Error((d||"React class")+": "+f+" type `"+y+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof w[y]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw C.name="Invariant Violation",C}S=w[y](k,y,d,f,null,p)}catch(b){S=b}if(S&&!(S instanceof Error)&&m((d||"React class")+": type specification of "+f+" `"+y+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof S+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),S instanceof Error&&!(S.message in g)){g[S.message]=!0;var E=h?h():"";m("Failed "+f+" type: "+S.message+(E??""))}}}x.resetWarningCache=function(){g={}},s.exports=x},"./node_modules/prop-types/factoryWithTypeCheckers.js":(s,l,c)=>{var m=c("./node_modules/react-is/index.js"),p=c("./node_modules/object-assign/index.js"),g=c("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),v=c("./node_modules/prop-types/lib/has.js"),x=c("./node_modules/prop-types/checkPropTypes.js"),w=function(){};w=function(f){var d="Warning: "+f;typeof console<"u"&&console.error(d);try{throw new Error(d)}catch{}};function k(){return null}s.exports=function(f,d){var h=typeof Symbol=="function"&&Symbol.iterator,y="@@iterator";function S(_){var A=_&&(h&&_[h]||_[y]);if(typeof A=="function")return A}var C="<<anonymous>>",E={array:F("array"),bigint:F("bigint"),bool:F("boolean"),func:F("function"),number:F("number"),object:F("object"),string:F("string"),symbol:F("symbol"),any:B(),arrayOf:L,element:le(),elementType:Pe(),instanceOf:Ie,node:M(),objectOf:R,oneOf:Me,oneOfType:z,shape:re,exact:et};function b(_,A){return _===A?_!==0||1/_===1/A:_!==_&&A!==A}function j(_,A){this.message=_,this.data=A&&typeof A=="object"?A:{},this.stack=""}j.prototype=Error.prototype;function T(_){var A={},Q=0;function V(X,U,W,K,te,Z,N){if(K=K||C,Z=Z||W,N!==g){if(d){var Te=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw Te.name="Invariant Violation",Te}else if(typeof console<"u"){var gt=K+":"+W;!A[gt]&&Q<3&&(w("You are manually calling a React.PropTypes validation function for the `"+Z+"` prop on `"+K+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),A[gt]=!0,Q++)}}return U[W]==null?X?U[W]===null?new j("The "+te+" `"+Z+"` is marked as required "+("in `"+K+"`, but its value is `null`.")):new j("The "+te+" `"+Z+"` is marked as required in "+("`"+K+"`, but its value is `undefined`.")):null:_(U,W,K,te,Z)}var $=V.bind(null,!1);return $.isRequired=V.bind(null,!0),$}function F(_){function A(Q,V,$,X,U,W){var K=Q[V],te=ue(K);if(te!==_){var Z=xe(K);return new j("Invalid "+X+" `"+U+"` of type "+("`"+Z+"` supplied to `"+$+"`, expected ")+("`"+_+"`."),{expectedType:_})}return null}return T(A)}function B(){return T(k)}function L(_){function A(Q,V,$,X,U){if(typeof _!="function")return new j("Property `"+U+"` of component `"+$+"` has invalid PropType notation inside arrayOf.");var W=Q[V];if(!Array.isArray(W)){var K=ue(W);return new j("Invalid "+X+" `"+U+"` of type "+("`"+K+"` supplied to `"+$+"`, expected an array."))}for(var te=0;te<W.length;te++){var Z=_(W,te,$,X,U+"["+te+"]",g);if(Z instanceof Error)return Z}return null}return T(A)}function le(){function _(A,Q,V,$,X){var U=A[Q];if(!f(U)){var W=ue(U);return new j("Invalid "+$+" `"+X+"` of type "+("`"+W+"` supplied to `"+V+"`, expected a single ReactElement."))}return null}return T(_)}function Pe(){function _(A,Q,V,$,X){var U=A[Q];if(!m.isValidElementType(U)){var W=ue(U);return new j("Invalid "+$+" `"+X+"` of type "+("`"+W+"` supplied to `"+V+"`, expected a single ReactElement type."))}return null}return T(_)}function Ie(_){function A(Q,V,$,X,U){if(!(Q[V]instanceof _)){var W=_.name||C,K=It(Q[V]);return new j("Invalid "+X+" `"+U+"` of type "+("`"+K+"` supplied to `"+$+"`, expected ")+("instance of `"+W+"`."))}return null}return T(A)}function Me(_){if(!Array.isArray(_))return arguments.length>1?w("Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."):w("Invalid argument supplied to oneOf, expected an array."),k;function A(Q,V,$,X,U){for(var W=Q[V],K=0;K<_.length;K++)if(b(W,_[K]))return null;var te=JSON.stringify(_,function(N,Te){var gt=xe(Te);return gt==="symbol"?String(Te):Te});return new j("Invalid "+X+" `"+U+"` of value `"+String(W)+"` "+("supplied to `"+$+"`, expected one of "+te+"."))}return T(A)}function R(_){function A(Q,V,$,X,U){if(typeof _!="function")return new j("Property `"+U+"` of component `"+$+"` has invalid PropType notation inside objectOf.");var W=Q[V],K=ue(W);if(K!=="object")return new j("Invalid "+X+" `"+U+"` of type "+("`"+K+"` supplied to `"+$+"`, expected an object."));for(var te in W)if(v(W,te)){var Z=_(W,te,$,X,U+"."+te,g);if(Z instanceof Error)return Z}return null}return T(A)}function z(_){if(!Array.isArray(_))return w("Invalid argument supplied to oneOfType, expected an instance of array."),k;for(var A=0;A<_.length;A++){var Q=_[A];if(typeof Q!="function")return w("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+wn(Q)+" at index "+A+"."),k}function V($,X,U,W,K){for(var te=[],Z=0;Z<_.length;Z++){var N=_[Z],Te=N($,X,U,W,K,g);if(Te==null)return null;Te.data&&v(Te.data,"expectedType")&&te.push(Te.data.expectedType)}var gt=te.length>0?", expected one of type ["+te.join(", ")+"]":"";return new j("Invalid "+W+" `"+K+"` supplied to "+("`"+U+"`"+gt+"."))}return T(V)}function M(){function _(A,Q,V,$,X){return Se(A[Q])?null:new j("Invalid "+$+" `"+X+"` supplied to "+("`"+V+"`, expected a ReactNode."))}return T(_)}function ee(_,A,Q,V,$){return new j((_||"React class")+": "+A+" type `"+Q+"."+V+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+$+"`.")}function re(_){function A(Q,V,$,X,U){var W=Q[V],K=ue(W);if(K!=="object")return new j("Invalid "+X+" `"+U+"` of type `"+K+"` "+("supplied to `"+$+"`, expected `object`."));for(var te in _){var Z=_[te];if(typeof Z!="function")return ee($,X,U,te,xe(Z));var N=Z(W,te,$,X,U+"."+te,g);if(N)return N}return null}return T(A)}function et(_){function A(Q,V,$,X,U){var W=Q[V],K=ue(W);if(K!=="object")return new j("Invalid "+X+" `"+U+"` of type `"+K+"` "+("supplied to `"+$+"`, expected `object`."));var te=p({},Q[V],_);for(var Z in te){var N=_[Z];if(v(_,Z)&&typeof N!="function")return ee($,X,U,Z,xe(N));if(!N)return new j("Invalid "+X+" `"+U+"` key `"+Z+"` supplied to `"+$+"`.\nBad object: "+JSON.stringify(Q[V],null,"  ")+`
Valid keys: `+JSON.stringify(Object.keys(_),null,"  "));var Te=N(W,Z,$,X,U+"."+Z,g);if(Te)return Te}return null}return T(A)}function Se(_){switch(typeof _){case"number":case"string":case"undefined":return!0;case"boolean":return!_;case"object":if(Array.isArray(_))return _.every(Se);if(_===null||f(_))return!0;var A=S(_);if(A){var Q=A.call(_),V;if(A!==_.entries){for(;!(V=Q.next()).done;)if(!Se(V.value))return!1}else for(;!(V=Q.next()).done;){var $=V.value;if($&&!Se($[1]))return!1}}else return!1;return!0;default:return!1}}function lt(_,A){return _==="symbol"?!0:A?A["@@toStringTag"]==="Symbol"||typeof Symbol=="function"&&A instanceof Symbol:!1}function ue(_){var A=typeof _;return Array.isArray(_)?"array":_ instanceof RegExp?"object":lt(A,_)?"symbol":A}function xe(_){if(typeof _>"u"||_===null)return""+_;var A=ue(_);if(A==="object"){if(_ instanceof Date)return"date";if(_ instanceof RegExp)return"regexp"}return A}function wn(_){var A=xe(_);switch(A){case"array":case"object":return"an "+A;case"boolean":case"date":case"regexp":return"a "+A;default:return A}}function It(_){return!_.constructor||!_.constructor.name?C:_.constructor.name}return E.checkPropTypes=x,E.resetWarningCache=x.resetWarningCache,E.PropTypes=E,E}},"./node_modules/prop-types/index.js":(s,l,c)=>{{var m=c("./node_modules/react-is/index.js"),p=!0;s.exports=c("./node_modules/prop-types/factoryWithTypeCheckers.js")(m.isElement,p)}},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":s=>{var l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";s.exports=l},"./node_modules/prop-types/lib/has.js":s=>{s.exports=Function.call.bind(Object.prototype.hasOwnProperty)},"./node_modules/react-is/cjs/react-is.development.js":(s,l)=>{/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(){var c=typeof Symbol=="function"&&Symbol.for,m=c?Symbol.for("react.element"):60103,p=c?Symbol.for("react.portal"):60106,g=c?Symbol.for("react.fragment"):60107,v=c?Symbol.for("react.strict_mode"):60108,x=c?Symbol.for("react.profiler"):60114,w=c?Symbol.for("react.provider"):60109,k=c?Symbol.for("react.context"):60110,f=c?Symbol.for("react.async_mode"):60111,d=c?Symbol.for("react.concurrent_mode"):60111,h=c?Symbol.for("react.forward_ref"):60112,y=c?Symbol.for("react.suspense"):60113,S=c?Symbol.for("react.suspense_list"):60120,C=c?Symbol.for("react.memo"):60115,E=c?Symbol.for("react.lazy"):60116,b=c?Symbol.for("react.block"):60121,j=c?Symbol.for("react.fundamental"):60117,T=c?Symbol.for("react.responder"):60118,F=c?Symbol.for("react.scope"):60119;function B(N){return typeof N=="string"||typeof N=="function"||N===g||N===d||N===x||N===v||N===y||N===S||typeof N=="object"&&N!==null&&(N.$$typeof===E||N.$$typeof===C||N.$$typeof===w||N.$$typeof===k||N.$$typeof===h||N.$$typeof===j||N.$$typeof===T||N.$$typeof===F||N.$$typeof===b)}function L(N){if(typeof N=="object"&&N!==null){var Te=N.$$typeof;switch(Te){case m:var gt=N.type;switch(gt){case f:case d:case g:case x:case v:case y:return gt;default:var Ou=gt&&gt.$$typeof;switch(Ou){case k:case h:case E:case C:case w:return Ou;default:return Te}}case p:return Te}}}var le=f,Pe=d,Ie=k,Me=w,R=m,z=h,M=g,ee=E,re=C,et=p,Se=x,lt=v,ue=y,xe=!1;function wn(N){return xe||(xe=!0,console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),It(N)||L(N)===f}function It(N){return L(N)===d}function _(N){return L(N)===k}function A(N){return L(N)===w}function Q(N){return typeof N=="object"&&N!==null&&N.$$typeof===m}function V(N){return L(N)===h}function $(N){return L(N)===g}function X(N){return L(N)===E}function U(N){return L(N)===C}function W(N){return L(N)===p}function K(N){return L(N)===x}function te(N){return L(N)===v}function Z(N){return L(N)===y}l.AsyncMode=le,l.ConcurrentMode=Pe,l.ContextConsumer=Ie,l.ContextProvider=Me,l.Element=R,l.ForwardRef=z,l.Fragment=M,l.Lazy=ee,l.Memo=re,l.Portal=et,l.Profiler=Se,l.StrictMode=lt,l.Suspense=ue,l.isAsyncMode=wn,l.isConcurrentMode=It,l.isContextConsumer=_,l.isContextProvider=A,l.isElement=Q,l.isForwardRef=V,l.isFragment=$,l.isLazy=X,l.isMemo=U,l.isPortal=W,l.isProfiler=K,l.isStrictMode=te,l.isSuspense=Z,l.isValidElementType=B,l.typeOf=L})()},"./node_modules/react-is/index.js":(s,l,c)=>{s.exports=c("./node_modules/react-is/cjs/react-is.development.js")},"./node_modules/shallow-equal/dist/index.esm.js":(s,l,c)=>{c.r(l),c.d(l,{shallowEqualArrays:()=>p,shallowEqualObjects:()=>m});function m(g,v){if(g===v)return!0;if(!g||!v)return!1;var x=Object.keys(g),w=Object.keys(v),k=x.length;if(w.length!==k)return!1;for(var f=0;f<k;f++){var d=x[f];if(g[d]!==v[d]||!Object.prototype.hasOwnProperty.call(v,d))return!1}return!0}function p(g,v){if(g===v)return!0;if(!g||!v)return!1;var x=g.length;if(v.length!==x)return!1;for(var w=0;w<x;w++)if(g[w]!==v[w])return!1;return!0}},"./src/Component.ts":function(s,l,c){var m=this&&this.__rest||function(x,w){var k={};for(var f in x)Object.prototype.hasOwnProperty.call(x,f)&&w.indexOf(f)<0&&(k[f]=x[f]);if(x!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,f=Object.getOwnPropertySymbols(x);d<f.length;d++)w.indexOf(f[d])<0&&Object.prototype.propertyIsEnumerable.call(x,f[d])&&(k[f[d]]=x[f[d]]);return k},p=this&&this.__importDefault||function(x){return x&&x.__esModule?x:{default:x}};Object.defineProperty(l,"__esModule",{value:!0});var g=p(c("./src/useMediaQuery.ts")),v=function(x){var w=x.children,k=x.device,f=x.onChange,d=m(x,["children","device","onChange"]),h=(0,g.default)(d,k,f);return typeof w=="function"?w(h):h?w:null};l.default=v},"./src/Context.ts":(s,l,c)=>{Object.defineProperty(l,"__esModule",{value:!0});var m=c("react"),p=(0,m.createContext)(void 0);l.default=p},"./src/index.ts":function(s,l,c){var m=this&&this.__importDefault||function(w){return w&&w.__esModule?w:{default:w}};Object.defineProperty(l,"__esModule",{value:!0}),l.Context=l.toQuery=l.useMediaQuery=l.default=void 0;var p=m(c("./src/useMediaQuery.ts"));l.useMediaQuery=p.default;var g=m(c("./src/Component.ts"));l.default=g.default;var v=m(c("./src/toQuery.ts"));l.toQuery=v.default;var x=m(c("./src/Context.ts"));l.Context=x.default},"./src/mediaQuery.ts":function(s,l,c){var m=this&&this.__assign||function(){return m=Object.assign||function(y){for(var S,C=1,E=arguments.length;C<E;C++){S=arguments[C];for(var b in S)Object.prototype.hasOwnProperty.call(S,b)&&(y[b]=S[b])}return y},m.apply(this,arguments)},p=this&&this.__rest||function(y,S){var C={};for(var E in y)Object.prototype.hasOwnProperty.call(y,E)&&S.indexOf(E)<0&&(C[E]=y[E]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function")for(var b=0,E=Object.getOwnPropertySymbols(y);b<E.length;b++)S.indexOf(E[b])<0&&Object.prototype.propertyIsEnumerable.call(y,E[b])&&(C[E[b]]=y[E[b]]);return C},g=this&&this.__importDefault||function(y){return y&&y.__esModule?y:{default:y}};Object.defineProperty(l,"__esModule",{value:!0});var v=g(c("./node_modules/prop-types/index.js")),x=v.default.oneOfType([v.default.string,v.default.number]),w={all:v.default.bool,grid:v.default.bool,aural:v.default.bool,braille:v.default.bool,handheld:v.default.bool,print:v.default.bool,projection:v.default.bool,screen:v.default.bool,tty:v.default.bool,tv:v.default.bool,embossed:v.default.bool},k={orientation:v.default.oneOf(["portrait","landscape"]),scan:v.default.oneOf(["progressive","interlace"]),aspectRatio:v.default.string,deviceAspectRatio:v.default.string,height:x,deviceHeight:x,width:x,deviceWidth:x,color:v.default.bool,colorIndex:v.default.bool,monochrome:v.default.bool,resolution:x,type:Object.keys(w)};k.type;var f=p(k,["type"]),d=m({minAspectRatio:v.default.string,maxAspectRatio:v.default.string,minDeviceAspectRatio:v.default.string,maxDeviceAspectRatio:v.default.string,minHeight:x,maxHeight:x,minDeviceHeight:x,maxDeviceHeight:x,minWidth:x,maxWidth:x,minDeviceWidth:x,maxDeviceWidth:x,minColor:v.default.number,maxColor:v.default.number,minColorIndex:v.default.number,maxColorIndex:v.default.number,minMonochrome:v.default.number,maxMonochrome:v.default.number,minResolution:x,maxResolution:x},f),h=m(m({},w),d);l.default={all:h,types:w,matchers:k,features:d}},"./src/toQuery.ts":function(s,l,c){var m=this&&this.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(l,"__esModule",{value:!0});var p=m(c("./node_modules/hyphenate-style-name/index.js")),g=m(c("./src/mediaQuery.ts")),v=function(f){return"not ".concat(f)},x=function(f,d){var h=(0,p.default)(f);return typeof d=="number"&&(d="".concat(d,"px")),d===!0?h:d===!1?v(h):"(".concat(h,": ").concat(d,")")},w=function(f){return f.join(" and ")},k=function(f){var d=[];return Object.keys(g.default.all).forEach(function(h){var y=f[h];y!=null&&d.push(x(h,y))}),w(d)};l.default=k},"./src/useMediaQuery.ts":function(s,l,c){var m=this&&this.__importDefault||function(j){return j&&j.__esModule?j:{default:j}};Object.defineProperty(l,"__esModule",{value:!0});var p=c("react"),g=m(c("./node_modules/matchmediaquery/index.js")),v=m(c("./node_modules/hyphenate-style-name/index.js")),x=c("./node_modules/shallow-equal/dist/index.esm.js"),w=m(c("./src/toQuery.ts")),k=m(c("./src/Context.ts")),f=function(j){return j.query||(0,w.default)(j)},d=function(j){if(j){var T=Object.keys(j);return T.reduce(function(F,B){return F[(0,v.default)(B)]=j[B],F},{})}},h=function(){var j=(0,p.useRef)(!1);return(0,p.useEffect)(function(){j.current=!0},[]),j.current},y=function(j){var T=(0,p.useContext)(k.default),F=function(){return d(j)||d(T)},B=(0,p.useState)(F),L=B[0],le=B[1];return(0,p.useEffect)(function(){var Pe=F();(0,x.shallowEqualObjects)(L,Pe)||le(Pe)},[j,T]),L},S=function(j){var T=function(){return f(j)},F=(0,p.useState)(T),B=F[0],L=F[1];return(0,p.useEffect)(function(){var le=T();B!==le&&L(le)},[j]),B},C=function(j,T){var F=function(){return(0,g.default)(j,T||{},!!T)},B=(0,p.useState)(F),L=B[0],le=B[1],Pe=h();return(0,p.useEffect)(function(){if(Pe){var Ie=F();return le(Ie),function(){Ie&&Ie.dispose()}}},[j,T]),L},E=function(j){var T=(0,p.useState)(j.matches),F=T[0],B=T[1];return(0,p.useEffect)(function(){var L=function(le){B(le.matches)};return j.addListener(L),B(j.matches),function(){j.removeListener(L)}},[j]),F},b=function(j,T,F){var B=y(T),L=S(j);if(!L)throw new Error("Invalid or missing MediaQuery!");var le=C(L,B),Pe=E(le),Ie=h();return(0,p.useEffect)(function(){Ie&&F&&F(Pe)},[Pe]),(0,p.useEffect)(function(){return function(){le&&le.dispose()}},[]),Pe};l.default=b},react:s=>{s.exports=n}},a={};function i(s){var l=a[s];if(l!==void 0)return l.exports;var c=a[s]={exports:{}};return r[s].call(c.exports,c,c.exports,i),c.exports}i.d=(s,l)=>{for(var c in l)i.o(l,c)&&!i.o(s,c)&&Object.defineProperty(s,c,{enumerable:!0,get:l[c]})},i.o=(s,l)=>Object.prototype.hasOwnProperty.call(s,l),i.r=s=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(s,"__esModule",{value:!0})};var o=i("./src/index.ts");return o})())})(sm);var ur=sm.exports,lm={exports:{}},O0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",R0=O0,N0=R0;function um(){}function cm(){}cm.resetWarningCache=um;var I0=function(){function e(r,a,i,o,s,l){if(l!==N0){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:cm,resetWarningCache:um};return n.PropTypes=n,n};lm.exports=I0();var ba=lm.exports;const D=Ad(ba),A0="/Yoga-LandingPage-React-Vite/assets/bela-about-desktop-3c382061.png",L0="/Yoga-LandingPage-React-Vite/assets/bela-about-mobile-da5e2376.png",z0="/Yoga-LandingPage-React-Vite/assets/bela-about-tablet-7cab88f0.png";var Xe=function(){return Xe=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},Xe.apply(this,arguments)};function Qi(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,i;r<a;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var oe="-ms-",ea="-moz-",J="-webkit-",dm="comm",yo="rule",hu="decl",M0="@import",fm="@keyframes",D0="@layer",F0=Math.abs,gu=String.fromCharCode,cl=Object.assign;function B0(e,t){return Re(e,0)^45?(((t<<2^Re(e,0))<<2^Re(e,1))<<2^Re(e,2))<<2^Re(e,3):0}function pm(e){return e.trim()}function zt(e,t){return(e=t.exec(e))?e[0]:e}function H(e,t,n){return e.replace(t,n)}function yi(e,t){return e.indexOf(t)}function Re(e,t){return e.charCodeAt(t)|0}function vr(e,t,n){return e.slice(t,n)}function _t(e){return e.length}function mm(e){return e.length}function Hr(e,t){return t.push(e),e}function $0(e,t){return e.map(t).join("")}function Qc(e,t){return e.filter(function(n){return!zt(n,t)})}var xo=1,yr=1,hm=0,ht=0,Ee=0,_r="";function wo(e,t,n,r,a,i,o,s){return{value:e,root:t,parent:n,type:r,props:a,children:i,line:xo,column:yr,length:o,return:"",siblings:s}}function Gt(e,t){return cl(wo("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Un(e){for(;e.root;)e=Gt(e.root,{children:[e]});Hr(e,e.siblings)}function H0(){return Ee}function U0(){return Ee=ht>0?Re(_r,--ht):0,yr--,Ee===10&&(yr=1,xo--),Ee}function Et(){return Ee=ht<hm?Re(_r,ht++):0,yr++,Ee===10&&(yr=1,xo++),Ee}function In(){return Re(_r,ht)}function xi(){return ht}function So(e,t){return vr(_r,e,t)}function dl(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Y0(e){return xo=yr=1,hm=_t(_r=e),ht=0,[]}function V0(e){return _r="",e}function as(e){return pm(So(ht-1,fl(e===91?e+2:e===40?e+1:e)))}function W0(e){for(;(Ee=In())&&Ee<33;)Et();return dl(e)>2||dl(Ee)>3?"":" "}function q0(e,t){for(;--t&&Et()&&!(Ee<48||Ee>102||Ee>57&&Ee<65||Ee>70&&Ee<97););return So(e,xi()+(t<6&&In()==32&&Et()==32))}function fl(e){for(;Et();)switch(Ee){case e:return ht;case 34:case 39:e!==34&&e!==39&&fl(Ee);break;case 40:e===41&&fl(e);break;case 92:Et();break}return ht}function Q0(e,t){for(;Et()&&e+Ee!==47+10;)if(e+Ee===42+42&&In()===47)break;return"/*"+So(t,ht-1)+"*"+gu(e===47?e:Et())}function G0(e){for(;!dl(In());)Et();return So(e,ht)}function X0(e){return V0(wi("",null,null,null,[""],e=Y0(e),0,[0],e))}function wi(e,t,n,r,a,i,o,s,l){for(var c=0,m=0,p=o,g=0,v=0,x=0,w=1,k=1,f=1,d=0,h="",y=a,S=i,C=r,E=h;k;)switch(x=d,d=Et()){case 40:if(x!=108&&Re(E,p-1)==58){yi(E+=H(as(d),"&","&\f"),"&\f")!=-1&&(f=-1);break}case 34:case 39:case 91:E+=as(d);break;case 9:case 10:case 13:case 32:E+=W0(x);break;case 92:E+=q0(xi()-1,7);continue;case 47:switch(In()){case 42:case 47:Hr(K0(Q0(Et(),xi()),t,n,l),l);break;default:E+="/"}break;case 123*w:s[c++]=_t(E)*f;case 125*w:case 59:case 0:switch(d){case 0:case 125:k=0;case 59+m:f==-1&&(E=H(E,/\f/g,"")),v>0&&_t(E)-p&&Hr(v>32?Xc(E+";",r,n,p-1,l):Xc(H(E," ","")+";",r,n,p-2,l),l);break;case 59:E+=";";default:if(Hr(C=Gc(E,t,n,c,m,a,s,h,y=[],S=[],p,i),i),d===123)if(m===0)wi(E,t,C,C,y,i,p,s,S);else switch(g===99&&Re(E,3)===110?100:g){case 100:case 108:case 109:case 115:wi(e,C,C,r&&Hr(Gc(e,C,C,0,0,a,s,h,a,y=[],p,S),S),a,S,p,s,r?y:S);break;default:wi(E,C,C,C,[""],S,0,s,S)}}c=m=v=0,w=f=1,h=E="",p=o;break;case 58:p=1+_t(E),v=x;default:if(w<1){if(d==123)--w;else if(d==125&&w++==0&&U0()==125)continue}switch(E+=gu(d),d*w){case 38:f=m>0?1:(E+="\f",-1);break;case 44:s[c++]=(_t(E)-1)*f,f=1;break;case 64:In()===45&&(E+=as(Et())),g=In(),m=p=_t(h=E+=G0(xi())),d++;break;case 45:x===45&&_t(E)==2&&(w=0)}}return i}function Gc(e,t,n,r,a,i,o,s,l,c,m,p){for(var g=a-1,v=a===0?i:[""],x=mm(v),w=0,k=0,f=0;w<r;++w)for(var d=0,h=vr(e,g+1,g=F0(k=o[w])),y=e;d<x;++d)(y=pm(k>0?v[d]+" "+h:H(h,/&\f/g,v[d])))&&(l[f++]=y);return wo(e,t,n,a===0?yo:s,l,c,m,p)}function K0(e,t,n,r){return wo(e,t,n,dm,gu(H0()),vr(e,2,-2),0,r)}function Xc(e,t,n,r,a){return wo(e,t,n,hu,vr(e,0,r),vr(e,r+1,-1),r,a)}function gm(e,t,n){switch(B0(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 4789:return ea+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+ea+e+oe+e+e;case 5936:switch(Re(e,t+11)){case 114:return J+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+oe+H(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return J+e+oe+e+e;case 6165:return J+e+oe+"flex-"+e+e;case 5187:return J+e+H(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+oe+"flex-$1$2")+e;case 5443:return J+e+oe+"flex-item-"+H(e,/flex-|-self/g,"")+(zt(e,/flex-|baseline/)?"":oe+"grid-row-"+H(e,/flex-|-self/g,""))+e;case 4675:return J+e+oe+"flex-line-pack"+H(e,/align-content|flex-|-self/g,"")+e;case 5548:return J+e+oe+H(e,"shrink","negative")+e;case 5292:return J+e+oe+H(e,"basis","preferred-size")+e;case 6060:return J+"box-"+H(e,"-grow","")+J+e+oe+H(e,"grow","positive")+e;case 4554:return J+H(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return H(H(H(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return H(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return H(H(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+oe+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4200:if(!zt(e,/flex-|baseline/))return oe+"grid-column-align"+vr(e,t)+e;break;case 2592:case 3360:return oe+H(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,a){return t=a,zt(r.props,/grid-\w+-end/)})?~yi(e+(n=n[t].value),"span")?e:oe+H(e,"-start","")+e+oe+"grid-row-span:"+(~yi(n,"span")?zt(n,/\d+/):+zt(n,/\d+/)-+zt(e,/\d+/))+";":oe+H(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return zt(r.props,/grid-\w+-start/)})?e:oe+H(H(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return H(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(Re(e,t+1)){case 109:if(Re(e,t+4)!==45)break;case 102:return H(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+ea+(Re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~yi(e,"stretch")?gm(H(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return H(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,a,i,o,s,l,c){return oe+a+":"+i+c+(o?oe+a+"-span:"+(s?l:+l-+i)+c:"")+e});case 4949:if(Re(e,t+6)===121)return H(e,":",":"+J)+e;break;case 6444:switch(Re(e,Re(e,14)===45?18:11)){case 120:return H(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+J+(Re(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+oe+"$2box$3")+e;case 100:return H(e,":",":"+oe)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return H(e,"scroll-","scroll-snap-")+e}return e}function Gi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Z0(e,t,n,r){switch(e.type){case D0:if(e.children.length)break;case M0:case hu:return e.return=e.return||e.value;case dm:return"";case fm:return e.return=e.value+"{"+Gi(e.children,r)+"}";case yo:if(!_t(e.value=e.props.join(",")))return""}return _t(n=Gi(e.children,r))?e.return=e.value+"{"+n+"}":""}function J0(e){var t=mm(e);return function(n,r,a,i){for(var o="",s=0;s<t;s++)o+=e[s](n,r,a,i)||"";return o}}function ey(e){return function(t){t.root||(t=t.return)&&e(t)}}function ty(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case hu:e.return=gm(e.value,e.length,n);return;case fm:return Gi([Gt(e,{value:H(e.value,"@","@"+J)})],r);case yo:if(e.length)return $0(n=e.props,function(a){switch(zt(a,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Un(Gt(e,{props:[H(a,/:(read-\w+)/,":"+ea+"$1")]})),Un(Gt(e,{props:[a]})),cl(e,{props:Qc(n,r)});break;case"::placeholder":Un(Gt(e,{props:[H(a,/:(plac\w+)/,":"+J+"input-$1")]})),Un(Gt(e,{props:[H(a,/:(plac\w+)/,":"+ea+"$1")]})),Un(Gt(e,{props:[H(a,/:(plac\w+)/,oe+"input-$1")]})),Un(Gt(e,{props:[a]})),cl(e,{props:Qc(n,r)});break}return""})}}var ny={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},xr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",vu=typeof window<"u"&&"HTMLElement"in window,ry=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY),ko=Object.freeze([]),wr=Object.freeze({});function ay(e,t,n){return n===void 0&&(n=wr),e.theme!==n.theme&&e.theme||t||n.theme}var vm=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),iy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,oy=/(^-|-$)/g;function Kc(e){return e.replace(iy,"-").replace(oy,"")}var sy=/(a)(d)/gi,Zc=function(e){return String.fromCharCode(e+(e>25?39:97))};function pl(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Zc(t%52)+n;return(Zc(t%52)+n).replace(sy,"$1-$2")}var is,nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},ym=function(e){return nr(5381,e)};function ly(e){return pl(ym(e)>>>0)}function uy(e){return e.displayName||e.name||"Component"}function os(e){return typeof e=="string"&&!0}var xm=typeof Symbol=="function"&&Symbol.for,wm=xm?Symbol.for("react.memo"):60115,cy=xm?Symbol.for("react.forward_ref"):60112,dy={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},fy={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Sm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},py=((is={})[cy]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},is[wm]=Sm,is);function Jc(e){return("type"in(t=e)&&t.type.$$typeof)===wm?Sm:"$$typeof"in e?py[e.$$typeof]:dy;var t}var my=Object.defineProperty,hy=Object.getOwnPropertyNames,ed=Object.getOwnPropertySymbols,gy=Object.getOwnPropertyDescriptor,vy=Object.getPrototypeOf,td=Object.prototype;function km(e,t,n){if(typeof t!="string"){if(td){var r=vy(t);r&&r!==td&&km(e,r,n)}var a=hy(t);ed&&(a=a.concat(ed(t)));for(var i=Jc(e),o=Jc(t),s=0;s<a.length;++s){var l=a[s];if(!(l in fy||n&&n[l]||o&&l in o||i&&l in i)){var c=gy(t,l);try{my(e,l,c)}catch{}}}}return e}function Sr(e){return typeof e=="function"}function yu(e){return typeof e=="object"&&"styledComponentId"in e}function Tn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function nd(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function wa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ml(e,t,n){if(n===void 0&&(n=!1),!n&&!wa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ml(e[r],t[r]);else if(wa(t))for(var r in t)e[r]=ml(e[r],t[r]);return e}function xu(e,t){Object.defineProperty(e,"toString",{value:t})}function _a(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var yy=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,a=r.length,i=a;t>=i;)if((i<<=1)<0)throw _a(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var o=a;o<i;o++)this.groupSizes[o]=0}for(var s=this.indexOfGroup(t+1),l=(o=0,n.length);o<l;o++)this.tag.insertRule(s,n[o])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),a=r+n;this.groupSizes[t]=0;for(var i=r;i<a;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],a=this.indexOfGroup(t),i=a+r,o=a;o<i;o++)n+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return n},e}(),Si=new Map,Xi=new Map,ss=1,Za=function(e){if(Si.has(e))return Si.get(e);for(;Xi.has(ss);)ss++;var t=ss++;return Si.set(e,t),Xi.set(t,e),t},xy=function(e,t){Si.set(e,t),Xi.set(t,e)},wy="style[".concat(xr,"][").concat("data-styled-version",'="').concat("6.0.4",'"]'),Sy=new RegExp("^".concat(xr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),ky=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},Ey=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(`/*!sc*/
`),a=[],i=0,o=r.length;i<o;i++){var s=r[i].trim();if(s){var l=s.match(Sy);if(l){var c=0|parseInt(l[1],10),m=l[2];c!==0&&(xy(m,c),ky(e,m,l[3]),e.getTag().insertRules(c,a)),a.length=0}else a.push(s)}}};function Cy(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Em=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(s){var l=Array.from(s.querySelectorAll("style[".concat(xr,"]")));return l[l.length-1]}(n),i=a!==void 0?a.nextSibling:null;r.setAttribute(xr,"active"),r.setAttribute("data-styled-version","6.0.4");var o=Cy();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},jy=function(){function e(t){this.element=Em(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,a=0,i=r.length;a<i;a++){var o=r[a];if(o.ownerNode===n)return o}throw _a(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),by=function(){function e(t){this.element=Em(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),_y=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),rd=vu,Py={isServer:!vu,useCSSOMInjection:!ry},Cm=function(){function e(t,n,r){t===void 0&&(t=wr),n===void 0&&(n={});var a=this;this.options=Xe(Xe({},Py),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&vu&&rd&&(rd=!1,function(i){for(var o=document.querySelectorAll(wy),s=0,l=o.length;s<l;s++){var c=o[s];c&&c.getAttribute(xr)!=="active"&&(Ey(i,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),xu(this,function(){return function(i){for(var o=i.getTag(),s=o.length,l="",c=function(p){var g=function(f){return Xi.get(f)}(p);if(g===void 0)return"continue";var v=i.names.get(g),x=o.getGroup(p);if(v===void 0||x.length===0)return"continue";var w="".concat(xr,".g").concat(p,'[id="').concat(g,'"]'),k="";v!==void 0&&v.forEach(function(f){f.length>0&&(k+="".concat(f,","))}),l+="".concat(x).concat(w,'{content:"').concat(k,'"}').concat(`/*!sc*/
`)},m=0;m<s;m++)c(m);return l}(a)})}return e.registerId=function(t){return Za(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Xe(Xe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,a=n.target;return n.isServer?new _y(a):r?new jy(a):new by(a)}(this.options),new yy(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Za(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Za(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Za(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ty=/&/g,Oy=/^\s*\/\/.*$/gm;function jm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=jm(n.children,t)),n})}function Ry(e){var t,n,r,a=e===void 0?wr:e,i=a.options,o=i===void 0?wr:i,s=a.plugins,l=s===void 0?ko:s,c=function(g,v,x){return x===n||x.startsWith(n)&&x.endsWith(n)&&x.replaceAll(n,"").length>0?".".concat(t):g},m=l.slice();m.push(function(g){g.type===yo&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(Ty,n).replace(r,c))}),o.prefix&&m.push(ty),m.push(Z0);var p=function(g,v,x,w){v===void 0&&(v=""),x===void 0&&(x=""),w===void 0&&(w="&"),t=w,n=v,r=new RegExp("\\".concat(n,"\\b"),"g");var k=g.replace(Oy,""),f=X0(x||v?"".concat(x," ").concat(v," { ").concat(k," }"):k);o.namespace&&(f=jm(f,o.namespace));var d=[];return Gi(f,J0(m.concat(ey(function(h){return d.push(h)})))),d};return p.hash=l.length?l.reduce(function(g,v){return v.name||_a(15),nr(g,v.name)},5381).toString():"",p}var Ny=new Cm,hl=Ry(),bm=Ve.createContext({shouldForwardProp:void 0,styleSheet:Ny,stylis:hl});bm.Consumer;Ve.createContext(void 0);function ad(){return O.useContext(bm)}var Iy=function(){function e(t,n){var r=this;this.inject=function(a,i){i===void 0&&(i=hl);var o=r.name+i.hash;a.hasNameForId(r.id,o)||a.insertRules(r.id,o,i(r.rules,o,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,xu(this,function(){throw _a(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=hl),this.name+t.hash},e}(),Ay=function(e){return e>="A"&&e<="Z"};function id(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Ay(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var _m=function(e){return e==null||e===!1||e===""},Pm=function(e){var t,n,r=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!_m(i)&&(Array.isArray(i)&&i.isCss||Sr(i)?r.push("".concat(id(a),":"),i,";"):wa(i)?r.push.apply(r,Qi(Qi(["".concat(a," {")],Pm(i),!1),["}"],!1)):r.push("".concat(id(a),": ").concat((t=a,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ny||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function An(e,t,n,r){if(_m(e))return[];if(yu(e))return[".".concat(e.styledComponentId)];if(Sr(e)){if(!Sr(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var a=e(t);return An(a,t,n,r)}var i;return e instanceof Iy?n?(e.inject(n,r),[e.getName(r)]):[e]:wa(e)?Pm(e):Array.isArray(e)?Array.prototype.concat.apply(ko,e.map(function(o){return An(o,t,n,r)})):[e.toString()]}function Ly(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Sr(n)&&!yu(n))return!1}return!0}var zy=ym("6.0.4"),My=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Ly(t),this.componentId=n,this.baseHash=nr(zy,n),this.baseStyle=r,Cm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))a=Tn(a,this.staticRulesId);else{var i=nd(An(this.rules,t,n,r)),o=pl(nr(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,o)){var s=r(i,".".concat(o),void 0,this.componentId);n.insertRules(this.componentId,o,s)}a=Tn(a,o),this.staticRulesId=o}else{for(var l=nr(this.baseHash,r.hash),c="",m=0;m<this.rules.length;m++){var p=this.rules[m];if(typeof p=="string")c+=p;else if(p){var g=nd(An(p,t,n,r));l=nr(l,g),c+=g}}if(c){var v=pl(l>>>0);n.hasNameForId(this.componentId,v)||n.insertRules(this.componentId,v,r(c,".".concat(v),void 0,this.componentId)),a=Tn(a,v)}}return a},e}(),Tm=Ve.createContext(void 0);Tm.Consumer;var ls={};function Dy(e,t,n){var r=yu(e),a=e,i=!os(e),o=t.attrs,s=o===void 0?ko:o,l=t.componentId,c=l===void 0?function(h,y){var S=typeof h!="string"?"sc":Kc(h);ls[S]=(ls[S]||0)+1;var C="".concat(S,"-").concat(ly("6.0.4"+S+ls[S]));return y?"".concat(y,"-").concat(C):C}(t.displayName,t.parentComponentId):l,m=t.displayName;m===void 0&&function(h){return os(h)?"styled.".concat(h):"Styled(".concat(uy(h),")")}(e);var p=t.displayName&&t.componentId?"".concat(Kc(t.displayName),"-").concat(t.componentId):t.componentId||c,g=r&&a.attrs?a.attrs.concat(s).filter(Boolean):s,v=t.shouldForwardProp;if(r&&a.shouldForwardProp){var x=a.shouldForwardProp;if(t.shouldForwardProp){var w=t.shouldForwardProp;v=function(h,y){return x(h,y)&&w(h,y)}}else v=x}var k=new My(n,p,r?a.componentStyle:void 0);function f(h,y){return function(S,C,E){var b=S.attrs,j=S.componentStyle,T=S.defaultProps,F=S.foldedComponentIds,B=S.styledComponentId,L=S.target,le=Ve.useContext(Tm),Pe=ad(),Ie=S.shouldForwardProp||Pe.shouldForwardProp,Me=function(et,Se,lt){for(var ue,xe=Xe(Xe({},Se),{className:void 0,theme:lt}),wn=0;wn<et.length;wn+=1){var It=Sr(ue=et[wn])?ue(xe):ue;for(var _ in It)xe[_]=_==="className"?Tn(xe[_],It[_]):_==="style"?Xe(Xe({},xe[_]),It[_]):It[_]}return Se.className&&(xe.className=Tn(xe.className,Se.className)),xe}(b,C,ay(C,le,T)||wr),R=Me.as||L,z={};for(var M in Me)Me[M]===void 0||M[0]==="$"||M==="as"||M==="theme"||(M==="forwardedAs"?z.as=Me.forwardedAs:Ie&&!Ie(M,R)||(z[M]=Me[M]));var ee=function(et,Se){var lt=ad(),ue=et.generateAndInjectStyles(Se,lt.styleSheet,lt.stylis);return ue}(j,Me),re=Tn(F,B);return ee&&(re+=" "+ee),Me.className&&(re+=" "+Me.className),z[os(R)&&!vm.has(R)?"class":"className"]=re,z.ref=E,O.createElement(R,z)}(d,h,y)}var d=Ve.forwardRef(f);return d.attrs=g,d.componentStyle=k,d.shouldForwardProp=v,d.foldedComponentIds=r?Tn(a.foldedComponentIds,a.styledComponentId):"",d.styledComponentId=p,d.target=r?a.target:e,Object.defineProperty(d,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(h){this._foldedDefaultProps=r?function(y){for(var S=[],C=1;C<arguments.length;C++)S[C-1]=arguments[C];for(var E=0,b=S;E<b.length;E++)ml(y,b[E],!0);return y}({},a.defaultProps,h):h}}),xu(d,function(){return".".concat(d.styledComponentId)}),i&&km(d,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),d}function od(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var sd=function(e){return Object.assign(e,{isCss:!0})};function Fy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Sr(e)||wa(e)){var r=e;return sd(An(od(ko,Qi([r],t,!0))))}var a=e;return t.length===0&&a.length===1&&typeof a[0]=="string"?An(a):sd(An(od(a,t)))}function gl(e,t,n){if(n===void 0&&(n=wr),!t)throw _a(1,t);var r=function(a){for(var i=[],o=1;o<arguments.length;o++)i[o-1]=arguments[o];return e(t,n,Fy.apply(void 0,Qi([a],i,!1)))};return r.attrs=function(a){return gl(e,t,Xe(Xe({},n),{attrs:Array.prototype.concat(n.attrs,a).filter(Boolean)}))},r.withConfig=function(a){return gl(e,t,Xe(Xe({},n),a))},r}var Om=function(e){return gl(Dy,e)},Y=Om;vm.forEach(function(e){Y[e]=Om(e)});const By=Y.section`
background: var(--C2-50p);
color: var(--C4);

.about-section  {
  display: flex;
  justify-content: space-between;
  margin: auto;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 3rem;
}

.img-container {
  width: 45%;
}

.image {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.7rem 33.7rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 50rem;
  width: 100%;
}

.text-container {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 3rem;
  justify-content: center;
  text-align: center;
  width: 45%;
}

.about-title {
  text-align: center;
}

.text-container p {
  text-align: center;
}

/* Mobile */
@media screen and (max-width: 800px) {
  .about-section  {
    flex-direction: column;
  }

  .img-container {
    width: 100%;
  }

  .image {
    max-width: 100%;
  }

  .text-container {
    width: 100%;
  }
}
`,$y=Y.section`
color: var(--C4);
flex-direction: row;
padding-bottom: 3.7rem;

.button {
  background: var(--C4);
  border: 3px solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
}

.button:hover {
  background: var(--C2);
  border: 3px solid var(--C3);
  color: var(--C4);
}

@media screen and (max-width: 744px) {
  flex-direction: column;
  text-align: center;
  gap: 2rem;
}
`;function Rm({isMobile:e,isTablet:t}){const n=()=>e?"text-xs":t?"text-sm":"text-lg",r=()=>e?L0:t?z0:A0;return u.jsxs(u.Fragment,{children:[u.jsx(By,{id:"contact",children:u.jsxs("div",{className:"section-size about-section",children:[e&&u.jsx("h4",{className:"text-3xl about-title",children:"Olá! Eu sou Isabella Cayuela,"}),u.jsx("div",{className:"img-container",children:u.jsx("img",{className:"image",src:r(),alt:"Isabella Cayuela","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1500"})}),u.jsxs("div",{className:"text-xs text-container",children:[!e&&u.jsx("h4",{className:"text-3xl about-title",children:"Olá! Eu sou Isabella Cayuela,"}),u.jsx("p",{className:n(),children:"Há mais de 7 anos estudo, vivencio e ensino o Yoga para quem se propõe a embarcar na sua jornada de autoconhecimento e autocuidado."}),u.jsx("p",{className:n(),children:"Minha missão é transformar a vida das pessoas através da prática, fortalecer o corpo e a mente de quem firma o compromisso com sua melhor versão."}),u.jsx("p",{className:n(),children:"Com o objetivo de democratizar e acessibilizar o Yoga, criei o Yoga iClub, em 2021. Nossa plataforma conta com mais de 100 aulas entre elas: práticas de Yoga, respiratórios e meditações guiados. Aulas novas são adicionadas na plataforma toda semana."}),u.jsx("p",{className:n(),children:"Através da minha metodologia, tivemos mais de 500 vidas impactadas e transformadas. Vem fazer parte dessa comunidade também!"})]})]})}),u.jsxs($y,{className:"section-size",children:[u.jsx("h4",{className:`${e?"text-2xl":"text-3xl"}`,children:"Ainda com dúvidas?"}),u.jsx("button",{className:"Button button",type:"button",children:u.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5531996793158",target:"_blank",rel:"noopener noreferrer",children:"CONVERSE COMIGO"})})]})]})}Rm.propTypes={isMobile:D.bool.isRequired,isTablet:D.bool.isRequired};const Hy="/Yoga-LandingPage-React-Vite/assets/arow-f9979109.png",Uy="/Yoga-LandingPage-React-Vite/assets/girlYoga-cb0a3363.png",Yy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADhCAYAAAAZHVOSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAN80lEQVR4Ae3dD5DOdR7A8c8+y5L/ohaVP6morqsrRVIuJNHUcFJtGk2UUiqVTnKDGWmcMDmHotgohWLzb86ef1GkKyLj37TW35RWK3Yty7rv5zdtF+f5Pc8++zxrP8++XzNGc/ebmma9+/1+33+/hKysrCGBQGCwADCnoKBgaEAAmEbEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGFdOgCg4WVAgp06dkmhJDAQkISFBEBoRo1i2ZmbK23PmSMbu3RK9hEWqVakiXdu1kw6tWnlBIzgiRsR2798vvQYPln0HDkgsrPnmG8k7flz+4mJGcPwnDhGbsWhRzAJWx/PzZeLMmQJ/RIyI7dy3T2Jtx969An9EjIhd3qCBxFo0B8viFREjYt3vvluuKIGQ4Y+BLUSsdo0aMm/cOElfvVrWbdkiBW6aKVx5x47JJytWSE5urqB4iBjFUi4xUe5y00D6qyhGpaaGHbA+UjNnHByP0yhxazZskDdnzQr7+sPcrX0RMUrUl99+K48PHeqt8EJ0EDFKTMaePfLciBGSc/SoIHqIGCUiKztb+g4fLvuzsgTRRcSIuSPunfb5kSNlS2bmWf//cuXKSXLt2oLIEDFiStc+D3LTUKvWrQt6TesbbpBenTsLIkPEiJkTJ07I36dMkXnLlwe9JrlWLRn0+ONSvWpVQWSIGDFxzN2B33jvPUlNSwt6Tf06dWTCK69I/bp1BZEjYkSd3oHfmTNHps2fH/Sa2jVryuA+feTapk0FxUPEiKqCU6dkqrv7Tv74Yzmck3PWawIJCTKwVy+5zb0Lo/hYdomo0eWRaUuXysjUVO9uHMzQp56Se2+/XcJVPjFREBx3YkSFBjzXBfzK2LG+Afd7+GFJ6dhRiuK8ihUFwRExoqIw4GP5+UGv6dmlizz94IOC6OJxGsWi78Bzly2Tl994I+gdONE9Dj/UqZP3HozoI2JETPcPz1q8WIZOnOgbsB5097x7jPYTCLLVkC2IoRExInLi5EnvoLxhb77p/fXZBAIBL2C9A1etXNn376dzxnr9mQcLsBwzNN6JUWR6131r1iwZOmGCb8CdbrtNXu3bN2TAqmnjxtKuRYvT7rx64MCzKSkCf9yJUSQ6cDXaTSHpPHAw+gjduU0bGdCzpxdzOCq7EeghTz4pNapWlc0ZGd6miAc6dJDObdsK/BExwqb7gPX996P0dN/rvEfoxx6TqpUqSVHoOurhzzzj7XqqkJQkSeXLC0IjYoRl1/798uqkSfLv1auDXqN3z27t28tLjz5a5IAL6eN0OI/f+B8iRkjfbt8uwydPli83bQp6jd419Qjb57p3l8rnnScoOUQMX5u++04GuDngLTt2+B7k/njXrvJkt25SsUIFQckiYpyVLuJYsGKFt6H/iM9pkzq/O6h3b+lxzz2Cc4OIcVb/nDFDxrlfwaaQVHn3Djy6f3/peOutgnOHiHEanQMe5gawps2b53tdJTclNGnIEGnxxz8Kzi0ihkffd/W9t//o0d48bVDu8fmqSy+VoX36yPVXXik494gY3iPzZ+vWyYsu4IPZ2UGvSwgE5GZ359WAL734YkHpQMRlXE5ensxYuFDGf/CBHDpyJOh1+v576/XXy2vPPusdrYPSg4jLMP1I+F/HjPGd/1WV3LyvTiH17NzZexdG6ULEZZA+Pq/6+msZ8c47sm3nTt9r9VSNYU8/LZ3cCLSuyELpw0+ljNGA9dF5Slqa/OLz+KzqXXCBjOjXT26+9lr29ZZiRFxG6OjzN9u2yetTp8rajRtDfpWwS9u20q9HD6nHft5Sj4jLgFO/HiP71uzZ8uPBg77X6h7eR927b9+UFN5/jSDiOKdfIRzp3n0Xrlolx30OsVMXuFHnIU88Ie1atvRihg1EHKcK776jUlPl6LFjIa/XlVfjBw2S6lWqCGwh4ji098ABGTZxoiz22ftbKMmNOPfu1k2evP9+qRDBJvzsw4fl/QUL5KvNm+XgoUOS73PmdLh0TlrP3HqwY0eWdYaBiOOIDlZ9sGiRjJk2TX7+5ZeQ1194/vky5qWXpPk110Q0+qyfLb3vhRckY88eibYNbhBuwcqVMm7gQOlwyy2C4Ig4DuS5x+Wv3Z1w4qxZ8vn69b77flW1ypWlU+vW0sfdgetdeKFEavHnn8ck4EL67zFm+nQiDoGIjTvo7rg67zs7PT3oB8x+T5dMvtyzp3cSZfliLt7I2L1bYk3/GRoz89TBEbFRx92j7OI1a7xvAIcTk546+edmzeTlXr2itnnhyNGjEmt6DnVuXh5H/vggYmN0xdUXGzZ4Z15tzcwM+eisLk5OliF9+nifEk0M2DtqPNTClLKOiI0o3O876aOPvHfRcKaN9NjXu91j8zMpKXKxG+1FfCJiA3TqRj+ZMnXuXO8dOBwXubvv33r3lttvvJGFG3GOiEux73/6Sd795BOZuXixZIcZ7/nVq0uvLl0kpVOniM9+hi1EXAr9kJUlacuWycdLlsj2EFsFC+lIc5vmzaX/I49Io4suEpQdRFyK6NZAXeOsd9+MvXslP8Ra50LXXH65t2FfB66qV60qKFuIuBTIdVM1usNo+oIFYa20KlSrRg156oEH5KGOHdmwX4bxkz+HdMDq3XnzvONhdQ1yuHTOV++8ve+7T2pWqyYo24j4HNj3448yff58SXWPzbr+uCjatmghL/boIVc0aCCAIuISoJ9E0bvu+q1bZZoLd+2mTd6Kq3DpVwJbXXedPNu9u1xOvDgDEceQLtDIys6WtOXLZeHKlbJx27YirT6q4qaIdIfRI/feKze533W+V/+e+t68fdcu3yNmdVDszLt8pQoVJDHIu7PuI9a7u37km3XKthBxDGg82zIzvY9xp69Z400ZFYXeea9t0kTuv/NOaX/zzacNWn361VcyePx42b1/v0Rb/bp15dW+faWlu+vDDiKOEl2or8e/pq9e7W3G1yWSBUVc86uL/PWdVwetmjZq9H8rrfR4nRdHjfIezWNh1/ffywuvvy6fTp1a7B1OKDn8pIrBe1x2QX25caOkrVjh/V6UUeZCOsKsWwO7u6mixvXre6PPZ/Pd7t0xC7iQHqS3w81RM3BmBxFHQJdAbnZ3Wr3r6uOyjjYXmXvvrJ+cLO1btpQu7dp50YR6Fw11TnS0ZBdhrhrnHhGH6aeff/Y+d7Lkiy+8rYA6YHUszBVVv6ePqTdcdZXc36GDtzlB339Lm3C2N6L0IOIQdDT5PTen+/acOXLAPWpGEq7SEzVaN2smKe6RWT8NmhTBoXTA2RBxCK9NnuytqNLN+EWl77aXuXfcLm3aeANW+lmUim6aB4gmIvbx2fr1MmXuXCkqfUTW6SH9FEoTN8oMxBIR+9D34HDpsTe3ucflzu6u287ddfVUDaAkELEPPbhcYzwWZImkjib/4bLL5O7WraVjq1bFOv4ViBQR+0iuVUv+MWCADBw79rdjcfTM5j9deaW0uekmb0mknhzJMkWcS0Qcgg5IzXZzuOu2bpXz3KBUk4YN5ZI6dQgXpQYRh+GSunW9X0BpZO8QYgCn4U4cJl30cSQ3N+Q3fsOhj+L6BcLSuFoL9hBxCCdOnJA5S5fKnCVLvM0N+REs+jhTwEWs79dXN24sj3XtKg3r1RMgUkQcwvgPP5Sx778fk/XEG7dvl6Vr18rCCROkJqdUIkK8E4egXxuM5YYA3fq33IUMRIqIfej7774DByTWdP8uECki9qHH7JTEtjz9dCcQKSIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjEvIysoaEggEBkuc2ZaZKbPT02Xzjh1y8uRJ73+rXKmSJAb8/7uVe/SonPj1+pMFBfKfTZsk1s6vXl2Sa9UKeV1uXp7s3LdPYq1BvXpSqWLFkNf9kJUlBw8dklhrdvXVv/3cKiQleb/86M8tJzfX++vExERp0rChdL3jDmnaqJHEm4KCgqFxGfH0BQtk5JQpcuTXHySQVL68DH7iCXngrrsknmjEcfc4nePupKlpaQSM0xzPz5cJM2d6fz7iTdxFrD+swzk5Apwp7/hx789HvIm7iPXdqVbNmgKcqXaNGt64SLyJu4irVaki/bp3lzphDBSh7NA/D8+5PxdJ5cpJvIm/fyOnbfPmcklysvxr9WrZkpEhBadOCcomN2grTd3odPuWLeUK93s8isuIExISpImbTmgSh1MKwJlY7AEYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYVy4QCEhCQoIAsEf7/S9+IFQPTGvCwwAAAABJRU5ErkJggg==",Vy="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPEAAADhCAYAAAAZHVOSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKlklEQVR4Ae3de2zV5R3H8c85bU9bqAVKLSAIglDF6ryBAkZxTJnTqkvMdAY3xx8Yh2L2x+LMJgoZEadk8RKX8I9i/AMWt4mOZUOGoJNLFTaI3JpwMzgo2sOtBXo5Pd3v+SkZKdDipfV8n+f9Sk5MyPnDwHmf5/d7fs95nkQ6nZ6VTCafFABzstns7KQAmEbEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHFEDBhHxIBxRAwYR8SAcUQMGEfEgHH5wpd2uKFB9YcOqbm1VehefUpKNKCsTPn5fFTPhL+Zs7Rm40YtXr5caz/6SJ/s3y/0nPy8PI2tqtLkCRN056RJcdj4v0Q6nZ6VTCafFE5rT12dZr70kv61fr3w7SsrLdWcGTN0cxR0MpFQ6LLZ7Gzuic+gvb1df3nnHd360EMEnEMOHDmih+fO1a+ff16tmYzAxNYZrdu8WY+/8IKOHT8u5JZo9NGfli3TswsWCER8WkeOHo0/IM0tLUJucldKry1Zos07dih0RHwaS959V+u3bBFyW0v0JfvSwoVqPHZMISPiDrLRN/wb0b0wbFi1YYPq6usVMiLu4LMDB7Rzzx7BBjcKb6itVch4TtzBx/v2qamLe+HCVEqjR4xQae/e4iFH92lqbdXW6J7XzVF0ZuvOnQoZEXfQ1NwcT5p05qrRo/XCY4+pV3GxEjyr7DbZtjb9celS/Xb+/E7fd6ihIZ6xTibDvLAk4g7cs8e26APRmZIo3rI+fYRuVlCgwRUVXb7NPUVwcxmh3htyT9xBi1sP3cVILEZf5BAiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOHb26KB/377qV1qqlkzm1GNC2tuVyWY1oH9/AbmCiDsYU1WlN557Lt69wx3kdTK3bU9bW5vKo9CBXEHEHbjRd9C55wqwgntiwDgiBowjYsA4IgaMI2LAOCIGjAv6EVMmeuZ7rKlJuagolVKqoEBAV4KJ+GgU67pNm/TX997T5u3btWffPh1vblYuK8jP13kVFaocNkw3jxunmydMiE9iBE7mfcTuhMNtu3bpxYULtXTVKlniDnf7eO/e+LVszRpd8tZbmnHvvZp0zTXKz2edDj7n9T2xC3jFhx/q53PmmAv4dLbs2KGHn3pKv3/ttc8PfgPk+UjsTpCfMXdufOawL9z67fmvvx6P0o9OnRpfciNs3o7Ehxsb9eyCBV4FfLI/L1umv0X394C3ES9bu1brN2+Wr9yX1CtvvqlDR44IYfMy4sMNDXp96dL4EZLP3Cz78g8+EMLmZcRbdu5U7e7d8p2buHs7mrVG2LycFVleU6OGo0c7fU8ikVDfc85RaUmJcpF7hl1/8KCy0URWZ9yMdSaa5OKRU7i8+5d3O2/8Z9u2Lt83/Z579Iv77lMymbsXI+uie/r7H3+808m5401NOhDdF1eUlQlhCnbt9HVXXpnTATujR4zocoWW+9LimXHYgo04L8cDdtweX7n+RYNvH58QwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2LAOCIGjCNiwDgiBowjYsA4IgaMI2Lj2qNX1vNdPdE5IjbOnQjR2sVmevAbEQPGETHMc9sPu1eo2Kw4EG5XzOaWFlnS1t6ujbW1Xb6vuLDQxMaH3YWIAzFp2jR9UlcnHw0oL1fIuJwOgNuX2teAnYuGD1fIiDgAqYIC+cptrn/VxRcrZEQciF5FRfJR9cSJqujXTyEjYphV3rev7quuDv4wOSIORXu7fOKuLO699VaNGjpUoWN2OhDHjT1e6ky/0tL4RMsf33ILZ1WJiIOQjUbhdg9GYhfsZaNG6VdTp2rspZcS8BeIOABuLdOlI0eqLp2WJe5USDez7magL6us1PfHj9fVVVXeTtJ9VUQcALckcdEzz6jJ2CW1+//Oi0IuSqVUEPjkVWf4mwlEcTR6FTOCeYmbCsA4RuJALF29Wtt27eryfe7HBBYvXTNtbTrW1HTKn/fu1UvXXX65Lh4+3NtfOhFxIB55+mllMhmFyM1iV99wg2ZNn64+JSXyDZfTgQg1YCebzeqtlSv1h0WL5CMiRjDejm4pjp7mkts6IkYw3CO2Fo9Wrp1AxMYlo8ma/LNZuRTw9jUn9C4ujp87+4aIjUt+sSCiK8WplEI37Lzz4tVfviHiQGQ9+xXTl+VmqCdPmCAfEXEgrG2S902rHDZM3x07Vj4iYnivvF8/PTp1qirKyuQjIobXioqK9Mv779d1V1whX7FiC94aNmiQZkyZEq/W8nkLHyIORGFBgZpbW+U7N4F1eWWlptx2m35w/fXxzxh9R8SBWDRvnvbX18tXbqR1G+eNGDIkfh4cEiIOxHdGjZLcC94JdmKL/Zngi2A/yaxggi8YjgDjgo34YGOjcp07CK01gBllfD3BTmzNW7BAI88/X7ksffhw/AI6E2zE7vDqsznAGsh13BMDxhHxN8A9rho6aJAuufBCFRUWCuhJLPb4moYMHKiZ06ZpTFWVknl5+uzAAf3u5Ze1vKZGQE/wciTuqY1o3PK+l2fP1k3jx6tvaWm8a8SF0WTZ/CeeiA/+6gluuSGjf9i8i9htVVN5wQXqCVUjR2r44MGn/LnbpPyHkyapJ7jN3n3cSxlnz8uReGx0adsT3I/Mz7R8c2B5uXqCuw/nsLGweRnx9VdfrcEDBqi7bdmxI16QcTr/3rpV3S0v+gK588YbhbB5GbH7SdqPJk9Wd9u9d6/+sXr1KQd419XXa/GKFepuI4cO1Q1jxghh8/Y67KfV1fr7+++r9iwOEfuq3PEgM198UXuimKsnTownmDZt3655r76q9MGD6k7u8O1HpkwJ7rezOFUinU7Piu7rnpSHanfv1vQ5c+IRs7u5qNzJ9sd64JgQN3H2mwce0M/uuMPbk/5wdqKBZLbXiz0uimapZz74YDz5090fdndv3BMBF6ZSmnbXXfrJ7bcTMGLeT2veGN0zDqmo0CuLF+vNlSt13OiBWoloEsvtzvHg3Xfre9deG09qAY7Xl9Mnc/ev//30U/2zpkY1GzdqV3SJfaSx8ZRJqVzhnneX9Oqlgf37x8+jbxo3Lv6v2/AOOMFdTgcT8claM5l4RG5xZ/bm8PEmLmQ3cZUiXJyBizjIVQJucUQBq5zgCW6sAOOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB44gYMI6IAeOIGDCOiAHjiBgwjogB4/KTyaQSiYQA2OP6/R+ELaT/1j4cUAAAAABJRU5ErkJggg==",Wy=Y.section`
background: var(--C2-50p);

.access_section {
  color: var(--C4);
}

.main_container {
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  justify-content: space-between;
  margin: auto;
  width: 100%;
}
`,qy=Y.section`
align-items: center;
background: var(--C2);
border-radius: 1.6rem;
flex-shrink: 0;
padding: 1rem 1.3rem;
text-align: center;
max-width: 20%;
padding-bottom: 2rem;
margin-bottom: 6rem;
border-radius: 1.6rem;

img {
  width: 100%;
  margin-bottom:2rem;
  border-radius: 1rem;
}

/* Tablet */
@media screen and (max-width: 1127px) {
max-width: 35%;
margin: auto;
margin-bottom: 3rem;
}
/* Mobile */
@media screen and (max-width: 744px) {
max-width: 85%;
margin-bottom: 1.6rem;
}
`;function Ur({isMobile:e,img:t,text:n}){return u.jsxs(qy,{className:"pillar","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1500",children:[u.jsx("img",{alt:"tech-img",src:t}),u.jsx("p",{className:e?"text-sm":"text-md",children:n})]})}Ur.propTypes={isMobile:D.bool.isRequired,img:D.string.isRequired,text:D.string.isRequired};function Nm({isMobile:e}){return u.jsx(Wy,{children:u.jsxs("div",{className:"access_section section-size",children:[u.jsx("h4",{className:`${e?"text-2xl":"text-3xl"} section-main-title`,children:"O que terá acesso?"}),u.jsxs("div",{className:"main_container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1500",children:[u.jsx(Ur,{isMobile:e,img:Vy,text:"Aulas ao vivo toda terça: 8h e 19h30, e quinta: 8h e 9h, com correções e ajustes"}),u.jsx(Ur,{isMobile:e,img:Yy,text:`Aulas com diferentes níveis e durações para não se sentir\r
            desestimulado`}),u.jsx(Ur,{isMobile:e,img:Uy,text:"Módulos desenvolvidos para cultivar disciplina, constância e presença"}),u.jsx(Ur,{isMobile:e,img:Hy,text:"Estilos diferentes para variar sua prática: Hatha e Vinyasa"})]})]})})}Nm.propTypes={isMobile:D.bool.isRequired};const Qy=Y.section`
  color: var(--C4);

.main_container {
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
}
`,Gy=Y.div`
align-items: flex-start;
background: var(--C2-50p);
border-radius: var(--radius-radius-rounded);
box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
display: flex;
flex-direction: column;
flex-shrink: 0;
gap: 2.4rem;
justify-content: space-between;
padding: 1.6rem 0;
width: 100%;

.question {
  background: var(--C2);
  padding: 1rem 3.2rem;
  width: 100%;
}

.answer {
  padding: 0 3.2rem;
  width: 100%;
}
`;function Yr({question:e,answer:t,isMobile:n,isTablet:r}){const a=()=>n?"H6":r?"H5":"H4";return u.jsxs(Gy,{className:"section-size",children:[u.jsx("h4",{className:`${a()} question`,children:e}),u.jsx("p",{className:`${n?"text-md":"text-xl"} answer`,children:t})]})}Yr.propTypes={question:D.string.isRequired,answer:D.string.isRequired,isMobile:D.bool.isRequired,isTablet:D.bool.isRequired};function Im({isMobile:e,isTabletAndMobile:t,isTablet:n}){return u.jsxs(Qy,{className:"section-size",id:"doubts",children:[u.jsx("h4",{className:`${e?"text-2xl":"text-3xl"} section-main-title`,children:"Dúvidas comuns"}),u.jsxs("div",{className:"main_container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1500",children:[u.jsx(Yr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Tenho passe livre pelas aulas ao vivo?",answer:"Sim, nós temos 4 aulas ao vivo na semana você escolhe quando praticar. As turmas são nas terças: 8h e 19h30, e quintas: 8h e 9h."}),u.jsx(Yr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Posso pagar por boleto ou pix?",answer:"Sim, facilitamos todas as condições de pagamento para você."}),u.jsx(Yr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Como funciona o crédito recorrente?",answer:"O valor total do iClub Pro anual é R$2.160,00, porém esse valor não irá comprometer totalmente o limite do seu cartão de crédito e sim apenas os R$180,00 por mês"}),u.jsx(Yr,{isTabletAndMobile:t,isMobile:e,isTablet:n,question:"Nas aulas ao vivo o contato é direto com a Isabella Cayuela?",answer:"Sim, você terá contato direto comigo nas aulas ao vivo, onde conseguirei te corrigir sempre que necessário e guiar ao vivo técnicas exclusivas e mais avançadas."})]})]})}Im.propTypes={isMobile:D.bool.isRequired,isTabletAndMobile:D.bool.isRequired,isTablet:D.bool.isRequired};var ve={},wu={},Pa={},Ta={},Am="Expected a function",ld=0/0,Xy="[object Symbol]",Ky=/^\s+|\s+$/g,Zy=/^[-+]0x[0-9a-f]+$/i,Jy=/^0b[01]+$/i,e1=/^0o[0-7]+$/i,t1=parseInt,n1=typeof nt=="object"&&nt&&nt.Object===Object&&nt,r1=typeof self=="object"&&self&&self.Object===Object&&self,a1=n1||r1||Function("return this")(),i1=Object.prototype,o1=i1.toString,s1=Math.max,l1=Math.min,us=function(){return a1.Date.now()};function u1(e,t,n){var r,a,i,o,s,l,c=0,m=!1,p=!1,g=!0;if(typeof e!="function")throw new TypeError(Am);t=ud(t)||0,Ki(n)&&(m=!!n.leading,p="maxWait"in n,i=p?s1(ud(n.maxWait)||0,t):i,g="trailing"in n?!!n.trailing:g);function v(C){var E=r,b=a;return r=a=void 0,c=C,o=e.apply(b,E),o}function x(C){return c=C,s=setTimeout(f,t),m?v(C):o}function w(C){var E=C-l,b=C-c,j=t-E;return p?l1(j,i-b):j}function k(C){var E=C-l,b=C-c;return l===void 0||E>=t||E<0||p&&b>=i}function f(){var C=us();if(k(C))return d(C);s=setTimeout(f,w(C))}function d(C){return s=void 0,g&&r?v(C):(r=a=void 0,o)}function h(){s!==void 0&&clearTimeout(s),c=0,r=l=a=s=void 0}function y(){return s===void 0?o:d(us())}function S(){var C=us(),E=k(C);if(r=arguments,a=this,l=C,E){if(s===void 0)return x(l);if(p)return s=setTimeout(f,t),v(l)}return s===void 0&&(s=setTimeout(f,t)),o}return S.cancel=h,S.flush=y,S}function c1(e,t,n){var r=!0,a=!0;if(typeof e!="function")throw new TypeError(Am);return Ki(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),u1(e,t,{leading:r,maxWait:t,trailing:a})}function Ki(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function d1(e){return!!e&&typeof e=="object"}function f1(e){return typeof e=="symbol"||d1(e)&&o1.call(e)==Xy}function ud(e){if(typeof e=="number")return e;if(f1(e))return ld;if(Ki(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Ki(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(Ky,"");var n=Jy.test(e);return n||e1.test(e)?t1(e.slice(2),n?2:8):Zy.test(e)?ld:+e}var p1=c1,Oa={};Object.defineProperty(Oa,"__esModule",{value:!0});Oa.addPassiveEventListener=function(t,n,r){var a=function(){var i=!1;try{var o=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("test",null,o)}catch{}return i}();t.addEventListener(n,r,a?{passive:!0}:!1)};Oa.removePassiveEventListener=function(t,n,r){t.removeEventListener(n,r)};Object.defineProperty(Ta,"__esModule",{value:!0});var m1=p1,h1=v1(m1),g1=Oa;function v1(e){return e&&e.__esModule?e:{default:e}}var y1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:66;return(0,h1.default)(t,n)},fe={spyCallbacks:[],spySetState:[],scrollSpyContainers:[],mount:function(t,n){if(t){var r=y1(function(a){fe.scrollHandler(t)},n);fe.scrollSpyContainers.push(t),(0,g1.addPassiveEventListener)(t,"scroll",r)}},isMounted:function(t){return fe.scrollSpyContainers.indexOf(t)!==-1},currentPositionX:function(t){if(t===document){var n=window.pageYOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageXOffset:r?document.documentElement.scrollLeft:document.body.scrollLeft}else return t.scrollLeft},currentPositionY:function(t){if(t===document){var n=window.pageXOffset!==void 0,r=(document.compatMode||"")==="CSS1Compat";return n?window.pageYOffset:r?document.documentElement.scrollTop:document.body.scrollTop}else return t.scrollTop},scrollHandler:function(t){var n=fe.scrollSpyContainers[fe.scrollSpyContainers.indexOf(t)].spyCallbacks||[];n.forEach(function(r){return r(fe.currentPositionX(t),fe.currentPositionY(t))})},addStateHandler:function(t){fe.spySetState.push(t)},addSpyHandler:function(t,n){var r=fe.scrollSpyContainers[fe.scrollSpyContainers.indexOf(n)];r.spyCallbacks||(r.spyCallbacks=[]),r.spyCallbacks.push(t),t(fe.currentPositionX(n),fe.currentPositionY(n))},updateStates:function(){fe.spySetState.forEach(function(t){return t()})},unmount:function(t,n){fe.scrollSpyContainers.forEach(function(r){return r.spyCallbacks&&r.spyCallbacks.length&&r.spyCallbacks.indexOf(n)>-1&&r.spyCallbacks.splice(r.spyCallbacks.indexOf(n),1)}),fe.spySetState&&fe.spySetState.length&&fe.spySetState.indexOf(t)>-1&&fe.spySetState.splice(fe.spySetState.indexOf(t),1),document.removeEventListener("scroll",fe.scrollHandler)},update:function(){return fe.scrollSpyContainers.forEach(function(t){return fe.scrollHandler(t)})}};Ta.default=fe;var Pr={},Ra={};Object.defineProperty(Ra,"__esModule",{value:!0});var x1=function(t,n){var r=t.indexOf("#")===0?t.substring(1):t,a=r?"#"+r:"",i=window&&window.location,o=a?i.pathname+i.search+a:i.pathname+i.search;n?history.pushState(history.state,"",o):history.replaceState(history.state,"",o)},w1=function(){return window.location.hash.replace(/^#/,"")},S1=function(t){return function(n){return t.contains?t!=n&&t.contains(n):!!(t.compareDocumentPosition(n)&16)}},k1=function(t){return getComputedStyle(t).position!=="static"},cs=function(t,n){for(var r=t.offsetTop,a=t.offsetParent;a&&!n(a);)r+=a.offsetTop,a=a.offsetParent;return{offsetTop:r,offsetParent:a}},E1=function(t,n,r){if(r)return t===document?n.getBoundingClientRect().left+(window.scrollX||window.pageXOffset):getComputedStyle(t).position!=="static"?n.offsetLeft:n.offsetLeft-t.offsetLeft;if(t===document)return n.getBoundingClientRect().top+(window.scrollY||window.pageYOffset);if(k1(t)){if(n.offsetParent!==t){var a=function(m){return m===t||m===document},i=cs(n,a),o=i.offsetTop,s=i.offsetParent;if(s!==t)throw new Error("Seems containerElement is not an ancestor of the Element");return o}return n.offsetTop}if(n.offsetParent===t.offsetParent)return n.offsetTop-t.offsetTop;var l=function(m){return m===document};return cs(n,l).offsetTop-cs(t,l).offsetTop};Ra.default={updateHash:x1,getHash:w1,filterElementInContainer:S1,scrollOffset:E1};var Eo={},Su={};Object.defineProperty(Su,"__esModule",{value:!0});Su.default={defaultEasing:function(t){return t<.5?Math.pow(t*2,2)/2:1-Math.pow((1-t)*2,2)/2},linear:function(t){return t},easeInQuad:function(t){return t*t},easeOutQuad:function(t){return t*(2-t)},easeInOutQuad:function(t){return t<.5?2*t*t:-1+(4-2*t)*t},easeInCubic:function(t){return t*t*t},easeOutCubic:function(t){return--t*t*t+1},easeInOutCubic:function(t){return t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1},easeInQuart:function(t){return t*t*t*t},easeOutQuart:function(t){return 1- --t*t*t*t},easeInOutQuart:function(t){return t<.5?8*t*t*t*t:1-8*--t*t*t*t},easeInQuint:function(t){return t*t*t*t*t},easeOutQuint:function(t){return 1+--t*t*t*t*t},easeInOutQuint:function(t){return t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t}};var ku={};Object.defineProperty(ku,"__esModule",{value:!0});var C1=Oa,j1=["mousedown","mousewheel","touchmove","keydown"];ku.default={subscribe:function(t){return typeof document<"u"&&j1.forEach(function(n){return(0,C1.addPassiveEventListener)(document,n,t)})}};var Na={};Object.defineProperty(Na,"__esModule",{value:!0});var vl={registered:{},scrollEvent:{register:function(t,n){vl.registered[t]=n},remove:function(t){vl.registered[t]=null}}};Na.default=vl;Object.defineProperty(Eo,"__esModule",{value:!0});var b1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_1=Ra;Co(_1);var P1=Su,cd=Co(P1),T1=ku,O1=Co(T1),R1=Na,Pt=Co(R1);function Co(e){return e&&e.__esModule?e:{default:e}}var Lm=function(t){return cd.default[t.smooth]||cd.default.defaultEasing},N1=function(t){return typeof t=="function"?t:function(){return t}},I1=function(){if(typeof window<"u")return window.requestAnimationFrame||window.webkitRequestAnimationFrame},yl=function(){return I1()||function(e,t,n){window.setTimeout(e,n||1e3/60,new Date().getTime())}}(),zm=function(){return{currentPosition:0,startPosition:0,targetPosition:0,progress:0,duration:0,cancel:!1,target:null,containerElement:null,to:null,start:null,delta:null,percent:null,delayTimeout:null}},Mm=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollLeft;var r=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return r?window.pageXOffset:a?document.documentElement.scrollLeft:document.body.scrollLeft},Dm=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollTop;var r=window.pageXOffset!==void 0,a=(document.compatMode||"")==="CSS1Compat";return r?window.pageYOffset:a?document.documentElement.scrollTop:document.body.scrollTop},A1=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollWidth-n.offsetWidth;var r=document.body,a=document.documentElement;return Math.max(r.scrollWidth,r.offsetWidth,a.clientWidth,a.scrollWidth,a.offsetWidth)},L1=function(t){var n=t.data.containerElement;if(n&&n!==document&&n!==document.body)return n.scrollHeight-n.offsetHeight;var r=document.body,a=document.documentElement;return Math.max(r.scrollHeight,r.offsetHeight,a.clientHeight,a.scrollHeight,a.offsetHeight)},z1=function e(t,n,r){var a=n.data;if(!n.ignoreCancelEvents&&a.cancel){Pt.default.registered.end&&Pt.default.registered.end(a.to,a.target,a.currentPositionY);return}if(a.delta=Math.round(a.targetPosition-a.startPosition),a.start===null&&(a.start=r),a.progress=r-a.start,a.percent=a.progress>=a.duration?1:t(a.progress/a.duration),a.currentPosition=a.startPosition+Math.ceil(a.delta*a.percent),a.containerElement&&a.containerElement!==document&&a.containerElement!==document.body?n.horizontal?a.containerElement.scrollLeft=a.currentPosition:a.containerElement.scrollTop=a.currentPosition:n.horizontal?window.scrollTo(a.currentPosition,0):window.scrollTo(0,a.currentPosition),a.percent<1){var i=e.bind(null,t,n);yl.call(window,i);return}Pt.default.registered.end&&Pt.default.registered.end(a.to,a.target,a.currentPosition)},Eu=function(t){t.data.containerElement=t?t.containerId?document.getElementById(t.containerId):t.container&&t.container.nodeType?t.container:document:null},Ia=function(t,n,r,a){if(n.data=n.data||zm(),window.clearTimeout(n.data.delayTimeout),O1.default.subscribe(function(){n.data.cancel=!0}),Eu(n),n.data.start=null,n.data.cancel=!1,n.data.startPosition=n.horizontal?Mm(n):Dm(n),n.data.targetPosition=n.absolute?t:t+n.data.startPosition,n.data.startPosition===n.data.targetPosition){Pt.default.registered.end&&Pt.default.registered.end(n.data.to,n.data.target,n.data.currentPosition);return}n.data.delta=Math.round(n.data.targetPosition-n.data.startPosition),n.data.duration=N1(n.duration)(n.data.delta),n.data.duration=isNaN(parseFloat(n.data.duration))?1e3:parseFloat(n.data.duration),n.data.to=r,n.data.target=a;var i=Lm(n),o=z1.bind(null,i,n);if(n&&n.delay>0){n.data.delayTimeout=window.setTimeout(function(){Pt.default.registered.begin&&Pt.default.registered.begin(n.data.to,n.data.target),yl.call(window,o)},n.delay);return}Pt.default.registered.begin&&Pt.default.registered.begin(n.data.to,n.data.target),yl.call(window,o)},jo=function(t){return t=b1({},t),t.data=t.data||zm(),t.absolute=!0,t},M1=function(t){Ia(0,jo(t))},D1=function(t,n){Ia(t,jo(n))},F1=function(t){t=jo(t),Eu(t),Ia(t.horizontal?A1(t):L1(t),t)},B1=function(t,n){n=jo(n),Eu(n);var r=n.horizontal?Mm(n):Dm(n);Ia(t+r,n)};Eo.default={animateTopScroll:Ia,getAnimationType:Lm,scrollToTop:M1,scrollToBottom:F1,scrollTo:D1,scrollMore:B1};Object.defineProperty(Pr,"__esModule",{value:!0});var $1=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H1=Ra,U1=Cu(H1),Y1=Eo,V1=Cu(Y1),W1=Na,Ja=Cu(W1);function Cu(e){return e&&e.__esModule?e:{default:e}}var ei={},dd=void 0;Pr.default={unmount:function(){ei={}},register:function(t,n){ei[t]=n},unregister:function(t){delete ei[t]},get:function(t){return ei[t]||document.getElementById(t)||document.getElementsByName(t)[0]||document.getElementsByClassName(t)[0]},setActiveLink:function(t){return dd=t},getActiveLink:function(){return dd},scrollTo:function(t,n){var r=this.get(t);if(!r){console.warn("target Element not found");return}n=$1({},n,{absolute:!1});var a=n.containerId,i=n.container,o=void 0;a?o=document.getElementById(a):i&&i.nodeType?o=i:o=document,n.absolute=!0;var s=n.horizontal,l=U1.default.scrollOffset(o,r,s)+(n.offset||0);if(!n.smooth){Ja.default.registered.begin&&Ja.default.registered.begin(t,r),o===document?n.horizontal?window.scrollTo(l,0):window.scrollTo(0,l):o.scrollTop=l,Ja.default.registered.end&&Ja.default.registered.end(t,r);return}V1.default.animateTopScroll(l,n,t,r)}};var bo={};Object.defineProperty(bo,"__esModule",{value:!0});var q1=Ra,ds=Q1(q1);function Q1(e){return e&&e.__esModule?e:{default:e}}var G1={mountFlag:!1,initialized:!1,scroller:null,containers:{},mount:function(t){this.scroller=t,this.handleHashChange=this.handleHashChange.bind(this),window.addEventListener("hashchange",this.handleHashChange),this.initStateFromHash(),this.mountFlag=!0},mapContainer:function(t,n){this.containers[t]=n},isMounted:function(){return this.mountFlag},isInitialized:function(){return this.initialized},initStateFromHash:function(){var t=this,n=this.getHash();n?window.setTimeout(function(){t.scrollTo(n,!0),t.initialized=!0},10):this.initialized=!0},scrollTo:function(t,n){var r=this.scroller,a=r.get(t);if(a&&(n||t!==r.getActiveLink())){var i=this.containers[t]||document;r.scrollTo(t,{container:i})}},getHash:function(){return ds.default.getHash()},changeHash:function(t,n){this.isInitialized()&&ds.default.getHash()!==t&&ds.default.updateHash(t,n)},handleHashChange:function(){this.scrollTo(this.getHash())},unmount:function(){this.scroller=null,this.containers=null,window.removeEventListener("hashchange",this.handleHashChange)}};bo.default=G1;Object.defineProperty(Pa,"__esModule",{value:!0});var ti=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X1=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),K1=O,fd=Aa(K1),Z1=Ta,ni=Aa(Z1),J1=Pr,ex=Aa(J1),tx=ba,ce=Aa(tx),nx=bo,qt=Aa(nx);function Aa(e){return e&&e.__esModule?e:{default:e}}function rx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ax(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ix(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var pd={to:ce.default.string.isRequired,containerId:ce.default.string,container:ce.default.object,activeClass:ce.default.string,activeStyle:ce.default.object,spy:ce.default.bool,horizontal:ce.default.bool,smooth:ce.default.oneOfType([ce.default.bool,ce.default.string]),offset:ce.default.number,delay:ce.default.number,isDynamic:ce.default.bool,onClick:ce.default.func,duration:ce.default.oneOfType([ce.default.number,ce.default.func]),absolute:ce.default.bool,onSetActive:ce.default.func,onSetInactive:ce.default.func,ignoreCancelEvents:ce.default.bool,hashSpy:ce.default.bool,saveHashHistory:ce.default.bool,spyThrottle:ce.default.number};Pa.default=function(e,t){var n=t||ex.default,r=function(i){ix(o,i);function o(s){rx(this,o);var l=ax(this,(o.__proto__||Object.getPrototypeOf(o)).call(this,s));return a.call(l),l.state={active:!1},l}return X1(o,[{key:"getScrollSpyContainer",value:function(){var l=this.props.containerId,c=this.props.container;return l&&!c?document.getElementById(l):c&&c.nodeType?c:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var l=this.getScrollSpyContainer();ni.default.isMounted(l)||ni.default.mount(l,this.props.spyThrottle),this.props.hashSpy&&(qt.default.isMounted()||qt.default.mount(n),qt.default.mapContainer(this.props.to,l)),ni.default.addSpyHandler(this.spyHandler,l),this.setState({container:l})}}},{key:"componentWillUnmount",value:function(){ni.default.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var l="";this.state&&this.state.active?l=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():l=this.props.className;var c={};this.state&&this.state.active?c=ti({},this.props.style,this.props.activeStyle):c=ti({},this.props.style);var m=ti({},this.props);for(var p in pd)m.hasOwnProperty(p)&&delete m[p];return m.className=l,m.style=c,m.onClick=this.handleClick,fd.default.createElement(e,m)}}]),o}(fd.default.PureComponent),a=function(){var o=this;this.scrollTo=function(s,l){n.scrollTo(s,ti({},o.state,l))},this.handleClick=function(s){o.props.onClick&&o.props.onClick(s),s.stopPropagation&&s.stopPropagation(),s.preventDefault&&s.preventDefault(),o.scrollTo(o.props.to,o.props)},this.spyHandler=function(s,l){var c=o.getScrollSpyContainer();if(!(qt.default.isMounted()&&!qt.default.isInitialized())){var m=o.props.horizontal,p=o.props.to,g=null,v=void 0,x=void 0;if(m){var w=0,k=0,f=0;if(c.getBoundingClientRect){var d=c.getBoundingClientRect();f=d.left}if(!g||o.props.isDynamic){if(g=n.get(p),!g)return;var h=g.getBoundingClientRect();w=h.left-f+s,k=w+h.width}var y=s-o.props.offset;v=y>=Math.floor(w)&&y<Math.floor(k),x=y<Math.floor(w)||y>=Math.floor(k)}else{var S=0,C=0,E=0;if(c.getBoundingClientRect){var b=c.getBoundingClientRect();E=b.top}if(!g||o.props.isDynamic){if(g=n.get(p),!g)return;var j=g.getBoundingClientRect();S=j.top-E+l,C=S+j.height}var T=l-o.props.offset;v=T>=Math.floor(S)&&T<Math.floor(C),x=T<Math.floor(S)||T>=Math.floor(C)}var F=n.getActiveLink();if(x){if(p===F&&n.setActiveLink(void 0),o.props.hashSpy&&qt.default.getHash()===p){var B=o.props.saveHashHistory,L=B===void 0?!1:B;qt.default.changeHash("",L)}o.props.spy&&o.state.active&&(o.setState({active:!1}),o.props.onSetInactive&&o.props.onSetInactive(p,g))}if(v&&(F!==p||o.state.active===!1)){n.setActiveLink(p);var le=o.props.saveHashHistory,Pe=le===void 0?!1:le;o.props.hashSpy&&qt.default.changeHash(p,Pe),o.props.spy&&(o.setState({active:!0}),o.props.onSetActive&&o.props.onSetActive(p,g))}}}};return r.propTypes=pd,r.defaultProps={offset:0},r};Object.defineProperty(wu,"__esModule",{value:!0});var ox=O,md=Fm(ox),sx=Pa,lx=Fm(sx);function Fm(e){return e&&e.__esModule?e:{default:e}}function ux(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function hd(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function cx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var dx=function(e){cx(t,e);function t(){var n,r,a,i;ux(this,t);for(var o=arguments.length,s=Array(o),l=0;l<o;l++)s[l]=arguments[l];return i=(r=(a=hd(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(s))),a),a.render=function(){return md.default.createElement("a",a.props,a.props.children)},r),hd(a,i)}return t}(md.default.Component);wu.default=(0,lx.default)(dx);var ju={};Object.defineProperty(ju,"__esModule",{value:!0});var fx=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),px=O,gd=Bm(px),mx=Pa,hx=Bm(mx);function Bm(e){return e&&e.__esModule?e:{default:e}}function gx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vx(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function yx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var xx=function(e){yx(t,e);function t(){return gx(this,t),vx(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return fx(t,[{key:"render",value:function(){return gd.default.createElement("input",this.props,this.props.children)}}]),t}(gd.default.Component);ju.default=(0,hx.default)(xx);var bu={},_o={};Object.defineProperty(_o,"__esModule",{value:!0});var wx=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Sx=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),kx=O,vd=Po(kx),Ex=Gp;Po(Ex);var Cx=Pr,yd=Po(Cx),jx=ba,xd=Po(jx);function Po(e){return e&&e.__esModule?e:{default:e}}function bx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _x(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Px(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}_o.default=function(e){var t=function(n){Px(r,n);function r(a){bx(this,r);var i=_x(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,a));return i.childBindings={domNode:null},i}return Sx(r,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(i){this.props.name!==i.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;yd.default.unregister(this.props.name)}},{key:"registerElems",value:function(i){yd.default.register(i,this.childBindings.domNode)}},{key:"render",value:function(){return vd.default.createElement(e,wx({},this.props,{parentBindings:this.childBindings}))}}]),r}(vd.default.Component);return t.propTypes={name:xd.default.string,id:xd.default.string},t};Object.defineProperty(bu,"__esModule",{value:!0});var wd=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tx=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ox=O,Sd=_u(Ox),Rx=_o,Nx=_u(Rx),Ix=ba,kd=_u(Ix);function _u(e){return e&&e.__esModule?e:{default:e}}function Ax(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Lx(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function zx(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var $m=function(e){zx(t,e);function t(){return Ax(this,t),Lx(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return Tx(t,[{key:"render",value:function(){var r=this,a=wd({},this.props);return a.parentBindings&&delete a.parentBindings,Sd.default.createElement("div",wd({},a,{ref:function(o){r.props.parentBindings.domNode=o}}),this.props.children)}}]),t}(Sd.default.Component);$m.propTypes={name:kd.default.string,id:kd.default.string};bu.default=(0,Nx.default)($m);var fs=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ed=function(){function e(t,n){for(var r=0;r<n.length;r++){var a=n[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function Cd(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function jd(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function bd(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ri=O,Sn=Ta,ps=Pr,pe=ba,Qt=bo,_d={to:pe.string.isRequired,containerId:pe.string,container:pe.object,activeClass:pe.string,spy:pe.bool,smooth:pe.oneOfType([pe.bool,pe.string]),offset:pe.number,delay:pe.number,isDynamic:pe.bool,onClick:pe.func,duration:pe.oneOfType([pe.number,pe.func]),absolute:pe.bool,onSetActive:pe.func,onSetInactive:pe.func,ignoreCancelEvents:pe.bool,hashSpy:pe.bool,spyThrottle:pe.number},Mx={Scroll:function(t,n){console.warn("Helpers.Scroll is deprecated since v1.7.0");var r=n||ps,a=function(o){bd(s,o);function s(l){Cd(this,s);var c=jd(this,(s.__proto__||Object.getPrototypeOf(s)).call(this,l));return i.call(c),c.state={active:!1},c}return Ed(s,[{key:"getScrollSpyContainer",value:function(){var c=this.props.containerId,m=this.props.container;return c?document.getElementById(c):m&&m.nodeType?m:document}},{key:"componentDidMount",value:function(){if(this.props.spy||this.props.hashSpy){var c=this.getScrollSpyContainer();Sn.isMounted(c)||Sn.mount(c,this.props.spyThrottle),this.props.hashSpy&&(Qt.isMounted()||Qt.mount(r),Qt.mapContainer(this.props.to,c)),this.props.spy&&Sn.addStateHandler(this.stateHandler),Sn.addSpyHandler(this.spyHandler,c),this.setState({container:c})}}},{key:"componentWillUnmount",value:function(){Sn.unmount(this.stateHandler,this.spyHandler)}},{key:"render",value:function(){var c="";this.state&&this.state.active?c=((this.props.className||"")+" "+(this.props.activeClass||"active")).trim():c=this.props.className;var m=fs({},this.props);for(var p in _d)m.hasOwnProperty(p)&&delete m[p];return m.className=c,m.onClick=this.handleClick,ri.createElement(t,m)}}]),s}(ri.Component),i=function(){var s=this;this.scrollTo=function(l,c){r.scrollTo(l,fs({},s.state,c))},this.handleClick=function(l){s.props.onClick&&s.props.onClick(l),l.stopPropagation&&l.stopPropagation(),l.preventDefault&&l.preventDefault(),s.scrollTo(s.props.to,s.props)},this.stateHandler=function(){r.getActiveLink()!==s.props.to&&(s.state!==null&&s.state.active&&s.props.onSetInactive&&s.props.onSetInactive(),s.setState({active:!1}))},this.spyHandler=function(l){var c=s.getScrollSpyContainer();if(!(Qt.isMounted()&&!Qt.isInitialized())){var m=s.props.to,p=null,g=0,v=0,x=0;if(c.getBoundingClientRect){var w=c.getBoundingClientRect();x=w.top}if(!p||s.props.isDynamic){if(p=r.get(m),!p)return;var k=p.getBoundingClientRect();g=k.top-x+l,v=g+k.height}var f=l-s.props.offset,d=f>=Math.floor(g)&&f<Math.floor(v),h=f<Math.floor(g)||f>=Math.floor(v),y=r.getActiveLink();if(h)return m===y&&r.setActiveLink(void 0),s.props.hashSpy&&Qt.getHash()===m&&Qt.changeHash(),s.props.spy&&s.state.active&&(s.setState({active:!1}),s.props.onSetInactive&&s.props.onSetInactive()),Sn.updateStates();if(d&&y!==m)return r.setActiveLink(m),s.props.hashSpy&&Qt.changeHash(m),s.props.spy&&(s.setState({active:!0}),s.props.onSetActive&&s.props.onSetActive(m)),Sn.updateStates()}}};return a.propTypes=_d,a.defaultProps={offset:0},a},Element:function(t){console.warn("Helpers.Element is deprecated since v1.7.0");var n=function(r){bd(a,r);function a(i){Cd(this,a);var o=jd(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,i));return o.childBindings={domNode:null},o}return Ed(a,[{key:"componentDidMount",value:function(){if(typeof window>"u")return!1;this.registerElems(this.props.name)}},{key:"componentDidUpdate",value:function(o){this.props.name!==o.name&&this.registerElems(this.props.name)}},{key:"componentWillUnmount",value:function(){if(typeof window>"u")return!1;ps.unregister(this.props.name)}},{key:"registerElems",value:function(o){ps.register(o,this.childBindings.domNode)}},{key:"render",value:function(){return ri.createElement(t,fs({},this.props,{parentBindings:this.childBindings}))}}]),a}(ri.Component);return n.propTypes={name:pe.string,id:pe.string},n}},Dx=Mx;Object.defineProperty(ve,"__esModule",{value:!0});ve.Helpers=ve.ScrollElement=ve.ScrollLink=ve.animateScroll=ve.scrollSpy=ve.Events=ve.scroller=ve.Element=ve.Button=ke=ve.Link=void 0;var Fx=wu,Hm=Nt(Fx),Bx=ju,Um=Nt(Bx),$x=bu,Ym=Nt($x),Hx=Pr,Vm=Nt(Hx),Ux=Na,Wm=Nt(Ux),Yx=Ta,qm=Nt(Yx),Vx=Eo,Qm=Nt(Vx),Wx=Pa,Gm=Nt(Wx),qx=_o,Xm=Nt(qx),Qx=Dx,Km=Nt(Qx);function Nt(e){return e&&e.__esModule?e:{default:e}}var ke=ve.Link=Hm.default;ve.Button=Um.default;ve.Element=Ym.default;ve.scroller=Vm.default;ve.Events=Wm.default;ve.scrollSpy=qm.default;ve.animateScroll=Qm.default;ve.ScrollLink=Gm.default;ve.ScrollElement=Xm.default;ve.Helpers=Km.default;ve.default={Link:Hm.default,Button:Um.default,Element:Ym.default,scroller:Vm.default,Events:Wm.default,scrollSpy:qm.default,animateScroll:Qm.default,ScrollLink:Gm.default,ScrollElement:Xm.default,Helpers:Km.default};const Zm="/Yoga-LandingPage-React-Vite/assets/INSTAGRAM-e076bdd5.svg",Jm="/Yoga-LandingPage-React-Vite/assets/WHATSAPP-2c9f87ea.svg",Pu="/Yoga-LandingPage-React-Vite/assets/yoga_iclub-382290b3.svg",eh="/Yoga-LandingPage-React-Vite/assets/YOUTUBE-96640501.svg",Ue={spy:!0,smooth:"easeInOutQuart",duration:900,offset:-96,delay:300},Gx=Y.div`
background: var(--C2);
color: var(--C4);
height: var(--footer-height);
width: 100%;
.main_container {
  height: 100%;
  flex-direction: row;  
  align-items: center;
  padding: 0 1.5rem;
}
.scroll-main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 50%;
}
.link {
  height: 100%;
  align-items: center;
  display: flex;
  max-width: 45%;
}
.logo {
  width: 19.5rem;
  max-width: 100%;
}
.scroll-sub-container {
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
}

.social-links img{
  width: 5rem;
}

.scroll-sub-container > * {
  color: var(--C4);
}

@media screen and (max-width: 1127px) {
  .main_container {
  padding: 0 4.5rem;
  }
}

/* Mobile */
@media screen and (max-width: 800px) {  
  .main_container {
    justify-content: center;
  }

  .scroll-main-container {
    display: none;
  }

  .main_container {
    padding: 0;
  }

  .social-links {
    width: 48%;
  }

  .social-links img{
    width: 30%;
    max-height: 100%;
  }
}
`;function Xx(e){return u.jsx(Gx,{isMobile:e,children:u.jsxs("div",{className:"section-size main_container",children:[u.jsxs("div",{className:"scroll-main-container",children:[u.jsxs("div",{className:"scroll-sub-container",children:[u.jsx("button",{className:"text-md",type:"button",children:u.jsx(ke,{to:"start",...Ue,children:" início "})}),u.jsx("button",{className:"text-md",type:"button",children:u.jsx(ke,{to:"iclub",...Ue,children:" iclub "})})]}),u.jsxs("div",{className:"scroll-sub-container",children:[u.jsx("button",{className:"text-md",type:"button",children:u.jsx(ke,{to:"students",...Ue,children:" alunos "})}),u.jsx("button",{className:"text-md",type:"button",children:u.jsx(ke,{to:"prices",...Ue,children:" preços "})})]}),u.jsxs("div",{className:"scroll-sub-container",children:[u.jsx("button",{className:"text-md",type:"button",children:u.jsx(ke,{to:"doubts",...Ue,children:" dúvidas "})}),u.jsx("button",{className:"text-md",type:"button",children:u.jsx(ke,{to:"contact",...Ue,children:" contato "})})]})]}),u.jsxs("nav",{className:"social-links",children:[u.jsx("a",{href:"https://www.instagram.com/isabellacayuela/",target:"_blank",rel:"noopener noreferrer",children:u.jsx("img",{src:Zm,alt:"instagram"})}),u.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5531996793158",target:"_blank",rel:"noopener noreferrer",children:u.jsx("img",{src:Jm,alt:"whatsapp"})}),u.jsx("a",{href:"https://www.youtube.com/@isabellacayuelayoga",target:"_blank",rel:"noopener noreferrer",children:u.jsx("img",{src:eh,alt:"youtube"})})]}),u.jsx(ke,{className:"link",to:"prices",...Ue,children:u.jsx("img",{className:"logo",src:Pu,alt:"yoga-logo"})})]})})}const Kx=Y.header`
background: var(--C2);
height: 9.6rem;
width: 100vw;
position: sticky;
top: 0;
z-index: 1;
box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.15);

.link {
  height: 100%;
  align-items: center;
  display: flex;
}

.headerNav {
  flex-direction: row;
  height: 100%;
  padding: 0 1.5rem;
}//1.5 de padding para não ficar colado no scroll da tela

.headerNav img {
  max-width: 19.5rem;
}

.button_container {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: var(--spacing-xs);
  height: 100%;
  padding: var(--spacing-spacing-none);
}

.button {
  color: var(--C4);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
}

.button:active {
  scale: 0.98;
}

/* Mobile */
@media screen and (max-width: 744px) {
  .button {
    display: none;
  }

  .headerNav{
    justify-content: center;
  }
}
`;function th({isTablet:e}){const t=()=>e?"text-lg button":"text-xl button";return u.jsx(Kx,{children:u.jsxs("nav",{className:"section-size headerNav",children:[u.jsx("button",{className:t(),type:"button",children:u.jsx(ke,{to:"start",...Ue,children:" início "})}),u.jsx("button",{className:t(),type:"button",children:u.jsx(ke,{to:"iclub",...Ue,children:" yoga iclub "})}),u.jsx("button",{className:t(),type:"button",children:u.jsx(ke,{to:"students",...Ue,children:" alunos "})}),u.jsx(ke,{className:"link",to:"prices",...Ue,children:u.jsx("img",{alt:"logo",src:Pu})}),u.jsx("button",{className:t(),type:"button",children:u.jsx(ke,{to:"prices",...Ue,children:" preços "})}),u.jsx("button",{className:t(),type:"button",children:u.jsx(ke,{to:"doubts",...Ue,children:" dúvidas "})}),u.jsx("button",{className:t(),type:"button",children:u.jsx(ke,{to:"contact",...Ue,children:" contato "})})]})})}th.propTypes={isTablet:D.bool.isRequired};const Zx="/Yoga-LandingPage-React-Vite/assets/hero-image-1f05b285.png",Jx=Y.section`
  flex-direction: row;
  padding-bottom : 0;
`,ew=Y.div`
align-items: center;
color: var(--C4);
display: flex;
flex-direction: column;
flex-shrink: 0;
gap: var(--spacing-md);
justify-content: center;
padding: var(--spacing-none);
text-align: center;
width: 50%;

.main_title {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin: auto;
  max-width: 90%;
  padding-bottom: 0.8rem;
}

.main_text {
  padding-bottom: 0.8rem;
  margin: auto;
  max-width: 80%;
}

.button_container {
  align-items: center;
  display: flex;
  justify-content:center;
  flex-direction: column;
  flex-shrink: 0;
  gap: 1rem;
}

.button {
  background: var(--C4);
  border: 0.3rem solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  font-size: 1.8rem;
  font-weight: 950;
}

.button:hover {
  background-color: inherit;
  border: 0.3rem solid var(--C3);
  color: var(--C4);
}

.span {
  color: var(--C3);
  text-align: center;
  font-weight: 700;
}

@media screen and (max-width: 950px) {
  width: 100%;

  .main_title {
  max-width: 80%;
  }

  .main_text {
  max-width: 50%;
  }
}

@media screen and (max-width: 744px) {
  .main_text {
  max-width: 100%;
  }
  .main_title {
  max-width: 100%;
  }
}
`,tw=Y.div`
display: flex;
flex-shrink: 0;
height: 65vh;
justify-content: flex-end;
padding-left: 7.5rem;

.outer_element {
  background: var(--C1);
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.3rem 33.3rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  position: relative;
  width: 38.5rem;
  height: 100%;
}

.bela_img {
  bottom: 0;
  height: 100%;
  position: absolute;
  right: 0;
}

@media screen and (max-width: 950px) {
  padding-left: 0;
  width: 100%;
  padding-bottom: 3rem;

  .bela_img {
    height: 100%;
  }

  .outer_element {
    max-width: 95%;
  }

  width: 100%;
  justify-content: center;
}
`;function Pd(){return u.jsx(tw,{className:"img_container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:u.jsx("div",{className:"outer_element",children:u.jsx("img",{className:"bela_img",src:Zx,alt:"bela-img"})})})}function xl({isTabletAndMobile:e,isMobile:t,isTablet:n}){const r=()=>e?"main_text text-xs":"main_text text-sm",a=()=>n?"H4":t?"H5":"H2";return u.jsxs(ew,{className:"hero_text","data-aos":"fade-up","data-aos-easing":"ease-in-out","data-aos-duration":"1500",children:[u.jsx("h2",{className:`${a()} main_title`,children:"A plataforma de yoga mais prática, didática e direta que você já acessou!"}),u.jsxs("div",{children:[u.jsx("p",{className:r(),children:"Quer começar mas não sabe por onde? Já pratica e quer evolui? O Yoga iClub é para todos!"}),u.jsx("p",{className:r(),children:"Aqui você não precisa ter flexibilidade, força, peso ou idade ideais. Vamos praticar técnicas milenares e alcançar os benefícios juntos!"}),u.jsx("p",{className:r(),children:"Yoga iClub é para todos aqueles que acreditam que é possível ter uma vida equilibrada! Meu objetivo é te ajudar a encontrar a prática e rotina ideais pra você!"})]}),u.jsxs("div",{className:"button_container",children:[u.jsx(ke,{className:"link",to:"prices",...Ue,children:u.jsx("button",{className:"Button button",type:"button",children:"Quero começar!"})}),u.jsx("span",{className:"text-md span",children:"+ de 500 vidas impactadas"})]})]})}xl.propTypes={isTabletAndMobile:D.bool.isRequired,isTablet:D.bool.isRequired,isMobile:D.bool.isRequired};function nh({isTabletAndMobile:e,isMobile:t,isTablet:n}){const r=ur.useMediaQuery({query:"(max-width: 950px)"});return u.jsx(Jx,{className:"section-size",id:"start",children:r?u.jsxs(u.Fragment,{children:[u.jsx(Pd,{}),u.jsx(xl,{isTabletAndMobile:e,isMobile:t,isTablet:n})]}):u.jsxs(u.Fragment,{children:[u.jsx(xl,{isTabletAndMobile:e,isMobile:t,isTablet:n}),u.jsx(Pd,{})]})})}nh.propTypes={isTabletAndMobile:D.bool.isRequired,isTablet:D.bool.isRequired,isMobile:D.bool.isRequired};const Td="/Yoga-LandingPage-React-Vite/assets/access_img-422fe4ba.png",nw=Y.section`
color: var(--C4);

.main-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 3rem;
  width: 100%;
}

.sub-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 3rem;
  max-width: 30%;
}

.img {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.3rem 33.3rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  max-width: 100%;
}

/* Tablet */
@media screen and (max-width: 1000px) {
  .main-container {
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  }

  .sub-container {
    max-width: 100%;
  }
}
`,rw=Y.div`
display: flex;
flex-direction: column;
align-items: center;
gap: var(--spacing-md);
flex-shrink: 0;
text-align: center;
width: 100%;

.sub-title {
  background: var(--C2);
  border-radius: var(--radius-radius-full);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  padding: 0.5em 0.5em;
}

@media screen and (max-width: 1000px) {
  max-width: 100%;
}
`;function At({isTabletAndMobile:e,title:t,text:n}){return u.jsxs(rw,{children:[u.jsx("h4",{className:`${e?"H5":"H6"} sub-title`,children:t}),u.jsx("p",{className:e?"text-sm":"text-md",children:n})]})}At.propTypes={title:D.string.isRequired,text:D.string.isRequired,isTabletAndMobile:D.bool.isRequired};function rh({isMobile:e,isTabletAndMobile:t}){const n=ur.useMediaQuery({query:"(max-width: 1000px)"});return u.jsxs(nw,{className:"section-size",children:[u.jsx("h4",{className:`section-main-title ${e?"text-2xl":"text-3xl"}`,children:"Encontre aulas para o seu momento"}),u.jsx("div",{className:"main-container",children:n?u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"sub-container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:u.jsx("img",{className:"img",src:Td,alt:"girl-yoga"})}),u.jsxs("div",{className:"sub-container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:[u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Para quem nunca praticou",text:"Nunca teve contato com a prática e se sente insegura se está fazendo certo ou errado."}),u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Iniciantes",text:"Praticou algumas vezes mas nunca conseguiu dar continuidade."})]}),u.jsxs("div",{className:"sub-container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:[u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Intermediários",text:"Já domina as técnicas mas quer avançar ainda mais na sua prática pessoal."}),u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Avançados",text:"Praticante há mais de 5 anos mas sente falta de ser guiado em sua prática pessoal."})]})]}):u.jsxs("div",{className:"main-container",children:[u.jsxs("div",{className:"sub-container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:[u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Para quem nunca praticou",text:"Nunca teve contato com a prática e se sente insegura se está fazendo certo ou errado."}),u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Iniciantes",text:"Praticou algumas vezes mas nunca conseguiu dar continuidade."})]}),u.jsx("div",{className:"sub-container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:u.jsx("img",{className:"img",src:Td,alt:"girl-yoga"})}),u.jsxs("div",{className:"sub-container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:[u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Intermediários",text:"Já domina as técnicas mas quer avançar ainda mais na sua prática pessoal."}),u.jsx(At,{isMobile:e,isTabletAndMobile:t,title:"Avançados",text:"Praticante há mais de 5 anos mas sente falta de ser guiado em sua prática pessoal."})]})]})})]})}rh.propTypes={isMobile:D.bool.isRequired,isTabletAndMobile:D.bool.isRequired};const aw="/Yoga-LandingPage-React-Vite/assets/body-57ecc486.png",iw="/Yoga-LandingPage-React-Vite/assets/mind-56b48d04.png",ow="/Yoga-LandingPage-React-Vite/assets/soul-fe5d1558.png",sw=Y.section`
color: var(--C4);
width: 100%;


.pillars_container {
  display: flex;
  flex-shrink: 0;
  align-items: flex-start;
  padding-right: 0;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;

}

@media screen and (max-width: 1127px) {
  .pillars_container {
    justify-content: space-around;
    gap: 3rem;
  }
}
`,lw=Y.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
gap: 1.6rem;
width: 28rem;

p{
font-size: 1.6rem
}

.pillar_img {
  border-bottom: 1.6rem solid var(--C2);
  border-radius: 33.7rem 33.7rem 0 0;
  border-right: 1.6rem solid var(--C2);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  width: 100%;
  margin: auto;
  height: 36rem;

}
//altura da imagem nao funfa body um pouco menor que as outras
`;function ki({isTabletAndMobile:e,img:t,text:n,title:r}){return u.jsxs(lw,{className:"pillar","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1500",children:[u.jsx("img",{alt:"yoga-img",className:"pillar_img",src:t}),u.jsx("h4",{className:"H4",children:r}),u.jsx("p",{className:e?"text-sm":"text-md",children:n})]})}ki.propTypes={isTabletAndMobile:D.bool.isRequired,img:D.string.isRequired,text:D.string.isRequired,title:D.string.isRequired};function ah({isMobile:e,isTabletAndMobile:t}){return u.jsxs(sw,{className:"section-size",isMobile:e,id:"iclub",children:[u.jsx("h3",{className:`section-main-title ${e?"text-2xl":"text-3xl"}`,children:"Como funciona o Yoga iClub?"}),u.jsxs("div",{className:"pillars_container ",children:[u.jsx(ki,{isTabletAndMobile:t,img:aw,title:"body",text:`Práticas de yoga desenvolvidas para construir consciência do corpo,\r
            da respiração, força, flexibilidade, equilíbrio e bem estar com\r
            ásanas e pránayamas`}),u.jsx(ki,{isTabletAndMobile:t,img:iw,title:"mind",text:`Meditações guiadas elaboradas para te tornar mais consciente de seus\r
          pensamentos, desenvolvendo maior inteligência e gestão emocional`}),u.jsx(ki,{isTabletAndMobile:t,img:ow,title:"soul",text:`Yoga é ferramenta para desenvolvimento completo do ser, é elevação\r
          espiritual. Aulas teóricas que vão te convidar a um mergulho ainda\r
          mais profundo.`})]})]})}ah.propTypes={isMobile:D.bool.isRequired,isTabletAndMobile:D.bool.isRequired};function Cn({title:e,subTitle:t,price:n,list:r,link:a,isPremium:i,isTabletAndMobile:o,isMobile:s,isTablet:l}){const c=()=>i&&!o?"0":!i&&!o?"500":"0",m=()=>s?i?"text-xl":"text-2xl":i?"text-xl":"text-3xl";return u.jsxs("div",{"data-aos":"fade-up","data-aos-easing":"ease-in-out","data-aos-delay":c(),"data-aos-duration":"1500",className:`${i?"premium":"notPremium"} card_container`,children:[u.jsxs("div",{children:[u.jsxs("div",{className:"title_container",children:[u.jsx("h1",{className:`${s?"H2":"H1"} price-title`,children:e}),u.jsx("h4",{className:`${m()} price-sub-title`,children:t})]}),u.jsx("h4",{className:"price",children:n}),u.jsx("ul",{className:"text-md list",children:r.map((p,g)=>u.jsx("li",{children:p},`${p} ${g}`))})]}),u.jsx("button",{className:"Button button ",type:"button",children:u.jsx("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:"quero começar"})})]})}Cn.propTypes={title:D.string.isRequired,subTitle:D.string.isRequired,price:D.string.isRequired,list:D.arrayOf(D.string).isRequired,link:D.string.isRequired,isPremium:D.bool.isRequired,isMobile:D.bool.isRequired,isTabletAndMobile:D.bool.isRequired,isTablet:D.bool.isRequired};const uw=Y.section`
background: var(--C2-50p);

.prices_section {
  color: var(--C4);
  margin: auto;
}

.main_container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  gap: 3rem;
}

.card_container {
  border-radius: 2.5rem;
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 34rem;
}

.premium {
  background: var(--C4);
  border-radius: 2.5rem;
  box-shadow: 4px 4px 50px 0 var(--C4);
  color: var(--C1);
}

.notPremium {
  background: var(--C2);
}

.title_container {
  align-items: flex-end;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1.6rem;
}

.title_container h4 {
  padding-bottom: 0.7rem;
}

.price {
  align-items: center;
  background: var(--c-3, #8ca09a);
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  display: flex;
  font-family: syne , ivy , sans-serif;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 600;
  justify-content: center;
  text-align: center;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.6rem;
}

.button {
  background: var(--C4);
  border: 3px solid transparent;
  border-radius: var(--radius-radius-full);
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  margin: 4rem 3rem;
}

.button:hover {
  background-color: inherit;
  border: 3px solid var(--C3);
  color: var(--C4);
}

.premium .button {
  background: var(--C1);
  color: var(--C4);
}

.premium .button:hover {
  background: var(--C4);
  color: var(--C1);
}

@media screen and (max-width: 1127px) {
  .notPremium{
    height: 100%;
  }

  .main_container {
    justify-content: space-around;
    align-items: center;
  }

  .premium {
    max-width: 45rem;
  }

  .premium .list {
    gap: 1.8rem;
  }

  .notPremium .list {
    gap: 0.2rem;
  }
}

@media screen and (max-width: 850px) {
  .premium {
    max-width: 50%;
    width: 50%; 
  }

  .notPremium{
    max-width: 45%;
    width: 45%;
  }
}
@media screen and (max-width: 700px) {
  .premium {
    max-width: 100%;
    width: 100%; 
  }

  .notPremium{
    max-width: 100%;
    width: 100%;
  }
}

@media screen and (max-width: 420px) {
  .premium .price-title {
    font-size: 3.8rem;
  }
}

@media screen and (max-width: 380px) {
  .premium .price-title {
    font-size: 3.2rem;
  }
}

@media screen and (max-width: 350px) {
  .premium .price-title {
    font-size: 2.8rem;
  }

  .premium .price-sub-title {
    font-size: 2rem;
    padding-bottom: 0.2rem;
  }
}
`;function ih({isTabletAndMobile:e,isMobile:t}){return u.jsx(uw,{id:"prices",children:u.jsxs("div",{className:"prices_section section-size",children:[u.jsx("h4",{className:`${t?"text-2xl":"text-3xl"} section-main-title`,children:"Planos e preços:"}),u.jsx("div",{className:"main_container",children:e?u.jsxs(u.Fragment,{children:[u.jsx(Cn,{isPremium:!0,isMobile:t,isTabletAndMobile:e,title:"iClub Pro",subTitle:"(anual)",price:"R$ 180,00/mês",link:"https://pay.hotmart.com/J71174272X?off=md84l2lk",list:["Acesso as aulas AO VIVO 2x por semana","Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e   lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento recorrente, 12x de R$180 (não compromete o limite do cartão)"]}),u.jsx(Cn,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"anual",price:"R$ 39,90/mês",link:"https://pay.hotmart.com/J71174272X?off=sghdkt84",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Acesso a bônus exclusivos da comunidade","Pagamento parcelado, até 12x de R$39,90"]}),u.jsx(Cn,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"mensal",price:"R$ 69,90/mês",link:"https://pay.hotmart.com/J71174272X?off=4o7gr397",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento mensal"]})]}):u.jsxs(u.Fragment,{children:[u.jsx(Cn,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"anual",price:"R$ 39,90/mês",link:"https://pay.hotmart.com/J71174272X?off=sghdkt84",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Acesso a bônus exclusivos da comunidade","Pagamento parcelado, até 12x de R$39,90"]}),u.jsx(Cn,{isPremium:!0,isMobile:t,isTabletAndMobile:e,title:"iClub Pro",subTitle:"(anual)",price:"R$ 180,00/mês",link:"https://pay.hotmart.com/J71174272X?off=md84l2lk",list:["Acesso as aulas AO VIVO 2x por semana","Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e   lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento recorrente, 12x de R$180 (não compromete o limite do cartão)"]}),u.jsx(Cn,{isPremium:!1,isMobile:t,isTabletAndMobile:e,title:"iClub",subTitle:"mensal",price:"R$ 69,90/mês",link:"https://pay.hotmart.com/J71174272X?off=4o7gr397",list:["Acesso a plataforma com aulas gravadas","Temas novos todos os meses","Aulas de Hatha e Vinyasa","Aulas práticas e teóricas","Aulas didáticas para avançar e lapidar sua prática","Acesso a bônus exclusivos da comunidade","Pagamento mensal"]})]})})]})})}ih.propTypes={isTabletAndMobile:D.bool.isRequired,isMobile:D.bool.isRequired};const cw="Você perde a cabeça com mais frequência do que gostaria?",dw="Precisa de uma mente mais serena para ter mais organização e disciplina na sua vida?",fw="Quer ter um corpo mais forte e flexível?",pw="Quer ter mais equilíbrio                                        e inteligência emocional?",mw="Sente que precisa de hábitos que tragam mais leveza e felicidade para seus dias?",hw="Gostaria de se sentir mais disposto(a) e com mais energia?",Od=[cw,dw,fw,pw,mw,hw],gw=Y.section`
flex-shrink: 0;
margin-top: ${e=>e.ismobile?"3rem":"5rem"};
position: relative;
text-align: center;
height: 15rem;

.blur {
  background: var(--C2);
  border-radius: 50%;
  content: "";
  filter: blur(27.5px);
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
}

.question_text {
  align-items: center;
  color: rgba(18, 57, 57, 0.8);
  display: flex;
  flex-shrink: 0;
  text-align: center;
  justify-content: center;
  margin: auto;
  width: ${e=>e.istabletandmobile?"100%":"80%"};
  height: 100%;
  opacity: 0;
  transition: all 0.5s ease-in-out;
}

.translate {
  animation: slideIn 0.5s ease-in-out;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(50%);
  }
  90% {
    opacity: 1;

  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.visible {
  opacity: 1;
  transition: all 0.5s ease-in-out;
}

.invisible {
  opacity: 0;
  transition: all 0.5s ease-in-out;
}
`;function oh({isMobile:e,isTabletAndMobile:t}){const[n,r]=O.useState(0),[a,i]=O.useState(!1),[o,s]=O.useState(!0);return O.useEffect(()=>{const l=setInterval(()=>{s(!1),setTimeout(()=>{r(c=>(c+1)%Od.length),s(!0),i(!0)},500),setTimeout(()=>{i(!1)},1e3)},5e3);return()=>clearInterval(l)},[]),u.jsxs(gw,{className:"section-size",ismobile:e,istabletandmobile:t,"data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1500",children:[u.jsx("div",{className:"blur"}),u.jsx("p",{className:`${e?"H5":"H3"} ${a?"translate":""} ${o?"visible":"invisible"} question_text`,onAnimationEnd:()=>i(!1),children:Od[n]})]})}oh.propTypes={isMobile:D.bool.isRequired,isTabletAndMobile:D.bool.isRequired};const Rd="/Yoga-LandingPage-React-Vite/assets/afterIcon-3bb5dc79.svg",Nd="/Yoga-LandingPage-React-Vite/assets/prevIcon-ba1b1e34.svg",vw="/Yoga-LandingPage-React-Vite/assets/client1-e23fc2ee.png",yw="/Yoga-LandingPage-React-Vite/assets/client2-9f16e6ae.png",xw="/Yoga-LandingPage-React-Vite/assets/client3-9321193c.png",ww={img:vw,name:"Marina Lavalle",review:["Comecei a fazer Yoga na pandemia e posso dizer que foi a melhor escolha que fiz. O Yoga me ajuda a estar mais presente no agora e assim acalmar a ansiedade do dia a dia. 🧘🏼‍♀️","As práticas me ensinam sobre o tempo de cada um, sobre apreciar a caminhada e não tentar correr pro final. Mas o que eu mais gosto é aproveitar essa conexão com meu corpo, conhecendo meus limites e me superando a cada dia. Posso dizer com tranquilidade que hoje estou o mais flexível de toda a vida e para uma pessoa toda encurtada isso é um grande feito 😅","Sem contar que a Bella é a melhor prof de todas né. Eu amo que além da parte prática, ela também nos ensina sobre a teoria do Yoga durante as meditações e os pranayamas. E a cada vídeo postado eu fico admirada com as habilidades dela o que me incentiva a continuar praticando pois sei que um dia eu também consigo chegar lá 😍"]},Sw={img:yw,name:"Dani Morais",review:["A aula online da Bella é tudo pra mim!","Com a chegada da pandemia a prática de Yoga online me fez conhecer meus limites físicos e mentais, além de me desafiar sempre, isso é algo que eu gosto!","São dadas aulas de intensidades variadas a cada semana e a Bella está sempre disposta em nos ajudas quando surgem dúvidas! E notável o quanto evoluímos com a prática online!"]},kw={img:xw,name:"Luisa Kfouri",review:["Eu sempre pensei no yoga como uma forma de introduzir um exercício leve na minha rotina e tentar levar uma vida mais equilibrada.","Quando comecei a praticar com a Isa descobri que poderia ser muito mais do que isso, muito por causa da própria Isa, que além de ser uma professora maravilhosa, é uma pessoa incrível e se tornou uma amiga querida.","Hoje posso dizer que são momentos de exercitar o corpo, acalmar a mente, praticar a gratidão e o autoconhecimento."]},Mr=[ww,Sw,kw],Ew="/Yoga-LandingPage-React-Vite/assets/practiceYoga-9012ce1c.png",Cw=Y.section`
color: var(--C4);
height: 100%;
margin: auto;
padding-top: 6rem;

h4 {
  text-align: left;
  align-items: flex-start;
}

.title {
  color: var(--C4);
  margin: auto;
  margin-bottom: 3.7rem;
  width: 112rem;
}

.main_container {
  align-items: center;
  background: linear-gradient(0deg,
  rgba(201, 211, 208, 0.5) 0%,
  rgba(201, 211, 208, 0.5) 100%),
  lightgray 50% / cover no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url(${Ew});
  display: flex;
  padding: 3rem;
  justify-content: space-around;
  width: 100vw;  
  box-shadow: 0px 0px 4px 0 rgba(0, 0, 0, 0.15);
}

.button {
  background-color: var(--C4);
  border-radius: 100%;
  flex-shrink: 0;
  height: ${e=>e.isTabletAndMobile?"4.6rem":"6.4rem"};
  opacity: 0.7;
  position: relative;
  width: ${e=>e.isTabletAndMobile?"4.6rem":"6.4rem"};
}

.button:hover {
  opacity: 0.8;
  box-shadow: 0px 0px 4px 0 rgba(0, 0, 0, 0.3);
}

.button:active {
  scale: 0.98;
}

.arrow_icon {
  position: absolute;
  right: 50%;
  top: 50%;
  transform: translate(50%, -50%);
}

.text_container {
  align-items: center;
  background: rgba(239, 239, 239, 0.85);
  border-radius: var(--radius-radius-rounded);
  display: flex;
  padding: 0.5rem;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: space-evenly;
  max-width: ${e=>e.isTabletAndMobile?"85%":"55%"};
  transition: all 0.4s ease-in-out;
  height: 52rem;
}

.review {
  background: rgba(201, 211, 208, 0.25);
  border-radius: var(--radius-radius-rounded);
  box-shadow: 4px 4px 4px 0 rgba(0, 0, 0, 0.25);
  flex-shrink: 0;
  min-height: 28.8rem;
  padding: 1rem 1.8rem;
  text-align: justify;
  display: flex;
  margin: 1rem;
  flex-direction: column;
  justify-content: center;
}

.review p {
  padding-bottom: 1em;
}

.img-container {
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.reviewer-img {
  border: 2px solid var(--C3);
  border-radius: var(--radius-radius-full);
  box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
  height: 8rem;
  width: 8rem;
}
`;function sh({isTabletAndMobile:e,isMobile:t}){const[n,r]=O.useState(0),a=O.useRef(),i=async()=>{a.current.className=" invisible text_container"},o=async()=>{a.current.className=" visible text_container"},s=async()=>{await i(),setTimeout(async()=>{n>0?r(n-1):r(Mr.length-1)},350),setTimeout(async()=>{await o()},400)},l=async()=>{await i(),setTimeout(async()=>{n<Mr.length-1?r(n+1):r(0)},350),setTimeout(async()=>{await o()},400)};return u.jsxs(Cw,{isTabletAndMobile:e,id:"students",children:[u.jsx("h4",{className:`section-size section-main-title ${t?"text-2xl":"text-3xl"}`,children:"O que o alunos estão dizendo:"}),u.jsxs("div",{className:"main_container","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1500",children:[!e&&u.jsx("button",{className:"button",onClick:s,type:"button",children:u.jsx("img",{className:"arrow_icon",src:Nd,alt:"arow"})}),u.jsxs("div",{className:"text_container",ref:a,children:[u.jsxs("div",{className:"img-container",children:[e&&u.jsx("button",{className:"button",onClick:s,type:"button",children:u.jsx("img",{className:"arrow_icon",src:Nd,alt:"arow"})}),u.jsx("img",{className:"reviewer-img",src:Mr[n].img,alt:"avatar"}),e&&u.jsx("button",{className:"button",onClick:l,type:"button",children:u.jsx("img",{className:"arrow_icon",src:Rd,alt:"avatar"})})]}),u.jsx("div",{className:"text-xs review",children:Mr[n].review.map(c=>u.jsx("p",{children:c},c))}),u.jsx("span",{className:"text-md",children:`- ${Mr[n].name}`})]}),!e&&u.jsx("button",{className:"button",onClick:l,type:"button",children:u.jsx("img",{className:"arrow_icon",src:Rd,alt:"avatar"})})]})]})}sh.propTypes={isTabletAndMobile:D.bool.isRequired,isMobile:D.bool.isRequired};const jw="/Yoga-LandingPage-React-Vite/assets/seal-16671af6.svg",bw=Y.div`
  color: var(--C4);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  display: flex;
  width: 100%;
  gap: 3.2rem;
  align-items: center;
  padding-bottom: 6rem;
  position: relative;


  .blur {
  background: var(--C2);
  border-radius: 60%;
  content: "";
  filter: blur(2.4rem);
  height: 100%;
  width: 70%;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  top: 0;
  z-index: -1;
}
  img {
    width: 19rem
  }

  p {
    max-width: 50rem;
    text-align: justify;
  }

// Tablet
@media screen and (max-width: 1127px) {
  .blur {
    width: 100%;
  }

  img {
    max-width: 50%;
  }

  p {
    max-width: 42rem;
  }
}

//Mobile
@media screen and (max-width: 744px) {
    p { 
      max-width: 100%;
    }
}
`;function lh({isMobile:e}){return u.jsxs(bw,{isMobile:e,className:"section-size","data-aos":"fade","data-aos-easing":"linear","data-aos-duration":"1800",children:[u.jsx("div",{className:"blur"}),u.jsx("img",{src:jw,alt:"seal"}),u.jsx("p",{className:e?"text-sm":"text-md",children:"Nos do Yoga iClub criamos o 15payback, que da a você 15 dias para solicitar seu reembolso sem questionamento ou burocracia alguma caso não esteja satisfeito com o produto."})]})}lh.propTypes={isMobile:D.bool.isRequired};function _w(){const e=ur.useMediaQuery({query:"(max-width: 1127px)"}),t=ur.useMediaQuery({query:"(max-width: 744px)"}),n=ur.useMediaQuery({minWidth:745,maxWidth:1127}),r={isTabletAndMobile:e,isMobile:t,isTablet:n};return u.jsxs(u.Fragment,{children:[u.jsx(th,{...r}),u.jsx(nh,{...r}),u.jsx(oh,{...r}),u.jsx(ah,{...r}),u.jsx(Nm,{...r}),u.jsx(rh,{...r}),!t&&u.jsx(sh,{...r}),u.jsx(ih,{...r}),u.jsx(Im,{...r}),u.jsx(lh,{...r}),u.jsx(Rm,{...r}),u.jsx(Xx,{...r})]})}const Pw=Y.header`
width: calc(100vw -1rem);
padding-top: 1.6rem;
padding-bottom: 1.6rem;
position: sticky;
top: 0;
z-index: 100;
display: flex;
align-items: center;
justify-content: space-between;
padding-left: 7.6rem;
padding-right: 7.6rem;
background: var(--C2);
.logo-header-home {
  width: 141.882px;
  height: 3.6rem;
}
.link-header {
  color: var(--C4, #123939);
  font-family: Syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
  cursor: pointer;
}
@media (max-width: 960px) {
  padding-left: 9.2rem;
  padding-right: 9.2rem;
  .desktop-links {
    display: none;
  }
}
@media (max-width: 550px) {
  justify-content: center;
  .link-header {
    display: none;
  }
  
}
`;function Tw(){const e=ur.useMediaQuery({query:"(max-width: 960px)"}),t=()=>{let a="aulas online";return e&&(a="aulas"),a},n=()=>{let a="eventos presencias";return e&&(a="eventos"),a},r={spy:!0,smooth:"easeInOutQuart",duration:900,offset:-68,delay:300};return u.jsxs(Pw,{children:[u.jsx(ke,{...r,to:"aulas-online",className:"link-header ",type:"button",children:t()}),u.jsx(ke,{...r,to:"aulas-presenciais",className:"link-header desktop-links",type:"button",children:"aulas presenciais"}),u.jsx("img",{src:Pu,alt:"Logo",className:"logo-header-home"}),u.jsx(ke,{...r,to:"eventos",className:"link-header",type:"button",children:n()}),u.jsx(ke,{...r,to:"contatos",className:"link-header desktop-links",type:"button",children:"contato"})]})}const Ow="/Yoga-LandingPage-React-Vite/assets/homeHero-5101dfe8.png",Rw=Y.section`
width: 100%;
background-image: url(${Ow});
padding-top: 6rem;
background-position: 50% 50%;
background-size: cover;
background-repeat: no-repeat;
padding-bottom: 12.4rem;
padding-left: 17.2rem;
position: relative;
.hero-card-home{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 4.4rem;
  padding-bottom: 5rem;
  padding-left: 4.8rem;
  padding-right: 4.8rem;
  width: fit-content;
  text-align: center;
  margin-right : auto;
  gap: 3.2rem;
  border-radius: 4.8rem;
  background-color: #EFEFEFBF;
  max-width:58.2rem;
}
.hero-card-title {
  color: var(--C4);
  font-family: ivy, syne, sans-serif;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.hero-card-paragraph-container {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
}
.hero-card-paragraph {
  color: var(--C4);
  font-family: syne, sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 530;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.divider {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}
@media (max-width: 960px) {
  padding-left: 3.2rem;
  background-position: 40% 50%;
  background-size: cover;
  padding-top: 5.4rem;
  padding-bottom: 8.8rem;
  .hero-card-home{
    max-width: 41.9rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;
    padding-top: 3.2rem;
    padding-bottom: 3.6rem;
    gap: 2.4rem;
  }
  .hero-card-title {
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 128% */
    letter-spacing: 1.25px;
  }
  .hero-card-paragraph {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 150% */
    letter-spacing: 0.32px;
  }
}
@media (max-width: 550px) {
  padding-left: 3.2rem;
  background-position: 70% 70%;
  background-size: 260%;
  padding-top: 1.8rem;
  padding-bottom: 8.1rem;
  padding-left: 0;
  .hero-card-home{
    max-width: 22.4rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    padding-top: 2.4rem;
    padding-bottom: 3.6rem;
    gap: 2.4rem;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  .hero-card-title {
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px; /* 128% */
    letter-spacing: 1.25px;
    text-align: left;
  }
  .hero-card-paragraph {
    font-size: 13.5px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 148.148% */
    letter-spacing: 0.54px;
  }
@media (max-width: 400px) {
  background-position: 70% 70%;
  background-size: 290%;
}
@media (max-width: 380px) {
  background-position: 65% 80%;
  background-size: 270%;
}
}
`,To="/Yoga-LandingPage-React-Vite/assets/DIVISOR-352c5979.png";function Nw(){return u.jsxs(Rw,{children:[u.jsxs("div",{className:"hero-card-home",children:[u.jsx("h1",{className:"hero-card-title",children:"Seja muito bem vinda(o)!"}),u.jsxs("div",{className:"hero-card-paragraph-container",children:[u.jsx("p",{className:"hero-card-paragraph ",children:"Descubra uma vida com mais disciplina no tempo dedicado a si mesma, tranquilidade mental e clareza em suas decisões."}),u.jsx("p",{className:"hero-card-paragraph ",children:"Noites de sono serenas e completas são apenas o começo. Desperte sua flexibilidade, força e  consciência corporal."})]})]}),u.jsx("img",{src:To,alt:"divider",className:"divider"})]})}const Iw=Y.section`
    display: flex;
    height: 386px;
    padding: 8px 76px var(--spacing-s3, 24px) 76px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    background-color: var(--C2);
    position: relative;
.online-classes-title {
    color: var(--C4);
    font-family: syne, ivy, sans-serif;
    /* text-3xl */
    font-size: 35px;
    font-style: normal;
    font-weight: 600;
    line-height: 48px; /* 137.143% */
    margin-bottom: 1rem;
}
#wrapper {
    width: 100%;
}
#carousel {
    position: relative;
    display: flex;
    overflow: hidden;
    gap: 24px;
}
.return-button, .forward-button {
    position: absolute;
    height: 40px;
    width: 40px;
    top: 47%;
    border-radius: var(--radius-radius-full, 360px);
    background: var(--C3, #8CA09A);
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        width: 30px;
        height: 30px;
    }
}
.return-button{
    position: absolute;
    left: 5.6rem;
    transform: translateY(-50%);
    img{
        margin-right: 3px;
    }
}
.forward-button  {
    right: 5.6rem;
    transform: translateY(-50%);
    img{
        transform: rotate(180deg);
        margin-left: 3px;
    }
}
.counter {
    margin-top: 1.2rem;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 24px;
    position: relative;
    z-index: 99;
}
.counter-circle {
    transition: background-color 0.3s;
    width: 12px;
    height: 12px;
    background: var(--C4);
    border-radius: 50%;
}
@media (max-width: 960px) {
    padding: 8px 32px var(--spacing-s3, 24px) 32px;
    .forward-button  {
        right: 1.6rem;
    }
    .return-button{
        left: 1.3rem;
    }
}
@media (max-width: 550px) {
    padding: 8px 16px;
    .forward-button  {
        right: 1.2rem;
    }
    .return-button{
        left: 0.4rem;
    }
    .online-classes-title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    }
}
`;var uh={},jn=nt&&nt.__assign||function(){return jn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},jn.apply(this,arguments)},Aw=nt&&nt.__createBinding||(Object.create?function(e,t,n,r){r===void 0&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);(!a||("get"in a?!t.__esModule:a.writable||a.configurable))&&(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}),Lw=nt&&nt.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),zw=nt&&nt.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)n!=="default"&&Object.prototype.hasOwnProperty.call(e,n)&&Aw(t,e,n);return Lw(t,e),t};Object.defineProperty(uh,"__esModule",{value:!0});var ai=zw(O),ii=O,Mw=function(e){var t=jn({cardStyles:{back:{},front:{}},cardZIndex:"auto",containerStyle:{},flipDirection:"horizontal",flipSpeedBackToFront:.6,flipSpeedFrontToBack:.6,infinite:!1,isFlipped:!1},e),n=t.cardStyles,r=n.back,a=n.front,i=t.cardZIndex,o=t.containerStyle,s=t.containerClassName,l=t.flipDirection,c=t.flipSpeedFrontToBack,m=t.flipSpeedBackToFront,p=t.infinite,g=t.isFlipped,v=(0,ii.useState)(g),x=v[0],w=v[1],k=(0,ii.useState)(0),f=k[0],d=k[1];(0,ii.useEffect)(function(){g!==x&&(w(g),d(function(T){return T+180}))},[g]);var h=(0,ii.useMemo)(function(){var T="react-card-flip";return s&&(T+=" ".concat(s)),T},[s]),y=function(T){if(e.children.length!==2)throw new Error("Component ReactCardFlip requires 2 children to function");return e.children[T]},S="rotateY(".concat(p?f:g?180:0,"deg)"),C="rotateY(".concat(p?f+180:g?0:-180,"deg)"),E="rotateX(".concat(p?f:g?180:0,"deg)"),b="rotateX(".concat(p?f+180:g?0:-180,"deg)"),j={back:jn({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:g?"relative":"absolute",top:"0",transform:l==="horizontal"?C:b,transformStyle:"preserve-3d",transition:"".concat(c,"s"),width:"100%"},r),container:{perspective:"1000px",zIndex:"".concat(i)},flipper:{height:"100%",position:"relative",width:"100%"},front:jn({WebkitBackfaceVisibility:"hidden",backfaceVisibility:"hidden",height:"100%",left:"0",position:g?"absolute":"relative",top:"0",transform:l==="horizontal"?S:E,transformStyle:"preserve-3d",transition:"".concat(m,"s"),width:"100%",zIndex:"2"},a)};return ai.createElement("div",{className:h,style:jn(jn({},j.container),o)},ai.createElement("div",{className:"react-card-flipper",style:j.flipper},ai.createElement("div",{className:"react-card-front",style:j.front},y(0)),ai.createElement("div",{className:"react-card-back",style:j.back},y(1))))},yn=uh.default=Mw;const Dw="/Yoga-LandingPage-React-Vite/assets/iOne-26527dec.png",Fw="/Yoga-LandingPage-React-Vite/assets/iTwo-999557a5.png",Bw="/Yoga-LandingPage-React-Vite/assets/iThree-9a9ccae0.png",$w="/Yoga-LandingPage-React-Vite/assets/iFour-1556241d.png",Hw="/Yoga-LandingPage-React-Vite/assets/iFive-56641601.png",Uw="/Yoga-LandingPage-React-Vite/assets/iSix-952d08df.png",Yw="/Yoga-LandingPage-React-Vite/assets/iSeven-fab56aaa.png",Vw=Y.div`
button:hover {
  opacity: 1;
}
button:active {
  transform: scale(1);
}
.event-front-card {
  position: relative;
  display: flex;
  height: 220px;
  width: 360px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2.4rem;
  background-size: cover;
}
.event-front-card.one {
  background-position: center;
  background-image: url(${Dw});
}
.event-front-card.two {
  background-image: url(${Fw});
  background-position: center;
}
.event-front-card.third{
  background-image: url(${Bw});
  background-position: center;
}
.event-front-card.fourth{
  background-image: url(${$w});
  background-position: center;
}
.event-front-card.fifth {
  background-image: url(${Hw});
  background-position: center;
}
.event-front-card.sixth{
  background-image: url(${Uw});
  background-position: center;
}
.event-front-card.seventh {
  background-image: url(${Yw});
  background-position: center;
}
.sub-card-text {
  margin-top: 0.8rem;
  color: var(--C4);
  width: 100% ;
  text-align: center;
  font-family: ivy , syne, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.event-back-card {
  display: flex;
  height: 220px;
  width: 360px;
  padding-top: 2.8rem;
  padding-bottom: 3.2rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 2.4rem;
  background: #8CA09A75;
  font-family: syne;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
}
.event-card-paragraph {
  font-family: syne, ivy, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: var(--C4, #123939);
}
.plus-img-container{
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  width: 52px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 0px 28px;
  background: var(--c-375, rgba(140, 160, 154, 0.75));
}
.event-card-button {
  font-family: syne, ivy, sans-serif;
  display: flex;
  height : 3.2rem;
  width: 14.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  border: 1px solid var(--C4, #1E8689);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.953px; /* 113.951% */
  letter-spacing: 0.35px;
  color: var(--C1, #EFEFEF);
}
.event-card-button:hover {
  background: transparent;
  border: 1px solid var(--C4, #1E8689);
  color: var(--C4, #1E8689);
}

`;Y.button`
`;Y.button`
`;const xn="/Yoga-LandingPage-React-Vite/assets/Plus-d6b90bce.svg";function Xt({text:e,className:t,subText:n}){const[r,a]=Ve.useState(!1),i=c0();return u.jsxs(Vw,{children:[u.jsxs(yn,{isFlipped:r,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsx("button",{onClick:()=>a(!r),type:"button",className:`event-front-card ${t}`,"aria-label":n,children:u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:n})})}),u.jsxs("button",{onClick:()=>a(!r),type:"button",className:"event-back-card",children:[u.jsx("p",{className:"event-card-paragraph",children:e}),u.jsx("button",{type:"button",className:"event-card-button",onClick:()=>i("/iclub"),children:"quero participar"})]})]}),u.jsx("p",{className:"sub-card-text ",children:n})]})}Xt.propTypes={text:D.string.isRequired,className:D.string.isRequired,subText:D.string.isRequired};const Id="/Yoga-LandingPage-React-Vite/assets/ArrowCarrousel-a6774905.svg";function Ww(){const[e,t]=O.useState(0),n=O.useRef(null);function r(s,l){const c=Math.floor(l/3);return s<c?1:s<c*2?2:3}O.useEffect(()=>{},[e]);const a=()=>{n.current&&(n.current.scrollLeft+=384,t(s=>Math.min(s+1,6)))},i=()=>{n.current&&(n.current.scrollLeft-=384,t(s=>Math.max(s-1,0)))};function o(s){const l=r(e,7);return s===l?"#12393985":"#8CA09A75"}return u.jsxs(Iw,{id:"aulas-online",children:[u.jsx("h1",{className:"online-classes-title",children:"Aulas online"}),u.jsx("div",{id:"wrapper",children:u.jsxs("div",{id:"carousel",ref:n,children:[u.jsx(Xt,{text:"Práticas constituídas por ásanas (posturas) com permanência, alinhamento, técnicas de respiração (pranayamas) e purificação interna, relaxamento e meditação.",className:"two",subText:"Hatha Yoga"}),u.jsx(Xt,{text:"Práticas que combinam ásanas (posturas) e pranayamas (respirações) de forma fluída, sendo considerada a melhor meditação ativa em movimento.",className:"third",subText:"Vinyasa Yoga"}),u.jsx(Xt,{text:"Aulas exclusivas para iniciantes e para quem nunca praticou, bem detalhadas e mais explicativas para se sentir seguro, confiante e evoluir em suas práticas.",className:"one",subText:"Jornada Iniciante"}),u.jsx(Xt,{text:" Aulas com maior intensidade, posturas mais desafiadoras e pranayamas mais avançados, buscando lapidar ainda mais a sua prática e meditação.",className:"fourth",subText:"Aulas intermediarias"}),u.jsx(Xt,{text:"Aulas com práticas longas e desafiadoras,  ásanas avançados,  pranayama intensos, mudras e laya.",className:"fifth",subText:"Trilhas do avançado"}),u.jsx(Xt,{text:"Técnicas de respirações guiadas que buscam ativar o seu estado de leveza, bem estar, calma e clareza mental em poucos minutos.",className:"sixth",subText:"Pranayamas guiados"}),u.jsx(Xt,{text:"Técnicas de mindfulness para liberar sentimentos e pensamentos negativos, bem como despertar e cultivar mais sentimentos e pensamentos positivos.",className:"seventh",subText:"Meditações guiadas"})]})}),u.jsx("button",{onClick:i,type:"button",className:"return-button",children:u.jsx("img",{src:Id,alt:"Voltar"})}),u.jsx("button",{onClick:a,type:"button",className:"forward-button",children:u.jsx("img",{src:Id,alt:"Proximo"})}),u.jsxs("div",{className:"counter",children:[u.jsx("div",{className:"counter-circle one",style:{backgroundColor:o(1)}}),u.jsx("div",{className:"counter-circle two",style:{backgroundColor:o(2)}}),u.jsx("div",{className:"counter-circle three",style:{backgroundColor:o(3)}})]})]})}const qw=Y.section`
display: flex;
padding: 8px 76px var(--spacing-s3, 24px) 76px;
flex-direction: column;
align-items: flex-start;
gap: 8px;
position: relative;
.online-classes-title {
  color: var(--C4);
  font-family: syne, ivy, sans-serif;
  font-size: 3.5rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.1ch;
  line-height: 1.2em;
  position: relative;
  z-index: 99;
  margin-bottom: 1rem;
}
.online-classes-main-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.map-container {
  width: 50%;
  overflow: hidden;
  padding-right: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.map-container iframe {
  border-radius: 2.4rem;
  flex: 1 0 0;
}
.address-span {
  margin-top: 1.6rem;
  color: var(--C4, #123939);
  text-align: center;
  -webkit-text-stroke-width: 0.25;
  -webkit-text-stroke-color: var(--C4, #123939);
  font-family: syne;
  font-size: 13.5px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 148.148% */
  letter-spacing: 0.405px;
}
.card-main-container {
  padding-left: 1.2rem;
  display: flex;
  flex-direction: row;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 50%;
}
.divider {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 136px;
  transform: translateY(-50%);
}
@media (max-width: 1250px) {
  .online-classes-main-container {
    flex-direction: column;
    gap: 1.2rem;
  }
  .map-container {
    width: 100%;
    height: 204px;
  }
  .card-main-container {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.6rem 2.4rem ;
    padding-left: 0;
  }
}
@media (max-width: 960px) {
  padding: 8px 32px var(--spacing-s3, 24px) 32px;
}
@media (max-width: 600px) {
  .card-main-container {
    grid-template-columns: 1fr;
    gap: 1.6rem;
  }
}
@media (max-width: 550px) {
  padding: 8px 16px;
    .online-classes-title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
}

`,Qw="/Yoga-LandingPage-React-Vite/assets/hathaYoga-edee87e5.png",Gw="/Yoga-LandingPage-React-Vite/assets/hotYoga-0fafde5b.png",Xw="/Yoga-LandingPage-React-Vite/assets/vinyasaYoga-75cc6e94.png",Kw="/Yoga-LandingPage-React-Vite/assets/yinYoga-5a48af34.png",Oo=Y.div`
button:hover {
  opacity: 1;
}
button:active {
  transform: scale(1);
}
.event-front-card {
  position: relative;
  display: flex;
  height: 208px;
  width: 264px;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2.4rem;
  background-size: cover;
}
.event-front-card.first {
  background-image: url(${Qw});
  background-position: center;
}
.event-front-card.second {
  background-image: url(${Gw});
  background-position: center;
}
.event-front-card.third {
  background-image: url(${Xw});
  background-position: center;
}
.event-front-card.fourth{
  background-image: url(${Kw});
  background-position: center;
}
.sub-card-text {
  color: var(--C4);
  width: 100% ;
  text-align: center;
  font-family: ivy , syne, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.plus-img-container {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  width: 52px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 0px 28px;
  background: var(--c-375, rgba(140, 160, 154, 0.75));
}
.event-back-card {
  display: flex;
  height: 208px;
  width: 264px;
  padding: 8px 8px 12px 8px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
  border-radius: 2.4rem;
  background: #8CA09A75;
}
.event-card-paragraph {
  font-family: syne, ivy, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  color: var(--C4, #123939);
}
.event-card-button {
  font-family: syne, ivy, sans-serif;
  display: flex;
  height : 3.2rem;
  width: 14.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 360px;
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  border: 1px solid var(--C4, #1E8689);
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.953px; /* 113.951% */
  letter-spacing: 0.35px;
  color: var(--C1, #EFEFEF);
}
.event-card-button:hover {
  background: transparent;
  border: 1px solid var(--C4, #1E8689);
  color: var(--C4, #1E8689);
}
@media (max-width: 1250px) {
  .event-back-card {
    width: 100%;
  }
  .event-front-card {
    width: 100%;
  }
}
`;Y.button`
`;Y.button`
`;function Zw(){const[e,t]=Ve.useState(!1);return u.jsxs(Oo,{children:[u.jsxs(yn,{isFlipped:e,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsx("button",{onClick:()=>t(!e),type:"button",className:"event-front-card first","aria-label":"Yoga no Parque",children:u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:"Mais informações"})})}),u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-back-card",children:[u.jsx("p",{className:"event-card-paragraph",children:"Práticas constituídas por ásanas (posturas) com permanência, alinhamento, técnicas de respiração (pranayamas) e purificação interna, relaxamento e meditação."}),u.jsx("a",{href:"https://api.whatsapp.com/send?phone=553132746861&text=Ol%C3%A1,%20quero%20agendar%20uma%20aula%20com%20a%20Isabella%20Cayuela",target:"_blank",rel:"noopener noreferrer",children:u.jsx("button",{type:"button",className:"event-card-button",children:"quero participar "})})]})]}),u.jsx("p",{className:"sub-card-text H4",children:"Hatha Yoga"})]})}function Jw(){const[e,t]=Ve.useState(!1);return u.jsxs(Oo,{children:[u.jsxs(yn,{isFlipped:e,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsx("button",{onClick:()=>t(!e),type:"button",className:"event-front-card second","aria-label":"Yoga no Parque",children:u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:"Mais informações"})})}),u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-back-card",children:[u.jsx("div",{children:u.jsx("p",{className:"event-card-paragraph",children:"Práticas que combinam ásanas (posturas) e pranayamas (respirações) de forma fluída, sendo considerada a melhor meditação ativa em movimento."})}),u.jsx("a",{href:"https://api.whatsapp.com/send?phone=553132746861&text=Ol%C3%A1,%20quero%20agendar%20uma%20aula%20com%20a%20Isabella%20Cayuela",target:"_blank",rel:"noopener noreferrer",children:u.jsx("button",{type:"button",className:"event-card-button",children:"quero participar"})})]})]}),u.jsx("p",{className:"sub-card-text H4",children:"Hot Yoga"})]})}function e2(){const[e,t]=Ve.useState(!1);return u.jsxs(Oo,{children:[u.jsxs(yn,{isFlipped:e,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsx("button",{onClick:()=>t(!e),type:"button",className:"event-front-card third","aria-label":"Yoga no Parque",children:u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:"Mais informações"})})}),u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-back-card",children:[u.jsx("div",{children:u.jsx("p",{className:"event-card-paragraph",children:"Práticas que combinam ásanas (posturas) e pranayamas (respirações) de forma fluída, sendo considerada a melhor meditação ativa em movimento."})}),u.jsx("a",{href:"https://api.whatsapp.com/send?phone=553132746861&text=Ol%C3%A1,%20quero%20agendar%20uma%20aula%20com%20a%20Isabella%20Cayuela",target:"_blank",rel:"noopener noreferrer",children:u.jsx("button",{type:"button",className:"event-card-button",children:"quero participar"})})]})]}),u.jsx("p",{className:"sub-card-text H4",children:"Vinyasa Yoga"})]})}function t2(){const[e,t]=Ve.useState(!1);return u.jsxs(Oo,{children:[u.jsxs(yn,{isFlipped:e,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsx("button",{onClick:()=>t(!e),type:"button",className:"event-front-card fourth","aria-label":"Yoga no Parque",children:u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:"Mais informações"})})}),u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-back-card",children:[u.jsx("div",{children:u.jsx("p",{className:"event-card-paragraph",children:"Práticas com posturas mais relaxantes, confortáveis e leves. Técnicas respiratórias para acalmar os pensamentos e meditação relaxante."})}),u.jsx("a",{href:"https://api.whatsapp.com/send?phone=553132746861&text=Ol%C3%A1,%20quero%20agendar%20uma%20aula%20com%20a%20Isabella%20Cayuela",target:"_blank",rel:"noopener noreferrer",children:u.jsx("button",{type:"button",className:"event-card-button",children:"quero participar"})})]})]}),u.jsx("p",{className:"sub-card-text H4",children:"Yin Yoga"})]})}function n2(){return u.jsxs(qw,{id:"aulas-presenciais",children:[u.jsx("h1",{className:"online-classes-title ",children:"Aulas presenciais"}),u.jsxs("div",{className:"online-classes-main-container",children:[u.jsxs("div",{className:"map-container",children:[u.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15010.536358992631!2d-43.9717975!3d-19.8554296!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691f5ebf0b98f%3A0xe0496f0bf5fd61c6!2sContemple!5e0!3m2!1spt-BR!2sbr!4v1715217894098!5m2!1spt-BR!2sbr",width:"100%",height:"460",title:"Google Maps",style:{border:0},allowFullScreen:"",loading:"lazy",className:"custom-google-maps",referrerPolicy:"no-referrer-when-downgrade"}),u.jsx("span",{className:"address-span",children:"Casa Contemple - Avenida Otacílio Negrão de Lima, 940, São Luiz/BH"})]}),u.jsx("div",{}),u.jsxs("div",{className:"card-main-container",children:[u.jsx(Zw,{}),u.jsx(Jw,{}),u.jsx(e2,{}),u.jsx(t2,{})]})]}),u.jsx("img",{src:To,alt:"divider",className:"divider"})]})}const r2=Y.section`
display: flex;
justify-content: flex-start;
flex-direction: column;
padding-left: 7.6rem;
padding-right: 7.6rem;
gap: 1.6rem;
padding-bottom: 3.2rem;
position: relative;
.title {
  color: var(--C4);
  margin-bottom: 1rem;
  color: var(--C4);
  font-family: syne, ivy, sans-serif;
  /* text-3xl */
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 137.143% */
}
.events-card-main-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  z-index: 99;
  gap: 1.6rem;
  width: 100%;
}
.sub-card-text {
  margin-top: 0.8rem;
  width: 100%;
  text-align: center;
  color: var(--C4);
  font-family: ivy, sans-serif;
  font-family: ivy , syne, sans-serif;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 800;
  letter-spacing: 0.15ch;
  line-height: 1.5em;
}
.divider-btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}

@media (max-width: 960px) {
    padding: 8px 32px var(--spacing-s3, 24px) 32px;
}

@media (max-width: 740px) {
  .events-card-main-container{
  display: grid;
  grid-template-columns: 1fr;
}
}
@media (max-width: 550px) {
  padding: 8px 16px;
    .title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
    }
}

`,a2="/Yoga-LandingPage-React-Vite/assets/yogaNoParque-2e1ef641.png",i2="/Yoga-LandingPage-React-Vite/assets/natureYoga-353c6193.png",o2="/Yoga-LandingPage-React-Vite/assets/iceYoga-90caa26a.png",Tu=Y.div`
button:hover {
  opacity: 1;
}
button:active {
  transform: scale(1);
}
.event-front-card {
  padding: 1rem;
  border: none;
  width: 36rem;
  height: 36rem;
  border-radius: 2.4rem;
  background-size: cover;
  background-position: center;
}
.plus-img-container {
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  width: 52px;
  height: 52px;
  padding: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 0px 24px 0px 28px;
  background: var(--c-375, rgba(140, 160, 154, 0.75));
}
.event-front-card.first {
  background-image: url(${a2});
}
.text-img{
  position: absolute;
  width: 80%;
  height: fit-content;
  z-index: 1;
  color: white;
}
.text-img.first {
  bottom: 5%;
  right: 10%;
}
.text-img.second {
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
}
.text-img.third {
  bottom: 50%;
  right: 50%;
  transform: translate(50%, 50%);
}
.event-front-card.second {
  background-image: url(${i2});
}
.event-front-card.third {
  background-image: url(${o2});
}
.event-back-card {
  background: var(--C2);
  font-family: syne, ivy, sans-serif;
  color: var(--C4);
  padding: 1rem;
  border: none;
  width: 36rem;
  height: 36rem;
  border-radius: 2.4rem;
  padding: var(--spacing-s3, 24px) 16px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.text-paragraph-container {
  gap: 1rem;
  display: flex;
  flex-direction: column;
}
.event-card-paragraph {
  font-family: syne, ivy, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0.27px;
  text-align: justify;
  gap: 30rem;
}
.destaque-span {
  text-align: justify;
  font-family: syne, ivy, sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 144.444% */
  letter-spacing: 0.27px;
}
.event-card-button {
  font-family: syne, ivy, sans-serif;
  border-radius: var(--radius-radius-full, 360px);
  color: var(--C1, #EFEFEF);
  background: var(--C4, #123939);
  /* Sombra */
  box-shadow: 0px 2px 3px 0px rgba(37, 37, 37, 0.10);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.5px;
  height: 4.7rem;
  width: 20.8rem;
  border: 2px solid transparent;
}
.event-card-button:hover {
  background: transparent;
  border: 1px solid var(--C4, #1E8689);
  color: var(--C4, #1E8689);
}
@media (max-width: 825px) {
  .event-front-card {
    width: 328px;
  }
  .event-back-card {
    width: 328px;
  }
}
@media (max-width: 740px) {
  .event-front-card {
    width: 100%;
  }
  .event-back-card {
    width: 100%;
  }
  .event-front-card.first {
    background-position: 30% 30%;
  
  }
}
@media (max-width: 395px) {
  .event-front-card {
    height: 39rem;
  }
  .event-back-card {
    height: 39rem;
  }
}
@media (max-width: 350px) {
  .event-front-card {
    height: 41rem;
  }
  .event-back-card {
    height: 41rem;
  }
}
`,s2=Y(Tu)`
@media (max-width: 1265px) {
  margin-left: 50%;
  transform: translateX(-50%);
}
@media (max-width: 740px) {
  margin-left: 0;
  transform: translateX(0%);
}
`;Y.button`
`;const l2="/Yoga-LandingPage-React-Vite/assets/TextYoganoParque-89161b28.svg";function u2(){const[e,t]=Ve.useState(!1);return u.jsxs(Tu,{children:[u.jsxs(yn,{isFlipped:e,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-front-card first","aria-label":"Yoga no Parque",children:[u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:"Mais informações"})}),u.jsx("img",{src:l2,className:"text-img first",alt:"label"})]}),u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-back-card",children:[u.jsxs("div",{className:"text-paragraph-container",children:[u.jsxs("p",{className:"event-card-paragraph",children:[u.jsx("span",{className:"destaque-span",children:"Yoga no Parque"})," ","é um projeto focado em gerar conexão e expansão, afinal queremos um mundo mais livre e saudável."]}),u.jsxs("p",{className:"event-card-paragraph",children:["Um projeto"," ",u.jsx("span",{className:"destaque-span",children:"gratuito"})," ","que busca levar saúde, bem estar e leveza para quem se propõe embarcar nessa aventura, facilitadas em parques de BH."]})]}),u.jsx("a",{href:"https://chat.whatsapp.com/EfiSFkE5OOqJiuNM6S5cv8",target:"_blank",rel:"noopener noreferrer",children:u.jsx("button",{type:"button",className:"event-card-button",children:"quero participar"})})]})]}),u.jsx("p",{className:"sub-card-text H4",children:"Yoga no Parque"})]})}const c2="/Yoga-LandingPage-React-Vite/assets/TextoNatureYOGA-f68e55f3.svg";function d2(){const[e,t]=Ve.useState(!1);return u.jsxs(Tu,{children:[u.jsxs(yn,{isFlipped:e,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-front-card second","aria-label":"Nature Yoga",children:[u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:"Mais informações"})}),u.jsx("img",{src:c2,className:"text-img second",alt:"label"})]}),u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-back-card",children:[u.jsxs("div",{className:"text-paragraph-container",children:[u.jsxs("p",{className:"event-card-paragraph",children:[u.jsx("span",{className:"destaque-span",children:"NatureYOGA:"})," ","a yoga trip com propósito para sair da rotina e se (re)conectar com si mesmo!"]}),u.jsx("p",{className:"event-card-paragraph",children:"Durante 4 dias aprofundaremos na prática e na filosofia do Yoga equilibrando seu corpo, sua mente e elevando seu espírito em Unah Piracanga, Bahia."})]}),u.jsx("a",{href:"https://unah.eco/nature-yoga/",target:"_blank",rel:"noopener noreferrer",children:u.jsx("button",{type:"button",className:"event-card-button",children:"quero participar"})})]})]}),u.jsx("p",{className:"sub-card-text H4",children:"Nature Yoga"})]})}const f2="/Yoga-LandingPage-React-Vite/assets/ConexãoYOGATxt-1f09c35f.svg";function p2(){const[e,t]=Ve.useState(!1);return u.jsxs(s2,{children:[u.jsxs(yn,{isFlipped:e,flipSpeedBackToFront:1.3,flipSpeedFrontToBack:1.3,children:[u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-front-card third","aria-label":"Ice Yoga",children:[u.jsx("div",{className:"plus-img-container",children:u.jsx("img",{src:xn,alt:"Mais informações"})}),u.jsx("img",{src:f2,className:"text-img third",alt:"label"})]}),u.jsxs("button",{onClick:()=>t(!e),type:"button",className:"event-back-card",children:[u.jsxs("div",{className:"text-paragraph-container",children:[u.jsxs("p",{className:"event-card-paragraph",children:[u.jsx("span",{className:"destaque-span",children:"Conexão YOGA"}),"são encontros que unem duas coisas que amamos: Yoga e o Sol."]}),u.jsx("p",{className:"event-card-paragraph",children:"Práticas de Yoga ao nascer e ao por do sol que buscam aumentar sua conexão consigo e com a natureza abundante, te devolvendo a serenidade e a vontade de viver a vida."})]}),u.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5531996793158&text&type=phone_number&app_absent=0",target:"_blank",rel:"noopener noreferrer",children:u.jsx("button",{type:"button",className:"event-card-button",children:"quero participar"})})]})]}),u.jsx("p",{className:"sub-card-text H4",children:"Conexão Yoga"})]})}function m2(){return u.jsxs(r2,{id:"eventos",children:[u.jsx("h2",{className:"title ",children:"Eventos Presenciais"}),u.jsxs("div",{className:"events-card-main-container",children:[u.jsx(u2,{}),u.jsx(d2,{}),u.jsx(p2,{})]}),u.jsx("img",{src:To,alt:"divider",className:"divider-btn"})]})}const h2=Y.section`
width: 100%;
background: var(--C2);
padding-left: 7.6rem;
padding-right: 7.6rem;
padding-bottom: 3.2rem; 
position: relative;
.partner-title {
  color: var(--C4);
  margin-bottom: 1rem;
  color: var(--C4);
  font-family: syne, ivy, sans-serif;
  /* text-3xl */
  font-size: 35px;
  font-style: normal;
  font-weight: 600;
  line-height: 48px; /* 137.143% */
}
.partners-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 8rem;
  flex-wrap: wrap;
  gap: 1.6rem;
}
.divider-btn {
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 136px;
  transform: translateY(50%);
}
.last-cta {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: none;
  gap: 1.6rem;
  padding-top: 2.4rem;
  color: var(--C4);
  position: relative;
  z-index: 99;
}
.last-cta span{
  font-family: Syne;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 30px */
  letter-spacing: 0.5px;
}

.last-cta a{
  padding: 0.9rem 1.6rem ; 
  background: var(--C4);
  border-radius: 2.4rem;
  font-weight: 500;
  letter-spacing: 0.25ch;
  color: var(--C2);
  font-size: 1.4rem;
  transition: all  0.3s;
  border: 1px solid transparent;
}
.last-cta a:hover{
  background: var(--C5);
  border: 1px solid var(--C4);
  color: var(--C4);
}
.last-btn {
  color: var(--C1, #EFEFEF);
  font-family: syne;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 15.953px; /* 113.951% */
  letter-spacing: 0.35px;
  text-align: center;
  min-width: 17.2rem;
}
@media (max-width: 960px) {
  padding: 8px 32px var(--spacing-s3, 24px) 32px;
}
@media (max-width: 550px) {
  padding: 8px 16px;
  padding-bottom: 1.6rem;
  .partner-title {
    font-size: 32px;
    font-style: normal;
    font-weight: 500;
    line-height: 40px;
  }
  .last-cta {
      justify-content: space-between;
  }
  .last-cta span{
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.36px;
    text-align: right;
  }
}
`,g2="/Yoga-LandingPage-React-Vite/assets/iWanna-d05d9d09.svg",v2="/Yoga-LandingPage-React-Vite/assets/bolixe-eebe59d9.svg",y2="/Yoga-LandingPage-React-Vite/assets/Logodeuzzaroxa-a42627b3.svg",x2="/Yoga-LandingPage-React-Vite/assets/FELICITEA-54b4a12b.svg",w2="/Yoga-LandingPage-React-Vite/assets/gotaRoxa-b6f9592a.svg",S2="/Yoga-LandingPage-React-Vite/assets/hidratei-60742a62.svg",k2="/Yoga-LandingPage-React-Vite/assets/climb-37b820b7.svg",E2="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFEAAAAUCAYAAAD1GtHpAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAWTSURBVHgB7VhZTJxVFP5nYRkGGGaGfQkDw74OBHBYJh0ogg2agBWk0FGwrRQI1Qlp5MWEF1/EB4WX2gcSIZKI9kUiiQZR2QqGpRq2YElZwo5A2QYYYPwu8pOf32FKY5OmzZzkMve/99xzz/3OOd+9gaLM8uzEYDBwKLOYxSxmMcspqays5Jrix2fBncTGy8TBJwexsLBQxMXFBczMzEitra11y8vLYldX14bBwcEF5gI/P78KS0vL74aHhx8yx0Ui0e3t7e2/SZ/H43ECAwMNQqFwpKur6z6tU15e7tjU1HRxb29PIhAItjY2NkROTk73BgYGZsk8AmhTW1sbPzU19fMT/Ka8vb3fXFhYcDg4OCC+87DfLr7XZmdnv2frqlSquImJCZ/p6elvmOONjY2WpaWl+fBdD1+p9fV1amdnZ7GhoaE1OTl5n+j4+vqm2tnZSfV6vWBra2vP09Nzs6+v70/oTZB5W1vb3CNjaWlpr6SmpqYbcfQy8xsG/CIiIt6QyWTFbF2AW8oei46OToeNrONPBw8Pj4+rq6utmDqOjo7XXVxcwkm/oqKCBC6bOocEBQUVsccAhi/bZyJRUVGayMjIq8QH5rhCoajEmSTMMeKDu7v7ETAANj8rK+sC2x4CVoi9xKQvkUg+pA97lTqf4zdIGcLIawAyiDlnDMTjNVfIb0xMjKa3t9fCmE54ePgN+gAA8S3qHAIfbhobV6vV5cxvgBeVkpISja6Dm5tbEcu3IsqEwJdi6glCQOQCda+lpaVFU4oEOKKHdF7gcDiG0dHRH21sbF5lqxlba2VlxSO/8/PzYgCpN6aDktjSarUS6ikEPvFAPz4JCQneSqVShiAqQ0JCykBDzUy93d3dpNbW1n5013DgxwUFBSfZCF2DVCp9t6yszMlYgHHWX/z9/W/HxsaGNjc3W53F41xwCA81v23KYQIcdC6Dq5ro783Nzf6MjIxgWken0zkgxeWkOTs7y3EgBbL1o8nJyQ4yv7+/rz8DDA54Tdfd3S3Agc992WAdl/AU1grBsQKU3gb6U+C+i7QOgE0/PDxso7/B79+Co08yHSDeRZbea29vDwUHanx8fK4FBASUIkGiyPzc3Nzo2NjYZwgylZubmyWXywuDg4OLkaEF4FPeiTOJiYl2IPdbphzGQn97e/t6sVhchHaTNJTGB+CyT2gdZOqn+FGTBl7KQIbc0mg0Qno+KSnpyln2wbPXCJgkG/9vOYN3UzIzM2WkDx+/Ovb5fdp3+Py1A8SUbYCvJZeOib0D4bOK9JHdWm5nZ+cG0J/HjSxjKwOMSyTia2trObi5NKurq1+i3SENUfqCy+X+huiEEV2U7SR+fiUN2fcDovl7f39/HG2ro6NjJCws7G32HmTf8fFxHclu6inkLH34xEfVcFDqKoD2+bHPd2nfa2pqriNpcknQ4PslYzaQ1dvQOQRNqI3NowoNwOTkguSTPwCyEZn2Duo/dmVl5S+UJAWevODl5fUHmi/G7wO0/xjD2E94AmjRHUTZnDpUS0tLNyKalpeXp8CT4QGGHsAxETK2EID3oa2j/OIRSX1PT08DWYMxA2hBjmxSUv8+v45s4rCP29raRpj2sZYDulASMEAVBqzlIyDeeDrt1dfXP8KNnI5n2B22zzk5OTokzSrOJQaoElyqOTjHQ2TW3NDQkC0o4nW8GHqPnzgTsPPe4uLiI+w1DmzI+zYCTzhXUEMtAkmCdjqYWODO5/PVKIMYAGBPxurq6oSmHsZ0aRA9Y/PZ2dlOzO+qqiohODMBz4tE7OPInCP7hBsRcFUg2y5uVikZpxueKv75+fn29Dz76cIUcjb6fCUlJbYocWVoaGgixqKZFET7BIDD4GsS9lHFx8d7MOeQRCLKLGeL+T9bZnlBxZy6Znmu8g9Yp0ZPv+xmRQAAAABJRU5ErkJggg==",C2="/Yoga-LandingPage-React-Vite/assets/piracanga-b1a075d5.svg",j2="/Yoga-LandingPage-React-Vite/assets/plantapra-6e85bfff.svg",b2="/Yoga-LandingPage-React-Vite/assets/farm-b13fe596.svg",_2="/Yoga-LandingPage-React-Vite/assets/gili-7954b564.svg";function P2(){return u.jsxs(h2,{id:"contatos",children:[u.jsx("h1",{className:"partner-title",children:"Parceiros"}),u.jsxs("div",{className:"partners-container",children:[u.jsx("img",{src:g2,alt:"Parceiro"}),u.jsx("img",{src:v2,alt:"Parceiro"}),u.jsx("img",{src:y2,alt:"Parceiro"}),u.jsx("img",{src:x2,alt:"Parceiro"}),u.jsx("img",{src:w2,alt:"Parceiro"}),u.jsx("img",{src:S2,alt:"Parceiro"}),u.jsx("img",{src:k2,alt:"Parceiro"}),u.jsx("img",{src:E2,alt:"Parceiro"}),u.jsx("img",{src:C2,alt:"Parceiro"}),u.jsx("img",{src:j2,alt:"Parceiro"}),u.jsx("img",{src:b2,alt:"Parceiro"}),u.jsx("img",{src:_2,alt:"Parceiro"})]}),u.jsxs("div",{className:"last-cta ",children:[u.jsx("span",{children:"Para parcerias entre em contato:"}),u.jsx("a",{href:"https://api.whatsapp.com/send/?phone=5531996793158",target:"_blank",rel:"noopener noreferrer",className:"last-btn",children:"converse comigo"})]}),u.jsx("img",{src:To,alt:"divider",className:"divider-btn"})]})}const T2="/Yoga-LandingPage-React-Vite/assets/yoga_iclub1-65b842c9.svg",O2=Y.footer`
width: 100%;
padding-top: 1.6rem;
padding-bottom: 1.6rem;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
padding-top: 2rem;
padding-bottom: 2rem;
background: var(--C4);
padding-left: 7.6rem;
padding-right: 7.6rem;
z-index: 99;
position: relative;
.footer-nav  {
  display: flex;
  gap: 2rem;
  padding: 0.4rem;
}
.footer-button img {
  width: 4rem;
  height: 4rem;
}
.footer-logo {
  width: 20.1rem;
  height: 5.1rem;
}
@media (max-width: 550px) {
  padding: 12px var(--spacing-s3, 24px) 8px var(--spacing-s3, 24px);
  .footer-logo {
  width: 151px;
  height: 4.2rem;
}
}
`;function R2(){return u.jsxs(O2,{children:[u.jsxs("nav",{className:"footer-nav",children:[u.jsx("a",{className:"footer-button",href:"https://www.instagram.com/isabellacayuela/",target:"_blank",rel:"noopener noreferrer",children:u.jsx("img",{src:Zm,alt:"Instagram"})}),u.jsx("a",{className:"footer-button",href:"https://api.whatsapp.com/send/?phone=5531996793158",target:"_blank",rel:"noopener noreferrer",children:u.jsx("img",{src:Jm,alt:"whatsapp"})}),u.jsx("a",{className:"footer-button",href:"https://www.youtube.com/@isabellacayuelayoga",target:"_blank",rel:"noopener noreferrer",children:u.jsx("img",{src:eh,alt:"youtube"})})]}),u.jsx("img",{src:T2,alt:"Logo",className:"footer-logo"})]})}const N2=Y.main`
  min-height: 100vh;
  width: 100%;
`;function I2(){return u.jsxs(N2,{children:[u.jsx(Tw,{}),u.jsx(Nw,{}),u.jsx(Ww,{}),u.jsx(n2,{}),u.jsx(m2,{}),u.jsx(P2,{}),u.jsx(R2,{})]})}function A2(){return u.jsxs(b0,{children:[u.jsx(ll,{path:"Yoga-LandingPage-React-Vite",element:u.jsx(I2,{})}),u.jsx(ll,{path:"/iclub",element:u.jsx(_w,{})})]})}function L2(){return u.jsx(T0,{children:u.jsx(A2,{})})}ms.createRoot(document.getElementById("root")).render(u.jsx(Ve.StrictMode,{children:u.jsx(L2,{})}));
