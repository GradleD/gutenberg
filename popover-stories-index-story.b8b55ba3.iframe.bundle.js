/*! For license information please see popover-stories-index-story.b8b55ba3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8653],{"./node_modules/deepmerge/dist/cjs.js":module=>{var isMergeableObject=function isMergeableObject(value){return function isNonNullObject(value){return!!value&&"object"==typeof value}(value)&&!function isSpecial(value){var stringValue=Object.prototype.toString.call(value);return"[object RegExp]"===stringValue||"[object Date]"===stringValue||function isReactElement(value){return value.$$typeof===REACT_ELEMENT_TYPE}(value)}(value)};var REACT_ELEMENT_TYPE="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function cloneUnlessOtherwiseSpecified(value,options){return!1!==options.clone&&options.isMergeableObject(value)?deepmerge(function emptyTarget(val){return Array.isArray(val)?[]:{}}(value),value,options):value}function defaultArrayMerge(target,source,options){return target.concat(source).map((function(element){return cloneUnlessOtherwiseSpecified(element,options)}))}function getKeys(target){return Object.keys(target).concat(function getEnumerableOwnPropertySymbols(target){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(target).filter((function(symbol){return Object.propertyIsEnumerable.call(target,symbol)})):[]}(target))}function propertyIsOnObject(object,property){try{return property in object}catch(_){return!1}}function mergeObject(target,source,options){var destination={};return options.isMergeableObject(target)&&getKeys(target).forEach((function(key){destination[key]=cloneUnlessOtherwiseSpecified(target[key],options)})),getKeys(source).forEach((function(key){(function propertyIsUnsafe(target,key){return propertyIsOnObject(target,key)&&!(Object.hasOwnProperty.call(target,key)&&Object.propertyIsEnumerable.call(target,key))})(target,key)||(propertyIsOnObject(target,key)&&options.isMergeableObject(source[key])?destination[key]=function getMergeFunction(key,options){if(!options.customMerge)return deepmerge;var customMerge=options.customMerge(key);return"function"==typeof customMerge?customMerge:deepmerge}(key,options)(target[key],source[key],options):destination[key]=cloneUnlessOtherwiseSpecified(source[key],options))})),destination}function deepmerge(target,source,options){(options=options||{}).arrayMerge=options.arrayMerge||defaultArrayMerge,options.isMergeableObject=options.isMergeableObject||isMergeableObject,options.cloneUnlessOtherwiseSpecified=cloneUnlessOtherwiseSpecified;var sourceIsArray=Array.isArray(source);return sourceIsArray===Array.isArray(target)?sourceIsArray?options.arrayMerge(target,source,options):mergeObject(target,source,options):cloneUnlessOtherwiseSpecified(source,options)}deepmerge.all=function deepmergeAll(array,options){if(!Array.isArray(array))throw new Error("first argument should be an array");return array.reduce((function(prev,next){return deepmerge(prev,next,options)}),{})};var deepmerge_1=deepmerge;module.exports=deepmerge_1},"./node_modules/fast-deep-equal/es6/index.js":module=>{module.exports=function equal(a,b){if(a===b)return!0;if(a&&b&&"object"==typeof a&&"object"==typeof b){if(a.constructor!==b.constructor)return!1;var length,i,keys;if(Array.isArray(a)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(!equal(a[i],b[i]))return!1;return!0}if(a instanceof Map&&b instanceof Map){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;for(i of a.entries())if(!equal(i[1],b.get(i[0])))return!1;return!0}if(a instanceof Set&&b instanceof Set){if(a.size!==b.size)return!1;for(i of a.entries())if(!b.has(i[0]))return!1;return!0}if(ArrayBuffer.isView(a)&&ArrayBuffer.isView(b)){if((length=a.length)!=b.length)return!1;for(i=length;0!=i--;)if(a[i]!==b[i])return!1;return!0}if(a.constructor===RegExp)return a.source===b.source&&a.flags===b.flags;if(a.valueOf!==Object.prototype.valueOf)return a.valueOf()===b.valueOf();if(a.toString!==Object.prototype.toString)return a.toString()===b.toString();if((length=(keys=Object.keys(a)).length)!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){var key=keys[i];if(!equal(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}},"./node_modules/is-plain-object/dist/is-plain-object.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function isObject(o){return"[object Object]"===Object.prototype.toString.call(o)}function isPlainObject(o){var ctor,prot;return!1!==isObject(o)&&(void 0===(ctor=o.constructor)||!1!==isObject(prot=ctor.prototype)&&!1!==prot.hasOwnProperty("isPrototypeOf"))}__webpack_require__.d(__webpack_exports__,{Q:()=>isPlainObject})},"./packages/components/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{UE:()=>arrow,we:()=>useFloating});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js");const arrow=options=>({name:"arrow",options,fn(state){const{element,padding}="function"==typeof options?options(state):options;return element&&function isRef(value){return{}.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.UE)({element:element.current,padding}).fn(state):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.UE)({element,padding}).fn(state):{}}});var index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!{}.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function getDPR(element){if("undefined"==typeof window)return 1;return(element.ownerDocument.defaultView||window).devicePixelRatio||1}function roundByDPR(element,value){const dpr=getDPR(element);return Math.round(value*dpr)/dpr}function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}function useFloating(options){void 0===options&&(options={});const{placement="bottom",strategy="absolute",middleware=[],platform,elements:{reference:externalReference,floating:externalFloating}={},transform=!0,whileElementsMounted,open}=options,[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:0,y:0,strategy,placement,middlewareData:{},isPositioned:!1}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(latestMiddleware,middleware)||setLatestMiddleware(middleware);const[_reference,_setReference]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[_floating,_setFloating]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!=referenceRef.current&&(referenceRef.current=node,_setReference(node))}),[_setReference]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{node!==floatingRef.current&&(floatingRef.current=node,_setFloating(node))}),[_setFloating]),referenceEl=externalReference||_reference,floatingEl=externalFloating||_floating,referenceRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floatingRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=useLatestRef(whileElementsMounted),platformRef=useLatestRef(platform),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if(!referenceRef.current||!floatingRef.current)return;const config={placement,strategy,middleware:latestMiddleware};platformRef.current&&(config.platform=platformRef.current),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.rD)(referenceRef.current,floatingRef.current,config).then((data=>{const fullData={...data,isPositioned:!0};isMountedRef.current&&!deepEqual(dataRef.current,fullData)&&(dataRef.current=fullData,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(fullData)})))}))}),[latestMiddleware,placement,strategy,platformRef]);index((()=>{!1===open&&dataRef.current.isPositioned&&(dataRef.current.isPositioned=!1,setData((data=>({...data,isPositioned:!1}))))}),[open]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]),index((()=>{if(referenceEl&&(referenceRef.current=referenceEl),floatingEl&&(floatingRef.current=floatingEl),referenceEl&&floatingEl){if(whileElementsMountedRef.current)return whileElementsMountedRef.current(referenceEl,floatingEl,update);update()}}),[referenceEl,floatingEl,update,whileElementsMountedRef]);const refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceRef,floating:floatingRef,setReference,setFloating})),[setReference,setFloating]),elements=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:referenceEl,floating:floatingEl})),[referenceEl,floatingEl]),floatingStyles=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>{const initialStyles={position:strategy,left:0,top:0};if(!elements.floating)return initialStyles;const x=roundByDPR(elements.floating,data.x),y=roundByDPR(elements.floating,data.y);return transform?{...initialStyles,transform:"translate("+x+"px, "+y+"px)",...getDPR(elements.floating)>=1.5&&{willChange:"transform"}}:{position:strategy,left:x,top:y}}),[strategy,transform,elements.floating,data.x,data.y]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update,refs,elements,floatingStyles})),[data,update,refs,elements,floatingStyles])}},"./packages/components/node_modules/uuid/dist/esm-browser/v4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var getRandomValues;__webpack_require__.d(__webpack_exports__,{A:()=>esm_browser_v4});var rnds8=new Uint8Array(16);function rng(){if(!getRandomValues&&!(getRandomValues="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return getRandomValues(rnds8)}const regex=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const esm_browser_validate=function validate(uuid){return"string"==typeof uuid&&regex.test(uuid)};for(var byteToHex=[],i=0;i<256;++i)byteToHex.push((i+256).toString(16).substr(1));const esm_browser_stringify=function stringify(arr){var offset=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,uuid=(byteToHex[arr[offset+0]]+byteToHex[arr[offset+1]]+byteToHex[arr[offset+2]]+byteToHex[arr[offset+3]]+"-"+byteToHex[arr[offset+4]]+byteToHex[arr[offset+5]]+"-"+byteToHex[arr[offset+6]]+byteToHex[arr[offset+7]]+"-"+byteToHex[arr[offset+8]]+byteToHex[arr[offset+9]]+"-"+byteToHex[arr[offset+10]]+byteToHex[arr[offset+11]]+byteToHex[arr[offset+12]]+byteToHex[arr[offset+13]]+byteToHex[arr[offset+14]]+byteToHex[arr[offset+15]]).toLowerCase();if(!esm_browser_validate(uuid))throw TypeError("Stringified UUID is invalid");return uuid};const esm_browser_v4=function v4(options,buf,offset){var rnds=(options=options||{}).random||(options.rng||rng)();if(rnds[6]=15&rnds[6]|64,rnds[8]=63&rnds[8]|128,buf){offset=offset||0;for(var i=0;i<16;++i)buf[offset+i]=rnds[i];return buf}return esm_browser_stringify(rnds)}},"./packages/components/src/popover/stories/index.story.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllPlacements:()=>AllPlacements,Default:()=>Default,DynamicHeight:()=>DynamicHeight,Unstyled:()=>Unstyled,WithSlotOutsideIframe:()=>WithSlotOutsideIframe,default:()=>index_story});var react=__webpack_require__("./node_modules/react/index.js"),src_button=__webpack_require__("./packages/components/src/button/index.tsx"),popover=__webpack_require__("./packages/components/src/popover/index.tsx"),react_dom=__webpack_require__("./node_modules/react-dom/index.js"),slot_fill=__webpack_require__("./packages/components/src/slot-fill/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const GenericIframe=({children,...props})=>{const[containerNode,setContainerNode]=(0,react.useState)();return(0,jsx_runtime.jsx)("iframe",{...props,title:"My Iframe",srcDoc:"<!doctype html><html><body></body></html>",onLoad:event=>{event.currentTarget.contentDocument&&setContainerNode(event.currentTarget.contentDocument.body)},children:containerNode&&(0,react_dom.createPortal)(children,containerNode)})};GenericIframe.displayName="GenericIframe";const PopoverInsideIframeRenderedInExternalSlot=props=>{const[anchorRef,setAnchorRef]=(0,react.useState)(null);return(0,jsx_runtime.jsxs)(slot_fill.Kq,{children:[(0,jsx_runtime.jsx)(popover.Ay.Slot,{name:"my-slot"}),(0,jsx_runtime.jsx)(GenericIframe,{style:{width:"100%",height:"400px",border:"0",outline:"1px solid purple"},children:(0,jsx_runtime.jsxs)("div",{style:{height:"200vh",paddingTop:"10vh"},children:[(0,jsx_runtime.jsx)("p",{style:{padding:"8px",background:"salmon",maxWidth:"200px",marginTop:"100px",marginLeft:"auto",marginRight:"auto"},ref:setAnchorRef,children:"Popover's anchor"}),(0,jsx_runtime.jsx)(popover.Ay,{...props,__unstableSlotName:"my-slot",anchor:anchorRef})]})})]})};PopoverInsideIframeRenderedInExternalSlot.displayName="PopoverInsideIframeRenderedInExternalSlot";try{PopoverInsideIframeRenderedInExternalSlot.displayName="PopoverInsideIframeRenderedInExternalSlot",PopoverInsideIframeRenderedInExternalSlot.__docgenInfo={description:"",displayName:"PopoverInsideIframeRenderedInExternalSlot",props:{animate:{defaultValue:{value:"true"},description:"Whether the popover should animate when opening.",name:"animate",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The `children` elements rendered as the popover's content.",name:"children",required:!0,type:{name:"ReactNode"}},inline:{defaultValue:{value:"false"},description:"Whether to render the popover inline or within the slot.",name:"inline",required:!1,type:{name:"boolean"}},offset:{defaultValue:null,description:"The distance (in px) between the anchor and the popover.",name:"offset",required:!1,type:{name:"number"}},onClose:{defaultValue:null,description:"A callback invoked when the popover should be closed.",name:"onClose",required:!1,type:{name:"() => void"}},anchor:{defaultValue:null,description:"The element that should be used by the popover as its anchor. It can either\nbe an `Element` or, alternatively, a `VirtualElement` — ie. an object with\nthe `getBoundingClientRect()` and the `ownerDocument` properties defined.\n\n**The anchor element should be stored in local state** rather than a\nplain React ref to ensure reactive updating when it changes.",name:"anchor",required:!1,type:{name:"Element | VirtualElement"}},variant:{defaultValue:{value:"undefined"},description:"Specifies the popover's style.\n\nLeave undefined for the default style. Other values are:\n- 'unstyled':  The popover is essentially without any visible style, it\n               has no background, border, outline or drop shadow, but\n               the popover contents are still displayed.\n- 'toolbar':   A style that has no elevation, but a high contrast with\n               other elements. This is matches the style of the\n               `Toolbar` component.",name:"variant",required:!1,type:{name:"enum",value:[{value:'"toolbar"'},{value:'"unstyled"'}]}},placement:{defaultValue:{value:"'bottom-start'"},description:"Used to specify the popover's position with respect to its anchor.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left-end"'},{value:'"left-start"'},{value:'"right-end"'},{value:'"right-start"'},{value:'"top-end"'},{value:'"top-start"'},{value:'"bottom-end"'},{value:'"bottom-start"'},{value:'"overlay"'}]}},position:{defaultValue:null,description:"Legacy way to specify the popover's position with respect to its anchor.\n_Note: this prop is deprecated. Use the `placement` prop instead._",name:"position",required:!1,type:{name:"enum",value:[{value:'"middle"'},{value:'"top"'},{value:'"bottom"'},{value:'"middle center"'},{value:'"middle left"'},{value:'"middle right"'},{value:'"top center"'},{value:'"top left"'},{value:'"top right"'},{value:'"bottom center"'},{value:'"bottom left"'},{value:'"bottom right"'},{value:'"middle center left"'},{value:'"middle center right"'},{value:'"middle center top"'},{value:'"middle center bottom"'},{value:'"middle left left"'},{value:'"middle left right"'},{value:'"middle left top"'},{value:'"middle left bottom"'},{value:'"middle right left"'},{value:'"middle right right"'},{value:'"middle right top"'},{value:'"middle right bottom"'},{value:'"top center left"'},{value:'"top center right"'},{value:'"top center top"'},{value:'"top center bottom"'},{value:'"top left left"'},{value:'"top left right"'},{value:'"top left top"'},{value:'"top left bottom"'},{value:'"top right left"'},{value:'"top right right"'},{value:'"top right top"'},{value:'"top right bottom"'},{value:'"bottom center left"'},{value:'"bottom center right"'},{value:'"bottom center top"'},{value:'"bottom center bottom"'},{value:'"bottom left left"'},{value:'"bottom left right"'},{value:'"bottom left top"'},{value:'"bottom left bottom"'},{value:'"bottom right left"'},{value:'"bottom right right"'},{value:'"bottom right top"'},{value:'"bottom right bottom"'}]}},resize:{defaultValue:{value:"true"},description:"Adjusts the size of the popover to prevent its contents from going out of\nview when meeting the viewport edges.",name:"resize",required:!1,type:{name:"boolean"}},shift:{defaultValue:{value:"false"},description:"Enables the `Popover` to shift in order to stay in view when meeting the\nviewport edges.",name:"shift",required:!1,type:{name:"boolean"}},__unstableSlotName:{defaultValue:{value:"'Popover'"},description:"The name of the Slot in which the popover should be rendered. It should\nbe also passed to the corresponding `PopoverSlot` component.",name:"__unstableSlotName",required:!1,type:{name:"string"}},expandOnMobile:{defaultValue:null,description:"Show the popover fullscreen on mobile viewports.",name:"expandOnMobile",required:!1,type:{name:"boolean"}},flip:{defaultValue:{value:"true"},description:"Specifies whether the popover should flip across its axis if there isn't\nspace for it in the normal placement.\nWhen the using a 'top' placement, the popover will switch to a 'bottom'\nplacement. When using a 'left' placement, the popover will switch to a\n`right' placement.\nThe popover will retain its alignment of 'start' or 'end' when flipping.",name:"flip",required:!1,type:{name:"boolean"}},constrainTabbing:{defaultValue:{value:"`focusOnMount` !== false"},description:"Determines whether tabbing is constrained to within the popover,\npreventing keyboard focus from leaving the popover content without\nexplicit focus elswhere, or whether the popover remains part of the wider\ntab order. If no value is passed, it will be derived from `focusOnMount`.",name:"constrainTabbing",required:!1,type:{name:"boolean"}},focusOnMount:{defaultValue:{value:"'firstElement'"},description:'By default, the _first tabbable element_ in the popover will receive focus\nwhen it mounts. This is the same as setting this prop to `"firstElement"`.\nSpecifying a `false` value disables the focus handling entirely (this\nshould only be done when an appropriately accessible substitute behavior\nexists).',name:"focusOnMount",required:!1,type:{name:'boolean | "firstElement"'}},onFocusOutside:{defaultValue:null,description:"A callback invoked when the focus leaves the opened popover. This should\nonly be provided in advanced use-cases when a popover should close under\nspecific circumstances (for example, if the new `document.activeElement`\nis content of or otherwise controlling popover visibility).\n\nWhen not provided, the `onClose` callback will be called instead.",name:"onFocusOutside",required:!1,type:{name:"(event: SyntheticEvent<Element, Event>) => void"}},headerTitle:{defaultValue:null,description:"Used to customize the header text shown when the popover is toggled to\nfullscreen on mobile viewports (see the `expandOnMobile` prop).",name:"headerTitle",required:!1,type:{name:"string"}},noArrow:{defaultValue:{value:"true"},description:"Used to show/hide the arrow that points at the popover's anchor.",name:"noArrow",required:!1,type:{name:"boolean"}},__unstableForcePosition:{defaultValue:null,description:"Prevent the popover from flipping and resizing when meeting the viewport\nedges. _Note: this prop is deprecated. Instead, provide use the individual\n`flip` and `resize` props._\n@deprecated",name:"__unstableForcePosition",required:!1,type:{name:"boolean"}},anchorRect:{defaultValue:null,description:"An object extending a `DOMRect` with an additional optional `ownerDocument`\nproperty, used to specify a fixed popover position.\n@deprecated",name:"anchorRect",required:!1,type:{name:"DomRectWithOwnerDocument"}},anchorRef:{defaultValue:null,description:"Used to specify a fixed popover position. It can be an `Element`, a React\nreference to an `element`, an object with a `top` and a `bottom` properties\n(both pointing to elements), or a `range`.\n@deprecated",name:"anchorRef",required:!1,type:{name:"Element | PopoverAnchorRefReference | PopoverAnchorRefTopBottom | Range"}},getAnchorRect:{defaultValue:null,description:"A function returning the same value as the one expected by the `anchorRect`\nprop, used to specify a dynamic popover position.\n@deprecated",name:"getAnchorRect",required:!1,type:{name:"(fallbackReferenceElement: Element) => DomRectWithOwnerDocument"}},isAlternate:{defaultValue:null,description:"Used to enable a different visual style for the popover.\n_Note: this prop is deprecated. Use the `variant` prop with the\n'toolbar' value instead._\n@deprecated",name:"isAlternate",required:!1,type:{name:"boolean"}},as:{defaultValue:null,description:"The HTML element or React component to render the component as.",name:"as",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/popover/test/utils/index.tsx#PopoverInsideIframeRenderedInExternalSlot"]={docgenInfo:PopoverInsideIframeRenderedInExternalSlot.__docgenInfo,name:"PopoverInsideIframeRenderedInExternalSlot",path:"packages/components/src/popover/test/utils/index.tsx#PopoverInsideIframeRenderedInExternalSlot"})}catch(__react_docgen_typescript_loader_error){}const AVAILABLE_PLACEMENTS=["top","top-start","top-end","right","right-start","right-end","bottom","bottom-start","bottom-end","left","left-start","left-end","overlay"],index_story={title:"Components/Overlays/Popover",id:"components-popover",component:popover.AM,argTypes:{anchor:{control:{type:null}},anchorRef:{control:{type:null}},anchorRect:{control:{type:null}},children:{control:{type:null}},focusOnMount:{control:{type:"select"},options:["firstElement",!0,!1]},getAnchorRect:{control:{type:null}},onClose:{action:"onClose"},onFocusOutside:{action:"onFocusOutside"},__unstableSlotName:{control:{type:null}}},parameters:{sourceLink:"packages/components/src/popover",badges:[],controls:{expanded:!0}}},PopoverWithAnchor=args=>{const anchorRef=(0,react.useRef)(null);return(0,jsx_runtime.jsxs)("div",{style:{height:"200px",display:"flex",justifyContent:"center",alignItems:"center"},children:[(0,jsx_runtime.jsx)("p",{style:{padding:"8px",background:"salmon"},ref:anchorRef,children:"Popover's anchor"}),(0,jsx_runtime.jsx)(popover.AM,{...args,anchorRef})]})};PopoverWithAnchor.displayName="PopoverWithAnchor";const Default={decorators:[Story=>{const[isVisible,setIsVisible]=(0,react.useState)(!1),buttonRef=(0,react.useRef)();return(0,react.useEffect)((()=>{buttonRef.current?.scrollIntoView?.({block:"center",inline:"center"})}),[]),(0,jsx_runtime.jsx)("div",{style:{width:"300vw",height:"300vh",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,jsx_runtime.jsxs)(src_button.Ay,{variant:"secondary",onClick:()=>{setIsVisible((state=>!state))},ref:buttonRef,children:["Toggle Popover",isVisible&&(0,jsx_runtime.jsx)(Story,{})]})})}],args:{children:(0,jsx_runtime.jsx)("div",{style:{width:"280px",whiteSpace:"normal"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."})}},Unstyled={...Default,args:{...Default.args,variant:"unstyled"}},AllPlacements={render:({children,...args})=>(0,jsx_runtime.jsxs)("div",{style:{minWidth:"600px",marginLeft:"auto",marginRight:"auto"},children:[(0,jsx_runtime.jsx)("h2",{children:"Resize / scroll the viewport to test the behavior of the popovers when they reach the viewport boundaries."}),(0,jsx_runtime.jsx)("div",{children:AVAILABLE_PLACEMENTS.map((p=>(0,jsx_runtime.jsxs)(PopoverWithAnchor,{placement:p,...args,resize:"overlay"===p||args.resize,children:[children,(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsxs)("small",{children:["(placement: ",p,")"]})})]},p)))})]}),parameters:{controls:{exclude:["placement","position"]}},args:{...Default.args,children:(0,jsx_runtime.jsx)("div",{style:{width:"280px",whiteSpace:"normal"},children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),noArrow:!1,offset:10,resize:!1,flip:!1}},DynamicHeight={decorators:[Story=>{const[height,setHeight]=(0,react.useState)(200);return(0,jsx_runtime.jsxs)("div",{style:{padding:"20px"},children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(src_button.Ay,{variant:"primary",onClick:()=>setHeight(height+100),style:{marginRight:"20px"},children:"Increase Size"}),(0,jsx_runtime.jsx)(src_button.Ay,{variant:"primary",onClick:()=>setHeight(height-100),children:"Decrease Size"})]}),(0,jsx_runtime.jsx)("p",{children:"When the height of the popover exceeds the available space in the canvas, a scrollbar inside the popover should appear."}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("style",{children:`.components-popover { --dynamic-height: ${height}px; }`}),(0,jsx_runtime.jsx)(Story,{})]})]})}],args:{...Default.args,children:(0,jsx_runtime.jsx)("div",{style:{height:"var(--dynamic-height)",background:"#eee",padding:"20px"},children:"Content with dynamic height"})}},WithSlotOutsideIframe={render:args=>(0,jsx_runtime.jsx)(PopoverInsideIframeRenderedInExternalSlot,{...args}),args:{...Default.args}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => {\n    const [isVisible, setIsVisible] = useState(false);\n    const toggleVisible = () => {\n      setIsVisible(state => !state);\n    };\n    const buttonRef = useRef<HTMLButtonElement | undefined>();\n    useEffect(() => {\n      buttonRef.current?.scrollIntoView?.({\n        block: 'center',\n        inline: 'center'\n      });\n    }, []);\n    return <div style={{\n      width: '300vw',\n      height: '300vh',\n      display: 'flex',\n      alignItems: 'center',\n      justifyContent: 'center'\n    }}>\n                    <Button variant=\"secondary\" onClick={toggleVisible} ref={buttonRef}>\n                        Toggle Popover\n                        {isVisible && <Story />}\n                    </Button>\n                </div>;\n  }],\n  args: {\n    children: <div style={{\n      width: '280px',\n      whiteSpace: 'normal'\n    }}>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n                enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat.\n            </div>\n  }\n}",...Default.parameters?.docs?.source}}},Unstyled.parameters={...Unstyled.parameters,docs:{...Unstyled.parameters?.docs,source:{originalSource:"{\n  ...Default,\n  args: {\n    ...Default.args,\n    variant: 'unstyled'\n  }\n}",...Unstyled.parameters?.docs?.source}}},AllPlacements.parameters={...AllPlacements.parameters,docs:{...AllPlacements.parameters?.docs,source:{originalSource:"{\n  render: ({\n    children,\n    ...args\n  }) => <div style={{\n    minWidth: '600px',\n    marginLeft: 'auto',\n    marginRight: 'auto'\n  }}>\n            <h2>\n                Resize / scroll the viewport to test the behavior of the\n                popovers when they reach the viewport boundaries.\n            </h2>\n            <div>\n                {AVAILABLE_PLACEMENTS.map(p => <PopoverWithAnchor key={p} placement={p} {...args} resize={p === 'overlay' ? true : args.resize}>\n                        {children}\n                        <div>\n                            <small>(placement: {p})</small>\n                        </div>\n                    </PopoverWithAnchor>)}\n            </div>\n        </div>,\n  // Excluding placement and position since they all possible values\n  // are passed directly in code.\n  parameters: {\n    controls: {\n      exclude: ['placement', 'position']\n    }\n  },\n  args: {\n    ...Default.args,\n    children: <div style={{\n      width: '280px',\n      whiteSpace: 'normal'\n    }}>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n                eiusmod tempor incididunt ut labore et dolore magna aliqua.\n            </div>,\n    noArrow: false,\n    offset: 10,\n    resize: false,\n    flip: false\n  }\n}",...AllPlacements.parameters?.docs?.source}}},DynamicHeight.parameters={...DynamicHeight.parameters,docs:{...DynamicHeight.parameters?.docs,source:{originalSource:"{\n  decorators: [Story => {\n    const [height, setHeight] = useState(200);\n    const increase = () => setHeight(height + 100);\n    const decrease = () => setHeight(height - 100);\n    return <div style={{\n      padding: '20px'\n    }}>\n                    <div>\n                        <Button variant=\"primary\" onClick={increase} style={{\n          marginRight: '20px'\n        }}>\n                            Increase Size\n                        </Button>\n\n                        <Button variant=\"primary\" onClick={decrease}>\n                            Decrease Size\n                        </Button>\n                    </div>\n\n                    <p>\n                        When the height of the popover exceeds the available\n                        space in the canvas, a scrollbar inside the popover\n                        should appear.\n                    </p>\n\n                    <div>\n                        <style>{`.components-popover { --dynamic-height: ${height}px; }`}</style>\n                        <Story />\n                    </div>\n                </div>;\n  }],\n  args: {\n    ...Default.args,\n    children: <div style={{\n      height: 'var(--dynamic-height)',\n      background: '#eee',\n      padding: '20px'\n    }}>\n                Content with dynamic height\n            </div>\n  }\n}",...DynamicHeight.parameters?.docs?.source}}},WithSlotOutsideIframe.parameters={...WithSlotOutsideIframe.parameters,docs:{...WithSlotOutsideIframe.parameters?.docs,source:{originalSource:"{\n  render: args => <PopoverInsideIframeRenderedInExternalSlot {...args} />,\n  args: {\n    ...Default.args\n  }\n}",...WithSlotOutsideIframe.parameters?.docs?.source}}}}}]);