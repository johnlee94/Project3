var Proposal = require('../models/proposal'),
    passport = require('passport')
    // flash = require('connect-flash')

// function home(req, res) {
//   // if current user, show current user
// }

// function newUser (req, res) {
//   res.render('users/new')
// }
function index(req, res) {
  res.render('proposals/index.ejs')
}

function newProposal(req, res) {
  res.render('proposals/new.ejs')
}

function createProposal(req, res) {
    var newProposal = new Proposal(req.body)

    newProposal.save(function(err, savedProposal) {
      if (err) throw err
      res.render('proposals/index')
      //add flash message for successful Proposal Post
    })
  }



function showProposal(req, res) {
  var id = req.params.id
  proposal = Proposal.findById(id, function(err, proposal){
    if (err) throw err
    res.render('proposals/show.ejs')
  });
}



module.exports = {
  index: index,
  newProposal: newProposal,
  createProposal: createProposal,
  showProposal: showProposal
}
