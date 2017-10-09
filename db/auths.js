const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/Chat', 
  {useMongoClient: true}
);

const bcrypt = require('bcrypt-nodejs');

const AuthScheme = new Schema({
  salt: String,
  hash: String,
});

const Auth = mongoose.model('Auth', AuthScheme);



module.exports = Auth;

