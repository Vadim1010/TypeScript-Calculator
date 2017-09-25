export function resultOfExpression (){
    let result:string | number = document.getElementsByClassName('btn--result')[0].innerHTML,
        resultObj = document.getElementsByClassName('btn--result')[0],
        resultNumber:any;

    resultNumber = eval(result);

    resultNumber = +resultNumber.toFixed(5);

    resultObj.innerHTML = resultNumber;

    if (resultNumber === 'Infinity') {
        alert('Error');
        result = 0;
    }
}