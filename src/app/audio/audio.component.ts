import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { AudioService } from '../audio.service';
import { SecondsToTimestampPipe } from '../pipes/seconds-to-timestamp.pipe';
import { DataService } from '../data.service';
import { TimestampToSecondsPipe } from '../pipes/timestamp-to-seconds.pipe';

@Component({
  selector: 'dv-audio',
  standalone: true,
  imports: [SecondsToTimestampPipe, TimestampToSecondsPipe],
  templateUrl: './audio.component.html',
  styleUrl: './audio.component.scss',
})
export class AudioComponent implements AfterViewInit {
  @ViewChild('audio') audioElement!: ElementRef<HTMLAudioElement>;
  @ViewChild('slider') sliderElement!: ElementRef<HTMLInputElement>;
  @ViewChild('play') play!: ElementRef<HTMLButtonElement>;
  @ViewChild('pause') pause!: ElementRef<HTMLButtonElement>;
  @ViewChild('markers') markers!: ElementRef<HTMLDivElement>;

  constructor(
    public audioService: AudioService,
    public dataService: DataService,
    private _timestampToSecondsPipe: TimestampToSecondsPipe,
  ) {}

  ngAfterViewInit(): void {
    this.audioService.bindElements(this.audioElement, this.sliderElement);

    this.play.nativeElement.onclick = () => {
      this.audioElement.nativeElement.play();
    };

    this.pause.nativeElement.onclick = () => {
      this.audioElement.nativeElement.pause();
    };

    this.audioElement.nativeElement.ondurationchange = () => {
      this.createMarkers();
    };
  }

  createMarkers(): void {
    if (!this.audioElement.nativeElement.duration) return;

    const nativeElement = this.markers.nativeElement;
    const totalSeconds = Math.floor(this.audioElement.nativeElement.duration);

    console.log(this.audioElement.nativeElement.duration);

    for (const datum of this.dataService.data) {
      if (datum.timestamp) {
        const marker = document.createElement('div');

        const markerSeconds = this._timestampToSecondsPipe.transform(
          datum.timestamp,
        );

        console.log(markerSeconds);

        const leftPosition = (markerSeconds / totalSeconds) * 100;

        marker.style.position = 'absolute';
        marker.style.left = `${leftPosition}%`;
        marker.style.background = 'red';
        marker.style.width = '2px';
        marker.style.height = '100%';

        nativeElement.appendChild(marker);
      }
    }
  }
}
