"use strict";

// cargar módulos de node para crear el servidor
const express = require("express");
const bodyParser = require("body-parser");

// ejecutar express para trabajar con http
const app = express();

// cargar fichero de rutas

// cargar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// activar el CORS

// añadir prefijos a  rutas / cargar rutas

// Ruta o método de prueba para Api rest
app.get("/datos-curso", (req, res) => {
  return res.status(200).send({
    curso: "Master en framewors",
    alumno: "Alberto Pérez",
    url: "https://github.com/Albertopga/master-frameworks-js",
  });
});
// exportar el módulo (fichero actual)
module.exports = app;
