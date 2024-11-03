import { Component, Input, ElementRef, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

type NodeInfo = {
  id: number;
  summary: string;
  speaker: string;
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

  constructor(public elementRef: ElementRef) {}
  ngOnInit(): void {}
}
