import { Component} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Product, PRODUCTS } from '../store/product-data'; // Importa los datos directamente
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-store',
  standalone: true,
  imports: [MatCardModule,MatButtonModule,MatIconModule,CommonModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

  // Aquí almacenamos los productos importados
  products = PRODUCTS;

  addToCart(product: Product) {
    console.log(`${product.name} añadido al carrito.`);
  }

  buyNow(product: Product) {
    console.log(`Comprando ${product.name} ahora.`);
  }

}
