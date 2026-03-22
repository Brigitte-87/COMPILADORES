const express = require("express");
const router = express.Router();

const validarToken = require("../controllers/validarTokenController");

router.get("/validar/:token", validarToken);

module.exports = router;
