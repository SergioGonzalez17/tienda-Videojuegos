import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

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
}
