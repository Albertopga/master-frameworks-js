import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service'

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers: [PeliculaService]
})
export class PeliculasComponent implements OnInit {
  public titulo: string;
  public peliculas: Pelicula[]
  public favorita: Pelicula;
  public fecha: any;

  /* no se debe meter lógica dentro del constructor, sólo usarlo para asignar 
  valor a las propiedades*/
  // el _se emplea para indicar que es un servicio

  constructor(private _peliculaService: PeliculaService) {
    this.titulo = "Componente películas"
    this.peliculas = _peliculaService.getPeliculas();
    this.fecha = new Date(2020, 0, 12);
  }

  /*esto es un hook que se ejecuta cuando iniciamos nuestro componente, y lo hace después 
  de ejecutar el constructor. Para poder usarlo debemos de importarlo del core de angular*/
  ngOnInit(): void {
    console.log(this._peliculaService.holaMundo())
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

  mostrarFavorita(event) {
    this.favorita = event.pelicula;
    console.log(this.favorita)
  }
}
