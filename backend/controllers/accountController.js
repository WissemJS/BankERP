const asyncHandler = require('express-async-handler')
const Account = require('../models/accountModel')

// @desc Get accounts 
// @route GET /api/account 
// @access Private 
const getAccounts = asyncHandler( async (req, res) => {
    const accounts = await Account.find()
    res.status(200).json(accounts) 
} )

// @desc Set account
// @route POST /api/account 
// @access Private 
const setAccount = asyncHandler( async (req, res) => {
    if (!req.body.name) {
        res.status(400)
        throw new Error('pleas add text field')
    }
    const account = await Account.create({
        name: req.body.name,
        password : req.body.password,
        email  : req.body.email,
        phone  : req.body.phone,
        salary : req.body.salary,
        amount : req.body.amount,
    })
    res.status(200).json(account) 
} )

// @desc Update account
// @route PUT /api/account/:id
// @access Private 
const putAccount = asyncHandler(async (req, res) => {
    const account = await Account.findById(req.params.id)
  
    if (!account) {
      res.status(400)
      throw new Error('transaction not found')
    }

    const updatedAccount = await Account.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
  
    res.status(200).json(updatedAccount)
  })

// @desc delete account
// @route DELETE /api/account/:id
// @access Private 
const deleteAccount = asyncHandler(async (req, res) => {
    const account = await Account.findById(req.params.id)
  
    if (!account) {
      res.status(400)
      throw new Error('account not found')
    }
    await account.remove()
  
    res.status(200).json({ id: req.params.id })
  })

module.exports = {
    getAccounts,
    setAccount,
    putAccount, 
    deleteAccount,
}