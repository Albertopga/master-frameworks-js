"use strict";

const mongoose = require("mongoose");

// activamos promesas de mongoose
mongoose.Promise = global.Promise;

//deshabilita esta función
mongoose.set("useFindAndModify", false);

//crear la conexion a mongodb por medio de una promesa
const url = "mongodb://localhost:27017/api-rest-blog";
const options = { useNewUrlParser: true };

mongoose.connect(url, options).then(() => {
  console.log(
    "la conexión a la base de datos, se ha realizado correctamente!!!"
  );

  // crear servidor y escuchar peticiones http
});
