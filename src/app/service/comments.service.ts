import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs";
import {IComments} from "../module/IComments";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
private url='https://jsonplaceholder.typicode.com/comments'
  constructor(private httpClient:HttpClient) { }

getComments():Observable<IComments[]>{
return this.httpClient.get<IComments[]>(this.url)

}
}
