import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { GuestSecurityService } from '../guest-security.service';

@Component({
    selector: 'app-guest',
    templateUrl: './guest.component.html',
    styleUrls: ['./guest.component.less']
})
export class GuestComponent implements OnInit {
    @Input() name: string;
    initialName: string;
    editMode = false;
    readonly componentName: string = 'guest';

    constructor(private securityService: GuestSecurityService) { }

    throwOut() {
        this.securityService.throwOutGuest(this.initialName);
    }

    edit = () => this.editMode = true;
    save = () => this.editMode = false;

    get loggerName() { return `${this.componentName} ${this.name}`; }

    ngOnChanges(changes: SimpleChanges) {
        for (let propName in changes) {
            let chng = changes[propName];
            let cur = JSON.stringify(chng.currentValue);
            let prev = JSON.stringify(chng.previousValue);
            console.log(`ngOnChanges - ${this.loggerName} - ${propName}: currentValue = ${cur}, previousValue = ${prev}`);
            this.initialName = chng.currentValue;
            // let r: Renamer = { name: chng.previousValue, newName: chng.currentValue };
            // this.registryService.renameGuest(r);
        }
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

    ngAfterContentChecked(){
        console.log(`ngAfterContentChecked - ${this.loggerName}`);
    }

    ngAfterViewInit(){
        console.log(`ngAfterViewInit - ${this.loggerName}`);
    }

    ngAfterViewChecked(){
        console.log(`ngAfterViewChecked - ${this.loggerName}`);
    }

    ngOnDestroy() {
        console.log(`ngOnDestroy - ${this.loggerName}`);
    }
}
