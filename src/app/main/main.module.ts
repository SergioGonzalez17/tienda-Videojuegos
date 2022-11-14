import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MainRoutingModule } from './router/main.router.module';
import { HomeComponent } from './home/home.component';
import { StoreComponent } from './store/store.component';
import { RegistrationComponent } from './registration/registration.component';
import { GamesComponent } from './games/games.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    LoginComponent,
              HomeComponent,
              StoreComponent,
              RegistrationComponent,
              GamesComponent
  ],

  imports: [
    CommonModule,
    MainRoutingModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  providers: [],
})

export class mainModule { }