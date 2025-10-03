import { Component, OnInit } from '@angular/core';
import { Users_Service } from '../services/users';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.css'
})
export class Users implements OnInit{

  public utilisateurs = new BehaviorSubject<any | null>(null);
  

  constructor(private userService: Users_Service )
  {}

  ngOnInit(): void {

    this.userService.getUsers().subscribe(
      {
         next: (data: any) => {
        this.utilisateurs.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération providers', err);

      }
      }
    );
    
  }

  

}
