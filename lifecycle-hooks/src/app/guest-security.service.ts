import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class GuestSecurityService {
    private subject = new Subject<string>();

    get guestThrownOut(): Observable<string> {
        return this.subject;
    }

    throwOutGuest = (name: string) => this.subject.next(name);
}
