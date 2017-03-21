var Rep = require('../models/rep'),
    passport = require('passport')

function index(req, res) {
    res.render('reps/index')
  }

function createRep (req, res) {
  var rep = new Rep(req.body)

  rep.save(function(err, rep) {
    if (err) throw err
    res.redirect('/')
  })
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
  destroyRep: destroyRep
}


//Test
