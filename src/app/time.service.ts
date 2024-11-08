import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  constructor() {}

  timeStringToSeconds(timeString: string): number {
    const minutes = Number(timeString.slice(3, 5));
    const seconds = Number(timeString.slice(7, 9));

    return minutes * 60 + seconds;
  }

  timeSecondsToString(timeNumber: number): string {
    timeNumber = Math.floor(timeNumber);

    const minutes = Math.floor(timeNumber / 60);
    const seconds = timeNumber % 60;

    let minutesString = '';
    let secondsString = '';

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

    return `${minutesString}:${secondsString}`;
  }
}
