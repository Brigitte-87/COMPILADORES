import React, { useState } from "react";

function InsertReglas({ mostrar, cerrar, actualizarLista }) {

  const [nombre, setNombre] = useState("");

  const guardar = async () => {

    await fetch("http://localhost:3000/reglas", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        regla: nombre
      })

    });

    setNombre("");

    actualizarLista();
    cerrar();

  };

  if (!mostrar) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Crear Regla</h2>

        <label>Regla</label>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <div className="modal-buttons">

          <button className="btn-create" onClick={guardar}>
            Crear
          </button>

          <button onClick={cerrar}>
            Cancelar
          </button>

        </div>

      </div>

    </div>

  );

}

export default InsertReglas;