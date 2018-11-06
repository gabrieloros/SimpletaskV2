import { Component, OnInit, ViewChild } from '@angular/core';
import { PanelControlComponent } from '../panel-control.component';

@Component({
  selector: 'app-panel-buttons',
  templateUrl: './panel-buttons.component.html',
  styleUrls: ['./panel-buttons.component.css']
})
export class PanelButtonsComponent implements OnInit {

  @ViewChild(PanelControlComponent) panelControl: PanelControlComponent;

  constructor() { }

  ngOnInit() {
  }

  createNewsClaims() {
    this.panelControl.createClaim = true;
  }

}
