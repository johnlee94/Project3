var mongoose = require('mongoose'),
    bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  username: {type: String, required: true, minlength: 5, maxlength: 20},
  email: {type: String, required: true},
  password: {type: String, required: true, minlength: 5, maxlength: 20},
  address: String,
  city: String,
  state: {type: String, required: true, minlength: 2, maxlength: 2},
  zip: {type: Number, required: true, min: 5, max: 5},
  county: String,
  party: String,
  created_at: {type: Date, default: Date.now}
})

var User = mongoose.model('User', userSchema)

// User.methods.encrypt = function(password){
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

module.exports = User

//test
