import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBrowsePage } from './my-browse';

@NgModule({
  declarations: [
    MyBrowsePage,
  ],
  imports: [
    IonicPageModule.forChild(MyBrowsePage),
  ],
})
export class MyBrowsePageModule {}
