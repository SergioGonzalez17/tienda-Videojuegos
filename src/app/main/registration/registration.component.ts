import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator} from '@angular/forms';
import { MatDialog,   } from '@angular/material/dialog';
import {  DialogComponent } from '../../../app/components/shared/dialog/dialog.component'
import { DialogDeleteComponent } from '../../../app/components/shared/dialog-delete/dialog-delete.component'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(public dialog: MatDialog) { }
  data: any
  dataUpdate: any
  dataDelete: any
  ngOnInit(): void {
  }

  form = new FormGroup({
    user: new FormControl('', Validators.required || Validators.min(6)),
    contraseña: new FormControl('', Validators.required || Validators.min(8)),
    email: new FormControl('', Validators.required ||Validators.email)
  })

  save(){
  this.data =  this.form.getRawValue()
   console.log('Soy la data', this.data)
  }

  edit(){
    console.log('d')
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {user: this.data.user},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      this.dataUpdate = result.user
    });
    
  }
  
  delete(){
    console.log('eliminar')
    const dialogRef = this.dialog.open(DialogDeleteComponent, {
      width: '250px',
      data: {user: this.data.user},
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('result', result)
      if(result){
        this.dataUpdate = ''
      }
    });
  }
}
