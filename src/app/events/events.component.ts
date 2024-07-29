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
