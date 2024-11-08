import {
  Component,
  Input,
  ElementRef,
  OnInit,
  HostListener,
} from '@angular/core';
import { NgStyle } from '@angular/common';
import { AudioService } from '../audio.service';
import { TimeService } from '../time.service';

type NodeInfo = {
  id: number;
  summary: string;
  speaker: string;
  timestamp?: string;
};

@Component({
  selector: 'dv-node',
  standalone: true,
  imports: [NgStyle],
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
    public timeService: TimeService
  ) {}

  @HostListener('click') onClick() {
    if (this.nodeInfo.timestamp) {
      this.audioService.setTime(
        this.timeService.timeStringToSeconds(this.nodeInfo.timestamp)
      );
    }
  }

  ngOnInit(): void {}
}
