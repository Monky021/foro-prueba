const {response, request} = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJwk } = require('../helpers/generar-jwt');


const login = async(req=request, res= response) => {
    const {nombre, password} = req.body;

    try {

        const usuario = await Usuario.findAll({
            where:{nombre},
            include:'preguntas'
        });
        console.log(usuario);
        const [data] = usuario;
        

        //verificar si el usuario existe
        if(!data){
            return res.status(404).json({
                msg:'Correo / contraseña incorrectos'
            });
        }

        const {dataValues} = data;
        const {pregunta} = dataValues;

        //Verificar la contraseña
        const validarPassword = bcrypt.compareSync(password, dataValues.password)

        if(!validarPassword){
            return res.status(404).json({
                msg:'Correo / contraseña incorrectos'
            });
        }

        //generar el JWT
        
        const token = await generarJwk(dataValues.id, dataValues.nombre);

        return res.status(200).json({
            data:{
                dataValues
            },
            token

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'hable con el administrador'

        });
    }
}

const reValidarToken = async(req=request, res= response) => {

    const {uid, nombre} =req;

    //Generar un nuevo jwt y mandarlo al cliente
    const token = await generarJwk(uid, nombre);


    res.status(200).json({
        msg:'revalidar token',
        uid,
        nombre,
        token,
        
    })
}

module.exports={
    login,
    reValidarToken
}