import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckDivergenceRoutingModule } from './check-divergence-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CheckDivergenceRoutingModule,
    ImageCropperModule
  ]
})
export class CheckDivergenceModule { }
