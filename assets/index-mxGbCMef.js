(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function yy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var E_={exports:{}},Xu={},T_={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa=Symbol.for("react.element"),Sy=Symbol.for("react.portal"),My=Symbol.for("react.fragment"),Ey=Symbol.for("react.strict_mode"),Ty=Symbol.for("react.profiler"),wy=Symbol.for("react.provider"),Ay=Symbol.for("react.context"),Cy=Symbol.for("react.forward_ref"),Ry=Symbol.for("react.suspense"),by=Symbol.for("react.memo"),Py=Symbol.for("react.lazy"),wp=Symbol.iterator;function Ly(n){return n===null||typeof n!="object"?null:(n=wp&&n[wp]||n["@@iterator"],typeof n=="function"?n:null)}var w_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},A_=Object.assign,C_={};function Io(n,e,t){this.props=n,this.context=e,this.refs=C_,this.updater=t||w_}Io.prototype.isReactComponent={};Io.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Io.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function R_(){}R_.prototype=Io.prototype;function Qd(n,e,t){this.props=n,this.context=e,this.refs=C_,this.updater=t||w_}var Jd=Qd.prototype=new R_;Jd.constructor=Qd;A_(Jd,Io.prototype);Jd.isPureReactComponent=!0;var Ap=Array.isArray,b_=Object.prototype.hasOwnProperty,eh={current:null},P_={key:!0,ref:!0,__self:!0,__source:!0};function L_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b_.call(e,i)&&!P_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qa,type:n,key:s,ref:o,props:r,_owner:eh.current}}function Dy(n,e){return{$$typeof:qa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function th(n){return typeof n=="object"&&n!==null&&n.$$typeof===qa}function Ny(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Cp=/\/+/g;function xc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Ny(""+n.key):e.toString(36)}function Yl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case qa:case Sy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+xc(o,0):i,Ap(r)?(t="",n!=null&&(t=n.replace(Cp,"$&/")+"/"),Yl(r,e,t,"",function(u){return u})):r!=null&&(th(r)&&(r=Dy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Cp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Ap(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+xc(s,a);o+=Yl(s,e,t,l,r)}else if(l=Ly(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+xc(s,a++),o+=Yl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function al(n,e,t){if(n==null)return n;var i=[],r=0;return Yl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Uy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var dn={current:null},ql={transition:null},Iy={ReactCurrentDispatcher:dn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:eh};function D_(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:al,forEach:function(n,e,t){al(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return al(n,function(){e++}),e},toArray:function(n){return al(n,function(e){return e})||[]},only:function(n){if(!th(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ve.Component=Io;Ve.Fragment=My;Ve.Profiler=Ty;Ve.PureComponent=Qd;Ve.StrictMode=Ey;Ve.Suspense=Ry;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Iy;Ve.act=D_;Ve.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=A_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=eh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)b_.call(e,l)&&!P_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:qa,type:n.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(n){return n={$$typeof:Ay,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:wy,_context:n},n.Consumer=n};Ve.createElement=L_;Ve.createFactory=function(n){var e=L_.bind(null,n);return e.type=n,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(n){return{$$typeof:Cy,render:n}};Ve.isValidElement=th;Ve.lazy=function(n){return{$$typeof:Py,_payload:{_status:-1,_result:n},_init:Uy}};Ve.memo=function(n,e){return{$$typeof:by,type:n,compare:e===void 0?null:e}};Ve.startTransition=function(n){var e=ql.transition;ql.transition={};try{n()}finally{ql.transition=e}};Ve.unstable_act=D_;Ve.useCallback=function(n,e){return dn.current.useCallback(n,e)};Ve.useContext=function(n){return dn.current.useContext(n)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(n){return dn.current.useDeferredValue(n)};Ve.useEffect=function(n,e){return dn.current.useEffect(n,e)};Ve.useId=function(){return dn.current.useId()};Ve.useImperativeHandle=function(n,e,t){return dn.current.useImperativeHandle(n,e,t)};Ve.useInsertionEffect=function(n,e){return dn.current.useInsertionEffect(n,e)};Ve.useLayoutEffect=function(n,e){return dn.current.useLayoutEffect(n,e)};Ve.useMemo=function(n,e){return dn.current.useMemo(n,e)};Ve.useReducer=function(n,e,t){return dn.current.useReducer(n,e,t)};Ve.useRef=function(n){return dn.current.useRef(n)};Ve.useState=function(n){return dn.current.useState(n)};Ve.useSyncExternalStore=function(n,e,t){return dn.current.useSyncExternalStore(n,e,t)};Ve.useTransition=function(){return dn.current.useTransition()};Ve.version="18.3.1";T_.exports=Ve;var He=T_.exports;const Oy=yy(He);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fy=He,ky=Symbol.for("react.element"),zy=Symbol.for("react.fragment"),By=Object.prototype.hasOwnProperty,Hy=Fy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gy={key:!0,ref:!0,__self:!0,__source:!0};function N_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)By.call(e,i)&&!Gy.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ky,type:n,key:s,ref:o,props:r,_owner:Hy.current}}Xu.Fragment=zy;Xu.jsx=N_;Xu.jsxs=N_;E_.exports=Xu;var N=E_.exports,If={},U_={exports:{}},Gn={},I_={exports:{}},O_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,F){var k=D.length;D.push(F);e:for(;0<k;){var Z=k-1>>>1,Q=D[Z];if(0<r(Q,F))D[Z]=F,D[k]=Q,k=Z;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],k=D.pop();if(k!==F){D[0]=k;e:for(var Z=0,Q=D.length,Y=Q>>>1;Z<Y;){var $=2*(Z+1)-1,re=D[$],de=$+1,me=D[de];if(0>r(re,k))de<Q&&0>r(me,re)?(D[Z]=me,D[de]=k,Z=de):(D[Z]=re,D[$]=k,Z=$);else if(de<Q&&0>r(me,k))D[Z]=me,D[de]=k,Z=de;else break e}}return F}function r(D,F){var k=D.sortIndex-F.sortIndex;return k!==0?k:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,x=!1,m=!1,g=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=D)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function y(D){if(m=!1,v(D),!x)if(t(l)!==null)x=!0,z(T);else{var F=t(u);F!==null&&q(y,F.startTime-D)}}function T(D,F){x=!1,m&&(m=!1,d(b),b=-1),p=!0;var k=h;try{for(v(F),f=t(l);f!==null&&(!(f.expirationTime>F)||D&&!O());){var Z=f.callback;if(typeof Z=="function"){f.callback=null,h=f.priorityLevel;var Q=Z(f.expirationTime<=F);F=n.unstable_now(),typeof Q=="function"?f.callback=Q:f===t(l)&&i(l),v(F)}else i(l);f=t(l)}if(f!==null)var Y=!0;else{var $=t(u);$!==null&&q(y,$.startTime-F),Y=!1}return Y}finally{f=null,h=k,p=!1}}var E=!1,M=null,b=-1,S=5,A=-1;function O(){return!(n.unstable_now()-A<S)}function j(){if(M!==null){var D=n.unstable_now();A=D;var F=!0;try{F=M(!0,D)}finally{F?K():(E=!1,M=null)}}else E=!1}var K;if(typeof _=="function")K=function(){_(j)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,I=L.port2;L.port1.onmessage=j,K=function(){I.postMessage(null)}}else K=function(){g(j,0)};function z(D){M=D,E||(E=!0,K())}function q(D,F){b=g(function(){D(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,z(T))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var k=h;h=F;try{return D()}finally{h=k}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var k=h;h=D;try{return F()}finally{h=k}},n.unstable_scheduleCallback=function(D,F,k){var Z=n.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?Z+k:Z):k=Z,D){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=k+Q,D={id:c++,callback:F,priorityLevel:D,startTime:k,expirationTime:Q,sortIndex:-1},k>Z?(D.sortIndex=k,e(u,D),t(l)===null&&D===t(u)&&(m?(d(b),b=-1):m=!0,q(y,k-Z))):(D.sortIndex=Q,e(l,D),x||p||(x=!0,z(T))),D},n.unstable_shouldYield=O,n.unstable_wrapCallback=function(D){var F=h;return function(){var k=h;h=F;try{return D.apply(this,arguments)}finally{h=k}}}})(O_);I_.exports=O_;var Vy=I_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wy=He,zn=Vy;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var F_=new Set,Sa={};function Ts(n,e){vo(n,e),vo(n+"Capture",e)}function vo(n,e){for(Sa[n]=e,n=0;n<e.length;n++)F_.add(e[n])}var Yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,jy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rp={},bp={};function Xy(n){return Of.call(bp,n)?!0:Of.call(Rp,n)?!1:jy.test(n)?bp[n]=!0:(Rp[n]=!0,!1)}function Yy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function qy(n,e,t,i){if(e===null||typeof e>"u"||Yy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){jt[n]=new hn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];jt[e]=new hn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){jt[n]=new hn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){jt[n]=new hn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){jt[n]=new hn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){jt[n]=new hn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){jt[n]=new hn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){jt[n]=new hn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){jt[n]=new hn(n,5,!1,n.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(nh,ih);jt[e]=new hn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(nh,ih);jt[e]=new hn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(nh,ih);jt[e]=new hn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){jt[n]=new hn(n,1,!1,n.toLowerCase(),null,!1,!1)});jt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){jt[n]=new hn(n,1,!1,n.toLowerCase(),null,!0,!0)});function rh(n,e,t,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(qy(e,t,r,i)&&(t=null),i||r===null?Xy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var er=Wy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ll=Symbol.for("react.element"),js=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),Ff=Symbol.for("react.profiler"),k_=Symbol.for("react.provider"),z_=Symbol.for("react.context"),oh=Symbol.for("react.forward_ref"),kf=Symbol.for("react.suspense"),zf=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),ar=Symbol.for("react.lazy"),B_=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function Ho(n){return n===null||typeof n!="object"?null:(n=Pp&&n[Pp]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Object.assign,yc;function ta(n){if(yc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+n}var Sc=!1;function Mc(n,e){if(!n||Sc)return"";Sc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ta(n):""}function $y(n){switch(n.tag){case 5:return ta(n.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return n=Mc(n.type,!1),n;case 11:return n=Mc(n.type.render,!1),n;case 1:return n=Mc(n.type,!0),n;default:return""}}function Bf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Xs:return"Fragment";case js:return"Portal";case Ff:return"Profiler";case sh:return"StrictMode";case kf:return"Suspense";case zf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z_:return(n.displayName||"Context")+".Consumer";case k_:return(n._context.displayName||"Context")+".Provider";case oh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ah:return e=n.displayName||null,e!==null?e:Bf(n.type)||"Memo";case ar:e=n._payload,n=n._init;try{return Bf(n(e))}catch{}}return null}function Ky(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Bf(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Lr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function H_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zy(n){var e=H_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ul(n){n._valueTracker||(n._valueTracker=Zy(n))}function G_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=H_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function uu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Hf(n,e){var t=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Lp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Lr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function V_(n,e){e=e.checked,e!=null&&rh(n,"checked",e,!1)}function Gf(n,e){V_(n,e);var t=Lr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Vf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Vf(n,e.type,Lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Dp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Vf(n,e,t){(e!=="number"||uu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var na=Array.isArray;function ao(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Lr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Wf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Np(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(na(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Lr(t)}}function W_(n,e){var t=Lr(e.value),i=Lr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Up(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function j_(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function jf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?j_(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var cl,X_=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(cl=cl||document.createElement("div"),cl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=cl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Ma(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qy=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(n){Qy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),la[e]=la[n]})});function Y_(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||la.hasOwnProperty(n)&&la[n]?(""+e).trim():e+"px"}function q_(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=Y_(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Jy=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xf(n,e){if(e){if(Jy[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Yf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qf=null;function lh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var $f=null,lo=null,uo=null;function Ip(n){if(n=Za(n)){if(typeof $f!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Zu(e),$f(n.stateNode,n.type,e))}}function $_(n){lo?uo?uo.push(n):uo=[n]:lo=n}function K_(){if(lo){var n=lo,e=uo;if(uo=lo=null,Ip(n),e)for(n=0;n<e.length;n++)Ip(e[n])}}function Z_(n,e){return n(e)}function Q_(){}var Ec=!1;function J_(n,e,t){if(Ec)return n(e,t);Ec=!0;try{return Z_(n,e,t)}finally{Ec=!1,(lo!==null||uo!==null)&&(Q_(),K_())}}function Ea(n,e){var t=n.stateNode;if(t===null)return null;var i=Zu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Kf=!1;if(Yi)try{var Go={};Object.defineProperty(Go,"passive",{get:function(){Kf=!0}}),window.addEventListener("test",Go,Go),window.removeEventListener("test",Go,Go)}catch{Kf=!1}function eS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var ua=!1,cu=null,fu=!1,Zf=null,tS={onError:function(n){ua=!0,cu=n}};function nS(n,e,t,i,r,s,o,a,l){ua=!1,cu=null,eS.apply(tS,arguments)}function iS(n,e,t,i,r,s,o,a,l){if(nS.apply(this,arguments),ua){if(ua){var u=cu;ua=!1,cu=null}else throw Error(te(198));fu||(fu=!0,Zf=u)}}function ws(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function e0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Op(n){if(ws(n)!==n)throw Error(te(188))}function rS(n){var e=n.alternate;if(!e){if(e=ws(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Op(r),n;if(s===i)return Op(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function t0(n){return n=rS(n),n!==null?n0(n):null}function n0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=n0(n);if(e!==null)return e;n=n.sibling}return null}var i0=zn.unstable_scheduleCallback,Fp=zn.unstable_cancelCallback,sS=zn.unstable_shouldYield,oS=zn.unstable_requestPaint,wt=zn.unstable_now,aS=zn.unstable_getCurrentPriorityLevel,uh=zn.unstable_ImmediatePriority,r0=zn.unstable_UserBlockingPriority,du=zn.unstable_NormalPriority,lS=zn.unstable_LowPriority,s0=zn.unstable_IdlePriority,Yu=null,Ci=null;function uS(n){if(Ci&&typeof Ci.onCommitFiberRoot=="function")try{Ci.onCommitFiberRoot(Yu,n,void 0,(n.current.flags&128)===128)}catch{}}var pi=Math.clz32?Math.clz32:dS,cS=Math.log,fS=Math.LN2;function dS(n){return n>>>=0,n===0?32:31-(cS(n)/fS|0)|0}var fl=64,dl=4194304;function ia(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function hu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ia(a):(s&=o,s!==0&&(i=ia(s)))}else o=t&~r,o!==0?i=ia(o):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-pi(e),r=1<<t,i|=n[t],e&=~r;return i}function hS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function pS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-pi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=hS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Qf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function o0(){var n=fl;return fl<<=1,!(fl&4194240)&&(fl=64),n}function Tc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function $a(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-pi(e),n[e]=t}function mS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-pi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function ch(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-pi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ke=0;function a0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var l0,fh,u0,c0,f0,Jf=!1,hl=[],vr=null,xr=null,yr=null,Ta=new Map,wa=new Map,ur=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kp(n,e){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":xr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Vo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Za(e),e!==null&&fh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function _S(n,e,t,i,r){switch(e){case"focusin":return vr=Vo(vr,n,e,t,i,r),!0;case"dragenter":return xr=Vo(xr,n,e,t,i,r),!0;case"mouseover":return yr=Vo(yr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,Vo(Ta.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,Vo(wa.get(s)||null,n,e,t,i,r)),!0}return!1}function d0(n){var e=is(n.target);if(e!==null){var t=ws(e);if(t!==null){if(e=t.tag,e===13){if(e=e0(t),e!==null){n.blockedOn=e,f0(n.priority,function(){u0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $l(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=ed(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);qf=i,t.target.dispatchEvent(i),qf=null}else return e=Za(t),e!==null&&fh(e),n.blockedOn=t,!1;e.shift()}return!0}function zp(n,e,t){$l(n)&&t.delete(e)}function vS(){Jf=!1,vr!==null&&$l(vr)&&(vr=null),xr!==null&&$l(xr)&&(xr=null),yr!==null&&$l(yr)&&(yr=null),Ta.forEach(zp),wa.forEach(zp)}function Wo(n,e){n.blockedOn===e&&(n.blockedOn=null,Jf||(Jf=!0,zn.unstable_scheduleCallback(zn.unstable_NormalPriority,vS)))}function Aa(n){function e(r){return Wo(r,n)}if(0<hl.length){Wo(hl[0],n);for(var t=1;t<hl.length;t++){var i=hl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vr!==null&&Wo(vr,n),xr!==null&&Wo(xr,n),yr!==null&&Wo(yr,n),Ta.forEach(e),wa.forEach(e),t=0;t<ur.length;t++)i=ur[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<ur.length&&(t=ur[0],t.blockedOn===null);)d0(t),t.blockedOn===null&&ur.shift()}var co=er.ReactCurrentBatchConfig,pu=!0;function xS(n,e,t,i){var r=Ke,s=co.transition;co.transition=null;try{Ke=1,dh(n,e,t,i)}finally{Ke=r,co.transition=s}}function yS(n,e,t,i){var r=Ke,s=co.transition;co.transition=null;try{Ke=4,dh(n,e,t,i)}finally{Ke=r,co.transition=s}}function dh(n,e,t,i){if(pu){var r=ed(n,e,t,i);if(r===null)Uc(n,e,i,mu,t),kp(n,i);else if(_S(r,n,e,t,i))i.stopPropagation();else if(kp(n,i),e&4&&-1<gS.indexOf(n)){for(;r!==null;){var s=Za(r);if(s!==null&&l0(s),s=ed(n,e,t,i),s===null&&Uc(n,e,i,mu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(n,e,i,null,t)}}var mu=null;function ed(n,e,t,i){if(mu=null,n=lh(i),n=is(n),n!==null)if(e=ws(n),e===null)n=null;else if(t=e.tag,t===13){if(n=e0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return mu=n,null}function h0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(aS()){case uh:return 1;case r0:return 4;case du:case lS:return 16;case s0:return 536870912;default:return 16}default:return 16}}var fr=null,hh=null,Kl=null;function p0(){if(Kl)return Kl;var n,e=hh,t=e.length,i,r="value"in fr?fr.value:fr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Kl=r.slice(n,1<i?1-i:void 0)}function Zl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function pl(){return!0}function Bp(){return!1}function Vn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pl:Bp,this.isPropagationStopped=Bp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=pl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=pl)},persist:function(){},isPersistent:pl}),e}var Oo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=Vn(Oo),Ka=_t({},Oo,{view:0,detail:0}),SS=Vn(Ka),wc,Ac,jo,qu=_t({},Ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==jo&&(jo&&n.type==="mousemove"?(wc=n.screenX-jo.screenX,Ac=n.screenY-jo.screenY):Ac=wc=0,jo=n),wc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),Hp=Vn(qu),MS=_t({},qu,{dataTransfer:0}),ES=Vn(MS),TS=_t({},Ka,{relatedTarget:0}),Cc=Vn(TS),wS=_t({},Oo,{animationName:0,elapsedTime:0,pseudoElement:0}),AS=Vn(wS),CS=_t({},Oo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),RS=Vn(CS),bS=_t({},Oo,{data:0}),Gp=Vn(bS),PS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},LS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},DS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function NS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=DS[n])?!!e[n]:!1}function mh(){return NS}var US=_t({},Ka,{key:function(n){if(n.key){var e=PS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?LS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(n){return n.type==="keypress"?Zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),IS=Vn(US),OS=_t({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vp=Vn(OS),FS=_t({},Ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),kS=Vn(FS),zS=_t({},Oo,{propertyName:0,elapsedTime:0,pseudoElement:0}),BS=Vn(zS),HS=_t({},qu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),GS=Vn(HS),VS=[9,13,27,32],gh=Yi&&"CompositionEvent"in window,ca=null;Yi&&"documentMode"in document&&(ca=document.documentMode);var WS=Yi&&"TextEvent"in window&&!ca,m0=Yi&&(!gh||ca&&8<ca&&11>=ca),Wp=" ",jp=!1;function g0(n,e){switch(n){case"keyup":return VS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ys=!1;function jS(n,e){switch(n){case"compositionend":return _0(e);case"keypress":return e.which!==32?null:(jp=!0,Wp);case"textInput":return n=e.data,n===Wp&&jp?null:n;default:return null}}function XS(n,e){if(Ys)return n==="compositionend"||!gh&&g0(n,e)?(n=p0(),Kl=hh=fr=null,Ys=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return m0&&e.locale!=="ko"?null:e.data;default:return null}}var YS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!YS[n.type]:e==="textarea"}function v0(n,e,t,i){$_(i),e=gu(e,"onChange"),0<e.length&&(t=new ph("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var fa=null,Ca=null;function qS(n){b0(n,0)}function $u(n){var e=Ks(n);if(G_(e))return n}function $S(n,e){if(n==="change")return e}var x0=!1;if(Yi){var Rc;if(Yi){var bc="oninput"in document;if(!bc){var Yp=document.createElement("div");Yp.setAttribute("oninput","return;"),bc=typeof Yp.oninput=="function"}Rc=bc}else Rc=!1;x0=Rc&&(!document.documentMode||9<document.documentMode)}function qp(){fa&&(fa.detachEvent("onpropertychange",y0),Ca=fa=null)}function y0(n){if(n.propertyName==="value"&&$u(Ca)){var e=[];v0(e,Ca,n,lh(n)),J_(qS,e)}}function KS(n,e,t){n==="focusin"?(qp(),fa=e,Ca=t,fa.attachEvent("onpropertychange",y0)):n==="focusout"&&qp()}function ZS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $u(Ca)}function QS(n,e){if(n==="click")return $u(e)}function JS(n,e){if(n==="input"||n==="change")return $u(e)}function eM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var gi=typeof Object.is=="function"?Object.is:eM;function Ra(n,e){if(gi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Of.call(e,r)||!gi(n[r],e[r]))return!1}return!0}function $p(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Kp(n,e){var t=$p(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=$p(t)}}function S0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?S0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function M0(){for(var n=window,e=uu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=uu(n.document)}return e}function _h(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function tM(n){var e=M0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&S0(t.ownerDocument.documentElement,t)){if(i!==null&&_h(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Kp(t,s);var o=Kp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var nM=Yi&&"documentMode"in document&&11>=document.documentMode,qs=null,td=null,da=null,nd=!1;function Zp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;nd||qs==null||qs!==uu(i)||(i=qs,"selectionStart"in i&&_h(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),da&&Ra(da,i)||(da=i,i=gu(td,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=qs)))}function ml(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var $s={animationend:ml("Animation","AnimationEnd"),animationiteration:ml("Animation","AnimationIteration"),animationstart:ml("Animation","AnimationStart"),transitionend:ml("Transition","TransitionEnd")},Pc={},E0={};Yi&&(E0=document.createElement("div").style,"AnimationEvent"in window||(delete $s.animationend.animation,delete $s.animationiteration.animation,delete $s.animationstart.animation),"TransitionEvent"in window||delete $s.transitionend.transition);function Ku(n){if(Pc[n])return Pc[n];if(!$s[n])return n;var e=$s[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in E0)return Pc[n]=e[t];return n}var T0=Ku("animationend"),w0=Ku("animationiteration"),A0=Ku("animationstart"),C0=Ku("transitionend"),R0=new Map,Qp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(n,e){R0.set(n,e),Ts(e,[n])}for(var Lc=0;Lc<Qp.length;Lc++){var Dc=Qp[Lc],iM=Dc.toLowerCase(),rM=Dc[0].toUpperCase()+Dc.slice(1);Fr(iM,"on"+rM)}Fr(T0,"onAnimationEnd");Fr(w0,"onAnimationIteration");Fr(A0,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(C0,"onTransitionEnd");vo("onMouseEnter",["mouseout","mouseover"]);vo("onMouseLeave",["mouseout","mouseover"]);vo("onPointerEnter",["pointerout","pointerover"]);vo("onPointerLeave",["pointerout","pointerover"]);Ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function Jp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,iS(i,e,void 0,n),n.currentTarget=null}function b0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Jp(r,a,u),s=l}}}if(fu)throw n=Zf,fu=!1,Zf=null,n}function st(n,e){var t=e[ad];t===void 0&&(t=e[ad]=new Set);var i=n+"__bubble";t.has(i)||(P0(e,n,2,!1),t.add(i))}function Nc(n,e,t){var i=0;e&&(i|=4),P0(t,n,i,e)}var gl="_reactListening"+Math.random().toString(36).slice(2);function ba(n){if(!n[gl]){n[gl]=!0,F_.forEach(function(t){t!=="selectionchange"&&(sM.has(t)||Nc(t,!1,n),Nc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[gl]||(e[gl]=!0,Nc("selectionchange",!1,e))}}function P0(n,e,t,i){switch(h0(e)){case 1:var r=xS;break;case 4:r=yS;break;default:r=dh}t=r.bind(null,e,t,n),r=void 0,!Kf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Uc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=is(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}J_(function(){var u=s,c=lh(t),f=[];e:{var h=R0.get(n);if(h!==void 0){var p=ph,x=n;switch(n){case"keypress":if(Zl(t)===0)break e;case"keydown":case"keyup":p=IS;break;case"focusin":x="focus",p=Cc;break;case"focusout":x="blur",p=Cc;break;case"beforeblur":case"afterblur":p=Cc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ES;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=kS;break;case T0:case w0:case A0:p=AS;break;case C0:p=BS;break;case"scroll":p=SS;break;case"wheel":p=GS;break;case"copy":case"cut":case"paste":p=RS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vp}var m=(e&4)!==0,g=!m&&n==="scroll",d=m?h!==null?h+"Capture":null:h;m=[];for(var _=u,v;_!==null;){v=_;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=Ea(_,d),y!=null&&m.push(Pa(_,y,v)))),g)break;_=_.return}0<m.length&&(h=new p(h,x,null,t,c),f.push({event:h,listeners:m}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==qf&&(x=t.relatedTarget||t.fromElement)&&(is(x)||x[qi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?is(x):null,x!==null&&(g=ws(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(m=Hp,y="onMouseLeave",d="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(m=Vp,y="onPointerLeave",d="onPointerEnter",_="pointer"),g=p==null?h:Ks(p),v=x==null?h:Ks(x),h=new m(y,_+"leave",p,t,c),h.target=g,h.relatedTarget=v,y=null,is(c)===u&&(m=new m(d,_+"enter",x,t,c),m.target=v,m.relatedTarget=g,y=m),g=y,p&&x)t:{for(m=p,d=x,_=0,v=m;v;v=Cs(v))_++;for(v=0,y=d;y;y=Cs(y))v++;for(;0<_-v;)m=Cs(m),_--;for(;0<v-_;)d=Cs(d),v--;for(;_--;){if(m===d||d!==null&&m===d.alternate)break t;m=Cs(m),d=Cs(d)}m=null}else m=null;p!==null&&em(f,h,p,m,!1),x!==null&&g!==null&&em(f,g,x,m,!0)}}e:{if(h=u?Ks(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var T=$S;else if(Xp(h))if(x0)T=JS;else{T=ZS;var E=KS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=QS);if(T&&(T=T(n,u))){v0(f,T,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&Vf(h,"number",h.value)}switch(E=u?Ks(u):window,n){case"focusin":(Xp(E)||E.contentEditable==="true")&&(qs=E,td=u,da=null);break;case"focusout":da=td=qs=null;break;case"mousedown":nd=!0;break;case"contextmenu":case"mouseup":case"dragend":nd=!1,Zp(f,t,c);break;case"selectionchange":if(nM)break;case"keydown":case"keyup":Zp(f,t,c)}var M;if(gh)e:{switch(n){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else Ys?g0(n,t)&&(b="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(b="onCompositionStart");b&&(m0&&t.locale!=="ko"&&(Ys||b!=="onCompositionStart"?b==="onCompositionEnd"&&Ys&&(M=p0()):(fr=c,hh="value"in fr?fr.value:fr.textContent,Ys=!0)),E=gu(u,b),0<E.length&&(b=new Gp(b,n,null,t,c),f.push({event:b,listeners:E}),M?b.data=M:(M=_0(t),M!==null&&(b.data=M)))),(M=WS?jS(n,t):XS(n,t))&&(u=gu(u,"onBeforeInput"),0<u.length&&(c=new Gp("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}b0(f,e)})}function Pa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function gu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(n,t),s!=null&&i.unshift(Pa(n,s,r)),s=Ea(n,e),s!=null&&i.push(Pa(n,s,r))),n=n.return}return i}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function em(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Ea(t,s),l!=null&&o.unshift(Pa(t,l,a))):r||(l=Ea(t,s),l!=null&&o.push(Pa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var oM=/\r\n?/g,aM=/\u0000|\uFFFD/g;function tm(n){return(typeof n=="string"?n:""+n).replace(oM,`
`).replace(aM,"")}function _l(n,e,t){if(e=tm(e),tm(n)!==e&&t)throw Error(te(425))}function _u(){}var id=null,rd=null;function sd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var od=typeof setTimeout=="function"?setTimeout:void 0,lM=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,uM=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(n){return nm.resolve(null).then(n).catch(cM)}:od;function cM(n){setTimeout(function(){throw n})}function Ic(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Aa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Aa(e)}function Sr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function im(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Fo=Math.random().toString(36).slice(2),Mi="__reactFiber$"+Fo,La="__reactProps$"+Fo,qi="__reactContainer$"+Fo,ad="__reactEvents$"+Fo,fM="__reactListeners$"+Fo,dM="__reactHandles$"+Fo;function is(n){var e=n[Mi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[qi]||t[Mi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=im(n);n!==null;){if(t=n[Mi])return t;n=im(n)}return e}n=t,t=n.parentNode}return null}function Za(n){return n=n[Mi]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ks(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Zu(n){return n[La]||null}var ld=[],Zs=-1;function kr(n){return{current:n}}function at(n){0>Zs||(n.current=ld[Zs],ld[Zs]=null,Zs--)}function rt(n,e){Zs++,ld[Zs]=n.current,n.current=e}var Dr={},tn=kr(Dr),vn=kr(!1),_s=Dr;function xo(n,e){var t=n.type.contextTypes;if(!t)return Dr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function xn(n){return n=n.childContextTypes,n!=null}function vu(){at(vn),at(tn)}function rm(n,e,t){if(tn.current!==Dr)throw Error(te(168));rt(tn,e),rt(vn,t)}function L0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Ky(n)||"Unknown",r));return _t({},t,i)}function xu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Dr,_s=tn.current,rt(tn,n),rt(vn,vn.current),!0}function sm(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=L0(n,e,_s),i.__reactInternalMemoizedMergedChildContext=n,at(vn),at(tn),rt(tn,n)):at(vn),rt(vn,t)}var Hi=null,Qu=!1,Oc=!1;function D0(n){Hi===null?Hi=[n]:Hi.push(n)}function hM(n){Qu=!0,D0(n)}function zr(){if(!Oc&&Hi!==null){Oc=!0;var n=0,e=Ke;try{var t=Hi;for(Ke=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Hi=null,Qu=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(n+1)),i0(uh,zr),r}finally{Ke=e,Oc=!1}}return null}var Qs=[],Js=0,yu=null,Su=0,Yn=[],qn=0,vs=null,Vi=1,Wi="";function Kr(n,e){Qs[Js++]=Su,Qs[Js++]=yu,yu=n,Su=e}function N0(n,e,t){Yn[qn++]=Vi,Yn[qn++]=Wi,Yn[qn++]=vs,vs=n;var i=Vi;n=Wi;var r=32-pi(i)-1;i&=~(1<<r),t+=1;var s=32-pi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Vi=1<<32-pi(e)+r|t<<r|i,Wi=s+n}else Vi=1<<s|t<<r|i,Wi=n}function vh(n){n.return!==null&&(Kr(n,1),N0(n,1,0))}function xh(n){for(;n===yu;)yu=Qs[--Js],Qs[Js]=null,Su=Qs[--Js],Qs[Js]=null;for(;n===vs;)vs=Yn[--qn],Yn[qn]=null,Wi=Yn[--qn],Yn[qn]=null,Vi=Yn[--qn],Yn[qn]=null}var Fn=null,Un=null,lt=!1,ci=null;function U0(n,e){var t=Qn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function om(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Fn=n,Un=Sr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Fn=n,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=vs!==null?{id:Vi,overflow:Wi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Qn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Fn=n,Un=null,!0):!1;default:return!1}}function ud(n){return(n.mode&1)!==0&&(n.flags&128)===0}function cd(n){if(lt){var e=Un;if(e){var t=e;if(!om(n,e)){if(ud(n))throw Error(te(418));e=Sr(t.nextSibling);var i=Fn;e&&om(n,e)?U0(i,t):(n.flags=n.flags&-4097|2,lt=!1,Fn=n)}}else{if(ud(n))throw Error(te(418));n.flags=n.flags&-4097|2,lt=!1,Fn=n}}}function am(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function vl(n){if(n!==Fn)return!1;if(!lt)return am(n),lt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!sd(n.type,n.memoizedProps)),e&&(e=Un)){if(ud(n))throw I0(),Error(te(418));for(;e;)U0(n,e),e=Sr(e.nextSibling)}if(am(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Un=Sr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Un=null}}else Un=Fn?Sr(n.stateNode.nextSibling):null;return!0}function I0(){for(var n=Un;n;)n=Sr(n.nextSibling)}function yo(){Un=Fn=null,lt=!1}function yh(n){ci===null?ci=[n]:ci.push(n)}var pM=er.ReactCurrentBatchConfig;function Xo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function xl(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function lm(n){var e=n._init;return e(n._payload)}function O0(n){function e(d,_){if(n){var v=d.deletions;v===null?(d.deletions=[_],d.flags|=16):v.push(_)}}function t(d,_){if(!n)return null;for(;_!==null;)e(d,_),_=_.sibling;return null}function i(d,_){for(d=new Map;_!==null;)_.key!==null?d.set(_.key,_):d.set(_.index,_),_=_.sibling;return d}function r(d,_){return d=wr(d,_),d.index=0,d.sibling=null,d}function s(d,_,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<_?(d.flags|=2,_):v):(d.flags|=2,_)):(d.flags|=1048576,_)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,_,v,y){return _===null||_.tag!==6?(_=Vc(v,d.mode,y),_.return=d,_):(_=r(_,v),_.return=d,_)}function l(d,_,v,y){var T=v.type;return T===Xs?c(d,_,v.props.children,y,v.key):_!==null&&(_.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ar&&lm(T)===_.type)?(y=r(_,v.props),y.ref=Xo(d,_,v),y.return=d,y):(y=ru(v.type,v.key,v.props,null,d.mode,y),y.ref=Xo(d,_,v),y.return=d,y)}function u(d,_,v,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==v.containerInfo||_.stateNode.implementation!==v.implementation?(_=Wc(v,d.mode,y),_.return=d,_):(_=r(_,v.children||[]),_.return=d,_)}function c(d,_,v,y,T){return _===null||_.tag!==7?(_=ls(v,d.mode,y,T),_.return=d,_):(_=r(_,v),_.return=d,_)}function f(d,_,v){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Vc(""+_,d.mode,v),_.return=d,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ll:return v=ru(_.type,_.key,_.props,null,d.mode,v),v.ref=Xo(d,null,_),v.return=d,v;case js:return _=Wc(_,d.mode,v),_.return=d,_;case ar:var y=_._init;return f(d,y(_._payload),v)}if(na(_)||Ho(_))return _=ls(_,d.mode,v,null),_.return=d,_;xl(d,_)}return null}function h(d,_,v,y){var T=_!==null?_.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(d,_,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ll:return v.key===T?l(d,_,v,y):null;case js:return v.key===T?u(d,_,v,y):null;case ar:return T=v._init,h(d,_,T(v._payload),y)}if(na(v)||Ho(v))return T!==null?null:c(d,_,v,y,null);xl(d,v)}return null}function p(d,_,v,y,T){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(_,d,""+y,T);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ll:return d=d.get(y.key===null?v:y.key)||null,l(_,d,y,T);case js:return d=d.get(y.key===null?v:y.key)||null,u(_,d,y,T);case ar:var E=y._init;return p(d,_,v,E(y._payload),T)}if(na(y)||Ho(y))return d=d.get(v)||null,c(_,d,y,T,null);xl(_,y)}return null}function x(d,_,v,y){for(var T=null,E=null,M=_,b=_=0,S=null;M!==null&&b<v.length;b++){M.index>b?(S=M,M=null):S=M.sibling;var A=h(d,M,v[b],y);if(A===null){M===null&&(M=S);break}n&&M&&A.alternate===null&&e(d,M),_=s(A,_,b),E===null?T=A:E.sibling=A,E=A,M=S}if(b===v.length)return t(d,M),lt&&Kr(d,b),T;if(M===null){for(;b<v.length;b++)M=f(d,v[b],y),M!==null&&(_=s(M,_,b),E===null?T=M:E.sibling=M,E=M);return lt&&Kr(d,b),T}for(M=i(d,M);b<v.length;b++)S=p(M,d,b,v[b],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?b:S.key),_=s(S,_,b),E===null?T=S:E.sibling=S,E=S);return n&&M.forEach(function(O){return e(d,O)}),lt&&Kr(d,b),T}function m(d,_,v,y){var T=Ho(v);if(typeof T!="function")throw Error(te(150));if(v=T.call(v),v==null)throw Error(te(151));for(var E=T=null,M=_,b=_=0,S=null,A=v.next();M!==null&&!A.done;b++,A=v.next()){M.index>b?(S=M,M=null):S=M.sibling;var O=h(d,M,A.value,y);if(O===null){M===null&&(M=S);break}n&&M&&O.alternate===null&&e(d,M),_=s(O,_,b),E===null?T=O:E.sibling=O,E=O,M=S}if(A.done)return t(d,M),lt&&Kr(d,b),T;if(M===null){for(;!A.done;b++,A=v.next())A=f(d,A.value,y),A!==null&&(_=s(A,_,b),E===null?T=A:E.sibling=A,E=A);return lt&&Kr(d,b),T}for(M=i(d,M);!A.done;b++,A=v.next())A=p(M,d,b,A.value,y),A!==null&&(n&&A.alternate!==null&&M.delete(A.key===null?b:A.key),_=s(A,_,b),E===null?T=A:E.sibling=A,E=A);return n&&M.forEach(function(j){return e(d,j)}),lt&&Kr(d,b),T}function g(d,_,v,y){if(typeof v=="object"&&v!==null&&v.type===Xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ll:e:{for(var T=v.key,E=_;E!==null;){if(E.key===T){if(T=v.type,T===Xs){if(E.tag===7){t(d,E.sibling),_=r(E,v.props.children),_.return=d,d=_;break e}}else if(E.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ar&&lm(T)===E.type){t(d,E.sibling),_=r(E,v.props),_.ref=Xo(d,E,v),_.return=d,d=_;break e}t(d,E);break}else e(d,E);E=E.sibling}v.type===Xs?(_=ls(v.props.children,d.mode,y,v.key),_.return=d,d=_):(y=ru(v.type,v.key,v.props,null,d.mode,y),y.ref=Xo(d,_,v),y.return=d,d=y)}return o(d);case js:e:{for(E=v.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===v.containerInfo&&_.stateNode.implementation===v.implementation){t(d,_.sibling),_=r(_,v.children||[]),_.return=d,d=_;break e}else{t(d,_);break}else e(d,_);_=_.sibling}_=Wc(v,d.mode,y),_.return=d,d=_}return o(d);case ar:return E=v._init,g(d,_,E(v._payload),y)}if(na(v))return x(d,_,v,y);if(Ho(v))return m(d,_,v,y);xl(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,_!==null&&_.tag===6?(t(d,_.sibling),_=r(_,v),_.return=d,d=_):(t(d,_),_=Vc(v,d.mode,y),_.return=d,d=_),o(d)):t(d,_)}return g}var So=O0(!0),F0=O0(!1),Mu=kr(null),Eu=null,eo=null,Sh=null;function Mh(){Sh=eo=Eu=null}function Eh(n){var e=Mu.current;at(Mu),n._currentValue=e}function fd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function fo(n,e){Eu=n,Sh=eo=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(_n=!0),n.firstContext=null)}function ni(n){var e=n._currentValue;if(Sh!==n)if(n={context:n,memoizedValue:e,next:null},eo===null){if(Eu===null)throw Error(te(308));eo=n,Eu.dependencies={lanes:0,firstContext:n}}else eo=eo.next=n;return e}var rs=null;function Th(n){rs===null?rs=[n]:rs.push(n)}function k0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Th(e)):(t.next=r.next,r.next=t),e.interleaved=t,$i(n,i)}function $i(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var lr=!1;function wh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function z0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Mr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,$i(n,t)}return r=i.interleaved,r===null?(e.next=e,Th(i)):(e.next=r.next,r.next=e),i.interleaved=e,$i(n,t)}function Ql(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ch(n,t)}}function um(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Tu(n,e,t,i){var r=n.updateQueue;lr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,m=a;switch(h=e,p=t,m.tag){case 1:if(x=m.payload,typeof x=="function"){f=x.call(p,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=m.payload,h=typeof x=="function"?x.call(p,f,h):x,h==null)break e;f=_t({},f,h);break e;case 2:lr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ys|=o,n.lanes=o,n.memoizedState=f}}function cm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Qa={},Ri=kr(Qa),Da=kr(Qa),Na=kr(Qa);function ss(n){if(n===Qa)throw Error(te(174));return n}function Ah(n,e){switch(rt(Na,e),rt(Da,n),rt(Ri,Qa),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:jf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=jf(e,n)}at(Ri),rt(Ri,e)}function Mo(){at(Ri),at(Da),at(Na)}function B0(n){ss(Na.current);var e=ss(Ri.current),t=jf(e,n.type);e!==t&&(rt(Da,n),rt(Ri,t))}function Ch(n){Da.current===n&&(at(Ri),at(Da))}var ht=kr(0);function wu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function Rh(){for(var n=0;n<Fc.length;n++)Fc[n]._workInProgressVersionPrimary=null;Fc.length=0}var Jl=er.ReactCurrentDispatcher,kc=er.ReactCurrentBatchConfig,xs=0,gt=null,bt=null,Ft=null,Au=!1,ha=!1,Ua=0,mM=0;function Yt(){throw Error(te(321))}function bh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!gi(n[t],e[t]))return!1;return!0}function Ph(n,e,t,i,r,s){if(xs=s,gt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Jl.current=n===null||n.memoizedState===null?xM:yM,n=t(i,r),ha){s=0;do{if(ha=!1,Ua=0,25<=s)throw Error(te(301));s+=1,Ft=bt=null,e.updateQueue=null,Jl.current=SM,n=t(i,r)}while(ha)}if(Jl.current=Cu,e=bt!==null&&bt.next!==null,xs=0,Ft=bt=gt=null,Au=!1,e)throw Error(te(300));return n}function Lh(){var n=Ua!==0;return Ua=0,n}function xi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?gt.memoizedState=Ft=n:Ft=Ft.next=n,Ft}function ii(){if(bt===null){var n=gt.alternate;n=n!==null?n.memoizedState:null}else n=bt.next;var e=Ft===null?gt.memoizedState:Ft.next;if(e!==null)Ft=e,bt=n;else{if(n===null)throw Error(te(310));bt=n,n={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ft===null?gt.memoizedState=Ft=n:Ft=Ft.next=n}return Ft}function Ia(n,e){return typeof e=="function"?e(n):e}function zc(n){var e=ii(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=bt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((xs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,gt.lanes|=c,ys|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,gt.lanes|=s,ys|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Bc(n){var e=ii(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function H0(){}function G0(n,e){var t=gt,i=ii(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,Dh(j0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ft!==null&&Ft.memoizedState.tag&1){if(t.flags|=2048,Oa(9,W0.bind(null,t,i,r,e),void 0,null),Bt===null)throw Error(te(349));xs&30||V0(t,e,r)}return r}function V0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function W0(n,e,t,i){e.value=t,e.getSnapshot=i,X0(e)&&Y0(n)}function j0(n,e,t){return t(function(){X0(e)&&Y0(n)})}function X0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!gi(n,t)}catch{return!0}}function Y0(n){var e=$i(n,1);e!==null&&mi(e,n,1,-1)}function fm(n){var e=xi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:n},e.queue=n,n=n.dispatch=vM.bind(null,gt,n),[e.memoizedState,n]}function Oa(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=gt.updateQueue,e===null?(e={lastEffect:null,stores:null},gt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function q0(){return ii().memoizedState}function eu(n,e,t,i){var r=xi();gt.flags|=n,r.memoizedState=Oa(1|e,t,void 0,i===void 0?null:i)}function Ju(n,e,t,i){var r=ii();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&bh(i,o.deps)){r.memoizedState=Oa(e,t,s,i);return}}gt.flags|=n,r.memoizedState=Oa(1|e,t,s,i)}function dm(n,e){return eu(8390656,8,n,e)}function Dh(n,e){return Ju(2048,8,n,e)}function $0(n,e){return Ju(4,2,n,e)}function K0(n,e){return Ju(4,4,n,e)}function Z0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Q0(n,e,t){return t=t!=null?t.concat([n]):null,Ju(4,4,Z0.bind(null,e,n),t)}function Nh(){}function J0(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function ev(n,e){var t=ii();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&bh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function tv(n,e,t){return xs&21?(gi(t,e)||(t=o0(),gt.lanes|=t,ys|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=t)}function gM(n,e){var t=Ke;Ke=t!==0&&4>t?t:4,n(!0);var i=kc.transition;kc.transition={};try{n(!1),e()}finally{Ke=t,kc.transition=i}}function nv(){return ii().memoizedState}function _M(n,e,t){var i=Tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},iv(n))rv(e,t);else if(t=k0(n,e,t,i),t!==null){var r=fn();mi(t,n,i,r),sv(t,e,i)}}function vM(n,e,t){var i=Tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(iv(n))rv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=k0(n,e,r,i),t!==null&&(r=fn(),mi(t,n,i,r),sv(t,e,i))}}function iv(n){var e=n.alternate;return n===gt||e!==null&&e===gt}function rv(n,e){ha=Au=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function sv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,ch(n,t)}}var Cu={readContext:ni,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},xM={readContext:ni,useCallback:function(n,e){return xi().memoizedState=[n,e===void 0?null:e],n},useContext:ni,useEffect:dm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,eu(4194308,4,Z0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return eu(4194308,4,n,e)},useInsertionEffect:function(n,e){return eu(4,2,n,e)},useMemo:function(n,e){var t=xi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=xi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=_M.bind(null,gt,n),[i.memoizedState,n]},useRef:function(n){var e=xi();return n={current:n},e.memoizedState=n},useState:fm,useDebugValue:Nh,useDeferredValue:function(n){return xi().memoizedState=n},useTransition:function(){var n=fm(!1),e=n[0];return n=gM.bind(null,n[1]),xi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=gt,r=xi();if(lt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),Bt===null)throw Error(te(349));xs&30||V0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,dm(j0.bind(null,i,s,n),[n]),i.flags|=2048,Oa(9,W0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=xi(),e=Bt.identifierPrefix;if(lt){var t=Wi,i=Vi;t=(i&~(1<<32-pi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ua++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=mM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},yM={readContext:ni,useCallback:J0,useContext:ni,useEffect:Dh,useImperativeHandle:Q0,useInsertionEffect:$0,useLayoutEffect:K0,useMemo:ev,useReducer:zc,useRef:q0,useState:function(){return zc(Ia)},useDebugValue:Nh,useDeferredValue:function(n){var e=ii();return tv(e,bt.memoizedState,n)},useTransition:function(){var n=zc(Ia)[0],e=ii().memoizedState;return[n,e]},useMutableSource:H0,useSyncExternalStore:G0,useId:nv,unstable_isNewReconciler:!1},SM={readContext:ni,useCallback:J0,useContext:ni,useEffect:Dh,useImperativeHandle:Q0,useInsertionEffect:$0,useLayoutEffect:K0,useMemo:ev,useReducer:Bc,useRef:q0,useState:function(){return Bc(Ia)},useDebugValue:Nh,useDeferredValue:function(n){var e=ii();return bt===null?e.memoizedState=n:tv(e,bt.memoizedState,n)},useTransition:function(){var n=Bc(Ia)[0],e=ii().memoizedState;return[n,e]},useMutableSource:H0,useSyncExternalStore:G0,useId:nv,unstable_isNewReconciler:!1};function li(n,e){if(n&&n.defaultProps){e=_t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function dd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:_t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ec={isMounted:function(n){return(n=n._reactInternals)?ws(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Tr(n),s=Xi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(mi(e,n,r,i),Ql(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Tr(n),s=Xi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Mr(n,s,r),e!==null&&(mi(e,n,r,i),Ql(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=fn(),i=Tr(n),r=Xi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Mr(n,r,i),e!==null&&(mi(e,n,i,t),Ql(e,n,i))}};function hm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ra(t,i)||!Ra(r,s):!0}function ov(n,e,t){var i=!1,r=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=ni(s):(r=xn(e)?_s:tn.current,i=e.contextTypes,s=(i=i!=null)?xo(n,r):Dr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function pm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ec.enqueueReplaceState(e,e.state,null)}function hd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},wh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ni(s):(s=xn(e)?_s:tn.current,r.context=xo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(dd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Tu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Eo(n,e){try{var t="",i=e;do t+=$y(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Hc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function pd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var MM=typeof WeakMap=="function"?WeakMap:Map;function av(n,e,t){t=Xi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){bu||(bu=!0,Td=i),pd(n,e)},t}function lv(n,e,t){t=Xi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){pd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){pd(n,e),typeof i!="function"&&(Er===null?Er=new Set([this]):Er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function mm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new MM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=OM.bind(null,n,e,t),e.then(n,n))}function gm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function _m(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Xi(-1,1),e.tag=2,Mr(t,e,1))),t.lanes|=1),n)}var EM=er.ReactCurrentOwner,_n=!1;function an(n,e,t,i){e.child=n===null?F0(e,null,t,i):So(e,n.child,t,i)}function vm(n,e,t,i,r){t=t.render;var s=e.ref;return fo(e,r),i=Ph(n,e,t,i,s,r),t=Lh(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(lt&&t&&vh(e),e.flags|=1,an(n,e,i,r),e.child)}function xm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Hh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,uv(n,e,s,i,r)):(n=ru(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ra,t(o,i)&&n.ref===e.ref)return Ki(n,e,r)}return e.flags|=1,n=wr(s,i),n.ref=e.ref,n.return=e,e.child=n}function uv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ra(s,i)&&n.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(_n=!0);else return e.lanes=n.lanes,Ki(n,e,r)}return md(n,e,t,i,r)}function cv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},rt(no,Ln),Ln|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,rt(no,Ln),Ln|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,rt(no,Ln),Ln|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,rt(no,Ln),Ln|=i;return an(n,e,r,t),e.child}function fv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function md(n,e,t,i,r){var s=xn(t)?_s:tn.current;return s=xo(e,s),fo(e,r),t=Ph(n,e,t,i,s,r),i=Lh(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Ki(n,e,r)):(lt&&i&&vh(e),e.flags|=1,an(n,e,t,r),e.child)}function ym(n,e,t,i,r){if(xn(t)){var s=!0;xu(e)}else s=!1;if(fo(e,r),e.stateNode===null)tu(n,e),ov(e,t,i),hd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ni(u):(u=xn(t)?_s:tn.current,u=xo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&pm(e,o,i,u),lr=!1;var h=e.memoizedState;o.state=h,Tu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||vn.current||lr?(typeof c=="function"&&(dd(e,t,c,i),l=e.memoizedState),(a=lr||hm(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,z0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:li(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ni(l):(l=xn(t)?_s:tn.current,l=xo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&pm(e,o,i,l),lr=!1,h=e.memoizedState,o.state=h,Tu(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||vn.current||lr?(typeof p=="function"&&(dd(e,t,p,i),x=e.memoizedState),(u=lr||hm(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return gd(n,e,t,i,s,r)}function gd(n,e,t,i,r,s){fv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&sm(e,t,!1),Ki(n,e,s);i=e.stateNode,EM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=So(e,n.child,null,s),e.child=So(e,null,a,s)):an(n,e,a,s),e.memoizedState=i.state,r&&sm(e,t,!0),e.child}function dv(n){var e=n.stateNode;e.pendingContext?rm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&rm(n,e.context,!1),Ah(n,e.containerInfo)}function Sm(n,e,t,i,r){return yo(),yh(r),e.flags|=256,an(n,e,t,i),e.child}var _d={dehydrated:null,treeContext:null,retryLane:0};function vd(n){return{baseLanes:n,cachePool:null,transitions:null}}function hv(n,e,t){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),rt(ht,r&1),n===null)return cd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,i,0,null),n=ls(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=vd(t),e.memoizedState=_d,n):Uh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return TM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=wr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=wr(a,s):(s=ls(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?vd(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=_d,i}return s=n.child,n=s.sibling,i=wr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Uh(n,e){return e=ic({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function yl(n,e,t,i){return i!==null&&yh(i),So(e,n.child,null,t),n=Uh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function TM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Hc(Error(te(422))),yl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=ls(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&So(e,n.child,null,o),e.child.memoizedState=vd(o),e.memoizedState=_d,s);if(!(e.mode&1))return yl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Hc(s,i,void 0),yl(n,e,o,i)}if(a=(o&n.childLanes)!==0,_n||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,$i(n,r),mi(i,n,r,-1))}return Bh(),i=Hc(Error(te(421))),yl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=FM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Un=Sr(r.nextSibling),Fn=e,lt=!0,ci=null,n!==null&&(Yn[qn++]=Vi,Yn[qn++]=Wi,Yn[qn++]=vs,Vi=n.id,Wi=n.overflow,vs=e),e=Uh(e,i.children),e.flags|=4096,e)}function Mm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),fd(n.return,e,t)}function Gc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function pv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(an(n,e,i.children,t),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Mm(n,t,e);else if(n.tag===19)Mm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(rt(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&wu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Gc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&wu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Gc(e,!0,t,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Ki(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ys|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=wr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=wr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function wM(n,e,t){switch(e.tag){case 3:dv(e),yo();break;case 5:B0(e);break;case 1:xn(e.type)&&xu(e);break;case 4:Ah(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;rt(Mu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(rt(ht,ht.current&1),e.flags|=128,null):t&e.child.childLanes?hv(n,e,t):(rt(ht,ht.current&1),n=Ki(n,e,t),n!==null?n.sibling:null);rt(ht,ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return pv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),rt(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,cv(n,e,t)}return Ki(n,e,t)}var mv,xd,gv,_v;mv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};xd=function(){};gv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,ss(Ri.current);var s=null;switch(t){case"input":r=Hf(n,r),i=Hf(n,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Wf(n,r),i=Wf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=_u)}Xf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Sa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Sa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_v=function(n,e,t,i){t!==i&&(e.flags|=4)};function Yo(n,e){if(!lt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function qt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function AM(n,e,t){var i=e.pendingProps;switch(xh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return xn(e.type)&&vu(),qt(e),null;case 3:return i=e.stateNode,Mo(),at(vn),at(tn),Rh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(vl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Cd(ci),ci=null))),xd(n,e),qt(e),null;case 5:Ch(e);var r=ss(Na.current);if(t=e.type,n!==null&&e.stateNode!=null)gv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return qt(e),null}if(n=ss(Ri.current),vl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Mi]=e,i[La]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)st(ra[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Lp(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":Np(i,s),st("invalid",i)}Xf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,n),r=["children",""+a]):Sa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(t){case"input":ul(i),Dp(i,s,!0);break;case"textarea":ul(i),Up(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_u)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=j_(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Mi]=e,n[La]=i,mv(n,e,!1,!1),e.stateNode=n;e:{switch(o=Yf(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)st(ra[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":Lp(n,i),r=Hf(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),st("invalid",n);break;case"textarea":Np(n,i),r=Wf(n,i),st("invalid",n);break;default:r=i}Xf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?q_(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&X_(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Ma(n,l):typeof l=="number"&&Ma(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Sa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&rh(n,s,l,o))}switch(t){case"input":ul(n),Dp(n,i,!1);break;case"textarea":ul(n),Up(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Lr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?ao(n,!!i.multiple,s,!1):i.defaultValue!=null&&ao(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=_u)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(n&&e.stateNode!=null)_v(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=ss(Na.current),ss(Ri.current),vl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Mi]=e,(s=i.nodeValue!==t)&&(n=Fn,n!==null))switch(n.tag){case 3:_l(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_l(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Mi]=e,e.stateNode=i}return qt(e),null;case 13:if(at(ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(lt&&Un!==null&&e.mode&1&&!(e.flags&128))I0(),yo(),e.flags|=98560,s=!1;else if(s=vl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[Mi]=e}else yo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else ci!==null&&(Cd(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ht.current&1?Pt===0&&(Pt=3):Bh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Mo(),xd(n,e),n===null&&ba(e.stateNode.containerInfo),qt(e),null;case 10:return Eh(e.type._context),qt(e),null;case 17:return xn(e.type)&&vu(),qt(e),null;case 19:if(at(ht),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Yo(s,!1);else{if(Pt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=wu(n),o!==null){for(e.flags|=128,Yo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return rt(ht,ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&wt()>To&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304)}else{if(!i)if(n=wu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Yo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!lt)return qt(e),null}else 2*wt()-s.renderingStartTime>To&&t!==1073741824&&(e.flags|=128,i=!0,Yo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=wt(),e.sibling=null,t=ht.current,rt(ht,i?t&1|2:t&1),e):(qt(e),null);case 22:case 23:return zh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function CM(n,e){switch(xh(e),e.tag){case 1:return xn(e.type)&&vu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return Mo(),at(vn),at(tn),Rh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Ch(e),null;case 13:if(at(ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));yo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return at(ht),null;case 4:return Mo(),null;case 10:return Eh(e.type._context),null;case 22:case 23:return zh(),null;case 24:return null;default:return null}}var Sl=!1,Zt=!1,RM=typeof WeakSet=="function"?WeakSet:Set,fe=null;function to(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){yt(n,e,i)}else t.current=null}function yd(n,e,t){try{t()}catch(i){yt(n,e,i)}}var Em=!1;function bM(n,e){if(id=pu,n=M0(),_h(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(rd={focusedElem:n,selectionRange:t},pu=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var m=x.memoizedProps,g=x.memoizedState,d=e.stateNode,_=d.getSnapshotBeforeUpdate(e.elementType===e.type?m:li(e.type,m),g);d.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(y){yt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return x=Em,Em=!1,x}function pa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&yd(e,t,s)}r=r.next}while(r!==i)}}function tc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Sd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function vv(n){var e=n.alternate;e!==null&&(n.alternate=null,vv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Mi],delete e[La],delete e[ad],delete e[fM],delete e[dM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function xv(n){return n.tag===5||n.tag===3||n.tag===4}function Tm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||xv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=_u));else if(i!==4&&(n=n.child,n!==null))for(Md(n,e,t),n=n.sibling;n!==null;)Md(n,e,t),n=n.sibling}function Ed(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Ed(n,e,t),n=n.sibling;n!==null;)Ed(n,e,t),n=n.sibling}var Gt=null,ui=!1;function tr(n,e,t){for(t=t.child;t!==null;)yv(n,e,t),t=t.sibling}function yv(n,e,t){if(Ci&&typeof Ci.onCommitFiberUnmount=="function")try{Ci.onCommitFiberUnmount(Yu,t)}catch{}switch(t.tag){case 5:Zt||to(t,e);case 6:var i=Gt,r=ui;Gt=null,tr(n,e,t),Gt=i,ui=r,Gt!==null&&(ui?(n=Gt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Gt.removeChild(t.stateNode));break;case 18:Gt!==null&&(ui?(n=Gt,t=t.stateNode,n.nodeType===8?Ic(n.parentNode,t):n.nodeType===1&&Ic(n,t),Aa(n)):Ic(Gt,t.stateNode));break;case 4:i=Gt,r=ui,Gt=t.stateNode.containerInfo,ui=!0,tr(n,e,t),Gt=i,ui=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&yd(t,e,o),r=r.next}while(r!==i)}tr(n,e,t);break;case 1:if(!Zt&&(to(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){yt(t,e,a)}tr(n,e,t);break;case 21:tr(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,tr(n,e,t),Zt=i):tr(n,e,t);break;default:tr(n,e,t)}}function wm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new RM),e.forEach(function(i){var r=kM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ri(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,ui=!1;break e;case 3:Gt=a.stateNode.containerInfo,ui=!0;break e;case 4:Gt=a.stateNode.containerInfo,ui=!0;break e}a=a.return}if(Gt===null)throw Error(te(160));yv(s,o,r),Gt=null,ui=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){yt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Sv(e,n),e=e.sibling}function Sv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ri(e,n),vi(n),i&4){try{pa(3,n,n.return),tc(3,n)}catch(m){yt(n,n.return,m)}try{pa(5,n,n.return)}catch(m){yt(n,n.return,m)}}break;case 1:ri(e,n),vi(n),i&512&&t!==null&&to(t,t.return);break;case 5:if(ri(e,n),vi(n),i&512&&t!==null&&to(t,t.return),n.flags&32){var r=n.stateNode;try{Ma(r,"")}catch(m){yt(n,n.return,m)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&V_(r,s),Yf(a,o);var u=Yf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?q_(r,f):c==="dangerouslySetInnerHTML"?X_(r,f):c==="children"?Ma(r,f):rh(r,c,f,u)}switch(a){case"input":Gf(r,s);break;case"textarea":W_(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?ao(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?ao(r,!!s.multiple,s.defaultValue,!0):ao(r,!!s.multiple,s.multiple?[]:"",!1))}r[La]=s}catch(m){yt(n,n.return,m)}}break;case 6:if(ri(e,n),vi(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(m){yt(n,n.return,m)}}break;case 3:if(ri(e,n),vi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(m){yt(n,n.return,m)}break;case 4:ri(e,n),vi(n);break;case 13:ri(e,n),vi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fh=wt())),i&4&&wm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(u=Zt)||c,ri(e,n),Zt=u):ri(e,n),vi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(fe=n,c=n.child;c!==null;){for(f=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:pa(4,h,h.return);break;case 1:to(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(m){yt(i,t,m)}}break;case 5:to(h,h.return);break;case 22:if(h.memoizedState!==null){Cm(f);continue}}p!==null?(p.return=h,fe=p):Cm(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Y_("display",o))}catch(m){yt(n,n.return,m)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(m){yt(n,n.return,m)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ri(e,n),vi(n),i&4&&wm(n);break;case 21:break;default:ri(e,n),vi(n)}}function vi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(xv(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=Tm(n);Ed(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Tm(n);Md(n,a,o);break;default:throw Error(te(161))}}catch(l){yt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function PM(n,e,t){fe=n,Mv(n)}function Mv(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Sl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=Sl;var u=Zt;if(Sl=o,(Zt=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Rm(r):l!==null?(l.return=o,fe=l):Rm(r);for(;s!==null;)fe=s,Mv(s),s=s.sibling;fe=r,Sl=a,Zt=u}Am(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Am(n)}}function Am(n){for(;fe!==null;){var e=fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:li(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}cm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Aa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Zt||e.flags&512&&Sd(e)}catch(h){yt(e,e.return,h)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Cm(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Rm(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tc(4,e)}catch(l){yt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){yt(e,r,l)}}var s=e.return;try{Sd(e)}catch(l){yt(e,s,l)}break;case 5:var o=e.return;try{Sd(e)}catch(l){yt(e,o,l)}}}catch(l){yt(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var LM=Math.ceil,Ru=er.ReactCurrentDispatcher,Ih=er.ReactCurrentOwner,ti=er.ReactCurrentBatchConfig,Ye=0,Bt=null,Rt=null,Vt=0,Ln=0,no=kr(0),Pt=0,Fa=null,ys=0,nc=0,Oh=0,ma=null,mn=null,Fh=0,To=1/0,zi=null,bu=!1,Td=null,Er=null,Ml=!1,dr=null,Pu=0,ga=0,wd=null,nu=-1,iu=0;function fn(){return Ye&6?wt():nu!==-1?nu:nu=wt()}function Tr(n){return n.mode&1?Ye&2&&Vt!==0?Vt&-Vt:pM.transition!==null?(iu===0&&(iu=o0()),iu):(n=Ke,n!==0||(n=window.event,n=n===void 0?16:h0(n.type)),n):1}function mi(n,e,t,i){if(50<ga)throw ga=0,wd=null,Error(te(185));$a(n,t,i),(!(Ye&2)||n!==Bt)&&(n===Bt&&(!(Ye&2)&&(nc|=t),Pt===4&&cr(n,Vt)),yn(n,i),t===1&&Ye===0&&!(e.mode&1)&&(To=wt()+500,Qu&&zr()))}function yn(n,e){var t=n.callbackNode;pS(n,e);var i=hu(n,n===Bt?Vt:0);if(i===0)t!==null&&Fp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Fp(t),e===1)n.tag===0?hM(bm.bind(null,n)):D0(bm.bind(null,n)),uM(function(){!(Ye&6)&&zr()}),t=null;else{switch(a0(i)){case 1:t=uh;break;case 4:t=r0;break;case 16:t=du;break;case 536870912:t=s0;break;default:t=du}t=Pv(t,Ev.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Ev(n,e){if(nu=-1,iu=0,Ye&6)throw Error(te(327));var t=n.callbackNode;if(ho()&&n.callbackNode!==t)return null;var i=hu(n,n===Bt?Vt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Lu(n,i);else{e=i;var r=Ye;Ye|=2;var s=wv();(Bt!==n||Vt!==e)&&(zi=null,To=wt()+500,as(n,e));do try{UM();break}catch(a){Tv(n,a)}while(!0);Mh(),Ru.current=s,Ye=r,Rt!==null?e=0:(Bt=null,Vt=0,e=Pt)}if(e!==0){if(e===2&&(r=Qf(n),r!==0&&(i=r,e=Ad(n,r))),e===1)throw t=Fa,as(n,0),cr(n,i),yn(n,wt()),t;if(e===6)cr(n,i);else{if(r=n.current.alternate,!(i&30)&&!DM(r)&&(e=Lu(n,i),e===2&&(s=Qf(n),s!==0&&(i=s,e=Ad(n,s))),e===1))throw t=Fa,as(n,0),cr(n,i),yn(n,wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Zr(n,mn,zi);break;case 3:if(cr(n,i),(i&130023424)===i&&(e=Fh+500-wt(),10<e)){if(hu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){fn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=od(Zr.bind(null,n,mn,zi),e);break}Zr(n,mn,zi);break;case 4:if(cr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-pi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*LM(i/1960))-i,10<i){n.timeoutHandle=od(Zr.bind(null,n,mn,zi),i);break}Zr(n,mn,zi);break;case 5:Zr(n,mn,zi);break;default:throw Error(te(329))}}}return yn(n,wt()),n.callbackNode===t?Ev.bind(null,n):null}function Ad(n,e){var t=ma;return n.current.memoizedState.isDehydrated&&(as(n,e).flags|=256),n=Lu(n,e),n!==2&&(e=mn,mn=t,e!==null&&Cd(e)),n}function Cd(n){mn===null?mn=n:mn.push.apply(mn,n)}function DM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function cr(n,e){for(e&=~Oh,e&=~nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-pi(e),i=1<<t;n[t]=-1,e&=~i}}function bm(n){if(Ye&6)throw Error(te(327));ho();var e=hu(n,0);if(!(e&1))return yn(n,wt()),null;var t=Lu(n,e);if(n.tag!==0&&t===2){var i=Qf(n);i!==0&&(e=i,t=Ad(n,i))}if(t===1)throw t=Fa,as(n,0),cr(n,e),yn(n,wt()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Zr(n,mn,zi),yn(n,wt()),null}function kh(n,e){var t=Ye;Ye|=1;try{return n(e)}finally{Ye=t,Ye===0&&(To=wt()+500,Qu&&zr())}}function Ss(n){dr!==null&&dr.tag===0&&!(Ye&6)&&ho();var e=Ye;Ye|=1;var t=ti.transition,i=Ke;try{if(ti.transition=null,Ke=1,n)return n()}finally{Ke=i,ti.transition=t,Ye=e,!(Ye&6)&&zr()}}function zh(){Ln=no.current,at(no)}function as(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,lM(t)),Rt!==null)for(t=Rt.return;t!==null;){var i=t;switch(xh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&vu();break;case 3:Mo(),at(vn),at(tn),Rh();break;case 5:Ch(i);break;case 4:Mo();break;case 13:at(ht);break;case 19:at(ht);break;case 10:Eh(i.type._context);break;case 22:case 23:zh()}t=t.return}if(Bt=n,Rt=n=wr(n.current,null),Vt=Ln=e,Pt=0,Fa=null,Oh=nc=ys=0,mn=ma=null,rs!==null){for(e=0;e<rs.length;e++)if(t=rs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}rs=null}return n}function Tv(n,e){do{var t=Rt;try{if(Mh(),Jl.current=Cu,Au){for(var i=gt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Au=!1}if(xs=0,Ft=bt=gt=null,ha=!1,Ua=0,Ih.current=null,t===null||t.return===null){Pt=1,Fa=e,Rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=gm(o);if(p!==null){p.flags&=-257,_m(p,o,a,s,e),p.mode&1&&mm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var m=new Set;m.add(l),e.updateQueue=m}else x.add(l);break e}else{if(!(e&1)){mm(s,u,e),Bh();break e}l=Error(te(426))}}else if(lt&&a.mode&1){var g=gm(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),_m(g,o,a,s,e),yh(Eo(l,a));break e}}s=l=Eo(l,a),Pt!==4&&(Pt=2),ma===null?ma=[s]:ma.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=av(s,l,e);um(s,d);break e;case 1:a=l;var _=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Er===null||!Er.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=lv(s,a,e);um(s,y);break e}}s=s.return}while(s!==null)}Cv(t)}catch(T){e=T,Rt===t&&t!==null&&(Rt=t=t.return);continue}break}while(!0)}function wv(){var n=Ru.current;return Ru.current=Cu,n===null?Cu:n}function Bh(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Bt===null||!(ys&268435455)&&!(nc&268435455)||cr(Bt,Vt)}function Lu(n,e){var t=Ye;Ye|=2;var i=wv();(Bt!==n||Vt!==e)&&(zi=null,as(n,e));do try{NM();break}catch(r){Tv(n,r)}while(!0);if(Mh(),Ye=t,Ru.current=i,Rt!==null)throw Error(te(261));return Bt=null,Vt=0,Pt}function NM(){for(;Rt!==null;)Av(Rt)}function UM(){for(;Rt!==null&&!sS();)Av(Rt)}function Av(n){var e=bv(n.alternate,n,Ln);n.memoizedProps=n.pendingProps,e===null?Cv(n):Rt=e,Ih.current=null}function Cv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=CM(t,e),t!==null){t.flags&=32767,Rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Pt=6,Rt=null;return}}else if(t=AM(t,e,Ln),t!==null){Rt=t;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=n}while(e!==null);Pt===0&&(Pt=5)}function Zr(n,e,t){var i=Ke,r=ti.transition;try{ti.transition=null,Ke=1,IM(n,e,t,i)}finally{ti.transition=r,Ke=i}return null}function IM(n,e,t,i){do ho();while(dr!==null);if(Ye&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(mS(n,s),n===Bt&&(Rt=Bt=null,Vt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Ml||(Ml=!0,Pv(du,function(){return ho(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ti.transition,ti.transition=null;var o=Ke;Ke=1;var a=Ye;Ye|=4,Ih.current=null,bM(n,t),Sv(t,n),tM(rd),pu=!!id,rd=id=null,n.current=t,PM(t),oS(),Ye=a,Ke=o,ti.transition=s}else n.current=t;if(Ml&&(Ml=!1,dr=n,Pu=r),s=n.pendingLanes,s===0&&(Er=null),uS(t.stateNode),yn(n,wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(bu)throw bu=!1,n=Td,Td=null,n;return Pu&1&&n.tag!==0&&ho(),s=n.pendingLanes,s&1?n===wd?ga++:(ga=0,wd=n):ga=0,zr(),null}function ho(){if(dr!==null){var n=a0(Pu),e=ti.transition,t=Ke;try{if(ti.transition=null,Ke=16>n?16:n,dr===null)var i=!1;else{if(n=dr,dr=null,Pu=0,Ye&6)throw Error(te(331));var r=Ye;for(Ye|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:pa(8,c,s)}var f=c.child;if(f!==null)f.return=c,fe=f;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(vv(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var x=s.alternate;if(x!==null){var m=x.child;if(m!==null){x.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(m!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,fe=d;break e}fe=s.return}}var _=n.current;for(fe=_;fe!==null;){o=fe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,fe=v;else e:for(o=_;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(T){yt(a,a.return,T)}if(a===o){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if(Ye=r,zr(),Ci&&typeof Ci.onPostCommitFiberRoot=="function")try{Ci.onPostCommitFiberRoot(Yu,n)}catch{}i=!0}return i}finally{Ke=t,ti.transition=e}}return!1}function Pm(n,e,t){e=Eo(t,e),e=av(n,e,1),n=Mr(n,e,1),e=fn(),n!==null&&($a(n,1,e),yn(n,e))}function yt(n,e,t){if(n.tag===3)Pm(n,n,t);else for(;e!==null;){if(e.tag===3){Pm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Er===null||!Er.has(i))){n=Eo(t,n),n=lv(e,n,1),e=Mr(e,n,1),n=fn(),e!==null&&($a(e,1,n),yn(e,n));break}}e=e.return}}function OM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=fn(),n.pingedLanes|=n.suspendedLanes&t,Bt===n&&(Vt&t)===t&&(Pt===4||Pt===3&&(Vt&130023424)===Vt&&500>wt()-Fh?as(n,0):Oh|=t),yn(n,e)}function Rv(n,e){e===0&&(n.mode&1?(e=dl,dl<<=1,!(dl&130023424)&&(dl=4194304)):e=1);var t=fn();n=$i(n,e),n!==null&&($a(n,e,t),yn(n,t))}function FM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Rv(n,t)}function kM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Rv(n,t)}var bv;bv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)_n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return _n=!1,wM(n,e,t);_n=!!(n.flags&131072)}else _n=!1,lt&&e.flags&1048576&&N0(e,Su,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tu(n,e),n=e.pendingProps;var r=xo(e,tn.current);fo(e,t),r=Ph(null,e,i,n,r,t);var s=Lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,xu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,wh(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,hd(e,i,n,t),e=gd(null,e,i,!0,s,t)):(e.tag=0,lt&&s&&vh(e),an(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(tu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=BM(i),n=li(i,n),r){case 0:e=md(null,e,i,n,t);break e;case 1:e=ym(null,e,i,n,t);break e;case 11:e=vm(null,e,i,n,t);break e;case 14:e=xm(null,e,i,li(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),md(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),ym(n,e,i,r,t);case 3:e:{if(dv(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,z0(n,e),Tu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Eo(Error(te(423)),e),e=Sm(n,e,i,t,r);break e}else if(i!==r){r=Eo(Error(te(424)),e),e=Sm(n,e,i,t,r);break e}else for(Un=Sr(e.stateNode.containerInfo.firstChild),Fn=e,lt=!0,ci=null,t=F0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(yo(),i===r){e=Ki(n,e,t);break e}an(n,e,i,t)}e=e.child}return e;case 5:return B0(e),n===null&&cd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,sd(i,r)?o=null:s!==null&&sd(i,s)&&(e.flags|=32),fv(n,e),an(n,e,o,t),e.child;case 6:return n===null&&cd(e),null;case 13:return hv(n,e,t);case 4:return Ah(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=So(e,null,i,t):an(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),vm(n,e,i,r,t);case 7:return an(n,e,e.pendingProps,t),e.child;case 8:return an(n,e,e.pendingProps.children,t),e.child;case 12:return an(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,rt(Mu,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!vn.current){e=Ki(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),fd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),fd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}an(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,fo(e,t),r=ni(r),i=i(r),e.flags|=1,an(n,e,i,t),e.child;case 14:return i=e.type,r=li(i,e.pendingProps),r=li(i.type,r),xm(n,e,i,r,t);case 15:return uv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:li(i,r),tu(n,e),e.tag=1,xn(i)?(n=!0,xu(e)):n=!1,fo(e,t),ov(e,i,r),hd(e,i,r,t),gd(null,e,i,!0,n,t);case 19:return pv(n,e,t);case 22:return cv(n,e,t)}throw Error(te(156,e.tag))};function Pv(n,e){return i0(n,e)}function zM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,e,t,i){return new zM(n,e,t,i)}function Hh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function BM(n){if(typeof n=="function")return Hh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oh)return 11;if(n===ah)return 14}return 2}function wr(n,e){var t=n.alternate;return t===null?(t=Qn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ru(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Hh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Xs:return ls(t.children,r,s,e);case sh:o=8,r|=8;break;case Ff:return n=Qn(12,t,e,r|2),n.elementType=Ff,n.lanes=s,n;case kf:return n=Qn(13,t,e,r),n.elementType=kf,n.lanes=s,n;case zf:return n=Qn(19,t,e,r),n.elementType=zf,n.lanes=s,n;case B_:return ic(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k_:o=10;break e;case z_:o=9;break e;case oh:o=11;break e;case ah:o=14;break e;case ar:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Qn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function ls(n,e,t,i){return n=Qn(7,n,i,e),n.lanes=t,n}function ic(n,e,t,i){return n=Qn(22,n,i,e),n.elementType=B_,n.lanes=t,n.stateNode={isHidden:!1},n}function Vc(n,e,t){return n=Qn(6,n,null,e),n.lanes=t,n}function Wc(n,e,t){return e=Qn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function HM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Gh(n,e,t,i,r,s,o,a,l){return n=new HM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Qn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},wh(s),n}function GM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:js,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Lv(n){if(!n)return Dr;n=n._reactInternals;e:{if(ws(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(xn(t))return L0(n,t,e)}return e}function Dv(n,e,t,i,r,s,o,a,l){return n=Gh(t,i,!0,n,r,s,o,a,l),n.context=Lv(null),t=n.current,i=fn(),r=Tr(t),s=Xi(i,r),s.callback=e??null,Mr(t,s,r),n.current.lanes=r,$a(n,r,i),yn(n,i),n}function rc(n,e,t,i){var r=e.current,s=fn(),o=Tr(r);return t=Lv(t),e.context===null?e.context=t:e.pendingContext=t,e=Xi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Mr(r,e,o),n!==null&&(mi(n,r,o,s),Ql(n,r,o)),o}function Du(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Lm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Vh(n,e){Lm(n,e),(n=n.alternate)&&Lm(n,e)}function VM(){return null}var Nv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Wh(n){this._internalRoot=n}sc.prototype.render=Wh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));rc(n,e,null,null)};sc.prototype.unmount=Wh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Ss(function(){rc(null,n,null,null)}),e[qi]=null}};function sc(n){this._internalRoot=n}sc.prototype.unstable_scheduleHydration=function(n){if(n){var e=c0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<ur.length&&e!==0&&e<ur[t].priority;t++);ur.splice(t,0,n),t===0&&d0(n)}};function jh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Dm(){}function WM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Du(o);s.call(u)}}var o=Dv(e,i,n,0,null,!1,!1,"",Dm);return n._reactRootContainer=o,n[qi]=o.current,ba(n.nodeType===8?n.parentNode:n),Ss(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Du(l);a.call(u)}}var l=Gh(n,0,!1,null,null,!1,!1,"",Dm);return n._reactRootContainer=l,n[qi]=l.current,ba(n.nodeType===8?n.parentNode:n),Ss(function(){rc(e,l,t,i)}),l}function ac(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Du(o);a.call(l)}}rc(e,o,n,r)}else o=WM(t,e,n,r,i);return Du(o)}l0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ia(e.pendingLanes);t!==0&&(ch(e,t|1),yn(e,wt()),!(Ye&6)&&(To=wt()+500,zr()))}break;case 13:Ss(function(){var i=$i(n,1);if(i!==null){var r=fn();mi(i,n,1,r)}}),Vh(n,1)}};fh=function(n){if(n.tag===13){var e=$i(n,134217728);if(e!==null){var t=fn();mi(e,n,134217728,t)}Vh(n,134217728)}};u0=function(n){if(n.tag===13){var e=Tr(n),t=$i(n,e);if(t!==null){var i=fn();mi(t,n,e,i)}Vh(n,e)}};c0=function(){return Ke};f0=function(n,e){var t=Ke;try{return Ke=n,e()}finally{Ke=t}};$f=function(n,e,t){switch(e){case"input":if(Gf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zu(i);if(!r)throw Error(te(90));G_(i),Gf(i,r)}}}break;case"textarea":W_(n,t);break;case"select":e=t.value,e!=null&&ao(n,!!t.multiple,e,!1)}};Z_=kh;Q_=Ss;var jM={usingClientEntryPoint:!1,Events:[Za,Ks,Zu,$_,K_,kh]},qo={findFiberByHostInstance:is,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XM={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:er.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=t0(n),n===null?null:n.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||VM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var El=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!El.isDisabled&&El.supportsFiber)try{Yu=El.inject(XM),Ci=El}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jM;Gn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!jh(e))throw Error(te(200));return GM(n,e,null,t)};Gn.createRoot=function(n,e){if(!jh(n))throw Error(te(299));var t=!1,i="",r=Nv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Gh(n,1,!1,null,null,t,!1,i,r),n[qi]=e.current,ba(n.nodeType===8?n.parentNode:n),new Wh(e)};Gn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=t0(e),n=n===null?null:n.stateNode,n};Gn.flushSync=function(n){return Ss(n)};Gn.hydrate=function(n,e,t){if(!oc(e))throw Error(te(200));return ac(null,n,e,!0,t)};Gn.hydrateRoot=function(n,e,t){if(!jh(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Nv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Dv(e,null,n,1,t??null,r,!1,s,o),n[qi]=e.current,ba(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new sc(e)};Gn.render=function(n,e,t){if(!oc(e))throw Error(te(200));return ac(null,n,e,!1,t)};Gn.unmountComponentAtNode=function(n){if(!oc(n))throw Error(te(40));return n._reactRootContainer?(Ss(function(){ac(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1};Gn.unstable_batchedUpdates=kh;Gn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!oc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return ac(n,e,t,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function Uv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Uv)}catch(n){console.error(n)}}Uv(),U_.exports=Gn;var YM=U_.exports,Nm=YM;If.createRoot=Nm.createRoot,If.hydrateRoot=Nm.hydrateRoot;function Bi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Iv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var kn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},wo={duration:.5,overwrite:!1,delay:0},Xh,Wt,ut,Jn=1e8,et=1/Jn,Rd=Math.PI*2,qM=Rd/4,$M=0,Ov=Math.sqrt,KM=Math.cos,ZM=Math.sin,Ht=function(e){return typeof e=="string"},St=function(e){return typeof e=="function"},Zi=function(e){return typeof e=="number"},Yh=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},Sn=function(e){return e!==!1},qh=function(){return typeof window<"u"},Tl=function(e){return St(e)||Ht(e)},Fv=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Jt=Array.isArray,QM=/random\([^)]+\)/g,JM=/,\s*/g,Um=/(?:-?\.?\d|\.)+/gi,kv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,io=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,jc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zv=/[+-]=-?[.\d]+/,eE=/[^,'"\[\]\s]+/gi,tE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,yi,bd,$h,Bn={},Nu={},Bv,Hv=function(e){return(Nu=Ao(e,Bn))&&Cn},Kh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ka=function(e,t){return!t&&console.warn(e)},Gv=function(e,t){return e&&(Bn[e]=t)&&Nu&&(Nu[e]=t)||Bn},za=function(){return 0},nE={suppressEvents:!0,isStart:!0,kill:!1},su={suppressEvents:!0,kill:!1},iE={suppressEvents:!0},Zh={},Ar=[],Pd={},Vv,Dn={},Xc={},Im=30,ou=[],Qh="",Jh=function(e){var t=e[0],i,r;if(Li(t)||St(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=ou.length;r--&&!ou[r].targetTest(t););i=ou[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new hx(e[r],i)))||e.splice(r,1);return e},us=function(e){return e._gsap||Jh(ei(e))[0]._gsap},Wv=function(e,t,i){return(i=e[t])&&St(i)?e[t]():Yh(i)&&e.getAttribute&&e.getAttribute(t)||i},Mn=function(e,t){return(e=e.split(",")).forEach(t)||e},Et=function(e){return Math.round(e*1e5)/1e5||0},dt=function(e){return Math.round(e*1e7)/1e7||0},po=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},rE=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Uu=function(){var e=Ar.length,t=Ar.slice(0),i,r;for(Pd={},Ar.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ep=function(e){return!!(e._initted||e._startAt||e.add)},jv=function(e,t,i,r){Ar.length&&!Wt&&Uu(),e.render(t,i,!!(Wt&&t<0&&ep(e))),Ar.length&&!Wt&&Uu()},Xv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(eE).length<2?t:Ht(e)?e.trim():e},Yv=function(e){return e},Hn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},sE=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ao=function(e,t){for(var i in t)e[i]=t[i];return e},Om=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Li(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Iu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},_a=function(e){var t=e.parent||pt,i=e.keyframes?sE(Jt(e.keyframes)):Hn;if(Sn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},oE=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},qv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},lc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},aE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ld=function(e,t,i,r){return e._startAt&&(Wt?e._startAt.revert(su):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},lE=function n(e){return!e||e._ts&&n(e.parent)},Fm=function(e){return e._repeat?Co(e._tTime,e=e.duration()+e._rDelay)*e:0},Co=function(e,t){var i=Math.floor(e=dt(e/t));return e&&i===e?i-1:i},Ou=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uc=function(e){return e._end=dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},cc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=dt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uc(e),i._dirty||cs(i,e)),e},$v=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Ou(e.rawTime(),t),(!t._dur||Ja(0,t.totalDuration(),i)-t._tTime>et)&&t.render(i,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-et}},Ei=function(e,t,i,r){return t.parent&&Nr(t),t._start=dt((Zi(i)?i:i||e!==pt?Xn(e,i,t):e._time)+t._delay),t._end=dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),qv(e,t,"_first","_last",e._sort?"_start":0),Dd(t)||(e._recent=t),r||$v(e,t),e._ts<0&&cc(e,e._tTime),e},Kv=function(e,t){return(Bn.ScrollTrigger||Kh("scrollTrigger",t))&&Bn.ScrollTrigger.create(t,e)},Zv=function(e,t,i,r,s){if(np(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Wt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Vv!==Nn.frame)return Ar.push(e),e._lazy=[s,r],1},uE=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Dd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},cE=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&uE(e)&&!(!e._initted&&Dd(e))||(e._ts<0||e._dp._ts<0)&&!Dd(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Ja(0,e._tDur,t),c=Co(l,a),e._yoyo&&c&1&&(o=1-o),c!==Co(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Wt||r||e._zTime===et||!t&&e._zTime){if(!e._initted&&Zv(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?et:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Ld(e,t,i,!0),e._onUpdate&&!i&&In(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&In(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Nr(e,1),!i&&!Wt&&(In(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},fE=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ro=function(e,t,i,r){var s=e._repeat,o=dt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:dt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&cc(e,e._tTime=e._tDur*a),e.parent&&uc(e),i||cs(e.parent,e),e},km=function(e){return e instanceof cn?cs(e):Ro(e,e._dur)},dE={_start:0,endTime:za,totalDuration:za},Xn=function n(e,t,i){var r=e.labels,s=e._recent||dE,o=e.duration()>=Jn?s.endTime(!1):e._dur,a,l,u;return Ht(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Jt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},va=function(e,t,i){var r=Zi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;o.immediateRender=Sn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ct(t[0],o,t[s+1])},Br=function(e,t){return e||e===0?t(e):t},Ja=function(e,t,i){return i<e?e:i>t?t:i},Qt=function(e,t){return!Ht(e)||!(t=tE.exec(e))?"":t[1]},hE=function(e,t,i){return Br(i,function(r){return Ja(e,t,r)})},Nd=[].slice,Qv=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==yi},pE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ht(r)&&!t||Qv(r,1)?(s=i).push.apply(s,ei(r)):i.push(r)})||i},ei=function(e,t,i){return ut&&!t&&ut.selector?ut.selector(e):Ht(e)&&!i&&(bd||!bo())?Nd.call((t||$h).querySelectorAll(e),0):Jt(e)?pE(e,i):Qv(e)?Nd.call(e,0):e?[e]:[]},Ud=function(e){return e=ei(e)[0]||ka("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return ei(t,i.querySelectorAll?i:i===e?ka("Invalid scope")||$h.createElement("div"):e)}},Jv=function(e){return e.sort(function(){return .5-Math.random()})},ex=function(e){if(St(e))return e;var t=Li(e)?e:{each:e},i=fs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return Ht(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,x){var m=(x||t).length,g=o[m],d,_,v,y,T,E,M,b,S;if(!g){if(S=t.grid==="auto"?0:(t.grid||[1,Jn])[1],!S){for(M=-Jn;M<(M=x[S++].getBoundingClientRect().left)&&S<m;);S<m&&S--}for(g=o[m]=[],d=l?Math.min(S,m)*c-.5:r%S,_=S===Jn?0:l?m*f/S-.5:r/S|0,M=0,b=Jn,E=0;E<m;E++)v=E%S-d,y=_-(E/S|0),g[E]=T=u?Math.abs(u==="y"?y:v):Ov(v*v+y*y),T>M&&(M=T),T<b&&(b=T);r==="random"&&Jv(g),g.max=M-b,g.min=b,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(S>m?m-1:u?u==="y"?m/S:S:Math.max(S,m/S))||0)*(r==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Qt(t.amount||t.each)||0,i=i&&m<0?cx(i):i}return m=(g[h]-g.min)/g.max||0,dt(g.b+(i?i(m):m)*g.v)+g.u}},Id=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=dt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Zi(i)?0:Qt(i))}},tx=function(e,t){var i=Jt(e),r,s;return!i&&Li(e)&&(r=i=e.radius||Jn,e.values?(e=ei(e.values),(s=!Zi(e[0]))&&(r*=r)):e=Id(e.increment)),Br(t,i?St(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Jn,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Zi(o)?c:c+Qt(o)}:Id(e))},nx=function(e,t,i,r){return Br(Jt(e)?!t:i===!0?!!(i=0):!r,function(){return Jt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},mE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},gE=function(e,t){return function(i){return e(parseFloat(i))+(t||Qt(i))}},_E=function(e,t,i){return rx(e,t,0,1,i)},ix=function(e,t,i){return Br(i,function(r){return e[~~t(r)]})},vE=function n(e,t,i){var r=t-e;return Jt(e)?ix(e,n(0,e.length),t):Br(i,function(s){return(r+(s-e)%r)%r+e})},xE=function n(e,t,i){var r=t-e,s=r*2;return Jt(e)?ix(e,n(0,e.length-1),t):Br(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Ba=function(e){return e.replace(QM,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(JM);return nx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},rx=function(e,t,i,r,s){var o=t-e,a=r-i;return Br(s,function(l){return i+((l-e)/o*a||0)})},yE=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ht(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Jt(e)&&!Jt(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(x){x*=f;var m=Math.min(h,~~x);return c[m](x-m)},i=t}else r||(e=Ao(Jt(e)?[]:{},e));if(!c){for(l in t)tp.call(a,e,l,"get",t[l]);s=function(x){return sp(x,a)||(o?e.p:e)}}}return Br(i,s)},zm=function(e,t,i){var r=e.labels,s=Jn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},In=function(e,t,i){var r=e.vars,s=r[t],o=ut,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ar.length&&Uu(),a&&(ut=a),c=l?s.apply(u,l):s.call(u),ut=o,c},sa=function(e){return Nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Wt),e.progress()<1&&In(e,"onInterrupt"),e},ro,sx=[],ox=function(e){if(e)if(e=!e.name&&e.default||e,qh()||e.headless){var t=e.name,i=St(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:za,render:sp,add:tp,kill:OE,modifier:IE,rawVars:0},o={targetTest:0,get:0,getSetter:rp,aliases:{},register:0};if(bo(),e!==r){if(Dn[t])return;Hn(r,Hn(Iu(e,s),o)),Ao(r.prototype,Ao(s,Iu(e,o))),Dn[r.prop=t]=r,e.targetTest&&(ou.push(r),Zh[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gv(t,r),e.register&&e.register(Cn,r,En)}else sx.push(e)},Je=255,oa={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},Yc=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Je+.5|0},ax=function(e,t,i){var r=e?Zi(e)?[e>>16,e>>8&Je,e&Je]:0:oa.black,s,o,a,l,u,c,f,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),oa[e])r=oa[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Je,r&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(Um),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Yc(l+1/3,s,o),r[1]=Yc(l,s,o),r[2]=Yc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(kv),i&&r.length<4&&(r[3]=1),r}else r=e.match(Um)||oa.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Je,o=r[1]/Je,a=r[2]/Je,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},lx=function(e){var t=[],i=[],r=-1;return e.split(Cr).forEach(function(s){var o=s.match(io)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Bm=function(e,t,i){var r="",s=(e+r).match(Cr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=ax(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=lx(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Cr,"1").split(io),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Cr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Cr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in oa)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),SE=/hsl[a]?\(/,ux=function(e){var t=e.join(" "),i;if(Cr.lastIndex=0,Cr.test(t))return i=SE.test(t),e[1]=Bm(e[1],i),e[0]=Bm(e[0],i,lx(e[1])),!0},Ha,Nn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,x=function m(g){var d=n()-r,_=g===!0,v,y,T,E;if((d>e||d<0)&&(i+=d-t),r+=d,T=r-i,v=T-o,(v>0||_)&&(E=++f.frame,h=T-f.time*1e3,f.time=T=T/1e3,o+=v+(v>=s?4:s-v),y=1),_||(l=u(m)),y)for(p=0;p<a.length;p++)a[p](T,h,E,g)};return f={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(g){return h/(1e3/(g||60))},wake:function(){Bv&&(!bd&&qh()&&(yi=bd=window,$h=yi.document||{},Bn.gsap=Cn,(yi.gsapVersions||(yi.gsapVersions=[])).push(Cn.version),Hv(Nu||yi.GreenSockGlobals||!yi.gsap&&yi||{}),sx.forEach(ox)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(g){return setTimeout(g,o-f.time*1e3+1|0)},Ha=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ha=0,u=za},lagSmoothing:function(g,d){e=g||1/0,t=Math.min(d||33,e)},fps:function(g){s=1e3/(g||240),o=f.time*1e3+s},add:function(g,d,_){var v=d?function(y,T,E,M){g(y,T,E,M),f.remove(v)}:g;return f.remove(g),a[_?"unshift":"push"](v),bo(),v},remove:function(g,d){~(d=a.indexOf(g))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),bo=function(){return!Ha&&Nn.wake()},We={},ME=/^[\d.\-M][\d.\-,\s]/,EE=/["']/g,TE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(EE,"").trim():+u,r=l.substr(a+1).trim();return t},wE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},AE=function(e){var t=(e+"").split("("),i=We[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[TE(t[1])]:wE(e).split(",").map(Xv)):We._CE&&ME.test(e)?We._CE("",e):i},cx=function(e){return function(t){return 1-e(1-t)}},fx=function n(e,t){for(var i=e._first,r;i;)i instanceof cn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},fs=function(e,t){return e&&(St(e)?e:We[e]||AE(e))||t},As=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return Mn(e,function(a){We[a]=Bn[a]=s,We[o=a.toLowerCase()]=i;for(var l in s)We[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[a+"."+l]=s[l]}),s},dx=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qc=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Rd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*ZM((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:dx(a);return s=Rd/s,l.config=function(u,c){return n(e,u,c)},l},$c=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:dx(i);return r.config=function(s){return n(e,s)},r};Mn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;As(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;As("Elastic",qc("in"),qc("out"),qc());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};As("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);As("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});As("Circ",function(n){return-(Ov(1-n*n)-1)});As("Sine",function(n){return n===1?1:-KM(n*qM)+1});As("Back",$c("in"),$c("out"),$c());We.SteppedEase=We.steps=Bn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-et;return function(a){return((r*Ja(0,o,a)|0)+s)*i}}};wo.ease=We["quad.out"];Mn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Qh+=n+","+n+"Params,"});var hx=function(e,t){this.id=$M++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Wv,this.set=t?t.getSetter:rp},Ga=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ro(this,+t.duration,1,1),this.data=t.data,ut&&(this._ctx=ut,ut.data.push(this)),Ha||Nn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ro(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(bo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cc(this,i),!s._dp||s.parent||$v(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===et||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),jv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Fm(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Fm(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Co(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Ou(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-et?0:this._rts,this.totalTime(Ja(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),uc(this),aE(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(bo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=dt(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Ei(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Sn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ou(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=iE);var r=Wt;return Wt=i,ep(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Wt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,km(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,km(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Xn(this,i),Sn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,Sn(r)),this._dur||(this._zTime=-et),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=St(i)?i:Yv,l=function(){var c=r.then;r.then=null,s&&s(),St(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){sa(this)},n}();Hn(Ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var cn=function(n){Iv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Sn(i.sortChildren),pt&&Ei(i.parent||pt,Bi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Kv(Bi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return va(0,arguments,this),this},t.from=function(r,s,o){return va(1,arguments,this),this},t.fromTo=function(r,s,o,a){return va(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,_a(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ct(r,s,Xn(this,o),1),this},t.call=function(r,s,o){return Ei(this,Ct.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Ct(r,o,Xn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,_a(o).immediateRender=Sn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,_a(a).immediateRender=Sn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:dt(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,m,g,d,_,v,y,T,E,M;if(this!==pt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,d=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,g=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(g*100+r,s,o);if(h=dt(c%g),c===l?(m=this._repeat,h=u):(T=dt(c/g),m=~~T,m&&m===T&&(h=u,m--),h>u&&(h=u)),T=Co(this._tTime,g),!a&&this._tTime&&T!==m&&this._tTime-T*g-this._dur<=0&&(T=m),E&&m&1&&(h=u-h,M=1),m!==T&&!this._lock){var b=E&&T&1,S=b===(E&&m&1);if(m<T&&(b=!b),a=b?0:c%u?u:c,this._lock=1,this.render(a||(M?0:dt(m*g)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&In(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,T=m),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=b?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;fx(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=fE(this,dt(a),dt(h)),_&&(c-=h-(h=_._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!T&&(In(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){_=0,x&&(c+=this._zTime=-et);break}}p=x}else{p=this._last;for(var A=r<0?r:h;p;){if(x=p._prev,(p._act||A<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(A-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(A-p._start)*p._ts,s,o||Wt&&ep(p)),h!==this._time||!this._ts&&!d){_=0,x&&(c+=this._zTime=A?-et:et);break}}p=x}}if(_&&!s&&(this.pause(),_.render(h>=a?0:-et)._zTime=h>=a?1:-1,this._ts))return this._start=y,uc(this),this.render(r,s,o);this._onUpdate&&!s&&In(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Nr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(In(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Zi(s)||(s=Xn(this,s,r)),!(r instanceof Ga)){if(Jt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ht(r))return this.addLabel(r,s);if(St(r))r=Ct.delayedCall(0,r);else return this}return this!==r?Ei(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Jn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Ct?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ht(r)?this.removeLabel(r):St(r)?this.killTweensOf(r):(r.parent===this&&lc(this,r),r===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=dt(Nn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Xn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Ct.delayedCall(0,s||za,o);return a.data="isPause",this._hasPause=1,Ei(this,a,Xn(this,r))},t.removePause=function(r){var s=this._first;for(r=Xn(this,r);s;)s._start===r&&s.data==="isPause"&&Nr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)hr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=ei(r),l=this._first,u=Zi(s),c;l;)l instanceof Ct?rE(l._targets,a)&&(u?(!hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Xn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,x=Ct.to(o,Hn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||et,onStart:function(){if(o.pause(),!p){var g=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==g&&Ro(x,g,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,f||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Hn({startAt:{time:Xn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),zm(this,Xn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),zm(this,Xn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=dt(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return cs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),cs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Jn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ei(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=dt(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ro(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(pt._ts&&(jv(pt,Ou(r,pt)),Vv=Nn.frame),Nn.frame>=Im){Im+=kn.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&kn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},e}(Ga);Hn(cn.prototype,{_lock:0,_hasPause:0,_forcing:0});var CE=function(e,t,i,r,s,o,a){var l=new En(this._pt,e,t,0,1,xx,null,s),u=0,c=0,f,h,p,x,m,g,d,_;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=Ba(r)),o&&(_=[i,r],o(_,e,t),i=_[0],r=_[1]),h=i.match(jc)||[];f=jc.exec(r);)x=f[0],m=r.substring(u,f.index),p?p=(p+1)%5:m.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(g=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:m||c===1?m:",",s:g,c:x.charAt(1)==="="?po(g,x)-g:parseFloat(x)-g,m:p&&p<4?Math.round:0},u=jc.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(zv.test(r)||d)&&(l.e=0),this._pt=l,l},tp=function(e,t,i,r,s,o,a,l,u,c){St(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:St(f)?u?e[t.indexOf("set")||!St(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=St(f)?u?DE:_x:ip,x;if(Ht(r)&&(~r.indexOf("random(")&&(r=Ba(r)),r.charAt(1)==="="&&(x=po(h,r)+(Qt(h)||0),(x||x===0)&&(r=x))),!c||h!==r||Od)return!isNaN(h*r)&&r!==""?(x=new En(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?UE:vx,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!f&&!(t in e)&&Kh(t,r),CE.call(this,e,t,h,r,p,l||kn.stringFilter,u))},RE=function(e,t,i,r,s){if(St(e)&&(e=xa(e,s,t,i,r)),!Li(e)||e.style&&e.nodeType||Jt(e)||Fv(e))return Ht(e)?xa(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=xa(e[a],s,t,i,r);return o},px=function(e,t,i,r,s,o){var a,l,u,c;if(Dn[e]&&(a=new Dn[e]).init(s,a.rawVars?t[e]:RE(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new En(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ro))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},hr,Od,np=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,x=e._dur,m=e._startAt,g=e._targets,d=e.parent,_=d&&d.data==="nested"?d.vars.targets:g,v=e._overwrite==="auto"&&!Xh,y=e.timeline,T,E,M,b,S,A,O,j,K,L,I,z,q;if(y&&(!h||!s)&&(s="none"),e._ease=fs(s,wo.ease),e._yEase=f?cx(fs(f===!0?s:f,wo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(j=g[0]?us(g[0]).harness:0,z=j&&r[j.prop],T=Iu(r,Zh),m&&(m._zTime<0&&m.progress(1),t<0&&c&&a&&!p?m.render(-1,!0):m.revert(c&&x?su:nE),m._lazy=0),o){if(Nr(e._startAt=Ct.set(g,Hn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!m&&Sn(l),startAt:null,delay:0,onUpdate:u&&function(){return In(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt||!a&&!p)&&e._startAt.revert(su),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!m){if(t&&(a=!1),M=Hn({overwrite:!1,data:"isFromStart",lazy:a&&!m&&Sn(l),immediateRender:a,stagger:0,parent:d},T),z&&(M[j.prop]=z),Nr(e._startAt=Ct.set(g,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Wt?e._startAt.revert(su):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,et,et);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&Sn(l)||l&&!x,E=0;E<g.length;E++){if(S=g[E],O=S._gsap||Jh(g)[E]._gsap,e._ptLookup[E]=L={},Pd[O.id]&&Ar.length&&Uu(),I=_===g?E:_.indexOf(S),j&&(K=new j).init(S,z||T,e,I,_)!==!1&&(e._pt=b=new En(e._pt,S,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(D){L[D]=b}),K.priority&&(A=1)),!j||z)for(M in T)Dn[M]&&(K=px(M,T,e,I,S,_))?K.priority&&(A=1):L[M]=b=tp.call(e,S,M,"get",T[M],I,_,0,r.stringFilter);e._op&&e._op[E]&&e.kill(S,e._op[E]),v&&e._pt&&(hr=e,pt.killTweensOf(S,L,e.globalTime(t)),q=!e.parent,hr=0),e._pt&&l&&(Pd[O.id]=1)}A&&yx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!q,h&&t<=0&&y.render(Jn,!0,!0)},bE=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Od=1,e.vars[t]="+=0",np(e,a),Od=0,l?ka(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Et(i)+Qt(f.e)),f.b&&(f.b=c.s+Qt(f.b))},PE=function(e,t){var i=e[0]?us(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ao({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},LE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Jt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},xa=function(e,t,i,r,s){return St(e)?e.call(t,i,r,s):Ht(e)&&~e.indexOf("random(")?Ba(e):e},mx=Qh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gx={};Mn(mx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return gx[n]=1});var Ct=function(n){Iv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:_a(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,m=l.defaults,g=l.scrollTrigger,d=l.yoyoEase,_=r.parent||pt,v=(Jt(i)||Fv(i)?Zi(i[0]):"length"in r)?[i]:ei(i),y,T,E,M,b,S,A,O;if(a._targets=v.length?Jh(v):ka("GSAP target "+i+" not found. https://gsap.com",!kn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||Tl(u)||Tl(c)){if(r=a.vars,y=a.timeline=new cn({data:"nested",defaults:m||{},targets:_&&_.data==="nested"?_.vars.targets:v}),y.kill(),y.parent=y._dp=Bi(a),y._start=0,h||Tl(u)||Tl(c)){if(M=v.length,A=h&&ex(h),Li(h))for(b in h)~mx.indexOf(b)&&(O||(O={}),O[b]=h[b]);for(T=0;T<M;T++)E=Iu(r,gx),E.stagger=0,d&&(E.yoyoEase=d),O&&Ao(E,O),S=v[T],E.duration=+xa(u,Bi(a),T,S,v),E.delay=(+xa(c,Bi(a),T,S,v)||0)-a._delay,!h&&M===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),y.to(S,E,A?A(T,S,v):0),y._ease=We.none;y.duration()?u=c=0:a.timeline=0}else if(x){_a(Hn(y.vars.defaults,{ease:"none"})),y._ease=fs(x.ease||r.ease||"none");var j=0,K,L,I;if(Jt(x))x.forEach(function(z){return y.to(v,z,">")}),y.duration();else{E={};for(b in x)b==="ease"||b==="easeEach"||LE(b,x[b],E,x.easeEach);for(b in E)for(K=E[b].sort(function(z,q){return z.t-q.t}),j=0,T=0;T<K.length;T++)L=K[T],I={ease:L.e,duration:(L.t-(T?K[T-1].t:0))/100*u},I[b]=L.v,y.to(v,I,j),j+=I.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Xh&&(hr=Bi(a),pt.killTweensOf(v),hr=0),Ei(_,Bi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!x&&a._start===dt(_._time)&&Sn(f)&&lE(Bi(a))&&_.data!=="nested")&&(a._tTime=-et,a.render(Math.max(0,-c)||0)),g&&Kv(Bi(a),g),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-et&&!c?l:r<et?0:r,h,p,x,m,g,d,_,v,y;if(!u)cE(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=f,v=this.timeline,this._repeat){if(m=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(m*100+r,s,o);if(h=dt(f%m),f===l?(x=this._repeat,h=u):(g=dt(f/m),x=~~g,x&&x===g?(h=u,x--):h>u&&(h=u)),d=this._yoyo&&x&1,d&&(y=this._yEase,h=u-h),g=Co(this._tTime,m),h===a&&!o&&this._initted&&x===g)return this._tTime=f,this;x!==g&&(v&&this._yEase&&fx(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&h!==m&&this._initted&&(this._lock=o=1,this.render(dt(m*x),!0).invalidate()._lock=0))}if(!this._initted){if(Zv(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==g))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(h/u),this._from&&(this.ratio=_=1-_),!a&&f&&!s&&!g&&(In(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Ld(this,r,s,o),In(this,"onUpdate")),this._repeat&&x!==g&&this.vars.onRepeat&&!s&&this.parent&&In(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&Ld(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Nr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(In(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ha||Nn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||np(this,u),c=this._ease(u/this._dur),bE(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(cc(this,0),this.parent||qv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?sa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,hr&&hr.vars.overwrite!==!0)._first||sa(this),this.parent&&o!==this.timeline.totalDuration()&&Ro(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?ei(r):a,u=this._ptLookup,c=this._pt,f,h,p,x,m,g,d;if((!s||s==="all")&&oE(a,l))return s==="all"&&(this._pt=0),sa(this);for(f=this._op=this._op||[],s!=="all"&&(Ht(s)&&(m={},Mn(s,function(_){return m[_]=1}),s=m),s=PE(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,x=h,p={}):(p=f[d]=f[d]||{},x=s);for(m in x)g=h&&h[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&lc(this,g,"_pt"),delete h[m]),p!=="all"&&(p[m]=1)}return this._initted&&!this._pt&&c&&sa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return va(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return va(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return pt.killTweensOf(r,s,o)},e}(Ga);Hn(Ct.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Mn("staggerTo,staggerFrom,staggerFromTo",function(n){Ct[n]=function(){var e=new cn,t=Nd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var ip=function(e,t,i){return e[t]=i},_x=function(e,t,i){return e[t](i)},DE=function(e,t,i,r){return e[t](r.fp,i)},NE=function(e,t,i){return e.setAttribute(t,i)},rp=function(e,t){return St(e[t])?_x:Yh(e[t])&&e.setAttribute?NE:ip},vx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},UE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xx=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},sp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},IE=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},OE=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?lc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},FE=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},yx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},En=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||vx,this.d=l||this,this.set=u||ip,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=FE,this.m=i,this.mt=s,this.tween=r},n}();Mn(Qh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Zh[n]=1});Bn.TweenMax=Bn.TweenLite=Ct;Bn.TimelineLite=Bn.TimelineMax=cn;pt=new cn({sortChildren:!1,defaults:wo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});kn.stringFilter=ux;var ds=[],au={},kE=[],Hm=0,zE=0,Kc=function(e){return(au[e]||kE).map(function(t){return t()})},Fd=function(){var e=Date.now(),t=[];e-Hm>2&&(Kc("matchMediaInit"),ds.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=yi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Kc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Hm=e,Kc("matchMedia"))},Sx=function(){function n(t,i){this.selector=i&&Ud(i),this.data=[],this._r=[],this.isReverted=!1,this.id=zE++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){St(i)&&(s=r,r=i,i=St);var o=this,a=function(){var u=ut,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Ud(s)),ut=o,f=r.apply(o,arguments),St(f)&&o._r.push(f),ut=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===St?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ut;ut=null,i(this),ut=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Ct&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof cn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof Ct)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ds.length;o--;)ds[o].id===this.id&&ds.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),BE=function(){function n(t){this.contexts=[],this.scope=t,ut&&ut.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Li(i)||(i={matches:i});var o=new Sx(0,s||this.scope),a=o.conditions={},l,u,c;ut&&!o.selector&&(o.selector=ut.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=yi.matchMedia(i[u]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Fd):l.addEventListener("change",Fd)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Fu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ox(r)})},timeline:function(e){return new cn(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ht(e)&&(e=ei(e)[0]);var s=us(e||{}).get,o=i?Yv:Xv;return i==="native"&&(i=""),e&&(t?o((Dn[t]&&Dn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Dn[a]&&Dn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=ei(e),e.length>1){var r=e.map(function(c){return Cn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Dn[t],a=us(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;ro._pt=0,f.init(e,i?c+i:c,ro,0,[e]),f.render(1,f),ro._pt&&sp(1,ro)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Cn.to(e,Hn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,wo.ease)),Om(wo,e||{})},config:function(e){return Om(kn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Dn[a]&&!Bn[a]&&ka(t+" effect requires "+a+" plugin.")}),Xc[t]=function(a,l,u){return i(ei(a),Hn(l||{},s),u)},o&&(cn.prototype[t]=function(a,l,u){return this.add(Xc[t](a,Li(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){We[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):We},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new cn(e),r,s;for(i.smoothChildTiming=Sn(e.smoothChildTiming),pt.remove(i),i._dp=0,i._time=i._tTime=pt._time,r=pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Ct&&r.vars.onComplete===r._targets[0]))&&Ei(i,r,r._start-r._delay),r=s;return Ei(pt,i,0),i},context:function(e,t){return e?new Sx(e,t):ut},matchMedia:function(e){return new BE(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Fd()},addEventListener:function(e,t){var i=au[e]||(au[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=au[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:vE,wrapYoyo:xE,distribute:ex,random:nx,snap:tx,normalize:_E,getUnit:Qt,clamp:hE,splitColor:ax,toArray:ei,selector:Ud,mapRange:rx,pipe:mE,unitize:gE,interpolate:yE,shuffle:Jv},install:Hv,effects:Xc,ticker:Nn,updateRoot:cn.updateRoot,plugins:Dn,globalTimeline:pt,core:{PropTween:En,globals:Gv,Tween:Ct,Timeline:cn,Animation:Ga,getCache:us,_removeLinkedListItem:lc,reverting:function(){return Wt},context:function(e){return e&&ut&&(ut.data.push(e),e._ctx=ut),ut},suppressOverwrites:function(e){return Xh=e}}};Mn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Fu[n]=Ct[n]});Nn.add(cn.updateRoot);ro=Fu.to({},{duration:0});var HE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},GE=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=HE(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Zc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ht(s)&&(l={},Mn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}GE(a,s)}}}},Cn=Fu.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Wt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Zc("roundProps",Id),Zc("modifiers"),Zc("snap",tx))||Fu;Ct.version=cn.version=Cn.version="3.14.2";Bv=1;qh()&&bo();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Gm,pr,mo,op,os,Vm,ap,VE=function(){return typeof window<"u"},Qi={},Qr=180/Math.PI,go=Math.PI/180,Rs=Math.atan2,Wm=1e8,lp=/([A-Z])/g,WE=/(left|right|width|margin|padding|x)/i,jE=/[\s,\(]\S/,wi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},kd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},XE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},YE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},$E=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Mx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ex=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},KE=function(e,t,i){return e.style[t]=i},ZE=function(e,t,i){return e.style.setProperty(t,i)},QE=function(e,t,i){return e._gsap[t]=i},JE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},e1=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},t1=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},mt="transform",Tn=mt+"Origin",n1=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=wi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Gi(r,a)}):this.tfm[e]=o.x?o[e]:Gi(r,e),e===Tn&&(this.tfm.zOrigin=o.zOrigin);else return wi.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(mt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Tn,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},Tx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},i1=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(lp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=ap(),(!s||!s.isStart)&&!i[mt]&&(Tx(i),r.zOrigin&&i[Tn]&&(i[Tn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},wx=function(e,t){var i={target:e,props:[],revert:i1,save:n1};return e._gsap||Cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Ax,zd=function(e,t){var i=pr.createElementNS?pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):pr.createElement(e);return i&&i.style?i:pr.createElement(e)},On=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(lp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Po(t)||t,1)||""},jm="O,Moz,ms,Ms,Webkit".split(","),Po=function(e,t,i){var r=t||os,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(jm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?jm[o]:"")+e},Bd=function(){VE()&&window.document&&(Gm=window,pr=Gm.document,mo=pr.documentElement,os=zd("div")||{style:{}},zd("div"),mt=Po(mt),Tn=mt+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ax=!!Po("perspective"),ap=Cn.core.reverting,op=1)},Xm=function(e){var t=e.ownerSVGElement,i=zd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),mo.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),mo.removeChild(i),s},Ym=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Cx=function(e){var t,i;try{t=e.getBBox()}catch{t=Xm(e),i=1}return t&&(t.width||t.height)||i||(t=Xm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ym(e,["x","cx","x1"])||0,y:+Ym(e,["y","cy","y1"])||0,width:0,height:0}:t},Rx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Cx(e))},Ur=function(e,t){if(t){var i=e.style,r;t in Qi&&t!==Tn&&(t=mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(lp,"-$1").toLowerCase())):i.removeAttribute(t)}},mr=function(e,t,i,r,s,o){var a=new En(e._pt,t,i,0,1,o?Ex:Mx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},qm={deg:1,rad:1,turn:1},r1={grid:1,flex:1},Ir=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=os.style,l=WE.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",x,m,g,d;if(r===o||!s||qm[r]||qm[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&Rx(e),(p||o==="%")&&(Qi[t]||~t.indexOf("adius")))return x=d?e.getBBox()[l?"width":"height"]:e[c],Et(p?s/x*f:s/100*x);if(a[l?"width":"height"]=f+(h?o:r),m=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===pr||!m.appendChild)&&(m=pr.body),g=m._gsap,g&&p&&g.width&&l&&g.time===Nn.time&&!g.uncache)return Et(s/g.width*f);if(p&&(t==="height"||t==="width")){var _=e.style[t];e.style[t]=f+r,x=e[c],_?e.style[t]=_:Ur(e,t)}else(p||o==="%")&&!r1[On(m,"display")]&&(a.position=On(e,"position")),m===e&&(a.position="static"),m.appendChild(os),x=os[c],m.removeChild(os),a.position="absolute";return l&&p&&(g=us(m),g.time=Nn.time,g.width=m[c]),Et(h?x*s/f:x&&s?f/x*s:0)},Gi=function(e,t,i,r){var s;return op||Bd(),t in wi&&t!=="transform"&&(t=wi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Qi[t]&&t!=="transform"?(s=Wa(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:zu(On(e,Tn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=ku[t]&&ku[t](e,t,i)||On(e,t)||Wv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ir(e,t,s,i)+i:s},s1=function(e,t,i,r){if(!i||i==="none"){var s=Po(t,e,1),o=s&&On(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=On(e,"borderTopColor"))}var a=new En(this._pt,e.style,t,0,1,xx),l=0,u=0,c,f,h,p,x,m,g,d,_,v,y,T;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=On(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(m=e.style[t],e.style[t]=r,r=On(e,t)||r,m?e.style[t]=m:Ur(e,t)),c=[i,r],ux(c),i=c[0],r=c[1],h=i.match(io)||[],T=r.match(io)||[],T.length){for(;f=io.exec(r);)g=f[0],_=r.substring(l,f.index),x?x=(x+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(x=1),g!==(m=h[u++]||"")&&(p=parseFloat(m)||0,y=m.substr((p+"").length),g.charAt(1)==="="&&(g=po(p,g)+y),d=parseFloat(g),v=g.substr((d+"").length),l=io.lastIndex-v.length,v||(v=v||kn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Ir(e,t,m,v)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:d-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ex:Mx;return zv.test(r)&&(a.e=0),this._pt=a,a},$m={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},o1=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=$m[i]||i,t[1]=$m[r]||r,t.join(" ")},a1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Qi[a]&&(l=1,a=a==="transformOrigin"?Tn:mt),Ur(i,a);l&&(Ur(i,mt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Wa(i,1),o.uncache=1,Tx(r)))}},ku={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new En(e._pt,t,i,0,0,a1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Va=[1,0,0,1,0,0],bx={},Px=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Km=function(e){var t=On(e,mt);return Px(t)?Va:t.substr(7).match(kv).map(Et)},up=function(e,t){var i=e._gsap||us(e),r=e.style,s=Km(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Va:s):(s===Va&&!e.offsetParent&&e!==mo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,mo.appendChild(e)),s=Km(e),l?r.display=l:Ur(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):mo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hd=function(e,t,i,r,s,o){var a=e._gsap,l=s||up(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],m=l[2],g=l[3],d=l[4],_=l[5],v=t.split(" "),y=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,M,b,S;i?l!==Va&&(M=p*g-x*m)&&(b=y*(g/M)+T*(-m/M)+(m*_-g*d)/M,S=y*(-x/M)+T*(p/M)-(p*_-x*d)/M,y=b,T=S):(E=Cx(e),y=E.x+(~v[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),r||r!==!1&&a.smooth?(d=y-u,_=T-c,a.xOffset=f+(d*p+_*m)-d,a.yOffset=h+(d*x+_*g)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Tn]="0px 0px",o&&(mr(o,a,"xOrigin",u,y),mr(o,a,"yOrigin",c,T),mr(o,a,"xOffset",f,a.xOffset),mr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},Wa=function(e,t){var i=e._gsap||new hx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=On(e,Tn)||"0",c,f,h,p,x,m,g,d,_,v,y,T,E,M,b,S,A,O,j,K,L,I,z,q,D,F,k,Z,Q,Y,$,re;return c=f=h=m=g=d=_=v=y=0,p=x=1,i.svg=!!(e.getCTM&&Rx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),r.scale=r.rotate=r.translate="none"),M=up(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",q=""):q=!t&&e.getAttribute("data-svg-origin"),Hd(e,q||u,!!q||i.originIsAbsolute,i.smooth!==!1,M)),T=i.xOrigin||0,E=i.yOrigin||0,M!==Va&&(O=M[0],j=M[1],K=M[2],L=M[3],c=I=M[4],f=z=M[5],M.length===6?(p=Math.sqrt(O*O+j*j),x=Math.sqrt(L*L+K*K),m=O||j?Rs(j,O)*Qr:0,_=K||L?Rs(K,L)*Qr+m:0,_&&(x*=Math.abs(Math.cos(_*go))),i.svg&&(c-=T-(T*O+E*K),f-=E-(T*j+E*L))):(re=M[6],Y=M[7],k=M[8],Z=M[9],Q=M[10],$=M[11],c=M[12],f=M[13],h=M[14],b=Rs(re,Q),g=b*Qr,b&&(S=Math.cos(-b),A=Math.sin(-b),q=I*S+k*A,D=z*S+Z*A,F=re*S+Q*A,k=I*-A+k*S,Z=z*-A+Z*S,Q=re*-A+Q*S,$=Y*-A+$*S,I=q,z=D,re=F),b=Rs(-K,Q),d=b*Qr,b&&(S=Math.cos(-b),A=Math.sin(-b),q=O*S-k*A,D=j*S-Z*A,F=K*S-Q*A,$=L*A+$*S,O=q,j=D,K=F),b=Rs(j,O),m=b*Qr,b&&(S=Math.cos(b),A=Math.sin(b),q=O*S+j*A,D=I*S+z*A,j=j*S-O*A,z=z*S-I*A,O=q,I=D),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,d=180-d),p=Et(Math.sqrt(O*O+j*j+K*K)),x=Et(Math.sqrt(z*z+re*re)),b=Rs(I,z),_=Math.abs(b)>2e-4?b*Qr:0,y=$?1/($<0?-$:$):0),i.svg&&(q=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Px(On(e,mt)),q&&e.setAttribute("transform",q))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=m<=0?180:-180,m+=m<=0?180:-180):(x*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Et(p),i.scaleY=Et(x),i.rotation=Et(m)+a,i.rotationX=Et(g)+a,i.rotationY=Et(d)+a,i.skewX=_+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Tn]=zu(u)),i.xOffset=i.yOffset=0,i.force3D=kn.force3D,i.renderTransform=i.svg?u1:Ax?Lx:l1,i.uncache=0,i},zu=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qc=function(e,t,i){var r=Qt(t);return Et(parseFloat(t)+parseFloat(Ir(e,"x",i+"px",r)))+r},l1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Lx(e,t)},Wr="0deg",$o="0px",jr=") ",Lx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,m=i.scaleY,g=i.transformPerspective,d=i.force3D,_=i.target,v=i.zOrigin,y="",T=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==Wr||c!==Wr)){var E=parseFloat(c)*go,M=Math.sin(E),b=Math.cos(E),S;E=parseFloat(f)*go,S=Math.cos(E),o=Qc(_,o,M*S*-v),a=Qc(_,a,-Math.sin(E)*-v),l=Qc(_,l,b*S*-v+v)}g!==$o&&(y+="perspective("+g+jr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(T||o!==$o||a!==$o||l!==$o)&&(y+=l!==$o||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+jr),u!==Wr&&(y+="rotate("+u+jr),c!==Wr&&(y+="rotateY("+c+jr),f!==Wr&&(y+="rotateX("+f+jr),(h!==Wr||p!==Wr)&&(y+="skew("+h+", "+p+jr),(x!==1||m!==1)&&(y+="scale("+x+", "+m+jr),_.style[mt]=y||"translate(0, 0)"},u1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,m=i.yOrigin,g=i.xOffset,d=i.yOffset,_=i.forceCSS,v=parseFloat(o),y=parseFloat(a),T,E,M,b,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=go,u*=go,T=Math.cos(l)*f,E=Math.sin(l)*f,M=Math.sin(l-u)*-h,b=Math.cos(l-u)*h,u&&(c*=go,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,b*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),T*=S,E*=S)),T=Et(T),E=Et(E),M=Et(M),b=Et(b)):(T=f,b=h,E=M=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Ir(p,"x",o,"px"),y=Ir(p,"y",a,"px")),(x||m||g||d)&&(v=Et(v+x-(x*T+m*M)+g),y=Et(y+m-(x*E+m*b)+d)),(r||s)&&(S=p.getBBox(),v=Et(v+r/100*S.width),y=Et(y+s/100*S.height)),S="matrix("+T+","+E+","+M+","+b+","+v+","+y+")",p.setAttribute("transform",S),_&&(p.style[mt]=S)},c1=function(e,t,i,r,s){var o=360,a=Ht(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Qr:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Wm)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Wm)%o-~~(u/o)*o)),e._pt=h=new En(e._pt,t,i,r,u,XE),h.e=c,h.u="deg",e._props.push(i),h},Zm=function(e,t){for(var i in t)e[i]=t[i];return e},f1=function(e,t,i){var r=Zm({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[mt]=t,a=Wa(i,1),Ur(i,mt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[mt],o[mt]=t,a=Wa(i,1),o[mt]=u);for(l in Qi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Qt(u),x=Qt(c),f=p!==x?Ir(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new En(e._pt,a,l,f,h-f,kd),e._pt.u=x||0,e._props.push(l));Zm(a,r)};Mn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});ku[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(x){return Gi(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,m){return p[x]=h[m]=h[m]||h[(m-1)/2|0]}),a.init(l,p,f)}});var Dx={name:"css",register:Bd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,x,m,g,d,_,v,y,T,E,M,b,S;op||Bd(),this.styles=this.styles||wx(e),b=this.styles.props,this.tween=i;for(m in t)if(m!=="autoRound"&&(c=t[m],!(Dn[m]&&px(m,t,i,r,e,s)))){if(p=typeof c,x=ku[m],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Ba(c)),x)x(this,e,m,c,i)&&(M=1);else if(m.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(m)+"").trim(),c+="",Cr.lastIndex=0,Cr.test(u)||(g=Qt(u),d=Qt(c),d?g!==d&&(u=Ir(e,m,u,d)+d):g&&(c+=g)),this.add(a,"setProperty",u,c,r,s,0,0,m),o.push(m),b.push(m,0,a[m]);else if(p!=="undefined"){if(l&&m in l?(u=typeof l[m]=="function"?l[m].call(i,r,e,s):l[m],Ht(u)&&~u.indexOf("random(")&&(u=Ba(u)),Qt(u+"")||u==="auto"||(u+=kn.units[m]||Qt(Gi(e,m))||""),(u+"").charAt(1)==="="&&(u=Gi(e,m))):u=Gi(e,m),h=parseFloat(u),_=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),f=parseFloat(c),m in wi&&(m==="autoAlpha"&&(h===1&&Gi(e,"visibility")==="hidden"&&f&&(h=0),b.push("visibility",0,a.visibility),mr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),m!=="scale"&&m!=="transform"&&(m=wi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),v=m in Qi,v){if(this.styles.save(m),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=On(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var A=e.style.perspective;e.style.perspective=c,c=On(e,"perspective"),A?e.style.perspective=A:Ur(e,"perspective")}f=parseFloat(c)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||Wa(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new En(this._pt,a,mt,0,1,T.renderTransform,T,0,-1),y.dep=1),m==="scale")this._pt=new En(this._pt,T,"scaleY",T.scaleY,(_?po(T.scaleY,_+f):f)-T.scaleY||0,kd),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){b.push(Tn,0,a[Tn]),c=o1(c),T.svg?Hd(e,c,0,E,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==T.zOrigin&&mr(this,T,"zOrigin",T.zOrigin,d),mr(this,a,m,zu(u),zu(c)));continue}else if(m==="svgOrigin"){Hd(e,c,1,E,0,this);continue}else if(m in bx){c1(this,T,m,h,_?po(h,_+c):c);continue}else if(m==="smoothOrigin"){mr(this,T,"smooth",T.smooth,c);continue}else if(m==="force3D"){T[m]=c;continue}else if(m==="transform"){f1(this,c,e);continue}}else m in a||(m=Po(m)||m);if(v||(f||f===0)&&(h||h===0)&&!jE.test(c)&&m in a)g=(u+"").substr((h+"").length),f||(f=0),d=Qt(c)||(m in kn.units?kn.units[m]:g),g!==d&&(h=Ir(e,m,u,d)),this._pt=new En(this._pt,v?T:a,m,h,(_?po(h,_+f):f)-h,!v&&(d==="px"||m==="zIndex")&&t.autoRound!==!1?$E:kd),this._pt.u=d||0,v&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=qE):g!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=YE);else if(m in a)s1.call(this,e,m,u,_?_+c:c);else if(m in e)this.add(e,m,u||e[m],_?_+c:c,r,s);else if(m!=="parseTransform"){Kh(m,c);continue}v||(m in a?b.push(m,0,a[m]):typeof e[m]=="function"?b.push(m,2,e[m]()):b.push(m,1,u||e[m])),o.push(m)}}M&&yx(this)},render:function(e,t){if(t.tween._time||!ap())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Gi,aliases:wi,getSetter:function(e,t,i){var r=wi[t];return r&&r.indexOf(",")<0&&(t=r),t in Qi&&t!==Tn&&(e._gsap.x||Gi(e,"x"))?i&&Vm===i?t==="scale"?JE:QE:(Vm=i||{})&&(t==="scale"?e1:t1):e.style&&!Yh(e.style[t])?KE:~t.indexOf("-")?ZE:rp(e,t)},core:{_removeProperty:Ur,_getMatrix:up}};Cn.utils.checkPrefix=Po;Cn.core.getStyleSaver=wx;(function(n,e,t,i){var r=Mn(n+","+e+","+t,function(s){Qi[s]=1});Mn(e,function(s){kn.units[s]="deg",bx[s]=1}),wi[r[13]]=n+","+e,Mn(i,function(s){var o=s.split(":");wi[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Mn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){kn.units[n]="px"});Cn.registerPlugin(Dx);var un=Cn.registerPlugin(Dx)||Cn;un.core.Tween;const d1=()=>N.jsxs("div",{className:"fixed inset-0 -z-10 overflow-hidden bg-[#020202]",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-[#0a0000] via-[#050000] to-[#000000]"}),N.jsx("div",{className:"absolute top-0 left-1/4 w-[80vw] h-[80vw] md:w-[600px] md:h-[600px] bg-arbon-red/10 rounded-full blur-[80px] md:blur-[120px] mix-blend-screen animate-blob opacity-60"}),N.jsx("div",{className:"absolute bottom-0 right-1/4 w-[60vw] h-[60vw] md:w-[500px] md:h-[500px] bg-[#ff0033]/5 rounded-full blur-[60px] md:blur-[100px] mix-blend-screen animate-blob animation-delay-2000 opacity-50"}),N.jsx("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] md:w-[800px] md:h-[800px] bg-red-900/5 rounded-full blur-[100px] md:blur-[150px] mix-blend-screen opacity-30 pointer-events-none"}),N.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none"}),N.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] mix-blend-overlay pointer-events-none"})]}),Jc="1275540868186636348",h1=[{name:"Java",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",color:"#E76F00"},{name:"TypeScript",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",color:"#3178C6"},{name:"React",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",color:"#61DAFB"},{name:"JavaScript",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",color:"#F7DF1E"},{name:"HTML5",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",color:"#E34F26"},{name:"CSS3",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",color:"#1572B6"},{name:"Next.js",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",color:"#ffffff"},{name:"Node.js",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",color:"#339933"},{name:"Go",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",color:"#00ADD8"},{name:"C#",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",color:"#239120"},{name:"Python",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",color:"#3776AB"},{name:"Docker",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",color:"#2496ED"},{name:"Three.js",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",color:"#ff0033"}],Tt={name:"آربـون",role:"توسعه‌دهنده فرانت‌اند",tagline:"معماری وب و زیرساخت ماینکرفت",stack_title:"ابزارها و مهارت‌ها",footer_text_pre:"تمامی حقوق برای",footer_text_name:"آربون",footer_text_post:"محفوظ است و هرگونه کپی برداری پیگرد قانونی به همراه دارد",developer_text:"طراحی و توسعه: آربون",status_listening:"در حال شنیدن اسپاتیفای",status_coding:"در حال کدنویسی",status_discord:"وضعیت دیسکورد",status_online:"آنلاین",status_idle:"ساکت (Idle)",status_dnd:"مزاحم نشوید (DND)",status_offline:"آفلاین",vpn_title:"کاربر گرامی",vpn_subtitle:"با عرض پوزش و احترام",vpn_message:"به دلیل اختلالات زیرساختی و ناپایداری ارتباط بین سرورهای داخل و خارج کشور، عملکرد برخی بخش‌های سایت ممکن است با مشکل مواجه شود.",vpn_recommendation:"پیشنهاد می‌شود جهت تجربه بهتر و دسترسی کامل، از سرویس‌های تغییر IP (مانند VeePN یا کانفیگ‌های v2ray) استفاده نمایید.",vpn_button:"متوجه شدم، ادامه بده"},p1=({data:n,loading:e})=>{var l,u;const t=He.useRef(null);if(He.useEffect(()=>{!e&&t.current&&un.fromTo(t.current,{opacity:0},{opacity:1,duration:.5,ease:"power2.out"})},[e]),e)return N.jsx("div",{className:"w-full h-20 bg-white/5 animate-pulse rounded-xl border border-white/5"});const r=(c=>{switch(c){case"online":return"#22c55e";case"idle":return"#eab308";case"dnd":return"#ef4444";default:return"#52525b"}})(n==null?void 0:n.discord_status);if(n!=null&&n.listening_to_spotify&&n.spotify)return N.jsxs("div",{ref:t,className:"w-full flex items-center gap-4 bg-[#111] border border-white/10 px-4 py-3 rounded-xl hover:border-white/20 transition-colors",children:[N.jsxs("div",{className:"relative w-12 h-12 flex-shrink-0",children:[N.jsx("img",{src:n.spotify.album_art_url,alt:"Album Art",className:"w-full h-full rounded-lg object-cover"}),N.jsx("div",{className:"absolute -bottom-1 -right-1 bg-black rounded-full p-0.5 border border-white/10",children:N.jsx("svg",{className:"w-3 h-3 text-[#1DB954]",fill:"currentColor",viewBox:"0 0 24 24",children:N.jsx("path",{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.5.4-.8.2-2.2-1.3-5-1.6-8.2-.9-.4.1-.8-.2-.9-.5-.1-.4.2-.8.5-.9 3.5-.8 6.6-.5 9.1 1 .3.2.4.5.2.8zm1.1-2.4c-.3.4-.8.5-1.2.3-2.8-1.7-7.1-2.2-10.4-1.2-.5.1-1-.2-1.2-.7-.1-.5.2-1 .7-1.2 3.9-1.2 8.7-.6 12 1.4.5.3.6.8.3 1.2c-.1.1-.2.2-.2.2zm.1-2.5c-3.3-2-8.8-2.2-12-1.2-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 3.7-1.1 9.8-.8 13.7 1.4.6.3.8 1.1.5 1.6-.3.6-1 .8-1.6.4z"})})})]}),N.jsxs("div",{className:"flex flex-col overflow-hidden text-right flex-grow",dir:"rtl",children:[N.jsx("div",{className:"flex items-center gap-2 mb-0.5",children:N.jsx("span",{className:"text-[10px] text-[#1DB954] font-bold uppercase tracking-wider",children:Tt.status_listening})}),N.jsx("span",{className:"text-sm text-white font-bold truncate",children:n.spotify.song}),N.jsx("span",{className:"text-xs text-gray-500 truncate",children:n.spotify.artist})]})]});const s=(l=n==null?void 0:n.activities)==null?void 0:l.find(c=>c.name==="Visual Studio Code"||c.name==="Code");if(s)return N.jsxs("div",{ref:t,className:"w-full flex items-center gap-4 bg-[#111] border border-white/10 px-4 py-3 rounded-xl",children:[N.jsx("div",{className:"w-12 h-12 flex-shrink-0 bg-[#007ACC]/20 rounded-lg flex items-center justify-center text-[#007ACC]",children:N.jsx("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"currentColor",children:N.jsx("path",{d:"M23.15 2.587l-9.543-2.587-6.938 6.48-5.714-2.418-0.955 0.955 5.555 5.308-5.555 5.308 0.955 0.955 5.714-2.418 6.938 6.48 9.543-2.587v-15.476zM9.5 15.65l-4.5 2.138 3.5-3.324-3.5-3.325 4.5 2.138v2.373zM10.875 19.388l-0.375-13.776 3.1 3.2 4.15-1.074v8.524l-4.15-1.074-2.725 4.2zM15.5 12l2.5 2.5h-5l2.5-2.5z"})})}),N.jsxs("div",{className:"flex flex-col text-right flex-grow",dir:"rtl",children:[N.jsx("span",{className:"text-[10px] text-[#007ACC] font-bold uppercase tracking-wider mb-0.5",children:Tt.status_coding}),N.jsx("span",{className:"text-sm text-white font-bold truncate",children:s.details||"Writing Code"}),N.jsx("span",{className:"text-xs text-gray-500 truncate",children:s.state||"Workspace"})]})]});const o=(u=n==null?void 0:n.activities)==null?void 0:u.find(c=>c.type===4),a=o!=null&&o.state?o.state:(n==null?void 0:n.discord_status)==="dnd"?Tt.status_dnd:(n==null?void 0:n.discord_status)==="idle"?Tt.status_idle:(n==null?void 0:n.discord_status)==="online"?Tt.status_online:Tt.status_offline;return N.jsxs("div",{ref:t,className:"w-full flex items-center gap-4 bg-[#111] border border-white/10 px-4 py-3 rounded-xl",children:[N.jsx("div",{className:"w-12 h-12 flex-shrink-0 bg-white/5 rounded-lg flex items-center justify-center",children:N.jsx("div",{className:"w-3 h-3 rounded-full",style:{backgroundColor:r}})}),N.jsxs("div",{className:"flex flex-col text-right flex-grow",dir:"rtl",children:[N.jsx("span",{className:"text-[10px] text-zinc-500 font-bold uppercase tracking-wider mb-0.5",children:Tt.status_discord}),N.jsx("span",{className:"text-sm text-white font-medium truncate opacity-90",children:a})]})]})},m1=()=>N.jsxs("footer",{className:"w-full absolute bottom-0 left-0 p-6 flex flex-col md:flex-row justify-between items-center text-white/50 text-xs font-sans z-20 gap-4 bg-gradient-to-t from-black via-black/80 to-transparent",children:[N.jsx("div",{className:"order-2 md:order-1 opacity-60 hover:opacity-100 transition-opacity duration-300",children:N.jsx("span",{children:Tt.developer_text})}),N.jsxs("div",{className:"flex items-center gap-2 rtl:flex-row-reverse order-1 md:order-2 text-center",dir:"rtl",children:[N.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[N.jsx("circle",{cx:"12",cy:"12",r:"10"}),N.jsx("path",{d:"M15 9.354a4 4 0 1 0 0 5.292"})]}),N.jsxs("span",{children:[Tt.footer_text_pre," ",N.jsx("span",{className:"text-red-500 font-bold mx-1",children:Tt.footer_text_name})," ",Tt.footer_text_post]})]})]}),g1=({items:n})=>N.jsxs("div",{className:"bg-black/30 rounded-[2rem] p-6 md:p-8 border border-white/5 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl w-full",children:[N.jsx("h3",{className:"text-xs md:text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 md:mb-8 text-center md:text-right px-2 opacity-70",dir:"rtl",children:Tt.stack_title}),N.jsx("div",{className:"grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-y-8 gap-x-4 md:gap-8 justify-items-center relative z-20",children:n.map(e=>N.jsx(_1,{tech:e},e.name))})]}),_1=({tech:n})=>{const e=He.useRef(null),t=He.useRef(null),i=He.useRef(null),r=He.useRef(null),s=()=>{un.killTweensOf([e.current,t.current,i.current,r.current]);const l=un.timeline();un.to(r.current,{opacity:.15,scale:1.3,duration:.4,ease:"power2.out"}),l.to(e.current,{scale:1.15,y:-5,filter:`drop-shadow(0 0 10px ${n.color}) ${n.name==="Three.js"?"invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%)":""}`,duration:.4,ease:"back.out(1.7)"}),l.to(t.current,{autoAlpha:1,y:-45,scale:1,duration:.4,ease:"power3.out"},"<"),l.fromTo(i.current,{y:5,opacity:0},{y:0,opacity:1,duration:.2},"<0.1")},o=()=>{un.killTweensOf([e.current,t.current,i.current,r.current]);const l=un.timeline({overwrite:"auto"});l.to(e.current,{scale:1,y:0,filter:n.name==="Three.js"?"invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%)":"drop-shadow(0 0 0px rgba(0,0,0,0))",duration:.3,ease:"power2.out"}),l.to(t.current,{autoAlpha:0,y:0,scale:.8,duration:.2,ease:"power2.in"},"<"),un.to(r.current,{opacity:0,scale:.5,duration:.3})},a=n.name==="Three.js"?{filter:"invert(15%) sepia(95%) saturate(6932%) hue-rotate(358deg) brightness(95%) contrast(112%)"}:{};return N.jsxs("div",{className:"relative flex flex-col items-center justify-center group w-10 h-10 md:w-12 md:h-12",onMouseEnter:s,onMouseLeave:o,children:[N.jsx("div",{ref:r,className:"absolute inset-0 rounded-full blur-2xl opacity-0 pointer-events-none transition-colors duration-300",style:{backgroundColor:n.color}}),N.jsx("div",{ref:t,className:"absolute top-0 opacity-0 invisible z-30 pointer-events-none",children:N.jsxs("div",{className:"relative bg-[#111] border border-white/10 px-3 py-1.5 rounded-lg shadow-2xl",children:[N.jsx("span",{ref:i,className:"text-xs font-bold text-white whitespace-nowrap block",children:n.name}),N.jsx("div",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#111] border-r border-b border-white/10 rotate-45"})]})}),N.jsx("img",{ref:e,src:n.iconUrl,alt:n.name,style:a,className:"w-full h-full object-contain transition-transform will-change-transform cursor-pointer relative z-10"})]})},v1=()=>{const[n,e]=He.useState(!0);return n?N.jsx("div",{className:"fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 pointer-events-auto",children:N.jsxs("div",{className:"bg-[#050505] border border-white/20 rounded-2xl p-8 max-w-md w-full flex flex-col items-center text-center shadow-none",children:[N.jsx("img",{src:"https://cdn3d.iconscout.com/3d/premium/thumb/warning-sign-3d-icon-png-download-8325506.png",alt:"Warning",className:"w-40 h-40 mb-6 object-contain"}),N.jsx("h2",{className:"text-2xl font-bold text-white mb-2",dir:"rtl",children:Tt.vpn_title}),N.jsx("h3",{className:"text-base font-bold text-yellow-500 mb-6",dir:"rtl",children:Tt.vpn_subtitle}),N.jsx("p",{className:"text-zinc-400 text-sm leading-7 mb-8",dir:"rtl",children:Tt.vpn_message}),N.jsx("div",{className:"bg-zinc-900 rounded-lg p-4 mb-8 w-full border border-zinc-800",children:N.jsx("p",{className:"text-zinc-500 text-xs leading-relaxed",dir:"rtl",children:Tt.vpn_recommendation})}),N.jsx("button",{onClick:()=>e(!1),className:"w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-gray-200 transition-colors text-sm cursor-pointer",children:Tt.vpn_button})]})}):null};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cp="160",x1=0,Qm=1,y1=2,Nx=1,S1=2,ki=3,Or=0,wn=1,Ti=2,Rr=0,hs=1,Jm=2,eg=3,tg=4,M1=5,ts=100,E1=101,T1=102,ng=103,ig=104,w1=200,A1=201,C1=202,R1=203,Gd=204,Vd=205,b1=206,P1=207,L1=208,D1=209,N1=210,U1=211,I1=212,O1=213,F1=214,k1=0,z1=1,B1=2,Bu=3,H1=4,G1=5,V1=6,W1=7,fp=0,j1=1,X1=2,br=0,Y1=1,q1=2,$1=3,Ux=4,K1=5,Z1=6,Ix=300,Lo=301,Do=302,Wd=303,jd=304,fc=306,Xd=1e3,di=1001,Yd=1002,ln=1003,rg=1004,ef=1005,$n=1006,Q1=1007,ja=1008,Pr=1009,J1=1010,eT=1011,dp=1012,Ox=1013,gr=1014,_r=1015,Xa=1016,Fx=1017,kx=1018,ps=1020,tT=1021,hi=1023,nT=1024,iT=1025,ms=1026,No=1027,rT=1028,zx=1029,sT=1030,Bx=1031,Hx=1033,tf=33776,nf=33777,rf=33778,sf=33779,sg=35840,og=35841,ag=35842,lg=35843,Gx=36196,ug=37492,cg=37496,fg=37808,dg=37809,hg=37810,pg=37811,mg=37812,gg=37813,_g=37814,vg=37815,xg=37816,yg=37817,Sg=37818,Mg=37819,Eg=37820,Tg=37821,of=36492,wg=36494,Ag=36495,oT=36283,Cg=36284,Rg=36285,bg=36286,Vx=3e3,gs=3001,aT=3200,lT=3201,Wx=0,uT=1,Zn="",kt="srgb",Ji="srgb-linear",hp="display-p3",dc="display-p3-linear",Hu="linear",ot="srgb",Gu="rec709",Vu="p3",bs=7680,Pg=519,cT=512,fT=513,dT=514,jx=515,hT=516,pT=517,mT=518,gT=519,Lg=35044,Dg="300 es",qd=1035,ji=2e3,Wu=2001;class ko{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=Math.PI/180,$d=180/Math.PI;function el(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function gn(n,e,t){return Math.max(e,Math.min(t,n))}function _T(n,e){return(n%e+e)%e}function lf(n,e,t){return(1-t)*n+t*e}function Ng(n){return(n&n-1)===0&&n!==0}function Kd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Ko(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class qe{constructor(e=0,t=0){qe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],x=i[8],m=r[0],g=r[3],d=r[6],_=r[1],v=r[4],y=r[7],T=r[2],E=r[5],M=r[8];return s[0]=o*m+a*_+l*T,s[3]=o*g+a*v+l*E,s[6]=o*d+a*y+l*M,s[1]=u*m+c*_+f*T,s[4]=u*g+c*v+f*E,s[7]=u*d+c*y+f*M,s[2]=h*m+p*_+x*T,s[5]=h*g+p*v+x*E,s[8]=h*d+p*y+x*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/x;return e[0]=f*m,e[1]=(r*u-c*i)*m,e[2]=(a*i-r*o)*m,e[3]=h*m,e[4]=(c*t-r*l)*m,e[5]=(r*s-a*t)*m,e[6]=p*m,e[7]=(i*l-u*t)*m,e[8]=(o*t-i*s)*m,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new Be;function Xx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ya(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function vT(){const n=Ya("canvas");return n.style.display="block",n}const Ug={};function ya(n){n in Ug||(Ug[n]=!0,console.warn(n))}const Ig=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Og=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wl={[Ji]:{transfer:Hu,primaries:Gu,toReference:n=>n,fromReference:n=>n},[kt]:{transfer:ot,primaries:Gu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[dc]:{transfer:Hu,primaries:Vu,toReference:n=>n.applyMatrix3(Og),fromReference:n=>n.applyMatrix3(Ig)},[hp]:{transfer:ot,primaries:Vu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Og),fromReference:n=>n.applyMatrix3(Ig).convertLinearToSRGB()}},xT=new Set([Ji,dc]),Qe={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!xT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=wl[e].toReference,r=wl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return wl[n].primaries},getTransfer:function(n){return n===Zn?Hu:wl[n].transfer}};function _o(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class Yx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=Ya("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ya("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_o(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_o(t[i]/255)*255):t[i]=_o(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yT=0;class qx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=el(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ff(r[o].image)):s.push(ff(r[o]))}else s=ff(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ff(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Yx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ST=0;class An extends ko{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,i=di,r=di,s=$n,o=ja,a=hi,l=Pr,u=An.DEFAULT_ANISOTROPY,c=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ST++}),this.uuid=el(),this.name="",this.source=new qx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===gs?kt:Zn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ix)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case di:e.x=e.x<0?0:1;break;case Yd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case di:e.y=e.y<0?0:1;break;case Yd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===kt?gs:Vx}set encoding(e){ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===gs?kt:Zn}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Ix;An.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,i=0,r=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],x=l[9],m=l[2],g=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-m)<.01&&Math.abs(x-g)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+m)<.1&&Math.abs(x+g)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,T=(d+1)/2,E=(c+h)/4,M=(f+m)/4,b=(x+g)/4;return v>y&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=E/i,s=M/i):y>T?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=M/s,r=b/s),this.set(i,r,s,t),this}let _=Math.sqrt((g-x)*(g-x)+(f-m)*(f-m)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(g-x)/_,this.y=(f-m)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class MT extends ko{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===gs?kt:Zn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new An(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ms extends MT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class $x extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ET extends An{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=ln,this.minFilter=ln,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tl{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],m=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=m;return}if(f!==m||l!==h||u!==p||c!==x){let g=1-a;const d=l*h+u*p+c*x+f*m,_=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const T=Math.sqrt(v),E=Math.atan2(T,d*_);g=Math.sin(g*E)/T,a=Math.sin(a*E)/T}const y=a*_;if(l=l*g+h*y,u=u*g+p*y,c=c*g+x*y,f=f*g+m*y,g===1-a){const T=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=T,u*=T,c*=T,f*=T}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*f+l*p-u*h,e[t+1]=l*x+c*h+u*f-a*p,e[t+2]=u*x+c*p+a*h-l*f,e[t+3]=c*x-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f-h*p*x;break;case"YXZ":this._x=h*c*f+u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f+h*p*x;break;case"ZXY":this._x=h*c*f-u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f-h*p*x;break;case"ZYX":this._x=h*c*f-u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f+h*p*x;break;case"YZX":this._x=h*c*f+u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f-h*p*x;break;case"XZY":this._x=h*c*f-u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Fg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Fg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const df=new G,Fg=new tl;class nl{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(s,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zo),Cl.subVectors(this.max,Zo),Ls.subVectors(e.a,Zo),Ds.subVectors(e.b,Zo),Ns.subVectors(e.c,Zo),nr.subVectors(Ds,Ls),ir.subVectors(Ns,Ds),Xr.subVectors(Ls,Ns);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Xr.z,Xr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Xr.z,0,-Xr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Xr.y,Xr.x,0];return!hf(t,Ls,Ds,Ns,Cl)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,Ls,Ds,Ns,Cl))?!1:(Rl.crossVectors(nr,ir),t=[Rl.x,Rl.y,Rl.z],hf(t,Ls,Ds,Ns,Cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ni=[new G,new G,new G,new G,new G,new G,new G,new G],si=new G,Al=new nl,Ls=new G,Ds=new G,Ns=new G,nr=new G,ir=new G,Xr=new G,Zo=new G,Cl=new G,Rl=new G,Yr=new G;function hf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Yr.fromArray(n,s);const a=r.x*Math.abs(Yr.x)+r.y*Math.abs(Yr.y)+r.z*Math.abs(Yr.z),l=e.dot(Yr),u=t.dot(Yr),c=i.dot(Yr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const TT=new nl,Qo=new G,pf=new G;class pp{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):TT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Qo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(pf)),this.expandByPoint(Qo.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ui=new G,mf=new G,bl=new G,rr=new G,gf=new G,Pl=new G,_f=new G;class wT{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ui.copy(this.origin).addScaledVector(this.direction,t),Ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mf.copy(e).add(t).multiplyScalar(.5),bl.copy(t).sub(e).normalize(),rr.copy(this.origin).sub(mf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(bl),a=rr.dot(this.direction),l=-rr.dot(bl),u=rr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,x;if(c>0)if(f=o*l-a,h=o*a-l,x=s*c,f>=0)if(h>=-x)if(h<=x){const m=1/c;f*=m,h*=m,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(mf).addScaledVector(bl,h),p}intersectSphere(e,t){Ui.subVectors(e.center,this.origin);const i=Ui.dot(this.direction),r=Ui.dot(Ui)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ui)!==null}intersectTriangle(e,t,i,r,s){gf.subVectors(t,e),Pl.subVectors(i,e),_f.crossVectors(gf,Pl);let o=this.direction.dot(_f),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;rr.subVectors(this.origin,e);const l=a*this.direction.dot(Pl.crossVectors(rr,Pl));if(l<0)return null;const u=a*this.direction.dot(gf.cross(rr));if(u<0||l+u>o)return null;const c=-a*rr.dot(_f);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,x,m,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,x,m,g)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,x,m,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=m,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,x=a*c,m=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+x*u,t[5]=h-m*u,t[9]=-a*l,t[2]=m-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,x=u*c,m=u*f;t[0]=h+m*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=m+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,x=u*c,m=u*f;t[0]=h-m*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=m-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,x=a*c,m=a*f;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+m,t[1]=l*f,t[5]=m*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,m=a*u;t[0]=l*c,t[4]=m-h*f,t[8]=x*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+x,t[10]=h-m*f}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,m=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+m,t[5]=o*c,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*c,t[10]=m*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AT,e,CT)}lookAt(e,t,i){const r=this.elements;return bn.subVectors(e,t),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),sr.crossVectors(i,bn),sr.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),sr.crossVectors(i,bn)),sr.normalize(),Ll.crossVectors(bn,sr),r[0]=sr.x,r[4]=Ll.x,r[8]=bn.x,r[1]=sr.y,r[5]=Ll.y,r[9]=bn.y,r[2]=sr.z,r[6]=Ll.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],x=i[2],m=i[6],g=i[10],d=i[14],_=i[3],v=i[7],y=i[11],T=i[15],E=r[0],M=r[4],b=r[8],S=r[12],A=r[1],O=r[5],j=r[9],K=r[13],L=r[2],I=r[6],z=r[10],q=r[14],D=r[3],F=r[7],k=r[11],Z=r[15];return s[0]=o*E+a*A+l*L+u*D,s[4]=o*M+a*O+l*I+u*F,s[8]=o*b+a*j+l*z+u*k,s[12]=o*S+a*K+l*q+u*Z,s[1]=c*E+f*A+h*L+p*D,s[5]=c*M+f*O+h*I+p*F,s[9]=c*b+f*j+h*z+p*k,s[13]=c*S+f*K+h*q+p*Z,s[2]=x*E+m*A+g*L+d*D,s[6]=x*M+m*O+g*I+d*F,s[10]=x*b+m*j+g*z+d*k,s[14]=x*S+m*K+g*q+d*Z,s[3]=_*E+v*A+y*L+T*D,s[7]=_*M+v*O+y*I+T*F,s[11]=_*b+v*j+y*z+T*k,s[15]=_*S+v*K+y*q+T*Z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],x=e[3],m=e[7],g=e[11],d=e[15];return x*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+m*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+g*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],x=e[12],m=e[13],g=e[14],d=e[15],_=f*g*u-m*h*u+m*l*p-a*g*p-f*l*d+a*h*d,v=x*h*u-c*g*u-x*l*p+o*g*p+c*l*d-o*h*d,y=c*m*u-x*f*u+x*a*p-o*m*p-c*a*d+o*f*d,T=x*f*l-c*m*l-x*a*h+o*m*h+c*a*g-o*f*g,E=t*_+i*v+r*y+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=_*M,e[1]=(m*h*s-f*g*s-m*r*p+i*g*p+f*r*d-i*h*d)*M,e[2]=(a*g*s-m*l*s+m*r*u-i*g*u-a*r*d+i*l*d)*M,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*g*s-x*h*s+x*r*p-t*g*p-c*r*d+t*h*d)*M,e[6]=(x*l*s-o*g*s-x*r*u+t*g*u+o*r*d-t*l*d)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(x*f*s-c*m*s-x*i*p+t*m*p+c*i*d-t*f*d)*M,e[10]=(o*m*s-x*a*s+x*i*u-t*m*u-o*i*d+t*a*d)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=T*M,e[13]=(c*m*r-x*f*r+x*i*h-t*m*h-c*i*g+t*f*g)*M,e[14]=(x*a*r-o*m*r-x*i*l+t*m*l+o*i*g-t*a*g)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,x=s*f,m=o*c,g=o*f,d=a*f,_=l*u,v=l*c,y=l*f,T=i.x,E=i.y,M=i.z;return r[0]=(1-(m+d))*T,r[1]=(p+y)*T,r[2]=(x-v)*T,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+d))*E,r[6]=(g+_)*E,r[7]=0,r[8]=(x+v)*M,r[9]=(g-_)*M,r[10]=(1-(h+m))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Us.set(r[0],r[1],r[2]).length();const o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],oi.copy(this);const u=1/s,c=1/o,f=1/a;return oi.elements[0]*=u,oi.elements[1]*=u,oi.elements[2]*=u,oi.elements[4]*=c,oi.elements[5]*=c,oi.elements[6]*=c,oi.elements[8]*=f,oi.elements[9]*=f,oi.elements[10]*=f,t.setFromRotationMatrix(oi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=ji){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===ji)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Wu)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=ji){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,m;if(a===ji)x=(o+s)*f,m=-2*f;else if(a===Wu)x=s*f,m=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=m,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Us=new G,oi=new Lt,AT=new G(0,0,0),CT=new G(1,1,1),sr=new G,Ll=new G,bn=new G,kg=new Lt,zg=new tl;class hc{constructor(e=0,t=0,i=0,r=hc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-gn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return kg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(kg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zg.setFromEuler(this),this.setFromQuaternion(zg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hc.DEFAULT_ORDER="XYZ";class Kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let RT=0;const Bg=new G,Is=new tl,Ii=new Lt,Dl=new G,Jo=new G,bT=new G,PT=new tl,Hg=new G(1,0,0),Gg=new G(0,1,0),Vg=new G(0,0,1),LT={type:"added"},DT={type:"removed"};class en extends ko{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=el(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=en.DEFAULT_UP.clone();const e=new G,t=new hc,i=new tl,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new Be}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=en.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Hg,e)}rotateY(e){return this.rotateOnAxis(Gg,e)}rotateZ(e){return this.rotateOnAxis(Vg,e)}translateOnAxis(e,t){return Bg.copy(e).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hg,e)}translateY(e){return this.translateOnAxis(Gg,e)}translateZ(e){return this.translateOnAxis(Vg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dl.copy(e):Dl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Jo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Jo,Dl,this.up):Ii.lookAt(Dl,Jo,this.up),this.quaternion.setFromRotationMatrix(Ii),r&&(Ii.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(Ii),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(LT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(DT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,e,bT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jo,PT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}en.DEFAULT_UP=new G(0,1,0);en.DEFAULT_MATRIX_AUTO_UPDATE=!0;en.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ai=new G,Oi=new G,vf=new G,Fi=new G,Os=new G,Fs=new G,Wg=new G,xf=new G,yf=new G,Sf=new G;let Nl=!1;class fi{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ai.subVectors(e,t),r.cross(ai);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ai.subVectors(r,t),Oi.subVectors(i,t),vf.subVectors(e,t);const o=ai.dot(ai),a=ai.dot(Oi),l=ai.dot(vf),u=Oi.dot(Oi),c=Oi.dot(vf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static isFrontFacing(e,t,i,r){return ai.subVectors(i,t),Oi.subVectors(e,t),ai.cross(Oi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ai.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),ai.cross(Oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return fi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nl=!0),fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return fi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Os.subVectors(r,i),Fs.subVectors(s,i),xf.subVectors(e,i);const l=Os.dot(xf),u=Fs.dot(xf);if(l<=0&&u<=0)return t.copy(i);yf.subVectors(e,r);const c=Os.dot(yf),f=Fs.dot(yf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Os,o);Sf.subVectors(e,s);const p=Os.dot(Sf),x=Fs.dot(Sf);if(x>=0&&p<=x)return t.copy(s);const m=p*u-l*x;if(m<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Fs,a);const g=c*x-p*f;if(g<=0&&f-c>=0&&p-x>=0)return Wg.subVectors(s,r),a=(f-c)/(f-c+(p-x)),t.copy(r).addScaledVector(Wg,a);const d=1/(g+m+h);return o=m*d,a=h*d,t.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},Ul={h:0,s:0,l:0};function Mf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,Qe.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Qe.workingColorSpace){if(e=_T(e,1),t=gn(t,0,1),i=gn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Mf(o,s,e+1/3),this.g=Mf(o,s,e),this.b=Mf(o,s,e-1/3)}return Qe.toWorkingColorSpace(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Zx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=cf(e.r),this.g=cf(e.g),this.b=cf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Qe.fromWorkingColorSpace(Kt.copy(this),e),Math.round(gn(Kt.r*255,0,255))*65536+Math.round(gn(Kt.g*255,0,255))*256+Math.round(gn(Kt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Qe.workingColorSpace){Qe.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Qe.workingColorSpace){return Qe.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=kt){Qe.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(or),this.setHSL(or.h+e,or.s+t,or.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(or),e.getHSL(Ul);const i=lf(or.h,Ul.h,t),r=lf(or.s,Ul.s,t),s=lf(or.l,Ul.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Xe;Xe.NAMES=Zx;let NT=0;class il extends ko{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=el(),this.name="",this.type="Material",this.blending=hs,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gd,this.blendDst=Vd,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Bu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gd&&(i.blendSrc=this.blendSrc),this.blendDst!==Vd&&(i.blendDst=this.blendDst),this.blendEquation!==ts&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qx extends il{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new G,Il=new qe;class bi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lg,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Il.fromBufferAttribute(this,t),Il.applyMatrix3(e),this.setXY(t,Il.x,Il.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix3(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyMatrix4(e),this.setXYZ(t,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.applyNormalMatrix(e),this.setXYZ(t,At.x,At.y,At.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)At.fromBufferAttribute(this,t),At.transformDirection(e),this.setXYZ(t,At.x,At.y,At.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ko(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ko(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ko(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ko(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ko(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lg&&(e.usage=this.usage),e}}class Jx extends bi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ey extends bi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pi extends bi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let UT=0;const jn=new Lt,Ef=new en,ks=new G,Pn=new nl,ea=new nl,Ot=new G;class Hr extends ko{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:UT++}),this.uuid=el(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xx(e)?ey:Jx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,i){return jn.makeTranslation(e,t,i),this.applyMatrix4(jn),this}scale(e,t,i){return jn.makeScale(e,t,i),this.applyMatrix4(jn),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ot.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Ot),Ot.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Ot)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ea.setFromBufferAttribute(a),this.morphTargetsRelative?(Ot.addVectors(Pn.min,ea.min),Pn.expandByPoint(Ot),Ot.addVectors(Pn.max,ea.max),Pn.expandByPoint(Ot)):(Pn.expandByPoint(ea.min),Pn.expandByPoint(ea.max))}Pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ot.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ot));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ot.fromBufferAttribute(a,u),l&&(ks.fromBufferAttribute(e,u),Ot.add(ks)),r=Math.max(r,i.distanceToSquared(Ot))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let A=0;A<a;A++)u[A]=new G,c[A]=new G;const f=new G,h=new G,p=new G,x=new qe,m=new qe,g=new qe,d=new G,_=new G;function v(A,O,j){f.fromArray(r,A*3),h.fromArray(r,O*3),p.fromArray(r,j*3),x.fromArray(o,A*2),m.fromArray(o,O*2),g.fromArray(o,j*2),h.sub(f),p.sub(f),m.sub(x),g.sub(x);const K=1/(m.x*g.y-g.x*m.y);isFinite(K)&&(d.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(K),_.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(K),u[A].add(d),u[O].add(d),u[j].add(d),c[A].add(_),c[O].add(_),c[j].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let A=0,O=y.length;A<O;++A){const j=y[A],K=j.start,L=j.count;for(let I=K,z=K+L;I<z;I+=3)v(i[I+0],i[I+1],i[I+2])}const T=new G,E=new G,M=new G,b=new G;function S(A){M.fromArray(s,A*3),b.copy(M);const O=u[A];T.copy(O),T.sub(M.multiplyScalar(M.dot(O))).normalize(),E.crossVectors(b,O);const K=E.dot(c[A])<0?-1:1;l[A*4]=T.x,l[A*4+1]=T.y,l[A*4+2]=T.z,l[A*4+3]=K}for(let A=0,O=y.length;A<O;++A){const j=y[A],K=j.start,L=j.count;for(let I=K,z=K+L;I<z;I+=3)S(i[I+0]),S(i[I+1]),S(i[I+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,u=new G,c=new G,f=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),m=e.getX(h+1),g=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),u.fromBufferAttribute(i,g),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ot.fromBufferAttribute(e,t),Ot.normalize(),e.setXYZ(t,Ot.x,Ot.y,Ot.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?p=l[m]*a.data.stride+a.offset:p=l[m]*c;for(let d=0;d<c;d++)h[x++]=u[p++]}return new bi(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Hr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jg=new Lt,qr=new wT,Ol=new pp,Xg=new G,zs=new G,Bs=new G,Hs=new G,Tf=new G,Fl=new G,kl=new qe,zl=new qe,Bl=new qe,Yg=new G,qg=new G,$g=new G,Hl=new G,Gl=new G;class Ai extends en{constructor(e=new Hr,t=new Qx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Tf.fromBufferAttribute(f,e),o?Fl.addScaledVector(Tf,c):Fl.addScaledVector(Tf.sub(t),c))}t.add(Fl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ol.copy(i.boundingSphere),Ol.applyMatrix4(s),qr.copy(e.ray).recast(e.near),!(Ol.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Ol,Xg)===null||qr.origin.distanceToSquared(Xg)>(e.far-e.near)**2))&&(jg.copy(s).invert(),qr.copy(e.ray).applyMatrix4(jg),!(i.boundingBox!==null&&qr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,m=h.length;x<m;x++){const g=h[x],d=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(a.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,T=v;y<T;y+=3){const E=a.getX(y),M=a.getX(y+1),b=a.getX(y+2);r=Vl(this,d,e,i,u,c,f,E,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),m=Math.min(a.count,p.start+p.count);for(let g=x,d=m;g<d;g+=3){const _=a.getX(g),v=a.getX(g+1),y=a.getX(g+2);r=Vl(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,m=h.length;x<m;x++){const g=h[x],d=o[g.materialIndex],_=Math.max(g.start,p.start),v=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let y=_,T=v;y<T;y+=3){const E=y,M=y+1,b=y+2;r=Vl(this,d,e,i,u,c,f,E,M,b),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),m=Math.min(l.count,p.start+p.count);for(let g=x,d=m;g<d;g+=3){const _=g,v=g+1,y=g+2;r=Vl(this,o,e,i,u,c,f,_,v,y),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function IT(n,e,t,i,r,s,o,a){let l;if(e.side===wn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Gl);return u<t.near||u>t.far?null:{distance:u,point:Gl.clone(),object:n}}function Vl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,zs),n.getVertexPosition(l,Bs),n.getVertexPosition(u,Hs);const c=IT(n,e,t,i,zs,Bs,Hs,Hl);if(c){r&&(kl.fromBufferAttribute(r,a),zl.fromBufferAttribute(r,l),Bl.fromBufferAttribute(r,u),c.uv=fi.getInterpolation(Hl,zs,Bs,Hs,kl,zl,Bl,new qe)),s&&(kl.fromBufferAttribute(s,a),zl.fromBufferAttribute(s,l),Bl.fromBufferAttribute(s,u),c.uv1=fi.getInterpolation(Hl,zs,Bs,Hs,kl,zl,Bl,new qe),c.uv2=c.uv1),o&&(Yg.fromBufferAttribute(o,a),qg.fromBufferAttribute(o,l),$g.fromBufferAttribute(o,u),c.normal=fi.getInterpolation(Hl,zs,Bs,Hs,Yg,qg,$g,new G),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new G,materialIndex:0};fi.getNormal(zs,Bs,Hs,f.normal),c.face=f}return c}class rl extends Hr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(u,3)),this.setAttribute("normal",new Pi(c,3)),this.setAttribute("uv",new Pi(f,2));function x(m,g,d,_,v,y,T,E,M,b,S){const A=y/M,O=T/b,j=y/2,K=T/2,L=E/2,I=M+1,z=b+1;let q=0,D=0;const F=new G;for(let k=0;k<z;k++){const Z=k*O-K;for(let Q=0;Q<I;Q++){const Y=Q*A-j;F[m]=Y*_,F[g]=Z*v,F[d]=L,u.push(F.x,F.y,F.z),F[m]=0,F[g]=0,F[d]=E>0?1:-1,c.push(F.x,F.y,F.z),f.push(Q/M),f.push(1-k/b),q+=1}}for(let k=0;k<b;k++)for(let Z=0;Z<M;Z++){const Q=h+Z+I*k,Y=h+Z+I*(k+1),$=h+(Z+1)+I*(k+1),re=h+(Z+1)+I*k;l.push(Q,Y,re),l.push(Y,$,re),D+=6}a.addGroup(p,D,S),p+=D,h+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new rl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Uo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function on(n){const e={};for(let t=0;t<n.length;t++){const i=Uo(n[t]);for(const r in i)e[r]=i[r]}return e}function OT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function ty(n){return n.getRenderTarget()===null?n.outputColorSpace:Qe.workingColorSpace}const FT={clone:Uo,merge:on};var kT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Es extends il{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kT,this.fragmentShader=zT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Uo(e.uniforms),this.uniformsGroups=OT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ny extends en{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ji}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Kn extends ny{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=$d*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(af*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $d*2*Math.atan(Math.tan(af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(af*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,Vs=1;class BT extends en{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Kn(Gs,Vs,e,t);r.layers=this.layers,this.add(r);const s=new Kn(Gs,Vs,e,t);s.layers=this.layers,this.add(s);const o=new Kn(Gs,Vs,e,t);o.layers=this.layers,this.add(o);const a=new Kn(Gs,Vs,e,t);a.layers=this.layers,this.add(a);const l=new Kn(Gs,Vs,e,t);l.layers=this.layers,this.add(l);const u=new Kn(Gs,Vs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=m,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class iy extends An{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Lo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class HT extends Ms{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===gs?kt:Zn),this.texture=new iy(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new rl(5,5,5),s=new Es({name:"CubemapFromEquirect",uniforms:Uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wn,blending:Rr});s.uniforms.tEquirect.value=t;const o=new Ai(r,s),a=t.minFilter;return t.minFilter===ja&&(t.minFilter=$n),new BT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const wf=new G,GT=new G,VT=new Be;class Jr{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wf.subVectors(i,t).cross(GT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||VT.getNormalMatrix(e),r=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new pp,Wl=new G;class mp{constructor(e=new Jr,t=new Jr,i=new Jr,r=new Jr,s=new Jr,o=new Jr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ji){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],x=r[9],m=r[10],g=r[11],d=r[12],_=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,g-p,y-d).normalize(),i[1].setComponents(l+s,h+u,g+p,y+d).normalize(),i[2].setComponents(l+o,h+c,g+x,y+_).normalize(),i[3].setComponents(l-o,h-c,g-x,y-_).normalize(),i[4].setComponents(l-a,h-f,g-m,y-v).normalize(),t===ji)i[5].setComponents(l+a,h+f,g+m,y+v).normalize();else if(t===Wu)i[5].setComponents(a,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),$r.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Wl.x=r.normal.x>0?e.max.x:e.min.x,Wl.y=r.normal.y>0?e.max.y:e.min.y,Wl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ry(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function WT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,h=u.usage,p=f.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,f,h),u.onUploadCallback();let m;if(f instanceof Float32Array)m=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)m=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)m=n.SHORT;else if(f instanceof Uint32Array)m=n.UNSIGNED_INT;else if(f instanceof Int32Array)m=n.INT;else if(f instanceof Int8Array)m=n.BYTE;else if(f instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const h=c.array,p=c._updateRange,x=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&x.length===0&&n.bufferSubData(f,0,h),x.length!==0){for(let m=0,g=x.length;m<g;m++){const d=x[m];t?n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h,d.start,d.count):n.bufferSubData(f,d.start*h.BYTES_PER_ELEMENT,h.subarray(d.start,d.start+d.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(f,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class gp extends Hr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],x=[],m=[],g=[];for(let d=0;d<c;d++){const _=d*h-o;for(let v=0;v<u;v++){const y=v*f-s;x.push(y,-_,0),m.push(0,0,1),g.push(v/a),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){const v=_+u*d,y=_+u*(d+1),T=_+1+u*(d+1),E=_+1+u*d;p.push(v,y,E),p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new Pi(x,3)),this.setAttribute("normal",new Pi(m,3)),this.setAttribute("uv",new Pi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.width,e.height,e.widthSegments,e.heightSegments)}}var jT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,XT=`#ifdef USE_ALPHAHASH
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
#endif`,YT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$T=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,KT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZT=`#ifdef USE_AOMAP
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
#endif`,QT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,JT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,ew=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,tw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rw=`#ifdef USE_IRIDESCENCE
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
#endif`,sw=`#ifdef USE_BUMPMAP
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
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,aw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,hw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,pw=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,mw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gw=`vec3 transformedNormal = objectNormal;
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
#endif`,_w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sw="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ew=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,Tw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ww=`#ifdef USE_ENVMAP
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
#endif`,Aw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cw=`#ifdef USE_ENVMAP
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
#endif`,Rw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dw=`#ifdef USE_GRADIENTMAP
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
}`,Nw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Uw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ow=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fw=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,kw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,zw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vw=`PhysicalMaterial material;
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
#endif`,Ww=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,jw=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Xw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$w=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Qw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tA=`#if defined( USE_POINTS_UV )
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
#endif`,nA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,oA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,lA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hA=`#ifdef USE_NORMALMAP
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
#endif`,pA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_A=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,yA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,SA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,MA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,TA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,AA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,CA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,RA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,PA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LA=`#ifdef USE_SKINNING
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
#endif`,DA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,NA=`#ifdef USE_SKINNING
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
#endif`,UA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,IA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,OA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,FA=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kA=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zA=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,VA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const WA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jA=`uniform sampler2D t2D;
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
}`,XA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,YA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$A=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KA=`#include <common>
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
}`,ZA=`#if DEPTH_PACKING == 3200
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,QA=`#define DISTANCE
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
}`,JA=`#define DISTANCE
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,eC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nC=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rC=`#include <common>
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
}`,sC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,oC=`#define LAMBERT
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
}`,aC=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,lC=`#define MATCAP
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
}`,uC=`#define MATCAP
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,cC=`#define NORMAL
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
}`,fC=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,dC=`#define PHONG
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
}`,hC=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,pC=`#define STANDARD
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
}`,mC=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,gC=`#define TOON
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
}`,_C=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,vC=`uniform float size;
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
}`,xC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,yC=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,SC=`uniform vec3 color;
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
}`,MC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,EC=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
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
}`,Ue={alphahash_fragment:jT,alphahash_pars_fragment:XT,alphamap_fragment:YT,alphamap_pars_fragment:qT,alphatest_fragment:$T,alphatest_pars_fragment:KT,aomap_fragment:ZT,aomap_pars_fragment:QT,batching_pars_vertex:JT,batching_vertex:ew,begin_vertex:tw,beginnormal_vertex:nw,bsdfs:iw,iridescence_fragment:rw,bumpmap_pars_fragment:sw,clipping_planes_fragment:ow,clipping_planes_pars_fragment:aw,clipping_planes_pars_vertex:lw,clipping_planes_vertex:uw,color_fragment:cw,color_pars_fragment:fw,color_pars_vertex:dw,color_vertex:hw,common:pw,cube_uv_reflection_fragment:mw,defaultnormal_vertex:gw,displacementmap_pars_vertex:_w,displacementmap_vertex:vw,emissivemap_fragment:xw,emissivemap_pars_fragment:yw,colorspace_fragment:Sw,colorspace_pars_fragment:Mw,envmap_fragment:Ew,envmap_common_pars_fragment:Tw,envmap_pars_fragment:ww,envmap_pars_vertex:Aw,envmap_physical_pars_fragment:kw,envmap_vertex:Cw,fog_vertex:Rw,fog_pars_vertex:bw,fog_fragment:Pw,fog_pars_fragment:Lw,gradientmap_pars_fragment:Dw,lightmap_fragment:Nw,lightmap_pars_fragment:Uw,lights_lambert_fragment:Iw,lights_lambert_pars_fragment:Ow,lights_pars_begin:Fw,lights_toon_fragment:zw,lights_toon_pars_fragment:Bw,lights_phong_fragment:Hw,lights_phong_pars_fragment:Gw,lights_physical_fragment:Vw,lights_physical_pars_fragment:Ww,lights_fragment_begin:jw,lights_fragment_maps:Xw,lights_fragment_end:Yw,logdepthbuf_fragment:qw,logdepthbuf_pars_fragment:$w,logdepthbuf_pars_vertex:Kw,logdepthbuf_vertex:Zw,map_fragment:Qw,map_pars_fragment:Jw,map_particle_fragment:eA,map_particle_pars_fragment:tA,metalnessmap_fragment:nA,metalnessmap_pars_fragment:iA,morphcolor_vertex:rA,morphnormal_vertex:sA,morphtarget_pars_vertex:oA,morphtarget_vertex:aA,normal_fragment_begin:lA,normal_fragment_maps:uA,normal_pars_fragment:cA,normal_pars_vertex:fA,normal_vertex:dA,normalmap_pars_fragment:hA,clearcoat_normal_fragment_begin:pA,clearcoat_normal_fragment_maps:mA,clearcoat_pars_fragment:gA,iridescence_pars_fragment:_A,opaque_fragment:vA,packing:xA,premultiplied_alpha_fragment:yA,project_vertex:SA,dithering_fragment:MA,dithering_pars_fragment:EA,roughnessmap_fragment:TA,roughnessmap_pars_fragment:wA,shadowmap_pars_fragment:AA,shadowmap_pars_vertex:CA,shadowmap_vertex:RA,shadowmask_pars_fragment:bA,skinbase_vertex:PA,skinning_pars_vertex:LA,skinning_vertex:DA,skinnormal_vertex:NA,specularmap_fragment:UA,specularmap_pars_fragment:IA,tonemapping_fragment:OA,tonemapping_pars_fragment:FA,transmission_fragment:kA,transmission_pars_fragment:zA,uv_pars_fragment:BA,uv_pars_vertex:HA,uv_vertex:GA,worldpos_vertex:VA,background_vert:WA,background_frag:jA,backgroundCube_vert:XA,backgroundCube_frag:YA,cube_vert:qA,cube_frag:$A,depth_vert:KA,depth_frag:ZA,distanceRGBA_vert:QA,distanceRGBA_frag:JA,equirect_vert:eC,equirect_frag:tC,linedashed_vert:nC,linedashed_frag:iC,meshbasic_vert:rC,meshbasic_frag:sC,meshlambert_vert:oC,meshlambert_frag:aC,meshmatcap_vert:lC,meshmatcap_frag:uC,meshnormal_vert:cC,meshnormal_frag:fC,meshphong_vert:dC,meshphong_frag:hC,meshphysical_vert:pC,meshphysical_frag:mC,meshtoon_vert:gC,meshtoon_frag:_C,points_vert:vC,points_frag:xC,shadow_vert:yC,shadow_frag:SC,sprite_vert:MC,sprite_frag:EC},oe={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},Si={basic:{uniforms:on([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:on([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:on([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:on([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:on([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:on([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:on([oe.points,oe.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:on([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:on([oe.common,oe.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:on([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:on([oe.sprite,oe.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:on([oe.common,oe.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:on([oe.lights,oe.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Si.physical={uniforms:on([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const jl={r:0,b:0,g:0};function TC(n,e,t,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function x(g,d){let _=!1,v=d.isScene===!0?d.background:null;v&&v.isTexture&&(v=(d.backgroundBlurriness>0?t:e).get(v)),v===null?m(a,l):v&&v.isColor&&(m(v,1),_=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fc)?(c===void 0&&(c=new Ai(new rl(1,1,1),new Es({name:"BackgroundCubeMaterial",uniforms:Uo(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ot,(f!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new Ai(new gp(2,2),new Es({name:"BackgroundMaterial",uniforms:Uo(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Qe.getTransfer(v.colorSpace)!==ot,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function m(g,d){g.getRGB(jl,ty(n)),i.buffers.color.setClear(jl.r,jl.g,jl.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(g,d=1){a.set(g),l=d,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,m(a,l)},render:x}}function wC(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=g(null);let u=l,c=!1;function f(L,I,z,q,D){let F=!1;if(o){const k=m(q,z,I);u!==k&&(u=k,p(u.object)),F=d(L,q,z,D),F&&_(L,q,z,D)}else{const k=I.wireframe===!0;(u.geometry!==q.id||u.program!==z.id||u.wireframe!==k)&&(u.geometry=q.id,u.program=z.id,u.wireframe=k,F=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,b(L,I,z,q),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function m(L,I,z){const q=z.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let F=D[I.id];F===void 0&&(F={},D[I.id]=F);let k=F[q];return k===void 0&&(k=g(h()),F[q]=k),k}function g(L){const I=[],z=[],q=[];for(let D=0;D<r;D++)I[D]=0,z[D]=0,q[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:z,attributeDivisors:q,object:L,attributes:{},index:null}}function d(L,I,z,q){const D=u.attributes,F=I.attributes;let k=0;const Z=z.getAttributes();for(const Q in Z)if(Z[Q].location>=0){const $=D[Q];let re=F[Q];if(re===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),$===void 0||$.attribute!==re||re&&$.data!==re.data)return!0;k++}return u.attributesNum!==k||u.index!==q}function _(L,I,z,q){const D={},F=I.attributes;let k=0;const Z=z.getAttributes();for(const Q in Z)if(Z[Q].location>=0){let $=F[Q];$===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&($=L.instanceColor));const re={};re.attribute=$,$&&$.data&&(re.data=$.data),D[Q]=re,k++}u.attributes=D,u.attributesNum=k,u.index=q}function v(){const L=u.newAttributes;for(let I=0,z=L.length;I<z;I++)L[I]=0}function y(L){T(L,0)}function T(L,I){const z=u.newAttributes,q=u.enabledAttributes,D=u.attributeDivisors;z[L]=1,q[L]===0&&(n.enableVertexAttribArray(L),q[L]=1),D[L]!==I&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,I),D[L]=I)}function E(){const L=u.newAttributes,I=u.enabledAttributes;for(let z=0,q=I.length;z<q;z++)I[z]!==L[z]&&(n.disableVertexAttribArray(z),I[z]=0)}function M(L,I,z,q,D,F,k){k===!0?n.vertexAttribIPointer(L,I,z,D,F):n.vertexAttribPointer(L,I,z,q,D,F)}function b(L,I,z,q){if(i.isWebGL2===!1&&(L.isInstancedMesh||q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=q.attributes,F=z.getAttributes(),k=I.defaultAttributeValues;for(const Z in F){const Q=F[Z];if(Q.location>=0){let Y=D[Z];if(Y===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(Y=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(Y=L.instanceColor)),Y!==void 0){const $=Y.normalized,re=Y.itemSize,de=t.get(Y);if(de===void 0)continue;const me=de.buffer,Pe=de.type,De=de.bytesPerElement,Te=i.isWebGL2===!0&&(Pe===n.INT||Pe===n.UNSIGNED_INT||Y.gpuType===Ox);if(Y.isInterleavedBufferAttribute){const je=Y.data,B=je.stride,nn=Y.offset;if(je.isInstancedInterleavedBuffer){for(let ye=0;ye<Q.locationSize;ye++)T(Q.location+ye,je.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=je.meshPerAttribute*je.count)}else for(let ye=0;ye<Q.locationSize;ye++)y(Q.location+ye);n.bindBuffer(n.ARRAY_BUFFER,me);for(let ye=0;ye<Q.locationSize;ye++)M(Q.location+ye,re/Q.locationSize,Pe,$,B*De,(nn+re/Q.locationSize*ye)*De,Te)}else{if(Y.isInstancedBufferAttribute){for(let je=0;je<Q.locationSize;je++)T(Q.location+je,Y.meshPerAttribute);L.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let je=0;je<Q.locationSize;je++)y(Q.location+je);n.bindBuffer(n.ARRAY_BUFFER,me);for(let je=0;je<Q.locationSize;je++)M(Q.location+je,re/Q.locationSize,Pe,$,re*De,re/Q.locationSize*je*De,Te)}}else if(k!==void 0){const $=k[Z];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(Q.location,$);break;case 3:n.vertexAttrib3fv(Q.location,$);break;case 4:n.vertexAttrib4fv(Q.location,$);break;default:n.vertexAttrib1fv(Q.location,$)}}}}E()}function S(){j();for(const L in a){const I=a[L];for(const z in I){const q=I[z];for(const D in q)x(q[D].object),delete q[D];delete I[z]}delete a[L]}}function A(L){if(a[L.id]===void 0)return;const I=a[L.id];for(const z in I){const q=I[z];for(const D in q)x(q[D].object),delete q[D];delete I[z]}delete a[L.id]}function O(L){for(const I in a){const z=a[I];if(z[L.id]===void 0)continue;const q=z[L.id];for(const D in q)x(q[D].object),delete q[D];delete z[L.id]}}function j(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:j,resetDefaultState:K,dispose:S,releaseStatesOfGeometry:A,releaseStatesOfProgram:O,initAttributes:v,enableAttribute:y,disableUnusedAttributes:E}}function AC(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,h){if(h===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,f,h),t.update(f,s,h)}function u(c,f,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(c[x],f[x]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function CC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),T=v&&y,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:g,maxVaryings:d,maxFragmentUniforms:_,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:T,maxSamples:E}}function RC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Jr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,m=f.clipIntersection,g=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!g)s?c(null):u();else{const _=s?0:i,v=_*4;let y=d.clippingState||null;l.value=y,y=c(x,h,v,p);for(let T=0;T!==v;++T)y[T]=t[T];d.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,x){const m=f!==null?f.length:0;let g=null;if(m!==0){if(g=l.value,x!==!0||g===null){const d=p+m*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(g===null||g.length<d)&&(g=new Float32Array(d));for(let v=0,y=p;v!==m;++v,y+=4)o.copy(f[v]).applyMatrix4(_,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function bC(n){let e=new WeakMap;function t(o,a){return a===Wd?o.mapping=Lo:a===jd&&(o.mapping=Do),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wd||a===jd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new HT(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class sy extends ny{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const so=4,Kg=[.125,.215,.35,.446,.526,.582],ns=20,Af=new sy,Zg=new Xe;let Cf=null,Rf=0,bf=0;const es=(1+Math.sqrt(5))/2,Ws=1/es,Qg=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,es,Ws),new G(0,es,-Ws),new G(Ws,0,es),new G(-Ws,0,es),new G(es,Ws,0),new G(-es,Ws,0)];class Jg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,bf),e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lo||e.mapping===Do?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),bf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:Xa,format:hi,colorSpace:Ji,depthBuffer:!1},r=e_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=PC(s)),this._blurMaterial=LC(s,e,t)}return r}_compileMaterial(e){const t=new Ai(this._lodPlanes[0],e);this._renderer.compile(t,Af)}_sceneToCubeUV(e,t,i,r){const a=new Kn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Zg),c.toneMapping=br,c.autoClear=!1;const p=new Qx({name:"PMREM.Background",side:wn,depthWrite:!1,depthTest:!1}),x=new Ai(new rl,p);let m=!1;const g=e.background;g?g.isColor&&(p.color.copy(g),e.background=null,m=!0):(p.color.copy(Zg),m=!0);for(let d=0;d<6;d++){const _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;Xl(r,_*v,d>2?v:0,v,v),c.setRenderTarget(r),m&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Lo||e.mapping===Do;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ai(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Af)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Qg[(r-1)%Qg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Ai(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ns-1),m=s/x,g=isFinite(s)?1+Math.floor(c*m):ns;g>ns&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${ns}`);const d=[];let _=0;for(let M=0;M<ns;++M){const b=M/m,S=Math.exp(-b*b/2);d.push(S),M===0?_+=S:M<g&&(_+=2*S)}for(let M=0;M<d.length;M++)d[M]=d[M]/_;h.envMap.value=e.texture,h.samples.value=g,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],T=3*y*(r>v-so?r-v+so:0),E=4*(this._cubeSize-y);Xl(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(f,Af)}}function PC(n){const e=[],t=[],i=[];let r=n;const s=n-so+1+Kg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-so?l=Kg[o-n+so-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,x=6,m=3,g=2,d=1,_=new Float32Array(m*x*p),v=new Float32Array(g*x*p),y=new Float32Array(d*x*p);for(let E=0;E<p;E++){const M=E%3*2/3-1,b=E>2?0:-1,S=[M,b,0,M+2/3,b,0,M+2/3,b+1,0,M,b,0,M+2/3,b+1,0,M,b+1,0];_.set(S,m*x*E),v.set(h,g*x*E);const A=[E,E,E,E,E,E];y.set(A,d*x*E)}const T=new Hr;T.setAttribute("position",new bi(_,m)),T.setAttribute("uv",new bi(v,g)),T.setAttribute("faceIndex",new bi(y,d)),e.push(T),r>so&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function e_(n,e,t){const i=new Ms(n,e,t);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function LC(n,e,t){const i=new Float32Array(ns),r=new G(0,1,0);return new Es({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:_p(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function t_(){return new Es({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_p(),fragmentShader:`

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
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function n_(){return new Es({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_p(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rr,depthTest:!1,depthWrite:!1})}function _p(){return`

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
	`}function DC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Wd||l===jd,c=l===Lo||l===Do;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Jg(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Jg(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function NC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function UC(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const m=h.morphAttributes[x];for(let g=0,d=m.length;g<d;g++)e.remove(m[g])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const m=p[x];for(let g=0,d=m.length;g<d;g++)e.update(m[g],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,x=f.attributes.position;let m=0;if(p!==null){const _=p.array;m=p.version;for(let v=0,y=_.length;v<y;v+=3){const T=_[v+0],E=_[v+1],M=_[v+2];h.push(T,E,E,M,M,T)}}else if(x!==void 0){const _=x.array;m=x.version;for(let v=0,y=_.length/3-1;v<y;v+=3){const T=v+0,E=v+1,M=v+2;h.push(T,E,E,M,M,T)}}else return;const g=new(Xx(h)?ey:Jx)(h,1);g.version=m;const d=s.get(f);d&&e.remove(d),s.set(f,g)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function IC(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){n.drawElements(s,x,a,p*l),t.update(x,s,1)}function f(p,x,m){if(m===0)return;let g,d;if(r)g=n,d="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[d](s,x,a,p*l,m),t.update(x,s,m)}function h(p,x,m){if(m===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let d=0;d<m;d++)this.render(p[d]/l,x[d]);else{g.multiDrawElementsWEBGL(s,x,0,a,p,0,m);let d=0;for(let _=0;_<m;_++)d+=x[_];t.update(d,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=h}function OC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function FC(n,e){return n[0]-e[0]}function kC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function zC(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new zt,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,m=x!==void 0?x.length:0;let g=s.get(c);if(g===void 0||g.count!==m){let I=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",I)};var p=I;g!==void 0&&g.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,T=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],b=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),T===!0&&(S=3);let A=c.attributes.position.count*S,O=1;A>e.maxTextureSize&&(O=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const j=new Float32Array(A*O*4*m),K=new $x(j,A,O,m);K.type=_r,K.needsUpdate=!0;const L=S*4;for(let z=0;z<m;z++){const q=E[z],D=M[z],F=b[z],k=A*O*4*z;for(let Z=0;Z<q.count;Z++){const Q=Z*L;v===!0&&(o.fromBufferAttribute(q,Z),j[k+Q+0]=o.x,j[k+Q+1]=o.y,j[k+Q+2]=o.z,j[k+Q+3]=0),y===!0&&(o.fromBufferAttribute(D,Z),j[k+Q+4]=o.x,j[k+Q+5]=o.y,j[k+Q+6]=o.z,j[k+Q+7]=0),T===!0&&(o.fromBufferAttribute(F,Z),j[k+Q+8]=o.x,j[k+Q+9]=o.y,j[k+Q+10]=o.z,j[k+Q+11]=F.itemSize===4?o.w:1)}}g={count:m,texture:K,size:new qe(A,O)},s.set(c,g),c.addEventListener("dispose",I)}let d=0;for(let v=0;v<h.length;v++)d+=h[v];const _=c.morphTargetsRelative?1:1-d;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const x=h===void 0?0:h.length;let m=i[c.id];if(m===void 0||m.length!==x){m=[];for(let y=0;y<x;y++)m[y]=[y,0];i[c.id]=m}for(let y=0;y<x;y++){const T=m[y];T[0]=y,T[1]=h[y]}m.sort(kC);for(let y=0;y<8;y++)y<x&&m[y][1]?(a[y][0]=m[y][0],a[y][1]=m[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(FC);const g=c.morphAttributes.position,d=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const T=a[y],E=T[0],M=T[1];E!==Number.MAX_SAFE_INTEGER&&M?(g&&c.getAttribute("morphTarget"+y)!==g[E]&&c.setAttribute("morphTarget"+y,g[E]),d&&c.getAttribute("morphNormal"+y)!==d[E]&&c.setAttribute("morphNormal"+y,d[E]),r[y]=M,_+=M):(g&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),d&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function BC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class oy extends An{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ms,c!==ms&&c!==No)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ms&&(i=gr),i===void 0&&c===No&&(i=ps),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ln,this.minFilter=l!==void 0?l:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ay=new An,ly=new oy(1,1);ly.compareFunction=jx;const uy=new $x,cy=new ET,fy=new iy,i_=[],r_=[],s_=new Float32Array(16),o_=new Float32Array(9),a_=new Float32Array(4);function zo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=i_[r];if(s===void 0&&(s=new Float32Array(r),i_[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=r_[e];t===void 0&&(t=new Int32Array(e),r_[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function HC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function GC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function VC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function WC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function jC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;a_.set(i),n.uniformMatrix2fv(this.addr,!1,a_),Nt(t,i)}}function XC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;o_.set(i),n.uniformMatrix3fv(this.addr,!1,o_),Nt(t,i)}}function YC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;s_.set(i),n.uniformMatrix4fv(this.addr,!1,s_),Nt(t,i)}}function qC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function KC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function ZC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function QC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function JC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function eR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function tR(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function nR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?ly:ay;t.setTexture2D(e||s,r)}function iR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||cy,r)}function rR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||fy,r)}function sR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||uy,r)}function oR(n){switch(n){case 5126:return HC;case 35664:return GC;case 35665:return VC;case 35666:return WC;case 35674:return jC;case 35675:return XC;case 35676:return YC;case 5124:case 35670:return qC;case 35667:case 35671:return $C;case 35668:case 35672:return KC;case 35669:case 35673:return ZC;case 5125:return QC;case 36294:return JC;case 36295:return eR;case 36296:return tR;case 35678:case 36198:case 36298:case 36306:case 35682:return nR;case 35679:case 36299:case 36307:return iR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return sR}}function aR(n,e){n.uniform1fv(this.addr,e)}function lR(n,e){const t=zo(e,this.size,2);n.uniform2fv(this.addr,t)}function uR(n,e){const t=zo(e,this.size,3);n.uniform3fv(this.addr,t)}function cR(n,e){const t=zo(e,this.size,4);n.uniform4fv(this.addr,t)}function fR(n,e){const t=zo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function dR(n,e){const t=zo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function hR(n,e){const t=zo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function pR(n,e){n.uniform1iv(this.addr,e)}function mR(n,e){n.uniform2iv(this.addr,e)}function gR(n,e){n.uniform3iv(this.addr,e)}function _R(n,e){n.uniform4iv(this.addr,e)}function vR(n,e){n.uniform1uiv(this.addr,e)}function xR(n,e){n.uniform2uiv(this.addr,e)}function yR(n,e){n.uniform3uiv(this.addr,e)}function SR(n,e){n.uniform4uiv(this.addr,e)}function MR(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ay,s[o])}function ER(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||cy,s[o])}function TR(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||fy,s[o])}function wR(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);Dt(i,s)||(n.uniform1iv(this.addr,s),Nt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||uy,s[o])}function AR(n){switch(n){case 5126:return aR;case 35664:return lR;case 35665:return uR;case 35666:return cR;case 35674:return fR;case 35675:return dR;case 35676:return hR;case 5124:case 35670:return pR;case 35667:case 35671:return mR;case 35668:case 35672:return gR;case 35669:case 35673:return _R;case 5125:return vR;case 36294:return xR;case 36295:return yR;case 36296:return SR;case 35678:case 36198:case 36298:case 36306:case 35682:return MR;case 35679:case 36299:case 36307:return ER;case 35680:case 36300:case 36308:case 36293:return TR;case 36289:case 36303:case 36311:case 36292:return wR}}class CR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=oR(t.type)}}class RR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=AR(t.type)}}class bR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Pf=/(\w+)(\])?(\[|\.)?/g;function l_(n,e){n.seq.push(e),n.map[e.id]=e}function PR(n,e,t){const i=n.name,r=i.length;for(Pf.lastIndex=0;;){const s=Pf.exec(i),o=Pf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){l_(t,u===void 0?new CR(a,n,e):new RR(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new bR(a),l_(t,f)),t=f}}}class lu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);PR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function u_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const LR=37297;let DR=0;function NR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function UR(n){const e=Qe.getPrimaries(Qe.workingColorSpace),t=Qe.getPrimaries(n);let i;switch(e===t?i="":e===Vu&&t===Gu?i="LinearDisplayP3ToLinearSRGB":e===Gu&&t===Vu&&(i="LinearSRGBToLinearDisplayP3"),n){case Ji:case dc:return[i,"LinearTransferOETF"];case kt:case hp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function c_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+NR(n.getShaderSource(e),o)}else return r}function IR(n,e){const t=UR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function OR(n,e){let t;switch(e){case Y1:t="Linear";break;case q1:t="Reinhard";break;case $1:t="OptimizedCineon";break;case Ux:t="ACESFilmic";break;case Z1:t="AgX";break;case K1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function FR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(oo).join(`
`)}function kR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(oo).join(`
`)}function zR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function BR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function oo(n){return n!==""}function f_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function d_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zd(n){return n.replace(HR,VR)}const GR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function VR(n,e){let t=Ue[e];if(t===void 0){const i=GR.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zd(t)}const WR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function h_(n){return n.replace(WR,jR)}function jR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function p_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===S1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ki&&(e="SHADOWMAP_TYPE_VSM"),e}function YR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Lo:case Do:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Do:e="ENVMAP_MODE_REFRACTION";break}return e}function $R(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case j1:e="ENVMAP_BLENDING_MIX";break;case X1:e="ENVMAP_BLENDING_ADD";break}return e}function KR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function ZR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=XR(t),u=YR(t),c=qR(t),f=$R(t),h=KR(t),p=t.isWebGL2?"":FR(t),x=kR(t),m=zR(s),g=r.createProgram();let d,_,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(oo).join(`
`),d.length>0&&(d+=`
`),_=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(oo).join(`
`),_.length>0&&(_+=`
`)):(d=[p_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oo).join(`
`),_=[p,p_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?Ue.tonemapping_pars_fragment:"",t.toneMapping!==br?OR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,IR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(oo).join(`
`)),o=Zd(o),o=f_(o,t),o=d_(o,t),a=Zd(a),a=f_(a,t),a=d_(a,t),o=h_(o),a=h_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,d=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Dg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const y=v+d+o,T=v+_+a,E=u_(r,r.VERTEX_SHADER,y),M=u_(r,r.FRAGMENT_SHADER,T);r.attachShader(g,E),r.attachShader(g,M),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function b(j){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(g).trim(),L=r.getShaderInfoLog(E).trim(),I=r.getShaderInfoLog(M).trim();let z=!0,q=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,E,M);else{const D=c_(r,E,"vertex"),F=c_(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+D+`
`+F)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||I==="")&&(q=!1);q&&(j.diagnostics={runnable:z,programLog:K,vertexShader:{log:L,prefix:d},fragmentShader:{log:I,prefix:_}})}r.deleteShader(E),r.deleteShader(M),S=new lu(r,g),A=BR(r,g)}let S;this.getUniforms=function(){return S===void 0&&b(this),S};let A;this.getAttributes=function(){return A===void 0&&b(this),A};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,LR)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=DR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=M,this}let QR=0;class JR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new eb(e),t.set(e,i)),i}}class eb{constructor(e){this.id=QR++,this.code=e,this.usedTimes=0}}function tb(n,e,t,i,r,s,o){const a=new Kx,l=new JR,u=[],c=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return S===0?"uv":`uv${S}`}function g(S,A,O,j,K){const L=j.fog,I=K.geometry,z=S.isMeshStandardMaterial?j.environment:null,q=(S.isMeshStandardMaterial?t:e).get(S.envMap||z),D=q&&q.mapping===fc?q.image.height:null,F=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const k=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=k!==void 0?k.length:0;let Q=0;I.morphAttributes.position!==void 0&&(Q=1),I.morphAttributes.normal!==void 0&&(Q=2),I.morphAttributes.color!==void 0&&(Q=3);let Y,$,re,de;if(F){const rn=Si[F];Y=rn.vertexShader,$=rn.fragmentShader}else Y=S.vertexShader,$=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const me=n.getRenderTarget(),Pe=K.isInstancedMesh===!0,De=K.isBatchedMesh===!0,Te=!!S.map,je=!!S.matcap,B=!!q,nn=!!S.aoMap,ye=!!S.lightMap,Re=!!S.bumpMap,ge=!!S.normalMap,ct=!!S.displacementMap,Ie=!!S.emissiveMap,R=!!S.metalnessMap,w=!!S.roughnessMap,V=S.anisotropy>0,ne=S.clearcoat>0,ee=S.iridescence>0,ie=S.sheen>0,_e=S.transmission>0,ue=V&&!!S.anisotropyMap,he=ne&&!!S.clearcoatMap,Ee=ne&&!!S.clearcoatNormalMap,Oe=ne&&!!S.clearcoatRoughnessMap,J=ee&&!!S.iridescenceMap,Ze=ee&&!!S.iridescenceThicknessMap,Ge=ie&&!!S.sheenColorMap,Ce=ie&&!!S.sheenRoughnessMap,xe=!!S.specularMap,pe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,$e=_e&&!!S.transmissionMap,vt=_e&&!!S.thicknessMap,ke=!!S.gradientMap,se=!!S.alphaMap,P=S.alphaTest>0,ae=!!S.alphaHash,le=!!S.extensions,we=!!I.attributes.uv1,Se=!!I.attributes.uv2,tt=!!I.attributes.uv3;let nt=br;return S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(nt=n.toneMapping),{isWebGL2:c,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:Y,fragmentShader:$,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:Pe,instancingColor:Pe&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Ji,map:Te,matcap:je,envMap:B,envMapMode:B&&q.mapping,envMapCubeUVHeight:D,aoMap:nn,lightMap:ye,bumpMap:Re,normalMap:ge,displacementMap:h&&ct,emissiveMap:Ie,normalMapObjectSpace:ge&&S.normalMapType===uT,normalMapTangentSpace:ge&&S.normalMapType===Wx,metalnessMap:R,roughnessMap:w,anisotropy:V,anisotropyMap:ue,clearcoat:ne,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Oe,iridescence:ee,iridescenceMap:J,iridescenceThicknessMap:Ze,sheen:ie,sheenColorMap:Ge,sheenRoughnessMap:Ce,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ne,transmission:_e,transmissionMap:$e,thicknessMap:vt,gradientMap:ke,opaque:S.transparent===!1&&S.blending===hs,alphaMap:se,alphaTest:P,alphaHash:ae,combine:S.combine,mapUv:Te&&m(S.map.channel),aoMapUv:nn&&m(S.aoMap.channel),lightMapUv:ye&&m(S.lightMap.channel),bumpMapUv:Re&&m(S.bumpMap.channel),normalMapUv:ge&&m(S.normalMap.channel),displacementMapUv:ct&&m(S.displacementMap.channel),emissiveMapUv:Ie&&m(S.emissiveMap.channel),metalnessMapUv:R&&m(S.metalnessMap.channel),roughnessMapUv:w&&m(S.roughnessMap.channel),anisotropyMapUv:ue&&m(S.anisotropyMap.channel),clearcoatMapUv:he&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:J&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ge&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&m(S.sheenRoughnessMap.channel),specularMapUv:xe&&m(S.specularMap.channel),specularColorMapUv:pe&&m(S.specularColorMap.channel),specularIntensityMapUv:Ne&&m(S.specularIntensityMap.channel),transmissionMapUv:$e&&m(S.transmissionMap.channel),thicknessMapUv:vt&&m(S.thicknessMap.channel),alphaMapUv:se&&m(S.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ge||V),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Se,vertexUv3s:tt,pointsUvs:K.isPoints===!0&&!!I.attributes.uv&&(Te||se),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:K.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:Q,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:nt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&Qe.getTransfer(S.map.colorSpace)===ot,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ti,flipSided:S.side===wn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function d(S){const A=[];if(S.shaderID?A.push(S.shaderID):(A.push(S.customVertexShaderID),A.push(S.customFragmentShaderID)),S.defines!==void 0)for(const O in S.defines)A.push(O),A.push(S.defines[O]);return S.isRawShaderMaterial===!1&&(_(A,S),v(A,S),A.push(n.outputColorSpace)),A.push(S.customProgramCacheKey),A.join()}function _(S,A){S.push(A.precision),S.push(A.outputColorSpace),S.push(A.envMapMode),S.push(A.envMapCubeUVHeight),S.push(A.mapUv),S.push(A.alphaMapUv),S.push(A.lightMapUv),S.push(A.aoMapUv),S.push(A.bumpMapUv),S.push(A.normalMapUv),S.push(A.displacementMapUv),S.push(A.emissiveMapUv),S.push(A.metalnessMapUv),S.push(A.roughnessMapUv),S.push(A.anisotropyMapUv),S.push(A.clearcoatMapUv),S.push(A.clearcoatNormalMapUv),S.push(A.clearcoatRoughnessMapUv),S.push(A.iridescenceMapUv),S.push(A.iridescenceThicknessMapUv),S.push(A.sheenColorMapUv),S.push(A.sheenRoughnessMapUv),S.push(A.specularMapUv),S.push(A.specularColorMapUv),S.push(A.specularIntensityMapUv),S.push(A.transmissionMapUv),S.push(A.thicknessMapUv),S.push(A.combine),S.push(A.fogExp2),S.push(A.sizeAttenuation),S.push(A.morphTargetsCount),S.push(A.morphAttributeCount),S.push(A.numDirLights),S.push(A.numPointLights),S.push(A.numSpotLights),S.push(A.numSpotLightMaps),S.push(A.numHemiLights),S.push(A.numRectAreaLights),S.push(A.numDirLightShadows),S.push(A.numPointLightShadows),S.push(A.numSpotLightShadows),S.push(A.numSpotLightShadowsWithMaps),S.push(A.numLightProbes),S.push(A.shadowMapType),S.push(A.toneMapping),S.push(A.numClippingPlanes),S.push(A.numClipIntersection),S.push(A.depthPacking)}function v(S,A){a.disableAll(),A.isWebGL2&&a.enable(0),A.supportsVertexTextures&&a.enable(1),A.instancing&&a.enable(2),A.instancingColor&&a.enable(3),A.matcap&&a.enable(4),A.envMap&&a.enable(5),A.normalMapObjectSpace&&a.enable(6),A.normalMapTangentSpace&&a.enable(7),A.clearcoat&&a.enable(8),A.iridescence&&a.enable(9),A.alphaTest&&a.enable(10),A.vertexColors&&a.enable(11),A.vertexAlphas&&a.enable(12),A.vertexUv1s&&a.enable(13),A.vertexUv2s&&a.enable(14),A.vertexUv3s&&a.enable(15),A.vertexTangents&&a.enable(16),A.anisotropy&&a.enable(17),A.alphaHash&&a.enable(18),A.batching&&a.enable(19),S.push(a.mask),a.disableAll(),A.fog&&a.enable(0),A.useFog&&a.enable(1),A.flatShading&&a.enable(2),A.logarithmicDepthBuffer&&a.enable(3),A.skinning&&a.enable(4),A.morphTargets&&a.enable(5),A.morphNormals&&a.enable(6),A.morphColors&&a.enable(7),A.premultipliedAlpha&&a.enable(8),A.shadowMapEnabled&&a.enable(9),A.useLegacyLights&&a.enable(10),A.doubleSided&&a.enable(11),A.flipSided&&a.enable(12),A.useDepthPacking&&a.enable(13),A.dithering&&a.enable(14),A.transmission&&a.enable(15),A.sheen&&a.enable(16),A.opaque&&a.enable(17),A.pointsUvs&&a.enable(18),A.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const A=x[S.type];let O;if(A){const j=Si[A];O=FT.clone(j.uniforms)}else O=S.uniforms;return O}function T(S,A){let O;for(let j=0,K=u.length;j<K;j++){const L=u[j];if(L.cacheKey===A){O=L,++O.usedTimes;break}}return O===void 0&&(O=new ZR(n,A,S,s),u.push(O)),O}function E(S){if(--S.usedTimes===0){const A=u.indexOf(S);u[A]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function b(){l.dispose()}return{getParameters:g,getProgramCacheKey:d,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:M,programs:u,dispose:b}}function nb(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ib(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function m_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function g_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,x,m,g){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:m,group:g},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=m,d.group=g),e++,d}function a(f,h,p,x,m,g){const d=o(f,h,p,x,m,g);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,x,m,g){const d=o(f,h,p,x,m,g);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||ib),i.length>1&&i.sort(h||m_),r.length>1&&r.sort(h||m_)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function rb(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new g_,n.set(i,[o])):r>=s.length?(o=new g_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function sb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Xe};break;case"SpotLight":t={position:new G,direction:new G,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function ob(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let ab=0;function lb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ub(n,e){const t=new sb,i=ob(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new G);const s=new G,o=new Lt,a=new Lt;function l(c,f){let h=0,p=0,x=0;for(let j=0;j<9;j++)r.probe[j].set(0,0,0);let m=0,g=0,d=0,_=0,v=0,y=0,T=0,E=0,M=0,b=0,S=0;c.sort(lb);const A=f===!0?Math.PI:1;for(let j=0,K=c.length;j<K;j++){const L=c[j],I=L.color,z=L.intensity,q=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=I.r*z*A,p+=I.g*z*A,x+=I.b*z*A;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],z);S++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*A),L.castShadow){const k=L.shadow,Z=i.get(L);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.directionalShadow[m]=Z,r.directionalShadowMap[m]=D,r.directionalShadowMatrix[m]=L.shadow.matrix,y++}r.directional[m]=F,m++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(I).multiplyScalar(z*A),F.distance=q,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[d]=F;const k=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,k.updateMatrices(L),L.castShadow&&b++),r.spotLightMatrix[d]=k.matrix,L.castShadow){const Z=i.get(L);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,r.spotShadow[d]=Z,r.spotShadowMap[d]=D,E++}d++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(I).multiplyScalar(z),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=F,_++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*A),F.distance=L.distance,F.decay=L.decay,L.castShadow){const k=L.shadow,Z=i.get(L);Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,r.pointShadow[g]=Z,r.pointShadowMap[g]=D,r.pointShadowMatrix[g]=L.shadow.matrix,T++}r.point[g]=F,g++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(z*A),F.groundColor.copy(L.groundColor).multiplyScalar(z*A),r.hemi[v]=F,v++}}_>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const O=r.hash;(O.directionalLength!==m||O.pointLength!==g||O.spotLength!==d||O.rectAreaLength!==_||O.hemiLength!==v||O.numDirectionalShadows!==y||O.numPointShadows!==T||O.numSpotShadows!==E||O.numSpotMaps!==M||O.numLightProbes!==S)&&(r.directional.length=m,r.spot.length=d,r.rectArea.length=_,r.point.length=g,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=T,r.pointShadowMap.length=T,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=T,r.spotLightMatrix.length=E+M-b,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=S,O.directionalLength=m,O.pointLength=g,O.spotLength=d,O.rectAreaLength=_,O.hemiLength=v,O.numDirectionalShadows=y,O.numPointShadows=T,O.numSpotShadows=E,O.numSpotMaps=M,O.numLightProbes=S,r.version=ab++)}function u(c,f){let h=0,p=0,x=0,m=0,g=0;const d=f.matrixWorldInverse;for(let _=0,v=c.length;_<v;_++){const y=c[_];if(y.isDirectionalLight){const T=r.directional[h];T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),h++}else if(y.isSpotLight){const T=r.spot[x];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),x++}else if(y.isRectAreaLight){const T=r.rectArea[m];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(y.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const T=r.point[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(d),p++}else if(y.isHemisphereLight){const T=r.hemi[g];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(d),g++}}}return{setup:l,setupView:u,state:r}}function __(n,e){const t=new ub(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function cb(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new __(n,e),t.set(s,[l])):o>=a.length?(l=new __(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class fb extends il{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=aT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class db extends il{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const hb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pb=`uniform sampler2D shadow_pass;
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
}`;function mb(n,e,t){let i=new mp;const r=new qe,s=new qe,o=new zt,a=new fb({depthPacking:lT}),l=new db,u={},c=t.maxTextureSize,f={[Or]:wn,[wn]:Or,[Ti]:Ti},h=new Es({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:hb,fragmentShader:pb}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Hr;x.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new Ai(x,h),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nx;let d=this.type;this.render=function(E,M,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const S=n.getRenderTarget(),A=n.getActiveCubeFace(),O=n.getActiveMipmapLevel(),j=n.state;j.setBlending(Rr),j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const K=d!==ki&&this.type===ki,L=d===ki&&this.type!==ki;for(let I=0,z=E.length;I<z;I++){const q=E[I],D=q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||K===!0||L===!0){const Z=this.type!==ki?{minFilter:ln,magFilter:ln}:{};D.map!==null&&D.map.dispose(),D.map=new Ms(r.x,r.y,Z),D.map.texture.name=q.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const k=D.getViewportCount();for(let Z=0;Z<k;Z++){const Q=D.getViewport(Z);o.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),j.viewport(o),D.updateMatrices(q,Z),i=D.getFrustum(),y(M,b,D.camera,q,this.type)}D.isPointLightShadow!==!0&&this.type===ki&&_(D,b),D.needsUpdate=!1}d=this.type,g.needsUpdate=!1,n.setRenderTarget(S,A,O)};function _(E,M){const b=e.update(m);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ms(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(M,null,b,h,m,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(M,null,b,p,m,null)}function v(E,M,b,S){let A=null;const O=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(O!==void 0)A=O;else if(A=b.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const j=A.uuid,K=M.uuid;let L=u[j];L===void 0&&(L={},u[j]=L);let I=L[K];I===void 0&&(I=A.clone(),L[K]=I,M.addEventListener("dispose",T)),A=I}if(A.visible=M.visible,A.wireframe=M.wireframe,S===ki?A.side=M.shadowSide!==null?M.shadowSide:M.side:A.side=M.shadowSide!==null?M.shadowSide:f[M.side],A.alphaMap=M.alphaMap,A.alphaTest=M.alphaTest,A.map=M.map,A.clipShadows=M.clipShadows,A.clippingPlanes=M.clippingPlanes,A.clipIntersection=M.clipIntersection,A.displacementMap=M.displacementMap,A.displacementScale=M.displacementScale,A.displacementBias=M.displacementBias,A.wireframeLinewidth=M.wireframeLinewidth,A.linewidth=M.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const j=n.properties.get(A);j.light=b}return A}function y(E,M,b,S,A){if(E.visible===!1)return;if(E.layers.test(M.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&A===ki)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);const K=e.update(E),L=E.material;if(Array.isArray(L)){const I=K.groups;for(let z=0,q=I.length;z<q;z++){const D=I[z],F=L[D.materialIndex];if(F&&F.visible){const k=v(E,F,S,A);E.onBeforeShadow(n,E,M,b,K,k,D),n.renderBufferDirect(b,null,K,k,E,D),E.onAfterShadow(n,E,M,b,K,k,D)}}}else if(L.visible){const I=v(E,L,S,A);E.onBeforeShadow(n,E,M,b,K,I,null),n.renderBufferDirect(b,null,K,I,E,null),E.onAfterShadow(n,E,M,b,K,I,null)}}const j=E.children;for(let K=0,L=j.length;K<L;K++)y(j[K],M,b,S,A)}function T(E){E.target.removeEventListener("dispose",T);for(const b in u){const S=u[b],A=E.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function gb(n,e,t){const i=t.isWebGL2;function r(){let P=!1;const ae=new zt;let le=null;const we=new zt(0,0,0,0);return{setMask:function(Se){le!==Se&&!P&&(n.colorMask(Se,Se,Se,Se),le=Se)},setLocked:function(Se){P=Se},setClear:function(Se,tt,nt,Ut,rn){rn===!0&&(Se*=Ut,tt*=Ut,nt*=Ut),ae.set(Se,tt,nt,Ut),we.equals(ae)===!1&&(n.clearColor(Se,tt,nt,Ut),we.copy(ae))},reset:function(){P=!1,le=null,we.set(-1,0,0,0)}}}function s(){let P=!1,ae=null,le=null,we=null;return{setTest:function(Se){Se?De(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Se){ae!==Se&&!P&&(n.depthMask(Se),ae=Se)},setFunc:function(Se){if(le!==Se){switch(Se){case k1:n.depthFunc(n.NEVER);break;case z1:n.depthFunc(n.ALWAYS);break;case B1:n.depthFunc(n.LESS);break;case Bu:n.depthFunc(n.LEQUAL);break;case H1:n.depthFunc(n.EQUAL);break;case G1:n.depthFunc(n.GEQUAL);break;case V1:n.depthFunc(n.GREATER);break;case W1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Se}},setLocked:function(Se){P=Se},setClear:function(Se){we!==Se&&(n.clearDepth(Se),we=Se)},reset:function(){P=!1,ae=null,le=null,we=null}}}function o(){let P=!1,ae=null,le=null,we=null,Se=null,tt=null,nt=null,Ut=null,rn=null;return{setTest:function(it){P||(it?De(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(it){ae!==it&&!P&&(n.stencilMask(it),ae=it)},setFunc:function(it,sn,_i){(le!==it||we!==sn||Se!==_i)&&(n.stencilFunc(it,sn,_i),le=it,we=sn,Se=_i)},setOp:function(it,sn,_i){(tt!==it||nt!==sn||Ut!==_i)&&(n.stencilOp(it,sn,_i),tt=it,nt=sn,Ut=_i)},setLocked:function(it){P=it},setClear:function(it){rn!==it&&(n.clearStencil(it),rn=it)},reset:function(){P=!1,ae=null,le=null,we=null,Se=null,tt=null,nt=null,Ut=null,rn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let h={},p={},x=new WeakMap,m=[],g=null,d=!1,_=null,v=null,y=null,T=null,E=null,M=null,b=null,S=new Xe(0,0,0),A=0,O=!1,j=null,K=null,L=null,I=null,z=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const k=n.getParameter(n.VERSION);k.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(k)[1]),D=F>=1):k.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),D=F>=2);let Z=null,Q={};const Y=n.getParameter(n.SCISSOR_BOX),$=n.getParameter(n.VIEWPORT),re=new zt().fromArray(Y),de=new zt().fromArray($);function me(P,ae,le,we){const Se=new Uint8Array(4),tt=n.createTexture();n.bindTexture(P,tt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<le;nt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ae+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return tt}const Pe={};Pe[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),Pe[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pe[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pe[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(n.DEPTH_TEST),l.setFunc(Bu),Ie(!1),R(Qm),De(n.CULL_FACE),ge(Rr);function De(P){h[P]!==!0&&(n.enable(P),h[P]=!0)}function Te(P){h[P]!==!1&&(n.disable(P),h[P]=!1)}function je(P,ae){return p[P]!==ae?(n.bindFramebuffer(P,ae),p[P]=ae,i&&(P===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),P===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function B(P,ae){let le=m,we=!1;if(P)if(le=x.get(ae),le===void 0&&(le=[],x.set(ae,le)),P.isWebGLMultipleRenderTargets){const Se=P.texture;if(le.length!==Se.length||le[0]!==n.COLOR_ATTACHMENT0){for(let tt=0,nt=Se.length;tt<nt;tt++)le[tt]=n.COLOR_ATTACHMENT0+tt;le.length=Se.length,we=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,we=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,we=!0);we&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function nn(P){return g!==P?(n.useProgram(P),g=P,!0):!1}const ye={[ts]:n.FUNC_ADD,[E1]:n.FUNC_SUBTRACT,[T1]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[ng]=n.MIN,ye[ig]=n.MAX;else{const P=e.get("EXT_blend_minmax");P!==null&&(ye[ng]=P.MIN_EXT,ye[ig]=P.MAX_EXT)}const Re={[w1]:n.ZERO,[A1]:n.ONE,[C1]:n.SRC_COLOR,[Gd]:n.SRC_ALPHA,[N1]:n.SRC_ALPHA_SATURATE,[L1]:n.DST_COLOR,[b1]:n.DST_ALPHA,[R1]:n.ONE_MINUS_SRC_COLOR,[Vd]:n.ONE_MINUS_SRC_ALPHA,[D1]:n.ONE_MINUS_DST_COLOR,[P1]:n.ONE_MINUS_DST_ALPHA,[U1]:n.CONSTANT_COLOR,[I1]:n.ONE_MINUS_CONSTANT_COLOR,[O1]:n.CONSTANT_ALPHA,[F1]:n.ONE_MINUS_CONSTANT_ALPHA};function ge(P,ae,le,we,Se,tt,nt,Ut,rn,it){if(P===Rr){d===!0&&(Te(n.BLEND),d=!1);return}if(d===!1&&(De(n.BLEND),d=!0),P!==M1){if(P!==_||it!==O){if((v!==ts||E!==ts)&&(n.blendEquation(n.FUNC_ADD),v=ts,E=ts),it)switch(P){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jm:n.blendFunc(n.ONE,n.ONE);break;case eg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Jm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}y=null,T=null,M=null,b=null,S.set(0,0,0),A=0,_=P,O=it}return}Se=Se||ae,tt=tt||le,nt=nt||we,(ae!==v||Se!==E)&&(n.blendEquationSeparate(ye[ae],ye[Se]),v=ae,E=Se),(le!==y||we!==T||tt!==M||nt!==b)&&(n.blendFuncSeparate(Re[le],Re[we],Re[tt],Re[nt]),y=le,T=we,M=tt,b=nt),(Ut.equals(S)===!1||rn!==A)&&(n.blendColor(Ut.r,Ut.g,Ut.b,rn),S.copy(Ut),A=rn),_=P,O=!1}function ct(P,ae){P.side===Ti?Te(n.CULL_FACE):De(n.CULL_FACE);let le=P.side===wn;ae&&(le=!le),Ie(le),P.blending===hs&&P.transparent===!1?ge(Rr):ge(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const we=P.stencilWrite;u.setTest(we),we&&(u.setMask(P.stencilWriteMask),u.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),u.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),V(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(P){j!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),j=P)}function R(P){P!==x1?(De(n.CULL_FACE),P!==K&&(P===Qm?n.cullFace(n.BACK):P===y1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),K=P}function w(P){P!==L&&(D&&n.lineWidth(P),L=P)}function V(P,ae,le){P?(De(n.POLYGON_OFFSET_FILL),(I!==ae||z!==le)&&(n.polygonOffset(ae,le),I=ae,z=le)):Te(n.POLYGON_OFFSET_FILL)}function ne(P){P?De(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function ee(P){P===void 0&&(P=n.TEXTURE0+q-1),Z!==P&&(n.activeTexture(P),Z=P)}function ie(P,ae,le){le===void 0&&(Z===null?le=n.TEXTURE0+q-1:le=Z);let we=Q[le];we===void 0&&(we={type:void 0,texture:void 0},Q[le]=we),(we.type!==P||we.texture!==ae)&&(Z!==le&&(n.activeTexture(le),Z=le),n.bindTexture(P,ae||Pe[P]),we.type=P,we.texture=ae)}function _e(){const P=Q[Z];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ze(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ge(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(P){re.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),re.copy(P))}function $e(P){de.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),de.copy(P))}function vt(P,ae){let le=f.get(ae);le===void 0&&(le=new WeakMap,f.set(ae,le));let we=le.get(P);we===void 0&&(we=n.getUniformBlockIndex(ae,P.name),le.set(P,we))}function ke(P,ae){const we=f.get(ae).get(P);c.get(ae)!==we&&(n.uniformBlockBinding(ae,we,P.__bindingPointIndex),c.set(ae,we))}function se(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},Z=null,Q={},p={},x=new WeakMap,m=[],g=null,d=!1,_=null,v=null,y=null,T=null,E=null,M=null,b=null,S=new Xe(0,0,0),A=0,O=!1,j=null,K=null,L=null,I=null,z=null,re.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:Te,bindFramebuffer:je,drawBuffers:B,useProgram:nn,setBlending:ge,setMaterial:ct,setFlipSided:Ie,setCullFace:R,setLineWidth:w,setPolygonOffset:V,setScissorTest:ne,activeTexture:ee,bindTexture:ie,unbindTexture:_e,compressedTexImage2D:ue,compressedTexImage3D:he,texImage2D:xe,texImage3D:pe,updateUBOMapping:vt,uniformBlockBinding:ke,texStorage2D:Ge,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:Oe,compressedTexSubImage2D:J,compressedTexSubImage3D:Ze,scissor:Ne,viewport:$e,reset:se}}function _b(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,w){return p?new OffscreenCanvas(R,w):Ya("canvas")}function m(R,w,V,ne){let ee=1;if((R.width>ne||R.height>ne)&&(ee=ne/Math.max(R.width,R.height)),ee<1||w===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ie=w?Kd:Math.floor,_e=ie(ee*R.width),ue=ie(ee*R.height);f===void 0&&(f=x(_e,ue));const he=V?x(_e,ue):f;return he.width=_e,he.height=ue,he.getContext("2d").drawImage(R,0,0,_e,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+_e+"x"+ue+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function g(R){return Ng(R.width)&&Ng(R.height)}function d(R){return a?!1:R.wrapS!==di||R.wrapT!==di||R.minFilter!==ln&&R.minFilter!==$n}function _(R,w){return R.generateMipmaps&&w&&R.minFilter!==ln&&R.minFilter!==$n}function v(R){n.generateMipmap(R)}function y(R,w,V,ne,ee=!1){if(a===!1)return w;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=w;if(w===n.RED&&(V===n.FLOAT&&(ie=n.R32F),V===n.HALF_FLOAT&&(ie=n.R16F),V===n.UNSIGNED_BYTE&&(ie=n.R8)),w===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(ie=n.R8UI),V===n.UNSIGNED_SHORT&&(ie=n.R16UI),V===n.UNSIGNED_INT&&(ie=n.R32UI),V===n.BYTE&&(ie=n.R8I),V===n.SHORT&&(ie=n.R16I),V===n.INT&&(ie=n.R32I)),w===n.RG&&(V===n.FLOAT&&(ie=n.RG32F),V===n.HALF_FLOAT&&(ie=n.RG16F),V===n.UNSIGNED_BYTE&&(ie=n.RG8)),w===n.RGBA){const _e=ee?Hu:Qe.getTransfer(ne);V===n.FLOAT&&(ie=n.RGBA32F),V===n.HALF_FLOAT&&(ie=n.RGBA16F),V===n.UNSIGNED_BYTE&&(ie=_e===ot?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function T(R,w,V){return _(R,V)===!0||R.isFramebufferTexture&&R.minFilter!==ln&&R.minFilter!==$n?Math.log2(Math.max(w.width,w.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?w.mipmaps.length:1}function E(R){return R===ln||R===rg||R===ef?n.NEAREST:n.LINEAR}function M(R){const w=R.target;w.removeEventListener("dispose",M),S(w),w.isVideoTexture&&c.delete(w)}function b(R){const w=R.target;w.removeEventListener("dispose",b),O(w)}function S(R){const w=i.get(R);if(w.__webglInit===void 0)return;const V=R.source,ne=h.get(V);if(ne){const ee=ne[w.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&A(R),Object.keys(ne).length===0&&h.delete(V)}i.remove(R)}function A(R){const w=i.get(R);n.deleteTexture(w.__webglTexture);const V=R.source,ne=h.get(V);delete ne[w.__cacheKey],o.memory.textures--}function O(R){const w=R.texture,V=i.get(R),ne=i.get(w);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(V.__webglFramebuffer[ee]))for(let ie=0;ie<V.__webglFramebuffer[ee].length;ie++)n.deleteFramebuffer(V.__webglFramebuffer[ee][ie]);else n.deleteFramebuffer(V.__webglFramebuffer[ee]);V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer[ee])}else{if(Array.isArray(V.__webglFramebuffer))for(let ee=0;ee<V.__webglFramebuffer.length;ee++)n.deleteFramebuffer(V.__webglFramebuffer[ee]);else n.deleteFramebuffer(V.__webglFramebuffer);if(V.__webglDepthbuffer&&n.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&n.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ee=0;ee<V.__webglColorRenderbuffer.length;ee++)V.__webglColorRenderbuffer[ee]&&n.deleteRenderbuffer(V.__webglColorRenderbuffer[ee]);V.__webglDepthRenderbuffer&&n.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let ee=0,ie=w.length;ee<ie;ee++){const _e=i.get(w[ee]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),o.memory.textures--),i.remove(w[ee])}i.remove(w),i.remove(R)}let j=0;function K(){j=0}function L(){const R=j;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),j+=1,R}function I(R){const w=[];return w.push(R.wrapS),w.push(R.wrapT),w.push(R.wrapR||0),w.push(R.magFilter),w.push(R.minFilter),w.push(R.anisotropy),w.push(R.internalFormat),w.push(R.format),w.push(R.type),w.push(R.generateMipmaps),w.push(R.premultiplyAlpha),w.push(R.flipY),w.push(R.unpackAlignment),w.push(R.colorSpace),w.join()}function z(R,w){const V=i.get(R);if(R.isVideoTexture&&ct(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const ne=R.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(V,R,w);return}}t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+w)}function q(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){re(V,R,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+w)}function D(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){re(V,R,w);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+w)}function F(R,w){const V=i.get(R);if(R.version>0&&V.__version!==R.version){de(V,R,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+w)}const k={[Xd]:n.REPEAT,[di]:n.CLAMP_TO_EDGE,[Yd]:n.MIRRORED_REPEAT},Z={[ln]:n.NEAREST,[rg]:n.NEAREST_MIPMAP_NEAREST,[ef]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[Q1]:n.LINEAR_MIPMAP_NEAREST,[ja]:n.LINEAR_MIPMAP_LINEAR},Q={[cT]:n.NEVER,[gT]:n.ALWAYS,[fT]:n.LESS,[jx]:n.LEQUAL,[dT]:n.EQUAL,[mT]:n.GEQUAL,[hT]:n.GREATER,[pT]:n.NOTEQUAL};function Y(R,w,V){if(V?(n.texParameteri(R,n.TEXTURE_WRAP_S,k[w.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,k[w.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,k[w.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Z[w.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Z[w.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==di||w.wrapT!==di)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,E(w.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,E(w.minFilter)),w.minFilter!==ln&&w.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Q[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===ln||w.minFilter!==ef&&w.minFilter!==ja||w.type===_r&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Xa&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(R,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function $(R,w){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,w.addEventListener("dispose",M));const ne=w.source;let ee=h.get(ne);ee===void 0&&(ee={},h.set(ne,ee));const ie=I(w);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ee[ie].usedTimes++;const _e=ee[R.__cacheKey];_e!==void 0&&(ee[R.__cacheKey].usedTimes--,_e.usedTimes===0&&A(w)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return V}function re(R,w,V){let ne=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ne=n.TEXTURE_3D);const ee=$(R,w),ie=w.source;t.bindTexture(ne,R.__webglTexture,n.TEXTURE0+V);const _e=i.get(ie);if(ie.version!==_e.__version||ee===!0){t.activeTexture(n.TEXTURE0+V);const ue=Qe.getPrimaries(Qe.workingColorSpace),he=w.colorSpace===Zn?null:Qe.getPrimaries(w.colorSpace),Ee=w.colorSpace===Zn||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=d(w)&&g(w.image)===!1;let J=m(w.image,Oe,!1,r.maxTextureSize);J=Ie(w,J);const Ze=g(J)||a,Ge=s.convert(w.format,w.colorSpace);let Ce=s.convert(w.type),xe=y(w.internalFormat,Ge,Ce,w.colorSpace,w.isVideoTexture);Y(ne,w,Ze);let pe;const Ne=w.mipmaps,$e=a&&w.isVideoTexture!==!0&&xe!==Gx,vt=_e.__version===void 0||ee===!0,ke=T(w,J,Ze);if(w.isDepthTexture)xe=n.DEPTH_COMPONENT,a?w.type===_r?xe=n.DEPTH_COMPONENT32F:w.type===gr?xe=n.DEPTH_COMPONENT24:w.type===ps?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:w.type===_r&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===ms&&xe===n.DEPTH_COMPONENT&&w.type!==dp&&w.type!==gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=gr,Ce=s.convert(w.type)),w.format===No&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,w.type!==ps&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ps,Ce=s.convert(w.type))),vt&&($e?t.texStorage2D(n.TEXTURE_2D,1,xe,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,xe,J.width,J.height,0,Ge,Ce,null));else if(w.isDataTexture)if(Ne.length>0&&Ze){$e&&vt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let se=0,P=Ne.length;se<P;se++)pe=Ne[se],$e?t.texSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,Ge,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,se,xe,pe.width,pe.height,0,Ge,Ce,pe.data);w.generateMipmaps=!1}else $e?(vt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,Ge,Ce,J.data)):t.texImage2D(n.TEXTURE_2D,0,xe,J.width,J.height,0,Ge,Ce,J.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){$e&&vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,Ne[0].width,Ne[0].height,J.depth);for(let se=0,P=Ne.length;se<P;se++)pe=Ne[se],w.format!==hi?Ge!==null?$e?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,J.depth,Ge,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,se,xe,pe.width,pe.height,J.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage3D(n.TEXTURE_2D_ARRAY,se,0,0,0,pe.width,pe.height,J.depth,Ge,Ce,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,se,xe,pe.width,pe.height,J.depth,0,Ge,Ce,pe.data)}else{$e&&vt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let se=0,P=Ne.length;se<P;se++)pe=Ne[se],w.format!==hi?Ge!==null?$e?t.compressedTexSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,Ge,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,se,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?t.texSubImage2D(n.TEXTURE_2D,se,0,0,pe.width,pe.height,Ge,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,se,xe,pe.width,pe.height,0,Ge,Ce,pe.data)}else if(w.isDataArrayTexture)$e?(vt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Ge,Ce,J.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,J.width,J.height,J.depth,0,Ge,Ce,J.data);else if(w.isData3DTexture)$e?(vt&&t.texStorage3D(n.TEXTURE_3D,ke,xe,J.width,J.height,J.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Ge,Ce,J.data)):t.texImage3D(n.TEXTURE_3D,0,xe,J.width,J.height,J.depth,0,Ge,Ce,J.data);else if(w.isFramebufferTexture){if(vt)if($e)t.texStorage2D(n.TEXTURE_2D,ke,xe,J.width,J.height);else{let se=J.width,P=J.height;for(let ae=0;ae<ke;ae++)t.texImage2D(n.TEXTURE_2D,ae,xe,se,P,0,Ge,Ce,null),se>>=1,P>>=1}}else if(Ne.length>0&&Ze){$e&&vt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let se=0,P=Ne.length;se<P;se++)pe=Ne[se],$e?t.texSubImage2D(n.TEXTURE_2D,se,0,0,Ge,Ce,pe):t.texImage2D(n.TEXTURE_2D,se,xe,Ge,Ce,pe);w.generateMipmaps=!1}else $e?(vt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,J.width,J.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ge,Ce,J)):t.texImage2D(n.TEXTURE_2D,0,xe,Ge,Ce,J);_(w,Ze)&&v(ne),_e.__version=ie.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function de(R,w,V){if(w.image.length!==6)return;const ne=$(R,w),ee=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);const ie=i.get(ee);if(ee.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+V);const _e=Qe.getPrimaries(Qe.workingColorSpace),ue=w.colorSpace===Zn?null:Qe.getPrimaries(w.colorSpace),he=w.colorSpace===Zn||_e===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,Oe=w.image[0]&&w.image[0].isDataTexture,J=[];for(let se=0;se<6;se++)!Ee&&!Oe?J[se]=m(w.image[se],!1,!0,r.maxCubemapSize):J[se]=Oe?w.image[se].image:w.image[se],J[se]=Ie(w,J[se]);const Ze=J[0],Ge=g(Ze)||a,Ce=s.convert(w.format,w.colorSpace),xe=s.convert(w.type),pe=y(w.internalFormat,Ce,xe,w.colorSpace),Ne=a&&w.isVideoTexture!==!0,$e=ie.__version===void 0||ne===!0;let vt=T(w,Ze,Ge);Y(n.TEXTURE_CUBE_MAP,w,Ge);let ke;if(Ee){Ne&&$e&&t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,pe,Ze.width,Ze.height);for(let se=0;se<6;se++){ke=J[se].mipmaps;for(let P=0;P<ke.length;P++){const ae=ke[P];w.format!==hi?Ce!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,0,0,ae.width,ae.height,Ce,xe,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P,pe,ae.width,ae.height,0,Ce,xe,ae.data)}}}else{ke=w.mipmaps,Ne&&$e&&(ke.length>0&&vt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,vt,pe,J[0].width,J[0].height));for(let se=0;se<6;se++)if(Oe){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,J[se].width,J[se].height,Ce,xe,J[se].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,pe,J[se].width,J[se].height,0,Ce,xe,J[se].data);for(let P=0;P<ke.length;P++){const le=ke[P].image[se].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,le.width,le.height,Ce,xe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,pe,le.width,le.height,0,Ce,xe,le.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ce,xe,J[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,pe,Ce,xe,J[se]);for(let P=0;P<ke.length;P++){const ae=ke[P];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,0,0,Ce,xe,ae.image[se]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+se,P+1,pe,Ce,xe,ae.image[se])}}}_(w,Ge)&&v(n.TEXTURE_CUBE_MAP),ie.__version=ee.version,w.onUpdate&&w.onUpdate(w)}R.__version=w.version}function me(R,w,V,ne,ee,ie){const _e=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),he=y(V.internalFormat,_e,ue,V.colorSpace);if(!i.get(w).__hasExternalTextures){const Oe=Math.max(1,w.width>>ie),J=Math.max(1,w.height>>ie);ee===n.TEXTURE_3D||ee===n.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,he,Oe,J,w.depth,0,_e,ue,null):t.texImage2D(ee,ie,he,Oe,J,0,_e,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),ge(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ee,i.get(V).__webglTexture,0,Re(w)):(ee===n.TEXTURE_2D||ee>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ee,i.get(V).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(R,w,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),w.depthBuffer&&!w.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(V||ge(w)){const ee=w.depthTexture;ee&&ee.isDepthTexture&&(ee.type===_r?ne=n.DEPTH_COMPONENT32F:ee.type===gr&&(ne=n.DEPTH_COMPONENT24));const ie=Re(w);ge(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(w.depthBuffer&&w.stencilBuffer){const ne=Re(w);V&&ge(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,w.width,w.height):ge(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const ne=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0;ee<ne.length;ee++){const ie=ne[ee],_e=s.convert(ie.format,ie.colorSpace),ue=s.convert(ie.type),he=y(ie.internalFormat,_e,ue,ie.colorSpace),Ee=Re(w);V&&ge(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,he,w.width,w.height):ge(w)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,he,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,he,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(R,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),z(w.depthTexture,0);const ne=i.get(w.depthTexture).__webglTexture,ee=Re(w);if(w.depthTexture.format===ms)ge(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(w.depthTexture.format===No)ge(w)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ee):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Te(R){const w=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!w.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");De(w.__webglFramebuffer,R)}else if(V){w.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ne]),w.__webglDepthbuffer[ne]=n.createRenderbuffer(),Pe(w.__webglDepthbuffer[ne],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),Pe(w.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(R,w,V){const ne=i.get(R);w!==void 0&&me(ne.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Te(R)}function B(R){const w=R.texture,V=i.get(R),ne=i.get(w);R.addEventListener("dispose",b),R.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=w.version,o.memory.textures++);const ee=R.isWebGLCubeRenderTarget===!0,ie=R.isWebGLMultipleRenderTargets===!0,_e=g(R)||a;if(ee){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let he=0;he<w.mipmaps.length;he++)V.__webglFramebuffer[ue][he]=n.createFramebuffer()}else V.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&w.mipmaps&&w.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<w.mipmaps.length;ue++)V.__webglFramebuffer[ue]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const ue=R.texture;for(let he=0,Ee=ue.length;he<Ee;he++){const Oe=i.get(ue[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ge(R)===!1){const ue=ie?w:[w];V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<ue.length;he++){const Ee=ue[he];V.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Oe=s.convert(Ee.format,Ee.colorSpace),J=s.convert(Ee.type),Ze=y(Ee.internalFormat,Oe,J,Ee.colorSpace,R.isXRRenderTarget===!0),Ge=Re(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ge,Ze,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,V.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),Pe(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ee){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Y(n.TEXTURE_CUBE_MAP,w,_e);for(let ue=0;ue<6;ue++)if(a&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)me(V.__webglFramebuffer[ue][he],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else me(V.__webglFramebuffer[ue],R,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);_(w,_e)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const ue=R.texture;for(let he=0,Ee=ue.length;he<Ee;he++){const Oe=ue[he],J=i.get(Oe);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),Y(n.TEXTURE_2D,Oe,_e),me(V.__webglFramebuffer,R,Oe,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),_(Oe,_e)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,ne.__webglTexture),Y(ue,w,_e),a&&w.mipmaps&&w.mipmaps.length>0)for(let he=0;he<w.mipmaps.length;he++)me(V.__webglFramebuffer[he],R,w,n.COLOR_ATTACHMENT0,ue,he);else me(V.__webglFramebuffer,R,w,n.COLOR_ATTACHMENT0,ue,0);_(w,_e)&&v(ue),t.unbindTexture()}R.depthBuffer&&Te(R)}function nn(R){const w=g(R)||a,V=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let ne=0,ee=V.length;ne<ee;ne++){const ie=V[ne];if(_(ie,w)){const _e=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(ie).__webglTexture;t.bindTexture(_e,ue),v(_e),t.unbindTexture()}}}function ye(R){if(a&&R.samples>0&&ge(R)===!1){const w=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],V=R.width,ne=R.height;let ee=n.COLOR_BUFFER_BIT;const ie=[],_e=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(R),he=R.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){ie.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&ie.push(_e);const Oe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(ee|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(ee|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee]),Oe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[_e]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_e])),he){const J=i.get(w[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,V,ne,0,0,V,ne,ee,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee]);const Oe=i.get(w[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Re(R){return Math.min(r.maxSamples,R.samples)}function ge(R){const w=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(R){const w=o.render.frame;c.get(R)!==w&&(c.set(R,w),R.update())}function Ie(R,w){const V=R.colorSpace,ne=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===qd||V!==Ji&&V!==Zn&&(Qe.getTransfer(V)===ot?a===!1?e.has("EXT_sRGB")===!0&&ne===hi?(R.format=qd,R.minFilter=$n,R.generateMipmaps=!1):w=Yx.sRGBToLinear(w):(ne!==hi||ee!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),w}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=z,this.setTexture2DArray=q,this.setTexture3D=D,this.setTextureCube=F,this.rebindTextures=je,this.setupRenderTarget=B,this.updateRenderTargetMipmap=nn,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=ge}function vb(n,e,t){const i=t.isWebGL2;function r(s,o=Zn){let a;const l=Qe.getTransfer(o);if(s===Pr)return n.UNSIGNED_BYTE;if(s===Fx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===kx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===J1)return n.BYTE;if(s===eT)return n.SHORT;if(s===dp)return n.UNSIGNED_SHORT;if(s===Ox)return n.INT;if(s===gr)return n.UNSIGNED_INT;if(s===_r)return n.FLOAT;if(s===Xa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===tT)return n.ALPHA;if(s===hi)return n.RGBA;if(s===nT)return n.LUMINANCE;if(s===iT)return n.LUMINANCE_ALPHA;if(s===ms)return n.DEPTH_COMPONENT;if(s===No)return n.DEPTH_STENCIL;if(s===qd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===rT)return n.RED;if(s===zx)return n.RED_INTEGER;if(s===sT)return n.RG;if(s===Bx)return n.RG_INTEGER;if(s===Hx)return n.RGBA_INTEGER;if(s===tf||s===nf||s===rf||s===sf)if(l===ot)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===tf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===tf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sg||s===og||s===ag||s===lg)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===og)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ag)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===lg)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ug||s===cg)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===ug)return l===ot?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===cg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===fg||s===dg||s===hg||s===pg||s===mg||s===gg||s===_g||s===vg||s===xg||s===yg||s===Sg||s===Mg||s===Eg||s===Tg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===fg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===dg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===hg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===pg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===mg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===gg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===_g)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===vg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===xg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Sg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Mg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Eg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Tg)return l===ot?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===of||s===wg||s===Ag)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===of)return l===ot?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===wg)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ag)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===oT||s===Cg||s===Rg||s===bg)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===of)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Cg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Rg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===bg)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ps?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class xb extends Kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class aa extends en{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yb={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const m of e.hand.values()){const g=t.getJointPose(m,i),d=this._getHandJoint(u,m);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Sb extends ko{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,x=null;const m=t.getContextAttributes();let g=null,d=null;const _=[],v=[],y=new qe;let T=null;const E=new Kn;E.layers.enable(1),E.viewport=new zt;const M=new Kn;M.layers.enable(2),M.viewport=new zt;const b=[E,M],S=new xb;S.layers.enable(1),S.layers.enable(2);let A=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=_[Y];return $===void 0&&($=new Lf,_[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=_[Y];return $===void 0&&($=new Lf,_[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=_[Y];return $===void 0&&($=new Lf,_[Y]=$),$.getHandSpace()};function j(Y){const $=v.indexOf(Y.inputSource);if($===-1)return;const re=_[$];re!==void 0&&(re.update(Y.inputSource,Y.frame,u||o),re.dispatchEvent({type:Y.type,data:Y.inputSource}))}function K(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let Y=0;Y<_.length;Y++){const $=v[Y];$!==null&&(v[Y]=null,_[Y].disconnect($))}A=null,O=null,e.setRenderTarget(g),p=null,h=null,f=null,r=null,d=null,Q.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(Y){u=Y},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const $={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,$),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Ms(p.framebufferWidth,p.framebufferHeight,{format:hi,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,re=null,de=null;m.depth&&(de=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,$=m.stencil?No:ms,re=m.stencil?ps:gr);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),d=new Ms(h.textureWidth,h.textureHeight,{format:hi,type:Pr,depthTexture:new oy(h.textureWidth,h.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const Pe=e.properties.get(d);Pe.__ignoreDepthValues=h.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Q.setContext(r),Q.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(Y){for(let $=0;$<Y.removed.length;$++){const re=Y.removed[$],de=v.indexOf(re);de>=0&&(v[de]=null,_[de].disconnect(re))}for(let $=0;$<Y.added.length;$++){const re=Y.added[$];let de=v.indexOf(re);if(de===-1){for(let Pe=0;Pe<_.length;Pe++)if(Pe>=v.length){v.push(re),de=Pe;break}else if(v[Pe]===null){v[Pe]=re,de=Pe;break}if(de===-1)break}const me=_[de];me&&me.connect(re)}}const I=new G,z=new G;function q(Y,$,re){I.setFromMatrixPosition($.matrixWorld),z.setFromMatrixPosition(re.matrixWorld);const de=I.distanceTo(z),me=$.projectionMatrix.elements,Pe=re.projectionMatrix.elements,De=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),je=(me[9]+1)/me[5],B=(me[9]-1)/me[5],nn=(me[8]-1)/me[0],ye=(Pe[8]+1)/Pe[0],Re=De*nn,ge=De*ye,ct=de/(-nn+ye),Ie=ct*-nn;$.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ie),Y.translateZ(ct),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=De+ct,w=Te+ct,V=Re-Ie,ne=ge+(de-Ie),ee=je*Te/w*R,ie=B*Te/w*R;Y.projectionMatrix.makePerspective(V,ne,ee,ie,R,w),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function D(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;S.near=M.near=E.near=Y.near,S.far=M.far=E.far=Y.far,(A!==S.near||O!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),A=S.near,O=S.far);const $=Y.parent,re=S.cameras;D(S,$);for(let de=0;de<re.length;de++)D(re[de],$);re.length===2?q(S,E,M):S.projectionMatrix.copy(E.projectionMatrix),F(Y,S,$)};function F(Y,$,re){re===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(re.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=$d*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(Y){l=Y,h!==null&&(h.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)};let k=null;function Z(Y,$){if(c=$.getViewerPose(u||o),x=$,c!==null){const re=c.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let de=!1;re.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let me=0;me<re.length;me++){const Pe=re[me];let De=null;if(p!==null)De=p.getViewport(Pe);else{const je=f.getViewSubImage(h,Pe);De=je.viewport,me===0&&(e.setRenderTargetTextures(d,je.colorTexture,h.ignoreDepthValues?void 0:je.depthStencilTexture),e.setRenderTarget(d))}let Te=b[me];Te===void 0&&(Te=new Kn,Te.layers.enable(me),Te.viewport=new zt,b[me]=Te),Te.matrix.fromArray(Pe.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(Pe.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),me===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(Te)}}for(let re=0;re<_.length;re++){const de=v[re],me=_[re];de!==null&&me!==void 0&&me.update(de,$,u||o)}k&&k(Y,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),x=null}const Q=new ry;Q.setAnimationLoop(Z),this.setAnimationLoop=function(Y){k=Y},this.dispose=function(){}}}function Mb(n,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function i(g,d){d.color.getRGB(g.fogColor.value,ty(n)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function r(g,d,_,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(g,d):d.isMeshToonMaterial?(s(g,d),f(g,d)):d.isMeshPhongMaterial?(s(g,d),c(g,d)):d.isMeshStandardMaterial?(s(g,d),h(g,d),d.isMeshPhysicalMaterial&&p(g,d,y)):d.isMeshMatcapMaterial?(s(g,d),x(g,d)):d.isMeshDepthMaterial?s(g,d):d.isMeshDistanceMaterial?(s(g,d),m(g,d)):d.isMeshNormalMaterial?s(g,d):d.isLineBasicMaterial?(o(g,d),d.isLineDashedMaterial&&a(g,d)):d.isPointsMaterial?l(g,d,_,v):d.isSpriteMaterial?u(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===wn&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===wn&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const _=e.get(d).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap){g.lightMap.value=d.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=d.lightMapIntensity*v,t(d.lightMap,g.lightMapTransform)}d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function o(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function a(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,_,v){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*_,g.scale.value=v*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function u(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function f(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function h(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),e.get(d).envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,_){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===wn&&g.clearcoatNormalScale.value.negate())),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,d){d.matcap&&(g.matcap.value=d.matcap)}function m(g,d){const _=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(_.matrixWorld),g.nearDistance.value=_.shadow.camera.near,g.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Eb(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,v){const y=v.program;i.uniformBlockBinding(_,y)}function u(_,v){let y=r[_.id];y===void 0&&(x(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",g));const T=v.program;i.updateUBOMapping(_,T);const E=e.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function c(_){const v=f();_.__bindingPointIndex=v;const y=n.createBuffer(),T=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,T,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const v=r[_.id],y=_.uniforms,T=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let E=0,M=y.length;E<M;E++){const b=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,A=b.length;S<A;S++){const O=b[S];if(p(O,E,S,T)===!0){const j=O.__offset,K=Array.isArray(O.value)?O.value:[O.value];let L=0;for(let I=0;I<K.length;I++){const z=K[I],q=m(z);typeof z=="number"||typeof z=="boolean"?(O.__data[0]=z,n.bufferSubData(n.UNIFORM_BUFFER,j+L,O.__data)):z.isMatrix3?(O.__data[0]=z.elements[0],O.__data[1]=z.elements[1],O.__data[2]=z.elements[2],O.__data[3]=0,O.__data[4]=z.elements[3],O.__data[5]=z.elements[4],O.__data[6]=z.elements[5],O.__data[7]=0,O.__data[8]=z.elements[6],O.__data[9]=z.elements[7],O.__data[10]=z.elements[8],O.__data[11]=0):(z.toArray(O.__data,L),L+=q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,j,O.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,v,y,T){const E=_.value,M=v+"_"+y;if(T[M]===void 0)return typeof E=="number"||typeof E=="boolean"?T[M]=E:T[M]=E.clone(),!0;{const b=T[M];if(typeof E=="number"||typeof E=="boolean"){if(b!==E)return T[M]=E,!0}else if(b.equals(E)===!1)return b.copy(E),!0}return!1}function x(_){const v=_.uniforms;let y=0;const T=16;for(let M=0,b=v.length;M<b;M++){const S=Array.isArray(v[M])?v[M]:[v[M]];for(let A=0,O=S.length;A<O;A++){const j=S[A],K=Array.isArray(j.value)?j.value:[j.value];for(let L=0,I=K.length;L<I;L++){const z=K[L],q=m(z),D=y%T;D!==0&&T-D<q.boundary&&(y+=T-D),j.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),j.__offset=y,y+=q.storage}}}const E=y%T;return E>0&&(y+=T-E),_.__size=y,_.__cache={},this}function m(_){const v={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(v.boundary=4,v.storage=4):_.isVector2?(v.boundary=8,v.storage=8):_.isVector3||_.isColor?(v.boundary=16,v.storage=12):_.isVector4?(v.boundary=16,v.storage=16):_.isMatrix3?(v.boundary=48,v.storage=48):_.isMatrix4?(v.boundary=64,v.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),v}function g(_){const v=_.target;v.removeEventListener("dispose",g);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class dy{constructor(e={}){const{canvas:t=vT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let m=null,g=null;const d=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=kt,this._useLegacyLights=!1,this.toneMapping=br,this.toneMappingExposure=1;const v=this;let y=!1,T=0,E=0,M=null,b=-1,S=null;const A=new zt,O=new zt;let j=null;const K=new Xe(0);let L=0,I=t.width,z=t.height,q=1,D=null,F=null;const k=new zt(0,0,I,z),Z=new zt(0,0,I,z);let Q=!1;const Y=new mp;let $=!1,re=!1,de=null;const me=new Lt,Pe=new qe,De=new G,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function je(){return M===null?q:1}let B=i;function nn(C,U){for(let W=0;W<C.length;W++){const X=C[W],H=t.getContext(X,U);if(H!==null)return H}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${cp}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",P,!1),t.addEventListener("webglcontextcreationerror",ae,!1),B===null){const U=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&U.shift(),B=nn(U,C),B===null)throw nn(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&B instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),B.getShaderPrecisionFormat===void 0&&(B.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ye,Re,ge,ct,Ie,R,w,V,ne,ee,ie,_e,ue,he,Ee,Oe,J,Ze,Ge,Ce,xe,pe,Ne,$e;function vt(){ye=new NC(B),Re=new CC(B,ye,e),ye.init(Re),pe=new vb(B,ye,Re),ge=new gb(B,ye,Re),ct=new OC(B),Ie=new nb,R=new _b(B,ye,ge,Ie,Re,pe,ct),w=new bC(v),V=new DC(v),ne=new WT(B,Re),Ne=new wC(B,ye,ne,Re),ee=new UC(B,ne,ct,Ne),ie=new BC(B,ee,ne,ct),Ge=new zC(B,Re,R),Oe=new RC(Ie),_e=new tb(v,w,V,ye,Re,Ne,Oe),ue=new Mb(v,Ie),he=new rb,Ee=new cb(ye,Re),Ze=new TC(v,w,V,ge,ie,h,l),J=new mb(v,ie,Re),$e=new Eb(B,ct,Re,ge),Ce=new AC(B,ye,ct,Re),xe=new IC(B,ye,ct,Re),ct.programs=_e.programs,v.capabilities=Re,v.extensions=ye,v.properties=Ie,v.renderLists=he,v.shadowMap=J,v.state=ge,v.info=ct}vt();const ke=new Sb(v,B);this.xr=ke,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(C){C!==void 0&&(q=C,this.setSize(I,z,!1))},this.getSize=function(C){return C.set(I,z)},this.setSize=function(C,U,W=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=C,z=U,t.width=Math.floor(C*q),t.height=Math.floor(U*q),W===!0&&(t.style.width=C+"px",t.style.height=U+"px"),this.setViewport(0,0,C,U)},this.getDrawingBufferSize=function(C){return C.set(I*q,z*q).floor()},this.setDrawingBufferSize=function(C,U,W){I=C,z=U,q=W,t.width=Math.floor(C*W),t.height=Math.floor(U*W),this.setViewport(0,0,C,U)},this.getCurrentViewport=function(C){return C.copy(A)},this.getViewport=function(C){return C.copy(k)},this.setViewport=function(C,U,W,X){C.isVector4?k.set(C.x,C.y,C.z,C.w):k.set(C,U,W,X),ge.viewport(A.copy(k).multiplyScalar(q).floor())},this.getScissor=function(C){return C.copy(Z)},this.setScissor=function(C,U,W,X){C.isVector4?Z.set(C.x,C.y,C.z,C.w):Z.set(C,U,W,X),ge.scissor(O.copy(Z).multiplyScalar(q).floor())},this.getScissorTest=function(){return Q},this.setScissorTest=function(C){ge.setScissorTest(Q=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){F=C},this.getClearColor=function(C){return C.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(C=!0,U=!0,W=!0){let X=0;if(C){let H=!1;if(M!==null){const ce=M.texture.format;H=ce===Hx||ce===Bx||ce===zx}if(H){const ce=M.texture.type,ve=ce===Pr||ce===gr||ce===dp||ce===ps||ce===Fx||ce===kx,Me=Ze.getClearColor(),Ae=Ze.getClearAlpha(),Fe=Me.r,be=Me.g,Le=Me.b;ve?(p[0]=Fe,p[1]=be,p[2]=Le,p[3]=Ae,B.clearBufferuiv(B.COLOR,0,p)):(x[0]=Fe,x[1]=be,x[2]=Le,x[3]=Ae,B.clearBufferiv(B.COLOR,0,x))}else X|=B.COLOR_BUFFER_BIT}U&&(X|=B.DEPTH_BUFFER_BIT),W&&(X|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",P,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ee.dispose(),Ie.dispose(),w.dispose(),V.dispose(),ie.dispose(),Ne.dispose(),$e.dispose(),_e.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",rn),ke.removeEventListener("sessionend",it),de&&(de.dispose(),de=null),sn.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ct.autoReset,U=J.enabled,W=J.autoUpdate,X=J.needsUpdate,H=J.type;vt(),ct.autoReset=C,J.enabled=U,J.autoUpdate=W,J.needsUpdate=X,J.type=H}function ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const U=C.target;U.removeEventListener("dispose",le),we(U)}function we(C){Se(C),Ie.remove(C)}function Se(C){const U=Ie.get(C).programs;U!==void 0&&(U.forEach(function(W){_e.releaseProgram(W)}),C.isShaderMaterial&&_e.releaseShaderCache(C))}this.renderBufferDirect=function(C,U,W,X,H,ce){U===null&&(U=Te);const ve=H.isMesh&&H.matrixWorld.determinant()<0,Me=gy(C,U,W,X,H);ge.setMaterial(X,ve);let Ae=W.index,Fe=1;if(X.wireframe===!0){if(Ae=ee.getWireframeAttribute(W),Ae===void 0)return;Fe=2}const be=W.drawRange,Le=W.attributes.position;let Mt=be.start*Fe,Rn=(be.start+be.count)*Fe;ce!==null&&(Mt=Math.max(Mt,ce.start*Fe),Rn=Math.min(Rn,(ce.start+ce.count)*Fe)),Ae!==null?(Mt=Math.max(Mt,0),Rn=Math.min(Rn,Ae.count)):Le!=null&&(Mt=Math.max(Mt,0),Rn=Math.min(Rn,Le.count));const It=Rn-Mt;if(It<0||It===1/0)return;Ne.setup(H,X,Me,W,Ae);let Di,ft=Ce;if(Ae!==null&&(Di=ne.get(Ae),ft=xe,ft.setIndex(Di)),H.isMesh)X.wireframe===!0?(ge.setLineWidth(X.wireframeLinewidth*je()),ft.setMode(B.LINES)):ft.setMode(B.TRIANGLES);else if(H.isLine){let ze=X.linewidth;ze===void 0&&(ze=1),ge.setLineWidth(ze*je()),H.isLineSegments?ft.setMode(B.LINES):H.isLineLoop?ft.setMode(B.LINE_LOOP):ft.setMode(B.LINE_STRIP)}else H.isPoints?ft.setMode(B.POINTS):H.isSprite&&ft.setMode(B.TRIANGLES);if(H.isBatchedMesh)ft.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)ft.renderInstances(Mt,It,H.count);else if(W.isInstancedBufferGeometry){const ze=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,mc=Math.min(W.instanceCount,ze);ft.renderInstances(Mt,It,mc)}else ft.render(Mt,It)};function tt(C,U,W){C.transparent===!0&&C.side===Ti&&C.forceSinglePass===!1?(C.side=wn,C.needsUpdate=!0,ol(C,U,W),C.side=Or,C.needsUpdate=!0,ol(C,U,W),C.side=Ti):ol(C,U,W)}this.compile=function(C,U,W=null){W===null&&(W=C),g=Ee.get(W),g.init(),_.push(g),W.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),C!==W&&C.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(g.pushLight(H),H.castShadow&&g.pushShadow(H))}),g.setupLights(v._useLegacyLights);const X=new Set;return C.traverse(function(H){const ce=H.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Me=ce[ve];tt(Me,W,H),X.add(Me)}else tt(ce,W,H),X.add(ce)}),_.pop(),g=null,X},this.compileAsync=function(C,U,W=null){const X=this.compile(C,U,W);return new Promise(H=>{function ce(){if(X.forEach(function(ve){Ie.get(ve).currentProgram.isReady()&&X.delete(ve)}),X.size===0){H(C);return}setTimeout(ce,10)}ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let nt=null;function Ut(C){nt&&nt(C)}function rn(){sn.stop()}function it(){sn.start()}const sn=new ry;sn.setAnimationLoop(Ut),typeof self<"u"&&sn.setContext(self),this.setAnimationLoop=function(C){nt=C,ke.setAnimationLoop(C),C===null?sn.stop():sn.start()},ke.addEventListener("sessionstart",rn),ke.addEventListener("sessionend",it),this.render=function(C,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(U),U=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,U,M),g=Ee.get(C,_.length),g.init(),_.push(g),me.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Y.setFromProjectionMatrix(me),re=this.localClippingEnabled,$=Oe.init(this.clippingPlanes,re),m=he.get(C,d.length),m.init(),d.push(m),_i(C,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(D,F),this.info.render.frame++,$===!0&&Oe.beginShadows();const W=g.state.shadowsArray;if(J.render(W,C,U),$===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.render(m,C),g.setupLights(v._useLegacyLights),U.isArrayCamera){const X=U.cameras;for(let H=0,ce=X.length;H<ce;H++){const ve=X[H];xp(m,C,ve,ve.viewport)}}else xp(m,C,U);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(v,C,U),Ne.resetDefaultState(),b=-1,S=null,_.pop(),_.length>0?g=_[_.length-1]:g=null,d.pop(),d.length>0?m=d[d.length-1]:m=null};function _i(C,U,W,X){if(C.visible===!1)return;if(C.layers.test(U.layers)){if(C.isGroup)W=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(U);else if(C.isLight)g.pushLight(C),C.castShadow&&g.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Y.intersectsSprite(C)){X&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const ve=ie.update(C),Me=C.material;Me.visible&&m.push(C,ve,Me,W,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Y.intersectsObject(C))){const ve=ie.update(C),Me=C.material;if(X&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),De.copy(ve.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const Ae=ve.groups;for(let Fe=0,be=Ae.length;Fe<be;Fe++){const Le=Ae[Fe],Mt=Me[Le.materialIndex];Mt&&Mt.visible&&m.push(C,ve,Mt,W,De.z,Le)}}else Me.visible&&m.push(C,ve,Me,W,De.z,null)}}const ce=C.children;for(let ve=0,Me=ce.length;ve<Me;ve++)_i(ce[ve],U,W,X)}function xp(C,U,W,X){const H=C.opaque,ce=C.transmissive,ve=C.transparent;g.setupLightsView(W),$===!0&&Oe.setGlobalState(v.clippingPlanes,W),ce.length>0&&my(H,ce,U,W),X&&ge.viewport(A.copy(X)),H.length>0&&sl(H,U,W),ce.length>0&&sl(ce,U,W),ve.length>0&&sl(ve,U,W),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function my(C,U,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;const ce=Re.isWebGL2;de===null&&(de=new Ms(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Xa:Pr,minFilter:ja,samples:ce?4:0})),v.getDrawingBufferSize(Pe),ce?de.setSize(Pe.x,Pe.y):de.setSize(Kd(Pe.x),Kd(Pe.y));const ve=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=br,sl(C,W,X),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de);let Ae=!1;for(let Fe=0,be=U.length;Fe<be;Fe++){const Le=U[Fe],Mt=Le.object,Rn=Le.geometry,It=Le.material,Di=Le.group;if(It.side===Ti&&Mt.layers.test(X.layers)){const ft=It.side;It.side=wn,It.needsUpdate=!0,yp(Mt,W,X,Rn,It,Di),It.side=ft,It.needsUpdate=!0,Ae=!0}}Ae===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de)),v.setRenderTarget(ve),v.setClearColor(K,L),v.toneMapping=Me}function sl(C,U,W){const X=U.isScene===!0?U.overrideMaterial:null;for(let H=0,ce=C.length;H<ce;H++){const ve=C[H],Me=ve.object,Ae=ve.geometry,Fe=X===null?ve.material:X,be=ve.group;Me.layers.test(W.layers)&&yp(Me,U,W,Ae,Fe,be)}}function yp(C,U,W,X,H,ce){C.onBeforeRender(v,U,W,X,H,ce),C.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),H.onBeforeRender(v,U,W,X,C,ce),H.transparent===!0&&H.side===Ti&&H.forceSinglePass===!1?(H.side=wn,H.needsUpdate=!0,v.renderBufferDirect(W,U,X,H,C,ce),H.side=Or,H.needsUpdate=!0,v.renderBufferDirect(W,U,X,H,C,ce),H.side=Ti):v.renderBufferDirect(W,U,X,H,C,ce),C.onAfterRender(v,U,W,X,H,ce)}function ol(C,U,W){U.isScene!==!0&&(U=Te);const X=Ie.get(C),H=g.state.lights,ce=g.state.shadowsArray,ve=H.state.version,Me=_e.getParameters(C,H.state,ce,U,W),Ae=_e.getProgramCacheKey(Me);let Fe=X.programs;X.environment=C.isMeshStandardMaterial?U.environment:null,X.fog=U.fog,X.envMap=(C.isMeshStandardMaterial?V:w).get(C.envMap||X.environment),Fe===void 0&&(C.addEventListener("dispose",le),Fe=new Map,X.programs=Fe);let be=Fe.get(Ae);if(be!==void 0){if(X.currentProgram===be&&X.lightsStateVersion===ve)return Mp(C,Me),be}else Me.uniforms=_e.getUniforms(C),C.onBuild(W,Me,v),C.onBeforeCompile(Me,v),be=_e.acquireProgram(Me,Ae),Fe.set(Ae,be),X.uniforms=Me.uniforms;const Le=X.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),Mp(C,Me),X.needsLights=vy(C),X.lightsStateVersion=ve,X.needsLights&&(Le.ambientLightColor.value=H.state.ambient,Le.lightProbe.value=H.state.probe,Le.directionalLights.value=H.state.directional,Le.directionalLightShadows.value=H.state.directionalShadow,Le.spotLights.value=H.state.spot,Le.spotLightShadows.value=H.state.spotShadow,Le.rectAreaLights.value=H.state.rectArea,Le.ltc_1.value=H.state.rectAreaLTC1,Le.ltc_2.value=H.state.rectAreaLTC2,Le.pointLights.value=H.state.point,Le.pointLightShadows.value=H.state.pointShadow,Le.hemisphereLights.value=H.state.hemi,Le.directionalShadowMap.value=H.state.directionalShadowMap,Le.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Le.spotShadowMap.value=H.state.spotShadowMap,Le.spotLightMatrix.value=H.state.spotLightMatrix,Le.spotLightMap.value=H.state.spotLightMap,Le.pointShadowMap.value=H.state.pointShadowMap,Le.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=be,X.uniformsList=null,be}function Sp(C){if(C.uniformsList===null){const U=C.currentProgram.getUniforms();C.uniformsList=lu.seqWithValue(U.seq,C.uniforms)}return C.uniformsList}function Mp(C,U){const W=Ie.get(C);W.outputColorSpace=U.outputColorSpace,W.batching=U.batching,W.instancing=U.instancing,W.instancingColor=U.instancingColor,W.skinning=U.skinning,W.morphTargets=U.morphTargets,W.morphNormals=U.morphNormals,W.morphColors=U.morphColors,W.morphTargetsCount=U.morphTargetsCount,W.numClippingPlanes=U.numClippingPlanes,W.numIntersection=U.numClipIntersection,W.vertexAlphas=U.vertexAlphas,W.vertexTangents=U.vertexTangents,W.toneMapping=U.toneMapping}function gy(C,U,W,X,H){U.isScene!==!0&&(U=Te),R.resetTextureUnits();const ce=U.fog,ve=X.isMeshStandardMaterial?U.environment:null,Me=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Ji,Ae=(X.isMeshStandardMaterial?V:w).get(X.envMap||ve),Fe=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,be=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!W.morphAttributes.position,Mt=!!W.morphAttributes.normal,Rn=!!W.morphAttributes.color;let It=br;X.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(It=v.toneMapping);const Di=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ft=Di!==void 0?Di.length:0,ze=Ie.get(X),mc=g.state.lights;if($===!0&&(re===!0||C!==S)){const Wn=C===S&&X.id===b;Oe.setState(X,C,Wn)}let xt=!1;X.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mc.state.version||ze.outputColorSpace!==Me||H.isBatchedMesh&&ze.batching===!1||!H.isBatchedMesh&&ze.batching===!0||H.isInstancedMesh&&ze.instancing===!1||!H.isInstancedMesh&&ze.instancing===!0||H.isSkinnedMesh&&ze.skinning===!1||!H.isSkinnedMesh&&ze.skinning===!0||H.isInstancedMesh&&ze.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ze.instancingColor===!1&&H.instanceColor!==null||ze.envMap!==Ae||X.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Oe.numPlanes||ze.numIntersection!==Oe.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==be||ze.morphTargets!==Le||ze.morphNormals!==Mt||ze.morphColors!==Rn||ze.toneMapping!==It||Re.isWebGL2===!0&&ze.morphTargetsCount!==ft)&&(xt=!0):(xt=!0,ze.__version=X.version);let Gr=ze.currentProgram;xt===!0&&(Gr=ol(X,U,H));let Ep=!1,Bo=!1,gc=!1;const Xt=Gr.getUniforms(),Vr=ze.uniforms;if(ge.useProgram(Gr.program)&&(Ep=!0,Bo=!0,gc=!0),X.id!==b&&(b=X.id,Bo=!0),Ep||S!==C){Xt.setValue(B,"projectionMatrix",C.projectionMatrix),Xt.setValue(B,"viewMatrix",C.matrixWorldInverse);const Wn=Xt.map.cameraPosition;Wn!==void 0&&Wn.setValue(B,De.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&Xt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Xt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,Bo=!0,gc=!0)}if(H.isSkinnedMesh){Xt.setOptional(B,H,"bindMatrix"),Xt.setOptional(B,H,"bindMatrixInverse");const Wn=H.skeleton;Wn&&(Re.floatVertexTextures?(Wn.boneTexture===null&&Wn.computeBoneTexture(),Xt.setValue(B,"boneTexture",Wn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(Xt.setOptional(B,H,"batchingTexture"),Xt.setValue(B,"batchingTexture",H._matricesTexture,R));const _c=W.morphAttributes;if((_c.position!==void 0||_c.normal!==void 0||_c.color!==void 0&&Re.isWebGL2===!0)&&Ge.update(H,W,Gr),(Bo||ze.receiveShadow!==H.receiveShadow)&&(ze.receiveShadow=H.receiveShadow,Xt.setValue(B,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Vr.envMap.value=Ae,Vr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),Bo&&(Xt.setValue(B,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&_y(Vr,gc),ce&&X.fog===!0&&ue.refreshFogUniforms(Vr,ce),ue.refreshMaterialUniforms(Vr,X,q,z,de),lu.upload(B,Sp(ze),Vr,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(lu.upload(B,Sp(ze),Vr,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Xt.setValue(B,"center",H.center),Xt.setValue(B,"modelViewMatrix",H.modelViewMatrix),Xt.setValue(B,"normalMatrix",H.normalMatrix),Xt.setValue(B,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Wn=X.uniformsGroups;for(let vc=0,xy=Wn.length;vc<xy;vc++)if(Re.isWebGL2){const Tp=Wn[vc];$e.update(Tp,Gr),$e.bind(Tp,Gr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Gr}function _y(C,U){C.ambientLightColor.needsUpdate=U,C.lightProbe.needsUpdate=U,C.directionalLights.needsUpdate=U,C.directionalLightShadows.needsUpdate=U,C.pointLights.needsUpdate=U,C.pointLightShadows.needsUpdate=U,C.spotLights.needsUpdate=U,C.spotLightShadows.needsUpdate=U,C.rectAreaLights.needsUpdate=U,C.hemisphereLights.needsUpdate=U}function vy(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,U,W){Ie.get(C.texture).__webglTexture=U,Ie.get(C.depthTexture).__webglTexture=W;const X=Ie.get(C);X.__hasExternalTextures=!0,X.__hasExternalTextures&&(X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,U){const W=Ie.get(C);W.__webglFramebuffer=U,W.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(C,U=0,W=0){M=C,T=U,E=W;let X=!0,H=null,ce=!1,ve=!1;if(C){const Ae=Ie.get(C);Ae.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(B.FRAMEBUFFER,null),X=!1):Ae.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ae.__hasExternalTextures&&R.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const be=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(be[U])?H=be[U][W]:H=be[U],ce=!0):Re.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?H=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(be)?H=be[W]:H=be,A.copy(C.viewport),O.copy(C.scissor),j=C.scissorTest}else A.copy(k).multiplyScalar(q).floor(),O.copy(Z).multiplyScalar(q).floor(),j=Q;if(ge.bindFramebuffer(B.FRAMEBUFFER,H)&&Re.drawBuffers&&X&&ge.drawBuffers(C,H),ge.viewport(A),ge.scissor(O),ge.setScissorTest(j),ce){const Ae=Ie.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,Ae.__webglTexture,W)}else if(ve){const Ae=Ie.get(C.texture),Fe=U||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ae.__webglTexture,W||0,Fe)}b=-1},this.readRenderTargetPixels=function(C,U,W,X,H,ce,ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){ge.bindFramebuffer(B.FRAMEBUFFER,Me);try{const Ae=C.texture,Fe=Ae.format,be=Ae.type;if(Fe!==hi&&pe.convert(Fe)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=be===Xa&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(be!==Pr&&pe.convert(be)!==B.getParameter(B.IMPLEMENTATION_COLOR_READ_TYPE)&&!(be===_r&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=C.width-X&&W>=0&&W<=C.height-H&&B.readPixels(U,W,X,H,pe.convert(Fe),pe.convert(be),ce)}finally{const Ae=M!==null?Ie.get(M).__webglFramebuffer:null;ge.bindFramebuffer(B.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(C,U,W=0){const X=Math.pow(2,-W),H=Math.floor(U.image.width*X),ce=Math.floor(U.image.height*X);R.setTexture2D(U,0),B.copyTexSubImage2D(B.TEXTURE_2D,W,0,0,C.x,C.y,H,ce),ge.unbindTexture()},this.copyTextureToTexture=function(C,U,W,X=0){const H=U.image.width,ce=U.image.height,ve=pe.convert(W.format),Me=pe.convert(W.type);R.setTexture2D(W,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment),U.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,X,C.x,C.y,H,ce,ve,Me,U.image.data):U.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,X,C.x,C.y,U.mipmaps[0].width,U.mipmaps[0].height,ve,U.mipmaps[0].data):B.texSubImage2D(B.TEXTURE_2D,X,C.x,C.y,ve,Me,U.image),X===0&&W.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(C,U,W,X,H=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=C.max.x-C.min.x+1,ve=C.max.y-C.min.y+1,Me=C.max.z-C.min.z+1,Ae=pe.convert(X.format),Fe=pe.convert(X.type);let be;if(X.isData3DTexture)R.setTexture3D(X,0),be=B.TEXTURE_3D;else if(X.isDataArrayTexture||X.isCompressedArrayTexture)R.setTexture2DArray(X,0),be=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Le=B.getParameter(B.UNPACK_ROW_LENGTH),Mt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Rn=B.getParameter(B.UNPACK_SKIP_PIXELS),It=B.getParameter(B.UNPACK_SKIP_ROWS),Di=B.getParameter(B.UNPACK_SKIP_IMAGES),ft=W.isCompressedTexture?W.mipmaps[H]:W.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,ft.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ft.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,C.min.x),B.pixelStorei(B.UNPACK_SKIP_ROWS,C.min.y),B.pixelStorei(B.UNPACK_SKIP_IMAGES,C.min.z),W.isDataTexture||W.isData3DTexture?B.texSubImage3D(be,H,U.x,U.y,U.z,ce,ve,Me,Ae,Fe,ft.data):W.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),B.compressedTexSubImage3D(be,H,U.x,U.y,U.z,ce,ve,Me,Ae,ft.data)):B.texSubImage3D(be,H,U.x,U.y,U.z,ce,ve,Me,Ae,Fe,ft),B.pixelStorei(B.UNPACK_ROW_LENGTH,Le),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Rn),B.pixelStorei(B.UNPACK_SKIP_ROWS,It),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Di),H===0&&X.generateMipmaps&&B.generateMipmap(be),ge.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),ge.unbindTexture()},this.resetState=function(){T=0,E=0,M=null,ge.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===hp?"display-p3":"srgb",t.unpackColorSpace=Qe.workingColorSpace===dc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===kt?gs:Vx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===gs?kt:Ji}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Tb extends dy{}Tb.prototype.isWebGL1Renderer=!0;class wb extends en{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class ju extends Hr{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new G,h=new G,p=[],x=[],m=[],g=[];for(let d=0;d<=i;d++){const _=[],v=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){const E=T/t;f.x=-e*Math.cos(r+E*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+E*s)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),g.push(E+y,1-v),_.push(u++)}c.push(_)}for(let d=0;d<i;d++)for(let _=0;_<t;_++){const v=c[d][_+1],y=c[d][_],T=c[d+1][_],E=c[d+1][_+1];(d!==0||o>0)&&p.push(v,y,E),(d!==i-1||l<Math.PI)&&p.push(y,T,E)}this.setIndex(p),this.setAttribute("position",new Pi(x,3)),this.setAttribute("normal",new Pi(m,3)),this.setAttribute("uv",new Pi(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ju(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class v_ extends il{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wx,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const x_={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ab{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return x}return null}}}const Cb=new Ab;class vp{constructor(e){this.manager=e!==void 0?e:Cb,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vp.DEFAULT_MATERIAL_NAME="__DEFAULT";class Rb extends vp{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=x_.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ya("img");function l(){c(),x_.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class bb extends vp{constructor(e){super(e)}load(e,t,i,r){const s=new An,o=new Rb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class hy extends en{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Df=new Lt,y_=new G,S_=new G;class Pb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new mp,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;y_.setFromMatrixPosition(e.matrixWorld),t.position.copy(y_),S_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(S_),t.updateMatrixWorld(),Df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Lb extends Pb{constructor(){super(new sy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class M_ extends hy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(en.DEFAULT_UP),this.updateMatrix(),this.target=new en,this.shadow=new Lb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Db extends hy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cp);const Nb=()=>{const n=He.useRef(null);return He.useEffect(()=>{if(!n.current)return;const e=n.current.clientWidth,t=n.current.clientHeight,i=new wb,r=new Kn(45,e/t,.1,1e3);r.position.z=28;const s=new dy({alpha:!0,antialias:!0});s.setSize(e,t),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.toneMapping=Ux,s.outputColorSpace=kt,n.current.appendChild(s.domElement);const o=new aa;o.rotation.z=23.5*Math.PI/180,i.add(o);const a=new bb,l=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"),u=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg"),c=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg"),f=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png"),h=new ju(10,128,128),p=new v_({map:l,specularMap:u,normalMap:c,normalScale:new qe(.85,.85),specular:new Xe(3355443),shininess:15}),x=new Ai(h,p);o.add(x);const m=new ju(10.12,128,128),g=new v_({map:f,transparent:!0,opacity:.8,blending:hs,side:Ti,depthWrite:!1}),d=new Ai(m,g);o.add(d);const _=new M_(16777215,2.5);_.position.set(10,5,10),i.add(_);const v=new Db(4210752,.5);i.add(v);const y=new M_(8772,1);y.position.set(-10,0,-20),i.add(y);const T=()=>{requestAnimationFrame(T),x.rotation.y+=.001,d.rotation.y+=.0013,d.rotation.x+=5e-5,s.render(i,r)};T();const E=()=>{if(!n.current)return;const M=n.current.clientWidth,b=n.current.clientHeight;r.aspect=M/b,r.updateProjectionMatrix(),s.setSize(M,b)};return window.addEventListener("resize",E),()=>{window.removeEventListener("resize",E),n.current&&(n.current.innerHTML=""),s.dispose(),h.dispose(),p.dispose()}},[]),N.jsx("div",{ref:n,className:"fixed -left-[40%] -top-[10%] w-[180vw] h-[180vw] md:-left-[25%] md:-top-[10%] md:w-[60vw] md:h-[60vw] z-0 pointer-events-none"})},Ub=()=>{const[n,e]=He.useState(0),[t,i]=He.useState(null),r={usd:{symbol:"USD",name:"دلار (تتر)",price:0,unit:"تومان",change:0,icon:"💵"},btc:{symbol:"BTC",name:"بیت‌کوین",price:0,unit:"دلار",change:0,icon:"₿"},alts:[{symbol:"ETH",name:"اتریوم",price:0,unit:"دلار",change:0,icon:"Ξ"},{symbol:"TON",name:"تون",price:0,unit:"دلار",change:0,icon:"💎"},{symbol:"SOL",name:"سولانا",price:0,unit:"دلار",change:0,icon:"◎"},{symbol:"DOGE",name:"دوج",price:0,unit:"دلار",change:0,icon:"Ð"}]},s=async()=>{let f={usd:{...r.usd},btc:{...r.btc},alts:[...r.alts]},h=!1;try{const m=(await(await fetch("https://api.tetherland.com/currencies")).json()).data.currencies.USDT;m&&(f.usd={symbol:"USD",name:"دلار",price:Math.floor(parseFloat(m.price)),unit:"تومان",change:parseFloat(m.diff24d),icon:"💵"},h=!0)}catch{console.warn("TetherLand failed, trying Nobitex...")}if(!h)try{const p=await fetch("https://api.nobitex.ir/market/stats?srcCurrency=usdt&dstCurrency=rls");if(p.ok){const m=(await p.json()).stats["usdt-rls"];f.usd={symbol:"USD",name:"دلار",price:Math.floor(parseInt(m.latest)/10),unit:"تومان",change:parseFloat(m.dayChange),icon:"💵"},h=!0}}catch{console.warn("Nobitex failed.")}h||(f.usd={...r.usd,price:61500,change:0});try{const p=await fetch("https://api.coincap.io/v2/assets?ids=bitcoin,ethereum,toncoin,solana,dogecoin");if(p.ok){const m=(await p.json()).data,g=M=>{const b=m.find(S=>S.id===M);return b?{price:parseFloat(b.priceUsd),change:parseFloat(b.changePercent24Hr)}:null},d=g("bitcoin");d&&(f.btc={...f.btc,price:d.price,change:d.change});const _=[],v=g("ethereum"),y=g("toncoin"),T=g("solana"),E=g("dogecoin");v&&_.push({symbol:"ETH",name:"اتریوم",price:v.price,unit:"دلار",change:v.change,icon:"Ξ"}),y&&_.push({symbol:"TON",name:"تون",price:y.price,unit:"دلار",change:y.change,icon:"💎"}),T&&_.push({symbol:"SOL",name:"سولانا",price:T.price,unit:"دلار",change:T.change,icon:"◎"}),E&&_.push({symbol:"DOGE",name:"دوج",price:E.price,unit:"دلار",change:E.change,icon:"Ð"}),_.length>0&&(f.alts=_)}}catch{console.warn("Crypto fetch failed")}i(f)};He.useEffect(()=>{s();const f=setInterval(s,15e3);return()=>clearInterval(f)},[]),He.useEffect(()=>{const f=setInterval(()=>{e(h=>(h+1)%4)},5e3);return()=>clearInterval(f)},[]);const o=t?t.usd:r.usd,a=t?t.btc:r.btc,l=t&&t.alts.length>0?n%t.alts.length:0,u=t&&t.alts.length>0?t.alts[l]:r.alts[0],c=!t||t.usd.price===0;return N.jsxs("div",{className:"absolute top-4 right-2 md:top-8 md:right-8 z-50 flex flex-col items-end gap-3 pointer-events-none md:pointer-events-auto scale-[0.65] md:scale-100 origin-top-right",children:[N.jsxs("div",{className:"flex flex-col md:flex-row gap-3 items-stretch",children:[N.jsx(Nf,{data:u,animateKey:u.symbol,isLoading:c}),N.jsx("div",{className:"hidden md:block",children:N.jsx(Nf,{data:a,animateKey:"BTC",isLoading:c})}),N.jsx(Nf,{data:o,animateKey:"USD",isLoading:c,isMain:!0})]}),N.jsxs("div",{className:"hidden md:flex items-center gap-2 px-1 opacity-60 hover:opacity-100 transition-opacity duration-300",children:[N.jsx("span",{className:"text-[10px] font-medium text-white/90 tracking-wide font-sans drop-shadow-md text-right",children:"نرخ‌های لحظه‌ای بازار آزاد"}),N.jsx("div",{className:"relative group cursor-help",children:N.jsx("div",{className:"bg-arbon-red/20 p-1 rounded-full border border-arbon-red/30 shadow-[0_0_10px_rgba(255,0,51,0.2)]",children:N.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"currentColor",className:"text-arbon-red animate-pulse-slow",children:N.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z",stroke:"none"})})})})]})]})},Nf=({data:n,animateKey:e,isLoading:t,isMain:i})=>{const r=He.useRef(null),s=He.useRef(null);return He.useEffect(()=>{r.current&&un.fromTo(r.current,{rotationX:45,opacity:0,y:-20},{rotationX:0,opacity:1,y:0,duration:.5,ease:"back.out(1.5)"})},[e]),N.jsxs("div",{ref:r,className:`
                relative overflow-hidden backdrop-blur-xl rounded-2xl px-5 py-3 flex flex-col items-end min-w-[150px]
                transition-all duration-300 hover:scale-105 hover:z-10
                ${i?"bg-gradient-to-br from-arbon-red/20 to-black/60 border border-arbon-red/30 shadow-[0_0_20px_rgba(255,0,51,0.15)]":"bg-black/40 border border-white/10 hover:bg-black/60 shadow-xl"}
            `,children:[N.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"}),t?N.jsxs("div",{className:"w-full flex flex-col items-end gap-2 animate-pulse",children:[N.jsx("div",{className:"w-16 h-4 bg-white/10 rounded"}),N.jsx("div",{className:"w-24 h-6 bg-white/10 rounded"})]}):N.jsxs(N.Fragment,{children:[N.jsxs("div",{className:"flex items-center gap-2 mb-1 z-10",children:[N.jsxs("span",{className:`text-[10px] font-bold px-1.5 py-0.5 rounded-md backdrop-blur-md ${n.change>=0?"bg-green-500/20 text-green-400 border border-green-500/20":"bg-red-500/20 text-red-400 border border-red-500/20"}`,children:[n.change>0?"▲":"▼"," ",Math.abs(n.change).toFixed(2),"%"]}),N.jsx("span",{className:"text-gray-300 font-bold text-xs uppercase tracking-wider",children:n.name}),N.jsx("span",{className:"text-sm filter drop-shadow-lg",children:n.icon})]}),N.jsxs("div",{className:"flex items-baseline gap-1.5 z-10",dir:"rtl",children:[N.jsx("span",{ref:s,className:`font-mono font-bold tracking-tight ${i?"text-2xl text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]":"text-xl text-gray-100"}`,children:n.price.toLocaleString()}),N.jsx("span",{className:"text-[10px] text-gray-500 font-sans font-medium",children:n.unit})]})]})]})},Ib=()=>{const[n,e]=He.useState(new Date),[t,i]=He.useState(0),r=He.useRef(null);He.useEffect(()=>{const a=setInterval(()=>e(new Date),1e3);return()=>clearInterval(a)},[]),He.useEffect(()=>{const a=()=>{const c=Math.floor(Math.random()*40)-20;i(85+c)},l=setInterval(a,2e3);return a(),()=>clearInterval(l)},[]),He.useEffect(()=>{const a=r.current;if(!a)return;const l=a.getContext("2d");if(!l)return;let u;const c=20,f=a.width/c,h=new Array(c).fill(0).map(()=>Math.random()*a.height),p=()=>{l.clearRect(0,0,a.width,a.height),h.shift(),h.push(Math.random()*a.height*.8+a.height*.1),h.forEach((x,m)=>{const g=m*f,d=x,_=a.height-d,v=l.createLinearGradient(0,_,0,a.height);v.addColorStop(0,"#ff0033"),v.addColorStop(1,"rgba(255, 0, 51, 0.1)"),l.fillStyle=v,l.fillRect(g,_,f-2,d)}),u=requestAnimationFrame(p)};return p(),()=>cancelAnimationFrame(u)},[]);const s=n.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),o=n.toLocaleDateString("fa-IR",{weekday:"long",day:"numeric",month:"long"});return N.jsxs("div",{className:"absolute top-4 left-4 md:top-8 md:left-8 z-40 flex flex-col gap-3 scale-75 md:scale-100 origin-top-left pointer-events-none select-none",children:[N.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-4 min-w-[160px] shadow-xl relative overflow-hidden",children:[N.jsx("div",{className:"absolute top-0 right-0 p-2",children:N.jsx("div",{className:"w-2 h-2 bg-arbon-red rounded-full animate-pulse shadow-[0_0_10px_#ff0033]"})}),N.jsxs("div",{className:"flex flex-col items-center justify-center",children:[N.jsx("span",{className:"text-3xl font-bold font-mono text-white tracking-widest drop-shadow-lg",dir:"ltr",children:s}),N.jsx("span",{className:"text-xs text-gray-400 font-medium mt-1",children:o})]})]}),N.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl p-3 min-w-[160px] shadow-xl flex flex-col gap-2",children:[N.jsxs("div",{className:"flex justify-between items-center px-1",children:[N.jsx("span",{className:"text-[10px] text-gray-500 uppercase font-bold tracking-wider",children:"Server Status"}),N.jsx("span",{className:"text-[10px] font-mono text-arbon-red",children:"LIVE"})]}),N.jsx("div",{className:"w-full h-8 bg-black/20 rounded-md overflow-hidden relative border border-white/5",children:N.jsx("canvas",{ref:r,width:140,height:32,className:"w-full h-full opacity-80"})}),N.jsxs("div",{className:"flex justify-between items-center px-1 pt-1 border-t border-white/5",children:[N.jsxs("div",{className:"flex items-center gap-1.5",children:[N.jsx("svg",{className:"w-3 h-3 text-gray-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M13 10V3L4 14h7v7l9-11h-7z"})}),N.jsx("span",{className:"text-[10px] text-gray-400",children:"Latency"})]}),N.jsxs("span",{className:"text-xs font-mono font-bold text-white",children:[t," ",N.jsx("span",{className:"text-[9px] text-gray-500",children:"ms"})]})]})]})]})},Uf=({title:n,subtitle:e,description:t,image:i,specs:r,imgOnRight:s,delay:o=0})=>{const a=He.useRef(null),l=He.useRef(null),u=He.useRef(null);return He.useEffect(()=>{const c=new IntersectionObserver(f=>{f.forEach(h=>{h.isIntersecting&&(l.current&&un.to(l.current,{y:0,opacity:1,duration:1.5,ease:"power3.out"}),u.current&&un.to(u.current,{x:0,opacity:1,duration:1.5,delay:.2,ease:"power3.out"}),c.unobserve(h.target))})},{threshold:.15});return a.current&&c.observe(a.current),()=>c.disconnect()},[]),N.jsxs("div",{ref:a,className:`w-full min-h-auto lg:min-h-[80vh] flex flex-col lg:flex-row items-center justify-center p-6 py-16 lg:p-24 relative z-10 overflow-hidden gap-8 lg:gap-20 ${s?"":"lg:flex-row-reverse"}`,children:[N.jsxs("div",{className:`w-full lg:w-1/2 flex items-center justify-center relative group order-1 ${s?"lg:order-1":"lg:order-2"}`,children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-orange-600/30 to-amber-500/20 rounded-full blur-[60px] lg:blur-[100px] opacity-60 group-hover:opacity-90 transition-opacity duration-1000"}),N.jsx("div",{className:"relative z-10 transform transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-2",children:N.jsx("img",{ref:l,src:i,alt:n,className:"w-[70vw] max-w-[300px] md:max-w-[400px] lg:max-w-[600px] object-contain drop-shadow-[0_10px_30px_rgba(234,88,12,0.3)] lg:drop-shadow-[0_20px_50px_rgba(234,88,12,0.3)] opacity-0 translate-y-12"})})]}),N.jsxs("div",{ref:u,className:`w-full lg:w-1/2 flex flex-col gap-6 opacity-0 order-2 
                    lg:opacity-0 ${s?"lg:-translate-x-12":"lg:translate-x-12"} 
                    ${s?"lg:order-2 lg:text-left lg:items-end":"lg:order-1 lg:text-right lg:items-start"}
                    items-center text-center lg:text-inherit
                `,dir:s?"ltr":"rtl",children:[N.jsxs("div",{className:`mb-2 lg:mb-4 w-full ${s?"lg:text-left":"lg:text-right"} text-center`,children:[N.jsx("h2",{className:"text-3xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter",children:n}),N.jsx("h3",{className:"text-lg md:text-xl text-gray-400 font-bold tracking-widest border-b border-orange-500/50 inline-block pb-1",children:e})]}),N.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4 w-full max-w-md lg:max-w-none",children:r.map((c,f)=>N.jsxs("div",{className:"bg-black/40 backdrop-blur-md border border-white/5 p-3 lg:p-4 rounded-xl flex items-center gap-4 hover:bg-white/5 transition-colors group w-full",dir:"rtl",children:[N.jsx("div",{className:"w-10 h-10 lg:w-12 lg:h-12 rounded-lg flex items-center justify-center text-xl lg:text-2xl shadow-lg group-hover:scale-110 transition-transform shrink-0",style:{backgroundColor:`${c.color}20`,color:c.color,border:`1px solid ${c.color}40`},children:c.icon}),N.jsxs("div",{className:"flex flex-col items-start",children:[N.jsx("span",{className:"text-[9px] lg:text-[10px] text-gray-500 font-bold tracking-wider uppercase",children:c.label}),N.jsx("span",{className:"text-white font-bold text-sm lg:text-base font-sans text-right",children:c.value})]})]},f))}),N.jsx("div",{className:`mt-4 lg:mt-8 p-4 lg:p-6 bg-gradient-to-r from-orange-600/10 to-transparent rounded-lg w-full max-w-md lg:max-w-none ${s?"lg:border-l-4":"lg:border-r-4 border-r-4"} border-orange-600`,children:N.jsx("p",{className:"text-gray-300 text-xs lg:text-sm leading-relaxed text-right",dir:"rtl",children:t})})]})]})},Ob=()=>{const n=[{label:"CPU",value:"AMD Ryzen 9 5900X",icon:"🧠",color:"#F63E02"},{label:"GPU",value:"NVIDIA RTX 3060 12GB",icon:"🎮",color:"#76B900"},{label:"RAM",value:"64GB Corsair Dominator",icon:"💾",color:"#FFFFFF"},{label:"MOBO",value:"ASUS ROG Strix X570-E",icon:"🔌",color:"#FF0033"},{label:"COOLER",value:"NZXT Kraken Z73 RGB",icon:"❄️",color:"#00D8FF"},{label:"CASE",value:"Lian Li O11 Dynamic",icon:"🖥️",color:"#888888"}],e=[{label:"KEYBOARD",value:"Razer Huntsman V2",icon:"⌨️",color:"#00FF00"},{label:"SWITCHES",value:"Optical Analog Gen-2",icon:"⚡",color:"#FF9900"},{label:"MOUSE",value:"Logitech G Pro X Superlight",icon:"🖱️",color:"#33CCFF"},{label:"SENSOR",value:"HERO 25K Sensor",icon:"🎯",color:"#FF0033"},{label:"PAD",value:"SteelSeries QcK Prism",icon:"⬛",color:"#888"},{label:"AUDIO",value:"Beyerdynamic DT 990 Pro",icon:"🎧",color:"#FFAA00"}],t=[{label:"MODEL",value:"Samsung Odyssey G9",icon:"🖥️",color:"#00AABB"},{label:"SIZE",value:'49" Super Ultra-Wide',icon:"📏",color:"#FFD700"},{label:"PANEL",value:"QLED Dual QHD (5120x1440)",icon:"✨",color:"#FF4444"},{label:"REFRESH",value:"240Hz Rapid Curve",icon:"🚀",color:"#00FF99"},{label:"RESPONSE",value:"1ms (GtG)",icon:"⏱️",color:"#AAAAAA"},{label:"HDR",value:"HDR1000 Support",icon:"🔆",color:"#FFA500"}];return N.jsxs("div",{className:"w-full flex flex-col gap-0 pb-24 lg:pb-32",children:[N.jsx(Uf,{title:"ایستگاه پـردازش",subtitle:"سیستم اصلی ورک‌استیشن",description:"این سیستم برای کامپایل‌های سنگین، رندرینگ سه بعدی و اجرای روان زیرساخت‌های ماینکرفت بهینه شده است. ترکیب قدرت رایزن ۹ و معماری آمپر انویدیا، پرفورمنس بی‌نظیری را ارائه می‌دهد.",image:"https://cdn3d.iconscout.com/3d/premium/thumb/computer-case-3d-icon-png-download-9646545.png",specs:n,imgOnRight:!1}),N.jsx(Uf,{title:"تجهیـزات جـانبی",subtitle:"ابزارهای ورودی و کنترل",description:"دقت و سرعت در کدنویسی و گیمینگ حیاتی است. ترکیب سوییچ‌های اپتیکال ریزر و وزن فوق‌العاده سبک لاجیتک، تجربه‌ای بدون تاخیر و ارگونومیک را فراهم می‌کند.",image:"https://cdn3d.iconscout.com/3d/premium/thumb/keyboard-and-mouse-3d-icon-png-download-11908799.png",specs:e,imgOnRight:!0}),N.jsx(Uf,{title:"فضـای بصـری",subtitle:"سیستم نمایشگر و تصویر",description:"فضای کاری گسترده برای مولتی‌تسکینگ. مانیتور ۴۹ اینچ خمیده سامسونگ، جایگزین دو مانیتور شده و غوطه‌وری کامل در محیط توسعه و بازی را ممکن می‌سازد.",image:"https://cdn3d.iconscout.com/3d/premium/thumb/monitor-3d-icon-png-download-9646558.png",specs:t,imgOnRight:!1})]})},Fb=()=>{var l;const n=He.useRef(null),e=He.useRef(null),t=He.useRef(null),i=He.useRef(null),[r,s]=He.useState(null),[o,a]=He.useState(!0);return He.useEffect(()=>{const u=()=>{if(!e.current)return;const c=window.scrollY,f=window.innerHeight,h=Math.min(c/(f*.6),1);un.to(e.current,{opacity:1-h,filter:`blur(${h*20}px)`,scale:1-h*.1,overwrite:"auto",duration:.1}),t.current&&i.current&&un.to([t.current,i.current],{opacity:1-h,pointerEvents:1-h<.1?"none":"auto",overwrite:"auto",duration:.1})};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),He.useEffect(()=>{let u=!0;(async()=>{try{const x=await(await fetch(`https://api.lanyard.rest/v1/users/${Jc}`)).json();u&&x.success&&x.data&&(s(x.data),a(!1))}catch(p){console.error("Lanyard Error:",p)}})();const f=new WebSocket("wss://api.lanyard.rest/socket");f.onopen=()=>{f.send(JSON.stringify({op:2,d:{subscribe_to_id:Jc}}))},f.onmessage=p=>{const x=JSON.parse(p.data);if(x.t==="INIT_STATE"||x.t==="PRESENCE_UPDATE"){const m=x.d;u&&(s(x.t==="INIT_STATE"?m[Jc]:m),a(!1))}};const h=setInterval(()=>{f.readyState===WebSocket.OPEN&&f.send(JSON.stringify({op:3}))},3e4);return()=>{u=!1,clearInterval(h),f.close()}},[]),He.useLayoutEffect(()=>{const u=un.context(()=>{un.from(e.current,{y:20,opacity:0,duration:1,ease:"power3.out"})},n);return()=>u.revert()},[]),N.jsxs("div",{ref:n,className:"relative w-full min-h-screen bg-transparent text-white font-sans selection:bg-arbon-red selection:text-white",dir:"rtl",children:[N.jsxs("div",{className:"fixed inset-0 z-0",children:[N.jsx(d1,{}),N.jsx("div",{ref:i,className:"fixed inset-0 z-0 pointer-events-none",children:N.jsx(Nb,{})})]}),N.jsxs("div",{ref:t,className:"fixed top-0 left-0 w-full h-full pointer-events-none z-50 transition-opacity will-change-opacity",children:[N.jsx(Ib,{}),N.jsx(Ub,{}),N.jsx(v1,{})]}),N.jsxs("div",{className:"relative z-10 w-full flex flex-col items-center overflow-x-hidden",children:[N.jsxs("div",{ref:e,className:"w-full min-h-screen flex flex-col items-center justify-center p-4 pt-36 md:pt-32 pb-24 md:p-8 origin-top",children:[N.jsxs("div",{className:"w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pointer-events-auto",children:[N.jsx("div",{className:"lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-right space-y-8 order-1 lg:order-1",children:N.jsxs("div",{className:"bg-black/80 backdrop-blur-md border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-2xl w-full relative overflow-hidden group",children:[N.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"}),N.jsxs("div",{className:"flex flex-col items-center lg:items-start gap-6 relative z-10",children:[N.jsxs("div",{className:"relative",children:[N.jsx("div",{className:"w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden border-2 border-white/10 shadow-lg bg-zinc-900 transition-transform duration-300 hover:scale-105",children:(l=r==null?void 0:r.discord_user)!=null&&l.avatar?N.jsx("img",{src:`https://cdn.discordapp.com/avatars/${r.discord_user.id}/${r.discord_user.avatar}.png?size=512`,alt:Tt.name,className:"w-full h-full object-cover"}):N.jsx("div",{className:"w-full h-full flex items-center justify-center bg-zinc-800",children:N.jsx("span",{className:"text-2xl",children:"⚡"})})}),N.jsx("div",{className:`absolute -bottom-2 -left-2 w-6 h-6 rounded-full border-4 border-[#0a0a0a] ${(r==null?void 0:r.discord_status)==="online"?"bg-green-500":(r==null?void 0:r.discord_status)==="dnd"?"bg-red-500":(r==null?void 0:r.discord_status)==="idle"?"bg-yellow-500":"bg-gray-500"}`})]}),N.jsxs("div",{className:"space-y-2",children:[N.jsx("h1",{className:"text-4xl lg:text-5xl font-black tracking-tight text-white",children:Tt.name}),N.jsx("div",{className:"inline-block px-3 py-1 bg-arbon-red/10 border border-arbon-red/20 rounded-lg",children:N.jsx("h2",{className:"text-sm lg:text-base font-bold text-arbon-red tracking-wide",children:Tt.role})}),N.jsx("p",{className:"text-gray-400 font-medium text-sm lg:text-base max-w-sm leading-relaxed",children:Tt.tagline})]})]}),N.jsx("div",{className:"w-full h-px bg-white/10 my-6"}),N.jsx(p1,{data:r,loading:o})]})}),N.jsx("div",{className:"lg:col-span-7 w-full order-2 lg:order-2 flex flex-col",children:N.jsx(g1,{items:h1})})]}),N.jsxs("div",{className:"absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50 cursor-pointer",onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),children:[N.jsx("span",{className:"text-[10px] uppercase tracking-widest text-gray-400",children:"Scroll for Setup"}),N.jsx("svg",{className:"w-6 h-6 text-white",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:N.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M19 14l-7 7m0 0l-7-7m7 7V3"})})]})]}),N.jsx("div",{className:"w-full relative z-20 pointer-events-auto",children:N.jsx(Ob,{})}),N.jsx(m1,{})]})]})},py=document.getElementById("root");if(!py)throw new Error("Could not find root element to mount to");const kb=If.createRoot(py);kb.render(N.jsx(Oy.StrictMode,{children:N.jsx(Fb,{})}));
