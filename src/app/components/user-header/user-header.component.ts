import {Component, Input, OnInit} from '@angular/core';
import {Iuser} from "../../interface/iuser";
import {DataTransferService} from "../../services/data-transfer.service";

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  @Input()
  userName:string
  constructor(private dataTransfer:DataTransferService) { }

  ngOnInit(): void {
    this.dataTransfer.store.subscribe(value => this.userName=value)
  }

}
