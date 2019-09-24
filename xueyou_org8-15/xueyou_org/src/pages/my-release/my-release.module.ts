import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyReleasePage } from './my-release';

@NgModule({
  declarations: [
    MyReleasePage,
  ],
  imports: [
    IonicPageModule.forChild(MyReleasePage),
  ],
})
export class MyReleasePageModule {}
