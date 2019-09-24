import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyWalletChangeBankPage } from './my-wallet-change-bank';

@NgModule({
  declarations: [
    MyWalletChangeBankPage,
  ],
  imports: [
    IonicPageModule.forChild(MyWalletChangeBankPage),
  ],
})
export class MyWalletChangeBankPageModule {}
