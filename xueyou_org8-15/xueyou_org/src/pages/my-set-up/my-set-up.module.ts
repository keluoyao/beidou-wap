import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySetUpPage } from './my-set-up';

@NgModule({
  declarations: [
    MySetUpPage,
  ],
  imports: [
    IonicPageModule.forChild(MySetUpPage),
  ],
})
export class MySetUpPageModule {}
