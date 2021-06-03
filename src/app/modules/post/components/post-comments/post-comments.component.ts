import { Component, OnInit } from '@angular/core';
import {UserPostService} from "../../../user/services/user-post.service";
import {ActivatedRoute} from "@angular/router";
import {PostCommentsService} from "../../services/post-comments.service";
import {IpostComment} from "../../interface/ipost-comment";

@Component({
  selector: 'app-post-comments',
  templateUrl: './post-comments.component.html',
  styleUrls: ['./post-comments.component.css']
})
export class PostCommentsComponent implements OnInit {
comments:IpostComment[]=[]
  constructor(private postCommentsService:PostCommentsService,private activatedRoute:ActivatedRoute) {
  this.activatedRoute.params.subscribe(({id})=>{
    this.postCommentsService.getPostComments(id).subscribe(value => this.comments=value)
  })
  }

  ngOnInit(): void {
  }

}
