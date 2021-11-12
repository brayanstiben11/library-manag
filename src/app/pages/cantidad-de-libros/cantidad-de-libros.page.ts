import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service'

@Component({
  selector: 'app-cantidad-de-libros',
  templateUrl: './cantidad-de-libros.page.html',
  styleUrls: ['./cantidad-de-libros.page.scss'],
})
export class CantidadDeLibrosPage implements OnInit {

  constructor(private bibliotecaService:BibliotecaService) { }

  ngOnInit() {
  }

  onSubmit(data:object){

    this.bibliotecaService.addLibrary(data).subscribe(result=>console.log(result));

    console.warn(data);

  }

}
