This is a base NodeJs Project Template set up with keeping in mind the important conventions
and recommended practices of folder structure of project setup. It can be easily use to set up
a NodeJS project. You are free to change and tinker with this setup.


`src` -> Inside this folder all the actual code resides; this folder further contains different
         folders which deal with different funcitonalities. There isn't a Tests folder inside, but
         you can add Tests if you like.


Let's dive into the `src` folder.

- `config` -> In this folder, we set up config files of our project. This includes the configuration
              or set up of a module/library etc. For eg: Setting up `dotenv` so that we can use the
              environment variable anywhere in our project, which is done in `server-config.js` file.


- `routes` -> In this we register routes and the corresponding midddlewares & controllers to it.


- `midddlewares` -> This is used to write middlewares which intercept the incoming requests & enable us
                    to write authenticators, validators etc.


- `controllers` -> Used to write controllers which are in kind of final middlewares which receive incoming
                   requests & transfers to business layer. Business layer then executes the business logic;
                   returns output; controllers structure the API response object & output response is sent.


- `repositories` -> This folder facilitates the logic to interact with the Database. The raw queries or ORM 
                    queries are in this folder.


- `services` -> This is used to contain the business logic and it interacts with the `repositories` to get
                data from the database.


- `utils` -> It contains helper methods, error classes, other single utilities etc.
                
                    

                   