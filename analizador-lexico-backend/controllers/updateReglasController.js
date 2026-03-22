const { sql } = require("../config/db");

const updateReglas = async (req, res) => {

  try {

    const { id } = req.params;
    const { regla, estado } = req.body;

    const estadoBit = Number(estado);

    await sql.query`
      EXEC sp_ActualizarRegla
      @id = ${id},
      @regla = ${regla},
      @estado = ${estadoBit}
    `;

    res.send("Regla actualizada");

  } catch (error) {

    console.error(error);
    res.status(500).send("Error al actualizar regla");

  }

};

module.exports = updateReglas;