import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonalHomepageOthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal-homepage-others',
  templateUrl: 'personal-homepage-others.html',
})
export class PersonalHomepageOthersPage {
  touchID = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalHomepageOthersPage');
  }
  touchMe(e){
    this.touchID = e;
  }

}
