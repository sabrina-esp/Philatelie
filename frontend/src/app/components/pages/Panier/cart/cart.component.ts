import { Component } from '@angular/core';
import { CartService } from '../../../../services/cart.service';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../../../Shared/models/CartItem';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  items :CartItem []= [];

  constructor( private cartService : CartService) {}
  ngOnInit() {
    this.items = this.cartService.getCartItems();
    }
    changeQuantity(item: CartItem, event: Event) {
      const selectElement = event.target as HTMLSelectElement;
      const newQuantity = parseInt(selectElement.value, 10);  // Récupérer la nouvelle quantité
      this.cartService.changeQuantity(newQuantity,item );     // Appeler la méthode du service
    }
    
    removeCart(item: CartItem) {
      this.cartService.removeCartItem(item); // Appeler la méthode du service pour supprimer l'item
      this.items = this.cartService.getCartItems(); // Mettre à jour la liste des items après suppression
    }
}
