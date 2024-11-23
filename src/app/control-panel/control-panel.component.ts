import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TreeSettingsService } from '../tree-settings.service';
import { tree } from 'd3';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'dv-control-panel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.scss',
})
export class ControlPanelComponent implements AfterViewInit {
  @ViewChild('timeBasedNodes') timeBasedNodes!: HTMLInputElement;

  constructor(public treeSettings: TreeSettingsService) {}

  ngAfterViewInit(): void {}

  protected readonly tree = tree;
}
