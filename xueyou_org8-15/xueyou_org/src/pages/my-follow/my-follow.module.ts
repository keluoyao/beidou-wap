import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFollowPage } from './my-follow';

@NgModule({
  declarations: [
    MyFollowPage,
  ],
  imports: [
    IonicPageModule.forChild(MyFollowPage),
  ],
})
export class MyFollowPageModule {}
