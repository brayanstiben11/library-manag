import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-registro-bibliotecario',
  templateUrl: './registro-bibliotecario.page.html',
  styleUrls: ['./registro-bibliotecario.page.scss'],
})
export class RegistroBibliotecarioPage implements OnInit {

  constructor(private userService:UserService, private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(data:object){

    data["rol"] = "bibliotecario";

    this.userService.addUser(data).subscribe(result =>console.log(result));

    console.warn(data);

  }

}
