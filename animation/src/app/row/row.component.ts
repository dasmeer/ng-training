import { Component, OnInit, Input } from '@angular/core';
import { HighlightTrigger } from './row.animations';
import { SearchService } from '../search.service';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.less'],
    animations: [HighlightTrigger]
})
export class RowComponent {
    @Input() text: string;
    isSelected = false;

    constructor(search: SearchService) {
        search.Searched.subscribe(x => {
            if (x)
                this.isSelected = this.text.toLowerCase().indexOf(x.toLowerCase().trim()) !== -1;
            else
                this.isSelected = false;
        });
    }

    select = () => this.isSelected = true;
    deSelect = () => this.isSelected = false;

    getRowState = (): string => this.isSelected ? 'selected' : 'not-selected';
}
