import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  WritableSignal,
  signal,
} from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { DataService, FlatDatum } from '../data.service';
import { TreeComponent } from '../tree/tree.component';

@Component({
  selector: 'dv-node-size-calculator',
  standalone: true,
  imports: [NodeComponent, TreeComponent],
  templateUrl: './node-size-calculator.component.html',
  styleUrl: './node-size-calculator.component.scss',
})
export class NodeSizeCalculatorComponent implements AfterViewInit {
  @ViewChildren('node') nodes!: QueryList<NodeComponent>;
  sizes: number[][];
  sizesCalculated: WritableSignal<boolean>;
  data: FlatDatum[];

  constructor(private _dataService: DataService) {
    this.sizes = [];
    this.sizesCalculated = signal(false);
    this.data = this._dataService.data;
  }

  ngAfterViewInit(): void {
    // calculate the size of all nodes
    for (const node of this.nodes) {
      const nativeElement = node.elementRef.nativeElement;

      const gap = 20;

      const width = nativeElement.offsetWidth + gap;
      const height = nativeElement.offsetHeight;

      // swap height and width because default orietnation of the flextree is vertical and we want a horizontal tree
      this.sizes.push([height, width]);
    }

    this.sizesCalculated.set(true);
  }
}
