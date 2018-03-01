const Sequelize = require('sequelize');
const sequelize = new Sequelize('EventScene', 'alexandercleoni', '',{

    host: 'localhost',
    dialect: 'postgres'

})

module.exports = sequelize