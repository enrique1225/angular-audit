import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { VERSION, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-check-divergence',
  templateUrl: './check-divergence.component.html',
  styleUrls: ['./check-divergence.component.css']
})
export class CheckDivergenceComponent {

  company : string;
  department: string;
  unit: string;
  start_date: string;
  end_date: string;
  checker_name: string;
  findings: string;
  type: string;
  version: string;
  category: string;
  status: string;
  checkpoint_number: string;
  action_date: string;

  imgChangeEvt: any = '';
  cropImgPreview: any = '';


  constructor() { 
    this.company = "Food Delivery";
    this.department = "General Department";
    this.unit = "Individual Proprietorship";
    this.start_date = "2019/06/25";
    this.end_date = "2020/08/25";
    this.checker_name = "Cristina";
    this.findings = "true";
    this.type = "Food";
    this.version = "1.0"
    this.category = "Apple";
    this.status = "open";
    this.checkpoint_number = "11111";
    this.action_date = "2021/06/30"
  }

  sumit_audit(): void {
      window.location.reload();
  }

  ngOnInit(): void {
    
  }

  @ViewChild("drag_image") myNameElem: any = ElementRef;

  getValue() {
    // this.myNameElem.style.display = "none";
    console.log(this)
  }
  
  resetValue() {
    this.myNameElem.nativeElement.value = "";
  }


  onFileChange(event: any): void {
    this.imgChangeEvt = event;
  }
  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64;
  }


  imgLoad() {
    console.log(<HTMLInputElement>document.getElementById("drag_image"))
  }

  initCropper() {
  }

  imgFailed() {
      // error msg
  }
}
