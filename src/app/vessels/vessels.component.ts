import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {VesselsService} from "./vessels.service";

@Component({
  selector: 'rs-vessels',
  templateUrl: 'vessels.component.html',
  styleUrls: ['vessels.component.css']
})
export class VesselsComponent implements OnInit, OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['vesselTitle']);
  }

  @Input() vesselTitle = "Vessels Component Works!";

  constructor() { }

  ngOnInit() {
  }

}
