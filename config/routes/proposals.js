var express = require('express'),
    router = new express.Router(),
    {index, createProposal, showProposal, newProposal} = require('../../controllers/proposals')

//still need to make a logout rep and users logout

router.route("/")
  .get(index)

router.route("/new")
  .get(newProposal)
  .post(createProposal)

router.route("/:id")
  .get(showProposal)


module.exports = router
