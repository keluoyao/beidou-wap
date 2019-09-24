import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalHomepagePage } from './personal-homepage';

@NgModule({
  declarations: [
    PersonalHomepagePage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalHomepagePage),
  ],
})
export class PersonalHomepagePageModule {}
