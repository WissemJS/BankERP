const asyncHandler = require('express-async-handler')
const Transaction = require('../models/TransactionModel')

// @desc Get Transactions 
// @route GET /api/transaction 
// @access Private 
const getTransactions = asyncHandler( async (req, res) => {
    const transactions = await Transaction.find()
    res.status(200).json(transactions) 
} )

// @desc Set transaction
// @route POST /api/transaction
// @access Private 
const setTransaction = asyncHandler( async (req, res) => {
    if (!req.body.senderID) {
        res.status(400)
        throw new Error('pleas add sender id')
    }
    const transaction = await Transaction.create({
        senderID: req.body.senderID,
        receiverID : req.body.receiverID,
        amount  : req.body.amount,
        date : req.body.date,
    })
    res.status(200).json(transaction) 
} )

// @desc Update transaction
// @route PUT /api/transaction/:id
// @access Private 
const putTransaction = asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)
  
    if (!transaction) {
      res.status(400)
      throw new Error('transaction not found')
    }

    const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedTransaction)
  })

// @desc delete transaction
// @route DELETE /api/transaction/:id
// @access Private 
const deleteTransaction = asyncHandler(async (req, res) => {
    const transaction = await Transaction.findById(req.params.id)
  
    if (!transaction) {
      res.status(400)
      throw new Error('transaction not found')
    }
    await transaction.remove()
  
    res.status(200).json({ id: req.params.id })
  })

module.exports = {
    getTransactions,
    setTransaction,
    putTransaction, 
    deleteTransaction,
}