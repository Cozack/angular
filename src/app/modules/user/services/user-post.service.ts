import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IuserPost} from "../interface/iuser-post";

@Injectable({
  providedIn: 'root'
})
export class UserPostService {
  private url = 'https://jsonplaceholder.typicode.com/posts?userId='

  constructor(private httpClient:HttpClient) { }

  getUserPosts(id:number):Observable<IuserPost[]>{
    return this.httpClient.get<IuserPost[]>(this.url + id)
  }
}
