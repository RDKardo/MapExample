import {Component} from '@angular/core';

@Component({
    selector: 'mapa-component',
    templateUrl: './mapa.component.html'
})
export class MapaComponent{
    lat: number = 51.678418;
    lng: number = 7.809007;
    start_end_mark = [];

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
     }
  
    ngOnInit() {
        alert(this.latlng[0].toString());

    }


}