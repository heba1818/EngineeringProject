import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './home/footer/footer.component';
import { TopBarComponent } from './home/top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BodyComponent } from './home/body/body.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AddproductComponent } from './seller/add-product/addproduct.component';
import { ProductListComponent } from './seller/product-list/product-list.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ListProductComponent } from './buyer/list-product/list-product.component';
import { ListOrderComponent } from './buyer/list-order/list-order.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    TopBarComponent,
    BodyComponent,
    SignupComponent,
    LoginComponent,
    AddproductComponent,
    ProductListComponent,
    BuyerComponent,
    ListProductComponent,
    ListOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatCardModule,
    MatToolbarModule,
     MatSidenavModule,
     BrowserAnimationsModule,
     MatSlideToggleModule,
     CollapseModule.forRoot(),
     BsDropdownModule.forRoot(),
     RouterModule.forRoot([]),
     FormsModule,
     MatButtonModule
  ],
  exports: [
    MatToolbarModule,
     MatSidenavModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

