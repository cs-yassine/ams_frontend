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
}
