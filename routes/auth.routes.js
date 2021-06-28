const { Router } = require('express');
const { check } = require('express-validator');
const { login, reValidarToken } = require('../controllers/authControllers');
const {validarJwt} = require('../middleware/validar-jwt');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();

router.post('/login', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'la contraseña es obligatoria').not().isEmpty(),
    validarCampos
] ,login);


router.get('/renew',validarJwt ,reValidarToken);


module.exports=router;