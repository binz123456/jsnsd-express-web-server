'use strict'

const express = require('express')


const route1 = require("./routes/hello")
const route2 = require("./routes/index")
const route3 = require("./routes/hey")
const createError = require("http-errors")

//we instantiate express object
const app = express()


// register the routes

app.use("/" , route1)
app.use("/hello" , route2)
app.use("/hey" , route3)



//app.use method passes a function very similiar to createserver method
//passes function is executed for every request

//there is third paraameter - next
//multiple functioms can be regostered in app.use method
// error- first call back function ---- next
//when passed function task is executed then next will pass control to subsequent function registerred via app.use
//processed based on order
// this not possible in createserver method


//when next is not called then none of registered functions are called for that request
//this is middleware pattern

//express servers are configured using middleware functions
app.use((req,res,next) => {
    if(req.method !== 'GET'){
        next(createError(403))
        return
    }
    //createError genertaes appropriate error message for any status code
    //
    next(createError(404))
})

//err - it is the object of http-errors module
//
// this is the erro handling middleware
//err object is passed
//using this object we can log errors 
//err.message
app.use((err , req, res, next ) => {
    res.status(err.status || 500)

    //using res.send method , object passed will be serialized to JSON
   //response content type is set to application/json
   //res.send  and res.status exist on;y in express module , not in http module

   
    res.send(err.message)
})






//export the object app as a module
//it is  ecxported from app.js
module.exports = app