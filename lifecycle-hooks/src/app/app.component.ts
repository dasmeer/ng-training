import { Component, SimpleChanges, OnChanges } from '@angular/core';
import { GuestService } from './guest-list.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    newGuestName: string;
    guests = ['Gustavo Tretty', 'Madonna', 'Will Man'];

    constructor(private guestService: GuestService) {
        guestService.guestThrownOut.subscribe(name =>
            this.guests = this.guests.filter(x => x !== name)
        );
    }

    addInList() {
        this.guests.push(this.newGuestName);
        this.newGuestName = '';
    }

    
}
