var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

var userSchema = new mongoose.Schema({
  username: {type: String, required: true},
  // , minlength: 5, maxlength: 20},

  local: {
    email: {type: String, required: true},
    password: {type: String, required: true}
  },

    // , minlength: 5, maxlength: 20},

  address: String,
  city: String,
  state: {type: String, required: true},

    // , minlength: 2, maxlength: 2},

  zip: {type: Number, required: true},

    // , min: 5, max: 5},

  county: String,
  party: String,
  created_at: {type: Date, default: Date.now}
})


userSchema.methods.encrypt = function(password){
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

var User = mongoose.model('User', userSchema)


module.exports = User
