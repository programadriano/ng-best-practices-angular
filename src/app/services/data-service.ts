import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class DataService {
    name: string = "Heisenberg";

    public messageSource = new BehaviorSubject(this.name);
    currentMessage = this.messageSource.asObservable();

    changeMessage(name: string) {
        this.messageSource.next(name)
    }

}
