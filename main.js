(()=>{"use strict";function t(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var r=new WeakMap,o=function(){function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];e(this,o),r.set(this,{items:t})}var i,a;return i=o,(a=[{key:"pushItem",set:function(e){var n;r.set(this,{items:[].concat((n=r.get(this).items,function(e){if(Array.isArray(e))return t(e)}(n)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[e])})}},{key:"popItem",get:function(){return r.get(this).items.pop()}},{key:"currentStack",get:function(){return r.get(this).items}}])&&n(i.prototype,a),Object.defineProperty(i,"prototype",{writable:!1}),o}(),i=document.getElementById("inputBox"),a=document.getElementById("push"),c=document.getElementById("pop"),u=document.getElementById("display"),l=new o;a.addEventListener("click",(function(){var t=i.value;l.pushItem=t;var e=document.createElement("li");e.textContent=t,u.insertAdjacentElement("afterbegin",e)})),c.addEventListener("click",(function(){u.innerHTML="",l.popItem,l.currentStack.map((function(t){var e=document.createElement("li");e.textContent=t,u.insertAdjacentElement("afterbegin",e)}))}))})();