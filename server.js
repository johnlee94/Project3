var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    passport = require('passport'),
    flash = require('connect-flash'),
    ejsLayouts = require('express-ejs-layouts'),
    session = require('express-session'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    bcrypt = require('bcrypt'),
    debug = require('debug'),
     routes = require('./config/routes/routes'),
     userRoutes = require('./config/routes/users'),
     repRoutes = require('./config/routes/reps'),
     proposalRoutes = require('./config/routes/proposals')



    // userRoutes = require('./config/routes/users'),
    // repRoutes = require('./config/routes/reps'),
    // proposalRoutes = require('./config/routes/proposals'),
    methodOverride = require('method-override')


require('dotenv').config()
    // mongoose = require('mongoose') //path to DB?
var app = express()
//engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.locals.title = "Virtual Town Hall"
  var  mongoose = require('./config/database')
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

//For Local Auth
app.use(session({ secret: 'Virtual-Town-Hall' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use(methodOverride('_method'))

require('./config/passport')(passport);
app.use(function (req, res, next){
  global.user = req.user
  next()
})

//root route add later!!
app.get('/', function(req, res) {
  res.render('home');
})

// var home = require('./config/routes/home')
// app.use('/', home)

//use app.get?
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email'} ));
// app.get('/auth/facebook/callback',
//  passport.authenticate('facebook', {
//    successRedirect: '/proposals',
//    failureRedirect: '/users/signup'
//  })
// );

app.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/')
})


app.use('/auth/facebook', routes)

app.use('/users', userRoutes)

app.use('/reps', repRoutes)

app.use('/proposals', proposalRoutes)


// router.route("/secret")
//   .get(authenticateUser, usersController.secret)
//use this for edit page?



//404 and error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500)
    res.json({
      message: err.message,
      error: err
    })
  })
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: {}
  })
})

var port = process.env.PORT || 3000
app.listen(port, function() {
  console.log('Port ' + 3000 + '🔥')
})
