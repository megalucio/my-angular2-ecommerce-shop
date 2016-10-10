import { Constants } from './../constants';
import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Product } from './../models/product';

@Injectable()
export class ProductService {

  constructor (private http: Http, private constants: Constants) {}

  getProducts(): Observable<any> {

      let productsUrl = this.constants.serviceUrl + '/products?access_token=' + localStorage["token"];

      return this.http.get(productsUrl)
                      .map(res => res.json())
                      .catch(this.handleError);
   }

  private handleError (error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
