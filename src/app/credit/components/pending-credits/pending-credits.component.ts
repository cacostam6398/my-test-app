import { Component, OnInit } from '@angular/core';
import {CreditService} from './../../../services/credit.service'
import { CreditDTO } from '../../models/credit-dto';
import { AmountBankService } from 'src/app/services/amount-bank.service';

@Component({
  selector: 'app-pending-credits',
  templateUrl: './pending-credits.component.html',
  styleUrls: ['./pending-credits.component.scss']
})
export class PendingCreditsComponent implements OnInit {

  constructor(private creditService:CreditService,
              private amountBankService:AmountBankService) { }

  ngOnInit(): void {
    this.getCredits();
  }
  listCredit:CreditDTO[];
  displayedColumns: string[] = ['cedula', 'nombreUsuario', 'correo', 'estado','pagoCredito','valorCredito','options'];

  getCredits() {
    this.creditService.getPendingCredits().valueChanges().subscribe((data:CreditDTO[]) => {  
    this.listCredit = data.filter(word => word.estado == 'APROVADO'); 
   },
   (error) => {
       console.log(error);
   } )
 }


 pagarCredito(credit:CreditDTO){
  credit.pagoCredito=true;
  this.creditService.payCredit(credit).then((data)=>{      
    alert('Usuario ' + credit.nombreUsuario +' Pago su credito')
    this.newValueMountBank(credit);
  })
 }

 newValueMountBank(credit:CreditDTO){
  let subs = this.amountBankService.getCurrentMount().valueChanges().subscribe((data:number) => {  
    let newMountBank:number=data+credit.valorCredito;
    this.amountBankService.editMount(newMountBank)
    subs.unsubscribe();
  },
  (error) => {
      console.log(error);
      subs.unsubscribe();
  } ) 


  }

}
