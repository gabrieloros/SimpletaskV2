import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-panel-control',
  templateUrl: './panel-control.component.html',
  styleUrls: ['./panel-control.component.css']
})
export class PanelControlComponent implements OnInit {
 @Input() createClaim = true ;
  constructor() {}

  ngOnInit() {

  }
  public createClaims (value) {
    debugger;
    const formCreateClaims = value;
    this.createClaim = formCreateClaims;
  }
}
