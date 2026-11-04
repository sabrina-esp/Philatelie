import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { Produit } from '../../../Shared/models/Produit';
import { ProduitsService } from '../../../services/produits.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { producerNotifyConsumers } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, RatingModule, FontAwesomeModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  produits: Produit[] = [];
  constructor(
    private produitservice: ProduitsService // activatedRoute: ActivatedRoute
  ) {
    // activatedRoute.params.subscribe((params) => {
    //   if (params.search)
    //     this.produit = this.produitservice.getAllProduitsBySearch(params.search);
    // });
    // let produitObservable:Observable<Produit[]>;
    this.produitservice.getAll().subscribe({
      next: (data: Produit[]) => {
        this.produits = data;
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
    
    
  }
  ngOnInit(): void {}
  filterResults(text: string) {
    if (!text) {
      this.produitservice.getAll().subscribe({
        next: (data: Produit[]) => {
          this.produits = data;
        },
        error: (err) => {
          console.error('Error fetching products', err);
        }
      });
      
    } else {
      this.produits = this.produits.filter((Produit) =>
        Produit.nom.toLowerCase().includes(text.toLowerCase())
      );
    }

   
  }
}
