import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  public user: any;
  public campo: string;

  constructor() {
    // datos a recoger del formulario
    this.user = {
      nombre: "",
      apellidos: "",
      bio: "",
      genero: ""
    }

  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.user)
  }

  hasDadoClick() {
    alert("has dado click")
  }

  hasSalido() {
    console.log("has salido")

  }

  hasPulsadoEnter() {
    alert("has pulsado enter")

  }
}
