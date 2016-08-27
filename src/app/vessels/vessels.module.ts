import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {VesselsListComponent} from "./vessels-list";
import {VesselsDetailComponent} from "./vessels-detail";
import {VesselsComponent} from "./vessels.component";

@NgModule({
  declarations: [
    VesselsComponent,
    VesselsListComponent,
    VesselsDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule
  ],
  exports:[
    VesselsComponent
  ],
  providers: [],
  entryComponents: [],
  bootstrap: []
})
export class VesselsModule {
}
