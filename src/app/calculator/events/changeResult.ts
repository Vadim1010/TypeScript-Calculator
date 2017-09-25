import {specialCharacterCheck} from './specialCharacterCheck';

export function changeResult(event:any):void {
    const  resultObj = document.getElementsByClassName('btn--result')[0];

    let result:string | number = resultObj.innerHTML,
        symbol:string,
        value:string;

    if (typeof(event) === 'object' ) {
        value = event.target.innerHTML;
    } else {
        value = event;
    }
    switch (value) {
        case '/':
        case '*':
        case '-':
        case '+':
        case '.':
            symbol = specialCharacterCheck(value, result);
            break;
        default:
            if (result[0] === '0' &&  result.length === 1 || result === 'result') {symbol = value} else {
                symbol = result + value
            }

            value = typeof(event) === 'object'  ? event.target.innerHTML : event;
    }

    resultObj.innerHTML = symbol;
}

