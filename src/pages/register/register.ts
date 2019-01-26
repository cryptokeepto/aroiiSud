import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { InterestsPage } from "../interests/interests";

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  public username: string;
  public email: string;
  public rePassword: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  nextToInterests() {
    if (this.password == this.rePassword) {
      localStorage.setItem("username", this.username);
      localStorage.setItem("email", this.email);
      localStorage.setItem("password", this.password);
      const toast = this.toastCtrl.create({
        message: "Hello, " + this.username,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(InterestsPage)
    }else {
      alert("password and repassword not match");
    }
  }

}
