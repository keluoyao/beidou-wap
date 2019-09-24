import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsInvitationPage } from './news-invitation';

@NgModule({
  declarations: [
    NewsInvitationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewsInvitationPage),
  ],
})
export class NewsInvitationPageModule {}
