import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';
import { ManualComponent } from './manual/manual.component';
import { OutsiderComponent } from './outsider/outsider.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    OnPushComponent,
    ManualComponent,
    OutsiderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
