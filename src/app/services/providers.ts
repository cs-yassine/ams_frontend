import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Providers {
  
  
    constructor(public http:HttpClient) //injection de dépendence
  {
    
  }
   getProviders(){
    return this.http.get("http://localhost:8081/ams/ams/getallProviders");
  }

  saveProvider(provider:any){
    return this.http.post("http://localhost:8081/ams/ams/addProvider",provider);
  }

}