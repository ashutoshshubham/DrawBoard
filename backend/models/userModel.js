// const mongoose = require('../connection');

const {Schema, model} = require('../connection');     //import connection.js file
// importing schema and model from mongoose framework


const mySchema = new Schema({
    email : String,
    username : String,
    password : String,
    age : Number
})


module.exports = model('users', mySchema);                           //users is name of Collection






