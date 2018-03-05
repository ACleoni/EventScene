const Sequelize = require('sequelize');
const User = require('./user');
const InteractiveMap = require('./interactivemap');
const sequelize = require('../database')


// Creates a default user
User.sync({force:true})
    .then(() => {
        InteractiveMap.sync({force:true})
            .then(() => InteractiveMap.create({
                userName: 'Default User',
                userId: 1,
                uniqueMap: true
            }))
            .then(firstMap => {
                console.log(firstMap.toJSON());
            });
        User.create({
            name: 'Default User',
            avatar: null,
            passportStrategy: 'Facebook / Google',
            facebookID: '12345',
            googleID: '12345',
            email: 'defaultuser@gmail.com',
            isNewRecord: true
        }).then(firstUser => {
            console.log(firstUser.toJSON());
    })
});