const express = require('express');
const { ServerConfig, Logger } = require('./config');
//const router = express.Router();

const apiRoutes = require('./routes');
const app = express();

app.use('/api', apiRoutes);


app.listen( ServerConfig.PORT, () => {
    console.log(`Successfully started the server at ${ ServerConfig.PORT }`);
    // Logger.info("Successfully started the server", "root", {});
    //Logger.info("Successfully started the server");
})