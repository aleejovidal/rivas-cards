 module.exports = (sequelize, Sequelize) => {
  return sequelize.define("equipos", 
        {
            id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            usuario_id: {
                type: Sequelize.INTEGER,
                allowNull: true,
            },
            nombre: {
                type: Sequelize.TEXT,
                allowNull: false
                },
            posiciones: {
                type: Sequelize.JSON,
                    allowNull: true
            }
    },
    { 
            timestamps: false
    }
    );
};
