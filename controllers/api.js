var Proposal = require('../models/proposal'),
    passport = require('passport'),
    mongoose = require('mongoose')


// function index(req, res) {
// }


function showAPI (req, res) {
  Proposal.find({}, function(err, proposals) {
    if (err) throw err
    res.json(proposals)
  })
}

module.exports = {
  // index: index,
  showAPI: showAPI
}
