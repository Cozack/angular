import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Ialbums} from "../interface/ialbums";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
private url='https://jsonplaceholder.typicode.com/albums';
  constructor(private httpClient:HttpClient) { }
  getAlbums():Observable<Ialbums[]>{
    return this.httpClient.get<Ialbums[]>(this.url)
  }
}
