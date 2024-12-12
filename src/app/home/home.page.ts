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
    this.map = L.map('mapId').setView([-2.50, 117.90], 5);

    
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
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', 
    {
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});



basemap1.addTo(this.map);

var baseMaps = {
    "OpenStreetMap": basemap1,
    "Esri World Street": basemap2,
    "Esri Imagery": basemap3,
    "Open Topo Map": basemap4
};

L.control.layers(baseMaps).addTo(this.map);



// Marker custom dengan icon sendiri
    const customIcon = L.icon({
      iconUrl: 'assets/icon/mountain.png', // Path ke file icon
      iconSize: [38, 38], // Ukuran ikon
      iconAnchor: [19, 38], // Anchor point di bawah ikon
      popupAnchor: [0, -38], // Posisi popup relatif terhadap ikon
    });

    // Tambahkan marker dengan ikon custom
    this.marker = L.marker([3.2324749597164226, 98.38754482701681], { icon: customIcon }).addTo(this.map);
    this.marker.bindPopup(`
        <b>Mount Sinabung</b>
        <br>
        <div style="text-align: center;">
    <img src="assets/img/sinabung.jpg" width="100" height="100"></div>
    `);

const marker2 = L.marker([-0.3914033374162823, 100.45565477521075], { icon: customIcon }).addTo(this.map);
marker2.bindPopup(`
  <b>Mount Marapi</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/marapi.jpeg" width="100" height="100">
  </div>
`);

const marker3 = L.marker([-1.6952935163343357, 101.26399306270585], { icon: customIcon }).addTo(this.map);
marker3.bindPopup(`
  <b>Mount Kerinci</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/kerinci.jpg" width="100" height="100">
  </div>
`);

const marker4 = L.marker([-6.101306529862345, 105.42294431618747], { icon: customIcon }).addTo(this.map);
marker4.bindPopup(`
  <b>Mount Anak Krakatau</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/krakatau.jpg" width="100" height="100">
  </div>
`);

const marker5 = L.marker([-7.5393984070502, 110.44572403183534], { icon: customIcon }).addTo(this.map);
marker5.bindPopup(`
  <b>Mount Merapi</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/merapi.jpg" width="100" height="100">
  </div>
`);

const marker6 = L.marker([-8.106654759435385, 112.92249326265545], { icon: customIcon }).addTo(this.map);
marker6.bindPopup(`
  <b>Mount Semeru</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/semeru.jpg" width="100" height="100">
  </div>
`);

const marker7 = L.marker([-7.941898271388679, 112.95305504727213], { icon: customIcon }).addTo(this.map);
marker7.bindPopup(`
  <b>Mount Bromo</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/bromo.jpeg" width="100" height="100">
  </div>
`);

const marker8 = L.marker([-8.342034658991127, 115.50765646147686], { icon: customIcon }).addTo(this.map);
marker8.bindPopup(`
  <b>Mount Agung</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/agung.jpg" width="100" height="100">
  </div>
`);

const marker9 = L.marker([-8.410175114942641, 116.4569352439802], { icon: customIcon }).addTo(this.map);
marker9.bindPopup(`
  <b>Mount Rinjani</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/rinjani.jpg" width="100" height="100">
  </div>
`);

const marker10 = L.marker([-8.195543299587802, 119.06962002312902], { icon: customIcon }).addTo(this.map);
marker10.bindPopup(`
  <b>Mount Sangeang Api</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/sangeang.jpg" width="100" height="100">
  </div>
`);

const marker11 = L.marker([-8.537024998595552, 122.76752523895581], { icon: customIcon }).addTo(this.map);
marker11.bindPopup(`
  <b>Mount Lewotobi Laki-laki</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/lewotobi.jpg" width="100" height="100">
  </div>
`);

const marker12 = L.marker([-8.493885465711026, 124.11984728912356], { icon: customIcon }).addTo(this.map);
marker12.bindPopup(`
  <b>Mount Sirung</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/sirung.jpeg" width="100" height="100">
  </div>
`);

const marker13 = L.marker([-4.521781868465779, 129.87921325825235], { icon: customIcon }).addTo(this.map);
marker13.bindPopup(`
  <b>Mount Banda Api</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/banda.jpg" width="100" height="100">
  </div>
`);

const marker14 = L.marker([0.8098531640344914, 127.33307573861428], { icon: customIcon }).addTo(this.map);
marker14.bindPopup(`
  <b>Mount Gamalama</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/gamalama.jpg" width="100" height="100">
  </div>
`);

const marker15 = L.marker([1.494925276250555, 127.63564871179346], { icon: customIcon }).addTo(this.map);
marker15.bindPopup(`
  <b>Mount Ibu</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/ibu.jpg" width="100" height="100">
  </div>
`);

const marker16 = L.marker([2.7818190954385957, 125.40640903855659], { icon: customIcon }).addTo(this.map);
marker16.bindPopup(`
  <b>Mount Karangetang</b>
  <br>
  <div style="text-align: center;">
    <img src="assets/img/karangetang.jpg" width="100" height="100">
  </div>
`);

  }
}
