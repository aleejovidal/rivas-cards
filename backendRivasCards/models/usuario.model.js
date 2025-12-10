 module.exports = (sequelize, Sequelize) => {
  return sequelize.define("usuario", 
        {
            id:{
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            usuario: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true
            },
            nombre: {
                type: Sequelize.TEXT,
                allowNull: false
                },
            apellido: {
                type: Sequelize.TEXT,
                    allowNull: false
                },
            email: {
                type: Sequelize.TEXT,
                    allowNull: false,
            },
            contrasena: {
                type: Sequelize.STRING,
                    allowNull: false
            }  
    },
    { 
            timestamps: false
    }
    );
};
