const mongoose = require('mongoose');

const userSchema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
 
const User = new userSchema({
 username: String,
 password: String,

});

let user = mongoose.model('User', userSchema);

module.exports = user;
