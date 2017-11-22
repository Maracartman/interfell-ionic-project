import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import {LoginProvider} from "../../providers/login/login";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    HttpModule
  ],
  providers:[
    HttpModule,
    LoginProvider
  ]
})
export class LoginPageModule {}
