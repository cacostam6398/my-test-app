import { Component, OnInit } from '@angular/core';
import { CreditService } from 'src/app/services/credit.service';
import { CreditDTO } from '../../models/credit-dto';

@Component({
  selector: 'app-approved-credits',
  templateUrl: './approved-credits.component.html',
  styleUrls: ['./approved-credits.component.scss']
})
export class ApprovedCreditsComponent implements OnInit {

  constructor(private creditService:CreditService) { }

  ngOnInit(): void {
    this.getCredits()
  }
  listCredit:CreditDTO[];
  displayedColumns: string[] = ['cedula', 'nombreUsuario', 'correo', 'estado','pagoCredito','valorCredito'];

  getCredits() {
    this.creditService.getCreditsByState('APROVADO').valueChanges().subscribe((data:CreditDTO[]) => { 
     this.listCredit= data
   },
   (error) => {
       console.log(error);
   } )
 }

}
