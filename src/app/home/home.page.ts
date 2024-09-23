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
    this.map = L.map('mapId').setView([-7.78031726531913, 110.36799547304071], 11);

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
      iconUrl: 'assets/icon/marker.png', // Path ke file icon
      iconSize: [38, 38], // Ukuran ikon
      iconAnchor: [19, 38], // Anchor point di bawah ikon
      popupAnchor: [0, -38], // Posisi popup relatif terhadap ikon
    });

    // Tambahkan marker dengan ikon custom
    this.marker = L.marker([-7.7954472430867074, 110.38384628747343], { icon: customIcon }).addTo(this.map);
    this.marker.bindPopup(`
        <b>Stadion Mandala Krida</b>
        <br>
        Gedung Olahraga
        <br>
        <div style="text-align: center;">
    <img src="https://storage.googleapis.com/seo-cms/assets/sejarah_stadion_mandala_krida_423a1a3f4e/sejarah_stadion_mandala_krida_423a1a3f4e.jpg" alt="Stadion Mandala Krida" width="100" height="100"></div>
    `).openPopup();

    // Marker kedua
const marker2 = L.marker([-7.749924850440371, 110.41804480452821], { icon: customIcon }).addTo(this.map);
marker2.bindPopup(`
  <b>Stadion Maguwoharjo</b><br>
  Gedung Olahraga<br>
  <div style="text-align: center;">
    <img src="https://yogyapos.com/images/berita/yogya-pos-stadion-maguwoharjo-segera-dibenahi-ini-agendanya-52.jpeg" alt="Stadion Maguwoharjo" width="100" height="100">
  </div>
`);

const marker3 = L.marker([-7.875349, 110.380186], { icon: customIcon }).addTo(this.map);
marker3.bindPopup(`
  <b>Stadion Sultan Agung</b><br>
  Gedung Olahraga<br>
  <div style="text-align: center;">
    <img src="https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/223/2024/04/16/stadion-sultan-agung-bantul-1885040055.jpg" alt="Stadion Sultan Agung" width="100" height="100">
  </div>
`);

  }
}
