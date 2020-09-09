import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreditService } from 'src/app/services/credit.service';
import { CreditDTO } from 'src/app/credit/models/credit-dto';

@Component({
  selector: 'app-view-history-credits',
  templateUrl: './view-history-credits.component.html',
  styleUrls: ['./view-history-credits.component.scss']
})
export class ViewHistoryCreditsComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ViewHistoryCreditsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,   
    private creditService:CreditService) { }

  ngOnInit(): void {    
    this.getCreditsByUser();
  }

  listCredit:CreditDTO[];
  displayedColumns: string[] = ['cedula', 'nombreUsuario', 'correo', 'estado','pagoCredito','valorCredito'];

  getCreditsByUser(){
    this.creditService.getCreditsByUser(this.data).valueChanges().subscribe((res:CreditDTO[]) =>{ 
      this.listCredit=  res
    })  
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
