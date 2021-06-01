import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IPosts} from "../module/IPosts";

@Injectable({
  providedIn: 'root'
})
export class ResolvePostsService implements Resolve<Observable<IPosts[]>>{

  constructor(private httpClient:HttpClient) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<IPosts[]>> | Promise<Observable<IPosts[]>> | Observable<IPosts[]> {
    return this.httpClient.get<IPosts[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
