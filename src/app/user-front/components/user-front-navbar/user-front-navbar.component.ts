import { Component, OnInit } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-user-front-navbar',
  templateUrl: './user-front-navbar.component.html',
  styleUrls: ['./user-front-navbar.component.css'],
  imports: [RouterLink]
})
export class UserFrontNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
