import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BankAmountComponent } from './components/bank-amount/bank-amount.component';
import {MatTabsModule} from '@angular/material/tabs';
import { CreditModule } from './../credit/credit.module';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [HomeComponent, BankAmountComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTabsModule,
    CreditModule,
    MatDialogModule    
  ]
})
export class HomeModule { }
