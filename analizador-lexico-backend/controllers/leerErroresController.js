const { sql } = require("../config/db");

const leerErrores = async (req, res) => {

  try {

    const result = await sql.query`
      EXEC sp_LeerErrores
    `;

    res.json(result.recordset);

  } catch (error) {

    console.error(error);
    res.status(500).send("Error al leer errores");

  }

};

module.exports = leerErrores;