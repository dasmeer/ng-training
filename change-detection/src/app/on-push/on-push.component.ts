import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../../models/person';
import { LogService } from '../log.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-on-push',
    templateUrl: './on-push.component.html',
    styleUrls: ['./on-push.component.less']
})
export class OnPushComponent {
    person: Person;

    constructor(private logger: LogService) {
        this.person = new Person('OnPush', 2);
    }

    get runChangeDetection() {
        // console.log('checking ON-PUSH view');
        this.logger.log('checking ON-PUSH view');
        return null;
    }

    onClick() {
        this.person.Age = Math.floor(Math.random() * 100);
    }
}
