import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'beginWithDr',
  standalone: false
})
export class BeginWithDrPipe implements PipeTransform {

  transform(value: string): string {
    return "Dr. "+value;
  }

}
