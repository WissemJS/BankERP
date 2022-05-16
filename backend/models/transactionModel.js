const mongoose = require('mongoose')

const transactionSchema = mongoose.Schema(
  {
    senderID : {
      type: String,
      required: [true, 'Please add a sender id'],
    },
    receiverID  : {
      type : String,
      required: [true, 'Please add a receiver id'],
    },
    amount  : {
        type : Number,
        required: [true, 'Please add amount to transact '],
    },
    date : {
        type : Date ,
        default : Date.now ,
    }
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Transaction', transactionSchema)