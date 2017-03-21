var express = require('express'),
    router = new express.Router(),
    {index, createUser, showUser, updateUser, destroyUser, getLogin, getSignup, editUser, postLogin} = require('../../controllers/users'),
    {authenticateUser} = require('./routes')





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
