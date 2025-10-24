import { Component } from '@angular/core';
import { Providers } from '../services/providers';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-provider',
  standalone: false,
  templateUrl: './add-provider.html',
  styleUrl: './add-provider.css'
})
export class AddProvider {
constructor(private providerService: Providers, private router:Router) { // injection de la dépendance:le service Users
  }

  ngOnInit(): void {
   
  }
  saveProvider(provider: any) {
    this.providerService.saveProvider(provider).subscribe(
      {
      next: (data: any) => {
        this.router.navigate(['listProviders']);

      },
      error: (err) => {
        console.error('Erreur ajout provider', err);

      }
    });
  }
}