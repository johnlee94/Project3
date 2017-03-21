var express = require('express'),
    router = new express.Router(),
    {index, createRep, showRep, updateRep, destroyRep, getSignup} = require('../../controllers/reps')



router.route("/")//Our home
  .get(index)

router.route("/signup")
  .get(getSignup)
  .post(createRep)

router.route("/:id")
  .get(showRep)
  .patch(updateRep)
  .delete(destroyRep)


module.exports = router
