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
    resultObj.innerHTML = symbol;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmIzNjUwZjBiMGJmYzM0ZTEwYzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXNlclJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL2NhbGN1bGF0b3JSZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9jaGFuZ2VSZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXN1bHRPZkV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvc3BlY2lhbENoYXJhY3RlckNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9hZGRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NhbGN1bGF0b3IvY29uc3RhbnRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFD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b0JDOzs7Ozs7Ozs7O0FDM0JELGtCQUF5QixJQUFRLEVBQUUsT0FBVztJQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUM7QUFGRCw0QkFFQzs7Ozs7Ozs7OztBQ0ZZLGFBQUssR0FBWSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDZiMzY1MGYwYjBiZmMzNGUxMGMwIiwiZXhwb3J0IGZ1bmN0aW9uIHJlc2V0UmVzdWx0ICgpOnZvaWQge1xyXG4gICAgbGV0IHJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi0tcmVzdWx0JylbMF07XHJcblxyXG4gICAgcmVzdWx0LmlubmVySFRNTCA9ICcwJztcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvcmVzZXJSZXN1bHQudHMiLCJleHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRvclJlc3VsdCAoKSB7XHJcbiAgICBsZXQgcmVzdWx0Om51bWJlciA9ICtkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tLXJlc3VsdCcpWzBdLmlubmVySFRNTDtcclxuXHJcbiAgICByZXN1bHQgKj0gIHJlc3VsdDtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvY2FsY3VsYXRvclJlc3VsdC50cyIsImltcG9ydCB7c3BlY2lhbENoYXJhY3RlckNoZWNrfSBmcm9tICcuL3NwZWNpYWxDaGFyYWN0ZXJDaGVjaydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSZXN1bHQoZXZlbnQ6YW55KTp2b2lkIHtcclxuICAgIGxldCByZXN1bHQ6c3RyaW5nIHwgbnVtYmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLS1yZXN1bHQnKVswXS5pbm5lckhUTUwsXHJcbiAgICAgICAgcmVzdWx0T2JqID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuLS1yZXN1bHQnKVswXSxcclxuICAgICAgICBzeW1ib2wsXHJcbiAgICAgICAgdmFsdWU7XHJcblxyXG5cclxuICAgIGlmICh0eXBlb2YoZXZlbnQpID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gZXZlbnQ7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgIHN5bWJvbCA9IHNwZWNpYWxDaGFyYWN0ZXJDaGVjayh2YWx1ZSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgbGV0IGZpcnN0U3ltYm9sID0gcmVzdWx0WzBdLFxyXG4gICAgICAgICAgICAgICAgbGVuZ3RoUmVzdWx0ID0gcmVzdWx0Lmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGZpcnN0U3ltYm9sID09PSAnMCcgJiYgbGVuZ3RoUmVzdWx0ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSAgZWxzZSBpZiAocmVzdWx0ID09PSAncmVzdWx0Jykge1xyXG4gICAgICAgICAgICAgICAgc3ltYm9sID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSByZXN1bHQgKyB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVzdWx0T2JqLmlubmVySFRNTCA9IHN5bWJvbDtcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9jaGFuZ2VSZXN1bHQudHMiLCJleHBvcnQgZnVuY3Rpb24gcmVzdWx0T2ZFeHByZXNzaW9uICgpe1xyXG4gICAgbGV0IHJlc3VsdDpzdHJpbmcgfCBudW1iZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tLXJlc3VsdCcpWzBdLmlubmVySFRNTCxcclxuICAgICAgICByZXN1bHRPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tLXJlc3VsdCcpWzBdLFxyXG4gICAgICAgIHJlc3VsdE51bWJlcjphbnk7XHJcblxyXG4gICAgcmVzdWx0TnVtYmVyID0gZXZhbChyZXN1bHQpO1xyXG5cclxuICAgIHJlc3VsdE51bWJlciA9ICtyZXN1bHROdW1iZXIudG9GaXhlZCg1KTtcclxuXHJcbiAgICByZXN1bHRPYmouaW5uZXJIVE1MID0gcmVzdWx0TnVtYmVyO1xyXG5cclxuICAgIGlmIChyZXN1bHROdW1iZXIgPT09ICdJbmZpbml0eScpIHtcclxuICAgICAgICBhbGVydCgnRXJyb3InKTtcclxuICAgICAgICByZXN1bHQgPSAwO1xyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXN1bHRPZkV4cHJlc3Npb24udHMiLCJpbXBvcnQge2NyZWF0ZUNhbGN1bGF0b3J9IGZyb20gJy4vY2FsY3VsYXRvci9jYWxjdWxhdG9yLm1vZHVsZSc7XHJcbmltcG9ydCB7cmVzZXRSZXN1bHR9IGZyb20gJy4vY2FsY3VsYXRvci9ldmVudHMvcmVzZXJSZXN1bHQnO1xyXG5pbXBvcnQge2NhbGN1bGF0b3JSZXN1bHR9IGZyb20gJy4vY2FsY3VsYXRvci9ldmVudHMvY2FsY3VsYXRvclJlc3VsdCc7XHJcbmltcG9ydCB7Y2hhbmdlUmVzdWx0fSBmcm9tICcuL2NhbGN1bGF0b3IvZXZlbnRzL2NoYW5nZVJlc3VsdCc7XHJcbmltcG9ydCB7cmVzdWx0T2ZFeHByZXNzaW9ufSBmcm9tICcuL2NhbGN1bGF0b3IvZXZlbnRzL3Jlc3VsdE9mRXhwcmVzc2lvbic7XHJcbmltcG9ydCB7Y3JlYXRlRXZlbnR9IGZyb20gJy4vY2FsY3VsYXRvci9ldmVudHMvaW5kZXgnO1xyXG5cclxuXHJcbmNyZWF0ZUNhbGN1bGF0b3IoKTtcclxuY3JlYXRlRXZlbnQoKTtcclxuXHJcbmRvY3VtZW50Lm9ua2V5ZG93biA9IGZ1bmN0aW9uIChlKTp2b2lkIHtcclxuICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICBjYXNlICdFc2NhcGUnOlxyXG4gICAgICAgICAgICByZXNldFJlc3VsdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIHJlc3VsdE9mRXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdeJzpcclxuICAgICAgICAgICAgY2FsY3VsYXRvclJlc3VsdCgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICBjYXNlICctJzpcclxuICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICBjYXNlICcqJzpcclxuICAgICAgICBjYXNlICcuJzpcclxuICAgICAgICBjYXNlICcwJzpcclxuICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICBjYXNlICcyJzpcclxuICAgICAgICBjYXNlICczJzpcclxuICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICBjYXNlICc1JzpcclxuICAgICAgICBjYXNlICc2JzpcclxuICAgICAgICBjYXNlICc3JzpcclxuICAgICAgICBjYXNlICc4JzpcclxuICAgICAgICBjYXNlICc5JzpcclxuICAgICAgICAgICAgY2hhbmdlUmVzdWx0KGUua2V5KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9hcHAudHMiLCJpbXBvcnQge3ZhbHVlfSBmcm9tICcuL2NvbnN0YW50YSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiAgY3JlYXRlQ2FsY3VsYXRvcigpOnZvaWQge1xyXG4gICAgbGV0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSxcclxuICAgICAgICBpIDtcclxuXHJcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3InKTtcclxuXHJcbiAgICBmb3IgKCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgIGxldCBjYWxjdWxhdG9ySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBjYWxjdWxhdG9ySXRlbS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHJcbiAgICAgICAgY2FsY3VsYXRvckl0ZW0uaW5uZXJIVE1MID0gdmFsdWVbaV07XHJcblxyXG4gICAgICAgIHN3aXRjaCh2YWx1ZVtpXSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXN1bHQnOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRvckl0ZW0uY2xhc3NMaXN0LmFkZCgnYnRuLS1yZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0b3JJdGVtLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcmVkJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXic6XHJcbiAgICAgICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRvckl0ZW0uY2xhc3NMaXN0LmFkZCgnYnRuLS1ncmVlbicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWxjdWxhdG9yLmFwcGVuZENoaWxkKGNhbGN1bGF0b3JJdGVtKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FsY3VsYXRvcik7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLm1vZHVsZS50cyIsImV4cG9ydCBmdW5jdGlvbiBzcGVjaWFsQ2hhcmFjdGVyQ2hlY2sodmFsdWU6c3RyaW5nLCByZXN1bHQ6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgbGV0IGxhc3RTeW1ib2wgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdLFxyXG4gICAgICAgIHNwZWNpYWxTeW1ib2xzID0gWycrJywgJy0nLCAnLycsICcqJywgJy4nXTtcclxuXHJcbiAgICBpZihzcGVjaWFsU3ltYm9scy5pbmRleE9mKGxhc3RTeW1ib2wpID49IDApIHtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gIHJlc3VsdCArIHZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvc3BlY2lhbENoYXJhY3RlckNoZWNrLnRzIiwiaW1wb3J0IHthZGRFdmVudH0gZnJvbSAnLi9hZGRFdmVudCc7XHJcbmltcG9ydCB7cmVzZXRSZXN1bHR9IGZyb20gJy4vcmVzZXJSZXN1bHQnO1xyXG5pbXBvcnQge2NhbGN1bGF0b3JSZXN1bHR9IGZyb20gJy4vY2FsY3VsYXRvclJlc3VsdCc7XHJcbmltcG9ydCB7Y2hhbmdlUmVzdWx0fSBmcm9tICcuL2NoYW5nZVJlc3VsdCc7XHJcbmltcG9ydCB7cmVzdWx0T2ZFeHByZXNzaW9ufSBmcm9tICcuL3Jlc3VsdE9mRXhwcmVzc2lvbic7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUV2ZW50ICgpOnZvaWQge1xyXG4gICAgbGV0IGl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYnRuJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN3aXRjaCAoaXRlbXNbaV0uaW5uZXJIVE1MKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0MnOlxyXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoaXRlbXNbaV0sIHJlc2V0UmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9JzpcclxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGl0ZW1zW2ldLCByZXN1bHRPZkV4cHJlc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ14nOlxyXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoaXRlbXNbaV0sIGNhbGN1bGF0b3JSZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBhZGRFdmVudChpdGVtc1tpXSwgY2hhbmdlUmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvaW5kZXgudHMiLCJleHBvcnQgZnVuY3Rpb24gYWRkRXZlbnQoaXRlbTphbnksIGNvbGJlY2s6YW55KTp2b2lkIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xiZWNrKTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL2FkZEV2ZW50LnRzIiwiZXhwb3J0IGNvbnN0IHZhbHVlOnN0cmluZ1tdID0gWydDJywgJ14nLCAncmVzdWx0JywgJzcnLCAnOCcsICc5JywgJysnLCAnNCcsICc1JywgJzYnLCAnLScsICcxJywgJzInLCAnMycsICcvJywgJzAnLCAnLicsICc9JywgJyonXTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvY29uc3RhbnRhLnRzIl0sInNvdXJjZVJvb3QiOiIifQ==