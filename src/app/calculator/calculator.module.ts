import {value} from './constanta'

export function  createCalculator():void {
    let calculator = document.createElement('div'),
        i ;

    calculator.classList.add('calculator');

    for ( i = 0; i < value.length ; i++) {
        let calculatorItem = document.createElement('div');

        calculatorItem.classList.add('btn');

        calculatorItem.innerHTML = value[i];

        switch(value[i]) {
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

        calculator.appendChild(calculatorItem)
    }

    document.body.appendChild(calculator);
}

