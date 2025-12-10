import { useEffect, useState } from "react";
import jugadoresServices from "../services/jugadores.services";
import {useNavigate, useParams} from 'react-router-dom';
import equiposServices from "../services/equipos.services";

function DragDrop() {
const nombreEquipo = localStorage.getItem('nombreEquipo');
const {equipoId} = useParams();
const usuarioId= localStorage.getItem('usuario_ID')
const navigate = useNavigate();
    const [jugadores, setJugadores] = useState([]);
    useEffect (() => 
        {
            setPosiciones({})
            jugadoresServices.getByUsuarioId(usuarioId)
            .then (response => {
                console.log("jugadores", response.data)
                    setJugadores (response.data);
                    
                    equiposServices.get(equipoId)
                    .then(responseEquipo => {
                        console.log("equipo", responseEquipo.data)
                        const equipo = responseEquipo.data
                        if (equipo.posiciones){
                            const posicionesbd = typeof equipo.posiciones === "string"
                            ? JSON.parse(equipo.posiciones)
                            : equipo.posiciones;
                            console.log ("posiciones:", equipo.posiciones);
                            setPosiciones(posicionesbd)
                        }
                        else{
                            console.log ("posiciones base")
                            const posicionesIniciales = {};
                            response.data.forEach ((jugador, index) => {
                                posicionesIniciales[jugador.id] = 
                                { 
                                    x: 50 + index * 100,
                                    y: 50
                                };
                            });
                            console.log ("posiciones base:", posicionesIniciales);
                            setPosiciones (posicionesIniciales);
                        }
                    })
                    .catch (error => 
                        console.error (error)
                    );
                })
            .catch (error => 
                console.error (error)
            );
        }, [equipoId, usuarioId]
    );
    const [posiciones, setPosiciones] = useState({});
  const [draggingId, setDraggingId] = useState(null);
    const [puestos, setPuestos] = useState
    (
        [
            {id: 1, x: 100, y: 300},
            {id: 2, x: 100, y: 600},
            {id: 3, x: 100, y: 900}
        ]
    )
    const [puestoOcupado, setPuestoOcupado] = useState (null);
  const arrastreObj = (id) => {
    setDraggingId(id);
  };

  const soltarObj = () => {
    if (draggingId === null) return;
    setPosiciones (prev => 
        {
            const posicionActual = prev[draggingId];
            let puestoCercano = null;
            let distanciaMinima = Infinity;
            for (const p of puestos) {
                const d = Math.hypot 
                (
                    posicionActual.x - p.x, 
                    posicionActual.y - p.y
                );
                if (d < distanciaMinima) {
                    distanciaMinima = d;
                    puestoCercano = p;
                }
            }
            if (distanciaMinima < 100) {
                if (puestoOcupado === null) {
                    return {
                        ...prev,
                        [draggingId]: { x: puestoCercano.x, y: puestoCercano.y }
                    };
                }
                console.log ("Puesto ocupado");
                return prev;
            }
            return prev;
        });
        setDraggingId (null);
  };

  const moverObj = (e) => {
    if (draggingId === null) return;

    setPosiciones((prev) => ({
      ...prev,
      [draggingId]: {
        x: e.clientX,
        y: e.clientY
      }
    }));
  };
  const guardarAlineacion = async () => 
  {
    console.log ("Guardando alineacion para el equipo:", {equipoId}, nombreEquipo, "del usuario:", usuarioId);
    const alineacionJSON =
    {
        [equipoId]: posiciones,
    };
    const resp = await fetch ("http://localhost:8080/api/equipos/guardar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        id: parseInt(equipoId),
        posiciones: posiciones,
      }),
    });
    const data = await resp.json();
    console.log(data);
    console.log ("Alineacion a guardar:", alineacionJSON);
  }

  return (
    <div
      onMouseMove={moverObj}
      onMouseUp={soltarObj}
      style={{ width: "100vw", height: "100vh" }}
    >
        <button onClick={guardarAlineacion}> guardar </button>
    <div>
        <ul>
            {jugadores.map((jugador) => {
            const p = posiciones[jugador.id];
            if (!p) return null;
            return (
            <div
                key={jugador.id}
                onMouseDown={() => arrastreObj(jugador.id)}
                style={{
                width: 60,
                height: 60,
                backgroundColor: "transparent",
                border: "1px solid black",
                borderRadius: 10,
                position: "absolute",
                left: posiciones[jugador.id].x,
                top: posiciones[jugador.id].y
                }}
            >
                <li>{jugador.nombre} {jugador.apellido}</li>
            </div>
            );
        })}
        </ul>
        <ul>
           {puestos.map(
            (p) => 
                (
                    <div
                        key={p.id}
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: "transparent",
                            position: "absolute",
                            left: p.x,
                            top: p.y,
                            border: "2px solid black",
                            borderRadius: 8,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "black"
                        }}
                    />
                )
            )} 
        </ul>
      </div>
      <div>
                link para ver usuarios:
                <button className="botonNavBar" onClick={() => navigate('/mostrarusuarios')}> ver usuarios </button>
            </div>
    </div>
  );
}

export default DragDrop;
