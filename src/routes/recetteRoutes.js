const express = require('express')
const recetteController = require('../controllers/recetteController')

const router = express.Router()

//get recette group by Years
router.get('/byyears', recetteController.getRecetteByYears)

//get recette group by month
router.post('/bymonth', recetteController.getRecetteByMonth)

router.get('/list', recetteController.getAllRecette)

module.exports = router