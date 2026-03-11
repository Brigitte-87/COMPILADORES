import React from "react";

function Delimitadores() {

  return (

    <div className="table-wrapper">

      <div className="table-header">

        <h2 className="table-title">
          Catálogo de Delimitadores
        </h2>

        <input
          className="search-box"
          placeholder="Buscar..."
        />

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

        </tbody>

      </table>

    </div>

  );

}

export default Delimitadores;