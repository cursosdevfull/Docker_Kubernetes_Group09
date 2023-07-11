import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { LoginComponent } from './login/login.component';
import { NewProductComponent } from './new-product/new-product.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'list-product',
    component: ListProductComponent
  },
  {
    path: 'new-product',
    component: NewProductComponent
  }
];

@NgModule({
  declarations: [AppComponent, ListProductComponent, NewProductComponent, LoginComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
