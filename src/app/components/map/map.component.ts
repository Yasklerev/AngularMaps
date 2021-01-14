import { Component, OnInit } from '@angular/core';
import { Marker } from 'src/app/classes/marker.class';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
  markers: Marker[] = [];
  // sizeArray = JSON.parse(localStorage.getItem('markers')).length;
  // loadMarkers = JSON.parse(localStorage.getItem('markers'));

  lat = 51.678418;
  lng = 7.809007;

  constructor(private snackBar: MatSnackBar) {
    const newMarker = new Marker(51.678418, 7.809007);
    this.markers.push(newMarker);
    // for (let i = 0; i <= this.sizeArray; i++) {
    //   this.markers.push(this.loadMarkers[i]);
    // }

    if (localStorage.getItem('markers')) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
    }
  }

  ngOnInit(): void {}

  addMarker(event): void {
    const coords: { lat: number; lng: number } = event.coords;

    const newMarker = new Marker(coords.lat, coords.lng);
    this.markers.push(newMarker);
    this.saveStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar');
  }

  saveStorage(): void {
    localStorage.setItem('markers', JSON.stringify(this.markers));
  }

  deleteMarker(i: number): void {
    this.markers.splice(i, 1);
    this.saveStorage();
    this.snackBar.open('Marcador borrado', 'Cerrar');
  }
}
