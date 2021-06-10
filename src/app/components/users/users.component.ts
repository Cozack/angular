import {Component, OnInit} from '@angular/core';
import {Iuser} from "../../modules/iuser";
import {UserService} from "../../services/user.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Ipost} from "../../modules/ipost";
import {PostUserService} from "../../services/post-user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:Iuser[]
  posts:Ipost[]
  myForm = new FormGroup({
    id:new FormControl(0)
  });


  constructor(private userService:UserService, private postUserService:PostUserService) { }

  ngOnInit(): void {
  this.userService.getUser().subscribe(value => this.users=value)
  }

  save() {
    this.postUserService.getUserPost(this.myForm.controls.id.value).subscribe(value => this.posts=value)
  }
}
