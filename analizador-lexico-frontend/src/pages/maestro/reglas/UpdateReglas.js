import React, { useEffect, useState } from "react";

function UpdateReglas({ regla, cerrar, actualizarLista }) {

  const [nombre, setNombre] = useState("");
  const [estado, setEstado] = useState(1);

  useEffect(() => {

    if (regla) {

      setNombre(regla.regla);
      setEstado(Number(regla.estado));

    }

  }, [regla]);

  const guardar = async () => {

    await fetch(`http://localhost:3000/reglas/${regla.id}`, {

      method: "PUT",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        regla: nombre,
        estado: estado
      })

    });

    actualizarLista();
    cerrar();

  };

  if (!regla) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Actualizar Regla</h2>

        <label>Regla</label>

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

export default UpdateReglas;