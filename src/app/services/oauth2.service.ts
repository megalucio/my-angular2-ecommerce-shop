import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Product } from './../models/product';

@Injectable()
export class Oauth2Service {

  constructor (private http: Http, private constants: Constants) {}

  getToken(): Observable<any> {

    let tokenUrl: string = this.constants.serviceUrl + '/oauth/token';
    let bodyOauth: string = "grant_type=password" + "&username=" + this.constants.username + "&password=" + this.constants.password;

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(this.constants.client+':'+this.constants.secret));

    return this.http.post(tokenUrl, bodyOauth, {headers: headers})
                   .map(res => res.json())
                     .catch(this.handleError);
   }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
