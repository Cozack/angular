import {Component, Input, OnInit} from '@angular/core';
import {Ialbums} from "../../interface/ialbums";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
@Input()
album:Ialbums
  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  albumDetails():void{
  this.router.navigate([this.album.id],{relativeTo:this.activatedRoute})
  }

}
