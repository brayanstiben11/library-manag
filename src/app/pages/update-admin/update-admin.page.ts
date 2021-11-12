import { Component, OnInit } from '@angular/core';
import { UserService} from '../../services/user.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.page.html',
  styleUrls: ['./update-admin.page.scss'],
})
export class UpdateAdminPage implements OnInit {


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
