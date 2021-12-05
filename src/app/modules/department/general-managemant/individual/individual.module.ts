import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndividualRoutingModule } from './individual-routing.module';
import { ImageCropperModule } from 'ngx-image-cropper';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    IndividualRoutingModule,
    ImageCropperModule
  ]
})
export class IndividualModule { }
