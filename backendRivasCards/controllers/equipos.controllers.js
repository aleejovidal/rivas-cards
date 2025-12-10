const db = require("../models");
const equipos = db.equipos;
exports.buscarTodos = (req, res) => {
  equipos.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.buscarUno = (req, res) => {
  const id = req.params.id;

  equipos.findByPk(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
    
};
exports.crear = (req, res) => {
    equipos.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};
exports.guardarAlineacion = (req, res) =>
{
  console.log ("datos recibidos:", req.body)
  const equipoId = req.body.id;
  const posiciones = req.body.posiciones;

  equipos.update (
      {posiciones: posiciones},
      {where:
        {
          id: equipoId
        }
      }
  )
  .then(data => res.send(data))
  .catch(err => res.status(500).send({message: err.message}));
}
exports.buscarAlineacion = (req, res) =>
{
  const id = req.params.usuario_id;
  equipos.findAll(
    {where:
       {usuario_id:id}
    }
  )
  .then(data=>res.send(data))
  .catch(err=>res.status(500).send({messagge: err.message}));
}