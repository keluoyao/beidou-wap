import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsCommentPage } from './news-comment';

@NgModule({
  declarations: [
    NewsCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsCommentPage),
  ],
})
export class NewsCommentPageModule {}
