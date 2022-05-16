const mongoose = require('mongoose')

const accountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add a name'],
    },
    password : {
      type : String,
      required: [true, 'Please add a password'],
    },
    email  : {
        type : String,
        required: [true, 'Please add email'],
    },
    phone  : {
        type : String,
        required: [true, 'Please add phone number'],
    },
    salary : {
        type : Number,
        required: [true, 'Please add salary per month'],
    },
    amount  : {
        type : Number,
        required: [true, 'Please add amount to start the account '],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Account', accountSchema)