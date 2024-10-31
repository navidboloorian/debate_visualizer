import { Component, Input, ElementRef } from '@angular/core';

type NodeInfo = {
  id: number;
  summary: string;
};

@Component({
  selector: 'dv-node',
  standalone: true,
  imports: [],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent {
  @Input() nodeInfo!: NodeInfo;

  constructor(public elementRef: ElementRef) {}
}
