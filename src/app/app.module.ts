import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Chat } from '../pages/chat/chat';
import { AccordionPage } from '../pages/accordion/accordion';
import { MyparallaxPage } from '../pages/myparallax/myparallax';
import { TextgrowDirective } from '../directives/textgrow/textgrow';
import { ParallaxDirective } from '../directives/parallax/parallax';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionComponent } from '../components/accordion/accordion';
import { TestswingPage } from '../pages/testswing/testswing';
import { SwiptabPage } from '../pages/swiptab/swiptab';
import { SlidingitemPage } from '../pages/slidingitem/slidingitem';


import { IonicSwingModule } from 'ionic-swing';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    Chat,
    AccordionPage,
    MyparallaxPage,
    TextgrowDirective,
    ParallaxDirective,
    AccordionComponent,
    TestswingPage,
    SwiptabPage,
    SlidingitemPage

  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, IonicSwingModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Chat,
    AccordionPage,
    MyparallaxPage,
    TestswingPage,
    SwiptabPage,
    SlidingitemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
