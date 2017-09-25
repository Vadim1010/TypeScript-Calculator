import {specialSymbols} from '../constanta'

export function specialCharacterCheck(value:string, result:string):string {
    let lastSymbol = result[result.length - 1];

    return specialSymbols.indexOf(lastSymbol) >= 0 ? result : result + value;
}
