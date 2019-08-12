import { Component, OnInit, Input } from '@angular/core';
import { PersonDefault } from '../person';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.less']
})
export class DefaultComponent {
    person: PersonDefault;

    constructor() {
        this.person = new PersonDefault('Default', 1);
    }

    get runChangeDetection() {
        console.log('checking DEFAUL view');
        return null;
    }
}
