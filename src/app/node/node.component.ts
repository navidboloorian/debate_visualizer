import {
  Component,
  Input,
  ElementRef,
  OnInit,
  HostListener,
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { AudioService } from '../audio.service';
import { SecondsToTimestampPipe } from '../pipes/seconds-to-timestamp.pipe';

type NodeInfo = {
  id: number;
  summary: string;
  speaker: string;
  time?: number;
};

@Component({
  selector: 'dv-node',
  standalone: true,
  imports: [NgStyle, SecondsToTimestampPipe],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent implements OnInit {
  @Input() nodeInfo!: NodeInfo;
  @Input() colors: { primary: string; accent: string } = {
    primary: '',
    accent: '',
  };

  // elementRef provides access to the element for node size calculation
  constructor(
    public elementRef: ElementRef,
    public audioService: AudioService,
  ) {}

  @HostListener('click') onClick() {
    if (this.nodeInfo.time) {
      this.audioService.setTime(this.nodeInfo.time);
    }
  }

  ngOnInit(): void {}
}
