const Sequelize = require('sequelize');
const sequelize = require('../database');
const User = require('./user');

const InteractiveMap = sequelize.define('interactivemap', {
    userName: {
        type: Sequelize.STRING,
    },
    uniqueMap: {
        type: Sequelize.BOOLEAN,
    },
    userId: {
        type: Sequelize.INTEGER
    },
});

module.exports = InteractiveMap; 