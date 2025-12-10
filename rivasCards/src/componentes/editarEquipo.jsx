import { useEffect, useState } from "react";
import equiposServices from "../services/equipos.services";
function EditarEquipo() {
  const [nombre, setNombre] = useState("");
  const [equipo, setEquipo] = useState([]);
  const navigate = useNavigate ();
  useEffect(() => {
    equiposServices.get(id)
    .then(response =>
        setEquipo(response.data)
    )
    .catch(error =>
        console.error(error)
    );
  } , []);
  return (
    <div className="editarEquipo">
        <div className="datosEquipo">
            <h1>nombre: {equipo.nombre}</h1>
        </div>
    </div>
  )
}
export default EditarEquipo;