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
   */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAAyB;IACzB,kBAAkB;EACpB;AACF;IACI,aAAa;AACjB;;AAEA;CACC,kCAAkC;AACnC,sBAAsB;AACtB,qBAAqB;AACrB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,2IAA2I;AAC/I;;AAEA;IACI,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;;AAEA;;AAEA;IACI,mDAA0B;IAC1B,sBAAsB;IACtB,2BAA2B;IAC3B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,aAAa;IACb,YAAY;IACZ,qIAAqI;IACrI,mCAAmC;AACvC,+BAA+B;AAC/B,aAAa;AACb,6BAA6B;AAC7B,mBAAmB;AACnB,YAAY;AACZ;AACA;EACE,mDAA6B;EAC7B,wBAAwB;EACxB,2BAA2B;EAC3B,YAAY;AACd;;AAEA;EACE,mDAA6B;EAC7B,sBAAsB;EACtB,4BAA4B;EAC5B,YAAY;AACd;;AAEA;IACI,mDAA0B;IAC1B,sBAAsB;IACtB,2BAA2B;IAC3B;kBACc;AAClB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;AACvB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,qIAAqI;IACrI;kCAC8B;AAClC,aAAa;AACb,8BAA8B;AAC9B,mBAAmB;AACnB,6BAA6B;AAC7B,gCAAgC;AAChC;AACA;AACA,YAAY;AACZ,yBAAyB;AACzB;AACA;;IAEI,aAAa;IACb,yBAAyB;IACzB,SAAS;AACb;;;;AAIA;IACI,mDAA2B;IAC3B,wBAAwB;IACxB,2BAA2B;IAC3B,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;;AAGA;IACI,SAAS;IACT,YAAY;AAChB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,QAAQ;IACR,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;IACZ,qBAAqB;AACzB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;EACrB;EACA;;EAEA;EACA;IACE,aAAa;IACb,YAAY;IACZ,6BAA6B;EAC/B;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,SAAS;EACX;;AAEF;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;AACA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;IAiDI","sourcesContent":["@font-face {\r\n    font-family: 'MyFont';\r\n    src: url('./monster.ttf');\r\n    font-style: normal;\r\n  }\r\n#main{\r\n    padding: 1rem;\r\n}\r\n\r\nbody{\r\n /* background: url(./wall.jpg);  */\r\nbackground-size: cover;\r\nfont-family: 'MyFont';\r\n}\r\n\r\n.infoDiv{   \r\n    position: relative;\r\n    display: grid;\r\n    border-radius: 10px;\r\n    grid-template-columns: 1fr 1fr;\r\n    /* box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset; */\r\n}\r\n\r\n.projects{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.tasks{\r\n\r\n}\r\n\r\n.addTaskButton{\r\n    background: url(./add.svg);\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 2rem;\r\n    width: 2rem;\r\n}\r\n\r\n.project{\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n    -moz-border-radius-bottomleft: 50px;\r\nborder-bottom-left-radius: 50px;\r\ndisplay: flex;\r\njustify-content: space-evenly;\r\nalign-items: center;\r\nheight: 30px;\r\n}\r\n.buttons > button:first-child{\r\n  background: url(./delete.svg);\r\n  background-size: contain;\r\n  background-position: center;\r\n  border: none;\r\n}\r\n\r\n.deleteProjects{\r\n  background: url(./delete.svg);\r\n  background-size: cover;\r\n  background-position: contain;\r\n  border: none;\r\n}\r\n\r\n.addButton{\r\n    background: url(./add.svg);\r\n    background-size: cover;\r\n    background-position: center;\r\n    /* height: 2rem;\r\n    width: 2rem; */\r\n}\r\n\r\n.projectsHeader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n.tasksHeader{\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n}\r\n\r\n.task{\r\n    height: 30px;\r\n    padding: 2rem;\r\n    margin: 2rem;\r\n    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;\r\n    /* -moz-border-radius-bottomleft: 50px;\r\nborder-bottom-left-radius: 50px; */\r\ndisplay: flex;\r\njustify-content: space-between;\r\nalign-items: center;\r\nborder-top-right-radius: 1rem;\r\nborder-bottom-right-radius: 1rem;\r\n}\r\n.task > div{\r\nflex-grow: 1;\r\n/* font-weight: bolder; */\r\n}\r\n.buttons{\r\n\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    gap: 1rem;\r\n}\r\n\r\n\r\n\r\n.edit{\r\n    background: url(./edit.svg);\r\n    background-size: contain;\r\n    background-position: center;\r\n    border: none;\r\n}\r\n\r\nbutton{\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n.buttons>input{\r\n    margin: 0;\r\n    flex-grow: 1;\r\n}\r\n.todoForms{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 1rem;\r\n    padding: 1rem;\r\n    position: absolute;\r\n    top: 22%;\r\n    left:39%;\r\n    border: 1px solid black;\r\n    border-radius: 1rem;\r\n}\r\n\r\n.innerDiv{\r\n    display: flex;\r\n    gap: 4rem;\r\n}\r\n\r\n.innerDiv>label{\r\n    width: 20%;\r\n}\r\n\r\n.innerDiv>input{\r\n    flex-grow: 1;\r\n    font-family: 'MyFont';\r\n}\r\n\r\ntextarea{\r\n    flex-grow: 1;\r\n}\r\n\r\n.switch{\r\n    display: none;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n  }\r\n  .checkedDiv{\r\n    \r\n  }\r\n  .innerDiv>div{\r\n    display: flex;\r\n    flex-grow: 1;\r\n    justify-content: space-around;\r\n  }\r\n  \r\n  .displayedText{\r\n    width: 80%;\r\n  }\r\n\r\n  .displayedTextHeader{\r\n    display: flex;\r\n    gap: 4rem;\r\n  }\r\n\r\n.inactiveTask{\r\n  display: none;\r\n}\r\n\r\n.project>input{\r\n  border-radius: 1rem;\r\n}\r\n/*\r\n  .container input {\r\n    position: absolute;\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n  \r\n \r\n  .checkmark {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 25px;\r\n    width: 25px;\r\n    background-color: #eee;\r\n    border-radius: 50%;\r\n  }\r\n  \r\n\r\n  .container:hover input ~ .checkmark {\r\n    background-color: #ccc;\r\n  }\r\n  \r\n\r\n  .container input:checked ~ .checkmark {\r\n    background-color: #2196F3;\r\n  }\r\n  \r\n\r\n  .checkmark:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    display: none;\r\n  }\r\n  \r\n\r\n  .container input:checked ~ .checkmark:after {\r\n    display: block;\r\n  }\r\n  \r\n\r\n  .container .checkmark:after {\r\n       top: 9px;\r\n      left: 9px;\r\n      width: 8px;\r\n      height: 8px;\r\n      border-radius: 50%;\r\n      background: white;\r\n  }\r\n   */"],"sourceRoot":""}]);
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
    
//     let addButton = document.querySelector('.addButton')
//         addButton.addEventListener('click',()=>{
//                 let project = new projects('Default Template');
//                 // project.createMainDiv()
//         });
//     project.newProject()

})();

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
        // let projectDiv = this.createDiv();
        // projectsDiv.appendChild(projectDiv)
        // // this.hoverEffect(projectDiv);

        //  let toDo = new toDoList;
        // let newTasksDone  = projectDiv.querySelector('.addTaskButton')
        // newTasksDone.addEventListener('click',function () {
        //     console.log('kundi  ')
        // toDo.createNewTask(projectDiv)
        // event.preventDefault();
        // })
        
        
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

let addProjects = (function () {
                
                let addButton = document.querySelector('.addButton')
                addButton.addEventListener('click',()=>{
                        
                let project = new _projects_js__WEBPACK_IMPORTED_MODULE_1__.projects();
                project.newProject()
                newArr.push(project)
                ;(0,_logic_js__WEBPACK_IMPORTED_MODULE_2__.hoverEffect)();      
        });

})();

let createTasksDiv = (function(){
        let tasksHeader = document.createElement('div')
        tasksHeader.classList.add('tasksHeader')
  
        let tasksHeading = document.createElement('h3')
        tasksHeading.textContent='Tasks'
        tasksHeader.appendChild(tasksHeading)
        let tasks = document.querySelector('.tasks')
        tasks.appendChild(tasksHeader)
    })();



















































































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



let localProjectsArr = []
let userData
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

    addtoMultiple()
    {
        localStorage.clear()
        localProjectsArr.push(this)
        localStorage.setItem("Projects", JSON.stringify(localProjectsArr));
        userData = JSON.parse(localStorage.getItem('Projects'))
    }
    newProject(){
            let  j = 0
            let div = this.createDiv();
            _logic_js__WEBPACK_IMPORTED_MODULE_1__.projectsArr.push(div)
            
            let projectsDiv = document.querySelector('.projects')
            projectsDiv.appendChild(div);
            this.deleteProjects(div);
            let projectsArr2 = document.querySelectorAll('.project')
            if (projectsArr2.length==1) 
            {
                let input = projectsArr2[0].querySelector('input')     
                projectsArr2[0].addEventListener('submit', ()=> {
                    this.name = input.value;
                    
                     if (j==0) 
                     {
                        this.addToLocal()
                     }
                     
                    let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
                    toDo.createNewTask(this)
                    event.preventDefault();
                    j++;
                })
            }
            else if(projectsArr2.length>1)
            {
                let count = 0
                for (let i = 0; i < projectsArr2.length; i++) 
                {
                   
                    let input = projectsArr2[i].querySelector('input')
                    
                    projectsArr2[i].addEventListener('submit',()=>{
                        console.log('andi')
                        this.name = input.value;
                        if(count==0)
                        {
                        this.addtoMultiple()
                        }
                        count++
                    let toDo = new _toDo__WEBPACK_IMPORTED_MODULE_0__.toDoList;
                    toDo.createNewTask(this,j)
                    event.preventDefault();
                    }) 
                }
                j++;
            }
            this.touch(div)
            
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
/* harmony export */   editForm: () => (/* binding */ editForm),
/* harmony export */   inputDetails: () => (/* binding */ inputDetails)
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
    
    let forms = document.querySelector('#forms')
    let titleInput = document.querySelector('#title')
    let dueDateInput = document.querySelector('#dueDate')


    let priorityInput = document.querySelector('#priority')


    let descriptionInput = document.querySelector('#description')
    let checkedInput = document.querySelector('#checkbox')

    forms.addEventListener('submit',()=>{
        console.log('kundi')
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


        console.log(_projects__WEBPACK_IMPORTED_MODULE_2__.userData)
        projectDiv.arr.push(newTask)
        
        // (userData[0].arr).push(newTask)
        

        forms.remove()
        ;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.toggleClasses)();
        enterDetails(newTask,projectDiv);

        event.preventDefault();
    })
}

function enterDetails(newTask,projectDiv){
  
    let newDiv = newTask.createDiv(newTask)
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

    createNewTask(projectDiv,j=0){

            (0,_task__WEBPACK_IMPORTED_MODULE_0__.createForm)();
            (0,_dom__WEBPACK_IMPORTED_MODULE_1__.toggleClasses)();
            (0,_task__WEBPACK_IMPORTED_MODULE_0__.inputDetails)(projectDiv,j);                         // Clicks the Add button for Tasks
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task.js */ "./src/task.js");






_dom_js__WEBPACK_IMPORTED_MODULE_0__.basicLayout;
_dom_js__WEBPACK_IMPORTED_MODULE_0__.createMainDiv ;
_dom_js__WEBPACK_IMPORTED_MODULE_0__.addProjects;
_task_js__WEBPACK_IMPORTED_MODULE_3__.createTasksDiv;

// touchAnimation();
// hoverEffect();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0RBQVE7QUFDMUM7QUFDQTtBQUNBLGdCQUFnQix1REFBVztBQUMzQixTQUFTO0FBQ1Q7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQytGO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzVW9CO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNnQztBQUNoQztBQUNBO0FBQ0EsS0FBSyxtQkFBbUIsZ0dBQWdHLGNBQWMsRUFBRSxFQUFFLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Qm5IO0FBQ1M7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwyQ0FBUTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxrREFBVztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyQ0FBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQywyQ0FBUTtBQUMzQztBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLHFCQUFxQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsa0JBQWtCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektzQztBQUNQO0FBQ087QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFDZ0Y7QUFDNUI7QUFDaEM7QUFDb0I7QUFDeEM7QUFDQSxnREFBVztBQUNYLGtEQUFhO0FBQ2IsZ0RBQVc7QUFDWCxvREFBYztBQUNkO0FBQ0E7QUFDQSxpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9sb2dpYy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvRG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21vbnN0ZXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9hZGQuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9lZGl0LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XHJcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XHJcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICB9XHJcbiNtYWlue1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5cclxuYm9keXtcclxuIC8qIGJhY2tncm91bmQ6IHVybCguL3dhbGwuanBnKTsgICovXHJcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbmZvbnQtZmFtaWx5OiAnTXlGb250JztcclxufVxyXG5cclxuLmluZm9EaXZ7ICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7ICovXHJcbn1cclxuXHJcbi5wcm9qZWN0c3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxufVxyXG5cclxuLnRhc2tze1xyXG5cclxufVxyXG5cclxuLmFkZFRhc2tCdXR0b257XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgd2lkdGg6IDJyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0e1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICAgIG1hcmdpbjogMnJlbTtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDogNTBweDtcclxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcclxuZGlzcGxheTogZmxleDtcclxuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmhlaWdodDogMzBweDtcclxufVxyXG4uYnV0dG9ucyA+IGJ1dHRvbjpmaXJzdC1jaGlsZHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5kZWxldGVQcm9qZWN0c3tcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19ffSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb250YWluO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLmFkZEJ1dHRvbntcclxuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAvKiBoZWlnaHQ6IDJyZW07XHJcbiAgICB3aWR0aDogMnJlbTsgKi9cclxufVxyXG5cclxuLnByb2plY3RzSGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2tzSGVhZGVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRhc2t7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcclxuICAgIC8qIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA1MHB4O1xyXG5ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA1MHB4OyAqL1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxcmVtO1xyXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcclxufVxyXG4udGFzayA+IGRpdntcclxuZmxleC1ncm93OiAxO1xyXG4vKiBmb250LXdlaWdodDogYm9sZGVyOyAqL1xyXG59XHJcbi5idXR0b25ze1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcbi5lZGl0e1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fX30pO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbnM+aW5wdXR7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLnRvZG9Gb3Jtc3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjIlO1xyXG4gICAgbGVmdDozOSU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbn1cclxuXHJcbi5pbm5lckRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBnYXA6IDRyZW07XHJcbn1cclxuXHJcbi5pbm5lckRpdj5sYWJlbHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5pbm5lckRpdj5pbnB1dHtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcclxufVxyXG5cclxudGV4dGFyZWF7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5zd2l0Y2h7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLmNoZWNrZWREaXZ7XHJcbiAgICBcclxuICB9XHJcbiAgLmlubmVyRGl2PmRpdntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXllZFRleHR7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuXHJcbiAgLmRpc3BsYXllZFRleHRIZWFkZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiA0cmVtO1xyXG4gIH1cclxuXHJcbi5pbmFjdGl2ZVRhc2t7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnByb2plY3Q+aW5wdXR7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG4vKlxyXG4gIC5jb250YWluZXIgaW5wdXQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiBcclxuICAuY2hlY2ttYXJrIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xyXG4gIH1cclxuICBcclxuXHJcbiAgLmNoZWNrbWFyazphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcblxyXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG5cclxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xyXG4gICAgICAgdG9wOiA5cHg7XHJcbiAgICAgIGxlZnQ6IDlweDtcclxuICAgICAgd2lkdGg6IDhweDtcclxuICAgICAgaGVpZ2h0OiA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgfVxyXG4gICAqL2AsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBeUI7SUFDekIsa0JBQWtCO0VBQ3BCO0FBQ0Y7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0NBQ0Msa0NBQWtDO0FBQ25DLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsMklBQTJJO0FBQy9JOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxtREFBMEI7SUFDMUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixxSUFBcUk7SUFDckksbUNBQW1DO0FBQ3ZDLCtCQUErQjtBQUMvQixhQUFhO0FBQ2IsNkJBQTZCO0FBQzdCLG1CQUFtQjtBQUNuQixZQUFZO0FBQ1o7QUFDQTtFQUNFLG1EQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsMkJBQTJCO0VBQzNCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1EQUE2QjtFQUM3QixzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLFlBQVk7QUFDZDs7QUFFQTtJQUNJLG1EQUEwQjtJQUMxQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCO2tCQUNjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFJQUFxSTtJQUNySTtrQ0FDOEI7QUFDbEMsYUFBYTtBQUNiLDhCQUE4QjtBQUM5QixtQkFBbUI7QUFDbkIsNkJBQTZCO0FBQzdCLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsWUFBWTtBQUNaLHlCQUF5QjtBQUN6QjtBQUNBOztJQUVJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsU0FBUztBQUNiOzs7O0FBSUE7SUFDSSxtREFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxTQUFTO0lBQ1QsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztBQUNiOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7RUFDckI7RUFDQTs7RUFFQTtFQUNBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztFQUNYOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRElcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG4gICAgc3JjOiB1cmwoJy4vbW9uc3Rlci50dGYnKTtcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgfVxcclxcbiNtYWlue1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5e1xcclxcbiAvKiBiYWNrZ3JvdW5kOiB1cmwoLi93YWxsLmpwZyk7ICAqL1xcclxcbmJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mb0RpdnsgICBcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICAgIC8qIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7ICovXFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0c3tcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLnRhc2tze1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uYWRkVGFza0J1dHRvbntcXHJcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vYWRkLnN2Zyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgaGVpZ2h0OiAycmVtO1xcclxcbiAgICB3aWR0aDogMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3R7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW07XFxyXFxuICAgIG1hcmdpbjogMnJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogcmdiYSg2LCAyNCwgNDQsIDAuNCkgMHB4IDBweCAwcHggMnB4LCByZ2JhKDYsIDI0LCA0NCwgMC42NSkgMHB4IDRweCA2cHggLTFweCwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSAwcHggMXB4IDBweCBpbnNldDtcXHJcXG4gICAgLW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6IDUwcHg7XFxyXFxuYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNTBweDtcXHJcXG5kaXNwbGF5OiBmbGV4O1xcclxcbmp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG4uYnV0dG9ucyA+IGJ1dHRvbjpmaXJzdC1jaGlsZHtcXHJcXG4gIGJhY2tncm91bmQ6IHVybCguL2RlbGV0ZS5zdmcpO1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlUHJvamVjdHN7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoLi9kZWxldGUuc3ZnKTtcXHJcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjb250YWluO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uYWRkQnV0dG9ue1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9hZGQuc3ZnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICAvKiBoZWlnaHQ6IDJyZW07XFxyXFxuICAgIHdpZHRoOiAycmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdHNIZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3NIZWFkZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4udGFza3tcXHJcXG4gICAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBtYXJnaW46IDJyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IHJnYmEoNiwgMjQsIDQ0LCAwLjQpIDBweCAwcHggMHB4IDJweCwgcmdiYSg2LCAyNCwgNDQsIDAuNjUpIDBweCA0cHggNnB4IC0xcHgsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgMHB4IDFweCAwcHggaW5zZXQ7XFxyXFxuICAgIC8qIC1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21sZWZ0OiA1MHB4O1xcclxcbmJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7ICovXFxyXFxuZGlzcGxheTogZmxleDtcXHJcXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMXJlbTtcXHJcXG5ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuLnRhc2sgPiBkaXZ7XFxyXFxuZmxleC1ncm93OiAxO1xcclxcbi8qIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICovXFxyXFxufVxcclxcbi5idXR0b25ze1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcbi5lZGl0e1xcclxcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9lZGl0LnN2Zyk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbntcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmJ1dHRvbnM+aW5wdXR7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG4udG9kb0Zvcm1ze1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAyMiU7XFxyXFxuICAgIGxlZnQ6MzklO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyRGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDRyZW07XFxyXFxufVxcclxcblxcclxcbi5pbm5lckRpdj5sYWJlbHtcXHJcXG4gICAgd2lkdGg6IDIwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyRGl2PmlucHV0e1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWF7XFxyXFxuICAgIGZsZXgtZ3JvdzogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnN3aXRjaHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICAuY2hlY2tlZERpdntcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuICAuaW5uZXJEaXY+ZGl2e1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuZGlzcGxheWVkVGV4dHtcXHJcXG4gICAgd2lkdGg6IDgwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kaXNwbGF5ZWRUZXh0SGVhZGVye1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDRyZW07XFxyXFxuICB9XFxyXFxuXFxyXFxuLmluYWN0aXZlVGFza3tcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0PmlucHV0e1xcclxcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXHJcXG59XFxyXFxuLypcXHJcXG4gIC5jb250YWluZXIgaW5wdXQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiBcXHJcXG4gIC5jaGVja21hcmsge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICAuY29udGFpbmVyOmhvdmVyIGlucHV0IH4gLmNoZWNrbWFyayB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4gIC5jb250YWluZXIgaW5wdXQ6Y2hlY2tlZCB+IC5jaGVja21hcmsge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICAuY2hlY2ttYXJrOmFmdGVyIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gIH1cXHJcXG4gIFxcclxcblxcclxcbiAgLmNvbnRhaW5lciBpbnB1dDpjaGVja2VkIH4gLmNoZWNrbWFyazphZnRlciB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuXFxyXFxuICAuY29udGFpbmVyIC5jaGVja21hcms6YWZ0ZXIge1xcclxcbiAgICAgICB0b3A6IDlweDtcXHJcXG4gICAgICBsZWZ0OiA5cHg7XFxyXFxuICAgICAgd2lkdGg6IDhweDtcXHJcXG4gICAgICBoZWlnaHQ6IDhweDtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgYmFja2dyb3VuZDogd2hpdGU7XFxyXFxuICB9XFxyXFxuICAgKi9cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyB0b0RvTGlzdCB9IGZyb20gXCIuL3RvRG8uanNcIjtcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xyXG5pbXBvcnQgeyBob3ZlckVmZmVjdCxwcm9qZWN0c0Fycix0b3VjaEVmZmVjdH0gZnJvbSBcIi4vbG9naWMuanNcIjtcclxubGV0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbicpXHJcbmxldCBuZXdBcnIgPSBbXVxyXG5sZXQgbG9jYWxQcm9qZWN0c0FyciA9IFtdXHJcbmxldCBiYXNpY0xheW91dCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgdG9Eb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIHRvRG9IZWFkZXIudGV4dENvbnRlbnQ9XCJUby1Eby1MaXN0XCI7XHJcbiAgICBtYWluRGl2LmFwcGVuZENoaWxkKHRvRG9IZWFkZXIpXHJcbiAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJvamVjdHNEaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKVxyXG4gICAgbGV0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvRGl2JylcclxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNEaXYpXHJcbiAgICBsZXQgdGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGFza3NEaXYuY2xhc3NMaXN0LmFkZCgndGFza3MnKVxyXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZCh0YXNrc0RpdilcclxuICAgIG1haW5EaXYuYXBwZW5kQ2hpbGQoaW5mb0RpdilcclxuICAgIFxyXG4vLyAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdXR0b24nKVxyXG4vLyAgICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuLy8gICAgICAgICAgICAgICAgIGxldCBwcm9qZWN0ID0gbmV3IHByb2plY3RzKCdEZWZhdWx0IFRlbXBsYXRlJyk7XHJcbi8vICAgICAgICAgICAgICAgICAvLyBwcm9qZWN0LmNyZWF0ZU1haW5EaXYoKVxyXG4vLyAgICAgICAgIH0pO1xyXG4vLyAgICAgcHJvamVjdC5uZXdQcm9qZWN0KClcclxuXHJcbn0pKCk7XHJcblxyXG5sZXQgY3JlYXRlTWFpbkRpdiA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzJykgICAgICAgXHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0c0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuY2xhc3NMaXN0LmFkZCgncHJvamVjdHNIZWFkZXInKVxyXG5cclxuICAgICAgICBsZXQgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudD0nUHJvamVjdHMnXHJcblxyXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRCdXR0b24nKVxyXG5cclxuICAgICAgICBwcm9qZWN0c0hlYWRlci5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRpbmcpXHJcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxyXG4gICAgICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKHByb2plY3RzSGVhZGVyKVxyXG4gICAgICAgIC8vIGxldCBwcm9qZWN0RGl2ID0gdGhpcy5jcmVhdGVEaXYoKTtcclxuICAgICAgICAvLyBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0RGl2KVxyXG4gICAgICAgIC8vIC8vIHRoaXMuaG92ZXJFZmZlY3QocHJvamVjdERpdik7XHJcblxyXG4gICAgICAgIC8vICBsZXQgdG9EbyA9IG5ldyB0b0RvTGlzdDtcclxuICAgICAgICAvLyBsZXQgbmV3VGFza3NEb25lICA9IHByb2plY3REaXYucXVlcnlTZWxlY3RvcignLmFkZFRhc2tCdXR0b24nKVxyXG4gICAgICAgIC8vIG5ld1Rhc2tzRG9uZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygna3VuZGkgICcpXHJcbiAgICAgICAgLy8gdG9Eby5jcmVhdGVOZXdUYXNrKHByb2plY3REaXYpXHJcbiAgICAgICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG59KSgpO1xyXG5sZXQgdG9nZ2xlQ2xhc3NlcyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXHJcbiAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcclxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QudG9nZ2xlKCdzd2l0Y2gnKVxyXG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC50b2dnbGUoJ3N3aXRjaCcpXHJcbn0pXHJcblxyXG5sZXQgYWRkQ2xhc3NlcyA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0cycpXHJcbiAgICAgICAgbGV0IHRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcclxuICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdzd2l0Y2gnKVxyXG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3N3aXRjaCcpXHJcbn0pXHJcblxyXG5sZXQgYWRkUHJvamVjdHMgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgYWRkQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZEJ1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgcHJvamVjdHMoKTtcclxuICAgICAgICAgICAgICAgIHByb2plY3QubmV3UHJvamVjdCgpXHJcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChwcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgaG92ZXJFZmZlY3QoKTsgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbn0pKCk7XHJcblxyXG5sZXQgY3JlYXRlVGFza3NEaXYgPSAoZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzSGVhZGVyJylcclxuICBcclxuICAgICAgICBsZXQgdGFza3NIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHRhc2tzSGVhZGluZy50ZXh0Q29udGVudD0nVGFza3MnXHJcbiAgICAgICAgdGFza3NIZWFkZXIuYXBwZW5kQ2hpbGQodGFza3NIZWFkaW5nKVxyXG4gICAgICAgIGxldCB0YXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcycpXHJcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza3NIZWFkZXIpXHJcbiAgICB9KSgpO1xyXG5cclxuXHJcblxyXG5leHBvcnQge2Jhc2ljTGF5b3V0LHRvZ2dsZUNsYXNzZXMsYWRkQ2xhc3NlcyxjcmVhdGVNYWluRGl2LGFkZFByb2plY3RzLGNyZWF0ZVRhc2tzRGl2LG5ld0FyciB9O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gbGV0IGRlZmF1bHRQcm9qZWN0ID0gKGZ1bmN0aW9uIG5hbWUocGFyYW1zKSB7ICAgXHJcbi8vICAgICBjcmVhdGVIZWFkZXIoKVxyXG4vLyAgICAgY3JlYXRlUHJvamVjdCgpXHJcbi8vIH0pKCk7XHJcblxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlUHJvamVjdCgpIHtcclxuLy8gICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgICB0ZW1wbGF0ZS5jbGFzc0xpc3QuYWRkKCd0ZW1wbGF0ZXMnKVxyXG4vLyAgICAgbWFpbkRpdi5hcHBlbmRDaGlsZCh0ZW1wbGF0ZSlcclxuLy8gICAgIGNyZWF0ZURlZmF1bHRGb3JtKClcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlSW5uZXJIZWFkZXIoKXtcclxuLy8gICAgIGxldCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4vLyAgICAgZm9ybUhlYWRlci50ZXh0Q29udGVudCA9J0RlZmF1bHQgUHJvamVjdCdcclxuLy8gICAgIGxldCBpbm5lckhlYWRlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgICBpbm5lckhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckhlYWRlckRpdicpXHJcbi8vICAgICBpbm5lckhlYWRlckRpdi5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxyXG4vLyAgICAgaW5uZXJIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZHJvcERvd24pXHJcbi8vICAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChpbm5lckhlYWRlckRpdilcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlRGVmYXVsdEZvcm0oKVxyXG4vLyB7XHJcbi8vICAgICBsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuLy8gICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtcycpXHJcblxyXG5cclxuLy8gICAgIC8vIGxldCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4vLyAgICAgLy8gZm9ybUhlYWRlci50ZXh0Q29udGVudCA9J0RlZmF1bHQgUHJvamVjdCdcclxuXHJcbi8vICAgICBsZXQgZHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4vLyAgICAgZHJvcERvd24uY2xhc3NMaXN0LmFkZCgnZHJvcERvd24nKVxyXG5cclxuLy8gICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4vLyAgICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RpdGxlJylcclxuLy8gICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQ9J1RpdGxlJ1xyXG4vLyAgICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4vLyAgICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJylcclxuXHJcblxyXG4vLyAgICAgbGV0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbi8vICAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnZGVzY3JpcHRpb24nKVxyXG4vLyAgICAgZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudD0nRGVzY3JpcHRpb24nXHJcbi8vICAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbi8vICAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywnZGVzY3JpcHRpb24nKVxyXG5cclxuLy8gICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbi8vICAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlJylcclxuLy8gICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWVEYXRlJ1xyXG4vLyAgICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbi8vICAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCdkZXNjcmlwdGlvbicpXHJcblxyXG4vLyAgICAgbGV0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbi8vICAgICBwcmlvcml0eUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywncHJpb3JpdHknKVxyXG4vLyAgICAgcHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudD0nUHJpb3JpdHknXHJcbi8vICAgICBsZXQgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbi8vICAgICBwcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHknKVxyXG5cclxuLy8gICAgIGxldCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZW1wbGF0ZXMnKVxyXG5cclxuXHJcbi8vICAgICBsZXQgdGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgICAgdGl0bGVEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxyXG5cclxuLy8gICAgIGxldCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbi8vICAgICBkZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXHJcblxyXG4vLyAgICAgbGV0IGR1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgICAgZHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXHJcblxyXG4vLyAgICAgdGVtcGxhdGUuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pXHJcblxyXG4vLyAgICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuLy8gICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcclxuXHJcblxyXG4vLyAgICAgbGV0IG5vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuLy8gICAgIG5vdGVzRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcclxuXHJcbi8vICAgICBsZXQgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuLy8gICAgIG5vdGVzTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdub3RlcycpXHJcbi8vICAgICBub3Rlc0xhYmVsLnRleHRDb250ZW50PSdOb3Rlcyc7XHJcblxyXG4vLyAgICAgbGV0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4vLyAgICAgbm90ZXMuc2V0QXR0cmlidXRlKCdpZCcsJ25vdGVzJylcclxuXHJcbi8vICAgICAvLyBsZXQgaW5uZXJIZWFkZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4vLyAgICAgLy8gaW5uZXJIZWFkZXJEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJIZWFkZXJEaXYnKVxyXG4vLyAgICAgLy8gaW5uZXJIZWFkZXJEaXYuYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcilcclxuLy8gICAgIC8vIGlubmVySGVhZGVyRGl2LmFwcGVuZENoaWxkKGRyb3BEb3duKVxyXG4vLyAgICAgLy8gdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoaW5uZXJIZWFkZXJEaXYpXHJcblxyXG5cclxuXHJcblxyXG4vLyAgICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcclxuLy8gICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKVxyXG4vLyAgICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHRpdGxlRGl2KVxyXG5cclxuLy8gICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpXHJcbi8vICAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uRGl2KVxyXG5cclxuLy8gICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZUxhYmVsKVxyXG4vLyAgICAgZHVlRGF0ZURpdi5hcHBlbmRDaGlsZChkdWVEYXRlKVxyXG4vLyAgICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZURpdilcclxuLy8gICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpXHJcbi8vICAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eSlcclxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KVxyXG5cclxuLy8gICAgIG5vdGVzRGl2LmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpXHJcbi8vICAgICBub3Rlc0Rpdi5hcHBlbmRDaGlsZChub3RlcylcclxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKG5vdGVzRGl2KVxyXG5cclxuXHJcbi8vICAgICBsZXQgYnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuLy8gICAgIGJ1dHRvbkRpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXHJcbi8vICAgICBsZXQgbmV3VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuLy8gICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcclxuLy8gICAgIG5ld1Rhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ0FkZCBhIG5ldyB0YXNrJylcclxuLy8gICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4vLyAgICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdjaGVja2JveCcpXHJcbi8vICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZSgnaWQnLCdjaGVja2JveCcpXHJcbi8vICAgICBsZXQgY2hlY2tlZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4vLyAgICAgY2hlY2tlZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnY2hlY2tib3gnKVxyXG4vLyAgICAgY2hlY2tlZExhYmVsLnRleHRDb250ZW50PSdGaW5pc2hlZCdcclxuLy8gICAgIGxldCBjaGVja2VkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuLy8gICAgIGNoZWNrZWREaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZClcclxuLy8gICAgIGNoZWNrZWREaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZExhYmVsKVxyXG4vLyAgICAgYnV0dG9uRGl2LmFwcGVuZENoaWxkKG5ld1Rhc2tCdXR0b24pXHJcbi8vICAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQoY2hlY2tlZERpdilcclxuLy8gICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGJ1dHRvbkRpdilcclxuLy8gfVxyXG5cclxuXHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVIZWFkZXIoKVxyXG4vLyB7XHJcbi8vICAgICBsZXQgaGVhZGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuLy8gICAgIGhlYWRlckRpdi5jbGFzc0xpc3QuYWRkKCdoZWFkZXJEaXYnKVxyXG4vLyAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbi8vICAgICBsZXQgbmV3UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbi8vICAgICBuZXdQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbicpXHJcbi8vICAgICBoZWFkaW5nLnRleHRDb250ZW50PVwiVG8tRG8tTGlzdFwiXHJcbi8vICAgICBtYWluRGl2LmFwcGVuZENoaWxkKGhlYWRlckRpdilcclxuLy8gICAgIGhlYWRlckRpdi5hcHBlbmRDaGlsZChoZWFkaW5nKVxyXG4vLyAgICAgaGVhZGVyRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RCdXR0b24pXHJcblxyXG4vLyB9XHJcbi8vIGV4cG9ydCB7ZGVmYXVsdFByb2plY3R9IiwiaW1wb3J0IHsgbmV3QXJyIH0gZnJvbSBcIi4vZG9tXCI7XHJcblxyXG5cclxuXHJcblxyXG5sZXQgcHJvamVjdHNBcnIgPSBbXVxyXG5cclxubGV0IGhvdmVyRWZmZWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRCdXR0b24nKVxyXG4gICAgYWRkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGFza3NBZGQoKTtcclxuICAgIH0pXHJcbn07XHJcblxyXG5sZXQgdGFza3NBZGQgPSBmdW5jdGlvbiAoZGl2KSB7XHJcbiAgICBsZXQgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcclxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFzay5sZW5ndGg7IGorKykge1xyXG4gICAgICAgIHRhc2tbal0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IHtob3ZlckVmZmVjdCxwcm9qZWN0c0Fycn1cclxuXHJcblxyXG4vLyBbe1wibmFtZVwiOlwiYVwiLFwiYXJyXCI6W3tcInRpdGxlXCI6XCJxXCIsXCJkZXNjcmlwdGlvblwiOlwicVwiLFwiZHVlRGF0ZVwiOlwiMjAyNC0wNy0wMVwiLFwicHJpb3JpdHlcIjoxLFwiY2hlY2tlZFwiOmZhbHNlLFwidGFza3NEaXZcIjp7fX1dLFwiZGl2QXJyXCI6W3t9XX0se1wiYXJyXCI6W10sXCJkaXZBcnJcIjpbXX1dXCIiLCJpbXBvcnQgeyB0b0RvTGlzdCxlZGl0Q2xpY2sgfSBmcm9tIFwiLi90b0RvXCI7XHJcbmltcG9ydCB7IGhvdmVyRWZmZWN0LHByb2plY3RzQXJyIH0gZnJvbSBcIi4vbG9naWMuanNcIjtcclxuXHJcbmxldCBsb2NhbFByb2plY3RzQXJyID0gW11cclxubGV0IHVzZXJEYXRhXHJcbmxldCBwcm9qZWN0cyA9IGNsYXNze1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWVcclxuICAgICAgICB0aGlzLmFyciA9IFtdXHJcbiAgICAgICAgdGhpcy5kaXZBcnIgPSBbXVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1haW5EaXYoKXtcclxuICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSAgICAgICBcclxuICAgICAgICBsZXQgcHJvamVjdHNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzSGVhZGVyJylcclxuICAgICAgICBsZXQgcHJvamVjdHNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxyXG4gICAgICAgIHByb2plY3RzSGVhZGluZy50ZXh0Q29udGVudD0nUHJvamVjdHMnXHJcbiAgICAgICAgbGV0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICAgICAgYWRkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FkZEJ1dHRvbicpXHJcbiAgICAgICAgcHJvamVjdHNIZWFkZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkaW5nKVxyXG4gICAgICAgIHByb2plY3RzSGVhZGVyLmFwcGVuZENoaWxkKGFkZEJ1dHRvbilcclxuICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0hlYWRlcilcclxuICAgICAgICBsZXQgdG9EbyA9IG5ldyB0b0RvTGlzdDtcclxuICAgICAgICB0b0RvLmNyZWF0ZVRhc2tzRGl2KClcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb0xvY2FsKCl7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsUHJvamVjdHNBcnIucHVzaCh0aGlzKVxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxQcm9qZWN0c0FycikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcclxuICAgIH1cclxuXHJcbiAgICBhZGR0b011bHRpcGxlKClcclxuICAgIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKVxyXG4gICAgICAgIGxvY2FsUHJvamVjdHNBcnIucHVzaCh0aGlzKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiUHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobG9jYWxQcm9qZWN0c0FycikpO1xyXG4gICAgICAgIHVzZXJEYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnUHJvamVjdHMnKSlcclxuICAgIH1cclxuICAgIG5ld1Byb2plY3QoKXtcclxuICAgICAgICAgICAgbGV0ICBqID0gMFxyXG4gICAgICAgICAgICBsZXQgZGl2ID0gdGhpcy5jcmVhdGVEaXYoKTtcclxuICAgICAgICAgICAgcHJvamVjdHNBcnIucHVzaChkaXYpXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKVxyXG4gICAgICAgICAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZVByb2plY3RzKGRpdik7XHJcbiAgICAgICAgICAgIGxldCBwcm9qZWN0c0FycjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpXHJcbiAgICAgICAgICAgIGlmIChwcm9qZWN0c0FycjIubGVuZ3RoPT0xKSBcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlucHV0ID0gcHJvamVjdHNBcnIyWzBdLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JykgICAgIFxyXG4gICAgICAgICAgICAgICAgcHJvamVjdHNBcnIyWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmFtZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICBpZiAoaj09MCkgXHJcbiAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRUb0xvY2FsKClcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdG9EbyA9IG5ldyB0b0RvTGlzdDtcclxuICAgICAgICAgICAgICAgICAgICB0b0RvLmNyZWF0ZU5ld1Rhc2sodGhpcylcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGorKztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZihwcm9qZWN0c0FycjIubGVuZ3RoPjEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnIyLmxlbmd0aDsgaSsrKSBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnB1dCA9IHByb2plY3RzQXJyMltpXS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNBcnIyW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKCk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2FuZGknKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hbWUgPSBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoY291bnQ9PTApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGR0b011bHRpcGxlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCsrXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRvRG8gPSBuZXcgdG9Eb0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9Eby5jcmVhdGVOZXdUYXNrKHRoaXMsailcclxuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaisrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudG91Y2goZGl2KVxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICB0b3VjaChkaXYpe1xyXG4gICAgICAgIGRpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgICAgICBsZXQgdGFza3MgPSB0aGlzLmRpdkFyclxyXG4gICAgICAgICAgICBpZiAodGFza3MubGVuZ3RoPT0wKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBsZXQgbmV3VGFza3MgPSAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxyXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5ld1Rhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza3NbaV0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcclxuICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU3dpdGNoKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0YXNrc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCdzd2l0Y2gnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3dpdGNoKCl7XHJcbiAgICAgICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgbGV0IG5ld1Rhc2tzID0gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJylcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV3VGFza3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV3VGFza3NbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VGFza3NbaV0uY2xhc3NMaXN0LmFkZCgnc3dpdGNoJylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlUHJvamVjdHMoZGl2KXtcclxuICAgICAgICBsZXQgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMnKSAgICAgICBcclxuICAgICAgICBsZXQgZGVsZXRlUHJvamVjdHMgPSBkaXYucXVlcnlTZWxlY3RvcignLmRlbGV0ZVByb2plY3RzJylcclxuICAgICAgICBkZWxldGVQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+e1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5jbGVhcigncHJvamVjdCcpXHJcbiAgICAgICAgcHJvamVjdHNEaXYucmVtb3ZlQ2hpbGQoZGl2KVxyXG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzJylcclxuICAgICAgICBsZXQgdGFza3MgPSB0aGlzLmRpdkFyclxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0YXNrLnJlbW92ZUNoaWxkKHRhc2tzW2ldKVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURpdiA9IChuZXdBcnIpPT4ge1xyXG4gICAgICAgIGxldCBwcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpXHJcbiAgICAgICAgcHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0JylcclxuICAgICAgICBsZXQgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgICAgICBcclxuICAgICAgICAvLyBuYW1lLnRleHRDb250ZW50PXRoaXMubmFtZTtcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlUHJvamVjdHMnKVxyXG4gICAgICAgIGxldCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxyXG4gICAgICAgIGFkZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGRUYXNrQnV0dG9uJylcclxuICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywnc3VibWl0JylcclxuICAgICAgICBhZGRCdXR0b24uc2V0QXR0cmlidXRlKCd2YWx1ZScsJ3N1Ym1pdCcpXHJcbiAgICAgICAgcHJvamVjdERpdi5hcHBlbmRDaGlsZChuYW1lKVxyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgIHByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKVxyXG4gICAgICAgIHJldHVybiBwcm9qZWN0RGl2XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0e3Byb2plY3RzLHVzZXJEYXRhfSIsImltcG9ydCB7IHRvZ2dsZUNsYXNzZXMgfSBmcm9tICcuL2RvbSc7XHJcbmltcG9ydCB7dG9Eb0xpc3R9IGZyb20gJy4vdG9EbydcclxuaW1wb3J0IHsgdXNlckRhdGEgfSBmcm9tICcuL3Byb2plY3RzJztcclxuXHJcblxyXG5sZXQgY3JlYXRlRm9ybSA9IGZ1bmN0aW9uKCl7XHJcbiAgICBsZXQgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJylcclxuICAgIHRvZG9Gb3JtLmNsYXNzTGlzdC5hZGQoJ3RvZG9Gb3JtcycpXHJcbiAgICB0b2RvRm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywnZm9ybXMnKVxyXG4gICAgbGV0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXHJcbiAgICBmb3JtSGVhZGVyLnRleHRDb250ZW50ID0nVG8tRG8tTGlzdCdcclxuICAgIGxldCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3RpdGxlJylcclxuICAgIHRpdGxlTGFiZWwudGV4dENvbnRlbnQ9J1RpdGxlJ1xyXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgdGl0bGUuc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJylcclxuICAgIHRpdGxlLnJlcXVpcmVkID0gdHJ1ZVxyXG5cclxuICAgIGxldCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkdWVEYXRlJylcclxuICAgIGR1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9ICdEdWVEYXRlJ1xyXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBkdWVEYXRlLnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKVxyXG4gICAgZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywnZHVlRGF0ZScpXHJcbiAgICBkdWVEYXRlLnJlcXVpcmVkPXRydWU7XHJcblxyXG5cclxuICAgIGxldCBwcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ3ByaW9yaXR5JylcclxuICAgIHByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQ9J1ByaW9yaXR5J1xyXG5cclxuICAgIGxldCBwcmlvcml0eUxvd0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIHByaW9yaXR5TG93RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcbiAgICBsZXQgcHJpb3JpdHlNaWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXHJcbiAgICBsZXQgcHJpb3JpdHlIaWdoRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxyXG5cclxuICAgIHByaW9yaXR5TG93RGl2LmlubmVySFRNTD0nMSdcclxuXHJcbiAgICBsZXQgcHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICBwcmlvcml0eUxvdy5zZXRBdHRyaWJ1dGUoJ2lkJywncHJpb3JpdHlMb3cnKVxyXG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKVxyXG4gICAgcHJpb3JpdHlMb3cuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKVxyXG4gICAgcHJpb3JpdHlNaWREaXYudGV4dENvbnRlbnQ9JzInXHJcbiAgICBwcmlvcml0eUhpZ2hEaXYudGV4dENvbnRlbnQ9JzMnXHJcbiAgICBwcmlvcml0eU1pZERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKVxyXG4gICAgcHJpb3JpdHlIaWdoRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lcicpXHJcblxyXG5cclxuICAgIGxldCBwcmlvcml0eU1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIHByaW9yaXR5TWlkLnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eU1pZCcpXHJcbiAgICBwcmlvcml0eU1pZC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpXHJcbiAgICBwcmlvcml0eU1pZC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpXHJcblxyXG5cclxuXHJcbiAgICBsZXQgcHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgnaWQnLCdwcmlvcml0eUhpZ2gnKVxyXG4gICAgcHJpb3JpdHlIaWdoLnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJylcclxuICAgIHByaW9yaXR5SGlnaC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpXHJcblxyXG5cclxuICAgIGxldCBpbmZvRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluZm9EaXYnKVxyXG5cclxuICAgIGxldCB0aXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aXRsZURpdi5jbGFzc0xpc3QuYWRkKCdpbm5lckRpdicpXHJcblxyXG5cclxuICAgIGxldCBkdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGR1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZCgnaW5uZXJEaXYnKVxyXG5cclxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pXHJcbiAgICBwcmlvcml0eUxvd0Rpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxvdylcclxuXHJcbiAgICBcclxuICAgIHByaW9yaXR5TWlkRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TWlkKVxyXG5cclxuICAgIFxyXG4gICAgcHJpb3JpdHlIaWdoRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5SGlnaClcclxuXHJcblxyXG4gICAgbGV0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcclxuXHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcclxuXHJcbiAgICBsZXQgZGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGRlc2NyaXB0aW9uTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdkZXNjcmlwdGlvbicpXHJcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50PSdEZXNjcmlwdGlvbic7XHJcblxyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKVxyXG4gICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKCdpZCcsJ2Rlc2NyaXB0aW9uJylcclxuXHJcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKVxyXG4gICAgdGl0bGVEaXYuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbClcclxuICAgIHRpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKVxyXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQodGl0bGVEaXYpXHJcbiAgICBkdWVEYXRlRGl2LmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbClcclxuICAgIGR1ZURhdGVEaXYuYXBwZW5kQ2hpbGQoZHVlRGF0ZSlcclxuICAgIHRvZG9Gb3JtLmFwcGVuZENoaWxkKGR1ZURhdGVEaXYpXHJcblxyXG4gICBcclxuXHJcbiAgXHJcbiAgICB0b2RvRm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eURpdilcclxuXHJcblxyXG4gICAgbGV0IGlubmVyUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbClcclxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGlubmVyUHJpb3JpdHlEaXYpXHJcbiAgICBpbm5lclByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TG93RGl2KVxyXG4gICAgaW5uZXJQcmlvcml0eURpdi5hcHBlbmRDaGlsZChwcmlvcml0eU1pZERpdilcclxuICAgIGlubmVyUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQocHJpb3JpdHlIaWdoRGl2KVxyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25MYWJlbClcclxuICAgIGRlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxyXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25EaXYpXHJcblxyXG5cclxuICAgIGxldCBidXR0b25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgYnV0dG9uRGl2LmNsYXNzTGlzdC5hZGQoJ2lubmVyRGl2JylcclxuICAgIGxldCBuZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdzdWJtaXQnKVxyXG4gICAgbmV3VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywnQWRkJylcclxuXHJcbiAgICBsZXQgY2hlY2tlZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcclxuICAgIGNoZWNrZWQuc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKVxyXG4gICAgY2hlY2tlZC5zZXRBdHRyaWJ1dGUoJ2lkJywnY2hlY2tib3gnKVxyXG4gICAgY2hlY2tlZC5jbGFzc0xpc3QuYWRkKCdjaGVja2VkRGl2SW5uZXInKVxyXG4gICAgbGV0IGNoZWNrZWRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcclxuICAgIGNoZWNrZWRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2NoZWNrYm94JylcclxuICAgIGNoZWNrZWRMYWJlbC50ZXh0Q29udGVudD0nRmluaXNoZWQnXHJcbiAgICBsZXQgY2hlY2tlZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBjaGVja2VkRGl2LmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWREaXYnKVxyXG4gICAgY2hlY2tlZERpdi5hcHBlbmRDaGlsZChjaGVja2VkKVxyXG4gICAgY2hlY2tlZERpdi5hcHBlbmRDaGlsZChjaGVja2VkTGFiZWwpXHJcbiAgICBidXR0b25EaXYuYXBwZW5kQ2hpbGQobmV3VGFza0J1dHRvbilcclxuICAgIGJ1dHRvbkRpdi5hcHBlbmRDaGlsZChjaGVja2VkRGl2KVxyXG4gICAgdG9kb0Zvcm0uYXBwZW5kQ2hpbGQoYnV0dG9uRGl2KVxyXG59O1xyXG5cclxubGV0IGlucHV0RGV0YWlscyA9IGZ1bmN0aW9uKHByb2plY3REaXYsail7XHJcbiAgICBcclxuICAgIGxldCBmb3JtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtcycpXHJcbiAgICBsZXQgdGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZScpXHJcbiAgICBsZXQgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2R1ZURhdGUnKVxyXG5cclxuXHJcbiAgICBsZXQgcHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eScpXHJcblxyXG5cclxuICAgIGxldCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJylcclxuICAgIGxldCBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tib3gnKVxyXG5cclxuICAgIGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsKCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZygna3VuZGknKVxyXG4gICAgICAgIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUxvdycpLmNoZWNrZWQ9PT10cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dCA9IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaW9yaXR5TWlkJykuY2hlY2tlZD09PXRydWUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5SW5wdXQgPSAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUhpZ2gnKS5jaGVja2VkPT09dHJ1ZSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcHJpb3JpdHlJbnB1dCA9IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGxldCBuZXdUYXNrID0gbmV3IHRvRG9MaXN0KHRpdGxlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxkdWVEYXRlSW5wdXQudmFsdWUsIHByaW9yaXR5SW5wdXQsY2hlY2tlZElucHV0LmNoZWNrZWQpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdXNlckRhdGFbal0uYXJyLnB1c2gobmV3VGFzaylcclxuXHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHVzZXJEYXRhKVxyXG4gICAgICAgIHByb2plY3REaXYuYXJyLnB1c2gobmV3VGFzaylcclxuICAgICAgICBcclxuICAgICAgICAvLyAodXNlckRhdGFbMF0uYXJyKS5wdXNoKG5ld1Rhc2spXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGZvcm1zLnJlbW92ZSgpXHJcbiAgICAgICAgdG9nZ2xlQ2xhc3NlcygpO1xyXG4gICAgICAgIGVudGVyRGV0YWlscyhuZXdUYXNrLHByb2plY3REaXYpO1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZW50ZXJEZXRhaWxzKG5ld1Rhc2sscHJvamVjdERpdil7XHJcbiAgXHJcbiAgICBsZXQgbmV3RGl2ID0gbmV3VGFzay5jcmVhdGVEaXYobmV3VGFzaylcclxuICAgIHByb2plY3REaXYuZGl2QXJyLnB1c2gobmV3RGl2KVxyXG4gICAgbmV3VGFzay50YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYpXHJcbiAgICBkZWxldGVUYXNrcyhuZXdEaXYsbmV3VGFzaylcclxuICAgIG5ld1Rhc2suZWRpdENsaWNrKG5ld0RpdixuZXdUYXNrKVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVUYXNrcyhuZXdEaXYsbmV3VGFzayl7XHJcbiAgICBsZXQgZGVsZXRlVGFza3MgPSBuZXdEaXYucXVlcnlTZWxlY3RvcignLmRlbGV0ZVRhc2tzJylcclxuICAgIGRlbGV0ZVRhc2tzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbiAoKSB7XHJcbiAgICAgICBuZXdUYXNrLnRhc2tzRGl2LnJlbW92ZUNoaWxkKG5ld0RpdilcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gZW50ZXJFZGl0RGV0YWlscyhkaXYsbmV3VGFzayl7XHJcbiAgICBsZXQgbmV3RGl2ID0gbmV3VGFzay5jcmVhdGVEaXYobmV3VGFzaylcclxuICAgIG5ld1Rhc2sudGFza3NEaXYucmVtb3ZlQ2hpbGQoZGl2KVxyXG4gICAgbmV3VGFzay50YXNrc0Rpdi5hcHBlbmRDaGlsZChuZXdEaXYpXHJcbiAgICBcclxuICAgIG5ld1Rhc2suZWRpdENsaWNrKG5ld0RpdixuZXdUYXNrKVxyXG59XHJcblxyXG5cclxubGV0IGVkaXRGb3JtID0gZnVuY3Rpb24gKGRpdix0YXNrKSB7XHJcbiAgICBjcmVhdGVGb3JtKCk7XHJcbiAgICBsZXQgZm9ybXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybXMnKVxyXG4gICAgbGV0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKVxyXG4gICAgbGV0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkdWVEYXRlJylcclxuICAgIGxldCBwcmlvcml0eUxvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUxvdycpXHJcbiAgICBsZXQgcHJpb3JpdHlNaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpb3JpdHlNaWQnKVxyXG4gICAgbGV0IHByaW9yaXR5SGlnaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmlvcml0eUhpZ2gnKVxyXG4gICAgbGV0IHByaW9yaXR5O1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKVxyXG4gICAgbGV0IGNoZWNrZWRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2VkRGl2SW5uZXInKVxyXG4gICAgdGl0bGVJbnB1dC5kZWZhdWx0VmFsdWUgPSB0YXNrLnRpdGxlO1xyXG4gICAgZHVlRGF0ZUlucHV0LmRlZmF1bHRWYWx1ZSA9IHRhc2suZHVlRGF0ZTtcclxuICAgIGlmICh0YXNrLnByaW9yaXR5ID09PSAxKVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHByaW9yaXR5TG93LmNoZWNrZWQgPSB0cnVlXHJcbiAgICB9XHJcbiAgICBlbHNlIGlmICh0YXNrLnByaW9yaXR5ID09PSAyKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByaW9yaXR5TWlkLmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgZWxzZSBpZiAodGFzay5wcmlvcml0eSA9PT0gMylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHByaW9yaXR5SGlnaC5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIGRlc2NyaXB0aW9uSW5wdXQuZGVmYXVsdFZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcclxuICAgIGlmKHRhc2suY2hlY2tlZCA9PSB0cnVlKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2hlY2tlZElucHV0LmNoZWNrZWQgPSB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm1zLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBpZiAocHJpb3JpdHlMb3cuY2hlY2tlZCA9PSB0cnVlKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eSA9MSBcclxuICAgICAgICAgICAgfSAgICBcclxuICAgICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHlNaWQuY2hlY2tlZCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgICAgIHByaW9yaXR5ID0yIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihwcmlvcml0eUhpZ2guY2hlY2tlZCA9PSB0cnVlKXtcclxuICAgICAgICAgICAgcHJpb3JpdHkgPSAzXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBlZGl0ZWRUYXNrID0gbmV3IHRvRG9MaXN0KHRpdGxlSW5wdXQudmFsdWUsZGVzY3JpcHRpb25JbnB1dC52YWx1ZSxkdWVEYXRlSW5wdXQudmFsdWUscHJpb3JpdHksY2hlY2tlZElucHV0LmNoZWNrZWQpXHJcbiAgICAgICAgZm9ybXMucmVtb3ZlKClcclxuICAgICAgICB0b2dnbGVDbGFzc2VzKCk7XHJcbiAgICAgICAgZW50ZXJFZGl0RGV0YWlscyhkaXYsZWRpdGVkVGFzayk7XHJcbiAgICB9KSAgIFxyXG59XHJcblxyXG5leHBvcnR7Y3JlYXRlRm9ybSxpbnB1dERldGFpbHMsZWRpdEZvcm19IiwiaW1wb3J0IHtjcmVhdGVGb3JtLGlucHV0RGV0YWlscyxlZGl0Rm9ybX0gZnJvbSAnLi90YXNrJ1xyXG5pbXBvcnQge3RvZ2dsZUNsYXNzZXN9IGZyb20gJy4vZG9tJ1xyXG5sZXQgdG9Eb0xpc3QgPSBjbGFzcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSxkZXNjcmlwdGlvbixkdWVEYXRlLHByaW9yaXR5LGNoZWNrZWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xyXG4gICAgICAgIHRoaXMudGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MnKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVRhc2tzRGl2KCl7XHJcbiAgICAgICAgbGV0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICB0YXNrc0hlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrc0hlYWRlcicpXHJcbiAgICAgICAgbGV0IHRhc2tzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcclxuICAgICAgICB0YXNrc0hlYWRpbmcudGV4dENvbnRlbnQ9J1Rhc2tzJ1xyXG4gICAgICAgIHRhc2tzSGVhZGVyLmFwcGVuZENoaWxkKHRhc2tzSGVhZGluZylcclxuICAgICAgICB0aGlzLnRhc2tzRGl2LmFwcGVuZENoaWxkKHRhc2tzSGVhZGVyKVxyXG4gICAgfVxyXG5cclxuY3JlYXRlRGl2KG5ld1Rhc2s9e30pIHtcclxuXHJcbiAgICAgICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IGRpc3BsYXllZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpc3BsYXllZFRleHQuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkVGV4dCcpXHJcbiAgICAgICAgbGV0IGRpc3BsYXllZFRleHRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIGRpc3BsYXllZFRleHRIZWFkZXIuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkVGV4dEhlYWRlcicpXHJcbiAgICAgICAgbGV0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQ9bmV3VGFzay50aXRsZVxyXG4gICAgICAgIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gbmV3VGFzay5kdWVEYXRlXHJcbiAgICAgICAgbGV0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBwcmlvcml0eS50ZXh0Q29udGVudD1uZXdUYXNrLnByaW9yaXR5XHJcbiAgICAgICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknKVxyXG4gICAgICAgIGxldCBjaGVja2VkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxyXG4gICAgICAgIGNoZWNrZWQuc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKVxyXG4gICAgICAgIGNoZWNrZWQuc2V0QXR0cmlidXRlKCdpZCcsJ2NoZWNrYm94JylcclxuICAgICAgICBpZihuZXdUYXNrLmNoZWNrZWQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNoZWNrZWQuY2hlY2tlZCA9IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGRpc3BsYXllZFRleHRIZWFkZXIuYXBwZW5kQ2hpbGQobmFtZSlcclxuICAgICAgICBkaXNwbGF5ZWRUZXh0SGVhZGVyLmFwcGVuZENoaWxkKGR1ZURhdGUpXHJcbiAgICAgICAgZGlzcGxheWVkVGV4dEhlYWRlci5hcHBlbmRDaGlsZChwcmlvcml0eSlcclxuXHJcbiAgICAgICAgZGlzcGxheWVkVGV4dC5hcHBlbmRDaGlsZChkaXNwbGF5ZWRUZXh0SGVhZGVyKVxyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheWVkVGV4dClcclxuICAgICAgICBsZXQgYnV0dG9ucyA9IHRoaXMuY3JlYXRlQnV0dG9ucygpXHJcbiAgICAgICAgYnV0dG9ucy5hcHBlbmRDaGlsZChjaGVja2VkKVxyXG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoYnV0dG9ucylcclxuICAgICAgICByZXR1cm4gdGFza0RpdlxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJ1dHRvbnMoKXtcclxuICAgICAgICBsZXQgYnV0dG9uc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgYnV0dG9uc0Rpdi5jbGFzc0xpc3QuYWRkKCdidXR0b25zJylcclxuICAgICAgICBsZXQgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBkZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlVGFza3MnKVxyXG4gICAgICAgIGxldCBlZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgICAgICBlZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxyXG4gICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKVxyXG4gICAgICAgIGJ1dHRvbnNEaXYuYXBwZW5kQ2hpbGQoZWRpdEJ1dHRvbilcclxuICAgICAgICByZXR1cm4gYnV0dG9uc0RpdlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlZGl0Q2xpY2soZGl2LHRhc2spIHsgICAgIFxyXG4gICAgICAgIGxldCBlZGl0Q2hlY2tCb3ggPSBkaXYucXVlcnlTZWxlY3RvcignI2NoZWNrYm94JykgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBwcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmlvcml0eScpICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGlja3MgdGhlIEVkaXQgYnV0dG9uIGluIGVhY2ggVGFza3NcclxuICAgICAgICBsZXQgZWRpdEJ1dHRvbiA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuZWRpdCcpXHJcbiAgICAgICAgZWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAgICAgaWYoZWRpdENoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgdGFzay5jaGVja2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB9ICBcclxuXHJcbiAgICAgICAgICAgIGlmIChwcmlvcml0eS50ZXh0Q29udGVudCA9PSAxKVxyXG4gICAgICAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gMVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocHJpb3JpdHkudGV4dENvbnRlbnQgPT0gMilcclxuICAgICAgICAgICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLnByaW9yaXR5ID0gMlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5LnRleHRDb250ZW50PT0gMylcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2sucHJpb3JpdHkgPSAzXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2dnbGVDbGFzc2VzKCk7XHJcbiAgICAgICAgICAgIGVkaXRGb3JtKGRpdix0YXNrKTsgICAgICAgXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSlcclxuICAgIH07XHJcblxyXG4gICAgY3JlYXRlTmV3VGFzayhwcm9qZWN0RGl2LGo9MCl7XHJcblxyXG4gICAgICAgICAgICBjcmVhdGVGb3JtKCk7XHJcbiAgICAgICAgICAgIHRvZ2dsZUNsYXNzZXMoKTtcclxuICAgICAgICAgICAgaW5wdXREZXRhaWxzKHByb2plY3REaXYsaik7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsaWNrcyB0aGUgQWRkIGJ1dHRvbiBmb3IgVGFza3NcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCB7dG9Eb0xpc3R9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIlxyXG5pbXBvcnQgeyBiYXNpY0xheW91dCxjcmVhdGVNYWluRGl2LGFkZFByb2plY3RzLHRvdWNoQW5pbWF0aW9uIH0gZnJvbSBcIi4vZG9tLmpzXCI7XHJcbmltcG9ydCB7IGhvdmVyRWZmZWN0LHRvdWNoRWZmZWN0fSBmcm9tIFwiLi9sb2dpYy5qc1wiO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5pbXBvcnQge2NyZWF0ZVRhc2tzRGl2fSBmcm9tICcuL3Rhc2suanMnXHJcblxyXG5iYXNpY0xheW91dDtcclxuY3JlYXRlTWFpbkRpdiA7XHJcbmFkZFByb2plY3RzO1xyXG5jcmVhdGVUYXNrc0RpdjtcclxuXHJcbi8vIHRvdWNoQW5pbWF0aW9uKCk7XHJcbi8vIGhvdmVyRWZmZWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9