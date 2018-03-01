const Sequelize = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('user', {
    isNewUser: {
        type: Sequelize.BOOLEAN
    },
    facebookID: {
        type: Sequelize.STRING
    },
    name: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING
    }
})

module.exports = User 