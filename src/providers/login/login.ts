import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login} from "../../models/login";
import {Http,Headers,RequestOptions} from "@angular/http";
import {AppSettings} from "../../config/app.settings";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginProvider {

  headers: Headers;
  options: RequestOptions;

  constructor(private http: Http) {
    console.log('Hello LoginProvider Provider');
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({headers: this.headers});
  }

  logMe(login: Login){

    /**
     * Lets build the Request Header
     * */
    this.headers.append('password',login.password);
    this.headers.append('app',AppSettings.APP);
    this.headers.append('Accept','application/json');


    return this.http
      .put(AppSettings.REST_CONFIG.ENDPOINT+AppSettings.END_POINTS.USER+login.email,
        {},this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    // localStorage.setItem('token',body.sessionTokenWeb);
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  printConsoleMsg() : void {
    console.log("Log Provider is working");
  }

}
