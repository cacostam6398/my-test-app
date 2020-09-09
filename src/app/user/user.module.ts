import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {UserComponent} from './components/user/user.component'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ViewHistoryCreditsComponent } from './components/view-history-credits/view-history-credits.component';


@NgModule({
  declarations: [UserComponent, ViewHistoryCreditsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  entryComponents:[
    ViewHistoryCreditsComponent
  ]
})
export class UserModule { }
