const { AirplaneRepository } = require('../repositories');

const airplaneRepository = new AirplaneRepository(); //made instance of AirplaneRepository

async function createAirplane(data) {  //made a createAirplane function
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        throw error;
    }
}

module.exports = {
    createAirplane
}

//We made the instance of AirplaneRepository since in AirplaneRepository there is cons() being called with 
// model Airplane so when we make an instance of this class the cons() executes and the AirplaneRepositoy  
// have the access to CRUD functions since it inherits the CrudRepository so all the CRUD functions can be executed
// through this. For eg: here we are running create function which is a CRUD function. If we see the code of CrudRepository
// we find this create function there. So by making instance of AirplaneRepositroy we have executed a create funtion or say
// made a create query of airplane.