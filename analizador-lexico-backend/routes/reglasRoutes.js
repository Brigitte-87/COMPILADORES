const express = require("express");
const router = express.Router();

const leerReglas = require("../controllers/leerReglasController");
const insertarReglas = require("../controllers/insertarReglasController");
const updateReglas = require("../controllers/updateReglasController");

router.get("/", leerReglas);

router.post("/", insertarReglas);

router.put("/:id", updateReglas);

module.exports = router;