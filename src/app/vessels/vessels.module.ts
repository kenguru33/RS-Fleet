import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {VesselsListComponent} from "./vessels-list";
import {VesselsDetailComponent} from "./vessels-detail";
import {VesselsComponent} from "./vessels.component";
import {VesselsService} from "./vessels.service";

@NgModule({
  declarations: [
    VesselsComponent,
    VesselsListComponent,
    VesselsDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports:[
    VesselsComponent
  ],
  providers: [ VesselsService ]
})
export class VesselsModule {
}
