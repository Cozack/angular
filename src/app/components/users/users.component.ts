import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Iuser} from "../../interface/iuser";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
allUsers:Iuser[]=[]
  singleUser:Iuser
  constructor( private userService:UserService) { }

  ngOnInit(): void {
  this.userService.getUsers().subscribe(value => this.allUsers=value)
  }
catchUser(value:Iuser){
 this.singleUser=value
}
}
