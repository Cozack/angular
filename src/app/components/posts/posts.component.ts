import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../models/post";
import {PostService} from "../../service/post.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
@Input()
id:number

  posts:Post[] = []
  constructor(private postService:PostService) { }

  ngOnInit(): void {
    this.postService.getPosts(this.id).subscribe(value => {
      this.posts = value
    })
  }

}
