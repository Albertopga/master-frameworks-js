import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public titulo: string;
  /* no se debe meter lógica dentro del constructor, sólo usarlo para asignar 
  valor a las propiedades*/
  constructor() {
    this.titulo = "Componente películas"

  }

  /*esto es un hook que se ejecuta cuando iniciamos nuestro componente, y lo hace después 
  de ejecutar el constructor. Para poder usarlo debemos de importarlo del core de angular*/
  ngOnInit(): void {
  }

  /* se ejecuta cada vez que suceda algún cambio */
  ngDoCheck(): void {
    console.log("doCheck")
  }

  cambiarTitulo() {
    this.titulo = "El titulo ha cambiado"
  }
  /*Avisa de que se va a destruir la instancia del componente */
  ngOnDestroy() {
    console.log('El componente se va a destruir')
  }
}
