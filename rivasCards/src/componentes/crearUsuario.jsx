import { useState } from "react";
import {useNavigate} from 'react-router-dom';
function CrearUsuario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate ();
  const enviar = async (e) => {
    e.preventDefault();

    const resp = await fetch("http://localhost:8080/api/usuario", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        email: email,
        contrasena: contrasena,
      }),
    });
    const data = await resp.json();
    console.log(data);
    const idUsuario = data.id;
    const nombreUsuario = data.nombre;
    const apellidoUsuario = data.apellido;
    localStorage.setItem("usuario_Nombre", nombreUsuario);
    localStorage.setItem("usuario_Apellido", apellidoUsuario);
    localStorage.setItem("usuario_ID", idUsuario);
    navigate ('/mostrarusuarios ')
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
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />

      <input
        required
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        required
        placeholder="Contraseña"
        type="contrasena"
        value={contrasena}
        onChange={(e) => setContrasena(e.target.value)}
      />

      <button type="submit">Crear usuario</button>
    </form>
  );
}
export default CrearUsuario;
