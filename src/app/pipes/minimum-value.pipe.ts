import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'min',
  standalone: true,
})
export class MinimumValuePipe implements PipeTransform {
  transform(value: { number1: number; number2: number }): number {
    const { number1, number2 } = value;

    return Math.min(number1, number2);
  }
}
