const dbConfig = require("../db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  }
);


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// MODELOS
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.jugadores = require("./jugadores.model.js")(sequelize, Sequelize);
db.equipos = require("./equipos.model.js")(sequelize, Sequelize);

// RELACIONES
// Usuario - Jugadores
db.usuario.hasMany(db.jugadores, {
  foreignKey: "usuario_id",
  as: "jugadores" });
db.jugadores.belongsTo(db.usuario, {
  foreignKey: "usuario_id",
  as: "usuario",
});
// Usuario - Equipos
db.usuario.hasMany(db.equipos, {
  foreignKey: "usuario_id",
  as: "equipos" });
db.equipos.belongsTo(db.usuario, {
  foreignKey: "usuario_id",
  as: "usuario",
});

module.exports = db;
