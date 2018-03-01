const Sequelize = require('sequelize');
const sequelize = require('../database');
const InteractiveMap = require('./interactivemap');

const User = sequelize.define('user', {
    name: {
        type: Sequelize.STRING
    },
    avatar: {
        type: Sequelize.STRING
    },
    facebookID: {
        type: Sequelize.STRING
    },
    isNewRecord: {
        type: Sequelize.BOOLEAN
    }
});

User.hasOne(InteractiveMap);

module.exports = User;