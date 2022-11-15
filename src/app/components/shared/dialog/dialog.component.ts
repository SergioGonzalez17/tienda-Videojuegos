import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../../services/peticiones.service'
import {MatSnackBarModule} from '@angular/material/snack-bar';

export interface DialogData {
  user: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  dataUpdate:any
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public service: ProjectService,
    public snack: MatSnackBarModule) { 
     
  }

    ngOnInit(): void {
    }
    
    form = new FormGroup({
      name_client : new FormControl('', Validators.required || Validators.min(6)),
      password: new FormControl('', Validators.required || Validators.min(8)),
    })


  actualizar(){
    this.dataUpdate = this.form.getRawValue()
    this.service.getNameUser(this.dataUpdate.name_client).
    subscribe(res => {
      if(res){
        res.password = this.dataUpdate.password
        this.service.updatePassword(res).
        subscribe(res => {
          if(res){

          }
        })
      }
    })
    //this.close(this.dataUpdate)
  }

  close(data:any){
    console.log('data',data)
    this.dialogRef.close(data);
  }
}
