import { Injectable } from '@angular/core';
import { flextree } from 'd3-flextree';

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  constructor() {}

  generateTree(data: any[]) {
    const layout = flextree({});

    const lookup = new Map<number, any>();
    let root = null;

    for (const datum of data) {
      datum.children = [];
      lookup.set(datum.id, datum);

      if (datum.response_to == null) {
        root = datum;
      } else {
        const responseTo = lookup.get(datum.response_to);
        responseTo.children.push(datum);
      }
    }

    const tree = layout.hierarchy(root);
    layout(tree);

    return tree;
  }
}
