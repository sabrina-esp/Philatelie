import { Produit } from './Produit';
//product-details
export class CartItem {

  quantite: number = 1;
  prix: number;
  name: string;
  constructor(public produit: Produit) {
    this.prix = this.produit.prix;
    this.name = this.produit.nom;
  }
}
