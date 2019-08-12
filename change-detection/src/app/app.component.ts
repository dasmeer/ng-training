import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    checkNumber: number = 0;

    // constructor(cd: ChangeDetectorRef){
    //     cd.detach();
    // }

    ngAfterViewChecked() {
        console.log(`------------------${this.checkNumber++}------------------`);
    }
}
