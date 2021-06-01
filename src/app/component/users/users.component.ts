import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUsers} from "../../module/IUsers";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users:IUsers[]=[]
  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => this.users=value.data)
  }

  ngOnInit(): void {
  }

}
