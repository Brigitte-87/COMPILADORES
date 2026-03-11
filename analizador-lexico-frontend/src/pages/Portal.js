import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/portal.css";

function Portal() {

  const navigate = useNavigate();

  return (

    <div className="portal-container">

      <h1 className="portal-title">
        Portal Analizador Léxico
      </h1>

      <div className="portal-cards">

        <div
          className="portal-card alumno"
          onClick={() => navigate("/iniciar")}
        >

          <div className="card-text">
            Iniciar
          </div>

          <div className="card-icon">
            ∑
          </div>

        </div>


        <div
          className="portal-card maestro"
          onClick={() => navigate("/config")}
        >

          <div className="card-text">
            Configuración
          </div>

          <div className="card-icon">
            ⚙
          </div>

        </div>

      </div>

    </div>

  );

}

export default Portal;