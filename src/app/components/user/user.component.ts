import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input()
  singleUser:any;

  constructor(private router:Router, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
userDetails(){
    this.router.navigate(['detailsFromState',this.singleUser.id],{relativeTo:this.activatedRoute,state:this.singleUser})
}
}
