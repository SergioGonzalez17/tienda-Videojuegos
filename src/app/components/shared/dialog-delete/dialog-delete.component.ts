import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.css']
})
export class DialogDeleteComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogDeleteComponent>) { }

  ngOnInit(): void {
  }
  

  
  

  close(dataDelete: boolean){
    console.log('dataDelete',dataDelete)
    this.dialogRef.close(dataDelete);
  }
}
