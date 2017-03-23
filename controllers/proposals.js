var Proposal = require('../models/proposal'),
    passport = require('passport'),
    mongoose = require('mongoose')
    // flash = require('connect-flash')

// function home(req, res) {
//   // if current user, show current user
// }

// function newUser (req, res) {
//   res.render('users/new')
// }
function index(req, res) {
  Proposal.find({})
    .populate('rep')
    .populate('votes')
    .exec(function(err, proposals) {
    if (err) throw err
    res.render('proposals/index.ejs', {proposals: proposals})
  })
}

function newProposal(req, res) {
  res.render('proposals/new.ejs')
}

function createProposal(req, res) {
    var newProposal = new Proposal(req.body)
    newProposal.rep = req.user
    newProposal.save(function(err, savedProposal) {
      if (err) throw err
      // index()
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

//


function createYayVote(req, res) {
  var proposalId = req.body.proposalId
  var userId = req.body.userId

  // db.collection('proposals').findById({id: proposalId)}, function(err, proposal){
  //   proposal.votes.insert({
  //     user: userId,
  //     yay: true,
  //     nay: false
  //   })
  // })

  Proposal.findById(id, function(err, proposal) {
    if (err) throw err

  })
  .populate('votes')
  .exec(function(err, proposal) {
    proposal.votes.insert({
      user: userId,
      yay: true,
      nay: false
    })
  })
}

function createNayVote(req, res) {
  var proposalId = req.body.proposalId
  var userId = req.body.userId

  db.collection('proposals').findById({id: proposalId}, function(err, proposal){
    proposal.votes.insert({
      user: userId,
      yay: false,
      nay: true
    })
  })
}




// function yayVoteCount(req, res) {
//   var
//   if yay === true
//   array.push
// }


module.exports = {
  index: index,
  newProposal: newProposal,
  createProposal: createProposal,
  showProposal: showProposal,
  createYayVote: createYayVote,
  createNayVote: createNayVote
}
