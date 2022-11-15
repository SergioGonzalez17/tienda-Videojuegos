import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../games/games.component';
import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component'
import { RegistrationComponent } from '../registration/registration.component';
import { StoreComponent } from '../store/store.component';


const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home/:id',
    component: HomeComponent
  },
  {
    path: 'store',
    component: StoreComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'games',
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
