import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abs',
  standalone: true,
})
export class AbsoluteValuePipe implements PipeTransform {
  transform(number: number): number {
    return Math.abs(number);
  }
}
