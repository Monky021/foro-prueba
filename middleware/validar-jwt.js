const {response, request} = require('express');
const jwt = require('jsonwebtoken');

const validarJwt = (req= request, res= response, next) => {
    //obtener el token mediante el header
    const token = req.header('x-token');
    
    if(!token){
        return res.status(400).json({
            msg:'No hay token en la peticion'
        })
    }

    try {
        const {uid, nombre} = jwt.verify(
            token,
            process.env.SECRETKEY
        );

        req.uid=uid;
        req.nombre=nombre;


    } catch (error) {
        console.log(error);
        return res.status(401).json({
            msg:'Token novalido'
        })
    }
    
    next();

}


module.exports={
    validarJwt
}