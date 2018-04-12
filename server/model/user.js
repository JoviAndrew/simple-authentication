//Require Mongoose
var mongoose = require('mongoose');

//Define a schema
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    password: String
});

let user = mongoose.model('user', userSchema);

module.exports = user;
