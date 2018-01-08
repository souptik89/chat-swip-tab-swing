import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SwiptabPage } from './swiptab';

@NgModule({
  declarations: [
    SwiptabPage,
  ],
  imports: [
    IonicPageModule.forChild(SwiptabPage),
  ],
})
export class SwiptabPageModule {}
