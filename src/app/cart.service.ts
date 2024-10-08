import { Injectable } from '@angular/core';
import { Product } from './store/product-data';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items: Product[] = [];

  addToCart(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getTotalPrice(): number {
    return this.items.reduce((total, product) => total + product.price, 0);
  }
}
