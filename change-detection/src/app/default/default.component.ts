import { Component} from '@angular/core';
import { Person } from '../../models/person';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.less']
})
export class DefaultComponent {
    person: Person;
    loggerIsOn = true;

    constructor() {
        this.person = new Person('Default', 1);
    }
    get runChangeDetection() {
        if (this.loggerIsOn){
            console.log('checking DEFAUL view');
        }
        return null;
    }
}
