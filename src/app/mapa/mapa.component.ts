import {Component} from '@angular/core';
import { ViewChild } from "@angular/core";
import {googlemaps} from "google.maps";

@Component({
    selector: 'mapa-component',
    templateUrl: './mapa.component.html'
})

export class MapaComponent{
    lat: number = 51.678418;
    lng: number = 7.809007;
    start_end_mark = [];
    @ViewChild('mapa') mapElement: any;
    map: google.maps.Map;
    center: google.maps.LatLngLiteral;


    latlng = [
      [
        23.0285312,
        72.5262336
      ],
      [
        19.0760,
        72.8777
      ],
      [
        25.2048,
        55.2708
      ]
    ];
    
    constructor() {
      // this i write because to display a marks on first place and last place
      this.start_end_mark.push(this.latlng[0]);
      this.start_end_mark.push(this.latlng[this.latlng.length - 1]);
      this.center = {lat: 30, lng: -110};
      
     }

      initMap(): void {
        this.map = new google.maps.Map(document.getElementById("map") as HTMLElement);
      }
  
     ngOnInit(): void {
        const mapProperties = {
             center: new google.maps.LatLng(35.2271, -80.8431),
             zoom: 15,
             mapTypeId: google.maps.MapTypeId.SATELLITE
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
     }


}