import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../games/games.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component'
import { RegistrationComponent } from '../registration/registration.component';
import { StoreComponent } from '../store/store.component';


const routes: Routes = [
    {path: '', redirectTo: 'Login', pathMatch: 'full' },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Store',
    component: StoreComponent
  },
  {
    path: 'Registration',
    component: RegistrationComponent
  },
  {
    path: 'Games',
    component: GamesComponent
  }
];

@NgModule({
  declarations: [
   
  ],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
