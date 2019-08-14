import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GuestService } from '../guest-list.service';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.less']
})
export class GuestComponent implements OnInit {
    @Input() name: string;
    editMode = false;
    readonly componentName: string = 'guest';

    constructor(private guestService: GuestService) { }

    throwOut() {
        this.guestService.throwOutGuest(this.name);
    }

    edit = () => this.editMode = true;
    save = () => this.editMode = false;

    get loggerName() { return `${this.componentName} ${this.name}`; }

    ngOnInit() {
        console.log(`ngOnInit - ${this.loggerName}`);
    }

    ngOnDestroy() {
        console.log(`ngOnDestroy - ${this.loggerName}`);
    }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`ngOnChanges - ${this.loggerName} - ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
        }
    }
}
