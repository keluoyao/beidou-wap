import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BroadcastDetailsPage } from './broadcast-details';

@NgModule({
  declarations: [
    BroadcastDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(BroadcastDetailsPage),
  ],
})
export class BroadcastDetailsPageModule {}
