const { StatusCodes } = require('http-status-codes');
const { AirplaneService } = require('../services');
const { error } = require('winston');

/**
 * POST req to create airplane : /airplanes
 * req.body : {mdoelNumber: 'airbus 320', capacity: 200}
 * 
 */

async function createAirplane (req,res) {
    try {
        const airplane = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity
        });
        return res
                  .status(StatusCodes.CREATED)
                  .json({
                      success: true,
                      message: 'Airplane has been created',
                      data: airplane,
                      error: error
                  });

    } catch(error) {
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({
                    success: false,
                    message: 'Something went wrong while creating airplane',
                    data: {},
                    error: error
                });
    }
}




module.exports = {
    createAirplane
}