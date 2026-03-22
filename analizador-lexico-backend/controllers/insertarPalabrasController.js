const { sql } = require("../config/db");

const insertarPalabra = async (req, res) => {

    try {

        const { palabra } = req.body;

        await sql.query`
            INSERT INTO palabras_reservadas (palabra, estado)
            VALUES (${palabra}, 1)
        `;

        res.send("Palabra insertada");

    } catch (error) {

        console.error(error);
        res.status(500).send("Error al insertar");

    }

};

module.exports = insertarPalabra;