import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from "./services/user.service";
import {HttpClientModule} from "@angular/common/http";
import { UserPostComponent } from './components/user-post/user-post.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import {UserPostService} from "./services/user-post.service";


@NgModule({
  declarations: [
    UsersComponent,
    UserComponent,
    UserPostComponent,
    UserPostsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  providers:[UserService,UserPostService]
})
export class UserModule { }

