const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { error } = require('winston');

const { ErrorResponse, SuccessResponse } = require('../utils/common');
//const { response } = require('express');

/**
 * POST req to create airplane : /airplanes
 * req.body : {mdoelNumber: 'airbus 320', capacity: 200}
 * 
 */

async function createAirplane (req,res) {
    try {
        console.log("inside controller");
        
        console.log(req.body);
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        
        SuccessResponse.data = airplane;
        return res
                  .status(StatusCodes.CREATED)
                  .json(SuccessResponse);

    } catch(error) {
        ErrorResponse.error = error;
        return res
                .status(error.statusCode) //StatusCodes.INTERNAL_SERVER_ERROR
                .json(ErrorResponse);
                //console.log(res.body);
        throw error;
    }
}








module.exports = {
    createAirplane
}