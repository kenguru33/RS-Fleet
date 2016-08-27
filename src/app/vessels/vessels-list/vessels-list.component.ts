import { Component, OnInit } from '@angular/core';
import {Vessel} from "../models/vessel";
import {VesselsService} from "../vessels.service";

@Component({
  selector: 'rs-vessels-list',
  templateUrl: 'vessels-list.component.html',
  styles: [],
})
export class VesselsListComponent implements OnInit {
  vessels: Vessel[];
  constructor(private vesselsService: VesselsService) { }

  ngOnInit() {
    this.vessels = this.vesselsService.getVessels();
  }

}
