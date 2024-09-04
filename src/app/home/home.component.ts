import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material';
import {ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomeComponent {
  cards = [
    { 
      icon: 'star',
      title: 'Calidad', 
      content: 'Ofrecemos instrumentos musicales de la más alta calidad, garantizando durabilidad y precisión en cada nota, para que disfrutes de la mejor experiencia sonora posible.',
    },
    { 
      icon: 'lightbulb',
      title: 'Servicio', 
      content: 'Nuestro servicio al cliente se enfoca en brindar atención personalizada, asesoramiento experto y soporte postventa para asegurar que cada compra y experiencia musical sea excepcional.',
    },
    { 
      icon: 'home',
      title: 'Innovar', 
      content: 'Nos esforzamos siempre, incorporando los últimos avances en tecnología musical y ofreciendo productos y servicios únicos para satisfacer las necesidades.',
    }
  ];
}
