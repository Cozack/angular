import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Iuser} from "../modules/iuser";
import {Ipost} from "../modules/ipost";

@Injectable({
  providedIn: 'root'
})
export class UserService {
private utl = 'https://jsonplaceholder.typicode.com/users'
  constructor(private httpClient:HttpClient) { }
  getUser():Observable<Iuser[]>{
   return  this.httpClient.get<Iuser[]>(this.utl)
  }

}
