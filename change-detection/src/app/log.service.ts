import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LogService {
    private subject = new Subject<string>();

    get LogEntryAdded(): Observable<string> {
        return this.subject;
    }

    log = (entry: string) => this.subject.next(entry);
}
