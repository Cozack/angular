import { Component } from '@angular/core';
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(/*private dataTransfer:DataTransferService*/) {
    // console.log(this.dataTransfer.store.getValue())
    // this.dataTransfer.store.next('next value')
    // console.log(this.dataTransfer.store.getValue())
  }
}
