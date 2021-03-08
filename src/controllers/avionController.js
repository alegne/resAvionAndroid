const AvionModel = require('../models/avionModel');
const Joi = require('joi');

//let pattern = '/^[0-9]+[AV | av]$/'

const shema = Joi.object({
    numAvion: Joi.string().max(10).regex(/^[0-9]+av|AV$/),
    design: Joi.string().required(),
    depart: Joi.string(),
    arrivee: Joi.string(),
});




//pour prendre tout les listes d'avion
exports.getAvionList = function(req, res){
    AvionModel.getAllAvion(function(error, avions){
        if (error) {
            console.log(error);
            res.sendStatus(500);
        }else{
            res.json(avions);
        }
    });
};




//pour prendre un avion par son id
exports.getAvionId = function(req, res){
    AvionModel.getIdAvion(req.params.id, function(error, avion){
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            res.json(avion);
        }
    });
};




//pour l'enregistrement d'un avion
exports.storeAvion = function(req, res){
    const result = shema.validate(req.body);
  if (result.error) {
      res.sendStatus(422).json({
          message:'Données entrées non valide',
          data: req.body,
      });
  } else {
      const reqAvion = new AvionModel(req.body);
      AvionModel.addAvion(reqAvion, function(error, avion){
          if (error) {
              console.log(error);
              res.json({status:false, message: 'something went wrong', data: avion});
          } else {
            res.json({status:true, message: 'Ajout d\'avion avec succes', data: avion});
          }
      });
  }
};




//pour la modification d'un avion
exports.updateAvion = function(req, res){
    const result = shema.validate(req.body);

    if (result.error) {
        res.sendStatus(422).json({
            message:'Données entrées non valide',
            data: req.body,
        });
    } else {
  
        const reqAvion = new AvionModel(req.body);
        
        AvionModel.upAvion(req.params.id, reqAvion, function(error, avion){
            if (error) {
                console.log(error);
                res.json({status:false, message: 'something went wrong', data: avion});
            } else {
              res.json({status:true, message: 'mise a jour d\'avion avec succes', data: avion});
            }
        });
    }
};




//pour la suppression d'un avion
exports.deleteAvion = function(req, res){
    AvionModel.delAvion(req.params.id, function(error, avion){
        if (error) {
            console.log(error);
            res.json({status:false, message: 'something went wrong', data: avion});
        } else {
          res.json({status:true, message: 'Suppression avec succes', data: avion});
        }
    });
};