import {
  Component,
  inject,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { TabGroup } from '../tab-group/tab-group.component';

@Component({
  selector: 'app-tab-panel',
  standalone: true,
  template: `
    <ng-template>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class TabPanel implements OnInit, OnDestroy {
  @Input() title = '';
  @ViewChild(TemplateRef, { static: true }) panelBody!: TemplateRef<unknown>;

  private readonly tabGroup = inject(TabGroup);

  ngOnInit() {
    this.tabGroup.addTabPanel(this);
  }
  ngOnDestroy() {
    this.tabGroup.removeTabPanel(this);
  }
}
