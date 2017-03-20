var express = require('express'),
    router = new express.Router(),
    {index, createUser, destroyUser, updateUser} = require('../../controllers/users')



router.route("/")//Our home
  .get(index)

router.route("/")
  .post(createUser)

router.route("/:id")
  .patch(updateUser)
  .delete(destroyUser)


module.exports = router
