import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { RemoverService } from './remover.service';
import { RemoveTrigger } from './app.animations';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
    animations: [RemoveTrigger]
})
export class AppComponent {
    newRow: string;
    searchRow: string;
    rows = ['item 1', 'item 2', 'item 3', 'Andrew Smirnov', 'Angular Animation'];

    constructor(private searchService: SearchService,
        remover: RemoverService) {
        remover.Removed.subscribe(x => 
            this.rows = this.rows.filter(f => f !== x)
        );
    }

    add() {
        this.rows.push(this.newRow);
        this.newRow = '';
    }

    search = () => this.searchService.search(this.searchRow);
}
