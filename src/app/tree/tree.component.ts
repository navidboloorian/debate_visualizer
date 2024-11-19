import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TreeDatum, TreeService } from '../tree.service';
import { NodeComponent } from '../node/node.component';
import * as d3 from 'd3';
import { DataService, FlatDatum } from '../data.service';
import { FlextreeNode } from 'd3-flextree';
import { AudioService } from '../audio.service';
import { ArrowComponent } from '../arrow/arrow.component';
import { ArrowCoordinatesPipe } from '../pipes/arrow-coordinates.pipe';
import { NgIf } from '@angular/common';
import { MinimumValuePipe } from '../pipes/minimum-value.pipe';
import { AbsoluteValuePipe } from '../pipes/absolute-value.pipe';

@Component({
  selector: 'dv-tree',
  standalone: true,
  imports: [
    NodeComponent,
    ArrowComponent,
    ArrowCoordinatesPipe,
    MinimumValuePipe,
    NgIf,
    AbsoluteValuePipe,
  ],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
})
export class TreeComponent implements OnInit, AfterViewInit {
  @ViewChild('svg') treeContainer!: ElementRef;
  data: FlatDatum[];
  speakerColors: Map<string, { primary: string; accent: string }>;
  tree!: FlextreeNode<TreeDatum | null>;

  constructor(
    private _treeService: TreeService,
    private _dataService: DataService,
    public audioService: AudioService,
  ) {
    this.speakerColors = new Map();
    this.data = _dataService.data;
  }

  ngOnInit(): void {
    this.assignColors();
    this.tree = this._treeService.generateTree(this.data);
  }

  ngAfterViewInit(): void {
    this.initZoomAndPan();
  }

  calculateArrowCoordinates(
    x1: number,
    x2: number,
    y1: number,
    y2: number,
  ): { x1: number; x2: number; y1: number; y2: number } {
    return { x1: x1, x2: x2, y1: y1, y2: y2 };
  }

  assignColors() {
    const colors = [
      { primary: '#216057', accent: '#143a34' },
      { primary: '#3d1a4c', accent: '#1e0d26' },
    ];

    let colorIndex = 0;

    for (let i = 0; i < this.data.length; i++) {
      const { speaker } = this.data[i];

      if (this.speakerColors.has(speaker)) continue;

      const speakerColor = colors[colorIndex % colors.length];
      this.speakerColors.set(speaker, speakerColor);

      colorIndex++;
    }
  }

  initZoomAndPan() {
    const svgElement = d3.select(this.treeContainer.nativeElement);
    const content = svgElement.select<SVGGElement>('g');
    const zoom = d3
      .zoom()
      .scaleExtent([1, 1])
      .on('zoom', (event) => {
        content.attr('transform', event.transform);
      });

    const initialTreePosition = { x: 200, y: 500 };

    svgElement.call(
      zoom.translateBy,
      initialTreePosition.x,
      initialTreePosition.y,
    );
    svgElement.call(zoom);
  }
}
