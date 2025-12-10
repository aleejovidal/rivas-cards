module.exports = app => {
    const equipos = require("../controllers/equipos.controllers.js");
  const router = require("express").Router();

  router.get("/", equipos.buscarTodos);
  router.get("/:id", equipos.buscarUno);
  router.post("/", equipos.crear);
  router.put("/", equipos.buscarTodos);
  router.post("/guardar", equipos.guardarAlineacion);
  router.get('/usuario/:usuario_id', equipos.buscarAlineacion);

  app.use("/api/equipos", router);
};

