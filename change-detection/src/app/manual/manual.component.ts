import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { PersonDefault } from '../person';

@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.less']
})
export class ManualComponent implements OnInit {
    person: PersonDefault;

    constructor(private cd: ChangeDetectorRef) {
        cd.detach();
        this.person = new PersonDefault('Manual', 3);
    }

    ngOnInit() {
        this.cd.detectChanges();
    }

    get runChangeDetection() {
        console.log('checking MANUAL view');
        return null;
    }

    onClick() {
        this.cd.detectChanges();
    }
}
