const { sql } = require("../config/db");

const leerDelimitadores = async (req, res) => {

    try {

        const result = await sql.query`
            EXEC sp_LeerDelimitadores
        `;

        res.json(result.recordset);

    } catch (error) {

        console.error(error);
        res.status(500).send("Error al leer delimitadores");

    }

};

module.exports = leerDelimitadores;