const {Router} = require('express');
const { check } = require('express-validator');
const { getUsuarios, crearUsuarios } = require('../controllers/usuarioControllers');
const { validarCampos } = require('../middleware/validar-campos');


const router =  Router();

router.get('/', getUsuarios);

//Crear usuario
router.post('/',[
    check('nombre', 'Nombre es obligatorio').not().isEmpty(),
    check('password', 'La contraseña debe tener mas de 5 digitos').isLength({min: 6}),
    validarCampos
] ,crearUsuarios);




module.exports= router;