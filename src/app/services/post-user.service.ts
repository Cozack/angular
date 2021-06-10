import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ipost} from "../modules/ipost";

class Post {
}

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
  private url = 'https://jsonplaceholder.typicode.com/posts?userId=';

  constructor(private httpClient: HttpClient) {
  }

  getUserPost(id: string): Observable<Ipost[]> {
    return this.httpClient.get<Ipost[]>(this.url + id);
  }
}
