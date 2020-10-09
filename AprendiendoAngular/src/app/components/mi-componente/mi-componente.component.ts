// importar la clase Component del core de angular 
import { Component } from '@angular/core';

// definimos el decorador de Component para definir las propiedades de este componente.
/* obligatorias tendrá que llevar dos propiedades: 
    selector, que es la etiqueta que tendrá el componente
    templateUrl, que es la ruta donde estará la vista de nuestro componente*/
@Component({
    selector: 'mi-componente',
    templateUrl: './mi-componente.component.html'
})

// definimos la clase
export class MiComponente {
    public titulo: string;
    public comentario: string;
    public year: number;
    public mostrarPeliculas: boolean

    constructor() {
        this.titulo = "Hola Soy Mi COMPONENTE";
        this.comentario = "Soy el primero que creas";
        this.year = 2020;
        this.mostrarPeliculas = true;

    }

    ocultarPeliculas() {
        this.mostrarPeliculas = !this.mostrarPeliculas;
    }
}