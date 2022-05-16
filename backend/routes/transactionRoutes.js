const express = require('express')
const router = express.Router()
const { getTransactions, setTransaction, putTransaction, deleteTransaction} = require('../controllers/transactionController')

router.get('/', getTransactions)
router.post('/', setTransaction)
router.put('/:id', putTransaction)
router.delete('/:id', deleteTransaction)

module.exports = router