class reservation{
    constructor(destination, nbrseat,assurance){
        this.destination = destination;
        this.nbrseat = nbrseat;
        this.assurance = assurance;
        this.listVoyageur = [];
    }
}
module.exports = reservation;