const { request, response } = require("express");

const Pregunta = require('../models/pregunta');



const getPreguntas = async (req = request, res = response) => {

   const {tematica} = req.query;

   
    try {
        if (!!tematica) {
            const preguntas = await Pregunta.findAll({
                where: {
                    tematicaId:tematica 
                },
                include: ['respuestas', 'tematica']
            });
            
            res.status(200).json({ preguntas });
            
        }else{
            const preguntas = await Pregunta.findAll({
                include: ['respuestas', 'tematica']
            });
            
            res.status(200).json({ preguntas });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        })
    }
}

const getPregunta = async (req = request, res = response) => {

    const { id } = req.params;

    try {
        const pregunta = await Pregunta.findByPk(id);
        if (!pregunta) {
            return res.status(404).json({
                msg: 'Esta pregunta no existe'
            });
        }

        res.status(200).json(pregunta);

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        })
    }
}




const crearPreguntas = async (req = request, res = response) => {



    try {

        const pregunta = new Pregunta(req.body);
        
        await pregunta.save();
        res.json({ pregunta });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        })
    }


}

const actualizarPreguntas = async (req = request, res = response) => {

    const { id } = req.params;
    const { body } = req;
    try {
        //Verificar que la pregunta exista
        const pregunta = await Pregunta.findByPk(id)

        if (!pregunta) {
            return res.status(404).json({
                msg: 'La pregunta no esta en nuestra base de datos'
            })
        }

        await pregunta.update(body);
        res.json(pregunta);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        })
    }
}

const eliminarPreguntas = async(req = request, res = response) => {

    try {
        
        const { id } = req.params;
        const pregunta = await Pregunta.findByPk(id);
        
        if (!pregunta) {
            return res.status(404).json({
                msg: 'La pregunta no existe'
            })
        }
        await pregunta.destroy();
        return res.status(200).json({
            
            msg: 'Pregunta eliminada sactisfactoriamente'
        });


    } catch (error) {
        res.status(500).json({
            msg: 'Contacte al administrador'
        })
    }
}


module.exports = {
    getPreguntas,
    getPregunta,
    crearPreguntas,
    actualizarPreguntas,
    eliminarPreguntas
}