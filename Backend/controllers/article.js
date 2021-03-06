"use strict";

const validator = require("validator");
const Article = require("../models/article");
const { param } = require("../routes/article");
const article = require("../models/article");
const fs = require("fs");
const path = require("path");
const { exists } = require("../models/article");

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

  updateArticle: (req, res) => {
    let validate_title;
    let validate_content;
    // recoger id articulo por url
    const article_id = req.params.id;

    // recoger datos que llegan por put
    const params = req.body;

    // validar los datos
    try {
      validate_title = !validator.isEmpty(params.title);
      validate_content = !validator.isEmpty(params.content);
    } catch (error) {
      return res.status(404).send({
        status: "error",
        message: "faltan datos por enviar!!",
      });
    }

    if (validate_title && validate_content) {
      // hacer la consulta y actualizar
      Article.findByIdAndUpdate(
        { _id: article_id },
        params,
        { new: true },
        (err, articleUpdate) => {
          if (err) {
            return res.status(500).send({
              status: "error",
              message: "error al actualizar!!",
            });
          }

          if (!articleUpdate) {
            return res.status(404).send({
              status: "error",
              message: "no existe el articulo!!",
            });
          }

          return res.status(200).send({
            status: "success",
            article: articleUpdate,
          });
        }
      );
    } else {
      return res.status(500).send({
        status: "error",
        message: "la validación no es correcta!!",
      });
    }
  },

  deleteArticle: (req, res) => {
    // recoger id
    const article_id = req.params.id;

    // hacer find and delete
    Article.findOneAndDelete({ _id: article_id }, (err, articleRemoved) => {
      if (err) {
        return res.status(500).send({
          status: "error",
          message: "error al borrar!!",
        });
      }
      if (!articleRemoved) {
        return res.status(404).send({
          status: "error",
          message: "articulo no borrado, puede que no exista!!",
        });
      }

      return res.status(200).send({
        status: "success",
        article: articleRemoved,
      });
    });
  },

  uploadArticle: (req, res) => {
    // configurar el modulo connect multiparty en router/article.js

    // recoger fichero de la petición
    let file_name = "imagen no subida";

    if (!req.files) {
      return res.status(404).send({
        status: "success",
        message: file_name,
      });
    }
    // conseguir el nombre de archivo
    const file_path = req.files.file0.path;
    file_name = file_path.split("\\")[2];

    // conseguir la extensión y validar que es de fotos
    const file_extension = file_name.split(".")[1].toLocaleLowerCase();

    if (
      file_extension !== "jpg" &&
      file_extension !== "jpeg" &&
      file_extension !== "png" &&
      file_extension !== "bmp" &&
      file_extension !== "gif"
    ) {
      // si no es valida la extensión, borrar el archivo
      fs.unlink(file_path, (err) => {
        return res.status(200).send({
          status: "error",
          message: "la extensión no es de imagen",
        });
      });
    } else {
      // sacar id del artículo a buscar
      const article_id = req.params.id;
      // si todo ok, Buscar el archivo, asignar el nombre de la imagen y actualizar el articulo
      Article.findOneAndUpdate(
        { _id: article_id },
        { image: file_name },
        { new: true },
        (err, articleUpdated) => {
          if (err || !articleUpdated) {
            return res.status(200).send({
              status: "error",
              message: "error al guardar la imagen de artículo",
            });
          }

          return res.status(200).send({
            status: "success",
            article: articleUpdated,
          });
        }
      );
    }
  },

  getImage: (req, res) => {
    // sacar fichero que nos llega por la url
    const file = req.params.image;

    // sacar el path completo
    const path_file = "./upload/articles/" + file;
    fs.exists(path_file, (exists) => {
      if (exists) {
        return res.sendFile(path.resolve(path_file));
      } else {
        return res.status(404).send({
          status: "error",
          message: "la imagen no existe",
        });
      }
    });
  },

  searchArticle: (req, res) => {
    // sacar string a buscar de la url
    const sear_string = req.params.search;

    // find or
    Article.find({
      $or: [
        { title: { $regex: sear_string, $options: "i" } },
        { content: { $regex: sear_string, $options: "i" } },
      ],
    })
      .sort([["date", "descending"]])
      .exec((err, articles) => {
        if (err) {
          return res.status(404).send({
            status: "error",
            message: "error en la petición",
          });
        }
        if (!articles || articles.length == 0) {
          return res.status(404).send({
            status: "error",
            message: "No se han encontrado artículos",
          });
        }
        return res.status(200).send({
          status: "success",
          articles,
        });
      });
  },
}; // fin del controller

module.exports = controller;

// return res.status(404).send({
//   message: "prufff",
// });
