 module.exports = (sequelize, Sequelize) => {
  return sequelize.define("jugadores", 
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
            apellido: {
                type: Sequelize.TEXT,
                    allowNull: false
                },
            posicion: {
                type: Sequelize.TEXT,
                    allowNull: false,
            },
            gambeta: {
                type: Sequelize.INTEGER,
                    allowNull: false
            },
            velocidad: {
                type: Sequelize.INTEGER,
                    allowNull: false
            },
            resistencia: {
                type: Sequelize.INTEGER,
                    allowNull: false
            },
            fuerza: {
                type: Sequelize.INTEGER,
                    allowNull: false
            }
    },
    { 
            timestamps: false
    }
    );
};
