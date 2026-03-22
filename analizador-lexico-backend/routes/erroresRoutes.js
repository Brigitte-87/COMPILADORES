const express = require("express");
const router = express.Router();

const leerErrores = require("../controllers/leerErroresController");
const insertarErrores = require("../controllers/insertarErroresController");
const updateErrores = require("../controllers/updateErroresController");

router.get("/", leerErrores);

router.post("/", insertarErrores);

router.put("/:id", updateErrores);

module.exports = router;