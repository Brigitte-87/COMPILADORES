const { sql } = require("../config/db");

const updateDelimitadores = async (req, res) => {

    try {

        const { id } = req.params;
        const { delimitador, estado } = req.body;

        const estadoBit = Number(estado);

        await sql.query`
            EXEC sp_ActualizarDelimitador
            @id = ${id},
            @delimitador = ${delimitador},
            @estado = ${estadoBit}
        `;

        res.send("Delimitador actualizado");

    } catch (error) {

        console.error(error);
        res.status(500).send("Error al actualizar delimitador");

    }

};

module.exports = updateDelimitadores;