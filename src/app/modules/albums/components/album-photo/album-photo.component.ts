import {Component, Input, OnInit} from '@angular/core';
import {IalbumsPhotos} from "../../interface/ialbums-photos";

@Component({
  selector: 'app-album-photo',
  templateUrl: './album-photo.component.html',
  styleUrls: ['./album-photo.component.css']
})
export class AlbumPhotoComponent implements OnInit {
  @Input()
photo:IalbumsPhotos
  constructor() { }

  ngOnInit(): void {
  }

}
