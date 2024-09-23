import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  map!: L.Map;
  marker!: L.Marker;

  constructor() {}
  
  ngOnInit() {}

  ionViewDidEnter() {
    // Create the map
    this.map = L.map('mapId').setView([-7.78031726531913, 110.36799547304071], 13);

   // Basemap
   L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
        'Map data ©️ <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(this.map);

var basemap1 = L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution:
            '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> | <a href="DIVSIGUGM" target="_blank">DIVSIG UGM</a>',
    }
);

var basemap2 = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
    {
        attribution:
            'Tiles &copy; Esri | <a href="Latihan WebGIS" target="_blank">DIVSIG UGM</a>',
    }
);

var basemap3 = L.tileLayer(
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    {
        attribution:
            'Tiles &copy; Esri | <a href="Latihan WebGIS" target="_blank">DIVSIG UGM</a>',
    }
);

var basemap4 = L.tileLayer(
    "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    {
        attribution:
            '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
    }
);
basemap1.addTo(this.map);

var baseMaps = {
    "OpenStreetMap": basemap1,
    "Esri World Street": basemap2,
    "Esri Imagery": basemap3,
    "Stadia Dark Mode": basemap4
};

L.control.layers(baseMaps).addTo(this.map);

    // Add a marker with a popup
    this.marker = L.marker([-7.787578605374033, 110.37422167892638]).addTo(this.map);
    this.marker.bindPopup("<b>Sarana Olahraga</b><br>Stadion Kridosono").openPopup();
  }
}
