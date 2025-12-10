const db = require("../models");
const usuarios = db.usuario;
const jugadores = db.jugadores;
const equipos = db.equipos;
exports.buscarTodos = (req, res) => {
  usuarios.findAll({
    include:
    [
      {
      model: jugadores,
      as: "jugadores",
      attributes: ["id", "nombre","apellido"]
      },
      {
      model: equipos,
      as: "equipos",
      attributes: ["id", "nombre", "usuario_id"]
      }
    ]

  })
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.buscarUno = (req, res) => {
  const id = req.params.id;

  usuarios.findByPk(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
    
};
exports.crear = (req, res) => {
    usuarios.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};