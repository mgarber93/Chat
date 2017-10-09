const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/Chat', 
  {useMongoClient: true}
);

const Auth = require('./auths');

const UserScheme = new Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  joined: { type: Date, default: Date.now},
  auths: [{type: Schema.Types.ObjectId, ref: 'Auth'}]
});

const User = mongoose.model('User', UserScheme);

const USER_EXISTS_MESSAGE = 'A user exists with this username already';
const FAILED_LOCAL_AUTH = 'Incorrect user password combination';

User.veryifyUser = ({username, password}) => {
  return User.findOne({'username': username })
    .populate('auths')
    .exec()
    .then(user => {
      return Promise.all(user.auths.map(a => a.verify(password)));
    })
    .then(arr => {
      if (arr.reduce((acc, e) => acc || e, false)) {
        return user;
      } else {
        throw new Error(FAILED_LOCAL_AUTH);
      }
    })
};

User.createUser = ({username, password}) => {
  return User.find({username})
    .then(doc => {
      if (!doc || doc.length === 0) {
        return Auth.create({password})
      } else {
        throw new Error(USER_EXISTS_MESSAGE);
      }
    })
    .then(auth => {
       return User.create(
         {
           username,
           auths: [auth._id]
          }
        );
    });
};

/**
 * Signup is a callback wrapper for createUser for PassportJS 
 */
User.signup = ({username, password}, done) => {
  User.createUser({username, password})
    .then(user => done(null, JSON.stringify(user)))
    .catch(err => done(err, null));
};

/**
 * LocalLogin is a callback wrapper for verifyUser for PassportJS 
 */
User.localLogin = ({username, password}, done) => {
  User.veryifyUser({username, password}) 
    .then(user => done(null, user))
    .catch(err => done(err, null));
};

module.exports = User;
