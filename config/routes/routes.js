var express = require('express'),
    {getFacebook, getFacebookCallback} = require('../../controllers/users')
    router = new express.Router()


function authenticateUser(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();

    // Otherwise the request is always redirected to the home page
    res.redirect('/');
  }

function authenticateRep(req, res, next) {
    // If the user is authenticated, then we continue the execution
    if (req.isAuthenticated()) return next();

    // Otherwise the request is always redirected to the home page
    res.redirect('/');
  }

// router.route("/secret")
//   .get(authenticateUser, usersController.secret)
//use this for edit page?

//=====================================
//FACEBOOK ROUTES =====================
//=====================================
//route for facebook authentication and login
router.route('/')
  .get(getFacebook)

// handle the callback after facebook has authenticated the user
router.route('/callback')
  .get(getFacebookCallback)

//=======END FACEBOOK ROUTES===========

module.exports = router
