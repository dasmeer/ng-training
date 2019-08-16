import { Component, SimpleChanges, OnChanges } from '@angular/core';
import { GuestSecurityService } from './guest-security.service';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    newGuestName: string;
    guests = ['Gustavo Tretty', 'Madonna'];
    securitySubscription: Subscription;

    constructor(securityService: GuestSecurityService) {
        this.securitySubscription = securityService.guestThrownOut.subscribe(name =>
            this.guests = this.guests.filter(x => x !== name)
        );
    }

    get loggerName() { return `APP-COMPONENT`; }

    addInList() {
        this.guests.push(this.newGuestName);
        this.newGuestName = '';
    }

    ngOnInit() {
        console.log(`ngOnInit - ${this.loggerName}`);
    }

    //during every change detection run, immediately after ngOnChanges() and ngOnInit()
    ngDoCheck() {
        console.log(`ngDoCheck - ${this.loggerName}`);
    }

    ngAfterContentInit() {
        console.log(`ngAfterContentInit - ${this.loggerName}`);
    }

    ngAfterContentChecked() {
        console.log(`ngAfterContentChecked - ${this.loggerName}`);
    }

    ngAfterViewInit() {
        console.log(`ngAfterViewInit - ${this.loggerName}`);
    }

    ngAfterViewChecked() {
        console.log(`ngAfterViewChecked - ${this.loggerName}`);
        console.log(`---------------------------------------`);
    }

    ngOnDestroy() {
        console.log(`ngOnDestroy - ${this.loggerName}`);
        this.securitySubscription.unsubscribe();
    }
}
