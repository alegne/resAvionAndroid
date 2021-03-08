const dbConn = require('../../config/dbConfig');

let Voyageur = function(voyageur) {
    this.nom = voyageur.nom.toUpperCase();
    this.cin = voyageur.cin;
    this.numPhone = voyageur.numPhone;
    this.created_at = new Date();
    this.update_at = new Date();
};





//function pour get all voyageur
Voyageur.getAllVoyageur = function(results) {
    dbConn.query('SELECT * FROM voyageur', function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la table voyageur");
            results(null, error);
        } else {
            results(null, res);
        }
    });
};





//function pour get one voyageur
Voyageur.getIdVoyageur = function(id, result){
    dbConn.query('SELECT * FROM voyageur WHERE id = ?', [id], function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la table voyageur par son id");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};





//function pour store one voyageur
Voyageur.addVoyageur = function(reqVoyageur, result){
    dbConn.query('INSERT INTO voyageur SET ?', reqVoyageur, function(error, res){
        if(error){
            console.log("Erreur lors d'ajout d'un voyageur");
            result(null, error);
        } else{
            result(null, res);
        }
    });
};





//function pour update voyageur
Voyageur.upVoyageur = function(id, reqVoyageur, result){
    dbConn.query('UPDATE voyageur SET ? WHERE id = ?', [reqVoyageur, id], function(error, res){
        if (error) {
            console.log("Erreru lors de la mise a jour d'un voyageur");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};





//function pour delete one voyageur
Voyageur.delVoyageur = function(id, result){
    dbConn.query('DELETE FROM voyageur WHERE id = ?', [id], function(error, res){
        if (error) {
            console.log("Erruer lors de la suppression d'un voyageur");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};


module.exports = Voyageur;