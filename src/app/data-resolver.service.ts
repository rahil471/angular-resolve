import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { take, map } from 'rxjs/operators';

import { DataService } from './data.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataResolverService implements Resolve <Observable<any>>{

  constructor(private ds: DataService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.ds.getData().pipe(
      take(1),
      map(userdata => userdata)
    )
  }
}
