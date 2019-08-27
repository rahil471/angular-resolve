import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): Observable<any>{
    return new Observable((o)=>{
      setTimeout(()=>{
        o.next('Got Users');
      }, 1000)
    })
  }
}
