import {Injectable} from '@angular/core';
import {Login} from "../../models/login";
import {Http, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {AppSettings} from '../../config/app.settings';

@Injectable()
export class LoginProvider {

  headers: Headers;
  options: RequestOptions;
  route = '';

  constructor(private http: Http, private settings: AppSettings) {
    this.route = this.settings.REST_CONFIG.ENDPOINT + this.settings.REST_CONFIG.REST_RESOURCE
      + this.settings.END_POINTS.USER;
    this.headers = new Headers({'Content-Type': 'application/json'});
  }

  setHeadersData(login: Login) {
    this.headers = new Headers;
    this.headers.append('password', login.password);
    this.headers.append('app', this.settings.APP);
    this.headers.append('Accept', 'application/json');
    this.options = new RequestOptions({headers: this.headers});
  }

  logMe(login: Login) {
    /**
     * Lets build the Request Header
     * */
    this.setHeadersData(login);
    let path_email = login.email.replace('@','%');
    return this.http
      .put(this.route + path_email,
        {}, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   *
   * Login Handlers
   *
   * */
  private extractData(res: any) {
    let body = res.json();
    console.log(body);
    localStorage.setItem('token', body.sessionTokenWeb);
    localStorage.setItem('firstName',body.firstName);
    localStorage.setItem('lastName',body.lastName);
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error._body) ? error._body :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
