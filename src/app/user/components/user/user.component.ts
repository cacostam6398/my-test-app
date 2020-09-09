import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/app/credit/models/user-dto';
import { MatDialog } from '@angular/material/dialog';
import {ViewHistoryCreditsComponent} from './../view-history-credits/view-history-credits.component'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userService:UserService,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getUsers();
  }

  listUser:UserDTO[];
  displayedColumns: string[] = ['cedula', 'nombreUsuario', 'correo', 'option'];
  
  getUsers() {
    this.userService.getUsers().valueChanges().subscribe((data:UserDTO[]) => {       
     this.listUser= data
   },
   (error) => {
       console.log(error);
   })
 }

 openModalHistoryCredit(cedula:string){
  const dialogRef = this.dialog.open(ViewHistoryCreditsComponent, {
    width: '800px',
    data: cedula
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');   
  });

 }


}
