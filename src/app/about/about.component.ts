import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  teamMembers = [
    {
      name: 'Pacheco Ramírez Nataly Marisol',
      role: 'Front-end and UI/UX Developer',
      img: '/about/nataly.jpg',
      contact: 'nmpacheco1@espe.edu.ec',
      bio: `Trabajar con CSS y preprocesadores como SASS o LESS para estilizar componentes. 
            Optimizar la experiencia del usuario (UX) y la interfaz de usuario (UI). 
            Crear prototipos y diseños de alta fidelidad para la aplicación. 
            Colaborar con otros desarrolladores frontend para implementar el diseño. 
            Realizar pruebas de usabilidad y mejorar la experiencia del usuario. 
            Definir guías de estilo y asegurarse de que se sigan.`,
      responsibilities: [
        'Trabajar con CSS y preprocesadores como SASS o LESS para estilizar componentes.',
        'Optimizar la experiencia del usuario (UX) y la interfaz de usuario (UI).',
        'Crear prototipos y diseños de alta fidelidad para la aplicación.',
        'Colaborar con otros desarrolladores frontend para implementar el diseño.',
        'Realizar pruebas de usabilidad y mejorar la experiencia del usuario.',
        'Definir guías de estilo y asegurarse de que se sigan.'
      ]
    },
    {
      name: 'Chica Peñarrieta Jhosue Israel',
      role: 'Backend Developer and Angular Architect',
      img: '/about/jhosue.jpg',
      contact: 'jichica@espe.edu.ec',
      bio: `Definir la arquitectura de la aplicación Angular. 
            Establecer las mejores prácticas y estándares de codificación. 
            Tomar decisiones de alto nivel sobre la estructura y el diseño del sistema. 
            Supervisar el desarrollo del proyecto y garantizar su calidad. 
            Diseñar y desarrollar la lógica del servidor y la base de datos. 
            Crear y mantener APIs para ser consumidas por la aplicación Angular. 
            Asegurar la seguridad y el rendimiento del backend. 
            Integrar servicios externos y bibliotecas de terceros.`,
      responsibilities: [
        'Definir la arquitectura de la aplicación Angular.',
        'Establecer las mejores prácticas y estándares de codificación.',
        'Tomar decisiones de alto nivel sobre la estructura y el diseño del sistema.',
        'Supervisar el desarrollo del proyecto y garantizar su calidad.',
        'Diseñar y desarrollar la lógica del servidor y la base de datos.',
        'Crear y mantener APIs para ser consumidas por la aplicación Angular.',
        'Asegurar la seguridad y el rendimiento del backend.',
        'Integrar servicios externos y bibliotecas de terceros.'
      ]
    },
    {
      name: 'Faz Intriago Raúl Enrique',
      role: 'Full-stack Developer',
      img: '/about/raul.jpg',
      contact: 'refaz@espe.edu.ec',
      bio: `Desarrollar y mantener componentes de UI utilizando Angular. 
            Implementar data binding, directivas y pipes. 
            Trabajar con CSS y preprocesadores como SASS o LESS para estilizar componentes. 
            Optimizar la experiencia del usuario (UX) y la interfaz de usuario (UI). 
            Desarrollar tanto el frontend en Angular como el backend en tecnologías como Node.js, .NET, Java, etc. 
            Diseñar y desarrollar APIs RESTful. 
            Integrar el frontend con el backend y manejar la comunicación entre ambos. 
            Gestionar la base de datos y la lógica de negocio en el backend.`,
      responsibilities: [
        'Desarrollar y mantener componentes de UI utilizando Angular.',
        'Implementar data binding, directivas y pipes.',
        'Trabajar con CSS y preprocesadores como SASS o LESS para estilizar componentes.',
        'Optimizar la experiencia del usuario (UX) y la interfaz de usuario (UI).',
        'Desarrollar tanto el frontend en Angular como el backend en tecnologías como Node.js, .NET, Java, etc.',
        'Diseñar y desarrollar APIs RESTful.',
        'Integrar el frontend con el backend y manejar la comunicación entre ambos.',
        'Gestionar la base de datos y la lógica de negocio en el backend.'
      ]
    }
  ];
  

  selectedMember: any;
  audio = new Audio();

  constructor() { }

  values = [
    { text: 'Calidad: Nos comprometemos a ofrecer solo lo mejor en música y eventos.', note: 'piano-note1' },
    { text: 'Confianza: Valoramos la confianza de nuestros usuarios y trabajamos arduamente para mantenerla.', note: 'piano-note2' },
    { text: 'Innovación: Siempre buscamos nuevas formas de mejorar y evolucionar en la industria musical.', note: 'piano-note3' },
    { text: 'Servicio al Cliente: Nuestro equipo está dedicado a proporcionar el mejor servicio posible a nuestros usuarios.', note: 'piano-note4' }
  ];
  

  selectMember(member: any): void {
    if (this.selectedMember === member) {
      this.selectedMember = null;
    } else {
      this.selectedMember = member; 
    }
  }
  newComment: string = '';
  comments: string[] = [];

  ngOnInit(): void {
    this.loadComments();
  }

  addComment(): void {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.saveComments();
      this.newComment = '';
    }
  }

  saveComments(): void {
    localStorage.setItem('comments', JSON.stringify(this.comments));
  }

  loadComments(): void {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
      this.comments = JSON.parse(storedComments);
    }
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
    this.saveComments();
  }

  playNote(note: string): void {
    this.audio.src = `../../about/${note}.mp3`;
    this.audio.load();
    this.audio.play();
  }
}
