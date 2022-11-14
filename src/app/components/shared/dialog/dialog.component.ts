import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
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
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) { 
      console.log('data',data)
    }
    
    ngOnInit(): void {
    }
    
    form = new FormGroup({
      user: new FormControl('', Validators.required || Validators.min(6)),
    })


  actualizar(){
    this.dataUpdate = this.form.getRawValue()
    console.log('this.data', this.dataUpdate)
    this.close(this.dataUpdate)
  }

  close(data:any){
    console.log('data',data)
    this.dialogRef.close(data);
  }
}
