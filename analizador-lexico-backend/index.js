const express = require("express");
const cors = require("cors");
const { connectDB, sql } = require("./config/db");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.send("Backend del Analizador Léxico funcionando");
});

app.get("/palabras", async (req, res) => {
    try {
        const result = await sql.query("SELECT * FROM palabras_reservadas");
        res.json(result.recordset);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al obtener palabras");
    }
});

app.listen(3000, () => {
    console.log("Servidor corriendo en puerto 3000");
});