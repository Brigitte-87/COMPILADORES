const sql = require("mssql");

const config = {
    user: "sa",
    password: "Brigitte@87",
    server: "localhost",
    database: "analizador_lexico",
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

const connectDB = async () => {
    try {
        await sql.connect(config);
        console.log("Conectado a SQL Server");
    } catch (err) {
        console.error("Error de conexión:", err);
    }
};

module.exports = {
    sql,
    connectDB
};