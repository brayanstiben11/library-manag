import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from 'src/app/services/biblioteca.service';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-update-biblioteca',
  templateUrl: './update-biblioteca.page.html',
  styleUrls: ['./update-biblioteca.page.scss'],
})
export class UpdateBibliotecaPage implements OnInit {

  constructor(private bibliotecaService : BibliotecaService, private http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(data:object){

    this.bibliotecaService.addLibrary(data).subscribe(result =>console.log(result));

    console.warn(data);

  }
}
