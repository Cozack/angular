import {Component, Input, OnInit} from '@angular/core';
import {Icomment} from "../../interface/icomment";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
@Input()
comment:Icomment
  constructor() { }

  ngOnInit(): void {
  }

}
