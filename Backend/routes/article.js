"use strict";

const express = require("express");
const ArticleController = require("../controllers/article");
const router = express.Router();
const multipart = require("connect-multiparty");

// hace un paso intermedio para poder guardar los archivos y tratarlos
const md_upload = multipart({ uploadDir: "./upload/articles" });

// Rutas de prueba
router.post("/test-curso", ArticleController.datosCurso);
router.get("/test-de-controlador", ArticleController.test);

// Rutas útiles
router.post("/save", ArticleController.save);
router.get("/articles/:last?", ArticleController.getArticles);
router.get("/article/:id", ArticleController.getArticle);
router.put("/article/:id", ArticleController.updateArticle);
router.delete("/article/:id", ArticleController.deleteArticle);
router.post("/upload-image/:id", md_upload, ArticleController.uploadArticle);
router.get("/get-image/:image", ArticleController.getImage);
router.get("/search/:search", ArticleController.searchArticle);

module.exports = router;
