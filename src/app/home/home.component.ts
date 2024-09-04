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

  services = [
    { title: 'Asesoría', description: 'Ofrecemos un servicio de asesoría personalizada para ayudarte a elegir el instrumento musical que mejor se adapte a tus necesidades.' },
    { title: 'Reparación', description: 'Proporcionamos servicios completos de reparación y mantenimiento para todos los tipos de instrumentos musicales.' },
    { title: 'Clases', description: 'Ofrecemos clases de música para una variedad de instrumentos, incluyendo guitarra, piano, batería, y muchos más.' },
    { title: 'Venta', description: 'Disponemos de una amplia gama de accesorios y equipos de sonido para complementar tu instrumento musical de cualquier marca.' },
  ];
}
