import {
  Component,
  AfterViewInit,
  ViewChildren,
  QueryList,
  WritableSignal,
  signal,
} from '@angular/core';
import { NodeComponent } from '../node/node.component';
import { DataService } from '../data.service';
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
  treeGenerated: WritableSignal<boolean>;

  constructor(public dataService: DataService) {
    this.treeGenerated = signal(false);
  }

  ngAfterViewInit(): void {
    const sizes: number[][] = [];

    for (const node of this.nodes) {
      const nativeElement = node.elementRef.nativeElement;

      const width = nativeElement.offsetWidth;
      const height = nativeElement.offsetHeight;

      sizes.push([width, height]);
    }

    this.dataService.spliceSizes(sizes);
    this.treeGenerated.set(true);
  }

  data = this.dataService.data;
}
