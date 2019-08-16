import { Component, OnInit } from '@angular/core';
import { LogService } from '../log.service';

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.less']
})
export class LogComponent {
    logs: Array<string> = [];

    constructor(logger: LogService) {
        logger.LogEntryAdded.subscribe(newEntry => {
            this.logs.push(newEntry);
            console.log(newEntry);
        });
    }

    onClick() {
        this.logs = [];
    }
}
