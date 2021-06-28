const { Sequelize } = require('sequelize');


const db = new Sequelize(process.env.DBNOMBRE, process.env.DBUSUARIO, process.env.DBPASSWORD, {
    host: process.env.DBHOST || 'localhost',
    dialect:'postgres',
    dialectOptions:{
        ssl:{
            require: true,
            rejectUnauthorized: false
        }
    }

});
console.log(process.env.DBNOMBRE);

//const db = new Sequelize(process.env.DATABASE_URL);


module.exports= db;