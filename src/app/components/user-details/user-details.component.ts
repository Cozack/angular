import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../interface/iuser";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input()
singleUser:Iuser

  constructor(private dataTransfer:DataTransferService) { }

  ngOnInit(): void {
  }
  login(){
    this.dataTransfer.store.next(this.singleUser.username)
  }
}
