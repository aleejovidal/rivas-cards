module.exports = app => {
    const jugadores = require("../controllers/jugadores.controllers.js");
  const router = require("express").Router();

  router.get("/", jugadores.buscarTodos);
  router.get("/:id", jugadores.buscarUno);
  router.post("/", jugadores.crear);
  router.put("/", jugadores.buscarTodos);
  router.get("/usuario/:usuarioId", jugadores.buscarPorUsuario);

  app.use("/api/jugadores", router);
};

