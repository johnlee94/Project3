var express = require('express'),
    router = new express.Router(),
    {index, createUser, destroyUser, updateUser, getLogin, getSignup} = require('../../controllers/users'),
    {authenticateUser} = require('./routes')



router.route("/")//Our home
  .get(index)

// router.route("/")
//   .post(createUser)

router.route("/:id")
  .patch(updateUser)
  .delete(destroyUser)

router.route('/signup')
  .get(getSignup)
  .post(createUser)


module.exports = router
