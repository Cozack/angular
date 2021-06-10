import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Icar} from "../modules/icar";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarService {
private url = 'http://192.168.88.253/api/v1/cars'
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<Icar[]>{
  return this.httpClient.get<Icar[]>(this.url)
  }
  addCar(car:Icar):Observable<Icar>{
  return this.httpClient.post<Icar>(this.url,car)
  }
}
