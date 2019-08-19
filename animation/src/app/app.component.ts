import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent {
    newRow: string;
    searchRow: string;
    rows = ['item 1', 'item 2', 'item 3', 'Andrew Smirnov', 'Angular Animation'];

    constructor(private searchService: SearchService) { }

    add() {
        this.rows.push(this.newRow);
        this.newRow = '';
    }

    search = () => this.searchService.search(this.searchRow);
}
