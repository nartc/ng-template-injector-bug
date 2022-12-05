import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-tab-group>
      <app-tab-panel title="Tab 1">content tab 1</app-tab-panel>
      <app-tab-panel title="Tab 2">content tab 2</app-tab-panel>
      <app-tab-panel title="Tab 3">content tab 3</app-tab-panel>
      <app-tab-panel title="Tab 4">content tab 4</app-tab-panel>
    </app-tab-group>

    <br />
    <hr />
    <br />

    <app-bs-tab-group>
      <app-tab-panel title="Tab 1">content tab 1</app-tab-panel>
      <app-tab-panel title="Tab 2">content tab 2</app-tab-panel>
      <app-tab-panel title="Tab 3">content tab 3</app-tab-panel>
      <app-tab-panel title="Tab 4">content tab 4</app-tab-panel>
    </app-bs-tab-group>

    <br />
    <hr />
    <br />

    <app-custom-tab-group>
      <ng-template>
        <app-tab-panel title="Tab 1">content tab 1</app-tab-panel>
        <app-tab-panel title="Tab 2">content tab 2</app-tab-panel>
        <app-tab-panel title="Tab 3">content tab 3</app-tab-panel>
        <app-tab-panel title="Tab 4">content tab 4</app-tab-panel>
      </ng-template>
    </app-custom-tab-group>
  `,
  styles: [],
})
export class AppComponent {}
