const dbConn = require('../../config/dbConfig');




let Avion = function(avion){
    this.numAvion = avion.numAvion.toUpperCase();
    this.design = avion.design;
    this.depart = avion.depart.ucFirst();
    this.arrivee = avion.arrivee.ucFirst();
    this.created_at = new Date();
    this.update_at = new Date();
};




//function pour get all avion
Avion.getAllAvion = function(results){
    dbConn.query('SELECT * FROM avion', function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la table avion");
            results(null, error);
        } else {
            results(null, res);
        }
    });
};




//function pour get one avion by its ID
Avion.getIdAvion = function(id, result){
    dbConn.query('SELECT * FROM avion WHERE id = ?', [id], function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la table avion par son id");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};




//function pour store one avion
Avion.addAvion = function(reqAvion, result){
    dbConn.query('INSERT INTO avion SET ?', reqAvion, function(error, res){
        if (error) {
            console.log("Erreur lors de l'ajout d'un avion");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};




//function pour update avion
Avion.upAvion = function(id, reqAvion, result){
    dbConn.query('UPDATE avion SET numAvion= ?, design= ?, depart= ?, arrivee= ? WHERE id= ?', [reqAvion.numAvion, reqAvion.design, reqAvion.depart, reqAvion.arrivee, id], function(error, res){
        if (error) {
            console.log("Erreur lors de la mise a jour d'un avion");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};



//function pour delete one avion
Avion.delAvion = function(id, result){
    dbConn.query('DELETE FROM avion WHERE id= ?', [id], function(error, res){
        if (error) {
            console.log("Erreur lors de la suppression d'un avion");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};

module.exports = Avion;