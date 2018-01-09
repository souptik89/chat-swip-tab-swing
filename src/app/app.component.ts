import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Chat } from '../pages/chat/chat';
import { AccordionPage } from '../pages/accordion/accordion';
import { MyparallaxPage } from '../pages/myparallax/myparallax';
import { TestswingPage } from '../pages/testswing/testswing';
import { SwiptabPage } from '../pages/swiptab/swiptab';
import { SlidingitemPage } from '../pages/slidingitem/slidingitem';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage },
      { title: 'Accordion', component: AccordionPage },
      { title: 'Chat', component: Chat },
      { title: 'parallax', component: MyparallaxPage },
      { title: 'TestswingPage', component: TestswingPage },
      { title: 'SwiptabPage', component: SwiptabPage },
      { title: 'sliding', component: SlidingitemPage }

    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
