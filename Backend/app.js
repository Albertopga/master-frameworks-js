"use strict";

// cargar módulos de node para crear el servidor
const express = require("express");
const bodyParser = require("body-parser");

// ejecutar express para trabajar con http
const app = express();

// cargar fichero de rutas
const article_routes = require("./routes/article");

// cargar middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// activar el CORS

// añadir prefijos a  rutas / cargar rutas
app.use("/api", article_routes);

// exportar el módulo (fichero actual)
module.exports = app;
