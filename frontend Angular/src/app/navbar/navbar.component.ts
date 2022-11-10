import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor( private service: ServicesService) {

  }

  ngOnInit(): void {
  }
set(){
  this.service.setUId("0");
  console.log("UserId is "+this.service.getUid());

}
}
