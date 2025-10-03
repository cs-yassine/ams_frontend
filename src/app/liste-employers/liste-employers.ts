import { Component } from '@angular/core';
import { Employee } from '../models';

@Component({
  selector: 'app-liste-employers',
  standalone: false,
  templateUrl: './liste-employers.html',
  styleUrl: './liste-employers.css'
})
export class ListeEmployers {
employees : Employee[] = [
  {nom:"Boltane", prenom:"jihene", position:"Developer" , salaire:3000} ,
  {nom:"fandouli", prenom:"fares", position:"Developer" , salaire:5000},
  {nom:"fandouli", prenom:"ahmed", position:"ingenieur" , salaire:8000},
  {nom:"boltane", prenom:"rania", position:"Developer" , salaire:10000}
]




afficherInfos(emp: Employee): void {
    alert(`Nom: ${emp.nom}\nPrénom: ${emp.prenom}\nPoste: ${emp.position}\nSalaire: ${emp.salaire}`);
  }
  
}
