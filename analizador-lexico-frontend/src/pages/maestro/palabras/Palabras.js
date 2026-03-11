import React from "react";

function Palabras() {

  return (

    <div className="table-wrapper">

      <div className="table-header">

        <h2 className="table-title">
          Catálogo de Palabras Reservadas
        </h2>

        <input
          className="search-box"
          placeholder="Buscar..."
        />

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

        </tbody>

      </table>

    </div>

  );

}

export default Palabras;