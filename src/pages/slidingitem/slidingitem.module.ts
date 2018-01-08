import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SlidingitemPage } from './slidingitem';

@NgModule({
  declarations: [
    SlidingitemPage,
  ],
  imports: [
    IonicPageModule.forChild(SlidingitemPage),
  ],
})
export class SlidingitemPageModule {}
