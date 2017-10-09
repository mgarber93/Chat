'use strict';
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const {User} = require('../../../db');

passport.serializeUser((profile, done) => {
  done(null, profile._id);
});

passport.deserializeUser((_id, done) => {
  return User.where({ _id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      done(null, profile.serialize());
    })
    .error(error => {
      console.log('Error: ', error);
      done(error, null);
    })
    .catch(() => {
      console.log('failed deserialization no user found');
      done(null, null, { message: 'No user found' });
    });
});

passport.use('local-signup', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
(req, username, password, done) => {
  return User.signup({username, password}, done);
}));

passport.use('local-login', new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true
},
(req, username, password, done) => {
  return User.localLogin({username, password}, done);
}));


module.exports = passport;
