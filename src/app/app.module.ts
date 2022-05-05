import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import {HttpClientModule} from '@angular/common/http';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { DemoAuthGuardComponent } from './demo-auth-guard/demo-auth-guard.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateComponent,
    ProductEditComponent,
    ProductDeleteComponent,
    LoginComponent,
    DemoAuthGuardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
