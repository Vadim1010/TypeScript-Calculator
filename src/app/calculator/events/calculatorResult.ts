import {value} from "../constanta";

export function calculatorResult () {
    let result: number = +document.getElementsByClassName('btn--result')[0].innerHTML,
        resultObj = document.getElementsByClassName('btn--result')[0],
        value:string;

    result *=  result;

    value = result + "";

    resultObj.innerHTML = value;
}