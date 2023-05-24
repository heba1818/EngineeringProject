import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './home/body/body.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './seller/add-product/addproduct.component';
import { ProductListComponent } from './seller/product-list/product-list.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ListProductComponent } from './buyer/list-product/list-product.component';
import { ListOrderComponent } from './buyer/list-order/list-order.component';
import { UserListComponent } from './user-list/user-list.component';
import { LogisticComponent } from './logistic/logistic.component';
import { OffersComponent } from './logistic/offers/offers.component';

const routes: Routes = [
  
  { path: 'body', component: BodyComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addproduct', component: AddproductComponent },
  { path: 'productlist', component: ProductListComponent },
  { path: 'seller', component: SellerComponent },
  { path: 'buyer',component:BuyerComponent},
  { path: 'listproduct', component:ListProductComponent},
  { path: 'listorder', component:ListOrderComponent},
  { path: 'user-list', component: UserListComponent },
  { path: 'logistic', component: LogisticComponent},
  { path: 'offers', component: OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
