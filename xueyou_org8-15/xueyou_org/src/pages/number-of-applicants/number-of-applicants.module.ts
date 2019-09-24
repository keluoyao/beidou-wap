import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NumberOfApplicantsPage } from './number-of-applicants';

@NgModule({
  declarations: [
    NumberOfApplicantsPage,
  ],
  imports: [
    IonicPageModule.forChild(NumberOfApplicantsPage),
  ],
})
export class NumberOfApplicantsPageModule {}
