var User = require('../models/user')

function index(req, res) {
  // if current user, show current user
}

function newUser (req, res) {
  res.render('users/new')
}

function createUser (req, res) {
  var user = new User(req.body)

  user.save(function(err, user) {
    if (err) throw err
    res.redirect('/')
  })
}

function destroyUser (req, res) {
  var id = req.params.id

  User.remove ({_id: id}, function (err) {
    if (err) throw err
    res.json({message: 'User successfuly deleted!'})
  }
}

module.exports = {
  index: index,
  newUser: newUser,
  createUser: createUser,
  destroyUser: destroyUser
}
