import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.page.html',
  styleUrls: ['./registro-user.page.scss'],
})
export class RegistroUserPage implements OnInit {

  constructor(private userService:UserService, private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(data:object){

    data["rol"] = "lector";

    this.userService.addUser(data).subscribe(result =>console.log(result));

    console.warn(data);

  }

}
