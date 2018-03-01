const Sequelize = require('sequelize');
const User = require('./user');
const sequelize = require('../database')

User.sync({force:true})
    .then(() => User.create({
        isNewUser: true,
        facebookID: '1823569550987127'
    }))
    .then(firstUser => {
        console.log(firstUser.toJSON());
    });