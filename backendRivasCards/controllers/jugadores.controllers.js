const db = require("../models");
const jugadores = db.jugadores;
const usuario = db.usuario;
exports.buscarTodos = (req, res) => {
  jugadores.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.buscarUno = (req, res) => {
  const id = req.params.id;

  jugadores.findByPk(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};
exports.crear = (req, res) => {
    jugadores.create(req.body)
        .then(data => res.send(data))
        .catch(err => res.status(500).send({ message: err.message }));
};
exports.buscarPorUsuario = (req, res) => {
    const usuarioId = req.params.usuarioId;
    jugadores.findAll (
      {where: {usuario_id: usuarioId}}
    )
    .then (data => res.send (data))
    .catch (err => res.status(500).send({ message: err.message }));

};
