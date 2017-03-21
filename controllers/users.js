var User = require('../models/user'),
    passport = require('passport'),
    newUserView = require('../config/passport')
    // flash = require('connect-flash')

// function home(req, res) {
//   // if current user, show current user
// }

// function newUser (req, res) {
//   res.render('users/new')
// }
function index(req, res) {
    res.render('users/index')
}

// GET /signup
function getSignup(req, res) {
  res.render('users/authentication/signup', {message: req.flash('signupMessage')})
}

function createUser(req, res) {
    var signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/users/' + req._id,
        failureRedirect: '/users/signup',
        failureFlash: true
    })
    return signupStrategy(req, res)
}

function getLogin(request, response) {
    response.render('authentication/login.ejs', {
        message: request.flash('loginMessage')
    });
}

function postLogin(request, response) {
    var loginProperty = passport.authenticate('local-login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    });

    return loginProperty(request, response);
}

function getLogout(request, response) {
  request.logout();
  response.redirect('/');
}

function showUser(req, res) {
  var id = req.params.id
  user = User.findById(id, function(err, user){
    if (err) throw err
    res.json(user)
  });
}

function updateUser(req, res) {
    var id = req.params.id

    user = User.findById(id, function(err, user) {
        if (err || !user) throw err
        //need to actually update inputs (based on form ejs)
        user.save(function(err, updatedUser) {
            if (err) throw err

            res.json(updatedUser)
        })
    })
}

function destroyUser(req, res) {
    var id = req.params.id

    User.remove({
        _id: id
    }, function(err) {
        if (err) throw err
        res.json({
            message: 'User successfuly deleted!'
        })
    })
}


module.exports = {
  index: index,
  createUser: createUser,
  showUser: showUser,
  updateUser: updateUser,
  destroyUser: destroyUser,
  getSignup: getSignup
}
