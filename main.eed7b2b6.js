parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
"use strict";function e(e){return c(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function c(e){if(Array.isArray(e))return o(e)}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=document.querySelector(".page"),i=document.querySelector(".select__header--header"),s=document.querySelector(".select__current--header"),l=e(document.querySelectorAll(".select__item--header")),d=document.querySelector(".select__body--header"),u=document.querySelector(".page__wrapper");function _(e){for(var t=0;t<e.length;t++)e[t].classList.remove("select__item--active")}function v(e){e.classList.add("menu-page--active"),u.classList.add("page__wrapper--background"),a.classList.add("page__no-scroll")}function m(e){e.classList.remove("menu-page--active"),u.classList.remove("page__wrapper--background"),a.classList.remove("page__no-scroll")}s.textContent=l[0].textContent,i.addEventListener("click",function(e){d.classList.toggle("select__body--active")}),d.addEventListener("click",function(e){_(l);var t=e.target;t.classList.add("select__item--active"),s.textContent=t.textContent,d.classList.toggle("select__body--active")});var f=document.querySelector(".header__menu-icon"),p=document.querySelector(".menu"),y=document.querySelector(".menu__close"),g=document.querySelector(".menu__link--lang"),L=document.querySelector(".language"),q=document.querySelector(".language--back"),S=document.querySelectorAll(".menu__link");f.addEventListener("click",function(e){v(p)}),y.addEventListener("click",function(e){m(p)}),g.addEventListener("click",function(e){v(L)}),q.addEventListener("click",function(e){m(L)}),S.forEach(function(e){e.addEventListener("click",function(e){m(p)})});var b=document.querySelector(".menu__link--faq"),h=document.querySelector(".faq"),E=document.querySelector(".menu__close--faq"),k=e(document.querySelectorAll(".faq__question")),x=e(document.querySelectorAll(".faq__answer")),C=e(document.querySelectorAll(".faq__last-updated")),w=document.querySelector(".faq__button"),A=document.querySelector(".home-page__faq"),T=document.querySelector(".faq__other-questions");b.addEventListener("click",function(e){v(h)}),A.addEventListener("click",function(e){v(h)}),E.addEventListener("click",function(e){m(h),p.classList.remove("menu-page--active")});for(var P=function(e){k[e].addEventListener("click",function(t){x[e].classList.toggle("faq__answer--active"),C[e].classList.toggle("faq__last-updated--active")})},O=0;O<k.length;O++)P(O);w.addEventListener("click",function(e){T.classList.toggle("faq__other-questions--active")});var j=document.querySelector(".home-page__help"),B=document.querySelector(".help-page"),I=document.querySelector(".menu__link--faq--help"),D=document.querySelector(".menu__close--help-page"),H=document.querySelector(".help-page__linkFaq"),M=document.querySelector(".help-page__linkContact");I.addEventListener("click",function(e){v(B)}),j.addEventListener("click",function(e){v(B)}),D.addEventListener("click",function(e){m(B),p.classList.remove("menu-page--active")}),H.addEventListener("click",function(e){m(B),v(h)}),M.addEventListener("click",function(e){m(B),p.classList.remove("menu-page--active")});var Y=document.querySelector(".page__play-video"),X=document.querySelector(".page__video-page"),$=document.querySelector(".page__video-close");Y.addEventListener("click",function(e){var t=Y.getBoundingClientRect().top+pageYOffset-250;window.scrollTo(0,t),X.classList.add("page__video-page--active")}),$.addEventListener("click",function(e){X.classList.remove("page__video-page--active")});var R=document.querySelector(".aboutProduct__video"),F=document.querySelector(".page__video-page--about"),N=document.querySelector(".page__video-close--about");R.addEventListener("click",function(e){var t=R.getBoundingClientRect().top+pageYOffset-250;window.scrollTo(0,t),F.classList.add("page__video-page--active")}),N.addEventListener("click",function(e){F.classList.remove("page__video-page--active")});var U=document.querySelector(".header__button"),z=document.querySelector(".home-page__button"),G=document.querySelector(".benefits__button"),J=document.querySelector(".order"),K=document.querySelector(".menu__close--order");function Q(){J.classList.add("order--active"),u.classList.add("page__wrapper--background"),a.classList.add("page__no-scroll")}U.addEventListener("click",function(e){Q()}),z.addEventListener("click",function(e){Q()}),G.addEventListener("click",function(e){window.scrollTo(0,0),Q()}),K.addEventListener("click",function(e){J.classList.remove("order--active"),u.classList.remove("page__wrapper--background"),a.classList.remove("page__no-scroll")});var V=document.querySelector(".select__header--order-country"),W=document.querySelector(".select__current--order-country"),Z=e(document.querySelectorAll(".select__item--country")),ee=document.querySelector(".select__body--country"),te=document.querySelector(".order__input-name--country");W.textContent=Z[0].textContent,V.addEventListener("click",function(e){ee.classList.toggle("select__body--active"),te.classList.add("order__input-name--focus")}),ee.addEventListener("click",function(e){_(Z);var t=e.target;t.classList.add("select__item--active"),W.textContent=t.textContent,ee.classList.toggle("select__body--active"),te.classList.remove("order__input-name--focus")});var ne=document.querySelector(".select__header--order-city"),re=e(document.querySelectorAll(".select__item--city")),ce=document.querySelector(".select__current--order-city"),oe=document.querySelector(".select__body--city"),ae=document.querySelector(".order__input-name--city");ne.addEventListener("click",function(e){oe.classList.toggle("select__body--active"),ae.classList.add("order__input-name--focus")}),oe.addEventListener("click",function(e){_(re);var t=e.target;t.classList.add("select__item--active"),ce.textContent=t.textContent,oe.classList.toggle("select__body--active"),ae.classList.remove("order__input-name--focus")});var ie=document.querySelector(".select__header--order-quantity"),se=document.querySelectorAll(".select__item--quantity"),le=document.querySelector(".select__current--order-quantity"),de=document.querySelector(".select__body--quantity");le.textContent=se[0].textContent,ie.addEventListener("click",function(e){de.classList.toggle("select__body--active")}),de.addEventListener("click",function(e){_(se);var t=e.target;t.classList.add("select__item--active"),le.textContent=t.textContent,de.classList.toggle("select__body--active"),se.forEach(function(e){e.classList.contains("select__item--active")&&(ue.textContent=1200*e.dataset.current+"$")})});var ue=document.querySelector(".order__price-sum"),_e=document.querySelectorAll("._req"),ve=function(e){var t=e.nextElementSibling;e.classList.add("order__place-input--invalid"),t.classList.remove("order__input-name--focus"),t.classList.add("order__input-name--invalid")},me=function(e){var t=e.nextElementSibling;e.classList.remove("order__place-input--invalid"),t.classList.remove("order__input-name--focus"),t.classList.remove("order__input-name--invalid")},fe=0,pe=function(){fe=0,0===ce.textContent.length?(ae.textContent="Please, fill this field*",ae.classList.add("order__input-name--invalid"),fe++):ae.classList.remove("order__input-name--invalid");for(var e=0;e<_e.length;e++){var t=_e[e];me(t),t.validity.patternMismatch?(t.nextElementSibling.textContent="Incorrect format*",ve(t),fe++):t.value||(t.nextElementSibling.textContent="Please, fill this field*",ve(t),fe++)}return fe};_e.forEach(function(e){var t=e.nextElementSibling;e.addEventListener("focus",function(n){t.textContent=t.dataset.name,e.classList.remove("order__place-input--invalid"),t.classList.remove("order__input-name--invalid"),t.classList.add("order__input-name--focus")}),e.addEventListener("blur",function(n){e.classList.contains("order__place-input--norequired")?t.classList.remove("order__input-name--focus"):e.validity.patternMismatch?(t.textContent="Incorrect format*",ve(e)):e.value?t.classList.remove("order__input-name--focus"):(t.textContent="Please, fill this field*",ve(e))})});var ye=document.querySelector(".order__form-place"),ge=document.querySelector(".order__form-pay"),Le=e(document.querySelectorAll(".order__phase"));ye.addEventListener("submit",function(e){e.preventDefault(),pe(),0===fe&&(ye.classList.remove("order__form-place--activity"),ge.classList.add("order__form-pay--activity"),Le[1].removeAttribute("disabled"),Le[0].setAttribute("disabled","disabled"))});var qe=document.querySelector(".order__pay-input--cardNumber");qe.addEventListener("keydown",function(e){var t=this.value.replace(/\s+/g,""),n="Backspace"===e.key;if(1===e.key.length&&/^[^\d\s]+$/.test(e.key)||!n&&16===t.length)return e.preventDefault(),!1;this.value=t.split("").reverse().join("").replace(/\B(?=(\d{4})+(?!\d))/g," ").split("").reverse().join("").trim()});var Se=document.querySelector(".order__pay-input--expirationDate");Se.addEventListener("keydown",function(e){var t=this.value.replace(/\s+/g,""),n="Backspace"===e.key;if(1===e.key.length&&/^[^\d\s]+$/.test(e.key)||!n&&4===t.length)return e.preventDefault(),!1;this.value=t.split("").reverse().join("").replace(/\B(?=(\d{2})+(?!\d))/g,"/").split("").reverse().join("").trim()});var be=document.querySelector(".order__pay-input--cvv");be.addEventListener("keydown",function(e){this.value=this.value.replace(/./gm,"*")}),be.addEventListener("blur",function(e){this.value=this.value.replace(/./gm,"*")});var he=document.querySelectorAll(".order__pay-input"),Ee=0,ke=function(){Ee=0;for(var e=0;e<he.length;e++){var t=he[e];me(t),t.validity.patternMismatch?(t.nextElementSibling.textContent="Incorrect format*",ve(t),Ee++):t.value||(t.nextElementSibling.textContent="Please, fill this field*",ve(t),Ee++)}return Ee};he.forEach(function(e){var t=e.nextElementSibling;e.addEventListener("focus",function(n){n.preventDefault(),t.textContent=t.dataset.name,e.classList.remove("order__place-input--invalid"),t.classList.remove("order__input-name--invalid"),t.classList.add("order__input-name--focus")}),e.addEventListener("blur",function(n){e.validity.patternMismatch?(t.textContent="Incorrect format*",ve(e),Ee++):e.value?t.classList.remove("order__input-name--focus"):(t.textContent="Please, fill this field*",ve(e),Ee++)})});var xe=document.querySelector(".order__complete");ge.addEventListener("submit",function(e){e.preventDefault(),ke(),0===Ee&&(ge.classList.remove("order__form-pay--activity"),xe.classList.add("order__complete--activity"),Le[2].removeAttribute("disabled"),Le[1].setAttribute("disabled","disabled"),Le[0].setAttribute("disabled","disabled"),setTimeout(function(){ye.classList.add("order__form-place--activity"),J.classList.remove("order--active"),u.classList.remove("page__wrapper--background"),xe.classList.remove("order__complete--activity"),Le[0].removeAttribute("disabled"),Le[2].setAttribute("disabled","disabled"),ye.reset(),ge.reset(),a.classList.remove("page__no-scroll")},3e3))});var Ce=document.querySelector(".aboutProduct__previous"),we=document.querySelector(".aboutProduct__next"),Ae=document.querySelector(".aboutProduct__sliderConteiner"),Te=document.querySelector(".aboutProduct__sliderCounter"),Pe=document.querySelectorAll(".aboutProduct__dot"),Oe=window.screen.width,je=430,Be=-1720;Oe>=1920?(je=622,Be=-2488):Oe>=768&&Oe<1279?(je=340,Be=-1360):Oe>=320&&Oe<767&&(je=280);var Ie=0,De=function(){0===Ie?Ce.setAttribute("disabled",!0):Ie===Be?we.setAttribute("disabled",!0):(Ce.removeAttribute("disabled"),we.removeAttribute("disabled"))},He=function(){switch((5*je+Ie)/je){case 5:Te.textContent="1/5";break;case 4:Te.textContent="2/5";break;case 3:Te.textContent="3/5";break;case 2:Te.textContent="4/5";break;case 1:Te.textContent="5/5";break;default:Te.textContent="1/5"}};Ce.addEventListener("click",function(e){Ae.style.transform="translateX(".concat(Ie+je,"px)"),Ie+=je,De(),He()}),we.addEventListener("click",function(e){Ae.style.transform="translateX(".concat(Ie-je,"px)"),Ie-=je,De(),He()});var Me=function(){for(var e=0;e<Pe.length;e++)Pe[e].classList.remove("aboutProduct__dot--active")};Pe.forEach(function(e){e.addEventListener("click",function(t){Me(),e.classList.add("aboutProduct__dot--active"),Ae.style.transform="translateX(".concat((+e.dataset.slide-1)*je*-1,"px)")})});var Ye=document.querySelectorAll(".animTitles");function Xe(){for(var e=0;e<Ye.length;e++){var t=Ye[e],n=t.offsetHeight,r=$e(t).top,c=window.innerHeight-n/4;n>window.innerHeight&&(c=window.innerHeight-window.innerHeight/4),pageYOffset>r-c&&pageYOffset<r+n?t.classList.add("_active"):t.classList.contains("anim-no-hide")||t.classList.remove("_active")}}function $e(e){var t=e.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+r,leff:t.left+n}}Ye.length>0&&(window.addEventListener("scroll",Xe),setTimeout(function(){Xe()},200));var Re=document.querySelectorAll(".techSpecs__openChar"),Fe=document.querySelectorAll(".techSpecs__info");Re.forEach(function(e){e.addEventListener("click",function(t){e.classList.contains("techSpecs__openChar--1")?Fe[0].classList.toggle("techSpecs__info--active"):e.classList.contains("techSpecs__openChar--2")?Fe[1].classList.toggle("techSpecs__info--active"):e.classList.contains("techSpecs__openChar--3")&&Fe[2].classList.toggle("techSpecs__info--active"),e.classList.toggle("techSpecs__openChar--active")})}),window.addEventListener("scroll",function(){document.documentElement.scrollTop>1200?document.querySelector(".contact__scrollToTop").classList.add("contact__scrollToTop--active"):document.querySelector(".contact__scrollToTop").classList.remove("contact__scrollToTop--active")});
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.eed7b2b6.js.map