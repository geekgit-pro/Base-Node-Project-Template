//const { response } = require("express");

const { Logger } = require('../config');

class CrudRepositroy {
    constructor(model) {
        this.model = model;
    }


    async create(data) {   // data is object which will creae an instance of model 
        
        console.log("inside repo");
        // try {               // it is like Insert query which will have attribut & values as k-v pair in obj
        //     const response = await this.model.create(data);
        //     return response;
        // } catch(error) {
        //     Logger.error("Something went wrong in Crud Repo : create");
        //     throw error;
        // }

        const response = await this.model.create(data);
        return response;
    }

    async destroy(data) {  // similiar to delete query; 
        try {
            const response = await this.model.destroy({  // 'destroy () takes an obj as arg ; where' condition is passed in an obj 
                where: {
                    id : data    //deletes the instance for which where is applied
                }
            }) ;
            return response;
        } catch(error) {
            Logger.error("Something went wrong in Crud Repo : destroy");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data); // findByPk is a query finder which returns a single instance
            return response;
        } catch(error) {
            Logger.error("Something went wrong in Crud Repo : get");
            throw error;
        }
    }

    async getAll(data) {
        try {
            const response = await this.model.findAll(data); // akin to select all query; returns an array 
            return response;
        } catch(error) {
            Logger.error("Something went wrong in Crud Repo : getAll");
            throw error;
        }
    }

    async update(id,data) { //data is obj/instance/entry with which we will updat
        try {
            const response = await this.model.update(data, { 
                where: {
                    id : id
                }
            }); 
            return response;
        } catch(error) {
            Logger.error("Something went wrong in Crud Repo : update");
            throw error;
        }
    }
}

module.exports = CrudRepositroy;
