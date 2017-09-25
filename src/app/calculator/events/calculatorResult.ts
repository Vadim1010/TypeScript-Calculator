export function calculatorResult () {
    const  resultObj = document.getElementsByClassName('btn--result')[0];

    let result: number = +resultObj.innerHTML,
        value:string;

    result *=  result;

    value = result + "";

    resultObj.innerHTML = value;
}