/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function resetResult() {
    var result = document.getElementsByClassName('btn--result')[0];
    result.innerHTML = '0';
}
exports.resetResult = resetResult;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function calculatorResult() {
    var result = +document.getElementsByClassName('btn--result')[0].innerHTML;
    result *= result;
}
exports.calculatorResult = calculatorResult;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var specialCharacterCheck_1 = __webpack_require__(6);
function changeResult(event) {
    var result = document.getElementsByClassName('btn--result')[0].innerHTML, resultObj = document.getElementsByClassName('btn--result')[0], symbol, value;
    if (typeof (event) === 'object') {
        value = event.target.innerHTML;
    }
    else {
        value = event;
    }
    switch (value) {
        case '/':
        case '*':
        case '-':
        case '+':
        case '.':
            symbol = specialCharacterCheck_1.specialCharacterCheck(value, result);
            break;
        default:
            var firstSymbol = result[0], lengthResult = result.length;
            if (firstSymbol === '0' && lengthResult === 1) {
                symbol = value;
            }
            else if (result === 'result') {
                symbol = value;
            }
            else {
                symbol = result + value;
            }
    }
    resultObj = symbol;
}
exports.changeResult = changeResult;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function resultOfExpression() {
    var result = document.getElementsByClassName('btn--result')[0].innerHTML, resultObj = document.getElementsByClassName('btn--result')[0], resultNumber;
    resultNumber = eval(result);
    resultNumber = +resultNumber.toFixed(5);
    resultObj.innerHTML = resultNumber;
    if (resultNumber === 'Infinity') {
        alert('Error');
        result = 0;
    }
}
exports.resultOfExpression = resultOfExpression;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var calculator_module_1 = __webpack_require__(5);
var reserResult_1 = __webpack_require__(0);
var calculatorResult_1 = __webpack_require__(1);
var changeResult_1 = __webpack_require__(2);
var resultOfExpression_1 = __webpack_require__(3);
var index_1 = __webpack_require__(7);
calculator_module_1.createCalculator();
index_1.createEvent();
document.onkeydown = function (e) {
    switch (e.key) {
        case 'Escape':
            reserResult_1.resetResult();
            break;
        case 'Enter':
            resultOfExpression_1.resultOfExpression();
            break;
        case '^':
            calculatorResult_1.calculatorResult();
            break;
        case '+':
        case '-':
        case '/':
        case '*':
        case '.':
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            changeResult_1.changeResult(e.key);
            break;
    }
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constanta_1 = __webpack_require__(9);
function createCalculator() {
    var calculator = document.createElement('div'), i;
    calculator.classList.add('calculator');
    for (i = 0; i < constanta_1.value.length; i++) {
        var calculatorItem = document.createElement('div');
        calculatorItem.classList.add('btn');
        calculatorItem.innerHTML = constanta_1.value[i];
        switch (constanta_1.value[i]) {
            case 'result':
                calculatorItem.classList.add('btn--result');
                break;
            case 'C':
                calculatorItem.classList.add('btn--red');
                break;
            case '^':
            case '+':
            case '-':
            case '/':
            case '*':
                calculatorItem.classList.add('btn--green');
                break;
        }
        calculator.appendChild(calculatorItem);
    }
    document.body.appendChild(calculator);
}
exports.createCalculator = createCalculator;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function specialCharacterCheck(value, result) {
    var lastSymbol = result[result.length - 1], specialSymbols = ['+', '-', '/', '*', '.'];
    if (specialSymbols.indexOf(lastSymbol) >= 0) {
        return result;
    }
    else {
        return result + value;
    }
}
exports.specialCharacterCheck = specialCharacterCheck;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var addEvent_1 = __webpack_require__(8);
var reserResult_1 = __webpack_require__(0);
var calculatorResult_1 = __webpack_require__(1);
var changeResult_1 = __webpack_require__(2);
var resultOfExpression_1 = __webpack_require__(3);
function createEvent() {
    var items = document.getElementsByClassName('btn');
    for (var i = 0; i < items.length; i++) {
        switch (items[i].innerHTML) {
            case 'C':
                addEvent_1.addEvent(items[i], reserResult_1.resetResult);
                break;
            case '=':
                addEvent_1.addEvent(items[i], resultOfExpression_1.resultOfExpression);
                break;
            case '^':
                addEvent_1.addEvent(items[i], calculatorResult_1.calculatorResult);
                break;
            default:
                addEvent_1.addEvent(items[i], changeResult_1.changeResult);
        }
    }
}
exports.createEvent = createEvent;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function addEvent(item, colbeck) {
    item.addEventListener('click', colbeck);
}
exports.addEvent = addEvent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.value = ['C', '^', 'result', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '/', '0', '.', '=', '*'];


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgM2RmNzJmMjMxYmNkZjQxZDY5MmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXNlclJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL2NhbGN1bGF0b3JSZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9jaGFuZ2VSZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXN1bHRPZkV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvc3BlY2lhbENoYXJhY3RlckNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9hZGRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NhbGN1bGF0b3IvY29uc3RhbnRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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Ozs7QUMzQkQsa0JBQXlCLElBQVEsRUFBRSxPQUFXO0lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDNUMsQ0FBQztBQUZELDRCQUVDOzs7Ozs7Ozs7O0FDRlksYUFBSyxHQUFZLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgM2RmNzJmMjMxYmNkZjQxZDY5MmUiLCJleHBvcnQgZnVuY3Rpb24gcmVzZXRSZXN1bHQgKCk6dm9pZCB7XHJcbiAgICBsZXQgcmVzdWx0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLS1yZXN1bHQnKVswXTtcclxuXHJcbiAgICByZXN1bHQuaW5uZXJIVE1MID0gJzAnO1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXNlclJlc3VsdC50cyIsImV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdG9yUmVzdWx0ICgpIHtcclxuICAgIGxldCByZXN1bHQ6bnVtYmVyID0gK2RvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi0tcmVzdWx0JylbMF0uaW5uZXJIVE1MO1xyXG5cclxuICAgIHJlc3VsdCAqPSAgcmVzdWx0O1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9jYWxjdWxhdG9yUmVzdWx0LnRzIiwiaW1wb3J0IHtzcGVjaWFsQ2hhcmFjdGVyQ2hlY2t9IGZyb20gJy4vc3BlY2lhbENoYXJhY3RlckNoZWNrJ1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJlc3VsdChldmVudDphbnkpOnZvaWQge1xyXG4gICAgbGV0IHJlc3VsdDpzdHJpbmcgfCBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tLXJlc3VsdCcpWzBdLmlubmVySFRNTCxcclxuICAgICAgICByZXN1bHRPYmo6b2JqZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLS1yZXN1bHQnKVswXSxcclxuICAgICAgICBzeW1ib2wsXHJcbiAgICAgICAgdmFsdWU7XHJcblxyXG5cclxuICAgIGlmICh0eXBlb2YoZXZlbnQpID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gZXZlbnQ7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgIHN5bWJvbCA9IHNwZWNpYWxDaGFyYWN0ZXJDaGVjayh2YWx1ZSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbGV0IGZpcnN0U3ltYm9sID0gcmVzdWx0WzBdLFxyXG4gICAgICAgICAgICAgICAgbGVuZ3RoUmVzdWx0ID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0U3ltYm9sID09PSAnMCcgJiYgbGVuZ3RoUmVzdWx0ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSAgZWxzZSBpZiAocmVzdWx0ID09PSAncmVzdWx0Jykge1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSByZXN1bHQgKyB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdE9iaiA9IHN5bWJvbDtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9jaGFuZ2VSZXN1bHQudHMiLCJleHBvcnQgZnVuY3Rpb24gcmVzdWx0T2ZFeHByZXNzaW9uICgpe1xyXG4gICAgbGV0IHJlc3VsdDpzdHJpbmcgfCBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tLXJlc3VsdCcpWzBdLmlubmVySFRNTCxcclxuICAgICAgICByZXN1bHRPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tLXJlc3VsdCcpWzBdLFxyXG4gICAgICAgIHJlc3VsdE51bWJlcjphbnk7XHJcblxyXG4gICAgcmVzdWx0TnVtYmVyID0gZXZhbChyZXN1bHQpO1xyXG5cclxuICAgIHJlc3VsdE51bWJlciA9ICtyZXN1bHROdW1iZXIudG9GaXhlZCg1KTtcclxuXHJcbiAgICByZXN1bHRPYmouaW5uZXJIVE1MID0gcmVzdWx0TnVtYmVyO1xyXG5cclxuICAgIGlmIChyZXN1bHROdW1iZXIgPT09ICdJbmZpbml0eScpIHtcclxuICAgICAgICBhbGVydCgnRXJyb3InKTtcclxuICAgICAgICByZXN1bHQgPSAwO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXN1bHRPZkV4cHJlc3Npb24udHMiLCJpbXBvcnQge2NyZWF0ZUNhbGN1bGF0b3J9IGZyb20gJy4vY2FsY3VsYXRvci9jYWxjdWxhdG9yLm1vZHVsZSc7XHJcbmltcG9ydCB7cmVzZXRSZXN1bHR9IGZyb20gJy4vY2FsY3VsYXRvci9ldmVudHMvcmVzZXJSZXN1bHQnO1xyXG5pbXBvcnQge2NhbGN1bGF0b3JSZXN1bHR9IGZyb20gJy4vY2FsY3VsYXRvci9ldmVudHMvY2FsY3VsYXRvclJlc3VsdCc7XHJcbmltcG9ydCB7Y2hhbmdlUmVzdWx0fSBmcm9tICcuL2NhbGN1bGF0b3IvZXZlbnRzL2NoYW5nZVJlc3VsdCc7XHJcbmltcG9ydCB7cmVzdWx0T2ZFeHByZXNzaW9ufSBmcm9tICcuL2NhbGN1bGF0b3IvZXZlbnRzL3Jlc3VsdE9mRXhwcmVzc2lvbic7XHJcbmltcG9ydCB7Y3JlYXRlRXZlbnR9IGZyb20gJy4vY2FsY3VsYXRvci9ldmVudHMvaW5kZXgnO1xyXG5cclxuXHJcbmNyZWF0ZUNhbGN1bGF0b3IoKTtcclxuY3JlYXRlRXZlbnQoKTtcclxuXHJcbmRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKTp2b2lkIHtcclxuICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICBjYXNlICdFc2NhcGUnOlxyXG4gICAgICAgICAgICByZXNldFJlc3VsdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIHJlc3VsdE9mRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdeJzpcclxuICAgICAgICAgICAgY2FsY3VsYXRvclJlc3VsdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICBjYXNlICcwJzpcclxuICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICBjYXNlICczJzpcclxuICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICBjYXNlICc1JzpcclxuICAgICAgICBjYXNlICc2JzpcclxuICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICBjYXNlICc4JzpcclxuICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgICAgY2hhbmdlUmVzdWx0KGUua2V5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAudHMiLCJpbXBvcnQge3ZhbHVlfSBmcm9tICcuL2NvbnN0YW50YSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAgY3JlYXRlQ2FsY3VsYXRvcigpOnZvaWQge1xyXG4gICAgbGV0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICBpIDtcclxuXHJcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3InKTtcclxuXHJcbiAgICBmb3IgKCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgIGxldCBjYWxjdWxhdG9ySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBjYWxjdWxhdG9ySXRlbS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHJcbiAgICAgICAgY2FsY3VsYXRvckl0ZW0uaW5uZXJIVE1MID0gdmFsdWVbaV07XHJcblxyXG4gICAgICAgIHN3aXRjaCh2YWx1ZVtpXSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXN1bHQnOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRvckl0ZW0uY2xhc3NMaXN0LmFkZCgnYnRuLS1yZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0b3JJdGVtLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcmVkJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXic6XHJcbiAgICAgICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRvckl0ZW0uY2xhc3NMaXN0LmFkZCgnYnRuLS1ncmVlbicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWxjdWxhdG9yLmFwcGVuZENoaWxkKGNhbGN1bGF0b3JJdGVtKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FsY3VsYXRvcik7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLm1vZHVsZS50cyIsImV4cG9ydCBmdW5jdGlvbiBzcGVjaWFsQ2hhcmFjdGVyQ2hlY2sodmFsdWU6c3RyaW5nLCByZXN1bHQ6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgbGV0IGxhc3RTeW1ib2wgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLFxyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzID0gWycrJywgJy0nLCAnLycsICcqJywgJy4nXTtcclxuXHJcbiAgICBpZihzcGVjaWFsU3ltYm9scy5pbmRleE9mKGxhc3RTeW1ib2wpID49IDApIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIHJlc3VsdCArIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvc3BlY2lhbENoYXJhY3RlckNoZWNrLnRzIiwiaW1wb3J0IHthZGRFdmVudH0gZnJvbSAnLi9hZGRFdmVudCc7XHJcbmltcG9ydCB7cmVzZXRSZXN1bHR9IGZyb20gJy4vcmVzZXJSZXN1bHQnO1xyXG5pbXBvcnQge2NhbGN1bGF0b3JSZXN1bHR9IGZyb20gJy4vY2FsY3VsYXRvclJlc3VsdCc7XHJcbmltcG9ydCB7Y2hhbmdlUmVzdWx0fSBmcm9tICcuL2NoYW5nZVJlc3VsdCc7XHJcbmltcG9ydCB7cmVzdWx0T2ZFeHByZXNzaW9ufSBmcm9tICcuL3Jlc3VsdE9mRXhwcmVzc2lvbic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50ICgpOnZvaWQge1xyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN3aXRjaCAoaXRlbXNbaV0uaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoaXRlbXNbaV0sIHJlc2V0UmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9JzpcclxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGl0ZW1zW2ldLCByZXN1bHRPZkV4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ14nOlxyXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoaXRlbXNbaV0sIGNhbGN1bGF0b3JSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBhZGRFdmVudChpdGVtc1tpXSwgY2hhbmdlUmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvaW5kZXgudHMiLCJleHBvcnQgZnVuY3Rpb24gYWRkRXZlbnQoaXRlbTphbnksIGNvbGJlY2s6YW55KTp2b2lkIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xiZWNrKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL2FkZEV2ZW50LnRzIiwiZXhwb3J0IGNvbnN0IHZhbHVlOnN0cmluZ1tdID0gWydDJywgJ14nLCAncmVzdWx0JywgJzcnLCAnOCcsICc5JywgJysnLCAnNCcsICc1JywgJzYnLCAnLScsICcxJywgJzInLCAnMycsICcvJywgJzAnLCAnLicsICc9JywgJyonXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvY29uc3RhbnRhLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==