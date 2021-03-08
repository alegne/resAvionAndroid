const express = require('express');
const voyageurController = require('../controllers/voyageurController');

const router = express.Router();

//get all voyageurs
router.get('/', voyageurController.getVoyageurList);

//get one voyageur
router.get('/:id', voyageurController.getVoyageurId);

//store one voyageur
router.post('/', voyageurController.storeVoyageur);

//update one voyageur
router.put('/:id', voyageurController.updateVoyageur);

//delete one voyageur
router.delete('/:id', voyageurController.deleteVoyageur);

module.exports = router;