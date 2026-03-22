const { sql } = require("../config/db");

const leerErrorPorId = async (req, res) => {

const id = req.params.id_error;   // 👈 CORREGIDO

try{

const result = await new sql.Request()
.input("id_error", sql.Int, id)
.query("SELECT error FROM errores WHERE id_error = @id_error and estado = 1");

res.json(result.recordset);

}catch(err){

console.error(err);
res.status(500).json({error:"Error en servidor"});

}

};

module.exports = leerErrorPorId;
