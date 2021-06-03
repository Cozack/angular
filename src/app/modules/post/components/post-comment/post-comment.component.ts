import {Component, Input, OnInit} from '@angular/core';
import {IpostComment} from "../../interface/ipost-comment";

@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {
@Input()
comment:IpostComment
  constructor() { }

  ngOnInit(): void {
  }

}
