import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalHomepageLetterPage } from './personal-homepage-letter';

@NgModule({
  declarations: [
    PersonalHomepageLetterPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalHomepageLetterPage),
  ],
})
export class PersonalHomepageLetterPageModule {}
