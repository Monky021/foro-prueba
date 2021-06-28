const { request, response } = require("express");
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario')


const getUsuarios = async(req = request, res= response) =>{


    try {
        const usuario = await Usuario.findAll();

        res.status(200).json({usuario})
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte al administrador'
        })
    }
}
const crearUsuarios = async(req = request, res= response) =>{

    const {nombre, password} = req.body;
    try {
        //Verificar que el usuario no exista
        const usuarioVerificado = await Usuario.findOne({where:{nombre}});

        //Si el usuario existe se refleja un error
        if(usuarioVerificado){
            return res.status(400).json({
                msg:'Este Ninckname no esta disponible'
            })
        }

        //si el usuario no existe se prosede a su creacion en la BD
        const usuario = new Usuario({nombre, password});

        //encriptacion de la contraseña
        const salt = bcrypt.genSaltSync();
        usuario.password = bcrypt.hashSync(password, salt);

        //Guardar la informacion en la BD

        await usuario.save();

        res.status(200).json({usuario});
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg:'Contacte al administrador'
        })
    }
}

module.exports={
    getUsuarios,
    crearUsuarios
}

