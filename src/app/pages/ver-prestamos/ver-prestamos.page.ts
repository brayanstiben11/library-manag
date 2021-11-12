import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-ver-prestamos',
  templateUrl: './ver-prestamos.page.html',
  styleUrls: ['./ver-prestamos.page.scss'],
})
export class VerPrestamosPage implements OnInit {

  prestamos:object=null;
  constructor(private prestamosver : UserService) { }

  ngOnInit() {

    this.prestamosver.verPrestamos()
    .subscribe(
     data=> this.prestamos= data,
     error=>console.log(error)
    )
  }

}
