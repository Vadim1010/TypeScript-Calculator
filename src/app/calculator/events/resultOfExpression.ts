import {filterResult} from './filterResult';

export function resultOfExpression (){
    const  resultObj = document.getElementsByClassName('btn--result')[0];

    let result:string | number = resultObj.innerHTML,
        resultNumber:any;

    result = filterResult(result);

    resultNumber = eval(result);

    resultNumber = +resultNumber.toFixed(5);

    resultObj.innerHTML = resultNumber;

    if (resultNumber === Infinity) {
        alert('Error');
        resultObj.innerHTML = '0';
    }
}