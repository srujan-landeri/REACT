(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function dw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ya={},fw={get exports(){return ya},set exports(t){ya=t}},cl={},z={},pw={get exports(){return z},set exports(t){z=t}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ks=Symbol.for("react.element"),mw=Symbol.for("react.portal"),gw=Symbol.for("react.fragment"),yw=Symbol.for("react.strict_mode"),vw=Symbol.for("react.profiler"),ww=Symbol.for("react.provider"),Ew=Symbol.for("react.context"),Tw=Symbol.for("react.forward_ref"),_w=Symbol.for("react.suspense"),Sw=Symbol.for("react.memo"),Iw=Symbol.for("react.lazy"),Af=Symbol.iterator;function kw(t){return t===null||typeof t!="object"?null:(t=Af&&t[Af]||t["@@iterator"],typeof t=="function"?t:null)}var Zm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},eg=Object.assign,tg={};function _i(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Zm}_i.prototype.isReactComponent={};_i.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};_i.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ng(){}ng.prototype=_i.prototype;function Ch(t,e,n){this.props=t,this.context=e,this.refs=tg,this.updater=n||Zm}var Nh=Ch.prototype=new ng;Nh.constructor=Ch;eg(Nh,_i.prototype);Nh.isPureReactComponent=!0;var Rf=Array.isArray,rg=Object.prototype.hasOwnProperty,Ah={current:null},ig={key:!0,ref:!0,__self:!0,__source:!0};function sg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rg.call(e,r)&&!ig.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ks,type:t,key:s,ref:o,props:i,_owner:Ah.current}}function Cw(t,e){return{$$typeof:Ks,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Rh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ks}function Nw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Df=/\/+/g;function au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Nw(""+t.key):e.toString(36)}function Xo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ks:case mw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+au(o,0):r,Rf(i)?(n="",t!=null&&(n=t.replace(Df,"$&/")+"/"),Xo(i,e,n,"",function(u){return u})):i!=null&&(Rh(i)&&(i=Cw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Df,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Rf(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+au(s,a);o+=Xo(s,e,n,l,i)}else if(l=kw(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+au(s,a++),o+=Xo(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Io(t,e,n){if(t==null)return t;var r=[],i=0;return Xo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Aw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Je={current:null},Yo={transition:null},Rw={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Yo,ReactCurrentOwner:Ah};W.Children={map:Io,forEach:function(t,e,n){Io(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Io(t,function(){e++}),e},toArray:function(t){return Io(t,function(e){return e})||[]},only:function(t){if(!Rh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=_i;W.Fragment=gw;W.Profiler=vw;W.PureComponent=Ch;W.StrictMode=yw;W.Suspense=_w;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Rw;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=eg({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ah.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rg.call(e,l)&&!ig.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ks,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:Ew,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:ww,_context:t},t.Consumer=t};W.createElement=sg;W.createFactory=function(t){var e=sg.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:Tw,render:t}};W.isValidElement=Rh;W.lazy=function(t){return{$$typeof:Iw,_payload:{_status:-1,_result:t},_init:Aw}};W.memo=function(t,e){return{$$typeof:Sw,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Yo.transition;Yo.transition={};try{t()}finally{Yo.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Je.current.useCallback(t,e)};W.useContext=function(t){return Je.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Je.current.useDeferredValue(t)};W.useEffect=function(t,e){return Je.current.useEffect(t,e)};W.useId=function(){return Je.current.useId()};W.useImperativeHandle=function(t,e,n){return Je.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Je.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Je.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Je.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Je.current.useReducer(t,e,n)};W.useRef=function(t){return Je.current.useRef(t)};W.useState=function(t){return Je.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Je.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Je.current.useTransition()};W.version="18.2.0";(function(t){t.exports=W})(pw);const Z=dw(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dw=z,Ow=Symbol.for("react.element"),Lw=Symbol.for("react.fragment"),Pw=Object.prototype.hasOwnProperty,xw=Dw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mw={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Pw.call(e,r)&&!Mw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Ow,type:t,key:s,ref:o,props:i,_owner:xw.current}}cl.Fragment=Lw;cl.jsx=og;cl.jsxs=og;(function(t){t.exports=cl})(fw);const K=ya.jsx,ht=ya.jsxs;var Zu={},ec={},$w={get exports(){return ec},set exports(t){ec=t}},vt={},tc={},Uw={get exports(){return tc},set exports(t){tc=t}},ag={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(A,M){var B=A.length;A.push(M);e:for(;0<B;){var de=B-1>>>1,Ie=A[de];if(0<i(Ie,M))A[de]=M,A[B]=Ie,B=de;else break e}}function n(A){return A.length===0?null:A[0]}function r(A){if(A.length===0)return null;var M=A[0],B=A.pop();if(B!==M){A[0]=B;e:for(var de=0,Ie=A.length,_o=Ie>>>1;de<_o;){var Xn=2*(de+1)-1,ou=A[Xn],Yn=Xn+1,So=A[Yn];if(0>i(ou,B))Yn<Ie&&0>i(So,ou)?(A[de]=So,A[Yn]=B,de=Yn):(A[de]=ou,A[Xn]=B,de=Xn);else if(Yn<Ie&&0>i(So,B))A[de]=So,A[Yn]=B,de=Yn;else break e}}return M}function i(A,M){var B=A.sortIndex-M.sortIndex;return B!==0?B:A.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,m=!1,g=!1,v=!1,E=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(A){for(var M=n(u);M!==null;){if(M.callback===null)r(u);else if(M.startTime<=A)r(u),M.sortIndex=M.expirationTime,e(l,M);else break;M=n(u)}}function w(A){if(v=!1,y(A),!g)if(n(l)!==null)g=!0,Re(T);else{var M=n(u);M!==null&&ut(w,M.startTime-A)}}function T(A,M){g=!1,v&&(v=!1,p(N),N=-1),m=!0;var B=d;try{for(y(M),h=n(l);h!==null&&(!(h.expirationTime>M)||A&&!ye());){var de=h.callback;if(typeof de=="function"){h.callback=null,d=h.priorityLevel;var Ie=de(h.expirationTime<=M);M=t.unstable_now(),typeof Ie=="function"?h.callback=Ie:h===n(l)&&r(l),y(M)}else r(l);h=n(l)}if(h!==null)var _o=!0;else{var Xn=n(u);Xn!==null&&ut(w,Xn.startTime-M),_o=!1}return _o}finally{h=null,d=B,m=!1}}var k=!1,C=null,N=-1,G=5,F=-1;function ye(){return!(t.unstable_now()-F<G)}function $e(){if(C!==null){var A=t.unstable_now();F=A;var M=!0;try{M=C(!0,A)}finally{M?et():(k=!1,C=null)}}else k=!1}var et;if(typeof f=="function")et=function(){f($e)};else if(typeof MessageChannel<"u"){var tt=new MessageChannel,Kt=tt.port2;tt.port1.onmessage=$e,et=function(){Kt.postMessage(null)}}else et=function(){E($e,0)};function Re(A){C=A,k||(k=!0,et())}function ut(A,M){N=E(function(){A(t.unstable_now())},M)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(A){A.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,Re(T))},t.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<A?Math.floor(1e3/A):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(A){switch(d){case 1:case 2:case 3:var M=3;break;default:M=d}var B=d;d=M;try{return A()}finally{d=B}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(A,M){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var B=d;d=A;try{return M()}finally{d=B}},t.unstable_scheduleCallback=function(A,M,B){var de=t.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?de+B:de):B=de,A){case 1:var Ie=-1;break;case 2:Ie=250;break;case 5:Ie=1073741823;break;case 4:Ie=1e4;break;default:Ie=5e3}return Ie=B+Ie,A={id:c++,callback:M,priorityLevel:A,startTime:B,expirationTime:Ie,sortIndex:-1},B>de?(A.sortIndex=B,e(u,A),n(l)===null&&A===n(u)&&(v?(p(N),N=-1):v=!0,ut(w,B-de))):(A.sortIndex=Ie,e(l,A),g||m||(g=!0,Re(T))),A},t.unstable_shouldYield=ye,t.unstable_wrapCallback=function(A){var M=d;return function(){var B=d;d=M;try{return A.apply(this,arguments)}finally{d=B}}}})(ag);(function(t){t.exports=ag})(Uw);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg=z,gt=tc;function _(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ug=new Set,ps={};function Cr(t,e){si(t,e),si(t+"Capture",e)}function si(t,e){for(ps[t]=e,t=0;t<e.length;t++)ug.add(e[t])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nc=Object.prototype.hasOwnProperty,Fw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Of={},Lf={};function bw(t){return nc.call(Lf,t)?!0:nc.call(Of,t)?!1:Fw.test(t)?Lf[t]=!0:(Of[t]=!0,!1)}function Vw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zw(t,e,n,r){if(e===null||typeof e>"u"||Vw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Ze(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){xe[t]=new Ze(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];xe[e]=new Ze(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){xe[t]=new Ze(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){xe[t]=new Ze(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){xe[t]=new Ze(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){xe[t]=new Ze(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){xe[t]=new Ze(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){xe[t]=new Ze(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){xe[t]=new Ze(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dh=/[\-:]([a-z])/g;function Oh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dh,Oh);xe[e]=new Ze(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dh,Oh);xe[e]=new Ze(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dh,Oh);xe[e]=new Ze(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){xe[t]=new Ze(t,1,!1,t.toLowerCase(),null,!1,!1)});xe.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){xe[t]=new Ze(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=xe.hasOwnProperty(e)?xe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zw(e,n,i,r)&&(n=null),r||i===null?bw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var dn=lg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ko=Symbol.for("react.element"),Mr=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),Ph=Symbol.for("react.strict_mode"),rc=Symbol.for("react.profiler"),cg=Symbol.for("react.provider"),hg=Symbol.for("react.context"),xh=Symbol.for("react.forward_ref"),ic=Symbol.for("react.suspense"),sc=Symbol.for("react.suspense_list"),Mh=Symbol.for("react.memo"),gn=Symbol.for("react.lazy"),dg=Symbol.for("react.offscreen"),Pf=Symbol.iterator;function Li(t){return t===null||typeof t!="object"?null:(t=Pf&&t[Pf]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,lu;function zi(t){if(lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lu=e&&e[1]||""}return`
`+lu+t}var uu=!1;function cu(t,e){if(!t||uu)return"";uu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{uu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?zi(t):""}function Bw(t){switch(t.tag){case 5:return zi(t.type);case 16:return zi("Lazy");case 13:return zi("Suspense");case 19:return zi("SuspenseList");case 0:case 2:case 15:return t=cu(t.type,!1),t;case 11:return t=cu(t.type.render,!1),t;case 1:return t=cu(t.type,!0),t;default:return""}}function oc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Mr:return"Portal";case rc:return"Profiler";case Ph:return"StrictMode";case ic:return"Suspense";case sc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case hg:return(t.displayName||"Context")+".Consumer";case cg:return(t._context.displayName||"Context")+".Provider";case xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mh:return e=t.displayName||null,e!==null?e:oc(t.type)||"Memo";case gn:e=t._payload,t=t._init;try{return oc(t(e))}catch{}}return null}function jw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oc(e);case 8:return e===Ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function bn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function fg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Hw(t){var e=fg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=Hw(t))}function pg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=fg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ac(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function xf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=bn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mg(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function lc(t,e){mg(t,e);var n=bn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?uc(t,e.type,n):e.hasOwnProperty("defaultValue")&&uc(t,e.type,bn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function uc(t,e,n){(e!=="number"||va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Bi=Array.isArray;function Qr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+bn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function cc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(_(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function $f(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(_(92));if(Bi(n)){if(1<n.length)throw Error(_(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:bn(n)}}function gg(t,e){var n=bn(e.value),r=bn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Uf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var No,vg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(No=No||document.createElement("div"),No.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=No.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ms(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Yi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ww=["Webkit","ms","Moz","O"];Object.keys(Yi).forEach(function(t){Ww.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Yi[e]=Yi[t]})});function wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Yi.hasOwnProperty(t)&&Yi[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var qw=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dc(t,e){if(e){if(qw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(_(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(_(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(_(61))}if(e.style!=null&&typeof e.style!="object")throw Error(_(62))}}function fc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var pc=null;function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var mc=null,Xr=null,Yr=null;function Ff(t){if(t=Xs(t)){if(typeof mc!="function")throw Error(_(280));var e=t.stateNode;e&&(e=ml(e),mc(t.stateNode,t.type,e))}}function Tg(t){Xr?Yr?Yr.push(t):Yr=[t]:Xr=t}function _g(){if(Xr){var t=Xr,e=Yr;if(Yr=Xr=null,Ff(t),e)for(t=0;t<e.length;t++)Ff(e[t])}}function Sg(t,e){return t(e)}function Ig(){}var hu=!1;function kg(t,e,n){if(hu)return t(e,n);hu=!0;try{return Sg(t,e,n)}finally{hu=!1,(Xr!==null||Yr!==null)&&(Ig(),_g())}}function gs(t,e){var n=t.stateNode;if(n===null)return null;var r=ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(_(231,e,typeof n));return n}var gc=!1;if(nn)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){gc=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{gc=!1}function Kw(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ji=!1,wa=null,Ea=!1,yc=null,Gw={onError:function(t){Ji=!0,wa=t}};function Qw(t,e,n,r,i,s,o,a,l){Ji=!1,wa=null,Kw.apply(Gw,arguments)}function Xw(t,e,n,r,i,s,o,a,l){if(Qw.apply(this,arguments),Ji){if(Ji){var u=wa;Ji=!1,wa=null}else throw Error(_(198));Ea||(Ea=!0,yc=u)}}function Nr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function bf(t){if(Nr(t)!==t)throw Error(_(188))}function Yw(t){var e=t.alternate;if(!e){if(e=Nr(t),e===null)throw Error(_(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return bf(i),t;if(s===r)return bf(i),e;s=s.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?t:e}function Ng(t){return t=Yw(t),t!==null?Ag(t):null}function Ag(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ag(t);if(e!==null)return e;t=t.sibling}return null}var Rg=gt.unstable_scheduleCallback,Vf=gt.unstable_cancelCallback,Jw=gt.unstable_shouldYield,Zw=gt.unstable_requestPaint,fe=gt.unstable_now,eE=gt.unstable_getCurrentPriorityLevel,Uh=gt.unstable_ImmediatePriority,Dg=gt.unstable_UserBlockingPriority,Ta=gt.unstable_NormalPriority,tE=gt.unstable_LowPriority,Og=gt.unstable_IdlePriority,hl=null,bt=null;function nE(t){if(bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(hl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ot=Math.clz32?Math.clz32:sE,rE=Math.log,iE=Math.LN2;function sE(t){return t>>>=0,t===0?32:31-(rE(t)/iE|0)|0}var Ao=64,Ro=4194304;function ji(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _a(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ji(a):(s&=o,s!==0&&(r=ji(s)))}else o=n&~i,o!==0?r=ji(o):s!==0&&(r=ji(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ot(e),i=1<<n,r|=t[n],e&=~i;return r}function oE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ot(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=oE(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function vc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Lg(){var t=Ao;return Ao<<=1,!(Ao&4194240)&&(Ao=64),t}function du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Gs(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ot(e),t[e]=n}function lE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ot(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Fh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ot(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var J=0;function Pg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xg,bh,Mg,$g,Ug,wc=!1,Do=[],Nn=null,An=null,Rn=null,ys=new Map,vs=new Map,vn=[],uE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zf(t,e){switch(t){case"focusin":case"focusout":Nn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":ys.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":vs.delete(e.pointerId)}}function xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Xs(e),e!==null&&bh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function cE(t,e,n,r,i){switch(e){case"focusin":return Nn=xi(Nn,t,e,n,r,i),!0;case"dragenter":return An=xi(An,t,e,n,r,i),!0;case"mouseover":return Rn=xi(Rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ys.set(s,xi(ys.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,vs.set(s,xi(vs.get(s)||null,t,e,n,r,i)),!0}return!1}function Fg(t){var e=nr(t.target);if(e!==null){var n=Nr(e);if(n!==null){if(e=n.tag,e===13){if(e=Cg(n),e!==null){t.blockedOn=e,Ug(t.priority,function(){Mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Jo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ec(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);pc=r,n.target.dispatchEvent(r),pc=null}else return e=Xs(n),e!==null&&bh(e),t.blockedOn=n,!1;e.shift()}return!0}function Bf(t,e,n){Jo(t)&&n.delete(e)}function hE(){wc=!1,Nn!==null&&Jo(Nn)&&(Nn=null),An!==null&&Jo(An)&&(An=null),Rn!==null&&Jo(Rn)&&(Rn=null),ys.forEach(Bf),vs.forEach(Bf)}function Mi(t,e){t.blockedOn===e&&(t.blockedOn=null,wc||(wc=!0,gt.unstable_scheduleCallback(gt.unstable_NormalPriority,hE)))}function ws(t){function e(i){return Mi(i,t)}if(0<Do.length){Mi(Do[0],t);for(var n=1;n<Do.length;n++){var r=Do[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Nn!==null&&Mi(Nn,t),An!==null&&Mi(An,t),Rn!==null&&Mi(Rn,t),ys.forEach(e),vs.forEach(e),n=0;n<vn.length;n++)r=vn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<vn.length&&(n=vn[0],n.blockedOn===null);)Fg(n),n.blockedOn===null&&vn.shift()}var Jr=dn.ReactCurrentBatchConfig,Sa=!0;function dE(t,e,n,r){var i=J,s=Jr.transition;Jr.transition=null;try{J=1,Vh(t,e,n,r)}finally{J=i,Jr.transition=s}}function fE(t,e,n,r){var i=J,s=Jr.transition;Jr.transition=null;try{J=4,Vh(t,e,n,r)}finally{J=i,Jr.transition=s}}function Vh(t,e,n,r){if(Sa){var i=Ec(t,e,n,r);if(i===null)_u(t,e,r,Ia,n),zf(t,r);else if(cE(i,t,e,n,r))r.stopPropagation();else if(zf(t,r),e&4&&-1<uE.indexOf(t)){for(;i!==null;){var s=Xs(i);if(s!==null&&xg(s),s=Ec(t,e,n,r),s===null&&_u(t,e,r,Ia,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else _u(t,e,r,null,n)}}var Ia=null;function Ec(t,e,n,r){if(Ia=null,t=$h(r),t=nr(t),t!==null)if(e=Nr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ia=t,null}function bg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eE()){case Uh:return 1;case Dg:return 4;case Ta:case tE:return 16;case Og:return 536870912;default:return 16}default:return 16}}var In=null,zh=null,Zo=null;function Vg(){if(Zo)return Zo;var t,e=zh,n=e.length,r,i="value"in In?In.value:In.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Zo=i.slice(t,1<r?1-r:void 0)}function ea(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oo(){return!0}function jf(){return!1}function wt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oo:jf,this.isPropagationStopped=jf,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oo)},persist:function(){},isPersistent:Oo}),e}var Si={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Bh=wt(Si),Qs=le({},Si,{view:0,detail:0}),pE=wt(Qs),fu,pu,$i,dl=le({},Qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$i&&($i&&t.type==="mousemove"?(fu=t.screenX-$i.screenX,pu=t.screenY-$i.screenY):pu=fu=0,$i=t),fu)},movementY:function(t){return"movementY"in t?t.movementY:pu}}),Hf=wt(dl),mE=le({},dl,{dataTransfer:0}),gE=wt(mE),yE=le({},Qs,{relatedTarget:0}),mu=wt(yE),vE=le({},Si,{animationName:0,elapsedTime:0,pseudoElement:0}),wE=wt(vE),EE=le({},Si,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),TE=wt(EE),_E=le({},Si,{data:0}),Wf=wt(_E),SE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},IE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kE[t])?!!e[t]:!1}function jh(){return CE}var NE=le({},Qs,{key:function(t){if(t.key){var e=SE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ea(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?IE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?ea(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ea(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AE=wt(NE),RE=le({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qf=wt(RE),DE=le({},Qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),OE=wt(DE),LE=le({},Si,{propertyName:0,elapsedTime:0,pseudoElement:0}),PE=wt(LE),xE=le({},dl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ME=wt(xE),$E=[9,13,27,32],Hh=nn&&"CompositionEvent"in window,Zi=null;nn&&"documentMode"in document&&(Zi=document.documentMode);var UE=nn&&"TextEvent"in window&&!Zi,zg=nn&&(!Hh||Zi&&8<Zi&&11>=Zi),Kf=String.fromCharCode(32),Gf=!1;function Bg(t,e){switch(t){case"keyup":return $E.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ur=!1;function FE(t,e){switch(t){case"compositionend":return jg(e);case"keypress":return e.which!==32?null:(Gf=!0,Kf);case"textInput":return t=e.data,t===Kf&&Gf?null:t;default:return null}}function bE(t,e){if(Ur)return t==="compositionend"||!Hh&&Bg(t,e)?(t=Vg(),Zo=zh=In=null,Ur=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return zg&&e.locale!=="ko"?null:e.data;default:return null}}var VE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Qf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!VE[t.type]:e==="textarea"}function Hg(t,e,n,r){Tg(r),e=ka(e,"onChange"),0<e.length&&(n=new Bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var es=null,Es=null;function zE(t){ty(t,0)}function fl(t){var e=Vr(t);if(pg(e))return t}function BE(t,e){if(t==="change")return e}var Wg=!1;if(nn){var gu;if(nn){var yu="oninput"in document;if(!yu){var Xf=document.createElement("div");Xf.setAttribute("oninput","return;"),yu=typeof Xf.oninput=="function"}gu=yu}else gu=!1;Wg=gu&&(!document.documentMode||9<document.documentMode)}function Yf(){es&&(es.detachEvent("onpropertychange",qg),Es=es=null)}function qg(t){if(t.propertyName==="value"&&fl(Es)){var e=[];Hg(e,Es,t,$h(t)),kg(zE,e)}}function jE(t,e,n){t==="focusin"?(Yf(),es=e,Es=n,es.attachEvent("onpropertychange",qg)):t==="focusout"&&Yf()}function HE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return fl(Es)}function WE(t,e){if(t==="click")return fl(e)}function qE(t,e){if(t==="input"||t==="change")return fl(e)}function KE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Pt=typeof Object.is=="function"?Object.is:KE;function Ts(t,e){if(Pt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!nc.call(e,i)||!Pt(t[i],e[i]))return!1}return!0}function Jf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Zf(t,e){var n=Jf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Jf(n)}}function Kg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Kg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Gg(){for(var t=window,e=va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=va(t.document)}return e}function Wh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function GE(t){var e=Gg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Kg(n.ownerDocument.documentElement,n)){if(r!==null&&Wh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Zf(n,s);var o=Zf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QE=nn&&"documentMode"in document&&11>=document.documentMode,Fr=null,Tc=null,ts=null,_c=!1;function ep(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_c||Fr==null||Fr!==va(r)||(r=Fr,"selectionStart"in r&&Wh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ts&&Ts(ts,r)||(ts=r,r=ka(Tc,"onSelect"),0<r.length&&(e=new Bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fr)))}function Lo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var br={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},vu={},Qg={};nn&&(Qg=document.createElement("div").style,"AnimationEvent"in window||(delete br.animationend.animation,delete br.animationiteration.animation,delete br.animationstart.animation),"TransitionEvent"in window||delete br.transitionend.transition);function pl(t){if(vu[t])return vu[t];if(!br[t])return t;var e=br[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Qg)return vu[t]=e[n];return t}var Xg=pl("animationend"),Yg=pl("animationiteration"),Jg=pl("animationstart"),Zg=pl("transitionend"),ey=new Map,tp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hn(t,e){ey.set(t,e),Cr(e,[t])}for(var wu=0;wu<tp.length;wu++){var Eu=tp[wu],XE=Eu.toLowerCase(),YE=Eu[0].toUpperCase()+Eu.slice(1);Hn(XE,"on"+YE)}Hn(Xg,"onAnimationEnd");Hn(Yg,"onAnimationIteration");Hn(Jg,"onAnimationStart");Hn("dblclick","onDoubleClick");Hn("focusin","onFocus");Hn("focusout","onBlur");Hn(Zg,"onTransitionEnd");si("onMouseEnter",["mouseout","mouseover"]);si("onMouseLeave",["mouseout","mouseover"]);si("onPointerEnter",["pointerout","pointerover"]);si("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hi));function np(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Xw(r,e,void 0,t),t.currentTarget=null}function ty(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;np(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;np(i,a,u),s=l}}}if(Ea)throw t=yc,Ea=!1,yc=null,t}function ne(t,e){var n=e[Nc];n===void 0&&(n=e[Nc]=new Set);var r=t+"__bubble";n.has(r)||(ny(e,t,2,!1),n.add(r))}function Tu(t,e,n){var r=0;e&&(r|=4),ny(n,t,r,e)}var Po="_reactListening"+Math.random().toString(36).slice(2);function _s(t){if(!t[Po]){t[Po]=!0,ug.forEach(function(n){n!=="selectionchange"&&(JE.has(n)||Tu(n,!1,t),Tu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Po]||(e[Po]=!0,Tu("selectionchange",!1,e))}}function ny(t,e,n,r){switch(bg(e)){case 1:var i=dE;break;case 4:i=fE;break;default:i=Vh}n=i.bind(null,e,n,t),i=void 0,!gc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function _u(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=nr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}kg(function(){var u=s,c=$h(n),h=[];e:{var d=ey.get(t);if(d!==void 0){var m=Bh,g=t;switch(t){case"keypress":if(ea(n)===0)break e;case"keydown":case"keyup":m=AE;break;case"focusin":g="focus",m=mu;break;case"focusout":g="blur",m=mu;break;case"beforeblur":case"afterblur":m=mu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Hf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=gE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=OE;break;case Xg:case Yg:case Jg:m=wE;break;case Zg:m=PE;break;case"scroll":m=pE;break;case"wheel":m=ME;break;case"copy":case"cut":case"paste":m=TE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=qf}var v=(e&4)!==0,E=!v&&t==="scroll",p=v?d!==null?d+"Capture":null:d;v=[];for(var f=u,y;f!==null;){y=f;var w=y.stateNode;if(y.tag===5&&w!==null&&(y=w,p!==null&&(w=gs(f,p),w!=null&&v.push(Ss(f,w,y)))),E)break;f=f.return}0<v.length&&(d=new m(d,g,null,n,c),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==pc&&(g=n.relatedTarget||n.fromElement)&&(nr(g)||g[rn]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?nr(g):null,g!==null&&(E=Nr(g),g!==E||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=Hf,w="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(v=qf,w="onPointerLeave",p="onPointerEnter",f="pointer"),E=m==null?d:Vr(m),y=g==null?d:Vr(g),d=new v(w,f+"leave",m,n,c),d.target=E,d.relatedTarget=y,w=null,nr(c)===u&&(v=new v(p,f+"enter",g,n,c),v.target=y,v.relatedTarget=E,w=v),E=w,m&&g)t:{for(v=m,p=g,f=0,y=v;y;y=Lr(y))f++;for(y=0,w=p;w;w=Lr(w))y++;for(;0<f-y;)v=Lr(v),f--;for(;0<y-f;)p=Lr(p),y--;for(;f--;){if(v===p||p!==null&&v===p.alternate)break t;v=Lr(v),p=Lr(p)}v=null}else v=null;m!==null&&rp(h,d,m,v,!1),g!==null&&E!==null&&rp(h,E,g,v,!0)}}e:{if(d=u?Vr(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=BE;else if(Qf(d))if(Wg)T=qE;else{T=HE;var k=jE}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=WE);if(T&&(T=T(t,u))){Hg(h,T,n,c);break e}k&&k(t,d,u),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&uc(d,"number",d.value)}switch(k=u?Vr(u):window,t){case"focusin":(Qf(k)||k.contentEditable==="true")&&(Fr=k,Tc=u,ts=null);break;case"focusout":ts=Tc=Fr=null;break;case"mousedown":_c=!0;break;case"contextmenu":case"mouseup":case"dragend":_c=!1,ep(h,n,c);break;case"selectionchange":if(QE)break;case"keydown":case"keyup":ep(h,n,c)}var C;if(Hh)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Ur?Bg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(zg&&n.locale!=="ko"&&(Ur||N!=="onCompositionStart"?N==="onCompositionEnd"&&Ur&&(C=Vg()):(In=c,zh="value"in In?In.value:In.textContent,Ur=!0)),k=ka(u,N),0<k.length&&(N=new Wf(N,t,null,n,c),h.push({event:N,listeners:k}),C?N.data=C:(C=jg(n),C!==null&&(N.data=C)))),(C=UE?FE(t,n):bE(t,n))&&(u=ka(u,"onBeforeInput"),0<u.length&&(c=new Wf("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=C))}ty(h,e)})}function Ss(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ka(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=gs(t,n),s!=null&&r.unshift(Ss(t,s,i)),s=gs(t,e),s!=null&&r.push(Ss(t,s,i))),t=t.return}return r}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=gs(n,s),l!=null&&o.unshift(Ss(n,l,a))):i||(l=gs(n,s),l!=null&&o.push(Ss(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZE=/\r\n?/g,eT=/\u0000|\uFFFD/g;function ip(t){return(typeof t=="string"?t:""+t).replace(ZE,`
`).replace(eT,"")}function xo(t,e,n){if(e=ip(e),ip(t)!==e&&n)throw Error(_(425))}function Ca(){}var Sc=null,Ic=null;function kc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cc=typeof setTimeout=="function"?setTimeout:void 0,tT=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,nT=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(t){return sp.resolve(null).then(t).catch(rT)}:Cc;function rT(t){setTimeout(function(){throw t})}function Su(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ws(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ws(e)}function Dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function op(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ii=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Ii,Is="__reactProps$"+Ii,rn="__reactContainer$"+Ii,Nc="__reactEvents$"+Ii,iT="__reactListeners$"+Ii,sT="__reactHandles$"+Ii;function nr(t){var e=t[Ut];if(e)return e;for(var n=t.parentNode;n;){if(e=n[rn]||n[Ut]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=op(t);t!==null;){if(n=t[Ut])return n;t=op(t)}return e}t=n,n=t.parentNode}return null}function Xs(t){return t=t[Ut]||t[rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(_(33))}function ml(t){return t[Is]||null}var Ac=[],zr=-1;function Wn(t){return{current:t}}function re(t){0>zr||(t.current=Ac[zr],Ac[zr]=null,zr--)}function ee(t,e){zr++,Ac[zr]=t.current,t.current=e}var Vn={},We=Wn(Vn),ot=Wn(!1),fr=Vn;function oi(t,e){var n=t.type.contextTypes;if(!n)return Vn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function at(t){return t=t.childContextTypes,t!=null}function Na(){re(ot),re(We)}function ap(t,e,n){if(We.current!==Vn)throw Error(_(168));ee(We,e),ee(ot,n)}function ry(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,jw(t)||"Unknown",i));return le({},n,r)}function Aa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Vn,fr=We.current,ee(We,t),ee(ot,ot.current),!0}function lp(t,e,n){var r=t.stateNode;if(!r)throw Error(_(169));n?(t=ry(t,e,fr),r.__reactInternalMemoizedMergedChildContext=t,re(ot),re(We),ee(We,t)):re(ot),ee(ot,n)}var Qt=null,gl=!1,Iu=!1;function iy(t){Qt===null?Qt=[t]:Qt.push(t)}function oT(t){gl=!0,iy(t)}function qn(){if(!Iu&&Qt!==null){Iu=!0;var t=0,e=J;try{var n=Qt;for(J=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Qt=null,gl=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(t+1)),Rg(Uh,qn),i}finally{J=e,Iu=!1}}return null}var Br=[],jr=0,Ra=null,Da=0,Tt=[],_t=0,pr=null,Xt=1,Yt="";function Jn(t,e){Br[jr++]=Da,Br[jr++]=Ra,Ra=t,Da=e}function sy(t,e,n){Tt[_t++]=Xt,Tt[_t++]=Yt,Tt[_t++]=pr,pr=t;var r=Xt;t=Yt;var i=32-Ot(r)-1;r&=~(1<<i),n+=1;var s=32-Ot(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Xt=1<<32-Ot(e)+i|n<<i|r,Yt=s+t}else Xt=1<<s|n<<i|r,Yt=t}function qh(t){t.return!==null&&(Jn(t,1),sy(t,1,0))}function Kh(t){for(;t===Ra;)Ra=Br[--jr],Br[jr]=null,Da=Br[--jr],Br[jr]=null;for(;t===pr;)pr=Tt[--_t],Tt[_t]=null,Yt=Tt[--_t],Tt[_t]=null,Xt=Tt[--_t],Tt[_t]=null}var pt=null,dt=null,ie=!1,Dt=null;function oy(t,e){var n=St(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function up(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,pt=t,dt=Dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,pt=t,dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=pr!==null?{id:Xt,overflow:Yt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=St(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,pt=t,dt=null,!0):!1;default:return!1}}function Rc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Dc(t){if(ie){var e=dt;if(e){var n=e;if(!up(t,e)){if(Rc(t))throw Error(_(418));e=Dn(n.nextSibling);var r=pt;e&&up(t,e)?oy(r,n):(t.flags=t.flags&-4097|2,ie=!1,pt=t)}}else{if(Rc(t))throw Error(_(418));t.flags=t.flags&-4097|2,ie=!1,pt=t}}}function cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;pt=t}function Mo(t){if(t!==pt)return!1;if(!ie)return cp(t),ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!kc(t.type,t.memoizedProps)),e&&(e=dt)){if(Rc(t))throw ay(),Error(_(418));for(;e;)oy(t,e),e=Dn(e.nextSibling)}if(cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(_(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dt=Dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dt=null}}else dt=pt?Dn(t.stateNode.nextSibling):null;return!0}function ay(){for(var t=dt;t;)t=Dn(t.nextSibling)}function ai(){dt=pt=null,ie=!1}function Gh(t){Dt===null?Dt=[t]:Dt.push(t)}var aT=dn.ReactCurrentBatchConfig;function At(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Oa=Wn(null),La=null,Hr=null,Qh=null;function Xh(){Qh=Hr=La=null}function Yh(t){var e=Oa.current;re(Oa),t._currentValue=e}function Oc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Zr(t,e){La=t,Qh=Hr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(it=!0),t.firstContext=null)}function kt(t){var e=t._currentValue;if(Qh!==t)if(t={context:t,memoizedValue:e,next:null},Hr===null){if(La===null)throw Error(_(308));Hr=t,La.dependencies={lanes:0,firstContext:t}}else Hr=Hr.next=t;return e}var rr=null;function Jh(t){rr===null?rr=[t]:rr.push(t)}function ly(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Jh(e)):(n.next=i.next,i.next=n),e.interleaved=n,sn(t,r)}function sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var yn=!1;function Zh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function tn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function On(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,sn(t,n)}return i=r.interleaved,i===null?(e.next=e,Jh(r)):(e.next=i.next,i.next=e),r.interleaved=e,sn(t,n)}function ta(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}function hp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Pa(t,e,n,r){var i=t.updateQueue;yn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,v=a;switch(d=e,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(m,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,d=typeof g=="function"?g.call(m,h,d):g,d==null)break e;h=le({},h,d);break e;case 2:yn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=h):c=c.next=m,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);gr|=o,t.lanes=o,t.memoizedState=h}}function dp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var cy=new lg.Component().refs;function Lc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?Nr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Pn(t),s=tn(r,i);s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Lt(e,t,i,r),ta(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ye(),i=Pn(t),s=tn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=On(t,s,i),e!==null&&(Lt(e,t,i,r),ta(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ye(),r=Pn(t),i=tn(n,r);i.tag=2,e!=null&&(i.callback=e),e=On(t,i,r),e!==null&&(Lt(e,t,r,n),ta(e,t,r))}};function fp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ts(n,r)||!Ts(i,s):!0}function hy(t,e,n){var r=!1,i=Vn,s=e.contextType;return typeof s=="object"&&s!==null?s=kt(s):(i=at(e)?fr:We.current,r=e.contextTypes,s=(r=r!=null)?oi(t,i):Vn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=cy,Zh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=kt(s):(s=at(e)?fr:We.current,i.context=oi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Lc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),Pa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ui(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===cy&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,t))}return t}function $o(t,e){throw t=Object.prototype.toString.call(e),Error(_(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function mp(t){var e=t._init;return e(t._payload)}function dy(t){function e(p,f){if(t){var y=p.deletions;y===null?(p.deletions=[f],p.flags|=16):y.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=xn(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags|=2,f):y):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,y,w){return f===null||f.tag!==6?(f=Ou(y,p.mode,w),f.return=p,f):(f=i(f,y),f.return=p,f)}function l(p,f,y,w){var T=y.type;return T===$r?c(p,f,y.props.children,w,y.key):f!==null&&(f.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gn&&mp(T)===f.type)?(w=i(f,y.props),w.ref=Ui(p,f,y),w.return=p,w):(w=aa(y.type,y.key,y.props,null,p.mode,w),w.ref=Ui(p,f,y),w.return=p,w)}function u(p,f,y,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=Lu(y,p.mode,w),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,w,T){return f===null||f.tag!==7?(f=ur(y,p.mode,w,T),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Ou(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ko:return y=aa(f.type,f.key,f.props,null,p.mode,y),y.ref=Ui(p,null,f),y.return=p,y;case Mr:return f=Lu(f,p.mode,y),f.return=p,f;case gn:var w=f._init;return h(p,w(f._payload),y)}if(Bi(f)||Li(f))return f=ur(f,p.mode,y,null),f.return=p,f;$o(p,f)}return null}function d(p,f,y,w){var T=f!==null?f.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(p,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:return y.key===T?l(p,f,y,w):null;case Mr:return y.key===T?u(p,f,y,w):null;case gn:return T=y._init,d(p,f,T(y._payload),w)}if(Bi(y)||Li(y))return T!==null?null:c(p,f,y,w,null);$o(p,y)}return null}function m(p,f,y,w,T){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(y)||null,a(f,p,""+w,T);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ko:return p=p.get(w.key===null?y:w.key)||null,l(f,p,w,T);case Mr:return p=p.get(w.key===null?y:w.key)||null,u(f,p,w,T);case gn:var k=w._init;return m(p,f,y,k(w._payload),T)}if(Bi(w)||Li(w))return p=p.get(y)||null,c(f,p,w,T,null);$o(f,w)}return null}function g(p,f,y,w){for(var T=null,k=null,C=f,N=f=0,G=null;C!==null&&N<y.length;N++){C.index>N?(G=C,C=null):G=C.sibling;var F=d(p,C,y[N],w);if(F===null){C===null&&(C=G);break}t&&C&&F.alternate===null&&e(p,C),f=s(F,f,N),k===null?T=F:k.sibling=F,k=F,C=G}if(N===y.length)return n(p,C),ie&&Jn(p,N),T;if(C===null){for(;N<y.length;N++)C=h(p,y[N],w),C!==null&&(f=s(C,f,N),k===null?T=C:k.sibling=C,k=C);return ie&&Jn(p,N),T}for(C=r(p,C);N<y.length;N++)G=m(C,p,N,y[N],w),G!==null&&(t&&G.alternate!==null&&C.delete(G.key===null?N:G.key),f=s(G,f,N),k===null?T=G:k.sibling=G,k=G);return t&&C.forEach(function(ye){return e(p,ye)}),ie&&Jn(p,N),T}function v(p,f,y,w){var T=Li(y);if(typeof T!="function")throw Error(_(150));if(y=T.call(y),y==null)throw Error(_(151));for(var k=T=null,C=f,N=f=0,G=null,F=y.next();C!==null&&!F.done;N++,F=y.next()){C.index>N?(G=C,C=null):G=C.sibling;var ye=d(p,C,F.value,w);if(ye===null){C===null&&(C=G);break}t&&C&&ye.alternate===null&&e(p,C),f=s(ye,f,N),k===null?T=ye:k.sibling=ye,k=ye,C=G}if(F.done)return n(p,C),ie&&Jn(p,N),T;if(C===null){for(;!F.done;N++,F=y.next())F=h(p,F.value,w),F!==null&&(f=s(F,f,N),k===null?T=F:k.sibling=F,k=F);return ie&&Jn(p,N),T}for(C=r(p,C);!F.done;N++,F=y.next())F=m(C,p,N,F.value,w),F!==null&&(t&&F.alternate!==null&&C.delete(F.key===null?N:F.key),f=s(F,f,N),k===null?T=F:k.sibling=F,k=F);return t&&C.forEach(function($e){return e(p,$e)}),ie&&Jn(p,N),T}function E(p,f,y,w){if(typeof y=="object"&&y!==null&&y.type===$r&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ko:e:{for(var T=y.key,k=f;k!==null;){if(k.key===T){if(T=y.type,T===$r){if(k.tag===7){n(p,k.sibling),f=i(k,y.props.children),f.return=p,p=f;break e}}else if(k.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===gn&&mp(T)===k.type){n(p,k.sibling),f=i(k,y.props),f.ref=Ui(p,k,y),f.return=p,p=f;break e}n(p,k);break}else e(p,k);k=k.sibling}y.type===$r?(f=ur(y.props.children,p.mode,w,y.key),f.return=p,p=f):(w=aa(y.type,y.key,y.props,null,p.mode,w),w.ref=Ui(p,f,y),w.return=p,p=w)}return o(p);case Mr:e:{for(k=y.key;f!==null;){if(f.key===k)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=Lu(y,p.mode,w),f.return=p,p=f}return o(p);case gn:return k=y._init,E(p,f,k(y._payload),w)}if(Bi(y))return g(p,f,y,w);if(Li(y))return v(p,f,y,w);$o(p,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=Ou(y,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return E}var li=dy(!0),fy=dy(!1),Ys={},Vt=Wn(Ys),ks=Wn(Ys),Cs=Wn(Ys);function ir(t){if(t===Ys)throw Error(_(174));return t}function ed(t,e){switch(ee(Cs,e),ee(ks,t),ee(Vt,Ys),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hc(e,t)}re(Vt),ee(Vt,e)}function ui(){re(Vt),re(ks),re(Cs)}function py(t){ir(Cs.current);var e=ir(Vt.current),n=hc(e,t.type);e!==n&&(ee(ks,t),ee(Vt,n))}function td(t){ks.current===t&&(re(Vt),re(ks))}var oe=Wn(0);function xa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ku=[];function nd(){for(var t=0;t<ku.length;t++)ku[t]._workInProgressVersionPrimary=null;ku.length=0}var na=dn.ReactCurrentDispatcher,Cu=dn.ReactCurrentBatchConfig,mr=0,ae=null,ve=null,Ce=null,Ma=!1,ns=!1,Ns=0,lT=0;function Ue(){throw Error(_(321))}function rd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Pt(t[n],e[n]))return!1;return!0}function id(t,e,n,r,i,s){if(mr=s,ae=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,na.current=t===null||t.memoizedState===null?dT:fT,t=n(r,i),ns){s=0;do{if(ns=!1,Ns=0,25<=s)throw Error(_(301));s+=1,Ce=ve=null,e.updateQueue=null,na.current=pT,t=n(r,i)}while(ns)}if(na.current=$a,e=ve!==null&&ve.next!==null,mr=0,Ce=ve=ae=null,Ma=!1,e)throw Error(_(300));return t}function sd(){var t=Ns!==0;return Ns=0,t}function $t(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ce===null?ae.memoizedState=Ce=t:Ce=Ce.next=t,Ce}function Ct(){if(ve===null){var t=ae.alternate;t=t!==null?t.memoizedState:null}else t=ve.next;var e=Ce===null?ae.memoizedState:Ce.next;if(e!==null)Ce=e,ve=t;else{if(t===null)throw Error(_(310));ve=t,t={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ce===null?ae.memoizedState=Ce=t:Ce=Ce.next=t}return Ce}function As(t,e){return typeof e=="function"?e(t):e}function Nu(t){var e=Ct(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=ve,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((mr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,ae.lanes|=c,gr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Pt(r,e.memoizedState)||(it=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ae.lanes|=s,gr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Au(t){var e=Ct(),n=e.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Pt(s,e.memoizedState)||(it=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function my(){}function gy(t,e){var n=ae,r=Ct(),i=e(),s=!Pt(r.memoizedState,i);if(s&&(r.memoizedState=i,it=!0),r=r.queue,od(wy.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ce!==null&&Ce.memoizedState.tag&1){if(n.flags|=2048,Rs(9,vy.bind(null,n,r,i,e),void 0,null),Ne===null)throw Error(_(349));mr&30||yy(n,e,i)}return i}function yy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function vy(t,e,n,r){e.value=n,e.getSnapshot=r,Ey(e)&&Ty(t)}function wy(t,e,n){return n(function(){Ey(e)&&Ty(t)})}function Ey(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Pt(t,n)}catch{return!0}}function Ty(t){var e=sn(t,1);e!==null&&Lt(e,t,1,-1)}function gp(t){var e=$t();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:As,lastRenderedState:t},e.queue=t,t=t.dispatch=hT.bind(null,ae,t),[e.memoizedState,t]}function Rs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ae.updateQueue,e===null?(e={lastEffect:null,stores:null},ae.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function _y(){return Ct().memoizedState}function ra(t,e,n,r){var i=$t();ae.flags|=t,i.memoizedState=Rs(1|e,n,void 0,r===void 0?null:r)}function vl(t,e,n,r){var i=Ct();r=r===void 0?null:r;var s=void 0;if(ve!==null){var o=ve.memoizedState;if(s=o.destroy,r!==null&&rd(r,o.deps)){i.memoizedState=Rs(e,n,s,r);return}}ae.flags|=t,i.memoizedState=Rs(1|e,n,s,r)}function yp(t,e){return ra(8390656,8,t,e)}function od(t,e){return vl(2048,8,t,e)}function Sy(t,e){return vl(4,2,t,e)}function Iy(t,e){return vl(4,4,t,e)}function ky(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cy(t,e,n){return n=n!=null?n.concat([t]):null,vl(4,4,ky.bind(null,e,t),n)}function ad(){}function Ny(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ay(t,e){var n=Ct();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&rd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Ry(t,e,n){return mr&21?(Pt(n,e)||(n=Lg(),ae.lanes|=n,gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,it=!0),t.memoizedState=n)}function uT(t,e){var n=J;J=n!==0&&4>n?n:4,t(!0);var r=Cu.transition;Cu.transition={};try{t(!1),e()}finally{J=n,Cu.transition=r}}function Dy(){return Ct().memoizedState}function cT(t,e,n){var r=Pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oy(t))Ly(e,n);else if(n=ly(t,e,n,r),n!==null){var i=Ye();Lt(n,t,r,i),Py(n,e,r)}}function hT(t,e,n){var r=Pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oy(t))Ly(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Pt(a,o)){var l=e.interleaved;l===null?(i.next=i,Jh(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=ly(t,e,i,r),n!==null&&(i=Ye(),Lt(n,t,r,i),Py(n,e,r))}}function Oy(t){var e=t.alternate;return t===ae||e!==null&&e===ae}function Ly(t,e){ns=Ma=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Py(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Fh(t,n)}}var $a={readContext:kt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},dT={readContext:kt,useCallback:function(t,e){return $t().memoizedState=[t,e===void 0?null:e],t},useContext:kt,useEffect:yp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ra(4194308,4,ky.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ra(4194308,4,t,e)},useInsertionEffect:function(t,e){return ra(4,2,t,e)},useMemo:function(t,e){var n=$t();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=$t();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cT.bind(null,ae,t),[r.memoizedState,t]},useRef:function(t){var e=$t();return t={current:t},e.memoizedState=t},useState:gp,useDebugValue:ad,useDeferredValue:function(t){return $t().memoizedState=t},useTransition:function(){var t=gp(!1),e=t[0];return t=uT.bind(null,t[1]),$t().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ae,i=$t();if(ie){if(n===void 0)throw Error(_(407));n=n()}else{if(n=e(),Ne===null)throw Error(_(349));mr&30||yy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,yp(wy.bind(null,r,s,t),[t]),r.flags|=2048,Rs(9,vy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=$t(),e=Ne.identifierPrefix;if(ie){var n=Yt,r=Xt;n=(r&~(1<<32-Ot(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ns++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fT={readContext:kt,useCallback:Ny,useContext:kt,useEffect:od,useImperativeHandle:Cy,useInsertionEffect:Sy,useLayoutEffect:Iy,useMemo:Ay,useReducer:Nu,useRef:_y,useState:function(){return Nu(As)},useDebugValue:ad,useDeferredValue:function(t){var e=Ct();return Ry(e,ve.memoizedState,t)},useTransition:function(){var t=Nu(As)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Dy,unstable_isNewReconciler:!1},pT={readContext:kt,useCallback:Ny,useContext:kt,useEffect:od,useImperativeHandle:Cy,useInsertionEffect:Sy,useLayoutEffect:Iy,useMemo:Ay,useReducer:Au,useRef:_y,useState:function(){return Au(As)},useDebugValue:ad,useDeferredValue:function(t){var e=Ct();return ve===null?e.memoizedState=t:Ry(e,ve.memoizedState,t)},useTransition:function(){var t=Au(As)[0],e=Ct().memoizedState;return[t,e]},useMutableSource:my,useSyncExternalStore:gy,useId:Dy,unstable_isNewReconciler:!1};function ci(t,e){try{var n="",r=e;do n+=Bw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ru(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function xc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mT=typeof WeakMap=="function"?WeakMap:Map;function xy(t,e,n){n=tn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fa||(Fa=!0,Hc=r),xc(t,e)},n}function My(t,e,n){n=tn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){xc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){xc(t,e),typeof r!="function"&&(Ln===null?Ln=new Set([this]):Ln.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function vp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=RT.bind(null,t,e,n),e.then(t,t))}function wp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Ep(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=tn(-1,1),e.tag=2,On(n,e,1))),n.lanes|=1),t)}var gT=dn.ReactCurrentOwner,it=!1;function Qe(t,e,n,r){e.child=t===null?fy(e,null,n,r):li(e,t.child,n,r)}function Tp(t,e,n,r,i){n=n.render;var s=e.ref;return Zr(e,i),r=id(t,e,n,r,s,i),n=sd(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,on(t,e,i)):(ie&&n&&qh(e),e.flags|=1,Qe(t,e,r,i),e.child)}function _p(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!md(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,$y(t,e,s,r,i)):(t=aa(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ts,n(o,r)&&t.ref===e.ref)return on(t,e,i)}return e.flags|=1,t=xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function $y(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Ts(s,r)&&t.ref===e.ref)if(it=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(it=!0);else return e.lanes=t.lanes,on(t,e,i)}return Mc(t,e,n,r,i)}function Uy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ee(qr,ct),ct|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ee(qr,ct),ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,ee(qr,ct),ct|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ee(qr,ct),ct|=r;return Qe(t,e,i,n),e.child}function Fy(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Mc(t,e,n,r,i){var s=at(n)?fr:We.current;return s=oi(e,s),Zr(e,i),n=id(t,e,n,r,s,i),r=sd(),t!==null&&!it?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,on(t,e,i)):(ie&&r&&qh(e),e.flags|=1,Qe(t,e,n,i),e.child)}function Sp(t,e,n,r,i){if(at(n)){var s=!0;Aa(e)}else s=!1;if(Zr(e,i),e.stateNode===null)ia(t,e),hy(e,n,r),Pc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=kt(u):(u=at(n)?fr:We.current,u=oi(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&pp(e,o,r,u),yn=!1;var d=e.memoizedState;o.state=d,Pa(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ot.current||yn?(typeof c=="function"&&(Lc(e,n,c,r),l=e.memoizedState),(a=yn||fp(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,uy(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:At(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=kt(l):(l=at(n)?fr:We.current,l=oi(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&pp(e,o,r,l),yn=!1,d=e.memoizedState,o.state=d,Pa(e,r,o,i);var g=e.memoizedState;a!==h||d!==g||ot.current||yn?(typeof m=="function"&&(Lc(e,n,m,r),g=e.memoizedState),(u=yn||fp(e,n,u,r,d,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return $c(t,e,n,r,s,i)}function $c(t,e,n,r,i,s){Fy(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&lp(e,n,!1),on(t,e,s);r=e.stateNode,gT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=li(e,t.child,null,s),e.child=li(e,null,a,s)):Qe(t,e,a,s),e.memoizedState=r.state,i&&lp(e,n,!0),e.child}function by(t){var e=t.stateNode;e.pendingContext?ap(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ap(t,e.context,!1),ed(t,e.containerInfo)}function Ip(t,e,n,r,i){return ai(),Gh(i),e.flags|=256,Qe(t,e,n,r),e.child}var Uc={dehydrated:null,treeContext:null,retryLane:0};function Fc(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vy(t,e,n){var r=e.pendingProps,i=oe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),ee(oe,i&1),t===null)return Dc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Tl(o,r,0,null),t=ur(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Fc(n),e.memoizedState=Uc,t):ld(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return yT(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=xn(a,s):(s=ur(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Fc(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Uc,r}return s=t.child,t=s.sibling,r=xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function ld(t,e){return e=Tl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Uo(t,e,n,r){return r!==null&&Gh(r),li(e,t.child,null,n),t=ld(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ru(Error(_(422))),Uo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Tl({mode:"visible",children:r.children},i,0,null),s=ur(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&li(e,t.child,null,o),e.child.memoizedState=Fc(o),e.memoizedState=Uc,s);if(!(e.mode&1))return Uo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(_(419)),r=Ru(s,r,void 0),Uo(t,e,o,r)}if(a=(o&t.childLanes)!==0,it||a){if(r=Ne,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,sn(t,i),Lt(r,t,i,-1))}return pd(),r=Ru(Error(_(421))),Uo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=DT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,dt=Dn(i.nextSibling),pt=e,ie=!0,Dt=null,t!==null&&(Tt[_t++]=Xt,Tt[_t++]=Yt,Tt[_t++]=pr,Xt=t.id,Yt=t.overflow,pr=e),e=ld(e,r.children),e.flags|=4096,e)}function kp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Oc(t.return,e,n)}function Du(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function zy(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Qe(t,e,r.children,n),r=oe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&kp(t,n,e);else if(t.tag===19)kp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ee(oe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&xa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Du(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&xa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ia(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function on(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(_(153));if(e.child!==null){for(t=e.child,n=xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vT(t,e,n){switch(e.tag){case 3:by(e),ai();break;case 5:py(e);break;case 1:at(e.type)&&Aa(e);break;case 4:ed(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;ee(Oa,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ee(oe,oe.current&1),e.flags|=128,null):n&e.child.childLanes?Vy(t,e,n):(ee(oe,oe.current&1),t=on(t,e,n),t!==null?t.sibling:null);ee(oe,oe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return zy(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ee(oe,oe.current),r)break;return null;case 22:case 23:return e.lanes=0,Uy(t,e,n)}return on(t,e,n)}var By,bc,jy,Hy;By=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bc=function(){};jy=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ir(Vt.current);var s=null;switch(n){case"input":i=ac(t,i),r=ac(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=cc(t,i),r=cc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ca)}dc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ps.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ps.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ne("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Hy=function(t,e,n,r){n!==r&&(e.flags|=4)};function Fi(t,e){if(!ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Fe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function wT(t,e,n){var r=e.pendingProps;switch(Kh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(e),null;case 1:return at(e.type)&&Na(),Fe(e),null;case 3:return r=e.stateNode,ui(),re(ot),re(We),nd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Mo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(Kc(Dt),Dt=null))),bc(t,e),Fe(e),null;case 5:td(e);var i=ir(Cs.current);if(n=e.type,t!==null&&e.stateNode!=null)jy(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(_(166));return Fe(e),null}if(t=ir(Vt.current),Mo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ut]=e,r[Is]=s,t=(e.mode&1)!==0,n){case"dialog":ne("cancel",r),ne("close",r);break;case"iframe":case"object":case"embed":ne("load",r);break;case"video":case"audio":for(i=0;i<Hi.length;i++)ne(Hi[i],r);break;case"source":ne("error",r);break;case"img":case"image":case"link":ne("error",r),ne("load",r);break;case"details":ne("toggle",r);break;case"input":xf(r,s),ne("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ne("invalid",r);break;case"textarea":$f(r,s),ne("invalid",r)}dc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xo(r.textContent,a,t),i=["children",""+a]):ps.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ne("scroll",r)}switch(n){case"input":Co(r),Mf(r,s,!0);break;case"textarea":Co(r),Uf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ca)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Ut]=e,t[Is]=r,By(t,e,!1,!1),e.stateNode=t;e:{switch(o=fc(n,r),n){case"dialog":ne("cancel",t),ne("close",t),i=r;break;case"iframe":case"object":case"embed":ne("load",t),i=r;break;case"video":case"audio":for(i=0;i<Hi.length;i++)ne(Hi[i],t);i=r;break;case"source":ne("error",t),i=r;break;case"img":case"image":case"link":ne("error",t),ne("load",t),i=r;break;case"details":ne("toggle",t),i=r;break;case"input":xf(t,r),i=ac(t,r),ne("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),ne("invalid",t);break;case"textarea":$f(t,r),i=cc(t,r),ne("invalid",t);break;default:i=r}dc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&vg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ms(t,l):typeof l=="number"&&ms(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ps.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ne("scroll",t):l!=null&&Lh(t,s,l,o))}switch(n){case"input":Co(t),Mf(t,r,!1);break;case"textarea":Co(t),Uf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+bn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Qr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Qr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ca)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Fe(e),null;case 6:if(t&&e.stateNode!=null)Hy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(_(166));if(n=ir(Cs.current),ir(Vt.current),Mo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ut]=e,(s=r.nodeValue!==n)&&(t=pt,t!==null))switch(t.tag){case 3:xo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ut]=e,e.stateNode=r}return Fe(e),null;case 13:if(re(oe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ie&&dt!==null&&e.mode&1&&!(e.flags&128))ay(),ai(),e.flags|=98560,s=!1;else if(s=Mo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(_(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(_(317));s[Ut]=e}else ai(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Fe(e),s=!1}else Dt!==null&&(Kc(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||oe.current&1?Ee===0&&(Ee=3):pd())),e.updateQueue!==null&&(e.flags|=4),Fe(e),null);case 4:return ui(),bc(t,e),t===null&&_s(e.stateNode.containerInfo),Fe(e),null;case 10:return Yh(e.type._context),Fe(e),null;case 17:return at(e.type)&&Na(),Fe(e),null;case 19:if(re(oe),s=e.memoizedState,s===null)return Fe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Fi(s,!1);else{if(Ee!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xa(t),o!==null){for(e.flags|=128,Fi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ee(oe,oe.current&1|2),e.child}t=t.sibling}s.tail!==null&&fe()>hi&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304)}else{if(!r)if(t=xa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Fi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ie)return Fe(e),null}else 2*fe()-s.renderingStartTime>hi&&n!==1073741824&&(e.flags|=128,r=!0,Fi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=fe(),e.sibling=null,n=oe.current,ee(oe,r?n&1|2:n&1),e):(Fe(e),null);case 22:case 23:return fd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?ct&1073741824&&(Fe(e),e.subtreeFlags&6&&(e.flags|=8192)):Fe(e),null;case 24:return null;case 25:return null}throw Error(_(156,e.tag))}function ET(t,e){switch(Kh(e),e.tag){case 1:return at(e.type)&&Na(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ui(),re(ot),re(We),nd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return td(e),null;case 13:if(re(oe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(_(340));ai()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return re(oe),null;case 4:return ui(),null;case 10:return Yh(e.type._context),null;case 22:case 23:return fd(),null;case 24:return null;default:return null}}var Fo=!1,Ve=!1,TT=typeof WeakSet=="function"?WeakSet:Set,R=null;function Wr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ue(t,e,r)}else n.current=null}function Vc(t,e,n){try{n()}catch(r){ue(t,e,r)}}var Cp=!1;function _T(t,e){if(Sc=Sa,t=Gg(),Wh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var m;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ic={focusedElem:t,selectionRange:n},Sa=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,E=g.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?v:At(e.type,v),E);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(_(163))}}catch(w){ue(e,e.return,w)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return g=Cp,Cp=!1,g}function rs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Vc(e,n,s)}i=i.next}while(i!==r)}}function wl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function zc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Wy(t){var e=t.alternate;e!==null&&(t.alternate=null,Wy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ut],delete e[Is],delete e[Nc],delete e[iT],delete e[sT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qy(t){return t.tag===5||t.tag===3||t.tag===4}function Np(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ca));else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}function jc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(jc(t,e,n),t=t.sibling;t!==null;)jc(t,e,n),t=t.sibling}var De=null,Rt=!1;function pn(t,e,n){for(n=n.child;n!==null;)Ky(t,e,n),n=n.sibling}function Ky(t,e,n){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(hl,n)}catch{}switch(n.tag){case 5:Ve||Wr(n,e);case 6:var r=De,i=Rt;De=null,pn(t,e,n),De=r,Rt=i,De!==null&&(Rt?(t=De,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):De.removeChild(n.stateNode));break;case 18:De!==null&&(Rt?(t=De,n=n.stateNode,t.nodeType===8?Su(t.parentNode,n):t.nodeType===1&&Su(t,n),ws(t)):Su(De,n.stateNode));break;case 4:r=De,i=Rt,De=n.stateNode.containerInfo,Rt=!0,pn(t,e,n),De=r,Rt=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Vc(n,e,o),i=i.next}while(i!==r)}pn(t,e,n);break;case 1:if(!Ve&&(Wr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ue(n,e,a)}pn(t,e,n);break;case 21:pn(t,e,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,pn(t,e,n),Ve=r):pn(t,e,n);break;default:pn(t,e,n)}}function Ap(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new TT),e.forEach(function(r){var i=OT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:De=a.stateNode,Rt=!1;break e;case 3:De=a.stateNode.containerInfo,Rt=!0;break e;case 4:De=a.stateNode.containerInfo,Rt=!0;break e}a=a.return}if(De===null)throw Error(_(160));Ky(s,o,i),De=null,Rt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){ue(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Gy(e,t),e=e.sibling}function Gy(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Nt(e,t),Mt(t),r&4){try{rs(3,t,t.return),wl(3,t)}catch(v){ue(t,t.return,v)}try{rs(5,t,t.return)}catch(v){ue(t,t.return,v)}}break;case 1:Nt(e,t),Mt(t),r&512&&n!==null&&Wr(n,n.return);break;case 5:if(Nt(e,t),Mt(t),r&512&&n!==null&&Wr(n,n.return),t.flags&32){var i=t.stateNode;try{ms(i,"")}catch(v){ue(t,t.return,v)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&mg(i,s),fc(a,o);var u=fc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Eg(i,h):c==="dangerouslySetInnerHTML"?vg(i,h):c==="children"?ms(i,h):Lh(i,c,h,u)}switch(a){case"input":lc(i,s);break;case"textarea":gg(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Qr(i,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Qr(i,!!s.multiple,s.defaultValue,!0):Qr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Is]=s}catch(v){ue(t,t.return,v)}}break;case 6:if(Nt(e,t),Mt(t),r&4){if(t.stateNode===null)throw Error(_(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(v){ue(t,t.return,v)}}break;case 3:if(Nt(e,t),Mt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ws(e.containerInfo)}catch(v){ue(t,t.return,v)}break;case 4:Nt(e,t),Mt(t);break;case 13:Nt(e,t),Mt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(hd=fe())),r&4&&Ap(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ve=(u=Ve)||c,Nt(e,t),Ve=u):Nt(e,t),Mt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(h=R=c;R!==null;){switch(d=R,m=d.child,d.tag){case 0:case 11:case 14:case 15:rs(4,d,d.return);break;case 1:Wr(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){ue(r,n,v)}}break;case 5:Wr(d,d.return);break;case 22:if(d.memoizedState!==null){Dp(h);continue}}m!==null?(m.return=d,R=m):Dp(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wg("display",o))}catch(v){ue(t,t.return,v)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){ue(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Nt(e,t),Mt(t),r&4&&Ap(t);break;case 21:break;default:Nt(e,t),Mt(t)}}function Mt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qy(n)){var r=n;break e}n=n.return}throw Error(_(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ms(i,""),r.flags&=-33);var s=Np(t);jc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=Np(t);Bc(t,a,o);break;default:throw Error(_(161))}}catch(l){ue(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ST(t,e,n){R=t,Qy(t)}function Qy(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Fo;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Ve;a=Fo;var u=Ve;if(Fo=o,(Ve=l)&&!u)for(R=i;R!==null;)o=R,l=o.child,o.tag===22&&o.memoizedState!==null?Op(i):l!==null?(l.return=o,R=l):Op(i);for(;s!==null;)R=s,Qy(s),s=s.sibling;R=i,Fo=a,Ve=u}Rp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Rp(t)}}function Rp(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ve||wl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:At(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&dp(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}dp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&ws(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(_(163))}Ve||e.flags&512&&zc(e)}catch(d){ue(e,e.return,d)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Dp(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function Op(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{wl(4,e)}catch(l){ue(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){ue(e,i,l)}}var s=e.return;try{zc(e)}catch(l){ue(e,s,l)}break;case 5:var o=e.return;try{zc(e)}catch(l){ue(e,o,l)}}}catch(l){ue(e,e.return,l)}if(e===t){R=null;break}var a=e.sibling;if(a!==null){a.return=e.return,R=a;break}R=e.return}}var IT=Math.ceil,Ua=dn.ReactCurrentDispatcher,ud=dn.ReactCurrentOwner,It=dn.ReactCurrentBatchConfig,Q=0,Ne=null,ge=null,Le=0,ct=0,qr=Wn(0),Ee=0,Ds=null,gr=0,El=0,cd=0,is=null,nt=null,hd=0,hi=1/0,Gt=null,Fa=!1,Hc=null,Ln=null,bo=!1,kn=null,ba=0,ss=0,Wc=null,sa=-1,oa=0;function Ye(){return Q&6?fe():sa!==-1?sa:sa=fe()}function Pn(t){return t.mode&1?Q&2&&Le!==0?Le&-Le:aT.transition!==null?(oa===0&&(oa=Lg()),oa):(t=J,t!==0||(t=window.event,t=t===void 0?16:bg(t.type)),t):1}function Lt(t,e,n,r){if(50<ss)throw ss=0,Wc=null,Error(_(185));Gs(t,n,r),(!(Q&2)||t!==Ne)&&(t===Ne&&(!(Q&2)&&(El|=n),Ee===4&&wn(t,Le)),lt(t,r),n===1&&Q===0&&!(e.mode&1)&&(hi=fe()+500,gl&&qn()))}function lt(t,e){var n=t.callbackNode;aE(t,e);var r=_a(t,t===Ne?Le:0);if(r===0)n!==null&&Vf(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Vf(n),e===1)t.tag===0?oT(Lp.bind(null,t)):iy(Lp.bind(null,t)),nT(function(){!(Q&6)&&qn()}),n=null;else{switch(Pg(r)){case 1:n=Uh;break;case 4:n=Dg;break;case 16:n=Ta;break;case 536870912:n=Og;break;default:n=Ta}n=rv(n,Xy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xy(t,e){if(sa=-1,oa=0,Q&6)throw Error(_(327));var n=t.callbackNode;if(ei()&&t.callbackNode!==n)return null;var r=_a(t,t===Ne?Le:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Va(t,r);else{e=r;var i=Q;Q|=2;var s=Jy();(Ne!==t||Le!==e)&&(Gt=null,hi=fe()+500,lr(t,e));do try{NT();break}catch(a){Yy(t,a)}while(1);Xh(),Ua.current=s,Q=i,ge!==null?e=0:(Ne=null,Le=0,e=Ee)}if(e!==0){if(e===2&&(i=vc(t),i!==0&&(r=i,e=qc(t,i))),e===1)throw n=Ds,lr(t,0),wn(t,r),lt(t,fe()),n;if(e===6)wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!kT(i)&&(e=Va(t,r),e===2&&(s=vc(t),s!==0&&(r=s,e=qc(t,s))),e===1))throw n=Ds,lr(t,0),wn(t,r),lt(t,fe()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(_(345));case 2:Zn(t,nt,Gt);break;case 3:if(wn(t,r),(r&130023424)===r&&(e=hd+500-fe(),10<e)){if(_a(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Cc(Zn.bind(null,t,nt,Gt),e);break}Zn(t,nt,Gt);break;case 4:if(wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ot(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=fe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*IT(r/1960))-r,10<r){t.timeoutHandle=Cc(Zn.bind(null,t,nt,Gt),r);break}Zn(t,nt,Gt);break;case 5:Zn(t,nt,Gt);break;default:throw Error(_(329))}}}return lt(t,fe()),t.callbackNode===n?Xy.bind(null,t):null}function qc(t,e){var n=is;return t.current.memoizedState.isDehydrated&&(lr(t,e).flags|=256),t=Va(t,e),t!==2&&(e=nt,nt=n,e!==null&&Kc(e)),t}function Kc(t){nt===null?nt=t:nt.push.apply(nt,t)}function kT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Pt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function wn(t,e){for(e&=~cd,e&=~El,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ot(e),r=1<<n;t[n]=-1,e&=~r}}function Lp(t){if(Q&6)throw Error(_(327));ei();var e=_a(t,0);if(!(e&1))return lt(t,fe()),null;var n=Va(t,e);if(t.tag!==0&&n===2){var r=vc(t);r!==0&&(e=r,n=qc(t,r))}if(n===1)throw n=Ds,lr(t,0),wn(t,e),lt(t,fe()),n;if(n===6)throw Error(_(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zn(t,nt,Gt),lt(t,fe()),null}function dd(t,e){var n=Q;Q|=1;try{return t(e)}finally{Q=n,Q===0&&(hi=fe()+500,gl&&qn())}}function yr(t){kn!==null&&kn.tag===0&&!(Q&6)&&ei();var e=Q;Q|=1;var n=It.transition,r=J;try{if(It.transition=null,J=1,t)return t()}finally{J=r,It.transition=n,Q=e,!(Q&6)&&qn()}}function fd(){ct=qr.current,re(qr)}function lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tT(n)),ge!==null)for(n=ge.return;n!==null;){var r=n;switch(Kh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Na();break;case 3:ui(),re(ot),re(We),nd();break;case 5:td(r);break;case 4:ui();break;case 13:re(oe);break;case 19:re(oe);break;case 10:Yh(r.type._context);break;case 22:case 23:fd()}n=n.return}if(Ne=t,ge=t=xn(t.current,null),Le=ct=e,Ee=0,Ds=null,cd=El=gr=0,nt=is=null,rr!==null){for(e=0;e<rr.length;e++)if(n=rr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}rr=null}return t}function Yy(t,e){do{var n=ge;try{if(Xh(),na.current=$a,Ma){for(var r=ae.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ma=!1}if(mr=0,Ce=ve=ae=null,ns=!1,Ns=0,ud.current=null,n===null||n.return===null){Ee=1,Ds=e,ge=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Le,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=wp(o);if(m!==null){m.flags&=-257,Ep(m,o,a,s,e),m.mode&1&&vp(s,u,e),e=m,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){vp(s,u,e),pd();break e}l=Error(_(426))}}else if(ie&&a.mode&1){var E=wp(o);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Ep(E,o,a,s,e),Gh(ci(l,a));break e}}s=l=ci(l,a),Ee!==4&&(Ee=2),is===null?is=[s]:is.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=xy(s,l,e);hp(s,p);break e;case 1:a=l;var f=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Ln===null||!Ln.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var w=My(s,a,e);hp(s,w);break e}}s=s.return}while(s!==null)}ev(n)}catch(T){e=T,ge===n&&n!==null&&(ge=n=n.return);continue}break}while(1)}function Jy(){var t=Ua.current;return Ua.current=$a,t===null?$a:t}function pd(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),Ne===null||!(gr&268435455)&&!(El&268435455)||wn(Ne,Le)}function Va(t,e){var n=Q;Q|=2;var r=Jy();(Ne!==t||Le!==e)&&(Gt=null,lr(t,e));do try{CT();break}catch(i){Yy(t,i)}while(1);if(Xh(),Q=n,Ua.current=r,ge!==null)throw Error(_(261));return Ne=null,Le=0,Ee}function CT(){for(;ge!==null;)Zy(ge)}function NT(){for(;ge!==null&&!Jw();)Zy(ge)}function Zy(t){var e=nv(t.alternate,t,ct);t.memoizedProps=t.pendingProps,e===null?ev(t):ge=e,ud.current=null}function ev(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ET(n,e),n!==null){n.flags&=32767,ge=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ee=6,ge=null;return}}else if(n=wT(n,e,ct),n!==null){ge=n;return}if(e=e.sibling,e!==null){ge=e;return}ge=e=t}while(e!==null);Ee===0&&(Ee=5)}function Zn(t,e,n){var r=J,i=It.transition;try{It.transition=null,J=1,AT(t,e,n,r)}finally{It.transition=i,J=r}return null}function AT(t,e,n,r){do ei();while(kn!==null);if(Q&6)throw Error(_(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(_(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(lE(t,s),t===Ne&&(ge=Ne=null,Le=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,rv(Ta,function(){return ei(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=It.transition,It.transition=null;var o=J;J=1;var a=Q;Q|=4,ud.current=null,_T(t,n),Gy(n,t),GE(Ic),Sa=!!Sc,Ic=Sc=null,t.current=n,ST(n),Zw(),Q=a,J=o,It.transition=s}else t.current=n;if(bo&&(bo=!1,kn=t,ba=i),s=t.pendingLanes,s===0&&(Ln=null),nE(n.stateNode),lt(t,fe()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fa)throw Fa=!1,t=Hc,Hc=null,t;return ba&1&&t.tag!==0&&ei(),s=t.pendingLanes,s&1?t===Wc?ss++:(ss=0,Wc=t):ss=0,qn(),null}function ei(){if(kn!==null){var t=Pg(ba),e=It.transition,n=J;try{if(It.transition=null,J=16>t?16:t,kn===null)var r=!1;else{if(t=kn,kn=null,ba=0,Q&6)throw Error(_(331));var i=Q;for(Q|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:rs(8,c,s)}var h=c.child;if(h!==null)h.return=c,R=h;else for(;R!==null;){c=R;var d=c.sibling,m=c.return;if(Wy(c),c===u){R=null;break}if(d!==null){d.return=m,R=d;break}R=m}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var E=v.sibling;v.sibling=null,v=E}while(v!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:rs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,R=y;else e:for(o=f;R!==null;){if(a=R,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:wl(9,a)}}catch(T){ue(a,a.return,T)}if(a===o){R=null;break e}var w=a.sibling;if(w!==null){w.return=a.return,R=w;break e}R=a.return}}if(Q=i,qn(),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(hl,t)}catch{}r=!0}return r}finally{J=n,It.transition=e}}return!1}function Pp(t,e,n){e=ci(n,e),e=xy(t,e,1),t=On(t,e,1),e=Ye(),t!==null&&(Gs(t,1,e),lt(t,e))}function ue(t,e,n){if(t.tag===3)Pp(t,t,n);else for(;e!==null;){if(e.tag===3){Pp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ln===null||!Ln.has(r))){t=ci(n,t),t=My(e,t,1),e=On(e,t,1),t=Ye(),e!==null&&(Gs(e,1,t),lt(e,t));break}}e=e.return}}function RT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ye(),t.pingedLanes|=t.suspendedLanes&n,Ne===t&&(Le&n)===n&&(Ee===4||Ee===3&&(Le&130023424)===Le&&500>fe()-hd?lr(t,0):cd|=n),lt(t,e)}function tv(t,e){e===0&&(t.mode&1?(e=Ro,Ro<<=1,!(Ro&130023424)&&(Ro=4194304)):e=1);var n=Ye();t=sn(t,e),t!==null&&(Gs(t,e,n),lt(t,n))}function DT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tv(t,n)}function OT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(_(314))}r!==null&&r.delete(e),tv(t,n)}var nv;nv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ot.current)it=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return it=!1,vT(t,e,n);it=!!(t.flags&131072)}else it=!1,ie&&e.flags&1048576&&sy(e,Da,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ia(t,e),t=e.pendingProps;var i=oi(e,We.current);Zr(e,n),i=id(null,e,r,t,i,n);var s=sd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,at(r)?(s=!0,Aa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Zh(e),i.updater=yl,e.stateNode=i,i._reactInternals=e,Pc(e,r,t,n),e=$c(null,e,r,!0,s,n)):(e.tag=0,ie&&s&&qh(e),Qe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ia(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=PT(r),t=At(r,t),i){case 0:e=Mc(null,e,r,t,n);break e;case 1:e=Sp(null,e,r,t,n);break e;case 11:e=Tp(null,e,r,t,n);break e;case 14:e=_p(null,e,r,At(r.type,t),n);break e}throw Error(_(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Mc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Sp(t,e,r,i,n);case 3:e:{if(by(e),t===null)throw Error(_(387));r=e.pendingProps,s=e.memoizedState,i=s.element,uy(t,e),Pa(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ci(Error(_(423)),e),e=Ip(t,e,r,n,i);break e}else if(r!==i){i=ci(Error(_(424)),e),e=Ip(t,e,r,n,i);break e}else for(dt=Dn(e.stateNode.containerInfo.firstChild),pt=e,ie=!0,Dt=null,n=fy(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ai(),r===i){e=on(t,e,n);break e}Qe(t,e,r,n)}e=e.child}return e;case 5:return py(e),t===null&&Dc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,kc(r,i)?o=null:s!==null&&kc(r,s)&&(e.flags|=32),Fy(t,e),Qe(t,e,o,n),e.child;case 6:return t===null&&Dc(e),null;case 13:return Vy(t,e,n);case 4:return ed(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=li(e,null,r,n):Qe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),Tp(t,e,r,i,n);case 7:return Qe(t,e,e.pendingProps,n),e.child;case 8:return Qe(t,e,e.pendingProps.children,n),e.child;case 12:return Qe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,ee(Oa,r._currentValue),r._currentValue=o,s!==null)if(Pt(s.value,o)){if(s.children===i.children&&!ot.current){e=on(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=tn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Oc(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(_(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Oc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Zr(e,n),i=kt(i),r=r(i),e.flags|=1,Qe(t,e,r,n),e.child;case 14:return r=e.type,i=At(r,e.pendingProps),i=At(r.type,i),_p(t,e,r,i,n);case 15:return $y(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:At(r,i),ia(t,e),e.tag=1,at(r)?(t=!0,Aa(e)):t=!1,Zr(e,n),hy(e,r,i),Pc(e,r,i,n),$c(null,e,r,!0,t,n);case 19:return zy(t,e,n);case 22:return Uy(t,e,n)}throw Error(_(156,e.tag))};function rv(t,e){return Rg(t,e)}function LT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function St(t,e,n,r){return new LT(t,e,n,r)}function md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function PT(t){if(typeof t=="function")return md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xh)return 11;if(t===Mh)return 14}return 2}function xn(t,e){var n=t.alternate;return n===null?(n=St(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function aa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case $r:return ur(n.children,i,s,e);case Ph:o=8,i|=8;break;case rc:return t=St(12,n,e,i|2),t.elementType=rc,t.lanes=s,t;case ic:return t=St(13,n,e,i),t.elementType=ic,t.lanes=s,t;case sc:return t=St(19,n,e,i),t.elementType=sc,t.lanes=s,t;case dg:return Tl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cg:o=10;break e;case hg:o=9;break e;case xh:o=11;break e;case Mh:o=14;break e;case gn:o=16,r=null;break e}throw Error(_(130,t==null?t:typeof t,""))}return e=St(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ur(t,e,n,r){return t=St(7,t,r,e),t.lanes=n,t}function Tl(t,e,n,r){return t=St(22,t,r,e),t.elementType=dg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ou(t,e,n){return t=St(6,t,null,e),t.lanes=n,t}function Lu(t,e,n){return e=St(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function xT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=du(0),this.expirationTimes=du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function gd(t,e,n,r,i,s,o,a,l){return t=new xT(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=St(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zh(s),t}function MT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function iv(t){if(!t)return Vn;t=t._reactInternals;e:{if(Nr(t)!==t||t.tag!==1)throw Error(_(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(at(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(_(171))}if(t.tag===1){var n=t.type;if(at(n))return ry(t,n,e)}return e}function sv(t,e,n,r,i,s,o,a,l){return t=gd(n,r,!0,t,i,s,o,a,l),t.context=iv(null),n=t.current,r=Ye(),i=Pn(n),s=tn(r,i),s.callback=e??null,On(n,s,i),t.current.lanes=i,Gs(t,i,r),lt(t,r),t}function _l(t,e,n,r){var i=e.current,s=Ye(),o=Pn(i);return n=iv(n),e.context===null?e.context=n:e.pendingContext=n,e=tn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=On(i,e,o),t!==null&&(Lt(t,i,o,s),ta(t,i,o)),o}function za(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function xp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yd(t,e){xp(t,e),(t=t.alternate)&&xp(t,e)}function $T(){return null}var ov=typeof reportError=="function"?reportError:function(t){console.error(t)};function vd(t){this._internalRoot=t}Sl.prototype.render=vd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(_(409));_l(t,e,null,null)};Sl.prototype.unmount=vd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;yr(function(){_l(null,t,null,null)}),e[rn]=null}};function Sl(t){this._internalRoot=t}Sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=$g();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vn.length&&e!==0&&e<vn[n].priority;n++);vn.splice(n,0,t),n===0&&Fg(t)}};function wd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Il(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mp(){}function UT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=za(o);s.call(u)}}var o=sv(e,r,t,0,null,!1,!1,"",Mp);return t._reactRootContainer=o,t[rn]=o.current,_s(t.nodeType===8?t.parentNode:t),yr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=za(l);a.call(u)}}var l=gd(t,0,!1,null,null,!1,!1,"",Mp);return t._reactRootContainer=l,t[rn]=l.current,_s(t.nodeType===8?t.parentNode:t),yr(function(){_l(e,l,n,r)}),l}function kl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=za(o);a.call(l)}}_l(e,o,t,i)}else o=UT(n,e,t,i,r);return za(o)}xg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ji(e.pendingLanes);n!==0&&(Fh(e,n|1),lt(e,fe()),!(Q&6)&&(hi=fe()+500,qn()))}break;case 13:yr(function(){var r=sn(t,1);if(r!==null){var i=Ye();Lt(r,t,1,i)}}),yd(t,1)}};bh=function(t){if(t.tag===13){var e=sn(t,134217728);if(e!==null){var n=Ye();Lt(e,t,134217728,n)}yd(t,134217728)}};Mg=function(t){if(t.tag===13){var e=Pn(t),n=sn(t,e);if(n!==null){var r=Ye();Lt(n,t,e,r)}yd(t,e)}};$g=function(){return J};Ug=function(t,e){var n=J;try{return J=t,e()}finally{J=n}};mc=function(t,e,n){switch(e){case"input":if(lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=ml(r);if(!i)throw Error(_(90));pg(r),lc(r,i)}}}break;case"textarea":gg(t,n);break;case"select":e=n.value,e!=null&&Qr(t,!!n.multiple,e,!1)}};Sg=dd;Ig=yr;var FT={usingClientEntryPoint:!1,Events:[Xs,Vr,ml,Tg,_g,dd]},bi={findFiberByHostInstance:nr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},bT={bundleType:bi.bundleType,version:bi.version,rendererPackageName:bi.rendererPackageName,rendererConfig:bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:bi.findFiberByHostInstance||$T,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vo.isDisabled&&Vo.supportsFiber)try{hl=Vo.inject(bT),bt=Vo}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FT;vt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!wd(e))throw Error(_(200));return MT(t,e,null,n)};vt.createRoot=function(t,e){if(!wd(t))throw Error(_(299));var n=!1,r="",i=ov;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=gd(t,1,!1,null,null,n,!1,r,i),t[rn]=e.current,_s(t.nodeType===8?t.parentNode:t),new vd(e)};vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(_(188)):(t=Object.keys(t).join(","),Error(_(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t){return yr(t)};vt.hydrate=function(t,e,n){if(!Il(e))throw Error(_(200));return kl(null,t,e,!0,n)};vt.hydrateRoot=function(t,e,n){if(!wd(t))throw Error(_(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=ov;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=sv(e,null,t,1,n??null,i,!1,s,o),t[rn]=e.current,_s(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Sl(e)};vt.render=function(t,e,n){if(!Il(e))throw Error(_(200));return kl(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!Il(t))throw Error(_(40));return t._reactRootContainer?(yr(function(){kl(null,null,t,!1,function(){t._reactRootContainer=null,t[rn]=null})}),!0):!1};vt.unstable_batchedUpdates=dd;vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Il(n))throw Error(_(200));if(t==null||t._reactInternals===void 0)throw Error(_(38));return kl(t,e,n,!1,r)};vt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=vt})($w);var $p=ec;Zu.createRoot=$p.createRoot,Zu.hydrateRoot=$p.hydrateRoot;function av(t){var e,n,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=av(t[e]))&&(r&&(r+=" "),r+=n);else for(e in t)t[e]&&(r&&(r+=" "),r+=e);return r}function Cn(){for(var t,e,n=0,r="";n<arguments.length;)(t=arguments[n++])&&(e=av(t))&&(r&&(r+=" "),r+=e);return r}const os=t=>typeof t=="number"&&!isNaN(t),vr=t=>typeof t=="string",st=t=>typeof t=="function",la=t=>vr(t)||st(t)?t:null,Pu=t=>z.isValidElement(t)||vr(t)||st(t)||os(t);function VT(t,e,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=t;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(e,n)})})}function Cl(t){let{enter:e,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:s=300}=t;return function(o){let{children:a,position:l,preventExitTransition:u,done:c,nodeRef:h,isIn:d}=o;const m=r?`${e}--${l}`:e,g=r?`${n}--${l}`:n,v=z.useRef(0);return z.useLayoutEffect(()=>{const E=h.current,p=m.split(" "),f=y=>{y.target===h.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",f),E.removeEventListener("animationcancel",f),v.current===0&&y.type!=="animationcancel"&&E.classList.remove(...p))};E.classList.add(...p),E.addEventListener("animationend",f),E.addEventListener("animationcancel",f)},[]),z.useEffect(()=>{const E=h.current,p=()=>{E.removeEventListener("animationend",p),i?VT(E,c,s):c()};d||(u?p():(v.current=1,E.className+=` ${g}`,E.addEventListener("animationend",p)))},[d]),Z.createElement(Z.Fragment,null,a)}}function Up(t,e){return{content:t.content,containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,status:e}}const Et={list:new Map,emitQueue:new Map,on(t,e){return this.list.has(t)||this.list.set(t,[]),this.list.get(t).push(e),this},off(t,e){if(e){const n=this.list.get(t).filter(r=>r!==e);return this.list.set(t,n),this}return this.list.delete(t),this},cancelEmit(t){const e=this.emitQueue.get(t);return e&&(e.forEach(clearTimeout),this.emitQueue.delete(t)),this},emit(t){this.list.has(t)&&this.list.get(t).forEach(e=>{const n=setTimeout(()=>{e(...[].slice.call(arguments,1))},0);this.emitQueue.has(t)||this.emitQueue.set(t,[]),this.emitQueue.get(t).push(n)})}},zo=t=>{let{theme:e,type:n,...r}=t;return Z.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:e==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},xu={info:function(t){return Z.createElement(zo,{...t},Z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(t){return Z.createElement(zo,{...t},Z.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(t){return Z.createElement(zo,{...t},Z.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(t){return Z.createElement(zo,{...t},Z.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return Z.createElement("div",{className:"Toastify__spinner"})}};function zT(t){const[,e]=z.useReducer(m=>m+1,0),[n,r]=z.useState([]),i=z.useRef(null),s=z.useRef(new Map).current,o=m=>n.indexOf(m)!==-1,a=z.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:t,containerId:null,isToastActive:o,getToast:m=>s.get(m)}).current;function l(m){let{containerId:g}=m;const{limit:v}=a.props;!v||g&&a.containerId!==g||(a.count-=a.queue.length,a.queue=[])}function u(m){r(g=>m==null?[]:g.filter(v=>v!==m))}function c(){const{toastContent:m,toastProps:g,staleId:v}=a.queue.shift();d(m,g,v)}function h(m,g){let{delay:v,staleId:E,...p}=g;if(!Pu(m)||function($e){return!i.current||a.props.enableMultiContainer&&$e.containerId!==a.props.containerId||s.has($e.toastId)&&$e.updateId==null}(p))return;const{toastId:f,updateId:y,data:w}=p,{props:T}=a,k=()=>u(f),C=y==null;C&&a.count++;const N={...T,style:T.toastStyle,key:a.toastKey++,...p,toastId:f,updateId:y,data:w,closeToast:k,isIn:!1,className:la(p.className||T.toastClassName),bodyClassName:la(p.bodyClassName||T.bodyClassName),progressClassName:la(p.progressClassName||T.progressClassName),autoClose:!p.isLoading&&(G=p.autoClose,F=T.autoClose,G===!1||os(G)&&G>0?G:F),deleteToast(){const $e=Up(s.get(f),"removed");s.delete(f),Et.emit(4,$e);const et=a.queue.length;if(a.count=f==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),et>0){const tt=f==null?a.props.limit:1;if(et===1||tt===1)a.displayedToast++,c();else{const Kt=tt>et?et:tt;a.displayedToast=Kt;for(let Re=0;Re<Kt;Re++)c()}}else e()}};var G,F;N.iconOut=function($e){let{theme:et,type:tt,isLoading:Kt,icon:Re}=$e,ut=null;const A={theme:et,type:tt};return Re===!1||(st(Re)?ut=Re(A):z.isValidElement(Re)?ut=z.cloneElement(Re,A):vr(Re)||os(Re)?ut=Re:Kt?ut=xu.spinner():(M=>M in xu)(tt)&&(ut=xu[tt](A))),ut}(N),st(p.onOpen)&&(N.onOpen=p.onOpen),st(p.onClose)&&(N.onClose=p.onClose),N.closeButton=T.closeButton,p.closeButton===!1||Pu(p.closeButton)?N.closeButton=p.closeButton:p.closeButton===!0&&(N.closeButton=!Pu(T.closeButton)||T.closeButton);let ye=m;z.isValidElement(m)&&!vr(m.type)?ye=z.cloneElement(m,{closeToast:k,toastProps:N,data:w}):st(m)&&(ye=m({closeToast:k,toastProps:N,data:w})),T.limit&&T.limit>0&&a.count>T.limit&&C?a.queue.push({toastContent:ye,toastProps:N,staleId:E}):os(v)?setTimeout(()=>{d(ye,N,E)},v):d(ye,N,E)}function d(m,g,v){const{toastId:E}=g;v&&s.delete(v);const p={content:m,props:g};s.set(E,p),r(f=>[...f,E].filter(y=>y!==v)),Et.emit(4,Up(p,p.props.updateId==null?"added":"updated"))}return z.useEffect(()=>(a.containerId=t.containerId,Et.cancelEmit(3).on(0,h).on(1,m=>i.current&&u(m)).on(5,l).emit(2,a),()=>{s.clear(),Et.emit(3,a)}),[]),z.useEffect(()=>{a.props=t,a.isToastActive=o,a.displayedToast=n.length}),{getToastToRender:function(m){const g=new Map,v=Array.from(s.values());return t.newestOnTop&&v.reverse(),v.forEach(E=>{const{position:p}=E.props;g.has(p)||g.set(p,[]),g.get(p).push(E)}),Array.from(g,E=>m(E[0],E[1]))},containerRef:i,isToastActive:o}}function Fp(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientX:t.clientX}function bp(t){return t.targetTouches&&t.targetTouches.length>=1?t.targetTouches[0].clientY:t.clientY}function BT(t){const[e,n]=z.useState(!1),[r,i]=z.useState(!1),s=z.useRef(null),o=z.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=z.useRef(t),{autoClose:l,pauseOnHover:u,closeToast:c,onClick:h,closeOnClick:d}=t;function m(w){if(t.draggable){w.nativeEvent.type==="touchstart"&&w.nativeEvent.preventDefault(),o.didMove=!1,document.addEventListener("mousemove",p),document.addEventListener("mouseup",f),document.addEventListener("touchmove",p),document.addEventListener("touchend",f);const T=s.current;o.canCloseOnClick=!0,o.canDrag=!0,o.boundingRect=T.getBoundingClientRect(),T.style.transition="",o.x=Fp(w.nativeEvent),o.y=bp(w.nativeEvent),t.draggableDirection==="x"?(o.start=o.x,o.removalDistance=T.offsetWidth*(t.draggablePercent/100)):(o.start=o.y,o.removalDistance=T.offsetHeight*(t.draggablePercent===80?1.5*t.draggablePercent:t.draggablePercent/100))}}function g(w){if(o.boundingRect){const{top:T,bottom:k,left:C,right:N}=o.boundingRect;w.nativeEvent.type!=="touchend"&&t.pauseOnHover&&o.x>=C&&o.x<=N&&o.y>=T&&o.y<=k?E():v()}}function v(){n(!0)}function E(){n(!1)}function p(w){const T=s.current;o.canDrag&&T&&(o.didMove=!0,e&&E(),o.x=Fp(w),o.y=bp(w),o.delta=t.draggableDirection==="x"?o.x-o.start:o.y-o.start,o.start!==o.x&&(o.canCloseOnClick=!1),T.style.transform=`translate${t.draggableDirection}(${o.delta}px)`,T.style.opacity=""+(1-Math.abs(o.delta/o.removalDistance)))}function f(){document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",f),document.removeEventListener("touchmove",p),document.removeEventListener("touchend",f);const w=s.current;if(o.canDrag&&o.didMove&&w){if(o.canDrag=!1,Math.abs(o.delta)>o.removalDistance)return i(!0),void t.closeToast();w.style.transition="transform 0.2s, opacity 0.2s",w.style.transform=`translate${t.draggableDirection}(0)`,w.style.opacity="1"}}z.useEffect(()=>{a.current=t}),z.useEffect(()=>(s.current&&s.current.addEventListener("d",v,{once:!0}),st(t.onOpen)&&t.onOpen(z.isValidElement(t.children)&&t.children.props),()=>{const w=a.current;st(w.onClose)&&w.onClose(z.isValidElement(w.children)&&w.children.props)}),[]),z.useEffect(()=>(t.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",v),window.addEventListener("blur",E)),()=>{t.pauseOnFocusLoss&&(window.removeEventListener("focus",v),window.removeEventListener("blur",E))}),[t.pauseOnFocusLoss]);const y={onMouseDown:m,onTouchStart:m,onMouseUp:g,onTouchEnd:g};return l&&u&&(y.onMouseEnter=E,y.onMouseLeave=v),d&&(y.onClick=w=>{h&&h(w),o.canCloseOnClick&&c()}),{playToast:v,pauseToast:E,isRunning:e,preventExitTransition:r,toastRef:s,eventHandlers:y}}function lv(t){let{closeToast:e,theme:n,ariaLabel:r="close"}=t;return Z.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),e(i)},"aria-label":r},Z.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Z.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function jT(t){let{delay:e,isRunning:n,closeToast:r,type:i="default",hide:s,className:o,style:a,controlledProgress:l,progress:u,rtl:c,isIn:h,theme:d}=t;const m=s||l&&u===0,g={...a,animationDuration:`${e}ms`,animationPlayState:n?"running":"paused",opacity:m?0:1};l&&(g.transform=`scaleX(${u})`);const v=Cn("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${d}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":c}),E=st(o)?o({rtl:c,type:i,defaultClassName:v}):Cn(v,o);return Z.createElement("div",{role:"progressbar","aria-hidden":m?"true":"false","aria-label":"notification timer",className:E,style:g,[l&&u>=1?"onTransitionEnd":"onAnimationEnd"]:l&&u<1?null:()=>{h&&r()}})}const HT=t=>{const{isRunning:e,preventExitTransition:n,toastRef:r,eventHandlers:i}=BT(t),{closeButton:s,children:o,autoClose:a,onClick:l,type:u,hideProgressBar:c,closeToast:h,transition:d,position:m,className:g,style:v,bodyClassName:E,bodyStyle:p,progressClassName:f,progressStyle:y,updateId:w,role:T,progress:k,rtl:C,toastId:N,deleteToast:G,isIn:F,isLoading:ye,iconOut:$e,closeOnClick:et,theme:tt}=t,Kt=Cn("Toastify__toast",`Toastify__toast-theme--${tt}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":C},{"Toastify__toast--close-on-click":et}),Re=st(g)?g({rtl:C,position:m,type:u,defaultClassName:Kt}):Cn(Kt,g),ut=!!k||!a,A={closeToast:h,type:u,theme:tt};let M=null;return s===!1||(M=st(s)?s(A):z.isValidElement(s)?z.cloneElement(s,A):lv(A)),Z.createElement(d,{isIn:F,done:G,position:m,preventExitTransition:n,nodeRef:r},Z.createElement("div",{id:N,onClick:l,className:Re,...i,style:v,ref:r},Z.createElement("div",{...F&&{role:T},className:st(E)?E({type:u}):Cn("Toastify__toast-body",E),style:p},$e!=null&&Z.createElement("div",{className:Cn("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ye})},$e),Z.createElement("div",null,o)),M,Z.createElement(jT,{...w&&!ut?{key:`pb-${w}`}:{},rtl:C,theme:tt,delay:a,isRunning:e,isIn:F,closeToast:h,hide:c,type:u,style:y,className:f,controlledProgress:ut,progress:k||0})))},Nl=function(t,e){return e===void 0&&(e=!1),{enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}},WT=Cl(Nl("bounce",!0));Cl(Nl("slide",!0));Cl(Nl("zoom"));Cl(Nl("flip"));const Gc=z.forwardRef((t,e)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=zT(t),{className:s,style:o,rtl:a,containerId:l}=t;function u(c){const h=Cn("Toastify__toast-container",`Toastify__toast-container--${c}`,{"Toastify__toast-container--rtl":a});return st(s)?s({position:c,rtl:a,defaultClassName:h}):Cn(h,la(s))}return z.useEffect(()=>{e&&(e.current=r.current)},[]),Z.createElement("div",{ref:r,className:"Toastify",id:l},n((c,h)=>{const d=h.length?{...o}:{...o,pointerEvents:"none"};return Z.createElement("div",{className:u(c),style:d,key:`container-${c}`},h.map((m,g)=>{let{content:v,props:E}=m;return Z.createElement(HT,{...E,isIn:i(E.toastId),style:{...E.style,"--nth":g+1,"--len":h.length},key:`toast-${E.key}`},v)}))}))});Gc.displayName="ToastContainer",Gc.defaultProps={position:"top-right",transition:WT,autoClose:5e3,closeButton:lv,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Mu,er=new Map,Wi=[],qT=1;function uv(){return""+qT++}function KT(t){return t&&(vr(t.toastId)||os(t.toastId))?t.toastId:uv()}function as(t,e){return er.size>0?Et.emit(0,t,e):Wi.push({content:t,options:e}),e.toastId}function Ba(t,e){return{...e,type:e&&e.type||t,toastId:KT(e)}}function Bo(t){return(e,n)=>as(e,Ba(t,n))}function j(t,e){return as(t,Ba("default",e))}j.loading=(t,e)=>as(t,Ba("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e})),j.promise=function(t,e,n){let r,{pending:i,error:s,success:o}=e;i&&(r=vr(i)?j.loading(i,n):j.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=(c,h,d)=>{if(h==null)return void j.dismiss(r);const m={type:c,...a,...n,data:d},g=vr(h)?{render:h}:h;return r?j.update(r,{...m,...g}):j(g.render,{...m,...g}),d},u=st(t)?t():t;return u.then(c=>l("success",o,c)).catch(c=>l("error",s,c)),u},j.success=Bo("success"),j.info=Bo("info"),j.error=Bo("error"),j.warning=Bo("warning"),j.warn=j.warning,j.dark=(t,e)=>as(t,Ba("default",{theme:"dark",...e})),j.dismiss=t=>{er.size>0?Et.emit(1,t):Wi=Wi.filter(e=>t!=null&&e.options.toastId!==t)},j.clearWaitingQueue=function(t){return t===void 0&&(t={}),Et.emit(5,t)},j.isActive=t=>{let e=!1;return er.forEach(n=>{n.isToastActive&&n.isToastActive(t)&&(e=!0)}),e},j.update=function(t,e){e===void 0&&(e={}),setTimeout(()=>{const n=function(r,i){let{containerId:s}=i;const o=er.get(s||Mu);return o&&o.getToast(r)}(t,e);if(n){const{props:r,content:i}=n,s={...r,...e,toastId:e.toastId||t,updateId:uv()};s.toastId!==t&&(s.staleId=t);const o=s.render||i;delete s.render,as(o,s)}},0)},j.done=t=>{j.update(t,{progress:1})},j.onChange=t=>(Et.on(4,t),()=>{Et.off(4,t)}),j.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},j.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},Et.on(2,t=>{Mu=t.containerId||t,er.set(Mu,t),Wi.forEach(e=>{Et.emit(0,e.content,e.options)}),Wi=[]}).on(3,t=>{er.delete(t.containerId||t),er.size===0&&Et.off(0).off(1).off(5)});function GT(t){return ht("div",{className:"task",children:[K("input",{type:"checkbox",className:"checkbox",name:"isCompleted",checked:t.isCompleted,onChange:t.handleTaskComplete}),K("p",{className:t.isCompleted?"task-content strike":"task-content",children:t.taskContent}),K("i",{onClick:t.handleTaskDelete,className:"fa-sharp fa-solid fa-trash icon"})]})}let QT=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce((e,n)=>(n&=63,n<36?e+=n.toString(36):n<62?e+=(n-26).toString(36).toUpperCase():n>62?e+="-":e+="_",e),"");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},XT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},hv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):XT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},YT=function(t){const e=cv(t);return hv.encodeByteArray(e,!0)},ja=function(t){return YT(t).replace(/\./g,"")},dv=function(t){try{return hv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT=()=>JT().__FIREBASE_DEFAULTS__,e_=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},t_=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&dv(t[1]);return e&&JSON.parse(e)},Ed=()=>{try{return ZT()||e_()||t_()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fv=t=>{var e,n;return(n=(e=Ed())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},n_=t=>{const e=fv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},r_=()=>{var t;return(t=Ed())===null||t===void 0?void 0:t.config},pv=t=>{var e;return(e=Ed())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[ja(JSON.stringify(n)),ja(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function o_(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(qe())}function a_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function l_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function u_(){const t=qe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function c_(){try{return typeof indexedDB=="object"}catch{return!1}}function h_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d_="FirebaseError";class fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=d_,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Js.prototype.create)}}class Js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?f_(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new fn(i,a,r)}}function f_(t,e){return t.replace(p_,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const p_=/\{\$([^}]+)}/g;function m_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ha(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Vp(s)&&Vp(o)){if(!Ha(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Vp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function g_(t,e){const n=new y_(t,e);return n.subscribe.bind(n)}class y_{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");v_(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=$u),i.error===void 0&&(i.error=$u),i.complete===void 0&&(i.complete=$u);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function v_(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function $u(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t){return t&&t._delegate?t._delegate:t}class wr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new i_;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(T_(e))try{this.getOrInitializeService({instanceIdentifier:tr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=tr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=tr){return this.instances.has(e)}getOptions(e=tr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:E_(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=tr){return this.component?this.component.multipleInstances?e:tr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function E_(t){return t===tr?void 0:t}function T_(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new w_(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const S_={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},I_=X.INFO,k_={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},C_=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=k_[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Td{constructor(e){this.name=e,this._logLevel=I_,this._logHandler=C_,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?S_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const N_=(t,e)=>e.some(n=>t instanceof n);let zp,Bp;function A_(){return zp||(zp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function R_(){return Bp||(Bp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const mv=new WeakMap,Qc=new WeakMap,gv=new WeakMap,Uu=new WeakMap,_d=new WeakMap;function D_(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Mn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&mv.set(n,t)}).catch(()=>{}),_d.set(e,t),e}function O_(t){if(Qc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Qc.set(t,e)}let Xc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Qc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function L_(t){Xc=t(Xc)}function P_(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fu(this),e,...n);return gv.set(r,e.sort?e.sort():[e]),Mn(r)}:R_().includes(t)?function(...e){return t.apply(Fu(this),e),Mn(mv.get(this))}:function(...e){return Mn(t.apply(Fu(this),e))}}function x_(t){return typeof t=="function"?P_(t):(t instanceof IDBTransaction&&O_(t),N_(t,A_())?new Proxy(t,Xc):t)}function Mn(t){if(t instanceof IDBRequest)return D_(t);if(Uu.has(t))return Uu.get(t);const e=x_(t);return e!==t&&(Uu.set(t,e),_d.set(e,t)),e}const Fu=t=>_d.get(t);function M_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Mn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Mn(o.result),l.oldVersion,l.newVersion,Mn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const $_=["get","getKey","getAll","getAllKeys","count"],U_=["put","add","delete","clear"],bu=new Map;function jp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bu.get(e))return bu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=U_.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||$_.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return bu.set(e,s),s}L_(t=>({...t,get:(e,n,r)=>jp(e,n)||t.get(e,n,r),has:(e,n)=>!!jp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(b_(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function b_(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Yc="@firebase/app",Hp="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Td("@firebase/app"),V_="@firebase/app-compat",z_="@firebase/analytics-compat",B_="@firebase/analytics",j_="@firebase/app-check-compat",H_="@firebase/app-check",W_="@firebase/auth",q_="@firebase/auth-compat",K_="@firebase/database",G_="@firebase/database-compat",Q_="@firebase/functions",X_="@firebase/functions-compat",Y_="@firebase/installations",J_="@firebase/installations-compat",Z_="@firebase/messaging",eS="@firebase/messaging-compat",tS="@firebase/performance",nS="@firebase/performance-compat",rS="@firebase/remote-config",iS="@firebase/remote-config-compat",sS="@firebase/storage",oS="@firebase/storage-compat",aS="@firebase/firestore",lS="@firebase/firestore-compat",uS="firebase",cS="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="[DEFAULT]",hS={[Yc]:"fire-core",[V_]:"fire-core-compat",[B_]:"fire-analytics",[z_]:"fire-analytics-compat",[H_]:"fire-app-check",[j_]:"fire-app-check-compat",[W_]:"fire-auth",[q_]:"fire-auth-compat",[K_]:"fire-rtdb",[G_]:"fire-rtdb-compat",[Q_]:"fire-fn",[X_]:"fire-fn-compat",[Y_]:"fire-iid",[J_]:"fire-iid-compat",[Z_]:"fire-fcm",[eS]:"fire-fcm-compat",[tS]:"fire-perf",[nS]:"fire-perf-compat",[rS]:"fire-rc",[iS]:"fire-rc-compat",[sS]:"fire-gcs",[oS]:"fire-gcs-compat",[aS]:"fire-fst",[lS]:"fire-fst-compat","fire-js":"fire-js",[uS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa=new Map,Zc=new Map;function dS(t,e){try{t.container.addComponent(e)}catch(n){Er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function di(t){const e=t.name;if(Zc.has(e))return Er.debug(`There were multiple attempts to register component ${e}.`),!1;Zc.set(e,t);for(const n of Wa.values())dS(n,t);return!0}function Sd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},$n=new Js("app","Firebase",fS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new wr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $n.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo=cS;function yv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Jc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw $n.create("bad-app-name",{appName:String(i)});if(n||(n=r_()),!n)throw $n.create("no-options");const s=Wa.get(i);if(s){if(Ha(n,s.options)&&Ha(r,s.config))return s;throw $n.create("duplicate-app",{appName:i})}const o=new __(i);for(const l of Zc.values())o.addComponent(l);const a=new pS(n,r,o);return Wa.set(i,a),a}function vv(t=Jc){const e=Wa.get(t);if(!e&&t===Jc)return yv();if(!e)throw $n.create("no-app",{appName:t});return e}function Un(t,e,n){var r;let i=(r=hS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Er.warn(a.join(" "));return}di(new wr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="firebase-heartbeat-database",gS=1,Os="firebase-heartbeat-store";let Vu=null;function wv(){return Vu||(Vu=M_(mS,gS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Os)}}}).catch(t=>{throw $n.create("idb-open",{originalErrorMessage:t.message})})),Vu}async function yS(t){try{return(await wv()).transaction(Os).objectStore(Os).get(Ev(t))}catch(e){if(e instanceof fn)Er.warn(e.message);else{const n=$n.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Er.warn(n.message)}}}async function Wp(t,e){try{const r=(await wv()).transaction(Os,"readwrite");return await r.objectStore(Os).put(e,Ev(t)),r.done}catch(n){if(n instanceof fn)Er.warn(n.message);else{const r=$n.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Er.warn(r.message)}}}function Ev(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS=1024,wS=30*24*60*60*1e3;class ES{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new _S(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=qp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=wS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=qp(),{heartbeatsToSend:n,unsentEntries:r}=TS(this._heartbeatsCache.heartbeats),i=ja(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function qp(){return new Date().toISOString().substring(0,10)}function TS(t,e=vS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Kp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Kp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class _S{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return c_()?h_().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kp(t){return ja(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SS(t){di(new wr("platform-logger",e=>new F_(e),"PRIVATE")),di(new wr("heartbeat",e=>new ES(e),"PRIVATE")),Un(Yc,Hp,t),Un(Yc,Hp,"esm2017"),Un("fire-js","")}SS("");function Id(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Tv(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const IS=Tv,_v=new Js("auth","Firebase",Tv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp=new Td("@firebase/auth");function ua(t,...e){Gp.logLevel<=X.ERROR&&Gp.error(`Auth (${eo}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw kd(t,...e)}function zt(t,...e){return kd(t,...e)}function kS(t,e,n){const r=Object.assign(Object.assign({},IS()),{[e]:n});return new Js("auth","Firebase",r).create(e,{appName:t.name})}function kd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _v.create(t,...e)}function L(t,e,...n){if(!t)throw kd(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ua(e),new Error(e)}function an(t,e){t||Jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new Map;function Zt(t){an(t instanceof Function,"Expected a class definition");let e=Qp.get(t);return e?(an(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qp.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t,e){const n=Sd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ha(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function NS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function AS(){return Xp()==="http:"||Xp()==="https:"}function Xp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(AS()||a_()||"connection"in navigator)?navigator.onLine:!0}function DS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(e,n){this.shortDelay=e,this.longDelay=n,an(n>e,"Short delay should be less than long delay!"),this.isMobile=o_()||l_()}get(){return RS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t,e){an(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LS=new to(3e4,6e4);function ki(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ar(t,e,n,r,i={}){return Iv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Sv.fetch()(kv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function Iv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},OS),e);try{const i=new PS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw jo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw jo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw jo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw jo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw kS(t,c,u);xt(t,c)}}catch(i){if(i instanceof fn)throw i;xt(t,"network-request-failed")}}async function no(t,e,n,r,i={}){const s=await Ar(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function kv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Cd(t.config,i):`${t.config.apiScheme}://${i}`}class PS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(zt(this.auth,"network-request-failed")),LS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function jo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=zt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xS(t,e){return Ar(t,"POST","/v1/accounts:delete",e)}async function MS(t,e){return Ar(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $S(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),i=Nd(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ls(zu(i.auth_time)),issuedAtTime:ls(zu(i.iat)),expirationTime:ls(zu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function zu(t){return Number(t)*1e3}function Nd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ua("JWT malformed, contained fewer than 3 sections"),null;try{const i=dv(n);return i?JSON.parse(i):(ua("Failed to decode base64 JWT payload"),null)}catch(i){return ua("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function US(t){const e=Nd(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof fn&&FS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ls(this.lastLoginAt),this.creationTime=ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await fi(t,MS(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?BS(s.providerUserInfo):[],a=zS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Cv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function VS(t){const e=Ke(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BS(t){return t.map(e=>{var{providerId:n}=e,r=Id(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jS(t,e){const n=await Iv(t,{},async()=>{const r=Zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=kv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Sv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):US(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await jS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ls;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ls,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Id(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Cv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await fi(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $S(this,e)}reload(){return VS(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await fi(this,xS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:w,isAnonymous:T,providerData:k,stsTokenManager:C}=n;L(y&&C,e,"internal-error");const N=Ls.fromJSON(this.name,C);L(typeof y=="string",e,"internal-error"),mn(h,e.name),mn(d,e.name),L(typeof w=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),mn(m,e.name),mn(g,e.name),mn(v,e.name),mn(E,e.name),mn(p,e.name),mn(f,e.name);const G=new cr({uid:y,auth:e,email:d,emailVerified:w,displayName:h,isAnonymous:T,photoURL:g,phoneNumber:m,tenantId:v,stsTokenManager:N,createdAt:p,lastLoginAt:f});return k&&Array.isArray(k)&&(G.providerData=k.map(F=>Object.assign({},F))),E&&(G._redirectEventId=E),G}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ls;i.updateFromServerResponse(n);const s=new cr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qa(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Nv.type="NONE";const Yp=Nv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ca(this.userKey,i.apiKey,s),this.fullPersistenceKey=ca("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ti(Zt(Yp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Zt(Yp);const o=ca(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=cr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new ti(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new ti(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Av(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lv(e))return"Blackberry";if(Pv(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||Rv(e))&&!e.includes("edge/"))return"Chrome";if(Ov(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Av(t=qe()){return/firefox\//i.test(t)}function Ad(t=qe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rv(t=qe()){return/crios\//i.test(t)}function Dv(t=qe()){return/iemobile/i.test(t)}function Ov(t=qe()){return/android/i.test(t)}function Lv(t=qe()){return/blackberry/i.test(t)}function Pv(t=qe()){return/webos/i.test(t)}function Al(t=qe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function HS(t=qe()){var e;return Al(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function WS(){return u_()&&document.documentMode===10}function xv(t=qe()){return Al(t)||Ov(t)||Pv(t)||Lv(t)||/windows phone/i.test(t)||Dv(t)}function qS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mv(t,e=[]){let n;switch(t){case"Browser":n=Jp(qe());break;case"Worker":n=`${Jp(qe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${eo}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zp(this),this.idTokenSubscription=new Zp(this),this.beforeStateQueue=new KS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_v,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=DS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ke(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function ro(t){return Ke(t)}class Zp{constructor(e){this.auth=e,this.observer=null,this.addObserver=g_(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function QS(t,e,n){const r=ro(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=$v(e),{host:o,port:a}=XS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||YS()}function $v(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XS(t){const e=$v(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:em(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:em(o)}}}function em(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function YS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function JS(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZS(t,e){return no(t,"POST","/v1/accounts:signInWithPassword",ki(t,e))}async function eI(t,e){return Ar(t,"POST","/v1/accounts:sendOobCode",ki(t,e))}async function tI(t,e){return eI(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nI(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}async function rI(t,e){return no(t,"POST","/v1/accounts:signInWithEmailLink",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps extends Rd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ps(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ps(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ZS(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return nI(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return JS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return rI(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(t,e){return no(t,"POST","/v1/accounts:signInWithIdp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iI="http://localhost";class Tr extends Rd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Tr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Id(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Tr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:iI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Zs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function oI(t){const e=qi(Ki(t)).link,n=e?qi(Ki(e)).deep_link_id:null,r=qi(Ki(t)).deep_link_id;return(r?qi(Ki(r)).link:null)||r||n||e||t}class Dd{constructor(e){var n,r,i,s,o,a;const l=qi(Ki(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=sI((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=oI(e);try{return new Dd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.providerId=Ci.PROVIDER_ID}static credential(e,n){return Ps._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dd.parseLink(n);return L(r,"argument-error"),Ps._fromEmailAndCode(e,r.code,r.tenantId)}}Ci.PROVIDER_ID="password";Ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends Uv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends io{constructor(){super("facebook.com")}static credential(e){return Tr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return En.credential(e.oauthAccessToken)}catch{return null}}}En.FACEBOOK_SIGN_IN_METHOD="facebook.com";En.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Tr._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Tn.credential(n,r)}catch{return null}}}Tn.GOOGLE_SIGN_IN_METHOD="google.com";Tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends io{constructor(){super("github.com")}static credential(e){return Tr._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends io{constructor(){super("twitter.com")}static credential(e,n){return Tr._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Sn.credential(n,r)}catch{return null}}}Sn.TWITTER_SIGN_IN_METHOD="twitter.com";Sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aI(t,e){return no(t,"POST","/v1/accounts:signUp",ki(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cr._fromIdTokenResponse(e,r,i),o=tm(r);return new _r({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=tm(r);return new _r({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function tm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka extends fn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ka.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ka(e,n,r,i)}}function Fv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ka._fromErrorAndOperation(t,s,e,r):s})}async function lI(t,e,n=!1){const r=await fi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return _r._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uI(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await fi(t,Fv(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Nd(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),_r._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(t,e,n=!1){const r="signIn",i=await Fv(t,r,e),s=await _r._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function cI(t,e){return bv(ro(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hI(t,e,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dI(t,e,n){const r=Ke(t),i={requestType:"PASSWORD_RESET",email:e};n&&hI(r,i,n),await tI(r,i)}async function fI(t,e,n){const r=ro(t),i=await aI(r,{returnSecureToken:!0,email:e,password:n}),s=await _r._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function pI(t,e,n){return cI(Ke(t),Ci.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mI(t,e){return Ar(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gI(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Ke(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await fi(r,mI(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function yI(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function vI(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}const Ga="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ga,"1"),this.storage.removeItem(Ga),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(){const t=qe();return Ad(t)||Al(t)}const EI=1e3,TI=10;class zv extends Vv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=wI()&&qS(),this.fallbackToPolling=xv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);WS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,TI):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}zv.type="LOCAL";const _I=zv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv extends Vv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Bv.type="SESSION";const jv=Bv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Rl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await SI(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Od("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function kI(t){Bt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function CI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function AI(){return Hv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wv="firebaseLocalStorageDb",RI=1,Qa="firebaseLocalStorage",qv="fbase_key";class so{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dl(t,e){return t.transaction([Qa],e?"readwrite":"readonly").objectStore(Qa)}function DI(){const t=indexedDB.deleteDatabase(Wv);return new so(t).toPromise()}function th(){const t=indexedDB.open(Wv,RI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Qa,{keyPath:qv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Qa)?e(r):(r.close(),await DI(),e(await th()))})})}async function nm(t,e,n){const r=Dl(t,!0).put({[qv]:e,value:n});return new so(r).toPromise()}async function OI(t,e){const n=Dl(t,!1).get(e),r=await new so(n).toPromise();return r===void 0?null:r.value}function rm(t,e){const n=Dl(t,!0).delete(e);return new so(n).toPromise()}const LI=800,PI=3;class Kv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await th(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>PI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rl._getInstance(AI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await CI(),!this.activeServiceWorker)return;this.sender=new II(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await th();return await nm(e,Ga,"1"),await rm(e,Ga),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OI(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Dl(i,!1).getAll();return new so(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kv.type="LOCAL";const xI=Kv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function $I(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=zt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",MI().appendChild(r)})}function UI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new to(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FI(t,e){return e?Zt(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld extends Rd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function bI(t){return bv(t.auth,new Ld(t),t.bypassAuthState)}function VI(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),uI(n,new Ld(t),t.bypassAuthState)}async function zI(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),lI(n,new Ld(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return bI;case"linkViaPopup":case"linkViaRedirect":return zI;case"reauthViaPopup":case"reauthViaRedirect":return VI;default:xt(this.auth,"internal-error")}}resolve(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=new to(2e3,1e4);class Kr extends Gv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Kr.currentPopupAction&&Kr.currentPopupAction.cancel(),Kr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const e=Od();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(zt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,BI.get())};e()}}Kr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jI="pendingRedirect",ha=new Map;class HI extends Gv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ha.get(this.auth._key());if(!e){try{const r=await WI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ha.set(this.auth._key(),e)}return this.bypassAuthState||ha.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function WI(t,e){const n=GI(e),r=KI(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function qI(t,e){ha.set(t._key(),e)}function KI(t){return Zt(t._redirectPersistence)}function GI(t){return ca(jI,t.config.apiKey,t.name)}async function QI(t,e,n=!1){const r=ro(t),i=FI(r,e),o=await new HI(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI=10*60*1e3;class YI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Qv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(zt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XI&&this.cachedEventUids.clear(),this.cachedEventUids.has(im(e))}saveEventToCache(e){this.cachedEventUids.add(im(e)),this.lastProcessedEventTime=Date.now()}}function im(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Qv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Qv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZI(t,e={}){return Ar(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tk=/^https?/;async function nk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZI(t);for(const n of e)try{if(rk(n))return}catch{}xt(t,"unauthorized-domain")}function rk(t){const e=eh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!tk.test(n))return!1;if(ek.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ik=new to(3e4,6e4);function sm(){const t=Bt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function sk(t){return new Promise((e,n)=>{var r,i,s;function o(){sm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sm(),n(zt(t,"network-request-failed"))},timeout:ik.get()})}if(!((i=(r=Bt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Bt().gapi)===null||s===void 0)&&s.load)o();else{const a=UI("iframefcb");return Bt()[a]=()=>{gapi.load?o():n(zt(t,"network-request-failed"))},$I(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw da=null,e})}let da=null;function ok(t){return da=da||sk(t),da}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=new to(5e3,15e3),lk="__/auth/iframe",uk="emulator/auth/iframe",ck={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},hk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dk(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Cd(e,uk):`https://${t.config.authDomain}/${lk}`,r={apiKey:e.apiKey,appName:t.name,v:eo},i=hk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Zs(r).slice(1)}`}async function fk(t){const e=await ok(t),n=Bt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:dk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ck,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=zt(t,"network-request-failed"),a=Bt().setTimeout(()=>{s(o)},ak.get());function l(){Bt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mk=500,gk=600,yk="_blank",vk="http://localhost";class om{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wk(t,e,n,r=mk,i=gk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pk),{width:r.toString(),height:i.toString(),top:s,left:o}),u=qe().toLowerCase();n&&(a=Rv(u)?yk:n),Av(u)&&(e=e||vk,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(HS(u)&&a!=="_self")return Ek(e||"",a),new om(null);const h=window.open(e||"",a,c);L(h,t,"popup-blocked");try{h.focus()}catch{}return new om(h)}function Ek(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tk="__/auth/handler",_k="emulator/auth/handler";function am(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:eo,eventId:i};if(e instanceof Uv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",m_(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof io){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Sk(t)}?${Zs(a).slice(1)}`}function Sk({config:t}){return t.emulator?Cd(t,_k):`https://${t.authDomain}/${Tk}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bu="webStorageSupport";class Ik{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jv,this._completeRedirectFn=QI,this._overrideRedirectResult=qI}async _openPopup(e,n,r,i){var s;an((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=am(e,n,r,eh(),i);return wk(e,o,Od())}async _openRedirect(e,n,r,i){return await this._originValidation(e),kI(am(e,n,r,eh(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(an(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await fk(e),r=new YI(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bu,{type:Bu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Bu];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return xv()||Ad()||Al()}}const kk=Ik;var lm="@firebase/auth",um="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ak(t){di(new wr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{L(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),L(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mv(t)},c=new GS(a,l,u);return NS(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),di(new wr("auth-internal",e=>{const n=ro(e.getProvider("auth").getImmediate());return(r=>new Ck(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(lm,um,Nk(t)),Un(lm,um,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rk=5*60,Dk=pv("authIdTokenMaxAge")||Rk;let cm=null;const Ok=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Dk)return;const i=n==null?void 0:n.token;cm!==i&&(cm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function fa(t=vv()){const e=Sd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=CS(t,{popupRedirectResolver:kk,persistence:[xI,_I,jv]}),r=pv("authTokenSyncURL");if(r){const s=Ok(r);vI(n,s,()=>s(n.currentUser)),yI(n,o=>s(o))}const i=fv("auth");return i&&QS(n,`http://${i}`),n}Ak("Browser");var Lk=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},D,Pd=Pd||{},$=Lk||self;function Xa(){}function Ol(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function oo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Pk(t){return Object.prototype.hasOwnProperty.call(t,ju)&&t[ju]||(t[ju]=++xk)}var ju="closure_uid_"+(1e9*Math.random()>>>0),xk=0;function Mk(t,e,n){return t.call.apply(t.bind,arguments)}function $k(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function je(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?je=Mk:je=$k,je.apply(null,arguments)}function Ho(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Me(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Kn(){this.s=this.s,this.o=this.o}var Uk=0;Kn.prototype.s=!1;Kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),Uk!=0)&&Pk(this)};Kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Xv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function xd(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function hm(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ol(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function He(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}He.prototype.h=function(){this.defaultPrevented=!0};var Fk=function(){if(!$.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{$.addEventListener("test",Xa,e),$.removeEventListener("test",Xa,e)}catch{}return t}();function Ya(t){return/^[\s\xa0]*$/.test(t)}var dm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Hu(t,e){return t<e?-1:t>e?1:0}function Ll(){var t=$.navigator;return t&&(t=t.userAgent)?t:""}function Ft(t){return Ll().indexOf(t)!=-1}function Md(t){return Md[" "](t),t}Md[" "]=Xa;function bk(t){var e=Bk;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var Vk=Ft("Opera"),pi=Ft("Trident")||Ft("MSIE"),Yv=Ft("Edge"),nh=Yv||pi,Jv=Ft("Gecko")&&!(Ll().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge"))&&!(Ft("Trident")||Ft("MSIE"))&&!Ft("Edge"),zk=Ll().toLowerCase().indexOf("webkit")!=-1&&!Ft("Edge");function Zv(){var t=$.document;return t?t.documentMode:void 0}var Ja;e:{var Wu="",qu=function(){var t=Ll();if(Jv)return/rv:([^\);]+)(\)|;)/.exec(t);if(Yv)return/Edge\/([\d\.]+)/.exec(t);if(pi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(zk)return/WebKit\/(\S+)/.exec(t);if(Vk)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qu&&(Wu=qu?qu[1]:""),pi){var Ku=Zv();if(Ku!=null&&Ku>parseFloat(Wu)){Ja=String(Ku);break e}}Ja=Wu}var Bk={};function jk(){return bk(function(){let t=0;const e=dm(String(Ja)).split("."),n=dm("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Hu(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Hu(i[2].length==0,s[2].length==0)||Hu(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var rh;if($.document&&pi){var fm=Zv();rh=fm||parseInt(Ja,10)||void 0}else rh=void 0;var Hk=rh;function xs(t,e){if(He.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Jv){e:{try{Md(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:Wk[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xs.X.h.call(this)}}Me(xs,He);var Wk={2:"touch",3:"pen",4:"mouse"};xs.prototype.h=function(){xs.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ao="closure_listenable_"+(1e6*Math.random()|0),qk=0;function Kk(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++qk,this.ba=this.ea=!1}function Pl(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function $d(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function e0(t){const e={};for(const n in t)e[n]=t[n];return e}const pm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function t0(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<pm.length;s++)n=pm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function xl(t){this.src=t,this.g={},this.h=0}xl.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=sh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new Kk(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function ih(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Xv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Pl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function sh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Ud="closure_lm_"+(1e6*Math.random()|0),Gu={};function n0(t,e,n,r,i){if(r&&r.once)return i0(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)n0(t,e[s],n,r,i);return null}return n=Vd(n),t&&t[ao]?t.N(e,n,oo(r)?!!r.capture:!!r,i):r0(t,e,n,!1,r,i)}function r0(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=oo(i)?!!i.capture:!!i,a=bd(t);if(a||(t[Ud]=a=new xl(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=Gk(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Fk||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(o0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function Gk(){function t(n){return e.call(t.src,t.listener,n)}const e=Qk;return t}function i0(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)i0(t,e[s],n,r,i);return null}return n=Vd(n),t&&t[ao]?t.O(e,n,oo(r)?!!r.capture:!!r,i):r0(t,e,n,!0,r,i)}function s0(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)s0(t,e[s],n,r,i);else r=oo(r)?!!r.capture:!!r,n=Vd(n),t&&t[ao]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=sh(s,n,r,i),-1<n&&(Pl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=sh(e,n,r,i)),(n=-1<t?e[t]:null)&&Fd(n))}function Fd(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[ao])ih(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(o0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bd(e))?(ih(n,t),n.h==0&&(n.src=null,e[Ud]=null)):Pl(t)}}}function o0(t){return t in Gu?Gu[t]:Gu[t]="on"+t}function Qk(t,e){if(t.ba)t=!0;else{e=new xs(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Fd(t),t=n.call(r,e)}return t}function bd(t){return t=t[Ud],t instanceof xl?t:null}var Qu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Vd(t){return typeof t=="function"?t:(t[Qu]||(t[Qu]=function(e){return t.handleEvent(e)}),t[Qu])}function Ae(){Kn.call(this),this.i=new xl(this),this.P=this,this.I=null}Me(Ae,Kn);Ae.prototype[ao]=!0;Ae.prototype.removeEventListener=function(t,e,n,r){s0(this,t,e,n,r)};function Pe(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new He(e,t);else if(e instanceof He)e.target=e.target||t;else{var i=e;e=new He(r,t),t0(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Wo(o,r,!0,e)&&i}if(o=e.g=t,i=Wo(o,r,!0,e)&&i,i=Wo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Wo(o,r,!1,e)&&i}Ae.prototype.M=function(){if(Ae.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Pl(n[r]);delete t.g[e],t.h--}}this.I=null};Ae.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Ae.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Wo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&ih(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var zd=$.JSON.stringify;function Xk(){var t=u0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class Yk{constructor(){this.h=this.g=null}add(e,n){const r=a0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var a0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Jk,t=>t.reset());class Jk{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function Zk(t){$.setTimeout(()=>{throw t},0)}function l0(t,e){oh||eC(),ah||(oh(),ah=!0),u0.add(t,e)}var oh;function eC(){var t=$.Promise.resolve(void 0);oh=function(){t.then(tC)}}var ah=!1,u0=new Yk;function tC(){for(var t;t=Xk();){try{t.h.call(t.g)}catch(n){Zk(n)}var e=a0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}ah=!1}function Ml(t,e){Ae.call(this),this.h=t||1,this.g=e||$,this.j=je(this.lb,this),this.l=Date.now()}Me(Ml,Ae);D=Ml.prototype;D.ca=!1;D.R=null;D.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Pe(this,"tick"),this.ca&&(Bd(this),this.start()))}};D.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Bd(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}D.M=function(){Ml.X.M.call(this),Bd(this),delete this.g};function jd(t,e,n){if(typeof t=="function")n&&(t=je(t,n));else if(t&&typeof t.handleEvent=="function")t=je(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:$.setTimeout(t,e||0)}function c0(t){t.g=jd(()=>{t.g=null,t.i&&(t.i=!1,c0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class nC extends Kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:c0(this)}M(){super.M(),this.g&&($.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ms(t){Kn.call(this),this.h=t,this.g={}}Me(Ms,Kn);var mm=[];function h0(t,e,n,r){Array.isArray(n)||(n&&(mm[0]=n.toString()),n=mm);for(var i=0;i<n.length;i++){var s=n0(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function d0(t){$d(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fd(e)},t),t.g={}}Ms.prototype.M=function(){Ms.X.M.call(this),d0(this)};Ms.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function $l(){this.g=!0}$l.prototype.Aa=function(){this.g=!1};function rC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function iC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Gr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+oC(t,n)+(r?" "+r:"")})}function sC(t,e){t.info(function(){return"TIMEOUT: "+e})}$l.prototype.info=function(){};function oC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return zd(n)}catch{return e}}var Rr={},gm=null;function Ul(){return gm=gm||new Ae}Rr.Pa="serverreachability";function f0(t){He.call(this,Rr.Pa,t)}Me(f0,He);function $s(t){const e=Ul();Pe(e,new f0(e))}Rr.STAT_EVENT="statevent";function p0(t,e){He.call(this,Rr.STAT_EVENT,t),this.stat=e}Me(p0,He);function Xe(t){const e=Ul();Pe(e,new p0(e,t))}Rr.Qa="timingevent";function m0(t,e){He.call(this,Rr.Qa,t),this.size=e}Me(m0,He);function lo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return $.setTimeout(function(){t()},e)}var Fl={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},g0={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Hd(){}Hd.prototype.h=null;function ym(t){return t.h||(t.h=t.i())}function y0(){}var uo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Wd(){He.call(this,"d")}Me(Wd,He);function qd(){He.call(this,"c")}Me(qd,He);var lh;function bl(){}Me(bl,Hd);bl.prototype.g=function(){return new XMLHttpRequest};bl.prototype.i=function(){return{}};lh=new bl;function co(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new Ms(this),this.O=aC,t=nh?125:void 0,this.T=new Ml(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new v0}function v0(){this.i=null,this.g="",this.h=!1}var aC=45e3,uh={},Za={};D=co.prototype;D.setTimeout=function(t){this.O=t};function ch(t,e,n){t.K=1,t.v=zl(ln(e)),t.s=n,t.P=!0,w0(t,null)}function w0(t,e){t.F=Date.now(),ho(t),t.A=ln(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),N0(n.i,"t",r),t.C=0,n=t.l.H,t.h=new v0,t.g=G0(t.l,n?e:null,!t.s),0<t.N&&(t.L=new nC(je(t.La,t,t.g),t.N)),h0(t.S,t.g,"readystatechange",t.ib),e=t.H?e0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),$s(),rC(t.j,t.u,t.A,t.m,t.U,t.s)}D.ib=function(t){t=t.target;const e=this.L;e&&en(t)==3?e.l():this.La(t)};D.La=function(t){try{if(t==this.g)e:{const c=en(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||nh||this.g&&(this.h.h||this.g.fa()||Tm(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?$s(3):$s(2)),Vl(this);var n=this.g.aa();this.Y=n;t:if(E0(this)){var r=Tm(this.g);t="";var i=r.length,s=en(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){sr(this),us(this);var o="";break t}this.h.i=new $.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,iC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ya(a)){var u=a;break t}}u=null}if(n=u)Gr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hh(this,n);else{this.i=!1,this.o=3,Xe(12),sr(this),us(this);break e}}this.P?(T0(this,c,o),nh&&this.i&&c==3&&(h0(this.S,this.T,"tick",this.hb),this.T.start())):(Gr(this.j,this.m,o,null),hh(this,o)),c==4&&sr(this),this.i&&!this.I&&(c==4?H0(this.l,this):(this.i=!1,ho(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xe(12)):(this.o=0,Xe(13)),sr(this),us(this)}}}catch{}finally{}};function E0(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function T0(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=lC(t,n),i==Za){e==4&&(t.o=4,Xe(14),r=!1),Gr(t.j,t.m,null,"[Incomplete Response]");break}else if(i==uh){t.o=4,Xe(15),Gr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Gr(t.j,t.m,i,null),hh(t,i);E0(t)&&i!=Za&&i!=uh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xe(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zd(e),e.K=!0,Xe(11))):(Gr(t.j,t.m,n,"[Invalid Chunked Response]"),sr(t),us(t))}D.hb=function(){if(this.g){var t=en(this.g),e=this.g.fa();this.C<e.length&&(Vl(this),T0(this,t,e),this.i&&t!=4&&ho(this))}};function lC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Za:(n=Number(e.substring(n,r)),isNaN(n)?uh:(r+=1,r+n>e.length?Za:(e=e.substr(r,n),t.C=r+n,e)))}D.cancel=function(){this.I=!0,sr(this)};function ho(t){t.V=Date.now()+t.O,_0(t,t.O)}function _0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=lo(je(t.gb,t),e)}function Vl(t){t.B&&($.clearTimeout(t.B),t.B=null)}D.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(sC(this.j,this.A),this.K!=2&&($s(),Xe(17)),sr(this),this.o=2,us(this)):_0(this,this.V-t)};function us(t){t.l.G==0||t.I||H0(t.l,t)}function sr(t){Vl(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Bd(t.T),d0(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function hh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||dh(n.h,t))){if(!t.J&&dh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)nl(n),Hl(n);else break e;Jd(n),Xe(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=lo(je(n.cb,n),6e3));if(1>=D0(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else or(n,11)}else if((t.J||n.g==t)&&nl(n),!Ya(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Kd(s,s.h),s.h=null))}if(r.D){const v=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,se(r.F,r.D,v))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=K0(r,r.H?r.ka:null,r.V),o.J){O0(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Vl(a),ho(a)),r.g=o}else B0(r);0<n.i.length&&Wl(n)}else u[0]!="stop"&&u[0]!="close"||or(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?or(n,7):Yd(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}$s(4)}catch{}}function uC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ol(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function cC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ol(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function S0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ol(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=cC(t),r=uC(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var I0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function hr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof hr){this.h=e!==void 0?e:t.h,el(this,t.j),this.s=t.s,this.g=t.g,tl(this,t.m),this.l=t.l,e=t.i;var n=new Us;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),vm(this,n),this.o=t.o}else t&&(n=String(t).match(I0))?(this.h=!!e,el(this,n[1]||"",!0),this.s=Gi(n[2]||""),this.g=Gi(n[3]||"",!0),tl(this,n[4]),this.l=Gi(n[5]||"",!0),vm(this,n[6]||"",!0),this.o=Gi(n[7]||"")):(this.h=!!e,this.i=new Us(null,this.h))}hr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Qi(e,wm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Qi(e,wm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Qi(n,n.charAt(0)=="/"?pC:fC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Qi(n,gC)),t.join("")};function ln(t){return new hr(t)}function el(t,e,n){t.j=n?Gi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function tl(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function vm(t,e,n){e instanceof Us?(t.i=e,yC(t.i,t.h)):(n||(e=Qi(e,mC)),t.i=new Us(e,t.h))}function se(t,e,n){t.i.set(e,n)}function zl(t){return se(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Gi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Qi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,dC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function dC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var wm=/[#\/\?@]/g,fC=/[#\?:]/g,pC=/[#\?]/g,mC=/[#\?@]/g,gC=/#/g;function Us(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Gn(t){t.g||(t.g=new Map,t.h=0,t.i&&hC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}D=Us.prototype;D.add=function(t,e){Gn(this),this.i=null,t=Ni(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function k0(t,e){Gn(t),e=Ni(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function C0(t,e){return Gn(t),e=Ni(t,e),t.g.has(e)}D.forEach=function(t,e){Gn(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};D.oa=function(){Gn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};D.W=function(t){Gn(this);let e=[];if(typeof t=="string")C0(this,t)&&(e=e.concat(this.g.get(Ni(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};D.set=function(t,e){return Gn(this),this.i=null,t=Ni(this,t),C0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};D.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function N0(t,e,n){k0(t,e),0<n.length&&(t.i=null,t.g.set(Ni(t,e),xd(n)),t.h+=n.length)}D.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ni(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function yC(t,e){e&&!t.j&&(Gn(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(k0(this,r),N0(this,i,n))},t)),t.j=e}var vC=class{constructor(e,n){this.h=e,this.g=n}};function A0(t){this.l=t||wC,$.PerformanceNavigationTiming?(t=$.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!($.g&&$.g.Ga&&$.g.Ga()&&$.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wC=10;function R0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function D0(t){return t.h?1:t.g?t.g.size:0}function dh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Kd(t,e){t.g?t.g.add(e):t.h=e}function O0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}A0.prototype.cancel=function(){if(this.i=L0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function L0(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return xd(t.i)}function Gd(){}Gd.prototype.stringify=function(t){return $.JSON.stringify(t,void 0)};Gd.prototype.parse=function(t){return $.JSON.parse(t,void 0)};function EC(){this.g=new Gd}function TC(t,e,n){const r=n||"";try{S0(t,function(i,s){let o=i;oo(i)&&(o=zd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function _C(t,e){const n=new $l;if($.Image){const r=new Image;r.onload=Ho(qo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ho(qo,n,r,"TestLoadImage: error",!1,e),r.onabort=Ho(qo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ho(qo,n,r,"TestLoadImage: timeout",!1,e),$.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function qo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function fo(t){this.l=t.ac||null,this.j=t.jb||!1}Me(fo,Hd);fo.prototype.g=function(){return new Bl(this.l,this.j)};fo.prototype.i=function(t){return function(){return t}}({});function Bl(t,e){Ae.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Qd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Me(Bl,Ae);var Qd=0;D=Bl.prototype;D.open=function(t,e){if(this.readyState!=Qd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Fs(this)};D.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||$).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};D.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,po(this)),this.readyState=Qd};D.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Fs(this)),this.g&&(this.readyState=3,Fs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof $.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;P0(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function P0(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}D.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?po(this):Fs(this),this.readyState==3&&P0(this)}};D.Va=function(t){this.g&&(this.response=this.responseText=t,po(this))};D.Ua=function(t){this.g&&(this.response=t,po(this))};D.ga=function(){this.g&&po(this)};function po(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Fs(t)}D.setRequestHeader=function(t,e){this.v.append(t,e)};D.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};D.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Fs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var SC=$.JSON.parse;function he(t){Ae.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=x0,this.K=this.L=!1}Me(he,Ae);var x0="",IC=/^https?$/i,kC=["POST","PUT"];D=he.prototype;D.Ka=function(t){this.L=t};D.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():lh.g(),this.C=this.u?ym(this.u):ym(lh),this.g.onreadystatechange=je(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){Em(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=$.FormData&&t instanceof $.FormData,!(0<=Xv(kC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{U0(this),0<this.B&&((this.K=CC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=je(this.qa,this)):this.A=jd(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Em(this,s)}};function CC(t){return pi&&jk()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}D.qa=function(){typeof Pd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pe(this,"timeout"),this.abort(8))};function Em(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,M0(t),jl(t)}function M0(t){t.D||(t.D=!0,Pe(t,"complete"),Pe(t,"error"))}D.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pe(this,"complete"),Pe(this,"abort"),jl(this))};D.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),jl(this,!0)),he.X.M.call(this)};D.Ha=function(){this.s||(this.F||this.v||this.l?$0(this):this.fb())};D.fb=function(){$0(this)};function $0(t){if(t.h&&typeof Pd<"u"&&(!t.C[1]||en(t)!=4||t.aa()!=2)){if(t.v&&en(t)==4)jd(t.Ha,0,t);else if(Pe(t,"readystatechange"),en(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(I0)[1]||null;if(!i&&$.self&&$.self.location){var s=$.self.location.protocol;i=s.substr(0,s.length-1)}r=!IC.test(i?i.toLowerCase():"")}n=r}if(n)Pe(t,"complete"),Pe(t,"success");else{t.m=6;try{var o=2<en(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",M0(t)}}finally{jl(t)}}}}function jl(t,e){if(t.g){U0(t);const n=t.g,r=t.C[0]?Xa:null;t.g=null,t.C=null,e||Pe(t,"ready");try{n.onreadystatechange=r}catch{}}}function U0(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&($.clearTimeout(t.A),t.A=null)}function en(t){return t.g?t.g.readyState:0}D.aa=function(){try{return 2<en(this)?this.g.status:-1}catch{return-1}};D.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};D.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),SC(e)}};function Tm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case x0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}D.Ea=function(){return this.m};D.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function F0(t){let e="";return $d(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=F0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):se(t,e,n))}function Vi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function b0(t){this.Ca=0,this.i=[],this.j=new $l,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Vi("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Vi("baseRetryDelayMs",5e3,t),this.bb=Vi("retryDelaySeedMs",1e4,t),this.$a=Vi("forwardChannelMaxRetries",2,t),this.ta=Vi("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new A0(t&&t.concurrentRequestLimit),this.Fa=new EC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}D=b0.prototype;D.ma=8;D.G=1;function Yd(t){if(V0(t),t.G==3){var e=t.U++,n=ln(t.F);se(n,"SID",t.I),se(n,"RID",e),se(n,"TYPE","terminate"),mo(t,n),e=new co(t,t.j,e,void 0),e.K=2,e.v=zl(ln(n)),n=!1,$.navigator&&$.navigator.sendBeacon&&(n=$.navigator.sendBeacon(e.v.toString(),"")),!n&&$.Image&&(new Image().src=e.v,n=!0),n||(e.g=G0(e.l,null),e.g.da(e.v)),e.F=Date.now(),ho(e)}q0(t)}function Hl(t){t.g&&(Zd(t),t.g.cancel(),t.g=null)}function V0(t){Hl(t),t.u&&($.clearTimeout(t.u),t.u=null),nl(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&$.clearTimeout(t.m),t.m=null)}function Wl(t){R0(t.h)||t.m||(t.m=!0,l0(t.Ja,t),t.C=0)}function NC(t,e){return D0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=lo(je(t.Ja,t,e),W0(t,t.C)),t.C++,!0)}D.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new co(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=e0(s),t0(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=z0(this,i,e),n=ln(this.F),se(n,"RID",t),se(n,"CVER",22),this.D&&se(n,"X-HTTP-Session-Id",this.D),mo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(F0(s)))+"&"+e:this.o&&Xd(n,this.o,s)),Kd(this.h,i),this.Ya&&se(n,"TYPE","init"),this.O?(se(n,"$req",e),se(n,"SID","null"),i.Z=!0,ch(i,n,null)):ch(i,n,e),this.G=2}}else this.G==3&&(t?_m(this,t):this.i.length==0||R0(this.h)||_m(this))};function _m(t,e){var n;e?n=e.m:n=t.U++;const r=ln(t.F);se(r,"SID",t.I),se(r,"RID",n),se(r,"AID",t.T),mo(t,r),t.o&&t.s&&Xd(r,t.o,t.s),n=new co(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=z0(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Kd(t.h,n),ch(n,r,e)}function mo(t,e){t.ia&&$d(t.ia,function(n,r){se(e,r,n)}),t.l&&S0({},function(n,r){se(e,r,n)})}function z0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?je(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{TC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function B0(t){t.g||t.u||(t.Z=1,l0(t.Ia,t),t.A=0)}function Jd(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=lo(je(t.Ia,t),W0(t,t.A)),t.A++,!0)}D.Ia=function(){if(this.u=null,j0(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=lo(je(this.eb,this),t)}};D.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Xe(10),Hl(this),j0(this))};function Zd(t){t.B!=null&&($.clearTimeout(t.B),t.B=null)}function j0(t){t.g=new co(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=ln(t.sa);se(e,"RID","rpc"),se(e,"SID",t.I),se(e,"CI",t.L?"0":"1"),se(e,"AID",t.T),se(e,"TYPE","xmlhttp"),mo(t,e),t.o&&t.s&&Xd(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=zl(ln(e)),n.s=null,n.P=!0,w0(n,t)}D.cb=function(){this.v!=null&&(this.v=null,Hl(this),Jd(this),Xe(19))};function nl(t){t.v!=null&&($.clearTimeout(t.v),t.v=null)}function H0(t,e){var n=null;if(t.g==e){nl(t),Zd(t),t.g=null;var r=2}else if(dh(t.h,e))n=e.D,O0(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=Ul(),Pe(r,new m0(r,n)),Wl(t)}else B0(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&NC(t,e)||r==2&&Jd(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:or(t,5);break;case 4:or(t,10);break;case 3:or(t,6);break;default:or(t,2)}}}function W0(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function or(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=je(t.kb,t);n||(n=new hr("//www.google.com/images/cleardot.gif"),$.location&&$.location.protocol=="http"||el(n,"https"),zl(n)),_C(n.toString(),r)}else Xe(2);t.G=0,t.l&&t.l.va(e),q0(t),V0(t)}D.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Xe(2)):(this.j.info("Failed to ping google.com"),Xe(1))};function q0(t){if(t.G=0,t.la=[],t.l){const e=L0(t.h);(e.length!=0||t.i.length!=0)&&(hm(t.la,e),hm(t.la,t.i),t.h.i.length=0,xd(t.i),t.i.length=0),t.l.ua()}}function K0(t,e,n){var r=n instanceof hr?ln(n):new hr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),tl(r,r.m);else{var i=$.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new hr(null,void 0);r&&el(s,r),e&&(s.g=e),i&&tl(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&se(r,n,e),se(r,"VER",t.ma),mo(t,r),r}function G0(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new he(new fo({jb:!0})):new he(t.ra),e.Ka(t.H),e}function Q0(){}D=Q0.prototype;D.xa=function(){};D.wa=function(){};D.va=function(){};D.ua=function(){};D.Ra=function(){};function rl(){if(pi&&!(10<=Number(Hk)))throw Error("Environmental error: no available transport.")}rl.prototype.g=function(t,e){return new yt(t,e)};function yt(t,e){Ae.call(this),this.g=new b0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Ya(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ya(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ai(this)}Me(yt,Ae);yt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Xe(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=K0(t,null,t.V),Wl(t)};yt.prototype.close=function(){Yd(this.g)};yt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zd(t),t=n);e.i.push(new vC(e.ab++,t)),e.G==3&&Wl(e)};yt.prototype.M=function(){this.g.l=null,delete this.j,Yd(this.g),delete this.g,yt.X.M.call(this)};function X0(t){Wd.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Me(X0,Wd);function Y0(){qd.call(this),this.status=1}Me(Y0,qd);function Ai(t){this.g=t}Me(Ai,Q0);Ai.prototype.xa=function(){Pe(this.g,"a")};Ai.prototype.wa=function(t){Pe(this.g,new X0(t))};Ai.prototype.va=function(t){Pe(this.g,new Y0)};Ai.prototype.ua=function(){Pe(this.g,"b")};rl.prototype.createWebChannel=rl.prototype.g;yt.prototype.send=yt.prototype.u;yt.prototype.open=yt.prototype.m;yt.prototype.close=yt.prototype.close;Fl.NO_ERROR=0;Fl.TIMEOUT=8;Fl.HTTP_ERROR=6;g0.COMPLETE="complete";y0.EventType=uo;uo.OPEN="a";uo.CLOSE="b";uo.ERROR="c";uo.MESSAGE="d";Ae.prototype.listen=Ae.prototype.N;he.prototype.listenOnce=he.prototype.O;he.prototype.getLastError=he.prototype.Oa;he.prototype.getLastErrorCode=he.prototype.Ea;he.prototype.getStatus=he.prototype.aa;he.prototype.getResponseJson=he.prototype.Sa;he.prototype.getResponseText=he.prototype.fa;he.prototype.send=he.prototype.da;he.prototype.setWithCredentials=he.prototype.Ka;var AC=function(){return new rl},RC=function(){return Ul()},Xu=Fl,DC=g0,OC=Rr,Sm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},LC=fo,Ko=y0,PC=he;const Im="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}be.UNAUTHENTICATED=new be(null),be.GOOGLE_CREDENTIALS=new be("google-credentials-uid"),be.FIRST_PARTY=new be("first-party-uid"),be.MOCK_USER=new be("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ri="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=new Td("@firebase/firestore");function km(){return Sr.logLevel}function O(t,...e){if(Sr.logLevel<=X.DEBUG){const n=e.map(ef);Sr.debug(`Firestore (${Ri}): ${t}`,...n)}}function un(t,...e){if(Sr.logLevel<=X.ERROR){const n=e.map(ef);Sr.error(`Firestore (${Ri}): ${t}`,...n)}}function fh(t,...e){if(Sr.logLevel<=X.WARN){const n=e.map(ef);Sr.warn(`Firestore (${Ri}): ${t}`,...n)}}function ef(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${Ri}) INTERNAL ASSERTION FAILED: `+t;throw un(e),new Error(e)}function te(t,e){t||U()}function V(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class xC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(be.UNAUTHENTICATED))}shutdown(){}}class MC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class $C{constructor(e){this.t=e,this.currentUser=be.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Fn;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Fn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Fn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(te(typeof r.accessToken=="string"),new J0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return te(e===null||typeof e=="string"),new be(e)}}class UC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=be.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(te(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class FC{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new UC(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(be.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class bC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class VC{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,O("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(te(typeof n.token=="string"),this.A=n.token,new bC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=zC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function Y(t,e){return t<e?-1:t>e?1:0}function mi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(I.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(I.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Te(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Y(this.nanoseconds,e.nanoseconds):Y(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.timestamp=e}static fromTimestamp(e){return new b(e)}static min(){return new b(new Te(0,0))}static max(){return new b(new Te(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return bs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof bs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ce extends bs{construct(e,n,r){return new ce(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(I.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ce(n)}static emptyPath(){return new ce([])}}const BC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends bs{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return BC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(I.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(I.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(I.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(I.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(ce.fromString(e))}static fromName(e){return new P(ce.fromString(e).popFirst(5))}static empty(){return new P(ce.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ce.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ce.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new ce(e.slice()))}}function jC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=b.fromTimestamp(r===1e9?new Te(n+1,0):new Te(n,r));return new zn(i,P.empty(),e)}function HC(t){return new zn(t.readTime,t.key,-1)}class zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new zn(b.min(),P.empty(),-1)}static max(){return new zn(b.max(),P.empty(),-1)}}function WC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=P.comparator(t.documentKey,e.documentKey),n!==0?n:Y(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class KC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t){if(t.code!==I.FAILED_PRECONDITION||t.message!==qC)throw t;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(i=>i?S.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new S((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new S((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function yo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}tf.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Vs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Dr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function e1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ql(t){return t==null}function il(t){return t===0&&1/t==-1/0}function QC(t){return typeof t=="number"&&Number.isInteger(t)&&!il(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Ge(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ge(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Y(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ge.EMPTY_BYTE_STRING=new Ge("");const XC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Bn(t){if(te(!!t),typeof t=="string"){let e=0;const n=XC.exec(t);if(te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:me(t.seconds),nanos:me(t.nanos)}}function me(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function gi(t){return typeof t=="string"?Ge.fromBase64String(t):Ge.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function t1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function n1(t){const e=t.mapValue.fields.__previous_value__;return t1(e)?n1(e):e}function zs(t){const e=Bn(t.mapValue.fields.__local_write_time__.timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ir(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?t1(t)?4:YC(t)?9007199254740991:10:U()}function Wt(t,e){if(t===e)return!0;const n=Ir(t);if(n!==Ir(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return zs(t).isEqual(zs(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Bn(r.timestampValue),o=Bn(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return gi(r.bytesValue).isEqual(gi(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return me(r.geoPointValue.latitude)===me(i.geoPointValue.latitude)&&me(r.geoPointValue.longitude)===me(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return me(r.integerValue)===me(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=me(r.doubleValue),o=me(i.doubleValue);return s===o?il(s)===il(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return mi(t.arrayValue.values||[],e.arrayValue.values||[],Wt);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(Cm(s)!==Cm(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Wt(s[a],o[a])))return!1;return!0}(t,e);default:return U()}}function Bs(t,e){return(t.values||[]).find(n=>Wt(n,e))!==void 0}function yi(t,e){if(t===e)return 0;const n=Ir(t),r=Ir(e);if(n!==r)return Y(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Y(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=me(i.integerValue||i.doubleValue),a=me(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Nm(t.timestampValue,e.timestampValue);case 4:return Nm(zs(t),zs(e));case 5:return Y(t.stringValue,e.stringValue);case 6:return function(i,s){const o=gi(i),a=gi(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=Y(o[l],a[l]);if(u!==0)return u}return Y(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=Y(me(i.latitude),me(s.latitude));return o!==0?o:Y(me(i.longitude),me(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=yi(o[l],a[l]);if(u)return u}return Y(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Go.mapValue&&s===Go.mapValue)return 0;if(i===Go.mapValue)return 1;if(s===Go.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=Y(a[c],u[c]);if(h!==0)return h;const d=yi(o[a[c]],l[u[c]]);if(d!==0)return d}return Y(a.length,u.length)}(t.mapValue,e.mapValue);default:throw U()}}function Nm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Y(t,e);const n=Bn(t),r=Bn(e),i=Y(n.seconds,r.seconds);return i!==0?i:Y(n.nanos,r.nanos)}function vi(t){return ph(t)}function ph(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Bn(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?gi(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,P.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=ph(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${ph(r.fields[a])}`;return s+"}"}(t.mapValue):U();var e,n}function mh(t){return!!t&&"integerValue"in t}function nf(t){return!!t&&"arrayValue"in t}function Am(t){return!!t&&"nullValue"in t}function Rm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function pa(t){return!!t&&"mapValue"in t}function cs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Dr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=cs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=cs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function YC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,n){this.position=e,this.inclusive=n}}function Dm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),n.key):r=yi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Om(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r1{}class we extends r1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ZC(e,n,r):n==="array-contains"?new nN(e,r):n==="in"?new rN(e,r):n==="not-in"?new iN(e,r):n==="array-contains-any"?new sN(e,r):new we(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new eN(e,r):new tN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(yi(n,this.value)):n!==null&&Ir(this.value)===Ir(n)&&this.matchesComparison(yi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class qt extends r1{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new qt(e,n)}matches(e){return i1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function i1(t){return t.op==="and"}function s1(t){return JC(t)&&i1(t)}function JC(t){for(const e of t.filters)if(e instanceof qt)return!1;return!0}function gh(t){if(t instanceof we)return t.field.canonicalString()+t.op.toString()+vi(t.value);if(s1(t))return t.filters.map(e=>gh(e)).join(",");{const e=t.filters.map(n=>gh(n)).join(",");return`${t.op}(${e})`}}function o1(t,e){return t instanceof we?function(n,r){return r instanceof we&&n.op===r.op&&n.field.isEqual(r.field)&&Wt(n.value,r.value)}(t,e):t instanceof qt?function(n,r){return r instanceof qt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&o1(s,r.filters[o]),!0):!1}(t,e):void U()}function a1(t){return t instanceof we?function(e){return`${e.field.canonicalString()} ${e.op} ${vi(e.value)}`}(t):t instanceof qt?function(e){return e.op.toString()+" {"+e.getFilters().map(a1).join(" ,")+"}"}(t):"Filter"}class ZC extends we{constructor(e,n,r){super(e,n,r),this.key=P.fromName(r.referenceValue)}matches(e){const n=P.comparator(e.key,this.key);return this.matchesComparison(n)}}class eN extends we{constructor(e,n){super(e,"in",n),this.keys=l1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class tN extends we{constructor(e,n){super(e,"not-in",n),this.keys=l1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function l1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>P.fromName(r.referenceValue))}class nN extends we{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return nf(n)&&Bs(n.arrayValue,this.value)}}class rN extends we{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bs(this.value.arrayValue,n)}}class iN extends we{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bs(this.value.arrayValue,n)}}class sN extends we{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!nf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Bs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n="asc"){this.field=e,this.dir=n}}function oN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qo(this.root,e,this.comparator,!0)}}class Qo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Oe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Lm(this.data.getIterator())}getIteratorFrom(e){return new Lm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof _e)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new _e(this.comparator);return n.data=e,n}}class Lm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new ft([])}unionWith(e){let n=new _e(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return mi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.value=e}static empty(){return new rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!pa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=cs(n)}setAll(e){let n=Be.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=cs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());pa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];pa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Dr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new rt(cs(this.value))}}function u1(t){const e=[];return Dr(t.fields,(n,r)=>{const i=new Be([n]);if(pa(r)){const s=u1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ze(e,0,b.min(),b.min(),b.min(),rt.empty(),0)}static newFoundDocument(e,n,r,i){return new ze(e,1,n,b.min(),r,i,0)}static newNoDocument(e,n){return new ze(e,2,n,b.min(),b.min(),rt.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,b.min(),b.min(),rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(b.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=b.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Pm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new aN(t,e,n,r,i,s,o)}function rf(t){const e=V(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>gh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),e.ft=n}return e.ft}function sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!o1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Om(t.startAt,e.startAt)&&Om(t.endAt,e.endAt)}function yh(t){return P.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function lN(t,e,n,r,i,s,o,a){return new Kl(t,e,n,r,i,s,o,a)}function of(t){return new Kl(t)}function xm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function uN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function cN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function hN(t){return t.collectionGroup!==null}function ri(t){const e=V(t);if(e.dt===null){e.dt=[];const n=cN(e),r=uN(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new hs(n)),e.dt.push(new hs(Be.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new hs(Be.keyField(),s))}}}return e.dt}function cn(t){const e=V(t);if(!e._t)if(e.limitType==="F")e._t=Pm(e.path,e.collectionGroup,ri(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of ri(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new hs(s.field,o))}const r=e.endAt?new sl(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new sl(e.startAt.position,e.startAt.inclusive):null;e._t=Pm(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function vh(t,e,n){return new Kl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Gl(t,e){return sf(cn(t),cn(e))&&t.limitType===e.limitType}function c1(t){return`${rf(cn(t))}|lt:${t.limitType}`}function wh(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>a1(r)).join(", ")}]`),ql(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>vi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>vi(r)).join(",")),`Target(${n})`}(cn(t))}; limitType=${t.limitType})`}function af(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):P.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of ri(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Dm(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,ri(n),r)||n.endAt&&!function(i,s,o){const a=Dm(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,ri(n),r))}(t,e)}function dN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function h1(t){return(e,n)=>{let r=!1;for(const i of ri(t)){const s=fN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function fN(t,e,n){const r=t.field.isKeyField()?P.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?yi(a,l):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d1(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:il(e)?"-0":e}}function f1(t){return{integerValue:""+t}}function pN(t,e){return QC(e)?f1(e):d1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this._=void 0}}function mN(t,e,n){return t instanceof js?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof Hs?m1(t,e):t instanceof Ws?g1(t,e):function(r,i){const s=p1(r,i),o=Mm(s)+Mm(r.gt);return mh(s)&&mh(r.gt)?f1(o):d1(r.yt,o)}(t,e)}function gN(t,e,n){return t instanceof Hs?m1(t,e):t instanceof Ws?g1(t,e):n}function p1(t,e){return t instanceof ol?mh(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class js extends Ql{}class Hs extends Ql{constructor(e){super(),this.elements=e}}function m1(t,e){const n=y1(e);for(const r of t.elements)n.some(i=>Wt(i,r))||n.push(r);return{arrayValue:{values:n}}}class Ws extends Ql{constructor(e){super(),this.elements=e}}function g1(t,e){let n=y1(e);for(const r of t.elements)n=n.filter(i=>!Wt(i,r));return{arrayValue:{values:n}}}class ol extends Ql{constructor(e,n){super(),this.yt=e,this.gt=n}}function Mm(t){return me(t.integerValue||t.doubleValue)}function y1(t){return nf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,n){this.field=e,this.transform=n}}function vN(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Hs&&r instanceof Hs||n instanceof Ws&&r instanceof Ws?mi(n.elements,r.elements,Wt):n instanceof ol&&r instanceof ol?Wt(n.gt,r.gt):n instanceof js&&r instanceof js}(t.transform,e.transform)}class wN{constructor(e,n){this.version=e,this.transformResults=n}}class jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ma(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xl{}function v1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new E1(t.key,jt.none()):new vo(t.key,t.data,jt.none());{const n=t.data,r=rt.empty();let i=new _e(Be.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Qn(t.key,r,new ft(i.toArray()),jt.none())}}function EN(t,e,n){t instanceof vo?function(r,i,s){const o=r.value.clone(),a=Um(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Qn?function(r,i,s){if(!ma(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Um(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(w1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function ds(t,e,n,r){return t instanceof vo?function(i,s,o,a){if(!ma(i.precondition,s))return o;const l=i.value.clone(),u=Fm(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Qn?function(i,s,o,a){if(!ma(i.precondition,s))return o;const l=Fm(i.fieldTransforms,a,s),u=s.data;return u.setAll(w1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return ma(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function TN(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=p1(r.transform,i||null);s!=null&&(n===null&&(n=rt.empty()),n.set(r.field,s))}return n||null}function $m(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&mi(n,r,(i,s)=>vN(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class vo extends Xl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Qn extends Xl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function w1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Um(t,e,n){const r=new Map;te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,gN(o,a,n[i]))}return r}function Fm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,mN(s,o,e))}return r}class E1 extends Xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class _N extends Xl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SN{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe,q;function IN(t){switch(t){default:return U();case I.CANCELLED:case I.UNKNOWN:case I.DEADLINE_EXCEEDED:case I.RESOURCE_EXHAUSTED:case I.INTERNAL:case I.UNAVAILABLE:case I.UNAUTHENTICATED:return!1;case I.INVALID_ARGUMENT:case I.NOT_FOUND:case I.ALREADY_EXISTS:case I.PERMISSION_DENIED:case I.FAILED_PRECONDITION:case I.ABORTED:case I.OUT_OF_RANGE:case I.UNIMPLEMENTED:case I.DATA_LOSS:return!0}}function T1(t){if(t===void 0)return un("GRPC error has no .code"),I.UNKNOWN;switch(t){case pe.OK:return I.OK;case pe.CANCELLED:return I.CANCELLED;case pe.UNKNOWN:return I.UNKNOWN;case pe.DEADLINE_EXCEEDED:return I.DEADLINE_EXCEEDED;case pe.RESOURCE_EXHAUSTED:return I.RESOURCE_EXHAUSTED;case pe.INTERNAL:return I.INTERNAL;case pe.UNAVAILABLE:return I.UNAVAILABLE;case pe.UNAUTHENTICATED:return I.UNAUTHENTICATED;case pe.INVALID_ARGUMENT:return I.INVALID_ARGUMENT;case pe.NOT_FOUND:return I.NOT_FOUND;case pe.ALREADY_EXISTS:return I.ALREADY_EXISTS;case pe.PERMISSION_DENIED:return I.PERMISSION_DENIED;case pe.FAILED_PRECONDITION:return I.FAILED_PRECONDITION;case pe.ABORTED:return I.ABORTED;case pe.OUT_OF_RANGE:return I.OUT_OF_RANGE;case pe.UNIMPLEMENTED:return I.UNIMPLEMENTED;case pe.DATA_LOSS:return I.DATA_LOSS;default:return U()}}(q=pe||(pe={}))[q.OK=0]="OK",q[q.CANCELLED=1]="CANCELLED",q[q.UNKNOWN=2]="UNKNOWN",q[q.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",q[q.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",q[q.NOT_FOUND=5]="NOT_FOUND",q[q.ALREADY_EXISTS=6]="ALREADY_EXISTS",q[q.PERMISSION_DENIED=7]="PERMISSION_DENIED",q[q.UNAUTHENTICATED=16]="UNAUTHENTICATED",q[q.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",q[q.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",q[q.ABORTED=10]="ABORTED",q[q.OUT_OF_RANGE=11]="OUT_OF_RANGE",q[q.UNIMPLEMENTED=12]="UNIMPLEMENTED",q[q.INTERNAL=13]="INTERNAL",q[q.UNAVAILABLE=14]="UNAVAILABLE",q[q.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Dr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return e1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kN=new Se(P.comparator);function hn(){return kN}const _1=new Se(P.comparator);function Xi(...t){let e=_1;for(const n of t)e=e.insert(n.key,n);return e}function S1(t){let e=_1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ar(){return fs()}function I1(){return fs()}function fs(){return new Di(t=>t.toString(),(t,e)=>t.isEqual(e))}const CN=new Se(P.comparator),NN=new _e(P.comparator);function H(...t){let e=NN;for(const n of t)e=e.add(n);return e}const AN=new _e(Y);function k1(){return AN}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Yl(b.min(),i,k1(),hn(),H())}}class wo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new wo(r,n,H(),H(),H())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class C1{constructor(e,n){this.targetId=e,this.Et=n}}class N1{constructor(e,n,r=Ge.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class bm{constructor(){this.At=0,this.Rt=zm(),this.bt=Ge.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=H(),n=H(),r=H();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new wo(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=zm()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class RN{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=hn(),this.qt=Vm(),this.Ut=new _e(Y)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(yh(s))if(r===0){const o=new P(s.path);this.Qt(n,o,ze.newNoDocument(o,b.min()))}else te(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&yh(a.target)){const l=new P(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,ze.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=H();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Yl(e,n,this.Ut,this.Lt,r);return this.Lt=hn(),this.qt=Vm(),this.Ut=new _e(Y),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new bm,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new _e(Y),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||O("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new bm),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function Vm(){return new Se(P.comparator)}function zm(){return new Se(P.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),ON=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),LN=(()=>({and:"AND",or:"OR"}))();class PN{constructor(e,n){this.databaseId=e,this.wt=n}}function al(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A1(t,e){return t.wt?e.toBase64():e.toUint8Array()}function xN(t,e){return al(t,e.toTimestamp())}function Ht(t){return te(!!t),b.fromTimestamp(function(e){const n=Bn(e);return new Te(n.seconds,n.nanos)}(t))}function lf(t,e){return function(n){return new ce(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function R1(t){const e=ce.fromString(t);return te(P1(e)),e}function Eh(t,e){return lf(t.databaseId,e.path)}function Yu(t,e){const n=R1(e);if(n.get(1)!==t.databaseId.projectId)throw new x(I.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(I.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new P(D1(n))}function Th(t,e){return lf(t.databaseId,e)}function MN(t){const e=R1(t);return e.length===4?ce.emptyPath():D1(e)}function _h(t){return new ce(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function D1(t){return te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Bm(t,e,n){return{name:Eh(t,e),fields:n.value.mapValue.fields}}function $N(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(te(u===void 0||typeof u=="string"),Ge.fromBase64String(u||"")):(te(u===void 0||u instanceof Uint8Array),Ge.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?I.UNKNOWN:T1(l.code);return new x(u,l.message||"")}(o);n=new N1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Yu(t,r.document.name),s=Ht(r.document.updateTime),o=r.document.createTime?Ht(r.document.createTime):b.min(),a=new rt({mapValue:{fields:r.document.fields}}),l=ze.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new ga(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Yu(t,r.document),s=r.readTime?Ht(r.readTime):b.min(),o=ze.newNoDocument(i,s),a=r.removedTargetIds||[];n=new ga([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Yu(t,r.document),s=r.removedTargetIds||[];n=new ga([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new SN(i),o=r.targetId;n=new C1(o,s)}}return n}function UN(t,e){let n;if(e instanceof vo)n={update:Bm(t,e.key,e.value)};else if(e instanceof E1)n={delete:Eh(t,e.key)};else if(e instanceof Qn)n={update:Bm(t,e.key,e.data),updateMask:qN(e.fieldMask)};else{if(!(e instanceof _N))return U();n={verify:Eh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof js)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Hs)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ws)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ol)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:xN(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:U()}(t,e.precondition)),n}function FN(t,e){return t&&t.length>0?(te(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Ht(r.updateTime):Ht(i);return s.isEqual(b.min())&&(s=Ht(i)),new wN(s,r.transformResults||[])}(n,e))):[]}function bN(t,e){return{documents:[Th(t,e.path)]}}function VN(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Th(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Th(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return L1(qt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:Pr(c.field),direction:jN(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||ql(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function zN(t){let e=MN(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){te(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=O1(c);return h instanceof qt&&s1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new hs(xr(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,ql(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new sl(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new sl(d,h)}(n.endAt)),lN(e,i,o,s,a,"F",l,u)}function BN(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function O1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=xr(e.unaryFilter.field);return we.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=xr(e.unaryFilter.field);return we.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(e.unaryFilter.field);return we.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=xr(e.unaryFilter.field);return we.create(s,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(e){return we.create(xr(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return qt.create(e.compositeFilter.filters.map(n=>O1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(t):U()}function jN(t){return DN[t]}function HN(t){return ON[t]}function WN(t){return LN[t]}function Pr(t){return{fieldPath:t.canonicalString()}}function xr(t){return Be.fromServerFormat(t.fieldPath)}function L1(t){return t instanceof we?function(e){if(e.op==="=="){if(Rm(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NAN"}};if(Am(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Rm(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NOT_NAN"}};if(Am(e.value))return{unaryFilter:{field:Pr(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Pr(e.field),op:HN(e.op),value:e.value}}}(t):t instanceof qt?function(e){const n=e.getFilters().map(r=>L1(r));return n.length===1?n[0]:{compositeFilter:{op:WN(e.op),filters:n}}}(t):U()}function qN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function P1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KN{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&EN(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ds(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=v1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(b.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),H())}isEqual(e){return this.batchId===e.batchId&&mi(this.mutations,e.mutations,(n,r)=>$m(n,r))&&mi(this.baseMutations,e.baseMutations,(n,r)=>$m(n,r))}}class uf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){te(e.mutations.length===r.length);let i=CN;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new uf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GN{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e,n,r,i,s=b.min(),o=b.min(),a=Ge.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QN{constructor(e){this.ie=e}}function XN(t){const e=zN({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?vh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(){this.Je=new JN}addToCollectionParentIndex(e,n){return this.Je.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(zn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(zn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class JN{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new _e(ce.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new _e(ce.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new wi(0)}static vn(){return new wi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(){this.changes=new Di(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&ds(r.mutation,i,ft.empty(),Te.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,H()).next(()=>r))}getLocalViewOfDocuments(e,n,r=H()){const i=ar();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,H()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=hn();const o=fs(),a=fs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Qn)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),ds(c.mutation,u,c.mutation.getFieldMask(),Te.now())):o.set(u.key,ft.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new eA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=fs();let i=new Se((o,a)=>o-a),s=H();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ft.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||H()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=I1();c.forEach(d=>{if(!s.has(d)){const m=v1(n.get(d),r.get(d));m!==null&&h.set(d,m),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return P.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):hN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):S.resolve(ar());let a=-1,l=s;return o.next(u=>S.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?S.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,H())).next(c=>({batchId:a,changes:S1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new P(n)).next(r=>{let i=Xi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Xi();return this.indexManager.getCollectionParents(e,i).next(o=>S.forEach(o,a=>{const l=function(u,c){return new Kl(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,ze.newInvalidDocument(u)))});let o=Xi();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&ds(u.mutation,l,ft.empty(),Te.now()),af(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return S.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Ht(r.createTime)}),S.resolve()}getNamedQuery(e,n){return S.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:XN(r.bundledQuery),readTime:Ht(r.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rA{constructor(){this.overlays=new Se(P.comparator),this.es=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ar();return S.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const i=ar(),s=n.length+1,o=new P(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return S.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Se((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=ar(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=ar(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return S.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GN(n,r));let s=this.es.get(n);s===void 0&&(s=H(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.ns=new _e(ke.ss),this.rs=new _e(ke.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new ke(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new ke(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new P(new ce([])),r=new ke(n,e),i=new ke(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new P(new ce([])),r=new ke(n,e),i=new ke(n,e+1);let s=H();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new ke(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ke{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return P.comparator(e.key,n.key)||Y(e._s,n._s)}static os(e,n){return Y(e._s,n._s)||P.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new _e(ke.ss)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new KN(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new ke(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return S.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ke(n,0),i=new ke(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),S.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new _e(Y);return n.forEach(i=>{const s=new ke(i,0),o=new ke(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),S.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;P.isDocumentKey(s)||(s=s.child(""));const o=new ke(new P(s),0);let a=new _e(Y);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),S.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){te(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return S.forEach(n.mutations,i=>{const s=new ke(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new ke(n,0),i=this.gs.firstAfterOrEqual(r);return S.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e){this.Es=e,this.docs=new Se(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let r=hn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():ze.newInvalidDocument(i))}),S.resolve(r)}getAllFromCollection(e,n,r){let i=hn();const s=new P(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||WC(HC(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,i){U()}As(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new oA(this)}getSize(e){return S.resolve(this.size)}}class oA extends ZN{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.persistence=e,this.Rs=new Di(n=>rf(n),sf),this.lastRemoteSnapshotVersion=b.min(),this.highestTargetId=0,this.bs=0,this.Ps=new cf,this.targetCount=0,this.vs=wi.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),S.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new wi(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.Dn(n),S.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),S.waitFor(s).next(()=>i)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),S.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new tf(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new aA(this),this.indexManager=new YN,this.remoteDocumentCache=function(r){return new sA(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new QN(n),this.Ns=new nA(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new rA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new iA(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){O("MemoryPersistence","Starting transaction:",e);const i=new uA(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return S.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class uA extends KC{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.Fs=new cf,this.$s=null}static Bs(e){return new hf(e)}get Ls(){if(this.$s)return this.$s;throw U()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),S.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Ls,r=>{const i=P.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,b.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return S.or([()=>S.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=H(),i=H();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new df(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cA{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(xm(n))return S.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=vh(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=H(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,vh(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return xm(n)||i.isEqual(b.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(km()<=X.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),wh(n)),this.Bi(e,o,n,jC(i,-1)))})}Fi(e,n){let r=new _e(h1(e));return n.forEach((i,s)=>{af(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return km()<=X.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",wh(n)),this.Ni.getDocumentsMatchingQuery(e,n,zn.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Se(Y),this.Ui=new Di(s=>rf(s),sf),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tA(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function dA(t,e,n,r){return new hA(t,e,n,r)}async function x1(t,e){const n=V(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=H();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function fA(t,e){const n=V(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=S.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const v=l.docVersions.get(m);te(v!==null),g.version.compareTo(v)<0&&(c.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=H();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function M1(t){const e=V(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function pA(t,e){const n=V(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Cs.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Cs.addMatchingKeys(s,c.addedDocuments,h)));let m=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?m=m.withResumeToken(Ge.EMPTY_BYTE_STRING,b.min()).withLastLimboFreeSnapshotVersion(b.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(h,m),function(g,v,E){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,m,c)&&a.push(n.Cs.updateTargetData(s,m))});let l=hn(),u=H();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(mA(s,o,e.documentUpdates).next(c=>{l=c.Wi,u=c.zi})),!r.isEqual(b.min())){const c=n.Cs.getLastRemoteSnapshotVersion(s).next(h=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return S.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function mA(t,e,n){let r=H(),i=H();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=hn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(b.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):O("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function gA(t,e){const n=V(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function yA(t,e){const n=V(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,S.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new dr(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function Sh(t,e,n){const r=V(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!yo(o))throw o;O("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function jm(t,e,n){const r=V(t);let i=b.min(),s=H();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=V(a),h=c.Ui.get(u);return h!==void 0?S.resolve(c.qi.get(h)):c.Cs.getTargetData(l,u)}(r,o,cn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:b.min(),n?s:H())).next(a=>(vA(r,dN(e),a),{documents:a,Hi:s})))}function vA(t,e,n){let r=t.Ki.get(e)||b.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class Hm{constructor(){this.activeTargetIds=k1()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wA{constructor(){this.Lr=new Hm,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new Hm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _A{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SA extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);O("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(O("RestConnection","Received: ",l),l),l=>{throw fh("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ri,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=TA[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new PC;a.setWithCredentials(!0),a.listenOnce(DC.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Xu.NO_ERROR:const u=a.getResponseJson();O("Connection","XHR received:",JSON.stringify(u)),s(u);break;case Xu.TIMEOUT:O("Connection",'RPC "'+e+'" timed out'),o(new x(I.DEADLINE_EXCEEDED,"Request time out"));break;case Xu.HTTP_ERROR:const c=a.getStatus();if(O("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const m=function(g){const v=g.toLowerCase().replace(/_/g,"-");return Object.values(I).indexOf(v)>=0?v:I.UNKNOWN}(d.status);o(new x(m,d.message))}else o(new x(I.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new x(I.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{O("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=AC(),o=RC(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new LC({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");O("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new _A({Hr:g=>{h?O("Connection","Not sending because WebChannel is closed:",g):(c||(O("Connection","Opening WebChannel transport."),u.open(),c=!0),O("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),m=(g,v,E)=>{g.listen(v,p=>{try{E(p)}catch(f){setTimeout(()=>{throw f},0)}})};return m(u,Ko.EventType.OPEN,()=>{h||O("Connection","WebChannel transport opened.")}),m(u,Ko.EventType.CLOSE,()=>{h||(h=!0,O("Connection","WebChannel transport closed"),d.io())}),m(u,Ko.EventType.ERROR,g=>{h||(h=!0,fh("Connection","WebChannel transport errored:",g),d.io(new x(I.UNAVAILABLE,"The operation could not be completed")))}),m(u,Ko.EventType.MESSAGE,g=>{var v;if(!h){const E=g.data[0];te(!!E);const p=E,f=p.error||((v=p[0])===null||v===void 0?void 0:v.error);if(f){O("Connection","WebChannel received error:",f);const y=f.status;let w=function(k){const C=pe[k];if(C!==void 0)return T1(C)}(y),T=f.message;w===void 0&&(w=I.INTERNAL,T="Unknown error status: "+y+" with message "+f.message),h=!0,d.io(new x(w,T)),u.close()}else O("Connection","WebChannel received:",E),d.ro(E)}}),m(o,OC.STAT_EVENT,g=>{g.stat===Sm.PROXY?O("Connection","Detected buffering proxy"):g.stat===Sm.NOPROXY&&O("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.so()},0),d}}function Ju(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jl(t){return new PN(t,!0)}class $1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&O("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new $1(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===I.RESOURCE_EXHAUSTED?(un(n.toString()),un("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===I.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new x(I.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return O("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class IA extends U1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=$N(this.yt,e),r=function(i){if(!("targetChange"in i))return b.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?b.min():s.readTime?Ht(s.readTime):b.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=_h(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=yh(a)?{documents:bN(i,a)}:{query:VN(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=A1(i,s.resumeToken):s.snapshotVersion.compareTo(b.min())>0&&(o.readTime=al(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=BN(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=_h(this.yt),n.removeTarget=e,this.Bo(n)}}class kA extends U1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=FN(e.writeResults,e.commitTime),r=Ht(e.commitTime);return this.listener.Zo(r,n)}return te(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=_h(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>UN(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new x(I.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(I.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===I.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(I.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class NA{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(un(n),this.ou=!1):O("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Or(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=V(a);l._u.add(4),await Eo(l),l.gu.set("Unknown"),l._u.delete(4),await Zl(l)}(this))})}),this.gu=new NA(r,i)}}async function Zl(t){if(Or(t))for(const e of t.wu)await e(!0)}async function Eo(t){for(const e of t.wu)await e(!1)}function F1(t,e){const n=V(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),mf(n)?pf(n):Oi(n).ko()&&ff(n,e))}function b1(t,e){const n=V(t),r=Oi(n);n.du.delete(e),r.ko()&&V1(n,e),n.du.size===0&&(r.ko()?r.Fo():Or(n)&&n.gu.set("Unknown"))}function ff(t,e){t.yu.Ot(e.targetId),Oi(t).zo(e)}function V1(t,e){t.yu.Ot(e),Oi(t).Ho(e)}function pf(t){t.yu=new RN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),Oi(t).start(),t.gu.uu()}function mf(t){return Or(t)&&!Oi(t).No()&&t.du.size>0}function Or(t){return V(t)._u.size===0}function z1(t){t.yu=void 0}async function RA(t){t.du.forEach((e,n)=>{ff(t,e)})}async function DA(t,e){z1(t),mf(t)?(t.gu.hu(e),pf(t)):t.gu.set("Unknown")}async function OA(t,e,n){if(t.gu.set("Online"),e instanceof N1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ll(t,r)}else if(e instanceof ga?t.yu.Kt(e):e instanceof C1?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(b.min()))try{const r=await M1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(Ge.EMPTY_BYTE_STRING,l.snapshotVersion)),V1(i,a);const u=new dr(l.target,a,1,l.sequenceNumber);ff(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await ll(t,r)}}async function ll(t,e,n){if(!yo(e))throw e;t._u.add(1),await Eo(t),t.gu.set("Offline"),n||(n=()=>M1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Zl(t)})}function B1(t,e){return e().catch(n=>ll(t,n,e))}async function eu(t){const e=V(t),n=jn(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;LA(e);)try{const i=await gA(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,PA(e,i)}catch(i){await ll(e,i)}j1(e)&&H1(e)}function LA(t){return Or(t)&&t.fu.length<10}function PA(t,e){t.fu.push(e);const n=jn(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function j1(t){return Or(t)&&!jn(t).No()&&t.fu.length>0}function H1(t){jn(t).start()}async function xA(t){jn(t).eu()}async function MA(t){const e=jn(t);for(const n of t.fu)e.Xo(n.mutations)}async function $A(t,e,n){const r=t.fu.shift(),i=uf.from(r,e,n);await B1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eu(t)}async function UA(t,e){e&&jn(t).Yo&&await async function(n,r){if(i=r.code,IN(i)&&i!==I.ABORTED){const s=n.fu.shift();jn(n).Mo(),await B1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await eu(n)}var i}(t,e),j1(t)&&H1(t)}async function qm(t,e){const n=V(t);n.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=Or(n);n._u.add(3),await Eo(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Zl(n)}async function FA(t,e){const n=V(t);e?(n._u.delete(2),await Zl(n)):e||(n._u.add(2),await Eo(n),n.gu.set("Unknown"))}function Oi(t){return t.pu||(t.pu=function(e,n,r){const i=V(e);return i.su(),new IA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:RA.bind(null,t),Zr:DA.bind(null,t),Wo:OA.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),mf(t)?pf(t):t.gu.set("Unknown")):(await t.pu.stop(),z1(t))})),t.pu}function jn(t){return t.Iu||(t.Iu=function(e,n,r){const i=V(e);return i.su(),new kA(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:xA.bind(null,t),Zr:UA.bind(null,t),tu:MA.bind(null,t),Zo:$A.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await eu(t)):(await t.Iu.stop(),t.fu.length>0&&(O("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Fn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(I.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function yf(t,e){if(un("AsyncQueue",`${e}: ${t}`),yo(t))return new x(I.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e){this.comparator=e?(n,r)=>e(n,r)||P.comparator(n.key,r.key):(n,r)=>P.comparator(n.key,r.key),this.keyedMap=Xi(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new ii(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ii)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ii;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(){this.Tu=new Se(P.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):U():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ei{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ei(e,n,ii.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Gl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bA{constructor(){this.Au=void 0,this.listeners=[]}}class VA{constructor(){this.queries=new Di(e=>c1(e),Gl),this.onlineState="Unknown",this.Ru=new Set}}async function zA(t,e){const n=V(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new bA),i)try{s.Au=await n.onListen(r)}catch(o){const a=yf(o,`Initialization of query '${wh(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&vf(n)}async function BA(t,e){const n=V(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function jA(t,e){const n=V(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&vf(n)}function HA(t,e,n){const r=V(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function vf(t){t.Ru.forEach(e=>{e.next()})}class WA{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.key=e}}class q1{constructor(e){this.key=e}}class qA{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=H(),this.mutatedKeys=H(),this.Gu=h1(e),this.Qu=new ii(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new Km,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=af(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;d&&m?d.data.isEqual(m.data)?g!==v&&(r.track({type:3,doc:m}),E=!0):this.Hu(d,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.Gu(m,l)>0||u&&this.Gu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),E=!0):d&&!m&&(r.track({type:1,doc:d}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=v?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,c)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return m(h)-m(d)}(u.type,c.type)||this.Gu(u.doc,c.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Ei(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new Km,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=H(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new q1(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new W1(r))}),n}tc(e){this.qu=e.Hi,this.Ku=H();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ei.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class KA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class GA{constructor(e){this.key=e,this.nc=!1}}class QA{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Di(a=>c1(a),Gl),this.rc=new Map,this.oc=new Set,this.uc=new Se(P.comparator),this.cc=new Map,this.ac=new cf,this.hc={},this.lc=new Map,this.fc=wi.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function XA(t,e){const n=oR(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await yA(n.localStore,cn(e));n.isPrimaryClient&&F1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await YA(n,e,r,a==="current",o.resumeToken)}return i}async function YA(t,e,n,r,i){t._c=(h,d,m)=>async function(g,v,E,p){let f=v.view.Wu(E);f.$i&&(f=await jm(g.localStore,v.query,!1).then(({documents:T})=>v.view.Wu(T,f)));const y=p&&p.targetChanges.get(v.targetId),w=v.view.applyChanges(f,g.isPrimaryClient,y);return Qm(g,v.targetId,w.Xu),w.snapshot}(t,h,d,m);const s=await jm(t.localStore,e,!0),o=new qA(e,s.Hi),a=o.Wu(s.documents),l=wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);Qm(t,n,u.Xu);const c=new KA(e,n,o);return t.ic.set(e,c),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function JA(t,e){const n=V(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Gl(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Sh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),b1(n.remoteStore,r.targetId),Ih(n,r.targetId)}).catch(go)):(Ih(n,r.targetId),await Sh(n.localStore,r.targetId,!0))}async function ZA(t,e,n){const r=aR(t);try{const i=await function(s,o){const a=V(s),l=Te.now(),u=o.reduce((d,m)=>d.add(m.key),H());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let m=hn(),g=H();return a.Gi.getEntries(d,u).next(v=>{m=v,m.forEach((E,p)=>{p.isValidDocument()||(g=g.add(E))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,m)).next(v=>{c=v;const E=[];for(const p of o){const f=TN(p,c.get(p.key).overlayedDocument);f!=null&&E.push(new Qn(p.key,f,u1(f.value.mapValue),jt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,E,o)}).next(v=>{h=v;const E=v.applyToLocalDocumentSet(c,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,E)})}).then(()=>({batchId:h.batchId,changes:S1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Se(Y)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await To(r,i.changes),await eu(r.remoteStore)}catch(i){const s=yf(i,"Failed to persist write");n.reject(s)}}async function K1(t,e){const n=V(t);try{const r=await pA(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(te(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?te(o.nc):i.removedDocuments.size>0&&(te(o.nc),o.nc=!1))}),await To(n,r,e)}catch(r){await go(r)}}function Gm(t,e,n){const r=V(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=V(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.bu(o)&&(l=!0)}),l&&vf(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function eR(t,e,n){const r=V(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Se(P.comparator);o=o.insert(s,ze.newNoDocument(s,b.min()));const a=H().add(s),l=new Yl(b.min(),new Map,new _e(Y),o,a);await K1(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),wf(r)}else await Sh(r.localStore,e,!1).then(()=>Ih(r,e,n)).catch(go)}async function tR(t,e){const n=V(t),r=e.batch.batchId;try{const i=await fA(n.localStore,e);Q1(n,r,null),G1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,i)}catch(i){await go(i)}}async function nR(t,e,n){const r=V(t);try{const i=await function(s,o){const a=V(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(te(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Q1(r,e,n),G1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,i)}catch(i){await go(i)}}function G1(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function Q1(t,e,n){const r=V(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function Ih(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||X1(t,r)})}function X1(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(b1(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),wf(t))}function Qm(t,e,n){for(const r of n)r instanceof W1?(t.ac.addReference(r.key,e),rR(t,r)):r instanceof q1?(O("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||X1(t,r.key)):U()}function rR(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(O("SyncEngine","New document in limbo: "+n),t.oc.add(r),wf(t))}function wf(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new P(ce.fromString(e)),r=t.fc.next();t.cc.set(r,new GA(n)),t.uc=t.uc.insert(n,r),F1(t.remoteStore,new dr(cn(of(n.path)),r,2,tf.at))}}async function To(t,e,n){const r=V(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=df.Ci(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=V(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>S.forEach(l,h=>S.forEach(h.Si,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>S.forEach(h.Di,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!yo(c))throw c;O("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.qi.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.qi=u.qi.insert(h,g)}}}(r.localStore,s))}async function iR(t,e){const n=V(t);if(!n.currentUser.isEqual(e)){O("SyncEngine","User change. New user:",e.toKey());const r=await x1(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new x(I.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.ji)}}function sR(t,e){const n=V(t),r=n.cc.get(e);if(r&&r.nc)return H().add(r.key);{let i=H();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function oR(t){const e=V(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=K1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=eR.bind(null,e),e.sc.Wo=jA.bind(null,e.eventManager),e.sc.wc=HA.bind(null,e.eventManager),e}function aR(t){const e=V(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nR.bind(null,e),e}class lR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Jl(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return dA(this.persistence,new cA,e.initialUser,this.yt)}yc(e){return new lA(hf.Bs,this.yt)}gc(e){return new wA}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Gm(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=iR.bind(null,this.syncEngine),await FA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new VA}createDatastore(e){const n=Jl(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new SA(i));var i;return function(s,o,a,l){return new CA(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Gm(this.syncEngine,a,0),o=Wm.C()?new Wm:new EA,new AA(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new QA(r,i,s,o,a,l);return u&&(c.dc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=V(e);O("RemoteStore","RemoteStore shutting down."),n._u.add(5),await Eo(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t,e,n){if(!n)throw new x(I.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function hR(t,e,n,r){if(e===!0&&r===!0)throw new x(I.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Xm(t){if(!P.isDocumentKey(t))throw new x(I.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ef(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function kr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(I.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ef(t);throw new x(I.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ym=new Map;class Jm{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new x(I.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(I.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,hR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Jm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(I.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(I.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Jm(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new xC;switch(n.type){case"gapi":const r=n.client;return new FC(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(I.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Ym.get(e);n&&(O("ComponentProvider","Removing Datastore"),Ym.delete(e),n.terminate())}(this),Promise.resolve()}}function dR(t,e,n,r={}){var i;const s=(t=kr(t,Tf))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&fh("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=be.MOCK_USER;else{o=s_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new x(I.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new be(l)}t._authCredentials=new MC(new J0(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class _f{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new _f(this.firestore,e,this._query)}}class qs extends _f{constructor(e,n,r){super(e,n,of(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new P(e))}withConverter(e){return new qs(this.firestore,e,this._path)}}function Y1(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=Z0.R()),cR("doc","path",e),t instanceof Tf){const r=ce.fromString(e,...n);return Xm(r),new mt(t,null,new P(r))}{if(!(t instanceof mt||t instanceof qs))throw new x(I.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ce.fromString(e,...n));return Xm(r),new mt(t.firestore,t instanceof qs?t.converter:null,new P(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):un("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pR{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=be.UNAUTHENTICATED,this.clientId=Z0.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{O("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(O("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(I.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Fn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=yf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function mR(t,e){t.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await x1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function gR(t,e){t.asyncQueue.verifyOperationInProgress();const n=await yR(t);O("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>qm(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>qm(e.remoteStore,s)),t.onlineComponents=e}async function yR(t){return t.offlineComponents||(O("FirestoreClient","Using default OfflineComponentProvider"),await mR(t,new lR)),t.offlineComponents}async function J1(t){return t.onlineComponents||(O("FirestoreClient","Using default OnlineComponentProvider"),await gR(t,new uR)),t.onlineComponents}function vR(t){return J1(t).then(e=>e.syncEngine)}async function wR(t){const e=await J1(t),n=e.eventManager;return n.onListen=XA.bind(null,e.syncEngine),n.onUnlisten=JA.bind(null,e.syncEngine),n}function ER(t,e,n={}){const r=new Fn;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new fR({next:h=>{s.enqueueAndForget(()=>BA(i,c));const d=h.docs.has(o);!d&&h.fromCache?l.reject(new x(I.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?l.reject(new x(I.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new WA(of(o.path),u,{includeMetadataChanges:!0,Nu:!0});return zA(i,c)}(await wR(t),t.asyncQueue,e,n,r)),r.promise}class TR{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new $1(this,"async_queue_retry"),this.Wc=()=>{const n=Ju();n&&O("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Ju();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Ju();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Fn;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!yo(e))throw e;O("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw un("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=gf.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&U()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class tu extends Tf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new TR,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ew(this),this._firestoreClient.terminate()}}function _R(t,e){const n=typeof t=="object"?t:vv(),r=typeof t=="string"?t:e||"(default)",i=Sd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=n_("firestore");s&&dR(i,...s)}return i}function Z1(t){return t._firestoreClient||ew(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ew(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new GC(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new pR(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ti(Ge.fromBase64String(e))}catch(n){throw new x(I.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ti(Ge.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(I.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ru{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(I.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(I.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Y(this._lat,e._lat)||Y(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SR=/^__.*__$/;class IR{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms):new vo(e,this.data,n,this.fieldTransforms)}}class tw{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Qn(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function nw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class If{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new If(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return ul(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(nw(this.sa)&&SR.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class kR{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Jl(e)}da(e,n,r,i=!1){return new If({sa:e,methodName:n,fa:r,path:Be.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function rw(t){const e=t._freezeSettings(),n=Jl(t._databaseId);return new kR(t._databaseId,!!e.ignoreUndefinedProperties,n)}function CR(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);Cf("Data must be an object, but it was:",o,r);const a=iw(r,o);let l,u;if(s.merge)l=new ft(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=kh(e,h,n);if(!o.contains(d))throw new x(I.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ow(c,d)||c.push(d)}l=new ft(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new IR(new rt(a),l,u)}class iu extends ru{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof iu}}class kf extends ru{_toFieldTransform(e){return new yN(e.path,new js)}isEqual(e){return e instanceof kf}}function NR(t,e,n,r){const i=t.da(1,e,n);Cf("Data must be an object, but it was:",i,r);const s=[],o=rt.empty();Dr(r,(l,u)=>{const c=Nf(e,l,n);u=Ke(u);const h=i.ca(c);if(u instanceof iu)s.push(c);else{const d=su(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ft(s);return new tw(o,a,i.fieldTransforms)}function AR(t,e,n,r,i,s){const o=t.da(1,e,n),a=[kh(e,r,n)],l=[i];if(s.length%2!=0)throw new x(I.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(kh(e,s[d])),l.push(s[d+1]);const u=[],c=rt.empty();for(let d=a.length-1;d>=0;--d)if(!ow(u,a[d])){const m=a[d];let g=l[d];g=Ke(g);const v=o.ca(m);if(g instanceof iu)u.push(m);else{const E=su(g,v);E!=null&&(u.push(m),c.set(m,E))}}const h=new ft(u);return new tw(c,h,o.fieldTransforms)}function su(t,e){if(sw(t=Ke(t)))return Cf("Unsupported field value:",e,t),iw(t,e);if(t instanceof ru)return function(n,r){if(!nw(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=su(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=Ke(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return pN(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Te.fromDate(n);return{timestampValue:al(r.yt,i)}}if(n instanceof Te){const i=new Te(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:al(r.yt,i)}}if(n instanceof Sf)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ti)return{bytesValue:A1(r.yt,n._byteString)};if(n instanceof mt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:lf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${Ef(n)}`)}(t,e)}function iw(t,e){const n={};return e1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Dr(t,(r,i)=>{const s=su(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function sw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Te||t instanceof Sf||t instanceof Ti||t instanceof mt||t instanceof ru)}function Cf(t,e,n){if(!sw(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Ef(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function kh(t,e,n){if((e=Ke(e))instanceof nu)return e._internalPath;if(typeof e=="string")return Nf(t,e);throw ul("Field path arguments must be of type string or ",t,!1,void 0,n)}const RR=new RegExp("[~\\*/\\[\\]]");function Nf(t,e,n){if(e.search(RR)>=0)throw ul(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new nu(...e.split("."))._internalPath}catch{throw ul(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ul(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(I.INVALID_ARGUMENT,a+t+l)}function ow(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class DR extends aw{data(){return super.data()}}function lw(t,e){return typeof e=="string"?Nf(t,e):e instanceof nu?e._internalPath:e._delegate._internalPath}class OR{convertValue(e,n="none"){switch(Ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(gi(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){const r={};return Dr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Sf(me(e.latitude),me(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=n1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(zs(e));default:return null}}convertTimestamp(e){const n=Bn(e);return new Te(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ce.fromString(e);te(P1(r));const i=new Vs(r.get(1),r.get(3)),s=new P(r.popFirst(5));return i.isEqual(n)||un(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LR(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PR{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class uw extends aw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xR(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class xR extends uw{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MR(t){t=kr(t,mt);const e=kr(t.firestore,tu);return ER(Z1(e),t._key).then(n=>bR(e,t,n))}class $R extends OR{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ti(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function UR(t,e,n){t=kr(t,mt);const r=kr(t.firestore,tu),i=LR(t.converter,e,n);return cw(r,[CR(rw(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,jt.none())])}function FR(t,e,n,...r){t=kr(t,mt);const i=kr(t.firestore,tu),s=rw(i);let o;return o=typeof(e=Ke(e))=="string"||e instanceof nu?AR(s,"updateDoc",t._key,e,n,r):NR(s,"updateDoc",t._key,e),cw(i,[o.toMutation(t._key,jt.exists(!0))])}function cw(t,e){return function(n,r){const i=new Fn;return n.asyncQueue.enqueueAndForget(async()=>ZA(await vR(n),r,i)),i.promise}(Z1(t),e)}function bR(t,e,n){const r=n.docs.get(e._key),i=new $R(t);return new uw(t,i,e._key,r,new PR(n.hasPendingWrites,n.fromCache),e.converter)}function VR(){return new kf("serverTimestamp")}(function(t,e=!0){(function(n){Ri=n})(eo),di(new wr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new tu(new $C(n.getProvider("auth-internal")),new VC(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new x(I.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Un(Im,"3.8.1",t),Un(Im,"3.8.1","esm2017")})();var zR="firebase",BR="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(zR,BR,"app");const jR={apiKey:"AIzaSyCn-2ggHQqB_MTuESC1XZJzMeMpXR3Qzl4",authDomain:"todos-react-52427.firebaseapp.com",projectId:"todos-react-52427",storageBucket:"todos-react-52427.appspot.com",messagingSenderId:"449360991683",appId:"1:449360991683:web:0496ed696a86187f795976"};yv(jR);const hw=_R(),HR="/assets/spinner-8da367e8.svg";function WR(){return K("div",{className:"spinner",children:K("img",{src:HR,className:"loader",alt:"loading"})})}function qR(t){const[e,n]=z.useState([]),[r,i]=z.useState(!1),s=fa(),o=Y1(hw,"users",s.currentUser.uid);let a="";z.useEffect(()=>{r||((async()=>(await MR(o)).data().tasks.map(E=>n(p=>[...p,E])))(),i(!0))},[]),z.useEffect(()=>{r&&FR(o,{tasks:e}).then(g=>{console.log("done")}).catch(g=>{j(g.message)})},[e]);const l=e.map(g=>K(GT,{id:g.id,taskContent:g.task,handleTaskComplete:()=>d(g.id),isCompleted:g.isCompleted,handleTaskDelete:()=>m(g.id)},g.id));function u(){s.signOut(),t.setLogin(),j.success("Account was logged out successfully")}function c(g){g.key==="Enter"&&h()}async function h(){a=document.getElementById("taskInput").value;const g={task:a,isCompleted:!1,id:QT()};g.task.trim()!==""?n(v=>[...v,g]):j.error("Please Enter a valid task"),document.getElementById("taskInput").value=""}function d(g){n(v=>v.map(E=>E.id===g?{...E,isCompleted:!E.isCompleted}:E))}function m(g){let v=[];for(let E=0;E<e.length;E++)e[E].id!==g&&v.push(e[E]);n(v),j.success("Task was deleted successfully")}return ht("div",{onKeyDown:c,children:[K("h1",{className:"main-heading",children:"What do you want to do today"}),K("span",{className:"question",children:"?"}),ht("div",{className:"form",children:[K("input",{className:"task-input",id:"taskInput",type:"text",name:"task",autoComplete:"off",placeholder:"Put your task here"}),K("button",{className:"task-button",onClick:h,children:"WILL DO IT"})]}),e.length>0&&K("div",{className:"taskbox",children:l}),e.length==0&&ht("div",{className:"no-message",children:[K("p",{children:"NO TASKS TO SHOW"})," "]}),ht("button",{className:"sign-out-button",onClick:u,children:["SIGN OUT ",K("i",{className:"fa-solid fa-right-from-bracket"})]})]})}function KR(t){const[e,n]=Z.useState(!0),[r,i]=Z.useState({name:"",email:"",password:""}),[s,o]=Z.useState({email:"",password:""});async function a(m){if(m.preventDefault(),s.email.trim()!=="")try{const g=fa();await dI(g,s.email),j.success("mail was successfully sent")}catch(g){console.log(g),j.error("Couldn't send reset password to given mail id")}else j.error("Enter a valid Email")}function l(){n(m=>!e)}function u(m){const{name:g,value:v}=m.target;o(E=>({...E,[g]:v}))}function c(m){const{name:g,value:v}=m.target;i(E=>({...E,[g]:v}))}async function h(){t.setChecking();try{const m=fa(),g=await fI(m,r.email,r.password);gI(m.currentUser,{displayName:r.name});const v=g.user,E={...r};delete E.password,delete E.confirmPassword,E.timestamp=VR(),E.tasks=[],await UR(Y1(hw,"users",v.uid),E),j.success("Signup was successful"),t.setChecking(),t.setLogin()}catch(m){t.setChecking(),m.message.split("/")[1]=="email-already-in-use)."?j.error("Email is already in use"):j.error("Something went wrong with the registration!")}}async function d(){t.setChecking();try{const m=fa();(await pI(m,s.email,s.password)).user?(j.success("signin was successful"),t.setLogin(),t.setChecking()):(t.setChecking(),j.error("bad user credential"))}catch(m){t.setChecking(),console.log(m),j.error("problem while signin")}}return ht("div",{className:"login-container",children:[ht("div",{className:"login-heading",children:[K("span",{children:"WELCOME TO TODO'S"}),K("p",{children:"ALL YOUR TASKS AT ONE PLACE"})]}),ht("div",{className:"inner-container",children:[ht("div",{children:[K("nav",{className:"navigation",children:ht("ul",{children:[K("li",{className:e&&"active",onClick:l,children:"SIGN IN"}),K("li",{className:!e&&"active",onClick:l,children:"REGISTER"})]})}),K("div",{className:"login-form",children:e?ht("div",{children:[" ",K("input",{type:"email",name:"email",placeholder:"Email",onChange:u,value:s.email}),K("input",{type:"Password",name:"password",placeholder:"Password",onChange:u,value:s.password}),K("a",{href:"",className:"forgot-pass",onClick:a,children:"Forgot Password?"}),K("button",{className:"login-btn",onClick:d,children:e&&"SIGN IN"})," "]}):ht("div",{children:[" ",K("input",{type:"text",name:"name",placeholder:"Name",onChange:c,value:r.confirmPassword}),K("input",{type:"email",name:"email",placeholder:"Email",onChange:c,value:r.email}),K("input",{type:"Password",name:"password",placeholder:"Password",onChange:c,value:r.password}),K("p",{onClick:l,className:"forgot-pass",children:"Already have an account?"}),K("button",{className:"login-btn",onClick:h,children:!e&&"REGISTER"})," "]})})]}),K("img",{src:"https://www.linkpicture.com/q/Checklist-removebg-preview-1.png",type:"image",className:"img"})]})]})}function GR(){const[t,e]=z.useState(!1),[n,r]=z.useState(!1);return ht("div",{className:"App",children:[n?K(WR,{}):t?K(qR,{setChecking:()=>r(i=>!i),setLogin:()=>e(i=>!i)}):K(KR,{setChecking:()=>r(i=>!i),setLogin:()=>e(i=>!i)}),K(Gc,{position:"bottom-center",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!1,draggable:!0,pauseOnHover:!1,theme:"light"})]})}Zu.createRoot(document.getElementById("root")).render(K(GR,{}));
