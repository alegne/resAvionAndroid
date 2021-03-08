const VoyageurModel = require('../models/voyageurModel');
const Joi = require('joi');

const shema = Joi.object({
    nom: Joi.string(),
    cin: Joi.string().max(15),
    numPhone: Joi.string().max(15),
});

//function pour prendre tout les listes des voyageurs
exports.getVoyageurList = function(req, res){
    VoyageurModel.getAllVoyageur(function(error, voyageurs){
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(voyageurs);
        }
    });
};





//function pour prendre un seul voyageur par son Id
exports.getVoyageurId = function(req, res){
    VoyageurModel.getIdVoyageur(req.params.id, function(error, voyageur){
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(voyageur);
        }
    });
};





//function pour l'enregistrement d'un voyageur
exports.storeVoyageur = function(req, res){
    
    const result = shema.validate(req.body);

    if (result.error) {
        res.sendStatus(422).json({
            message: 'Données entrées non valide',
            data: req.body,
        });
    } else {
        const reqVoyageur = new VoyageurModel(req.body);
        VoyageurModel.addVoyageur(reqVoyageur, function(error, voyageur){
            if (error) {
                console.log(error)
                res.json({status: false, message: "Erreru lors de l'ajour de voyageur", data: voyageur});
            } else {
                res.json({status: true, message: "L'ajout d'un voyageur reussi", data: voyageur});
            }
        });
    }
};




//function pour la mise à jour d'un voyageur
exports.updateVoyageur = function(req, res){
    const result = shema.validate(req.body);
    if (result.error) {
        res.sendStatus(422).json({
            message:'Données entrées non valide',
            data: req.body,
        });
    } else {
        const reqVoyageur = new VoyageurModel(req.body);
        VoyageurModel.upVoyageur(req.params.id, reqVoyageur, function(error, voyageur){
            if (error) {
                console.log(error);
                res.json({status: false, message: "Erreur lors de la mise a jour d'un voyageur"});
            } else {
                res.json({status: true, message: "Mise à jour d'un voyageur avec succes!"});
            }
        });
    }
};





//function pour la suppression d'un voyageur
exports.deleteVoyageur = function(req, res){
    VoyageurModel.delVoyageur(req.params.id, function(error, voyageur){
        if (error) {
            console.log(error);
            res.json({status: false, message: "Erreur lors de la suppression d'un voyageur"});
        } else {
            res.json({status: true, message: "Suppression d'un voyageur reussie!"});
        }
    });
};