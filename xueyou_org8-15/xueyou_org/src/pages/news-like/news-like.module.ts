import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsLikePage } from './news-like';

@NgModule({
  declarations: [
    NewsLikePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsLikePage),
  ],
})
export class NewsLikePageModule {}
