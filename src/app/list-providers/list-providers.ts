import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Providers } from '../services/providers';

@Component({
  selector: 'app-list-providers',
  standalone: false,
  templateUrl: './list-providers.html',
  styleUrl: './list-providers.css'
})
export class ListProviders implements OnInit {
  public providers = new BehaviorSubject<any | null>(null);
    
  
    constructor(private provider_service: Providers )
    {}
      ngOnInit(): void {

    this.provider_service.getProviders().subscribe(
      {
         next: (data: any) => {
        this.providers.next(data);

      },
      error: (err) => {
        console.error('Erreur récupération providers', err);

      }
      }
    );
    
  }
  

}
