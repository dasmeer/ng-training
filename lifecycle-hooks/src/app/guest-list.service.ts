import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GuestService {
    private _subject = new Subject<string>();

    get guestThrownOut(): Observable<string> {
        return this._subject;
    }

    throwOutGuest = (name: string) => this._subject.next(name);
}
