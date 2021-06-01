import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import { UsersComponent } from './component/users/users.component';
import { UserComponent } from './component/user/user.component';
import {CommentComponent} from "./component/comment/comment.component";
import {CommentsComponent} from "./component/comments/comments.component";
import { HomeComponent } from './component/home/home.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostComponent } from './component/post/post.component';
import { PostsDetailsComponent } from './component/posts-details/posts-details.component';
import {DeactivatorService} from "./service/deactivator.service";
import {ResolveService} from "./service/resolve.service";
import { TodoComponent } from './component/todo/todo.component';
let routes:Routes = [
  {path:'home',component:HomeComponent},
  {path:'users',component:UsersComponent, children: [
    {path:':id', component:UserDetailsComponent}]},
  {path:'posts',component:PostsComponent, canDeactivate:[DeactivatorService]},
  {path:'posts/:id',component:PostsDetailsComponent, canActivate:[DeactivatorService]},
  {path:'comments',component:CommentsComponent},
  {path:'todo',component:TodoComponent,resolve:{data:ResolveService}},
]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CommentComponent,
    CommentsComponent,
    HomeComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostsDetailsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
