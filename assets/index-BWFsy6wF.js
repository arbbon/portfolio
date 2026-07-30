(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function gy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Sg={exports:{}},ju={},Mg={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya=Symbol.for("react.element"),vy=Symbol.for("react.portal"),xy=Symbol.for("react.fragment"),yy=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),Ty=Symbol.for("react.forward_ref"),wy=Symbol.for("react.suspense"),Ay=Symbol.for("react.memo"),Cy=Symbol.for("react.lazy"),Ep=Symbol.iterator;function Ry(n){return n===null||typeof n!="object"?null:(n=Ep&&n[Ep]||n["@@iterator"],typeof n=="function"?n:null)}var Eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Tg=Object.assign,wg={};function No(n,e,t){this.props=n,this.context=e,this.refs=wg,this.updater=t||Eg}No.prototype.isReactComponent={};No.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};No.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Ag(){}Ag.prototype=No.prototype;function Kd(n,e,t){this.props=n,this.context=e,this.refs=wg,this.updater=t||Eg}var Zd=Kd.prototype=new Ag;Zd.constructor=Kd;Tg(Zd,No.prototype);Zd.isPureReactComponent=!0;var Tp=Array.isArray,Cg=Object.prototype.hasOwnProperty,Qd={current:null},Rg={key:!0,ref:!0,__self:!0,__source:!0};function Pg(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Cg.call(e,i)&&!Rg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ya,type:n,key:s,ref:o,props:r,_owner:Qd.current}}function Py(n,e){return{$$typeof:Ya,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Jd(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ya}function by(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var wp=/\/+/g;function xc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?by(""+n.key):e.toString(36)}function jl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ya:case vy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+xc(o,0):i,Tp(r)?(t="",n!=null&&(t=n.replace(wp,"$&/")+"/"),jl(r,e,t,"",function(u){return u})):r!=null&&(Jd(r)&&(r=Py(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Tp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+xc(s,a);o+=jl(s,e,t,l,r)}else if(l=Ry(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+xc(s,a++),o+=jl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ol(n,e,t){if(n==null)return n;var i=[],r=0;return jl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Ly(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ln={current:null},Yl={transition:null},Dy={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Yl,ReactCurrentOwner:Qd};function bg(){throw Error("act(...) is not supported in production builds of React.")}Ge.Children={map:ol,forEach:function(n,e,t){ol(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return ol(n,function(){e++}),e},toArray:function(n){return ol(n,function(e){return e})||[]},only:function(n){if(!Jd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=No;Ge.Fragment=xy;Ge.Profiler=Sy;Ge.PureComponent=Kd;Ge.StrictMode=yy;Ge.Suspense=wy;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Dy;Ge.act=bg;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Tg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Qd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Cg.call(e,l)&&!Rg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Ya,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:Ey,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:My,_context:n},n.Consumer=n};Ge.createElement=Pg;Ge.createFactory=function(n){var e=Pg.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:Ty,render:n}};Ge.isValidElement=Jd;Ge.lazy=function(n){return{$$typeof:Cy,_payload:{_status:-1,_result:n},_init:Ly}};Ge.memo=function(n,e){return{$$typeof:Ay,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=Yl.transition;Yl.transition={};try{n()}finally{Yl.transition=e}};Ge.unstable_act=bg;Ge.useCallback=function(n,e){return ln.current.useCallback(n,e)};Ge.useContext=function(n){return ln.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return ln.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return ln.current.useEffect(n,e)};Ge.useId=function(){return ln.current.useId()};Ge.useImperativeHandle=function(n,e,t){return ln.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return ln.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return ln.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return ln.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return ln.current.useReducer(n,e,t)};Ge.useRef=function(n){return ln.current.useRef(n)};Ge.useState=function(n){return ln.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return ln.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return ln.current.useTransition()};Ge.version="18.3.1";Mg.exports=Ge;var bn=Mg.exports;const Lg=gy(bn);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ny=bn,Uy=Symbol.for("react.element"),Iy=Symbol.for("react.fragment"),Oy=Object.prototype.hasOwnProperty,Fy=Ny.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ky={key:!0,ref:!0,__self:!0,__source:!0};function Dg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Oy.call(e,i)&&!ky.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uy,type:n,key:s,ref:o,props:r,_owner:Fy.current}}ju.Fragment=Iy;ju.jsx=Dg;ju.jsxs=Dg;Sg.exports=ju;var oe=Sg.exports,Nf={},Ng={exports:{}},Bn={},Ug={exports:{}},Ig={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,O){var F=D.length;D.push(O);e:for(;0<F;){var $=F-1>>>1,Z=D[$];if(0<r(Z,O))D[$]=O,D[F]=Z,F=$;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var O=D[0],F=D.pop();if(F!==O){D[0]=F;e:for(var $=0,Z=D.length,j=Z>>>1;$<j;){var q=2*($+1)-1,ie=D[q],de=q+1,me=D[de];if(0>r(ie,F))de<Z&&0>r(me,ie)?(D[$]=me,D[de]=F,$=de):(D[$]=ie,D[q]=F,$=q);else if(de<Z&&0>r(me,F))D[$]=me,D[de]=F,$=de;else break e}}return O}function r(D,O){var F=D.sortIndex-O.sortIndex;return F!==0?F:D.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var O=t(u);O!==null;){if(O.callback===null)i(u);else if(O.startTime<=D)i(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(u)}}function y(D){if(_=!1,v(D),!x)if(t(l)!==null)x=!0,H(E);else{var O=t(u);O!==null&&Y(y,O.startTime-D)}}function E(D,O){x=!1,_&&(_=!1,f(P),P=-1),p=!0;var F=h;try{for(v(O),d=t(l);d!==null&&(!(d.expirationTime>O)||D&&!I());){var $=d.callback;if(typeof $=="function"){d.callback=null,h=d.priorityLevel;var Z=$(d.expirationTime<=O);O=n.unstable_now(),typeof Z=="function"?d.callback=Z:d===t(l)&&i(l),v(O)}else i(l);d=t(l)}if(d!==null)var j=!0;else{var q=t(u);q!==null&&Y(y,q.startTime-O),j=!1}return j}finally{d=null,h=F,p=!1}}var A=!1,M=null,P=-1,S=5,w=-1;function I(){return!(n.unstable_now()-w<S)}function X(){if(M!==null){var D=n.unstable_now();w=D;var O=!0;try{O=M(!0,D)}finally{O?K():(A=!1,M=null)}}else A=!1}var K;if(typeof g=="function")K=function(){g(X)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,U=L.port2;L.port1.onmessage=X,K=function(){U.postMessage(null)}}else K=function(){m(X,0)};function H(D){M=D,A||(A=!0,K())}function Y(D,O){P=m(function(){D(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,H(E))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var F=h;h=O;try{return D()}finally{h=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,O){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var F=h;h=D;try{return O()}finally{h=F}},n.unstable_scheduleCallback=function(D,O,F){var $=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?$+F:$):F=$,D){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=F+Z,D={id:c++,callback:O,priorityLevel:D,startTime:F,expirationTime:Z,sortIndex:-1},F>$?(D.sortIndex=F,e(u,D),t(l)===null&&D===t(u)&&(_?(f(P),P=-1):_=!0,Y(y,F-$))):(D.sortIndex=Z,e(l,D),x||p||(x=!0,H(E))),D},n.unstable_shouldYield=I,n.unstable_wrapCallback=function(D){var O=h;return function(){var F=h;h=O;try{return D.apply(this,arguments)}finally{h=F}}}})(Ig);Ug.exports=Ig;var zy=Ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var By=bn,Fn=zy;function ee(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Og=new Set,xa={};function Es(n,e){go(n,e),go(n+"Capture",e)}function go(n,e){for(xa[n]=e,n=0;n<e.length;n++)Og.add(e[n])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=Object.prototype.hasOwnProperty,Hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ap={},Cp={};function Gy(n){return Uf.call(Cp,n)?!0:Uf.call(Ap,n)?!1:Hy.test(n)?Cp[n]=!0:(Ap[n]=!0,!1)}function Vy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Wy(n,e,t,i){if(e===null||typeof e>"u"||Vy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Vt[n]=new un(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Vt[e]=new un(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Vt[n]=new un(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Vt[n]=new un(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Vt[n]=new un(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Vt[n]=new un(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Vt[n]=new un(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Vt[n]=new un(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Vt[n]=new un(n,5,!1,n.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(eh,th);Vt[e]=new un(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(eh,th);Vt[e]=new un(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(eh,th);Vt[e]=new un(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Vt[n]=new un(n,1,!1,n.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Vt[n]=new un(n,1,!1,n.toLowerCase(),null,!0,!0)});function nh(n,e,t,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Wy(e,t,r,i)&&(t=null),i||r===null?Gy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ji=By.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Ws=Symbol.for("react.portal"),Xs=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),Fg=Symbol.for("react.provider"),kg=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),Of=Symbol.for("react.suspense"),Ff=Symbol.for("react.suspense_list"),sh=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),zg=Symbol.for("react.offscreen"),Rp=Symbol.iterator;function zo(n){return n===null||typeof n!="object"?null:(n=Rp&&n[Rp]||n["@@iterator"],typeof n=="function"?n:null)}var _t=Object.assign,yc;function Jo(n){if(yc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);yc=e&&e[1]||""}return`
`+yc+n}var Sc=!1;function Mc(n,e){if(!n||Sc)return"";Sc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Sc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Jo(n):""}function Xy(n){switch(n.tag){case 5:return Jo(n.type);case 16:return Jo("Lazy");case 13:return Jo("Suspense");case 19:return Jo("SuspenseList");case 0:case 2:case 15:return n=Mc(n.type,!1),n;case 11:return n=Mc(n.type.render,!1),n;case 1:return n=Mc(n.type,!0),n;default:return""}}function kf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Xs:return"Fragment";case Ws:return"Portal";case If:return"Profiler";case ih:return"StrictMode";case Of:return"Suspense";case Ff:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case kg:return(n.displayName||"Context")+".Consumer";case Fg:return(n._context.displayName||"Context")+".Provider";case rh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case sh:return e=n.displayName||null,e!==null?e:kf(n.type)||"Memo";case or:e=n._payload,n=n._init;try{return kf(n(e))}catch{}}return null}function jy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return kf(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function br(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Bg(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Yy(n){var e=Bg(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ll(n){n._valueTracker||(n._valueTracker=Yy(n))}function Hg(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Bg(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function lu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function zf(n,e){var t=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Pp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=br(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gg(n,e){e=e.checked,e!=null&&nh(n,"checked",e,!1)}function Bf(n,e){Gg(n,e);var t=br(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Hf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Hf(n,e.type,br(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function bp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Hf(n,e,t){(e!=="number"||lu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var ea=Array.isArray;function oo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+br(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Gf(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Lp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ee(92));if(ea(t)){if(1<t.length)throw Error(ee(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:br(t)}}function Vg(n,e){var t=br(e.value),i=br(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Dp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function Wg(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Vf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?Wg(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ul,Xg=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function ya(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var oa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qy=["Webkit","ms","Moz","O"];Object.keys(oa).forEach(function(n){qy.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),oa[e]=oa[n]})});function jg(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||oa.hasOwnProperty(n)&&oa[n]?(""+e).trim():e+"px"}function Yg(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=jg(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var $y=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Wf(n,e){if(e){if($y[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Xf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=null;function oh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Yf=null,ao=null,lo=null;function Np(n){if(n=Ka(n)){if(typeof Yf!="function")throw Error(ee(280));var e=n.stateNode;e&&(e=Zu(e),Yf(n.stateNode,n.type,e))}}function qg(n){ao?lo?lo.push(n):lo=[n]:ao=n}function $g(){if(ao){var n=ao,e=lo;if(lo=ao=null,Np(n),e)for(n=0;n<e.length;n++)Np(e[n])}}function Kg(n,e){return n(e)}function Zg(){}var Ec=!1;function Qg(n,e,t){if(Ec)return n(e,t);Ec=!0;try{return Kg(n,e,t)}finally{Ec=!1,(ao!==null||lo!==null)&&(Zg(),$g())}}function Sa(n,e){var t=n.stateNode;if(t===null)return null;var i=Zu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ee(231,e,typeof t));return t}var qf=!1;if(ji)try{var Bo={};Object.defineProperty(Bo,"passive",{get:function(){qf=!0}}),window.addEventListener("test",Bo,Bo),window.removeEventListener("test",Bo,Bo)}catch{qf=!1}function Ky(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var aa=!1,uu=null,cu=!1,$f=null,Zy={onError:function(n){aa=!0,uu=n}};function Qy(n,e,t,i,r,s,o,a,l){aa=!1,uu=null,Ky.apply(Zy,arguments)}function Jy(n,e,t,i,r,s,o,a,l){if(Qy.apply(this,arguments),aa){if(aa){var u=uu;aa=!1,uu=null}else throw Error(ee(198));cu||(cu=!0,$f=u)}}function Ts(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Jg(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Up(n){if(Ts(n)!==n)throw Error(ee(188))}function eS(n){var e=n.alternate;if(!e){if(e=Ts(n),e===null)throw Error(ee(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Up(r),n;if(s===i)return Up(r),e;s=s.sibling}throw Error(ee(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(t.alternate!==i)throw Error(ee(190))}if(t.tag!==3)throw Error(ee(188));return t.stateNode.current===t?n:e}function e0(n){return n=eS(n),n!==null?t0(n):null}function t0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=t0(n);if(e!==null)return e;n=n.sibling}return null}var n0=Fn.unstable_scheduleCallback,Ip=Fn.unstable_cancelCallback,tS=Fn.unstable_shouldYield,nS=Fn.unstable_requestPaint,Et=Fn.unstable_now,iS=Fn.unstable_getCurrentPriorityLevel,ah=Fn.unstable_ImmediatePriority,i0=Fn.unstable_UserBlockingPriority,fu=Fn.unstable_NormalPriority,rS=Fn.unstable_LowPriority,r0=Fn.unstable_IdlePriority,Yu=null,Ai=null;function sS(n){if(Ai&&typeof Ai.onCommitFiberRoot=="function")try{Ai.onCommitFiberRoot(Yu,n,void 0,(n.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:lS,oS=Math.log,aS=Math.LN2;function lS(n){return n>>>=0,n===0?32:31-(oS(n)/aS|0)|0}var cl=64,fl=4194304;function ta(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function du(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ta(a):(s&=o,s!==0&&(i=ta(s)))}else o=t&~r,o!==0?i=ta(o):s!==0&&(i=ta(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-hi(e),r=1<<t,i|=n[t],e&=~r;return i}function uS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=uS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Kf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function s0(){var n=cl;return cl<<=1,!(cl&4194240)&&(cl=64),n}function Tc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function qa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-hi(e),n[e]=t}function fS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-hi(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function lh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-hi(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var $e=0;function o0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var a0,uh,l0,u0,c0,Zf=!1,dl=[],gr=null,vr=null,xr=null,Ma=new Map,Ea=new Map,lr=[],dS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Op(n,e){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function Ho(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ka(e),e!==null&&uh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function hS(n,e,t,i,r){switch(e){case"focusin":return gr=Ho(gr,n,e,t,i,r),!0;case"dragenter":return vr=Ho(vr,n,e,t,i,r),!0;case"mouseover":return xr=Ho(xr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,Ho(Ma.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,Ho(Ea.get(s)||null,n,e,t,i,r)),!0}return!1}function f0(n){var e=ns(n.target);if(e!==null){var t=Ts(e);if(t!==null){if(e=t.tag,e===13){if(e=Jg(t),e!==null){n.blockedOn=e,c0(n.priority,function(){l0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ql(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Qf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);jf=i,t.target.dispatchEvent(i),jf=null}else return e=Ka(t),e!==null&&uh(e),n.blockedOn=t,!1;e.shift()}return!0}function Fp(n,e,t){ql(n)&&t.delete(e)}function pS(){Zf=!1,gr!==null&&ql(gr)&&(gr=null),vr!==null&&ql(vr)&&(vr=null),xr!==null&&ql(xr)&&(xr=null),Ma.forEach(Fp),Ea.forEach(Fp)}function Go(n,e){n.blockedOn===e&&(n.blockedOn=null,Zf||(Zf=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,pS)))}function Ta(n){function e(r){return Go(r,n)}if(0<dl.length){Go(dl[0],n);for(var t=1;t<dl.length;t++){var i=dl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(gr!==null&&Go(gr,n),vr!==null&&Go(vr,n),xr!==null&&Go(xr,n),Ma.forEach(e),Ea.forEach(e),t=0;t<lr.length;t++)i=lr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<lr.length&&(t=lr[0],t.blockedOn===null);)f0(t),t.blockedOn===null&&lr.shift()}var uo=Ji.ReactCurrentBatchConfig,hu=!0;function mS(n,e,t,i){var r=$e,s=uo.transition;uo.transition=null;try{$e=1,ch(n,e,t,i)}finally{$e=r,uo.transition=s}}function _S(n,e,t,i){var r=$e,s=uo.transition;uo.transition=null;try{$e=4,ch(n,e,t,i)}finally{$e=r,uo.transition=s}}function ch(n,e,t,i){if(hu){var r=Qf(n,e,t,i);if(r===null)Uc(n,e,i,pu,t),Op(n,i);else if(hS(r,n,e,t,i))i.stopPropagation();else if(Op(n,i),e&4&&-1<dS.indexOf(n)){for(;r!==null;){var s=Ka(r);if(s!==null&&a0(s),s=Qf(n,e,t,i),s===null&&Uc(n,e,i,pu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Uc(n,e,i,null,t)}}var pu=null;function Qf(n,e,t,i){if(pu=null,n=oh(i),n=ns(n),n!==null)if(e=Ts(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Jg(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return pu=n,null}function d0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iS()){case ah:return 1;case i0:return 4;case fu:case rS:return 16;case r0:return 536870912;default:return 16}default:return 16}}var cr=null,fh=null,$l=null;function h0(){if($l)return $l;var n,e=fh,t=e.length,i,r="value"in cr?cr.value:cr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return $l=r.slice(n,1<i?1-i:void 0)}function Kl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function hl(){return!0}function kp(){return!1}function Hn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?hl:kp,this.isPropagationStopped=kp,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=hl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=hl)},persist:function(){},isPersistent:hl}),e}var Uo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=Hn(Uo),$a=_t({},Uo,{view:0,detail:0}),gS=Hn($a),wc,Ac,Vo,qu=_t({},$a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Vo&&(Vo&&n.type==="mousemove"?(wc=n.screenX-Vo.screenX,Ac=n.screenY-Vo.screenY):Ac=wc=0,Vo=n),wc)},movementY:function(n){return"movementY"in n?n.movementY:Ac}}),zp=Hn(qu),vS=_t({},qu,{dataTransfer:0}),xS=Hn(vS),yS=_t({},$a,{relatedTarget:0}),Cc=Hn(yS),SS=_t({},Uo,{animationName:0,elapsedTime:0,pseudoElement:0}),MS=Hn(SS),ES=_t({},Uo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),TS=Hn(ES),wS=_t({},Uo,{data:0}),Bp=Hn(wS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=RS[n])?!!e[n]:!1}function hh(){return PS}var bS=_t({},$a,{key:function(n){if(n.key){var e=AS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Kl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?CS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(n){return n.type==="keypress"?Kl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Kl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),LS=Hn(bS),DS=_t({},qu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hp=Hn(DS),NS=_t({},$a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),US=Hn(NS),IS=_t({},Uo,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=Hn(IS),FS=_t({},qu,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kS=Hn(FS),zS=[9,13,27,32],ph=ji&&"CompositionEvent"in window,la=null;ji&&"documentMode"in document&&(la=document.documentMode);var BS=ji&&"TextEvent"in window&&!la,p0=ji&&(!ph||la&&8<la&&11>=la),Gp=" ",Vp=!1;function m0(n,e){switch(n){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var js=!1;function HS(n,e){switch(n){case"compositionend":return _0(e);case"keypress":return e.which!==32?null:(Vp=!0,Gp);case"textInput":return n=e.data,n===Gp&&Vp?null:n;default:return null}}function GS(n,e){if(js)return n==="compositionend"||!ph&&m0(n,e)?(n=h0(),$l=fh=cr=null,js=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return p0&&e.locale!=="ko"?null:e.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!VS[n.type]:e==="textarea"}function g0(n,e,t,i){qg(i),e=mu(e,"onChange"),0<e.length&&(t=new dh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var ua=null,wa=null;function WS(n){R0(n,0)}function $u(n){var e=$s(n);if(Hg(e))return n}function XS(n,e){if(n==="change")return e}var v0=!1;if(ji){var Rc;if(ji){var Pc="oninput"in document;if(!Pc){var Xp=document.createElement("div");Xp.setAttribute("oninput","return;"),Pc=typeof Xp.oninput=="function"}Rc=Pc}else Rc=!1;v0=Rc&&(!document.documentMode||9<document.documentMode)}function jp(){ua&&(ua.detachEvent("onpropertychange",x0),wa=ua=null)}function x0(n){if(n.propertyName==="value"&&$u(wa)){var e=[];g0(e,wa,n,oh(n)),Qg(WS,e)}}function jS(n,e,t){n==="focusin"?(jp(),ua=e,wa=t,ua.attachEvent("onpropertychange",x0)):n==="focusout"&&jp()}function YS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return $u(wa)}function qS(n,e){if(n==="click")return $u(e)}function $S(n,e){if(n==="input"||n==="change")return $u(e)}function KS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var mi=typeof Object.is=="function"?Object.is:KS;function Aa(n,e){if(mi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Uf.call(e,r)||!mi(n[r],e[r]))return!1}return!0}function Yp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qp(n,e){var t=Yp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Yp(t)}}function y0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?y0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function S0(){for(var n=window,e=lu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=lu(n.document)}return e}function mh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function ZS(n){var e=S0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&y0(t.ownerDocument.documentElement,t)){if(i!==null&&mh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=qp(t,s);var o=qp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var QS=ji&&"documentMode"in document&&11>=document.documentMode,Ys=null,Jf=null,ca=null,ed=!1;function $p(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ed||Ys==null||Ys!==lu(i)||(i=Ys,"selectionStart"in i&&mh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Aa(ca,i)||(ca=i,i=mu(Jf,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ys)))}function pl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var qs={animationend:pl("Animation","AnimationEnd"),animationiteration:pl("Animation","AnimationIteration"),animationstart:pl("Animation","AnimationStart"),transitionend:pl("Transition","TransitionEnd")},bc={},M0={};ji&&(M0=document.createElement("div").style,"AnimationEvent"in window||(delete qs.animationend.animation,delete qs.animationiteration.animation,delete qs.animationstart.animation),"TransitionEvent"in window||delete qs.transitionend.transition);function Ku(n){if(bc[n])return bc[n];if(!qs[n])return n;var e=qs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in M0)return bc[n]=e[t];return n}var E0=Ku("animationend"),T0=Ku("animationiteration"),w0=Ku("animationstart"),A0=Ku("transitionend"),C0=new Map,Kp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(n,e){C0.set(n,e),Es(e,[n])}for(var Lc=0;Lc<Kp.length;Lc++){var Dc=Kp[Lc],JS=Dc.toLowerCase(),eM=Dc[0].toUpperCase()+Dc.slice(1);Or(JS,"on"+eM)}Or(E0,"onAnimationEnd");Or(T0,"onAnimationIteration");Or(w0,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(A0,"onTransitionEnd");go("onMouseEnter",["mouseout","mouseover"]);go("onMouseLeave",["mouseout","mouseover"]);go("onPointerEnter",["pointerout","pointerover"]);go("onPointerLeave",["pointerout","pointerover"]);Es("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Es("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Es("onBeforeInput",["compositionend","keypress","textInput","paste"]);Es("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Es("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tM=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Zp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Jy(i,e,void 0,n),n.currentTarget=null}function R0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Zp(r,a,u),s=l}}}if(cu)throw n=$f,cu=!1,$f=null,n}function rt(n,e){var t=e[sd];t===void 0&&(t=e[sd]=new Set);var i=n+"__bubble";t.has(i)||(P0(e,n,2,!1),t.add(i))}function Nc(n,e,t){var i=0;e&&(i|=4),P0(t,n,i,e)}var ml="_reactListening"+Math.random().toString(36).slice(2);function Ca(n){if(!n[ml]){n[ml]=!0,Og.forEach(function(t){t!=="selectionchange"&&(tM.has(t)||Nc(t,!1,n),Nc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ml]||(e[ml]=!0,Nc("selectionchange",!1,e))}}function P0(n,e,t,i){switch(d0(e)){case 1:var r=mS;break;case 4:r=_S;break;default:r=ch}t=r.bind(null,e,t,n),r=void 0,!qf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Uc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Qg(function(){var u=s,c=oh(t),d=[];e:{var h=C0.get(n);if(h!==void 0){var p=dh,x=n;switch(n){case"keypress":if(Kl(t)===0)break e;case"keydown":case"keyup":p=LS;break;case"focusin":x="focus",p=Cc;break;case"focusout":x="blur",p=Cc;break;case"beforeblur":case"afterblur":p=Cc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=xS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=US;break;case E0:case T0:case w0:p=MS;break;case A0:p=OS;break;case"scroll":p=gS;break;case"wheel":p=kS;break;case"copy":case"cut":case"paste":p=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hp}var _=(e&4)!==0,m=!_&&n==="scroll",f=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,f!==null&&(y=Sa(g,f),y!=null&&_.push(Ra(g,y,v)))),m)break;g=g.return}0<_.length&&(h=new p(h,x,null,t,c),d.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==jf&&(x=t.relatedTarget||t.fromElement)&&(ns(x)||x[Yi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?ns(x):null,x!==null&&(m=Ts(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(_=zp,y="onMouseLeave",f="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=Hp,y="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?h:$s(p),v=x==null?h:$s(x),h=new _(y,g+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,ns(c)===u&&(_=new _(f,g+"enter",x,t,c),_.target=v,_.relatedTarget=m,y=_),m=y,p&&x)t:{for(_=p,f=x,g=0,v=_;v;v=As(v))g++;for(v=0,y=f;y;y=As(y))v++;for(;0<g-v;)_=As(_),g--;for(;0<v-g;)f=As(f),v--;for(;g--;){if(_===f||f!==null&&_===f.alternate)break t;_=As(_),f=As(f)}_=null}else _=null;p!==null&&Qp(d,h,p,_,!1),x!==null&&m!==null&&Qp(d,m,x,_,!0)}}e:{if(h=u?$s(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=XS;else if(Wp(h))if(v0)E=$S;else{E=YS;var A=jS}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=qS);if(E&&(E=E(n,u))){g0(d,E,t,c);break e}A&&A(n,h,u),n==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&Hf(h,"number",h.value)}switch(A=u?$s(u):window,n){case"focusin":(Wp(A)||A.contentEditable==="true")&&(Ys=A,Jf=u,ca=null);break;case"focusout":ca=Jf=Ys=null;break;case"mousedown":ed=!0;break;case"contextmenu":case"mouseup":case"dragend":ed=!1,$p(d,t,c);break;case"selectionchange":if(QS)break;case"keydown":case"keyup":$p(d,t,c)}var M;if(ph)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else js?m0(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(p0&&t.locale!=="ko"&&(js||P!=="onCompositionStart"?P==="onCompositionEnd"&&js&&(M=h0()):(cr=c,fh="value"in cr?cr.value:cr.textContent,js=!0)),A=mu(u,P),0<A.length&&(P=new Bp(P,n,null,t,c),d.push({event:P,listeners:A}),M?P.data=M:(M=_0(t),M!==null&&(P.data=M)))),(M=BS?HS(n,t):GS(n,t))&&(u=mu(u,"onBeforeInput"),0<u.length&&(c=new Bp("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=M))}R0(d,e)})}function Ra(n,e,t){return{instance:n,listener:e,currentTarget:t}}function mu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(n,t),s!=null&&i.unshift(Ra(n,s,r)),s=Sa(n,e),s!=null&&i.push(Ra(n,s,r))),n=n.return}return i}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Qp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Sa(t,s),l!=null&&o.unshift(Ra(t,l,a))):r||(l=Sa(t,s),l!=null&&o.push(Ra(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var nM=/\r\n?/g,iM=/\u0000|\uFFFD/g;function Jp(n){return(typeof n=="string"?n:""+n).replace(nM,`
`).replace(iM,"")}function _l(n,e,t){if(e=Jp(e),Jp(n)!==e&&t)throw Error(ee(425))}function _u(){}var td=null,nd=null;function id(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var rd=typeof setTimeout=="function"?setTimeout:void 0,rM=typeof clearTimeout=="function"?clearTimeout:void 0,em=typeof Promise=="function"?Promise:void 0,sM=typeof queueMicrotask=="function"?queueMicrotask:typeof em<"u"?function(n){return em.resolve(null).then(n).catch(oM)}:rd;function oM(n){setTimeout(function(){throw n})}function Ic(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ta(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ta(e)}function yr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function tm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Io=Math.random().toString(36).slice(2),Si="__reactFiber$"+Io,Pa="__reactProps$"+Io,Yi="__reactContainer$"+Io,sd="__reactEvents$"+Io,aM="__reactListeners$"+Io,lM="__reactHandles$"+Io;function ns(n){var e=n[Si];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Yi]||t[Si]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=tm(n);n!==null;){if(t=n[Si])return t;n=tm(n)}return e}n=t,t=n.parentNode}return null}function Ka(n){return n=n[Si]||n[Yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function $s(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ee(33))}function Zu(n){return n[Pa]||null}var od=[],Ks=-1;function Fr(n){return{current:n}}function ot(n){0>Ks||(n.current=od[Ks],od[Ks]=null,Ks--)}function it(n,e){Ks++,od[Ks]=n.current,n.current=e}var Lr={},Jt=Fr(Lr),mn=Fr(!1),_s=Lr;function vo(n,e){var t=n.type.contextTypes;if(!t)return Lr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function _n(n){return n=n.childContextTypes,n!=null}function gu(){ot(mn),ot(Jt)}function nm(n,e,t){if(Jt.current!==Lr)throw Error(ee(168));it(Jt,e),it(mn,t)}function b0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,jy(n)||"Unknown",r));return _t({},t,i)}function vu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Lr,_s=Jt.current,it(Jt,n),it(mn,mn.current),!0}function im(n,e,t){var i=n.stateNode;if(!i)throw Error(ee(169));t?(n=b0(n,e,_s),i.__reactInternalMemoizedMergedChildContext=n,ot(mn),ot(Jt),it(Jt,n)):ot(mn),it(mn,t)}var Bi=null,Qu=!1,Oc=!1;function L0(n){Bi===null?Bi=[n]:Bi.push(n)}function uM(n){Qu=!0,L0(n)}function kr(){if(!Oc&&Bi!==null){Oc=!0;var n=0,e=$e;try{var t=Bi;for($e=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Bi=null,Qu=!1}catch(r){throw Bi!==null&&(Bi=Bi.slice(n+1)),n0(ah,kr),r}finally{$e=e,Oc=!1}}return null}var Zs=[],Qs=0,xu=null,yu=0,Xn=[],jn=0,gs=null,Gi=1,Vi="";function $r(n,e){Zs[Qs++]=yu,Zs[Qs++]=xu,xu=n,yu=e}function D0(n,e,t){Xn[jn++]=Gi,Xn[jn++]=Vi,Xn[jn++]=gs,gs=n;var i=Gi;n=Vi;var r=32-hi(i)-1;i&=~(1<<r),t+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Gi=1<<32-hi(e)+r|t<<r|i,Vi=s+n}else Gi=1<<s|t<<r|i,Vi=n}function _h(n){n.return!==null&&($r(n,1),D0(n,1,0))}function gh(n){for(;n===xu;)xu=Zs[--Qs],Zs[Qs]=null,yu=Zs[--Qs],Zs[Qs]=null;for(;n===gs;)gs=Xn[--jn],Xn[jn]=null,Vi=Xn[--jn],Xn[jn]=null,Gi=Xn[--jn],Xn[jn]=null}var In=null,Dn=null,at=!1,ui=null;function N0(n,e){var t=Kn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function rm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,In=n,Dn=yr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,In=n,Dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=gs!==null?{id:Gi,overflow:Vi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Kn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,In=n,Dn=null,!0):!1;default:return!1}}function ad(n){return(n.mode&1)!==0&&(n.flags&128)===0}function ld(n){if(at){var e=Dn;if(e){var t=e;if(!rm(n,e)){if(ad(n))throw Error(ee(418));e=yr(t.nextSibling);var i=In;e&&rm(n,e)?N0(i,t):(n.flags=n.flags&-4097|2,at=!1,In=n)}}else{if(ad(n))throw Error(ee(418));n.flags=n.flags&-4097|2,at=!1,In=n}}}function sm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;In=n}function gl(n){if(n!==In)return!1;if(!at)return sm(n),at=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!id(n.type,n.memoizedProps)),e&&(e=Dn)){if(ad(n))throw U0(),Error(ee(418));for(;e;)N0(n,e),e=yr(e.nextSibling)}if(sm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ee(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Dn=yr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Dn=null}}else Dn=In?yr(n.stateNode.nextSibling):null;return!0}function U0(){for(var n=Dn;n;)n=yr(n.nextSibling)}function xo(){Dn=In=null,at=!1}function vh(n){ui===null?ui=[n]:ui.push(n)}var cM=Ji.ReactCurrentBatchConfig;function Wo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ee(309));var i=t.stateNode}if(!i)throw Error(ee(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ee(284));if(!t._owner)throw Error(ee(290,n))}return n}function vl(n,e){throw n=Object.prototype.toString.call(e),Error(ee(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function om(n){var e=n._init;return e(n._payload)}function I0(n){function e(f,g){if(n){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function t(f,g){if(!n)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Tr(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,n?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,y){return g===null||g.tag!==6?(g=Vc(v,f.mode,y),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,y){var E=v.type;return E===Xs?c(f,g,v.props.children,y,v.key):g!==null&&(g.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===or&&om(E)===g.type)?(y=r(g,v.props),y.ref=Wo(f,g,v),y.return=f,y):(y=iu(v.type,v.key,v.props,null,f.mode,y),y.ref=Wo(f,g,v),y.return=f,y)}function u(f,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Wc(v,f.mode,y),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function c(f,g,v,y,E){return g===null||g.tag!==7?(g=as(v,f.mode,y,E),g.return=f,g):(g=r(g,v),g.return=f,g)}function d(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Vc(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case al:return v=iu(g.type,g.key,g.props,null,f.mode,v),v.ref=Wo(f,null,g),v.return=f,v;case Ws:return g=Wc(g,f.mode,v),g.return=f,g;case or:var y=g._init;return d(f,y(g._payload),v)}if(ea(g)||zo(g))return g=as(g,f.mode,v,null),g.return=f,g;vl(f,g)}return null}function h(f,g,v,y){var E=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return E!==null?null:a(f,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case al:return v.key===E?l(f,g,v,y):null;case Ws:return v.key===E?u(f,g,v,y):null;case or:return E=v._init,h(f,g,E(v._payload),y)}if(ea(v)||zo(v))return E!==null?null:c(f,g,v,y,null);vl(f,v)}return null}function p(f,g,v,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(v)||null,a(g,f,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return f=f.get(y.key===null?v:y.key)||null,l(g,f,y,E);case Ws:return f=f.get(y.key===null?v:y.key)||null,u(g,f,y,E);case or:var A=y._init;return p(f,g,v,A(y._payload),E)}if(ea(y)||zo(y))return f=f.get(v)||null,c(g,f,y,E,null);vl(g,y)}return null}function x(f,g,v,y){for(var E=null,A=null,M=g,P=g=0,S=null;M!==null&&P<v.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var w=h(f,M,v[P],y);if(w===null){M===null&&(M=S);break}n&&M&&w.alternate===null&&e(f,M),g=s(w,g,P),A===null?E=w:A.sibling=w,A=w,M=S}if(P===v.length)return t(f,M),at&&$r(f,P),E;if(M===null){for(;P<v.length;P++)M=d(f,v[P],y),M!==null&&(g=s(M,g,P),A===null?E=M:A.sibling=M,A=M);return at&&$r(f,P),E}for(M=i(f,M);P<v.length;P++)S=p(M,f,P,v[P],y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),g=s(S,g,P),A===null?E=S:A.sibling=S,A=S);return n&&M.forEach(function(I){return e(f,I)}),at&&$r(f,P),E}function _(f,g,v,y){var E=zo(v);if(typeof E!="function")throw Error(ee(150));if(v=E.call(v),v==null)throw Error(ee(151));for(var A=E=null,M=g,P=g=0,S=null,w=v.next();M!==null&&!w.done;P++,w=v.next()){M.index>P?(S=M,M=null):S=M.sibling;var I=h(f,M,w.value,y);if(I===null){M===null&&(M=S);break}n&&M&&I.alternate===null&&e(f,M),g=s(I,g,P),A===null?E=I:A.sibling=I,A=I,M=S}if(w.done)return t(f,M),at&&$r(f,P),E;if(M===null){for(;!w.done;P++,w=v.next())w=d(f,w.value,y),w!==null&&(g=s(w,g,P),A===null?E=w:A.sibling=w,A=w);return at&&$r(f,P),E}for(M=i(f,M);!w.done;P++,w=v.next())w=p(M,f,P,w.value,y),w!==null&&(n&&w.alternate!==null&&M.delete(w.key===null?P:w.key),g=s(w,g,P),A===null?E=w:A.sibling=w,A=w);return n&&M.forEach(function(X){return e(f,X)}),at&&$r(f,P),E}function m(f,g,v,y){if(typeof v=="object"&&v!==null&&v.type===Xs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case al:e:{for(var E=v.key,A=g;A!==null;){if(A.key===E){if(E=v.type,E===Xs){if(A.tag===7){t(f,A.sibling),g=r(A,v.props.children),g.return=f,f=g;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===or&&om(E)===A.type){t(f,A.sibling),g=r(A,v.props),g.ref=Wo(f,A,v),g.return=f,f=g;break e}t(f,A);break}else e(f,A);A=A.sibling}v.type===Xs?(g=as(v.props.children,f.mode,y,v.key),g.return=f,f=g):(y=iu(v.type,v.key,v.props,null,f.mode,y),y.ref=Wo(f,g,v),y.return=f,f=y)}return o(f);case Ws:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{t(f,g);break}else e(f,g);g=g.sibling}g=Wc(v,f.mode,y),g.return=f,f=g}return o(f);case or:return A=v._init,m(f,g,A(v._payload),y)}if(ea(v))return x(f,g,v,y);if(zo(v))return _(f,g,v,y);vl(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(f,g.sibling),g=r(g,v),g.return=f,f=g):(t(f,g),g=Vc(v,f.mode,y),g.return=f,f=g),o(f)):t(f,g)}return m}var yo=I0(!0),O0=I0(!1),Su=Fr(null),Mu=null,Js=null,xh=null;function yh(){xh=Js=Mu=null}function Sh(n){var e=Su.current;ot(Su),n._currentValue=e}function ud(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function co(n,e){Mu=n,xh=Js=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(pn=!0),n.firstContext=null)}function ei(n){var e=n._currentValue;if(xh!==n)if(n={context:n,memoizedValue:e,next:null},Js===null){if(Mu===null)throw Error(ee(308));Js=n,Mu.dependencies={lanes:0,firstContext:n}}else Js=Js.next=n;return e}var is=null;function Mh(n){is===null?is=[n]:is.push(n)}function F0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Mh(e)):(t.next=r.next,r.next=t),e.interleaved=t,qi(n,i)}function qi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ar=!1;function Eh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function k0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Xi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(n,t)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(n,t)}function Zl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,lh(n,t)}}function am(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Eu(n,e,t,i){var r=n.updateQueue;ar=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(h=e,p=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){d=x.call(p,d,h);break e}d=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(p,d,h):x,h==null)break e;d=_t({},d,h);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);xs|=o,n.lanes=o,n.memoizedState=d}}function lm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var Za={},Ci=Fr(Za),ba=Fr(Za),La=Fr(Za);function rs(n){if(n===Za)throw Error(ee(174));return n}function Th(n,e){switch(it(La,e),it(ba,n),it(Ci,Za),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Vf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Vf(e,n)}ot(Ci),it(Ci,e)}function So(){ot(Ci),ot(ba),ot(La)}function z0(n){rs(La.current);var e=rs(Ci.current),t=Vf(e,n.type);e!==t&&(it(ba,n),it(Ci,t))}function wh(n){ba.current===n&&(ot(Ci),ot(ba))}var dt=Fr(0);function Tu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fc=[];function Ah(){for(var n=0;n<Fc.length;n++)Fc[n]._workInProgressVersionPrimary=null;Fc.length=0}var Ql=Ji.ReactCurrentDispatcher,kc=Ji.ReactCurrentBatchConfig,vs=0,mt=null,Ct=null,It=null,wu=!1,fa=!1,Da=0,fM=0;function Xt(){throw Error(ee(321))}function Ch(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!mi(n[t],e[t]))return!1;return!0}function Rh(n,e,t,i,r,s){if(vs=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=n===null||n.memoizedState===null?mM:_M,n=t(i,r),fa){s=0;do{if(fa=!1,Da=0,25<=s)throw Error(ee(301));s+=1,It=Ct=null,e.updateQueue=null,Ql.current=gM,n=t(i,r)}while(fa)}if(Ql.current=Au,e=Ct!==null&&Ct.next!==null,vs=0,It=Ct=mt=null,wu=!1,e)throw Error(ee(300));return n}function Ph(){var n=Da!==0;return Da=0,n}function vi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?mt.memoizedState=It=n:It=It.next=n,It}function ti(){if(Ct===null){var n=mt.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=It===null?mt.memoizedState:It.next;if(e!==null)It=e,Ct=n;else{if(n===null)throw Error(ee(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?mt.memoizedState=It=n:It=It.next=n}return It}function Na(n,e){return typeof e=="function"?e(n):e}function zc(n){var e=ti(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((vs&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,mt.lanes|=c,xs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,mi(i,e.memoizedState)||(pn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,mt.lanes|=s,xs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Bc(n){var e=ti(),t=e.queue;if(t===null)throw Error(ee(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);mi(s,e.memoizedState)||(pn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function B0(){}function H0(n,e){var t=mt,i=ti(),r=e(),s=!mi(i.memoizedState,r);if(s&&(i.memoizedState=r,pn=!0),i=i.queue,bh(W0.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,Ua(9,V0.bind(null,t,i,r,e),void 0,null),kt===null)throw Error(ee(349));vs&30||G0(t,e,r)}return r}function G0(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function V0(n,e,t,i){e.value=t,e.getSnapshot=i,X0(e)&&j0(n)}function W0(n,e,t){return t(function(){X0(e)&&j0(n)})}function X0(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!mi(n,t)}catch{return!0}}function j0(n){var e=qi(n,1);e!==null&&pi(e,n,1,-1)}function um(n){var e=vi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:n},e.queue=n,n=n.dispatch=pM.bind(null,mt,n),[e.memoizedState,n]}function Ua(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function Y0(){return ti().memoizedState}function Jl(n,e,t,i){var r=vi();mt.flags|=n,r.memoizedState=Ua(1|e,t,void 0,i===void 0?null:i)}function Ju(n,e,t,i){var r=ti();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&Ch(i,o.deps)){r.memoizedState=Ua(e,t,s,i);return}}mt.flags|=n,r.memoizedState=Ua(1|e,t,s,i)}function cm(n,e){return Jl(8390656,8,n,e)}function bh(n,e){return Ju(2048,8,n,e)}function q0(n,e){return Ju(4,2,n,e)}function $0(n,e){return Ju(4,4,n,e)}function K0(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function Z0(n,e,t){return t=t!=null?t.concat([n]):null,Ju(4,4,K0.bind(null,e,n),t)}function Lh(){}function Q0(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function J0(n,e){var t=ti();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Ch(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function ev(n,e,t){return vs&21?(mi(t,e)||(t=s0(),mt.lanes|=t,xs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,pn=!0),n.memoizedState=t)}function dM(n,e){var t=$e;$e=t!==0&&4>t?t:4,n(!0);var i=kc.transition;kc.transition={};try{n(!1),e()}finally{$e=t,kc.transition=i}}function tv(){return ti().memoizedState}function hM(n,e,t){var i=Er(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},nv(n))iv(e,t);else if(t=F0(n,e,t,i),t!==null){var r=an();pi(t,n,i,r),rv(t,e,i)}}function pM(n,e,t){var i=Er(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(nv(n))iv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,mi(a,o)){var l=e.interleaved;l===null?(r.next=r,Mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=F0(n,e,r,i),t!==null&&(r=an(),pi(t,n,i,r),rv(t,e,i))}}function nv(n){var e=n.alternate;return n===mt||e!==null&&e===mt}function iv(n,e){fa=wu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function rv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,lh(n,t)}}var Au={readContext:ei,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},mM={readContext:ei,useCallback:function(n,e){return vi().memoizedState=[n,e===void 0?null:e],n},useContext:ei,useEffect:cm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Jl(4194308,4,K0.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Jl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Jl(4,2,n,e)},useMemo:function(n,e){var t=vi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=vi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=hM.bind(null,mt,n),[i.memoizedState,n]},useRef:function(n){var e=vi();return n={current:n},e.memoizedState=n},useState:um,useDebugValue:Lh,useDeferredValue:function(n){return vi().memoizedState=n},useTransition:function(){var n=um(!1),e=n[0];return n=dM.bind(null,n[1]),vi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=mt,r=vi();if(at){if(t===void 0)throw Error(ee(407));t=t()}else{if(t=e(),kt===null)throw Error(ee(349));vs&30||G0(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,cm(W0.bind(null,i,s,n),[n]),i.flags|=2048,Ua(9,V0.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=vi(),e=kt.identifierPrefix;if(at){var t=Vi,i=Gi;t=(i&~(1<<32-hi(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Da++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=fM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},_M={readContext:ei,useCallback:Q0,useContext:ei,useEffect:bh,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:$0,useMemo:J0,useReducer:zc,useRef:Y0,useState:function(){return zc(Na)},useDebugValue:Lh,useDeferredValue:function(n){var e=ti();return ev(e,Ct.memoizedState,n)},useTransition:function(){var n=zc(Na)[0],e=ti().memoizedState;return[n,e]},useMutableSource:B0,useSyncExternalStore:H0,useId:tv,unstable_isNewReconciler:!1},gM={readContext:ei,useCallback:Q0,useContext:ei,useEffect:bh,useImperativeHandle:Z0,useInsertionEffect:q0,useLayoutEffect:$0,useMemo:J0,useReducer:Bc,useRef:Y0,useState:function(){return Bc(Na)},useDebugValue:Lh,useDeferredValue:function(n){var e=ti();return Ct===null?e.memoizedState=n:ev(e,Ct.memoizedState,n)},useTransition:function(){var n=Bc(Na)[0],e=ti().memoizedState;return[n,e]},useMutableSource:B0,useSyncExternalStore:H0,useId:tv,unstable_isNewReconciler:!1};function oi(n,e){if(n&&n.defaultProps){e=_t({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function cd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:_t({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var ec={isMounted:function(n){return(n=n._reactInternals)?Ts(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=an(),r=Er(n),s=Xi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(pi(e,n,r,i),Zl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=an(),r=Er(n),s=Xi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Sr(n,s,r),e!==null&&(pi(e,n,r,i),Zl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),i=Er(n),r=Xi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(n,r,i),e!==null&&(pi(e,n,i,t),Zl(e,n,i))}};function fm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(t,i)||!Aa(r,s):!0}function sv(n,e,t){var i=!1,r=Lr,s=e.contextType;return typeof s=="object"&&s!==null?s=ei(s):(r=_n(e)?_s:Jt.current,i=e.contextTypes,s=(i=i!=null)?vo(n,r):Lr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ec,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function dm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&ec.enqueueReplaceState(e,e.state,null)}function fd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Eh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=ei(s):(s=_n(e)?_s:Jt.current,r.context=vo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ec.enqueueReplaceState(r,r.state,null),Eu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Mo(n,e){try{var t="",i=e;do t+=Xy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Hc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function dd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var vM=typeof WeakMap=="function"?WeakMap:Map;function ov(n,e,t){t=Xi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ru||(Ru=!0,Md=i),dd(n,e)},t}function av(n,e,t){t=Xi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){dd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){dd(n,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function hm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new vM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=DM.bind(null,n,e,t),e.then(n,n))}function pm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function mm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Xi(-1,1),e.tag=2,Sr(t,e,1))),t.lanes|=1),n)}var xM=Ji.ReactCurrentOwner,pn=!1;function sn(n,e,t,i){e.child=n===null?O0(e,null,t,i):yo(e,n.child,t,i)}function _m(n,e,t,i,r){t=t.render;var s=e.ref;return co(e,r),i=Rh(n,e,t,i,s,r),t=Ph(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$i(n,e,r)):(at&&t&&_h(e),e.flags|=1,sn(n,e,i,r),e.child)}function gm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!zh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,lv(n,e,s,i,r)):(n=iu(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Aa,t(o,i)&&n.ref===e.ref)return $i(n,e,r)}return e.flags|=1,n=Tr(s,i),n.ref=e.ref,n.return=e,e.child=n}function lv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Aa(s,i)&&n.ref===e.ref)if(pn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(pn=!0);else return e.lanes=n.lanes,$i(n,e,r)}return hd(n,e,t,i,r)}function uv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(to,Rn),Rn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,it(to,Rn),Rn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,it(to,Rn),Rn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,it(to,Rn),Rn|=i;return sn(n,e,r,t),e.child}function cv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function hd(n,e,t,i,r){var s=_n(t)?_s:Jt.current;return s=vo(e,s),co(e,r),t=Rh(n,e,t,i,s,r),i=Ph(),n!==null&&!pn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,$i(n,e,r)):(at&&i&&_h(e),e.flags|=1,sn(n,e,t,r),e.child)}function vm(n,e,t,i,r){if(_n(t)){var s=!0;vu(e)}else s=!1;if(co(e,r),e.stateNode===null)eu(n,e),sv(e,t,i),fd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=ei(u):(u=_n(t)?_s:Jt.current,u=vo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&dm(e,o,i,u),ar=!1;var h=e.memoizedState;o.state=h,Eu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||mn.current||ar?(typeof c=="function"&&(cd(e,t,c,i),l=e.memoizedState),(a=ar||fm(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,k0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:oi(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=ei(l):(l=_n(t)?_s:Jt.current,l=vo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&dm(e,o,i,l),ar=!1,h=e.memoizedState,o.state=h,Eu(e,i,o,r);var x=e.memoizedState;a!==d||h!==x||mn.current||ar?(typeof p=="function"&&(cd(e,t,p,i),x=e.memoizedState),(u=ar||fm(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return pd(n,e,t,i,s,r)}function pd(n,e,t,i,r,s){cv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&im(e,t,!1),$i(n,e,s);i=e.stateNode,xM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=yo(e,n.child,null,s),e.child=yo(e,null,a,s)):sn(n,e,a,s),e.memoizedState=i.state,r&&im(e,t,!0),e.child}function fv(n){var e=n.stateNode;e.pendingContext?nm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&nm(n,e.context,!1),Th(n,e.containerInfo)}function xm(n,e,t,i,r){return xo(),vh(r),e.flags|=256,sn(n,e,t,i),e.child}var md={dehydrated:null,treeContext:null,retryLane:0};function _d(n){return{baseLanes:n,cachePool:null,transitions:null}}function dv(n,e,t){var i=e.pendingProps,r=dt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),it(dt,r&1),n===null)return ld(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ic(o,i,0,null),n=as(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=_d(t),e.memoizedState=md,n):Dh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return yM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Tr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Tr(a,s):(s=as(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?_d(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=md,i}return s=n.child,n=s.sibling,i=Tr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Dh(n,e){return e=ic({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function xl(n,e,t,i){return i!==null&&vh(i),yo(e,n.child,null,t),n=Dh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function yM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Hc(Error(ee(422))),xl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ic({mode:"visible",children:i.children},r,0,null),s=as(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&yo(e,n.child,null,o),e.child.memoizedState=_d(o),e.memoizedState=md,s);if(!(e.mode&1))return xl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Hc(s,i,void 0),xl(n,e,o,i)}if(a=(o&n.childLanes)!==0,pn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,qi(n,r),pi(i,n,r,-1))}return kh(),i=Hc(Error(ee(421))),xl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=NM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Dn=yr(r.nextSibling),In=e,at=!0,ui=null,n!==null&&(Xn[jn++]=Gi,Xn[jn++]=Vi,Xn[jn++]=gs,Gi=n.id,Vi=n.overflow,gs=e),e=Dh(e,i.children),e.flags|=4096,e)}function ym(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),ud(n.return,e,t)}function Gc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function hv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(n,e,i.children,t),i=dt.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&ym(n,t,e);else if(n.tag===19)ym(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(it(dt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Tu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Gc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Tu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Gc(e,!0,t,null,s);break;case"together":Gc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function eu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function $i(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),xs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ee(153));if(e.child!==null){for(n=e.child,t=Tr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Tr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function SM(n,e,t){switch(e.tag){case 3:fv(e),xo();break;case 5:z0(e);break;case 1:_n(e.type)&&vu(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Su,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(dt,dt.current&1),e.flags|=128,null):t&e.child.childLanes?dv(n,e,t):(it(dt,dt.current&1),n=$i(n,e,t),n!==null?n.sibling:null);it(dt,dt.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return hv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(dt,dt.current),i)break;return null;case 22:case 23:return e.lanes=0,uv(n,e,t)}return $i(n,e,t)}var pv,gd,mv,_v;pv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};gd=function(){};mv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,rs(Ci.current);var s=null;switch(t){case"input":r=zf(n,r),i=zf(n,i),s=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),s=[];break;case"textarea":r=Gf(n,r),i=Gf(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=_u)}Wf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&rt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};_v=function(n,e,t,i){t!==i&&(e.flags|=4)};function Xo(n,e){if(!at)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function jt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function MM(n,e,t){var i=e.pendingProps;switch(gh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(e),null;case 1:return _n(e.type)&&gu(),jt(e),null;case 3:return i=e.stateNode,So(),ot(mn),ot(Jt),Ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(gl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ui!==null&&(wd(ui),ui=null))),gd(n,e),jt(e),null;case 5:wh(e);var r=rs(La.current);if(t=e.type,n!==null&&e.stateNode!=null)mv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return jt(e),null}if(n=rs(Ci.current),gl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[Si]=e,i[Pa]=s,n=(e.mode&1)!==0,t){case"dialog":rt("cancel",i),rt("close",i);break;case"iframe":case"object":case"embed":rt("load",i);break;case"video":case"audio":for(r=0;r<na.length;r++)rt(na[r],i);break;case"source":rt("error",i);break;case"img":case"image":case"link":rt("error",i),rt("load",i);break;case"details":rt("toggle",i);break;case"input":Pp(i,s),rt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},rt("invalid",i);break;case"textarea":Lp(i,s),rt("invalid",i)}Wf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,n),r=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&rt("scroll",i)}switch(t){case"input":ll(i),bp(i,s,!0);break;case"textarea":ll(i),Dp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=_u)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Wg(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[Si]=e,n[Pa]=i,pv(n,e,!1,!1),e.stateNode=n;e:{switch(o=Xf(t,i),t){case"dialog":rt("cancel",n),rt("close",n),r=i;break;case"iframe":case"object":case"embed":rt("load",n),r=i;break;case"video":case"audio":for(r=0;r<na.length;r++)rt(na[r],n);r=i;break;case"source":rt("error",n),r=i;break;case"img":case"image":case"link":rt("error",n),rt("load",n),r=i;break;case"details":rt("toggle",n),r=i;break;case"input":Pp(n,i),r=zf(n,i),rt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),rt("invalid",n);break;case"textarea":Lp(n,i),r=Gf(n,i),rt("invalid",n);break;default:r=i}Wf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Yg(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Xg(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&ya(n,l):typeof l=="number"&&ya(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&rt("scroll",n):l!=null&&nh(n,s,l,o))}switch(t){case"input":ll(n),bp(n,i,!1);break;case"textarea":ll(n),Dp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+br(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?oo(n,!!i.multiple,s,!1):i.defaultValue!=null&&oo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=_u)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return jt(e),null;case 6:if(n&&e.stateNode!=null)_v(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(t=rs(La.current),rs(Ci.current),gl(e)){if(i=e.stateNode,t=e.memoizedProps,i[Si]=e,(s=i.nodeValue!==t)&&(n=In,n!==null))switch(n.tag){case 3:_l(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_l(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[Si]=e,e.stateNode=i}return jt(e),null;case 13:if(ot(dt),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(at&&Dn!==null&&e.mode&1&&!(e.flags&128))U0(),xo(),e.flags|=98560,s=!1;else if(s=gl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[Si]=e}else xo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;jt(e),s=!1}else ui!==null&&(wd(ui),ui=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||dt.current&1?Rt===0&&(Rt=3):kh())),e.updateQueue!==null&&(e.flags|=4),jt(e),null);case 4:return So(),gd(n,e),n===null&&Ca(e.stateNode.containerInfo),jt(e),null;case 10:return Sh(e.type._context),jt(e),null;case 17:return _n(e.type)&&gu(),jt(e),null;case 19:if(ot(dt),s=e.memoizedState,s===null)return jt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Xo(s,!1);else{if(Rt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Tu(n),o!==null){for(e.flags|=128,Xo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return it(dt,dt.current&1|2),e.child}n=n.sibling}s.tail!==null&&Et()>Eo&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304)}else{if(!i)if(n=Tu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Xo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!at)return jt(e),null}else 2*Et()-s.renderingStartTime>Eo&&t!==1073741824&&(e.flags|=128,i=!0,Xo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Et(),e.sibling=null,t=dt.current,it(dt,i?t&1|2:t&1),e):(jt(e),null);case 22:case 23:return Fh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Rn&1073741824&&(jt(e),e.subtreeFlags&6&&(e.flags|=8192)):jt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function EM(n,e){switch(gh(e),e.tag){case 1:return _n(e.type)&&gu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return So(),ot(mn),ot(Jt),Ah(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return wh(e),null;case 13:if(ot(dt),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));xo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ot(dt),null;case 4:return So(),null;case 10:return Sh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var yl=!1,$t=!1,TM=typeof WeakSet=="function"?WeakSet:Set,fe=null;function eo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){xt(n,e,i)}else t.current=null}function vd(n,e,t){try{t()}catch(i){xt(n,e,i)}}var Sm=!1;function wM(n,e){if(td=hu,n=S0(),mh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(nd={focusedElem:n,selectionRange:t},hu=!1,fe=e;fe!==null;)if(e=fe,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,fe=n;else for(;fe!==null;){e=fe;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?_:oi(e.type,_),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(y){xt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,fe=n;break}fe=e.return}return x=Sm,Sm=!1,x}function da(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&vd(e,t,s)}r=r.next}while(r!==i)}}function tc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function xd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function gv(n){var e=n.alternate;e!==null&&(n.alternate=null,gv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[Si],delete e[Pa],delete e[sd],delete e[aM],delete e[lM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function vv(n){return n.tag===5||n.tag===3||n.tag===4}function Mm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||vv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=_u));else if(i!==4&&(n=n.child,n!==null))for(yd(n,e,t),n=n.sibling;n!==null;)yd(n,e,t),n=n.sibling}function Sd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Sd(n,e,t),n=n.sibling;n!==null;)Sd(n,e,t),n=n.sibling}var Bt=null,ai=!1;function er(n,e,t){for(t=t.child;t!==null;)xv(n,e,t),t=t.sibling}function xv(n,e,t){if(Ai&&typeof Ai.onCommitFiberUnmount=="function")try{Ai.onCommitFiberUnmount(Yu,t)}catch{}switch(t.tag){case 5:$t||eo(t,e);case 6:var i=Bt,r=ai;Bt=null,er(n,e,t),Bt=i,ai=r,Bt!==null&&(ai?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&(ai?(n=Bt,t=t.stateNode,n.nodeType===8?Ic(n.parentNode,t):n.nodeType===1&&Ic(n,t),Ta(n)):Ic(Bt,t.stateNode));break;case 4:i=Bt,r=ai,Bt=t.stateNode.containerInfo,ai=!0,er(n,e,t),Bt=i,ai=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&vd(t,e,o),r=r.next}while(r!==i)}er(n,e,t);break;case 1:if(!$t&&(eo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){xt(t,e,a)}er(n,e,t);break;case 21:er(n,e,t);break;case 22:t.mode&1?($t=(i=$t)||t.memoizedState!==null,er(n,e,t),$t=i):er(n,e,t);break;default:er(n,e,t)}}function Em(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new TM),e.forEach(function(i){var r=UM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ni(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,ai=!1;break e;case 3:Bt=a.stateNode.containerInfo,ai=!0;break e;case 4:Bt=a.stateNode.containerInfo,ai=!0;break e}a=a.return}if(Bt===null)throw Error(ee(160));xv(s,o,r),Bt=null,ai=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){xt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)yv(e,n),e=e.sibling}function yv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ni(e,n),gi(n),i&4){try{da(3,n,n.return),tc(3,n)}catch(_){xt(n,n.return,_)}try{da(5,n,n.return)}catch(_){xt(n,n.return,_)}}break;case 1:ni(e,n),gi(n),i&512&&t!==null&&eo(t,t.return);break;case 5:if(ni(e,n),gi(n),i&512&&t!==null&&eo(t,t.return),n.flags&32){var r=n.stateNode;try{ya(r,"")}catch(_){xt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gg(r,s),Xf(a,o);var u=Xf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Yg(r,d):c==="dangerouslySetInnerHTML"?Xg(r,d):c==="children"?ya(r,d):nh(r,c,d,u)}switch(a){case"input":Bf(r,s);break;case"textarea":Vg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?oo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?oo(r,!!s.multiple,s.defaultValue,!0):oo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Pa]=s}catch(_){xt(n,n.return,_)}}break;case 6:if(ni(e,n),gi(n),i&4){if(n.stateNode===null)throw Error(ee(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){xt(n,n.return,_)}}break;case 3:if(ni(e,n),gi(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(_){xt(n,n.return,_)}break;case 4:ni(e,n),gi(n);break;case 13:ni(e,n),gi(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=Et())),i&4&&Em(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?($t=(u=$t)||c,ni(e,n),$t=u):ni(e,n),gi(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(fe=n,c=n.child;c!==null;){for(d=fe=c;fe!==null;){switch(h=fe,p=h.child,h.tag){case 0:case 11:case 14:case 15:da(4,h,h.return);break;case 1:eo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){xt(i,t,_)}}break;case 5:eo(h,h.return);break;case 22:if(h.memoizedState!==null){wm(d);continue}}p!==null?(p.return=h,fe=p):wm(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=jg("display",o))}catch(_){xt(n,n.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){xt(n,n.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:ni(e,n),gi(n),i&4&&Em(n);break;case 21:break;default:ni(e,n),gi(n)}}function gi(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(vv(t)){var i=t;break e}t=t.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=Mm(n);Sd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Mm(n);yd(n,a,o);break;default:throw Error(ee(161))}}catch(l){xt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function AM(n,e,t){fe=n,Sv(n)}function Sv(n,e,t){for(var i=(n.mode&1)!==0;fe!==null;){var r=fe,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||yl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=yl;var u=$t;if(yl=o,($t=l)&&!u)for(fe=r;fe!==null;)o=fe,l=o.child,o.tag===22&&o.memoizedState!==null?Am(r):l!==null?(l.return=o,fe=l):Am(r);for(;s!==null;)fe=s,Sv(s),s=s.sibling;fe=r,yl=a,$t=u}Tm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,fe=s):Tm(n)}}function Tm(n){for(;fe!==null;){var e=fe;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||tc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:oi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&lm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}lm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ta(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}$t||e.flags&512&&xd(e)}catch(h){xt(e,e.return,h)}}if(e===n){fe=null;break}if(t=e.sibling,t!==null){t.return=e.return,fe=t;break}fe=e.return}}function wm(n){for(;fe!==null;){var e=fe;if(e===n){fe=null;break}var t=e.sibling;if(t!==null){t.return=e.return,fe=t;break}fe=e.return}}function Am(n){for(;fe!==null;){var e=fe;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{tc(4,e)}catch(l){xt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){xt(e,r,l)}}var s=e.return;try{xd(e)}catch(l){xt(e,s,l)}break;case 5:var o=e.return;try{xd(e)}catch(l){xt(e,o,l)}}}catch(l){xt(e,e.return,l)}if(e===n){fe=null;break}var a=e.sibling;if(a!==null){a.return=e.return,fe=a;break}fe=e.return}}var CM=Math.ceil,Cu=Ji.ReactCurrentDispatcher,Nh=Ji.ReactCurrentOwner,Jn=Ji.ReactCurrentBatchConfig,je=0,kt=null,At=null,Ht=0,Rn=0,to=Fr(0),Rt=0,Ia=null,xs=0,nc=0,Uh=0,ha=null,fn=null,Ih=0,Eo=1/0,ki=null,Ru=!1,Md=null,Mr=null,Sl=!1,fr=null,Pu=0,pa=0,Ed=null,tu=-1,nu=0;function an(){return je&6?Et():tu!==-1?tu:tu=Et()}function Er(n){return n.mode&1?je&2&&Ht!==0?Ht&-Ht:cM.transition!==null?(nu===0&&(nu=s0()),nu):(n=$e,n!==0||(n=window.event,n=n===void 0?16:d0(n.type)),n):1}function pi(n,e,t,i){if(50<pa)throw pa=0,Ed=null,Error(ee(185));qa(n,t,i),(!(je&2)||n!==kt)&&(n===kt&&(!(je&2)&&(nc|=t),Rt===4&&ur(n,Ht)),gn(n,i),t===1&&je===0&&!(e.mode&1)&&(Eo=Et()+500,Qu&&kr()))}function gn(n,e){var t=n.callbackNode;cS(n,e);var i=du(n,n===kt?Ht:0);if(i===0)t!==null&&Ip(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Ip(t),e===1)n.tag===0?uM(Cm.bind(null,n)):L0(Cm.bind(null,n)),sM(function(){!(je&6)&&kr()}),t=null;else{switch(o0(i)){case 1:t=ah;break;case 4:t=i0;break;case 16:t=fu;break;case 536870912:t=r0;break;default:t=fu}t=Pv(t,Mv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Mv(n,e){if(tu=-1,nu=0,je&6)throw Error(ee(327));var t=n.callbackNode;if(fo()&&n.callbackNode!==t)return null;var i=du(n,n===kt?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=bu(n,i);else{e=i;var r=je;je|=2;var s=Tv();(kt!==n||Ht!==e)&&(ki=null,Eo=Et()+500,os(n,e));do try{bM();break}catch(a){Ev(n,a)}while(!0);yh(),Cu.current=s,je=r,At!==null?e=0:(kt=null,Ht=0,e=Rt)}if(e!==0){if(e===2&&(r=Kf(n),r!==0&&(i=r,e=Td(n,r))),e===1)throw t=Ia,os(n,0),ur(n,i),gn(n,Et()),t;if(e===6)ur(n,i);else{if(r=n.current.alternate,!(i&30)&&!RM(r)&&(e=bu(n,i),e===2&&(s=Kf(n),s!==0&&(i=s,e=Td(n,s))),e===1))throw t=Ia,os(n,0),ur(n,i),gn(n,Et()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:Kr(n,fn,ki);break;case 3:if(ur(n,i),(i&130023424)===i&&(e=Ih+500-Et(),10<e)){if(du(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){an(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=rd(Kr.bind(null,n,fn,ki),e);break}Kr(n,fn,ki);break;case 4:if(ur(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*CM(i/1960))-i,10<i){n.timeoutHandle=rd(Kr.bind(null,n,fn,ki),i);break}Kr(n,fn,ki);break;case 5:Kr(n,fn,ki);break;default:throw Error(ee(329))}}}return gn(n,Et()),n.callbackNode===t?Mv.bind(null,n):null}function Td(n,e){var t=ha;return n.current.memoizedState.isDehydrated&&(os(n,e).flags|=256),n=bu(n,e),n!==2&&(e=fn,fn=t,e!==null&&wd(e)),n}function wd(n){fn===null?fn=n:fn.push.apply(fn,n)}function RM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!mi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(n,e){for(e&=~Uh,e&=~nc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-hi(e),i=1<<t;n[t]=-1,e&=~i}}function Cm(n){if(je&6)throw Error(ee(327));fo();var e=du(n,0);if(!(e&1))return gn(n,Et()),null;var t=bu(n,e);if(n.tag!==0&&t===2){var i=Kf(n);i!==0&&(e=i,t=Td(n,i))}if(t===1)throw t=Ia,os(n,0),ur(n,e),gn(n,Et()),t;if(t===6)throw Error(ee(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Kr(n,fn,ki),gn(n,Et()),null}function Oh(n,e){var t=je;je|=1;try{return n(e)}finally{je=t,je===0&&(Eo=Et()+500,Qu&&kr())}}function ys(n){fr!==null&&fr.tag===0&&!(je&6)&&fo();var e=je;je|=1;var t=Jn.transition,i=$e;try{if(Jn.transition=null,$e=1,n)return n()}finally{$e=i,Jn.transition=t,je=e,!(je&6)&&kr()}}function Fh(){Rn=to.current,ot(to)}function os(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,rM(t)),At!==null)for(t=At.return;t!==null;){var i=t;switch(gh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&gu();break;case 3:So(),ot(mn),ot(Jt),Ah();break;case 5:wh(i);break;case 4:So();break;case 13:ot(dt);break;case 19:ot(dt);break;case 10:Sh(i.type._context);break;case 22:case 23:Fh()}t=t.return}if(kt=n,At=n=Tr(n.current,null),Ht=Rn=e,Rt=0,Ia=null,Uh=nc=xs=0,fn=ha=null,is!==null){for(e=0;e<is.length;e++)if(t=is[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}is=null}return n}function Ev(n,e){do{var t=At;try{if(yh(),Ql.current=Au,wu){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}wu=!1}if(vs=0,It=Ct=mt=null,fa=!1,Da=0,Nh.current=null,t===null||t.return===null){Rt=1,Ia=e,At=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=pm(o);if(p!==null){p.flags&=-257,mm(p,o,a,s,e),p.mode&1&&hm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){hm(s,u,e),kh();break e}l=Error(ee(426))}}else if(at&&a.mode&1){var m=pm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),mm(m,o,a,s,e),vh(Mo(l,a));break e}}s=l=Mo(l,a),Rt!==4&&(Rt=2),ha===null?ha=[s]:ha.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=ov(s,l,e);am(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Mr===null||!Mr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=av(s,a,e);am(s,y);break e}}s=s.return}while(s!==null)}Av(t)}catch(E){e=E,At===t&&t!==null&&(At=t=t.return);continue}break}while(!0)}function Tv(){var n=Cu.current;return Cu.current=Au,n===null?Au:n}function kh(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),kt===null||!(xs&268435455)&&!(nc&268435455)||ur(kt,Ht)}function bu(n,e){var t=je;je|=2;var i=Tv();(kt!==n||Ht!==e)&&(ki=null,os(n,e));do try{PM();break}catch(r){Ev(n,r)}while(!0);if(yh(),je=t,Cu.current=i,At!==null)throw Error(ee(261));return kt=null,Ht=0,Rt}function PM(){for(;At!==null;)wv(At)}function bM(){for(;At!==null&&!tS();)wv(At)}function wv(n){var e=Rv(n.alternate,n,Rn);n.memoizedProps=n.pendingProps,e===null?Av(n):At=e,Nh.current=null}function Av(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=EM(t,e),t!==null){t.flags&=32767,At=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Rt=6,At=null;return}}else if(t=MM(t,e,Rn),t!==null){At=t;return}if(e=e.sibling,e!==null){At=e;return}At=e=n}while(e!==null);Rt===0&&(Rt=5)}function Kr(n,e,t){var i=$e,r=Jn.transition;try{Jn.transition=null,$e=1,LM(n,e,t,i)}finally{Jn.transition=r,$e=i}return null}function LM(n,e,t,i){do fo();while(fr!==null);if(je&6)throw Error(ee(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ee(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(fS(n,s),n===kt&&(At=kt=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Sl||(Sl=!0,Pv(fu,function(){return fo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=Jn.transition,Jn.transition=null;var o=$e;$e=1;var a=je;je|=4,Nh.current=null,wM(n,t),yv(t,n),ZS(nd),hu=!!td,nd=td=null,n.current=t,AM(t),nS(),je=a,$e=o,Jn.transition=s}else n.current=t;if(Sl&&(Sl=!1,fr=n,Pu=r),s=n.pendingLanes,s===0&&(Mr=null),sS(t.stateNode),gn(n,Et()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ru)throw Ru=!1,n=Md,Md=null,n;return Pu&1&&n.tag!==0&&fo(),s=n.pendingLanes,s&1?n===Ed?pa++:(pa=0,Ed=n):pa=0,kr(),null}function fo(){if(fr!==null){var n=o0(Pu),e=Jn.transition,t=$e;try{if(Jn.transition=null,$e=16>n?16:n,fr===null)var i=!1;else{if(n=fr,fr=null,Pu=0,je&6)throw Error(ee(331));var r=je;for(je|=4,fe=n.current;fe!==null;){var s=fe,o=s.child;if(fe.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(fe=u;fe!==null;){var c=fe;switch(c.tag){case 0:case 11:case 15:da(8,c,s)}var d=c.child;if(d!==null)d.return=c,fe=d;else for(;fe!==null;){c=fe;var h=c.sibling,p=c.return;if(gv(c),c===u){fe=null;break}if(h!==null){h.return=p,fe=h;break}fe=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}fe=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,fe=o;else e:for(;fe!==null;){if(s=fe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:da(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,fe=f;break e}fe=s.return}}var g=n.current;for(fe=g;fe!==null;){o=fe;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,fe=v;else e:for(o=g;fe!==null;){if(a=fe,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tc(9,a)}}catch(E){xt(a,a.return,E)}if(a===o){fe=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,fe=y;break e}fe=a.return}}if(je=r,kr(),Ai&&typeof Ai.onPostCommitFiberRoot=="function")try{Ai.onPostCommitFiberRoot(Yu,n)}catch{}i=!0}return i}finally{$e=t,Jn.transition=e}}return!1}function Rm(n,e,t){e=Mo(t,e),e=ov(n,e,1),n=Sr(n,e,1),e=an(),n!==null&&(qa(n,1,e),gn(n,e))}function xt(n,e,t){if(n.tag===3)Rm(n,n,t);else for(;e!==null;){if(e.tag===3){Rm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){n=Mo(t,n),n=av(e,n,1),e=Sr(e,n,1),n=an(),e!==null&&(qa(e,1,n),gn(e,n));break}}e=e.return}}function DM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,kt===n&&(Ht&t)===t&&(Rt===4||Rt===3&&(Ht&130023424)===Ht&&500>Et()-Ih?os(n,0):Uh|=t),gn(n,e)}function Cv(n,e){e===0&&(n.mode&1?(e=fl,fl<<=1,!(fl&130023424)&&(fl=4194304)):e=1);var t=an();n=qi(n,e),n!==null&&(qa(n,e,t),gn(n,t))}function NM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Cv(n,t)}function UM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),Cv(n,t)}var Rv;Rv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||mn.current)pn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return pn=!1,SM(n,e,t);pn=!!(n.flags&131072)}else pn=!1,at&&e.flags&1048576&&D0(e,yu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;eu(n,e),n=e.pendingProps;var r=vo(e,Jt.current);co(e,t),r=Rh(null,e,i,n,r,t);var s=Ph();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,_n(i)?(s=!0,vu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=ec,e.stateNode=r,r._reactInternals=e,fd(e,i,n,t),e=pd(null,e,i,!0,s,t)):(e.tag=0,at&&s&&_h(e),sn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(eu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=OM(i),n=oi(i,n),r){case 0:e=hd(null,e,i,n,t);break e;case 1:e=vm(null,e,i,n,t);break e;case 11:e=_m(null,e,i,n,t);break e;case 14:e=gm(null,e,i,oi(i.type,n),t);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),hd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),vm(n,e,i,r,t);case 3:e:{if(fv(e),n===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,k0(n,e),Eu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Mo(Error(ee(423)),e),e=xm(n,e,i,t,r);break e}else if(i!==r){r=Mo(Error(ee(424)),e),e=xm(n,e,i,t,r);break e}else for(Dn=yr(e.stateNode.containerInfo.firstChild),In=e,at=!0,ui=null,t=O0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(xo(),i===r){e=$i(n,e,t);break e}sn(n,e,i,t)}e=e.child}return e;case 5:return z0(e),n===null&&ld(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,id(i,r)?o=null:s!==null&&id(i,s)&&(e.flags|=32),cv(n,e),sn(n,e,o,t),e.child;case 6:return n===null&&ld(e),null;case 13:return dv(n,e,t);case 4:return Th(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=yo(e,null,i,t):sn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),_m(n,e,i,r,t);case 7:return sn(n,e,e.pendingProps,t),e.child;case 8:return sn(n,e,e.pendingProps.children,t),e.child;case 12:return sn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Su,i._currentValue),i._currentValue=o,s!==null)if(mi(s.value,o)){if(s.children===r.children&&!mn.current){e=$i(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Xi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),ud(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),ud(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,co(e,t),r=ei(r),i=i(r),e.flags|=1,sn(n,e,i,t),e.child;case 14:return i=e.type,r=oi(i,e.pendingProps),r=oi(i.type,r),gm(n,e,i,r,t);case 15:return lv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:oi(i,r),eu(n,e),e.tag=1,_n(i)?(n=!0,vu(e)):n=!1,co(e,t),sv(e,i,r),fd(e,i,r,t),pd(null,e,i,!0,n,t);case 19:return hv(n,e,t);case 22:return uv(n,e,t)}throw Error(ee(156,e.tag))};function Pv(n,e){return n0(n,e)}function IM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,e,t,i){return new IM(n,e,t,i)}function zh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function OM(n){if(typeof n=="function")return zh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===rh)return 11;if(n===sh)return 14}return 2}function Tr(n,e){var t=n.alternate;return t===null?(t=Kn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function iu(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")zh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Xs:return as(t.children,r,s,e);case ih:o=8,r|=8;break;case If:return n=Kn(12,t,e,r|2),n.elementType=If,n.lanes=s,n;case Of:return n=Kn(13,t,e,r),n.elementType=Of,n.lanes=s,n;case Ff:return n=Kn(19,t,e,r),n.elementType=Ff,n.lanes=s,n;case zg:return ic(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Fg:o=10;break e;case kg:o=9;break e;case rh:o=11;break e;case sh:o=14;break e;case or:o=16,i=null;break e}throw Error(ee(130,n==null?n:typeof n,""))}return e=Kn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function as(n,e,t,i){return n=Kn(7,n,i,e),n.lanes=t,n}function ic(n,e,t,i){return n=Kn(22,n,i,e),n.elementType=zg,n.lanes=t,n.stateNode={isHidden:!1},n}function Vc(n,e,t){return n=Kn(6,n,null,e),n.lanes=t,n}function Wc(n,e,t){return e=Kn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function FM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tc(0),this.expirationTimes=Tc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(n,e,t,i,r,s,o,a,l){return n=new FM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Kn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),n}function kM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ws,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function bv(n){if(!n)return Lr;n=n._reactInternals;e:{if(Ts(n)!==n||n.tag!==1)throw Error(ee(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(_n(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(n.tag===1){var t=n.type;if(_n(t))return b0(n,t,e)}return e}function Lv(n,e,t,i,r,s,o,a,l){return n=Bh(t,i,!0,n,r,s,o,a,l),n.context=bv(null),t=n.current,i=an(),r=Er(t),s=Xi(i,r),s.callback=e??null,Sr(t,s,r),n.current.lanes=r,qa(n,r,i),gn(n,i),n}function rc(n,e,t,i){var r=e.current,s=an(),o=Er(r);return t=bv(t),e.context===null?e.context=t:e.pendingContext=t,e=Xi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Sr(r,e,o),n!==null&&(pi(n,r,o,s),Zl(n,r,o)),o}function Lu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Pm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Hh(n,e){Pm(n,e),(n=n.alternate)&&Pm(n,e)}function zM(){return null}var Dv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Gh(n){this._internalRoot=n}sc.prototype.render=Gh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ee(409));rc(n,e,null,null)};sc.prototype.unmount=Gh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ys(function(){rc(null,n,null,null)}),e[Yi]=null}};function sc(n){this._internalRoot=n}sc.prototype.unstable_scheduleHydration=function(n){if(n){var e=u0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<lr.length&&e!==0&&e<lr[t].priority;t++);lr.splice(t,0,n),t===0&&f0(n)}};function Vh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function BM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Lu(o);s.call(u)}}var o=Lv(e,i,n,0,null,!1,!1,"",bm);return n._reactRootContainer=o,n[Yi]=o.current,Ca(n.nodeType===8?n.parentNode:n),ys(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Lu(l);a.call(u)}}var l=Bh(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=l,n[Yi]=l.current,Ca(n.nodeType===8?n.parentNode:n),ys(function(){rc(e,l,t,i)}),l}function ac(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Lu(o);a.call(l)}}rc(e,o,n,r)}else o=BM(t,e,n,r,i);return Lu(o)}a0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ta(e.pendingLanes);t!==0&&(lh(e,t|1),gn(e,Et()),!(je&6)&&(Eo=Et()+500,kr()))}break;case 13:ys(function(){var i=qi(n,1);if(i!==null){var r=an();pi(i,n,1,r)}}),Hh(n,1)}};uh=function(n){if(n.tag===13){var e=qi(n,134217728);if(e!==null){var t=an();pi(e,n,134217728,t)}Hh(n,134217728)}};l0=function(n){if(n.tag===13){var e=Er(n),t=qi(n,e);if(t!==null){var i=an();pi(t,n,e,i)}Hh(n,e)}};u0=function(){return $e};c0=function(n,e){var t=$e;try{return $e=n,e()}finally{$e=t}};Yf=function(n,e,t){switch(e){case"input":if(Bf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Zu(i);if(!r)throw Error(ee(90));Hg(i),Bf(i,r)}}}break;case"textarea":Vg(n,t);break;case"select":e=t.value,e!=null&&oo(n,!!t.multiple,e,!1)}};Kg=Oh;Zg=ys;var HM={usingClientEntryPoint:!1,Events:[Ka,$s,Zu,qg,$g,Oh]},jo={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GM={bundleType:jo.bundleType,version:jo.version,rendererPackageName:jo.rendererPackageName,rendererConfig:jo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=e0(n),n===null?null:n.stateNode},findFiberByHostInstance:jo.findFiberByHostInstance||zM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Yu=Ml.inject(GM),Ai=Ml}catch{}}Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HM;Bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(ee(200));return kM(n,e,null,t)};Bn.createRoot=function(n,e){if(!Vh(n))throw Error(ee(299));var t=!1,i="",r=Dv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(n,1,!1,null,null,t,!1,i,r),n[Yi]=e.current,Ca(n.nodeType===8?n.parentNode:n),new Gh(e)};Bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ee(188)):(n=Object.keys(n).join(","),Error(ee(268,n)));return n=e0(e),n=n===null?null:n.stateNode,n};Bn.flushSync=function(n){return ys(n)};Bn.hydrate=function(n,e,t){if(!oc(e))throw Error(ee(200));return ac(null,n,e,!0,t)};Bn.hydrateRoot=function(n,e,t){if(!Vh(n))throw Error(ee(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Dv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Lv(e,null,n,1,t??null,r,!1,s,o),n[Yi]=e.current,Ca(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new sc(e)};Bn.render=function(n,e,t){if(!oc(e))throw Error(ee(200));return ac(null,n,e,!1,t)};Bn.unmountComponentAtNode=function(n){if(!oc(n))throw Error(ee(40));return n._reactRootContainer?(ys(function(){ac(null,null,n,!1,function(){n._reactRootContainer=null,n[Yi]=null})}),!0):!1};Bn.unstable_batchedUpdates=Oh;Bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!oc(t))throw Error(ee(200));if(n==null||n._reactInternals===void 0)throw Error(ee(38));return ac(n,e,t,!1,i)};Bn.version="18.3.1-next-f1338f8080-20240426";function Nv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Nv)}catch(n){console.error(n)}}Nv(),Ng.exports=Bn;var VM=Ng.exports,Lm=VM;Nf.createRoot=Lm.createRoot,Nf.hydrateRoot=Lm.hydrateRoot;function zi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Uv(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var On={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},Wh,Gt,lt,Zn=1e8,Je=1/Zn,Ad=Math.PI*2,WM=Ad/4,XM=0,Iv=Math.sqrt,jM=Math.cos,YM=Math.sin,zt=function(e){return typeof e=="string"},yt=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},Xh=function(e){return typeof e>"u"},bi=function(e){return typeof e=="object"},vn=function(e){return e!==!1},jh=function(){return typeof window<"u"},El=function(e){return yt(e)||zt(e)},Ov=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zt=Array.isArray,qM=/random\([^)]+\)/g,$M=/,\s*/g,Dm=/(?:-?\.?\d|\.)+/gi,Fv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,no=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,kv=/[+-]=-?[.\d]+/,KM=/[^,'"\[\]\s]+/gi,ZM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ht,xi,Cd,Yh,kn={},Du={},zv,Bv=function(e){return(Du=To(e,kn))&&Tn},qh=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fa=function(e,t){return!t&&console.warn(e)},Hv=function(e,t){return e&&(kn[e]=t)&&Du&&(Du[e]=t)||kn},ka=function(){return 0},QM={suppressEvents:!0,isStart:!0,kill:!1},ru={suppressEvents:!0,kill:!1},JM={suppressEvents:!0},$h={},wr=[],Rd={},Gv,Pn={},jc={},Nm=30,su=[],Kh="",Zh=function(e){var t=e[0],i,r;if(bi(t)||yt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=su.length;r--&&!su[r].targetTest(t););i=su[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new cx(e[r],i)))||e.splice(r,1);return e},ls=function(e){return e._gsap||Zh(Qn(e))[0]._gsap},Vv=function(e,t,i){return(i=e[t])&&yt(i)?e[t]():Xh(i)&&e.getAttribute&&e.getAttribute(t)||i},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},Mt=function(e){return Math.round(e*1e5)/1e5||0},ft=function(e){return Math.round(e*1e7)/1e7||0},ho=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},eE=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Nu=function(){var e=wr.length,t=wr.slice(0),i,r;for(Rd={},wr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Qh=function(e){return!!(e._initted||e._startAt||e.add)},Wv=function(e,t,i,r){wr.length&&!Gt&&Nu(),e.render(t,i,!!(Gt&&t<0&&Qh(e))),wr.length&&!Gt&&Nu()},Xv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(KM).length<2?t:zt(e)?e.trim():e},jv=function(e){return e},zn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},tE=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},To=function(e,t){for(var i in t)e[i]=t[i];return e},Um=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=bi(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Uu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},ma=function(e){var t=e.parent||ht,i=e.keyframes?tE(Zt(e.keyframes)):zn;if(vn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},nE=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Yv=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},lc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Dr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},iE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Pd=function(e,t,i,r){return e._startAt&&(Gt?e._startAt.revert(ru):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},rE=function n(e){return!e||e._ts&&n(e.parent)},Im=function(e){return e._repeat?wo(e._tTime,e=e.duration()+e._rDelay)*e:0},wo=function(e,t){var i=Math.floor(e=ft(e/t));return e&&i===e?i-1:i},Iu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},uc=function(e){return e._end=ft(e._start+(e._tDur/Math.abs(e._ts||e._rts||Je)||0))},cc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=ft(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),uc(e),i._dirty||us(i,e)),e},qv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Iu(e.rawTime(),t),(!t._dur||Qa(0,t.totalDuration(),i)-t._tTime>Je)&&t.render(i,!0)),us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Je}},Mi=function(e,t,i,r){return t.parent&&Dr(t),t._start=ft((Ki(i)?i:i||e!==ht?Wn(e,i,t):e._time)+t._delay),t._end=ft(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Yv(e,t,"_first","_last",e._sort?"_start":0),bd(t)||(e._recent=t),r||qv(e,t),e._ts<0&&cc(e,e._tTime),e},$v=function(e,t){return(kn.ScrollTrigger||qh("scrollTrigger",t))&&kn.ScrollTrigger.create(t,e)},Kv=function(e,t,i,r,s){if(ep(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Gt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gv!==Ln.frame)return wr.push(e),e._lazy=[s,r],1},sE=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},bd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},oE=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&sE(e)&&!(!e._initted&&bd(e))||(e._ts<0||e._dp._ts<0)&&!bd(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=Qa(0,e._tDur,t),c=wo(l,a),e._yoyo&&c&1&&(o=1-o),c!==wo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Gt||r||e._zTime===Je||!t&&e._zTime){if(!e._initted&&Kv(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?Je:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Pd(e,t,i,!0),e._onUpdate&&!i&&Nn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Nn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Dr(e,1),!i&&!Gt&&(Nn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},aE=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Ao=function(e,t,i,r){var s=e._repeat,o=ft(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:ft(o*(s+1)+e._rDelay*s):o,a>0&&!r&&cc(e,e._tTime=e._tDur*a),e.parent&&uc(e),i||us(e.parent,e),e},Om=function(e){return e instanceof hn?us(e):Ao(e,e._dur)},lE={_start:0,endTime:ka,totalDuration:ka},Wn=function n(e,t,i){var r=e.labels,s=e._recent||lE,o=e.duration()>=Zn?s.endTime(!1):e._dur,a,l,u;return zt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Zt(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},_a=function(e,t,i){var r=Ki(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;o.immediateRender=vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new wt(t[0],o,t[s+1])},zr=function(e,t){return e||e===0?t(e):t},Qa=function(e,t,i){return i<e?e:i>t?t:i},Kt=function(e,t){return!zt(e)||!(t=ZM.exec(e))?"":t[1]},uE=function(e,t,i){return zr(i,function(r){return Qa(e,t,r)})},Ld=[].slice,Zv=function(e,t){return e&&bi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&bi(e[0]))&&!e.nodeType&&e!==xi},cE=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return zt(r)&&!t||Zv(r,1)?(s=i).push.apply(s,Qn(r)):i.push(r)})||i},Qn=function(e,t,i){return lt&&!t&&lt.selector?lt.selector(e):zt(e)&&!i&&(Cd||!Co())?Ld.call((t||Yh).querySelectorAll(e),0):Zt(e)?cE(e,i):Zv(e)?Ld.call(e,0):e?[e]:[]},Dd=function(e){return e=Qn(e)[0]||Fa("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Qn(t,i.querySelectorAll?i:i===e?Fa("Invalid scope")||Yh.createElement("div"):e)}},Qv=function(e){return e.sort(function(){return .5-Math.random()})},Jv=function(e){if(yt(e))return e;var t=bi(e)?e:{each:e},i=cs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return zt(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,x){var _=(x||t).length,m=o[_],f,g,v,y,E,A,M,P,S;if(!m){if(S=t.grid==="auto"?0:(t.grid||[1,Zn])[1],!S){for(M=-Zn;M<(M=x[S++].getBoundingClientRect().left)&&S<_;);S<_&&S--}for(m=o[_]=[],f=l?Math.min(S,_)*c-.5:r%S,g=S===Zn?0:l?_*d/S-.5:r/S|0,M=0,P=Zn,A=0;A<_;A++)v=A%S-f,y=g-(A/S|0),m[A]=E=u?Math.abs(u==="y"?y:v):Iv(v*v+y*y),E>M&&(M=E),E<P&&(P=E);r==="random"&&Qv(m),m.max=M-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(S>_?_-1:u?u==="y"?_/S:S:Math.max(S,_/S))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Kt(t.amount||t.each)||0,i=i&&_<0?EE(i):i}return _=(m[h]-m.min)/m.max||0,ft(m.b+(i?i(_):_)*m.v)+m.u}},Nd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=ft(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ki(i)?0:Kt(i))}},ex=function(e,t){var i=Zt(e),r,s;return!i&&bi(e)&&(r=i=e.radius||Zn,e.values?(e=Qn(e.values),(s=!Ki(e[0]))&&(r*=r)):e=Nd(e.increment)),zr(t,i?yt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Zn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||Ki(o)?c:c+Kt(o)}:Nd(e))},tx=function(e,t,i,r){return zr(Zt(e)?!t:i===!0?!!(i=0):!r,function(){return Zt(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},fE=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},dE=function(e,t){return function(i){return e(parseFloat(i))+(t||Kt(i))}},hE=function(e,t,i){return ix(e,t,0,1,i)},nx=function(e,t,i){return zr(i,function(r){return e[~~t(r)]})},pE=function n(e,t,i){var r=t-e;return Zt(e)?nx(e,n(0,e.length),t):zr(i,function(s){return(r+(s-e)%r)%r+e})},mE=function n(e,t,i){var r=t-e,s=r*2;return Zt(e)?nx(e,n(0,e.length-1),t):zr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},za=function(e){return e.replace(qM,function(t){var i=t.indexOf("[")+1,r=t.substring(i||7,i?t.indexOf("]"):t.length-1).split($M);return tx(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},ix=function(e,t,i,r,s){var o=t-e,a=r-i;return zr(s,function(l){return i+((l-e)/o*a||0)})},_E=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=zt(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Zt(e)&&!Zt(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(x){x*=d;var _=Math.min(h,~~x);return c[_](x-_)},i=t}else r||(e=To(Zt(e)?[]:{},e));if(!c){for(l in t)Jh.call(a,e,l,"get",t[l]);s=function(x){return ip(x,a)||(o?e.p:e)}}}return zr(i,s)},Fm=function(e,t,i){var r=e.labels,s=Zn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Nn=function(e,t,i){var r=e.vars,s=r[t],o=lt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&wr.length&&Nu(),a&&(lt=a),c=l?s.apply(u,l):s.call(u),lt=o,c},ia=function(e){return Dr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Gt),e.progress()<1&&Nn(e,"onInterrupt"),e},io,rx=[],sx=function(e){if(e)if(e=!e.name&&e.default||e,jh()||e.headless){var t=e.name,i=yt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ka,render:ip,add:Jh,kill:NE,modifier:DE,rawVars:0},o={targetTest:0,get:0,getSetter:np,aliases:{},register:0};if(Co(),e!==r){if(Pn[t])return;zn(r,zn(Uu(e,s),o)),To(r.prototype,To(s,Uu(e,o))),Pn[r.prop=t]=r,e.targetTest&&(su.push(r),$h[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hv(t,r),e.register&&e.register(Tn,r,yn)}else rx.push(e)},Qe=255,ra={aqua:[0,Qe,Qe],lime:[0,Qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qe],navy:[0,0,128],white:[Qe,Qe,Qe],olive:[128,128,0],yellow:[Qe,Qe,0],orange:[Qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qe,0,0],pink:[Qe,192,203],cyan:[0,Qe,Qe],transparent:[Qe,Qe,Qe,0]},Yc=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Qe+.5|0},ox=function(e,t,i){var r=e?Ki(e)?[e>>16,e>>8&Qe,e&Qe]:0:ra.black,s,o,a,l,u,c,d,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ra[e])r=ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Qe,r&Qe,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Qe,e&Qe]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(Dm),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Yc(l+1/3,s,o),r[1]=Yc(l,s,o),r[2]=Yc(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(Fv),i&&r.length<4&&(r[3]=1),r}else r=e.match(Dm)||ra.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/Qe,o=r[1]/Qe,a=r[2]/Qe,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ax=function(e){var t=[],i=[],r=-1;return e.split(Ar).forEach(function(s){var o=s.match(no)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},km=function(e,t,i){var r="",s=(e+r).match(Ar),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=ox(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=ax(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ar,"1").split(no),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ar),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},Ar=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ra)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),gE=/hsl[a]?\(/,lx=function(e){var t=e.join(" "),i;if(Ar.lastIndex=0,Ar.test(t))return i=gE.test(t),e[1]=km(e[1],i),e[0]=km(e[0],i,ax(e[1])),!0},Ba,Ln=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,x=function _(m){var f=n()-r,g=m===!0,v,y,E,A;if((f>e||f<0)&&(i+=f-t),r+=f,E=r-i,v=E-o,(v>0||g)&&(A=++d.frame,h=E-d.time*1e3,d.time=E=E/1e3,o+=v+(v>=s?4:s-v),y=1),g||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](E,h,A,m)};return d={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){zv&&(!Cd&&jh()&&(xi=Cd=window,Yh=xi.document||{},kn.gsap=Tn,(xi.gsapVersions||(xi.gsapVersions=[])).push(Tn.version),Bv(Du||xi.GreenSockGlobals||!xi.gsap&&xi||{}),rx.forEach(sx)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ba=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Ba=0,u=ka},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,g){var v=f?function(y,E,A,M){m(y,E,A,M),d.remove(v)}:m;return d.remove(m),a[g?"unshift":"push"](v),Co(),v},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),Co=function(){return!Ba&&Ln.wake()},Ve={},vE=/^[\d.\-M][\d.\-,\s]/,xE=/["']/g,yE=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(xE,"").trim():+u,r=l.substr(a+1).trim();return t},SE=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},ME=function(e){var t=(e+"").split("("),i=Ve[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[yE(t[1])]:SE(e).split(",").map(Xv)):Ve._CE&&vE.test(e)?Ve._CE("",e):i},EE=function(e){return function(t){return 1-e(1-t)}},cs=function(e,t){return e&&(yt(e)?e:Ve[e]||ME(e))||t},ws=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return xn(e,function(a){Ve[a]=kn[a]=s,Ve[o=a.toLowerCase()]=i;for(var l in s)Ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ve[a+"."+l]=s[l]}),s},ux=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qc=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ad*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*YM((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:ux(a);return s=Ad/s,l.config=function(u,c){return n(e,u,c)},l},$c=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:ux(i);return r.config=function(s){return n(e,s)},r};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ws(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Ve.Linear.easeNone=Ve.none=Ve.Linear.easeIn;ws("Elastic",qc("in"),qc("out"),qc());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(n){return Math.pow(2,10*(n-1))*n+n*n*n*n*n*n*(1-n)});ws("Circ",function(n){return-(Iv(1-n*n)-1)});ws("Sine",function(n){return n===1?1:-jM(n*WM)+1});ws("Back",$c("in"),$c("out"),$c());Ve.SteppedEase=Ve.steps=kn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Je;return function(a){return((r*Qa(0,o,a)|0)+s)*i}}};Oa.ease=Ve["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Kh+=n+","+n+"Params,"});var cx=function(e,t){this.id=XM++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vv,this.set=t?t.getSetter:np},Ha=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ao(this,+t.duration,1,1),this.data=t.data,lt&&(this._ctx=lt,lt.data.push(this)),Ba||Ln.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Ao(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Co(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cc(this,i),!s._dp||s.parent||qv(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&Mi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Je||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Wv(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Im(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Im(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?wo(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Je?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?Iu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Je?0:this._rts,this.totalTime(Qa(-Math.abs(this._delay),this.totalDuration(),s),r!==!1),uc(this),iE(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Co(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Je&&(this._tTime-=Je)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=ft(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Mi(r,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(vn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Iu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=JM);var r=Gt;return Gt=i,Qh(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Gt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Om(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Om(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Wn(this,i),vn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,vn(r)),this._dur||(this._zTime=-Je),this},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Je:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Je,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Je)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this,s=r._prom;return new Promise(function(o){var a=yt(i)?i:jv,l=function(){var c=r.then;r.then=null,s&&s(),yt(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=c),o(a),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?l():r._prom=l})},e.kill=function(){ia(this)},n}();zn(Ha.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Je,_prom:0,_ps:!1,_rts:1});var hn=function(n){Uv(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=vn(i.sortChildren),ht&&Mi(i.parent||ht,zi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&$v(zi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return _a(0,arguments,this),this},t.from=function(r,s,o){return _a(1,arguments,this),this},t.fromTo=function(r,s,o,a){return _a(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,ma(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wt(r,s,Wn(this,o),1),this},t.call=function(r,s,o){return Mi(this,wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new wt(r,o,Wn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,ma(o).immediateRender=vn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,ma(a).immediateRender=vn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:ft(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,_,m,f,g,v,y,E,A,M;if(this!==ht&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,f=!v,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(A=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=ft(c%m),c===l?(_=this._repeat,h=u):(E=ft(c/m),_=~~E,_&&_===E&&(h=u,_--),h>u&&(h=u)),E=wo(this._tTime,m),!a&&this._tTime&&E!==_&&this._tTime-E*m-this._dur<=0&&(E=_),A&&_&1&&(h=u-h,M=1),_!==E&&!this._lock){var P=A&&E&1,S=P===(A&&_&1);if(_<E&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:ft(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Nn(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,E=_),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,S&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!f)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=aE(this,ft(a),ft(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&u&&!s&&!E&&(Nn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){g=0,x&&(c+=this._zTime=-Je);break}}p=x}else{p=this._last;for(var w=r<0?r:h;p;){if(x=p._prev,(p._act||w<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(w-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(w-p._start)*p._ts,s,o||Gt&&Qh(p)),h!==this._time||!this._ts&&!f){g=0,x&&(c+=this._zTime=w?-Je:Je);break}}p=x}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-Je)._zTime=h>=a?1:-1,this._ts))return this._start=y,uc(this),this.render(r,s,o);this._onUpdate&&!s&&Nn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Dr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Nn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ki(s)||(s=Wn(this,s,r)),!(r instanceof Ha)){if(Zt(r))return r.forEach(function(a){return o.add(a,s)}),this;if(zt(r))return this.addLabel(r,s);if(yt(r))r=wt.delayedCall(0,r);else return this}return this!==r?Mi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Zn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof wt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return zt(r)?this.removeLabel(r):yt(r)?this.killTweensOf(r):(r.parent===this&&lc(this,r),r===this._recent&&(this._recent=this._last),us(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ft(Ln.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Wn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=wt.delayedCall(0,s||ka,o);return a.data="isPause",this._hasPause=1,Mi(this,a,Wn(this,r))},t.removePause=function(r){var s=this._first;for(r=Wn(this,r);s;)s._start===r&&s.data==="isPause"&&Dr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)dr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Qn(r),l=this._first,u=Ki(s),c;l;)l instanceof wt?eE(l._targets,a)&&(u?(!dr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Wn(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,x=wt.to(o,zn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Je,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&Ao(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,d||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,zn({startAt:{time:Wn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Fm(this,Wn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Fm(this,Wn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Je)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,u;for(r=ft(r);a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return us(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),us(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Zn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Mi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=ft(c/o._ts),o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Ao(o,o===ht&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(ht._ts&&(Wv(ht,Iu(r,ht)),Gv=Ln.frame),Ln.frame>=Nm){Nm+=On.autoSleep||120;var s=ht._first;if((!s||!s._ts)&&On.autoSleep&&Ln._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ln.sleep()}}},e}(Ha);zn(hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var TE=function(e,t,i,r,s,o,a){var l=new yn(this._pt,e,t,0,1,_x,null,s),u=0,c=0,d,h,p,x,_,m,f,g;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=za(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(Xc)||[];d=Xc.exec(r);)x=d[0],_=r.substring(u,d.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:x.charAt(1)==="="?ho(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=Xc.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(kv.test(r)||f)&&(l.e=0),this._pt=l,l},Jh=function(e,t,i,r,s,o,a,l,u,c){yt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:yt(d)?u?e[t.indexOf("set")||!yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=yt(d)?u?PE:px:tp,x;if(zt(r)&&(~r.indexOf("random(")&&(r=za(r)),r.charAt(1)==="="&&(x=ho(h,r)+(Kt(h)||0),(x||x===0)&&(r=x))),!c||h!==r||Ud)return!isNaN(h*r)&&r!==""?(x=new yn(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?LE:mx,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!d&&!(t in e)&&qh(t,r),TE.call(this,e,t,h,r,p,l||On.stringFilter,u))},wE=function(e,t,i,r,s){if(yt(e)&&(e=ga(e,s,t,i,r)),!bi(e)||e.style&&e.nodeType||Zt(e)||Ov(e))return zt(e)?ga(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=ga(e[a],s,t,i,r);return o},fx=function(e,t,i,r,s,o){var a,l,u,c;if(Pn[e]&&(a=new Pn[e]).init(s,a.rawVars?t[e]:wE(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new yn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==io))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},dr,Ud,ep=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,d=r.yoyoEase,h=r.keyframes,p=r.autoRevert,x=e._dur,_=e._startAt,m=e._targets,f=e.parent,g=f&&f.data==="nested"?f.vars.targets:m,v=e._overwrite==="auto"&&!Wh,y=e.timeline,E=r.easeReverse||d,A,M,P,S,w,I,X,K,L,U,H,Y,D;if(y&&(!h||!s)&&(s="none"),e._ease=cs(s,Oa.ease),e._rEase=E&&(cs(E)||e._ease),e._from=!y&&!!r.runBackwards,e._from&&(e.ratio=1),!y||h&&!r.stagger){if(K=m[0]?ls(m[0]).harness:0,Y=K&&r[K.prop],A=Uu(r,$h),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&x?ru:QM),_._lazy=0),o){if(Dr(e._startAt=wt.set(m,zn({data:"isStart",overwrite:!1,parent:f,immediateRender:!0,lazy:!_&&vn(l),startAt:null,delay:0,onUpdate:u&&function(){return Nn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt||!a&&!p)&&e._startAt.revert(ru),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!_){if(t&&(a=!1),P=zn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&vn(l),immediateRender:a,stagger:0,parent:f},A),Y&&(P[K.prop]=Y),Dr(e._startAt=wt.set(m,P)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Gt?e._startAt.revert(ru):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Je,Je);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&vn(l)||l&&!x,M=0;M<m.length;M++){if(w=m[M],X=w._gsap||Zh(m)[M]._gsap,e._ptLookup[M]=U={},Rd[X.id]&&wr.length&&Nu(),H=g===m?M:g.indexOf(w),K&&(L=new K).init(w,Y||A,e,H,g)!==!1&&(e._pt=S=new yn(e._pt,w,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(O){U[O]=S}),L.priority&&(I=1)),!K||Y)for(P in A)Pn[P]&&(L=fx(P,A,e,H,w,g))?L.priority&&(I=1):U[P]=S=Jh.call(e,w,P,"get",A[P],H,g,0,r.stringFilter);e._op&&e._op[M]&&e.kill(w,e._op[M]),v&&e._pt&&(dr=e,ht.killTweensOf(w,U,e.globalTime(t)),D=!e.parent,dr=0),e._pt&&l&&(Rd[X.id]=1)}I&&gx(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!D,h&&t<=0&&y.render(Zn,!0,!0)},AE=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,d,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return Ud=1,e.vars[t]="+=0",ep(e,a),Ud=0,l?Fa(t+" not eligible for reset. Try splitting into individual properties"):1;u.push(c)}for(p=u.length;p--;)d=u[p],c=d._pt||d,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,d.e&&(d.e=Mt(i)+Kt(d.e)),d.b&&(d.b=c.s+Kt(d.b))},CE=function(e,t){var i=e[0]?ls(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=To({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},RE=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Zt(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},ga=function(e,t,i,r,s){return yt(e)?e.call(t,i,r,s):zt(e)&&~e.indexOf("random(")?za(e):e},dx=Kh+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",hx={};xn(dx+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return hx[n]=1});var wt=function(n){Uv(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:ma(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,_=l.defaults,m=l.scrollTrigger,f=r.parent||ht,g=(Zt(i)||Ov(i)?Ki(i[0]):"length"in r)?[i]:Qn(i),v,y,E,A,M,P,S,w;if(a._targets=g.length?Zh(g):Fa("GSAP target "+i+" not found. https://gsap.com",!On.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||El(u)||El(c)){r=a.vars;var I=r.easeReverse||r.yoyoEase;if(v=a.timeline=new hn({data:"nested",defaults:_||{},targets:f&&f.data==="nested"?f.vars.targets:g}),v.kill(),v.parent=v._dp=zi(a),v._start=0,h||El(u)||El(c)){if(A=g.length,S=h&&Jv(h),bi(h))for(M in h)~dx.indexOf(M)&&(w||(w={}),w[M]=h[M]);for(y=0;y<A;y++)E=Uu(r,hx),E.stagger=0,I&&(E.easeReverse=I),w&&To(E,w),P=g[y],E.duration=+ga(u,zi(a),y,P,g),E.delay=(+ga(c,zi(a),y,P,g)||0)-a._delay,!h&&A===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),v.to(P,E,S?S(y,P,g):0),v._ease=Ve.none;v.duration()?u=c=0:a.timeline=0}else if(x){ma(zn(v.vars.defaults,{ease:"none"})),v._ease=cs(x.ease||r.ease||"none");var X=0,K,L,U;if(Zt(x))x.forEach(function(H){return v.to(g,H,">")}),v.duration();else{E={};for(M in x)M==="ease"||M==="easeEach"||RE(M,x[M],E,x.easeEach);for(M in E)for(K=E[M].sort(function(H,Y){return H.t-Y.t}),X=0,y=0;y<K.length;y++)L=K[y],U={ease:L.e,duration:(L.t-(y?K[y-1].t:0))/100*u},U[M]=L.v,v.to(g,U,X),X+=U.duration;v.duration()<u&&v.to({},{duration:u-v.duration()})}}u||a.duration(u=v.duration())}else a.timeline=0;return p===!0&&!Wh&&(dr=zi(a),ht.killTweensOf(g),dr=0),Mi(f,zi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!x&&a._start===ft(f._time)&&vn(d)&&rE(zi(a))&&f.data!=="nested")&&(a._tTime=-Je,a.render(Math.max(0,-c)||0)),m&&$v(zi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-Je&&!c?l:r<Je?0:r,h,p,x,_,m,f,g,v;if(!u)oE(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(h=d,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=ft(d%_),d===l?(x=this._repeat,h=u):(m=ft(d/_),x=~~m,x&&x===m?(h=u,x--):h>u&&(h=u)),f=this._yoyo&&x&1,f&&(h=u-h),m=wo(this._tTime,_),h===a&&!o&&this._initted&&x===m)return this._tTime=d,this;x!==m&&this.vars.repeatRefresh&&!f&&!this._lock&&h!==_&&this._initted&&(this._lock=o=1,this.render(ft(_*x),!0).invalidate()._lock=0)}if(!this._initted){if(Kv(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._rEase){var y=h<a;if(y!==this._inv){var E=y?a:u-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=E?(y?-1:1)/E:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=g=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=g=this._ease(h/u);if(this._from&&(this.ratio=g=1-g),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!m&&(Nn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Pd(this,r,s,o),Nn(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Nn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Pd(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Dr(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Nn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Ba||Ln.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||ep(this,u),c=this._ease(u/this._dur),AE(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(cc(this,0),this.parent||Yv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Gt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,dr&&dr.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&Ao(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Qn(r):a,u=this._ptLookup,c=this._pt,d,h,p,x,_,m,f;if((!s||s==="all")&&nE(a,l))return s==="all"&&(this._pt=0),ia(this);for(d=this._op=this._op||[],s!=="all"&&(zt(s)&&(_={},xn(s,function(g){return _[g]=1}),s=_),s=CE(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,x=h,p={}):(p=d[f]=d[f]||{},x=s);for(_ in x)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&lc(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&ia(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return _a(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return _a(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return ht.killTweensOf(r,s,o)},e}(Ha);zn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(n){wt[n]=function(){var e=new hn,t=Ld.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var tp=function(e,t,i){return e[t]=i},px=function(e,t,i){return e[t](i)},PE=function(e,t,i,r){return e[t](r.fp,i)},bE=function(e,t,i){return e.setAttribute(t,i)},np=function(e,t){return yt(e[t])?px:Xh(e[t])&&e.setAttribute?bE:tp},mx=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},LE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},_x=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},ip=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},DE=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},NE=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?lc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},UE=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},gx=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},yn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||mx,this.d=l||this,this.set=u||tp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=UE,this.m=i,this.mt=s,this.tween=r},n}();xn(Kh+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(n){return $h[n]=1});kn.TweenMax=kn.TweenLite=wt;kn.TimelineLite=kn.TimelineMax=hn;ht=new hn({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});On.stringFilter=lx;var fs=[],ou={},IE=[],zm=0,OE=0,Kc=function(e){return(ou[e]||IE).map(function(t){return t()})},Id=function(){var e=Date.now(),t=[];e-zm>2&&(Kc("matchMediaInit"),fs.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=xi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Kc("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),zm=e,Kc("matchMedia"))},vx=function(){function n(t,i){this.selector=i&&Dd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=OE++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){yt(i)&&(s=r,r=i,i=yt);var o=this,a=function(){var u=lt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Dd(s)),lt=o,d=r.apply(o,arguments),yt(d)&&o._r.push(d),lt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===yt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=lt;lt=null,i(this),lt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,d){return d.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof hn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof wt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=fs.length;o--;)fs[o].id===this.id&&fs.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),FE=function(){function n(t){this.contexts=[],this.scope=t,lt&&lt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){bi(i)||(i={matches:i});var o=new vx(0,s||this.scope),a=o.conditions={},l,u,c;lt&&!o.selector&&(o.selector=lt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=xi.matchMedia(i[u]),l&&(fs.indexOf(o)<0&&fs.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Id):l.addEventListener("change",Id)));return c&&r(o,function(d){return o.add(null,d)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),Ou={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return sx(r)})},timeline:function(e){return new hn(e)},getTweensOf:function(e,t){return ht.getTweensOf(e,t)},getProperty:function(e,t,i,r){zt(e)&&(e=Qn(e)[0]);var s=ls(e||{}).get,o=i?jv:Xv;return i==="native"&&(i=""),e&&(t?o((Pn[t]&&Pn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Pn[a]&&Pn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Qn(e),e.length>1){var r=e.map(function(c){return Tn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Pn[t],a=ls(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;io._pt=0,d.init(e,i?c+i:c,io,0,[e]),d.render(1,d),io._pt&&ip(1,io)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Tn.to(e,zn((r={},r[t]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return ht.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=cs(e.ease,Oa.ease)),Um(Oa,e||{})},config:function(e){return Um(On,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Pn[a]&&!kn[a]&&Fa(t+" effect requires "+a+" plugin.")}),jc[t]=function(a,l,u){return i(Qn(a),zn(l||{},s),u)},o&&(hn.prototype[t]=function(a,l,u){return this.add(jc[t](a,bi(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Ve[e]=cs(t)},parseEase:function(e,t){return arguments.length?cs(e,t):Ve},getById:function(e){return ht.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new hn(e),r,s;for(i.smoothChildTiming=vn(e.smoothChildTiming),ht.remove(i),i._dp=0,i._time=i._tTime=ht._time,r=ht._first;r;)s=r._next,(t||!(!r._dur&&r instanceof wt&&r.vars.onComplete===r._targets[0]))&&Mi(i,r,r._start-r._delay),r=s;return Mi(ht,i,0),i},context:function(e,t){return e?new vx(e,t):lt},matchMedia:function(e){return new FE(e)},matchMediaRefresh:function(){return fs.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Id()},addEventListener:function(e,t){var i=ou[e]||(ou[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=ou[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:pE,wrapYoyo:mE,distribute:Jv,random:tx,snap:ex,normalize:hE,getUnit:Kt,clamp:uE,splitColor:ox,toArray:Qn,selector:Dd,mapRange:ix,pipe:fE,unitize:dE,interpolate:_E,shuffle:Qv},install:Bv,effects:jc,ticker:Ln,updateRoot:hn.updateRoot,plugins:Pn,globalTimeline:ht,core:{PropTween:yn,globals:Hv,Tween:wt,Timeline:hn,Animation:Ha,getCache:ls,_removeLinkedListItem:lc,reverting:function(){return Gt},context:function(e){return e&&lt&&(lt.data.push(e),e._ctx=lt),lt},suppressOverwrites:function(e){return Wh=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return Ou[n]=wt[n]});Ln.add(hn.updateRoot);io=Ou.to({},{duration:0});var kE=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},zE=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=kE(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Zc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(zt(s)&&(l={},xn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}zE(a,s)}}}},Tn=Ou.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Gt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Zc("roundProps",Nd),Zc("modifiers"),Zc("snap",ex))||Ou;wt.version=hn.version=Tn.version="3.15.0";zv=1;jh()&&Co();Ve.Power0;Ve.Power1;Ve.Power2;Ve.Power3;Ve.Power4;Ve.Linear;Ve.Quad;Ve.Cubic;Ve.Quart;Ve.Quint;Ve.Strong;Ve.Elastic;Ve.Back;Ve.SteppedEase;Ve.Bounce;Ve.Sine;Ve.Expo;Ve.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Bm,hr,po,rp,ss,Hm,sp,BE=function(){return typeof window<"u"},Zi={},Zr=180/Math.PI,mo=Math.PI/180,Cs=Math.atan2,Gm=1e8,op=/([A-Z])/g,HE=/(left|right|width|margin|padding|x)/i,GE=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Od=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},VE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},WE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},XE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jE=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},xx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},yx=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},YE=function(e,t,i){return e.style[t]=i},qE=function(e,t,i){return e.style.setProperty(t,i)},$E=function(e,t,i){return e._gsap[t]=i},KE=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},ZE=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},QE=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},pt="transform",Sn=pt+"Origin",JE=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Hi(r,a)}):this.tfm[e]=o.x?o[e]:Hi(r,e),e===Sn&&(this.tfm.zOrigin=o.zOrigin);else return Ti.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(pt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=pt}(s||t)&&this.props.push(e,t,s[e])},Sx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},e1=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(op,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=sp(),(!s||!s.isStart)&&!i[pt]&&(Sx(i),r.zOrigin&&i[Sn]&&(i[Sn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Mx=function(e,t){var i={target:e,props:[],revert:e1,save:JE};return e._gsap||Tn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(r){return i.save(r)}),i},Ex,Fd=function(e,t){var i=hr.createElementNS?hr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):hr.createElement(e);return i&&i.style?i:hr.createElement(e)},Un=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(op,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Ro(t)||t,1)||""},Vm="O,Moz,ms,Ms,Webkit".split(","),Ro=function(e,t,i){var r=t||ss,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Vm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Vm[o]:"")+e},kd=function(){BE()&&window.document&&(Bm=window,hr=Bm.document,po=hr.documentElement,ss=Fd("div")||{style:{}},Fd("div"),pt=Ro(pt),Sn=pt+"Origin",ss.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ex=!!Ro("perspective"),sp=Tn.core.reverting,rp=1)},Wm=function(e){var t=e.ownerSVGElement,i=Fd("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=e.cloneNode(!0),s;r.style.display="block",i.appendChild(r),po.appendChild(i);try{s=r.getBBox()}catch{}return i.removeChild(r),po.removeChild(i),s},Xm=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Tx=function(e){var t,i;try{t=e.getBBox()}catch{t=Wm(e),i=1}return t&&(t.width||t.height)||i||(t=Wm(e)),t&&!t.width&&!t.x&&!t.y?{x:+Xm(e,["x","cx","x1"])||0,y:+Xm(e,["y","cy","y1"])||0,width:0,height:0}:t},wx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Tx(e))},Nr=function(e,t){if(t){var i=e.style,r;t in Zi&&t!==Sn&&(t=pt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(op,"-$1").toLowerCase())):i.removeAttribute(t)}},pr=function(e,t,i,r,s,o){var a=new yn(e._pt,t,i,0,1,o?yx:xx);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},jm={deg:1,rad:1,turn:1},t1={grid:1,flex:1},Ur=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ss.style,l=HE.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",x,_,m,f;if(r===o||!s||jm[r]||jm[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&wx(e),(p||o==="%")&&(Zi[t]||~t.indexOf("adius")))return x=f?e.getBBox()[l?"width":"height"]:e[c],Mt(p?s/x*d:s/100*x);if(a[l?"width":"height"]=d+(h?o:r),_=r!=="rem"&&~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===hr||!_.appendChild)&&(_=hr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Ln.time&&!m.uncache)return Mt(s/m.width*d);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=d+r,x=e[c],g?e.style[t]=g:Nr(e,t)}else(p||o==="%")&&!t1[Un(_,"display")]&&(a.position=Un(e,"position")),_===e&&(a.position="static"),_.appendChild(ss),x=ss[c],_.removeChild(ss),a.position="absolute";return l&&p&&(m=ls(_),m.time=Ln.time,m.width=_[c]),Mt(h?x*s/d:x&&s?d/x*s:0)},Hi=function(e,t,i,r){var s;return rp||kd(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zi[t]&&t!=="transform"?(s=Va(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ku(Un(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Fu[t]&&Fu[t](e,t,i)||Un(e,t)||Vv(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Ur(e,t,s,i)+i:s},n1=function(e,t,i,r){if(!i||i==="none"){var s=Ro(t,e,1),o=s&&Un(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Un(e,"borderTopColor"))}var a=new yn(this._pt,e.style,t,0,1,_x),l=0,u=0,c,d,h,p,x,_,m,f,g,v,y,E;if(a.b=i,a.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=Un(e,r.substring(4,r.indexOf(")")))),r==="auto"&&(_=e.style[t],e.style[t]=r,r=Un(e,t)||r,_?e.style[t]=_:Nr(e,t)),c=[i,r],lx(c),i=c[0],r=c[1],h=i.match(no)||[],E=r.match(no)||[],E.length){for(;d=no.exec(r);)m=d[0],g=r.substring(l,d.index),x?x=(x+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(x=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=ho(p,m)+y),f=parseFloat(m),v=m.substr((f+"").length),l=no.lastIndex-v.length,v||(v=v||On.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Ur(e,t,_,v)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:p,c:f-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?yx:xx;return kv.test(r)&&(a.e=0),this._pt=a,a},Ym={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},i1=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Ym[i]||i,t[1]=Ym[r]||r,t.join(" ")},r1=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zi[a]&&(l=1,a=a==="transformOrigin"?Sn:pt),Nr(i,a);l&&(Nr(i,pt),o&&(o.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",Va(i,1),o.uncache=1,Sx(r)))}},Fu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new yn(e._pt,t,i,0,0,r1);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ga=[1,0,0,1,0,0],Ax={},Cx=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},qm=function(e){var t=Un(e,pt);return Cx(t)?Ga:t.substr(7).match(Fv).map(Mt)},ap=function(e,t){var i=e._gsap||ls(e),r=e.style,s=qm(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ga:s):(s===Ga&&!e.offsetParent&&e!==po&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(u=1,a=e.nextElementSibling,po.appendChild(e)),s=qm(e),l?r.display=l:Nr(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):po.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},zd=function(e,t,i,r,s,o){var a=e._gsap,l=s||ap(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],_=l[2],m=l[3],f=l[4],g=l[5],v=t.split(" "),y=parseFloat(v[0])||0,E=parseFloat(v[1])||0,A,M,P,S;i?l!==Ga&&(M=p*m-x*_)&&(P=y*(m/M)+E*(-_/M)+(_*g-m*f)/M,S=y*(-x/M)+E*(p/M)-(p*g-x*f)/M,y=P,E=S):(A=Tx(e),y=A.x+(~v[0].indexOf("%")?y/100*A.width:y),E=A.y+(~(v[1]||v[0]).indexOf("%")?E/100*A.height:E)),r||r!==!1&&a.smooth?(f=y-u,g=E-c,a.xOffset=d+(f*p+g*_)-f,a.yOffset=h+(f*x+g*m)-g):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=E,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Sn]="0px 0px",o&&(pr(o,a,"xOrigin",u,y),pr(o,a,"yOrigin",c,E),pr(o,a,"xOffset",d,a.xOffset),pr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+E)},Va=function(e,t){var i=e._gsap||new cx(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Un(e,Sn)||"0",c,d,h,p,x,_,m,f,g,v,y,E,A,M,P,S,w,I,X,K,L,U,H,Y,D,O,F,$,Z,j,q,ie;return c=d=h=_=m=f=g=v=y=0,p=x=1,i.svg=!!(e.getCTM&&wx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[pt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[pt]!=="none"?l[pt]:"")),r.scale=r.rotate=r.translate="none"),M=ap(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),zd(e,Y||u,!!Y||i.originIsAbsolute,i.smooth!==!1,M)),E=i.xOrigin||0,A=i.yOrigin||0,M!==Ga&&(I=M[0],X=M[1],K=M[2],L=M[3],c=U=M[4],d=H=M[5],M.length===6?(p=Math.sqrt(I*I+X*X),x=Math.sqrt(L*L+K*K),_=I||X?Cs(X,I)*Zr:0,g=K||L?Cs(K,L)*Zr+_:0,g&&(x*=Math.abs(Math.cos(g*mo))),i.svg&&(c-=E-(E*I+A*K),d-=A-(E*X+A*L))):(ie=M[6],j=M[7],F=M[8],$=M[9],Z=M[10],q=M[11],c=M[12],d=M[13],h=M[14],P=Cs(ie,Z),m=P*Zr,P&&(S=Math.cos(-P),w=Math.sin(-P),Y=U*S+F*w,D=H*S+$*w,O=ie*S+Z*w,F=U*-w+F*S,$=H*-w+$*S,Z=ie*-w+Z*S,q=j*-w+q*S,U=Y,H=D,ie=O),P=Cs(-K,Z),f=P*Zr,P&&(S=Math.cos(-P),w=Math.sin(-P),Y=I*S-F*w,D=X*S-$*w,O=K*S-Z*w,q=L*w+q*S,I=Y,X=D,K=O),P=Cs(X,I),_=P*Zr,P&&(S=Math.cos(P),w=Math.sin(P),Y=I*S+X*w,D=U*S+H*w,X=X*S-I*w,H=H*S-U*w,I=Y,U=D),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,f=180-f),p=Mt(Math.sqrt(I*I+X*X+K*K)),x=Mt(Math.sqrt(H*H+ie*ie)),P=Cs(U,H),g=Math.abs(P)>2e-4?P*Zr:0,y=q?1/(q<0?-q:q):0),i.svg&&(Y=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Cx(Un(e,pt)),Y&&e.setAttribute("transform",Y))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=Mt(p),i.scaleY=Mt(x),i.rotation=Mt(_)+a,i.rotationX=Mt(m)+a,i.rotationY=Mt(f)+a,i.skewX=g+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Sn]=ku(u)),i.xOffset=i.yOffset=0,i.force3D=On.force3D,i.renderTransform=i.svg?o1:Ex?Rx:s1,i.uncache=0,i},ku=function(e){return(e=e.split(" "))[0]+" "+e[1]},Qc=function(e,t,i){var r=Kt(t);return Mt(parseFloat(t)+parseFloat(Ur(e,"x",i+"px",r)))+r},s1=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rx(e,t)},Vr="0deg",Yo="0px",Wr=") ",Rx=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,_=i.scaleY,m=i.transformPerspective,f=i.force3D,g=i.target,v=i.zOrigin,y="",E=f==="auto"&&e&&e!==1||f===!0;if(v&&(d!==Vr||c!==Vr)){var A=parseFloat(c)*mo,M=Math.sin(A),P=Math.cos(A),S;A=parseFloat(d)*mo,S=Math.cos(A),o=Qc(g,o,M*S*-v),a=Qc(g,a,-Math.sin(A)*-v),l=Qc(g,l,P*S*-v+v)}m!==Yo&&(y+="perspective("+m+Wr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(E||o!==Yo||a!==Yo||l!==Yo)&&(y+=l!==Yo||E?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Wr),u!==Vr&&(y+="rotate("+u+Wr),c!==Vr&&(y+="rotateY("+c+Wr),d!==Vr&&(y+="rotateX("+d+Wr),(h!==Vr||p!==Vr)&&(y+="skew("+h+", "+p+Wr),(x!==1||_!==1)&&(y+="scale("+x+", "+_+Wr),g.style[pt]=y||"translate(0, 0)"},o1=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,_=i.yOrigin,m=i.xOffset,f=i.yOffset,g=i.forceCSS,v=parseFloat(o),y=parseFloat(a),E,A,M,P,S;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=mo,u*=mo,E=Math.cos(l)*d,A=Math.sin(l)*d,M=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=mo,S=Math.tan(u-c),S=Math.sqrt(1+S*S),M*=S,P*=S,c&&(S=Math.tan(c),S=Math.sqrt(1+S*S),E*=S,A*=S)),E=Mt(E),A=Mt(A),M=Mt(M),P=Mt(P)):(E=d,P=h,A=M=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Ur(p,"x",o,"px"),y=Ur(p,"y",a,"px")),(x||_||m||f)&&(v=Mt(v+x-(x*E+_*M)+m),y=Mt(y+_-(x*A+_*P)+f)),(r||s)&&(S=p.getBBox(),v=Mt(v+r/100*S.width),y=Mt(y+s/100*S.height)),S="matrix("+E+","+A+","+M+","+P+","+v+","+y+")",p.setAttribute("transform",S),g&&(p.style[pt]=S)},a1=function(e,t,i,r,s){var o=360,a=zt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Zr:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*Gm)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*Gm)%o-~~(u/o)*o)),e._pt=h=new yn(e._pt,t,i,r,u,VE),h.e=c,h.u="deg",e._props.push(i),h},$m=function(e,t){for(var i in t)e[i]=t[i];return e},l1=function(e,t,i){var r=$m({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[pt]=t,a=Va(i,1),Nr(i,pt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[pt],o[pt]=t,a=Va(i,1),o[pt]=u);for(l in Zi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Kt(u),x=Kt(c),d=p!==x?Ur(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new yn(e._pt,a,l,d,h-d,Od),e._pt.u=x||0,e._props.push(l));$m(a,r)};xn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Fu[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(x){return Hi(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,_){return p[x]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,d)}});var Px={name:"css",register:kd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,x,_,m,f,g,v,y,E,A,M,P,S;rp||kd(),this.styles=this.styles||Mx(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Pn[_]&&fx(_,t,i,r,e,s)))){if(p=typeof c,x=Fu[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=za(c)),x)x(this,e,_,c,i)&&(M=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Ar.lastIndex=0,Ar.test(u)||(m=Kt(u),f=Kt(c),f?m!==f&&(u=Ur(e,_,u,f)+f):m&&(c+=m)),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],zt(u)&&~u.indexOf("random(")&&(u=za(u)),Kt(u+"")||u==="auto"||(u+=On.units[_]||Kt(Hi(e,_))||""),(u+"").charAt(1)==="="&&(u=Hi(e,_))):u=Hi(e,_),h=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),d=parseFloat(c),_ in Ti&&(_==="autoAlpha"&&(h===1&&Hi(e,"visibility")==="hidden"&&d&&(h=0),P.push("visibility",0,a.visibility),pr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=Ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Zi,v){if(this.styles.save(_),S=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=Un(e,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var w=e.style.perspective;e.style.perspective=c,c=Un(e,"perspective"),w?e.style.perspective=w:Nr(e,"perspective")}d=parseFloat(c)}if(y||(E=e._gsap,E.renderTransform&&!t.parseTransform||Va(e,t.parseTransform),A=t.smoothOrigin!==!1&&E.smooth,y=this._pt=new yn(this._pt,a,pt,0,1,E.renderTransform,E,0,-1),y.dep=1),_==="scale")this._pt=new yn(this._pt,E,"scaleY",E.scaleY,(g?ho(E.scaleY,g+d):d)-E.scaleY||0,Od),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Sn,0,a[Sn]),c=i1(c),E.svg?zd(e,c,0,A,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==E.zOrigin&&pr(this,E,"zOrigin",E.zOrigin,f),pr(this,a,_,ku(u),ku(c)));continue}else if(_==="svgOrigin"){zd(e,c,1,A,0,this);continue}else if(_ in Ax){a1(this,E,_,h,g?ho(h,g+c):c);continue}else if(_==="smoothOrigin"){pr(this,E,"smooth",E.smooth,c);continue}else if(_==="force3D"){E[_]=c;continue}else if(_==="transform"){l1(this,c,e);continue}}else _ in a||(_=Ro(_)||_);if(v||(d||d===0)&&(h||h===0)&&!GE.test(c)&&_ in a)m=(u+"").substr((h+"").length),d||(d=0),f=Kt(c)||(_ in On.units?On.units[_]:m),m!==f&&(h=Ur(e,_,u,f)),this._pt=new yn(this._pt,v?E:a,_,h,(g?ho(h,g+d):d)-h,!v&&(f==="px"||_==="zIndex")&&t.autoRound!==!1?jE:Od),this._pt.u=f||0,v&&S!==c?(this._pt.b=u,this._pt.e=S,this._pt.r=XE):m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=WE);else if(_ in a)n1.call(this,e,_,u,g?g+c:c);else if(_ in e)this.add(e,_,u||e[_],g?g+c:c,r,s);else if(_!=="parseTransform"){qh(_,c);continue}v||(_ in a?P.push(_,0,a[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,u||e[_])),o.push(_)}}M&&gx(this)},render:function(e,t){if(t.tween._time||!sp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Hi,aliases:Ti,getSetter:function(e,t,i){var r=Ti[t];return r&&r.indexOf(",")<0&&(t=r),t in Zi&&t!==Sn&&(e._gsap.x||Hi(e,"x"))?i&&Hm===i?t==="scale"?KE:$E:(Hm=i||{})&&(t==="scale"?ZE:QE):e.style&&!Xh(e.style[t])?YE:~t.indexOf("-")?qE:np(e,t)},core:{_removeProperty:Nr,_getMatrix:ap}};Tn.utils.checkPrefix=Ro;Tn.core.getStyleSaver=Mx;(function(n,e,t,i){var r=xn(n+","+e+","+t,function(s){Zi[s]=1});xn(e,function(s){On.units[s]="deg",Ax[s]=1}),Ti[r[13]]=n+","+e,xn(i,function(s){var o=s.split(":");Ti[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){On.units[n]="px"});Tn.registerPlugin(Px);var zu=Tn.registerPlugin(Px)||Tn;zu.core.Tween;const u1=()=>oe.jsxs("div",{className:"fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0c]",children:[oe.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#121318] via-[#0b0c10] to-[#07070a]"}),oe.jsx("div",{className:"absolute top-[-20%] left-1/2 transform -translate-x-1/2 w-[90vw] h-[500px] bg-gradient-to-b from-white/[0.08] via-indigo-500/[0.04] to-transparent rounded-full blur-[130px] pointer-events-none"}),oe.jsx("div",{className:"absolute bottom-[-20%] right-1/4 w-[600px] h-[400px] bg-sky-500/[0.03] rounded-full blur-[140px] pointer-events-none"}),oe.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_30%,transparent_100%)] pointer-events-none"}),oe.jsx("div",{className:"absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"})]}),Jc="1275540868186636348",c1=[{name:"Java",faName:"جاوا",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",color:"#E76F00"},{name:"TypeScript",faName:"تایپ‌اسکریپت",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",color:"#3178C6"},{name:"React",faName:"ری‌اکت",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",color:"#61DAFB"},{name:"JavaScript",faName:"جاوااسکریپت",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",color:"#F7DF1E"},{name:"HTML5",faName:"اچ‌تی‌ام‌ال",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",color:"#E34F26"},{name:"CSS3",faName:"سی‌اس‌اس",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",color:"#1572B6"},{name:"Next.js",faName:"نکست‌جی‌اس",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",color:"#ffffff"},{name:"Node.js",faName:"نودجی‌اس",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",color:"#339933"},{name:"Go",faName:"گو",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original-wordmark.svg",color:"#00ADD8"},{name:"C#",faName:"سی‌شارپ",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",color:"#239120"},{name:"Python",faName:"پایتون",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",color:"#3776AB"},{name:"Docker",faName:"داکر",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",color:"#2496ED"},{name:"Three.js",faName:"تری‌جی‌اس",iconUrl:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",color:"#ff0033"}],li={name:"Mervali",role:"توسعه‌دهنده و طراح نرم‌افزار",stack_title:"ابزارها و مهارت‌ها",status_listening:"در حال شنیدن اسپاتیفای",status_coding:"در حال کدنویسی",status_discord:"وضعیت دیسکورد",status_online:"آنلاین",status_idle:"ساکت (Idle)",status_dnd:"مزاحم نشوید (DND)",status_offline:"آفلاین"},f1=({data:n,loading:e})=>{var l,u;const t=bn.useRef(null);if(bn.useEffect(()=>{!e&&t.current&&zu.fromTo(t.current,{opacity:0},{opacity:1,duration:.4,ease:"power2.out"})},[e]),e)return oe.jsx("div",{className:"w-full h-14 bg-white/[0.03] animate-pulse rounded-2xl backdrop-blur-md"});const r=(c=>{switch(c){case"online":return"#34d399";case"idle":return"#fbbf24";case"dnd":return"#f43f5e";default:return"#a1a1aa"}})(n==null?void 0:n.discord_status);if(n!=null&&n.listening_to_spotify&&n.spotify)return oe.jsxs("div",{ref:t,className:"w-full flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] px-4 py-2.5 rounded-2xl transition-all shadow-sm",children:[oe.jsxs("div",{className:"relative w-9 h-9 flex-shrink-0",children:[oe.jsx("img",{src:n.spotify.album_art_url,alt:"Album Art",className:"w-full h-full rounded-xl object-cover shadow-sm border border-white/10"}),oe.jsx("div",{className:"absolute -bottom-1 -right-1 bg-zinc-950 rounded-full p-0.5",children:oe.jsx("svg",{className:"w-3 h-3 text-[#1DB954]",fill:"currentColor",viewBox:"0 0 24 24",children:oe.jsx("path",{d:"M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm5.5 17.3c-.2.3-.5.4-.8.2-2.2-1.3-5-1.6-8.2-.9-.4.1-.8-.2-.9-.5-.1-.4.2-.8.5-.9 3.5-.8 6.6-.5 9.1 1 .3.2.4.5.2.8zm1.1-2.4c-.3.4-.8.5-1.2.3-2.8-1.7-7.1-2.2-10.4-1.2-.5.1-1-.2-1.2-.7-.1-.5.2-1 .7-1.2 3.9-1.2 8.7-.6 12 1.4.5.3.6.8.3 1.2c-.1.1-.2.2-.2.2zm.1-2.5c-3.3-2-8.8-2.2-12-1.2-.6.2-1.2-.2-1.4-.8-.2-.6.2-1.2.8-1.4 3.7-1.1 9.8-.8 13.7 1.4.6.3.8 1.1.5 1.6-.3.6-1 .8-1.6.4z"})})})]}),oe.jsxs("div",{className:"flex flex-col overflow-hidden text-right flex-grow",dir:"rtl",children:[oe.jsx("div",{className:"flex items-center gap-1.5 mb-0.5",children:oe.jsx("span",{className:"text-[10px] text-[#1DB954] font-semibold uppercase tracking-wider",children:li.status_listening})}),oe.jsx("span",{className:"text-xs text-white font-medium truncate",children:n.spotify.song}),oe.jsx("span",{className:"text-[11px] text-zinc-400 truncate",children:n.spotify.artist})]})]});const s=(l=n==null?void 0:n.activities)==null?void 0:l.find(c=>c.name==="Visual Studio Code"||c.name==="Code");if(s)return oe.jsxs("div",{ref:t,className:"w-full flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] px-4 py-2.5 rounded-2xl transition-all shadow-sm",children:[oe.jsx("div",{className:"w-9 h-9 flex-shrink-0 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20",children:oe.jsx("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor",children:oe.jsx("path",{d:"M23.15 2.587l-9.543-2.587-6.938 6.48-5.714-2.418-0.955 0.955 5.555 5.308-5.555 5.308 0.955 0.955 5.714-2.418 6.938 6.48 9.543-2.587v-15.476zM9.5 15.65l-4.5 2.138 3.5-3.324-3.5-3.325 4.5 2.138v2.373zM10.875 19.388l-0.375-13.776 3.1 3.2 4.15-1.074v8.524l-4.15-1.074-2.725 4.2zM15.5 12l2.5 2.5h-5l2.5-2.5z"})})}),oe.jsxs("div",{className:"flex flex-col text-right flex-grow",dir:"rtl",children:[oe.jsx("span",{className:"text-[10px] text-blue-400 font-semibold uppercase tracking-wider mb-0.5",children:li.status_coding}),oe.jsx("span",{className:"text-xs text-white font-medium truncate",children:s.details||"در حال کدنویسی"}),oe.jsx("span",{className:"text-[11px] text-zinc-400 truncate",children:s.state||"محیط توسعه"})]})]});const o=(u=n==null?void 0:n.activities)==null?void 0:u.find(c=>c.type===4),a=o!=null&&o.state?o.state:(n==null?void 0:n.discord_status)==="dnd"?li.status_dnd:(n==null?void 0:n.discord_status)==="idle"?li.status_idle:(n==null?void 0:n.discord_status)==="online"?li.status_online:li.status_offline;return oe.jsxs("div",{ref:t,className:"w-full flex items-center gap-3 bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] px-4 py-2.5 rounded-2xl transition-all shadow-sm",children:[oe.jsx("div",{className:"w-9 h-9 flex-shrink-0 bg-white/5 rounded-xl flex items-center justify-center border border-white/10",children:oe.jsx("div",{className:"w-2.5 h-2.5 rounded-full shadow-sm",style:{backgroundColor:r}})}),oe.jsxs("div",{className:"flex flex-col text-right flex-grow",dir:"rtl",children:[oe.jsx("span",{className:"text-[10px] text-zinc-400 font-semibold uppercase tracking-wider mb-0.5",children:li.status_discord}),oe.jsx("span",{className:"text-xs text-white/90 font-medium truncate",children:a})]})]})},d1=({items:n})=>oe.jsxs("div",{className:"bg-white/[0.035] hover:bg-white/[0.05] transition-all duration-300 rounded-[2.25rem] p-6 md:p-8 border border-white/[0.09] backdrop-blur-2xl w-full relative overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)]",children:[oe.jsx("div",{className:"absolute top-0 inset-x-12 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"}),oe.jsxs("h3",{className:"text-xs font-semibold text-zinc-400 mb-6 text-center md:text-right px-2 flex items-center justify-center md:justify-start gap-2.5",dir:"rtl",children:[oe.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-zinc-500"}),oe.jsx("span",{children:li.stack_title})]}),oe.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-5 sm:gap-6 justify-items-center relative z-20",children:n.map(e=>oe.jsx(h1,{tech:e},e.name))})]}),h1=({tech:n})=>{const[e,t]=Lg.useState(!1),i=n.name==="Three.js"?{filter:"invert(80%) sepia(80%) saturate(1500%) hue-rotate(170deg)"}:{};return oe.jsxs("div",{className:"relative flex flex-col items-center justify-center w-10 h-10 md:w-11 md:h-11 cursor-pointer group",onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[e&&oe.jsx("div",{className:"absolute -top-9 z-30 pointer-events-none",children:oe.jsxs("div",{className:"relative bg-zinc-900 border border-white/15 px-2.5 py-1 rounded-xl shadow-xl",children:[oe.jsx("span",{className:"text-[11px] font-medium text-zinc-100 whitespace-nowrap block text-center",dir:"rtl",children:n.faName||n.name}),oe.jsx("div",{className:"absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-zinc-900 border-r border-b border-white/15 rotate-45"})]})}),oe.jsx("img",{src:n.iconUrl,alt:n.faName||n.name,style:i,className:"w-8 h-8 md:w-9 md:h-9 object-contain relative z-10 transition-transform duration-200 group-hover:scale-110"})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="160",p1=0,Km=1,m1=2,bx=1,_1=2,Fi=3,Ir=0,Mn=1,Ei=2,Cr=0,ds=1,Zm=2,Qm=3,Jm=4,g1=5,es=100,v1=101,x1=102,e_=103,t_=104,y1=200,S1=201,M1=202,E1=203,Bd=204,Hd=205,T1=206,w1=207,A1=208,C1=209,R1=210,P1=211,b1=212,L1=213,D1=214,N1=0,U1=1,I1=2,Bu=3,O1=4,F1=5,k1=6,z1=7,up=0,B1=1,H1=2,Rr=0,G1=1,V1=2,W1=3,Lx=4,X1=5,j1=6,Dx=300,Po=301,bo=302,Gd=303,Vd=304,fc=306,Wd=1e3,fi=1001,Xd=1002,on=1003,n_=1004,ef=1005,Yn=1006,Y1=1007,Wa=1008,Pr=1009,q1=1010,$1=1011,cp=1012,Nx=1013,mr=1014,_r=1015,Xa=1016,Ux=1017,Ix=1018,hs=1020,K1=1021,di=1023,Z1=1024,Q1=1025,ps=1026,Lo=1027,J1=1028,Ox=1029,eT=1030,Fx=1031,kx=1033,tf=33776,nf=33777,rf=33778,sf=33779,i_=35840,r_=35841,s_=35842,o_=35843,zx=36196,a_=37492,l_=37496,u_=37808,c_=37809,f_=37810,d_=37811,h_=37812,p_=37813,m_=37814,__=37815,g_=37816,v_=37817,x_=37818,y_=37819,S_=37820,M_=37821,of=36492,E_=36494,T_=36495,tT=36283,w_=36284,A_=36285,C_=36286,Bx=3e3,ms=3001,nT=3200,iT=3201,Hx=0,rT=1,$n="",Ot="srgb",Qi="srgb-linear",fp="display-p3",dc="display-p3-linear",Hu="linear",st="srgb",Gu="rec709",Vu="p3",Rs=7680,R_=519,sT=512,oT=513,aT=514,Gx=515,lT=516,uT=517,cT=518,fT=519,P_=35044,b_="300 es",jd=1035,Wi=2e3,Wu=2001;class Oo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],af=Math.PI/180,Yd=180/Math.PI;function Ja(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function dn(n,e,t){return Math.max(e,Math.min(t,n))}function dT(n,e){return(n%e+e)%e}function lf(n,e,t){return(1-t)*n+t*e}function L_(n){return(n&n-1)===0&&n!==0}function qd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function qo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function cn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ye{constructor(e=0,t=0){Ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],x=i[8],_=r[0],m=r[3],f=r[6],g=r[1],v=r[4],y=r[7],E=r[2],A=r[5],M=r[8];return s[0]=o*_+a*g+l*E,s[3]=o*m+a*v+l*A,s[6]=o*f+a*y+l*M,s[1]=u*_+c*g+d*E,s[4]=u*m+c*v+d*A,s[7]=u*f+c*y+d*M,s[2]=h*_+p*g+x*E,s[5]=h*m+p*v+x*A,s[8]=h*f+p*y+x*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*d+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=d*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new Be;function Vx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ja(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hT(){const n=ja("canvas");return n.style.display="block",n}const D_={};function va(n){n in D_||(D_[n]=!0,console.warn(n))}const N_=new Be().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),U_=new Be().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tl={[Qi]:{transfer:Hu,primaries:Gu,toReference:n=>n,fromReference:n=>n},[Ot]:{transfer:st,primaries:Gu,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[dc]:{transfer:Hu,primaries:Vu,toReference:n=>n.applyMatrix3(U_),fromReference:n=>n.applyMatrix3(N_)},[fp]:{transfer:st,primaries:Vu,toReference:n=>n.convertSRGBToLinear().applyMatrix3(U_),fromReference:n=>n.applyMatrix3(N_).convertLinearToSRGB()}},pT=new Set([Qi,dc]),Ze={enabled:!0,_workingColorSpace:Qi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!pT.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Tl[e].toReference,r=Tl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Tl[n].primaries},getTransfer:function(n){return n===$n?Hu:Tl[n].transfer}};function _o(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function cf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ps;class Wx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=ja("canvas")),Ps.width=e.width,Ps.height=e.height;const i=Ps.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ja("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_o(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_o(t[i]/255)*255):t[i]=_o(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let mT=0;class Xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:mT++}),this.uuid=Ja(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ff(r[o].image)):s.push(ff(r[o]))}else s=ff(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function ff(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _T=0;class En extends Oo{constructor(e=En.DEFAULT_IMAGE,t=En.DEFAULT_MAPPING,i=fi,r=fi,s=Yn,o=Wa,a=di,l=Pr,u=En.DEFAULT_ANISOTROPY,c=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=Ja(),this.name="",this.source=new Xx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===ms?Ot:$n),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case fi:e.x=e.x<0?0:1;break;case Xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case fi:e.y=e.y<0?0:1;break;case Xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ot?ms:Bx}set encoding(e){va("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ms?Ot:$n}}En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Dx;En.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,t=0,i=0,r=1){Ft.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+_)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,E=(f+1)/2,A=(c+h)/4,M=(d+_)/4,P=(x+m)/4;return v>y&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=M/i):y>E?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=A/r,s=P/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=M/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-x)*(m-x)+(d-_)*(d-_)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(d-_)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gT extends Oo{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(va("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ms?Ot:$n),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new En(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Xx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ss extends gT{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class jx extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vT extends En{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=on,this.minFilter=on,this.wrapR=fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class el{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(d!==_||l!==h||u!==p||c!==x){let m=1-a;const f=l*h+u*p+c*x+d*_,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const E=Math.sqrt(v),A=Math.atan2(E,f*g);m=Math.sin(m*A)/E,a=Math.sin(a*A)/E}const y=a*g;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,d=d*m+_*y,m===1-a){const E=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=E,u*=E,c*=E,d*=E}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*d+l*p-u*h,e[t+1]=l*x+c*h+u*d-a*p,e[t+2]=u*x+c*p+a*h-l*d,e[t+3]=c*x-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"YXZ":this._x=h*c*d+u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"ZXY":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d-h*p*x;break;case"ZYX":this._x=h*c*d-u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d+h*p*x;break;case"YZX":this._x=h*c*d+u*p*x,this._y=u*p*d+h*c*x,this._z=u*c*x-h*p*d,this._w=u*c*d-h*p*x;break;case"XZY":this._x=h*c*d-u*p*x,this._y=u*p*d-h*c*x,this._z=u*c*x+h*p*d,this._w=u*c*d+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(I_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(I_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),d=2*(s*i-o*t);return this.x=t+l*u+o*d-a*c,this.y=i+l*c+a*u-s*d,this.z=r+l*d+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return df.copy(this).projectOnVector(e),this.sub(df)}reflect(e){return this.sub(df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const df=new B,I_=new el;class tl{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ii.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ii.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ii.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ii):ii.fromBufferAttribute(s,o),ii.applyMatrix4(e.matrixWorld),this.expandByPoint(ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ii),ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($o),Al.subVectors(this.max,$o),bs.subVectors(e.a,$o),Ls.subVectors(e.b,$o),Ds.subVectors(e.c,$o),tr.subVectors(Ls,bs),nr.subVectors(Ds,Ls),Xr.subVectors(bs,Ds);let t=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Xr.z,Xr.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Xr.z,0,-Xr.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Xr.y,Xr.x,0];return!hf(t,bs,Ls,Ds,Al)||(t=[1,0,0,0,1,0,0,0,1],!hf(t,bs,Ls,Ds,Al))?!1:(Cl.crossVectors(tr,nr),t=[Cl.x,Cl.y,Cl.z],hf(t,bs,Ls,Ds,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Di=[new B,new B,new B,new B,new B,new B,new B,new B],ii=new B,wl=new tl,bs=new B,Ls=new B,Ds=new B,tr=new B,nr=new B,Xr=new B,$o=new B,Al=new B,Cl=new B,jr=new B;function hf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){jr.fromArray(n,s);const a=r.x*Math.abs(jr.x)+r.y*Math.abs(jr.y)+r.z*Math.abs(jr.z),l=e.dot(jr),u=t.dot(jr),c=i.dot(jr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const xT=new tl,Ko=new B,pf=new B;class dp{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):xT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ko.subVectors(e,this.center);const t=Ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ko.copy(e.center).add(pf)),this.expandByPoint(Ko.copy(e.center).sub(pf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ni=new B,mf=new B,Rl=new B,ir=new B,_f=new B,Pl=new B,gf=new B;class yT{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){mf.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),ir.copy(this.origin).sub(mf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Rl),a=ir.dot(this.direction),l=-ir.dot(Rl),u=ir.lengthSq(),c=Math.abs(1-o*o);let d,h,p,x;if(c>0)if(d=o*l-a,h=o*a-l,x=s*c,d>=0)if(h>=-x)if(h<=x){const _=1/c;d*=_,h*=_,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-x?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=x?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(mf).addScaledVector(Rl,h),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){_f.subVectors(t,e),Pl.subVectors(i,e),gf.crossVectors(_f,Pl);let o=this.direction.dot(gf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ir.subVectors(this.origin,e);const l=a*this.direction.dot(Pl.crossVectors(ir,Pl));if(l<0)return null;const u=a*this.direction.dot(_f.cross(ir));if(u<0||l+u>o)return null;const c=-a*ir.dot(gf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,x,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=x,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,x=a*c,_=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+x*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,x=u*c,_=u*d;t[0]=h+_*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,x=u*c,_=u*d;t[0]=h-_*a,t[4]=-o*d,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,x=a*c,_=a*d;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+_,t[1]=l*d,t[5]=_*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=_-h*d,t[8]=x*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+x,t[10]=h-_*d}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+_,t[5]=o*c,t[9]=p*d-x,t[2]=x*d-p,t[6]=a*c,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ST,e,MT)}lookAt(e,t,i){const r=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),rr.crossVectors(i,An),rr.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),rr.crossVectors(i,An)),rr.normalize(),bl.crossVectors(An,rr),r[0]=rr.x,r[4]=bl.x,r[8]=An.x,r[1]=rr.y,r[5]=bl.y,r[9]=An.y,r[2]=rr.z,r[6]=bl.z,r[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],f=i[14],g=i[3],v=i[7],y=i[11],E=i[15],A=r[0],M=r[4],P=r[8],S=r[12],w=r[1],I=r[5],X=r[9],K=r[13],L=r[2],U=r[6],H=r[10],Y=r[14],D=r[3],O=r[7],F=r[11],$=r[15];return s[0]=o*A+a*w+l*L+u*D,s[4]=o*M+a*I+l*U+u*O,s[8]=o*P+a*X+l*H+u*F,s[12]=o*S+a*K+l*Y+u*$,s[1]=c*A+d*w+h*L+p*D,s[5]=c*M+d*I+h*U+p*O,s[9]=c*P+d*X+h*H+p*F,s[13]=c*S+d*K+h*Y+p*$,s[2]=x*A+_*w+m*L+f*D,s[6]=x*M+_*I+m*U+f*O,s[10]=x*P+_*X+m*H+f*F,s[14]=x*S+_*K+m*Y+f*$,s[3]=g*A+v*w+y*L+E*D,s[7]=g*M+v*I+y*U+E*O,s[11]=g*P+v*X+y*H+E*F,s[15]=g*S+v*K+y*Y+E*$,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],f=e[15];return x*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],f=e[15],g=d*m*u-_*h*u+_*l*p-a*m*p-d*l*f+a*h*f,v=x*h*u-c*m*u-x*l*p+o*m*p+c*l*f-o*h*f,y=c*_*u-x*d*u+x*a*p-o*_*p-c*a*f+o*d*f,E=x*d*l-c*_*l-x*a*h+o*_*h+c*a*m-o*d*m,A=t*g+i*v+r*y+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/A;return e[0]=g*M,e[1]=(_*h*s-d*m*s-_*r*p+i*m*p+d*r*f-i*h*f)*M,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*f+i*l*f)*M,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*M,e[4]=v*M,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*f+t*h*f)*M,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*f-t*l*f)*M,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(x*d*s-c*_*s-x*i*p+t*_*p+c*i*f-t*d*f)*M,e[10]=(o*_*s-x*a*s+x*i*u-t*_*u-o*i*f+t*a*f)*M,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*M,e[12]=E*M,e[13]=(c*_*r-x*d*r+x*i*h-t*_*h-c*i*m+t*d*m)*M,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*m-t*a*m)*M,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,x=s*d,_=o*c,m=o*d,f=a*d,g=l*u,v=l*c,y=l*d,E=i.x,A=i.y,M=i.z;return r[0]=(1-(_+f))*E,r[1]=(p+y)*E,r[2]=(x-v)*E,r[3]=0,r[4]=(p-y)*A,r[5]=(1-(h+f))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(x+v)*M,r[9]=(m-g)*M,r[10]=(1-(h+_))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ns.set(r[0],r[1],r[2]).length();const o=Ns.set(r[4],r[5],r[6]).length(),a=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ri.copy(this);const u=1/s,c=1/o,d=1/a;return ri.elements[0]*=u,ri.elements[1]*=u,ri.elements[2]*=u,ri.elements[4]*=c,ri.elements[5]*=c,ri.elements[6]*=c,ri.elements[8]*=d,ri.elements[9]*=d,ri.elements[10]*=d,t.setFromRotationMatrix(ri),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Wi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Wi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Wu)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Wi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,_;if(a===Wi)x=(o+s)*d,_=-2*d;else if(a===Wu)x=s*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ns=new B,ri=new Pt,ST=new B(0,0,0),MT=new B(1,1,1),rr=new B,bl=new B,An=new B,O_=new Pt,F_=new el;class hc{constructor(e=0,t=0,i=0,r=hc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return O_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(O_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return F_.setFromEuler(this),this.setFromQuaternion(F_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hc.DEFAULT_ORDER="XYZ";class Yx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ET=0;const k_=new B,Us=new el,Ui=new Pt,Ll=new B,Zo=new B,TT=new B,wT=new el,z_=new B(1,0,0),B_=new B(0,1,0),H_=new B(0,0,1),AT={type:"added"},CT={type:"removed"};class Qt extends Oo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new B,t=new hc,i=new el,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Be}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(z_,e)}rotateY(e){return this.rotateOnAxis(B_,e)}rotateZ(e){return this.rotateOnAxis(H_,e)}translateOnAxis(e,t){return k_.copy(e).applyQuaternion(this.quaternion),this.position.add(k_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(z_,e)}translateY(e){return this.translateOnAxis(B_,e)}translateZ(e){return this.translateOnAxis(H_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ui.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ll.copy(e):Ll.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ui.lookAt(Zo,Ll,this.up):Ui.lookAt(Ll,Zo,this.up),this.quaternion.setFromRotationMatrix(Ui),r&&(Ui.extractRotation(r.matrixWorld),Us.setFromRotationMatrix(Ui),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(AT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(CT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ui.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ui.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ui),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,TT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,wT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new B(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const si=new B,Ii=new B,vf=new B,Oi=new B,Is=new B,Os=new B,G_=new B,xf=new B,yf=new B,Sf=new B;let Dl=!1;class ci{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),si.subVectors(e,t),r.cross(si);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){si.subVectors(r,t),Ii.subVectors(i,t),vf.subVectors(e,t);const o=si.dot(si),a=si.dot(Ii),l=si.dot(vf),u=Ii.dot(Ii),c=Ii.dot(vf),d=o*u-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Oi)===null?!1:Oi.x>=0&&Oi.y>=0&&Oi.x+Oi.y<=1}static getUV(e,t,i,r,s,o,a,l){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Oi.x),l.addScaledVector(o,Oi.y),l.addScaledVector(a,Oi.z),l)}static isFrontFacing(e,t,i,r){return si.subVectors(i,t),Ii.subVectors(e,t),si.cross(Ii).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return si.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),si.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Dl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dl=!0),ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Is.subVectors(r,i),Os.subVectors(s,i),xf.subVectors(e,i);const l=Is.dot(xf),u=Os.dot(xf);if(l<=0&&u<=0)return t.copy(i);yf.subVectors(e,r);const c=Is.dot(yf),d=Os.dot(yf);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Is,o);Sf.subVectors(e,s);const p=Is.dot(Sf),x=Os.dot(Sf);if(x>=0&&p<=x)return t.copy(s);const _=p*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Os,a);const m=c*x-p*d;if(m<=0&&d-c>=0&&p-x>=0)return G_.subVectors(s,r),a=(d-c)/(d-c+(p-x)),t.copy(r).addScaledVector(G_,a);const f=1/(m+_+h);return o=_*f,a=h*f,t.copy(i).addScaledVector(Is,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const qx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sr={h:0,s:0,l:0},Nl={h:0,s:0,l:0};function Mf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Ze.workingColorSpace){if(e=dT(e,1),t=dn(t,0,1),i=dn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Mf(o,s,e+1/3),this.g=Mf(o,s,e),this.b=Mf(o,s,e-1/3)}return Ze.toWorkingColorSpace(this,r),this}setStyle(e,t=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){const i=qx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=cf(e.r),this.g=cf(e.g),this.b=cf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return Ze.fromWorkingColorSpace(qt.copy(this),e),Math.round(dn(qt.r*255,0,255))*65536+Math.round(dn(qt.g*255,0,255))*256+Math.round(dn(qt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Ot){Ze.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(sr),this.setHSL(sr.h+e,sr.s+t,sr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(sr),e.getHSL(Nl);const i=lf(sr.h,Nl.h,t),r=lf(sr.s,Nl.s,t),s=lf(sr.l,Nl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Xe;Xe.NAMES=qx;let RT=0;class nl extends Oo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=ds,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Hd,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Bu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(i.blending=this.blending),this.side!==Ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Bd&&(i.blendSrc=this.blendSrc),this.blendDst!==Hd&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Bu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==R_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class $x extends nl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new B,Ul=new Ye;class Ri{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=P_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=_r,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ul.fromBufferAttribute(this,t),Ul.applyMatrix3(e),this.setXY(t,Ul.x,Ul.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=qo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=qo(t,this.array)),t}setX(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=qo(t,this.array)),t}setY(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=qo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=qo(t,this.array)),t}setW(e,t){return this.normalized&&(t=cn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=cn(t,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==P_&&(e.usage=this.usage),e}}class Kx extends Ri{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Zx extends Ri{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Pi extends Ri{constructor(e,t,i){super(new Float32Array(e),t,i)}}let PT=0;const Vn=new Pt,Ef=new Qt,Fs=new B,Cn=new tl,Qo=new tl,Ut=new B;class Br extends Oo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Vx(e)?Zx:Kx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Vn.makeRotationFromQuaternion(e),this.applyMatrix4(Vn),this}rotateX(e){return Vn.makeRotationX(e),this.applyMatrix4(Vn),this}rotateY(e){return Vn.makeRotationY(e),this.applyMatrix4(Vn),this}rotateZ(e){return Vn.makeRotationZ(e),this.applyMatrix4(Vn),this}translate(e,t,i){return Vn.makeTranslation(e,t,i),this.applyMatrix4(Vn),this}scale(e,t,i){return Vn.makeScale(e,t,i),this.applyMatrix4(Vn),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ut.addVectors(Cn.min,Qo.min),Cn.expandByPoint(Ut),Ut.addVectors(Cn.max,Qo.max),Cn.expandByPoint(Ut)):(Cn.expandByPoint(Qo.min),Cn.expandByPoint(Qo.max))}Cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Ut.fromBufferAttribute(a,u),l&&(Fs.fromBufferAttribute(e,u),Ut.add(Fs)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<a;w++)u[w]=new B,c[w]=new B;const d=new B,h=new B,p=new B,x=new Ye,_=new Ye,m=new Ye,f=new B,g=new B;function v(w,I,X){d.fromArray(r,w*3),h.fromArray(r,I*3),p.fromArray(r,X*3),x.fromArray(o,w*2),_.fromArray(o,I*2),m.fromArray(o,X*2),h.sub(d),p.sub(d),_.sub(x),m.sub(x);const K=1/(_.x*m.y-m.x*_.y);isFinite(K)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(K),g.copy(p).multiplyScalar(_.x).addScaledVector(h,-m.x).multiplyScalar(K),u[w].add(f),u[I].add(f),u[X].add(f),c[w].add(g),c[I].add(g),c[X].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let w=0,I=y.length;w<I;++w){const X=y[w],K=X.start,L=X.count;for(let U=K,H=K+L;U<H;U+=3)v(i[U+0],i[U+1],i[U+2])}const E=new B,A=new B,M=new B,P=new B;function S(w){M.fromArray(s,w*3),P.copy(M);const I=u[w];E.copy(I),E.sub(M.multiplyScalar(M.dot(I))).normalize(),A.crossVectors(P,I);const K=A.dot(c[w])<0?-1:1;l[w*4]=E.x,l[w*4+1]=E.y,l[w*4+2]=E.z,l[w*4+3]=K}for(let w=0,I=y.length;w<I;++w){const X=y[w],K=X.start,L=X.count;for(let U=K,H=K+L;U<H;U+=3)S(i[U+0]),S(i[U+1]),S(i[U+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ut.fromBufferAttribute(e,t),Ut.normalize(),e.setXYZ(t,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let f=0;f<c;f++)h[x++]=u[p++]}return new Ri(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Br,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const V_=new Pt,Yr=new yT,Il=new dp,W_=new B,ks=new B,zs=new B,Bs=new B,Tf=new B,Ol=new B,Fl=new Ye,kl=new Ye,zl=new Ye,X_=new B,j_=new B,Y_=new B,Bl=new B,Hl=new B;class wi extends Qt{constructor(e=new Br,t=new $x){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ol.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Tf.fromBufferAttribute(d,e),o?Ol.addScaledVector(Tf,c):Ol.addScaledVector(Tf.sub(t),c))}t.add(Ol)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(s),Yr.copy(e.ray).recast(e.near),!(Il.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Il,W_)===null||Yr.origin.distanceToSquared(W_)>(e.far-e.near)**2))&&(V_.copy(s).invert(),Yr.copy(e.ray).applyMatrix4(V_),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,E=v;y<E;y+=3){const A=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Gl(this,f,e,i,u,c,d,A,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=Gl(this,o,e,i,u,c,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,E=v;y<E;y+=3){const A=y,M=y+1,P=y+2;r=Gl(this,f,e,i,u,c,d,A,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,f=_;m<f;m+=3){const g=m,v=m+1,y=m+2;r=Gl(this,o,e,i,u,c,d,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function bT(n,e,t,i,r,s,o,a){let l;if(e.side===Mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ir,a),l===null)return null;Hl.copy(a),Hl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Hl);return u<t.near||u>t.far?null:{distance:u,point:Hl.clone(),object:n}}function Gl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ks),n.getVertexPosition(l,zs),n.getVertexPosition(u,Bs);const c=bT(n,e,t,i,ks,zs,Bs,Bl);if(c){r&&(Fl.fromBufferAttribute(r,a),kl.fromBufferAttribute(r,l),zl.fromBufferAttribute(r,u),c.uv=ci.getInterpolation(Bl,ks,zs,Bs,Fl,kl,zl,new Ye)),s&&(Fl.fromBufferAttribute(s,a),kl.fromBufferAttribute(s,l),zl.fromBufferAttribute(s,u),c.uv1=ci.getInterpolation(Bl,ks,zs,Bs,Fl,kl,zl,new Ye),c.uv2=c.uv1),o&&(X_.fromBufferAttribute(o,a),j_.fromBufferAttribute(o,l),Y_.fromBufferAttribute(o,u),c.normal=ci.getInterpolation(Bl,ks,zs,Bs,X_,j_,Y_,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new B,materialIndex:0};ci.getNormal(ks,zs,Bs,d.normal),c.face=d}return c}class il extends Br{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pi(u,3)),this.setAttribute("normal",new Pi(c,3)),this.setAttribute("uv",new Pi(d,2));function x(_,m,f,g,v,y,E,A,M,P,S){const w=y/M,I=E/P,X=y/2,K=E/2,L=A/2,U=M+1,H=P+1;let Y=0,D=0;const O=new B;for(let F=0;F<H;F++){const $=F*I-K;for(let Z=0;Z<U;Z++){const j=Z*w-X;O[_]=j*g,O[m]=$*v,O[f]=L,u.push(O.x,O.y,O.z),O[_]=0,O[m]=0,O[f]=A>0?1:-1,c.push(O.x,O.y,O.z),d.push(Z/M),d.push(1-F/P),Y+=1}}for(let F=0;F<P;F++)for(let $=0;$<M;$++){const Z=h+$+U*F,j=h+$+U*(F+1),q=h+($+1)+U*(F+1),ie=h+($+1)+U*F;l.push(Z,j,ie),l.push(j,q,ie),D+=6}a.addGroup(p,D,S),p+=D,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new il(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Do(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=Do(n[t]);for(const r in i)e[r]=i[r]}return e}function LT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qx(n){return n.getRenderTarget()===null?n.outputColorSpace:Ze.workingColorSpace}const DT={clone:Do,merge:rn};var NT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ms extends nl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NT,this.fragmentShader=UT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Do(e.uniforms),this.uniformsGroups=LT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Jx extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Wi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qn extends Jx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Yd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(af*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yd*2*Math.atan(Math.tan(af*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(af*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Gs=1;class IT extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new qn(Hs,Gs,e,t);r.layers=this.layers,this.add(r);const s=new qn(Hs,Gs,e,t);s.layers=this.layers,this.add(s);const o=new qn(Hs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new qn(Hs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new qn(Hs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new qn(Hs,Gs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Wi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(d,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class ey extends En{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Po,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OT extends Ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(va("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ms?Ot:$n),this.texture=new ey(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new il(5,5,5),s=new Ms({name:"CubemapFromEquirect",uniforms:Do(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Cr});s.uniforms.tEquirect.value=t;const o=new wi(r,s),a=t.minFilter;return t.minFilter===Wa&&(t.minFilter=Yn),new IT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const wf=new B,FT=new B,kT=new Be;class Qr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=wf.subVectors(i,t).cross(FT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(wf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||kT.getNormalMatrix(e),r=this.coplanarPoint(wf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new dp,Vl=new B;class hp{constructor(e=new Qr,t=new Qr,i=new Qr,r=new Qr,s=new Qr,o=new Qr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Wi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],x=r[9],_=r[10],m=r[11],f=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+x,y+g).normalize(),i[3].setComponents(l-o,h-c,m-x,y-g).normalize(),i[4].setComponents(l-a,h-d,m-_,y-v).normalize(),t===Wi)i[5].setComponents(l+a,h+d,m+_,y+v).normalize();else if(t===Wu)i[5].setComponents(a,d,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Vl.x=r.normal.x>0?e.max.x:e.min.x,Vl.y=r.normal.y>0?e.max.y:e.min.y,Vl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ty(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function zT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=d.byteLength,x=n.createBuffer();n.bindBuffer(c,x),n.bufferData(c,d,h),u.onUploadCallback();let _;if(d instanceof Float32Array)_=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)_=n.SHORT;else if(d instanceof Uint32Array)_=n.UNSIGNED_INT;else if(d instanceof Int32Array)_=n.INT;else if(d instanceof Int8Array)_=n.BYTE;else if(d instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:x,type:_,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,d){const h=c.array,p=c._updateRange,x=c.updateRanges;if(n.bindBuffer(d,u),p.count===-1&&x.length===0&&n.bufferSubData(d,0,h),x.length!==0){for(let _=0,m=x.length;_<m;_++){const f=x[_];t?n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count):n.bufferSubData(d,f.start*h.BYTES_PER_ELEMENT,h.subarray(f.start,f.start+f.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);if(d===void 0)i.set(u,r(u,c));else if(d.version<u.version){if(d.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(d.buffer,u,c),d.version=u.version}}return{get:o,remove:a,update:l}}class pp extends Br{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],x=[],_=[],m=[];for(let f=0;f<c;f++){const g=f*h-o;for(let v=0;v<u;v++){const y=v*d-s;x.push(y,-g,0),_.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+u*f,y=g+u*(f+1),E=g+1+u*(f+1),A=g+1+u*f;p.push(v,y,A),p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new Pi(x,3)),this.setAttribute("normal",new Pi(_,3)),this.setAttribute("uv",new Pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pp(e.width,e.height,e.widthSegments,e.heightSegments)}}var BT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HT=`#ifdef USE_ALPHAHASH
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
#endif`,GT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,XT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jT=`#ifdef USE_AOMAP
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
#endif`,YT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qT=`#ifdef USE_BATCHING
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
#endif`,$T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,KT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ZT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,QT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,JT=`#ifdef USE_IRIDESCENCE
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
#endif`,ew=`#ifdef USE_BUMPMAP
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
#endif`,tw=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ow=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,uw=`#define PI 3.141592653589793
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
} // validated`,cw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fw=`vec3 transformedNormal = objectNormal;
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
#endif`,dw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_w="gl_FragColor = linearToOutputTexel( gl_FragColor );",gw=`
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
}`,vw=`#ifdef USE_ENVMAP
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
#endif`,xw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yw=`#ifdef USE_ENVMAP
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
#endif`,Sw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mw=`#ifdef USE_ENVMAP
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
#endif`,Ew=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ww=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Aw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cw=`#ifdef USE_GRADIENTMAP
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
}`,Rw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Pw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dw=`uniform bool receiveShadow;
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
#endif`,Nw=`#ifdef USE_ENVMAP
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
#endif`,Uw=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Iw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ow=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kw=`PhysicalMaterial material;
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
#endif`,zw=`struct PhysicalMaterial {
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
}`,Bw=`
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
#endif`,Hw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ww=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,jw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Yw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$w=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kw=`#if defined( USE_POINTS_UV )
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
#endif`,Zw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eA=`#ifdef USE_MORPHNORMALS
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
#endif`,tA=`#ifdef USE_MORPHTARGETS
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
#endif`,nA=`#ifdef USE_MORPHTARGETS
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
#endif`,iA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lA=`#ifdef USE_NORMALMAP
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
#endif`,uA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TA=`float getShadowMask() {
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
}`,wA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,AA=`#ifdef USE_SKINNING
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
#endif`,CA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RA=`#ifdef USE_SKINNING
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
#endif`,PA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NA=`#ifdef USE_TRANSMISSION
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
#endif`,UA=`#ifdef USE_TRANSMISSION
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
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BA=`uniform sampler2D t2D;
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,GA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XA=`#include <common>
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
}`,jA=`#if DEPTH_PACKING == 3200
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
}`,YA=`#define DISTANCE
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
}`,qA=`#define DISTANCE
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
}`,$A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZA=`uniform float scale;
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
}`,QA=`uniform vec3 diffuse;
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
}`,JA=`#include <common>
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
}`,eC=`uniform vec3 diffuse;
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
}`,tC=`#define LAMBERT
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
}`,nC=`#define LAMBERT
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
}`,iC=`#define MATCAP
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
}`,rC=`#define MATCAP
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
}`,sC=`#define NORMAL
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
}`,oC=`#define NORMAL
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
}`,aC=`#define PHONG
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
}`,lC=`#define PHONG
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
}`,uC=`#define STANDARD
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
}`,cC=`#define STANDARD
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
}`,fC=`#define TOON
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
}`,dC=`#define TOON
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
}`,hC=`uniform float size;
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
}`,pC=`uniform vec3 diffuse;
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
}`,mC=`#include <common>
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
}`,_C=`uniform vec3 color;
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
}`,gC=`uniform float rotation;
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
}`,vC=`uniform vec3 diffuse;
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
}`,Ue={alphahash_fragment:BT,alphahash_pars_fragment:HT,alphamap_fragment:GT,alphamap_pars_fragment:VT,alphatest_fragment:WT,alphatest_pars_fragment:XT,aomap_fragment:jT,aomap_pars_fragment:YT,batching_pars_vertex:qT,batching_vertex:$T,begin_vertex:KT,beginnormal_vertex:ZT,bsdfs:QT,iridescence_fragment:JT,bumpmap_pars_fragment:ew,clipping_planes_fragment:tw,clipping_planes_pars_fragment:nw,clipping_planes_pars_vertex:iw,clipping_planes_vertex:rw,color_fragment:sw,color_pars_fragment:ow,color_pars_vertex:aw,color_vertex:lw,common:uw,cube_uv_reflection_fragment:cw,defaultnormal_vertex:fw,displacementmap_pars_vertex:dw,displacementmap_vertex:hw,emissivemap_fragment:pw,emissivemap_pars_fragment:mw,colorspace_fragment:_w,colorspace_pars_fragment:gw,envmap_fragment:vw,envmap_common_pars_fragment:xw,envmap_pars_fragment:yw,envmap_pars_vertex:Sw,envmap_physical_pars_fragment:Nw,envmap_vertex:Mw,fog_vertex:Ew,fog_pars_vertex:Tw,fog_fragment:ww,fog_pars_fragment:Aw,gradientmap_pars_fragment:Cw,lightmap_fragment:Rw,lightmap_pars_fragment:Pw,lights_lambert_fragment:bw,lights_lambert_pars_fragment:Lw,lights_pars_begin:Dw,lights_toon_fragment:Uw,lights_toon_pars_fragment:Iw,lights_phong_fragment:Ow,lights_phong_pars_fragment:Fw,lights_physical_fragment:kw,lights_physical_pars_fragment:zw,lights_fragment_begin:Bw,lights_fragment_maps:Hw,lights_fragment_end:Gw,logdepthbuf_fragment:Vw,logdepthbuf_pars_fragment:Ww,logdepthbuf_pars_vertex:Xw,logdepthbuf_vertex:jw,map_fragment:Yw,map_pars_fragment:qw,map_particle_fragment:$w,map_particle_pars_fragment:Kw,metalnessmap_fragment:Zw,metalnessmap_pars_fragment:Qw,morphcolor_vertex:Jw,morphnormal_vertex:eA,morphtarget_pars_vertex:tA,morphtarget_vertex:nA,normal_fragment_begin:iA,normal_fragment_maps:rA,normal_pars_fragment:sA,normal_pars_vertex:oA,normal_vertex:aA,normalmap_pars_fragment:lA,clearcoat_normal_fragment_begin:uA,clearcoat_normal_fragment_maps:cA,clearcoat_pars_fragment:fA,iridescence_pars_fragment:dA,opaque_fragment:hA,packing:pA,premultiplied_alpha_fragment:mA,project_vertex:_A,dithering_fragment:gA,dithering_pars_fragment:vA,roughnessmap_fragment:xA,roughnessmap_pars_fragment:yA,shadowmap_pars_fragment:SA,shadowmap_pars_vertex:MA,shadowmap_vertex:EA,shadowmask_pars_fragment:TA,skinbase_vertex:wA,skinning_pars_vertex:AA,skinning_vertex:CA,skinnormal_vertex:RA,specularmap_fragment:PA,specularmap_pars_fragment:bA,tonemapping_fragment:LA,tonemapping_pars_fragment:DA,transmission_fragment:NA,transmission_pars_fragment:UA,uv_pars_fragment:IA,uv_pars_vertex:OA,uv_vertex:FA,worldpos_vertex:kA,background_vert:zA,background_frag:BA,backgroundCube_vert:HA,backgroundCube_frag:GA,cube_vert:VA,cube_frag:WA,depth_vert:XA,depth_frag:jA,distanceRGBA_vert:YA,distanceRGBA_frag:qA,equirect_vert:$A,equirect_frag:KA,linedashed_vert:ZA,linedashed_frag:QA,meshbasic_vert:JA,meshbasic_frag:eC,meshlambert_vert:tC,meshlambert_frag:nC,meshmatcap_vert:iC,meshmatcap_frag:rC,meshnormal_vert:sC,meshnormal_frag:oC,meshphong_vert:aC,meshphong_frag:lC,meshphysical_vert:uC,meshphysical_frag:cC,meshtoon_vert:fC,meshtoon_frag:dC,points_vert:hC,points_frag:pC,shadow_vert:mC,shadow_frag:_C,sprite_vert:gC,sprite_frag:vC},se={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},yi={basic:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:rn([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:rn([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:rn([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:rn([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:rn([se.points,se.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:rn([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:rn([se.common,se.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:rn([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:rn([se.sprite,se.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:rn([se.common,se.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:rn([se.lights,se.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};yi.physical={uniforms:rn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Wl={r:0,b:0,g:0};function xC(n,e,t,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function x(m,f){let g=!1,v=f.isScene===!0?f.background:null;v&&v.isTexture&&(v=(f.backgroundBlurriness>0?t:e).get(v)),v===null?_(a,l):v&&v.isColor&&(_(v,1),g=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||g)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===fc)?(c===void 0&&(c=new wi(new il(1,1,1),new Ms({name:"BackgroundCubeMaterial",uniforms:Do(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,(d!==v||h!==v.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(u===void 0&&(u=new wi(new pp(2,2),new Ms({name:"BackgroundMaterial",uniforms:Do(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=v,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=Ze.getTransfer(v.colorSpace)!==st,v.matrixAutoUpdate===!0&&v.updateMatrix(),u.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||h!==v.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=v,h=v.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function _(m,f){m.getRGB(Wl,Qx(n)),i.buffers.color.setClear(Wl.r,Wl.g,Wl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,_(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(a,l)},render:x}}function yC(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(L,U,H,Y,D){let O=!1;if(o){const F=_(Y,H,U);u!==F&&(u=F,p(u.object)),O=f(L,Y,H,D),O&&g(L,Y,H,D)}else{const F=U.wireframe===!0;(u.geometry!==Y.id||u.program!==H.id||u.wireframe!==F)&&(u.geometry=Y.id,u.program=H.id,u.wireframe=F,O=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(O||c)&&(c=!1,P(L,U,H,Y),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function x(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function _(L,U,H){const Y=H.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let O=D[U.id];O===void 0&&(O={},D[U.id]=O);let F=O[Y];return F===void 0&&(F=m(h()),O[Y]=F),F}function m(L){const U=[],H=[],Y=[];for(let D=0;D<r;D++)U[D]=0,H[D]=0,Y[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:Y,object:L,attributes:{},index:null}}function f(L,U,H,Y){const D=u.attributes,O=U.attributes;let F=0;const $=H.getAttributes();for(const Z in $)if($[Z].location>=0){const q=D[Z];let ie=O[Z];if(ie===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(ie=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(ie=L.instanceColor)),q===void 0||q.attribute!==ie||ie&&q.data!==ie.data)return!0;F++}return u.attributesNum!==F||u.index!==Y}function g(L,U,H,Y){const D={},O=U.attributes;let F=0;const $=H.getAttributes();for(const Z in $)if($[Z].location>=0){let q=O[Z];q===void 0&&(Z==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),Z==="instanceColor"&&L.instanceColor&&(q=L.instanceColor));const ie={};ie.attribute=q,q&&q.data&&(ie.data=q.data),D[Z]=ie,F++}u.attributes=D,u.attributesNum=F,u.index=Y}function v(){const L=u.newAttributes;for(let U=0,H=L.length;U<H;U++)L[U]=0}function y(L){E(L,0)}function E(L,U){const H=u.newAttributes,Y=u.enabledAttributes,D=u.attributeDivisors;H[L]=1,Y[L]===0&&(n.enableVertexAttribArray(L),Y[L]=1),D[L]!==U&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,U),D[L]=U)}function A(){const L=u.newAttributes,U=u.enabledAttributes;for(let H=0,Y=U.length;H<Y;H++)U[H]!==L[H]&&(n.disableVertexAttribArray(H),U[H]=0)}function M(L,U,H,Y,D,O,F){F===!0?n.vertexAttribIPointer(L,U,H,D,O):n.vertexAttribPointer(L,U,H,Y,D,O)}function P(L,U,H,Y){if(i.isWebGL2===!1&&(L.isInstancedMesh||Y.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const D=Y.attributes,O=H.getAttributes(),F=U.defaultAttributeValues;for(const $ in O){const Z=O[$];if(Z.location>=0){let j=D[$];if(j===void 0&&($==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),$==="instanceColor"&&L.instanceColor&&(j=L.instanceColor)),j!==void 0){const q=j.normalized,ie=j.itemSize,de=t.get(j);if(de===void 0)continue;const me=de.buffer,be=de.type,De=de.bytesPerElement,Te=i.isWebGL2===!0&&(be===n.INT||be===n.UNSIGNED_INT||j.gpuType===Nx);if(j.isInterleavedBufferAttribute){const We=j.data,k=We.stride,en=j.offset;if(We.isInstancedInterleavedBuffer){for(let ye=0;ye<Z.locationSize;ye++)E(Z.location+ye,We.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=We.meshPerAttribute*We.count)}else for(let ye=0;ye<Z.locationSize;ye++)y(Z.location+ye);n.bindBuffer(n.ARRAY_BUFFER,me);for(let ye=0;ye<Z.locationSize;ye++)M(Z.location+ye,ie/Z.locationSize,be,q,k*De,(en+ie/Z.locationSize*ye)*De,Te)}else{if(j.isInstancedBufferAttribute){for(let We=0;We<Z.locationSize;We++)E(Z.location+We,j.meshPerAttribute);L.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let We=0;We<Z.locationSize;We++)y(Z.location+We);n.bindBuffer(n.ARRAY_BUFFER,me);for(let We=0;We<Z.locationSize;We++)M(Z.location+We,ie/Z.locationSize,be,q,ie*De,ie/Z.locationSize*We*De,Te)}}else if(F!==void 0){const q=F[$];if(q!==void 0)switch(q.length){case 2:n.vertexAttrib2fv(Z.location,q);break;case 3:n.vertexAttrib3fv(Z.location,q);break;case 4:n.vertexAttrib4fv(Z.location,q);break;default:n.vertexAttrib1fv(Z.location,q)}}}}A()}function S(){X();for(const L in a){const U=a[L];for(const H in U){const Y=U[H];for(const D in Y)x(Y[D].object),delete Y[D];delete U[H]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const U=a[L.id];for(const H in U){const Y=U[H];for(const D in Y)x(Y[D].object),delete Y[D];delete U[H]}delete a[L.id]}function I(L){for(const U in a){const H=a[U];if(H[L.id]===void 0)continue;const Y=H[L.id];for(const D in Y)x(Y[D].object),delete Y[D];delete H[L.id]}}function X(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:X,resetDefaultState:K,dispose:S,releaseStatesOfGeometry:w,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:y,disableUnusedAttributes:A}}function SC(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,d){n.drawArrays(s,c,d),t.update(d,s,1)}function l(c,d,h){if(h===0)return;let p,x;if(r)p=n,x="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),x="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[x](s,c,d,h),t.update(d,s,h)}function u(c,d,h){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<h;x++)this.render(c[x],d[x]);else{p.multiDrawArraysWEBGL(s,c,0,d,0,h);let x=0;for(let _=0;_<h;_++)x+=d[_];t.update(x,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function MC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),g=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),v=h>0,y=o||e.has("OES_texture_float"),E=v&&y,A=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:g,vertexTextures:v,floatFragmentTextures:y,floatVertexTextures:E,maxSamples:A}}function EC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Qr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const x=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let y=f.clippingState||null;l.value=y,y=c(x,h,v,p);for(let E=0;E!==v;++E)y[E]=t[E];f.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,x){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const f=p+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(d[v]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function TC(n){let e=new WeakMap;function t(o,a){return a===Gd?o.mapping=Po:a===Vd&&(o.mapping=bo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Gd||a===Vd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new OT(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ny extends Jx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ro=4,q_=[.125,.215,.35,.446,.526,.582],ts=20,Af=new ny,$_=new Xe;let Cf=null,Rf=0,Pf=0;const Jr=(1+Math.sqrt(5))/2,Vs=1/Jr,K_=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,Jr,Vs),new B(0,Jr,-Vs),new B(Vs,0,Jr),new B(-Vs,0,Jr),new B(Jr,Vs,0),new B(-Jr,Vs,0)];class Z_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=J_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Cf,Rf,Pf),e.scissorTest=!1,Xl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Po||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Cf=this._renderer.getRenderTarget(),Rf=this._renderer.getActiveCubeFace(),Pf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Xa,format:di,colorSpace:Qi,depthBuffer:!1},r=Q_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Q_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=wC(s)),this._blurMaterial=AC(s,e,t)}return r}_compileMaterial(e){const t=new wi(this._lodPlanes[0],e);this._renderer.compile(t,Af)}_sceneToCubeUV(e,t,i,r){const a=new qn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor($_),c.toneMapping=Rr,c.autoClear=!1;const p=new $x({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),x=new wi(new il,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy($_),_=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Xl(r,g*v,f>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Po||e.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=eg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=J_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new wi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Xl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Af)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=K_[(r-1)%K_.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new wi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ts-1),_=s/x,m=isFinite(s)?1+Math.floor(c*_):ts;m>ts&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const f=[];let g=0;for(let M=0;M<ts;++M){const P=M/_,S=Math.exp(-P*P/2);f.push(S),M===0?g+=S:M<m&&(g+=2*S)}for(let M=0;M<f.length;M++)f[M]=f[M]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],E=3*y*(r>v-ro?r-v+ro:0),A=4*(this._cubeSize-y);Xl(t,E,A,3*y,2*y),l.setRenderTarget(t),l.render(d,Af)}}function wC(n){const e=[],t=[],i=[];let r=n;const s=n-ro+1+q_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-ro?l=q_[o-n+ro-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,x=6,_=3,m=2,f=1,g=new Float32Array(_*x*p),v=new Float32Array(m*x*p),y=new Float32Array(f*x*p);for(let A=0;A<p;A++){const M=A%3*2/3-1,P=A>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];g.set(S,_*x*A),v.set(h,m*x*A);const w=[A,A,A,A,A,A];y.set(w,f*x*A)}const E=new Br;E.setAttribute("position",new Ri(g,_)),E.setAttribute("uv",new Ri(v,m)),E.setAttribute("faceIndex",new Ri(y,f)),e.push(E),r>ro&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Q_(n,e,t){const i=new Ss(n,e,t);return i.texture.mapping=fc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function AC(n,e,t){const i=new Float32Array(ts),r=new B(0,1,0);return new Ms({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:mp(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function J_(){return new Ms({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

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
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function eg(){return new Ms({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function mp(){return`

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
	`}function CC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===Gd||l===Vd,c=l===Po||l===bo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new Z_(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new Z_(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function RC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function PC(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const x in p){const _=p[x];for(let m=0,f=_.length;m<f;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,x=d.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let v=0,y=g.length;v<y;v+=3){const E=g[v+0],A=g[v+1],M=g[v+2];h.push(E,A,A,M,M,E)}}else if(x!==void 0){const g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const E=v+0,A=v+1,M=v+2;h.push(E,A,A,M,M,E)}}else return;const m=new(Vx(h)?Zx:Kx)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function bC(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,x){n.drawElements(s,x,a,p*l),t.update(x,s,1)}function d(p,x,_){if(_===0)return;let m,f;if(r)m=n,f="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),f="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[f](s,x,a,p*l,_),t.update(x,s,_)}function h(p,x,_){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<_;f++)this.render(p[f]/l,x[f]);else{m.multiDrawElementsWEBGL(s,x,0,a,p,0,_);let f=0;for(let g=0;g<_;g++)f+=x[g];t.update(f,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function LC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function DC(n,e){return n[0]-e[0]}function NC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function UC(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new Ft,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const x=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,_=x!==void 0?x.length:0;let m=s.get(c);if(m===void 0||m.count!==_){let U=function(){K.dispose(),s.delete(c),c.removeEventListener("dispose",U)};var p=U;m!==void 0&&m.texture.dispose();const v=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,E=c.morphAttributes.color!==void 0,A=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let S=0;v===!0&&(S=1),y===!0&&(S=2),E===!0&&(S=3);let w=c.attributes.position.count*S,I=1;w>e.maxTextureSize&&(I=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const X=new Float32Array(w*I*4*_),K=new jx(X,w,I,_);K.type=_r,K.needsUpdate=!0;const L=S*4;for(let H=0;H<_;H++){const Y=A[H],D=M[H],O=P[H],F=w*I*4*H;for(let $=0;$<Y.count;$++){const Z=$*L;v===!0&&(o.fromBufferAttribute(Y,$),X[F+Z+0]=o.x,X[F+Z+1]=o.y,X[F+Z+2]=o.z,X[F+Z+3]=0),y===!0&&(o.fromBufferAttribute(D,$),X[F+Z+4]=o.x,X[F+Z+5]=o.y,X[F+Z+6]=o.z,X[F+Z+7]=0),E===!0&&(o.fromBufferAttribute(O,$),X[F+Z+8]=o.x,X[F+Z+9]=o.y,X[F+Z+10]=o.z,X[F+Z+11]=O.itemSize===4?o.w:1)}}m={count:_,texture:K,size:new Ye(w,I)},s.set(c,m),c.addEventListener("dispose",U)}let f=0;for(let v=0;v<h.length;v++)f+=h[v];const g=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",g),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const x=h===void 0?0:h.length;let _=i[c.id];if(_===void 0||_.length!==x){_=[];for(let y=0;y<x;y++)_[y]=[y,0];i[c.id]=_}for(let y=0;y<x;y++){const E=_[y];E[0]=y,E[1]=h[y]}_.sort(NC);for(let y=0;y<8;y++)y<x&&_[y][1]?(a[y][0]=_[y][0],a[y][1]=_[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(DC);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let g=0;for(let y=0;y<8;y++){const E=a[y],A=E[0],M=E[1];A!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[A]&&c.setAttribute("morphTarget"+y,m[A]),f&&c.getAttribute("morphNormal"+y)!==f[A]&&c.setAttribute("morphNormal"+y,f[A]),r[y]=M,g+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const v=c.morphTargetsRelative?1:1-g;d.getUniforms().setValue(n,"morphTargetBaseInfluence",v),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function IC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class iy extends En{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:ps,c!==ps&&c!==Lo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ps&&(i=mr),i===void 0&&c===Lo&&(i=hs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ry=new En,sy=new iy(1,1);sy.compareFunction=Gx;const oy=new jx,ay=new vT,ly=new ey,tg=[],ng=[],ig=new Float32Array(16),rg=new Float32Array(9),sg=new Float32Array(4);function Fo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=tg[r];if(s===void 0&&(s=new Float32Array(r),tg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function pc(n,e){let t=ng[e];t===void 0&&(t=new Int32Array(e),ng[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function OC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function FC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function kC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function zC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function BC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;sg.set(i),n.uniformMatrix2fv(this.addr,!1,sg),Lt(t,i)}}function HC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;rg.set(i),n.uniformMatrix3fv(this.addr,!1,rg),Lt(t,i)}}function GC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(bt(t,i))return;ig.set(i),n.uniformMatrix4fv(this.addr,!1,ig),Lt(t,i)}}function VC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function WC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function XC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function jC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function YC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function KC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function ZC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?sy:ry;t.setTexture2D(e||s,r)}function QC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ay,r)}function JC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ly,r)}function eR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||oy,r)}function tR(n){switch(n){case 5126:return OC;case 35664:return FC;case 35665:return kC;case 35666:return zC;case 35674:return BC;case 35675:return HC;case 35676:return GC;case 5124:case 35670:return VC;case 35667:case 35671:return WC;case 35668:case 35672:return XC;case 35669:case 35673:return jC;case 5125:return YC;case 36294:return qC;case 36295:return $C;case 36296:return KC;case 35678:case 36198:case 36298:case 36306:case 35682:return ZC;case 35679:case 36299:case 36307:return QC;case 35680:case 36300:case 36308:case 36293:return JC;case 36289:case 36303:case 36311:case 36292:return eR}}function nR(n,e){n.uniform1fv(this.addr,e)}function iR(n,e){const t=Fo(e,this.size,2);n.uniform2fv(this.addr,t)}function rR(n,e){const t=Fo(e,this.size,3);n.uniform3fv(this.addr,t)}function sR(n,e){const t=Fo(e,this.size,4);n.uniform4fv(this.addr,t)}function oR(n,e){const t=Fo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function aR(n,e){const t=Fo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function lR(n,e){const t=Fo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function uR(n,e){n.uniform1iv(this.addr,e)}function cR(n,e){n.uniform2iv(this.addr,e)}function fR(n,e){n.uniform3iv(this.addr,e)}function dR(n,e){n.uniform4iv(this.addr,e)}function hR(n,e){n.uniform1uiv(this.addr,e)}function pR(n,e){n.uniform2uiv(this.addr,e)}function mR(n,e){n.uniform3uiv(this.addr,e)}function _R(n,e){n.uniform4uiv(this.addr,e)}function gR(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||ry,s[o])}function vR(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ay,s[o])}function xR(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||ly,s[o])}function yR(n,e,t){const i=this.cache,r=e.length,s=pc(t,r);bt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||oy,s[o])}function SR(n){switch(n){case 5126:return nR;case 35664:return iR;case 35665:return rR;case 35666:return sR;case 35674:return oR;case 35675:return aR;case 35676:return lR;case 5124:case 35670:return uR;case 35667:case 35671:return cR;case 35668:case 35672:return fR;case 35669:case 35673:return dR;case 5125:return hR;case 36294:return pR;case 36295:return mR;case 36296:return _R;case 35678:case 36198:case 36298:case 36306:case 35682:return gR;case 35679:case 36299:case 36307:return vR;case 35680:case 36300:case 36308:case 36293:return xR;case 36289:case 36303:case 36311:case 36292:return yR}}class MR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=tR(t.type)}}class ER{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=SR(t.type)}}class TR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const bf=/(\w+)(\])?(\[|\.)?/g;function og(n,e){n.seq.push(e),n.map[e.id]=e}function wR(n,e,t){const i=n.name,r=i.length;for(bf.lastIndex=0;;){const s=bf.exec(i),o=bf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){og(t,u===void 0?new MR(a,n,e):new ER(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new TR(a),og(t,d)),t=d}}}class au{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);wR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function ag(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const AR=37297;let CR=0;function RR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function PR(n){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(n);let i;switch(e===t?i="":e===Vu&&t===Gu?i="LinearDisplayP3ToLinearSRGB":e===Gu&&t===Vu&&(i="LinearSRGBToLinearDisplayP3"),n){case Qi:case dc:return[i,"LinearTransferOETF"];case Ot:case fp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function lg(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+RR(n.getShaderSource(e),o)}else return r}function bR(n,e){const t=PR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function LR(n,e){let t;switch(e){case G1:t="Linear";break;case V1:t="Reinhard";break;case W1:t="OptimizedCineon";break;case Lx:t="ACESFilmic";break;case j1:t="AgX";break;case X1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function DR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(so).join(`
`)}function NR(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(so).join(`
`)}function UR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function IR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function so(n){return n!==""}function ug(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const OR=/^[ \t]*#include +<([\w\d./]+)>/gm;function $d(n){return n.replace(OR,kR)}const FR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kR(n,e){let t=Ue[e];if(t===void 0){const i=FR.get(e);if(i!==void 0)t=Ue[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $d(t)}const zR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(n){return n.replace(zR,BR)}function BR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===bx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===_1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function GR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Po:case bo:e="ENVMAP_TYPE_CUBE";break;case fc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function VR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function WR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case up:e="ENVMAP_BLENDING_MULTIPLY";break;case B1:e="ENVMAP_BLENDING_MIX";break;case H1:e="ENVMAP_BLENDING_ADD";break}return e}function XR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function jR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HR(t),u=GR(t),c=VR(t),d=WR(t),h=XR(t),p=t.isWebGL2?"":DR(t),x=NR(t),_=UR(s),m=r.createProgram();let f,g,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),f.length>0&&(f+=`
`),g=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(so).join(`
`),g.length>0&&(g+=`
`)):(f=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),g=[p,dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Rr?LR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,bR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),o=$d(o),o=ug(o,t),o=cg(o,t),a=$d(a),a=ug(a,t),a=cg(a,t),o=fg(o),a=fg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,f=[x,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===b_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===b_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=v+f+o,E=v+g+a,A=ag(r,r.VERTEX_SHADER,y),M=ag(r,r.FRAGMENT_SHADER,E);r.attachShader(m,A),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(X){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(A).trim(),U=r.getShaderInfoLog(M).trim();let H=!0,Y=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,A,M);else{const D=lg(r,A,"vertex"),O=lg(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+D+`
`+O)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||U==="")&&(Y=!1);Y&&(X.diagnostics={runnable:H,programLog:K,vertexShader:{log:L,prefix:f},fragmentShader:{log:U,prefix:g}})}r.deleteShader(A),r.deleteShader(M),S=new au(r,m),w=IR(r,m)}let S;this.getUniforms=function(){return S===void 0&&P(this),S};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(m,AR)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=CR++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=M,this}let YR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $R(e),t.set(e,i)),i}}class $R{constructor(e){this.id=YR++,this.code=e,this.usedTimes=0}}function KR(n,e,t,i,r,s,o){const a=new Yx,l=new qR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,w,I,X,K){const L=X.fog,U=K.geometry,H=S.isMeshStandardMaterial?X.environment:null,Y=(S.isMeshStandardMaterial?t:e).get(S.envMap||H),D=Y&&Y.mapping===fc?Y.image.height:null,O=x[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const F=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,$=F!==void 0?F.length:0;let Z=0;U.morphAttributes.position!==void 0&&(Z=1),U.morphAttributes.normal!==void 0&&(Z=2),U.morphAttributes.color!==void 0&&(Z=3);let j,q,ie,de;if(O){const tn=yi[O];j=tn.vertexShader,q=tn.fragmentShader}else j=S.vertexShader,q=S.fragmentShader,l.update(S),ie=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const me=n.getRenderTarget(),be=K.isInstancedMesh===!0,De=K.isBatchedMesh===!0,Te=!!S.map,We=!!S.matcap,k=!!Y,en=!!S.aoMap,ye=!!S.lightMap,Re=!!S.bumpMap,_e=!!S.normalMap,ut=!!S.displacementMap,Ie=!!S.emissiveMap,R=!!S.metalnessMap,T=!!S.roughnessMap,G=S.anisotropy>0,te=S.clearcoat>0,J=S.iridescence>0,ne=S.sheen>0,ge=S.transmission>0,ue=G&&!!S.anisotropyMap,he=te&&!!S.clearcoatMap,Ee=te&&!!S.clearcoatNormalMap,Oe=te&&!!S.clearcoatRoughnessMap,Q=J&&!!S.iridescenceMap,Ke=J&&!!S.iridescenceThicknessMap,He=ne&&!!S.sheenColorMap,Ce=ne&&!!S.sheenRoughnessMap,xe=!!S.specularMap,pe=!!S.specularColorMap,Ne=!!S.specularIntensityMap,qe=ge&&!!S.transmissionMap,gt=ge&&!!S.thicknessMap,ke=!!S.gradientMap,re=!!S.alphaMap,b=S.alphaTest>0,ae=!!S.alphaHash,le=!!S.extensions,we=!!U.attributes.uv1,Se=!!U.attributes.uv2,et=!!U.attributes.uv3;let tt=Rr;return S.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(tt=n.toneMapping),{isWebGL2:c,shaderID:O,shaderType:S.type,shaderName:S.name,vertexShader:j,fragmentShader:q,defines:S.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:De,instancing:be,instancingColor:be&&K.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:me===null?n.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:Qi,map:Te,matcap:We,envMap:k,envMapMode:k&&Y.mapping,envMapCubeUVHeight:D,aoMap:en,lightMap:ye,bumpMap:Re,normalMap:_e,displacementMap:h&&ut,emissiveMap:Ie,normalMapObjectSpace:_e&&S.normalMapType===rT,normalMapTangentSpace:_e&&S.normalMapType===Hx,metalnessMap:R,roughnessMap:T,anisotropy:G,anisotropyMap:ue,clearcoat:te,clearcoatMap:he,clearcoatNormalMap:Ee,clearcoatRoughnessMap:Oe,iridescence:J,iridescenceMap:Q,iridescenceThicknessMap:Ke,sheen:ne,sheenColorMap:He,sheenRoughnessMap:Ce,specularMap:xe,specularColorMap:pe,specularIntensityMap:Ne,transmission:ge,transmissionMap:qe,thicknessMap:gt,gradientMap:ke,opaque:S.transparent===!1&&S.blending===ds,alphaMap:re,alphaTest:b,alphaHash:ae,combine:S.combine,mapUv:Te&&_(S.map.channel),aoMapUv:en&&_(S.aoMap.channel),lightMapUv:ye&&_(S.lightMap.channel),bumpMapUv:Re&&_(S.bumpMap.channel),normalMapUv:_e&&_(S.normalMap.channel),displacementMapUv:ut&&_(S.displacementMap.channel),emissiveMapUv:Ie&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:ue&&_(S.anisotropyMap.channel),clearcoatMapUv:he&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Ee&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:He&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Ce&&_(S.sheenRoughnessMap.channel),specularMapUv:xe&&_(S.specularMap.channel),specularColorMapUv:pe&&_(S.specularColorMap.channel),specularIntensityMapUv:Ne&&_(S.specularIntensityMap.channel),transmissionMapUv:qe&&_(S.transmissionMap.channel),thicknessMapUv:gt&&_(S.thicknessMap.channel),alphaMapUv:re&&_(S.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(_e||G),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:we,vertexUv2s:Se,vertexUv3s:et,pointsUvs:K.isPoints===!0&&!!U.attributes.uv&&(Te||re),fog:!!L,useFog:S.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:K.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Z,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&I.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Te&&S.map.isVideoTexture===!0&&Ze.getTransfer(S.map.colorSpace)===st,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ei,flipSided:S.side===Mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function f(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const I in S.defines)w.push(I),w.push(S.defines[I]);return S.isRawShaderMaterial===!1&&(g(w,S),v(w,S),w.push(n.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function g(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function v(S,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),S.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function y(S){const w=x[S.type];let I;if(w){const X=yi[w];I=DT.clone(X.uniforms)}else I=S.uniforms;return I}function E(S,w){let I;for(let X=0,K=u.length;X<K;X++){const L=u[X];if(L.cacheKey===w){I=L,++I.usedTimes;break}}return I===void 0&&(I=new jR(n,w,S,s),u.push(I)),I}function A(S){if(--S.usedTimes===0){const w=u.indexOf(S);u[w]=u[u.length-1],u.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:E,releaseProgram:A,releaseShaderCache:M,programs:u,dispose:P}}function ZR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function QR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function pg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,x,_,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:x,renderOrder:d.renderOrder,z:_,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=x,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function a(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,x,_,m){const f=o(d,h,p,x,_,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||QR),i.length>1&&i.sort(h||hg),r.length>1&&r.sort(h||hg)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function JR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new pg,n.set(i,[o])):r>=s.length?(o=new pg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function e2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Xe};break;case"SpotLight":t={position:new B,direction:new B,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function t2(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let n2=0;function i2(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function r2(n,e){const t=new e2,i=t2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new B);const s=new B,o=new Pt,a=new Pt;function l(c,d){let h=0,p=0,x=0;for(let X=0;X<9;X++)r.probe[X].set(0,0,0);let _=0,m=0,f=0,g=0,v=0,y=0,E=0,A=0,M=0,P=0,S=0;c.sort(i2);const w=d===!0?Math.PI:1;for(let X=0,K=c.length;X<K;X++){const L=c[X],U=L.color,H=L.intensity,Y=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=U.r*H*w,p+=U.g*H*w,x+=U.b*H*w;else if(L.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(L.sh.coefficients[O],H);S++}else if(L.isDirectionalLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const F=L.shadow,$=i.get(L);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.directionalShadow[_]=$,r.directionalShadowMap[_]=D,r.directionalShadowMatrix[_]=L.shadow.matrix,y++}r.directional[_]=O,_++}else if(L.isSpotLight){const O=t.get(L);O.position.setFromMatrixPosition(L.matrixWorld),O.color.copy(U).multiplyScalar(H*w),O.distance=Y,O.coneCos=Math.cos(L.angle),O.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),O.decay=L.decay,r.spot[f]=O;const F=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,F.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[f]=F.matrix,L.castShadow){const $=i.get(L);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,r.spotShadow[f]=$,r.spotShadowMap[f]=D,A++}f++}else if(L.isRectAreaLight){const O=t.get(L);O.color.copy(U).multiplyScalar(H),O.halfWidth.set(L.width*.5,0,0),O.halfHeight.set(0,L.height*.5,0),r.rectArea[g]=O,g++}else if(L.isPointLight){const O=t.get(L);if(O.color.copy(L.color).multiplyScalar(L.intensity*w),O.distance=L.distance,O.decay=L.decay,L.castShadow){const F=L.shadow,$=i.get(L);$.shadowBias=F.bias,$.shadowNormalBias=F.normalBias,$.shadowRadius=F.radius,$.shadowMapSize=F.mapSize,$.shadowCameraNear=F.camera.near,$.shadowCameraFar=F.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=L.shadow.matrix,E++}r.point[m]=O,m++}else if(L.isHemisphereLight){const O=t.get(L);O.skyColor.copy(L.color).multiplyScalar(H*w),O.groundColor.copy(L.groundColor).multiplyScalar(H*w),r.hemi[v]=O,v++}}g>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=se.LTC_FLOAT_1,r.rectAreaLTC2=se.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=se.LTC_HALF_1,r.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=x;const I=r.hash;(I.directionalLength!==_||I.pointLength!==m||I.spotLength!==f||I.rectAreaLength!==g||I.hemiLength!==v||I.numDirectionalShadows!==y||I.numPointShadows!==E||I.numSpotShadows!==A||I.numSpotMaps!==M||I.numLightProbes!==S)&&(r.directional.length=_,r.spot.length=f,r.rectArea.length=g,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=A+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,I.directionalLength=_,I.pointLength=m,I.spotLength=f,I.rectAreaLength=g,I.hemiLength=v,I.numDirectionalShadows=y,I.numPointShadows=E,I.numSpotShadows=A,I.numSpotMaps=M,I.numLightProbes=S,r.version=n2++)}function u(c,d){let h=0,p=0,x=0,_=0,m=0;const f=d.matrixWorldInverse;for(let g=0,v=c.length;g<v;g++){const y=c[g];if(y.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),h++}else if(y.isSpotLight){const E=r.spot[x];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),E.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(f),x++}else if(y.isRectAreaLight){const E=r.rectArea[_];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),E.halfWidth.set(y.width*.5,0,0),E.halfHeight.set(0,y.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(y.matrixWorld),E.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(y.matrixWorld),E.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function mg(n,e){const t=new r2(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function s2(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new mg(n,e),t.set(s,[l])):o>=a.length?(l=new mg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class o2 extends nl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class a2 extends nl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const l2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,u2=`uniform sampler2D shadow_pass;
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
}`;function c2(n,e,t){let i=new hp;const r=new Ye,s=new Ye,o=new Ft,a=new o2({depthPacking:iT}),l=new a2,u={},c=t.maxTextureSize,d={[Ir]:Mn,[Mn]:Ir,[Ei]:Ei},h=new Ms({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:l2,fragmentShader:u2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new Br;x.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new wi(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bx;let f=this.type;this.render=function(A,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const S=n.getRenderTarget(),w=n.getActiveCubeFace(),I=n.getActiveMipmapLevel(),X=n.state;X.setBlending(Cr),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const K=f!==Fi&&this.type===Fi,L=f===Fi&&this.type!==Fi;for(let U=0,H=A.length;U<H;U++){const Y=A[U],D=Y.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const O=D.getFrameExtents();if(r.multiply(O),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/O.x),r.x=s.x*O.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/O.y),r.y=s.y*O.y,D.mapSize.y=s.y)),D.map===null||K===!0||L===!0){const $=this.type!==Fi?{minFilter:on,magFilter:on}:{};D.map!==null&&D.map.dispose(),D.map=new Ss(r.x,r.y,$),D.map.texture.name=Y.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const F=D.getViewportCount();for(let $=0;$<F;$++){const Z=D.getViewport($);o.set(s.x*Z.x,s.y*Z.y,s.x*Z.z,s.y*Z.w),X.viewport(o),D.updateMatrices(Y,$),i=D.getFrustum(),y(M,P,D.camera,Y,this.type)}D.isPointLightShadow!==!0&&this.type===Fi&&g(D,P),D.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(S,w,I)};function g(A,M){const P=e.update(_);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ss(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(M,null,P,h,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(M,null,P,p,_,null)}function v(A,M,P,S){let w=null;const I=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(I!==void 0)w=I;else if(w=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const X=w.uuid,K=M.uuid;let L=u[X];L===void 0&&(L={},u[X]=L);let U=L[K];U===void 0&&(U=w.clone(),L[K]=U,M.addEventListener("dispose",E)),w=U}if(w.visible=M.visible,w.wireframe=M.wireframe,S===Fi?w.side=M.shadowSide!==null?M.shadowSide:M.side:w.side=M.shadowSide!==null?M.shadowSide:d[M.side],w.alphaMap=M.alphaMap,w.alphaTest=M.alphaTest,w.map=M.map,w.clipShadows=M.clipShadows,w.clippingPlanes=M.clippingPlanes,w.clipIntersection=M.clipIntersection,w.displacementMap=M.displacementMap,w.displacementScale=M.displacementScale,w.displacementBias=M.displacementBias,w.wireframeLinewidth=M.wireframeLinewidth,w.linewidth=M.linewidth,P.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const X=n.properties.get(w);X.light=P}return w}function y(A,M,P,S,w){if(A.visible===!1)return;if(A.layers.test(M.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&w===Fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const K=e.update(A),L=A.material;if(Array.isArray(L)){const U=K.groups;for(let H=0,Y=U.length;H<Y;H++){const D=U[H],O=L[D.materialIndex];if(O&&O.visible){const F=v(A,O,S,w);A.onBeforeShadow(n,A,M,P,K,F,D),n.renderBufferDirect(P,null,K,F,A,D),A.onAfterShadow(n,A,M,P,K,F,D)}}}else if(L.visible){const U=v(A,L,S,w);A.onBeforeShadow(n,A,M,P,K,U,null),n.renderBufferDirect(P,null,K,U,A,null),A.onAfterShadow(n,A,M,P,K,U,null)}}const X=A.children;for(let K=0,L=X.length;K<L;K++)y(X[K],M,P,S,w)}function E(A){A.target.removeEventListener("dispose",E);for(const P in u){const S=u[P],w=A.target.uuid;w in S&&(S[w].dispose(),delete S[w])}}}function f2(n,e,t){const i=t.isWebGL2;function r(){let b=!1;const ae=new Ft;let le=null;const we=new Ft(0,0,0,0);return{setMask:function(Se){le!==Se&&!b&&(n.colorMask(Se,Se,Se,Se),le=Se)},setLocked:function(Se){b=Se},setClear:function(Se,et,tt,Dt,tn){tn===!0&&(Se*=Dt,et*=Dt,tt*=Dt),ae.set(Se,et,tt,Dt),we.equals(ae)===!1&&(n.clearColor(Se,et,tt,Dt),we.copy(ae))},reset:function(){b=!1,le=null,we.set(-1,0,0,0)}}}function s(){let b=!1,ae=null,le=null,we=null;return{setTest:function(Se){Se?De(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(Se){ae!==Se&&!b&&(n.depthMask(Se),ae=Se)},setFunc:function(Se){if(le!==Se){switch(Se){case N1:n.depthFunc(n.NEVER);break;case U1:n.depthFunc(n.ALWAYS);break;case I1:n.depthFunc(n.LESS);break;case Bu:n.depthFunc(n.LEQUAL);break;case O1:n.depthFunc(n.EQUAL);break;case F1:n.depthFunc(n.GEQUAL);break;case k1:n.depthFunc(n.GREATER);break;case z1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=Se}},setLocked:function(Se){b=Se},setClear:function(Se){we!==Se&&(n.clearDepth(Se),we=Se)},reset:function(){b=!1,ae=null,le=null,we=null}}}function o(){let b=!1,ae=null,le=null,we=null,Se=null,et=null,tt=null,Dt=null,tn=null;return{setTest:function(nt){b||(nt?De(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(nt){ae!==nt&&!b&&(n.stencilMask(nt),ae=nt)},setFunc:function(nt,nn,_i){(le!==nt||we!==nn||Se!==_i)&&(n.stencilFunc(nt,nn,_i),le=nt,we=nn,Se=_i)},setOp:function(nt,nn,_i){(et!==nt||tt!==nn||Dt!==_i)&&(n.stencilOp(nt,nn,_i),et=nt,tt=nn,Dt=_i)},setLocked:function(nt){b=nt},setClear:function(nt){tn!==nt&&(n.clearStencil(nt),tn=nt)},reset:function(){b=!1,ae=null,le=null,we=null,Se=null,et=null,tt=null,Dt=null,tn=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},x=new WeakMap,_=[],m=null,f=!1,g=null,v=null,y=null,E=null,A=null,M=null,P=null,S=new Xe(0,0,0),w=0,I=!1,X=null,K=null,L=null,U=null,H=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,O=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(F)[1]),D=O>=1):F.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),D=O>=2);let $=null,Z={};const j=n.getParameter(n.SCISSOR_BOX),q=n.getParameter(n.VIEWPORT),ie=new Ft().fromArray(j),de=new Ft().fromArray(q);function me(b,ae,le,we){const Se=new Uint8Array(4),et=n.createTexture();n.bindTexture(b,et),n.texParameteri(b,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(b,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<le;tt++)i&&(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)?n.texImage3D(ae,0,n.RGBA,1,1,we,0,n.RGBA,n.UNSIGNED_BYTE,Se):n.texImage2D(ae+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Se);return et}const be={};be[n.TEXTURE_2D]=me(n.TEXTURE_2D,n.TEXTURE_2D,1),be[n.TEXTURE_CUBE_MAP]=me(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(be[n.TEXTURE_2D_ARRAY]=me(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),be[n.TEXTURE_3D]=me(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),De(n.DEPTH_TEST),l.setFunc(Bu),Ie(!1),R(Km),De(n.CULL_FACE),_e(Cr);function De(b){h[b]!==!0&&(n.enable(b),h[b]=!0)}function Te(b){h[b]!==!1&&(n.disable(b),h[b]=!1)}function We(b,ae){return p[b]!==ae?(n.bindFramebuffer(b,ae),p[b]=ae,i&&(b===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=ae),b===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=ae)),!0):!1}function k(b,ae){let le=_,we=!1;if(b)if(le=x.get(ae),le===void 0&&(le=[],x.set(ae,le)),b.isWebGLMultipleRenderTargets){const Se=b.texture;if(le.length!==Se.length||le[0]!==n.COLOR_ATTACHMENT0){for(let et=0,tt=Se.length;et<tt;et++)le[et]=n.COLOR_ATTACHMENT0+et;le.length=Se.length,we=!0}}else le[0]!==n.COLOR_ATTACHMENT0&&(le[0]=n.COLOR_ATTACHMENT0,we=!0);else le[0]!==n.BACK&&(le[0]=n.BACK,we=!0);we&&(t.isWebGL2?n.drawBuffers(le):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(le))}function en(b){return m!==b?(n.useProgram(b),m=b,!0):!1}const ye={[es]:n.FUNC_ADD,[v1]:n.FUNC_SUBTRACT,[x1]:n.FUNC_REVERSE_SUBTRACT};if(i)ye[e_]=n.MIN,ye[t_]=n.MAX;else{const b=e.get("EXT_blend_minmax");b!==null&&(ye[e_]=b.MIN_EXT,ye[t_]=b.MAX_EXT)}const Re={[y1]:n.ZERO,[S1]:n.ONE,[M1]:n.SRC_COLOR,[Bd]:n.SRC_ALPHA,[R1]:n.SRC_ALPHA_SATURATE,[A1]:n.DST_COLOR,[T1]:n.DST_ALPHA,[E1]:n.ONE_MINUS_SRC_COLOR,[Hd]:n.ONE_MINUS_SRC_ALPHA,[C1]:n.ONE_MINUS_DST_COLOR,[w1]:n.ONE_MINUS_DST_ALPHA,[P1]:n.CONSTANT_COLOR,[b1]:n.ONE_MINUS_CONSTANT_COLOR,[L1]:n.CONSTANT_ALPHA,[D1]:n.ONE_MINUS_CONSTANT_ALPHA};function _e(b,ae,le,we,Se,et,tt,Dt,tn,nt){if(b===Cr){f===!0&&(Te(n.BLEND),f=!1);return}if(f===!1&&(De(n.BLEND),f=!0),b!==g1){if(b!==g||nt!==I){if((v!==es||A!==es)&&(n.blendEquation(n.FUNC_ADD),v=es,A=es),nt)switch(b){case ds:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.ONE,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}else switch(b){case ds:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Zm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Qm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Jm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",b);break}y=null,E=null,M=null,P=null,S.set(0,0,0),w=0,g=b,I=nt}return}Se=Se||ae,et=et||le,tt=tt||we,(ae!==v||Se!==A)&&(n.blendEquationSeparate(ye[ae],ye[Se]),v=ae,A=Se),(le!==y||we!==E||et!==M||tt!==P)&&(n.blendFuncSeparate(Re[le],Re[we],Re[et],Re[tt]),y=le,E=we,M=et,P=tt),(Dt.equals(S)===!1||tn!==w)&&(n.blendColor(Dt.r,Dt.g,Dt.b,tn),S.copy(Dt),w=tn),g=b,I=!1}function ut(b,ae){b.side===Ei?Te(n.CULL_FACE):De(n.CULL_FACE);let le=b.side===Mn;ae&&(le=!le),Ie(le),b.blending===ds&&b.transparent===!1?_e(Cr):_e(b.blending,b.blendEquation,b.blendSrc,b.blendDst,b.blendEquationAlpha,b.blendSrcAlpha,b.blendDstAlpha,b.blendColor,b.blendAlpha,b.premultipliedAlpha),l.setFunc(b.depthFunc),l.setTest(b.depthTest),l.setMask(b.depthWrite),a.setMask(b.colorWrite);const we=b.stencilWrite;u.setTest(we),we&&(u.setMask(b.stencilWriteMask),u.setFunc(b.stencilFunc,b.stencilRef,b.stencilFuncMask),u.setOp(b.stencilFail,b.stencilZFail,b.stencilZPass)),G(b.polygonOffset,b.polygonOffsetFactor,b.polygonOffsetUnits),b.alphaToCoverage===!0?De(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ie(b){X!==b&&(b?n.frontFace(n.CW):n.frontFace(n.CCW),X=b)}function R(b){b!==p1?(De(n.CULL_FACE),b!==K&&(b===Km?n.cullFace(n.BACK):b===m1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),K=b}function T(b){b!==L&&(D&&n.lineWidth(b),L=b)}function G(b,ae,le){b?(De(n.POLYGON_OFFSET_FILL),(U!==ae||H!==le)&&(n.polygonOffset(ae,le),U=ae,H=le)):Te(n.POLYGON_OFFSET_FILL)}function te(b){b?De(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function J(b){b===void 0&&(b=n.TEXTURE0+Y-1),$!==b&&(n.activeTexture(b),$=b)}function ne(b,ae,le){le===void 0&&($===null?le=n.TEXTURE0+Y-1:le=$);let we=Z[le];we===void 0&&(we={type:void 0,texture:void 0},Z[le]=we),(we.type!==b||we.texture!==ae)&&($!==le&&(n.activeTexture(le),$=le),n.bindTexture(b,ae||be[b]),we.type=b,we.texture=ae)}function ge(){const b=Z[$];b!==void 0&&b.type!==void 0&&(n.bindTexture(b.type,null),b.type=void 0,b.texture=void 0)}function ue(){try{n.compressedTexImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function he(){try{n.compressedTexImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ee(){try{n.texSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function He(){try{n.texStorage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ce(){try{n.texStorage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function pe(){try{n.texImage3D.apply(n,arguments)}catch(b){console.error("THREE.WebGLState:",b)}}function Ne(b){ie.equals(b)===!1&&(n.scissor(b.x,b.y,b.z,b.w),ie.copy(b))}function qe(b){de.equals(b)===!1&&(n.viewport(b.x,b.y,b.z,b.w),de.copy(b))}function gt(b,ae){let le=d.get(ae);le===void 0&&(le=new WeakMap,d.set(ae,le));let we=le.get(b);we===void 0&&(we=n.getUniformBlockIndex(ae,b.name),le.set(b,we))}function ke(b,ae){const we=d.get(ae).get(b);c.get(ae)!==we&&(n.uniformBlockBinding(ae,we,b.__bindingPointIndex),c.set(ae,we))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},$=null,Z={},p={},x=new WeakMap,_=[],m=null,f=!1,g=null,v=null,y=null,E=null,A=null,M=null,P=null,S=new Xe(0,0,0),w=0,I=!1,X=null,K=null,L=null,U=null,H=null,ie.set(0,0,n.canvas.width,n.canvas.height),de.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:De,disable:Te,bindFramebuffer:We,drawBuffers:k,useProgram:en,setBlending:_e,setMaterial:ut,setFlipSided:Ie,setCullFace:R,setLineWidth:T,setPolygonOffset:G,setScissorTest:te,activeTexture:J,bindTexture:ne,unbindTexture:ge,compressedTexImage2D:ue,compressedTexImage3D:he,texImage2D:xe,texImage3D:pe,updateUBOMapping:gt,uniformBlockBinding:ke,texStorage2D:He,texStorage3D:Ce,texSubImage2D:Ee,texSubImage3D:Oe,compressedTexSubImage2D:Q,compressedTexSubImage3D:Ke,scissor:Ne,viewport:qe,reset:re}}function d2(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,T){return p?new OffscreenCanvas(R,T):ja("canvas")}function _(R,T,G,te){let J=1;if((R.width>te||R.height>te)&&(J=te/Math.max(R.width,R.height)),J<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){const ne=T?qd:Math.floor,ge=ne(J*R.width),ue=ne(J*R.height);d===void 0&&(d=x(ge,ue));const he=G?x(ge,ue):d;return he.width=ge,he.height=ue,he.getContext("2d").drawImage(R,0,0,ge,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+ge+"x"+ue+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return L_(R.width)&&L_(R.height)}function f(R){return a?!1:R.wrapS!==fi||R.wrapT!==fi||R.minFilter!==on&&R.minFilter!==Yn}function g(R,T){return R.generateMipmaps&&T&&R.minFilter!==on&&R.minFilter!==Yn}function v(R){n.generateMipmap(R)}function y(R,T,G,te,J=!1){if(a===!1)return T;if(R!==null){if(n[R]!==void 0)return n[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ne=T;if(T===n.RED&&(G===n.FLOAT&&(ne=n.R32F),G===n.HALF_FLOAT&&(ne=n.R16F),G===n.UNSIGNED_BYTE&&(ne=n.R8)),T===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(ne=n.R8UI),G===n.UNSIGNED_SHORT&&(ne=n.R16UI),G===n.UNSIGNED_INT&&(ne=n.R32UI),G===n.BYTE&&(ne=n.R8I),G===n.SHORT&&(ne=n.R16I),G===n.INT&&(ne=n.R32I)),T===n.RG&&(G===n.FLOAT&&(ne=n.RG32F),G===n.HALF_FLOAT&&(ne=n.RG16F),G===n.UNSIGNED_BYTE&&(ne=n.RG8)),T===n.RGBA){const ge=J?Hu:Ze.getTransfer(te);G===n.FLOAT&&(ne=n.RGBA32F),G===n.HALF_FLOAT&&(ne=n.RGBA16F),G===n.UNSIGNED_BYTE&&(ne=ge===st?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(R,T,G){return g(R,G)===!0||R.isFramebufferTexture&&R.minFilter!==on&&R.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){return R===on||R===n_||R===ef?n.NEAREST:n.LINEAR}function M(R){const T=R.target;T.removeEventListener("dispose",M),S(T),T.isVideoTexture&&c.delete(T)}function P(R){const T=R.target;T.removeEventListener("dispose",P),I(T)}function S(R){const T=i.get(R);if(T.__webglInit===void 0)return;const G=R.source,te=h.get(G);if(te){const J=te[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(R),Object.keys(te).length===0&&h.delete(G)}i.remove(R)}function w(R){const T=i.get(R);n.deleteTexture(T.__webglTexture);const G=R.source,te=h.get(G);delete te[T.__cacheKey],o.memory.textures--}function I(R){const T=R.texture,G=i.get(R),te=i.get(T);if(te.__webglTexture!==void 0&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(G.__webglFramebuffer[J]))for(let ne=0;ne<G.__webglFramebuffer[J].length;ne++)n.deleteFramebuffer(G.__webglFramebuffer[J][ne]);else n.deleteFramebuffer(G.__webglFramebuffer[J]);G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer[J])}else{if(Array.isArray(G.__webglFramebuffer))for(let J=0;J<G.__webglFramebuffer.length;J++)n.deleteFramebuffer(G.__webglFramebuffer[J]);else n.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&n.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&n.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let J=0;J<G.__webglColorRenderbuffer.length;J++)G.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(G.__webglColorRenderbuffer[J]);G.__webglDepthRenderbuffer&&n.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let J=0,ne=T.length;J<ne;J++){const ge=i.get(T[J]);ge.__webglTexture&&(n.deleteTexture(ge.__webglTexture),o.memory.textures--),i.remove(T[J])}i.remove(T),i.remove(R)}let X=0;function K(){X=0}function L(){const R=X;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),X+=1,R}function U(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function H(R,T){const G=i.get(R);if(R.isVideoTexture&&ut(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,R,T);return}}t.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+T)}function Y(R,T){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ie(G,R,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+T)}function D(R,T){const G=i.get(R);if(R.version>0&&G.__version!==R.version){ie(G,R,T);return}t.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+T)}function O(R,T){const G=i.get(R);if(R.version>0&&G.__version!==R.version){de(G,R,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+T)}const F={[Wd]:n.REPEAT,[fi]:n.CLAMP_TO_EDGE,[Xd]:n.MIRRORED_REPEAT},$={[on]:n.NEAREST,[n_]:n.NEAREST_MIPMAP_NEAREST,[ef]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Y1]:n.LINEAR_MIPMAP_NEAREST,[Wa]:n.LINEAR_MIPMAP_LINEAR},Z={[sT]:n.NEVER,[fT]:n.ALWAYS,[oT]:n.LESS,[Gx]:n.LEQUAL,[aT]:n.EQUAL,[cT]:n.GEQUAL,[lT]:n.GREATER,[uT]:n.NOTEQUAL};function j(R,T,G){if(G?(n.texParameteri(R,n.TEXTURE_WRAP_S,F[T.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,F[T.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,F[T.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,$[T.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,$[T.minFilter])):(n.texParameteri(R,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(R,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==fi||T.wrapT!==fi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(R,n.TEXTURE_MAG_FILTER,A(T.magFilter)),n.texParameteri(R,n.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==on&&T.minFilter!==Yn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Z[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===on||T.minFilter!==ef&&T.minFilter!==Wa||T.type===_r&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===Xa&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(R,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function q(R,T){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",M));const te=T.source;let J=h.get(te);J===void 0&&(J={},h.set(te,J));const ne=U(T);if(ne!==R.__cacheKey){J[ne]===void 0&&(J[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[ne].usedTimes++;const ge=J[R.__cacheKey];ge!==void 0&&(J[R.__cacheKey].usedTimes--,ge.usedTimes===0&&w(T)),R.__cacheKey=ne,R.__webglTexture=J[ne].texture}return G}function ie(R,T,G){let te=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(te=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(te=n.TEXTURE_3D);const J=q(R,T),ne=T.source;t.bindTexture(te,R.__webglTexture,n.TEXTURE0+G);const ge=i.get(ne);if(ne.version!==ge.__version||J===!0){t.activeTexture(n.TEXTURE0+G);const ue=Ze.getPrimaries(Ze.workingColorSpace),he=T.colorSpace===$n?null:Ze.getPrimaries(T.colorSpace),Ee=T.colorSpace===$n||ue===he?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const Oe=f(T)&&m(T.image)===!1;let Q=_(T.image,Oe,!1,r.maxTextureSize);Q=Ie(T,Q);const Ke=m(Q)||a,He=s.convert(T.format,T.colorSpace);let Ce=s.convert(T.type),xe=y(T.internalFormat,He,Ce,T.colorSpace,T.isVideoTexture);j(te,T,Ke);let pe;const Ne=T.mipmaps,qe=a&&T.isVideoTexture!==!0&&xe!==zx,gt=ge.__version===void 0||J===!0,ke=E(T,Q,Ke);if(T.isDepthTexture)xe=n.DEPTH_COMPONENT,a?T.type===_r?xe=n.DEPTH_COMPONENT32F:T.type===mr?xe=n.DEPTH_COMPONENT24:T.type===hs?xe=n.DEPTH24_STENCIL8:xe=n.DEPTH_COMPONENT16:T.type===_r&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===ps&&xe===n.DEPTH_COMPONENT&&T.type!==cp&&T.type!==mr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=mr,Ce=s.convert(T.type)),T.format===Lo&&xe===n.DEPTH_COMPONENT&&(xe=n.DEPTH_STENCIL,T.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=hs,Ce=s.convert(T.type))),gt&&(qe?t.texStorage2D(n.TEXTURE_2D,1,xe,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Ce,null));else if(T.isDataTexture)if(Ne.length>0&&Ke){qe&&gt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let re=0,b=Ne.length;re<b;re++)pe=Ne[re],qe?t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,He,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,re,xe,pe.width,pe.height,0,He,Ce,pe.data);T.generateMipmaps=!1}else qe?(gt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,He,Ce,Q.data)):t.texImage2D(n.TEXTURE_2D,0,xe,Q.width,Q.height,0,He,Ce,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qe&&gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,Ne[0].width,Ne[0].height,Q.depth);for(let re=0,b=Ne.length;re<b;re++)pe=Ne[re],T.format!==di?He!==null?qe?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,He,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,re,xe,pe.width,pe.height,Q.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage3D(n.TEXTURE_2D_ARRAY,re,0,0,0,pe.width,pe.height,Q.depth,He,Ce,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,re,xe,pe.width,pe.height,Q.depth,0,He,Ce,pe.data)}else{qe&&gt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let re=0,b=Ne.length;re<b;re++)pe=Ne[re],T.format!==di?He!==null?qe?t.compressedTexSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,He,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,re,xe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?t.texSubImage2D(n.TEXTURE_2D,re,0,0,pe.width,pe.height,He,Ce,pe.data):t.texImage2D(n.TEXTURE_2D,re,xe,pe.width,pe.height,0,He,Ce,pe.data)}else if(T.isDataArrayTexture)qe?(gt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ke,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,He,Ce,Q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,xe,Q.width,Q.height,Q.depth,0,He,Ce,Q.data);else if(T.isData3DTexture)qe?(gt&&t.texStorage3D(n.TEXTURE_3D,ke,xe,Q.width,Q.height,Q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,He,Ce,Q.data)):t.texImage3D(n.TEXTURE_3D,0,xe,Q.width,Q.height,Q.depth,0,He,Ce,Q.data);else if(T.isFramebufferTexture){if(gt)if(qe)t.texStorage2D(n.TEXTURE_2D,ke,xe,Q.width,Q.height);else{let re=Q.width,b=Q.height;for(let ae=0;ae<ke;ae++)t.texImage2D(n.TEXTURE_2D,ae,xe,re,b,0,He,Ce,null),re>>=1,b>>=1}}else if(Ne.length>0&&Ke){qe&&gt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Ne[0].width,Ne[0].height);for(let re=0,b=Ne.length;re<b;re++)pe=Ne[re],qe?t.texSubImage2D(n.TEXTURE_2D,re,0,0,He,Ce,pe):t.texImage2D(n.TEXTURE_2D,re,xe,He,Ce,pe);T.generateMipmaps=!1}else qe?(gt&&t.texStorage2D(n.TEXTURE_2D,ke,xe,Q.width,Q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,He,Ce,Q)):t.texImage2D(n.TEXTURE_2D,0,xe,He,Ce,Q);g(T,Ke)&&v(te),ge.__version=ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function de(R,T,G){if(T.image.length!==6)return;const te=q(R,T),J=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+G);const ne=i.get(J);if(J.version!==ne.__version||te===!0){t.activeTexture(n.TEXTURE0+G);const ge=Ze.getPrimaries(Ze.workingColorSpace),ue=T.colorSpace===$n?null:Ze.getPrimaries(T.colorSpace),he=T.colorSpace===$n||ge===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Ee=T.isCompressedTexture||T.image[0].isCompressedTexture,Oe=T.image[0]&&T.image[0].isDataTexture,Q=[];for(let re=0;re<6;re++)!Ee&&!Oe?Q[re]=_(T.image[re],!1,!0,r.maxCubemapSize):Q[re]=Oe?T.image[re].image:T.image[re],Q[re]=Ie(T,Q[re]);const Ke=Q[0],He=m(Ke)||a,Ce=s.convert(T.format,T.colorSpace),xe=s.convert(T.type),pe=y(T.internalFormat,Ce,xe,T.colorSpace),Ne=a&&T.isVideoTexture!==!0,qe=ne.__version===void 0||te===!0;let gt=E(T,Ke,He);j(n.TEXTURE_CUBE_MAP,T,He);let ke;if(Ee){Ne&&qe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,pe,Ke.width,Ke.height);for(let re=0;re<6;re++){ke=Q[re].mipmaps;for(let b=0;b<ke.length;b++){const ae=ke[b];T.format!==di?Ce!==null?Ne?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,0,0,ae.width,ae.height,Ce,ae.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,pe,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,0,0,ae.width,ae.height,Ce,xe,ae.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b,pe,ae.width,ae.height,0,Ce,xe,ae.data)}}}else{ke=T.mipmaps,Ne&&qe&&(ke.length>0&&gt++,t.texStorage2D(n.TEXTURE_CUBE_MAP,gt,pe,Q[0].width,Q[0].height));for(let re=0;re<6;re++)if(Oe){Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Q[re].width,Q[re].height,Ce,xe,Q[re].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,Q[re].width,Q[re].height,0,Ce,xe,Q[re].data);for(let b=0;b<ke.length;b++){const le=ke[b].image[re].image;Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,0,0,le.width,le.height,Ce,xe,le.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,pe,le.width,le.height,0,Ce,xe,le.data)}}else{Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,xe,Q[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,pe,Ce,xe,Q[re]);for(let b=0;b<ke.length;b++){const ae=ke[b];Ne?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,0,0,Ce,xe,ae.image[re]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+re,b+1,pe,Ce,xe,ae.image[re])}}}g(T,He)&&v(n.TEXTURE_CUBE_MAP),ne.__version=J.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function me(R,T,G,te,J,ne){const ge=s.convert(G.format,G.colorSpace),ue=s.convert(G.type),he=y(G.internalFormat,ge,ue,G.colorSpace);if(!i.get(T).__hasExternalTextures){const Oe=Math.max(1,T.width>>ne),Q=Math.max(1,T.height>>ne);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ne,he,Oe,Q,T.depth,0,ge,ue,null):t.texImage2D(J,ne,he,Oe,Q,0,ge,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),_e(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,te,J,i.get(G).__webglTexture,0,Re(T)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,te,J,i.get(G).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function be(R,T,G){if(n.bindRenderbuffer(n.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let te=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(G||_e(T)){const J=T.depthTexture;J&&J.isDepthTexture&&(J.type===_r?te=n.DEPTH_COMPONENT32F:J.type===mr&&(te=n.DEPTH_COMPONENT24));const ne=Re(T);_e(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,te,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,te,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,te,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){const te=Re(T);G&&_e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,R)}else{const te=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0;J<te.length;J++){const ne=te[J],ge=s.convert(ne.format,ne.colorSpace),ue=s.convert(ne.type),he=y(ne.internalFormat,ge,ue,ne.colorSpace),Ee=Re(T);G&&_e(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,he,T.width,T.height):_e(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ee,he,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,he,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),H(T.depthTexture,0);const te=i.get(T.depthTexture).__webglTexture,J=Re(T);if(T.depthTexture.format===ps)_e(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,te,0);else if(T.depthTexture.format===Lo)_e(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Te(R){const T=i.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");De(T.__webglFramebuffer,R)}else if(G){T.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[te]),T.__webglDepthbuffer[te]=n.createRenderbuffer(),be(T.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),be(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(R,T,G){const te=i.get(R);T!==void 0&&me(te.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Te(R)}function k(R){const T=R.texture,G=i.get(R),te=i.get(T);R.addEventListener("dispose",P),R.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=n.createTexture()),te.__version=T.version,o.memory.textures++);const J=R.isWebGLCubeRenderTarget===!0,ne=R.isWebGLMultipleRenderTargets===!0,ge=m(R)||a;if(J){G.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer[ue]=[];for(let he=0;he<T.mipmaps.length;he++)G.__webglFramebuffer[ue][he]=n.createFramebuffer()}else G.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){G.__webglFramebuffer=[];for(let ue=0;ue<T.mipmaps.length;ue++)G.__webglFramebuffer[ue]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(ne)if(r.drawBuffers){const ue=R.texture;for(let he=0,Ee=ue.length;he<Ee;he++){const Oe=i.get(ue[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&_e(R)===!1){const ue=ne?T:[T];G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<ue.length;he++){const Ee=ue[he];G.__webglColorRenderbuffer[he]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const Oe=s.convert(Ee.format,Ee.colorSpace),Q=s.convert(Ee.type),Ke=y(Ee.internalFormat,Oe,Q,Ee.colorSpace,R.isXRRenderTarget===!0),He=Re(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Ke,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,G.__webglColorRenderbuffer[he])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),be(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),j(n.TEXTURE_CUBE_MAP,T,ge);for(let ue=0;ue<6;ue++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)me(G.__webglFramebuffer[ue][he],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,he);else me(G.__webglFramebuffer[ue],R,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);g(T,ge)&&v(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ne){const ue=R.texture;for(let he=0,Ee=ue.length;he<Ee;he++){const Oe=ue[he],Q=i.get(Oe);t.bindTexture(n.TEXTURE_2D,Q.__webglTexture),j(n.TEXTURE_2D,Oe,ge),me(G.__webglFramebuffer,R,Oe,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,0),g(Oe,ge)&&v(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?ue=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ue,te.__webglTexture),j(ue,T,ge),a&&T.mipmaps&&T.mipmaps.length>0)for(let he=0;he<T.mipmaps.length;he++)me(G.__webglFramebuffer[he],R,T,n.COLOR_ATTACHMENT0,ue,he);else me(G.__webglFramebuffer,R,T,n.COLOR_ATTACHMENT0,ue,0);g(T,ge)&&v(ue),t.unbindTexture()}R.depthBuffer&&Te(R)}function en(R){const T=m(R)||a,G=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let te=0,J=G.length;te<J;te++){const ne=G[te];if(g(ne,T)){const ge=R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ue=i.get(ne).__webglTexture;t.bindTexture(ge,ue),v(ge),t.unbindTexture()}}}function ye(R){if(a&&R.samples>0&&_e(R)===!1){const T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],G=R.width,te=R.height;let J=n.COLOR_BUFFER_BIT;const ne=[],ge=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=i.get(R),he=R.isWebGLMultipleRenderTargets===!0;if(he)for(let Ee=0;Ee<T.length;Ee++)t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let Ee=0;Ee<T.length;Ee++){ne.push(n.COLOR_ATTACHMENT0+Ee),R.depthBuffer&&ne.push(ge);const Oe=ue.__ignoreDepthValues!==void 0?ue.__ignoreDepthValues:!1;if(Oe===!1&&(R.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),he&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee]),Oe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ge]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ge])),he){const Q=i.get(T[Ee]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,G,te,0,0,G,te,J,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),he)for(let Ee=0;Ee<T.length;Ee++){t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.RENDERBUFFER,ue.__webglColorRenderbuffer[Ee]);const Oe=i.get(T[Ee]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ue.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ee,n.TEXTURE_2D,Oe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}}function Re(R){return Math.min(r.maxSamples,R.samples)}function _e(R){const T=i.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ut(R){const T=o.render.frame;c.get(R)!==T&&(c.set(R,T),R.update())}function Ie(R,T){const G=R.colorSpace,te=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===jd||G!==Qi&&G!==$n&&(Ze.getTransfer(G)===st?a===!1?e.has("EXT_sRGB")===!0&&te===di?(R.format=jd,R.minFilter=Yn,R.generateMipmaps=!1):T=Wx.sRGBToLinear(T):(te!==di||J!==Pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),T}this.allocateTextureUnit=L,this.resetTextureUnits=K,this.setTexture2D=H,this.setTexture2DArray=Y,this.setTexture3D=D,this.setTextureCube=O,this.rebindTextures=We,this.setupRenderTarget=k,this.updateRenderTargetMipmap=en,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=me,this.useMultisampledRTT=_e}function h2(n,e,t){const i=t.isWebGL2;function r(s,o=$n){let a;const l=Ze.getTransfer(o);if(s===Pr)return n.UNSIGNED_BYTE;if(s===Ux)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ix)return n.UNSIGNED_SHORT_5_5_5_1;if(s===q1)return n.BYTE;if(s===$1)return n.SHORT;if(s===cp)return n.UNSIGNED_SHORT;if(s===Nx)return n.INT;if(s===mr)return n.UNSIGNED_INT;if(s===_r)return n.FLOAT;if(s===Xa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===K1)return n.ALPHA;if(s===di)return n.RGBA;if(s===Z1)return n.LUMINANCE;if(s===Q1)return n.LUMINANCE_ALPHA;if(s===ps)return n.DEPTH_COMPONENT;if(s===Lo)return n.DEPTH_STENCIL;if(s===jd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===J1)return n.RED;if(s===Ox)return n.RED_INTEGER;if(s===eT)return n.RG;if(s===Fx)return n.RG_INTEGER;if(s===kx)return n.RGBA_INTEGER;if(s===tf||s===nf||s===rf||s===sf)if(l===st)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===tf)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===nf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===rf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===sf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===tf)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===nf)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===rf)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===sf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===i_||s===r_||s===s_||s===o_)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===i_)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===r_)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===s_)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===o_)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===zx)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===a_||s===l_)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===a_)return l===st?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===l_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===u_||s===c_||s===f_||s===d_||s===h_||s===p_||s===m_||s===__||s===g_||s===v_||s===x_||s===y_||s===S_||s===M_)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===u_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===c_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===f_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===d_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===h_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===p_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===m_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===__)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===g_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===v_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===x_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===y_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===S_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===M_)return l===st?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===of||s===E_||s===T_)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===of)return l===st?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===E_)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===T_)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tT||s===w_||s===A_||s===C_)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===of)return a.COMPRESSED_RED_RGTC1_EXT;if(s===w_)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===A_)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===C_)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hs?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class p2 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sa extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const m2={type:"move"};class Lf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),f=this._getHandJoint(u,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(m2)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class _2 extends Oo{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,x=null;const _=t.getContextAttributes();let m=null,f=null;const g=[],v=[],y=new Ye;let E=null;const A=new qn;A.layers.enable(1),A.viewport=new Ft;const M=new qn;M.layers.enable(2),M.viewport=new Ft;const P=[A,M],S=new p2;S.layers.enable(1),S.layers.enable(2);let w=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let q=g[j];return q===void 0&&(q=new Lf,g[j]=q),q.getTargetRaySpace()},this.getControllerGrip=function(j){let q=g[j];return q===void 0&&(q=new Lf,g[j]=q),q.getGripSpace()},this.getHand=function(j){let q=g[j];return q===void 0&&(q=new Lf,g[j]=q),q.getHandSpace()};function X(j){const q=v.indexOf(j.inputSource);if(q===-1)return;const ie=g[q];ie!==void 0&&(ie.update(j.inputSource,j.frame,u||o),ie.dispatchEvent({type:j.type,data:j.inputSource}))}function K(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",L);for(let j=0;j<g.length;j++){const q=v[j];q!==null&&(v[j]=null,g[j].disconnect(q))}w=null,I=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,Z.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",K),r.addEventListener("inputsourceschange",L),_.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const q={antialias:r.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,q),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),f=new Ss(p.framebufferWidth,p.framebufferHeight,{format:di,type:Pr,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let q=null,ie=null,de=null;_.depth&&(de=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,q=_.stencil?Lo:ps,ie=_.stencil?hs:mr);const me={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(me),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),f=new Ss(h.textureWidth,h.textureHeight,{format:di,type:Pr,depthTexture:new iy(h.textureWidth,h.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,q),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});const be=e.properties.get(f);be.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Z.setContext(r),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(j){for(let q=0;q<j.removed.length;q++){const ie=j.removed[q],de=v.indexOf(ie);de>=0&&(v[de]=null,g[de].disconnect(ie))}for(let q=0;q<j.added.length;q++){const ie=j.added[q];let de=v.indexOf(ie);if(de===-1){for(let be=0;be<g.length;be++)if(be>=v.length){v.push(ie),de=be;break}else if(v[be]===null){v[be]=ie,de=be;break}if(de===-1)break}const me=g[de];me&&me.connect(ie)}}const U=new B,H=new B;function Y(j,q,ie){U.setFromMatrixPosition(q.matrixWorld),H.setFromMatrixPosition(ie.matrixWorld);const de=U.distanceTo(H),me=q.projectionMatrix.elements,be=ie.projectionMatrix.elements,De=me[14]/(me[10]-1),Te=me[14]/(me[10]+1),We=(me[9]+1)/me[5],k=(me[9]-1)/me[5],en=(me[8]-1)/me[0],ye=(be[8]+1)/be[0],Re=De*en,_e=De*ye,ut=de/(-en+ye),Ie=ut*-en;q.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert();const R=De+ut,T=Te+ut,G=Re-Ie,te=_e+(de-Ie),J=We*Te/T*R,ne=k*Te/T*R;j.projectionMatrix.makePerspective(G,te,J,ne,R,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}function D(j,q){q===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(q.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;S.near=M.near=A.near=j.near,S.far=M.far=A.far=j.far,(w!==S.near||I!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,I=S.far);const q=j.parent,ie=S.cameras;D(S,q);for(let de=0;de<ie.length;de++)D(ie[de],q);ie.length===2?Y(S,A,M):S.projectionMatrix.copy(A.projectionMatrix),O(j,S,q)};function O(j,q,ie){ie===null?j.matrix.copy(q.matrixWorld):(j.matrix.copy(ie.matrixWorld),j.matrix.invert(),j.matrix.multiply(q.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(q.projectionMatrix),j.projectionMatrixInverse.copy(q.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Yd*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)};let F=null;function $(j,q){if(c=q.getViewerPose(u||o),x=q,c!==null){const ie=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let de=!1;ie.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let me=0;me<ie.length;me++){const be=ie[me];let De=null;if(p!==null)De=p.getViewport(be);else{const We=d.getViewSubImage(h,be);De=We.viewport,me===0&&(e.setRenderTargetTextures(f,We.colorTexture,h.ignoreDepthValues?void 0:We.depthStencilTexture),e.setRenderTarget(f))}let Te=P[me];Te===void 0&&(Te=new qn,Te.layers.enable(me),Te.viewport=new Ft,P[me]=Te),Te.matrix.fromArray(be.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(be.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),me===0&&(S.matrix.copy(Te.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(Te)}}for(let ie=0;ie<g.length;ie++){const de=v[ie],me=g[ie];de!==null&&me!==void 0&&me.update(de,q,u||o)}F&&F(j,q),q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:q}),x=null}const Z=new ty;Z.setAnimationLoop($),this.setAnimationLoop=function(j){F=j},this.dispose=function(){}}}function g2(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Qx(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),x(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f).envMap;if(g&&(m.envMap.value=g,m.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const v=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*v,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Mn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function v2(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function u(g,v){let y=r[g.id];y===void 0&&(x(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(g,E);const A=e.render.frame;s[g.id]!==A&&(h(g),s[g.id]=A)}function c(g){const v=d();g.__bindingPointIndex=v;const y=n.createBuffer(),E=g.__size,A=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,E,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function d(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,E=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let A=0,M=y.length;A<M;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let S=0,w=P.length;S<w;S++){const I=P[S];if(p(I,A,S,E)===!0){const X=I.__offset,K=Array.isArray(I.value)?I.value:[I.value];let L=0;for(let U=0;U<K.length;U++){const H=K[U],Y=_(H);typeof H=="number"||typeof H=="boolean"?(I.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,X+L,I.__data)):H.isMatrix3?(I.__data[0]=H.elements[0],I.__data[1]=H.elements[1],I.__data[2]=H.elements[2],I.__data[3]=0,I.__data[4]=H.elements[3],I.__data[5]=H.elements[4],I.__data[6]=H.elements[5],I.__data[7]=0,I.__data[8]=H.elements[6],I.__data[9]=H.elements[7],I.__data[10]=H.elements[8],I.__data[11]=0):(H.toArray(I.__data,L),L+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,I.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,v,y,E){const A=g.value,M=v+"_"+y;if(E[M]===void 0)return typeof A=="number"||typeof A=="boolean"?E[M]=A:E[M]=A.clone(),!0;{const P=E[M];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[M]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function x(g){const v=g.uniforms;let y=0;const E=16;for(let M=0,P=v.length;M<P;M++){const S=Array.isArray(v[M])?v[M]:[v[M]];for(let w=0,I=S.length;w<I;w++){const X=S[w],K=Array.isArray(X.value)?X.value:[X.value];for(let L=0,U=K.length;L<U;L++){const H=K[L],Y=_(H),D=y%E;D!==0&&E-D<Y.boundary&&(y+=E-D),X.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=y,y+=Y.storage}}}const A=y%E;return A>0&&(y+=E-A),g.__size=y,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class uy{constructor(e={}){const{canvas:t=hT(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const f=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ot,this._useLegacyLights=!1,this.toneMapping=Rr,this.toneMappingExposure=1;const v=this;let y=!1,E=0,A=0,M=null,P=-1,S=null;const w=new Ft,I=new Ft;let X=null;const K=new Xe(0);let L=0,U=t.width,H=t.height,Y=1,D=null,O=null;const F=new Ft(0,0,U,H),$=new Ft(0,0,U,H);let Z=!1;const j=new hp;let q=!1,ie=!1,de=null;const me=new Pt,be=new Ye,De=new B,Te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function We(){return M===null?Y:1}let k=i;function en(C,N){for(let V=0;V<C.length;V++){const W=C[V],z=t.getContext(W,N);if(z!==null)return z}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lp}`),t.addEventListener("webglcontextlost",re,!1),t.addEventListener("webglcontextrestored",b,!1),t.addEventListener("webglcontextcreationerror",ae,!1),k===null){const N=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&N.shift(),k=en(N,C),k===null)throw en(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let ye,Re,_e,ut,Ie,R,T,G,te,J,ne,ge,ue,he,Ee,Oe,Q,Ke,He,Ce,xe,pe,Ne,qe;function gt(){ye=new RC(k),Re=new MC(k,ye,e),ye.init(Re),pe=new h2(k,ye,Re),_e=new f2(k,ye,Re),ut=new LC(k),Ie=new ZR,R=new d2(k,ye,_e,Ie,Re,pe,ut),T=new TC(v),G=new CC(v),te=new zT(k,Re),Ne=new yC(k,ye,te,Re),J=new PC(k,te,ut,Ne),ne=new IC(k,J,te,ut),He=new UC(k,Re,R),Oe=new EC(Ie),ge=new KR(v,T,G,ye,Re,Ne,Oe),ue=new g2(v,Ie),he=new JR,Ee=new s2(ye,Re),Ke=new xC(v,T,G,_e,ne,h,l),Q=new c2(v,ne,Re),qe=new v2(k,ut,Re,_e),Ce=new SC(k,ye,ut,Re),xe=new bC(k,ye,ut,Re),ut.programs=ge.programs,v.capabilities=Re,v.extensions=ye,v.properties=Ie,v.renderLists=he,v.shadowMap=Q,v.state=_e,v.info=ut}gt();const ke=new _2(v,k);this.xr=ke,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const C=ye.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ye.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(C){C!==void 0&&(Y=C,this.setSize(U,H,!1))},this.getSize=function(C){return C.set(U,H)},this.setSize=function(C,N,V=!0){if(ke.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=C,H=N,t.width=Math.floor(C*Y),t.height=Math.floor(N*Y),V===!0&&(t.style.width=C+"px",t.style.height=N+"px"),this.setViewport(0,0,C,N)},this.getDrawingBufferSize=function(C){return C.set(U*Y,H*Y).floor()},this.setDrawingBufferSize=function(C,N,V){U=C,H=N,Y=V,t.width=Math.floor(C*V),t.height=Math.floor(N*V),this.setViewport(0,0,C,N)},this.getCurrentViewport=function(C){return C.copy(w)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,N,V,W){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,N,V,W),_e.viewport(w.copy(F).multiplyScalar(Y).floor())},this.getScissor=function(C){return C.copy($)},this.setScissor=function(C,N,V,W){C.isVector4?$.set(C.x,C.y,C.z,C.w):$.set(C,N,V,W),_e.scissor(I.copy($).multiplyScalar(Y).floor())},this.getScissorTest=function(){return Z},this.setScissorTest=function(C){_e.setScissorTest(Z=C)},this.setOpaqueSort=function(C){D=C},this.setTransparentSort=function(C){O=C},this.getClearColor=function(C){return C.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(C=!0,N=!0,V=!0){let W=0;if(C){let z=!1;if(M!==null){const ce=M.texture.format;z=ce===kx||ce===Fx||ce===Ox}if(z){const ce=M.texture.type,ve=ce===Pr||ce===mr||ce===cp||ce===hs||ce===Ux||ce===Ix,Me=Ke.getClearColor(),Ae=Ke.getClearAlpha(),Fe=Me.r,Pe=Me.g,Le=Me.b;ve?(p[0]=Fe,p[1]=Pe,p[2]=Le,p[3]=Ae,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=Fe,x[1]=Pe,x[2]=Le,x[3]=Ae,k.clearBufferiv(k.COLOR,0,x))}else W|=k.COLOR_BUFFER_BIT}N&&(W|=k.DEPTH_BUFFER_BIT),V&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",re,!1),t.removeEventListener("webglcontextrestored",b,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),he.dispose(),Ee.dispose(),Ie.dispose(),T.dispose(),G.dispose(),ne.dispose(),Ne.dispose(),qe.dispose(),ge.dispose(),ke.dispose(),ke.removeEventListener("sessionstart",tn),ke.removeEventListener("sessionend",nt),de&&(de.dispose(),de=null),nn.stop()};function re(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function b(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=ut.autoReset,N=Q.enabled,V=Q.autoUpdate,W=Q.needsUpdate,z=Q.type;gt(),ut.autoReset=C,Q.enabled=N,Q.autoUpdate=V,Q.needsUpdate=W,Q.type=z}function ae(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function le(C){const N=C.target;N.removeEventListener("dispose",le),we(N)}function we(C){Se(C),Ie.remove(C)}function Se(C){const N=Ie.get(C).programs;N!==void 0&&(N.forEach(function(V){ge.releaseProgram(V)}),C.isShaderMaterial&&ge.releaseShaderCache(C))}this.renderBufferDirect=function(C,N,V,W,z,ce){N===null&&(N=Te);const ve=z.isMesh&&z.matrixWorld.determinant()<0,Me=hy(C,N,V,W,z);_e.setMaterial(W,ve);let Ae=V.index,Fe=1;if(W.wireframe===!0){if(Ae=J.getWireframeAttribute(V),Ae===void 0)return;Fe=2}const Pe=V.drawRange,Le=V.attributes.position;let St=Pe.start*Fe,wn=(Pe.start+Pe.count)*Fe;ce!==null&&(St=Math.max(St,ce.start*Fe),wn=Math.min(wn,(ce.start+ce.count)*Fe)),Ae!==null?(St=Math.max(St,0),wn=Math.min(wn,Ae.count)):Le!=null&&(St=Math.max(St,0),wn=Math.min(wn,Le.count));const Nt=wn-St;if(Nt<0||Nt===1/0)return;Ne.setup(z,W,Me,V,Ae);let Li,ct=Ce;if(Ae!==null&&(Li=te.get(Ae),ct=xe,ct.setIndex(Li)),z.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*We()),ct.setMode(k.LINES)):ct.setMode(k.TRIANGLES);else if(z.isLine){let ze=W.linewidth;ze===void 0&&(ze=1),_e.setLineWidth(ze*We()),z.isLineSegments?ct.setMode(k.LINES):z.isLineLoop?ct.setMode(k.LINE_LOOP):ct.setMode(k.LINE_STRIP)}else z.isPoints?ct.setMode(k.POINTS):z.isSprite&&ct.setMode(k.TRIANGLES);if(z.isBatchedMesh)ct.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ct.renderInstances(St,Nt,z.count);else if(V.isInstancedBufferGeometry){const ze=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,mc=Math.min(V.instanceCount,ze);ct.renderInstances(St,Nt,mc)}else ct.render(St,Nt)};function et(C,N,V){C.transparent===!0&&C.side===Ei&&C.forceSinglePass===!1?(C.side=Mn,C.needsUpdate=!0,sl(C,N,V),C.side=Ir,C.needsUpdate=!0,sl(C,N,V),C.side=Ei):sl(C,N,V)}this.compile=function(C,N,V=null){V===null&&(V=C),m=Ee.get(V),m.init(),g.push(m),V.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),C!==V&&C.traverseVisible(function(z){z.isLight&&z.layers.test(N.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights);const W=new Set;return C.traverse(function(z){const ce=z.material;if(ce)if(Array.isArray(ce))for(let ve=0;ve<ce.length;ve++){const Me=ce[ve];et(Me,V,z),W.add(Me)}else et(ce,V,z),W.add(ce)}),g.pop(),m=null,W},this.compileAsync=function(C,N,V=null){const W=this.compile(C,N,V);return new Promise(z=>{function ce(){if(W.forEach(function(ve){Ie.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){z(C);return}setTimeout(ce,10)}ye.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let tt=null;function Dt(C){tt&&tt(C)}function tn(){nn.stop()}function nt(){nn.start()}const nn=new ty;nn.setAnimationLoop(Dt),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(C){tt=C,ke.setAnimationLoop(C),C===null?nn.stop():nn.start()},ke.addEventListener("sessionstart",tn),ke.addEventListener("sessionend",nt),this.render=function(C,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),ke.enabled===!0&&ke.isPresenting===!0&&(ke.cameraAutoUpdate===!0&&ke.updateCamera(N),N=ke.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,N,M),m=Ee.get(C,g.length),m.init(),g.push(m),me.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(me),ie=this.localClippingEnabled,q=Oe.init(this.clippingPlanes,ie),_=he.get(C,f.length),_.init(),f.push(_),_i(C,N,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(D,O),this.info.render.frame++,q===!0&&Oe.beginShadows();const V=m.state.shadowsArray;if(Q.render(V,C,N),q===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ke.render(_,C),m.setupLights(v._useLegacyLights),N.isArrayCamera){const W=N.cameras;for(let z=0,ce=W.length;z<ce;z++){const ve=W[z];gp(_,C,ve,ve.viewport)}}else gp(_,C,N);M!==null&&(R.updateMultisampleRenderTarget(M),R.updateRenderTargetMipmap(M)),C.isScene===!0&&C.onAfterRender(v,C,N),Ne.resetDefaultState(),P=-1,S=null,g.pop(),g.length>0?m=g[g.length-1]:m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function _i(C,N,V,W){if(C.visible===!1)return;if(C.layers.test(N.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(N);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||j.intersectsSprite(C)){W&&De.setFromMatrixPosition(C.matrixWorld).applyMatrix4(me);const ve=ne.update(C),Me=C.material;Me.visible&&_.push(C,ve,Me,V,De.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||j.intersectsObject(C))){const ve=ne.update(C),Me=C.material;if(W&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),De.copy(C.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),De.copy(ve.boundingSphere.center)),De.applyMatrix4(C.matrixWorld).applyMatrix4(me)),Array.isArray(Me)){const Ae=ve.groups;for(let Fe=0,Pe=Ae.length;Fe<Pe;Fe++){const Le=Ae[Fe],St=Me[Le.materialIndex];St&&St.visible&&_.push(C,ve,St,V,De.z,Le)}}else Me.visible&&_.push(C,ve,Me,V,De.z,null)}}const ce=C.children;for(let ve=0,Me=ce.length;ve<Me;ve++)_i(ce[ve],N,V,W)}function gp(C,N,V,W){const z=C.opaque,ce=C.transmissive,ve=C.transparent;m.setupLightsView(V),q===!0&&Oe.setGlobalState(v.clippingPlanes,V),ce.length>0&&dy(z,ce,N,V),W&&_e.viewport(w.copy(W)),z.length>0&&rl(z,N,V),ce.length>0&&rl(ce,N,V),ve.length>0&&rl(ve,N,V),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function dy(C,N,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const ce=Re.isWebGL2;de===null&&(de=new Ss(1,1,{generateMipmaps:!0,type:ye.has("EXT_color_buffer_half_float")?Xa:Pr,minFilter:Wa,samples:ce?4:0})),v.getDrawingBufferSize(be),ce?de.setSize(be.x,be.y):de.setSize(qd(be.x),qd(be.y));const ve=v.getRenderTarget();v.setRenderTarget(de),v.getClearColor(K),L=v.getClearAlpha(),L<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=Rr,rl(C,V,W),R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de);let Ae=!1;for(let Fe=0,Pe=N.length;Fe<Pe;Fe++){const Le=N[Fe],St=Le.object,wn=Le.geometry,Nt=Le.material,Li=Le.group;if(Nt.side===Ei&&St.layers.test(W.layers)){const ct=Nt.side;Nt.side=Mn,Nt.needsUpdate=!0,vp(St,V,W,wn,Nt,Li),Nt.side=ct,Nt.needsUpdate=!0,Ae=!0}}Ae===!0&&(R.updateMultisampleRenderTarget(de),R.updateRenderTargetMipmap(de)),v.setRenderTarget(ve),v.setClearColor(K,L),v.toneMapping=Me}function rl(C,N,V){const W=N.isScene===!0?N.overrideMaterial:null;for(let z=0,ce=C.length;z<ce;z++){const ve=C[z],Me=ve.object,Ae=ve.geometry,Fe=W===null?ve.material:W,Pe=ve.group;Me.layers.test(V.layers)&&vp(Me,N,V,Ae,Fe,Pe)}}function vp(C,N,V,W,z,ce){C.onBeforeRender(v,N,V,W,z,ce),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),z.onBeforeRender(v,N,V,W,C,ce),z.transparent===!0&&z.side===Ei&&z.forceSinglePass===!1?(z.side=Mn,z.needsUpdate=!0,v.renderBufferDirect(V,N,W,z,C,ce),z.side=Ir,z.needsUpdate=!0,v.renderBufferDirect(V,N,W,z,C,ce),z.side=Ei):v.renderBufferDirect(V,N,W,z,C,ce),C.onAfterRender(v,N,V,W,z,ce)}function sl(C,N,V){N.isScene!==!0&&(N=Te);const W=Ie.get(C),z=m.state.lights,ce=m.state.shadowsArray,ve=z.state.version,Me=ge.getParameters(C,z.state,ce,N,V),Ae=ge.getProgramCacheKey(Me);let Fe=W.programs;W.environment=C.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(C.isMeshStandardMaterial?G:T).get(C.envMap||W.environment),Fe===void 0&&(C.addEventListener("dispose",le),Fe=new Map,W.programs=Fe);let Pe=Fe.get(Ae);if(Pe!==void 0){if(W.currentProgram===Pe&&W.lightsStateVersion===ve)return yp(C,Me),Pe}else Me.uniforms=ge.getUniforms(C),C.onBuild(V,Me,v),C.onBeforeCompile(Me,v),Pe=ge.acquireProgram(Me,Ae),Fe.set(Ae,Pe),W.uniforms=Me.uniforms;const Le=W.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Le.clippingPlanes=Oe.uniform),yp(C,Me),W.needsLights=my(C),W.lightsStateVersion=ve,W.needsLights&&(Le.ambientLightColor.value=z.state.ambient,Le.lightProbe.value=z.state.probe,Le.directionalLights.value=z.state.directional,Le.directionalLightShadows.value=z.state.directionalShadow,Le.spotLights.value=z.state.spot,Le.spotLightShadows.value=z.state.spotShadow,Le.rectAreaLights.value=z.state.rectArea,Le.ltc_1.value=z.state.rectAreaLTC1,Le.ltc_2.value=z.state.rectAreaLTC2,Le.pointLights.value=z.state.point,Le.pointLightShadows.value=z.state.pointShadow,Le.hemisphereLights.value=z.state.hemi,Le.directionalShadowMap.value=z.state.directionalShadowMap,Le.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Le.spotShadowMap.value=z.state.spotShadowMap,Le.spotLightMatrix.value=z.state.spotLightMatrix,Le.spotLightMap.value=z.state.spotLightMap,Le.pointShadowMap.value=z.state.pointShadowMap,Le.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=Pe,W.uniformsList=null,Pe}function xp(C){if(C.uniformsList===null){const N=C.currentProgram.getUniforms();C.uniformsList=au.seqWithValue(N.seq,C.uniforms)}return C.uniformsList}function yp(C,N){const V=Ie.get(C);V.outputColorSpace=N.outputColorSpace,V.batching=N.batching,V.instancing=N.instancing,V.instancingColor=N.instancingColor,V.skinning=N.skinning,V.morphTargets=N.morphTargets,V.morphNormals=N.morphNormals,V.morphColors=N.morphColors,V.morphTargetsCount=N.morphTargetsCount,V.numClippingPlanes=N.numClippingPlanes,V.numIntersection=N.numClipIntersection,V.vertexAlphas=N.vertexAlphas,V.vertexTangents=N.vertexTangents,V.toneMapping=N.toneMapping}function hy(C,N,V,W,z){N.isScene!==!0&&(N=Te),R.resetTextureUnits();const ce=N.fog,ve=W.isMeshStandardMaterial?N.environment:null,Me=M===null?v.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Qi,Ae=(W.isMeshStandardMaterial?G:T).get(W.envMap||ve),Fe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Pe=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!V.morphAttributes.position,St=!!V.morphAttributes.normal,wn=!!V.morphAttributes.color;let Nt=Rr;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Nt=v.toneMapping);const Li=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ct=Li!==void 0?Li.length:0,ze=Ie.get(W),mc=m.state.lights;if(q===!0&&(ie===!0||C!==S)){const Gn=C===S&&W.id===P;Oe.setState(W,C,Gn)}let vt=!1;W.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==mc.state.version||ze.outputColorSpace!==Me||z.isBatchedMesh&&ze.batching===!1||!z.isBatchedMesh&&ze.batching===!0||z.isInstancedMesh&&ze.instancing===!1||!z.isInstancedMesh&&ze.instancing===!0||z.isSkinnedMesh&&ze.skinning===!1||!z.isSkinnedMesh&&ze.skinning===!0||z.isInstancedMesh&&ze.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&ze.instancingColor===!1&&z.instanceColor!==null||ze.envMap!==Ae||W.fog===!0&&ze.fog!==ce||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Oe.numPlanes||ze.numIntersection!==Oe.numIntersection)||ze.vertexAlphas!==Fe||ze.vertexTangents!==Pe||ze.morphTargets!==Le||ze.morphNormals!==St||ze.morphColors!==wn||ze.toneMapping!==Nt||Re.isWebGL2===!0&&ze.morphTargetsCount!==ct)&&(vt=!0):(vt=!0,ze.__version=W.version);let Hr=ze.currentProgram;vt===!0&&(Hr=sl(W,N,z));let Sp=!1,ko=!1,_c=!1;const Wt=Hr.getUniforms(),Gr=ze.uniforms;if(_e.useProgram(Hr.program)&&(Sp=!0,ko=!0,_c=!0),W.id!==P&&(P=W.id,ko=!0),Sp||S!==C){Wt.setValue(k,"projectionMatrix",C.projectionMatrix),Wt.setValue(k,"viewMatrix",C.matrixWorldInverse);const Gn=Wt.map.cameraPosition;Gn!==void 0&&Gn.setValue(k,De.setFromMatrixPosition(C.matrixWorld)),Re.logarithmicDepthBuffer&&Wt.setValue(k,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Wt.setValue(k,"isOrthographic",C.isOrthographicCamera===!0),S!==C&&(S=C,ko=!0,_c=!0)}if(z.isSkinnedMesh){Wt.setOptional(k,z,"bindMatrix"),Wt.setOptional(k,z,"bindMatrixInverse");const Gn=z.skeleton;Gn&&(Re.floatVertexTextures?(Gn.boneTexture===null&&Gn.computeBoneTexture(),Wt.setValue(k,"boneTexture",Gn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Wt.setOptional(k,z,"batchingTexture"),Wt.setValue(k,"batchingTexture",z._matricesTexture,R));const gc=V.morphAttributes;if((gc.position!==void 0||gc.normal!==void 0||gc.color!==void 0&&Re.isWebGL2===!0)&&He.update(z,V,Hr),(ko||ze.receiveShadow!==z.receiveShadow)&&(ze.receiveShadow=z.receiveShadow,Wt.setValue(k,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gr.envMap.value=Ae,Gr.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),ko&&(Wt.setValue(k,"toneMappingExposure",v.toneMappingExposure),ze.needsLights&&py(Gr,_c),ce&&W.fog===!0&&ue.refreshFogUniforms(Gr,ce),ue.refreshMaterialUniforms(Gr,W,Y,H,de),au.upload(k,xp(ze),Gr,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(au.upload(k,xp(ze),Gr,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Wt.setValue(k,"center",z.center),Wt.setValue(k,"modelViewMatrix",z.modelViewMatrix),Wt.setValue(k,"normalMatrix",z.normalMatrix),Wt.setValue(k,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Gn=W.uniformsGroups;for(let vc=0,_y=Gn.length;vc<_y;vc++)if(Re.isWebGL2){const Mp=Gn[vc];qe.update(Mp,Hr),qe.bind(Mp,Hr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hr}function py(C,N){C.ambientLightColor.needsUpdate=N,C.lightProbe.needsUpdate=N,C.directionalLights.needsUpdate=N,C.directionalLightShadows.needsUpdate=N,C.pointLights.needsUpdate=N,C.pointLightShadows.needsUpdate=N,C.spotLights.needsUpdate=N,C.spotLightShadows.needsUpdate=N,C.rectAreaLights.needsUpdate=N,C.hemisphereLights.needsUpdate=N}function my(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(C,N,V){Ie.get(C.texture).__webglTexture=N,Ie.get(C.depthTexture).__webglTexture=V;const W=Ie.get(C);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||ye.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,N){const V=Ie.get(C);V.__webglFramebuffer=N,V.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(C,N=0,V=0){M=C,E=N,A=V;let W=!0,z=null,ce=!1,ve=!1;if(C){const Ae=Ie.get(C);Ae.__useDefaultFramebuffer!==void 0?(_e.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Ae.__webglFramebuffer===void 0?R.setupRenderTarget(C):Ae.__hasExternalTextures&&R.rebindTextures(C,Ie.get(C.texture).__webglTexture,Ie.get(C.depthTexture).__webglTexture);const Fe=C.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const Pe=Ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Pe[N])?z=Pe[N][V]:z=Pe[N],ce=!0):Re.isWebGL2&&C.samples>0&&R.useMultisampledRTT(C)===!1?z=Ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Pe)?z=Pe[V]:z=Pe,w.copy(C.viewport),I.copy(C.scissor),X=C.scissorTest}else w.copy(F).multiplyScalar(Y).floor(),I.copy($).multiplyScalar(Y).floor(),X=Z;if(_e.bindFramebuffer(k.FRAMEBUFFER,z)&&Re.drawBuffers&&W&&_e.drawBuffers(C,z),_e.viewport(w),_e.scissor(I),_e.setScissorTest(X),ce){const Ae=Ie.get(C.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,Ae.__webglTexture,V)}else if(ve){const Ae=Ie.get(C.texture),Fe=N||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ae.__webglTexture,V||0,Fe)}P=-1},this.readRenderTargetPixels=function(C,N,V,W,z,ce,ve){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=Ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){_e.bindFramebuffer(k.FRAMEBUFFER,Me);try{const Ae=C.texture,Fe=Ae.format,Pe=Ae.type;if(Fe!==di&&pe.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Pe===Xa&&(ye.has("EXT_color_buffer_half_float")||Re.isWebGL2&&ye.has("EXT_color_buffer_float"));if(Pe!==Pr&&pe.convert(Pe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Pe===_r&&(Re.isWebGL2||ye.has("OES_texture_float")||ye.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=C.width-W&&V>=0&&V<=C.height-z&&k.readPixels(N,V,W,z,pe.convert(Fe),pe.convert(Pe),ce)}finally{const Ae=M!==null?Ie.get(M).__webglFramebuffer:null;_e.bindFramebuffer(k.FRAMEBUFFER,Ae)}}},this.copyFramebufferToTexture=function(C,N,V=0){const W=Math.pow(2,-V),z=Math.floor(N.image.width*W),ce=Math.floor(N.image.height*W);R.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,V,0,0,C.x,C.y,z,ce),_e.unbindTexture()},this.copyTextureToTexture=function(C,N,V,W=0){const z=N.image.width,ce=N.image.height,ve=pe.convert(V.format),Me=pe.convert(V.type);R.setTexture2D(V,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,V.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,V.unpackAlignment),N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,C.x,C.y,z,ce,ve,Me,N.image.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,C.x,C.y,N.mipmaps[0].width,N.mipmaps[0].height,ve,N.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,C.x,C.y,ve,Me,N.image),W===0&&V.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),_e.unbindTexture()},this.copyTextureToTexture3D=function(C,N,V,W,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ce=C.max.x-C.min.x+1,ve=C.max.y-C.min.y+1,Me=C.max.z-C.min.z+1,Ae=pe.convert(W.format),Fe=pe.convert(W.type);let Pe;if(W.isData3DTexture)R.setTexture3D(W,0),Pe=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),Pe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Le=k.getParameter(k.UNPACK_ROW_LENGTH),St=k.getParameter(k.UNPACK_IMAGE_HEIGHT),wn=k.getParameter(k.UNPACK_SKIP_PIXELS),Nt=k.getParameter(k.UNPACK_SKIP_ROWS),Li=k.getParameter(k.UNPACK_SKIP_IMAGES),ct=V.isCompressedTexture?V.mipmaps[z]:V.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ct.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,C.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,C.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,C.min.z),V.isDataTexture||V.isData3DTexture?k.texSubImage3D(Pe,z,N.x,N.y,N.z,ce,ve,Me,Ae,Fe,ct.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Pe,z,N.x,N.y,N.z,ce,ve,Me,Ae,ct.data)):k.texSubImage3D(Pe,z,N.x,N.y,N.z,ce,ve,Me,Ae,Fe,ct),k.pixelStorei(k.UNPACK_ROW_LENGTH,Le),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,St),k.pixelStorei(k.UNPACK_SKIP_PIXELS,wn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Nt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Li),z===0&&W.generateMipmaps&&k.generateMipmap(Pe),_e.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?R.setTextureCube(C,0):C.isData3DTexture?R.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?R.setTexture2DArray(C,0):R.setTexture2D(C,0),_e.unbindTexture()},this.resetState=function(){E=0,A=0,M=null,_e.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fp?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===dc?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ot?ms:Bx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ms?Ot:Qi}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class x2 extends uy{}x2.prototype.isWebGL1Renderer=!0;class y2 extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Xu extends Br{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new B,h=new B,p=[],x=[],_=[],m=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let E=0;E<=t;E++){const A=E/t;d.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),d.y=e*Math.cos(o+v*a),d.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),x.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(A+y,1-v),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<t;g++){const v=c[f][g+1],y=c[f][g],E=c[f+1][g],A=c[f+1][g+1];(f!==0||o>0)&&p.push(v,y,A),(f!==i-1||l<Math.PI)&&p.push(y,E,A)}this.setIndex(p),this.setAttribute("position",new Pi(x,3)),this.setAttribute("normal",new Pi(_,3)),this.setAttribute("uv",new Pi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _g extends nl{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xe(16777215),this.specular=new Xe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hx,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const gg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class S2{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],x=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return x}return null}}}const M2=new S2;class _p{constructor(e){this.manager=e!==void 0?e:M2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_p.DEFAULT_MATERIAL_NAME="__DEFAULT";class E2 extends _p{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=gg.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=ja("img");function l(){c(),gg.add(e,this),t&&t(this),s.manager.itemEnd(e)}function u(d){c(),r&&r(d),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class T2 extends _p{constructor(e){super(e)}load(e,t,i,r){const s=new En,o=new E2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class cy extends Qt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Df=new Pt,vg=new B,xg=new B;class w2{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hp,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),xg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xg),t.updateMatrixWorld(),Df.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Df),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Df)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class A2 extends w2{constructor(){super(new ny(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yg extends cy{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new A2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class C2 extends cy{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);const R2=()=>{const n=bn.useRef(null);return bn.useEffect(()=>{if(!n.current)return;const e=n.current.clientWidth,t=n.current.clientHeight,i=new y2,r=new qn(45,e/t,.1,1e3);r.position.z=24;const s=new uy({alpha:!0,antialias:!0});s.setSize(e,t),s.setPixelRatio(Math.min(window.devicePixelRatio,2)),s.toneMapping=Lx,s.outputColorSpace=Ot,n.current.appendChild(s.domElement);const o=new sa;o.rotation.z=23.5*Math.PI/180,i.add(o);const a=new T2,l=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg"),u=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_specular_2048.jpg"),c=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_normal_2048.jpg"),d=a.load("https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_clouds_1024.png"),h=new Xu(8.5,128,128),p=new _g({map:l,specularMap:u,normalMap:c,normalScale:new Ye(.8,.8),specular:new Xe(9741240),shininess:18}),x=new wi(h,p);o.add(x);const _=new Xu(8.62,128,128),m=new _g({map:d,transparent:!0,opacity:.65,blending:ds,side:Ei,depthWrite:!1}),f=new wi(_,m);o.add(f);const g=new yg(16317180,2.5);g.position.set(12,6,12),i.add(g);const v=new C2(6583435,.65);i.add(v);const y=new yg(8490232,1.3);y.position.set(-12,4,-18),i.add(y);let E;const A=()=>{E=requestAnimationFrame(A),x.rotation.y+=.0012,f.rotation.y+=.0016,f.rotation.x+=4e-5,s.render(i,r)};A();const M=()=>{if(!n.current)return;const P=n.current.clientWidth,S=n.current.clientHeight;r.aspect=P/S,r.updateProjectionMatrix(),s.setSize(P,S)};return window.addEventListener("resize",M),()=>{cancelAnimationFrame(E),window.removeEventListener("resize",M),n.current&&(n.current.innerHTML=""),s.dispose(),h.dispose(),p.dispose(),_.dispose(),m.dispose()}},[]),oe.jsx("div",{ref:n,className:"fixed inset-0 w-full h-full flex items-center justify-center z-0 pointer-events-none opacity-85 transition-opacity duration-1000"})},P2=()=>{var o;const n=bn.useRef(null),e=bn.useRef(null),[t,i]=bn.useState(null),[r,s]=bn.useState(!0);return bn.useEffect(()=>{let a=!0,l;(async()=>{try{const h=await(await fetch(`https://api.lanyard.rest/v1/users/${Jc}`)).json();a&&h.success&&h.data&&(i(h.data),s(!1))}catch(d){console.error("Lanyard Error:",d),a&&s(!1)}})();const c=new WebSocket("wss://api.lanyard.rest/socket");return c.onmessage=d=>{var h;try{const p=JSON.parse(d.data);if(p.op===1){const x=((h=p.d)==null?void 0:h.heartbeat_interval)||3e4;l=setInterval(()=>{c.readyState===WebSocket.OPEN&&c.send(JSON.stringify({op:3}))},x),c.send(JSON.stringify({op:2,d:{subscribe_to_id:Jc}}))}else if(p.t==="INIT_STATE"||p.t==="PRESENCE_UPDATE"){const x=p.t==="INIT_STATE"&&p.d[Jc]||p.d;a&&x&&(i(x),s(!1))}}catch(p){console.error("Lanyard WS Error:",p)}},()=>{a=!1,l&&clearInterval(l),(c.readyState===WebSocket.OPEN||c.readyState===WebSocket.CONNECTING)&&c.close()}},[]),bn.useLayoutEffect(()=>{const a=zu.context(()=>{zu.fromTo(n.current,{opacity:0},{opacity:1,duration:1.2,ease:"power2.out"})},n);return()=>a.revert()},[]),oe.jsxs("div",{ref:n,className:"fixed inset-0 w-screen h-screen overflow-hidden bg-transparent text-white font-sans selection:bg-cyan-400 selection:text-black flex flex-col justify-center items-center p-4 sm:p-8 opacity-0",dir:"rtl",children:[oe.jsx(u1,{}),oe.jsx(R2,{}),oe.jsx("main",{className:"relative z-10 w-full max-w-[1040px] my-auto pointer-events-auto",children:oe.jsxs("div",{ref:e,className:"bg-[#11131a]/80 backdrop-blur-3xl p-6 sm:p-9 lg:p-10 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.85),inset_0_1px_1px_rgba(255,255,255,0.15)] border border-white/[0.1] relative overflow-hidden group/card transition-all duration-700 hover:border-white/[0.16]",children:[oe.jsx("div",{className:"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none"}),oe.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-white/[0.035] rounded-full blur-3xl pointer-events-none"}),oe.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/[0.035] rounded-full blur-3xl pointer-events-none"}),oe.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center relative z-10",children:[oe.jsxs("div",{className:"lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-right space-y-5",children:[oe.jsxs("div",{className:"flex flex-col sm:flex-row lg:flex-col items-center lg:items-start gap-4 sm:gap-6",children:[oe.jsxs("div",{className:"relative group/avatar",children:[oe.jsx("div",{className:"w-24 h-24 sm:w-28 sm:h-28 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.7)] bg-zinc-900 border border-white/20 transition-transform duration-300 group-hover/avatar:scale-105",children:(o=t==null?void 0:t.discord_user)!=null&&o.avatar?oe.jsx("img",{src:`https://cdn.discordapp.com/avatars/${t.discord_user.id}/${t.discord_user.avatar}.png?size=512`,alt:li.name,className:"w-full h-full object-cover"}):oe.jsx("div",{className:"w-full h-full flex items-center justify-center bg-zinc-900 text-zinc-400",children:oe.jsx("svg",{className:"w-9 h-9 text-zinc-400",fill:"none",stroke:"currentColor",strokeWidth:"1.5",viewBox:"0 0 24 24",children:oe.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"})})})}),oe.jsx("div",{className:`absolute -bottom-1 -left-1 w-4 h-4 rounded-full shadow-lg border-2 border-[#11131a] ${(t==null?void 0:t.discord_status)==="online"?"bg-emerald-400":(t==null?void 0:t.discord_status)==="dnd"?"bg-rose-500":(t==null?void 0:t.discord_status)==="idle"?"bg-amber-400":"bg-zinc-500"}`})]}),oe.jsxs("div",{className:"space-y-3 flex flex-col items-center lg:items-start",children:[oe.jsx("h1",{className:"text-4xl sm:text-5xl font-black tracking-tight text-white drop-shadow-md font-display",children:li.name}),oe.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/[0.06] hover:bg-white/[0.09] transition-all border border-white/15 rounded-xl shadow-sm",children:[oe.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),oe.jsx("span",{className:"text-xs font-normal text-zinc-300 tracking-wide",children:li.role})]})]})]}),oe.jsx("div",{className:"w-full pt-1.5",children:oe.jsx(f1,{data:t,loading:r})})]}),oe.jsx("div",{className:"lg:col-span-7 w-full flex flex-col",children:oe.jsx(d1,{items:c1})})]})]})})]})},fy=document.getElementById("root");if(!fy)throw new Error("Could not find root element to mount to");const b2=Nf.createRoot(fy);b2.render(oe.jsx(Lg.StrictMode,{children:oe.jsx(P2,{})}));
