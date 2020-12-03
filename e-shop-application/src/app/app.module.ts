import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CartComponent } from './components/cart/cart.component';
import { LoginComponent } from './components/login/login.component';
import { StoreComponent } from './components/store/store.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { FilterComponent } from './components/filter/filter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    LoginComponent,
    StoreComponent,
    ProductCardComponent,
    SignupComponent,
    UserOrdersComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
