const { sql } = require("../config/db");

const insertarErrores = async (req, res) => {

  try {

    const { error } = req.body;

    await sql.query`
      EXEC sp_InsertarError
      @error = ${error}
    `;

    res.send("Error insertado");

  } catch (error) {

    console.error(error);
    res.status(500).send("Error al insertar error");

  }

};

module.exports = insertarErrores;