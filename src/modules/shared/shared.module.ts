//import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { UserApiService } from './services/user.api.service';
import { UserPreviewComponent } from './components/userPreview/userPreview.component';


@NgModule({
  declarations: [
    UserPreviewComponent
  ],
  exports: [
    UserPreviewComponent
  ],
  imports: [
    HttpClientModule,
    // CommonModule,
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ UserApiService ]
    }
  }
}