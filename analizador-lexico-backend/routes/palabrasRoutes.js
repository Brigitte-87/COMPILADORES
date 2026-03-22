const express = require("express");
const router = express.Router();

const leerPalabras = require("../controllers/leerPalabrasController");
const insertarPalabra = require("../controllers/insertarPalabrasController");
const updatePalabra = require("../controllers/updatePalabrasController");

router.get("/", leerPalabras);

router.post("/", insertarPalabra);

router.put("/:id", updatePalabra);

module.exports = router;