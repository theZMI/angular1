import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { SharedModule } from '../shared/shared.module';


const routes: Routes = [
  {
    path: 'users',
    loadChildren: '../users/users.module#UsersModule',
  },
  {
    path: 'photos',
    loadChildren: '../photos/photos.module#PhotosModule',
  },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule.forRoot(),
    ModalModule.forRoot(),
    HttpClientModule,
    // UsersModule,
    // PhotosModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // UserApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
