var Rep = require('../models/rep')

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

function updateRep(req, res) {
  var id = req.params.id

  Rep.findById(id, function(err, rep) {
    if (err || !user) throw err
    //need to actually update inputs (based on form ejs)
    rep.completed = !rep.completed
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


module.exports = {
  index: index,
  createRep: createRep,
  destroyRep: destroyRep,
  updateRep: updateRep
}
