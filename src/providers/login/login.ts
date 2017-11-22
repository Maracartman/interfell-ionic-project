import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login} from "../../models/login";

@Injectable()
export class LoginProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LoginProvider Provider');
  }

  logMe(login: Login){

  }

  printConsoleMsg() : void {
    console.log("Log Provider is working");
  }

}
