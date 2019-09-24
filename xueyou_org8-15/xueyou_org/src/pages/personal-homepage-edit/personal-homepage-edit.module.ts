import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonalHomepageEditPage } from './personal-homepage-edit';

@NgModule({
  declarations: [
    PersonalHomepageEditPage,
  ],
  imports: [
    IonicPageModule.forChild(PersonalHomepageEditPage),
  ],
})
export class PersonalHomepageEditPageModule {}
