import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IalbumsPhotos} from "../interface/ialbums-photos";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
private url ='https://jsonplaceholder.typicode.com/photos?albumId='
  constructor(private httpClient:HttpClient) { }
  getPhotos(id:number):Observable<IalbumsPhotos[]>{
  return this.httpClient.get<IalbumsPhotos[]>(this.url + id)
  }
}
