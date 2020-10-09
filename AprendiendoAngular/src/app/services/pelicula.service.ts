import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

// asi indicamos que es un servicio
@Injectable()
export class PeliculaService {

    public peliculas = [
        new Pelicula("SpiderMan", 2019, "https://as01.epimg.net/meristation/imagenes/2019/09/27/noticias/1569603388_605931_1569603425_noticia_normal.jpg"),
        new Pelicula("IronMan", 2008, "https://blogdesuperheroes.es/Iron%20Man/BDS_IronMan_Definitivomini.jpg"),
        new Pelicula("Thor", 2009, "https://depor.com/resizer/Wbi-oZhBgGCuTLGvU9yWxi6P5w8=/640x0/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/RIWVELPLOZFTBLJBMLAS4TOJZE.jpg")
    ]

    holaMundo() {
        return "Hola desde un servicio de Angular!!!";
    }

    getPeliculas() {
        return this.peliculas
    }
}