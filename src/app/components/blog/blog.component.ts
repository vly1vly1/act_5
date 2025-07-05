import { Component } from '@angular/core';
import { INoticias } from '../../interfaces/inoticias';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  imports: [FormsModule, CommonModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  noticia: INoticias = {
    titulo: '',
    imagen: '',
    cuerpo: '',
    fecha: new Date(),
  };

  arrayNoticiasAgregadas: INoticias[] = [];

  agregarNoticia(): void {
    if (
      this.noticia.titulo?.trim() &&
      this.noticia.imagen?.trim() &&
      this.noticia.cuerpo?.trim() &&
      this.noticia.fecha
    ) {
      
      const nuevaNoticia: INoticias = { ...this.noticia };
      this.arrayNoticiasAgregadas.push(nuevaNoticia);
      console.log('Noticia agregada:', nuevaNoticia);
      
      this.noticia = { titulo: '', imagen: '', cuerpo: '', fecha: new Date() };
    } else {
      console.error('Por favor, completa todos los campos.');
      
    }
  }

  }
