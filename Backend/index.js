"use strict";

const mongoose = require("mongoose");
const app = require("./app");
const port = 3900;

//deshabilita esta función
mongoose.set("useFindAndModify", false);
// activamos promesas de mongoose
mongoose.Promise = global.Promise;

//crear la conexión a mongodb por medio de una promesa
const url = "mongodb://localhost:27017/api-rest-blog";
const options = { useNewUrlParser: true };

mongoose.connect(url, options).then(() => {
  console.log(
    "la conexión a la base de datos, se ha realizado correctamente!!!"
  );

  // crear servidor y escuchar peticiones http
  app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:" + port);
  });
});
