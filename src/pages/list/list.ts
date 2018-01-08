import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ViewChild, ViewChildren, QueryList } from '@angular/core';

import {
  Direction,
  StackConfig,
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent
} from 'ionic-swing';


@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ListPage {

  showToolbar: boolean = false;
  transition: boolean = false;
  activeBg: any = '80%';
  dojump: boolean = false;
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  stackConfig: StackConfig;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }

    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.UP, Direction.DOWN, ,],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        //console.log(offsetX);


        return Math.min(1, 1);
      },
      transform: (element, x, y) => {
        this.trackdrag(element, x, y);
      },
      throwOutDistance: (d) => {
        return 300;
      }
    }

  }

  /*  itemTapped(event, item) {
     // That's right, we're pushing to ourselves!
     this.navCtrl.push(ListPage, {
       item: item
     });
   } */

  ngAfterViewInit() {
    // ViewChild & ViewChildren are only available
    // in this function

    // console.log(this.swingStack); // this is the stack
    //console.log(this.swingCards); // this is a list of cards

    // we can get the underlying stack
    // which has methods - createCard, destroyCard, getCard etc
    //console.log(this.swingStack.stack);

    // and the cards
    // every card has methods - destroy, throwIn, throwOut etc
    this.swingCards.forEach((c) => console.log(c.getCard()));

    // this is how you can manually hook up to the
    // events instead of providing the event method in the template
    this.swingStack.dragstart.subscribe(
      (event: ThrowEvent) => console.log('Manual hook: '));

    this.swingStack.dragstart.subscribe(
      (event: DragEvent) => {
        //console.log('drag ', event);

      }


    );

    this.swingStack.dragmove.subscribe((event: DragEvent) => {
      //this.activeBg=Math.abs(y);
      //event.offset = 0;
      //console.log(event);
      if (event.offset > 0) {
        console.log('dont move');
        //console.log(event.offset);
        //this.stopdrag();
      }
    });
  }



  trackdrag(element, x, y) {
    console.log('Xvalue:', x);
    console.log('Yvalue:', y);
    if (x > 0 || x < 0) {
      x = 0;
      y = y;
    }

    if (y < -50) {
      x = x;
      y = -300;
      this.dojump = true;
    }
    if (y >= 50 || y < -300) {
      x = x;
      y = 0;
      this.dojump = false;
    }
    else {
      x = 0;
      y = y;

    }
    element.style['transform'] = ` translate(${x}px, ${y}px)`;
    this.activeBg = Math.abs(y) / 100;
  }

  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }
}
