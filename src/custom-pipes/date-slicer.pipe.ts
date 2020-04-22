import { Pipe,PipeTransform } from '@angular/core';


@Pipe({ name: 'dateSlicer' })


export class DateSlicer implements PipeTransform {
    transform(date:String) {
        let x = date.split(" ");
        return x[0];
    }
}