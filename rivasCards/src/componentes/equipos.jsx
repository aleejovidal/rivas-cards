import React, { useEffect, useState } from 'react';
import equiposServices from '../services/equipos.services.js';
import { useNavigate } from 'react-router-dom';
function Equipos() {
    const [equiposGuardado, setEquiposGuardado] = useState([]);
    const idUsuario = localStorage.getItem("usuario_ID");
    const nombreUsuario = localStorage.getItem("usuario_Nombre");
    const apellidoUsuario = localStorage.getItem("usuario_Apellido");
    const navigate = useNavigate ();
    useEffect(() => {
        equiposServices.getByUsuario(idUsuario)
        .then(response=>
            {
                console.log ('datos del equipo:', response.data)
                setEquiposGuardado(response.data);
            }

        )
        .catch(err=>
            {console.error(err);}
        )
    }, []);
    const cargarEquipo = (id) =>
    {
        navigate(`/dragdrop/${id}`)
    }
    return (
    <div>
        <div>Equipos:
        <ul>
            {equiposGuardado.map((equipo) => (
            <div
                key={equipo.id}
                onClick={()=>cargarEquipo(equipo.id)}
                style={
                    {
                        marginLeft: 100
                    }
                }
            >
                <li>{equipo.nombre} {equipo.apellido}</li>
            </div>
            ))}
        </ul>
        </div>
        <div>
            <div>
                hola usuario: {nombreUsuario} {apellidoUsuario} tu ID es: {idUsuario}
            </div>
            <div>
                link para crear equipo:
                <button className="botonNavBar" onClick={() => navigate('/crearequipo')}> crear equipo </button>
            </div>
            <div>
                link para crear jugador:
                <button className="botonNavBar" onClick={() => navigate('/crearjugador')}> crear jugador </button>
            </div>
            <div>
                link para ver usuarios:
                <button className="botonNavBar" onClick={() => navigate('/mostrarusuarios')}> ver usuarios </button>
            </div>
            <div>
                link drag & drop:
                <button className='botonNavBar' onClick={() => navigate(`/dragdrop/${id}`)}>drag drop</button>
            </div>
        </div>

    </div>

    );
}
export default Equipos;