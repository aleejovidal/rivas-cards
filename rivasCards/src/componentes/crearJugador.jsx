import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function CrearJugador() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [posicion, setPosicion] = useState("");
  const [gambeta, setGambeta] = useState("");
  const [velocidad, setVelocidad] = useState("");
  const [resistencia, setResistencia] = useState("");
  const [fuerza, setFuerza] = useState("");
  const navigate = useNavigate ();
  const enviar = async (e) => {
    e.preventDefault();
    const usuario_ID = localStorage.getItem("usuario_ID");
    const resp = await fetch("http://localhost:8080/api/jugadores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        posicion: posicion,
        gambeta: gambeta,
        velocidad: velocidad,
        resistencia: resistencia,
        fuerza: fuerza,
        usuario_id: usuario_ID,
      }),
    });
    const data = await resp.json();
    console.log(data);
    navigate ('/mostrarusuarios')
  };

  return (
    <form onSubmit={enviar}>
      <input
        required
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />
      <input
        required
        placeholder="Apellido"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />
      <input
        required
        placeholder="posicion"
        value={posicion}
        onChange={(e) => setPosicion(e.target.value)}
      />

      <input
        required
        placeholder="gambeta"
        value={gambeta}
        onChange={(e) => setGambeta(e.target.value)}
      />

      <input
        required
        placeholder="velocidad"
        value={velocidad}
        onChange={(e) => setVelocidad(e.target.value)}
      />
      <input
        required
        placeholder="resistencia"
        value={resistencia}
        onChange={(e) => setResistencia(e.target.value)}
      />
      <input
        required
        placeholder="fuerza"
        value={fuerza}
        onChange={(e) => setFuerza(e.target.value)}
      />

      <button type="submit">Crear usuario</button>
    </form>
  );
}
export default CrearJugador;
