import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { CreditDTO } from '../credit/models/credit-dto';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  constructor(private angularFireDatabase: AngularFireDatabase) { }


  createCredit(credit:CreditDTO) {
    return this.angularFireDatabase.object('credits/' + credit.uid).set(credit);
  }

  getCreditsByState(state: string) {
    return this.angularFireDatabase.list('credits/', ref => ref.orderByChild("estado").equalTo(state))
  }

  getCreditsByUser(cedula: string) {
    return this.angularFireDatabase.list('credits/', ref => ref.orderByChild("cedula").equalTo(cedula))
  }

  getPendingCredits() {
    var ref = this.angularFireDatabase.list('credits/', ref => ref.orderByChild("pagoCredito").equalTo(false))
    return ref
  }

  payCredit(credit:CreditDTO) {
    return this.angularFireDatabase.object('credits/' + credit.uid).update(credit);
  }



}
