var express = require('express'),
    router = new express.Router(),
    {index, createRep, showRep, updateRep, destroyRep, getSignup, getLogin, postLogin, editRep} = require('../../controllers/reps'),
    {authenticateRep} = require('./routes')

//still need to make a logout rep and users logout

router.route("/")//Our home
  .get(index)

router.route("/signup")
  .get(getSignup)
  .post(createRep)

  router.route('/login')
  .get(getLogin)
  .post(postLogin)

  router.route("/:id/edit")
  .get(authenticateRep, editRep)

  router.route("/:id")
  .get(authenticateRep, showRep)
  .patch(authenticateRep, updateRep)
  .delete(authenticateRep, destroyRep)

module.exports = router
