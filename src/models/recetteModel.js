const dbConn = require('../../config/dbConfig')

exports.getRecetteYears = function(idAvion, results){
    dbConn.query('SELECT YEAR(dateDepart) as Année, SUM(frais) as Recette FROM reservation WHERE idAvion = ? GROUP BY YEAR(dateDepart)', [idAvion], function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la recette par année")
            results(null, error)
        } else {
            results(null, res)
        }
    })
}

exports.getRecetteMonth = function(idAvion, annee, results){
    dbConn.query('SELECT MONTH(dateDepart) as Mois, SUM(frais) as Recette FROM reservation WHERE idAvion = ? AND YEAR(dateDepart) = ? GROUP BY MONTH(dateDepart)', [idAvion, annee], function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la recette par mois")
            results(null, error)
        } else {
            results(null, res)
        }
    })
}

exports.getRecette = function(results){
    dbConn.query('SELECT avion.numAvion as avion, SUM(reservation.frais) as recette FROM reservation INNER JOIN avion WHERE reservation.idAvion=avion.id GROUP BY avion.numAvion', function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la recette par mois")
            results(null, error)
        } else {
            results(null, res)
        }
    })
}