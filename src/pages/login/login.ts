import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
              private _loginProvider: LoginProvider) {
  }

  /*logMe(): void {
    this._loginProvider.logMe(this.login).subscribe(
      result => {
        console.log(result);
        // this.router.navigate(['dashboard']);
      },
      error => {
      }
    );
  }*/

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
