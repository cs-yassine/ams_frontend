import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beginWithUpper2',
  standalone: false
})
export class BeginWithUpper2Pipe implements PipeTransform {

  transform(value: string): string {
    return value.charAt(0).toUpperCase() + value.substring(1) ;
}

}
