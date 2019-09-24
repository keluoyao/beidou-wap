import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySignUpPage } from './my-sign-up';

@NgModule({
  declarations: [
    MySignUpPage,
  ],
  imports: [
    IonicPageModule.forChild(MySignUpPage),
  ],
})
export class MySignUpPageModule {}
