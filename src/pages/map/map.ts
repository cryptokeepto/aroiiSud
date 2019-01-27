import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import { Geolocation, Geoposition } from 'ionic-native';

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

  Coordinates: any;
  watch: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
  }

  ionViewDidEnter() {
    this.getCurrentLocation()

  }

  private executeMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibmVra2V0c3UiLCJhIjoiY2pyZG0wdmtnMGZ5YjQzcWZrMzd6YjR0byJ9.COSYvGaj2nQB87oSB8bFRg';
    const map = new mapboxgl.Map({
      style: 'mapbox://styles/mapbox/light-v9',
      center: [this.Coordinates.longitude, this.Coordinates.latitude],
      zoom: 16,
      pitch: 80,
      minZoom: 7.5, //restrict map zoom - buildings not visible beyond 13
      maxZoom: 17,
      container: 'map'
    });
  }

  private getCurrentLocation() {
    let options = {
      frequency: 3000,
      enableHighAccuracy: true
    };

    this.watch = Geolocation.watchPosition(options)
      .subscribe((position: Geoposition) => {
        console.log(position);
        this.Coordinates = position.coords;
        this.executeMap()
      });

  };




}
