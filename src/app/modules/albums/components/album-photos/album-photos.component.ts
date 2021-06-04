import { Component, OnInit } from '@angular/core';
import {IalbumsPhotos} from "../../interface/ialbums-photos";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {PhotoService} from "../../services/photo.service";

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class AlbumPhotosComponent implements OnInit {
photos:IalbumsPhotos[]=[]
  constructor(private photoService:PhotoService,private activatedRoute:ActivatedRoute) {
  this.activatedRoute.params.subscribe(({id})=>{
    this.photoService.getPhotos(id).subscribe(value => this.photos=value)
  })
  }

  ngOnInit(): void {
  }

}
