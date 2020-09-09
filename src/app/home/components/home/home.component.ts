import { Component, OnInit } from '@angular/core';
import { AmountBankService } from 'src/app/services/amount-bank.service';
import { MatDialog } from '@angular/material/dialog';
import { FormCreditDialogComponent } from 'src/app/credit/components/form-credit-dialog/form-credit-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private amountBankService:AmountBankService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
  }

AddCreditModal() {
    
  const dialogRef = this.dialog.open(FormCreditDialogComponent, {
    width: '500px',
    data: {}
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');   
  });

}

editMount(){
  this.amountBankService.editMount(10);
}


}
