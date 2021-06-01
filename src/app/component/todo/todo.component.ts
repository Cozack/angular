import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) {
    this.activatedRoute.data.subscribe(value => console.log(value))
  }

  ngOnInit(): void {
  }

}
