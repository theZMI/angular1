import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ListComponent } from './components';

const routes: Routes = [
  {
    path: 'list',
    component: ListComponent,
    children: [
      {
        path: 'edit',
        loadChildren: '../userEdit/userEdit.module#UserEditModule',
      }
    ]
  }
];

@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ]
})
export class UsersModule {
};