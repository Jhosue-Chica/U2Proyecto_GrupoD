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

  products = PRODUCTS;

  url: string = 'https://api.whatsapp.com/send?phone=593986439931&text=Hola%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20servicios%20de%20vivero%F0%9F%98%8A';

 
}
