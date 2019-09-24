import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionAndAnswerCommentPage } from './question-and-answer-comment';

@NgModule({
  declarations: [
    QuestionAndAnswerCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionAndAnswerCommentPage),
  ],
})
export class QuestionAndAnswerCommentPageModule {}
