import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  upcomingEvents = [
    { 
      name: 'Concierto de Rock', 
      date: '2024-08-15', 
      location: 'Madrid, España', 
      description: 'Disfruta de una noche de rock con las mejores bandas del momento.',
      image: '../../events/Concierto-rock-2024-08-15.png'
    },
    { 
      name: 'Festival de Música Electrónica', 
      date: '2024-09-10', 
      location: 'Barcelona, España', 
      description: 'Un evento espectacular con DJs internacionales.',
      image: '../../events/Festival-Electronica-2024-09-10.png'
    },
    { 
      name: 'Concierto de Jazz', 
      date: '2024-10-05', 
      location: 'Valencia, España', 
      description: 'Una velada íntima con los mejores músicos de jazz.',
      image: '../../events/Concierto-jazz-2024-10-05.png'
    },
    { 
      name: 'Concierto de Pop', 
      date: '2024-11-20', 
      location: 'Sevilla, España', 
      description: 'Un evento lleno de energía con los artistas de pop más populares.',
      image: '../../events/Concierto-pop-2024-11-20.png'
    },
    { 
      name: 'Festival de Música Clásica', 
      date: '2024-12-05', 
      location: 'Granada, España', 
      description: 'Disfruta de una noche mágica con las mejores orquestas y solistas de música clásica.',
      image: '../../events/Festival-Clasica-2024-12-05.png'
    },
    { 
      name: 'Concierto de Flamenco', 
      date: '2025-01-10', 
      location: 'Córdoba, España', 
      description: 'Vive una experiencia única con los mejores cantaores y guitarristas de flamenco.',
      image: '../../events/Concierto-flamenco-2025-01-10.png'
    }
  ];
  

  selectedEvent: any;

  constructor() { }

  ngOnInit(): void {
  }

  openEventDetails(event: any): void {
    this.selectedEvent = event;
    const modalElement = document.getElementById('eventModal');
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
