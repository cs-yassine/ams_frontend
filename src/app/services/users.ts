import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Users_Service {

  constructor(public http:HttpClient) //injection de dépendence
  {
    
  }

  getUsers(){
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  
}
