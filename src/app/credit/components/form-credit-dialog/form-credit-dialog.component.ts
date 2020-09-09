import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreditService } from 'src/app/services/credit.service';
import { UserService } from 'src/app/services/user.service';
import { CreditDTO } from '../../models/credit-dto';
import { UserDTO } from '../../models/user-dto';
import { AmountBankService } from 'src/app/services/amount-bank.service';

@Component({
  selector: 'app-form-credit-dialog',
  templateUrl: './form-credit-dialog.component.html',
  styleUrls: ['./form-credit-dialog.component.scss']
})
export class FormCreditDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FormCreditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private creditService: CreditService,
    private userService: UserService,
    private amountBankService: AmountBankService,
  ) { }

  addForm: FormGroup;
  submitted:boolean = false;

  get f() { return this.addForm.controls; }
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      uid: [null],
      correo: ['', [Validators.required]],
      cedula: ['', [Validators.required]],
      estado: [''],
      nombreUsuario: ['', [Validators.required]],
      pagoCredito: [false],
      valorCredito: [10000, [Validators.required, Validators.min(10000), Validators.max(100000)]],
    });
  }


  onSave() {
    this.markFormGroupTouched(this.addForm);
    this.submitted = true;
    if (this.addForm.invalid) {
      console.log('Formulario Invalido')
    }
    else {
      this.addForm.controls['uid'].setValue(this.uuidv4());
      this.addForm.controls['estado'].setValue(this.apruebaCredito() == 1 ? 'APROVADO' : 'RECHAZADO');
      this.vaidUsernewCredit(this.addForm.value)
    }
  }

  createCredit(credit: CreditDTO) {
    let subs = this.userService.getUserById(credit.cedula).valueChanges().subscribe((res2: UserDTO) => {
      if (res2) {
        if (res2.estado == true) {
          this.creditService.createCredit(credit).then(res2 => {
            alert('registrado correctamente, Credito ' + credit.estado);
            this.onNoClick();

            if (credit.estado == 'APROVADO') {
              this.newValueMountBank(credit);
            }

          },
            msg => {
              alert('Error');
              console.log(msg);
            })
        } else {
          alert('El usuario ' + credit.nombreUsuario + ' no pueden volver a solicitar créditos.');
        }

      } else {
        this.creditService.createCredit(credit).then(res2 => {
          alert('registrado correctamente, Credito ' + credit.estado);
          this.onNoClick();
          this.createUser(credit);
          if (credit.estado == 'APROVADO') {
            this.newValueMountBank(credit);
          }

        },
          msg => {
            alert('Error');
            console.log(msg);
          })
      }
      subs.unsubscribe();
    })

  }

  createUser(credit: CreditDTO) {
    const user = {
      cedula: credit.cedula,
      correo: credit.correo,
      nombreUsuario: credit.nombreUsuario,
      estado: credit.estado == 'RECHAZADO' ? false : true
    }
    this.userService.createUser(user).then(res2 => {
    },
      msg => {
        alert('Error');
        console.log(msg);
      })
  }

  vaidUsernewCredit(credit: CreditDTO) {

    let sub = this.creditService.getCreditsByUser(credit.cedula).valueChanges().subscribe((res: CreditDTO[]) => {
      let value: boolean = true
      for (let index = 0; index < res.length; index++) {
        if (res[index].pagoCredito == false && res[index].estado == 'APROVADO') {
          value = false
          alert('Usuario tiene creditos sin pagar')
          break;
        }
      }

      for (let index = 0; index < res.length; index++) {
        if (res[index].estado == 'APROVADO') {
          this.addForm.controls['estado'].setValue('APROVADO');
          credit.estado = 'APROVADO'
          break;
        }
      }


      sub.unsubscribe();

      if (value == true) {
        this.createCredit(credit);
      }

    })

  }


  newValueMountBank(credit: CreditDTO) {
    let subs = this.amountBankService.getCurrentMount().valueChanges().subscribe((data: number) => {
      let newMountBank: number = data - credit.valorCredito;
      this.amountBankService.editMount(newMountBank)
      subs.unsubscribe();
    },
      (error) => {
        console.log(error);
        subs.unsubscribe();
      })


  }


  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  apruebaCredito(): number {
    let aleatorio = Math.round(Math.random() * 1);
    return aleatorio
  }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

    });
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
