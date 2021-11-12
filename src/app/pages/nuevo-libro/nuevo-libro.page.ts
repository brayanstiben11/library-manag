import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service'

@Component({
  selector: 'app-nuevo-libro',
  templateUrl: './nuevo-libro.page.html',
  styleUrls: ['./nuevo-libro.page.scss'],
})
export class NuevoLibroPage implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit() {


  }

  onSubmit(data:object){

    this.bookService.add(data).subscribe(result=>console.log(result));

    console.warn(data);

  }

}
