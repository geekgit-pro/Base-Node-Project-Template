const express = require('express');



const { AirplaneController } = require('../../controllers');
const { AirplaneMiddlewares } = require('../../middlewares');

const router = express.Router();

console.log("inside airplanes routes");


router.post('/',
        AirplaneMiddlewares.validateCreateRequest,
        AirplaneController.createAirplane); // /api/v1/airplanes POST request

module.exports = router;