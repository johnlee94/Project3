var User = require('../models/user'),
    passport = require('passport')
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
  res.render('users/authentication/signup.ejs', {message: req.flash('signupMessage')})
}

function createUser(req, res) {
    // var id = req.params.id

    var signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/users',
        failureRedirect: '/users/signup',
        failureFlash: true
    })
    return signupStrategy(req, res)
}

function getLogin(req, res) {
    res.render('users/authentication/login.ejs', {
        message: req.flash('loginMessage')
    });
}

function postLogin(req, res) {
    var loginProperty = passport.authenticate('local-login', {
        successRedirect: '/users',
        failureRedirect: '/users/login',
        failureFlash: true
    });

    return loginProperty(req, res);
}

function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

function showUser(req, res) {
  var id = req.params.id
  user = User.findById(id, function(err, user){
    if (err) throw err
    res.json(user)
  });
}

function editUser(req, res) {
  var id = req.params.id
  User.findById({_id: id}, function(err, user) {
    if (err) throw err
    res.render('./users/edit',
    {
      message: req.flash('#'),
      user: user
    })
  })
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
  editUser: editUser,
  updateUser: updateUser,
  destroyUser: destroyUser,
  getSignup: getSignup,
  getLogin: getLogin,
  postLogin: postLogin
}
