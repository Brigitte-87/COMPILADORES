const express = require("express");
const router = express.Router();

const leerErrorPorId = require("../controllers/leerErrorPorIdController");

router.get("/:id_error", leerErrorPorId);

module.exports = router;
