import { Component, Input } from '@angular/core';
import { AbsoluteValuePipe } from '../pipes/absolute-value.pipe';
import { AudioService } from '../audio.service';

@Component({
  selector: 'dv-arrow',
  standalone: true,
  imports: [AbsoluteValuePipe],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss',
})
export class ArrowComponent {
  @Input() x1!: number;
  @Input() x2!: number;
  @Input() y1!: number;
  @Input() y2!: number;
  @Input() time?: number;

  constructor(public audioService: AudioService) {}
}
