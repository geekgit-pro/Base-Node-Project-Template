const dotenv = require('dotenv'); // requrire('dotenv') returns an obj
dotenv.config(); //call config() on the returned obj i.e (process.env) & the env vars are loaded in this obj

module.exports = {
    PORT : process.env.PORT  //in the process global there is env property 
}                            //simply import this config file wherever you want & dotenv.config() call will load the 
                             //env vars into process.env obj returned from the dotenv.config() call
                             