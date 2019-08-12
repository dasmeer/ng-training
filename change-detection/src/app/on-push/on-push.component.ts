import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { PersonDefault } from '../person';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.less']
})
export class OnPushComponent {
    @Input() person: PersonDefault;

    constructor() {
        this.person = new PersonDefault('OnPush', 2);
    }

    get runChangeDetection() {
        console.log('checking ON-PUSH view');
        return null;
    }

    onClick() {
        this.person.Age = Math.floor(Math.random() * 100);
    }
}
