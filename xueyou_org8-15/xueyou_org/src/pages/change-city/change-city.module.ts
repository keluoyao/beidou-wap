import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeCityPage } from './change-city';

@NgModule({
  declarations: [
    ChangeCityPage,
  ],
  imports: [
    IonicPageModule.forChild(ChangeCityPage),
  ],
})
export class ChangeCityPageModule {}
