import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seconds',
  standalone: true,
})
@Injectable({
  providedIn: 'root',
})
export class TimestampToSecondsPipe implements PipeTransform {
  transform(value: string): number {
    const sections = value.split(':');

    if (sections.length == 3) {
      const hours = parseInt(sections[0]);
      const minutes = parseInt(sections[1]);
      const seconds = parseInt(sections[2]);

      return hours * 3600 + minutes * 60 + seconds;
    } else if (sections.length == 2) {
      const minutes = parseInt(sections[0]);
      const seconds = parseInt(sections[1]);

      return minutes * 60 + seconds;
    }

    return 0;
  }
}
