import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { AudioService } from '../audio.service';
import { TimeService } from '../time.service';

@Component({
  selector: 'dv-audio',
  standalone: true,
  imports: [],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss',
})
export class AudioComponent implements AfterViewInit {
  @ViewChild('audio') audioElement!: ElementRef<HTMLAudioElement>;
  @ViewChild('slider') sliderElement!: ElementRef<HTMLInputElement>;
  @ViewChild('play') play!: ElementRef<HTMLButtonElement>;
  @ViewChild('pause') pause!: ElementRef<HTMLButtonElement>;

  constructor(
    public audioService: AudioService,
    public timeService: TimeService
  ) {}

  ngAfterViewInit(): void {
    this.audioService.bindElements(this.audioElement, this.sliderElement);

    this.play.nativeElement.onclick = () => {
      this.audioElement.nativeElement.play();
    };

    this.pause.nativeElement.onclick = () => {
      this.audioElement.nativeElement.pause();
    };
  }
}
