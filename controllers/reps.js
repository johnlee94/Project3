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
      res.redirect('/reps/' + newRep._id)
    })
  })(req, res)
}

function getLogin(req, res) {
    res.render('reps/authentication/login.ejs', {
        message: req.flash('loginMessage')
    });
}

function postLogin(req, res) {
    var loginProperty = passport.authenticate('local-rep-login', {
        successRedirect: '/proposals',
        failureRedirect: '/reps/login',
        failureFlash: true
    });

    return loginProperty(req, res);
}

function getLogout(req, res) {
  req.logout();
  res.redirect('/');
}

function showRep(req, res) {
  var id = req.params.id
  rep = Rep.findById(id, function(err, rep) {
    if (err) throw err
    res.render('./reps/show', {rep: rep})
  })
}

function editRep(req, res) {
  var id = req.params.id
  Rep.findById({_id: id}, function(err, rep) {
    if (err) throw err
    res.render('./reps/edit',
    {
      message: req.flash('#'),
      rep: rep
    })
  })
}

function updateRep(request, response) {
  var id = request.params.id
  console.log(rep)

  Rep.findById({_id: id}, function(error, rep){
    if(error) response.json({message: 'could not find rep b/c' + error})

    if(request.body.firstname) rep.firstname = request.body.firstname
    if(request.body.lastname) rep.lastname = request.body.lastname
    if(request.body.city) rep.city = request.body.city
    if(request.body.state) rep.state = request.body.state
    if(request.body.zip) rep.zip = request.body.zip
    if(request.body.county) rep.county = request.body.county
    if(request.body.party) rep.party = request.body.party
    if(request.body.district) rep.district = request.body.district

    rep.save(function(error){
      if(error) response.json({message: 'could not update'})
      response.render('reps/show')
    })
  })
}

function destroyRep (req, res) {
  var id = req.params.id

  Rep.remove ({_id: id}, function (err) {
    if (err) throw err
    res.render("home")
  })
}

module.exports = {
  index: index,
  createRep: createRep,
  showRep: showRep,
  editRep: editRep,
  updateRep: updateRep,
  destroyRep: destroyRep,
  getSignup: getSignup,
  getLogin: getLogin,
  postLogin: postLogin,
  getLogout: getLogout
}
