import React, { useEffect, useState } from "react";
import UpdatePalabra from "./UpdatePalabra";
import InsertarPalabra from "./InsertarPalabra";

function Palabras() {

  const [palabras, setPalabras] = useState([]);
  const [palabraSeleccionada, setPalabraSeleccionada] = useState(null);
  const [mostrarCrear, setMostrarCrear] = useState(false);

  const cargarPalabras = () => {
    fetch("http://localhost:3000/palabras")
      .then(res => res.json())
      .then(data => setPalabras(data))
      .catch(error => console.error(error));
  };

  useEffect(() => {
    cargarPalabras();
  }, []);

  return (

    <div className="table-wrapper">

      <div className="table-header">

        <h2 className="table-title">
          Catálogo de Palabras Reservadas
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
            <th>Palabra Reservada</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {palabras.map((p) => (

            <tr key={p.id}>

              <td>{p.palabra}</td>

              <td>
                {p.estado ? "Activo" : "Inactivo"}
              </td>

              <td>

                <button
                  className="btn-update"
                  onClick={() => setPalabraSeleccionada(p)}
                >
                  Actualizar
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* Modal actualizar */}
      <UpdatePalabra
        palabra={palabraSeleccionada}
        cerrar={() => setPalabraSeleccionada(null)}
        actualizarLista={cargarPalabras}
      />

      {/* Modal crear */}
      <InsertarPalabra
        mostrar={mostrarCrear}
        cerrar={() => setMostrarCrear(false)}
        actualizarLista={cargarPalabras}
      />

    </div>

  );

}

export default Palabras;