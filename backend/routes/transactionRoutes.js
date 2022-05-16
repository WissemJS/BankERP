const express = require('express')
const router = express.Router()
const { getTransactions, setTransaction, putTransaction, deleteTransaction} = require('../controllers/transactionController')

const { protect } = require('../middleware/authMiddleware')

router.get('/',protect, getTransactions)
router.post('/',protect, setTransaction)
router.put('/:id',protect, putTransaction)
router.delete('/:id',protect, deleteTransaction)

module.exports = router