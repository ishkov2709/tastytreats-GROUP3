function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},i=n.parcelRequiredfd9;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},n.parcelRequiredfd9=i),i.register("kyEFX",(function(t,n){var o,r;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var i={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},r=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("cYlGq",(function(n,o){e(n.exports,"default",(function(){return l}));var r=i("e5EMj");function s(e,t){return e<=t?"rate-item-active":"rate-item"}var l=function(e,n,o,i,l,a){const d={title:e,description:n,preview:o,rating:i,id:l,category:a},c=i.toFixed(1);return`<div class='recipe-item' \n                style='\n                      background: linear-gradient(0deg, rgba(5, 5, 5, 0.6),\n                      rgba(5, 5, 5, 0)),\n                      url(${o}); \n                      background-position: center;\n                      background-size: cover;'>\n\n                  <div class='inter-box'>\n\n                    <button type='button' \n                    class='favorite-btn ${function(e){const t=localStorage.getItem("favorites"),n=JSON.parse(t);return t&&n.find((t=>t.id===e))?"active":""}(l)}'\n                    data-info='${JSON.stringify(d)}' \n                    name='favorite'>\n                      <svg class="heart-icon" width="22" height="22">\n                          <use href="${t(r)}#heart"></use>\n                        </svg>\n                    </button> \n\n                    <h2 class='title-item overflow-ellipsis'>${e}</h2>\n                    <p class='title-descr ellipsis-multiline'>${n}</p>\n\n                    <div class='rate-details-box'>\n                    <p class='rate'>${c}</p>\n                    ${function(e){return`<ul class='rate-list'>\n             <li class=${s(1,e)}>\n              <svg class="star-icon" width="18" height="18">\n                <use href="${t(r)}#star"></use>\n              </svg>\n            </li>\n            <li class=${s(2,e)}>\n              <svg class="star-icon" width="18" height="18">\n                <use href="${t(r)}#star"></use>\n              </svg>\n            </li>\n            <li class=${s(3,e)}>\n              <svg class="star-icon" width="18" height="18">\n                <use href="${t(r)}#star"></use>\n              </svg>\n            </li>\n            <li class=${s(4,e)}>\n              <svg class="star-icon" width="18" height="18">\n                <use href="${t(r)}#star"></use>\n              </svg>\n            </li>\n            <li class=${s(5,e)}>\n              <svg class="star-icon" width="18" height="18">\n                <use href="${t(r)}#star"></use>\n              </svg>\n            </li>\n          </ul>`}(c)}\n                    <button type='button' name='details' class='button item-rec' data-id=${l}>See recipe</button>\n                    </div>\n                  </div>\n                </div>`}})),i.register("e5EMj",(function(e,t){e.exports=new URL(i("kyEFX").resolve("lp5u4"),import.meta.url).toString()})),i.register("9c7ox",(function(e,t){const n=document.getElementById("js-header"),o=document.querySelectorAll(".toggle-checkbox"),r=document.body,i=localStorage.getItem("theme");i&&(r.classList.add(i),"dark"===i&&o.forEach((e=>e.checked=!0))),n.addEventListener("click",(({target:e})=>{"switch-theme"===e.name&&(r.classList.contains("dark")?(r.classList.remove("dark"),r.classList.add("light"),localStorage.setItem("theme","light")):(r.classList.remove("light"),r.classList.add("dark"),localStorage.setItem("theme","dark")))}))})),i.register("lF9VE",(function(e,t){var n=i("jQ7WT");n.disableBodyScroll,n.enableBodyScroll;document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector(".menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),r=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");n[o?"enableBodyScroll":"disableBodyScroll"](document.body)};e&&t&&o&&(t.addEventListener("click",r),o.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),n.enableBodyScroll(document.body))})))}))})),i.register("jQ7WT",(function(t,n){e(t.exports,"disableBodyScroll",(function(){return h})),e(t.exports,"clearAllBodyScrollLocks",(function(){return p})),e(t.exports,"enableBodyScroll",(function(){return y}));var o=!1;if("undefined"!=typeof window){var r={get passive(){o=!0}};window.addEventListener("testPassive",null,r),window.removeEventListener("testPassive",null,r)}var i="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),s=[],l=!1,a=-1,d=void 0,c=void 0,u=void 0,f=function(e){return s.some((function(t){return!(!t.options.allowTouchMove||!t.options.allowTouchMove(e))}))},v=function(e){var t=e||window.event;return!!f(t.target)||(t.touches.length>1||(t.preventDefault&&t.preventDefault(),!1))},g=function(){void 0!==u&&(document.body.style.paddingRight=u,u=void 0),void 0!==d&&(document.body.style.overflow=d,d=void 0)},m=function(){if(void 0!==c){var e=-parseInt(document.body.style.top,10),t=-parseInt(document.body.style.left,10);document.body.style.position=c.position,document.body.style.top=c.top,document.body.style.left=c.left,window.scrollTo(t,e),c=void 0}},h=function(e,t){if(e){if(!s.some((function(t){return t.targetElement===e}))){var n={targetElement:e,options:t||{}};s=[].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(s),[n]),i?window.requestAnimationFrame((function(){if(void 0===c){c={position:document.body.style.position,top:document.body.style.top,left:document.body.style.left};var e=window,t=e.scrollY,n=e.scrollX,o=e.innerHeight;document.body.style.position="fixed",document.body.style.top=-t,document.body.style.left=-n,setTimeout((function(){return window.requestAnimationFrame((function(){var e=o-window.innerHeight;e&&t>=o&&(document.body.style.top=-(t+e))}))}),300)}})):function(e){if(void 0===u){var t=!!e&&!0===e.reserveScrollBarGap,n=window.innerWidth-document.documentElement.clientWidth;if(t&&n>0){var o=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"),10);u=document.body.style.paddingRight,document.body.style.paddingRight=o+n+"px"}}void 0===d&&(d=document.body.style.overflow,document.body.style.overflow="hidden")}(t),i&&(e.ontouchstart=function(e){1===e.targetTouches.length&&(a=e.targetTouches[0].clientY)},e.ontouchmove=function(t){1===t.targetTouches.length&&function(e,t){var n=e.targetTouches[0].clientY-a;!f(e.target)&&(t&&0===t.scrollTop&&n>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(t)&&n<0?v(e):e.stopPropagation())}(t,e)},l||(document.addEventListener("touchmove",v,o?{passive:!1}:void 0),l=!0))}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},p=function(){i&&(s.forEach((function(e){e.targetElement.ontouchstart=null,e.targetElement.ontouchmove=null})),l&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),l=!1),a=-1),i?m():g(),s=[]},y=function(e){e?(s=s.filter((function(t){return t.targetElement!==e})),i&&(e.ontouchstart=null,e.ontouchmove=null,l&&0===s.length&&(document.removeEventListener("touchmove",v,o?{passive:!1}:void 0),l=!1)),i?m():g()):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")}})),i("kyEFX").register(JSON.parse('{"8c4mP":"index.6790c3e3.js","lp5u4":"sprite.bd380beb.svg"}'));
//# sourceMappingURL=index.6790c3e3.js.map
