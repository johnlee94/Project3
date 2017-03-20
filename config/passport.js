var LocalStrategy = require(passport-local).Strategy;
var User = require('../../../models/users');

module.exports = function(passport) {
  passport.use('local-signup', new LocalStrategy({
    emailField: 'email',
    passwordField: 'password',
    passReqToCallback: true
  }, function (req, email, password, done) {
    process.nextTick(function() {
      // Find the user with email
      User.findOne({'local.email' : email}, function(err, user) {
        if (err) return callback(err);

        //If there already is a user with this email
        if (user) {
          return callback(null, false, req.flash('signupmessage', 'This email is already used.'))
        } else {

          var newUser = new User();
          newUser.local.email = email;
          newUser.local.password = newUser.encrypt(password);

          newUser.save(function(err))
        }





      })
    })
  }));
}
