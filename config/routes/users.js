var express = require('express'),
    router = new express.Router(),
    {index, createUser, destroyUser, updateUser, getLogin, getSignup, showUser} = require('../../controllers/users'),
    {authenticateUser} = require('./routes')



router.route("/")//Our home
  .get(index)

// router.route("/")
//   .post(createUser)

router.route("/:id")
  .get(showUser)
  .patch(updateUser)
  .delete(destroyUser)

router.route('/signup')
  .get(getSignup)
  .post(createUser)


module.exports = router
