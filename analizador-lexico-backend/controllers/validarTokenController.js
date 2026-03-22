const { sql } = require("../config/db");

const validarToken = async (req, res) => {

const token = req.params.token;


try{

// BUSCAR DELIMITADOR
let result = await new sql.Request()
.input("delimitador", sql.VarChar, token)
.query("SELECT estado FROM delimitadores WHERE delimitador=@delimitador");

if(result.recordset.length > 0){

const estado = result.recordset[0].estado;

if(estado == 0){
return res.json({error:1000});
}

return res.json({tipo:"Delimitador"});
}


// BUSCAR PALABRA RESERVADA
result = await new sql.Request()
.input("palabra", sql.VarChar, token)
.query("SELECT estado FROM palabras_reservadas WHERE palabra=@palabra");

if(result.recordset.length > 0){

const estado = result.recordset[0].estado;

if(estado == 0){
return res.json({error:1000});
}

return res.json({tipo:"Palabra Reservada"});
}


/* if(/\s/.test(token)){
return res.json({error:6000});
} */

// IDENTIFICADOR
if(/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token)){

if(token.startsWith("_")){
return res.json({error:3000});
}

if(token.endsWith("z")){
return res.json({error:5000})
}





return res.json({tipo:"Identificador"});
}


// NUMERO
if(/^[0-9]+$/.test(token)){ 
return res.json({tipo:"Constante"});
}


// OPERADORES
if(/^[+\-*/=]$/.test(token)){
    return res.json({tipo:"Operador"});
}

// ERROR NO ENCONTRADO
return res.json({error:4000});

}catch(error){

console.error(error);
res.json({error:"Error en servidor"}); 

}

};

module.exports = validarToken;
