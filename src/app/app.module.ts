import { IterablePipe } from './pipes/maptoiterable';
import { Constants } from './constants';
import {NgModule} from '@angular/core'
import {RouterModule} from "@angular/router";
import {rootRouterConfig} from "./app.routes";
import {AppComponent} from "./app";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { HttpModule, JsonpModule } from '@angular/http';
import {About} from './components/about/about';
import {Home} from './components/home/home';
import {Products} from './components/products/products';
import {Cart} from './components/cart/cart';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

@NgModule({
  declarations: [AppComponent, About, Home, Products, Cart, IterablePipe],
  imports     : [BrowserModule, FormsModule, HttpModule, JsonpModule, RouterModule.forRoot(rootRouterConfig)],
  providers   : [Constants, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap   : [AppComponent]
})
export class AppModule {

}
