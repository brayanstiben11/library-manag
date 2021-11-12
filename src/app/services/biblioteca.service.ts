import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private urlAPI = 'http://127.0.0.1:8080/test-1.0/api/library';

  constructor(private http:HttpClient) { }

  addLibrary(data:object){

    return this.http.post(this.urlAPI, data);

  }

}
