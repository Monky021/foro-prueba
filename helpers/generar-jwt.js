const jwt = require('jsonwebtoken');


const generarJwk = (uid='', nombre='') => {
    return new Promise((resolve, reject) => {
        const payload = {uid, nombre};
        jwt.sign(payload, process.env.SECRETKEY, {
            expiresIn:'4h'
        }, (err, token) =>{
            if(err){
                console.log(err);
                reject('No se pudo generar Token');
            }else {
                resolve(token);
            }
        })
    })
}


module.exports={
    generarJwk
}