import { Component, ChangeDetectorRef } from '@angular/core';
import { Person } from '../models/person';

@Component({
    selector: 'app-manual',
    templateUrl: './manual.component.html',
    styleUrls: ['./manual.component.less']
})
export class ManualComponent {
    person: Person;

    constructor(private cd: ChangeDetectorRef) {
        cd.detach();
        this.person = new Person('Manual', 3);
    }

    ngOnInit() {
        this.cd.detectChanges();
    }

    get runChangeDetection() {
        console.log('checking MANUAL view');
        return null;
    }

    onClick() {
        this.person.Age = Math.floor(Math.random() * 100);
        this.cd.detectChanges();
    }
}
