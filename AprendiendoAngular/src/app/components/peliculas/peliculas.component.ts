import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  public titulo: string;
  public peliculas: Array<any>;


  /* no se debe meter lógica dentro del constructor, sólo usarlo para asignar 
  valor a las propiedades*/
  constructor() {
    this.titulo = "Componente películas"
    this.peliculas = [
      { year: 2019, title: "SpiderMan", image: "https://as01.epimg.net/meristation/imagenes/2019/09/27/noticias/1569603388_605931_1569603425_noticia_normal.jpg" },
      { year: 2018, title: "Vengadores", image: "https://as01.epimg.net/tikitakas/imagenes/2019/04/26/portada/1556258369_131914_1556258703_noticia_normal.jpg" },
      { year: 2008, title: "IronMan", image: "https://blogdesuperheroes.es/Iron%20Man/BDS_IronMan_Definitivomini.jpg" },
      { year: 2009, title: "Thor", image: "https://depor.com/resizer/Wbi-oZhBgGCuTLGvU9yWxi6P5w8=/640x0/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/RIWVELPLOZFTBLJBMLAS4TOJZE.jpg" }
    ]
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
