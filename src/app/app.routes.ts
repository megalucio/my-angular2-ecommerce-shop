import {Routes} from '@angular/router';
import {About} from './components/about/about';
import {Home} from './components/home/home';
import {Products} from './components/products/products';

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'products', component: Products},
  {path: 'home', component: Home},
  {path: 'about', component: About},
];

