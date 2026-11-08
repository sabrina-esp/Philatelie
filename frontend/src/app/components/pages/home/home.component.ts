import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Produit } from '../../../Shared/models/Produit';
import { ProduitsService } from '../../../services/produits.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],

  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  produits: Produit[] = [];
  private allProduits: Produit[] = [];
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
        this.allProduits = data;
        this.produits = data;
      },
      error: (err) => {
        console.error('Error fetching products', err);
      }
    });
    
    
  }
  ngOnInit(): void {}
  filterResults(text: string) {
    this.produits = this.allProduits.filter((produit) =>
      produit.nom.toLowerCase().includes(text.trim().toLowerCase())
    );

   
  }
}
