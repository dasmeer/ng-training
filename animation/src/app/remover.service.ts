import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RemoverService {
    private subject = new Subject<string>();

    get Removed(): Observable<string> {
        return this.subject;
    }

    remove = (row: string) => this.subject.next(row);
}
