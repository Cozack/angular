import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Icar} from "../modules/icar";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CarService {
private url = 'http://92.253.239.109/api/v1/cars'
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<Icar[]>{
  return this.httpClient.get<Icar[]>(this.url)
  }
  addCar(car:Icar):Observable<Icar>{
  return this.httpClient.post<Icar>(this.url,car)
  }
}
