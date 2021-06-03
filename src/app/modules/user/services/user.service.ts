import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Iuser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'https://jsonplaceholder.typicode.com/users' ;

  constructor(private httpClient:HttpClient) { }

getUsers():Observable<Iuser[]>{
  return this.httpClient.get<Iuser[]>(this.url)
}

}
