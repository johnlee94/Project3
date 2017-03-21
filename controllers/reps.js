var Rep = require('../models/rep'),
    passport = require('passport')

function index(req, res) {
    res.render('reps/index')
  }

function getSignup(req, res) {
  res.render('reps/authentication/signup.ejs', {message: req.flash('signupMessage')})
}

function createRep (req, res) {
  passport.authenticate('rep-local-signup', function(err, newRep) {
    if (err) {
      throw err
    }
    if (!newRep) {
      res.redirect('/reps/signup')
    }
    req.login(newRep, function(err) {
      if(err) {
        throw err
      }
      res.redirect('/users/' + newRep._id)
    })
  })(req, res)
}

function showRep(req, res) {
  var id = req.params.id
  rep = Rep.findById(id, function(err, rep) {
    if (err) throw err
    res.json(rep)
  })
}

function updateRep(req, res) {
  var id = req.params.id

  Rep.findById(id, function(err, rep) {
    if (err || !rep) throw err
    //need to actually update inputs (based on form ejs)
    rep.save(function(err, updatedRep) {
      if (err) throw err

      res.json(updatedRep)
    })
  })
}

function destroyRep (req, res) {
  var id = req.params.id

  Rep.remove ({_id: id}, function (err) {
    if (err) throw err
    res.json({message: 'Rep successfuly deleted!'})
  })
}
//
// function showRep(req, res) {
//   res.render('/:id')
// }


module.exports = {
  index: index,
  createRep: createRep,
  showRep: showRep,
  updateRep: updateRep,
  getSignup: getSignup,
  destroyRep: destroyRep
}


//Test
