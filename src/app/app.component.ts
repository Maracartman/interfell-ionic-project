import {Component, ViewChild} from '@angular/core';

import {Platform, MenuController, Nav} from 'ionic-angular';

import {HelloIonicPage} from '../pages/hello-ionic/hello-ionic';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {LoginProvider} from "../providers/login/login";
import {WelcomePage} from "../pages/welcome/welcome";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage = this.getPageBasedOnLogStatus();
  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
              public menu: MenuController,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen, loginProvider: LoginProvider) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      {title: 'Main', component: WelcomePage}
    ];
    if(localStorage.getItem('token') === null){
      this.pages.push({title: 'Log In', component: LoginPage})
    }else{
      this.pages.push({title: 'Log Out', component: null })
    }
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getPageBasedOnLogStatus() {
    return localStorage.getItem('token') != null ? WelcomePage : LoginPage;
  }


  openPage(page) {
    this.menu.close();
    if(page.component) {
      this.nav.setRoot(page.component);
    }else{
      localStorage.clear();
      this.nav.setRoot(LoginPage);
      window.location.reload();
    }
  }

  isNotLogged(){
    return localStorage.getItem('token') === null;
  }

  getUserData(){
    return localStorage.getItem('firstName')+' '+localStorage.getItem('lastName');
  }
}
