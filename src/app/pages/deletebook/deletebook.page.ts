import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-deletebook',
  templateUrl: './deletebook.page.html',
  styleUrls: ['./deletebook.page.scss'],
})
export class DeletebookPage implements OnInit {

  constructor(private deleteBook:BookService) { }

  ngOnInit() {
  }

  on3Submit (data:object)
  {
    this.deleteBook.deleteBook(data).subscribe(result=>console.log(result));
    console.warn(data);
  }

}
