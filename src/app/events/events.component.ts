import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,   
    MatDialogModule,
    EventDialogComponent
  ],
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

  constructor(private dialog: MatDialog, private router: Router) { }

  openEventDetails(event: any): void {
    this.selectedEvent = event;
    this.dialog.open(EventDialogComponent, {
      data: { event: this.selectedEvent }
    });
  }

  navigateToStore() {
    this.router.navigate(['/store']); 
  }

  navigateToHome() {
    this.router.navigate(['/home']); 
  }

}
