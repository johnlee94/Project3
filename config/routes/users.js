var express = require('express'),
    router = new express.Router(),
    {index, createUser, showUser, updateUser, destroyUser, getLogin, getSignup, editUser, postLogin} = require('../../controllers/users')
    // {authenticateUser} = require('./routes')

    function authenticateUser(req, res, next) {
        // If the user is authenticated, then we continue the execution
        if (req.isAuthenticated()) return next();

        // Otherwise the request is always redirected to the home page
        res.redirect('/');
      }

router.route("/")//Our home
  .get(index)

// router.route("/")
//   .post(createUser)


router.route('/signup')
  .get(getSignup)
  .post(createUser)

router.route('/login')
  .get(getLogin)
  .post(postLogin)

router.route("/:id/edit")
  .get(authenticateUser, editUser)

  router.route("/:id")
  .get(authenticateUser, showUser)
  .patch(authenticateUser, updateUser)
  .delete(authenticateUser, destroyUser)


module.exports = router
