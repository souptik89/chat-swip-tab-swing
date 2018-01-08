import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
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
/**
 * Generated class for the TestswingPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testswing',
  templateUrl: 'testswing.html',
})
export class TestswingPage {
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;
  cards: Array<any>;
  stackConfig: StackConfig;

  constructor() {

    this.stackConfig = {
      // Default setting only allows UP, LEFT and RIGHT so you can override this as below
      allowedDirections: [Direction.LEFT, , ,],
      // Now need to send offsetX and offsetY with element instead of just offset
      throwOutConfidence: (offsetX, offsetY, element) => {
        //console.log(offsetX);


        return Math.min(Math.max(Math.abs(offsetX) / (element.offsetWidth / 1.7), Math.abs(offsetY) / (element.offsetHeight / 2)), 1);
      },
      transform: (element, x, y, r) => {
        this.stopdrag(element, x, y, r);
      },
      throwOutDistance: (d) => {
        return 1;
      }
    }

    this.cards = [

      { name: 'spades', symbol: '♠' }
    ];
  }
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

      //event.offset = 0;
      //console.log(event);
      if (event.offset > 0) {
        console.log('dont move');
        //console.log(event.offset);
        //this.stopdrag();
      }
    });
  }
  decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof (padding) === 'undefined' || padding === null ? padding = 2 : padding;

    while (hex.length < padding) {
      hex = '0' + hex;
    }

    return hex;
  }
  stopdrag(element, x, y, r) {
    console.log(x);
    console.log(y);
    if (x > 0) {
      x = 0;
      y = 0;
    }
    else if (x < 0) {
      x = x;
      y = 0;
    }
    else if (y < 0) {
      x = x;
      y = 0;
    }
    else if (y > 0) {
      x = x;
      y = 0;
    }
    else {
      x = x;
      y = y;
    }
    element.style['transform'] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TestswingPage');
  }
  onThrowOut(event: ThrowEvent) {
    console.log('Hook from the template', event.throwDirection);
  }
}
