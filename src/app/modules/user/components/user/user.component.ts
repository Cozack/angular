import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../interface/iuser";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
user:Iuser
  constructor() { }

  ngOnInit(): void {
  }

}
