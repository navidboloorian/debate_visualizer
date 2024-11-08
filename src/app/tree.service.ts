import { Injectable, signal, WritableSignal } from '@angular/core';
import { flextree } from 'd3-flextree';
import { FlatDatum } from './data.service';

export type TreeDatum = {
  id: number;
  summary: string;
  speaker: string;
  topic: string;
  timestamp?: string;
  size: number[];
  children: TreeDatum[];
};

@Injectable({
  providedIn: 'root',
})
export class TreeService {
  nodeSizesCalculated: WritableSignal<boolean>;
  nodeSizes: WritableSignal<number[][]>;

  constructor() {
    this.nodeSizesCalculated = signal(false);
    this.nodeSizes = signal([]);
  }

  generateTree(data: FlatDatum[]) {
    const layout = flextree<TreeDatum | null>({
      spacing: 50,
    });

    // lookup table to convert from flat array to hierarchy structure needed for flextree using IDs as keys
    const lookup = new Map<number, TreeDatum>();
    let root = null;

    // converting from FlatDatum to TreeDatum
    for (let i = 0; i < data.length; i++) {
      const datum = data[i];
      const size = this.nodeSizes()[i];

      // FlatDatum info
      const { id, summary, speaker, topic, timestamp } = datum;

      // splice sizes, drop response_to, and add children
      const treeDatum: TreeDatum = {
        id,
        summary,
        speaker,
        topic,
        size,
        timestamp,
        children: [],
      };

      lookup.set(treeDatum.id, treeDatum);

      // need to use FlatDatum oen last time to access response_to
      if (datum.response_to == null) {
        root = treeDatum;
      } else {
        const responseTo = lookup.get(datum.response_to);

        // all response_to fields are valid IDs so we can assert that the value exists
        responseTo!.children.push(treeDatum);
      }
    }

    const tree = layout.hierarchy(root);
    layout(tree);

    return tree;
  }
}
