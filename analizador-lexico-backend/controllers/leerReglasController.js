const { sql } = require("../config/db");

const leerReglas = async (req, res) => {

  try {

    const result = await sql.query`
      EXEC sp_LeerReglas
    `;

    res.json(result.recordset);

  } catch (error) {

    console.error(error);
    res.status(500).send("Error al leer reglas");

  }

};

module.exports = leerReglas;