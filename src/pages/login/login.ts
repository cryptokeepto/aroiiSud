import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from "../tabs/tabs";
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public email: string;
  public password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    if (this.email == localStorage.getItem("email") && this.password == localStorage.getItem("password")) {
      this.navCtrl.setRoot(TabsPage);
    } else {
      alert("email or password invalid");
      return;  
    }
  }

  register() {
    this.navCtrl.push(RegisterPage); 
  }

}
