import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, LoadingController } from 'ionic-angular';
import { Directive, ElementRef, Renderer, ChangeDetectorRef } from '@angular/core';



@IonicPage()
@Component({
  selector: 'page-myparallax',
  templateUrl: 'myparallax.html',
})
export class MyparallaxPage {
  showToolbar: boolean = false;
  headerImgSize: string = '100%';
  headerImgUrl: string = '';
  transition: boolean = false;
  articles: Array<any> = new Array(10).fill('');

  constructor(public navCtrl: NavController, public navParams: NavParams, public renderer: Renderer, public ref: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyparallaxPage');
  }
  onScroll($event: any) {
    let scrollTop = $event.scrollTop;
    this.showToolbar = scrollTop >= 116;
    console.log(scrollTop);
    if (scrollTop < 0) {
      this.transition = false;
      this.headerImgSize = `${Math.abs(scrollTop) / 2 + 100}%`;
    } else {
      this.transition = true;
      this.headerImgSize = '100%'
    }
    this.ref.detectChanges();
  }
}
