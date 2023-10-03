!function(t,i){"object"==typeof exports&&"undefined"!=typeof module?module.exports=i():"function"==typeof define&&define.amd?define(i):(t||self).lenis=i()}(this,function(){function t(t,i){for(var e=0;e<i.length;e++){var o=i[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,"symbol"==typeof(n=function(t,i){if("object"!=typeof t||null===t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var o=e.call(t,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key))?n:String(n),o)}var n}function i(i,e,o){return e&&t(i.prototype,e),o&&t(i,o),Object.defineProperty(i,"prototype",{writable:!1}),i}function e(){return e=Object.assign?Object.assign.bind():function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},e.apply(this,arguments)}function o(t,i,e){return Math.max(t,Math.min(i,e))}var n=/*#__PURE__*/function(){function t(){}var i=t.prototype;return i.advance=function(t){var i,e,n,s;if(this.isRunning){var r=!1;if(this.lerp)this.value=(e=this.value,n=this.to,(1-(s=1-Math.exp(-60*this.lerp*t)))*e+s*n),Math.round(this.value)===this.to&&(this.value=this.to,r=!0);else{this.currentTime+=t;var l=o(0,this.currentTime/this.duration,1),h=(r=l>=1)?1:this.easing(l);this.value=this.from+(this.to-this.from)*h}null==(i=this.onUpdate)||i.call(this,this.value,r),r&&this.stop()}},i.stop=function(){this.isRunning=!1},i.fromTo=function(t,i,e){var o=e.lerp,n=void 0===o?.1:o,s=e.duration,r=void 0===s?1:s,l=e.easing,h=void 0===l?function(t){return t}:l,a=e.onStart,c=e.onUpdate;this.from=this.value=t,this.to=i,this.lerp=n,this.duration=r,this.easing=h,this.currentTime=0,this.isRunning=!0,null==a||a(),this.onUpdate=c},t}(),s=/*#__PURE__*/function(){function t(t){var i,e,o=this,n=void 0===t?{}:t,s=n.wrapper,r=n.content,l=n.autoResize,h=void 0===l||l;if(this.resize=function(){o.onWrapperResize(),o.onContentResize()},this.onWrapperResize=function(){o.wrapper===window?(o.width=window.innerWidth,o.height=window.innerHeight):(o.width=o.wrapper.clientWidth,o.height=o.wrapper.clientHeight)},this.onContentResize=function(){o.scrollHeight=o.content.scrollHeight,o.scrollWidth=o.content.scrollWidth},this.wrapper=s,this.content=r,h){var a=(i=this.resize,function(){var t=arguments,o=this;clearTimeout(e),e=setTimeout(function(){i.apply(o,t)},250)});this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(a),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(a),this.contentResizeObserver.observe(this.content)}this.resize()}return t.prototype.destroy=function(){var t,i;null==(t=this.wrapperResizeObserver)||t.disconnect(),null==(i=this.contentResizeObserver)||i.disconnect()},i(t,[{key:"limit",get:function(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}]),t}(),r=/*#__PURE__*/function(){function t(){this.events={}}var i=t.prototype;return i.emit=function(t){for(var i=this.events[t]||[],e=0,o=i.length;e<o;e++)i[e].apply(i,[].slice.call(arguments,1))},i.on=function(t,i){var e,o=this;return(null==(e=this.events[t])?void 0:e.push(i))||(this.events[t]=[i]),function(){var e;o.events[t]=null==(e=o.events[t])?void 0:e.filter(function(t){return i!==t})}},i.off=function(t,i){var e;this.events[t]=null==(e=this.events[t])?void 0:e.filter(function(t){return i!==t})},i.destroy=function(){this.events={}},t}(),l=/*#__PURE__*/function(){function t(t,i){var e=this,n=i.wheelMultiplier,s=void 0===n?1:n,l=i.touchMultiplier,h=void 0===l?2:l,a=i.normalizeWheel,c=void 0!==a&&a;this.onTouchStart=function(t){var i=t.targetTouches?t.targetTouches[0]:t,o=i.clientY;e.touchStart.x=i.clientX,e.touchStart.y=o,e.lastDelta={x:0,y:0}},this.onTouchMove=function(t){var i=t.targetTouches?t.targetTouches[0]:t,o=i.clientX,n=i.clientY,s=-(o-e.touchStart.x)*e.touchMultiplier,r=-(n-e.touchStart.y)*e.touchMultiplier;e.touchStart.x=o,e.touchStart.y=n,e.lastDelta={x:s,y:r},e.emitter.emit("scroll",{deltaX:s,deltaY:r,event:t})},this.onTouchEnd=function(t){e.emitter.emit("scroll",{deltaX:e.lastDelta.x,deltaY:e.lastDelta.y,event:t})},this.onWheel=function(t){var i=t.deltaX,n=t.deltaY;e.normalizeWheel&&(i=o(-100,i,100),n=o(-100,n,100)),e.emitter.emit("scroll",{deltaX:i*=e.wheelMultiplier,deltaY:n*=e.wheelMultiplier,event:t})},this.element=t,this.wheelMultiplier=s,this.touchMultiplier=h,this.normalizeWheel=c,this.touchStart={x:null,y:null},this.emitter=new r,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}var i=t.prototype;return i.on=function(t,i){return this.emitter.on(t,i)},i.destroy=function(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})},t}();/*#__PURE__*/
return function(){function t(t){var i=this,o=void 0===t?{}:t,h=o.wrapper,a=void 0===h?window:h,c=o.content,u=void 0===c?document.documentElement:c,p=o.wheelEventsTarget,d=void 0===p?a:p,v=o.eventsTarget,f=void 0===v?d:v,m=o.smoothWheel,g=void 0===m||m,S=o.smoothTouch,y=void 0!==S&&S,w=o.syncTouch,T=void 0!==w&&w,b=o.syncTouchLerp,z=void 0===b?.1:b,M=o.__iosNoInertiaSyncTouchLerp,E=void 0===M?.4:M,L=o.touchInertiaMultiplier,_=void 0===L?35:L,O=o.duration,R=o.easing,W=void 0===R?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:R,k=o.lerp,x=void 0===k?!O&&.1:k,C=o.infinite,H=void 0!==C&&C,j=o.orientation,A=void 0===j?"vertical":j,X=o.gestureOrientation,Y=void 0===X?"vertical":X,D=o.touchMultiplier,I=void 0===D?1:D,P=o.wheelMultiplier,N=void 0===P?1:P,U=o.normalizeWheel,V=void 0!==U&&U,q=o.autoResize,B=void 0===q||q;this.onVirtualScroll=function(t){var o=t.deltaX,n=t.deltaY,s=t.event;if(!s.ctrlKey){var r=s.type.includes("touch"),l=s.type.includes("wheel");if(!("both"===i.options.gestureOrientation&&0===o&&0===n||"vertical"===i.options.gestureOrientation&&0===n||"horizontal"===i.options.gestureOrientation&&0===o||r&&"vertical"===i.options.gestureOrientation&&0===i.scroll&&!i.options.infinite&&n<=0)){var h=s.composedPath();if(!(h=h.slice(0,h.indexOf(i.rootElement))).find(function(t){var i;return(null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent"))||r&&(null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-touch"))||l&&(null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent-wheel"))||(null==(i=t.classList)?void 0:i.contains("lenis"))}))if(i.isStopped||i.isLocked)s.preventDefault();else{if(i.isSmooth=(i.options.smoothTouch||i.options.syncTouch)&&r||i.options.smoothWheel&&l,!i.isSmooth)return i.isScrolling=!1,void i.animate.stop();s.preventDefault();var a=n;"both"===i.options.gestureOrientation?a=Math.abs(n)>Math.abs(o)?n:o:"horizontal"===i.options.gestureOrientation&&(a=o);var c=r&&i.options.syncTouch,u=r&&"touchend"===s.type&&Math.abs(a)>1;u&&(a=i.velocity*i.options.touchInertiaMultiplier),i.scrollTo(i.targetScroll+a,e({programmatic:!1},c&&{lerp:u?i.syncTouchLerp:i.options.__iosNoInertiaSyncTouchLerp}))}}}},this.onScroll=function(){if(!i.isScrolling){var t=i.animatedScroll;i.animatedScroll=i.targetScroll=i.actualScroll,i.velocity=0,i.direction=Math.sign(i.animatedScroll-t),i.emit()}},window.lenisVersion="1.0.26",a!==document.documentElement&&a!==document.body||(a=window),this.options={wrapper:a,content:u,wheelEventsTarget:d,eventsTarget:f,smoothWheel:g,smoothTouch:y,syncTouch:T,syncTouchLerp:z,__iosNoInertiaSyncTouchLerp:E,touchInertiaMultiplier:_,duration:O,easing:W,lerp:x,infinite:H,gestureOrientation:Y,orientation:A,touchMultiplier:I,wheelMultiplier:N,normalizeWheel:V,autoResize:B},this.animate=new n,this.emitter=new r,this.dimensions=new s({wrapper:a,content:u,autoResize:B}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=T||g||y,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new l(f,{touchMultiplier:I,wheelMultiplier:N,normalizeWheel:V}),this.virtualScroll.on("scroll",this.onVirtualScroll)}var h=t.prototype;return h.destroy=function(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1)},h.on=function(t,i){return this.emitter.on(t,i)},h.off=function(t,i){return this.emitter.off(t,i)},h.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},h.resize=function(){this.dimensions.resize()},h.emit=function(){this.emitter.emit("scroll",this)},h.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()},h.start=function(){this.isStopped=!1,this.reset()},h.stop=function(){this.isStopped=!0,this.animate.stop(),this.reset()},h.raf=function(t){var i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)},h.scrollTo=function(t,i){var e=this,n=void 0===i?{}:i,s=n.offset,r=void 0===s?0:s,l=n.immediate,h=void 0!==l&&l,a=n.lock,c=void 0!==a&&a,u=n.duration,p=void 0===u?this.options.duration:u,d=n.easing,v=void 0===d?this.options.easing:d,f=n.lerp,m=void 0===f?!p&&this.options.lerp:f,g=n.onComplete,S=void 0===g?null:g,y=n.force,w=n.programmatic,T=void 0===w||w;if(!this.isStopped&&!this.isLocked||void 0!==y&&y){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var b,z;if("string"==typeof t?z=document.querySelector(t):null!=(b=t)&&b.nodeType&&(z=t),z){if(this.options.wrapper!==window){var M=this.options.wrapper.getBoundingClientRect();r-=this.isHorizontal?M.left:M.top}var E=z.getBoundingClientRect();t=(this.isHorizontal?E.left:E.top)+this.animatedScroll}}if("number"==typeof t){if(t+=r,t=Math.round(t),this.options.infinite?T&&(this.targetScroll=this.animatedScroll=this.scroll):t=o(0,t,this.limit),h)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(null==S||S(this));if(!T){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:p,easing:v,lerp:m,onStart:function(){c&&(e.isLocked=!0),e.isScrolling=!0},onUpdate:function(t,i){e.isScrolling=!0,e.velocity=t-e.animatedScroll,e.direction=Math.sign(e.velocity),e.animatedScroll=t,e.setScroll(e.scroll),T&&(e.targetScroll=t),i||e.emit(),i&&requestAnimationFrame(function(){e.reset(),e.emit(),null==S||S(e)})}})}}},h.toggleClass=function(t,i){this.rootElement.classList.toggle(t,i),this.emitter.emit("className change",this)},i(t,[{key:"rootElement",get:function(){return this.options.wrapper===window?this.options.content:this.options.wrapper}},{key:"limit",get:function(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}},{key:"isHorizontal",get:function(){return"horizontal"===this.options.orientation}},{key:"actualScroll",get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}},{key:"scroll",get:function(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}},{key:"progress",get:function(){return 0===this.limit?1:this.scroll/this.limit}},{key:"isSmooth",get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClass("lenis-smooth",t))}},{key:"isScrolling",get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClass("lenis-scrolling",t))}},{key:"isStopped",get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClass("lenis-stopped",t))}},{key:"className",get:function(){var t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}}]),t}()});
//# sourceMappingURL=lenis.umd.js.map
