const { sql } = require("../config/db");

const updatePalabra = async (req, res) => {

  try {

    const { id } = req.params;
    const { palabra, estado } = req.body;

    const request = new sql.Request();

    request.input("id", sql.Int, id);
    request.input("palabra", sql.VarChar(50), palabra);
    request.input("estado", sql.Bit, estado);

    await request.query(`
      UPDATE palabras_reservadas
      SET palabra = @palabra,
          estado = @estado
      WHERE id = @id
    `);

    res.send("Actualizado");

  } catch (error) {

    console.error(error);
    res.status(500).send("Error al actualizar");

  }

};

module.exports = updatePalabra;