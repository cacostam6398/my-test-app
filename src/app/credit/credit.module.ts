import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditRoutingModule } from './credit-routing.module';
import {MatTableModule} from '@angular/material/table';
import { PendingCreditsComponent } from './components/pending-credits/pending-credits.component';
import { ApprovedCreditsComponent } from './components/approved-credits/approved-credits.component';
import { RejectedCreditsComponent } from './components/rejected-credits/rejected-credits.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FormCreditDialogComponent } from './components/form-credit-dialog/form-credit-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PendingCreditsComponent, ApprovedCreditsComponent, RejectedCreditsComponent, FormCreditDialogComponent],
  imports: [
    CommonModule,
    CreditRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents:[
    FormCreditDialogComponent
  ],
  exports:[
    PendingCreditsComponent, 
    ApprovedCreditsComponent, 
    RejectedCreditsComponent,
    FormCreditDialogComponent
  ]
})
export class CreditModule { }
