import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrowCoordinates',
  standalone: true,
})
export class ArrowCoordinatesPipe implements PipeTransform {
  transform(value: { x1: number; x2: number; y1: number; y2: number }): {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
  } {
    const { x1, x2, y1, y2 } = value;

    const transformedX2 = x2 - x1;
    let transformedY1: number;
    let transformedY2: number;

    if (y1 > y2) {
      transformedY1 = y1 - y2;
      transformedY2 = 0;
    } else if (y1 < y2) {
      transformedY1 = 0;
      transformedY2 = y2 - y1;
    } else {
      transformedY1 = 0;
      transformedY2 = 0;
    }

    return { x1: 0, x2: transformedX2, y1: transformedY1, y2: transformedY2 };
  }
}
