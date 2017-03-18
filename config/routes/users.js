var express = require('express'),
    router = new express.Router(),
    {index, CreateUser, destroyUser, updateUser} = require('../controllers/users')



router.route("/")//Our home
  .get(index)

router.route("/users")
  .post(createUser)

router.route("/users/:id")
  .patch(updateUser)
  .delete(destroyUser)


module.exports = router
