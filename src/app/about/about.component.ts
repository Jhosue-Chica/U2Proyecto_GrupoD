import { CommonModule } from '@angular/common';
import { Component, OnInit  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  teamMembers = [
    { name: 'Juan Pérez', role: 'CEO & Fundador', bio: 'Juan es el fundador de MelodyShop y se encarga de la visión general y la estrategia de la empresa.' },
    { name: 'María López', role: 'Directora de Marketing', bio: 'María lidera el equipo de marketing y se asegura de que MelodyShop llegue a la audiencia adecuada.' },
    { name: 'Carlos Gómez', role: 'Gerente de Ventas', bio: 'Carlos gestiona el equipo de ventas y trabaja para incrementar las ventas y la satisfacción del cliente.' }
  ];

  selectedMember: any;
  newComment: string = '';
  comments: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  selectMember(member: any): void {
    this.selectedMember = member;
  }

  addComment(): void {
    if (this.newComment) {
      this.comments.push(this.newComment);
      this.newComment = '';
    }
  }
}
