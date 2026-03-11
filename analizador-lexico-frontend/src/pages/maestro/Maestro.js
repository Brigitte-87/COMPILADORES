import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/maestro.css";
import Reglas from "./reglas/Reglas";
import Delimitadores from "./delimitadores/Delimitadores";
import Palabras from "./palabras/Palabras";
import Errores from "./errores/Errores";

function Maestro() {

  const [modulo, setModulo] = useState("Reglas");
  const navigate = useNavigate();

  return (

    <div className="maestro-container">

      <div className="sidebar">

        <h2 className="sidebar-title">
          Configuración
        </h2>

        <div className="sidebar-cards">

          <div
            className="sidebar-card"
            onClick={() => setModulo("Reglas")}
          >
            <div className="card-text">Reglas</div>
            <div className="card-icon">📋</div>
          </div>

          <div
            className="sidebar-card"
            onClick={() => setModulo("Delimitadores")}
          >
            <div className="card-text">Delimitadores</div>
            <div className="card-icon">{"</>"}</div>
          </div>

          <div
            className="sidebar-card"
            onClick={() => setModulo("Palabras reservadas")}
          >
            <div className="card-text">Palabras reservadas</div>
            <div className="card-icon">🔑</div>
          </div>

          <div
            className="sidebar-card"
            onClick={() => setModulo("Errores")}
          >
            <div className="card-text">Errores</div>
            <div className="card-icon">🐞</div>
          </div>

          <div
            className="sidebar-card salir"
            onClick={() => navigate("/")}
          >
            <div className="card-text">Salir</div>
            <div className="card-icon">↪</div>
          </div>

        </div>

      </div>


        <div className="contenido">

        {modulo === "Reglas" && <Reglas />}

        {modulo === "Delimitadores" && <Delimitadores />}

        {modulo === "Palabras reservadas" && <Palabras />}

        {modulo === "Errores" && <Errores />}

        </div>

    </div>

  );

}

export default Maestro;