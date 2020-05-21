//<![CDATA[
;window.CloudflareApps=window.CloudflareApps||{};CloudflareApps.siteId="8b143c633b96aceca313517e929b3d61";CloudflareApps.installs=CloudflareApps.installs||{};;(function(){'use strict'
CloudflareApps.internal=CloudflareApps.internal||{}
var errors=[]
CloudflareApps.internal.placementErrors=errors
var errorHashes={}
function noteError(options){var hash=options.selector+'::'+options.type+'::'+(options.installId||'')
if(errorHashes[hash]){return}
errorHashes[hash]=true
errors.push(options)}
var initializedSelectors={}
var currentInit=false
CloudflareApps.internal.markSelectors=function markSelectors(){if(!currentInit){check()
currentInit=true
setTimeout(function(){currentInit=false})}}
function check(){var installs=window.CloudflareApps.installs
for(var installId in installs){if(!installs.hasOwnProperty(installId)){continue}
var selectors=installs[installId].selectors
if(!selectors){continue}
for(var key in selectors){if(!selectors.hasOwnProperty(key)){continue}
var hash=installId+'::'+key
if(initializedSelectors[hash]){continue}
var els=document.querySelectorAll(selectors[key])
if(els&&els.length>1){noteError({type:'init:too-many',option:key,selector:selectors[key],installId:installId})
initializedSelectors[hash]=true
continue}else if(!els||!els.length){continue}
initializedSelectors[hash]=true
els[0].setAttribute('cfapps-selector',selectors[key])}}}
CloudflareApps.querySelector=function querySelector(selector){if(selector==='body'||selector==='head'){return document[selector]}
CloudflareApps.internal.markSelectors()
var els=document.querySelectorAll('[cfapps-selector="'+selector+'"]')
if(!els||!els.length){noteError({type:'select:not-found:by-attribute',selector:selector})
els=document.querySelectorAll(selector)
if(!els||!els.length){noteError({type:'select:not-found:by-query',selector:selector})
return null}else if(els.length>1){noteError({type:'select:too-many:by-query',selector:selector})}
return els[0]}
if(els.length>1){noteError({type:'select:too-many:by-attribute',selector:selector})}
return els[0]}}());(function(){'use strict'
var prevEls={}
CloudflareApps.createElement=function createElement(options,prevEl){options=options||{}
CloudflareApps.internal.markSelectors()
try{if(prevEl&&prevEl.parentNode){var replacedEl
if(prevEl.cfAppsElementId){replacedEl=prevEls[prevEl.cfAppsElementId]}
if(replacedEl){prevEl.parentNode.replaceChild(replacedEl,prevEl)
delete prevEls[prevEl.cfAppsElementId]}else{prevEl.parentNode.removeChild(prevEl)}}
var element=document.createElement('cloudflare-app')
var container
if(options.pages&&options.pages.URLPatterns&&!CloudflareApps.matchPage(options.pages.URLPatterns)){return element}
try{container=CloudflareApps.querySelector(options.selector)}catch(e){}
if(!container){return element}
if(!container.parentNode&&(options.method==='after'||options.method==='before'||options.method==='replace')){return element}
if(container===document.body){if(options.method==='after'){options.method='append'}else if(options.method==='before'){options.method='prepend'}}
switch(options.method){case'prepend':if(container.firstChild){container.insertBefore(element,container.firstChild)
break}
case'append':container.appendChild(element)
break
case'after':if(container.nextSibling){container.parentNode.insertBefore(element,container.nextSibling)}else{container.parentNode.appendChild(element)}
break
case'before':container.parentNode.insertBefore(element,container)
break
case'replace':try{var id=element.cfAppsElementId=Math.random().toString(36)
prevEls[id]=container}catch(e){}
container.parentNode.replaceChild(element,container)}
return element}catch(e){if(typeof console!=='undefined'&&typeof console.error!=='undefined'){console.error('Error creating Cloudflare Apps element',e)}}}}());(function(){'use strict'
CloudflareApps.matchPage=function matchPage(patterns){if(!patterns||!patterns.length){return true}
var loc=document.location.host+document.location.pathname
if(window.CloudflareApps&&CloudflareApps.proxy&&CloudflareApps.proxy.originalURL){var url=CloudflareApps.proxy.originalURL.parsed
loc=url.host+url.path}
for(var i=0;i<patterns.length;i++){var re=new RegExp(patterns[i],'i')
if(re.test(loc)){return true}}
return false}}());CloudflareApps.installs["BIHsGbVcJWqT"]={appId:"0n-Tbk3FbOG8",scope:{}};;CloudflareApps.installs["BIHsGbVcJWqT"].options={};;CloudflareApps.installs["BIHsGbVcJWqT"].URLPatterns=["^demowatermark.blogspot.com/?.*$","^demowatermark.blogspot.com/?.*$"];;CloudflareApps.installs["KpuFtvJE4HsR"]={appId:"mKZRW4xoYN4A",scope:{}};;CloudflareApps.installs["KpuFtvJE4HsR"].options={"advanced":{"location":"body","minHeight":100,"minWidth":100},"opacity":100,"position":"lowerLeft","showAdvanced":true,"text":"Tulisan Watermark","textColor":"#ff0000","textSize":"20"};;CloudflareApps.installs["KpuFtvJE4HsR"].URLPatterns=["^demowatermark.blogspot.com/?.*$","^demowatermark.blogspot.com/?.*$"];;CloudflareApps.installs["KpuFtvJE4HsR"].selectors={"advanced.location":"body"};;CloudflareApps.installs["KpuFtvJE4HsR"].product={"id":"plus"};;if(CloudflareApps.matchPage(CloudflareApps.installs['KpuFtvJE4HsR'].URLPatterns)){(function webpackUniversalModuleDefinition(root,factory){if(typeof exports==='object'&&typeof module==='object'){module.exports=factory();}else if(typeof define==='function'&&define.amd){define([],factory);}else if(typeof exports==='object'){exports["watermark"]=factory();}else{root["watermark"]=factory();}})(this,function(){return(function(modules){var installedModules={};function __webpack_require__(moduleId){if(installedModules[moduleId])
{return installedModules[moduleId].exports;}
var module=installedModules[moduleId]={exports:{},id:moduleId,loaded:false};modules[moduleId].call(module.exports,module,module.exports,__webpack_require__);module.loaded=true;return module.exports;}
__webpack_require__.m=modules;__webpack_require__.c=installedModules;__webpack_require__.p="";return __webpack_require__(0);})
([function(module,exports,__webpack_require__){__webpack_require__(1);module.exports=__webpack_require__(2).default;},function(module,exports){"use strict";exports.__esModule=true;exports["default"]=function(){};module.exports=exports["default"];},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.default=watermark;var _image=__webpack_require__(3);var _canvas=__webpack_require__(5);var _blob=__webpack_require__(6);var _style=__webpack_require__(7);var style=_interopRequireWildcard(_style);var _object=__webpack_require__(10);var _pool=__webpack_require__(11);var _pool2=_interopRequireDefault(_pool);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}
function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){newObj[key]=obj[key];}}}
newObj.default=obj;return newObj;}}
var defaults={init:function init(){}};function mergeOptions(options){return(0,_object.extend)((0,_object.clone)(defaults),options);}
function release(result,pool){var canvas=result.canvas;var sources=result.sources;var dataURL=(0,_canvas.dataUrl)(canvas);sources.forEach(pool.release);return dataURL;}
function watermark(resources){var options=arguments.length<=1||arguments[1]===undefined?{}:arguments[1];var promise=arguments.length<=2||arguments[2]===undefined?null:arguments[2];var opts=mergeOptions(options);promise||(promise=(0,_image.load)(resources,opts.init));return{dataUrl:function dataUrl(draw){var promise=this.then(function(images){return(0,_image.mapToCanvas)(images,_pool2.default);}).then(function(canvases){return style.result(draw,canvases);}).then(function(result){return release(result,_pool2.default);});return watermark(resources,opts,promise);},load:function load(resources,init){var promise=this.then(function(resource){return(0,_image.load)([resource].concat(resources),init);});return watermark(resources,opts,promise);},render:function render(){var promise=this.then(function(resource){return(0,_image.load)([resource]);});return watermark(resources,opts,promise);},blob:function blob(draw){var promise=this.dataUrl(draw).then(_blob.blob);return watermark(resources,opts,promise);},image:function image(draw){var promise=this.dataUrl(draw).then(_image.createImage);return watermark(resources,opts,promise);},then:function then(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}
return promise.then.apply(promise,funcs);}};};watermark.image=style.image;watermark.text=style.text;watermark.destroy=function(){return _pool2.default.clear();};},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.getLoader=getLoader;exports.load=load;exports.loadUrl=loadUrl;exports.loadFile=loadFile;exports.createImage=createImage;exports.imageToCanvas=imageToCanvas;exports.mapToCanvas=mapToCanvas;var _functions=__webpack_require__(4);function _typeof(obj){return obj&&typeof Symbol!=="undefined"&&obj.constructor===Symbol?"symbol":typeof obj;}
function setAndResolve(img,src,resolve){img.onload=function(){return resolve(img);};img.src=src;}
function getLoader(resource){var type=typeof resource==='undefined'?'undefined':_typeof(resource);if(type==='string'){return loadUrl;}
if(resource instanceof Image){return _functions.identity;}
return loadFile;}
function load(resources,init){var promises=[];for(var i=0;i<resources.length;i++){var resource=resources[i];var loader=getLoader(resource);var promise=loader(resource,init);promises.push(promise);}
return Promise.all(promises);}
function loadUrl(url,init){var img=new Image();typeof init==='function'&&init(img);return new Promise(function(resolve){img.onload=function(){return resolve(img);};img.src=url;});}
function loadFile(file){var reader=new FileReader();return new Promise(function(resolve){var img=new Image();reader.onloadend=function(){return setAndResolve(img,reader.result,resolve);};reader.readAsDataURL(file);});}
function createImage(url,onload){var img=new Image();if(typeof onload==='function'){img.onload=onload;}
img.src=url;return img;}
function drawImage(img,canvas){var ctx=canvas.getContext('2d');canvas.width=img.width;canvas.height=img.height;ctx.drawImage(img,0,0);return canvas;}
function imageToCanvas(img,pool){var canvas=pool.pop();return drawImage(img,canvas);}
function mapToCanvas(images,pool){return images.map(function(img){return imageToCanvas(img,pool);});}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.sequence=sequence;exports.identity=identity;function sequence(){for(var _len=arguments.length,funcs=Array(_len),_key=0;_key<_len;_key++){funcs[_key]=arguments[_key];}
return function(value){return funcs.reduce(function(val,fn){return fn.call(null,val);},value);};}
function identity(x){return x;}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.dataUrl=dataUrl;function dataUrl(canvas){return canvas.toDataURL();}},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.blob=undefined;exports.split=split;exports.decode=decode;exports.uint8=uint8;var _functions=__webpack_require__(4);var url=/^data:([^;]+);base64,(.*)$/;function split(dataUrl){return url.exec(dataUrl).slice(1);}
function decode(base64){return window.atob(base64);}
function uint8(data){var length=data.length;var uints=new Uint8Array(length);for(var i=0;i<length;i++){uints[i]=data.charCodeAt(i);}
return uints;}
var blob=exports.blob=(0,_functions.sequence)(split,function(parts){return[decode(parts[1]),parts[0]];},function(blob){return new Blob([uint8(blob[0])],{type:blob[1]});});},function(module,exports,__webpack_require__){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.text=exports.image=undefined;exports.result=result;var _image=__webpack_require__(8);var img=_interopRequireWildcard(_image);var _text=__webpack_require__(9);var txt=_interopRequireWildcard(_text);function _interopRequireWildcard(obj){if(obj&&obj.__esModule){return obj;}else{var newObj={};if(obj!=null){for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){newObj[key]=obj[key];}}}
newObj.default=obj;return newObj;}}
var image=exports.image=img;var text=exports.text=txt;function result(draw,sources){var canvas=draw.apply(null,sources);return{canvas:canvas,sources:sources};}},function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.atPos=atPos;exports.lowerRight=lowerRight;exports.upperRight=upperRight;exports.lowerLeft=lowerLeft;exports.upperLeft=upperLeft;exports.center=center;function atPos(xFn,yFn,alpha){alpha||(alpha=1.0);return function(target,watermark){var context=target.getContext('2d');context.save();context.globalAlpha=alpha;context.drawImage(watermark,xFn(target,watermark),yFn(target,watermark));context.restore();return target;};}
function lowerRight(alpha){return atPos(function(target,mark){return target.width-(mark.width+10);},function(target,mark){return target.height-(mark.height+10);},alpha);}
function upperRight(alpha){return atPos(function(target,mark){return target.width-(mark.width+10);},function(target,mark){return 100;},alpha);}
function lowerLeft(alpha){return atPos(function(target,mark){return 10;},function(target,mark){return target.height-(mark.height+10);},alpha);}
function upperLeft(alpha){return atPos(function(target,mark){return 10;},function(target,mark){return 10;},alpha);}
function center(alpha){return atPos(function(target,mark){return(target.width-mark.width)/2;},function(target,mark){return(target.height-mark.height)/2;},alpha);}},function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.atPos=atPos;exports.lowerRight=lowerRight;exports.lowerLeft=lowerLeft;exports.upperRight=upperRight;exports.upperLeft=upperLeft;exports.center=center;function atPos(xFn,yFn,text,font,fillStyle,alpha){alpha||(alpha=1.0);return function(target){var context=target.getContext('2d');context.save();context.globalAlpha=alpha;context.fillStyle=fillStyle;context.font=font;var metrics=context.measureText(text);context.fillText(text,xFn(target,metrics,context),yFn(target,metrics,context));context.restore();return target;};}
function lowerRight(text,font,fillStyle,alpha,y){return atPos(function(target,metrics){return target.width-(metrics.width+10);},function(target){return y||target.height-10;},text,font,fillStyle,alpha);}
function lowerLeft(text,font,fillStyle,alpha,y){return atPos(function(){return 10;},function(target){return y||target.height-10;},text,font,fillStyle,alpha);}
function upperRight(text,font,fillStyle,alpha,y){return atPos(function(target,metrics){return target.width-(metrics.width+10);},function(){return y||20;},text,font,fillStyle,alpha);}
function upperLeft(text,font,fillStyle,alpha,y){return atPos(function(){return 10;},function(){return y||20;},text,font,fillStyle,alpha);}
function center(text,font,fillStyle,alpha,y){return atPos(function(target,metrics,ctx){ctx.textAlign='center';return target.width/2;},function(target,metrics,ctx){ctx.textBaseline='middle';return target.height/2;},text,font,fillStyle,alpha);}},function(module,exports){"use strict";Object.defineProperty(exports,"__esModule",{value:true});exports.extend=extend;exports.clone=clone;function extend(first,second){var secondKeys=Object.keys(second);secondKeys.forEach(function(key){return first[key]=second[key];});return first;}
function clone(obj){return extend({},obj);}},function(module,exports){'use strict';Object.defineProperty(exports,"__esModule",{value:true});exports.CanvasPool=CanvasPool;function CanvasPool(){var canvases=[];return{pop:function pop(){if(this.length===0){canvases.push(document.createElement('canvas'));}
return canvases.pop();},get length(){return canvases.length;},release:function release(canvas){var context=canvas.getContext('2d');context.clearRect(0,0,canvas.width,canvas.height);canvases.push(canvas);},clear:function clear(){canvases.splice(0,canvases.length);},get elements(){return canvases;}};}
var shared=CanvasPool();exports.default=shared;}])});;};if(CloudflareApps.matchPage(CloudflareApps.installs['KpuFtvJE4HsR'].URLPatterns)){(function(){'use strict'
if(!window.MutationObserver||!window.Promise)return
var watermark=window.watermark
var SRCSET_PATTERN=new RegExp(',\\s')
var options=CloudflareApps.installs['KpuFtvJE4HsR'].options
var observer=null
var container=null
var updateTimeout=null
var parseAttribute='data-watermark-parse-state'
var attributeMap={src:'data-cf-watermark-src',srcset:'data-cf-watermark-srcset'}
var watermarkOptions={init:function init(imageElement){imageElement.crossOrigin='anonymous'}}
function forEach(arrayLike,callback){Array.prototype.slice.call(arrayLike).forEach(callback)}
function watermarkImage(imageElement,force){if(imageElement.width<options.advanced.minWidth)return
if(imageElement.height<options.advanced.minHeight)return
if(imageElement.getAttribute(parseAttribute)==='parsing')return
if(imageElement.getAttribute(parseAttribute)==='parsed')return
if(imageElement.getAttribute(parseAttribute)==='pending'&&!force)return
imageElement.setAttribute(parseAttribute,'parsing')
var cachedAttribute={src:imageElement.attributes[attributeMap.src],srcset:imageElement.attributes[attributeMap.srcset]}
var textFunction=watermark.text[options.position]
var watermarkArgs=[options.text,options.textSize+'px sans-serif',options.textColor,options.opacity/100,!options.position.indexOf('upper')?options.textSize:null]
var promises=[]
function getSrcSetPromise(sourceSet){var entries=sourceSet.split(SRCSET_PATTERN).map(function(value){var parsed=value.split(/\s/)
return{url:parsed[0],size:parsed[1]}})
var srcsetPromises=entries.map(function(entry){return watermark([entry.url],watermarkOptions).image(textFunction.apply(null,watermarkArgs)).then(function(watermarkedImage){return[watermarkedImage.src,entry.size]})})
return Promise.all(srcsetPromises).then(function(results){return Promise.resolve({attribute:'srcset',value:results.map(function(result){return result.join(' ')}).join(', ')})})}
if(imageElement.srcset){var sourceSet=cachedAttribute.srcset?cachedAttribute.srcset.value:imageElement.srcset
promises.push(getSrcSetPromise(sourceSet))}else{var source=cachedAttribute.src?cachedAttribute.src.value:imageElement.src
promises.push(watermark([source],watermarkOptions).image(textFunction.apply(null,watermarkArgs)).then(function(watermarkedImage){return{attribute:'src',value:watermarkedImage.src}}))}
var parseTimeout=setTimeout(function(){imageElement.setAttribute(parseAttribute,'timeout')},5000)
Promise.all(promises).catch(function(error){clearTimeout(parseTimeout)
console.error('Watermark error',error)
imageElement.setAttribute(parseAttribute,'error')}).then(function(results){clearTimeout(parseTimeout)
if(imageElement.getAttribute(parseAttribute)==='pending'){watermarkImage(imageElement,true)
return}
forEach(results,function(result){if(!cachedAttribute[result.attribute]){var originalValue=imageElement.getAttribute(result.attribute)
imageElement.setAttribute(attributeMap[result.attribute],originalValue)}
imageElement.setAttribute(result.attribute,result.value)})
imageElement.setAttribute(parseAttribute,'parsed')})}
function parseDOM(){if(!container)return
var images=container.querySelectorAll('img')
forEach(images,function(image){watermarkImage(image)})}
function observeElements(){observer=new window.MutationObserver(parseDOM)
observer.observe(container,{childList:true,subtree:true})}
function bootstrap(){document.body.setAttribute('data-cf-watermark-mode',"KpuFtvJE4HsR"==='preview'?'preview':'live')
container=document.querySelector(options.advanced.location)
if(!container)return
parseDOM()
observeElements()}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',bootstrap)}else{bootstrap()}
window.CloudflareApps.installs['KpuFtvJE4HsR'].scope={setOptions:function(nextOptions){clearTimeout(updateTimeout)
options=nextOptions
var updateSelector='img['+attributeMap.src+'], img['+attributeMap.srcset+']'
var imageElements=document.documentElement.querySelectorAll(updateSelector)
forEach(imageElements,function(imageElement){imageElement.setAttribute(parseAttribute,'pending')})
updateTimeout=setTimeout(function(){forEach(imageElements,function(imageElement){window.requestAnimationFrame(watermarkImage.bind(null,imageElement,true))})},2000)}}}())};(function(){try{var link=document.createElement('link');link.rel='stylesheet';link.href='data:text/css;charset=utf-8;base64,Ym9keVtkYXRhLWNmLXdhdGVybWFyay1tb2RlPSJsaXZlIl0gaW1nW2RhdGEtd2F0ZXJtYXJrLXBhcnNlLXN0YXRlPSJwYXJzaW5nIl0gewogIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50Owp9Cgpib2R5W2RhdGEtY2Ytd2F0ZXJtYXJrLW1vZGU9InByZXZpZXciXSBpbWdbZGF0YS13YXRlcm1hcmstcGFyc2Utc3RhdGU9InBlbmRpbmciXSB7CiAgdHJhbnNpdGlvbjogZmlsdGVyIDIwMG1zIGxpbmVhcjsKICBmaWx0ZXI6IGJsdXIoNHB4KTsKICBvcGFjaXR5OiAwLjc7Cn0KCmJvZHlbZGF0YS1jZi13YXRlcm1hcmstbW9kZT0icHJldmlldyJdIGltZ1tkYXRhLXdhdGVybWFyay1wYXJzZS1zdGF0ZT0icGFyc2luZyJdIHsKICB0cmFuc2l0aW9uOiBmaWx0ZXIgODAwbXMgbGluZWFyOwogIGZpbHRlcjogYmx1cigycHgpOwogIG9wYWNpdHk6IDAuODU7Cn0K';document.getElementsByTagName('head')[0].appendChild(link);}catch(e){}})();
//]]>
