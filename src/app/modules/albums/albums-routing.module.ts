import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from "./components/albums/albums.component";
import {AlbumPhotosComponent} from "./components/album-photos/album-photos.component";

const routes: Routes = [{path:'',component:AlbumsComponent,children:[{
  path:':id',component:AlbumPhotosComponent
  }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
