import { Component, effect, input, OnInit, signal } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { RouterLink } from "@angular/router";
import { ImageUtils } from '../../../utils/image-utils';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  imports: [RouterLink]
})
export class UserCardComponent  {
  user=input<User>();
  imageUtils=ImageUtils;

  constructor() { }


   

}
