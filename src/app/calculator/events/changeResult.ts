import {specialCharacterCheck} from './specialCharacterCheck'

export function changeResult(event:any):void {
    let result:string | number = document.getElementsByClassName('btn--result')[0].innerHTML,
        resultObj:object = document.getElementsByClassName('btn--result')[0],
        symbol,
        value;


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
            let firstSymbol = result[0],
                lengthResult = result.length;
            if (firstSymbol === '0' && lengthResult === 1) {
                symbol = value;
            }  else if (result === 'result') {
                symbol = value;
            } else {
                symbol = result + value;
            }
    }

    resultObj = symbol;
}

