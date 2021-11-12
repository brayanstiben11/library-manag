import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service'
import{ HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-registro-admin2',
  templateUrl: './registro-admin2.page.html',
  styleUrls: ['./registro-admin2.page.scss'],
})

export class RegistroAdmin2Page implements OnInit {

  //private url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor(private userService:UserService) {

   }

  ngOnInit() {

  }

  test(){
    //code
  }

  onSubmit(data:object){

    data["rol"] = "administrador";

    this.userService.addUser(data).subscribe(result=>console.log(result));

    console.warn(data);  

  }

}
