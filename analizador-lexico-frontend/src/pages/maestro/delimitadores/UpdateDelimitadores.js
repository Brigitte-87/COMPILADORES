import React, { useEffect, useState } from "react";

function UpdateDelimitadores({ delimitador, cerrar, actualizarLista }) {

  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(1);

  useEffect(() => {

    if (delimitador) {

      setNombre(delimitador.delimitador);
      setEstado(Number(delimitador.estado));

    }

  }, [delimitador]);

  const guardar = async () => {

    await fetch(`http://localhost:3000/delimitadores/${delimitador.id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        delimitador: nombre,
        estado: estado

      })

    });

    actualizarLista();
    cerrar();

  };

  if (!delimitador) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Actualizar Delimitador</h2>

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

export default UpdateDelimitadores;