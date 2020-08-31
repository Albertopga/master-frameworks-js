"use strict";

const validator = require("validator");
const Article = require("../models/article");

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
    try {
      const validate_title = !validator.isEmpty(params.title);
      const validate_content = !validator.isEmpty(params.content);

      if (validate_title && validate_content) {
        return res.status(200).send({
          message: "validación correcta",
        });
      }
    } catch (err) {
      return res.status(200).send({
        message: "Faltan datos por enviar",
      });
    }

    // crear objeto a guardar

    // asignar valores

    // guardar artículo

    // retornar una respuesta
    return res.status(200).send({
      article: params,
    });
  },
}; // fin del controller

module.exports = controller;
