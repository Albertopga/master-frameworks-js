import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'espar'
})
export class EsParPipe implements PipeTransform {

    transform(value: any) {
        let espar = " El año no par"
        if (value % 2 == 0) {
            espar = " El año es par"
        }
        return "El año es: " + value + espar;
    }

}