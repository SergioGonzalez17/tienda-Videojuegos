import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ProjectService } from '../../services/peticiones.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data : any = ''

  constructor(public route: ActivatedRoute,
              public router: Router,
              public service: ProjectService) { }

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

}
