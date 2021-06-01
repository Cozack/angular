import { Component, OnInit } from '@angular/core';
import {CommentsService} from "../../service/comments.service";
import {IComments} from "../../module/IComments";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
comments:IComments[]=[]
constructor(private commentsService:CommentsService) {
}
  ngOnInit(): void {
  this.commentsService.getComments().subscribe(value => {
    this.comments=value
  })
  }

}
