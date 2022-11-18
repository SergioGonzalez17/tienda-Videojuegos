import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProjectService } from '../../../services/peticiones.service'

export interface DialogData {
  user: string
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DialogComponent implements OnInit {
  dataUpdate:any
  data: any
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public dataPadre : DialogData,
    public service: ProjectService) { 
      this.data = dataPadre
  }

    ngOnInit(): void {
    }
    
    form = new FormGroup({
      name_client : new FormControl('', Validators.required || Validators.min(6)),
      password: new FormControl('', Validators.required || Validators.min(8)),
    })


  actualizar(){
    this.dataUpdate = this.form.getRawValue()
    if(!this.data.delete){
      this.service.getNameUser(this.dataUpdate.name_client).
      subscribe(res => {
        if(res){
          res.password = this.dataUpdate.password
          this.service.updatePassword(res).
          subscribe(res => {
            if(res){
              this.close(true)
            }
          })
        }
      })
    } else {
      this.service.getNameUser(this.dataUpdate.name_client).
      subscribe(res => {
        if(res){
          res.password = this.dataUpdate.password
          this.service.delete(res).
          subscribe(res => {
            if(res == null){
              this.close(true)
            }
          })
        }
      })
    }
  }

  close(val:boolean){
    this.dialogRef.close(val);
  }
}
