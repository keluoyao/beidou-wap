import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWalletExtractPage } from './my-wallet-extract';

@NgModule({
  declarations: [
    MyWalletExtractPage,
  ],
  imports: [
    IonicPageModule.forChild(MyWalletExtractPage),
  ],
})
export class MyWalletExtractPageModule {}
