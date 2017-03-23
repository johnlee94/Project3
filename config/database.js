var mongoose = require('mongoose')

var dbUri = process.env.MONGODB_URI ||
            'mongodb://localhost/virtualtownhall'

if (!process.env.MONGODB_URI) {
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST!")
    process.exit(0)
  })
}

mongoose.connect(dbUri)

module.exports = mongoose
