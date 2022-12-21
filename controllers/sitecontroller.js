let BDDC = require("./BDDController");
let Reservation = require("../models/reservation");
let voyageur = require("../models/voyageur");

exports.home = function(req,res){
    req.session.destroy();
    res.render('home.ejs',{hello:"hello"});
}

exports.postReservationEtape1 = function(req,res){
    //nbrseat
    //destination
    //assurance
    //{"destination":"ello","nbseat":"2","assurance":"on"}
    //if(req.body.pseudo != null && req.body.pseudo !="")
    if(req.body.nbseat != null && req.body.destination != null && req.body.destination != "" && req.body.nbseat != ""){
        let nbrseat = parseInt(req.body.nbseat);
        let assurance = false;
        if(req.body.assurance != null && req.body.assurance == "on"){
            assurance = true;
        }
        var reservation = new Reservation(req.body.destination,nbrseat,assurance);
        req.session.reservation = reservation;
        //console.log(req.session.reservation);
        res.render("person.ejs",{"reservation" : reservation});
    }
    else{
        res.render('home.ejs');
    }
}
exports.postReservationEtape2 = function(req,res){
    let listvoy = [];
    for(let i = 0;i<req.session.reservation.nbrseat;i++){
        //	{"name0":"mi","age0":"22","name1":"lore","age1":"12"}
        var nameint = "name"+i;
        var ageint = "age"+i;
        listvoy.push(new voyageur(req.body[nameint], parseInt(req.body[ageint])));
    }
    req.session.reservation.listVoyageur = listvoy;
    console.log(req.session.reservation);
    res.render("validation.ejs",{"reservation" : req.session.reservation});
}
exports.confirm = function(req,res){
    //BDD pas le temps
    res.render("confirmation.ejs");
}