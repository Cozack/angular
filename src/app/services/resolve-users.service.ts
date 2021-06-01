import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IUsers} from "../module/IUsers";

@Injectable({
  providedIn: 'root'
})
export class ResolveUsersService implements Resolve<Observable<IUsers[]>>{

  constructor(private httpClient:HttpClient) { }
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<IUsers[]>> | Promise<Observable<IUsers[]>> | Observable<IUsers[]> {
return this.httpClient.get<IUsers[]>('https://jsonplaceholder.typicode.com/users')
}
}
