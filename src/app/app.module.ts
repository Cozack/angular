import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {UserComponent} from "./component/user/user.component";
import {UsersComponent} from "./component/users/users.component";
import {UserDetailsComponent} from "./component/user-details/user-details.component";
import {PostsComponent} from "./component/posts/posts.component";
import {PostComponent} from "./component/post/post.component";
import {PostDetailsComponent} from "./component/post-details/post-details.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";
import {ResolveUsersService} from "./services/resolve-users.service";
import {ResolvePostsService} from "./services/resolve-posts.service";

let routes:Routes = [
  {path:'users',component:UsersComponent,resolve:{data:ResolveUsersService}, children:[
  {path:':id',component:UserDetailsComponent,resolve:{data:ResolveUsersService}},
    ]},
  {path:'posts',component:PostsComponent,resolve:{data:ResolvePostsService},children:[
      {path:':id',component:PostDetailsComponent,resolve:{data:ResolvePostsService}}
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    UserDetailsComponent,
    PostsComponent,
    PostComponent,
    PostDetailsComponent
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
