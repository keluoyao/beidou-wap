import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchVotePage } from './match-vote';

@NgModule({
  declarations: [
    MatchVotePage,
  ],
  imports: [
    IonicPageModule.forChild(MatchVotePage),
  ],
})
export class MatchVotePageModule {}
