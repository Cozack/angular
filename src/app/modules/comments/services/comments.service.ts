import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Icomment} from "../interface/icomment";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
private url = 'https://jsonplaceholder.typicode.com/comments';
  constructor(private httpClient:HttpClient) {
  }
  getComments():Observable<Icomment[]>{
    return this.httpClient.get<Icomment[]>(this.url)
  }
}
