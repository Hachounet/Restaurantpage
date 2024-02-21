/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/Goligan.ttf */ "./src/Goligan.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: "Goligan";
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___}) format("truetype");
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  width: 100%;
  height: 100%;
}

body {
  background-color: #4d4855;
  background-image: linear-gradient(147deg, #4d4855 0%, #000000 74%);
  background-size: 100%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 2fr 8fr;
  grid-template-areas: "header header header" "main main main";
}
body header {
  grid-area: header;
  grid-column: 1/4;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 4fr;
  justify-items: center;
  align-items: center;
}
body header img {
  width: 150px;
  height: 150px;
  grid-column: 1;
  grid-row: 1;
}
body header nav {
  grid-column: 2;
}
body header button {
  padding: 10px 70px;
  margin: 16px;
  text-transform: uppercase;
  border-radius: 8px;
  font-size: 25px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.5019607843);
  text-shadow: none;
  background: transparent;
  cursor: pointer;
  box-shadow: transparent;
  border: 1px solid rgba(255, 255, 255, 0.5019607843);
  transition: 0.7s ease;
  user-select: none;
}
body header button:hover,
body header :focus {
  color: antiquewhite;
  background: linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);
  border: 1px solid cornflowerblue;
  text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;
  box-shadow: 0 0 5px yellow, 0 0 20px darkorange, 0 0 50px #880808, 0 0 100px darkred;
}
body #content {
  grid-area: main;
  grid-column: 1/4;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  align-items: baseline;
  padding-top: 16px;
}
body #content .text-content1 {
  width: 100%;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-self: center;
  padding-left: 16px;
  grid-column: 1/3;
}
body #content .text-content2 {
  width: 100%;
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-self: center;
  padding-left: 16px;
  grid-column: 2/4;
}
body #content #imgright {
  display: flex;
  align-self: center;
  grid-column: 3;
  grid-row: 1;
}
body #content #imgleft {
  display: flex;
  justify-content: end;
  align-self: center;
  grid-row: 2;
  grid-column: 1;
}
body #content #contact {
  grid-column: 1/3;
  grid-row: 2;
  display: grid;
  justify-content: center;
  align-self: center;
  font-size: xx-large;
}
body #content #contact li {
  list-style: none;
}
body #content #contact li ul {
  font-family: "Goligan";
  color: antiquewhite;
  font-size: x-large;
}
body #content #contact-ad-text {
  grid-column: 2/4;
  grid-row: 1;
  display: grid;
  justify-content: center;
  align-self: center;
  font-size: 32px;
}
body #content #contact-ad-img {
  justify-self: center;
  align-self: center;
}
body #content #contact-ingr {
  grid-row: 2;
  grid-column: 2/4;
  justify-self: center;
  align-self: center;
}
body #content span {
  font-family: "Goligan";
  background-color: #ffcb43;
  background-image: linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
body #content span:hover {
  text-shadow: 0 0 1px yellow, 0 0 5px darkorange, 0 0 8px #880808, 0 0 15px darkred;
}
body #content img {
  width: 250px;
  height: 250px;
}
body #content p {
  font-family: "Goligan";
  color: antiquewhite;
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,+DAAA;AAHJ;AAMA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAJJ;;AAQA;EACI,WAAA;EACA,YAAA;AALJ;;AAQA;EAEI,yBAAA;EACA,kEAAA;EACA,qBAAA;EAEA,WAAA;EACA,YAAA;EACA,aAAA;EACA,kCAAA;EACA,2BAAA;EACA,4DACA;AARJ;AAWI;EACI,iBAAA;EACA,gBAAA;EACA,WAAA;EAEA,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,mBAAA;AAVR;AAYQ;EACI,YAAA;EACA,aAAA;EACA,cAAA;EACA,WAAA;AAVZ;AAaQ;EACI,cAAA;AAXZ;AAcQ;EACI,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,wCAAA;EACA,iBAAA;EACA,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,mDAAA;EACA,qBAAA;EACA,iBAAA;AAZZ;AAeU;;EAEE,mBAAA;EACA,0EAAA;EACA,gCAAA;EACA,gEAAA;EACA,oFAAA;AAbZ;AAmBI;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EAEA,aAAA;EACA,kCAAA;EACA,2BAAA;EACA,qBAAA;EACA,iBAAA;AAlBR;AAoBQ;EACI,WAAA;EACA,eAAA;EAEA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,kBAAA;EAEA,gBAAA;AArBZ;AAyBQ;EACI,WAAA;EACA,eAAA;EAEA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,kBAAA;EAEA,gBAAA;AA1BZ;AA8BQ;EACI,aAAA;EAEA,kBAAA;EAEA,cAAA;EACA,WAAA;AA9BZ;AAiCQ;EACI,aAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;EACA,cAAA;AA/BZ;AAkCQ;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,mBAAA;AAjCZ;AAmCY;EACI,gBAAA;AAjChB;AAmCgB;EACI,sBAAA;EACA,mBAAA;EACA,kBAAA;AAjCpB;AAsCQ;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;AApCZ;AAuCQ;EACI,oBAAA;EACA,kBAAA;AArCZ;AAwCQ;EACI,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;AAtCZ;AA0CQ;EAEI,sBAAA;EAEA,yBAAA;EACA,gFAAA;EACA,qBAAA;EACA,oCAAA;AA1CZ;AA4CY;EAEA,kFAAA;AA3CZ;AAoDQ;EACI,YAAA;EACA,aAAA;AAlDZ;AAsDQ;EAEI,sBAAA;EAED,mBAAA;AAtDX","sourcesContent":["$body-color-fallback: #8EC5FC;\n$body-color-webkit: -webkit-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n$body-color: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n\n@font-face {\n    font-family: \"Goligan\";\n    src: url(\"../src/Goligan.ttf\") format(\"truetype\");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n\n    background-color: #4d4855;\n    background-image: linear-gradient(147deg, #4d4855 0%, #000000 74%);\n    background-size: 100%;\n\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 2fr 8fr;\n    grid-template-areas: \n    \"header header header\"\n    \"main main main\";\n\n    header {\n        grid-area: header;\n        grid-column: 1/4;\n        grid-row: 1;\n\n        display: grid;\n        grid-template-columns: 1fr 4fr;\n        justify-items: center;\n        align-items: center;\n\n        img {\n            width: 150px;\n            height: 150px;\n            grid-column: 1;\n            grid-row: 1;\n        }\n\n        nav {\n            grid-column: 2;\n        }\n\n        button {\n            padding: 10px 70px;\n            margin: 16px;\n            text-transform: uppercase;\n            border-radius: 8px;\n            font-size: 25px;\n            font-weight: 500;\n            color: #ffffff80;\n            text-shadow: none;\n            background: transparent;\n            cursor: pointer;\n            box-shadow: transparent;\n            border: 1px solid #ffffff80;\n            transition: 0.7s ease;\n            user-select: none;\n          }\n          \n          button:hover,\n          :focus {\n            color: antiquewhite;\n            background: linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);;\n            border: 1px solid cornflowerblue;\n            text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;\n            box-shadow: 0 0 5px yellow, 0 0 20px darkorange, 0 0 50px #880808,\n              0 0 100px darkred;\n          }\n          \n    }\n\n    #content {\n        grid-area: main;\n        grid-column: 1/4;\n        grid-row: 2;\n\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr;\n        align-items: baseline;\n        padding-top: 16px;\n\n        .text-content1 {\n            width: 100%;\n            font-size: 32px;\n            \n            display: flex;\n            justify-content: center;\n            align-self: center;\n\n            padding-left: 16px;\n\n            grid-column: 1/3;\n        }\n\n\n        .text-content2 {\n            width: 100%;\n            font-size: 32px;\n            \n            display: flex;\n            justify-content: center;\n            align-self: center;\n\n            padding-left: 16px;\n\n            grid-column: 2/4;\n        }\n\n\n        #imgright {\n            display: flex;\n            \n            align-self: center;\n\n            grid-column: 3;\n            grid-row: 1;\n        }\n\n        #imgleft {\n            display: flex;\n            justify-content: end;\n            align-self: center;\n            grid-row: 2;\n            grid-column: 1;\n        }\n\n        #contact {\n            grid-column: 1/3;\n            grid-row: 2;\n            display: grid;\n            justify-content: center;\n            align-self: center;\n\n            font-size: xx-large;\n\n            li {\n                list-style: none;\n                \n                ul {\n                    font-family: \"Goligan\";\n                    color: antiquewhite;\n                    font-size: x-large;\n                }\n            }\n        }\n\n        #contact-ad-text {\n            grid-column: 2/4;\n            grid-row: 1;\n            display: grid;\n            justify-content: center;\n            align-self: center;\n            font-size: 32px;\n        }\n\n        #contact-ad-img {\n            justify-self: center;\n            align-self: center;\n        }\n\n        #contact-ingr {\n            grid-row: 2;\n            grid-column: 2/4;\n            justify-self: center;\n            align-self: center;\n\n        }\n\n        span {\n\n            font-family: \"Goligan\";\n\n            background-color: #ffcb43;\n            background-image: linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);\n            background-clip: text;\n            -webkit-text-fill-color: transparent;\n\n            &:hover {\n                \n            text-shadow: 0 0 1px yellow, 0 0 5px darkorange, 0 0 8px #880808,\n            0 0 15px darkred;\n            \n            }\n\n        }\n        \n        \n\n        img {\n            width: 250px;\n            height: 250px;\n\n        }\n\n        p {\n\n            font-family: \"Goligan\";\n\n           color: antiquewhite;\n        }\n\n\n    }\n\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/about-page-load.js":
/*!***********************************!*\
  !*** ./src/js/about-page-load.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayAboutPage: () => (/* binding */ displayAboutPage)
/* harmony export */ });
/* harmony import */ var _imgs_coke_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/coke.png */ "./src/imgs/coke.png");
/* harmony import */ var _imgs_mozza2_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/mozza2.png */ "./src/imgs/mozza2.png");



function displayAboutPage(){


    const contentDiv = document.getElementById("content");
    const divAboutAdText = document.createElement("div");
    const spanAdText = document.createElement("span");
    const pAdText = document.createElement("p");
    const br = document.createElement("br")

    const divAdImg = document.createElement("div")
    const imgAd = new Image();

    const divContactImg = document.createElement("div");
    const imgContact = new Image();

    const divContact = document.createElement("div");
    const pContact = document.createElement("p");
    const liContact = document.createElement("li")
    const ulContact1 = document.createElement("ul")
    const ulContact2 = document.createElement("ul")
    const ulContact3 = document.createElement("ul")

    divAboutAdText.setAttribute("id", "contact-ad-text");
    spanAdText.textContent = "zero delivery charge"
    pAdText.innerHTML = "Double the pizzas, " + spanAdText.outerHTML + ", plus a mind-blowing,<br> ice-cold Coca-Cola - because winning tastes even better when it's free ! <br>Unleash flavor domination now !"
    divAboutAdText.appendChild(pAdText);

    divAdImg.setAttribute("id", "contact-ad-img");
    imgAd.src = _imgs_coke_png__WEBPACK_IMPORTED_MODULE_0__;
    divAdImg.appendChild(imgAd);

    divContactImg.setAttribute("id", "contact-ingr");
    imgContact.src = _imgs_mozza2_png__WEBPACK_IMPORTED_MODULE_1__;
    divContactImg.appendChild(imgContact);

    divContact.setAttribute("id", "contact")
    pContact.textContent = "Contact us at: "

    ulContact1.textContent = "+51 25 75 89 55"
    ulContact2.textContent = "27 Tonyo's Alley"
    ulContact3.textContent = "Tonyo's City"

    liContact.appendChild(ulContact1)
    liContact.appendChild(ulContact2)
    liContact.appendChild(ulContact3)

    divContact.appendChild(pContact)
    divContact.appendChild(br)
    divContact.appendChild(liContact)

   
    contentDiv.appendChild(divAboutAdText);
    contentDiv.appendChild(divAdImg);
    contentDiv.appendChild(divContactImg);
    contentDiv.appendChild(divContact);



}


/***/ }),

/***/ "./src/js/initial-page-load.js":
/*!*************************************!*\
  !*** ./src/js/initial-page-load.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayLandingPage: () => (/* binding */ displayLandingPage)
/* harmony export */ });
/* harmony import */ var _imgs_basil_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/basil.png */ "./src/imgs/basil.png");
/* harmony import */ var _imgs_pizzaslice_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/pizzaslice.png */ "./src/imgs/pizzaslice.png");



function displayLandingPage(){

    const contentDiv = document.getElementById("content");
    const divPepp = document.createElement("div");
    const spanPepp = document.createElement("span");
    const pPepp = document.createElement("p");

    const divPizza = document.createElement("div")
    const imgPizza = new Image();
   

    const divBasil = document.createElement("div");
    const imgBasil = new Image();
  

    const divIngr = document.createElement("div");
    const pIngr = document.createElement("p");
    const spanIngr = document.createElement("span");

    divPepp.classList.add("text-content1");
    spanPepp.textContent = "Pepperonni";
    pPepp.innerHTML = "Life is all about " + spanPepp.outerHTML + ". It will always be.";

    divPepp.appendChild(pPepp)

    divPizza.setAttribute("id", "imgright")
    imgPizza.src = _imgs_pizzaslice_png__WEBPACK_IMPORTED_MODULE_1__;
    divPizza.appendChild(imgPizza)

    imgBasil.src = _imgs_basil_png__WEBPACK_IMPORTED_MODULE_0__;
    divBasil.setAttribute("id", "imgleft")
    divBasil.appendChild(imgBasil);

    divIngr.classList.add("text-content2");
    spanIngr.textContent = "we believe";
    pIngr.innerHTML = "At Tonyo's " + spanIngr.outerHTML + " in fresh and biological ingredients. Do you ?"
    divIngr.appendChild(pIngr);



    contentDiv.appendChild(divPepp);
    contentDiv.appendChild(divPizza);
    contentDiv.appendChild(divBasil);
    contentDiv.appendChild(divIngr);


}


/***/ }),

/***/ "./src/js/menu-page-load.js":
/*!**********************************!*\
  !*** ./src/js/menu-page-load.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenuPage: () => (/* binding */ displayMenuPage)
/* harmony export */ });
/* harmony import */ var _imgs_coppapizza_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../imgs/coppapizza.png */ "./src/imgs/coppapizza.png");
/* harmony import */ var _imgs_pepperonnipizza_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imgs/pepperonnipizza.png */ "./src/imgs/pepperonnipizza.png");



function displayMenuPage(){

    const contentDiv = document.getElementById("content");
    const divPepp = document.createElement("div");
    const spanPepp = document.createElement("span");
    const spanPepp2 = document.createElement("span")
    const pPepp = document.createElement("p");

    const divImgRight = document.createElement("div")
    const imgRight = new Image();

    const divImgLeft = document.createElement("div");
    const imgLeft = new Image();


    const divCoppa = document.createElement("div");
    const pCoppa = document.createElement("p");
    const spanCoppa = document.createElement("span");

    divPepp.classList.add("text-content1");
    spanPepp.textContent = "Pepperonni";
    spanPepp2.textContent = "bestseller"
    pPepp.innerHTML = "The classic " + spanPepp.outerHTML + ". Unrivaled and unparalleled, our absolute " + spanPepp2.outerHTML + " crafted by the hands of Tonyo's, our head chef. Made with a perfect blend of premium ingredients, including high-qualit pizza dough, rich tomate sauce, gooey mozzarella cheese, and flavorful pepperoni slices, it's a taste sensation that stands alone.";

    divPepp.appendChild(pPepp);

    divImgRight.setAttribute("id", "imgright");
    imgRight.src = _imgs_pepperonnipizza_png__WEBPACK_IMPORTED_MODULE_1__;
    divImgRight.appendChild(imgRight);

    divImgLeft.setAttribute("id", "imgleft");
    imgLeft.src = _imgs_coppapizza_png__WEBPACK_IMPORTED_MODULE_0__;
    divImgLeft.appendChild(imgLeft);

    divCoppa.classList.add("text-content2");
    spanCoppa.textContent = "Coppa"
    pCoppa.innerHTML = "The " + spanCoppa.outerHTML + " Carnival: A pizza party hosted by Tonyo's, our maestro of merriment in the kitchen. Picture this - primo pizza dough, a saucy soiree of tomato goodness, mozzarella doing the melty dance, and slices of coppa bringing the flavor fiesta. It's not just a pizza; it's a Coppa Cabana in your mouth!"
    divCoppa.appendChild(pCoppa);


    contentDiv.appendChild(divPepp);
    contentDiv.appendChild(divCoppa);
    contentDiv.appendChild(divImgLeft);
    contentDiv.appendChild(divImgRight);

    const changeJContentLeft = document.getElementById("imgleft")
    changeJContentLeft.style.justifyContent = "center";

    const changeJContentRight = document.getElementById("imgright");
    changeJContentRight.style.justifyContent = "center"


}


/***/ }),

/***/ "./src/Goligan.ttf":
/*!*************************!*\
  !*** ./src/Goligan.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "724701397422e925ddb2.ttf";

/***/ }),

/***/ "./src/imgs/basil.png":
/*!****************************!*\
  !*** ./src/imgs/basil.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68c52ff14bf37dc8892d.png";

/***/ }),

/***/ "./src/imgs/coke.png":
/*!***************************!*\
  !*** ./src/imgs/coke.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bda84878b80b0567e2c.png";

/***/ }),

/***/ "./src/imgs/coppapizza.png":
/*!*********************************!*\
  !*** ./src/imgs/coppapizza.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24bb09d70581bb341343.png";

/***/ }),

/***/ "./src/imgs/logo.png":
/*!***************************!*\
  !*** ./src/imgs/logo.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68558c68632ff99c25d3.png";

/***/ }),

/***/ "./src/imgs/mozza2.png":
/*!*****************************!*\
  !*** ./src/imgs/mozza2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6b96d6ed30028a3e7160.png";

/***/ }),

/***/ "./src/imgs/pepperonnipizza.png":
/*!**************************************!*\
  !*** ./src/imgs/pepperonnipizza.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5ff65f7891feb6960a49.png";

/***/ }),

/***/ "./src/imgs/pizzaslice.png":
/*!*********************************!*\
  !*** ./src/imgs/pizzaslice.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b318847087d2ed18b74a.png";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _js_initial_page_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/initial-page-load */ "./src/js/initial-page-load.js");
/* harmony import */ var _js_menu_page_load__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/menu-page-load */ "./src/js/menu-page-load.js");
/* harmony import */ var _js_about_page_load__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/about-page-load */ "./src/js/about-page-load.js");
/* harmony import */ var _imgs_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/logo.png */ "./src/imgs/logo.png");









function displayLogo() {
    const header = document.querySelector("header")
    const logoImg = new Image();
    logoImg.src = _imgs_logo_png__WEBPACK_IMPORTED_MODULE_4__;
    header.appendChild(logoImg);

}


function dynamicContent() {
    const buttons = document.querySelectorAll("button")
    const content = document.getElementById("content")
    buttons.forEach(button => {
        button.addEventListener("focus", function() {

        if ( button.textContent === "Home") {
            content.innerHTML = "";
            (0,_js_initial_page_load__WEBPACK_IMPORTED_MODULE_1__.displayLandingPage)()
        }
        else if ( button.textContent === "Menu"){
            content.innerHTML = "";
            (0,_js_menu_page_load__WEBPACK_IMPORTED_MODULE_2__.displayMenuPage)()
        }
        else if ( button.textContent === "About") {
            content.innerHTML = "";
            (0,_js_about_page_load__WEBPACK_IMPORTED_MODULE_3__.displayAboutPage)();
        }

    });
});

};

displayLogo();
(0,_js_initial_page_load__WEBPACK_IMPORTED_MODULE_1__.displayLandingPage)();
document.addEventListener("DOMContentLoaded", dynamicContent);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDRHQUFxQztBQUNqRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsYUFBYSxtQ0FBbUM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyx3REFBd0QsK0VBQStFLGdFQUFnRSxnQkFBZ0IsK0JB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VztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQStCOzs7QUFHNEI7QUFDTDtBQUNBOztBQUVwQjs7QUFFbEM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDJDQUFJO0FBQ3RCOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFZLHlFQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUFlO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLFlBQVkscUVBQWdCO0FBQzVCOztBQUVBLEtBQUs7QUFDTCxDQUFDOztBQUVEOztBQUVBO0FBQ0EseUVBQWtCO0FBQ2xCLDhEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvc3R5bGUuc2Nzcz83NWJhIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvanMvYWJvdXQtcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2pzL2luaXRpYWwtcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vc3JjL2pzL21lbnUtcGFnZS1sb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9Hb2xpZ2FuLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvbGlnYW5cIjtcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSkgZm9ybWF0KFwidHJ1ZXR5cGVcIik7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZDQ4NTU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgxNDdkZWcsICM0ZDQ4NTUgMCUsICMwMDAwMDAgNzQlKTtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciA4ZnI7XG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFwiaGVhZGVyIGhlYWRlciBoZWFkZXJcIiBcIm1haW4gbWFpbiBtYWluXCI7XG59XG5ib2R5IGhlYWRlciB7XG4gIGdyaWQtYXJlYTogaGVhZGVyO1xuICBncmlkLWNvbHVtbjogMS80O1xuICBncmlkLXJvdzogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5ib2R5IGhlYWRlciBpbWcge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGdyaWQtY29sdW1uOiAxO1xuICBncmlkLXJvdzogMTtcbn1cbmJvZHkgaGVhZGVyIG5hdiB7XG4gIGdyaWQtY29sdW1uOiAyO1xufVxuYm9keSBoZWFkZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogMTBweCA3MHB4O1xuICBtYXJnaW46IDE2cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUwMTk2MDc4NDMpO1xuICB0ZXh0LXNoYWRvdzogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDE5NjA3ODQzKTtcbiAgdHJhbnNpdGlvbjogMC43cyBlYXNlO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cbmJvZHkgaGVhZGVyIGJ1dHRvbjpob3ZlcixcbmJvZHkgaGVhZGVyIDpmb2N1cyB7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTlkZWcsICNmZmNiNDMgMCUsICNmZjY0MjUgMzclLCAjZmYwMDE2IDEwMCUpO1xuICBib3JkZXI6IDFweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcbiAgdGV4dC1zaGFkb3c6IDAgMCA1cHggI2ZmZmZmZiwgMCAwIDEwcHggI2ZmZmZmZiwgMCAwIDIwcHggI2ZmZmZmZjtcbiAgYm94LXNoYWRvdzogMCAwIDVweCB5ZWxsb3csIDAgMCAyMHB4IGRhcmtvcmFuZ2UsIDAgMCA1MHB4ICM4ODA4MDgsIDAgMCAxMDBweCBkYXJrcmVkO1xufVxuYm9keSAjY29udGVudCB7XG4gIGdyaWQtYXJlYTogbWFpbjtcbiAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgZ3JpZC1yb3c6IDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICBwYWRkaW5nLXRvcDogMTZweDtcbn1cbmJvZHkgI2NvbnRlbnQgLnRleHQtY29udGVudDEge1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG59XG5ib2R5ICNjb250ZW50IC50ZXh0LWNvbnRlbnQyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBncmlkLWNvbHVtbjogMi80O1xufVxuYm9keSAjY29udGVudCAjaW1ncmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGdyaWQtY29sdW1uOiAzO1xuICBncmlkLXJvdzogMTtcbn1cbmJvZHkgI2NvbnRlbnQgI2ltZ2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBncmlkLXJvdzogMjtcbiAgZ3JpZC1jb2x1bW46IDE7XG59XG5ib2R5ICNjb250ZW50ICNjb250YWN0IHtcbiAgZ3JpZC1jb2x1bW46IDEvMztcbiAgZ3JpZC1yb3c6IDI7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5ib2R5ICNjb250ZW50ICNjb250YWN0IGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJvZHkgI2NvbnRlbnQgI2NvbnRhY3QgbGkgdWwge1xuICBmb250LWZhbWlseTogXCJHb2xpZ2FuXCI7XG4gIGNvbG9yOiBhbnRpcXVld2hpdGU7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbmJvZHkgI2NvbnRlbnQgI2NvbnRhY3QtYWQtdGV4dCB7XG4gIGdyaWQtY29sdW1uOiAyLzQ7XG4gIGdyaWQtcm93OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IDMycHg7XG59XG5ib2R5ICNjb250ZW50ICNjb250YWN0LWFkLWltZyB7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5ib2R5ICNjb250ZW50ICNjb250YWN0LWluZ3Ige1xuICBncmlkLXJvdzogMjtcbiAgZ3JpZC1jb2x1bW46IDIvNDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cbmJvZHkgI2NvbnRlbnQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvbGlnYW5cIjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2I0MztcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxOWRlZywgI2ZmY2I0MyAwJSwgI2ZmNjQyNSAzNyUsICNmZjAwMTYgMTAwJSk7XG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuYm9keSAjY29udGVudCBzcGFuOmhvdmVyIHtcbiAgdGV4dC1zaGFkb3c6IDAgMCAxcHggeWVsbG93LCAwIDAgNXB4IGRhcmtvcmFuZ2UsIDAgMCA4cHggIzg4MDgwOCwgMCAwIDE1cHggZGFya3JlZDtcbn1cbmJvZHkgI2NvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDI1MHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuYm9keSAjY29udGVudCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiR29saWdhblwiO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7RUFDSSxzQkFBQTtFQUNBLCtEQUFBO0FBSEo7QUFNQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFRQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFFSSx5QkFBQTtFQUNBLGtFQUFBO0VBQ0EscUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsNERBQ0E7QUFSSjtBQVdJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBVlI7QUFZUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7QUFWWjtBQWFRO0VBQ0ksY0FBQTtBQVhaO0FBY1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWlo7QUFlVTs7RUFFRSxtQkFBQTtFQUNBLDBFQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnRUFBQTtFQUNBLG9GQUFBO0FBYlo7QUFtQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBbEJSO0FBb0JRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBRUEsZ0JBQUE7QUFyQlo7QUF5QlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFFQSxnQkFBQTtBQTFCWjtBQThCUTtFQUNJLGFBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0FBOUJaO0FBaUNRO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQS9CWjtBQWtDUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUFqQ1o7QUFtQ1k7RUFDSSxnQkFBQTtBQWpDaEI7QUFtQ2dCO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBakNwQjtBQXNDUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXBDWjtBQXVDUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFyQ1o7QUF3Q1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBdENaO0FBMENRO0VBRUksc0JBQUE7RUFFQSx5QkFBQTtFQUNBLGdGQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQTFDWjtBQTRDWTtFQUVBLGtGQUFBO0FBM0NaO0FBb0RRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFsRFo7QUFzRFE7RUFFSSxzQkFBQTtFQUVELG1CQUFBO0FBdERYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib2R5LWNvbG9yLWZhbGxiYWNrOiAjOEVDNUZDO1xcbiRib2R5LWNvbG9yLXdlYmtpdDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNjJkZWcsICM4RUM1RkMgMCUsICNFMEMzRkMgMTAwJSk7XFxuJGJvZHktY29sb3I6IGxpbmVhci1ncmFkaWVudCg2MmRlZywgIzhFQzVGQyAwJSwgI0UwQzNGQyAxMDAlKTtcXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb2xpZ2FuXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL3NyYy9Hb2xpZ2FuLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuaHRtbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ODU1O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjNGQ0ODU1IDAlLCAjMDAwMDAwIDc0JSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibWFpbiBtYWluIG1haW5cXFwiO1xcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICAgICAgZ3JpZC1yb3c6IDE7XFxuXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDE7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBuYXYge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDcwcHg7XFxuICAgICAgICAgICAgbWFyZ2luOiAxNnB4O1xcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmODA7XFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY4MDtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjdzIGVhc2U7XFxuICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgICAgICAgIGJ1dHRvbjpob3ZlcixcXG4gICAgICAgICAgOmZvY3VzIHtcXG4gICAgICAgICAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgzMTlkZWcsICNmZmNiNDMgMCUsICNmZjY0MjUgMzclLCAjZmYwMDE2IDEwMCUpOztcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBjb3JuZmxvd2VyYmx1ZTtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDVweCAjZmZmZmZmLCAwIDAgMTBweCAjZmZmZmZmLCAwIDAgMjBweCAjZmZmZmZmO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggeWVsbG93LCAwIDAgMjBweCBkYXJrb3JhbmdlLCAwIDAgNTBweCAjODgwODA4LFxcbiAgICAgICAgICAgICAgMCAwIDEwMHB4IGRhcmtyZWQ7XFxuICAgICAgICAgIH1cXG4gICAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgI2NvbnRlbnQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBtYWluO1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcXG4gICAgICAgIGdyaWQtcm93OiAyO1xcblxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcXG5cXG4gICAgICAgIC50ZXh0LWNvbnRlbnQxIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcblxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAudGV4dC1jb250ZW50MiB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcXG5cXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICAgICAgfVxcblxcblxcbiAgICAgICAgI2ltZ3JpZ2h0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMztcXG4gICAgICAgICAgICBncmlkLXJvdzogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNpbWdsZWZ0IHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb250YWN0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMS8zO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XFxuXFxuICAgICAgICAgICAgbGkge1xcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICAgICAgdWwge1xcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJHb2xpZ2FuXFxcIjtcXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjY29udGFjdC1hZC10ZXh0IHtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb250YWN0LWFkLWltZyB7XFxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbnRhY3QtaW5nciB7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDIvNDtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICB9XFxuXFxuICAgICAgICBzcGFuIHtcXG5cXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkdvbGlnYW5cXFwiO1xcblxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmNiNDM7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDMxOWRlZywgI2ZmY2I0MyAwJSwgI2ZmNjQyNSAzNyUsICNmZjAwMTYgMTAwJSk7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xcbiAgICAgICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXG4gICAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICAgICAgXFxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDAgMCAxcHggeWVsbG93LCAwIDAgNXB4IGRhcmtvcmFuZ2UsIDAgMCA4cHggIzg4MDgwOCxcXG4gICAgICAgICAgICAwIDAgMTVweCBkYXJrcmVkO1xcbiAgICAgICAgICAgIFxcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgXFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1MHB4O1xcblxcbiAgICAgICAgfVxcblxcbiAgICAgICAgcCB7XFxuXFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJHb2xpZ2FuXFxcIjtcXG5cXG4gICAgICAgICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgICAgICB9XFxuXFxuXFxuICAgIH1cXG5cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IENva2UgZnJvbSBcIi4uL2ltZ3MvY29rZS5wbmdcIlxuaW1wb3J0IG1venphMiBmcm9tIFwiLi4vaW1ncy9tb3p6YTIucG5nXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlBYm91dFBhZ2UoKXtcblxuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBkaXZBYm91dEFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3BhbkFkVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHBBZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJiclwiKVxuXG4gICAgY29uc3QgZGl2QWRJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgaW1nQWQgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnN0IGRpdkNvbnRhY3RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZ0NvbnRhY3QgPSBuZXcgSW1hZ2UoKTtcblxuICAgIGNvbnN0IGRpdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3QgdWxDb250YWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGNvbnN0IHVsQ29udGFjdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICBjb25zdCB1bENvbnRhY3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG5cbiAgICBkaXZBYm91dEFkVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtYWQtdGV4dFwiKTtcbiAgICBzcGFuQWRUZXh0LnRleHRDb250ZW50ID0gXCJ6ZXJvIGRlbGl2ZXJ5IGNoYXJnZVwiXG4gICAgcEFkVGV4dC5pbm5lckhUTUwgPSBcIkRvdWJsZSB0aGUgcGl6emFzLCBcIiArIHNwYW5BZFRleHQub3V0ZXJIVE1MICsgXCIsIHBsdXMgYSBtaW5kLWJsb3dpbmcsPGJyPiBpY2UtY29sZCBDb2NhLUNvbGEgLSBiZWNhdXNlIHdpbm5pbmcgdGFzdGVzIGV2ZW4gYmV0dGVyIHdoZW4gaXQncyBmcmVlICEgPGJyPlVubGVhc2ggZmxhdm9yIGRvbWluYXRpb24gbm93ICFcIlxuICAgIGRpdkFib3V0QWRUZXh0LmFwcGVuZENoaWxkKHBBZFRleHQpO1xuXG4gICAgZGl2QWRJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWFkLWltZ1wiKTtcbiAgICBpbWdBZC5zcmMgPSBDb2tlO1xuICAgIGRpdkFkSW1nLmFwcGVuZENoaWxkKGltZ0FkKTtcblxuICAgIGRpdkNvbnRhY3RJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWluZ3JcIik7XG4gICAgaW1nQ29udGFjdC5zcmMgPSBtb3p6YTI7XG4gICAgZGl2Q29udGFjdEltZy5hcHBlbmRDaGlsZChpbWdDb250YWN0KTtcblxuICAgIGRpdkNvbnRhY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0XCIpXG4gICAgcENvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3QgdXMgYXQ6IFwiXG5cbiAgICB1bENvbnRhY3QxLnRleHRDb250ZW50ID0gXCIrNTEgMjUgNzUgODkgNTVcIlxuICAgIHVsQ29udGFjdDIudGV4dENvbnRlbnQgPSBcIjI3IFRvbnlvJ3MgQWxsZXlcIlxuICAgIHVsQ29udGFjdDMudGV4dENvbnRlbnQgPSBcIlRvbnlvJ3MgQ2l0eVwiXG5cbiAgICBsaUNvbnRhY3QuYXBwZW5kQ2hpbGQodWxDb250YWN0MSlcbiAgICBsaUNvbnRhY3QuYXBwZW5kQ2hpbGQodWxDb250YWN0MilcbiAgICBsaUNvbnRhY3QuYXBwZW5kQ2hpbGQodWxDb250YWN0MylcblxuICAgIGRpdkNvbnRhY3QuYXBwZW5kQ2hpbGQocENvbnRhY3QpXG4gICAgZGl2Q29udGFjdC5hcHBlbmRDaGlsZChicilcbiAgICBkaXZDb250YWN0LmFwcGVuZENoaWxkKGxpQ29udGFjdClcblxuICAgXG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXZBYm91dEFkVGV4dCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXZBZEltZyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXZDb250YWN0SW1nKTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpdkNvbnRhY3QpO1xuXG5cblxufVxuIiwiaW1wb3J0IEJhc2lsIGZyb20gXCIuLi9pbWdzL2Jhc2lsLnBuZ1wiXG5pbXBvcnQgUGl6emFzbGljZSBmcm9tIFwiLi4vaW1ncy9waXp6YXNsaWNlLnBuZ1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5TGFuZGluZ1BhZ2UoKXtcblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgZGl2UGVwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3Qgc3BhblBlcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBwUGVwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gICAgY29uc3QgZGl2UGl6emEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgY29uc3QgaW1nUGl6emEgPSBuZXcgSW1hZ2UoKTtcbiAgIFxuXG4gICAgY29uc3QgZGl2QmFzaWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGltZ0Jhc2lsID0gbmV3IEltYWdlKCk7XG4gIFxuXG4gICAgY29uc3QgZGl2SW5nciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgcEluZ3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzcGFuSW5nciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgZGl2UGVwcC5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250ZW50MVwiKTtcbiAgICBzcGFuUGVwcC50ZXh0Q29udGVudCA9IFwiUGVwcGVyb25uaVwiO1xuICAgIHBQZXBwLmlubmVySFRNTCA9IFwiTGlmZSBpcyBhbGwgYWJvdXQgXCIgKyBzcGFuUGVwcC5vdXRlckhUTUwgKyBcIi4gSXQgd2lsbCBhbHdheXMgYmUuXCI7XG5cbiAgICBkaXZQZXBwLmFwcGVuZENoaWxkKHBQZXBwKVxuXG4gICAgZGl2UGl6emEuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdyaWdodFwiKVxuICAgIGltZ1BpenphLnNyYyA9IFBpenphc2xpY2U7XG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQoaW1nUGl6emEpXG5cbiAgICBpbWdCYXNpbC5zcmMgPSBCYXNpbDtcbiAgICBkaXZCYXNpbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ2xlZnRcIilcbiAgICBkaXZCYXNpbC5hcHBlbmRDaGlsZChpbWdCYXNpbCk7XG5cbiAgICBkaXZJbmdyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRlbnQyXCIpO1xuICAgIHNwYW5JbmdyLnRleHRDb250ZW50ID0gXCJ3ZSBiZWxpZXZlXCI7XG4gICAgcEluZ3IuaW5uZXJIVE1MID0gXCJBdCBUb255bydzIFwiICsgc3BhbkluZ3Iub3V0ZXJIVE1MICsgXCIgaW4gZnJlc2ggYW5kIGJpb2xvZ2ljYWwgaW5ncmVkaWVudHMuIERvIHlvdSA/XCJcbiAgICBkaXZJbmdyLmFwcGVuZENoaWxkKHBJbmdyKTtcblxuXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpdlBlcHApO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2UGl6emEpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2QmFzaWwpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2SW5ncik7XG5cblxufVxuIiwiaW1wb3J0IENvcHBhcGl6emEgZnJvbSBcIi4uL2ltZ3MvY29wcGFwaXp6YS5wbmdcIlxuaW1wb3J0IFBlcHBlcm9ubmlwaXp6YSBmcm9tIFwiLi4vaW1ncy9wZXBwZXJvbm5pcGl6emEucG5nXCJcblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51UGFnZSgpe1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBkaXZQZXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzcGFuUGVwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHNwYW5QZXBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgY29uc3QgcFBlcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IGRpdkltZ1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGltZ1JpZ2h0ID0gbmV3IEltYWdlKCk7XG5cbiAgICBjb25zdCBkaXZJbWdMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWdMZWZ0ID0gbmV3IEltYWdlKCk7XG5cblxuICAgIGNvbnN0IGRpdkNvcHBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwQ29wcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBzcGFuQ29wcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcblxuICAgIGRpdlBlcHAuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGVudDFcIik7XG4gICAgc3BhblBlcHAudGV4dENvbnRlbnQgPSBcIlBlcHBlcm9ubmlcIjtcbiAgICBzcGFuUGVwcDIudGV4dENvbnRlbnQgPSBcImJlc3RzZWxsZXJcIlxuICAgIHBQZXBwLmlubmVySFRNTCA9IFwiVGhlIGNsYXNzaWMgXCIgKyBzcGFuUGVwcC5vdXRlckhUTUwgKyBcIi4gVW5yaXZhbGVkIGFuZCB1bnBhcmFsbGVsZWQsIG91ciBhYnNvbHV0ZSBcIiArIHNwYW5QZXBwMi5vdXRlckhUTUwgKyBcIiBjcmFmdGVkIGJ5IHRoZSBoYW5kcyBvZiBUb255bydzLCBvdXIgaGVhZCBjaGVmLiBNYWRlIHdpdGggYSBwZXJmZWN0IGJsZW5kIG9mIHByZW1pdW0gaW5ncmVkaWVudHMsIGluY2x1ZGluZyBoaWdoLXF1YWxpdCBwaXp6YSBkb3VnaCwgcmljaCB0b21hdGUgc2F1Y2UsIGdvb2V5IG1venphcmVsbGEgY2hlZXNlLCBhbmQgZmxhdm9yZnVsIHBlcHBlcm9uaSBzbGljZXMsIGl0J3MgYSB0YXN0ZSBzZW5zYXRpb24gdGhhdCBzdGFuZHMgYWxvbmUuXCI7XG5cbiAgICBkaXZQZXBwLmFwcGVuZENoaWxkKHBQZXBwKTtcblxuICAgIGRpdkltZ1JpZ2h0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1ncmlnaHRcIik7XG4gICAgaW1nUmlnaHQuc3JjID0gUGVwcGVyb25uaXBpenphO1xuICAgIGRpdkltZ1JpZ2h0LmFwcGVuZENoaWxkKGltZ1JpZ2h0KTtcblxuICAgIGRpdkltZ0xlZnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdsZWZ0XCIpO1xuICAgIGltZ0xlZnQuc3JjID0gQ29wcGFwaXp6YTtcbiAgICBkaXZJbWdMZWZ0LmFwcGVuZENoaWxkKGltZ0xlZnQpO1xuXG4gICAgZGl2Q29wcGEuY2xhc3NMaXN0LmFkZChcInRleHQtY29udGVudDJcIik7XG4gICAgc3BhbkNvcHBhLnRleHRDb250ZW50ID0gXCJDb3BwYVwiXG4gICAgcENvcHBhLmlubmVySFRNTCA9IFwiVGhlIFwiICsgc3BhbkNvcHBhLm91dGVySFRNTCArIFwiIENhcm5pdmFsOiBBIHBpenphIHBhcnR5IGhvc3RlZCBieSBUb255bydzLCBvdXIgbWFlc3RybyBvZiBtZXJyaW1lbnQgaW4gdGhlIGtpdGNoZW4uIFBpY3R1cmUgdGhpcyAtIHByaW1vIHBpenphIGRvdWdoLCBhIHNhdWN5IHNvaXJlZSBvZiB0b21hdG8gZ29vZG5lc3MsIG1venphcmVsbGEgZG9pbmcgdGhlIG1lbHR5IGRhbmNlLCBhbmQgc2xpY2VzIG9mIGNvcHBhIGJyaW5naW5nIHRoZSBmbGF2b3IgZmllc3RhLiBJdCdzIG5vdCBqdXN0IGEgcGl6emE7IGl0J3MgYSBDb3BwYSBDYWJhbmEgaW4geW91ciBtb3V0aCFcIlxuICAgIGRpdkNvcHBhLmFwcGVuZENoaWxkKHBDb3BwYSk7XG5cblxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2UGVwcCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXZDb3BwYSk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXZJbWdMZWZ0KTtcbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpdkltZ1JpZ2h0KTtcblxuICAgIGNvbnN0IGNoYW5nZUpDb250ZW50TGVmdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1nbGVmdFwiKVxuICAgIGNoYW5nZUpDb250ZW50TGVmdC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbiAgICBjb25zdCBjaGFuZ2VKQ29udGVudFJpZ2h0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbWdyaWdodFwiKTtcbiAgICBjaGFuZ2VKQ29udGVudFJpZ2h0LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIlxuXG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgc2NzcyBmcm9tIFwiLi9zdHlsZS5zY3NzXCJcblxuXG5pbXBvcnQgeyBkaXNwbGF5TGFuZGluZ1BhZ2UgfSBmcm9tIFwiLi9qcy9pbml0aWFsLXBhZ2UtbG9hZFwiXG5pbXBvcnQgeyBkaXNwbGF5TWVudVBhZ2UgfSBmcm9tIFwiLi9qcy9tZW51LXBhZ2UtbG9hZFwiO1xuaW1wb3J0IHsgZGlzcGxheUFib3V0UGFnZX0gZnJvbSBcIi4vanMvYWJvdXQtcGFnZS1sb2FkXCJcblxuaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1ncy9sb2dvLnBuZ1wiXG5cbmZ1bmN0aW9uIGRpc3BsYXlMb2dvKCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXJcIilcbiAgICBjb25zdCBsb2dvSW1nID0gbmV3IEltYWdlKCk7XG4gICAgbG9nb0ltZy5zcmMgPSBsb2dvO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvSW1nKTtcblxufVxuXG5cbmZ1bmN0aW9uIGR5bmFtaWNDb250ZW50KCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmICggYnV0dG9uLnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheUxhbmRpbmdQYWdlKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYnV0dG9uLnRleHRDb250ZW50ID09PSBcIk1lbnVcIil7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5TWVudVBhZ2UoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBidXR0b24udGV4dENvbnRlbnQgPT09IFwiQWJvdXRcIikge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheUFib3V0UGFnZSgpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn0pO1xuXG59O1xuXG5kaXNwbGF5TG9nbygpO1xuZGlzcGxheUxhbmRpbmdQYWdlKCk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBkeW5hbWljQ29udGVudCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9