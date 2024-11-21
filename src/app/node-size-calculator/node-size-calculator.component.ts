import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { DataService, FlatDatum } from '../data.service';
import { TreeService } from '../tree.service';

@Component({
  selector: 'dv-node-size-calculator',
  standalone: true,
  imports: [NodeComponent],
  templateUrl: './node-size-calculator.component.html',
  styleUrl: './node-size-calculator.component.scss',
})
export class NodeSizeCalculatorComponent implements AfterViewInit {
  @ViewChildren('node') nodes!: QueryList<NodeComponent>;
  data: FlatDatum[];

  constructor(
    private _dataService: DataService,
    private _treeService: TreeService,
  ) {
    this.data = this._dataService.data;
  }

  ngAfterViewInit(): void {
    this.calculateNodeSizes();
  }

  calculateNodeSizes(): void {
    const sizes: number[][] = [];

    // calculate the size of all nodes
    for (const node of this.nodes) {
      const nativeElement = node.elementRef.nativeElement;

      const gap = 20;

      const width = nativeElement.offsetWidth + gap;
      const height = nativeElement.offsetHeight;

      // swap height and width because default orientation of the flextree is vertical and we want a horizontal tree
      sizes.push([height, width]);
    }

    this._treeService.nodeSizesCalculated.set(true);
    this._treeService.nodeSizes.set(sizes);
  }
}
