// Dependencias
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// Componentes
import Usuario from './componentes/usuario.jsx';
import CrearUsuario from './componentes/crearUsuario.jsx';
import CrearJugador from './componentes/crearJugador.jsx';
import Equipos from './componentes/equipos.jsx';
import EditarEquipo from './componentes/editarequipo.jsx';
import CrearEquipo from './componentes/crearequipo.jsx';
import Cancha from './componentes/cancha.jsx';
import DragDrop from './componentes/drag.jsx';
function App () {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<CrearUsuario />} />
          <Route path="/crearjugador" element={<CrearJugador />} />
          <Route path="/mostrarusuarios" element={<Usuario />} />
          <Route path="/equipos" element={<Equipos/>} />
          <Route path='/crearequipo' element={<CrearEquipo/>} />
          <Route path='/plantel' element={<EditarEquipo/>} />
          <Route path='/cancha'element= {<Cancha/>}/>
          <Route path='/dragdrop/:equipoId' element={<DragDrop/>}/>
        </Routes>
      </div>
    </Router>
  )
}
export default App;