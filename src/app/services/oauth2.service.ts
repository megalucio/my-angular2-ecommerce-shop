import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Product } from './../models/product';

@Injectable()
export class Oauth2Service {

  private username: string = 'andres';
  private password: string = '1234';

  private client:string = 'mqaposclient';
  private secret:string = 'teamHybris2016';

  private tokenUrl: string = 'http://mqa:8080/mqapos-2.0/oauth/token';

  private bodyOauth: string = "grant_type=password" + "&username=" + this.username + "&password=" + this.password;

  constructor (private http: Http) {}

  getToken(): Observable<any> {

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    headers.append('Authorization', 'Basic ' + btoa(this.client+':'+this.secret));

    return this.http.post(this.tokenUrl, this.bodyOauth, {headers: headers})
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
