import { Component } from '@angular/core';
import { Produit } from '../../../Shared/models/Produit';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from '../../../services/produits.service';
import { RatingModule } from '@syncfusion/ej2-angular-inputs';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-produit-page',
  standalone: true,
  imports: [RatingModule, CommonModule],
  templateUrl: './produit-page.component.html',
  styleUrl: './produit-page.component.css',
})
export class ProduitPageComponent {
  produit!: Produit;
  constructor(
    activatedRoute: ActivatedRoute,
    produitService: ProduitsService,
    private cartService: CartService
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params.id)
        produitService
          .getProduitById(params.id)
          .subscribe((serverProduit) => {
            this.produit = serverProduit;
          });
    });
  }
  addToCart(produit: Produit) {
    this.cartService.addToCart(produit);
    window.alert('Your product has been added to the cart!');
  }
}
