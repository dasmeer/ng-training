import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { OnPushComponent } from './on-push/on-push.component';
import { ManualComponent } from './manual/manual.component';
import { OutsiderComponent } from './outsider/outsider.component';

import { FormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';

@NgModule({
    declarations: [
        AppComponent,
        DefaultComponent,
        OnPushComponent,
        ManualComponent,
        OutsiderComponent,
        LogComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
