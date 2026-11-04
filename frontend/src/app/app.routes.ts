import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProduitPageComponent } from './components/pages/produit-page/produit-page.component';
import { CartComponent } from './components/pages/Panier/cart/cart.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:text', component: HomeComponent },
  { path: 'produit/:id', component: ProduitPageComponent },
  { path: 'cart', component: CartComponent },
  { path: 'login', component: LoginPageComponent },
];
