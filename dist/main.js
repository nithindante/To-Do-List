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
.buttons > button:first-child{
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: contain;
  background-position: center;
  border: none;
}

.deleteProjects{
  background: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
  background-size: cover;
  background-position: contain;
  border: none;
}

.addButton{
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    background-position: center;
    /* height: 2rem;
    width: 2rem; */
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

.inactiveTask{
  display: none;
}

.project>input{
  border-radius: 1rem;
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
   */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAyB;IACzB,kBAAkB;EACpB;AACF;IACI,aAAa;AACjB;;AAEA;CACC,kCAAkC;AACnC,sBAAsB;AACtB,qBAAqB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,2IAA2I;AAC/I;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;;AAEA;;AAEA;IACI,mDAA0B;IAC1B,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qIAAqI;IACrI,mCAAmC;AACvC,+BAA+B;AAC/B,aAAa;AACb,6BAA6B;AAC7B,mBAAmB;AACnB,YAAY;AACZ;AACA;EACE,mDAA6B;EAC7B,wBAAwB;EACxB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,mDAA6B;EAC7B,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;AACd;;AAEA;IACI,mDAA0B;IAC1B,sBAAsB;IACtB,2BAA2B;IAC3B;kBACc;AAClB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,qIAAqI;IACrI;kCAC8B;AAClC,aAAa;AACb,8BAA8B;AAC9B,mBAAmB;AACnB,6BAA6B;AAC7B,gCAAgC;AAChC;AACA;AACA,YAAY;AACZ,yBAAyB;AACzB;AACA;;IAEI,aAAa;IACb,yBAAyB;IACzB,SAAS;AACb;;;;AAIA;IACI,mDAA2B;IAC3B,wBAAwB;IACxB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;;EAEA;EACA;IACE,aAAa;IACb,YAAY;IACZ,6BAA6B;EAC/B;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;AAEF;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiDI","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./monster.ttf');\n    font-style: normal;\n  }\n#main{\n    padding: 1rem;\n}\n\nbody{\n /* background: url(./wall.jpg);  */\nbackground-size: cover;\nfont-family: 'MyFont';\n}\n\n.infoDiv{   \n    position: relative;\n    display: grid;\n    border-radius: 10px;\n    grid-template-columns: 1fr 1fr;\n    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */\n}\n\n.projects{\n    display: flex;\n    flex-direction: column;\n\n}\n\n.tasks{\n\n}\n\n.addTaskButton{\n    background: url(./add.svg);\n    background-size: cover;\n    background-position: center;\n    height: 2rem;\n    width: 2rem;\n}\n\n.project{\n    padding: 2rem;\n    margin: 2rem;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n    -moz-border-radius-bottomleft: 50px;\nborder-bottom-left-radius: 50px;\ndisplay: flex;\njustify-content: space-evenly;\nalign-items: center;\nheight: 30px;\n}\n.buttons > button:first-child{\n  background: url(./delete.svg);\n  background-size: contain;\n  background-position: center;\n  border: none;\n}\n\n.deleteProjects{\n  background: url(./delete.svg);\n  background-size: cover;\n  background-position: contain;\n  border: none;\n}\n\n.addButton{\n    background: url(./add.svg);\n    background-size: cover;\n    background-position: center;\n    /* height: 2rem;\n    width: 2rem; */\n}\n\n.projectsHeader{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.tasksHeader{\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n}\n\n.task{\n    height: 30px;\n    padding: 2rem;\n    margin: 2rem;\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\n    /* -moz-border-radius-bottomleft: 50px;\nborder-bottom-left-radius: 50px; */\ndisplay: flex;\njustify-content: space-between;\nalign-items: center;\nborder-top-right-radius: 1rem;\nborder-bottom-right-radius: 1rem;\n}\n.task > div{\nflex-grow: 1;\n/* font-weight: bolder; */\n}\n.buttons{\n\n    display: flex;\n    justify-content: flex-end;\n    gap: 1rem;\n}\n\n\n\n.edit{\n    background: url(./edit.svg);\n    background-size: contain;\n    background-position: center;\n    border: none;\n}\n\nbutton{\n    padding: 1rem;\n}\n\n\n.buttons>input{\n    margin: 0;\n    flex-grow: 1;\n}\n.todoForms{\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n    position: absolute;\n    top: 22%;\n    left:39%;\n    border: 1px solid black;\n    border-radius: 1rem;\n}\n\n.innerDiv{\n    display: flex;\n    gap: 4rem;\n}\n\n.innerDiv>label{\n    width: 20%;\n}\n\n.innerDiv>input{\n    flex-grow: 1;\n    font-family: 'MyFont';\n}\n\ntextarea{\n    flex-grow: 1;\n}\n\n.switch{\n    display: none;\n}\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .checkedDiv{\n    \n  }\n  .innerDiv>div{\n    display: flex;\n    flex-grow: 1;\n    justify-content: space-around;\n  }\n  \n  .displayedText{\n    width: 80%;\n  }\n\n  .displayedTextHeader{\n    display: flex;\n    gap: 4rem;\n  }\n\n.inactiveTask{\n  display: none;\n}\n\n.project>input{\n  border-radius: 1rem;\n}\n/*\n  .container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n  }\n  \n \n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border-radius: 50%;\n  }\n  \n\n  .container:hover input ~ .checkmark {\n    background-color: #ccc;\n  }\n  \n\n  .container input:checked ~ .checkmark {\n    background-color: #2196F3;\n  }\n  \n\n  .checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n  }\n  \n\n  .container input:checked ~ .checkmark:after {\n    display: block;\n  }\n  \n\n  .container .checkmark:after {\n       top: 9px;\n      left: 9px;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: white;\n  }\n   */"],"sourceRoot":""}]);
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
/* harmony export */   addProjects: () => (/* binding */ addProjects),
/* harmony export */   basicLayout: () => (/* binding */ basicLayout),
/* harmony export */   createMainDiv: () => (/* binding */ createMainDiv),
/* harmony export */   createTasksDiv: () => (/* binding */ createTasksDiv),
/* harmony export */   newArr: () => (/* binding */ newArr),
/* harmony export */   newProjects: () => (/* binding */ newProjects),
/* harmony export */   removeClasses: () => (/* binding */ removeClasses),
/* harmony export */   toggleClasses: () => (/* binding */ toggleClasses)
/* harmony export */ });
/* harmony import */ var _toDo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo.js */ "./src/toDo.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");



let mainDiv = document.querySelector('#main')
let newArr = []
let localProjectsArr = []


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
});

let createMainDiv = (function () {
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
        
        
});
let toggleClasses = (function () {
        let projects = document.querySelector('.projects')
        let tasks = document.querySelector('.tasks')
        projects.classList.toggle('switch')
        tasks.classList.toggle('switch')
})


let removeClasses = (function () {
        let projects = document.querySelector('.projects')
        let tasks = document.querySelector('.tasks')
        projects.classList.add('switch')
        tasks.classList.add('switch')
})
let addClasses = (function () {

        let projects = document.querySelector('.projects')
        let tasks = document.querySelector('.tasks')
        projects.classList.add('switch')
        tasks.classList.add('switch')
})

let addProjects = (function () {
                
                let addButton = document.querySelector('.addButton')
                addButton.addEventListener('click',()=>{

                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects();
                project.newProject()
                newArr.push(project)
                ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.hoverEffect)();      
                event.preventDefault();
        });

});

let newProjects = (function () {
        let addButton = document.querySelector('.addButton')
                addButton.addEventListener('click',()=>{

                        let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects();
                        project.newProjects()
                        // newArr.push(project)
                        ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.hoverEffect)(); 
                });
});

// let newProjectsDiv = (function () {
//         let addButton = document.querySelector('.addButton')
//                 addButton.addEventListener('click',()=>{

//                         let project = new projects();
//                         project.newProjectsDivFrom()
//                         // newArr.push(project)
//                         hoverEffect(); 
//                 });
// });

let createTasksDiv = (function(){
        let tasksHeader = document.createElement('div')
        tasksHeader.classList.add('tasksHeader')
        let tasksHeading = document.createElement('h3')
        tasksHeading.textContent='Tasks'
        tasksHeader.appendChild(tasksHeading)
        let tasks = document.querySelector('.tasks')
        tasks.appendChild(tasksHeader)
});



















































































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

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hoverEffect: () => (/* binding */ hoverEffect),
/* harmony export */   projectsArr: () => (/* binding */ projectsArr)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");





let projectsArr = []

let hoverEffect = function () {
    let addButton = document.querySelector('.addButton')
    addButton.addEventListener('click',function () {

        tasksAdd();
    })
};

let tasksAdd = function (div) {
    let task = document.querySelectorAll('.task')
    for (let j = 0; j < task.length; j++) {
        task[j].classList.add('switch')

    }
}



// [{"name":"a","arr":[{"title":"q","description":"q","dueDate":"2024-07-01","priority":1,"checked":false,"tasksDiv":{}}],"divArr":[{}]},{"arr":[],"divArr":[]}]"

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projects: () => (/* binding */ projects),
/* harmony export */   userData: () => (/* binding */ userData)
/* harmony export */ });
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom.js */ "./src/dom.js");





let localProjectsArr = []
let userData
let times = 0 
let projects = class{
    
    constructor(name)
    {
        this.name = name
        this.arr = []
        this.divArr = []
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
        let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
        toDo.createTasksDiv()
    }

    addToLocal(){
                    
                    localProjectsArr.push(this)
                    localStorage.setItem("Projects", JSON.stringify(localProjectsArr));
                    userData = JSON.parse(localStorage.getItem('Projects'))
    }


    addToMultipleLocals(){
        let userLocal = JSON.parse(localStorage.getItem('Projects'))
        console.log(userLocal)
    }

    addToLocals(){
        let userLocal = JSON.parse(localStorage.getItem('Projects'))
        console.log(userLocal)
        userLocal.push(this)
        localStorage.setItem("Projects", JSON.stringify(userLocal));
        userData = JSON.parse(localStorage.getItem('Projects'))
        console.log(userLocal)
    }
    addtoMultiple(x)
    {
        if(x>0)
        {
            return
        }
        localStorage.clear()
        this.addToLocal()
    }
    newProject(){
            let sum =0
            let  x = 0
            let div = this.createDiv();
            _logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(div)
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);
            this.deleteProjects(div);
            let projectsArr2 = document.querySelectorAll('.project')
            let len = projectsArr2.length
            console.log(projectsArr2.length)
            for (let i = 0; i < len; i++) 
            {
                
                console.log(len)
                sum++;

                if(i==len){

                    console.log('anju')
                    return
                }
                else{

                
                projectsArr2[i].addEventListener('submit', ()=> {
                    
                  
                    let input = projectsArr2[i].querySelector('input')  
                    if(x>0)
                    {
                        if(i==(len-1))
                        {
                            this.name = input.value; 
                            let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
                            toDo.createNewTask(this,i)
                            x++;
                         event.preventDefault();
                        }
                        // console.log('cheepu')
                    }
                    else {
                    this.touch(div); 
                    this.name = input.value;
                    let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
                    this.addtoMultiple(x)
                    toDo.createNewTask(this,i)
                    x++;
                    event.preventDefault();
                }

                })
            }
        }
    }

    // newProjectsDivFrom(){
    //     let  x = 0
    //     let div = this.createDiv();
    //     projectsArr.push(div)
    //     let projectsDiv = document.querySelector('.projects')
    //     projectsDiv.appendChild(div);
    //     this.deleteProjects(div);
    //     let projectsArr2 = document.querySelectorAll('.project')
    //     for (let i = 0; i < projectsArr2.length; i++) 
    //     {
    //         let input = projectsArr2[i].querySelector('input')     
    //         projectsArr2[i].addEventListener('submit', ()=> {
    //             console.log('andi')
    //             this.name = input.value;
    //             let toDo = new toDoList;
    //             this.addtoMultiple(x)
    //             toDo.createNewTask(this,i)
    //             x++;
    //             event.preventDefault();
                
    //         })
    //     }

    //     this.touch(div); 

    // }
    newProjects(){
        
        let  x = 0
        let div = this.createDiv();
        _logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(div)
        let projectsDiv = document.querySelector('.projects')
        projectsDiv.appendChild(div);
        this.deleteProjects(div);
        let projectsArr2 = document.querySelectorAll('.project')
        for (let i = 0; i < projectsArr2.length; i++) 
        {
            let input = projectsArr2[i].querySelector('input')     
            projectsArr2[i].addEventListener('submit', ()=> {
                console.log('andi')
                this.name = input.value;
                let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
                this.addToLocals()
                toDo.createNewTask(this,i)
                x++;
                event.preventDefault();
                
            })
        }

        this.touch(div); 
    }
    getProjects(userLocal,a){
            let i = 0
            let div = this.createDiv();
            _logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(div)
            let input = div.querySelector('input')
            input.value = userLocal.name
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);

            let addNewTasksButton =  div.querySelector('.addTaskButton')
            addNewTasksButton.addEventListener('click',  ()=> {
                    console.log('parii')
                    let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
                    toDo.createNewTaskDiv(this,a)
                    i++;
                    event.preventDefault();

            })
            this.deleteProjects(div);
            this.getTasks(div,userLocal.arr)
            this.hideTasks()
            this.switchTasks(div)
    }


    addToExisting()
    {


    }
    hideTasks()
    {
        let tasks = document.querySelectorAll('.task')
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].classList.add('switch')
        }

    }


    getTasks(div,tasksArr){
        let count = 0
            for (let i = 0; i < tasksArr.length; i++) 
            {
                if (count<2) {
                    this.createTasks(tasksArr[i],times);
                }
            }

}

    createTasks(task,times){


        let newTask = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList(task.title,task.description,task.dueDate, task.priority,task.checked)
        this.touchTasks(newTask,times);
    }

    switchTasks(div,count = 0)
    {

        div.addEventListener('click', () =>{
            let tasks = document.querySelectorAll('.task')
            for (let i = 0; i < tasks.length; i++) {
            tasks[i].classList.add('switch')
            }

            for (let i = 0; i < this.divArr.length; i++) 
            {
                count ++;
                this.divArr[i].classList.remove('switch')
            }
        })

    }


    touchTasks(newTask,times)
    {
        
        let newDiv = newTask.createDiv(newTask)
        this.divArr.push(newDiv)
        let newTasks = this.divArr
        newTask.tasksDiv.appendChild(newDiv)
        ;(0,_task_js__WEBPACK_IMPORTED_MODULE_2__.deleteTasks)(newDiv,newTask)
        newTask.editClick(newDiv,newTask)
    }

    touch(div){
        div.addEventListener('click', () =>{

            let tasks = this.divArr
            
            if (tasks.length==0)
                {
                let newTasks =  document.querySelectorAll('.task')
                for (let i = 0; i < newTasks.length; i++) {
                newTasks[i].classList.add('switch')
                }
                }
            
            this.addSwitch();
            for (let i = 0; i < tasks.length; i++) 
            {
               
                tasks[i].classList.remove('switch')
            }
            
        })
    }

    addSwitch(){
        
        if (!document.querySelectorAll('.task'))
            {
                
                return
            }
        else{
            
                let newTasks =  document.querySelectorAll('.task')
                for (let i = 0; i < newTasks.length; i++) {
                    if (newTasks[i]) {
                        
                        newTasks[i].classList.add('switch')
                    }
                }

        }

    }

    deleteProjects(div){
        let projectsDiv = document.querySelector('.projects')       
        let deleteProjects = div.querySelector('.deleteProjects')
        deleteProjects.addEventListener('click', () =>{
        // localStorage.clear('project')
        projectsDiv.removeChild(div)
        let task = document.querySelector('.tasks')
        let tasks = this.divArr
            for (let i = 0; i < tasks.length; i++) {
                task.removeChild(tasks[i])
                
            }
        
        })
    }

    createDiv = (newArr)=> {
        let projectDiv = document.createElement('form')
        projectDiv.classList.add('project')
        let name = document.createElement('input')
        
        // name.textContent=this.name;
        let deleteButton = document.createElement('button')
        deleteButton.classList.add('deleteProjects')
        let addButton = document.createElement('button')
        addButton.classList.add('addTaskButton')
        addButton.setAttribute('type','submit')
        addButton.setAttribute('value','submit')
        projectDiv.appendChild(name)
        projectDiv.appendChild(deleteButton)
        projectDiv.appendChild(addButton)
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
/* harmony export */   deleteTasks: () => (/* binding */ deleteTasks),
/* harmony export */   editForm: () => (/* binding */ editForm),
/* harmony export */   inputDetails: () => (/* binding */ inputDetails),
/* harmony export */   inputTaskDetails: () => (/* binding */ inputTaskDetails)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _toDo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDo */ "./src/toDo.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ "./src/projects.js");





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
    dueDate.setAttribute('type','date')
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
    priorityHigh.setAttribute('id','priorityHigh')
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
    checked.classList.add('checkedDivInner')
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

let inputDetails = function(projectDiv,j){
    // let userData = JSON.parse(localStorage.getItem('Projects'))
    let forms = document.querySelector('#forms')
    let titleInput = document.querySelector('#title')
    let dueDateInput = document.querySelector('#dueDate')


    let priorityInput = document.querySelector('#priority')


    let descriptionInput = document.querySelector('#description')
    let checkedInput = document.querySelector('#checkbox')

    forms.addEventListener('submit',()=>{
        if(document.querySelector('#priorityLow').checked===true)
            {
                 priorityInput = 1
            }
        else if(document.querySelector('#priorityMid').checked===true)
            {
                priorityInput = 2
            }
        else if(document.querySelector('#priorityHigh').checked===true)
            {
                priorityInput = 3
            }
        let newTask = new _toDo__WEBPACK_IMPORTED_MODULE_1__.toDoList(titleInput.value,descriptionInput.value,dueDateInput.value, priorityInput,checkedInput.checked)
            // console.log(localStorage)
            // console.log( userData[j])
        _projects__WEBPACK_IMPORTED_MODULE_2__.userData[j].arr.push(newTask)
        
        
        projectDiv.arr.push(newTask)
        
    
        

        forms.remove()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)();
        enterDetails(newTask,projectDiv,j);
        
        
        event.preventDefault();
    })
}
let inputTaskDetails = function(project,a) {

    let forms = document.querySelector('#forms')
    let titleInput = document.querySelector('#title')
    let dueDateInput = document.querySelector('#dueDate')


    let priorityInput = document.querySelector('#priority')


    let descriptionInput = document.querySelector('#description')
    let checkedInput = document.querySelector('#checkbox')

    forms.addEventListener('submit',()=>{
        if(document.querySelector('#priorityLow').checked===true)
            {
                 priorityInput = 1
            }
        else if(document.querySelector('#priorityMid').checked===true)
            {
                priorityInput = 2
            }
        else if(document.querySelector('#priorityHigh').checked===true)
            {
                priorityInput = 3
            }

        let newTask = new _toDo__WEBPACK_IMPORTED_MODULE_1__.toDoList(titleInput.value,descriptionInput.value,dueDateInput.value, priorityInput,checkedInput.checked)
        
        
           
        let userLocal = JSON.parse(localStorage.getItem('Projects'))
        
        userLocal[a].arr.push(newTask)

        project.arr.push(newTask)
        
         localStorage.setItem('Projects',JSON.stringify(userLocal))
        

        forms.remove()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)();
        enterDetailsRefresh(newTask,project,a);
        
        
        event.preventDefault();
    })
}

function enterDetailsRefresh(newTask,projectDiv,a) {
    let userLocal = JSON.parse(localStorage.getItem('Projects'))
    let newDiv = newTask.createDiv(newTask)
    userLocal[a].divArr.push((newDiv))
    localStorage.setItem('Projects',JSON.stringify(userLocal))
    projectDiv.divArr.push(newDiv)
    newTask.tasksDiv.appendChild(newDiv)
    deleteTasks(newDiv,newTask)
    newTask.editClick(newDiv,newTask)
}



function enterDetails(newTask,projectDiv,a){

    let newDiv = newTask.createDiv(newTask)
    _projects__WEBPACK_IMPORTED_MODULE_2__.userData[a].divArr.push((newDiv))
    localStorage.setItem('Projects',JSON.stringify(_projects__WEBPACK_IMPORTED_MODULE_2__.userData))
    projectDiv.divArr.push(newDiv)
    newTask.tasksDiv.appendChild(newDiv)
    deleteTasks(newDiv,newTask)
    newTask.editClick(newDiv,newTask)
}

function deleteTasks(newDiv,newTask){
    let deleteTasks = newDiv.querySelector('.deleteTasks')
    deleteTasks.addEventListener('click',function () {
       newTask.tasksDiv.removeChild(newDiv)
    })
}
function enterEditDetails(div,newTask){
    let newDiv = newTask.createDiv(newTask)
    newTask.tasksDiv.removeChild(div)
    newTask.tasksDiv.appendChild(newDiv)
    
    newTask.editClick(newDiv,newTask)
}


let editForm = function (div,task) {
    createForm();
    let forms = document.querySelector('#forms')
    let titleInput = document.querySelector('#title')
    let dueDateInput = document.querySelector('#dueDate')
    let priorityLow = document.querySelector('#priorityLow')
    let priorityMid = document.querySelector('#priorityMid')
    let priorityHigh = document.querySelector('#priorityHigh')
    let priority;
    let descriptionInput = document.querySelector('#description')
    let checkedInput = document.querySelector('.checkedDivInner')
    titleInput.defaultValue = task.title;
    dueDateInput.defaultValue = task.dueDate;
    if (task.priority === 1)
    {
        
        priorityLow.checked = true
    }
    else if (task.priority === 2)
        {
            
            priorityMid.checked = true
        }
    else if (task.priority === 3)
        {
           
            priorityHigh.checked = true
        }
    descriptionInput.defaultValue = task.description;
    if(task.checked == true)
        {
            checkedInput.checked = true
        }
        forms.addEventListener('submit',function () {
            
        if (priorityLow.checked == true)
            {
                priority =1 
            }    
            else if (priorityMid.checked == true){
                priority =2 
            }
        else if(priorityHigh.checked == true){
            priority = 3
        }
        let editedTask = new _toDo__WEBPACK_IMPORTED_MODULE_1__.toDoList(titleInput.value,descriptionInput.value,dueDateInput.value,priority,checkedInput.checked)
        forms.remove()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)();
        enterEditDetails(div,editedTask);
    })   
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
        tasksHeader.appendChild(tasksHeading)
        this.tasksDiv.appendChild(tasksHeader)
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
        priority.classList.add('priority')
        let checked = document.createElement('input')
        checked.setAttribute('type','checkbox')
        checked.setAttribute('id','checkbox')
        if(newTask.checked)
            {
                checked.checked = true
            }
        displayedTextHeader.appendChild(name)
        displayedTextHeader.appendChild(dueDate)
        displayedTextHeader.appendChild(priority)

        displayedText.appendChild(displayedTextHeader)
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
        deleteButton.classList.add('deleteTasks')
        let editButton = document.createElement('button')
        editButton.classList.add('edit')
        buttonsDiv.appendChild(deleteButton)
        buttonsDiv.appendChild(editButton)
        return buttonsDiv
    }
    createNewTaskDiv(project,a)
    {
        (0,_task__WEBPACK_IMPORTED_MODULE_0__.createForm)();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClasses)();
        (0,_task__WEBPACK_IMPORTED_MODULE_0__.inputTaskDetails)(project,a);
    }


    editClick(div,task) {     
        let editCheckBox = div.querySelector('#checkbox')           
        let priority = document.querySelector('.priority')                                                                                                                          // Clicks the Edit button in each Tasks
        let editButton = div.querySelector('.edit')
        editButton.addEventListener('click',function () {

            if(editCheckBox.checked === true){
                task.checked = true
            }  

            if (priority.textContent == 1)
                {

                    task.priority = 1
                }
                else if (priority.textContent == 2)
                    {

                        task.priority = 2
                    }
                else if (priority.textContent== 3)
                    {
     
                        task.priority = 3
                    }
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClasses)();
            (0,_task__WEBPACK_IMPORTED_MODULE_0__.editForm)(div,task);       
            event.preventDefault();
        })
    };

    createNewTask(project,j){
            (0,_task__WEBPACK_IMPORTED_MODULE_0__.createForm)();
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClasses)();
            (0,_task__WEBPACK_IMPORTED_MODULE_0__.inputDetails)(project,j);                         // Clicks the Add button for Tasks
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
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





// import {createTasksDiv} from './task.js'

let importDivs = (function () {
    let data = localStorage.getItem('Projects');    
    if(data){ 
            let userLocal = JSON.parse(data)
            ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.basicLayout)();
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createMainDiv)();
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createTasksDiv)();
            for (let i = 0; i < userLocal.length; i++) {
                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_2__.projects(userLocal[i].name)
                project.getProjects(userLocal[i],i)
            }
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.newProjects)();
    }
    else{
        
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.basicLayout)();
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createMainDiv)();
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.addProjects)(); 
        (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createTasksDiv)();
    }
 }
)();

// touchAnimation();
// hoverEffect();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw0Q0FBNEMsK0ZBQTRCO0FBQ3hFLDRDQUE0QyxxR0FBK0I7QUFDM0UsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhJQUE4STtBQUM5STs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFN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NEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9Vc0M7QUFDUDtBQUNPOzs7QUFHdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDJDQUFRO0FBQ2xDO0FBQ0E7QUFDQSxRQUFRLCtDQUFRO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsb0RBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDBCQUEwQiwyQ0FBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9EQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQSxJQUFJLCtDQUFRO0FBQ1osbURBQW1ELCtDQUFRO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDJDQUFRO0FBQ3JDO0FBQ0EsUUFBUSxvREFBYTtBQUNyQjtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFV3RTtBQUN2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixRQUFRLG1EQUFhO0FBQ3JCLFFBQVEsdURBQWdCO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLCtDQUFRO0FBQ3BCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsWUFBWSxpREFBVTtBQUN0QixZQUFZLG1EQUFhO0FBQ3pCLFlBQVksbURBQVkscUNBQXFDO0FBQzdEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNDNEY7QUFDeEM7QUFDRjtBQUM5QjtBQUNwQixXQUFXLGdCQUFnQjs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHFEQUFXO0FBQ3ZCLFlBQVksc0RBQWE7QUFDekIsWUFBWSx1REFBYztBQUMxQiw0QkFBNEIsc0JBQXNCO0FBQ2xELGtDQUFrQyxrREFBUTtBQUMxQztBQUNBO0FBQ0EsWUFBWSxvREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFXO0FBQ25CLFFBQVEsc0RBQWE7QUFDckIsUUFBUSxvREFBVztBQUNuQixRQUFRLHVEQUFjO0FBQ3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2xvZ2ljLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vbW9uc3Rlci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2FkZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2VkaXQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICB9XG4jbWFpbntcbiAgICBwYWRkaW5nOiAxcmVtO1xufVxuXG5ib2R5e1xuIC8qIGJhY2tncm91bmQ6IHVybCguL3dhbGwuanBnKTsgICovXG5iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xufVxuXG4uaW5mb0RpdnsgICBcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAvKiBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0OyAqL1xufVxuXG4ucHJvamVjdHN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG5cbi50YXNrc3tcblxufVxuXG4uYWRkVGFza0J1dHRvbntcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAycmVtO1xuICAgIHdpZHRoOiAycmVtO1xufVxuXG4ucHJvamVjdHtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xuICAgIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA1MHB4O1xuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5oZWlnaHQ6IDMwcHg7XG59XG4uYnV0dG9ucyA+IGJ1dHRvbjpmaXJzdC1jaGlsZHtcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZGVsZXRlUHJvamVjdHN7XG4gIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY29udGFpbjtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uYWRkQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAvKiBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07ICovXG59XG5cbi5wcm9qZWN0c0hlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNrc0hlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50YXNre1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIG1hcmdpbjogMnJlbTtcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xuICAgIC8qIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA1MHB4O1xuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDsgKi9cbmRpc3BsYXk6IGZsZXg7XG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5hbGlnbi1pdGVtczogY2VudGVyO1xuYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDFyZW07XG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcbn1cbi50YXNrID4gZGl2e1xuZmxleC1ncm93OiAxO1xuLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cbn1cbi5idXR0b25ze1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGdhcDogMXJlbTtcbn1cblxuXG5cbi5lZGl0e1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuYnV0dG9ue1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cblxuLmJ1dHRvbnM+aW5wdXR7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cbi50b2RvRm9ybXN7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMXJlbTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIyJTtcbiAgICBsZWZ0OjM5JTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uaW5uZXJEaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDRyZW07XG59XG5cbi5pbm5lckRpdj5sYWJlbHtcbiAgICB3aWR0aDogMjAlO1xufVxuXG4uaW5uZXJEaXY+aW5wdXR7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250Jztcbn1cblxudGV4dGFyZWF7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG4uc3dpdGNoe1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIC5jaGVja2VkRGl2e1xuICAgIFxuICB9XG4gIC5pbm5lckRpdj5kaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbiAgXG4gIC5kaXNwbGF5ZWRUZXh0e1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cblxuICAuZGlzcGxheWVkVGV4dEhlYWRlcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHJlbTtcbiAgfVxuXG4uaW5hY3RpdmVUYXNre1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4ucHJvamVjdD5pbnB1dHtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cbi8qXG4gIC5jb250YWluZXIgaW5wdXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcbiBcbiAgLmNoZWNrbWFyayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMjVweDtcbiAgICB3aWR0aDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgfVxuICBcblxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgfVxuICBcblxuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xuICB9XG4gIFxuXG4gIC5jaGVja21hcms6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG5cbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbiAgXG5cbiAgLmNvbnRhaW5lciAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICAgICB0b3A6IDlweDtcbiAgICAgIGxlZnQ6IDlweDtcbiAgICAgIHdpZHRoOiA4cHg7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICB9XG4gICAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsMklBQTJJO0FBQy9JOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxtREFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxSUFBcUk7SUFDckksbUNBQW1DO0FBQ3ZDLCtCQUErQjtBQUMvQixhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1o7QUFDQTtFQUNFLG1EQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1EQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLG1EQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCO2tCQUNjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFJQUFxSTtJQUNySTtrQ0FDOEI7QUFDbEMsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QjtBQUNBOztJQUVJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsU0FBUztBQUNiOzs7O0FBSUE7SUFDSSxtREFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTs7RUFFQTtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztFQUNYOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRElcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vbW9uc3Rlci50dGYnKTtcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgfVxcbiNtYWlue1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5ib2R5e1xcbiAvKiBiYWNrZ3JvdW5kOiB1cmwoLi93YWxsLmpwZyk7ICAqL1xcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG4uaW5mb0RpdnsgICBcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7ICovXFxufVxcblxcbi5wcm9qZWN0c3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLnRhc2tze1xcblxcbn1cXG5cXG4uYWRkVGFza0J1dHRvbntcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYWRkLnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICB3aWR0aDogMnJlbTtcXG59XFxuXFxuLnByb2plY3R7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDUwcHg7XFxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuaGVpZ2h0OiAzMHB4O1xcbn1cXG4uYnV0dG9ucyA+IGJ1dHRvbjpmaXJzdC1jaGlsZHtcXG4gIGJhY2tncm91bmQ6IHVybCguL2RlbGV0ZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uZGVsZXRlUHJvamVjdHN7XFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9kZWxldGUuc3ZnKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb250YWluO1xcbiAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4uYWRkQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hZGQuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICAvKiBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtOyAqL1xcbn1cXG5cXG4ucHJvamVjdHNIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3NIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza3tcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBtYXJnaW46IDJyZW07XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxuICAgIC8qIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA1MHB4O1xcbmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7ICovXFxuZGlzcGxheTogZmxleDtcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcXG59XFxuLnRhc2sgPiBkaXZ7XFxuZmxleC1ncm93OiAxO1xcbi8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxufVxcbi5idXR0b25ze1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcblxcblxcbi5lZGl0e1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lZGl0LnN2Zyk7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblxcbmJ1dHRvbntcXG4gICAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuXFxuLmJ1dHRvbnM+aW5wdXR7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG4udG9kb0Zvcm1ze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFyZW07XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAyMiU7XFxuICAgIGxlZnQ6MzklO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmlubmVyRGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRyZW07XFxufVxcblxcbi5pbm5lckRpdj5sYWJlbHtcXG4gICAgd2lkdGg6IDIwJTtcXG59XFxuXFxuLmlubmVyRGl2PmlucHV0e1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG59XFxuXFxudGV4dGFyZWF7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG59XFxuXFxuLnN3aXRjaHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuICAuY2hlY2tlZERpdntcXG4gICAgXFxuICB9XFxuICAuaW5uZXJEaXY+ZGl2e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgfVxcbiAgXFxuICAuZGlzcGxheWVkVGV4dHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gIH1cXG5cXG4gIC5kaXNwbGF5ZWRUZXh0SGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDRyZW07XFxuICB9XFxuXFxuLmluYWN0aXZlVGFza3tcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0PmlucHV0e1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuLypcXG4gIC5jb250YWluZXIgaW5wdXQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcbiBcXG4gIC5jaGVja21hcmsge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogMjVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgfVxcbiAgXFxuXFxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxuICB9XFxuICBcXG5cXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcbiAgfVxcbiAgXFxuXFxuICAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG4gIFxcblxcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbiAgXFxuXFxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICAgICB0b3A6IDlweDtcXG4gICAgICBsZWZ0OiA5cHg7XFxuICAgICAgd2lkdGg6IDhweDtcXG4gICAgICBoZWlnaHQ6IDhweDtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICB9XFxuICAgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL3RvRG8uanNcIjtcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7IGhvdmVyRWZmZWN0LHByb2plY3RzQXJyLHRvdWNoRWZmZWN0fSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xubGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpXG5sZXQgbmV3QXJyID0gW11cbmxldCBsb2NhbFByb2plY3RzQXJyID0gW11cblxuXG5sZXQgYmFzaWNMYXlvdXQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGxldCB0b0RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuICAgIHRvRG9IZWFkZXIudGV4dENvbnRlbnQ9XCJUby1Eby1MaXN0XCI7XG4gICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0b0RvSGVhZGVyKVxuICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKVxuICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBpbmZvRGl2LmNsYXNzTGlzdC5hZGQoJ2luZm9EaXYnKVxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpXG4gICAgbGV0IHRhc2tzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0YXNrc0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrcycpXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0YXNrc0RpdilcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKGluZm9EaXYpXG59KTtcblxubGV0IGNyZWF0ZU1haW5EaXYgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSAgICAgICBcblxuICAgICAgICBsZXQgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcm9qZWN0c0hlYWRlci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0c0hlYWRlcicpXG5cbiAgICAgICAgbGV0IHByb2plY3RzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgcHJvamVjdHNIZWFkaW5nLnRleHRDb250ZW50PSdQcm9qZWN0cydcblxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbicpXG5cbiAgICAgICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkaW5nKVxuICAgICAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChhZGRCdXR0b24pXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKVxuICAgICAgICBcbiAgICAgICAgXG59KTtcbmxldCB0b2dnbGVDbGFzc2VzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IHByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LnRvZ2dsZSgnc3dpdGNoJylcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LnRvZ2dsZSgnc3dpdGNoJylcbn0pXG5cblxubGV0IHJlbW92ZUNsYXNzZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgICAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxufSlcbmxldCBhZGRDbGFzc2VzID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgICAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxufSlcblxubGV0IGFkZFByb2plY3RzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0Lm5ld1Byb2plY3QoKVxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICAgICAgaG92ZXJFZmZlY3QoKTsgICAgICBcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxufSk7XG5cbmxldCBuZXdQcm9qZWN0cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJylcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5ld1Byb2plY3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG5ld0Fyci5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICBob3ZlckVmZmVjdCgpOyBcbiAgICAgICAgICAgICAgICB9KTtcbn0pO1xuXG4vLyBsZXQgbmV3UHJvamVjdHNEaXYgPSAoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpXG4vLyAgICAgICAgICAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cygpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5uZXdQcm9qZWN0c0RpdkZyb20oKVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gbmV3QXJyLnB1c2gocHJvamVjdClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyRWZmZWN0KCk7IFxuLy8gICAgICAgICAgICAgICAgIH0pO1xuLy8gfSk7XG5cbmxldCBjcmVhdGVUYXNrc0RpdiA9IChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrc0hlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrc0hlYWRlcicpXG4gICAgICAgIGxldCB0YXNrc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIHRhc2tzSGVhZGluZy50ZXh0Q29udGVudD0nVGFza3MnXG4gICAgICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tzSGVhZGluZylcbiAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza3NIZWFkZXIpXG59KTtcblxuXG5cbmV4cG9ydCB7YmFzaWNMYXlvdXQsdG9nZ2xlQ2xhc3NlcyxhZGRDbGFzc2VzLGNyZWF0ZU1haW5EaXYsYWRkUHJvamVjdHMsY3JlYXRlVGFza3NEaXYsbmV3QXJyLG5ld1Byb2plY3RzLHJlbW92ZUNsYXNzZXMgfTtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gbGV0IGRlZmF1bHRQcm9qZWN0ID0gKGZ1bmN0aW9uIG5hbWUocGFyYW1zKSB7ICAgXG4vLyAgICAgY3JlYXRlSGVhZGVyKClcbi8vICAgICBjcmVhdGVQcm9qZWN0KClcbi8vIH0pKCk7XG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcbi8vICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIHRlbXBsYXRlLmNsYXNzTGlzdC5hZGQoJ3RlbXBsYXRlcycpXG4vLyAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSlcbi8vICAgICBjcmVhdGVEZWZhdWx0Rm9ybSgpXG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZUlubmVySGVhZGVyKCl7XG4vLyAgICAgbGV0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4vLyAgICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9J0RlZmF1bHQgUHJvamVjdCdcbi8vICAgICBsZXQgaW5uZXJIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGlubmVySGVhZGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVySGVhZGVyRGl2Jylcbi8vICAgICBpbm5lckhlYWRlckRpdi5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxuLy8gICAgIGlubmVySGVhZGVyRGl2LmFwcGVuZENoaWxkKGRyb3BEb3duKVxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGlubmVySGVhZGVyRGl2KVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVEZWZhdWx0Rm9ybSgpXG4vLyB7XG4vLyAgICAgbGV0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4vLyAgICAgdG9kb0Zvcm0uY2xhc3NMaXN0LmFkZCgndG9kb0Zvcm1zJylcblxuXG4vLyAgICAgLy8gbGV0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4vLyAgICAgLy8gZm9ybUhlYWRlci50ZXh0Q29udGVudCA9J0RlZmF1bHQgUHJvamVjdCdcblxuLy8gICAgIGxldCBkcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4vLyAgICAgZHJvcERvd24uY2xhc3NMaXN0LmFkZCgnZHJvcERvd24nKVxuXG4vLyAgICAgbGV0IHRpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4vLyAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RpdGxlJylcbi8vICAgICB0aXRsZUxhYmVsLnRleHRDb250ZW50PSdUaXRsZSdcbi8vICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4vLyAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJylcblxuXG4vLyAgICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4vLyAgICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2Rlc2NyaXB0aW9uJylcbi8vICAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50PSdEZXNjcmlwdGlvbidcbi8vICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4vLyAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NyaXB0aW9uJylcblxuLy8gICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4vLyAgICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZHVlRGF0ZScpXG4vLyAgICAgZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gJ0R1ZURhdGUnXG4vLyAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4vLyAgICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKVxuXG4vLyAgICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4vLyAgICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3ByaW9yaXR5Jylcbi8vICAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50PSdQcmlvcml0eSdcbi8vICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4vLyAgICAgcHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ3ByaW9yaXR5JylcblxuLy8gICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZXMnKVxuXG5cbi8vICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIHRpdGxlRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuLy8gICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG4vLyAgICAgbGV0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG4vLyAgICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pXG5cbi8vICAgICBsZXQgcHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuXG4vLyAgICAgbGV0IG5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBub3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cbi8vICAgICBsZXQgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbi8vICAgICBub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbm90ZXMnKVxuLy8gICAgIG5vdGVzTGFiZWwudGV4dENvbnRlbnQ9J05vdGVzJztcblxuLy8gICAgIGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJylcbi8vICAgICBub3Rlcy5zZXRBdHRyaWJ1dGUoJ2lkJywnbm90ZXMnKVxuXG4vLyAgICAgLy8gbGV0IGlubmVySGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICAvLyBpbm5lckhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckhlYWRlckRpdicpXG4vLyAgICAgLy8gaW5uZXJIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcilcbi8vICAgICAvLyBpbm5lckhlYWRlckRpdi5hcHBlbmRDaGlsZChkcm9wRG93bilcbi8vICAgICAvLyB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbm5lckhlYWRlckRpdilcblxuXG5cblxuLy8gICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG4vLyAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4vLyAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRGl2KVxuXG4vLyAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbClcbi8vICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbi8vICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkRpdilcblxuLy8gICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxuLy8gICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbi8vICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlRGl2KVxuLy8gICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpXG4vLyAgICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHkpXG4vLyAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHlEaXYpXG5cbi8vICAgICBub3Rlc0Rpdi5hcHBlbmRDaGlsZChub3Rlc0xhYmVsKVxuLy8gICAgIG5vdGVzRGl2LmFwcGVuZENoaWxkKG5vdGVzKVxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKG5vdGVzRGl2KVxuXG5cbi8vICAgICBsZXQgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuLy8gICAgIGxldCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuLy8gICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0Jylcbi8vICAgICBuZXdUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdBZGQgYSBuZXcgdGFzaycpXG4vLyAgICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4vLyAgICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpXG4vLyAgICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlY2tib3gnKVxuLy8gICAgIGxldCBjaGVja2VkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4vLyAgICAgY2hlY2tlZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnY2hlY2tib3gnKVxuLy8gICAgIGNoZWNrZWRMYWJlbC50ZXh0Q29udGVudD0nRmluaXNoZWQnXG4vLyAgICAgbGV0IGNoZWNrZWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGNoZWNrZWREaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZClcbi8vICAgICBjaGVja2VkRGl2LmFwcGVuZENoaWxkKGNoZWNrZWRMYWJlbClcbi8vICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbilcbi8vICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZERpdilcbi8vICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpXG4vLyB9XG5cblxuXG4vLyBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKVxuLy8ge1xuLy8gICAgIGxldCBoZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJEaXYnKVxuLy8gICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxuLy8gICAgIGxldCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbi8vICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbicpXG4vLyAgICAgaGVhZGluZy50ZXh0Q29udGVudD1cIlRvLURvLUxpc3RcIlxuLy8gICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyRGl2KVxuLy8gICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKVxuLy8gICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QnV0dG9uKVxuXG4vLyB9XG4vLyBleHBvcnQge2RlZmF1bHRQcm9qZWN0fSIsImltcG9ydCB7IG5ld0FyciB9IGZyb20gXCIuL2RvbVwiO1xuXG5cblxuXG5sZXQgcHJvamVjdHNBcnIgPSBbXVxuXG5sZXQgaG92ZXJFZmZlY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdXR0b24nKVxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHRhc2tzQWRkKCk7XG4gICAgfSlcbn07XG5cbmxldCB0YXNrc0FkZCA9IGZ1bmN0aW9uIChkaXYpIHtcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRhc2subGVuZ3RoOyBqKyspIHtcbiAgICAgICAgdGFza1tqXS5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuXG4gICAgfVxufVxuZXhwb3J0IHtob3ZlckVmZmVjdCxwcm9qZWN0c0Fycn1cblxuXG4vLyBbe1wibmFtZVwiOlwiYVwiLFwiYXJyXCI6W3tcInRpdGxlXCI6XCJxXCIsXCJkZXNjcmlwdGlvblwiOlwicVwiLFwiZHVlRGF0ZVwiOlwiMjAyNC0wNy0wMVwiLFwicHJpb3JpdHlcIjoxLFwiY2hlY2tlZFwiOmZhbHNlLFwidGFza3NEaXZcIjp7fX1dLFwiZGl2QXJyXCI6W3t9XX0se1wiYXJyXCI6W10sXCJkaXZBcnJcIjpbXX1dXCIiLCJpbXBvcnQgeyB0b0RvTGlzdCxlZGl0Q2xpY2sgfSBmcm9tIFwiLi90b0RvXCI7XG5pbXBvcnQgeyBob3ZlckVmZmVjdCxwcm9qZWN0c0FyciB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQge2RlbGV0ZVRhc2tzLGVudGVyRGV0YWlsc30gZnJvbSBcIi4vdGFzay5qc1wiXG5pbXBvcnQgeyB0b2dnbGVDbGFzc2VzLHJlbW92ZUNsYXNzZXMgfSBmcm9tIFwiLi9kb20uanNcIjtcblxubGV0IGxvY2FsUHJvamVjdHNBcnIgPSBbXVxubGV0IHVzZXJEYXRhXG5sZXQgdGltZXMgPSAwIFxubGV0IHByb2plY3RzID0gY2xhc3N7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSlcbiAgICB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcbiAgICAgICAgdGhpcy5hcnIgPSBbXVxuICAgICAgICB0aGlzLmRpdkFyciA9IFtdXG4gICAgfVxuXG4gICAgY3JlYXRlTWFpbkRpdigpe1xuICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSAgICAgICBcbiAgICAgICAgbGV0IHByb2plY3RzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNIZWFkZXInKVxuICAgICAgICBsZXQgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBwcm9qZWN0c0hlYWRpbmcudGV4dENvbnRlbnQ9J1Byb2plY3RzJ1xuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbicpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGluZylcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcilcbiAgICAgICAgbGV0IHRvRG8gPSBuZXcgdG9Eb0xpc3Q7XG4gICAgICAgIHRvRG8uY3JlYXRlVGFza3NEaXYoKVxuICAgIH1cblxuICAgIGFkZFRvTG9jYWwoKXtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsUHJvamVjdHNBcnIucHVzaCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGxvY2FsUHJvamVjdHNBcnIpKTtcbiAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKVxuICAgIH1cblxuXG4gICAgYWRkVG9NdWx0aXBsZUxvY2Fscygpe1xuICAgICAgICBsZXQgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcbiAgICAgICAgY29uc29sZS5sb2codXNlckxvY2FsKVxuICAgIH1cblxuICAgIGFkZFRvTG9jYWxzKCl7XG4gICAgICAgIGxldCB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKVxuICAgICAgICBjb25zb2xlLmxvZyh1c2VyTG9jYWwpXG4gICAgICAgIHVzZXJMb2NhbC5wdXNoKHRoaXMpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkodXNlckxvY2FsKSk7XG4gICAgICAgIHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcbiAgICAgICAgY29uc29sZS5sb2codXNlckxvY2FsKVxuICAgIH1cbiAgICBhZGR0b011bHRpcGxlKHgpXG4gICAge1xuICAgICAgICBpZih4PjApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpXG4gICAgICAgIHRoaXMuYWRkVG9Mb2NhbCgpXG4gICAgfVxuICAgIG5ld1Byb2plY3QoKXtcbiAgICAgICAgICAgIGxldCBzdW0gPTBcbiAgICAgICAgICAgIGxldCAgeCA9IDBcbiAgICAgICAgICAgIGxldCBkaXYgPSB0aGlzLmNyZWF0ZURpdigpO1xuICAgICAgICAgICAgcHJvamVjdHNBcnIucHVzaChkaXYpXG4gICAgICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdHMoZGl2KTtcbiAgICAgICAgICAgIGxldCBwcm9qZWN0c0FycjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXG4gICAgICAgICAgICBsZXQgbGVuID0gcHJvamVjdHNBcnIyLmxlbmd0aFxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnIyLmxlbmd0aClcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGxlbilcbiAgICAgICAgICAgICAgICBzdW0rKztcblxuICAgICAgICAgICAgICAgIGlmKGk9PWxlbil7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuanUnKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHByb2plY3RzQXJyMltpXS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gcHJvamVjdHNBcnIyW2ldLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgIFxuICAgICAgICAgICAgICAgICAgICBpZih4PjApXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGk9PShsZW4tMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXQudmFsdWU7IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0b0RvID0gbmV3IHRvRG9MaXN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8uY3JlYXRlTmV3VGFzayh0aGlzLGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY2hlZXB1JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b3VjaChkaXYpOyBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0b0RvID0gbmV3IHRvRG9MaXN0O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHRvTXVsdGlwbGUoeClcbiAgICAgICAgICAgICAgICAgICAgdG9Eby5jcmVhdGVOZXdUYXNrKHRoaXMsaSlcbiAgICAgICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBuZXdQcm9qZWN0c0RpdkZyb20oKXtcbiAgICAvLyAgICAgbGV0ICB4ID0gMFxuICAgIC8vICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGVEaXYoKTtcbiAgICAvLyAgICAgcHJvamVjdHNBcnIucHVzaChkaXYpXG4gICAgLy8gICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgLy8gICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgLy8gICAgIHRoaXMuZGVsZXRlUHJvamVjdHMoZGl2KTtcbiAgICAvLyAgICAgbGV0IHByb2plY3RzQXJyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycjIubGVuZ3RoOyBpKyspIFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgICBsZXQgaW5wdXQgPSBwcm9qZWN0c0FycjJbaV0ucXVlcnlTZWxlY3RvcignaW5wdXQnKSAgICAgXG4gICAgLy8gICAgICAgICBwcm9qZWN0c0FycjJbaV0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCk9PiB7XG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuZGknKVxuICAgIC8vICAgICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0LnZhbHVlO1xuICAgIC8vICAgICAgICAgICAgIGxldCB0b0RvID0gbmV3IHRvRG9MaXN0O1xuICAgIC8vICAgICAgICAgICAgIHRoaXMuYWRkdG9NdWx0aXBsZSh4KVxuICAgIC8vICAgICAgICAgICAgIHRvRG8uY3JlYXRlTmV3VGFzayh0aGlzLGkpXG4gICAgLy8gICAgICAgICAgICAgeCsrO1xuICAgIC8vICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB9KVxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgdGhpcy50b3VjaChkaXYpOyBcblxuICAgIC8vIH1cbiAgICBuZXdQcm9qZWN0cygpe1xuICAgICAgICBcbiAgICAgICAgbGV0ICB4ID0gMFxuICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGVEaXYoKTtcbiAgICAgICAgcHJvamVjdHNBcnIucHVzaChkaXYpXG4gICAgICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdHMoZGl2KTtcbiAgICAgICAgbGV0IHByb2plY3RzQXJyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycjIubGVuZ3RoOyBpKyspIFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBwcm9qZWN0c0FycjJbaV0ucXVlcnlTZWxlY3RvcignaW5wdXQnKSAgICAgXG4gICAgICAgICAgICBwcm9qZWN0c0FycjJbaV0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCk9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuZGknKVxuICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0LnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCB0b0RvID0gbmV3IHRvRG9MaXN0O1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkVG9Mb2NhbHMoKVxuICAgICAgICAgICAgICAgIHRvRG8uY3JlYXRlTmV3VGFzayh0aGlzLGkpXG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy50b3VjaChkaXYpOyBcbiAgICB9XG4gICAgZ2V0UHJvamVjdHModXNlckxvY2FsLGEpe1xuICAgICAgICAgICAgbGV0IGkgPSAwXG4gICAgICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGVEaXYoKTtcbiAgICAgICAgICAgIHByb2plY3RzQXJyLnB1c2goZGl2KVxuICAgICAgICAgICAgbGV0IGlucHV0ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JylcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gdXNlckxvY2FsLm5hbWVcbiAgICAgICAgICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xuXG4gICAgICAgICAgICBsZXQgYWRkTmV3VGFza3NCdXR0b24gPSAgZGl2LnF1ZXJ5U2VsZWN0b3IoJy5hZGRUYXNrQnV0dG9uJylcbiAgICAgICAgICAgIGFkZE5ld1Rhc2tzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgICgpPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncGFyaWknKVxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9EbyA9IG5ldyB0b0RvTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgdG9Eby5jcmVhdGVOZXdUYXNrRGl2KHRoaXMsYSlcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdGhpcy5kZWxldGVQcm9qZWN0cyhkaXYpO1xuICAgICAgICAgICAgdGhpcy5nZXRUYXNrcyhkaXYsdXNlckxvY2FsLmFycilcbiAgICAgICAgICAgIHRoaXMuaGlkZVRhc2tzKClcbiAgICAgICAgICAgIHRoaXMuc3dpdGNoVGFza3MoZGl2KVxuICAgIH1cblxuXG4gICAgYWRkVG9FeGlzdGluZygpXG4gICAge1xuXG5cbiAgICB9XG4gICAgaGlkZVRhc2tzKClcbiAgICB7XG4gICAgICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFza3NbaV0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICAgICAgfVxuXG4gICAgfVxuXG5cbiAgICBnZXRUYXNrcyhkaXYsdGFza3NBcnIpe1xuICAgICAgICBsZXQgY291bnQgPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzQXJyLmxlbmd0aDsgaSsrKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoY291bnQ8Mikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRhc2tzKHRhc2tzQXJyW2ldLHRpbWVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbn1cblxuICAgIGNyZWF0ZVRhc2tzKHRhc2ssdGltZXMpe1xuXG5cbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdG9Eb0xpc3QodGFzay50aXRsZSx0YXNrLmRlc2NyaXB0aW9uLHRhc2suZHVlRGF0ZSwgdGFzay5wcmlvcml0eSx0YXNrLmNoZWNrZWQpXG4gICAgICAgIHRoaXMudG91Y2hUYXNrcyhuZXdUYXNrLHRpbWVzKTtcbiAgICB9XG5cbiAgICBzd2l0Y2hUYXNrcyhkaXYsY291bnQgPSAwKVxuICAgIHtcblxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHRhc2tzW2ldLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kaXZBcnIubGVuZ3RoOyBpKyspIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNvdW50ICsrO1xuICAgICAgICAgICAgICAgIHRoaXMuZGl2QXJyW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3N3aXRjaCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICB9XG5cblxuICAgIHRvdWNoVGFza3MobmV3VGFzayx0aW1lcylcbiAgICB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbmV3RGl2ID0gbmV3VGFzay5jcmVhdGVEaXYobmV3VGFzaylcbiAgICAgICAgdGhpcy5kaXZBcnIucHVzaChuZXdEaXYpXG4gICAgICAgIGxldCBuZXdUYXNrcyA9IHRoaXMuZGl2QXJyXG4gICAgICAgIG5ld1Rhc2sudGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3RGl2KVxuICAgICAgICBkZWxldGVUYXNrcyhuZXdEaXYsbmV3VGFzaylcbiAgICAgICAgbmV3VGFzay5lZGl0Q2xpY2sobmV3RGl2LG5ld1Rhc2spXG4gICAgfVxuXG4gICAgdG91Y2goZGl2KXtcbiAgICAgICAgZGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG5cbiAgICAgICAgICAgIGxldCB0YXNrcyA9IHRoaXMuZGl2QXJyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGg9PTApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tzW2ldLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5hZGRTd2l0Y2goKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGFza3NbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc3dpdGNoJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGFkZFN3aXRjaCgpe1xuICAgICAgICBcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2tzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdUYXNrc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdUYXNrc1tpXS5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3RzKGRpdil7XG4gICAgICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpICAgICAgIFxuICAgICAgICBsZXQgZGVsZXRlUHJvamVjdHMgPSBkaXYucXVlcnlTZWxlY3RvcignLmRlbGV0ZVByb2plY3RzJylcbiAgICAgICAgZGVsZXRlUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCdwcm9qZWN0JylcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoZGl2KVxuICAgICAgICBsZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG4gICAgICAgIGxldCB0YXNrcyA9IHRoaXMuZGl2QXJyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGFzay5yZW1vdmVDaGlsZCh0YXNrc1tpXSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY3JlYXRlRGl2ID0gKG5ld0Fycik9PiB7XG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXG4gICAgICAgIHByb2plY3REaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBcbiAgICAgICAgLy8gbmFtZS50ZXh0Q29udGVudD10aGlzLm5hbWU7XG4gICAgICAgIGxldCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdHMnKVxuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZFRhc2tCdXR0b24nKVxuICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcbiAgICAgICAgYWRkQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdzdWJtaXQnKVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKG5hbWUpXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxuICAgICAgICBwcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcbiAgICAgICAgcmV0dXJuIHByb2plY3REaXZcbiAgICB9XG59XG5cblxuXG5leHBvcnR7cHJvamVjdHMsdXNlckRhdGF9IiwiaW1wb3J0IHsgdG9nZ2xlQ2xhc3NlcyB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7dG9Eb0xpc3R9IGZyb20gJy4vdG9EbydcbmltcG9ydCB7IHVzZXJEYXRhIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cblxubGV0IGNyZWF0ZUZvcm0gPSBmdW5jdGlvbigpe1xuICAgIGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtcycpXG4gICAgdG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ2Zvcm1zJylcbiAgICBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0nVG8tRG8tTGlzdCdcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKVxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQ9J1RpdGxlJ1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKVxuICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZVxuXG4gICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlJylcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlRGF0ZSdcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ2R1ZURhdGUnKVxuICAgIGR1ZURhdGUucmVxdWlyZWQ9dHJ1ZTtcblxuXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3ByaW9yaXR5JylcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50PSdQcmlvcml0eSdcblxuICAgIGxldCBwcmlvcml0eUxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBwcmlvcml0eUxvd0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuICAgIGxldCBwcmlvcml0eU1pZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZXQgcHJpb3JpdHlIaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXG4gICAgcHJpb3JpdHlMb3dEaXYuaW5uZXJIVE1MPScxJ1xuXG4gICAgbGV0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eUxvdycpXG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5JylcbiAgICBwcmlvcml0eU1pZERpdi50ZXh0Q29udGVudD0nMidcbiAgICBwcmlvcml0eUhpZ2hEaXYudGV4dENvbnRlbnQ9JzMnXG4gICAgcHJpb3JpdHlNaWREaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICBwcmlvcml0eUhpZ2hEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuXG4gICAgbGV0IHByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5TWlkLnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eU1pZCcpXG4gICAgcHJpb3JpdHlNaWQuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5TWlkLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5JylcblxuXG5cbiAgICBsZXQgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHlIaWdoJylcbiAgICBwcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpXG5cblxuICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9EaXYnKVxuXG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cblxuICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pXG4gICAgcHJpb3JpdHlMb3dEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpXG5cbiAgICBcbiAgICBwcmlvcml0eU1pZERpdi5hcHBlbmRDaGlsZChwcmlvcml0eU1pZClcblxuICAgIFxuICAgIHByaW9yaXR5SGlnaERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUhpZ2gpXG5cblxuICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG5cbiAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudD0nRGVzY3JpcHRpb24nO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbicpXG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXG5cbiAgIFxuXG4gIFxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KVxuXG5cbiAgICBsZXQgaW5uZXJQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChpbm5lclByaW9yaXR5RGl2KVxuICAgIGlubmVyUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3dEaXYpXG4gICAgaW5uZXJQcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eU1pZERpdilcbiAgICBpbm5lclByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaERpdilcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KVxuXG5cbiAgICBsZXQgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuICAgIGxldCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcbiAgICBuZXdUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdBZGQnKVxuXG4gICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpXG4gICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlY2tib3gnKVxuICAgIGNoZWNrZWQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZERpdklubmVyJylcbiAgICBsZXQgY2hlY2tlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNoZWNrZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NoZWNrYm94JylcbiAgICBjaGVja2VkTGFiZWwudGV4dENvbnRlbnQ9J0ZpbmlzaGVkJ1xuICAgIGxldCBjaGVja2VkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2VkRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWREaXYnKVxuICAgIGNoZWNrZWREaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZClcbiAgICBjaGVja2VkRGl2LmFwcGVuZENoaWxkKGNoZWNrZWRMYWJlbClcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbilcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZERpdilcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpXG59O1xuXG5sZXQgaW5wdXREZXRhaWxzID0gZnVuY3Rpb24ocHJvamVjdERpdixqKXtcbiAgICAvLyBsZXQgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKVxuICAgIGxldCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtcycpXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpXG5cblxuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JylcblxuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxuICAgIGxldCBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3gnKVxuXG4gICAgZm9ybXMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoKT0+e1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlMb3cnKS5jaGVja2VkPT09dHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dCA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlNaWQnKS5jaGVja2VkPT09dHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0ID0gMlxuICAgICAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUhpZ2gnKS5jaGVja2VkPT09dHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0ID0gM1xuICAgICAgICAgICAgfVxuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyB0b0RvTGlzdCh0aXRsZUlucHV0LnZhbHVlLGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LGNoZWNrZWRJbnB1dC5jaGVja2VkKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobG9jYWxTdG9yYWdlKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coIHVzZXJEYXRhW2pdKVxuICAgICAgICB1c2VyRGF0YVtqXS5hcnIucHVzaChuZXdUYXNrKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIHByb2plY3REaXYuYXJyLnB1c2gobmV3VGFzaylcbiAgICAgICAgXG4gICAgXG4gICAgICAgIFxuXG4gICAgICAgIGZvcm1zLnJlbW92ZSgpXG4gICAgICAgIHRvZ2dsZUNsYXNzZXMoKTtcbiAgICAgICAgZW50ZXJEZXRhaWxzKG5ld1Rhc2sscHJvamVjdERpdixqKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG59XG5sZXQgaW5wdXRUYXNrRGV0YWlscyA9IGZ1bmN0aW9uKHByb2plY3QsYSkge1xuXG4gICAgbGV0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1zJylcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXG4gICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJylcblxuXG4gICAgbGV0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHknKVxuXG5cbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXG4gICAgbGV0IGNoZWNrZWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2JveCcpXG5cbiAgICBmb3Jtcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCgpPT57XG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUxvdycpLmNoZWNrZWQ9PT10cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0ID0gMVxuICAgICAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eU1pZCcpLmNoZWNrZWQ9PT10cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQgPSAyXG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5SGlnaCcpLmNoZWNrZWQ9PT10cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQgPSAzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5ld1Rhc2sgPSBuZXcgdG9Eb0xpc3QodGl0bGVJbnB1dC52YWx1ZSxkZXNjcmlwdGlvbklucHV0LnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSwgcHJpb3JpdHlJbnB1dCxjaGVja2VkSW5wdXQuY2hlY2tlZClcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgbGV0IHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpXG4gICAgICAgIFxuICAgICAgICB1c2VyTG9jYWxbYV0uYXJyLnB1c2gobmV3VGFzaylcblxuICAgICAgICBwcm9qZWN0LmFyci5wdXNoKG5ld1Rhc2spXG4gICAgICAgIFxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Byb2plY3RzJyxKU09OLnN0cmluZ2lmeSh1c2VyTG9jYWwpKVxuICAgICAgICBcblxuICAgICAgICBmb3Jtcy5yZW1vdmUoKVxuICAgICAgICB0b2dnbGVDbGFzc2VzKCk7XG4gICAgICAgIGVudGVyRGV0YWlsc1JlZnJlc2gobmV3VGFzayxwcm9qZWN0LGEpO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gZW50ZXJEZXRhaWxzUmVmcmVzaChuZXdUYXNrLHByb2plY3REaXYsYSkge1xuICAgIGxldCB1c2VyTG9jYWwgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKVxuICAgIGxldCBuZXdEaXYgPSBuZXdUYXNrLmNyZWF0ZURpdihuZXdUYXNrKVxuICAgIHVzZXJMb2NhbFthXS5kaXZBcnIucHVzaCgobmV3RGl2KSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHVzZXJMb2NhbCkpXG4gICAgcHJvamVjdERpdi5kaXZBcnIucHVzaChuZXdEaXYpXG4gICAgbmV3VGFzay50YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYpXG4gICAgZGVsZXRlVGFza3MobmV3RGl2LG5ld1Rhc2spXG4gICAgbmV3VGFzay5lZGl0Q2xpY2sobmV3RGl2LG5ld1Rhc2spXG59XG5cblxuXG5mdW5jdGlvbiBlbnRlckRldGFpbHMobmV3VGFzayxwcm9qZWN0RGl2LGEpe1xuXG4gICAgbGV0IG5ld0RpdiA9IG5ld1Rhc2suY3JlYXRlRGl2KG5ld1Rhc2spXG4gICAgdXNlckRhdGFbYV0uZGl2QXJyLnB1c2goKG5ld0RpdikpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ1Byb2plY3RzJyxKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSkpXG4gICAgcHJvamVjdERpdi5kaXZBcnIucHVzaChuZXdEaXYpXG4gICAgbmV3VGFzay50YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYpXG4gICAgZGVsZXRlVGFza3MobmV3RGl2LG5ld1Rhc2spXG4gICAgbmV3VGFzay5lZGl0Q2xpY2sobmV3RGl2LG5ld1Rhc2spXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tzKG5ld0RpdixuZXdUYXNrKXtcbiAgICBsZXQgZGVsZXRlVGFza3MgPSBuZXdEaXYucXVlcnlTZWxlY3RvcignLmRlbGV0ZVRhc2tzJylcbiAgICBkZWxldGVUYXNrcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xuICAgICAgIG5ld1Rhc2sudGFza3NEaXYucmVtb3ZlQ2hpbGQobmV3RGl2KVxuICAgIH0pXG59XG5mdW5jdGlvbiBlbnRlckVkaXREZXRhaWxzKGRpdixuZXdUYXNrKXtcbiAgICBsZXQgbmV3RGl2ID0gbmV3VGFzay5jcmVhdGVEaXYobmV3VGFzaylcbiAgICBuZXdUYXNrLnRhc2tzRGl2LnJlbW92ZUNoaWxkKGRpdilcbiAgICBuZXdUYXNrLnRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld0RpdilcbiAgICBcbiAgICBuZXdUYXNrLmVkaXRDbGljayhuZXdEaXYsbmV3VGFzaylcbn1cblxuXG5sZXQgZWRpdEZvcm0gPSBmdW5jdGlvbiAoZGl2LHRhc2spIHtcbiAgICBjcmVhdGVGb3JtKCk7XG4gICAgbGV0IGZvcm1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1zJylcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXG4gICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJylcbiAgICBsZXQgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlMb3cnKVxuICAgIGxldCBwcmlvcml0eU1pZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eU1pZCcpXG4gICAgbGV0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUhpZ2gnKVxuICAgIGxldCBwcmlvcml0eTtcbiAgICBsZXQgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkZXNjcmlwdGlvbicpXG4gICAgbGV0IGNoZWNrZWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2VkRGl2SW5uZXInKVxuICAgIHRpdGxlSW5wdXQuZGVmYXVsdFZhbHVlID0gdGFzay50aXRsZTtcbiAgICBkdWVEYXRlSW5wdXQuZGVmYXVsdFZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAxKVxuICAgIHtcbiAgICAgICAgXG4gICAgICAgIHByaW9yaXR5TG93LmNoZWNrZWQgPSB0cnVlXG4gICAgfVxuICAgIGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09IDIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcHJpb3JpdHlNaWQuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgfVxuICAgIGVsc2UgaWYgKHRhc2sucHJpb3JpdHkgPT09IDMpXG4gICAgICAgIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICBwcmlvcml0eUhpZ2guY2hlY2tlZCA9IHRydWVcbiAgICAgICAgfVxuICAgIGRlc2NyaXB0aW9uSW5wdXQuZGVmYXVsdFZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICBpZih0YXNrLmNoZWNrZWQgPT0gdHJ1ZSlcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tlZElucHV0LmNoZWNrZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgZm9ybXMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JyxmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgaWYgKHByaW9yaXR5TG93LmNoZWNrZWQgPT0gdHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9MSBcbiAgICAgICAgICAgIH0gICAgXG4gICAgICAgICAgICBlbHNlIGlmIChwcmlvcml0eU1pZC5jaGVja2VkID09IHRydWUpe1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0yIFxuICAgICAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHByaW9yaXR5SGlnaC5jaGVja2VkID09IHRydWUpe1xuICAgICAgICAgICAgcHJpb3JpdHkgPSAzXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGVkaXRlZFRhc2sgPSBuZXcgdG9Eb0xpc3QodGl0bGVJbnB1dC52YWx1ZSxkZXNjcmlwdGlvbklucHV0LnZhbHVlLGR1ZURhdGVJbnB1dC52YWx1ZSxwcmlvcml0eSxjaGVja2VkSW5wdXQuY2hlY2tlZClcbiAgICAgICAgZm9ybXMucmVtb3ZlKClcbiAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICBlbnRlckVkaXREZXRhaWxzKGRpdixlZGl0ZWRUYXNrKTtcbiAgICB9KSAgIFxufVxuXG5leHBvcnR7Y3JlYXRlRm9ybSxpbnB1dERldGFpbHMsZWRpdEZvcm0sZGVsZXRlVGFza3MsaW5wdXRUYXNrRGV0YWlsc30iLCJpbXBvcnQge2NyZWF0ZUZvcm0saW5wdXREZXRhaWxzLGVkaXRGb3JtLGlucHV0VGFza0RldGFpbHN9IGZyb20gJy4vdGFzaydcbmltcG9ydCB7dG9nZ2xlQ2xhc3NlcyxyZW1vdmVDbGFzc2VzfSBmcm9tICcuL2RvbSdcbmxldCB0b0RvTGlzdCA9IGNsYXNzIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrZWQpXG4gICAge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB0aGlzLnRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICB9XG5cbiAgICBjcmVhdGVUYXNrc0Rpdigpe1xuICAgICAgICBsZXQgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrc0hlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrc0hlYWRlcicpXG4gICAgICAgIGxldCB0YXNrc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIHRhc2tzSGVhZGluZy50ZXh0Q29udGVudD0nVGFza3MnXG4gICAgICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tzSGVhZGluZylcbiAgICAgICAgdGhpcy50YXNrc0Rpdi5hcHBlbmRDaGlsZCh0YXNrc0hlYWRlcilcbiAgICB9XG5cbmNyZWF0ZURpdihuZXdUYXNrPXt9KSB7XG5cbiAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKVxuICAgICAgICBcbiAgICAgICAgbGV0IGRpc3BsYXllZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXNwbGF5ZWRUZXh0LmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZFRleHQnKVxuICAgICAgICBsZXQgZGlzcGxheWVkVGV4dEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGRpc3BsYXllZFRleHRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkVGV4dEhlYWRlcicpXG4gICAgICAgIGxldCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudD1uZXdUYXNrLnRpdGxlXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IG5ld1Rhc2suZHVlRGF0ZVxuICAgICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudD1uZXdUYXNrLnByaW9yaXR5XG4gICAgICAgIHByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5JylcbiAgICAgICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgIGNoZWNrZWQuc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKVxuICAgICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgnaWQnLCdjaGVja2JveCcpXG4gICAgICAgIGlmKG5ld1Rhc2suY2hlY2tlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIGRpc3BsYXllZFRleHRIZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICAgICAgZGlzcGxheWVkVGV4dEhlYWRlci5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICBkaXNwbGF5ZWRUZXh0SGVhZGVyLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuXG4gICAgICAgIGRpc3BsYXllZFRleHQuYXBwZW5kQ2hpbGQoZGlzcGxheWVkVGV4dEhlYWRlcilcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5ZWRUZXh0KVxuICAgICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuY3JlYXRlQnV0dG9ucygpXG4gICAgICAgIGJ1dHRvbnMuYXBwZW5kQ2hpbGQoY2hlY2tlZClcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChidXR0b25zKVxuICAgICAgICByZXR1cm4gdGFza0RpdlxuICAgIH1cblxuICAgIGNyZWF0ZUJ1dHRvbnMoKXtcbiAgICAgICAgbGV0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBidXR0b25zRGl2LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbnMnKVxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZVRhc2tzJylcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxuICAgICAgICBidXR0b25zRGl2LmFwcGVuZENoaWxkKGRlbGV0ZUJ1dHRvbilcbiAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChlZGl0QnV0dG9uKVxuICAgICAgICByZXR1cm4gYnV0dG9uc0RpdlxuICAgIH1cbiAgICBjcmVhdGVOZXdUYXNrRGl2KHByb2plY3QsYSlcbiAgICB7XG4gICAgICAgIGNyZWF0ZUZvcm0oKTtcbiAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICBpbnB1dFRhc2tEZXRhaWxzKHByb2plY3QsYSk7XG4gICAgfVxuXG5cbiAgICBlZGl0Q2xpY2soZGl2LHRhc2spIHsgICAgIFxuICAgICAgICBsZXQgZWRpdENoZWNrQm94ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJyNjaGVja2JveCcpICAgICAgICAgICBcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsaWNrcyB0aGUgRWRpdCBidXR0b24gaW4gZWFjaCBUYXNrc1xuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpXG4gICAgICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgaWYoZWRpdENoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHRhc2suY2hlY2tlZCA9IHRydWVcbiAgICAgICAgICAgIH0gIFxuXG4gICAgICAgICAgICBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQgPT0gMSlcbiAgICAgICAgICAgICAgICB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQgPT0gMilcbiAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gMlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQ9PSAzKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IDNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICAgICAgZWRpdEZvcm0oZGl2LHRhc2spOyAgICAgICBcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGNyZWF0ZU5ld1Rhc2socHJvamVjdCxqKXtcbiAgICAgICAgICAgIGNyZWF0ZUZvcm0oKTtcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIGlucHV0RGV0YWlscyhwcm9qZWN0LGopOyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGlja3MgdGhlIEFkZCBidXR0b24gZm9yIFRhc2tzXG4gICAgfVxuXG59XG5cblxuXG5cbmV4cG9ydCB7dG9Eb0xpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxuaW1wb3J0IHsgYmFzaWNMYXlvdXQsY3JlYXRlTWFpbkRpdixhZGRQcm9qZWN0cyxjcmVhdGVUYXNrc0RpdixuZXdQcm9qZWN0cyB9IGZyb20gXCIuL2RvbS5qc1wiO1xuaW1wb3J0IHsgaG92ZXJFZmZlY3QsdG91Y2hFZmZlY3R9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0cyx1c2VyRGF0YSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuLy8gaW1wb3J0IHtjcmVhdGVUYXNrc0Rpdn0gZnJvbSAnLi90YXNrLmpzJ1xuXG5sZXQgaW1wb3J0RGl2cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKTsgICAgXG4gICAgaWYoZGF0YSl7IFxuICAgICAgICAgICAgbGV0IHVzZXJMb2NhbCA9IEpTT04ucGFyc2UoZGF0YSlcbiAgICAgICAgICAgIGJhc2ljTGF5b3V0KCk7XG4gICAgICAgICAgICBjcmVhdGVNYWluRGl2KCk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrc0RpdigpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1c2VyTG9jYWwubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cyh1c2VyTG9jYWxbaV0ubmFtZSlcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldFByb2plY3RzKHVzZXJMb2NhbFtpXSxpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV3UHJvamVjdHMoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgXG4gICAgICAgIGJhc2ljTGF5b3V0KCk7XG4gICAgICAgIGNyZWF0ZU1haW5EaXYoKTtcbiAgICAgICAgYWRkUHJvamVjdHMoKTsgXG4gICAgICAgIGNyZWF0ZVRhc2tzRGl2KCk7XG4gICAgfVxuIH1cbikoKTtcblxuLy8gdG91Y2hBbmltYXRpb24oKTtcbi8vIGhvdmVyRWZmZWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9