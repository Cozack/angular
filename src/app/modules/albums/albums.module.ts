import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumComponent } from './components/album/album.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumPhotoComponent } from './components/album-photo/album-photo.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';
import {AlbumService} from "./services/album.service";
import {PhotoService} from "./services/photo.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AlbumComponent,
    AlbumsComponent,
    AlbumPhotoComponent,
    AlbumPhotosComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    HttpClientModule
  ],
  providers: [AlbumService,PhotoService]
})
export class AlbumsModule { }
