import { Injectable } from '@angular/core';
import { WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TreeSettingsService {
  showNodesBasedOnTime: WritableSignal<boolean>;

  constructor() {
    this.showNodesBasedOnTime = signal(false);
  }
}
