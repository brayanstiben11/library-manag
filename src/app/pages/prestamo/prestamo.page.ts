import { Component, OnInit } from '@angular/core';
import{UserService} from '../../services/user.service';

@Component({
  selector: 'app-prestamo',
  templateUrl: './prestamo.page.html',
  styleUrls: ['./prestamo.page.scss'],
})
export class PrestamoPage implements OnInit {

  constructor(private prestamoUser: UserService) { }

  ngOnInit() {
  }

  on1Submit (data:object){

    this.prestamoUser.askBook(data).subscribe(result=>console.log(result));
    console.warn(data); 
  }
}
