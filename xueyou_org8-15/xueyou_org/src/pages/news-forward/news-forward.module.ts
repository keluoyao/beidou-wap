import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsForwardPage } from './news-forward';

@NgModule({
  declarations: [
    NewsForwardPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsForwardPage),
  ],
})
export class NewsForwardPageModule {}
