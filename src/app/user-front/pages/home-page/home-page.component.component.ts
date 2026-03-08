import { User } from './../../../users/interfaces/user.interface';
import { Component, inject, OnInit, signal } from '@angular/core';
import { UserCardComponent } from "../../../users/components/user-card/user-card.component";
import { rxResource } from '@angular/core/rxjs-interop';
import { UserService } from '../../../users/services/user.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home-page.component',
  templateUrl: './home-page.component.component.html',
  styleUrls: ['./home-page.component.component.css'],
  imports: [UserCardComponent, RouterLink]
})
export class HomePageComponent {
  userService = inject(UserService);

  constructor() { }


  usersResource = rxResource({
    params: () => ({}),
    stream: () => {
      return this.userService.findAll();
    }
  });

}


