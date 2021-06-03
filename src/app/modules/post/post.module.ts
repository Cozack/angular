import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './components/posts/posts.component';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";
import { PostCommentComponent } from './components/post-comment/post-comment.component';
import { PostCommentsComponent } from './components/post-comments/post-comments.component';
import {PostCommentsService} from "./services/post-comments.service";
import {PostComponent} from "./components/post/post.component";


@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostCommentComponent,
    PostCommentsComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  providers:[PostService,PostCommentsService]
})
export class PostModule { }
