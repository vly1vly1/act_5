import { Component } from '@angular/core';
import { BlogComponent } from './components/blog/blog.component';
import { INoticias } from './interfaces/inoticias';

@Component({
  selector: 'app-root',
  imports: [BlogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  arrayNoticias: INoticias[] = [
    {
      titulo: 'El juez le retira el pajaporte a Ábalos',
      imagen: 'https://via.placeholder.com/150',
      cuerpo:
        'El juez instructor ha optado este lunes por retirarle el pajaporte al exministro José Luis Ábalos, rechazando así la prisión provisional a la que aspiraban las acusaciones populares, al considerar que su medida es aún más restrictiva para el investigado. ',
      fecha: new Date('2025-05-07'),
    },
    {
      titulo: 'Pedro Sánchez pasa por su momento más delicado',
      imagen: 'https://via.placeholder.com/155',
      cuerpo:
        'Los principales aliados políticos, mediáticos y empresariales de Sánchez están dejándole caer uno a uno tras el ingreso en prisión de Santos Cerdán el pasado lunes. Tanto es así, que uno de los principales bastiones socialistas, el restaurante madrileño Luna Rosa, donde Pedro Sánchez, con sus colegas, se comió una pizza cojonuda en 2010, ha retirado ese plato del menú. Desde el establecimiento no han querido dar demasiadas explicaciones y por teléfono se limitan a decir que la icónica pizza “tampoco era tan, tan cojonuda”.',
      fecha: new Date('2025-05-07'),
    },
  ];
}
