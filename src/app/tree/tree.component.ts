import { Component, Input, OnInit } from '@angular/core';
import { TreeService } from '../tree.service';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'dv-tree',
  standalone: true,
  imports: [NodeComponent],
  templateUrl: './tree.component.html',
  styleUrl: './tree.component.scss',
})
export class TreeComponent implements OnInit {
  @Input() data!: any;
  tree: any;

  constructor(private _treeService: TreeService) {}

  ngOnInit(): void {
    this.tree = this._treeService.generateTree(this.data);
    console.log(this.tree);
    console.log(this.tree.descendants());
    console.log(this.tree.links());
  }
}
