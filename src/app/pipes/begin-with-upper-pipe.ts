import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beginWithUpper',
  standalone: false
})
export class BeginWithUpperPipe implements PipeTransform {

  transform(value: string): string {
    return "Ing. "+value[0].toUpperCase()+value.substring(1);
  }

}
