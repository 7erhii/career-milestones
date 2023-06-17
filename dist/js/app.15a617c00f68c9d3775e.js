/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/main.js":
/*!**************************!*\
  !*** ./src/core/main.js ***!
  \**************************/
/***/ (() => {

console.log(1); // document.querySelector('.themetoggle').addEventListener('click', (event) => {
//    event.preventDefault();
//    if (localStorage.getItem('theme') === 'dark') {
//       localStorage.removeItem('theme');
//    }
//    else {
//       localStorage.setItem('theme', 'dark')
//    }
//    addDarkClassToHTML()
// });
// function addDarkClassToHTML() {
//    try {
//       if (localStorage.getItem('theme') === 'dark') {
//          document.querySelector('.page').classList.add('dark');
//       }
//       else {
//          document.querySelector('.page').classList.remove('dark');
//       }
//    } catch (err) { }
// }
// addDarkClassToHTML();

/***/ }),

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice(); // document.querySelector('.switch__theme-link').addEventListener('click', (event) => {
//   event.preventDefault();
//   if (localStorage.getItem('theme') === 'dark') {
//     localStorage.removeItem('theme');
//   }
//   else {
//     localStorage.setItem('theme', 'dark')
//   }
//   addDarkClassToHTML()
// });
// function addDarkClassToHTML() {
//   try {
//     if (localStorage.getItem('theme') === 'dark') {
//       document.querySelector('.theme').classList.add('dark');
//     }
//     else {
//       document.querySelector('.theme').classList.remove('dark');
//     }
//   } catch (err) { }
// }
// addDarkClassToHTML();
// document.querySelector('.switch__position-grid').addEventListener('click', (event) => {
//   event.preventDefault();
//   if (localStorage.getItem('positionstyle') === 'list') {
//     localStorage.setItem('positionstyle', 'grid');
//   }
//   else {
//     localStorage.setItem('positionstyle', 'grid')
//   }
//   addListClassToHTML()
// });
// document.querySelector('.switch__position-list').addEventListener('click', (event) => {
//   event.preventDefault();
//   if (localStorage.getItem('positionstyle') === 'grid') {
//     localStorage.setItem('positionstyle', 'list');
//   }
//   else {
//     localStorage.setItem('positionstyle', 'list')
//   }
//   addListClassToHTML()
// });
// function addListClassToHTML() {
//   try {
//     if (localStorage.getItem('positionstyle') === 'list') {
//       document.querySelector('.positionstyle').classList.add('list');
//     }
//     else {
//       document.querySelector('.positionstyle').classList.remove('list');
//     }
//   } catch (err) { }
// }
// addListClassToHTML();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};
pug_mixins["experience"] = pug_interp = function(imageFile, date, title){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var texts = [];
for (pug_interp = 3; pug_interp < arguments.length; pug_interp++) {
  texts.push(arguments[pug_interp]);
}
pug_html = pug_html + "\u003Cdiv class=\"experience__img\"\u003E";
pug_mixins["image"](imageFile);
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"experience__descr\"\u003E\u003Cdiv class=\"experience__date\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = date) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"experience__title\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = title) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
// iterate texts
;(function(){
  var $$obj = texts;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var text = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"experience__text\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var text = $$obj[pug_index0];
pug_html = pug_html + "\u003Cdiv class=\"experience__text\"\u003E\u003Cspan\u003E" + (pug.escape(null == (pug_interp = text) ? "" : pug_interp)) + "\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E";
    }
  }
}).call(this);

pug_html = pug_html + "\u003C\u002Fdiv\u003E";
};
pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Cscript src=\"https:\u002F\u002Fkit.fontawesome.com\u002Fe5694e0534.js\" crossorigin=\"anonymous\"\u003E\u003C\u002Fscript\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/header.pug */ "./src/views/parts/header.pug").call)(this, locals)) ? "" : pug_interp) + "\u003Csection class=\"hero\"\u003E \u003Cdiv class=\"hero__container\"\u003E \u003Cdiv class=\"hero__descr\"\u003E \u003Cdiv class=\"hero__location\"\u003E \u003C?xml version=\"1.0\" encoding=\"utf-8\"?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg width=\"800px\" height=\"800px\" viewBox=\"0 0 24 24\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M12 21.25C11.853 21.2514 11.7093 21.2059 11.59 21.12C11.29 20.93 4.25 16.2 4.25 10.45C4.25 8.39452 5.06652 6.42328 6.51992 4.96987C7.97333 3.51647 9.94457 2.69995 12 2.69995C14.0554 2.69995 16.0267 3.51647 17.4801 4.96987C18.9335 6.42328 19.75 8.39452 19.75 10.45C19.75 16.2 12.75 20.93 12.41 21.12C12.2907 21.2059 12.147 21.2514 12 21.25ZM12 4.24995C10.3494 4.24463 8.7642 4.89454 7.59238 6.05699C6.42056 7.21943 5.75794 8.79939 5.75 10.45C5.75 14.66 10.54 18.51 12 19.58C13.46 18.51 18.25 14.66 18.25 10.45C18.2421 8.79939 17.5794 7.21943 16.4076 6.05699C15.2358 4.89454 13.6506 4.24463 12 4.24995Z\" fill=\"#000000\"\u002F\u003E\n\u003Cpath d=\"M12 12.75C11.4561 12.75 10.9244 12.5887 10.4722 12.2865C10.0199 11.9844 9.66747 11.5549 9.45933 11.0524C9.25119 10.5499 9.19673 9.99695 9.30284 9.4635C9.40895 8.93006 9.67086 8.44005 10.0555 8.05546C10.4401 7.67086 10.9301 7.40895 11.4635 7.30284C11.997 7.19673 12.5499 7.25119 13.0524 7.45933C13.5549 7.66747 13.9844 8.01995 14.2865 8.47218C14.5887 8.92442 14.75 9.4561 14.75 10C14.75 10.7293 14.4603 11.4288 13.9445 11.9445C13.4288 12.4603 12.7293 12.75 12 12.75ZM12 8.75C11.7528 8.75 11.5111 8.82331 11.3055 8.96066C11.1 9.09802 10.9398 9.29324 10.8452 9.52165C10.7505 9.75005 10.7258 10.0014 10.774 10.2439C10.8223 10.4863 10.9413 10.7091 11.1161 10.8839C11.2909 11.0587 11.5137 11.1778 11.7561 11.226C11.9986 11.2742 12.2499 11.2495 12.4784 11.1549C12.7068 11.0602 12.902 10.9 13.0393 10.6945C13.1767 10.4889 13.25 10.2472 13.25 10C13.25 9.66848 13.1183 9.35054 12.8839 9.11612C12.6495 8.8817 12.3315 8.75 12 8.75Z\" fill=\"#000000\"\u002F\u003E\n\u003C\u002Fsvg\u003E\u003Cspan\u003EMelbourne, Australia\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__title\"\u003E \u003Cspan\u003EHello,\u003C\u002Fspan\u003E\u003Cspan\u003EI'm Jiny Harris\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__subtitle\"\u003E \u003Cspan\u003EI’m a Performance Support Specialist based in sunny Melbourne, Australia. I have unwavering passion and energy for people and customer experience.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Ca class=\"hero__social-link social-link\" href=\"#\"\u003E\u003Cspan\u003ELinkedIn\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\u003E\n  \u003Cpolygon points=\"3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__images\"\u003E ";
pug_mixins["image"].call({
attributes: {"class": "hero__rainbow"}
}, "light-accent.png");
pug_html = pug_html + "\u003Cdiv class=\"hero__img\"\u003E";
pug_mixins["image"]("title-photo.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Csection class=\"about\"\u003E \u003Cdiv class=\"about__container\"\u003E \u003Cdiv class=\"about__title\"\u003E \u003Cp\u003EA little about me\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__subtitle\"\u003E\u003Cp\u003EThanks for stopping by. For the past 6 years, I’ve excelled in customer success teams at some of Australia’s top hotels. Recently, I joined the customer success team at Square, where I'm proud to be part of a team building a more inclusive economy for small businesses in Australia.\u003C\u002Fp\u003E\u003Cp\u003EI have an unwavering passion and energy for people, which has proven a valuable asset in my career. I believe the best customer experiences come from genuine empathy, while always maintaining a friendly, positive and energetic character.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"about__sign\"\u003E ";
pug_mixins["image"]("sign.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Csection class=\"experience\"\u003E\u003Cdiv class=\"experience__container\"\u003E \u003Cdiv class=\"experience__item\"\u003E ";
pug_mixins["experience"]('street.jpeg', 'August 2021 – Current', 'Square', "As a customer success advocate, I work closely with Square's sellers to proactively solve problems and empower them get the most out of Square and their business. As part of my role, I help onboard business owners switching to Square and work with Square's Product teams to help make everything we do just a little bit better every day.", "Square is the fastest-growing digital payments company in Australia. I'm proud to be part of a team building a more inclusive economy where small businesses have equal access to opportunity.");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"experience__item\"\u003E ";
pug_mixins["experience"]('bike.jpeg', 'March 2021 – August 2021', 'Hilton Melbourne Little Queen Street', "I was part of the founding (pre-opening) team of Melbourne’s brand new Hilton Hotel, where I supervise revenue and reservations operations. As part of the hotel launch, I was responsible for planning and implementing the hotel's exemplary customer service and reservations procedures, while providing leadership and training to the front office team.");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"experience__item\"\u003E ";
pug_mixins["experience"]('street.jpeg', 'February 2018 – March 2021', 'West Hotel Sydney, Curio Collection by Hilton', "As a customer success advocate, I work closely with Square's sellers to proactively solve problems and empower them get the most out of Square and their business. As part of my role, I help onboard business owners switching to Square and work with Square's Product teams to help make everything we do just a little bit better every day.", "Square is the fastest-growing digital payments company in Australia. I'm proud to be part of a team building a more inclusive economy where small businesses have equal access to opportunity.");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"experience__item\"\u003E ";
pug_mixins["experience"]('bike.jpeg', 'March 2016 – December 2017', 'Hilton Sydney', "As a customer success advocate, I work closely with Square's sellers to proactively solve problems and empower them get the most out of Square and their business. As part of my role, I help onboard business owners switching to Square and work with Square's Product teams to help make everything we do just a little bit better every day.", "Square is the fastest-growing digital payments company in Australia. I'm proud to be part of a team building a more inclusive economy where small businesses have equal access to opportunity.");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"experience__item\"\u003E \u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/footer.pug */ "./src/views/parts/footer.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/footer.pug":
/*!************************************!*\
  !*** ./src/views/parts/footer.pug ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"footer\"\u003E \u003Cdiv class=\"footer__container\"\u003E \u003Cdiv class=\"footer__top\"\u003E \u003Ca class=\"footer__logo\" href=\"#\"\u003E \u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\"\u003E\n\u003Cg id=\"Layer_10\" style=\"display:none;\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"filled\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"outlined\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"rounded\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"two_x5F_tone\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"sharp\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"win10\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"ios_x5F_out\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"ios_x5F_filled\"\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"25\" cy=\"25\" r=\"21\"\u002F\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"22.834\" cy=\"28.17\" r=\"17.166\"\u002F\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"20.732\" cy=\"31.386\" r=\"13.314\"\u002F\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"18.525\" cy=\"34.513\" r=\"9.506\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"color\"\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003Cspan\u003EJiny Harris\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ca class=\"footer__social-link social-link\" href=\"#\"\u003E\u003Cspan\u003ELinkedIn\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\u003E\n  \u003Cpolygon points=\"3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"footer__btm\"\u003E \u003Cspan\u003E© Jiny Harris 2077\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/header.pug":
/*!************************************!*\
  !*** ./src/views/parts/header.pug ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cheader class=\"header\"\u003E \u003Cdiv class=\"header__container\"\u003E \u003Ca class=\"header__logo\" href=\"#\"\u003E \u003C?xml version=\"1.0\" encoding=\"iso-8859-1\"?\u003E\n\u003C!-- Generator: Adobe Illustrator 23.0.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --\u003E\n\u003Csvg version=\"1.1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" xmlns:xlink=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002Fxlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 50 50\" style=\"enable-background:new 0 0 50 50;\" xml:space=\"preserve\"\u003E\n\u003Cg id=\"Layer_10\" style=\"display:none;\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"filled\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"outlined\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"rounded\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"two_x5F_tone\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"sharp\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"win10\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"ios_x5F_out\"\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"ios_x5F_filled\"\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"25\" cy=\"25\" r=\"21\"\u002F\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"22.834\" cy=\"28.17\" r=\"17.166\"\u002F\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"20.732\" cy=\"31.386\" r=\"13.314\"\u002F\u003E\n\t\u003Ccircle style=\"fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;\" cx=\"18.525\" cy=\"34.513\" r=\"9.506\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cg id=\"color\"\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\u003Cspan\u003EJiny Harris\u003C\u002Fspan\u003E\u003C\u002Fa\u003E\u003Ca class=\"header__social-link social-link\" href=\"#\"\u003E\u003Cspan\u003ELinkedIn\u003C\u002Fspan\u003E\u003Csvg xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"\u003E\n  \u003Cpolygon points=\"3.293 11.293 4.707 12.707 11 6.414 11 20 13 20 13 6.414 19.293 12.707 20.707 11.293 12 2.586 3.293 11.293\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fa\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./arrow.svg": "./src/assets/images/arrow.svg",
	"./bike.jpeg": "./src/assets/images/bike.jpeg",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./light-accent.png": "./src/assets/images/light-accent.png",
	"./logo.svg": "./src/assets/images/logo.svg",
	"./map-marker.svg": "./src/assets/images/map-marker.svg",
	"./shop2.jpeg": "./src/assets/images/shop2.jpeg",
	"./sign.png": "./src/assets/images/sign.png",
	"./street.jpeg": "./src/assets/images/street.jpeg",
	"./title-photo.png": "./src/assets/images/title-photo.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/arrow.svg":
/*!*************************************!*\
  !*** ./src/assets/images/arrow.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/afe1d99c6b3827db30b2.svg";

/***/ }),

/***/ "./src/assets/images/bike.jpeg":
/*!*************************************!*\
  !*** ./src/assets/images/bike.jpeg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/304292e1f471b49fd89d.jpeg";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/light-accent.png":
/*!********************************************!*\
  !*** ./src/assets/images/light-accent.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3cdb148f00e8980f362b.png";

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/818367a360f3eaf96f28.svg";

/***/ }),

/***/ "./src/assets/images/map-marker.svg":
/*!******************************************!*\
  !*** ./src/assets/images/map-marker.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/11c27cbfe2efc9d35d4d.svg";

/***/ }),

/***/ "./src/assets/images/shop2.jpeg":
/*!**************************************!*\
  !*** ./src/assets/images/shop2.jpeg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1b112b81261f6d394a29.jpeg";

/***/ }),

/***/ "./src/assets/images/sign.png":
/*!************************************!*\
  !*** ./src/assets/images/sign.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/73c1f89c5df3f027127f.png";

/***/ }),

/***/ "./src/assets/images/street.jpeg":
/*!***************************************!*\
  !*** ./src/assets/images/street.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/724f67d81c00d2548649.jpeg";

/***/ }),

/***/ "./src/assets/images/title-photo.png":
/*!*******************************************!*\
  !*** ./src/assets/images/title-photo.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d8e575eacec0906ddcfa.png";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.js");
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvZm9vdGVyLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2hlYWRlci5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzLzdlcmhpeS9EZXNrdG9wL1dFQi9wcm9qZWN0cy9pbmRpaGFyaXMvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZXxmcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKDEpO1xuXG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZXRvZ2dsZScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4vLyAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpID09PSAnZGFyaycpIHtcbi8vICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aGVtZScpO1xuLy8gICAgfVxuLy8gICAgZWxzZSB7XG4vLyAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCAnZGFyaycpXG4vLyAgICB9XG4vLyAgICBhZGREYXJrQ2xhc3NUb0hUTUwoKVxuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIGFkZERhcmtDbGFzc1RvSFRNTCgpIHtcbi8vICAgIHRyeSB7XG4vLyAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdkYXJrJykge1xuLy8gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XG4vLyAgICAgICB9XG4vLyAgICAgICBlbHNlIHtcbi8vICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdlJykuY2xhc3NMaXN0LnJlbW92ZSgnZGFyaycpO1xuLy8gICAgICAgfVxuLy8gICAgfSBjYXRjaCAoZXJyKSB7IH1cbi8vIH1cblxuLy8gYWRkRGFya0NsYXNzVG9IVE1MKCk7IiwidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuXG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX3RoZW1lLWxpbmsnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdkYXJrJykge1xuLy8gICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aGVtZScpO1xuLy8gICB9XG4vLyAgIGVsc2Uge1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsICdkYXJrJylcbi8vICAgfVxuLy8gICBhZGREYXJrQ2xhc3NUb0hUTUwoKVxuLy8gfSk7XG5cbi8vIGZ1bmN0aW9uIGFkZERhcmtDbGFzc1RvSFRNTCgpIHtcbi8vICAgdHJ5IHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykgPT09ICdkYXJrJykge1xuLy8gICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRoZW1lJykuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aGVtZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycikgeyB9XG4vLyB9XG5cbi8vIGFkZERhcmtDbGFzc1RvSFRNTCgpO1xuXG5cbi8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zd2l0Y2hfX3Bvc2l0aW9uLWdyaWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnKSA9PT0gJ2xpc3QnKSB7XG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnLCAnZ3JpZCcpO1xuLy8gICB9XG4vLyAgIGVsc2Uge1xuLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb3NpdGlvbnN0eWxlJywgJ2dyaWQnKVxuLy8gICB9XG4vLyAgIGFkZExpc3RDbGFzc1RvSFRNTCgpXG4vLyB9KTtcblxuLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN3aXRjaF9fcG9zaXRpb24tbGlzdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncG9zaXRpb25zdHlsZScpID09PSAnZ3JpZCcpIHtcbi8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncG9zaXRpb25zdHlsZScsICdsaXN0Jyk7XG4vLyAgIH1cbi8vICAgZWxzZSB7XG4vLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnLCAnbGlzdCcpXG4vLyAgIH1cbi8vICAgYWRkTGlzdENsYXNzVG9IVE1MKClcbi8vIH0pO1xuXG5cbi8vIGZ1bmN0aW9uIGFkZExpc3RDbGFzc1RvSFRNTCgpIHtcbi8vICAgdHJ5IHtcbi8vICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bvc2l0aW9uc3R5bGUnKSA9PT0gJ2xpc3QnKSB7XG4vLyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zaXRpb25zdHlsZScpLmNsYXNzTGlzdC5hZGQoJ2xpc3QnKTtcbi8vICAgICB9XG4vLyAgICAgZWxzZSB7XG4vLyAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9zaXRpb25zdHlsZScpLmNsYXNzTGlzdC5yZW1vdmUoJ2xpc3QnKTtcbi8vICAgICB9XG4vLyAgIH0gY2F0Y2ggKGVycikgeyB9XG4vLyB9XG5cbi8vIGFkZExpc3RDbGFzc1RvSFRNTCgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5wdWdfbWl4aW5zW1wiZXhwZXJpZW5jZVwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihpbWFnZUZpbGUsIGRhdGUsIHRpdGxlKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnZhciB0ZXh0cyA9IFtdO1xuZm9yIChwdWdfaW50ZXJwID0gMzsgcHVnX2ludGVycCA8IGFyZ3VtZW50cy5sZW5ndGg7IHB1Z19pbnRlcnArKykge1xuICB0ZXh0cy5wdXNoKGFyZ3VtZW50c1twdWdfaW50ZXJwXSk7XG59XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJleHBlcmllbmNlX19pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKGltYWdlRmlsZSk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJleHBlcmllbmNlX19kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZXhwZXJpZW5jZV9fZGF0ZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXCIgKyAocHVnLmVzY2FwZShudWxsID09IChwdWdfaW50ZXJwID0gZGF0ZSkgPyBcIlwiIDogcHVnX2ludGVycCkpICsgXCJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZXhwZXJpZW5jZV9fdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHRpdGxlKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSkgKyBcIlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIjtcbi8vIGl0ZXJhdGUgdGV4dHNcbjsoZnVuY3Rpb24oKXtcbiAgdmFyICQkb2JqID0gdGV4dHM7XG4gIGlmICgnbnVtYmVyJyA9PSB0eXBlb2YgJCRvYmoubGVuZ3RoKSB7XG4gICAgICBmb3IgKHZhciBwdWdfaW5kZXgwID0gMCwgJCRsID0gJCRvYmoubGVuZ3RoOyBwdWdfaW5kZXgwIDwgJCRsOyBwdWdfaW5kZXgwKyspIHtcbiAgICAgICAgdmFyIHRleHQgPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImV4cGVyaWVuY2VfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHRleHQpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgICAgfVxuICB9IGVsc2Uge1xuICAgIHZhciAkJGwgPSAwO1xuICAgIGZvciAodmFyIHB1Z19pbmRleDAgaW4gJCRvYmopIHtcbiAgICAgICQkbCsrO1xuICAgICAgdmFyIHRleHQgPSAkJG9ialtwdWdfaW5kZXgwXTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NkaXYgY2xhc3M9XFxcImV4cGVyaWVuY2VfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVwiICsgKHB1Zy5lc2NhcGUobnVsbCA9PSAocHVnX2ludGVycCA9IHRleHQpID8gXCJcIiA6IHB1Z19pbnRlcnApKSArIFwiXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVwiO1xuICAgIH1cbiAgfVxufSkuY2FsbCh0aGlzKTtcblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXCI7XG59O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3NjcmlwdCBzcmM9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGa2l0LmZvbnRhd2Vzb21lLmNvbVxcdTAwMkZlNTY5NGUwNTM0LmpzXFxcIiBjcm9zc29yaWdpbj1cXFwiYW5vbnltb3VzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNjcmlwdFxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFRW1wdHkgUHJvamVjdFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9oZWFkZXIucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJoZXJvXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fY29udGFpbmVyXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fZGVzY3JcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19sb2NhdGlvblxcXCJcXHUwMDNFIFxcdTAwM0M/eG1sIHZlcnNpb249XFxcIjEuMFxcXCIgZW5jb2Rpbmc9XFxcInV0Zi04XFxcIj9cXHUwMDNFXFx1MDAzQyEtLSBVcGxvYWRlZCB0bzogU1ZHIFJlcG8sIHd3dy5zdmdyZXBvLmNvbSwgR2VuZXJhdG9yOiBTVkcgUmVwbyBNaXhlciBUb29scyAtLVxcdTAwM0VcXG5cXHUwMDNDc3ZnIHdpZHRoPVxcXCI4MDBweFxcXCIgaGVpZ2h0PVxcXCI4MDBweFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMiAyMS4yNUMxMS44NTMgMjEuMjUxNCAxMS43MDkzIDIxLjIwNTkgMTEuNTkgMjEuMTJDMTEuMjkgMjAuOTMgNC4yNSAxNi4yIDQuMjUgMTAuNDVDNC4yNSA4LjM5NDUyIDUuMDY2NTIgNi40MjMyOCA2LjUxOTkyIDQuOTY5ODdDNy45NzMzMyAzLjUxNjQ3IDkuOTQ0NTcgMi42OTk5NSAxMiAyLjY5OTk1QzE0LjA1NTQgMi42OTk5NSAxNi4wMjY3IDMuNTE2NDcgMTcuNDgwMSA0Ljk2OTg3QzE4LjkzMzUgNi40MjMyOCAxOS43NSA4LjM5NDUyIDE5Ljc1IDEwLjQ1QzE5Ljc1IDE2LjIgMTIuNzUgMjAuOTMgMTIuNDEgMjEuMTJDMTIuMjkwNyAyMS4yMDU5IDEyLjE0NyAyMS4yNTE0IDEyIDIxLjI1Wk0xMiA0LjI0OTk1QzEwLjM0OTQgNC4yNDQ2MyA4Ljc2NDIgNC44OTQ1NCA3LjU5MjM4IDYuMDU2OTlDNi40MjA1NiA3LjIxOTQzIDUuNzU3OTQgOC43OTkzOSA1Ljc1IDEwLjQ1QzUuNzUgMTQuNjYgMTAuNTQgMTguNTEgMTIgMTkuNThDMTMuNDYgMTguNTEgMTguMjUgMTQuNjYgMTguMjUgMTAuNDVDMTguMjQyMSA4Ljc5OTM5IDE3LjU3OTQgNy4yMTk0MyAxNi40MDc2IDYuMDU2OTlDMTUuMjM1OCA0Ljg5NDU0IDEzLjY1MDYgNC4yNDQ2MyAxMiA0LjI0OTk1WlxcXCIgZmlsbD1cXFwiIzAwMDAwMFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMiAxMi43NUMxMS40NTYxIDEyLjc1IDEwLjkyNDQgMTIuNTg4NyAxMC40NzIyIDEyLjI4NjVDMTAuMDE5OSAxMS45ODQ0IDkuNjY3NDcgMTEuNTU0OSA5LjQ1OTMzIDExLjA1MjRDOS4yNTExOSAxMC41NDk5IDkuMTk2NzMgOS45OTY5NSA5LjMwMjg0IDkuNDYzNUM5LjQwODk1IDguOTMwMDYgOS42NzA4NiA4LjQ0MDA1IDEwLjA1NTUgOC4wNTU0NkMxMC40NDAxIDcuNjcwODYgMTAuOTMwMSA3LjQwODk1IDExLjQ2MzUgNy4zMDI4NEMxMS45OTcgNy4xOTY3MyAxMi41NDk5IDcuMjUxMTkgMTMuMDUyNCA3LjQ1OTMzQzEzLjU1NDkgNy42Njc0NyAxMy45ODQ0IDguMDE5OTUgMTQuMjg2NSA4LjQ3MjE4QzE0LjU4ODcgOC45MjQ0MiAxNC43NSA5LjQ1NjEgMTQuNzUgMTBDMTQuNzUgMTAuNzI5MyAxNC40NjAzIDExLjQyODggMTMuOTQ0NSAxMS45NDQ1QzEzLjQyODggMTIuNDYwMyAxMi43MjkzIDEyLjc1IDEyIDEyLjc1Wk0xMiA4Ljc1QzExLjc1MjggOC43NSAxMS41MTExIDguODIzMzEgMTEuMzA1NSA4Ljk2MDY2QzExLjEgOS4wOTgwMiAxMC45Mzk4IDkuMjkzMjQgMTAuODQ1MiA5LjUyMTY1QzEwLjc1MDUgOS43NTAwNSAxMC43MjU4IDEwLjAwMTQgMTAuNzc0IDEwLjI0MzlDMTAuODIyMyAxMC40ODYzIDEwLjk0MTMgMTAuNzA5MSAxMS4xMTYxIDEwLjg4MzlDMTEuMjkwOSAxMS4wNTg3IDExLjUxMzcgMTEuMTc3OCAxMS43NTYxIDExLjIyNkMxMS45OTg2IDExLjI3NDIgMTIuMjQ5OSAxMS4yNDk1IDEyLjQ3ODQgMTEuMTU0OUMxMi43MDY4IDExLjA2MDIgMTIuOTAyIDEwLjkgMTMuMDM5MyAxMC42OTQ1QzEzLjE3NjcgMTAuNDg4OSAxMy4yNSAxMC4yNDcyIDEzLjI1IDEwQzEzLjI1IDkuNjY4NDggMTMuMTE4MyA5LjM1MDU0IDEyLjg4MzkgOS4xMTYxMkMxMi42NDk1IDguODgxNyAxMi4zMzE1IDguNzUgMTIgOC43NVpcXFwiIGZpbGw9XFxcIiMwMDAwMDBcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VNZWxib3VybmUsIEF1c3RyYWxpYVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX190aXRsZVxcXCJcXHUwMDNFIFxcdTAwM0NzcGFuXFx1MDAzRUhlbGxvLFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VJJ20gSmlueSBIYXJyaXNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fc3VidGl0bGVcXFwiXFx1MDAzRSBcXHUwMDNDc3BhblxcdTAwM0VJ4oCZbSBhIFBlcmZvcm1hbmNlIFN1cHBvcnQgU3BlY2lhbGlzdCBiYXNlZCBpbiBzdW5ueSBNZWxib3VybmUsIEF1c3RyYWxpYS4gSSBoYXZlIHVud2F2ZXJpbmcgcGFzc2lvbiBhbmQgZW5lcmd5IGZvciBwZW9wbGUgYW5kIGN1c3RvbWVyIGV4cGVyaWVuY2UuXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJoZXJvX19zb2NpYWwtbGluayBzb2NpYWwtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFTGlua2VkSW5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3N2ZyB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0Nwb2x5Z29uIHBvaW50cz1cXFwiMy4yOTMgMTEuMjkzIDQuNzA3IDEyLjcwNyAxMSA2LjQxNCAxMSAyMCAxMyAyMCAxMyA2LjQxNCAxOS4yOTMgMTIuNzA3IDIwLjcwNyAxMS4yOTMgMTIgMi41ODYgMy4yOTMgMTEuMjkzXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2ltYWdlc1xcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImltYWdlXCJdLmNhbGwoe1xuYXR0cmlidXRlczoge1wiY2xhc3NcIjogXCJoZXJvX19yYWluYm93XCJ9XG59LCBcImxpZ2h0LWFjY2VudC5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19pbWdcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwidGl0bGUtcGhvdG8ucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJhYm91dFxcXCJcXHUwMDNFIFxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19jb250YWluZXJcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fdGl0bGVcXFwiXFx1MDAzRSBcXHUwMDNDcFxcdTAwM0VBIGxpdHRsZSBhYm91dCBtZVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJhYm91dF9fc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVRoYW5rcyBmb3Igc3RvcHBpbmcgYnkuIEZvciB0aGUgcGFzdCA2IHllYXJzLCBJ4oCZdmUgZXhjZWxsZWQgaW4gY3VzdG9tZXIgc3VjY2VzcyB0ZWFtcyBhdCBzb21lIG9mIEF1c3RyYWxpYeKAmXMgdG9wIGhvdGVscy4gUmVjZW50bHksIEkgam9pbmVkIHRoZSBjdXN0b21lciBzdWNjZXNzIHRlYW0gYXQgU3F1YXJlLCB3aGVyZSBJJ20gcHJvdWQgdG8gYmUgcGFydCBvZiBhIHRlYW0gYnVpbGRpbmcgYSBtb3JlIGluY2x1c2l2ZSBlY29ub215IGZvciBzbWFsbCBidXNpbmVzc2VzIGluIEF1c3RyYWxpYS5cXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFSSBoYXZlIGFuIHVud2F2ZXJpbmcgcGFzc2lvbiBhbmQgZW5lcmd5IGZvciBwZW9wbGUsIHdoaWNoIGhhcyBwcm92ZW4gYSB2YWx1YWJsZSBhc3NldCBpbiBteSBjYXJlZXIuIEkgYmVsaWV2ZSB0aGUgYmVzdCBjdXN0b21lciBleHBlcmllbmNlcyBjb21lIGZyb20gZ2VudWluZSBlbXBhdGh5LCB3aGlsZSBhbHdheXMgbWFpbnRhaW5pbmcgYSBmcmllbmRseSwgcG9zaXRpdmUgYW5kIGVuZXJnZXRpYyBjaGFyYWN0ZXIuXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImFib3V0X19zaWduXFxcIlxcdTAwM0UgXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJzaWduLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiZXhwZXJpZW5jZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZXhwZXJpZW5jZV9fY29udGFpbmVyXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZXhwZXJpZW5jZV9faXRlbVxcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImV4cGVyaWVuY2VcIl0oJ3N0cmVldC5qcGVnJywgJ0F1Z3VzdCAyMDIxIOKAkyBDdXJyZW50JywgJ1NxdWFyZScsIFwiQXMgYSBjdXN0b21lciBzdWNjZXNzIGFkdm9jYXRlLCBJIHdvcmsgY2xvc2VseSB3aXRoIFNxdWFyZSdzIHNlbGxlcnMgdG8gcHJvYWN0aXZlbHkgc29sdmUgcHJvYmxlbXMgYW5kIGVtcG93ZXIgdGhlbSBnZXQgdGhlIG1vc3Qgb3V0IG9mIFNxdWFyZSBhbmQgdGhlaXIgYnVzaW5lc3MuIEFzIHBhcnQgb2YgbXkgcm9sZSwgSSBoZWxwIG9uYm9hcmQgYnVzaW5lc3Mgb3duZXJzIHN3aXRjaGluZyB0byBTcXVhcmUgYW5kIHdvcmsgd2l0aCBTcXVhcmUncyBQcm9kdWN0IHRlYW1zIHRvIGhlbHAgbWFrZSBldmVyeXRoaW5nIHdlIGRvIGp1c3QgYSBsaXR0bGUgYml0IGJldHRlciBldmVyeSBkYXkuXCIsIFwiU3F1YXJlIGlzIHRoZSBmYXN0ZXN0LWdyb3dpbmcgZGlnaXRhbCBwYXltZW50cyBjb21wYW55IGluIEF1c3RyYWxpYS4gSSdtIHByb3VkIHRvIGJlIHBhcnQgb2YgYSB0ZWFtIGJ1aWxkaW5nIGEgbW9yZSBpbmNsdXNpdmUgZWNvbm9teSB3aGVyZSBzbWFsbCBidXNpbmVzc2VzIGhhdmUgZXF1YWwgYWNjZXNzIHRvIG9wcG9ydHVuaXR5LlwiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImV4cGVyaWVuY2VfX2l0ZW1cXFwiXFx1MDAzRSBcIjtcbnB1Z19taXhpbnNbXCJleHBlcmllbmNlXCJdKCdiaWtlLmpwZWcnLCAnTWFyY2ggMjAyMSDigJMgQXVndXN0IDIwMjEnLCAnSGlsdG9uIE1lbGJvdXJuZSBMaXR0bGUgUXVlZW4gU3RyZWV0JywgXCJJIHdhcyBwYXJ0IG9mIHRoZSBmb3VuZGluZyAocHJlLW9wZW5pbmcpIHRlYW0gb2YgTWVsYm91cm5l4oCZcyBicmFuZCBuZXcgSGlsdG9uIEhvdGVsLCB3aGVyZSBJIHN1cGVydmlzZSByZXZlbnVlIGFuZCByZXNlcnZhdGlvbnMgb3BlcmF0aW9ucy4gQXMgcGFydCBvZiB0aGUgaG90ZWwgbGF1bmNoLCBJIHdhcyByZXNwb25zaWJsZSBmb3IgcGxhbm5pbmcgYW5kIGltcGxlbWVudGluZyB0aGUgaG90ZWwncyBleGVtcGxhcnkgY3VzdG9tZXIgc2VydmljZSBhbmQgcmVzZXJ2YXRpb25zIHByb2NlZHVyZXMsIHdoaWxlIHByb3ZpZGluZyBsZWFkZXJzaGlwIGFuZCB0cmFpbmluZyB0byB0aGUgZnJvbnQgb2ZmaWNlIHRlYW0uXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZXhwZXJpZW5jZV9faXRlbVxcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImV4cGVyaWVuY2VcIl0oJ3N0cmVldC5qcGVnJywgJ0ZlYnJ1YXJ5IDIwMTgg4oCTIE1hcmNoIDIwMjEnLCAnV2VzdCBIb3RlbCBTeWRuZXksIEN1cmlvIENvbGxlY3Rpb24gYnkgSGlsdG9uJywgXCJBcyBhIGN1c3RvbWVyIHN1Y2Nlc3MgYWR2b2NhdGUsIEkgd29yayBjbG9zZWx5IHdpdGggU3F1YXJlJ3Mgc2VsbGVycyB0byBwcm9hY3RpdmVseSBzb2x2ZSBwcm9ibGVtcyBhbmQgZW1wb3dlciB0aGVtIGdldCB0aGUgbW9zdCBvdXQgb2YgU3F1YXJlIGFuZCB0aGVpciBidXNpbmVzcy4gQXMgcGFydCBvZiBteSByb2xlLCBJIGhlbHAgb25ib2FyZCBidXNpbmVzcyBvd25lcnMgc3dpdGNoaW5nIHRvIFNxdWFyZSBhbmQgd29yayB3aXRoIFNxdWFyZSdzIFByb2R1Y3QgdGVhbXMgdG8gaGVscCBtYWtlIGV2ZXJ5dGhpbmcgd2UgZG8ganVzdCBhIGxpdHRsZSBiaXQgYmV0dGVyIGV2ZXJ5IGRheS5cIiwgXCJTcXVhcmUgaXMgdGhlIGZhc3Rlc3QtZ3Jvd2luZyBkaWdpdGFsIHBheW1lbnRzIGNvbXBhbnkgaW4gQXVzdHJhbGlhLiBJJ20gcHJvdWQgdG8gYmUgcGFydCBvZiBhIHRlYW0gYnVpbGRpbmcgYSBtb3JlIGluY2x1c2l2ZSBlY29ub215IHdoZXJlIHNtYWxsIGJ1c2luZXNzZXMgaGF2ZSBlcXVhbCBhY2Nlc3MgdG8gb3Bwb3J0dW5pdHkuXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZXhwZXJpZW5jZV9faXRlbVxcXCJcXHUwMDNFIFwiO1xucHVnX21peGluc1tcImV4cGVyaWVuY2VcIl0oJ2Jpa2UuanBlZycsICdNYXJjaCAyMDE2IOKAkyBEZWNlbWJlciAyMDE3JywgJ0hpbHRvbiBTeWRuZXknLCBcIkFzIGEgY3VzdG9tZXIgc3VjY2VzcyBhZHZvY2F0ZSwgSSB3b3JrIGNsb3NlbHkgd2l0aCBTcXVhcmUncyBzZWxsZXJzIHRvIHByb2FjdGl2ZWx5IHNvbHZlIHByb2JsZW1zIGFuZCBlbXBvd2VyIHRoZW0gZ2V0IHRoZSBtb3N0IG91dCBvZiBTcXVhcmUgYW5kIHRoZWlyIGJ1c2luZXNzLiBBcyBwYXJ0IG9mIG15IHJvbGUsIEkgaGVscCBvbmJvYXJkIGJ1c2luZXNzIG93bmVycyBzd2l0Y2hpbmcgdG8gU3F1YXJlIGFuZCB3b3JrIHdpdGggU3F1YXJlJ3MgUHJvZHVjdCB0ZWFtcyB0byBoZWxwIG1ha2UgZXZlcnl0aGluZyB3ZSBkbyBqdXN0IGEgbGl0dGxlIGJpdCBiZXR0ZXIgZXZlcnkgZGF5LlwiLCBcIlNxdWFyZSBpcyB0aGUgZmFzdGVzdC1ncm93aW5nIGRpZ2l0YWwgcGF5bWVudHMgY29tcGFueSBpbiBBdXN0cmFsaWEuIEknbSBwcm91ZCB0byBiZSBwYXJ0IG9mIGEgdGVhbSBidWlsZGluZyBhIG1vcmUgaW5jbHVzaXZlIGVjb25vbXkgd2hlcmUgc21hbGwgYnVzaW5lc3NlcyBoYXZlIGVxdWFsIGFjY2VzcyB0byBvcHBvcnR1bml0eS5cIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJleHBlcmllbmNlX19pdGVtXFxcIlxcdTAwM0UgXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9mb290ZXIucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiZm9vdGVyXFxcIlxcdTAwM0UgXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZm9vdGVyX19jb250YWluZXJcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJmb290ZXJfX3RvcFxcXCJcXHUwMDNFIFxcdTAwM0NhIGNsYXNzPVxcXCJmb290ZXJfX2xvZ29cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJpc28tODg1OS0xXFxcIj9cXHUwMDNFXFxuXFx1MDAzQyEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tXFx1MDAzRVxcblxcdTAwM0NzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCJcXG5cXHQgdmlld0JveD1cXFwiMCAwIDUwIDUwXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFx1MDAzRVxcblxcdTAwM0NnIGlkPVxcXCJMYXllcl8xMFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDZyBpZD1cXFwiZmlsbGVkXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcIm91dGxpbmVkXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcInJvdW5kZWRcXFwiXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDZyBpZD1cXFwidHdvX3g1Rl90b25lXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcInNoYXJwXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcIndpbjEwXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcImlvc194NUZfb3V0XFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcImlvc194NUZfZmlsbGVkXFxcIlxcdTAwM0VcXG5cXHRcXHUwMDNDY2lyY2xlIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7XFxcIiBjeD1cXFwiMjVcXFwiIGN5PVxcXCIyNVxcXCIgcj1cXFwiMjFcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHRcXHUwMDNDY2lyY2xlIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7XFxcIiBjeD1cXFwiMjIuODM0XFxcIiBjeT1cXFwiMjguMTdcXFwiIHI9XFxcIjE3LjE2NlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdFxcdTAwM0NjaXJjbGUgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtcXFwiIGN4PVxcXCIyMC43MzJcXFwiIGN5PVxcXCIzMS4zODZcXFwiIHI9XFxcIjEzLjMxNFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdFxcdTAwM0NjaXJjbGUgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtcXFwiIGN4PVxcXCIxOC41MjVcXFwiIGN5PVxcXCIzNC41MTNcXFwiIHI9XFxcIjkuNTA2XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NnIGlkPVxcXCJjb2xvclxcXCJcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUppbnkgSGFycmlzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiZm9vdGVyX19zb2NpYWwtbGluayBzb2NpYWwtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFTGlua2VkSW5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3N2ZyB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0Nwb2x5Z29uIHBvaW50cz1cXFwiMy4yOTMgMTEuMjkzIDQuNzA3IDEyLjcwNyAxMSA2LjQxNCAxMSAyMCAxMyAyMCAxMyA2LjQxNCAxOS4yOTMgMTIuNzA3IDIwLjcwNyAxMS4yOTMgMTIgMi41ODYgMy4yOTMgMTEuMjkzXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZvb3Rlcl9fYnRtXFxcIlxcdTAwM0UgXFx1MDAzQ3NwYW5cXHUwMDNFwqkgSmlueSBIYXJyaXMgMjA3N1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiXFx1MDAzRSBcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2NvbnRhaW5lclxcXCJcXHUwMDNFIFxcdTAwM0NhIGNsYXNzPVxcXCJoZWFkZXJfX2xvZ29cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRSBcXHUwMDNDP3htbCB2ZXJzaW9uPVxcXCIxLjBcXFwiIGVuY29kaW5nPVxcXCJpc28tODg1OS0xXFxcIj9cXHUwMDNFXFxuXFx1MDAzQyEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIzLjAuMywgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tXFx1MDAzRVxcblxcdTAwM0NzdmcgdmVyc2lvbj1cXFwiMS4xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHhtbG5zOnhsaW5rPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYxOTk5XFx1MDAyRnhsaW5rXFxcIiB4PVxcXCIwcHhcXFwiIHk9XFxcIjBweFxcXCJcXG5cXHQgdmlld0JveD1cXFwiMCAwIDUwIDUwXFxcIiBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDtcXFwiIHhtbDpzcGFjZT1cXFwicHJlc2VydmVcXFwiXFx1MDAzRVxcblxcdTAwM0NnIGlkPVxcXCJMYXllcl8xMFxcXCIgc3R5bGU9XFxcImRpc3BsYXk6bm9uZTtcXFwiXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDZyBpZD1cXFwiZmlsbGVkXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcIm91dGxpbmVkXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcInJvdW5kZWRcXFwiXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDZyBpZD1cXFwidHdvX3g1Rl90b25lXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcInNoYXJwXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcIndpbjEwXFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcImlvc194NUZfb3V0XFxcIlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2cgaWQ9XFxcImlvc194NUZfZmlsbGVkXFxcIlxcdTAwM0VcXG5cXHRcXHUwMDNDY2lyY2xlIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7XFxcIiBjeD1cXFwiMjVcXFwiIGN5PVxcXCIyNVxcXCIgcj1cXFwiMjFcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHRcXHUwMDNDY2lyY2xlIHN0eWxlPVxcXCJmaWxsOm5vbmU7c3Ryb2tlOiMwMDAwMDA7c3Ryb2tlLXdpZHRoOjI7c3Ryb2tlLW1pdGVybGltaXQ6MTA7XFxcIiBjeD1cXFwiMjIuODM0XFxcIiBjeT1cXFwiMjguMTdcXFwiIHI9XFxcIjE3LjE2NlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdFxcdTAwM0NjaXJjbGUgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtcXFwiIGN4PVxcXCIyMC43MzJcXFwiIGN5PVxcXCIzMS4zODZcXFwiIHI9XFxcIjEzLjMxNFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdFxcdTAwM0NjaXJjbGUgc3R5bGU9XFxcImZpbGw6bm9uZTtzdHJva2U6IzAwMDAwMDtzdHJva2Utd2lkdGg6MjtzdHJva2UtbWl0ZXJsaW1pdDoxMDtcXFwiIGN4PVxcXCIxOC41MjVcXFwiIGN5PVxcXCIzNC41MTNcXFwiIHI9XFxcIjkuNTA2XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NnIGlkPVxcXCJjb2xvclxcXCJcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUppbnkgSGFycmlzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaGVhZGVyX19zb2NpYWwtbGluayBzb2NpYWwtbGlua1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFTGlua2VkSW5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3N2ZyB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIlxcdTAwM0VcXG4gIFxcdTAwM0Nwb2x5Z29uIHBvaW50cz1cXFwiMy4yOTMgMTEuMjkzIDQuNzA3IDEyLjcwNyAxMSA2LjQxNCAxMSAyMCAxMyAyMCAxMyA2LjQxNCAxOS4yOTMgMTIuNzA3IDIwLjcwNyAxMS4yOTMgMTIgMi41ODYgMy4yOTMgMTEuMjkzXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwidmFyIG1hcCA9IHtcblx0XCIuL2Fycm93LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYXJyb3cuc3ZnXCIsXG5cdFwiLi9iaWtlLmpwZWdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Jpa2UuanBlZ1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9saWdodC1hY2NlbnQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9saWdodC1hY2NlbnQucG5nXCIsXG5cdFwiLi9sb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5zdmdcIixcblx0XCIuL21hcC1tYXJrZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9tYXAtbWFya2VyLnN2Z1wiLFxuXHRcIi4vc2hvcDIuanBlZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2hvcDIuanBlZ1wiLFxuXHRcIi4vc2lnbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NpZ24ucG5nXCIsXG5cdFwiLi9zdHJlZXQuanBlZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3RyZWV0LmpwZWdcIixcblx0XCIuL3RpdGxlLXBob3RvLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvdGl0bGUtcGhvdG8ucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbImNvbnNvbGUiLCJsb2ciLCJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==