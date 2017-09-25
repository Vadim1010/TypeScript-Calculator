export function resetResult ():void {
    const  resultObj = document.getElementsByClassName('btn--result')[0];

    resultObj.innerHTML = '0';
}