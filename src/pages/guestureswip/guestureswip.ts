import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, ViewChildren, QueryList } from '@angular/core';
import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';



@IonicPage()
@Component({
  selector: 'page-guestureswip',
  templateUrl: 'guestureswip.html',
})
export class GuestureswipPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuestureswipPage');
  }

}
