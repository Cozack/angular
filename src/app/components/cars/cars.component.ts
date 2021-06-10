import { Component, OnInit } from '@angular/core';
import {CarService} from "../../services/car.service";
import {Icar} from "../../modules/icar";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Icar[]
  addModel = new FormControl('')
  addPrice = new FormControl(0)
  addYear = new FormControl(2021)
  myForm = new FormGroup({
    model: this.addModel,
    price: this.addPrice,
    year: this.addYear,
  });

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe(value => this.cars = value)
  }

  addCar() {
    this.carService.addCar(this.myForm.value).subscribe()

  }
}
