var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},i=e.parcelRequiredfd9;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in n){var i=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,i.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},e.parcelRequiredfd9=i),i("9c7ox"),i("lF9VE"),i("18cvE"),i("aahN2"),i("2LJO6");var o=i("cYlGq"),r=i("JcIhZ");const a={favoriteCategoriesList:document.querySelector(".favorite-categories"),favoriteRecipesList:document.querySelector(".favorite-list"),warning:document.querySelector(".empty-storage"),paginationBox:document.getElementById("pagination"),categoryBtn:document.querySelector(".favorite-categories"),allBtn:document.querySelector(".all-btn"),hiroImg:document.querySelector(".fav-hero")};let l="";function s(){const e=window.innerWidth;return e<768?9:e>=768?12:void 0}function c(e,t){const n={};for(let i=0;i<e.length;i+=t){n[Math.floor(i/t)+1]=e.slice(i,i+t)}return n}function d(e=1){const t=localStorage.getItem("favorites"),n=JSON.parse(t);if(t){const t=s(),i=c(n,t),l=Object.keys(i).length;l>1?(a.paginationBox.style.display="block",(0,r.default)(e,t,l,d)):a.paginationBox.style.display="none";const f=i[e].reduce(((e,{title:t,description:n,preview:i,rating:r,id:a})=>e+(0,o.default)(t,n,i,r,a)),"");a.favoriteRecipesList.innerHTML=f}else a.warning.classList.remove("is-hidden"),a.allBtn.classList.add("is-hidden"),window.innerWidth<768&&a.hiroImg.classList.add("is-hidden")}document.addEventListener("DOMContentLoaded",(function(){const e=function(){const e=localStorage.getItem("favorites"),t=JSON.parse(e);return e?t.flatMap((e=>e.category)).filter(((e,t,n)=>n.indexOf(e)===t)).reduce(((e,t)=>e+function(e){return`<li class="list"><button class="button-fav">${e}</button></li>`}(t)),""):""}();a.favoriteCategoriesList.insertAdjacentHTML("beforeend",e),d()})),a.categoryBtn.addEventListener("click",(function e(t){let n,i=[];if(a.favoriteRecipesList.innerHTML="",t!==Number(t)&&"BUTTON"===t.target.nodeName){if(function({target:e}){document.querySelector(".onActive").classList.remove("onActive"),e.classList.add("onActive")}(t),"all"===t.target.name)return d();l=t.target.textContent}const f=localStorage.getItem("favorites");i=JSON.parse(f),n=[...i.filter((e=>e.category===l))];let u=1;Number(t)===t&&(u=t);const g=s(),p=c(n,g),v=Object.keys(p).length;v>1?(a.paginationBox.style.display="block",(0,r.default)(u,g,v,e)):a.paginationBox.style.display="none";const y=p[u].reduce(((e,{title:t,description:n,preview:i,rating:r,id:a})=>e+(0,o.default)(t,n,i,r,a)),"");a.favoriteRecipesList.innerHTML=y}));
//# sourceMappingURL=favorites.d7b08170.js.map
