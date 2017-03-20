var express = require('express'),
    path = require('path'),
    favicon = require('serve-favicon'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser')
    bcrypt = require('bcrypt'),
    debug = require('debug'),
    app = express(),
    mongoose = require('./config/database'),
    userRoutes = require('./config/routes/users'),
    repRoutes = require('./config/routes/reps')

require('dotenv').config()
    // mongoose = require('mongoose') //path to DB?

//engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.locals.title = "Virtual Town Hall"

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

// app.use('/', )
  // router.route
app.use('/users', userRoutes)
app.use('/reps', repRoutes)


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
  console.log('Port ' + 3000 + ', baby!')
})
