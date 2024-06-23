/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./monster.ttf */ "./src/monster.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./add.svg */ "./src/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./delete.svg */ "./src/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./edit.svg */ "./src/edit.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-style: normal;
  }
#main{
    padding: 1rem;
}

body{
 /* background: url(./wall.jpg);  */
background-size: cover;
font-family: 'MyFont';
}

.infoDiv{   
    position: relative;
    display: grid;
    border-radius: 10px;
    grid-template-columns: 1fr 1fr;
    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */
}

.projects{
    display: flex;
    flex-direction: column;

}

.tasks{

}

.addTaskButton{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: center;
    height: 2rem;
    width: 2rem;
}

.project{
    padding: 2rem;
    margin: 2rem;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    -moz-border-radius-bottomleft: 50px;
border-bottom-left-radius: 50px;
display: flex;
justify-content: space-evenly;
align-items: center;
height: 30px;
}


.addButton{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: center;
    height: 2rem;
    width: 2rem;
}

.projectsHeader{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.tasksHeader{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.task{
    height: 30px;
    padding: 2rem;
    margin: 2rem;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    /* -moz-border-radius-bottomleft: 50px;
border-bottom-left-radius: 50px; */
display: flex;
justify-content: space-between;
align-items: center;
border-top-right-radius: 1rem;
border-bottom-right-radius: 1rem;
}
.task > div{
flex-grow: 1;
/* font-weight: bolder; */
}
.buttons{

    display: flex;
    justify-content: flex-end;
    gap: 1rem;
}

.project>button{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: cover;
    background-position: contain;
    border: none;
}

.buttons > button:first-child{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    background-size: contain;
    background-position: center;
    border: none;
}

.edit{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_3___});
    background-size: contain;
    background-position: center;
    border: none;
}

button{
    padding: 1rem;
}


.buttons>input{
    margin: 0;
    flex-grow: 1;
}
.todoForms{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    position: absolute;
    top: 22%;
    left:39%;
    border: 1px solid black;
    border-radius: 1rem;
}

.innerDiv{
    display: flex;
    gap: 4rem;
}

.innerDiv>label{
    width: 20%;
}

.innerDiv>input{
    flex-grow: 1;
    font-family: 'MyFont';
}

textarea{
    flex-grow: 1;
}

.switch{
    display: none;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .checkedDiv{
    
  }
  .innerDiv>div{
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
  }
  
  .displayedText{
    width: 80%;
  }

  .displayedTextHeader{
    display: flex;
    gap: 4rem;
  }



/*
  .container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  
 
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    border-radius: 50%;
  }
  

  .container:hover input ~ .checkmark {
    background-color: #ccc;
  }
  

  .container input:checked ~ .checkmark {
    background-color: #2196F3;
  }
  

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }
  

  .container input:checked ~ .checkmark:after {
    display: block;
  }
  

  .container .checkmark:after {
       top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
  }
   */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAyB;IACzB,kBAAkB;EACpB;AACF;IACI,aAAa;AACjB;;AAEA;CACC,kCAAkC;AACnC,sBAAsB;AACtB,qBAAqB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,2IAA2I;AAC/I;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;;AAEA;;AAEA;IACI,mDAA0B;IAC1B,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qIAAqI;IACrI,mCAAmC;AACvC,+BAA+B;AAC/B,aAAa;AACb,6BAA6B;AAC7B,mBAAmB;AACnB,YAAY;AACZ;;;AAGA;IACI,mDAA0B;IAC1B,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,qIAAqI;IACrI;kCAC8B;AAClC,aAAa;AACb,8BAA8B;AAC9B,mBAAmB;AACnB,6BAA6B;AAC7B,gCAAgC;AAChC;AACA;AACA,YAAY;AACZ,yBAAyB;AACzB;AACA;;IAEI,aAAa;IACb,yBAAyB;IACzB,SAAS;AACb;;AAEA;IACI,mDAA6B;IAC7B,sBAAsB;IACtB,4BAA4B;IAC5B,YAAY;AAChB;;AAEA;IACI,mDAA6B;IAC7B,wBAAwB;IACxB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,mDAA2B;IAC3B,wBAAwB;IACxB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;;EAEA;EACA;IACE,aAAa;IACb,YAAY;IACZ,6BAA6B;EAC/B;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;;;AAIF;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiDI","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./monster.ttf');\n    font-style: normal;\n  }\n#main{\n    padding: 1rem;\n}\n\nbody{\n /* background: url(./wall.jpg);  */\nbackground-size: cover;\nfont-family: 'MyFont';\n}\n\n.infoDiv{   \n    position: relative;\n    display: grid;\n    border-radius: 10px;\n    grid-template-columns: 1fr 1fr;\n    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n\n}\n\n.tasks{\n\n}\n\n.addTaskButton{\n    background: url(./add.svg);\n    background-size: cover;\n    background-position: center;\n    height: 2rem;\n    width: 2rem;\n}\n\n.project{\n    padding: 2rem;\n    margin: 2rem;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n    -moz-border-radius-bottomleft: 50px;\nborder-bottom-left-radius: 50px;\ndisplay: flex;\njustify-content: space-evenly;\nalign-items: center;\nheight: 30px;\n}\n\n\n.addButton{\n    background: url(./add.svg);\n    background-size: cover;\n    background-position: center;\n    height: 2rem;\n    width: 2rem;\n}\n\n.projectsHeader{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.tasksHeader{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.task{\n    height: 30px;\n    padding: 2rem;\n    margin: 2rem;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n    /* -moz-border-radius-bottomleft: 50px;\nborder-bottom-left-radius: 50px; */\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nborder-top-right-radius: 1rem;\nborder-bottom-right-radius: 1rem;\n}\n.task > div{\nflex-grow: 1;\n/* font-weight: bolder; */\n}\n.buttons{\n\n    display: flex;\n    justify-content: flex-end;\n    gap: 1rem;\n}\n\n.project>button{\n    background: url(./delete.svg);\n    background-size: cover;\n    background-position: contain;\n    border: none;\n}\n\n.buttons > button:first-child{\n    background: url(./delete.svg);\n    background-size: contain;\n    background-position: center;\n    border: none;\n}\n\n.edit{\n    background: url(./edit.svg);\n    background-size: contain;\n    background-position: center;\n    border: none;\n}\n\nbutton{\n    padding: 1rem;\n}\n\n\n.buttons>input{\n    margin: 0;\n    flex-grow: 1;\n}\n.todoForms{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    position: absolute;\n    top: 22%;\n    left:39%;\n    border: 1px solid black;\n    border-radius: 1rem;\n}\n\n.innerDiv{\n    display: flex;\n    gap: 4rem;\n}\n\n.innerDiv>label{\n    width: 20%;\n}\n\n.innerDiv>input{\n    flex-grow: 1;\n    font-family: 'MyFont';\n}\n\ntextarea{\n    flex-grow: 1;\n}\n\n.switch{\n    display: none;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .checkedDiv{\n    \n  }\n  .innerDiv>div{\n    display: flex;\n    flex-grow: 1;\n    justify-content: space-around;\n  }\n  \n  .displayedText{\n    width: 80%;\n  }\n\n  .displayedTextHeader{\n    display: flex;\n    gap: 4rem;\n  }\n\n\n\n/*\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  \n \n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border-radius: 50%;\n  }\n  \n\n  .container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n\n  .container input:checked ~ .checkmark {\n    background-color: #2196F3;\n  }\n  \n\n  .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n\n  .container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n\n  .container .checkmark:after {\n       top: 9px;\n      left: 9px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: white;\n  }\n   */"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addClasses: () => (/* binding */ addClasses),
/* harmony export */   basicLayout: () => (/* binding */ basicLayout),
/* harmony export */   toggleClasses: () => (/* binding */ toggleClasses)
/* harmony export */ });
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/toDo.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


let mainDiv = document.querySelector('#main')

let basicLayout = (function () {
    let toDoHeader = document.createElement('h2')
    toDoHeader.textContent="To-Do-List";
    mainDiv.appendChild(toDoHeader)
    let projectsDiv = document.createElement('div')
    projectsDiv.classList.add('projects')
    let infoDiv = document.createElement('div')
    infoDiv.classList.add('infoDiv')
    infoDiv.appendChild(projectsDiv)
    let tasksDiv = document.createElement('div')
    tasksDiv.classList.add('tasks')
    infoDiv.appendChild(tasksDiv)
    mainDiv.appendChild(infoDiv)
    let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects();
    project.createMainDiv()
    project.newProject()
})();

let toggleClasses = (function () {

        let projects = document.querySelector('.projects')
        let tasks = document.querySelector('.tasks')
        projects.classList.toggle('switch')
        tasks.classList.toggle('switch')
})

let addClasses = (function () {

        let projects = document.querySelector('.projects')
        let tasks = document.querySelector('.tasks')
        projects.classList.add('switch')
        tasks.classList.add('switch')
})

















































































// let defaultProject = (function name(params) {   
//     createHeader()
//     createProject()
// })();


// function createProject() {
//     let template = document.createElement('div')
//     template.classList.add('templates')
//     mainDiv.appendChild(template)
//     createDefaultForm()
// }

// function createInnerHeader(){
//     let formHeader = document.createElement('h3')
//     formHeader.textContent ='Default Project'
//     let innerHeaderDiv = document.createElement('div')
//     innerHeaderDiv.classList.add('innerHeaderDiv')
//     innerHeaderDiv.appendChild(formHeader)
//     innerHeaderDiv.appendChild(dropDown)
//     todoForm.appendChild(innerHeaderDiv)
// }

// function createDefaultForm()
// {
//     let todoForm = document.createElement('form')
//     todoForm.classList.add('todoForms')


//     // let formHeader = document.createElement('h3')
//     // formHeader.textContent ='Default Project'

//     let dropDown = document.createElement('button')
//     dropDown.classList.add('dropDown')

//     let titleLabel = document.createElement('label')
//     titleLabel.setAttribute('for','title')
//     titleLabel.textContent='Title'
//     let title = document.createElement('input')
//     title.setAttribute('id','title')


//     let descriptionLabel = document.createElement('label')
//     descriptionLabel.setAttribute('for','description')
//     descriptionLabel.textContent='Description'
//     let description = document.createElement('input')
//     description.setAttribute('id','description')

//     let dueDateLabel = document.createElement('label')
//     dueDateLabel.setAttribute('for','dueDate')
//     dueDateLabel.textContent = 'DueDate'
//     let dueDate = document.createElement('input')
//     dueDate.setAttribute('id','description')

//     let priorityLabel = document.createElement('label')
//     priorityLabel.setAttribute('for','priority')
//     priorityLabel.textContent='Priority'
//     let priority = document.createElement('input')
//     priority.setAttribute('id','priority')

//     let template = document.querySelector('.templates')


//     let titleDiv = document.createElement('div')
//     titleDiv.classList.add('innerDiv')

//     let descriptionDiv = document.createElement('div')
//     descriptionDiv.classList.add('innerDiv')

//     let dueDateDiv = document.createElement('div')
//     dueDateDiv.classList.add('innerDiv')

//     template.appendChild(todoForm)

//     let priorityDiv = document.createElement('div')
//     priorityDiv.classList.add('innerDiv')


//     let notesDiv = document.createElement('div')
//     notesDiv.classList.add('innerDiv')

//     let notesLabel = document.createElement('label')
//     notesLabel.setAttribute('for','notes')
//     notesLabel.textContent='Notes';

//     let notes = document.createElement('textarea')
//     notes.setAttribute('id','notes')

//     // let innerHeaderDiv = document.createElement('div')
//     // innerHeaderDiv.classList.add('innerHeaderDiv')
//     // innerHeaderDiv.appendChild(formHeader)
//     // innerHeaderDiv.appendChild(dropDown)
//     // todoForm.appendChild(innerHeaderDiv)




//     titleDiv.appendChild(titleLabel)
//     titleDiv.appendChild(title)
//      todoForm.appendChild(titleDiv)

//     descriptionDiv.appendChild(descriptionLabel)
//     descriptionDiv.appendChild(description)
//     todoForm.appendChild(descriptionDiv)

//     dueDateDiv.appendChild(dueDateLabel)
//     dueDateDiv.appendChild(dueDate)
//     todoForm.appendChild(dueDateDiv)
//     priorityDiv.appendChild(priorityLabel)
//     priorityDiv.appendChild(priority)
//     todoForm.appendChild(priorityDiv)

//     notesDiv.appendChild(notesLabel)
//     notesDiv.appendChild(notes)
//     todoForm.appendChild(notesDiv)


//     let buttonDiv = document.createElement('div')
//     buttonDiv.classList.add('innerDiv')
//     let newTaskButton = document.createElement('input')
//     newTaskButton.setAttribute('type','submit')
//     newTaskButton.setAttribute('value','Add a new task')
//     let checked = document.createElement('input')
//     checked.setAttribute('type','checkbox')
//     checked.setAttribute('id','checkbox')
//     let checkedLabel = document.createElement('label')
//     checkedLabel.setAttribute('for','checkbox')
//     checkedLabel.textContent='Finished'
//     let checkedDiv = document.createElement('div')
//     checkedDiv.appendChild(checked)
//     checkedDiv.appendChild(checkedLabel)
//     buttonDiv.appendChild(newTaskButton)
//     buttonDiv.appendChild(checkedDiv)
//     todoForm.appendChild(buttonDiv)
// }



// function createHeader()
// {
//     let headerDiv = document.createElement('div')
//     headerDiv.classList.add('headerDiv')
//     let heading = document.createElement('h1')
//     let newProjectButton = document.createElement('button')
//     newProjectButton.classList.add('addButton')
//     heading.textContent="To-Do-List"
//     mainDiv.appendChild(headerDiv)
//     headerDiv.appendChild(heading)
//     headerDiv.appendChild(newProjectButton)

// }
// export {defaultProject}

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects)
/* harmony export */ });
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");


let projects = class{
    constructor(name)
    {
        this.name = name
    }

    createMainDiv(){
        let projectsDiv = document.querySelector('.projects')       

        let projectsHeader = document.createElement('div')
        projectsHeader.classList.add('projectsHeader')

        let projectsHeading = document.createElement('h3')
        projectsHeading.textContent='Projects'

        let addButton = document.createElement('button')
        addButton.classList.add('addButton')

        projectsHeader.appendChild(projectsHeading)
        projectsHeader.appendChild(addButton)
        projectsDiv.appendChild(projectsHeader)

        let projectDiv = this.createDiv();
        projectsDiv.appendChild(projectDiv)

        let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
        toDo.createTasksDiv()
        toDo.createNewTask()
        
    }



    newProject(){
        let addButton = document.querySelector('.addButton')
        addButton.addEventListener('click',()=>{
            let div = this.createDiv();
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);
        })
    }


    createDiv = ()=> {
        let projectDiv = document.createElement('div')
        projectDiv.classList.add('project')
        let name = document.createElement('div')
        name.textContent='Default Project';
        let deleteButton = document.createElement('button')
        projectDiv.appendChild(name)
        projectDiv.appendChild(deleteButton)
        return projectDiv
    }
}





/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createForm: () => (/* binding */ createForm),
/* harmony export */   inputDetails: () => (/* binding */ inputDetails)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");



let createForm = function(){
    let todoForm = document.createElement('form')
    todoForm.classList.add('todoForms')
    todoForm.setAttribute('id','forms')
    let formHeader = document.createElement('h3')
    formHeader.textContent ='To-Do-List'
    let titleLabel = document.createElement('label')
    titleLabel.setAttribute('for','title')
    titleLabel.textContent='Title'
    let title = document.createElement('input')
    title.setAttribute('id','title')
    title.required = true

    let dueDateLabel = document.createElement('label')
    dueDateLabel.setAttribute('for','dueDate')
    dueDateLabel.textContent = 'DueDate'
    let dueDate = document.createElement('input')
    dueDate.setAttribute('id','dueDate')
    dueDate.required=true;


    let priorityLabel = document.createElement('label')
    priorityLabel.setAttribute('for','priority')
    priorityLabel.textContent='Priority'

    let priorityLowDiv = document.createElement('label')
    priorityLowDiv.classList.add('container')
    let priorityMidDiv = document.createElement('label')
    let priorityHighDiv = document.createElement('label')

    priorityLowDiv.innerHTML='1'

    let priorityLow = document.createElement('input')
    priorityLow.setAttribute('id','priorityLow')
    priorityLow.setAttribute('type','radio')
    priorityLow.setAttribute('name','priority')
    priorityMidDiv.textContent='2'
    priorityHighDiv.textContent='3'
    priorityMidDiv.classList.add('container')
    priorityHighDiv.classList.add('container')


    let priorityMid = document.createElement('input')
    priorityMid.setAttribute('id','priorityMid')
    priorityMid.setAttribute('type','radio')
    priorityMid.setAttribute('name','priority')



    let priorityHigh = document.createElement('input')
    priorityHigh.setAttribute('id','priorityMid')
    priorityHigh.setAttribute('type','radio')
    priorityHigh.setAttribute('name','priority')


    let infoDiv = document.querySelector('.infoDiv')

    let titleDiv = document.createElement('div')
    titleDiv.classList.add('innerDiv')


    let dueDateDiv = document.createElement('div')
    dueDateDiv.classList.add('innerDiv')

    infoDiv.appendChild(todoForm)
    priorityLowDiv.appendChild(priorityLow)

    
    priorityMidDiv.appendChild(priorityMid)

    
    priorityHighDiv.appendChild(priorityHigh)


    let priorityDiv = document.createElement('div')
    priorityDiv.classList.add('innerDiv')


    let descriptionDiv = document.createElement('div')
    descriptionDiv.classList.add('innerDiv')

    let descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for','description')
    descriptionLabel.textContent='Description';

    let description = document.createElement('textarea')
    description.setAttribute('id','description')

    todoForm.appendChild(formHeader)
    titleDiv.appendChild(titleLabel)
    titleDiv.appendChild(title)
    todoForm.appendChild(titleDiv)
    dueDateDiv.appendChild(dueDateLabel)
    dueDateDiv.appendChild(dueDate)
    todoForm.appendChild(dueDateDiv)

   

  
    todoForm.appendChild(priorityDiv)


    let innerPriorityDiv = document.createElement('div')
    priorityDiv.appendChild(priorityLabel)
    priorityDiv.appendChild(innerPriorityDiv)
    innerPriorityDiv.appendChild(priorityLowDiv)
    innerPriorityDiv.appendChild(priorityMidDiv)
    innerPriorityDiv.appendChild(priorityHighDiv)
    descriptionDiv.appendChild(descriptionLabel)
    descriptionDiv.appendChild(description)
    todoForm.appendChild(descriptionDiv)


    let buttonDiv = document.createElement('div')
    buttonDiv.classList.add('innerDiv')
    let newTaskButton = document.createElement('input')
    newTaskButton.setAttribute('type','submit')
    newTaskButton.setAttribute('value','Add')

    let checked = document.createElement('input')
    checked.setAttribute('type','checkbox')
    checked.setAttribute('id','checkbox')
    let checkedLabel = document.createElement('label')
    checkedLabel.setAttribute('for','checkbox')
    checkedLabel.textContent='Finished'
    let checkedDiv = document.createElement('div')
    checkedDiv.classList.add('checkedDiv')
    checkedDiv.appendChild(checked)
    checkedDiv.appendChild(checkedLabel)
    buttonDiv.appendChild(newTaskButton)
    buttonDiv.appendChild(checkedDiv)
    todoForm.appendChild(buttonDiv)
};

let inputDetails = function(){
    let forms = document.querySelector('#forms')
    let titleInput = document.querySelector('#title')
    let dueDateInput = document.querySelector('#dueDate')
    let priorityInput = document.querySelector('#priority')
    let descriptionInput = document.querySelector('#description')
    let checkedInput = document.querySelector('#checkbox')
    forms.addEventListener('submit',function(){
        let newTask = new _toDo__WEBPACK_IMPORTED_MODULE_1__.toDoList(titleInput.value,descriptionInput.value,dueDateInput.value,'nil',checkedInput.checked)
        forms.remove()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)();
        enterDetails(newTask);
        event.preventDefault();
    })
}

function enterDetails(newTask){
    newTask.tasksDiv.appendChild(newTask.createDiv(newTask))
}
function removeClasses() {
    let projects = document.querySelector('.projects')
        let tasks = document.querySelector('.tasks')
        projects.classList.toggle('switch')
        tasks.classList.toggle('switch')
}


/***/ }),

/***/ "./src/toDo.js":
/*!*********************!*\
  !*** ./src/toDo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   toDoList: () => (/* binding */ toDoList)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");


let toDoList = class {
    constructor(title,description,dueDate,priority,checked)
    {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checked = checked;
        this.tasksDiv = document.querySelector('.tasks')
    }

    createTasksDiv(){
        let tasksHeader = document.createElement('div')
        tasksHeader.classList.add('tasksHeader')

        let tasksHeading = document.createElement('h3')
        tasksHeading.textContent='Tasks'

        let addButton = document.createElement('button')
        addButton.classList.add('addTaskButton')

        tasksHeader.appendChild(tasksHeading)
        tasksHeader.appendChild(addButton)
        this.tasksDiv.appendChild(tasksHeader)
        
        // let taskDiv = this.createDiv();
        // this.tasksDiv.appendChild(taskDiv)
    }

createDiv(newTask={}) {
        let taskDiv = document.createElement('div')
        taskDiv.classList.add('task')

        let displayedText = document.createElement('div')
        displayedText.classList.add('displayedText')
        let displayedTextHeader = document.createElement('div')
        displayedTextHeader.classList.add('displayedTextHeader')
        let name = document.createElement('div')
        name.textContent=newTask.title
        
        let dueDate = document.createElement('div')
        dueDate.textContent = newTask.dueDate

        let priority = document.createElement('div')
        priority.textContent=newTask.priority
        // let description = document.createElement('div')
        // description.textContent = newTask.description

        let checked = document.createElement('input')
        checked.setAttribute('type','checkbox')
        if(newTask.checked)
            {
                checked.checked = true
            }
        displayedTextHeader.appendChild(name)
        displayedTextHeader.appendChild(dueDate)
        displayedTextHeader.appendChild(priority)

        displayedText.appendChild(displayedTextHeader)
        // displayedText.appendChild(description)
        taskDiv.appendChild(displayedText)
        let buttons = this.createButtons()
        buttons.appendChild(checked)
        taskDiv.appendChild(buttons)
        return taskDiv
    }

    createButtons(){
        let buttonsDiv = document.createElement('div')
        buttonsDiv.classList.add('buttons')
        let deleteButton = document.createElement('button')
        let editButton = document.createElement('button')
        editButton.classList.add('edit')
        buttonsDiv.appendChild(deleteButton)
        buttonsDiv.appendChild(editButton)
        return buttonsDiv
    }

    editClick() {
        let editButton = document.querySelector('.edit')
        editButton.addEventListener('click',function () {
            // createForm();
            // toggleClasses();
            console.log('andi')
            event.preventDefault();
        })};

    createNewTask(){
        let addTaskButton = document.querySelector('.addTaskButton')
        addTaskButton.addEventListener('click',function () {
            ;(0,_task__WEBPACK_IMPORTED_MODULE_0__.createForm)();
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClasses)();
            (0,_task__WEBPACK_IMPORTED_MODULE_0__.inputDetails)();
             // editClick();
            event.preventDefault();
            
        })}

    inputDetails(){

    }
}






/***/ }),

/***/ "./src/add.svg":
/*!*********************!*\
  !*** ./src/add.svg ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db8059549b1bd98b4242.svg";

/***/ }),

/***/ "./src/delete.svg":
/*!************************!*\
  !*** ./src/delete.svg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "66d3958d6b48a544d1be.svg";

/***/ }),

/***/ "./src/edit.svg":
/*!**********************!*\
  !*** ./src/edit.svg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c65aac74a59c835b9c29.svg";

/***/ }),

/***/ "./src/monster.ttf":
/*!*************************!*\
  !*** ./src/monster.ttf ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7451547bd28d8dddbeea.ttf";

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




_dom_js__WEBPACK_IMPORTED_MODULE_0__.basicLayout;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw0Q0FBNEMsK0ZBQTRCO0FBQ3hFLDRDQUE0QyxxR0FBK0I7QUFDM0UsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhJQUE4STtBQUM5STs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixtQ0FBbUM7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEscURBQXFELHNDQUFzQyw0QkFBNEIsZ0NBQWdDLHlCQUF5QixLQUFLLFFBQVEsb0JBQW9CLEdBQUcsU0FBUyxvQ0FBb0MsMkJBQTJCLHdCQUF3QixHQUFHLGdCQUFnQix5QkFBeUIsb0JBQW9CLDBCQUEwQixxQ0FBcUMsZ0pBQWdKLEtBQUssY0FBYyxvQkFBb0IsNkJBQTZCLEtBQUssV0FBVyxLQUFLLG1CQUFtQixpQ0FBaUMsNkJBQTZCLGtDQUFrQyxtQkFBbUIsa0JBQWtCLEdBQUcsYUFBYSxvQkFBb0IsbUJBQW1CLDRJQUE0SSwwQ0FBMEMsa0NBQWtDLGdCQUFnQixnQ0FBZ0Msc0JBQXNCLGVBQWUsR0FBRyxpQkFBaUIsaUNBQWlDLDZCQUE2QixrQ0FBa0MsbUJBQW1CLGtCQUFrQixHQUFHLG9CQUFvQixvQkFBb0Isb0NBQW9DLDBCQUEwQixHQUFHLGlCQUFpQixvQkFBb0Isb0NBQW9DLDBCQUEwQixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQixtQkFBbUIsNElBQTRJLDZDQUE2QyxtQ0FBbUMsa0JBQWtCLGlDQUFpQyxzQkFBc0IsZ0NBQWdDLG1DQUFtQyxHQUFHLGNBQWMsZUFBZSwwQkFBMEIsS0FBSyxXQUFXLHNCQUFzQixnQ0FBZ0MsZ0JBQWdCLEdBQUcsb0JBQW9CLG9DQUFvQyw2QkFBNkIsbUNBQW1DLG1CQUFtQixHQUFHLGtDQUFrQyxvQ0FBb0MsK0JBQStCLGtDQUFrQyxtQkFBbUIsR0FBRyxVQUFVLGtDQUFrQywrQkFBK0Isa0NBQWtDLG1CQUFtQixHQUFHLFdBQVcsb0JBQW9CLEdBQUcscUJBQXFCLGdCQUFnQixtQkFBbUIsR0FBRyxhQUFhLG9CQUFvQiw2QkFBNkIsZ0JBQWdCLG9CQUFvQix5QkFBeUIsZUFBZSxlQUFlLDhCQUE4QiwwQkFBMEIsR0FBRyxjQUFjLG9CQUFvQixnQkFBZ0IsR0FBRyxvQkFBb0IsaUJBQWlCLEdBQUcsb0JBQW9CLG1CQUFtQiw0QkFBNEIsR0FBRyxhQUFhLG1CQUFtQixHQUFHLFlBQVksb0JBQW9CLEdBQUcsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsMEJBQTBCLEtBQUssZ0JBQWdCLFdBQVcsa0JBQWtCLG9CQUFvQixtQkFBbUIsb0NBQW9DLEtBQUssdUJBQXVCLGlCQUFpQixLQUFLLDJCQUEyQixvQkFBb0IsZ0JBQWdCLEtBQUssZ0NBQWdDLHlCQUF5QixpQkFBaUIsc0JBQXNCLEtBQUssdUJBQXVCLHlCQUF5QixhQUFhLGNBQWMsbUJBQW1CLGtCQUFrQiw2QkFBNkIseUJBQXlCLEtBQUssK0NBQStDLDZCQUE2QixLQUFLLGlEQUFpRCxnQ0FBZ0MsS0FBSyw0QkFBNEIsb0JBQW9CLHlCQUF5QixvQkFBb0IsS0FBSyx1REFBdUQscUJBQXFCLEtBQUssdUNBQXVDLGtCQUFrQixrQkFBa0IsbUJBQW1CLG9CQUFvQiwyQkFBMkIsMEJBQTBCLEtBQUssMEJBQTBCO0FBQ3huTDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQzVQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTtBQUNyQyxpQkFBaUIsdUdBQWE7QUFDOUIsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUN4QmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYnFDO0FBQ0k7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0RBQVE7QUFDOUI7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0Y5QztBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7QUM3UWlDOztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsdUJBQXVCLDJDQUFRO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RHNDO0FBQ1A7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsMkNBQVE7QUFDbEM7QUFDQSxRQUFRLG9EQUFhO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pLOEM7QUFDWDtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVTtBQUN0QixZQUFZLG1EQUFhO0FBQ3pCLFlBQVksbURBQVk7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN2R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7O0FDQ3VDO0FBQ25COztBQUVwQixnREFBVyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21vbnN0ZXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hZGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgfVxuI21haW57XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuYm9keXtcbiAvKiBiYWNrZ3JvdW5kOiB1cmwoLi93YWxsLmpwZyk7ICAqL1xuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbmZvbnQtZmFtaWx5OiAnTXlGb250Jztcbn1cblxuLmluZm9EaXZ7ICAgXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgLyogYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDsgKi9cbn1cblxuLnByb2plY3Rze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuXG4udGFza3N7XG5cbn1cblxuLmFkZFRhc2tCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLnByb2plY3R7XG4gICAgcGFkZGluZzogMnJlbTtcbiAgICBtYXJnaW46IDJyZW07XG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogNTBweDtcbmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuaGVpZ2h0OiAzMHB4O1xufVxuXG5cbi5hZGRCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTtcbn1cblxuLnByb2plY3RzSGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2tzSGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2t7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XG4gICAgLyogLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDUwcHg7XG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4OyAqL1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xufVxuLnRhc2sgPiBkaXZ7XG5mbGV4LWdyb3c6IDE7XG4vKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xufVxuLmJ1dHRvbnN7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG4ucHJvamVjdD5idXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY29udGFpbjtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5idXR0b25zID4gYnV0dG9uOmZpcnN0LWNoaWxke1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLmVkaXR7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b257XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuXG4uYnV0dG9ucz5pbnB1dHtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleC1ncm93OiAxO1xufVxuLnRvZG9Gb3Jtc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjIlO1xuICAgIGxlZnQ6MzklO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5pbm5lckRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHJlbTtcbn1cblxuLmlubmVyRGl2PmxhYmVse1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5pbm5lckRpdj5pbnB1dHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xufVxuXG50ZXh0YXJlYXtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zd2l0Y2h7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNoZWNrZWREaXZ7XG4gICAgXG4gIH1cbiAgLmlubmVyRGl2PmRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICBcbiAgLmRpc3BsYXllZFRleHR7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5kaXNwbGF5ZWRUZXh0SGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0cmVtO1xuICB9XG5cblxuXG4vKlxuICAuY29udGFpbmVyIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG4gXG4gIC5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG5cbiAgLmNvbnRhaW5lcjpob3ZlciBpbnB1dCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIH1cbiAgXG5cbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgfVxuICBcblxuICAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuXG4gIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gICAgICAgdG9wOiA5cHg7XG4gICAgICBsZWZ0OiA5cHg7XG4gICAgICB3aWR0aDogOHB4O1xuICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgfVxuICAgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQXlCO0lBQ3pCLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtDQUNDLGtDQUFrQztBQUNuQyxzQkFBc0I7QUFDdEIscUJBQXFCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLDJJQUEySTtBQUMvSTs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksbURBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1oscUlBQXFJO0lBQ3JJLG1DQUFtQztBQUN2QywrQkFBK0I7QUFDL0IsYUFBYTtBQUNiLDZCQUE2QjtBQUM3QixtQkFBbUI7QUFDbkIsWUFBWTtBQUNaOzs7QUFHQTtJQUNJLG1EQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1oscUlBQXFJO0lBQ3JJO2tDQUM4QjtBQUNsQyxhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxtREFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbURBQTZCO0lBQzdCLHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1EQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBOztFQUVBO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7Ozs7QUFJRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlESVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9tb25zdGVyLnR0ZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuI21haW57XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmJvZHl7XFxuIC8qIGJhY2tncm91bmQ6IHVybCguL3dhbGwuanBnKTsgICovXFxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5mb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi5pbmZvRGl2eyAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDsgKi9cXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4udGFza3N7XFxuXFxufVxcblxcbi5hZGRUYXNrQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hZGQuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogNTBweDtcXG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5oZWlnaHQ6IDMwcHg7XFxufVxcblxcblxcbi5hZGRCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2FkZC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07XFxufVxcblxcbi5wcm9qZWN0c0hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrc0hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNre1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG4gICAgLyogLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDUwcHg7XFxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDsgKi9cXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xcbn1cXG4udGFzayA+IGRpdntcXG5mbGV4LWdyb3c6IDE7XFxuLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cXG59XFxuLmJ1dHRvbnN7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3Q+YnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9kZWxldGUuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY29udGFpbjtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucyA+IGJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vZGVsZXRlLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5lZGl0e1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lZGl0LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuXFxuLmJ1dHRvbnM+aW5wdXR7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4udG9kb0Zvcm1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMiU7XFxuICAgIGxlZnQ6MzklO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmlubmVyRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRyZW07XFxufVxcblxcbi5pbm5lckRpdj5sYWJlbHtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmlubmVyRGl2PmlucHV0e1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG59XFxuXFxudGV4dGFyZWF7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnN3aXRjaHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuY2hlY2tlZERpdntcXG4gICAgXFxuICB9XFxuICAuaW5uZXJEaXY+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbiAgXFxuICAuZGlzcGxheWVkVGV4dHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5ZWRUZXh0SGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRyZW07XFxuICB9XFxuXFxuXFxuXFxuLypcXG4gIC5jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiBcXG4gIC5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbiAgXFxuXFxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB9XFxuICBcXG5cXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuXFxuICAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcblxcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuXFxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICAgICB0b3A6IDlweDtcXG4gICAgICBsZWZ0OiA5cHg7XFxuICAgICAgd2lkdGg6IDhweDtcXG4gICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB9XFxuICAgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL3RvRG8uanNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmxldCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKVxuXG5sZXQgYmFzaWNMYXlvdXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCB0b0RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRvRG9IZWFkZXIudGV4dENvbnRlbnQ9XCJUby1Eby1MaXN0XCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0b0RvSGVhZGVyKVxuICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKVxuICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2luZm9EaXYnKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpXG4gICAgbGV0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrcycpXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0YXNrc0RpdilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpXG4gICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHMoKTtcbiAgICBwcm9qZWN0LmNyZWF0ZU1haW5EaXYoKVxuICAgIHByb2plY3QubmV3UHJvamVjdCgpXG59KSgpO1xuXG5sZXQgdG9nZ2xlQ2xhc3NlcyA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnc3dpdGNoJylcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LnRvZ2dsZSgnc3dpdGNoJylcbn0pXG5cbmxldCBhZGRDbGFzc2VzID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgICAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxufSlcblxuZXhwb3J0IHtiYXNpY0xheW91dCx0b2dnbGVDbGFzc2VzLGFkZENsYXNzZXN9O1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4vLyBsZXQgZGVmYXVsdFByb2plY3QgPSAoZnVuY3Rpb24gbmFtZShwYXJhbXMpIHsgICBcbi8vICAgICBjcmVhdGVIZWFkZXIoKVxuLy8gICAgIGNyZWF0ZVByb2plY3QoKVxuLy8gfSkoKTtcblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuLy8gICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgdGVtcGxhdGUuY2xhc3NMaXN0LmFkZCgndGVtcGxhdGVzJylcbi8vICAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRlbXBsYXRlKVxuLy8gICAgIGNyZWF0ZURlZmF1bHRGb3JtKClcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlSW5uZXJIZWFkZXIoKXtcbi8vICAgICBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbi8vICAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0nRGVmYXVsdCBQcm9qZWN0J1xuLy8gICAgIGxldCBpbm5lckhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgaW5uZXJIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJIZWFkZXJEaXYnKVxuLy8gICAgIGlubmVySGVhZGVyRGl2LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4vLyAgICAgaW5uZXJIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZHJvcERvd24pXG4vLyAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5uZXJIZWFkZXJEaXYpXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZURlZmF1bHRGb3JtKClcbi8vIHtcbi8vICAgICBsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcbi8vICAgICB0b2RvRm9ybS5jbGFzc0xpc3QuYWRkKCd0b2RvRm9ybXMnKVxuXG5cbi8vICAgICAvLyBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbi8vICAgICAvLyBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0nRGVmYXVsdCBQcm9qZWN0J1xuXG4vLyAgICAgbGV0IGRyb3BEb3duID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbi8vICAgICBkcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdkcm9wRG93bicpXG5cbi8vICAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbi8vICAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKVxuLy8gICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQ9J1RpdGxlJ1xuLy8gICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcbi8vICAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKVxuXG5cbi8vICAgICBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbi8vICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZGVzY3JpcHRpb24nKVxuLy8gICAgIGRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQ9J0Rlc2NyaXB0aW9uJ1xuLy8gICAgIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcbi8vICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKVxuXG4vLyAgICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbi8vICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlJylcbi8vICAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlRGF0ZSdcbi8vICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcbi8vICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbicpXG5cbi8vICAgICBsZXQgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbi8vICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJpb3JpdHknKVxuLy8gICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQ9J1ByaW9yaXR5J1xuLy8gICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcbi8vICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHknKVxuXG4vLyAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBsYXRlcycpXG5cblxuLy8gICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG4vLyAgICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cbi8vICAgICBsZXQgZHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cbi8vICAgICB0ZW1wbGF0ZS5hcHBlbmRDaGlsZCh0b2RvRm9ybSlcblxuLy8gICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG5cbi8vICAgICBsZXQgbm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIG5vdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuLy8gICAgIGxldCBub3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuLy8gICAgIG5vdGVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdub3RlcycpXG4vLyAgICAgbm90ZXNMYWJlbC50ZXh0Q29udGVudD0nTm90ZXMnO1xuXG4vLyAgICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuLy8gICAgIG5vdGVzLnNldEF0dHJpYnV0ZSgnaWQnLCdub3RlcycpXG5cbi8vICAgICAvLyBsZXQgaW5uZXJIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIC8vIGlubmVySGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVySGVhZGVyRGl2Jylcbi8vICAgICAvLyBpbm5lckhlYWRlckRpdi5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxuLy8gICAgIC8vIGlubmVySGVhZGVyRGl2LmFwcGVuZENoaWxkKGRyb3BEb3duKVxuLy8gICAgIC8vIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGlubmVySGVhZGVyRGl2KVxuXG5cblxuXG4vLyAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcbi8vICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbi8vICAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpXG5cbi8vICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuLy8gICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KVxuXG4vLyAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXG4vLyAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKVxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXG4vLyAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcbi8vICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eSlcbi8vICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdilcblxuLy8gICAgIG5vdGVzRGl2LmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpXG4vLyAgICAgbm90ZXNEaXYuYXBwZW5kQ2hpbGQobm90ZXMpXG4vLyAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQobm90ZXNEaXYpXG5cblxuLy8gICAgIGxldCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG4vLyAgICAgbGV0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4vLyAgICAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuLy8gICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0FkZCBhIG5ldyB0YXNrJylcbi8vICAgICBsZXQgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcbi8vICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94Jylcbi8vICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgnaWQnLCdjaGVja2JveCcpXG4vLyAgICAgbGV0IGNoZWNrZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbi8vICAgICBjaGVja2VkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdjaGVja2JveCcpXG4vLyAgICAgY2hlY2tlZExhYmVsLnRleHRDb250ZW50PSdGaW5pc2hlZCdcbi8vICAgICBsZXQgY2hlY2tlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgY2hlY2tlZERpdi5hcHBlbmRDaGlsZChjaGVja2VkKVxuLy8gICAgIGNoZWNrZWREaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZExhYmVsKVxuLy8gICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChuZXdUYXNrQnV0dG9uKVxuLy8gICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjaGVja2VkRGl2KVxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcbi8vIH1cblxuXG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpXG4vLyB7XG4vLyAgICAgbGV0IGhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgaGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlckRpdicpXG4vLyAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXG4vLyAgICAgbGV0IG5ld1Byb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuLy8gICAgIG5ld1Byb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9uJylcbi8vICAgICBoZWFkaW5nLnRleHRDb250ZW50PVwiVG8tRG8tTGlzdFwiXG4vLyAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZChoZWFkZXJEaXYpXG4vLyAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKGhlYWRpbmcpXG4vLyAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pXG5cbi8vIH1cbi8vIGV4cG9ydCB7ZGVmYXVsdFByb2plY3R9IiwiaW1wb3J0IHsgdG9Eb0xpc3QsZWRpdENsaWNrIH0gZnJvbSBcIi4vdG9Eb1wiO1xuXG5sZXQgcHJvamVjdHMgPSBjbGFzc3tcbiAgICBjb25zdHJ1Y3RvcihuYW1lKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgIH1cblxuICAgIGNyZWF0ZU1haW5EaXYoKXtcbiAgICAgICAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykgICAgICAgXG5cbiAgICAgICAgbGV0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNIZWFkZXInKVxuXG4gICAgICAgIGxldCBwcm9qZWN0c0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIHByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudD0nUHJvamVjdHMnXG5cbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKVxuXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGluZylcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcilcblxuICAgICAgICBsZXQgcHJvamVjdERpdiA9IHRoaXMuY3JlYXRlRGl2KCk7XG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXYpXG5cbiAgICAgICAgbGV0IHRvRG8gPSBuZXcgdG9Eb0xpc3Q7XG4gICAgICAgIHRvRG8uY3JlYXRlVGFza3NEaXYoKVxuICAgICAgICB0b0RvLmNyZWF0ZU5ld1Rhc2soKVxuICAgICAgICBcbiAgICB9XG5cblxuXG4gICAgbmV3UHJvamVjdCgpe1xuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcbiAgICAgICAgICAgIGxldCBkaXYgPSB0aGlzLmNyZWF0ZURpdigpO1xuICAgICAgICAgICAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIH0pXG4gICAgfVxuXG5cbiAgICBjcmVhdGVEaXYgPSAoKT0+IHtcbiAgICAgICAgbGV0IHByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQ9J0RlZmF1bHQgUHJvamVjdCc7XG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWUpXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuICAgICAgICByZXR1cm4gcHJvamVjdERpdlxuICAgIH1cbn1cblxuXG5cbmV4cG9ydHtwcm9qZWN0c30iLCJpbXBvcnQgeyB0b2dnbGVDbGFzc2VzIH0gZnJvbSAnLi9kb20nO1xuaW1wb3J0IHt0b0RvTGlzdH0gZnJvbSAnLi90b0RvJ1xuXG5sZXQgY3JlYXRlRm9ybSA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kb0Zvcm1zJylcbiAgICB0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9ybXMnKVxuICAgIGxldCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSdUby1Eby1MaXN0J1xuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0aXRsZScpXG4gICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudD0nVGl0bGUnXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZScpXG4gICAgdGl0bGUucmVxdWlyZWQgPSB0cnVlXG5cbiAgICBsZXQgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2R1ZURhdGUnKVxuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWVEYXRlJ1xuICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ2R1ZURhdGUnKVxuICAgIGR1ZURhdGUucmVxdWlyZWQ9dHJ1ZTtcblxuXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3ByaW9yaXR5JylcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50PSdQcmlvcml0eSdcblxuICAgIGxldCBwcmlvcml0eUxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBwcmlvcml0eUxvd0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuICAgIGxldCBwcmlvcml0eU1pZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZXQgcHJpb3JpdHlIaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXG4gICAgcHJpb3JpdHlMb3dEaXYuaW5uZXJIVE1MPScxJ1xuXG4gICAgbGV0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eUxvdycpXG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5JylcbiAgICBwcmlvcml0eU1pZERpdi50ZXh0Q29udGVudD0nMidcbiAgICBwcmlvcml0eUhpZ2hEaXYudGV4dENvbnRlbnQ9JzMnXG4gICAgcHJpb3JpdHlNaWREaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICBwcmlvcml0eUhpZ2hEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuXG4gICAgbGV0IHByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5TWlkLnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eU1pZCcpXG4gICAgcHJpb3JpdHlNaWQuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5TWlkLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5JylcblxuXG5cbiAgICBsZXQgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHlNaWQnKVxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpXG4gICAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5JylcblxuXG4gICAgbGV0IGluZm9EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb0RpdicpXG5cbiAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuXG4gICAgbGV0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRm9ybSlcbiAgICBwcmlvcml0eUxvd0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxvdylcblxuICAgIFxuICAgIHByaW9yaXR5TWlkRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TWlkKVxuXG4gICAgXG4gICAgcHJpb3JpdHlIaWdoRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaClcblxuXG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cblxuICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG4gICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2Rlc2NyaXB0aW9uJylcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50PSdEZXNjcmlwdGlvbic7XG5cbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NyaXB0aW9uJylcblxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcbiAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZSlcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdilcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdilcblxuICAgXG5cbiAgXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpXG5cblxuICAgIGxldCBpbm5lclByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGlubmVyUHJpb3JpdHlEaXYpXG4gICAgaW5uZXJQcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxvd0RpdilcbiAgICBpbm5lclByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TWlkRGl2KVxuICAgIGlubmVyUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoRGl2KVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpXG5cblxuICAgIGxldCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG4gICAgbGV0IG5ld1Rhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0FkZCcpXG5cbiAgICBsZXQgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94JylcbiAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgnaWQnLCdjaGVja2JveCcpXG4gICAgbGV0IGNoZWNrZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBjaGVja2VkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdjaGVja2JveCcpXG4gICAgY2hlY2tlZExhYmVsLnRleHRDb250ZW50PSdGaW5pc2hlZCdcbiAgICBsZXQgY2hlY2tlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY2hlY2tlZERpdi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkRGl2JylcbiAgICBjaGVja2VkRGl2LmFwcGVuZENoaWxkKGNoZWNrZWQpXG4gICAgY2hlY2tlZERpdi5hcHBlbmRDaGlsZChjaGVja2VkTGFiZWwpXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pXG4gICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNoZWNrZWREaXYpXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxufTtcblxubGV0IGlucHV0RGV0YWlscyA9IGZ1bmN0aW9uKCl7XG4gICAgbGV0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1zJylcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXG4gICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJylcbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxuICAgIGxldCBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3gnKVxuICAgIGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdG9Eb0xpc3QodGl0bGVJbnB1dC52YWx1ZSxkZXNjcmlwdGlvbklucHV0LnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSwnbmlsJyxjaGVja2VkSW5wdXQuY2hlY2tlZClcbiAgICAgICAgZm9ybXMucmVtb3ZlKClcbiAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICBlbnRlckRldGFpbHMobmV3VGFzayk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZW50ZXJEZXRhaWxzKG5ld1Rhc2spe1xuICAgIG5ld1Rhc2sudGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3VGFzay5jcmVhdGVEaXYobmV3VGFzaykpXG59XG5mdW5jdGlvbiByZW1vdmVDbGFzc2VzKCkge1xuICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG4gICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaCcpXG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaCcpXG59XG5leHBvcnR7Y3JlYXRlRm9ybSxpbnB1dERldGFpbHN9IiwiaW1wb3J0IHtjcmVhdGVGb3JtLGlucHV0RGV0YWlsc30gZnJvbSAnLi90YXNrJ1xuaW1wb3J0IHt0b2dnbGVDbGFzc2VzfSBmcm9tICcuL2RvbSdcbmxldCB0b0RvTGlzdCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrZWQpXG4gICAge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB0aGlzLnRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrc0Rpdigpe1xuICAgICAgICBsZXQgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrc0hlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrc0hlYWRlcicpXG5cbiAgICAgICAgbGV0IHRhc2tzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgdGFza3NIZWFkaW5nLnRleHRDb250ZW50PSdUYXNrcydcblxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tCdXR0b24nKVxuXG4gICAgICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tzSGVhZGluZylcbiAgICAgICAgdGFza3NIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgICAgICB0aGlzLnRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tzSGVhZGVyKVxuICAgICAgICBcbiAgICAgICAgLy8gbGV0IHRhc2tEaXYgPSB0aGlzLmNyZWF0ZURpdigpO1xuICAgICAgICAvLyB0aGlzLnRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpXG4gICAgfVxuXG5jcmVhdGVEaXYobmV3VGFzaz17fSkge1xuICAgICAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXG5cbiAgICAgICAgbGV0IGRpc3BsYXllZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXNwbGF5ZWRUZXh0LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZFRleHQnKVxuICAgICAgICBsZXQgZGlzcGxheWVkVGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpc3BsYXllZFRleHRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkVGV4dEhlYWRlcicpXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudD1uZXdUYXNrLnRpdGxlXG4gICAgICAgIFxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBuZXdUYXNrLmR1ZURhdGVcblxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudD1uZXdUYXNrLnByaW9yaXR5XG4gICAgICAgIC8vIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIC8vIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbmV3VGFzay5kZXNjcmlwdGlvblxuXG4gICAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94JylcbiAgICAgICAgaWYobmV3VGFzay5jaGVja2VkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNoZWNrZWQuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgZGlzcGxheWVkVGV4dEhlYWRlci5hcHBlbmRDaGlsZChuYW1lKVxuICAgICAgICBkaXNwbGF5ZWRUZXh0SGVhZGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpXG4gICAgICAgIGRpc3BsYXllZFRleHRIZWFkZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG5cbiAgICAgICAgZGlzcGxheWVkVGV4dC5hcHBlbmRDaGlsZChkaXNwbGF5ZWRUZXh0SGVhZGVyKVxuICAgICAgICAvLyBkaXNwbGF5ZWRUZXh0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRpc3BsYXllZFRleHQpXG4gICAgICAgIGxldCBidXR0b25zID0gdGhpcy5jcmVhdGVCdXR0b25zKClcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjaGVja2VkKVxuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGJ1dHRvbnMpXG4gICAgICAgIHJldHVybiB0YXNrRGl2XG4gICAgfVxuXG4gICAgY3JlYXRlQnV0dG9ucygpe1xuICAgICAgICBsZXQgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGJ1dHRvbnNEaXYuY2xhc3NMaXN0LmFkZCgnYnV0dG9ucycpXG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGVkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgnZWRpdCcpXG4gICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGVkaXRCdXR0b24pXG4gICAgICAgIHJldHVybiBidXR0b25zRGl2XG4gICAgfVxuXG4gICAgZWRpdENsaWNrKCkge1xuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0JylcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gY3JlYXRlRm9ybSgpO1xuICAgICAgICAgICAgLy8gdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuZGknKVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSl9O1xuXG4gICAgY3JlYXRlTmV3VGFzaygpe1xuICAgICAgICBsZXQgYWRkVGFza0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnV0dG9uJylcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY3JlYXRlRm9ybSgpO1xuICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICAgICAgaW5wdXREZXRhaWxzKCk7XG4gICAgICAgICAgICAgLy8gZWRpdENsaWNrKCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pfVxuXG4gICAgaW5wdXREZXRhaWxzKCl7XG5cbiAgICB9XG59XG5cblxuXG5cbmV4cG9ydCB7dG9Eb0xpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IHsgYmFzaWNMYXlvdXQgfSBmcm9tIFwiLi9kb20uanNcIjtcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmJhc2ljTGF5b3V0OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==