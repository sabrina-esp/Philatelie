import { Injectable } from '@angular/core';
import { Produit } from '../Shared/models/Produit';
import { Cart } from '../Shared/models/Cart';
import { CartItem } from '../Shared/models/CartItem';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];
  // private cart: Cart = new Cart();
  constructor() {}
  //method appends a product to an array of items.
  addToCart(produit: Produit) {
    const existing = this.cartItems.find(item => item.produit.id === produit.id);
    if (existing) {
      this.changeQuantity(existing.quantite + 1, existing);
    } else {
      this.cartItems.push(new CartItem(produit));
    }
  }
  getCartItems() {
    return this.cartItems;
  }
  clearCart() {
    this.cartItems = [];
    return this.cartItems;
  }

  changeQuantity(quantite: number, cartItem: CartItem) {
    if (!cartItem) return;
    if (!Number.isInteger(quantite) || quantite < 1) return;
    cartItem.quantite = quantite;
    cartItem.prix = quantite * cartItem.produit.prix;
  }

  removeCartItem(item: CartItem): void {
    // Trouver l'index de l'item à supprimer
    const index = this.cartItems.findIndex(cartItem => cartItem.produit.id === item.produit.id);
    
    if (index !== -1) {
      this.cartItems.splice(index, 1); // Supprimer l'item du panier
    }
  }
}
