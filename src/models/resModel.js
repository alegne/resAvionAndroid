const dbConn = require('../../config/dbConfig');

let Reservation = function(reservation, avion, voyageur){
    this.frais = reservation.frais;
    this.dateDepart = reservation.dateDepart;
    this.idAvion = avion.id;
    this.idVoyageur = voyageur.id;
    this.created_at = new Date();
    this.update_at = new Date();
};




//function pour get all reservation
Reservation.getAllReservation = function(results){
    dbConn.query("SELECT reservation.id, frais, dateDepart, idVoyageur, idAvion, numAvion, design, depart, arrivee, nom, cin, numPhone FROM reservation LEFT JOIN avion ON reservation.idAvion = avion.id LEFT JOIN voyageur ON reservation.idVoyageur = voyageur.id", function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la table reservation");
            results(null, error);
        } else {
            results(null, res);
        }
    });
};





//function pour get one reservation
Reservation.getIdReservation = function(id, result){
    dbConn.query('SELECT reservation.id, frais, dateDepart, idVoyageur, idAvion, numAvion, design, depart, arrivee, nom, cin, numPhone FROM reservation LEFT JOIN avion ON reservation.idAvion = avion.id LEFT JOIN voyageur ON reservation.idVoyageur = voyageur.id WHERE reservation.id = ?', [id], function(error, res){
        if (error) {
            console.log("Erreur lors de la requete get sur la table reservation par son id");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};





//function pour store one reservation
Reservation.addReservation = function(reqReservation, result){
    dbConn.query('INSERT INTO reservation SET ?', reqReservation, function(error, res){
        if(error){
            console.log("Erreur lors d'ajout d'un reservation");
            result(null, error);
        } else{
            result(null, res);
        }
    });
};





//function pour update reservation
Reservation.upReservation = function(id, reqReservation, result){
    dbConn.query('UPDATE reservation SET ? WHERE id = ?', [reqReservation, id], function(error, res){
        if (error) {
            console.log("Erreru lors de la mise a jour d'un reservation");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};





//function pour delete one reservation
Reservation.delReservation = function(id, result){
    dbConn.query('DELETE FROM reservation WHERE id = ?', [id], function(error, res){
        if (error) {
            console.log("Erruer lors de la suppression d'un reservation");
            result(null, error);
        } else {
            result(null, res);
        }
    });
};


module.exports = Reservation;
