var User = require('../models/user')

// function home(req, res) {
//   // if current user, show current user
// }

// function newUser (req, res) {
//   res.render('users/new')
// }
function index(req, res) {
    res.render('users/index')
  }

function createUser (req, res) {
  var user = new User(req.body)

  user.save(function(err, user) {
    if (err) throw err
    res.redirect('/')
  })
}

function showUser(req, res) {
  var id = req.params.id
  user = User.findById(id, function(err, user){
    if (err) throw err
    res.json(user)
  });
}

function updateUser(req, res) {
  var id = req.params.id

  User.findById(id, function(err, user) {
    if (err || !user) throw err
    //need to actually update inputs (based on form ejs)
    user.completed = !user.completed
    user.save(function(err, updatedUser) {
      if (err) throw err

      res.json(updatedUser)
    })
  })
}

function destroyUser (req, res) {
  var id = req.params.id

  User.remove ({_id: id}, function (err) {
    if (err) throw err
    res.json({message: 'User successfuly deleted!'})
  })
}


module.exports = {
  index: index,
  createUser: createUser,
  showUser: showUser,
  updateUser: updateUser,
  destroyUser: destroyUser
}
