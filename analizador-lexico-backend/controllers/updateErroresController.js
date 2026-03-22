const { sql } = require("../config/db");

const updateErrores = async (req, res) => {

  try {

    const { id } = req.params;
    const { error, estado } = req.body;

    const estadoBit = Number(estado);

    await sql.query`
      EXEC sp_ActualizarError
      @id = ${id},
      @error = ${error},
      @estado = ${estadoBit}
    `;

    res.send("Error actualizado");

  } catch (error) {

    console.error(error);
    res.status(500).send("Error al actualizar");

  }

};

module.exports = updateErrores;