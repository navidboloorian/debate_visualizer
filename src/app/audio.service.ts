import { ElementRef, Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  currentTime: WritableSignal<number>;
  elapsedTime: WritableSignal<number>;
  audioElement: HTMLAudioElement | null;
  sliderElement: HTMLInputElement | null;

  constructor() {
    this.currentTime = signal(0);
    this.elapsedTime = signal(0);
    this.audioElement = null;
    this.sliderElement = null;
  }

  bindElements(
    audioElement: ElementRef<HTMLAudioElement>,
    sliderElement: ElementRef<HTMLInputElement>,
  ) {
    this._bindAudioElement(audioElement);
    this._bindSliderElement(sliderElement);

    this._initializeSlider();
  }

  setTime(time: number) {
    this.audioElement!.currentTime = time;
    this.currentTime.set(time);
  }

  private _bindAudioElement(audioElement: ElementRef<HTMLAudioElement>) {
    this.audioElement = audioElement.nativeElement;
  }

  private _bindSliderElement(sliderElement: ElementRef<HTMLInputElement>) {
    this.sliderElement = sliderElement.nativeElement;
  }

  private _initializeSlider() {
    this.sliderElement!.onchange = () => {
      this.audioElement!.currentTime = Number(this.sliderElement!.value);
    };

    this.audioElement!.onloadedmetadata = () => {
      this.sliderElement!.max = this.audioElement!.duration.toString();

      if (this.audioElement!.duration > this.elapsedTime()) {
        this.elapsedTime.set(this.audioElement!.currentTime);
      }
    };

    this.audioElement!.ontimeupdate = () => {
      const roundedTime = Math.floor(this.audioElement!.currentTime);

      if (roundedTime > this.elapsedTime()) {
        this.elapsedTime.set(roundedTime);
      }

      this.currentTime.set(roundedTime);
    };
  }
}
