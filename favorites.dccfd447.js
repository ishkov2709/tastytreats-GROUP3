var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequiredfd9;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},e.parcelRequiredfd9=n),n("9c7ox"),n("lF9VE"),n("18cvE");var o=n("cYlGq");const i={favoriteCategoriesList:document.querySelector(".favorite-categories"),favoriteRecipesList:document.querySelector(".favorite-list"),warning:document.querySelector("p")};document.addEventListener("DOMContentLoaded",(function(){const e=function(){const e=localStorage.getItem("favorites"),t=JSON.parse(e);if(e)return t.reduce(((e,{title:t,description:r,preview:n,rating:i,id:d})=>e+(0,o.default)(t,r,n,i,d)),"");i.warning.hidden=!1}();if(!e)throw new Error("No result");i.favoriteRecipesList.insertAdjacentHTML("beforeend",e)})),i.warning.hidden=!0;
//# sourceMappingURL=favorites.dccfd447.js.map
