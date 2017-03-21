var express = require('express'),
    router = new express.Router(),
    {index, createUser, showUser, updateUser, destroyUser, getLogin, getSignup} = require('../../controllers/users'),
    {authenticateUser} = require('./routes')



router.route("/")//Our home
  .get(index)

// router.route("/")
//   .post(createUser)


router.route('/signup')
  .get(getSignup)
  .post(createUser)

  router.route("/:id")
  .get(showUser)
  .patch(updateUser)
  .delete(destroyUser)

module.exports = router
