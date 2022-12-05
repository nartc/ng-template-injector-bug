import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import type { TabPanel } from '../tab-panel/tab-panel.component';

@Component({
  selector: 'app-tab-group',
  standalone: true,
  template: `
    <div class="tab-header">
      <div
        class="tab-item-header"
        role="presentation"
        *ngFor="let tab of tabPanelList; index as idx"
        (click)="selectItem(idx)"
      >
        {{ tab.title }}
      </div>
    </div>

    <div class="tab-body">
      <ng-container *ngFor="let tab of tabPanelList; index as idx">
        <div *ngIf="idx === tabActiveIndex">
          <ng-container *ngTemplateOutlet="tab.panelBody"></ng-container>
        </div>
      </ng-container>
    </div>
  `,
  imports: [NgFor, NgIf, NgTemplateOutlet],
  encapsulation: ViewEncapsulation.None,
})
export class TabGroup {
  tabPanelList: TabPanel[] = [];
  tabActiveIndex = 0;

  selectItem(idx: number) {
    this.tabActiveIndex = idx;
  }

  addTabPanel(tab: TabPanel) {
    this.tabPanelList.push(tab);
  }

  removeTabPanel(tab: TabPanel) {
    let index = -1;
    const tabPanelList: TabPanel[] = [];
    this.tabPanelList.forEach((item, idx) => {
      if (tab === item) {
        index = idx;
        return;
      }
      tabPanelList.push(item);
    });
    this.tabPanelList = tabPanelList;
    if (index !== -1) {
      this.selectItem(0);
    }
  }
}
