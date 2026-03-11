import React, { useState } from "react";
import "../../styles/alumno.css";

function Alumno({ volver }) {

  const [codigo, setCodigo] = useState("");
  const [tokens, setTokens] = useState([]);

  const analizar = () => {

    const palabrasReservadas = ["var","if","else","print"];

    const partes = codigo.split(/\s+/);

    const resultado = partes.map((p) => {

      if(palabrasReservadas.includes(p))
        return {token:p,tipo:"Palabra Reservada"}

      if(/^[0-9]+$/.test(p))
        return {token:p,tipo:"Número"}

      if(/^[a-zA-Z][a-zA-Z0-9]*$/.test(p))
        return {token:p,tipo:"Identificador"}

      return {token:p,tipo:"Símbolo"}

    })

    setTokens(resultado)

  };

  return (

    <div className="alumno-container">

      <div className="alumno-panel">

        <h1 className="alumno-title">
          Analizador Léxico
        </h1>

        <textarea
          className="code-area"
          placeholder="Escribe aquí el código a analizar..."
          value={codigo}
          onChange={(e)=>setCodigo(e.target.value)}
        />

        <button
          className="btn-analizar"
          onClick={analizar}
        >
          Analizar
        </button>

        {tokens.length > 0 && (

          <>
            <table className="result-table">

              <thead>
                <tr>
                  <th>Token</th>
                  <th>Tipo</th>
                </tr>
              </thead>

              <tbody>

                {tokens.map((t,i)=>(
                  <tr key={i}>
                    <td>{t.token}</td>
                    <td>{t.tipo}</td>
                  </tr>
                ))}

              </tbody>

            </table>

            <div className="summary">

              Tokens encontrados: {tokens.length}

            </div>

          </>

        )}

        <button
          className="btn-volver"
          onClick={volver}
        >
          Volver
        </button>

      </div>

    </div>
  );
}

export default Alumno;