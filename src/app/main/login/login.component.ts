import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog,   } from '@angular/material/dialog';
import {  DialogComponent } from '../../../app/components/shared/dialog/dialog.component'
import { ProjectService } from '../../services/peticiones.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog,
              public service: ProjectService,
              private router:Router) { }

  ngOnInit(): void {
  }
  form = new FormGroup({
    name_client: new FormControl('', Validators.required || Validators.min(6)),
    password: new FormControl('', Validators.required || Validators.min(8)),
  })

  save(){
   let data =  this.form.getRawValue()
    this.service.getNameUser(data.name_client).
    subscribe(res => {
      if(res){
        this.router.navigate([`home/${res.id_client}`], res);
      }
    })
  }

  edit(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
    });
    
  }
}
