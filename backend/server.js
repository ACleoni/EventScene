import express from 'express';
import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import GoogleStrategy from 'passport-google-oauth20';

import User from './models/user'
import InteractiveMap from './models/interactivemap'

import {facebook, google} from './config';

const transformFacebookProfile = (profile) => ({
    name: profile.name,
    avatar: profile.picture.data.url,
    first_name: profile.first_name
});

const transformGoogleProfile = (profile) => ({
    name: profile.displayName,
    avatar: profile.image.url
});

passport.use(new FacebookStrategy({
    clientID: facebook.clientID,
    clientSecret: facebook.clientSecret,
    callbackURL: facebook.callbackURL,
    profileFields: facebook.profileFields
  }, (accessToken, refreshToken, profile, done) => {
    //  console.log("This is the picture")
     console.log(profile._json)
     User.findOrCreate({
         where: {facebookID: profile.id},
         defaults: {
            name: profile._json.name,
            avatar: profile._json.picture.data.url,
            facebookID: profile._json.id,
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

passport.use(new GoogleStrategy(google, 
    async (accessToken, refreshToken, profile, done) => 
    done(null, transformGoogleProfile(profile._json))
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
app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback', 
    passport.authenticate('facebook', {failureRedirect: '/auth/facebook'}),
    (req, res) => res.redirect('EventScene://login?user=' +JSON.stringify(req.user)));


// Set up Google auth routes
app.get('/auth/google', passport.authenticate('google', { scope: ['profile']}));

app.get('/auth/google/callback',
    passport.authenticate('google', {failureRedirect: '/auth/google'}),
    (req, res) => res.redirect('EventScene://login?user=' + JSON.stringify(req.user)));

// Creates server, listening on port 3000
const server = app.listen(3000, () => {
    const {address, port} = server.address();
    console.log(`Listening at http://${address}:${port}`)
});