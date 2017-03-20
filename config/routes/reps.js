var express = require('express'),
    router = new express.Router(),
    {index, createRep, destroyRep, updateRep} = require('../../controllers/reps')



router.route("/")//Our home
  .get(index)

router.route("/reps")
  .post(createRep)

router.route("/reps/:id")
  .patch(updateRep)
  .delete(destroyRep)


module.exports = router
