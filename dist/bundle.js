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
    var resultObj = document.getElementsByClassName('btn--result')[0];
    resultObj.innerHTML = '0';
}
exports.resetResult = resetResult;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function calculatorResult() {
    var resultObj = document.getElementsByClassName('btn--result')[0];
    var result = +resultObj.innerHTML, value;
    result *= result;
    value = result + "";
    resultObj.innerHTML = value;
}
exports.calculatorResult = calculatorResult;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var specialCharacterCheck_1 = __webpack_require__(6);
function changeResult(event) {
    var resultObj = document.getElementsByClassName('btn--result')[0];
    var result = resultObj.innerHTML, symbol, value;
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
            if (result[0] === '0' && result.length === 1 || result === 'result') {
                symbol = value;
            }
            else {
                symbol = result + value;
            }
            value = typeof (event) === 'object' ? event.target.innerHTML : event;
    }
    resultObj.innerHTML = symbol;
}
exports.changeResult = changeResult;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var filterResult_1 = __webpack_require__(10);
function resultOfExpression() {
    var resultObj = document.getElementsByClassName('btn--result')[0];
    var result = resultObj.innerHTML, resultNumber;
    result = filterResult_1.filterResult(result);
    resultNumber = eval(result);
    resultNumber = +resultNumber.toFixed(5);
    resultObj.innerHTML = resultNumber;
    if (resultNumber === Infinity) {
        alert('Error');
        resultObj.innerHTML = '0';
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
    var calculator = document.createElement('div');
    calculator.classList.add('calculator');
    for (var i = 0; i < constanta_1.value.length; i++) {
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
var constanta_1 = __webpack_require__(9);
function specialCharacterCheck(value, result) {
    var lastSymbol = result[result.length - 1];
    return constanta_1.specialSymbols.indexOf(lastSymbol) >= 0 ? result : result + value;
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
function addEvent(item, collbeck) {
    item.addEventListener('click', collbeck);
}
exports.addEvent = addEvent;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.value = ['C', '^', 'result', '7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '/', '0', '.', '=', '*'];
exports.specialSymbols = ['+', '-', '/', '*', '.'];


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constanta_1 = __webpack_require__(9);
function filterResult(value) {
    for (var _i = 0, specialSymbols_1 = constanta_1.specialSymbols; _i < specialSymbols_1.length; _i++) {
        var key = specialSymbols_1[_i];
        var lastSymbol = value.substr(-1);
        if (key === lastSymbol) {
            value = value.slice(0, -1);
        }
    }
    return value;
}
exports.filterResult = filterResult;


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNGFjYWJmMzk2M2RlMGVjODAzOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXNlclJlc3VsdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL2NhbGN1bGF0b3JSZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9jaGFuZ2VSZXN1bHQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9yZXN1bHRPZkV4cHJlc3Npb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2NhbGN1bGF0b3IubW9kdWxlLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvc3BlY2lhbENoYXJhY3RlckNoZWNrLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9hZGRFdmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NhbGN1bGF0b3IvY29uc3RhbnRhLnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvZmlsdGVyUmVzdWx0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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RCxrQkFBeUIsSUFBUSxFQUFFLFFBQVk7SUFDM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUM3QyxDQUFDO0FBRkQsNEJBRUM7Ozs7Ozs7Ozs7QUNGWSxhQUFLLEdBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN0SCxzQkFBYyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7Ozs7O0FDRHhELHlDQUE0QztBQUU1QyxzQkFBOEIsS0FBYTtJQUN2QyxHQUFHLENBQUMsQ0FBWSxVQUFjLEVBQWQsNkNBQWMsRUFBZCw0QkFBYyxFQUFkLElBQWM7UUFBekIsSUFBSSxHQUFHO1FBQ1IsSUFBSSxVQUFVLEdBQVUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXpDLEVBQUUsRUFBQyxHQUFHLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQztZQUN0QixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixDQUFDO0tBQ0o7SUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2pCLENBQUM7QUFWRCxvQ0FVQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0YWNhYmYzOTYzZGUwZWM4MDM5NSIsImV4cG9ydCBmdW5jdGlvbiByZXNldFJlc3VsdCAoKTp2b2lkIHtcclxuICAgIGNvbnN0ICByZXN1bHRPYmogPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdidG4tLXJlc3VsdCcpWzBdO1xyXG5cclxuICAgIHJlc3VsdE9iai5pbm5lckhUTUwgPSAnMCc7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL3Jlc2VyUmVzdWx0LnRzIiwiZXhwb3J0IGZ1bmN0aW9uIGNhbGN1bGF0b3JSZXN1bHQgKCkge1xyXG4gICAgY29uc3QgIHJlc3VsdE9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi0tcmVzdWx0JylbMF07XHJcblxyXG4gICAgbGV0IHJlc3VsdDogbnVtYmVyID0gK3Jlc3VsdE9iai5pbm5lckhUTUwsXHJcbiAgICAgICAgdmFsdWU6c3RyaW5nO1xyXG5cclxuICAgIHJlc3VsdCAqPSAgcmVzdWx0O1xyXG5cclxuICAgIHZhbHVlID0gcmVzdWx0ICsgXCJcIjtcclxuXHJcbiAgICByZXN1bHRPYmouaW5uZXJIVE1MID0gdmFsdWU7XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL2NhbGN1bGF0b3JSZXN1bHQudHMiLCJpbXBvcnQge3NwZWNpYWxDaGFyYWN0ZXJDaGVja30gZnJvbSAnLi9zcGVjaWFsQ2hhcmFjdGVyQ2hlY2snO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVJlc3VsdChldmVudDphbnkpOnZvaWQge1xyXG4gICAgY29uc3QgIHJlc3VsdE9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi0tcmVzdWx0JylbMF07XHJcblxyXG4gICAgbGV0IHJlc3VsdDpzdHJpbmcgfCBudW1iZXIgPSByZXN1bHRPYmouaW5uZXJIVE1MLFxyXG4gICAgICAgIHN5bWJvbDpzdHJpbmcsXHJcbiAgICAgICAgdmFsdWU6c3RyaW5nO1xyXG5cclxuICAgIGlmICh0eXBlb2YoZXZlbnQpID09PSAnb2JqZWN0JyApIHtcclxuICAgICAgICB2YWx1ZSA9IGV2ZW50LnRhcmdldC5pbm5lckhUTUw7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhbHVlID0gZXZlbnQ7XHJcbiAgICB9XHJcbiAgICBzd2l0Y2ggKHZhbHVlKSB7XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgICAgIHN5bWJvbCA9IHNwZWNpYWxDaGFyYWN0ZXJDaGVjayh2YWx1ZSwgcmVzdWx0KTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gJzAnICYmICByZXN1bHQubGVuZ3RoID09PSAxIHx8IHJlc3VsdCA9PT0gJ3Jlc3VsdCcpIHtzeW1ib2wgPSB2YWx1ZX0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wgPSByZXN1bHQgKyB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YWx1ZSA9IHR5cGVvZihldmVudCkgPT09ICdvYmplY3QnICA/IGV2ZW50LnRhcmdldC5pbm5lckhUTUwgOiBldmVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHRPYmouaW5uZXJIVE1MID0gc3ltYm9sO1xyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL2NoYW5nZVJlc3VsdC50cyIsImltcG9ydCB7ZmlsdGVyUmVzdWx0fSBmcm9tICcuL2ZpbHRlclJlc3VsdCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVzdWx0T2ZFeHByZXNzaW9uICgpe1xyXG4gICAgY29uc3QgIHJlc3VsdE9iaiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bi0tcmVzdWx0JylbMF07XHJcblxyXG4gICAgbGV0IHJlc3VsdDpzdHJpbmcgfCBudW1iZXIgPSByZXN1bHRPYmouaW5uZXJIVE1MLFxyXG4gICAgICAgIHJlc3VsdE51bWJlcjphbnk7XHJcblxyXG4gICAgcmVzdWx0ID0gZmlsdGVyUmVzdWx0KHJlc3VsdCk7XHJcblxyXG4gICAgcmVzdWx0TnVtYmVyID0gZXZhbChyZXN1bHQpO1xyXG5cclxuICAgIHJlc3VsdE51bWJlciA9ICtyZXN1bHROdW1iZXIudG9GaXhlZCg1KTtcclxuXHJcbiAgICByZXN1bHRPYmouaW5uZXJIVE1MID0gcmVzdWx0TnVtYmVyO1xyXG5cclxuICAgIGlmIChyZXN1bHROdW1iZXIgPT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgYWxlcnQoJ0Vycm9yJyk7XHJcbiAgICAgICAgcmVzdWx0T2JqLmlubmVySFRNTCA9ICcwJztcclxuICAgIH1cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvcmVzdWx0T2ZFeHByZXNzaW9uLnRzIiwiaW1wb3J0IHtjcmVhdGVDYWxjdWxhdG9yfSBmcm9tICcuL2NhbGN1bGF0b3IvY2FsY3VsYXRvci5tb2R1bGUnO1xyXG5pbXBvcnQge3Jlc2V0UmVzdWx0fSBmcm9tICcuL2NhbGN1bGF0b3IvZXZlbnRzL3Jlc2VyUmVzdWx0JztcclxuaW1wb3J0IHtjYWxjdWxhdG9yUmVzdWx0fSBmcm9tICcuL2NhbGN1bGF0b3IvZXZlbnRzL2NhbGN1bGF0b3JSZXN1bHQnO1xyXG5pbXBvcnQge2NoYW5nZVJlc3VsdH0gZnJvbSAnLi9jYWxjdWxhdG9yL2V2ZW50cy9jaGFuZ2VSZXN1bHQnO1xyXG5pbXBvcnQge3Jlc3VsdE9mRXhwcmVzc2lvbn0gZnJvbSAnLi9jYWxjdWxhdG9yL2V2ZW50cy9yZXN1bHRPZkV4cHJlc3Npb24nO1xyXG5pbXBvcnQge2NyZWF0ZUV2ZW50fSBmcm9tICcuL2NhbGN1bGF0b3IvZXZlbnRzL2luZGV4JztcclxuXHJcblxyXG5jcmVhdGVDYWxjdWxhdG9yKCk7XHJcbmNyZWF0ZUV2ZW50KCk7XHJcblxyXG5kb2N1bWVudC5vbmtleWRvd24gPSBmdW5jdGlvbiAoZSk6dm9pZCB7XHJcbiAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgICAgY2FzZSAnRXNjYXBlJzpcclxuICAgICAgICAgICAgcmVzZXRSZXN1bHQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnRW50ZXInOlxyXG4gICAgICAgICAgICByZXN1bHRPZkV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnXic6XHJcbiAgICAgICAgICAgIGNhbGN1bGF0b3JSZXN1bHQoKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgY2FzZSAnLic6XHJcbiAgICAgICAgY2FzZSAnMCc6XHJcbiAgICAgICAgY2FzZSAnMSc6XHJcbiAgICAgICAgY2FzZSAnMic6XHJcbiAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgY2FzZSAnNCc6XHJcbiAgICAgICAgY2FzZSAnNSc6XHJcbiAgICAgICAgY2FzZSAnNic6XHJcbiAgICAgICAgY2FzZSAnNyc6XHJcbiAgICAgICAgY2FzZSAnOCc6XHJcbiAgICAgICAgY2FzZSAnOSc6XHJcbiAgICAgICAgICAgIGNoYW5nZVJlc3VsdChlLmtleSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG59O1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvYXBwLnRzIiwiaW1wb3J0IHt2YWx1ZX0gZnJvbSAnLi9jb25zdGFudGEnXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gIGNyZWF0ZUNhbGN1bGF0b3IoKTp2b2lkIHtcclxuICAgIGNvbnN0IGNhbGN1bGF0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBjYWxjdWxhdG9yLmNsYXNzTGlzdC5hZGQoJ2NhbGN1bGF0b3InKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aCA7IGkrKykge1xyXG4gICAgICAgIGxldCBjYWxjdWxhdG9ySXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICBjYWxjdWxhdG9ySXRlbS5jbGFzc0xpc3QuYWRkKCdidG4nKTtcclxuXHJcbiAgICAgICAgY2FsY3VsYXRvckl0ZW0uaW5uZXJIVE1MID0gdmFsdWVbaV07XHJcblxyXG4gICAgICAgIHN3aXRjaCh2YWx1ZVtpXSkge1xyXG4gICAgICAgICAgICBjYXNlICdyZXN1bHQnOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRvckl0ZW0uY2xhc3NMaXN0LmFkZCgnYnRuLS1yZXN1bHQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0b3JJdGVtLmNsYXNzTGlzdC5hZGQoJ2J0bi0tcmVkJyk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnXic6XHJcbiAgICAgICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgY2FzZSAnLyc6XHJcbiAgICAgICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgICAgICAgY2FsY3VsYXRvckl0ZW0uY2xhc3NMaXN0LmFkZCgnYnRuLS1ncmVlbicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjYWxjdWxhdG9yLmFwcGVuZENoaWxkKGNhbGN1bGF0b3JJdGVtKVxyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FsY3VsYXRvcik7XHJcbn1cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9jYWxjdWxhdG9yLm1vZHVsZS50cyIsImltcG9ydCB7c3BlY2lhbFN5bWJvbHN9IGZyb20gJy4uL2NvbnN0YW50YSdcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzcGVjaWFsQ2hhcmFjdGVyQ2hlY2sodmFsdWU6c3RyaW5nLCByZXN1bHQ6c3RyaW5nKTpzdHJpbmcge1xyXG4gICAgbGV0IGxhc3RTeW1ib2wgPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIHJldHVybiBzcGVjaWFsU3ltYm9scy5pbmRleE9mKGxhc3RTeW1ib2wpID49IDAgPyByZXN1bHQgOiByZXN1bHQgKyB2YWx1ZTtcclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2NhbGN1bGF0b3IvZXZlbnRzL3NwZWNpYWxDaGFyYWN0ZXJDaGVjay50cyIsImltcG9ydCB7YWRkRXZlbnR9IGZyb20gJy4vYWRkRXZlbnQnO1xyXG5pbXBvcnQge3Jlc2V0UmVzdWx0fSBmcm9tICcuL3Jlc2VyUmVzdWx0JztcclxuaW1wb3J0IHtjYWxjdWxhdG9yUmVzdWx0fSBmcm9tICcuL2NhbGN1bGF0b3JSZXN1bHQnO1xyXG5pbXBvcnQge2NoYW5nZVJlc3VsdH0gZnJvbSAnLi9jaGFuZ2VSZXN1bHQnO1xyXG5pbXBvcnQge3Jlc3VsdE9mRXhwcmVzc2lvbn0gZnJvbSAnLi9yZXN1bHRPZkV4cHJlc3Npb24nO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVFdmVudCAoKTp2b2lkIHtcclxuICAgIGxldCBpdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2J0bicpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzd2l0Y2ggKGl0ZW1zW2ldLmlubmVySFRNTCkge1xyXG4gICAgICAgICAgICBjYXNlICdDJzpcclxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGl0ZW1zW2ldLCByZXNldFJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPSc6XHJcbiAgICAgICAgICAgICAgICBhZGRFdmVudChpdGVtc1tpXSwgcmVzdWx0T2ZFeHByZXNzaW9uKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICdeJzpcclxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGl0ZW1zW2ldLCBjYWxjdWxhdG9yUmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoaXRlbXNbaV0sIGNoYW5nZVJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9pbmRleC50cyIsImV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudChpdGVtOmFueSwgY29sbGJlY2s6YW55KTp2b2lkIHtcclxuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjb2xsYmVjayk7XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jYWxjdWxhdG9yL2V2ZW50cy9hZGRFdmVudC50cyIsImV4cG9ydCBjb25zdCB2YWx1ZTpzdHJpbmdbXSA9IFsnQycsICdeJywgJ3Jlc3VsdCcsICc3JywgJzgnLCAnOScsICcrJywgJzQnLCAnNScsICc2JywgJy0nLCAnMScsICcyJywgJzMnLCAnLycsICcwJywgJy4nLCAnPScsICcqJ107XHJcbmV4cG9ydCBjb25zdCBzcGVjaWFsU3ltYm9scyA9IFsnKycsICctJywgJy8nLCAnKicsICcuJ107XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9jb25zdGFudGEudHMiLCJpbXBvcnQge3NwZWNpYWxTeW1ib2xzfSBmcm9tICcuLi9jb25zdGFudGEnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlclJlc3VsdCAodmFsdWU6IHN0cmluZyk6c3RyaW5nIHtcclxuICAgIGZvciAobGV0IGtleSBvZiBzcGVjaWFsU3ltYm9scykge1xyXG4gICAgICAgIGxldCBsYXN0U3ltYm9sOnN0cmluZyA9IHZhbHVlLnN1YnN0cigtMSk7XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0gbGFzdFN5bWJvbCkge1xyXG4gICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZTtcclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY2FsY3VsYXRvci9ldmVudHMvZmlsdGVyUmVzdWx0LnRzIl0sInNvdXJjZVJvb3QiOiIifQ==