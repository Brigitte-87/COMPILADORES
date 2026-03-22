import React, { useState, useEffect } from "react";

function UpdatePalabra({ palabra, cerrar, actualizarLista }) {

  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(1);

  useEffect(() => {

    if (palabra) {

      setNombre(palabra.palabra);

      // convertir boolean → 1 o 0
      setEstado(palabra.estado ? 1 : 0);

    }

  }, [palabra]);

  const guardar = async () => {

    await fetch(`http://localhost:3000/palabras/${palabra.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        palabra: nombre,
        estado: estado
      })
    });

    actualizarLista();
    cerrar();

  };

  if (!palabra) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Actualizar Palabra Reservada</h2>

        <label>Nombre de la palabra</label>

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

          <button
            className="btn-update"
            onClick={guardar}
          >
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

export default UpdatePalabra;