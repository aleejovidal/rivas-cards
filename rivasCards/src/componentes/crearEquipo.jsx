import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function CrearEquipo() {
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate ();
  const enviar = async (e) => {
    e.preventDefault();
    const usuario_ID = localStorage.getItem("usuario_ID");
    const resp = await fetch("http://localhost:8080/api/equipos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        usuario_id: usuario_ID,
      }),
    });
    const data = await resp.json();
    console.log(data);
    const nombreEquipo = data.nombre;
    const idEquipo = data.id;
    localStorage.setItem ("nombreEquipo", nombreEquipo);
    localStorage.setItem ("idEquipo", idEquipo);
    navigate ('/equipos')
    
  };

  return (
    <form onSubmit={enviar}>
      <input
        required
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button type="submit">Crear equipo</button>
    </form>
  );
}
export default CrearEquipo;
