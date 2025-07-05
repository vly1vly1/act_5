import { Component } from '@angular/core';
import { INoticias } from '../../interfaces/inoticias';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
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

  agregarNoticia() {
    if (this.noticia.titulo && this.noticia.imagen && this.noticia.cuerpo && this.noticia.fecha) {
      console.log('Noticia agregada:', this.noticia);
      this.noticia = { titulo: '', imagen: '', cuerpo: '', fecha: new Date() };
    } else {
      console.error('Por favor, completa todos los campos.');
    }
  }

  }
