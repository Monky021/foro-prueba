const {Model, DataTypes} = require('sequelize');
const db= require('../database/configDB');

class Usuario extends Model {}

Usuario.init({
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize: db, 
    modelName: 'usuario'
});

module.exports= Usuario;

// const Usuario = db.define('Usuario',{
//     nombre:{
//         type: DataTypes.STRING
//     },
//     idreguntas: {
//         type: DataTypes.INTEGER,
        
//     }

// }) 

// module.exports=Usuario;
