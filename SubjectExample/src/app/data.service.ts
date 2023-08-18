import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DataService{
    //dataEmitter = new EventEmitter<string>();
    dataEmitter = new Subject<string>();

    raiseDataEmitterEvent(data: string){ // 4
        this.dataEmitter.next(data); // hello hry
    }
}