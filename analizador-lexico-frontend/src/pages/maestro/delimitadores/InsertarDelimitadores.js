import React, { useState } from "react";

function InsertDelimitadores({ mostrar, cerrar, actualizarLista }) {

  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(1);

  const guardar = async () => {

    await fetch("http://localhost:3000/delimitadores", {

      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        delimitador: nombre,
        estado: estado

      })

    });

    setNombre("");
    setEstado(1);

    actualizarLista();
    cerrar();

  };

  if (!mostrar) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Crear Delimitador</h2>

        <label>Delimitador</label>

        <input
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Estado</label>

        <select
          value={estado}
          onChange={(e) => setEstado(Number(e.target.value))}
        >

          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>

        </select>

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

export default InsertDelimitadores;