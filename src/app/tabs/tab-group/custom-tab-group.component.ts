import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ContentChild,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { TabGroup } from './tab-group.component';

@Component({
  selector: 'app-custom-tab-group',
  standalone: true,
  template: `
    <app-tab-group>
      <!-- comment this out for the wrong behavior -->
      <!-- <ng-container
        *ngTemplateOutlet="template; injector: tabGroupVcr.injector"
      ></ng-container> -->

      <!-- uncomment this out for the wrong behavior -->
      <ng-container #anchor></ng-container>
    </app-tab-group>
  `,
  imports: [TabGroup, NgTemplateOutlet],
  styles: [
    `
      :host ::ng-deep .tab-header {
        display: flex;
        gap: 1rem;
        padding: 1rem;
        justify-content: space-evenly;
        font-weight: bold;
        font-size: large;
      }
    `,
  ],
})
export class CustomTabGroup {
  @ContentChild(TemplateRef, { static: true }) template!: TemplateRef<unknown>;
  @ViewChild(TabGroup, { read: ViewContainerRef, static: true })
  tabGroupVcr!: ViewContainerRef;

  // uncomment this for wrong behavior
  @ViewChild('anchor', { read: ViewContainerRef, static: true })
  anchor!: ViewContainerRef;

  ngOnInit() {
    // uncomment this for wrong behavior
    this.anchor.createEmbeddedView(
      this.template,
      {},
      {
        injector: this.tabGroupVcr.injector,
      }
    );
  }
}
