import React, { useEffect, useState } from 'react';
import UsuarioService from '../services/usuario.services.js';
import { useNavigate } from 'react-router-dom';
function Usuario() {
    const [usuarios, setUsuarios] = useState([]);
    const idUsuario = localStorage.getItem("usuario_ID");
    const nombreUsuario = localStorage.getItem("usuario_Nombre");
    const apellidoUsuario = localStorage.getItem("usuario_Apellido");
    const navigate = useNavigate ();
    useEffect(() => {
        UsuarioService.getAll()
        .then(response =>
            setUsuarios(response.data)
        )
        .catch(error =>
            console.error(error)
        );
    }, []);
    console.log("usuarios", usuarios);
    return (
    <div>
        
        <div>Usuarios:
            
        <ul>
            {usuarios.map(u => (
                <li key={u.id}>
                    <ul>
                        <strong>datos usuario</strong>
                        <li>{u.nombre}</li>
                        <li>{u.usuario}</li>
                        <li>{u.email}</li>
                    </ul>
                    <br />
                    <ul>
                    <strong>Jugadores creados por el usuario:</strong>
                    {u.jugadores.map(j => (
                        <li key={j.id}>
                            {j.nombre} {j.apellido}
                        </li>
                    ))}
                    </ul>
                    <ul>
                    <strong>Equipos creados por el usuario:</strong>
                    {u.equipos.map(e => (
                        <li key={e.id}>
                            {e.nombre} - {e.categoria}
                        </li>
                    ))}
                    </ul>
                    <br />
                </li>
            ))}
        </ul>
        </div>
        <div>
            <div>
                hola usuario: {nombreUsuario} {apellidoUsuario} tu ID es: {idUsuario}
            </div>
            <div>
                link para crear jugadores
                <button className="botonNavBar" onClick={() => navigate('/crearjugador')}> crear jugador </button>
                link para crear equipos
                <button className="botonNavBar" onClick={() => navigate('/crearequipo')}> crear equipo </button>
                link para ver equipos
                <button className="botonNavBar" onClick={() => navigate('/equipos')}> ver equipos </button>
                link para salir
                <button className="botonNavBar" onClick={() => navigate('/')}> salir </button>
                link drag and drop
                <button className="botonNavBar" onClick={() => navigate(`/dragdrop/${idUsuario}`)}> drag and drop </button>
            </div>
        </div>

    </div>

    );
}
export default Usuario;