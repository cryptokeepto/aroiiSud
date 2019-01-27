import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";

@IonicPage()
@Component({
  selector: 'page-interests',
  templateUrl: 'interests.html',
})
export class InterestsPage {

  private intersted: Array<string> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl:LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InterestsPage');
  }

  sum(type: string) {
    this.intersted.push(type)
  }

  finish() {
    const loading = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loading.present()
      .then(() => {
        localStorage.setItem("intersted", this.intersted + "");
        this.navCtrl.setRoot(TabsPage, { "interstedData" : this.intersted});
      })
      .catch((error) => {
        throw error;
      })

  }



}
