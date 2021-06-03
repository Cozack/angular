import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IpostComment} from "../interface/ipost-comment";

@Injectable({
  providedIn: 'root'
})
export class PostCommentsService {
private url = 'https://jsonplaceholder.typicode.com/comments?postId='
  constructor(private httpClient:HttpClient) { }
getPostComments(id:number):Observable<IpostComment[]>{
  return this.httpClient.get<IpostComment[]>(this.url +id)
}
}
