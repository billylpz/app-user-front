import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserFrontFooterComponent } from '../../components/user-front-footer/user-front-footer.component';
import { UserFrontNavbarComponent } from '../../components/user-front-navbar/user-front-navbar.component';

@Component({
  selector: 'app-user-front-layout',
  templateUrl: './user-front-layout.component.html',
  styleUrls: ['./user-front-layout.component.css'],
  imports: [RouterOutlet, UserFrontNavbarComponent, UserFrontFooterComponent]
})
export class UserFrontLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
