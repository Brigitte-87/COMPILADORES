const { sql } = require("../config/db");

const insertarDelimitadores = async (req, res) => {

    try {

        const { delimitador } = req.body;

        await sql.query`
            EXEC sp_InsertarDelimitador
            @delimitador = ${delimitador}
        `;

        res.send("Delimitador insertado");

    } catch (error) {

        console.error(error);
        res.status(500).send("Error al insertar delimitador");

    }

};

module.exports = insertarDelimitadores;