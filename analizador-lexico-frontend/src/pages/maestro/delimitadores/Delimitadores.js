import React, { useEffect, useState } from "react";
import UpdateDelimitadores from "./UpdateDelimitadores";
import InsertDelimitadores from "./InsertarDelimitadores";

function Delimitadores() {

  const [delimitadores, setDelimitadores] = useState([]);
  const [delimitadorSeleccionado, setDelimitadorSeleccionado] = useState(null);
  const [mostrarCrear, setMostrarCrear] = useState(false);

  const cargarDelimitadores = () => {

    fetch("http://localhost:3000/delimitadores")
      .then(res => res.json())
      .then(data => setDelimitadores(data))
      .catch(error => console.error(error));

  };

  useEffect(() => {

    cargarDelimitadores();

  }, []);

  return (

    <div className="table-wrapper">

      <div className="table-header">

        <h2 className="table-title">
          Catálogo de Delimitadores
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
            <th>Delimitador</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {delimitadores.map((d) => (

            <tr key={d.id}>

              <td>{d.delimitador}</td>

              <td>
                {d.estado ? "Activo" : "Inactivo"}
              </td>

              <td>

                <button
                  className="btn-update"
                  onClick={() => setDelimitadorSeleccionado(d)}
                >
                  Actualizar
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <UpdateDelimitadores
        delimitador={delimitadorSeleccionado}
        cerrar={() => setDelimitadorSeleccionado(null)}
        actualizarLista={cargarDelimitadores}
      />

      <InsertDelimitadores
        mostrar={mostrarCrear}
        cerrar={() => setMostrarCrear(false)}
        actualizarLista={cargarDelimitadores}
      />

    </div>

  );

}

export default Delimitadores;