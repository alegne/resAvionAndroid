const express = require('express')
const recetteController = require('../controllers/recetteController')

const router = express.Router()

//get recette group by Years
router.post('/byyears', recetteController.getRecetteByYears)

//get recette group by month
router.post('/bymonth', recetteController.getRecetteByMonth)

module.exports = router