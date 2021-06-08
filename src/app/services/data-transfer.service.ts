import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Iuser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {
 store = new BehaviorSubject<string> ('anonymous');
  constructor() { }
}
