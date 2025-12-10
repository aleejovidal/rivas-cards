module.exports = app => {
    const usuario = require("../controllers/usuario.controllers.js");
  const router = require("express").Router();

  router.get("/", usuario.buscarTodos);
  router.get("/:id", usuario.buscarUno);
  router.post("/", usuario.crear);
  router.put("/", usuario.buscarTodos);


  app.use("/api/usuario", router);
};

