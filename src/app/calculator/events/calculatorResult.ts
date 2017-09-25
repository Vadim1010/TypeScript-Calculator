export function calculatorResult () {
    let result:number = +document.getElementsByClassName('btn--result')[0].innerHTML;

    result *=  result;
}