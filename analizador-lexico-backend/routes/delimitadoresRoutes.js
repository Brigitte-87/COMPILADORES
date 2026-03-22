const express = require("express");
const router = express.Router();

const leerDelimitadores = require("../controllers/leerDelimitadoresController");
const insertarDelimitadores = require("../controllers/insertarDelimitadoresController");
const updateDelimitadores = require("../controllers/updateDelimitadoresController");

router.get("/", leerDelimitadores);

router.post("/", insertarDelimitadores);

router.put("/:id", updateDelimitadores);

module.exports = router;