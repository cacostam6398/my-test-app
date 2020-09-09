import { Component, OnInit } from '@angular/core';
import {AmountBankService } from '../../../services/amount-bank.service'

@Component({
  selector: 'app-bank-amount',
  templateUrl: './bank-amount.component.html',
  styleUrls: ['./bank-amount.component.scss']
})
export class BankAmountComponent implements OnInit {

  constructor(private amountBankService:AmountBankService) { }

  ngOnInit(): void {
    this.GuestSession();
  }

  currentMount:number;

  GuestSession() {
     this.amountBankService.getCurrentMount().valueChanges().subscribe((data:number) => {  
      this.currentMount=data
    },
    (error) => {
        console.log(error);
    } )
  }

}
