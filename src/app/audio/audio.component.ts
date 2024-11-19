import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { AudioService } from '../audio.service';
import { SecondsToTimestampPipe } from '../pipes/seconds-to-timestamp.pipe';

@Component({
  selector: 'dv-audio',
  standalone: true,
  imports: [SecondsToTimestampPipe],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss',
})
export class AudioComponent implements AfterViewInit {
  @ViewChild('audio') audioElement!: ElementRef<HTMLAudioElement>;
  @ViewChild('slider') sliderElement!: ElementRef<HTMLInputElement>;
  @ViewChild('play') play!: ElementRef<HTMLButtonElement>;
  @ViewChild('pause') pause!: ElementRef<HTMLButtonElement>;

  constructor(public audioService: AudioService) {}

  ngAfterViewInit(): void {
    this.audioService.bindElements(this.audioElement, this.sliderElement);

    this.play.nativeElement.onclick = () => {
      this.audioElement.nativeElement.play();
    };

    this.pause.nativeElement.onclick = () => {
      this.audioElement.nativeElement.pause();
    };
  }

  protected readonly console = console;
  protected readonly NaN = NaN;
}
