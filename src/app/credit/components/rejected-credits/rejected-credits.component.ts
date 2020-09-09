import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/services/credit.service';
import {CreditDTO} from './../../models/credit-dto'

@Component({
  selector: 'app-rejected-credits',
  templateUrl: './rejected-credits.component.html',
  styleUrls: ['./rejected-credits.component.scss']
})
export class RejectedCreditsComponent implements OnInit {

  constructor(private creditService:CreditService) { }

  ngOnInit(): void {
    this.getCredits();
  }
  listCredit:CreditDTO[];
  displayedColumns: string[] = ['cedula', 'nombreUsuario', 'correo', 'estado','valorCredito'];

  getCredits() {
    this.creditService.getCreditsByState('RECHAZADO').valueChanges().subscribe((data:CreditDTO[]) => {   
     this.listCredit= data
   },
   (error) => {
       console.log(error);
   } )
 }

}
