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

// activar el CORS acceso cruzado entre dominio,
// permite las peticiones asíncronas a la api desde cualquier frontend

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// añadir prefijos a  rutas / cargar rutas
app.use("/api", article_routes);

// exportar el módulo (fichero actual)
module.exports = app;
