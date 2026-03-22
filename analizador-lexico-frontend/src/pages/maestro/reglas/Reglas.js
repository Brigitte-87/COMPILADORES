import React, { useEffect, useState } from "react";
import UpdateReglas from "./UpdateReglas";
import InsertReglas from "./InsertReglas";

function Reglas() {

  const [reglas, setReglas] = useState([]);
  const [reglaSeleccionada, setReglaSeleccionada] = useState(null);
  const [mostrarCrear, setMostrarCrear] = useState(false);

  const cargarReglas = () => {

    fetch("http://localhost:3000/reglas")
      .then(res => res.json())
      .then(data => setReglas(data))
      .catch(error => console.error(error));

  };

  useEffect(() => {

    cargarReglas();

  }, []);

  return (

    <div className="table-wrapper">

      <div className="table-header">

        <h2 className="table-title">
          Reglas básicas para el uso del Software
        </h2>

        <button
          className="btn-create"
          onClick={() => setMostrarCrear(true)}
        >
          Crear
        </button>

      </div>

      <table className="admin-table">

        <thead>
          <tr>
            <th>Regla</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {reglas.map((r) => (

            <tr key={r.id}>

              <td>{r.regla}</td>

              <td>
                {r.estado ? "Activo" : "Inactivo"}
              </td>

              <td>

                <button
                  className="btn-update"
                  onClick={() => setReglaSeleccionada(r)}
                >
                  Actualizar
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <UpdateReglas
        regla={reglaSeleccionada}
        cerrar={() => setReglaSeleccionada(null)}
        actualizarLista={cargarReglas}
      />

      <InsertReglas
        mostrar={mostrarCrear}
        cerrar={() => setMostrarCrear(false)}
        actualizarLista={cargarReglas}
      />

    </div>

  );

}

export default Reglas;