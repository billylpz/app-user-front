import { Routes } from '@angular/router';
import { UserFrontLayoutComponent } from '../user-front/layouts/user-front-layout/user-front-layout.component';
import { HomePageComponent } from '../user-front/pages/home-page/home-page.component.component';
import { UserFormComponent } from '../user-front/pages/user-form/user-form.component';

export   const userRoutes: Routes = [
  {
    path:"", component:UserFrontLayoutComponent,
    children:[
      {path:"users",component:HomePageComponent},
      {path:"form",component:UserFormComponent},
      {path:"form/:id",component:UserFormComponent},
      {path:"**",redirectTo:"users"}
    ]
    
  }
];

export default userRoutes;