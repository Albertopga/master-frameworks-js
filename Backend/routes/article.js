"use strict";

const express = require("express");
const ArticleController = require("../controllers/article");
const router = express.Router();

// Rutas de prueba
router.post("/test-curso", ArticleController.datosCurso);
router.get("/test-de-controlador", ArticleController.test);

// Rutas útiles
router.post("/save", ArticleController.save);
module.exports = router;
