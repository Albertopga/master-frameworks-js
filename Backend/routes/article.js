"use strict";

const express = require("express");
const ArticleController = require("../controllers/article");
const { route } = require("../app");
const router = express.Router();

// Rutas de prueba
router.post("/test-curso", ArticleController.datosCurso);
router.get("/test-de-controlador", ArticleController.test);

// Rutas útiles
router.post("/save", ArticleController.save);
router.get("/articles/:last?", ArticleController.getArticles);
router.get("/article/:id", ArticleController.getArticle);
router.put("/article/:id", ArticleController.updateArticle);
router.delete("/article/:id", ArticleController.deleteArticle);

module.exports = router;
