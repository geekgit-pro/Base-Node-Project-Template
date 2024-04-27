const StatusCodes = require('http-status-codes');
const { AirplaneRepository } = require('../repositories');
const AppError = require('../utils/errors/app-error');

const airplaneRepository = new AirplaneRepository(); //made instance of AirplaneRepository

async function createAirplane(data) {  //made a createAirplane function
    try {
        console.log("inside service");
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch(error) {
        //console.log("git error", error);
    //     if(error.name == 'SequelizeValidationError') { //'TypeError
    //        //throw new AppError('Cannot create a new airplne', StatusCodes.INTERNAL_SERVER_ERROR)
    //         let explaination = [];
    //         error.errors.forEach((err) => {
    //             explaination.push(err.message);
    //         });
    //         throw new AppError('Cannot create a new airplne', StatusCodes.BAD_REQUEST);
    //     }
    //     throw new AppError('Cannot create a new airplne', StatusCodes.INTERNAL_SERVER_ERROR);
    // }
            if(error.name == 'SequelizeValidationError') {
                let explaination = [];
                //console.log("error object",error)
                error.errors.forEach((err) => {
                    explaination.push(err.message);
                });
                //console.log("here should be Validation max on capacity failed", explaination);
                //throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR);
                throw new AppError(explaination,StatusCodes.BAD_REQUEST);
            }
            throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR); 
}

}

module.exports = {
    createAirplane
};

//We made the instance of AirplaneRepository since in AirplaneRepository there is cons() being called with 
// model Airplane so when we make an instance of this class the cons() executes and the AirplaneRepositoy  
// have the access to CRUD functions since it inherits the CrudRepository so all the CRUD functions can be executed
// through this. For eg: here we are running create function which is a CRUD function. If we see the code of CrudRepository
// we find this create function there. So by making instance of AirplaneRepositroy we have executed a create funtion or say
// made a create query of airplane.