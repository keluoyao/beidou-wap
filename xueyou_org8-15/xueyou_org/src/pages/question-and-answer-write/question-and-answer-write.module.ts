import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QuestionAndAnswerWritePage } from './question-and-answer-write';

@NgModule({
  declarations: [
    QuestionAndAnswerWritePage,
  ],
  imports: [
    IonicPageModule.forChild(QuestionAndAnswerWritePage),
  ],
})
export class QuestionAndAnswerWritePageModule {}
