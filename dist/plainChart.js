var plainChart;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/barChart/barChart.js":
/*!**********************************!*\
  !*** ./src/barChart/barChart.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BarChart)
/* harmony export */ });
/* harmony import */ var _services_getColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getColor.js */ "./src/services/getColor.js");
/* harmony import */ var _barChart_createBarChartSettings_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../barChart/createBarChartSettings.js */ "./src/barChart/createBarChartSettings.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var BarChart = function BarChart(values, labels) {
  var _this = this;

  var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _classCallCheck(this, BarChart);

  this.values = values;
  this.labels = labels;
  this.colors = settings.colors;
  this.wrapper = document.querySelector('.chart-wrapper'); //====COLORS===================================

  var colors = this.colors;

  var updateColors = function updateColors() {
    _this.colors.innerHTML = '';

    for (var i = 0; i < _this.values.length; i++) {
      var newColor = (0,_services_getColor_js__WEBPACK_IMPORTED_MODULE_0__.default)(_this.bright);
      _this.colors.innerHTML += "".concat(newColor, ";");
    }
  }; //=============================================
  //=============================================


  var numberOfSerifs = 10;
  var fontColor = 'black'; //=============================================
  //=============================================

  var _settings$CurrentWidt = settings.CurrentWidth,
      CurrentWidth = _settings$CurrentWidt === void 0 ? 500 : _settings$CurrentWidt,
      _settings$CurrentHeig = settings.CurrentHeight,
      CurrentHeight = _settings$CurrentHeig === void 0 ? 300 : _settings$CurrentHeig,
      _settings$CurrentBrig = settings.CurrentBright,
      CurrentBright = _settings$CurrentBrig === void 0 ? 1.5 : _settings$CurrentBrig,
      _settings$CurrentColu = settings.CurrentColumnWidth,
      CurrentColumnWidth = _settings$CurrentColu === void 0 ? 20 : _settings$CurrentColu,
      _settings$CurrentGap = settings.CurrentGap,
      CurrentGap = _settings$CurrentGap === void 0 ? 0 : _settings$CurrentGap,
      _settings$CurrentFont = settings.CurrentFontSize,
      CurrentFontSize = _settings$CurrentFont === void 0 ? 14 : _settings$CurrentFont,
      _settings$CurrentScal = settings.CurrentScale,
      CurrentScale = _settings$CurrentScal === void 0 ? 1 : _settings$CurrentScal;

  var _createBarChartSettin = (0,_barChart_createBarChartSettings_js__WEBPACK_IMPORTED_MODULE_1__.default)(CurrentWidth, CurrentHeight, CurrentBright, CurrentColumnWidth, CurrentGap, CurrentFontSize, CurrentScale),
      widthInput = _createBarChartSettin.widthInput,
      heightInput = _createBarChartSettin.heightInput,
      brightInput = _createBarChartSettin.brightInput,
      columnWidthInput = _createBarChartSettin.columnWidthInput,
      gapInput = _createBarChartSettin.gapInput,
      fontSizeInput = _createBarChartSettin.fontSizeInput,
      scaleInput = _createBarChartSettin.scaleInput,
      editBtn = _createBarChartSettin.editBtn; //=======================================================


  var createNewChart = function createNewChart() {
    _this.width = +widthInput.value;
    _this.height = +heightInput.value;
    _this.bright = +brightInput.value;
    _this.columnWidth = +columnWidthInput.value;
    _this.gap = +gapInput.value;
    _this.fontSize = +fontSizeInput.value;
    _this.fontColor = +fontColor;
    _this.labelHeight = 2 * _this.fontSize;
    _this.valueWidth = 80;
    _this.scale = +scaleInput.value;
    _this.numberOfSerifs = numberOfSerifs;
    _this.ratio = _this.height / Math.max.apply(Math, _toConsumableArray(_this.values));

    _this.canvas = function () {
      var canvas = document.createElement('canvas');
      canvas.classList.add('chart');
      canvas.width = _this.width;
      canvas.height = _this.height;
      canvas.textContent = 'trial canvas';

      _this.wrapper.append(canvas);

      return canvas;
    }();

    var ctx = _this.canvas.getContext('2d');

    _this.values.forEach(function (val, i, values) {
      var ratioValue = val * _this.ratio * _this.scale;
      var x = _this.gap + i * (_this.columnWidth + _this.gap);
      var y = _this.height - _this.labelHeight - ratioValue;

      if (!val.indexOf) {
        x = _this.valueWidth + i * (_this.columnWidth + _this.gap);
      } //======GET COLORS=================================


      ctx.fillStyle = "rgb(".concat(_this.colors.innerHTML.split(';')[i], ")"); //=================================================

      ctx.fillRect(x, y, _this.columnWidth, ratioValue);

      if (_this.fontColor !== 'inherit') {
        ctx.fillStyle = _this.fontColor;
      }

      ctx.font = "".concat(_this.fontSize, "px serif");
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(_this.labels[i], x + _this.columnWidth / 2, _this.height - _this.labelHeight / 2, _this.columnWidth);
    });

    ctx.beginPath();
    ctx.strokeStyle = 'black';
    ctx.moveTo(_this.width, _this.height - _this.labelHeight);
    ctx.lineTo(_this.valueWidth, _this.height - _this.labelHeight);
    ctx.lineTo(_this.valueWidth, 0);
    ctx.stroke();

    for (var i = 0; i < _this.numberOfSerifs; i++) {
      var workHeight = _this.height - _this.labelHeight;
      var totalScale = _this.ratio * _this.scale;
      var heightOfCurrentSerif = i * (workHeight / _this.numberOfSerifs);
      var value = (heightOfCurrentSerif / totalScale).toFixed(1);
      var YOfSerif = workHeight - heightOfCurrentSerif;
      ctx.beginPath();
      ctx.strokeStyle = 'black';
      ctx.moveTo(_this.valueWidth, YOfSerif);
      ctx.lineTo(_this.valueWidth - 10, YOfSerif);
      ctx.stroke();
      ctx.textAlign = 'center';
      ctx.fillText(value, 30, YOfSerif);
    }
  }; //=======================================================


  var updateChart = function updateChart() {
    _this.wrapper.innerHTML = '';
    createNewChart();
  };

  widthInput.addEventListener('input', updateChart);
  heightInput.addEventListener('input', updateChart);
  brightInput.addEventListener('input', function () {
    updateColors();
    updateChart();
  });
  columnWidthInput.addEventListener('input', updateChart);
  gapInput.addEventListener('input', updateChart);
  fontSizeInput.addEventListener('input', updateChart);
  scaleInput.addEventListener('input', updateChart);
  updateChart(); //========================================================

  return {
    widthInput: widthInput,
    heightInput: heightInput,
    brightInput: brightInput,
    columnWidthInput: columnWidthInput,
    gapInput: gapInput,
    fontSizeInput: fontSizeInput,
    scaleInput: scaleInput,
    colors: colors,
    editBtn: editBtn
  };
};



/***/ }),

/***/ "./src/barChart/createBarChartSettings.js":
/*!************************************************!*\
  !*** ./src/barChart/createBarChartSettings.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBarChartSettings)
/* harmony export */ });
/* harmony import */ var _services_animateClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/animateClick.js */ "./src/services/animateClick.js");

function createBarChartSettings(width, height, bright, columnWidth, gap, fontSize, scale) {
  var chartSettings = document.querySelector('.chart-settings');
  chartSettings.innerHTML = "\n                            <div class=\"plainChart__options__wrapper\">\n                                <div> \n                                    width\n                                    <input \n                                        type=\"range\" \n                                        class=\"plainChart__options barChart__width\" \n                                        min=\"200\" \n                                        value=\"".concat(width, "\"\n                                        max=\"900\" \n                                        step=\"any\">\n                                </div>\n                                <div> \n                                    height \n                                    <input \n                                        type=\"range\" \n                                        class=\"plainChart__options barChart__height\" \n                                        min=\"200\" \n                                        value=\"").concat(height, "\"\n                                        max=\"900\" \n                                        step=\"any\">\n                                </div>\n                                <div> \n                                    bright \n                                    <input \n                                        type=\"range\" \n                                        class=\"plainChart__options barChart__bright\" \n                                        min=\"0\" \n                                        value=\"").concat(bright, "\"\n                                        max=\"5\" \n                                        step=\"any\">\n                                </div>\n                                <div> \n                                    columnWidth \n                                    <input \n                                        type=\"range\" \n                                        class=\"plainChart__options barChart__column-width\" \n                                        min=\"10\" \n                                        value=\"").concat(columnWidth, "\"\n                                        max=\"40\" \n                                        step=\"any\">\n                                </div>\n                                <div> \n                                    gap \n                                    <input \n                                        type=\"range\" \n                                        class=\"plainChart__options barChart__gap\" \n                                        min=\"0\" \n                                        value=\"").concat(gap, "\"\n                                        max=\"50\" \n                                        step=\"any\">\n                                </div>\n                                <div> \n                                    fontSize \n                                    <input \n                                        type=\"range\" \n                                        class=\"plainChart__options barChart__font-size\" \n                                        min=\"5\" \n                                        value=\"").concat(fontSize, "\"\n                                        max=\"20\" \n                                        step=\"any\">\n                                </div>\n                                <div> \n                                    scale \n                                    <input \n                                        type=\"range\" \n                                        class=\"plainChart__options barChart__scale\" \n                                        min=\"0.1\" \n                                        value=\"").concat(scale, "\"\n                                        max=\"2\" \n                                        step=\"any\">\n                                </div>\n                                <button class=\"plainChart__edit-button plainChart__button\"><p>Edit</p></button>\n                            </div>\n                            ");
  var widthInput = document.querySelector('.barChart__width'),
      heightInput = document.querySelector('.barChart__height'),
      brightInput = document.querySelector('.barChart__bright'),
      columnWidthInput = document.querySelector('.barChart__column-width'),
      gapInput = document.querySelector('.barChart__gap'),
      fontSizeInput = document.querySelector('.barChart__font-size'),
      scaleInput = document.querySelector('.barChart__scale');
  var editBtn = document.querySelector('.plainChart__edit-button');
  (0,_services_animateClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(editBtn, 'plainChart__button', 'plainChart__button_clicked');
  return {
    widthInput: widthInput,
    heightInput: heightInput,
    brightInput: brightInput,
    columnWidthInput: columnWidthInput,
    gapInput: gapInput,
    fontSizeInput: fontSizeInput,
    scaleInput: scaleInput,
    editBtn: editBtn
  };
}

/***/ }),

/***/ "./src/chartWrapper/renderChartWrapper.js":
/*!************************************************!*\
  !*** ./src/chartWrapper/renderChartWrapper.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderChartWrapper)
/* harmony export */ });
/* harmony import */ var _services_settingsIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/settingsIcon.js */ "./src/services/settingsIcon.js");

function renderChartWrapper(parent) {
  function addDiv(parent, cssClass) {
    var newDiv = document.createElement('div');
    newDiv.classList.add(cssClass);
    parent.append(newDiv);
    return newDiv;
  }

  var plainChart = addDiv(parent, 'plainChart');
  var chartWrapper = addDiv(plainChart, 'chart-wrapper');
  var chartSettings = addDiv(plainChart, 'chart-settings');
  var icon = addDiv(plainChart, 'chart-settings__icon');
  icon.addEventListener('click', function () {
    chartSettings.classList.toggle('chart-elem_hidden');
  });
  (0,_services_settingsIcon_js__WEBPACK_IMPORTED_MODULE_0__.default)(icon);
}

/***/ }),

/***/ "./src/inputFields/inputFields.js":
/*!****************************************!*\
  !*** ./src/inputFields/inputFields.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderInputFields)
/* harmony export */ });
/* harmony import */ var _services_animateClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/animateClick.js */ "./src/services/animateClick.js");

function renderInputFields(parent, values, labels) {
  var inputFields = document.createElement('div');
  inputFields.classList.add('input-fields');
  parent.append(inputFields);
  inputFields.innerHTML = "\n        <textarea \n            class=\"input-fields__input-values input-fields__input\" \n            placeholder=\"Enter chart values separated by ','\" \n            rows=\"6\"></textarea>\n        <textarea \n            class=\"input-fields__input-labels input-fields__input\"  \n            placeholder=\"Enter chart labels separated by ','\" \n            rows=\"6\"></textarea>\n        <div class=\"input-fields__input-buttons\">\n            <button class=\"input-fields__create-button input-fields__barChart-button plainChart__button\">\n                New Bar Chart\n            </button>\n            <button class=\"input-fields__create-button input-fields__pieChart-button plainChart__button\">\n                New Pie Chart\n            </button>\n        </div>  \n        ";
  var pieChartBtn = document.querySelector('.input-fields__pieChart-button'),
      barChartBtn = document.querySelector('.input-fields__barChart-button'),
      valuesInput = document.querySelector('.input-fields__input-values'),
      labelsInput = document.querySelector('.input-fields__input-labels');
  valuesInput.value = values;
  labelsInput.value = labels;
  (0,_services_animateClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(barChartBtn, 'plainChart__button', 'plainChart__button_clicked');
  (0,_services_animateClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(pieChartBtn, 'plainChart__button', 'plainChart__button_clicked');
  return {
    barChartBtn: barChartBtn,
    pieChartBtn: pieChartBtn,
    valuesInput: valuesInput,
    labelsInput: labelsInput
  };
}

/***/ }),

/***/ "./src/pieChart/createLegend.js":
/*!**************************************!*\
  !*** ./src/pieChart/createLegend.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectedSector": () => (/* binding */ selectedSector),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var selectedSector;

var createLegend = function createLegend(wrapper, labels, colors, updateChart, checkbox) {
  var legend = document.createElement('div');
  legend.classList.add('pieChart__legend');

  if (!checkbox.checked) {
    legend.classList.add('chart-elem_hidden');
  }

  wrapper.append(legend);
  labels.forEach(function (label, i) {
    var wrap = document.createElement('div');
    wrap.classList.add('pieChart__legend__wrap');
    var colorBlock = document.createElement('div');
    var titleBlock = document.createElement('div');
    legend.append(wrap);
    colorBlock.classList.add('pieChart__legend__colorBlock');
    colorBlock.style.cssText = "background-color: rgb(".concat(colors[i], ")");
    wrap.append(colorBlock);
    titleBlock.textContent = labels[i];
    titleBlock.classList.add('pieChart__legend__titleBlock');
    wrap.append(titleBlock);
    wrap.addEventListener('click', function () {
      selectedSector = i;
      updateChart();
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createLegend);

/***/ }),

/***/ "./src/pieChart/createPieChartSettings.js":
/*!************************************************!*\
  !*** ./src/pieChart/createPieChartSettings.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createPieChartSettings)
/* harmony export */ });
/* harmony import */ var _services_animateClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/animateClick.js */ "./src/services/animateClick.js");

function createPieChartSettings(radius, donut) {
  var chartSettings = document.querySelector('.chart-settings');
  chartSettings.innerHTML = "\n                            <div class=\"plainChart__options__wrapper\">\n                                <div class=\"plainChart__options\">\n                                    radius\n                                    <input type=\"range\" \n                                        class=\"plainChart__options pieChart__radius\" \n                                        min=\"55\" \n                                        value=\"".concat(radius, "\"\n                                        max=\"250\" \n                                        step=\"any\">\n                                </div>\n                                <div class=\"plainChart__options\">\n                                    donut\n                                    <input type=\"range\" \n                                        class=\"plainChart__options pieChart__donut\"     \n                                        min=\"0\" \n                                        value=\"").concat(donut, "\"\n                                        max=\"95\" \n                                        step=\"any\">\n                                </div>\n                                <div class=\"plainChart__options\">\n                                    legend\n                                    <input type=\"checkbox\" \n                                        class=\"plainChart__options pieChart__legend-checkbox\" checked>\n                                </div>\n                                <button class=\"plainChart__edit-button plainChart__button\"><p>Edit</p></button>\n                            </div>\n                            ");
  var radiusInput = document.querySelector('.pieChart__radius');
  var donutInput = document.querySelector('.pieChart__donut');
  var legendCheckbox = document.querySelector('.pieChart__legend-checkbox');
  var editBtn = document.querySelector('.plainChart__edit-button');
  (0,_services_animateClick_js__WEBPACK_IMPORTED_MODULE_0__.default)(editBtn, 'plainChart__button', 'plainChart__button_clicked');
  return {
    radiusInput: radiusInput,
    donutInput: donutInput,
    legendCheckbox: legendCheckbox,
    editBtn: editBtn
  };
}

/***/ }),

/***/ "./src/pieChart/pieChart.js":
/*!**********************************!*\
  !*** ./src/pieChart/pieChart.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PieChart)
/* harmony export */ });
/* harmony import */ var _services_getColor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/getColor.js */ "./src/services/getColor.js");
/* harmony import */ var _createLegend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createLegend.js */ "./src/pieChart/createLegend.js");
/* harmony import */ var _createPieChartSettings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createPieChartSettings.js */ "./src/pieChart/createPieChartSettings.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*jshint -W030 */





var PieChart = function PieChart(values, labels) {
  var _this = this;

  var settings = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _classCallCheck(this, PieChart);

  this.values = values;
  this.labels = labels;
  this.colors = settings.colors.innerHTML.split(';');
  this.wrapper = document.querySelector('.chart-wrapper');
  var _settings$currentRadi = settings.currentRadius,
      currentRadius = _settings$currentRadi === void 0 ? 100 : _settings$currentRadi,
      _settings$currentDonu = settings.currentDonut,
      currentDonut = _settings$currentDonu === void 0 ? 50 : _settings$currentDonu;

  var _createPieChartSettin = (0,_createPieChartSettings_js__WEBPACK_IMPORTED_MODULE_2__.default)(currentRadius, currentDonut),
      radiusInput = _createPieChartSettin.radiusInput,
      donutInput = _createPieChartSettin.donutInput,
      legendCheckbox = _createPieChartSettin.legendCheckbox,
      editBtn = _createPieChartSettin.editBtn;

  this.radiusInput = radiusInput;
  this.donutInput = donutInput;
  this.legendCheckbox = legendCheckbox;

  var createNewChart = function createNewChart() {
    //====PROPERTIES==============
    _this.height = _this.radiusInput.value * 2.5;
    _this.width = _this.radiusInput.value * 2.5;
    _this.center = {
      x: _this.width / 2,
      y: _this.height / 2
    };
    _this.radius = _this.radiusInput.value;
    _this.donut = _this.donutInput.value; //============================
    //====NEW CANVAS==============

    var canvas = document.createElement('canvas');
    canvas.classList.add('chart');
    canvas.height = _this.height;
    canvas.width = _this.width;

    _this.wrapper.append(canvas);

    var ctx = canvas.getContext('2d'); //============================
    //====RESIZE==================

    var resize = function resize(event) {
      var Y = [];
      Y.push(event.clientY);
      Y.push(event.clientY);

      var moveToResize = function moveToResize(event) {
        Y.push(event.clientY);
        Y.shift();
        Y[1] > Y[0] ? _this.radiusInput.value++ : _this.radiusInput.value--;
        updateChart();
      };

      window.addEventListener('mousemove', moveToResize);
      window.addEventListener('mouseup', function () {
        window.removeEventListener('mousemove', moveToResize);
      });
    };

    canvas.addEventListener('mousedown', resize); //=====================================
    //====CREATE ANGLES FOR SECTORS OF CHART=============

    var getAngles = function getAngles() {
      var sumValue = _this.values.reduce(function (acc, cur) {
        return acc + cur;
      });

      var proportions = _this.values.map(function (value) {
        return value / sumValue;
      });

      var angles = proportions.map(function (prop, i, arr) {
        var obj = {};

        if (i) {
          var startPoint = proportions.filter(function (prop, index) {
            return index < i;
          }).reduce(function (acc, cur) {
            return acc + cur;
          });
          obj.startAngle = 2 * Math.PI * startPoint;
        } else {
          obj.startAngle = 0;
        }

        obj.endAngle = 2 * Math.PI * prop + obj.startAngle;
        return obj;
      });
      return angles;
    };

    var angles = getAngles(); //=============================================
    //====CREATE SECTORS OF CHART==================

    var createSector = function createSector(start, end, color) {
      ctx.beginPath();
      ctx.moveTo(_this.center.x, _this.center.y);
      ctx.lineTo(_this.center.x - _this.radius * Math.cos(start), _this.center.y - _this.radius * Math.sin(start));
      ctx.arc(_this.center.x, _this.center.y, _this.radius, start, end);
      ctx.fillStyle = "rgb(".concat(color, ")");
      ctx.fill();
    };

    var createSelectedSector = function createSelectedSector(start, end, color) {
      ctx.beginPath();
      ctx.moveTo(_this.center.x, _this.center.y);
      ctx.lineTo(_this.center.x - _this.radius * 1.1 * Math.cos(start), _this.center.y - _this.radius * 1.1 * Math.sin(start));
      ctx.arc(_this.center.x, _this.center.y, _this.radius * 1.1, start, end);
      ctx.fillStyle = "rgb(".concat(color, ")");
      ctx.fill();
    };

    angles.forEach(function (item, i) {
      var newColor;

      if (_this.colors.length >= _this.values.length) {
        newColor = _this.colors[i];
      } else {
        newColor = (0,_services_getColor_js__WEBPACK_IMPORTED_MODULE_0__.default)();

        _this.colors.push(newColor);
      }

      i === +_createLegend_js__WEBPACK_IMPORTED_MODULE_1__.selectedSector ? createSelectedSector(item.startAngle, item.endAngle, newColor) : createSector(item.startAngle, item.endAngle, newColor);
    }); //===============================================
    //====CREATE DONUT CHART=========================

    var donut = _this.radius * _this.donut / 100;
    ctx.globalCompositeOperation = 'xor';
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.arc(_this.center.x, _this.center.y, donut, 0, 2 * Math.PI);
    ctx.fill(); //===============================================
  };

  var updateChart = function updateChart() {
    _this.wrapper.innerHTML = '';
    createNewChart();
    (0,_createLegend_js__WEBPACK_IMPORTED_MODULE_1__.default)(_this.wrapper, labels, _this.colors, updateChart, _this.legendCheckbox);
  };

  this.radiusInput.addEventListener('input', updateChart);
  this.donutInput.addEventListener('input', updateChart);
  this.legendCheckbox.addEventListener('click', function () {
    document.querySelector('.pieChart__legend').classList.toggle('chart-elem_hidden');
  });
  updateChart();
  return {
    radiusInput: radiusInput,
    donutInput: donutInput,
    legendCheckbox: legendCheckbox,
    editBtn: editBtn
  };
};



/***/ }),

/***/ "./src/plainChart/plainChart.js":
/*!**************************************!*\
  !*** ./src/plainChart/plainChart.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PlainChart)
/* harmony export */ });
/* harmony import */ var _pieChart_pieChart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pieChart/pieChart.js */ "./src/pieChart/pieChart.js");
/* harmony import */ var _barChart_barChart_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../barChart/barChart.js */ "./src/barChart/barChart.js");
/* harmony import */ var _services_getColor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/getColor.js */ "./src/services/getColor.js");
/* harmony import */ var _inputFields_inputFields_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../inputFields/inputFields.js */ "./src/inputFields/inputFields.js");
/* harmony import */ var _chartWrapper_renderChartWrapper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chartWrapper/renderChartWrapper.js */ "./src/chartWrapper/renderChartWrapper.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*jshint -W116 */






var PlainChart = /*#__PURE__*/function () {
  function PlainChart() {
    var _this = this;

    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'no parent';
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'no data';

    _classCallCheck(this, PlainChart);

    //======VERIFICATION=========================================
    if (parent === 'no parent') throw new Error('No parent to create a chart');
    if (data === 'no data') throw new Error('No data to create a chart');
    var type = data.type,
        values = data.values,
        labels = data.labels,
        _data$settings = data.settings,
        settings = _data$settings === void 0 ? {} : _data$settings;
    if (!type || !values || !labels) throw new Error('No data to create a chart'); //==========================================================
    //======PROPERTIES===========================================

    this.parent = parent;
    this.type = type;
    this.values = values;
    this.labels = labels;
    this.settings = settings; //==========================================================
    //=======SAVE COLORS SETTINGS===============================

    var colors = document.createElement('div');

    var updateColors = function updateColors() {
      colors.innerHTML = '';

      for (var i = 0; i < _this.values.length; i++) {
        var newColor = (0,_services_getColor_js__WEBPACK_IMPORTED_MODULE_2__.default)(_this.bright);
        colors.innerHTML += "".concat(newColor, ";");
      }
    };

    if (!settings.colors) {
      updateColors();
      this.settings.colors = colors;
    } else {
      colors.innerHTML = settings.colors;
      this.settings.colors = colors;
    } //==========================================================
    //========CREATE COMPONENTS=================================


    var createInputFields = function createInputFields() {
      _this.parent.innerHTML = '';

      var _renderInputFields = (0,_inputFields_inputFields_js__WEBPACK_IMPORTED_MODULE_3__.default)(_this.parent, _this.values, _this.labels),
          barChartBtn = _renderInputFields.barChartBtn,
          pieChartBtn = _renderInputFields.pieChartBtn,
          valuesInput = _renderInputFields.valuesInput,
          labelsInput = _renderInputFields.labelsInput;

      pieChartBtn.addEventListener('click', function () {
        _this.values = valuesInput.value;
        _this.labels = labelsInput.value;
        createPieChart();
      });
      barChartBtn.addEventListener('click', function () {
        _this.values = valuesInput.value;
        _this.labels = labelsInput.value;
        createBarChart();
      });
    };

    var createPieChart = function createPieChart() {
      _this.parent.innerHTML = '';
      (0,_chartWrapper_renderChartWrapper_js__WEBPACK_IMPORTED_MODULE_4__.default)(_this.parent);

      var _PieChart = new _pieChart_pieChart_js__WEBPACK_IMPORTED_MODULE_0__.default(_this.values, _this.labels, _this.settings),
          radiusInput = _PieChart.radiusInput,
          donutInput = _PieChart.donutInput,
          legendCheckbox = _PieChart.legendCheckbox,
          editBtn = _PieChart.editBtn;

      var updateCurrRadiusAndDonut = function updateCurrRadiusAndDonut() {
        _this.settings.currentRadius = radiusInput.value;
        _this.settings.currentDonut = donutInput.value;
      };

      editBtn.addEventListener('click', function () {
        updateCurrRadiusAndDonut();
        createInputFields();
      });
      radiusInput.addEventListener('input', updateCurrRadiusAndDonut);
      donutInput.addEventListener('input', updateCurrRadiusAndDonut);
    };

    var createBarChart = function createBarChart() {
      _this.parent.innerHTML = '';
      (0,_chartWrapper_renderChartWrapper_js__WEBPACK_IMPORTED_MODULE_4__.default)(_this.parent);

      var _BarChart = new _barChart_barChart_js__WEBPACK_IMPORTED_MODULE_1__.default(_this.values, _this.labels, _this.settings),
          widthInput = _BarChart.widthInput,
          heightInput = _BarChart.heightInput,
          brightInput = _BarChart.brightInput,
          columnWidthInput = _BarChart.columnWidthInput,
          gapInput = _BarChart.gapInput,
          fontSizeInput = _BarChart.fontSizeInput,
          scaleInput = _BarChart.scaleInput,
          colors = _BarChart.colors,
          editBtn = _BarChart.editBtn;

      var updateCurrSettings = function updateCurrSettings() {
        _this.settings.CurrentWidth = widthInput.value;
        _this.settings.CurrentHeight = heightInput.value;
        _this.settings.CurrentBright = brightInput.value;
        _this.settings.CurrentColumnWidth = columnWidthInput.value;
        _this.settings.CurrentGap = gapInput.value;
        _this.settings.CurrentFontSize = fontSizeInput.value;
        _this.settings.CurrentScale = scaleInput.value;
        _this.settings.colors = colors;
      };

      editBtn.addEventListener('click', function () {
        updateCurrSettings();
        createInputFields();
      });
      widthInput.addEventListener('input', updateCurrSettings);
      heightInput.addEventListener('input', updateCurrSettings);
      brightInput.addEventListener('input', updateCurrSettings);
      columnWidthInput.addEventListener('input', updateCurrSettings);
      gapInput.addEventListener('input', updateCurrSettings);
      fontSizeInput.addEventListener('input', updateCurrSettings);
      scaleInput.addEventListener('input', updateCurrSettings);
      updateCurrSettings();
    }; //=================================================
    //=======SELECT CHART TYPE=========================


    switch (this.type) {
      case 'barChart':
        createBarChart();
        break;

      case 'pieChart':
        createPieChart();
        break;

      default:
        createInputFields();
    } //=================================================

  } //==================================================


  _createClass(PlainChart, [{
    key: "values",
    get: function get() {
      return this._values;
    },
    set: function set(values) {
      this._values = values.split(',').map(function (val) {
        return +val;
      });
    }
  }, {
    key: "labels",
    get: function get() {
      return this._labels;
    },
    set: function set(labels) {
      this._labels = labels.split(',');
    } //===================================================
    //====RETURN VALUES, LABELS AND CHART SETTINGS=======

  }, {
    key: "getData",
    value: function getData() {
      var ObjectForReturn = {
        type: this.type,
        values: this.values,
        labels: this.labels,
        settings: this.settings
      };
      ObjectForReturn.settings.colors = this.settings.colors.innerHTML;
      return ObjectForReturn;
    }
  }]);

  return PlainChart;
}();



/***/ }),

/***/ "./src/services/animateClick.js":
/*!**************************************!*\
  !*** ./src/services/animateClick.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ animateClick)
/* harmony export */ });
function animateClick(btn, normalClass, clickedClass) {
  function buttonDown() {
    btn.classList.add(clickedClass);
    btn.classList.remove(normalClass);
  }

  function buttonUp() {
    btn.classList.remove(clickedClass);
    btn.classList.add(normalClass);
  }

  btn.addEventListener('mousedown', function () {
    buttonDown();
    btn.addEventListener('mouseout', buttonUp);
  });
  btn.addEventListener('mouseup', function () {
    buttonUp();
    btn.removeEventListener('mouseout', buttonUp);
  });
}

/***/ }),

/***/ "./src/services/getColor.js":
/*!**********************************!*\
  !*** ./src/services/getColor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var getColor = function getColor() {
  var bright = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var i = 0;
  var color = [];

  while (i < 3) {
    color.push("".concat(255 - bright * +Math.random().toString().slice(2, 4)));
    i++;
  }

  return color.toString();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getColor);

/***/ }),

/***/ "./src/services/settingsIcon.js":
/*!**************************************!*\
  !*** ./src/services/settingsIcon.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var settingsIcon = function settingsIcon(container) {
  var canvas = document.createElement('canvas');
  canvas.height = 35;
  canvas.width = 35;
  var center = canvas.width / 2;
  container.append(canvas);
  var ctx = canvas.getContext('2d');

  for (var i = 0; i < 2 * Math.PI; i += Math.PI / 6) {
    ctx.beginPath();
    ctx.arc(center, center, 12, i + Math.PI / 4, i + 2 * Math.PI / 6);
    ctx.arc(center, center, 15, i + 2 * Math.PI / 6 + 0.05, i + Math.PI / 4 + Math.PI / 6 - 0.05, false);
    ctx.lineTo(center - 5 * Math.cos(i), center - 5 * Math.sin(i));
    ctx.fillStyle = 'grey';
    ctx.fill();
  }

  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.arc(center, center, 7, 0, 2 * Math.PI);
  ctx.fill();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settingsIcon);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".input-fields {\n  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-wrap: wrap;\n  align-items: stretch;\n  padding: 10px;\n  min-width: 400px;\n}\n.input-fields__input {\n  margin-bottom: 10px;\n  border: none;\n  border-radius: 5px;\n  resize: none;\n  outline: none;\n  font-size: 16px;\n  font-style: normal;\n  font-family: Courier;\n  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);\n  padding: 5px;\n}\n.input-fields__input-name {\n  font-weight: bold;\n}\n.input-fields__input-values, .input-fields__input-labels {\n  font-weight: normal;\n}\n.input-fields__input-buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.input-fields__create-button {\n  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);\n  border: none;\n  outline: none;\n  display: block;\n  flex-grow: 1;\n  border-radius: 5px;\n  padding: 2em 0;\n  transition: 0.5s;\n  font-size: 16px;\n  font-style: normal;\n  font-family: Courier;\n  font-weight: bold;\n}\n.input-fields__barChart-button {\n  margin-right: 10px;\n}\n\n.plainChart {\n  position: relative;\n  display: inline-block;\n}\n.plainChart__options {\n  cursor: pointer;\n  user-select: none;\n  appearance: none;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  outline: none;\n}\n.plainChart__options::-webkit-slider-runnable-track {\n  height: 1px;\n  background-color: black;\n}\n.plainChart__options::-webkit-slider-thumb {\n  background: #1d8daa;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  -webkit-appearance: none;\n}\n.plainChart__options::-moz-range-track {\n  height: 1px;\n  background-color: black;\n}\n.plainChart__options::-moz-range-thumb {\n  background: #1d8daa;\n  border-radius: 50%;\n  cursor: pointer;\n  width: 12px;\n  height: 12px;\n  margin-top: -6px;\n  -moz-appearance: none;\n}\n.plainChart__edit-button {\n  font-size: 16px;\n  font-style: normal;\n  font-family: Courier;\n  outline: none;\n  border: none;\n  user-select: none;\n  cursor: pointer;\n  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);\n  margin: 10px;\n  padding: 0;\n}\n.plainChart__edit-button p {\n  margin: 10px;\n}\n.plainChart__edit-button:hover {\n  background-color: rgba(34, 60, 80, 0.2);\n  transition: 0.1s;\n}\n.plainChart__button {\n  background-color: rgba(255, 255, 255, 0.2);\n  transition: 0.1s;\n}\n.plainChart__button:hover {\n  background-color: rgba(34, 60, 80, 0.2);\n  transition: 0.1s;\n}\n.plainChart__button_clicked {\n  background-color: rgba(39, 55, 68, 0.2);\n  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2) inset;\n  transition: none;\n  font-size: 15.9px;\n  padding-left: 0.4px;\n  padding-right: 0.4px;\n}\n\n.chart-settings {\n  position: fixed;\n  top: 50px;\n  left: 50px;\n  background: rgba(255, 255, 255, 0.2);\n  box-shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);\n  backdrop-filter: blur(7px);\n  border-radius: 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  padding: 1em;\n}\n.chart-settings__icon {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.pieChart__legend-checkbox {\n  appearance: auto;\n  -moz-appearance: auto;\n  -webkit-appearance: auto;\n}\n.pieChart__legend {\n  display: flex;\n  justify-content: flex-start;\n  flex-wrap: wrap;\n}\n.pieChart__legend__wrap {\n  display: flex;\n  justify-content: between;\n  align-items: center;\n  margin: 0 10px;\n  padding: 0;\n  cursor: pointer;\n}\n.pieChart__legend__colorBlock {\n  width: 12px;\n  height: 12px;\n  margin: 5px;\n}\n.pieChart__legend__titleBlock {\n  font-size: 16px;\n  font-style: normal;\n  font-family: Courier;\n  color: black;\n  user-select: none;\n}\n\n.chart-elem_hidden {\n  display: none !important;\n}", "",{"version":3,"sources":["webpack://./src/style/style.scss"],"names":[],"mappings":"AAeA;EACI,iDAhBK;EAiBL,sBAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,eAAA;EACA,oBAAA;EACA,aAAA;EACA,gBAAA;AAdJ;AAgBI;EACI,mBAAA;EACA,YAAA;EACA,kBAAA;EACA,YAAA;EACA,aAAA;EAxBJ,eAAA;EACA,kBAAA;EACA,oBAAA;EAwBI,iDAjCC;EAkCD,YAAA;AAZR;AAcQ;EACA,iBAAA;AAZR;AAeQ;EAEI,mBAAA;AAdZ;AAiBQ;EACI,aAAA;EACA,8BAAA;AAfZ;AAmBI;EACI,iDApDC;EAqDD,YAAA;EACA,aAAA;EACA,cAAA;EACA,YAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EApDJ,eAAA;EACA,kBAAA;EACA,oBAAA;EAoDI,iBAAA;AAfR;AAkBI;EACI,kBAAA;AAhBR;;AAwBA;EACI,kBAAA;EACA,qBAAA;AArBJ;AAuBI;EACI,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,wBAAA;EACA,qBAAA;EACA,aAAA;AArBR;AAuBQ;EACI,WAAA;EACA,uBAAA;AArBZ;AAwBQ;EACI,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,wBAAA;AAtBZ;AAyBQ;EACI,WAAA;EACA,uBAAA;AAvBZ;AA0BQ;EACI,mBAAA;EACA,kBAAA;EACA,eAAA;EACA,WAAA;EACA,YAAA;EACA,gBAAA;EACA,qBAAA;AAxBZ;AA4BI;EACI,eAAA;EACA,kBAAA;EACA,oBAAA;EACA,aAAA;EACA,YAAA;EACA,iBAAA;EACA,eAAA;EACA,iDA5HC;EA6HD,YAAA;EACA,UAAA;AA1BR;AA4BQ;EACI,YAAA;AA1BZ;AA8BI;EACI,uCAnIa;EAoIb,gBAAA;AA5BR;AA+BI;EACI,0CAzIO;EA0IP,gBAAA;AA7BR;AA+BQ;EACI,uCA5IS;EA6IT,gBAAA;AA7BZ;AAiCI;EACI,uCAjJe;EAkJf,uDArJO;EAsJP,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,oBAAA;AA/BR;;AAsCA;EACI,eAAA;EACA,SAAA;EACA,UAAA;EACA,oCAAA;EACA,iDAtKK;EAuKL,0BAAA;EACA,mBAAA;EACA,2CAAA;EACA,YAAA;AAnCJ;AAqCI;EACI,eAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AAnCR;;AA2CI;EACI,gBAAA;EACA,qBAAA;EACA,wBAAA;AAxCR;AA2CI;EACI,aAAA;EACA,2BAAA;EACA,eAAA;AAzCR;AA2CQ;EACI,aAAA;EACA,wBAAA;EACA,mBAAA;EACA,cAAA;EACA,UAAA;EACA,eAAA;AAzCZ;AA4CQ;EACI,WAAA;EACA,YAAA;EACA,WAAA;AA1CZ;AA6CQ;EA3MJ,eAAA;EACA,kBAAA;EACA,oBAAA;EA2MQ,YAAA;EACA,iBAAA;AAzCZ;;AAiDA;EACI,wBAAA;AA9CJ","sourcesContent":["$shadow: 0px 0px 4px 0px rgba(34, 60, 80, 0.2);\r\n$shadow-inset: 0px 0px 4px 0px rgba(34, 60, 80, 0.2) inset;\r\n$button-color: rgba(255, 255, 255, 0.2);\r\n$button-color-hover: rgba(34, 60, 80, 0.2);\r\n$button-color-clicked: rgba(39, 55, 68, 0.2);\r\n\r\n@mixin font() {\r\n    font-size: 16px;\r\n    font-style: normal;\r\n    font-family: Courier;\r\n}\r\n\r\n\r\n\r\n\r\n.input-fields {\r\n    box-shadow: $shadow;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    align-items: stretch;\r\n    padding: 10px;\r\n    min-width: 400px;\r\n\r\n    &__input {\r\n        margin-bottom: 10px;\r\n        border: none;\r\n        border-radius: 5px;\r\n        resize: none;\r\n        outline: none;\r\n        @include font();\r\n        box-shadow: $shadow;\r\n        padding: 5px;\r\n    \r\n        &-name {\r\n        font-weight: bold;\r\n        }\r\n    \r\n        &-values, \r\n        &-labels { \r\n            font-weight: normal;\r\n        }\r\n    \r\n        &-buttons {\r\n            display: flex;\r\n            justify-content: space-between;\r\n        }\r\n    }\r\n\r\n    &__create-button {\r\n        box-shadow: $shadow;\r\n        border: none;\r\n        outline: none;\r\n        display: block;\r\n        flex-grow: 1;\r\n        border-radius: 5px;\r\n        padding: 2em 0;\r\n        transition: .5s;\r\n        @include font();\r\n        font-weight: bold;\r\n    }\r\n\r\n    &__barChart-button {\r\n        margin-right: 10px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n.plainChart {\r\n    position: relative;\r\n    display: inline-block;\r\n\r\n    &__options {\r\n        cursor: pointer;\r\n        user-select: none;\r\n        appearance: none;\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n        outline: none;\r\n\r\n        &::-webkit-slider-runnable-track {\r\n            height: 1px;\r\n            background-color: black;\r\n        }\r\n\r\n        &::-webkit-slider-thumb {\r\n            background: rgb(29, 141, 170 );\r\n            border-radius: 50%;\r\n            cursor: pointer;\r\n            width:12px;\r\n            height: 12px;\r\n            margin-top: -6px;\r\n            -webkit-appearance: none;\r\n        }\r\n\r\n        &::-moz-range-track {\r\n            height: 1px;\r\n            background-color: black;\r\n        }\r\n\r\n        &::-moz-range-thumb {\r\n            background: rgb(29, 141, 170 );\r\n            border-radius: 50%;\r\n            cursor: pointer;\r\n            width:12px;\r\n            height: 12px;\r\n            margin-top: -6px;\r\n            -moz-appearance: none;\r\n        }\r\n    }\r\n\r\n    &__edit-button {\r\n        font-size: 16px;\r\n        font-style: normal;\r\n        font-family: Courier;\r\n        outline: none;\r\n        border: none;\r\n        user-select: none;\r\n        cursor: pointer;\r\n        box-shadow: $shadow;\r\n        margin: 10px;\r\n        padding: 0;\r\n    \r\n        & p {\r\n            margin: 10px;\r\n        }\r\n    }\r\n\r\n    &__edit-button:hover {\r\n        background-color: $button-color-hover;\r\n        transition: .1s;\r\n    }\r\n\r\n    &__button {\r\n        background-color: $button-color;\r\n        transition: .1s;\r\n    \r\n        &:hover {\r\n            background-color: $button-color-hover;\r\n            transition: .1s;\r\n        }\r\n    }\r\n    \r\n    &__button_clicked {\r\n        background-color:$button-color-clicked;\r\n        box-shadow: $shadow-inset;\r\n        transition: none;\r\n        font-size: 15.9px;\r\n        padding-left: .4px;\r\n        padding-right: .4px;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n.chart-settings {\r\n    position: fixed;\r\n    top: 50px;\r\n    left: 50px;\r\n    background: rgba( 255, 255, 255, 0.20 );\r\n    box-shadow: $shadow;\r\n    backdrop-filter: blur( 7.0px );\r\n    border-radius: 10px;\r\n    border: 1px solid rgba( 255, 255, 255, 0.18 );\r\n    padding: 1em;\r\n\r\n    &__icon {\r\n        cursor: pointer;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n.pieChart {\r\n    &__legend-checkbox {\r\n        appearance: auto;\r\n        -moz-appearance: auto;\r\n        -webkit-appearance: auto;\r\n    }\r\n\r\n    &__legend {\r\n        display: flex; \r\n        justify-content: flex-start; \r\n        flex-wrap: wrap;\r\n\r\n        &__wrap {\r\n            display: flex; \r\n            justify-content: between; \r\n            align-items: center; \r\n            margin: 0 10px;\r\n            padding: 0;\r\n            cursor: pointer;\r\n        }\r\n\r\n        &__colorBlock {\r\n            width: 12px; \r\n            height: 12px; \r\n            margin: 5px;\r\n        }\r\n\r\n        &__titleBlock {\r\n            @include font();\r\n            color: black;  \r\n            user-select: none\r\n        }\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n.chart-elem_hidden {\r\n    display: none !important;\r\n}"],"sourceRoot":""}]);
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
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _plainChart_plainChart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plainChart/plainChart.js */ "./src/plainChart/plainChart.js");
/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/style.scss */ "./src/style/style.scss");


function init(parent, data) {
  return new _plainChart_plainChart_js__WEBPACK_IMPORTED_MODULE_0__.default(parent, data);
}
})();

plainChart = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=plainChart.js.map