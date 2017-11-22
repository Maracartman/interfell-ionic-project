import {Injectable} from "@angular/core";

@Injectable()
export class AppSettings {
  /**
   * General app configuration
   * */
  APP;
  REST_CONFIG;
  END_POINTS;

  constructor() {
    this.APP = 'APP_WEB';

    this.REST_CONFIG = {
      ENDPOINT: 'https://dev.tuten.cl:443',
      REST_RESOURCE: '/TutenREST/rest'
    }

    this.END_POINTS = {
      USER: '/user/'
    }
  }
}
