import {addEvent} from './addEvent';
import {resetResult} from './reserResult';
import {calculatorResult} from './calculatorResult';
import {changeResult} from './changeResult';
import {resultOfExpression} from './resultOfExpression';


export function createEvent ():void {
    let items = document.getElementsByClassName('btn');

    for (let i = 0; i < items.length; i++) {
        switch (items[i].innerHTML) {
            case 'C':
                addEvent(items[i], resetResult);
                break;
            case '=':
                addEvent(items[i], resultOfExpression);
                break;
            case '^':
                addEvent(items[i], calculatorResult);
                break;
            default:
                addEvent(items[i], changeResult);
        }
    }
}