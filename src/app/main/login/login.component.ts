import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog,   } from '@angular/material/dialog';
import {  DialogComponent } from '../../../app/components/shared/dialog/dialog.component'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    user: new FormControl('', Validators.required || Validators.min(6)),
    password: new FormControl('', Validators.required || Validators.min(8)),
  })

  save(){
   let data =  this.form.getRawValue()
   console.log('Soy la data login', data)
  }

  edit(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('res')
    });
    
  }
}
