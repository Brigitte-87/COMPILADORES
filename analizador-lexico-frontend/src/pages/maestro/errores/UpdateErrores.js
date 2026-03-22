import React, { useEffect, useState } from "react";

function UpdateErrores({ error, cerrar, actualizarLista }) {

  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(1);

  useEffect(() => {

    if (error) {

      setNombre(error.error);
      setEstado(Number(error.estado));

    }

  }, [error]);

  const guardar = async () => {

    await fetch(`http://localhost:3000/errores/${error.id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        error: nombre,
        estado: estado
      })

    });

    actualizarLista();
    cerrar();

  };

  if (!error) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Actualizar Error</h2>

        <label>Error</label>

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

          <button className="btn-update" onClick={guardar}>
            Guardar cambios
          </button>

          <button onClick={cerrar}>
            Cancelar
          </button>

        </div>

      </div>

    </div>

  );

}

export default UpdateErrores;