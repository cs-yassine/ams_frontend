import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 university:string="Sesame";
 names:string[]=["yassine","faten","ayoub","fares","jihen","ghassen","aziz","amine","sabrine","farah"]
 nbrEtudiants :number=26;
 srcLogo:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGakkUEbXyfann4M16v9CV-sTa915cUOdh9g&s";
 display():void
 {
  alert("Hello World");
 }
}
