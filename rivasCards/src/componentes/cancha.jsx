import { useRef, useState } from "react";

function Cancha (){
    const cancha = useRef(null);
    const [posiciones, setPosiciones] = useState([]);
    const jugadores = [
        { id: 1, nombre: "Jugador 1" },
        { id: 2, nombre: "Jugador 2" },
        { id: 3, nombre: "Jugador 3" },
        { id: 4, nombre: "Jugador 4" },
        { id: 5, nombre: "Jugador 5" },
        { id: 6, nombre: "Jugador 6" },
        { id: 7, nombre: "Jugador 7" },
        { id: 8, nombre: "Jugador 8" },
        { id: 9, nombre: "Jugador 9" },
        { id: 10, nombre: "Jugador 10" },
        { id: 11, nombre: "Jugador 11" },
    ];
    const posicionesFijas = [
        { jugadorId: 1, x: 40, y: 20 },
        { jugadorId: 2, x: 120, y: 20 },
        { jugadorId: 3, x: 200, y: 20 },
        { jugadorId: 4, x: 280, y: 20 },
        { jugadorId: 5, x: 40, y: 80 },
        { jugadorId: 6, x: 120, y: 80 },
        { jugadorId: 7, x: 200, y: 80 },
        { jugadorId: 8, x: 280, y: 80 },
        { jugadorId: 9, x: 40, y: 140 },
        { jugadorId: 10, x: 120, y: 140 },
        { jugadorId: 11, x: 200, y: 140 },
    ];
    const onDragStart = (e, jugadorId) => {
        e.dataTransfer.setData("jugadorId", jugadorId);
    }
    const dragOver = (e) => {
        e.preventDefault();
        console.log("dragOver");
    }
    const drop = (e) => {
        e.preventDefault();
        console.log("drop");
        const jugadorId = parseInt(e.dataTransfer.getData("jugadorId"));
        const rect = cancha.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setPosiciones(
            (prev) => 
            [...prev, 
                { jugadorId, x, y }
            ]
        );

        
    }
    return (
        <div>
            <div>
                {jugadores.map(j => 
                        (
                            <div 
                                key={j.id}
                                draggable
                                onDragStart={
                                    (e) => onDragStart(e, j.id)
                                }
                            >
                                {j.nombre}
                            </div>
                        )
                    )
                }
            </div>
            <div
                ref = {cancha}
                onDragOver = {dragOver}
                onDrop = {drop}
            >
                {[...Array(11)].map((_, index) => (
                    <div
                        key={index}
                        style={{
                        border: "1px solid black",
                        width: "80px",
                        height: "40px",
                        display: "inline-block"
                        }}
                    >
                    {posiciones.map((p, i) =>
                        (Math.abs(p.x - (i % 4) * 80) < 40 &&
                        Math.abs(p.y - Math.floor(i / 4) * 40) < 20)
                        ? jugadores.find(j => j.id === p.jugadorId)?.nombre
                        : null
                    )} 
                    </div>
                ))}
                <pre>
                    {JSON.stringify(posiciones, null, 2)}
                </pre>
            </div>
        </div>
    );
}
export default Cancha;