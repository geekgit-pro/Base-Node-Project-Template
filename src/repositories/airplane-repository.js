const  { Airplane  }  = require('../models');
const CrudRepositroy = require('./crud-repository');

//console.log(Airplane);

class AirplaneRepository extends CrudRepositroy { 
    constructor() {
        super(Airplane); //Crud Repository takes Model as arg & our AirplaneRepostory inherits it to avail the basic CRUD functions in it 
    }                    // so we call the parent constructor & pass Airplane in the moddel's place so that we can run those fun() wrt to Airplane
}                        // we cal also add extra CRUD fun() in this Aiplane class other tha present in CrudRepository class

module.exports = AirplaneRepository;

