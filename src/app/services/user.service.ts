import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlAPI = 'http://127.0.0.1:8080/test-1.0/api/user';
  private urlPrestamo='http://127.0.0.1:8080/test-1.0/api/prestamo';
  private urlDevolucion='http://127.0.0.1:8080/test-1.0/api/devolucion'

  //private url = "http://jsonplaceholder.typicode.com/posts";

  constructor(private http:HttpClient) { }

  addUser(data:object){

    return this.http.post(this.urlAPI, data);

  }


  updateUser(data:object) {

    return this.http.put(this.urlAPI, data);

  }

  askBook (data:object)
  {
    return this.http.put(this.urlPrestamo,data);
  }

  backbook (data:object)
  {
    return this.http.post(this.urlDevolucion,data);
  }

  verPrestamos ()
  {
    return this.http.get(this.urlDevolucion);
  }

}
