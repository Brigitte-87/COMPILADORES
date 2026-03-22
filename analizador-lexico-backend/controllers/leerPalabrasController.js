const { sql } = require("../config/db");

const leerPalabras = async (req, res) => {

    try {

        const result = await sql.query(`
            SELECT id, palabra, estado
            FROM palabras_reservadas
        `);

        res.json(result.recordset);

    } catch (error) {

        console.error(error);
        res.status(500).send("Error al leer palabras");

    }

};

module.exports = leerPalabras;