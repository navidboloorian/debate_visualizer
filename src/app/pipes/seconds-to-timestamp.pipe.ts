import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestamp',
  standalone: true,
})
export class SecondsToTimestampPipe implements PipeTransform {
  transform(value: number): string {
    value = Math.floor(value);

    const hours = Math.floor(value / 3600);

    value -= hours * 3600;

    const minutes = Math.floor(value / 60);
    const seconds = value % 60;

    let hoursString = '';
    let minutesString = '';
    let secondsString = '';

    if (hours < 10) {
      hoursString = `0${hours}`;
    } else {
      hoursString = hours.toString();
    }

    if (minutes < 10) {
      minutesString = `0${minutes}`;
    } else {
      minutesString = minutes.toString();
    }

    if (seconds < 10) {
      secondsString = `0${seconds}`;
    } else {
      secondsString = seconds.toString();
    }

    return `${hoursString}:${minutesString}:${secondsString}`;
  }
}
