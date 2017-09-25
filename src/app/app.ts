import {createCalculator} from './calculator/calculator.module';
import {resetResult} from './calculator/events/reserResult';
import {calculatorResult} from './calculator/events/calculatorResult';
import {changeResult} from './calculator/events/changeResult';
import {resultOfExpression} from './calculator/events/resultOfExpression';
import {createEvent} from './calculator/events/index';


createCalculator();
createEvent();

document.onkeydown = function (e):void {
    switch (e.key) {
        case 'Escape':
            resetResult();
            break;
        case 'Enter':
            resultOfExpression();
            break;
        case '^':
            calculatorResult();
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
            changeResult(e.key);
            break;
    }
};


