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
}`, "",{"version":3,"sources":["webpack://./src/style.scss"],"names":[],"mappings":"AAIA;EACI,sBAAA;EACA,+DAAA;AAHJ;AAMA;EACI,SAAA;EACA,UAAA;EACA,sBAAA;AAJJ;;AAQA;EACI,WAAA;EACA,YAAA;AALJ;;AAQA;EAEI,yBAAA;EACA,kEAAA;EACA,qBAAA;EAEA,WAAA;EACA,YAAA;EACA,aAAA;EACA,kCAAA;EACA,2BAAA;EACA,4DACA;AARJ;AAWI;EACI,iBAAA;EACA,gBAAA;EACA,WAAA;EAEA,aAAA;EACA,8BAAA;EACA,qBAAA;EACA,mBAAA;AAVR;AAYQ;EACI,YAAA;EACA,aAAA;AAVZ;AAcQ;EACI,kBAAA;EACA,YAAA;EACA,yBAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;EACA,wCAAA;EACA,iBAAA;EACA,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,mDAAA;EACA,qBAAA;EACA,iBAAA;AAZZ;AAeU;;EAEE,mBAAA;EACA,0EAAA;EACA,gCAAA;EACA,gEAAA;EACA,oFAAA;AAbZ;AAmBI;EACI,eAAA;EACA,gBAAA;EACA,WAAA;EAEA,aAAA;EACA,kCAAA;EACA,2BAAA;EACA,qBAAA;EACA,iBAAA;AAlBR;AAoBQ;EACI,WAAA;EACA,eAAA;EAEA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,kBAAA;EAEA,gBAAA;AArBZ;AAyBQ;EACI,WAAA;EACA,eAAA;EAEA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,kBAAA;EAEA,gBAAA;AA1BZ;AA8BQ;EACI,aAAA;EAEA,kBAAA;EAEA,cAAA;EACA,WAAA;AA9BZ;AAiCQ;EACI,aAAA;EACA,oBAAA;EACA,kBAAA;EACA,WAAA;EACA,cAAA;AA/BZ;AAkCQ;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EAEA,mBAAA;AAjCZ;AAmCY;EACI,gBAAA;AAjChB;AAmCgB;EACI,sBAAA;EACA,mBAAA;EACA,kBAAA;AAjCpB;AAsCQ;EACI,gBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;AApCZ;AAuCQ;EACI,oBAAA;EACA,kBAAA;AArCZ;AAwCQ;EACI,WAAA;EACA,gBAAA;EACA,oBAAA;EACA,kBAAA;AAtCZ;AA0CQ;EAEI,sBAAA;EAEA,yBAAA;EACA,gFAAA;EACA,qBAAA;EACA,oCAAA;AA1CZ;AA4CY;EAEA,kFAAA;AA3CZ;AAoDQ;EACI,YAAA;EACA,aAAA;AAlDZ;AAsDQ;EAEI,sBAAA;EAED,mBAAA;AAtDX","sourcesContent":["$body-color-fallback: #8EC5FC;\n$body-color-webkit: -webkit-linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n$body-color: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);\n\n@font-face {\n    font-family: \"Goligan\";\n    src: url(\"../src/Goligan.ttf\") format(\"truetype\");\n}\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n\nhtml {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n\n    background-color: #4d4855;\n    background-image: linear-gradient(147deg, #4d4855 0%, #000000 74%);\n    background-size: 100%;\n\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    grid-template-rows: 2fr 8fr;\n    grid-template-areas: \n    \"header header header\"\n    \"main main main\";\n\n    header {\n        grid-area: header;\n        grid-column: 1/4;\n        grid-row: 1;\n\n        display: grid;\n        grid-template-columns: 1fr 4fr;\n        justify-items: center;\n        align-items: center;\n\n        img {\n            width: 150px;\n            height: 150px;\n        }\n\n\n        button {\n            padding: 10px 70px;\n            margin: 16px;\n            text-transform: uppercase;\n            border-radius: 8px;\n            font-size: 25px;\n            font-weight: 500;\n            color: #ffffff80;\n            text-shadow: none;\n            background: transparent;\n            cursor: pointer;\n            box-shadow: transparent;\n            border: 1px solid #ffffff80;\n            transition: 0.7s ease;\n            user-select: none;\n          }\n          \n          button:hover,\n          :focus {\n            color: antiquewhite;\n            background: linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);;\n            border: 1px solid cornflowerblue;\n            text-shadow: 0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 20px #ffffff;\n            box-shadow: 0 0 5px yellow, 0 0 20px darkorange, 0 0 50px #880808,\n              0 0 100px darkred;\n          }\n          \n    }\n\n    #content {\n        grid-area: main;\n        grid-column: 1/4;\n        grid-row: 2;\n\n        display: grid;\n        grid-template-columns: 1fr 1fr 1fr;\n        grid-template-rows: 1fr 1fr;\n        align-items: baseline;\n        padding-top: 16px;\n\n        .text-content1 {\n            width: 100%;\n            font-size: 32px;\n            \n            display: flex;\n            justify-content: center;\n            align-self: center;\n\n            padding-left: 16px;\n\n            grid-column: 1/3;\n        }\n\n\n        .text-content2 {\n            width: 100%;\n            font-size: 32px;\n            \n            display: flex;\n            justify-content: center;\n            align-self: center;\n\n            padding-left: 16px;\n\n            grid-column: 2/4;\n        }\n\n\n        #imgright {\n            display: flex;\n            \n            align-self: center;\n\n            grid-column: 3;\n            grid-row: 1;\n        }\n\n        #imgleft {\n            display: flex;\n            justify-content: end;\n            align-self: center;\n            grid-row: 2;\n            grid-column: 1;\n        }\n\n        #contact {\n            grid-column: 1/3;\n            grid-row: 2;\n            display: grid;\n            justify-content: center;\n            align-self: center;\n\n            font-size: xx-large;\n\n            li {\n                list-style: none;\n                \n                ul {\n                    font-family: \"Goligan\";\n                    color: antiquewhite;\n                    font-size: x-large;\n                }\n            }\n        }\n\n        #contact-ad-text {\n            grid-column: 2/4;\n            grid-row: 1;\n            display: grid;\n            justify-content: center;\n            align-self: center;\n            font-size: 32px;\n        }\n\n        #contact-ad-img {\n            justify-self: center;\n            align-self: center;\n        }\n\n        #contact-ingr {\n            grid-row: 2;\n            grid-column: 2/4;\n            justify-self: center;\n            align-self: center;\n\n        }\n\n        span {\n\n            font-family: \"Goligan\";\n\n            background-color: #ffcb43;\n            background-image: linear-gradient(319deg, #ffcb43 0%, #ff6425 37%, #ff0016 100%);\n            background-clip: text;\n            -webkit-text-fill-color: transparent;\n\n            &:hover {\n                \n            text-shadow: 0 0 1px yellow, 0 0 5px darkorange, 0 0 8px #880808,\n            0 0 15px darkred;\n            \n            }\n\n        }\n        \n        \n\n        img {\n            width: 250px;\n            height: 250px;\n\n        }\n\n        p {\n\n            font-family: \"Goligan\";\n\n           color: antiquewhite;\n        }\n\n\n    }\n\n}"],"sourceRoot":""}]);
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


function displayAboutPage(){


    const contentDiv = document.getElementById("content");
    const divAboutAdText = document.createElement("div");
    const spanAdText = document.createElement("span");
    const pAdText = document.createElement("p");
    const br = document.createElement("br")

    const divAdImg = document.createElement("div")
    const imgAd = new Image();
    const imgAdUrl = "../src/imgs/coke.png";

    const divContactImg = document.createElement("div");
    const imgContact = document.createElement("img");
    const imgContactUrl = "../src/imgs/mozza2.png"

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
    imgContact.src = imgContactUrl;
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


function displayLandingPage(){

    const contentDiv = document.getElementById("content");
    const divPepp = document.createElement("div");
    const spanPepp = document.createElement("span");
    const pPepp = document.createElement("p");

    const divPizza = document.createElement("div")
    const imgPizza = document.createElement("img");
    const imgPizzaUrl = "../src/imgs/pizzaslice.png";

    const divBasil = document.createElement("div");
    const imgBasil = document.createElement("img");
    const imgBasilUrl = "../src/imgs/basil.png"

    const divIngr = document.createElement("div");
    const pIngr = document.createElement("p");
    const spanIngr = document.createElement("span");

    divPepp.classList.add("text-content1");
    spanPepp.textContent = "Pepperonni";
    pPepp.innerHTML = "Life is all about " + spanPepp.outerHTML + ". It will always be.";

    divPepp.appendChild(pPepp)

    divPizza.setAttribute("id", "imgright")
    imgPizza.src = imgPizzaUrl;
    divPizza.appendChild(imgPizza)

    imgBasil.src = imgBasilUrl;
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
function displayMenuPage(){

    const contentDiv = document.getElementById("content");
    const divPepp = document.createElement("div");
    const spanPepp = document.createElement("span");
    const spanPepp2 = document.createElement("span")
    const pPepp = document.createElement("p");

    const divImgRight = document.createElement("div")
    const imgRight = document.createElement("img");
    const imgRightUrl = "../src/imgs/pepperonnipizza.png";

    const divImgLeft = document.createElement("div");
    const imgLeft = document.createElement("img");
    const imgLeftUrl = "../src/imgs/coppapizza.png"

    const divCoppa = document.createElement("div");
    const pCoppa = document.createElement("p");
    const spanCoppa = document.createElement("span");

    divPepp.classList.add("text-content1");
    spanPepp.textContent = "Pepperonni";
    spanPepp2.textContent = "bestseller"
    pPepp.innerHTML = "The classic " + spanPepp.outerHTML + ". Unrivaled and unparalleled, our absolute " + spanPepp2.outerHTML + " crafted by the hands of Tonyo's, our head chef. Made with a perfect blend of premium ingredients, including high-qualit pizza dough, rich tomate sauce, gooey mozzarella cheese, and flavorful pepperoni slices, it's a taste sensation that stands alone.";

    divPepp.appendChild(pPepp);

    divImgRight.setAttribute("id", "imgright");
    imgRight.src = imgRightUrl;
    divImgRight.appendChild(imgRight);

    divImgLeft.setAttribute("id", "imgleft");
    imgLeft.src = imgLeftUrl;
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
/* harmony import */ var _imgs_basil_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./imgs/basil.png */ "./src/imgs/basil.png");
/* harmony import */ var _imgs_coke_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imgs/coke.png */ "./src/imgs/coke.png");
/* harmony import */ var _imgs_coppapizza_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imgs/coppapizza.png */ "./src/imgs/coppapizza.png");
/* harmony import */ var _imgs_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./imgs/logo.png */ "./src/imgs/logo.png");
/* harmony import */ var _imgs_mozza2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./imgs/mozza2.png */ "./src/imgs/mozza2.png");
/* harmony import */ var _imgs_pepperonnipizza_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./imgs/pepperonnipizza.png */ "./src/imgs/pepperonnipizza.png");
/* harmony import */ var _imgs_pizzaslice_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./imgs/pizzaslice.png */ "./src/imgs/pizzaslice.png");

















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

(0,_js_initial_page_load__WEBPACK_IMPORTED_MODULE_1__.displayLandingPage)();
document.addEventListener("DOMContentLoaded", dynamicContent);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQStCOzs7QUFHNEI7QUFDTDtBQUNBOztBQUVsQjtBQUNGO0FBQ1k7QUFDWjtBQUNJO0FBQ2tCO0FBQ1Y7Ozs7QUFJOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSx5RUFBa0I7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBZTtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFFQUFnQjtBQUM1Qjs7QUFFQSxLQUFLO0FBQ0wsQ0FBQzs7QUFFRDs7QUFFQSx5RUFBa0I7QUFDbEIsOEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5zY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9zdHlsZS5zY3NzPzc1YmEiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9qcy9hYm91dC1wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvanMvaW5pdGlhbC1wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2UvLi9zcmMvanMvbWVudS1wYWdlLWxvYWQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudHBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnRwYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50cGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vc3JjL0dvbGlnYW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiR29saWdhblwiO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KSBmb3JtYXQoXCJ0cnVldHlwZVwiKTtcbn1cbioge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRkNDg1NTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE0N2RlZywgIzRkNDg1NSAwJSwgIzAwMDAwMCA3NCUpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDhmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXCJoZWFkZXIgaGVhZGVyIGhlYWRlclwiIFwibWFpbiBtYWluIG1haW5cIjtcbn1cbmJvZHkgaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGdyaWQtcm93OiAxO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbmJvZHkgaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbn1cbmJvZHkgaGVhZGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggNzBweDtcbiAgbWFyZ2luOiAxNnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MDE5NjA3ODQzKTtcbiAgdGV4dC1zaGFkb3c6IG5vbmU7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTAxOTYwNzg0Myk7XG4gIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5ib2R5IGhlYWRlciBidXR0b246aG92ZXIsXG5ib2R5IGhlYWRlciA6Zm9jdXMge1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMzE5ZGVnLCAjZmZjYjQzIDAlLCAjZmY2NDI1IDM3JSwgI2ZmMDAxNiAxMDAlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgY29ybmZsb3dlcmJsdWU7XG4gIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmZmZmYsIDAgMCAxMHB4ICNmZmZmZmYsIDAgMCAyMHB4ICNmZmZmZmY7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggeWVsbG93LCAwIDAgMjBweCBkYXJrb3JhbmdlLCAwIDAgNTBweCAjODgwODA4LCAwIDAgMTAwcHggZGFya3JlZDtcbn1cbmJvZHkgI2NvbnRlbnQge1xuICBncmlkLWFyZWE6IG1haW47XG4gIGdyaWQtY29sdW1uOiAxLzQ7XG4gIGdyaWQtcm93OiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG59XG5ib2R5ICNjb250ZW50IC50ZXh0LWNvbnRlbnQxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBncmlkLWNvbHVtbjogMS8zO1xufVxuYm9keSAjY29udGVudCAudGV4dC1jb250ZW50MiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDMycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgZ3JpZC1jb2x1bW46IDIvNDtcbn1cbmJvZHkgI2NvbnRlbnQgI2ltZ3JpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBncmlkLWNvbHVtbjogMztcbiAgZ3JpZC1yb3c6IDE7XG59XG5ib2R5ICNjb250ZW50ICNpbWdsZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAxO1xufVxuYm9keSAjY29udGVudCAjY29udGFjdCB7XG4gIGdyaWQtY29sdW1uOiAxLzM7XG4gIGdyaWQtcm93OiAyO1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xufVxuYm9keSAjY29udGVudCAjY29udGFjdCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ib2R5ICNjb250ZW50ICNjb250YWN0IGxpIHVsIHtcbiAgZm9udC1mYW1pbHk6IFwiR29saWdhblwiO1xuICBjb2xvcjogYW50aXF1ZXdoaXRlO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5ib2R5ICNjb250ZW50ICNjb250YWN0LWFkLXRleHQge1xuICBncmlkLWNvbHVtbjogMi80O1xuICBncmlkLXJvdzogMTtcbiAgZGlzcGxheTogZ3JpZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuYm9keSAjY29udGVudCAjY29udGFjdC1hZC1pbWcge1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuYm9keSAjY29udGVudCAjY29udGFjdC1pbmdyIHtcbiAgZ3JpZC1yb3c6IDI7XG4gIGdyaWQtY29sdW1uOiAyLzQ7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5ib2R5ICNjb250ZW50IHNwYW4ge1xuICBmb250LWZhbWlseTogXCJHb2xpZ2FuXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNiNDM7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgzMTlkZWcsICNmZmNiNDMgMCUsICNmZjY0MjUgMzclLCAjZmYwMDE2IDEwMCUpO1xuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmJvZHkgI2NvbnRlbnQgc3Bhbjpob3ZlciB7XG4gIHRleHQtc2hhZG93OiAwIDAgMXB4IHllbGxvdywgMCAwIDVweCBkYXJrb3JhbmdlLCAwIDAgOHB4ICM4ODA4MDgsIDAgMCAxNXB4IGRhcmtyZWQ7XG59XG5ib2R5ICNjb250ZW50IGltZyB7XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cbmJvZHkgI2NvbnRlbnQgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvbGlnYW5cIjtcbiAgY29sb3I6IGFudGlxdWV3aGl0ZTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBO0VBQ0ksc0JBQUE7RUFDQSwrREFBQTtBQUhKO0FBTUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0FBSko7O0FBUUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBRUkseUJBQUE7RUFDQSxrRUFBQTtFQUNBLHFCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtFQUNBLDREQUNBO0FBUko7QUFXSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVZSO0FBWVE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtBQVZaO0FBY1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbURBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBWlo7QUFlVTs7RUFFRSxtQkFBQTtFQUNBLDBFQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnRUFBQTtFQUNBLG9GQUFBO0FBYlo7QUFtQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0FBbEJSO0FBb0JRO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBRUEsZ0JBQUE7QUFyQlo7QUF5QlE7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFFQSxnQkFBQTtBQTFCWjtBQThCUTtFQUNJLGFBQUE7RUFFQSxrQkFBQTtFQUVBLGNBQUE7RUFDQSxXQUFBO0FBOUJaO0FBaUNRO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQS9CWjtBQWtDUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBRUEsbUJBQUE7QUFqQ1o7QUFtQ1k7RUFDSSxnQkFBQTtBQWpDaEI7QUFtQ2dCO0VBQ0ksc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBakNwQjtBQXNDUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXBDWjtBQXVDUTtFQUNJLG9CQUFBO0VBQ0Esa0JBQUE7QUFyQ1o7QUF3Q1E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBdENaO0FBMENRO0VBRUksc0JBQUE7RUFFQSx5QkFBQTtFQUNBLGdGQUFBO0VBQ0EscUJBQUE7RUFDQSxvQ0FBQTtBQTFDWjtBQTRDWTtFQUVBLGtGQUFBO0FBM0NaO0FBb0RRO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFsRFo7QUFzRFE7RUFFSSxzQkFBQTtFQUVELG1CQUFBO0FBdERYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiRib2R5LWNvbG9yLWZhbGxiYWNrOiAjOEVDNUZDO1xcbiRib2R5LWNvbG9yLXdlYmtpdDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNjJkZWcsICM4RUM1RkMgMCUsICNFMEMzRkMgMTAwJSk7XFxuJGJvZHktY29sb3I6IGxpbmVhci1ncmFkaWVudCg2MmRlZywgIzhFQzVGQyAwJSwgI0UwQzNGQyAxMDAlKTtcXG5cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6IFxcXCJHb2xpZ2FuXFxcIjtcXG4gICAgc3JjOiB1cmwoXFxcIi4uL3NyYy9Hb2xpZ2FuLnR0ZlxcXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG59XFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuXFxuaHRtbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGQ0ODU1O1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMTQ3ZGVnLCAjNGQ0ODU1IDAlLCAjMDAwMDAwIDc0JSk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgOGZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICBcXFwibWFpbiBtYWluIG1haW5cXFwiO1xcblxcbiAgICBoZWFkZXIge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICAgICAgZ3JpZC1yb3c6IDE7XFxuXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggNzBweDtcXG4gICAgICAgICAgICBtYXJnaW46IDE2cHg7XFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY4MDtcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjgwO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuN3MgZWFzZTtcXG4gICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBcXG4gICAgICAgICAgYnV0dG9uOmhvdmVyLFxcbiAgICAgICAgICA6Zm9jdXMge1xcbiAgICAgICAgICAgIGNvbG9yOiBhbnRpcXVld2hpdGU7XFxuICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDMxOWRlZywgI2ZmY2I0MyAwJSwgI2ZmNjQyNSAzNyUsICNmZjAwMTYgMTAwJSk7O1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xcbiAgICAgICAgICAgIHRleHQtc2hhZG93OiAwIDAgNXB4ICNmZmZmZmYsIDAgMCAxMHB4ICNmZmZmZmYsIDAgMCAyMHB4ICNmZmZmZmY7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCB5ZWxsb3csIDAgMCAyMHB4IGRhcmtvcmFuZ2UsIDAgMCA1MHB4ICM4ODA4MDgsXFxuICAgICAgICAgICAgICAwIDAgMTAwcHggZGFya3JlZDtcXG4gICAgICAgICAgfVxcbiAgICAgICAgICBcXG4gICAgfVxcblxcbiAgICAjY29udGVudCB7XFxuICAgICAgICBncmlkLWFyZWE6IG1haW47XFxuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xcbiAgICAgICAgZ3JpZC1yb3c6IDI7XFxuXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xcblxcbiAgICAgICAgLnRleHQtY29udGVudDEge1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzJweDtcXG4gICAgICAgICAgICBcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XFxuXFxuICAgICAgICAgICAgZ3JpZC1jb2x1bW46IDEvMztcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgICAgIC50ZXh0LWNvbnRlbnQyIHtcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xcblxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgICAgICB9XFxuXFxuXFxuICAgICAgICAjaW1ncmlnaHQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAzO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2ltZ2xlZnQge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGdyaWQtcm93OiAyO1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbnRhY3Qge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAxLzM7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDI7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxuICAgICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcXG5cXG4gICAgICAgICAgICBsaSB7XFxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgICAgICAgICAgICAgIFxcbiAgICAgICAgICAgICAgICB1bCB7XFxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkdvbGlnYW5cXFwiO1xcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb250YWN0LWFkLXRleHQge1xcbiAgICAgICAgICAgIGdyaWQtY29sdW1uOiAyLzQ7XFxuICAgICAgICAgICAgZ3JpZC1yb3c6IDE7XFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbnRhY3QtYWQtaW1nIHtcXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjY29udGFjdC1pbmdyIHtcXG4gICAgICAgICAgICBncmlkLXJvdzogMjtcXG4gICAgICAgICAgICBncmlkLWNvbHVtbjogMi80O1xcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHNwYW4ge1xcblxcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiR29saWdhblxcXCI7XFxuXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2I0MztcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMzE5ZGVnLCAjZmZjYjQzIDAlLCAjZmY2NDI1IDM3JSwgI2ZmMDAxNiAxMDAlKTtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxuICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xcblxcbiAgICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgICAgICBcXG4gICAgICAgICAgICB0ZXh0LXNoYWRvdzogMCAwIDFweCB5ZWxsb3csIDAgMCA1cHggZGFya29yYW5nZSwgMCAwIDhweCAjODgwODA4LFxcbiAgICAgICAgICAgIDAgMCAxNXB4IGRhcmtyZWQ7XFxuICAgICAgICAgICAgXFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICBcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XFxuXFxuICAgICAgICB9XFxuXFxuICAgICAgICBwIHtcXG5cXG4gICAgICAgICAgICBmb250LWZhbWlseTogXFxcIkdvbGlnYW5cXFwiO1xcblxcbiAgICAgICAgICAgY29sb3I6IGFudGlxdWV3aGl0ZTtcXG4gICAgICAgIH1cXG5cXG5cXG4gICAgfVxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgQ29rZSBmcm9tIFwiLi4vaW1ncy9jb2tlLnBuZ1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5QWJvdXRQYWdlKCl7XG5cblxuICAgIGNvbnN0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgZGl2QWJvdXRBZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNwYW5BZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBjb25zdCBwQWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnJcIilcblxuICAgIGNvbnN0IGRpdkFkSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGltZ0FkID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgaW1nQWRVcmwgPSBcIi4uL3NyYy9pbWdzL2Nva2UucG5nXCI7XG5cbiAgICBjb25zdCBkaXZDb250YWN0SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWdDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBpbWdDb250YWN0VXJsID0gXCIuLi9zcmMvaW1ncy9tb3p6YTIucG5nXCJcblxuICAgIGNvbnN0IGRpdkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXG4gICAgY29uc3QgdWxDb250YWN0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKVxuICAgIGNvbnN0IHVsQ29udGFjdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIilcbiAgICBjb25zdCB1bENvbnRhY3QzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXG5cbiAgICBkaXZBYm91dEFkVGV4dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3QtYWQtdGV4dFwiKTtcbiAgICBzcGFuQWRUZXh0LnRleHRDb250ZW50ID0gXCJ6ZXJvIGRlbGl2ZXJ5IGNoYXJnZVwiXG4gICAgcEFkVGV4dC5pbm5lckhUTUwgPSBcIkRvdWJsZSB0aGUgcGl6emFzLCBcIiArIHNwYW5BZFRleHQub3V0ZXJIVE1MICsgXCIsIHBsdXMgYSBtaW5kLWJsb3dpbmcsPGJyPiBpY2UtY29sZCBDb2NhLUNvbGEgLSBiZWNhdXNlIHdpbm5pbmcgdGFzdGVzIGV2ZW4gYmV0dGVyIHdoZW4gaXQncyBmcmVlICEgPGJyPlVubGVhc2ggZmxhdm9yIGRvbWluYXRpb24gbm93ICFcIlxuICAgIGRpdkFib3V0QWRUZXh0LmFwcGVuZENoaWxkKHBBZFRleHQpO1xuXG4gICAgZGl2QWRJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWFkLWltZ1wiKTtcbiAgICBpbWdBZC5zcmMgPSBDb2tlO1xuICAgIGRpdkFkSW1nLmFwcGVuZENoaWxkKGltZ0FkKTtcblxuICAgIGRpdkNvbnRhY3RJbWcuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb250YWN0LWluZ3JcIik7XG4gICAgaW1nQ29udGFjdC5zcmMgPSBpbWdDb250YWN0VXJsO1xuICAgIGRpdkNvbnRhY3RJbWcuYXBwZW5kQ2hpbGQoaW1nQ29udGFjdCk7XG5cbiAgICBkaXZDb250YWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdFwiKVxuICAgIHBDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0IHVzIGF0OiBcIlxuXG4gICAgdWxDb250YWN0MS50ZXh0Q29udGVudCA9IFwiKzUxIDI1IDc1IDg5IDU1XCJcbiAgICB1bENvbnRhY3QyLnRleHRDb250ZW50ID0gXCIyNyBUb255bydzIEFsbGV5XCJcbiAgICB1bENvbnRhY3QzLnRleHRDb250ZW50ID0gXCJUb255bydzIENpdHlcIlxuXG4gICAgbGlDb250YWN0LmFwcGVuZENoaWxkKHVsQ29udGFjdDEpXG4gICAgbGlDb250YWN0LmFwcGVuZENoaWxkKHVsQ29udGFjdDIpXG4gICAgbGlDb250YWN0LmFwcGVuZENoaWxkKHVsQ29udGFjdDMpXG5cbiAgICBkaXZDb250YWN0LmFwcGVuZENoaWxkKHBDb250YWN0KVxuICAgIGRpdkNvbnRhY3QuYXBwZW5kQ2hpbGQoYnIpXG4gICAgZGl2Q29udGFjdC5hcHBlbmRDaGlsZChsaUNvbnRhY3QpXG5cbiAgIFxuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2QWJvdXRBZFRleHQpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2QWRJbWcpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2Q29udGFjdEltZyk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXZDb250YWN0KTtcblxuXG5cbn1cbiIsIlxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheUxhbmRpbmdQYWdlKCl7XG5cbiAgICBjb25zdCBjb250ZW50RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGRpdlBlcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHNwYW5QZXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgY29uc3QgcFBlcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IGRpdlBpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGltZ1BpenphID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBpbWdQaXp6YVVybCA9IFwiLi4vc3JjL2ltZ3MvcGl6emFzbGljZS5wbmdcIjtcblxuICAgIGNvbnN0IGRpdkJhc2lsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBpbWdCYXNpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgaW1nQmFzaWxVcmwgPSBcIi4uL3NyYy9pbWdzL2Jhc2lsLnBuZ1wiXG5cbiAgICBjb25zdCBkaXZJbmdyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBwSW5nciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHNwYW5JbmdyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG5cbiAgICBkaXZQZXBwLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRlbnQxXCIpO1xuICAgIHNwYW5QZXBwLnRleHRDb250ZW50ID0gXCJQZXBwZXJvbm5pXCI7XG4gICAgcFBlcHAuaW5uZXJIVE1MID0gXCJMaWZlIGlzIGFsbCBhYm91dCBcIiArIHNwYW5QZXBwLm91dGVySFRNTCArIFwiLiBJdCB3aWxsIGFsd2F5cyBiZS5cIjtcblxuICAgIGRpdlBlcHAuYXBwZW5kQ2hpbGQocFBlcHApXG5cbiAgICBkaXZQaXp6YS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ3JpZ2h0XCIpXG4gICAgaW1nUGl6emEuc3JjID0gaW1nUGl6emFVcmw7XG4gICAgZGl2UGl6emEuYXBwZW5kQ2hpbGQoaW1nUGl6emEpXG5cbiAgICBpbWdCYXNpbC5zcmMgPSBpbWdCYXNpbFVybDtcbiAgICBkaXZCYXNpbC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltZ2xlZnRcIilcbiAgICBkaXZCYXNpbC5hcHBlbmRDaGlsZChpbWdCYXNpbCk7XG5cbiAgICBkaXZJbmdyLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRlbnQyXCIpO1xuICAgIHNwYW5JbmdyLnRleHRDb250ZW50ID0gXCJ3ZSBiZWxpZXZlXCI7XG4gICAgcEluZ3IuaW5uZXJIVE1MID0gXCJBdCBUb255bydzIFwiICsgc3BhbkluZ3Iub3V0ZXJIVE1MICsgXCIgaW4gZnJlc2ggYW5kIGJpb2xvZ2ljYWwgaW5ncmVkaWVudHMuIERvIHlvdSA/XCJcbiAgICBkaXZJbmdyLmFwcGVuZENoaWxkKHBJbmdyKTtcblxuXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpdlBlcHApO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2UGl6emEpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2QmFzaWwpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2SW5ncik7XG5cblxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlNZW51UGFnZSgpe1xuXG4gICAgY29uc3QgY29udGVudERpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBkaXZQZXBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCBzcGFuUGVwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGNvbnN0IHNwYW5QZXBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpXG4gICAgY29uc3QgcFBlcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICAgIGNvbnN0IGRpdkltZ1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIGNvbnN0IGltZ1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBjb25zdCBpbWdSaWdodFVybCA9IFwiLi4vc3JjL2ltZ3MvcGVwcGVyb25uaXBpenphLnBuZ1wiO1xuXG4gICAgY29uc3QgZGl2SW1nTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgaW1nTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgY29uc3QgaW1nTGVmdFVybCA9IFwiLi4vc3JjL2ltZ3MvY29wcGFwaXp6YS5wbmdcIlxuXG4gICAgY29uc3QgZGl2Q29wcGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IHBDb3BwYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IHNwYW5Db3BwYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuXG4gICAgZGl2UGVwcC5jbGFzc0xpc3QuYWRkKFwidGV4dC1jb250ZW50MVwiKTtcbiAgICBzcGFuUGVwcC50ZXh0Q29udGVudCA9IFwiUGVwcGVyb25uaVwiO1xuICAgIHNwYW5QZXBwMi50ZXh0Q29udGVudCA9IFwiYmVzdHNlbGxlclwiXG4gICAgcFBlcHAuaW5uZXJIVE1MID0gXCJUaGUgY2xhc3NpYyBcIiArIHNwYW5QZXBwLm91dGVySFRNTCArIFwiLiBVbnJpdmFsZWQgYW5kIHVucGFyYWxsZWxlZCwgb3VyIGFic29sdXRlIFwiICsgc3BhblBlcHAyLm91dGVySFRNTCArIFwiIGNyYWZ0ZWQgYnkgdGhlIGhhbmRzIG9mIFRvbnlvJ3MsIG91ciBoZWFkIGNoZWYuIE1hZGUgd2l0aCBhIHBlcmZlY3QgYmxlbmQgb2YgcHJlbWl1bSBpbmdyZWRpZW50cywgaW5jbHVkaW5nIGhpZ2gtcXVhbGl0IHBpenphIGRvdWdoLCByaWNoIHRvbWF0ZSBzYXVjZSwgZ29vZXkgbW96emFyZWxsYSBjaGVlc2UsIGFuZCBmbGF2b3JmdWwgcGVwcGVyb25pIHNsaWNlcywgaXQncyBhIHRhc3RlIHNlbnNhdGlvbiB0aGF0IHN0YW5kcyBhbG9uZS5cIjtcblxuICAgIGRpdlBlcHAuYXBwZW5kQ2hpbGQocFBlcHApO1xuXG4gICAgZGl2SW1nUmlnaHQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWdyaWdodFwiKTtcbiAgICBpbWdSaWdodC5zcmMgPSBpbWdSaWdodFVybDtcbiAgICBkaXZJbWdSaWdodC5hcHBlbmRDaGlsZChpbWdSaWdodCk7XG5cbiAgICBkaXZJbWdMZWZ0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaW1nbGVmdFwiKTtcbiAgICBpbWdMZWZ0LnNyYyA9IGltZ0xlZnRVcmw7XG4gICAgZGl2SW1nTGVmdC5hcHBlbmRDaGlsZChpbWdMZWZ0KTtcblxuICAgIGRpdkNvcHBhLmNsYXNzTGlzdC5hZGQoXCJ0ZXh0LWNvbnRlbnQyXCIpO1xuICAgIHNwYW5Db3BwYS50ZXh0Q29udGVudCA9IFwiQ29wcGFcIlxuICAgIHBDb3BwYS5pbm5lckhUTUwgPSBcIlRoZSBcIiArIHNwYW5Db3BwYS5vdXRlckhUTUwgKyBcIiBDYXJuaXZhbDogQSBwaXp6YSBwYXJ0eSBob3N0ZWQgYnkgVG9ueW8ncywgb3VyIG1hZXN0cm8gb2YgbWVycmltZW50IGluIHRoZSBraXRjaGVuLiBQaWN0dXJlIHRoaXMgLSBwcmltbyBwaXp6YSBkb3VnaCwgYSBzYXVjeSBzb2lyZWUgb2YgdG9tYXRvIGdvb2RuZXNzLCBtb3p6YXJlbGxhIGRvaW5nIHRoZSBtZWx0eSBkYW5jZSwgYW5kIHNsaWNlcyBvZiBjb3BwYSBicmluZ2luZyB0aGUgZmxhdm9yIGZpZXN0YS4gSXQncyBub3QganVzdCBhIHBpenphOyBpdCdzIGEgQ29wcGEgQ2FiYW5hIGluIHlvdXIgbW91dGghXCJcbiAgICBkaXZDb3BwYS5hcHBlbmRDaGlsZChwQ29wcGEpO1xuXG5cbiAgICBjb250ZW50RGl2LmFwcGVuZENoaWxkKGRpdlBlcHApO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2Q29wcGEpO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kQ2hpbGQoZGl2SW1nTGVmdCk7XG4gICAgY29udGVudERpdi5hcHBlbmRDaGlsZChkaXZJbWdSaWdodCk7XG5cbiAgICBjb25zdCBjaGFuZ2VKQ29udGVudExlZnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltZ2xlZnRcIilcbiAgICBjaGFuZ2VKQ29udGVudExlZnQuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcImNlbnRlclwiO1xuXG4gICAgY29uc3QgY2hhbmdlSkNvbnRlbnRSaWdodCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW1ncmlnaHRcIik7XG4gICAgY2hhbmdlSkNvbnRlbnRSaWdodC5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCJcblxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHNjc3MgZnJvbSBcIi4vc3R5bGUuc2Nzc1wiXG5cblxuaW1wb3J0IHsgZGlzcGxheUxhbmRpbmdQYWdlIH0gZnJvbSBcIi4vanMvaW5pdGlhbC1wYWdlLWxvYWRcIlxuaW1wb3J0IHsgZGlzcGxheU1lbnVQYWdlIH0gZnJvbSBcIi4vanMvbWVudS1wYWdlLWxvYWRcIjtcbmltcG9ydCB7IGRpc3BsYXlBYm91dFBhZ2V9IGZyb20gXCIuL2pzL2Fib3V0LXBhZ2UtbG9hZFwiXG5cbmltcG9ydCBCYXNpbCBmcm9tIFwiLi9pbWdzL2Jhc2lsLnBuZ1wiXG5pbXBvcnQgQ29rZSBmcm9tIFwiLi9pbWdzL2Nva2UucG5nXCJcbmltcG9ydCBjb3BwYXBpenphIGZyb20gXCIuL2ltZ3MvY29wcGFwaXp6YS5wbmdcIlxuaW1wb3J0IGxvZ28gZnJvbSBcIi4vaW1ncy9sb2dvLnBuZ1wiXG5pbXBvcnQgbW96emEyIGZyb20gXCIuL2ltZ3MvbW96emEyLnBuZ1wiXG5pbXBvcnQgcGVwcGVyb25uaXBpenphIGZyb20gXCIuL2ltZ3MvcGVwcGVyb25uaXBpenphLnBuZ1wiXG5pbXBvcnQgcGl6emFzbGljZSBmcm9tIFwiLi9pbWdzL3Bpenphc2xpY2UucG5nXCJcblxuXG5cbmZ1bmN0aW9uIGR5bmFtaWNDb250ZW50KCkge1xuICAgIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiYnV0dG9uXCIpXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKVxuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGlmICggYnV0dG9uLnRleHRDb250ZW50ID09PSBcIkhvbWVcIikge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheUxhbmRpbmdQYWdlKClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICggYnV0dG9uLnRleHRDb250ZW50ID09PSBcIk1lbnVcIil7XG4gICAgICAgICAgICBjb250ZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgICAgICAgICBkaXNwbGF5TWVudVBhZ2UoKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCBidXR0b24udGV4dENvbnRlbnQgPT09IFwiQWJvdXRcIikge1xuICAgICAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZGlzcGxheUFib3V0UGFnZSgpO1xuICAgICAgICB9XG5cbiAgICB9KTtcbn0pO1xuXG59O1xuXG5kaXNwbGF5TGFuZGluZ1BhZ2UoKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGR5bmFtaWNDb250ZW50KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=