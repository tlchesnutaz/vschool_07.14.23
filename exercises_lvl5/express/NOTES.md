# Server side programming in Node with Express
    # node - V8 js engine

    # node module
        * a module is a file, so a node file 
    
    # require - a function, equivalent to import

    # module.exports - equivalent to export

# Intro to Express (look through their documentation)
    # a js node module package

    # initialize a new node project by typing
        * npm init -y 
            this creates a package.json file that acts as a ‘manifest’- will do this for every node project you start
            will probably want to go in and change the name of "main": "index.js" to whatever you want the project to be called - just make sure it's the same as what you actually name the main js file
        
        * npm install express (and any other dependencies)

    # nodemon
        * npm install -g nodemon (-g indicates it is installed globally on computer, so only have to do this once on this comp)

    # UUID - creates unique ID's 
        * npm install uuid (not global, install within each server created)
    
    # morgan - error logging - logs requests to the console
        * npm install morgan (not global, only install within each project)
        * within the server file 
            - const morgan = require('morgan')
            - app.use(morgan('dev')) 

    # express router - enables us to modularize our routes in express

# Vocabulary
    # route 
        * an event listener for http requests

    # endpoint
        * "/item" "/user" 

    # port 
        * localhost:9000/
            - use anything between 3000 - 9000 (cra runs on 3000)

# Intro to REST API architechture 
    # REST - Representational State Transfer (SOAP is another)

    # resource - single item (object) in a database (/user)

    # collection - collection of similar items in a db (/users)

    # URL Base (root) URL - http://amazon.com/

    # API (URL) Endpoint - http://amazon.com/movies/idkentrgbv

    # URL Parameters - /movies/:movieId - starts with a ":"

    # URL Query (query string) - /movies?genre=action&year=1999
        * used to filter results - starts with a "?" - multiple queries seperated by "&"

    # client - front-end

    # server - intermediary

    # request method - CRUD - GET POST PUT DELETE

    # request body - req.body 

# Middleware - function that fires on the inbetween
    # what is it
        * app.use()
            1. (optional) - Mount Path (endpoint)
            2. Callback function - receives the request, response objects, also the 'next' function

    # the "next" function
        * moves on to the next middleware in line on our server
        
    # all middleware must end with a next() or res.send()

    # example
        app.use("/items", (req, res, next) => {
            console.log("The item's middleware was executed")
            next()
        })

        app.use("/items", (req, res, next) => {
            req.body = { name: "Rick" }
            next()
        })

        app.get("/items", (req, res, next) => {
            console.log("get request received")
            res.send(req.body)
        })

# Example from lesson info on route parameters:
# in file fruitRoutes.js - 
const express = require("express");
const fruitRouter = express.Router();

fruitRouter.route("/")
    .get((req, res) => {
        res.send("GET on /fruit endpoint");
    })
    .post((req, res) => {
        res.send("POST on /fruit endpoint");
    });

fruitRouter.route("/:fruitId")
    .get((req, res) => {
        res.send(`GET on /fruit/${req.params.fruitId} endpoint`);
    })
    .put((req, res) => {
        res.send(`PUT on /fruit/${req.params.fruitId} endpoint`);
    })
    .delete((req, res) => {
        res.send(`DELETE on /fruit/${req.params.fruitId} endpoint`);
    });

// export the entire router so we can require() it in server.js
module.exports = fruitRouter;

# in file server.js -
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// You can skip a step by requiring the modules inline like so.
// It works to do the require on its own line as well, it's up to you.
app.use("/fruit", require("./routes/fruitRoutes"));
app.use("/vegetable", require("./routes/vegetableRoutes"));

// Run the server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
_______________________________________________________________

# Connecting Front-end to Back-end
    # Folder Structure
        * by convention call the folder client
        * cd into that folder, then either cra or vite, but make sure to type a space then a . at end so it creates it in the right folder without duplicating/nesting etc.!!!
        
    # Proxy

    # install axios in front end (client)

# VITE
When connecting your backend to your frontend using VITE, you will need to add 
the proxy manually to the vite.config file instead of the package.json like
Create-React-App in the video above. Use the below vite.config file as a 
reference to do this and use /api for all routing. Please do not hesitate to ask 
for help or clarification on this as needed.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});

vite front end -  any request to the backend will begin with “/api”   
(from the vite.config file) see below example
axios.get("/api/chores")

backend request routing using Vite - any request from the front end 
will use the “/api” endpoint for routing - see below example
app.use("/api/chores", require("./routes/choresRouter.js"))

In level 6, the “/api” endpoint is also used for authorization.  
We can change “/api” to “/protected” or whatever we want as the 
endpoint or add an additional “/api”  like this:
app.use("/api/api/chores", require("./routes/choresRouter.js")) or
app.use("/api/protected/chores", require("./routes/choresRouter.js"))
_____________________________________________________________________


# Error Handing
    * add next to Router function and define 

    * app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg: err.message})
      })

    * just above app. listen

    * if(!foundUser){
        const error = new Error(`The item with id ${userId} was not found.`)
        return next(error)
      }

    * .catch(err => console.log(err.response.data.errMsg))

# Status Codes
    # https://http.cat for all codes???

    # 200 - successful request (get req)
    # 201 - successful insert / successful update (post / put)
    # 401 - unauthorized (user authentication)
    # 404 - not found (does not exist)
    # 500 - server error

# Databases
    # one to one (social security number)
    # one to many (user to todo's)
    # many to many (user to product - many users to a product, many products to a user)

    # Relational (strict)
        * SQL, Postgres - organized by/in tables
        * PK - primary key - id - each user has an id
        * FK - foriegn key - each todo will have it's own id, then a fk to relate it to it's user
            - used to connect data between tables


    # Non-Relational
        * MongoDB - organized by models (similar to objects in js)
        * collections = [] = a table (all users)
        * documents = {} = a single row (single user)

        user {
            name: string
            age: number
            _id: random charachters
        }

        todo {
            title: string
            _id: random
            user: object id = user id
        }
# Mongoose (for now install mongoose@6.10.3 or 6.11.2)
    # npm i mongoose (install on 'back-end' per project (not global)) 
    # used with Mongo because it enforces rigidity (bc empty cells = BAD data)
    # purpose is to create models and query data

    # Mongoose Schemas
        * blueprints for our data
        * go to Mongoose docs to see all properties for any given key (name: ) in a schema
        
    # Mongoose Models
        * models have a Name and a Blueprint (Schema)
        * models are used to perform the CRUD operations on data created with that Model
