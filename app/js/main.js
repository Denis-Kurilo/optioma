!function(e){var n={};function r(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=n,r.d=function(e,n,t){r.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,n){if(1&n&&(e=r(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)r.d(t,o,function(n){return e[n]}.bind(null,o));return t},r.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(n,"a",n),n},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},r.p="",r(r.s="./src/js/main.js")}({"./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/map */ "./src/js/modules/map.js");\n/* harmony import */ var _modules_func__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/func */ "./src/js/modules/func.js");\n/* harmony import */ var _modules_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/popup */ "./src/js/modules/popup.js");\n/* harmony import */ var _modules_scrollDown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollDown */ "./src/js/modules/scrollDown.js");\n/* harmony import */ var _modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/maskPhone */ "./src/js/modules/maskPhone.js");\n/* harmony import */ var _modules_validationForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/validationForm */ "./src/js/modules/validationForm.js");\n\n\n\n\n\n\n\n // import sendForm from \'./modules/sendForm\';\n\nObject(_modules_map__WEBPACK_IMPORTED_MODULE_0__["default"])();\nObject(_modules_func__WEBPACK_IMPORTED_MODULE_1__["default"])();\nObject(_modules_scrollDown__WEBPACK_IMPORTED_MODULE_3__["default"])();\nObject(_modules_popup__WEBPACK_IMPORTED_MODULE_2__["default"])();\nObject(_modules_maskPhone__WEBPACK_IMPORTED_MODULE_4__["default"])();\nObject(_modules_validationForm__WEBPACK_IMPORTED_MODULE_5__["default"])(); // sendForm();\n\n//# sourceURL=webpack:///./src/js/main.js?')},"./src/js/modules/func.js":
/*!********************************!*\
  !*** ./src/js/modules/func.js ***!
  \********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar asd = function asd() {\n  console.log('asdsdfs');\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (asd);\n\n//# sourceURL=webpack:///./src/js/modules/func.js?")},"./src/js/modules/map.js":
/*!*******************************!*\
  !*** ./src/js/modules/map.js ***!
  \*******************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar map = function map() {\n  /* myMap */\n  ymaps.ready(init);\n  var myMap, myPlacemark1;\n\n  function init() {\n    myMap = new ymaps.Map(\"map\", {\n      center: [44.504216306347296, 34.15167827740982],\n      zoom: 17,\n      controls: ['smallMapDefaultSet']\n    });\n    myMap.controls.add('routeEditor');\n    myMap.controls.remove('geolocationControl').remove('searchControl').remove('trafficControl').remove('rulerControl');\n    myMap.behaviors.disable(['drag', 'scrollZoom']);\n    var myPin = new ymaps.GeoObjectCollection({}, {\n      preset: 'islands#orangeDotIcon',\n      draggable: false\n    });\n    myPlacemark1 = new ymaps.Placemark([44.504216306347296, 34.15167827740982], {\n      balloonContentHeader: '<span class=\"map-color\">Строительная компания \"Оптима\"</span>',\n      balloonContentFooter: 'Республика Крым, г.Ялта, ул. Южнобережное шоссе, 38',\n      hintContent: 'Строительная компания \"Оптима\"'\n    });\n    myPin.add(myPlacemark1);\n    myMap.geoObjects.add(myPin);\n  }\n  /* //myMap */\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (map);\n\n//# sourceURL=webpack:///./src/js/modules/map.js?")},"./src/js/modules/maskPhone.js":
/*!*************************************!*\
  !*** ./src/js/modules/maskPhone.js ***!
  \*************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction maskPhone(selector) {\n  var masked = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "+7 (___) ___-__-__";\n  var elems = document.querySelectorAll(selector);\n\n  function mask(event) {\n    var keyCode = event.keyCode;\n    var template = masked,\n        def = template.replace(/\\D/g, ""),\n        val = this.value.replace(/\\D/g, "");\n    var i = 0,\n        newValue = template.replace(/[_\\d]/g, function (a) {\n      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;\n    });\n    i = newValue.indexOf("_");\n\n    if (i != -1) {\n      newValue = newValue.slice(0, i);\n    }\n\n    var reg = template.substr(0, this.value.length).replace(/_+/g, function (a) {\n      return "\\\\d{1," + a.length + "}";\n    }).replace(/[+()]/g, "\\\\$&");\n    reg = new RegExp("^" + reg + "$");\n\n    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {\n      this.value = newValue;\n    }\n\n    if (event.type == "blur" && this.value.length < 5) {\n      this.value = "";\n    }\n  }\n\n  ;\n\n  var _iterator = _createForOfIteratorHelper(elems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var elem = _step.value;\n      elem.addEventListener("input", mask);\n      elem.addEventListener("focus", mask);\n      elem.addEventListener("blur", mask);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  ;\n}\n\n;\nmaskPhone(\'#feedback-input1\');\nmaskPhone(\'#feedback-input4\');\nmaskPhone(\'#feedback-input5\');\n/* harmony default export */ __webpack_exports__["default"] = (maskPhone);\n\n//# sourceURL=webpack:///./src/js/modules/maskPhone.js?')},"./src/js/modules/popup.js":
/*!*********************************!*\
  !*** ./src/js/modules/popup.js ***!
  \*********************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar popup = function popup() {\n  //menu\n  var popupMobileMenu = function popupMobileMenu() {\n    var popupMenu = document.querySelector('.popup-dialog-menu'),\n        menuIcon = document.querySelector('.menuIcon'),\n        menuIconMobile = document.querySelector('.menuIcon--mobile');\n    menuIcon.addEventListener('click', function () {\n      popupMenu.style.visibility = \"visible\";\n      popupMenu.style.transform = \"translate3d(0,0,0)\";\n    });\n    menuIconMobile.addEventListener('click', function () {\n      popupMenu.style.visibility = \"visible\";\n      popupMenu.style.transform = \"translate3d(0,0,0)\";\n    });\n    popupMenu.addEventListener('click', function (event) {\n      var target = event.target;\n\n      if (target.matches('.close-menu') || target.matches('li a')) {\n        popupMenu.style.visibility = \"hidden\";\n        popupMenu.style.transform = \"translate3d(645px,0,0)\";\n      }\n    });\n  };\n\n  popupMobileMenu(); //menu-end\n  //fixed burger menu\n\n  var topMenu = document.querySelector('.header__top-menu--mobile'),\n      offsetTop = topMenu.offsetTop;\n  window.addEventListener('scroll', function () {\n    if (window.pageYOffset >= 200) {\n      topMenu.style.display = 'block';\n      topMenu.style.position = 'fixed';\n    } else {\n      topMenu.style.display = 'none';\n    }\n  }); //popup-consultation\n\n  var popupConsultation = function popupConsultation() {\n    var btnConsultation = document.querySelector('.btnConsultation'),\n        popupConsult = document.querySelector('.feedback-popup'),\n        mobileBtn = document.querySelector('.mobile-btn');\n    btnConsultation.addEventListener('click', function () {\n      popupConsult.style.visibility = 'visible';\n    });\n    mobileBtn.addEventListener('click', function () {\n      popupConsult.style.visibility = 'visible';\n    });\n  };\n\n  popupConsultation(); //popup-consultation-end\n\n  var close = function close() {\n    var form = document.querySelectorAll('form');\n    form.forEach(function (elem) {\n      elem.addEventListener('click', function (e) {\n        var target = e.target;\n\n        if (target.matches('.close')) {\n          elem.style.visibility = 'hidden';\n        }\n      });\n    });\n  };\n\n  close();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (popup);\n\n//# sourceURL=webpack:///./src/js/modules/popup.js?")},"./src/js/modules/scrollDown.js":
/*!**************************************!*\
  !*** ./src/js/modules/scrollDown.js ***!
  \**************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar scrollDown = function scrollDown() {\n  var anchors = document.querySelectorAll('li a[href^= \"#\"], .arrow-top>a[href*= \"#\"]');\n\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener('click', function (event) {\n        event.preventDefault();\n        var blockId = anchor.getAttribute('href');\n        document.querySelector('' + blockId).scrollIntoView({\n          behavior: 'smooth',\n          block: 'start'\n        });\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    } //arrow appearance\n\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  var headerMain = document.querySelector('.header__top'),\n      totop = document.getElementById('totop'),\n      offsetHeight = headerMain.offsetHeight;\n  window.addEventListener('scroll', function () {\n    if (window.pageYOffset >= offsetHeight) {\n      totop.style.visibility = 'visible';\n      totop.style.opacity = '1';\n    } else {\n      totop.style.visibility = 'visible';\n      totop.style.opacity = '0';\n    }\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollDown);\n\n//# sourceURL=webpack:///./src/js/modules/scrollDown.js?")},"./src/js/modules/validationForm.js":
/*!******************************************!*\
  !*** ./src/js/modules/validationForm.js ***!
  \******************************************/
/*! exports provided: default */function(module,__webpack_exports__,__webpack_require__){"use strict";eval("__webpack_require__.r(__webpack_exports__);\nvar validationForm = function validationForm() {\n  var inputName = document.querySelectorAll('input[type=text]'),\n      tel = document.querySelectorAll('input[type=tel]'),\n      checkbox = document.querySelectorAll('input[type=checkbox]');\n  inputName.forEach(function (elem) {\n    elem.addEventListener('input', function () {\n      var input = elem.value;\n      elem.value = input.replace(/[^а-яёА-ЯЁ\\s]+/ig, '');\n    });\n  });\n  /*tel.forEach(elem => {\r\n      elem.addEventListener('input', (e) => {\r\n          let target = e.target;\r\n          checkbox.forEach((elem, index) => {\r\n              if(target.value.length < 18){\r\n                  elem.setAttribute('disabled', 'disabled');\r\n              }else{\r\n                  elem.removeAttribute('disabled');\r\n              }   \r\n          });  \r\n      })\r\n  });*/\n};\n\nvalidationForm();\n/* harmony default export */ __webpack_exports__[\"default\"] = (validationForm);\n\n//# sourceURL=webpack:///./src/js/modules/validationForm.js?")}});
//# sourceMappingURL=main.js.map
