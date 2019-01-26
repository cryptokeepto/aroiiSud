import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public datas = [
    {
      "image": "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg",
      "avatar": "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg"
      
    },
    {
      "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "avatar": "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1OxHsyqPoWvXYwxzRAuHYDbJ9N0l-wkQnVDvwMCzIEWMa1NaFKg",
      "avatar": "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg"
    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgk5fJJXAjnNrvRFgyixG13srq-UpiVEghcLXgzlnYnG3KEhYi",
      "avatar": "https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2016/04/avatar-hf545-h_2016.jpg"
    }
  ];

  public intersted;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    const intersted = this.navParams.get("interstedData");
    this.intersted = intersted
  }

}
