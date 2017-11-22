import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LoginProvider} from "../../providers/login/login";
import {Login} from "../../models/login";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login: Login = {
    email: '',
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private _loginProvider: LoginProvider,public alerCtrl: AlertController) {
  }

  logMe(): void {
    this._loginProvider.logMe(this.login).subscribe(
      result => {
        let alert = this.alerCtrl.create({
          title: 'Bienvenido! ' ,
          message: result.firstName+' '+result.lastName,
          buttons: [{
            text: 'Ok',
            handler: func =>{
              window.location.reload();
            }
          }]
        });
        alert.present();
      },
      error => {
        let alert = this.alerCtrl.create({
          title: 'Error!' ,
          message: error,
          buttons: [{
            text: 'Ok',
            handler: func =>{
              this.login.password = '';
              this.login.email = '';
            }
          }]
        });
        alert.present();
      }
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
