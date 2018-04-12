const mongoose = require('mongoose');
const user = require('../model/user');
mongoose.connect('mongodb://localhost/liveCode1');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {
    regisNewUser: function(req, res){
        let username = req.body.username;
        let password = req.body.password;
        
        var salt = bcrypt.genSaltSync(saltRounds);
        var hash = bcrypt.hashSync(password, salt);

        user.create({
            username: username,
            password: hash
        })
        .then(function(){
            res.json({
                message: "success"
            })
        })
        .catch(function(err){
            res.json({
                message: err
            })
        })
    },
    loginUser: function(req, res){
        let username = req.body.username;
        let password = req.body.password;

        if(password == '' || username == ''){
            res.json({
                message: 'must fill username or password'
            })
        }else{
            user.findOne({
                username: username
            })
            .then(function(userData){
                if(!bcrypt.compareSync(password, userData.password)){
                    res.json({
                        message: "username or password is wrong"
                    })
                }else{
                    var token = jwt.sign({ username: username }, process.env.SECRET);
                    res.status(200).json({
                        message: "Success login",
                        token: token
                    })
                }
            })
            .catch(function(err){
                res.status(500).json({
                    message: err
                })
            })
            
        }
    },
}