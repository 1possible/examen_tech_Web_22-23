var bdd = require("../bdD");

//not the time
/*
exports.select = function(req,res){
    connectionBDD.query("select id_Formation as id, forma_nom as nom, forma_prix as prix,forma_debut as debut, forma_fin as fin,form_formateur as formateur from formation;",function(error,repSQL){
    if(error){console.log(error);}
    else{
        //console.log(repSQL);
        value["listeDesFormations"] = new FormationList(repSQL);
        //console.log(listeDesFormations);
        value["listPanier"] = cookiePanierList(req);
        BDDC.listFormaInscri(req,res,formationListPage,value);
    }
});
}*/