import React, { useState } from "react";

function InsertarPalabra({ mostrar, cerrar, actualizarLista }) {

  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(1);

  if(!mostrar) return null;

  const guardar = async () => {

    await fetch("http://localhost:3000/palabras",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        palabra:nombre,
        estado:estado
      })
    });

    actualizarLista();
    cerrar();
    setNombre("");
    setEstado(1);
  };

  return(

    <div className="modal-overlay">

      <div className="modal">

        <h2>Crear Palabra Reservada</h2>

        <label>Nombre de la palabra</label>

        <input
          value={nombre}
          onChange={(e)=>setNombre(e.target.value)}
        />

        <label>Estado</label>

        <select
          value={estado}
          onChange={(e)=>setEstado(Number(e.target.value))}
        >
          <option value={1}>Activo</option>
          <option value={0}>Inactivo</option>
        </select>

        <div className="modal-buttons">

          <button
            className="btn-update"
            onClick={guardar}
          >
            Guardar
          </button>

          <button onClick={cerrar}>
            Cancelar
          </button>

        </div>

      </div>

    </div>

  )

}

export default InsertarPalabra;