import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { UserDTO }from './../credit/models/user-dto'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private angularDataBase:AngularFireDatabase) { }

  getUsers(){
    return this.angularDataBase.list('/users');
  }
  
  getUserById(cedula:string){
    return this.angularDataBase.object('/users/' + cedula);
  }

  editUser(user:UserDTO){
    return this.angularDataBase.object('/users/' + user.cedula).update(user);
  }
  
  createUser(user:UserDTO){
    return this.angularDataBase.object('/users/' + user.cedula).set(user);
  }
}
