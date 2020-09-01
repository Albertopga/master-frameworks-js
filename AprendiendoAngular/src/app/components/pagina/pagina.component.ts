import { Component, OnInit } from '@angular/core';
// para recoger parametros pasados por url necesitamos importar:
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {

  public nombre: string;
  public apellido: string;

  // con _route vamos a sacar parámetros de la url y con _router haremos redirecciones
  constructor(
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params) => {
      this.nombre = params.nombre
      this.apellido = params.apellido
    })
  }

  redireccion() {
    // con navigate redirecciona a la url indicada
    this._router.navigate(['/formulario']);

    // si lo hago de este modo le paso parametros a la url
    this._router.navigate(['/pagina-de-pruebas', 'Alberto', 'Perez']);

  }
}
