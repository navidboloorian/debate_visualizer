import { Component, OnDestroy, OnInit } from '@angular/core';
import { NodeSizeCalculatorComponent } from '../node-size-calculator/node-size-calculator.component';
import { TreeService } from '../tree.service';
import { TreeComponent } from '../tree/tree.component';
import { AudioComponent } from '../audio/audio.component';
import { fromEvent, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'dv-player',
  standalone: true,
  imports: [NodeSizeCalculatorComponent, TreeComponent, AudioComponent],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss',
})
export class PlayerComponent implements OnInit, OnDestroy {
  windowResizeObservable$!: Observable<Event>;
  windowResizeSubscription$!: Subscription;

  constructor(protected treeService: TreeService) {}

  ngOnInit(): void {
    this.windowResizeObservable$ = fromEvent(window, 'resize');
    this.windowResizeSubscription$ = this.windowResizeObservable$.subscribe(
      () => this.treeService.nodeSizesCalculated.set(false)
    );
  }

  ngOnDestroy(): void {
    this.windowResizeSubscription$.unsubscribe();
  }
}
