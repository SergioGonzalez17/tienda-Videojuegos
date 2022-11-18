import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator} from '@angular/forms';
import { MatDialog,   } from '@angular/material/dialog';
import {  DialogComponent } from '../../../app/components/shared/dialog/dialog.component'
import { DialogDeleteComponent } from '../../../app/components/shared/dialog-delete/dialog-delete.component'
import { ProjectService } from '../../services/peticiones.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  constructor(public dialog: MatDialog,
              public service: ProjectService,
              private router:Router) { }
  data: any
  dataUpdate: any
  dataDelete: any
  ngOnInit(): void {
  }

  form = new FormGroup({
    id_client : new FormControl(null),
    name_client : new FormControl('', Validators.required || Validators.min(6)),
    mail : new FormControl('', Validators.required || Validators.min(6)),
    password: new FormControl('', Validators.required || Validators.min(8)),
  })

 

  save(){
  this.data =  this.form.getRawValue()
   this.service.createUser(this.data).subscribe(res=>{
      if(res){
        this.router.navigate([`home/${res.id_client}`], res);
      }
   })

  }

  edit(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {user: this.data.user},
    });

    dialogRef.afterClosed().subscribe(result => {
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
