const Sequelize = require('sequelize');
const User = require('./user');
const InteractiveMap = require('./interactivemap');
const sequelize = require('../database')

User.sync({force:true})
    .then(() => {
        InteractiveMap.sync({force:true})
            .then(() => InteractiveMap.create({
                userName: 'Default User',
                userId: 1,
                uniqueMap: true
            }))
            .then(newMap => {
                console.log(newMap.toJSON());
            });
        User.create({
            name: 'Default User',
            avatar: null,
            facebookID: '1',
            isNewRecord: true
        }).then(firstUser => {
            console.log(firstUser.toJSON());
        })
});

