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

  getArticles: (req, res) => {
    const query = Article.find({});
    const last = req.params.last;

    if (last || last != undefined) {
      query.limit(5);
    }

    // find para sacar datos de la bbdd
    // podríamos pasar parámetros a find para filtra la búsqueda
    query
      .sort("-id") // ordena por id de manera descendente
      .exec((err, articles) => {
        if (err) {
          return res.status(500).send({
            status: "error",
            message: "error al devolver los artículos!!",
          });
        }

        if (!articles) {
          return res.status(404).send({
            status: "error",
            message: "no se han encontrado artículos!!",
          });
        }

        return res.status(200).send({
          status: "success",
          articles,
        });
      });
  },

  getArticle: (req, res) => {
    // recoger id de url
    const article_id = req.params.id;

    // validar que id existe
    if (!article_id || article_id === null) {
      return res.status(404).send({
        status: "error",
        message: "no id!!",
      });
    }
    //buscar articulo
    Article.findById(article_id, (err, article) => {
      if (err || !article) {
        return res.status(404).send({
          status: "error",
          message: "no existe el artículo!!",
        });
      }
      // devolver articulo
      return res.status(200).send({
        status: "success",
        article,
      });
    });
  },
}; // fin del controller

module.exports = controller;
