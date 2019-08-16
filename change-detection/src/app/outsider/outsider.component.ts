import { Component, NgZone, ChangeDetectionStrategy } from '@angular/core';
import { Person } from '../../models/person';
import { LogService } from '../log.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'app-outsider',
    templateUrl: './outsider.component.html',
    styleUrls: ['./outsider.component.less']
})
export class OutsiderComponent {
    person: Person;

    constructor(private zone: NgZone, private logger: LogService) {
        this.person = new Person('Outsider', 4);
    }

    get runChangeDetection() {
        // console.log('checking OUTSIDER view');
        this.logger.log('checking OUTSIDER view');
        return null;
    }

    click() {
        this.person.Age = Math.floor(Math.random() * 100)
    }

    mouseDown() {
        this.zone.runOutsideAngular(() => {
            window.document.addEventListener('click', this.click.bind(this));
            // console.log('OUTSIDER - mouse down -> click');
            this.logger.log('OUTSIDER - mouse down -> click');
        });
    }
}
