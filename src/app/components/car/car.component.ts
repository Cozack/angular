import {Component, Input, OnInit} from '@angular/core';
import {Icar} from "../../modules/icar";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
@Input()
  car:Icar
  constructor() { }

  ngOnInit(): void {
  }

}
