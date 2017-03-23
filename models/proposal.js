var mongoose = require('mongoose')


var proposalSchema = new mongoose.Schema({
  rep: {type: mongoose.Schema.Types.ObjectId, ref: 'Rep' },
  title: {type: String, required: true},
  content: {type: String, required: true},
  votes: [
    {
      user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
      yay: {type: Boolean, default: false},
      nay: {type:Boolean, default: false}
    }
  ],
  yayVotes: {type: Number, default: 0},
  nayVotes: {type: Number, default: 0},
  created_at: {type: Date, default: Date.now}
})

var Proposal = mongoose.model('Proposal', proposalSchema)


module.exports = Proposal
