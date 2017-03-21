var express = require('express'),
    router = new express.Router(),
    {index, createRep, showRep, updateRep, destroyRep} = require('../../controllers/reps')



router.route("/")//Our home
  .get(index)

router.route("/")
  .post(createRep)

router.route("/:id")
  .get(showRep)
  .patch(updateRep)
  .delete(destroyRep)


module.exports = router
