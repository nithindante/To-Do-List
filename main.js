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
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ "./src/logic.js");
// import { toDoList } from "./toDo.js";


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
                                        if(localProjectsArr.length==0){
                                                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects();
                                                project.newProject()
                                                newArr.push(project)
                                                localProjectsArr.push(project)
                                                ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.hoverEffect)();      
                                                event.preventDefault();
                                        } 
                                        else
                                        {
                                                for (let i = 0; i < localProjectsArr.length; i++) 
                                                {
                                                        if(i>=(localProjectsArr.length-1))
                                                        {
                                                                if(localProjectsArr[i].name!=undefined)
                                                                        {
                                                                                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects();
                                                                                project.newProject()
                                                                                newArr.push(project)
                                                                                localProjectsArr.push(project)
                                                                                ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.hoverEffect)();      
                                                                                event.preventDefault();
                                                                        }        
                                                        }
                                                }
                                        }
        });

});

let newProjects = (function () {
        let addButton = document.querySelector('.addButton')
                addButton.addEventListener('click',()=>{
                        if(localProjectsArr.length==0){
                                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects();
                                project.newProjects()
                                localProjectsArr.push(project)
                                ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.hoverEffect)();      
                                event.preventDefault();
                        } 
                        else
                                        {
                                                for (let i = 0; i < localProjectsArr.length; i++) 
                                                {
                                                        if(i>=(localProjectsArr.length-1))
                                                        {
                                                                if(localProjectsArr[i].name!=undefined)
                                                                        {
                                                                                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_0__.projects();
                                                                                project.newProjects()
                                                                                localProjectsArr.push(project)
                                                                                ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_1__.hoverEffect)();      
                                                                                event.preventDefault();
                                                                        }        
                                                        }
                                                }
                                        }

                });
});

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
// import { newArr } from "./dom";




let projectsArr = []

let hoverEffect = function () {
    let addButton = document.querySelector('.addButton')
    addButton.addEventListener('click',function () {

        tasksAdd();
    })
};

let tasksAdd = function () {
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



// import { toggleClasses,removeClasses } from "./dom.js";

let localProjectsArr = []
let userData
// let times = 0 
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

    addToLocals(){
        let userLocal = JSON.parse(localStorage.getItem('Projects'))

        userLocal.push(this)
        localStorage.setItem("Projects", JSON.stringify(userLocal));
        userData = JSON.parse(localStorage.getItem('Projects'))

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
            let  x = 0
            let div = this.createDiv();
            _logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(div)
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);
            this.deleteProjects(div);
            let projectsArr2 = document.querySelectorAll('.project')
            let len = projectsArr2.length
            for (let i = 0; i < len; i++) 
            {         
                    {                    
                    projectsArr2[i].addEventListener('submit', ()=> {   
                    if (projectsArr2[len-1].querySelector('input').value=='') 
                        {
                            return
                        }
                    else
                    {
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
                        }
                        else 
                        {
                        this.name = input.value;
                        let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
                        this.addtoMultiple(x)
                        toDo.createNewTask(this,i)
                        x++;
                        event.preventDefault();
                        }
            } 
                })
                this.touch(div);
            }
        }
    // }
    }
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
                    this.createTasks(tasksArr[i]);
                }
            }

}

    createTasks(task){


        let newTask = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList(task.title,task.description,task.dueDate, task.priority,task.checked)
        this.touchTasks(newTask);
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


    touchTasks(newTask)
    {
        
        let newDiv = newTask.createDiv(newTask)
        this.divArr.push(newDiv)
        // let newTasks = this.divArr
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

    createDiv = ()=> {
        let projectDiv = document.createElement('form')
        projectDiv.classList.add('project')
        let name = document.createElement('input')
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





let createForm = function(div){
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
        this.tasksArr = [];
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
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


// import { hoverEffect,touchEffect} from "./logic.js";


// import {createTasksDiv} from './task.js'

(function () {
    let data = localStorage.getItem('Projects');    
    if(data){ 
            let userLocal = JSON.parse(data)
            ;(0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.basicLayout)();
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createMainDiv)();
            (0,_dom_js__WEBPACK_IMPORTED_MODULE_0__.createTasksDiv)();
            for (let i = 0; i < userLocal.length; i++) {
                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects(userLocal[i].name)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLHVHQUFnQztBQUM1RSw0Q0FBNEMsK0ZBQTRCO0FBQ3hFLDRDQUE0QyxxR0FBK0I7QUFDM0UsNENBQTRDLGlHQUE2QjtBQUN6RSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RSx5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhJQUE4STtBQUM5STs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG1DQUFtQztBQUN2RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixtQ0FBbUM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsbUNBQW1DO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxPQUFPLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxNQUFNLHFEQUFxRCxzQ0FBc0MsNEJBQTRCLGdDQUFnQyx5QkFBeUIsS0FBSyxRQUFRLG9CQUFvQixHQUFHLFNBQVMsb0NBQW9DLDJCQUEyQix3QkFBd0IsR0FBRyxnQkFBZ0IseUJBQXlCLG9CQUFvQiwwQkFBMEIscUNBQXFDLGdKQUFnSixLQUFLLGNBQWMsb0JBQW9CLDZCQUE2QixLQUFLLFdBQVcsS0FBSyxtQkFBbUIsaUNBQWlDLDZCQUE2QixrQ0FBa0MsbUJBQW1CLGtCQUFrQixHQUFHLGFBQWEsb0JBQW9CLG1CQUFtQiw0SUFBNEksMENBQTBDLGtDQUFrQyxnQkFBZ0IsZ0NBQWdDLHNCQUFzQixlQUFlLEdBQUcsZ0NBQWdDLGtDQUFrQyw2QkFBNkIsZ0NBQWdDLGlCQUFpQixHQUFHLG9CQUFvQixrQ0FBa0MsMkJBQTJCLGlDQUFpQyxpQkFBaUIsR0FBRyxlQUFlLGlDQUFpQyw2QkFBNkIsa0NBQWtDLHNCQUFzQixtQkFBbUIsS0FBSyxvQkFBb0Isb0JBQW9CLG9DQUFvQywwQkFBMEIsR0FBRyxpQkFBaUIsb0JBQW9CLG9DQUFvQywwQkFBMEIsR0FBRyxVQUFVLG1CQUFtQixvQkFBb0IsbUJBQW1CLDRJQUE0SSw2Q0FBNkMsbUNBQW1DLGtCQUFrQixpQ0FBaUMsc0JBQXNCLGdDQUFnQyxtQ0FBbUMsR0FBRyxjQUFjLGVBQWUsMEJBQTBCLEtBQUssV0FBVyxzQkFBc0IsZ0NBQWdDLGdCQUFnQixHQUFHLGNBQWMsa0NBQWtDLCtCQUErQixrQ0FBa0MsbUJBQW1CLEdBQUcsV0FBVyxvQkFBb0IsR0FBRyxxQkFBcUIsZ0JBQWdCLG1CQUFtQixHQUFHLGFBQWEsb0JBQW9CLDZCQUE2QixnQkFBZ0Isb0JBQW9CLHlCQUF5QixlQUFlLGVBQWUsOEJBQThCLDBCQUEwQixHQUFHLGNBQWMsb0JBQW9CLGdCQUFnQixHQUFHLG9CQUFvQixpQkFBaUIsR0FBRyxvQkFBb0IsbUJBQW1CLDRCQUE0QixHQUFHLGFBQWEsbUJBQW1CLEdBQUcsWUFBWSxvQkFBb0IsR0FBRyxnQkFBZ0Isb0JBQW9CLDZCQUE2QiwwQkFBMEIsS0FBSyxnQkFBZ0IsV0FBVyxrQkFBa0Isb0JBQW9CLG1CQUFtQixvQ0FBb0MsS0FBSyx1QkFBdUIsaUJBQWlCLEtBQUssMkJBQTJCLG9CQUFvQixnQkFBZ0IsS0FBSyxrQkFBa0Isa0JBQWtCLEdBQUcsbUJBQW1CLHdCQUF3QixHQUFHLDBCQUEwQix5QkFBeUIsaUJBQWlCLHNCQUFzQixLQUFLLHVCQUF1Qix5QkFBeUIsYUFBYSxjQUFjLG1CQUFtQixrQkFBa0IsNkJBQTZCLHlCQUF5QixLQUFLLCtDQUErQyw2QkFBNkIsS0FBSyxpREFBaUQsZ0NBQWdDLEtBQUssNEJBQTRCLG9CQUFvQix5QkFBeUIsb0JBQW9CLEtBQUssdURBQXVELHFCQUFxQixLQUFLLHVDQUF1QyxrQkFBa0Isa0JBQWtCLG1CQUFtQixvQkFBb0IsMkJBQTJCLDBCQUEwQixLQUFLLDBCQUEwQjtBQUM3dEw7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNqUTFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3pCYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7QUFDckMsaUJBQWlCLHVHQUFhO0FBQzlCLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLHNGQUFPLFVBQVUsc0ZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7O0FDeEJoRTs7QUFFYjtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ25GYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNqQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQSxjQUFjLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsQ0FBSTtBQUNqRjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQSxpRkFBaUY7QUFDakY7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSx5REFBeUQ7QUFDekQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLFlBQVksV0FBVztBQUNrQjtBQUNEO0FBQ3hDO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtFQUFrRSxrREFBUTtBQUMxRTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsdURBQVc7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsNkJBQTZCO0FBQzdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrR0FBa0csa0RBQVE7QUFDMUc7QUFDQTtBQUNBO0FBQ0EsZ0ZBQWdGLHVEQUFXO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVULENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsa0RBQVE7QUFDMUQ7QUFDQTtBQUNBLGdDQUFnQyx1REFBVztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdFQUFnRSw2QkFBNkI7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtHQUFrRyxrREFBUTtBQUMxRztBQUNBO0FBQ0EsZ0ZBQWdGLHVEQUFXO0FBQzNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUd3SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRnpIO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVc7Ozs7Ozs7Ozs7Ozs7OztBQ2xYWCxZQUFZLFNBQVM7Ozs7O0FBS3JCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQzs7QUFFQTtBQUNBO0FBQ2dDOzs7QUFHaEMsS0FBSyxtQkFBbUIsZ0dBQWdHLGNBQWMsRUFBRSxFQUFFLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3SDtBQUNPO0FBQ0o7QUFDckMsWUFBWSw4QkFBOEI7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDJDQUFRO0FBQy9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFNBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLDJDQUFRO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsMkNBQVE7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQVc7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwyQ0FBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQSw0QkFBNEIscUJBQXFCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7OztBQUdBLDBCQUEwQiwyQ0FBUTtBQUNsQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTs7QUFFQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFXO0FBQ25CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtCQUFrQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwU3NDO0FBQ1A7QUFDTzs7O0FBR3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwyQ0FBUTs7QUFFbEMsUUFBUSwrQ0FBUTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLG9EQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEIsMkNBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBUSxvREFBYTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBUTtBQUNaLG1EQUFtRCwrQ0FBUTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QiwyQ0FBUTtBQUNyQztBQUNBLFFBQVEsb0RBQWE7QUFDckI7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25Vd0U7QUFDdkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQjs7QUFFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBVTtBQUNsQixRQUFRLG1EQUFhO0FBQ3JCLFFBQVEsdURBQWdCO0FBQ3hCOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtREFBYTtBQUN6QixZQUFZLCtDQUFRO0FBQ3BCO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsWUFBWSxpREFBVTtBQUN0QixZQUFZLG1EQUFhO0FBQ3pCLFlBQVksbURBQVkscUNBQXFDO0FBQzdEOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0M0RjtBQUM1RixZQUFZLHlCQUF5QjtBQUNJO0FBQ3JCO0FBQ3BCLFdBQVcsZ0JBQWdCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVkscURBQVc7QUFDdkIsWUFBWSxzREFBYTtBQUN6QixZQUFZLHVEQUFjO0FBQzFCLDRCQUE0QixzQkFBc0I7QUFDbEQsa0NBQWtDLGtEQUFRO0FBQzFDO0FBQ0E7QUFDQSxZQUFZLG9EQUFXO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVc7QUFDbkIsUUFBUSxzREFBYTtBQUNyQixRQUFRLG9EQUFXO0FBQ25CLFFBQVEsdURBQWM7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9tb25zdGVyLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vYWRkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vZGVsZXRlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vZWRpdC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gIH1cbiNtYWlue1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbmJvZHl7XG4gLyogYmFja2dyb3VuZDogdXJsKC4vd2FsbC5qcGcpOyAgKi9cbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XG5mb250LWZhbWlseTogJ015Rm9udCc7XG59XG5cbi5pbmZvRGl2eyAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7ICovXG59XG5cbi5wcm9qZWN0c3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cblxuLnRhc2tze1xuXG59XG5cbi5hZGRUYXNrQnV0dG9ue1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDJyZW07XG4gICAgd2lkdGg6IDJyZW07XG59XG5cbi5wcm9qZWN0e1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDUwcHg7XG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuYWxpZ24taXRlbXM6IGNlbnRlcjtcbmhlaWdodDogMzBweDtcbn1cbi5idXR0b25zID4gYnV0dG9uOmZpcnN0LWNoaWxke1xuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kZWxldGVQcm9qZWN0c3tcbiAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb250YWluO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5hZGRCdXR0b257XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIC8qIGhlaWdodDogMnJlbTtcbiAgICB3aWR0aDogMnJlbTsgKi9cbn1cblxuLnByb2plY3RzSGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2tzSGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRhc2t7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgbWFyZ2luOiAycmVtO1xuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XG4gICAgLyogLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDUwcHg7XG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4OyAqL1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xufVxuLnRhc2sgPiBkaXZ7XG5mbGV4LWdyb3c6IDE7XG4vKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xufVxuLmJ1dHRvbnN7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgZ2FwOiAxcmVtO1xufVxuXG5cblxuLmVkaXR7XG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG5idXR0b257XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuXG4uYnV0dG9ucz5pbnB1dHtcbiAgICBtYXJnaW46IDA7XG4gICAgZmxleC1ncm93OiAxO1xufVxuLnRvZG9Gb3Jtc3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMjIlO1xuICAgIGxlZnQ6MzklO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5pbm5lckRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNHJlbTtcbn1cblxuLmlubmVyRGl2PmxhYmVse1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5pbm5lckRpdj5pbnB1dHtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xufVxuXG50ZXh0YXJlYXtcbiAgICBmbGV4LWdyb3c6IDE7XG59XG5cbi5zd2l0Y2h7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLmNoZWNrZWREaXZ7XG4gICAgXG4gIH1cbiAgLmlubmVyRGl2PmRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgfVxuICBcbiAgLmRpc3BsYXllZFRleHR7XG4gICAgd2lkdGg6IDgwJTtcbiAgfVxuXG4gIC5kaXNwbGF5ZWRUZXh0SGVhZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA0cmVtO1xuICB9XG5cbi5pbmFjdGl2ZVRhc2t7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9qZWN0PmlucHV0e1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuLypcbiAgLmNvbnRhaW5lciBpbnB1dCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuIFxuICAuY2hlY2ttYXJrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG4gIFxuXG4gIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICB9XG4gIFxuXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XG4gIH1cbiAgXG5cbiAgLmNoZWNrbWFyazphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcblxuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuICBcblxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xuICAgICAgIHRvcDogOXB4O1xuICAgICAgbGVmdDogOXB4O1xuICAgICAgd2lkdGg6IDhweDtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gIH1cbiAgICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLDRDQUF5QjtJQUN6QixrQkFBa0I7RUFDcEI7QUFDRjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7Q0FDQyxrQ0FBa0M7QUFDbkMsc0JBQXNCO0FBQ3RCLHFCQUFxQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QiwySUFBMkk7QUFDL0k7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTs7QUFFQTs7QUFFQTtJQUNJLG1EQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFJQUFxSTtJQUNySSxtQ0FBbUM7QUFDdkMsK0JBQStCO0FBQy9CLGFBQWE7QUFDYiw2QkFBNkI7QUFDN0IsbUJBQW1CO0FBQ25CLFlBQVk7QUFDWjtBQUNBO0VBQ0UsbURBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbURBQTZCO0VBQzdCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsWUFBWTtBQUNkOztBQUVBO0lBQ0ksbURBQTBCO0lBQzFCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0I7a0JBQ2M7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7SUFDN0IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1oscUlBQXFJO0lBQ3JJO2tDQUM4QjtBQUNsQyxhQUFhO0FBQ2IsOEJBQThCO0FBQzlCLG1CQUFtQjtBQUNuQiw2QkFBNkI7QUFDN0IsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxZQUFZO0FBQ1oseUJBQXlCO0FBQ3pCO0FBQ0E7O0lBRUksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7Ozs7QUFJQTtJQUNJLG1EQUEyQjtJQUMzQix3QkFBd0I7SUFDeEIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLFNBQVM7SUFDVCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7SUFDVCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtFQUNBOztFQUVBO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtFQUMvQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGFBQWE7SUFDYixTQUFTO0VBQ1g7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlESVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBzcmM6IHVybCgnLi9tb25zdGVyLnR0ZicpO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICB9XFxuI21haW57XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbmJvZHl7XFxuIC8qIGJhY2tncm91bmQ6IHVybCguL3dhbGwuanBnKTsgICovXFxuYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG5mb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcbi5pbmZvRGl2eyAgIFxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gICAgLyogYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDsgKi9cXG59XFxuXFxuLnByb2plY3Rze1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4udGFza3N7XFxuXFxufVxcblxcbi5hZGRUYXNrQnV0dG9ue1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hZGQuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4ucHJvamVjdHtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgbWFyZ2luOiAycmVtO1xcbiAgICBib3gtc2hhZG93OiByZ2JhKDYsIDI0LCA0NCwgMC40KSAwcHggMHB4IDBweCAycHgsIHJnYmEoNiwgMjQsIDQ0LCAwLjY1KSAwcHggNHB4IDZweCAtMXB4LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIDBweCAxcHggMHB4IGluc2V0O1xcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogNTBweDtcXG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4O1xcbmRpc3BsYXk6IGZsZXg7XFxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5oZWlnaHQ6IDMwcHg7XFxufVxcbi5idXR0b25zID4gYnV0dG9uOmZpcnN0LWNoaWxke1xcbiAgYmFja2dyb3VuZDogdXJsKC4vZGVsZXRlLnN2Zyk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5kZWxldGVQcm9qZWN0c3tcXG4gIGJhY2tncm91bmQ6IHVybCguL2RlbGV0ZS5zdmcpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNvbnRhaW47XFxuICBib3JkZXI6IG5vbmU7XFxufVxcblxcbi5hZGRCdXR0b257XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2FkZC5zdmcpO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIC8qIGhlaWdodDogMnJlbTtcXG4gICAgd2lkdGg6IDJyZW07ICovXFxufVxcblxcbi5wcm9qZWN0c0hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrc0hlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNre1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDJyZW07XFxuICAgIG1hcmdpbjogMnJlbTtcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXG4gICAgLyogLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDUwcHg7XFxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDsgKi9cXG5kaXNwbGF5OiBmbGV4O1xcbmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG5hbGlnbi1pdGVtczogY2VudGVyO1xcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xcbmJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxcmVtO1xcbn1cXG4udGFzayA+IGRpdntcXG5mbGV4LWdyb3c6IDE7XFxuLyogZm9udC13ZWlnaHQ6IGJvbGRlcjsgKi9cXG59XFxuLmJ1dHRvbnN7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIGdhcDogMXJlbTtcXG59XFxuXFxuXFxuXFxuLmVkaXR7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2VkaXQuc3ZnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuYnV0dG9ue1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG5cXG4uYnV0dG9ucz5pbnB1dHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmbGV4LWdyb3c6IDE7XFxufVxcbi50b2RvRm9ybXN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMXJlbTtcXG4gICAgcGFkZGluZzogMXJlbTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDIyJTtcXG4gICAgbGVmdDozOSU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uaW5uZXJEaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHJlbTtcXG59XFxuXFxuLmlubmVyRGl2PmxhYmVse1xcbiAgICB3aWR0aDogMjAlO1xcbn1cXG5cXG4uaW5uZXJEaXY+aW5wdXR7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG50ZXh0YXJlYXtcXG4gICAgZmxleC1ncm93OiAxO1xcbn1cXG5cXG4uc3dpdGNoe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG4gIC5jaGVja2VkRGl2e1xcbiAgICBcXG4gIH1cXG4gIC5pbm5lckRpdj5kaXZ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuICBcXG4gIC5kaXNwbGF5ZWRUZXh0e1xcbiAgICB3aWR0aDogODAlO1xcbiAgfVxcblxcbiAgLmRpc3BsYXllZFRleHRIZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNHJlbTtcXG4gIH1cXG5cXG4uaW5hY3RpdmVUYXNre1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3Q+aW5wdXR7XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG4vKlxcbiAgLmNvbnRhaW5lciBpbnB1dCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgXFxuIFxcbiAgLmNoZWNrbWFyayB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIHdpZHRoOiAyNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB9XFxuICBcXG5cXG4gIC5jb250YWluZXI6aG92ZXIgaW5wdXQgfiAuY2hlY2ttYXJrIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIH1cXG4gIFxcblxcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XFxuICB9XFxuICBcXG5cXG4gIC5jaGVja21hcms6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgXFxuXFxuICAuY29udGFpbmVyIGlucHV0OmNoZWNrZWQgfiAuY2hlY2ttYXJrOmFmdGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICB9XFxuICBcXG5cXG4gIC5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XFxuICAgICAgIHRvcDogOXB4O1xcbiAgICAgIGxlZnQ6IDlweDtcXG4gICAgICB3aWR0aDogOHB4O1xcbiAgICAgIGhlaWdodDogOHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIH1cXG4gICAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IHRvRG9MaXN0IH0gZnJvbSBcIi4vdG9Eby5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgaG92ZXJFZmZlY3R9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5sZXQgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluJylcbmxldCBuZXdBcnIgPSBbXVxubGV0IGxvY2FsUHJvamVjdHNBcnIgPSBbXVxuXG5cbmxldCBiYXNpY0xheW91dCA9IChmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRvRG9IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG4gICAgdG9Eb0hlYWRlci50ZXh0Q29udGVudD1cIlRvLURvLUxpc3RcIjtcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRvRG9IZWFkZXIpXG4gICAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBwcm9qZWN0c0Rpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpXG4gICAgbGV0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mb0RpdicpXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0RpdilcbiAgICBsZXQgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIHRhc2tzRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2tzJylcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKHRhc2tzRGl2KVxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW5mb0Rpdilcbn0pO1xuXG5sZXQgY3JlYXRlTWFpbkRpdiA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpICAgICAgIFxuXG4gICAgICAgIGxldCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzSGVhZGVyJylcblxuICAgICAgICBsZXQgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICBwcm9qZWN0c0hlYWRpbmcudGV4dENvbnRlbnQ9J1Byb2plY3RzJ1xuXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkQnV0dG9uJylcblxuICAgICAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRpbmcpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpXG4gICAgICAgIFxuICAgICAgICBcbn0pO1xubGV0IHRvZ2dsZUNsYXNzZXMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgICAgICBsZXQgdGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdzd2l0Y2gnKVxuICAgICAgICB0YXNrcy5jbGFzc0xpc3QudG9nZ2xlKCdzd2l0Y2gnKVxufSlcblxuXG5sZXQgcmVtb3ZlQ2xhc3NlcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG4gICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG59KVxubGV0IGFkZENsYXNzZXMgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXG4gICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXG59KVxuXG5sZXQgYWRkUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJylcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYobG9jYWxQcm9qZWN0c0Fyci5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2plY3QubmV3UHJvamVjdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChwcm9qZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQcm9qZWN0c0Fyci5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlckVmZmVjdCgpOyAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsUHJvamVjdHNBcnIubGVuZ3RoOyBpKyspIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpPj0obG9jYWxQcm9qZWN0c0Fyci5sZW5ndGgtMSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihsb2NhbFByb2plY3RzQXJyW2ldLm5hbWUhPXVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdC5uZXdQcm9qZWN0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3QXJyLnB1c2gocHJvamVjdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQcm9qZWN0c0Fyci5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyRWZmZWN0KCk7ICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbn0pO1xuXG5sZXQgbmV3UHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpXG4gICAgICAgICAgICAgICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYobG9jYWxQcm9qZWN0c0Fyci5sZW5ndGg9PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5ld1Byb2plY3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQcm9qZWN0c0Fyci5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyRWZmZWN0KCk7ICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxQcm9qZWN0c0Fyci5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGk+PShsb2NhbFByb2plY3RzQXJyLmxlbmd0aC0xKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGxvY2FsUHJvamVjdHNBcnJbaV0ubmFtZSE9dW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBwcm9qZWN0cygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5ld1Byb2plY3RzKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxQcm9qZWN0c0Fyci5wdXNoKHByb2plY3QpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyRWZmZWN0KCk7ICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pO1xufSk7XG5cbmxldCBjcmVhdGVUYXNrc0RpdiA9IChmdW5jdGlvbigpe1xuICAgICAgICBsZXQgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICB0YXNrc0hlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrc0hlYWRlcicpXG4gICAgICAgIGxldCB0YXNrc0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG4gICAgICAgIHRhc2tzSGVhZGluZy50ZXh0Q29udGVudD0nVGFza3MnXG4gICAgICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tzSGVhZGluZylcbiAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza3NIZWFkZXIpXG59KTtcblxuXG5leHBvcnQge2Jhc2ljTGF5b3V0LHRvZ2dsZUNsYXNzZXMsYWRkQ2xhc3NlcyxjcmVhdGVNYWluRGl2LGFkZFByb2plY3RzLGNyZWF0ZVRhc2tzRGl2LG5ld0FycixuZXdQcm9qZWN0cyxyZW1vdmVDbGFzc2VzIH07XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIGxldCBkZWZhdWx0UHJvamVjdCA9IChmdW5jdGlvbiBuYW1lKHBhcmFtcykgeyAgIFxuLy8gICAgIGNyZWF0ZUhlYWRlcigpXG4vLyAgICAgY3JlYXRlUHJvamVjdCgpXG4vLyB9KSgpO1xuXG5cbi8vIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QoKSB7XG4vLyAgICAgbGV0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCd0ZW1wbGF0ZXMnKVxuLy8gICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQodGVtcGxhdGUpXG4vLyAgICAgY3JlYXRlRGVmYXVsdEZvcm0oKVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBjcmVhdGVJbm5lckhlYWRlcigpe1xuLy8gICAgIGxldCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuLy8gICAgIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSdEZWZhdWx0IFByb2plY3QnXG4vLyAgICAgbGV0IGlubmVySGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBpbm5lckhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckhlYWRlckRpdicpXG4vLyAgICAgaW5uZXJIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcilcbi8vICAgICBpbm5lckhlYWRlckRpdi5hcHBlbmRDaGlsZChkcm9wRG93bilcbi8vICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbm5lckhlYWRlckRpdilcbi8vIH1cblxuLy8gZnVuY3Rpb24gY3JlYXRlRGVmYXVsdEZvcm0oKVxuLy8ge1xuLy8gICAgIGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuLy8gICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtcycpXG5cblxuLy8gICAgIC8vIGxldCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuLy8gICAgIC8vIGZvcm1IZWFkZXIudGV4dENvbnRlbnQgPSdEZWZhdWx0IFByb2plY3QnXG5cbi8vICAgICBsZXQgZHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuLy8gICAgIGRyb3BEb3duLmNsYXNzTGlzdC5hZGQoJ2Ryb3BEb3duJylcblxuLy8gICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuLy8gICAgIHRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCd0aXRsZScpXG4vLyAgICAgdGl0bGVMYWJlbC50ZXh0Q29udGVudD0nVGl0bGUnXG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuLy8gICAgIHRpdGxlLnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZScpXG5cblxuLy8gICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuLy8gICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpXG4vLyAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudD0nRGVzY3JpcHRpb24nXG4vLyAgICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuLy8gICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbicpXG5cbi8vICAgICBsZXQgZHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuLy8gICAgIGR1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2R1ZURhdGUnKVxuLy8gICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWVEYXRlJ1xuLy8gICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuLy8gICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NyaXB0aW9uJylcblxuLy8gICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuLy8gICAgIHByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdwcmlvcml0eScpXG4vLyAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudD0nUHJpb3JpdHknXG4vLyAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuLy8gICAgIHByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eScpXG5cbi8vICAgICBsZXQgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGxhdGVzJylcblxuXG4vLyAgICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cbi8vICAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuLy8gICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuLy8gICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuLy8gICAgIHRlbXBsYXRlLmFwcGVuZENoaWxkKHRvZG9Gb3JtKVxuXG4vLyAgICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cblxuLy8gICAgIGxldCBub3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgbm90ZXNEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG4vLyAgICAgbGV0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4vLyAgICAgbm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ25vdGVzJylcbi8vICAgICBub3Rlc0xhYmVsLnRleHRDb250ZW50PSdOb3Rlcyc7XG5cbi8vICAgICBsZXQgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpXG4vLyAgICAgbm90ZXMuc2V0QXR0cmlidXRlKCdpZCcsJ25vdGVzJylcblxuLy8gICAgIC8vIGxldCBpbm5lckhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgLy8gaW5uZXJIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJIZWFkZXJEaXYnKVxuLy8gICAgIC8vIGlubmVySGVhZGVyRGl2LmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpXG4vLyAgICAgLy8gaW5uZXJIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZHJvcERvd24pXG4vLyAgICAgLy8gdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5uZXJIZWFkZXJEaXYpXG5cblxuXG5cbi8vICAgICB0aXRsZURpdi5hcHBlbmRDaGlsZCh0aXRsZUxhYmVsKVxuLy8gICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKVxuLy8gICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZCh0aXRsZURpdilcblxuLy8gICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpXG4vLyAgICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG4vLyAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpXG5cbi8vICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcbi8vICAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGUpXG4vLyAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdilcbi8vICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxhYmVsKVxuLy8gICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5KVxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KVxuXG4vLyAgICAgbm90ZXNEaXYuYXBwZW5kQ2hpbGQobm90ZXNMYWJlbClcbi8vICAgICBub3Rlc0Rpdi5hcHBlbmRDaGlsZChub3Rlcylcbi8vICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChub3Rlc0RpdilcblxuXG4vLyAgICAgbGV0IGJ1dHRvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4vLyAgICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2Jylcbi8vICAgICBsZXQgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jylcbi8vICAgICBuZXdUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsJ3N1Ym1pdCcpXG4vLyAgICAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnQWRkIGEgbmV3IHRhc2snKVxuLy8gICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuLy8gICAgIGNoZWNrZWQuc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKVxuLy8gICAgIGNoZWNrZWQuc2V0QXR0cmlidXRlKCdpZCcsJ2NoZWNrYm94Jylcbi8vICAgICBsZXQgY2hlY2tlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuLy8gICAgIGNoZWNrZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NoZWNrYm94Jylcbi8vICAgICBjaGVja2VkTGFiZWwudGV4dENvbnRlbnQ9J0ZpbmlzaGVkJ1xuLy8gICAgIGxldCBjaGVja2VkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBjaGVja2VkRGl2LmFwcGVuZENoaWxkKGNoZWNrZWQpXG4vLyAgICAgY2hlY2tlZERpdi5hcHBlbmRDaGlsZChjaGVja2VkTGFiZWwpXG4vLyAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pXG4vLyAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKGNoZWNrZWREaXYpXG4vLyAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxuLy8gfVxuXG5cblxuLy8gZnVuY3Rpb24gY3JlYXRlSGVhZGVyKClcbi8vIHtcbi8vICAgICBsZXQgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jylcbi8vICAgICBoZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyRGl2Jylcbi8vICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcbi8vICAgICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4vLyAgICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKVxuLy8gICAgIGhlYWRpbmcudGV4dENvbnRlbnQ9XCJUby1Eby1MaXN0XCJcbi8vICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdilcbi8vICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQoaGVhZGluZylcbi8vICAgICBoZWFkZXJEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEJ1dHRvbilcblxuLy8gfVxuLy8gZXhwb3J0IHtkZWZhdWx0UHJvamVjdH0iLCIvLyBpbXBvcnQgeyBuZXdBcnIgfSBmcm9tIFwiLi9kb21cIjtcblxuXG5cblxubGV0IHByb2plY3RzQXJyID0gW11cblxubGV0IGhvdmVyRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkQnV0dG9uJylcbiAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB0YXNrc0FkZCgpO1xuICAgIH0pXG59O1xuXG5sZXQgdGFza3NBZGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgbGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXNrLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIHRhc2tbal0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcblxuICAgIH1cbn1cbmV4cG9ydCB7aG92ZXJFZmZlY3QscHJvamVjdHNBcnJ9XG5cblxuLy8gW3tcIm5hbWVcIjpcImFcIixcImFyclwiOlt7XCJ0aXRsZVwiOlwicVwiLFwiZGVzY3JpcHRpb25cIjpcInFcIixcImR1ZURhdGVcIjpcIjIwMjQtMDctMDFcIixcInByaW9yaXR5XCI6MSxcImNoZWNrZWRcIjpmYWxzZSxcInRhc2tzRGl2XCI6e319XSxcImRpdkFyclwiOlt7fV19LHtcImFyclwiOltdLFwiZGl2QXJyXCI6W119XVwiIiwiaW1wb3J0IHsgdG9Eb0xpc3QgfSBmcm9tIFwiLi90b0RvXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FyciB9IGZyb20gXCIuL2xvZ2ljLmpzXCI7XG5pbXBvcnQge2RlbGV0ZVRhc2tzfSBmcm9tIFwiLi90YXNrLmpzXCJcbi8vIGltcG9ydCB7IHRvZ2dsZUNsYXNzZXMscmVtb3ZlQ2xhc3NlcyB9IGZyb20gXCIuL2RvbS5qc1wiO1xuXG5sZXQgbG9jYWxQcm9qZWN0c0FyciA9IFtdXG5sZXQgdXNlckRhdGFcbi8vIGxldCB0aW1lcyA9IDAgXG5sZXQgcHJvamVjdHMgPSBjbGFzc3tcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lKVxuICAgIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZVxuICAgICAgICB0aGlzLmFyciA9IFtdXG4gICAgICAgIHRoaXMuZGl2QXJyID0gW11cbiAgICB9XG5cblxuICAgIFxuICAgIGNyZWF0ZU1haW5EaXYoKXtcbiBcbiAgICAgICAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykgICAgICAgXG4gICAgICAgIGxldCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzSGVhZGVyJylcbiAgICAgICAgbGV0IHByb2plY3RzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICAgICAgcHJvamVjdHNIZWFkaW5nLnRleHRDb250ZW50PSdQcm9qZWN0cydcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKVxuICAgICAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRpbmcpXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcbiAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkZXIpXG4gICAgICAgIGxldCB0b0RvID0gbmV3IHRvRG9MaXN0O1xuICAgICAgICB0b0RvLmNyZWF0ZVRhc2tzRGl2KClcbiAgICB9XG5cbiAgICBhZGRUb0xvY2FsKCl7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBsb2NhbFByb2plY3RzQXJyLnB1c2godGhpcylcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShsb2NhbFByb2plY3RzQXJyKSk7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcbiAgICB9XG5cbiAgICBhZGRUb0xvY2Fscygpe1xuICAgICAgICBsZXQgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcblxuICAgICAgICB1c2VyTG9jYWwucHVzaCh0aGlzKVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHVzZXJMb2NhbCkpO1xuICAgICAgICB1c2VyRGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpXG5cbiAgICB9XG4gICAgYWRkdG9NdWx0aXBsZSh4KVxuICAgIHtcbiAgICAgICAgaWYoeD4wKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxuICAgICAgICB0aGlzLmFkZFRvTG9jYWwoKVxuICAgIH1cbiAgICBuZXdQcm9qZWN0KCl7XG4gICAgICAgICAgICBsZXQgIHggPSAwXG4gICAgICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGVEaXYoKTtcbiAgICAgICAgICAgIHByb2plY3RzQXJyLnB1c2goZGl2KVxuICAgICAgICAgICAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJylcbiAgICAgICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3RzKGRpdik7XG4gICAgICAgICAgICBsZXQgcHJvamVjdHNBcnIyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKVxuICAgICAgICAgICAgbGV0IGxlbiA9IHByb2plY3RzQXJyMi5sZW5ndGhcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIFxuICAgICAgICAgICAgeyAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNBcnIyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpPT4geyAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvamVjdHNBcnIyW2xlbi0xXS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLnZhbHVlPT0nJykgXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBwcm9qZWN0c0FycjJbaV0ucXVlcnlTZWxlY3RvcignaW5wdXQnKSAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih4PjApXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaT09KGxlbi0xKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0LnZhbHVlOyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG8gPSBuZXcgdG9Eb0xpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvRG8uY3JlYXRlTmV3VGFzayh0aGlzLGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdG9EbyA9IG5ldyB0b0RvTGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkdG9NdWx0aXBsZSh4KVxuICAgICAgICAgICAgICAgICAgICAgICAgdG9Eby5jcmVhdGVOZXdUYXNrKHRoaXMsaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy50b3VjaChkaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgLy8gfVxuICAgIH1cbiAgICBuZXdQcm9qZWN0cygpe1xuICAgICAgICBcbiAgICAgICAgbGV0ICB4ID0gMFxuICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGVEaXYoKTtcbiAgICAgICAgcHJvamVjdHNBcnIucHVzaChkaXYpXG4gICAgICAgIGxldCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdik7XG4gICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdHMoZGl2KTtcbiAgICAgICAgbGV0IHByb2plY3RzQXJyMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0JylcbiAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycjIubGVuZ3RoOyBpKyspIFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaW5wdXQgPSBwcm9qZWN0c0FycjJbaV0ucXVlcnlTZWxlY3RvcignaW5wdXQnKSAgICAgXG4gICAgICAgICAgICBwcm9qZWN0c0FycjJbaV0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCk9PiB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBpbnB1dC52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgdG9EbyA9IG5ldyB0b0RvTGlzdDtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRvTG9jYWxzKClcbiAgICAgICAgICAgICAgICB0b0RvLmNyZWF0ZU5ld1Rhc2sodGhpcyxpKVxuICAgICAgICAgICAgICAgIHgrKztcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG91Y2goZGl2KTsgXG4gICAgfVxuICAgIGdldFByb2plY3RzKHVzZXJMb2NhbCxhKXtcbiAgICAgICAgICAgIGxldCBpID0gMFxuICAgICAgICAgICAgbGV0IGRpdiA9IHRoaXMuY3JlYXRlRGl2KCk7XG4gICAgICAgICAgICBwcm9qZWN0c0Fyci5wdXNoKGRpdilcbiAgICAgICAgICAgIGxldCBpbnB1dCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHVzZXJMb2NhbC5uYW1lXG4gICAgICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxuICAgICAgICAgICAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KTtcblxuICAgICAgICAgICAgbGV0IGFkZE5ld1Rhc2tzQnV0dG9uID0gIGRpdi5xdWVyeVNlbGVjdG9yKCcuYWRkVGFza0J1dHRvbicpXG4gICAgICAgICAgICBhZGROZXdUYXNrc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG8gPSBuZXcgdG9Eb0xpc3Q7XG4gICAgICAgICAgICAgICAgICAgIHRvRG8uY3JlYXRlTmV3VGFza0Rpdih0aGlzLGEpXG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUHJvamVjdHMoZGl2KTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VGFza3MoZGl2LHVzZXJMb2NhbC5hcnIpXG4gICAgICAgICAgICB0aGlzLmhpZGVUYXNrcygpXG4gICAgICAgICAgICB0aGlzLnN3aXRjaFRhc2tzKGRpdilcbiAgICB9XG5cbiAgICBoaWRlVGFza3MoKVxuICAgIHtcbiAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0YXNrc1tpXS5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxuICAgICAgICB9XG5cbiAgICB9XG5cblxuICAgIGdldFRhc2tzKGRpdix0YXNrc0Fycil7XG4gICAgICAgIGxldCBjb3VudCA9IDBcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3NBcnIubGVuZ3RoOyBpKyspIFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChjb3VudDwyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGFza3ModGFza3NBcnJbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxufVxuXG4gICAgY3JlYXRlVGFza3ModGFzayl7XG5cblxuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyB0b0RvTGlzdCh0YXNrLnRpdGxlLHRhc2suZGVzY3JpcHRpb24sdGFzay5kdWVEYXRlLCB0YXNrLnByaW9yaXR5LHRhc2suY2hlY2tlZClcbiAgICAgICAgdGhpcy50b3VjaFRhc2tzKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIHN3aXRjaFRhc2tzKGRpdixjb3VudCA9IDApXG4gICAge1xuXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xuICAgICAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGFza3NbaV0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRpdkFyci5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY291bnQgKys7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXZBcnJbaV0uY2xhc3NMaXN0LnJlbW92ZSgnc3dpdGNoJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgIH1cblxuXG4gICAgdG91Y2hUYXNrcyhuZXdUYXNrKVxuICAgIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBuZXdEaXYgPSBuZXdUYXNrLmNyZWF0ZURpdihuZXdUYXNrKVxuICAgICAgICB0aGlzLmRpdkFyci5wdXNoKG5ld0RpdilcbiAgICAgICAgLy8gbGV0IG5ld1Rhc2tzID0gdGhpcy5kaXZBcnJcbiAgICAgICAgbmV3VGFzay50YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYpXG4gICAgICAgIGRlbGV0ZVRhc2tzKG5ld0RpdixuZXdUYXNrKVxuICAgICAgICBuZXdUYXNrLmVkaXRDbGljayhuZXdEaXYsbmV3VGFzaylcbiAgICB9XG5cbiAgICB0b3VjaChkaXYpe1xuICAgICAgIFxuICAgICAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PntcblxuICAgICAgICAgICAgbGV0IHRhc2tzID0gdGhpcy5kaXZBcnJcblxuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aD09MClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2tzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Rhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbmV3VGFza3NbaV0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLmFkZFN3aXRjaCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0YXNrc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzd2l0Y2gnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYWRkU3dpdGNoKCl7XG4gICAgICAgXG4gICAgICAgIGlmICghZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxldCBuZXdUYXNrcyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZXdUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGFza3NbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3NbaV0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBkZWxldGVQcm9qZWN0cyhkaXYpe1xuICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSAgICAgICBcbiAgICAgICAgbGV0IGRlbGV0ZVByb2plY3RzID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGVQcm9qZWN0cycpXG4gICAgICAgIGRlbGV0ZVByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT57XG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigncHJvamVjdCcpXG4gICAgICAgIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKGRpdilcbiAgICAgICAgbGV0IHRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgICAgICBsZXQgdGFza3MgPSB0aGlzLmRpdkFyclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRhc2sucmVtb3ZlQ2hpbGQodGFza3NbaV0pXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNyZWF0ZURpdiA9ICgpPT4ge1xuICAgICAgICBsZXQgcHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgICAgICBwcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0cycpXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgICAgICBhZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkVGFza0J1dHRvbicpXG4gICAgICAgIGFkZEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxuICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3N1Ym1pdCcpXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQobmFtZSlcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxuICAgICAgICByZXR1cm4gcHJvamVjdERpdlxuICAgIH1cblxuXG59XG5cblxuXG5leHBvcnR7cHJvamVjdHMsdXNlckRhdGF9IiwiaW1wb3J0IHsgdG9nZ2xlQ2xhc3NlcyB9IGZyb20gJy4vZG9tJztcbmltcG9ydCB7dG9Eb0xpc3R9IGZyb20gJy4vdG9EbydcbmltcG9ydCB7IHVzZXJEYXRhIH0gZnJvbSAnLi9wcm9qZWN0cyc7XG5cblxubGV0IGNyZWF0ZUZvcm0gPSBmdW5jdGlvbihkaXYpe1xuICAgIGxldCB0b2RvRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKVxuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtcycpXG4gICAgdG9kb0Zvcm0uc2V0QXR0cmlidXRlKCdpZCcsJ2Zvcm1zJylcbiAgICBsZXQgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbiAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0nVG8tRG8tTGlzdCdcbiAgICBsZXQgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICB0aXRsZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywndGl0bGUnKVxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQ9J1RpdGxlJ1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICB0aXRsZS5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKVxuICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZVxuXG4gICAgbGV0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlJylcbiAgICBkdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSAnRHVlRGF0ZSdcbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxuICAgIGR1ZURhdGUuc2V0QXR0cmlidXRlKCdpZCcsJ2R1ZURhdGUnKVxuICAgIGR1ZURhdGUucmVxdWlyZWQ9dHJ1ZTtcblxuXG4gICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3ByaW9yaXR5JylcbiAgICBwcmlvcml0eUxhYmVsLnRleHRDb250ZW50PSdQcmlvcml0eSdcblxuICAgIGxldCBwcmlvcml0eUxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBwcmlvcml0eUxvd0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxuICAgIGxldCBwcmlvcml0eU1pZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsZXQgcHJpb3JpdHlIaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuXG4gICAgcHJpb3JpdHlMb3dEaXYuaW5uZXJIVE1MPScxJ1xuXG4gICAgbGV0IHByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eUxvdycpXG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5TG93LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5JylcbiAgICBwcmlvcml0eU1pZERpdi50ZXh0Q29udGVudD0nMidcbiAgICBwcmlvcml0eUhpZ2hEaXYudGV4dENvbnRlbnQ9JzMnXG4gICAgcHJpb3JpdHlNaWREaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcbiAgICBwcmlvcml0eUhpZ2hEaXYuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJylcblxuXG4gICAgbGV0IHByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5TWlkLnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eU1pZCcpXG4gICAgcHJpb3JpdHlNaWQuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5TWlkLnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5JylcblxuXG5cbiAgICBsZXQgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHlIaWdoJylcbiAgICBwcmlvcml0eUhpZ2guc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpXG5cblxuICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9EaXYnKVxuXG4gICAgbGV0IHRpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXG5cblxuICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBkdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pXG4gICAgcHJpb3JpdHlMb3dEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3cpXG5cbiAgICBcbiAgICBwcmlvcml0eU1pZERpdi5hcHBlbmRDaGlsZChwcmlvcml0eU1pZClcblxuICAgIFxuICAgIHByaW9yaXR5SGlnaERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUhpZ2gpXG5cblxuICAgIGxldCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuXG5cbiAgICBsZXQgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcblxuICAgIGxldCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpXG4gICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudD0nRGVzY3JpcHRpb24nO1xuXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbicpXG5cbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpXG4gICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXG5cbiAgIFxuXG4gIFxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KVxuXG5cbiAgICBsZXQgaW5uZXJQcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChpbm5lclByaW9yaXR5RGl2KVxuICAgIGlubmVyUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMb3dEaXYpXG4gICAgaW5uZXJQcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eU1pZERpdilcbiAgICBpbm5lclByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaERpdilcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKVxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KVxuXG5cbiAgICBsZXQgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBidXR0b25EaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxuICAgIGxldCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcbiAgICBuZXdUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCdBZGQnKVxuXG4gICAgbGV0IGNoZWNrZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpXG4gICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlY2tib3gnKVxuICAgIGNoZWNrZWQuY2xhc3NMaXN0LmFkZCgnY2hlY2tlZERpdklubmVyJylcbiAgICBsZXQgY2hlY2tlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGNoZWNrZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NoZWNrYm94JylcbiAgICBjaGVja2VkTGFiZWwudGV4dENvbnRlbnQ9J0ZpbmlzaGVkJ1xuICAgIGxldCBjaGVja2VkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBjaGVja2VkRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWREaXYnKVxuICAgIGNoZWNrZWREaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZClcbiAgICBjaGVja2VkRGl2LmFwcGVuZENoaWxkKGNoZWNrZWRMYWJlbClcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbilcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZERpdilcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChidXR0b25EaXYpXG59O1xuXG5sZXQgaW5wdXREZXRhaWxzID0gZnVuY3Rpb24ocHJvamVjdERpdixqKXtcbiAgICAvLyBsZXQgdXNlckRhdGEgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpKVxuICAgIGxldCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtcycpXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxuICAgIGxldCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZHVlRGF0ZScpXG5cblxuICAgIGxldCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5JylcblxuXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxuICAgIGxldCBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3gnKVxuXG4gICAgZm9ybXMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywoKT0+e1xuICAgICAgICBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlMb3cnKS5jaGVja2VkPT09dHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dCA9IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlNaWQnKS5jaGVja2VkPT09dHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0ID0gMlxuICAgICAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUhpZ2gnKS5jaGVja2VkPT09dHJ1ZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUlucHV0ID0gM1xuICAgICAgICAgICAgfVxuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyB0b0RvTGlzdCh0aXRsZUlucHV0LnZhbHVlLGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LGNoZWNrZWRJbnB1dC5jaGVja2VkKVxuXG4gICAgICAgIHVzZXJEYXRhW2pdLmFyci5wdXNoKG5ld1Rhc2spXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgcHJvamVjdERpdi5hcnIucHVzaChuZXdUYXNrKVxuICAgICAgICBcbiAgICBcbiAgICAgICAgXG5cbiAgICAgICAgZm9ybXMucmVtb3ZlKClcbiAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xuICAgICAgICBlbnRlckRldGFpbHMobmV3VGFzayxwcm9qZWN0RGl2LGopO1xuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbn1cbmxldCBpbnB1dFRhc2tEZXRhaWxzID0gZnVuY3Rpb24ocHJvamVjdCxhKSB7XG5cbiAgICBsZXQgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybXMnKVxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKVxuXG5cbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpXG5cblxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcbiAgICBsZXQgY2hlY2tlZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrYm94JylcblxuICAgIGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKCk9PntcbiAgICAgICAgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5TG93JykuY2hlY2tlZD09PXRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQgPSAxXG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5TWlkJykuY2hlY2tlZD09PXRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dCA9IDJcbiAgICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlIaWdoJykuY2hlY2tlZD09PXRydWUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dCA9IDNcbiAgICAgICAgICAgIH1cblxuICAgICAgICBsZXQgbmV3VGFzayA9IG5ldyB0b0RvTGlzdCh0aXRsZUlucHV0LnZhbHVlLGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsZHVlRGF0ZUlucHV0LnZhbHVlLCBwcmlvcml0eUlucHV0LGNoZWNrZWRJbnB1dC5jaGVja2VkKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICBsZXQgdXNlckxvY2FsID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcbiAgICAgICAgXG4gICAgICAgIHVzZXJMb2NhbFthXS5hcnIucHVzaChuZXdUYXNrKVxuXG4gICAgICAgIHByb2plY3QuYXJyLnB1c2gobmV3VGFzaylcbiAgICAgICAgXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHVzZXJMb2NhbCkpXG4gICAgICAgIFxuXG4gICAgICAgIGZvcm1zLnJlbW92ZSgpXG4gICAgICAgIHRvZ2dsZUNsYXNzZXMoKTtcbiAgICAgICAgZW50ZXJEZXRhaWxzUmVmcmVzaChuZXdUYXNrLHByb2plY3QsYSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBlbnRlckRldGFpbHNSZWZyZXNoKG5ld1Rhc2sscHJvamVjdERpdixhKSB7XG4gICAgbGV0IHVzZXJMb2NhbCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ1Byb2plY3RzJykpXG4gICAgbGV0IG5ld0RpdiA9IG5ld1Rhc2suY3JlYXRlRGl2KG5ld1Rhc2spXG4gICAgdXNlckxvY2FsW2FdLmRpdkFyci5wdXNoKChuZXdEaXYpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdQcm9qZWN0cycsSlNPTi5zdHJpbmdpZnkodXNlckxvY2FsKSlcbiAgICBwcm9qZWN0RGl2LmRpdkFyci5wdXNoKG5ld0RpdilcbiAgICBuZXdUYXNrLnRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld0RpdilcbiAgICBkZWxldGVUYXNrcyhuZXdEaXYsbmV3VGFzaylcbiAgICBuZXdUYXNrLmVkaXRDbGljayhuZXdEaXYsbmV3VGFzaylcbn1cblxuXG5cbmZ1bmN0aW9uIGVudGVyRGV0YWlscyhuZXdUYXNrLHByb2plY3REaXYsYSl7XG5cbiAgICBsZXQgbmV3RGl2ID0gbmV3VGFzay5jcmVhdGVEaXYobmV3VGFzaylcbiAgICB1c2VyRGF0YVthXS5kaXZBcnIucHVzaCgobmV3RGl2KSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnUHJvamVjdHMnLEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSlcbiAgICBwcm9qZWN0RGl2LmRpdkFyci5wdXNoKG5ld0RpdilcbiAgICBuZXdUYXNrLnRhc2tzRGl2LmFwcGVuZENoaWxkKG5ld0RpdilcbiAgICBkZWxldGVUYXNrcyhuZXdEaXYsbmV3VGFzaylcbiAgICBuZXdUYXNrLmVkaXRDbGljayhuZXdEaXYsbmV3VGFzaylcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFza3MobmV3RGl2LG5ld1Rhc2spe1xuICAgIGxldCBkZWxldGVUYXNrcyA9IG5ld0Rpdi5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlVGFza3MnKVxuICAgIGRlbGV0ZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XG4gICAgICAgbmV3VGFzay50YXNrc0Rpdi5yZW1vdmVDaGlsZChuZXdEaXYpXG4gICAgfSlcbn1cbmZ1bmN0aW9uIGVudGVyRWRpdERldGFpbHMoZGl2LG5ld1Rhc2spe1xuICAgIGxldCBuZXdEaXYgPSBuZXdUYXNrLmNyZWF0ZURpdihuZXdUYXNrKVxuICAgIG5ld1Rhc2sudGFza3NEaXYucmVtb3ZlQ2hpbGQoZGl2KVxuICAgIG5ld1Rhc2sudGFza3NEaXYuYXBwZW5kQ2hpbGQobmV3RGl2KVxuICAgIFxuICAgIG5ld1Rhc2suZWRpdENsaWNrKG5ld0RpdixuZXdUYXNrKVxufVxuXG5cbmxldCBlZGl0Rm9ybSA9IGZ1bmN0aW9uIChkaXYsdGFzaykge1xuICAgIGNyZWF0ZUZvcm0oKTtcbiAgICBsZXQgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybXMnKVxuICAgIGxldCB0aXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlJylcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKVxuICAgIGxldCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUxvdycpXG4gICAgbGV0IHByaW9yaXR5TWlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5TWlkJylcbiAgICBsZXQgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5SGlnaCcpXG4gICAgbGV0IHByaW9yaXR5O1xuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcbiAgICBsZXQgY2hlY2tlZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrZWREaXZJbm5lcicpXG4gICAgdGl0bGVJbnB1dC5kZWZhdWx0VmFsdWUgPSB0YXNrLnRpdGxlO1xuICAgIGR1ZURhdGVJbnB1dC5kZWZhdWx0VmFsdWUgPSB0YXNrLmR1ZURhdGU7XG4gICAgaWYgKHRhc2sucHJpb3JpdHkgPT09IDEpXG4gICAge1xuICAgICAgICBcbiAgICAgICAgcHJpb3JpdHlMb3cuY2hlY2tlZCA9IHRydWVcbiAgICB9XG4gICAgZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gMilcbiAgICAgICAge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBwcmlvcml0eU1pZC5jaGVja2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gMylcbiAgICAgICAge1xuICAgICAgICAgICBcbiAgICAgICAgICAgIHByaW9yaXR5SGlnaC5jaGVja2VkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgZGVzY3JpcHRpb25JbnB1dC5kZWZhdWx0VmFsdWUgPSB0YXNrLmRlc2NyaXB0aW9uO1xuICAgIGlmKHRhc2suY2hlY2tlZCA9PSB0cnVlKVxuICAgICAgICB7XG4gICAgICAgICAgICBjaGVja2VkSW5wdXQuY2hlY2tlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBmb3Jtcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIFxuICAgICAgICBpZiAocHJpb3JpdHlMb3cuY2hlY2tlZCA9PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0xIFxuICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5TWlkLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHkgPTIgXG4gICAgICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYocHJpb3JpdHlIaWdoLmNoZWNrZWQgPT0gdHJ1ZSl7XG4gICAgICAgICAgICBwcmlvcml0eSA9IDNcbiAgICAgICAgfVxuICAgICAgICBsZXQgZWRpdGVkVGFzayA9IG5ldyB0b0RvTGlzdCh0aXRsZUlucHV0LnZhbHVlLGRlc2NyaXB0aW9uSW5wdXQudmFsdWUsZHVlRGF0ZUlucHV0LnZhbHVlLHByaW9yaXR5LGNoZWNrZWRJbnB1dC5jaGVja2VkKVxuICAgICAgICBmb3Jtcy5yZW1vdmUoKVxuICAgICAgICB0b2dnbGVDbGFzc2VzKCk7XG4gICAgICAgIGVudGVyRWRpdERldGFpbHMoZGl2LGVkaXRlZFRhc2spO1xuICAgIH0pICAgXG59XG5cbmV4cG9ydHtjcmVhdGVGb3JtLGlucHV0RGV0YWlscyxlZGl0Rm9ybSxkZWxldGVUYXNrcyxpbnB1dFRhc2tEZXRhaWxzfSIsImltcG9ydCB7Y3JlYXRlRm9ybSxpbnB1dERldGFpbHMsZWRpdEZvcm0saW5wdXRUYXNrRGV0YWlsc30gZnJvbSAnLi90YXNrJ1xuaW1wb3J0IHt0b2dnbGVDbGFzc2VzLHJlbW92ZUNsYXNzZXN9IGZyb20gJy4vZG9tJ1xubGV0IHRvRG9MaXN0ID0gY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLGRlc2NyaXB0aW9uLGR1ZURhdGUscHJpb3JpdHksY2hlY2tlZClcbiAgICB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgICAgIHRoaXMudGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxuICAgICAgICB0aGlzLnRhc2tzQXJyID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlVGFza3NEaXYoKXtcbiAgICAgICAgbGV0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFza3NIZWFkZXIuY2xhc3NMaXN0LmFkZCgndGFza3NIZWFkZXInKVxuICAgICAgICBsZXQgdGFza3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuICAgICAgICB0YXNrc0hlYWRpbmcudGV4dENvbnRlbnQ9J1Rhc2tzJ1xuICAgICAgICB0YXNrc0hlYWRlci5hcHBlbmRDaGlsZCh0YXNrc0hlYWRpbmcpXG4gICAgICAgIHRoaXMudGFza3NEaXYuYXBwZW5kQ2hpbGQodGFza3NIZWFkZXIpXG4gICAgfVxuXG5jcmVhdGVEaXYobmV3VGFzaz17fSkge1xuXG4gICAgICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJylcbiAgICAgICAgXG4gICAgICAgIGxldCBkaXNwbGF5ZWRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgZGlzcGxheWVkVGV4dC5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWRUZXh0JylcbiAgICAgICAgbGV0IGRpc3BsYXllZFRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgICAgICBkaXNwbGF5ZWRUZXh0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZFRleHRIZWFkZXInKVxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQ9bmV3VGFzay50aXRsZVxuICAgICAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBuZXdUYXNrLmR1ZURhdGVcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQ9bmV3VGFzay5wcmlvcml0eVxuICAgICAgICBwcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eScpXG4gICAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgndHlwZScsJ2NoZWNrYm94JylcbiAgICAgICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlY2tib3gnKVxuICAgICAgICBpZihuZXdUYXNrLmNoZWNrZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tlZC5jaGVja2VkID0gdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICBkaXNwbGF5ZWRUZXh0SGVhZGVyLmFwcGVuZENoaWxkKG5hbWUpXG4gICAgICAgIGRpc3BsYXllZFRleHRIZWFkZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcbiAgICAgICAgZGlzcGxheWVkVGV4dEhlYWRlci5hcHBlbmRDaGlsZChwcmlvcml0eSlcblxuICAgICAgICBkaXNwbGF5ZWRUZXh0LmFwcGVuZENoaWxkKGRpc3BsYXllZFRleHRIZWFkZXIpXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheWVkVGV4dClcbiAgICAgICAgbGV0IGJ1dHRvbnMgPSB0aGlzLmNyZWF0ZUJ1dHRvbnMoKVxuICAgICAgICBidXR0b25zLmFwcGVuZENoaWxkKGNoZWNrZWQpXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYnV0dG9ucylcbiAgICAgICAgcmV0dXJuIHRhc2tEaXZcbiAgICB9XG5cbiAgICBjcmVhdGVCdXR0b25zKCl7XG4gICAgICAgIGxldCBidXR0b25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICAgICAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zJylcbiAgICAgICAgbGV0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIGRlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGVUYXNrcycpXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgZWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0JylcbiAgICAgICAgYnV0dG9uc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pXG4gICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbilcbiAgICAgICAgcmV0dXJuIGJ1dHRvbnNEaXZcbiAgICB9XG4gICAgY3JlYXRlTmV3VGFza0Rpdihwcm9qZWN0LGEpXG4gICAge1xuICAgICAgICBjcmVhdGVGb3JtKCk7XG4gICAgICAgIHRvZ2dsZUNsYXNzZXMoKTtcbiAgICAgICAgaW5wdXRUYXNrRGV0YWlscyhwcm9qZWN0LGEpO1xuICAgIH1cblxuXG4gICAgZWRpdENsaWNrKGRpdix0YXNrKSB7ICAgICBcbiAgICAgICAgbGV0IGVkaXRDaGVja0JveCA9IGRpdi5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3gnKSAgICAgICAgICAgXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGlja3MgdGhlIEVkaXQgYnV0dG9uIGluIGVhY2ggVGFza3NcbiAgICAgICAgbGV0IGVkaXRCdXR0b24gPSBkaXYucXVlcnlTZWxlY3RvcignLmVkaXQnKVxuICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgIGlmKGVkaXRDaGVja0JveC5jaGVja2VkID09PSB0cnVlKXtcbiAgICAgICAgICAgICAgICB0YXNrLmNoZWNrZWQgPSB0cnVlXG4gICAgICAgICAgICB9ICBcblxuICAgICAgICAgICAgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09IDEpXG4gICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5LnRleHRDb250ZW50ID09IDIpXG4gICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9IDJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5LnRleHRDb250ZW50PT0gMylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMoKTtcbiAgICAgICAgICAgIGVkaXRGb3JtKGRpdix0YXNrKTsgICAgICAgXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KVxuICAgIH07XG5cbiAgICBjcmVhdGVOZXdUYXNrKHByb2plY3Qsail7XG4gICAgICAgICAgICBjcmVhdGVGb3JtKCk7XG4gICAgICAgICAgICB0b2dnbGVDbGFzc2VzKCk7XG4gICAgICAgICAgICBpbnB1dERldGFpbHMocHJvamVjdCxqKTsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xpY2tzIHRoZSBBZGQgYnV0dG9uIGZvciBUYXNrc1xuICAgIH1cblxufVxuXG5cblxuXG5leHBvcnQge3RvRG9MaXN0fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJcbmltcG9ydCB7IGJhc2ljTGF5b3V0LGNyZWF0ZU1haW5EaXYsYWRkUHJvamVjdHMsY3JlYXRlVGFza3NEaXYsbmV3UHJvamVjdHMgfSBmcm9tIFwiLi9kb20uanNcIjtcbi8vIGltcG9ydCB7IGhvdmVyRWZmZWN0LHRvdWNoRWZmZWN0fSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbi8vIGltcG9ydCB7Y3JlYXRlVGFza3NEaXZ9IGZyb20gJy4vdGFzay5qcydcblxuKGZ1bmN0aW9uICgpIHtcbiAgICBsZXQgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdQcm9qZWN0cycpOyAgICBcbiAgICBpZihkYXRhKXsgXG4gICAgICAgICAgICBsZXQgdXNlckxvY2FsID0gSlNPTi5wYXJzZShkYXRhKVxuICAgICAgICAgICAgYmFzaWNMYXlvdXQoKTtcbiAgICAgICAgICAgIGNyZWF0ZU1haW5EaXYoKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tzRGl2KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVzZXJMb2NhbC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3RzKHVzZXJMb2NhbFtpXS5uYW1lKVxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0UHJvamVjdHModXNlckxvY2FsW2ldLGkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdQcm9qZWN0cygpO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBcbiAgICAgICAgYmFzaWNMYXlvdXQoKTtcbiAgICAgICAgY3JlYXRlTWFpbkRpdigpO1xuICAgICAgICBhZGRQcm9qZWN0cygpOyBcbiAgICAgICAgY3JlYXRlVGFza3NEaXYoKTtcbiAgICB9XG4gfVxuKSgpO1xuXG4vLyB0b3VjaEFuaW1hdGlvbigpO1xuLy8gaG92ZXJFZmZlY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=