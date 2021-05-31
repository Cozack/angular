import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CommentsComponent } from './component/comments/comments.component';
import { CommentComponent } from './component/comment/comment.component';
import {HttpClientModule} from "@angular/common/http";
import { TodoComponent } from './component/todo/todo/todo.component';
import { TodosComponent } from './component/todos/todos/todos.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentsComponent,
    CommentComponent,
    TodoComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
