import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewWillEnter() {
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
      container: 'map',

    });
    map.on('load', function () {
      map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': {
            'type': 'identity',
            'property': 'height'
          },
          'fill-extrusion-base': {
            'type': 'identity',
            'property': 'min_height'
          },
          'fill-extrusion-opacity': .6
        }
      });
    });


    var html = `
    <div>
      Name: Shi <br />
      Discount level: 20% <br />
      Detail: lorem ba ba ba
    </div>`;

    var customPopUp = new mapboxgl.Popup(
      {
        anchor: 'bottom',   // To show popup on top
        offset: { 'bottom': [0, -10] },  // To prevent popup from over shadowing the marker.
        closeOnClick: false   // To prevent close on mapClick.
      }
    ).setHTML(html);
    new mapboxgl.Marker()
      .setLngLat([this.Coordinates.longitude, this.Coordinates.latitude])
      .setPopup(customPopUp)
      .addTo(map);
  }

  private getCurrentLocation() {
    let options = {
      frequency: 1000,
      enableHighAccuracy: true
    };

    this.watch = Geolocation.watchPosition(options)
      .subscribe((position: Geoposition) => {
        this.Coordinates = position.coords;
        this.executeMap()
      });

  };




}
