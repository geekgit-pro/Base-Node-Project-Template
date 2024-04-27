const express = require('express');
const router = express.Router();

const { InfoController } = require('../../controllers');

const airplaneRoutes = require('./airplane-routes');


router.get('/info', InfoController.info);

console.log("inside v1 routes");

router.use('/airplanes', airplaneRoutes);


module.exports = router;