import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ItemSliding } from 'ionic-angular';
import { ViewChild } from 'ionic-swing/node_modules/@angular/core/src/metadata/di';
/**
 * Generated class for the SlidingitemPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slidingitem',
  templateUrl: 'slidingitem.html',
})
export class SlidingitemPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidingitemPage');
  }
  share(slidingItem: ItemSliding) {
    slidingItem.close();
  }

  ondrag(item) {
    let percent = item.getSlidingPercent();
    if (percent > 0) {
      // positive
      console.log('right side');
    } else {
      // negative
      console.log('left side');
    }
    if (Math.abs(percent) > 1) {
      console.log('overscroll');
    }
  }
}
