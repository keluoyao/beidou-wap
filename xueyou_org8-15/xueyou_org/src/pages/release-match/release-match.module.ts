import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReleaseMatchPage } from './release-match';

@NgModule({
  declarations: [
    ReleaseMatchPage,
  ],
  imports: [
    IonicPageModule.forChild(ReleaseMatchPage),
  ],
})
export class ReleaseMatchPageModule {}
