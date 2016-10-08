import { Oauth2Service } from './services/oauth2.service';
import {Component} from '@angular/core';

import './rxjs-operators';

@Component({
  selector   : 'app',
  templateUrl: './app.html',
  providers: [Oauth2Service]
})
export class AppComponent {

  errorMessage: string;
  token: string;

  constructor(private oauth2Service: Oauth2Service) { }

  getToken(): void {
      this.oauth2Service.getToken()
                      .subscribe(
                        data =>  localStorage["token"] = this.token = data.access_token,
                        error =>  this.errorMessage = <any>error);
  }   
                   
  ngOnInit(): void {
    this.getToken();
  }
}
