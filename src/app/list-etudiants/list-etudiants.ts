import { Component } from '@angular/core';
import { Etudiant } from '../models';

@Component({
  selector: 'app-list-etudiants',
  standalone: false,
  templateUrl: './list-etudiants.html',
  styleUrl: './list-etudiants.css'
})
export class ListEtudiants {
   students:Etudiant[]=[
    {"prenom":"Mohamed Amine","nom":"Mezghich","email":"amine.mezghich@gmail.com","age":22,"classe":"Ingénieur","niveau":4},
    {"prenom":"Salah","nom":"Askri","email":"Askri@gmail.com","age":23,"classe":"Ingénieur","niveau":5},
    {"prenom":"Walid","nom":"Ben Abdallah","email":"Walid@gmail.com","age":21,"classe":"Ingénieur","niveau":3}
   ]

}
