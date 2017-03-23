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
    // var id = new User(req.body)
    //
    //

    passport.authenticate('local-signup', function(err, newUser) {
      if (err) {
        throw err
      }
      if (!newUser) {
        res.redirect('/users/signup')
      }
      req.login(newUser, function(err) {
        if(err) {
          throw err
        }
        res.redirect('/users/' + newUser._id)
      })
    })(req, res)

    // var signupStrategy = passport.authenticate('local-signup', {
    //     successRedirect: '/users/' + newUser._id,
    //     failureRedirect: '/users/signup',
    //     failureFlash: true
    // })
    // return signupStrategy(req, res)
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
    res.render('./users/show', {user: user})
  });
}

function editUser(req, res) {
  var id = req.params.id
  User.findById({_id: id}, function(err, user) {
    if (err) throw err
    res.render('users/edit',
    {
      message: req.flash('#'),
      user: user
    })
  })
}

function updateUser(req, res) {
  var id = req.params.id
  console.log(user)

  User.findById({_id: id}, function(error, user){
    if(error) res.json({message: 'could not find user b/c' + error})

    if(req.body.username) user.username = req.body.username
    if(req.body.email) user.local.email = req.body.email
    // if(req.body.password) user.local.password = req.body.password
    if(req.body.state) user.state = req.body.state
    if(req.body.zip) user.zip = req.body.zip
    if(req.body.party) user.party = req.body.party

    user.save(function(error){
      if(error) res.json({message: 'could not update'})
      res.json({message: 'user successfully updated'})
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

// =====================================
// FACEBOOK ACTIONS=====================
// =====================================
// route for facebook authentication and login

 function getFacebook(request, response) {
   var signupStrategy = passport.authenticate('facebook', {
     scope : 'email'
   });

   return signupStrategy(request, response);
 }

 // handle the callback after facebook has authenticated the user
 function getFacebookCallback(request, response) {
   var loginProperty = passport.authenticate('facebook', {
     successRedirect : '/',
     failureRedirect : '/login'
   });

   return loginProperty(request, response);
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
  postLogin: postLogin,
  getFacebookCallback: getFacebookCallback,
  getFacebook: getFacebook
}
