import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SearchService {
    private subject = new Subject<string>();

    get Searched(): Observable<string> {
        return this.subject;
    }

    search = (searchString: string) => this.subject.next(searchString);
}
