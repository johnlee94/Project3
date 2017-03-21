var LocalStrategy = require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;

var User = require('../models/user'),
    Rep = require('../models/rep')

module.exports = function(passport) {

    passport.serializeUser(function (user, done) {
      done(null, user.id)
    })

    passport.deserializeUser(function (id, done) {
      User.findById(id, function(err, user) {
        if (user) return done(err, user)

        Rep.findById(id, function(err, rep) {
          if (rep) {return done(err, rep) }
          else {return done(false)}
        })
      })
    })

    // passport.serializeUser(function(user, done) {
    //     User.findOne({
    //         local.email: user.local.email
    //     }, function(err, user) {
    //         if (user) {
    //             // user is student
    //             done(null, user.id);
    //         } else {
    //             Rep.findOne({
    //                 local.email: rep.local.email
    //             }, function(err, rep) {
    //                 if (rep) {
    //                     // user is teacher
    //                     done(null, rep.id);
    //                 }
    //             });
    //         }
    //     })
    // });
    //
    // passport.deserializeUser(function(user, done) {
    //     User.findOne({
    //         local.email: user.email
    //     }, function(err, user) {
    //         if (user) {
    //             // user is user
    //             callback(err, user)
    //         } else {
    //             Rep.findOne({
    //                 local.email: user.email
    //             }, function(err, rep) {
    //                 if (rep) {
    //                     // user is rep
    //                     callback(err, rep)
    //                 }
    //             });
    //         }
    //     })
    // });

    // passport.deserializeUser(function(id, callback) {
    //   User.findById(id, function(err, user) {
    //     callback(err, user)
    //   })
    // })



    // sign up for user
    passport.use('local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback) {
        process.nextTick(function() {
            // Find the user with email
            User.findOne({
                'local.email': email
            }, function(err, user) {
                if (err) return callback(err);

                //If there already is a user with this email
                if (user) {
                    return callback(null, false, req.flash('signupmessage', 'This email is already used.'))
                } else {

                    var newUser = new User(req.body);
                    newUser.local.email = email;
                    newUser.local.password = newUser.encrypt(password);


                    newUser.save(function(err) {
                        if (err) throw err;
                        return callback(null, newUser)
                    })
                }
            })
        })
    }));

    //sign up for rep
    passport.use('rep-local-signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback) {
        process.nextTick(function() {
            // Find the user with email
            Rep.findOne({
                'local.email': email
            }, function(err, rep) {
                if (err) return callback(err);

                //If there already is a rep with this email
                if (rep) {
                    return callback(null, false, req.flash('signupmessage', 'This email is already used.'))
                } else {

                    var newRep = new Rep(req.body);
                    newRep.local.email = email;
                    newRep.local.password = newRep.encrypt(password);


                    newRep.save(function(err) {
                        if (err) throw err;
                        return callback(null, newRep)
                    })
                }
            })
        })
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback) {

        // Search for a user with this email
        User.findOne({
            'local.email': email
        }, function(err, user) {
            if (err) return callback(err);

            // If no user is found
            if (!user) return callback(null, false, req.flash('loginMessage', 'No user found.'));

            // Wrong password
            if (!user.validPassword(password)) return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

            return callback(null, user);
        });
    }));

    passport.use('local-rep-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, callback) {

        // Search for a rep with this email
        Rep.findOne({
            'local.email': email
        }, function(err, rep) {
            if (err) return callback(err);

            // If no rep is found
            if (!rep) return callback(null, false, req.flash('loginMessage', 'No rep found.'));

            // Wrong password
            if (!rep.validPassword(password)) return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

            return callback(null, rep);
        });
    }));

}
