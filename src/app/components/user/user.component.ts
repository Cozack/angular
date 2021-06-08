import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Iuser} from "../../interface/iuser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
  singleUser:Iuser;
@Output()
lift = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  lifting():void{
this.lift.emit(this.singleUser)
  }
}
