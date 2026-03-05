import { Routes } from '@angular/router';
import { UserFrontLayoutComponent } from '../user-front/layouts/user-front-layout/user-front-layout.component';
import { HomePageComponent } from '../user-front/pages/home-page/home-page.component.component';

export   const userRoutes: Routes = [
  {
    path:"", component:UserFrontLayoutComponent,
    children:[
      {path:"home",component:HomePageComponent},
      {path:"**",redirectTo:"/home"}
    ]
    
  }
];

export default userRoutes;