import express from 'express';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';

import User from './models/user'
import InteractiveMap from './models/interactivemap'

import {facebook, google} from './config';

const transformFacebookProfile = (profile) => ({
    first_name: profile.first_name,
    avatar: profile.picture.data.url,
    email: profile.email
});

const transformGoogleProfile = (profile) => ({
    first_name: profile.name.givenName,
    avatar: profile.image.url,
    email: profile.emails[0].value
});

passport.use(new FacebookStrategy({
    clientID: facebook.clientID,
    clientSecret: facebook.clientSecret,
    callbackURL: facebook.callbackURL,
    profileFields: facebook.profileFields
  }, (accessToken, refreshToken, profile, done) => {
     console.log(profile._json)
     User.findOrCreate({
         where: {facebookID: profile.id},
         defaults: {
            name: profile._json.name,
            avatar: profile._json.picture.data.url,
            passportStrategy: 'Facebook',
            facebookID: profile._json.id,
            email: profile._json.email,
            isNewRecord: true
         }
     }).then(res => {
         console.log(res)
         InteractiveMap.findOrCreate({
             where: {userId: res[0].dataValues.id},
             defaults: {
                 userName: res[0].dataValues.name,
                 uniqueMap: true,
                 userId: res.id
             }
         })
     })
     return done(null, transformFacebookProfile(profile._json))
  }));

passport.use(new GoogleStrategy({
    clientID: google.clientID,
    clientSecret: google.clientSecret,
    callbackURL: google.callbackURL
}, (accessToken, refreshToken, profile, done) => { 
    console.log(profile._json)
    User.findOrCreate({
        where: {googleID: profile.id},
        defaults: {
            name: profile._json.displayName,
            avatar: profile._json.image.url,
            passportStrategy: 'Google',
            googleID: profile._json.id,
            email: profile._json.emails[0].value,
            isNewRecord: true
        }
    }).then(res => {
        console.log(res)
        InteractiveMap.findOrCreate({
            where: {userId: res[0].dataValues.id},
            defaults: {
                userName: res[0].dataValues.name,
                uniqueMap: true,
                userId: res.id
            }
        })
    })
    return done(null, transformGoogleProfile(profile._json))}
));

// Serialize user into sessions
passport.serializeUser((user, done) => done(null, user));

// Deserialize user from sessions
passport.deserializeUser((user, done) => done(null, user));


// Initialize http server
const app = express()

app.use(passport.initialize());
app.use(passport.session());


// Set up Facebook auth routes
app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

app.get('/auth/facebook/callback', 
    passport.authenticate('facebook', {failureRedirect: '/auth/facebook'}),
    (req, res) => res.redirect('EventScene://login?user=' +JSON.stringify(req.user)));


// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email']}));

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/auth/google'}),
    (req, res) => res.redirect('EventScene://login?user=' + JSON.stringify(req.user)));

// Creates server, listening on port 3000
const server = app.listen(3000, () => {
    const {address, port} = server.address();
    console.log(`Listening at http://${address}:${port}`)
});