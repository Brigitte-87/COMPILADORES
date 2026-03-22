const { sql } = require("../config/db");

const insertarReglas = async (req, res) => {

  try {

    const { regla } = req.body;

    await sql.query`
      EXEC sp_InsertarRegla
      @regla = ${regla}
    `;

    res.send("Regla insertada");

  } catch (error) {

    console.error(error);
    res.status(500).send("Error al insertar regla");

  }

};

module.exports = insertarReglas;