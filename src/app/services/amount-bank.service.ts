import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AmountBankService {

  constructor(private angularFireDatabase : AngularFireDatabase) { }

  getCurrentMount(){
    return this.angularFireDatabase.object('mountBank/');
  }

  editMount(newMount:number){
    return this.angularFireDatabase.object('mountBank/').set(newMount);
  }

  

}


