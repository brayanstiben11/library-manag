import { Component, OnInit } from '@angular/core';
import{UserService} from '../../services/user.service';

@Component({
  selector: 'app-devolucion',
  templateUrl: './devolucion.page.html',
  styleUrls: ['./devolucion.page.scss'],
})
export class DevolucionPage implements OnInit {

  constructor(private devolucionUser:UserService) { }
  
  ngOnInit() {
  }

  on2Submit (data:object){

    this.devolucionUser.backbook(data).subscribe(result=>console.log(result));
    console.warn(data); 
  }

}
