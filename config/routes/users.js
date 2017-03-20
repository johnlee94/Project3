var express = require('express'),
    router = new express.Router(),
    {index, createUser, destroyUser, updateUser, showUser} = require('../../controllers/users')



router.route("/")//Our home
  .get(index)

router.route("/")
  .post(createUser)

router.route("/:id")
  .get(showUser)
  .patch(updateUser)
  .delete(destroyUser)


module.exports = router
