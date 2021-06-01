import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPosts} from "../module/IPosts";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private httpClient:HttpClient) { }

  getPosts():Observable<IPosts[]>{
    return this.httpClient.get<IPosts[]>(this.url)
  }
  getPost(id:string):Observable<IPosts>{
    return this.httpClient.get<IPosts>(this.url + '/' +id)
  }}
