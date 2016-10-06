import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';

import { Product } from './../models/product';

@Injectable()
export class ProductService {

  private token = "abafda6f-6881-4837-a0dd-f1c730b69a4e";

  private productsUrl = 'http://mqa:8080/mqapos-2.0/products?access_token=' + this.token;  // URL to web API

  constructor (private http: Http) {}

  getProducts(): Observable<any> {
      return this.http.get(this.productsUrl)
                   .map(res => res.json())
                     .catch(this.handleError);
   }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
