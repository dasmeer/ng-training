import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.less']
})
export class RowComponent implements OnInit {
    @Input() text: string;
    isSelected = false;

    constructor() { }

    ngOnInit() {
    }

}
