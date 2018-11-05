import { Component, OnInit, ViewChild } from '@angular/core';
import { Marker } from '@agm/core/services/google-maps-types';
import { MarkerConf } from '../../class/markerConf.class';

const createMarker: Alert = {
  type: 'success',
  message: 'Se creo correctamente el marker',
};
const deleteMarker: Alert = {
  type: 'warning',
  message: 'Se borro correctamente el marker',
};


@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  alert: Alert;

  markers: MarkerConf[] = [];
  lat = 51.678418;
  lng = 7.809007;
  constructor() {
    if( localStorage.getItem('marcadores')){
      this.markers = JSON.parse(localStorage.getItem('marcadores'));
    }
    // const newMarker = new MarkerConf(51.678418, 7.809007);
    // this.markers.push(newMarker);
   }

  ngOnInit() {
  
  }
  agregarMarker(event){
    const coords: {lat: number, lng: number} = event.coords;

    const newMarker = new MarkerConf(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.infoAction(createMarker);
    this.guardarStorage();

    console.log(event);
  }


  guardarStorage () {
    localStorage.setItem('marcadores',JSON.stringify( this.markers));
  }

  deleteMarker(index: number){

    this.markers.splice(index,1);
    this.infoAction(deleteMarker);
    this.guardarStorage(); 

  }

  infoAction(value){
    this.alert = value;
  }
  close(alert: Alert) {
    debugger;
    //this.alert.splice(this.alert.indexOf(alert), 1);
  }
}
