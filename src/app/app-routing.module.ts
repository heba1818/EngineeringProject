import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './seller/add-product/addproduct.component';
import { ProductListComponent } from './seller/product-list/product-list.component';
import { SellerComponent } from './seller/seller.component';

const routes: Routes = [
  
  { path: 'body', component: BodyComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'seller', component: SellerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
