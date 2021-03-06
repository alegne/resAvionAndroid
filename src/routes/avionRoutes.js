const express = require('express');
const avionController = require('../controllers/avionController');

const router = express.Router();

//get all avions
router.get('/', avionController.getAvionList);

//get one avion
router.get('/:id', avionController.getAvionId);

//store one avion
router.post('/', avionController.storeAvion);

//update one avion
router.put('/:id', avionController.updateAvion);

//delete one avion
router.delete('/:id', avionController.deleteAvion);





module.exports = router;