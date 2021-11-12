import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private urlAPI = "http://127.0.0.1:8080/test-1.0/api/book";
  

  constructor(private http:HttpClient) { }

  add(data:object){

    return this.http.post(this.urlAPI, data);

  }

  deleteBook (data:object){
    
    return this.http.put(this.urlAPI,data);
  }

  showBook ()
  {
    return this.http.get(this.urlAPI);
  }

}
