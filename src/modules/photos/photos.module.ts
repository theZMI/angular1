import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { ApiService } from './services/api.service';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent
  },
];

@NgModule({
  declarations: [
    ListComponent,
    ItemComponent
  ],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    ApiService
  ]
})
export class PhotosModule { }
