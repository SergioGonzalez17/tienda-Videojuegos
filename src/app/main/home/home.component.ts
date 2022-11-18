import { Component, Input, OnInit, ViewEncapsulation  } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProjectService } from '../../services/peticiones.service'
import { MatDialog,   } from '@angular/material/dialog';
import {  DialogComponent } from '../../../app/components/shared/dialog/dialog.component'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  data : any = ''

  constructor(public route: ActivatedRoute,
              public router: Router,
              public service: ProjectService,
              public dialog: MatDialog,
              public snack: MatSnackBar) { }

  ngOnInit(): void {
    this.loadData()
  }

   loadData(){
    this.service.getHome(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      if(res){
        this.data = res
      }
    })
  }

  navUpdate(){
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '40vw',
      height: '40vh',
      data: {
        user_name:'Nombre usuario',
        password: 'Nueva contraseña',
        name_button: 'Actualizar'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.snack.open('Contraseña actualizada',   'X' )
      }
    });
  }

  navDelete(){
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog-container',
      width: '40vw',
      height: '40vh',
      data: {
        user_name:'Nombre usuario',
        password: 'Contraseña',
        name_button: 'Eliminar',
        delete: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result == true){
        this.router.navigate(['login']);
        this.snack.open('Usuario eliminado', 'x')
      }
    });
  }
}
