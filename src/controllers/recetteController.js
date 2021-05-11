const Joi = require("joi");
const Avion = require("../models/avionModel");
const Recette = require("../models/recetteModel");

const schemaYears = Joi.object({
    numAvion: Joi.string().max(10).regex(/^[0-9]+av|AV$/).required(),
})

const schemaMonth = Joi.object({
    numAvion: Joi.string().max(10).regex(/^[0-9]+av|AV$/).required(),
    annee: Joi.string().regex(/\d{3}/).required(),
    //annee: Joi.string().max(4).min(4).regex(/^[1-9]{4}$/).required(),
})

exports.getRecetteByYears = async function(req, res){
    const result = schemaYears.validate(req.query);
    if (result.error) {
        res.sendStatus(422).json({
            message: 'Données entrées non valide',
            data: req.body,
        });
    } else {
        let avion = await Avion.getNumAvion(req.query.numAvion);

        Recette.getRecetteYears(avion[0].id, function(error, recette){
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.json(recette);
            }
        })
    }
}





exports.getRecetteByMonth = async function(req, res){
    const result = schemaMonth.validate(req.body);
    if (result.error) {
        res.sendStatus(422).json({
            message: 'Données entrées non valide',
            data: req.body,
        });
    } else {
        let avion = await Avion.getNumAvion(req.body.numAvion);

        Recette.getRecetteMonth(avion[0].id, req.body.annee, function(error, recette){
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.json(recette);
            }
        })
    }
}

exports.getAllRecette = async function(req, res){
        Recette.getRecette(function(error, recette){
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.json(recette);
            }
        });
}