
const Pregunta = require('./pregunta');
const Respuesta = require('./respuesta');
const Tematica = require('./tematica');
const Usuario = require('./usuario');

// uno a muchos, 1 a N
//Usuarios pueden hacer muchas preguntas
//Se añade una clave usuarioid a la tabla pregunta
Usuario.hasMany(Pregunta, {as: 'preguntas', foreignKey:'usuarioId'});

Pregunta.belongsTo(Usuario, {as: 'usuario'});

//Una pregunta tiene muchas respuestas 
Pregunta.hasMany(Respuesta, {as: 'respuestas', foreignKey: 'preguntaId'});
Respuesta.belongsTo(Pregunta,{as: 'pregunta'});


//Una tematica tiene muchas preguntas
Tematica.hasMany(Pregunta);
Pregunta.belongsTo(Tematica);