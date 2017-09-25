import {specialSymbols} from '../constanta';

export function filterResult (value: string):string {
    for (let key of specialSymbols) {
        let lastSymbol:string = value.substr(-1);

        if(key === lastSymbol) {
          value = value.slice(0, -1);
        }
    }

    return value;
}