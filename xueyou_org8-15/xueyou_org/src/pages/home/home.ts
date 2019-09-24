import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  touchID = 1;
  touchUp = 1;
  touchTabsID = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  touchMe(e){
    
    this.touchID = e;
  
  }
  touchSignUp(e){
    if (this.touchID == 4) {
      this.touchUp = e;
    }
  }
  touchTabs(e){
    this.touchTabsID = e;
    if (this.touchTabsID == 1) {
      this.touchID = 1;
    }
  }
}
