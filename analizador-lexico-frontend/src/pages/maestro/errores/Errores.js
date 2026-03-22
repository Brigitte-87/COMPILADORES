import React, { useEffect, useState } from "react";
import UpdateErrores from "./UpdateErrores";
import InsertErrores from "./InsertErrores";

function Errores() {

  const [errores, setErrores] = useState([]);
  const [errorSeleccionado, setErrorSeleccionado] = useState(null);
  const [mostrarCrear, setMostrarCrear] = useState(false);

  const cargarErrores = () => {

    fetch("http://localhost:3000/errores")
      .then(res => res.json())
      .then(data => setErrores(data))
      .catch(error => console.error(error));

  };

  useEffect(() => {

    cargarErrores();

  }, []);

  return (

    <div className="table-wrapper">

      <div className="table-header">

        <h2 className="table-title">
          Catálogo de Errores
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
            <th>Error</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {errores.map((e) => (

            <tr key={e.id}>

              <td>{e.error}</td>

              <td>
                {e.estado ? "Activo" : "Inactivo"}
              </td>

              <td>

                <button
                  className="btn-update"
                  onClick={() => setErrorSeleccionado(e)}
                >
                  Actualizar
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <UpdateErrores
        error={errorSeleccionado}
        cerrar={() => setErrorSeleccionado(null)}
        actualizarLista={cargarErrores}
      />

      <InsertErrores
        mostrar={mostrarCrear}
        cerrar={() => setMostrarCrear(false)}
        actualizarLista={cargarErrores}
      />

    </div>

  );

}

export default Errores;