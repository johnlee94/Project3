var express = require('express'),
    router = new express.Router(),
    {index, createUser, destroyUser, updateUser} = require('../../controllers/users'),
    {authenticateUser} = require('./routes')



router.route("/")//Our home
  .get(index)

router.route("/users/signup")
  .post(createUser)

router.route("/users/:id")
  .patch(authenticateUser, updateUser) 
  .delete(destroyUser)


module.exports = router
