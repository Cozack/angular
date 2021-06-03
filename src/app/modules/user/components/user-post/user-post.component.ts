import {Component, Input, OnInit} from '@angular/core';
import {IuserPost} from "../../interface/iuser-post";

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent implements OnInit {
  @Input()
post:IuserPost
  constructor() { }

  ngOnInit(): void {
  }

}
