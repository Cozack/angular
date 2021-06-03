import { Component, OnInit } from '@angular/core';
import {IuserPost} from "../../interface/iuser-post";
import {UserPostService} from "../../services/user-post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {
  posts:IuserPost[]
  constructor(private userPostService:UserPostService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe(({id}) => {
      this.userPostService.getUserPosts(id).subscribe(value => this.posts=value)
    })
  }

  ngOnInit(): void {
  }

}
