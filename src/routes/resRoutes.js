const express = require('express');
const resController = require('../controllers/resController');

const router = express.Router();

//get all reservation
router.get('/', resController.getReservationList);

//get one reservation
router.get('/:id', resController.getReservationId);

//store one reservation
router.post('/', resController.storeReservation);

//update one reservation
router.put('/:id', resController.updateVoyageur);

//delete on reservation
router.delete('/:id', resController.deleteReservation);

module.exports = router;