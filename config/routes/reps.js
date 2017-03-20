var express = require('express'),
    router = new express.Router(),
    {index, createRep, destroyRep, updateRep, showRep} = require('../../controllers/reps')



router.route("/")//Our home
  .get(index)

router.route("/")
  .post(createRep)

router.route("/:id")
  // .show()
  .patch(updateRep)
  .delete(destroyRep)


module.exports = router
