import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Portal from "./pages/Portal";
import Alumno from "./pages/alumno/Alumno";
import Maestro from "./pages/maestro/Maestro";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Portal />} />

        <Route path="/iniciar" element={<Alumno />} />

        <Route path="/config" element={<Maestro />} />

      </Routes>

    </BrowserRouter>

  );

}

export default App;