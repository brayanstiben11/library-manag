import { Component, OnInit } from '@angular/core';
import{BookService} from '../../services/book.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.page.html',
  styleUrls: ['./show-books.page.scss'],
})
export class ShowBooksPage implements OnInit {

  libros:object=null;
  constructor(private getlibros: BookService) { }

  ngOnInit() {

    this.getlibros.showBook()
    .subscribe(
     data=> this.libros= data,
     error=>console.log(error)
    )
  }

  
}
