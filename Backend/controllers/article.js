"use strict";

const validator = require("validator");
const Article = require("../models/article");
const { param } = require("../routes/article");

const controller = {
  datosCurso: (req, res) => {
    const hola = req.body.hola;

    return res.status(200).send({
      curso: "Master en frameworks JS",
      autor: "Alberto Pérez",
      URL: "www.google.es",
      hola,
    });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: "Soy la acción teste del controlador de artículos",
    });
  },

  save: (req, res) => {
    // recoger parámetros por post
    const params = req.body;

    // validar datos con librería validator
    let validate_title;
    let validate_content;

    try {
      validate_title = !validator.isEmpty(params.title);
      validate_content = !validator.isEmpty(params.content);
    } catch (err) {
      return res.status(200).send({
        status: "error",
        message: "Faltan datos por enviar",
      });
    }

    if (validate_title && validate_content) {
      // crear objeto a guardar
      const article = new Article();

      // asignar valores
      article.title = params.title;
      article.content = params.content;
      article.image = null;

      // guardar artículo
      article.save((err, articleStored) => {
        if (err || !articleStored) {
          return res.status(404).send({
            status: "error",
            message: "El artículo no se ha guardado!!!",
          });
        }

        // retornar una respuesta
        return res.status(200).send({
          status: "success",
          article: articleStored,
        });
      });
    } else {
      return res.status(200).send({
        status: "error",
        message: "los datos no son válidos",
      });
    }
  },
}; // fin del controller

module.exports = controller;
