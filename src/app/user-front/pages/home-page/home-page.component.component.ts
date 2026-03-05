import { User } from './../../../users/interfaces/user.interface';
import { Component, OnInit, signal } from '@angular/core';
import { UserCardComponent } from "../../../users/components/user-card/user-card.component";

@Component({
  selector: 'app-home-page.component',
  templateUrl: './home-page.component.component.html',
  styleUrls: ['./home-page.component.component.css'],
  imports: [UserCardComponent]
})
export class HomePageComponent  {
  array=signal( 0);

  constructor() { }

 

}
