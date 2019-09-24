import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionAndAnswerDetailsPage } from './question-and-answer-details';

@NgModule({
  declarations: [
    QuestionAndAnswerDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionAndAnswerDetailsPage),
  ],
})
export class QuestionAndAnswerDetailsPageModule {}
