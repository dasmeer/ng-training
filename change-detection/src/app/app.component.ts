import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { LogService } from './log.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    checkNumber: number = 0;

    constructor(private logger: LogService){    }

    ngAfterViewChecked() {
        this.logger.log(`------------------ ${this.checkNumber++} ------------------`)
    }
}
