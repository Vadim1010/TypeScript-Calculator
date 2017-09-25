export function specialCharacterCheck(value:string, result:string):string {
    let lastSymbol = result[result.length - 1],
        specialSymbols = ['+', '-', '/', '*', '.'];

    if(specialSymbols.indexOf(lastSymbol) >= 0) {
        return result;
    } else {
        return  result + value;
    }
}
