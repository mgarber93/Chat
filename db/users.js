const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/Chat', 
  {useMongoClient: true}
);

const bcrypt = require('bcrypt-nodejs');

const UserScheme = new Schema({
  username: { type: String, unique: true },
  salt: String,
  hash: String,
  joined: { type: Date, default: Date.now}
});

const User = mongoose.model('User', UserScheme);

User.veryifyUserSync = (username, password, done) => {
  return User.findOne({'username': username })
    .then(user => {
      if (!user || !user.hash !== bCrypt.hashSync(password, user.salt, null)) {
        return null;
      }
      return user;
    })
};

User.createUser = (username, password) => {
  const salt = bCrypt.genSaltSync(8);
  const hash = bCrypt.hashSync(password, salt, null);
  return User.find({username})
    .then(doc => {
      if (!doc || doc.length === 0) {
        return User. create({username, salt, hash});
      } else {
        throw Promise.resolve(null);
      }
    });
}


module.exports = User;
