import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BsTabGroup } from './tabs/bs-tab-group/bs-tab-group.component';
import { CustomTabGroup } from './tabs/tab-group/custom-tab-group.component';
import { TabGroup } from './tabs/tab-group/tab-group.component';
import { TabPanel } from './tabs/tab-panel/tab-panel.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, TabGroup, TabPanel, BsTabGroup, CustomTabGroup],
})
export class AppModule {}
