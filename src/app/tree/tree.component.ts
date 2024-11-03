import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { TreeDatum, TreeService } from '../tree.service';
import { NodeComponent } from '../node/node.component';
import * as d3 from 'd3';
import { FlatDatum } from '../data.service';
import { FlextreeNode } from 'd3-flextree';

@Component({
  selector: 'dv-tree',
  standalone: true,
  imports: [NodeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
})
export class TreeComponent implements OnInit, AfterViewInit {
  @Input() data!: FlatDatum[];
  @Input() sizes!: number[][];
  @ViewChild('svg') treeContainer!: ElementRef;
  speakerColors: Map<string, { primary: string; accent: string }>;
  tree!: FlextreeNode<TreeDatum | null>;

  constructor(private _treeService: TreeService) {
    this.speakerColors = new Map();
  }

  ngOnInit(): void {
    this.assignColors();
    this.tree = this._treeService.generateTree(this.data, this.sizes);
  }

  ngAfterViewInit(): void {
    this.initZoomAndPan();
  }

  assignColors() {
    const colors = [
      { primary: '#216057', accent: '#143a34' },
      { primary: '#3d1a4c', accent: '#1e0d26' },
    ];

    for (let i = 0; i < this.data.length; i++) {
      const { speaker } = this.data[i];

      if (this.speakerColors.has(speaker)) continue;

      const speakerColor = colors[i % colors.length];
      this.speakerColors.set(speaker, speakerColor);
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
      initialTreePosition.y
    );
    svgElement.call(zoom);
  }
}
