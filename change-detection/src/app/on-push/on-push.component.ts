import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../../models/person';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.less']
})
export class OnPushComponent {
    person: Person;

    constructor() {
        this.person = new Person('OnPush', 2);
    }

    get runChangeDetection() {
        console.log('checking ON-PUSH view');
        return null;
    }

    onClick() {
        this.person.Age = Math.floor(Math.random() * 100);
    }
}
